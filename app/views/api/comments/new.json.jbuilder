json.author do
  json.extract! current_user, :fname, :lname, :username, :email, :bio, :bio_preview
end
