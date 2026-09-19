'use strict';
// Drumcondra, Dublin 9 (cg- district page, Ireland cluster, Phase 6). Named sources only (owner
// rule for districts), read 20 September 2026: Dublin City Council "Ambient Sound Monitoring
// Network DCC" (data.smartdublin.ie, drumcondra2015.zip: 370 daily text files, 5-minute A Leq,
// L10, L95 and C-weighted values from unit DCC-NOISE-001001); DCC's Dublin Agglomeration Noise
// Action Plan, Volume 1 (Dec 2018, July 2023 version) glossary; DCC's Drumcondra Library page;
// Irish Rail's Drumcondra station page; Croke Park's own stadium page. Spine: decibels are
// logarithmic, so averages must be taken on energy. Scratchpad dcd/db.js.
// 2015: 104,596 readings of 105,132 possible (365 x 288 + 12 for the 25 October repeated hour),
// 99.5%. Energy Leq 55.83 vs plain mean 53.43 (2.40). Day 07-19 57.70 vs 56.66; evening 19-23
// 54.79 vs 53.74; night 23-07 50.50 vs 48.38 (by interval start; rows are stamped at the end of
// each 5-minute interval). Loudest 1% of readings hold 8.5% of the energy, loudest 10% 34.4%.
// 10 September: energy 62.5 (rank 1 of 361 full days) vs plain 53.9 (rank 154; median 53.5);
// eight readings stamped 06:00-06:35 (71.11 to 78.64) hold 81.3% of that day's energy (287
// readings that day). Max 78.64; 10^((78.64-55.83)/10) = 191. Lden (plan formula) 59.18 with
// energy averages, 57.68 with plain averages. File problems: 4 June file tab-separated (287
// readings lost to a comma-only parser); 25 October 01:00-01:55 repeated with different values
// (clock change, both kept); 21 files carry a header location of 51.528763N 0.093589W (465 km
// away, north London) while their daily levels match the rest of the year (median 55.6 vs 55.4);
// 23 April 23:30 file overlaps the day file (first copy kept). Unit position 53.369953N
// 6.259042W is 5.9 m from the library coordinates DCC publishes (53.369901, -6.259021).

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'area', tag: 'DRUMCONDRA', blurb: 'A year of five-minute noise readings at the library, and why an average of decibels comes out 2.40 too low.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-drumcondra-dublin',
  code: 'dcd',
  accent: '#1F6B7A',
  accentRationale: 'Drumcondra: an oscilloscope teal from the widened solver search, clear of the Drogheda and Carlow blue-greens',
  pageType: 'district',
  place: {
    name: 'Drumcondra',
    eyebrow: 'Drumcondra, Dublin 9',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Dublin City' },
      { type: 'AdministrativeArea', name: 'County Dublin' },
      { type: 'Country', name: 'Ireland' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-ireland', name: 'Ireland' },
    { slug: 'best-coding-class-in-dublin', name: 'Dublin' }
  ],
  nav: [
    { label: 'Ireland', href: '/coding-classes-in-ireland' },
    { label: 'Dublin', href: '/best-coding-class-in-dublin' },
    { label: 'Rathmines', href: '/coding-classes-in-rathmines-dublin' }
  ],
  routeLabel: 'Drumcondra, Dublin 9, Ireland',
  title: 'Coding Classes in Drumcondra, Dublin | Modern Age Coders',
  description: 'Coding, Python, AI and maths lessons for Drumcondra learners aged 6 to 67, taught live online in small groups at one level or one to one. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Drumcondra, with a data project on a year of five-minute noise readings and why decibels cannot be averaged directly.',
  twitterDescription: 'Live online coding, Python, AI and maths for Drumcondra, ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Drumcondra',
    description: 'Online coding, Python, AI, data and mathematics for children, teenagers and adults in Drumcondra, taught live in English to small groups at one level or one to one.'
  },

  h1: 'Coding classes in Drumcondra',
  capsuleQ: 'What are the best coding classes in Drumcondra?',
  capsule: 'In Drumcondra, as everywhere we teach, a teacher runs each lesson live on video, for a few learners at a matching level or for one learner alone, twice in a normal week, and learners can be any age from six to sixty-seven. Nothing needs a commute. There is no charge for the first lesson; the monthly fee afterwards is USD 100 for a group place or USD 150 for one-to-one teaching.',
  lead: 'Through 2015 Dublin City Council\'s sound monitor at Drumcondra Library logged the noise level every five minutes, 104,596 readings in all. Add them up and divide, and the year averages 53.43 decibels. The average that noise work actually uses comes out at 55.83. The gap is not rounding. Decibels sit on a logarithmic scale, where every extra 3 decibels means double the sound energy, so a loud five minutes counts for far more than its place in a list suggests. This page teaches a learner to average on the right scale and shows what the wrong one hides.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Drumcondra.',

  picks: {
    eyebrow: 'Courses for Drumcondra',
    h2: 'Four first courses for Drumcondra',
    intro: 'Choose by age for now; in the free first lesson the teacher checks the level and recommends a different course if one suits better.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and sound: a volume meter game where one loud clap outweighs a room full of whispers.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Powers of ten, logarithms and averages, made visible in code before they appear in class.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Python with a year of real sensor files: messy formats, two kinds of average, and a chart of the day.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults who report on measurements like noise, signal strength or earthquakes, where the scale is logarithmic.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'You cannot average decibels: a year at the Drumcondra sound monitor',
      intro: 'The readings are Dublin City Council\'s 2015 files for its monitor at Drumcondra Library, one A-weighted level for every five minutes. The two averages below use exactly the same readings.',
      body: [
        { kind: 'table', caption: 'Drumcondra Library sound monitor, 2015: the same readings averaged two ways (decibels)', head: ['Period', 'Plain average', 'Energy average', 'Gap'], rows: [
          ['Whole year', '53.43', '55.83', '2.40'],
          ['Day, 07:00 to 19:00', '56.66', '57.70', '1.04'],
          ['Evening, 19:00 to 23:00', '53.74', '54.79', '1.05'],
          ['Night, 23:00 to 07:00', '48.38', '50.50', '2.12'],
          ['10 September', '53.9', '62.5', '8.6']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why there is a gap', p: 'On the decibel scale each step of 10 is ten times the sound energy, and the council\'s noise plan notes that doubling the energy adds 3 decibels. The loudest reading of the year, 78.64, carries 191 times the energy of 55.83. A plain average treats it as only about 23 decibels more than typical, and lets the many quiet readings outvote it.' },
          { h3: 'One loud morning', p: 'On 10 September eight readings stamped between 06:00 and 06:35 ran from 71.1 to 78.6 decibels. They are eight of the day\'s 287 readings but hold 81.3 percent of its sound energy. By energy that makes it the loudest day of 2015; by plain average it ranks 154th of 361 full days, near the middle.' },
          { h3: 'Quiet nights pull hardest', p: 'The gap is widest at night, 2.12 decibels, because a quiet background lets an occasional loud moment count for more. The council\'s plan calls a night level under 50 decibels desirable. The plain average of Drumcondra\'s 2015 nights, 48.38, is under that line; the energy average, 50.50, is over it.' }
        ] },
        { kind: 'callout', h3: 'Undo the logarithm before you average', p: 'A logarithmic scale squeezes a huge range into small numbers, which is useful for reading and wrong for arithmetic. To average decibels, turn each reading back into energy by raising ten to the power of the level over ten, take the ordinary average of those, and convert the result back with ten times the logarithm. The day-evening-night level in the council\'s own noise plan is built the same way, and fed Drumcondra\'s 2015 energy averages it gives 59.18 decibels. Fed the plain averages instead it gives 57.68, a mistake of a decibel and a half on a scale where 3 decibels is double.' },
        { kind: 'p', text: 'The learner\'s program reads 370 daily text files, each with a few comment lines and a line per five-minute reading, and meets three real problems before any maths. The 4 June file separates its columns with tabs instead of commas, so a parser that only splits on commas silently drops all 287 of that day\'s readings. On 25 October, when the clocks go back, the hour from 01:00 appears twice with different readings, and both are real. And 21 files carry a header placing the unit at a point in north London, 465 kilometres away, although their readings look like every other day\'s. With those handled, the program has 104,596 readings, 99.5 percent of the year. It then computes both averages for the year, for each hour, for day, evening and night, and for every day, and ranks the days both ways to find where they disagree.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Where the monitor is', p: 'The files give the unit\'s position as 53.369953 north, 6.259042 west, about 6 metres from the coordinates the council publishes for Drumcondra Library on Millmount Avenue. The council\'s older 2010 file for the site is named after the library.' },
          { h3: 'The loudest tenth', p: 'The loudest 10 percent of the year\'s readings hold 34.4 percent of its sound energy, and the loudest 1 percent hold 8.5 percent. On a logarithmic scale a small share of moments can carry a large share of the total.' },
          { h3: 'Not a cause', p: 'The readings record how loud it was at the library, not what made the sound. The page does not guess what happened on the morning of 10 September, or on any other day.' }
        ] }
      ]
    },
    {
      id: 'place', tint: 'tint', eyebrow: 'Drumcondra, named',
      h2: 'Drumcondra from its library, its station and the stadium down the road',
      intro: 'Each line is taken from the organisation that runs the place.',
      body: [
        { kind: 'table', caption: 'Named places in and beside Drumcondra', head: ['Place', 'What its own source says'], rows: [
          ['Drumcondra Library', 'Millmount Avenue, D09 PT78'],
          ['Drumcondra station', 'Lower Drumcondra Road, D09 H0V5'],
          ['Croke Park', 'Jones Road, D03 P6K7, capacity 82,300'],
          ['Council sound monitor', 'Beside the library, one reading every five minutes']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The library', p: 'The council lists Drumcondra Library as open 10:00 to 17:00 on Monday, Wednesday, Friday and Saturday and 12:45 to 20:00 on Tuesday and Thursday, with ramped access and an induction loop for hearing aids.' },
          { h3: 'The station', p: 'Irish Rail gives lifts to both platforms and staffing from 07:00 to 23:00 every day, says there are no bike facilities, and lists trains on the Sligo, Maynooth and M3 Parkway, and Portlaoise routes.' },
          { h3: 'The stadium', p: 'Croke Park, the GAA\'s ground on Jones Road in Dublin 3, gives its capacity as 82,300, the crowd its two All-Ireland finals draw every September.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'No population is stated for Drumcondra, because the page uses only what named bodies publish about the place. The sound readings come from one monitor at one spot in 2015 and describe that spot, not the whole district, and nothing here links any reading to the stadium or any other source.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'How a Drumcondra learner spends the week',
      intro: 'Two lessons in a usual week, each taught live by the teacher from beginning to end.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'Children start with block code and sound games, and find out why one loud noise can outweigh many quiet ones.' },
          { h3: 'Teenagers', p: 'Teenagers go on to Python, websites, AI projects and real sensor files like the noise monitor\'s, with the maths shown by the code.' },
          { h3: 'Adults', p: 'Adults may begin with no background at all; the first lesson picks the course.' }
        ] },
        { kind: 'p', text: 'Readings are Dublin City Council\'s open data for 2015, and the decibel definitions and day-evening-night formula are from the council\'s noise action plan; every average, share and ranking here was computed by us on 20 September 2026. Library, station and stadium details are quoted from their own pages.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a loudness meter to a logarithm',
    intro: 'A band is a first guess; the opening lesson places the learner properly.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Loud and quiet', p: 'Block-coded meters that react to sound and keep a running score.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Powers of ten', p: 'Python that turns decibels into energy and back again.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Real sensor files', p: 'Parsing a year of readings, fixing format problems and averaging on the right scale.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Measurements at work', p: 'Summaries of noise, signal and other logarithmic measures that stand up to checking.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant for the average noise level at Drumcondra',
    intro: 'The tidy answer is the plain average, and it is too low.',
    p1: 'Give an AI assistant the monitor\'s files and ask for the average noise level in 2015, and a likely first answer reads the column, takes the mean and reports about 53.4 decibels. The code is short and runs cleanly. It is also 2.40 decibels too low, because it averaged a logarithmic unit as if it were a straight one.',
    p2: 'The learner who has done this project knows to ask what scale the numbers are on, and to request the energy average instead. They also know to check the files first: an assistant that splits every line on commas will skip the June day written with tabs without saying so.',
    closer: 'Knowing the scale your numbers live on is half of data work. The code only does what you ask of it.',
    blogAnchor: 'why coding still belongs in a young learner\'s week'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Drumcondra',
    intro: 'The short version.',
    cells: [
      { h3: 'Always live', p: 'A real teacher is present for every minute, reading and helping with each learner\'s code as they write it.' },
      { h3: 'Same stage together', p: 'Groups of five to ten at one stage, drawn from Drumcondra, the rest of Ireland and other countries.' },
      { h3: 'A fixed pair of days', p: 'Lessons fall on the same two weekdays or weekend days, around eight a month.' },
      { h3: 'School calendar', p: 'Holiday weeks, mid-terms and exam time are part of the plan from the start.' },
      { h3: 'At home', p: 'A computer rather than a phone, a microphone, speakers or headphones, and broadband good enough for video.' },
      { h3: 'Solo lessons', p: 'One-to-one teaching for a learner who is ahead, wants extra time, or has hours no group matches.' }
    ],
    spec: { title: 'Online, fully', p: 'We have no rooms in Drumcondra, in Dublin or anywhere in Ireland. Every lesson is live on video and works the same from any home.' }
  },

  fees: {
    h2: 'Fees for Drumcondra',
    intro: 'Simply put.',
    first: 'An opening lesson at no cost, with a check of the learner\'s level.',
    group: 'A month in a group of five to ten at one level, close to eight live lessons.',
    private: 'A month of private lessons, same frequency.',
    closer: 'The fee is set in US dollars and is the same for every family outside India, paid a month at a time. Taking the free lesson commits you to nothing and payment only begins with the course; details on holidays, missed lessons and moving between group and private teaching are on the pricing page.'
  },

  reviewsH2: 'Six Google reviews from families, word for word',

  book: {
    h2: 'Book a free first lesson in Drumcondra',
    intro: 'Share the learner\'s age and interests and we will plan the first lesson with them in mind. They could leave with a small game, a program that works, or a first look at why loud moments dominate an average.',
    success: 'Thank you. We will be in touch shortly about the lesson.'
  },

  faq: {
    h2: 'Drumcondra coding class questions',
    intro: 'Questions we hear from Drumcondra families.',
    items: [
      { q: 'Do you have a centre in Drumcondra?', a: 'No. All lessons are live on video, and Modern Age Coders has no premises in Ireland. A learner needs a computer, a microphone and sound, and a steady connection. The contact number shown is an Indian number.', boiler: true },
      { q: 'What is the noise monitor project?', a: 'The learner reads Dublin City Council\'s 2015 files from the sound monitor at Drumcondra Library, 104,596 five-minute readings, and averages them two ways: 53.43 decibels as plain numbers and 55.83 by energy, the correct method for a logarithmic scale. Nights come out on opposite sides of the council\'s 50-decibel line depending on which is used.' },
      { q: 'Does the project say what causes the noise?', a: 'No. The monitor records how loud it was, not why. The page reports levels and leaves sources alone.' },
      { q: 'Why does the page not give a population for Drumcondra?', a: 'District pages print only what named organisations publish about the place itself, here the council, Irish Rail and Croke Park, and none of those publishes a head count for Drumcondra.' },
      { q: 'What are the lesson times?', a: 'Weekday slots start after school and run into the evening; weekend slots are in the daytime. We schedule in Irish time. Our teachers are in India, four and a half hours ahead of Drumcondra while Ireland is on summer time and five and a half hours ahead in winter, and the slots we offer are chosen to be reasonable for both.' },
      { q: 'Can adults take lessons?', a: 'Yes, from any starting point and up to age sixty-seven. After the free lesson an adult decides between a group at their level and one-to-one lessons.' },
      { q: 'Will my child be in a class with other Drumcondra children?', a: 'Not necessarily. We group by level, so the others may live anywhere in Ireland or outside it.' },
      { q: 'What do coding classes in Drumcondra cost?', a: 'The first lesson is free. After it, a group place costs USD 100 a month for about eight live lessons, two a week, with five to ten learners, and one-to-one lessons on the same schedule cost USD 150 a month. Terms are settled before any money changes hands.', boiler: true },
      { q: 'What size are the groups?', a: 'Between five and ten learners, grouped by level, pace and goals rather than age or area. When no group suits a workable time, the lessons are one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Around Drumcondra',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a> page takes in the whole city. South of the river, <a class="cg-inline-link" href="/coding-classes-in-rathmines-dublin">Rathmines</a> has a project on library loans, and the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> links every county, town and district page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Drumcondra, Dublin and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-dublin', label: 'Dublin' },
    { href: '/coding-classes-in-rathmines-dublin', label: 'Rathmines' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-dcd .cg-hero-grid { align-items: center; gap: clamp(1.16rem, 3.21vw, 2.47rem); }
.cg-root.cg-dcd .cg-hero h1 { font-weight: 730; letter-spacing: -0.0197em; line-height: 1.05; }
.cg-root.cg-dcd .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.11rem; }
.cg-root.cg-dcd .cg-eyebrow { letter-spacing: 0.134em; font-weight: 610; text-transform: uppercase; }
.cg-root.cg-dcd .cg-section-head h2 { max-width: 35ch; letter-spacing: -0.0141em; }
.cg-root.cg-dcd .cg-grid-3 { gap: clamp(1.07rem, 2.78vw, 2.11rem); }
.cg-root.cg-dcd .cg-table caption { letter-spacing: 0.033em; font-weight: 690; }
.cg-root.cg-dcd .cg-table td { font-variant-numeric: tabular-nums lining-nums; letter-spacing: 0.01em; }
.cg-root.cg-dcd .cg-table tr:last-child td { font-weight: 640; }
.cg-root.cg-dcd .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 1.02rem; }
.cg-root.cg-dcd .cg-callout { border-left-width: 9px; }
`,

  dossier: {
    curriculumAuthority: 'Drumcondra, named sources only (owner rule for districts), read 20 September 2026. Dublin City Council, "Ambient Sound Monitoring Network DCC" (data.smartdublin.ie dataset a52fbbe2...; notes: "The sound level meters store continuous 5 minute sound pressure levels"; "The results of the sound level meter are given in Leq, which is the average sound level over the period of measurement. L95 and the L10 data is also provided"), drumcondra2015.zip: 370 files DCC-NOISE-001001-2015-MM-DDT..., header "# Monitoring unit located at 53.369953N 6.259042W" (21 files: "51.528763N 0.093589W"), "# Time should be in local format (i.e. daylight savings time)", columns "dd/mm/yyyy hh:mm:ss, A Leq, A L10, A L95, C Leq, C L10, C L95"; file for 4 June 2015 (named ...06-04TA00-00-00.txt) tab-separated, 287 lines; 25 October 01:00 to 01:55 appears twice with different values; 23 April 23:30 file overlaps the day file. DCC Dublin Agglomeration Noise Action Plan Volume 1 (dublincity.ie PDF, Dec 2018, July 2023 revision), Appendix A glossary: "Sound levels are expressed in decibels (dB) on a logarithmic scale"; "a doubling of the sound energy results in a 3 dB increase in the sound level"; Lden "adding the average value for the 12 hour day time period with the average value of the 4 hour evening period plus a 5 decibel weighting or penalty, and the average value for the 8 hour night time period with a 10 decibel weighting or penalty", formula with terms 10^((Lday)/10), 10^((Levening+5)/10), 10^((Lnight+10)/10); daytime 7am to 7pm, evening 7pm to 11pm, night 11pm to 7am; section 9: "Desirable low sound levels are defined as areas with a night time level less than 50 decibels and\\or a daytime level less than 55 decibels." Our arithmetic (dcd/db.js): 104,596 of 105,132 possible readings (99.5%); year energy 55.83, plain 53.43; day 57.70/56.66; evening 54.79/53.74; night 50.50/48.38; loudest 1% hold 8.5% of energy, loudest 10% hold 34.4%; 10 September energy 62.5 (rank 1 of 361 full days) against plain 53.9 (rank 154, median 53.5), eight readings stamped 06:00 to 06:35 (71.11 to 78.64) hold 81.3% of that day\'s energy, 287 readings that day; maximum 78.64, energy ratio to 55.83 = 191; Lden 59.18 (energy) against 57.68 (plain). DCC Drumcondra Library page: "Millmount Avenue Dublin 9 Co. Dublin D09 PT78", "Locate 53.369901, -6.259021" (5.9 m from the unit position); hours Monday 10:00 to 17:00, Tuesday 12:45 to 20:00, Wednesday 10:00 to 17:00, Thursday 12:45 to 20:00, Friday 10:00 to 17:00, Saturday 10:00 to 17:00; ramped access; induction loop. Irish Rail Drumcondra station: "Lower Drumcondra Road Drumcondra Dublin 9 Eircode D09 H0V5"; "Station Staffing Hours Monday to Sunday: 07:00 - 23:00"; "There are no bike facilities at the station"; "Platform Access Lifts to both platforms"; routes Dublin Connolly to Sligo, Dublin to Maynooth, Longford and M3 Parkway, Grand Canal Dock and Dublin Heuston to Portlaoise. Croke Park stadium page: "Every September, the Association\'s two annual marquee events - the GAA All-Ireland Football and Hurling Championship Finals - attract a capacity 82,300 fans"; "Croke Park, Dublin 3, D03 P6K7"; "Registered Office, Jones Road, Dublin 3".',
    localProject: 'Decibels are logarithmic: average on energy. From Dublin City Council\'s 2015 five-minute sound readings at Drumcondra Library (104,596 after fixing a tab-separated file, keeping the repeated clock-change hour and ignoring a wrong location header), the learner computes the plain mean (53.43) and the energy average (55.83) for the year and for day, evening and night, finds that the night flips across the council plan\'s 50-decibel line (48.38 plain, 50.50 energy), that one 40-minute burst makes 10 September the loudest day by energy (62.5) while it sits mid-table by plain average (53.9, rank 154 of 361), and applies the plan\'s Lden formula (59.18 against 57.68). Lessons: know the scale before averaging; convert, average, convert back; check file formats before trusting a parser; readings are not causes. New family site-wide: LOGARITHMIC UNITS / ENERGY AVERAGING (decibel, Leq, logarithmic, energy average had no prior hits in content/ie or the global dossiers).',
    requiredMentions: [
      '104,596',
      '53.43',
      '55.83',
      '81.3 percent',
      '48.38',
      '50.50',
      '59.18',
      '465 kilometres',
      'D09 PT78',
      'D09 H0V5',
      'D03 P6K7',
      '82,300'
    ],
    sources: [
      { claim: 'Dublin City Council, Ambient Sound Monitoring Network: Drumcondra monitor, 2015 five-minute A-weighted Leq readings (drumcondra2015.zip).', url: 'https://data.smartdublin.ie/dataset/a52fbbe2-1bff-4897-84af-34945f6fc8de/resource/24219dc4-b933-42eb-b1c8-ce25c76d07ed/download/drumcondra2015.zip' },
      { claim: 'Dublin City Council, Dublin Agglomeration Noise Action Plan, Volume 1: decibels on a logarithmic scale; doubling the sound energy adds 3 dB; the Lden formula and its day, evening and night periods; night levels below 50 decibels described as desirable.', url: 'https://www.dublincity.ie/sites/default/files/2021-04/dcc-volume-1-dublin-agglomeration-noise-action-plan-dec-2018_july2023.pdf' },
      { claim: 'Dublin City Council, Drumcondra Library: Millmount Avenue, D09 PT78; coordinates 53.369901, -6.259021; opening hours; ramped access and induction loop.', url: 'https://www.dublincity.ie/libraries/find-library/drumcondra-library' },
      { claim: 'Irish Rail, Drumcondra station: Lower Drumcondra Road, D09 H0V5; staffed 07:00 to 23:00 daily; lifts to both platforms; no bike facilities; routes served.', url: 'https://www.irishrail.ie/en-ie/station/drumcondra' },
      { claim: 'Croke Park: capacity 82,300; All-Ireland football and hurling finals every September; Jones Road, Dublin 3, D03 P6K7.', url: 'https://crokepark.ie/stadium' }
    ],
    rejectedClaims: [
      'Any cause for a loud reading, including any link to Croke Park events: the monitor records level, not source.',
      'The EU directive text for the Lden formula: shown only as an image on EUR-Lex, so the council\'s own plan is quoted instead.',
      'Day-of-week, clock-change and date handling as the lesson: dates belong to the Balbriggan page; handled in code only.',
      'Any claim that Drumcondra breaches a limit: the plan\'s 50-decibel night line describes desirable levels for mapped areas, and the page only reports which side each average falls.',
      'Any population figure for Drumcondra and any census small-area aggregation: owner rule for district pages.'
    ]
  }
};
