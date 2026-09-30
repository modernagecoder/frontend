'use strict';
// Torquay (cg- town page, UK cluster Phase 10, towns band B, row 501). Keyword slug per the owner's rotation, with the
// vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: can a network with no labels arrange data so
// that similar things end up side by side? (self-organising maps, topology preservation, and what clustering alone lacks).
// Data (read 30 September 2026): Nomis Census 2021 output-area tables for Torbay (E06000027): TS045 car or van
// availability, TS017 household size, TS006 density, TS044 accommodation type. 479 output areas, 63,001 households,
// 14,646 with no car or van (23.25%). Five standardised features per area: log10 density, one-person share, detached
// share, purpose-built flat share, no-car share.
// Our run (scratchpad tqy/som.py): 6 by 6 self-organising map, 6,000 training steps, averaged over 10 random starts.
// Quantisation error 0.765; topographic error 1.3%. Untrained random map: 0.817 and 73.3%. Mean distance between the
// weights of adjacent nodes 0.80, all node pairs 2.28, opposite corners 4.41. Areas per node: min 5, median 12, max 25,
// no empty node. k-means with 36 clusters: quantisation error 0.636 (lower error, no layout). One corner node: density
// 8,418 per sq km, one-person 27.7%, detached 3.6%, flats 19.8%, no car 27.2%. Opposite corner: 413 per sq km, 27.5%,
// 56.1%, 4.7%, 10.6%.
// Lesson family: self-organising map (Kohonen), topology preservation, quantisation vs topographic error.
// Place facts: Torbay (E06000027) TS001 139,324. ONS 2021 BUAs (published): Paignton 67,520; Torquay 52,035; Brixham
// 17,840. postcodes.io (Torbay): Babbacombe, St Marychurch, Chelston, Cockington, Ellacombe, Shiphay, Wellswood, Torre
// (suburban areas).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'TORQUAY', label: 'Torquay', blurb: 'Coding and AI classes for Torquay in Torbay, Devon, with a project that trains a self-organising map on Census areas.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-torquay',
  code: 'tqy',
  accent: '#7A1F3D',
  accentRationale: 'Torquay: a dark raspberry (10.0:1 contrast on white), chosen by hand as unused and apart from the other Phase 10 accents',
  pageType: 'city',
  place: {
    name: 'Torquay',
    eyebrow: 'Torquay, Torbay, Devon',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Devon' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-west-england', name: 'South West England' }],
  nav: [
    { label: 'Devon', href: '/coding-classes-in-devon' },
    { label: 'Paignton', href: '/best-coding-and-ai-classes-in-paignton' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Torquay, Devon',
  title: 'Coding and AI Classes in Torquay, Devon | Python, Ages 6 to 67',
  description: 'Coding, AI, Python and vibe coding classes on live video for Torquay, Babbacombe, St Marychurch and Chelston learners aged 6 to 67. First lesson free of charge.',
  ogDescription: 'Coding and AI classes for Torquay in Devon, with a neural network project: a self-organising map that arranges Torbay census areas without any labels.',
  twitterDescription: 'Torquay, Devon: live online coding, AI, Python and vibe coding classes for ages 6 to 67. The first lesson is free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Torquay, Devon',
    description: 'Coding, AI, neural networks, Python, vibe coding and maths for children, teenagers and adults in Torquay and around Torbay, taught live with thinking skills ahead of tools.'
  },

  h1: 'Coding and AI classes in Torquay, Devon',
  capsuleQ: 'What are the best coding and AI classes for a learner in Torquay?',
  capsule: 'Torquay\'s built-up area was home to 52,035 people at the 2021 census, the ONS reports, within a Torbay of three towns. Babbacombe, St Marychurch, Chelston, Cockington and Ellacombe are among the suburban areas recorded in postcode data. We teach coding, AI, Python, vibe coding and maths by live video from India to learners of six to 67, one at a time or five to ten together at a matching level. Each course starts from reasoning, because a learner who can reason can audit what software and chatbots produce. In the Torquay project a small neural network called a self-organising map sorts 479 Torbay census areas onto a six-by-six grid with no labels to guide it, and the learner measures how well it kept similar areas side by side. The first lesson is free and leads to a course recommendation. Continuing costs USD 100 a month in a group and USD 150 a month one-to-one.',
  lead: 'Most machine learning that makes the news is supervised: the network is shown the right answers and adjusts until it matches them. A self-organising map gets no answers at all. It is a grid of nodes, each holding a made-up description of a census area. Show it a real area, find the node that resembles it most, and nudge that node and its grid neighbours a little closer to the area. Repeat a few thousand times and the grid rearranges itself until neighbouring nodes describe similar kinds of place. Torbay has 479 census output areas, which a Torquay learner can feed to such a map in a few dozen lines of Python, and then test whether the promised order really appeared.',
  wa: 'Hello Modern Age Coders, I am in Torquay and would like a free coding or AI lesson for a learner.',

  picks: {
    eyebrow: 'Picked for Torquay',
    h2: 'Thinking, vibe coding and AI courses for Torquay',
    intro: 'One course per age band to begin with. All of them open with a free live class, and we ask for no card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: sort things by more than one feature and explain the order you chose.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Describe a Scratch game for an AI to build, then play it until you find its mistakes.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Neural networks and machine learning from first principles, with the Torbay map as a project.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Web and Python projects made with AI help and defended by the learner.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Torquay and Torbay',
      h2: 'Torquay beside Paignton and Brixham',
      intro: 'Torbay\'s three built-up areas in the ONS figures, and the Torquay neighbourhoods named in postcode data.',
      body: [
        { kind: 'table', caption: 'Built-up areas in Torbay, ONS 2021 census figures', head: ['Built-up area', 'Residents (2021)'], rows: [
          ['Paignton', '67,520'],
          ['Torquay', '52,035'],
          ['Brixham', '17,840']
        ] },
        { kind: 'p', text: 'We print each ONS figure as published and leave them unadded; Torbay\'s own census count, 139,324, comes from table TS001. In Torbay, postcodes.io lists Babbacombe, St Marychurch, Chelston, Cockington, Ellacombe, Shiphay, Wellswood and Torre as suburban areas. Schools in the bay work to England\'s national curriculum, and our timetable bends around the holiday dates you give us.' },
        { kind: 'callout', h3: 'Devon, the South West and our approach', p: 'The county page is <a class="cg-inline-link" href="/coding-classes-in-devon">coding classes in Devon</a>, the regional one <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-west-england">South West England</a>, and Paignton has <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-paignton">its own page and project</a>. The thinking-first idea is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Torquay project',
      h2: 'A self-organising map of 479 Torbay census areas',
      intro: 'Thirty-six nodes, five numbers per area, no labels, and two honest scores at the end.',
      body: [
        { kind: 'p', text: 'Four Census 2021 tables are pulled from the Nomis API for every output area in Torbay: 479 areas, 63,001 households, 14,646 of them with no car or van. Each area is reduced to five numbers: population density, the share of one-person households, the share of detached homes, the share of purpose-built flats and the share of households without a car. The numbers are standardised so that no single one dominates. The map is a six-by-six grid whose 36 nodes start as random points. For 6,000 steps the program picks an area, finds the winning node, which is the one whose five numbers are closest, and pulls that node and its grid neighbours towards the area, with the pull and the neighbourhood both shrinking over time.' },
        { kind: 'table', caption: 'Self-organising map of Torbay output areas, averages over 10 random starts, our Python run on Census 2021 data from Nomis', head: ['Measure', 'Trained map', 'Untrained random grid'], rows: [
          ['Quantisation error (distance from an area to its node)', '0.765', '0.817'],
          ['Topographic error (closest two nodes not adjacent)', '1.3%', '73.3%'],
          ['Areas on a node: fewest, median, most', '5, 12, 25', 'not measured']
        ] },
        { kind: 'p', text: 'Two scores judge a map. Quantisation error is the average distance between an area and the node that represents it, and training lowered it only modestly, from 0.817 to 0.765. Topographic error is the share of areas whose two closest nodes are not next to each other on the grid. That one collapsed from 73.3% to 1.3%, which is the real achievement: the grid has become a map, where moving one step changes the description only slightly. The weights confirm it. Adjacent nodes sit 0.80 apart on average, all pairs of nodes 2.28 apart, and opposite corners 4.41 apart.' },
        { kind: 'table', caption: 'Two opposite corner nodes of one trained map, our calculation', head: ['Feature', 'One corner', 'Opposite corner'], rows: [
          ['People per square kilometre', '8,418', '413'],
          ['One-person households', '27.7%', '27.5%'],
          ['Detached homes', '3.6%', '56.1%'],
          ['Purpose-built flats', '19.8%', '4.7%'],
          ['Households with no car or van', '27.2%', '10.6%']
        ] },
        { kind: 'p', text: 'For comparison the learner runs k-means with 36 clusters on the same data. It achieves a lower quantisation error, 0.636, because it is free to put its centres wherever they fit. What it cannot offer is a layout: cluster 7 has no particular relation to cluster 8. The map gives up a little accuracy to gain an arrangement people can read. Note also what the corners do not show. The one-person share is almost identical at both ends, so on this map it varies along a different direction from density and house type. The node descriptions are averages of the model, not statements about any street or household.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Arrange picture cards on a grid so that neighbours look alike, then swap cards to improve it.' },
          { h3: 'Ages 11 to 15', p: 'Code a one-dimensional map in Python that sorts colours into a smooth strip without being told how.' },
          { h3: 'Ages 15 and up', p: 'Build the six-by-six Torbay map, compute both error scores, and compare with k-means.' }
        ] },
        { kind: 'callout', h3: 'Census figures and our network', p: 'Counts come from the Office for National Statistics Census 2021, served by Nomis under the Open Government Licence. The map, its error scores and the node descriptions are entirely our own calculations. Results change slightly with each random start, which is why we report an average of ten.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Maps and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Putting similar things close together is one of the oldest ideas in neural networks, and it is still at work inside modern AI.',
      body: [
        { kind: 'table', caption: 'From the Torbay grid to current AI systems', head: ['On the Torbay map', 'In AI more widely'], rows: [
          ['No labels were given', 'Much of what networks learn is unsupervised'],
          ['Neighbouring nodes became alike', 'Embeddings place related words and images close together'],
          ['k-means had lower error but no layout', 'The lowest score is not always the most useful result'],
          ['Ten starts gave slightly different maps', 'Random starts change outcomes; report an average'],
          ['Corners differed in house type, not in one-person share', 'Read what a picture shows, not what you expect']
        ] },
        { kind: 'p', text: 'When a learner vibe codes this project, they explain the map to an AI assistant in plain language and receive working Python in return. The risk is a pretty grid that nobody has checked. Torquay students compute the topographic error themselves and compare against the untrained grid, so they know the order is real. Agents that search documents by similarity rest on the same principle of nearness, and a builder who has measured nearness once is harder to fool. Agent projects begin when a learner can program in Python independently, often in Year 12 or 13 or in adult life, and Copilot Studio agents are taught privately, never in groups. More at <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our AI agents pathway for UK students</a> and <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>.' },
        { kind: 'p', text: 'Neither the Office for National Statistics, Nomis nor postcodes.io has any tie to Modern Age Coders. Their open data is the input; the network and the conclusions, right or wrong, are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Route',
    h2: 'From sorting cards to neural networks',
    intro: 'Treat the year groups as a guide. What happens in the free lesson decides the entry point.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Sorting, grouping and explaining why two things belong together.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'First games and apps with an AI partner, checked by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and neural networks', p: 'Real data and small networks, in step with GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'AI in practice', p: 'Python foundations, then generative AI and agents.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI without labels',
    h2: 'What is a self-organising map?',
    intro: 'A self-organising map is a neural network that arranges data on a grid without labels, so that items placed on neighbouring nodes are similar to each other.',
    p1: 'Trained on 479 Torbay census areas, a six-by-six map cut its topographic error from 73.3% to 1.3%, while k-means with the same number of groups fitted the data more tightly but produced no layout at all.',
    p2: 'Learners who have scored a map both ways understand that a model can be judged on more than one quality, and that the useful one depends on the job.',
    closer: 'Writing the network yourself is how that understanding forms, and it gives Torquay teenagers a reason to keep coding in 2026 even when an AI could draft the script.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Practicalities',
    h2: 'From Babbacombe to Chelston by video call',
    intro: 'You need a computer, a webcam and broadband that copes with video.',
    cells: [
      { h3: 'Learner does the work', p: 'The student writes and runs everything on a shared screen while the tutor asks what each line is for.' },
      { h3: 'Start point from the trial', p: 'The free lesson tells us the level, and we take down the exam board where it applies.' },
      { h3: 'First class free', p: 'There is no charge and no card request, and you leave with a course suggestion.' },
      { h3: 'Groups of a kind', p: 'Five to ten learners at one stage, joined from towns all over the UK.' },
      { h3: 'Two lessons weekly', p: 'School holidays are skipped when you send the dates.' },
      { h3: 'No drifting slot', p: 'British Summer Time is absorbed at the tutor\'s end, so the lesson hour is constant.' }
    ],
    spec: { title: 'Why online suits the bay', p: 'A class at exactly one level needs a wide pool of learners. Teaching by video lets us draw that pool from the whole UK.' }
  },

  fees: {
    h2: 'Torquay fees',
    intro: 'Torquay learners pay our international rates, which cover every country apart from India.',
    first: 'A full live lesson for free, closing with a course recommendation.',
    group: 'Close to eight live group lessons a month.',
    private: 'Close to eight live one-to-one lessons a month.',
    closer: 'Our invoices are issued in US dollars and no sterling amount is quoted. The first is raised after the trial, once a course and a standing weekly time are agreed. Holiday breaks, absences and changes of format are described on the pricing page.'
  },

  reviewsH2: 'Reviews on Google from Devon families and learners UK-wide',

  book: {
    h2: 'Book a free Torquay lesson',
    intro: 'Tell us the learner\'s age or year and what they like doing. The trial can be a card-sorting puzzle, a Scratch game written with an AI, some early Python, or a first tiny neural network.',
    success: 'Thank you. We have received your Torquay request.'
  },

  faq: {
    h2: 'Torquay questions',
    intro: 'Self-organising maps, the Torbay project, coding, AI and how lessons work.',
    items: [
      { q: 'What is the population of Torquay?', a: 'The Torquay built-up area had 52,035 residents at the 2021 census, according to the ONS.' },
      { q: 'Are coding and AI classes available online in Torquay?', a: 'Yes. We teach ages 6 to 67 by live video, so Babbacombe, St Marychurch, Chelston and the rest of Torbay can all join.' },
      { q: 'What is a self-organising map?', a: 'A neural network laid out as a grid that learns, without labels, to place similar data on neighbouring nodes. It is also called a Kohonen map.' },
      { q: 'What is unsupervised learning?', a: 'Machine learning that finds structure in data without being given correct answers, as in clustering or a self-organising map.' },
      { q: 'What do learners do in the Torquay project?', a: 'They train a six-by-six map on 479 Torbay census areas in Python, score it with quantisation and topographic error, and compare it with k-means.' },
      { q: 'How is vibe coding taught?', a: 'The learner describes the program, an AI proposes code, and the learner runs tests to decide what to keep. It is part of every age band.' },
      { q: 'When can a student move on to AI agents?', a: 'After Python is fully their own, often in Year 12 or 13 or as an adult. Copilot Studio agents are private-lesson only.' },
      { q: 'Do you cover GCSE and A level?', a: 'Computer science and maths are both covered, with understanding as the target and no grade guarantees.' },
      { q: 'What is the price?', a: 'The first lesson is free. Group lessons are then USD 100 a month and one-to-one lessons USD 150 a month.' },
      { q: 'Do classes run in the holidays?', a: 'Only if you wish. Give us the dates and we stop for them.' }
    ]
  },

  next: {
    eyebrow: 'More of Devon',
    h2: 'Other Devon and South West pages',
    html: 'Separate projects are on the pages for <a class="cg-inline-link" href="/best-coding-and-ai-classes-in-paignton">Paignton</a>, <a class="cg-inline-link" href="/best-coding-class-in-exeter">Exeter</a> and <a class="cg-inline-link" href="/best-coding-class-in-plymouth">Plymouth</a>. Every UK page is reachable from the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Chat on WhatsApp'
  },

  footerHeading: 'Torquay and Devon',
  footerPlaces: [
    { href: '/coding-classes-in-devon', label: 'Devon' },
    { href: '/coding-and-ai-classes-in-south-west-england', label: 'South West England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-tqy .cg-hero-grid { align-items: start; gap: clamp(1.1rem, 3.6vw, 3rem); }
.cg-root.cg-tqy .cg-hero h1 { font-weight: 700; letter-spacing: -0.026em; line-height: 1.04; }
.cg-root.cg-tqy .cg-capsule { border-top: 2px solid var(--cg-accent); border-bottom: 2px solid var(--cg-accent); padding: 0.9rem 0; }
.cg-root.cg-tqy .cg-eyebrow { letter-spacing: 0.16em; font-weight: 650; }
.cg-root.cg-tqy .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.02em; }
.cg-root.cg-tqy .cg-table caption { text-align: left; font-size: 0.9rem; font-weight: 500; }
.cg-root.cg-tqy .cg-table td { font-variant-numeric: tabular-nums lining-nums; }
.cg-root.cg-tqy .cg-table th { font-size: 0.82rem; font-weight: 700; }
.cg-root.cg-tqy .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-tqy .cg-callout { border-left-width: 3px; border-radius: 0 8px 8px 0; }
`,

  dossier: {
    curriculumAuthority: 'Torbay (E06000027), Census 2021 TS001 usual residents 139,324. ONS 2021 BUAs (published): Paignton 67,520; Torquay 52,035; Brixham 17,840. postcodes.io (Torbay): Babbacombe, St Marychurch, Chelston, Cockington, Ellacombe, Shiphay, Wellswood, Torre (suburban areas).',
    localProject: 'Census 2021 OA tables for Torbay via Nomis (TS045, TS017, TS006, TS044): 479 OAs, 63,001 households, 14,646 no car or van. Five standardised features. 6x6 self-organising map, 6,000 steps, 10 random starts: quantisation error 0.765, topographic error 1.3%; untrained grid 0.817 and 73.3%. Adjacent node weights 0.80 apart, all pairs 2.28, opposite corners 4.41. Areas per node 5 / 12 / 25. k-means (36) quantisation error 0.636. Corner nodes: density 8,418 vs 413; one-person 27.7 vs 27.5; detached 3.6 vs 56.1; flats 19.8 vs 4.7; no car 27.2 vs 10.6. Lesson family: self-organising map, topology preservation.',
    requiredMentions: [
      '52,035',
      '63,001',
      '14,646',
      'Babbacombe',
      'St Marychurch',
      'Chelston',
      'Cockington',
      'Ellacombe',
      'self-organising map',
      'topographic error'
    ],
    sources: [
      { claim: 'ONS Census 2021 tables TS045, TS017, TS006, TS044 and TS001 via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'Nomis Census 2021 TS044 accommodation type.', url: 'https://www.nomisweb.co.uk/datasets/c2021ts044' },
      { claim: 'postcodes.io places: suburban areas in Torbay.', url: 'https://api.postcodes.io/places?q=Babbacombe' }
    ],
    rejectedClaims: [
      'Seaside, resort, harbour or tourism facts: not read from a source; not claimed.',
      'Which Torquay neighbourhood sits on which node: not published; nodes are model averages, no street or household is described.',
      'Sum of the three built-up areas: not published as a total; not added.',
      'That the map outperforms k-means: not claimed; k-means had the lower quantisation error.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
