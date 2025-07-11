# frozen_string_literal: true

class PostsController < ApplicationController
  def index
    @posts = Post.includes(:user, :categories).order(updated_at: :desc)
    render
  end

  def create
    post = Post.new(post_params)
    post.save!
    render_notice(t("successfully_created"))
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
