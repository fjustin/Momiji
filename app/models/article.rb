class Article < ApplicationRecord
  enum status: {draft: 0,published: 1}
  validates :title,:content,:status, presence: true
  validates :status,inclusion: {in: Article.statuses.keys}
  belongs_to :user
  has_many :likes , dependent: :destroy
  mount_uploader :image, ImageUploader
  acts_as_taggable

  def like_user(id)
    likes.find_by(user_id: id)
  end
end
