'use strict';
// 11 plus maths tuition in Sutton (ag- maths door by area, UK cluster Phase 6).
// Read on 26 September 2026 by curl, quotes grepped from the raw text:
//  - London Borough of Sutton, secondary school tests, assessments and supplementary forms: "These schools have a shared
//    selective eligibility test": Greenshaw High School, Sutton Grammar, Wallington County Grammar, Wallington High
//    School for Girls, Nonsuch High School for Girls, Wilson's School; register at any one school's website;
//    registration deadline 31 July, eligibility tests 15 September.
//  - Sutton Grammar School admissions FAQs (restating the participating schools): SET on Tuesday 15 September 2026;
//    "a multiple-choice Maths paper and a multiple-choice English paper. The tests do not include verbal reasoning or
//    non-verbal reasoning"; lozenges A to E "or a combination of answers"; papers "between 40 and 50 minutes each";
//    "There is no negative marking in the SET papers"; papers marked twice, by machine and by hand; "It is the total
//    score that determines whether your child has passed the test"; no rough paper, working on the question papers;
//    content "broadly based on the Key Stage 2 curriculum"; no specimen papers, sample questions only; registration from
//    1 May 2026 to midnight Friday 31 July 2026; SEN access requests by 12 June 2026; SET only once, Year 6 only, date of
//    birth 1 September 2015 to 31 August 2016; girls' joint second stage (Nonsuch and Wallington High School for Girls)
//    Saturday 26 September 2026; boys' shared second stage (Sutton Grammar, Wallington County Grammar, Wilson's)
//    Saturday 3 October 2026, "two papers; a Maths paper and an English paper ... not multiple choice. Each paper will
//    be around 45 minutes to 1 hour in length", no sample tests; Sutton Grammar weights SET English, SET maths, stage 2
//    English, stage 2 maths "in the ratio 2:2:3:3, an age allowance will be added, and the total rounded to the nearest
//    four marks"; calculators not allowed. Greenshaw uses the SET for its 60 ability places only.
//  - SET Maths sample questions (2027 entry PDF): "calculators and other electronic devices are not permitted".
//  - National curriculum in England, mathematics, Year 5: short division "and interpret remainders appropriately for
//    the context"; "use rounding to check answers to calculations and determine, in the context of a problem, levels
//    of accuracy".
// Spine: the same maths is asked twice, first with five options, then with none. Lesson family: answering without
// options, interpreting remainders in context and checking by rounding. Pupil Premium rules and places: not used.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'elevenplus', tag: 'SUTTON SET', label: '11 plus maths in Sutton', blurb: 'Sutton asks its maths twice: five options in the Selective Eligibility Test, then no options at all in the written second stage.' },
  slug: '11-plus-maths-tuition-sutton',
  code: 'stm',
  accent: '#4C1B25',
  accentRationale: 'Sutton 11 plus maths: a dark claret, chosen by colour distance from every accent on the site (11.35:1 on the darkest paper tint)',
  pageType: 'governorate',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: '11 plus maths tuition in Sutton',
  title: '11 Plus Maths Tuition Sutton | SET and Stage 2 Maths Online',
  description: 'Live online 11 plus maths for the Sutton Selective Eligibility Test and the written second stage: the same maths asked with five options, then with none.',
  ogDescription: 'Sutton\'s selective schools test maths twice: a multiple-choice SET paper, then a written paper with no options. Why the second needs different habits, and how we teach them.',
  twitterDescription: 'Sutton SET and second stage maths, taught live online: from five options to a blank answer line.',
  pageName: '11 Plus Maths Tuition in Sutton',
  webPageDescription: 'Live online mathematics teaching for children preparing for the Sutton Selective Eligibility Test and the shared second stage papers, based on what the participating schools and the London Borough of Sutton publish.',
  courseDescription: 'Live online maths classes for children in Years 4 and 5 working towards the Sutton SET and second stage, teaching Key Stage 2 maths for both multiple-choice and written answers.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: '11 plus maths in Sutton',
  navLinks: [
    { href: '#set', label: 'The SET' },
    { href: '#stage2', label: 'Second stage' },
    { href: '#remainders', label: 'No options' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'Sutton &middot; Selective Eligibility Test and second stage maths &middot; Live online, small groups or one to one',
  h1: '11 plus maths tuition in Sutton',
  lede: 'Sutton\'s selective schools ask a child to show their maths twice. First comes the Selective Eligibility Test, a multiple-choice maths paper and a multiple-choice English paper, with no verbal or non-verbal reasoning at all. For the boys\' schools and the girls\' schools that hold one, a second stage follows a few weeks later: another maths paper, but this time "not multiple choice". The content is the same Key Stage 2 maths. The task is not. With five options on the page, a child can check a wrong answer against the list; with a blank line, nothing warns them. That shift, from choosing to producing an answer, is what this page is about, together with what the schools and the council publish.',
  secondaryCta: { href: '#remainders', label: 'See the no-options lesson' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for my child for the Sutton SET.',
  heroNote: 'Maths only &middot; No English teaching for the test &middot; No connection with any Sutton school',
  spec: [
    ['Stage one', 'Selective Eligibility Test (SET)'],
    ['SET papers', 'Maths and English, multiple choice'],
    ['Reasoning papers', 'None: no verbal or non-verbal'],
    ['SET length', '40 to 50 minutes a paper'],
    ['Stage two', 'Written maths and English'],
    ['Stage two length', 'About 45 minutes to 1 hour a paper'],
    ['Negative marking', 'None in the SET'],
    ['We teach', 'The maths for both formats']
  ],
  capsuleQ: 'In short',
  capsule: 'Six schools share the Sutton Selective Eligibility Test: Greenshaw High School, Nonsuch High School for Girls, Sutton Grammar School, Wallington County Grammar School, Wallington High School for Girls and Wilson\'s School. The SET is two multiple-choice papers of 40 to 50 minutes, one maths and one English, and the schools say it includes no verbal or non-verbal reasoning. The pass is on the total of the two, with no negative marking. Children who pass then sit a written second stage for the girls\' or boys\' schools: again maths and English, but "not multiple choice". For September 2027 entry the SET was on Tuesday 15 September 2026, the girls\' second stage on 26 September and the boys\' on 3 October. The maths is broadly Key Stage 2 throughout, and we teach it for both formats, live online. There is no charge for the first lesson; regular lessons cost USD 100 a month in a group or USD 150 one to one.',

  picks: {
    eyebrow: 'First steps for Sutton',
    h2: 'Three courses for a two-stage test',
    lede: 'Pick by how your child copes when there are no answers to choose from.',
    items: [
      { course: '11-plus-maths-preparation-course-uk', code: 'SUTTON / 1', title: '11 plus maths, both formats', note: 'Key Stage 2 content taught for five-option questions and for written answers on a blank line.' },
      { course: 'mental-maths-mastery-kids', code: 'SUTTON / 2', title: 'Mental arithmetic, sharpened', note: 'No calculators at either stage; quick, reliable calculation leaves time to check.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'SUTTON / 3', title: 'Core primary maths', note: 'For a Year 4 child who needs place value, tables and fractions secured before anything timed.' }
    ]
  },

  sections: [
    {
      id: 'set', tint: 'tint', eyebrow: 'Stage one',
      h2: 'The Selective Eligibility Test, as the schools describe it',
      lede: 'The London Borough of Sutton lists the six schools and their deadlines; the schools publish the detail, in a shared FAQ on Sutton Grammar School\'s website. Read on 26 September 2026.',
      body: [
        { kind: 'table', caption: 'SET and second stage dates for September 2027 entry, from the participating schools and the council', head: ['Step', 'Date', 'What is published'], rows: [
          ['Registration opens', 'Friday 1 May 2026', 'One online form, reachable from any participating school\'s website.'],
          ['Access arrangements', 'By Friday 12 June 2026', 'Earlier deadline for requests and evidence for children with SEN.'],
          ['Registration closes', 'Midnight, Friday 31 July 2026', 'No late registrations accepted.'],
          ['SET', 'Tuesday 15 September 2026', 'Maths and English, multiple choice, for children in Year 6.'],
          ['Girls\' second stage', 'Saturday 26 September 2026', 'Joint test for Nonsuch High School for Girls and Wallington High School for Girls.'],
          ['Boys\' second stage', 'Saturday 3 October 2026', 'Shared test for Sutton Grammar, Wallington County Grammar and Wilson\'s.']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The SET is short and plain. The FAQ describes "a multiple-choice Maths paper and a multiple-choice English paper", each taking between 40 and 50 minutes, with a break between. It adds, unusually clearly: "The tests do not include verbal reasoning or non-verbal reasoning." Children shade a lozenge for A, B, C, D or E, and some questions ask for a combination of answers.',
            'The schools say there is no negative marking, that papers are marked twice, by machine and then by hand, and that it is the total score that decides a pass, so "a very good performance in English can compensate for one that is a little weaker in Maths". A child sits the SET once only, in Year 6; it cannot be taken earlier as practice.'
          ],
          right: [
            'No rough paper is given. The FAQ says candidates may use any spare space on the question papers for working, and calculators are not permitted. The schools do not publish specimen papers, only a short set of sample questions for each subject.',
            'Greenshaw High School uses the SET only for its ability places, and not every school holds a second stage. How each school then uses the results for places is set out by the schools, and we leave it there. This page is about the maths in the two stages.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.sutton.gov.uk/schools-and-learning/school-admissions/apply-start-secondary-school/secondary-school-tests-assessments-and-supplementary-forms" rel="noopener" target="_blank">London Borough of Sutton, secondary school tests and assessments</a>; <a class="ag-inline-link" href="https://www.suttongrammar.sutton.sch.uk/admissions/faqs/" rel="noopener" target="_blank">Sutton Grammar School, admissions FAQs</a>, covering the SET and the shared second stage; SET Maths sample questions for 2027 entry. Modern Age Coders has no connection with any participating school or with the council.' }
      ]
    },
    {
      id: 'stage2', tint: 'plain', eyebrow: 'Stage two',
      h2: 'The same subjects, with the options taken away',
      lede: 'The second stage keeps maths and English and removes the list of answers. That is the single biggest change in Sutton\'s process, and the one preparation most often ignores.',
      body: [
        { kind: 'two',
          leftH3: 'What is published',
          left: [
            'For boys, Sutton Grammar School, Wallington County Grammar School and Wilson\'s School share one second stage: "two papers; a Maths paper and an English paper. The tests will not include verbal or non-verbal reasoning, and are not multiple choice. Each paper will be around 45 minutes to 1 hour in length." No sample tests are released; the content is broadly Key Stage 2.',
            'For girls, Nonsuch High School for Girls and Wallington High School for Girls hold a joint second stage, with maths and English papers, and apply common criteria.'
          ],
          rightH3: 'How the scores combine at Sutton Grammar',
          right: [
            'Sutton Grammar School publishes its own arithmetic. Four standardised scores, SET English, SET maths, second-stage English and second-stage maths, "will be weighted in the ratio 2:2:3:3, an age allowance will be added, and the total rounded to the nearest four marks". Wilson\'s and Wallington County publish their own methods.',
            'Read as a Year 6 ratio, 2:2:3:3 has ten parts, and the two second-stage papers hold six of them. At that school the written papers count for more than the multiple-choice ones. We mention it to show why written maths deserves real time, not to predict anyone\'s result.'
          ] },
        { kind: 'p', html: 'For a family, the practical point is the calendar. The SET falls in mid-September and the written papers two or three weeks later. There is no time after the SET to learn a new way of answering. Written maths has to be practised through Year 5 alongside multiple-choice work, not bolted on at the end.' }
      ]
    },
    {
      id: 'remainders', tint: 'deep', eyebrow: 'The lesson',
      h2: 'Answering when nobody offers you a choice',
      lede: 'Two Year 5 curriculum statements carry most of the weight here: interpreting remainders for the context, and using rounding to check answers.',
      body: [
        { kind: 'table', caption: 'One division, three questions: a Year 5 lesson we use with Sutton pupils (our own example)', head: ['The question', 'The calculation', 'The answer that fits'], rows: [
          ['215 guests sit at tables of 8. How many tables are needed?', '215 ÷ 8 = 26 remainder 7', '27 tables: the 7 left over still need a table'],
          ['215 guests sit at tables of 8. How many tables are completely full?', '215 ÷ 8 = 26 remainder 7', '26 tables'],
          ['215 stickers are shared among 8 children. How many does each get?', '215 ÷ 8 = 26 remainder 7', '26 each, with 7 left over'],
          ['215 m of ribbon is cut into 8 equal pieces. How long is each piece?', '215 ÷ 8 = 26.875', '26.875 m, or 26 m 87.5 cm']
        ] },
        { kind: 'two', mt: true,
          left: [
            'The national curriculum asks Year 5 pupils to use short division and "interpret remainders appropriately for the context". The same sum has four right answers depending on what is being divided. On a multiple-choice paper, a child who writes 26 remainder 7 can often find the right option by elimination. On a written paper they must decide, alone, whether the answer is 26, 27, 26 remainder 7 or 26.875.',
            'We teach one habit for every written answer: reread the last line of the question and say the answer out loud as a sentence. "We need 27 tables." Sentences expose nonsense that bare numbers hide.'
          ],
          right: [
            'The second habit is checking by rounding, which the curriculum also names: "use rounding to check answers to calculations and determine, in the context of a problem, levels of accuracy". 215 is close to 216, and 216 ÷ 8 = 27, so an answer near 27 is right and an answer near 270 or 2.7 is not.',
            'The third is units. A written paper has no options to hint that the answer is in metres rather than centimetres. Children learn to write the unit before the number, so the unit is decided first.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study/national-curriculum-in-england-mathematics-programmes-of-study" rel="noopener" target="_blank">national curriculum in England, mathematics</a>, Year 5 multiplication and division, and addition and subtraction (statutory requirements). The table is a Modern Age Coders teaching example, not a test question.' }
      ]
    },
    {
      id: 'both', tint: 'tint', eyebrow: 'Two formats, one course',
      h2: 'Teaching for five options and for none',
      lede: 'A child who can only do one format is half prepared for Sutton. We teach both side by side, from the start.',
      body: [
        { kind: 'three', cells: [
          { h3: 'The multiple-choice week', p: 'Short sets of five-option questions, marked at once, so speed and accuracy on the SET style become routine. No negative marking means every question is answered.' },
          { h3: 'The written week', p: 'The same topics, with the options removed. The child writes the answer, the unit and a one-line check. We mark the check as well as the answer.' },
          { h3: 'The swap', p: 'Then we give a question the child got right with options and ask it again without them. That is where hidden weaknesses show, and where the real teaching happens.' }
        ] },
        { kind: 'two', mt: true,
          left: [
            'The SET gives no rough paper, so we practise with working written in the margins of the question sheet, small and in order. The second stage, being written, rewards the same tidiness: a teacher marking a script can follow neat work, and a child can find their own mistake in it.',
            'Some SET questions ask for a combination of answers rather than one. In maths that usually means "which two of these are true?" questions, which punish half-checking. We practise them so the instruction to choose two is noticed every time.'
          ],
          right: [
            'We do not have Sutton papers and do not pretend to. The schools release sample questions only, and we never copy those. Our questions are written for Key Stage 2 content, in both formats, and changed every term so they cannot be learned by heart.',
            'English is half of the SET total and part of the second stage, but it is not something we teach for the test. Families should know that before they book with us.'
          ] }
      ]
    },
    {
      id: 'schools', tint: 'plain', eyebrow: 'The participating schools',
      h2: 'Six schools, two second stages, one online class',
      lede: 'The council and the schools name the participants. We list them so it is clear which tests this page covers.',
      body: [
        { kind: 'table', caption: 'The six participating schools, as the Sutton Grammar School FAQ and the council list them', head: ['School', 'After the SET'], rows: [
          ['Greenshaw High School', 'SET used for its ability places; no second stage'],
          ['Nonsuch High School for Girls', 'Joint girls\' second stage'],
          ['Wallington High School for Girls', 'Joint girls\' second stage'],
          ['Sutton Grammar School', 'Shared boys\' second stage'],
          ['Wallington County Grammar School', 'Shared boys\' second stage'],
          ['Wilson\'s School', 'Shared boys\' second stage']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Registration is one form for all six schools, whichever school website a family starts from, and the SET is the same paper wherever a child lives. So is our lesson: live, on a screen at home.',
            'For coding and computing in the borough, we have a separate <a class="ag-inline-link" href="/coding-classes-in-sutton-london">Sutton coding page</a>.'
          ],
          right: [
            'Our groups are built by level, not by postcode. A child preparing for the SET joins others at the same stage in Year 5 maths, from anywhere in the country, which is how we keep the groups between five and ten.',
            'We have no connection with any of the six schools or with the London Borough of Sutton, and we give no advice on applications or places.'
          ] },
        { kind: 'source', html: 'Sources: Sutton Grammar School admissions FAQs; London Borough of Sutton, secondary school tests and assessments; both read 26 September 2026.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Working back from September',
    h2: 'Four stages, two formats',
    lede: 'For a child now in Year 5, the next SET will fall in September of Year 6, with written papers soon after. Every stage below is practised in both formats.',
    table: { caption: 'Building towards a multiple-choice paper and a written one', head: ['When', 'Stage', 'What secure looks like'], rows: [
      ['Year 4', '1. Facts', 'Tables and number bonds instant; place value clear to a million'],
      ['Autumn, Year 5', '2. Written methods', 'Long multiplication and short division correct, with remainders read for the context'],
      ['Spring, Year 5', '3. The swap', 'Questions answered correctly with options are also answered correctly without them'],
      ['Summer, Year 5', '4. Two clocks', 'A 45-minute multiple-choice paper one week, a written paper the next, both finished and checked']
    ] },
    left: { h3: 'Late start', ps: [
      'Starting in the summer of Year 5 still leaves time, if the written format is not left out. It is the part that improves slowest.',
      'At the trial lesson we will say plainly what a few months can do.'
    ] },
    right: { h3: 'After October', ps: [
      'Written maths is the maths of secondary school. Many children continue into <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a>, where every answer has to be produced, not picked.',
      'Keen ones try the challenges on our <a class="ag-inline-link" href="/uk-coding-maths-and-ai-competitions-calendar">competitions calendar</a>.'
    ] }
  },

  catalogue: {
    eyebrow: 'Our courses',
    h2: 'Maths and coding for Sutton families',
    lede: 'Grouped by stage. Open any card for the syllabus.',
    bands: [
      { num: 'I', h3: 'For the SET and stage two', sub: 'Years 3 to 5', courses: [
        { code: 'STM / I-a', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths preparation', blurb: 'Key Stage 2 maths for chosen and written answers.' },
        { code: 'STM / I-b', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Calculation without a calculator, at speed.' },
        { code: 'STM / I-c', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 5', blurb: 'Foundations for a child not yet ready for timed work.' },
        { code: 'STM / I-d', slug: 'abacus-mental-maths-course-for-kids', title: 'Abacus and mental maths', blurb: 'Concrete, then visual, then mental calculation.' }
      ] },
      { num: 'II', h3: 'Secondary', sub: 'Year 6 and after', courses: [
        { code: 'STM / II-a', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths mastery', blurb: 'Written reasoning and algebra for Key Stage 3.' },
        { code: 'STM / II-b', slug: 'gcse-mathematics-mastery', title: 'GCSE maths, foundation and higher', blurb: 'Where method marks and written working count most.' },
        { code: 'STM / II-c', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiad and competition maths', blurb: 'Problems that need a full written argument.' }
      ] },
      { num: 'III', h3: 'Code and maths', sub: 'Producing answers, not picking them', courses: [
        { code: 'STM / III-a', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Programs that compute and check their own answers.' },
        { code: 'STM / III-b', slug: 'scratch-programming-complete-course', title: 'Scratch coding for kids', blurb: 'Precise instructions, tested at once.' },
        { code: 'STM / III-c', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Typed code for confident primary pupils.' }
      ] },
      { num: 'IV', h3: 'Beyond', sub: 'Teenage years', courses: [
        { code: 'STM / IV-a', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths and speed calculation', blurb: 'Quicker methods, once the standard ones are secure.' },
        { code: 'STM / IV-b', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Maths that ends in working software.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Timing',
    h2: 'After school, on the UK clock',
    lede: 'Our teachers are in India, and when Britain changes its clocks in March and October the gap changes with it. We fix primary lessons in UK time, in the early evening or at weekends, and adjust on our side.',
    slots: [
      { time: 'Early evening, weekdays', l: 'A settled hour between school and supper.' },
      { time: 'Weekend mornings', l: 'Good for children who flag after a school day.' },
      { time: 'Half terms', l: 'Short intensive sessions in the break.' }
    ],
    cells: [
      { h3: 'One teacher, all year', p: 'Continuity means patterns in a child\'s mistakes are spotted early.' },
      { h3: 'Brief honest reports', p: 'A few plain lines to parents after lessons, good news and bad.' },
      { h3: 'Five to ten per class', p: 'Children at the same level, so the pace suits everyone in the room.' },
      { h3: 'Written by us', p: 'All questions are ours, in both formats; no school material is reproduced.' },
      { h3: 'Private option', p: 'One to one when a child needs targeted help with written answers.' },
      { h3: 'Maths only', p: 'We do not teach the English papers and do not advise on admissions.' }
    ]
  },

  projectsH2: 'Where our students go next',
  projectsLede: 'Four projects built by students at our school, every one of whom started with arithmetic like this. See more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews by parents on our Google profile, reproduced exactly.',

  fees: {
    h2: 'Fees',
    lede: 'A flat monthly fee in US dollars, as for all families outside India. No deposit and no minimum term.',
    free: ['A full lesson with a teacher', 'An honest account of what we saw', 'No card asked for'],
    group: ['Five to ten children, one level', 'The same teacher weekly', 'Written work marked and returned', 'A certificate at the end'],
    one: ['One teacher, one child', 'Focused on written answers if needed', 'Valuable between the SET and stage two']
  },

  faq: {
    eyebrow: 'Sutton questions',
    h2: 'What Sutton families ask us',
    items: [
      { q: 'What is in the Sutton Selective Eligibility Test?', a: 'Two multiple-choice papers, maths and English, each between 40 and 50 minutes, according to the participating schools. There are no verbal or non-verbal reasoning papers. Answers are shaded as lozenges A to E.' },
      { q: 'Is there negative marking in the SET?', a: 'No. The schools say there is no negative marking in the SET papers, so a child should answer every question.' },
      { q: 'Does my child have to pass the maths paper on its own?', a: 'The schools say it is the total score that determines a pass, so a strong performance in one paper can make up for a slightly weaker one in the other.' },
      { q: 'What is the second stage?', a: 'For boys, a shared second stage for Sutton Grammar, Wallington County Grammar and Wilson\'s: a maths paper and an English paper that are not multiple choice, each around 45 minutes to an hour. For girls, a joint second stage for Nonsuch and Wallington High School for Girls.' },
      { q: 'What maths do the papers cover?', a: 'The schools say the content is broadly based on the Key Stage 2 curriculum. For a September test in Year 6, that means the primary curriculum up to the end of Year 5, answered without a calculator.' },
      { q: 'When are the tests for September 2028 entry?', a: 'They had not been published when we checked on 26 September 2026. For 2027 entry, registration ran from 1 May to midnight on 31 July 2026 and the SET was on Tuesday 15 September 2026.' },
      { q: 'Are there past papers?', a: 'No. The schools publish sample questions only, and no samples for the second stage. We write our own practice in both formats and do not copy school material.' },
      { q: 'Do you teach the English papers?', a: 'No. We teach maths only, and we do not give advice on applications or places.' },
      { q: 'Can a child take the SET early for practice?', a: 'No. The schools say the SET is for children in Year 6 and can be taken only once.' },
      { q: 'What are your fees?', a: 'The first lesson is free. After that, a group place is USD 100 a month and one to one is USD 150 a month, with no deposit and no minimum term.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Nearby',
    h2: 'Related pages for south London and Surrey families',
    lede: 'Coding in Sutton, the national 11 plus page, and other selective areas nearby.',
    items: [
      { href: '/coding-classes-in-sutton-london', label: 'Coding classes in Sutton', p: 'Our page on coding for the borough.' },
      { href: '/11-plus-maths-tuition', label: '11 plus maths tuition', p: 'The national 11 plus maths page.' },
      { href: '/11-plus-maths-tuition-kent', label: '11 plus maths in Kent', p: 'A county test sat in the first week of Year 6.' },
      { href: '/11-plus-maths-tuition-trafford', label: '11 plus maths in Trafford', p: 'A consortium that names four maths areas.' },
      { href: '/coding-classes-in-surrey', label: 'Coding classes in Surrey', p: 'For families over the county line.' },
      { href: '/coding-classes-in-united-kingdom', label: 'All our UK pages', p: 'Every UK area we cover.' }
    ]
  },

  start: {
    h2: 'Arrange a free lesson',
    lede: 'Let us know the school year and whether written answers or multiple choice feels harder. We teach a real lesson and then give you a straight account of it.',
    readFirst: 'Reading first? The <a class="ag-inline-link" href="/courses">course syllabuses</a> are all online, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> sets out our method, and the <a class="ag-inline-link" href="/coding-roadmap">roadmap</a> shows what follows what.',
    note: 'WhatsApp gets the quickest answer. Our phone number is Indian and we have no office in Britain.',
    formNote: 'No card details needed; one reply to settle a time.'
  },

  footer: {
    cols: [
      { h4: 'Maths', links: [
        { href: '/11-plus-maths-tuition', label: '11 plus maths tuition' },
        { href: '/courses/11-plus-maths-preparation-course-uk', label: '11 plus maths course' },
        { href: '/courses/mental-maths-mastery-kids', label: 'Mental maths' },
        { href: '/courses/comprehensive-middle-school-mathematics-mastery', label: 'Middle school maths' }
      ] },
      { h4: 'Local and national', links: [
        { href: '/coding-classes-in-sutton-london', label: 'Coding in Sutton' },
        { href: '/coding-classes-in-united-kingdom', label: 'Coding classes in the UK' },
        { href: '/11-plus-maths-tuition-kent', label: '11 plus maths in Kent' },
        { href: '/uk-coding-maths-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] }
    ],
    bottomRight: 'The schools set the SET; we teach the maths'
  },

  personalityCss: `
.ag-root.ag-stm .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-stm .ag-capsule { border-left-width: 5px; border-radius: 0 12px 12px 0; }
.ag-root.ag-stm .ag-section-head h2 { max-width: 27ch; }
.ag-root.ag-stm .ag-table caption { text-align: left; font-weight: 650; }
.ag-root.ag-stm .ag-table td:nth-child(2) { font-variant-numeric: tabular-nums; }
.ag-root.ag-stm .ag-spec dt { letter-spacing: 0.11em; }
.ag-root.ag-stm .ag-three h3 { letter-spacing: -0.012em; }
.ag-root.ag-stm .ag-slots { gap: 1rem; }
`,

  mustMention: ['Selective Eligibility Test', '2:2:3:3', 'lozenge', 'Greenshaw High School', 'Wallington County Grammar School', 'Nonsuch High School for Girls', 'no negative marking', 'interpret remainders appropriately for the context']
};
