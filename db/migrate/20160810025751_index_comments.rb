class IndexComments < ActiveRecord::Migration
  def change
    add_index :comments, :author_id
    add_index :comments, :story_id
  end
end
