'use strict';
// Peterborough, Ontario (cg- city page, Canada cluster Wave 2, row 148: vibe-coding-and-ai-agents-classes-in-<city>).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md, brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: vibe coding and AI agents for Peterborough teens and adults, taught as "units are part of the answer". The local
// project converts lake areas from the County of Peterborough's Waterbody layer (Ontario Hydro Network, clipped to the
// county) with an AI-style draft that divides by 1,000 and 100; an internal consistency check rejects it without knowing
// the true answer. Peterborough, Ontario, not Peterborough in England.
// Sources, read raw on 22 and 23 October 2026:
//  - Ontario curriculum (facts-schools-contests.md section 1): Grade 1 C3.2 "read and alter existing code, including code
//    that involves sequential events, and describe how changes to the code affect the outcomes"; Grade 4 C3.1 "nested
//    events"; MTH1W "Students will use mathematical processes, mathematical modelling, and coding to make sense of the
//    mathematics they are learning"; ICS4C "Students will learn object-oriented programming concepts"; EQAO Grade 9 "an
//    online assessment that includes two sessions (Session A and Session B), totalling 54 questions", "multi-stage computer
//    adaptive testing model", window 12 January to 5 February 2027.
//  - CEMC: Pascal, Cayley, Fermat 23 and 24 February 2027 (Grades 9, 10, 11), "25 multiple-choice questions", 60 minutes;
//    CCC Wednesday 17 February 2027; contests through a school; "Our contests are not tests or exams." CCC rules: no
//    generative AI.
//  - Tool terms: Anthropic 18+; OpenAI terms parent or guardian permission under 18; GitHub 13+. Anthropic, Building
//    effective agents, tools appendix: changing a tool to require absolute file paths (paraphrased; the source sentence
//    contains an em dash and is not quoted).
//  - facts-geo.md: Peterborough CMA; area codes 249, 683, 705; America/Toronto changes 1 November 2026 and 14 March 2027.
//    No population used.
//  - Data (src-pilots/vibe-coding-and-ai-agents-classes-in-peterborough-ontario/): the City of Peterborough's own portal
//    publishes under custom terms of use without a commercial-reuse grant (site-item.json), so it is not used. Used instead:
//    County of Peterborough ArcGIS item d84ead49d8094ec1ae4539c516fb56a0 "Waterbody" (owner GIS_PtboCounty), snippet
//    "Clipped to Peterborough County. Shows the location of waterbodies in Ontario as part of the Ontario Hydro Network
//    (OHN)."; licenseInfo and accessInformation point to the Open Government Licence - Ontario. FeatureServer layer 0,
//    7 query pages wb-0.json ... wb-12000.json, 12,073 rows; spatial reference 2150 / latest 2958, units esriMeters; data
//    last edited 26 June 2026 (UTC). OGL-Ontario page (ogl-ontario.html): "The Information Provider grants you a worldwide,
//    royalty-free, perpetual, non-exclusive licence to use the Information, including for commercial purposes, subject to
//    the terms below."; attribution "Contains information licensed under the Open Government Licence" + dash + "Ontario."
// Our own calculations (lake_units.py, python -I, lake_units.out.txt; profile checks): 12,073 waterbody polygons; types
//  Pond 6,066, Lake 5,644, River 351, Canal 6, Reservoir 5, Beaver Pond 1; 483 with an official name; Little Lake 604,381 m2
//  (60.4 ha, 0.60 km2); Chemong Lake 16,471,699 m2 (16.47 km2); Rice Lake 92,363,066 m2 (92.36 km2); draft conversion fails
//  the 1 km2 = 100 ha check on every lake; the two area columns disagree by more than 1 percent on 4 rows: Irondale River
//  0.988, Burnt River 0.735, Crowe Lake 0.835, Eels Lake 0.958 (Shape__Area / SYSTEM_CALCULATED_AREA). Areas are the file's
//  polygon areas, labelled ours when converted.
// Lesson family: units and unit conversions in AI-written code, caught by an internal consistency check; and two columns
//  that claim to measure the same thing.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const SCRIPT = esc(`# Peterborough County waterbodies: an AI-style unit conversion, and the checks that catch it (our teaching example)
import glob, json

rows = []
for page in sorted(glob.glob("wb-*.json")):
    rows += [f["attributes"] for f in json.load(open(page, encoding="utf-8"))["features"]]

