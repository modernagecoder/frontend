'use strict';
// Haarlemmermeer: a municipality named after a lake that was pumped away in
// 1852, whose largest town is called something else, and which contains an
// airport. Spine: 800 million cubic metres were pumped out, and dividing that
// by the area does not give you the depth of the lake, because the system was
// never closed.

module.exports = {
  slug: 'coding-classes-in-haarlemmermeer',
  code: 'hmm',
  accent: '#545700',
  accentRationale: 'Haarlemmermeer: a flat polder olive, placed by the solver clear of Nijmegen\'s olive and Drenthe\'s ochre',
  pageType: 'city',
  place: {
    name: 'Haarlemmermeer',
    eyebrow: 'Haarlemmermeer, Noord-Holland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Noord-Holland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Haarlemmermeer, Netherlands',
  title: 'Coding Classes in Haarlemmermeer, Hoofddorp | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Haarlemmermeer for ages 6 to 67, in Hoofddorp, Nieuw-Vennep, Badhoevedorp and Rijsenhout. First lesson free.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in Haarlemmermeer and Hoofddorp, built on the 800 million cubic metres that will not tell you how deep the lake was.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'python-ai-automation-masterclass-college',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Haarlemmermeer Learners',
    description: 'Ability-placed online coding, Python, AI and mathematics for children, teenagers and adults in Hoofddorp, Nieuw-Vennep, Badhoevedorp, Vijfhuizen, Rijsenhout and the other villages of Haarlemmermeer, taught in English.'
  },

  h1: 'Coding classes in Haarlemmermeer, where 800 million cubic metres will not tell you how deep the lake was',
  capsuleQ: 'What are the best coding classes in Haarlemmermeer?',
  capsule: 'Coding classes in Haarlemmermeer serve 166,978 people (Statistics Netherlands, 1 January 2026) living on the floor of a lake that was pumped dry on 1 July 1852. The municipality is named after the lake; its largest town is Hoofddorp, at 79,650 in 2023; and Schiphol sits inside its boundary at 3.35 metres below the national datum. About 800 million cubic metres of water were pumped out, and dividing that by the area does not give the lake\'s depth, because rain and seepage kept arriving while the pumps ran. Every village on the polder is taught by Modern Age Coders, live and online and in English, at any age between 6 and 67. There is no charge for the opening lesson; the months after it are USD 100 in a group of five to ten or USD 150 with the teacher alone.',
  lead: 'Here is a question a child can attack with a calculator: how deep was the Haarlemmermeer? About 800 million cubic metres came out of it, and the municipality has 197.48 square kilometres of land, so the division gives 4.05 metres and the temptation is to stop there. The pumps ran for three years against rainfall and seepage, so a good part of that 800 million was water that arrived after the work began. The division answers a different question from the one asked, and knowing which question your arithmetic actually answered is the whole job.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Haarlemmermeer.',

  picks: {
    eyebrow: 'Course picks for Haarlemmermeer',
    h2: 'Four courses for a municipality with 25 villages and an airport',
    intro: 'A groep 5 child in Rijsenhout, a teenager in Nieuw-Vennep with an idea for an app, an adult in Hoofddorp whose employer runs on logistics software, and a parent in Badhoevedorp who has been asked to automate a weekly report: four doors on one polder.',
    items: [
      { course: 'block-coding-app-development-masterclass', band: 'Ages 8 to 12', note: 'Real apps built with blocks, in English, for the groep 5 to 8 child in Vijfhuizen or Zwanenburg who wants something that runs on the family phone.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'From an idea to an app on a real device, for the teenager whose school offers no route into building software.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Scripting, scraping and automation in Python, for the adult whose working week around the airport is a stack of repeated tasks.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Excel, Sheets and Power BI with AI, for the parent whose reports are assembled by hand every Monday morning.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Haarlemmermeer today',
      h2: 'A lake bed with 166,978 people on it, and the fastest growth in this series',
      intro: 'The national register held 166,978 people on 1 January 2026, in 70,473 households averaging 2.31 people, the largest average of any city in this series, on 197.21 square kilometres of land inside 206.31 of territory: 838 to the square kilometre. In 1995 the count was 109,654, so the municipality has gained 57,324 people in thirty-one years, a rise of 52 percent.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Families, not students', p: '26,339 residents are under fifteen, 16 percent, and 21,425 are between fifteen and twenty-five; 41,801 are between twenty-five and forty-five and 30,581 are sixty-five or over. Only 23,034 households hold one person, 33 percent, the lowest share in this series. Haarlemmermeer is where people move when they want a house and a garden within reach of two cities.' },
          { h3: 'Fifty-five primary schools, eleven secondary', p: '55 primary establishments teach 13,532 pupils and 11 secondary establishments teach 7,394. That ratio is what a spread-out municipality of villages looks like: a primary school in each place, and secondary schools concentrated in Hoofddorp and Nieuw-Vennep with a bus for everybody else.' },
          { h3: 'Named after water that is not there', p: 'The municipality carries the name of the lake. The lake was pumped dry on 1 July 1852 after a ring dike whose construction began in May 1840 and took eight years. Around 800 million cubic metres of water were moved by three steam pumping stations, the Leeghwater, the Lynden and the Cruquius.' }
        ] },
        { kind: 'spec', title: 'The municipality and its largest town have different names', p: 'The municipality is Haarlemmermeer; its main town is Hoofddorp, which had 79,650 residents in 2023 and was named in 1868 after being founded in 1853, the year after the drainage. Anyone searching for the town by the municipality\'s name, or the reverse, is looking for the wrong thing, and this page uses both names deliberately throughout.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Hoofddorp, Nieuw-Vennep and the villages of the polder',
      intro: 'The statistics office counts 25 woonplaatsen in the municipality; the municipality\'s own entry says it recognises 31 kernen. Both counts are published, both are kept here, and only five of those places have populations in the sources this page read.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Hoofddorp, 79,650 in 2023', p: 'The main town and the seat of the municipality, founded in 1853 on the drained bed and named in 1868. Just under half the municipality lives here, with the station, the hospital and most of the secondary schools.' },
          { h3: 'Nieuw-Vennep, 31,595 in 2023', p: 'The second town, south-west of Hoofddorp on the other side of the polder, with its own station and its own secondary provision, and far enough from the first that families think of them as separate places.' },
          { h3: 'Badhoevedorp, 14,455 in 2023', p: 'Counted with Nieuwe Meer in the source. North-east, closest to Amsterdam, and the village most affected by the airport and the motorways that serve it.' },
          { h3: 'Vijfhuizen, 4,865 in 2023', p: 'Counted with Nieuwebrug. North-west towards Haarlem, on the ring dike itself, small enough that an after-school club of any kind is a matter of who volunteers.' },
          { h3: 'Rijsenhout, 4,330 in 2023', p: 'South-east by the Ringvaart and the greenhouses. A village school, a sports club, and a bus to Hoofddorp for everything else, including anything a teenager might want to learn in the evening.' },
          { h3: 'The other twenty, or twenty-six', p: 'Zwanenburg, Lisserbroek, Cruquius, Abbenes, Buitenkaag, Beinsdorp, Burgerveen, Weteringbrug, Lijnden, Rozenburg, Boesingheliede and the rest. Their populations are not published in the sources here, and together with the five named above they must account for the municipality\'s 166,978.' }
        ] },
        { kind: 'p', text: 'Every one of them gets the same class at the same hour, and no village boundary has ever decided which group a learner joins.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure, its office, and the two things this page refuses to state',
      intro: 'The national count, the municipal entry, the drainage record, the airport, and the depth that no source gives.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The municipal count', p: 'Statistics Netherlands, provisional, 1 January 2026: 166,978 residents; 70,473 households for 2025 averaging 2.31 people, 23,034 of them single-person, 33 percent; 26,339 aged under fifteen; 21,425 aged fifteen to twenty-five; 41,801 aged twenty-five to forty-five; 30,581 aged sixty-five and over; 55 primary establishments with 13,532 pupils and 11 secondary with 7,394; total area 20,631 hectares, land 19,721; density 838; 25 woonplaatsen, 18 wijken and 97 buurten; 109,654 residents in 1995, a rise of 57,324, which is 52 percent.' },
          { h3: 'The municipality, described', p: 'Its own entry: 166,996 residents on 1 January 2026, 18 more than the national figure for the same date, both kept; 206.31 square kilometres in total, 197.48 of land and 8.83 of water, against 197.21 of land nationally, both kept; mayor Marianne Schuurmans-Wijdeven; main town Hoofddorp; the municipality recognises 31 kernen, against the 25 woonplaatsen counted nationally, and both counts are printed here.' },
          { h3: 'The five villages with figures', p: 'From the same entry, all dated 2023: Hoofddorp 79,650; Nieuw-Vennep 31,595; Badhoevedorp including Nieuwe Meer 14,455; Vijfhuizen including Nieuwebrug 4,865; Rijsenhout 4,330. Those five total 134,895, which leaves 32,083 of the 2026 municipal figure spread across everywhere else, on two dates that do not match.' },
          { h3: 'The drainage', p: 'The lake finally fell dry on 1 July 1852. Work on the ring dike began in May 1840 and took eight years. About 800 million cubic metres of water were pumped, by the steam stations Leeghwater, Lynden and Cruquius, with further stations at Spaarndam, Halfweg and Gouda in the wider system.' },
          { h3: 'The airport', p: 'Schiphol lies inside the municipality at 3.35 metres below the national datum, and registered 68.8 million passenger movements in 2025. A passenger movement is an event, not a person: one return trip is two of them and a transfer is two more, so that figure cannot be divided by anything to yield a number of travellers.' },
          { h3: 'What is not here', p: 'No depth for the polder or the former lake below the datum was found in any source read for this page, and none is stated. The 4.05 metres computed below is an arithmetic exercise about a division, clearly labelled, and is not offered as the depth of anything.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the municipality, the airport or any school named here and claims none. They are on the page because a page that says it teaches Haarlemmermeer should be able to say what Haarlemmermeer is standing on.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How deep was the lake? Build the division, then find the assumption that breaks it',
      intro: 'Two published quantities, one obvious division, and an answer to a question nobody asked.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Do the obvious thing', p: 'About 800 million cubic metres of water were pumped out and the municipality has 197.48 square kilometres of land. Divide and you get 4.05 metres. It looks like an average depth, it is the right order of magnitude for a Dutch lake, and it is arrived at honestly from two published figures.' },
          { h3: '2. Name the assumption', p: 'That division is only the lake\'s depth if every cubic metre pumped was standing in the lake when the pumps started. The pumps ran for years, rain fell on the whole surface throughout, and water seeped in under the ring dike continuously. So the 800 million is a volume moved over time, not a volume held at a moment, and the two are different physical quantities.' },
          { h3: '3. See which way the error runs', p: 'Every extra cubic metre of rain or seepage raises the total pumped without deepening the original lake, so the naive figure is an upper bound rather than an estimate. And the denominator is wrong in the other direction: the modern municipality is not the same shape as the historic lake, so 4.05 metres is a number produced by two mismatched inputs and answers neither question cleanly.' }
        ] },
        { kind: 'table', caption: 'One division, and what each part of it actually is', head: ['Element', 'Published value', 'What it really measures', 'Effect on the answer'], rows: [
          ['Water pumped', 'about 800 million cubic metres', 'a volume moved over several years', 'includes rain and seepage, so it is too large'],
          ['Area', '197.48 square kilometres of land', 'the modern municipality, not the historic lake', 'the wrong footprint, in an unknown direction'],
          ['The division', '4.05 metres', 'an upper bound on average depth at best', 'not a depth, and not stated as one'],
          ['Depth below the datum', 'not published in any source read', 'the quantity actually wanted', 'left unstated on this page']
        ] },
        { kind: 'callout', h3: 'Dividing two real numbers always gives an answer; only sometimes is it the answer to your question', p: 'A volume divided by an area has the units of a length, and units are the weakest possible evidence that a calculation means anything. What makes the result a depth is a physical assumption, that nothing entered or left the system between the measurement of the volume and the moment being described, and here that assumption is plainly false: it rained for three years while the pumps ran. The habit worth carrying away is to write the assumption down beside the formula, in words, before running it, and then to ask which direction each violation pushes the answer. A learner who does that will produce fewer confident numbers and far more useful ones. The 4.05 metres was computed before this paragraph was written, from two published figures, and is presented as a demonstration of a flawed division rather than as a fact about the lake.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any figure you get by dividing one thing by another',
      intro: 'Cost per customer, litres per hectare, incidents per thousand hours, storage per user: every one is a quotient resting on an assumption about what stays constant. Practised on the water under the learner\'s own street.',
      body: [
        { kind: 'table', caption: 'When a quotient is about to become a conclusion', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Check the units, then ignore them', 'Matching units is necessary and nowhere near sufficient', 'Metres accepted as a depth', 'A reason to keep asking'],
          ['Write the assumption in words', 'State what must be true for the quotient to mean what you want', 'A hidden closed-system claim', 'A sentence a colleague can dispute'],
          ['Ask over what period', 'Distinguish a stock at a moment from a flow over time', 'A three-year total read as a standing volume', 'Two quantities kept apart'],
          ['Match the denominator', 'Confirm the divisor covers exactly the thing the numerator came from', 'A modern boundary used for a historic lake', 'A ratio about one object'],
          ['Sign the error', 'Say which way each violated assumption pushes the result', 'A wrong number with no direction', 'An upper or lower bound you can use']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A tray of water and a jug. The child empties the tray into the jug and works out how deep the water was, then does it again while somebody drips more water into the tray from a bottle. The second answer is bigger and the tray never changed. That is the entire lesson, and it takes ten minutes.' },
          { h3: 'For teenagers', p: 'The division in Python with the assumption written as a comment above it, then a small model: add a rainfall rate and a pumping duration and watch the implied depth fall as the inflow rises. The stretch: what rainfall over three years would account for the whole difference between a plausible lake depth and 4.05 metres?' },
          { h3: 'For adults', p: 'The same treatment on a per-unit figure from work. Cost per customer computed from an annual cost and a month-end customer count is exactly this error, and adults nearly always find one in a deck they have presented themselves.' }
        ] },
        { kind: 'p', text: 'The population, household, area, school, village, drainage and airport figures come from the offices and entries named beside them. The 4.05 metres, the 134,895 and the 32,083 are this page\'s arithmetic on those published figures and are labelled as arithmetic wherever they appear.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a tray of water to a quotient with its assumption written above it',
    intro: 'The starting rung comes out of the free hour, and which of the villages the learner lives in is not an input.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'The tray and the dripping bottle', p: 'Children measure a depth twice and find that the inflow changed the answer.', courses: ['kids-coding-blocks-masterclass', 'block-coding-app-development-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Volume, area and a length', p: 'Learners divide in Python and write down what has to be true for the result to mean anything.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Stocks, flows and bounds', p: 'Teenagers separate a volume held from a volume moved and report a bound rather than a value.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Per-unit figures at work', p: 'Adults rebuild a cost-per-something so that numerator and denominator cover the same period and population.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will divide 800 million by the area and hand you a depth. Why should a child in Hoofddorp learn to refuse it?',
    intro: 'Because the arithmetic is correct, the units come out right, and the result is not a depth.',
    p1: 'Ask a tool how deep the Haarlemmermeer was, give it the volume pumped and the area, and it will produce a number with metres after it. Units are a trap here rather than a check: a volume over an area is always a length, whatever the volume was really measuring. What the tool has no way of knowing from the numbers is that the pumping ran for years against rain and seepage, and that the modern municipal boundary is not the shape of the historic lake. Those are facts about the world, not about the digits.',
    p2: 'So the learner writes the assumption above the formula and then tests it. That is not a coding skill in the narrow sense; it is the habit of asking what has to be true for a calculation to answer the question that was actually asked. A thirteen-year-old in Nieuw-Vennep who has done this once with water will do it at twenty-three with cost per customer, and will notice that the year in the numerator and the month in the denominator do not match. Tools will keep getting better at dividing. They will not start knowing what your two numbers were measuring.',
    closer: 'The case for a Haarlemmermeer child learning to code in 2026 is therefore not about polders. It is that a quotient is a claim about the world dressed as a fact about numbers, that the claim is usually unstated, and that writing it down before running the division is a habit best acquired on something local, physical and genuinely unresolved.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for twenty-five villages on one flat polder',
    intro: 'Rijsenhout to Zwanenburg crosses the whole municipality on straight roads with the wind across them, and Vijfhuizen looks to Haarlem while Badhoevedorp looks to Amsterdam. The lesson reaches all of it without anybody moving.',
    cells: [
      { h3: 'No polder roads in the dark', p: 'Class happens at the kitchen table in Abbenes, Lisserbroek or Hoofddorp at a fixed weekly hour, whatever the wind is doing across the fields.' },
      { h3: 'The lesson is English; the school words are not', p: 'Instruction happens in English. Terms a Dutch school uses stay Dutch on purpose, so a teacher will say groep, havo, vwo or profielkeuze rather than reach for an equivalent, and no translating is done in either direction.' },
      { h3: 'What the first hour produces', p: 'Work that shows the real level, the name of a course that follows from it, and a slot in the week, all arranged without payment details.' },
      { h3: 'Grouped by stage, not by village', p: 'Two learners at the same point work together whether one is in Cruquius and the other in Nieuw-Vennep; two at different points do not.' },
      { h3: 'A fixed slot twice weekly, around the northern holidays', p: 'The rhythm is two lessons every week, which is eight in most months. School holidays here follow regio Noord, as they do across Noord-Holland, and any weeks a family will be away are written into the schedule before a time is confirmed.' },
      { h3: 'Winter puts an extra hour between the two countries', p: 'Because India never adjusts its clocks and the Netherlands does, the teacher sits four and a half hours ahead of the polder from late October and three and a half from late March. Usable slots begin once the school day ends and run into the evening, and Saturday and Sunday are open all day.' }
    ],
    spec: { title: 'A municipality where the aircraft never stop and the schools are spread thin', p: 'Eleven secondary establishments serve 25 villages, so most teenagers here already travel to school. Adding an evening journey on top of that is what stops many families from starting anything, and it is precisely the cost a live online class removes.' }
  },

  fees: {
    h2: 'The fee, in dollars, in every village on the polder',
    intro: 'Printed here rather than saved for a phone call.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'Outside India there is one price and it is in dollars; no euro list exists, so Buitenkaag and Hoofddorp are quoted identically. Nothing is collected before the free lesson has settled a course and a time, and when it is collected it goes through WhatsApp. The pricing page covers what happens if a family pauses, switches plan or misses a week.'
  },

  reviewsH2: 'Six families, in the words they left on Google',

  book: {
    h2: 'Send the level; the village name is optional',
    intro: 'The first task might be a tray of water and a dripping bottle, a division in Python with its assumption written above it, or a cost-per-customer figure from work whose numerator and denominator cover different periods.',
    success: 'Thank you. Your Haarlemmermeer class request has been sent.'
  },

  faq: {
    h2: 'Haarlemmermeer coding class questions',
    intro: 'The municipality, its villages, its lake, the teaching and the terms.',
    items: [
      { q: 'Is this page about Haarlemmermeer or Hoofddorp?', a: 'Both, because they are not the same name for the same thing. Haarlemmermeer is the municipality, with 166,978 residents on 1 January 2026; Hoofddorp is its largest town, with 79,650 in 2023, founded in 1853 and named in 1868. Families searching for one and finding the other are in the right place either way, and the page uses both names deliberately.' },
      { q: 'How deep was the Haarlemmermeer?', a: 'No source read for this page publishes a depth, and none is stated here. About 800 million cubic metres were pumped out, and dividing that by the municipality\'s 197.48 square kilometres of land gives 4.05 metres, which is not the answer: the pumps ran for years against rain and seepage, so the volume includes water that arrived after the work started, and the modern boundary is not the shape of the historic lake. Working through why that division fails is the project on this page.' },
      { q: 'Which villages does the class reach?', a: 'All of them. The national count gives 25 woonplaatsen and the municipality says it recognises 31 kernen; both figures are published and both are kept here. Hoofddorp, Nieuw-Vennep, Badhoevedorp, Vijfhuizen and Rijsenhout have published populations, and the rest, from Zwanenburg and Lisserbroek to Abbenes and Boesingheliede, do not.' },
      { q: 'Is any of this taught in Dutch?', a: 'It is not. English is the working language of every lesson. What stays Dutch is the school vocabulary, groep and havo and vwo and profielkeuze, because those are the words a child meets on a timetable. A Dutch-medium version of the course does not exist.' },
      { q: 'What time are classes for a family in Haarlemmermeer?', a: 'From late March the teacher runs three and a half hours ahead of the polder, and from late October four and a half, because only one of the two countries shifts its clocks. In practice that leaves everything between the end of school and mid-evening, plus the whole of Saturday and Sunday. A single weekly time is settled in the free lesson and then left alone.' },
      { q: 'Does living near Schiphol make any difference?', a: 'Not to the class. The airport registered 68.8 million passenger movements in 2025 and sits at 3.35 metres below the national datum inside this municipality, but a lesson that arrives through the connection is unaffected by any of it. The page mentions the figure mainly to note that a movement is an event and not a person, so it cannot be divided into a count of travellers.' },
      { q: 'What is in the free lesson?', a: 'Everything starts by locating what the learner can already do and then setting one task a step beyond it. Children often get a tray of water and a bottle dripping into it. Teenagers get a division they may not run until the assumption behind it is written out. Adults bring a per-unit figure from work whose top and bottom cover different periods. The hour finishes with a named course, a starting point, a weekly time and the dollar price, none of which costs anything to arrange.' },
      { q: 'Is there a Modern Age Coders classroom in Haarlemmermeer?', a: 'No, and none is claimed in Hoofddorp, near Schiphol or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Haarlemmermeer coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a Haarlemmermeer group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or village. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'North to the capital, east to the city, and up to the country',
    html: 'North across the ring dike is <a class="cg-inline-link" href="/coding-classes-in-haarlem">Haarlem</a>, the provincial capital, and east is <a class="cg-inline-link" href="/coding-classes-in-amsterdam">Amsterdam</a>; both sit inside <a class="cg-inline-link" href="/coding-classes-in-noord-holland">Noord-Holland</a>. Every page in this series grows out of the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>. For anyone whose interest is machine learning rather than software, the entry points are <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> and the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-noord-holland', label: 'Noord-Holland' },
    { href: '/coding-classes-in-haarlem', label: 'Haarlem' }
  ],

  personalityCss: `
.cg-root.cg-hmm .cg-hero-grid { align-items: end; gap: clamp(1.8rem, 4.3vw, 3.3rem); }
.cg-root.cg-hmm .cg-hero h1 { font-weight: 500; letter-spacing: -0.008em; line-height: 1.13; }
.cg-root.cg-hmm .cg-capsule { border-left-width: 3px; border-left-style: double; padding-left: 1.6rem; }
.cg-root.cg-hmm .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; }
.cg-root.cg-hmm .cg-section-head h2 { max-width: 34ch; }
.cg-root.cg-hmm .cg-grid-3 { gap: clamp(1.2rem, 2.5vw, 1.95rem); }
.cg-root.cg-hmm .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 1.05rem; }
.cg-root.cg-hmm .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hmm .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Municipality of Haarlemmermeer, Noord-Holland: 166,978 residents (CBS 1 January 2026) across 25 woonplaatsen, with Hoofddorp as its largest town; 55 primary establishments (13,532 pupils) and 11 secondary (7,394); the largest average household size and the lowest single-person share in this series. Drained 1 July 1852; Schiphol inside the boundary. Regio Noord holidays with the rest of Noord-Holland. The city page argues from a division whose assumption fails; Haarlem owns the stale derived figure and the province page owns rank versus distance.',
    localProject: 'A quotient is a claim about the world dressed as a fact about numbers. About 800 million cubic metres were pumped from the Haarlemmermeer, drained 1 July 1852; dividing by the municipality\'s 197.48 km2 of land gives 4.05 metres, which is not the lake\'s depth because the pumps ran for years against rainfall and seepage, so the numerator is a volume moved over time rather than a volume held at a moment, and because the modern municipal boundary is not the historic lake\'s footprint. The learner writes the assumption above the formula and signs the direction of each violation, reporting an upper bound rather than a value. Distinct from the datum trap (Almere: a height measured against a moving reference), from the two-units trap (Rotterdam: TEU against tonnes) and from the denominator-choice trap (Gadong): here both inputs are correct and the division is valid arithmetic, but the physical closed-system assumption that would make the result a depth is false. No depth below the datum is stated anywhere on the page because none was found at source.',
    requiredMentions: [
      '166,978',
      '70,473',
      '23,034',
      '109,654',
      '13,532',
      '7,394',
      'Hoofddorp',
      'Nieuw-Vennep',
      'Badhoevedorp',
      'Rijsenhout',
      'Vijfhuizen',
      '1 July 1852',
      '800 million cubic metres',
      '68.8 million'
    ],
    sources: [
      { claim: 'Haarlemmermeer 166,978 residents on 1 January 2026 (CBS provisional); 70,473 households (2025) averaging 2.31, 23,034 single-person (33 percent); 26,339 aged 0 to 15; 21,425 aged 15 to 25; 41,801 aged 25 to 45; 30,581 aged 65 and over; total area 20,631 ha, land 19,721 ha; density 838; 55 primary establishments (13,532 pupils); 11 secondary (7,394); 25 woonplaatsen, 18 wijken and 97 buurten; 109,654 in 1995, a rise of 57,324 (52 percent).', url: 'https://allecijfers.nl/gemeente/haarlemmermeer/' },
      { claim: 'Haarlemmermeer 166,996 residents on 1 January 2026; 206.31 km2 total, 197.48 land, 8.83 water; mayor M.H.F. Schuurmans-Wijdeven (VVD); main town Hoofddorp; the municipality recognises 31 kernen; 2023 populations Hoofddorp 79,650, Nieuw-Vennep 31,595, Badhoevedorp including Nieuwe Meer 14,455, Vijfhuizen including Nieuwebrug 4,865, Rijsenhout 4,330; the lake finally fell dry on 1 July 1852, with ring dike construction taking eight years from May 1840.', url: 'https://nl.wikipedia.org/wiki/Haarlemmermeer' },
      { claim: 'Hoofddorp was founded in 1853, the year after the drainage, and renamed Hoofddorp in 1868; it is the hoofdplaats of the municipality of Haarlemmermeer, with 79,650 residents on 1 January 2023.', url: 'https://nl.wikipedia.org/wiki/Hoofddorp' },
      { claim: 'The Haarlemmermeer was drained in 1852; 800 million cubic metres of water were pumped out; the steam pumping stations were the Leeghwater, the Lynden and the Cruquius, with further stations at Spaarndam, Halfweg and Gouda.', url: 'https://www.canonvannederland.nl/nl/zuid-holland/rijnland/1852-het-haarlemmermeer-is-droog' },
      { claim: 'Schiphol lies in Haarlemmermeer at 3.35 metres below NAP; in 2025 Schiphol registered 68.8 million passenger movements.', url: 'https://nl.wikipedia.org/wiki/Luchthaven_Schiphol' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'A depth for the Haarlemmermeer polder or the former lake below the datum. No source read gives one; the 4.05 metres is presented only as the output of a division whose assumption fails.',
      'A commonly quoted figure of about 4.5 metres below the datum for Schiphol. The source read gives 3.35 metres and that is the only figure used.',
      'A population for any village other than the five published, and any reconciliation of the 25 woonplaatsen against the 31 kernen. Both counts are stated and neither is preferred.',
      'Any count of travellers derived from the 68.8 million passenger movements. A movement is an event and the page says so rather than dividing.',
      'Anything the Haarlem page owns: the density inconsistency. Anything the Noord-Holland page owns: the provincial totals and the rank-versus-distance project. Anything the Almere page owns: the datum.'
    ]
  }
};
