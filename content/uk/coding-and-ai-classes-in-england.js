'use strict';
// England (cg- nation page, UK cluster Phase 3). The fourth nation page, and the index the English
// exam doors will hang off. Facts read on 20 September 2026:
//  - GOV.UK, The national curriculum: "The national curriculum is a set of subjects and standards used
//    by primary and secondary schools so children learn the same things"; "Other types of school, like
//    academies and private schools, do not have to follow the national curriculum. Academies must teach
//    a broad and balanced curriculum including English, maths and science. They must also teach
//    relationships and sex education, and religious education." Computing is not in that list.
//    Key stages as published: Early years foundation stage, Reception, ages 4 to 5; Key stage 1,
//    Years 1 to 2, ages 5 to 7; Key stage 2, Years 3 to 6, ages 7 to 11; Key stage 3, Years 7 to 9,
//    ages 11 to 14; Key stage 4, Years 10 to 11, ages 14 to 16.
//  - GOV.UK, National curriculum in England: computing programmes of study (statutory, key stages 1
//    to 4). "A high-quality computing education equips pupils to use computational thinking and
//    creativity to understand and change the world." Key stage 3 pupils should be taught to "use 2 or
//    more programming languages, at least one of which is textual, to solve a variety of computational
//    problems", to "make appropriate use of data structures [for example, lists, tables or arrays]" and
//    to "design and develop modular programs that use procedures or functions". Key stage 4: "All pupils
//    must have the opportunity to study aspects of information technology and computer science at
//    sufficient depth to allow them to progress to higher levels of study or to a professional career."
//  - DfE, Schools, pupils and their characteristics, January 2026 school census, published 4 June 2026:
//    83.9 per cent of secondary schools are academies or free schools, accounting for 83.6 per cent of
//    secondary school pupils; 48.8 per cent of primary schools, accounting for 49.9 per cent of the
//    primary school population; 48.2 per cent of all schools, and 60.4 per cent of all pupils, are in
//    an academy.
//  - ONS, Population and household estimates, England and Wales: Census 2021: "There were 56,489,800
//    people in England" on census day 21 March 2021, published with ONS's note that rounded figures
//    "may not add exactly because of this rounding". Region figures from Nomis NM_2021_1, read the same
//    day: London 8,799,728; South East 9,278,065; North West 7,417,397; East 6,335,074; West Midlands
//    5,950,757; South West 5,701,186; Yorkshire and The Humber 5,480,774; East Midlands 4,880,054;
//    North East 2,647,013. As on the Wales and Northern Ireland pages, published parts are printed as
//    published and never added up.
// Spine: the national curriculum that most English secondary schools are not required to teach. Computing
// is statutory at all four key stages, and 83.9 per cent of secondary schools sit outside the obligation.
// Second edge: where it does bind, key stage 4 guarantees an opportunity to study, not a course. Third:
// the one line a parent can actually test a school against is the key stage 3 requirement for two
// programming languages, at least one of them textual.

const REGIONS = [['North East', 'coding-and-ai-classes-in-north-east-england'], ['North West', 'coding-and-ai-classes-in-north-west-england'],
  ['Yorkshire and the Humber', 'coding-and-ai-classes-in-yorkshire-and-the-humber'], ['East Midlands', 'coding-and-ai-classes-in-east-midlands'],
  ['West Midlands', 'coding-and-ai-classes-in-west-midlands-region'], ['East of England', 'coding-and-ai-classes-in-east-of-england'],
  ['London', 'best-coding-class-in-london'], ['South East', 'coding-and-ai-classes-in-south-east-england'], ['South West', 'coding-and-ai-classes-in-south-west-england']];

