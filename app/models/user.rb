class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :articles
  has_many :likes, dependent: :destroy
  validates :name,uniqueness: true

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable



  # deviseでemailを不必要にする
  def email_required?
    false
  end
  def email_changed?
    false
  end
end
