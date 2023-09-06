Rails.application.routes.draw do

  namespace :api do
    root "users#index"
    resources :rooms, only:[:index, :show, :create, :update, :destroy] do
      collection do
        get 'except_owner/:owner', to: 'rooms#rooms_except_owner', as: 'except_owner'
        get 'byowner/:owner', to: 'rooms#rooms_byowner', as: 'byowner'
      end
    end
    resources :favorites, only:[:index, :show, :create, :destroy] do
      collection do
        get 'except_owner/:owner', to: 'favorites#favorites_except_owner', as: 'except_owner'
        get 'byowner/:owner', to: 'favorites#favorites_byowner', as: 'byowner'
      end
    end
    resources :users, only:[:index, :show, :create, :destroy]
    resources :messages, only:[:index, :show, :create, :destroy] do
      collection do
        get 'except_owner/:owner', to: 'messages#messages_except_owner', as: 'except_owner'
        get 'byowner/:owner', to: 'messages#messages_byowner', as: 'byowner'
      end
    end
    resources :users, only:[:index, :show, :create, :destroy]
  end 





  get '/users/by_city', to: 'users#by_city', as: 'users_by_city'  

  
end