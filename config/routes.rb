Rails.application.routes.draw do
  resources :games, only: [:show, :index, :create, :update]
  resources :users, only: [:show, :index, :create, :update]
  resources :images, only: [:show, :index]
<<<<<<< HEAD
  get '/games/:id/solution', to: 'games#solution'
=======

  post '/games/hint', to: 'games#hint'
>>>>>>> 624cc09f2bfd1881c5f6f96ee7e907d26f25afe3
end
