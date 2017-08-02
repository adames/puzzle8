Rails.application.routes.draw do
  resources :games
  resources :users, only: [:show, :index, :create] 
  resources :images, only: [:show, :index]
end
