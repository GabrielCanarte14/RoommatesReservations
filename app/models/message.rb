class Message < ApplicationRecord
    validates :to_user, presence: true
    validates :from_user, presence: true
    validates :content, presence: true
  end
  