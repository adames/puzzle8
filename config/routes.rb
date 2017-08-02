Rails.application.routes.draw do
  resources :games
  resources :users, only: [:show, :index, :create, :update] 
  resources :images, only: [:show, :index]
end
