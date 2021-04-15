# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all


 User.create(
    username: "Demo",
    email: "demouser@tomobook.com",
    password: "123456",
    birthday: "11/11/1111"
)
User.create(
    username: "watson dean",
    email: "watson@tomobook.com",
    password: "123456",
    birthday: "11/11/1111"
)
User.create(
    username: "bunny stuff",
    email: "bunny@tomobook.com",
    password: "123456",
    birthday: "11/11/1111"
)

Post.delete_all
Post.create!(:body => "Body 1", author_id: 1)
Post.create!(:body => "Body 2", author_id: 7)

