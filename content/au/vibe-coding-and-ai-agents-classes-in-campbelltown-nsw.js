'use strict';
// Campbelltown, NSW (cg- regional city page, Australia cluster Phase 7, row 202). Shaped page (vibe coding and AI
// agents). Slug suffixed -nsw because Australia has two Campbelltowns (NSW and SA) and the UK has another. Spine:
// when an agent is asked how many public schools are in Campbelltown, which Campbelltown, and which reading of the
// question? Data: NSW public schools master dataset (Data.NSW), extracted 2 October 2026 (scratchpad au/r5/
// nsw_master.csv, 2,210 rows). Our code (au/r8/cmb_name.py): Town_suburb equal to Campbelltown after strip and
// casefold 10 (raw 'Campbelltown ' x8, 'CAMPBELLTOWN' x1, 'Campbelltown' x1; postcode 2560 for all); exact raw match
// 'Campbelltown' 1; LGA 'Campbelltown (NSW)' 53 (43 outside the suburb; 21 normalised suburbs; Primary 33, Secondary
// 12, Schools for Specific Purposes 8); School_name contains Campbelltown 4; any column mentions Campbelltown 111
// (Operational_directorate_office 81 rows, LGA 53, Principal_network 18, Town_suburb 10, School_name 4, plus
// electorate columns, not used); rows for Campbelltown SA 0. Earliest first teacher in the LGA Minto Public School
// 1867, Campbelltown Public School 1876; newest Denham Court Public School 18 October 2021. ABS names the two council
// areas Campbelltown (NSW) LGA11500 and Campbelltown (SA) LGA40910. Lesson family: namesake place names and qualified
// keys so an agent does not mix Campbelltown NSW and Campbelltown SA; screened free site-wide on 10 October 2026 and
// claimed by AU-R8.
// Place facts read raw on 10 October 2026: ABS Census 2021 QuickStats, Campbelltown (NSW) LGA (LGA11500), with New
// South Wales and Australia: 176,519 people; median age 35; 46,917 families; 63,062 private dwellings; 2.9 people per
// household; separate house 44,903 (78.3 percent; NSW 65.6; Australia 72.3); flat or apartment 3,674 (6.4; NSW 21.7;
// Australia 14.2); Professionals 13,760 (18.9; NSW 25.8; Australia 24.0); Technicians and Trades Workers 8,805 (12.1;
// NSW 11.9); Bachelor Degree level and above 28,589 (20.8; NSW 27.8; Australia 26.3); aged 15 to 19: 10,930 (6.2;
// NSW 5.7); aged 20 to 24: 11,285 (6.4; NSW 6.1). Campbelltown (SA) LGA40910: 54,800 people, median age 40. ABS ERP 30
// June 2025: Campbelltown (NSW) 191,285; Campbelltown (SA) 58,826. NSW 2027 term dates. Excluded by the cluster rules:
// income, rent, mortgage, ancestry, birthplace, language, religion, health; electorate fields not used.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'CAMPBELLTOWN', label: 'Campbelltown', blurb: 'Campbelltown, NSW, where an AI agent asked to count schools has to work out which Campbelltown, and which question, it was given.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-campbelltown-nsw',
  code: 'cmbt',
  accent: '#161262',
  accentRationale: 'Campbelltown, NSW: a near-black midnight indigo (HSV saturation 0.82, value 0.38, hue 243), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims files, 15.3:1 on white and 12.3:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Campbelltown',
    eyebrow: 'Campbelltown, south west Sydney, New South Wales',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'Australia', href: '/coding-classes-in-australia' },
    { label: 'New South Wales', href: '/coding-and-ai-classes-in-new-south-wales' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Campbelltown, New South Wales',
  title: 'Vibe Coding and AI Agents Classes in Campbelltown, NSW',
  description: 'Live online vibe coding and AI agents classes for Campbelltown teenagers and adults, with a project where an agent must tell two Campbelltowns and five counts apart.',
  ogDescription: 'Vibe coding and AI agents for Campbelltown learners, tested on a simple question with five honest answers: how many schools are in Campbelltown?',
  twitterDescription: 'Campbelltown vibe coding and AI agents classes, live online, first lesson free.',
  ogImageCourse: 'codex-and-claude-code-ai-coding-agents-course-for-teens',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Campbelltown Learners',
    description: 'Level-matched online vibe coding, AI coding agents, data matching and Python for teenagers and adults in Campbelltown and south west Sydney, taught live in English.'
  },

  h1: 'Vibe coding and AI agents classes in Campbelltown',
  capsuleQ: 'Can AI agents classes in Campbelltown teach a learner to pin down exactly what a question means?',
  capsule: 'Yes, and that is most of what these live classes are about: a Campbelltown teenager or adult directs AI agents on real data, then checks which question the agent actually answered. The City of Campbelltown counted 176,519 people at the 2021 Census. Lessons run online in small level-matched groups or one to one, and the first one is free.',
  lead: 'Ask an AI agent how many public schools there are in Campbelltown and give it the NSW Department of Education\'s master list. It can truthfully reply 1, 4, 10, 53 or 111. One school has the town typed exactly as Campbelltown; four have it in their name; ten are in the suburb once stray spaces and capitals are cleaned; 53 sit in the council area; and 111 rows mention Campbelltown somewhere, mostly because of a regional office address. Then there is the other Campbelltown, a council area of 54,800 people in Adelaide\'s east, with no rows in this file at all. Our Campbelltown learners find out how to make a question precise enough that an agent cannot answer the wrong one.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding and AI agents class for a learner in Campbelltown, NSW.',

  picks: {
    eyebrow: 'Course picks for Campbelltown',
    h2: 'Agent skills for Campbelltown learners',
    intro: 'All four reach the school-count project below. The free trial chooses between them, and nobody is asked for a card.',
    items: [
      { course: 'codex-and-claude-code-ai-coding-agents-course-for-teens', band: 'Ages 13 to 17', note: 'Real tasks for coding agents, using tools whose terms allow the learner\'s age, with every answer checked.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Building small apps by steering AI, with precise prompts and tests from the start.' },
      { course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', band: 'University students', note: 'Full-stack projects built with AI help, including data matching and clean keys.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', band: 'Adults and professionals', note: 'Delegating data work to agents while keeping the definitions under your control.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Campbelltown in the Census',
      h2: 'A south west Sydney city of 176,519',
      intro: 'The 2021 Census for the Campbelltown (NSW) council area, as the ABS labels it, beside New South Wales and Australia.',
      body: [
        { kind: 'p', text: 'The ABS recorded 176,519 residents with a median age of 35. They formed 46,917 families in 63,062 private dwellings, with 2.9 people in the average household.' },
        { kind: 'table', caption: 'Campbelltown (NSW) beside NSW and Australia (2021 Census shares)', head: ['Indicator', 'Campbelltown', 'NSW', 'Australia'], rows: [
          ['Separate houses (44,903 dwellings)', '78.3%', '65.6%', '72.3%'],
          ['Flats or apartments (3,674 dwellings)', '6.4%', '21.7%', '14.2%'],
          ['Bachelor degree or above (28,589 people)', '20.8%', '27.8%', '26.3%'],
          ['Professionals (13,760 people)', '18.9%', '25.8%', '24.0%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Trades', p: 'Technicians and trades workers numbered 8,805, 12.1% of workers, close to the NSW share of 11.9%.' },
          { h3: 'Older teenagers', p: 'Residents aged 15 to 19 numbered 10,930, 6.2% of the population against 5.7% for the state.' },
          { h3: 'Early twenties', p: 'Another 11,285 residents were aged 20 to 24.' }
        ] },
        { kind: 'p', text: 'The ABS estimate for Campbelltown (NSW) at 30 June 2025 is 191,285. Census figures include small random changes for privacy, so table rows may not add to totals; numbers here are exactly as published, and we never total rows ourselves.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How many public schools are in Campbelltown, and which Campbelltown?',
      intro: 'The NSW public schools master dataset, extracted on 2 October 2026, questioned five ways by an AI agent and checked by hand.',
      body: [
        { kind: 'table', caption: 'One question, five readings (our code, 10 October 2026)', head: ['What the agent matched', 'Rows', 'What that really counts'], rows: [
          ['Town typed exactly as Campbelltown', '1', 'A spelling, not a place'],
          ['School name contains Campbelltown', '4', 'Schools named after the town'],
          ['Town field, spaces and capitals cleaned', '10', 'Schools in the suburb, all postcode 2560'],
          ['Council area is Campbelltown (NSW)', '53', 'Schools across the whole city'],
          ['Campbelltown anywhere in the row', '111', 'Mostly rows naming a regional office']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. The words are not the key', p: 'Campbelltown is a suburb, a council area, part of four school names and a regional office location. A text search cannot tell these apart; only the column it searches can.' },
          { h3: '2. The other Campbelltown', p: 'South Australia has a Campbelltown council of its own, with 54,800 residents in 2021. The ABS keeps them apart with codes, LGA11500 for NSW and LGA40910 for SA, and with a state in brackets after each name.' },
          { h3: '3. Qualified keys', p: 'Matching on a code, or on name plus state, removes the ambiguity entirely. A learner who tells the agent to use LGA11500 gets 53 every time, whatever the spelling.' }
        ] },
        { kind: 'callout', h3: 'Why the agent cannot guess', p: 'Each of the five answers is correct for some reading of the question. An agent that picks one without saying so will sound confident and may still be wrong for the person asking. The fix is not a smarter agent; it is a question that names the column, the cleaning rule and the place code. Once those are written down, the 53 schools break down into 33 primary, 12 secondary and 8 for specific purposes, and the answer stops moving.' },
        { kind: 'p', text: 'Within the council area the oldest school on record is Minto Public School, with a first teacher in 1867, followed by Campbelltown Public School in 1876; the newest is Denham Court Public School, whose first teacher is dated 18 October 2021. The records are the department\'s; the matching and counts are ours.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Writing questions agents cannot misread',
      h2: 'Making a place name into a reliable key',
      intro: 'Practised on Campbelltown, then used on customer addresses, product names and any data where two things share a name.',
      body: [
        { kind: 'table', caption: 'Steps that fixed the Campbelltown count', head: ['Step', 'What to tell the agent', 'Effect here'], rows: [
          ['Name the column', 'Count by the LGA field, not the whole row', '111 becomes 53'],
          ['Use a code', 'Match ABS code LGA11500, not the word', 'SA Campbelltown can never leak in'],
          ['State the cleaning', 'Strip spaces and ignore case before comparing', '1 becomes 10 for the suburb'],
          ['Ask for the definition back', 'Have the agent restate what it counted', 'Mismatched readings show up before the number']
        ] },
        { kind: 'p', text: 'Asking an agent to restate its interpretation is the single most useful habit here. If it says it counted rows mentioning Campbelltown, the learner knows at once that 111 is not the answer they wanted.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Secondary students', p: 'Ask an agent the school question three ways, record each answer and explain which reading it used.' },
          { h3: 'University students', p: 'Design keys for a table that mixes NSW and SA places, and write tests that fail if names collide.' },
          { h3: 'Adults at work', p: 'Before an agent merges two lists, agree the key in writing; a shared name is never enough.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is not affiliated with the NSW Department of Education, the ABS or Campbelltown City Council. The records and statistics are theirs; the analysis is our own.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Around Campbelltown',
      h2: 'Sydney time and the 2027 school calendar',
      intro: 'What shapes when a Campbelltown learner can take a live lesson.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Sydney time', p: 'Campbelltown shares Sydney\'s clock: ten hours ahead of UTC in winter, eleven once daylight saving starts on the first Sunday of October.' },
          { h3: 'India time', p: 'Our teachers work on India time, which sits 4.5 hours behind Campbelltown from April to October and 5.5 hours behind for the rest of the year.' },
          { h3: 'Not the Adelaide one', p: 'Campbelltown in South Australia keeps Adelaide time, half an hour behind; all our times for this page are Sydney times.' }
        ] },
        { kind: 'spec', title: 'End of the 2027 NSW school year', p: 'The NSW Department of Education lists Term 3 of 2027 ending on Friday 24 September and Term 4 running from Monday 11 October to Monday 20 December.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first prompt to agents that answer the right question',
    intro: 'Treat these bands as rough; the free lesson finds the real level.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Precise prompts', p: 'Writing requests an AI cannot misread and checking what comes back.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Ages 15 to 18', h3: 'Agents on records', p: 'Directing coding agents on open data and auditing their counts.', courses: ['codex-and-claude-code-ai-coding-agents-course-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'University', h3: 'Keys and joins', p: 'Designing identifiers, joining datasets safely and testing for collisions.', courses: ['vibe-coding-for-college-fullstack-ai-dsa-career-course', 'data-structures-algorithms-masterclass-college'] },
      { band: 'Adults', h3: 'Agents at work', p: 'Delegating analysis while owning the definitions behind every number.', courses: ['codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an agent can search the data, why learn to define the question?',
    intro: 'Because the agent will answer whichever question it thinks you asked.',
    p1: 'A coding agent given the schools file and the word Campbelltown will produce a number quickly, and that number will match one of five readings. Without a stated column, cleaning rule and place code, nobody can tell which, including the agent.',
    p2: 'Our Campbelltown learners write the definitions first, then let the agent do the work, then ask it to restate what it counted. The agent supplies speed; the learner supplies the meaning.',
    closer: 'A Campbelltown learner who has seen one question return 1, 4, 10, 53 and 111 will define terms before delegating to any AI tool, a habit that grows more valuable after 2026.',
    blogAnchor: 'how to work with AI agents without losing control'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'South west Sydney, live on screen',
    intro: 'Online lessons reach Campbelltown without a trip into the city.',
    cells: [
      { h3: 'Booked in Sydney time', p: 'Slots are agreed in Campbelltown time and stay fixed when the clocks change.' },
      { h3: 'Matched to the NSW syllabus years', p: 'Lessons are pitched at the learner\'s NSW year, Year 11 and 12 HSC candidates included, and taught in English.' },
      { h3: 'Start by building', p: 'The free session is practical work with an AI tool and a teacher. A course and time are suggested at the end, and no payment details are ever taken.' },
      { h3: 'Level-based groups', p: 'Each class holds fifteen to twenty people working at the same stage, recruited widely enough that every stage gets a sensible hour.' },
      { h3: 'Twice weekly', p: 'Around eight sessions each month, with holidays and exams scheduled around in advance.' },
      { h3: 'Age-appropriate tools', p: 'Under-18s only use AI tools whose terms allow their age, and teachers choose accordingly.' }
    ],
    spec: { title: 'Times without confusion', p: 'Every time is given in Sydney time, never in Adelaide time, so there is no mixing up the two Campbelltowns.' }
  },

  fees: {
    h2: 'Fees for vibe coding and AI agents classes in Campbelltown',
    intro: 'Three options in total.',
    first: 'A free session finishing with a recommended level, course and time.',
    group: 'Roughly eight group sessions a month with fifteen to twenty learners at your stage.',
    private: 'Roughly eight private sessions a month with one dedicated teacher.',
    closer: 'Campbelltown families pay the same US dollar fee charged across Australia. Nothing is due until the trial agrees a course and time, and the pricing page explains holidays, missed sessions and switching between formats.'
  },

  reviewsH2: 'Reviews from our learners on Google',

  book: {
    h2: 'Share a few details and we will plan the trial',
    intro: 'We prepare the opening task: a precise-prompt game for a Year 8 beginner, the five-readings school count for a Year 11 student, or a key-design exercise for an adult.',
    success: 'Thank you. We will be in touch soon about a vibe coding and AI agents class in Campbelltown.'
  },

  faq: {
    h2: 'Campbelltown vibe coding and AI agents questions',
    intro: 'What Campbelltown families and adult learners ask before starting.',
    items: [
      { q: 'How many people live in Campbelltown, NSW?', a: 'The 2021 Census counted 176,519 people in the Campbelltown (NSW) council area. The ABS estimate at 30 June 2025 is 191,285.' },
      { q: 'What is a qualified key?', a: 'A qualified key identifies something by more than its name, for example a name plus state, or an official code such as the ABS area code. It stops two things that share a name, like the Campbelltowns in NSW and South Australia, from being mixed up.' },
      { q: 'What is the Campbelltown schools project?', a: 'Learners give an AI agent the NSW public schools master dataset and ask how many schools are in Campbelltown, then trace why the answer can be 1, 4, 10, 53 or 111, and rewrite the question so only one answer is possible.' },
      { q: 'Is this page about Campbelltown in South Australia?', a: 'No. This page is for Campbelltown in south west Sydney. Campbelltown in South Australia is a separate council area in Adelaide, covered by our South Australia page.' },
      { q: 'Which AI tools can teenagers use?', a: 'Only tools whose terms permit the learner\'s age. Teachers pick suitable tools for under-18s, and some agent tools are reserved for adult learners.' },
      { q: 'When do lessons run for Campbelltown?', a: 'Slots after school, in the evening and at weekends are fixed during the trial and given in Sydney time; Campbelltown runs ahead of India time by 4.5 hours in winter and 5.5 hours while daylight saving lasts.' },
      { q: 'What about children under 12?', a: 'Yes, from age 6 with visual coding tools. The agent project on this page is meant for teenagers and adults.' },
      { q: 'Is there a Modern Age Coders office in Campbelltown?', a: 'No, and we do not claim one. Teaching is live and online only, with no premises anywhere in Australia. A learner needs a laptop or desktop, working sound and a steady connection, and the contact number on this page is an Indian number.', boiler: true },
      { q: 'What do vibe coding and AI agents classes in Campbelltown cost?', a: 'The first lesson is free. After that a group place costs USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month for the same pattern one to one. Course, format and time are agreed before any payment.', boiler: true },
      { q: 'How large are the groups?', a: 'Between five and ten learners, matched on level, pace and goals rather than on age or postcode. When no group fits a workable time, one-to-one lessons are offered instead.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'More in New South Wales',
    h2: 'Pages near Campbelltown',
    html: 'To the north is <a class="cg-inline-link" href="/best-coding-classes-in-sydney">the Sydney coding page</a>, and to the south <a class="cg-inline-link" href="/best-coding-classes-in-wollongong">coding classes in Wollongong</a> and <a class="cg-inline-link" href="/online-coding-and-python-classes-in-bowral">online Python in Bowral</a>. For the rest of the state there is <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">our New South Wales overview</a>; if you were looking for the Adelaide Campbelltown, start with <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-australia">coding and AI classes in South Australia</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Campbelltown and New South Wales',
  footerPlaces: [
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/best-coding-classes-in-wollongong', label: 'Wollongong' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-cmbt .cg-hero-grid { align-items: start; gap: clamp(1.05rem, 3vw, 2.5rem); }
.cg-root.cg-cmbt .cg-hero h1 { font-weight: 705; letter-spacing: -0.018em; line-height: 1.08; }
.cg-root.cg-cmbt .cg-capsule { border-left: 2px solid var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-cmbt .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-cmbt .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.012em; }
.cg-root.cg-cmbt .cg-grid-3 { gap: clamp(0.95rem, 2.3vw, 1.8rem); }
.cg-root.cg-cmbt .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-cmbt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-cmbt .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-cmbt .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Campbelltown (NSW) LGA, ABS Census 2021 QuickStats, area code LGA11500, with New South Wales and Australia (read 10 October 2026): 176,519 people; median age 35; 46,917 families; 63,062 private dwellings; 2.9 people per household; separate house 44,903 (78.3 percent; NSW 65.6; Australia 72.3); flat or apartment 3,674 (6.4 percent; NSW 21.7; Australia 14.2); Professionals 13,760 (18.9 percent; NSW 25.8; Australia 24.0); Technicians and Trades Workers 8,805 (12.1 percent; NSW 11.9; Australia 12.9); Bachelor Degree level and above 28,589 (20.8 percent; NSW 27.8; Australia 26.3); aged 15 to 19: 10,930 (6.2 percent; NSW 5.7); aged 20 to 24: 11,285 (6.4 percent; NSW 6.1). Campbelltown (SA) LGA40910: 54,800 people, median age 40; ABS ASGS 2021 point query at 138.67 E, 34.88 S returns LGA Campbelltown (SA) and GCCSA Greater Adelaide. ABS ERP 30 June 2025: Campbelltown (NSW) LGA 11500 191,285; Campbelltown (SA) LGA 40910 58,826. NSW Department of Education 2027: Term 3 Monday 19 July to Friday 24 September; Term 4 Monday 11 October to Monday 20 December. IANA tz Australia/Sydney UTC+10, daylight saving UTC+11; Australia/Adelaide UTC+9:30; Asia/Kolkata UTC+5:30.',
    localProject: 'Namesake place names and qualified keys. NSW public schools master dataset (Data.NSW), Date_extracted 2026-10-02, 2,210 rows. Town_suburb normalised (strip, casefold) equal to campbelltown: 10 rows (raw Campbelltown with trailing space 8, CAMPBELLTOWN 1, Campbelltown 1; Postcode 2560 for all). Exact raw Campbelltown: 1. LGA Campbelltown (NSW): 53 (Primary School 33, Secondary School 12, Schools for Specific Purposes 8; 43 outside the suburb; 21 normalised suburbs; Date_1st_teacher 1867-01-01 Minto Public School to 2021-10-18 Denham Court Public School; Campbelltown Public School 1876-01-01). School_name containing Campbelltown: 4 (Campbelltown Public School, Campbelltown North Public School, Campbelltown East Public School, Campbelltown Performing Arts High School). Rows with Campbelltown in any column: 111 (Operational_directorate_office 81, LGA 53, Principal_network 18, Town_suburb 10, School_name 4; electorate columns also match but are not used). Campbelltown SA rows: 0.',
    requiredMentions: [
      '176,519',
      '46,917',
      '63,062',
      '191,285',
      '54,800',
      'LGA11500',
      'LGA40910',
      'Denham Court Public School',
      'South west Sydney, live on screen'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Campbelltown (NSW) LGA (LGA11500): people, median age, families, dwellings, dwelling structure, occupation, education, age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA11500' },
      { claim: 'ABS Census 2021 QuickStats, Campbelltown (SA) LGA (LGA40910): people and median age.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA40910' },
      { claim: 'ABS Data API, Estimated Resident Population by LGA 2001 to 2025 (ABS_ANNUAL_ERP_LGA2025), Campbelltown (NSW) 11500 and Campbelltown (SA) 40910, 2025.', url: 'https://data.api.abs.gov.au/rest/data/ABS,ABS_ANNUAL_ERP_LGA2025,1.0.0/ERP.3.TOT.11500+40910.LGA2025.A?format=csvfilewithlabels' },
      { claim: 'NSW public schools master dataset (Data.NSW): school names, town, postcode, LGA, level of schooling, date of first teacher.', url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset' },
      { claim: 'NSW Department of Education, future and past NSW term dates and school holidays (2027 dates).', url: 'https://education.nsw.gov.au/schooling/calendars/future-and-past-nsw-term-dates-and-school-holidays' }
    ],
    rejectedClaims: [
      'Electorate names in the schools dataset: political boundaries are not used on this page, although they also contain the word Campbelltown.',
      'Enrolment, ICSEA or other per-school measures: not needed for the matching lesson and not shown.',
      'Any comparison of the two Campbelltowns beyond population and median age: only those two SA figures were verified for this page.',
      'Which NSW term division Campbelltown schools follow: not needed, since only Terms 3 and 4 are quoted.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with the NSW Department of Education, the ABS or Campbelltown City Council.'
    ]
  }
};
