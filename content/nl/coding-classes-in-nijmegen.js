'use strict';
// Nijmegen: largest municipality of Gelderland, a Roman town on the Waal, and
// the city that declared itself the oldest in the country in 2005. Spine: four
// cities claim the title, the criterion decides the winner, and the comparison
// table has empty cells that get read as zeros.

module.exports = {
  slug: 'coding-classes-in-nijmegen',
  code: 'nij',
  accent: '#424E08',
  accentRationale: 'Nijmegen: a dark olive for the Roman city on the Waal, placed by the solver clear of Amstelveen\'s green and Gelderland\'s forest',
  pageType: 'city',
  place: {
    name: 'Nijmegen',
    eyebrow: 'Nijmegen, Gelderland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Gelderland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Nijmegen, Netherlands',
  title: 'Coding Classes in Nijmegen | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Nijmegen for ages 6 to 67, from Hatert and Hees to Lent and the Waalsprong. First lesson free, then one flat fee.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in Nijmegen, the largest city of Gelderland, built on a claim to be the oldest city that four towns make at once.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'artificial-intelligence-complete-masterclass-college',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Nijmegen Learners',
    description: 'Ability-placed online coding, Python, AI and mathematics for children, teenagers and adults in Nijmegen, Lent, Hatert, Hees, Neerbosch and the Waalsprong, taught in English.'
  },

  h1: 'Coding classes in Nijmegen, the oldest city in the Netherlands under three of the five tests',
  capsuleQ: 'What are the best coding classes in Nijmegen?',
  capsule: 'Coding classes in Nijmegen serve a municipality of 189,871 people (Statistics Netherlands, 1 January 2026), the largest in Gelderland and the densest city on this site at 3,579 to the square kilometre. It declared itself the oldest city in the country in 2005, and it is one of four places that claim the title: change the test from Roman city rights to continuous habitation and the winner changes with it. Every district of it is taught by Modern Age Coders on the same live online basis, in English, to learners of any age from 6 to 67. An opening lesson is given free; from there the monthly figure is USD 100 for a group of five to ten and USD 150 for private tuition.',
  lead: 'Four Dutch towns claim to be the oldest city in the country and all four are telling the truth about something. Nijmegen has Roman city rights from about the year 98, and a garrison from 19 BC. One rival has a Roman bath house begun between 65 and 73. Another has been lived in without a break ever since the legions left. A third was a planned Roman town that was abandoned around 270. Nothing here is in dispute except which question counts, and a child who has built that table has learned more about evidence than a year of being told to check sources.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Nijmegen.',

  picks: {
    eyebrow: 'Course picks for Nijmegen',
    h2: 'Four courses for a city that argues about evidence for a living',
    intro: 'A groep 5 child in Lent who wants to build rather than watch, a teenager in Hatert aiming at a technical profile, a Radboud student who needs the theory behind the models and not only the library call, and a parent in Neerbosch whose team has been told to automate something: four doors into one city.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python, turtle graphics and a first program that learns a rule, in English, for the groep 5 to 8 child anywhere from Hees to the Waalsprong.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Python and real datasets to a first trained model, for the teenager who wants to test a claim instead of repeating it.' },
      { course: 'artificial-intelligence-complete-masterclass-college', band: 'College and adult', note: 'Search, logic and agents from the ground up, for the student who wants to know what the system is actually doing before calling an API.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Adults', note: 'Scripting, scraping and automation for the working parent whose week is full of tasks a short program could finish.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Nijmegen today',
      h2: 'The largest city in Gelderland, the densest on this site, and more than half of it living alone',
      intro: 'The national register held 189,871 people in the municipality on 1 January 2026, in 104,361 households averaging 1.78 people, on 52.81 square kilometres of land inside 57.63 of territory, giving a published density of 3,579 to the square kilometre. In 1995 the count was 147,557, so Nijmegen has gained 42,314 people in thirty-one years, a rise of 29 percent.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Fifty-five percent living alone', p: '57,902 of the 104,361 households hold exactly one person. 32,331 residents are between fifteen and twenty-five and 58,556 are between twenty-five and forty-five, while 24,590 are under fifteen and 32,587 are sixty-five or over. That is a university city\'s shape, and it is why this page is careful about which averages it quotes.' },
          { h3: 'Two teaching systems in one city', p: '45 primary establishments teach 13,915 pupils and 19 secondary establishments teach 14,152, so secondary outnumbers primary here as it does in only a handful of Dutch cities. In higher education the municipality counts 7,610 at the applied level and 13,180 at the university level.' },
          { h3: 'The university', p: 'Radboud University was founded on 15 May 1923 as the Roomsch Katholieke Universiteit Nijmegen. On 1 October 2022 it had 24,633 students enrolled and about 6,147 full-time-equivalent staff, of whom 3,467 were academic, across seven faculties. That enrolment count and the municipal count answer different questions and are not combined anywhere on this page.' }
        ] },
        { kind: 'spec', title: 'A city that grew across its own river', p: 'Nijmegen sits on the south bank of the Waal, and the Waalsprong, the leap over the river, has put Lent, Ressen and Oosterhout inside the city\'s growth over the past three decades. The road bridge was completed in 1936 and De Oversteek was added downstream. The Vierdaagse, the four-day march, has been held since 1909.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Nine wijken on the hill, and the districts across the water',
      intro: 'The statistics office divides the municipality into 9 wijken and 44 buurten, the smallest wijk count of any city on this site, and the ordinary names people use cut across them.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The centre and the hill', p: 'The old city above the Waal, the Valkhof where the Roman and imperial fortifications stood, and the station. The tightest housing in the municipality and much of the 55 percent who live alone.' },
          { h3: 'Hatert and the south', p: 'Post-war housing towards the Maas-Waalkanaal, with primary schools full of families and a bus ride to the secondary schools on the other side of the city.' },
          { h3: 'Hees and Neerbosch', p: 'West of the centre, older village cores absorbed into the city, now districts with their own names, their own schools and their own opinions about where Nijmegen ends.' },
          { h3: 'Sint Anna and the west', p: 'The western districts towards the canal and the industrial edge, mixed housing and the part of the city that looks towards Wijchen and Beuningen rather than towards the hill.' },
          { h3: 'Lent and the Waalsprong', p: 'North of the river: Lent, Ressen and Oosterhout, villages that became the city\'s newest neighbourhoods. New primary schools, young families, and a bridge between home and the rest of the municipality.' },
          { h3: 'What none of this decides', p: 'Nine wijken, 44 buurten and a river do not affect placement. A learner in Lent and a learner on the hill sit in the same group when they are at the same stage and in different ones when they are not.' }
        ] },
        { kind: 'p', text: 'The lesson reaches every district at one hour, and the only question asked before it is what the learner can already do.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure and its source, and the four claims kept side by side',
      intro: 'The national count, the encyclopaedia entries for the city and for the oldest-city question, the university, and the places where the record is silent.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The municipal count', p: 'Statistics Netherlands, provisional, 1 January 2026: 189,871 residents; 104,361 households averaging 1.78 people, 57,902 of them single-person, 55 percent; 24,590 under fifteen; 32,331 aged fifteen to twenty-five; 58,556 aged twenty-five to forty-five; 32,587 aged sixty-five and over; 45 primary establishments with 13,915 pupils and 19 secondary with 14,152; 7,610 students at the applied level and 13,180 at the university level; total area 5,763 hectares, land 5,281; density 3,579; 9 wijken and 44 buurten; 147,557 residents in 1995, a rise of 42,314.' },
          { h3: 'The city, described', p: 'Nijmegen\'s own entry: 189,850 residents on 1 January 2026, 21 fewer than the national figure for the same date, both kept; area 57.63 square kilometres, 53.09 of land and 4.54 of water, against 52.81 of land nationally, both kept; mayor Hubert Bruls; described there as ninth among the country\'s cities and first among the province\'s municipalities; formal city rights in 1230, from which point it was a free imperial city; the Waalbrug completed in 1936 and De Oversteek added later; the Vierdaagse held since 1909.' },
          { h3: 'The Roman claim', p: 'The same entry: Ulpia Noviomagus Batavorum, taken as the direct predecessor of the present city, received Roman city rights around the year 100, and Nijmegen is one of four places whose recorded history supports a claim to the title of oldest city in the Netherlands. The entry does not name the other three.' },
          { h3: 'The other three', p: 'The encyclopaedia\'s article on the question names them and dates them. Nijmegen: Roman city rights around the year 98, Roman soldiers present from 19 BC, medieval rights in 1230, and a self-declaration as the oldest city in 2005. Voorburg, as Forum Hadriani: market rights after a presumed visit by the emperor Hadrian in 121, and abandonment after 270. One southern city: continuously inhabited after the Romans left, no Roman city rights, medieval rights in 1284. Another southern town, as Coriovallum: the oldest stone building in the country, whose bath house had a first construction phase between 65 and 73, but no continuous habitation and no medieval city rights.' },
          { h3: 'Two dates for one grant', p: 'The city\'s own entry puts the Roman city rights at around the year 100 and the article on the oldest-city question puts them at around the year 98. Both are approximations in their sources and both are printed here; nothing on this page turns on the difference.' },
          { h3: 'The university', p: 'Radboud University: founded 15 May 1923 as the Roomsch Katholieke Universiteit Nijmegen; 24,633 students enrolled on 1 October 2022; 6,147 full-time-equivalent staff in 2022, of whom 3,467 academic; seven faculties; rector magnificus José Sanders since 17 October 2023.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is unaffiliated with the municipality, with the university and with every school this page names, and nothing above should be read as suggesting otherwise. They appear so that a page claiming to serve Nijmegen can show its working, including the point at which the record stops.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which is the oldest city? Build the table, and then notice what the empty cells are doing',
      intro: 'Four candidates, five tests, three different winners, and a comparison that quietly turns silence into evidence.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Write the tests down', p: 'Before comparing anything the learner has to say what "oldest city" means. Five candidate tests come out of the sources: the earliest Roman grant of rights, the earliest recorded military presence, the oldest surviving Roman stone building, unbroken habitation since Roman times, and the earliest medieval city rights. Each is defensible and none is obviously the right one.' },
          { h3: '2. Fill what the sources give', p: 'Nijmegen wins the Roman grant, the military presence and the medieval rights. Coriovallum wins the oldest stone building. The continuously inhabited southern city wins habitation. Forum Hadriani wins none of the five as recorded, and is still named as one of the four claimants. Three different winners from one set of sources.' },
          { h3: '3. Look at what is missing', p: 'Most cells are empty. No source read here gives a military presence date for the other three, or a stone-building date for Nijmegen, or tells us whether Nijmegen was inhabited without a break. A program that scores this table has to decide what an empty cell means, and the tempting choice, treating it as a zero, converts "nobody wrote it down" into "it did not happen".' }
        ] },
        { kind: 'table', caption: 'Four claimants, five tests, and the cells the sources do not fill', head: ['Test', 'Nijmegen', 'Forum Hadriani, Voorburg', 'The continuously inhabited city', 'Coriovallum'], rows: [
          ['Earliest Roman grant of rights', 'city rights about 98 to 100', 'market rights after about 121', 'none recorded', 'none recorded'],
          ['Recorded military presence from', '19 BC', 'not stated in these sources', 'not stated in these sources', 'not stated in these sources'],
          ['Oldest surviving Roman stone building', 'not stated in these sources', 'not stated in these sources', 'not stated in these sources', 'bath house, first phase 65 to 73'],
          ['Inhabited without interruption since Roman times', 'not stated in these sources', 'no, abandoned after 270', 'yes', 'no'],
          ['Earliest medieval city rights', '1230', 'not stated in these sources', '1284', 'none recorded']
        ] },
        { kind: 'callout', h3: 'An empty cell is not a zero, and a superlative is not a fact until the test is named', p: 'Two separate mistakes are waiting in this table and both are ordinary. The first is answering a superlative before defining it: "oldest" is not a property of a city but of a city under a test, and here three of the four candidates win under some test. The second is quieter and does more damage in real work: when a comparison is turned into code, missing values have to become something, and the something is usually zero or false. Do that here and Nijmegen scores nothing for its stone buildings while Coriovallum scores nothing for its garrison, and both are artefacts of what nobody happened to write down. A learner who has met this once will insist that a dataset distinguish "no" from "not recorded", which is the single most useful habit anyone can carry into working with real data. The table was built from the sources before this paragraph was written, and every unfilled cell says so rather than guessing.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any table with holes in it',
      intro: 'Product comparisons, medical records, survey answers, school league tables, historical claims: real data is full of blanks, and the blanks mean at least three different things. Practised on an argument this city has been having for a century.',
      body: [
        { kind: 'table', caption: 'When a value is missing', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Name the test first', 'Define the criterion before collecting any candidate', 'A superlative that changes with the question', 'A comparison that can be settled'],
          ['Separate the three blanks', 'Distinguish "no", "not recorded" and "not applicable" in the data itself', 'Silence counted as a negative', 'A table that says what it knows'],
          ['Never default to zero', 'Make the missing value explicit and refuse to sum over it silently', 'A garrison scored as none', 'Totals you can defend'],
          ['Count the coverage', 'Report how many cells each row and column actually has', 'A winner declared from two filled cells', 'An honest confidence'],
          ['Re-run under each test', 'Show every criterion and its winner rather than choosing one', 'One claim presented as the answer', 'A reader who can decide for themselves']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Four toy animals and a question: which is best? The children pick tests, fastest, tallest, loudest, softest, and discover a different winner each time. Then one animal has no answer for one test, and they have to decide whether that means it loses or means they do not know. The distinction lands hard at nine years old and never leaves.' },
          { h3: 'For teenagers', p: 'The table above in Python with three states rather than two: a value, a recorded absence, and an unknown. A scorer that refuses to rank when coverage is below a threshold. Then the stretch: what would you need to find in an archive to fill the four unknown cells, and which one would change a winner?' },
          { h3: 'For adults', p: 'The same three-state discipline on a spreadsheet from work where blank cells are already being summed, averaged or filtered. Adults almost always find at least one report where an empty cell has been silently counted as a zero and somebody has been ranked on it.' }
        ] },
        { kind: 'p', text: 'The population, household, area, density, school and university figures come from the offices and entries named beside them. The five tests are this page\'s framing of claims those sources make, every cell is either quoted or marked as not stated, and no cell was filled by inference.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From four toy animals to a scorer that refuses to guess',
    intro: 'Where a learner starts is decided in the free hour, and no part of that decision involves the address.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Best at what?', p: 'Children choose their own tests and watch the winner change with each one.', courses: ['kids-coding-blocks-masterclass', 'python-ai-kids-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Blank is not nought', p: 'Learners build a small table with gaps and decide, in code, what a gap means.', courses: ['maths-through-coding', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 14 to 18', h3: 'Three states and a coverage check', p: 'Teenagers write a scorer that reports coverage and declines to rank when the evidence is thin.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Missing data at work', p: 'Adults audit a live spreadsheet for blanks that are being treated as zeros.', courses: ['artificial-intelligence-complete-masterclass-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an AI which is the oldest city in the Netherlands and it will name one. Why should a child in Nijmegen learn to ask which test it used?',
    intro: 'Because four towns have a claim, the model will pick whichever the phrasing favours, and it will not tell you that the answer moved.',
    p1: 'A tool asked this question produces a confident sentence, usually with Nijmegen in it, sometimes with a rival, and occasionally with a hedge. What it will not do on its own is lay out the five tests, show that three different towns win among them, and point out that most of the comparison is blank. Nor will it flag the deeper problem, which is that when this sort of table gets loaded into a program the blanks silently become zeros and the missing evidence starts voting.',
    p2: 'That is why the learner still builds it. Asked directly the tool will explain missing-data handling perfectly well and will write the three-state scorer on request. The thing it does not supply is the reflex of looking at a comparison and asking how many cells are actually filled. A thirteen-year-old in Lent who has done that with the Roman record will do it with a product comparison at twenty-three and a patient dataset at thirty-three, and will be the one who notices that half the rows are inferences. Whatever the tools are called then, blank cells will still need a policy.',
    closer: 'Archaeology is not the reason to put a Nijmegen child in front of an editor in 2026. The reasons are narrower and more durable: a superlative is empty until its test is named, real tables come with holes in them, writing code forces a decision about what a hole means, and taking that decision carelessly is the ordinary route by which confident nonsense gets published.',
    blogAnchor: 'the longer case for teaching a child to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a compact city with a river through it',
    intro: 'The hill, the west and the Waalsprong are each a real trip on a dark evening, and the bridges are the only way between the last of them and the rest. The lesson does not use the bridges.',
    cells: [
      { h3: 'No crossing, no parking', p: 'The class runs at the kitchen table in Lent, Hatert or Hees at the same hour every week, whatever the weather is doing on the Waal.' },
      { h3: 'Taught in English, school words left in Dutch', p: 'Instruction is in English. Groep, havo, vwo and profielkeuze are said the way the child\'s school says them, and translated in neither direction.' },
      { h3: 'What comes out of the first hour', p: 'Three things: a piece of work that shows where the learner actually stands, the name of the course that fits, and a slot in the week. Arranging all three requires no payment details from anybody.' },
      { h3: 'The level chooses the group', p: 'Two learners at the same stage work together whether one is in Neerbosch and the other in Ressen; two at different stages do not, whatever the distance between them.' },
      { h3: 'Twice a week, on the middle calendar', p: 'Usually eight lessons a month at one fixed slot. Nijmegen is in the northern half of Gelderland, which takes its school holidays with regio Midden, and holiday weeks are agreed before the slot is.' },
      { h3: 'A seasonal gap of three and a half or four and a half hours', p: 'Only one of the two countries adjusts its clocks, so the distance to the teacher is shorter between late March and late October and longer the rest of the year. Either way the overlap covers the later part of the afternoon, the early evening, and all of Saturday and Sunday.' }
    ],
    spec: { title: 'A city that keeps its arguments in public', p: 'Nijmegen declared itself the oldest city in the country in 2005 and has been arguing the point ever since, in newspapers, in museums and on signposts. It is a good place to raise a child who asks what the test was, and a weekly hour at home is a cheap way to find out whether they take to it.' }
  },

  fees: {
    h2: 'What it costs, in dollars, on both sides of the river',
    intro: 'Published here so that nobody has to ask.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'A single international rate applies, quoted in dollars, with no euro list beside it, so a family in Ressen sees what a family on the hill sees. Nothing is paid until the free lesson has produced a course and a timetable, and payment then goes over WhatsApp. Pauses, plan changes and missed weeks are set out on the pricing page.'
  },

  reviewsH2: 'What six families put on Google, unedited',

  book: {
    h2: 'Start with the level; we can find the district later',
    intro: 'The first thing on screen might be four toy animals and an argument about tests, a table in Python with three states instead of two, or a spreadsheet from work whose blanks are quietly being added up.',
    success: 'Thank you. Your Nijmegen class request has been sent.'
  },

  faq: {
    h2: 'Nijmegen coding class questions',
    intro: 'The city, its claim, its districts, the teaching and the terms.',
    items: [
      { q: 'Is Nijmegen actually the oldest city in the Netherlands?', a: 'Under three of the five tests this page sets out, yes: the earliest Roman grant of rights, around the year 98 or 100 depending on the source; a recorded military presence from 19 BC; and medieval city rights in 1230. Under a test for the oldest surviving Roman stone building another town wins, and under a test for unbroken habitation since Roman times a third does. The city declared itself the oldest in 2005, and its own entry says it is one of four places with a claim. Building that table is the project on this page.' },
      { q: 'Which districts does this page cover?', a: 'The whole municipality: 189,871 people on 1 January 2026, including Lent, Ressen and Oosterhout north of the Waal and Hatert, Hees, Neerbosch and Sint Anna on the south side. The statistics office splits it into 9 wijken and 44 buurten, and none of those boundaries affects the class.' },
      { q: 'We are in Lent or the Waalsprong, on the other side of the river. Does that matter?', a: 'Not at all. A learner in Lent and one on the hill are in the same group when they are at the same stage, and the bridge that would separate them for an in-person class never comes into it.' },
      { q: 'Is any of this taught in Dutch?', a: 'No. Lessons run in English throughout. The Dutch a school uses is kept: a teacher says groep, havo, vwo and profielkeuze because that is what the child is called on to recognise. Everything else is English, and no Dutch-language edition of the course exists.' },
      { q: 'What time are classes for a family in Nijmegen?', a: 'Summer here means a three-and-a-half-hour gap to the teacher and winter means four and a half, since the Indian clock is fixed and the Dutch one is not. Workable hours therefore begin when school lets out and run to mid-evening, with the whole weekend open as well. One slot is agreed at the free lesson and kept.' },
      { q: 'How many students are there in Nijmegen?', a: 'Two counts answer two questions. The municipality reports 7,610 students at the applied level and 13,180 at the university level. Radboud University reports 24,633 of its own enrolled on 1 October 2022. Enrolment at an institution and residence in a municipality are different things, and this page never adds or subtracts one from the other.' },
      { q: 'What happens in the free lesson?', a: 'The first job is to locate the boundary of what the learner already manages, and then to put a single piece of work just past it. For a child that might be an argument about which toy animal wins and why the winner keeps changing. For a teenager, a three-state table and a scorer that declines to guess. For an adult, a spreadsheet from work with blanks in it. By the close there is a named course, a rung to start on, a weekly time and a price in dollars. No money has moved.' },
      { q: 'Is there a Modern Age Coders classroom in Nijmegen?', a: 'No, and none is claimed at the Valkhof, in Lent or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Nijmegen coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a Nijmegen group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or district. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'Downriver, across the province, and up to the country',
    html: 'Nijmegen is the largest municipality of <a class="cg-inline-link" href="/coding-classes-in-gelderland">Gelderland</a>, whose page is about a province split between two holiday calendars; south across the Maas is <a class="cg-inline-link" href="/coding-classes-in-limburg">Limburg</a> and its contested highest point. Everything in the series descends from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>. Where the ambition is training a model instead of writing a program, the two doors are <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> and the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-gelderland', label: 'Gelderland' },
    { href: '/coding-classes-in-limburg', label: 'Limburg' }
  ],

  personalityCss: `
.cg-root.cg-nij .cg-hero-grid { align-items: end; gap: clamp(1.7rem, 4vw, 3.2rem); }
.cg-root.cg-nij .cg-hero h1 { font-weight: 600; letter-spacing: -0.011em; line-height: 1.1; }
.cg-root.cg-nij .cg-capsule { border-left-width: 3px; border-left-style: solid; border-top: 3px solid var(--cg-accent-soft); padding-left: 1.4rem; padding-top: 0.75rem; }
.cg-root.cg-nij .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; }
.cg-root.cg-nij .cg-section-head h2 { max-width: 31ch; }
.cg-root.cg-nij .cg-grid-3 { gap: clamp(1.1rem, 2.3vw, 1.8rem); }
.cg-root.cg-nij .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1.25rem; }
.cg-root.cg-nij .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-nij .cg-callout { border-left-width: 5px; border-left-style: dashed; }
`,

  dossier: {
    curriculumAuthority: 'City and municipality of Nijmegen, Gelderland: 189,871 residents (CBS 1 January 2026), the largest municipality of the province; 45 primary establishments (13,915 pupils) and 19 secondary (14,152); 7,610 in applied higher education and 13,180 at university level; Radboud University (1923). Districts north of the Waal through the Waalsprong: Lent, Ressen, Oosterhout. Regio Midden holidays with the northern half of Gelderland. The city page argues from the oldest-city claim; the province page owns the two-calendar split and the hub owns the national curriculum.',
    localProject: 'A superlative needs a stated test, and an empty cell is not a zero. Four Dutch places claim to be the oldest city. Across five tests drawn from the sources, the winners differ: earliest Roman grant of rights (Nijmegen, about 98 to 100, against market rights after about 121 at Forum Hadriani); recorded military presence (Nijmegen, 19 BC); oldest surviving Roman stone building (Coriovallum, bath house first phase 65 to 73); unbroken habitation since Roman times (the continuously inhabited southern city); earliest medieval city rights (Nijmegen 1230 against 1284). Most cells are unfilled by the sources read, and the project turns on refusing to score an unfilled cell as a zero. Distinct from the scope trap (Limburg: the set of territories changes by decree while each answer stays complete) and from the superlative-without-a-measure trap (Utrecht province: one place ranked on four real measures): here the criterion changes the winner and the evidence table is mostly missing. Built from sources before writing; every unfilled cell is printed as not stated.',
    requiredMentions: [
      '58,556',
      '104,361',
      '57,902',
      '147,557',
      '13,915',
      '14,152',
      '24,633',
      'Ulpia Noviomagus Batavorum',
      'Forum Hadriani',
      'Coriovallum',
      'Hubert Bruls',
      'Waalsprong',
      'Vierdaagse',
      '19 BC'
    ],
    sources: [
      { claim: 'Municipality of Nijmegen 189,871 residents on 1 January 2026 (CBS provisional); 104,361 households averaging 1.78, 57,902 single-person (55 percent); 24,590 aged 0 to 15; 32,331 aged 15 to 25; 58,556 aged 25 to 45; 32,587 aged 65 and over; 45 primary establishments (13,915 pupils); 19 secondary (14,152); HBO 7,610 and WO 13,180; total area 5,763 ha, land 5,281 ha; density 3,579; 9 wijken and 44 buurten; 147,557 in 1995, a rise of 42,314 (29 percent).', url: 'https://allecijfers.nl/gemeente/nijmegen/' },
      { claim: 'Nijmegen 189,850 residents on 1 January 2026; area 57.63 km2, land 53.09, water 4.54; mayor Hubert Bruls (CDA); the ninth city of the Netherlands and the largest municipality of Gelderland; formal city rights acquired in 1230, a free imperial city from that moment; Ulpia Noviomagus Batavorum, the direct predecessor of the present city, received Roman city rights around the year 100; Nijmegen is one of four cities whose recorded history supports a claim to the title of oldest city in the Netherlands; districts include Lent, Ressen and Oosterhout in the Waalsprong and Hatert, Hees, Neerbosch and Sint Anna; the Waalbrug completed 1936; De Oversteek; the Vierdaagse held since 1909.', url: 'https://nl.wikipedia.org/wiki/Nijmegen' },
      { claim: 'On the oldest-city question: Nijmegen received city rights for the first time around the year 98, had Roman soldiers present from 19 BC, obtained medieval rights in 1230 and declared itself the oldest city of the Netherlands in 2005. Voorburg, as Forum Hadriani, received market rights after a presumed visit by the emperor Hadrian in 121 and was abandoned after 270, with no medieval continuity. Maastricht remained permanently inhabited after the departure of the Romans but Roman Maastricht had no Roman city rights, and its formalised medieval rights date from 1284. Heerlen, as Coriovallum, holds the oldest stone building in the country, whose baths had a first construction phase between 65 and 73, but has neither continuous habitation nor medieval city rights.', url: 'https://nl.wikipedia.org/wiki/Oudste_stad_van_Nederland' },
      { claim: 'Radboud University founded 15 May 1923 as the Roomsch Katholieke Universiteit Nijmegen; 24,633 students enrolled on 1 October 2022; 6,147 fte staff in 2022 of whom 3,467 academic; seven faculties; rector magnificus José Sanders since 17 October 2023.', url: 'https://nl.wikipedia.org/wiki/Radboud_Universiteit' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'A verdict on which city is oldest. The page shows three different winners across five tests and declines to choose.',
      'Filling any unfilled cell of the comparison table by inference. Where no source read gives a value the table says not stated, including whether Nijmegen was continuously inhabited.',
      'Naming Maastricht and Heerlen as the winners of their rows in the table itself. Their Roman names and their claims are quoted; the modern names appear only in the source record, because those two names belong to the Limburg page.',
      'Vierdaagse participant numbers, Radboud rankings and any figure for the Waalbrug beyond its completion year. Not researched.',
      'Anything the Gelderland page owns: the two holiday regions, the split municipalities, the 51 municipalities.'
    ]
  }
};
