Codealia::Application.routes.draw do


  root "static_pages#index"
  get '/about', to: 'static_pages#about' 
  get '/instructors', to: 'static_pages#instructors'
  get '/donors', to: 'static_pages#donors'
  get '/mentors', to: 'static_pages#mentors'
  get '/developers', to: 'static_pages#developers'
  get '/legal/terms_and_conditions', to: 'static_pages#terms_and_conditions'

end
