class Article < ApplicationRecord
  enum status: {draft: 0,published: 1}
  validates :title,:content,:status, presence: true
  validates :status,inclusion: {in: Article.statuses.keys}



  belongs_to :user
  mount_uploader :image, ImageUploader
  acts_as_taggable
end
