Rails.application.routes.draw do
  # Users.rb
  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
  patch '/users/:id', to: 'users#update'
  post 'users', to: 'users#create'
  delete 'users/:id', to: 'users#destroy'
  
  #Transactions.rb
  get '/transactions', to: 'transactions#index'
  post '/transactions', to: 'transaction#create'
end
