# frozen_string_literal: true

class CreateCategoriesPostsJoinTable < ActiveRecord::Migration[7.1]
  def change
    create_join_table :posts, :categories do |t|
      t.index [:post_id, :category_id], unique: true
    end
  end
end
