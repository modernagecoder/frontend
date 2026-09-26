'use strict';
// East Ayrshire (cg- council area page, UK cluster Phase 7, row 261). One council. Spine: can a program recognise a
// verse form? Anchor: Historic Environment Scotland LB35925, Kay Park, Burns Monument and former museum, Kilmarnock,
// Category B (portal text read raw 26 September 2026): "Robert Samson Ingram, architect, 1878-9"; "Statue of Burns by W
// Grant Stevenson"; the statue "unveiled ... on 9th August, 1879"; "Burns's Poems were first published in Kilmarnock on
// 31st July 1786"; the museum held "a first Kilmarnock Edition of his poems"; the statue "shows Burns with a pencil in
// his right hand and a notebook in the other". Also LB14473, Castle Street, Mauchline (Jean Armour Burns' House and
// Museum), Category B. Text: Poems and Songs of Robert Burns, Project Gutenberg 1279.
// Our detector (scratchpad eay/habbie.py): 4,042 stanzas; 688 of six lines; 485 with the Burns stanza shape (lines 1,
// 2, 3 and 5 of seven or more syllables by a vowel-group count, lines 4 and 6 of five or fewer); 142 also pass a
// two-letter spelling rhyme test (aaabab), 73 a three-letter test. Shape-only examples are genuine Burns stanzas from
// Poor Mailie's Elegy rejected by spelling: prose, nose, close, remead, woes, dead; shape, raip, gape, dread, crape,
// dead.
// Lesson family: pattern recognition with heuristics, precision and recall, spelling versus sound; screened (Burns
// stanza, Kay Park: 0 hits).
// Place facts: NRS, Scotland's Census 2022 rounded estimates: East Ayrshire S12000008 120,300; 55,400 households; 95.3
// per square kilometre; ages 0 to 14 19,000 (15.8 per cent), 65+ 25,800 (21.4 per cent) by our addition. NRS mid-2020
// localities. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'EAST AYRSHIRE', blurb: 'Kilmarnock, Cumnock, Stewarton and Mauchline, and a Burns lesson: teach a program to recognise his favourite stanza.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-east-ayrshire',
  code: 'eay',
  accent: '#5C3717',
  accentRationale: 'East Ayrshire: a Ballochmyle red-sandstone brown from the solver (8.4:1 on the darkest paper tint), warmer than the Angus and Clackmannanshire reds',
  pageType: 'governorate',
  place: {
    name: 'East Ayrshire',
    eyebrow: 'East Ayrshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'Scotland' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-scotland', name: 'Scotland' }],
  nav: [
    { label: 'Scotland', href: '/coding-and-ai-classes-in-scotland' },
    { label: 'Glasgow', href: '/best-coding-class-in-glasgow' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'East Ayrshire',
  title: 'Coding Classes in East Ayrshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across East Ayrshire, from Kilmarnock, Cumnock and Stewarton to Galston, Mauchline, Darvel and Auchinleck.',
  ogDescription: 'Coding classes for all of East Ayrshire, and a Kilmarnock Edition project: teach Python to spot the Burns stanza, and find out why Scots spelling fools a rhyme test.',
  twitterDescription: 'East Ayrshire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for East Ayrshire',
    description: 'Ability-placed online coding, Python, AI and mathematics for children, teenagers and adults across East Ayrshire, taught live in English.'
  },

  h1: 'Coding classes in East Ayrshire',
  capsuleQ: 'What are the best coding classes in East Ayrshire?',
  capsule: 'East Ayrshire is one council area where, by Scotland\'s Census 2022, about 120,300 people live in roughly 55,400 households. Kilmarnock is much the biggest town, followed by Cumnock and Stewarton, with Galston, Mauchline, Darvel and Auchinleck among the smaller places. Our lessons are live on video, taught from India, and every learner starts at their own level, from Primary 1 to S6 and adults. People from 6 to 67 learn coding, Python, AI and maths with us, one-to-one or in groups of five to ten. The East Ayrshire project begins with Burns and the book first printed in Kilmarnock. One lesson is free; carrying on costs USD 100 a month for a group or USD 150 a month for one-to-one.',
  lead: 'Historic Environment Scotland\'s listing for the Burns Monument in Kilmarnock\'s Kay Park records that Burns\'s poems were first published in the town on 31 July 1786, and that the monument\'s museum once held a first Kilmarnock Edition. Burns had a favourite verse form, a six-line stanza with three long lines, a short one, a long one and a short one, rhyming in a distinctive pattern. Poets recognise it at a glance. Can a program? This page\'s project writes a detector for the Burns stanza in Python, runs it over a collection of his poems, and discovers that the easy part is counting syllables and the hard part is rhyme, because Burns wrote in Scots and spelling is not sound.',
  wa: 'Hello Modern Age Coders, we are in East Ayrshire and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for East Ayrshire',
    h2: 'Where East Ayrshire learners start',
    intro: 'A P4 pupil in Stewarton who loves rhymes, an S1 in Cumnock starting Python, an S5 in Kilmarnock interested in AI and language, and an adult in Mauchline learning to program. Each starts with a free lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding from a first Scratch game onwards, including rhyme and word games.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python for children, with games, puzzles and first steps with data and AI.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'Python to real machine learning for teenagers, including natural language processing.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python from zero for adults, including working with text and patterns.' }
    ]
  },

  sections: [
    {
      id: 'east-ayrshire', tint: '', eyebrow: 'East Ayrshire in figures',
      h2: 'About 120,300 people from Kilmarnock to the southern hills',
      intro: 'The council figures are from the first results of the 2022 census, which the National Records of Scotland gives in hundreds. The towns are NRS locality estimates for mid-2020.',
      body: [
        { kind: 'table', caption: 'East Ayrshire localities above 3,000 people, NRS mid-2020 estimates', head: ['Locality', 'Residents'], rows: [
          ['Kilmarnock', '46,970'],
          ['Cumnock', '8,700'],
          ['Stewarton', '7,770'],
          ['Galston', '4,710'],
          ['Hurlford and Crookedholm', '4,400'],
          ['Mauchline', '3,900'],
          ['Darvel', '3,900'],
          ['Auchinleck', '3,630'],
          ['Drongan', '3,060']
        ] },
        { kind: 'p', text: 'Kilmarnock alone holds about four in ten of the people in the council area. The density is 95.3 residents per square kilometre, above the Scottish figure of 69.8. Adding up the census age bands, we find 15.8 per cent of residents under 15 and 21.4 per cent aged 65 or more, close to Scotland\'s 15.3 and 20.1. Smaller places include Kilmaurs, Newmilns, Crosshouse, New Cumnock, Patna, Catrine and Dalrymple. East Ayrshire Council sets school term dates, which we have not read; we follow each family\'s.' },
        { kind: 'callout', h3: 'Scottish exam pages', p: 'For National 5 and Higher support, see <a class="cg-inline-link" href="/national-5-computing-science-help">National 5 Computing Science</a> and <a class="cg-inline-link" href="/higher-computing-science-help">Higher Computing Science</a>. <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a> is the nearest city with its own page.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The East Ayrshire project',
      h2: 'Teaching a program to spot the Burns stanza',
      intro: 'Six lines, two rough tests, and a rhyme detector that stumbles over Scots.',
      body: [
        { kind: 'p', text: 'The learner loads a Project Gutenberg collection of Burns\'s poems and songs, splits it at blank lines into 4,042 stanzas, and keeps the 688 that have exactly six lines. Then come two tests. The shape test counts rough syllables in each line by counting groups of vowels, and asks whether lines one, two, three and five are long, seven syllables or more, while lines four and six are short, five or fewer. The rhyme test compares the last letters of the end words and asks whether lines one, two, three and five match each other, and four matches six.' },
        { kind: 'table', caption: 'Our detector on Poems and Songs of Robert Burns, 26 September 2026', head: ['Test', 'Stanzas passing'], rows: [
          ['Six lines long', '688'],
          ['The Burns stanza shape (long, long, long, short, long, short)', '485'],
          ['Shape plus a two-letter spelling rhyme test', '142'],
          ['Shape plus a three-letter spelling rhyme test', '73']
        ] },
        { kind: 'p', text: 'The rhyme test throws away most of the shapes, and a look at the rejects shows why it is wrong to trust it. Among the first stanzas it rejected are the verses of Poor Mailie\'s Elegy, true Burns stanzas every one, with end words like "prose, nose, close, remead, woes, dead". The book’s own glossary gives "remead" as remedy, and to the ear it rhymes with "dead"; to a program comparing the last two letters, "ad" and "ed" do not. Another verse ends "shape, raip, gape, dread, crape, dead": "raip" is meant to rhyme with "shape" but shares none of its final letters. A stricter three-letter test halves the matches again.' },
        { kind: 'p', text: 'So which number is right? Probably something closer to the shape count than the rhyme count, but the honest answer is that the program cannot tell without a better idea of sound. This is the everyday trade-off of pattern recognition: a strict test misses real examples, a loose one lets in false ones, and the only way to know which you have is to look at the mistakes. Computer scientists call these recall and precision, and every search engine and spam filter balances the same two.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Clap out the syllables of a Burns verse, mark the short lines, and circle the rhymes that do not look alike.' },
          { h3: 'Ages 11 to 15', p: 'Write a Python syllable counter from vowel groups and test it on lines where you already know the answer.' },
          { h3: 'Ages 15 and up', p: 'Build the full detector, hand-check a sample of passes and rejects, and estimate precision and recall.' }
        ] },
        { kind: 'callout', h3: 'Whose words and whose code', p: 'The poems are Burns\'s, as published by Project Gutenberg, and the Kilmarnock facts come from Historic Environment Scotland. The detector, its thresholds and every count are ours, and another edition or another threshold would change the numbers.' }
      ]
    },
    {
      id: 'kilmarnock', tint: 'deep', eyebrow: 'Why Kilmarnock',
      h2: 'Where Burns was first printed',
      intro: 'The East Ayrshire link, in Historic Environment Scotland\'s listings.',
      body: [
        { kind: 'table', caption: 'Burns in East Ayrshire, from Historic Environment Scotland listings', head: ['Listing', 'What it records'], rows: [
          ['LB35925, Kay Park Burns Monument', 'Burns\'s poems were first published in Kilmarnock on 31 July 1786.'],
          ['LB35925, the monument', 'Designed by Robert Samson Ingram, 1878 to 1879, with a statue of Burns by W Grant Stevenson unveiled on 9 August 1879.'],
          ['LB35925, the statue', 'Burns holds a pencil in his right hand and a notebook in the other.'],
          ['LB14473, Castle Street, Mauchline', 'Listed as Jean Armour Burns\' House and Museum, Category B.']
        ] },
        { kind: 'p', text: 'Recognising patterns in language is one of the oldest problems in computing and one of the most important in AI today. Every chatbot and translation tool rests on the question this project asks in miniature: how do you turn the sound and shape of words into something a program can test? An East Ayrshire student who has taught a program to spot a Burns stanza, and then studied its mistakes, understands both the power and the limits of those tools.' },
        { kind: 'p', text: 'Modern Age Coders has no link with Historic Environment Scotland, Project Gutenberg or East Ayrshire Council. Their facts and texts are theirs; our detector and any errors are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a> is to the north, <a class="cg-inline-link" href="/coding-classes-in-dumfries-and-galloway">Dumfries and Galloway</a> to the south. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page lists every council.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From rhyme games to language AI',
    intro: 'The free lesson decides where each learner begins. Stage is a hint; skill settles it.',
    cols: [
      { band: 'P1 to P4', h3: 'Words and rhymes', p: 'Block coding games with rhyming words and simple word puzzles.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'P5 to S2', h3: 'Text in Python', p: 'Typed Python that splits text, counts syllables and finds patterns.', courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'S3 to S6', h3: 'Language and AI', p: 'Machine learning and language processing, useful alongside National 5 and Higher courses.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Text at work', p: 'Python for adults who work with documents, reports and text data.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'AI and language',
    h2: 'An AI can recognise a Burns stanza. Would it read Scots rhymes the way Burns meant them?',
    intro: 'Language models handle sound better than spelling tests, but not perfectly.',
    p1: 'A modern language model would recognise the Burns stanza far better than our simple detector, because it has learned how words sound from vast amounts of text. It can still stumble on dialect, where the same word is spelt several ways and rhymes depend on a local accent. Scots words like "raip" and "remead" are exactly the kind of case where a confident answer can be wrong.',
    p2: 'An East Ayrshire student who has measured their own detector\'s mistakes knows to test any language tool on the hard cases, the dialect words, the unusual spellings, before trusting its overall score. That habit matters for anyone using AI on real language, not just textbook English.',
    closer: 'So a young person in East Ayrshire should learn to code in 2026 to test language tools on the words that matter locally.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Day to day',
    h2: 'From the Irvine Valley to the Doon, from home',
    intro: 'East Ayrshire spreads from Kilmarnock into long valleys and hills, and a weekly class at the right level can be a trek. Online lessons avoid it.',
    cells: [
      { h3: 'At home, anywhere', p: 'A house in Galston, a flat in Kilmarnock, a cottage near Dalmellington. The screen is shared and the pupil does the coding.' },
      { h3: 'The Scottish system', p: 'A P6 project, an S3 option or a Higher: teachers use the same names East Ayrshire schools use, and lessons are in English.' },
      { h3: 'A lesson before paying', p: 'The first lesson is real teaching, then an honest recommendation, with no card details taken.' },
      { h3: 'Your level, your class', p: 'Five to ten learners at one stage, drawn from Scotland and much further away.' },
      { h3: 'Pauses for holidays', p: 'Two lessons a week during term, with a break whenever the school holidays come round.' },
      { h3: 'Fixed in UK time', p: 'The slot you are given stays put in UK time through spring and autumn; teachers on India time do the adjusting.' }
    ],
    spec: { title: 'Why groups follow level', p: 'Even in Kilmarnock, five learners at the same stage free on the same evening are hard to find. Level-based groups let a pupil in Newmilns or Patna join a class that fits.' }
  },

  fees: {
    h2: 'Fees in East Ayrshire',
    intro: 'Darvel or Drongan, the fee is the same, as it is in every country we teach apart from India.',
    first: 'A full lesson of real work, then a suggested level and course.',
    group: 'Around eight lessons a month with five to ten learners at one level.',
    private: 'Around eight lessons a month, taught one-to-one.',
    closer: 'Fees are in US dollars, never pounds. Nothing is billed until the free lesson has agreed a course and a weekly slot; the pricing page covers pauses, missed lessons and changing format.'
  },

  reviewsH2: 'Families on Google, in their words',

  book: {
    h2: 'Book a free East Ayrshire lesson',
    intro: 'Tell us the pupil\'s stage or the adult\'s aim, plus what they enjoy. A first lesson could be a Scratch rhyme game, a Python syllable counter, or the Burns detector on this page.',
    success: 'Thank you. Your East Ayrshire request has arrived.'
  },

  faq: {
    h2: 'East Ayrshire questions',
    intro: 'The council area, the Burns project and practical details.',
    items: [
      { q: 'How many people live in East Ayrshire?', a: 'About 120,300 usual residents in roughly 55,400 households, according to the 2022 census first results, rounded to hundreds by the National Records of Scotland.' },
      { q: 'What are the largest towns in East Ayrshire?', a: 'By NRS mid-2020 locality estimates: Kilmarnock 46,970, Cumnock 8,700, Stewarton 7,770, Galston 4,710 and Hurlford and Crookedholm 4,400.' },
      { q: 'What is the Burns project?', a: 'Learners write a Python detector for the six-line Burns stanza, run it on a Gutenberg collection of his poems, and find 485 stanzas with the right shape but only 142 that pass a spelling-based rhyme test, because Scots spelling is not sound.' },
      { q: 'What is the Burns stanza?', a: 'A six-line verse form with three long lines, a short line, a long line and a short line, rhyming aaabab. Burns used it often, for example in Poor Mailie\'s Elegy.' },
      { q: 'When were Burns\'s poems first published?', a: 'Historic Environment Scotland\'s listing for the Kilmarnock Burns Monument records that they were first published in Kilmarnock on 31 July 1786.' },
      { q: 'Are there classes in East Ayrshire?', a: 'Not in person. All lessons are live online, so pupils join from home anywhere in the council area.' },
      { q: 'Do you help with National 5 and Higher?', a: 'Yes; see our National 5 and Higher Computing Science pages. We aim for understanding and do not promise grades.' },
      { q: 'What ages do you teach?', a: 'Six to sixty-seven: blocks for young children, Python from about P6, AI and exam courses in secondary, and Python for adults.' },
      { q: 'How much are lessons?', a: 'The first is free. After it, a group place is USD 100 a month and private lessons USD 150 a month.' },
      { q: 'Do you pause for East Ayrshire school holidays?', a: 'Yes. East Ayrshire Council publishes its term dates; send yours and we plan around them.' }
    ]
  },

  next: {
    eyebrow: 'Close by',
    h2: 'Pages near East Ayrshire',
    html: 'The nearest city page is <a class="cg-inline-link" href="/best-coding-class-in-glasgow">Glasgow</a>, and <a class="cg-inline-link" href="/coding-classes-in-dumfries-and-galloway">Dumfries and Galloway</a> lies south. Every council is on our <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> page, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the rest.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'East Ayrshire and nearby',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-scotland', label: 'Scotland' },
    { href: '/best-coding-class-in-glasgow', label: 'Glasgow' },
    { href: '/higher-computing-science-help', label: 'Higher Computing' }
  ],

  personalityCss: `
.cg-root.cg-eay .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.1vw, 2.7rem); }
.cg-root.cg-eay .cg-hero h1 { font-weight: 800; letter-spacing: -0.028em; line-height: 1.02; }
.cg-root.cg-eay .cg-capsule { border-top: 5px solid var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-eay .cg-eyebrow { letter-spacing: 0.19em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-eay .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.019em; }
.cg-root.cg-eay .cg-table caption { font-weight: 600; text-align: left; }
.cg-root.cg-eay .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-eay .cg-table th { letter-spacing: 0.045em; font-weight: 700; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-eay .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-eay .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'East Ayrshire (S12000008), one council. NRS, Scotland\'s Census 2022 first results, rounded population estimates: 120,300 (females 61,900, males 58,400); households 55,400; density 95.3 per square kilometre (Scotland 69.8); ages 0 to 14 19,000 (15.8 per cent), 65+ 25,800 (21.4 per cent) by our addition (Scotland 15.3, 20.1). NRS mid-2020 localities: Kilmarnock 46,970; Cumnock 8,700; Stewarton 7,770; Galston 4,710; Hurlford and Crookedholm 4,400; Mauchline 3,900; Darvel 3,900; Auchinleck 3,630; Drongan 3,060; Kilmaurs 2,790; Newmilns 2,720; Crosshouse 2,690; New Cumnock 2,590; Patna 2,070; Catrine 2,020; Dalrymple 1,660. HES LB35925 (Category B), Kay Park, Burns Monument and former museum, Kilmarnock: "Robert Samson Ingram, architect, 1878-9"; "Statue of Burns by W Grant Stevenson"; unveiled "on 9th August, 1879"; "Burns\'s Poems were first published in Kilmarnock on 31st July 1786"; "a museum of Burns artefacts including a first Kilmarnock Edition of his poems"; "Burns with a pencil in his right hand and a notebook in the other". HES LB14473 (Category B), Nos. 2 and 4 Castle Street, Mauchline (Jean Armour Burns\' House and Museum).',
    localProject: 'Burns stanza detector on Gutenberg 1279 (CR removed): 4,042 blank-line stanzas; 688 six-line; 485 shape (lines 1, 2, 3, 5 at least 7 vowel-group syllables; 4 and 6 at most 5); 142 shape plus 2-letter end rhyme aaabab; 73 with 3-letter. Shape-only examples, Poor Mailie\'s Elegy: prose, nose, close, remead, woes, dead; him, him, him, speed, him, dead; sense, mense, fence, greed, spence, dead; tips, hips, ships, tweed, clips, dead; shape, raip, gape, dread, crape, dead. Page labels detector and counts as ours. AI angle: dialect and spelling-vs-sound failures. Lesson family: heuristic pattern recognition, precision and recall, spelling vs sound.',
    requiredMentions: [
      '120,300',
      '55,400',
      'LB35925',
      'Kay Park',
      'Kilmarnock Edition',
      'Burns stanza',
      'Cumnock',
      'Stewarton',
      'Galston',
      'Mauchline',
      'Auchinleck'
    ],
    sources: [
      { claim: 'National Records of Scotland, Scotland\'s Census 2022 first results, rounded population estimates data.', url: 'https://www.scotlandscensus.gov.uk/documents/scotlands-census-2022-rounded-population-estimates-data/' },
      { claim: 'National Records of Scotland, Population Estimates for Settlements and Localities in Scotland, mid-2020.', url: 'https://www.nrscotland.gov.uk/publications/population-estimates-for-settlements-and-localities-in-scotland-mid-2020/' },
      { claim: 'Historic Environment Scotland, LB35925: Kay Park, Burns Monument and former museum, Kilmarnock.', url: 'https://portal.historicenvironment.scot/designation/LB35925' },
      { claim: 'Historic Environment Scotland, LB14473: Castle Street, Mauchline, Jean Armour Burns\' House and Museum.', url: 'https://portal.historicenvironment.scot/designation/LB14473' },
      { claim: 'Poems and Songs of Robert Burns, Project Gutenberg eBook 1279.', url: 'https://www.gutenberg.org/ebooks/1279' }
    ],
    rejectedClaims: [
      'Other names for the Burns stanza and its history before Burns: not read from a source, so not given.',
      'Precision and recall figures for the detector: not measured by hand for this page, so none are claimed.',
      'Park funding and bequest figures in the listing: money figures, left out.',
      'East Ayrshire school term dates: none read.',
      'Named East Ayrshire schools: none named.',
      'Burns\'s birthplace at Alloway: in South Ayrshire, not used here.'
    ]
  }
};
