'use strict';
// Liverpool, Sydney (cg- district page, Australia cluster Phase 8, row 212). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*), council-area page under Sydney and New South Wales.
// Spine: an agent asked "how many government schools are in Liverpool?" can search school names, match the
// suburb field, or filter the council-area field; which tool call answers the question, and how wrong are the others?
// Data: NSW Department of Education master dataset (data.nsw.gov.au, CC BY), CSV read 10 October 2026,
// Date_extracted 2026-10-02, 2,210 rows. Our counts (scratchpad au/b2/p2_lvp.py): LGA exactly "Liverpool" 49
// (Primary 33, Secondary 12, Schools for Specific Purposes 3, Environmental Education Centre 1); school names
// containing "liverpool" 5 (all inside the LGA: precision 5/5, recall 5/49 = 10.2%); Town_suburb exactly
// "Liverpool" 2 (the file also holds "Liverpool " with a trailing space and "LIVERPOOL"); Town_suburb after
// trimming and case-folding 7, all inside the LGA; LGA containing "liverpool" 59, because the 10 schools of the
// Liverpool Plains council area also match (precision 49/59 = 83.1%). Statewide data quality: 1,357 of 2,210
// Town_suburb values end in a space and 432 are in capitals; the 49 Liverpool LGA rows hold 37 raw suburb labels
// that collapse to 28 after trimming and case-folding.
// Lesson family: keyword search on names vs structured field filter in an agent tool; screened 0 page hits.
// Place facts: ABS Census 2021 QuickStats, Liverpool LGA (LGA14900); Transport for NSW monthly station usage
// (CC BY): Liverpool Station entries August 2026 210,605; station points (c) Spatial Services checked against
// ABS LGA polygons place Liverpool, Casula, Warwick Farm, Holsworthy and Edmondson Park stations inside the LGA.
// Excluded: income, rent, mortgage, ancestry, birthplace, language, religion, health; enrolment, ICSEA,
// Indigenous, LBOTE and support-class columns; a hospital school is counted but not named.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'LIVERPOOL',
    label: 'Liverpool, Sydney',
    blurb: 'Vibe coding and AI agents for Liverpool, with a project on how an agent\'s choice of search tool turns 49 schools into 5, 7 or 59.'
  },
  market: {
    name: 'Australia',
    iso: 'AU',
    dial: '+61',
    lang: 'en-AU',
    locale: 'en_AU',
    geoRegion: 'AU',
    brandTag: 'AU',
    phoneLabel: 'Australian mobile number',
    phonePlaceholder: '491 570 156',
    gradeLabel: 'Year level or age',
    minDigits: 9,
    stripTrunk: true
  },
  slug: 'vibe-coding-and-ai-agents-classes-in-liverpool-sydney',
  code: 'lvsy',
  accent: '#625F0F',
  accentRationale: 'Liverpool: a river-flat olive (hue 58), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 6.64:1 on white and 5.39:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Liverpool',
    eyebrow: 'Liverpool council area, Sydney, New South Wales',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Sydney' },
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' },
    { slug: 'best-coding-classes-in-sydney', name: 'Sydney' }
  ],
  nav: [
    { label: 'Sydney', href: '/best-coding-classes-in-sydney' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Liverpool, Sydney',
  title: 'Vibe Coding and AI Agents Classes in Liverpool, Sydney',
  description: 'Live online vibe coding, AI agents and Python classes for teenagers and adults in Liverpool, Sydney, with real teachers, in groups or one to one. First lesson free.',
  ogDescription: 'AI agents classes for Liverpool, with a project showing how one question about 49 schools gets answered as 5, 7 or 59 depending on which tool an agent calls.',
  twitterDescription: 'Liverpool vibe coding and AI agents classes, live online, first lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Liverpool',
    description: 'Level-matched online vibe coding, AI agents, Python and data handling for teenagers and adults in the Liverpool council area of Sydney, taught live in English.'
  },
  h1: 'Vibe coding and AI agents classes in Liverpool',
  capsuleQ: 'What are the best vibe coding and AI agents classes for Liverpool learners?',
  capsule: 'Classes taught live over video, in which a teacher shows Liverpool teenagers and adults how to describe a program to an AI, test what it writes, and build small agents that pick the right tool for each question. Liverpool is one of Sydney\'s youngest council areas: the 2021 Census recorded a median age of 34 across its 233,446 residents.',
  lead: 'Type "how many government schools are in Liverpool?" into an AI agent that can search the education department\'s school list. The honest answer for the council area is 49. An agent that searches school names returns 5. One that matches the suburb field exactly returns 2. One that looks for the word Liverpool in the council column returns 59, because the separate Liverpool Plains council area matches too. Same data, same question, four answers: the difference is which tool the agent chose and how it called it.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents lesson for a learner in Liverpool.',
  picks: {
    eyebrow: 'Course picks for Liverpool',
    h2: 'Courses for agents that query data properly',
    intro: 'Each course connects with the search project on this page. A free trial lesson decides the fit, and no card details are needed.',
    items: [
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'Describe a program in plain words, let an AI draft it, then test and fix the Python yourself.'
      },
      {
        course: 'teens-ai-tools-mastery-course',
        band: 'Ages 13 to 18',
        note: 'How AI tools search, summarise and slip up, and how to check their answers against the source.'
      },
      {
        course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course',
        band: 'University and adult',
        note: 'Full applications built with AI assistance, plus the data structures that keep queries correct.'
      },
      {
        course: 'complete-generative-ai-masterclass-college',
        band: 'Adults',
        note: 'Language models, retrieval and agents, including how tool calls are designed and tested.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Liverpool in the Census',
      h2: 'A young council area full of families',
      intro: 'From the statistics bureau\'s 2021 QuickStats for the Liverpool local government area, alongside New South Wales and Australia.',
      body: [
        {
          kind: 'table',
          caption: 'Liverpool council area, 2021 Census counts',
          head: ['Measure', 'Value'],
          rows: [
            ['People counted', '233,446'],
            ['Families', '59,471'],
            ['Private dwellings', '77,824'],
            ['People per household, on average', '3.2'],
            ['Area on the ABS boundary', 'About 306 square kilometres']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'How Liverpool differs from the state and the nation',
          head: ['Indicator', 'Liverpool', 'NSW', 'Australia'],
          rows: [
            ['Children aged 5 to 9, share of residents', '7.6% (17,670)', '6.2%', '6.2%'],
            ['Couple families with children, share of families', '55.8% (33,171)', '44.7%', '43.7%'],
            ['Occupied homes that are separate houses', '73.1% (50,658)', '65.6%', '72.3%'],
            ['Median age', '34', '39', '38']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Lots of school-age children',
              p: 'Every five-year band from birth to 14 sits above the state share: 16,664 children under five, 17,670 aged 5 to 9 and 17,236 aged 10 to 14.'
            },
            {
              h3: 'Bigger households',
              p: 'Households average 3.2 people, against 2.6 across New South Wales, and more than half of all families are couples with children.'
            },
            {
              h3: 'Mostly houses',
              p: 'Only 16.3% of occupied homes are flats or apartments, below the state figure of 21.7%, in a council area that stretches about 306 square kilometres.'
            }
          ]
        },
        {
          kind: 'p',
          text: 'Small random adjustments protect privacy in every Census table, so parts seldom add exactly to totals. Each figure here is printed as the bureau released it; none is a sum we made ourselves.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'One question, four tool calls, four different answers',
      intro: 'We gave the same question to four versions of a simple agent tool, each searching the education department\'s 2,210-row school list a different way, and counted what came back.',
      body: [
        {
          kind: 'table',
          caption: 'How many government schools are in Liverpool? (our counts from the department\'s file)',
          head: ['Tool call the agent makes', 'Schools returned', 'Inside the Liverpool council area'],
          rows: [
            ['School name contains "liverpool"', '5', 'All 5, but 44 schools missed'],
            ['Suburb field equals "Liverpool" exactly', '2', 'Both, but 47 missed'],
            ['Suburb field equals "liverpool" after trimming and lower-casing', '7', 'All 7, still 42 missed'],
            ['Council field contains "liverpool"', '59', '49, plus 10 from Liverpool Plains'],
            ['Council field equals "Liverpool"', '49', 'All 49, none extra']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Precision and recall of each call against the 49-school answer (our arithmetic)',
          head: ['Tool call', 'Precision', 'Recall'],
          rows: [
            ['Name contains "liverpool"', '5 of 5, 100%', '5 of 49, 10.2%'],
            ['Suburb field, cleaned', '7 of 7, 100%', '7 of 49, 14.3%'],
            ['Council field contains "liverpool"', '49 of 59, 83.1%', '49 of 49, 100%'],
            ['Council field equals "Liverpool"', '49 of 49, 100%', '49 of 49, 100%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: '1. Name search',
              p: 'Fast and precise, but almost useless here: most schools in the council area are named after other suburbs, from Casula to Green Valley.'
            },
            {
              h3: '2. Suburb match',
              p: 'Spelling decides everything. The file stores the same suburb as "Liverpool", "Liverpool " with a trailing space and "LIVERPOOL", and an exact match finds only 2 schools.'
            },
            {
              h3: '3. Council field',
              p: 'The right column for the question, but a contains-search lets in Liverpool Plains. An exact match on the field returns all 49 and nothing else.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'What a careful agent does',
          p: 'Before calling a tool, it decides what kind of place the question means: a council area, a suburb or a name. Then it filters the field built for that meaning, uses an exact match, and reports which field it used. That turns a guess into an answer a person can check, and on this file it is the only route to 49.'
        },
        {
          kind: 'p',
          text: 'Across the whole file, 1,357 of the 2,210 suburb values end in a space and 432 are written in capitals, so clean-up is not optional. Every count in this section is our own, from the department\'s published file; the department plays no part in the analysis, and nothing here describes any school\'s size or results.'
        }
      ]
    },
    {
      id: 'pipeline',
      tint: 'tint',
      eyebrow: 'Building the agent',
      h2: 'From a vibe-coded first draft to a tool you can trust',
      intro: 'Learners usually start by asking an AI to write the search tool, then improve it step by step.',
      body: [
        {
          kind: 'table',
          caption: 'Four improvements to the Liverpool search tool',
          head: ['Version', 'Change', 'Effect on the count'],
          rows: [
            ['First AI draft', 'Searches school names for the word', 'Returns 5'],
            ['Second', 'Searches the suburb field instead', 'Returns 2 until spaces and capitals are cleaned, then 7'],
            ['Third', 'Searches the council field with contains', 'Returns 59, picking up a different council'],
            ['Fourth', 'Exact match on the council field, with the field named in the reply', 'Returns 49 and says how']
          ]
        },
        {
          kind: 'p',
          text: 'Each step teaches something that applies far beyond school lists: read the columns before you query, clean text before you compare it, and never let an agent hide which filter it used. The same lessons apply when an agent searches customer records, product catalogues or a company wiki.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Teenagers', p: 'Write the four versions in Python, print what each returns, and compare them with the hand-checked answer.' },
            { h3: 'University students', p: 'Design a tool schema that forces the agent to name the field and match type, and test it with tricky questions.' },
            { h3: 'Adults', p: 'Apply the same checks to AI tools at work before trusting a count, a total or a list they produce.' }
          ]
        },
        {
          kind: 'p',
          text: 'The education department, Transport for NSW and the statistics bureau publish the files used here and have no link with us. All precision and recall figures are our own calculations.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Liverpool',
      h2: 'Schools from 1860 to 2024, and five stations',
      intro: 'More detail from the same public sources.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Old and new',
              p: 'Luddenham Public School records its first teacher in 1860 and Liverpool Public School in 1863, while Gulyangarri Public School, with a first teacher in 2024, is the newest school in the file for this council area.'
            },
            {
              h3: 'Stations inside the boundary',
              p: 'Liverpool, Casula, Warwick Farm, Holsworthy and Edmondson Park stations all sit inside the council area on our map check. Liverpool Station logged 210,605 Opal entries in August 2026.'
            },
            { h3: 'The 2027 school year', p: 'Eastern division students start Term 1 on Wednesday 3 February 2027 and finish Term 4 on Monday 20 December 2027.' }
          ]
        },
        {
          kind: 'spec',
          title: 'A cleaning exercise for later',
          p: 'The 49 Liverpool rows carry 37 different suburb labels, which shrink to 28 once spaces and capitals are normalised. Counting schools per suburb before and after cleaning is a short task that shows why data preparation comes first.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From asking an AI for a game to building agents that check themselves',
    intro: 'Ages are only a guide; the free trial lesson sets the real starting point.',
    cols: [
      {
        band: 'Ages 8 to 12',
        h3: 'First AI-assisted projects',
        p: 'Scratch games and simple apps made with an AI helper, while learning to spot when its suggestion is wrong.',
        courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'scratch-programming-complete-course']
      },
      {
        band: 'Ages 12 to 15',
        h3: 'Python with an AI partner',
        p: 'Loops, lists and files in Python, with AI drafts that the learner tests line by line.',
        courses: ['python-complete-masterclass-teens', 'vibe-coding-for-teens-python-web-ai-projects-course']
      },
      {
        band: 'Ages 15 to 18',
        h3: 'Tools and agents',
        p: 'Small agents that call search tools, plus the checks that keep their answers honest.',
        courses: ['teens-ai-tools-mastery-course', 'ai-ml-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Agents for real work',
        p: 'Retrieval, tool design and evaluation for agents that handle data people rely on.',
        courses: ['vibe-coding-for-college-fullstack-ai-dsa-career-course', 'complete-generative-ai-masterclass-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an AI agent can answer the question, why learn to build one?',
    intro: 'Because an agent is only as good as the tool calls it makes, and those are easy to get wrong without seeing it.',
    p1: 'The Liverpool project shows how a fluent, confident agent can return 5 or 59 when the answer is 49, without any error message. Nothing in the reply warns the user. The only defence is a person who knows to ask which field was searched, whether the match was exact, and whether the text was cleaned first.',
    p2: 'Learners who have built the four versions themselves read agent output differently. They look for the query behind the answer, test edge cases like trailing spaces and similar names, and design tools that report how they reached a number. That is the difference between using AI agents and being misled by them.',
    closer: 'In 2026 anyone can ask an agent a question; a Liverpool learner who can see inside the tool call is the one who knows whether to believe the answer.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'From Luddenham to Warwick Farm, one live classroom',
    intro: 'The council area covers about 306 square kilometres, and an online lesson reaches every part of it in exactly the same way.',
    cells: [
      {
        h3: 'Learn from home',
        p: 'No drive across the south-west at peak hour: a learner logs in from wherever they are and the whole lesson goes on coding.'
      },
      { h3: 'In step with NSW schools', p: 'Teachers plan around NSW stages and term dates, and lessons stop for the state school holidays.' },
      {
        h3: 'A trial that teaches',
        p: 'The opening lesson is a proper class, finishing with a recommended course, level and weekly time. Nothing is paid on the day.'
      },
      { h3: 'Grouped by progress', p: 'Groups of fifteen to twenty learners at a similar stage, or one-to-one teaching when that suits better.' },
      { h3: 'Two sessions a week', p: 'Normally two lessons a week at a set time, around eight a month, with holidays agreed ahead.' },
      {
        h3: 'Teachers in India',
        p: 'A 6:30pm Liverpool lesson in summer begins at 1pm India time; when Sydney returns to standard time it begins at 2pm there.'
      }
    ],
    spec: {
      title: 'Clock changes in Sydney',
      p: 'Daylight saving starts in Sydney on Sunday 4 October 2026 and finishes on Sunday 4 April 2027. India keeps one time all year, so every lesson time we give is in Sydney time and the India time shifts by an hour twice a year.'
    }
  },
  fees: {
    h2: 'Fees for Liverpool learners',
    intro: 'Three figures, all stated plainly.',
    first: 'A full lesson free, with a course, level and time recommended at the end.',
    group: 'A month of lessons, normally eight, alongside fifteen to twenty learners at the same level.',
    private: 'About eight lessons a month on the same rhythm, with one teacher and one learner.',
    closer: 'Outside India we bill in US dollars, so there is one fee for every Liverpool household. Nothing is charged until the trial has fixed a course and a time; holidays, missed lessons and changing format are explained on the pricing page.'
  },
  reviewsH2: 'Families\' reviews on Google',
  book: {
    h2: 'Share a year group and what the learner enjoys',
    intro: 'From that a teacher can plan the first session. A Year 9 student might start by asking an AI to write a quiz game and then testing it; an adult might go straight to building the school-search tool.',
    success: 'Thank you. We will be in touch soon about a class for Liverpool.'
  },
  faq: {
    h2: 'Liverpool vibe coding and AI agents questions',
    intro: 'The questions Liverpool families and adult learners tend to ask first.',
    items: [
      {
        q: 'How many people live in the Liverpool council area?',
        a: 'QuickStats for the Liverpool local government area records 233,446 people at the 2021 Census, with a median age of 34, five years younger than New South Wales as a whole.'
      },
      {
        q: 'What is vibe coding?',
        a: 'Vibe coding means describing what a program should do in everyday language and letting an AI write the first version. The skill we teach is the second half: reading that code, testing it and correcting it, so the result does what was intended.'
      },
      {
        q: 'What is an AI agent?',
        a: 'An AI agent is a language model that can call tools, such as a search over a file or a calculator, decide what to do with the results, and keep going until it has an answer. Its answers are only as reliable as the tool calls it chooses.'
      },
      {
        q: 'What does the Liverpool school project show?',
        a: 'The same question about government schools in Liverpool returns 5, 2, 7, 59 or 49 depending on whether the agent searches names, the suburb field, or the council field, and whether it cleans text and matches exactly. Only an exact match on the council field gives the full and correct 49.'
      },
      {
        q: 'Which age is right for these classes?',
        a: 'Vibe coding starts from about eight with Scratch and AI helpers. Agent building is aimed at teenagers from 13 and adults, once they are comfortable writing and testing a little Python.'
      },
      {
        q: 'When are lessons held?',
        a: 'Families choose an after-school or weekend time at the trial, always given in Sydney time. India runs 5 hours 30 minutes behind Sydney in summer and 4 hours 30 minutes behind in winter.'
      },
      {
        q: 'Do learners use AI tools with age limits?',
        a: 'Only tools whose own published rules allow the learner\'s age. Teenagers use tools that permit their age group, and services whose terms require adults are kept to adult classes.'
      },
      {
        q: 'Is there a Modern Age Coders centre in Liverpool?',
        a: 'No, and we do not claim one. Every lesson is live online and we have no premises in Australia. A learner needs a laptop or desktop with sound and a reliable connection; the phone number shown is Indian.',
        boiler: true
      },
      {
        q: 'How much do classes cost in Liverpool?',
        a: 'The first lesson is free. After that a group place is USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one to one on the same pattern. Course, format and time are settled before anything is paid.',
        boiler: true
      },
      {
        q: 'How big are the groups?',
        a: 'Between five and ten learners, matched by level, pace and goal rather than age or postcode. If no group suits the time a learner needs, one-to-one lessons are offered.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Explore Sydney and NSW',
    h2: 'More for Liverpool learners',
    html: 'Our Sydney-wide guide is <a class="cg-inline-link" href="/best-coding-classes-in-sydney">coding classes in Sydney</a>. For the thinking behind checking AI output, see <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-australia">learn to think, not just use AI tools</a>, and for teenagers starting with AI, <a class="cg-inline-link" href="/ai-classes-for-teens-australia">AI classes for teens in Australia</a>. The state picture is on <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI classes in New South Wales</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Liverpool and Sydney',
  footerPlaces: [
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/vibe-coding-and-ai-agents-classes-in-blacktown-sydney', label: 'Blacktown' },
    { href: '/best-coding-and-ai-classes-in-parramatta-sydney', label: 'Parramatta' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-lvsy .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.2vw, 2.4rem); }
.cg-root.cg-lvsy .cg-hero h1 { font-weight: 720; letter-spacing: -0.02em; line-height: 1.1; }
.cg-root.cg-lvsy .cg-capsule { border-left: 5px solid var(--cg-accent); padding: 0.4rem 0 0.4rem 1rem; }
.cg-root.cg-lvsy .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; font-size: 0.84rem; text-transform: uppercase; }
.cg-root.cg-lvsy .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.008em; }
.cg-root.cg-lvsy .cg-grid-3 { gap: clamp(0.9rem, 2.4vw, 1.9rem); }
.cg-root.cg-lvsy .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-lvsy .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lvsy .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-lvsy .cg-callout { border-left-width: 4px; }
`,
  dossier: {
    curriculumAuthority: 'Liverpool, ABS Census 2021 QuickStats, Liverpool local government area LGA14900 (read 10 October 2026): 233,446 people; median age 34 (New South Wales 39, Australia 38); 59,471 families; 77,824 private dwellings; average 3.2 people per household; separate houses 73.1% (50,658), flats or apartments 16.3% (11,301); couple families with children 55.8% (33,171); aged 0 to 4 16,664, 5 to 9 17,670 (7.6%), 10 to 14 17,236. ABS ASGS 2021 LGA boundary area 305.7401 square kilometres. NSW Department of Education 2027 calendar, Eastern division: students Term 1 from Wednesday 3 February 2027, Term 4 to Monday 20 December 2027.',
    localProject: 'Keyword search vs structured field filter in an agent tool. NSW Department of Education master dataset (CC BY), Date_extracted 2026-10-02, 2,210 rows. LGA exactly Liverpool: 49 (Primary 33, Secondary 12, SSP 3, Environmental Education Centre 1). School_name contains liverpool: 5, all in the LGA (recall 10.2%). Town_suburb exactly Liverpool: 2; trimmed and case-folded: 7, all in the LGA (recall 14.3%). LGA contains liverpool: 59 including 10 Liverpool Plains schools (precision 83.1%). Statewide 1,357 Town_suburb values end in a space and 432 are capitals; Liverpool rows 37 raw suburb labels, 28 after normalising. Oldest first teachers Luddenham Public School 1860, Liverpool Public School 1863; newest Gulyangarri Public School 2024. Transport for NSW (CC BY): Liverpool Station entries August 2026 210,605.',
    requiredMentions: ['233,446', '59,471', '77,824', '33,171', '17,670', 'Luddenham Public School', 'Gulyangarri Public School', '210,605', 'Liverpool Plains'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Liverpool local government area (LGA14900): people, median age, families, dwellings, dwelling structure, family composition, age.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA14900'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution).',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      {
        claim: 'Transport for NSW, Train Station Entries and Exits: monthly station usage from Opal data (Creative Commons Attribution).',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      {
        claim: 'ABS ASGS Edition 3 (2021) local government area boundaries, used for the station location check.',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/LGA/MapServer'
      },
      { claim: 'NSW Department of Education, 2027 term dates, Eastern division.', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney daylight saving rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Any statement about why few Liverpool schools carry the suburb name: not verified, so no reason is given.',
      'Naming the hospital school in the dataset: counted in the totals but not named, to keep health settings off the page.',
      'Leppington station as part of the Liverpool council area: not checked on the boundary, so it is not listed.',
      'School sizes, enrolments, ICSEA, Indigenous and LBOTE columns: excluded by the cluster rules.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Any claim that a particular AI product makes these mistakes: the four tools are our own scripted versions, not a named product.',
      'Any affiliation with the NSW Department of Education, Transport for NSW, Liverpool City Council or the ABS.'
    ]
  }
};
