class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password
      t.string :name
      t.string :email
      t.integer :age
      t.string :city

      t.timestamps
    end
    add_index :users, :username, unique: true
  end
end
