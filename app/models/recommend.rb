# == Schema Information
#
# Table name: recommends
#
#  id        :integer          not null, primary key
#  author_id :integer          not null
#  story_id  :integer          not null
#

class Recommend < ActiveRecord::Base
  validates :author_id, :story_id, presence: true
  validates :author_id, uniqueness: { scope: :story_id }
  validates :story_id, uniqueness: { scope: :author_id }

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id
  )

  belongs_to(
    :story,
    class_name: "Story",
    foreign_key: :story_id,
    primary_key: :id
  )
end
