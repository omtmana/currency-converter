class UsersController < ApplicationController
   skip_before_action :authorize, only: :create

   def index
      render json: User.all
   end

   def show
    @current_user = User.find(session[:user_id])
    render json: @current_user
   end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: {error: 'Email Taken, Please Login'}, status: 422
    end
  end   

   def update 
    user = User.find_by(id: session[:user_id])
    if user.update(patch_params)
      render json: user, status: :created
    else 
      render json: {error: user.errors.full_messages}
    end
  end



   private

   def user_params
      params.permit(:first_name, :last_name, :street_number, :street_name, :apartment_number,
      :city, :state, :country, :zipcode,:name, :password, :email)
   end
end
