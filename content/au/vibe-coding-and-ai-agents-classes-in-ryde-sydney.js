'use strict';
// Ryde, Sydney (cg- district page, Australia cluster Phase 8, row 208). Keyword slug in the rotation
// (vibe-coding-and-ai-agents-classes-in-*), council-area page under Sydney and New South Wales.
// Spine: an agent answers "when did this school first have a teacher?" by retrieving one chunk of a text
// built from the Ryde schools file; how do chunk size, overlap and sentence boundaries change how often the
// answer is in the chunk it sees?
// Data: NSW Department of Education master dataset (data.nsw.gov.au, CC BY), read 10 October 2026,
// Date_extracted 2026-10-02. Rows with LGA "Ryde": 19 (Primary 14, Secondary 3, EEC 1, SSP 1). Our text:
// one sentence per school (name, level, suburb of address, postcode, first-teacher date; no subtype),
// 2,284 characters. 19 questions, one per school. Retrieval: count of shared non-stop-words, first
// top-scoring chunk (scratchpad au/b1/rydv_chunk.py). Answer and school name inside the retrieved chunk:
// fixed characters without overlap 60: 0/19; 120: 1/19; 200: 8/19; 400: 10/19; 800: 14/19; one chunk
// of the whole text 19/19. With 25 percent overlap: 200: 4/19; 400: 11/19; 800: 13/19. One sentence per
// chunk: 16/19; two: 13/19; three: 14/19; five: 14/19. The three one-sentence failures: Eastwood Public
// School retrieves Denistone East Public School (address suburb Eastwood); Ryde Public School and West Ryde
// Public School retrieve Ermington Public School (address suburb West Ryde).
// Lesson family: retrieval chunking for an agent (chunk size and overlap); screened 0 hits for "chunking".
// Place facts: ABS Census 2021 QuickStats, Ryde LGA (LGA16700); earliest first teachers Ryde Public School
// 1868, North Ryde Public School 1878, Gladesville Public School 1879. Transport for NSW station usage (CC
// BY), August 2026 entries: Macquarie University Station (Metro) 482,099; West Ryde Station 113,714.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'RYDE',
    label: 'Ryde, Sydney',
    blurb: 'Vibe coding and AI agents for Ryde, with a project on how the way a document is chunked decides what an agent can answer.'
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
  slug: 'vibe-coding-and-ai-agents-classes-in-ryde-sydney',
  code: 'rydv',
  accent: '#222E52',
  accentRationale: 'Ryde: a deep harbour navy (hue 226), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 13.3:1 on white and 10.8:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Ryde',
    eyebrow: 'City of Ryde, Sydney, New South Wales',
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
  routeLabel: 'Ryde, Sydney',
  title: 'Vibe Coding and AI Agents Classes in Ryde, Sydney',
  description: 'Live online vibe coding, AI agents and Python classes for Ryde teenagers and adults, with real teachers, in small groups or one to one. The first lesson is free.',
  ogDescription: 'AI agents classes for Ryde, with a project showing that how a document is chunked decides whether an agent sees the answer: 0 of 19 questions at 60 characters, 16 of 19 by sentence.',
  twitterDescription: 'Ryde vibe coding and AI agents classes, live online, first lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Ryde',
    description: 'Level-matched online vibe coding, AI agents, retrieval and Python for teenagers and adults in the City of Ryde council area, taught live in English.'
  },
  h1: 'Vibe coding and AI agents classes in Ryde',
  capsuleQ: 'Where do Ryde learners find the best vibe coding and AI agents classes?',
  capsule: 'In live online lessons where a teacher shows Ryde teenagers and adults how to have an AI write code, check what it wrote, and build agents that look things up before they answer. The 2021 Census counted 129,123 people in the City of Ryde council area, 46.4% of those aged 15 and over with a bachelor degree or higher. Teaching is private or in a level-matched small group, and the opening lesson is free.',
  lead: 'Many AI agents answer questions by first fetching a piece of text and then reading only that piece. Which piece they can fetch depends on how the document was cut up beforehand, a step called chunking. We wrote one plain sentence for each of the 19 government schools in the City of Ryde, from the state\'s open schools file, and asked an agent when each school first had a teacher. Cut the text into 60-character chunks and the agent never sees a complete answer: 0 out of 19. Cut it at sentence boundaries and it gets 16 right. The three it still misses are instructive, because each one is a school whose name is also the name of a suburb.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents lesson for a learner in Ryde.',
  picks: {
    eyebrow: 'Course picks for Ryde',
    h2: 'Courses for agents that read before they answer',
    intro: 'Every course here connects to the retrieval project. A free trial settles which fits, and no card details are asked for.',
    items: [
      {
        course: 'vibe-coding-for-teens-python-web-ai-projects-course',
        band: 'Ages 13 to 17',
        note: 'Prompt an AI to build Python and web projects, then read and test every line it writes.'
      },
      {
        course: 'teens-ai-tools-mastery-course',
        band: 'Ages 13 to 18',
        note: 'How everyday AI tools work, where they get things wrong, and how to fact-check what they say.'
      },
      {
        course: 'complete-generative-ai-masterclass-college',
        band: 'University and adult',
        note: 'Generative AI in depth, including retrieval, embeddings and evaluation of answers.'
      },
      {
        course: 'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals',
        band: 'Professionals, one to one',
        note: 'Workplace agents in Copilot Studio that search company documents, taught privately.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Ryde in the Census',
      h2: 'A council area of apartments, graduates and young adults',
      intro: 'QuickStats for the City of Ryde local government area from the 2021 Census, against New South Wales and Australia.',
      body: [
        {
          kind: 'table',
          caption: 'City of Ryde, 2021 Census headline counts',
          head: ['Headline', 'Ryde'],
          rows: [
            ['Residents', '129,123'],
            ['Families', '34,985'],
            ['Private dwellings', '55,669'],
            ['People per household', '2.5']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Ryde measured against NSW and Australia',
          head: ['Measure', 'Ryde', 'NSW', 'Australia'],
          rows: [
            ['Median age', '37', '39', '38'],
            ['Flats or apartments among occupied homes', '44.6% (21,854)', '21.7%', '14.2%'],
            ['Bachelor degree or higher, aged 15 and over', '46.4% (50,196)', '27.8%', '26.3%'],
            ['Professionals among employed residents', '37.1% (24,337)', '25.8%', '24.0%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Apartments and houses',
              p: 'Flats and apartments made up 44.6% of occupied homes and separate houses 40.8%; across NSW separate houses made up 65.6%.'
            },
            { h3: 'Young adults', p: 'The Census counted 8,607 residents aged 20 to 24, 6.7% of the population, against 6,283 aged 10 to 14.' },
            { h3: 'Small households', p: 'At 2.5 people per household on average, Ryde households are smaller than the state pattern.' }
          ]
        },
        {
          kind: 'p',
          text: 'Privacy protection means the bureau slightly randomises every table cell, so columns may not sum exactly to their totals. We therefore quote the bureau\'s published numbers directly and never derive totals by addition.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Chunk the text badly and the agent never sees the answer',
      intro: 'We turned the NSW Department of Education\'s records for the 19 Ryde government schools into 19 short sentences, 2,284 characters in all, then let a simple retrieval agent fetch one chunk per question.',
      body: [
        {
          kind: 'table',
          caption: 'Questions where the retrieved chunk held both the school name and its date, out of 19 (our calculation)',
          head: ['How the text was chunked', 'No overlap', 'With 25% overlap'],
          rows: [
            ['60 characters', '0', '0'],
            ['120 characters', '1', '0'],
            ['200 characters', '8', '4'],
            ['400 characters', '10', '11'],
            ['800 characters', '14', '13'],
            ['The whole text as one chunk', '19', '19']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Chunking by whole sentences instead (our calculation)',
          head: ['Sentences per chunk', 'Questions answered'],
          rows: [
            ['1', '16 of 19'],
            ['2', '13 of 19'],
            ['3', '14 of 19'],
            ['5', '14 of 19']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'Too small',
              p: 'A 60-character chunk cuts a school\'s name away from its date, so no single chunk ever contains a complete answer, whatever the agent does next.'
            },
            {
              h3: 'Too big',
              p: 'One giant chunk always contains the answer, but it hands the agent the entire document every time, which defeats the point of retrieval on anything longer than a page.'
            },
            {
              h3: 'Cut where meaning ends',
              p: 'Splitting at sentence boundaries keeps each record whole and answers 16 of 19, more than any fixed size short of the whole text.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'The three it still misses',
          p: 'None of the wrong schools scored higher. Asked about Eastwood Public School, three sentences tie, because Denistone East and Eastwood Heights Public Schools also have Eastwood addresses, and the agent takes the first one in the text. Asked about West Ryde Public School, Ermington Public School, whose address is in West Ryde, ties with the right sentence and comes earlier. For Ryde Public School, every sentence containing Ryde ties, and Ermington is again first. Reading the top three sentences instead of one answers 18 of 19; Ryde Public School still misses because too many sentences share its words.'
        },
        {
          kind: 'p',
          text: 'The sentences, questions, chunk counts and retrieval scores are our own, built from the department\'s published fields; the agent is a simple keyword matcher written for teaching, not a commercial product. Overlap did not help reliably here because sliding windows still split records at awkward places.'
        }
      ]
    },
    {
      id: 'pipeline',
      tint: 'tint',
      eyebrow: 'Retrieval done carefully',
      h2: 'Questions to ask of any agent that searches documents',
      intro: 'Retrieval sits behind many AI assistants that answer from company files, manuals or websites. The Ryde example shows where they go wrong.',
      body: [
        {
          kind: 'table',
          caption: 'Retrieval checks a learner can apply anywhere',
          head: ['Check', 'Failure it prevents', 'What to try'],
          rows: [
            ['Does a chunk hold a whole fact?', 'Answers split across two chunks', 'Cut at sentences, rows or headings'],
            [
              'How many chunks does the agent read?',
              'The right chunk tied for first but not picked',
              'Retrieve the top three, not one'
            ],
            [
              'Do names clash with other words?',
              'Eastwood the suburb beating Eastwood the school',
              'Match whole names or use embeddings'
            ],
            ['Is retrieval tested?', 'Silent failures nobody measures', 'A list of questions with known answers, like our 19']
          ]
        },
        {
          kind: 'p',
          text: 'The last check matters most. Our 19 questions with known answers turned vague impressions into a number that could be compared, which is exactly how professional teams evaluate retrieval systems before trusting them with real users.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Teenagers', p: 'Build the chunker and keyword retriever in Python, then improve the score from 16 towards 19 and explain each fix.' },
            { h3: 'University students', p: 'Replace keyword matching with embeddings, compare scores on the same 19 questions, and study where each method fails.' },
            { h3: 'Adults', p: 'Design document search for workplace agents, including chunking rules and an evaluation set before launch.' }
          ]
        },
        {
          kind: 'p',
          text: 'The NSW Department of Education, City of Ryde, Transport for NSW and the statistics bureau provide the open data used here and have no link with Modern Age Coders. The sentences, chunks and scores come from our own code.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Ryde',
      h2: 'A school from 1868 and a university station',
      intro: 'More facts from the same files and the NSW calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'The earliest schools',
              p: 'Ryde Public School records its first teacher in 1868, North Ryde Public School in 1878 and Gladesville Public School in 1879, the three earliest dates in the council area.'
            },
            {
              h3: 'Two kinds of station',
              p: 'In August 2026 Transport for NSW counted 482,099 entries at Macquarie University metro station and 113,714 at West Ryde train station.'
            },
            { h3: 'Term 1, 2027', p: 'For Eastern division schools, Term 1 of 2027 runs from Wednesday 3 February until Friday 9 April.' }
          ]
        },
        {
          kind: 'spec',
          title: 'Addresses in the file',
          p: 'The schools file gives each school a street address. Among the 19 Ryde schools the address suburbs include East Ryde, Eastwood, Gladesville, Marsfield, Meadowbank, North Ryde, Ryde and West Ryde, which is also why so many names in our questions collide.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From asking an AI for a game to building agents that cite their sources',
    intro: 'Use the ages as a guide only; the free trial fixes the level.',
    cols: [
      {
        band: 'Ages 8 to 12',
        h3: 'Vibe coding for kids',
        p: 'Scratch games planned by the child and built with AI help, then tested.',
        courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 13 to 15',
        h3: 'Reading AI code',
        p: 'Python projects written with an AI, then read, debugged and extended.',
        courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens']
      },
      {
        band: 'Ages 15 to 18',
        h3: 'Agents and retrieval',
        p: 'Agents that search text, measured on questions with known answers.',
        courses: ['teens-ai-tools-mastery-course', 'ai-ml-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Agents for work',
        p: 'Retrieval-based assistants and workplace agents, designed and evaluated properly.',
        courses: [
          'complete-generative-ai-masterclass-college',
          'ai-agents-with-microsoft-copilot-studio-masterclass-for-professionals'
        ]
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Agents already search documents. Why should a Ryde learner build the search?',
    intro: 'Because when a retrieval agent is wrong it is usually confidently wrong, and the cause is often a chunking decision nobody noticed.',
    p1: 'An assistant that answers from documents gives a fluent reply whether or not the chunk it read contained the answer. In our Ryde test the agent asked about Ryde Public School read a sentence about Ermington Public School instead; a language model given that sentence would happily produce an answer about the wrong school.',
    p2: 'A learner who has measured 0, 8, 14 and 16 correct out of 19 understands that retrieval quality has to be tested, not assumed. They ask how a system splits its documents, how many pieces it reads, and whether anyone has checked it against questions with known answers.',
    closer: 'In 2026 agents read before they answer, and the Ryde learner who knows how the reading can fail is the one who builds agents people can trust.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Gladesville to Marsfield, one online class',
    intro: 'The schools in our project have addresses from Gladesville to Marsfield, and a live online lesson reaches every one of those neighbourhoods equally.',
    cells: [
      { h3: 'From home', p: 'No travel between suburbs; the learner logs in from home and the whole hour is spent coding.' },
      {
        h3: 'NSW stages',
        p: 'Plans track the NSW syllabus stages, break for the state holidays, and give senior students projects that suit their computing subjects.'
      },
      { h3: 'Trial, not a pitch', p: 'The free first lesson is a real class. At the end the teacher suggests a course, level and time, with nothing paid.' },
      { h3: 'Fifteen to twenty learners', p: 'Groups are built around level and pace, mixing Ryde learners with classmates from elsewhere.' },
      { h3: 'Twice a week', p: 'A fixed hour on two days each week, roughly eight lessons monthly, with breaks agreed ahead.' },
      {
        h3: 'Teachers in India',
        p: 'An 8pm Ryde lesson in summer starts at 2:30pm India time; after Sydney leaves daylight saving it starts at 3:30pm there.'
      }
    ],
    spec: {
      title: 'Daylight saving in Sydney',
      p: 'Clocks go forward on Sunday 4 October 2026 and back on Sunday 4 April 2027, and India keeps one time all year. Every lesson time we give is Sydney time.'
    }
  },
  fees: {
    h2: 'Ryde class fees',
    intro: 'Three amounts make up the whole price list.',
    first: 'The first lesson costs nothing and ends with a clear recommendation.',
    group: 'A month of small-group lessons, normally eight, with fifteen to twenty learners.',
    private: 'Roughly eight lessons a month, one teacher and one learner.',
    closer: 'Outside India every invoice is in US dollars, which means one rate for all of Ryde rather than a suburb tariff. Nothing is charged until course and time are fixed after the trial; holidays, absences and format changes are covered on the pricing page.'
  },
  reviewsH2: 'Google reviews from families we teach',
  book: {
    h2: 'Arrange a first Ryde lesson',
    intro: 'Send an age and a topic the learner enjoys. For a Year 10 student, a first task could be getting an AI to make a quiz; for an adult, rerunning the chunking test.',
    success: 'Thank you. Our team will contact you shortly about a Ryde class.'
  },
  faq: {
    h2: 'Ryde vibe coding and AI agents questions',
    intro: 'What Ryde families and adult learners usually ask us first.',
    items: [
      {
        q: 'How many people live in the City of Ryde?',
        a: 'The 2021 Census QuickStats for the Ryde local government area record 129,123 residents and put their median age at 37.'
      },
      {
        q: 'What is chunking in AI retrieval?',
        a: 'Chunking is splitting a document into pieces before an AI system searches it. The system then retrieves and reads only the pieces that look relevant, so the way the text is split decides what the AI can see.'
      },
      {
        q: 'What is the Ryde agent project?',
        a: 'Learners turn the records of the 19 Ryde government schools into sentences, chunk the text in different ways, and measure how often a retrieval agent fetches a chunk holding the answer. Results range from 0 of 19 with 60-character chunks to 16 of 19 with one sentence per chunk.'
      },
      {
        q: 'Why does the agent confuse Ryde Public School with Ermington Public School?',
        a: 'Because the keyword matcher gives them the same score. Ermington Public School\'s address is in West Ryde, so its sentence contains Ryde, Public and School just as Ryde Public School\'s own sentence does. On a tie the agent takes the sentence that comes first in the text, and Ermington comes first alphabetically.'
      },
      {
        q: 'Does the project rate schools?',
        a: 'No. It uses names, addresses and first-teacher dates to study retrieval and says nothing about results, enrolment or quality.'
      },
      {
        q: 'Are Copilot Studio agents taught in groups?',
        a: 'No. Copilot Studio agents are taught one to one only, because each workplace has its own documents and permissions. Teenagers build agents in Python.'
      },
      {
        q: 'Can children learn too?',
        a: 'Yes, from age six. Younger children begin with Scratch and simple vibe coding; the retrieval project is for older students.'
      },
      {
        q: 'Do you have an office in Ryde?',
        a: 'No. Every lesson is live online and we have no premises in Australia. A computer with sound and a stable connection is enough; the phone number we display is Indian.',
        boiler: true
      },
      {
        q: 'How much are AI agents classes for Ryde learners?',
        a: 'The first lesson is free. After that, group lessons cost USD 100 a month for two live lessons a week, about eight a month, with fifteen to twenty learners, or USD 150 a month one to one. Course, format and time are agreed before payment.',
        boiler: true
      },
      {
        q: 'How many people are in a group?',
        a: 'Five to ten, matched by level, pace and goals rather than age or suburb. One-to-one lessons are offered if no group suits the learner\'s time.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Explore Sydney and NSW',
    h2: 'More for Ryde learners',
    html: 'Nearby, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-hornsby-sydney">Hornsby</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-ku-ring-gai-sydney">Ku-ring-gai</a> have pages of their own, and the <a class="cg-inline-link" href="/best-coding-classes-in-sydney">Sydney page</a> covers the city. <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-australia">Understand the code, don\'t copy-paste</a> explains our approach to AI-written code; for statewide options see <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI in New South Wales</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Ryde and Sydney',
  footerPlaces: [
    { href: '/online-coding-and-python-classes-in-hornsby-sydney', label: 'Hornsby' },
    { href: '/online-coding-and-python-classes-in-strathfield-sydney', label: 'Strathfield' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-rydv .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.3vw, 2.6rem); }
.cg-root.cg-rydv .cg-hero h1 { font-weight: 780; letter-spacing: -0.02em; line-height: 1.07; }
.cg-root.cg-rydv .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.5rem 0 0.5rem 1.1rem; }
.cg-root.cg-rydv .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-rydv .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.014em; }
.cg-root.cg-rydv .cg-grid-3 { gap: clamp(0.95rem, 2.4vw, 1.9rem); }
.cg-root.cg-rydv .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-rydv .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-rydv .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-rydv .cg-callout { border-left-width: 6px; }
`,
  dossier: {
    curriculumAuthority: 'Ryde, ABS Census 2021 QuickStats, Ryde local government area LGA16700 (read 10 October 2026): 129,123 people; median age 37 (NSW 39, Australia 38); 34,985 families; 55,669 private dwellings; average 2.5 people per household; separate house 20,016 (40.8 percent); flat or apartment 21,854 (44.6 percent; NSW 21.7; Australia 14.2); Professionals 24,337 (37.1 percent; NSW 25.8); Bachelor Degree level and above 50,196 (46.4 percent; NSW 27.8; Australia 26.3); age 20 to 24 8,607 (6.7 percent); age 10 to 14 6,283 (4.9 percent). NSW 2027 term dates, Eastern division: Term 1 Wednesday 3 February to Friday 9 April. IANA tz Australia/Sydney daylight saving Sunday 4 October 2026 to Sunday 4 April 2027. Transport for NSW monthly station usage (CC BY), August 2026 entries: Macquarie University Station, Metro, 482,099; West Ryde Station, Train, 113,714.',
    localProject: 'Retrieval chunking for an agent. NSW Department of Education master dataset (CC BY), Date_extracted 2026-10-02, LGA = Ryde: 19 schools (Primary 14, Secondary 3, EEC 1, SSP 1). One sentence per school (name, level, Town_suburb, postcode, Date_1st_teacher; School_subtype excluded), 2,284 characters. 19 questions "When did <school> first have a teacher?". Retrieval score = number of distinct non-stop-word tokens shared; first top-scoring chunk taken. Success = school name and date both in the retrieved chunk. Fixed characters, no overlap: 60 0/19, 120 1/19, 200 8/19, 400 10/19, 800 14/19, whole text 19/19. With 25 percent overlap: 60 0, 120 0, 200 4, 400 11, 800 13. Sentences per chunk 1: 16/19; 2: 13; 3: 14; 5: 14. One-sentence failures are ties lost on text order (first top-scoring chunk taken), not higher scores; reading the top 3 sentences answers 18/19 (Ryde Public School still missed). One-sentence failures: Eastwood Public School -> Denistone East Public School (Town_suburb Eastwood); Ryde Public School -> Ermington Public School (Town_suburb West Ryde); West Ryde Public School -> Ermington Public School. Earliest Date_1st_teacher Ryde Public School 1868-01-01, North Ryde Public School 1878-01-01, Gladesville Public School 1879-04-01.',
    requiredMentions: ['129,123', '34,985', '55,669', '21,854', '50,196', 'Ermington Public School', 'Eastwood Public School', '113,714', '482,099'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Ryde local government area (LGA16700).',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA16700'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution).',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      {
        claim: 'Transport for NSW, Train Station Entries and Exits, monthly station usage (Creative Commons Attribution).',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      { claim: 'NSW Department of Education, 2027 term dates.', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'School subtype of the School for Specific Purposes: left out of the text and the page, as it concerns students\' needs.',
      'That the address suburbs are a complete list of suburbs in the City of Ryde: not claimed; only school addresses are listed.',
      'That embeddings would fix all three failures: not tested, so the page only suggests trying them.',
      'Which council area each station lies in: not verified, so stations are named without council claims.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with the NSW Department of Education, City of Ryde, Transport for NSW or the ABS.'
    ]
  }
};
