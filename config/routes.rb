Codealia::Application.routes.draw do

  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)
  root 'static_pages#index'
  get '/about', to: 'static_pages#about', as: 'about'
  get '/code-playground', to: 'static_pages#code_playground', as: 'code_playground'
  get '/instructors', to: 'static_pages#instructors'

end
