# frozen_string_literal: true

json.array! @organizations do |organization|
  json.extract! organization, :id, :name
end
