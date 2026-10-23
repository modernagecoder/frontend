'use strict';
// Longueuil, Quebec (cg- city page, Canada cluster Wave 2, row 145: vibe-coding-and-ai-agents-classes-in-<city>).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md, brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: vibe coding and AI agents for Longueuil teens and adults, taught in English, on a French-language city dataset.
// Lesson: an AI-style search over Longueuil's sports and recreation equipment list finds nothing for "jeux d'eau" or
// "petanque", because the file uses a curly apostrophe and accents; test queries written first, then a folded search.
// Sources, read raw on 22 and 23 October 2026:
//  - Quebec (facts-schools-contests.md section 4): Secondary Cycle Two math options "the Cultural, Social and Technical
//    option, the Technical and Scientific option and the Science option"; "All of these options allow students to enroll in
//    a preuniversity program."; CEGEP pre-university "requires two years of full-time study", technical "three years";
//    "Universities use the R score to analyze applications". facts-geo.md: Charter of the French language s.1 "French is
//    the official language of Québec."; Longueuil CSD 2458227 in the Montréal CMA; area codes 354, 450, 579; America/Toronto
//    (UTC-4 to 1 November 2026, UTC-5 to 14 March 2027). No population used.
//  - CEMC: CCC "This contest is available in English and French."; BCC "This contest is available in English only."; CCC
//    Wednesday 17 February 2027; BCC 9 to 20 November 2026; Euclid open to "CÉGEP students" in their final year context;
//    through a school. CCC rules: no generative AI, no AI tools in an IDE.
//  - Tool terms: Anthropic 18+; OpenAI terms under 18 needs parent or guardian permission; GitHub 13+. Anthropic, Building
//    effective agents: "we recommend finding the simplest solution possible, and only increasing complexity when needed"
//    (paraphrased on the page, not quoted at length).
//  - Ville de Longueuil open data via Données Québec (src-pilots/vibe-coding-and-ai-agents-classes-in-longueuil/):
//    "Équipements sportifs et récréatifs", package 1a3d42ab..., XLSX resource equipsportsrecreatifs.xlsx (56,301 bytes,
//    sha256 91f7f74e...e1daf), 644 rows, 9 columns; package license_id "cc-by", license_title "Attribution (CC-BY 4.0)";
//    Données Québec licence page (licence.html) CC BY section "même à des fins commerciales"; resource last modified
//    4 March 2024.
// Our own calculations (longueuil_search.py, python -I, longueuil_search.out.txt; plus checks): 30 equipment types; Module de
//  jeux 140, Table pique-nique 72, Terrain sportif - Soccer 60, Patinoires et sentier glacé 47; draft vs folded search:
//  "jeux d'eau" 0 vs 19, "petanque" 0 vs 27, "patinoires et sentier glace" 0 vs 47, "aréna - olympia" 0 vs 1,
//  "pataugeoire" 21 vs 21; 23 type values with a curly apostrophe, 8 with a straight one; 27 place names with stray or doubled
//  spaces; the column named Secteur holds a postal code on 637 of 644 rows, a district name on 6 (Saint-Hubert 4, Maricourt,
//  Longueuil) and one postal code without its space (J4P3K3, OBJECTID 69).
// Lesson family: text normalisation for real user queries (Unicode apostrophes, accents, whitespace) with test queries
//  written first; and checking what a column really holds before trusting its header.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const SCRIPT = esc(`# Searching Longueuil's equipment list in French: a naive draft, then a folded search (our teaching example)
import unicodedata
from openpyxl import load_workbook   # pip install openpyxl

sheet = load_workbook("equipsportsrecreatifs.xlsx", read_only=True).active
rows = list(sheet.iter_rows(values_only=True))
head, data = rows[0], rows[1:]
TYPE = head.index("Type d'équipement")
PLACE = head.index("Localisation de l'équipement")

def fold(text):
    """Curly apostrophe to straight, accents removed, case and spacing ignored."""
    text = unicodedata.normalize("NFKD", (text or "").replace("\\u2019", "'"))
    text = "".join(ch for ch in text if not unicodedata.combining(ch))
    return " ".join(text.lower().split())

def draft_search(query):
    return [r for r in data if query.lower() in (r[TYPE] or "").lower() + " " + (r[PLACE] or "").lower()]

