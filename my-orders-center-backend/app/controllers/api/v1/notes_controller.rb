class Api::V1::NotesController < ApplicationController
    def index
        # byebug
        order = Order.find(params[:order_id])
        if !!order
            notes = order.notes
            render json: NoteSerializer.new(notes).serialized_json
        else
            render json: {
                error: "Order doesnot exist"
            }
        end
        
        
    end
    def create
        note = Note.create(content: params[:content], order_id:params[:order_id])
        # byebug
        render json: NoteSerializer.new(note).serialized_json
    end
end
