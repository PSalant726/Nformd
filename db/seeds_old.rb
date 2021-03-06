# Seed users
User.delete_all

# NB: KEEP THE GUEST USER FOR GUEST LOGIN!
User.create(username: "Guest", password: "password", email: "Guest@noemail.com")

15.times do
  username = [
    Faker::Superhero.name,
    Faker::StarWars.character,
    Faker::GameOfThrones.character
  ].sample
  email = Faker::Internet.email(username)
  User.create(
    username: Faker::Internet.user_name(username),
    password: "password",
    # Randomize user passwords
    # password: Faker::Internet.password(10),
    email: email,
    avatar: File.open('app/assets/images/test_avatar.png')
  )
end

# Seed stories
Story.delete_all

10.times do
  Story.create(
    title: Faker::Book.title,
    body: Faker::Hipster.paragraphs(4).join("\n\n"),
    author_id: User.where.not(username: "Guest").sample.id
  )
end

# Seed comments
Comment.delete_all

50.times do
  Comment.create(
    story_id: Story.all.sample.id,
    author_id: User.where.not(username: "Guest").sample.id,
    body: Faker::Hipster.paragraphs(1)[0]
  )
end

# Seed followings
Following.delete_all

40.times do
  following = Following.new(
    follower_id: User.all.sample.id,
    followee_id: User.all.sample.id
  )
  redo unless following.save
end

# Seed recommends
Recommend.delete_all

50.times do
  recommend = Recommend.new(
    author_id: User.all.sample.id,
    story_id: Story.all.sample.id
  )
  redo unless recommend.save
end
