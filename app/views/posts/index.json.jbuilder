# frozen_string_literal: true

json.posts @paginated_posts do |post|
  json.extract! post,
    :id,
    :slug,
    :title,
    :description,
    :created_at,
    :updated_at

  json.author_name post.user.name
  json.categories post.categories, :id, :name
end

json.total_entries @paginated_posts.total_entries
