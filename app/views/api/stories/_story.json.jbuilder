json.extract! story, :id, :title, :body, :created_at, :read_time, :preview
json.author do
  json.extract! story.author, :id, :fname, :lname, :username, :email, :bio, :bio_preview
end