def find(name):
    return [r for r in rows if r["OFFICIAL_NAME_LABEL"] == name and r["WATERBODY_TYPE"] == "Lake"]

# The draft: areas are in square metres, so "divide by 1000 for km2 and by 100 for hectares".
def draft(m2):
    return {"km2": m2 / 1000, "ha": m2 / 100}

# The fix: 1 km2 = 1,000,000 m2 and 1 ha = 10,000 m2.
def fixed(m2):
    return {"km2": m2 / 1_000_000, "ha": m2 / 10_000}

def consistent(a):
    """Human check 1: 1 km2 is exactly 100 ha, whatever the input."""
    return abs(a["ha"] - 100 * a["km2"]) < 1e-6 * max(1, a["ha"])

for name in ("Little Lake", "Chemong Lake", "Rice Lake"):
    lake = max(find(name), key=lambda r: r["SYSTEM_CALCULATED_AREA"])
    m2 = lake["SYSTEM_CALCULATED_AREA"]
    d, f = draft(m2), fixed(m2)
    print(name, "| draft consistent:", consistent(d), "| fixed", round(f["km2"], 2), "km2", round(f["ha"], 1), "ha")

# Human check 2: the file has two area columns. Where do they disagree by more than 1 percent?
odd = [r for r in rows if abs(r["Shape__Area"] - r["SYSTEM_CALCULATED_AREA"]) > 0.01 * r["SYSTEM_CALCULATED_AREA"]]
print("area columns disagree on", len(odd), "of", len(rows), "rows")`);

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'PETERBOROUGH', label: 'Peterborough, Ontario', blurb: 'Vibe coding and AI agents for Peterborough teens and adults, with a lake-area unit check on County of Peterborough waterbody data.' },
  market: CA,
  slug: 'vibe-coding-and-ai-agents-classes-in-peterborough-ontario',
  code: 'vaap',
  accent: '#8A5358',
  accentRationale: 'Peterborough, Ontario: a muted canoe-cedar rose, #8A5358, allocated for row 148 at least 6 RGB units from every site accent and 14 from the other Canada accents; contrast 5.73 on the paper #FBF8F2 (5.39 and 4.93 on the darker tints), above 4.5 on all three',
  pageType: 'city',
  place: {
    name: 'Peterborough',
    eyebrow: 'Peterborough, Ontario',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Ontario' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }, { slug: 'coding-classes-in-ontario', name: 'Ontario' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Ontario', href: '/coding-classes-in-ontario' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Peterborough, Ontario',
  title: 'Vibe Coding and AI Agents Classes in Peterborough, Ontario',
  description: 'Vibe coding and AI agents for Peterborough, Ontario teens and adults: AI tool age rules, Ontario school coding, and a lake-area unit check on County water data.',
  ogDescription: 'An AI-written conversion made Peterborough\'s Little Lake 604 square kilometres. A one-line consistency check caught it. Vibe coding and agents, taught with checks.',
  twitterDescription: 'Vibe coding and AI agents for Peterborough, Ontario teens and adults, live online.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '23 October 2026',
  courseSchema: {
    name: 'Vibe Coding and AI Agents Classes for Peterborough, Ontario Learners',
    description: 'Live online vibe coding for Peterborough teens aged 13 to 17 and AI agent courses for adults, in separate age tracks, where units and conversions in AI-written code are checked before results are used.'
  },

  h1: 'Vibe coding and AI agents classes in Peterborough, Ontario',
  capsuleQ: 'Can a Peterborough, Ontario teen or adult learn AI-assisted coding that holds up?',
  capsule: 'Yes. Modern Age Coders offers live online classes to Peterborough, Ontario: Vibe Coding for Teens for ages 13 to 17, and an adults-only agents course using Codex and Claude Code. Learners study in classes of fifteen to twenty or one to one, and every number an AI computes must come with its unit and pass a consistency check.',
  lead: 'Peterborough in Ontario, on the Otonabee River at the edge of the Kawarthas, is the place this page is about, not the cathedral city in England. Vibe coding is getting an AI model to write code from a plain description; an AI agent goes further, choosing tools and running them on your behalf. A common slip in both is the quiet unit error: code that is right in every line except the one that converts square metres. Here an AI-style draft turns Little Lake, in the heart of the city, into a lake of 604 square kilometres. No test of the output against a known answer was needed to catch it, only a rule any learner can write: one square kilometre must always equal one hundred hectares. We also set out which AI tools a teenager may use, what Ontario schools already ask of students, and how class times shift with Ontario\'s clocks.',
  wa: 'Hello Modern Age Coders, I am in Peterborough, Ontario and would like a free first class in vibe coding or AI agents.',

  picks: {
    eyebrow: 'Course picks for Peterborough',
    h2: 'Four courses for Peterborough teens and adults',
    intro: 'The AI tools a person may use depend on their age, so our courses are split the same way. The free lesson sets the level.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python, web and AI projects built with assistants teens are allowed to use, where every number printed must carry a unit and survive a check.' },
      { course: 'python-complete-masterclass-teens', band: 'Teens, starting', note: 'Arithmetic, functions and data in hand-written Python, so a teen can see exactly which line converts a unit, and whether it is right.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Teens, data', note: 'Real public files, cleaned and summarised with care for units and definitions, then the first models built on top.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', band: 'Adults only, 18+', note: 'Coding agents on real repositories for working adults. Claude Code is an 18-and-over product under Anthropic\'s terms, so teens cannot join.' }
    ]
  },

  sections: [
    {
      id: 'lakes', tint: 'deep', eyebrow: 'Peterborough data project',
      h2: 'How big is Little Lake? 604 square kilometres, says the draft',
      intro: 'The County of Peterborough republishes the Ontario Hydro Network\'s waterbody layer, clipped to the county, as open data: 12,073 lakes, ponds and river sections with their areas. We asked an AI-style draft to convert three lake areas, then checked it. The code, conversions and counts are ours, from the layer as downloaded on 23 October 2026.',
      body: [
        { kind: 'table', caption: 'Three lakes: area in the file and our corrected conversion (our run, 23 October 2026; the file\'s areas are in square metres, as the layer\'s coordinates are)', head: ['Lake', 'Area in the file (m&sup2;)', 'Draft says', 'Corrected (ours)'], rows: [
          ['Little Lake, in the city', '604,381', '604.4 km&sup2;', '0.60 km&sup2;, 60.4 ha'],
          ['Chemong Lake', '16,471,699', '16,471.7 km&sup2;', '16.47 km&sup2;, 1,647.2 ha'],
          ['Rice Lake', '92,363,066', '92,363.1 km&sup2;', '92.36 km&sup2;, 9,236.3 ha']
        ] },
        { kind: 'p', text: '<b>The draft\'s mistake</b> is a classic: it divides square metres by 1,000 to get square kilometres and by 100 to get hectares, treating an area like a length. The right factors are 1,000,000 and 10,000. Nothing crashes, and the numbers even look precise. A learner who did not already know roughly how big Little Lake is would have no reason to doubt 604.4.' },
        { kind: 'p', text: 'The program and its two checks:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Check 1: units agree with each other', p: 'One square kilometre is exactly one hundred hectares. The draft\'s two outputs break that rule for every lake, so the check fails without anyone knowing the true area. Internal consistency is the cheapest test there is.' },
          { h3: 'Check 2: two columns, one quantity', p: 'The layer carries both Shape__Area and SYSTEM_CALCULATED_AREA. They agree on all but 4 of 12,073 rows. On Crowe Lake the first is 0.835 of the second, and on Burnt River 0.735.' },
          { h3: 'What we think, and what we know', p: 'Our guess is that those 4 polygons were cut at the county boundary, which would change one area but not the province\'s original figure. The snippet does say the layer is clipped to the county. We label this a guess and choose the column per question.' }
        ] },
        { kind: 'callout', h3: 'Names are rarer than water', p: 'Only 483 of the 12,073 polygons carry an official name, and most are ponds (6,066) or lakes (5,644). An agent asked to list Peterborough County lakes by name will miss thousands of unnamed ones, and the Otonabee River alone is split into 42 named polygons. Counting before summarising is the habit that keeps an answer honest.' },
        { kind: 'p', text: 'This is county and provincial data, not the City of Peterborough\'s: the City\'s own portal terms allow use of unmodified datasets only, and its map items ask commercial users to arrange a paid agreement, so we chose the County layer, which covers the city\'s waters too. Used under the Open Government Licence - Ontario, which grants use including for commercial purposes (<a class="cg-inline-link" href="https://www.ontario.ca/page/open-government-licence-ontario">licence</a>, <a class="cg-inline-link" href="https://www.arcgis.com/home/item.html?id=d84ead49d8094ec1ae4539c516fb56a0">County of Peterborough layer</a>). Contains information licensed under the Open Government Licence - Ontario. Neither the County nor the province endorses this page.' }
      ]
    },
    {
      id: 'units', tint: '', eyebrow: 'What we teach',
      h2: 'Units are part of the answer: how we teach AI-assisted calculation',
      intro: 'An AI model is fluent with arithmetic and careless with meaning. These are the habits Peterborough learners build so that a number from AI-written code is safe to use.',
      body: [
        { kind: 'table', caption: 'Our habits for numbers in AI-written code (ours), beside the Ontario idea each one develops', head: ['Habit', 'In practice', 'Ontario link'], rows: [
          ['Name the unit in the variable', 'area_m2, not area', 'MTH1W: coding used to make sense of the mathematics'],
          ['Write an invariant', 'ha == 100 * km2 must hold for every row', 'Grade 4 coding: nested events, loops inside loops over the data'],
          ['Read before you edit', 'Find the conversion line in the AI\'s code and say what it does', 'Grade 1 coding: read and alter existing code and describe the effect'],
          ['Compare two sources', 'If two columns should agree, measure where they do not', 'ICS4C: object-oriented programs that keep data and rules together']
        ] },
        { kind: 'p', text: 'Agents make units more dangerous, because an agent passes numbers from one tool to the next without anyone reading them. Anthropic has described changing a tool so that it always required absolute file paths, after which its model stopped making a whole class of path mistakes. Units deserve the same treatment: in the adult course, Peterborough learners write tools that return the unit with every number, so a model never has to guess.' },
        { kind: 'p', text: 'Underneath sits the owner\'s promise, put in our own words for this page: learners are taught to think through a problem and solve it, not to copy an answer, and a number from an AI is still just an answer until it has been reasoned about. A Grade 9 student and an engineer in Peterborough both finish this exercise by stating the area of Little Lake with its unit, and explaining why 604.4 could not be right.' }
      ]
    },
    {
      id: 'tools', tint: 'tint', eyebrow: 'Age rules',
      h2: 'The AI tools a Peterborough teenager may use',
      intro: 'Each AI company sets its own age floor. We read their current terms on 22 October 2026; the course a learner joins follows from them.',
      body: [
        { kind: 'table', caption: 'Age floors for AI coding tools (companies\' own terms, read 22 October 2026)', head: ['Tool', 'Who may use it', 'How our classes apply it'], rows: [
          ['GitHub Copilot', 'Anyone 13 or older with a GitHub account; free for verified students', 'Used by teens and adults'],
          ['ChatGPT and other OpenAI services', 'From 13; under 18 only with a parent\'s or guardian\'s permission', 'Teens need a parent\'s yes first'],
          ['Claude and Claude Code', '18 or older', 'Adult course only'],
          ['Any AI help during the CCC', 'Nobody: the contest bans generative AI', 'Contest practice is assistant-free']
        ] },
        { kind: 'p', text: 'In practice this means a Peterborough teen is never asked to sign up for something their age excludes, and a parent is asked before any lesson that would use an OpenAI tool. Adults work with agents on a project in Git, where every change is reviewed as a diff and can be reverted. The rules belong to the companies, so we read them again before each intake.' }
      ]
    },
    {
      id: 'school', tint: '', eyebrow: 'Ontario school context',
      h2: 'Coding and contests for a Peterborough student',
      intro: 'Peterborough\'s publicly funded schools teach to the provincial curriculum. Facts here were checked against the province\'s curriculum website, EQAO and CEMC as they stood on 22 October 2026, and paraphrases are ours.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'From Grade 1', p: 'Ontario math has children read and alter existing code from Grade 1 and describe how the changes affect the outcome. By Grade 4 the code includes nested events, which is a loop inside a loop.' },
          { h3: 'Grade 9 math', p: 'The course description of MTH1W says students use mathematical processes, modelling and coding to make sense of the mathematics they are learning. Units and conversions are exactly that kind of sense-making.' },
          { h3: 'Grade 12 options', p: 'ICS4C, the college-stream Grade 12 course, teaches object-oriented programming; ICS4U is the university-stream course. We support both and do not grant Ontario credits.' }
        ] },
        { kind: 'table', mt: true, caption: 'Peterborough students\' calendar for the 2026 to 2027 year, as published by EQAO and CEMC', head: ['What', 'Details', 'When'], rows: [
          ['EQAO Grade 9 Assessment of Mathematics', 'Online, two sessions totalling 54 questions, multi-stage adaptive', '12 January to 5 February 2027'],
          ['Canadian Computing Competition', 'Junior or Senior by skill; written at school', 'Wednesday 17 February 2027'],
          ['Pascal, Cayley and Fermat (Grades 9, 10, 11)', '25 multiple-choice questions in 60 minutes', '23 and 24 February 2027']
        ] },
        { kind: 'p', text: 'CEMC stresses that its contests are not tests or exams, and that entry goes through a school. Unit sense is useful in all three math contests, and in the CCC, where a wrong conversion gives a wrong answer just as surely as a wrong loop. Our <a class="cg-inline-link" href="/mth1w-grade-9-math-explained">MTH1W explainer</a> and <a class="cg-inline-link" href="/cemc-waterloo-contests-preparation">Waterloo contests page</a> go further.' }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Class times',
      h2: 'Peterborough time, India time and the 1 November change',
      intro: 'Peterborough runs on Eastern time: clocks fall back on Sunday 1 November 2026 and spring forward on Sunday 14 March 2027. India, where our teachers are based, keeps one time all year.',
      body: [
        { kind: 'table', caption: 'A Thursday 6:30 pm class in Peterborough, seen from India (tzdb 2026e; our conversion)', head: ['Period', 'Peterborough', 'India'], rows: [
          ['Up to 1 November 2026', '6:30 pm, UTC-4', '4:00 am, Friday'],
          ['1 November 2026 to 14 March 2027', '6:30 pm, UTC-5', '5:00 am, Friday'],
          ['From 14 March 2027', '6:30 pm, UTC-4', '4:00 am, Friday']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Local time is fixed', p: 'A Peterborough class stays at its local time through both changes; our teachers shift instead. We resend each timetable in Eastern time the week before.' },
          { h3: '705 and friends', p: 'Numbers on the 705, 249 and 683 area codes work in the form. Enter the ten digits only.' },
          { h3: 'Time zones are units too', p: 'Converting a class time is a unit conversion with a rule that changes twice a year. Learners who code it with a fixed offset see it fail on 1 November 2026, which is the lesson.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From reading code to agents that report their units',
    intro: 'Bands are approximate; the first lesson decides each Peterborough learner\'s starting point.',
    cols: [
      { band: 'Ages 13 and 14', h3: 'Code you can read', p: 'Hand-written Python with numbers, functions and files, and names that carry units.', courses: ['python-complete-masterclass-teens', 'git-github-version-control-course-for-teens'] },
      { band: 'Ages 14 to 17', h3: 'Assisted and checked', p: 'Vibe coding with permitted assistants, with invariants on every calculation.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 and up', h3: 'AI in projects', p: 'Generative AI and automation for students and career changers.', courses: ['complete-generative-ai-masterclass-college', 'python-ai-automation-masterclass-college'] },
      { band: 'Working adults', h3: 'Agents with typed tools', p: 'Coding agents on real repositories, with tools that return units and checks on their output. Adults only.', courses: ['codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', 'vibe-coding-for-college-fullstack-ai-dsa-career-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why learn to code in Peterborough if an AI can do the arithmetic?',
    intro: 'Because the AI did the arithmetic perfectly and the answer was still wrong by a factor of a thousand.',
    p1: 'Every division in the Little Lake draft was computed correctly. The error was in choosing what to divide by, which is a question about meaning, not arithmetic. A learner who has converted areas by hand knows that squaring the unit squares the factor; that knowledge is what makes the consistency check obvious to write.',
    p2: 'So our classes keep both skills: the code and the sense behind it. Teens use assistants their age allows, adults use agents that act for them, and both state each result with its unit and explain, without help, why it is believable.',
    closer: 'A number without a unit is not an answer; an AI will hand you plenty of those.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online for Peterborough and the Kawarthas',
    intro: 'Lessons happen at home, with a live teacher on video who follows the learner\'s screen and asks for the reason behind each step.',
    cells: [
      { h3: 'Times to suit you', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Shared or private', p: 'Shared classes take fifteen to twenty learners of the same age band and level; private lessons give one learner the teacher\'s full attention.' },
      { h3: 'Teen and adult tracks', p: 'Teens and adults never share a class, because the AI companies allow them different tools.' },
      { h3: 'Around the region', p: 'Learners from Lakefield, Selwyn and Cobourg join the same online classes on the same Eastern clock.' },
      { h3: 'What to have', p: 'A computer, a microphone and an internet connection steady enough for video. The teen course needs no paid AI subscription.' },
      { h3: 'Start with a free lesson', p: 'The first lesson is free and taught in full, and it ends with a placement. We do not take card details.' }
    ],
    spec: { title: 'No Peterborough office', p: 'We have no premises in Peterborough and claim none. Teaching is live and online from India, and we are not connected with the City or County of Peterborough, the Ontario Ministry of Education, EQAO or CEMC.' }
  },

  fees: {
    h2: 'Fees for Peterborough learners',
    intro: 'Three items, each displayed in your currency by the price anchor.',
    first: 'A free first lesson, taught in full, ending with a placement.',
    group: 'The monthly fee for a shared class of fifteen to twenty, eight live lessons a month.',
    private: 'The monthly fee for private lessons with your own teacher.',
    closer: 'Peterborough learners pay the same monthly fee as learners elsewhere in Canada. You are billed only after the free lesson, once you have a course and a time.'
  },

  reviewsH2: 'Google reviews from students and families',

  book: {
    h2: 'Tell us about the Peterborough learner',
    intro: 'The first lesson opens with an AI-written calculation that gets its units wrong. Finding the faulty line and writing the check that exposes it tells the teacher which level and age track suit you.',
    success: 'Thank you. The team will be in touch soon about a first class for Peterborough.'
  },

  faq: {
    h2: 'Vibe coding and AI agents in Peterborough, Ontario: questions',
    intro: 'What Peterborough families and adults ask us most often.',
    items: [
      { q: 'Are your vibe coding classes available in Peterborough, Ontario?', a: 'Yes, live online with a teacher. Peterborough teens take the teen course and adults take separate courses, all from home. We have no local classroom.' },
      { q: 'Is this Peterborough in Ontario or in England?', a: 'Ontario. Times are given in Eastern time, and the school and contest details are Ontario and Canadian ones.' },
      { q: 'What is vibe coding, in one line?', a: 'Describing the program you want to an AI model and letting it draft the code, which our classes then teach you to test, check and understand.' },
      { q: 'Can a Peterborough teen use Claude Code?', a: 'Not in our classes. Anthropic\'s terms require users to be 18 or older, so Claude and Claude Code are confined to the adult course.' },
      { q: 'Must my teen sign up for ChatGPT?', a: 'No. OpenAI\'s terms require a parent\'s or guardian\'s permission under 18, so it is used only if you agree; GitHub Copilot, free for verified students, works instead.' },
      { q: 'Can adults in Peterborough learn to build AI agents?', a: 'Yes, online. The agents course with Codex and Claude Code is for adults only, on real Git repositories, and learners build tools that return units with every number.' },
      { q: 'Why did the draft say Little Lake was 604 square kilometres?', a: 'It divided square metres by 1,000 instead of 1,000,000. The file gives 604,381 square metres, which is about 60.4 hectares. A check that 1 square kilometre equals 100 hectares exposed the mistake.' },
      { q: 'Do your classes count toward an Ontario credit?', a: 'No. We do not grant Ontario credits. ICS4C, ICS4U and every other credit are earned at school; we teach alongside.' },
      { q: 'May students use AI in the CCC or the Waterloo math contests?', a: 'The CCC rules ban generative AI outright, including assistants in editors, and CEMC lists its 2027 sitting for Wednesday 17 February 2027. All CEMC contests are entered through a school.' },
      { q: 'What lesson times are possible from Peterborough?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Schedules are written in Eastern time.' }
    ]
  },

  next: {
    eyebrow: 'More for Ontario',
    h2: 'Other pages for Peterborough and Ontario learners',
    html: 'For all of Canada, read <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-canada">vibe coding and AI agents classes in Canada</a>; for the province, <a class="cg-inline-link" href="/coding-classes-in-ontario">coding classes in Ontario</a>. Students may want <a class="cg-inline-link" href="/python-classes-in-canada">Python classes in Canada</a>, and adults <a class="cg-inline-link" href="/coding-classes-for-adults-in-canada">coding classes for adults in Canada</a>.',
    waLabel: 'Ask on WhatsApp'
  },

  footerHeading: 'Peterborough and Ontario',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/vibe-coding-and-ai-agents-classes-in-canada', label: 'Vibe coding in Canada' },
    { href: '/mth1w-grade-9-math-explained', label: 'MTH1W explained' },
    { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo contests' }
  ],

  personalityCss: `
