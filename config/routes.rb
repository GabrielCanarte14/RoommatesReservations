Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :room_posts, only: [:new, :create, :index]
  resources :users, only: [:new, :create, :index]

end
