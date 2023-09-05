Rails.application.routes.draw do
  get 'favorites/new'
  get 'favorites/create'
  get 'favorites/index'
  get 'messages/new'
  get 'messages/create'
  get 'messages/index'

  namespace :api do
    root "users#index"
    resources :rooms, only:[:index, :show, :create, :update, :destroy]
    resources :users, only:[:index, :show, :create, :destroy]
  end 



  resources :messages, only: [:new, :create, :index]
  resources :favorites, only: [:new, :create, :index]

  get '/users/by_city', to: 'users#by_city', as: 'users_by_city'  
  get 'received_messages', to: 'messages#received', as: 'received_messages'
  get 'favorite_users', to: 'users#favorite', as: 'favorite_users'
  get 'messages/sent', to: 'messages#sent', as: 'sent_messages'
  

  resources :room_posts do
    member do
      post 'favorite', to: 'room_posts#favorite'
    end
  end
end