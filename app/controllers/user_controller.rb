class UserController < ApplicationController
#   get '/users', to: 'users#index'
#   get '/users/:id', to: 'users#show'
#   # get '/me', to: 'users#show'
#   post '/signup', to: 'users#create'
#   patch '/users/:id', to: 'users#update'
   def index
      render json: User.all
   end
end
