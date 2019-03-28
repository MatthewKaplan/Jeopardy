/* eslint-disable */

const data = {
  response_code: {
    version: '1.5',
    termsofService: 'http://frontend.turing.io/projects/jeopardy.html',
    features: {
      categories: 1,
      clues: 1
    },
  },

  wrongImg: {
        "https://i.imgur.com/0AYPvgcm.jpg": 1,
        "https://i.imgur.com/bl7HSfNm.jpg": 2,
        "https://i.imgur.com/SwfJJmem.jpg": 3,
        "https://i.imgur.com/aRxTQ71m.jpg": 4,
        "https://i.imgur.com/jO1PP7cm.jpg": 5,
        "https://i.imgur.com/M3FPdBn.jpg": 6
  },

  correctImg: {
        "https://i.imgur.com/aicSbcUm.jpg": 1,
        "https://i.imgur.com/9oEcmXjm.jpg": 2,
        "https://i.imgur.com/IYYCMjxm.jpg": 3,
        "https://i.imgur.com/dHoBBNwm.png": 4,
        "https://i.imgur.com/ijCWpW6m.jpg": 5,
        "https://i.imgur.com/uZ4a1bi.jpg": 6,
        "https://i.imgur.com/tXHnuX3.jpg": 7
  },



  categories: {
    'unitedStatesHistory': 1,
    'lifeSciences': 2,
    'publicHealth': 3,
    'educationJargon': 4,
    'nameThatBoardGame': 5,
    'americanLiterature': 6,
    'biographies': 7,
    'americanCities': 8,
    'food': 9,
    'cableTV': 10
  },
  clues: [
    {
      question: "Scorecard Report\" & \"Peter Jacobsen Plugged In\" are seen on the sports channel devoted to this",
      pointValue: 100,
      potentialAnswers: ["espn", "golf", "soccer", "broom ball"],
      answer: "golf",
      categoryId: 10
    },
    {
      question: "One of the most popular shows on the Food Network is \"The Essence of\" him",
      pointValue: 200,
      potentialAnswers: ["nancy grace", "Emeril", "billy ray", "ramerio"],
      answer: "Emeril",
      categoryId: 10
    },
    {
      question: "The Eulogy\" is HBO's e-mail newsletter devoted to this series",
      pointValue: 300,
      potentialAnswers: ["Six Feet Under", "Dexter", "Today", "Casual "],
      answer: "Six Feet Under",
      categoryId: 10
    },
    {
      question: "In 2001 I began practicing medicine in the Big Apple on this Pax TV drama",
      pointValue: 400,
      potentialAnswers: ["Doc", "Cosby Show", "Dora the explorer", "Casual"],
      answer: "Doc",
      categoryId: 10
    },
    {
      question: "What Sonya Fitzpatrick is, or the Animal Planet series on which she communicates with animals telepathically",
      pointValue: 400,
      potentialAnswers: ["The Pet Psychic", "Pet Cemetary II", "Dr Dolittle", "All Dogs go to heaven"],
      answer: "The Pet Psychic",
      categoryId: 10
    },
    {
      question: "If you want your MTV, you should know that MTV stands for this",
      pointValue: 100,
      potentialAnswers: ["Music Television", "Mt. Vernon", "Music Teleports", "VH1"],
      answer: "Music Television",
      categoryId: 10
    },
    {
      question: "All your relatives might enjoy this channel abbreviated FAM",
      pointValue: 200,
      potentialAnswers: ["The Family Channel", "For American Music", "All in the Family", "All of the above"],
      answer: "The Family Channel",
      categoryId: 10
    },
    {
      question: "This acronym for American Christian Television System is a book of the Bible, too",
      pointValue: 300,
      potentialAnswers: ["ACTS", "Genisis", "Paul", "Satan"],
      answer: "ACTS",
      categoryId: 10
    },
    {
      question: "In TV land, TNT doesn't stand for trinitrotoluene but for this",
      pointValue: 400,
      potentialAnswers: ["Turner Network Television", "Teenage Mutant Ninja Turtle", "AC/DC", "True Netherlands Television"],
      answer: "Turner Network Television",
      categoryId: 10
    },
    {
      question: "The Cable Satellite Public Affairs Network is known by this acronym",
      pointValue: 400,
      potentialAnswers: ["C-SPAN", "huh", "no-one-watches", "All of the above"],
      answer: "C-SPAN",
      categoryId: 10
    },
    {
      question: "What MTV plays 24 hours a day",
      pointValue: 100,
      potentialAnswers: ["music videos", "the challenge", "ridiculous", "teen mom"],
      answer: "music videos",
      categoryId: 10
    },
    {
      question: "Cable channel where you'd find \"Mouseterpiece Theatre",
      pointValue: 200,
      potentialAnswers: ["the Disney Channel", "Showtime", "C-Span", "HBO"],
      answer: "the Disney Channel",
      categoryId: 10
    },
    {
      question: "Comedy group which went from CBC to NBC to Cinemax",
      pointValue: 300,
      potentialAnswers: ["The Family Channel", "SCTV", "All in the Family", "All of the above"],
      answer: "SCTV",
      categoryId: 10
    },
    {
      question: "His flagship station is WTBA, Atlanta",
      pointValue: 400,
      potentialAnswers: ["Ted Turner", "Chance the Wrapper", "Bill Cosby", "Robbie McJeuger"],
      answer: "Ted Turner",
      categoryId: 10
    },
    {
      question: "Actress who started the \"Faerie Tale Theatre",
      pointValue: 400,
      potentialAnswers: ["Shelley Duval", "Pam Lovett", "Sally Fields", "Not Sally Fields"],
      answer: "Shelley Duvall",
      categoryId: 10
    },
    {
      question: "An energetic person is full of these, maybe the fava type",
      pointValue: 100,
      potentialAnswers: ["beans", "peas", "corn", "jelly"],
      answer: "beans",
      categoryId: 9
    },
    {
      question: "Government money that a congressman steers toward his home district",
      pointValue: 200,
      potentialAnswers: ["pork", "Steer", "chicken", "salmon"],
      answer: "pork",
      categoryId: 9
    },
    {
      question: "To mean a quarrel, vegetarians can use \"rhubarb\" & carnivores can use this",
      pointValue: 300,
      potentialAnswers: ["beef", "yellow", "chicken", "pam"],
      answer: "beef",
      categoryId: 9
    },
    {
      question: "Diana Prince occasionally has to take her hair out of this to become Wonder Woman",
      pointValue: 400,
      potentialAnswers: ["a bun", "cinnabun", "weave", "extensions"],
      answer: "a bun",
      categoryId: 9
    },
    {
      question: "A story or joke that's been repeated often, maybe too often",
      pointValue: 400,
      potentialAnswers: ["a chestnut", "I found $", "a walnut", "a robbie"],
      answer: "a chestnut",
      categoryId: 9
    },
    {
      question: "In India, ghee, which is a clarified form of this, is widely used in cooking",
      pointValue: 100,
      potentialAnswers: ["Butter", "oil", "salt", "pam"],
      answer: "Butter",
      categoryId: 9
    },
    {
      question: "Be quiet little dog, & I'll feed you these deep fried concoctions made of corn meal",
      pointValue: 200,
      potentialAnswers: ["plush huppies", "Hush Puppies", "hippies", "corn dog"],
      answer: "Hush Puppies",
      categoryId: 9
    },
    {
      question: "Flavor of the jelly or sauce that's a common accompaniment to roast lamb",
      pointValue: 300,
      potentialAnswers: ["Rasberry", "Apple", "Mint", "Orange"],
      answer: "Mint",
      categoryId: 9
    },
    {
      question: "Color of the beans you'd find in a feijoada, the national dish of Brazil",
      pointValue: 400,
      potentialAnswers: ["Purple", "Black", "Grean", "White"],
      answer: "Black",
      categoryId: 9
    },
    {
      question: "Broccoflower, a relatively new vegetable, is a cross between broccoli & this",
      pointValue: 400,
      potentialAnswers: ["beans", "cauliflower", "peas", "asparagus"],
      answer: "cauliflower",
      categoryId: 9
    },
    {
      question: "Beurre blanc is a classic French sauce whose name means this color butter",
      pointValue: 100,
      potentialAnswers: ["black", "white", "grean", "clear"],
      answer: "white",
      categoryId: 9
    },
    {
      question: "The last name of a nursery rhyme Jack, or a fish that's so high in fat he couldn't eat it",
      pointValue: 200,
      potentialAnswers: ["Sprat", "Salmon", "Jelly", "Bass"],
      answer: "Sprat",
      categoryId: 9
    },
    {
      question: "One of Post's Pebbles Cereals is named for this pet who lives in Bedrock",
      pointValue: 300,
      potentialAnswers: ["Dino", "Betty", "Sally", "Brittany"],
      answer: "Dino",
      categoryId: 9
    },
    {
      question: "Popular in Pennsylvania, pepper pot is a peppery soup made from this stomach lining",
      pointValue: 400,
      potentialAnswers: ["tripe", "tribe", "trite", "?"],
      answer: "tripe",
      categoryId: 9
    },
    {
      question: "In a cling peach the flesh clings to this",
      pointValue: 400,
      potentialAnswers: ["the pit", "pull", "push", "pam"],
      answer: "the pit",
      categoryId: 9
    },
    {
      question: "About this city's 1906 earthquake, Jack London wrote, \"Day was trying to dawn through the smoke pall",
      pointValue: 100,
      potentialAnswers: ["San Francisco", "Denver", "Detriot", "Gambier"],
      answer: "San Francisco",
      categoryId: 8
    },
    {
      question: "This state capital lies on both banks of the Mississippi River at the confluence of the Minnesota River",
      pointValue: 200,
      potentialAnswers: ["St. Paul", "Iowa City", "New Orleans", "Indiana"],
      answer: "St. Paul",
      categoryId: 8
    },
    {
      question: "This city on Lake Michigan is \"The Beer Capital of America",
      pointValue: 300,
      potentialAnswers: ["Milwaukee", "Denver", "Las Vegas", "Detroit"],
      answer: "Milwaukee",
      categoryId: 8
    },
    {
      question: "This city near Disney World was given its present name in 1857 to honor a soldier killed in the Seminole Wars",
      pointValue: 400,
      potentialAnswers: ["Orlando", "Atlanta", "Calgary", "Charlston"],
      answer: "Orlando",
      categoryId: 8
    },
    {
      question: "Juarez, Mexico & this Texas city make up the largest metropolitan center on the U.S.-Mexico border",
      pointValue: 400,
      potentialAnswers: ["El Paso", "NYC", "Boston", "San Diego"],
      answer: "El Paso",
      categoryId: 8
    },
    {
      question: "Earthquake City\" & \"Baghdad by the Bay\" are 2 nicknames of this California city",
      pointValue: 100,
      potentialAnswers: ["San Francisco", "Seatlle", "Healdsburg", "Oakland"],
      answer: "San Francisco",
      categoryId: 8
    },
    {
      question: "The U.S.A.F. Academy is located outside this Colorado city home to the main U.S. Olympic Training Center",
      pointValue: 200,
      potentialAnswers: ["Colorado Springs", "Crested Butte", "Gunnison", "Boulder"],
      answer: "Colorado Springs",
      categoryId: 8
    },
    {
      question: "Many visitors to the Big Apple fly into this city's Liberty Airport, maybe on Continental",
      pointValue: 300,
      potentialAnswers: ["Newark", "Portland", "Boston", "Manchester"],
      answer: "Newark",
      categoryId: 8
    },
    {
      question: "Cross and Sword\", Florida's official state play, was created to reenact this city's founding in 1565",
      pointValue: 400,
      potentialAnswers: ["St. Augustine", "Orlando", "Miami", "Destin"],
      answer: "St. Augustine",
      categoryId: 8
    },
    {
      question: "In 1882 the Knights of Columbus was founded in this \"new\" Connecticut city",
      pointValue: 400,
      potentialAnswers: ["New Haven", "Bridgeport", "Bristol", "Hartford"],
      answer: "New Haven",
      categoryId: 8
    },
    {
      question: "An earthquake on April 18, 1906 in this city destroyed the Wells Fargo Bank, but the vaults remained intact",
      pointValue: 100,
      potentialAnswers: ["San Francisco", "Denver", "Chicago", "Hartford"],
      answer: "San Francisco",
      categoryId: 8
    },
    {
      question: "The MGM Grand Hotel in this city claims to be the largest in the world with over 5,000 guest rooms",
      pointValue: 200,
      potentialAnswers: ["Las Vegas", "Atlantic City", "Mobile", "Detroit"],
      answer: "Las Vegas",
      categoryId: 8
    },
    {
      question: "The final draft of the U.S. Constitution was composed in this city in September 1787",
      pointValue: 300,
      potentialAnswers: ["Philadelphia", "NYC", "Boston", "Orlando"],
      answer: "Philadelphia",
      categoryId: 8
    },
    {
      question: "The pirate Jean Lafitte was pardoned by President Madison for his help during the 1814 battle of this city",
      pointValue: 400,
      potentialAnswers: ["New Orleans", "Denver", "Charlston", "Gettysburg"],
      answer: "New Orleans",
      categoryId: 8
    },
    {
      question: "Often placed in the bear family, the first giant panda in the U.S. was appropriately exhibited in this Midwest city",
      pointValue: 400,
      potentialAnswers: ["Iowa City", "Chicago", "Columbus", "Green Bay"],
      answer: "Chicago",
      categoryId: 8
    },
    {
      question: "Title of Sylvia Nasar's tale of \"The Life of Mathematical Genius and Nobel Laureate John Nash",
      pointValue: 100,
      potentialAnswers: ["A Beautiful Mind", "Art of the Deal", "Math Awesome", "I lost"],
      answer: "A Beautiful Mind",
      categoryId: 7
    },
    {
      question: "This pioneer was a man, yes, a big man, & his bio won a Newbery Medal for James Daugherty",
      pointValue: 200,
      potentialAnswers: ["Daniel Boone", "Robbie Jeager", "Mike KS", "George Washington"],
      answer: "Daniel Boone",
      categoryId: 7
    },
    {
      question: "Virginia Spencer Carr's \"The Lonely Hunter\" chronicles the life of this author",
      pointValue: 300,
      potentialAnswers: ["Carson McCullers", "Carson Daily", "The Daily Show", "Brothers MuCullers"],
      answer: "Carson McCullers",
      categoryId: 7
    },
    {
      question: "This \"Lady\"like biographer of Mary, Queen of Scots came out with \"Marie Antoinette: The Journey\" in 2001",
      pointValue: 400,
      potentialAnswers: ["Antonia Fraser", "Sally Fields", "Pam Lovett", "Jennifer Aniston"],
      answer: "Antonia Fraser",
      categoryId: 7
    },
    {
      question: "While out of office in the 1930s, he knocked out a million-word biography of his ancestor the Duke of Marlborough",
      pointValue: 400,
      potentialAnswers: ["Churchill", "Washington", "William Wallace", "Hilter"],
      answer: "Churchill",
      categoryId: 7
    },
    {
      question: "Ex-Boston Globe scribe Leigh Montville is the latest biographer of this baseball great",
      pointValue: 100,
      potentialAnswers: ["Ted Williams", "Babe Ruth", "Charlie Chaplin", "Yogi Berra"],
      answer: "Ted Williams",
      categoryId: 7
    },
    {
      question: "A bio of him sums up, \"It was by dying when he did\", in 1863 that he achieved his military fame",
      pointValue: 200,
      potentialAnswers: ["Stonewall Jackson", "Robert Lee", "U.S. Grant", "Abe Lincoln"],
      answer: "Stonewall Jackson",
      categoryId: 7
    },
    {
      question: "Uncertainty: The Life and Science of\" this man explores his work on Nazi weapons programs",
      pointValue: 300,
      potentialAnswers: ["Werner Heisenberg", "Adolf Hitler", "Matt Damon", "Ben Afflec"],
      answer: "Werner Heisenberg",
      categoryId: 7
    },
    {
      question: "A biography of this wife of James Joyce is subtitled \"The Real Life of Molly Bloom",
      pointValue: 400,
      potentialAnswers: ["Nora Joyce", "Nora Jones", "Molly Joyce", "Molly Jones"],
      answer: "Nora Joyce",
      categoryId: 7
    },
    {
      question: "This late-night talk show host titled his memoir \"Leading With My Chin",
      pointValue: 400,
      potentialAnswers: ["Jay Leno", "Conan", "Jimmy Kimmel", "David Letterman"],
      answer: "Jay Leno",
      categoryId: 7
    },
    {
      question: "From the 1980s, \"Cory: Profile of a President\" was about her",
      pointValue: 100,
      potentialAnswers: ["Corazon Aquino", "Margert Thatcher", "Nancy Pelosi", "Sarah Palin"],
      answer: "Corazon Aquino",
      categoryId: 7
    },
    {
      question: "A 1928 biography on this religious figure was titled \"Gotama The Man",
      pointValue: 200,
      potentialAnswers: ["Buddha", "The Pope", "The Priest", "Woody Hayes"],
      answer: "Buddha",
      categoryId: 7
    },
    {
      question: "In 1978 Bob Thomas wrote \"Joan Crawford: A Biography\" & Christina Crawford wrote this",
      pointValue: 300,
      potentialAnswers: ["Mommie Dearest", "Daddy Help Me", "If I did it", "Hunger Games"],
      answer: "Mommie Dearest",
      categoryId: 7
    },
    {
      question: "Robert Shelton's \"No Direction Home\" covered the life of this rock music performer",
      pointValue: 400,
      potentialAnswers: ["Bob Dylan", "Bono", "Madona", "Bruce Springstien"],
      answer: "Bob Dylan",
      categoryId: 7
    },
    {
      question: "This Mark Twain character's father \"Pap\" briefly held him prisoner in a cabin on the Illinois side of the Mississippi",
      pointValue: 100,
      potentialAnswers: ["Huckleberry Finn", "Underground Railroad", "Pride", "The Help"],
      answer: "Huckleberry Finn",
      categoryId: 6
    },
    {
      question: "In this Hemingway WWI novel, ambulance driver Frederic Henry falls in love with British nurse Catherine Barkley",
      pointValue: 200,
      potentialAnswers: ["A Farwell to Arms", "Jason Bourne", "Huckleberry Finn", "Art of the Deal"],
      answer: "A Farewell to Arms",
      categoryId: 6
    },
    {
      question: "In this Steinbeck novel, a few buddies get drunk & make a shambles of the Western Biological Lab in Monterey",
      pointValue: 300,
      potentialAnswers: ["Cannery Row", "Cannery Islands", "Love and hate", "Singles"],
      answer: "Cannery Row",
      categoryId: 6
    },
    {
      question: "It's the nickname of William Lonigan, the 15-year-old hero of a 1930s trilogy written by James T. Farrell",
      pointValue: 400,
      potentialAnswers: ["Studs", "Singles", "Billy Bob", "Billy the Kid"],
      answer: "Studs",
      categoryId: 6
    },
    {
      question: "This captain of the Ghost rescues literary critic Humphrey Van Weyden & poet Maude Brewster from a shipwreck",
      pointValue: 400,
      potentialAnswers: ["Wolf Larsen", "Captian Hook", "One eyed Willy", "Chunk"],
      answer: "Wolf Larsen",
      categoryId: 6
    },
    {
      question: "The Scarlet Letter\" says, \"to forbid the culprit to hide his face... was the essence of\" this 7-letter punishment",
      pointValue: 100,
      potentialAnswers: ["the pillory", "the babbler", "the chazzen", "the rabbits"],
      answer: "the pillory",
      categoryId: 6
    },
    {
      question: "Harpooneers in this novel include Tashtego, Daggoo & Queequeg, a cannibal",
      pointValue: 200,
      potentialAnswers: ["Moby Dick", "The Robbie", "Whos the Boss", "Art of the deal"],
      answer: "Moby Dick",
      categoryId: 6
    },
    {
      question: "This 1950 Ray Bradbury book collected 26 stories about Earth's colonization of Mars",
      pointValue: 300,
      potentialAnswers: ["The Martian Chronicles", "UFO's", "2020 an Odessey", "War and Peace"],
      answer: "The Martian Chronicles",
      categoryId: 6
    },
    {
      question: "This 1854 Thoreau work is subtitled \"Or Life in the Woods",
      pointValue: 400,
      potentialAnswers: ["Walden", "Forrest", "Warren", "Lost"],
      answer: "Walden",
      categoryId: 6
    },
    {
      question: "In \"The Adventures of Tom Sawyer\", this character kills Dr. Robinson, a murder witnessed by Tom",
      pointValue: 400,
      potentialAnswers: ["Injun Joe", "Uncle Tom", "Huck Finn", "Aunt Polly"],
      answer: "Injun Joe",
      categoryId: 6
    },
    {
      question: "Sons\", the second novel in her \"House of Earth\" trilogy, traces the lives of Wang Lung's 3 sons",
      pointValue: 100,
      potentialAnswers: ["Pearl S. Buck", "Jennifer Aniston", "Sally Fields", "Harper Lee"],
      answer: "Pearl S. Buck",
      categoryId: 6
    },
    {
      question: "He penned a campaign biography for Franklin Pierce and pinned \"The Scarlet Letter\" on Hester Prynne",
      pointValue: 200,
      potentialAnswers: ["Nathaniel Hawthorne", "Hemingway", "Lee", "Robbie McJeager"],
      answer: "Nathaniel Hawthorne",
      categoryId: 6
    },
    {
      question: "His experiences as a bombardier in WWII were the basis of the novel \"Catch-22",
      pointValue: 300,
      potentialAnswers: ["Joseph Heller", "Billy the kid", "Franklin Roosevelt", "JFK"],
      answer: "Joseph Heller",
      categoryId: 6
    },
    {
      question: "Little Women\" is set during this war",
      pointValue: 400,
      potentialAnswers: ["The Civil War", "WWI", "WWII", "1812"],
      answer: "The Civil War",
      categoryId: 6
    },
    {
      question: "Among his pen names were Jonathan Oldstyle, Gentleman & Diedrich Knickerbocker",
      pointValue: 400,
      potentialAnswers: ["Washington Irving", "Ben Franklin", "Thomas Jefferson", "Booker T Washington"],
      answer: "Washington Irving",
      categoryId: 6
    },
    {
      question: 'Go directly to jail',
      pointValue: 100,
      potentialAnswers: ["Monopoly", "jeopardy", "Scrabble", "Chess"],
      answer: 'Monopoly',
      categoryId: 5
    },
    {
      question: 'King me!',
      pointValue: 200,
      potentialAnswers: ["Checkers", "Chess", "Monopoly", "Risk"],
      answer: 'Checkers',
      categoryId: 5
    },
    {
      question: 'Miss Scarlet in the library with the wrench',
      pointValue: 300,
      potentialAnswers: ["Clue", "Risk", "Monopoly", "Sorry"],
      answer: 'Clue',
      categoryId: 5
    },
    {
      question: 'You sank my aircraft carrier!',
      pointValue: 400,
      potentialAnswers: ["Monopoly", "Battleship", "Chess", "Top Gun"],
      answer: 'Battleship',
      categoryId: 5
    },
    {
      question: 'My wink is nearest the pot.  I\'ve won the squidge-off!',
      pointValue: 400,
      potentialAnswers: ["tiddlywinks", "sticks and stones", "dice", "chess"],
      answer: 'tiddlywinks',
      categoryId: 5
    },
    {
      question: 'IDEA is the Individuals with these Education Act, formerly the Education For All Handicapped Children Act',
      pointValue: 100,
      potentialAnswers: ["Disabilities", "right handed", "left handed", "all"],
      answer: 'Disabilities',
      categoryId: 4
    },
    {
      question: '65 out of 100 students did the same as or worse than you if your grade is in the 65th of these',
      pointValue: 200,
      potentialAnswers: ["percentile", "Cs get degrees", "not good enough", "repeat your mod"],
      answer: 'percentile',
      categoryId: 4
    },
    {
      question: 'It\'s the rhyming term for the technique of teaching with only a blackboard to help you',
      pointValue: 300,
      potentialAnswers: ["chalk talk/chalk and talk", "dusty hands and talking hands", "not it", "nope"],
      answer: 'chalk talk/chalk and talk',
      categoryId: 4
    },
    {
      question: 'From the Latin for "to heal", it\'s the type of education that brings deficient students up to standard levels',
      pointValue: 400,
      potentialAnswers: ["remedial", "repeat", "not good enough", "retry"],
      answer: 'remedial',
      categoryId: 4
    },
    {
      question: 'These 2 words, denoting socioeconomically challenged, followed "A Nation" in a 1983 report\'s title',
      pointValue: 400,
      potentialAnswers: ["At Risk", "Not Good", "Almost there", "watch out"],
      answer: 'At Risk',
      categoryId: 4
    },
    {
      question: 'A 1992 law introduced by Sen. Cranston aimed to reduce the use of paint containing too much of this element',
      pointValue: 100,
      potentialAnswers: ["lead", "cancer", "peanut butter", "children"],
      answer: 'lead',
      categoryId: 3
    },
    {
      question: 'An effort lasting from 1985 to 1991 eliminated this paralytic illness from Latin America',
      pointValue: 200,
      potentialAnswers: ["polio", "aids", "cancer", "blindness"],
      answer: 'polio',
      categoryId: 3
    },
    {
      question: 'Hi!  I\'m CNN senior medical correspondent Dr. Sanjay Gupta.  I joined CNN in 2001 & reported on the biological attacks of this bacillus in the news that October',
      pointValue: 300,
      potentialAnswers: ["anthrax", "vicodin", "PBR", "ricin"],
      answer: 'anthrax',
      categoryId: 3
    },
    {
      question: 'Stanford\'s med school has a division of this, the study & control of disease in populations',
      pointValue: 400,
      potentialAnswers: ["epidemiology", "cancer", "aids", "feet"],
      answer: 'epidemiology',
      categoryId: 3
    },
    {
      question: 'Also a type of mathematical quantity, it\'s a term for disease-carrying critters like ticks',
      pointValue: 400,
      potentialAnswers: ["a vector", "a victor", "quantify", "percentile"],
      answer: 'a vector',
      categoryId: 3
    },
    {
      question: 'Organic chemistry focuses specifically on this element\'s compounds & their reactions',
      pointValue: 100,
      potentialAnswers: ["carbon", "oxygen", "hydrogen", "iron"],
      answer: 'carbon',
      categoryId: 2
    },
    {
      question: 'If you\'re a steak & veggies creature, you\'re an omnivore, a combination of these other 2 basic "-vores',
      pointValue: 200,
      potentialAnswers: ["carnivore and herbivore", "meatavore and potatoeavore", "both", "none"],
      answer: 'carnivore and herbivore',
      categoryId: 2
    },
    {
      question: 'In humans this collection of nerves extends from the base of the skull to the second lumbar vertebra',
      pointValue: 300,
      potentialAnswers: ["spinal cord", "brain", "arms", "all"],
      answer: 'spinal cord',
      categoryId: 2
    },
    {
      question: '(<a href="http://www.j-archive.com/media/2009-04-28_DJ_22.wmv">Jimmy of the Clue Crew gets in his workout.</a>)  Physical activity increases both body temperature & this process in which food is converted to protein, carbs & fat & then used for energy',
      pointValue: 400,
      potentialAnswers: ["metabolism", "sweating", "dying", "soreness"],
      answer: 'metabolism',
      categoryId: 2
    },
    {
      question: 'Alimentary, my dear! waves of contractions moving swallowed food through the esophagus are called this',
      pointValue: 400,
      potentialAnswers: ["peristalsis", "swallowed", "swallowing", "yummy"],
      answer: 'peristalsis',
      categoryId: 2
    },
    {
      question: "Demonstrators were kicked out of this city's Lincoln Park August 27, 1968",
      pointValue: 100,
      potentialAnswers: ["Chicago", "Denver", "Washington", "Detroit"],
      answer: "Chicago",
      categoryId: 1
    },
    {
      question: "Though he left the service after WWII as a captain, today when he was president he held the highest rank possible",
      pointValue: 200,
      potentialAnswers: ["Ronald Reagan", "Jimmy Carter", "G HW Bush", "Richard Nixon"],
      answer: "Ronald Reagan",
      categoryId: 1
    },
    {
      question: "Country to which the U.S. began beaming Radio Marti in May 1985",
      pointValue: 300,
      potentialAnswers: ["Cuba", "Mexico", "Brazil", "Nova Scotia"],
      answer: "Cuba",
      categoryId: 1
    },
    {
      question: "Though popular in early 1800s this Tennessee congressman was even more popular in the 1950s",
      pointValue: 400,
      potentialAnswers: ["Davy Crockett", "Rocky Top", "Peyton Manning", "Johnny Cash"],
      answer: "Davy Crockett",
      categoryId: 1
    },
    {
      question: "This president vetoed more legislation than any other",
      pointValue: 400,
      potentialAnswers: ["Bill Clinton", "Abe Lincoln", "Franklin Delano Roosevelt", "Ronald Reagan"],
      answer: "Franklin Delano Roosevelt",
      categoryId: 1
    },
    {
      question: "From Latin for \"put an end to\", it's the term for reformers like Wm. L. Garrison who wanted to end slavery",
      pointValue: 100,
      potentialAnswers: ["Abolitionists", "Jeffersons", "Alcohalics", "Pams"],
      answer: "Abolitionists",
      categoryId: 1
    },
    {
      question: "Thoroughly restored for its 100th birthday in 1986, on July 3 that year, its torch was relit",
      pointValue: 200,
      potentialAnswers: ["Olympic Flame", "Statue of Liberty", "Sears Tower", "Cuyahoga River"],
      answer: "Statue of Liberty",
      categoryId: 1
    },
    {
      question: "In March 1974 it was announced that the wreck of this Union ironclad had been found off Cape Hatteras, N.C.",
      pointValue: 300,
      potentialAnswers: ["Monitor", "Maine", "Lexington", "Charlston"],
      answer: "Monitor",
      categoryId: 1
    },
    {
      question: "In 10 minutes, this May 31, 1889 disaster destroyed a town & killed over 2,200 people",
      pointValue: 400,
      potentialAnswers: ["The Johnstown Flood", "Chicago Fire", "Tidal Wave", "Earthquake"],
      answer: "The Johnstown Flood",
      categoryId: 1
    },
    {
      question: "In September 1847 this general led the American troops that captured Mexico City",
      pointValue: 400,
      potentialAnswers: ["Winfield Scott", "George Washington", "General Patton", "Robert E Lee"],
      answer: "Winfield Scott",
      categoryId: 1
    },
    {
      question: "It's the present-day successor of the old Federal Radio Commission",
      pointValue: 100,
      potentialAnswers: ["the FCC", "the SEC", "the SCC", "the CNN"],
      answer: "the FCC",
      categoryId: 1
    },
    {
      question: "Number of the Continental Congress which adopted the Declaration of Independence",
      pointValue: 200,
      potentialAnswers: ["the second", "the first", "the last", "none"],
      answer: "the second",
      categoryId: 1
    },
    {
      question: "A cartoon by Thomas Nast in an 1874 Harper's Weekly was the 1st to use an elephant as this",
      pointValue: 300,
      potentialAnswers: ["the symbol of the Republican Party", "the symbol of the Democratic Party", "the symbol of the KKK", "the symbol of the Whig Party"],
      answer: "the symbol of the Republican Party",
      categoryId: 1
    },
    {
      question: "The Liberty Bell cracked July 8, 1835 while tolling this Chief Justice's death",
      pointValue: 400,
      potentialAnswers: ["John Marshall", "Thomas Jefferson", "John Adams", "Thurgood Marshall"],
      answer: "John Marshall",
      categoryId: 1
    },
    {
      question: "The verdict in the 1982 trial of John Hinckley Jr. for attempting to murder the president",
      pointValue: 400,
      potentialAnswers: ["guilty", "not guilty by reason of insanity", "death sentance", "not guilty"],
      answer: "not guilty by reason of insanity",
      categoryId: 1
    },
    {
      question: "In 1787 Patrick Henry refused to go to this convention; it's said that he \"smelt a rat",
      pointValue: 100,
      potentialAnswers: ["The Constitutional Convention", "New York Yankees", "Sales Convention", "Meat Packers Convention"],
      answer: "The Constitutional Convention",
      categoryId: 1
    },
    {
      question: "In 1864, not a hurricane, but this general caused a path of destruction almost 300 miles long & 60 wide",
      pointValue: 200,
      potentialAnswers: ["Robert E. Lee", "General Patton", "General Grant", "William T. Sherman"],
      answer: "William T. Sherman",
      categoryId: 1
    },
    {
      question: "Looking for a good reelection issue in 1950, this Wisconsin senator took up anti-Communism on the advice of friends",
      pointValue: 300,
      potentialAnswers: ["Joseph McCarthy", "Scott Walker", "Paul Ryan", "Vince Lombardi"],
      answer: "Joseph McCarthy",
      categoryId: 1
    },
    {
      question: "This 1862 act gave American citizens 160 acres of land if they'd live on it for at least 5 years & improve it",
      pointValue: 400,
      potentialAnswers: ["The Tea Act", "The Homestead Act", "The Civil Rights Act", "The Disablities Act"],
      answer: "The Homestead Act",
      categoryId: 1
    },
    {
      question: "An ink used in a newspaper cartoon in the 1890s gave us this term for sensationalist reporting",
      pointValue: 400,
      potentialAnswers: ["yellow journalism", "purple journalism", "black journalism", "blue journalism"],
      answer: "yellow journalism",
      categoryId: 1
    }
  ]
};

export default data; 