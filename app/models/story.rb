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

  has_many(
    :comments,
    class_name: "Comment",
    foreign_key: :story_id,
    primary_key: :id
  )

  has_many(
    :recommends,
    class_name: "Recommend",
    foreign_key: :story_id,
    primary_key: :id
  )

  def read_time
    if (self.body.length / 275.0) < 1.0
      "1 min read"
    else
      (self.body.length / 275).to_s + " min read"
    end
  end

  def preview
    text = Nokogiri::HTML(self.body).xpath('//text()').to_s
    prev = text.split(" ").first(25)
    if text.split(" ").length <= 25
      return prev.join(" ")
    else
      return prev.join(" ") + "..."
    end
  end

  def num_comments
    num_coms = self.comments.length
    if num_coms == 1
      num_coms.to_s + " response"
    elsif num_coms == 0
      ""
    else
      num_coms.to_s + " responses"
    end
  end

  def num_recommends
    self.recommends.length
  end
end
