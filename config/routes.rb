Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:new, :create, :destroy]
    resources :users, except: [:index] do
      resources :followings, only: [:index, :create]
    end
    resources :followings, only: [:destroy]
    resources :stories do
        get 'comments' => 'comments#index_by_story'
    end
    resources :comments, except: [:show]
  end
end
