// SHIP: market (en explainer, guides) | robotics vs coding for kids in Peru: what a robot is, WRO categories, MINEDU, choosing | proportional steering: a fixed turn wobbles forever, a gain too small is slow, too big runs away
'use strict';
// Robotics vs coding for kids in Peru (ag- English explainer, Peru cluster row PE071, hubGroup guides; alloc rob, #594D00).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md (section 3.7: robotics pages are explainers; we teach coding,
// never imply a kit or hardware); writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english"; 2026-11-08: timing flexible, any time.
// Search: "robotics vs coding for kids", English twin of "robótica o programación para niños" (KEYWORDS.md section 2: robotics
// 364 depth, the Peruvian parent's default "tech for kids" word). The Spanish sibling (robotica-o-programacion-para-ninos, not
// live yet) is built round MINEDU's robotics record and hysteresis on a light sensor. This page takes its own spine: a robot as
// sense, decide, act; what a real robotics competition asks of children (the WRO's own category table); MINEDU in one short
// section; a choice by child (ours); the steering lesson; what we teach and what we do not sell; ages; the clock.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/robotics-vs-coding-for-kids-peru/, read
// 9 November 2026; every quote string-matched in the raw text):
//  - WRO Association, Categories (wro-association.org/competition/categories/, wro-categories.html.txt): "4 competition categories
//    for students 8-19/22 years old"; RoboMission "Age: Elementary: 8-12 | Junior: 11-15 | Senior: 14-19 Team size: 2-3 people
//    guided by a coach Hardware: Free choice Software: Free choice Maximum size: Max. 25 x 25 x 25 cm"; "Because the field is set
//    up randomly each round, the robot needs to be able to make its own decisions during the run."; RoboSports "Age: 11-19",
//    "Max. 20 x 20 x 20 cm", "the current game is Double Tennis"; Future Innovators "Age: Elementary: 8-12 | Junior: 11-15 |
//    Senior: 14-19", "Must fit in 2x2x2m booth", "a project-based competition"; Future Engineers "Age: 14-22", "Max. 30 x 20 x
//    30cm", "the current game is all about autonomous driving. The challenge is to build a robot with a steering drive that can
//    drive around a track autonomously."
//  - WRO International Final 2026 (FACTS 124, minedu/wro-if-2026.txt): "WRO 2026 – International Final in San Juan, Puerto Rico
//    08. – 10. December 2026".
//  - MINEDU DITE, Robótica Educativa PDF (FACTS 52 to 54, minedu/minedu-robotica.txt; undated, plans "para el 2025"): "la robótica
//    en educación no es el objetivo, es el medio."; "desde el año 1996 con el proyecto Infoescuela"; "en los años 2009 y 2010, el
//    MINEDU dota de Kits LEGO Wedo a casi el 100% de Instituciones Educativas de Gestión Pública de Educación Primaria"; "desde el
//    año 2022 organiza la Hackathon en “Robótica Educativa y Tecnologías Digitales”".
//  - MINEDU press note, Hackathon 2025 (FACTS 48, 49): "proyectos de IA y robótica"; "entre 2023 y 2025, la presencia de
//    estudiantes mujeres creció en 28 %".
//  - MINEDU press note, 2 October 2023 (FACTS 123): a COAR Lima 4° grado team, national category "Futuros Innovadores-Senior",
//    "WAI-FLY, un dron impreso en 3D equipado con una inteligencia artificial", Olimpiada Mundial de Robótica 2023 in Panamá.
//    Student names are in the source and deliberately not printed.
//  - CNEB (FACTS 38): "Diseña y construye soluciones tecnológicas para resolver problemas".
//  - INEI TIC II Trimestre 2026 (MARKET 1.4): 36.4% of households with at least one computer.
//  - Time: tzdata America/Lima UTC-5, Asia/Kolkata UTC+5:30 (facts-geo/timezone.tsv).
// Our own example (steer.py in the src-pages folder, run with python3 -I, Python 3.14; the start offset of 10 and the simple
// model are ours), exact output:
//    fixed turn of 3: [7.0, 4.0, 1.0, -2.0, 1.0, -2.0, 1.0, -2.0]
//    gain 0.3: [7.0, 4.9, 3.4, 2.4, 1.7, 1.2, 0.8, 0.6]
//    gain 0.6: [4.0, 1.6, 0.6, 0.3, 0.1, 0.0, 0.0, 0.0]
//    gain 1.6: [-6.0, 3.6, -2.2, 1.3, -0.8, 0.5, -0.3, 0.2]
//    gain 2.2: [-12.0, 14.4, -17.3, 20.7, -24.9, 29.9, -35.8, 43.0]
// Lesson family: proportional control. A simulated line-follower that steers back by a fixed amount wobbles across the line for
// ever; steering by gain times the error settles; a small gain is slow, a large one overshoots, and above 2 it runs away.

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const FIXED = [
  'def fixed_turn(offset, turn=3.0, steps=8):',
  '    path = []',
  '    for _ in range(steps):',
  '        offset = offset - turn if offset > 0 else offset + turn',
  '        path.append(round(offset, 1))',
  '    return path',
  '',
  '',
  'print("fixed turn of 3:", fixed_turn(10.0))'
].join('\n');

