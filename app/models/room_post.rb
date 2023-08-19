class RoomPost < ApplicationRecord
    self.primary_key = 'id_room'

    belongs_to :user, foreign_key: 'user_username'
    
    has_many :reservations, foreign_key: 'room_post_id', dependent: :destroy
end
