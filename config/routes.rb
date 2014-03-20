Codealia::Application.routes.draw do

  root "static_pages#index"
  get '/about', to: 'static_pages#about' 
  get '/instructors', to: 'static_pages#instructors' 

  get '/legal/terms_and_conditions', to: 'static_pages#terms_and_conditions'

end
