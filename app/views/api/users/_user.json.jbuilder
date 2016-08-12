json.extract! user, :id, :username, :email, :fname, :lname, :bio, :bio_preview, :recommended_stories, :recommended_story_ids
json.avatar_url asset_path(user.avatar.url)
