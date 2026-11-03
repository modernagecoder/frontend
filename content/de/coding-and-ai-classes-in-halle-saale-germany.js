'use strict';
// Coding and AI classes in Halle (Saale) (ag- city page, Germany cluster P6 row DE158, tier-2 shape coding-and-ai = all
// ages). Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; euro shown,
// USD charged.
// Spine: how a recommender decides that two things are "alike". Every age meets the same AI idea at its own level: a child
// sorts toy sets, a teenager writes the similarity score in Python, an adult sees the same rule behind the shop that says
// "customers also bought". The Halle playground register is the data; the lesson is that the features you keep decide the
// answer.
// Sources (school facts read raw; copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/coding-and-ai-classes-
// in-halle-saale-germany/, fact ids from facts-school/FACTS.md):
//  - GI Informatik-Monitor 2026/27, Sachsen-Anhalt page (infmon-sachsen-anhalt/5d4cf2e2.txt): "An der Sekundarschule und der
//    Gemeinschaftsschule ist für die Jahrgangsstufen 6 bis 10 im Pflichtbereich je eine Wochenstunde Informatikunterricht
//    vorgesehen."; one hour of grades 6 to 8 pulled forward into grade 5; Gymnasium grades 9 and 10 "jeweils zweistündig ein
//    Wahlpflichtfach Informatik"; since 2024/25 Rahmenplan "Lernen in der digitalen Welt" from grade 5 at the Gymnasium,
//    Informatik share "weniger als eine Wochenstunde"; Einführungsphase two hours elective; Qualifikationsphase "zweistündig auf
//    grundlegendem Anforderungsniveau"; two specialist Gymnasien may offer the raised level; oral exam possible if taken since
//    the Einführungsphase. National page: Sachsen-Anhalt among six Länder without Informatik for all (fact 92).
//  - KMK Ferien 2026/2027 (Stand 09.10.2025), row "Sachsen-Anhalt (2) 19.10. - 30.10. 21.12. - 02.01. 01.02. - 06.02. 22.03. -
//    27.03. 15.05. - 22.05. 10.07. - 20.08." (fact 281).
//  - BWINF Informatik-Biber 2026: 9 to 20 November 2026, grades 3 to 13, free (facts 129, 133).
//  - AI tool ages: content/ai-tool-age-audit.json (OpenAI terms: 13, parent's or guardian's permission under 18; Anthropic
//    consumer terms: 18).
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Halle (Saale) 226,767; Sachsen-Anhalt 2,135,597; Magdeburg 244,329;
//    Leipzig 611,850.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Halle (Saale), FB Stadtentwicklung und Planung, "Städtische Spielplätze 2026" (KomGIS+ Open Data Portal,
//    Thema 6.37, webapp.halle.de/komgis30.hal.opendata/fb19e2e1-2bf1-0caf-8e71-f56637c7c789.html, zeitliche Ausdehnung
//    24.09.2026). Licence: the city's Open Data Portal page "Nutzungsbedingungen und Lizenzen": "Für verzeichneten Datensatz gilt
//    - soweit nicht anders gekennzeichnet - die Lizenz: Creative Commons Namensnennung 3.0 Deutschland", attribution "Datenquelle:
//    Stadt Halle (Saale)"; users "dürfen die Daten für alle Zwecke verwenden" (commercial use allowed). The dataset page marks
//    no other licence. CSV from the _csv.zip downloaded 3 November 2026, 32,857 bytes, sha256 7cf7e3c2...6fc87cf7, 135 rows,
//    semicolons, UTF-8 with BOM; columns baujahr_sp, ausstattun, altersklas, traeger, objectid, nummer, netto_neu, name, lage.
// Our own calculations (scratchpad de/w/T3/halle/run/v1.py, v2.py, stats.py, python3 -I, Python 3.14.8):
//  v1: "Playgrounds: 135"; "Most like Spielplatz Am Tulpenbrunnen [(0.375, 'Spielplatz Am Hohen Holz'), (0.3, 'Spielplatz
//      Südstr.')]"; "Shared: ['Bank', 'Federgeräte', 'Müllbehälter']".
//  v2: "Without furniture: [(0.333, 'Spielplatz Südstr.'), (0.25, 'Spielplatz Königgrätzer Str.')]"; "Shared now:
//      ['Federgeräte', 'Minikarussell']".
//  stats: 391 different items; Müllbehälter 116, Bänke 93, Fahrradbügel 53, Bolztore 30; age classes 0-12 Jahre 57, 6-18 Jahre
//  34, 0-18 Jahre 32, 0-6 Jahre 12; 9,045 pairs.
// Lesson family: similarity is a choice of features; measure overlap (Jaccard), and drop the features everything shares or
// they decide the answer.

