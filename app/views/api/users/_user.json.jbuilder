json.extract! user, :id, :username, :email, :fname, :lname, :bio, :bio_preview, :recommended_stories
json.avatar_url asset_path(user.avatar.url)
