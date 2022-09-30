class User < ApplicationRecord
   has_many :transactions
   has_many :friendships, dependent: :destroy
   has_many :friends, through: :friendships
end
