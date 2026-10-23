'use strict';
// Kelowna (cg- city page, Canada cluster Wave 2, row 120). Brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Angle: best-coding-classes-for-kids-in- (ages 6 to 12). "Best" is used in the title and meta only. The body gives
// questions for choosing an online kids' class from a mid-sized BC city, ranks no provider, never claims we are the best.
// Spine: questions to ask an online provider from Kelowna; the history-of-computing and visual-programming content in
// BC's ADST 6-7 Computational Thinking module and the high school computing courses that follow; a City of Kelowna open
// data project on the Okanagan Rail Trail kilometre markers (text to numbers, differences, a units check); Pacific time.
// Sources, read raw on 22 October 2026. BC curriculum from ca/src/bc (adst-6-core.html, adst-home.html,
// adst-11-computer-programming.html); time from ca/facts-geo.md and ca/src/geo/tz/gov_2026AG0013-000209; data and licence
// in ca/src-pilots/best-coding-classes-for-kids-in-kelowna/ (SOURCES.txt):
//  - BC ADST 6-7 Computational Thinking content: "evolution of programming languages", with "historical perspectives,
//    evolution (e.g., Ada Lovelace, punch cards, Hollerith, Grace Hopper, Alan Turing, Enigma, cyphers)"; visual programming
//    with Kodu and Scratch as examples. ADST course list includes "Computer Studies 10", "Web Development 10", "Computer
//    Programming 11", "Computer Information Systems 11" and "Robotics 11". Computer Programming 11 content: "programming
//    language constructs to support input/output, logic, decision structure, and loops".
//  - BC Gov News 2026AG0013-000209: "Pacific time will be set seven hours behind co-ordinated universal time (UTC-7)";
//    final change on Sunday, March 8, 2026. facts-geo.md (tzdb 2026e comments): East Kootenay and Golden chose year-round
//    UTC-6; Kelowna stays on America/Vancouver, UTC-7. India 12 hours 30 minutes ahead all year.
//  - facts-geo.md: Kelowna city in the Kelowna CMA; area codes 236, 250, 257, 672, 778 (the 250 region overlay; no 604)
//    (CNAC via the Internet Archive). No populations used.
//  - City of Kelowna open data, "Okanagan Rail Trail Kilometre Markers" (ArcGIS item cf4cbc7b7b8b49f7a7395efded84f2be,
//    km_item.json): snippet "Point locations for the kilometre markers on the Okanagan Rail Trail in Kelowna."; description
//    "Markers were placed on the Okanagan Rail Trail from the Airport to the North End of Kelowna."; service
//    geoportal.kelowna.ca/arcgis/rest/services/ArcGISOnline/OpenData_Transportation/MapServer/10, live count {"count":13};
//    layer spatial reference wkid 26911 (km_layer.json); licenseInfo links apps.kelowna.ca/images/opendata/opengovernmentlicence.pdf.
//    km_markers.json (copy of km.json) 2,961 bytes, sha256 e8c5788e...35615a6f. Hub page
//    https://hub.arcgis.com/datasets/cf4cbc7b7b8b49f7a7395efded84f2be_10 (checked HTTP 200).
//  - Licence (kelowna_opengovernmentlicence.pdf/.txt, Nov. 9, 2016): "The information provider grants you a worldwide,
//    royalty-free, perpetual, nonexclusive licence to use the information, including for commercial purposes"; attribution
//    "Contains information licensed under the Open Government Licence - City of Kelowna." (dash garbled in the text copy);
//    Information Provider "means City of Kelowna"; based on Version 2.0 of the Open Government Licence - Canada.
// Our own calculations (page_script.py, checks.py, python -I; outputs *.out.txt): 13 markers labelled 38KM to 50KM;
// Elevation falls from 411.473 at km 38 to 345.182 at km 50, a drop of 66.291 in the file's elevation units, with no rise
// between any two neighbours; per-kilometre drops from 0.1 to 9.8; straight-line distances between neighbouring markers,
// from X and Y, 961 to 1,016 (metres, our reading of the UTM coordinates); MarkerID runs 14 down to 2 as the km label rises;
// sorting the labels as text puts a hypothetical 100KM before 38KM (our demonstration).
// Lesson family: turning text labels into numbers, differences between neighbours, and a units sanity check.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import json, math',
  '',
  'with open("km_markers.json", encoding="utf-8") as f:',
  '    features = json.load(f)["features"]',
  '',
  'markers = []',
  'for feature in features:',
  '    a = feature["attributes"]',
  '    km = int(a["Distance_KM"].replace("KM", ""))',
  '    markers.append((km, a["Elevation"], a["X"], a["Y"]))',
  'markers.sort()',
  '',
  'for here, there in zip(markers, markers[1:]):',
  '    drop = here[1] - there[1]',
  '    gap = math.dist(here[2:], there[2:])',
  '    print(here[0], "to", there[0], "km: down", round(drop, 1), "m, straight line", round(gap), "m")'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'KELOWNA', label: 'Kelowna', blurb: 'Choosing an online kids\' coding class from Kelowna: questions to ask, BC ADST at school, and a project on the Okanagan Rail Trail kilometre markers.' },
  market: CA,
  audience: 'kids',
  slug: 'best-coding-classes-for-kids-in-kelowna',
  code: 'bkik',
  accent: '#32610F',
  accentRationale: 'Kelowna kids page: a muted orchard green, #32610F, allocated to this row by the Canada group so it clears every site accent by 6 RGB units and the other Canada accents by 14; contrast 6.95 on the paper #FBF8F2, 6.53 on #F5F1E8 and 5.98 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Kelowna',
    eyebrow: 'Kelowna, British Columbia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'British Columbia' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }, { slug: 'coding-classes-in-british-columbia', name: 'British Columbia' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'British Columbia', href: '/coding-classes-in-british-columbia' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Kelowna',
  title: 'Best Coding Classes for Kids in Kelowna | Live Online, Ages 6-12',
  description: 'Choosing the best coding classes for kids in Kelowna, ages 6 to 12: questions to ask an online class, BC ADST at school, and an Okanagan Rail Trail data project.',
  ogDescription: 'Kelowna families often choose online kids\' coding classes. Here are the questions to ask, what BC schools teach in ADST, and a project on the Okanagan Rail Trail markers.',
  twitterDescription: 'Choosing an online kids\' coding class in Kelowna, with an Okanagan Rail Trail data project.',
  ogImageCourse: 'python-ai-kids-masterclass',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Kelowna Children Aged 6 to 12',
    description: 'Live online coding for Kelowna children aged 6 to 12: blocks and Scratch, the story of computing, then typed Python and Okanagan Rail Trail data, in a batch or one to one, on Pacific time.'
  },

  h1: 'Coding classes for kids in Kelowna',
  capsuleQ: 'What should a Kelowna family ask before choosing an online coding class for a child aged 6 to 12?',
  capsule: 'Ask whether every lesson is live with a real teacher, how many children share that teacher, whether class times are set in Pacific time, and what your child will have built after a term. Modern Age Coders teaches Kelowna children aged 6 to 12 live online, with a batch of 15 to 20 or a teacher alone, starting with Coding for Kids or Python and AI for Kids. The first class is free.',
  lead: 'In a city the size of Kelowna, many families end up comparing online coding classes, because the choice of rooms to drive to is smaller than in Vancouver or Calgary. Online removes the drive but adds new questions: is the teacher really live, is the class built for Pacific time, and will a six-year-old cope with a screen? This page sets out those questions for Kelowna parents. It also shows what British Columbia&rsquo;s Grade 6 and 7 technology modules can include, from Scratch to the history of Ada Lovelace and Alan Turing, and it walks through a small project our older students run on a City of Kelowna open data file: thirteen kilometre markers on the Okanagan Rail Trail, each with an elevation. We name and rank no other provider, and every question here applies to our classes too.',
  wa: 'Hello Modern Age Coders, we are in Kelowna. Could my child join a free coding class?',

  picks: {
    eyebrow: 'Course picks for Kelowna children',
    h2: 'Four courses Kelowna children start with',
    intro: 'Matched to age, and to what BC schools may introduce in Grades 6 and 7. The free class confirms the choice.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 8', note: 'Short live lessons with blocks, plenty of talk and movement breaks, built for children who are new to learning on a screen.' },
      { course: 'scratch-programming-complete-course', band: 'Ages 7 to 10', note: 'Scratch, one of the visual tools BC names for its Grade 6 and 7 module, taken as far as a finished game of the child&rsquo;s own design.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'The move to typed Python, ending with real data such as the Okanagan Rail Trail markers on this page.' },
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'Games in Scratch, Roblox and Minecraft, planned on paper before any code, for children who would rather build than listen.' }
    ]
  },

  sections: [
    {
      id: 'ask', tint: '', eyebrow: 'Questions to ask',
      h2: 'Six questions for any online kids&rsquo; coding class, from a Kelowna parent',
      intro: 'Our questions, written for Kelowna families comparing online classes for a child aged 6 to 12. A good provider will answer every one plainly; ask us the same.',
      body: [
        { kind: 'align', rows: [
          { code: 'Q1', req: 'Is every lesson live, with a teacher who can see my child&rsquo;s screen?', ours: 'Recorded videos are useful for practice, but a child under twelve needs someone who notices confusion and changes the next question. Ask what share of lessons is live.' },
          { code: 'Q2', req: 'How many children share one teacher, and how are they grouped?', ours: 'Ask for the maximum, not the average, and whether a six-year-old could end up in the same group as an eleven-year-old.' },
          { code: 'Q3', req: 'Are class times set in Pacific time, and do they change in November?', ours: 'BC stopped changing its clocks in 2026. A provider that still talks about falling back on 1 November 2026 has not caught up, and may book your child at the wrong hour.' },
          { code: 'Q4', req: 'How long is each lesson for my child&rsquo;s age?', ours: 'Screen attention grows with age. A short, lively lesson for a six-year-old and a full hour for an eleven-year-old are both signs of a class that thinks about children.' },
          { code: 'Q5', req: 'What will my child have built after a term, and can they explain it?', ours: 'A finished project the child can run and talk through is the clearest evidence of learning you will get.' },
          { code: 'Q6', req: 'Is the monthly fee published before I book a trial?', ours: 'You should be able to compare fees before anyone calls you.' }
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Online is not one thing', p: 'A live class with a small group, a live class with a crowd, and a library of recorded videos are all called online. They are very different for a child of seven.' },
          { h3: 'Try before you commit', p: 'Most providers offer a first class without charge. Use it to watch your child&rsquo;s face as much as the screen: interest, frustration and pride are all visible.' },
          { h3: 'Ask your child later', p: 'An hour after the trial, ask what they made. Children who answer with a story about a bug they fixed have been taught; children who shrug have watched.' }
        ] }
      ]
    },
    {
      id: 'adst', tint: 'tint', eyebrow: 'BC schools',
      h2: 'From Ada Lovelace to Scratch: what BC&rsquo;s Grade 6 and 7 modules can include',
      intro: 'Kelowna schools follow BC&rsquo;s curriculum, where coding lives mostly in Applied Design, Skills, and Technologies (ADST). Schools choose at least three ADST modules a year for Grades 6 and 7. We read the content on curriculum.gov.bc.ca on 22 October 2026; quotes are BC&rsquo;s, notes are ours.',
      body: [
        { kind: 'table', caption: 'BC ADST: one Grade 6 and 7 module, and some high school courses that follow (curriculum.gov.bc.ca, read 22 October 2026)', head: ['Stage', 'What BC lists', 'Our note'], rows: [
          ['Grades 6 and 7, Computational Thinking', 'The &ldquo;evolution of programming languages&rdquo;, with examples such as Ada Lovelace, punch cards, Grace Hopper, Alan Turing and Enigma', 'History is on the official list, so the people behind the ideas are part of what a Grade 6 child may study'],
          ['Grades 6 and 7, Computational Thinking', 'Visual programming, with Kodu and Scratch as examples', 'A child who already knows Scratch can spend the module creating rather than learning menus'],
          ['Grade 10', 'Courses such as Computer Studies 10 and Web Development 10', 'Later choices, if the school offers them'],
          ['Grade 11', 'Computer Programming 11, which covers input and output, logic, decision structure and loops; also Computer Information Systems 11 and Robotics 11', 'The ideas a Grade 6 child meets in blocks return here in typed code']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Chosen by the school', p: 'BC lets schools pick the modules, so a Kelowna child may or may not meet Computational Thinking before Grade 8. A weekly class outside school is often the only steady coding a child gets.' },
          { h3: 'History in our lessons', p: 'When a new idea arrives, we mention the people BC itself lists, so a loop or a cipher comes with a human story. Stories help abstract ideas stick for children.' },
          { h3: 'Beside school', p: 'We are a live online class, not a school, and give no school credit or marks. We are not connected with the BC education ministry, the Kelowna school district or the City of Kelowna.' }
        ] }
      ]
    },
    {
      id: 'railtrail', tint: 'deep', eyebrow: 'Kelowna data project',
      h2: 'Is the Okanagan Rail Trail downhill? Thirteen markers, read in Python',
      intro: 'The City of Kelowna publishes the kilometre markers it placed on the Okanagan Rail Trail, from the Airport to the North End of Kelowna, as open data. Each marker has a label, an elevation and a map position. Our students aged about 10 to 12 turn those into an answer. The numbers below are ours.',
      body: [
        { kind: 'table', caption: 'Elevation change between neighbouring kilometre markers: our calculation from the City of Kelowna Okanagan Rail Trail Kilometre Markers file, downloaded 22 October 2026 (13 markers)', head: ['Between markers', 'Elevation drop', 'Straight-line distance'], rows: [
          ['38 to 39 km', '2.3', '1,005'],
          ['39 to 40 km', '0.1', '1,001'],
          ['40 to 41 km', '2.9', '1,002'],
          ['41 to 42 km', '7.8', '985'],
          ['42 to 43 km', '3.3', '975'],
          ['43 to 44 km', '8.6', '967'],
          ['44 to 45 km', '8.9', '1,016'],
          ['45 to 46 km', '7.3', '981'],
          ['46 to 47 km', '7.8', '971'],
          ['47 to 48 km', '4.6', '961'],
          ['48 to 49 km', '9.8', '987'],
          ['49 to 50 km', '2.8', '965']
        ] },
        { kind: 'p', text: 'Our script. The label <b>38KM</b> is text, so <b>replace("KM", "")</b> and <b>int()</b> turn it into the number 38 before sorting; <b>zip</b> then pairs each marker with the next one:<code class="cg-mt-2">' + SCRIPT + '</code>The elevation falls at every step, from 411.473 at km 38 to 345.182 at km 50, a total drop of 66.291 over twelve kilometres. So in the direction the kilometres count, the trail is gently downhill all the way.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why text sorts wrongly', p: 'Sorted as text, labels compare letter by letter, so a label like 100KM would come before 38KM because 1 comes before 3. Converting to numbers first is the fix. It is a small bug with a big lesson.' },
          { h3: 'A units check', p: 'The file does not state its units. The straight-line gaps come out between 961 and 1,016, which only makes sense if the map coordinates are in metres, since the markers are a kilometre apart. That reasoning is ours, and it is how scientists catch unit mistakes.' },
          { h3: 'A gap longer than a kilometre', p: 'A straight line can never be longer than the path it shortcuts, yet one gap is 1,016. So the markers cannot all be exactly 1,000 apart along the trail. Children love finding that the data proves itself slightly imperfect.' }
        ] },
        { kind: 'callout', h3: 'What the file cannot tell you', p: 'Thirteen points only cover the Kelowna section, and an elevation at each marker says nothing about the slopes in between. The file also never says which end is uphill on the ground; our answer is about the direction the kilometre labels count. Students write those limits down before they draw a chart.' },
        { kind: 'p', text: 'Data source: City of Kelowna open data, <a class="cg-inline-link" href="https://hub.arcgis.com/datasets/cf4cbc7b7b8b49f7a7395efded84f2be_10">Okanagan Rail Trail Kilometre Markers</a>. Contains information licensed under the Open Government Licence - City of Kelowna (<a class="cg-inline-link" href="http://apps.kelowna.ca/images/opendata/opengovernmentlicence.pdf">licence</a>). The City of Kelowna does not endorse Modern Age Coders or this page.' }
      ]
    },
    {
      id: 'pacific', tint: '', eyebrow: 'Class times',
      h2: 'Kelowna on Pacific time all year: class times without a November change',
      intro: 'BC&rsquo;s government set Pacific time seven hours behind co-ordinated universal time, UTC-7, after the last clock change on Sunday 8 March 2026. Kelowna, unlike East Kootenay and Golden, which chose UTC-6, stays on Pacific time. Our conversions use the IANA time zone database (release 2026e).',
      body: [
        { kind: 'table', caption: 'Sample Kelowna class times and the time in India, valid all of the 2026 to 2027 school year (our conversions)', head: ['Kelowna', 'India', 'Note'], rows: [
          ['Weekday, 4:30 pm', '5:00 am the next day', 'Same all year'],
          ['Weekday, 6:00 pm', '6:30 am the next day', 'Same all year'],
          ['Saturday, 8:30 am', '9:00 pm Saturday', 'Same all year'],
          ['Sunday, 11:00 am', '11:30 pm Sunday', 'Same all year']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A fixed gap', p: 'India is 12 hours 30 minutes ahead of Kelowna every day, so once a class time is set it does not move. That is simpler than in Ontario, Quebec or the Atlantic provinces, which still change twice a year.' },
          { h3: 'Short sessions for the youngest', p: 'Children of six and seven get brisk lessons with a stretch in the middle; older children work on one project for the whole session.' },
          { h3: 'Kelowna phone numbers', p: 'Kelowna numbers use 250, with 778, 236, 672 and 257 overlaying it. Type the ten digits into the form; the country code is already there.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'A Kelowna child&rsquo;s route from blocks to real data',
    intro: 'Age bands are a guess until the free class shows what your child can actually do.',
    cols: [
      { band: 'Ages 6 and 7', h3: 'Blocks and stories', p: 'Short block programs, and the story of who invented the ideas behind them.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 8 and 9', h3: 'Games', p: 'Scratch and simple game rules: loops, decisions and scores the child designs.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 10 and 11', h3: 'Typed Python', p: 'Text to numbers, sorting, and finding the bug when 100 sorts before 38.', courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Age 12', h3: 'Data with limits', p: 'Files like the rail trail markers, with a units check before any conclusion.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI tool can draw the rail trail chart. Can it tell you the units?',
    intro: 'Not from this file, because the file does not say. Working that out is a human skill.',
    p1: 'Give an AI assistant the thirteen markers and it will happily plot elevation against distance. It may also sort 38KM and 100KM as text, or announce the units with confidence it has not earned. A child who has reasoned from the gaps between markers, about a thousand each, to the conclusion that the coordinates are in metres, knows the difference between evidence and a guess.',
    p2: 'That is the centre of our classes for children: look closely, reason, write the code, test it and explain it. Children learn how AI tools work and how they fail, and they use that knowledge to question answers. No chatbot does their thinking in class. At home, OpenAI asks that anyone under 18 has a parent&rsquo;s permission before using ChatGPT.',
    closer: 'BC&rsquo;s Grade 6 and 7 module asks children to learn how programming languages evolved; knowing how a tool came to be is the first step to knowing what it cannot do.',
    blogAnchor: 'why learning to code still matters in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online coding for Kelowna children, on Pacific time',
    intro: 'One regular teacher, a screen-sharing group or one to one, and no driving for anyone.',
    cells: [
      { h3: 'Timing', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Batch or private', p: 'A batch of 15 to 20 children at a similar level, or one-to-one lessons that follow your child&rsquo;s pace.' },
      { h3: 'What you need', p: 'Any computer with a real keyboard and sound, plus a steady connection. The teacher installs only free tools.' },
      { h3: 'Across the 250 region', p: 'Families in Kamloops, Nanaimo, Victoria and elsewhere on the 250 area codes can join the same classes on the same Pacific clock.' },
      { h3: 'Parents welcome', p: 'Listen in on any lesson. Hearing how the teacher questions your child is the fairest test of us.' },
      { h3: 'Free first class', p: 'A real lesson that ends with a suggested course and level. We do not ask for a card.' }
    ],
    spec: { title: 'No Kelowna centre', p: 'Modern Age Coders has no premises in Kelowna and claims none. Teaching is live and online, from India.' }
  },

  fees: {
    h2: 'Fees for kids&rsquo; coding classes in Kelowna',
    intro: 'Three options, each with its currency code printed next to it.',
    first: 'A full live lesson at no charge, closing with a suggested level and course.',
    group: 'The monthly fee for a seat in a batch of 15 to 20 children at the same stage.',
    private: 'The monthly fee for one-to-one lessons at times you choose.',
    closer: 'Kelowna families pay what families pay everywhere in Canada. There is no charge until after the free lesson, and only once you have chosen a course and a time; holidays and missed lessons are covered on the pricing page.'
  },

  reviewsH2: 'Google reviews from parents and students',

  book: {
    h2: 'Book a free coding class for your Kelowna child',
    intro: 'Share your child&rsquo;s grade or age. A seven-year-old might animate a character with blocks; an eleven-year-old might turn 38KM into a number and find the slope.',
    success: 'Thank you. The team will be in touch soon about a class for your child in Kelowna.'
  },

  faq: {
    h2: 'Kelowna parents&rsquo; questions about kids&rsquo; coding',
    intro: 'What Kelowna families ask before a first class.',
    items: [
      { q: 'Do you have coding classes for kids in Kelowna?', a: 'Yes, live online. There is no Kelowna centre; your child joins from home and learns with a real teacher, either in a batch of 15 to 20 or one to one.' },
      { q: 'Is online coding suitable for a 6-year-old?', a: 'It can be, if lessons are short, live and full of talking and doing. Avoid long recorded videos for children this young.' },
      { q: 'What do BC schools teach about coding in elementary school?', a: 'In Grades 6 and 7 children take at least three ADST modules a year, chosen by the school. One option, Computational Thinking, includes visual programming such as Scratch and the history of programming languages.' },
      { q: 'Will class times change when other provinces change their clocks?', a: 'No. BC moved to permanent Pacific time, UTC-7, in 2026, so a Kelowna class time stays the same all year, while Ontario and Quebec still change on 1 November 2026.' },
      { q: 'When are classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every time is given in Pacific time.' },
      { q: 'When should my child move from Scratch to Python?', a: 'Usually when typing feels easy, which for many children is about age 9 or 10. The teacher watches for the signs and makes the move gradually.' },
      { q: 'Can my child enter a coding contest?', a: 'The Beaver Computing Challenge, run by CEMC, has levels for Grade 6 or below and Grade 8 or below, and needs no coding. Children write it through their school.' },
      { q: 'Do you teach robotics?', a: 'We teach the programming side, not robot hardware. BC high schools may offer Robotics 11, and our coding classes are good preparation for it.' },
      { q: 'How should I compare online classes?', a: 'Ask the six questions on this page: is it live, how big is the group, is it on Pacific time, how long are lessons, what will my child build, and what is the monthly fee.' },
      { q: 'What do the classes cost?', a: 'The fees section above lists a free first class and the monthly fees for a batch place and for one-to-one lessons. Nothing is charged before the free class.' }
    ]
  },

  next: {
    eyebrow: 'More for BC families',
    h2: 'Related pages for Kelowna and British Columbia',
    html: 'Province-wide, see <a class="cg-inline-link" href="/coding-classes-in-british-columbia">coding classes in British Columbia</a>; nationally, the <a class="cg-inline-link" href="/coding-classes-in-canada">Canada hub</a>. When your child reaches high school, read <a class="cg-inline-link" href="/computer-programming-11-and-12-bc">BC Computer Programming 11 and 12</a>. The <a class="cg-inline-link" href="/canada-time-zones-2026-online-class-times">2026 time zone guide</a> shows every province&rsquo;s clocks, and the <a class="cg-inline-link" href="/beaver-computing-challenge-guide">Beaver Computing Challenge guide</a> covers a first contest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Kelowna and BC',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-british-columbia', label: 'British Columbia' },
    { href: '/computer-programming-11-and-12-bc', label: 'BC Computer Programming 11 and 12' },
    { href: '/canada-time-zones-2026-online-class-times', label: 'Canada time zones 2026' },
    { href: '/beaver-computing-challenge-guide', label: 'Beaver Computing Challenge' }
  ],

  personalityCss: `
.cg-root.cg-bkik .cg-hero h1 { font-weight: 700; letter-spacing: -0.017em; line-height: 1.06; }
.cg-root.cg-bkik .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-bkik .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; text-transform: uppercase; font-size: 0.75rem; }
.cg-root.cg-bkik .cg-section-head h2 { max-width: 32ch; }
.cg-root.cg-bkik .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-bkik .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bkik #railtrail code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.55; padding: 0.85rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-bkik .cg-align-code { font-weight: 700; letter-spacing: 0.05em; }
.cg-root.cg-bkik .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.8rem; }
`,

  dossier: {
    curriculumAuthority: 'British Columbia, read 22 October 2026 from curriculum.gov.bc.ca and saved raw: ADST 6-7 Computational Thinking content (evolution of programming languages with historical examples; visual programming with Kodu and Scratch), the ADST course list (Computer Studies 10, Web Development 10, Computer Programming 11, Computer Information Systems 11, Robotics 11) and Computer Programming 11 content. BC Gov News 2026AG0013-000209 on Pacific time at UTC-7; East Kootenay and Golden on UTC-6 (tzdb 2026e comments via facts-geo.md). CEMC BCC levels; Kelowna CMA and the 250 overlay (CNAC via the Internet Archive).',
    localProject: 'City of Kelowna open data, Okanagan Rail Trail Kilometre Markers (Open Government Licence - City of Kelowna), JSON downloaded 22 October 2026 (2,961 bytes, 13 markers) and analysed with our script page_script.py (python -I): labels 38KM to 50KM; elevation 411.473 at km 38 to 345.182 at km 50, total drop 66.291, falling at every step (0.1 to 9.8 per km); straight-line neighbour gaps 961 to 1,016, implying metre coordinates (our reasoning). Labelled as ours. Lesson family: text to numbers, differences between neighbours, a units check.',
    requiredMentions: [
      'a total drop of 66.291 over twelve kilometres',
      'yet one gap is 1,016',
      'a label like 100KM would come before 38KM',
      'Open Government Licence - City of Kelowna',
      'from the Airport to the North End of Kelowna',
      'Kelowna, unlike East Kootenay and Golden',
      'Kelowna numbers use 250, with 778, 236, 672 and 257',
      'Kamloops, Nanaimo, Victoria and elsewhere on the 250',
      'Ada Lovelace, punch cards, Grace Hopper, Alan Turing and Enigma'
    ],
    sources: [
      { claim: 'BC curriculum, ADST 6-7 core: Computational Thinking content.', url: 'https://curriculum.gov.bc.ca/curriculum/adst/6/core' },
      { claim: 'BC curriculum, ADST course list (Grades 10 to 12).', url: 'https://curriculum.gov.bc.ca/curriculum/adst' },
      { claim: 'BC curriculum, Computer Programming 11 content.', url: 'https://curriculum.gov.bc.ca/curriculum/adst/11/computer-programming' },
      { claim: 'BC Gov News: Pacific time at UTC-7, last change 8 March 2026.', url: 'https://news.gov.bc.ca/releases/2026AG0013-000209' },
      { claim: 'City of Kelowna open data: Okanagan Rail Trail Kilometre Markers.', url: 'https://hub.arcgis.com/datasets/cf4cbc7b7b8b49f7a7395efded84f2be_10' },
      { claim: 'Open Government Licence - City of Kelowna (commercial use, attribution, information provider).', url: 'http://apps.kelowna.ca/images/opendata/opengovernmentlicence.pdf' },
      { claim: 'IANA tzdb northamerica: America/Vancouver on UTC-7; East Kootenay and Golden on UTC-6.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Kelowna population figure: StatCan was not reachable live.',
      'Which end of the trail is physically higher on the ground: refused; the answer is about the direction the kilometre labels count.',
      'The units of Elevation and of the coordinates as a stated fact: refused; metres are our reasoning from the marker gaps and the spatial reference.',
      'That every Kelowna child takes the Computational Thinking module: refused; schools choose modules.',
      'That we teach robotics hardware: refused; programming side only.',
      'Any ranking of Kelowna coding providers, or that Modern Age Coders is the best: refused.',
      'Any affiliation with the City of Kelowna, the Kelowna school district, the BC education ministry or CEMC.'
    ]
  }
};
