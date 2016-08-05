json.extract! story, :id, :title, :body, :created_at
json.author do
  json.extract! story.author, :username, :email, :fname, :lname
end