def folded_search(query):
    return [r for r in data if fold(query) in fold(r[TYPE]) + " " + fold(r[PLACE])]

# The test queries: typed the way people really type them, written down before any code.
QUERIES = ["jeux d'eau", "petanque", "patinoires et sentier glace", "aréna - olympia", "pataugeoire"]
for q in QUERIES:
    print(repr(q), "draft", len(draft_search(q)), "folded", len(folded_search(q)))`);

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'LONGUEUIL', label: 'Longueuil', blurb: 'Vibe coding and AI agents in English for Longueuil teens and adults, tested on the city\'s French-language sports equipment list.' },
  market: CA,
  slug: 'vibe-coding-and-ai-agents-classes-in-longueuil',
  code: 'vaal',
  accent: '#2E6642',
  accentRationale: 'Longueuil: a muted south-shore forest green, #2E6642, allocated for row 145 at least 6 RGB units from every site accent and 14 from the other Canada accents; contrast 6.40 on the paper #FBF8F2 (6.02 and 5.51 on the darker tints), above 4.5 on all three',
  pageType: 'city',
  place: {
    name: 'Longueuil',
    eyebrow: 'Longueuil, Quebec',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Quebec' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Vibe coding in Canada', href: '/vibe-coding-and-ai-agents-classes-in-canada' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Longueuil',
  title: 'Vibe Coding and AI Agents Classes in Longueuil | In English',
  description: 'Vibe coding and AI agent classes in English for Longueuil teens and adults: AI tool age rules, Quebec school context, and a French text search on city data.',
  ogDescription: 'An AI-written search found no "jeux d\'eau" in Longueuil\'s equipment list; there are 19. Vibe coding and agents, taught in English, with tests first.',
  twitterDescription: 'Vibe coding and AI agents for Longueuil teens and adults, live online in English.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '23 October 2026',
  courseSchema: {
    name: 'Vibe Coding and AI Agents Classes in English for Longueuil Learners',
    description: 'Live online vibe coding in English for Longueuil teens aged 13 to 17 and AI agent courses for adults, taught separately, with test queries and text normalisation on real French-language data.'
  },

  h1: 'Vibe coding and AI agents classes in Longueuil',
  capsuleQ: 'Can a Longueuil teen or adult learn vibe coding and AI agents in English?',
  capsule: 'Yes. Modern Age Coders teaches vibe coding and AI agents in English, live online, to learners in Longueuil, Quebec. Teens from 13 to 17 take Vibe Coding for Teens; adults take a separate agents course built on Codex and Claude Code, which admits over-18s only. Learn in a class of fifteen to twenty or one to one.',
  lead: 'Longueuil sits across the St. Lawrence from Montreal, and most of its public data is published in French. That makes it a good place to learn something every vibe coder meets sooner or later: AI-written code that works perfectly on the examples in the prompt and fails on the way people actually type. Vibe coding is asking a model for code in plain words; agents add a loop in which the model picks a tool, calls it and reads the reply before choosing its next move. On this page an AI-style search over the city\'s list of sports and recreation equipment returns nothing for jeux d\'eau and nothing for petanque, although the file lists 19 and 27. The fix takes a few lines. Finding the need for it takes a habit we teach: write the test queries first, the way real users would type them. Classes are in English; the data is in French; the lesson is about text.',
  wa: 'Hello Modern Age Coders, I am in Longueuil and would like a free first class in English in vibe coding or AI agents.',

  picks: {
    eyebrow: 'Course picks for Longueuil',
    h2: 'Four courses for Longueuil, sorted by age first',
    intro: 'Age decides which AI tools a learner may use, and so which course they join. The free class decides the level.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python, web and AI projects with assistants teens are allowed to use, tested against inputs typed the way real people type them, accents included.' },
      { course: 'python-complete-masterclass-teens', band: 'Teens, beginners', note: 'Python by hand: strings, lists, loops and functions, so a teen understands what an assistant\'s code does to text before trusting it.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', band: 'Adults only, 18+', note: 'Coding agents on real repositories for working adults. Anthropic limits Claude Code to users aged 18 and over, so teens are not enrolled.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Ages 18 and up', note: 'How large language models, retrieval and agents work from first principles, including why they handle some languages and spellings worse than others.' }
    ]
  },

  sections: [
    {
      id: 'search', tint: 'deep', eyebrow: 'Longueuil data project',
      h2: 'Where are the jeux d\'eau? A search that fails in French, and the fix',
      intro: 'Ville de Longueuil publishes its sports and recreation equipment as open data on Données Québec: 644 rows, from play modules to arenas. We wrote the search an assistant typically produces, tested it with queries people actually type, and fixed it. All code and counts are ours, from the file downloaded on 23 October 2026.',
      body: [
        { kind: 'table', caption: 'Five test queries, written before the code, against the draft and the folded search (our run on the Ville de Longueuil file, 23 October 2026)', head: ['Query as a person types it', 'What the file actually says', 'Draft finds', 'Folded search finds'], rows: [
          ['jeux d\'eau', 'Jeux d&rsquo;eau, with a curly apostrophe', '0', '19'],
          ['petanque', 'Terrain sportif - Pétanque', '0', '27'],
          ['patinoires et sentier glace', 'Patinoires et sentier glacé', '0', '47'],
          ['aréna - olympia', 'Aréna, two spaces, then - Olympia', '0', '1'],
          ['pataugeoire', 'Pataugeoire', '21', '21']
        ] },
        { kind: 'p', text: 'The draft lowercases both sides and looks for the query inside the type and place columns. That is what a quick prompt usually returns, and it passes the one test most people try, a plain word with no accent. It fails on the other four for three different reasons: a curly apostrophe (U+2019) where the user typed a straight one, an accent the user did not type, and a doubled space in the city\'s own data.' },
        { kind: 'p', text: 'The fix folds both the query and the data the same way before comparing: apostrophes made straight, accents stripped, case and spacing ignored. Here is the whole exercise:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Write the queries first', p: 'The five queries were listed before any code existed, typed the way a Longueuil parent would type them on a phone: no accents, straight apostrophes, single spaces. If the draft had been tested only with pataugeoire, it would have looked correct.' },
          { h3: 'Count the variants', p: 'Our count finds 23 type values with a curly apostrophe and 8 with a straight one, and 27 place names with stray or doubled spaces. Folding is not cosmetic; on this file it decides whether a search works at all.' },
          { h3: 'Know what folding costs', p: 'Folding can merge values. On this file it turns 261 raw place names into 246, and we checked all 14 merged groups: each is one place written two or three ways, such as Complexe Sportif Longueuil and Complexe sportif Longueuil. Elsewhere accents can separate real words, so test before shipping.' }
        ] },
        { kind: 'callout', h3: 'A column that is not what its name says', p: 'The column headed Secteur holds a postal code on 637 of the 644 rows. On 6 rows it holds a district name instead (Saint-Hubert four times, Maricourt once and Longueuil once), and one postal code, J4P3K3 on OBJECTID 69, has lost its space. An agent told to group equipment by sector would group by postal code without saying so. Reading the values before trusting the header is the check.' },
        { kind: 'p', text: 'The dataset is Ville de Longueuil\'s, published on Données Québec under Creative Commons Attribution 4.0 (CC BY 4.0), which the portal\'s licence page describes as allowing reuse même à des fins commerciales, that is, even for commercial purposes (<a class="cg-inline-link" href="https://www.donneesquebec.ca/recherche/dataset/equipements-sportifs-et-recreatifs">dataset</a>, <a class="cg-inline-link" href="https://www.donneesquebec.ca/licence/#cc-by">licence</a>). Source: Ville de Longueuil, Équipements sportifs et récréatifs, CC BY 4.0. The city does not endorse this page or our classes.' }
      ]
    },
    {
      id: 'method', tint: '', eyebrow: 'What we teach',
      h2: 'Prompt, test with real input, fold, explain',
      intro: 'Text is where AI-written code fails most quietly, because the failure is an empty result rather than an error message. Our routine for any code that handles names, places or search terms has four steps.',
      body: [
        { kind: 'table', caption: 'Our routine for AI-assisted text handling (ours)', head: ['Step', 'What the learner does', 'What it caught in Longueuil'], rows: [
          ['1. Collect real inputs', 'Write test strings the way users type them: no accents, mixed case, odd spacing', 'Four of five queries failed the draft'],
          ['2. Read the data\'s spelling', 'Count which characters actually appear: curly or straight apostrophes, accents, double spaces', 'U+2019 in 23 type values'],
          ['3. Normalise both sides', 'Apply the same folding to query and data, never only one of them', 'All four failures fixed'],
          ['4. Explain the trade-off', 'Say what the folding could merge by mistake, and test for it', '14 merged place groups, all the same place']
        ] },
        { kind: 'p', text: 'For agents the stakes are higher, because an agent that gets an empty search result will often conclude that the thing does not exist, and say so politely. Anthropic\'s published advice to agent builders is to look for the simplest solution and add complexity only when it is needed; here the simple solution is a better search tool, not a cleverer agent. In our adult course, Longueuil learners fix the tool, then write the test that would have caught the empty answer.' },
        { kind: 'p', text: 'This is the owner\'s promise on our own terms: we teach learners to think about a problem and solve it, never to copy an answer, AI answers included. A Secondary 4 student and an adult analyst in Longueuil both finish this exercise the same way, by explaining in their own words why the draft returned nothing.' }
      ]
    },
    {
      id: 'tools', tint: 'tint', eyebrow: 'Age rules for AI tools',
      h2: 'Which AI coding tools a Longueuil teenager may use',
      intro: 'Each AI company publishes its own age floor. Our reading of those pages on 22 October 2026 is summarised below, and it fixes which course a Longueuil learner may enter.',
      body: [
        { kind: 'table', caption: 'AI coding tools by age (companies\' terms, read 22 October 2026)', head: ['Tool', 'Teens, 13 to 17', 'Adults, 18 and over'], rows: [
          ['GitHub Copilot', 'Yes: GitHub accounts start at 13, and verified students get Copilot free through GitHub Education', 'Yes'],
          ['ChatGPT and other OpenAI services', 'Only once a parent agrees: OpenAI asks for that consent from every user under 18', 'Yes'],
          ['Claude and Claude Code', 'No: Anthropic\'s consumer terms set a minimum age of 18', 'Yes, in the adult course'],
          ['Any assistant during the CCC', 'No: the contest bans generative AI and editor plug-ins', 'Not relevant']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For parents in Longueuil', p: 'Teens are never steered toward tools their age excludes. Before any lesson that would use an OpenAI product, we ask for a parent\'s agreement, as the company requires.' },
          { h3: 'For adults', p: 'Adults practise with agents that change files and run commands, always inside a Git project so each change can be inspected and reverted.' },
          { h3: 'Terms are revised', p: 'These rules belong to the companies and can change. We look again before each new course; check the live terms before you open any account.' }
        ] }
      ]
    },
    {
      id: 'school', tint: '', eyebrow: 'Quebec school context',
      h2: 'Secondary math options, CEGEP and contests for a Longueuil student',
      intro: 'Quebec\'s education system differs from the rest of Canada\'s in ways that matter for planning. We quote the Quebec government\'s pages and CEMC, read 22 October 2026; summaries are ours.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Three math options', p: 'In Secondary Cycle Two, Quebec students follow one of three mathematics options, abbreviated CST, TS and S in the English program document, and the ministry states that each of the three still opens the door to a pre-university CEGEP program.' },
          { h3: 'Then CEGEP', p: 'After Secondary 5 comes CEGEP: two full-time years for a pre-university program, three for a technical one, according to the Quebec government, which also notes that universities weigh applicants by their R score.' },
          { h3: 'Language', p: 'Quebec\'s Charter of the French language makes French the province\'s official language. We teach in English, which suits learners from either school system who are comfortable following a lesson in English.' }
        ] },
        { kind: 'table', mt: true, caption: 'CEMC computing contests open to Longueuil students, 2026 to 2027 (CEMC, read 22 October 2026)', head: ['Contest', 'Languages', 'Date'], rows: [
          ['Beaver Computing Challenge (no coding background needed)', 'English only', '9 to 20 November 2026'],
          ['Canadian Computing Competition, Junior or Senior', 'English and French', 'Wednesday 17 February 2027']
        ] },
        { kind: 'p', text: 'Entry to any CEMC contest is arranged by a school; there is no personal registration. The CCC is offered in French as well as English, which suits Longueuil students in French-language schools; the Beaver Computing Challenge is offered in English only. We prepare students with original problems of our own and point them to CEMC\'s free archive, and we do not grant credits of any kind. Our <a class="cg-inline-link" href="/quebec-secondary-4-math-cst-ts-science">Secondary 4 math options page</a> and <a class="cg-inline-link" href="/cegep-computer-science-preparation">CEGEP computer science page</a> go further.' }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Class times',
      h2: 'Longueuil time against India time, through the November change',
      intro: 'Longueuil keeps Eastern time, as Montreal does. Clocks go back on 1 November 2026 and forward on 14 March 2027; India, where our teachers are, does not change.',
      body: [
        { kind: 'table', caption: 'A Saturday 9:30 am class in Longueuil, seen from India (tzdb 2026e offsets; India times are our conversion)', head: ['Period', 'Longueuil offset', 'India time for that class'], rows: [
          ['Until 1 November 2026', 'UTC-4', '7:00 pm'],
          ['1 November 2026 to 14 March 2027', 'UTC-5', '8:00 pm'],
          ['From 14 March 2027', 'UTC-4', '7:00 pm']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Same local time, every season', p: 'A Longueuil class stays at the same local time across both changes; our teachers adjust on their side, and we re-send the schedule the week before.' },
          { h3: 'South Shore numbers', p: 'Numbers on the 450, 579 and 354 area codes are accepted in the booking form. Type the ten digits without the 1.' },
          { h3: 'Weekend mornings fit well', p: 'A Saturday morning in Longueuil is a Saturday evening in India, which is why weekend morning groups are easy for us to staff.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From reading Python to building agents that search well',
    intro: 'The age bands are a guide; the free class shows where each Longueuil learner actually starts.',
    cols: [
      { band: 'Ages 13 and 14', h3: 'Python first', p: 'Strings, lists and functions written by hand, so AI-written text code can be read.', courses: ['python-complete-masterclass-teens', 'git-github-version-control-course-for-teens'] },
      { band: 'Ages 14 to 17', h3: 'Vibe coding, tested', p: 'Projects with permitted assistants, checked with real inputs in more than one language.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 and up', h3: 'How models work', p: 'Generative AI, retrieval and full stack building for CEGEP and university students and career changers.', courses: ['complete-generative-ai-masterclass-college', 'vibe-coding-for-college-fullstack-ai-dsa-career-course'] },
      { band: 'Working adults', h3: 'Agents with good tools', p: 'Coding agents on real repositories, with tools that are tested before agents use them. Adults only.', courses: ['codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Does a Longueuil learner still need to code when AI writes the search?',
    intro: 'Yes, because the AI wrote a search that could not find anything a real user typed.',
    p1: 'The draft in the Longueuil example was tidy and plausible, and it returned zero for four ordinary questions. No error, no warning. Someone had to know that an apostrophe can be two different characters, that accents matter to a computer even when they do not matter to a reader, and that city data contains stray spaces. That knowledge comes from having handled text yourself.',
    p2: 'So we teach code and judgement together. Teens use assistants their age allows and adults use agents, but every learner writes the test inputs, reads the data\'s real spelling, and explains the final code without help. That is how AI help becomes something you can depend on.',
    closer: 'In a bilingual region, text handling is not an edge case; it is most of the job.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online for Longueuil, Saint-Hubert and Greenfield Park',
    intro: 'Learners sit at their own computer in their own home; the teacher, live on video, shares the screen with them and asks for the reasoning behind each line, in English.',
    cells: [
      { h3: 'Flexible timing', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'How many in a class', p: 'Fifteen to twenty learners of the same age band and level, or a single learner with a teacher, which adults often choose for their own projects.' },
      { h3: 'Two age tracks', p: 'Teens and adults learn in separate courses, because the companies\' terms allow them different tools.' },
      { h3: 'Across the South Shore', p: 'Brossard, Boucherville and Montreal learners are placed in these groups too; all of them keep Eastern time like Longueuil.' },
      { h3: 'Equipment', p: 'Any recent computer with a browser, a headset if possible, and internet that holds a video call. Nothing paid is required for the AI tools in the teen course.' },
      { h3: 'First lesson on us', p: 'Session one is a genuine lesson that costs nothing. At the end the teacher suggests a level and course, and we never ask for a card number at that point.' }
    ],
    spec: { title: 'No Longueuil office', p: 'We have no centre in Longueuil and do not claim one. Teaching is live and online, in English, from India. We are not connected with Ville de Longueuil, Données Québec, the Quebec ministry or CEMC.' }
  },

  fees: {
    h2: 'Fees for Longueuil learners',
    intro: 'Three items, each displayed in your own currency by the price anchor.',
    first: 'A full first lesson at no charge, with a placement at the end.',
    group: 'The monthly fee for a class of fifteen to twenty, eight live lessons a month.',
    private: 'The monthly fee for one-to-one lessons at times you choose.',
    closer: 'There is no Longueuil surcharge or discount: the fee matches every other Canadian city. Payment starts after the first lesson, when you have chosen a course and a time.'
  },

  reviewsH2: 'What our students and families have said on Google',

  book: {
    h2: 'Tell us about the Longueuil learner',
    intro: 'Lesson one opens with an AI-written search that misses obvious results. How a learner hunts for the reason, and the test input they write to prove it, tells us which level and which age track to suggest.',
    success: 'Thank you. The team will contact you soon about a first class for Longueuil.'
  },

  faq: {
    h2: 'Vibe coding and AI agents in Longueuil: questions',
    intro: 'Questions Longueuil families and adult learners ask us most.',
    items: [
      { q: 'Do you teach vibe coding in Longueuil?', a: 'Yes, live online with a teacher. Teens aged 13 to 17 take the teen course and adults take separate courses. There is no classroom in Longueuil.' },
      { q: 'Are the classes in French or English?', a: 'English. The data example uses a French-language city file, and learners handle French text in it, but teaching is in English.' },
      { q: 'What is vibe coding?', a: 'Asking an AI model to write code from a plain description. We treat that as the first draft; testing it with real inputs and explaining it are what we teach.' },
      { q: 'Is Claude Code part of the teen course?', a: 'No. Anthropic\'s consumer terms require users to be at least 18, so Claude and Claude Code are limited to our adult course and never offered to teens.' },
      { q: 'Does my teen need ChatGPT?', a: 'No. Without a parent\'s go-ahead, which OpenAI requires below 18, we leave ChatGPT out. GitHub Copilot is the alternative, free for verified students.' },
      { q: 'Is there an AI agents course for adults near Montreal?', a: 'Yes, online. Adults learn agentic coding with Codex and Claude Code on real Git repositories, reviewing and reverting each agent change; teenagers cannot enrol.' },
      { q: 'Why did the search find no jeux d\'eau?', a: 'The city file writes it with a curly apostrophe, and people type a straight one. The draft compared them as different characters. Folding both sides the same way finds all 19.' },
      { q: 'Can Longueuil students write the CCC in French?', a: 'Yes. The CCC is available in English and French, according to CEMC. The 2027 sitting is on Wednesday 17 February 2027 through participating schools, and AI help of any kind is banned.' },
      { q: 'Do your classes give Quebec credits?', a: 'No. We teach alongside school and CEGEP and do not grant credits of any kind; those come from the student\'s own institution.' },
      { q: 'When can Longueuil learners take classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are given in Eastern time, Longueuil\'s own.' }
    ]
  },

  next: {
    eyebrow: 'More for Canada',
    h2: 'Other pages for Longueuil and Quebec learners',
    html: 'Read <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-canada">vibe coding and AI agents classes in Canada</a> for the whole country; every province is listed on <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>. Quebec students can read about <a class="cg-inline-link" href="/cegep-computer-science-preparation">CEGEP computer science preparation</a>; parents may want the <a class="cg-inline-link" href="/ai-tools-age-guide">AI tools age guide</a>, and adults <a class="cg-inline-link" href="/ai-agents-explained">AI agents explained</a>.',
    waLabel: 'Write to us on WhatsApp'
  },

  footerHeading: 'Longueuil and Quebec',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/vibe-coding-and-ai-agents-classes-in-canada', label: 'Vibe coding in Canada' },
    { href: '/quebec-secondary-4-math-cst-ts-science', label: 'Quebec Secondary 4 math' },
    { href: '/cegep-computer-science-preparation', label: 'CEGEP computer science' },
    { href: '/canada-math-and-coding-contest-calendar', label: 'Contest calendar' }
  ],

  personalityCss: `
