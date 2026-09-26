'use strict';
// Perth and Kinross (cg- council area page, UK cluster Phase 7, row 275). One council; Perth city has its own page
// (Soundex lesson) which registers the council census figures, so this page's requiredMentions avoid them. Spine: what day
// of the week was it, and how does a formula know? Anchor (read raw 26 September 2026): Historic Environment Scotland
// LB4489, Category A, Mid Mill, Stanley Mills, including cotton machinery: "Circa 1823-30"; "Upper floors rebuilt following
// fire in 1848"; "Floodmark, dated 7 Oct 1847, 2nd floor string course"; "Probably the oldest cotton spinning machinery in
// Scotland"; "Perhaps the 2nd or 3rd extant iron-framed cotton mill in Scotland". LB4486 (Bell Mill, Category A): "To
// designs of Sir Richard Arkwright ... 1786-7".
// Our model (scratchpad pkr/zeller.py): Zeller's congruence (Gregorian). 7 October 1847: Thursday (datetime agrees). All
// 109,938 days from 1 January 1800 to 31 December 2100 agree with Python datetime. Bug 1 (no January/February shift):
// wrong on 17,832 days, every January and February day, no others. Bug 2 (the -2J form with a C-style remainder): wrong
// on 2,285 days, first 2 March 1800 (result -6); same form with Python's % : 0 wrong. The 13th of the month over 2000-2399:
// Friday 688, Sunday 687, Wednesday 687, Monday 685, Tuesday 685, Thursday 684, Saturday 684 (of 4,800).
// Lesson family: day-of-week algorithms, modular arithmetic, remainder of negatives, exhaustive testing; screened (Zeller,
// day of the week, 13th of the month, negative remainder: 0 hits). Blocked: legislation.gov.uk Calendar Act page 202 (not
// retried); no calendar-change claims made. Flood return periods avoided (Dundrum owns them).
// Place facts: NRS, Scotland's Census 2022 rounded estimates: Perth and Kinross S12000048 150,800; 70,000 households; 28.5
// per square kilometre; 0 to 14 22,100 (14.7 per cent), 65+ 37,300 (24.7 per cent) by our addition. NRS mid-2020
// localities. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'PERTH AND KINROSS', blurb: 'Blairgowrie, Crieff, Auchterarder, Kinross and Pitlochry, and a Stanley Mills lesson on working out the weekday of any date.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-perth-and-kinross',
  code: 'pkr',
  accent: '#30488A',
  accentRationale: 'Perth and Kinross: a river blue for the Tay beside Stanley Mills, picked by the solver (6.99:1 on the darkest paper tint), brighter than the Moray navy and East Renfrewshire blue',
  pageType: 'governorate',
  place: {
    name: 'Perth and Kinross',
    eyebrow: 'Perth and Kinross',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Scotland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Perth', href: '/best-coding-class-in-perth-scotland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Perth and Kinross',
  title: 'Coding Classes in Perth and Kinross | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Perth and Kinross, from Blairgowrie, Crieff and Auchterarder to Kinross, Pitlochry, Alyth and Dunkeld.',
  ogDescription: 'Coding classes for all of Perth and Kinross, and a Stanley Mills project: find the weekday of an 1847 flood with Zeller\'s formula in Python, then test every day to 2100.',
  twitterDescription: 'Perth and Kinross coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'maths-through-coding',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Perth and Kinross',
    description: 'Ability-placed online coding, Python, algorithms and mathematics for children, teenagers and adults across Perth and Kinross, taught live in English.'
  },

  h1: 'Coding classes in Perth and Kinross',
  capsuleQ: 'What are the best coding classes in Perth and Kinross?',
  capsule: 'Perth and Kinross had about 150,800 residents in roughly 70,000 households at the 2022 census, spread across a large rural council area at 28.5 people per square kilometre. Beyond the city of Perth, the main towns are Blairgowrie, Crieff, Auchterarder, Kinross and Scone, with Pitlochry, Alyth, Aberfeldy and Dunkeld among the smaller ones. Lessons are live on video from India, and a free first lesson shows where each learner should start, from P1 to S6 or as an adult. Coding, Python and maths are on offer to everyone from six-year-olds to people of 67, taught alone or among five to ten peers. The council-wide project comes from a floodmark on a cotton mill at Stanley. Stay on, and Perthshire families pay USD 100 each month for a shared class or USD 150 each month for a teacher of their own.',
  lead: 'At Stanley, Historic Environment Scotland lists the Mid Mill of Stanley Mills at Category A and records that it probably holds the oldest cotton spinning machinery in Scotland. Carved on the second-floor string course is a floodmark dated 7 October 1847. The listing does not say what day of the week that was, and neither does the stone. A computer can tell you in a fraction of a second, but how? There is a neat formula, published by Christian Zeller in the 1880s, that turns any date into its weekday with a little whole-number arithmetic. This page\'s project codes it in Python, checks it against every day for three centuries, and hunts down the two bugs that break almost everyone\'s first attempt.',
  wa: 'Hello Modern Age Coders, we are in Perth and Kinross and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Perth and Kinross',
    h2: 'Four ways into coding in Perth and Kinross',
    intro: 'A P2 in Crieff who counts everything, a P6 in Blairgowrie ready for real code, an S4 in Auchterarder heading for National 5, and an adult in Kinross who wants to automate reports. Every one of them opens with a free trial.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with calendars, clocks and counting games.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Remainders, patterns and number puzzles solved by writing code.' },
      { course: 'problem-solving-dsa-masterclass-teens', band: 'Ages 13 to 18', note: 'Algorithms for teenagers, tested systematically rather than by hope.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python for adults from the first line, including working with dates and times.' }
    ]
  },

  sections: [
    {
      id: 'perth-and-kinross', tint: '', eyebrow: 'The council area in figures',
      h2: 'About 150,800 people in Perth and Kinross',
      intro: 'Council totals are rounded first results from the 2022 census, published by National Records of Scotland. Town figures are NRS estimates for mid-2020, a separate series.',
      body: [
        { kind: 'table', caption: 'Perth and Kinross localities above 2,000 people, NRS mid-2020 estimates', head: ['Locality', 'Residents', 'Locality', 'Residents'], rows: [
          ['Perth', '47,350', 'Bridge of Earn', '2,920'],
          ['Blairgowrie', '9,240', 'Pitlochry', '2,880'],
          ['Crieff', '7,280', 'Alyth', '2,370'],
          ['Auchterarder', '5,840', 'Coupar Angus', '2,220'],
          ['Kinross', '5,610', '', ''],
          ['Scone', '5,030', '', '']
        ] },
        { kind: 'p', text: 'At 28.5 residents per square kilometre, Perth and Kinross is well below the Scottish 69.8. Our addition of the census age bands gives 14.7 per cent of residents under 15, a little below Scotland\'s 15.3, and 24.7 per cent aged 65 or older, against 20.1. Part of Kelty also falls inside the council area. We have not looked up Perth and Kinross Council\'s term calendar, so each household simply tells us when school is out.' },
        { kind: 'callout', h3: 'Perth city and exams', p: 'The city has its own page, <a class="cg-inline-link" href="/best-coding-class-in-perth-scotland">Perth</a>, with a different project. For qualifications: <a class="cg-inline-link" href="/national-5-maths-tuition-online">National 5 Maths</a> and <a class="cg-inline-link" href="/higher-computing-science-help">Higher Computing Science</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Perth and Kinross project',
      h2: 'Thursday, 7 October 1847',
      intro: 'One formula, two famous bugs, and a test that covers 109,938 days.',
      body: [
        { kind: 'p', text: 'Zeller\'s congruence works on the day, the month and the year, split into its century and its last two digits. It adds a handful of whole-number quantities and takes the remainder after dividing by 7, which gives a number from 0 to 6: 0 for Saturday, 1 for Sunday and so on. There is one strange rule. January and February are treated as months 13 and 14 of the previous year, because the formula counts from March so that the awkward February leap day falls at the end. The learner codes it in a few lines of Python and asks it about 7 October 1847. The answer is Thursday, and Python\'s own date library agrees.' },
        { kind: 'table', caption: 'Our tests of Zeller\'s formula, every day from 1800 to 2100, 26 September 2026', head: ['Version', 'Days checked', 'Days wrong', 'Which days'], rows: [
          ['Correct formula', '109,938', '0', 'None'],
          ['January and February not shifted', '109,938', '17,832', 'Every January and February day'],
          ['Minus-2J form with a C-style remainder', '109,938', '2,285', 'Scattered, from 2 March 1800'],
          ['Same form with Python\'s remainder', '109,938', '0', 'None']
        ] },
        { kind: 'p', text: 'The first bug is the classic. Forget the January and February shift and the formula is wrong on every one of those days and right on all the others, so testing a handful of dates in summer never finds it. The second is subtler. A popular version of the formula subtracts twice the century instead of adding five times it, which is equivalent in mathematics but can make the total negative. Python\'s remainder of a negative number is still between 0 and 6; the remainder in C, Java and JavaScript keeps the minus sign. Port the formula from one language to another and it returns -6 for 2 March 1800 and is wrong on 2,285 days in three centuries, yet perfect on every date anyone thinks to try by hand.' },
        { kind: 'p', text: 'Exhaustive testing catches both, and the learner can then ask playful questions with confidence. Over a full 400-year cycle of the Gregorian calendar, the 13th of the month falls on a Friday 688 times out of 4,800, slightly more often than on any other day. The cycle repeats exactly every 400 years, so that is a fact, not a sample.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Build a Scratch program that counts forward from a known Sunday to find the weekday of a birthday, then check with a calendar.' },
          { h3: 'Ages 11 to 15', p: 'Code Zeller\'s formula in Python, test it on ten dates, and then on every day of a year.' },
          { h3: 'Ages 15 and up', p: 'Reproduce both bugs, test every day for 300 years against the date library, and explain why the remainder of a negative differs between languages.' }
        ] },
        { kind: 'callout', h3: 'A real floodmark, our arithmetic', p: 'The date on the floodmark comes from the Historic Environment Scotland listing. The weekday, the tests and every count in the table come from our own program, checked against Python\'s date library.' }
      ]
    },
    {
      id: 'stanley-mills', tint: 'deep', eyebrow: 'Why Stanley Mills',
      h2: 'Cotton mills at Stanley',
      intro: 'What the listings for Mid Mill and Bell Mill record.',
      body: [
        { kind: 'table', caption: 'Stanley Mills, HES listings LB4489 (Mid Mill) and LB4486 (Bell Mill), both Category A', head: ['Listing detail', 'What it records'], rows: [
          ['Mid Mill dates', 'Circa 1823 to 1830, extended in the 1830s, upper floors rebuilt after a fire in 1848'],
          ['Floodmark', 'Dated 7 October 1847, on the second-floor string course'],
          ['Machinery', 'Probably the oldest cotton spinning machinery in Scotland'],
          ['Structure', 'Perhaps the second or third surviving iron-framed cotton mill in Scotland'],
          ['Bell Mill', 'To designs of Sir Richard Arkwright, 1786 to 1787'],
          ['Water', 'Tail races from the wheelhouse ran beneath the mills']
        ] },
        { kind: 'p', text: 'Date arithmetic sits inside nearly every system people use: booking sites, school timetables, bank statements, delivery estimates and phone calendars. Date bugs are notorious precisely because they hide in rare cases, the start of the year, a leap day, a negative number. A pupil from Perth and Kinross who has tested every day for three centuries knows that "it worked when I tried it" is not a test.' },
        { kind: 'p', text: 'Historic Environment Scotland and Perth and Kinross Council have no link with us. The listing facts are theirs; the formula tests and any mistakes are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning path',
    h2: 'From counting days to testing algorithms',
    intro: 'Stages are only a guide; the free lesson sets the real starting point.',
    cols: [
      { band: 'P1 to P4', h3: 'Counting and patterns', p: 'Block coding with calendars, clocks and repeating patterns.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Remainders and rules', p: 'Typed Python with division, remainders and simple formulas.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'S3 to S6', h3: 'Algorithms and testing', p: 'Algorithms and thorough testing beside National 5, Higher and Advanced Higher Computing Science.', courses: ['problem-solving-dsa-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Dates and data', p: 'Python for adults, including dates, schedules and data.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and translation',
    h2: 'An AI can translate code between languages in seconds. Will the remainders still match?',
    intro: 'Code that is correct in one language can be quietly wrong in another.',
    p1: 'Ask a chatbot to convert a Python weekday function to JavaScript and it will usually produce clean, plausible code. If the formula relies on Python\'s handling of negative remainders, the translation can be wrong on thousands of dates while passing every example you try.',
    p2: 'A Perth and Kinross learner who has tested every day for three centuries knows to test converted code exhaustively, not by spot checks. That habit is exactly what AI-written code needs.',
    closer: 'Proving a program right, instead of hoping, is the reason Perth and Kinross teenagers should keep learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Lessons from Kinross to Pitlochry, at home',
    intro: 'In a council area this spread out, online lessons remove long evening drives.',
    cells: [
      { h3: 'Learner in control', p: 'The learner types every line; the teacher follows on the shared screen and helps at the right moment.' },
      { h3: 'Scottish stages', p: 'We use P and S stages, National 5, Higher and Advanced Higher, as Perth and Kinross schools do. Lessons are in English.' },
      { h3: 'First lesson free', p: 'A genuine lesson with no charge, then a straight recommendation.' },
      { h3: 'A class of equals', p: 'Every group holds between five and ten learners working at one stage, some from Scotland and some from much further away.' },
      { h3: 'Term time rhythm', p: 'Two lessons a week in term; breaks for school holidays.' },
      { h3: 'Fixed UK time', p: 'Your slot keeps its UK time as the clocks change; teachers in India time adjust instead.' }
    ],
    spec: { title: 'Why groups are not by town', p: 'Five learners at one stage, free at one time, rarely live in one Perthshire town. Grouping by stage across a wider pool gives a pupil in Alyth or Coupar Angus a class that fits.' }
  },

  fees: {
    h2: 'Fees in Perth and Kinross',
    intro: 'Crieff or Kinross, the fee is identical, the same one we charge everywhere outside India.',
    first: 'A complete free lesson, then honest advice.',
    group: 'About eight lessons a month in a group of five to ten.',
    private: 'About eight lessons a month with a teacher to yourself.',
    closer: 'We charge in US dollars and keep no sterling price list. The trial lesson comes first; an invoice only follows once you have chosen a course and a regular weekday. Our pricing page spells out what happens over holidays, after a missed class or on a switch of format.'
  },

  reviewsH2: 'Our Google reviews',

  book: {
    h2: 'Book a free Perth and Kinross lesson',
    intro: 'Give us an age or school stage and a hobby or two, and we will shape the free lesson around it: perhaps a Scratch calendar game, a Python program, or the weekday formula on this page.',
    success: 'Thank you. Your Perth and Kinross request has arrived.'
  },

  faq: {
    h2: 'Perth and Kinross questions',
    intro: 'The council area, the Stanley Mills project and practical points.',
    items: [
      { q: 'What is the population of Perth and Kinross?', a: 'Around 150,800, living in about 70,000 households, per the NRS-rounded figures from the 2022 census.' },
      { q: 'What are the largest towns after Perth?', a: 'NRS mid-2020 estimates: Blairgowrie 9,240, Crieff 7,280, Auchterarder 5,840, Kinross 5,610 and Scone 5,030.' },
      { q: 'What is the Stanley Mills project?', a: 'Learners code Zeller\'s congruence in Python, find that the 1847 floodmark date was a Thursday, and test the formula on all 109,938 days from 1800 to 2100 to expose two classic bugs.' },
      { q: 'What is Zeller\'s congruence?', a: 'A formula that turns a date into its day of the week using whole-number arithmetic and a remainder after dividing by 7.' },
      { q: 'What does the Stanley Mills floodmark record?', a: 'Historic Environment Scotland notes a floodmark dated 7 October 1847 on the second-floor string course of Mid Mill.' },
      { q: 'Are lessons held in Perth?', a: 'All lessons are online, so learners join from home anywhere in Perth and Kinross.' },
      { q: 'Do you teach National 5 Maths?', a: 'Yes, and Higher Maths and Computing Science too. We teach understanding and never promise grades.' },
      { q: 'What ages do you teach?', a: 'From 6 to 67: block coding for young children, Python and exam work for secondary pupils, and Python for adults at any level.' },
      { q: 'How much are lessons?', a: 'The first is free, then USD 100 a month in a group or USD 150 a month one-to-one.' },
      { q: 'Do you stop for school holidays?', a: 'Holidays mean a break. Tell us the weeks your Perthshire school is closed and no lessons are booked for them.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'Around Perth and Kinross',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-perth-scotland">Perth</a> page tests Soundex on a Walter Scott novel, <a class="cg-inline-link" href="/coding-classes-in-angus">Angus</a> checks every quotation mark in Peter Pan, and <a class="cg-inline-link" href="/coding-classes-in-fife">Fife</a> solves a Forth Bridge frame. Other councils are listed on the <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest.',
    waLabel: 'WhatsApp the team'
  },

  footerHeading: 'Perth and Kinross and nearby',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/best-coding-class-in-perth-scotland', label: 'Perth' },
    { href: '/national-5-maths-tuition-online', label: 'National 5 Maths' }
  ],

  personalityCss: `
.cg-root.cg-pkr .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.1vw, 2.5rem); }
.cg-root.cg-pkr .cg-hero h1 { font-weight: 700; letter-spacing: -0.023em; line-height: 1.05; }
.cg-root.cg-pkr .cg-capsule { border-left: 5px double var(--cg-accent); padding-left: 1.15rem; }
.cg-root.cg-pkr .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-pkr .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.019em; }
.cg-root.cg-pkr .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-pkr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-pkr .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-pkr .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-pkr .cg-callout { border-left-width: 5px; border-radius: 0 7px 7px 0; }
`,

  dossier: {
    curriculumAuthority: 'Perth and Kinross (S12000048), one council. NRS, Scotland\'s Census 2022 first results, rounded population estimates: 150,800 (females 77,300, males 73,500); households 70,000; density 28.5 per square kilometre (Scotland 69.8); ages 0 to 14 22,100 (14.7 per cent), 65+ 37,300 (24.7 per cent) by our addition (Scotland 15.3, 20.1). NRS mid-2020 localities: Perth 47,350; Blairgowrie 9,240; Crieff 7,280; Kelty (part) 6,760; Auchterarder 5,840; Kinross 5,610; Scone 5,030; Bridge of Earn 2,920; Pitlochry 2,880; Alyth 2,370; Coupar Angus 2,220. HES LB4489 (Category A, added 09/06/1981), Mid Mill, Stanley Mills, parish Auchtergaven: "Circa 1823-30"; "Upper floors rebuilt following fire in 1848"; "Floodmark, dated 7 Oct 1847, 2nd floor string course"; "Probably the oldest cotton spinning machinery in Scotland"; "Perhaps the 2nd or 3rd extant iron-framed cotton mill in Scotland". HES LB4486 (Category A), Bell Mill: "To designs of Sir Richard Arkwright ... 1786-7"; tail race and wheelhouse. Aberfeldy and Dunkeld named as places only (Dunkeld Bridge LB5620 is a Perth and Kinross listing). Zeller published his congruence in the 1880s (general knowledge).',
    localProject: 'Zeller (Gregorian, h = 0 Saturday). 1847-10-07 Thursday. 1800-01-01 to 2100-12-31: 109,938 days, 0 wrong. No Jan/Feb shift: 17,832 wrong (all Jan and Feb days, 100 per cent of them). -2J form with C-style fmod: 2,285 wrong, first 1800-03-02 (-6); with Python %: 0 wrong. 13th of month 2000-2399: Fri 688, Sun 687, Wed 687, Mon 685, Tue 685, Thu 684, Sat 684. AI angle: translating code across languages changes negative remainders. Lesson family: day-of-week algorithm, modular arithmetic, exhaustive testing.',
    requiredMentions: [
      'Auchterarder',
      'Bridge of Earn',
      'Alyth',
      'Coupar Angus',
      'Aberfeldy',
      'Dunkeld',
      'Stanley Mills',
      'Mid Mill',
      'LB4489',
      'floodmark',
      'Zeller'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Population Estimates for Settlements and Localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'Historic Environment Scotland, LB4489: Mid Mill, Stanley Mills, including cotton machinery.', url: 'https://portal.historicenvironment.scot/designation/LB4489' },
      { claim: 'Historic Environment Scotland, LB4486: Bell Mill, or West Mill, Stanley Mills.', url: 'https://portal.historicenvironment.scot/designation/LB4486' }
    ],
    rejectedClaims: [
      'British calendar change of 1752: legislation.gov.uk returned 202, not retried; no claim made.',
      'Flood return periods and Tay flow records: another page owns return periods; NRFA data read but not used.',
      'How high the 1847 flood reached or what it damaged: not in the listing, not claimed.',
      'That Stanley Mills is open to visitors or its opening times: not claimed.',
      'Named schools and school term dates: none named or read.',
      'Distances or directions between towns: not claimed.'
    ]
  }
};
