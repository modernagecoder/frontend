'use strict';
// Orange (cg- regional city page, Australia cluster Phase 7, row 162). Shaped page: vibe coding and AI agents
// for teenagers and adults. Spine: is the smooth curve or the straight line better at guessing the height of
// the ground between contour lines on the way up Gaanha Bula / Mount Canobolas? Data: NSW Spatial Services,
// NSW Elevation and Depth Theme, Contour layer (MapServer layer 2), extracted 8 October 2026 along a straight
// line from the ORANGE place point (149.0963, -33.2831) to the GAANHA BULA / MOUNT CANOBOLAS physiography
// point, ending at the 1,397 m summit spot height; 12,576.5 m, 120 contour crossings (868 to 1,380 m).
// Our code (scratchpad au/r4/orn_profile.py, orn_spline.py): leave-one-out over 119 interior crossings,
// linear MAE 2.05 m (max 12.06), natural cubic spline MAE 2.04 m (max 15.98); spline closer on 57, linear
// closer on 62; town section under 3.6 km (56 points, 2 m contours) linear 0.74 vs spline 1.24; mountain
// beyond 9 km (34 points) linear 3.35 vs spline 3.14; keeping every other crossing and predicting the rest,
// linear 1.98 vs spline 2.45; spline peaks at 958.2 m near 2.70 km between consecutive crossings of 904 m
// (2,603 m) and 906 m (2,874 m), 52 m above the higher contour. Lesson family: natural cubic spline against
// linear interpolation of a contour profile; screened 0 content hits 8 October 2026; claimed by AU-R4.
// Licence: Spatial Services applies CC BY 4.0, attribution "(c) Spatial Services", extraction date marked.
// Place facts: ABS Census 2021 QuickStats SUA 1027 Orange; NSW place names inside the SUA from NSW Spatial
// Services places points; NSW term dates; IANA tz 2026e Australia/Sydney (rule AN). Excluded by the cluster
// rules: income, rent, ancestry, religion, health.

