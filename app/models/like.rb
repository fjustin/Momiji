class Like < ApplicationRecord
  belongs_to :article ,counter_cache: :like
  belongs_to :user
end
