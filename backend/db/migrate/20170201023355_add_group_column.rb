class AddGroupColumn < ActiveRecord::Migration
  def change
    add_column :groups, :token, :string
    add_column :groups, :tenant_id, :integer
    add_column :groups, :landlord_id, :integer
    remove_column :groups, :user1_id
    remove_column :groups, :user2_id
  end
end
