class OrderSerializer
  include FastJsonapi::ObjectSerializer
  attributes :nr, :description
#  belongs_to :site
    attribute :site do |order| 
        { name: order.site.name }
    end

#  has_many :notes
    attribute :notes do |order| 
        order.notes.map{|note| { content: note.content } }
    end

end
