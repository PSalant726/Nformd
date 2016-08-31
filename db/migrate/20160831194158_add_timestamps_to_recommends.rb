class AddTimestampsToRecommends < ActiveRecord::Migration
  def change
    add_column(:recommends, :created_at, :datetime, null: false)
    add_column(:recommends, :updated_at, :datetime, null: false)
  end
end