.cg-root.cg-vaal .cg-hero h1 { font-weight: 690; letter-spacing: -0.014em; line-height: 1.08; }
.cg-root.cg-vaal .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-vaal .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-vaal .cg-section-head h2 { max-width: 33ch; }
.cg-root.cg-vaal .cg-table caption { text-align: left; font-style: italic; }
.cg-root.cg-vaal .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-vaal #search code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.55; padding: 0.9rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-vaal .cg-callout { border-left-width: 3px; }
`,

  dossier: {
    curriculumAuthority: 'Québec Education Program Secondary Cycle Two mathematics (three options, pre-university access); quebec.ca CEGEP overview (two and three years, R score); Charter of the French language s.1 (facts-geo.md); CEMC 2026-27 BCC (English only) and CCC (English and French) and the school-entry rule; CCC rules on AI; Anthropic, OpenAI and GitHub age rules; Anthropic, Building effective agents (simplest solution first, paraphrased). Longueuil area codes and Eastern offsets from facts-geo.md.',
    localProject: 'Ville de Longueuil, Équipements sportifs et récréatifs on Données Québec (CC BY 4.0), XLSX downloaded 23 October 2026, 644 rows: our longueuil_search.py (python -I) shows a naive lowercase search finding 0 for jeux d\'eau, petanque, patinoires et sentier glace and aréna - olympia, against 19, 27, 47 and 1 after folding apostrophes, accents, case and spacing; 23 curly and 8 straight apostrophes in type values; 27 place names with stray spaces; Secteur holds postal codes on 637 rows and district names on 6. Labelled as ours. Lesson family: text normalisation with test queries written first.',
    requiredMentions: [
      'Jeux d&rsquo;eau, with a curly apostrophe',
      'Terrain sportif - Pétanque',
      'J4P3K3 on OBJECTID 69',
      '261 raw place names into 246',
      'même à des fins commerciales',
      'Saint-Hubert four times',
      '450, 579 and 354',
      'Write the queries first',
      'Brossard, Boucherville',
      'Know what folding costs'
    ],
    sources: [
      { claim: 'Ville de Longueuil, Équipements sportifs et récréatifs on Données Québec (package and XLSX resource).', url: 'https://www.donneesquebec.ca/recherche/dataset/equipements-sportifs-et-recreatifs' },
      { claim: 'Données Québec licence page: CC BY 4.0 section.', url: 'https://www.donneesquebec.ca/licence/#cc-by' },
      { claim: 'Québec Education Program, Secondary Cycle Two mathematics.', url: 'https://cdn-contenu.quebec.ca/cdn-contenu/education/pfeq/secondaire/programmes/PFEQ-mathematique-deuxieme-cycle-secondaire-AN.pdf' },
      { claim: 'Quebec CEGEP overview: program lengths and R score.', url: 'https://www.quebec.ca/en/education/cegeps-private-colleges/studying/overview' },
      { claim: 'CEMC contests: languages and 2026-27 dates.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'Anthropic consumer terms: 18+.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'OpenAI terms: parent or guardian permission under 18.', url: 'https://openai.com/policies/terms-of-use/' },
      { claim: 'Anthropic, Building effective agents.', url: 'https://www.anthropic.com/research/building-effective-agents' }
    ],
    rejectedClaims: [
      'Any Longueuil or Montreal-area population: not used.',
      'Quebec rules on French-language schooling and the DES credit total: not verified (source unreachable), so not stated.',
      'That folding accents is always safe: refused; the page says to test for collisions.',
      'What the Secteur column was meant to hold: not documented, so only its actual contents are described.',
      'The two malformed Longueuil CSVs (parcs, installations): not used; installations lists schools and phone numbers.',
      'That our classes grant Quebec credits: refused.',
      'Recommending Claude or Claude Code to anyone under 18: refused.',
      'Any affiliation with Ville de Longueuil, Données Québec, the ministry or CEMC.'
    ]
  }
};
