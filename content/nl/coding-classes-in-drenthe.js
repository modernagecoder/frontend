'use strict';
// Drenthe: the province page. Twelve municipalities, the lowest density in
// the country, a quarter of its people over sixty-five, and 52 of the 54
// stone tombs in the Netherlands. Spine: "five thousand years old" is a
// range, not a number, and the arithmetic that turns 3350 BC into an age has
// no year zero in it.

module.exports = {
  slug: 'coding-classes-in-drenthe',
  code: 'dre',
  accent: '#6A4D01',
  accentRationale: 'Drenthe: a peat-brown ochre the solver placed between the two existing browns without touching either',
  pageType: 'governorate',
  place: {
    name: 'Drenthe',
    eyebrow: 'Province of Drenthe',
    schemaType: 'AdministrativeArea',
    chain: [{ type: 'Country', name: 'Netherlands' }]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Drenthe, Netherlands',
  title: 'Coding Classes in Drenthe | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across Drenthe, ages 6 to 67: Emmen, Assen, Hoogeveen, Meppel, Coevorden, Tynaarlo and all 12 municipalities.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in all twelve municipalities of Drenthe, the province of the hunebedden, built on the age that is really a range.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'python-programming-masterclass-zero-to-advanced-college',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Drenthe Learners',
    description: 'Ability-placed online coding, Python, AI, app development and mathematics for children, teenagers and adults across the twelve municipalities of the province of Drenthe, taught in English.'
  },

  h1: 'Coding classes in Drenthe, where five thousand years old is a range three centuries wide',
  capsuleQ: 'What are the best coding classes in Drenthe?',
  capsule: 'Coding classes in Drenthe serve 508,109 people in twelve municipalities (Statistics Netherlands, 1 January 2026), on the emptiest land in the country at 192 to the square kilometre, with a quarter of the population over sixty-five. Fifty-two of the 54 hunebedden still visible in the Netherlands stand here, built between 3350 and 3050 BC, which makes them somewhere between 5,075 and 5,375 years old and not the single number every sign gives them. Modern Age Coders runs one live online class in English across all twelve, for learners from 6 to 67. The first lesson costs nothing; after it, a group of five to ten is USD 100 a month and one-to-one is USD 150.',
  lead: 'A sign at Borger says the stones are five thousand years old. The archaeology says they were raised between 3350 and 3050 BC, and a child who does the subtraction gets 5,376 for the older date, which is wrong by one, because the calendar goes from 1 BC to AD 1 with nothing in between. The child who writes the program that gets 5,375 and keeps the other end of the range at 5,075 has learned two things every date column in the world needs: that a range stays a range, and that there is no year zero.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Drenthe.',

  picks: {
    eyebrow: 'Course picks for Drenthe',
    h2: 'Four courses for a province of villages and two towns',
    intro: 'A groep 4 child in Beilen who plays Roblox and wants to make it instead, a teenager in Assen with an app idea and no way to build it, a student in Emmen who wants Python properly, and a parent in Meppel whose office has just discovered AI tools: four doors into a wide, quiet province.',
    items: [
      { course: 'roblox-game-coding-for-kids-lua-course', band: 'Ages 8 to 12', note: 'Real Lua inside Roblox Studio, in English, for the groep 5 to 8 child anywhere from Roden to Coevorden who wants a game other people can join.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'From idea to an app on a real phone, for the teenager in Assen or Hoogeveen whose school offers no route to it.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'College and adult', note: 'Python from nothing to advanced, live, for the NHL Stenden Emmen student or the adult who has decided this is the year.' },
      { course: 'ai-tools-mastery-complete-college', band: 'Adults', note: 'ChatGPT, Claude and automation used with judgement, for the parent in Meppel or Emmen whose employer has switched the tools on and left the rest to them.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Drenthe today',
      h2: 'Twelve municipalities, the emptiest land in the country, and the oldest monuments',
      intro: 'Statistics Netherlands counted 508,109 residents on 1 January 2026 in 228,059 households, 71,302 of them under fifteen, 56,420 aged fifteen to twenty-five and 130,043 aged sixty-five or more, on 2,632.66 square kilometres of land inside 2,680.39 of territory, almost none of it water. That is 192 to the square kilometre, the lowest of any province on this site, and a rise of 12 percent from 454,864 in 1995.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Emmen first, Assen the capital', p: 'Emmen holds 109,881 people, 21.6 percent of the province, and is the largest municipality. Assen, with 70,769, is the capital, known to the rest of the world for the TT motorcycle circuit. Hoogeveen at 56,781 and Meppel at 36,616 follow, and the other eight are villages joined into municipalities in the 1998 reorganisation.' },
          { h3: 'The schools, and the age of the province', p: '253 primary establishments teach 39,467 pupils and 45 secondary establishments 23,252, the smallest secondary count in this series. The under-fifteens are 14.0 percent of the province and the over-sixty-fives 25.6 percent: one resident in four, which is what a province that people retire to looks like in a table.' },
          { h3: 'The stones', p: 'Of the 54 hunebedden still visible in the Netherlands, 52 stand in Drenthe, most of them along the Hondsrug, the long straight ridge that runs from Emmen towards Groningen. They were raised by the Funnel Beaker people between 3350 and 3050 BC, from an estimated 80 to 100 built. The largest, D27, is at Borger.' }
        ] },
        { kind: 'spec', title: 'A province since 1815', p: 'Drenthe was a landschap, a territory without a vote in the States General, until the constitution of 1815 made it a full province. Twelve municipalities since 1998; the Hondsrug in the east; peat colonies in the south-east; sand, heath and forest through the middle; and the Drentsche Aa, one of the few rivers in the country that was never straightened.' }
      ]
    },
    {
      id: 'spread', tint: 'tint', eyebrow: 'The spread',
      h2: 'From Emmen to Westerveld: all twelve municipalities, by population',
      intro: 'Six groupings, the municipalities inside each, and every register count as it stood on 1 January 2026, the last being Westerveld with 20,035.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Emmen', p: 'Emmen 109,881, the largest municipality, the zoo that moved, the peat museum and a page to come. Over a fifth of the province in one municipality on the German border.' },
          { h3: 'The Hondsrug and the south-east', p: 'Coevorden 35,729, the old fortress town; Borger-Odoorn 26,162, with D27 and the hunebed centre at Borger; Aa en Hunze 26,062, the ridge villages from Gieten to Annen and the Drentsche Aa.' },
          { h3: 'Assen', p: 'Assen 70,769, the capital, the TT circuit, the provincial museum with the bog bodies, and a page to come.' },
          { h3: 'The north', p: 'Tynaarlo 35,116, which is Zuidlaren, Vries and Eelde with the airport; Noordenveld 31,737, which is Roden, Norg and Peize, both looking north to the city of Groningen for work and school.' },
          { h3: 'Hoogeveen and Meppel', p: 'Hoogeveen 56,781, the third town and a page to come; Meppel 36,616, the canal town at the Overijssel border where the train from the north splits. The two southern towns, half an hour apart.' },
          { h3: 'The middle and the west', p: 'Midden-Drenthe 34,402, which is Beilen and the villages around it; De Wolden 24,819; Westerveld 20,035, the smallest, holding Diever, Dwingeloo and the radio telescopes on the heath.' }
        ] },
        { kind: 'p', text: 'Twelve, and every one is above. Emmen, Assen and Hoogeveen will each get a page that goes close; this one keeps the whole province, radio telescopes and stone tombs included, in one view.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'The offices behind every number, and the one figure that is honestly a range',
      intro: 'The national count, the twelve registers, the province\'s own entry, and the entry on the hunebedden the project is built on.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The count', p: 'From Statistics Netherlands, provisional, for 1 January 2026: 508,109 residents in twelve municipalities; 228,059 households; 71,302 under fifteen; 56,420 aged fifteen to twenty-five; 130,043 aged sixty-five and over; 253 primary establishments with 39,467 pupils and 45 secondary with 23,252; land 263,266 hectares, territory 268,039; density 192; 454,864 residents in 1995.' },
          { h3: 'The twelve', p: 'Emmen 109,881; Assen 70,769; Hoogeveen 56,781; Meppel 36,616; Coevorden 35,729; Tynaarlo 35,116; Midden-Drenthe 34,402; Noordenveld 31,737; Borger-Odoorn 26,162; Aa en Hunze 26,062; De Wolden 24,819; Westerveld 20,035. The twelve add to 508,109 exactly, and the class adds them before it touches a date.' },
          { h3: 'The province, described', p: 'Capital Assen; largest municipality Emmen; twelve municipalities since the 1998 reorganisation; land 2,632.65 square kilometres and water 47.74; 508,054 residents at the end of 2025 against 508,109 a day later by the national count, both kept; the Hondsrug ridge from Emmen towards Groningen; a full province under the constitution of 1815; the TT at Assen.' },
          { h3: 'The hunebedden', p: 'The Dutch entry on the hunebed: built between 3350 and 3050 BC during the westernmost spread of the Funnel Beaker culture; an estimated 80 to 100 once stood in the north of the country; 54 are still visible in the Netherlands, 52 of them in Drenthe; D27 at Borger is the largest. Its length is not given in the entry and is not given here.' },
          { h3: 'The arithmetic', p: 'The historical calendar runs from 1 BC straight to AD 1. The years from a BC date to an AD date are therefore the two numbers added and one subtracted: 3350 BC to AD 2026 is 5,375 years, not 5,376, and 3050 BC to AD 2026 is 5,075. The page ran the sum in Python before writing it, and confirmed that Python\'s own date type refuses any year before 1.' },
          { h3: 'The holiday region', p: 'Drenthe takes its school holidays with regio Noord, alongside Groningen, Friesland, Overijssel, Flevoland and Noord-Holland, under the Rijksoverheid\'s division.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the province, its twelve municipalities, the hunebed centre or any school named here, and none is suggested. They are on the page because a page that claims Drenthe should know how old Drenthe\'s oldest things are, and how precisely.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How old is a hunebed? Build the program that keeps the range and finds the missing year',
      intro: 'One published date range, one calendar with a gap in it, and a table in which the number on the sign turns out to be two numbers and both of them are off by one when done the obvious way.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Keep both ends', p: 'The entry says 3350 to 3050 BC. The learner stores that as two numbers, not one, and refuses to average them: a tomb raised in 3050 BC is three hundred years younger than one raised in 3350 BC, and nothing on the sign says which this one is. The age is therefore a range, and the program carries the range all the way to the output.' },
          { h3: '2. Find the missing year', p: 'The obvious subtraction, 2026 minus minus 3350, gives 5,376. The learner then counts the years across the boundary and finds that 1 BC is followed by AD 1: no year zero. Every BC-to-AD span is one shorter than the subtraction says, so the real ages are 5,375 and 5,075. The program stores BC years as negatives and subtracts one whenever it crosses the line.' },
          { h3: '3. Try the library and watch it refuse', p: 'The learner asks Python\'s date type for 1 January 3350 BC and it raises an error: the year is out of range, because the library counts from AD 1. The lesson is not that the library is wrong but that a date column can hold things the date type cannot, and that the programmer has to know which before the first row is loaded.' }
        ] },
        { kind: 'table', caption: 'What the sign says, what the subtraction says, and what the calendar says', head: ['Claim', 'Naive arithmetic', 'Correct value', 'Why they differ'], rows: [
          ['Age of a hunebed raised in 3350 BC, in 2026', '2026 plus 3350 is 5,376', '5,375 years', 'no year zero between 1 BC and AD 1'],
          ['Age of a hunebed raised in 3050 BC, in 2026', '2026 plus 3050 is 5,076', '5,075 years', 'the same missing year'],
          ['"Five thousand years old"', 'one number', '5,075 to 5,375 years, a range 300 wide', 'the sign rounded a range to a point'],
          ['Share of the original tombs still standing', '54 of "about 90", so 60 percent', '54 to 68 percent', 'the original count is itself a range, 80 to 100'],
          ['Python: date(-3350, 1, 1)', 'a date', 'an error: year out of range', 'the type starts at AD 1']
        ] },
        { kind: 'callout', h3: 'A range in is a range out, and the calendar has a hole in it', p: 'Two quiet errors sit under almost every historical figure a child will read. The first is rounding a range to a point: the sources say 3350 to 3050 and the sign says five thousand, and three centuries of uncertainty vanish into a round number. The second is the year that does not exist: the historical calendar was drawn up without a zero, so every span that crosses from BC to AD is one year shorter than the subtraction gives, and every library that stores years as integers has to decide whether to know that. A learner who has carried the range through and found the missing year will read every "5,000 years old", every "founded in", and every date column with the right suspicion. The table was worked through before this paragraph was written; the dates and the counts are quoted from the entry, and every other figure in it is that arithmetic and nothing else.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any figure that arrives with a date in it',
      intro: 'Ages of buildings, durations of reigns, years since founding, the gap between two events in different eras: each is a subtraction that looks trivial and is not. Rehearsed first on the oldest things in the province.',
      body: [
        { kind: 'table', caption: 'When the input is a date, or two of them', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Store the range', 'Two columns for a dated range, never their midpoint', '"Built around 3200 BC", a date no source gives', 'An answer as precise as the evidence and no more'],
          ['Sign the year', 'Keep BC years as negatives and say so in the column name', 'A 3350 mistaken for AD 3350', 'Arithmetic that can run at all'],
          ['Mind the gap', 'Subtract one from every span that crosses from BC to AD', '5,376 for 5,375', 'The right number of years'],
          ['Know the type\'s floor', 'Check what the date library refuses before loading', 'A crash on row one, or worse, a silent clip to year 1', 'A column that holds what the data holds'],
          ['Carry the range through', 'A range in the input is a range in the output; report both ends', '"60 percent survive" from 80 to 100 originals', 'A percentage that admits what it does not know']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A number line on the floor with stones on it: AD 1 on one side, 1 BC on the other, and the child asked to step from one to the other and count. One step, not two. Then a stone at 3 BC and one at AD 3, and a walk that takes five steps, not six. The child has found the missing year with their feet.' },
          { h3: 'For teenagers', p: 'The two dates as negative integers in Python, a function that counts years across the boundary correctly, and a printed table with both ends of every range. Then the attempt to build a real date for 3350 BC, the error it raises, and a short search for what the library would need instead. The stretch: how old will the tombs be in the year the learner turns sixty-seven?' },
          { h3: 'For adults', p: 'The same discipline on a date column from work: founding years, contract spans, ages computed from birthdates across a century boundary, a "years since" figure in a dashboard. Adults usually discover that the column they trust was computed by subtraction and that at least one row in it crosses a line nobody checked.' }
        ] },
        { kind: 'p', text: 'The provincial totals, the twelve municipal counts, the areas, the dates and the tomb counts come from the offices and entries cited beside them. The corrected ages are the calendar rule applied to the published dates, shown as exactly that, and the page keeps the 80 to 100 as a range because that is how it was published.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a number line on the floor to a date function that knows the calendar has a hole',
    intro: 'Placement happens in the first free hour, and the twelve municipalities are not a variable in it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'One step, not two', p: 'Children walk a number line from 1 BC to AD 1 and discover the year that is not there.', courses: ['kids-coding-blocks-masterclass', 'roblox-game-coding-for-kids-lua-course'] },
      { band: 'Ages 11 to 13', h3: 'Ranges that stay ranges', p: 'Learners store both ends of a dated range and carry them through to an age.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Signed years and a refusing library', p: 'Teenagers write the crossing rule, hit the library\'s floor, and report a range 300 years wide honestly.', courses: ['complete-app-development-masterclass-for-teens', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Date columns at work', p: 'Adults audit a "years since" figure they rely on and find the row that crosses a line.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'ai-tools-mastery-complete-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will say the hunebedden are five thousand years old. Why should a child in Borger learn to say 5,075 to 5,375?',
    intro: 'Because the assistant gives the round number the sign gives, and the round number is a range with its width filed off.',
    p1: 'Ask a tool how old the Drenthe hunebedden are and it will say about five thousand years, which is what every sign, brochure and school project says, and which is true in the way that "about a hundred kilometres" is true of a distance you have not measured. It will not, unprompted, give both ends of the range, and if asked to compute an age from 3350 BC it is as likely as anyone to add the two years and hand back 5,376. The person who keeps the range and finds the missing year is the one who has run the sum and watched it come out wrong by one.',
    p2: 'That habit is the whole product. The tool will write the date function on request, and it will even mention the missing year if asked directly. What it does not supply is the reflex of asking, of any figure with a date inside it, whether the input was a range and whether the span crosses a line. A twelve-year-old in Assen who has walked the number line will ask both questions of a "founded in" at sixteen and a "years of service" column at twenty-six, and will be the one who notices the row that is off by one. The tools will have new names by then. The calendar will still have no year zero.',
    closer: 'For a Drenthe parent, then, the case for coding in 2026 has nothing to do with archaeology. It rests on two habits, keeping a range as a range and counting years the way the calendar does, and on the fact that the surest way to acquire them is to run the arithmetic on the oldest things in the province and see it fail. The class exists to make that happen.',
    blogAnchor: 'whether coding is worth a child\'s time now that AI writes so much of it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a province where the nearest town is usually a drive',
    intro: 'Assen and Emmen are an hour apart, Meppel looks to Zwolle and Roden looks to Groningen, and most of the twelve municipalities are villages with a school and a supermarket. A class that comes in through the router does not need a town at all.',
    cells: [
      { h3: 'The N34 and the A28 stay empty', p: 'The lesson is at home in Dwingeloo, Gieten or Zuidlaren at a fixed weekly hour, and nobody drives to Assen for it.' },
      { h3: 'English, with school Dutch as the school says it', p: 'Teaching is in English; groep, havo, vwo and profielkeuze are left in Dutch because that is how the child hears them at school, and nothing is translated in either direction.' },
      { h3: 'The first hour and what comes out of it', p: 'One task pitched at the learner\'s level, a course chosen from how it went, and a first rung, and nobody is asked for a card to set it up.' },
      { h3: 'Placed by ability', p: 'Groups are formed from level and aim, never from address; Emmen, the Hondsrug and the heath sit together.' },
      { h3: 'Twice a week, on regio Noord\'s year', p: 'Two fixed lessons a week, normally eight in a month. Drenthe\'s summer holiday follows regio Noord, and the family\'s weeks away are written into the plan before the slot is confirmed.' },
      { h3: 'Half past three, or half past four, behind', p: 'Drenthe runs three and a half hours behind the teacher from late March to late October and four and a half hours behind for the rest of the year, because only one of the two countries changes its clocks. Late afternoons, early evenings and weekends are open at both ends.' }
    ],
    spec: { title: 'One resident in four is over sixty-five, and the class goes to sixty-seven', p: 'Drenthe has more retired people, as a share, than any province on this site, and the upper end of the age range this class serves is not decorative. The adult pipeline on this page is built for a sixty-year-old in Westerveld as much as for a ten-year-old in Emmen, and the free first hour is the same for both.' }
  },

  fees: {
    h2: 'Twelve municipalities, one figure in dollars, and the first hour free',
    intro: 'Set out here before anything about you is asked.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'There is one price outside India and it is in dollars; there is no euro price, and Westerveld is charged exactly what Emmen is. Nothing is paid until the free lesson has fixed the course and the hour, and then it is paid over WhatsApp. Pausing, switching plan and missing a lesson are all explained on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, reproduced as written',

  book: {
    h2: 'Give us the level; the village is optional',
    intro: 'The first task might be a number line on the floor, a date function in Python that has to cross from BC to AD, or a "years since" column from work that has never been checked for the row that crosses a line.',
    success: 'Thank you. Your Drenthe class request has been sent.'
  },

  faq: {
    h2: 'Drenthe coding class questions',
    intro: 'The province, its towns, the stones, the teaching and the terms.',
    items: [
      { q: 'How old are the hunebedden, really?', a: 'Between 5,075 and 5,375 years in 2026. The Dutch entry on them gives 3350 to 3050 BC for their construction, and because the calendar has no year zero, a span from a BC year to an AD year is the two numbers added and one subtracted. The sign\'s "five thousand years" is a range three centuries wide rounded to a point, and building the program that keeps the range and finds the missing year is the project on this page.' },
      { q: 'Do Emmen, Assen and Hoogeveen get pages of their own?', a: 'They will, later in this series. The other nine municipalities, Meppel and Coevorden down to Westerveld, are listed above with their populations and this is their page.' },
      { q: 'Is Assen or Emmen the capital?', a: 'Assen, with 70,769 residents on 1 January 2026, is the capital. Emmen, with 109,881, is the largest municipality and holds over a fifth of the province. Hoogeveen, at 56,781, is third.' },
      { q: 'We are in Roden or Zuidlaren, closer to the city of Groningen than to anywhere in Drenthe. Which page is ours?', a: 'This one, but it does not matter. A learner in Noordenveld or Tynaarlo sits in one group with one from Emmen at one hour, and the class does not know which province the router is in. The province of Groningen page is linked at the foot of this one for the curious.' },
      { q: 'Does the teacher speak Dutch?', a: 'In English. The words the school uses, groep, havo, vwo, profielkeuze, are used unchanged, but the lesson is not available in Dutch, and Drents is not on offer either.' },
      { q: 'What time are classes for a family in Drenthe?', a: 'Dutch summer time puts a Drenthe afternoon three and a half hours behind the teacher; Dutch winter time makes it four and a half. Hours after school, before dinner and on Saturday or Sunday overlap with the teacher\'s evening, and the recurring one is agreed in the first lesson.' },
      { q: 'What happens in the free lesson?', a: 'The teacher finds the edge of what the learner can do and puts one task exactly there. A child walks a number line from 1 BC to AD 1. A teenager writes the date function and hits the library\'s floor. An adult brings a "years since" column from work. The hour ends with a course, a starting point, a weekly time and the fee in dollars, and no money has changed hands.' },
      { q: 'Is there a Modern Age Coders classroom anywhere in Drenthe?', a: 'No, and none is claimed in Assen, in Emmen or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Drenthe coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a Drenthe group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or municipality. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'North to the city, south to the river, and up to the country',
    html: 'North along the Hondsrug is the <a class="cg-inline-link" href="/coding-classes-in-groningen-province">province of Groningen</a>, with the earthquake scale nobody reads correctly; south past Meppel is <a class="cg-inline-link" href="/coding-classes-in-overijssel">Overijssel</a> and its dike arithmetic; west across the Stellingwerven is <a class="cg-inline-link" href="/coding-classes-in-friesland">Friesland</a>, the province with two names. The three, and this page, are children of the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>; a learner after models rather than programs should head for <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>. Emmen, Assen and Hoogeveen follow.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-groningen-province', label: 'Province of Groningen' },
    { href: '/coding-classes-in-overijssel', label: 'Overijssel' }
  ],

  personalityCss: `
.cg-root.cg-dre .cg-hero-grid { align-items: end; gap: clamp(2rem, 4.5vw, 3.75rem); }
.cg-root.cg-dre .cg-hero h1 { font-weight: 500; letter-spacing: -0.007em; line-height: 1.13; }
.cg-root.cg-dre .cg-capsule { border-left-width: 8px; border-left-style: solid; padding-left: 1.5rem; }
.cg-root.cg-dre .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; }
.cg-root.cg-dre .cg-section-head h2 { max-width: 30ch; }
.cg-root.cg-dre .cg-grid-3 { gap: clamp(1.2rem, 2.5vw, 1.9rem) clamp(1.3rem, 2.8vw, 2.1rem); }
.cg-root.cg-dre .cg-ladder-col { border-top: 5px solid var(--cg-accent-soft); padding-top: 1rem; }
.cg-root.cg-dre .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-dre .cg-callout { border-left-width: 4px; border-left-style: double; }
`,

  dossier: {
    curriculumAuthority: 'Province of Drenthe: 12 municipalities (since 1998), 508,109 residents (CBS 1 January 2026), 253 primary establishments (39,467 pupils) and 45 secondary (23,252). Capital Assen; largest municipality Emmen (109,881, 21.6 percent). Lowest density on this site (192) and highest over-65 share (25.6 percent). 52 of the 54 visible hunebedden. Full province since 1815. Regio Noord holidays. A province page is about the spread; the hub owns the national curriculum.',
    localProject: 'A range in is a range out, and the calendar has no year zero. The hunebedden were built 3350 to 3050 BC (Dutch entry); "five thousand years old" is a range 5,075 to 5,375 years wide in 2026; the naive subtraction gives 5,376 and 5,076 because it assumes a year zero between 1 BC and AD 1; Python\'s date type refuses year -3350 outright. The survival share is likewise a range, 54 to 68 percent, because the original count is 80 to 100. Distinct from the two-calendars trap (Hijri to Gregorian conversion), from the working-days trap (Brunei: the weekend as an input), and from the midrange-versus-median trap (Tutong): the flaws here are rounding a published range to a point and crossing an era boundary that has no zero. Computed and run in Python before writing.',
    requiredMentions: [
      '508,109',
      'twelve municipalities',
      'Emmen',
      'Assen',
      'Hoogeveen',
      'Meppel',
      'Coevorden',
      'Borger-Odoorn',
      'Westerveld',
      'Hondsrug',
      'hunebedden',
      '3350',
      '5,375',
      '454,864'
    ],
    sources: [
      { claim: 'Drenthe 508,109 residents on 1 January 2026 (CBS provisional); 12 municipalities; total area 268,039 ha, land 263,266 ha; density 192; 228,059 households; 71,302 under 15; 56,420 aged 15 to 25; 130,043 aged 65 and over; 253 primary establishments (39,467 pupils); 45 secondary (23,252); 454,864 in 1995, a 12 percent rise.', url: 'https://allecijfers.nl/provincie/drenthe/' },
      { claim: 'All 12 municipalities on 1 January 2026: Emmen 109,881; Assen 70,769; Hoogeveen 56,781; Meppel 36,616; Coevorden 35,729; Tynaarlo 35,116; Midden-Drenthe 34,402; Noordenveld 31,737; Borger-Odoorn 26,162; Aa en Hunze 26,062; De Wolden 24,819; Westerveld 20,035.', url: 'https://allecijfers.nl/ranglijst/grootste-en-kleinste-gemeenten-in-inwoners-in-de-provincie-drenthe/' },
      { claim: 'Capital Assen; Emmen the municipality with the most residents; 12 municipalities since the 1998 reorganisation; land 2,632.65 km2, water 47.74; 508,054 residents end 2025; the Hondsrug, an elongated straight ridge from Emmen towards Groningen; of the 54 hunebedden still visible in the Netherlands, 52 stand in Drenthe; a full province since the 1815 constitution; the TT at Assen.', url: 'https://nl.wikipedia.org/wiki/Drenthe' },
      { claim: 'The Dutch hunebedden were built between 3350 and 3050 BC during the westernmost expansion of the Funnel Beaker culture; an estimated 80 to 100 once stood in the north of the Netherlands; 54 are still visible, 52 of them in Drenthe; D27 at Borger is the largest.', url: 'https://nl.wikipedia.org/wiki/Hunebed' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'The length of D27 at Borger. Not given in the entry read; not stated.',
      'That Drenthe has the lowest density and the highest over-65 share of all twelve provinces. Only the provinces on this site were compared, and the page says so.',
      'The Commissaris van de Koning. Not extracted from the entry; not named.',
      'The radio telescopes at Dwingeloo and Westerbork, the bog bodies at Assen and the zoo at Emmen. Named as landmarks in the spread only; no figures attached.',
      'Anything the Netherlands hub or the Groningen page owns: the SLO core objectives, the earthquake scale.'
    ]
  }
};
