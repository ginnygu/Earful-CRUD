Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :artists do
    resources :albums 
  end
  resources :albums do
    resources :songs
  end
  resources :albums
  resources :songs
end
