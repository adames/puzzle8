# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

image = Image.new
image.tile1 = 'https://i.imgur.com/7b0opKX.jpg'
image.tile2 = 'https://i.imgur.com/62ecHXj.jpg'
image.tile3 = 'https://i.imgur.com/RJJV9EJ.jpg'
image.tile4 = 'https://i.imgur.com/izP1ZwS.jpg'
image.tile5 = 'https://i.imgur.com/nq4uv3y.jpg'
image.tile6 = 'https://i.imgur.com/o4PXWdY.jpg'
image.tile7 = 'https://i.imgur.com/dguc5Sa.jpg'
image.tile8 = 'https://i.imgur.com/bNkzzsN.jpg'
image.tile9 = 'https://i.imgur.com/3VWSCWD.jpg'
image.full_image = 'https://i.imgur.com/PiskTV4.jpg'
image.save

image2 = Image.new
image2.tile1 = 'https://i.imgur.com/7b0opKX.jpg'
image2.tile2 = 'https://i.imgur.com/62ecHXj.jpg'
image2.tile3 = 'https://i.imgur.com/RJJV9EJ.jpg'
image2.tile4 = 'https://i.imgur.com/izP1ZwS.jpg'
image2.tile5 = 'https://i.imgur.com/nq4uv3y.jpg'
image2.tile6 = 'https://i.imgur.com/o4PXWdY.jpg'
image2.tile7 = 'https://i.imgur.com/dguc5Sa.jpg'
image2.tile8 = 'https://i.imgur.com/bNkzzsN.jpg'
image2.tile9 = 'http://i.imgur.com/uvFEcJN.jpg'
image2.full_image = 'http://i.imgur.com/uvFEcJN.jpg'
image2.save
