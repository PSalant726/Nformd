Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, except: [:index]
    resource :session, only: [:create, :destroy]
  end
end
