'use strict';
// Best online coding classes in Germany: how to choose (ag- pillar, Germany cluster row DE009, hub group 'guide').
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md. Owner 2026-11-02: classes are live, in English only, with
// mentors who match the learner's pace and accent; pages show euro, checkout charges USD.
// Angle: "best" as a set of criteria, never a ranking. No provider is named and no other provider's price appears.
// Eight questions a family in Germany can put to any online coding class: live or recorded, teaching language, group
// size, class times across the clock change, age rules for AI tools, fit with the Land's Informatik, trial class,
// and how stopping works. Each criterion tied to a German fact where one exists.
// Sources (raw, quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md and facts-geo/, fetched
// 2 Nov 2026; copies in src-pages/best-online-coding-classes-germany/):
//  - EinhZeitG para 4 (facts-geo timezone.tsv, src/time/gii-einhzeitg.txt): "Die gesetzliche Zeit ist die
//    mitteleuropäische Zeit." MEZ = UTC+1; MESZ = UTC+2. SoZV para 2: summer time from the last Sunday in March to the
//    last Sunday in October; 2027 summer time starts 28 March 2027; 2026 ended 25 October 2026.
//  - GI Informatik-Monitor 2026/27: six Länder without compulsory Informatik for all (fact 92); SWK recommends six
//    weekly hours by 2030, four short-term (93); Bremen from 2027/28, two to four hours (94); Rheinland-Pfalz from
//    2028/29, four hours (95); no binding plans in Berlin, Brandenburg, Hessen (96); about 15% in the Oberstufe (97);
//    Hamburg four hours since 2025/26 (76); NRW grades 5 and 6 (80); Niedersachsen grades 9 and 10 since 2024/25 (79);
//    Mecklenburg-Vorpommern grades 5 to 10, at least one hour each (78); MV, Saarland, Thüringen meet six hours (90);
//    BW, Hamburg, Sachsen, Schleswig-Holstein meet four (91).
//  - AGIS homepage: "nutzen Englisch als gemeinsame Sprache im Unterricht", children from up to 65 nations (250).
//  - KMK Eurydice dossier: SESB Berlin "ein Netzwerk von bilingualen Zügen an 33 Schulen mit ca. 6.000 Schülerin- nen
//    und Schülern" (256).
//  - BWKI Teilnahmebedingungen: projects in German or English (213); under 18 a parent must agree.
//  - AI tool ages: content/ai-tool-age-audit.json (audited 15 July 2026, vendor quotes): ChatGPT 13 with a parent's
//    permission under 18; Claude 18 or the local consent age, whichever is higher; Gemini 16 in Germany; Microsoft
//    Copilot 18 in Germany (Microsoft's own country table); Perplexity 13 with a guardian accepting the terms.
// Our own work (scratchpad de/w/G2/bco/v1.py, v2.py, v3.py, python3 -I): v1 adds a fixed 4 h 30 and prints
// "2027-03-25 16:45 in Germany is 21:15 in India" and "2027-04-01 16:45 in Germany is 21:15 in India"; v2 uses zoneinfo
// and prints "2027-03-25 16:45 CET is 21:15 in India" and "2027-04-01 16:45 CEST is 20:15 in India"; v3 prints
// "2027-03-25 India 21:00 is 16:30 in Germany" and "2027-04-01 India 21:00 is 17:30 in Germany".
// Lesson family: a time without its zone is not a moment; let the time-zone database do the clock change.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'from datetime import datetime, timedelta',
  '',
  '# A class at 16:45 German time, the week before and the week after the clocks change',
  'classes = ["2027-03-25 16:45", "2027-04-01 16:45"]',
  '',
  'for text in classes:',
  '    german = datetime.strptime(text, "%Y-%m-%d %H:%M")',
  '    india = german + timedelta(hours=4, minutes=30)',
  '    print(text, "in Germany is", india.strftime("%H:%M"), "in India")'
].join('\n');

const V2 = [
  'from datetime import datetime',
  'from zoneinfo import ZoneInfo',
  '',
  'classes = ["2027-03-25 16:45", "2027-04-01 16:45"]',
  'berlin = ZoneInfo("Europe/Berlin")',
  'kolkata = ZoneInfo("Asia/Kolkata")',
  '',
  'for text in classes:',
  '    german = datetime.strptime(text, "%Y-%m-%d %H:%M").replace(tzinfo=berlin)',
  '    india = german.astimezone(kolkata)',
  '    print(text, german.tzname(), "is", india.strftime("%H:%M"), "in India")'
].join('\n');

