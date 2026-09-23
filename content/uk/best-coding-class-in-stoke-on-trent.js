'use strict';
// Stoke-on-Trent (cg- city page, UK cluster Phase 4). Spine: is it a glitch or is it Bonfire Night? Median filters
// against moving averages on hourly PM2.5 from DEFRA UK-AIR, Stoke-on-Trent Centre (site STOK), flat files
// STOK_2022 to STOK_2025 (2025 supplied 1 May 2026, ratified), read 23 September 2026 (scratchpad stk/mf.py).
// Hours with PM2.5: 2022 8,721 of 8,760; 2023 8,751; 2024 8,773 of 8,784; 2025 8,730 of 8,760. Year's highest hour:
// (times GMT, hour ending) 2022 66.8 at 22:00 on 5 November; 2023 51.8 on 24 January 10:00; 2024 42.6 at 22:00 on 5 November; 2025 77.2 at
// 20:00 on 24 July (next hour 46.3, hours either side 21.5 and 24.5). 5 November evening (17:00 to 03:00): 2022 peak
// 66.8, 7 of 11 hours at 30 or more, afternoon mean 4.3; 2023 single hour 33.8 at 20:00; 2024 42.6, 7 of 11 hours at
// 30 or more; 2025 26.8. Centred filters at the peak hour, median / mean: 2022 k3 58.5/58.7, k5 57.5/53.0, k9
// 31.4/38.0, k25 16.7/22.0; 2023 k3 15.3/19.5; 2024 k5 42.1/39.7; 2025 July burst k3 46.3/48.4, k5 24.5/37.4, k9
// 24.2/30.7. Hours 15 or more above their own 5-hour median: 2022 6, 2023 3, 2024 4, 2025 7.
// Lesson family: median filter (robust smoothing, window length versus event length, when the outlier is the
// event). Screened 23 September 2026: median filter, rolling median, Bonfire Night 0 hits; distinct from Brighton
// sliding-window maximum and Swansea CUSUM.
// Place facts read raw 23 September 2026: Census 2021 via Nomis, Stoke-on-Trent E06000021: TS001 258,366 usual
// residents, 254,839 in households, 3,527 communal; TS007A 16,989 aged 5 to 9 (6.6 percent, England 5.9), 19,079 aged
// 30 to 34 (7.4, England 7.0); TS068 52,769 students of 242,744 aged 5 and over (21.7 percent, England 20.4); TS006
// 2,764.8 per square km (England 433.5). Victoria County History, Staffordshire vol. 8 (1963), The federation of the
// six towns, British History Online: Burslem, Fenton, Hanley, Longton, Stoke-upon-Trent and Tunstall; described as
// unique in English local government; Act passed both Houses 19 December and royal assent 21 December (1908); county
// borough came into existence 31 March 1910; city 1925. NHLE open data: bottle ovens including 1195804 Two bottle
// ovens and chimney at Albion Works and 1220666 Bottle oven at former Dolby Pottery, both Grade II. Places checked in
// OS Open Names (City of Stoke-on-Trent): Burslem, Tunstall, Hanley, Fenton, Longton, Meir, Trentham, Bucknall,
// Abbey Hulton, Smallthorne, Blurton.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'STOKE-ON-TRENT', blurb: 'The six towns of the Potteries, with a project that asks when a spike in the air data is a fault and when it is Bonfire Night.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-stoke-on-trent',
  code: 'sot',
  accent: '#772B22',
  accentRationale: 'Stoke-on-Trent: a fired-clay red for the Potteries, from the solver (7.92:1 on every paper tint, dE 6.8 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Stoke-on-Trent',
    eyebrow: 'Stoke-on-Trent, Staffordshire',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Stoke-on-Trent' },
      { type: 'AdministrativeArea', name: 'Staffordshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Stoke-on-Trent, England',
  title: 'Best Coding Classes in Stoke-on-Trent | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Stoke-on-Trent learners aged 6 to 67, from Tunstall and Burslem to Longton. The first lesson is free.',
  ogDescription: 'Coding and AI lessons for Stoke-on-Trent, on a page that asks when a spike in the city\'s air data is a fault and when it is Bonfire Night.',
  twitterDescription: 'Stoke-on-Trent learners aged six to sixty-seven can learn coding, Python and AI in live online lessons with us. Lesson one is free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Stoke-on-Trent Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, sensor data, AI and mathematics taught live online in English to Stoke-on-Trent children, teenagers and adults, in small groups by level or one to one.'
  },

  h1: 'Coding classes in Stoke-on-Trent',
  capsuleQ: 'What are the best coding classes in Stoke-on-Trent?',
  capsule: 'The 2021 census counted 258,366 usual residents in Stoke-on-Trent, living at 2,764.8 people per square kilometre against 433.5 across England. The Victoria County History records that the six pottery towns became one county borough on 31 March 1910, and the city dates from 1925. Our teachers in India teach Stoke-on-Trent learners from age six to sixty-seven in live video lessons, one to one or in groups of five to ten working at the same level, at times that fit around British school and work. There is no charge for the first lesson; after that a group place is USD 100 a month and one-to-one teaching USD 150.',
  lead: 'Every hour, the Stoke-on-Trent Centre monitoring site reports how much fine dust, PM2.5, is in the air. Some hours leap far above their neighbours. Are they faults to smooth away, or real events? Our teenagers build a median filter, which replaces each hour with the middle value of a small window, and test it on four years of the city\'s data. In 2022 the highest hour of the year was the one ending at 22:00 GMT on 5 November, Bonfire Night, and lasted all evening, so a five-hour median keeps 57.5 of its 66.8 micrograms. In 2025 the highest hour, 77.2 on a July evening, lasted barely two hours, and the same filter cuts it to 24.5. The filter cannot tell a fault from a real event; only its window length decides.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in Stoke-on-Trent, please.',

  picks: {
    eyebrow: 'Course picks for Stoke-on-Trent',
    h2: 'Four courses for the Potteries',
    intro: 'Choose by what the learner already enjoys. Each course opens with a free live lesson, and no card details are needed to book one.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, a first step towards programs that read numbers and react when one looks odd.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from first lines to complete projects, enough to read a year of hourly readings and write a filter for them.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Real data handled in Python: cleaning it, smoothing it carefully and saying what the smoothing removed.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Python for adults who deal with sensor logs, meters or machine readings and need to separate faults from real events.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Stoke-on-Trent today',
      h2: 'A compact city with plenty of young families',
      intro: 'Census 2021 figures for the Stoke-on-Trent unitary authority, from the Office for National Statistics on Nomis.',
      body: [
        { kind: 'table', caption: 'Stoke-on-Trent, Census 2021', head: ['Measure', 'Stoke-on-Trent', 'England'], rows: [
          ['Usual residents', '258,366', '56,490,048'],
          ['Living in households', '254,839', 'Not compared'],
          ['Living in communal establishments', '3,527', 'Not compared'],
          ['Aged 5 to 9', '16,989 (6.6%)', '5.9%'],
          ['Aged 30 to 34', '19,079 (7.4%)', '7.0%'],
          ['Students among residents aged 5 and over', '52,769 (21.7%)', '20.4%'],
          ['Usual residents per square kilometre', '2,764.8', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Children and parents', p: 'Children aged 5 to 9 made up 6.6% of residents, above England\'s 5.9%, and adults aged 30 to 34 made up 7.4%, against 7.0% nationally.' },
          { h3: 'Tightly built', p: 'At 2,764.8 residents per square kilometre, the six towns and their suburbs are packed far more closely than England as a whole.' },
          { h3: 'In education', p: 'Of the 242,744 residents aged five and over, 52,769 were students, 21.7%, a little above the figure for England.' }
        ] },
        { kind: 'p', text: 'Our Stoke-on-Trent groups mix learners from right across that city. A Year 2 child in Meir might be making a first animation, a Year 9 student in Burslem choosing GCSE options, and a parent in Trentham learning Python for the data in their job, each in a small class at their own level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Six towns, one city',
      h2: 'Burslem, Fenton, Hanley, Longton, Stoke and Tunstall',
      intro: 'From the Victoria County History of Staffordshire and Historic England\'s open listing data.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '21 December 1908', p: 'The Act uniting the pottery towns received royal assent, after passing both Houses of Parliament two days earlier, the Victoria County History records.' },
          { h3: '31 March 1910', p: 'The county borough of Stoke-on-Trent came into existence, joining Burslem, Fenton, Hanley, Longton, Stoke-upon-Trent and Tunstall. The history calls the union unique in English local government.' },
          { h3: '1925', p: 'Stoke-on-Trent became a city. The county history adds that local loyalties to the six towns lived on long after the merger.' }
        ] },
        { kind: 'p', text: 'The pottery industry has left its mark on the listing records too. Historic England lists surviving bottle ovens across the city, among them two bottle ovens and a chimney at Albion Works and a single bottle oven at the former Dolby Pottery, both at Grade II. We have no connection with Historic England, the Victoria County History or Stoke-on-Trent City Council; the ovens earn a place here because they recall towns whose people, the county history says, were predominantly engaged in a common industry, and today the same city measures its air every hour, which gives this page its project.' },
        { kind: 'spec', title: 'Where the air data comes from', p: 'DEFRA\'s UK-AIR archive publishes hourly readings from the Stoke-on-Trent Centre site as open data, including PM2.5, the fine particles smaller than 2.5 thousandths of a millimetre, with each value marked as ratified or provisional. Times are in GMT and label the end of each hour, so a July reading marked 20:00 covers 20:00 to 21:00 British Summer Time.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Is it a glitch, or is it Bonfire Night?',
      intro: 'A median filter replaces each hour with the middle value of the hours around it. A moving average uses their mean. Both smooth the data; they fail in different ways.',
      body: [
        { kind: 'table', caption: 'PM2.5 at Stoke-on-Trent Centre, micrograms per cubic metre, at the peak hour of two events, after centred filters of different lengths', head: ['Filter', '5 November 2022, hour ending 22:00 GMT', '24 July 2025, hour ending 20:00 GMT'], rows: [
          ['Raw reading', '66.8', '77.2'],
          ['3-hour median', '58.5', '46.3'],
          ['5-hour median', '57.5', '24.5'],
          ['5-hour mean', '53.0', '37.4'],
          ['9-hour median', '31.4', '24.2'],
          ['9-hour mean', '38.0', '30.7']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Read the year', p: 'Load a year of hourly PM2.5, keep the gaps as gaps (39 missing hours in 2022, 30 in 2025) and never fill them with zeros.' },
          { h3: '2. Slide the window', p: 'For each hour, sort the readings in the window and take the middle one. A spike shorter than half the window can never be the middle value, so it disappears.' },
          { h3: '3. Compare the damage', p: 'Put the filtered series next to the raw one and ask what was removed. On Bonfire Night 2022, seven of eleven evening hours reached 30 or more, so a short median kept the plateau.' }
        ] },
        { kind: 'callout', h3: 'The filter only knows about time', p: 'On 5 November 2022 the high readings lasted all evening, so the five-hour median kept 57.5 of the 66.8 peak, better than the mean\'s 53.0. On 24 July 2025 the burst lasted two hours, so the same median cut it to 24.5 while the mean smeared it into its neighbours at 37.4. Both hours passed DEFRA\'s ratification checks. A median filter removes anything shorter than half its window, real or not, so choosing the window is choosing which events you are willing to lose.' },
        { kind: 'p', text: 'Longer windows make the point starker. A 25-hour median brings the 2022 Bonfire Night peak down to 16.7, and in 2023 the evening\'s single high hour, 33.8 in the hour ending 20:00 GMT, is cut to 15.3 by even a three-hour median. The highest hour of 2024 was also the one ending at 22:00 GMT on 5 November, 42.6, and because seven evening hours were high the five-hour median barely touches it. Four years, the same evening, and a different shape every time.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Smoothing in practice',
      h2: 'Five questions before cleaning any sensor data',
      intro: 'Learned on Stoke-on-Trent\'s air, then used on step counters, factory machines, weather stations, smart meters and the sensors inside phones.',
      body: [
        { kind: 'table', caption: 'Choices that decide what smoothing removes', head: ['Question', 'For Stoke-on-Trent PM2.5', 'If nobody asks it'], rows: [
          ['How long are real events?', 'Bonfire evenings last hours; the July burst lasted two', 'A window that deletes the events you care about'],
          ['Median or mean?', 'Median for keeping plateaus and edges', 'A mean that spreads one spike across its neighbours'],
          ['What counts as a spike?', '15 or more above its own 5-hour median', 'Every busy hour flagged as a fault'],
          ['Is the value confirmed?', 'Ratified status checked before judging it', 'Real measurements thrown away as glitches'],
          ['What happens at gaps?', 'Missing hours left out of each window', 'Zeros dragging every filter downwards']
        ] },
        { kind: 'p', text: 'The third row is a choice, not a fact. Using that rule, 6 hours in 2022, 3 in 2023, 4 in 2024 and 7 in 2025 stood out. Change the threshold and the counts change; the honest report states the rule next to the count, and says that a flag means look again, not delete.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Finding the middle number of five cards and seeing why one silly card cannot change it, while it does change the average.' },
          { h3: 'Teenagers', p: 'A median filter in Python on four years of UK-AIR readings, compared with a moving mean at several window lengths.' },
          { h3: 'Adults', p: 'Cleaning sensor and machine logs at work, with every removed value counted and every threshold written down.' }
        ] },
        { kind: 'p', text: 'We are not connected with DEFRA, Historic England, British History Online or Stoke-on-Trent City Council. The readings, census tables and listing records are open data, and the filters, counts and comparisons on this page are our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From the middle card to a median filter',
    intro: 'The age bands are a rough starting point, and the free lesson settles the right level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Middle and average', p: 'Lining up number cards, finding the middle one and the average, and spotting which one a single odd card spoils.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Lists in code', p: 'Storing a week of readings in a Python list, sorting a slice of it and picking out the middle value.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Filters on real data', p: 'Median and mean filters on hourly UK-AIR data, window lengths tested against real events such as Bonfire Night.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Sensor data at work', p: 'Cleaning logs from meters and machines, flagging odd values for review rather than deleting them silently.', courses: ['python-ai-automation-masterclass-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI tools clean data automatically. Why should a Stoke-on-Trent teenager write a filter by hand?',
    intro: 'Because every automatic cleaning step decides, quietly, which real events to throw away.',
    p1: 'AI systems learn from data that has usually been cleaned first, and cleaning often means smoothing out spikes. A learner who has watched a median filter erase a real two-hour burst of dust knows to ask what a cleaning step removed, and whether the unusual cases a model most needs to learn from were among them.',
    p2: 'The same idea runs through image processing, where median filters remove speckle from photos, and through anomaly detection, where the spikes are the whole point. Building the filter by hand, and comparing it with the mean, makes the trade-off between smoothness and faithfulness something a learner has seen rather than been told.',
    closer: 'So a Stoke-on-Trent teenager should keep learning to code in 2026, in six towns that became one city: software can smooth any data it is given, but a person still has to decide which spikes are the story.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Tunstall, Hanley or Longton, and all of them online',
    intro: 'The city runs along a chain of towns from Tunstall in the north to Longton and Meir in the south. Online, every one of them is equally close to class.',
    cells: [
      { h3: 'Six towns, one class', p: 'A learner in Smallthorne and another in Blurton can share a lesson without either of them catching a bus through Hanley.' },
      { h3: 'Familiar school stages', p: 'Our teaching follows the stages used in Stoke-on-Trent schools, Reception and Key Stages 1 to 4 up to GCSE and A level, and is all in English.' },
      { h3: 'Real work from minute one', p: 'The free session is a genuine lesson on a real task, ending with our advice on level, course and a weekly slot. No card is needed.' },
      { h3: 'Classes built by level', p: 'Five to ten learners at one stage, from Stoke-on-Trent, around the UK and overseas, which keeps sensible times open for every level.' },
      { h3: 'Two sessions a week', p: 'Two fixed lessons weekly, around eight a month, with school holidays and exam weeks arranged with the teacher ahead of time.' },
      { h3: 'Your afternoon, their evening', p: 'A 5.30 pm lesson in Stoke-on-Trent begins at 10 pm in India during British Summer Time and 11 pm in winter, since India does not change its clocks; our teachers keep evening hours for UK families.' }
    ],
    spec: { title: 'Around North Staffordshire', p: 'Families in Newcastle-under-Lyme, Kidsgrove, Leek or Stone join exactly the same classes, as groups are online and formed by level rather than by town.' }
  },

  fees: {
    h2: 'Stoke-on-Trent lesson fees',
    intro: 'A free first lesson, followed by one monthly fee.',
    first: 'A whole lesson at no cost, ending with a suggested level, course and weekly time.',
    group: 'Around eight live lessons a month, in a group of five to ten learners at one stage.',
    private: 'Around eight live lessons a month, with the teacher attending to your learner alone.',
    closer: 'Families in Bucknall or Abbey Hulton pay in US dollars like every family outside India, and there are no pound prices anywhere on our site. The free lesson always comes first and billing begins only when a course and a weekly time have been agreed; the pricing page explains pauses, missed lessons and moving between a group and private teaching.'
  },

  reviewsH2: 'Google reviews from six families, as they wrote them',

  book: {
    h2: 'Book a free lesson for a Stoke-on-Trent learner',
    intro: 'We match the first task to the learner: a middle-number card game for a young child, a short Python program that finds the middle of a list for a beginner, or a year of the city\'s air readings and a median filter for a teenager ready for real data.',
    success: 'Thank you. We will be in touch shortly to arrange a lesson for your Stoke-on-Trent learner.'
  },

  faq: {
    h2: 'Stoke-on-Trent coding class questions',
    intro: 'What Stoke-on-Trent families ask us most often.',
    items: [
      { q: 'How many people live in Stoke-on-Trent?', a: 'Census 2021 counted 258,366 usual residents in the Stoke-on-Trent unitary authority, with 254,839 living in households and 3,527 in communal establishments.' },
      { q: 'How does Stoke-on-Trent compare with England?', a: 'It is densely built, with 2,764.8 residents per square kilometre against 433.5 for England, and it has slightly more young children: 6.6% of residents were aged 5 to 9 in 2021, against 5.9% nationally.' },
      { q: 'What is a median filter?', a: 'A way of smoothing data by replacing each value with the middle value of a window around it. Unlike a moving average, it ignores a single extreme value completely, which makes it good at removing short spikes and at keeping sharp edges.' },
      { q: 'Why did the filter keep Bonfire Night 2022 but not the July 2025 spike?', a: 'Because of how long each lasted. The 2022 evening had seven of eleven hours at 30 or more, so a five-hour median kept 57.5 of the 66.8 peak. The July 2025 burst lasted two hours, so the same filter cut 77.2 to 24.5.' },
      { q: 'Where do the air readings come from?', a: 'From DEFRA\'s UK-AIR data archive, which publishes hourly readings for the Stoke-on-Trent Centre site as free downloadable files, with each value marked ratified or provisional.' },
      { q: 'When did the six towns become Stoke-on-Trent?', a: 'The Victoria County History records that the county borough came into existence on 31 March 1910, uniting Burslem, Fenton, Hanley, Longton, Stoke-upon-Trent and Tunstall, and that it became a city in 1925.' },
      { q: 'What times are the Stoke-on-Trent lessons?', a: 'Lessons run on weekday afternoons, weekday evenings or at weekends, at a UK time we fix in the free lesson. The time in India is four and a half hours ahead of Stoke-on-Trent in summer and five and a half in winter.' },
      { q: 'Is there a place in Stoke-on-Trent where lessons happen?', a: 'No. We have no Stoke-on-Trent centre and no UK premises, because every lesson is live online. A learner needs a computer with sound and a dependable connection, and our phone number is Indian.', boiler: true },
      { q: 'What does it cost to learn with you from Stoke-on-Trent?', a: 'The first lesson costs nothing. After that, a group place is USD 100 a month for two live lessons a week, roughly eight a month, with five to ten learners, and one-to-one teaching on the same pattern is USD 150 a month. Nothing is charged before the course, format and time are agreed.', boiler: true },
      { q: 'Who will be in my learner\'s group?', a: 'Five to ten learners at the same stage, grouped by level, pace and goals rather than age or neighbourhood. If no group fits the learner\'s week, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'The Midlands and beyond',
    html: 'On the coast, the <a class="cg-inline-link" href="/best-coding-class-in-brighton-and-hove">Brighton and Hove page</a> slides a window along a year of ozone readings, and <a class="cg-inline-link" href="/best-coding-class-in-swansea">Swansea</a> watches for the moment roadside air changed for good. Closer by, <a class="cg-inline-link" href="/best-coding-class-in-derby">Derby</a> finds the busiest minute on its buses. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> explains school stages, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> links to every other city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Stoke-on-Trent and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-derby', label: 'Derby' },
    { href: '/best-coding-class-in-swansea', label: 'Swansea' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-sot .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.4rem); }
.cg-root.cg-sot .cg-hero h1 { font-weight: 800; letter-spacing: -0.03em; line-height: 1.03; }
.cg-root.cg-sot .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-sot .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-sot .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.02em; }
.cg-root.cg-sot .cg-grid-3 { gap: clamp(0.9rem, 2.4vw, 2rem); }
.cg-root.cg-sot .cg-table th { letter-spacing: 0.035em; }
.cg-root.cg-sot .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-sot .cg-ladder-col { border-bottom: 3px solid var(--cg-accent); padding-bottom: 0.9rem; }
.cg-root.cg-sot .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'Stoke-on-Trent, Census 2021 via Nomis (E06000021): TS001 258,366 usual residents, 254,839 in households, 3,527 in communal establishments; TS007A 16,989 aged 5 to 9 (6.6 percent, England 5.9), 19,079 aged 30 to 34 (7.4 percent, England 7.0); TS068 52,769 students of 242,744 residents aged 5 and over (21.7 percent, England 20.4); TS006 2,764.8 usual residents per square kilometre (England 433.5). Victoria County History, Staffordshire vol. 8 (1963), The federation of the six towns: Burslem, Fenton, Hanley, Longton, Stoke-upon-Trent and Tunstall; unique in English local government; royal assent 21 December 1908; county borough from 31 March 1910; city 1925. NHLE: bottle ovens at Albion Works (1195804) and former Dolby Pottery (1220666), Grade II.',
    localProject: 'Is it a glitch, or is it Bonfire Night? DEFRA UK-AIR Stoke-on-Trent Centre (STOK) hourly PM2.5, 2022 to 2025. Year tops: 2022 66.8 at 22:00 5 November; 2023 51.8 on 24 January; 2024 42.6 at 22:00 5 November; 2025 77.2 at 20:00 24 July (two-hour burst). Filters at peak, median/mean: 2022 k3 58.5/58.7, k5 57.5/53.0, k9 31.4/38.0, k25 16.7; 2025 k3 46.3, k5 24.5/37.4, k9 24.2/30.7; 2023 single hour 33.8 cut to 15.3 by k3. Hours 15+ above own 5-hour median: 6, 3, 4, 7. Missing hours 39 (2022), 30 (2025). Lesson family: median filter; distinct from Brighton sliding-window max and Swansea CUSUM.',
    requiredMentions: [
      '258,366',
      '254,839',
      '2,764.8',
      '52,769',
      'Burslem',
      'Tunstall',
      'Longton',
      'Fenton',
      '31 March 1910',
      'bottle oven',
      'median filter',
      'Bonfire Night'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Stoke-on-Trent: 258,366 usual residents; 254,839 in households; 3,527 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E06000021' },
      { claim: 'Nomis, Census 2021 TS007A: Stoke-on-Trent and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E06000021,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Stoke-on-Trent 52,769 students of 242,744 aged 5 and over (21.7 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E06000021,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: population density, Stoke-on-Trent 2,764.8 per square kilometre.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E06000021,E92000001' },
      { claim: 'DEFRA UK-AIR data archive, Stoke-on-Trent Centre (STOK) hourly flat files 2022 to 2025, including PM2.5.', url: 'https://uk-air.defra.gov.uk/data/flat_files?site_id=STOK' },
      { claim: 'Victoria County History, Staffordshire vol. 8 (1963), The federation of the six towns: six towns named; royal assent 21 December; county borough 31 March 1910; city 1925.', url: 'https://www.british-history.ac.uk/vch/staffs/vol8/pp252-258' },
      { claim: 'Historic England NHLE open data: Two bottle ovens and chimney at Albion Works (1195804) and Bottle oven at former Dolby Pottery (1220666), Grade II.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1195804' }
    ],
    rejectedClaims: [
      'A total count of listed bottle ovens: many are listed inside entries named after whole works, so a count by entry name would be wrong; two named examples are given instead.',
      'A claim that fireworks caused the 5 November readings: the page states the dates and times only, and no source ties these readings to a cause.',
      'A cause for the 24 July 2025 burst: none is known to us; the page says only that the hour passed DEFRA ratification, which is a quality status, not proof of a cause.',
      'Stoke-on-Trent Museums (Gladstone Pottery Museum, Potteries Museum) pages: returned 403 and were not circumvented.',
      'Summing published census parts: TS007A total (258,369) differs from TS001 (258,366) by disclosure control, so the TS001 total is used and no parts are added.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with DEFRA, Historic England, British History Online or Stoke-on-Trent City Council.'
    ]
  }
};
