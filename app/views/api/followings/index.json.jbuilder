json.followers @followers do |follower|
  json.partial! "api/users/user", user: follower
end
json.followees @followees do |followee|
  json.partial! "api/users/user", user: followee
end
