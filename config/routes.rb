Codealia::Application.routes.draw do

  scope :blog do
    resources :posts do
      resources :comments, :only => [:create]
    end
  end

  root 'static_pages#index'
  get '/about', to: 'static_pages#about', as: 'about'
  get '/donors', to: 'static_pages#donors', as: 'donors'
  get '/mentors', to: 'static_pages#mentors', as: 'mentors'
  get '/developers', to: 'static_pages#developers', as: 'developers'
  get '/ws1', to: 'workshops#workshop1', as: 'ws1'

  get '/learning/:workshop_id', to: 'learning#show'
  get '/learning/:workshop_id/:part_id', to: 'learning#show'

  get '/legal/terms_and_conditions', to: 'static_pages#terms_and_conditions', as: 'terms_and_conditions'
  get '/html-preview', to: 'static_pages#html_preview', as: 'html_preview'

  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)
  get '/code-playground', to: 'static_pages#code_playground', as: 'code_playground'
end
