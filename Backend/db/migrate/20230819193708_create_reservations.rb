class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.integer :id_reservations
      t.integer :roomPost
      t.string :reserver
      t.date :start_date

      t.timestamps
    end
  end
end
