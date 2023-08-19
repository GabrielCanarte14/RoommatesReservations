class RoomPost < ApplicationRecord
    validates :owner, presence: true
    validates :address, presence: true 
    validates :description, presence: true
end
