class Api::V1::OrdersController < ApplicationController
    def index
        orders = Order.all
        orders_json = OrderSerializer.new(orders).serialized_json
        render json: orders_json
    end
end
