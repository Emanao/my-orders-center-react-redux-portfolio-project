class Api::V1::NotesController < ApplicationController
    def index
        # byebug
        # order = Order.find(params[:order_id])
        # if !!order
        notes = Note.all
        render json: NoteSerializer.new(notes).serialized_json
        # else
        #     render json: {
        #         error: "Order doesnot exist"
        #     }
        # end
        
        
    end
    def create

        note = Note.create(content: params[:content], order_id:params[:order_id])
        render json: NoteSerializer.new(note).serialized_json
    end
    def destroy
        note = Note.find(params[:id])
        if !!note
            note.destroy
            render json: NoteSerializer.new(note).serialized_json
        else
            render json: {error: "Note not found and not destroyed"}
        end
    end
    private
    def note_params
        params.require(:note).permit(:content, :order_id)
    end
end
