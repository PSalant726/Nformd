json.extract! story, :id, :title, :body, :created_at, :read_time, :preview
json.author do
  json.extract! story.author, :fname, :lname, :username, :email
end
