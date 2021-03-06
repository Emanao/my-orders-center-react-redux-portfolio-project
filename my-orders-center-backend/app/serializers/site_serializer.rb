class SiteSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name
  #   has_many :orders, serializer: SiteSerializer
    attribute :orders do |site| 
        site.orders.map{|order| 
            {   nr: order.nr,
                description: order.description
            }
        }
    end
end
