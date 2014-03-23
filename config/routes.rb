Codealia::Application.routes.draw do

  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)
  root 'static_pages#index'
  get '/about', to: 'static_pages#about', as: 'about'
  get '/codealia-ide', to: 'static_pages#codealia_ide', as: 'codealia_ide'
  get '/instructors', to: 'static_pages#instructors'

end
