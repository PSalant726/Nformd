# Seed Users
User.delete_all

# NB: KEEP THE GUEST USER FOR GUEST LOGIN!
User.create(
  username: "guest.user",
  password: "password",
  email: "Guest@noemail.com",
  bio: "This is a guest user account!"
)

User.create(
  username: "tommy.duek",
  password: "password",
  email: Faker::Internet.email("Tommy Duek"),
  avatar: File.open('app/assets/images/Tommy_Duek.jpeg'),
  fname: "Tommy",
  lname: "Duek",
  bio: "Head instructor at App Academy! *two thumbs up*"
)

User.create(
  username: Faker::Internet.user_name("Patrick Kovach-Long"),
  password: "password",
  email: Faker::Internet.email("Patrick Kovach-Long"),
  avatar: File.open('app/assets/images/Patrick_Kovach.jpeg'),
  fname: "Patrick",
  lname: "Kovach-Long",
  bio: "App Academy TA, molding young minds daily"
)

User.create(
  username: Faker::Internet.user_name("Leen van Besien"),
  password: "password",
  email: Faker::Internet.email("Leen Besien"),
  avatar: File.open('app/assets/images/Leen_Besien.png'),
  fname: "Leen",
  lname: "van Besien",
  bio: "App Academy TA, molding young minds daily"
)

User.create(
  username: Faker::Internet.user_name("Maurice Roach"),
  password: "password",
  email: Faker::Internet.email("TMaurice Roach"),
  avatar: File.open('app/assets/images/Maurice_Roach.jpeg'),
  fname: "Maurice",
  lname: "Roach",
  bio: "App Academy TA, molding young minds daily"
)

User.create(
  username: Faker::Internet.user_name("Gigi Campo"),
  password: "password",
  email: Faker::Internet.email("Gigi Campo"),
  avatar: File.open('app/assets/images/Gigi_Campo.jpeg'),
  fname: "Gigi",
  lname: "Campo",
  bio: "App Academy TA, molding young minds daily"
)

User.create(
  username: Faker::Internet.user_name("Fred Sladkey"),
  password: "password",
  email: Faker::Internet.email("Fred Sladkey"),
  avatar: File.open('app/assets/images/Fred_Sladkey.jpeg'),
  fname: "Fred",
  lname: "Sladkey",
  bio: "App Academy TA, molding young minds daily"
)

User.create(
  username: Faker::Internet.user_name("Daniel Colson"),
  password: "password",
  email: Faker::Internet.email("Daniel Colson"),
  avatar: File.open('app/assets/images/Daniel_Colson.jpeg'),
  fname: "Daniel",
  lname: "Colson",
  bio: "App Academy TA, molding young minds daily"
)

# Seed Stories
Story.delete_all

Story.create(
  title: "How Professional Wrestling Explains American Politics (Especially Donald Trump)",
  body: File.read('app/assets/sample_stories/wrestling_politics.txt'),
  author_id: User.where.not(username: "guest.user").sample.id
)

Story.create(
  title: "An Open Letter to President Obama: This is About Math, Not Politics",
  body: File.read('app/assets/sample_stories/wrestling_politics.txt'),
  author_id: User.where.not(username: "guest.user").sample.id
)

Story.create(
  title: "We can restore Democracy by disrupting politics. Here’s how.",
  body: File.read('app/assets/sample_stories/disrupt.txt'),
  author_id: User.where.not(username: "guest.user").sample.id
)

Story.create(
  title: "The panic over potty politics didn’t start with the transgender issue",
  body: File.read('app/assets/sample_stories/potty_politics.txt'),
  author_id: User.where.not(username: "guest.user").sample.id
)

Story.create(
  title: "Politics Is Why We Can’t Have Nice Things. Like The Internet.",
  body: File.read('app/assets/sample_stories/nice_things.txt'),
  author_id: User.where.not(username: "guest.user").sample.id
)

Story.create(
  title: "Six Rules for Talking Politics",
  body: File.read('app/assets/sample_stories/rules.txt'),
  author_id: User.where.not(username: "guest.user").sample.id
)

Story.create(
  title: "People Who Ignore Fear in Politics Brought Us Reagan and The Beginning of the Conservative Era",
  body: File.read('app/assets/sample_stories/cons_era.txt'),
  author_id: User.where.not(username: "guest.user").sample.id
)

Story.create(
  title: "Why Politics Matters, a Letter to Millenials",
  body: File.read('app/assets/sample_stories/letter_to_mils.txt'),
  author_id: User.where.not(username: "guest.user").sample.id
)

# NB: Add instructional story at the top of the feed:

Story.create(
  title: "Want to create stories of your own? Sign in as a guest!",
  body: "The guest user can respond to articles by others, and recommend articles too!",
  author_id: User.find_by(username: "guest.user").id
)

# Seed Responses
Comment.delete_all

Comment.create(
  story_id: Story.find_by(title: "Want to create stories of your own? Sign in as a guest!").id,
  author_id: User.find_by(username: "guest.user").id,
  body: "You can respond to your own stories too!"
)

comment_bodies = [
  "Wow, what a great article!",
  "This is awesome!",
  "I had no idea about this, thanks!",
  "Interesting...",
  "While I disagree with what you say, I'd defend to the death your right to say it.",
  "Fascinating insight here, thanks for sharing!",
  "Have you thought about other philosophies here?",
  "You'd be crazy not to agree with this!",
  "Love these ideas!",
  "I never thought about it this way..."
]

50.times do
  Comment.create(
    story_id: Story.where.not(title: "Want to create stories of your own? Sign in as a guest!").sample.id,
    author_id: User.where.not(username: "guest.user").sample.id,
    body: comment_bodies.sample
  )
end

# Seed Followings
Following.delete_all

20.times do
  following = Following.new(
    follower_id: User.where.not(username: "guest.user").sample.id,
    followee_id: User.where.not(username: "guest.user").sample.id
  )
  redo unless following.save
end

# Seed recommends
Recommend.delete_all

30.times do
  recommend = Recommend.new(
    author_id: User.where.not(username: "guest.user").sample.id,
    story_id: Story.where.not(title: "Want to create stories of your own? Sign in as a guest!").sample.id
  )
  redo unless recommend.save
end
