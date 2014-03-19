Codealia::Application.routes.draw do

  root 'static_pages#index'
  get '/about', to: 'static_pages#about', as: 'about'
  get '/codealia-ide', to: 'static_pages#codealia_ide', as: 'codealia_ide'

end
