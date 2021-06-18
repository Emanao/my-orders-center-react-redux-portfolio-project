class OrderSerializer
  include FastJsonapi::ObjectSerializer
  attributes :nr, :description, :site
end