.cg-root.cg-vaap .cg-hero h1 { font-weight: 700; letter-spacing: -0.015em; line-height: 1.08; }
.cg-root.cg-vaap .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 0.9rem; }
.cg-root.cg-vaap .cg-eyebrow { letter-spacing: 0.09em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-vaap .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.01em; }
.cg-root.cg-vaap .cg-table caption { text-align: left; font-style: italic; }
.cg-root.cg-vaap .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-vaap #lakes code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.5; padding: 0.9rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-vaap .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.75rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario curriculum service, read 22 October 2026: Grade 1 C3.2, Grade 4 C3.1, MTH1W course description, ICS4C; EQAO Grade 9 format and window; CEMC CCC 2027, Pascal/Cayley/Fermat 2027 dates and format, "not tests or exams", school entry; CCC rules on AI; Anthropic, OpenAI and GitHub age rules; Anthropic, Building effective agents (absolute file paths, paraphrased). Peterborough area codes and Eastern offsets from facts-geo.md.',
    localProject: 'County of Peterborough Waterbody layer (Ontario Hydro Network clipped to the county; Open Government Licence - Ontario), 7 query pages downloaded 23 October 2026, 12,073 polygons in metres: our lake_units.py (python -I) shows an AI-style conversion dividing by 1,000 and 100 failing the 1 km2 = 100 ha check for Little Lake (604,381 m2), Chemong Lake and Rice Lake, the corrected figures, and 4 rows where the two area columns disagree by more than 1 percent (Crowe Lake 0.835, Burnt River 0.735). 483 named polygons. Labelled as ours. The City of Peterborough portal was not used (no commercial-reuse grant). Lesson family: units and consistency checks.',
    requiredMentions: [
      'Little Lake, in the city',
      '604,381',
      'Check 1: units agree with each other',
      'Crowe Lake the first is 0.835',
      'Only 483 of the 12,073 polygons',
      'Names are rarer than water',
      'not the cathedral city in England',
      '705 and friends',
      'Lakefield, Selwyn and Cobourg',
      'absolute file paths'
    ],
    sources: [
      { claim: 'County of Peterborough Waterbody item (OHN clipped to the county) and its licence pointer.', url: 'https://www.arcgis.com/home/item.html?id=d84ead49d8094ec1ae4539c516fb56a0' },
      { claim: 'Waterbody FeatureServer layer used.', url: 'https://services3.arcgis.com/08bk1ZSzqef9JX5q/arcgis/rest/services/Waterbody/FeatureServer/0' },
      { claim: 'Open Government Licence - Ontario: commercial use, attribution.', url: 'https://www.ontario.ca/page/open-government-licence-ontario' },
      { claim: 'Ontario curriculum: elementary coding, MTH1W, ICS4C.', url: 'https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics' },
      { claim: 'EQAO Grade 9 mathematics format and window.', url: 'https://www.eqao.com/the-assessments/grade-9-math/' },
      { claim: 'CEMC Pascal, Cayley, Fermat and CCC 2026-27.', url: 'https://cemc.uwaterloo.ca/contests/pcf' },
      { claim: 'Anthropic consumer terms: 18+.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'OpenAI terms: parent or guardian permission under 18.', url: 'https://openai.com/policies/terms-of-use/' },
      { claim: 'Anthropic, Building effective agents: tool design appendix.', url: 'https://www.anthropic.com/research/building-effective-agents' }
    ],
    rejectedClaims: [
      'City of Peterborough datasets: not used; the City portal terms do not grant commercial reuse.',
      'Why the two area columns differ on 4 rows: our guess (clipping at the county boundary) is labelled as a guess.',
      'Any total water area for the county: not computed or printed.',
      'Any Peterborough population: not used.',
      'That our classes earn Ontario credits: refused.',
      'Recommending Claude or Claude Code to anyone under 18: refused.',
      'Any affiliation with the City or County of Peterborough, the province, EQAO or CEMC.'
    ]
  }
};
