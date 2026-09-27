'use strict';
// Blackburn (cg- town page, UK cluster Phase 8, towns band A, row 325). Keyword slug per the owner's 2026-09-27 instruction.
// Spine: how sure can we be about a number built from vague ones? Anchors (read raw 27 September 2026): Project Gutenberg
// ebook 70140, George W. Daniels, "The early English cotton industry": the carding machine "adopted, or one based upon it
// made, by the founder of the famous Peel family at Blackburn, who, in carrying on his experiments, employed James
// Hargreaves, best known in connection with the 'spinning-jenny.'"; first Robert Peel "lived at Peel Fold near Blackburn";
// jenny "did not become prominent before 1767 and was not patented until 1770"; "In 1767 it was said to contain eight
// spindles; when Hargreaves took out his patent in 1770 the specification mentioned sixteen or more; in 1784 the number had
// increased to eighty; and ultimately as many as one hundred and twenty are said to have been introduced"; footnote: "In
// 1788 the writer of a pamphlet estimated that there were at work 550 mule machines of ninety spindles each, and 20,070
// hand-jennies of eighty spindles. Aikin, Manchester, p. 179."
// Our model (computed inline): jenny spindles at 80 each 1,605,600; mule spindles 49,500; mule share 3.0%. If jennies held
// anywhere from 16 to 120 spindles: jenny spindles 321,120 to 2,408,400, mule share 2.0% to 13.4%. Midpoint slip: 68
// spindles gives one number (3.5%) and hides the range. Dependency: if the 550 is only good to 10% (495 to 605), treating the
// mule count in numerator and denominator independently gives 2.68% to 3.30%; the tight answer is 2.70% to 3.28%.
// Lesson family: interval arithmetic and the dependency problem; screened (interval arithmetic: 0 hits; Fermanagh used
// interval INTERSECTION for dating, Derby used interval overlap for sweep lines; different operations).
// Page avoids the machine-breaking episode at Peel Fold and the remark about children working jennies.
// Place facts: Nomis Census 2021 TS007A, Blackburn with Darwen E06000008: total 154,738; 5 to 9 11,162 (7.2%; England 5.9%);
// 10 to 14 11,733 (7.6%; 6.0%); 15 to 19 10,857 (7.0%; 5.7%); 55 to 59 9,360 (6.0%; 6.7%); 75 to 79 4,086 (2.6%; 3.6%); 85+
// 2,586 (1.7%; 2.4%). ONS 2021 BUAs: Blackburn 124,955 (a small part lies outside the borough); Darwen 27,900 (wholly inside).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'BLACKBURN', label: 'Blackburn', blurb: 'AI and programming classes for Blackburn and Darwen, with a project on how uncertain the 1788 count of spinning-jenny spindles really is.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'ai-and-programming-classes-in-blackburn',
  code: 'bkb',
  accent: '#46256B',
  accentRationale: 'Blackburn: an indigo-dye violet from the cotton trade (9.74:1 on the darkest paper tint)',
  pageType: 'city',
  place: {
    name: 'Blackburn',
    eyebrow: 'Blackburn, Lancashire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Blackburn with Darwen' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Lancashire', href: '/coding-classes-in-lancashire' },
    { label: 'North West', href: '/coding-and-ai-classes-in-north-west-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Blackburn, England',
  title: 'AI and Programming Classes in Blackburn | Coding, Ages 6 to 67',
  description: 'AI, programming, Python and coding classes online for Blackburn and Darwen, for every age from 6 to 67, one-to-one or in small groups. Try a first lesson free.',
  ogDescription: 'Online AI and programming classes for Blackburn and Darwen, and a Python project that puts honest error bars on the 1788 count of spinning-jenny spindles.',
  twitterDescription: 'Blackburn and Darwen AI, programming and coding classes, ages 6 to 67, live online. Free first lesson.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '27 September 2026',
  courseSchema: {
    name: 'Live Online AI and Programming Classes for Blackburn',
    description: 'Online AI, programming, Python and mathematics for children, teenagers and adults in Blackburn and Darwen, taught live at the right level.'
  },

  h1: 'AI and programming classes in Blackburn',
  capsuleQ: 'Where are the best AI and programming classes for Blackburn?',
  capsule: 'Blackburn with Darwen had 154,738 residents at the 2021 census. The ONS puts the Blackburn built-up area at 124,955 and Darwen at 27,900. The borough is young: 10 to 14 year olds alone make up 7.6 per cent of residents, against 6.0 per cent nationally. From India, our teachers run live video lessons in AI, programming, Python and maths for anyone aged 6 to 67, privately or in groups of five to ten who are at the same stage. A free first lesson shows which course fits. The Blackburn project asks how precise an 18th-century count of spinning machines can be. Staying on is USD 100 per month in a class or USD 150 per month one-to-one.',
  lead: 'George W. Daniels records that the founder of the Peel family at Blackburn, experimenting with carding machines, employed James Hargreaves, the name forever tied to the spinning-jenny. The jenny grew fast: eight spindles in 1767, "sixteen or more" in the 1770 patent, eighty by 1784, and perhaps 120 in the end. In 1788 a pamphlet estimated 20,070 hand-jennies of eighty spindles at work, alongside 550 of Crompton\'s mules with ninety each. Multiply and you get 1,605,600 jenny spindles, a number that looks exact to the last digit. It is nothing of the kind. A Blackburn learner can write Python that carries the uncertainty through the sum honestly, using a tool called interval arithmetic.',
  wa: 'Hello Modern Age Coders, I am in Blackburn and would like a free AI or programming lesson.',

  picks: {
    eyebrow: 'Blackburn course picks',
    h2: 'Good first courses in Blackburn',
    intro: 'Start from the learner\'s age and interests. Every course begins with one free live lesson and no card details.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 9', note: 'Colourful block coding that builds logic step by step.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Python for younger learners, with early AI projects.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Serious Python for teenagers, home of the interval project.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults and students', note: 'Python for grown-ups from scratch, through to data and algorithms.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Blackburn with Darwen',
      h2: 'A borough full of school-age children',
      intro: 'Six age bands from 2021 census table TS007A for Blackburn with Darwen, via Nomis, beside the figure for England.',
      body: [
        { kind: 'table', caption: 'Blackburn with Darwen and England, six age bands, Census 2021 TS007A', head: ['Band', 'Borough residents', 'Borough %', 'England %'], rows: [
          ['5 to 9', '11,162', '7.2%', '5.9%'],
          ['10 to 14', '11,733', '7.6%', '6.0%'],
          ['15 to 19', '10,857', '7.0%', '5.7%'],
          ['55 to 59', '9,360', '6.0%', '6.7%'],
          ['75 to 79', '4,086', '2.6%', '3.6%'],
          ['85 and over', '2,586', '1.7%', '2.4%']
        ] },
        { kind: 'p', text: 'The school-age bands stand well above England, while every band from 55 upwards sits below. The Darwen built-up area of 27,900 lies wholly within the borough; a small part of the Blackburn built-up area spills over its edge. Learners follow the national curriculum for England, and we pause for whichever school holidays you tell us about.' },
        { kind: 'callout', h3: 'Nearby pages', p: 'The <a class="cg-inline-link" href="/coding-classes-in-lancashire">Lancashire</a> page covers the county, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West</a> page lists the region.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Blackburn project',
      h2: 'Error bars on 1,605,600 spindles',
      intro: 'Every vague input becomes a range, and the ranges flow through the arithmetic.',
      body: [
        { kind: 'p', text: 'The learner builds a small Interval class in Python holding a low and a high value. Adding two intervals adds the lows and the highs; multiplying positive intervals multiplies them. The pamphlet\'s 80 spindles per jenny is replaced by the range the book itself gives, from 16 to 120. Multiplied by the 20,070 hand-jennies, the total becomes anywhere from 321,120 to 2,408,400 spindles, a range more than seven times wide.' },
        { kind: 'table', caption: 'Our Python results from the 1788 estimates, 27 September 2026', head: ['Assumption', 'Jenny spindles', 'Mule share of all spindles', 'Comment'], rows: [
          ['80 per jenny, as the pamphlet says', '1,605,600', '3.0%', 'One number, no error bar'],
          ['Anywhere from 16 to 120 per jenny', '321,120 to 2,408,400', '2.0% to 13.4%', 'Honest range from the book'],
          ['Midpoint of 68 per jenny', '1,364,760', '3.5%', 'Looks precise, hides the range']
        ] },
        { kind: 'p', text: 'Mule spindles are 550 times 90, or 49,500. The mule\'s share of all spindles is 3.0 per cent at the pamphlet\'s figure, but anything from 2.0 to 13.4 per cent once the jenny size is left open. The tempting shortcut is to take the midpoint, 68 spindles, and report 3.5 per cent. That is a real number with no right to its decimal place, and the program refuses to print it without the range beside it.' },
        { kind: 'p', text: 'Then comes the subtle part, the dependency problem. Suppose the 550 mules were only good to ten per cent. The mule count appears twice in the share, above and below the line. Treat the two appearances as independent and Python reports 2.68 to 3.30 per cent; rewrite the formula so the count appears once and the true range is 2.70 to 3.28. Here the gap is small, but in longer calculations it can swamp the answer. A test checks that x minus x returns exactly zero only when the code knows both are the same x.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Estimate jars of buttons as "between" two numbers, then add two jars and see how wide the range grows.' },
          { h3: 'Ages 11 to 15', p: 'Write the Interval class with add and multiply, and redo the 1788 sum.' },
          { h3: 'Ages 15 and up', p: 'Handle division and the dependency problem, and test rewritten formulas.' }
        ] },
        { kind: 'callout', h3: 'The book\'s estimates, our ranges', p: 'The spindle counts, the 1788 pamphlet figures and the Peel family link come from George W. Daniels, The early English cotton industry, on Project Gutenberg. The intervals and every calculation are ours.' }
      ]
    },
    {
      id: 'hargreaves', tint: 'deep', eyebrow: 'Why the jenny',
      h2: 'Hargreaves, the Peels and a growing machine',
      intro: 'What Daniels says about the spinning-jenny.',
      body: [
        { kind: 'table', caption: 'The spinning-jenny in The early English cotton industry', head: ['Year', 'What the book records'], rows: [
          ['1767', 'Said to contain eight spindles; not prominent before this year'],
          ['1770', 'Patent specification mentioned sixteen or more spindles'],
          ['1784', 'The number had increased to eighty'],
          ['Later', 'As many as one hundred and twenty are said to have been introduced'],
          ['1788', 'A pamphlet estimated 20,070 hand-jennies of eighty spindles at work'],
          ['Blackburn link', 'The founder of the Peel family at Blackburn employed Hargreaves']
        ] },
        { kind: 'p', text: 'Honest uncertainty matters in modern computing too. Engineers building bridges, surveyors fixing boundaries and climate modellers all carry ranges rather than single numbers, and interval arithmetic is used in verified computing, where a program must prove its answer is correct even with rounding errors. A Blackburn learner who has put error bars on a 1788 estimate already thinks the way those programmers do.' },
        { kind: 'p', text: 'Modern Age Coders is not linked to Project Gutenberg or the ONS. Their text and data are their own; the ranges, and any slip in them, are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning stages',
    h2: 'From button jars to verified computing',
    intro: 'School years are only a rough guide; the trial fixes the stage.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Blocks and logic', p: 'Block coding, sequences and simple estimation games.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Python basics', p: 'Typed Python, classes and number work.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Years 9 to 13', h3: 'Data and AI', p: 'Uncertainty, data and AI alongside GCSE and A level.', courses: ['python-complete-masterclass-teens', 'complete-high-school-mathematics-mastery'] },
      { band: 'Adults', h3: 'Programming for work', p: 'Adult Python up to data analysis.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and uncertainty',
    h2: 'Does an AI tell you how sure it is?',
    intro: 'Precise-looking numbers can be the least trustworthy.',
    p1: 'Ask a chatbot how many spindles were turning in 1788 and it may produce one tidy figure. It rarely adds that the inputs were guesses, or how wide the true range could be.',
    p2: 'A Blackburn learner who has built an Interval class asks the missing question: plus or minus how much?',
    closer: 'Asking how sure an answer is makes a strong case for Blackburn teenagers to keep learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'Blackburn and Darwen, both online',
    intro: 'Learners join from home wherever they are in the borough.',
    cells: [
      { h3: 'Learner at the keys', p: 'Students type their own code; tutors follow on the shared screen and ask rather than tell.' },
      { h3: 'Set by school year', p: 'Whether Year 5 or Year 13, a learner starts where their year and trial lesson indicate, naming the exam board.' },
      { h3: 'Trial at no cost', p: 'One free full lesson, then a plain answer about the right course.' },
      { h3: 'Groups by level', p: 'Five to ten learners at one stage, drawn from all over the UK.' },
      { h3: 'Term-time lessons', p: 'Two lessons per week during term, and a break for every holiday.' },
      { h3: 'Stable timing', p: 'Our teachers adjust when the UK clocks change, so your lesson time does not.' }
    ],
    spec: { title: 'Why online groups', p: 'Five Blackburn learners at the same stage, all free at one time, rarely live close together. Online, each joins a class that suits them.' }
  },

  fees: {
    h2: 'Fees in Blackburn',
    intro: 'Blackburn pays the rate we charge in every country except India.',
    first: 'One full lesson free, ending with a clear suggestion.',
    group: 'About eight live small-group lessons a month.',
    private: 'About eight live private lessons a month.',
    closer: 'Prices are in US dollars, never sterling. Nothing is charged until the trial has settled a course and a weekly slot; holidays, missed lessons and changes between group and private are explained on the pricing page.'
  },

  reviewsH2: 'Families\' Google reviews',

  book: {
    h2: 'Book a free lesson in Blackburn',
    intro: 'Tell us the learner\'s age or school year and one interest. The trial could be a Scratch logic game, a first Python program, an AI project, or the spindle estimate puzzle.',
    success: 'Thank you. Your Blackburn request has arrived.'
  },

  faq: {
    h2: 'Blackburn and Darwen FAQs',
    intro: 'The place, the project and how lessons run.',
    items: [
      { q: 'What is the population of Blackburn with Darwen?', a: 'The 2021 census counted 154,738 in the borough; the ONS gives 124,955 for the Blackburn built-up area and 27,900 for Darwen.' },
      { q: 'Can Blackburn learners take AI and programming classes online?', a: 'Yes. Learners aged 6 to 67 in Blackburn and Darwen join live online classes in AI, programming, Python and maths.' },
      { q: 'What is the spinning-jenny project?', a: 'Learners use the 1788 estimate of 20,070 hand-jennies and interval arithmetic in Python to show how uncertain the total number of spindles really was.' },
      { q: 'What is interval arithmetic?', a: 'A way of calculating with ranges instead of single numbers, so the answer carries its own uncertainty.' },
      { q: 'What was James Hargreaves\'s link with Blackburn?', a: 'George W. Daniels records that the founder of the Peel family at Blackburn employed him while experimenting with carding.' },
      { q: 'Are lessons held in a classroom?', a: 'No, all lessons are live online, so Darwen and Blackburn are equally close.' },
      { q: 'Do you support GCSE and A level?', a: 'Yes, in maths and computing, for understanding; no grades are promised.' },
      { q: 'Who is it for?', a: 'Learners from 6 to 67, adults included.' },
      { q: 'How much does it cost?', a: 'The first lesson is free, then USD 100 per month in a group or USD 150 per month privately.' },
      { q: 'Are there lessons during school holidays?', a: 'No; we pause for the holidays you tell us.' }
    ]
  },

  next: {
    eyebrow: 'More pages',
    h2: 'Other pages near Blackburn',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-lancashire">Lancashire</a> page covers the county, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-bolton">Bolton</a> prices Samuel Crompton\'s yarn, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West</a> page lists the region. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has them all.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Blackburn and Lancashire',
  footerPlaces: [
    { href: '/coding-classes-in-lancashire', label: 'Lancashire' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-bkb .cg-hero-grid { align-items: center; gap: clamp(1.2rem, 3vw, 2.8rem); }
.cg-root.cg-bkb .cg-hero h1 { font-weight: 740; letter-spacing: -0.026em; line-height: 1.06; }
.cg-root.cg-bkb .cg-capsule { border-left: 4px dashed var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-bkb .cg-eyebrow { letter-spacing: 0.18em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-bkb .cg-section-head h2 { max-width: 23ch; letter-spacing: -0.018em; }
.cg-root.cg-bkb .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-bkb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bkb .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.79rem; }
.cg-root.cg-bkb .cg-ladder-col { border-top: 3px dashed var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-bkb .cg-callout { border-left-width: 4px; border-radius: 0 16px 16px 0; }
`,

  dossier: {
    curriculumAuthority: 'Blackburn with Darwen (E06000008). Nomis Census 2021 TS007A: total 154,738; 5 to 9 11,162 (7.2%, England 5.9%); 10 to 14 11,733 (7.6%, 6.0%); 15 to 19 10,857 (7.0%, 5.7%); 55 to 59 9,360 (6.0%, 6.7%); 75 to 79 4,086 (2.6%, 3.6%); 85+ 2,586 (1.7%, 2.4%). ONS 2021 BUAs: Blackburn 124,955 (crosses the boundary slightly), Darwen 27,900. Project Gutenberg 70140, George W. Daniels, The early English cotton industry: founder of the Peel family at Blackburn "employed James Hargreaves"; first Robert Peel at "Peel Fold near Blackburn"; jenny eight spindles 1767, "sixteen or more" 1770, eighty 1784, "as many as one hundred and twenty"; 1788 pamphlet "550 mule machines of ninety spindles each, and 20,070 hand-jennies of eighty spindles" (Aikin, Manchester, p. 179).',
    localProject: 'Interval arithmetic: jenny spindles 1,605,600 at 80 each; 321,120 to 2,408,400 at 16 to 120; mule spindles 49,500; mule share 3.0% point, 2.0% to 13.4% range; midpoint 68 slip 3.5%; dependency with mule count +/-10%: naive 2.68% to 3.30%, tight 2.70% to 3.28%. Lesson family: interval arithmetic, dependency problem.',
    requiredMentions: [
      '124,955',
      '27,900',
      'James Hargreaves',
      'spinning-jenny',
      'Peel family',
      'interval arithmetic',
      '20,070',
      'hand-jennies',
      'dependency problem'
    ],
    sources: [
      { claim: 'Nomis Census 2021 TS007A age by five-year bands, Blackburn with Darwen and England.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations and OA to BUA lookup.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Project Gutenberg, George W. Daniels, The early English cotton industry (ebook 70140).', url: 'https://www.gutenberg.org/ebooks/70140' }
    ],
    rejectedClaims: [
      'Where Hargreaves lived: not claimed; the book links him to the Peel family at Blackburn only.',
      'The attack on machinery at Peel Fold: not described.',
      'Children working jennies: not repeated.',
      'Named schools and school term dates: none named or read.',
      'Distances and travel times: not claimed.',
      'Sterling prices: none.'
    ]
  }
};
