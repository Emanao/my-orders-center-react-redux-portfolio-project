class Order < ApplicationRecord
  belongs_to :site
  has_many :notes, dependent: :destroy 

end
