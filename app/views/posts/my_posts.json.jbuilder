# frozen_string_literal: true

json.posts @paginated_posts do |post|
  json.extract! post,
    :id,
    :slug,
    :title,
    :updated_at,
    :status

  json.author_name post.user.name
  json.categories post.categories, :id, :name
end

json.total_entries @paginated_posts.total_entries
