class Api::V1::NotesController < ApplicationController
    def index
        notes = Note.all
        render json: NoteSerializer.new(notes).serialized_json              
    end
    def create
        note = Note.create(note_params)
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
