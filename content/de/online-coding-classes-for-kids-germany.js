'use strict';
// Online coding classes for kids in Germany (ag- English door, Germany cluster row DE014, rows.tsv P2).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live in English only, matching the learner's pace and accent; pages show euro,
// checkout charges USD.
// Spine: the online format itself. What one live lesson on video looks like minute by minute, what a child needs at
// home, how the clocks in Germany and India line up (and what the clock change does), and why school holidays that
// differ by Land do not stop an online class. Original project: a time-zone program that is right in winter and wrong
// in April when written by hand, then right all year with zoneinfo, then shows the hour that happens twice.
// Sources (read raw, fetched 2 and 3 November 2026; copies in
// ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/online-coding-classes-for-kids-germany/):
//  - EinhZeitG para 4 (gesetze-im-internet.de/me_einhg/__4.html): "Die gesetzliche Zeit ist die mitteleuropäische Zeit.
//    Diese ist bestimmt durch die koordinierte Weltzeit unter Hinzufügung einer Stunde." and "Die mitteleuropäische
//    Sommerzeit ist bestimmt durch die koordinierte Weltzeit unter Hinzufügung zweier Stunden."
//  - SoZV para 2 (gesetze-im-internet.de/sozv/__2.html): summer time "beginnt jeweils am letzten Sonntag im März um 2 Uhr";
//    "von 2 Uhr auf 3 Uhr vorgestellt"; ends "am letzten Sonntag im Oktober um 3 Uhr"; "Die Stunde von 2 Uhr bis 3 Uhr
//    erscheint dabei zweimal"; the hours are called "2A" and "2B".
//  - Dates: summer time ended 25 October 2026, begins 28 March 2027 (facts-geo/timezone.tsv, tzdata Europe/Berlin).
//  - KMK, FER2026_27.pdf (Stand: 09.10.2025): Herbst and Weihnachten columns for all 16 Länder (rows quoted in the
//    table below, read from the raw text fe303dbf.txt); "Während die Kultusministerkonferenz die Sommerferien
//    langfristig vereinbart, werden die übrigen Ferientermine von den Ländern selbst bestimmt." (FACTS 273);
//    "Angegeben ist jeweils der erste und letzte Ferientag."
//  - KMK Eurydice dossier: school year starts "am 1. August und endet am 31. Juli" (FACTS 287); six weeks of summer
//    holidays within mid June to mid September (FACTS 288).
// Our own calculations (scratchpad de/w/G3/cok/a.py, b.py, bc.py, python3 -I, Python 3.14.8): "Saturday 11:30 in Germany
// is 16:00 in India"; zoneinfo: 2027-03-20 and 2027-03-27 give 16:00, 2027-04-03 gives 15:00; on 25 October 2026,
// 00:00 UTC is 02:00 CEST and 01:00 UTC is 02:00 CET. Example slot conversions: 14:00 = 18:30 / 17:30; 16:45 = 21:15 /
// 20:15; Saturday 11:30 = 16:00 / 15:00; Sunday 09:00 = 13:30 / 12:30 (winter / from 28 March 2027).
// Lesson family: a moment is not a clock reading; convert from the moment and let the time-zone rules do the rest.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'def india_time(hour, minute):',
  '    total = hour * 60 + minute + 4 * 60 + 30',
  '    return f"{total // 60:02d}:{total % 60:02d}"',
  '',
  'print("Saturday 11:30 in Germany is", india_time(11, 30), "in India")'
].join('\n');

const V2 = [
  'from datetime import datetime',
  'from zoneinfo import ZoneInfo',
  '',
  'germany = ZoneInfo("Europe/Berlin")',
  'india = ZoneInfo("Asia/Kolkata")',
  '',
  'for day in ["2027-03-20", "2027-03-27", "2027-04-03"]:',
  '    lesson = datetime.fromisoformat(day + " 11:30").replace(tzinfo=germany)',
  '    print(day, "11:30 in Germany is", lesson.astimezone(india).strftime("%H:%M"), "in India")'
].join('\n');

