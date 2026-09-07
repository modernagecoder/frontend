'use strict';
// Gelderland: the largest province by land, split down the middle for school
// holidays. Spine: the province takes its summer break in two different
// fortnights, and two of its municipalities are split internally, so a
// "Gelderland holiday" is a value that exists at no level a family lives at.
// The trap is the ecological one: an attribute assigned to a group that no
// member of the group actually has.

module.exports = {
  slug: 'coding-classes-in-gelderland',
  code: 'gld',
  accent: '#04510E',
  accentRationale: 'Gelderland: the pine green of the Veluwe, darkened until it clears every paper tint',
  pageType: 'governorate',
  place: {
    name: 'Gelderland',
    eyebrow: 'Province of Gelderland',
    schemaType: 'AdministrativeArea',
    chain: [{ type: 'Country', name: 'Netherlands' }]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Gelderland, Netherlands',
  title: 'Coding Classes in Gelderland | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across Gelderland, ages 6 to 67: Nijmegen, Arnhem, Apeldoorn, Ede, the Veluwe, the Achterhoek and the Betuwe, 51 towns.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in all 51 municipalities of Gelderland, the province that takes its summer holiday in two different fortnights.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'complete-game-development-masterclass-for-teens',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Gelderland Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across the 51 municipalities of the province of Gelderland, taught in English.'
  },

  h1: 'Coding classes in Gelderland, the province that goes on summer holiday in two different fortnights',
  capsuleQ: 'What are the best coding classes in Gelderland?',
  capsule: 'Coding classes in Gelderland serve 2,173,348 people in 51 municipalities across the largest province in the country by land, 4,960 square kilometres (Statistics Netherlands, 1 January 2026), where Nijmegen, Arnhem and Apeldoorn are within 20,000 of one another at the top and Rozendaal has 1,837 people at the bottom. The province is split between two school-holiday regions along a line between Apeldoorn and Arnhem, so a family in Ede and a family in Nijmegen do not have the same summer. Modern Age Coders teaches all 51 municipalities the same live online class, in English, for ages 6 to 67, with the first lesson free and then USD 100 a month for a group of five to ten or USD 150 for one-to-one tuition.',
  lead: 'Ask what week Gelderland breaks up for the summer and there is no answer, because the province does not break up: its northern half does on one date and its southern half on another, and in Montferland and Neder-Betuwe the line runs through the municipality itself. A child who can show why the average of those two dates is a week nobody has learned something that applies to every figure ever reported for a group.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Gelderland.',

  picks: {
    eyebrow: 'Course picks for Gelderland',
    h2: 'Four courses for a province of river towns, a forest and a border',
    intro: 'A groep 6 child in Apeldoorn, a teenager in Nijmegen who wants to ship a game, a Wageningen student with a dataset about crops, and a parent in the Achterhoek who wants the tools to carry the paperwork: four doors, chosen for how differently Gelderland families live.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Sequencing, conditions and the first bug the child fixes alone, in English, for a groep 3 to 5 child anywhere from Harderwijk to Winterswijk.' },
      { course: 'complete-game-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'Unity, C# and a game that ships, for the Nijmegen or Arnhem teenager who has stopped being satisfied with playing them.' },
      { course: 'orange-data-mining-machine-learning-course-for-college-students', band: 'College', note: 'Visual machine learning on real datasets, for the Wageningen or Radboud student who has data on plants, patients or soil and no model yet.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Adults', note: 'Python for the monthly return, the spreadsheet nobody trusts and the report that eats a Friday, for the working parent in Doetinchem or Tiel.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Gelderland today',
      h2: 'Two million people on the most land, and three cities within twenty thousand of each other',
      intro: 'Statistics Netherlands counted 2,173,348 residents on 1 January 2026 in 981,246 households, 322,736 of them under fifteen and 266,140 aged fifteen to twenty-five, on 4,960.48 square kilometres of land inside 5,136.28 of territory: more land than any other province, at 436 people to the square kilometre, and a rise of 17 percent from the 1,864,732 counted in 1995.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'No dominant city', p: 'Nijmegen at 189,871, Arnhem at 171,822 and Apeldoorn at 169,212 hold the top three places within 20,659 of each other, and together are only 24.4 percent of the province. Ede at 125,331 is fourth. Gelderland is the one large province in which no single city sets the tone, which is why its towns matter more than its capital.' },
          { h3: 'The schools', p: '838 primary establishments teach 177,070 pupils and 194 secondary establishments 112,650. A Veluwe village sends its teenagers to Apeldoorn, Harderwijk or Ede by bus; the Achterhoek sends them to Doetinchem, Winterswijk or Zutphen; the river country to Nijmegen, Tiel or Arnhem.' },
          { h3: 'Four landscapes, one province', p: 'The Veluwe, the wooded plateau in the middle; the Achterhoek, the farmland to the east against the German border; the Betuwe and the Bommelerwaard, the river country between the Waal and the Maas; and the Rijk van Nijmegen and the Arnhem ring in the south. Each has its own accent, and they were not all in the same holiday region.' }
        ] },
        { kind: 'spec', title: 'A capital that is second', p: 'Arnhem is the provincial capital; Nijmegen is larger by 18,049 people and older by most of two millennia. Neither dominates: Apeldoorn is within 2,610 of Arnhem, and a family in Ede or Barneveld is as likely to look toward Utrecht as toward either.' }
      ]
    },
    {
      id: 'spread', tint: 'tint', eyebrow: 'The spread',
      h2: 'From the Veluwe to the Achterhoek: all 51 municipalities, by population',
      intro: 'Six regions, each with its municipalities and their 1 January 2026 population from the municipal registers, Rozendaal included.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The Rijk van Nijmegen', p: '<a class="cg-inline-link" href="/coding-classes-in-nijmegen">Nijmegen</a> 189,871, the largest city, with its own page; Wijchen 42,106; Berg en Dal 35,700; Beuningen 26,868; Heumen 16,978; Druten 20,019; West Maas en Waal 20,843. The university, the hospital, and the oldest city in the country by its own account.' },
          { h3: 'Arnhem and its ring', p: '<a class="cg-inline-link" href="/coding-classes-in-arnhem">Arnhem</a> 171,822, the capital, with its own page; Lingewaard 47,802; Overbetuwe 49,266; Zevenaar 45,570; Rheden 43,849; Renkum 31,356; Duiven 24,852; Westervoort 15,253; Doesburg 11,173; Rozendaal 1,837, the smallest municipality in the province.' },
          { h3: 'The Veluwe', p: '<a class="cg-inline-link" href="/coding-classes-in-apeldoorn">Apeldoorn</a> 169,212, third, with its own page; Ede 125,331, fourth and a page to come; Barneveld 63,926; Harderwijk 50,655; Nijkerk 46,283; Epe 33,785; Nunspeet 29,688; Ermelo 28,199; Putten 25,170; Oldebroek 24,535; Elburg 24,039; Heerde 19,325; Hattem 12,822; Scherpenzeel 10,674; Wageningen 42,779 on its southern edge, with the agricultural university.' },
          { h3: 'The Achterhoek', p: 'Doetinchem 60,466; Berkelland 43,986; Oude IJsselstreek 39,596; Montferland 37,014; Bronckhorst 35,983; Oost Gelre 29,868; Winterswijk 29,289; Aalten 27,608. Farmland to the German border, and the corner of the province with the longest bus ride to anything.' },
          { h3: 'The IJssel valley', p: 'Zutphen 49,292; Lochem 34,213; Voorst 25,569; Brummen 21,562. The old Hanseatic river towns between Arnhem and Deventer, on the boundary with Overijssel.' },
          { h3: 'The Betuwe and the Bommelerwaard', p: 'West Betuwe 53,445; Tiel 42,524; Zaltbommel 30,687; Culemborg 30,413; Buren 28,095; Maasdriel 26,225; Neder-Betuwe 25,925. Fruit, rivers, dykes, and the one municipality on this page that is split between two holiday regions inside its own boundary.' }
        ] },
        { kind: 'p', text: 'Fifty-one, all of them above. The city pages in this series look closely at one place; this one keeps the whole province in view, which is the only way to see the line running through it.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'What the figures on this page rest on, office by office',
      intro: 'Including the holiday-region split that the project is built from, sourced twice.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The province, counted', p: 'Statistics Netherlands, provisional, 1 January 2026: 2,173,348 residents in 51 municipalities; 981,246 households; 322,736 under fifteen; 266,140 aged fifteen to twenty-five; 838 primary establishments with 177,070 pupils and 194 secondary with 112,650; land 496,048 hectares, territory 513,628; density 436; 1,864,732 residents in 1995.' },
          { h3: 'The list', p: 'All 51 municipalities with their 1 January 2026 populations from the municipal registers, from Nijmegen at 189,871 to Rozendaal at 1,837. The 51 figures sum to the provincial total exactly, and the class checks that before touching the holiday question.' },
          { h3: 'The split, as the government states it', p: 'The Rijksoverheid\'s regional division puts the northern part of Gelderland in regio Midden with Utrecht and Zuid-Holland, and the southern part in regio Zuid with Noord-Brabant, Limburg and Zeeland. The line, as several holiday calendars summarise it, runs somewhere between Apeldoorn and Arnhem.' },
          { h3: 'The split, municipality by municipality', p: 'A published holiday-region table lists Apeldoorn, Ede, Barneveld, Harderwijk, Zutphen, Doetinchem, Wageningen, Tiel, Culemborg, Winterswijk and the rest of the north and east under regio Midden, and Arnhem, Nijmegen, Overbetuwe, Lingewaard, Wijchen, Zevenaar, Rheden, Renkum, Zaltbommel, Maasdriel and the south under regio Zuid. Two municipalities are split inside their own boundaries: Montferland, whose former municipality of Didam is Zuid, and Neder-Betuwe, whose former municipality of Dodewaard is Zuid.' },
          { h3: 'The table is older than the map', p: 'That same published table still names Geldermalsen, Lingewaal, Neerijnen, Groesbeek, Ubbergen, Millingen aan de Rijn and Rijnwaarden, municipalities that have since merged into West Betuwe, Berg en Dal and Zevenaar. The page uses it for the shape of the split and says plainly that the names are out of date, which is its own small lesson about lookup tables.' },
          { h3: 'The capital and the land', p: 'Arnhem is the provincial capital; Nijmegen is the largest city. By the encyclopaedia\'s table of provinces the land area is 4,963.71 square kilometres, the most of any province, against 4,960.48 by the national count, both kept.' }
        ] },
        { kind: 'p', text: 'The province, its 51 municipalities, the schools in them and the offices that publish the holiday tables have no connection to Modern Age Coders, and this page implies none. They are listed because a page that says it serves Gelderland should be able to say which Gelderland it means.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'When does Gelderland break up for summer? Build the program that shows the province-level answer is a week nobody has',
      intro: 'One province, two holiday regions, two municipalities cut in half, and a provincial average that describes no family in the province.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Load the split', p: 'The learner loads the 51 municipalities with their populations and tags each with its holiday region: Midden for the north and east, Zuid for Arnhem, Nijmegen and the river country. For Montferland and Neder-Betuwe the tag depends on which former municipality a street is in, so those two rows carry both tags and a note.' },
          { h3: '2. Compute the provincial answer', p: 'Asked for Gelderland\'s summer holiday, a table that works at province level has to pick one value. Weighted by population the province is roughly half and half, so the honest provincial figure is a midpoint between two dates a week apart. The learner computes it and then looks for a school that breaks up on that day. There is none.' },
          { h3: '3. Go down a level, and find it still fails', p: 'At municipality level the answer exists for 49 of 51 rows. For Montferland and Neder-Betuwe it does not: a family in Didam and a family in \'s-Heerenberg are in the same municipality and different regions. The attribute lives at the level of the former municipality, which no longer exists, and any table keyed on the current one is wrong for part of it.' }
        ] },
        { kind: 'table', caption: 'The holiday region of Gelderland, at three levels of aggregation', head: ['Level', 'Value', 'True for'], rows: [
          ['Province', 'a midpoint between two dates a week apart', 'no family in Gelderland'],
          ['Municipality', 'Midden or Zuid', '49 of 51 municipalities'],
          ['Former municipality (Didam, Dodewaard)', 'Zuid, inside a Midden municipality', 'the two split municipalities'],
          ['Individual school', 'the region its municipality or former municipality is in', 'the family that actually has to plan the summer']
        ] },
        { kind: 'callout', h3: 'A group can have a value that none of its members has', p: 'Average income, average commute, average holiday: a figure computed for a group is a description of the group and not of anyone in it, and when the group is made of two halves that differ, the average sits in a gap where nobody lives. That is the ecological trap, and Gelderland is its cleanest Dutch example, because the attribute that varies is one every family can name. A learner who has computed the provincial holiday and failed to find a school that keeps it will ask, of every group figure they meet, which member it is true for. The table was computed before this paragraph was written; the region assignments are from the published table, with its dated names noted, and the split is sourced to the Rijksoverheid.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any figure reported for a group',
      intro: 'Regional averages, class averages, national rates, company-wide figures: every one of them can be true of the group and false of every member. Rehearsed first on the province\'s own calendar.',
      body: [
        { kind: 'table', caption: 'When the number belongs to the group and not to anyone in it', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Find the level', 'Ask at which level the attribute is actually decided', 'A provincial holiday that no school keeps', 'The right unit'],
          ['Check the members', 'Test whether any member actually has the group value', 'An average in a gap where nobody lives', 'A figure that describes someone'],
          ['Keep the split', 'When a group is two halves, report two values, not one', 'Midden and Zuid averaged into a week that does not exist', 'Honest heterogeneity'],
          ['Date the key', 'Check whether the lookup table\'s units still exist', 'Geldermalsen in a 2026 calculation', 'A join that works'],
          ['Descend when it fails', 'If the value is wrong for part of a unit, go one level down', 'Montferland assigned to one region', 'Didam and Dodewaard, correctly']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Two toy classrooms, one that breaks up on Monday and one on Friday. The child is asked when "the school" breaks up and cannot answer, then works out that the question has two answers and that the middle of the week is not one of them. Ten minutes and no screen.' },
          { h3: 'For teenagers', p: 'The 51 rows in Python with a region column, a population-weighted provincial figure, and a search for any municipality that matches it. Then the two split rows, and a function that needs the former municipality to answer. Then the harder question: name three other attributes that behave this way.' },
          { h3: 'For adults', p: 'The same program on a company-wide average, a regional rate or a national statistic from work, where the group figure is quoted in every meeting and is true of no team in the building. If one can leave the office, it is the best material there is.' }
        ] },
        { kind: 'p', text: 'The provincial totals, the 51 municipal populations, the areas and the holiday-region division are published by the offices and the tables named in the sentences that use them. The provincial midpoint is arithmetic on the published split and is presented as the thing it is, a value nobody has; nothing on this page reports a Gelderland figure that no office has published.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From two toy classrooms to a group figure with its members checked',
    intro: 'The free lesson finds the rung; which side of the Apeldoorn-to-Arnhem line the laptop is on does not.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Two answers, no middle', p: 'Children find that a question about a group can have two answers and that the average is not one of them.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'A value that needs a level', p: 'Learners tag rows in Python and discover an attribute that changes inside a municipality.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'The ecological trap in code', p: 'Teenagers compute a group figure, prove no member has it, and descend to the level where it exists.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Group figures at work', p: 'Adults take apart a company-wide or regional average and find which member, if any, it describes.', courses: ['data-analysis-mastery-course-college', 'statistics-probability-maths-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an AI when Gelderland breaks up for summer and it will give a date. Why should a child in Ede learn to check it?',
    intro: 'Because the date it gives is for half the province, and it will not say which half unless the child knows there are two.',
    p1: 'A fluent tool answers a province-level question at province level. It picks Midden or Zuid, or blends them, and hands back a week with confidence. Nothing in the answer says the province is split, that Montferland is split inside itself, or that the calendar it drew on names municipalities that stopped existing in 2019. Those are things a person knows to ask because they once loaded the 51 rows, tagged them, computed the provincial figure and found no school that kept it.',
    p2: 'That is why the learner still writes the program: not for the loop, which the tools produce, but for the habit of asking at what level a figure is true and checking whether any member of the group actually has it. A twelve-year-old in Wijchen who has done that with the holiday calendar will do it with a regional unemployment rate at seventeen and a company-wide satisfaction score at twenty-seven, and will be the one in the room saying: true for whom. The tools will change several times before then. The question will not.',
    closer: 'For a Gelderland parent, then, the argument for coding in 2026 is not that the child will build calendars. It is that knowing a group figure can be true of the group and false of every member is a skill, that it transfers to every average the child will ever be shown, and that it is learned in one way: by building the figure and then looking for someone it describes.',
    blogAnchor: 'is coding still worth learning now that AI writes it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a province where the nearest city can be in another region',
    intro: 'From Winterswijk the nearest large city is over the German border. From Nunspeet the bus to Harderwijk takes a morning. From Didam the school across the road may break up a week before yours. A class that comes to the house does not care about any of that.',
    cells: [
      { h3: 'One class on both sides of the line', p: 'A child in Apeldoorn and a child in Nijmegen are in the same group at the same hour, and their summer holidays being a week apart is handled once, when the slot is set.' },
      { h3: 'English, with the Dutch words as the school says them', p: 'Groep, havo, vwo, profielkeuze and the rest are used unchanged; the lesson around them is in English, which is what the province\'s international families in Wageningen, Arnhem and Nijmegen share.' },
      { h3: 'A free hour that produces a plan', p: 'One task pitched at the learner, then a course name and a starting rung, and no card is asked for to arrange it.' },
      { h3: 'Grouped on what they can do', p: 'Level and goal decide the group. The Veluwe, the Achterhoek or the Betuwe does not.' },
      { h3: 'Two lessons a week, two holiday calendars', p: 'Eight lessons a month at one recurring time. Because half the province is regio Midden and half regio Zuid, the summer weeks are agreed per family before the slot is fixed, not assumed from the province.' },
      { h3: 'The clock difference, once', p: 'The Netherlands moves its clock twice a year and India never does, so a Gelderland afternoon runs four and a half hours behind the teacher in winter and three and a half in summer. Late afternoon, early evening and weekend hours suit both ends.' }
    ],
    spec: { title: 'The border is closer than the capital', p: 'For much of the Achterhoek and the Rijk van Nijmegen, Germany is nearer than Arnhem. A weekly class at home in Aalten or Groesbeek is the same class a family gets in the capital, and the drive to it is zero in both.' }
  },

  fees: {
    h2: 'Fifty-one municipalities, two prices, and a free lesson first',
    intro: 'The tariff in full, ahead of any request for a number.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'One dollar rate everywhere outside India, no euro version, Rozendaal charged exactly as Nijmegen. The course and the hour are settled in the free lesson; payment comes afterwards, over WhatsApp. Pauses, plan changes and missed lessons are on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, unedited',

  book: {
    h2: 'Tell us the level, and which side of the line you are on if you like',
    intro: 'Expect an opening task of two toy classrooms, a Python table with a region column, or a company-wide average from work that has never been asked which team it describes.',
    success: 'Thank you. Your Gelderland class request has been sent.'
  },

  faq: {
    h2: 'Gelderland coding class questions',
    intro: 'The province, its towns, the holiday line, the teaching and the terms.',
    items: [
      { q: 'When does Gelderland break up for the summer holidays?', a: 'It does not, as a province. The Rijksoverheid puts the northern part in regio Midden and the southern part in regio Zuid, with the line running somewhere between Apeldoorn and Arnhem, and the two regions break up in different fortnights. Montferland and Neder-Betuwe are split inside their own boundaries. Showing why a provincial answer describes nobody is the project on this page.' },
      { q: 'Which Gelderland towns get their own page, and which are covered here?', a: '<a class="cg-inline-link" href="/coding-classes-in-nijmegen">Nijmegen</a> has its own page, and so do <a class="cg-inline-link" href="/coding-classes-in-arnhem">Arnhem</a> and <a class="cg-inline-link" href="/coding-classes-in-apeldoorn">Apeldoorn</a>; Ede follows in this series. The other 47 municipalities, from Barneveld and Doetinchem to Rozendaal, are listed above with their populations, and the class is identical whichever one the laptop is in.' },
      { q: 'We live in Montferland or Neder-Betuwe. Which region are we actually in?', a: 'It depends on the former municipality. The published table puts Didam in regio Zuid and the rest of Montferland in Midden, and Dodewaard in Zuid with the rest of Neder-Betuwe in Midden. Your school will know; the class is fixed to whatever your school does, not to the province.' },
      { q: 'Is Nijmegen or Arnhem the capital?', a: 'Arnhem, with 171,822 residents on 1 January 2026. Nijmegen is larger at 189,871 and Apeldoorn, at 169,212, is within 2,610 of the capital. Gelderland is the one large province with no dominant city, which is why this page spends its length on the towns.' },
      { q: 'Is the teaching in English or Dutch?', a: 'English, with the Dutch school terms left as the school says them. We have no Dutch-language classes and say so plainly.' },
      { q: 'What time are classes for a family in Gelderland?', a: 'Only the Dutch clock changes, so a Gelderland afternoon is four and a half hours behind the teacher in India in winter and three and a half in summer. Late afternoon, early evening and weekends suit both ends, and the weekly hour is chosen in the free lesson.' },
      { q: 'What happens in the free lesson?', a: 'We find what the learner can do and set one task there. A child is asked when two toy classrooms break up. A teenager tags 51 rows and computes a provincial holiday nobody keeps. An adult brings a group average from work. It ends with a course, a level, a weekly time and the fee in dollars, and nothing has been paid.' },
      { q: 'Is there a Modern Age Coders classroom anywhere in Gelderland?', a: 'No, and none is claimed in Arnhem, in Nijmegen or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Gelderland coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a Gelderland group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or municipality. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'The neighbours with pages, and the country above them',
    html: 'West of the line is the <a class="cg-inline-link" href="/coding-classes-in-utrecht-province">province of Utrecht</a> and its city, <a class="cg-inline-link" href="/coding-classes-in-utrecht">Utrecht</a>; north across the Veluwemeer is <a class="cg-inline-link" href="/coding-classes-in-almere">Almere</a>; south of the Maas is <a class="cg-inline-link" href="/coding-classes-in-eindhoven">Eindhoven</a>. They all descend from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and a learner who wants to train models rather than write programs should begin at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>. Nijmegen, Arnhem, Apeldoorn and Ede follow in this series.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-utrecht-province', label: 'Province of Utrecht' },
    { href: '/coding-classes-in-eindhoven', label: 'Eindhoven' }
  ],

  personalityCss: `
.cg-root.cg-gld .cg-hero-grid { align-items: start; gap: clamp(1.75rem, 4.5vw, 3.75rem); }
.cg-root.cg-gld .cg-hero h1 { font-weight: 600; }
.cg-root.cg-gld .cg-capsule { border-left-width: 2px; border-right: 2px solid var(--cg-accent); }
.cg-root.cg-gld .cg-eyebrow { letter-spacing: 0.2em; }
.cg-root.cg-gld .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.01em; }
.cg-root.cg-gld .cg-grid-3 { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }
.cg-root.cg-gld .cg-ladder-col { border-top: 3px double var(--cg-accent); }
.cg-root.cg-gld .cg-table caption { font-weight: 700; }
.cg-root.cg-gld .cg-pick-note { line-height: 1.5; }
`,

  dossier: {
    curriculumAuthority: 'Province of Gelderland: 51 municipalities, 2,173,348 residents (CBS 1 January 2026), 838 primary establishments (177,070 pupils) and 194 secondary (112,650). Capital Arnhem; largest city Nijmegen; the most land of any province. Landscapes: the Veluwe, the Achterhoek, the Betuwe and Bommelerwaard, the Rijk van Nijmegen, the IJssel valley. Split between regio Midden (north and east) and regio Zuid (Arnhem, Nijmegen, the river country) for school holidays, with Montferland (Didam) and Neder-Betuwe (Dodewaard) split internally. A province page is about the spread; the hub owns the national curriculum.',
    localProject: 'The ecological trap: a group attribute that no member of the group has. Gelderland is split between two school-holiday regions along a line between Apeldoorn and Arnhem (Rijksoverheid), and a published table assigns each municipality, with Montferland (Didam) and Neder-Betuwe (Dodewaard) split inside their own boundaries; the table also still names seven municipalities merged away since (Geldermalsen, Lingewaal, Neerijnen, Groesbeek, Ubbergen, Millingen aan de Rijn, Rijnwaarden). The learner tags 51 rows, computes a population-weighted provincial holiday, finds no school that keeps it, descends to municipality level (true for 49 of 51) and then to former-municipality level. Distinct from the weekend-as-input trap (Brunei: a calendar assumption in a date function), from the boundary-moved trap (Mahdah) and from the Zuid-Holland no-boundary trap: the flaw here is a value aggregated to a level at which it does not exist. Computed before writing; the dated names in the table are stated.',
    requiredMentions: [
      '2,173,348',
      '51 municipalities',
      'Nijmegen',
      'Apeldoorn',
      'Ede',
      'Achterhoek',
      'Veluwe',
      'Montferland',
      'Neder-Betuwe',
      'Didam',
      'Dodewaard',
      'Rozendaal',
      'between Apeldoorn and Arnhem',
      '1,864,732'
    ],
    sources: [
      { claim: 'Gelderland 2,173,348 residents on 1 January 2026 (CBS provisional); 51 municipalities; total area 513,628 ha, land 496,048 ha; density 436; 981,246 households; 322,736 under 15; 266,140 aged 15 to 25; 838 primary establishments (177,070 pupils); 194 secondary (112,650); 1,864,732 residents in 1995, a 17 percent rise.', url: 'https://allecijfers.nl/provincie/gelderland/' },
      { claim: 'All 51 municipalities on 1 January 2026: Nijmegen 189,871; Arnhem 171,822; Apeldoorn 169,212; Ede 125,331; Barneveld 63,926; Doetinchem 60,466; West Betuwe 53,445; Harderwijk 50,655; Zutphen 49,292; Overbetuwe 49,266; Lingewaard 47,802; Nijkerk 46,283; Zevenaar 45,570; Berkelland 43,986; Rheden 43,849; Wageningen 42,779; Tiel 42,524; Wijchen 42,106; Oude IJsselstreek 39,596; Montferland 37,014; Bronckhorst 35,983; Berg en Dal 35,700; Lochem 34,213; Epe 33,785; Renkum 31,356; Zaltbommel 30,687; Culemborg 30,413; Oost Gelre 29,868; Nunspeet 29,688; Winterswijk 29,289; Ermelo 28,199; Buren 28,095; Aalten 27,608; Beuningen 26,868; Maasdriel 26,225; Neder-Betuwe 25,925; Voorst 25,569; Putten 25,170; Duiven 24,852; Oldebroek 24,535; Elburg 24,039; Brummen 21,562; West Maas en Waal 20,843; Druten 20,019; Heerde 19,325; Heumen 16,978; Westervoort 15,253; Hattem 12,822; Doesburg 11,173; Scherpenzeel 10,674; Rozendaal 1,837.', url: 'https://allecijfers.nl/ranglijst/grootste-en-kleinste-gemeenten-in-inwoners-in-de-provincie-gelderland/' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' },
      { claim: 'Gelderland municipalities by holiday region (published table, names partly predating mergers): Midden: Aalten, Apeldoorn, Barneveld, Berkelland, Bronckhorst, Brummen, Buren, Culemborg, Doetinchem, Ede, Elburg, Epe, Ermelo, Geldermalsen, Harderwijk, Heerde, Lingewaal, Lochem, Montferland except the former municipality of Didam, Neder-Betuwe except the former municipality of Dodewaard, Neerijnen, Nijkerk, Nunspeet, Oldebroek, Oost-Gelre, Oude IJsselstreek, Putten, Scherpenzeel, Tiel, Voorst, Wageningen, Winterswijk, Zutphen. Zuid: Arnhem, Beuningen, Doesburg, Druten, Duiven, Groesbeek, Heumen, Neder-Betuwe (Dodewaard only), Lingewaard, Maasdriel, Millingen aan de Rijn, Montferland (Didam only), Nijmegen, Overbetuwe, Renkum, Rheden, Rozendaal, Rijnwaarden, Ubbergen, Westervoort, West Maas en Waal, Wijchen, Zaltbommel, Zevenaar.', url: 'https://www.tuxx.nl/planning/schoolvakanties/regios/' },
      { claim: 'The twelve provinces at end 2025: Gelderland 2,173,425 people, 4,963.71 km2 land, 5,136.31 km2 total, the largest land area of any province; capital Arnhem.', url: 'https://nl.wikipedia.org/wiki/Provincies_van_Nederland' }
    ],
    rejectedClaims: [
      'The actual summer holiday dates for regio Midden and regio Zuid in any given year. Deliberately not stated; the page describes the split, not the calendar.',
      'Nijmegen\'s claim to be the oldest city in the Netherlands. Stated as the city\'s own account and not sourced for this page.',
      'The Rijksoverheid\'s municipality-level list. Its page returned 404; the municipality split is taken from a published holiday table whose names partly predate the 2015 to 2019 mergers, and the page says so.',
      'Any figure for Wageningen University or Radboud University. Not read at source for a province page.',
      'Anything the Netherlands hub or the province of Utrecht page owns: the SLO core objectives, the four-rank superlative table.'
    ]
  }
};
