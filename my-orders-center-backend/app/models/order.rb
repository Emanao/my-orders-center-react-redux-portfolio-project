class Order < ApplicationRecord
  belongs_to :site
  has_many :notes
end
