class User < ApplicationRecord
    self.primary_key = 'username'
    
    has_many :reservations, foreign_key: 'reserver', dependent: :destroy

    has_many :rooms, foreign_key: 'owner', dependent: :destroy

    validates:username, presence: true
    validates:password, presence: true
    validates:name, presence:true 
    validates:email, presence: true
    validates:age, presence: true
    validates:city, presence: true
end
