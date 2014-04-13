Codealia::Application.routes.draw do

  root 'static_pages#index'
  get '/about', to: 'static_pages#about', as: 'about'
  get '/donors', to: 'static_pages#donors', as: 'donors'
  get '/mentors', to: 'static_pages#mentors', as: 'mentors'
  get '/developers', to: 'static_pages#developers', as: 'developers'
  get '/lesson1', to: redirect('public/lesson1.html'), as: 'lesson1'

  get '/legal/terms_and_conditions', to: 'static_pages#terms_and_conditions', as: 'terms_and_conditions'

  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)
  get '/code-playground', to: 'static_pages#code_playground', as: 'code_playground'

end
