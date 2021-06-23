class NoteSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :created_at
  #   belongs_to order
    attribute :order do |note| 
        {
            id: note.order_id
        }
    end
end
