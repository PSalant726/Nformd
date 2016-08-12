json.extract! recommend, :id, :author_id, :story_id
json.author do
  json.extract! recommend.author, :id, :fname, :lname, :username, :email
  json.avatar_url asset_path(recommend.author.avatar.url)
end
