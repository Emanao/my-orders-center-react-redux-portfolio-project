class AddShippingUrlToOrders < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :tracking_url, :string
  end
end
