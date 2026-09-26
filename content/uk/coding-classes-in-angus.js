'use strict';
// Angus (cg- council area page, UK cluster Phase 7, row 257). One council. Spine: does every quotation that opens also
// close? Anchor: Historic Environment Scotland designations (HES designations service and portal, read raw 26
// September 2026): LB36895, 9, 11 The Tenements, Brechin Road, Kirriemuir, Category B: "Birthplace of Sir J.M. Barrie
// 1860, home of his parents to 1870"; LB36896, wash-house, Category B: Barrie's "Little Theatre"; LB36903, Barrie
// Pavilion, Hill of Kirriemuir, Category B, dated 1929, a cricket pavilion with camera obscura. NTS page 403 (logged).
// Text: Peter Pan, Project Gutenberg 16.
// Our checks (scratchpad ang/quotes.py): 1,677 paragraphs; 1,464 opening and 1,464 closing double curly quotes; all
// 1,099 paragraphs with dialogue balance under a stack check; no nested double quotes. Single marks: 16 left, 558 right;
// of the right marks 516 sit inside words (apostrophes), 19 after a letter at a word end, 15 after punctuation, 8 other.
// A naive stack on single marks reports 542 unmatched closers; treating in-word marks as apostrophes leaves 26. Turned
// into straight quotes, the book has 2,928 identical double marks: a stack cannot tell opening from closing.
// Lesson family: stacks for nesting and matching, and ambiguity when one character plays two roles; screened (stack
// appears on many pages as a word, but no quotation-matching project).
// Place facts: NRS, Scotland's Census 2022 rounded estimates (14 September 2023): Angus S12000041 114,400; 54,300
// households; 52.4 per square kilometre; ages 0 to 14 17,000 (14.9 per cent) and 65+ 28,700 (25.1 per cent) by our
// addition (Scotland 15.3 and 20.1). NRS mid-2020 locality estimates (31 March 2022). Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'ANGUS', blurb: 'Arbroath, Forfar, Montrose and Kirriemuir, and a Peter Pan lesson on checking that every quotation mark opens and closes.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-angus',
  code: 'ang',
  accent: '#5C3329',
  accentRationale: 'Angus: a red sandstone brown from the solver (8.63:1 on the darkest paper tint), redder than the Shropshire and Derbyshire browns',
  pageType: 'governorate',
  place: {
    name: 'Angus',
    eyebrow: 'Angus',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Scotland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Dundee', href: '/best-coding-class-in-dundee' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Angus',
  title: 'Coding Classes in Angus | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Angus, from Arbroath, Forfar and Montrose to Carnoustie, Monifieth, Brechin and Kirriemuir, P1 to adult.',
  ogDescription: 'Coding classes for all of Angus, and a Kirriemuir project: check every quotation mark in Peter Pan with a stack, and find why one little mark causes 542 false alarms.',
  twitterDescription: 'Angus coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Angus',
    description: 'Ability-placed online coding, Python, computing science and mathematics for children, teenagers and adults across Angus, taught live in English.'
  },

  h1: 'Coding classes in Angus',
  capsuleQ: 'What are the best coding classes in Angus?',
  capsule: 'Angus Council covers the whole area, home to about 114,400 people in roughly 54,300 households according to Scotland\'s Census 2022. Arbroath is the largest town, followed by Forfar, Montrose, Carnoustie and Monifieth, with Brechin and Kirriemuir next. We teach live over video from India, and each learner is placed by what they can already do, from Primary 1 to S6 and on to adults. Anyone from 6 to 67 can join, in a group of five to ten or one-to-one, for coding, Python, computing science and maths. The Angus project starts in Kirriemuir, where J M Barrie was born. Your first lesson is free; staying on costs USD 100 a month in a group or USD 150 a month privately.',
  lead: 'Historic Environment Scotland\'s listing for a small house on Brechin Road in Kirriemuir says it was the birthplace of Sir J M Barrie in 1860, and that the wash-house behind it was his "Little Theatre". Barrie went on to write Peter Pan, a book full of talk: Peter, Wendy, the Lost Boys and Captain Hook argue, boast and make up stories, and every line of speech sits between quotation marks. That raises a question that spellcheckers and compilers ask all the time: does every mark that opens also close? This page\'s project checks the whole of Peter Pan with the tool programmers use for exactly this, a stack, and finds that the hardest part is a single small mark that means two different things.',
  wa: 'Hello Modern Age Coders, we are in Angus and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Angus',
    h2: 'Where Angus learners begin',
    intro: 'A P3 pupil in Montrose who loves stories, an S1 in Forfar starting to type code, an S4 in Arbroath working towards National 5 Computing Science, and an adult in Carnoustie picking up Python. Each begins with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding from a first Scratch game onwards, including characters that speak in turn.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python for children, with games, puzzles and first steps with data and AI.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from beginner to advanced for teenagers, through games, automation, data and AI projects.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from zero for adults, including working with text files and checking data.' }
    ]
  },

  sections: [
    {
      id: 'angus', tint: '', eyebrow: 'Angus in figures',
      h2: 'About 114,400 people between the Glens and the coast',
      intro: 'The council figures come from Scotland\'s Census 2022, rounded by the National Records of Scotland to the nearest hundred. The towns are NRS locality estimates for mid-2020, a separate source.',
      body: [
        { kind: 'table', caption: 'Angus localities above 5,000 people, NRS mid-2020 estimates', head: ['Locality', 'Residents'], rows: [
          ['Arbroath', '23,500'],
          ['Forfar', '14,120'],
          ['Montrose', '11,730'],
          ['Carnoustie', '11,310'],
          ['Monifieth', '8,860'],
          ['Brechin', '7,230'],
          ['Kirriemuir', '6,060']
        ] },
        { kind: 'p', text: 'By our addition of the census age groups, about 14.9 per cent of Angus residents are under 15 and about 25.1 per cent are 65 or over, an older mix than Scotland as a whole, at 15.3 and 20.1 per cent. There are 52.4 residents to each square kilometre, compared with Scotland\'s 69.8. Smaller places include Birkhill and Muirhead, Letham, Ferryden and Inchbraoch, Hillside and Friockheim. Term dates are Angus Council\'s to set; we have not read them and simply follow each family\'s calendar.' },
        { kind: 'callout', h3: 'Dundee is just south', p: 'The city has its own page, <a class="cg-inline-link" href="/best-coding-class-in-dundee">Dundee</a>. For exam support, see <a class="cg-inline-link" href="/national-5-computing-science-help">National 5 Computing Science</a> and <a class="cg-inline-link" href="/higher-computing-science-help">Higher Computing Science</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Angus project',
      h2: 'Every quotation mark, checked by a stack',
      intro: 'Peter Pan as data, a stack that matches openings with closings, and a mark with two jobs.',
      body: [
        { kind: 'p', text: 'A stack works like a pile of plates: you can only add to the top or take from the top. To check brackets or quotation marks, a program pushes every opening mark onto the stack and, at every closing mark, pops the most recent opening off. If it ever meets a closing mark with an empty stack, something is wrong; if anything is left on the stack at the end, something never closed. Compilers check the brackets in code this way, and the learner does the same for the curly double quotation marks in Peter Pan.' },
        { kind: 'table', caption: 'What our checks found in Peter Pan (Project Gutenberg edition), 26 September 2026', head: ['Check', 'Result'], rows: [
          ['Opening and closing double marks', '1,464 of each'],
          ['Paragraphs containing dialogue', '1,099, every one balanced'],
          ['Single closing marks (like the one in "don’t")', '558, against only 16 single opening marks'],
          ['A naive stack on single marks', '542 "closings" with nothing to close'],
          ['After treating marks inside words as apostrophes', '26 left to look at by hand']
        ] },
        { kind: 'p', text: 'The double marks are immaculate: every paragraph of dialogue opens and closes correctly. The single marks tell a different story. The same curved character is used as a closing single quotation mark and as an apostrophe, in words like "don’t" and "Wendy’s", so a naive stack thinks the book has 542 closing marks with nothing to close. Teaching the program one rule, that a mark with letters on both sides is an apostrophe, removes 516 of them at once. The 26 that remain are genuinely ambiguous, such as a mark after a plural word, and need a person or a smarter rule.' },
        { kind: 'p', text: 'There is one more twist. If the curly marks are replaced by the plain straight mark found on a keyboard, the book has 2,928 identical double marks, and a stack can no longer tell an opening from a closing at all. All a program can do then is flip a switch at each mark, which cannot notice nesting or a missing mark in the middle. The design of a symbol decides what a program can check.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Stack real plates or cups while reading bracket sequences aloud, and spot which sequences leave something behind.' },
          { h3: 'Ages 11 to 15', p: 'Write a bracket checker in Python with a list used as a stack, then run it on the quotation marks in a chapter.' },
          { h3: 'Ages 15 and up', p: 'Handle apostrophes, measure what is left, and compare curly and straight marks to see what information is lost.' }
        ] },
        { kind: 'callout', h3: 'Sources and our code', p: 'The listing details come from Historic Environment Scotland, and the text of Peter Pan from Project Gutenberg. The checks and counts are ours, run on that edition; other editions may use different marks and give different numbers.' }
      ]
    },
    {
      id: 'kirriemuir', tint: 'deep', eyebrow: 'Why Kirriemuir',
      h2: 'A birthplace, a wash-house theatre and a camera obscura',
      intro: 'The Angus link, in Historic Environment Scotland\'s listings.',
      body: [
        { kind: 'table', caption: 'Barrie\'s Kirriemuir in Historic Environment Scotland listings', head: ['Listing', 'What it records'], rows: [
          ['LB36895, Category B', '9 and 11 The Tenements, Brechin Road: birthplace of Sir J M Barrie in 1860, home of his parents to 1870.'],
          ['LB36896, Category B', 'The wash-house behind: Barrie\'s "Little Theatre".'],
          ['LB36903, Category B', 'Barrie Pavilion on the Hill of Kirriemuir, dated 1929, a cricket pavilion with a camera obscura.']
        ] },
        { kind: 'p', text: 'Checking that every opening has a matching closing is one of the most common jobs in computing: brackets in code, tags in a web page, quotation marks in a document, even the nesting of folders. The stack is the tool for all of them. An Angus student who has run one over a whole novel, and then wrestled with the apostrophe, knows both how to build the check and how messy real text can be.' },
        { kind: 'p', text: 'We have no connection with Historic Environment Scotland, the National Trust for Scotland, Project Gutenberg or Angus Council. Their records and text are theirs; our code and any mistakes are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-dundee">Dundee</a> is south, <a class="cg-inline-link" href="/coding-classes-in-aberdeenshire">Aberdeenshire</a> north and <a class="cg-inline-link" href="/best-coding-class-in-perth-scotland">Perth</a> west. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page lists every council.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From story games to checking text by program',
    intro: 'The free lesson finds the right first step. The school stage is a clue; ability decides.',
    cols: [
      { band: 'P1 to P4', h3: 'Stories that talk', p: 'Block coding with characters who take turns to speak and react.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Words in Python', p: 'Typed Python that counts words, finds patterns and checks simple rules in text.', courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'S3 to S6', h3: 'Data structures', p: 'Stacks, queues and full Python, useful for National 5, Higher and beyond.', courses: ['python-complete-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Adults', h3: 'Text and data at work', p: 'Python for adults who clean and check documents, records and files.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and text',
    h2: 'An AI reads text easily. Does it know when an apostrophe is a quotation mark?',
    intro: 'Small ambiguities in text trip up simple programs and clever ones alike.',
    p1: 'Modern AI models handle apostrophes and quotation marks far better than a naive stack, because they use context. They still stumble on the same kinds of ambiguity our checker met: a mark after a plural word, a quotation that runs across paragraphs, straight marks that look identical. When an AI tool cleans or rewrites a document, those are exactly the places where a small error can slip in unnoticed.',
    p2: 'An Angus student who has built a checker and counted what it could and could not decide knows where to look when a machine edits text. That habit is valuable whether the text is a novel, a legal document or a line of code.',
    closer: 'So a young person in Angus should learn to code in 2026 to know where automated text handling is likely to go wrong.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'From the Angus Glens to the coast, from home',
    intro: 'Angus mixes coastal towns, market towns and glens, and a weekly class at the right level is not always close by. Online lessons make distance irrelevant.',
    cells: [
      { h3: 'Your own table', p: 'A flat in Arbroath, a house in Brechin, a farm in the glens. The screen is shared, and the pupil does the typing.' },
      { h3: 'Scottish stages and names', p: 'P1 to P7, S1 to S6, National 5, Higher and Advanced Higher: teachers use the same terms as Angus schools, in English.' },
      { h3: 'Try before paying', p: 'A full first lesson with real work, then clear advice on level and course. We ask for no card details.' },
      { h3: 'Stage-matched groups', p: 'Five to ten pupils at the same point, joining from Angus and many other places.' },
      { h3: 'Holiday pauses', p: 'Two lessons a week in term is typical, stopping for the holidays Angus Council sets.' },
      { h3: 'Set in UK time', p: 'We book you in UK time and the slot holds through the spring and autumn clock changes; teachers on India time adjust on their side.' }
    ],
    spec: { title: 'Why groups follow level', p: 'Five pupils at one stage, free on the same evening, are rarely found in a single Angus town. Level-based groups let a learner in Letham or Friockheim join a class that fits.' }
  },

  fees: {
    h2: 'Fees in Angus',
    intro: 'A family in Montrose pays what a family in Monifieth pays, and what families pay everywhere we teach except India.',
    first: 'A complete lesson of real work, then a suggested level and course.',
    group: 'Roughly eight lessons a month in a group of five to ten at one level.',
    private: 'Roughly eight lessons a month, one-to-one.',
    closer: 'Prices are in US dollars, never pounds. We bill only after the free lesson has fixed a course and a weekly time; the pricing page sets out what happens with holidays, missed lessons and changes of format.'
  },

  reviewsH2: 'Families review us on Google',

  book: {
    h2: 'Book a free Angus lesson',
    intro: 'Share the pupil\'s stage, from P1 to S6, or an adult\'s goals, plus an interest or two. A first lesson might be a talking-characters game in Scratch, a Python word counter, or the Peter Pan checker on this page.',
    success: 'Thank you. Your Angus request is with us.'
  },

  faq: {
    h2: 'Angus questions',
    intro: 'The council area, the Peter Pan project and practical details.',
    items: [
      { q: 'How many people live in Angus?', a: 'About 114,400 usual residents in roughly 54,300 households at the 2022 census; the National Records of Scotland publishes these first results rounded to hundreds.' },
      { q: 'What are the largest towns in Angus?', a: 'By NRS mid-2020 locality estimates: Arbroath 23,500, Forfar 14,120, Montrose 11,730, Carnoustie 11,310 and Monifieth 8,860.' },
      { q: 'What is the Peter Pan project?', a: 'Learners check every quotation mark in the Project Gutenberg text of Peter Pan with a stack, find all 1,099 dialogue paragraphs balanced, and then deal with the 542 false alarms caused by apostrophes sharing a character with closing single quotes.' },
      { q: 'What is a stack in programming?', a: 'A structure where the last item added is the first taken off, like a pile of plates. It is the standard tool for checking that brackets, tags or quotation marks open and close in the right order.' },
      { q: 'Was J M Barrie born in Kirriemuir?', a: 'Historic Environment Scotland\'s listing LB36895 records the house on Brechin Road as his birthplace in 1860 and his parents\' home until 1870.' },
      { q: 'Are there classes in person in Angus?', a: 'No. We teach live online, so pupils join from home anywhere in Angus.' },
      { q: 'Do you teach for National 5 and Higher?', a: 'Yes. Our National 5 and Higher Computing Science pages describe exam support, and our Python courses build the skills they need. We do not promise grades.' },
      { q: 'Which ages do you teach?', a: 'From 6 to 67: block coding in the early primary years, Python from around P6, data structures and exam courses in secondary, and Python for adults.' },
      { q: 'What do lessons cost?', a: 'Nothing for the first. Then a group place is USD 100 a month and one-to-one lessons are USD 150 a month, with no sign-up fee.' },
      { q: 'Do you follow Angus school holidays?', a: 'Yes. Angus Council publishes term dates; send us yours and we build breaks around them.' }
    ]
  },

  next: {
    eyebrow: 'Close by',
    h2: 'Pages near Angus',
    html: 'Neighbouring pages include <a class="cg-inline-link" href="/best-coding-class-in-dundee">Dundee</a> to the south, <a class="cg-inline-link" href="/coding-classes-in-aberdeenshire">Aberdeenshire</a> up the coast and <a class="cg-inline-link" href="/best-coding-class-in-perth-scotland">Perth</a> inland; all 32 councils are listed on our <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Angus and nearby',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/best-coding-class-in-dundee', label: 'Dundee' },
    { href: '/higher-computing-science-help', label: 'Higher Computing' }
  ],

  personalityCss: `
.cg-root.cg-ang .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-ang .cg-hero h1 { font-weight: 700; letter-spacing: -0.022em; line-height: 1.05; }
.cg-root.cg-ang .cg-capsule { border-top: 4px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-ang .cg-eyebrow { letter-spacing: 0.2em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-ang .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.018em; }
.cg-root.cg-ang .cg-table caption { font-weight: 600; font-style: italic; text-align: left; }
.cg-root.cg-ang .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ang .cg-table th { letter-spacing: 0.04em; font-weight: 700; }
.cg-root.cg-ang .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-ang .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Angus (S12000041), one council. NRS, Scotland\'s Census 2022 first results, rounded population estimates (14 September 2023): Angus 114,400 (females 59,100, males 55,300); households 54,300; density 52.4 per square kilometre (Scotland 69.8); ages 0 to 14 17,000 (14.9 per cent) and 65+ 28,700 (25.1 per cent) by our addition (Scotland 832,200, 15.3 per cent; 1,091,100, 20.1 per cent). NRS Population Estimates for Settlements and Localities in Scotland, mid-2020: Arbroath 23,500; Forfar 14,120; Montrose 11,730; Carnoustie 11,310; Monifieth 8,860; Brechin 7,230; Kirriemuir 6,060; Birkhill and Muirhead 2,010; Letham 1,640; Ferryden and Inchbraoch 1,220; Hillside 1,140; Friockheim 1,130 (Dundee and Liff localities split with Dundee City, not listed). HES LB36895 (Category B, 9, 11 The Tenements, Brechin Road, Kirriemuir): "Birthplace of Sir J.M. Barrie 1860, home of his parents to 1870"; LB36896 (Category B, wash-house): Barrie\'s "Little Theatre"; LB36903 (Category B, Barrie Pavilion, Hill of Kirriemuir): "Frank Thomson, dated 1929", "cricket pavilion with camera obsura" [sic].',
    localProject: 'Stack matching of quotation marks in Peter Pan (Gutenberg 16): 1,677 paragraphs; double curly marks 1,464 open, 1,464 close; 1,099 dialogue paragraphs all balanced; no nesting. Single marks: 16 left, 558 right; right marks inside words 516, after a word-final letter 19, after punctuation 15, other 8. Naive single-mark stack: 542 unmatched closers; with in-word apostrophe rule: 26. Straight-quote conversion: 2,928 identical marks, stack cannot distinguish open from close (toggle only). Page labels counts as ours on this edition. AI angle: context resolves most but not all ambiguities. Lesson family: stacks, matching, ambiguous symbols.',
    requiredMentions: [
      '114,400',
      '54,300',
      'LB36895',
      'Kirriemuir',
      'Arbroath',
      'Montrose',
      'Brechin',
      'Little Theatre',
      'Peter Pan',
      '1,099'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data: Angus and Scotland.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Population Estimates for Settlements and Localities in Scotland, mid-2020: Angus localities.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'Historic Environment Scotland, LB36895: birthplace of Sir J M Barrie, Kirriemuir.', url: 'https://portal.historicenvironment.scot/designation/LB36895' },
      { claim: 'Historic Environment Scotland, LB36896 and LB36903: the wash-house "Little Theatre" and the Barrie Pavilion.', url: 'https://portal.historicenvironment.scot/designation/LB36896' },
      { claim: 'J M Barrie, Peter Pan, Project Gutenberg eBook 16.', url: 'https://www.gutenberg.org/ebooks/16' }
    ],
    rejectedClaims: [
      'National Trust for Scotland visitor details for the birthplace: the page returned 403 and was not retried.',
      'Plot or character details beyond naming the main characters: not needed.',
      'Arbroath Abbey and the Declaration of Arbroath: not researched for this page.',
      'That other editions of Peter Pan match these counts: not claimed.',
      'Angus school term dates: none read.',
      'Named Angus schools: none named.'
    ]
  }
};
