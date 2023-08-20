Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  resources :room_posts, only: [:new, :create, :index, :edit, :update]

  resources :room_posts do
    member do
      get 'view', to: 'room_posts#view'
    end
  end


end