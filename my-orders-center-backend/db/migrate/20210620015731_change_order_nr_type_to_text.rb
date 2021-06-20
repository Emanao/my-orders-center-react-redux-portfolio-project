class ChangeOrderNrTypeToText < ActiveRecord::Migration[6.1]
  def change
    change_column :orders, :nr, :text
  end
end
