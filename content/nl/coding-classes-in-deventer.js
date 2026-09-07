'use strict';
// Deventer: 105,111 people on 134 square kilometres, seven woonplaatsen, and
// a one-day book market whose attendance fell 42 percent in a year without
// the market changing at all.
// Spine: when a metric moves, ask whether the thing moved or the conditions
// moved, and never sample something once a year and call it a trend.

module.exports = {
  slug: 'coding-classes-in-deventer',
  code: 'dev',
  accent: '#813C0F',
  accentRationale: 'Deventer: a burnt sienna taken from old brick and gingerbread, kept clear of the reds already assigned to the neighbouring Overijssel and Gelderland pages',
  pageType: 'city',
  place: {
    name: 'Deventer',
    eyebrow: 'Deventer, Overijssel',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Overijssel' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Deventer, Netherlands',
  title: 'Coding Classes in Deventer | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Deventer for ages 6 to 67, from Bathmen to Diepenveen and Schalkhaar. First lesson free, then one flat fee.',
  ogDescription: 'Live online coding, Python, AI and app building for families in Deventer, built on a book market that lost 42 percent of its visitors to one wet Sunday.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'complete-app-development-masterclass-for-teens',
  verifiedOn: '8 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Deventer Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults across the seven woonplaatsen of Deventer, taught in English.'
  },

  h1: 'Coding classes in Deventer, where a book market lost 55,000 visitors in one year and nothing about the market had changed',
  capsuleQ: 'What are the best coding classes in Deventer?',
  capsule: 'Coding classes in Deventer reach 105,111 people (Statistics Netherlands, 1 January 2026) across 134 square kilometres at 799 residents to the square kilometre, in 48,940 households of which 19,715 hold one person. The book market held here on the first Sunday of August drew 130,000 visitors in 2008 and 75,000 in 2009, and the source gives the reason in three words: vanwege de regen. The stalls, the six kilometres and the several hundred booksellers were the same both years. Modern Age Coders teaches live online in English from Lettele to Bathmen, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'One Sunday in August 2008, 130,000 people came to the book market in Deventer. The next August, 75,000 came. Between those two Sundays the market did not shrink: it still ran to more than six kilometres, still had around 875 stalls, still filled the same streets with the same booksellers. What changed was the weather, and the source says so outright. A number that falls by 42 percent while the thing it supposedly measures stays exactly the same is not measuring that thing. It is measuring the day.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Deventer.',

  picks: {
    eyebrow: 'Course picks for Deventer',
    h2: 'Four courses for a city that teaches more students than it sends away',
    intro: 'A groep 6 child in Diepenveen who wants to build rather than watch, a teenager in Schalkhaar with an app in their head and no idea how one is made, a student at one of the institutions in the city who needs generative tools to be a skill rather than a rumour, and a parent in Bathmen who has to report a number every month and has begun to distrust it: four ways in.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python instead of dragged blocks, drawings that follow orders and a first program that notices a pattern, taught in English to the groep 5 to 8 child.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'A real application built from an empty project to something installable, for the teenager who has described an app to three adults and built none of it.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'College and adult', note: 'How the models are put together and where they fail, for the student who would rather understand the tool than be surprised by it.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Cleaning, joining and reading a series honestly, including how to spot the month where the conditions moved instead of the business, for anyone who reports figures upward.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Deventer today',
      h2: 'A hundred and five thousand people, and a fifth of them living alone',
      intro: 'The national register recorded 105,111 residents on 1 January 2026, in 48,940 households averaging 2.09 people, on 13,056 hectares of land inside 13,433 hectares of territory. The published density is 799 residents to the square kilometre. In 1995 the count was 84,797, so the recorded rise across thirty-one years is 20,314 people, which the source rounds to 24 percent and which works out at 23.96.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Nineteen thousand people on their own', p: '19,715 of the 48,940 households contain exactly one person, which is 40 percent of them. The largest age band is 28,306 residents between forty-five and sixty-five, closely followed by 27,844 between twenty-five and forty-five. 15,418 residents are under fifteen, 12,623 are between fifteen and twenty-five and 20,920 are sixty-five or over.' },
          { h3: 'Thirty-five primary schools, ten secondary', p: '35 primary establishments teach 8,388 pupils and 10 secondary establishments teach 5,088. That is roughly 240 pupils to a primary establishment and roughly 509 to a secondary one, arithmetic this page is performing on published counts rather than quoting.' },
          { h3: 'A city that imports its students', p: '8,586 people study at institutions inside the municipality. Among residents, 3,050 are enrolled in applied higher education and 780 at university level, a total of 3,830. More than twice as many study here as live here and study, which is a different shape from most municipalities this size. The two figures count different things and are never summed on this page.' }
        ] },
        { kind: 'spec', title: 'Seven named places, five of them with a published count', p: 'The municipality holds 7 woonplaatsen, 15 wijken and 69 buurten. Five of the seven have a published 2026 population: Deventer itself at 85,976, Schalkhaar at 6,121, Bathmen at 5,912, Diepenveen at 4,942 and Lettele at 1,668. Those five add to 104,619, which leaves 492 people across the two places without a published figure, a subtraction this page is doing rather than quoting. Bathmen was a separate municipality until 2005. The mayor is Ron König.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'One large town, four villages, and fifteen minutes between any two of them',
      intro: 'Four fifths of the municipality lives in the town itself and the rest is spread across a handful of villages in the surrounding countryside. Nothing here is far from anything else, which means the reason a family cannot get to a weekly class is almost never the journey.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Deventer town', p: 'At 85,976 in 2026, the town holds the overwhelming majority of the municipality, along with the station, the institutions that account for the 8,586 students and the streets the book market fills once a year.' },
          { h3: 'Schalkhaar', p: 'At 6,121, the largest of the villages, immediately north-east of the town and close enough that many families treat it as an outer neighbourhood rather than a separate place.' },
          { h3: 'Bathmen', p: 'At 5,912, east of the town and a municipality in its own right until 2005, which is recent enough that plenty of residents still describe themselves by the older label.' },
          { h3: 'Diepenveen', p: 'At 4,942, north of the town, a village with its own primary provision and a share of the families who moved out of the centre for space.' },
          { h3: 'Lettele', p: 'At 1,668, the smallest place with a published figure, out in the countryside between Deventer and the Salland villages, where a specialist class of any kind means travelling.' },
          { h3: 'The two without a figure', p: 'Seven woonplaatsen are registered and five are published, leaving 492 people somewhere in the municipality that this page does not name, because the source does not name them either.' }
        ] },
        { kind: 'p', text: 'Every one of the seven gets the same lesson at the same hour for the same fee. A learner is placed on demonstrated ability, so a child in Lettele and a child three streets from the station sit in the same group when they are at the same stage, and in different ones when they are not.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure, its source, and the hedges left exactly where the source put them',
      intro: 'The national count, the municipal entry with its two area figures, the market with its hedged numbers, and three claims this page declines to make.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The municipal count', p: 'Statistics Netherlands: 105,111 residents in 2026; 48,940 households averaging 2.09, 19,715 of them single-person, 40 percent; 15,418 under fifteen; 12,623 aged fifteen to twenty-five; 27,844 aged twenty-five to forty-five; 28,306 aged forty-five to sixty-five; 20,920 aged sixty-five and over; total area 13,433 hectares with 13,056 of land; density 799; 35 primary establishments with 8,388 pupils and 10 secondary with 5,088; 8,586 students at institutions here; 3,050 residents in applied higher education and 780 at university level; 7 woonplaatsen, 15 wijken and 69 buurten; 84,797 residents in 1995, a rise of 20,314.' },
          { h3: 'The municipality, described', p: 'Its own entry: 105,130 residents on 1 January 2026, 19 more than the national figure for the same date, both kept here; an area given as 134.37 square kilometres in the body of the entry and 134.33 in its own infobox, with 130.68 of land and 3.65 of water, and again both are kept; mayor Ron König; 2026 populations of Deventer 85,976, Schalkhaar 6,121, Bathmen 5,912, Diepenveen 4,942 and Lettele 1,668.' },
          { h3: 'The market, in the words of its entry', p: 'It is held on the first Sunday of August. The entry describes ruim 6 kilometer markt, circa 875 kramen met honderdduizenden boeken, and says it trekt ieder jaar zo\'n 120.000 bezoekers. The first edition, in 1989, had ruim 100 boekenkramen. Ruim means more than, circa means about and zo\'n means around, and this page keeps all three hedges rather than turning them into exact numbers.' },
          { h3: 'The two Sundays', p: 'The entry records 130.000 bezoekers in 2008, matched again in 2014, and for the following year writes: met 75.000 bezoekers was de editie 2009 vanwege de regen de slechtst bezochte in jaren. The reason is stated in the source. This page did not infer it.' },
          { h3: 'The milestone, quoted as written', p: 'The entry says that with 105,130 residents on 1 January 2026, Deventer was the thirty-first municipality in the Netherlands to pass 100,000 inhabitants, and a reference dates that crossing to September 2018. The sentence pairs a 2026 population with an event from 2018, and this page quotes it as it stands without building anything on it.' },
          { h3: 'Three claims not made here', p: 'The entry says the market wordt gezien als de grootste boekenmarkt van Europa, which is a report of how it is regarded rather than a measured fact, so it appears here as a quotation and nowhere as an assertion. No city-rights year is claimed, because the entries read do not use the word stadsrechten. And the rise of 20,314 people since 1995 is not described as growth of one unchanged territory, since Bathmen arrived in 2005.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the municipality, the market, any bookseller or any school named here and claims none. Where a source hedges a number, the hedge is reproduced.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'A 42 percent fall with no cause inside the thing being measured',
      intro: 'One market, one Sunday a year, two attendance figures 55,000 apart, and a stated reason that has nothing to do with books.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Separate the thing from the day', p: 'Attendance is meant to stand in for how big and how loved the market is. But attendance is produced by the market and the day together, and only one of those was different in 2009. The learner writes two columns, what belongs to the market and what belongs to the Sunday, and finds that the entire 42 percent sits in the second column.' },
          { h3: '2. Find the measures that did not move', p: 'Ruim 6 kilometer markt. Circa 875 kramen. The same booksellers and the same streets. None of these figures changed between 2008 and 2009, and none of them depends on the weather. Any one of them is a better measure of the market\'s size than the turnstile count, which is why the entry quotes them separately.' },
          { h3: '3. Record the conditions beside the count', p: 'When the count is all you have, store what the day was like next to it. The entry does exactly this, in four words, and those four words are the difference between a data point and a mystery. A column called conditions is the cheapest insurance a series can carry.' }
        ] },
        { kind: 'table', caption: 'What actually changed between one August and the next', head: ['Edition', 'Visitors', 'What changed about the market', 'What changed about the day'], rows: [
          ['2008', '130,000', 'nothing recorded', 'nothing recorded'],
          ['2009', '75,000', 'nothing recorded', 'vanwege de regen, in the source\'s own words'],
          ['2014', '130,000', 'nothing recorded', 'the 2008 figure was matched again'],
          ['A typical year', 'zo\'n 120,000', 'ruim 6 kilometres, circa 875 kramen', 'unrecorded'],
          ['1989, the first edition', 'not published', 'ruim 100 boekenkramen', 'unrecorded']
        ] },
        { kind: 'callout', h3: 'Ask whether the thing moved or the conditions moved', p: 'Almost every number an organisation watches is a stand-in for something it cannot measure directly. Footfall stands in for interest, signups stand in for demand, response time stands in for satisfaction, tickets closed stand in for productivity. Every one of those stand-ins is produced by two things at once, the quantity you care about and the circumstances of the measurement, and when the number moves the first question is always which of the two moved. Here the answer is unambiguous and printed in the source: the market was identical and it rained. The dangerous version is the one where nobody wrote the conditions down, because then a wet Sunday becomes a story about declining interest in books, and somebody redesigns a market that was never broken. There is a second problem stacked on top of it. This market happens once a year, so every annual observation is a single Sunday. With one sample per period there is no averaging, and the conditions of that one day pass straight through into the figure at full strength. A metric measured once a year is a metric that reports the weather.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for a number that stands in for something else',
      intro: 'A month\'s sales, a week\'s downloads, a term\'s attendance, a day\'s support tickets: all of them stand in for something, and all of them move for reasons outside it. Practised on a market with two Sundays 55,000 apart.',
      body: [
        { kind: 'table', caption: 'Working with a stand-in you cannot replace', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Say what it stands for', 'Write the sentence: this number is a stand-in for that thing', 'A proxy quietly promoted to the thing itself', 'A metric you can argue about honestly'],
          ['List the other inputs', 'Name everything besides the thing that moves the number', 'A move attributed to the only cause you thought of', 'A shortlist to check before panicking'],
          ['Log the conditions', 'Store weather, holidays, outages and campaigns in the same row', 'A drop nobody can explain a year later', 'Rows that still make sense to a stranger'],
          ['Watch the stable measures too', 'Track something the conditions cannot touch', 'A whole picture built from the noisiest signal', 'A second opinion built into the data'],
          ['Count the samples per period', 'Ask how many observations the period figure rests on', 'One bad day reported as a year', 'An honest sense of how much the number can wobble']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Count how many children play outside at break on five days, one of them wet. The children work out that the playground did not get smaller on Tuesday, then invent a way of writing the weather down so next month\'s count still means something.' },
          { h3: 'For teenagers', p: 'The market figures in Python, with a conditions field beside each year, a function that refuses to compare two years whose conditions differ, and a chart that marks 2009 rather than hiding it. The stretch: write the headline a newspaper would run from these numbers alone, then the correction it would have to print.' },
          { h3: 'For adults', p: 'A real series from work with a drop nobody explained. Adults usually find that the conditions were never recorded, that everybody remembers a different reason, and that a decision was taken on the strength of it.' }
        ] },
        { kind: 'p', text: 'Population, household, age, area, school and student figures come from the national statistics office; the municipal description, the village populations, the mayor and the milestone sentence come from the encyclopaedia entry for the municipality; the market length, stall counts, visitor figures, the 1989 edition and the rain come from the entry for the market. The percentage changes, the pupils-per-establishment figures and the residual of 492 people are this page dividing and subtracting published numbers, and are labelled as arithmetic wherever they appear.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a wet Tuesday in the playground to a series that logs its own conditions',
    intro: 'Which rung a learner starts on is settled in the free hour by what they can already do, and never by which of the seven places the address is in.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Why were there fewer children out today?', p: 'Children count, notice, and invent a way of writing down what the day was like.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'What is this number standing in for?', p: 'Learners name the thing they actually care about and the number they can actually get.', courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 14 to 18', h3: 'Conditions as a column', p: 'Teenagers build a dataset that refuses to compare two rows whose circumstances differ.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'The drop nobody wrote down', p: 'Adults reconstruct a real fall at work and find out what was never recorded beside it.', courses: ['data-analysis-mastery-course-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will tell you the book market declined. Why should a child in Deventer learn to ask what the weather was?',
    intro: 'Because 130,000 to 75,000 is a real fall, and the reason is printed four words away in the same paragraph.',
    p1: 'Feed a model the two attendance figures and ask what happened, and the answer will be fluent, plausible and about declining interest in second-hand books. Nothing forces it to reach for the sentence that says vanwege de regen, and a summary that keeps the numbers while dropping the clause is exactly the kind of output that reads well and misleads completely. The failure is not that the tool cannot see the reason. It is that the question invited an explanation and an explanation is what it produced.',
    p2: 'So the learner practises the other order: before explaining a move, find out what else could have made it. That means keeping the conditions in the data rather than in somebody\'s memory, and writing code that will not compare two rows whose circumstances differ. It is a small discipline and it survives contact with adult life. A fifteen-year-old in Bathmen who has argued about a wet Sunday will, at thirty, be the person who asks whether the quarter was worse or merely shorter. The tools will keep offering a reason. Choosing not to accept the first one is a person\'s work.',
    closer: 'The case for a child in Deventer learning to code in 2026 has nothing much to do with books. It is that nearly every number a working adult is shown is a stand-in for something else, that the stand-in moves for reasons outside the thing, and that a market with two Sundays 55,000 apart and the cause written down is the plainest possible place to learn it.',
    blogAnchor: 'why a child in 2026 still gains from writing the code themselves'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a city where the obstacle is the diary, not the distance',
    intro: 'Deventer is compact and well connected, and almost nobody here is more than a quarter of an hour from the centre. What families actually run out of is evenings.',
    cells: [
      { h3: 'One fixed hour, at your own table', p: 'The lesson comes to the house in Diepenveen, Lettele or the middle of town at the same time every week, which is the only arrangement that survives two working parents and a hockey club.' },
      { h3: 'English in the lesson, Dutch on the report card', p: 'All teaching is in English. Groep, havo, vwo and profielkeuze are left in Dutch on purpose, because those are the words the school itself prints and swapping them for English ones only adds a translation step.' },
      { h3: 'What comes out of the free hour', p: 'A level the learner has demonstrated rather than described, the course that follows from it, and a slot in the week. Nobody is asked for a card at any point in it.' },
      { h3: 'Grouped by stage, not by street', p: 'Two learners at the same level work together whether they are in Schalkhaar or three doors from the station, and two at different levels do not, whatever their addresses say.' },
      { h3: 'Two lessons a week, regio Noord holidays', p: 'A repeating twice-weekly slot, normally eight lessons in a month. Overijssel takes its school holidays with regio Noord, and the weeks a family will be away are written into the plan before it starts.' },
      { h3: 'Three and a half hours ahead, four and a half in winter', p: 'Only the Dutch clock changes, so the distance to the teacher depends on the season. After school, early evening and either weekend day all land inside both working days.' }
    ],
    spec: { title: 'Twice as many students study here as live here and study', p: '8,586 people are enrolled at institutions inside the municipality while 3,830 residents are enrolled anywhere at that level. Deventer is a place young people come to for education, which is excellent for anyone at that stage and no help at all to an eleven-year-old who wants to learn Python properly. A group of five to ten assembled on ability from across the world fills exactly that gap, at every age up to sixty-seven.' }
  },

  fees: {
    h2: 'The fee, in dollars, identical in all seven places',
    intro: 'Set out here instead of being kept back for a call.',
    first: 'A whole lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'One international rate exists and it is quoted in dollars. There is no euro figure, which means Lettele and the centre of Deventer are charged exactly the same. Nothing is paid until the free lesson has settled a course and an hour, and payment is then handled over WhatsApp. Pausing, changing plan and missing a week are described on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, printed word for word as they were left',

  book: {
    h2: 'Tell us the stage, not the street',
    intro: 'The first task might be counting children in a playground across a wet week, two attendance figures with a conditions column added, or a drop in a work series that nobody wrote an explanation beside.',
    success: 'Thank you. Your Deventer class request has been sent.'
  },

  faq: {
    h2: 'Deventer coding class questions',
    intro: 'The municipality, its villages, its book market, the teaching and the terms.',
    items: [
      { q: 'Why did the book market lose 55,000 visitors in a year?', a: 'It did not lose them for any reason connected to the market. The entry records 130,000 visitors in 2008 and 75,000 in 2009, and states that the 2009 edition was the worst attended in years vanwege de regen, meaning because of the rain. The market itself was unchanged, still running to more than six kilometres with around 875 stalls, and the 2008 figure was matched again in 2014. Working out that the fall belongs to the day rather than to the thing is the project on this page.' },
      { q: 'How big is the Deventer book market?', a: 'The entry describes more than six kilometres of market and around 875 stalls holding hundreds of thousands of books, and says it draws around 120,000 visitors a year. Those hedges are in the source and this page keeps them. The first edition, in 1989, had more than 100 book stalls. The entry also says the market is seen as the largest in Europe, which is a report of how it is regarded rather than a measurement, so this page quotes it and does not repeat it as fact.' },
      { q: 'Which places are in the municipality of Deventer?', a: 'Seven woonplaatsen are registered, along with 15 wijken and 69 buurten, and five have a published 2026 population: Deventer itself at 85,976, Schalkhaar at 6,121, Bathmen at 5,912, Diepenveen at 4,942 and Lettele at 1,668. Those five leave 492 people in the two places the source does not name. Bathmen was a separate municipality until 2005.' },
      { q: 'Is the class taught in Dutch?', a: 'No. Teaching runs in English from start to finish. The one deliberate exception is Dutch school vocabulary, which is kept exactly as a school writes it, so groep, havo, vwo and profielkeuze are spoken rather than translated. No Dutch-language version of any course exists.' },
      { q: 'What times work for a family in Deventer?', a: 'The teacher sits three and a half hours ahead during Dutch summer time and four and a half during winter, since the Indian clock does not move. The practical window is the end of the school day through to mid-evening, with Saturday and Sunday fully open, and a single repeating slot is fixed during the free lesson.' },
      { q: 'How many students are there in Deventer?', a: 'Two different figures answer two different questions and are never added here. The municipality counts 8,586 people studying at institutions inside it. Separately, among residents, 3,050 are enrolled in applied higher education and 780 at university level. The first counts places filled in the city, the second counts residents wherever they study.' },
      { q: 'What happens in the free lesson?', a: 'The teacher finds where the learner\'s ability currently stops by watching them work, then sets one task just past that point. A young child might count how many children are outside on a wet day and on a dry one. A teenager adds a conditions column to a small dataset and writes a function that refuses to compare rows across different circumstances. An adult brings a series from work. It ends with a course, a rung, a weekly hour and a dollar figure, with nothing charged.' },
      { q: 'Is there a Modern Age Coders classroom in Deventer?', a: 'There is not, and none is claimed in Deventer, in Bathmen or anywhere else in the Netherlands. Every lesson is live and online and needs a laptop or desktop, working audio, a current browser and a connection that stays up. The telephone number on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Deventer coding classes cost?', a: 'The first lesson is free of charge. After that, group tuition costs USD 100 a month for two live lessons every week, normally eight in a month, in a group of five to ten learners. One-to-one tuition costs USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all agreed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or village. One-to-one tuition means one learner and one teacher. When no group at the right level is currently running, a family can choose one-to-one lessons or wait until the next group forms.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'North to the provincial capital, east to the border, and up to the country',
    html: 'Deventer belongs to <a class="cg-inline-link" href="/coding-classes-in-overijssel">Overijssel</a>, whose page takes on the dike arithmetic. <a class="cg-inline-link" href="/coding-classes-in-zwolle">Zwolle</a> is the provincial capital just up the line and <a class="cg-inline-link" href="/coding-classes-in-enschede">Enschede</a> sits out towards the German border, while <a class="cg-inline-link" href="/coding-classes-in-apeldoorn">Apeldoorn</a> is a short ride west into Gelderland. All of them descend from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and a learner who wants trained models rather than running programs should begin at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Settle this on WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-overijssel', label: 'Overijssel' },
    { href: '/coding-classes-in-zwolle', label: 'Zwolle' }
  ],

  personalityCss: `
.cg-root.cg-dev .cg-hero-grid { align-items: start; gap: clamp(1.5rem, 3.6vw, 2.8rem); }
.cg-root.cg-dev .cg-hero h1 { font-weight: 500; letter-spacing: -0.0115em; line-height: 1.12; }
.cg-root.cg-dev .cg-capsule { border-left-width: 4px; border-left-style: solid; border-bottom: 2px solid var(--cg-accent-soft); padding-left: 1.35rem; padding-bottom: 0.85rem; }
.cg-root.cg-dev .cg-eyebrow { letter-spacing: 0.135em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-dev .cg-section-head h2 { max-width: 36ch; }
.cg-root.cg-dev .cg-grid-3 { gap: clamp(1rem, 2.15vw, 1.6rem); }
.cg-root.cg-dev .cg-card { border-radius: 3px; }
.cg-root.cg-dev .cg-table caption { letter-spacing: 0.02em; font-style: italic; }
.cg-root.cg-dev .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dev .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.95rem; }
`,

  dossier: {
    curriculumAuthority: 'City and municipality of Deventer, Overijssel: 105,111 residents (CBS 2026) on 134 km2 at a published density of 799; 48,940 households averaging 2.09 with 19,715 single-person, 40 percent; 35 primary establishments (8,388 pupils) and 10 secondary (5,088); 8,586 students at institutions here against 3,830 residents enrolled in higher education, so the municipality is a net importer of students, the opposite shape to Emmen. Seven woonplaatsen, 15 wijken, 69 buurten, five kernen published for 2026 leaving a residual of 492. Bathmen was separate until 2005. Regio Noord holidays. The city page argues from a confounded proxy; Overijssel owns the dike arithmetic, Zwolle owns the unfalsifiable superlative and Emmen owns the launch-year baseline.',
    localProject: 'Ask whether the thing moved or the conditions moved. The Deventer book market drew 130,000 visitors in 2008 and 75,000 in 2009, a fall of 42 percent, and the entry states the cause outright: met 75.000 bezoekers was de editie 2009 vanwege de regen de slechtst bezochte in jaren. Nothing about the market changed, since it still ran to ruim 6 kilometer markt with circa 875 kramen, and the 2008 figure was matched again in 2014. Attendance is a stand-in produced jointly by the thing and the circumstances of measurement, so a move in it must be attributed before it is explained, and the stable measures (length, stall count) are the ones the weather cannot touch. A second layer: the market is held once a year on the first Sunday of August, so each annual observation is a single day with no averaging, and the conditions of that day pass through at full strength. Distinct from the launch-baseline trap (Emmen), where the first point comes from a different process, and from the cross-field validation trap (Den Bosch): here every value is correct, the series is internally consistent, and the defect is that the metric is confounded by something outside the thing it names. The source hedges (ruim, circa, zo\'n) are reproduced rather than resolved.',
    requiredMentions: [
      '105,111',
      '48,940',
      '19,715',
      '84,797',
      '8,388',
      '5,088',
      '8,586',
      '85,976',
      '75,000',
      '130,000',
      'Schalkhaar',
      'Bathmen',
      'Diepenveen',
      'Lettele'
    ],
    sources: [
      { claim: 'Deventer 105,111 residents in 2026 (CBS); 48,940 households averaging 2.09, 19,715 single-person (40 percent); 15,418 aged 0 to 15; 12,623 aged 15 to 25; 27,844 aged 25 to 45; 28,306 aged 45 to 65; 20,920 aged 65 and over; total area 13,433 ha, land 13,056 ha; density 799; 35 primary establishments (8,388 pupils) and 10 secondary (5,088); 8,586 students at institutions in the municipality; HBO 3,050 and WO 780; 7 woonplaatsen, 15 wijken and 69 buurten; 84,797 residents in 1995, a rise of 20,314 (24 percent).', url: 'https://allecijfers.nl/gemeente/deventer/' },
      { claim: 'Deventer 105,130 residents per 1 January 2026; area given as 134.37 km2 in the body and 134.33 km2 in the infobox, of which 130.68 land and 3.65 water; mayor Ron König (D66); with 105,130 inhabitants Deventer was the 31st municipality in the Netherlands to exceed 100,000, a crossing dated to September 2018 in the entry reference; 2026 kern populations Deventer 85,976, Schalkhaar 6,121, Bathmen 5,912, Diepenveen 4,942, Lettele 1,668. The entry does not use the word stadsrechten.', url: 'https://nl.wikipedia.org/wiki/Deventer_(gemeente)' },
      { claim: 'Deventer Boekenmarkt: held on the first Sunday of August; ruim 6 kilometer markt; circa 875 kramen met honderdduizenden boeken; trekt ieder jaar zo\'n 120.000 bezoekers; 130.000 bezoekers in 2008, equalled in 2014; met 75.000 bezoekers was de editie 2009 vanwege de regen de slechtst bezochte in jaren; the first edition in 1989 had ruim 100 boekenkramen; it wordt gezien als de grootste boekenmarkt van Europa.', url: 'https://nl.wikipedia.org/wiki/Deventer_Boekenmarkt' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'That the book market is the largest in Europe. The entry says it is seen as such, which is a report of reputation, and the page quotes the claim without asserting it.',
      'A city-rights year for Deventer. The entries read do not use the word stadsrechten and none is claimed.',
      'A single area figure. The municipal entry gives 134.37 km2 in its body and 134.33 in its infobox, and both are printed here.',
      'The hedged numbers turned into exact ones. Ruim 6 kilometer, circa 875 kramen and zo\'n 120.000 bezoekers keep their hedges throughout.',
      'The rise of 20,314 residents since 1995 described as growth of unchanged ground. Bathmen joined the municipality in 2005, and what a boundary change does to a series belongs to the Alkmaar page.',
      'Any division of the 2023 city-article figure of 82,960 by a 2026 municipal total. Mixing vintages is the argument of the Apeldoorn page.',
      'Anything the Overijssel or Zwolle pages own.'
    ]
  }
};
