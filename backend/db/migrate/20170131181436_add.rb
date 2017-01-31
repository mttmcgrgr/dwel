class Add < ActiveRecord::Migration
  def change
    add_column :todos, :type, :string
  end
end