function linkedRegions() {
  const built = new Set(require('../../scripts/nl/lib/uk-index.js').builtUkPages().map(p => p.slug));
  return REGIONS.map(([name, slug]) => built.has(slug) ? `<a class="cg-inline-link" href="/${slug}">${name}</a>` : name).join(', ');
}

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'nation', tag: 'ENGLAND', blurb: 'Computing is statutory in the national curriculum, and most English secondary schools are not required to follow it.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-and-ai-classes-in-england',
  code: 'eng',
  accent: '#A5411D',
  accentRationale: 'England: a burnt rust from the solver (5.05:1 on every paper tint) in the widest gap left in the warm band, well clear of the Welsh green, the Northern Irish mulberry and the Scottish indigo it sits beside',
  pageType: 'governorate',
  place: {
    name: 'England',
    eyebrow: 'England, United Kingdom',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Northern Ireland', href: '/coding-and-ai-classes-in-northern-ireland' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'England',
  title: 'Coding and AI Classes in England | Computing Curriculum, Python',
  description: 'Live online coding, Python, AI and maths classes for families across England, built around the computing programmes of study and what academies must teach.',
  ogDescription: 'Computing is statutory in England. Most secondary schools are academies, and academies do not have to follow the national curriculum.',
  twitterDescription: 'Coding and AI classes in England for ages 6 to 67, live online, first lesson free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '20 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Learners in England',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across the nine regions of England, taught live in English.'
  },

  h1: 'Coding and AI classes in England',
  capsuleQ: 'What are the best coding classes in England?',
  capsule: 'England has a statutory computing curriculum that runs from Reception to Year 11, and most English secondary schools are under no obligation to teach it. Both halves of that sentence come from the government. Computing is one of the national curriculum subjects with published programmes of study for key stages 1 to 4. GOV.UK also says that "academies and private schools do not have to follow the national curriculum", and that academies "must teach a broad and balanced curriculum including English, maths and science" with computing absent from the list. At the January 2026 census, 83.9 per cent of secondary schools in England were academies or free schools. So a family cannot read the curriculum and assume it describes their child\'s week. We teach live online from India, ages 6 to 67, in groups of five to ten or one to one. The first lesson is free; a group place is then USD 100 a month and one-to-one teaching USD 150.',
  lead: 'This page is about a gap, not a complaint. England wrote one of the most ambitious school computing curricula in the world in 2014, and then spent a decade converting its schools into academies that are not required to deliver it. Most do teach computing, many teach it well, and the curriculum still sets the language everyone uses. But the entitlement a parent assumes exists is weaker than they think, and the difference between two secondary schools three miles apart can be enormous and entirely lawful. What follows is what the documents actually say, the one question that tells you where a school stands, and what a family can do about it.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in England.',

  picks: {
    eyebrow: 'Course picks for England',
    h2: 'Four courses for learners in England',
    intro: 'A Year 3 child in Leeds who has only ever used blocks, a Year 8 in Bristol who should be writing text by now, a Year 10 in Manchester starting GCSE Computer Science, and an adult in Norwich retraining. All four start the same way, with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'The blocks stage done properly, so a child leaves primary school able to build and debug rather than only to follow.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 10 to 13', note: 'The textual language key stage 3 asks for, taught at the age the curriculum expects it.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'Python to GCSE standard and beyond, for students whose school teaches it lightly or not at all.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'The concepts without the career change, for parents and professionals who want to follow the argument.' }
    ]
  },

  sections: [
    {
      id: 'curriculum', tint: '', eyebrow: 'What is written down',
      h2: 'Computing is statutory from Reception to Year 11',
      intro: 'The programmes of study for computing cover all four key stages. These are the government\'s own words.',
      body: [
        { kind: 'table', caption: 'Key stages in England, as GOV.UK publishes them', head: ['Stage', 'Year groups', 'Ages'], rows: [
          ['Early years foundation stage', 'Reception', '4 to 5'],
          ['Key stage 1', 'Years 1 to 2', '5 to 7'],
          ['Key stage 2', 'Years 3 to 6', '7 to 11'],
          ['Key stage 3', 'Years 7 to 9', '11 to 14'],
          ['Key stage 4', 'Years 10 to 11', '14 to 16']
        ] },
        { kind: 'callout', mt: true, h3: 'The line worth memorising', p: 'At key stage 3, pupils should be taught to "use 2 or more programming languages, at least one of which is textual, to solve a variety of computational problems". Two languages. One of them typed. By the end of Year 9.' },
        { kind: 'p', text: 'The ambition goes further than that single line. Key stage 3 also asks pupils to "make appropriate use of data structures [for example, lists, tables or arrays]" and to "design and develop modular programs that use procedures or functions". Read as a whole it describes a fourteen-year-old who can decompose a problem, structure data and write reusable code. That is a serious expectation, and it is not what every Year 9 in England is actually doing.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'What the curriculum is for', p: 'Its stated purpose is that "a high-quality computing education equips pupils to use computational thinking and creativity to understand and change the world". Not tool training. Thinking.' },
          { h3: 'Where key stage 4 softens', p: 'The wording changes. "All pupils must have the opportunity to study aspects of information technology and computer science at sufficient depth." An opportunity to study, not a course everyone takes.' },
          { h3: 'Why that matters at options', p: 'A school satisfies key stage 4 by offering the subject. A pupil who does not choose it may do no computing at all between Year 9 and Year 12, entirely within the rules.' }
        ] }
      ]
    },
    {
      id: 'academies', tint: 'tint', eyebrow: 'Who it applies to',
      h2: 'Most English secondary schools do not have to follow it',
      intro: 'This is the part almost nobody tells parents, and the government states it in one sentence.',
      body: [
        { kind: 'callout', h3: 'Quoted from GOV.UK', p: '"Other types of school, like academies and private schools, do not have to follow the national curriculum. Academies must teach a broad and balanced curriculum including English, maths and science. They must also teach relationships and sex education, and religious education." Computing is not on that list.' },
        { kind: 'table', mt: true, caption: 'Academies and free schools in England, January 2026 school census', head: ['', 'Share of schools', 'Share of pupils'], rows: [
          ['Secondary schools', '83.9 per cent', '83.6 per cent'],
          ['Primary schools', '48.8 per cent', '49.9 per cent'],
          ['All schools', '48.2 per cent', '60.4 per cent']
        ] },
        { kind: 'p', text: 'Put the two facts side by side and the shape of English school computing becomes visible. The curriculum sets an ambitious national standard. Fewer than one secondary school in six is legally bound by it. The rest choose, and the great majority choose to teach computing anyway, because it is a good subject, because leadership teams value it and because league tables count Computer Science. But choosing is not the same as being required, and when timetable pressure arrives, a subject nobody has to teach is a subject that can quietly shrink.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'This is not a scandal', p: 'Academy freedom was the point of the policy, and many academies teach computing better than the curriculum demands. The problem is the assumption, not the freedom.' },
          { h3: 'It is a reason to ask', p: 'A parent cannot look up what their child will be taught. They have to ask their own school, and the honest ones will tell them straight away.' },
          { h3: 'It is why we place by ability', p: 'Two Year 8s from different English schools can be three years apart in practice. We test what a learner can do rather than what their year group implies.' }
        ] },
        { kind: 'spec', title: 'Where this sits across the UK', p: 'England leaves the decision with the school. Wales names one language in the rules and sits every candidate on screen. Northern Ireland runs two separate qualifications under one subject name. Scotland uses its own qualifications and stages entirely. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK page</a> sets the four systems out together.' }
      ]
    },
    {
      id: 'question', tint: 'deep', eyebrow: 'What to ask',
      h2: 'One question that tells you where a school actually stands',
      intro: 'Not "do you teach computing". Every school says yes to that. Ask something the curriculum makes checkable.',
      body: [
        { kind: 'align', rows: [
          { code: 'Ask', req: 'Which two programming languages will my child use by the end of Year 9, and which of them is textual?', ours: 'It quotes the key stage 3 requirement back at the school without sounding like an inspection, and there is no vague answer to it.' },
          { code: 'Good', req: 'A clear pair, usually blocks or a visual language in Year 7 and Python from Year 8, with a named term when the switch happens.', ours: 'That school is doing what the curriculum describes, and a learner joining us will be building on it rather than repairing it.' },
          { code: 'Warning', req: 'Only a visual language named, or an answer about software packages, online safety and presentations.', ours: 'Useful things, but not programming. A pupil arriving at GCSE from that start has ground to make up, and it is better to know in Year 8 than in Year 10.' }
        ] },
        { kind: 'p', text: 'The question works because it is the school\'s own standard, not ours. It is also the moment a parent finds out whether their child has met a text editor. The move from dragging blocks to typing code is the single hardest transition in school computing, and a student who has not made it by Year 10 spends the first term of a GCSE course fighting syntax instead of learning ideas.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'If the answer is good', p: 'Keep going. Depth is the useful next step: bigger projects, real data, and problems that do not fit in a lesson. That is where our teens\' Python course starts.' },
          { h3: 'If the answer is thin', p: 'It is fixable and it is not the child\'s fault. Typed Python takes a term of weekly lessons to become comfortable, well before any option form appears.' },
          { h3: 'If the school is a specialist', p: 'Some English schools teach far beyond the curriculum. Then the right question is what a strong student does next, and the <a class="cg-inline-link" href="/british-informatics-olympiad-preparation">British Informatics Olympiad page</a> is a better starting point than this one.' }
        ] },
        { kind: 'p', text: 'For students already past that stage, the competitions this country runs are unusually good, from primary puzzle rounds through to national olympiads. The <a class="cg-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a> lists what is open this year and when entries close.' }
      ]
    },
    {
      id: 'england', tint: '', eyebrow: 'Across England',
      h2: 'Nine regions, 56,489,800 people, one class list',
      intro: 'Published census figures, reproduced as published. They are not totalled here, for the reason given below.',
      body: [
        { kind: 'table', caption: 'Usual residents by English region, Census 2021', head: ['Region', 'Usual residents', 'Region', 'Usual residents'], rows: [
          ['South East', '9,278,065', 'South West', '5,701,186'],
          ['London', '8,799,728', 'Yorkshire and The Humber', '5,480,774'],
          ['North West', '7,417,397', 'East Midlands', '4,880,054'],
          ['East', '6,335,074', 'North East', '2,647,013'],
          ['West Midlands', '5,950,757', '', '']
        ] },
        { kind: 'p', text: 'The Office for National Statistics reports that "there were 56,489,800 people in England" on census day, 21 March 2021, and publishes that figure with a warning that rounded numbers "may not add exactly because of this rounding". The regional rows above come from the census tables and are printed exactly as the census gives them. They are not added together here and no total is claimed from them, because a sum of published parts is an arithmetic result rather than a published statistic, and the difference is the kind of thing that turns a careful page into an inaccurate one.' },
        { kind: 'p', text: 'Each region has its own index of our county and city pages, with a local project of its own: ' + linkedRegions() + '.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Every region, same timetable', p: 'A learner in Durham joins the lesson a learner in Surrey joins. Regional differences in provision stop mattering when the teacher is on a link.' },
          { h3: 'Groups built by level', p: 'Five to ten learners at one stage, drawn from across England and beyond, which is how a group at the right level exists at a workable hour.' },
          { h3: 'Places we write about', p: '<a class="cg-inline-link" href="/best-coding-class-in-london">London</a>, <a class="cg-inline-link" href="/coding-classes-in-surrey">Surrey</a> and <a class="cg-inline-link" href="/coding-classes-in-harrow-london">Harrow</a> have pages of their own, with local schools, transport and selection covered in detail.' }
        ] },
        { kind: 'spec', title: 'Sources', p: 'Curriculum: GOV.UK, The national curriculum, and National curriculum in England: computing programmes of study. School types: Department for Education, Schools, pupils and their characteristics, January 2026 school census, published 4 June 2026. Population: Office for National Statistics, Population and household estimates, England and Wales, Census 2021, and ONS Census 2021 usual residents by region via Nomis. All read 20 September 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From blocks to a textual language, and past it',
    intro: 'Placement is by what a learner can build unaided, which is the only reliable measure when schools differ this much.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'The blocks years', p: 'Key stage 1 and 2 work done properly: sequences, repetition, debugging, and a child who can say why something broke.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 10 to 13', h3: 'The textual crossing', p: 'The key stage 3 requirement met in practice, with typed Python introduced slowly enough to stick.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 16', h3: 'GCSE depth', p: 'Algorithms, data structures and programs long enough to need planning, whether or not a school is teaching them.', courses: ['python-complete-masterclass-teens', 'gcse-computer-science-course'] },
      { band: 'Ages 16 to 67', h3: 'Sixth form and after', p: 'A level study, projects, data and AI, and adults retraining from a standing start.', courses: ['ai-ml-masterclass-teens', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why learn to code in England when an assistant can write it?',
    intro: 'Because of what the curriculum is actually asking for, which was never typing.',
    p1: 'The computing programmes of study put computational thinking first: analysing a problem, decomposing it, choosing a structure for the data and designing something modular. An assistant will hand a student working code on request and will not teach them one of those four things. The student who reads the generated program, spots that it stores everything in one list, and restructures it has done the work the curriculum names. The student who pastes it has done nothing the curriculum recognises.',
    p2: 'There is a practical edge too. GCSE and A level assessment in England still happens on paper and under supervision, and a candidate who has never written a program without help is not ready for either. Our teaching uses AI the way a working developer does, as something to argue with and check, and never as something to copy from.',
    closer: 'So the case in England is the curriculum\'s own case. It asks for a young person who can think in computational terms, and no assistant will do that part for them.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Nine regions, one teacher, no commute',
    intro: 'A country this varied is exactly where placing by ability beats placing by postcode.',
    cells: [
      { h3: 'Placed by what they can do', p: 'Not by year group. Two Year 8s from different English schools can be years apart, and pretending otherwise wastes a term.' },
      { h3: 'Curriculum language used', p: 'Key stages, programmes of study and the textual-language requirement, named the way the Department for Education names them.' },
      { h3: 'A free lesson first', p: 'Real teaching, closing with an honest view of where the learner is and what to take next.' },
      { h3: 'Small groups', p: 'Five to ten learners at one stage, so nobody waits and nobody drowns.' },
      { h3: 'Or one to one', p: 'For a learner a long way ahead or a long way behind, where a group would be the wrong room.' },
      { h3: 'Fixed in UK time', p: 'Teachers work from India, four and a half hours ahead in summer and five and a half in winter, and every slot is agreed in UK time.' }
    ],
    spec: { title: 'The transition that decides everything', p: 'Blocks to text. The national curriculum puts it in key stage 3, which means by the end of Year 9, and a child who makes that crossing on time finds GCSE Computer Science a subject about ideas. A child who makes it in Year 10 finds it a subject about semicolons. Nothing else a family can arrange early has a bigger effect.' }
  },

  fees: {
    h2: 'What classes cost in England',
    intro: 'The same three prices in every region.',
    first: 'A full lesson on real work, ending with a level and a recommended course.',
    group: 'Roughly eight lessons a month, shared with five to ten learners at the same stage.',
    private: 'Roughly eight lessons a month, one teacher and one learner.',
    closer: 'Prices are in US dollars, which is how we quote everywhere outside India, and no pound list is published. Nothing is charged until the free lesson has settled a course and a weekly slot. Pauses, missed lessons and moving between group and private teaching are all explained on the pricing page.'
  },

  reviewsH2: 'Six families, six Google reviews, printed unedited',

  book: {
    h2: 'Tell us about the learner',
    intro: 'A year group and what they enjoy is enough to start. The first lesson might be a game, a first typed program, or a look at whether a Year 9 has really met a textual language yet.',
    success: 'Thank you. Your class request from England has reached the team.'
  },

  faq: {
    h2: 'Coding classes in England: questions',
    intro: 'About the computing curriculum, academies and how lessons work.',
    items: [
      { q: 'Is computing compulsory in England?', a: 'Computing is a national curriculum subject with statutory programmes of study for key stages 1 to 4. Whether a particular school must follow the national curriculum depends on the type of school it is.' },
      { q: 'Do academies have to teach computing?', a: 'No. GOV.UK says academies and private schools "do not have to follow the national curriculum", and that academies must teach a broad and balanced curriculum "including English, maths and science". Computing is not named in that requirement.' },
      { q: 'How many English schools are academies?', a: 'At the January 2026 school census, 83.9 per cent of secondary schools were academies or free schools, with 83.6 per cent of secondary pupils. Across all schools it was 48.2 per cent of schools and 60.4 per cent of pupils.' },
      { q: 'What should a Year 9 be able to do?', a: 'The key stage 3 programme of study asks pupils to use two or more programming languages, at least one of them textual, to solve a variety of computational problems, alongside data structures and modular programs.' },
      { q: 'Does every pupil study computing at key stage 4?', a: 'Not necessarily. The requirement is that "all pupils must have the opportunity to study aspects of information technology and computer science at sufficient depth". A school can meet that by offering the subject.' },
      { q: 'What is the hardest step for a child?', a: 'Moving from block-based coding to a typed language. It is a change of medium rather than of difficulty, and it is much easier at eleven than at fifteen.' },
      { q: 'My child\'s school teaches very little coding. What now?', a: 'Weekly lessons outside school close the gap faster than most parents expect. A term of typed Python at the right level is usually enough to put a learner back on the curriculum\'s own timetable.' },
      { q: 'Which language do you teach?', a: 'Python for most learners, after a block-based start for younger children. It is the language most English schools use at GCSE and the one that transfers most easily to A level and beyond.' },
      { q: 'Do you cover the whole of England?', a: 'Yes. Lessons are online and live, so a learner in Northumberland and a learner in Cornwall are in the same room at the same hour.' },
      { q: 'Are lessons in English?', a: 'Yes, all lessons are taught in English by teachers working from India, and every slot is agreed in UK time.' }
    ]
  },

  next: {
    eyebrow: 'Explore the UK',
    html: 'All four school systems are compared on the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK page</a>, which carries a link to every page in this series. <a class="cg-inline-link" href="/coding-and-ai-classes-in-wales">Wales</a>, <a class="cg-inline-link" href="/coding-and-ai-classes-in-northern-ireland">Northern Ireland</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-scotland">Scotland</a> each run computing differently enough to be worth reading if a family is moving.',
    h2: 'The other nations',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'England and the UK',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-surrey', label: 'Surrey' }
  ],

  personalityCss: `
.cg-root.cg-eng .cg-hero h1 { font-weight: 700; letter-spacing: -0.032em; line-height: 1.02; }
.cg-root.cg-eng .cg-capsule { border-left: 6px solid var(--cg-accent); padding-left: 1.1rem; }
.cg-root.cg-eng .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; }
.cg-root.cg-eng .cg-section-head h2 { max-width: 25ch; letter-spacing: -0.016em; }
.cg-root.cg-eng .cg-callout { border-left-width: 5px; border-radius: 0; }
.cg-root.cg-eng .cg-table caption { letter-spacing: 0.02em; font-style: italic; }
.cg-root.cg-eng .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-eng .cg-align-code { text-transform: uppercase; letter-spacing: 0.08em; font-weight: 700; }
.cg-root.cg-eng .cg-grid-3 h3 { border-bottom: 2px solid var(--cg-accent); padding-bottom: 0.3rem; }
.cg-root.cg-eng .cg-ladder-col { border-top: 3px double var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-eng .cg-spec { border-left: 5px solid var(--cg-accent); }
`,

  dossier: {
    curriculumAuthority: 'England. GOV.UK, The national curriculum: "The national curriculum is a set of subjects and standards used by primary and secondary schools so children learn the same things"; "Other types of school, like academies and private schools, do not have to follow the national curriculum. Academies must teach a broad and balanced curriculum including English, maths and science. They must also teach relationships and sex education, and religious education." Key stages as published: early years foundation stage, Reception, ages 4 to 5; key stage 1, Years 1 to 2, ages 5 to 7; key stage 2, Years 3 to 6, ages 7 to 11; key stage 3, Years 7 to 9, ages 11 to 14; key stage 4, Years 10 to 11, ages 14 to 16. GOV.UK, National curriculum in England: computing programmes of study, statutory for key stages 1 to 4: purpose of study "A high-quality computing education equips pupils to use computational thinking and creativity to understand and change the world"; key stage 3 pupils should be taught to "use 2 or more programming languages, at least one of which is textual, to solve a variety of computational problems", to "make appropriate use of data structures [for example, lists, tables or arrays]" and to "design and develop modular programs that use procedures or functions"; key stage 4 "All pupils must have the opportunity to study aspects of information technology and computer science at sufficient depth to allow them to progress to higher levels of study or to a professional career." Department for Education, Schools, pupils and their characteristics, January 2026 school census, published 4 June 2026: 83.9 per cent of secondary schools are academies or free schools, accounting for 83.6 per cent of secondary school pupils; 48.8 per cent of primary schools, accounting for 49.9 per cent of the primary school population; 48.2 per cent of all schools are academies and 60.4 per cent of all pupils attend one. ONS, Population and household estimates, England and Wales: Census 2021: "There were 56,489,800 people in England" on census day 21 March 2021, published with the note that rounded figures "may not add exactly because of this rounding". ONS Census 2021 usual residents by region via Nomis NM_2021_1: South East 9,278,065; London 8,799,728; North West 7,417,397; East 6,335,074; West Midlands 5,950,757; South West 5,701,186; Yorkshire and The Humber 5,480,774; East Midlands 4,880,054; North East 2,647,013. Regional rows are printed as published and never summed.',
    localProject: 'The national curriculum that most English secondary schools are not required to teach. Computing is statutory across all four key stages, and at the January 2026 census 83.9 per cent of secondary schools were academies or free schools, which GOV.UK says do not have to follow the national curriculum and whose stated obligation names English, maths and science but not computing. The page sets the two facts beside each other without treating academy freedom as a scandal, then converts the gap into something a parent can use: the key stage 3 requirement for "2 or more programming languages, at least one of which is textual" becomes a single question to ask a school, with a good answer and a warning answer set out. Second edge: key stage 4 guarantees an "opportunity to study", not a course, so a pupil can lawfully do no computing between Year 9 and Year 12. AI angle: the programmes of study ask for decomposition, data structures and modular design, and an assistant supplies none of those, so the curriculum makes the case against copying better than we could. Lesson family: an entitlement weakened by who it binds rather than by what it says; distinct from Wales (preparation barred from the room), Northern Ireland (two qualifications under one name) and the NEA pages (acknowledgement and malpractice).',
    requiredMentions: [
      '83.9 per cent',
      'do not have to follow the national curriculum',
      'at least one of which is textual',
      'opportunity to study',
      '56,489,800',
      'key stage 3',
      'January 2026',
      '60.4 per cent',
      'North East',
      'computational thinking'
    ],
    sources: [
      { claim: 'GOV.UK, The national curriculum: which schools must follow it, what academies must teach instead, and the key stage, year group and age table.', url: 'https://www.gov.uk/national-curriculum' },
      { claim: 'GOV.UK, National curriculum in England: computing programmes of study: purpose of study, the key stage 3 programming requirements and the key stage 4 wording.', url: 'https://www.gov.uk/government/publications/national-curriculum-in-england-computing-programmes-of-study/national-curriculum-in-england-computing-programmes-of-study' },
      { claim: 'Department for Education, Schools, pupils and their characteristics, January 2026 school census: academy and free school shares of schools and pupils.', url: 'https://explore-education-statistics.service.gov.uk/find-statistics/school-pupils-and-their-characteristics/2025-26' },
      { claim: 'ONS, Population and household estimates, England and Wales: Census 2021: the published England figure and the rounding note.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/bulletins/populationandhouseholdestimatesenglandandwales/census2021' },
      { claim: 'ONS Census 2021 usual residents by English region, via Nomis table NM_2021_1.', url: 'https://www.nomisweb.co.uk/' }
    ],
    rejectedClaims: [
      'A total for the nine English regions: published parts are not added up on this site, and ONS publishes its own figures with a warning that rounded numbers may not add exactly.',
      'Any claim about how many academies actually teach computing, or how well: the census records school type, not curriculum delivery, and no source was found that measures it. The page says most do teach it and does not quantify that.',
      'GCSE Computer Science entry numbers or the gender split: JCQ blocks automated reads and no figure was taken from a secondary summary.',
      'The status or content of any current curriculum review: not read at a primary source for this build, so nothing is claimed about future changes.',
      'Ofqual rules on the GCSE programming project: not read at a primary source for this build and already the subject of the A level NEA page, so this page makes no claim about them.',
      'Examination entry fees: published in pounds, and this site prices in one currency.'
    ]
  }
};
