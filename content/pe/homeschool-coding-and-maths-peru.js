// SHIP: market | Homeschool coding and maths in Peru: what the law text says, what we could not verify, a plan | set operations for coverage: union, difference and intersection show which maths competencies a home plan missed
'use strict';
// Homeschool coding and maths, Peru (ag- English door, Peru cluster row PE043, P3, hubGroup ages).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Audience: families in Peru educating children at home for some or all of their schooling (Peruvian families, expatriate
// families using a foreign online school, families between schools or travelling), who want structured coding and maths.
// Brief rule for this row: what Peruvian law or MINEDU says only if fetched raw from gob.pe; otherwise say what could not be
// verified; no legal advice. The page quotes Ley 28044 from MINEDU's copy on cdn.www.gob.pe and states that a search of gob.pe
// on 9 November 2026 found no MINEDU norm on home education; it does not say homeschooling is legal or illegal.
// Searches (KEYWORDS.md sections 1 and 2, English): "homeschool peru" (with "precio", "minedu", "montessori", "catolico",
// "cristiano" in autocomplete); "coding for 10 year olds"; "online maths classes".
// Spine: what the General Education Law says about compulsory schooling, parents' duty to enrol, distance education and the
// family (primary-source table, Ley 28044 articles 4, 12, 27 and 54); what we could not verify; what home-educating families
// lose without a school (no computing at school anyway; OPI requires enrolment in a Peruvian school); a weekly plan built on
// the CNEB's four maths competencies; coding and maths in English, live, with one mentor; an original set-operations lesson.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/; every quote grepped in the raw or extracted text):
//  Ley N.° 28044, Ley General de Educación, MINEDU copy on gob.pe (facts-school/src/ley28044-pdf, from
//    cdn.www.gob.pe/uploads/document/file/4049722/...): Art. 4 "La educación es un servicio público; cuando lo provee el Estado
//    es gratuita en todos sus niveles y modalidades"; Art. 12 "la educación es obligatoria para los estudiantes de los niveles de
//    inicial, primaria y secundaria"; "Corresponde a los padres, o a quienes hagan sus veces, asegurar la matrícula oportuna de
//    los estudiantes y su permanencia en los centros y programas educativos."; Art. 27 "La Educación a Distancia es una modalidad
//    del Sistema Educativo caracterizada por la interacción simultánea o diferida entre los actores del proceso educativo,
//    facilitada por medios tecnológicos que propician el aprendizaje autónomo."; "Es aplicable a todas las etapas del Sistema
//    Educativo, de acuerdo con la normatividad en la materia."; "Esta modalidad tiene como objetivo complementar, reforzar o
//    reemplazar la educación presencial"; Art. 54 "La familia es el núcleo fundamental de la sociedad, responsable en primer
//    lugar de la educación integral de los hijos."; "a) Educar a sus hijos y proporcionarles en el hogar un trato respetuoso de
//    sus derechos como personas". Ley 28044 dated "17 de julio de 2003" (gob.pe normas-legales page, FACTS 9). Modalities EBR,
//    EBA, EBE (FACTS 2).
//  gob.pe searches, 9 November 2026 (src-pages/homeschool-coding-and-maths-peru/q-homeschooling.html, q-educacion+en+casa.html):
//    no MINEDU norm, procedure or guidance on home education among the results (only unrelated resolutions).
//  CNEB (facts-school/src/cneb, gob-cneb): "El CNEB se aplica en todos los niveles de la educación básica, incluyendo la
//    Educación Básica Regular (EBR), la Educación Básica Alternativa (EBA) y la Educación Básica Especial (EBE)."; the four
//    Matemática competencies; "Competencia 23: Resuelve problemas de cantidad."; no computing area (FACTS 39); "28 Se desenvuelve
//    en entornos virtuales generados por las TIC".
//  RM 501-2025-MINEDU, Tabla 1 and the EBA paragraph (rm501-2025-pdf; signed PDF page 7 checked by eye 2026-11-09): EBA "el
//    primer periodo se lleva a cabo del 13 de marzo al 26 de julio, mientras que el segundo periodo del 10 de agosto al 20 de
//    diciembre"; EBR teaching from 16 March to 18 December 2026.
//  MINEDU, Edades normativas (FACTS 13, 14): "Se considera la edad normativa al 31 de marzo de cada año."
//  OPI Reglamento 2025 (opi-reglamento-2025, LaTeX accents): "Estar inscrito en alguna instituci´on educativa peruana (colegio)
//    en el 2025 o haber egresado el 2024."
//  UGEL 06 oficio, ONEM 2026: entry through the school's IE stage (FACTS 99, 104).
//  INEI TIC II trimestre 2026 (facts-market/src/inei_tic_iit2026): "el 36,4% de los hogares del país disponía de al menos una
//    computadora".
//  EF EPI 2025 (ef_peru): Peru 519, Lima 555.
//  Vendor terms via content/ai-tool-age-audit.json: Claude 18+; ChatGPT parental permission under 18.
//  Brand facts: 10,000+ students worldwide, 4.9 from about 547 Google reviews, since 2020; group fifteen to twenty or one to one.
//  Time: tzdata America/Lima UTC-5 all year, Asia/Kolkata UTC+5:30.
// Our own program (scratchpad pe/e8/hcm_cover.py), an invented four-week plan, python3 -I (3.14), exact output:
//    "covered: ['data and uncertainty', 'quantity', 'regularity and change']" / "missing: ['form and movement']" /
//    "in every week: []" / "only once: ['data and uncertainty']"
// Lesson family: sets for coverage tracking: set().union(*), difference, set.intersection(*), and a membership count.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const CODE = [
  '# The four maths competencies of Peru\'s national curriculum (CNEB), shortened to labels.',
  'COMPETENCIES = {"quantity", "regularity and change", "form and movement", "data and uncertainty"}',
  '',
  '# An invented four-week home plan: which competencies each week\'s work touched.',
  'weeks = {',
  '    1: {"quantity"},',
  '    2: {"quantity", "regularity and change"},',
  '    3: {"regularity and change"},',
  '    4: {"quantity", "data and uncertainty"},',
  '}',
  '',
  'covered = set().union(*weeks.values())',
  'print("covered:", sorted(covered))',
  'print("missing:", sorted(COMPETENCIES - covered))',
  'print("in every week:", sorted(set.intersection(*weeks.values())))',
  'print("only once:", sorted(c for c in covered if sum(c in w for w in weeks.values()) == 1))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'ages', label: 'Homeschool coding and maths' },
  slug: 'homeschool-coding-and-maths-peru',
  code: 'hcm',
  accent: '#4B6209',
  accentRationale: 'Homeschool coding and maths in Peru: an olive green #4B6209, the colour of the Andean terraces (andenes) farmed by families for generations, chosen for a page about learning built at home step by step; contrast passes 4.5 on all three papers (checked by the build gate)',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Homeschool coding and maths in Peru',
  title: 'Homeschool Coding and Maths in Peru: Live Classes in English',
  description: 'Coding and maths for children learning at home in Peru: live online classes in English, what the General Education Law says, and a weekly plan you can track.',
  ogDescription: 'For families educating children at home in Peru: structured, live coding and maths classes in English with one mentor, what Ley 28044 says about schooling and distance education, what we could not verify, and a Python tool for tracking a home maths plan.',
  twitterDescription: 'Homeschooling in Peru? Live coding and maths classes in English, and a plan you can check.',
  pageName: 'Homeschool Coding and Maths in Peru',
  webPageDescription: 'A guide for families learning at home in Peru who want coding and maths, built from Ley 28044 as published by MINEDU on gob.pe, the CNEB, RM 501-2025, the OPI 2025 rules and INEI, with an original Python lesson on sets.',
  courseDescription: 'Live online coding and maths classes taught in English for children and teenagers learning at home in Peru, ages 6 to 17, in a group of fifteen to twenty or one to one, at daytime hours that suit a home timetable.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Homeschool coding and maths',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#law', label: 'What the law says' },
    { href: '#gaps', label: 'What home misses' },
    { href: '#plan', label: 'A weekly plan' },
    { href: '#sets', label: 'Tracking code' },
    { href: '#english', label: 'English' }
  ],
  eyebrow: 'Peru &middot; Learning at home &middot; Ages 6 to 17',
  h1: 'Coding and maths for children learning at home in Peru',
  lede: 'Families who educate children at home, for a year, for a move, or for longer, usually find maths and coding the hardest subjects to run well alone. Both reward a teacher who can see a child\'s working and ask the right question at the right moment. This page explains what Peru\'s General Education Law says, what we could not find, and how live classes can carry the coding and maths part of a home week.',
  secondaryCta: { href: '#plan', label: 'See a weekly plan' },
  wa: 'Hello Modern Age Coders, our child learns at home in Peru and we would like live coding and maths classes in English. Could we book a free class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students worldwide &middot; every class live, online and in English',
  spec: [
    ['Who', 'Children and teenagers, 6 to 17'],
    ['Subjects', 'Coding and maths, together or apart'],
    ['Teaching language', 'English only'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Peru times', 'Daytime hours welcome'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In one paragraph',
  capsule: 'Children learning at home in Peru can take coding and maths as live online classes in English with Modern Age Coders: a mentor based in India teaches each lesson in real time, in a group of fifteen to twenty or one to one, and daytime hours, which suit a home timetable, are easy to arrange. We are not a school and award no Peruvian grades; we cover two subjects carefully, from age 6 to 17, and the first class is free.',

  picks: {
    eyebrow: 'Three starting points',
    h2: 'Which coding or maths course fits a home learner?',
    lede: 'Choose by age and by which subject the family finds hardest to teach. All three start from where the child is.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'HCM / 01', title: 'Coding for children, 6 to 10', note: 'Block coding first, then games and small apps. Short projects with a visible result each week, which helps a parent see progress without being a programmer.' },
      { course: 'maths-through-coding', code: 'HCM / 02', title: 'Maths through coding, 10 to 15', note: 'Both subjects at once: fractions, patterns, geometry and data explored by writing Python. A natural fit for a home week where time is precious.' },
      { course: 'complete-high-school-mathematics-mastery', code: 'HCM / 03', title: 'Secondary maths', note: 'Teen maths from equations through functions and trigonometry towards calculus, checked by a mentor, so a parent no longer has to mark work they last saw at school.' }
    ]
  },

  sections: [
    {
      id: 'law',
      eyebrow: 'The legal text',
      h2: 'Is homeschooling allowed in Peru? What the law says',
      lede: 'We can only report what we read, and we are not lawyers. The General Education Law, Ley 28044 of 17 July 2003, published by MINEDU on gob.pe, is the starting point. It does not use the word "homeschooling". These are the articles a family will meet first.',
      body: [
        { kind: 'table', numCols: [], caption: 'Four articles of Ley 28044, Ley General de Educación, and what they say', head: ['Article', 'What it says, in our English', 'Key words in the Spanish text'], rows: [
          ['Art. 4', 'Education is a public service, free at every level and modality when the State provides it', '"cuando lo provee el Estado es gratuita"'],
          ['Art. 12', 'Education is compulsory for inicial, primaria and secundaria; parents must ensure timely enrolment and continued attendance in educational centres and programmes', '"asegurar la matrícula oportuna de los estudiantes y su permanencia en los centros y programas educativos"'],
          ['Art. 27', 'Distance education is a modality of the system, using technology, applicable to all stages under the relevant rules, to complement, reinforce or replace face-to-face education', '"complementar, reforzar o reemplazar la educación presencial"'],
          ['Art. 54', 'The family is responsible in the first place for the integral education of the children; parents must educate their children and ensure they finish their education', '"responsable en primer lugar de la educación integral de los hijos"']
        ] },
        { kind: 'source', html: 'Source: Ley N.° 28044, Ley General de Educación, in the copy MINEDU publishes on gob.pe (cdn.www.gob.pe), read on 8 and 9 November 2026. The English summaries are ours. This is not legal advice.' },
        { kind: 'two', mt: true,
          leftH3: 'What we could not verify',
          left: [
            'We searched gob.pe on 9 November 2026 for "homeschooling" and "educación en casa" and found no MINEDU norm, procedure or guidance on home education. That does not prove none exists; it means we cannot point you to one.',
            'So we do not say home education is permitted, forbidden or regulated in any particular way. Article 12 speaks of enrolment in "centros y programas educativos", and Article 27 recognises distance education "de acuerdo con la normatividad en la materia", meaning under rules we have not reviewed.'
          ],
          rightH3: 'What a family can do',
          right: [
            'Ask the local UGEL or MINEDU directly, and take advice from a Peruvian lawyer before deciding how a child\'s schooling is registered. Families using a foreign online school should also ask that school how its studies are recognised.',
            'What we can say with confidence is narrower: our classes are not a school, are not a distance-education programme under Article 27, and award no Peruvian grade or certificate. They teach two subjects, live and in English, alongside whatever schooling the family has arranged.'
          ] }
      ]
    },
    {
      id: 'gaps',
      tint: 'tint',
      eyebrow: 'What home learners miss',
      h2: 'What does a child learning at home miss in coding and maths?',
      lede: 'In coding, less than you might expect, because Peruvian schools teach no computing subject. In maths, a teacher who sees the working. And in competitions, the school that enters you.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Coding: little', p: 'The CNEB, which MINEDU applies to every modality of basic education, has no computing or programming area; digital skills sit in a competency shared across subjects. A child at school would mostly need outside classes for coding too.' },
          { h3: 'Maths: the second pair of eyes', p: 'A parent can explain a method; it is much harder to spot, from finished answers, where a child\'s reasoning went wrong. That diagnosis is what a maths teacher adds.' },
          { h3: 'Competitions: the entry route', p: 'ONEM is entered through the school stage. The OPI 2025 rules required contestants to be enrolled in a Peruvian school in 2025 or to have finished in 2024. Check each organiser\'s current rules.' }
        ] },
        { kind: 'p', mt: true, html: 'There is also the social side. In a group class a home learner works with fifteen to twenty children of a similar age, answers questions in front of others and sees how their peers think. Families who want that choose a group; families who want a pace set entirely by their child choose one to one. Parents who read Spanish can find our general page on <a class="ag-inline-link" href="/clases-de-programacion-para-ninos-online-peru">clases de programación para niños online</a>.' }
      ]
    },
    {
      id: 'plan',
      eyebrow: 'A weekly plan',
      h2: 'How can a homeschool family plan coding and maths each week?',
      lede: 'With two fixed live sessions and a little structured practice around them. Here is a plan we often suggest; it is ours, and families change it freely.',
      body: [
        { kind: 'ol', items: [
          '<strong>Two live classes a week.</strong> One coding, one maths, or two of one subject, at daytime hours that suit a home routine. A Lima morning is an Indian evening, so daytime classes are easy to arrange.',
          '<strong>Twenty minutes of practice on two other days.</strong> Short problems set by the mentor and checked at the next class, so the parent is not the marker.',
          '<strong>Rotate the four maths competencies.</strong> The CNEB names four: quantity; regularity, equivalence and change; movement, form and location; data and uncertainty. A home plan drifts towards whichever one the parent is most comfortable with; the program below catches that.',
          '<strong>One project a month.</strong> A game, a chart from real data, a geometry drawing in Python. Something the child can show the family.',
          '<strong>A monthly note from the mentor.</strong> What the child can now do, and what comes next. Families who keep records for any purpose can file it.'
        ] },
        { kind: 'p', mt: true, html: 'If the family follows the Peruvian school calendar, the 2026 year ran from 16 March to 18 December 2026 for regular basic education under RM 501-2025-MINEDU, while the same norm gave alternative basic education (EBA) two periods, from 13 March to 26 July and from 10 August to 20 December. Home learners can follow either rhythm, or none: our classes run all year. For children around ten, our Spanish page <a class="ag-inline-link" href="/programacion-para-ninos-de-10-anos">programación para niños de 10 años</a> suggests where to start.' }
      ]
    },
    {
      id: 'sets',
      tint: 'tint',
      eyebrow: 'A real lesson',
      h2: 'How can I check that a home maths plan covers everything?',
      lede: 'Write down which competencies each week touched and let Python compare them with the full list. It is a lesson we give children of about 11 and over, and parents find the tool useful in its own right.',
      body: [
        { kind: 'two',
          leftH3: 'The plan',
          left: [
            'A family logs four weeks of home maths. Week 1 was all number work. Week 2 added patterns. Week 3 was patterns only. Week 4 mixed number work with a little data. It felt balanced. The plan is invented for the lesson.',
            'Each week becomes a Python <code>set</code> of competency labels, and the four CNEB competencies become one more set.'
          ],
          rightH3: 'What sets answer',
          right: [
            '<strong>Union</strong> answers "what did we touch at all?". <strong>Difference</strong> answers "what did we never touch?". <strong>Intersection</strong> answers "what did we touch every single week?".',
            'The program shows that geometry, the "movement, form and location" competency, never appeared, that nothing appeared every week, and that data appeared only once.'
          ] },
        { kind: 'code', label: 'coverage.py: which maths areas did four weeks touch?', lang: 'Python', code: CODE, note: 'It prints <code>covered: [\'data and uncertainty\', \'quantity\', \'regularity and change\']</code>, then <code>missing: [\'form and movement\']</code>, then <code>in every week: []</code>, and finally <code>only once: [\'data and uncertainty\']</code>.' },
        { kind: 'p', mt: true, html: 'Sets fit this job because they ignore order and duplicates: a competency touched three times is still one member of <code>covered</code>. The first line uses <code>set().union(*weeks.values())</code>, where the star unpacks every week\'s set into one call. The last line counts, for each competency, how many weeks contain it, using the fact that <code>True</code> counts as 1 in a sum.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Fix the plan.</strong> Change week 3 so the program reports nothing missing. What is the smallest change?',
          '<strong>Add coding.</strong> Make a second set of coding skills (loops, conditions, functions, lists) and track those too.',
          '<strong>Find the favourites.</strong> Print the competencies that appeared in at least three weeks.',
          '<strong>Explain it.</strong> In two English sentences, tell a parent what <code>COMPETENCIES - covered</code> means.'
        ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'The teaching language',
      h2: 'Can a home-educated child in Peru learn coding and maths in English?',
      lede: 'Yes, and many home-educating families choose English on purpose. Programming is written in English keywords, and maths is mostly symbols; the English needed for both is small, repeated and learnt quickly.',
      body: [
        { kind: 'two',
          leftH3: 'How classes handle it',
          left: [
            'Our mentors, based in India, speak clearly and slowly, type every new word in the chat and keep the work on screen. A child can answer with a number, a line of code or a few words.',
            'On EF\'s 2025 index of adult English, Peru as a whole sits at 519 (moderate) while the capital reaches 555 (high). Children tend to settle faster than adults, and one free lesson usually tells a parent how their child copes.'
          ],
          rightH3: 'For maths in particular',
          right: [
            'Families who want maths taught in English for primary-age children can read our Spanish page <a class="ag-inline-link" href="/clases-de-matematicas-en-ingles-para-ninos">clases de matemáticas en inglés para niños</a>. Older learners can see <a class="ag-inline-link" href="/profesor-particular-de-matematicas-online-peru">profesor particular de matemáticas online</a>.',
            'We teach alongside whatever curriculum the family follows, Peruvian or foreign, and always explain the reason behind each method rather than a trick.'
          ] }
      ]
    },
    {
      id: 'home',
      tint: 'tint',
      eyebrow: 'At home',
      h2: 'What does a home learner need for live classes?',
      lede: 'A computer, a connection and a quiet corner. In Peru the computer is the hard part: INEI found that 36.4% of households had at least one in the second quarter of 2026.',
      body: [
        { kind: 'three', cells: [
          { h3: 'A computer', p: 'A laptop or desktop for coding from about age 9; a tablet will do for block coding and for maths with younger children.' },
          { h3: 'A routine', p: 'The same two slots every week. Home learners who keep fixed class times progress more steadily than those who move them often.' },
          { h3: 'No adult AI accounts', p: 'Vendor terms set the floors (18 for Claude; parental permission under 18 for ChatGPT), so our children\'s classes simply leave them out.' }
        ] },
        { kind: 'p', mt: true, html: 'Families in the capital interested in English-medium learning more broadly can read our page on <a class="ag-inline-link" href="/english-medium-coding-classes-lima">English-medium coding classes in Lima</a>. Whatever the family\'s setting, the promise is the same: the same quality of teaching anywhere in Peru, and children who learn to think through a problem rather than copy an answer.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'What progress looks like for a home learner',
    lede: 'Our own markers for coding and maths together. A parent can check each one without being an expert in either subject.',
    table: { numCols: [], caption: 'Signs of progress in coding and maths for children learning at home (ours)', head: ['Stage', 'In coding', 'In maths'], rows: [
      ['1', 'Builds a small game or animation and explains it', 'Explains each step of a method aloud'],
      ['2', 'Uses loops and conditions without help', 'Chooses a method for an unfamiliar problem'],
      ['3', 'Writes functions and fixes their own bugs', 'Checks answers by estimating or substituting'],
      ['4', 'Plans and finishes a project over a month', 'Connects ideas across all four competencies'],
      ['5', 'Uses code to explore a maths question', 'Gives an argument that covers every case']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your child to teach you one thing each week. It is the best progress check there is.',
      'Keep the mentor\'s monthly notes together; over a year they show the whole journey.'
    ] },
    right: { h3: 'For the child', ps: [
      'Keep every program and every hard maths problem in one folder.',
      'Look back after three months. What was hard then should feel easy now.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more coding and maths courses for home learners',
    lede: 'Grouped by age, half coding and half maths. All live, all in English.',
    bands: [
      { num: 'I', h3: 'Younger children', sub: 'Ages 6 to 9', courses: [
        { code: 'HCM / YOUNG / 01', slug: 'early-math-foundations', title: 'Early maths', blurb: 'Counting and shapes with real objects.' },
        { code: 'HCM / YOUNG / 02', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Games and stories from blocks.' },
        { code: 'HCM / YOUNG / 03', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning and readiness', blurb: 'Puzzles that train patient reasoning.' }
      ] },
      { num: 'II', h3: 'Middle years', sub: 'Ages 9 to 13', courses: [
        { code: 'HCM / MID / 01', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths', blurb: 'Place value, fractions and measuring, understood.' },
        { code: 'HCM / MID / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'The first typed code, with games.' },
        { code: 'HCM / MID / 03', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Middle school maths', blurb: 'The bridge from arithmetic to algebra.' }
      ] },
      { num: 'III', h3: 'Teenagers', sub: 'Ages 13 to 17', courses: [
        { code: 'HCM / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A full year, first line to capstone.' },
        { code: 'HCM / TEEN / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'The algebra later maths depends on.' },
        { code: 'HCM / TEEN / 03', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'For families following a Cambridge route.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live classes in a home-education week',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Weekday mornings', l: 'Daytime in Peru is evening in India, so morning classes are simple.' },
      { time: 'Afternoons', l: 'Also possible; India is then late at night or early morning.' },
      { time: 'One to one', l: 'A private mentor whose pace follows the child.' }
    ],
    cells: [
      { h3: 'Two subjects, one mentor team', p: 'Coding and maths planned to fit together.' },
      { h3: 'Practice set and marked', p: 'The mentor checks it, not the parent.' },
      { h3: 'Clear English', p: 'Short sentences, key words typed.' },
      { h3: 'Grouped by age', p: 'Home learners meet children their own age.' },
      { h3: 'Monthly notes', p: 'What was learnt and what comes next.' },
      { h3: 'Group or private', p: 'Fifteen to twenty peers, or one to one.' }
    ]
  },

  projectsH2: 'What our learners make',
  projectsLede: 'Projects from children who have studied with us for a year or longer. More in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Parents and learners on Google, quoted as written.',

  fees: {
    h2: 'Fees for home-learning families in Peru',
    lede: 'Monthly fees in US dollars, charged by card. The soles figure on your statement comes from your bank\'s conversion on the day of each payment.',
    free: ['A free first class', 'Coding or maths, your choice', 'No card asked for'],
    group: ['Fifteen to twenty children of similar age', 'The same mentor each week', 'Two live classes a week', 'Monthly, with no long contract'],
    one: ['A private mentor', 'Pace set by your child', 'Daytime hours if you like']
  },

  faq: {
    eyebrow: 'Questions from home-learning families',
    h2: 'Homeschool coding and maths in Peru: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. We teach both subjects only in English, live and online. A home learner whose English is still developing can lean on the screen: the mentor types new words, and the code or working stays visible throughout.' },
      { q: 'Is homeschooling legal in Peru?', a: 'We cannot answer that and are not lawyers. Ley 28044 makes education compulsory and asks parents to ensure enrolment in educational centres and programmes; it also recognises distance education under its own rules. We found no MINEDU norm on home education on gob.pe. Ask your UGEL or a lawyer.' },
      { q: 'Can your classes count as my child\'s schooling?', a: 'No. We are not a school or a distance-education programme, and we award no Peruvian grades, certificates or school records. We teach coding and maths alongside whatever schooling the family has arranged.' },
      { q: 'Do you follow the Peruvian curriculum in maths?', a: 'We plan maths around the CNEB\'s four competencies, so a family following Peruvian school can see the link. We also teach alongside foreign curricula such as Cambridge or the IB. The school or programme the child is registered with assesses them, not us.' },
      { q: 'Can a homeschooled child enter ONEM or the OPI?', a: 'Both work through schools. ONEM starts with a school stage, and the OPI 2025 rules required enrolment in a Peruvian school in 2025 or graduation in 2024. Check each organiser\'s current rules; we have no connection with them.' },
      { q: 'What time can classes be?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is ten and a half hours ahead of Peru all year, so a 10:00 class in Lima is 20:30 in India, an easy hour for mentors.' },
      { q: 'Should we choose a group or one to one?', a: 'A group of fifteen to twenty gives a home learner peers and the habit of thinking aloud in front of others. One to one lets the child set the pace entirely. Many home-learning families start in a group and add one to one for the harder subject.' },
      { q: 'Is there a certificate?', a: 'Children who pass a course\'s final exam receive our own completion certificate. For a home learner it is a useful record of a finished course, but it is not a school document and carries no Peruvian status.' },
      { q: 'Will my child use ChatGPT?', a: 'No. Our classes for under-18s never use adult AI accounts: Claude requires users to be 18, and ChatGPT needs a parent\'s permission under 18. The thinking stays with the child.' },
      { q: 'How do we pay?', a: 'By card, monthly, in US dollars; your bank converts the charge into soles. The first class is free and needs no card.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'Further reading for home-learning families.',
    items: [
      { href: '/clases-de-programacion-para-ninos-online-peru', label: 'Clases de programación para niños online', p: 'Online coding for children, in Spanish.' },
      { href: '/clases-de-matematicas-en-ingles-para-ninos', label: 'Matemáticas en inglés para niños', p: 'Maths in English for primary children.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'Where all our Peru guides are listed.' },
      { href: '/english-medium-coding-classes-lima', label: 'English-medium coding classes, Lima', p: 'For bilingual and international families.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What happens in a live lesson.' },
      { href: '/we-teach-you-how-to-think', label: 'We teach you how to think', p: 'Reasoning first, in both subjects.' }
    ]
  },

  start: {
    h2: 'Book a free coding or maths class',
    lede: 'Choose coding or maths for the free class. A mentor works with your child for a lesson, you watch, and afterwards we suggest how the two subjects could fit your home week, in a group or one to one.',
    readFirst: 'You can read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or look at every syllabus in the <a class="ag-inline-link" href="/courses">course list</a>.',
    note: 'Lessons are live video classes taught from India, in English. We answer WhatsApp messages in English.',
    formNote: 'Free; no card, no obligation.'
  },

  footer: {
    cols: [
      { h4: 'Learning at home', links: [
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/we-teach-you-how-to-think', label: 'Thinking, not copying' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/courses', label: 'All courses' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Classes in Peru' },
        { href: '/clases-de-programacion-para-ninos-online-peru', label: 'Programación para niños' },
        { href: '/clases-de-matematicas-en-ingles-para-ninos', label: 'Matemáticas en inglés' },
        { href: '/programacion-para-ninos-de-10-anos', label: 'Programación a los 10 años' }
      ] }
    ],
    bottomRight: 'Which competency did we skip?'
  },

  personalityCss: `
.ag-root.ag-hcm .ag-hero h1 { max-width: 21ch; letter-spacing: -0.015em; }
.ag-root.ag-hcm .ag-capsule { border-left-width: 5px; }
.ag-root.ag-hcm .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-hcm .ag-table td:last-child { font-style: italic; }
.ag-root.ag-hcm .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'Ley N.° 28044, Ley General de Educación (MINEDU copy on gob.pe; articles 4, 12, 27, 54); gob.pe searches for home education (9 November 2026, no norm found); MINEDU CNEB; RM 501-2025 (Tabla 1 and EBA periods, checked by eye); Edades normativas; Reglamento OPI 2025; UGEL 06 ONEM 2026 oficio; INEI Boletín TIC II trimestre 2026; EF EPI 2025; vendor terms via content/ai-tool-age-audit.json. Read 8 and 9 November 2026.',
    localProject: 'An original Python lesson for families learning at home in Peru: four invented weeks of home maths, each a set of CNEB competency labels; set().union(*) shows what was covered, difference shows "form and movement" was missed, set.intersection(*) shows nothing appeared every week, and a membership count shows data appeared only once. Lesson family: sets for coverage tracking.',
    requiredMentions: ['missing: [\'form and movement\']', 'only once: [\'data and uncertainty\']', 'in every week: []', 'Which competency did we skip?', 'for children learning at home in Peru', 'found no MINEDU norm, procedure or guidance on home education', 'from 13 March to 26 July and from 10 August to 20 December', 'enrolled in a Peruvian school in 2025 or to have finished in 2024'],
    sources: [
      { claim: 'Ley 28044 articles 4, 12, 27 and 54: free public education, compulsory schooling and parents\' duty to enrol, distance education as a modality, the family\'s role.', url: 'https://cdn.www.gob.pe/uploads/document/file/4049722/Ley%2028044%20-%20Ley%20General%20de%20Educaci%C3%B3n%20.pdf' },
      { claim: 'Ley 28044 dated 17 July 2003.', url: 'https://www.gob.pe/institucion/minedu/normas-legales/3844908-28044' },
      { claim: 'No home-education norm found in gob.pe searches on 9 November 2026.', url: 'https://www.gob.pe/busquedas?term=homeschooling' },
      { claim: 'CNEB applies to EBR, EBA and EBE; four Matemática competencies; no computing area.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: '2026 calendar: EBR 16 March to 18 December; EBA periods 13 March to 26 July and 10 August to 20 December.', url: 'https://cdn.www.gob.pe/uploads/document/file/8968298/7380466-rm-n-501-2025-minedu.pdf' },
      { claim: 'OPI 2025 eligibility: enrolled in a Peruvian school in 2025 or graduated in 2024.', url: 'https://opi.utec.edu.pe/Reglamento_OPI_2025.pdf' },
      { claim: '36.4% of households had a computer, II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'EF EPI 2025: Peru 519, Lima 555.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' }
    ],
    rejectedClaims: [
      'Whether home education is legal, permitted or regulated in Peru: not verified from a gob.pe norm; the page says so and gives no legal advice.',
      'Numbers of homeschooling families in Peru: no primary source; none given.',
      'Claims that our classes satisfy any schooling requirement or count as distance education under Art. 27: refused; the page says the opposite.',
      'Religious or pedagogical labels (Montessori, Catholic, Christian) seen in autocomplete: not used; no identity or religion data.',
      'Spanish-language teaching or a Peruvian qualification: neither offered.'
    ]
  }
};
