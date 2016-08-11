json.extract! following, :follower_id, :followee_id
json.follower do
  json.extract! following.follower, :id, :fname, :lname, :username, :email
  json.avatar_url asset_path(following.follower.avatar.url)
end
json.followee do
  json.extract! following.followee, :id, :fname, :lname, :username, :email
  json.avatar_url asset_path(following.followee.avatar.url)
end
