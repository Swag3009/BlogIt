json.post do
  json.extract! @post,
    :id,
    :slug,
    :title,
    :description,
    :is_bloggable,
    :created_at,
    :updated_at
  json.author_name @post.user.name
  json.categories @post.categories, :id, :name
end

