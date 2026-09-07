'use strict';
// Overijssel: the province page. Three landscapes (Twente, Salland, the Kop),
// one river the whole province is built along. Spine: the dike rings along the
// IJssel carried a 1-in-1,250-per-year standard, and a family that reads that
// as "once every 1,250 years" has misread a probability. Over a child's
// eighty years the same standard is a one-in-sixteen chance.

module.exports = {
  slug: 'coding-classes-in-overijssel',
  code: 'ovr',
  accent: '#0D4768',
  accentRationale: 'Overijssel: the slate blue of the IJssel in winter, low enough in chroma to stay clear of the retired electric blue',
  pageType: 'governorate',
  place: {
    name: 'Overijssel',
    eyebrow: 'Province of Overijssel',
    schemaType: 'AdministrativeArea',
    chain: [{ type: 'Country', name: 'Netherlands' }]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Overijssel, Netherlands',
  title: 'Coding Classes in Overijssel | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across Overijssel, ages 6 to 67: Enschede, Zwolle, Deventer, Hengelo, Almelo, Kampen, Hardenberg and all 25 municipalities.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in all 25 municipalities of Overijssel, from Twente to the Kop, built on the dike standard everyone misreads.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'backend-coding-masterclass-for-teens',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Overijssel Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across the 25 municipalities of the province of Overijssel, taught in English.'
  },

  h1: 'Coding classes in Overijssel, where a one-in-1,250-year dike is a one-in-sixteen lifetime',
  capsuleQ: 'What are the best coding classes in Overijssel?',
  capsule: 'Coding classes in Overijssel reach 1,202,375 people in 25 municipalities (Statistics Netherlands, 1 January 2026), three landscapes and one river: Twente in the east around Enschede, Salland in the middle around Deventer, and the Kop and the IJssel delta in the north around Zwolle, the capital. The dike rings along the IJssel were built to a standard of one flood in 1,250 years, a figure that means something quite different from what it sounds like. The class is the same in every one of the 25: live, online, in English, for learners from 6 to 67, with nothing charged for the first lesson and then USD 100 a month for a group of five to ten or USD 150 for a teacher alone, taught by Modern Age Coders.',
  lead: 'A dike built to a one-in-1,250-year standard is not a dike that floods once every 1,250 years. It is a dike with a 0.08 percent chance of failing in any given year, which over the eighty years of a child born in Kampen this year adds up to about one chance in sixteen. The program that turns the first number into the second is fifteen lines long, and every family living below the IJssel should have one.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Overijssel.',

  picks: {
    eyebrow: 'Course picks for Overijssel',
    h2: 'Four courses for a province of a technical university, a river and a border',
    intro: 'A groep 6 child in Kampen, a teenager in Hengelo who wants the server side to make sense, a Twente student who wants typed code, and an adult in Deventer who has never trusted a probability: four doors for a province that is three places at once.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python, turtle drawings and a first program that learns a rule, in English, for a groep 5 to 8 child anywhere from Steenwijk to Enschede.' },
      { course: 'backend-coding-masterclass-for-teens', band: 'Ages 13 to 17', note: 'Node, APIs and databases, for the teenager who has built a front end and wants to know where the data actually goes.' },
      { course: 'complete-typescript-programming-masterclass-college', band: 'College and adult', note: 'Typed JavaScript, React and Node for the University of Twente or Saxion student who has had enough of undefined.' },
      { course: 'statistics-probability-maths-course', band: 'Teens and adults', note: 'From data to hypothesis testing, for anyone who has ever read a return period as a countdown.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Overijssel today',
      h2: 'Three landscapes, one capital that is not the largest city, and a river along the whole western edge',
      intro: 'Statistics Netherlands counted 1,202,375 residents on 1 January 2026 in 531,842 households, 183,131 of them under fifteen and 152,463 aged fifteen to twenty-five, on 3,316.48 square kilometres of land inside 3,420.73 of territory: 361 to the square kilometre, and a rise of 14 percent from the 1,050,389 counted in 1995.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Enschede first, Zwolle the capital', p: 'Enschede holds 162,683 people and is the largest city; Zwolle, with 134,147, is the capital. Deventer at 105,111, Hengelo at 84,045 and Almelo at 75,166 follow. No city holds more than 13.5 percent of the province, and each of the three landscapes has its own.' },
          { h3: 'The schools', p: '549 primary establishments teach 101,518 pupils and 128 secondary establishments 66,932. Twente\'s teenagers go to Enschede, Hengelo, Almelo or Oldenzaal; Salland\'s to Deventer or Raalte; the Kop\'s to Zwolle, Kampen or Steenwijk, and in the Vechtdal to Hardenberg or Ommen.' },
          { h3: 'The three places', p: 'Twente in the east, the old textile district against the German border, with the technical university and half the province\'s people. Salland in the middle along the IJssel. The Kop van Overijssel in the north around the delta where the IJssel, the Vecht and the Zwarte Water reach the old Zuiderzee.' }
        ] },
        { kind: 'spec', title: 'A province named for a river it sits beyond', p: 'Overijssel means "over the IJssel": the land on the far side of the river from Holland and Utrecht. The IJssel runs the whole western boundary against Gelderland, the Vecht comes in from Germany through Hardenberg, Ommen and Dalfsen, and the Zwarte Water links Zwolle to Genemuiden. The dikes along all three are the reason this page has a probability table in it.' }
      ]
    },
    {
      id: 'spread', tint: 'tint', eyebrow: 'The spread',
      h2: 'From Twente to the Kop: all 25 municipalities, by population',
      intro: 'Five areas, each with its municipalities and their 1 January 2026 population from the municipal registers, down to Staphorst at 18,219.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Twente, the cities', p: '<a class="cg-inline-link" href="/coding-classes-in-enschede">Enschede</a> 162,683, the largest, with its own page; Hengelo 84,045, a page to come; Almelo 75,166, a page to come; Oldenzaal 32,033; Borne 25,038. The technical university, Saxion, the former mills and the international school at Enschede.' },
          { h3: 'Twente, the countryside', p: 'Rijssen-Holten 39,274; Hellendoorn 36,354; Hof van Twente 35,775; Twenterand 34,234; Dinkelland 26,958; Wierden 25,547; Haaksbergen 24,313; Losser 23,472; Tubbergen 21,604. Nine municipalities of farms, villages and a border that is closer than any Dutch city.' },
          { h3: 'Zwolle and the delta', p: '<a class="cg-inline-link" href="/coding-classes-in-zwolle">Zwolle</a> 134,147, the capital, with its own page; Kampen 56,835, the Hanseatic town on the last stretch of the IJssel; Zwartewaterland 23,733, which is Hasselt and Genemuiden; Staphorst 18,219. The IJsseldelta, where three rivers meet the former sea.' },
          { h3: 'Salland and Deventer', p: '<a class="cg-inline-link" href="/coding-classes-in-deventer">Deventer</a> 105,111, the third city, with its own page; Raalte 39,084; Olst-Wijhe 19,079. The middle of the province, along the IJssel, with the oldest of the three landscapes\' towns.' },
          { h3: 'The Vechtdal', p: 'Hardenberg 64,116; Dalfsen 30,264; Ommen 19,365. The valley of the Overijsselse Vecht from the German border to Zwolle, and the part of the province where the nearest large town is a real drive.' },
          { h3: 'The Kop van Overijssel', p: 'Steenwijkerland 45,926, one municipality holding Steenwijk, Giethoorn and the lakes of the Weerribben and Wieden. The far north-west corner, closer to Friesland and Drenthe than to Enschede.' }
        ] },
        { kind: 'p', text: 'Twenty-five, and every one is above. This page is deliberately wide; Enschede, Zwolle and Deventer already have pages that go close, and Hengelo and Almelo will follow.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'The sources behind every number here',
      intro: 'Office by office, including the dike standards the project is built on and the one change the sources do not quantify.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The province, counted', p: 'Statistics Netherlands, provisional, 1 January 2026: 1,202,375 residents in 25 municipalities; 531,842 households; 183,131 under fifteen; 152,463 aged fifteen to twenty-five; 549 primary establishments with 101,518 pupils and 128 secondary with 66,932; land 331,648 hectares, territory 342,073; density 361; 1,050,389 residents in 1995.' },
          { h3: 'The list', p: 'All 25 municipalities with their 1 January 2026 populations, from Enschede at 162,683 to Staphorst at 18,219. The 25 figures sum to the provincial total exactly, and the class checks it before the dike question.' },
          { h3: 'The capital, the land and the rivers', p: 'Capital Zwolle; largest city Enschede; Commissaris van de Koning Andries Heidema; land 3,319.00 square kilometres and water 101.74 by the province\'s own account, against 3,316.48 of land by the national count, both kept. Regions Twente, Salland and the Kop van Overijssel; rivers the IJssel, the Overijsselse Vecht and the Zwarte Water.' },
          { h3: 'The old dike standards', p: 'The Dutch encyclopaedia\'s list of dike rings gives the pre-2017 safety standards as exceedance probabilities per year: 1 in 10,000 for the Holland coast, 1 in 4,000 for Texel, Friesland and Groningen, Flevoland and the Wieringermeer, 1 in 2,000 and 1 in 1,250 for the river areas. Dike ring 48, Rijn en IJssel, and dike ring 49, IJsselland, carry 1 in 1,250.' },
          { h3: 'The 2017 change', p: 'The same entry states that from 1 January 2017 a new set of standards came into force, under which the dike rings were in effect abolished and the standard became a flood probability per dike segment based on flood risk. The numerical range of the new standards was not published on any page this project could read, and it is not stated here.' },
          { h3: 'The holiday region', p: 'Overijssel takes its school holidays with regio Noord, alongside Groningen, Friesland, Drenthe, Flevoland and Noord-Holland, by the Rijksoverheid\'s regional division.' }
        ] },
        { kind: 'p', text: 'The province, its 25 municipalities, the water authorities and the schools named on this page have no connection to Modern Age Coders and none is implied; they are here because a page that says it serves Overijssel should know what Overijssel is built on.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'One in 1,250 per year: build the program that turns a dike standard into the number a family actually needs',
      intro: 'Four published standards, one lifetime, and a table in which the safest-sounding phrase in Dutch engineering becomes a one-in-sixteen chance.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Read the standard correctly', p: '"1 in 1,250" is not a schedule. It is a probability per year: in any single year the chance that the design flood is exceeded is one in 1,250, which is 0.08 percent. It does not reset after a flood, it does not accumulate toward one, and it says nothing about when the next one comes.' },
          { h3: '2. Compound it over a life', p: 'The learner writes the one line that matters: the chance of at least one exceedance in N years is one minus the chance of none, which is one minus (1 minus 1 over 1,250) to the power N. For a year that is 0.08 percent. For thirty years it is 2.37 percent. For fifty, 3.92. For the eighty years of a child born in Kampen this year, 6.20 percent.' },
          { h3: '3. Compare the four standards', p: 'The same program on the coast\'s 1 in 10,000 gives 0.80 percent over eighty years; on 1 in 4,000, 1.98; on 1 in 2,000, 3.92. The river standard that sounds like once a millennium is, over a lifetime, eight times the coastal one, and every one of those numbers is arithmetic on a figure the learner was given.' }
        ] },
        { kind: 'table', caption: 'The pre-2017 dike standards, compounded: chance of at least one exceedance', head: ['Standard (per year)', 'In one year', 'Over 30 years', 'Over 50 years', 'Over 80 years'], rows: [
          ['1 in 10,000 (Holland coast)', '0.01 percent', '0.30 percent', '0.50 percent', '0.80 percent'],
          ['1 in 4,000 (Texel, Friesland and Groningen, Flevoland)', '0.025 percent', '0.75 percent', '1.24 percent', '1.98 percent'],
          ['1 in 2,000 (river areas)', '0.05 percent', '1.49 percent', '2.47 percent', '3.92 percent'],
          ['1 in 1,250 (dike rings 48 and 49, along the IJssel)', '0.08 percent', '2.37 percent', '3.92 percent', '6.20 percent']
        ] },
        { kind: 'callout', h3: 'A return period is a rate, not a countdown', p: 'The phrase "once in 1,250 years" invites two mistakes at once: that a flood is due when the clock runs out, and that having had one buys a long quiet. Neither follows from a per-year probability, which has no memory and no schedule. What does follow is that small annual chances compound over a life into chances a family can feel, and that the honest way to compare two standards is over the same horizon. A learner who has written the compounding line once will read every "one in N" for the rest of their life as a rate to be multiplied out, and will ask "over how long?" before being reassured. The table was computed before this paragraph was written; the four standards are quoted from the published list of dike rings, and every other figure is that one line of arithmetic.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any figure that arrives as one in N',
      intro: 'Return periods, failure rates, false-positive rates, the chance of rain: every one of them is a per-event or per-year rate that people read as a schedule. Rehearsed first on the dikes the province stands behind.',
      body: [
        { kind: 'table', caption: 'When a probability has been dressed as a period', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Restate as a rate', 'Turn "one in N years" into "1 over N per year" before doing anything', 'A countdown that does not exist', 'The number the maths can use'],
          ['Choose a horizon', 'Ask over how many years the reader will care', 'A per-year figure mistaken for a lifetime figure', 'A comparison at the right scale'],
          ['Compound, do not multiply', 'Use one minus (one minus p) to the N, never p times N', 'A 1 in 10 rate over 20 years read as 200 percent', 'A probability that stays below one'],
          ['Forget the past', 'A per-year rate has no memory; last year does not change this one', 'The flood of 1995 read as a guarantee', 'The right expectation'],
          ['Read the definition', 'Exceedance of a design level is not the same as a breach or a flood', 'A standard read as a prediction', 'A number that means what it says']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A bag with 1,249 white marbles and one red one, drawn once a year with replacement, and a child who keeps drawing. They discover that the red marble can come out twice in a row and can fail to come out for a very long time, and that the bag does not know what came out last year.' },
          { h3: 'For teenagers', p: 'The compounding line in Python, a loop over horizons and standards, and the printed table above. Then the harder question: simulate ten thousand eighty-year lifetimes behind a 1-in-1,250 dike and count how many saw an exceedance, and compare the count with the formula.' },
          { h3: 'For adults', p: 'The same program on a failure rate from work: a server with a 0.1 percent daily outage chance, a screening test with a 2 percent false-positive rate applied yearly, a supplier who is late one delivery in fifty. Every one compounds the same way, and every one is usually quoted as a rate and read as a promise.' }
        ] },
        { kind: 'p', text: 'The provincial totals, the 25 municipal populations, the areas, the rivers and the four dike standards are published by the offices and the encyclopaedia entry named in the sentences that use them. The compounded probabilities are one line of arithmetic on those standards, presented as exactly that, and the page states plainly that the post-2017 standards were not available to it.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a bag of marbles to a compounding function with a chosen horizon',
    intro: 'The starting rung is found in the free lesson; the postcode plays no part in it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'The bag has no memory', p: 'Children draw from a bag once a year and learn that last year\'s draw does not change this one.', courses: ['minecraft-coding-for-kids-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'One in N, as a rate', p: 'Learners write a per-year chance in Python and repeat it over ten, thirty and fifty years.', courses: ['maths-through-coding', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 14 to 18', h3: 'Compounding and simulating', p: 'Teenagers derive the lifetime chance and check it against ten thousand simulated lives.', courses: ['python-complete-masterclass-teens', 'backend-coding-masterclass-for-teens'] },
      { band: 'Ages 18 to 67', h3: 'Rates at work', p: 'Adults take a failure rate from their own field and compound it over the horizon that matters.', courses: ['statistics-probability-maths-course', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI can say in a second how safe the IJssel dikes are. Why should a child in Zwolle learn to compute it?',
    intro: 'Because the assistant will repeat "once in 1,250 years" as fluently as everyone else, and the sentence is wrong in a way that only the arithmetic exposes.',
    p1: 'Ask a tool whether a dike built to a 1-in-1,250 standard is safe and it will say that such a flood occurs roughly once every 1,250 years, which is the phrasing on a thousand pages and the wrong reading of a per-year probability. It will not, unprompted, compound the rate over a lifetime, compare it with the coastal standard over the same horizon, or point out that a rate has no memory. Those moves are made by someone who has written the one line and watched 0.08 percent become 6.2.',
    p2: 'That is why the learner still writes the program: not for the syntax, which the tools produce, but for the reflex of turning every "one in N" into a rate, choosing a horizon and compounding before believing it. A thirteen-year-old in Deventer who has done that with the dikes will do it with a medical test result at twenty-three and an outage figure at thirty-three, and will be the one in the room asking: over how long. The tools will change many times before then. The arithmetic will not.',
    closer: 'So for an Overijssel parent the argument for coding in 2026 is not that the child will design dikes. It is that knowing a rate from a schedule, and knowing how rates add up over a life, is a skill that transfers to every risk the child will ever be quoted, and that it is learned by writing the compounding line and running it.',
    blogAnchor: 'whether coding is still worth learning now that AI writes it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a province whose three parts do not face the same way',
    intro: 'Twente looks east to Germany, the Kop looks north to Friesland, and Salland looks west across the IJssel. A class that comes to the house in Tubbergen or Giethoorn does not need any of them to travel.',
    cells: [
      { h3: 'Nobody drives to Zwolle for it', p: 'The lesson is at home in Hardenberg, Oldenzaal or Steenwijk at a fixed hour, and the N35 and the A1 stay out of it.' },
      { h3: 'English on the outside, Dutch on the inside', p: 'Groep, havo, vwo and profielkeuze are said the way the school says them; around them the lesson is in English, which is the language the province\'s international families at the university and in the Twente firms have in common.' },
      { h3: 'The first hour, free, and what it produces', p: 'One task at the learner\'s level, then a named course and a starting rung, and no card is taken to arrange any of it.' },
      { h3: 'Sorted by ability', p: 'What a learner can do and wants next decides the group; Twente, Salland or the Kop does not.' },
      { h3: 'Two lessons a week, regio Noord\'s summer', p: 'Eight a month at one recurring time. Overijssel breaks up with regio Noord, in a different fortnight from Utrecht and Brabant, and the weeks are agreed before the slot is.' },
      { h3: 'Three and a half hours, or four and a half', p: 'The Dutch clock jumps twice a year and the Indian one stays, so an Overijssel afternoon trails the teacher\'s evening by three and a half hours in summer and four and a half in winter. Late afternoon, early evening and the weekend suit both ends.' }
    ],
    spec: { title: 'The border is a fact of life here', p: 'From Enschede, Losser or Dinkelland the nearest large city is Münster, not Zwolle. A weekly class at home is the same class a family in the capital gets, and for much of Twente it is the only one that does not involve a motorway in either country.' }
  },

  fees: {
    h2: 'The tariff for twenty-five municipalities, in full',
    intro: 'Printed before a phone number is asked for.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'A single dollar rate applies everywhere outside India, with no euro list, and Staphorst pays what Enschede pays. Course and hour are settled in the free lesson and payment comes afterwards, over WhatsApp. Pauses, plan changes and missed lessons are described on the pricing page.'
  },

  reviewsH2: 'What six families wrote on Google',

  book: {
    h2: 'Give us the level; the town is optional',
    intro: 'The opening exercise could be a bag of marbles drawn once a year, the compounding line in Python, or a failure rate from work that has always been quoted as a promise.',
    success: 'Thank you. Your Overijssel class request has been sent.'
  },

  faq: {
    h2: 'Overijssel coding class questions',
    intro: 'The province, its towns, the dikes, the teaching and the terms.',
    items: [
      { q: 'What does a one-in-1,250-year dike standard actually mean?', a: 'A probability of one in 1,250 in any single year, 0.08 percent, that the design water level is exceeded. It is not a schedule and it has no memory. Compounded over eighty years it becomes a 6.2 percent chance of at least one exceedance, against 0.8 percent for the coast\'s one-in-10,000 standard over the same horizon. Writing that arithmetic is the project on this page; the standards themselves were replaced in 2017 by per-segment flood probabilities whose figures the page could not read and does not state.' },
      { q: 'Which Overijssel towns get their own page, and which are covered here?', a: 'Enschede, Zwolle and Deventer already have theirs, linked above, and Hengelo and Almelo follow in this series. The other twenty, from Hardenberg and Kampen to Staphorst, are listed above with their populations, and the class booked from any of them is the same class.' },
      { q: 'Is Zwolle or Enschede the capital?', a: 'Zwolle, with 134,147 residents on 1 January 2026, is the capital. Enschede, with 162,683, is the largest city. Deventer at 105,111 is third. No city holds more than 13.5 percent of the province.' },
      { q: 'We are in Twente, on the German side of the province. Does that change anything?', a: 'Nothing about the class. A child in Losser or Tubbergen is in the same group at the same hour as one in Zwolle, and the fact that Münster is nearer than the capital never comes into it. If anything it makes the case: the nearest in-person option may be in another country.' },
      { q: 'Is the teaching in English or Dutch?', a: 'English, and the Dutch school terms are used as the school uses them. Dutch-language classes are not something we run.' },
      { q: 'What time are classes for a family in Overijssel?', a: 'The Dutch clock moves and the Indian one does not, so an Overijssel afternoon is three and a half hours behind the teacher in summer and four and a half in winter. Late afternoon, early evening and weekend slots suit both ends, and the recurring hour is chosen in the free lesson.' },
      { q: 'What happens in the free lesson?', a: 'We find what the learner can do and set one task there. A child draws from a bag with one red marble in 1,250. A teenager writes the compounding line and simulates ten thousand lifetimes. An adult brings a failure rate from work. It closes with a course, a level, a weekly hour and the fee in dollars, and nothing has changed hands.' },
      { q: 'Is there a Modern Age Coders classroom anywhere in Overijssel?', a: 'No, and none is claimed in Zwolle, in Enschede or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Overijssel coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in an Overijssel group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or municipality. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'Across the IJssel, and up to the country',
    html: 'Across the river is <a class="cg-inline-link" href="/coding-classes-in-gelderland">Gelderland</a>, with its two holiday calendars; beyond it the <a class="cg-inline-link" href="/coding-classes-in-utrecht-province">province of Utrecht</a>, and across the Zuiderzee polders <a class="cg-inline-link" href="/coding-classes-in-almere">Almere</a>. All of them are children of the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and a learner whose goal is a trained model rather than a program should go to <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>. Enschede, Zwolle and <a class="cg-inline-link" href="/coding-classes-in-deventer">Deventer</a> are built; Hengelo and Almelo follow.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-gelderland', label: 'Gelderland' },
    { href: '/coding-classes-in-almere', label: 'Almere' }
  ],

  personalityCss: `
.cg-root.cg-ovr .cg-hero-grid { gap: clamp(2rem, 5vw, 4rem); align-items: end; }
.cg-root.cg-ovr .cg-hero h1 { font-weight: 500; letter-spacing: -0.008em; }
.cg-root.cg-ovr .cg-capsule { border-left-width: 5px; border-left-style: solid; padding-left: 1.5rem; }
.cg-root.cg-ovr .cg-eyebrow { letter-spacing: 0.11em; font-weight: 600; }
.cg-root.cg-ovr .cg-section-head h2 { max-width: 30ch; }
.cg-root.cg-ovr .cg-grid-3 { grid-template-columns: repeat(auto-fit, minmax(235px, 1fr)); gap: clamp(1.25rem, 2.5vw, 2rem); }
.cg-root.cg-ovr .cg-ladder-col { border-top: 2px dashed var(--cg-accent); }
.cg-root.cg-ovr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ovr .cg-price strong { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'Province of Overijssel: 25 municipalities, 1,202,375 residents (CBS 1 January 2026), 549 primary establishments (101,518 pupils) and 128 secondary (66,932). Capital Zwolle; largest city Enschede. Regions Twente, Salland, Kop van Overijssel; rivers IJssel, Overijsselse Vecht, Zwarte Water. Regio Noord holidays. A province page is about the spread; the hub owns the national curriculum.',
    localProject: 'A return period is a rate, not a countdown (per-year probability read as a schedule; compounding over a horizon). The pre-2017 dike standards from the published list of dike rings: 1 in 10,000 (Holland coast), 1 in 4,000 (Texel, Friesland and Groningen, Flevoland, Wieringermeer), 1 in 2,000 and 1 in 1,250 (river areas; dike rings 48 Rijn en IJssel and 49 IJsselland at 1 in 1,250). The learner restates each as p per year and compounds 1 minus (1 minus p)^N: 1 in 1,250 is 0.08 percent in a year, 2.37 over 30, 3.92 over 50, 6.20 over 80; 1 in 10,000 is 0.80 over 80. Distinct from base rates and conditional probability (Georgia), from class imbalance (Illinois) and from the bound-versus-value trap (Hong Kong): the flaw here is reading a per-year rate as a period, with no memory and no compounding. Computed before writing; the 2017 replacement standards were not available and are not stated.',
    requiredMentions: [
      '1,202,375',
      '25 municipalities',
      'Enschede',
      'Zwolle',
      'Deventer',
      'Hengelo',
      'Almelo',
      'Steenwijkerland',
      'Hardenberg',
      'Kampen',
      'Zwarte Water',
      'Rijn en IJssel',
      '6.20 percent',
      '1,050,389'
    ],
    sources: [
      { claim: 'Overijssel 1,202,375 residents on 1 January 2026 (CBS provisional); 25 municipalities; total area 342,073 ha, land 331,648 ha; density 361; 531,842 households; 183,131 under 15; 152,463 aged 15 to 25; 549 primary establishments (101,518 pupils); 128 secondary (66,932); 1,050,389 residents in 1995, a 14 percent rise.', url: 'https://allecijfers.nl/provincie/overijssel/' },
      { claim: 'All 25 municipalities on 1 January 2026: Enschede 162,683; Zwolle 134,147; Deventer 105,111; Hengelo 84,045; Almelo 75,166; Hardenberg 64,116; Kampen 56,835; Steenwijkerland 45,926; Rijssen-Holten 39,274; Raalte 39,084; Hellendoorn 36,354; Hof van Twente 35,775; Twenterand 34,234; Oldenzaal 32,033; Dalfsen 30,264; Dinkelland 26,958; Wierden 25,547; Borne 25,038; Haaksbergen 24,313; Zwartewaterland 23,733; Losser 23,472; Tubbergen 21,604; Ommen 19,365; Olst-Wijhe 19,079; Staphorst 18,219.', url: 'https://allecijfers.nl/ranglijst/grootste-en-kleinste-gemeenten-in-inwoners-in-de-provincie-overijssel/' },
      { claim: 'Capital Zwolle; largest city Enschede; 25 municipalities; total 3,420.74 km2, land 3,319.00, water 101.74; 1,202,369 residents at end 2025; Commissaris van de Koning Andries Heidema; regions Twente, Salland, Kop van Overijssel; rivers IJssel (boundary with Gelderland), Overijsselse Vecht, Zwarte Water (Zwolle to Genemuiden).', url: 'https://nl.wikipedia.org/wiki/Overijssel' },
      { claim: 'Pre-2017 dike ring safety standards as exceedance probabilities per year: 1/10,000 for Noord-Holland, Zuid-Holland, Pernis, Rozenburg; 1/4,000 for Texel, Friesland and Groningen, Flevoland, Wieringen, IJburg; 1/2,000 and 1/1,250 for river areas; dike ring 48 Rijn en IJssel 1/1,250; dike ring 49 IJsselland 1/1,250. From 1 January 2017 a new normering based on overstromingskans per segment replaced them and the dike rings were de facto abolished.', url: 'https://nl.wikipedia.org/wiki/Dijkring' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'The numerical range of the post-2017 flood-probability standards (commonly quoted as 1 in 300 to 1 in 100,000 per year). The page on them returned 404; the page states only that the standards changed and does not quote a range.',
      'Which specific dike rings protect Zwolle, Kampen and Deventer. Only rings 48 and 49 were read at source; no city is assigned to a ring.',
      'International School Twente figures. Mentioned by name only.',
      'Any claim about the 1995 river evacuation. Referred to in a table cell as an example of a memoryless-rate misreading, without figures.',
      'Anything the Netherlands hub or Gelderland owns: the SLO core objectives, the two-calendar split.'
    ]
  }
};
