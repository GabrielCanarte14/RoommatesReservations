class Room < ApplicationRecord
    validates :owner, presence: true
    validates :address, presence: true 
    validates :title, presence: true
    validates :price, presence: true
    validates :city, presence: true
    validates :roomsAvailable, presence: true
end
