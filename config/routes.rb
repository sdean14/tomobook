Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show, :index] 
    resources :friendships, only: [:create, :destroy] 
    resource :session, only: [:create, :destroy]
    resources :posts, except: [:new, :edit]
    resources :comments, except: [:new, :edit]
  end
 
  root 'static_pages#root'
end
