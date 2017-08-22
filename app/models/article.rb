class Article < ApplicationRecord
  validates :title, presence: true
  validates :content, presence: true
  mount_uploader :image, ImageUploader
end
