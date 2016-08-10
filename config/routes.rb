Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:new, :create, :destroy]
    resources :users, except: [:index]
    resources :stories
    resources :comments
  end
end
