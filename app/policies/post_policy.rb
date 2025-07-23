# frozen_string_literal: true

class PostPolicy
  attr_reader :user, :post

  def initialize(user, post)
    @user = user
    @post = post
  end

  def show?
    true
  end

  def edit?
    post.user_id == user.id
  end

  def update?
    post.user_id == user.id
  end

  def destroy?
    post.user_id == user.id
  end

  def create?
    true
  end

  class Scope
    attr_reader :user, :scope

    def initialize(user, scope)
      @user = user
      @scope = scope
    end

    def resolve
      scope
        .includes(:user, :categories)
        .joins(:user)
        .where(users: { organization_id: user.organization_id })
    end

    def personal
      scope
        .includes(:user, :categories)
        .where(user_id: user.id)
    end
  end
end
