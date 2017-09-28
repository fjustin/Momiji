class Article < ApplicationRecord
  enum status: {draft: 0,published: 1}
  validates :title,:content,:status, presence: true
  validates :status,inclusion: {in: Article.statuses.keys}

  def toggle_status!
    if draft?
      published!
    else
      draft!
    end
  end



  mount_uploader :image, ImageUploader
  acts_as_taggable
end
