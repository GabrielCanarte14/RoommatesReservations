class User < ApplicationRecord
    self.primary_key = 'username'
    
    has_many :reservations, foreign_key: 'reserver', dependent: :destroy

    has_many :room_posts, foreign_key: 'user_username', dependent: :destroy
end
  

  