class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :todo_id
      t.integer :user_id
      t.text :comment

      t.timestamps null: false
    end
  end
end
