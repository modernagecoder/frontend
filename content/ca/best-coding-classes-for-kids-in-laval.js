'use strict';
// Laval (cg- city page, Canada cluster Wave 2, row 119). Brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Angle: best-coding-classes-for-kids-in- (ages 6 to 12). "Best" sits in the title and meta only. The body is a checklist
// built around language (French at school, English in our classes), ranks no provider and never claims we are the best.
// Kill-rule check (8+ own verified facts): Charter of the French language s.1; Quebec ministry name; Laval in the Montreal
// CMA; Laval area codes 354/450/579; Quebec on Eastern time with the 2026-27 changes; CEMC BCC English only; CEMC CCC in
// English and French; Quebec Secondary Cycle Two math options all leading to pre-university; Ville de Laval dataset facts
// and licence. WRITE.
// Spine: the language question for a Laval child (French at school, English code keywords), a French-English coding
// glossary (ours), a Ville de Laval open data project on French, accented UTF-8 text, CEMC contest languages, Eastern time.
// Sources, read raw on 22 October 2026. Quebec facts from keyword-research-2026-09/ca/facts-schools-contests.md (raw ca/src/quebec);
// language and geography from ca/facts-geo.md (Charter of the French language via the Internet Archive copy of LegisQuebec,
// CQLR c C-11); CEMC from ca/src/cemc; data and licence in ca/src-pilots/best-coding-classes-for-kids-in-laval/ (SOURCES.txt):
//  - Charter of the French language, s.1: "French is the official language of Québec." Quebec ministry named as
//    "Ministère de l'Éducation" (quebec.ca, curly apostrophe in source). Quebec Secondary Cycle Two math: "They are the
//    Cultural, Social and Technical option, the Technical and Scientific option and the Science option." and "All of these
//    options allow students to enroll in a preuniversity program." No verified primary source on how Quebec elementary
//    schools teach coding, so the page makes no claim about it.
//  - CEMC contests overview: BCC "This contest is available in English only."; CCC "This contest is available in English
//    and French."; BCC 2026 "Monday, November 9, 2026 to Friday, November 20, 2026"; through-a-school rule; BCC questions
//    "only require familiarity with concepts covered in the mathematics curriculum across all Canadian provinces".
//  - facts-geo.md: Laval is in the Montreal CMA (98-10-0003-01); Laval sits in the 354/450/579 overlay for the area around
//    Montreal (CNAC via the Internet Archive); Quebec uses America/Toronto: UTC-5 from 1 November 2026, UTC-4 from
//    14 March 2027 (IANA tzdb 2026e). No populations used.
//  - Ville de Laval, "Sites de loisirs" on Donnees Quebec (package_sites-de-loisirs.json): organisation "Ville de Laval",
//    license_id "cc-by", license_title "Attribution (CC-BY 4.0)"; notes describe recreation sites across the city;
//    resource sites-de-loisirs.csv last modified 2021-01-21; dataset page
//    https://www.donneesquebec.ca/recherche/dataset/sites-de-loisirs (HTTP 200). CSV re-downloaded 22 October 2026,
//    byte-identical to the earlier copy, 194,689 bytes, sha256 16806238...463f1707, UTF-8.
//  - Licence (donneesquebec_licence.txt, www.donneesquebec.ca/licence/): CC BY lets others "distribuer, remixer, arranger et
//    adapter votre oeuvre, meme a des fins commerciales, tant qu'on vous attribue le credit" (accents and curly apostrophe
//    in source).
// Our own calculations (page_script.py, checks.py, mojibake.py, python -I -X utf8; outputs *.out.txt): 1,264 rows; 251 site
// codes; 24 fully blank rows; 35 distinct facility types (descr_type_plateau), 9 with accented letters; Modules de jeux 28
// rows, all in Secteur 2 (16) and Secteur 3 (12); Jeu d'eau 9; Pataugeoire 18; Butte de glisse 1 (Secteur 6); ind_sans_reserv
// O 400, N 840, blank 24; site type Ecole on 200 rows (no school named). Decoding the UTF-8 bytes of "Regional" (with e acute)
// as latin-1 prints the garbled form shown on the page. Phone numbers and site names are not printed.
// Lesson family: French column names and accented UTF-8 text, and noticing a label used in only two sectors.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const MOJI = [
  'word = "Régional"',
  'broken = word.encode("utf-8").decode("latin-1")',
  'print(word, broken)',
  'print(broken.encode("latin-1").decode("utf-8"))'
].join('\n');

