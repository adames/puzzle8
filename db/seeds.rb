# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

test_game = Game.create

game_image = GameImage.create({game: test_game})
game_image.tile1 = 'https://i.imgur.com/7b0opKX.jpg'
game_image.tile2 = 'https://i.imgur.com/62ecHXj.jpg'
game_image.tile3 = 'https://i.imgur.com/RJJV9EJ.jpg'
game_image.tile4 = 'https://i.imgur.com/izP1ZwS.jpg'
game_image.tile5 = 'https://i.imgur.com/nq4uv3y.jpg'
game_image.tile6 = 'https://i.imgur.com/o4PXWdY.jpg'
game_image.tile7 = 'https://i.imgur.com/dguc5Sa.jpg'
game_image.tile8 = 'https://i.imgur.com/bNkzzsN.jpg'
game_image.tile9 = 'https://i.imgur.com/3VWSCWD.jpg'
game_image.full_image = 'https://i.imgur.com/PiskTV4.jpg'
game_image.save
