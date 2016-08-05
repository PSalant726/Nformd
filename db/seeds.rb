# Seed users
User.delete_all

# NB: KEEP THE GUEST USER FOR GUEST LOGIN!
User.create(username: "Guest", password: "password", email: "Guest@noemail.com")

5.times do
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
    email: email
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
