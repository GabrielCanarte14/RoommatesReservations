class CreateRoomPosts < ActiveRecord::Migration[7.0]
  def change
    create_table :room_posts do |t|
      t.integer :id_room
      t.string :owner
      t.string :address
      t.string :description
      t.integer :rooms_available
      t.date :date_available

      t.timestamps
    end
  end
end
