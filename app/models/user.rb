# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  username            :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  email               :string           not null
#  fname               :string
#  lname               :string
#  bio                 :text
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, :email, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }

  after_initialize :ensure_session_token

  has_attached_file :avatar, default_url: "default_avatar.jpg"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  has_many(
    :stories,
    class_name: "Story",
    foreign_key: :author_id,
    primary_key: :id
  )

  has_many(
    :comments,
    class_name: "Comment",
    foreign_key: :author_id,
    primary_key: :id
  )

  has_many(
    :in_followings,
    class_name: "Following",
    foreign_key: :followee_id,
    primary_key: :id
  )

  has_many(
    :out_followings,
    class_name: "Following",
    foreign_key: :follower_id,
    primary_key: :id
  )

  has_many(
    :followers,
    through: :in_followings,
    source: :follower
  )

  has_many(
    :followees,
    through: :out_followings,
    source: :followee
  )

  has_many(
    :recommends,
    class_name: "Recommend",
    foreign_key: :author_id,
    primary_key: :id
  )

  attr_reader :password

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    return @user if @user && @user.is_password?(password)
    nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  def bio_preview
    if self.bio
      prev = self.bio.split(" ")
      if self.bio.split(" ").length <= 12
        return prev.join(" ")
      else
        return prev.first(12).join(" ") + "..."
      end
    end
  end

  def recommended_stories
    recs = {};
    self.recommends.each do |recommend|
      recs[recommend.id] = recommend.story_id
    end
    recs
  end

  def recommended_story_ids
    recs = [];
    self.recommends.each do |recommend|
      recs << recommend.story_id
    end
    recs
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
