class UsersController < ApplicationController
   def index
      render json: User.all
   end

  #  def show    # post '/me'
  #     @current_user = User.find(session[:user_id])
  #     render json: @current_user
  #  end

  def show
    user = User.find_by(id: params[:id])
    if user
      render json: user, status: 202
    else
      render json: {error: 'Does not exists'}, status: 404
    end
  end
   
  #  def create
  #   user = User.new(user_params)
  #   if user.save
  #     session[:user_id] = user.id
  #     render json: user, status: :created
  #   else
  #     render json: {error: 'Email Taken, Please Login'}, status: 422
  #   end
  # end

  def create
    user = User.create!(user_params)
    if user.valid?
      render json: user, status: 202
    else
      render json: {error: 'Does not exists'}, status: 404
    end
  end

  private

  def user_params
   params.permit(:first_name, :last_name, :birth_month, :birth_day, :birth_year,
   :street_number, :street_name, :apartment_number, :city, :state, :zipcode, :country, :email, :password_digest)
  end

end
