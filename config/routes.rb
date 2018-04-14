
Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :articles do
    resources :likes,only: [:create,:destroy]
    patch :toggle_status
  end

  resources :users, only: [:index, :show] do
    get :likes, on: :member
  end
  root 'articles#index'
  get 'tags/:tag', to: 'articles#index', as: :tag
  get 'about/show'
end
