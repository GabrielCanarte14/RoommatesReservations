class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.string :to_user
      t.string :from_user
      t.text :content

      t.timestamps
    end
  end
end
