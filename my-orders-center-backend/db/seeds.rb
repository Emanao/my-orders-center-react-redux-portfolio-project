# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Order.delete_all
ActiveRecord::Base.connection.reset_pk_sequence!("order")

Note.delete_all
ActiveRecord::Base.connection.reset_pk_sequence!("note")

Site.delete_all
ActiveRecord::Base.connection.reset_pk_sequence!("site")

order1 = Order.new(nr:123456, description:"Water Bottles")
order1.build_site(name:"Takeya")
order1.notes.build(content: "Deal")
order1.save
