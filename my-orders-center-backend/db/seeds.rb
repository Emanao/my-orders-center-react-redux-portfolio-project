# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



Note.delete_all
ActiveRecord::Base.connection.reset_pk_sequence!("note")

Order.delete_all
ActiveRecord::Base.connection.reset_pk_sequence!("order")

Site.delete_all
ActiveRecord::Base.connection.reset_pk_sequence!("site")

order1 = Order.new(nr:123456, description:"Water Bottles")
order1.build_site(name:"Takeya")
order1.notes.build(content: "Great Bottles")
order1.notes.build(content: "Deal")
order1.save

order2 = Order.new(nr:6543221, description:"Dress")
order2.build_site(name:"Zara")
order2.notes.build(content: "For the party on the 06/30/2021")
order2.save

order3 = Order.new(nr:6543221, description:"iPhone")
order3.build_site(name:"Apple")
order3.notes.build(content: "Returned bc the screen didnt work")
order3.save