const FIXED_OUT = 'fixed turn of 3: [7.0, 4.0, 1.0, -2.0, 1.0, -2.0, 1.0, -2.0]';

const PROP = [
  'def proportional(offset, gain, steps=8):',
  '    path = []',
  '    for _ in range(steps):',
  '        offset = offset - gain * offset',
  '        path.append(round(offset, 1) + 0.0)',
  '    return path',
  '',
  '',
  'for gain in (0.3, 0.6, 1.6, 2.2):',
  '    print(f"gain {gain}:", proportional(10.0, gain))'
].join('\n');

const PROP_OUT = [
  'gain 0.3: [7.0, 4.9, 3.4, 2.4, 1.7, 1.2, 0.8, 0.6]',
  'gain 0.6: [4.0, 1.6, 0.6, 0.3, 0.1, 0.0, 0.0, 0.0]',
  'gain 1.6: [-6.0, 3.6, -2.2, 1.3, -0.8, 0.5, -0.3, 0.2]',
  'gain 2.2: [-12.0, 14.4, -17.3, 20.7, -24.9, 29.9, -35.8, 43.0]'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'guides', label: 'Robotics or coding for kids?' },
  slug: 'robotics-vs-coding-for-kids-peru',
  code: 'rob',
  accent: '#594D00',
  accentRationale: 'Robotics vs coding for kids in Peru: a dark olive brass #594D00, the colour of machined metal and of the dry hills above the coast, sober for a page that helps parents decide; contrast is above 4.5 on every paper tone the build checks',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Robotics vs coding for kids in Peru',
  title: 'Robotics vs Coding for Kids in Peru: Which to Choose First',
  description: 'Robotics vs coding for kids in Peru: what each teaches, what robot competitions ask, and why we teach the code that drives robots, live online and in English.',
  ogDescription: 'A robot senses, decides and acts; the deciding is code. What the World Robot Olympiad asks of children by age, what MINEDU has done with robotics, how to choose, and a steering lesson.',
  twitterDescription: 'Robotics or coding for a child in Peru? A plain guide, and live coding classes in English for the logic every robot runs on.',
  pageName: 'Robotics vs Coding for Kids in Peru',
  webPageDescription: 'An explainer for families in Peru deciding between robotics and coding for a child, built from the World Robot Olympiad Association\'s category rules, MINEDU\'s educational robotics document and press notes, the CNEB, INEI household data for 2026 and the tz database, with an original lesson on how a robot steers.',
  courseDescription: 'Live online coding classes for children aged 6 to 12 in Peru, taught in English by mentors based in India, covering the sequence, sensing, decision and control logic that robots run on, through blocks, Python and simulations; no hardware is sold or required.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Robotics vs coding',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#difference', label: 'The difference' },
    { href: '#wro', label: 'Competitions' },
    { href: '#choose', label: 'Choosing' },
    { href: '#lesson', label: 'Steering lesson' },
    { href: '#clock', label: 'Peru time' }
  ],
  eyebrow: 'Peru &middot; Ages 6 to 12 &middot; A guide for parents, classes live in English',
  h1: 'Robotics vs coding for kids in Peru',
  lede: 'In Peru, "robotics" is often the first word a parent reaches for when they want a child to learn technology. It is a good instinct: robots are exciting, physical and easy to show off. But every robot that does something clever is running a program, and that program is where most of the thinking lives. This page explains the difference between robotics and coding, what real robotics competitions expect of children, how to choose for your child, and what we teach.',
  secondaryCta: { href: '#lesson', label: 'See how a robot steers' },
  wa: 'Hello Modern Age Coders, we are in Peru and are deciding between robotics and coding for our child. Could we book a free first coding class in English?',
  heroNote: 'Teaching live since 2020 &middot; 4.9 from about 547 Google reviews &middot; we teach the code, and sell no hardware',
  spec: [
    ['Ages', '6 to 12, and teens'],
    ['What we teach', 'The logic and code robots run on'],
    ['Hardware', 'None needed, none sold'],
    ['Format', 'Live video, in English'],
    ['Class size', 'Fifteen to twenty, or one to one'],
    ['Peru time', 'Any hour you choose']
  ],
  capsuleQ: 'Robotics or coding?',
  capsule: 'Robotics is building machines that sense, decide and act; coding is writing the instructions, and in any robot the deciding is done by code. For most children in Peru coding is the better first step: it needs only a computer, it teaches the logic every robot depends on, and it carries straight into Python, games and AI. Modern Age Coders teaches that logic in live online classes, in English, with mentors based in India, for ages 6 to 12 and up, either in groups or privately, booked for whatever hour your household prefers. We sell no robot hardware.',

  picks: {
    eyebrow: 'Our courses',
    h2: 'Three courses that teach how machines think',
    lede: 'No kit, no parts to buy: the logic that makes a robot useful, learnt on a computer the family already has.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'ROB / 01', title: 'Problem Solving and Computational Thinking', note: 'For younger children. Breaking a task into exact steps, spotting patterns and checking every case, the same planning a robot\'s program needs before it moves at all.' },
      { course: 'python-ai-kids-masterclass', code: 'ROB / 02', title: 'Python and AI for Kids', note: 'Ages 9 to 12. Programs that read numbers, decide and repeat, including simulated sensors and a first look at how machines learn from examples.' },
      { course: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', code: 'ROB / 03', title: 'Hackathon Prep for Kids', note: 'Ages 8 to 12. Twelve weeks from an idea to a software project the child presents and defends, the kind of thinking project-based robotics categories reward.' }
    ]
  },

  sections: [
    {
      id: 'difference',
      eyebrow: 'The difference',
      h2: 'What is the difference between robotics and coding for kids?',
      lede: 'Robotics is the whole machine: a body, motors, sensors and a program. Coding is the program. A robot without code is a model; code without a robot can still run games, apps, websites and AI.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Sense', p: 'A robot reads the world through sensors: light, distance, touch, a camera. In code, each reading is just a number arriving many times a second.' },
          { h3: 'Decide', p: 'The program compares those numbers with rules: if the line is to the left, steer left; if something is close, stop. This is the part that takes real thinking.' },
          { h3: 'Act', p: 'Motors turn, wheels move, an arm lifts. The action is only as good as the decision before it, which is why the decision is where children learn most.' }
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What robotics adds',
          left: [
            'Building teaches mechanical sense: gears, balance, why a robot tips over on a slope. Children see their code act on the real world, which is motivating, and team builds teach cooperation.',
            'It also brings costs and limits: parts to buy, a kit that must be at home or at a centre, and lessons where much of the time goes on assembly rather than on the program.'
          ],
          rightH3: 'What coding adds',
          right: [
            'Coding goes deeper into the decide step and much further beyond it. The same if, loop and variable that drive a robot also build games, apps and data projects, and lead to Python, Java and AI.',
            'It needs only a computer. INEI found a computer in 36.4% of Peruvian households in the second quarter of 2026, so a family that has one already has everything a coding class needs.'
          ] }
      ]
    },
    {
      id: 'wro',
      tint: 'tint',
      eyebrow: 'Robot competitions',
      h2: 'What does a robotics competition actually ask children to do?',
      lede: 'Look at the World Robot Olympiad, which runs categories for students from 8 to 19, and to 22 in one category. Its own rules show how much of robotics is programming.',
      body: [
        { kind: 'table', numCols: [], caption: 'World Robot Olympiad categories, 2026 season, as published by the WRO Association', head: ['Category', 'Ages', 'Team', 'Robot size limit', 'The task'], rows: [
          ['RoboMission', 'Elementary 8 to 12, Junior 11 to 15, Senior 14 to 19', '2 or 3, with a coach', '25 x 25 x 25 cm', 'Build and program an autonomous robot that solves challenges on a field'],
          ['RoboSports', '11 to 19', '2 or 3, with a coach', '20 x 20 x 20 cm', 'Two autonomous robots per team play a sports game (currently Double Tennis)'],
          ['Future Innovators', 'Elementary 8 to 12, Junior 11 to 15, Senior 14 to 19', '2 or 3, with a coach', 'Fits a 2 x 2 x 2 m booth', 'A project that helps solve a real-world problem, presented to judges'],
          ['Future Engineers', '14 to 22', '2 or 3, with a coach', '30 x 20 x 30 cm', 'A robot with a steering drive that drives round a track on its own']
        ] },
        { kind: 'source', html: 'Source: WRO Association, "Categories", wro-association.org/competition/categories, read on 9 November 2026. Hardware and software are "Free choice" in every category. The 2026 International Final is in San Juan, Puerto Rico, on 8 to 10 December 2026 (WRO Association). We are not connected with the WRO or its Peruvian organisers.' },
        { kind: 'two', mt: true,
          leftH3: 'Notice the word autonomous',
          left: [
            'In RoboMission, the WRO explains, "the field is set up randomly each round", so "the robot needs to be able to make its own decisions during the run". Nobody steers it with a remote. Every decision is a line of code written before the run.',
            'Future Engineers goes further: a car-like robot must drive itself round a track. That is a problem in control, the subject of the lesson further down this page.'
          ],
          rightH3: 'What that means for a parent',
          right: [
            'A child who reaches the senior categories will spend far more hours on the program than on the build. In our view, the teams whose robots cope with surprises are usually the teams with strong coders.',
            'Learning to code first is therefore not a detour from robotics. It is the part of robotics that takes longest to learn and transfers to everything else.'
          ] }
      ]
    },
    {
      id: 'minedu',
      eyebrow: 'Robotics in Peruvian schools',
      h2: 'What has MINEDU done with robotics in schools?',
      lede: 'More than many parents realise, and with a clear message: in MINEDU\'s own words, "la robótica en educación no es el objetivo, es el medio", robotics in education is not the goal but the means.',
      body: [
        { kind: 'two',
          leftH3: 'A long record',
          left: [
            'A document from MINEDU\'s directorate for technological innovation (DITE) says the ministry has used educational robotics "desde el año 1996 con el proyecto Infoescuela", and that in 2009 and 2010 it supplied LEGO WeDo kits to almost every public primary school in the country.',
            'Since 2022 the same directorate has organised a Hackathon on educational robotics and digital technologies. MINEDU reported that its 2025 edition rewarded "proyectos de IA y robótica", and that between 2023 and 2025 the number of girls taking part rose by 28%.'
          ],
          rightH3: 'Peruvian students at the top',
          right: [
            'On 2 October 2023 MINEDU announced that a 4th-grade team from COAR Lima, Peru\'s public high-achievement school network, had won a national robotics category and would represent Peru at the World Robot Olympiad 2023 in Panama. Their project was a 3D-printed drone with artificial intelligence that detects and counts ships.',
            'Look at what made that project stand out: detecting and counting ships is software, an AI model running on the drone. The build mattered, but the intelligence was code.'
          ] },
        { kind: 'p', mt: true, html: 'The national curriculum, the CNEB, has no robotics or computing subject of its own. Its science and technology area includes the competency "Diseña y construye soluciones tecnológicas para resolver problemas", designing and building technological solutions to problems. Robotics is one way schools work on it; coding is another. Modern Age Coders has no link with MINEDU, COAR or any school.' }
      ]
    },
    {
      id: 'choose',
      tint: 'tint',
      eyebrow: 'Choosing',
      h2: 'Robotics or coding: which is better for my child?',
      lede: 'It depends on the child, and on what is practical at home. These suggestions are ours, written from years of teaching children of these ages.',
      body: [
        { kind: 'table', numCols: [], caption: 'Our suggestions by child (not a rule)', head: ['If your child', 'Start with', 'Why'], rows: [
          ['Is 6 or 7 and loves building with their hands', 'Blocks-based coding, and hands-on play at home', 'Logic in blocks now; any robotics later will make more sense'],
          ['Is 8 to 10 and asks "how does it work?"', 'Coding, with simulated sensors and games', 'The "how" is almost always the program'],
          ['Already attends a robotics workshop', 'Coding alongside it', 'They will write better robot programs and understand the blocks they use'],
          ['Wants to enter a robot competition later', 'Python first, then the team\'s robot platform', 'Senior categories are won on control and decision code'],
          ['Is more interested in games, apps or AI', 'Coding', 'Robotics would be a detour from what excites them'],
          ['Has no computer at home', 'Talk to us before choosing', 'Our classes need a laptop or desktop; we will be honest if that is a barrier']
        ] },
        { kind: 'p', mt: true, html: 'Families in Lima who are weighing a district summer workshop in robotics against coding at home may find two of our Lima pages useful: <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-surquillo-lima">a Surquillo summer page on the code that drives any robot</a>, and <a class="ag-inline-link" href="/vacaciones-utiles-de-programacion-los-olivos-lima">a Los Olivos page comparing robótica and programación</a>, both in Spanish.' }
      ]
    },
    {
      id: 'lesson',
      eyebrow: 'A steering lesson',
      h2: 'How does a robot follow a line? A lesson in code, no robot needed',
      lede: 'Here is a lesson we teach to children of about 10 to 12, simulated in Python. A small robot starts 10 millimetres to the right of a black line and must steer back onto it. The numbers and the simple model are ours; real robots add speed and friction, but the idea is the same.',
      body: [
        { kind: 'two',
          leftH3: 'The obvious idea',
          left: [
            'Most children first write: if the robot is right of the line, turn left by a fixed amount; if it is left, turn right. In our model a fixed turn moves the robot 3 millimetres sideways each step.',
            'Before running it, the mentor asks: "Where will the robot be after eight steps?" Children usually say "on the line". The program disagrees.'
          ],
          rightH3: 'What actually happens',
          right: [
            'The robot reaches 1 millimetre right of the line, turns 3, and lands 2 millimetres left. Then it turns 3 back and lands 1 right. It never settles: it wobbles across the line for ever.',
            'Real line-followers built this way do exactly that, zig-zagging along the tape. The child has found the problem with their own eyes before anyone names it.'
          ] },
        { kind: 'code', label: 'Version 1: always turn by the same amount', lang: 'Python', code: FIXED },
        { kind: 'code', label: 'What Version 1 prints', lang: 'Output', code: FIXED_OUT, note: 'Exact output of our run with Python 3. Distances from the line in millimetres, one per step; negative means left of the line.' },
        { kind: 'p', html: 'The better idea: <strong>steer by how far off you are</strong>. Far from the line, turn hard; close to it, turn gently. In code the correction is the error times a number called the gain. Engineers call this proportional control, and it is the first idea behind self-driving robots like those in the Future Engineers category.' },
        { kind: 'code', label: 'Version 2: steer in proportion to the error', lang: 'Python', code: PROP },
        { kind: 'code', label: 'What Version 2 prints', lang: 'Output', code: PROP_OUT, note: 'Exact output of our run. A gain of 0.3 creeps back slowly; 0.6 settles within six steps; 1.6 overshoots and swings before settling; 2.2 swings wider every step and runs away.' },
        { kind: 'p', mt: true, html: 'Children then explain the four rows in their own words, in English. Too gentle is slow but safe. A bit stronger is ideal. Too strong overshoots. Much too strong is worse than doing nothing, because each correction is bigger than the error it fixes. <strong>A correction bigger than the mistake makes the mistake grow</strong>, and that sentence is as true of a robot as of many things outside robotics.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ages 8 and 9.</strong> On a paper number line, start a counter at 10 and move it 3 towards zero each turn. Where does it end up after eight turns?',
          '<strong>Ages 10 and 11.</strong> Run both versions. Find, by testing, the largest gain that still settles without crossing the line at all.',
          '<strong>Ages 12 and up.</strong> Change the gain from 2.2 to 2.0 and predict the result before running. Explain why 2 is the turning point in this model.'
        ] }
      ]
    },
    {
      id: 'teach',
      tint: 'tint',
      eyebrow: 'What we teach',
      h2: 'Do you teach robotics online without a kit?',
      lede: 'We teach the programming side of robotics, and we say so plainly: we do not sell robots, kits or parts, and children need none for our classes.',
      body: [
        { kind: 'two',
          leftH3: 'What children do with us',
          left: [
            'Younger children learn exact sequences, loops and conditions in blocks, often by guiding a character or a simulated robot round a grid. Older children write Python that reads simulated sensor numbers, decides and repeats, like the steering lesson above.',
            'Teenagers can go on to control ideas, data from sensors and machine learning. If they later join a school robotics team, they arrive as the person who can write the program.'
          ],
          rightH3: 'What we never claim',
          right: [
            'We do not teach mechanical building, wiring or soldering, and we do not claim that our classes prepare a team for any particular robot platform or competition.',
            'We are not connected with the WRO, MINEDU, COAR or any robotics academy in Peru. A child who finishes a course receives our own completion certificate and nothing more official.'
          ] }
      ]
    },
    {
      id: 'age',
      eyebrow: 'The right age',
      h2: 'At what age should a child start robotics or coding?',
      lede: 'Coding can start at 6 with blocks. Competitive robotics, by the WRO\'s own rules, starts at 8, and the senior categories run to 19. A child who codes from 6 or 7 arrives at 8 already thinking in steps and conditions.',
      body: [
        { kind: 'two',
          leftH3: 'A sensible order',
          left: [
            '<strong>6 to 8:</strong> blocks, sequences and simple conditions on screen. <strong>9 to 11:</strong> typed Python, simulated sensors, games. <strong>12 and up:</strong> control, data and AI, and a robotics team if the child wants one.',
            'Our page on <a class="ag-inline-link" href="/online-coding-classes-for-kids-peru">online coding classes for kids in Peru</a> explains how to judge a live class for children of 6 to 12, and the Spanish-language guide to <a class="ag-inline-link" href="/programacion-para-ninos-de-8-anos">coding at 8, in 3rd grade</a> compares Scratch, Roblox and robotics at that age.'
          ],
          rightH3: 'For teenagers',
          right: [
            'Teenagers who want robotics competitions benefit most from solid Python and some mathematics: angles, rates, averages of noisy readings. Our <a class="ag-inline-link" href="/coding-classes-for-teens-peru">coding classes for teens in Peru</a> page sets out those paths.',
            'Whatever the age, AI tools come after understanding, and only those whose own terms allow the child\'s age. Anthropic sets 18 as the floor for Claude; OpenAI asks for a parent\'s consent before a minor uses ChatGPT.'
          ] }
      ]
    },
    {
      id: 'clock',
      tint: 'tint',
      eyebrow: 'Peru time',
      h2: 'When are the coding classes on Peru time?',
      lede: 'You name the hour. Lima sits five hours behind UTC in every season while Delhi sits five and a half ahead, a fixed gap of ten and a half hours. The rows below are arithmetic, not a schedule.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample Peru hours shown in India time (illustrations only)', head: ['Peru time', 'India time', 'Suits'], rows: [
          ['10:00', '20:30', 'A morning in the January to March break'],
          ['13:30', '00:00, next day', 'Early afternoon at the weekend'],
          ['16:45', '03:15, next day', 'After the school day'],
          ['18:30', '05:00, next day', 'Early evening'],
          ['21:00', '07:30, next day', 'Late evening for teenagers']
        ] },
        { kind: 'source', html: 'Zone rules taken from the tz database maintained by IANA, entries for Lima and Kolkata; the conversions are our own arithmetic.' },
        { kind: 'p', mt: true, html: 'Since neither country moves its clocks, an hour booked in Trujillo or Huancayo stays the same through the year. Every Peru guide is listed on the <a class="ag-inline-link" href="/coding-and-ai-classes-in-peru">coding and AI classes in Peru</a> hub.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How do I know my child is learning to think like a robot programmer?',
    lede: 'By how they plan and explain, not by what they assemble. Our own stages:',
    table: { numCols: [], caption: 'Our stages in control and decision logic', head: ['Stage', 'Can do', 'Can explain'], rows: [
      ['1. Exact steps', 'Guide a character round a grid with no wasted moves', '"Forward two, turn right, forward one."'],
      ['2. Repeat', 'Use a loop instead of copying the same step', '"Repeat four times makes a square."'],
      ['3. Sense and decide', 'React to a number with if and else', '"If it is dark, the light turns on."'],
      ['4. Keep checking', 'Loop over readings and decide each time', '"It checks again every step."'],
      ['5. Control', 'Correct in proportion to an error', '"Big error, big turn; small error, small turn."'],
      ['6. Test the edges', 'Find the setting where a system fails', '"Above 2 it runs away, so I keep it below."']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your child to explain a decision their program makes. If they can say the rule in a sentence, they understand it.',
      'Stage 5 is the steering lesson. It is often the point where children see that maths is useful.'
    ] },
    right: { h3: 'For young engineers', ps: [
      'Predict what your program will do before you run it, especially at the extremes.',
      'When something wobbles or overshoots, ask whether your correction is too big.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for children curious about machines',
    lede: 'All live, in English, with one mentor through the course, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'First logic', sub: 'Ages 6 to 9', courses: [
        { code: 'ROB / LOGIC / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Blocks for sequence, loops and conditions, the base of any robot program.' },
        { code: 'ROB / LOGIC / 02', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'Sprites that sense touches and colours and react.' },
        { code: 'ROB / LOGIC / 03', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Reasoning for young thinkers', blurb: 'Puzzles that train exact, step-by-step thinking.' }
      ] },
      { num: 'II', h3: 'Building worlds', sub: 'Ages 7 to 12', courses: [
        { code: 'ROB / WORLD / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'Command the Agent robot inside Minecraft Education.' },
        { code: 'ROB / WORLD / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox in Luau', blurb: 'Events and physics in Roblox Studio, all scripted.' },
        { code: 'ROB / WORLD / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Rates, angles and errors explored in Python.' }
      ] },
      { num: 'III', h3: 'Teen paths', sub: 'Ages 13 and up', courses: [
        { code: 'ROB / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language most robotics and AI work starts from.' },
        { code: 'ROB / TEEN / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Models that learn from data, like the ship-counting drone.' },
        { code: 'ROB / TEEN / 03', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'A fast language used close to the hardware.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'A week of coding classes from Peru',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'School term', l: 'Most families in Peru book late afternoons, once the school day is done.' },
      { time: 'Summer months', l: 'January to March mornings open up; give us an hour and we find the mentor.' },
      { time: 'Private', l: 'One learner, one mentor, scheduled around the family.' }
    ],
    cells: [
      { h3: 'Screen shared', p: 'The mentor sees the child\'s code and simulation throughout.' },
      { h3: 'Same mentor', p: 'One teacher for the course, who follows each project.' },
      { h3: 'Clear English', p: 'Short instructions, said and written on screen.' },
      { h3: 'Predict first', p: 'Every run begins with a guess said out loud.' },
      { h3: 'Parent update', p: 'A short note after class on progress and difficulties.' },
      { h3: 'Your choice', p: 'Fifteen to twenty in a group, or private lessons.' }
    ]
  },

  projectsH2: 'Projects from students who kept going',
  projectsLede: 'Teenagers who keep coding build apps, data tools and AI projects. Some appear below; more are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Parents and students, word for word from Google.',

  fees: {
    h2: 'Fees for coding classes from Peru',
    lede: 'Prices are in US dollars and charged monthly to a card; your bank converts each charge to soles at its own rate. There is nothing else to buy: no kit, no parts, no software licence.',
    free: ['A free first class', 'A first program that senses and decides', 'No card asked'],
    group: ['Fifteen to twenty children of similar age', 'One mentor for the course', 'Two live classes a week', 'Monthly, cancel when you wish'],
    one: ['One child, one mentor', 'Projects chosen around your child\'s interests', 'Times you set']
  },

  faq: {
    eyebrow: 'Parents in Peru ask',
    h2: 'Robotics vs coding: questions from families in Peru',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. Teaching happens live, over video, and solely in English. Our mentors keep their speech calm and distinct, follow the speed and accent of each child, and display each step on screen as they say it. You will find Spanish-language pages from us for Peruvian parents, yet the classes themselves never switch to Spanish.' },
      { q: 'Is coding or robotics better for kids?', a: 'For most children, coding first. It needs only a computer, it teaches the decision-making part of every robot, and it leads on to games, apps and AI. Robotics adds building and teamwork and suits children who later join a school or club team.' },
      { q: 'Do you teach robotics?', a: 'We teach the programming side of robotics: sequences, sensing, decisions and control, using blocks, Python and simulations. We do not teach mechanical building and we do not sell or require any robot, kit or parts.' },
      { q: 'Does my child need a robot kit for your classes?', a: 'No. A laptop or desktop computer and an internet connection are enough. Robots in our lessons are simulated on screen, like the line-follower on this page.' },
      { q: 'What age can a child start?', a: 'Coding with blocks from 6. The World Robot Olympiad\'s youngest categories start at 8. A child who has coded from 6 or 7 arrives at 8 already able to plan exact steps and conditions.' },
      { q: 'Will coding help my child in robotics competitions later?', a: 'It helps with the part that takes longest to learn. In the WRO\'s RoboMission category the robot must make its own decisions on a randomly set field, and Future Engineers asks for a robot that drives a track by itself. Both are programming problems, though we prepare no team for any specific competition.' },
      { q: 'What did MINEDU do with robotics in schools?', a: 'A MINEDU document says the ministry has used educational robotics since 1996, supplied LEGO WeDo kits to almost all public primary schools in 2009 and 2010, and has run a robotics and digital technology Hackathon since 2022. It describes robotics as a means for learning, not the goal.' },
      { q: 'When are classes on Peru time?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. Because India leads Peru by ten and a half hours on every date, 16:45 in Peru matches 03:15 the following day in India.' },
      { q: 'Group or one to one?', a: 'A group of fifteen to twenty of the same age works for children who like comparing answers. Private lessons work for a quiet child, a child still settling into English, or one who would race past a group.' },
      { q: 'Are you linked with the WRO, MINEDU or a school?', a: 'No. We run on our own, unconnected to the WRO, MINEDU, COAR, any school in Peru or any robotics academy. The only certificate a learner gets is the completion certificate we issue.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'More to help you decide',
    lede: 'Related reading.',
    items: [
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids', p: 'A first step into logic with blocks.' },
      { href: '/python-for-10-year-olds', label: 'Python at ten', p: 'The language older children move to.' },
      { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding', p: 'Commanding a robot Agent in a game world.' },
      { href: '/ai-tools-age-guide', label: 'AI tools by age', p: 'Which AI tools a child may use, and when.' },
      { href: '/we-teach-you-how-to-think', label: 'Thinking first', p: 'Why we ask children to predict before they run.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside a real class, minute by minute.' }
    ]
  },

  start: {
    h2: 'Book a free first coding class',
    lede: 'In the trial lesson your child writes a short program that reads a number, makes a decision and repeats, the core of any robot. From that, the mentor judges where your child should start and how comfortable they are listening in English, and recommends a course, a format and a time.',
    readFirst: 'Reading first? The <a class="ag-inline-link" href="/courses/python-ai-kids-masterclass">Python and AI for kids course</a> shows each week, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> follows one lesson through.',
    note: 'Classes are live video lessons from India, in English only. WhatsApp us in English for the quickest reply.',
    formNote: 'Free, no card, nothing to buy.'
  },

  footer: {
    cols: [
      { h4: 'Logic and code', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch for kids' },
        { href: '/python-for-10-year-olds', label: 'Python at ten' },
        { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/online-coding-classes-for-kids-peru', label: 'Coding for kids, Peru' },
        { href: '/coding-classes-for-teens-peru', label: 'Teens, Peru' },
        { href: '/vacaciones-utiles-de-programacion-los-olivos-lima', label: 'Leer en español' }
      ] }
    ],
    bottomRight: 'Steer by how far off you are'
  },

  personalityCss: `
.ag-root.ag-rob .ag-hero h1 { max-width: 16ch; letter-spacing: -0.015em; }
.ag-root.ag-rob .ag-capsule { border-left-width: 6px; }
.ag-root.ag-rob .ag-table td { line-height: 1.5; }
.ag-root.ag-rob .ag-code pre { line-height: 1.5; }
.ag-root.ag-rob .ag-steps li { padding-bottom: 4px; }
`,

  dossier: {
    curriculumAuthority: 'WRO Association category rules and International Final notice (2026 season); MINEDU DITE educational robotics document; MINEDU press notes on the Hackathon 2025 and on COAR Lima (2 October 2023); CNEB; INEI, Estadísticas de las TIC en los Hogares, II Trimestre 2026; vendor terms for ChatGPT and Claude (content/ai-tool-age-audit.json); IANA tz database. Read 9 November 2026.',
    localProject: 'An original simulated line-follower lesson: a robot 10 mm right of a line that turns by a fixed 3 mm wobbles between 1 and -2 for ever; steering by gain times error settles with 0.3 (slowly) and 0.6 (within six steps), overshoots and settles with 1.6, and runs away with 2.2. Lesson family: proportional control.',
    requiredMentions: ['fixed turn of 3: [7.0, 4.0, 1.0, -2.0, 1.0, -2.0, 1.0, -2.0]', 'gain 2.2: [-12.0, 14.4, -17.3, 20.7, -24.9, 29.9, -35.8, 43.0]', 'A correction bigger than the mistake makes the mistake grow', 'World Robot Olympiad categories, 2026 season, as published by the WRO Association', 'the robot needs to be able to make its own decisions during the run', 'la robótica en educación no es el objetivo, es el medio', 'between 2023 and 2025 the number of girls taking part rose by 28%', 'San Juan, Puerto Rico, on 8 to 10 December 2026', 'Steer by how far off you are'],
    sources: [
      { claim: 'WRO categories, ages, team sizes, robot size limits and tasks; hardware and software free choice.', url: 'https://wro-association.org/competition/categories/' },
      { claim: 'WRO 2026 International Final, San Juan, Puerto Rico, 8 to 10 December 2026.', url: 'https://wro-association.org/competition/international-final/' },
      { claim: 'MINEDU: robotics is the means, not the goal; Infoescuela 1996; LEGO WeDo 2009 and 2010; Hackathon since 2022.', url: 'https://cdn.www.gob.pe/uploads/document/file/8182643/6842169-minedu-robotica.pdf' },
      { claim: 'Hackathon 2025 rewarded AI and robotics projects; girls up 28% between 2023 and 2025.', url: 'https://www.gob.pe/institucion/minedu/noticias/1220955-minedu-premia-el-talento-estudiantil-y-docente-por-innovar-con-inteligencia-artificial-y-robotica-en-hackathon-2025' },
      { claim: 'COAR Lima team qualified for the World Robot Olympiad 2023 in Panama with an AI drone that counts ships.', url: 'https://www.gob.pe/institucion/minedu/noticias/843092-estudiantes-del-coar-lima-clasifican-a-olimpiada-mundial-de-robotica' },
      { claim: 'CNEB competency Diseña y construye soluciones tecnológicas para resolver problemas.', url: 'https://www.minedu.gob.pe/curriculo/pdf/curriculo-nacional-de-la-educacion-basica.pdf' },
      { claim: '36.4% of Peruvian households had at least one computer, II trimestre 2026.', url: 'https://www.inei.gob.pe/media/MenuRecursivo/boletines/boletin-tic-iit2026.pdf' },
      { claim: 'Peru UTC-5 all year; India UTC+5:30.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'Any robot kit, parts or hardware sold or required: refused; we teach coding only.',
      'The WRO national organiser for Peru and 2026 national dates: no primary source found; not given.',
      'Names of the COAR Lima students: in the source, deliberately not printed.',
      'That coding guarantees success in robotics competitions: not claimed.',
      'Prices of robotics workshops or kits in Peru: not printed (no competitor prices).',
      'Any link with the WRO, MINEDU, COAR or a robotics academy: none, and the page says so.'
    ]
  }
};
