'use strict';
// East Sussex (cg- county index, UK cluster Phase 7, row 232). Ceremonial East Sussex: five districts under East Sussex
// County Council plus Brighton and Hove. Spine: the sun is not a clock. Observatory Science Centre, Herstmonceux (read
// raw 26 September 2026): the Royal Observatory "was founded by King Charles II on 4th March 1675"; "Over 70 possible
// sites for the new observatory were considered" and a shortlist of five drawn up; "The final decision was made in
// April 1946" to move to Herstmonceux; the Equatorial Group was built "to house three reflecting and three refracting
// telescopes in the six green domes", completed in 1958; in 1990 the decision was taken to move again, to Cambridge;
// the science centre has operated there since 1995. Location: observatory postcode BN27 1RN, ONS postcode directory
// via postcodes.io, 50.869557 N, 0.338398 E. NOAA Solar Calculator notes: its calculations follow Jean Meeus,
// Astronomical Algorithms. Our run (scratchpad esx2/eot.py, NOAA spreadsheet formulas at 12:00 UT, 2027): longitude
// puts solar noon 1.35 minutes ahead of Greenwich; earliest solar noon 11:42:09 GMT on 3 November (equation of time
// +16.49 min); latest 12:12:52 GMT on 11 February (-14.22); span 30.72 minutes; equation of time crosses zero near 16
// April, 13 June, 2 September and 26 December; smaller turns on 14 May (+3.64) and 26 July (-6.56); on UK summer-time
// clocks solar noon runs from 12:42 (30 October) to 13:05 (26 July). Lesson family: equation of time and solar noon
// (the sun against clock time), computed from published formulas; screened (equation of time: 0 hits; Edinburgh uses
// Meeus for sunrise and sunset, a different teaching point).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (822,949, our sum of six councils); ONS built-up
// areas with our OA check (Haywards Heath and Burgess Hill excluded, West Sussex). Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'EAST SUSSEX', blurb: 'Six councils, sixteen towns, and the old Royal Greenwich Observatory at Herstmonceux as the setting for a lesson on why the sun runs fast and slow.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-east-sussex',
  code: 'esu',
  accent: '#4E5C32',
  accentRationale: 'East Sussex: an observatory-dome green from the solver (5.83:1 on the darkest paper tint), yellower than the Surrey forest green',
  pageType: 'governorate',
  place: {
    name: 'East Sussex',
    eyebrow: 'County of East Sussex',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'South East England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Brighton and Hove', href: '/best-coding-class-in-brighton-and-hove' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'East Sussex',
  title: 'Coding Classes in East Sussex | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across East Sussex, from Brighton and Hove, Eastbourne and Hastings to Bexhill, Seaford, Hailsham and Lewes.',
  ogDescription: 'Coding classes for every East Sussex town, and a Herstmonceux project on solar noon: why a sundial is sixteen minutes fast in November, computed in Python.',
  twitterDescription: 'East Sussex coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'complete-high-school-mathematics-mastery',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for East Sussex',
    description: 'Ability-placed online coding, Python, mathematics and AI for children, teenagers and adults across Brighton and Hove and the five East Sussex districts, taught live in English.'
  },

  h1: 'Coding classes in East Sussex',
  capsuleQ: 'What are the best coding classes in East Sussex?',
  capsule: 'East Sussex, counted as a ceremonial county, is Brighton and Hove plus five districts, 822,949 people at the 2021 Census. Brighton and Hove is by far the largest place; then come Eastbourne and Hastings, Bexhill-on-Sea, Seaford, Hailsham and Crowborough, and a string of Weald villages. Wherever a learner lives, we teach the same way: live over video with a teacher based in India, grouped by ability and not by age, for anyone from 6 to 67, either with five to ten classmates or with a teacher to themselves. Programming, Python and maths are all taught. The East Sussex project comes from the observatory at Herstmonceux. Start with a free lesson; after that, group learning is USD 100 a month and private learning USD 150 a month.',
  lead: 'In April 1946 the Royal Observatory, founded at Greenwich in 1675, chose Herstmonceux in East Sussex for its new home, after considering more than seventy sites; its six green domes still stand there. An observatory exists to keep careful track of the sky, and one of the first things it reveals is that the sun is a poor timekeeper. The moment the sun is highest over Herstmonceux drifts back and forth through the year by over half an hour on the clock. This page\'s project calculates that drift for every day of 2027 using the formulas NOAA publishes, and discovers why a sundial can be more than sixteen minutes fast in November and fourteen minutes slow in February.',
  wa: 'Hello Modern Age Coders, please could I book a free lesson for a learner in East Sussex?',

  picks: {
    eyebrow: 'Courses for East Sussex',
    h2: 'What East Sussex learners start with',
    intro: 'A seven-year-old in Battle who builds clocks and timers in Scratch, an eleven-year-old in Peacehaven who asks why summer evenings are long, a Year 11 in Lewes aiming at A level Maths, and a graduate in Brighton going back to university-level maths. Four starts, one free lesson each.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch projects with timers and moving suns, where a child first sees time as something a program can measure.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'First typed Python, where dates and times become values a loop can step through one day at a time.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Algebra, trigonometry, pre-calculus and calculus for secondary students, the maths behind the sun\'s path.' },
      { course: 'college-mathematics-complete-masterclass', band: 'Adults', note: 'University-level maths for adults, from calculus and linear algebra onwards, taught live.' }
    ]
  },

  sections: [
    {
      id: 'east-sussex', tint: '', eyebrow: 'The county in figures',
      h2: 'Six councils, 822,949 people, and a city on the coast',
      intro: 'Council totals are 2021 Census figures from Nomis. For the towns we use ONS built-up areas and checked each one against our own sum of census output areas.',
      body: [
        { kind: 'table', caption: 'Brighton and Hove and the five East Sussex districts, usual residents at Census 2021, largest first', head: ['Authority', 'People counted', 'Towns within'], rows: [
          ['Brighton and Hove', '277,103', 'Brighton and Hove'],
          ['Wealden', '160,152', 'Hailsham, Crowborough, Uckfield, Polegate, Heathfield'],
          ['Eastbourne', '101,686', 'Eastbourne'],
          ['Lewes', '99,905', 'Seaford, Lewes, Peacehaven, Newhaven'],
          ['Rother', '93,108', 'Bexhill-on-Sea, Battle'],
          ['Hastings', '90,995', 'Hastings']
        ] },
        { kind: 'p', text: 'Brighton and Hove holds a third of the county on its own. The rest is a coastline of mid-sized towns, Eastbourne, Hastings, Bexhill and Seaford, and a large rural Weald behind them, where Wealden district has more people than any other East Sussex district but no town above 23,000. Eastbourne\'s built-up area reaches into Wealden, and Hastings\' into Rother.' },
        { kind: 'table', caption: 'East Sussex built-up areas above 5,000 residents at the 2021 Census; Haywards Heath and Burgess Hill are West Sussex towns and are left out', head: ['Town', 'Residents', 'Town', 'Residents'], rows: [
          ['Brighton and Hove', '277,105', 'Peacehaven', '15,700'],
          ['Eastbourne', '99,180', 'Uckfield', '15,035'],
          ['Hastings', '91,490', 'Newhaven', '12,850'],
          ['Bexhill-on-Sea', '43,755', 'Polegate', '10,065'],
          ['Seaford', '23,865', 'Heathfield', '7,670'],
          ['Hailsham', '22,550', 'Lower Willingdon', '6,130'],
          ['Crowborough', '21,990', 'Battle', '5,330'],
          ['Lewes', '16,060', 'Stone Cross', '5,035']
        ] },
        { kind: 'p', text: 'All sixteen agree with our own count to within rounding and lie inside the county. The ONS lists small slivers of Haywards Heath and Burgess Hill against Lewes district, a few hundred people each, but both towns are in West Sussex. School calendars are set by East Sussex County Council, Brighton and Hove and individual academies; we did not read them, and lesson breaks are agreed with each family.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The East Sussex project',
      h2: 'Why the sun is not a clock, day by day',
      intro: 'NOAA\'s published solar formulas, one position in East Sussex, and a Python loop over every day of 2027.',
      body: [
        { kind: 'p', text: 'Solar noon is the moment the sun is highest in the sky. If the Earth moved round the sun in a perfect circle with its axis upright, solar noon at Greenwich would fall at 12:00 GMT every day. It does not, for two reasons: the orbit is an ellipse, so the Earth speeds up and slows down, and the axis is tilted. The combined effect is called the equation of time. NOAA\'s solar calculator publishes the formulas, which follow Jean Meeus\'s Astronomical Algorithms, and the learner types them into Python and runs them for every day of 2027.' },
        { kind: 'p', text: 'There is one more ingredient, which is where you stand. Herstmonceux, taking the ONS postcode directory coordinates for the observatory postcode BN27 1RN, is 0.338 degrees east of Greenwich. The Earth turns one degree every four minutes, so the sun reaches its highest point over Herstmonceux about 1.35 minutes before it does over Greenwich. The program adds that shift to the equation of time and prints solar noon in GMT for each day.' },
        { kind: 'table', caption: 'Our run of 26 September 2026: solar noon at Herstmonceux in 2027, from NOAA\'s formulas', head: ['Moment', 'Date', 'Solar noon', 'Sun compared with the clock'], rows: [
          ['Latest solar noon', '11 February', '12:12:52 GMT', '14.2 minutes slow'],
          ['First time sun and clock agree', 'About 16 April', 'About 11:58:39 GMT', 'Level'],
          ['A small fast spell peaks', '14 May', '11:55:00 GMT', '3.6 minutes fast'],
          ['A small slow spell peaks', '26 July', '12:05:13 GMT', '6.6 minutes slow'],
          ['Earliest solar noon', '3 November', '11:42:09 GMT', '16.5 minutes fast']
        ] },
        { kind: 'p', text: 'From its latest in February to its earliest in November, solar noon moves by 30.7 minutes. That is why an honest sundial is never simply right: in early November it runs more than a quarter of an hour ahead of any watch, and in mid-February almost a quarter of an hour behind. The two humps in the curve come from the two causes working together, the ellipse giving one wave a year and the tilt giving two, and a learner who plots each part separately can watch them add up.' },
        { kind: 'p', text: 'Then there are the clocks themselves. During UK summer time the country\'s clocks run an hour ahead, so on those clocks the sun is highest over Herstmonceux somewhere between 12:42 at the end of October and 13:05 in late July. "Noon" on a watch, "noon" by the sun and "noon" at Greenwich are three different moments, and a program that handles times has to know which one it means.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 10 to 13', p: 'Put a stick in the ground and mark its shortest shadow on a few days, then write down the clock time and see that it moves.' },
          { h3: 'Ages 13 to 16', p: 'Type in NOAA\'s formulas, compute solar noon for every day of the year, and plot the curve with its two humps.' },
          { h3: 'Ages 16 and up', p: 'Separate the ellipse and tilt effects, plot each on its own, and show that together they give the equation of time.' }
        ] },
        { kind: 'callout', h3: 'What the numbers are', p: 'They come from NOAA\'s published formulas, which NOAA says are theoretically accurate to about a minute for sunrise and sunset, run by us at noon universal time each day; the position is the observatory postcode\'s centre in the ONS directory. Real sundials also depend on how they were set up, and none of this describes the observatory\'s own instruments.' }
      ]
    },
    {
      id: 'herstmonceux', tint: 'deep', eyebrow: 'Why Herstmonceux',
      h2: 'Where the Royal Greenwich Observatory moved to escape London\'s skies',
      intro: 'The East Sussex link, from the Observatory Science Centre\'s history pages.',
      body: [
        { kind: 'table', caption: 'The Royal Observatory and Herstmonceux, as the Observatory Science Centre tells it', head: ['When', 'What happened'], rows: [
          ['4th March 1675', 'The Royal Observatory was founded by King Charles II, with John Flamsteed as the first Astronomer Royal.'],
          ['1930s to 1940s', 'London\'s smoke and lights had spoiled the sky; over 70 possible sites were considered and a shortlist of five drawn up.'],
          ['April 1946', 'The decision was made to move to Herstmonceux, as the Royal Greenwich Observatory, Herstmonceux.'],
          ['1958', 'The Equatorial Group was completed: three reflecting and three refracting telescopes in six green domes.'],
          ['1990 and 1995', 'The observatory moved again, to Cambridge; the science centre has operated in the former observatory since 1995.']
        ] },
        { kind: 'p', text: 'The observatory moved to Sussex because a telescope is only as good as the sky it looks through, a problem of noise that every data scientist recognises. And an observatory\'s daily work was timekeeping: measuring exactly when the sun and stars crossed the meridian. The equation of time on this page is the oldest example of a correction that turns a raw measurement into a trustworthy one.' },
        { kind: 'p', text: 'We have no link with the Observatory Science Centre, Science Projects, NOAA or any East Sussex council, and this page claims none. The history and formulas are theirs; the calculation and any error in it are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-brighton-and-hove">Brighton and Hove</a> has a page of its own, <a class="cg-inline-link" href="/coding-classes-in-kent">Kent</a> lies to the east and <a class="cg-inline-link" href="/coding-classes-in-surrey">Surrey</a> to the north-west.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Step by step',
    h2: 'From a shadow stick to a year of solar noons',
    intro: 'The free lesson finds the right starting level; school year is only a hint.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Time you can see', p: 'Scratch timers, clocks and moving suns, where time turns into something a program can count.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'Dates in a loop', p: 'Python that steps through the days of a year, prints each one and spots patterns in the results.', courses: ['python-ai-kids-masterclass', 'comprehensive-middle-school-mathematics-mastery'] },
      { band: 'Ages 13 to 18', h3: 'Trigonometry at work', p: 'Sines, cosines and angles used for real, from the sun\'s path to graphics and physics simulations.', courses: ['complete-high-school-mathematics-mastery', 'a-level-maths-course-pure-mechanics-statistics'] },
      { band: 'Ages 18 to 67', h3: 'Mathematics properly', p: 'University-level maths for adults, with Python used to check every result numerically.', courses: ['college-mathematics-complete-masterclass', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and time',
    h2: 'An AI can tell you when noon is. Which noon does it mean?',
    intro: 'Clock noon, solar noon and summer-time noon are different moments, and software mixes them up constantly.',
    p1: 'Ask a chatbot when the sun is highest in Sussex and it may say "around 12 noon" or give a single time without saying which day or which clock. Ask it to write code for solar noon and it will often produce a formula that ignores the equation of time, or applies summer time twice. Time handling is one of the richest sources of bugs in all software, and generated code inherits every one of them.',
    p2: 'A student from East Sussex who has computed 11:42:09 on 3 November and 12:12:52 on 11 February knows to ask which noon, which time zone, which day and which formula. Those questions catch errors in scheduling apps, solar-panel software, flight planners and anything else that has to agree with the sky or the clock.',
    closer: 'So an East Sussex teenager should learn to code in 2026 to know that "12:00" is a claim that needs checking, not a fact.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Practicalities',
    h2: 'Crowborough to Seaford with no trip to make',
    intro: 'Coast and Weald are far apart and poorly joined by evening buses. Online lessons remove the question.',
    cells: [
      { h3: 'Taught at home', p: 'A bedroom in Uckfield, a kitchen in Newhaven, a desk in Heathfield: the learner codes and the teacher watches the same screen.' },
      { h3: 'School words, in English', p: 'Year groups, GCSE choices and A levels are named as East Sussex schools name them, and all teaching is in English.' },
      { h3: 'Nothing to pay at first', p: 'A full first lesson with real work and a clear recommendation. We never ask for card details at that stage.' },
      { h3: 'Learners who match you', p: 'Groups are built from people at your exact stage, five to ten of them, drawn from all over, so there is a class that fits at an hour that suits.' },
      { h3: 'Breaks that follow school', p: 'Two lessons a week is typical, pausing when your own school closes for a holiday.' },
      { h3: 'Every time in UK time', p: 'India, our teachers\' base, runs 4.5 hours ahead of UK summer time and 5.5 hours ahead of Greenwich Mean Time; we always quote UK times.' }
    ],
    spec: { title: 'Why groups follow level, not town', p: 'One city and fifteen smaller towns spread between coast and Weald mean few places have enough learners at the same stage on the same evening. Level-based groups let a Polegate learner and a Brighton learner share a class.' }
  },

  fees: {
    h2: 'Fees in East Sussex',
    intro: 'The same fees in every East Sussex town and every country apart from India.',
    first: 'A full lesson of genuine work, with a recommended level and course at the end.',
    group: 'About eight lessons a month, in a group of five to ten at the same level.',
    private: 'About eight lessons a month, one teacher and one learner.',
    closer: 'All families outside India are charged in US dollars and we have no pound prices. You pay only after the free lesson has agreed a course and a weekly time; how pausing, missed lessons and changes between group and private work is set out on the pricing page.'
  },

  reviewsH2: 'Google reviews in families\' words',

  book: {
    h2: 'Book a free first lesson',
    intro: 'Share an age or school year and one interest. The first lesson could be a Scratch timer, a first Python loop through the calendar, or the solar-noon project on this page.',
    success: 'Thank you. Your East Sussex request has reached us.'
  },

  faq: {
    h2: 'East Sussex questions',
    intro: 'About the county, the Herstmonceux project and how we teach.',
    items: [
      { q: 'How many people live in East Sussex?', a: 'Brighton and Hove and the five East Sussex districts had 822,949 usual residents at the 2021 Census, from ONS figures on Nomis. Brighton and Hove alone had 277,103.' },
      { q: 'What are the largest towns in East Sussex?', a: 'By ONS built-up area: Brighton and Hove 277,105, Eastbourne 99,180, Hastings 91,490, Bexhill-on-Sea 43,755 and Seaford 23,865. The page lists all sixteen East Sussex towns above five thousand.' },
      { q: 'What is the solar noon project?', a: 'Learners use NOAA\'s published formulas to calculate when the sun is highest over Herstmonceux on every day of 2027. It ranges from 11:42:09 GMT on 3 November to 12:12:52 GMT on 11 February.' },
      { q: 'What is the equation of time?', a: 'The difference between time by the sun and time by an evenly running clock. It comes from the Earth\'s elliptical orbit and tilted axis, and reaches about 16 minutes in early November.' },
      { q: 'Why is the Royal Greenwich Observatory linked to East Sussex?', a: 'According to the Observatory Science Centre, the observatory decided in April 1946 to move to Herstmonceux, where its six green domes were completed in 1958; it moved again, to Cambridge, from 1990.' },
      { q: 'Is there a classroom in Brighton or Eastbourne?', a: 'No. All teaching is live online, so a learner in Battle and one in Hove can be in the same class without travelling.' },
      { q: 'What ages do you teach?', a: 'Six to sixty-seven. Scratch for young children, typed Python from about ten, maths and programming for teenagers, and maths or Python for adults. The free lesson sets the level.' },
      { q: 'Do you teach maths as well as coding?', a: 'Yes, from middle school maths through GCSE and A level to university-level mathematics for adults, taught live.' },
      { q: 'How much are lessons?', a: 'Nothing for the first lesson. Carrying on is USD 100 a month in a group or USD 150 a month privately; there is no registration fee and no minimum term.' },
      { q: 'When are East Sussex school holidays?', a: 'East Sussex County Council, Brighton and Hove and academies set their own dates. We arrange lesson breaks around your school\'s calendar.' }
    ]
  },

  next: {
    eyebrow: 'Explore the UK',
    h2: 'Pages beyond East Sussex',
    html: 'See the <a class="cg-inline-link" href="/best-coding-class-in-brighton-and-hove">Brighton and Hove</a> page for the city, or county pages for <a class="cg-inline-link" href="/coding-classes-in-kent">Kent</a> and <a class="cg-inline-link" href="/coding-classes-in-surrey">Surrey</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists every other page.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'East Sussex and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-brighton-and-hove', label: 'Brighton and Hove' },
    { href: '/coding-classes-in-kent', label: 'Kent' }
  ],

  personalityCss: `
.cg-root.cg-esu .cg-hero-grid { align-items: end; gap: clamp(1.1rem, 3vw, 2.7rem); }
.cg-root.cg-esu .cg-hero h1 { font-weight: 700; letter-spacing: -0.024em; line-height: 1.05; }
.cg-root.cg-esu .cg-capsule { border-left: 5px double var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-esu .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-esu .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.018em; }
.cg-root.cg-esu .cg-table caption { font-weight: 600; font-style: italic; letter-spacing: 0.01em; }
.cg-root.cg-esu .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-esu .cg-table th { letter-spacing: 0.05em; text-transform: uppercase; }
.cg-root.cg-esu .cg-ladder-col { border-top: 4px double var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-esu .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'East Sussex (ceremonial: five districts under East Sussex County Council plus Brighton and Hove). ONS Census 2021 TS001 via Nomis: Brighton and Hove 277,103; Wealden 160,152; Eastbourne 101,686; Lewes 99,905; Rother 93,108; Hastings 90,995; total 822,949 (our sum). ONS Census 2021 built-up areas (published; checked with our OA sums): Brighton and Hove 277,105; Eastbourne 99,180 (Eastbourne, Wealden); Hastings 91,490 (Hastings, Rother); Bexhill-on-Sea 43,755; Seaford 23,865; Hailsham 22,550; Crowborough 21,990; Lewes 16,060; Peacehaven 15,700; Uckfield 15,035; Newhaven 12,850; Polegate 10,065; Heathfield 7,670; Lower Willingdon 6,130; Battle 5,330; Stone Cross 5,035. Excluded: Haywards Heath (407 in Lewes), Burgess Hill (863 in Lewes). Observatory Science Centre, History: "The Royal Observatory was founded by King Charles II on 4th March 1675 when John Flamsteed was appointed by royal warrant"; "Over 70 possible sites for the new observatory were considered"; shortlist of five; "The final decision was made in April 1946 - it was announced that the Observatory would be moving to Herstmonceux"; "The building was constructed to house three reflecting and three refracting telescopes in the six green domes"; "the work was completed in 1958"; "in 1990, the decision was taken to move the Observatory again, this time to a new site at Cambridge". About us: operating "in the former home of The Royal Greenwich Observatory since 1995". Postcode BN27 1RN (ONS postcode directory via postcodes.io): 50.869557, 0.338398. NOAA Solar Calculator details: calculations "based on equations from Astronomical Algorithms, by Jean Meeus"; sunrise and sunset "theoretically accurate to within a minute" between plus or minus 72 degrees latitude.',
    localProject: 'Equation of time and solar noon. NOAA spreadsheet formulas (geometric mean longitude, anomaly, eccentricity, obliquity with nutation term, y = tan^2(eps/2)), evaluated at 12:00 UT for each day of 2027; solar noon (min after 0h GMT) = 720 - 4 x 0.338398 - EoT. Longitude shift 1.35 min. Earliest solar noon 3 November 11:42:09 GMT (EoT +16.49); latest 11 February 12:12:52 GMT (EoT -14.22); span 30.72 min. EoT sign changes near 16 April, 13 June, 2 September, 26 December; local extremes 14 May +3.64 (11:55:00), 26 July -6.56 (12:05:13). UK summer time (28 March to 31 October 2027): solar noon on clocks 12:42:16 (30 October) to 13:05:13 (26 July). Page states numbers come from NOAA formulas run by us, not from the observatory\'s instruments. AI angle: generated time code ignores the equation of time or applies summer time twice. Lesson family: equation of time and solar noon; distinct from Edinburgh (sunrise and sunset with Meeus).',
    requiredMentions: [
      '822,949',
      '4th March 1675',
      'six green domes',
      'April 1946',
      'over 70 possible sites',
      '11:42:09',
      '12:12:52',
      'Lower Willingdon',
      'Stone Cross',
      'BN27 1RN'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for Brighton and Hove and the five East Sussex districts, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for East Sussex towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Observatory Science Centre: history of the Royal Observatory and its move to Herstmonceux.', url: 'https://www.the-observatory.org/history' },
      { claim: 'Observatory Science Centre: operating in the former Royal Greenwich Observatory since 1995.', url: 'https://www.the-observatory.org/about-us' },
      { claim: 'NOAA Solar Calculator details: formulas after Meeus, stated accuracy.', url: 'https://gml.noaa.gov/grad/solcalc/calcdetails.html' },
      { claim: 'ONS postcode directory via postcodes.io: BN27 1RN coordinates.', url: 'https://postcodes.io/' }
    ],
    rejectedClaims: [
      'The exact year the observatory staff moved into Herstmonceux: the history page gives the decision date (April 1946) and the domes\' completion (1958), so no move-in year is claimed.',
      'Haywards Heath and Burgess Hill as East Sussex towns: both lie in West Sussex.',
      'Sundial designs at the observatory: not read at a primary source; the project uses formulas only.',
      'East Sussex school term dates: set by the county council, Brighton and Hove and academies; none read.',
      'Named East Sussex schools: none is named.',
      'The precise accuracy of our solar noon times: NOAA states accuracy for sunrise and sunset; our noon times are presented to the second as computed values, not as measured ones.'
    ]
  }
};
