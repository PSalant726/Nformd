json.extract! story, :id, :title, :body, :created_at, :read_time, :preview, :num_comments, :num_recommends
json.author do
  json.extract! story.author, :id, :fname, :lname, :username, :email, :bio, :bio_preview
  json.avatar_url asset_path(story.author.avatar.url)
end
json.recommends do
  json.array!(story.recommends)
end
