Rails.application.routes.draw do
  resources :games, only: [:show, :index, :create, :update]
  resources :users, only: [:show, :index, :create, :update]
  resources :images, only: [:show, :index]

  post '/games/hint', to: 'games#hint'
end
