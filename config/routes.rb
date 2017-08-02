Rails.application.routes.draw do
  resources :games
  resources :images, only: [:show, :index]
end
