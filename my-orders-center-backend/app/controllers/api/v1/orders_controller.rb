class Api::V1::OrdersController < ApplicationController
    def index
        orders = Order.all
        orders_json = OrderSerializer.new(orders).serialized_json
        render json: orders_json
    end
    def create
        # byebug
    end
    private
    def order_params
        params.require(:order).permit(:nr, :site, :notes)
    end

end
