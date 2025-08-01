# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :name, null: false, limit: 100
      t.string :email, null: false
      t.string :password_digest, null: false
      t.references :organization, null: false, foreign_key: true
      t.timestamps
    end
  end
end
