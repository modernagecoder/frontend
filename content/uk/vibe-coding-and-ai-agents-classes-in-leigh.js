'use strict';
// Leigh, Wigan (cg- town page, UK cluster Phase 10, towns band B, row 530). Keyword slug per the owner's rotation, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: how does an agent that has to cover a whole
// area know it has not missed anywhere, and what does planning save over wandering? (coverage path planning on the
// Pennington Flash water polygon).
// Data (read 30 September 2026): OpenStreetMap way 4762710 "Pennington Flash" (natural=water, water=lake), version 22,
// 180 node refs (closed ring, 179 distinct vertices), fetched from the OSM API 0.6 after one Overpass listing of named
// water bodies in the box 53.47 to 53.51 N, 2.58 to 2.49 W. Coordinates converted to OSGB36 metres (our Helmert code).
// Our run (scratchpad lgn/cov.py, lgn/rw.py): shoelace area 662,045 m2 = 66.2 ha; perimeter 5,197 m; axis-aligned extent
// 1,605 m (eastings) by 893 m (northings). Imagined robot boat with a 20 m swath. Straight-lane sweep at 36 angles
// (0 to 175 degrees anticlockwise from east, 5 degree steps): lane length 33.0 to 33.2 km at every angle (area / swath
// = 33.1 km); lanes 44 to 84; separate straight runs 55 to 105. Fewest runs at 150 degrees (lane bearing 120/300):
// 47 lanes, 55 runs, 98.77% of 5 m water cells covered. Most runs at 55 degrees (lane bearing 35/215): 82 lanes, 105
// runs, 99.38% covered. Random-bounce agent (2.5 m steps, new random heading whenever the next step leaves the water),
// 20 runs (seeds 1000 to 1019): distance to cover 50% median 21.5 km (19.7 to 28.8); 90% 74.2 km (68.4 to 88.0); 95%
// 95.3 km (88.6 to 117.3); 99% 159.4 km (135.5 to 208.7).
// Nearest postcodes to the lake's OSM centre (postcodes.io): WA3 1BH 493 m, Lowton East ward; WN7 4BU 621 m, Leigh West
// ward, Leigh (Wigan) BUA.
// Lesson family: coverage path planning (boustrophedon sweeps, sweep direction and turns, random coverage).
// Place facts: Wigan (E08000010) TS001 329,330; ONS 2021 BUA Leigh (Wigan) 45,495.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'LEIGH', label: 'Leigh', blurb: 'Vibe coding and AI agents classes for Leigh in Wigan borough, with a robot boat planning how to sweep every metre of Pennington Flash.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'vibe-coding-and-ai-agents-classes-in-leigh',
  code: 'lgn',
  accent: '#186C14',
  accentRationale: 'Leigh: a moss green (6.57:1 contrast on white), chosen by hand as a muted tone kept clear of neighbouring pages',
  pageType: 'city',
  place: {
    name: 'Leigh',
    eyebrow: 'Leigh, Wigan borough, Greater Manchester',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Greater Manchester' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-north-west-england', name: 'North West England' }],
  nav: [
    { label: 'Greater Manchester', href: '/coding-classes-in-greater-manchester' },
    { label: 'Wigan', href: '/online-coding-and-python-classes-in-wigan' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Leigh, Wigan',
  title: 'Vibe Coding and AI Agents Classes in Leigh, Wigan | Ages 6 to 67',
  description: 'Vibe coding, AI agents, Python and coding lessons live online for Leigh, Pennington, Westleigh, Bedford, Lilford and Plank Lane, ages 6 to 67. First lesson free.',
  ogDescription: 'Vibe coding and AI agents classes for Leigh, with an agent project: plan a robot boat\'s sweep of Pennington Flash, then race it against a random wanderer.',
  twitterDescription: 'Leigh, Wigan: vibe coding, AI agents, Python and coding taught live online for ages 6 to 67, starting with a free lesson.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Vibe Coding and AI Agents Classes for Leigh, Wigan',
    description: 'Vibe coding, AI agents, Python, coding and maths for children, teenagers and adults in Leigh and Wigan borough, taught live online through agent problems that are measured, not assumed.'
  },

  h1: 'Vibe coding and AI agents classes in Leigh',
  capsuleQ: 'Where can Leigh learners find the best vibe coding and AI agents classes?',
  capsule: 'The Leigh built-up area held 45,495 residents at the 2021 census, on ONS figures, inside a Wigan borough counted at 329,330. Pennington, Westleigh, Bedford, Lilford, Plank Lane and Firs Lane are listed by postcodes.io as suburban areas whose nearest postcode sits in that built-up area. Modern Age Coders teaches vibe coding, AI agents, Python, coding and maths to learners from six to 67, live on video with tutors who work from India. Learners choose private lessons or a class of five to ten at the same stage. What we care about most is judgement: a learner should be able to say what an agent is meant to achieve and then prove whether it did. The Leigh project gives an imaginary robot boat the job of sweeping all 66 hectares of Pennington Flash, and compares a planned route with a boat that simply wanders. Lesson one costs nothing and ends with our course advice; after it, a group place is USD 100 a month and one-to-one teaching USD 150 a month.',
  lead: 'Some jobs are not about getting from A to B. A robot mower has to pass over every patch of lawn. A search drone has to photograph every field. A boat sampling a lake has to cross every part of the water. Doing that well has a name, coverage path planning, and it hides two surprises. The first is that the distance hardly changes whichever way you lay out the route; what changes is the number of awkward turns. The second is that an agent which wanders at random finds most of the area quickly and then spends an enormous effort on the last few patches. Pennington Flash, a lake of 66.2 hectares mapped in OpenStreetMap, shows both.',
  wa: 'Hello Modern Age Coders, I would like a free vibe coding or AI agents lesson for a learner in Leigh.',

  picks: {
    eyebrow: 'Where to begin',
    h2: 'Vibe coding, thinking and agent courses for Leigh',
    intro: 'Pick the band that fits the learner. The first lesson on each course is live, free, and booked without a card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: colour in every square of a grid with the fewest pencil lifts, then explain why.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Ask an AI for a Scratch robot that paints a whole stage, then count the patches it forgot.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web projects written with an assistant, including the lake sweep as a simulation.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Students and adults', note: 'From first scripts to geometry, simulation and agents that plan before they move.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Leigh on the map',
      h2: 'Leigh, its neighbourhoods and Pennington Flash',
      intro: 'Places around Leigh as postcodes.io records them, with the built-up area of each one\'s nearest postcode.',
      body: [
        { kind: 'table', caption: 'Places near Leigh in postcodes.io, and the ONS built-up area of the nearest postcode to each point', head: ['Place', 'Recorded as', 'Outward code', 'Nearest postcode lies in'], rows: [
          ['Pennington', 'Suburban area', 'WN7', 'Leigh (Wigan)'],
          ['Westleigh', 'Suburban area', 'WN7', 'Leigh (Wigan)'],
          ['Bedford', 'Suburban area', 'WN7', 'Leigh (Wigan)'],
          ['Lilford', 'Suburban area', 'WN7', 'Leigh (Wigan)'],
          ['Plank Lane', 'Suburban area', 'WN7', 'Leigh (Wigan)'],
          ['Firs Lane', 'Suburban area', 'WN7', 'Leigh (Wigan)'],
          ['Higher Folds', 'Village', 'WN7', 'Higher Folds'],
          ['Lately Common', 'Hamlet', 'WN7', 'Glazebury']
        ] },
        { kind: 'p', text: 'The last two rows show why a postcode is a poor guide to a town: both carry a WN7 code, yet their nearest postcodes belong to other built-up areas. Pennington Flash itself sits between wards. The two postcodes closest to the centre of the lake as mapped are WA3 1BH, 493 m away in Lowton East ward, and WN7 4BU, 621 m away in Leigh West ward. Schools in Leigh follow the national curriculum for England, and lessons fit round whichever term dates a family sends us.' },
        { kind: 'callout', h3: 'Greater Manchester, the North West and how we teach', p: 'For the county see <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">coding classes in Greater Manchester</a>, and for the region <a class="cg-inline-link" href="/coding-and-ai-classes-in-north-west-england">North West England</a>. The reason thinking comes before tools in every lesson is explained in <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Leigh project',
      h2: 'Sweeping Pennington Flash: 66.2 hectares, one robot boat',
      intro: 'Give an agent a lake and a job that is only finished when every part of it has been visited.',
      body: [
        { kind: 'p', text: 'The learner takes the outline of Pennington Flash from OpenStreetMap, where it is drawn as a ring of 179 points, and converts it to metres on the British National Grid. The shoelace formula gives its area as 662,045 square metres and its shoreline as 5,197 m; the water fits inside a rectangle 1,605 m east to west and 893 m north to south. Then comes the agent. It is an imagined robot boat whose sensor sees 10 m to either side, so each pass it makes covers a strip 20 m wide. Its task is to pass over the whole lake. We test two kinds of boat.' },
        { kind: 'p', text: 'The planned boat uses the pattern farmers use in a field, called a boustrophedon: straight parallel lanes 20 m apart, turning at the shore and coming back along the next lane. The only decision is the direction of the lanes. We tried 36 directions, every 5 degrees round a half circle, and measured each one in Python.' },
        { kind: 'table', caption: 'Straight-lane sweeps of Pennington Flash with a 20 m swath (our Python geometry on the OpenStreetMap outline)', head: ['Lane direction', 'Lanes', 'Separate straight runs', 'Total lane length', 'Water covered'], rows: [
          ['Bearing 120 degrees (fewest runs)', '47', '55', '33.1 km', '98.8%'],
          ['Bearing 35 degrees (most runs)', '82', '105', '33.1 km', '99.4%'],
          ['All 36 directions tried', '44 to 84', '55 to 105', '33.0 to 33.2 km', '']
        ] },
        { kind: 'p', text: 'The surprise is the fourth column. Whichever way the lanes run, their total length stays close to 33.1 km, because it is simply the area divided by the swath width. What the direction really changes is the number of straight runs, and each run ends in a turn, a slow-down and a small overlap. Lanes laid along the long side of the lake need 55 runs; lanes across it need 105, nearly twice as many turns for the same water. Where the shore bends inward, a single lane is broken into two or three runs, which is why runs outnumber lanes. The small gaps left along the shore, about one percent of the water, are the price of keeping to straight lines.' },
        { kind: 'table', caption: 'The wandering boat: distance travelled before a share of the lake had been seen, 20 runs (our simulation)', head: ['Share of water seen', 'Median distance', 'Quickest run', 'Slowest run'], rows: [
          ['50%', '21.5 km', '19.7 km', '28.8 km'],
          ['90%', '74.2 km', '68.4 km', '88.0 km'],
          ['95%', '95.3 km', '88.6 km', '117.3 km'],
          ['99%', '159.4 km', '135.5 km', '208.7 km']
        ] },
        { kind: 'p', text: 'The second boat has no plan. It moves forward in steps of 2.5 m and, whenever the next step would take it ashore, it picks a fresh random heading. Early on this looks fine: half the lake is seen after about 21.5 km, not far behind the planned boat. Then the returns collapse. Most of each new step passes over water it has already seen, so reaching 99% takes a median of 159.4 km, almost five times the planned sweep, and one unlucky run needed 208.7 km. Going from 90% to 99% cost the wanderer more distance than getting to 90% in the first place.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Shade a paper lake with a crayon as wide as a lane, once in rows and once by scribbling, and count the strokes each way.' },
          { h3: 'Ages 11 to 15', p: 'Program a grid robot that sweeps a rectangle in lanes, then give it an L-shaped pond and fix the gaps it leaves.' },
          { h3: 'Ages 15 and up', p: 'Load the real outline, test all 36 lane directions, and simulate the random boat against the plan.' }
        ] },
        { kind: 'callout', h3: 'Sources and limits', p: 'Lake outline © OpenStreetMap contributors, available under the Open Database Licence. The boat, its 20 m swath, the lanes and every distance above come from our own code. A real vessel would need to allow for wind, depth, wildlife and the rules of whoever manages the water, none of which we modelled. A different swath or a newer outline would change the figures.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Plans for agents',
      h2: 'What sweeping a lake teaches about AI agents and vibe coding',
      intro: 'Agents that must be thorough need a plan they can check, and a way to prove when they have finished.',
      body: [
        { kind: 'table', caption: 'From Pennington Flash to agents in general', head: ['On the lake', 'For an AI agent'], rows: [
          ['33.1 km of lanes whatever the direction', 'Some costs are fixed; find the ones you can change'],
          ['55 runs against 105', 'Count the awkward steps, not only the distance'],
          ['Half the lake in 21.5 km of wandering', 'Early progress can hide a slow finish'],
          ['159.4 km to see 99%', 'Random search is cheap to write and costly to run'],
          ['About 1% missed at the shore', 'Say plainly what a plan does not cover']
        ] },
        { kind: 'p', text: 'The same shape of problem turns up whenever an AI agent is asked to be thorough: read every file in a folder, check every row in a spreadsheet, visit every page of a site. A vibe coded agent will often loop until it stops finding new things and then declare the job done, which is exactly the wandering boat\'s strategy. It feels productive, and the last few percent, often the part that matters, may never be reached. Leigh learners write the planned version and the wandering version side by side and measure the gap for themselves. We move on to building real AI agents once a learner can write Python without help, normally in the sixth form or as an adult, and Copilot Studio agents are taught in one-to-one lessons only. More on that at <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the UK students\' route into AI agents</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'OpenStreetMap, the Office for National Statistics and postcodes.io have not checked or endorsed this page. We use data they publish openly, and the analysis is ours alone.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'How learners progress',
    h2: 'From colouring grids to planning agents',
    intro: 'Year groups are only a starting guide; the free lesson shows us where a learner really is.',
    cols: [
      { band: 'Years 2 to 6', h3: 'How to think', p: 'Patterns, grids and doing a job without missing a piece.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Robot and painting games an AI starts and the child finishes.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and simulation', p: 'Geometry and simulations coded with an assistant and measured by hand.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Building agents', p: 'Working Python first, then agents that plan and report what they skipped.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Agents that cover ground',
    h2: 'What is coverage path planning, and how does an AI agent know it has searched everywhere?',
    intro: 'Coverage path planning is the task of finding a route that takes an agent, such as a robot, a drone or a software crawler, over every part of an area or collection while keeping wasted travel and turns low; the classic answer is a boustrophedon, a set of parallel back-and-forth lanes spaced one sensor width apart.',
    p1: 'On Pennington Flash, lanes 20 m apart covered about 99% of the water in 33.1 km whichever way they ran, but the number of separate runs varied from 55 to 105 with the lane direction.',
    p2: 'A boat choosing random headings saw half the lake almost as quickly, then needed a median of 159.4 km to reach 99%.',
    closer: 'Leigh teenagers who have raced a plan against a wanderer ask any agent a sharp question: how do you know you have finished? Being able to ask it, and test the answer, comes from writing the code, and that is still the case for learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'Pennington, Westleigh and Bedford on the same live call',
    intro: 'A computer with a webcam and a steady connection for video is all the kit needed.',
    cells: [
      { h3: 'Learner drives', p: 'The student shares their screen and types; the tutor asks why at each step.' },
      { h3: 'Placed by evidence', p: 'The trial shows us what a learner can already do before we suggest a course.' },
      { h3: 'Trial at no cost', p: 'A full-length first lesson, no payment details asked for.' },
      { h3: 'Classes by stage', p: 'Five to ten learners at one level, gathered from all over the UK.' },
      { h3: 'Twice weekly', p: 'Holiday weeks are left out once you tell us the dates.' },
      { h3: 'A steady slot', p: 'When the clocks change in spring and autumn, our tutors adjust and your time does not.' }
    ],
    spec: { title: 'Why teach it online', p: 'A class where everyone is at the same stage needs more learners than one town can offer at once. Across the UK there are enough.' }
  },

  fees: {
    h2: 'Prices for Leigh learners',
    intro: 'Leigh is charged the rates we use for every country outside India.',
    first: 'The first live lesson in full, at no cost, with a course suggestion to finish.',
    group: 'Roughly eight small-group lessons a month.',
    private: 'Roughly eight one-to-one lessons a month.',
    closer: 'All prices are quoted in US dollars; none is given in pounds. Nothing is billed until after the trial, once a course and a weekly slot are agreed. Holidays, missed lessons and moving between group and private are covered on the pricing page.'
  },

  reviewsH2: 'What North West families and UK learners say on Google',

  book: {
    h2: 'Book a free lesson from Leigh',
    intro: 'Tell us the learner\'s age or school year and one interest. The trial might be a grid-colouring puzzle, a Scratch robot an AI helped build, a first Python program, or a first go at planning a sweep.',
    success: 'Thank you. Your request from Leigh has arrived and we will be in touch.'
  },

  faq: {
    h2: 'Questions from Leigh',
    intro: 'Coverage planning, the lake project, vibe coding, agents and how lessons are arranged.',
    items: [
      { q: 'How many people live in Leigh?', a: 'ONS figures give the Leigh built-up area 45,495 usual residents at the 2021 census. Wigan borough as a whole had 329,330.' },
      { q: 'Can learners in Leigh take vibe coding and AI agents classes online?', a: 'Yes. Live video lessons for ages 6 to 67 reach Leigh, Pennington, Westleigh, Bedford, Lilford, Plank Lane and the rest of Wigan borough.' },
      { q: 'What is a boustrophedon path?', a: 'A route made of parallel lanes travelled in alternate directions, turning at each end, like a plough going up and down a field. It is the standard way to make sure a robot covers a whole area.' },
      { q: 'Why does the lane direction matter if the distance stays the same?', a: 'Because every lane that meets the shore ends in a turn. On Pennington Flash, one direction needed 55 separate runs and another 105, for almost exactly the same 33.1 km of lanes.' },
      { q: 'What did the Leigh project find?', a: 'That a planned sweep covered about 99% of the lake in 33.1 km of lanes, while a boat picking random headings needed a median of 159.4 km to see the same share.' },
      { q: 'What is vibe coding?', a: 'Writing software by telling an AI in plain words what you want and letting it produce the code. The learner still reads, runs and tests every part before trusting it.' },
      { q: 'At what age can someone start building AI agents?', a: 'Once they can write Python unaided, which for most is sixth form or adulthood. Copilot Studio agents are one-to-one only.' },
      { q: 'Do lessons help with GCSE and A level?', a: 'They support computer science and maths at both levels. We teach for understanding and do not promise grades.' },
      { q: 'What does it cost?', a: 'The first lesson is free. Afterwards a group place is USD 100 a month and private lessons are USD 150 a month.' },
      { q: 'Are there lessons in the school holidays?', a: 'Only if you want them. Send the dates and we pause.' }
    ]
  },

  next: {
    eyebrow: 'Nearby pages',
    h2: 'More of Greater Manchester',
    html: 'Other towns have their own projects: <a class="cg-inline-link" href="/online-coding-and-python-classes-in-wigan">Wigan</a>, <a class="cg-inline-link" href="/online-coding-and-python-classes-in-bolton">Bolton</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-oldham">Oldham</a>, with the county on <a class="cg-inline-link" href="/coding-classes-in-greater-manchester">Greater Manchester</a>. Anywhere else in the country starts from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Leigh and Greater Manchester',
  footerPlaces: [
    { href: '/coding-classes-in-greater-manchester', label: 'Greater Manchester' },
    { href: '/coding-and-ai-classes-in-north-west-england', label: 'North West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-lgn .cg-hero-grid { align-items: center; gap: clamp(1.1rem, 3.4vw, 2.6rem); }
.cg-root.cg-lgn .cg-hero h1 { font-weight: 720; letter-spacing: -0.022em; line-height: 1.07; }
.cg-root.cg-lgn .cg-capsule { border-top: 2px solid var(--cg-accent); border-bottom: 2px solid var(--cg-accent); padding: 0.85rem 0; }
.cg-root.cg-lgn .cg-eyebrow { letter-spacing: 0.11em; font-weight: 680; font-size: 0.82rem; }
.cg-root.cg-lgn .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.017em; }
.cg-root.cg-lgn .cg-table caption { text-align: left; font-size: 0.9rem; font-weight: 500; }
.cg-root.cg-lgn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lgn .cg-table th { font-size: 0.82rem; font-weight: 700; letter-spacing: 0.015em; }
.cg-root.cg-lgn .cg-ladder-col { border-left: 3px solid var(--cg-accent); padding-left: 0.8rem; }
.cg-root.cg-lgn .cg-callout { border-left-width: 5px; border-radius: 10px; }
`,

  dossier: {
    curriculumAuthority: 'Wigan (E08000010), Census 2021 TS001 usual residents 329,330. ONS 2021 BUA Leigh (Wigan) 45,495. postcodes.io places (Wigan), with the BUA of the nearest postcode to each place point: Pennington, Westleigh, Bedford, Lilford, Plank Lane, Firs Lane (suburban areas, Leigh (Wigan)); Higher Folds (village, Higher Folds BUA); Lately Common (hamlet, Glazebury BUA). Lowton, Lowton Common and Lowton St Mary\'s resolve to Golborne, Mosley Common to Walkden, Hindsford to Atherton: not claimed as Leigh. England national curriculum.',
    localProject: 'OSM way 4762710 Pennington Flash (natural=water, water=lake, v22), 179 distinct vertices, OSGB36 via Helmert. Shoelace area 662,045 m2 (66.2 ha), perimeter 5,197 m, extent 1,605 m E-W by 893 m N-S. Imagined robot boat, 20 m swath. Boustrophedon at 36 directions (0-175 deg anticlockwise from east, 5 deg steps): lane length 33.0-33.2 km (area/swath 33.1 km), lanes 44-84, runs 55-105. Fewest runs 150 deg (bearing 120/300): 47 lanes, 55 runs, 98.77% of 5 m water cells covered; most runs 55 deg (bearing 35/215): 82 lanes, 105 runs, 99.38%. Random-bounce agent (2.5 m steps, random new heading at shore), 20 runs, distance to 50/90/95/99% coverage: median 21.5 / 74.2 / 95.3 / 159.4 km; 99% range 135.5-208.7 km. Nearest postcodes to lake centre: WA3 1BH 493 m (Lowton East), WN7 4BU 621 m (Leigh West). Lesson family: coverage path planning, boustrophedon sweep direction and turns, random coverage.',
    requiredMentions: [
      '45,495',
      'Pennington Flash',
      'Westleigh',
      'Lilford',
      'Plank Lane',
      'Firs Lane',
      'Lately Common',
      'coverage path planning',
      'boustrophedon',
      '66.2',
      '159.4'
    ],
    sources: [
      { claim: 'OpenStreetMap way 4762710, Pennington Flash (natural=water), ODbL, via the OSM API and one Overpass listing.', url: 'https://www.openstreetmap.org/way/4762710' },
      { claim: 'ONS Census 2021 TS001 usual residents via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places and nearest postcodes (wards and built-up areas) for Wigan borough.', url: 'https://api.postcodes.io/places?q=Westleigh' },
      { claim: 'Boustrophedon cellular decomposition for coverage path planning (Choset and Pignon, 1998).', url: 'https://doi.org/10.1007/978-1-4471-1273-0_32' }
    ],
    rejectedClaims: [
      'That Pennington Flash lies inside the Leigh built-up area: not claimed; its nearest postcodes are in Lowton East and Leigh West wards.',
      'Any real boat, survey or management activity on the lake: none described; the boat is imaginary.',
      'Lowton, Golborne, Atherton or Astley as parts of Leigh: their nearest postcodes resolve to other built-up areas; not claimed.',
      'That the lane direction with fewest runs is best for a real vessel: not claimed; wind and depth were not modelled.',
      'Sum of any census figures: none added.',
      'Named schools and term dates: none named.',
      'Sterling prices: none.'
    ]
  }
};
