# frozen_string_literal: true

Rails.application.routes.draw do
  constraints(lambda { |req| req.format == :json }) do
    resources :posts, only: %i[index create show], param: :slug do
      collection do
        get :my_posts
      end
    end

    resources :categories, only: %i[index create]
    resources :organizations, only: :index
    resources :users, only: :create
    resource :session, only: [:create, :destroy]
  end

  root "home#index"
  get "*path", to: "home#index", via: :all
end
