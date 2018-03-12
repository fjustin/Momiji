class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :articles
  has_many :likes, dependent: :destroy
  validates :name,presence: true,length: {maximum: 50}

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
