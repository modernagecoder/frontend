'use strict';
// Rathmines, Dublin 6 (cg- district page, Ireland cluster, Phase 6). Named sources only (owner
// rule for districts), read 20 September 2026: Dublin City Council open data "Libraries November
// Adult Fiction Issues & Renewals List DCC" (data.smartdublin.ie, November 2012, one row per
// issue or renewal: branch, date, author, title, transaction); Dublin City Council's Rathmines
// Library page; the Dublin Literary Award's own site; the Stella Cinema's own site; Leinster
// Cricket Club's own site; the EPA's AirQuality.ie Station 22 page. Spine: location quotient and
// the small-count trap in ratio rankings. Scratchpad rmn/lq.js and rmn/extra.js.
// 43,295 rows (28,745 ISSU, 14,550 RENW), 22 branches; Rathmines 3,661 (2,694 ISSU, 967 RENW),
// share 8.46% (max LQ 11.83). Even the dogs: 142 network, 34 Rathmines, expected 12.0, LQ 2.83,
// P(X>=34) 2.30e-8 (about 1 in 43 million), 18 branches; issues only: Rathmines share 9.37%,
// 27 of 84, expected 7.9, LQ 3.43. Authors (blank excluded): 4,445 in network, 1,383 at
// Rathmines; 153 at LQ max (119 on one loan, 28 on two, 6 on 3+, incl. Knausgjard Karl Ove 7/7);
// with >= 20 network loans 483 authors: James Henry 11/22 (LQ 5.91, five titles), Mitchell David
// 14/29 (5.71, five titles); Austen Jane 0/52 (expected 4.4, P(0) 1.0%). Blank author: 444 rows
// network, 43 Rathmines (anthologies). EPA-22 is NOT used as a dataset here (EPA already twice).

