'use strict';
// Folkestone (cg- town page, UK cluster Phase 10, towns band B, row 502). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: an agent has three search results lists that
// disagree; how does it merge them into one? (Reciprocal rank fusion.)
// Data (read 30 September 2026): Project Gutenberg eBook 39162, H. G. Wells, Kipps: The Story of a Simple Soul. Body
// text between the START and END markers, split on blank lines, passages of 25 words or more kept: 1,138 passages,
// 92,961 words. The word Folkestone occurs 66 times in the body; 50 passages contain it; 19 contain "Leas".
// Our run (scratchpad fks/rrf.py): query words folkestone, leas, lift, harbour, sea. 100 passages contain at least one.
// Ranker A = count of query words; B = query words as a share of the passage; C = distinct query words, ties by count;
// all ties by position in the book. Top-10 overlap: A and B 3, A and C 6, B and C 2, all three 2. A's first = a 128-word
// passage with 5 hits (B rank 4, C rank 1). B's first = a 31-word passage with "sea" twice (A rank 10, C rank 16).
// Fusion with k = 60: first 1/61 + 1/64 + 1/61 = 0.04841; second (ranks 2, 2, 2) 0.04839; third (5, 15, 4) 0.04434;
// fourth (10, 1, 16) 0.04384. Fused top 10 holds 9 of A's top 10, 3 of B's, 6 of C's, and one passage (ranks 16, 21, 11)
// that was in no single top 10.
// Lesson family: reciprocal rank fusion, merging ranked lists from several retrievers. Screened: "rank fusion",
// "reciprocal rank", "metasearch", "kipps" 0 hits in content/; claimed in claims.txt. Kent county page = rates and
// Little's law; Sittingbourne = Clarke-Wright; Maidstone = shared text runs. Borda count (spent elsewhere) is not used.
// Place facts: Folkestone and Hythe TS001 109,758. ONS 2021 BUA (published): Folkestone 51,995. postcodes.io suburban
// areas whose closest postcode is in the Folkestone BUA: Cheriton, Morehall, Foord (CT19), Sandgate, Coolinge (CT20).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'FOLKESTONE', label: 'Folkestone', blurb: 'Vibe coding and AI agents classes for Folkestone, with a search agent that merges three rankings of passages from H. G. Wells\'s Kipps by reciprocal rank fusion.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-folkestone',
  code: 'fks',
  accent: '#082C4C',
  accentRationale: 'Folkestone: a very dark Channel navy (14.2:1 contrast), picked by hand and checked against every accent already in use',
  pageType: 'city',
  place: {
    name: 'Folkestone',
    eyebrow: 'Folkestone, Folkestone and Hythe, Kent',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Kent' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'Kent', href: '/coding-classes-in-kent' },
    { label: 'South East', href: '/coding-and-ai-classes-in-south-east-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Folkestone, Kent',
  title: 'Vibe Coding and AI Agents Classes in Folkestone | Ages 6 to 67',
  description: 'Live online vibe coding, AI agents, Python and coding classes for Folkestone, Cheriton, Sandgate and Morehall, ages 6 to 67. Your first lesson is free.',
  ogDescription: 'Vibe coding and AI agents classes for Folkestone, with a retrieval project that fuses three rankings of passages from Kipps.',
  twitterDescription: 'Folkestone vibe coding, AI agents and Python lessons, live online, ages 6 to 67. Trial lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Folkestone',
    description: 'Vibe coding, AI agents, Python and maths taught live online to children, teenagers and adults in Folkestone, using a search project built on a novel set in the town.'
  },

  h1: 'Vibe coding and AI agents classes in Folkestone',
  capsuleQ: 'Which vibe coding and AI agents classes are best for Folkestone learners?',
  capsule: 'The ONS counted 51,995 usual residents in the Folkestone built-up area at the 2021 census, inside a Folkestone and Hythe district of 109,758. Cheriton, Morehall, Foord, Sandgate and Coolinge are its suburban areas in the postcode gazetteer. Modern Age Coders gives lessons in vibe coding, AI agents, Python, coding and maths to anyone there aged six to 67. Every lesson is a live video call with a tutor in India, taken alone or in a class of five to ten at one level. Our method is to have learners build the part of an AI system they would otherwise take on trust, then test it. The Folkestone project is a search agent: three simple rankers each sort the passages of H. G. Wells\'s novel Kipps for a question about the town, they disagree, and the learner writes the rule that merges them. The opening lesson is free; after that a class place is USD 100 a month and private tuition USD 150 a month.',
  lead: 'An AI agent that answers from documents has to find the right passage before it can say anything sensible. Most serious systems run more than one search at once, because each kind of search is blind in its own way, and then they face an awkward problem: three lists, three different orders, and scores that cannot be compared. In 2009 three researchers, Cormack, Clarke and Buettcher, showed that a formula a twelve-year-old can compute does the merging remarkably well. It ignores the scores and uses only positions. This project tries it on a book that spends a great deal of its time in Folkestone.',
  wa: 'Hello Modern Age Coders, we live in Folkestone and would like a free trial lesson in vibe coding or AI agents.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Four Folkestone starting points for vibe coding and agents',
    intro: 'Pick by age. Each course starts with a live lesson at no cost, and we never ask for card details to book it.',
    items: [
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games made with an AI helper, where the child decides what to build and checks what comes back.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: ordering, ranking and fair rules, worked out with cards and puzzles before any typing.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects by vibe coding, including the Kipps search agent described on this page.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'From a first line of Python to retrieval, agents and the tests that keep them honest.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The town in figures',
      h2: 'Folkestone, Cheriton, Sandgate, Morehall and Foord',
      intro: 'Two census counts on two different boundaries, and five suburb names from the gazetteer.',
      body: [
        { kind: 'table', caption: 'Usual residents at the 2021 census (ONS)', head: ['Area', 'Residents'], rows: [
          ['Folkestone built-up area', '51,995'],
          ['Folkestone and Hythe district', '109,758']
        ] },
        { kind: 'p', text: 'The built-up area is the continuous town as the ONS draws it; the district also takes in Hythe, Hawkinge and New Romney, so the two rows are not parts of one sum. postcodes.io lists Cheriton, Morehall and Foord as suburban areas in the CT19 postcode district and Sandgate and Coolinge in CT20, and in each case the postcode closest to the gazetteer point is assigned to the Folkestone built-up area. Schools here follow the English national curriculum, so telling us a year group from Year 2 to Year 13 is enough to start, and our tutors can work alongside GCSE and A level computer science.' },
        { kind: 'callout', h3: 'Other Kent pages', p: 'Our Kent set includes the <a class="cg-inline-link" href="/coding-classes-in-kent">county page</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-ashford">Ashford</a> and <a class="cg-inline-link" href="/best-coding-class-in-canterbury">Canterbury</a>. Why we teach thinking before tools is set out on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Folkestone project',
      h2: 'Reciprocal rank fusion: one answer from three lists that disagree',
      intro: 'A novel, a five-word question and three rankers, each wrong in a different way.',
      body: [
        { kind: 'p', text: 'Kipps, a novel by H. G. Wells, is free to read on Project Gutenberg in an edition dated 1906, and the word Folkestone appears in it 66 times. The learner downloads the text, cuts it at blank lines and keeps every passage of 25 words or more. That leaves 1,138 passages holding 92,961 words. The question for the agent is where the book describes the Leas, the lift, the Harbour and the sea at Folkestone, so the query is five words: folkestone, leas, lift, harbour, sea. One hundred passages contain at least one of them.' },
        { kind: 'p', text: 'Ranker A counts how many times the query words occur. Ranker B divides that count by the length of the passage. Ranker C counts how many different query words are present and uses the raw count only to break ties. Each is a few lines of Python, and each has a weakness. A likes long passages because they have more room for hits. B likes short ones: its winner is a 31-word passage that says "sea" twice and has nothing to do with the town. C cannot tell a passing mention from a description.' },
        { kind: 'table', caption: 'How the three rankers placed four passages, and the fused result (k = 60), our Python run', head: ['Passage', 'Rank in A, B, C', 'Fused score', 'Fused place'], rows: [
          ['128 words, 5 hits, the walk "along the Leas to the lift"', '1, 4, 1', '0.04841', '1st'],
          ['107 words, 5 hits, looking down on the Harbour', '2, 2, 2', '0.04839', '2nd'],
          ['105 words, 3 hits, Sunday along the front of the Leas', '5, 15, 4', '0.04434', '3rd'],
          ['31 words, "sea" twice, no mention of the town', '10, 1, 16', '0.04384', '4th']
        ] },
        { kind: 'p', text: 'The fusion rule is this: for each passage, add up 1 divided by (60 plus its rank) across the lists, then sort by the total. The first row scores 1/61 + 1/64 + 1/61, which is 0.04841. The three top-ten lists had little in common: A and B shared three passages, and only two passages were in all three. The fused top ten kept nine of A\'s ten, three of B\'s and six of C\'s. B\'s misleading winner was pushed down to fourth because the other two rankers placed it 10th and 16th. One passage that no single ranker put in its top ten (it was 16th, 21st and 11th) reached ninth place after fusion, because being fairly good on every list counts for a lot.' },
        { kind: 'p', text: 'Two honest limits. Nobody has marked which passages are truly the right answers, so this run shows how fusion behaves, not that it is correct. And the constant 60 comes from the 2009 paper; the learner tries 1 and 1,000 to see what changes and why a middling value is forgiving.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Three friends each rank ten ice cream flavours. Merge the lists by hand with a points rule and argue about whether it is fair.' },
          { h3: 'Ages 11 to 15', p: 'Write ranker A in Python, print its top five passages from Kipps, and spot what it gets wrong.' },
          { h3: 'Ages 15 and up', p: 'Build all three rankers, fuse them, and change the constant to watch the order shift.' }
        ] },
        { kind: 'callout', h3: 'Sources and what is ours', p: 'The text is Project Gutenberg eBook 39162, which Gutenberg distributes free of charge. The fusion formula is from Cormack, Clarke and Buettcher (2009). The passage rule, the query, the three rankers and every rank and score above come from our own run.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Why agents need this',
      h2: 'What merged rankings teach about vibe coding and AI agents',
      intro: 'An agent is only as good as the passage it was handed, and handing it over is ordinary code.',
      body: [
        { kind: 'table', caption: 'From the Kipps search to real AI agents', head: ['Seen in the Folkestone run', 'Habit it builds'], rows: [
          ['Each ranker had a different blind spot', 'Ask what a search method cannot see'],
          ['Scores from A, B and C were not comparable', 'Do not average numbers that mean different things'],
          ['Positions could be combined safely', 'Prefer a simple rule you can check by hand'],
          ['A short passage fooled ranker B', 'Read the retrieved text, not just the answer'],
          ['No one had marked the right answers', 'Say plainly when a result is untested']
        ] },
        { kind: 'p', text: 'Vibe coding means describing the program you want to an AI and steering what it writes. Ask an assistant for "a search over this book" and it will produce something that runs, usually a single ranker with no explanation of its bias. Folkestone learners practise asking for two or three methods, fusing them, and printing the passages so a person can judge. The same step sits inside most document-answering agents, where a keyword search and a meaning-based search are merged before the language model sees anything. We teach agent building once a learner can write Python unaided, which tends to mean older teenagers and adults, and Copilot Studio agents are offered one-to-one only. Read more on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">AI agents for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Project Gutenberg, the Office for National Statistics and postcodes.io have no link with Modern Age Coders. We used their open material; the experiment is our own work.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stage by stage',
    h2: 'From ranking by hand to agents that search',
    intro: 'A school year gives us a first guess at the stage, and the free lesson confirms or corrects it.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Sorting, ranking and fair rules, tried on paper first.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Scratch games the child designs and an AI helps to draft.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Vibe coding in Python', p: 'Text search, web apps and small tools, each with tests.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Retrieval and agents', p: 'Python agents that find, rank and cite their sources.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI agents and search',
    h2: 'What is reciprocal rank fusion, and why do AI agents use it?',
    intro: 'Reciprocal rank fusion merges several ranked lists by giving each item a score of 1 divided by (a constant plus its rank) in every list and adding those up; AI agents use it because it combines different search methods without needing their scores to be comparable.',
    p1: 'On 1,138 passages of Kipps and a five-word question about Folkestone, three rankers agreed on only two of their top ten, yet the fused list put a 128-word description of the Leas and the lift first with a score of 0.04841.',
    p2: 'Learners who have coded that merge tend to ask a new question of any agent: which passages did you retrieve, and how were they ordered?',
    closer: 'A Folkestone teenager who can build and inspect the retrieval step is in a position to trust or challenge an AI\'s answer, and that comes from learning to code.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson format',
    h2: 'How a Folkestone lesson runs',
    intro: 'All that is needed at home is a laptop or desktop with a webcam and an internet connection that does not drop.',
    cells: [
      { h3: 'Hands on the keyboard', p: 'The learner shares a screen and types; the tutor watches, questions and nudges instead of lecturing.' },
      { h3: 'Placement by evidence', p: 'We suggest a course only after seeing the learner work in the free session.' },
      { h3: 'No card for the trial', p: 'Booking the first lesson costs nothing and asks for no payment details.' },
      { h3: 'Small, level-matched groups', p: 'Five to ten learners at the same stage, drawn from across the UK.' },
      { h3: 'Two lessons most weeks', p: 'Tell us the Kent term dates your school follows and we skip the holidays.' },
      { h3: 'Your slot stays put', p: 'When UK clocks move in spring and autumn, the tutor adjusts, not you.' }
    ],
    spec: { title: 'Why we teach live and online', p: 'Live, because a tutor who can ask "what will this line print?" finds gaps a video never will. Online, because a group at exactly one level is easier to form across a country than within one town.' }
  },

  fees: {
    h2: 'Fees for Folkestone learners',
    intro: 'The UK is on our international price list, which is set in US dollars.',
    first: 'A complete first lesson, free, closing with the course we would recommend.',
    group: 'A place in a group, around eight lessons each month.',
    private: 'Private one-to-one lessons, around eight each month.',
    closer: 'Prices are stated in US dollars and we do not publish a sterling figure. There is no charge until the trial has happened and a course and weekly time are agreed. The pricing page explains holidays, missed lessons and moving between group and private.'
  },

  reviewsH2: 'Google reviews from Kent families and learners across the UK',

  book: {
    h2: 'Book a free lesson from Folkestone',
    intro: 'Send an age or year group and one interest. We can shape the trial around it: ranking cards by hand, an AI-assisted Scratch game, a first Python program, or a small search over a book.',
    success: 'Thanks. We have your Folkestone request and will be in touch.'
  },

  faq: {
    h2: 'Folkestone questions and answers',
    intro: 'On rank fusion, the Kipps project, vibe coding, agents and the practical details.',
    items: [
      { q: 'How many people live in Folkestone?', a: 'The ONS built-up area of Folkestone had 51,995 usual residents at the 2021 census. Folkestone and Hythe district had 109,758.' },
      { q: 'Do you run vibe coding and AI agents classes in Folkestone?', a: 'Yes, as live online lessons for ages 6 to 67 in Folkestone, Cheriton, Sandgate, Morehall, Foord and Coolinge.' },
      { q: 'What is vibe coding?', a: 'Vibe coding is building software by telling an AI in plain language what you want, then reading, testing and correcting the code it produces.' },
      { q: 'What is retrieval in an AI agent?', a: 'Retrieval is the step where the agent searches documents for passages relevant to a question, before a language model writes an answer from them.' },
      { q: 'What did the Folkestone project show?', a: 'Three simple rankers shared only two of their top ten passages from Kipps. Fusing their ranks put a description of the Leas and the lift first and pushed a misleading short passage down to fourth.' },
      { q: 'Why use ranks and not scores?', a: 'Because a count, a share and a number of distinct words are on different scales. A position in a list means the same thing in every list, so positions can be added.' },
      { q: 'When can a learner start building agents?', a: 'When their Python is secure enough to write small programs alone, often in the later teens or as an adult. Copilot Studio agents are one-to-one only.' },
      { q: 'Can lessons support GCSE or A level computer science?', a: 'Yes. We teach the programming and ideas behind both. We do not promise grades.' },
      { q: 'How much are lessons?', a: 'Nothing for the first. Then USD 100 a month for a group place or USD 150 a month for one-to-one.' },
      { q: 'What happens in school holidays?', a: 'Lessons pause for the weeks you tell us about and pick up again afterwards.' }
    ]
  },

  next: {
    eyebrow: 'Elsewhere in Kent',
    h2: 'More Kent towns, each with a different project',
    html: 'Try <a class="cg-inline-link" href="/online-coding-and-python-classes-in-ashford">Ashford</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-margate">Margate</a> or <a class="cg-inline-link" href="/online-coding-and-python-classes-in-maidstone">Maidstone</a>. Every Kent page is listed on the <a class="cg-inline-link" href="/coding-classes-in-kent">county page</a>, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> covers the other regions.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Folkestone and Kent',
  footerPlaces: [
    { href: '/coding-classes-in-kent', label: 'Kent' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-fks .cg-hero-grid { align-items: start; gap: clamp(1.4rem, 3.4vw, 2.8rem); }
.cg-root.cg-fks .cg-hero h1 { font-weight: 740; letter-spacing: -0.031em; line-height: 1.06; }
.cg-root.cg-fks .cg-capsule { border-top: 3px double var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-fks .cg-eyebrow { letter-spacing: 0.17em; font-weight: 620; font-size: 0.8rem; }
.cg-root.cg-fks .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.021em; }
.cg-root.cg-fks .cg-table caption { font-weight: 600; text-align: left; font-size: 0.92rem; padding-bottom: 0.45rem; }
.cg-root.cg-fks .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-fks .cg-table th { font-weight: 680; border-bottom: 2px solid var(--cg-accent); }
.cg-root.cg-fks .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-fks .cg-callout { border-left-width: 4px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Folkestone and Hythe (E07000112), Census 2021 TS001 usual residents 109,758. ONS 2021 BUA (published): Folkestone 51,995. English national curriculum, GCSE and A level. postcodes.io suburban areas whose closest postcode is in the Folkestone BUA: Cheriton, Morehall, Foord (CT19), Sandgate, Coolinge (CT20).',
    localProject: 'Project Gutenberg eBook 39162 (H. G. Wells, Kipps): 1,138 passages of 25 words or more, 92,961 words; Folkestone occurs 66 times. Query folkestone, leas, lift, harbour, sea: 100 matching passages. Rankers: A count, B share of passage, C distinct words then count. Top-10 overlap A and B 3, all three 2. Fusion with k = 60: first (ranks 1, 4, 1) 0.04841; second (2, 2, 2) 0.04839; third (5, 15, 4) 0.04434; fourth (10, 1, 16) 0.04384; fused top 10 keeps 9 of A, 3 of B, 6 of C and one passage from no top 10 (ranks 16, 21, 11). No relevance labels, so no accuracy claim. Lesson family: reciprocal rank fusion, merging ranked lists from several retrievers.',
    requiredMentions: [
      '51,995',
      '109,758',
      'Cheriton',
      'Morehall',
      'Foord',
      'Coolinge',
      'Kipps',
      '1,138',
      '0.04841',
      'Reciprocal rank fusion'
    ],
    sources: [
      { claim: 'H. G. Wells, Kipps: The Story of a Simple Soul, Project Gutenberg eBook 39162.', url: 'https://www.gutenberg.org/ebooks/39162' },
      { claim: 'Cormack G. V., Clarke C. L. A. and Buettcher S. (2009), Reciprocal rank fusion outperforms Condorcet and individual rank learning methods, SIGIR 2009.', url: 'https://doi.org/10.1145/1571941.1572114' },
      { claim: 'ONS Census 2021 TS001 via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and nearest-postcode lookups for suburban areas in Folkestone and Hythe.', url: 'https://api.postcodes.io/places?q=Cheriton' }
    ],
    rejectedClaims: [
      'That fusion found the correct passages: no relevance labels exist for this query, so no accuracy is claimed.',
      'Where H. G. Wells lived or wrote the book: not read from a source; not claimed.',
      'That Seabrook or Horn Street are Folkestone suburbs: their closest postcodes are in the Hythe built-up area; left out.',
      'Descriptions of the present-day Leas, lift or harbour: none made; only the novel is quoted.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
