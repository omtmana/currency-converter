Rails.application.routes.draw do
  # Users.rb
  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
  # get '/me', to: 'users#show'
  # post '/signup', to: 'users#create'
  post '/users', to: 'users#create'
  patch '/users/:id', to: 'users#update'
  # delete 'users/:id', to: 'users#destroy'
  
  #Transactions.rb
  get '/transactions', to: 'transactions#index'
  post '/transactions', to: 'transaction#create'
end
