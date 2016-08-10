class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false
      t.integer :story_id, null: false
      t.text :body
      t.timestamps null: false
    end
  end
end
