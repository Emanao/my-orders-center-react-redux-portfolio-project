class Api::V1::OrdersController < ApplicationController
    def index
        orders = Order.all
        if orders.empty?
            render json: {
                error: "No created orders yet"
            }
        else
            render json: OrderSerializer.new(orders).serialized_json
        end
        
    end
    def create
        order = Order.new(nr:params[:order][:nr], description:params[:order][:description])
        order.site = Site.find_or_initialize_by(name:params[:order][:site]) 
        
        if order.save
            render json: OrderSerializer.new(order).serialized_json
        else
            render json: order.errors.fullmessages.to_sentence
        end
        
    end

    def destroy
        order = Order.find(params[:id])
        if !!order
            order.destroy
            render json: OrderSerializer.new(order).serialized_json
        else
            render json: {error: "Order not found and not destroyed"}
        end
    end

    private
    def order_params
        params.require(:order).permit(:nr, :site, :description)
    end

end
