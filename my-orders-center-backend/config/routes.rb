Rails.application.routes.draw do
  resources :notes
  resources :orders
    namespace :api do
        namespace :v1 do
                                resources :sites          
        end
    end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
