# frozen_string_literal: true

class User < ApplicationRecord
  MAX_NAME_LENGTH = 100
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  belongs_to :organization
  has_many :posts

  has_secure_password
  validates :name, presence: true, length: { maximum: MAX_NAME_LENGTH }
  validates :email, presence: true, format: { with: VALID_EMAIL_REGEX }
end
