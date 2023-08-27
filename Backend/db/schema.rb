# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_08_21_021531) do
  create_table "favorites", force: :cascade do |t|
    t.string "username"
    t.integer "room_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "messages", force: :cascade do |t|
    t.string "to_user"
    t.string "from_user"
    t.text "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reservations", force: :cascade do |t|
    t.integer "id_reservations"
    t.integer "roomPost"
    t.string "reserver"
    t.date "start_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "room_posts", force: :cascade do |t|
    t.integer "id_room"
    t.string "owner"
    t.string "address"
    t.string "description"
    t.integer "rooms_available"
    t.date "date_available"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "name"
    t.string "email"
    t.integer "age"
    t.string "city"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end