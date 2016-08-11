class UniqueFollowers < ActiveRecord::Migration
  def change
    add_index :followings, [:follower_id, :followee_id], unique: true
  end
end
