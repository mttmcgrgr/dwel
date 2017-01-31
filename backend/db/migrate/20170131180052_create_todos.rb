class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.integer :group_id, null: false
      t.text :body, null: false
      t.boolean :resolved, null: false

      t.timestamps null: false
    end
    add_index :todos, :group_id
  end
end
