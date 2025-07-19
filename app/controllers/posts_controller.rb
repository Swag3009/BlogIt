# frozen_string_literal: true

class PostsController < ApplicationController
  def index
    if params[:categories].present?
      category_ids = params[:categories].split(",").map(&:to_i)
      @posts = Post
        .includes(:user, :categories)
        .joins(:categories)
        .where(categories: { id: category_ids })
        .distinct
        .order(updated_at: :desc)
    else
      @posts = Post.includes(:user, :categories).order(updated_at: :desc)
    end

    @paginated_posts = @posts.paginate(page: params[:page], per_page: params[:per_page] || 5)
    render
  end

  def create
    post = Post.new(post_params)
    current_user = User.first
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
