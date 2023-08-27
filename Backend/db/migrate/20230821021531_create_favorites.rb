class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.string :username
      t.integer :room_id

      t.timestamps
    end
  end
end
