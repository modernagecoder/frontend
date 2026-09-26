'use strict';
// Essex (cg- county index, UK cluster Phase 7, row 216). Ceremonial Essex: twelve districts under Essex County Council
// plus Southend-on-Sea and Thurrock. Spine: how many trains does a timetable need? Southend Pier & Railway (run by
// Southend-on-Sea City Council; southendpier.co.uk, read raw 26 September 2026): the pier "stretches for 1.33 miles";
// "Pier trains run on a half hourly basis, at the hour and 30 minutes past the hour from 10:30am. The trains travel at
// 8-10mph and when travelling through the points the speed drops to 5mph. The current trains went into service in
// 2021"; from the shore on the hour and half hour, from the Pier Head at quarter to and quarter past; single track
// electric railway from 1890. Our model (26 September 2026; points slowdown ignored, stated on the page): run time
// 9.98 minutes at 8 mph, 8.87 at 9, 7.98 at 10; the published pattern leaves 5.0 to 7.0 minutes at each end, so one
// train can work it; fleet = ceiling(cycle / headway) with a 2-minute minimum turnaround each end (our assumption):
// every 15 minutes needs 2 trains, every 10 minutes needs 2 at 10 mph and 3 at 8 mph. Two trains leaving opposite
// ends together meet after 4.43 minutes; at equal speed exactly mid-pier, at 10 and 8 mph 119 metres off the middle,
// so with a loop at the middle the faster train waits about 1.0 minute. Lesson family: headway, fleet size and
// single-track meeting points; screened 26 September 2026 (headway: 0 dossier hits); the Southend city page used
// the pier only as a place fact (its lesson is tide peak finding).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (twelve districts plus Southend and Thurrock,
// 1,860,208, our sum); ONS Census 2021 built-up areas with our OA-level check (Hoddesdon and Sawbridgeworth
// excluded, Hertfordshire; Harlow 93,580 with about 430 on the Hertfordshire side; Southend-on-Sea BUA spans
// Southend, Castle Point and Rochford). BLOCKED: Essex County Council term dates returned 403, not retried.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'ESSEX', blurb: 'Fourteen councils, fifty-five towns, and the timetable of the pier railway at Southend worked out from first principles.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-essex',
  code: 'exc',
  accent: '#6B583B',
  accentRationale: 'Essex: a weathered pier-timber brown from the solver (5.49:1 on the darkest paper tint), yellower than the other UK browns',
  pageType: 'governorate',
  place: {
    name: 'Essex',
    eyebrow: 'County of Essex',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'East of England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Chelmsford', href: '/best-coding-class-in-chelmsford' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Essex',
  title: 'Coding Classes in Essex | Live Online Python, Ages 6 to 67',
  description: 'Live online coding, Python, AI and maths classes across Essex, from Southend, Colchester and Chelmsford to Basildon, Harlow and Clacton. The first lesson is free.',
  ogDescription: 'Coding classes for every Essex town, with a project that works out how many trains the Southend pier timetable needs, and where two of them would have to pass.',
  twitterDescription: 'Essex coding, Python and AI classes for ages 6 to 67, live online. The first lesson is free.',
  ogImageCourse: 'problem-solving-dsa-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Problem-Solving Classes for Essex',
    description: 'Ability-placed online coding, Python, algorithms, AI and mathematics for children, teenagers and adults across the Essex districts, Southend-on-Sea and Thurrock, taught live in English.'
  },

  h1: 'Coding classes in Essex',
  capsuleQ: 'What are the best coding classes in Essex?',
  capsule: 'Essex, counted as the ceremonial county, is fourteen councils: twelve districts plus Southend-on-Sea and Thurrock, with 1,860,208 people at the 2021 Census, a few thousand more than Kent by the same count. The Southend built-up area is the largest place, then Colchester, Basildon and Chelmsford, and after them come the estuary towns, the Tendring coast, the Epping Forest edge and the villages of Uttlesford. Our classes reach them all in one way: live online with teachers in India, placing every learner by ability rather than year group, anyone from 6 to 67, either in a group of five to ten or alone with a teacher. We teach programming, Python, algorithms, AI and maths. The Essex project is a timetable puzzle set on Southend Pier. Your first lesson is free; afterwards a group place costs USD 100 a month and private lessons USD 150.',
  lead: 'Southend Pier runs 1.33 miles into the Thames estuary, and a single-track railway has run along it since 1890. The pier\'s own site publishes the timetable and the speed: trains leave the shore on the hour and half hour, leave the Pier Head at quarter past and quarter to, and travel at 8 to 10 miles an hour. That is enough information for a beautiful piece of reasoning. How many trains does that timetable need? What would it take to run twice as often? And if two trains must share one track, where exactly do they have to pass, and what happens when one of them is a little slower than the other? This page works through it the way a programmer would: model, calculate, then question the model.',
  wa: 'Hello Modern Age Coders, could we arrange a free lesson for a learner in Essex?',

  picks: {
    eyebrow: 'Courses for Essex',
    h2: 'Essex learners usually start here',
    intro: 'An eight-year-old in Wivenhoe who draws train layouts, a ten-year-old in Rayleigh who loves logic puzzles, a Year 10 in Brentwood heading for computer science, and a shift planner in Grays who wants to automate the rota. Four courses, and every one begins with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch games and animations where a child learns that a program runs in order, one step at a time.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'Computational thinking, logic puzzles and real-world challenges, which is where timetable puzzles live.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Logic and programming foundations, then data structures, algorithms and dynamic programming for teenagers.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from the very beginning for adults, through to object-oriented design, files and exceptions.' }
    ]
  },

  sections: [
    {
      id: 'essex', tint: '', eyebrow: 'The county in numbers',
      h2: 'Fourteen councils and 1,860,208 people from Tilbury to Harwich',
      intro: 'Nomis supplies the 2021 Census head count for each council. For towns we use the ONS built-up areas, and we re-added the census output areas inside Essex ourselves to see which towns cross the county line.',
      body: [
        { kind: 'table', caption: 'The fourteen councils of ceremonial Essex, usual residents at Census 2021, largest first', head: ['Council', 'Usual residents', 'Main towns'], rows: [
          ['Colchester', '192,715', 'Colchester, Tiptree, Wivenhoe, West Mersea'],
          ['Basildon', '187,571', 'Basildon, Billericay, Wickford'],
          ['Chelmsford', '181,523', 'Chelmsford, South Woodham Ferrers, Galleywood, Danbury'],
          ['Southend-on-Sea', '180,686', 'Southend-on-Sea, Leigh-on-Sea, Shoeburyness'],
          ['Thurrock', '176,001', 'Grays, Stanford-le-Hope, Tilbury, South Ockendon'],
          ['Braintree', '155,268', 'Braintree, Witham, Halstead, Great Notley'],
          ['Tendring', '148,291', 'Clacton-on-Sea, Harwich, Brightlingsea, Walton-on-the-Naze'],
          ['Epping Forest', '134,980', 'Loughton, Waltham Abbey, Chigwell, Epping'],
          ['Harlow', '93,329', 'Harlow'],
          ['Uttlesford', '91,341', 'Saffron Walden, Great Dunmow, Stansted Mountfitchet'],
          ['Castle Point', '89,587', 'Thundersley and South Benfleet, Canvey Island'],
          ['Rochford', '85,661', 'Rayleigh, Rochford, Hockley and Hawkwell'],
          ['Brentwood', '77,047', 'Brentwood, Ingatestone'],
          ['Maldon', '66,208', 'Maldon, Burnham-on-Crouch']
        ] },
        { kind: 'p', text: 'Essex and Kent are close to the same size: our sum for the fourteen Essex councils is 1,860,208 and for the thirteen Kent councils 1,855,844. Like Kent, Essex has no dominant centre. Its largest built-up area, Southend-on-Sea, is shared between three councils: Southend itself, Castle Point and Rochford. Colchester\'s built-up area reaches into Tendring. And the county runs from the edge of London at Loughton and Chigwell to a North Sea port at Harwich, which is a long way to go for an evening class.' },
        { kind: 'table', caption: 'The forty largest Essex towns by ONS built-up area, Census 2021; Hoddesdon and Sawbridgeworth straddle in from Hertfordshire and are left out', head: ['Town', 'Usual residents', 'Town', 'Usual residents'], rows: [
          ['Southend-on-Sea', '182,305', 'South Ockendon', '22,440'],
          ['Colchester', '130,245', 'Harwich', '20,215'],
          ['Basildon', '115,955', 'Waltham Abbey', '18,645'],
          ['Chelmsford', '110,625', 'Saffron Walden', '16,610'],
          ['Harlow', '93,580', 'South Woodham Ferrers', '16,025'],
          ['Brentwood', '55,340', 'Hockley and Hawkwell', '15,425'],
          ['Clacton-on-Sea', '53,200', 'Tilbury', '14,185'],
          ['Thundersley and South Benfleet', '49,885', 'Halstead', '13,900'],
          ['Grays', '44,345', 'Rochford', '12,615'],
          ['Braintree', '43,190', 'Chigwell', '12,250'],
          ['Canvey Island', '38,010', 'Buckhurst Hill', '11,750'],
          ['Billericay', '34,075', 'Epping', '10,695'],
          ['Loughton', '33,345', 'Chadwell St Mary', '10,685'],
          ['Rayleigh', '32,380', 'Great Dunmow', '10,395'],
          ['Stanford-le-Hope', '29,525', 'Aveley', '9,360'],
          ['Wickford', '27,535', 'Tiptree', '9,300'],
          ['Witham', '27,395', 'Brightlingsea', '8,680'],
          ['Chafford Hundred and West Thurrock', '23,585', 'Stansted Mountfitchet', '8,625'],
          ['Maldon', '23,380', 'Runwell', '8,085'],
          ['Burnham-on-Crouch', '7,805', 'Berechurch', '7,705']
        ] },
        { kind: 'p', text: 'Fifteen more Essex built-up areas have between five and eight thousand residents, from Great Notley and Wivenhoe to West Mersea, Walton-on-the-Naze, Great Wakering, Ashingdon, Galleywood, Danbury, Kirby Cross, Purfleet-on-Thames, East Tilbury, Hullbridge, Takeley and Little Canfield, Ingatestone and Jaywick. Every row we print agrees with our own count to within rounding except Harlow, which has about 430 residents on the Hertfordshire side of the line.' },
        { kind: 'callout', h3: 'School calendars in Essex', p: 'When we asked Essex County Council\'s website for its term dates on 26 September 2026 it declined to serve the page, so rather than copy dates from somewhere else we print none. Three councils and many academy trusts set dates here, and lesson breaks are arranged family by family. The county\'s selective tests have their own maths pages, for <a class="cg-inline-link" href="/11-plus-maths-tuition-essex">Essex</a> and <a class="cg-inline-link" href="/11-plus-maths-tuition-southend">Southend</a>; this page gives no advice on schools.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Essex project',
      h2: 'How many trains does the pier timetable need?',
      intro: 'Four facts from the pier\'s own site, a little arithmetic, and a model that is honest about what it leaves out.',
      body: [
        { kind: 'p', text: 'Start with the run. 1.33 miles at 8 miles an hour takes 9.98 minutes; at 10 miles an hour it takes 7.98. So a train leaving the shore on the hour reaches the Pier Head somewhere between 8 and 10 minutes past, which leaves it 5 to 7 minutes before the published quarter-past departure back. It reaches the shore again between 23 and 25 past, and waits 5 to 7 minutes for the half-hour departure. One train, going back and forth, can work the whole published timetable. We are not saying how many trains the pier actually uses; we are saying what the arithmetic requires.' },
        { kind: 'table', caption: 'Our model of 26 September 2026: fleet needed = cycle time divided by headway, rounded up, with at least 2 minutes at each end', head: ['A train every', 'At 10 mph', 'At 8 mph', 'What changes'], rows: [
          ['30 minutes (as published)', '1 train', '1 train', 'Nothing: one train and slack at both ends'],
          ['15 minutes', '2 trains', '2 trains', 'Trains now meet on the pier and must pass'],
          ['10 minutes', '2 trains', '3 trains', 'The slower speed alone costs a whole extra train']
        ] },
        { kind: 'p', text: 'The last row is the one that surprises people. The difference between 8 and 10 miles an hour looks small, but at a ten-minute headway it decides whether the service needs two trains or three, because the round trip at 8 miles an hour is just over twenty minutes once each end has its turnaround. Fleet size jumps in whole trains, so a small change in speed can cost a large change in equipment. Every bus company, airline and delivery firm meets this staircase.' },
        { kind: 'p', text: 'Now the single track. With two trains, one leaving each end at the same moment, they meet after 4.43 minutes. If both run at the same speed they meet exactly in the middle of the pier, which is where a passing place would sit. But if one runs at 10 miles an hour and the other at 8, the meeting point moves 119 metres from the middle towards the slower train\'s end. A passing place cannot move, so the faster train arrives first and waits, about a minute. Delay on a single track is not caused only by breakdowns; it comes from two trains that are each running perfectly well at slightly different speeds.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 10 to 13', p: 'Convert miles and miles an hour into minutes in Python, then print a timetable for one train and check it matches the published times.' },
          { h3: 'Ages 13 to 16', p: 'Write the fleet-size function, test it at many headways and speeds, and draw the staircase where one more train is needed.' },
          { h3: 'Ages 16 and up', p: 'Simulate two trains with random small speed changes on one track with one passing place, and measure how waiting builds up over a day.' }
        ] },
        { kind: 'callout', h3: 'What the model leaves out', p: 'The pier\'s site says trains slow to 5 miles an hour through the points, and our simple model ignores that slowing. It also ignores loading time variations, weather and anything about how the railway is actually operated. The timetable and speeds are the pier\'s published figures; the fleet sizes, meeting points and waits are our own arithmetic, offered as a teaching model and not as a description of the real service.' }
      ]
    },
    {
      id: 'pier', tint: 'deep', eyebrow: 'Why the pier',
      h2: 'A railway along a pier, in the words of the people who run it',
      intro: 'The pier and railway are run by Southend-on-Sea City Council; these facts are from its pier website.',
      body: [
        { kind: 'table', caption: 'Southend Pier and its railway, as the pier\'s own pages describe them', head: ['Topic', 'What the pier site says'], rows: [
          ['Length', 'The longest pleasure pier in the world, stretching for 1.33 miles into the Thames estuary.'],
          ['Timetable', 'Trains from the shore on the hour and half hour, from 10:30am, and from the Pier Head at quarter past and quarter to.'],
          ['Speed', '8 to 10 miles an hour, dropping to 5 miles an hour through the points.'],
          ['The trains', 'The current trains went into service in 2021.'],
          ['History', 'A single-track electric railway began running in 1890; visitor numbers peaked at 5.75 million in 1949 to 1950.']
        ] },
        { kind: 'p', text: 'A railway on a pier is a gift for teaching because it is small enough to hold in your head and real enough to have published numbers. There is one track, two ends, one timetable and a known speed. Every principle of scheduling that applies to a national rail network applies here, without the thousands of complications. A learner who can reason about the pier railway properly can reason about any shared resource: a single lane of road, a shared printer, or two programs writing to the same file.' },
        { kind: 'p', text: 'This page is independent: Modern Age Coders is not linked to Southend Pier, Southend-on-Sea City Council or Essex County Council in any way. Speeds, length and times come from the pier; the modelling and fleet arithmetic, mistakes included, belong to us.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-southend-on-sea">Southend-on-Sea</a> has a city page about the tides beneath the pier, <a class="cg-inline-link" href="/best-coding-class-in-chelmsford">Chelmsford</a> and <a class="cg-inline-link" href="/best-coding-class-in-colchester">Colchester</a> have theirs, and <a class="cg-inline-link" href="/coding-classes-in-kent">Kent</a> is across the estuary.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Level by level',
    h2: 'From a train that moves on screen to a schedule that works',
    intro: 'The free lesson decides where to begin. Age helps, but ability decides.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'One step, then the next', p: 'Scratch animations where a train moves, waits and turns round, the first taste of sequence and timing.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Puzzles with rules', p: 'Logic problems and first Python, where a timetable becomes a list and a rule becomes a condition.', courses: ['problem-solving-and-computational-thinking-for-kids', 'python-ai-kids-masterclass'] },
      { band: 'Ages 13 to 18', h3: 'Algorithms for scheduling', p: 'Data structures, simulation and dynamic programming, applied to problems where resources are shared.', courses: ['problem-solving-dsa-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Automating the rota', p: 'Python for adults who plan shifts, routes or deliveries, and want the computer to do the arithmetic.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding alongside AI',
    h2: 'An AI can write a timetable in seconds. Can it tell you why the ten-minute service needs a third train?',
    intro: 'Sometimes, if you ask exactly the right question. Knowing that question is the skill.',
    p1: 'Ask an assistant to produce a timetable for a pier railway every ten minutes and it will cheerfully lay out departures. What it will not reliably do is notice that the timetable is impossible with two trains at the slower speed, because nothing in the request mentioned the fleet, and a list of times looks equally plausible whether or not the trains exist to run it.',
    p2: 'An Essex student who has built the fleet-size function knows to ask how many trains, how long each round trip, and where they pass. Those questions turn a neat-looking output into a plan that works. The same habit catches the same mistake in every AI-generated schedule, rota or project plan: it may be tidy and still demand resources nobody has.',
    closer: 'So an Essex teenager should learn to program in 2026 not to compete with machines at writing lists, but to be able to tell a workable plan from a tidy impossible one.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Getting started',
    h2: 'Harwich to Tilbury, and nobody drives anywhere',
    intro: 'Essex is wide and its roads are slow at the times children finish school. Online lessons ignore both.',
    cells: [
      { h3: 'Lessons wherever you are', p: 'A bedroom in Canvey Island, a kitchen in Saffron Walden, a desk in Loughton. The screen is shared and the learner does the work.' },
      { h3: 'The language of English schools', p: 'Key Stage 2 and 3, GCSE choices and A levels are named as Essex schools name them, in English.' },
      { h3: 'Start with a free lesson', p: 'A complete lesson of real work and a straightforward recommendation. Card details are never requested.' },
      { h3: 'Learners at one stage', p: 'Groups of five to ten who have reached the same point, gathered widely, so the lesson is pitched right for all of them.' },
      { h3: 'Breaks around your school', p: 'Two lessons a week is typical, and holidays are fitted to your own school\'s dates, which in Essex can vary by council and school type.' },
      { h3: 'Times stated in UK time', p: 'Our teachers are in India, ahead of the UK by four and a half hours in summer and five and a half in winter, and every lesson is booked in UK time.' }
    ],
    spec: { title: 'Why groups are built by level in Essex', p: 'Fifty-five towns and no single centre mean that in any one town, few learners are at exactly the same stage. Grouping by level lets a Jaywick learner and an Epping learner work together.' }
  },

  fees: {
    h2: 'Fees in Essex',
    intro: 'One price list for every Essex town, and for every country outside India.',
    first: 'A full lesson with real work, finished with a recommended level and course.',
    group: 'Roughly eight lessons a month, with five to ten learners at the same level.',
    private: 'Roughly eight lessons a month, one teacher and one learner.',
    closer: 'Every fee is quoted in US dollars, which is how we bill families in all countries apart from India; we do not keep prices in pounds. The first payment comes only after the free lesson has settled which course and which weekly slot, and the pricing page explains how pausing, missed lessons and a move between group and one-to-one work.'
  },

  reviewsH2: 'Google reviews, as families wrote them',

  book: {
    h2: 'Book the free lesson',
    intro: 'Send an age or school year and one interest. The first lesson might be a Scratch animation, a first Python timetable, or the fleet-size puzzle on this page.',
    success: 'Thank you. Your Essex request is with us.'
  },

  faq: {
    h2: 'Essex questions',
    intro: 'About the county, the pier railway project and how we teach.',
    items: [
      { q: 'How many people live in Essex?', a: 'At the 2021 Census the twelve Essex districts plus Southend-on-Sea and Thurrock held 1,860,208 usual residents, from Office for National Statistics data on Nomis. Colchester was the largest council at 192,715 and Maldon the smallest at 66,208.' },
      { q: 'What are the largest towns in Essex?', a: 'By ONS built-up area: Southend-on-Sea 182,305, Colchester 130,245, Basildon 115,955, Chelmsford 110,625 and Harlow 93,580. The page lists fifty-five Essex towns above five thousand residents.' },
      { q: 'What is the pier railway project?', a: 'Learners use the pier\'s published timetable and speeds to work out how many trains the service needs, how that changes at higher frequencies, and where two trains on one track must pass. It is a model, not a description of how the railway is run.' },
      { q: 'How long does the pier train take?', a: 'The pier is 1.33 miles long and its site gives train speeds of 8 to 10 miles an hour, so the running time is roughly 8 to 10 minutes each way before any slowing at the points.' },
      { q: 'Why can a small speed change need an extra train?', a: 'Because fleet size is the round trip divided by the gap between trains, rounded up. At a ten-minute service, our model needs two trains at 10 miles an hour but three at 8, since the slower round trip just passes twenty minutes.' },
      { q: 'When are Essex school holidays?', a: 'It depends on who runs the school: the county council, Southend-on-Sea or Thurrock, or an academy trust with its own dates. The county\'s term-dates page turned us away when we checked on 26 September 2026, so holiday pauses are arranged directly with you.' },
      { q: 'Is there a classroom in Chelmsford, Colchester or Southend?', a: 'No. Every lesson is live online, so a learner in Burnham-on-Crouch joins the same class as one in Basildon without travelling.' },
      { q: 'What ages do you teach?', a: 'Our youngest learners are six and our oldest sixty-seven. Scratch comes first for small children; around ten to twelve most switch to typing Python; secondary students and grown-ups branch into algorithms, data, AI and building software. Where anyone starts is decided in the free lesson.' },
      { q: 'What does it cost?', a: 'Lesson one costs nothing. After it, a group seat is USD 100 a month and a private teacher USD 150 a month, paid month by month with no longer commitment.' },
      { q: 'Do you help with the Essex 11 plus?', a: 'Maths preparation for the Essex and Southend tests is covered on two other pages. Here the subject is programming, and choosing or applying to schools is outside what we advise on.' }
    ]
  },

  next: {
    eyebrow: 'The wider UK',
    h2: 'More pages from here',
    html: 'City pages for <a class="cg-inline-link" href="/best-coding-class-in-chelmsford">Chelmsford</a>, <a class="cg-inline-link" href="/best-coding-class-in-colchester">Colchester</a> and <a class="cg-inline-link" href="/best-coding-class-in-southend-on-sea">Southend-on-Sea</a> each have their own project. Neighbouring counties include <a class="cg-inline-link" href="/coding-classes-in-hertfordshire">Hertfordshire</a> and, over the water, <a class="cg-inline-link" href="/coding-classes-in-kent">Kent</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has everything else.',
    waLabel: 'Send us a WhatsApp'
  },

  footerHeading: 'Essex and around',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-chelmsford', label: 'Chelmsford' },
    { href: '/best-coding-class-in-southend-on-sea', label: 'Southend-on-Sea' }
  ],

  personalityCss: `
.cg-root.cg-exc .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.4rem); }
.cg-root.cg-exc .cg-hero h1 { font-weight: 700; letter-spacing: -0.02em; line-height: 1.08; }
.cg-root.cg-exc .cg-capsule { border-top: 3px solid var(--cg-accent); border-bottom: 3px solid var(--cg-accent); padding: 0.9rem 0; }
.cg-root.cg-exc .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-exc .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.015em; }
.cg-root.cg-exc .cg-table caption { font-style: italic; font-weight: 500; }
.cg-root.cg-exc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-exc .cg-table th { letter-spacing: 0.02em; font-weight: 700; }
.cg-root.cg-exc .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-exc .cg-callout { border-left-width: 6px; border-radius: 0 14px 14px 0; }
`,

  dossier: {
    curriculumAuthority: 'Essex (ceremonial: twelve districts under Essex County Council plus Southend-on-Sea and Thurrock unitaries). ONS Census 2021 TS001 via Nomis: Colchester 192,715; Basildon 187,571; Chelmsford 181,523; Southend-on-Sea 180,686; Thurrock 176,001; Braintree 155,268; Tendring 148,291; Epping Forest 134,980; Harlow 93,329; Uttlesford 91,341; Castle Point 89,587; Rochford 85,661; Brentwood 77,047; Maldon 66,208; total 1,860,208 (our sum; Kent 1,855,844 by the same method). ONS Census 2021 built-up areas (published; checked by our OA sums): Southend-on-Sea 182,305 (Southend, Castle Point, Rochford); Colchester 130,245 (Colchester, Tendring); Basildon 115,955; Chelmsford 110,625; Harlow 93,580 (about 430 in Hertfordshire); Brentwood 55,340; Clacton-on-Sea 53,200; Thundersley and South Benfleet 49,885; Grays 44,345; Braintree 43,190; Canvey Island 38,010; Billericay 34,075; Loughton 33,345; Rayleigh 32,380; Stanford-le-Hope 29,525; Wickford 27,535; Witham 27,395; Chafford Hundred and West Thurrock 23,585; Maldon 23,380; South Ockendon 22,440; Harwich 20,215; Waltham Abbey 18,645; Saffron Walden 16,610; South Woodham Ferrers 16,025; Hockley and Hawkwell 15,425; Tilbury 14,185; Halstead 13,900; Rochford 12,615; Chigwell 12,250; Buckhurst Hill 11,750; Epping 10,695; Chadwell St Mary 10,685; Great Dunmow 10,395; Aveley 9,360; Tiptree 9,300; Brightlingsea 8,680; Stansted Mountfitchet 8,625; Runwell 8,085; Burnham-on-Crouch 7,805; Berechurch 7,705; and fifteen between 5,000 and 8,000 (Great Notley, Wivenhoe, West Mersea, Walton-on-the-Naze, Great Wakering, Ashingdon, Galleywood, Danbury, Kirby Cross, Purfleet-on-Thames, East Tilbury, Hullbridge, Takeley and Little Canfield, Ingatestone, Jaywick). Hoddesdon and Sawbridgeworth excluded (Hertfordshire). Southend Pier & Railway (Southend-on-Sea City Council): "the longest pleasure pier in the world. It stretches for 1.33 miles out into the Thames Estuary"; "Pier trains run on a half hourly basis, at the hour and 30 minutes past the hour from 10:30am. The trains travel at 8-10mph and when travelling through the points the speed drops to 5mph. The current trains went into service in 2021"; Train Times "From the shore On the hour and half hour From the Pier Head Quarter to and past the hour"; History: "A single track electric railway starting running in 1890"; visitor numbers "peaking at 5.75 million in 1949-50".',
    localProject: 'Headway, fleet size and single-track meeting points. From the pier\'s published 1.33 miles and 8 to 10 mph: run time 9.98 min at 8 mph, 8.87 at 9, 7.98 at 10. Published pattern (shore :00 and :30, Pier Head :15 and :45) leaves 5.0 to 7.0 min at each end, so one train can work it (no claim about the actual fleet). Fleet = ceiling(cycle / headway), cycle = two runs plus at least 2 minutes turnaround at each end (our assumption): 30-minute headway 1 train at 8 or 10 mph; 15-minute 2 and 2; 10-minute 2 at 10 mph and 3 at 8 mph. Two trains leaving opposite ends together meet after 4.43 min; at equal speeds mid-pier, at 10 and 8 mph 119 metres from the middle, so with a fixed mid-pier passing place the faster train waits about 1.0 minute. The 5 mph points slowdown is ignored and the page says so. AI angle: a generated ten-minute timetable looks plausible whether or not the fleet exists. Lesson family: headway, fleet size and single-track meeting points; screened 26 September 2026 (headway: 0 dossier hits); the Southend city page uses the pier only as a place fact (tide peak finding).',
    requiredMentions: [
      '1,860,208',
      '5.75 million',
      '9.98 minutes',
      '119 metres',
      '4.43 minutes',
      'Chafford Hundred and West Thurrock',
      'Takeley and Little Canfield',
      'went into service in 2021',
      'Thundersley and South Benfleet',
      'Pier Head'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for the twelve Essex districts, Southend-on-Sea and Thurrock, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Essex towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Southend Pier: 1.33 miles, longest pleasure pier in the world.', url: 'https://www.southendpier.co.uk/' },
      { claim: 'Southend Pier Railway: half-hourly trains, 8 to 10 mph, 5 mph through the points, current trains in service from 2021, departure times.', url: 'https://www.southendpier.co.uk/concessions/pier-railway' },
      { claim: 'Southend Pier history: single-track electric railway from 1890; visitors peaked at 5.75 million in 1949 to 1950.', url: 'https://www.southendpier.co.uk/history' }
    ],
    rejectedClaims: [
      'Essex County Council term dates: the council site returned 403 on 26 September 2026, not retried.',
      'How many trains the pier railway actually operates: not stated on the pages read, so the page says only what the timetable requires.',
      'Marconi and Chelmsford radio history: already the anchor of the Chelmsford city page, so not repeated here.',
      'Census 2021 commuting flows from Essex to London: the flow tables were not reachable on the Nomis API during this build, and Census 2021 travel-to-work data were collected during a national lockdown, so no commuting figures are used.',
      'Hoddesdon and Sawbridgeworth as Essex towns: both built-up areas lie mostly in Hertfordshire.',
      'Named Essex schools: selective schools belong on the 11 plus pages, and none is named here.'
    ]
  }
};
