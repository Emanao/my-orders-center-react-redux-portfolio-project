class Api::V1::SitesController < ApplicationController
    def index
        sites = Site.all
        render json: SiteSerializer.new(sites)
    end
    def create

    end
end