const SCRIPT = [
  'import csv',
  '',
  'wanted = {"Modules de jeux", "Jeu d\'eau", "Pataugeoire", "Butte de glisse"}',
  'by_sector = {}',
  'with open("sites-de-loisirs.csv", encoding="utf-8") as f:',
  '    for row in csv.DictReader(f):',
  '        kind = row["descr_type_plateau"]',
  '        if kind in wanted:',
  '            sector = row["nom_secteur"]',
  '            by_sector.setdefault(sector, {})',
  '            by_sector[sector][kind] = by_sector[sector].get(kind, 0) + 1',
  '',
  'for sector in sorted(by_sector):',
  '    print(sector, by_sector[sector])'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'LAVAL', label: 'Laval', blurb: 'Choosing a coding class for a Laval child aged 6 to 12 when school is in French: a French-English coding glossary and a Ville de Laval data project.' },
  market: CA,
  audience: 'kids',
  slug: 'best-coding-classes-for-kids-in-laval',
  code: 'bkl',
  accent: '#665A1C',
  accentRationale: 'Laval kids page: a muted olive bronze, #665A1C, allocated to this row by the Canada group so it clears every site accent by 6 RGB units and the other Canada accents by 14 (including the Scarborough olive); contrast 6.51 on the paper #FBF8F2, 6.12 on #F5F1E8 and 5.60 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Laval',
    eyebrow: 'Laval, Quebec',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Quebec' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Courses', href: '/courses' },
    { label: 'Contest guide', href: '/beaver-computing-challenge-guide' }
  ],
  routeLabel: 'Laval',
  title: 'Best Coding Classes for Kids in Laval | In English, Ages 6 to 12',
  description: 'Looking for the best coding classes for kids in Laval? A checklist for families whose children study in French, a coding glossary, and a Ville de Laval project.',
  ogDescription: 'School in French, code in English keywords: how a Laval family can choose a coding class for a child aged 6 to 12, with our French-English glossary and a Ville de Laval data project.',
  twitterDescription: 'Choosing a kids\' coding class in Laval when school is in French, with a Ville de Laval data project.',
  ogImageCourse: 'scratch-programming-complete-course',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes in English for Laval Children Aged 6 to 12',
    description: 'Live online coding taught in English for Laval children aged 6 to 12: block coding and Scratch, then Python, with French-English coding vocabulary and real Ville de Laval open data.'
  },

  h1: 'Coding classes for kids in Laval',
  capsuleQ: 'Can a Laval child who goes to school in French take a coding class in English?',
  capsule: 'Yes, and it often works well, because coding is learned by doing and Python&rsquo;s keywords are the same English words in every country. Check that the teacher speaks slowly, connects the French terms your child knows, and groups children by age. Modern Age Coders teaches Laval children aged 6 to 12 live online, in English, with classes of 15 to 20 or one to one. Your first class is free.',
  lead: 'For many Laval families the first question about a coding class is not about price or projects but language. French is the official language of Quebec, and many Laval children spend their school day in French. Our classes are taught in English. That can be a strength rather than a barrier: programming languages borrow their keywords from English, so a child who learns that a boucle is a loop and that si is if has two words for one idea, and understands both better. This page sets out a checklist written for Laval families, a short French-English coding glossary of our own, and a Ville de Laval open data file that our ten-to-twelve-year-olds work through: it is in French, full of accented letters that a careless program will mangle. We do not rank other providers, and the checklist applies to us as much as anyone.',
  wa: 'Hello Modern Age Coders, we live in Laval. Could my child try a free coding class in English?',

  picks: {
    eyebrow: 'Course picks for Laval children',
    h2: 'Four English-language courses for Laval kids',
    intro: 'Chosen for children who may be stronger in French than in English. The free class lets you judge the fit, in both senses.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 8', note: 'Picture-based blocks and short instructions, so a young child who speaks more French than English can follow by doing.' },
      { course: 'scratch-programming-complete-course', band: 'Ages 7 to 10', note: 'Colourful blocks with short labels. We teach the English names and link each one to the French word a child already uses, so neither language becomes a wall.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Typed Python, where the keywords are English in every country, plus the Ville de Laval accent project on this page.' },
      { course: 'ai-literacy-for-kids-course', band: 'Ages 8 to 12', note: 'How AI tools work and fail, including how they handle French text, taught in plain English with plenty of examples.' }
    ]
  },

  sections: [
    {
      id: 'language', tint: '', eyebrow: 'French at school, English in class',
      h2: 'A checklist for Laval families choosing a coding class in English',
      intro: 'Our checklist, for parents of a child aged 6 to 12 in Laval. It focuses on the language question first, then on what any good class for children needs.',
      body: [
        { kind: 'table', caption: 'Choosing an English-language coding class for a child who studies in French (our checklist, October 2026)', head: ['Check', 'Why it matters for a Laval child', 'What to listen for'], rows: [
          ['Does the teacher slow down for second-language learners?', 'A child who is quick in French can look slow in English simply because the instructions are harder to follow.', 'Short sentences, a demonstration before an explanation, and a teacher who checks understanding by asking the child to show, not repeat.'],
          ['Are the French terms welcome?', 'Children who learned the word boucle at school should be allowed to use it while learning the word loop.', 'A teacher who links the two words instead of correcting one into the other.'],
          ['Is the code itself in English keywords?', 'Python&rsquo;s if, for and while are the same everywhere; learning them early removes a later hurdle.', 'Typed code by about age 9 or 10, with variable names the child may write in French if they like.'],
          ['Are children grouped by age?', 'A six-year-old and an eleven-year-old need different lessons in any language.', 'Stated age bands, and a placement class before booking.'],
          ['Is there one regular teacher?', 'A teacher who knows your child also learns where language, not logic, is the real difficulty.', 'The same named teacher each week.'],
          ['Is the monthly fee written down?', 'Comparing a French-language class and an English one is only fair with both prices in front of you.', 'A fee printed on the site or sent in writing before the trial.']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A note on schools', p: 'Quebec&rsquo;s ministry is the Ministère de l&rsquo;Éducation. We have not found a primary source that sets out how Quebec elementary schools teach coding, so we make no claim about it here. Ask your child&rsquo;s teacher what they do in class.' },
          { h3: 'A note on the law', p: 'The Charter of the French language states that French is the official language of Québec. A coding class in English sits outside school, as an activity a family chooses, and does not replace any part of a child&rsquo;s schooling.' },
          { h3: 'When French is the better choice', p: 'If English is a struggle that makes your child unhappy, a French-language class may serve them better for now. We would rather say that than lose a child&rsquo;s interest in coding.' }
        ] }
      ]
    },
    {
      id: 'glossary', tint: 'tint', eyebrow: 'Two words, one idea',
      h2: 'A French-English coding glossary for Laval children',
      intro: 'Our own glossary, for children who learn coding words at school in French and meet them in English in our classes. The Python column shows the keyword a child actually types, which is the same in every country.',
      body: [
        { kind: 'table', caption: 'Coding words in French, in English and in Python (our glossary for young learners)', head: ['In French', 'In English', 'In Python', 'Example a child might say'], rows: [
          ['une boucle', 'a loop', '<b>for</b> or <b>while</b>', '&ldquo;The loop runs ten times.&rdquo;'],
          ['si ... sinon', 'if ... else', '<b>if</b> ... <b>else</b>', '&ldquo;If the score is 10, the game ends.&rdquo;'],
          ['une variable', 'a variable', 'a name such as <b>score</b>', '&ldquo;The variable score starts at zero.&rdquo;'],
          ['une fonction', 'a function', '<b>def</b>', '&ldquo;I wrote a function to draw a square.&rdquo;'],
          ['une liste', 'a list', '<b>[ ]</b>', '&ldquo;My list has five colours.&rdquo;'],
          ['un bogue', 'a bug', '(no keyword)', '&ldquo;I found the bug on line 4.&rdquo;']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Names in any language', p: 'Python lets a child name things in French: <b>pointage = 0</b> works as well as <b>score = 0</b>. We let younger children choose, so the logic stays theirs.' },
          { h3: 'Accents in names', p: 'Python 3 even accepts accented letters in names. We still suggest plain letters, because some tools and keyboards handle accents badly, which the project below shows.' },
          { h3: 'Reading aloud', p: 'We ask children to read their code aloud. A Laval child may do it half in French, half in English, and that is fine. What matters is that they can explain each line.' }
        ] }
      ]
    },
    {
      id: 'loisirs', tint: 'deep', eyebrow: 'Laval data project',
      h2: 'Splash pads, play structures and accents: a Ville de Laval open data project',
      intro: 'The Ville de Laval publishes its recreation sites, Sites de loisirs, as open data on Données Québec. The file is in French, column names included. Before any counting, children in our upper classes learn to open it without breaking the accents. All numbers here are ours.',
      body: [
        { kind: 'p', text: '<b>Step 1: the accent trap.</b> The file is saved as UTF-8, where é takes two bytes. Read those bytes with the wrong encoding and every é turns into two strange characters. This four-line demonstration, ours, shows the damage and the repair:<code class="cg-mt-2">' + MOJI + '</code>It prints <b>Régional RÃ©gional</b> and then <b>Régional</b> again. On some Windows computers Python may default to a different encoding, so we teach children to write <b>encoding="utf-8"</b> every time they open a file.' },
        { kind: 'table', caption: 'Selected facility types for children, by sector: our count from the Ville de Laval Sites de loisirs file, downloaded 22 October 2026 (1,264 rows)', head: ['Sector (nom_secteur)', 'Modules de jeux (play structures)', 'Jeu d&rsquo;eau (splash pad)', 'Pataugeoire (wading pool)', 'Butte de glisse (sledding hill)'], rows: [
          ['Secteur 1', '0', '1', '2', '0'],
          ['Secteur 2', '16', '3', '4', '0'],
          ['Secteur 3', '12', '1', '2', '0'],
          ['Secteur 4', '0', '0', '3', '0'],
          ['Secteur 5', '0', '2', '3', '0'],
          ['Secteur 6', '0', '2', '4', '1']
        ] },
        { kind: 'p', text: 'This is our counting script. A set holds the four facility types we want, and a dictionary inside a dictionary keeps the count for each sector:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'A label used in two sectors only', p: 'All 28 Modules de jeux rows sit in Secteur 2 and Secteur 3. It is very unlikely that four sectors have no play structures at all; more likely they are recorded under another type, or not at all. Students learn to say the file is uneven rather than that the sectors are.' },
          { h3: 'Reading the column names', p: 'nom_secteur is the sector name, descr_type_plateau the facility type and ind_sans_reserv a yes or no flag, O or N, which we read as whether booking is needed. That reading is ours; the file does not define it.' },
          { h3: 'Blank rows', p: 'Twenty-four rows are blank in every column. The script skips them naturally, because a blank type is not in the wanted set, but a careful student counts them and says so.' }
        ] },
        { kind: 'callout', h3: 'What the file cannot tell you', p: 'The CSV on Données Québec was last modified in January 2021, so it is a snapshot from several years ago. A splash pad built since then will not appear, and one listed may have changed. Students write the file date beside every result.' },
        { kind: 'p', text: 'Data source: Ville de Laval, <a class="cg-inline-link" href="https://www.donneesquebec.ca/recherche/dataset/sites-de-loisirs">Sites de loisirs</a>, Données Québec, licensed under <a class="cg-inline-link" href="https://www.donneesquebec.ca/licence/">Creative Commons Attribution 4.0 (CC BY 4.0)</a>, which allows reuse, including commercial reuse, with credit. Our counts and table are adapted from the original file. No endorsement by the Ville de Laval is implied, and the file&rsquo;s phone numbers and site names are left out of this page.' }
      ]
    },
    {
      id: 'contests', tint: '', eyebrow: 'Contests and language',
      h2: 'Which CEMC contests a Laval child can write, and in which language',
      intro: 'The Centre for Education in Mathematics and Computing (CEMC) at the University of Waterloo runs contests that schools across Canada can order. For a Laval family, language matters. These details are CEMC&rsquo;s, read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Two CEMC computing contests and their languages (CEMC contests page, read 22 October 2026)', head: ['Contest', 'Who it suits', 'Language', 'When'], rows: [
          ['Beaver Computing Challenge', 'Grades 5 to 10, in three levels; no coding needed', 'English only', '9 to 20 November 2026'],
          ['Canadian Computing Competition (CCC)', 'Older students with programming skills', 'English and French', '17 February 2027 (the 2027 CCC)']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'An English contest at a French school', p: 'Because the Beaver Computing Challenge is offered in English only, a child in a French-language school may find the reading harder than the logic. Practising logic puzzles in English, as we do in class, helps.' },
          { h3: 'Entry is by school', p: 'Families cannot sign a child up directly; CEMC routes every entry through a school. Where a school does not order the contests, CEMC suggests finding another local school willing to let the child join.' },
          { h3: 'Original puzzles', p: 'CEMC&rsquo;s past papers stay on CEMC&rsquo;s own free archive, and we leave them there. The practice puzzles in our lessons are written by our teachers and marked as ours.' }
        ] },
        { kind: 'p', text: 'Our <a class="cg-inline-link" href="/beaver-computing-challenge-guide">Beaver Computing Challenge guide</a> explains each level. For the later school years, Quebec&rsquo;s Secondary Cycle Two math has three options, and the ministry says all of them allow students to enrol in a pre-university program; our <a class="cg-inline-link" href="/quebec-secondary-4-math-cst-ts-science">guide to the Secondary 4 options</a> explains them. We are not connected with CEMC, the University of Waterloo or the Ministère de l&rsquo;Éducation.' }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Class times',
      h2: 'Laval class times on Eastern time, and India time beside them',
      intro: 'Quebec uses Eastern time and changes its clocks on 1 November 2026 and 14 March 2027. India, where our teachers are, does not change. The conversions are ours, from the IANA time zone database (2026e).',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Weekday, 4:00 pm in Laval', p: 'On UTC-4, until 1 November 2026 and again from 14 March 2027, that is 1:30 am the next day in India. On UTC-5, from 1 November 2026 to 14 March 2027, it is 2:30 am.' },
          { h3: 'Saturday, 9:30 am in Laval', p: 'On UTC-4 that is 7:00 pm the same Saturday in India; on UTC-5 it is 8:00 pm. Weekend mornings in Laval land in the Indian evening all year.' },
          { h3: 'Laval phone numbers', p: 'Laval numbers use 450, 579 and 354, the area codes for the region around Montreal. Type all ten digits into the booking form below.' }
        ] },
        { kind: 'p', text: 'We write every Laval class time in Eastern time, and send the next time again before each clock change, so no child joins an hour early or late.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From picture blocks to typed Python, for Laval children',
    intro: 'Ages are only a guide, and language comfort matters as much as age. The free class finds the right starting point.',
    cols: [
      { band: 'Ages 6 and 7', h3: 'Show, then tell', p: 'Picture blocks and demonstrations first, with English words added a few at a time.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 8 and 9', h3: 'Two words for each idea', p: 'Scratch projects with loops and conditions, named in French and English.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 10 and 11', h3: 'English keywords', p: 'Typed Python with if, for and def, and variable names in either language.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Age 12', h3: 'Real French data', p: 'Files like the Laval recreation list, opened safely and counted honestly.', courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Can an AI tool replace learning to code for a Laval child?',
    intro: 'No. It can write code, but it cannot tell your child whether the accents survived.',
    p1: 'Ask an AI assistant to count Laval splash pads and it may open the file with the wrong encoding, so that Jeu d&rsquo;eau never matches anything and the answer is zero. It will present that zero calmly. A child who has seen RÃ©gional on their own screen knows to check the text first, and knows why the count was wrong.',
    p2: 'So our classes for children teach thinking first: look at the data, understand it, write the code, test it, explain it, in whichever of their languages helps. Children learn how AI works and where it goes wrong, but they do their own reasoning. If ChatGPT is used at home, OpenAI&rsquo;s terms say a parent must agree for any child under 18.',
    closer: 'A bilingual child already knows that one idea can wear two sets of words; checking that an answer means what it seems to mean is the same skill.',
    blogAnchor: 'whether learning to code still pays off in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How our English-language classes work for Laval children',
    intro: 'Live online lessons at home, with a teacher who speaks clearly and checks often that your child is following.',
    cells: [
      { h3: 'When', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Group size', p: 'Either 15 to 20 children of a similar age and level, or private lessons, which many families pick while English is still new.' },
      { h3: 'Language', p: 'Lessons are in English. Children may answer in French when they are stuck for a word, and the teacher will help them find the English one.' },
      { h3: 'Equipment', p: 'A computer with a keyboard and sound, and a steady connection. A French or English keyboard layout both work.' },
      { h3: 'Around Montreal', p: 'Children from Montreal and the rest of the 450 area learn in these online groups too, all on Eastern time.' },
      { h3: 'Free first class', p: 'A real lesson that ends with a suggested course and level, and an honest word on whether English suits your child yet.' }
    ],
    spec: { title: 'No Laval centre', p: 'Modern Age Coders has no location in Laval and does not claim one. Every class is live and online, taught in English from India.' }
  },

  fees: {
    h2: 'What our kids&rsquo; coding classes cost in Laval',
    intro: 'Three options. The currency code is shown beside each fee.',
    first: 'A full live class at no cost, ending with a suggested level and course.',
    group: 'The monthly fee for a place in a class of 15 to 20 children at one stage.',
    private: 'The monthly fee for private lessons, which can go at your child&rsquo;s language pace.',
    closer: 'The monthly fee in Laval matches the fee anywhere else in Canada. Payment starts only after the free class, and only when a course and a time suit you; holidays and missed classes are explained on the pricing page.'
  },

  reviewsH2: 'Reviews on Google from parents and students',

  book: {
    h2: 'Book a free English-language coding class for your Laval child',
    intro: 'Let us know the grade or age, and roughly how much English your child uses day to day. The first lesson is pitched to match.',
    success: 'Thank you. The team will be in touch soon about a class for your child in Laval.'
  },

  faq: {
    h2: 'Questions from Laval parents',
    intro: 'What Laval families ask us before a first class.',
    items: [
      { q: 'Do you offer coding classes for kids in Laval?', a: 'Yes. They are live, online and in English. There is no Laval building: your child logs in from home, and a teacher works with them in a group of 15 to 20 or alone.' },
      { q: 'My child goes to school in French. Can they follow a class in English?', a: 'Usually, yes. Coding is learned by doing, and Python keywords are English everywhere. Private lessons help if English is still new, and the free class shows how your child copes.' },
      { q: 'Are your classes in French?', a: 'No, our classes are taught in English. Children can use French words when stuck, and the teacher helps connect them to the English terms.' },
      { q: 'What age can a Laval child start?', a: 'From age 6, with picture-based blocks. These courses for children go up to age 12.' },
      { q: 'Will learning in English confuse my child?', a: 'It rarely does. Most children enjoy having two words for one idea, such as boucle and loop, and understand the idea better for it.' },
      { q: 'Can my child write a CEMC contest?', a: 'Through their school. The Beaver Computing Challenge is offered in English only and needs no coding; the later Canadian Computing Competition is offered in English and French.' },
      { q: 'When are classes held for Laval families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in Eastern time.' },
      { q: 'Does my child need special software?', a: 'No. A computer with a browser is enough to start, and a French or English keyboard both work.' },
      { q: 'Do children use AI in your Laval classes?', a: 'Only as a subject. They study how AI tools reach answers and where those answers go wrong, while every line of their own projects is written by them.' },
      { q: 'How much do the classes cost?', a: 'The fees section shows the free first class and the monthly fees for a class place and for private lessons. You pay nothing before the free class.' }
    ]
  },

  next: {
    eyebrow: 'More for Canadian families',
    h2: 'Other pages for Laval and Quebec families',
    html: 'Start from the <a class="cg-inline-link" href="/coding-classes-in-canada">Canada hub</a>. For older Quebec students, see the <a class="cg-inline-link" href="/quebec-secondary-4-math-cst-ts-science">Secondary 4 math options</a> and <a class="cg-inline-link" href="/quebec-secondary-5-math-tutor">Secondary 5 math help</a>. The national comparison of class types is <a class="cg-inline-link" href="/best-online-coding-classes-in-canada">online coding classes in Canada</a>, and province-by-province coding at school is in <a class="cg-inline-link" href="/canada-coding-curriculum-by-province">coding in Canadian curricula</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Laval and Quebec',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/quebec-secondary-4-math-cst-ts-science', label: 'Quebec Secondary 4 math' },
    { href: '/quebec-secondary-5-math-tutor', label: 'Quebec Secondary 5 math' },
    { href: '/beaver-computing-challenge-guide', label: 'Beaver Computing Challenge' },
    { href: '/canada-coding-curriculum-by-province', label: 'Coding by province' }
  ],

  personalityCss: `
.cg-root.cg-bkl .cg-hero h1 { font-weight: 700; letter-spacing: -0.016em; line-height: 1.07; }
.cg-root.cg-bkl .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 0.95rem; }
.cg-root.cg-bkl .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; text-transform: uppercase; font-size: 0.75rem; }
.cg-root.cg-bkl .cg-section-head h2 { max-width: 32ch; letter-spacing: -0.01em; }
.cg-root.cg-bkl .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-bkl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-bkl #glossary .cg-table td:first-child { font-style: italic; font-weight: 600; }
.cg-root.cg-bkl #loisirs code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.81rem; line-height: 1.55; padding: 0.85rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-bkl #language .cg-table td:first-child { font-weight: 650; }
.cg-root.cg-bkl .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.75rem; }
`,

  dossier: {
    curriculumAuthority: 'Quebec, read 22 October 2026: Charter of the French language s.1 (official language, via facts-geo.md); the ministry named as the Ministère de l&rsquo;Éducation (quebec.ca); Secondary Cycle Two math options and their pre-university route (PFEQ English PDF). No primary source on Quebec elementary coding was found, so none is claimed. CEMC contest languages (BCC English only, CCC English and French), BCC 2026 dates, the 2027 CCC date and the through-a-school rule. Laval in the Montreal CMA, the 354/450/579 overlay and Eastern time offsets from facts-geo.md (CNAC via the Internet Archive; IANA tzdb 2026e).',
    localProject: 'Ville de Laval, Sites de loisirs, on Donnees Quebec (CC BY 4.0), CSV downloaded 22 October 2026 (194,689 bytes, 1,264 rows, UTF-8) and counted with our script page_script.py (python -I -X utf8): Modules de jeux 28 rows, only in Secteur 2 (16) and Secteur 3 (12); Jeu d&rsquo;eau 9; Pataugeoire 18; Butte de glisse 1; 24 blank rows; 35 facility types, 9 with accents; the encoding demonstration mojibake.py shows the latin-1 misreading. No phone numbers or site names printed. Labelled as ours. Lesson family: French headers and accented UTF-8 text.',
    requiredMentions: [
      'Régional RÃ©gional',
      'All 28 Modules de jeux rows sit in Secteur 2 and Secteur 3',
      'Butte de glisse (sledding hill)',
      'Creative Commons Attribution 4.0 (CC BY 4.0)',
      'Before any counting, children in our upper classes',
      'Laval numbers use 450, 579 and 354',
      'une boucle',
      'pointage = 0',
      'Twenty-four rows are blank in every column'
    ],
    sources: [
      { claim: 'Charter of the French language, CQLR c C-11, s.1 (official language of Quebec).', url: 'https://www.legisquebec.gouv.qc.ca/en/document/cs/C-11' },
      { claim: 'Quebec government education portal: the Ministere de l\'Education named.', url: 'https://www.quebec.ca/en/education' },
      { claim: 'Quebec Education Program, Secondary Cycle Two mathematics (English PDF): the three options and pre-university access.', url: 'https://cdn-contenu.quebec.ca/cdn-contenu/education/pfeq/secondaire/programmes/PFEQ-mathematique-deuxieme-cycle-secondaire-AN.pdf' },
      { claim: 'CEMC contests: languages of the BCC and CCC, 2026-27 dates, through-a-school rule.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'Ville de Laval, Sites de loisirs dataset on Donnees Quebec (CC BY 4.0).', url: 'https://www.donneesquebec.ca/recherche/dataset/sites-de-loisirs' },
      { claim: 'Donnees Quebec licence page: CC BY allows commercial reuse with credit.', url: 'https://www.donneesquebec.ca/licence/' },
      { claim: 'IANA tzdb northamerica: America/Toronto (used by Quebec) offsets and the 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Laval population or language-statistics figure: StatCan was not reachable live.',
      'How Quebec elementary schools teach coding: no primary source found, so no claim is made.',
      'That children must or must not attend French-language school, or any rule on the language of instruction: not verified, not stated.',
      'That four Laval sectors have no play structures: refused; the label is uneven in the file.',
      'The meaning of ind_sans_reserv: given only as our reading, not as fact.',
      'Phone numbers and site names from the file, including school sites: not printed.',
      'That we teach in French: refused; our classes are in English.',
      'Any ranking of Laval coding providers, or that Modern Age Coders is the best: refused.',
      'Any affiliation with the Ville de Laval, Donnees Quebec, the Ministere de l\'Education, CEMC or the University of Waterloo.'
    ]
  }
};
