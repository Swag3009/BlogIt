json.array!(@posts) do |post|
  json.extract! post,
    :id,
    :slug,
    :title,
    :description,
    :created_at,
    :updated_at

  json.author_name post.user.name
  json.categories post.categories.map(&:name)
end
