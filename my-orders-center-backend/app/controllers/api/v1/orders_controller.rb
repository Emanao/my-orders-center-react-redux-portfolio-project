class Api::V1::OrdersController < ApplicationController
    def index
        orders = Order.all
        orders_json = OrderSerializer.new(orders).serialized_json
        render json: orders_json
    end
    def create
        order = Order.new(nr:params[:order][:nr], description:params[:order][:description])
        order.site = Site.find_or_initialize_by(name:params[:order][:site]) 
        
        
        if order.save
            render json: OrderSerializer.new(order)
        else
            render json: order.errors.fullmessages.to_sentence
        end
        
    end

    private
    def order_params
        params.require(:order).permit(:nr, :site, :description)
    end

end
