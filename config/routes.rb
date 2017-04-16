Codealia::Application.routes.draw do

  # scope :blog do
  #   resources :posts do
  #     resources :comments, only: [:create]
  #   end
  # end

  get '/templates/*template_name', to: 'templates#get_template'

  root 'static_pages#index'
  get '/about', to: 'static_pages#about', as: 'about'
  get '/donors', to: 'static_pages#donors', as: 'donors'
  get '/mentors', to: 'static_pages#mentors', as: 'mentors'
  get '/developers', to: 'static_pages#developers', as: 'developers'

  get '/learning/:workshop_id', to: 'learning#show'
  get '/learning/:workshop_id/:part_id', to: 'learning#show'

  get '/legal/terms_and_conditions', to: 'static_pages#terms_and_conditions', as: 'terms_and_conditions'
  get '/html-preview', to: 'static_pages#html_preview', as: 'html_preview'

  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)
end
