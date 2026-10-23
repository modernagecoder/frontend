'use strict';
// Moncton (cg- city page, Canada cluster Wave 2, row 121). Brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Angle: best-coding-classes-for-kids-in- (ages 6 to 12). "Best" in the title and meta only. The body gives Moncton
// families a checklist built on New Brunswick's Grades 6 to 8 technology outcomes, ranks no provider, never claims best.
// DATA NOTE: the City of Moncton Open Data Terms of Use let the City cancel access "without notice and for any reason"
// and require an indemnity, so they were not relied on (the same reason the Mississauga page uses Peel's licence). The
// local project instead uses federal data about Moncton: Environment and Climate Change Canada daily climate data for
// the Moncton airport station, under the ECCC Data Services End-use Licence (perpetual, commercial use allowed).
// Kill-rule check (8+ own verified facts): Charter s.16(2); Constitution Act, 1867 s.68 (Fredericton); area codes 428/506;
// America/Moncton zone and its 2026-27 offsets; Moncton CMA; NB middle-block technology outcomes (three quotes); NB CS 110
// and its AI-assisted debugging line; NB course list; CEMC BCC English only and CCC English and French; ECCC station facts.
// Sources, read raw on 22 October 2026. NB curriculum from curriculum.nbed.ca (saved here as nbed-middle-technology.html/.txt;
// CS 110 and course list from ca/src/other-provinces); law and geography from ca/facts-geo.md (raw ca/src/geo/lang);
// CEMC from ca/src/cemc; data and licence in ca/src-pilots/best-coding-classes-for-kids-in-moncton/ (SOURCES.txt):
//  - NB middle block, Technology (Grades 6 to 8): "Technology education updates for Grades 6-8 strengthen digital literacy
//    by helping learners understand how digital systems work, use coding and computational thinking to solve problems, and
//    make informed decisions about privacy, cybersecurity, and responsible technology use." (en dash in source); Big Idea
//    COMPUTATIONAL PRACTICE, "Apply basic coding skills to solve problems."; indicators "Code to solve a simple problem using
//    either symbolic or textual code (i.e., simple game design in Scratch)", "Code a robot to perform defined tasks and
//    refine code based on digital testing feedback.", "Code a microcontroller to perform an LED display using a block-based
//    or text-based coding environment."; "Explain the importance of privacy management when using digital or AI supported
//    technologies".
//  - NB Computer Science 110: "Learners will gain a strong foundation in coding while demonstrating operational skills,
//    using computational thinking"; "using coding environments or AI-assisted debugging tools" (non-breaking hyphen in
//    source). Course list: "Computer Science 110", "Computer Science 120", "Cybersecurity 120", "Cybersecurity and
//    Technical Support 110", "Technology 9".
//  - Charter s.16(2): "English and French are the official languages of New Brunswick and have equality of status".
//    Constitution Act, 1867 s.68: "and of New Brunswick, the City of Fredericton".
//  - CEMC contests overview: BCC "This contest is available in English only."; CCC "This contest is available in English
//    and French."; BCC 2026 window 9 to 20 November 2026; through-a-school rule.
//  - facts-geo.md: Moncton CMA (98-10-0005-01); area codes 428 and 506 (CNAC via the Internet Archive); New Brunswick uses
//    America/Moncton: UTC-3 until 1 November 2026, UTC-4 to 14 March 2027, then UTC-3; India 8 h 30 min ahead in summer
//    time and 9 h 30 min ahead in winter time (IANA tzdb 2026e). No populations used.
//  - ECCC historical daily data, station "MONCTON/GREATER MONCTON ROMEO LEBLANC INTL A", Climate ID 8103201, Station ID
//    50309 (station inventory row in the NWT sibling's eccc-station-inventory.csv). Calendar year 2025, downloaded
//    22 October 2026 from climate.weather.gc.ca bulk data in French (bulk_data_f.html: fr_climate_daily_moncton_50309_2025.csv,
//    75,622 bytes, sha256 9bf70bf0...12e36f75) and English (bulk_data_e.html: en_..., 75,573 bytes, sha256 8a100932...f1926871).
//  - Licence (eccc-msc-licence.html, eccc-msc.github.io/open-data/licence/readme_en/): "Environment and Climate Change Canada
//    Data Services End-use Licence", "Version 2.1.1 - August 2026"; "grants you a worldwide, royalty-free, perpetual,
//    non-exclusive licence to use the Information, including for commercial purposes"; attribution example "Data Source:
//    Environment and Climate Change Canada"; "Information Provider" means His Majesty the King in right of Canada, as
//    represented by the Minister of the Environment; non-endorsement clause.
// Our own calculations (page_script.py, checks.py, comma.py, python -I -X utf8; outputs *.out.txt): 365 rows in each
// language; 31 columns, French headers such as "Temp max.(°C)", "Neige au sol (cm)", "Mois" map one to one to the English
// file; decimal commas in the French file ("3,1"); all 365 daily maximum temperatures agree between the two files once the
// comma is swapped; "Neige au sol (cm)" blank on 231 days (none blank in January, February and December; all blank May to
// October); days with snow on the ground, by month: January 25, February 28, March 19, April 4, November 3, December 23
// (102 in all, counted directly); not recorded: March 2, April 23, May to October every day, November 22.
// Lesson family: bilingual headers and decimal commas, and treating a blank as "not recorded" rather than zero.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const COMMA = [
  'try:',
  '    print(float("3,1"))',
  'except ValueError as error:',
  '    print("ValueError:", error)',
  'print(float("3,1".replace(",", ".")))'
].join('\n');

