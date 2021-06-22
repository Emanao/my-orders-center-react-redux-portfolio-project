class NoteSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content
  #   belongs_to order
    attribute :order do |note| 
        {
            nr: order.nr,
            description: order.description
        }
    end
end
