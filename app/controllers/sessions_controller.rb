class SessionsController < ApplicationController
  #  skip_before_action :authorize, only: :create
    skip_before_action :authorize, only: :create

  #  create method in ruby means finding 
  def create
    user = User.find_by(email: params[:email])
    if (user&.authenticate(params[:password]))
      session[:user_id] = user.id
      render json: user, status: 202
    else
      render json: {error: {login: "Invalid Username or Password"}}, status: 404
    end
    # rescue ActiveRecord::RecordInvalid => e
    #   render json: {errors: 'Error Message'}, status: 404
    # end
  end

  def destroy
    session.delete :user_id
    head :no_content
  end

  private

  def authenticate (user, password)
    if (user.password == password)
      return true
    else
      return false
    end
  end


end
