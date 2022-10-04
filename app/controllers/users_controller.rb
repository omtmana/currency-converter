class UsersController < ApplicationController
   skip_before_action :authorize, only: :create

   def index
      render json: User.all
   end

   def show
      render json: @current_user
   end

   def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
   end

   private

   def user_params
      params.permit(:first_name, :last_name, :street_number, :street_name, :apartment_number,
      :city, :state, :country, :zipcode,:name, :password_digest, :email)
   end
end
