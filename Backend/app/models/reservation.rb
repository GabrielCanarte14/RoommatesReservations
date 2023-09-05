class Reservation < ApplicationRecord
    self.primary_key = 'id_reservations'

    belongs_to :user, foreign_key: 'reserver'

    belongs_to :room, foreign_key: 'room'
end