const V3 = [
  'for day in ["2027-03-25", "2027-04-01"]:',
  '    slot = datetime.strptime(day + " 21:00", "%Y-%m-%d %H:%M").replace(tzinfo=kolkata)',
  '    print(day, "India 21:00 is", slot.astimezone(berlin).strftime("%H:%M"), "in Germany")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'guide', label: 'Choosing an online coding class' },
  slug: 'best-online-coding-classes-germany',
  code: 'bco',
  accent: '#733958',
  accentRationale: 'Choosing a class: a muted plum #733958, a considered, undecided colour for a page about weighing options, kept apart from the competitions mulberry, the hub fir green and the Abitur slate; contrast on the paper #FBF8F2 above 7:1 and above 4.5 on every paper tint',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Best online coding classes in Germany',
  title: 'Best Online Coding Classes in Germany: How to Choose',
  description: 'How to choose the best online coding class in Germany: live or recorded, teaching language, group size, class times, AI age rules, trial and stopping.',
  ogDescription: 'Eight questions to ask any online coding class before a family in Germany signs up, with the German facts behind each one: the clock change, the Informatik rules of the Länder and the age limits of AI tools.',
  twitterDescription: 'What makes an online coding class right for a learner in Germany: eight questions, no rankings.',
  pageName: 'Best Online Coding Classes in Germany',
  webPageDescription: 'A buyer\'s guide for families in Germany choosing an online coding class: eight criteria with the official facts behind them (Einheitenzeitgesetz, GI Informatik-Monitor 2026/27, AI vendors\' age terms), a Python project on class times across the 2027 clock change, and a checklist for the trial class. No provider is ranked.',
  courseDescription: 'Live online coding classes in English for children, teenagers and adults in Germany: Scratch, Python and AI, in a group of fifteen to twenty or one to one, with one regular mentor and a free first class.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'How to choose',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#criteria', label: 'Questions' },
    { href: '#language', label: 'Language' },
    { href: '#school', label: 'Schools' },
    { href: '#times', label: 'Times' },
    { href: '#trial', label: 'Trial' }
  ],
  eyebrow: 'Germany &middot; Choosing a coding class &middot; Ages 6 and up',
  h1: 'The best online coding classes in Germany: how to choose',
  lede: 'Search for online coding classes from Germany and you find German schools, global platforms, video libraries, holiday camps and private tutors, all promising the same thing. Lists that rank them rarely say what was measured. This page does not rank anyone, including us. It gives eight questions you can ask any provider, the German facts that make each question matter, and what a good answer sounds like.',
  secondaryCta: { href: '#criteria', label: 'Read the eight questions' },
  wa: 'Hello Modern Age Coders, we live in Germany and are comparing online coding classes. Could we book a free first class in English to see how yours work?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; this guide ranks no provider, including us',
  spec: [
    ['Questions', 'Eight, for any provider'],
    ['Facts from', 'German law and the GI monitor'],
    ['Ranking', 'None, by design'],
    ['Our format', 'Live, in English'],
    ['Group size', 'Fifteen to twenty, or one'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'The best online coding class for a learner in Germany is live rather than recorded, taught in a language the learner thinks in, small enough for the mentor to read their code, timed for German afternoons through the clock change, honest about AI tool age limits, and easy to try and to stop. Modern Age Coders teaches live classes in English, in a group or one to one, with a free first class.',

  picks: {
    eyebrow: 'If you want to try ours',
    h2: 'Three courses where families in Germany usually start',
    lede: 'Judge them against the eight questions like any other provider. One for younger children, one for pupils whose Land now teaches Informatik, one for teenagers ready for typed code and AI.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'BCO / 01', title: 'Python and AI for kids', note: 'Ages 9 to 12. Typed Python through games, turtle drawings and small smart projects, and a first look at how AI learns from examples, with no adult-only tools.' },
      { course: 'informatik-companion-course-klasse-5-10', code: 'BCO / 02', title: 'Informatik Companion, Klasse 5 to 10', note: 'For pupils of 10 to 16 whose timetable now includes Informatik, or who wish it did: sorting and searching, data, small programs, explained once more in English and practised at length.' },
      { course: 'python-complete-masterclass-teens', code: 'BCO / 03', title: 'Python for teens', note: 'Ages 13 to 18. From variables to files, classes and small data projects, the depth that a single weekly school hour cannot reach.' }
    ]
  },

  sections: [
    {
      id: 'criteria',
      eyebrow: 'The checklist',
      h2: 'What makes an online coding class good for a learner in Germany?',
      lede: 'Price and star ratings are the first things a comparison shows and the least useful. These eight questions predict far better whether a child is still coding, and enjoying it, six months from now.',
      body: [
        { kind: 'table', numCols: [], caption: 'Eight questions to put to any online coding provider, and what a good answer sounds like (our checklist)', head: ['Question', 'A good answer', 'Why it matters in Germany'], rows: [
          ['1. Is every class live?', 'Yes, with a teacher who sees and talks about the learner\'s own code', 'Recorded courses cannot answer the question a child gets stuck on'],
          ['2. In which language is it taught?', 'One language, stated plainly before you pay', 'German, English and bilingual classes all exist; mixing them is confusing'],
          ['3. How many learners per teacher?', 'A clear number, and a one-to-one option', 'Group size decides how often the teacher reads each child\'s screen'],
          ['4. When are the classes in German time?', 'Times given in your clock, correct after the clock change', 'Germany moves between UTC+1 and UTC+2; many teachers abroad do not'],
          ['5. Which AI tools will my child use?', 'Only tools whose terms allow your child\'s age', 'Several AI tools set 16 or 18 as the minimum age in Germany'],
          ['6. How does it fit school Informatik?', 'The provider knows what your Land teaches and when', 'Informatik is compulsory in some Länder and absent in others'],
          ['7. Is there a trial, and what happens in it?', 'A real lesson at the child\'s level, with no card required', 'A sales call is not a class'],
          ['8. How do we stop?', 'In writing, simply, without a long fixed term', 'Families move, timetables change, interests shift']
        ] },
        { kind: 'source', html: 'The checklist and the "good answers" are ours. The German facts behind questions 4 to 6 are sourced in the sections below.' },
        { kind: 'two', mt: true,
          leftH3: 'What the checklist leaves out on purpose',
          left: [
            'It has no row for the number of courses on offer, the size of a video library or the number of countries a company works in. None of those tells you whether your child will learn. A provider with three good courses and a teacher who knows your child is worth more than one with three hundred courses and a different stranger every week.',
            'It also has no row for awards, badges and logos. They are easy to put on a website and hard for a parent to check, and none of them shows you how a teacher reacts when your child is stuck. A trial class does.'
          ],
          rightH3: 'How to use it',
          right: [
            'Write the eight questions down and ask each provider the same ones, by email or on a call. Notice which answers come quickly and plainly and which ones turn into a sales pitch.',
            'Then book a trial with the two providers whose answers you liked, and let your child decide between them. A child who looks forward to the second lesson has told you more than any comparison table.'
          ] }
      ]
    },
    {
      id: 'live',
      eyebrow: 'Question 1',
      h2: 'Are live online coding classes better than recorded courses?',
      lede: 'Recorded courses are cheaper to make and to buy, and for a self-driven adult they can work. For most children they stop working at the first error message.',
      body: [
        { kind: 'two',
          leftH3: 'Where recorded lessons fail',
          left: [
            'Programming is mostly getting stuck. A missing bracket, a variable spelled two ways, a loop that never ends: each one needs a person who can look at this child\'s code, now, and ask the right question. A video can show how the teacher\'s program works. It cannot see why the child\'s does not.',
            'A recorded course also has no way to notice that a learner copied the answer instead of understanding it. That matters more than ever now that an AI chat can produce a working program in seconds.'
          ],
          rightH3: 'What to look for in a live class',
          right: [
            'The test is simple: during a live class, does the teacher look at the learner\'s own screen or code and talk about it? If the class is a lecture on video with the cameras off, it is a recorded course that happens to be on time.',
            'Ask how many learners share one teacher, and how a learner gets help when stuck in the middle of a task. Every one of our classes is live, with a mentor who reads the learner\'s code, in a group of fifteen to twenty or one to one.'
          ] }
      ]
    },
    {
      id: 'language',
      eyebrow: 'Question 2',
      h2: 'Should an online coding class for a child in Germany be in German or in English?',
      lede: 'Either can be right. What is never right is finding out in the third lesson. We teach in English only, live, and we say so first.',
      body: [
        { kind: 'two',
          leftH3: 'Who learns well in English',
          left: [
            'Families for whom English is the language of school, home or work: pupils at international schools, which the association of international schools in Germany (AGIS) describes as bringing together children from up to 65 nations with English as the shared language of lessons; families who moved to Germany for a job; pupils in bilingual streams such as Berlin\'s Staatliche Europa-Schule, which the KMK describes as a network of bilingual streams at 33 schools with about 6,000 pupils.',
            'And many pupils at ordinary German schools, who get two subjects for the price of one hour: they practise programming and they practise English. Python\'s keywords, if, while, def and return, are English words in every country.'
          ],
          rightH3: 'Who should choose German',
          right: [
            'A child who is still a beginner in English and finds instructions in it tiring. Learning two hard things at once can be motivating for some children and exhausting for others; the trial class shows which.',
            'Our mentors teach in English and adapt to the learner: they speak clearly, slow down, rephrase rather than repeat, and get used to each learner\'s accent. German is not a language we teach in, and we would rather lose a family at this question than after a month.'
          ] },
        { kind: 'p', mt: true, html: 'English also travels beyond the classroom. The Bundeswettbewerb Künstliche Intelligenz, a national AI competition for pupils in Germany, accepts projects in German or in English, according to its rules, and the documentation that programmers use every day is written in English first.' }
      ]
    },
    {
      id: 'size',
      eyebrow: 'Question 3',
      h2: 'How big should an online coding group be?',
      lede: 'There is no single right number, but there should always be a stated one. A provider who cannot tell you how many children share a teacher is telling you something.',
      body: [
        { kind: 'three', cells: [
          { h3: 'One to one', p: 'The mentor follows one learner\'s pace completely. Best suited to a learner preparing for something specific, a learner who is shy in groups, or an adult with a project of their own.' },
          { h3: 'A group', p: 'Learners see how others solve the same problem, explain their ideas aloud and keep each other going. It suits children who enjoy company and families who want regular classes at a lower monthly fee.' },
          { h3: 'What to ask', p: 'How are learners placed into a group: by age, by level, or both? What happens if a learner is clearly faster or slower than the rest? Can they move?' }
        ] },
        { kind: 'p', mt: true, html: 'Our groups have fifteen to twenty learners, placed by age and level, with one regular mentor; the alternative is one to one. Learners who outgrow a group move up. We say the number here because it is the first thing a careful parent should ask anyone.' }
      ]
    },
    {
      id: 'school',
      eyebrow: 'Question 6',
      h2: 'Does my child get coding at school in Germany?',
      lede: 'It depends on the Land, the school type and the Klasse, and it is changing every year. A good provider asks where you live before suggesting a course.',
      body: [
        { kind: 'table', numCols: [], caption: 'Compulsory Informatik in Sekundarstufe I, school year 2026/27', head: ['Situation', 'Länder', 'What the monitor reports'], rows: [
          ['Meets the six-hour recommendation', 'Mecklenburg-Vorpommern, Saarland, Thüringen', 'In Mecklenburg-Vorpommern, at least one weekly hour in every grade from 5 to 10'],
          ['Meets the four-hour recommendation', 'Baden-Württemberg, Hamburg, Sachsen, Schleswig-Holstein', 'In Hamburg, four weekly hours at Stadtteilschulen and Gymnasien since 2025/26'],
          ['Compulsory in some grades', 'Bayern, Niedersachsen, Nordrhein-Westfalen', 'NRW: grades 5 and 6; Niedersachsen: grades 9 and 10 since 2024/25'],
          ['Not compulsory for all pupils', 'Berlin, Brandenburg, Bremen, Hessen, Rheinland-Pfalz, Sachsen-Anhalt', 'Bremen from 2027/28; Rheinland-Pfalz from 2028/29; no binding plans in Berlin, Brandenburg and Hessen']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, national overview and Land pages, read 2 November 2026. The recommendation is the one the monitor cites from the KMK\'s Ständige Wissenschaftliche Kommission: six compulsory weekly hours across Sekundarstufe I by 2030, and four in the short term. The middle row groups the three Länder that appear in neither recommendation list nor the list of six; the details are the monitor\'s.' },
        { kind: 'two', mt: true,
          leftH3: 'What that means for choosing a class',
          left: [
            'A ten year old in Hamburg will meet Informatik at school within a few years; a ten year old in Hessen may never meet it as a compulsory subject. The same online class can be enrichment for one and the only coding lesson for the other.',
            'At the top of school the gap widens. Across Germany, the monitor finds, only about 15 percent of Oberstufe pupils have Informatik as a course in their final two years.'
          ],
          rightH3: 'The question to ask',
          right: [
            'Ask any provider: "My child is in Klasse 6 at a Gymnasium in Niedersachsen. What will the school teach in computing, and how does your course relate to it?" A provider who answers with a list of programming languages and nothing about the school has not understood your situation.',
            'We do not replace school Informatik and we award no German grades. A Land-by-Land table, written in German, is on our <a class="ag-inline-link" href="/informatik-nachhilfe-online">Informatik-Nachhilfe page</a>.'
          ] }
      ]
    },
    {
      id: 'times',
      tint: 'tint',
      eyebrow: 'Question 4',
      h2: 'What time are online coding classes in Germany, and what happens when the clocks change?',
      lede: 'A class time is only useful in your own clock. Many online teachers work from countries that never change their clocks, and that is where the confusion of March and October comes from.',
      body: [
        { kind: 'table', numCols: [], caption: 'Example class times in Germany and the same moment in India, on either side of the 2027 clock change', head: ['In Germany', 'India, until 27 March 2027', 'India, from 28 March 2027'], rows: [
          ['15:15', '19:45', '18:45'],
          ['16:45', '21:15', '20:15'],
          ['Saturday 11:30', '16:00', '15:00'],
          ['Sunday 10:15', '14:45', '13:45']
        ] },
        { kind: 'source', html: 'Germany\'s legal time is set by the Einheitenzeitgesetz: Central European Time, UTC+1, and Central European Summer Time, UTC+2. Under the Sommerzeitverordnung, summer time runs from the last Sunday in March to the last Sunday in October, so it ended on 25 October 2026 and begins again on 28 March 2027. India keeps UTC+5:30 all year. The rows are examples, not a timetable.' },
        { kind: 'two', mt: true,
          leftH3: 'The problem in one sentence',
          left: [
            'India runs four and a half hours ahead of German winter time and three and a half ahead of German summer time, so a class pinned to India time jumps by an hour on a German afternoon twice a year, while a class pinned to German time jumps for the mentor instead.'
          ],
          rightH3: 'What a good provider does',
          right: [
            'It keeps the class at the same German time all year and lets the mentor\'s side move, and it tells you the time in your clock when you book. Our booking page shows demo times in your own time zone, and each class is agreed in German time.'
          ] },
        { kind: 'p', mt: true, html: 'Our students turn that sentence into a program, and the first version contains the very mistake many timetables make.' },
        { kind: 'code', label: 'Version 1: add four and a half hours', lang: 'Python', code: V1, note: 'It prints <code>2027-03-25 16:45 in Germany is 21:15 in India</code> and <code>2027-04-01 16:45 in Germany is 21:15 in India</code>.' },
        { kind: 'p', mt: true, html: 'Both lines say 21:15, and the second one is wrong. On 1 April 2027 Germany is already on summer time, so India is only three and a half hours ahead and the mentor\'s clock reads 20:15. The bug is that <code>german</code> is a time with no zone attached: Python has no idea it belongs to Germany, so it cannot know that Germany changed its clocks on 28 March. Adding a fixed offset bakes one season\'s gap into the program for ever.' },
        { kind: 'code', label: 'Version 2: give each time its zone', lang: 'Python', code: V2, note: 'Now it prints <code>2027-03-25 16:45 CET is 21:15 in India</code> and <code>2027-04-01 16:45 CEST is 20:15 in India</code>. The time-zone database knows the German rule and applies it.' },
        { kind: 'code', label: 'Going further: a slot fixed in India time', lang: 'Python', code: V3, note: 'It prints <code>2027-03-25 India 21:00 is 16:30 in Germany</code> and <code>2027-04-01 India 21:00 is 17:30 in Germany</code>: the same India slot lands an hour later on a German afternoon.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 9 to 11, on paper.</strong> Draw two clocks, Berlin and Kolkata. Move the Berlin clock forward one hour for summer and leave Kolkata alone. How far apart are they now?',
          '<strong>Ages 11 to 14, Python.</strong> Run Version 1, then explain in one sentence why both lines agree. Add the date 2026-10-22, the Thursday before the autumn change, and predict its output before running Version 2.',
          '<strong>Ages 14 and up.</strong> Print every Thursday from January to June 2027 with the India time of a 16:45 German class, and mark the week where it changes.'
        ] },
        { kind: 'source', html: 'The programs and their output are our own work, run with Python 3 on 3 November 2026, using the Europe/Berlin and Asia/Kolkata zones of the standard time-zone database.' }
      ]
    },
    {
      id: 'ai',
      eyebrow: 'Question 5',
      h2: 'Which AI tools may children use in an online coding class in Germany?',
      lede: 'AI now appears in almost every coding course advertisement. The age limits are set by each tool\'s own terms, and several of them are higher in Germany than in other countries.',
      body: [
        { kind: 'table', numCols: [], caption: 'Minimum ages in the vendors\' own terms, as quoted in our AI tool age audit', head: ['Tool', 'Minimum age the vendor states', 'In Germany'], rows: [
          ['ChatGPT (OpenAI)', '13, with a parent\'s or guardian\'s permission under 18', 'The same rule; OpenAI publishes no country table'],
          ['Claude (Anthropic)', '18, or the local consent age if higher', '18'],
          ['Google Gemini', '13, or the applicable age in the country', '16, as recorded in our audit of Google\'s terms'],
          ['Microsoft Copilot', '13, higher in some countries', '18, as recorded in our audit of Microsoft\'s country table'],
          ['Perplexity', '13, with a guardian accepting the terms first', 'The same rule']
        ] },
        { kind: 'source', html: 'Source: the vendors\' terms of use and help pages, quoted word for word in our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a> (audited 15 July 2026). Terms change, so read the current version before signing a child up for any tool.' },
        { kind: 'p', mt: true, html: 'For a family the question is not whether a course mentions AI, but whether it asks a twelve year old to create accounts on tools whose own terms do not allow twelve year olds. In our classes for under-18s we do not use or recommend tools set at 18, and for tools that need a parent\'s permission we ask the parent first. A good class can teach how AI works, with small models the learner builds, without signing a child up anywhere.' },
        { kind: 'p', mt: true, html: 'There is a second question underneath: does the class teach a child to think, or to prompt? A learner who pastes an AI answer they cannot explain has learned to copy. In our classes the learner writes the code and explains it aloud, and AI comes in once they can judge what it produces.' }
      ]
    },
    {
      id: 'trial',
      eyebrow: 'Questions 7 and 8',
      h2: 'What should a trial class show you, and how easy should stopping be?',
      lede: 'The trial is the one moment when you see the product instead of the advertising. Use it well, and settle how stopping works before the first payment, not after.',
      body: [
        { kind: 'ol', items: [
          '<strong>Let your child do the work.</strong> A good trial gives the learner a small task at their level and watches how they think. If your child spends most of the time watching a presentation, it was a sales meeting.',
          '<strong>Listen for questions.</strong> A good teacher asks the learner why their code does something before telling them how to fix it.',
          '<strong>Check the language and the pace.</strong> Could your child follow every instruction? Did the teacher slow down when needed?',
          '<strong>Ask for a recommendation in writing.</strong> Which course, which group, which times in German time, and why.',
          '<strong>Ask how stopping works.</strong> Is the plan monthly? How much notice is needed? Is it written down somewhere you can read before paying?'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Our trial',
          left: [
            'The first class is free and needs no card. The mentor gives a small task at the learner\'s level, sees how they reason and how comfortable they are in English, and then suggests a course and a group, or one to one.'
          ],
          rightH3: 'Our terms',
          right: [
            'Plans are monthly and can be stopped in any month. Our <a class="ag-inline-link" href="/refund">refund page</a> sets out the rules in full, and it is the page that counts if anything here seems to differ.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Scoring your shortlist',
    h2: 'A simple way to compare two or three providers',
    lede: 'Our suggestion: score each provider from 0 to 2 on each question after its trial. It is crude, and that is the point: it keeps the decision on what your child experienced.',
    table: { caption: 'A scoring sheet for your own shortlist (ours)', head: ['Question', '0 points', '2 points'], rows: [
      ['Live teaching', 'Videos, or cameras off', 'The teacher worked with my child\'s code'],
      ['Language', 'Unclear or mixed', 'One language, said plainly, and my child followed it'],
      ['Group size', 'No number given', 'A stated number and a one-to-one option'],
      ['Times', 'Times only in another country\'s clock', 'Times in German time, correct across the clock change'],
      ['AI and age', 'Accounts on tools above my child\'s age', 'No tool above my child\'s age']
    ] },
    left: { h3: 'For parents', ps: [
      'Add the scores for questions 6 to 8 the same way: school fit, the trial itself, and how easy it is to stop.',
      'If two providers tie, ask your child which teacher they would rather see again.'
    ] },
    right: { h3: 'For learners', ps: [
      'In a trial, try one thing on your own before you ask for help. You will learn more about the teacher from how they help than from what they say first.',
      'If you did not understand an instruction, say so. A good teacher will say it differently.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses to weigh against the checklist',
    lede: 'Every one is taught live in English by a regular mentor, either to a group or to one learner alone.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'BCO / KIDS / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Scratch games and stories for first-time coders.' },
        { code: 'BCO / KIDS / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Coding ideas inside a world children already know.' },
        { code: 'BCO / KIDS / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How AI learns, with no adult-only tools.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'BCO / TEENS / 01', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur', blurb: 'Java or Python for the Oberstufe.' },
        { code: 'BCO / TEENS / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'Building small models, not only using them.' },
        { code: 'BCO / TEENS / 03', slug: 'full-stack-web-development-teens-masterclass', title: 'Web development', blurb: 'Pages, apps and the code behind them.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Ages 18 and up', courses: [
        { code: 'BCO / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python from zero', blurb: 'A full path for adult beginners.' },
        { code: 'BCO / ADULT / 02', slug: 'python-ai-automation-masterclass-college', title: 'Python automation', blurb: 'Scripts that save time at work.' },
        { code: 'BCO / ADULT / 03', slug: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', title: 'AI coding agents', blurb: 'Working with Codex and Claude Code, for adults only.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How our classes run',
    h2: 'How our live classes answer the eight questions',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Classes are booked in German time, and the time stays put when the clocks change.',
    slots: [
      { time: 'Weekdays', l: 'German afternoons and early evenings, after school or work.' },
      { time: 'Weekends', l: 'Saturday and Sunday late mornings.' },
      { time: 'One to one', l: 'A time you agree with your mentor.' }
    ],
    cells: [
      { h3: 'Question 1: live', p: 'Every class is held in real time; none is a video.' },
      { h3: 'Question 2: English', p: 'Taught in English only, clearly and at the learner\'s pace.' },
      { h3: 'Question 3: size', p: 'Fifteen to twenty learners, or one to one.' },
      { h3: 'Question 4: times', p: 'Agreed in German time, all year.' },
      { h3: 'Question 5: AI', p: 'No tool above the learner\'s age.' },
      { h3: 'Questions 7 and 8', p: 'Free first class; monthly plans you can stop.' }
    ]
  },

  projectsH2: 'Work our students have built',
  projectsLede: 'Judge a provider by what its learners make. A few projects are below, and the <a class="ag-inline-link" href="/student-labs">student labs</a> page has many more.',
  reviewsLede: 'What parents and students wrote on Google, unedited.',

  fees: {
    h2: 'What our classes cost in Germany',
    lede: 'Each monthly fee covers eight live classes. We display it in euro, converted at the European Central Bank\'s reference rate, but the charge is made in US dollars, which your bank converts on the day; the amount on your statement can therefore differ slightly from the figure here.',
    free: ['A free first class at the learner\'s level', 'A written suggestion of course and group', 'No card needed'],
    group: ['Fifteen to twenty learners, placed by level', 'One regular mentor', 'Two live classes a week', 'Monthly, stop in any month'],
    one: ['One learner, one mentor', 'Their own pace and plan', 'Times agreed in German time']
  },

  faq: {
    eyebrow: 'Families in Germany ask',
    h2: 'Choosing an online coding class in Germany: common questions',
    items: [
      { q: 'What is the best online coding class in Germany?', a: 'The one that passes the eight questions for your child: live teaching, a language your child follows, a stated group size, times in German time across the clock change, no AI tools above your child\'s age, a sense of what the school teaches, a real trial and a simple way to stop. We do not rank providers, including ourselves.' },
      { q: 'Are the classes in German?', a: 'No. Our classes are live and taught in English only, by mentors who match the learner\'s pace and accent. We do not offer lessons in German, and we say so before any trial so that no family is surprised.' },
      { q: 'Are live classes worth it compared with recorded courses?', a: 'For most children, yes. Learning to code means getting stuck, and a live teacher can look at a child\'s own code and ask the question that unblocks it. A recorded video cannot see the mistake the learner made.' },
      { q: 'What time are classes for families in Germany?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Classes are agreed in German time and stay there when Germany changes between UTC+1 and UTC+2.' },
      { q: 'How many children are in a group?', a: 'Our groups have fifteen to twenty learners, placed by age and level, with one regular mentor. The alternative is one to one, where the mentor teaches only your child.' },
      { q: 'Can children use ChatGPT in an online coding class?', a: 'OpenAI\'s terms allow ChatGPT from 13 with a parent\'s or guardian\'s permission under 18. Claude requires users to be 18, and Google and Microsoft set higher minimum ages in Germany for Gemini and Copilot. In our classes for under-18s we never use tools set at 18.' },
      { q: 'Is coding taught at German schools?', a: 'In some Länder and some grades. In its 2026/27 monitor the Gesellschaft für Informatik lists Berlin, Brandenburg, Bremen, Hessen, Rheinland-Pfalz and Sachsen-Anhalt as the six Länder where Informatik is not yet a compulsory subject for every pupil. Hamburg, by contrast, requires four weekly hours across grades 7 to 10.' },
      { q: 'At what age should a child start an online coding class?', a: 'Many children start happily at 6 or 7 with block coding in Scratch, and move to typed Python from about 9. What matters more than age is whether the child enjoys puzzles and can concentrate for an hour with a mentor.' },
      { q: 'Is there a free trial?', a: 'Yes. You pay nothing for the first class and give no card details. It is a real lesson at the learner\'s level, after which the mentor suggests a course and a group or one-to-one plan.' },
      { q: 'Which currency do I pay in?', a: 'Fees are shown in euro at the European Central Bank reference rate; the payment is taken in US dollars and converted by your bank, so the statement amount can differ slightly.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Further reading for families in Germany who are still deciding.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Our main page for families in Germany.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens inside a live class.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Age limits for 124 AI tools, quoted.' },
      { href: '/coding-milestones-by-age', label: 'Coding milestones by age', p: 'What learners can do at each age.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Each Land\'s Informatik rule, in German.' },
      { href: '/refund', label: 'Refund policy', p: 'How stopping and refunds work.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Treat it as your trial: your child gets a small task at their level, the mentor watches how they think and then puts a course, a group and German class times in writing for you to compare.',
    readFirst: 'Before you book, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a live class step by step, and <a class="ag-inline-link" href="/courses">the course list</a> has every syllabus.',
    note: 'Live online classes in English, with mentors based in India. Ask us anything on WhatsApp first if you prefer.',
    formNote: 'No card, no obligation, and nothing to pay for the first class.'
  },

  footer: {
    cols: [
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin' }
      ] },
      { h4: 'Before you choose', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/refund', label: 'Refund policy' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'A time needs its zone'
  },

  personalityCss: `
.ag-root.ag-bco .ag-hero h1 { letter-spacing: -0.011em; max-width: 22ch; }
.ag-root.ag-bco .ag-capsule { border-left-width: 6px; }
.ag-root.ag-bco .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-bco .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-bco .ag-steps li { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'Einheitenzeitgesetz para 4 and Sommerzeitverordnung para 2 (gesetze-im-internet.de); Gesellschaft für Informatik, Informatik-Monitor 2026/27; AGIS homepage; KMK Eurydice dossier (SESB); BWKI Teilnahmebedingungen; vendors\' terms as quoted in content/ai-tool-age-audit.json (audited 15 July 2026). Read 2 November 2026. Checklist, scoring sheet and Python project our own.',
    localProject: 'A time needs its zone: an original Python project that converts a 16:45 German class to India time on 25 March and 1 April 2027; a fixed 4 h 30 offset prints 21:15 both times, zoneinfo prints 21:15 (CET) and 20:15 (CEST), and an India 21:00 slot lands at 16:30 and 17:30 German time. Lesson family: a time without its zone is not a moment.',
    requiredMentions: ['2027-04-01 16:45 in Germany is 21:15 in India', '2027-04-01 16:45 CEST is 20:15 in India', '2027-04-01 India 21:00 is 17:30 in Germany', 'A time needs its zone', 'Eight questions to put to any online coding provider', 'up to 65 nations', 'about 6,000 pupils', 'Meets the four-hour recommendation'],
    sources: [
      { claim: 'German legal time, MEZ and MESZ.', url: 'https://www.gesetze-im-internet.de/me_einhg/BJNR007090969.html' },
      { claim: 'Summer time from the last Sunday in March to the last Sunday in October.', url: 'https://www.gesetze-im-internet.de/sozv/BJNR159100001.html' },
      { claim: 'Informatik by Land, SWK recommendation, Oberstufe share.', url: 'https://informatik-monitor.de/' },
      { claim: 'International schools use English as the shared language, up to 65 nations.', url: 'https://www.agis-schools.org/' },
      { claim: 'SESB Berlin, 33 schools, about 6,000 pupils.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Eurydice/DE/dossier_de_ebook.pdf' },
      { claim: 'BWKI projects in German or English.', url: 'https://www.bw-ki.de/teilnahmebedingungen' },
      { claim: 'ChatGPT age terms.', url: 'https://openai.com/policies/row-terms-of-use/' },
      { claim: 'Copilot country ages.', url: 'https://support.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-young-people' }
    ],
    rejectedClaims: [
      'Any ranking of providers, any named competitor and any other provider\'s price: refused by design.',
      'Any accreditation, approval or certification of ours: none claimed, and none is implied for any provider.',
      'Consumer-law statements on withdrawal or cancellation: left out; the page points to our own refund page instead.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