module.exports = {
  clusterName: 'Australia',
  hub: { group: 'city', tag: 'ORANGE', label: 'Orange', blurb: 'Orange in the NSW Central Tablelands, a contour profile up Gaanha Bula / Mount Canobolas, and when a smooth curve invents a hill.' },
  market: { name: 'Australia', iso: 'AU', dial: '+61', lang: 'en-AU', locale: 'en_AU', geoRegion: 'AU', brandTag: 'AU', phoneLabel: 'Australian mobile number', phonePlaceholder: '491 570 156', gradeLabel: 'Year level or age', minDigits: 9, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-orange',
  code: 'orn',
  accent: '#915256',
  accentRationale: 'Orange: a muted apple-skin red (HSV saturation 0.43, value 0.57, hue 356), picked by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims file, with 4.8:1 or better on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Orange',
    eyebrow: 'Orange, New South Wales, Australia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [{ slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' }, { slug: 'coding-classes-in-australia', name: 'Australia' }],
  nav: [
    { label: 'New South Wales', href: '/coding-and-ai-classes-in-new-south-wales' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Orange, New South Wales',
  title: 'Vibe Coding and AI Agents Classes in Orange | Live Online',
  description: 'Vibe coding and AI agents classes for Orange teens and adults: build with AI helpers, then test what they write on real Central Tablelands data. First lesson free.',
  ogDescription: 'Orange vibe coding and AI agents classes, with a project that tests AI-written code on the contour profile up Gaanha Bula / Mount Canobolas.',
  twitterDescription: 'Vibe coding and AI agents classes for Orange teens and adults, live online, first lesson free.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '8 October 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Orange Learners',
    description: 'Building software with AI coding assistants and agents, plus the Python and maths needed to check their work, taught live online to teenagers and adults in Orange, NSW.'
  },

  h1: 'Vibe coding and AI agents classes in Orange',
  capsuleQ: 'What are the best vibe coding and AI agents classes in Orange?',
  capsule: 'For Orange teenagers and adults, classes where you build real programs by describing them to AI assistants, then learn enough Python and maths to tell when the assistant got it wrong. Orange had 41,920 residents at the 2021 Census. Lessons are live on video with a teacher, in small groups or one to one, and the first lesson is free.',
  lead: 'Ask an AI coding assistant to fill in the heights between contour lines and it will very often reach for a cubic spline, because a smooth curve looks more professional than straight lines. We tested that instinct on the road out of Orange. NSW Spatial Services publishes contour lines for the whole state, so we drew a line from the centre of town to the summit of Gaanha Bula / Mount Canobolas, recorded every contour it crosses, then hid one point at a time and asked each method to guess it. The smooth curve did not win. In one stretch it invented a hill 52 metres tall that the contours prove cannot exist.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents class for a learner in Orange.',

  picks: {
    eyebrow: 'Courses for Orange',
    h2: 'Where Orange learners start with AI coding',
    intro: 'Each course leads into building with AI helpers and checking their output. The free trial decides which one fits, with no card needed to book.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Web and Python projects built with AI assistants, with every generated line read and tested before it stays.' },
      { course: 'codex-and-claude-code-ai-coding-agents-course-for-teens', band: 'Ages 13 to 17', note: 'Working with coding agents that plan, edit and run code, and setting the checks that keep them honest.' },
      { course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', band: 'University and adult', note: 'Full-stack apps built alongside AI, plus the data structures that let you judge what it produces.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Adults', note: 'How language models and agents work inside, from prompts and tools to evaluation.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Orange in the 2021 Census',
      h2: 'A young, house-lined city on the Central Tablelands',
      intro: 'Census figures for the Orange Significant Urban Area, the statistics bureau\'s boundary for the built-up city.',
      body: [
        { kind: 'table', caption: 'Orange at the 2021 Census', head: ['Item', 'Orange'], rows: [
          ['People', '41,920'],
          ['Median age', '37 years'],
          ['Families', '10,728'],
          ['Private dwellings', '18,008'],
          ['Average household', '2.5 people']
        ] },
        { kind: 'table', mt: true, caption: 'Orange set beside New South Wales and Australia', head: ['Census measure', 'Orange', 'NSW', 'Australia'], rows: [
          ['Separate houses, share of occupied homes', '13,404 (85.8%)', '65.6%', '72.3%'],
          ['Flats or apartments, share of occupied homes', '559 (3.6%)', '21.7%', '14.2%'],
          ['Children aged 10 to 14', '3,102 (7.4%)', '6.2%', '6.2%'],
          ['Children aged 5 to 9', '3,028 (7.2%)', '6.2%', '6.2%'],
          ['Professionals among employed residents', '4,453 (22.7%)', '25.8%', '24.0%'],
          ['Bachelor degree or higher, aged 15 and over', '6,936 (21.1%)', '27.8%', '26.3%']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Lots of school-age children', p: '7.4% of residents are aged 10 to 14, against 6.2% for both New South Wales and Australia.' },
          { h3: 'Hardly any flats', p: 'Only 3.6% of occupied homes are flats or apartments; across NSW the figure is 21.7%.' },
          { h3: 'Named places inside', p: 'NSW place names within the urban area include Bletchington, Bloomfield, Calare, Glenroi and Narrambla.' }
        ] },
        { kind: 'p', text: 'The bureau perturbs small counts slightly to protect privacy, so rows may not add exactly to totals. Every figure above is the bureau\'s own, quoted as printed.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Straight lines or a smooth curve up Mount Canobolas?',
      intro: 'Between two contour lines the true ground height is unknown. Two classic ways to estimate it, tested honestly.',
      body: [
        { kind: 'table', caption: 'The Orange to summit profile (our measurements from the NSW contour layer, extracted 8 October 2026)', head: ['Measure', 'Value'], rows: [
          ['Straight-line length, town centre point to summit', '12,576.5 m'],
          ['Contour crossings along the line', '120'],
          ['Lowest and highest contour crossed', '868 m and 1,380 m'],
          ['Summit spot height', '1,397 m'],
          ['Contour spacing in town', '2 m'],
          ['Contour spacing on the mountain', '10 m and 20 m']
        ] },
        { kind: 'table', mt: true, caption: 'Average error when each hidden crossing is guessed from the rest (our test)', head: ['Test', 'Straight lines', 'Natural cubic spline'], rows: [
          ['All 119 interior crossings', '2.05 m', '2.04 m'],
          ['Town section, first 3.6 km (56 crossings)', '0.74 m', '1.24 m'],
          ['Mountain section, beyond 9 km (34 crossings)', '3.35 m', '3.14 m'],
          ['Keep every other crossing, guess the rest', '1.98 m', '2.45 m'],
          ['Worst single miss', '12.06 m', '15.98 m']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Leave one out', p: 'Hide one crossing, fit each method to the other 120 points, and record how far its guess lands from the hidden contour height.' },
          { h3: 'Repeat 119 times', p: 'Do it for every interior crossing. The spline is closer 57 times and the straight lines 62 times.' },
          { h3: 'Split by terrain', p: 'On gentle town slopes the straight lines win clearly. On the steeper mountain the curve edges ahead.' }
        ] },
        { kind: 'callout', h3: 'A hill that cannot exist', p: 'Between 2,603 m and 2,874 m along the line, the profile crosses the 904 m contour and then the 906 m contour, with no contour in between. The ground there must stay between those heights. The spline, fitted through every point, rises to 958 m in that gap. It is smooth, confident and 52 metres wrong.' },
        { kind: 'p', text: 'The line runs straight across private land and the reserve, so it is not a route to walk or drive. Elevations come from contours and one spot height in the published data; every distance, error and count is ours, from Spatial Services data, (c) Spatial Services, used under its Creative Commons Attribution 4.0 licence.' }
      ]
    },
    {
      id: 'method', tint: 'tint', eyebrow: 'Why it happens',
      h2: 'What the spline gets wrong on flat ground',
      intro: 'Knowing why the error appears is what turns a lucky prompt into a skill.',
      body: [
        { kind: 'p', text: 'A natural cubic spline joins the points with curves that agree in slope and bend wherever they meet. That rule is lovely on a steady climb. On flat ground with a long gap between crossings, though, the curve has to carry the bend from the steeper bits on either side across the gap, and it bulges. Straight-line interpolation has no memory of neighbouring slopes, so it can never go above the higher contour or below the lower one.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Teenagers', p: 'Plot the 121 points, draw both methods, and spot the bulge by eye before writing a Python test that catches it automatically.' },
          { h3: 'University students', p: 'Derive the spline\'s tridiagonal system, then compare with monotone methods that are designed never to overshoot.' },
          { h3: 'Adults', p: 'Learn to ask an AI assistant for the method and its failure cases, then write the guard that checks every answer against the data.' }
        ] },
        { kind: 'spec', title: 'The guard is one line', p: 'Any estimate between two neighbouring crossings must lie between their two heights. That single check would have flagged the 958 m answer instantly, whatever produced it.' },
        { kind: 'p', text: 'Modern Age Coders is not linked to Spatial Services, the NSW Government, Orange City Council or the statistics bureau. Census numbers are the bureau\'s; the profile, errors and the overshoot figure all come from our own code.' }
      ]
    },
    {
      id: 'city', tint: '', eyebrow: 'Planning around Orange',
      h2: 'NSW school terms in 2027 and the clocks',
      intro: 'Dates that help when you pick a weekly lesson time.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Term 2, 2027', p: 'Tuesday 27 April to Friday 2 July, according to the NSW Department of Education calendar, which counts staff development days inside the term.' },
          { h3: 'Term 3, 2027', p: 'Monday 19 July to Friday 24 September, followed by spring holidays from Monday 27 September to Friday 8 October.' },
          { h3: 'Term 4, 2027', p: 'Monday 11 October to Monday 20 December. NSW daylight saving runs from the first Sunday in October to the first Sunday in April.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From plotting points to directing an agent',
    intro: 'Ages are only a guide; the trial lesson shows where a learner really starts.',
    cols: [
      { band: 'Ages 13 to 14', h3: 'Code you can see', p: 'Python that draws graphs, joins points with lines and asks why a curve behaves the way it does.', courses: ['python-complete-masterclass-teens', 'maths-through-coding'] },
      { band: 'Ages 15 to 18', h3: 'Building with AI', p: 'Projects written alongside an AI assistant, with tests the learner designs before trusting any output.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'codex-and-claude-code-ai-coding-agents-course-for-teens'] },
      { band: 'University', h3: 'Agents with tools', p: 'Giving an agent functions to call, such as a height lookup, and evaluating its answers against known data.', courses: ['vibe-coding-for-college-fullstack-ai-dsa-career-course', 'complete-generative-ai-masterclass-college'] },
      { band: 'Adults', h3: 'Numbers you can defend', p: 'Interpolation, error measures and clear write-ups for work that someone else will rely on.', courses: ['college-mathematics-complete-masterclass', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Vibe coding and agents',
    h2: 'If an AI agent can write the interpolation, why should an Orange learner understand it?',
    intro: 'Because the agent picks the method that looks right, not the one that is right for your data, and only someone who understands the method can see the difference.',
    p1: 'Vibe coding means describing what you want and letting an AI assistant write the code. It is a real way to build things fast, and we teach it. An agent goes one step further: it decides which tools to run. Give an agent a contour profile and ask for the height at 2.7 km, and it may well call a spline and report 958 m with total confidence. Nothing in the reply warns you.',
    p2: 'Our Orange learners vibe-code the profile tool, then write the checks: hide a point and measure the miss, confirm every estimate sits between its neighbouring contours, compare methods by terrain. Those checks become part of the agent\'s toolkit, so the next answer is verified before anyone sees it.',
    closer: 'AI makes writing code cheap; knowing which answer to trust is the skill that stays valuable.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Orange lessons, delivered online',
    intro: 'Everything happens on a video call, from anywhere in the Central West.',
    cells: [
      { h3: 'At your desk', p: 'Learners join from home on a laptop or desktop, with no trip into town after school.' },
      { h3: 'NSW year levels', p: 'Teachers know NSW stages and year levels and plan around the four NSW terms. Lessons are in English.' },
      { h3: 'A useful trial', p: 'The free first lesson teaches something real and ends with a recommended course and weekly slot.' },
      { h3: 'Groups', p: 'Fifteen to twenty learners at one level, gathered from Orange and other places so the group stays the right size.' },
      { h3: 'Steady rhythm', p: 'Two live lessons a week, roughly eight a month, at a time agreed once the trial is done.' },
      { h3: 'Teachers in India', p: 'Orange is four and a half hours ahead of India time in winter and five and a half hours ahead during daylight saving.' }
    ],
    spec: { title: 'Quoted in Orange time', p: 'Lesson times are always given in Orange time, so the clock changes in October and April are handled on our side.' }
  },

  fees: {
    h2: 'Fees for Orange learners',
    intro: 'Pricing is the same everywhere in Australia, and short.',
    first: 'A free first lesson, followed by a suggested level, course and lesson time.',
    group: 'One month of group lessons, usually eight, with fifteen to twenty learners at the same stage.',
    private: 'A month of one-to-one lessons, about eight, with a teacher of your own.',
    closer: 'Fees outside India are charged in US dollars. You pay nothing until after the trial, once a course and weekly time are agreed; holidays, missed lessons and moving between group and private are all explained on the pricing page.'
  },

  reviewsH2: 'What our families wrote on Google',

  book: {
    h2: 'Book a free vibe coding or AI agents lesson',
    intro: 'Share the learner\'s age and what they would like to build. A teenager might start by vibe-coding a small game; an adult might begin with the Mount Canobolas profile and an agent that answers questions about it.',
    success: 'Thank you. We will be in touch shortly to arrange an Orange lesson.'
  },

  faq: {
    h2: 'Orange vibe coding questions',
    intro: 'What people in Orange most often ask before booking.',
    items: [
      { q: 'What is vibe coding?', a: 'Vibe coding is building software by describing what you want to an AI coding assistant and letting it write the code, then running, testing and refining the result.' },
      { q: 'What is an AI agent?', a: 'An AI agent is a program built around a language model that can choose and run tools, such as code, searches or calculators, in several steps to complete a task.' },
      { q: 'What does the Orange project find?', a: 'Guessing hidden heights on the 12.6 km profile from Orange to the Gaanha Bula / Mount Canobolas summit, straight lines and a natural cubic spline average about 2 m of error, but straight lines win on the gentle town slopes and the spline once invents a rise to 958 m where the contours allow only 904 to 906 m.' },
      { q: 'How many people live in Orange?', a: 'The Orange urban area had 41,920 people at the 2021 Census, with a median age of 37.' },
      { q: 'Do you help with NSW senior computing and maths?', a: 'Yes, with the programming and maths behind senior NSW subjects, planned around NSW terms. Any assessed school work remains the student\'s own.' },
      { q: 'What time are lessons for Orange learners?', a: 'Weekday afternoons after school and Saturday mornings are typical, fixed at the trial and always quoted in Orange time.' },
      { q: 'Can primary school children join?', a: 'Yes. Live classes start at age six, with Scratch and simple game projects; the vibe coding and agents work suits teenagers and adults.' },
      { q: 'Is there a Modern Age Coders centre in Orange?', a: 'No. We do not have premises in Australia and do not claim any. Classes are live online, learners need a computer with sound and a reliable connection, and our listed phone number is in India.', boiler: true },
      { q: 'How much do Orange classes cost?', a: 'The first lesson is free. Then a group place is USD 100 a month for two live lessons a week, about eight a month, in groups of fifteen to twenty, or USD 150 a month for one-to-one lessons. Everything is agreed before you pay.', boiler: true },
      { q: 'How large are the groups?', a: 'Each group has fifteen to twenty learners, matched by level and goals rather than age or location. If no group time suits, one-to-one lessons are offered.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Australia',
    h2: 'Further reading for the Central West',
    html: 'Start with <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">coding and AI classes in New South Wales</a>. Senior students can look at <a class="cg-inline-link" href="/hsc-software-engineering-help">HSC Software Engineering help</a>, and anyone using AI helpers should read <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-australia">understand the code, don\'t copy and paste it</a>. The <a class="cg-inline-link" href="/coding-classes-in-australia">Australia coding hub</a> links every page in the series.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Orange and New South Wales',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' },
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/hsc-software-engineering-help', label: 'HSC Software Engineering' },
    { href: '/coding-classes-in-australia', label: 'Australia hub' }
  ],

  personalityCss: `
.cg-root.cg-orn .cg-hero-grid { align-items: end; gap: clamp(1rem, 3.2vw, 2.4rem); }
.cg-root.cg-orn .cg-hero h1 { font-weight: 720; letter-spacing: -0.017em; line-height: 1.1; }
.cg-root.cg-orn .cg-capsule { border-top: 2px solid var(--cg-accent); border-bottom: 1px solid rgba(145, 82, 86, 0.3); padding: 0.85rem 0; }
.cg-root.cg-orn .cg-eyebrow { letter-spacing: 0.09em; font-weight: 650; font-size: 0.8rem; }
.cg-root.cg-orn .cg-section-head h2 { max-width: 27ch; }
.cg-root.cg-orn .cg-grid-3 { gap: clamp(0.95rem, 2.1vw, 1.7rem); }
.cg-root.cg-orn .cg-table caption { font-style: italic; text-align: left; }
.cg-root.cg-orn .cg-table td:not(:first-child) { font-variant-numeric: tabular-nums; }
.cg-root.cg-orn .cg-ladder-col { border-left: 2px solid rgba(145, 82, 86, 0.45); padding-left: 0.9rem; }
.cg-root.cg-orn .cg-callout { background: rgba(145, 82, 86, 0.06); }
`,

  dossier: {
    curriculumAuthority: 'Orange, ABS Census 2021 QuickStats, Significant Urban Area 1027 (read 8 October 2026): 41,920 people; median age 37; 10,728 families; 18,008 private dwellings; average 2.5 people per household; separate house 13,404 (85.8 percent; NSW 65.6; Australia 72.3); flat or apartment 559 (3.6 percent; NSW 21.7; Australia 14.2); aged 10 to 14 3,102 (7.4 percent; NSW 6.2; Australia 6.2); aged 5 to 9 3,028 (7.2 percent; NSW 6.2; Australia 6.2); Professionals 4,453 (22.7 percent; NSW 25.8; Australia 24.0); Bachelor Degree level and above 6,936 (21.1 percent; NSW 27.8; Australia 26.3). NSW place names inside the SUA polygon (NSW Spatial Services places): Ammerdown, Bletchington, Bloomfield, Bowen, Calare, Clifton Grove, Glenroi, Narrambla, Orange, Summer Hill, Warrendine. NSW Department of Education 2027 term dates: Term 2 Tuesday 27 April to Friday 2 July; Term 3 Monday 19 July to Friday 24 September; spring holidays Monday 27 September to Friday 8 October; Term 4 Monday 11 October to Monday 20 December (school development days included). IANA tz 2026e: Australia/Sydney rule AN; Asia/Kolkata UTC+5:30.',
    localProject: 'Natural cubic spline against linear interpolation of a contour elevation profile. NSW Spatial Services, NSW Elevation and Depth Theme MapServer layer 2 (Contour), extracted 8 October 2026 (Creative Commons Attribution 4.0, attribution (c) Spatial Services), queried along the straight line from the ORANGE place point (149.0963, -33.2831) to the GAANHA BULA / MOUNT CANOBOLAS physiography point (148.9819, -33.3433, summit spot height 1,397 m): 12,576.5 m, 120 crossings from 870 m at 31.5 m to 1,380 m, contours 2 m in town and 10 or 20 m on the mountain. Leave-one-out on 119 interior points: linear MAE 2.05 m (max 12.06), natural cubic spline (scipy CubicSpline bc_type natural) MAE 2.04 m (max 15.98); spline closer 57, linear closer 62. Town section under 3.6 km (56 points): linear 0.74, spline 1.24. Mountain beyond 9 km (34 points): linear 3.35, spline 3.14. Every-other-point test: linear 1.98, spline 2.45. Full-data spline maximum 958.2 m near 2,699 m between crossings 904 m at 2,603.1 m and 906 m at 2,874.3 m: overshoot 52.2 m above the higher contour.',
    requiredMentions: [
      '41,920',
      '10,728',
      '18,008',
      '13,404',
      '3,102',
      '12,576.5 m',
      '958 m',
      'Gaanha Bula',
      '0.74 m',
      'every other crossing'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Orange Significant Urban Area (1027): people, median age, families, dwellings, dwelling structure, age, occupation, education.', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/1027' },
      { claim: 'NSW Spatial Services, NSW Elevation and Depth Theme, Contour layer (Creative Commons Attribution 4.0, (c) Spatial Services).', url: 'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Elevation_and_Depth_Theme/MapServer/2' },
      { claim: 'NSW Spatial Services, NSW Physiography Category, GAANHA BULA / MOUNT CANOBOLAS point.', url: 'https://portal.spatial.nsw.gov.au/server/rest/services/NSW_Physiography_Category/MapServer/0' },
      { claim: 'NSW Spatial Services licence statement on the Elevation and Depth Theme portal item.', url: 'https://portal.spatial.nsw.gov.au/portal/sharing/rest/content/items/ca62b4699e5d43119617a9dce5bbe0c4?f=json' },
      { claim: 'NSW Department of Education, future and past NSW term and vacation dates.', url: 'https://education.nsw.gov.au/schooling/calendars/future-and-past-nsw-term-and-vacation-dates' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney and rule AN.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Term 1 2027 dates: NSW lists separate Eastern and Western division dates and this page does not establish which division applies, so Term 1 is omitted.',
      'Any walking, driving or access advice for the mountain or reserve: the transect is a straight line for analysis only.',
      'True ground heights between contours: unknown from the data; only the contour band constraint is stated.',
      'Weather, snowfall or climate claims for Orange: Bureau of Meteorology pages returned 403 to automated reads and were not circumvented.',
      'Income, rent, ancestry, religion and health figures from QuickStats: excluded by the cluster rules.',
      'Any affiliation with Spatial Services, the NSW Government, Orange City Council or the ABS.'
    ]
  }
};
