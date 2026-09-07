'use strict';
// Alkmaar: a cheese city that absorbed two rural municipalities in 2015.
// Spine: its published growth since 1995 is +9,187, and the villages that
// arrived by annexation hold about 12,430 people, so on the ground it was
// standing still or shrinking while the chart went up.

module.exports = {
  slug: 'coding-classes-in-alkmaar',
  code: 'alk',
  accent: '#7E3124',
  accentRationale: 'Alkmaar: a rust red for the cheese-carriers barrows and the old market square, set by the solver apart from Enschede\'s madder and Zaanstad\'s oxide',
  pageType: 'city',
  place: {
    name: 'Alkmaar',
    eyebrow: 'Alkmaar, Noord-Holland',
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
  routeLabel: 'Alkmaar, Netherlands',
  title: 'Coding Classes in Alkmaar | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Alkmaar for ages 6 to 67, in De Rijp, Stompetoren, Schermerhorn and all 17 places. First lesson free.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families across the 17 places of Alkmaar, built on a growth figure that turns out to be an annexation.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '8 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Alkmaar Learners',
    description: 'Ability-placed online coding, Python, data, AI and mathematics for children, teenagers and adults in Alkmaar, De Rijp, Stompetoren, Schermerhorn and the other places of the municipality, taught in English.'
  },

  h1: 'Coding classes in Alkmaar, where a rising population chart records a boundary rather than a birth rate',
  capsuleQ: 'What are the best coding classes in Alkmaar?',
  capsule: 'Coding classes in Alkmaar serve 113,196 people (Statistics Netherlands, 1 January 2026) across seventeen places, from the city at 92,675 to a hamlet of 85. The published growth since 1995 is 9,187 people. In 2015 the municipality absorbed Graft-De Rijp and Schermer, whose villages held roughly 12,430 people in 2023, which is more than the whole rise. The chart went up because the boundary moved outward. Modern Age Coders teaches live online in English to all seventeen places, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Alkmaar had 104,009 residents in 1995 and 113,196 in 2026, a rise of 9,187. That looks like a growing city. Then read the merger: in 2015 two rural municipalities joined, bringing villages that held about 12,430 people eight years later. Subtract them and the ground that was Alkmaar in 1995 appears to have lost people rather than gained them. Nothing in the published series marks the moment the boundary moved, and a chart that does not mark it is telling you about paperwork while you read it as demography.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Alkmaar.',

  picks: {
    eyebrow: 'Course picks for Alkmaar',
    h2: 'Four courses for a city and sixteen villages in the polders',
    intro: 'A groep 5 child in Oudorp, a teenager in De Rijp with no club nearer than the city, an adult in Stompetoren retraining, and a parent whose year-on-year figures cross a reorganisation: four doors across one municipality.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch from an empty stage to a finished game in three months, in English, for the groep 3 to 6 child in Schermerhorn or Grootschermer.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Python and real datasets to a first trained model, for the teenager who wants to know what a rising line actually measures.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'College and adult', note: 'Python from nothing to advanced, live, for the adult who has decided to stop waiting for somebody else to run the numbers.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Excel, SQL, Python and BI, for the working parent whose trend crosses a restructure nobody adjusted for.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Alkmaar today',
      h2: 'A city, a polder landscape, and a boundary that moved in 2015',
      intro: 'The national register held 113,196 people on 1 January 2026, in 54,740 households averaging 2.04 people, on 110.31 square kilometres of land inside 117.35 of territory: a published 1,023 residents to the square kilometre. In 1995 the count was 104,009, so the municipality shows a gain of 9,187 people over thirty-one years, a rise of 8.8 percent.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'An older municipality than most here', p: '16,455 residents are under fifteen and 12,307 are between fifteen and twenty-five; 29,742 are between twenty-five and forty-five, 30,082 between forty-five and sixty-five, and 24,610 are sixty-five or over, 22 percent. 23,067 households hold one person, 42 percent.' },
          { h3: 'Forty-four primary schools, twelve secondary', p: '44 primary establishments teach 9,046 pupils and 12 secondary establishments teach 7,097. The municipality counts 4,070 students at institutions here across 18 programmes, alongside 2,240 residents in applied higher education and 880 at university level.' },
          { h3: 'Seventeen places, one of them the city', p: 'Alkmaar itself held 92,675 people in 2023, and the other sixteen held between 4,395 and 85. That is what a city looks like after it takes in two municipalities of villages and polder.' }
        ] },
        { kind: 'spec', title: 'Cheese, a siege, and four possible birthdays', p: 'Alkmaar had a weighing right and a cheese scale in 1365, four scales by 1612, a cheese carriers guild founded on 17 June 1593, and a market that certainly took place by 1622. Its own account calls the tradition more than four centuries old, which fits the last of those dates and not the first. City rights came on 11 June 1254 from Willem the Second, and the siege of 1573 gave the phrase about victory beginning at Alkmaar, commemorated every 8 October.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'From a city of 92,675 to a hamlet of 85',
      intro: 'The statistics office counts 17 woonplaatsen, 11 wijken and 66 buurten. The municipal entry publishes 2023 populations for all seventeen, and the range between the largest and the smallest is more than a thousandfold.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Alkmaar, 92,675 in 2023', p: 'The city: the Waag, the market square, the station and the post-war districts around them. Four fifths of the municipality lives here and every secondary establishment is within reach of it.' },
          { h3: 'Oudorp, 665, and Koedijk, 2,675', p: 'In 2023, on the northern edge, absorbed into the city\'s growth long before 2015. Koedijk is listed as partly in this municipality, which is a detail worth noticing on any list of places.' },
          { h3: 'De Rijp, 4,395, and Graft, 885', p: 'In 2023, in the north-east. These arrived with Graft-De Rijp in 2015, and De Rijp is the largest place in the municipality after the city itself.' },
          { h3: 'Stompetoren, 2,135, and Schermerhorn, 1,260', p: 'In 2023, in the Schermer polder, which joined at the same time. Village schools, wide horizons and a real drive into the city on a dark evening.' },
          { h3: 'Grootschermer 715, Zuidschermer 650, Oterleek 630', p: 'In 2023, the smaller Schermer villages. None of them will ever assemble an after-school coding group from the children who live there.' },
          { h3: 'The smallest six', p: 'West-Graftdijk 755, Ursem 2,995, Markenbinnen 320, Driehuizen 240, Starnmeer 220, Oost-Graftdijk 140 and Noordeinde 85, all in 2023. A learner in Noordeinde is in the same group at the same hour as one in the middle of the city.' }
        ] },
        { kind: 'p', text: 'Every one of the seventeen gets the same class at the same hour and the same fee, and placement depends only on what a learner can already do.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure and its source, and the arithmetic marked as an estimate',
      intro: 'The national count, the municipal entry, the merger, the villages and the cheese market.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The municipal count', p: 'Statistics Netherlands: 113,196 residents in 2026; 54,740 households for 2025 averaging 2.04 people, 23,067 of them single-person, 42 percent; 16,455 under fifteen; 12,307 aged fifteen to twenty-five; 29,742 aged twenty-five to forty-five; 30,082 aged forty-five to sixty-five; 24,610 aged sixty-five and over; 44 primary establishments with 9,046 pupils and 12 secondary with 7,097; 4,070 students at institutions here and 18 programmes; 2,240 residents in applied higher education and 880 at university level; total area 11,735 hectares, land 11,031; density 1,023; 17 woonplaatsen, 11 wijken and 66 buurten; 104,009 residents in 1995, a rise of 9,187.' },
          { h3: 'The municipality, described', p: 'Its own entry: 113,170 residents on 1 January 2026, 26 fewer than the national figure for the same date, both kept; 117.35 square kilometres, 110.46 of land and 6.89 of water, against 110.31 of land nationally, both kept; mayor Anja Schouten since 23 June 2021; city rights on 11 June 1254 from Willem the Second; the merger with Graft-De Rijp and Schermer took effect on 1 January 2015.' },
          { h3: 'The seventeen places, 2023', p: 'Alkmaar 92,675; De Rijp 4,395; Ursem 2,995; Koedijk, listed as partly in the municipality, 2,675; Stompetoren 2,135; Schermerhorn 1,260; Graft 885; West-Graftdijk 755; Grootschermer 715; Oudorp 665; Zuidschermer 650; Oterleek 630; Markenbinnen 320; Driehuizen 240; Starnmeer 220; Oost-Graftdijk 140; Noordeinde 85.' },
          { h3: 'The annexation, estimated', p: 'The villages that arrived with Graft-De Rijp and Schermer are De Rijp, Graft, West-Graftdijk, Oost-Graftdijk, Grootschermer, Zuidschermer, Schermerhorn, Stompetoren, Oterleek, Driehuizen, Starnmeer, Markenbinnen and Noordeinde. Their 2023 populations total 12,430. That figure is this page adding published village counts and is used below as an estimate rather than as a measurement of what arrived in 2015.' },
          { h3: 'The cheese market', p: 'Alkmaar held a weighing right and a cheese scale in 1365; there were four scales by 1612; the cheese carriers guild, the Kaasdragersgilde, was founded on 17 June 1593; the market certainly took place by 1622. The tradition is described as more than four centuries old, and since 1939 Alkmaar has been the only city still trading cheese in this traditional way.' },
          { h3: 'The siege', p: 'The city entry gives the phrase in the form that victory begins at Alkmaar, and records that the relief of the siege of 1573 is commemorated every year on 8 October.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the municipality, the cheese market or any school named here and claims none. The estimate of what the annexation brought is arithmetic on published village figures from a later year, and every sentence that uses it says so.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Nine thousand up, twelve thousand annexed: build the correction the chart does not carry',
      intro: 'One municipality, one boundary change in the middle of a series, and a growth figure that turns negative once the annexation is taken out.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Take the headline', p: '104,009 in 1995, 113,196 in 2026: a gain of 9,187, or 8.8 percent. Nothing in that pair of numbers is wrong, and nothing in it signals that anything happened to the boundary in between.' },
          { h3: '2. Find and size the boundary change', p: 'In 2015 Graft-De Rijp and Schermer were added. The learner identifies which of the seventeen places came from them and sums their published populations, reaching about 12,430. That is more than the entire recorded gain, which is already the finding.' },
          { h3: '3. Subtract, and say how rough it is', p: '9,187 minus 12,430 gives roughly minus 3,243 for the ground that was Alkmaar in 1995. The learner then writes down why that number is soft: the village figures are for 2023 rather than 2015, one place is listed as only partly inside the municipality, and villages themselves grew or shrank in between. It is an estimate that changes the sign of the story, which is the most a rough number ever needs to do.' }
        ] },
        { kind: 'table', caption: 'One series, one boundary change, two readings', head: ['Quantity', 'Value', 'Where it comes from', 'What it measures'], rows: [
          ['Residents in 1995', '104,009', 'published', 'the municipality as it then was'],
          ['Residents in 2026', '113,196', 'published', 'the municipality as it is now, after 2015'],
          ['Recorded change', 'plus 9,187', 'subtraction of the two', 'both growth and annexation together'],
          ['Villages that arrived in 2015', 'about 12,430 in 2023', 'this page summing published village counts', 'roughly what the boundary brought in'],
          ['Change on the original ground', 'roughly minus 3,243', 'the two above, with caveats', 'an estimate, sign more reliable than size']
        ] },
        { kind: 'callout', h3: 'A series that crosses a boundary change is measuring two things at once', p: 'Population, revenue, headcount, caseload: any quantity attached to a container will jump when the container is resized, and the jump looks exactly like performance. What makes this dangerous is that boundary changes are recorded somewhere else entirely, in a list of mergers that nobody consults while reading a chart, so the series carries no mark at the point where its subject changed. The discipline is to establish the boundary history before interpreting any long series, to size each change even roughly, and to publish the adjusted figure beside the raw one rather than instead of it. Here the adjustment is rough and it still reverses the direction, which is the case worth remembering: a crude correction that changes the sign beats a precise number that answers the wrong question. Every published figure above is cited in the evidence for this page, and the 12,430 and the minus 3,243 are marked as this page\'s arithmetic wherever they appear.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any long series about a container',
      intro: 'Regions merge, teams absorb other teams, product lines get reassigned, catchments are redrawn: the line keeps going and the thing underneath it changes. Practised on a municipality that grew by taking in two others.',
      body: [
        { kind: 'table', caption: 'When the subject of a series changed shape mid-way', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Get the boundary history first', 'Find every merger, split and transfer before reading the chart', 'A reorganisation read as performance', 'A list of dates to check against'],
          ['Size each change', 'Estimate what moved, even roughly, at each boundary event', 'A jump left unexplained', 'An adjustment you can apply'],
          ['Publish both series', 'Show the raw line and the adjusted line together', 'A correction that looks like a cover-up', 'A reader who can see the effect'],
          ['Mark the join', 'Put a visible break at the date the boundary moved', 'A seam invisible to everyone after you', 'A chart that cannot mislead'],
          ['Trust the sign before the size', 'A rough adjustment that reverses a direction is worth more than a precise one that does not', 'Paralysis over an imperfect estimate', 'A usable conclusion']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Two jars of marbles, one counted each week. Halfway through, the teacher quietly tips a third jar into the first. The count rises and the children are asked whether more marbles were made. Finding the answer means asking what happened to the jar, not to the marbles.' },
          { h3: 'For teenagers', p: 'The two published totals in Python, a list of boundary events with dates and sizes, and a function that returns both the raw and the adjusted change. Then the stretch: how large would the annexation have to have been for the original ground to have grown after all?' },
          { h3: 'For adults', p: 'The same treatment on a series at work that crosses a restructure. Adults usually find that the largest movement in a five-year chart happened on the day two teams merged, and that it has been quoted as growth ever since.' }
        ] },
        { kind: 'p', text: 'The population, household, area, school, village, cheese market and city rights figures come from the offices and entries named beside them. The 12,430 and the roughly minus 3,243 are this page\'s own arithmetic on published village counts from 2023 applied to a merger that took effect in 2015, and both are presented as estimates with that mismatch stated.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a third jar tipped into the first to a series with its seam marked',
    intro: 'The starting rung comes out of the free hour, and which of the seventeen places a learner lives in has no bearing.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Were more marbles made?', p: 'Children watch a count rise because a jar was tipped in, and learn to ask about the jar.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Changes and their causes', p: 'Learners split a rise into two parts and label each one.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Adjusted and raw, side by side', p: 'Teenagers build both series, mark the seam and report the sign before the size.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Restructures in a trend', p: 'Adults find the reorganisation inside a working chart and rebuild it honestly.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will tell you Alkmaar grew by nine thousand. Why should a child here learn to ask what the boundary was doing?',
    intro: 'Because both figures are correct, the subtraction is correct, and the conclusion everybody draws from it is not.',
    p1: 'Give a tool the 1995 and 2026 populations and it will report a gain of 9,187 and, if asked, call the municipality growing. The merger of 2015 is documented, but in a different place and a different kind of sentence, and nothing in the two numbers points at it. This is the ordinary shape of the problem: the fact that would change the interpretation is not in the data, it is in the administrative history, and nobody consults the administrative history before reading a chart.',
    p2: 'So the learner goes and gets it, sizes it roughly, and produces a second line beside the first. The work is more archival than technical, which is exactly why it is worth doing once in front of somebody: it teaches that interpretation depends on facts that are not in the file. A thirteen-year-old in De Rijp who has done it will ask, at twenty-three, whether the department acquired anybody during the period the chart covers. Tools will keep subtracting correctly. Knowing what the two ends of the subtraction refer to is the part that stays with people.',
    closer: 'The case for an Alkmaar child learning to code in 2026 is therefore nothing to do with local government. It is that long series quietly change their subject, that the change is recorded somewhere nobody looks, and that a rough correction which reverses the sign of a conclusion is worth more than any amount of precision applied to the wrong question.',
    blogAnchor: 'why writing code still repays a child in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a city and sixteen polder villages',
    intro: 'Noordeinde has about 85 residents. Driehuizen has 240. Nothing that needs a room and a minimum number will ever run in places like those, and both are inside this municipality.',
    cells: [
      { h3: 'The polder roads stay unused', p: 'Class runs at the kitchen table in Starnmeer, Oterleek or the middle of the city at one fixed hour a week.' },
      { h3: 'One working language, plus the school words', p: 'Lessons are in English. The Dutch terms a pupil meets at school stay put, so a teacher says groep or havo or vwo without stopping to translate.' },
      { h3: 'What the free hour is for', p: 'Establishing a level by doing rather than asking, naming the course that follows, and finding an hour in the week. None of it needs a card.' },
      { h3: 'Placement ignores the address', p: 'What a learner can currently do decides the group. Two children from one village may be in different groups, and two from opposite ends of the municipality in the same one.' },
      { h3: 'Twice weekly, on the northern calendar', p: 'Two lessons a week at one repeating slot, eight in most months. Alkmaar takes its holidays with regio Noord along with the rest of Noord-Holland, and weeks away are written in first.' },
      { h3: 'A gap the Dutch clock sets', p: 'India keeps one time all year, so the seasonal movement is all on this side: three and a half hours in the lighter months, four and a half in the darker ones. Late afternoons, early evenings and weekends overlap either way.' }
    ],
    spec: { title: 'Sixteen places too small to support anything', p: 'Eleven of the seventeen places in this municipality held fewer than a thousand people in 2023. A class formed on ability from across the country, rather than on availability from across a village, is the only version of after-school teaching that reaches them at all.' }
  },

  fees: {
    h2: 'The fee, in dollars, in all seventeen places',
    intro: 'Set out here so that nobody has to ask.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'Noordeinde and the city centre are quoted the same number, because one international rate exists, it is in dollars and there is no euro version. Payment comes last: free lesson, then a course and an hour, then a transfer over WhatsApp. Pauses, plan changes and missed weeks are covered on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, printed as their authors typed them',

  book: {
    h2: 'Tell us the level; the village can follow',
    intro: 'The first task might be a jar of marbles with a third jar tipped into it, two population totals with a merger hidden between them, or a five-year chart at work whose biggest movement was a reorganisation.',
    success: 'Thank you. Your Alkmaar class request has been sent.'
  },

  faq: {
    h2: 'Alkmaar coding class questions',
    intro: 'The municipality, its villages, its figures, the teaching and the terms.',
    items: [
      { q: 'Did Alkmaar really not grow?', a: 'The published figures show a rise of 9,187 between 1995 and 2026, from 104,009 to 113,196. In 2015 the municipality absorbed Graft-De Rijp and Schermer, whose villages held about 12,430 people in 2023 by the municipal entry\'s own figures. Subtracting one from the other suggests the ground that was Alkmaar in 1995 lost roughly 3,243 people. That estimate is rough, because the village figures are for 2023 rather than 2015 and one place is listed as only partly inside the municipality, but it reverses the direction of the story, and working out why is the project on this page.' },
      { q: 'Which places does the class reach?', a: 'All seventeen: Alkmaar itself, De Rijp, Ursem, Koedijk, Stompetoren, Schermerhorn, Graft, West-Graftdijk, Grootschermer, Oudorp, Zuidschermer, Oterleek, Markenbinnen, Driehuizen, Starnmeer, Oost-Graftdijk and Noordeinde. Eleven of them held fewer than a thousand people in 2023.' },
      { q: 'How old is the cheese market?', a: 'That depends which event counts as its start, and the sources give four. Alkmaar had a weighing right and a cheese scale in 1365, a cheese carriers guild from 17 June 1593, four scales by 1612, and a market that certainly took place by 1622. The tradition is described as more than four centuries old, which fits the last of those and not the first. Since 1939 Alkmaar has been the only city still trading cheese this way.' },
      { q: 'Is any of this taught in Dutch?', a: 'No. Lessons are in English. Dutch school vocabulary stays as it is, so groep, havo, vwo and profielkeuze are spoken the way a pupil meets them, but no Dutch-language version of the course exists.' },
      { q: 'What time are classes for a family in Alkmaar?', a: 'India keeps one time all year, so all the seasonal movement is on the Dutch side: the teacher is three and a half hours ahead in the lighter months and four and a half in the darker ones. Late afternoon, early evening and both weekend days work, and a single weekly time is settled at the free lesson.' },
      { q: 'We are in Noordeinde or Driehuizen. Does the class reach there?', a: 'It reaches every address in the municipality at the same hour and the same fee. Noordeinde had about 85 residents in 2023 and Driehuizen 240, and neither could ever fill a local class, which is precisely the gap this closes.' },
      { q: 'What is in the free lesson?', a: 'The teacher establishes where the learner\'s ability currently stops and sets one task just past it. A child may watch a count rise because a jar was tipped into another. A teenager builds a raw series and an adjusted one and marks the seam. An adult brings a chart from work that crosses a restructure. It ends with a course, a rung, a weekly time and a dollar price, and nothing has been paid.' },
      { q: 'Is there a Modern Age Coders classroom in Alkmaar?', a: 'No, and none is claimed at the Waag, in De Rijp or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Alkmaar coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in an Alkmaar group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or village. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'South to the capital, out to the province, and up to the country',
    html: 'South is <a class="cg-inline-link" href="/coding-classes-in-zaanstad">Zaanstad</a>, another municipality assembled out of older ones, and beyond it <a class="cg-inline-link" href="/coding-classes-in-haarlem">Haarlem</a>; all of them sit inside <a class="cg-inline-link" href="/coding-classes-in-noord-holland">Noord-Holland</a>, whose page is about the difference between a rank and a distance. At the head of the series is the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, with <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> and the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a> for models rather than programs.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-noord-holland', label: 'Noord-Holland' },
    { href: '/coding-classes-in-zaanstad', label: 'Zaanstad' }
  ],

  personalityCss: `
.cg-root.cg-alk .cg-hero-grid { align-items: end; gap: clamp(1.75rem, 4.1vw, 3.15rem); }
.cg-root.cg-alk .cg-hero h1 { font-weight: 500; letter-spacing: -0.0095em; line-height: 1.12; }
.cg-root.cg-alk .cg-capsule { border-left-width: 7px; border-left-style: solid; padding-left: 1.35rem; }
.cg-root.cg-alk .cg-eyebrow { letter-spacing: 0.135em; font-weight: 600; }
.cg-root.cg-alk .cg-section-head h2 { max-width: 34ch; }
.cg-root.cg-alk .cg-grid-3 { gap: clamp(1.1rem, 2.35vw, 1.8rem) clamp(1.3rem, 2.8vw, 2.05rem); }
.cg-root.cg-alk .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1.25rem; }
.cg-root.cg-alk .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-alk .cg-callout { border-left-width: 5px; border-left-style: dashed; }
`,

  dossier: {
    curriculumAuthority: 'City and municipality of Alkmaar, Noord-Holland: 113,196 residents (CBS 2026) across 17 woonplaatsen, the city holding 92,675 in 2023 and eleven places fewer than a thousand; 44 primary establishments (9,046 pupils) and 12 secondary (7,097); 4,070 students at institutions here across 18 programmes. City rights 11 June 1254; merger with Graft-De Rijp and Schermer on 1 January 2015. Regio Noord holidays with the rest of Noord-Holland. The city page argues from a boundary change inside a series; the province page owns the rank-versus-distance project and Zaanstad owns the entity-with-no-history problem.',
    localProject: 'A series that crosses a boundary change is measuring two things at once. Alkmaar is published at 104,009 residents in 1995 and 113,196 in 2026, a recorded gain of 9,187. On 1 January 2015 the municipality absorbed Graft-De Rijp and Schermer; the thirteen villages that arrived from them held about 12,430 people by their 2023 published figures, which exceeds the whole recorded gain, so the ground that was Alkmaar in 1995 appears to have lost roughly 3,243 people. The estimate is deliberately rough: the village counts are for 2023 rather than 2015, Koedijk is listed as only partly inside the municipality, and the villages themselves changed in between. Distinct from the merger trap on Zaanstad, where the entity did not exist before 1974 and had no history to plot: here the entity persisted throughout and only its boundary moved, so the raw series is continuous and misleading rather than impossible. Both the 12,430 and the minus 3,243 are labelled as this page arithmetic.',
    requiredMentions: [
      '113,196',
      '54,740',
      '23,067',
      '104,009',
      '9,046',
      '7,097',
      'De Rijp',
      'Stompetoren',
      'Schermerhorn',
      'Grootschermer',
      'Anja Schouten',
      '11 June 1254',
      'Kaasdragersgilde',
      '12,430'
    ],
    sources: [
      { claim: 'Alkmaar 113,196 residents in 2026 (CBS); 54,740 households (2025) averaging 2.04, 23,067 single-person (42 percent); 16,455 aged 0 to 15; 12,307 aged 15 to 25; 29,742 aged 25 to 45; 30,082 aged 45 to 65; 24,610 aged 65 and over; total area 11,735 ha, land 11,031 ha; density 1,023; 44 primary establishments (9,046 pupils) and 12 secondary (7,097); 4,070 students at institutions in the municipality and 18 programmes; HBO 2,240 and WO 880; 17 woonplaatsen, 11 wijken and 66 buurten; 104,009 in 1995, a rise of 9,187 (8.8 percent).', url: 'https://allecijfers.nl/gemeente/alkmaar/' },
      { claim: 'Alkmaar 113,170 residents on 1 January 2026; 117.35 km2 (110.46 land, 6.89 water); density 1,025; mayor Anja Schouten (independent) since 23 June 2021; the merger with Graft-De Rijp and Schermer took effect on 1 January 2015; kernen on 1 January 2023 Alkmaar 92,675, De Rijp 4,395, Ursem 2,995, Koedijk (partly) 2,675, Stompetoren 2,135, Schermerhorn 1,260, Graft 885, West-Graftdijk 755, Grootschermer 715, Oudorp 665, Zuidschermer 650, Oterleek 630, Markenbinnen 320, Driehuizen 240, Starnmeer 220, Oost-Graftdijk 140, Noordeinde 85.', url: 'https://nl.wikipedia.org/wiki/Alkmaar_(gemeente)' },
      { claim: 'Alkmaar received city rights on 11 June 1254 from Willem II; the relief of the siege of 1573 is commemorated on 8 October with the phrase that victory begins at Alkmaar; the cheese tradition is more than four centuries old, and since 1939 Alkmaar has been the only city still trading cheese in the traditional way.', url: 'https://nl.wikipedia.org/wiki/Alkmaar' },
      { claim: 'Alkmaar held a weighing right and a cheese scale in 1365; by 1612 there were four scales; the Alkmaarse Kaasdragersgilde was founded on 17 June 1593; the cheese market certainly took place by 1622.', url: 'https://www.kaasmarkt.nl/historie' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'A precise figure for what the 2015 annexation added. The 12,430 is a sum of 2023 village populations applied to a 2015 event and is labelled an estimate everywhere it appears.',
      'A definite statement that the original territory shrank. The page says the estimate suggests a loss of roughly 3,243 and lists the three reasons the figure is soft.',
      'A single founding date for the cheese market. Four dates are quoted and the page notes which of them the more than four centuries description fits.',
      'The population of Koedijk inside Alkmaar. The entry lists the place as partly in the municipality and this page repeats that qualification rather than resolving it.',
      'Anything the Noord-Holland page owns: the provincial totals and the rank-versus-distance project. Anything the Zaanstad page owns: the 1974 merger and the seven predecessor councils.'
    ]
  }
};
