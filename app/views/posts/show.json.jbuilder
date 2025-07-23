# frozen_string_literal: true

json.post do
  json.extract! @post,
    :id,
    :slug,
    :title,
    :description,
    :is_bloggable,
    :created_at,
    :updated_at,
    :status
  json.author_name @post.user.name
  json.categories @post.categories, :id, :name
  json.can_edit policy(@post).update?
end
