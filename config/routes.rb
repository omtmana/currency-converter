Rails.application.routes.draw do
  # Users Controller
  get '/users', to: "users#index" 
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  
  # Sessions Controller
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  #Transactions Controller
  get '/transactions', to: 'transactions#index'
  post '/transactions', to: 'transaction#create'

  #Friendships Controller
  post '/friendships', to: 'friendships#create'
end