const SCRIPT = [
  'import csv',
  '',
  'snow_days = {}',
  'missing = {}',
  'with open("fr_climate_daily_moncton_50309_2025.csv", encoding="utf-8-sig") as f:',
  '    lignes = csv.DictReader(f)',
  '    for row in lignes:',
  '        mois = int(row["Mois"])',
  '        text = row["Neige au sol (cm)"]',
  '        if text == "":',
  '            missing[mois] = missing.get(mois, 0) + 1',
  '            continue',
  '        depth = float(text.replace(",", "."))',
  '        if depth > 0:',
  '            snow_days[mois] = snow_days.get(mois, 0) + 1',
  '',
  'for mois in range(1, 13):',
  '    print(mois, snow_days.get(mois, 0), "days with snow on the ground,", missing.get(mois, 0), "days not recorded")'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'MONCTON', label: 'Moncton', blurb: 'Choosing a kids\' coding class in Moncton: New Brunswick\'s Grades 6 to 8 technology outcomes, Atlantic time, and a bilingual weather data project.' },
  market: CA,
  audience: 'kids',
  slug: 'best-coding-classes-for-kids-in-moncton',
  code: 'beab',
  accent: '#0F661E',
  accentRationale: 'Moncton kids page: a muted marsh green, #0F661E, allocated to this row by the Canada group so it clears every site accent by 6 RGB units and the other Canada accents by 14, including the Kelowna and Mississauga greens; contrast 6.74 on the paper #FBF8F2, 6.34 on #F5F1E8 and 5.80 on #EDE7DA',
  pageType: 'city',
  place: {
    name: 'Moncton',
    eyebrow: 'Moncton, New Brunswick',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'New Brunswick' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Courses', href: '/courses' },
    { label: 'Time zones', href: '/canada-time-zones-2026-online-class-times' }
  ],
  routeLabel: 'Moncton',
  title: 'Best Coding Classes for Kids in Moncton | Live Online, Ages 6-12',
  description: 'What to look for in the best coding classes for kids in Moncton: NB\'s Grades 6 to 8 technology outcomes, Atlantic time, and a bilingual weather data project.',
  ogDescription: 'Choosing a coding class for a Moncton child aged 6 to 12: what New Brunswick\'s middle-school technology outcomes expect, Atlantic class times, and a French and English weather data project.',
  twitterDescription: 'Choosing a kids\' coding class in Moncton, with NB technology outcomes and a bilingual data project.',
  ogImageCourse: 'kids-coding-blocks-masterclass',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Coding Classes for Moncton Children Aged 6 to 12',
    description: 'Live online coding in English for Moncton children aged 6 to 12: blocks and Scratch, then Python, with a bilingual weather data project, taught in a batch or one to one on Atlantic time.'
  },

  h1: 'Coding classes for kids in Moncton',
  capsuleQ: 'What should a Moncton family look for in a coding class for a child aged 6 to 12?',
  capsule: 'Look for live teaching, groups sorted by age, a plan that leads toward what New Brunswick expects in Grades 6 to 8 technology, and class times confirmed in Atlantic time. Modern Age Coders runs live online coding in English for Moncton children aged 6 to 12, either among 15 to 20 classmates or alone with a teacher; younger children usually start with Coding for Kids and older ones with Python and AI for Kids. A free class comes first.',
  lead: 'New Brunswick is the officially bilingual province, and Moncton families often weigh language alongside everything else when they choose an activity for a child. Our classes are taught in English. This page is about what to look for in a kids&rsquo; coding class from Moncton, measured against what New Brunswick itself expects of children in Grades 6 to 8 technology: simple games in Scratch, a robot that follows defined tasks, a microcontroller that lights an LED. It also walks through federal weather records for the Moncton airport, which our ten-to-twelve-year-olds analyse, downloaded in both French and English, where the French file writes its decimals with commas. We name no other provider and rank nobody. Use the checklist on any class you consider, ours included.',
  wa: 'Hello Modern Age Coders, we live in Moncton. Could my child try a free coding class?',

  picks: {
    eyebrow: 'Course picks for Moncton children',
    h2: 'Four courses for Moncton kids before Grade 8',
    intro: 'Each leads toward the Grades 6 to 8 technology outcomes in some way. The free class confirms where to begin.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 8', note: 'Short block-coding lessons for young children: order, repeats and simple reactions, explained aloud as they go.' },
      { course: 'scratch-programming-complete-course', band: 'Ages 7 to 10', note: 'Simple game design in Scratch, which is exactly the example New Brunswick gives for its middle-school coding outcome.' },
      { course: 'python-ai-kids-masterclass', band: 'Ages 9 to 12', note: 'Textual code in Python, the other route the province names, including the bilingual weather project on this page.' },
      { course: 'ai-literacy-for-kids-course', band: 'Ages 8 to 12', note: 'How AI tools use data, and why privacy matters, which New Brunswick also asks Grades 6 to 8 students to explain.' }
    ]
  },

  sections: [
    {
      id: 'nb', tint: '', eyebrow: 'New Brunswick, Grades 6 to 8',
      h2: 'Scratch, robots and an LED: what New Brunswick asks of Moncton children in Grades 6 to 8',
      intro: 'Moncton is in New Brunswick, whose curriculum site sets out technology outcomes for the middle block, Grades 6 to 8. We read the page on 22 October 2026. The quoted words are the province&rsquo;s; the notes are ours.',
      body: [
        { kind: 'align', rows: [
          { code: 'Big idea', req: 'Under Computational Practice the skill is to &ldquo;Apply basic coding skills to solve problems.&rdquo;', ours: 'Coding is treated as a problem-solving tool, not only a computer topic.' },
          { code: 'Indicator 1', req: 'Code a simple problem with &ldquo;either symbolic or textual code (i.e., simple game design in Scratch)&rdquo;.', ours: 'Blocks or typed code are both fine, and Scratch games are the province&rsquo;s own example.' },
          { code: 'Indicator 2', req: 'Code a robot to perform defined tasks and refine the code based on digital testing feedback.', ours: 'Test, look at the result, change the code: the same loop we use in every lesson.' },
          { code: 'Indicator 3', req: 'Code a microcontroller to perform an LED display in a block-based or text-based environment.', ours: 'Hardware may appear at school; at home, the logic behind it can be practised on screen.' },
          { code: 'Citizenship', req: 'Explain the importance of privacy management when using digital or AI supported technologies.', ours: 'Privacy and AI sit in the same outcome list as coding, which is how we teach them too.' }
        ] },
        { kind: 'p', text: 'The province describes the purpose of its Grades 6 to 8 update in one line: it helps learners understand how digital systems work, use coding and computational thinking to solve problems, and make informed decisions about privacy, cybersecurity and responsible technology use. Later, in high school, New Brunswick lists Computer Science 110, which promises learners &ldquo;a strong foundation in coding&rdquo; and mentions AI-assisted debugging tools, along with Computer Science 120, Cybersecurity 120 and Technology 9.' },
        { kind: 'callout', h3: 'Beside school, not part of it', p: 'Modern Age Coders is a live online class that families choose; it is not a school and grants no school credit. We are not connected with the New Brunswick education department, any Moncton school district or the City of Moncton.' }
      ]
    },
    {
      id: 'checklist', tint: 'tint', eyebrow: 'A Moncton checklist',
      h2: 'Five things to settle before choosing a kids&rsquo; coding class in Moncton',
      intro: 'Our checklist for Moncton parents of children aged 6 to 12. Put the same five points to every provider, in either language, and compare the answers side by side.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Which language suits your child?', p: 'English and French are the official languages of New Brunswick, with equality of status under the Charter. Our classes are in English. If your child is far more at ease in French, weigh that honestly; a happy child in either language learns more than an anxious one.' },
          { h3: '2. Does the plan lead somewhere?', p: 'Ask what your child will be able to do by Grade 6 or 7. A good answer mentions games in blocks, then typed code, then testing and fixing, which lines up with what the province expects in Grades 6 to 8.' },
          { h3: '3. Are times set in Atlantic time?', p: 'Atlantic clocks fall back an hour on 1 November 2026 and spring forward on 14 March 2027. A provider in another time zone should restate every class in Atlantic time around both dates.' }
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '4. How are children grouped?', p: 'Ask the largest group size and how ages are kept together. A six-year-old needs a different lesson from an eleven-year-old, whatever the language of instruction.' },
          { h3: '5. What will your child show you?', p: 'After eight classes, your child should be able to run a program they made and tell you how it works, including one thing that went wrong and how they fixed it.' },
          { h3: 'And one question for you', p: 'Will someone sit nearby during the first lessons? Children aged six and seven do better online when a parent is within earshot, even if the parent is busy with something else.' }
        ] }
      ]
    },
    {
      id: 'weather', tint: 'deep', eyebrow: 'Moncton data project',
      h2: 'How many days did Moncton have snow on the ground in 2025? Reading the French file',
      intro: 'Environment and Climate Change Canada publishes daily weather records for the Moncton airport station, in French and in English. In our classes the older children pick the French file deliberately, since it teaches two things the English file hides. Every count here is ours.',
      body: [
        { kind: 'p', text: '<b>Lesson 1: the decimal comma.</b> The French file writes 3.1 as <b>3,1</b>, and Python refuses to read that as a number. Our three-line test shows the error and the fix:<code class="cg-mt-2">' + COMMA + '</code>It prints <b>ValueError: could not convert string to float: \'3,1\'</b> and then <b>3.1</b>. The column names are French too: <b>Mois</b> is month, <b>Temp max.(°C)</b> is the daily high and <b>Neige au sol (cm)</b> is snow on the ground.' },
        { kind: 'table', caption: 'Days with snow on the ground at the Moncton airport station in 2025, by month: our count from ECCC daily data (station MONCTON/GREATER MONCTON ROMEO LEBLANC INTL A, Climate ID 8103201), French file downloaded 22 October 2026', head: ['Month', 'Days with snow on the ground', 'Days with no value recorded'], rows: [
          ['January', '25', '0'],
          ['February', '28', '0'],
          ['March', '19', '2'],
          ['April', '4', '23'],
          ['May to October', '0', 'every day'],
          ['November', '3', '22'],
          ['December', '23', '0']
        ] },
        { kind: 'p', text: 'Our script reads the French file directly. <b>Lesson 2: a blank is not a zero.</b> When the snow column is empty, the script counts the day as not recorded and moves on, instead of pretending there was no snow:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'February had snow every day', p: 'All 28 February days show snow on the ground. January had 25 and December 23. Across the year we count 102 days with snow on the ground, a figure we counted directly rather than adding up the months.' },
          { h3: 'Why April is uncertain', p: 'April shows only 4 snow days, but 23 April days have no value at all. So the honest statement is that at least 4 April days had snow on the ground; the file cannot tell us about the rest.' },
          { h3: 'Two files, one record', p: 'We checked the French and English downloads against each other: same 365 dates, same 31 columns in the same order, and all 365 daily highs agree once the comma is swapped for a point.' }
        ] },
        { kind: 'callout', h3: 'What the file cannot tell you', p: 'One airport station is not the whole city, and the snow column is simply left empty for most of the warm months. A careful student says the station recorded snow on the ground on 102 days in 2025, not that Moncton had exactly 102 snowy days.' },
        { kind: 'p', text: 'Data Source: Environment and Climate Change Canada, <a class="cg-inline-link" href="https://climate.weather.gc.ca/">historical climate data</a>, used under the <a class="cg-inline-link" href="https://eccc-msc.github.io/open-data/licence/readme_en/">Environment and Climate Change Canada Data Services End-use Licence</a>. This is federal data about Moncton rather than a City of Moncton file, which we chose because its licence is perpetual and allows commercial reuse. Neither the data nor its licence implies any endorsement of our classes by ECCC.' }
      ]
    },
    {
      id: 'contests', tint: '', eyebrow: 'Contests',
      h2: 'A first contest for a Moncton child, and the language it is written in',
      intro: 'The contests most Canadian schools use come from CEMC at the University of Waterloo. For a Moncton family two details stand out; we checked both on 22 October 2026.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Beaver Computing Challenge', p: 'Designed for students up to Grade 10, in three levels, with no coding needed. CEMC lists the 2026 window as 9 to 20 November 2026, and offers the contest in English only.' },
          { h3: 'Canadian Computing Competition', p: 'The programming contest for older students is offered in both English and French, so a Moncton teenager can choose the language that suits them when the time comes.' },
          { h3: 'Entered through school', p: 'Students cannot register on their own; entry goes through a school. Ask your child&rsquo;s teacher whether the school takes part.' }
        ] },
        { kind: 'p', text: 'We prepare children with logic puzzles our teachers write and label as ours, never with copied contest papers. See the <a class="cg-inline-link" href="/beaver-computing-challenge-guide">Beaver Computing Challenge guide</a> for every level, and the <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation page</a> for the years ahead. Modern Age Coders has no connection with CEMC or the University of Waterloo.' }
      ]
    },
    {
      id: 'atlantic', tint: 'tint', eyebrow: 'Class times',
      h2: 'Moncton on Atlantic time: class times before and after 1 November 2026',
      intro: 'The time zone database even names New Brunswick&rsquo;s zone after the city: America/Moncton. It is UTC-3 until 1 November 2026, UTC-4 until 14 March 2027, then UTC-3 again. Our teachers in India keep the same clock all year. Conversions are ours, from IANA release 2026e.',
      body: [
        { kind: 'table', caption: 'Two Moncton class slots in India time, 2026 to 2027 (our conversions)', head: ['Moncton slot', 'On UTC-3 (India 8 h 30 min ahead)', 'On UTC-4 (India 9 h 30 min ahead)'], rows: [
          ['Weekday, 4:30 pm', '1:00 am next day in India', '2:00 am next day in India'],
          ['Saturday, 10:00 am', '6:30 pm Saturday in India', '7:30 pm Saturday in India']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Atlantic time first', p: 'Every invitation we send a Moncton family states the Atlantic time. In the days before each clock change, we send the next class time again.' },
          { h3: 'Lesson length by age', p: 'Six- and seven-year-olds have shorter sessions with a movement break. From about ten, children settle into a full project session.' },
          { h3: 'New Brunswick numbers', p: 'New Brunswick uses the 506 and 428 area codes across the province. Enter your ten digits in the form below.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'A Moncton child&rsquo;s path toward the Grades 6 to 8 outcomes',
    intro: 'Ages are approximate. The free class places your child from what they can already do.',
    cols: [
      { band: 'Ages 6 and 7', h3: 'Order and repeats', p: 'Block programs that move and repeat, with lots of talking about what will happen next.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 8 and 9', h3: 'Simple game design', p: 'Scratch games with rules, scores and testing, the province&rsquo;s own middle-school example.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 10 and 11', h3: 'Textual code', p: 'Python, testing and fixing, and logic that a robot or a microcontroller could follow.', courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Age 12', h3: 'Data and privacy', p: 'Real files, like the bilingual weather records, and what AI tools do with data.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Why should a Moncton child learn to code when AI can read the weather file?',
    intro: 'Because the tool may count every blank as no snow, and nobody will notice.',
    p1: 'Ask an AI assistant how many snow days Moncton had and it might treat the empty summer values as zero, which happens to look fine, then do the same in April, where it matters. It might also choke on the decimal commas or silently drop those rows. A child who has written the check for blanks knows that the April answer is a minimum, not a count.',
    p2: 'Our classes put that kind of thinking first: read the data, decide what a blank means, write the code, test it, explain it. Studying how AI tools work, and how they fail, matches the privacy and AI outcome in New Brunswick&rsquo;s Grades 6 to 8 technology list. The reasoning stays theirs. Under OpenAI&rsquo;s terms, children younger than 18 need a parent to agree before using ChatGPT.',
    closer: 'New Brunswick asks young students to refine code based on testing feedback; checking an AI answer is the same habit pointed at a different source.',
    blogAnchor: 'the reasons to learn coding in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'How our live online classes work for Moncton children',
    intro: 'Lessons are live, in English, from home, with one regular teacher on Atlantic time.',
    cells: [
      { h3: 'When', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Batch or private', p: 'A batch of 15 to 20 children working at one level, or private lessons shaped around one child.' },
      { h3: 'Language', p: 'Teaching is in English. A child who reaches for a French word is helped to the English one, and the code itself uses English keywords anyway.' },
      { h3: 'Equipment', p: 'Any computer that has a keyboard, sound and a stable connection. No robot or microcontroller is needed for our lessons.' },
      { h3: 'Across New Brunswick', p: 'Children in Fredericton, the provincial capital, and in Saint John join the same classes on the same Atlantic clock.' },
      { h3: 'Free first class', p: 'The trial is a genuine lesson; afterwards the teacher suggests a course and a level, and no card details are taken.' }
    ],
    spec: { title: 'No Moncton centre', p: 'Modern Age Coders has no location in Moncton and does not claim one. All teaching is live online, in English, from India.' }
  },

  fees: {
    h2: 'Kids&rsquo; coding class fees for Moncton families',
    intro: 'Three options. Each fee is printed with its currency code.',
    first: 'One full live lesson, free, ending with a recommended course and level.',
    group: 'The monthly fee for a place in a batch of 15 to 20 children at the same stage.',
    private: 'The monthly fee for private lessons with one teacher.',
    closer: 'The monthly fee in Moncton is the Canada-wide fee. Nothing is charged before the free lesson, and billing starts only once a course and a time are agreed; the pricing page explains holidays and missed lessons.'
  },

  reviewsH2: 'Reviews from families and students on Google',

  book: {
    h2: 'Request a free class for your Moncton child',
    intro: 'Give us the grade or age and say which language your child prefers day to day. The first lesson is planned with both in mind.',
    success: 'Thank you. We will be in touch soon about a class for your child in Moncton.'
  },

  faq: {
    h2: 'Moncton parents ask',
    intro: 'Questions Moncton families send us before a first class.',
    items: [
      { q: 'Do you offer coding classes for kids in Moncton?', a: 'We do, online and in English. Nothing happens in a Moncton building: a child logs in at home and works live with a teacher, as one of 15 to 20 or as the only student.' },
      { q: 'Are classes available in French?', a: 'Not at present; lessons are in English. A child who knows a word only in French can say it, and the teacher supplies the English. Python keywords are English words whatever language a child speaks.' },
      { q: 'What do New Brunswick schools expect in technology for Grades 6 to 8?', a: 'The province lists outcomes such as coding a simple game in Scratch or in typed code, coding a robot and refining it from testing, and coding a microcontroller to light an LED display.' },
      { q: 'What age can my child start?', a: 'From age 6, with blocks. These courses for children run to age 12.' },
      { q: 'Do you teach robotics?', a: 'We teach the programming side only, not robot hardware. The logic a New Brunswick robot task needs, such as testing and refining code, is practised in every lesson.' },
      { q: 'What time are classes for Moncton families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every time is confirmed in Atlantic time.' },
      { q: 'Will class times move when the clocks change?', a: 'Your Moncton time stays the same; we handle the change on our side. New Brunswick clocks go back on 1 November 2026 and forward on 14 March 2027, and we confirm the next class before each change.' },
      { q: 'Can my child enter a coding contest?', a: 'Yes, by way of the school. The Beaver Computing Challenge needs no coding and CEMC runs it only in English; for older students the CCC can be written in either official language.' },
      { q: 'Will my child use AI tools in class?', a: 'AI is studied, not relied on. Children learn how AI tools use data and where they go wrong, and they write their own code.' },
      { q: 'How much do classes cost?', a: 'Scroll up to the fees: the trial class is free, and the two monthly fees, batch and private, are shown beside it. No payment is due until the trial is over.' }
    ]
  },

  next: {
    eyebrow: 'More for Canadian families',
    h2: 'Other pages for Moncton and Atlantic Canada',
    html: 'Start from the <a class="cg-inline-link" href="/coding-classes-in-canada">Canada hub</a>. Every province&rsquo;s coding at school is compared in <a class="cg-inline-link" href="/canada-coding-curriculum-by-province">coding in Canadian curricula</a>, Atlantic and other clocks are in the <a class="cg-inline-link" href="/canada-time-zones-2026-online-class-times">2026 time zone guide</a>, and the national comparison of class formats is <a class="cg-inline-link" href="/best-online-coding-classes-in-canada">online coding classes in Canada</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Moncton and Canada',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/canada-coding-curriculum-by-province', label: 'Coding by province' },
    { href: '/canada-time-zones-2026-online-class-times', label: 'Canada time zones 2026' },
    { href: '/beaver-computing-challenge-guide', label: 'Beaver Computing Challenge' },
    { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' }
  ],

  personalityCss: `
.cg-root.cg-beab .cg-hero h1 { font-weight: 700; letter-spacing: -0.018em; line-height: 1.06; }
.cg-root.cg-beab .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-beab .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; text-transform: uppercase; font-size: 0.75rem; }
.cg-root.cg-beab .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.01em; }
.cg-root.cg-beab .cg-table caption { font-weight: 650; text-align: left; }
.cg-root.cg-beab .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-beab #weather code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.55; padding: 0.85rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-beab .cg-align-code { font-weight: 700; letter-spacing: 0.03em; }
.cg-root.cg-beab #checklist h3 { letter-spacing: -0.005em; }
.cg-root.cg-beab .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.75rem; }
`,

  dossier: {
    curriculumAuthority: 'New Brunswick, read 22 October 2026 from curriculum.nbed.ca and saved raw: middle-block Technology (Grades 6 to 8) update statement, the Computational Practice skill and its three indicators (simple game design in Scratch, coding a robot and refining from testing feedback, coding a microcontroller LED display), the privacy and AI indicator; Computer Science 110 (foundation in coding; AI-assisted debugging tools) and the course list (Computer Science 120, Cybersecurity 120, Cybersecurity and Technical Support 110, Technology 9). Charter s.16(2) on New Brunswick\'s official languages; Constitution Act, 1867 s.68 on Fredericton. CEMC contest languages and BCC dates. Moncton CMA, area codes 428/506, America/Moncton offsets (facts-geo.md; IANA tzdb 2026e).',
    localProject: 'Environment and Climate Change Canada daily climate data, MONCTON/GREATER MONCTON ROMEO LEBLANC INTL A (Climate ID 8103201, Station ID 50309), 2025, downloaded 22 October 2026 in French and English (ECCC Data Services End-use Licence 2.1.1), read with our script page_script.py (python -I -X utf8): snow on the ground on January 25, February 28, March 19, April 4, November 3 and December 23 days (102 in all, counted directly); Neige au sol blank on 231 days; decimal commas handled; French and English files agree on all 365 daily highs. Federal data chosen because the City of Moncton terms are cancellable and carry an indemnity. Labelled as ours. Lesson family: bilingual headers, decimal commas, blank is not zero.',
    requiredMentions: [
      'Neige au sol (cm)',
      'could not convert string to float',
      'at least 4 April days had snow on the ground',
      'a figure we counted directly rather than adding up the months',
      'Lesson 2: a blank is not a zero.',
      'Code a microcontroller to perform an LED display',
      'simple game design in Scratch',
      'names New Brunswick&rsquo;s zone after the city: America/Moncton',
      'New Brunswick uses the 506 and 428 area codes'
    ],
    sources: [
      { claim: 'New Brunswick curriculum, middle block Technology (Grades 6 to 8): update statement, Computational Practice outcomes, privacy and AI indicator.', url: 'https://curriculum.nbed.ca/learning-areas/middle-block/technology/' },
      { claim: 'New Brunswick Computer Science 110: coding foundation and AI-assisted debugging.', url: 'https://curriculum.nbed.ca/learning-areas/high-school-block/career-connected-learning/digital-and-information-technology/computer-science-110/' },
      { claim: 'Canadian Charter of Rights and Freedoms s.16(2): official languages of New Brunswick.', url: 'https://laws-lois.justice.gc.ca/eng/const/page-12.html' },
      { claim: 'CEMC contests: BCC English only, CCC English and French, 2026 dates, through-a-school rule.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'Environment and Climate Change Canada historical climate data (Moncton airport station, daily, 2025).', url: 'https://climate.weather.gc.ca/' },
      { claim: 'Environment and Climate Change Canada Data Services End-use Licence 2.1.1 (commercial use, attribution, non-endorsement).', url: 'https://eccc-msc.github.io/open-data/licence/readme_en/' },
      { claim: 'IANA tzdb northamerica: America/Moncton offsets and the 2026-27 changes.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Moncton population or language-statistics figure: StatCan was not reachable live.',
      'Using City of Moncton open data: rejected; its terms allow the City to cancel access without notice and for any reason and require an indemnity.',
      'That Moncton had exactly 102 snowy days in 2025: refused; one station, and the column is blank on 231 days.',
      'A count of April snow days: given only as a minimum, since 23 April days have no value.',
      'That we teach in French or teach robotics or microcontroller hardware: refused.',
      'Any claim about how New Brunswick organises its English and French school systems: not verified, not stated.',
      'Storm, extreme-weather or disaster content: deliberately not used.',
      'Any ranking of Moncton coding providers, or that Modern Age Coders is the best: refused.',
      'Any affiliation with the City of Moncton, the New Brunswick education department, ECCC, CEMC or the University of Waterloo.'
    ]
  }
};
