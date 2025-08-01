# frozen_string_literal: true

class PostsController < ApplicationController
  after_action :verify_authorized, except: %i[index my_posts]
  after_action :verify_policy_scoped, only: %i[index]

  def index
    posts = policy_scope(Post).where(status: "published")
    posts = filter_by_categories(posts)
    @paginated_posts = paginate_posts(posts)
  end

  def my_posts
    posts = PostPolicy::Scope.new(current_user, Post).personal
    posts = filter_by_categories(posts)
    @paginated_posts = paginate_posts(posts)
  end

  def create
    post = Post.new(post_params)
    post.user = current_user
    post.organization = current_user.organization
    authorize post
    post.save!
    render_notice(t("successfully_created", entity: "Post"))
  end

  def show
    @post = Post.includes(:user, :categories).find_by!(slug: params[:slug])
    authorize @post
    render
  end

  def update
    post = Post.find_by!(slug: params[:slug])
    authorize post
    post.update!(post_params)
    render_notice(t("successfully_updated", entity: "Post"))
  end

  def destroy
    post = Post.find_by!(slug: params[:slug])
    authorize post
    post.destroy!
    render_notice(t("successfully_deleted", entity: "Post"))
  end

  private

    def filter_by_categories(posts)
      return posts unless params[:categories].present?

      category_ids = params[:categories].split(",").map(&:to_i)
      posts.joins(:categories).where(categories: { id: category_ids }).distinct
    end

    def paginate_posts(posts)
      posts.order(updated_at: :desc)
        .paginate(page: params[:page], per_page: params[:per_page] || 5)
    end

    def post_params
      return {} unless params[:post].present?

      params.require(:post).permit(:title, :description, :status, :is_bloggable, category_ids: [])
    end
end
