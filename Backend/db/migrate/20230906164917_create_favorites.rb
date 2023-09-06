class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.string :owner
      t.string :address
      t.string :title
      t.integer :roomsAvailable
      t.integer :price
      t.string :city
      t.string :interested

      t.timestamps
    end
  end
end