const { EN: DE_EN } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'def kit(text):',
  '    found = set()',
  '    for part in text.split(","):',
  '        words = part.split()',
  '        if words and words[0].isdigit():',
  '            words = words[1:]',
  '        found.add(" ".join(words))',
  '    return found',
  '',
  'def overlap(a, b):',
  '    return len(a & b) / len(a | b)',
  '',
  'with open("spielplaetze_2026.csv", encoding="utf-8-sig") as f:',
  '    parks = {r["name"]: kit(r["ausstattun"]) for r in csv.DictReader(f, delimiter=";")}',
  '',
  'me = "Spielplatz Am Tulpenbrunnen"',
  'scores = sorted(((round(overlap(parks[me], other), 3), name)',
  '                 for name, other in parks.items() if name != me), reverse=True)',
  'print("Playgrounds:", len(parks))',
  'print("Most like", me, scores[:2])',
  'print("Shared:", sorted(parks[me] & parks[scores[0][1]]))'
].join('\n');

const V2 = [
  'FURNITURE = {"Bank", "Bänke", "Hockerbank", "Müllbehälter", "Fahrradbügel", "Fahrradständer"}',
  'play = {name: things - FURNITURE for name, things in parks.items()}',
  'scores = sorted(((round(overlap(play[me], other), 3), name)',
  '                 for name, other in play.items() if name != me), reverse=True)',
  'print("Without furniture:", scores[:2])',
  'print("Shared now:", sorted(play[me] & play[scores[0][1]]))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'city', label: 'Halle (Saale): coding and AI' },
  slug: 'coding-and-ai-classes-in-halle-saale-germany',
  code: 'cah',
  accent: '#543856',
  accentRationale: 'Coding and AI in Halle (Saale): a dusky plum #543856, the colour of the porphyry rock above the Saale at Giebichenstein; contrast 8.21 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE_EN,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }, { slug: 'coding-classes-in-saxony-anhalt', name: 'Saxony-Anhalt' }],
  routeLabel: 'Coding and AI classes in Halle (Saale)',
  title: 'Coding and AI Classes in Halle (Saale): Live, in English',
  description: 'Coding and AI classes in Halle (Saale) for children, teens and adults: live online in English, what Halle schools teach, and a playground data project.',
  ogDescription: 'Live online coding and AI for every age in Halle (Saale), taught in English at the learner\'s pace: Informatik in Saxony-Anhalt by school type, AI tool ages, and an original recommender project on the city\'s 135 playgrounds.',
  twitterDescription: 'Coding and AI in Halle (Saale), live in English, for ages 6 to adult, with a playground recommender project.',
  pageName: 'Coding and AI Classes in Halle (Saale)',
  webPageDescription: 'A guide for Halle (Saale) learners of every age and their families to live coding and AI classes in English, built from the GI Informatik-Monitor, the KMK holiday table and Destatis, with an original similarity project on the city\'s open playground register.',
  courseDescription: 'Live online coding and AI classes in English for learners in Halle (Saale): Scratch and Python for children, Python and machine learning for teenagers, Python and applied AI for adults, in a group of fifteen to twenty or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }, { name: 'Saxony-Anhalt', href: '/coding-classes-in-saxony-anhalt' }],
  crumbLabel: 'Halle (Saale)',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Germany' },
    { href: '#ages', label: 'Ages' },
    { href: '#school', label: 'Schools' },
    { href: '#project', label: 'Project' },
    { href: '#calendar', label: 'Times' }
  ],
  eyebrow: 'Halle (Saale) &middot; Coding and AI &middot; Every age',
  h1: 'Coding and AI classes in Halle (Saale)',
  lede: 'Halle is a university city of 226,767 people, and the people asking us about coding here range from a first-grader who wants to make a cat dance on screen to a parent who wants to understand the AI tools at work. This page takes each of them seriously: what a Halle school teaches about Informatik and when, how live classes in English fit a Saxony-Anhalt week, and one small AI idea, the recommender, built on the city\'s own list of playgrounds.',
  secondaryCta: { href: '#project', label: 'See the playground project' },
  wa: 'Hello Modern Age Coders, I live in Halle (Saale) and would like to ask about coding and AI classes in English. Could we book a free first class?',
  heroNote: 'Live online since 2020 &middot; 10,000+ students worldwide &middot; children, teenagers and adults, all in English',
  spec: [
    ['Who', 'Children from 6, teenagers, adults'],
    ['Paths', 'Scratch, Python, machine learning, applied AI'],
    ['Format', 'Live online, two classes a week'],
    ['Group', 'Fifteen to twenty, or one to one'],
    ['Mentors', 'Based in India, teaching in English'],
    ['Try it', 'A free first class']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Coding and AI classes in Halle (Saale) at Modern Age Coders are live online lessons in English for every age: Scratch and then Python for children from 6, Python and machine learning for teenagers, and Python with applied AI for adults. Each learner has a regular mentor who matches their pace and accent, in a group of fifteen to twenty or one to one, at Halle afternoon, evening or weekend times.',

  picks: {
    eyebrow: 'Three starting points',
    h2: 'Which course fits which learner in Halle?',
    lede: 'One course for each stage of life. All three teach typed Python and reach real AI work, but the speed, the projects and the examples change with the learner.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'CAH / 01', title: 'Python and AI for Kids', note: 'Ages 9 to 12, 8 to 10 months. Turtle drawings, small games, then programs that sort and compare things, the first step towards a recommender.' },
      { course: 'ai-ml-masterclass-teens', code: 'CAH / 02', title: 'AI and Machine Learning for Teens', note: 'Ages 13 to 18, 10 to 12 months. From Python basics to models a teenager trains, tests and can explain, with school maths as the only entry ticket.' },
      { course: 'python-ai-automation-masterclass-college', code: 'CAH / 03', title: 'Python Automation and Applied AI', note: 'Adults 18 and over, 10 to 12 months. Scripts that save hours at work, then applied AI on real files, for complete beginners as well as returners.' }
    ]
  },

  sections: [
    {
      id: 'ages',
      eyebrow: 'Every age',
      h2: 'Who takes coding and AI classes in Halle, and what does each age learn?',
      lede: 'The same subject looks very different at seven, fifteen and forty. Here is how we split it.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Children, 6 to 12', p: 'Six to eight year olds start in Scratch, where blocks click together and a mistake shows on screen at once. From about nine, children type real Python. AI comes in as ideas a child can test: sorting pictures into groups, guessing the next item in a pattern, asking why a computer got it wrong.' },
          { h3: 'Teenagers, 13 to 18', p: 'Teenagers write Python properly: functions, files, lists of thousands of rows. Then they build small machine-learning models and, more importantly, learn to check them. A teenager who can say why a model is wrong is worth more to a university than one who can only run it.' },
          { h3: 'Adults', p: 'Adults come to us for two reasons: to learn programming from zero, or to understand AI well enough to use it with judgement at work. Either way we begin with Python, because a person who can read a ten-line script can also see when an AI tool has produced nonsense.' }
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Our course path by age (ours, used to place learners)', head: ['Age', 'First months', 'Later', 'AI work'], rows: [
          ['6 to 8', 'Scratch stories and games', 'Lists and scores in Scratch', 'Sorting and pattern games, no AI accounts'],
          ['9 to 12', 'Typed Python, turtle drawing', 'Files and small data sets', 'Rules a child writes, then tests'],
          ['13 to 18', 'Python foundations', 'Data, functions, testing', 'Train, test and explain small models'],
          ['18 and over', 'Python from zero, or a refresh', 'Automation of real work files', 'Applied AI with checks on every output']
        ] },
        { kind: 'source', html: 'The table is our own placement guide, not a school framework. Ages are a guide too: a keen eleven year old can join a teenage group after a conversation with the mentor, and an adult beginner never sits in a class with children.' },
        { kind: 'p', mt: true, html: 'Families sometimes ask whether a parent and a child can learn in the same class. They cannot share a group, because the pace and examples differ too much, but they can learn side by side on different courses, and a few Halle households do exactly that: the child in a Scratch batch on Saturday morning, the parent in an adult Python group on a weekday evening.' }
      ]
    },
    {
      id: 'school',
      eyebrow: 'Halle schools',
      h2: 'Is Informatik compulsory at schools in Halle (Saale)?',
      lede: 'It depends on the school type, which is unusual. In Saxony-Anhalt the Sekundarschule teaches more compulsory Informatik than the Gymnasium does.',
      body: [
        { kind: 'two',
          leftH3: 'Sekundarschule and Gemeinschaftsschule',
          left: [
            'The Gesellschaft für Informatik (GI) reports in its Informatik-Monitor 2026/27 that at the Sekundarschule and the Gemeinschaftsschule, grades 6 to 10 each have one compulsory weekly hour of Informatik, "je eine Wochenstunde". One more hour is taken from the cross-subject allowance of grades 6 to 8 and moved forward into grade 5, so Informatik starts in grade 5. The same rules apply to grades 5 to 10 at the Gesamtschulen.',
            'For a Halle child at one of these schools, that is a short weekly lesson every year from about the age of ten.'
          ],
          rightH3: 'Gymnasium',
          right: [
            'At the Gymnasium the picture is thinner. Grades 9 and 10 may offer Informatik as a two-hour elective (Wahlpflichtfach). Since 2024/25, starting in grade 5, the Gymnasium follows the framework "Lernen in der digitalen Welt", but the GI notes that its share of Informatik content is "weniger als eine Wochenstunde", less than one weekly hour.',
            'This is why the GI still lists Saxony-Anhalt among the six Länder without Informatik that is compulsory for every pupil.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Informatik in Saxony-Anhalt by school type, school year 2026/27', head: ['School type', 'Grades 5 to 8', 'Grades 9 and 10', 'Oberstufe'], rows: [
          ['Sekundarschule', 'Compulsory, one weekly hour', 'Compulsory, one weekly hour', 'Not applicable'],
          ['Gemeinschaftsschule', 'Compulsory, one weekly hour', 'Compulsory, one weekly hour', 'Where offered'],
          ['Gesamtschule', 'Compulsory', 'Compulsory (Gymnasium track as at the Gymnasium)', 'Where offered'],
          ['Gymnasium', 'Digital-world framework, under one weekly hour of Informatik content', 'Two-hour elective, if offered', 'Two-hour elective at the basic level']
        ] },
        { kind: 'source', html: 'Source: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Sachsen-Anhalt page and Länder comparison, read on 2 November 2026. Grade 5 at the Sekundarschule gets its hour by bringing one forward from grades 6 to 8.' },
        { kind: 'p', mt: true, html: 'In the Oberstufe, the same GI page says Informatik can be taken for two weekly hours in the Einführungsphase and for two weekly hours at the basic level (grundlegendes Anforderungsniveau) in the Qualifikationsphase. Only two Gymnasien with a mathematics, science and technology focus may offer it at the raised level. An oral Abitur exam in Informatik is possible if the pupil has taken the subject without a break since the Einführungsphase. We teach alongside all of this and award no German grades; the school course is what goes on the report card.' },
        { kind: 'p', html: 'There is more on Saxony-Anhalt as a whole, including school types and the Abitur, on our <a class="ag-inline-link" href="/coding-classes-in-saxony-anhalt">Saxony-Anhalt page</a>.' }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Taught in English',
      h2: 'Are the classes in German or in English?',
      lede: 'English, always, and we say so before the first class rather than after it.',
      body: [
        { kind: 'two',
          leftH3: 'Why English works here',
          left: [
            'Our mentors are based in India and every lesson is live, spoken and written in English. We have no German-language teachers. For a learner in Halle this usually turns out to be an advantage: Python, its error messages and almost every serious AI resource are in English anyway, so the language of the class is the language of the tools.',
            'Children at German schools get a second subject for free, and adults who work with international colleagues get practice in exactly the vocabulary they need.'
          ],
          rightH3: 'Pace and accent',
          right: [
            'Mentors slow down, rephrase and wait. They get used to a learner\'s accent within a few classes, and they never treat a German word in the middle of an English sentence as a mistake; they just offer the English one.',
            'Every new idea is shown on the shared screen and tried straight away, so a learner who misses a word still sees what it means.'
          ] }
      ]
    },
    {
      id: 'project',
      tint: 'tint',
      eyebrow: 'A real Halle data project',
      h2: 'How does a recommender decide which Halle playground is "most like" another?',
      lede: 'Streaming services and online shops recommend things by measuring how much two items have in common. We teach that idea on a file every Halle family can picture: the city\'s own register of its playgrounds.',
      body: [
        { kind: 'two',
          leftH3: 'The data',
          left: [
            'The city of Halle (Saale) publishes "Städtische Spielplätze 2026" on its KomGIS+ open data portal, dated 24 September 2026. Under the city\'s open data terms it is licensed Creative Commons Namensnennung 3.0 Deutschland (CC BY 3.0 DE), which allows any use, including commercial use, with the credit "Datenquelle: Stadt Halle (Saale)". We downloaded the CSV on 3 November 2026.',
            'It has 135 rows, one per playground, with a name, the age group, a year of building or renewal, the net play area in square metres and, most usefully, a free-text column listing the equipment: "Wippe, 2 Federgeräte, Minikarussell, Hockerbank, Bank, Müllbehälter".'
          ],
          rightH3: 'The question',
          right: [
            'A family likes one small playground, Spielplatz Am Tulpenbrunnen. Which other playground in Halle is most like it?',
            'To answer, the program turns each equipment list into a set of items, drops the counts at the front ("2 Federgeräte" becomes "Federgeräte"), and scores every pair by overlap: the number of items both have, divided by the number of items either has. Two identical lists score 1; two with nothing in common score 0. Statisticians call this the Jaccard index.'
          ] },
        { kind: 'code', label: 'Version 1: score every playground against one', lang: 'Python', code: V1, note: 'It prints: <code>Playgrounds: 135</code>, then <code>Most like Spielplatz Am Tulpenbrunnen [(0.375, \'Spielplatz Am Hohen Holz\'), (0.3, \'Spielplatz Südstr.\')]</code> and <code>Shared: [\'Bank\', \'Federgeräte\', \'Müllbehälter\']</code>. Run with python3 -I on our copy of the city file.' },
        { kind: 'p', mt: true, html: 'The winner is Spielplatz Am Hohen Holz with 0.375. Now read why. Of the three things the two playgrounds share, two are a bench and a bin. Only the spring riders (Federgeräte) are something a child would actually play on. The recommender has learned that Halle playgrounds have bins, which is true and useless: in our count, Müllbehälter appear at 116 of the 135 playgrounds and Bänke at 93.' },
        { kind: 'p', html: 'This is the most important lesson in recommendation systems, and it applies far beyond playgrounds. A feature that almost everything has cannot tell things apart. It only adds noise that happens to push some pairs up. So in Version 2 we remove the furniture and measure again.' },
        { kind: 'code', label: 'Version 2: add below Version 1, without the furniture', lang: 'Python', code: V2, note: 'The two new lines it prints: <code>Without furniture: [(0.333, \'Spielplatz Südstr.\'), (0.25, \'Spielplatz Königgrätzer Str.\')]</code> and <code>Shared now: [\'Federgeräte\', \'Minikarussell\']</code>.' },
        { kind: 'p', mt: true, html: 'The answer changes. Spielplatz Südstr., second before, now comes first, and what it shares with Am Tulpenbrunnen is real play equipment: spring riders and a small roundabout. Nothing about the data changed; only our decision about which features count. That is the honest truth about AI that we want every learner to leave with: the person who chooses the features is making the choice the machine then repeats.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'The most common items in Halle\'s playground equipment lists (our count, 135 playgrounds)', head: ['Item', 'Playgrounds', 'Kind'], rows: [
          ['Müllbehälter (bins)', '116', 'Furniture'],
          ['Bänke (benches)', '93', 'Furniture'],
          ['Fahrradbügel (bike stands)', '53', 'Furniture'],
          ['Bolztore (football goals)', '30', 'Play']
        ] },
        { kind: 'source', html: 'Data: Stadt Halle (Saale), FB Stadtentwicklung und Planung, Städtische Spielplätze 2026, KomGIS+ Open Data Portal, CC BY 3.0 DE, downloaded 3 November 2026. Datenquelle: Stadt Halle (Saale). Counts, scores and code are our own; the lists hold 391 different item names, and 135 playgrounds make 9,045 possible pairs. We are not connected with the city.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 6 to 8, no screen.</strong> Lay out three toy boxes. Which two are most alike? Now remove anything every box has, like a lid. Did your answer change?',
          '<strong>Ages 9 to 12, Python.</strong> Type the overlap function and test it on two short lists you invent, one pair identical and one pair with nothing in common, before you trust it on the city file.',
          '<strong>Teenagers.</strong> Version 2 still keeps "Sitzwürfel" (seat cubes) at Südstr. Is that furniture? Also look for "Federgerät" and "Federgeräte": the same thing, counted as two. Fix both and see whether the ranking moves again.',
          '<strong>Adults.</strong> Find the pair of playgrounds with the highest score in the whole city. Several Bolzplätze with only football goals score 1.0 against each other. Is a perfect match a useful recommendation, or just a duplicate?'
        ] }
      ]
    },
    {
      id: 'ai',
      eyebrow: 'AI, by age',
      h2: 'Which AI tools can each age use in our classes?',
      lede: 'The tool makers set the minimum ages, not us, and we follow them.',
      body: [
        { kind: 'p', html: 'OpenAI\'s terms say a user must be at least 13 and that anyone under 18 needs a parent\'s or guardian\'s permission. Anthropic\'s consumer terms for Claude set 18 as the minimum. So in our classes, children work with AI ideas they build and test themselves rather than with chatbot accounts; teenagers use tools only where the tool allows their age and the family agrees; adults may use any tool, always with the habit of checking its output against something they can verify. Our <a class="ag-inline-link" href="/ai-tools-age-guide">AI tools age guide</a> quotes the terms of many more tools.' },
        { kind: 'p', html: 'Whatever the age, the rule in class is the same: an AI answer is a draft, not a result. The playground project above is a small proof of why. A program that looks clever can still rank benches above slides, and the only protection is a learner who reads the reasons, not just the score.' }
      ]
    },
    {
      id: 'calendar',
      eyebrow: 'Times and holidays',
      h2: 'When are classes in Halle time, and what about school holidays?',
      lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Halle times and the mentor\'s clock in India', head: ['Halle time', 'India, winter (to 28 March 2027)', 'India, summer (from 28 March 2027)', 'Often chosen by'], rows: [
          ['14:15', '18:45', '17:45', 'Primary children after school'],
          ['16:45', '21:15', '20:15', 'Teenagers'],
          ['Saturday 11:15', '15:45', '14:45', 'Families with younger children'],
          ['Sunday 09:45', '14:15', '13:15', 'Adults and one-to-one learners']
        ] },
        { kind: 'source', html: 'German legal time is UTC+1 (MEZ) in winter and UTC+2 (MESZ) in summer under the Einheitenzeitgesetz. Summer time ended on 25 October 2026 and starts again on 28 March 2027. India stays on UTC+5:30, so it is 4 hours 30 minutes ahead of Halle in winter and 3 hours 30 minutes ahead in summer. These rows are examples; no batch time is fixed in advance.' },
        { kind: 'table', mt: true, numCols: [], caption: 'School holidays in Saxony-Anhalt, school year 2026/27 (KMK)', head: ['Holiday', 'Dates'], rows: [
          ['Herbstferien', '19 October to 30 October 2026'],
          ['Weihnachtsferien', '21 December 2026 to 2 January 2027'],
          ['Winterferien', '1 February to 6 February 2027'],
          ['Osterferien', '22 March to 27 March 2027'],
          ['Pfingstferien', '15 May to 22 May 2027'],
          ['Sommerferien', '10 July to 20 August 2027']
        ] },
        { kind: 'source', html: 'Source: Kultusministerkonferenz, Ferienregelung 2026/2027, Stand 9 October 2025, row Sachsen-Anhalt. The KMK fixes summer holidays years ahead; the Länder set the others.' },
        { kind: 'p', mt: true, html: 'Classes carry on through the holidays unless you pause them, which many families do for a week in summer. Adults are not tied to the school calendar at all. One date worth knowing for children in grades 3 and up: the free Informatik-Biber puzzle contest runs from 9 to 20 November 2026, entered through the school, so ask a teacher whether your child\'s school in Halle takes part.' }
      ]
    },
    {
      id: 'region',
      eyebrow: 'Around Halle',
      h2: 'Do you teach learners outside Halle too?',
      lede: 'Yes. Classes are online, so the place on the form only sets the clock.',
      body: [
        { kind: 'p', html: 'Destatis counts 226,767 people in Halle (Saale) on 31 December 2024. That makes it the second city of Saxony-Anhalt, a little behind the state capital Magdeburg with 244,329, in a Land of 2,135,597 people. Learners from Merseburg, the Saalekreis villages and Leipzig, the much larger city across the border in Saxony with 611,850, join the same groups. A Leipzig family should know that Saxony has its own school rules and holidays, so we plan around those instead.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How does progress look for each kind of learner?',
    lede: 'Our own checkpoints. We share them with families and adult learners every few weeks.',
    table: { caption: 'Checkpoints from first class to independent project (ours)', head: ['Checkpoint', 'Child', 'Teenager', 'Adult'], rows: [
      ['1. First program', 'A Scratch sprite that moves and talks', 'A Python script that asks and answers', 'A script that renames a folder of files'],
      ['2. Decisions', 'If the cat touches red, it stops', 'Conditions and loops over a list', 'Clean a messy spreadsheet export'],
      ['3. Data', 'Keep score in a list', 'Read a CSV and count', 'Summarise a real work file'],
      ['4. Comparing', 'Which two toy sets are alike?', 'The overlap score on Halle playgrounds', 'Similarity across customer or product lists'],
      ['5. Judgement', 'Explain why the computer chose', 'Test a model and say where it fails', 'Check every AI output against a source']
    ] },
    left: { h3: 'For parents', ps: [
      'Checkpoint 4 is where AI starts to feel real to a child. They see the computer make a choice, and then they change one rule and watch the choice change.',
      'We report what your child built and can explain, not minutes logged.'
    ] },
    right: { h3: 'For adult learners', ps: [
      'Most adults reach checkpoint 3 on their own work files within the first few months, which is usually when the course starts to pay for itself in saved time.',
      'Checkpoint 5 never ends. It is a habit, not a level.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for Halle learners',
    lede: 'Grouped by age. Every one is live, in English, with a mentor who stays with the learner.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 14', courses: [
        { code: 'CAH / KID / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'From Scratch stories to apps, grouped by age, 6 to 12.' },
        { code: 'CAH / KID / 02', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'What machines learn and how they go wrong, 8 to 14.' },
        { code: 'CAH / KID / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Puzzles that train step-by-step thinking, 7 to 12.' }
      ] },
      { num: 'II', h3: 'Teenagers', sub: 'Ages 10 to 19', courses: [
        { code: 'CAH / TEEN / 01', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'Support beside school Informatik, Klasse 5 to 10.' },
        { code: 'CAH / TEEN / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A full Python course from zero, 13 to 18.' },
        { code: 'CAH / TEEN / 03', slug: 'informatik-abitur-course-java-python', title: 'Informatik Abitur', blurb: 'Java and Python for the Oberstufe, 16 to 19.' }
      ] },
      { num: 'III', h3: 'Adults', sub: '18 and over', courses: [
        { code: 'CAH / ADULT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'Zero to confident programmer, live.' },
        { code: 'CAH / ADULT / 02', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI for non-programmers', blurb: 'Spreadsheets to dashboards and AI help.' },
        { code: 'CAH / ADULT / 03', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI', blurb: 'Language models, retrieval and agents, explained and built.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'What happens in a live class?',
    lede: 'Each class is an hour, twice a week, on video with a shared screen. The learner types; the mentor guides, asks and corrects.',
    slots: [
      { time: 'Afternoons', l: 'From early afternoon in Halle, for children after school.' },
      { time: 'Evenings', l: 'Later slots for teenagers and adults after work.' },
      { time: 'One to one', l: 'A time agreed with the mentor, moved when life needs it.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same person each week, who remembers last week\'s bug.' },
      { h3: 'Age-matched groups', p: 'Children with children, adults with adults.' },
      { h3: 'Hands on keys', p: 'The learner writes the code, from day one.' },
      { h3: 'Plain English', p: 'Short sentences, repeated in new words when needed.' },
      { h3: 'Real files', p: 'Open data from German cities, not toy examples only.' },
      { h3: 'Short reports', p: 'What was built, what was hard, what is next.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'A few projects from students of different ages. The <a class="ag-inline-link" href="/student-labs">student labs</a> page shows many more.',
  reviewsLede: 'Google reviews from parents and students, quoted as written.',

  fees: {
    h2: 'What does a month of classes cost in Halle?',
    lede: 'One monthly fee for eight live classes. We display it in euro using the European Central Bank reference rate, but the card payment is made in US dollars, so your bank does the conversion and the final figure on your statement may be a little different.',
    free: ['A free first class', 'A short task matched to the learner\'s age', 'No card details'],
    group: ['Fifteen to twenty learners of a similar age', 'A regular mentor', 'Two classes each week', 'Monthly, cancel any month'],
    one: ['One learner, one mentor', 'Projects chosen around the learner', 'Times agreed between you']
  },

  faq: {
    eyebrow: 'Questions from Halle',
    h2: 'Coding and AI classes in Halle (Saale): questions and answers',
    items: [
      { q: 'Are the classes in German?', a: 'No. Every class is live and taught in English only, by mentors based in India. They speak clearly, adapt to each learner\'s pace and accent, and show every step on screen, so learners whose English is still growing can follow.' },
      { q: 'What ages do you teach in Halle?', a: 'Children from 6, teenagers and adults of any age. Children start in Scratch, move to typed Python from about 9, teenagers add machine learning, and adults learn Python with applied AI. Groups are always formed by age.' },
      { q: 'Do Halle schools teach Informatik?', a: 'It depends on the school type. The Gesellschaft für Informatik reports one compulsory weekly hour in grades 6 to 10 at the Sekundarschule and Gemeinschaftsschule, plus an hour moved into grade 5. At the Gymnasium, Informatik is a two-hour elective in grades 9 and 10.' },
      { q: 'Can an adult with no experience learn coding and AI?', a: 'Yes. Our adult courses assume nothing and start with Python from the first line. Many adult learners in Germany want to understand AI tools at work, and reading simple code is the quickest way to judge what those tools produce.' },
      { q: 'When are classes in Halle time?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Children often pick early afternoons or Saturday mornings; adults tend to choose evenings or Sundays.' },
      { q: 'Will my child use ChatGPT or Claude in class?', a: 'Not as a child. OpenAI requires users to be 13 and needs a parent\'s permission under 18, and Anthropic sets 18 for Claude. Children build and test their own small AI programs instead, which teaches more about how AI works than chatting with one.' },
      { q: 'What is the playground project on this page?', a: 'An original lesson of ours on the city of Halle\'s open register of 135 playgrounds. Learners score how alike two playgrounds are by their equipment and discover that benches and bins distort the answer until they are removed.' },
      { q: 'Do classes stop during the Saxony-Anhalt school holidays?', a: 'No, they continue unless you choose to pause. The 2026/27 holidays in Saxony-Anhalt include the Herbstferien from 19 to 30 October 2026 and the Sommerferien from 10 July to 20 August 2027, according to the KMK.' },
      { q: 'How big are the groups?', a: 'Fifteen to twenty learners of a similar age in a group batch. The one-to-one plan gives a learner two private classes a week with their own mentor, at times you agree together.' },
      { q: 'How is the fee paid?', a: 'Monthly. The fee is shown in euro at the European Central Bank reference rate, but the payment itself is taken in US dollars and your bank converts it, so the statement may differ slightly. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Further reading',
    h2: 'Related pages',
    lede: 'Other pages for learners in Halle and the rest of Germany.',
    items: [
      { href: '/coding-classes-in-saxony-anhalt', label: 'Coding classes in Saxony-Anhalt', p: 'The Land\'s school rules and our classes across it.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Every page we have written for Germany.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and machine learning in Germany', p: 'A deeper look at learning AI properly.' },
      { href: '/coding-classes-for-adults-germany', label: 'Coding for adults in Germany', p: 'For learners starting after school or university.' },
      { href: '/ai-tools-age-guide', label: 'AI tools age guide', p: 'Minimum ages from the tools\' own terms.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our live class method, step by step.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us who will learn and how old they are. The first class is a short task at the right level, and the mentor then suggests a course and a group, or one-to-one if that suits better.',
    readFirst: 'If you want to know more first, read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or browse <a class="ag-inline-link" href="/courses">every course</a>.',
    note: 'All classes are live online, in English only, with mentors in India. WhatsApp reaches us fastest, in English.',
    formNote: 'Free, no card, no commitment.'
  },

  footer: {
    cols: [
      { h4: 'Learn', links: [
        { href: '/ai-tools-age-guide', label: 'AI tools age guide' },
        { href: '/ai-projects-for-kids', label: 'AI projects for kids' },
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] },
      { h4: 'Germany', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-in-saxony-anhalt', label: 'Saxony-Anhalt' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany' },
        { href: '/coding-classes-for-adults-germany', label: 'Coding for adults' }
      ] }
    ],
    bottomRight: 'What everything shares tells you nothing'
  },

  personalityCss: `
.ag-root.ag-cah .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-cah .ag-capsule { border-left-width: 4px; }
.ag-root.ag-cah .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-cah .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-cah .ag-code-head b { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Sachsen-Anhalt page and Länder comparison); KMK Ferienregelung 2026/2027; Destatis GV-ISys 31.12.2024; OpenAI and Anthropic terms via content/ai-tool-age-audit.json; Einheitenzeitgesetz; Stadt Halle (Saale), Städtische Spielplätze 2026, CC BY 3.0 DE.',
    localProject: 'Halle playground recommender: an original Python project on the city\'s register of 135 playgrounds that scores equipment overlap (Jaccard). Am Tulpenbrunnen\'s nearest match is Am Hohen Holz (0.375) only because of a bench and a bin; without furniture it is Südstr. (0.333), sharing spring riders and a small roundabout. Lesson family: similarity is a choice of features.',
    requiredMentions: ['spielplaetze_2026.csv', 'Spielplatz Am Tulpenbrunnen', '(0.375, \'Spielplatz Am Hohen Holz\')', '(0.333, \'Spielplatz Südstr.\')', 'Shared now: [\'Federgeräte\', \'Minikarussell\']', 'weniger als eine Wochenstunde', '10 July to 20 August 2027', 'What everything shares tells you nothing'],
    sources: [
      { claim: 'Informatik in Saxony-Anhalt by school type and Oberstufe rules.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/sachsen-anhalt' },
      { claim: 'Saxony-Anhalt among six Länder without Informatik for all.', url: 'https://informatik-monitor.de/' },
      { claim: 'Saxony-Anhalt school holidays 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Halle playground register 2026.', url: 'https://webapp.halle.de/komgis30.hal.opendata/fb19e2e1-2bf1-0caf-8e71-f56637c7c789.html' },
      { claim: 'Halle open data licence CC BY 3.0 DE.', url: 'https://halle.de/verwaltung-stadtrat/stadtverwaltung/online-angebote/open-data-portal/nutzungsbedingungen-und-lizenzen' },
      { claim: 'Populations of Halle, Magdeburg, Leipzig and the Land.', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/05-staedte.xlsx?__blob=publicationFile' }
    ],
    rejectedClaims: [
      'Halle fire brigade and pandemic statistics on the same portal: emergency and health data, not used.',
      'Election and population-by-nationality datasets on the KomGIS+ portal: identity-adjacent, not used.',
      'Any claim that our classes are connected with the city of Halle, the GI or a school: none.',
      'German-language teaching: we teach in English only, and the page says so.'
    ]
  }
};
