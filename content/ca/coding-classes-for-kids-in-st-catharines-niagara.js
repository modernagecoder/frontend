'use strict';
// St. Catharines and Niagara (cg- city page, Canada cluster Wave 2, row 158). Brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Angle: coding classes for kids aged 6 to 12 (slug coding-classes-for-kids-in-). Spine: the two ends of the Ontario coding
// ladder, Grade 1 (sequential events) and Grade 8 (analysis of data to inform decisions), framed as where a 12-year-old is
// heading; a share-of-parks against share-of-land project on City of Niagara Falls open data (Niagara Falls is a municipality
// in the St. Catharines - Niagara CMA; the St. Catharines parks layer carries no licence); and the Grade 7/8 level of the
// Beaver Computing Challenge.
// Sources, read raw on 22 October 2026. Curriculum facts from keyword-research-2026-09/ca/src/ontario/api-math-g1-strands.txt
// and api-math-g8-strands.txt (Ontario DCP content API; stray spaces before commas dropped) and facts-schools-contests.md:
//  - Grade 1 paraphrased only (Scarborough quotes Grade 1); Grade 8 C3.2 "read and alter existing code involving the analysis of
//    data in order to inform and communicate decisions, and describe how changes to the code affect the outcomes and the
//    efficiency of the code"; Grade 8 C3.1 "including
//    code that involves the analysis of data in order to inform and communicate decisions"; Grade 8 notes "Data can be
//    stored in lists, or input into a program, in order to find solutions to problems and make decisions." and "By
//    combining mathematical and coding concepts and skills, students can write programs to draw conclusions from data.";
//    suggested situation "use a sample of a schoolyard cleanup and apply an appropriate scale to make predictions about the
//    entire cleanup"; overall expectation C3 wording is the same in every grade from 1 to 8.
//  - EQAO Grade 3 and Grade 6 window "May 4 - June 8, 2027" (en dash in source).
//  - CEMC BCC: "Students in Grade 8 or below are eligible to participate in the Grade 7/8 BCC."; "15 multiple-choice questions
//    out of a total of 90 (Grade 7/8 and Grade 9/10)."; "Time allowed for completion is 45 minutes."; 2025 Grade 7/8
//    contestants 16 344, mean 68.93 out of 90 (table values, not summed); "Monday, November 9, 2026 to Friday, November 20,
//    2026"; "all students must participate through their school."
//  - Place facts (Niagara's own, 8+): StatCan 98-10-0003-01 (archive copy in ca/src/geo/statcan/98100003) lists Niagara Falls
//    (3526043), Fort Erie and Lincoln under the St. Catharines - Niagara CMA (member 888); St. Catharines is in the same CMA
//    (places.tsv); no populations printed; area codes 289, 365, 742, 905; City of Niagara Falls item "Niagara Falls
//    Community Parks and Trail Lands": "This data set details parks and green spaces for the City of Niagara Falls.";
//    "Open Data Quality Rating (Beta): 89.1/100" "(as of October 19, 2026)" with Completeness 82.4, Validity 88.2, Recency
//    92.3, Uniqueness 100.0, Understandability 90.8 (City scores, not averaged by us); item modified 19 October 2026 (our
//    conversion); licence "including for commercial purposes", attribution "Contains information licensed under the Open
//    Government Licence - Niagara Falls." (en dash in source), "based on version 1.0 of the Open Government Licence -
//    Ontario"; the City of St. Catharines "Parks Public" item has no licence information: not used. Eastern time, UTC-5 from
//    1 November 2026, UTC-4 from 14 March 2027 (IANA tzdb 2026e). No park names printed.
// Our own calculations (park_shares.py and page_script.py, python -I; outputs park_shares.out.txt, page_script.out.txt in
// ca/src-pilots/coding-classes-for-kids-in-st-catharines-niagara/): 109 parks, 441.61 ha of land in the file; NEIGHBOURHOOD 61
// parks (56.0%), 91.29 ha (20.7%); CITY WIDE 26 (23.9%), 220.68 ha (50.0%); COMMUNITY 22 (20.2%), 129.64 ha (29.4%); rounded
// park shares add to 100.1, rounded land shares add to 100.1; owner column City 101, another owner 6, blank 2; FeatType
// DEDICATED PARK 90, DEDICATED TRAIL 15, NON-DEVELOPED 3, DOG PARK 1; 35 parks under 1 ha. India time conversions ours.
// Lesson family: two percentages from the same groups (share of count against share of total size), and why rounded
// shares add to 100.1.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import csv',
  '',
  'parks = {}',
  'land = {}',
  'with open("niagara-falls-parks.csv", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f):',
  '        kind = row["Type"]',
  '        parks[kind] = parks.get(kind, 0) + 1',
  '        land[kind] = land.get(kind, 0) + float(row["Area_HA"])',
  '',
  'total_parks = sum(parks.values())',
  'total_land = sum(land.values())',
  'for kind in parks:',
  '    print(kind, round(100 * parks[kind] / total_parks, 1), "% of parks,",',
  '          round(100 * land[kind] / total_land, 1), "% of land")'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'ST. CATHARINES - NIAGARA', label: 'St. Catharines and Niagara', blurb: 'Coding for St. Catharines and Niagara children aged 6 to 12: the Ontario coding ladder from Grade 1 to Grade 8, a Niagara Falls parks data project, and the Beaver contest.' },
  market: CA,
  slug: 'coding-classes-for-kids-in-st-catharines-niagara',
  code: 'kscn',
  accent: '#2B3866',
  accentRationale: 'St. Catharines and Niagara kids page: a deep slate blue, #2B3866, allocated to this row by the Canada group so it keeps 6 RGB units from every site accent and 14 from other Canada accents; contrast 10.65 on the paper #FBF8F2, 10.01 on #F5F1E8 and 9.16 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'St. Catharines and Niagara',
    eyebrow: 'St. Catharines and the Niagara Region, Ontario',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Ontario' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-canada', name: 'Canada' },
    { slug: 'coding-classes-in-ontario', name: 'Ontario' }
  ],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Ontario', href: '/coding-classes-in-ontario' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'St. Catharines and Niagara',
  title: 'Coding Classes for Kids in St. Catharines and Niagara | 6 to 12',
  description: 'Live online coding for kids aged 6 to 12 in St. Catharines and Niagara: Ontario coding from Grade 1 to 8, a Niagara Falls parks project, and a free first class.',
  ogDescription: 'Ontario coding runs from simple sequences in Grade 1 to data decisions in Grade 8. See the path for Niagara children, a parks project on Niagara Falls data, and our classes.',
  twitterDescription: 'Live coding for children aged 6 to 12 in St. Catharines and across Niagara, built on the Ontario path.',
  ogImageCourse: 'kids-coding-blocks-masterclass',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for St. Catharines and Niagara Children Aged 6 to 12',
    description: 'Live online coding for children in St. Catharines and the Niagara area from Grade 1 to Grade 7: block coding and games, web pages, then Python with a City of Niagara Falls data file, taught in English in a batch of fifteen to twenty or one to one.'
  },

  h1: 'Coding classes for kids in St. Catharines and Niagara',
  capsuleQ: 'Can children in St. Catharines or elsewhere in Niagara, aged 6 to 12, learn coding live?',
  capsule: 'Yes, online with Modern Age Coders. Niagara kids between 6 and 12 log in from home to a real-time lesson, with a tutor of their own or among fifteen to twenty peers. Coding for Kids and Game Development for Kids are typical first steps; from about 9, Python and AI for Kids or Web Development for Kids. The first class is free.',
  lead: 'Ontario&rsquo;s coding path is eight years long, and it is worth seeing the whole of it. In Grade 1 a child in St. Catharines, Welland or Niagara Falls writes code that does one thing after another. By Grade 8 the same child is expected to write code that analyses data and supports a decision. Between the two lie loops, decisions, efficiency and functions. Our classes walk children up that path at their own speed, so that by 12 the Grade 8 idea is in reach. Below we set out both ends of the ladder in the ministry&rsquo;s words, a data project on the City of Niagara Falls&rsquo; parks file that a Grade 6 or 7 child can finish, the Grade 7/8 level of the Beaver Computing Challenge, and how live classes fit a Niagara family&rsquo;s week.',
  wa: 'Hello Modern Age Coders, I would like a free coding class for my child in St. Catharines or Niagara.',

  picks: {
    eyebrow: 'Courses for Niagara children',
    h2: 'Four first courses for St. Catharines and Niagara children',
    intro: 'Each fits a different age and personality; the free class confirms which.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'The broad first course for Grade 1 onward: sequences, Scratch games, a little app building and a first look at AI, in age-matched groups.' },
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'Games in Scratch, Roblox and Minecraft, each planned on paper first, so children learn to design rules rather than copy them.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Typed Python, from turtle art to real data such as the Niagara Falls parks file, the first taste of Grade 8 style data work.' },
      { course: 'kids-ai-web-development-course', band: 'Ages 8 to 12', note: 'Hand-built web pages with headings, images and colour, a good place to publish a chart or a project for the family to see.' }
    ]
  },

  sections: [
    {
      id: 'ladder18', tint: '', eyebrow: 'Coding at school in Niagara',
      h2: 'From Grade 1 to Grade 8: both ends of the Ontario coding ladder for Niagara children',
      intro: 'Schools in St. Catharines and across Niagara teach the Ontario curriculum. The overall coding expectation, C3, uses the same words in every grade from 1 to 8; what changes is the detail. Below, the Grade 1 and Grade 8 wording as the ministry&rsquo;s site gave it on 22 October 2026, each paired with what happens in our lessons.',
      body: [
        { kind: 'align', rows: [
          { code: 'Grade 1, in brief', req: 'The first rung (our summary, not the ministry&rsquo;s wording): children write and run short programs whose steps happen one after another.', ours: 'Six-year-olds program a partner first: two steps forward, turn, clap. Then the same steps as blocks. Order matters, and they find that out by getting it wrong.' },
          { code: 'Grade 8, C3.2', req: 'Children &ldquo;read and alter existing code involving the analysis of data in order to inform and communicate decisions, and describe how changes to the code affect the outcomes and the efficiency of the code&rdquo;.', ours: 'Reading someone else&rsquo;s data program is a skill of its own. We hand twelve-year-olds a working script, change one line together, and ask how the answer, and the decision it supports, would shift.' },
          { code: 'Grade 8, C3.1', req: 'Code &ldquo;that involves the analysis of data in order to inform and communicate decisions&rdquo;.', ours: 'The top of the ladder. A twelve-year-old who has worked with real files is ready for it: read data, summarise it, and say what it means.' },
          { code: 'Grade 8, notes', req: '&ldquo;Data can be stored in lists, or input into a program, in order to find solutions to problems and make decisions.&rdquo;', ours: 'Lists come first in our Python course for exactly this reason. Once a child can loop over a list, any file becomes a list of rows.' },
          { code: 'Grade 8, notes', req: '&ldquo;By combining mathematical and coding concepts and skills, students can write programs to draw conclusions from data.&rdquo;', ours: 'Drawing conclusions is the hard part, and it is not coding. Our parks project ends with children writing one honest sentence about what the numbers show.' }
        ] },
        { kind: 'p', text: 'One Grade 8 example in the ministry&rsquo;s notes is pleasingly practical: &ldquo;use a sample of a schoolyard cleanup and apply an appropriate scale to make predictions about the entire cleanup&rdquo;. It is proportional reasoning done by a program, and it is the same skill as turning counts into percentages, which is what the Niagara Falls project below asks for. Between Grades 1 and 8 the ladder adds repeating events, nested events, conditions, efficiency and sub-programs; our <a class="cg-inline-link" href="/ontario-coding-curriculum-grades-1-to-8">Ontario coding guide for Grades 1 to 8</a> quotes each rung.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Assessment checkpoints', p: 'Province-wide EQAO tests fall in Grade 3 and again in Grade 6; for the 2026 to 2027 year EQAO has set a 4 May to 8 June 2027 window. We teach coding, not test tactics.' },
          { h3: 'Ages 6 to 12, Grades 1 to 7', p: 'Our kids classes cover the first seven rungs. Grade 8 is where children who have climbed steadily arrive ready, rather than meeting data analysis cold.' },
          { h3: 'Same words every year', p: 'C3 asks children each year to solve problems and create computational representations using coding. A child who keeps coding between school years never has to start again.' }
        ] },
        { kind: 'callout', h3: 'Who we are', p: 'Modern Age Coders is a live online teaching team that works alongside school. We set no school marks and are not connected with the Ontario Ministry of Education, EQAO, any Niagara school board, the City of St. Catharines or the City of Niagara Falls.' }
      ]
    },
    {
      id: 'parkshares', tint: 'deep', eyebrow: 'Niagara data project',
      h2: 'Most parks, or most land? Two kinds of percentage from the City of Niagara Falls parks file',
      intro: 'We looked for parks data across the St. Catharines - Niagara census metropolitan area. The City of St. Catharines publishes a parks layer, but its record carries no licence, so we did not use it. The City of Niagara Falls, a municipality in the same metropolitan area, publishes its parks under an open government licence. So the numbers here describe Niagara Falls only, and we worked them out ourselves from the copy we downloaded on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'City of Niagara Falls Community Parks and Trail Lands: our calculation of each park type&rsquo;s share of the 109 parks and of the 441.61 hectares in the file', head: ['Type', 'Parks', 'Share of parks', 'Hectares', 'Share of land'], rows: [
          ['NEIGHBOURHOOD', '61', '56.0%', '91.29', '20.7%'],
          ['CITY WIDE', '26', '23.9%', '220.68', '50.0%'],
          ['COMMUNITY', '22', '20.2%', '129.64', '29.4%']
        ] },
        { kind: 'p', text: 'Neighbourhood parks are more than half of all the parks but only about a fifth of the land. City-wide parks are under a quarter of the parks yet half the land. Both statements are true at once, and which one you quote depends on the question you were asked. Both shares come out of one short Python program, which twelve-year-olds in our classes write themselves:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Two dictionaries, one loop', p: 'parks counts each type; land adds up each type&rsquo;s hectares. Both fill in the same pass through the file, and the totals come from adding each dictionary&rsquo;s values.' },
          { h3: 'Share means divide', p: 'A share is part divided by whole, times 100. The same type gets two different shares because the whole is different: 109 parks in one case, 441.61 hectares in the other.' },
          { h3: 'A decision to inform', p: 'This is the Grade 8 idea in small. If a town wanted more parks within walking distance, which share matters? If it wanted room for sports fields? Children argue it out, using the numbers.' }
        ] },
        { kind: 'callout', h3: 'Why the shares add up to 100.1', p: 'Add the rounded park shares: 56.0 + 23.9 + 20.2 = 100.1. The land shares, 20.7 + 50.0 + 29.4, also make 100.1. Nothing is wrong. Each share was rounded to one decimal place on its own, and the small rounding gains happened to pile up. Unrounded, they make exactly 100. Children who meet this once stop being alarmed when a newspaper chart adds to 99 or 101.' },
        { kind: 'p', text: 'The City scores its own file, too. The dataset description shows an &ldquo;Open Data Quality Rating (Beta): 89.1/100&rdquo; as of 19 October 2026, with separate scores for Completeness (82.4), Validity (88.2), Recency (92.3), Uniqueness (100.0) and Understandability (90.8). A class can discuss what each word means for a data user; we do not average the scores ourselves. In our download, 90 records are dedicated parks, 15 dedicated trails, 3 non-developed and 1 a dog park, and 35 parks are under one hectare. We print no park names, since several honour people. Contains information licensed under the Open Government Licence - Niagara Falls (<a class="cg-inline-link" href="https://open.niagarafalls.ca/pages/terms-of-use">terms of use</a>). The City does not endorse this page.' }
      ]
    },
    {
      id: 'beaver78', tint: 'tint', eyebrow: 'A contest for the older end',
      h2: 'The Grade 7/8 Beaver Computing Challenge: a next step for Niagara children who are 12',
      intro: 'CEMC at the University of Waterloo runs the Beaver Computing Challenge (BCC) at three levels. The middle one suits our oldest students. Details are CEMC&rsquo;s, as published on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Beaver Computing Challenge, Grade 7/8 level, 2026, as published by CEMC', head: ['Item', 'CEMC detail'], rows: [
          ['Eligibility', 'Students in Grade 8 or below'],
          ['Format', '15 multiple-choice questions, out of a total of 90'],
          ['Time', '45 minutes'],
          ['2026 window (North and South America)', 'Monday 9 November to Friday 20 November 2026'],
          ['2025 participation at this level', '16 344 contestants, mean score 68.93 out of 90']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A level up', p: 'Grade 7/8 has more questions and a higher total than the Grade 5/6 level. A strong Grade 6 child can try it, since eligibility is Grade 8 or below.' },
          { h3: 'Through the school', p: 'All students must participate through their school, CEMC says. A family in St. Catharines or Niagara Falls cannot enter a child directly, so the teacher is the first stop.' },
          { h3: 'Data thinking helps', p: 'Many BCC puzzles hand you a small table or rule and ask what follows. Children who have turned a file into percentages read those puzzles calmly.' }
        ] },
        { kind: 'p', text: 'We do not copy CEMC questions. We write practice puzzles of our own, label them, and send families to CEMC&rsquo;s free archive for the real ones. One of ours: a town has 10 parks, 6 small and 4 large; the small ones cover 12 hectares in all and the large ones 48. What share of the parks is small, and what share of the land? Then: why are the two answers so different? The <a class="cg-inline-link" href="/beaver-computing-challenge-guide">Beaver Computing Challenge guide</a> covers every level, and the <a class="cg-inline-link" href="/gauss-contest-preparation">Gauss page</a> covers the Grade 7 and 8 math contest. CEMC and the University of Waterloo have no part in our classes.' }
      ]
    },
    {
      id: 'niagaratime', tint: '', eyebrow: 'Class times',
      h2: 'Niagara class times, the November clock change, and India time',
      intro: 'Niagara runs on Eastern time, so its clocks go back on 1 November 2026 and ahead on 14 March 2027; India&rsquo;s do not move. With IANA offsets (2026e), two typical slots work out like this by our arithmetic:',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Weekday, 4:45 pm', p: 'For our teachers that is 2:15 am the next morning while Niagara is on UTC-4, and 3:15 am during the UTC-5 winter stretch from 1 November 2026 to 14 March 2027.' },
          { h3: 'Sunday, 9:30 am', p: 'Over in India it is 7:00 pm that Sunday in the summer months and 8:00 pm in winter, a comfortable hour for both sides.' },
          { h3: 'Phone numbers', p: 'Across Niagara, numbers begin with 905 or one of its overlay codes, 289, 365 and 742. Leave the +1 as it is and add the ten digits.' }
        ] },
        { kind: 'p', text: 'Invitations to Niagara homes always state Eastern time, and a confirmation goes out ahead of each clock change. The full Canadian picture, including provinces that no longer change their clocks, is on <a class="cg-inline-link" href="/canada-time-zones-2026-online-class-times">Canada time zones in 2026</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From first sequences at 6 to data decisions by 12',
    intro: 'Treat these ages loosely. Where a child starts depends on the free class, not the birthday.',
    cols: [
      { band: 'Ages 6 and 7', h3: 'One step, then the next', p: 'Sequences with blocks and unplugged games, the Grade 1 idea, said aloud before each run.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 8 and 9', h3: 'Games with rules', p: 'Loops, scores and decisions in games the child designs, planned on paper first.', courses: ['game-development-masterclass-for-kids', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 and 11', h3: 'Lists and pages', p: 'Python lists and loops, simple web pages, and the Niagara Falls parks percentages.', courses: ['python-ai-kids-masterclass', 'kids-ai-web-development-course'] },
      { band: 'Age 12', h3: 'Ready for Grade 8', p: 'Summaries, charts and short written conclusions from data, plus a teacher-led look at how AI learns.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why should a Niagara child learn to code when AI can do it?',
    intro: 'Because deciding what a number means is still a person&rsquo;s job.',
    p1: 'An AI tool could produce the parks table in seconds. It could also write either headline, that most Niagara Falls parks are neighbourhood parks or that most park land is city-wide, without saying that both are true. A child who has calculated both shares knows that the choice of percentage is a choice of story, and knows to ask which one is being told.',
    p2: 'Under-13s in our classes do not use adult chatbots. Their teacher shows them how AI learns from examples, and where it slips, through hands-on activities. Most of every lesson is their own reasoning: setting out the steps, trying them, checking the result against common sense.',
    closer: 'Ontario ends its elementary coding path with using data to inform decisions, and that is precisely the part of the work that stays human.',
    blogAnchor: 'why coding is still worth learning'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online classes for St. Catharines and all of Niagara',
    intro: 'A child in St. Catharines, one in Welland and one in Niagara Falls can share the same live class from home, with no drive along the QEW after school.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Class or one to one', p: 'Learn among fifteen to twenty same-level children, or book a private tutor when a child needs more help or more challenge.' },
      { h3: 'Matched groups', p: 'We sort children by age and level so the pace fits everyone in the room, and move them up when they are ready.' },
      { h3: 'Parents can watch', p: 'Families are welcome to sit with younger children, and teachers send a short note on progress after each stage.' },
      { h3: 'What to have', p: 'A laptop or desktop with a keyboard and mouse, sound and a stable connection. Typed code is hard on a tablet.' },
      { h3: 'Free to start', p: 'Lesson one costs nothing and is taught in full; at the end the teacher recommends where your child should begin. Card details are never requested for it.' }
    ],
    spec: { title: 'No Niagara centre', p: 'Modern Age Coders has no classroom in St. Catharines, Niagara Falls or anywhere in the Niagara Region, and claims none. All classes are live online, taught from India by the teachers who also teach families in other countries.' }
  },

  fees: {
    h2: 'Coding class fees for St. Catharines and Niagara children',
    intro: 'Three options; the currency appears beside every fee.',
    first: 'A full live lesson, free of charge, ending with our advice on a course, a level and a time.',
    group: 'The monthly fee for a seat in a class of fifteen to twenty children at one stage.',
    private: 'The monthly fee for one-to-one lessons with a teacher, on days and times you choose.',
    closer: 'Niagara families pay what families pay across Canada. The free lesson comes before any charge, and billing starts only when you pick a course and a slot; missed lessons and holidays are covered on the pricing page.'
  },

  reviewsH2: 'What Google reviewers say about our teaching',

  book: {
    h2: 'Book a free class for your Niagara child',
    intro: 'Mention your child&rsquo;s age and one thing they love, and we will pick a first task. A six-year-old might begin with a step-by-step dance, a nine-year-old with a simple game, and a twelve-year-old with the Niagara Falls parks file.',
    success: 'Thank you. The team will contact you soon about a class for your child in St. Catharines or Niagara.'
  },

  faq: {
    h2: 'Questions from St. Catharines and Niagara parents',
    intro: 'What Niagara families ask us most often.',
    items: [
      { q: 'Are there coding classes for kids in St. Catharines and Niagara?', a: 'Yes. Everything is taught live on the internet, so a child anywhere in Niagara joins from home, privately or in a class of fifteen to twenty, with no centre involved.' },
      { q: 'What does Ontario expect children to code by Grade 8?', a: 'Grade 8 math asks for code that analyses data to inform and communicate decisions. It is the last step of a ladder that starts with simple sequences in Grade 1.' },
      { q: 'What does a Grade 1 child code?', a: 'Short sequences: one instruction after another, in the right order. In Grade 1 math, Ontario children write and run little programs like that and see what happens when the order changes.' },
      { q: 'Why is the data project about Niagara Falls and not St. Catharines?', a: 'The St. Catharines parks layer we found has no licence information, so we did not use it. The City of Niagara Falls, in the same metropolitan area, publishes its parks under an open government licence.' },
      { q: 'At what age can my child start?', a: 'From 6, about Grade 1. Our kids classes run to age 12, and older children continue in our teen courses.' },
      { q: 'When are classes for Niagara families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. All times are in Eastern time.' },
      { q: 'Can my 12-year-old enter a computing contest?', a: 'Yes, through school. The Grade 7/8 level of the Beaver Computing Challenge is open to students in Grade 8 or below, and CEMC runs it from 9 to 20 November 2026.' },
      { q: 'Will my child use ChatGPT?', a: 'No. Adult chatbots are not part of our lessons for anyone under 13, and ChatGPT itself asks under-18s for a parent\'s permission. What younger learners get instead is hands-on AI activities run by the teacher.' },
      { q: 'Does my child need to type?', a: 'Not to begin. Younger children drag blocks; typing comes when they move to Python, around 9 or 10.' },
      { q: 'How do I see the fees?', a: 'Scroll to the fees section, which shows the free first class and the two monthly options, group and private, each with its currency. Nothing is charged before the free class.' }
    ]
  },

  next: {
    eyebrow: 'More for Ontario families',
    h2: 'Related pages for St. Catharines and Niagara families',
    html: 'For the province, see <a class="cg-inline-link" href="/coding-classes-in-ontario">coding classes in Ontario</a>; for the whole country, <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>. Families with a child in Grade 3 or Grade 6 may want <a class="cg-inline-link" href="/eqao-grade-3-math-practice">EQAO Grade 3 practice</a> or <a class="cg-inline-link" href="/eqao-grade-6-math-practice">EQAO Grade 6 practice</a>, and the <a class="cg-inline-link" href="/canada-math-and-coding-contest-calendar">Canada contest calendar</a> lists the year&rsquo;s contests.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Niagara and Ontario',
  footerPlaces: [
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/ontario-coding-curriculum-grades-1-to-8', label: 'Ontario coding, Grades 1 to 8' },
    { href: '/beaver-computing-challenge-guide', label: 'Beaver Computing Challenge' },
    { href: '/canada-time-zones-2026-online-class-times', label: 'Canada time zones 2026' }
  ],

  personalityCss: `
.cg-root.cg-kscn .cg-hero-grid { align-items: center; gap: clamp(1rem, 2.9vw, 2.2rem); }
.cg-root.cg-kscn .cg-hero h1 { font-weight: 660; letter-spacing: -0.01em; line-height: 1.11; }
.cg-root.cg-kscn .cg-capsule { border-bottom: 3px solid var(--cg-accent); border-top: 1px solid var(--cg-accent); padding-block: 0.75rem; }
.cg-root.cg-kscn .cg-eyebrow { letter-spacing: 0.1em; font-weight: 650; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-kscn .cg-section-head h2 { max-width: 34ch; }
.cg-root.cg-kscn .cg-align-code { font-weight: 720; letter-spacing: 0.02em; }
.cg-root.cg-kscn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-kscn #parkshares code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.78rem; line-height: 1.5; padding: 0.9rem 1rem; border-bottom: 3px solid var(--cg-accent); border-left: 1px solid var(--cg-accent); }
.cg-root.cg-kscn .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.65rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API and saved raw: Elementary Mathematics (2020) Grade 1 (paraphrased) and Grade 8 C3.1 and C3.2 (analysis of data to inform and communicate decisions), the Grade 8 notes on storing data in lists and drawing conclusions from data, and the schoolyard-cleanup proportional reasoning example. EQAO Grade 3 and 6 window 4 May to 8 June 2027. CEMC Beaver Computing Challenge Grade 7/8 level (Grade 8 or below, 15 questions out of 90, 45 minutes, 2026 dates, 2025 participation and mean, through a school). CMA membership of Niagara Falls from StatCan 98-10-0003-01 (Internet Archive copy); area codes and Eastern offsets from facts-geo.md.',
    localProject: 'City of Niagara Falls Open Data, Niagara Falls Community Parks and Trail Lands (Open Government Licence - Niagara Falls, commercial use allowed), downloaded with curl on 22 October 2026 and analysed with our scripts park_shares.py and page_script.py (python -I): 109 parks and 441.61 hectares; neighbourhood parks 56.0% of parks but 20.7% of land; city-wide parks 23.9% of parks but 50.0% of land; community parks 20.2% and 29.4%; both sets of rounded shares add to 100.1; 35 parks under one hectare; the City&rsquo;s own quality rating 89.1/100. Niagara Falls is a municipality in the St. Catharines - Niagara CMA; the St. Catharines layer has no licence. Labelled as ours. Lesson family: share of count against share of size, and rounding that adds to 100.1.',
    requiredMentions: [
      'Data can be stored in lists, or input into a program',
      'the choice of percentage is a choice of story',
      'use a sample of a schoolyard cleanup',
      'Neighbourhood parks are more than half of all the parks but only about a fifth of the land',
      '56.0 + 23.9 + 20.2 = 100.1',
      'Open Data Quality Rating (Beta): 89.1/100',
      'its record carries no licence, so we did not use it',
      '16 344 contestants, mean score 68.93 out of 90',
      'the small ones cover 12 hectares in all',
      '35 parks are under one hectare'
    ],
    sources: [
      { claim: 'Ontario curriculum content API: Grade 1 math strands, C3 coding expectations.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_1___strands?depth=4' },
      { claim: 'Ontario curriculum content API: Grade 8 math strands, C3 coding expectations and data notes.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items/ele___math___grade_8___strands?depth=4' },
      { claim: 'EQAO: 2026-27 Grade 3 and Grade 6 assessment window.', url: 'https://www.eqao.com/the-assessments/' },
      { claim: 'CEMC Beaver Computing Challenge: Grade 7/8 level, 2026 dates, 2025 results.', url: 'https://cemc.uwaterloo.ca/contests/bcc' },
      { claim: 'CEMC: all students participate through their school.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'City of Niagara Falls: Community Parks and Trail Lands item (description, quality rating).', url: 'https://www.arcgis.com/sharing/rest/content/items/768454489e19403abeeb1a869eb88b37?f=json' },
      { claim: 'City of Niagara Falls: parks CSV download.', url: 'https://open.niagarafalls.ca/api/download/v1/items/768454489e19403abeeb1a869eb88b37/csv?layers=1' },
      { claim: 'City of Niagara Falls open data terms of use: Open Government Licence - Niagara Falls.', url: 'https://open.niagarafalls.ca/pages/terms-of-use' },
      { claim: 'Statistics Canada 98-10-0003-01: CMA, CA and CSD membership (Niagara Falls under St. Catharines - Niagara).', url: 'https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=9810000301' },
      { claim: 'IANA tzdb northamerica: America/Toronto offsets and the 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any St. Catharines, Niagara Falls or Niagara population figure: StatCan was not reachable live, so none is printed.',
      'A St. Catharines data project: the City of St. Catharines parks item has no licence information, and niagaraopendata.ca returned 403 earlier, so neither is used.',
      'That the Niagara Falls figures describe St. Catharines or the whole region: rejected; the page says plainly they are Niagara Falls data.',
      'Park names and the owner column detail: left out (names honour people; owner values name organisations).',
      'An average of the City quality scores: not computed; the scores are quoted as the City publishes them.',
      'A combined BCC participation figure across levels: not computed; the Grade 7/8 row is quoted on its own.',
      'CEMC fees: left out on purpose (currency-neutral page).',
      'Names of Niagara schools, school boards or private people: not used.',
      'Any affiliation with the City of St. Catharines, the City of Niagara Falls, the Ontario Ministry of Education, EQAO, CEMC or the University of Waterloo.'
    ]
  }
};
