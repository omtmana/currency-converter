puts 'Seeding users...🍋'

user1 = User.create(
   email: 'omtm@gmail.com',
   first_name: 'Olivia',
   last_name: 'Manalastas',
   birth_month: 12,
   birth_day: 04,
   birth_year: 1997,
   street_number: 1864,
   street_name: 'Sagu St.',
   village_barangay: 'Dasmarinas Village',
   city: 'Makati City',
   country: 'Philippines',
   zipcode: 1200,
   password_digest: 1234
)

user2 = User.create(
   email: 'mtm@gmail.com',
   first_name: 'Molly',
   last_name: 'Manalastas',
   birth_month: 12,
   birth_day: 04,
   birth_year: 1997,
   street_number: 222,
   street_name: 'E 84th Street',
   apartment_number: 'Apt 4C',
   city: 'New York',
   state: 'NY',
   zipcode: 10028,
   country: 'USA',
   password_digest: 1234
)

puts 'Seeding users done...'