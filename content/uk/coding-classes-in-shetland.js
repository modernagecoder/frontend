'use strict';
// Shetland Islands (cg- council area page, UK cluster Phase 7, row 278). One council. Spine: why do maps still count in
// sixties, and what goes wrong when a program converts? Anchor (read raw 26 September 2026): Met Office historic station
// data, Lerwick: "Location: 445300E 1139700N, Lat 60.139 Lon -1.183, 82 metres amsl"; monthly records from December 1930.
// Our model (scratchpad shl/dms.py): 60.139 = 60 deg 08 min 20.4 s; 1.183 = 1 deg 10 min 58.8 s. Naive conversion (split
// then round seconds): 59.99999 -> 59 deg 59 min 60.0 s; safe (round once in seconds, then divmod) -> 60 deg 00 min 00.0 s.
// Naive prints 60.0 seconds for 828 of 1,000,000 values between 60 and 61 degrees (one decimal), 8,328 when rounding to
// whole seconds. 60.139 is stored as 60.13900000000000289901; (60.139 - 60) x 60 = 8.340000000000174. Sphere R 6371.0 km:
// a degree of longitude is 111.2 km at the equator, 69.2 at 51.5 N, 62.3 at 55.9 N, 55.4 at 60.139 N, 38.0 at 70 N; a
// minute of latitude 1.853 km. Grid 445300E 1139700N by OS inverse transverse Mercator (Airy, OSGB36): 60.1398, -1.1843;
// about 94 m north-south and 72 m east-west from the file's rounded 60.139, -1.183 (three decimals of latitude span about
// 111 m, so rounding alone can explain gaps of that size; no datum claim).
// Lesson family: sexagesimal angles, carry and rounding, floating point, longitude scale with latitude; screened
// (sexagesimal, degrees minutes seconds, arcminute: 0 hits; nautical mile appears once in Howth only as a unit).
// Place facts: NRS, Scotland's Census 2022 rounded estimates: Shetland Islands S12000027 22,900; 10,600 households; 15.6
// per square kilometre; 0 to 14 3,800 (16.6 per cent), 65+ 5,000 (21.8 per cent) by our addition. NRS mid-2020
// localities: Lerwick 6,760; Scalloway 1,170; Brae 750. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'SHETLAND ISLANDS', blurb: 'Lerwick, Scalloway, Brae and the isles, and a lesson at 60 degrees north on why maps still count in sixties.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-shetland',
  code: 'zet',
  accent: '#0B4C4C',
  accentRationale: 'Shetland: a deep voe teal from the solver (7.86:1 on the darkest paper tint), darker and greener than the Orkney slate and the East Lothian teal',
  pageType: 'governorate',
  place: {
    name: 'Shetland Islands',
    eyebrow: 'Shetland Islands',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Scotland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Orkney', href: '/coding-classes-in-orkney' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Shetland',
  title: 'Coding Classes in the Shetland Islands | Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across the Shetland Islands, from Lerwick, Scalloway and Brae to Whalsay, Bressay, Unst, Yell and Fair Isle.',
  ogDescription: 'Coding classes for all of Shetland, and a Lerwick project: turn 60.139 degrees into degrees, minutes and seconds in Python and catch the bug that prints 60 seconds.',
  twitterDescription: 'Shetland coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for the Shetland Islands',
    description: 'Ability-placed online coding, Python, navigation maths and mathematics for children, teenagers and adults across the Shetland Islands, taught live in English.'
  },

  h1: 'Coding classes in the Shetland Islands',
  capsuleQ: 'What are the best coding classes in Shetland?',
  capsule: 'The Shetland Islands council area had about 22,900 residents in roughly 10,600 households at the 2022 census, at 15.6 people per square kilometre. Lerwick is the main town, Scalloway and Brae are the only other settlements NRS lists as localities, and many islanders live in smaller places on the Mainland of Shetland and on isles such as Whalsay, Bressay, Yell and Unst. Our lessons are taught live on video from India, so an island postcode changes nothing, and a free first lesson finds each learner\'s stage, from P1 to S6 or adult. Anyone aged 6 to 67 can learn coding, Python and maths in a group of five to ten or one-to-one. The Shetland project starts with Lerwick\'s latitude. Continuing costs USD 100 a month in a group, or USD 150 a month with a teacher of your own.',
  lead: 'The Met Office weather station at Lerwick has kept monthly records since 1930, and its data file gives the station\'s position in a single line: latitude 60.139, longitude -1.183. Sailors, pilots and many map apps would write the same place as 60 degrees, 8 minutes and 20.4 seconds north, counting in sixties the way people have done for thousands of years. Converting between the two looks like simple arithmetic, yet a first attempt at the code usually contains a bug that prints impossible times such as 59 degrees, 59 minutes and 60 seconds. This page\'s project writes the converter in Python, finds that bug, and discovers why a degree of longitude in Shetland is only half as long as one at the equator.',
  wa: 'Hello Modern Age Coders, we are in Shetland and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Shetland',
    h2: 'Where Shetland learners begin',
    intro: 'A P3 in Lerwick who loves maps, a P6 in Scalloway ready for real code, an S4 on Whalsay working towards National 5, and an adult in Brae who needs spreadsheets to behave. Every one of them starts with a free trial.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with compass directions, clocks and treasure-map games.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Angles, time and conversions between units, worked out in code.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Secondary maths in depth, from trigonometry to the geometry of the Earth.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python for adults from zero, including clean handling of numbers and units.' }
    ]
  },

  sections: [
    {
      id: 'shetland', tint: '', eyebrow: 'Shetland in figures',
      h2: 'About 22,900 people at 60 degrees north',
      intro: 'The islands-wide totals are rounded first results from the 2022 census by National Records of Scotland. Settlement sizes are separate NRS estimates for mid-2020.',
      body: [
        { kind: 'table', caption: 'Shetland localities, NRS mid-2020 estimates', head: ['Locality', 'Residents'], rows: [
          ['Lerwick', '6,760'],
          ['Scalloway', '1,170'],
          ['Brae', '750']
        ] },
        { kind: 'p', text: 'Shetland has 15.6 residents per square kilometre, under a quarter of the Scottish 69.8. Our sums of the census age bands give 16.6 per cent of islanders under 15, above Scotland\'s 15.3, and 21.8 per cent aged 65 or over, against 20.1. Shetland Islands Council sets school terms; we have not looked them up, so each family tells us its own holidays.' },
        { kind: 'callout', h3: 'Other island pages and exams', p: 'See <a class="cg-inline-link" href="/coding-classes-in-orkney">Orkney</a> and <a class="cg-inline-link" href="/coding-classes-in-na-h-eileanan-siar">the Western Isles</a>. For qualifications: <a class="cg-inline-link" href="/higher-maths-tuition-online">Higher Maths</a> and <a class="cg-inline-link" href="/national-5-computing-science-help">National 5 Computing Science</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Shetland project',
      h2: 'Sixty minutes, sixty seconds, one sneaky carry',
      intro: 'Base 60 for angles, and the bug hidden in the last digit.',
      body: [
        { kind: 'p', text: 'A degree splits into 60 minutes and a minute into 60 seconds, exactly like hours on a clock. To convert 60.139 degrees, keep the whole 60, multiply the leftover 0.139 by 60 to get 8.34 minutes, keep the 8, and multiply the leftover 0.34 by 60 to get 20.4 seconds. So Lerwick\'s station sits at 60 degrees, 8 minutes, 20.4 seconds north, and its longitude of 1.183 degrees becomes 1 degree, 10 minutes, 58.8 seconds west. The learner codes those steps in Python in a few lines and they seem to work.' },
        { kind: 'table', caption: 'Our degrees, minutes and seconds converter, 26 September 2026', head: ['Input', 'Step-by-step then round', 'Round once, then split'], rows: [
          ['60.139', '60 deg 8 min 20.4 s', '60 deg 8 min 20.4 s'],
          ['1.183', '1 deg 10 min 58.8 s', '1 deg 10 min 58.8 s'],
          ['59.99999', '59 deg 59 min 60.0 s', '60 deg 0 min 0.0 s'],
          ['A million values from 60 to 61 degrees', '828 print 60.0 seconds', 'None']
        ] },
        { kind: 'p', text: 'The bug appears when the seconds round up to 60. Rounding 59.964 seconds to one decimal gives 60.0, but by then the program has already fixed the minutes, so nothing carries over. Among a million evenly spaced values between 60 and 61 degrees, the step-by-step method prints an impossible 60.0 seconds 828 times, and 8,328 times if it rounds to whole seconds. The cure is to convert everything to seconds first, round once, and only then split into degrees, minutes and seconds with whole-number division. The learner also meets a quieter surprise: the computer stores 60.139 as 60.139000000000002899, so 0.139 times 60 comes out as 8.340000000000174, a reminder that decimals in binary are rarely exact.' },
        { kind: 'p', text: 'Next, distance. Lines of latitude are evenly spaced, so a minute of latitude is always about 1.85 kilometres, roughly a nautical mile. Lines of longitude squeeze together towards the pole. On a spherical Earth, a degree of longitude is 111.2 kilometres at the equator but only 55.4 km at Lerwick, because the cosine of 60 degrees is one half. Finally the learner converts the file\'s own grid reference, 445300 east and 1139700 north, into latitude and longitude with the Ordnance Survey\'s published formulas, and lands about 94 metres from the stated 60.139, which is inside the rounding: a third decimal place of latitude spans about 111 metres.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Convert minutes to hours and seconds to minutes in a Scratch quiz, then try the same with degrees on a map.' },
          { h3: 'Ages 11 to 15', p: 'Write the step-by-step converter in Python, feed it 59.99999, and fix the 60-second bug.' },
          { h3: 'Ages 15 and up', p: 'Test the converter on a million values, compute longitude spacing with cosines, and convert an OS grid reference yourself.' }
        ] },
        { kind: 'callout', h3: 'Real station, our calculations', p: 'The coordinates come from the Met Office Lerwick data file. The conversions, the bug counts and the distances come from our own program, using a spherical Earth of radius 6,371 km for the distance figures.' }
      ]
    },
    {
      id: 'lerwick-station', tint: 'deep', eyebrow: 'Why Lerwick',
      h2: 'A weather record from 1930',
      intro: 'What the Met Office file states about its station.',
      body: [
        { kind: 'table', caption: 'Met Office historic station data, Lerwick', head: ['File detail', 'What it says'], rows: [
          ['Grid position', '445300 east, 1139700 north'],
          ['Latitude and longitude', '60.139 and -1.183'],
          ['Height', '82 metres above mean sea level'],
          ['First month in the file', 'December 1930'],
          ['Measurements', 'Maximum and minimum temperature, air frost days, rain and sunshine by month']
        ] },
        { kind: 'p', text: 'Conversions between coordinate formats run inside every phone map, ship chart plotter, drone and delivery app. When they fail, a location can be shown with 60 seconds, a point can be placed in the sea, or a route can drift by a kilometre. A Shetland pupil who has chased down the carry bug and measured a degree of longitude at home understands exactly why careful code matters for navigation.' },
        { kind: 'p', text: 'We have no link with the Met Office, the Ordnance Survey or Shetland Islands Council. Their published figures are theirs; the converter, the tests and any mistakes are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From clock sums to coordinates',
    intro: 'Stages are a starting point only; the free trial settles the level.',
    cols: [
      { band: 'P1 to P4', h3: 'Clocks and compasses', p: 'Block coding with directions, time and simple map games.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Units in Python', p: 'Typed Python converting times, angles and distances.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Trigonometry and testing', p: 'Cosines, coordinates and thorough testing beside National 5, Higher and Advanced Higher courses.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Reliable numbers', p: 'Python for adults, with careful rounding, units and data.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and conversions',
    h2: 'An AI can convert coordinates in seconds. Will it ever print 60 seconds?',
    intro: 'The bug only shows in rare inputs, which is exactly where casual testing never looks.',
    p1: 'Ask a chatbot for a function that turns decimal degrees into degrees, minutes and seconds and the step-by-step version is a common answer. It works for every example you are likely to try, and prints 60.0 seconds for a fraction of real inputs that no one checks.',
    p2: 'A Shetland learner who has tested a million values knows how to catch rare-case bugs in generated code. That kind of testing is what turns AI output into something safe to rely on.',
    closer: 'Catching the bug that appears once in a thousand inputs is why a Shetland teenager should keep learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Island lessons',
    h2: 'From Sumburgh to Unst, lessons by video',
    intro: 'Whether on the Mainland or a smaller isle, learners join from home.',
    cells: [
      { h3: 'Any isle with internet', p: 'Whalsay, Yell, Bressay or Lerwick itself: a laptop and a connection that carries video are enough.' },
      { h3: 'Scottish stages in class', p: 'Teachers use P and S stages and the National 5, Higher and Advanced Higher names Shetland pupils know. Lessons are in English.' },
      { h3: 'A free trial first', p: 'One full lesson costs nothing, and afterwards we say plainly what would suit.' },
      { h3: 'Classmates at your level', p: 'Groups of five to ten learners who share a stage, joining from all over.' },
      { h3: 'Lessons in term', p: 'Twice a week in term, with the school holidays off.' },
      { h3: 'UK time, held steady', p: 'When the clocks change, your lesson stays at its UK hour; our teachers on India time move instead.' }
    ],
    spec: { title: 'Why island groups are wide', p: 'On a single isle there may be nobody else at your stage. Grouping by stage across a wide pool gives a learner on Foula or Fair Isle a proper class.' }
  },

  fees: {
    h2: 'Fees in Shetland',
    intro: 'Lerwick or Unst, the fee is the same, the rate we charge in every country outside India.',
    first: 'A full free lesson, then an honest recommendation.',
    group: 'About eight lessons a month in a group of five to ten.',
    private: 'About eight lessons a month, one learner and one teacher.',
    closer: 'Fees are in US dollars only, with no sterling list. Once the free trial has settled a course and a weekly time, billing begins; our pricing page explains holidays, absences and moving between group and private lessons.'
  },

  reviewsH2: 'What people say on Google',

  book: {
    h2: 'Book a free Shetland lesson',
    intro: 'Say which isle you are on, the learner\'s age or stage, and what interests them. We might start with a Scratch game, a first Python program, or the coordinate converter on this page.',
    success: 'Thank you. Your Shetland request has reached us.'
  },

  faq: {
    h2: 'Shetland questions',
    intro: 'The islands, the Lerwick project and practical matters.',
    items: [
      { q: 'How many people live in Shetland?', a: 'The 2022 census counted about 22,900 residents in Shetland, living in around 10,600 households, as rounded by NRS.' },
      { q: 'What are the main settlements in Shetland?', a: 'NRS mid-2020 estimates list Lerwick at 6,760, Scalloway at 1,170 and Brae at 750.' },
      { q: 'What is the Lerwick project?', a: 'Learners convert the Lerwick station\'s 60.139 degrees into degrees, minutes and seconds in Python, find the rounding bug that prints 60 seconds, and work out that a degree of longitude there is about 55.4 km.' },
      { q: 'Why is a degree of longitude shorter in Shetland?', a: 'Lines of longitude meet at the poles, so they get closer together as you go north. At about 60 degrees north the gap is roughly half what it is at the equator.' },
      { q: 'Where is the Lerwick weather station?', a: 'The Met Office data file gives latitude 60.139 and longitude -1.183, at 82 metres above mean sea level.' },
      { q: 'Can learners on smaller isles join?', a: 'Yes. All lessons are online, so anyone with a steady internet connection can take part.' },
      { q: 'Do you teach Higher Maths?', a: 'Yes, and National 5 Maths and Computing Science. We aim for understanding and do not promise grades.' },
      { q: 'What ages do you teach?', a: 'Six to 67. Children start with blocks, secondary pupils move into Python and exam maths, and adults begin Python wherever suits them.' },
      { q: 'How much do lessons cost?', a: 'The trial lesson is free; afterwards a group place is USD 100 a month and one-to-one USD 150 a month.' },
      { q: 'Do lessons stop for school holidays?', a: 'Yes. Pass on your school\'s holiday weeks and we leave them free.' }
    ]
  },

  next: {
    eyebrow: 'More island pages',
    h2: 'Beyond Shetland',
    html: '<a class="cg-inline-link" href="/coding-classes-in-orkney">Orkney</a> shares out dyke repairs with a matching algorithm and <a class="cg-inline-link" href="/coding-classes-in-na-h-eileanan-siar">the Western Isles</a> compare sunshine with daylight. <a class="cg-inline-link" href="/coding-classes-in-highland">The Highlands</a> page draws arches with curves. Every council is on our <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Shetland and beyond',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/coding-classes-in-orkney', label: 'Orkney' },
    { href: '/higher-maths-tuition-online', label: 'Higher Maths' }
  ],

  personalityCss: `
.cg-root.cg-zet .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.9vw, 2.4rem); }
.cg-root.cg-zet .cg-hero h1 { font-weight: 730; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-zet .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-zet .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-zet .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.019em; }
.cg-root.cg-zet .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-zet .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-zet .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-zet .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-zet .cg-callout { border-left-width: 6px; border-radius: 0 8px 8px 0; }
`,

  dossier: {
    curriculumAuthority: 'Shetland Islands (S12000027), one council. NRS, Scotland\'s Census 2022 first results, rounded population estimates: 22,900 (females 11,400, males 11,500); households 10,600; density 15.6 per square kilometre (Scotland 69.8); ages 0 to 14 3,800 (16.6 per cent), 65+ 5,000 (21.8 per cent) by our addition (Scotland 15.3, 20.1). NRS mid-2020 localities: Lerwick 6,760; Scalloway 1,170; Brae 750. Met Office historic station data, Lerwick: "Location: 445300E 1139700N, Lat 60.139 Lon -1.183, 82 metres amsl"; first month December 1930. Whalsay, Bressay, Yell, Unst, Foula, Fair Isle and Sumburgh are Shetland places named only as places.',
    localProject: 'DMS: 60.139 = 60 08 20.4; 1.183 = 1 10 58.8. Naive split-then-round: 59.99999 -> 59 59 60.0; safe round-once: 60 00 00.0. Million values 60-61 deg: naive 828 show 60.0 s (1 dp), 8,328 (0 dp). 60.139 stored 60.13900000000000289901; (60.139-60)x60 = 8.340000000000174. Sphere 6371.0 km: 1 deg lon 111.2 km (0), 69.2 (51.5), 62.3 (55.9), 55.4 (60.139), 38.0 (70); 1 min lat 1.853 km. OS grid -> OSGB36 60.1398, -1.1843; ~94 m N-S, ~72 m E-W from file figures; rounding explains. Lesson family: sexagesimal conversion, carry, floats, longitude scale.',
    requiredMentions: [
      'Scalloway',
      'Whalsay',
      'Fair Isle',
      'Foula',
      'Sumburgh',
      'Bressay',
      'Mainland of Shetland',
      '60.139',
      '55.4 km',
      'degrees, minutes and seconds'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Population Estimates for Settlements and Localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'Met Office historic station data: Lerwick.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/lerwickdata.txt' }
    ],
    rejectedClaims: [
      'That Shetland lies exactly on the 60th parallel or which isles are north of it: not claimed beyond the station figure.',
      'Datum differences between OSGB36 and WGS84: not claimed; rounding explains the gap.',
      'Fair Isle knitting, Up Helly Aa and Norse history: not researched for this page.',
      'Ferry and flight details between isles: not claimed.',
      'Named Shetland schools and school term dates: none named or read.',
      'That a nautical mile equals exactly one minute of latitude: page says roughly.'
    ]
  }
};