module.exports = {
  clusterName: 'Ireland',
  hub: { group: 'area', tag: 'RATHMINES', blurb: 'A month of library loans, one book borrowed at nearly three times the branch\'s share, and why ratio rankings need a floor.' },
  market: { iso: 'IE', dial: '+353', name: 'Ireland', locale: 'en_IE', geoRegion: 'IE', phoneLabel: 'Irish mobile number', phonePlaceholder: '87 123 4567', gradeLabel: 'Class, year or age' },
  slug: 'coding-classes-in-rathmines-dublin',
  code: 'rmn',
  accent: '#491228',
  accentRationale: 'Rathmines: a library-binding burgundy from the widened solver search, clear of the Letterkenny and Mallow wines',
  pageType: 'district',
  place: {
    name: 'Rathmines',
    eyebrow: 'Rathmines, Dublin 6',
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
    { label: 'Rathfarnham', href: '/coding-classes-in-rathfarnham-dublin' }
  ],
  routeLabel: 'Rathmines, Dublin 6, Ireland',
  title: 'Coding Classes in Rathmines, Dublin | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths classes for Rathmines learners aged 6 to 67, in small groups at one level or one to one. Your first lesson costs nothing.',
  ogDescription: 'Coding and AI classes for Rathmines, with a data project on a month of library loans and why a ratio ranking needs a minimum count.',
  twitterDescription: 'Live online coding, Python, AI and maths for Rathmines, ages 6 to 67. First lesson free.',
  ogImageCourse: 'data-and-ai-analytics-for-non-programmers-course',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in Rathmines',
    description: 'Online coding, Python, AI, data and mathematics for children, teenagers and adults in Rathmines, taught live in English to small groups at one level or one to one.'
  },

  h1: 'Coding classes in Rathmines',
  capsuleQ: 'What are the best coding classes in Rathmines?',
  capsule: 'Rathmines learners join a live video lesson led by a teacher, in a small group at one level or on their own, usually twice a week, and the classes take anyone from six years old to sixty-seven. There is no journey to make. The first lesson is free; from then on it is USD 100 a month in a group, or USD 150 a month taught one to one.',
  lead: 'In November 2012 Dublin City Council\'s libraries logged 43,295 adult fiction loans and renewals, and Rathmines Library handled 3,661 of them, 8.46 percent. One novel broke that pattern. Of the 142 times Jon McGregor\'s Even the dogs went out across the city, 34 were at Rathmines, where its ordinary share would predict 12. Comparing a branch\'s share of one book with its share of everything is a standard tool with a well-known trap, and this page teaches both: the ratio, and why a list ranked by it needs a minimum count before it means anything.',
  wa: 'Hello Modern Age Coders, I would like to book a free coding lesson for a learner in Rathmines.',

  picks: {
    eyebrow: 'Courses for Rathmines',
    h2: 'Four first courses for Rathmines',
    intro: 'The age band is a starting point; the teacher checks the level in the free first lesson and moves the learner to a better-fitting course if needed.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Blocks and tallies: counting which books one class borrows and comparing it with the whole school.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Shares, ratios and fair comparisons, worked through in code.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Python with a real library file: counting, turning two totals into a ratio, and testing what chance alone would produce.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'College and adult', note: 'For adults who compare branches, shops or regions and need to know when a high ratio is real.' }
    ]
  },

  sections: [
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'More than its share: what Rathmines borrowed out of proportion',
      intro: 'Dublin City Council published every adult fiction issue and renewal at its libraries for November 2012, one row per loan, from 22 branches. There are no borrower details in the file, only the branch, date, author, title and whether it was a new issue or a renewal.',
      body: [
        { kind: 'table', caption: 'Rathmines against the whole network, November 2012', head: ['Book or author', 'Loans across the network', 'At Rathmines (expected)', 'Ratio'], rows: [
          ['Even the dogs, Jon McGregor', '142', '34 (12.0)', '2.83'],
          ['Henry James, five titles', '22', '11 (1.9)', '5.91'],
          ['David Mitchell, five titles', '29', '14 (2.5)', '5.71'],
          ['Jane Austen', '52', '0 (4.4)', '0.00']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Expected, then observed', p: 'A branch with 8.46 percent of all borrowing should expect about 8.46 percent of any one book\'s loans: 12.0 of the 142 for Even the dogs. Rathmines had 34, so its share of that book is 2.83 times its share of everything. That ratio is called a location quotient. If each loan had an ordinary 8.46 percent chance of being at Rathmines, 34 or more would turn up about once in 43 million tries.' },
          { h3: 'The ratio\'s trap', p: 'Rank all 1,383 authors borrowed at Rathmines by that ratio and the top of the list is useless. Any author whose every loan that month happened at Rathmines scores the maximum possible, 11.83, and 153 authors do, 119 of them on a single loan. One loan and Karl Ove Knausgaard\'s seven out of seven sit side by side at the top.' },
          { h3: 'A floor on the count', p: 'Require at least 20 loans across the network and 483 authors remain. Now the list says something: Henry James, 11 of 22 spread over five different titles, and David Mitchell, 14 of 29, lead it, each at more than five times the branch\'s ordinary share.' }
        ] },
        { kind: 'callout', h3: 'A ratio of small counts is mostly noise', p: 'Ratios are good at comparing places of different sizes and bad at showing how much evidence sits behind them. One loan out of one gives the same ratio as seven out of seven, or a thousand out of a thousand. Before ranking by a ratio, set a minimum count, show the counts beside it, or ask how often chance alone would produce it. Each of those puts the size of the evidence back next to the number.' },
        { kind: 'p', text: 'The learner\'s program reads the council\'s CSV, 43,295 rows, counts loans per author at Rathmines and across all branches, divides the two shares and sorts. The first sort produces the useless list above, which is the point. The program then adds the expected count, the chance of seeing at least the observed number by luck (a binomial tail) and a minimum-count filter, and compares the three lists. It also asks whether renewals change the story. Renewals make up a third of the network\'s rows, and a renewal is the same reader keeping a book rather than a new reader, so the program repeats the count on new issues only. Rathmines\' share rises to 9.37 percent, and Even the dogs still stands out at 27 of 84 against 7.9 expected. The chance figure treats loans as independent, which renewals and any reading group are not, so it is a yardstick rather than a verdict.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Blank is not broken', p: 'At Rathmines, 43 rows have no author. They are collections, with titles such as Pan book of horror stories and Wednesday comics that have no single author. Leaving them out of an author ranking is right; treating them as errors would not be.' },
          { h3: 'The prize', p: 'Even the dogs is listed as the 2012 winner of the Dublin Literary Award, which Dublin City Council sponsors and its libraries administer. It was borrowed at 18 branches that month. The file cannot say why Rathmines borrowed it so much more, and the page does not guess.' },
          { h3: 'Zero is a count too', p: 'Jane Austen had 52 loans across the network that month and none at Rathmines, where 4.4 would be expected. With numbers that small, a zero happens by chance about once in a hundred tries, so an absence is weaker evidence than it looks.' }
        ] }
      ]
    },
    {
      id: 'place', tint: 'tint', eyebrow: 'Rathmines, named',
      h2: 'Rathmines from its library, its cinema, its club and its air monitor',
      intro: 'Each entry is quoted from whoever runs the place, eircode included where they give one.',
      body: [
        { kind: 'table', caption: 'Named places in Rathmines', head: ['Place', 'What its own source says'], rows: [
          ['Rathmines Library', '157 Lower Rathmines Road, D06 K2K6'],
          ['Stella Cinema', '207/209 Rathmines Road Lower, D06 W403'],
          ['Leinster Cricket Club', 'Founded 1 May 1852, at Observatory Lane since 1865'],
          ['EPA monitoring station 22', 'Wynnefield Road, about 3 kilometres from the city centre']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The library', p: 'The council lists the library as open 10:00 to 20:00 Monday to Thursday and 10:00 to 17:00 on Friday and Saturday, and closed on Sunday. The 2012 file has no Rathmines rows on any of that month\'s four Sundays either.' },
          { h3: 'The cinema', p: 'The Stella says it opened on 29 January 1923 with room for 1,283 people, which made it Ireland\'s largest cinema at the time. It closed in 2004 and reopened after an extensive renovation in 2017.' },
          { h3: 'The club and the monitor', p: 'Leinster Cricket Club moved to Observatory Lane in 1865, and bowls (1913), tennis (1925) and squash (1969) followed. The EPA\'s Rathmines station on Wynnefield Road runs continuous monitors for sulphur dioxide, nitrogen oxides, ozone, benzene and fine particles.' }
        ] },
        { kind: 'spec', title: 'What this page does not claim', p: 'No population is given for Rathmines, since the page prints only what named bodies publish about the place. The library figures describe loans in one month of 2012, not readers, and the file holds no information about who borrowed anything.' }
      ]
    },
    {
      id: 'learning', tint: '', eyebrow: 'Learning here',
      h2: 'The shape of a Rathmines learner\'s week',
      intro: 'A typical week has two lessons, and the teacher leads each of them live from start to end.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Children', p: 'Children begin with block code and counting games, and learn to compare a small group with a big one fairly.' },
          { h3: 'Teenagers', p: 'Teenagers move on to Python, websites, AI projects and real files such as the library loans, with the statistics made concrete in code.' },
          { h3: 'Adults', p: 'Adults can start from nothing; the first lesson settles the course.' }
        ] },
        { kind: 'p', text: 'Loan records are Dublin City Council\'s open data for November 2012; the shares, ratios, expected counts and chance figures were worked out by us on 20 September 2026. Library, cinema, club, award and monitoring-station details come from each organisation\'s own website.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a tally chart to a fair comparison',
    intro: 'Treat each band as rough; lesson one fixes the real level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Tally and compare', p: 'Block-coded tallies of what a class chooses, set beside the whole school.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Shares and ratios', p: 'Python that turns counts into shares and shares into a ratio.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Chance as a yardstick', p: 'Expected counts, binomial tails and minimum counts before any ranking.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Fair comparisons at work', p: 'Branch, store and region comparisons that show the evidence behind each ratio.', courses: ['data-and-ai-analytics-for-non-programmers-course', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an assistant which authors Rathmines likes most',
    intro: 'The question sounds simple. The quick answer is a list of single loans.',
    p1: 'Hand an AI assistant the library file and ask which authors Rathmines borrows more than the rest of the city, and a likely first answer divides the shares, sorts, and reports the top of the list. For this file that top is 153 authors tied at the maximum, most of them borrowed once. The arithmetic is right; the ranking tells you nothing.',
    p2: 'The learner who has built this project asks the follow-up questions: how many loans stand behind each ratio, what count would chance produce, and what does the list look like with a minimum? With those, an assistant can help write the filter, and the counts are there to check it.',
    closer: 'A ratio without its counts is half an answer. Code keeps the other half attached.',
    blogAnchor: 'the case for learning to code, even now'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How lessons run for Rathmines',
    intro: 'In outline.',
    cells: [
      { h3: 'Live, not recorded', p: 'Every lesson is taught as it happens, and the teacher looks at and helps with each learner\'s own code.' },
      { h3: 'One level per group', p: 'Five to ten learners working at the same level, from Rathmines, other parts of Ireland or overseas.' },
      { h3: 'Two regular days', p: 'The same two days each week, roughly eight lessons a month.' },
      { h3: 'Fits the school year', p: 'School holidays, mid-term breaks and exam periods are allowed for in the plan.' },
      { h3: 'Kit', p: 'Any desktop or laptop with a working microphone, something to hear through, and internet steady enough for video.' },
      { h3: 'Private option', p: 'One-to-one lessons for learners who are ahead, want more time, or need hours no group runs at.' }
    ],
    spec: { title: 'Nowhere to commute to', p: 'Modern Age Coders has no premises in Rathmines or anywhere in Ireland. Lessons are live on video and the same wherever the learner joins from.' }
  },

  fees: {
    h2: 'Fees for Rathmines',
    intro: 'Plainly.',
    first: 'A free first lesson, which includes a level check.',
    group: 'A month in a same-level group of five to ten, about eight live lessons.',
    private: 'A month of one-to-one lessons at the same rhythm.',
    closer: 'Families everywhere outside India pay one US dollar fee, month by month. The free lesson binds you to nothing, charges start with the course itself, and the pricing page sets out how holidays, missed lessons and a switch between group and private teaching are handled.'
  },

  reviewsH2: 'Families\' Google reviews, quoted in full',

  book: {
    h2: 'Book a free first lesson in Rathmines',
    intro: 'Let us know the learner\'s age and interests and the first lesson will be planned around them. By the end there might be a simple game, a program that runs, or a book list ranked fairly for once.',
    success: 'Thank you. We will be in touch soon to book the lesson.'
  },

  faq: {
    h2: 'Rathmines coding class questions',
    intro: 'What Rathmines families usually want to know.',
    items: [
      { q: 'Is there a Modern Age Coders centre in Rathmines?', a: 'No. Lessons are live on video, and we have no premises in Ireland. The learner needs a computer, a microphone and sound, and a steady connection. The phone number on this page is in India.', boiler: true },
      { q: 'What is the library loans project?', a: 'The learner takes Dublin City Council\'s file of November 2012 adult fiction loans and compares Rathmines with the whole network: Even the dogs was borrowed 34 times at Rathmines against 12.0 expected, a ratio of 2.83, and a ranking of authors by that ratio only means something once a minimum count is set.' },
      { q: 'Does the library file say who borrowed the books?', a: 'No. It lists the branch, date, author, title and whether each row is an issue or a renewal. There is nothing about borrowers, and the page draws no conclusions about them.' },
      { q: 'Why is there no population figure for Rathmines here?', a: 'This page only prints what named organisations publish about Rathmines itself, here the council, the library, a cinema, a sports club, the literary award and the EPA, and not one of them publishes a head count.' },
      { q: 'When are lessons held?', a: 'Weekday lessons run from after school until evening; weekend lessons run in the daytime. Lessons are scheduled in Irish time. The teachers work from India, which runs ahead of Rathmines by four and a half hours from late March to late October and by five and a half through the winter, so the hours offered have to be sensible at both ends.' },
      { q: 'Are adults welcome?', a: 'Yes, up to sixty-seven, with or without any experience. After the free lesson an adult chooses between a same-level group and teaching on their own.' },
      { q: 'Will my child be grouped with other Rathmines children?', a: 'Possibly, but groups are built around level, so classmates may join from anywhere in Ireland or abroad.' },
      { q: 'What do coding classes in Rathmines cost?', a: 'The first lesson is free. After it, a group place costs USD 100 a month for about eight live lessons, two a week, with five to ten learners, and one-to-one lessons on the same schedule cost USD 150 a month. Terms are agreed before any payment is made.', boiler: true },
      { q: 'How many learners share a group?', a: 'From five to ten, matched by level, pace and goals rather than age or address. If no group runs at a workable time, lessons are one to one.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Ireland',
    h2: 'Near Rathmines',
    html: 'The <a class="cg-inline-link" href="/best-coding-class-in-dublin">Dublin</a> page covers the city as a whole. Further south, <a class="cg-inline-link" href="/coding-classes-in-rathfarnham-dublin">Rathfarnham</a> and <a class="cg-inline-link" href="/coding-classes-in-dundrum-dublin">Dundrum</a> have district pages, while the <a class="cg-inline-link" href="/coding-classes-in-ireland">Ireland hub</a> has the full list.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Rathmines, Dublin and Ireland',
  footerPlaces: [
    { href: '/best-coding-class-in-dublin', label: 'Dublin' },
    { href: '/coding-classes-in-rathfarnham-dublin', label: 'Rathfarnham' },
    { href: '/coding-classes-in-ireland', label: 'Ireland hub' }
  ],

  personalityCss: `
.cg-root.cg-rmn .cg-hero-grid { align-items: end; gap: clamp(1.08rem, 3.29vw, 2.58rem); }
.cg-root.cg-rmn .cg-hero h1 { font-weight: 710; letter-spacing: -0.0184em; line-height: 1.09; }
.cg-root.cg-rmn .cg-capsule { border-bottom: 4px solid var(--cg-accent); padding-bottom: 1.07rem; }
.cg-root.cg-rmn .cg-eyebrow { letter-spacing: 0.126em; font-weight: 640; text-transform: uppercase; }
.cg-root.cg-rmn .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.0133em; }
.cg-root.cg-rmn .cg-grid-3 { gap: clamp(1.05rem, 2.83vw, 2.19rem); }
.cg-root.cg-rmn .cg-table caption { letter-spacing: 0.028em; font-weight: 660; }
.cg-root.cg-rmn .cg-table td { font-variant-numeric: tabular-nums oldstyle-nums; }
.cg-root.cg-rmn .cg-table td:first-child { font-style: italic; }
.cg-root.cg-rmn .cg-ladder-col { border-bottom: 4px solid var(--cg-accent); padding-bottom: 0.99rem; }
.cg-root.cg-rmn .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Rathmines, named sources only (owner rule for districts), read 20 September 2026. Dublin City Council, "Libraries November Adult Fiction Issues & Renewals List DCC" (data.smartdublin.ie dataset ffcc0ddd...; notes: "All the Issues (Books borrowed by members) and renewals for Adult Fiction books in Dublin City Councils Libraries in November 2012"), CSV header library_branch,date,author,title,transaction; 43,295 rows; transaction ISSU 28,745, RENW 14,550; 22 branches; Rathmines 3,661 rows (ISSU 2,694, RENW 967) on 26 days, none on Sundays 4, 11, 18, 25 November; title field capped at 48 characters (746 titles at the cap). Our arithmetic (rmn/lq.js, rmn/extra.js): Rathmines share 3,661/43,295 = 8.46% (0.084559), maximum location quotient 11.83. Even the dogs: 142 network loans at 18 branches, 34 at Rathmines (27 ISSU, 7 RENW), expected 12.0, LQ 2.83, P(X >= 34 | 142, 0.084559) = 2.30e-8 (1 in 43.5 million). Issues only: Rathmines 2,694 of 28,745 = 9.37%; Even the dogs 27 of 84, expected 7.9, LQ 3.43. Authors (blank excluded): 4,445 in the network, 1,383 at Rathmines; 153 with every network loan at Rathmines (LQ 11.83): 119 with one loan, 28 with two, 6 with three or more (Knausgjard Karl Ove 7 of 7: 1 renewal on 5 November, 4 issues on 12 November, 2 on 23 November; p^7 = 3.09e-8). Minimum 20 network loans: 483 authors; James Henry 11 of 22, expected 1.9, LQ 5.91 (Europeans 3, American 3, Ambassadors 2, Turn of the screw 2, Aspern papers 1); Mitchell David 14 of 29, expected 2.5, LQ 5.71 (Thousand Autumns of Jacob De Zoet 5, Black swan green 5, Cloud atlas 2, Ghostwritten 1, Number9dream 1); Austen Jane 0 of 52, expected 4.4, P(0) = 1.01e-2. Blank author: 444 network rows, 43 at Rathmines (e.g. "Wednesday comics", "Pan book of horror stories", "Fish anthology 2010 a matter of luck and other s"). Dublin Literary Award site: "sponsored by Dublin City Council & administered by Dublin City Libraries"; book page "2012 Winner Even the Dogs Jon McGregor". Dublin City Council, Rathmines Library: "157 Lower Rathmines Road Dublin 6 Co. Dublin D06 K2K6"; hours Monday to Thursday 10:00 to 20:00, Friday and Saturday 10:00 to 17:00, "Sunday Closed". Stella Cinema: "First opening its doors on the 29th of January 1923, the cinema originally held 1,283 patrons, making it Ireland\'s largest cinema at the time"; "It temporarily closed in 2004 and reopened after an extensive renovation in 2017"; "207/209 Rathmines Road Lower, Rathmines, Dublin 6, Ireland. The Eircode is D06 W403." Leinster Cricket Club: "founded as Leinster Cricket Club ... on 1st May 1852"; "1865 when it finally moved to its present location at Observatory Lane"; "In 1913 Leinster Bowling Club was added"; "May 1925 when the Tennis Club joined"; "The Squash Club was launched on 1st September 1969". EPA AirQuality.ie Station 22: "The Rathmines site is located in Wynnefield Road in the southern suburb of Rathmines, about 3 kilometres from the city centre. Monitoring is done using continuous monitors for sulphur dioxide, nitrogen oxides, ozone, benzene and ozone precursor compounds, PM 10 and PM 2.5."',
    localProject: 'Location quotient and the small-count trap. From Dublin City Council\'s November 2012 adult fiction loan file, the learner computes Rathmines\' share of all loans (8.46 percent) and of each book and author, and the ratio of the two. Even the dogs: 34 of 142 against 12.0 expected, ratio 2.83, about one in 43 million by chance if loans were independent; still 27 of 84 against 7.9 on new issues only. Ranking all authors by the ratio puts 153 at the maximum of 11.83, 119 of them on one loan; a minimum of 20 network loans leaves 483 and a meaningful top (Henry James 11 of 22, David Mitchell 14 of 29). Side findings: blank authors are anthologies; renewals are a third of the rows and change the denominator; a zero (Austen 0 of 52) is weak evidence. Lessons: expected before observed; show the counts beside any ratio; set a floor before ranking; state the independence assumption. New family site-wide (location quotient, expected count, binomial and over-represent had no prior hits in content/ie or the global dossiers).',
    requiredMentions: [
      '43,295',
      '3,661',
      '8.46 percent',
      '2.83',
      '11.83',
      '153 authors',
      '5.91',
      '9.37 percent',
      'D06 K2K6',
      'D06 W403',
      '1,283',
      'Wynnefield Road'
    ],
    sources: [
      { claim: 'Dublin City Council, Libraries November Adult Fiction Issues and Renewals List: every adult fiction issue and renewal in the city\'s libraries in November 2012, by branch, date, author and title.', url: 'https://data.smartdublin.ie/dataset/ffcc0ddd-86d2-45b6-9d1f-0d06089f2409/resource/5e506eca-7818-4aba-9fba-c9ba006feebe/download/dcclibrariesadultfictionp20130221-1553.csv' },
      { claim: 'Dublin City Council, Rathmines Library: 157 Lower Rathmines Road, D06 K2K6; open Monday to Thursday 10:00 to 20:00, Friday and Saturday 10:00 to 17:00, closed Sunday.', url: 'https://www.dublincity.ie/libraries/find-library/rathmines-library' },
      { claim: 'Dublin Literary Award: sponsored by Dublin City Council and administered by Dublin City Libraries; Even the Dogs by Jon McGregor, 2012 winner.', url: 'https://dublinliteraryaward.ie/the-library/books/even-the-dogs/' },
      { claim: 'Stella Cinema: opened 29 January 1923 with 1,283 seats, then Ireland\'s largest cinema; closed 2004, reopened 2017; 207/209 Rathmines Road Lower, D06 W403.', url: 'https://www.stellacinemas.ie/about/' },
      { claim: 'Leinster Cricket Club: founded 1 May 1852; at Observatory Lane since 1865; bowling 1913, tennis 1925, squash 1969.', url: 'http://lccsports.net/about/' },
      { claim: 'EPA AirQuality.ie, Station 22 Rathmines: Wynnefield Road, about 3 kilometres from the city centre; continuous monitors for sulphur dioxide, nitrogen oxides, ozone, benzene, PM10 and PM2.5.', url: 'https://airquality.ie/station/EPA-22' }
    ],
    rejectedClaims: [
      'Any reason why Rathmines borrowed Even the dogs more (extra copies, a reading group, the award): the file cannot say.',
      'Anything about borrowers: the file has no borrower data.',
      'A ranking of branches by volume that names the lowest: not needed and not made.',
      'Multiple comparisons as the lesson: Mallow owns it.',
      'Censored values, group-by spelling traps and Gini: owned by the DLR, Roscommon, Kilkenny and other pages.',
      'Any population figure for Rathmines and any census small-area aggregation: owner rule for district pages.'
    ]
  }
};
