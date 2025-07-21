# frozen_string_literal: true

class PostsController < ApplicationController
  def index
    current_org_id = current_user.organization_id
    posts = Post
      .includes(:user, :categories)
      .joins(:user)
      .where(users: { organization_id: current_org_id })
      .order(updated_at: :desc)

    if params[:categories].present?
      category_ids = params[:categories].split(",").map(&:to_i)
      posts = posts
        .joins(:categories)
        .where(categories: { id: category_ids })
        .distinct
    end

    @paginated_posts = posts.paginate(page: params[:page], per_page: params[:per_page] || 5)
    render
  end

  def create
    post = Post.new(post_params)
    post.user = current_user
    post.organization = current_user.organization
    post.save!
    render_notice(t("successfully_created", entity: "Post"))
  end

  def show
    @post = Post.includes(:user, :categories).find_by!(slug: params[:slug])
    render
  end

  private

    def post_params
      params.require(:post).permit(:title, :description, :is_bloggable, category_ids: [])
    end
end
