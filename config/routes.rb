Codealia::Application.routes.draw do

  root "static_pages#index"
  get '/about', to: 'static_pages#about' 
  get '/instructors', to: 'static_pages#instructors' 


end
