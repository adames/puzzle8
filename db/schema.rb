# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170802142343) do

  create_table "games", force: :cascade do |t|
    t.integer "image_id"
    t.integer "user_id"
    t.integer "moves", default: 0
    t.string "tiles_order"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["image_id"], name: "index_games_on_image_id"
    t.index ["user_id"], name: "index_games_on_user_id"
  end

  create_table "images", force: :cascade do |t|
    t.string "tile1"
    t.string "tile2"
    t.string "tile3"
    t.string "tile4"
    t.string "tile5"
    t.string "tile6"
    t.string "tile7"
    t.string "tile8"
    t.string "tile9"
    t.string "full_image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
