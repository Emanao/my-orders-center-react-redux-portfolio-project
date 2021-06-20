class OrderSerializer
  include FastJsonapi::ObjectSerializer
  attributes :nr, :description
#   belongs_to :site
  attribute :site do |order|
    {
        name: order.site.name
    }
  end

end
