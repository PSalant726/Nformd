class Recommend < ActiveRecord::Migration
  def change
    create_table :recommends do |t|
      t.integer :author_id, null: false
      t.integer :story_id, null: false
    end
    add_index :recommends, :author_id
    add_index :recommends, :story_id
  end
end
