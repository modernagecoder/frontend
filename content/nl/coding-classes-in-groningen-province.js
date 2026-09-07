'use strict';
// Groningen: the province page. Ten municipalities, one city holding four in
// ten people, and a gas field whose earthquakes are reported on a scale that
// nobody reads correctly. Spine: 3.6 at Huizinge is not three percent more
// than 3.5 at Westeremden; it is forty-one percent more energy, and 3.6 is
// not eighty percent more than the 2.0 quakes of the 1990s but 251 times.

module.exports = {
  slug: 'coding-classes-in-groningen-province',
  code: 'grp',
  accent: '#424076',
  accentRationale: 'Groningen: an indigo picked by the solver for separation from Utrecht\'s plum and Overijssel\'s slate, inside the editorial band',
  pageType: 'governorate',
  place: {
    name: 'the province of Groningen',
    eyebrow: 'Province of Groningen',
    schemaType: 'AdministrativeArea',
    chain: [{ type: 'Country', name: 'Netherlands' }]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Province of Groningen, Netherlands',
  title: 'Coding Classes in the Province of Groningen | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across the province of Groningen, ages 6 to 67: the city, Westerkwartier, Het Hogeland, Eemsdelta, Oldambt and all ten.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in all ten municipalities of the province of Groningen, built on the earthquake scale the whole province reads wrongly.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for the Province of Groningen',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across the ten municipalities of the province of Groningen, taught in English.'
  },

  h1: 'Coding classes in the province of Groningen, where 3.6 is not three percent more than 3.5',
  capsuleQ: 'What are the best coding classes in the province of Groningen?',
  capsule: 'Coding classes in the province of Groningen serve 601,286 people in ten municipalities (Statistics Netherlands, 1 January 2026), the fewest municipalities of any province and the largest share held by one city: four residents in ten live in the municipality of Groningen. Under the northern half of the province lies the gas field found at Slochteren in 1959 and shut on 1 October 2023, and the earthquakes it caused are reported on a scale in which the strongest, 3.6 at Huizinge in 2012, released forty-one percent more energy than the 3.5 at Westeremden six years earlier, not three percent. Modern Age Coders teaches the same live online class in English in all ten municipalities, for anyone aged 6 to 67, the first lesson costing nothing and the months after it USD 100 in a group of five to ten or USD 150 with a teacher alone.',
  lead: 'A headline says a 3.6 earthquake, a neighbour says the one in 2006 was 3.5, and everyone in the room agrees they were about the same. They were not. The scale is a logarithm: a tenth of a magnitude is a quarter more ground movement and two fifths more energy, and the gap between the 3.6 at Huizinge and the 2.0 quakes the region shrugged off in the 1990s is not eighty percent but a factor of 251. The program that says so is a single line with a power of ten in it, and a child in Loppersum should own it.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in the province of Groningen.',

  picks: {
    eyebrow: 'Course picks for the province of Groningen',
    h2: 'Four courses for a province with a university city and nine municipalities around it',
    intro: 'The province has more residents aged fifteen to twenty-five than under fifteen, which no other province on this site can say, and the four doors below are chosen with that in mind: a child in Winschoten, a teenager in Delfzijl, a student in the city, and a parent in Hoogezand.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch from a blank stage to a real game in three months, in English, for the groep 3 to 6 child anywhere from Uithuizen to Stadskanaal.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Python, real datasets and a first machine-learning model, for the teenager who wants to plot the quake record instead of reading about it.' },
      { course: 'ai-ml-masterclass-complete-college', band: 'College and adult', note: 'Deep learning and generative AI in Python, for the student at the Rijksuniversiteit or the Hanze who wants the maths behind the models, not just the API.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Adults', note: 'Scripting, scraping and automation for the parent whose working day in Eemshaven, Veendam or the city is a stack of repeated tasks a program could do.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The province of Groningen today',
      h2: 'Ten municipalities, one of them holding four residents in ten',
      intro: 'Statistics Netherlands counted 601,286 residents on 1 January 2026 in 308,424 households, 78,306 under fifteen and 91,027 aged fifteen to twenty-five, on 2,315.86 square kilometres of land inside 2,955.18 of territory, much of the rest being the Wadden Sea and the Eems. That is 260 to the square kilometre, and a rise of 7.8 percent from 557,995 in 1995.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The city and the rest', p: 'The municipality of Groningen holds 244,427 people, 40.7 percent of the province, and is capital and largest city at once. The next largest, Westerkwartier, has 65,067. No other province page in this series has a first place that is nearly four times its second.' },
          { h3: 'The schools', p: '284 primary establishments teach 41,920 pupils and 76 secondary establishments 33,214. The under-fifteens are 13.0 percent of the province and the fifteen-to-twenty-fives 15.1 percent, the order reversed from every other province on this site, because the university and the Hanze pull students in from the whole north.' },
          { h3: 'What is under the ground', p: 'The gas field found near Slochteren on 22 July 1959, the largest in Europe, produced for six decades and was shut on 1 October 2023 with formal abandonment in 2024. Its legacy is a quake record that continues after the last cubic metre: a 3.4 near Zeerijp on 14 November 2025, two years after the taps closed.' }
        ] },
        { kind: 'spec', title: 'The names of the land', p: 'The Westerkwartier in the west towards Friesland; the Hogeland along the Wadden coast with Eemshaven at its tip; Oldambt and Westerwolde in the east against Germany; and the Veenkoloniën, the peat colonies, in the south-east around Veendam and Stadskanaal. Three uninhabited islands, Rottumeroog, Rottumerplaat and the Zuiderduintjes, belong to the province and nobody lives on them.' }
      ]
    },
    {
      id: 'spread', tint: 'tint', eyebrow: 'The spread',
      h2: 'From the city to Pekela: all ten municipalities, by population',
      intro: 'Five landscapes, the municipalities in each, and the register count for every one on 1 January 2026, down to Pekela at 12,579.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The city', p: 'Groningen 244,427, the capital, the university, the Hanze, the station where every line in the north ends, and a page to come. Haren and Ten Boer are inside its boundary since 2019.' },
          { h3: 'The west', p: 'Westerkwartier 65,067, which is Leek, Zuidhorn, Grootegast and Marum joined in 2019, the second largest by a distance and the road to Friesland.' },
          { h3: 'The middle', p: 'Midden-Groningen 61,346: Hoogezand-Sappemeer, Slochteren and Menterwolde in one, and the ground the gas was found under in 1959.' },
          { h3: 'The north and the coast', p: 'Het Hogeland 48,073, with Eemshaven, Uithuizen and Winsum; Eemsdelta 44,846, with Delfzijl, Appingedam and the villages of the old Loppersum municipality whose names are on the quake record: Huizinge, Westeremden, Zeerijp, Garrelsweer, Wirdum.' },
          { h3: 'The east', p: 'Oldambt 39,746, around Winschoten and the Blauwestad lake; Westerwolde 25,267, the long strip against the German border from Bellingwolde to Ter Apel.' },
          { h3: 'The peat colonies', p: 'Stadskanaal 32,110; Veendam 27,825; Pekela 12,579, the smallest. The straight canals and ribbon villages of the Veenkoloniën, where the peat was cut and the potatoes went in after it.' }
        ] },
        { kind: 'p', text: 'Ten, and all ten are above; a province with so few can be listed in full without a table. The city page will go close; this one stays where Pekela and Eemshaven are both in view.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'The offices behind every number, and the two things the sources disagree on',
      intro: 'The provincial count, the ten registers, the encyclopaedia entries on the field and the quakes, the meteorological institute, and the definition of the scale.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The provincial count', p: 'Counted by Statistics Netherlands, provisional figures for 1 January 2026: 601,286 residents in ten municipalities; 308,424 households; 78,306 under fifteen; 91,027 aged fifteen to twenty-five; 284 primary establishments with 41,920 pupils and 76 secondary with 33,214; land 231,586 hectares, territory 295,518; density 260; 557,995 residents in 1995.' },
          { h3: 'The ten', p: 'Groningen 244,427; Westerkwartier 65,067; Midden-Groningen 61,346; Het Hogeland 48,073; Eemsdelta 44,846; Oldambt 39,746; Stadskanaal 32,110; Veendam 27,825; Westerwolde 25,267; Pekela 12,579. The ten sum to 601,286 exactly, and the class checks that before it opens the quake record.' },
          { h3: 'The province, described', p: 'Capital and largest city Groningen; Commissaris van de Koning René Paas; land 2,323.94 square kilometres and water 635.74 by the province\'s entry, against 2,315.86 of land by the national count, both kept; regions Westerkwartier, Hogeland, Oldambt, Westerwolde and the Veenkoloniën; Eemshaven; the islands Rottumeroog, Rottumerplaat and Zuiderduintjes; the gas field found near Slochteren in 1959.' },
          { h3: 'The field and its end', p: 'The English encyclopaedia entry on the field: discovered 22 July 1959 near Slochteren; extraction ordered to cease by 1 October 2023; official abandonment in 2024; the Huizinge earthquake of 16 August 2012, magnitude 3.6, the largest measured above the field.' },
          { h3: 'The quake record', p: 'The Dutch entry on earthquakes in Groningen: Huizinge 2012 at 3.6, the strongest; Westeremden 2006 at 3.5; Zeerijp 2018 at 3.4; Garrelsweer 2021 at 3.2; Wirdum 2022 at 3.1; small quakes around 2.0 above the field since 1991; hypocentres about three kilometres down. The meteorological institute\'s page adds a 3.4 near Zeerijp on 14 November 2025 and explains that depth is fixed at the reservoir\'s three kilometres.' },
          { h3: 'The scale', p: 'The English entry on the Richter scale: each whole-number step is a tenfold increase in measured amplitude and about 31.6 times the energy, and each 0.2 step is roughly a doubling of energy. Two disagreements are kept, not resolved: the Dutch entry calls the 3.6 a Richter figure and the English one a moment magnitude, and the institute uses a local magnitude; and the sources give different counts of quakes per year, so this page gives none.' }
        ] },
        { kind: 'p', text: 'Nothing on this page implies a tie between Modern Age Coders and the province, its ten municipalities, the institute or the villages it names; there is none. They are here because a page that says it teaches the province of Groningen should know what the province has been through.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Huizinge 3.6, Westeremden 3.5: build the program that shows how far apart they really were',
      intro: 'Five quakes from the record, one definition of the scale, and a table in which every gap that looked small turns out not to be.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Read the scale as a logarithm', p: 'A magnitude is not a count of anything. It is the base-ten logarithm of a measured amplitude, so a difference of one is a factor of ten in ground movement and a factor of about 31.6 in energy released, and a difference of 0.1 is a factor of 1.26 and 1.41. The learner writes those two lines: amplitude ratio equals ten to the difference, energy ratio equals ten to one and a half times the difference.' },
          { h3: '2. Run it on the record', p: 'Huizinge 3.6 against Westeremden 3.5: the naive reading says three percent more; the program says 26 percent more amplitude and 41 percent more energy. Against Zeerijp 3.4, twice the energy. Against Wirdum 3.1, five and a half times. Against the 2.0 quakes of the 1990s, which the naive reading calls eighty percent smaller, forty times the amplitude and 251 times the energy.' },
          { h3: '3. Say what a tenth is worth', p: 'The learner then turns it round: how many magnitude-3.5 quakes equal one 3.6 in energy? About 1.4. How many 2.0 quakes? About 251. And how much bigger would the next one have to be to double Huizinge? Only 0.2, which is the gap between a headline nobody notices and one everybody does.' }
        ] },
        { kind: 'table', caption: 'Five Groningen quakes against Huizinge, read two ways', head: ['Quake', 'Magnitude', 'Naive gap to 3.6', 'Amplitude ratio', 'Energy ratio'], rows: [
          ['Huizinge, 16 August 2012', '3.6', 'none', '1', '1'],
          ['Westeremden, 2006', '3.5', '3 percent', '1.26', '1.41'],
          ['Zeerijp, 2018 and 14 November 2025', '3.4', '6 percent', '1.58', '2.0'],
          ['Wirdum, 2022', '3.1', '16 percent', '3.16', '5.6'],
          ['The small quakes of the 1990s', 'about 2.0', '80 percent', '39.8', '251']
        ] },
        { kind: 'callout', h3: 'A logarithm compresses, and the reader must uncompress it', p: 'Scales that go up by tens are built for the people who measure, not the people who read: they fold a range of a million into a number between one and seven, and the folding hides the size of every gap. A headline that reports 3.6 beside 3.5 is not lying, but it has handed the reader a number that must be raised to a power before it means anything, and almost nobody does. A learner who has written the two lines once will read every magnitude, every decibel and every pH for the rest of their life as an exponent waiting to be undone. The table was computed before this paragraph was written: the five magnitudes are quoted from the published record, the factors of ten and 31.6 from the published definition of the scale, and every ratio is that arithmetic and nothing else.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any number that arrives on a logarithmic scale',
      intro: 'Magnitudes, decibels, pH, stellar brightness, the f-stops on a camera, the octaves on a piano: each is a logarithm that reads like a count. Rehearsed first on the quakes the province has felt.',
      body: [
        { kind: 'table', caption: 'When a number is really an exponent', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Ask what base', 'Find out whether the scale is linear, base ten, or something else before comparing two values', 'Subtracting magnitudes as if they were counts', 'The right operation'],
          ['Undo the log', 'Convert to the underlying quantity, then compare', 'A 3 percent gap that is really 41', 'Ratios that mean something'],
          ['Know the exponent', 'Amplitude scales as ten to the difference; energy as ten to one and a half times it', 'Quoting the amplitude factor for the energy', 'Two ratios, both right'],
          ['Respect the tenth', 'On a log scale, a decimal place is a large physical change', 'Rounding 3.36 and 3.44 to "about 3.4" and losing a fifth of the energy', 'Precision where it matters'],
          ['Name the scale', 'Richter, local, moment: say which, because they differ at the edges', 'Comparing a Richter figure with a moment magnitude as if equal', 'Honest comparison']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A staircase of cups: the first has one bean, the second ten, the third a hundred. The child sees that climbing one step is not adding one bean but multiplying by ten, and that the step from cup three to cup four needs nine hundred more beans while the step from one to two needed nine. The magnitudes are the step numbers; the beans are the ground moving.' },
          { h3: 'For teenagers', p: 'The two lines in Python, the five quakes as a list, a loop that prints the table above, and then a chart with magnitude on one axis and energy on the other, first on a linear scale, where the 1990s quakes vanish into the floor, and then on a log scale, where they come back. The harder question: at what magnitude would one quake equal all five together?' },
          { h3: 'For adults', p: 'The same two lines on a scale from work: a decibel reading on a site near Eemshaven, a pH from the water board, a stellar magnitude, the stops on a camera. Every one is a logarithm that someone in a meeting will subtract as a count, and the adult who has undone the log will be the one who catches it.' }
        ] },
        { kind: 'p', text: 'The provincial totals, the ten municipal populations, the areas, the dates of the field and the five magnitudes are published by the offices and the entries named in the sentences that use them. The ratios are two lines of arithmetic on the published definition of the scale, presented as exactly that, and the page states where the sources disagree rather than choosing between them.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a staircase of bean cups to a function that undoes a logarithm',
    intro: 'The rung is found in the free lesson; whether the laptop is in the city or in Pekela is not part of the finding.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Ten times, not one more', p: 'Children climb a staircase of cups and learn that each step multiplies rather than adds.', courses: ['scratch-programming-complete-course', 'early-math-foundations'] },
      { band: 'Ages 11 to 13', h3: 'Powers of ten in Python', p: 'Learners write ten to the power of a difference and compare two magnitudes properly.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Amplitude, energy and a log-scaled chart', p: 'Teenagers plot the quake record twice and learn which axis tells the truth.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Logarithms at work', p: 'Adults undo decibels, pH and stellar magnitudes from their own field and present the ratios.', courses: ['data-analytics-mathematics-masterclass', 'ai-ml-masterclass-complete-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will tell you Huizinge was magnitude 3.6. Why should a child in Delfzijl learn what the six is worth?',
    intro: 'Because the assistant will give the number correctly and let the reader subtract it from 3.5 as though it were a count, and it will not stop them.',
    p1: 'Ask a tool how the Huizinge quake compared with Westeremden and it will say 3.6 against 3.5 and, if pressed, that the difference is small. It is repeating the headline, and the headline is a logarithm nobody undid. It will not, unprompted, raise ten to the difference, distinguish the amplitude factor from the energy factor, or note that a fifth of a magnitude doubles the energy. Those are the moves of someone who has written the two lines and watched three percent become forty-one.',
    p2: 'Which is the reason the learner writes it rather than asking for it. The syntax is the tools\' to give; the reflex of asking what base a scale is in before comparing two numbers on it is not, and the reflex is what the class is for. A fourteen-year-old in Appingedam who has done that with the quake record will do it with a decibel limit at twenty-four and a pH reading at thirty-four, and will be the one in the room who says: that is an exponent, not a count. The tools will be replaced several times before then. The base of the logarithm will not.',
    closer: 'A Groningen parent weighing coding in 2026, then, is not weighing a career in seismology. What is on the scale is that a number on a logarithmic scale is a folded number, that unfolding it is two lines, and that a child who has unfolded the province\'s own quake record will never again mistake a tenth of a magnitude for a tenth of anything.',
    blogAnchor: 'whether coding is worth learning in a year when AI writes most of it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a province where every road leads to one city',
    intro: 'The rail lines, the bus routes and the ring road all meet in Groningen, and for a family in Ter Apel or Uithuizen that is the better part of an hour each way. A class in the kitchen in Westerwolde does not go through the city at all.',
    cells: [
      { h3: 'The ring road stays empty', p: 'The lesson is at home in Winschoten, Leek or Delfzijl at a fixed hour, and nobody joins the queue on the A7 for it.' },
      { h3: 'English, with Dutch where the school uses it', p: 'Groep, havo, vwo and profielkeuze are said as the school says them; the lesson around them is in English, which is the language the university\'s international families and the Eemshaven firms already work in.' },
      { h3: 'One hour free, then a named rung', p: 'A real task at the learner\'s level, then a course and a starting point, and no card is asked for to arrange it.' },
      { h3: 'Placed by what the learner can do', p: 'Level, pace and goal decide the group; the city or the peat colonies do not.' },
      { h3: 'Twice a week, on regio Noord\'s summer', p: 'Eight lessons a month at one recurring time. The province of Groningen breaks up with regio Noord, alongside Friesland, Drenthe, Overijssel, Flevoland and Noord-Holland, and the summer weeks are agreed before the slot.' },
      { h3: 'One clock moves, the other holds', p: 'India keeps a single time all year while the Dutch clock jumps in March and October, which puts a Groningen afternoon three and a half hours behind the teacher in summer and four and a half behind in winter. Slots after school, in the early evening and at the weekend fall inside both working days.' }
    ],
    spec: { title: 'A province with four in ten people in one place', p: 'The other six in ten are spread across nine municipalities, some of them an hour from the city and none of them with a coding classroom of their own. A weekly class at home is the same class the city family gets, and for Pekela or Westerwolde it is the only version that does not begin with a drive.' }
  },

  fees: {
    h2: 'Ten municipalities, one dollar tariff, a free first hour',
    intro: 'Printed in full before any number of yours is asked for.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'One rate in US dollars applies everywhere outside India, with no euro version, and Pekela pays what the city pays. The free lesson settles the course and the hour; payment follows on WhatsApp. What happens on a pause, a plan change or a missed lesson is written up on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, quoted as written',

  book: {
    h2: 'Tell us the level; the municipality can wait',
    intro: 'The opening task might be a staircase of bean cups, the two lines that undo a magnitude, or a decibel reading from work that a colleague once subtracted as a count.',
    success: 'Thank you. Your Groningen class request has been sent.'
  },

  faq: {
    h2: 'Province of Groningen coding class questions',
    intro: 'The province, its ten municipalities, the scale, the teaching and the terms.',
    items: [
      { q: 'How much bigger was the Huizinge earthquake than the one at Westeremden?', a: 'Huizinge on 16 August 2012 was magnitude 3.6 and Westeremden in 2006 was 3.5. Because the scale is a base-ten logarithm, that tenth of a magnitude is 26 percent more measured amplitude and 41 percent more energy, not three percent. Against the 2.0 quakes of the 1990s, Huizinge released about 251 times the energy. Writing the two lines that produce those ratios is the project on this page; the sources disagree on whether the 3.6 is a Richter, local or moment magnitude, and the page keeps the disagreement.' },
      { q: 'Is this page about the city of Groningen or the province?', a: 'The province, all ten municipalities of it. The city, which holds 244,427 of the province\'s 601,286 people, gets its own page in this series. The other nine, from Westerkwartier to Pekela, are listed above with their populations and covered here.' },
      { q: 'Has the gas extraction really stopped?', a: 'Extraction from the Groningen field ceased by 1 October 2023 and the field was formally abandoned in 2024, by the English encyclopaedia entry on it. The earthquakes have not stopped with it: the meteorological institute recorded a 3.4 near Zeerijp on 14 November 2025, the second strongest in the field\'s record.' },
      { q: 'We are in Westerwolde or Het Hogeland, an hour from the city. Does that change anything?', a: 'Nothing about the class. A child in Ter Apel or Uithuizen sits in one group with one from the city at one hour, and the distance is the reason a class that comes to the house makes more sense here than almost anywhere.' },
      { q: 'Does the teacher speak Dutch?', a: 'The lesson is in English. Groep, havo and vwo are spoken the way the school speaks them, but the class itself is not offered in Dutch, and not in Gronings either.' },
      { q: 'What time are classes for a family in the province of Groningen?', a: 'The Dutch clock jumps twice a year and the Indian one holds, leaving a Groningen afternoon three and a half hours behind the teacher in summer and four and a half in winter. After-school, early-evening and weekend hours work at both ends; the fixed weekly hour is picked during the free lesson.' },
      { q: 'What happens in the free lesson?', a: 'We look for what the learner already does well and put one task at that edge. A child climbs a staircase of bean cups. A teenager writes the two lines that undo a magnitude and plots the quake record on both axes. An adult brings a decibel or pH figure from work. By the end there is a named course, a rung, a fixed hour and the dollar figure, and no payment has been made.' },
      { q: 'Is there a Modern Age Coders classroom anywhere in the province of Groningen?', a: 'No, and none is claimed in the city, in Delfzijl or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do coding classes in the province of Groningen cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a Groningen group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or municipality. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'South along the A28, and up to the country',
    html: 'The A28 runs south out of the province through Drenthe to <a class="cg-inline-link" href="/coding-classes-in-overijssel">Overijssel</a>, where the dikes have their own arithmetic, and on to <a class="cg-inline-link" href="/coding-classes-in-gelderland">Gelderland</a>. All of these hang off the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>; anyone whose goal is a model that learns rather than a program that runs should look at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>. The city of Groningen follows in this series.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-overijssel', label: 'Overijssel' },
    { href: '/coding-classes-in-gelderland', label: 'Gelderland' }
  ],

  personalityCss: `
.cg-root.cg-grp .cg-hero-grid { align-items: center; gap: clamp(2rem, 4.5vw, 3.5rem); }
.cg-root.cg-grp .cg-hero h1 { font-weight: 500; letter-spacing: -0.006em; line-height: 1.12; }
.cg-root.cg-grp .cg-capsule { border-left-width: 4px; border-left-style: double; padding-left: 1.4rem; }
.cg-root.cg-grp .cg-eyebrow { letter-spacing: 0.1em; font-weight: 600; }
.cg-root.cg-grp .cg-section-head h2 { max-width: 31ch; }
.cg-root.cg-grp .cg-grid-3 { gap: clamp(1.2rem, 2.4vw, 1.9rem); }
.cg-root.cg-grp .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 1.1rem; }
.cg-root.cg-grp .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-grp .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'Province of Groningen: 10 municipalities, 601,286 residents (CBS 1 January 2026), 284 primary establishments (41,920 pupils) and 76 secondary (33,214). Capital and largest city Groningen (244,427, 40.7 percent). Regions Westerkwartier, Hogeland, Oldambt, Westerwolde, Veenkoloniën; Eemshaven; three uninhabited islands. Gas field found at Slochteren 1959, shut 1 October 2023. Regio Noord holidays. A province page is about the spread; the hub owns the national curriculum.',
    localProject: 'A number on a logarithmic scale is a folded number (magnitude read as a count). Five quakes from the Groningen record: Huizinge 2012 at 3.6, Westeremden 2006 at 3.5, Zeerijp 2018 and 14 November 2025 at 3.4, Wirdum 2022 at 3.1, the 2.0 quakes of the 1990s. The learner writes amplitude ratio = 10^dM and energy ratio = 10^(1.5 dM): 3.6 vs 3.5 is 1.26 amplitude and 1.41 energy, not 3 percent; 3.6 vs 2.0 is 39.8 and 251, not 80 percent. Distinct from the return-period trap (Overijssel: a rate read as a schedule), from the two-units trap (a value in the wrong unit) and from the rank-versus-distance trap (Utrecht): the flaw here is subtracting exponents as if they were counts. Computed before writing; the scale-naming disagreement between sources is kept.',
    requiredMentions: [
      '601,286',
      'ten municipalities',
      'Westerkwartier',
      'Midden-Groningen',
      'Het Hogeland',
      'Eemsdelta',
      'Oldambt',
      'Pekela',
      'Slochteren',
      'Huizinge',
      'Westeremden',
      '1 October 2023',
      '31.6',
      '557,995'
    ],
    sources: [
      { claim: 'Province of Groningen 601,286 residents on 1 January 2026 (CBS provisional); 10 municipalities; total area 295,518 ha, land 231,586 ha; density 260; 308,424 households; 78,306 under 15; 91,027 aged 15 to 25; 284 primary establishments (41,920 pupils); 76 secondary (33,214); about 7.8 percent growth since 1995 (557,995).', url: 'https://allecijfers.nl/provincie/groningen/' },
      { claim: 'All 10 municipalities on 1 January 2026: Groningen 244,427; Westerkwartier 65,067; Midden-Groningen 61,346; Het Hogeland 48,073; Eemsdelta 44,846; Oldambt 39,746; Stadskanaal 32,110; Veendam 27,825; Westerwolde 25,267; Pekela 12,579.', url: 'https://allecijfers.nl/ranglijst/grootste-en-kleinste-gemeenten-in-inwoners-in-de-provincie-groningen/' },
      { claim: 'Capital and largest city Groningen; 10 municipalities; total 2,959.68 km2, land 2,323.94, water 635.74; 601,530 residents end 2025; Commissaris van de Koning René Paas since 18 April 2016; regions Westerkwartier, Hogeland, Oldambt, Westerwolde, Groninger Veenkoloniën; Eemshaven; uninhabited islands Rottumeroog, Rottumerplaat, Zuiderduintjes; gas field discovered 1959 near Kolham/Slochteren.', url: 'https://nl.wikipedia.org/wiki/Groningen_(provincie)' },
      { claim: 'Groningen gas field discovered 22 July 1959 near Slochteren; in June 2023 the government announced extraction would cease by 1 October 2023; official abandonment 2024; the Huizinge earthquake of 16 August 2012, estimated moment magnitude 3.6, the largest measured above the field.', url: 'https://en.wikipedia.org/wiki/Groningen_gas_field' },
      { claim: 'Strongest induced quake Huizinge 16 August 2012, magnitude 3.6 (Richter); Westeremden 2006 3.5; Zeerijp 2018 3.4; Garrelsweer 2021 3.2; Wirdum 2022 3.1; since 1991 small quakes above the Slochteren field with magnitudes around 2.0; hypocentres about 3 km below ground level.', url: 'https://nl.wikipedia.org/wiki/Aardbevingen_in_Groningen' },
      { claim: 'KNMI: a magnitude 3.4 earthquake on 14 November 2025 near Zeerijp, the second strongest in the Groningen gas field; depth fixed at the average reservoir depth of 3 km; KNMI uses the local magnitude scale; gas extraction is responsible for nearly all earthquakes in the north of the Netherlands.', url: 'https://www.knmi.nl/kennis-en-datacentrum/uitleg/aardbevingen-door-gaswinning' },
      { claim: 'Richter scale: each whole-number increase in magnitude is a tenfold increase in measured amplitude and about 31.6 times the energy released (10^1.5); each increase of 0.2 corresponds to approximately a doubling of energy.', url: 'https://en.wikipedia.org/wiki/Richter_scale' }
    ],
    rejectedClaims: [
      'The number of earthquakes per year. The KNMI page and the Dutch entry give different figures for 2013 (30 above magnitude 1.5 against 133 events), so no count is stated.',
      'Which current municipality each quake village lies in. Huizinge, Westeremden, Zeerijp, Garrelsweer and Wirdum are described as villages of the former Loppersum municipality, now in Eemsdelta, from general knowledge; no source read on this page assigns them, so the assignment stays out of the evidence cells.',
      'The count of houses reinforced (26,000 in the English entry). Not used; the figure is undated there.',
      'The first quake in the region, 26 December 1986 near Assen. Assen is in Drenthe and the quake predates the Groningen record used here; left out.',
      'Anything the Netherlands hub or Overijssel owns: the SLO core objectives, the dike-standard arithmetic.'
    ]
  }
};
