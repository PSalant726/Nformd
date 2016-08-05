class AddUserNames < ActiveRecord::Migration
  def change
    change_column_null :users, :email, false
    add_column :users, :fname, :string
    add_column :users, :lname, :string
  end
end
