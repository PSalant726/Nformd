Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:new, :create, :destroy]
    resources :users, except: [:index] do
      resources :followings, only: [:index, :create]
      get 'comments' => 'comments#index_by_author'
      get 'recommends' => 'recommends#index_by_author'
    end
    resources :stories do
        get 'comments' => 'comments#index_by_story'
        get 'recommends' => 'recommends#index_by_story'
    end
    resources :comments, except: [:show]
    resources :followings, only: [:destroy]
  end
end
