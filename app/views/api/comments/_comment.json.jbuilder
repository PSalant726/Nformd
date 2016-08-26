json.extract! comment, :id, :author_id, :story_id, :body, :created_at, :read_time
json.author do
  json.extract! comment.author, :id, :fname, :lname, :username, :email
  json.avatar_url asset_path(comment.author.avatar.url)
end
json.story do
  json.extract! comment.story, :title
end
