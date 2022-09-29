class UsersController < ApplicationController
#   get '/users', to: 'users#index'
#   get '/users/:id', to: 'users#show'
#   # get '/me', to: 'users#show'
#   post '/signup', to: 'users#create'
#   patch '/users/:id', to: 'users#update'
   def index
      render json: User.all
   end

   def show
      user = User.find_by!(id: params[:id])
      if user.valid?
         render json: user, status: 202
      else
         render json: {error: 'Does not exist'}, status: 404
      end
   end

   def create
   end
end
