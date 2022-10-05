class User < ApplicationRecord
   has_many :transactions
   has_many :friendships, dependent: :destroy
   has_many :friends, through: :friendships

   has_secure_password

   # validates :first_name, presence: true
   # validates :last_name, presence: true
   validates :email, presence: true, uniqueness: true
end
