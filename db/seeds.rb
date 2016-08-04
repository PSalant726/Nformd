# Seed users
User.delete_all

# NB: KEEP THE GUEST USER FOR GUEST LOGIN!
User.create(username: "Guest", password: "password", email: "Guest@noemail.com")

5.times do
  username = Faker::Internet.user_name
  email = Faker::Internet.email(username)
  User.create(
    username: username,
    password: "password",
    # Randomize user passwords
    # password: Faker::Internet.password(10),
    email: email
  )
end

# Seed stories
Story.delete_all

lorem_ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus in lectus accumsan semper. Integer ut augue quis erat varius rhoncus at sit amet nulla. Vivamus aliquet at nulla vitae aliquam. Ut in dictum massa. Nulla pharetra dui congue, lobortis arcu vel, feugiat arcu. Nulla eget felis et lectus ultricies interdum. Maecenas mattis sed elit ac tristique. Praesent ultrices tincidunt molestie. Proin id orci lacus. Nulla at fringilla massa. Praesent hendrerit ex nisi, id cursus eros euismod id. Phasellus vulputate, erat sed porta imperdiet, metus arcu imperdiet quam, at ullamcorper turpis neque non felis.\n\nAliquam porta laoreet leo nec consequat. Morbi elementum et lorem vitae fermentum. In vestibulum viverra ex, luctus condimentum ipsum placerat quis. Donec ante dui, gravida in mollis vitae, tincidunt id mauris. Maecenas a aliquet dui. Nam sit amet iaculis felis. Sed felis sapien, cursus nec molestie vel, gravida non urna. Aliquam tincidunt malesuada urna, ut tempus elit condimentum non. Quisque placerat, diam sit amet fringilla volutpat, sapien ante iaculis lacus, eu maximus felis purus vitae lectus. Curabitur dignissim euismod sem vitae aliquam.\n\nPraesent aliquet metus in faucibus dictum. Duis dignissim placerat sapien, eu tempus nulla finibus quis. Donec interdum luctus orci, sit amet pellentesque massa ornare eu. In cursus, velit convallis efficitur hendrerit, urna nisi imperdiet orci, non dictum magna metus id leo. Aenean lectus dui, consequat sit amet tincidunt semper, posuere sed augue. Proin ut nulla venenatis sapien auctor iaculis. Sed id rutrum erat. Morbi vestibulum nibh non nisl viverra blandit. Phasellus et sagittis leo, ut suscipit ligula. Nulla quis augue vel quam imperdiet lacinia id sit amet odio. Morbi eu risus nisl. Suspendisse et erat in eros rutrum facilisis ut a urna. Sed nec ante vel massa varius accumsan. Sed efficitur lacus libero, at consectetur tortor sollicitudin sit amet.\n\nQuisque vel sapien in nunc eleifend aliquam eu et purus. Proin fringilla ullamcorper urna quis ultrices. Phasellus bibendum magna pharetra nibh porta, quis dapibus diam blandit. Pellentesque vel enim ut odio facilisis accumsan at at nisl. Quisque arcu felis, blandit in sagittis vel, condimentum nec velit. Vestibulum venenatis feugiat augue sed condimentum. Sed nunc arcu, convallis aliquet mi non, pretium mattis nisi. Vivamus varius consectetur sagittis.\n\nIn tristique porttitor sem id tempus. Etiam porta non leo at porttitor. Sed quis fringilla ante. Nullam fringilla turpis ut risus ultricies tincidunt. Nullam ornare ligula tincidunt purus dignissim, in faucibus lorem aliquet. Maecenas purus turpis, rutrum nec turpis sed, malesuada rutrum lorem. In consequat aliquet dui in iaculis."

10.times do
  Story.create(
    title: Faker::Book.title,
    body: lorem_ipsum,
    author_id: User.all.sample.id
  )
end