const V3 = [
  'from datetime import timedelta, timezone',
  '',
  'night = datetime(2026, 10, 25, 0, 0, tzinfo=timezone.utc)',
  'for step in range(4):',
  '    moment = night + timedelta(minutes=30 * step)',
  '    print(moment.strftime("%H:%M UTC"), "is", moment.astimezone(germany).strftime("%H:%M %Z"), "in Germany")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'door', label: 'Online coding classes for kids' },
  slug: 'online-coding-classes-for-kids-germany',
  code: 'cok',
  accent: '#59570D',
  accentRationale: 'Online coding classes for kids in Germany: a deep olive #59570D, the green-brown of an old video-call headset cable and nothing else on the Germany pages; contrast 6.10 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Online coding classes for kids in Germany',
  title: 'Online Coding Classes for Kids in Germany: How Live Lessons Work',
  description: 'Online coding classes for kids in Germany, live in English: one lesson minute by minute, what a child needs at home, German and Indian times, and school holidays.',
  ogDescription: 'How a live online coding class works for a child in Germany: an hour on video with one mentor, the laptop and headset it needs, how German time lines up with India across the clock change, and why Land holidays do not stop it.',
  twitterDescription: 'Live online coding for children in Germany, in English: the lesson, the setup at home, the times and the clock change.',
  pageName: 'Online Coding Classes for Kids in Germany',
  webPageDescription: 'A practical guide for parents in Germany to live online coding classes for children aged 6 to 12: the shape of one lesson, the equipment, time zones under the Einheitenzeitgesetz and the Sommerzeitverordnung, and the KMK holiday table for 2026/27.',
  courseDescription: 'Live online coding classes in English for children in Germany aged 6 to 12, on video with one regular mentor: Scratch first, then Python, two hours a week in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Online for kids',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#lesson', label: 'One lesson' },
    { href: '#home', label: 'At home' },
    { href: '#clock', label: 'Time zones' },
    { href: '#holidays', label: 'Holidays' }
  ],
  eyebrow: 'Germany &middot; Online coding for children &middot; Live on video',
  h1: 'Online coding classes for kids in Germany',
  lede: 'Most parents have one real question about online classes: what actually happens on the screen for that hour? This page answers it plainly. It walks through one live lesson from hello to goodbye, lists what a child needs at home, shows how a German afternoon lines up with a mentor\'s evening in India, explains what the clock change in March does to a class, and checks the 2026/27 holiday table for every Land.',
  secondaryCta: { href: '#lesson', label: 'Walk through a lesson' },
  wa: 'Hello Modern Age Coders, we are in Germany and would like to see how an online coding class works for our child. Could we try a free class?',
  heroNote: 'Teaching on video since 2020 &middot; 10,000+ students worldwide &middot; a real mentor on screen, never a recording',
  spec: [
    ['Format', 'Live video, screen shared both ways'],
    ['Length', 'About an hour, twice a week'],
    ['Ages', '6 to 12, in age groups'],
    ['Needs', 'Computer, keyboard, headset'],
    ['Language', 'English, matched to the child'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Online coding classes for kids in Germany at Modern Age Coders are live video lessons in English for children aged 6 to 12: the mentor and the child share screens, and the child builds Scratch games or Python programs while the mentor guides, for about an hour twice a week. A computer with a keyboard, a headset and a steady connection are enough. Lessons sit in German afternoons or at weekends, in a group of fifteen to twenty or one to one.',

  picks: {
    eyebrow: 'Courses taught this way',
    h2: 'Three online courses for children in Germany',
    lede: 'All three are taught live on video. They differ in the child\'s age and in how much typing the child is ready for.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'COK / 01', title: 'Coding for Kids online', note: 'From age 6, grouped by age. The year-long route from Scratch blocks to apps, with the same mentor on screen at every lesson.' },
      { course: 'scratch-programming-complete-course', code: 'COK / 02', title: 'Scratch in three months', note: 'A short first course. Ideal for finding out whether a young child enjoys learning on video before a longer commitment.' },
      { course: 'python-ai-kids-masterclass', code: 'COK / 03', title: 'Python on video', note: 'For confident readers from about 9. Screen sharing makes typed code easy to check line by line, which suits Python well.' }
    ]
  },

  sections: [
    {
      id: 'lesson',
      eyebrow: 'One lesson',
      h2: 'What happens in a live online coding lesson?',
      lede: 'Every lesson has the same rhythm, so children know what comes next. This is our plan for an hour with a group of nine year olds working in Scratch.',
      body: [
        { kind: 'table', numCols: [], caption: 'One hour of a live online lesson, minute by minute (our lesson plan)', head: ['Minutes', 'What happens', 'Who drives the screen'], rows: [
          ['0 to 5', 'Hello, cameras on, a quick look back at last time\'s game', 'Mentor'],
          ['5 to 15', 'One new idea shown on a tiny example, such as a timer that counts down', 'Mentor'],
          ['15 to 40', 'Children add the idea to their own game; the mentor visits each screen in turn', 'Children'],
          ['40 to 50', 'A bug hunt: something is broken on purpose, and the group finds it', 'Children, one at a time'],
          ['50 to 55', 'Two or three children show their game and explain one block', 'Children'],
          ['55 to 60', 'What to try before next time; a short note goes to parents', 'Mentor']
        ] },
        { kind: 'source', html: 'Our own lesson plan for a group class. One-to-one lessons follow the same order, with more time for the child\'s own project and less for showing.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'The child drives', p: 'For more than half the lesson the child\'s screen is the one being shared. The mentor can point, ask and suggest, but the child\'s hands are on the keyboard, which is why online lessons work at all.' },
          { h3: 'Nobody hides', p: 'In a video lesson a quiet child cannot sit at the back. The mentor calls on each child by name, checks every screen, and notices within a minute when a child is stuck.' },
          { h3: 'Nothing pre-recorded', p: 'There is no video to watch alone and no worksheet to finish without help. Each lesson happens once, live, with the mentor who taught the last one.' }
        ] },
        { kind: 'p', mt: true, html: 'Our mentors are in India and teach only in English. On video that matters less than parents fear: the mentor shows each step on screen before saying it, keeps sentences short, and repeats in other words when a face looks puzzled. A child who answers in German is understood, and gently handed the English word.' }
      ]
    },
    {
      id: 'home',
      eyebrow: 'The setup at home',
      h2: 'What does a child need at home for online coding classes?',
      lede: 'Less than for most hobbies. Here is the checklist we send to families before the first lesson.',
      body: [
        { kind: 'ol', items: [
          '<strong>A laptop or desktop computer with a real keyboard.</strong> Scratch works on a tablet, but typing Python and sharing a screen are far easier on a computer. Any machine from the last few years with a current browser is enough.',
          '<strong>A headset with a microphone.</strong> Cheap is fine. It keeps the mentor\'s voice clear and the child\'s answers easy to hear, and stops a younger sibling joining in.',
          '<strong>A steady internet connection.</strong> The same connection that runs a family video call will run a lesson. Sitting close to the router helps more than a faster plan.',
          '<strong>A quiet corner and a glass of water.</strong> A table, not a sofa. The same place every week turns the lesson into a habit.',
          '<strong>For children under about 8, a parent nearby.</strong> Not to help with the code, just to help with logging in and finding the mouse in the first two or three lessons.',
          '<strong>No special software.</strong> Scratch runs in the browser, and so can Python at the start. The mentor helps install anything else, live, when the child is ready.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What we never ask for',
          left: [
            'Children do not need their own email address or any social media account to join a lesson. The class link goes to the parent.',
            'Mentors do not ask children for personal details, photos of themselves or their school\'s name, and children do not share contact details in class.'
          ],
          rightH3: 'If something goes wrong',
          right: [
            'Connections drop. If a child falls out of the call, they rejoin with the same link and the mentor recaps what was missed.',
            'If a lesson is lost to a broken connection or illness, we arrange a catch-up with the same mentor rather than leaving a gap.'
          ] }
      ]
    },
    {
      id: 'clock',
      tint: 'tint',
      eyebrow: 'Time zones, as a project',
      h2: 'What time are online classes in Germany, and what changes in March?',
      lede: 'German law fixes the clock in two lines. The Einheitenzeitgesetz says legal time is Central European Time, "die koordinierte Weltzeit unter Hinzufügung einer Stunde": UTC plus one hour. In summer it is UTC plus two. India keeps UTC+5:30 all year, so the gap between a child\'s clock and a mentor\'s clock changes twice a year. Our older children turn that into a program.',
      body: [
        { kind: 'table', numCols: [], caption: 'Four example class times, in Germany and on the mentor\'s side', head: ['A child\'s clock in Germany', 'The mentor\'s clock this winter', 'The mentor\'s clock from 28 March 2027'], rows: [
          ['Weekday 14:00', '18:30', '17:30'],
          ['Weekday 16:45', '21:15', '20:15'],
          ['Saturday 11:30', '16:00', '15:00'],
          ['Sunday 09:00', '13:30', '12:30']
        ] },
        { kind: 'source', html: 'Under the Sommerzeitverordnung, summer time begins on the last Sunday in March at 2 Uhr, when the clocks jump to 3 Uhr, and ends on the last Sunday in October at 3 Uhr, when they go back to 2 Uhr. It ended on 25 October 2026 and begins on 28 March 2027. India does not change its clocks. The rows are examples; no class is fixed to them.' },
        { kind: 'two', mt: true,
          leftH3: 'The puzzle',
          left: [
            'A Saturday class sits at 11:30 in Germany. A child writes a program to tell the mentor\'s time: take the hours and minutes and add four and a half hours. It prints 16:00, which is correct today.',
            'In April the program still prints 16:00. The mentor, meanwhile, is starting the class at 15:00. Nothing in the code is broken. The rule it uses is only true for half the year.'
          ],
          rightH3: 'The fix',
          right: [
            'The better program never adds hours by hand. It records the moment of the class in Germany\'s own time zone, Europe/Berlin, and asks Python to show that same moment in Asia/Kolkata.',
            'Python\'s zoneinfo module knows the German clock-change rules, so the answer moves by itself on 28 March 2027.'
          ] },
        { kind: 'code', label: 'Version 1: add four and a half hours', lang: 'Python', code: V1, note: 'It prints: <code>Saturday 11:30 in Germany is 16:00 in India</code>. Right for this winter, wrong from April.' },
        { kind: 'code', label: 'Version 2: convert the moment, not the clock reading', lang: 'Python', code: V2, note: 'It prints <code>2027-03-20 11:30 in Germany is 16:00 in India</code>, then the same for 27 March, then <code>2027-04-03 11:30 in Germany is 15:00 in India</code>. The class did not move; the gap between the clocks did.' },
        { kind: 'p', mt: true, html: 'Then comes the part children remember. The Sommerzeitverordnung says that when summer time ends, "Die Stunde von 2 Uhr bis 3 Uhr erscheint dabei zweimal": the hour from 2 to 3 happens twice, and the law even names the two copies 2A and 2B. Version 3 walks through the night of 25 October 2026 in half-hour steps of world time and prints what a German clock showed.' },
        { kind: 'code', label: 'Version 3: the hour that happened twice', lang: 'Python', code: V3, note: 'After Version 2, it prints: <code>00:00 UTC is 02:00 CEST in Germany</code>, <code>00:30 UTC is 02:30 CEST in Germany</code>, <code>01:00 UTC is 02:00 CET in Germany</code> and <code>01:30 UTC is 02:30 CET in Germany</code>.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 7 to 9, on paper.</strong> Draw two clocks, one for Germany and one for India. Move the German hand to 16:00 and work out the Indian clock. Now do it again for a day in May.',
          '<strong>Ages 10 to 12, in Python.</strong> Run Version 1 for a date in April and explain why it is wrong before reading Version 2.',
          '<strong>Going further.</strong> In March the hour from 2 to 3 never happens in Germany. Change Version 3 to walk through the night of 28 March 2027 and find the missing hour yourself.'
        ] }
      ]
    },
    {
      id: 'holidays',
      eyebrow: 'School holidays',
      h2: 'Do online coding classes stop in the German school holidays?',
      lede: 'No, unless you want them to. Each Land sets its own autumn, Christmas, winter and Easter holidays, so a class with children from several Länder cannot follow one calendar anyway.',
      body: [
        { kind: 'table', numCols: [], caption: 'Autumn and Christmas school holidays 2026/27 by Land, first and last day', head: ['Land', 'Herbstferien 2026', 'Weihnachtsferien 2026/27'], rows: [
          ['Baden-Württemberg', '26.10. to 30.10., and 31.10.', '23.12. to 09.01.'],
          ['Bayern', '02.11. to 06.11.', '24.12. to 08.01.'],
          ['Berlin', '19.10. to 31.10.', '23.12. to 02.01.'],
          ['Brandenburg', '19.10. to 30.10.', '23.12. to 02.01.'],
          ['Bremen', '12.10. to 24.10.', '23.12. to 09.01.'],
          ['Hamburg', '19.10. to 30.10.', '21.12. to 01.01.'],
          ['Hessen', '05.10. to 17.10.', '23.12. to 12.01.'],
          ['Mecklenburg-Vorpommern', '15.10. to 24.10.', '21.12. to 02.01.'],
          ['Niedersachsen', '12.10. to 24.10.', '23.12. to 09.01.'],
          ['Nordrhein-Westfalen', '17.10. to 31.10.', '23.12. to 06.01.'],
          ['Rheinland-Pfalz', '05.10. to 16.10.', '23.12. to 08.01.'],
          ['Saarland', '05.10. to 16.10.', '21.12. to 31.12.'],
          ['Sachsen', '12.10. to 24.10.', '23.12. to 02.01.'],
          ['Sachsen-Anhalt', '19.10. to 30.10.', '21.12. to 02.01.'],
          ['Schleswig-Holstein', '12.10. to 24.10.', '21.12. to 06.01.'],
          ['Thüringen', '12.10. to 24.10.', '23.12. to 02.01.']
        ] },
        { kind: 'source', html: 'Source: Kultusministerkonferenz, Ferien im Schuljahr 2026/2027, Stand 09.10.2025, which gives the first and last day of each holiday. The KMK agrees the summer holidays years ahead; every other holiday is set by the Land itself. Schleswig-Holstein has special rules for Sylt, Föhr, Amrum, Helgoland and the Halligen.' },
        { kind: 'p', mt: true, html: 'Read the Bayern row and you will see that Bavarian children are on their autumn holidays this very week, 2 to 6 November 2026, while the Hessen break ended on 17 October. Christmas runs from 21 or 24 December to anywhere between 31 December and 12 January. Online classes simply carry on through all of it. Families who travel can pause, and families who stay home often find a holiday week the easiest time to start, when a child is rested and curious.' },
        { kind: 'p', html: 'The legal school year in Germany starts on 1 August and ends on 31 July, the KMK says, with six weeks of summer holidays somewhere between mid June and mid September depending on the Land. Our year does not have that shape. A child can start in any month, and the course picks up from wherever they are.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting used to video',
    h2: 'How a child settles into online lessons',
    lede: 'Our own description of the first weeks, based on how most children respond. Some move faster, a few need longer, and that is fine.',
    table: { caption: 'The first six weeks online (ours)', head: ['Week', 'What usually happens', 'What the mentor looks for'], rows: [
      ['1', 'Finding the mute button, learning names, a first moving sprite', 'Can the child hear clearly and share a screen?'],
      ['2', 'Following along on their own screen without waiting to be told', 'Does the child try before asking?'],
      ['3', 'Answering a question out loud in English, in a short sentence', 'Is the child relaxed on camera?'],
      ['4', 'Fixing a small bug while the group watches', 'Does the child explain what they changed?'],
      ['5 to 6', 'Showing a finished game and taking a question about it', 'Is the child proud of something they made?']
    ] },
    left: { h3: 'For parents', ps: [
      'The best sign is not a perfect game. It is the week your child stops asking you to sit with them.',
      'If week 3 feels slow because of English, tell us. The mentor can slow down, or a one-to-one plan can take the pressure off.'
    ] },
    right: { h3: 'For children', ps: [
      'If you cannot hear, say so straight away. Everyone has had a crackly microphone.',
      'When you share your screen, the mentor sees your mistakes. That is the point: they can only help with what they can see.'
    ] }
  },

  catalogue: {
    eyebrow: 'Also taught online',
    h2: 'Nine more online courses for children in Germany',
    lede: 'Each one is a live video class in English, taught by one mentor from first lesson to last.',
    bands: [
      { num: 'I', h3: 'First steps on screen', sub: 'Ages 6 to 12', courses: [
        { code: 'COK / FIRST / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning for young thinkers', blurb: 'Logic games on video for 6 to 9 year olds, a gentle first online class.' },
        { code: 'COK / FIRST / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving for kids', blurb: 'Step-by-step thinking, practised out loud with a mentor.' },
        { code: 'COK / FIRST / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Vibe coding for kids', blurb: 'Scratch and simple AI ideas for 8 to 12, with the child doing the thinking.' }
      ] },
      { num: 'II', h3: 'Games over video', sub: 'Ages 7 to 14', courses: [
        { code: 'COK / GAME / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Scripting real Roblox games in Luau while the mentor watches the screen.' },
        { code: 'COK / GAME / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Code that builds inside Minecraft, from blocks to text.' },
        { code: 'COK / GAME / 03', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Godot game development', blurb: 'A real game engine for older children ready for more.' }
      ] },
      { num: 'III', h3: 'Making and maths', sub: 'Ages 8 to 15', courses: [
        { code: 'COK / MAKE / 01', slug: 'kids-ai-web-development-course', title: 'Websites for kids', blurb: 'A first web page, built and shown live to the group.' },
        { code: 'COK / MAKE / 02', slug: 'cpp-programming-for-kids-course', title: 'C++ for kids', blurb: 'Puzzles and small games in a second real language, 9 to 12.' },
        { code: 'COK / MAKE / 03', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Number sense on video for children of 5 to 10.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Booking and rhythm',
    h2: 'How families in Germany fit online classes into the week',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Early afternoon', l: 'For children home from Grundschule by lunchtime.' },
      { time: 'Late afternoon', l: 'After Hort, sport or homework, before dinner.' },
      { time: 'Weekend', l: 'A calm Saturday or Sunday slot, often easiest for under-8s.' }
    ],
    cells: [
      { h3: 'Same link', p: 'One class link that stays the same all term.' },
      { h3: 'Same mentor', p: 'The face on screen does not change from week to week.' },
      { h3: 'Two a week', p: 'About an hour each, so nothing is forgotten between lessons.' },
      { h3: 'Short notes', p: 'A few lines to parents after each lesson.' },
      { h3: 'Catch-ups', p: 'A missed lesson is made up, not lost.' },
      { h3: 'Pause any month', p: 'Stop for a trip and come back to the same group.' }
    ]
  },

  projectsH2: 'Built in online lessons',
  projectsLede: 'Everything below was made by our students in live video classes. The <a class="ag-inline-link" href="/student-labs">student labs</a> page collects many more.',
  reviewsLede: 'Families\' own Google reviews, quoted unchanged.',

  fees: {
    h2: 'What online classes cost for families in Germany',
    lede: 'You pay by the month, and a month is eight live lessons. On this page the fee appears in euro, calculated with the European Central Bank reference rate; the checkout then charges US dollars and your card provider converts them, so the euro on your statement may not match to the cent.',
    free: ['One free live lesson on video', 'The mentor checks sound, screen and level', 'No card asked for'],
    group: ['A class of fifteen to twenty children', 'The same mentor all year', 'Two lessons a week, about an hour each', 'Monthly, cancel for the next month any time'],
    one: ['Private lessons on video', 'Your child\'s own projects and speed', 'Times arranged around your family']
  },

  faq: {
    eyebrow: 'Questions from parents',
    h2: 'Online coding classes for kids in Germany: questions',
    items: [
      { q: 'Are the classes in German?', a: 'No. Every lesson is live and in English; we do not offer German-language teaching. Mentors keep their English simple, show each step on screen, and adapt to each child\'s pace and accent, so a child with some school English can follow.' },
      { q: 'Is an online class as good as one in a room?', a: 'For coding, often better. The child\'s own screen is shared, so the mentor sees exactly what they typed, and nobody can drift at the back. What matters is a live mentor and a small enough group, not the building.' },
      { q: 'What does my child need at home?', a: 'A laptop or desktop with a keyboard, a headset with a microphone, a steady internet connection and a quiet table. No special software is needed at the start, and no account of the child\'s own.' },
      { q: 'Can a six year old learn coding online?', a: 'Yes, with short lessons and a parent nearby for the first few weeks to help with logging in. Six year olds start in Scratch, where blocks are dragged rather than typed, which works well over video.' },
      { q: 'When are the lessons in German time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. A Saturday class at 11:30 in Germany is 16:00 for the mentor until 28 March 2027 and 15:00 after it.' },
      { q: 'What happens when the clocks change in March?', a: 'Your class stays at the same German time. Germany moves to summer time on 28 March 2027 and India does not change, so the mentor starts an hour earlier in their own day. You do not need to do anything.' },
      { q: 'Do classes stop in the school holidays?', a: 'No. Every Land has its own autumn, Christmas and Easter dates, so classes run all year. If you travel, tell us and we pause your place or arrange catch-ups.' },
      { q: 'Are lessons recorded?', a: 'Lessons are live and happen once. Your child is not asked to learn from a recording; if a lesson is missed, the mentor arranges a catch-up instead.' },
      { q: 'How is the fee shown and charged?', a: 'We show the monthly fee in euro, worked out with the European Central Bank reference rate. The checkout charges US dollars and your card provider converts them, so the statement can differ by a little. The first lesson is free.' },
      { q: 'What if our internet drops in the middle of a class?', a: 'Your child rejoins with the same link and the mentor fills them in. If a whole lesson is lost, we arrange a catch-up with the same mentor.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Pages that go deeper on parts of this one.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'The hub for every Germany page.' },
      { href: '/coding-classes-for-kids-germany', label: 'Coding for kids in Germany', p: 'School computing Land by Land.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our teaching method in full.' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes', p: 'The first tool for young children.' },
      { href: '/python-for-9-year-olds', label: 'Python at nine', p: 'When typed code can begin.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Age limits in each tool\'s own terms.' }
    ]
  },

  start: {
    h2: 'Try a free live lesson',
    lede: 'The free lesson doubles as a technical check: the mentor makes sure sound and screen sharing work, tries a small first program with your child, and then suggests a group or one to one.',
    readFirst: 'For a fuller picture, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or open <a class="ag-inline-link" href="/courses">the course list</a> to see what each syllabus covers.',
    note: 'Lessons are live on video and in English, with mentors in India. Questions about setup are easiest on WhatsApp.',
    formNote: 'No card and no commitment.'
  },

  footer: {
    cols: [
      { h4: 'For children', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch classes' },
        { href: '/python-for-9-year-olds', label: 'Python at nine' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-for-kids-germany', label: 'Coding for kids in Germany' },
        { href: '/coding-classes-for-kids-berlin', label: 'Kids in Berlin' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Convert the moment, not the clock'
  },

  personalityCss: `
.ag-root.ag-cok .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-cok .ag-capsule { border-left-width: 4px; border-radius: 6px; }
.ag-root.ag-cok .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-cok .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-cok .ag-code-head span { letter-spacing: 0.04em; }
`,

  dossier: {
    curriculumAuthority: 'Einheiten- und Zeitgesetz para 4 and Sommerzeitverordnung para 2 (gesetze-im-internet.de); KMK, Ferien im Schuljahr 2026/2027 (Stand 09.10.2025) and Eurydice dossier; all read 2 and 3 November 2026.',
    localProject: 'Convert the moment, not the clock: an original Python project in which a hand-written rule (add four and a half hours) is right this winter and wrong after 28 March 2027, zoneinfo fixes it, and a walk through the night of 25 October 2026 shows the hour the Sommerzeitverordnung says happens twice (2A and 2B). Lesson family: a moment is not a clock reading.',
    requiredMentions: ['Saturday 11:30 in Germany is 16:00 in India', '2027-04-03 11:30 in Germany is 15:00 in India', '01:00 UTC is 02:00 CET in Germany', 'Die Stunde von 2 Uhr bis 3 Uhr erscheint dabei zweimal', 'die koordinierte Weltzeit unter Hinzufügung einer Stunde', 'Weihnachtsferien 2026/27', 'the law even names the two copies 2A and 2B', 'Convert the moment, not the clock'],
    sources: [
      { claim: 'German legal time is UTC+1, summer time UTC+2.', url: 'https://www.gesetze-im-internet.de/me_einhg/__4.html' },
      { claim: 'Summer time starts and ends on the last Sundays of March and October; the hour 2 to 3 appears twice (2A, 2B).', url: 'https://www.gesetze-im-internet.de/sozv/__2.html' },
      { claim: 'Autumn and Christmas holidays 2026/27 for all 16 Länder; KMK sets summer, Länder the rest.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'School year 1 August to 31 July; six weeks of summer holidays.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Eurydice/DE/dossier_de_ebook.pdf' }
    ],
    rejectedClaims: [
      'Winter and spring holiday columns for Bayern: the raw table row is ambiguous between the Winter and Ostern/Frühjahr columns, so only autumn and Christmas are shown.',
      'Naming a video platform: not needed and not checked, so not named.',
      'German-language teaching: we teach in English only, and the page says so.',
      'Any affiliation with the KMK or a Land ministry: none.'
    ]
  }
};
