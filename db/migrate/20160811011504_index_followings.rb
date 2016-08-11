class IndexFollowings < ActiveRecord::Migration
  def change
    add_index :followings, :follower_id
    add_index :followings, :followee_id
  end
end
