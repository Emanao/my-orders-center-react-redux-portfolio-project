Rails.application.routes.draw do
    namespace :api do
        namespace :v1 do
            resources :sites
            resources :orders do
                resources :notes
            end
         
        end
    end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
