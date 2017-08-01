Rails.application.routes.draw do
  resources :games
  resources :game_images, only: [:show, :index]
end
