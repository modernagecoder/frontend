'use strict';
// Noord-Holland: the province page. About the spread, not the capital's page:
// 44 municipalities, nine regions, the towns that will never get a URL. Spine:
// places two, three and four in the province are 1,920 and 1,777 people
// apart; place one is 773,029 ahead. A rank throws the distances away.

module.exports = {
  slug: 'coding-classes-in-noord-holland',
  code: 'nhl',
  accent: '#8E3A23',
  accentRationale: 'Noord-Holland: the rust of the province\'s brick, between Amsterdam\'s crimson and the hub orange',
  pageType: 'governorate',
  place: {
    name: 'Noord-Holland',
    eyebrow: 'Province of Noord-Holland',
    schemaType: 'AdministrativeArea',
    chain: [{ type: 'Country', name: 'Netherlands' }]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Amsterdam', href: '/coding-classes-in-amsterdam' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Noord-Holland, Netherlands',
  title: 'Coding Classes in Noord-Holland | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across Noord-Holland, ages 6 to 67: Haarlem, Zaanstad, Alkmaar, Hilversum, Hoorn, Den Helder and Texel, not only Amsterdam.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in all 44 municipalities of Noord-Holland, from the Gooi to Texel, built on a ranking that hides its own distances.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'frontend-development-masterclass-for-teens',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Noord-Holland Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across the 44 municipalities of the province of Noord-Holland, taught in English.'
  },

  h1: 'Coding classes in Noord-Holland, a province whose second, third and fourth cities are closer than the size of one school',
  capsuleQ: 'What are the best coding classes in Noord-Holland?',
  capsule: 'Coding classes in Noord-Holland have to reach 3,009,386 people in 44 municipalities (Statistics Netherlands, 1 January 2026), of whom fewer than a third live in Amsterdam. Haarlem, the provincial capital, Haarlemmermeer and Zaanstad hold places two, three and four with 168,898, 166,978 and 165,201 residents, closer to each other than a single secondary school\'s roll. Live online and in English, for ages 6 to 67, Modern Age Coders teaches coding, Python, AI and mathematics to every one of those municipalities at the same price: nothing for the first lesson, then USD 100 a month in a group of five to ten or USD 150 one to one.',
  lead: 'A league table of the province\'s towns says Haarlem is second and Zaanstad fourth. It does not say that 3,697 people separate them, or that 773,029 separate first from second. That is what a rank does to a number, and a child who can show it with the province\'s own list has learned something that applies to every table with a position column in it.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Noord-Holland.',

  picks: {
    eyebrow: 'Course picks for Noord-Holland',
    h2: 'Four courses for a province that runs from the Gooi to the Wadden',
    intro: 'A child in Hoorn, a teenager in Hilversum, a student in Haarlem and an adult in Alkmaar are in the same province and, for a live class, in the same room. These four are chosen so that each of them has a door.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Real games in Scratch in three months, in English, for a groep 3 to 5 child anywhere between Den Helder and Diemen.' },
      { course: 'roblox-game-coding-for-kids-lua-course', band: 'Ages 8 to 12', note: 'Luau scripting inside the game half the groep 6 class already plays, for the child who wants to make the thing rather than only play it.' },
      { course: 'frontend-development-masterclass-for-teens', band: 'Ages 13 to 17', note: 'CSS craft to React, for the Hilversum or Haarlem teenager whose media-town instinct is that the thing should look right as well as work.' },
      { course: 'ai-tools-mastery-complete-college', band: 'Adults', note: 'ChatGPT, Claude and automation for the commuter on the Zaanlijn or the A9 who wants the tools to carry the boring third of the job.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Noord-Holland today',
      h2: 'Three million people, forty-four municipalities, and a capital that is not the largest city',
      intro: 'The province was carved out of Holland in 1840. Its capital is Haarlem; its largest city is Amsterdam, by a factor of five and a half. Statistics Netherlands counted 3,009,386 residents on 1 January 2026 in 1,454,468 households, 436,820 of them under fifteen and 357,099 aged fifteen to twenty-five, on 2,662.54 square kilometres of land inside 4,091.94 of territory.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'One city, then everyone else', p: 'Amsterdam holds 941,927 people, 31.3 percent of the province. The other 2,067,459 live in 43 municipalities, and it is those 43 this page is for. Amsterdam and its neighbour Amstelveen have pages of their own; the rest of the province has this one until each town gets its own.' },
          { h3: 'The schools, counted', p: '975 primary establishments teach 234,608 pupils and 266 secondary establishments 157,330, by the national count. That is roughly one secondary school for every 11,300 residents, which in the Kop van Noord-Holland means a long bus ride and in the Gooi means a choice.' },
          { h3: 'Nine regions the province uses', p: 'Alkmaar, Amsterdam, Amstelland-Meerlanden, IJmond, Gooi en Vechtstreek, Kop van Noord-Holland, West-Friesland, Zaanstreek-Waterland and Zuid-Kennemerland. They are administrative groupings rather than places anyone types into a search box, and this page uses them only to walk the province in order.' }
        ] },
        { kind: 'spec', title: 'A third of the province is water', p: 'Of 4,091.94 square kilometres, 1,427.11 are water: the IJsselmeer and Markermeer coast, the Wadden, the North Sea, the Noordzeekanaal and the drained lake beds that are now Haarlemmermeer. Any density figure for Noord-Holland is a choice about whether to count the wet part, and the province\'s own is quoted on land only.' }
      ]
    },
    {
      id: 'spread', tint: 'tint', eyebrow: 'The spread',
      h2: 'From Zandvoort to Texel: the towns that make up the other two thirds',
      intro: 'Each region below names its municipalities with their 1 January 2026 population, so a family can find its own town on this page even if that town never gets a page of its own.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Zuid-Kennemerland: the capital and the dunes', p: '<a class="cg-inline-link" href="/coding-classes-in-haarlem">Haarlem</a> 168,898, the provincial capital and the second city, with its own page; Heemstede 27,556; Bloemendaal 23,554; Zandvoort 17,335. Fifteen minutes from Amsterdam by train and a different place entirely in character, with the dunes and the sea at the end of the road.' },
          { h3: 'Amstelland-Meerlanden: the airport and the suburbs', p: '<a class="cg-inline-link" href="/coding-classes-in-haarlemmermeer">Haarlemmermeer</a> 166,978, which is Hoofddorp, Schiphol and a drained lake, with its own page; Amstelveen 95,840, with a page of its own; Aalsmeer 33,459; <a class="cg-inline-link" href="/coding-classes-in-diemen">Diemen</a> 33,327, with its own page; <a class="cg-inline-link" href="/coding-classes-in-uithoorn">Uithoorn</a> 32,204, which has the second highest Indian-origin share in the country and now has its own page; Ouder-Amstel 14,525.' },
          { h3: 'Zaanstreek-Waterland: north of the IJ', p: '<a class="cg-inline-link" href="/coding-classes-in-zaanstad">Zaanstad</a> 165,201, fourth in the province, with its own page; <a class="cg-inline-link" href="/coding-classes-in-purmerend">Purmerend</a> 96,182, sixth, also with its own page; Edam-Volendam 37,126; Waterland 17,721; Wormerland 16,328; Landsmeer 11,685; Oostzaan 9,778. Commuter country with its own identity and its own dialect.' },
          { h3: 'Gooi en Vechtstreek: the media towns', p: '<a class="cg-inline-link" href="/coding-classes-in-hilversum">Hilversum</a> 94,595, the broadcasting town, with its own page; Gooise Meren 61,213, which is Bussum, Naarden and Muiden; Huizen 41,287; Wijdemeren 24,672; Blaricum 12,938; Laren 11,547. The wealthiest corner of the province and the one with the most international families outside Amstelveen.' },
          { h3: 'Alkmaar and IJmond: the cheese town and the steel coast', p: '<a class="cg-inline-link" href="/coding-classes-in-alkmaar">Alkmaar</a> 113,196, fifth in the province, with its own page; Dijk en Waard 91,411, formed from Heerhugowaard and Langedijk; Castricum 37,077; Heiloo 24,613; Bergen 29,653; and on the coast <a class="cg-inline-link" href="/coding-classes-in-velsen">Velsen</a> 70,361, with its own page, Beverwijk 43,052, Heemskerk 39,529 and Uitgeest 13,489, around the steelworks at the mouth of the canal.' },
          { h3: 'The Kop and West-Friesland: the far north', p: 'Den Helder 56,678, the navy town at the tip; Hollands Kroon 50,592; Schagen 48,778; Texel 13,958, the island, forty-six percent of whose 463 square kilometres is water. <a class="cg-inline-link" href="/coding-classes-in-hoorn">Hoorn</a> 76,202, with its own page; Medemblik 46,305; Koggenland 24,214; Stede Broec 22,445; Drechterland 20,550; Enkhuizen 18,738; Opmeer 12,669.' }
        ] },
        { kind: 'p', text: 'Forty-four municipalities, every one named. The city pages in this series are close-up; this one is the map, and it stays deliberately wide.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Noord-Holland facts, each with its office and date',
      intro: 'Seven things this page rests on. One of them is the list the project is built from.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The province, counted', p: 'Statistics Netherlands, provisional, 1 January 2026: 3,009,386 residents in 44 municipalities; 1,454,468 households; 436,820 under fifteen; 357,099 aged fifteen to twenty-five; 975 primary establishments with 234,608 pupils and 266 secondary with 157,330; land 2,662.54 square kilometres, territory 4,091.94.' },
          { h3: 'The list', p: 'All 44 municipalities with their 1 January 2026 population from the municipal registers, from Amsterdam at 941,927 to Oostzaan at 9,778. The 44 figures sum to the provincial total exactly, which is checked in the class before anything else is done with them.' },
          { h3: 'The capital and the year', p: 'Haarlem is the provincial capital; Amsterdam is the largest city; the province was formed in 1840 when Holland was split in two. Land 2,664.82 and water 1,427.11 square kilometres by the province\'s own account, which differs from the national land figure by two square kilometres, and the page keeps both.' },
          { h3: 'The nine regions', p: 'Alkmaar, Amsterdam, Amstelland-Meerlanden, IJmond, Gooi en Vechtstreek, Kop van Noord-Holland, West-Friesland, Zaanstreek-Waterland, Zuid-Kennemerland, as the province groups its municipalities.' },
          { h3: 'The island', p: 'Texel: 13,946 residents on 1 January 2026 by the island\'s own entry, 13,958 by the provincial list for the same date, twelve apart across two registers; 463.16 square kilometres of municipality of which about 162 are land and 301.16 water; reached by ferry from Den Helder.' },
          { h3: 'The Indian-origin towns', p: 'Amstelveen at 68.3 per thousand residents and Uithoorn at 49.6 are the two highest shares in the country (Statistics Netherlands, 1 January 2024), and both are in this province, twenty minutes apart on the same tram line.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no association with the province of Noord-Holland, with any of its 44 municipalities or with any school in them, and claims none. They are here because a page that says it serves a province ought to be able to name the province.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Second, third, fourth: build the program that puts the distances back into a league table',
      intro: 'Forty-four numbers, a sort, and a column that everybody reads and almost nobody questions.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Sort the province', p: 'The learner loads all 44 municipalities with their 1 January 2026 populations and sorts them. Amsterdam is first. Haarlem is second, Haarlemmermeer third, Zaanstad fourth, Alkmaar fifth, Purmerend sixth, Amstelveen seventh, Hilversum eighth. So far this is what every table on the internet shows.' },
          { h3: '2. Add the column the table left out', p: 'Next to each rank the learner computes the gap to the place above. First to second: 773,029. Second to third: 1,920. Third to fourth: 1,777. Fourth to fifth: 52,005. Sixth to seventh: 342. The ranks go 1, 2, 3, 4, 5, 6, 7 in even steps. The gaps go from three quarters of a million to a few hundred.' },
          { h3: '3. Ask what a rank can say', p: 'Purmerend is sixth and Amstelveen seventh, 342 people apart, fewer than move between them in a year. Haarlem could fall to fourth without losing a single resident if Haarlemmermeer and Zaanstad each grew by two thousand. A rank is a position in a queue; it says nothing about how far apart the people in the queue are standing.' }
        ] },
        { kind: 'table', caption: 'The top eight municipalities of Noord-Holland, 1 January 2026, with the column a league table omits', head: ['Rank', 'Municipality', 'Residents', 'Gap to the place above'], rows: [
          ['1', 'Amsterdam', '941,927', ''],
          ['2', 'Haarlem', '168,898', '773,029'],
          ['3', 'Haarlemmermeer', '166,978', '1,920'],
          ['4', 'Zaanstad', '165,201', '1,777'],
          ['5', 'Alkmaar', '113,196', '52,005'],
          ['6', 'Purmerend', '96,182', '17,014'],
          ['7', 'Amstelveen', '95,840', '342'],
          ['8', 'Hilversum', '94,595', '1,245']
        ] },
        { kind: 'callout', h3: 'A rank is an order, not a distance', p: 'Converting a number to a position throws away everything except the order, and once the distances are gone nobody can put them back from the ranks alone. That is why "moved up two places" can mean a change of a few hundred people or a few hundred thousand, and why a league table of schools, hospitals or towns tells you far less than it appears to. A learner who has computed the gap column once for their own province will ask for it every time a table has a position in it. The table above was computed before this paragraph was written; every figure in it is from the municipal registers on 1 January 2026, and the gaps are subtraction.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any table with a position column',
      intro: 'School rankings, hospital rankings, app-store charts, sports tables: the same loss happens every time a number becomes a rank. Practised first on the province\'s own list.',
      body: [
        { kind: 'table', caption: 'When a number has been turned into a place', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Keep the number', 'Store the value beside the rank, never the rank alone', 'A table that cannot be un-ranked', 'Something you can still compute with'],
          ['Compute the gaps', 'Add a column for the distance to the place above', 'Places 2 and 4 read as far apart', 'The shape of the distribution'],
          ['Name the ties', 'Decide what counts as a tie before reading the order', 'A 342-person difference treated as a result', 'Honest positions'],
          ['Distrust movement', 'Ask how much the value moved when the rank moved', 'A headline about climbing two places', 'A sentence about people, not positions'],
          ['Sum the members', 'Check the list adds to the published whole', 'A ranking of an incomplete list', 'A table you can trust']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Eight towers of blocks in a row, tallest first, and the child writes the position on each. Then they measure the towers. Two neighbours are one block apart and two others are twenty. The child says the sentence themselves: second and third are almost the same and the numbers on the front did not say so.' },
          { h3: 'For teenagers', p: 'The 44 municipalities in Python: a sort, a rank column, a gap column, and a printed table. Then the harder question: which single change to the numbers would move Haarlem to fourth, and how small could it be.' },
          { h3: 'For adults', p: 'The same program on a sales league, a school ranking or a product chart from work, where the positions are reported weekly and the distances never are. Bring one if it is yours to share, and find out whether the movement everyone talked about was a hundred people or a hundred thousand.' }
        ] },
        { kind: 'p', text: 'The provincial totals, the 44 municipal populations, the areas, the regions and the Texel figures are published by the offices named in the sentences that use them. The gap column is subtraction on the published list and nothing on this page derives a Noord-Holland figure that no office has published.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From eight block towers to a league table with its distances restored',
    intro: 'One free lesson finds the rung. Which of the 44 municipalities the laptop is in does not.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Positions and heights', p: 'Children discover that first, second and third say nothing about how tall each tower is.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Sort, then subtract', p: 'Learners sort a list in Python and add the column the sort threw away.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'What moves a rank', p: 'Teenagers find the smallest change that reorders a table and say why it should not count.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'League tables at work', p: 'Adults rebuild a ranking from their own field with the values and the gaps beside it.', courses: ['data-analysis-mastery-course-college', 'statistics-probability-maths-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'A child in Hoorn or Den Helder can ask an AI to rank the province in a second. So why learn to sort it by hand?',
    intro: 'Because the assistant will hand back the ranks and stop, and the whole lesson is in the column it did not add.',
    p1: 'Ask a tool for the biggest towns in Noord-Holland and you get a numbered list, tidy and correct. What you do not get, unless you know to ask, is that places two and four are 3,697 people apart and places one and two are 773,029. The tool answered the question it was given. The question was the wrong one, and knowing that is not something the tool supplies.',
    p2: 'That is what the class trains and why the sort is still written by the learner: not the syntax, which the tools now produce, but the reflex of asking what a rank has thrown away and of computing the gaps to find out. A twelve-year-old in Purmerend who has done that with the province\'s list will do it with a school ranking at sixteen and a market-share chart at twenty-six without being asked. The tools between now and then will change; the reflex will not.',
    closer: 'For a Noord-Holland parent, then, the case for coding in 2026 is not that the child will sort lists for a living. It is that knowing what a number lost when it became a position is a skill, that it transfers, and that the only way anyone has found to teach it is to make the learner build the table and then put the column back.',
    blogAnchor: 'is coding still worth learning in 2026, when AI writes it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a province where the nearest centre can be an hour away',
    intro: 'From Den Helder the nearest large city is eighty kilometres south. From Texel it is a ferry and then that. From Enkhuizen or Medemblik a coding club in Amsterdam is not a weekly plan. A class that arrives over the connection is the same class in all of them.',
    cells: [
      { h3: 'The same lesson in Bergen and in Blaricum', p: 'The group is assembled on level, not on postcode. A child on Texel and a child in the Gooi sit in the same class at the same hour and neither has travelled.' },
      { h3: 'English, with the Dutch words left in', p: 'Groep, havo, vwo, profielkeuze and MYP are used as the family hears them at school. The teaching itself is in English, which is the language most of the province\'s international families share.' },
      { h3: 'A first lesson that is a lesson', p: 'A task pitched at the learner, a level and a named course by the end of the hour, and no card taken to arrange it.' },
      { h3: 'Five to ten learners, or one', p: 'Groups are built from what learners can do and want next. Private tuition is the option for a narrow goal or an examination year that is already full.' },
      { h3: 'Two lessons a week on the regio Noord calendar', p: 'Noord-Holland takes its school holidays with regio Noord, so the summer weeks fall earlier or later than Utrecht\'s and Eindhoven\'s in a given year. They are agreed before the slot is fixed.' },
      { h3: 'Four and a half hours in winter, three and a half in summer', p: 'That is the gap between a Noord-Holland afternoon and the teacher\'s evening in India, because only the Dutch clock moves. After-school, early-evening and weekend slots suit both ends, and the family fixes one during the free lesson.' }
    ],
    spec: { title: 'The ferry does not matter', p: 'A learner on Texel has the same teacher, the same group and the same weekly time as one in Haarlem, and the TESO timetable never enters into it. That is the plainest version of the online argument this province offers, and it applies just as well to Enkhuizen and to Den Helder.' }
  },

  fees: {
    h2: 'One free lesson, then USD 100 or USD 150 a month, in all 44 municipalities',
    intro: 'Published here in full, before anyone asks for a phone number.',
    first: 'A full lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'The rate is the one international rate, in US dollars, with no euro version and no difference between Amsterdam and Opmeer. The free lesson fixes the course and the slot; payment is arranged afterwards over WhatsApp. Pauses, changes of plan and missed lessons are described on the pricing page.'
  },

  reviewsH2: 'What families and learners say',

  book: {
    h2: 'Tell us the learner\'s level, and the municipality if you like',
    intro: 'The first task might be eight block towers, a Python sort with a gap column, or a league table from work that everyone reads by position and nobody by distance.',
    success: 'Thank you. Your Noord-Holland class request has been sent.'
  },

  faq: {
    h2: 'Noord-Holland coding class questions',
    intro: 'The province, its towns, the teaching and the terms.',
    items: [
      { q: 'Is Haarlem or Amsterdam the capital of Noord-Holland?', a: 'Haarlem, with 168,898 residents on 1 January 2026. Amsterdam, with 941,927, is the largest city and the national capital but not the provincial one. The province was formed in 1840 when Holland was divided into a northern and a southern half.' },
      { q: 'Which towns in Noord-Holland get their own page, and which are covered here?', a: 'Amsterdam, Amstelveen and Haarlem already have pages, and so does Haarlemmermeer. Uithoorn, Zaanstad and Alkmaar have theirs as well, and Hilversum, Purmerend and Hoorn follow in this series. The other 34 municipalities, from Dijk en Waard to Oostzaan, are named on this page with their populations, and a family in any of them books exactly the same class.' },
      { q: 'Why does the page make so much of the gap between Haarlem, Haarlemmermeer and Zaanstad?', a: 'Because 1,920 and 1,777 people separate places two, three and four while 773,029 separate places one and two, and a ranking shows none of that. Computing the gap column is the project on this page, and it applies to every league table a family will ever read.' },
      { q: 'We live on Texel. Does that change anything?', a: 'Nothing about the class. A learner on the island has the same teacher, the same group and the same weekly slot as one in Haarlem; the TESO ferry timetable never enters into it. The island has 13,946 residents on the local register and 13,958 on the provincial list for the same date, which is the kind of twelve-person discrepancy the class enjoys explaining.' },
      { q: 'Is the teaching in English or Dutch?', a: 'English. Dutch school vocabulary is kept exactly as the school uses it, from groep to profielkeuze. We do not offer Dutch-medium teaching and do not claim to.' },
      { q: 'What time are classes for a family in Noord-Holland?', a: 'The teacher is in India on a clock that never changes, so a Noord-Holland afternoon is four and a half hours behind in winter and three and a half in summer. After-school, early-evening and weekend slots work at both ends, and the recurring time is fixed during the free lesson.' },
      { q: 'What happens in the free lesson?', a: 'We find what the learner can do and set one task there. A child ranks eight block towers and then measures them. A teenager sorts the 44 municipalities in Python and adds the gap column. An adult brings a league table from work. The lesson ends with a course, a level, a weekly slot and the price in dollars, and nothing to pay.' },
      { q: 'Is there a Modern Age Coders classroom anywhere in Noord-Holland?', a: 'No, and none is claimed in Haarlem, in Amsterdam or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Noord-Holland coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a Noord-Holland group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or municipality. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'Down to the cities and towns with pages, and up to the country',
    html: 'Inside this province, <a class="cg-inline-link" href="/coding-classes-in-amsterdam">Amsterdam</a> has a page that hands off to eight districts and <a class="cg-inline-link" href="/coding-classes-in-amstelveen">Amstelveen</a> one written for the town with the highest Indian-origin share in the country. <a class="cg-inline-link" href="/coding-classes-in-haarlem">Haarlem</a>, <a class="cg-inline-link" href="/coding-classes-in-haarlemmermeer">Haarlemmermeer</a>, <a class="cg-inline-link" href="/coding-classes-in-zaanstad">Zaanstad</a>, <a class="cg-inline-link" href="/coding-classes-in-alkmaar">Alkmaar</a>, <a class="cg-inline-link" href="/coding-classes-in-purmerend">Purmerend</a>, <a class="cg-inline-link" href="/coding-classes-in-hilversum">Hilversum</a>, <a class="cg-inline-link" href="/coding-classes-in-hoorn">Hoorn</a>, <a class="cg-inline-link" href="/coding-classes-in-uithoorn">Uithoorn</a>, <a class="cg-inline-link" href="/coding-classes-in-velsen">Velsen</a>, <a class="cg-inline-link" href="/coding-classes-in-diemen">Diemen</a> and <a class="cg-inline-link" href="/coding-classes-in-weesp">Weesp</a> have pages of their own as well. Above them all sits the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>. Across the province line, <a class="cg-inline-link" href="/coding-classes-in-almere">Almere</a> and <a class="cg-inline-link" href="/coding-classes-in-utrecht">Utrecht</a> are the nearest neighbours with pages. For a learner who wants to build models rather than programs, the doors are <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> and the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-amsterdam', label: 'Amsterdam' },
    { href: '/coding-classes-in-amstelveen', label: 'Amstelveen' }
  ],

  personalityCss: `
.cg-root.cg-nhl .cg-hero-grid { gap: clamp(2rem, 5vw, 4.5rem); align-items: start; }
.cg-root.cg-nhl .cg-hero h1 { font-weight: 500; }
.cg-root.cg-nhl .cg-capsule { border-left-width: 3px; border-left-style: dashed; }
.cg-root.cg-nhl .cg-eyebrow { letter-spacing: 0.16em; font-weight: 500; }
.cg-root.cg-nhl .cg-section-head h2 { max-width: 32ch; }
.cg-root.cg-nhl .cg-grid-3 { grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: clamp(1.25rem, 2.5vw, 2rem); }
.cg-root.cg-nhl .cg-ladder-col { border-top: 2px solid var(--cg-rule-2); padding-top: 1.1rem; }
.cg-root.cg-nhl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-nhl .cg-pick-band { letter-spacing: 0.12em; }
`,

  dossier: {
    curriculumAuthority: 'Province of Noord-Holland: 44 municipalities, 3,009,386 residents (CBS 1 January 2026), 975 primary establishments (234,608 pupils) and 266 secondary (157,330). Capital Haarlem; largest city Amsterdam; formed 1840. Nine regions: Alkmaar, Amsterdam, Amstelland-Meerlanden, IJmond, Gooi en Vechtstreek, Kop van Noord-Holland, West-Friesland, Zaanstreek-Waterland, Zuid-Kennemerland. Regio Noord holidays. A province page is about the spread and links down to the city pages (Amsterdam, Amstelveen) rather than repeating them; the hub owns the national curriculum.',
    localProject: 'A rank is an order, not a distance (ordinal data read as interval). The 44 municipalities of Noord-Holland sorted by 1 January 2026 population: Amsterdam 941,927, Haarlem 168,898, Haarlemmermeer 166,978, Zaanstad 165,201, Alkmaar 113,196, Purmerend 96,182, Amstelveen 95,840, Hilversum 94,595. The gap column the league table omits: 773,029; 1,920; 1,777; 52,005; 17,014; 342; 1,245. The learner sorts, ranks, adds the gap column, and finds the smallest change that reorders the table. Distinct from the midrange/median trap (Tutong), from heavy tails defeating a mean (California) and from title-versus-size (reserved for Noord-Brabant): the flaw here is that converting values to positions destroys the distances. Computed before writing; all figures are the published registers, the gaps are subtraction.',
    requiredMentions: [
      '3,009,386',
      'Haarlemmermeer',
      'Zaanstad',
      'Dijk en Waard',
      'Den Helder',
      'Texel',
      'Zuid-Kennemerland',
      'West-Friesland',
      'Gooi en Vechtstreek',
      'Hollands Kroon',
      '773,029',
      '1,920 and 1,777',
      '1840'
    ],
    sources: [
      { claim: 'Noord-Holland 3,009,386 residents on 1 January 2026 (CBS provisional); 44 municipalities; land 2,662.54 km2, total 4,091.94 km2; 1,454,468 households; 436,820 under 15; 357,099 aged 15 to 25; 975 primary establishments (234,608 pupils); 266 secondary (157,330).', url: 'https://allecijfers.nl/provincie/noord-holland/' },
      { claim: 'All 44 municipalities on 1 January 2026: Amsterdam 941,927; Haarlem 168,898; Haarlemmermeer 166,978; Zaanstad 165,201; Alkmaar 113,196; Purmerend 96,182; Amstelveen 95,840; Hilversum 94,595; Dijk en Waard 91,411; Hoorn 76,202; Velsen 70,361; Gooise Meren 61,213; Den Helder 56,678; Hollands Kroon 50,592; Schagen 48,778; Medemblik 46,305; Beverwijk 43,052; Huizen 41,287; Heemskerk 39,529; Edam-Volendam 37,126; Castricum 37,077; Aalsmeer 33,459; Diemen 33,327; Uithoorn 32,204; Bergen 29,653; Heemstede 27,556; Wijdemeren 24,672; Heiloo 24,613; Koggenland 24,214; Bloemendaal 23,554; Stede Broec 22,445; Drechterland 20,550; Enkhuizen 18,738; Waterland 17,721; Zandvoort 17,335; Wormerland 16,328; Ouder-Amstel 14,525; Texel 13,958; Uitgeest 13,489; Blaricum 12,938; Opmeer 12,669; Landsmeer 11,685; Laren 11,547; Oostzaan 9,778.', url: 'https://allecijfers.nl/ranglijst/grootste-en-kleinste-gemeenten-in-inwoners-in-de-provincie-noord-holland/' },
      { claim: 'Capital Haarlem; largest city Amsterdam; 44 municipalities; land 2,664.82 km2 and water 1,427.11 km2; formed 1840 from the province of Holland; nine regions: Alkmaar, Amsterdam, Amstelland-Meerlanden, IJmond, Gooi en Vechtstreek, Kop van Noord-Holland, West-Friesland, Zaanstreek-Waterland, Zuid-Kennemerland; Commissaris van de Koning Arthur van Dijk.', url: 'https://nl.wikipedia.org/wiki/Noord-Holland' },
      { claim: 'Texel: 13,946 inhabitants on 1 January 2026; municipality 463.16 km2 of which about 162 km2 land and 301.16 km2 water; ferry from Den Helder.', url: 'https://nl.wikipedia.org/wiki/Texel' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland and Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' },
      { claim: 'Amstelveen 68.3 and Uithoorn 49.6 residents of Indian origin per thousand on 1 January 2024, the two highest municipal shares in the Netherlands.', url: 'https://www.cbs.nl/en-gb/news/2025/10/migrants-from-india-are-staying-longer-in-the-netherlands' }
    ],
    rejectedClaims: [
      'Annual tourist numbers or bed capacity for Texel. Not in the sources read; the island is described by residents and area only.',
      'Schiphol passenger figures. Not researched for this page; Haarlemmermeer is described by population and by what it contains.',
      'A single land-area figure for the province. The national statistics site gives 2,662.54 km2 and the provincial article 2,664.82; both are stated and neither is chosen.',
      'Any claim about which school holiday dates apply in a given year; only the region (Noord) is stated.',
      'Anything the Netherlands hub, Amsterdam or Amstelveen owns: the SLO core objectives, the lottery, the stock-and-flow model.'
    ]
  }
};
