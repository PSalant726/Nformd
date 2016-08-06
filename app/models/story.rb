# == Schema Information
#
# Table name: stories
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Story < ActiveRecord::Base
  validates :title, :body, :author_id, presence: true

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id
  )

  def read_time
    (self.body.length / 275).to_s + " min read"
  end

  def preview
    prev = self.body.split(" ").first(25)
    prev.pop
    if self.body.split(" ").length <= 40
      return prev.join(" ")
    else
      return prev.join(" ") + "..."
    end
  end
end
