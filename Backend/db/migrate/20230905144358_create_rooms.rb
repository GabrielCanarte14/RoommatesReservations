class CreateRooms < ActiveRecord::Migration[7.0]
  def change
    create_table :rooms do |t|
      t.string :owner
      t.string :address
      t.string :title
      t.integer :roomsAvailable
      t.integer :price
      t.string :city

      t.timestamps
    end
  end
end
