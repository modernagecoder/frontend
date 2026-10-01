'use strict';
// Eastleigh (cg- town page, UK cluster Phase 10, towns band B, row 521). Keyword slug per the owner's rotation, with
// the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: can a symbol cost less than one bit,
// and what does prediction have to do with it? (arithmetic coding of a height profile, with a fixed table and with a
// model that learns as it goes).
// Data (read 30 September 2026): Copernicus EU-DEM v1.1 heights through the OpenTopoData eudem25m API, six requests.
// Line 1 runs west to east along latitude 50.969 N from 1.405 W to 1.295 W: 309 points about 25 m apart, 9 m to 49 m.
// Line 2 runs south to north along longitude 1.353 W from 50.940 N to 51.000 N: 267 points, 2 m to 76 m.
// Our run (scratchpad esl/ac.py): heights rounded to whole metres; 576 heights, 574 steps between neighbours. Steps:
// 0 m 348 (60.6%), +1 m 130, -1 m 71, +2 m 15, -2 m 7, and one each of +3, -3 and -4; 95.6% within 1 m. Storage:
// each height as a 7-bit number 4,032 bits; each step in 3 bits 1,722; a whole-bit prefix code (Huffman) 936 bits,
// 1.631 per step, with the flat step at 1 bit; the entropy of the step table 1.559 bits per step, 894.7 in total;
// our arithmetic coder with exact fractions 896 bits, decoded back to the same 574 steps; the same coder learning
// its counts as it goes 929; learning with the previous step as context 884; with two previous steps about 928.
// After a flat step the next is flat 67.5% of the time.
// Lesson family: arithmetic coding (fractional bits, adaptive models, prediction as compression).
// Place facts: Eastleigh (E07000086) TS001 136,443. ONS 2021 BUAs (published): Eastleigh 48,360; Hedge End 23,190;
// West End 10,870; Bursledon 8,070; Netley 6,305.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'EASTLEIGH', label: 'Eastleigh', blurb: 'Coding and AI classes for Eastleigh in Hampshire, with a compression project in which a symbol costs less than one bit.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-eastleigh',
  code: 'esl',
  accent: '#073084',
  accentRationale: 'Eastleigh: a dark royal blue (11.9:1 contrast on white), fixed by hand at a clear distance from every accent in use',
  pageType: 'city',
  place: {
    name: 'Eastleigh',
    eyebrow: 'Eastleigh, Hampshire, England',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'Hampshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-south-east-england', name: 'South East England' }],
  nav: [
    { label: 'Hampshire', href: '/coding-classes-in-hampshire' },
    { label: 'Southampton', href: '/best-coding-class-in-southampton' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Eastleigh, Hampshire',
  title: 'Coding and AI Classes in Eastleigh, Hampshire | Ages 6 to 67',
  description: 'Live online coding, AI, Python and vibe coding classes for Eastleigh, Boyatt Wood, Bishopstoke, Fair Oak and Allbrook, for ages 6 to 67. First lesson is free.',
  ogDescription: 'Coding and AI classes for Eastleigh, Hampshire, with a project on arithmetic coding: 574 height steps stored in 884 bits by a model that predicts.',
  twitterDescription: 'Eastleigh, Hampshire: coding, AI, Python and vibe coding taught on live video, ages 6 to 67, beginning with a free lesson.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Eastleigh, Hampshire',
    description: 'Coding, AI, Python, data compression, vibe coding and maths for children, teenagers and adults in Eastleigh borough, taught live online by tutors who ask for the reasoning behind each answer.'
  },

  h1: 'Coding and AI classes in Eastleigh, Hampshire',
  capsuleQ: 'What are the best coding and AI classes available to Eastleigh learners?',
  capsule: 'The Eastleigh built-up area had 48,360 residents in 2021 and the borough of Eastleigh 136,443, going by ONS census figures. Boyatt Wood, Bishopstoke, Fair Oak, Allbrook and Hiltingbury are suburban areas of the borough in postcode data. Children from six, teenagers and adults up to 67 learn coding, AI, Python, vibe coding and maths with us by live video. Our tutors are in India and teach one learner privately or a class of five to ten who share a level. Reasoning is put ahead of tools throughout, because a learner who reasons well can audit what an AI produces. The Eastleigh project compresses two lines of ground heights across the town and shows that a good guess about what comes next is worth real bits. Your first lesson is free and ends with a course suggestion. Later months cost USD 100 in a group or USD 150 with a private tutor.',
  lead: 'A bit is the smallest thing a computer can store, a single yes or no. So it sounds impossible for one symbol in a file to take up less than a bit. Yet the video formats behind most streaming rely on exactly that, and the way large AI language models are scored rests on the same idea. The trick is called arithmetic coding. It stops giving each symbol its own little packet of bits and instead describes the whole message with one carefully chosen number. How short that number can be depends on how well you can predict the next symbol. A walk across Eastleigh, measured in metres above sea level, is a fine thing to predict.',
  wa: 'Hello Modern Age Coders, I would like a free coding or AI lesson for a learner in Eastleigh.',

  picks: {
    eyebrow: 'Eastleigh course picks',
    h2: 'Coding, thinking and AI courses chosen for Eastleigh',
    intro: 'There is one course here for each age band. A free live lesson opens all of them, booked without a card.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'How to think: play twenty questions and work out why a good guesser needs fewer.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Ask an AI to make a Scratch guessing game, then beat it by predicting its next move.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Prediction, probability and machine learning, with arithmetic coding of Eastleigh heights as a project.' },
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Python and web builds with AI assistance, each checked by decoding what was encoded.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The borough',
      h2: 'Eastleigh, Hedge End and the borough\'s other built-up areas',
      intro: 'ONS figures for five built-up areas in the borough, and the neighbourhoods named in postcode data.',
      body: [
        { kind: 'table', caption: 'Five built-up areas in the borough of Eastleigh, as the ONS published them for the 2021 census', head: ['Built-up area', 'Residents (2021 census)'], rows: [
          ['Eastleigh', '48,360'],
          ['Hedge End', '23,190'],
          ['West End', '10,870'],
          ['Bursledon', '8,070'],
          ['Netley', '6,305']
        ] },
        { kind: 'p', text: 'Every figure is the ONS\'s rounded number for a built-up area as the ONS draws it, and none has been added to another. The borough count of 136,443 is separate. Two further built-up areas that lie mostly or partly in neighbouring districts are not in the table. In postcodes.io, Boyatt Wood, Bishopstoke, Fair Oak, Allbrook and Hiltingbury are suburban areas of Eastleigh borough, Horton Heath and Crowdhill are villages, and North Stoneham is listed as a settlement. Schools here teach the national curriculum for England, and we keep clear of the holiday weeks you give us.' },
        { kind: 'callout', h3: 'Hampshire, the South East and how we work', p: 'Read about the county on <a class="cg-inline-link" href="/coding-classes-in-hampshire">coding classes in Hampshire</a> and about the region on <a class="cg-inline-link" href="/coding-and-ai-classes-in-south-east-england">South East England</a>. Our reasons for teaching thought before tools are on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Eastleigh project',
      h2: 'Arithmetic coding: 574 steps of height in under 900 bits',
      intro: 'Sample the ground along two lines, turn heights into steps, and see how few bits each way of writing them needs.',
      body: [
        { kind: 'p', text: 'The learner draws two straight lines over Eastleigh on a map: one from west to east along latitude 50.969 north, 7.7 km long, and one from south to north along longitude 1.353 west, 6.7 km long. An open elevation model gives the height of the ground every 25 m or so along each, 576 heights in total, rounded to whole metres. The first line runs between 9 m and 49 m above sea level and the second between 2 m and 76 m. Instead of storing heights, the program stores the step from each point to the next. There are 574 steps, and they are dull in a useful way: 348 of them, 60.6%, are no change at all, 130 are one metre up, 71 one metre down, and only 25 are anything bigger.' },
        { kind: 'table', caption: 'Bits needed to store the two Eastleigh height profiles, by method (our Python run)', head: ['Method', 'Total bits', 'Bits per step'], rows: [
          ['Each height as a 7-bit number', '4,032', '7.00'],
          ['Each step as a 3-bit number', '1,722', '3.00'],
          ['Whole-bit code, short codes for common steps', '936', '1.631'],
          ['Arithmetic coding, fixed table of step frequencies', '896', '1.561'],
          ['Arithmetic coding, learning, previous step as context', '884', '1.540']
        ] },
        { kind: 'p', text: 'A whole-bit code, the kind named after David Huffman, gives the flat step the shortest code there is: one bit. But a step that turns up 60.6% of the time carries only about 0.72 of a bit of surprise, so a quarter of every such bit is wasted. Arithmetic coding removes the waste. It begins with the range from 0 to 1 and, for each step in turn, shrinks the range to a slice whose width matches that step\'s probability. Common steps shrink it slightly and rare ones a lot. At the end, any number inside the final sliver identifies the whole sequence, and the narrower the sliver, the more bits that number needs. Our coder used exact fractions and wrote the 574 steps in 896 bits, against a theoretical floor of 894.7 for that table. A decoder then rebuilt every step correctly from the 896 bits alone.' },
        { kind: 'p', text: 'The last row is where prediction enters. Ground that was flat a moment ago tends to stay flat: after a flat step the next is flat 67.5% of the time, not 60.6%. A coder that keeps a separate tally for each previous step, and updates the tallies as it reads, reaches 884 bits. That is below the floor of the fixed table, and it needs no table sent in advance, because the decoder builds the same tallies as it goes. Pushing further backfired. With two previous steps as context the total rose to about 928 bits, because 574 steps are too few to fill so many tallies with reliable counts. A sharper model only pays if there is enough data to train it.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Guess a friend\'s up, down or flat moves on a paper hill. Keep score, and notice that flat is nearly always the safe bet.' },
          { h3: 'Ages 11 to 15', p: 'Fetch the heights in Python, count each kind of step, and work out the 3-bit and whole-bit totals.' },
          { h3: 'Ages 15 and up', p: 'Write the coder and decoder with Python\'s Fraction type, then add the learning model and compare contexts.' }
        ] },
        { kind: 'callout', h3: 'Where the heights come from, and the limits', p: 'Heights are from the EU-DEM v1.1 elevation model, produced using Copernicus data and information funded by the European Union, and were read through the OpenTopoData service. The model has a 25 m grid and its heights can be a few metres out, more so among buildings and trees. The lines, the rounding and all bit counts are ours, and the totals leave out the few bits needed to say how long the message is. Different lines would give different numbers.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Prediction is compression',
      h2: 'Why this matters for AI and vibe coding',
      intro: 'Anything that predicts well can compress well, and the bits saved are a fair score for the predictor.',
      body: [
        { kind: 'table', caption: 'From a height profile to AI language models', head: ['In the Eastleigh run', 'In AI practice'], rows: [
          ['The flat step cost 0.72 of a bit, not 1', 'Probable outcomes carry little information'],
          ['Context cut 896 bits to 884', 'Better prediction is directly measurable'],
          ['Two steps of context did worse, about 928', 'A bigger model needs more data, or it overfits'],
          ['The decoder rebuilt all 574 steps', 'Prove a round trip before trusting any encoder'],
          ['Nothing was lost', 'Know whether a tool is exact or approximate']
        ] },
        { kind: 'p', text: 'A large language model is a predictor of the next piece of text, and the figure its builders watch during training is, in effect, the average number of bits it would take to encode each piece using the model\'s own predictions. Drive that number down and the model has, in a precise sense, understood its data better. So the Eastleigh exercise is a small working version of how AI models are scored. It also supplies a test that vibe coders can reuse. Ask an assistant for a compressor and it will write one. Whether the output can be turned back into the input, exactly, is for the learner to demonstrate. When Python is second nature, usually from sixth form onward, our learners progress to building AI agents, and those made in Copilot Studio are taught only one-to-one. See <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a> and <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">the UK student route into AI agents</a>.' },
        { kind: 'p', text: 'The European Union, the Copernicus programme, OpenTopoData, the Office for National Statistics and postcodes.io do not endorse this page. We relied on their open data, and the work built on it is our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Pathway',
    h2: 'From guessing games to compression',
    intro: 'A school year suggests a level and the free lesson confirms it.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Good questions, good guesses and why some answers are less surprising than others.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'First projects made with an AI helper and then put to the test.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python, probability and AI', p: 'Models that predict, scored fairly, together with GCSE and A level work.', courses: ['ai-ml-masterclass-teens', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'AI for real tasks', p: 'Solid Python, then generative AI and agents.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and information',
    h2: 'What is arithmetic coding?',
    intro: 'Arithmetic coding is a lossless compression method that represents a whole message as one number between 0 and 1, narrowing the range a little for each symbol in proportion to how likely it was, so that a very likely symbol can cost less than one bit.',
    p1: 'For 574 height steps across Eastleigh, a code limited to whole bits needed 936 bits and an arithmetic coder 896, because the flat step, 60.6% of the total, is worth only about 0.72 of a bit.',
    p2: 'Letting the coder predict from the previous step brought the total down to 884 bits, and predicting from two steps made it worse.',
    closer: 'Eastleigh teenagers who have built that coder understand what an AI model\'s training score means, which is more than most people who use one every day. It is a kind of understanding you get from writing the program, and a reason to keep learning to code in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'In a lesson',
    h2: 'Bishopstoke, Fair Oak and Boyatt Wood on a live call',
    intro: 'A desktop or laptop, a webcam and everyday broadband are enough.',
    cells: [
      { h3: 'Writing, not watching', p: 'The learner shares a screen and builds the program. Our tutor keeps asking what the next line should do, and why.' },
      { h3: 'The trial sets the level', p: 'We learn the starting point from the free session and record the exam board if there is one.' },
      { h3: 'Free to try', p: 'The first lesson is on us, with no card, and ends with a course we recommend.' },
      { h3: 'One level per class', p: 'Classes have five to ten members at the same stage, from around the UK.' },
      { h3: 'Twice every week', p: 'Holiday dates you send us are left empty.' },
      { h3: 'A time that holds', p: 'Our tutors take the clock change each spring and autumn so that you need not.' }
    ],
    spec: { title: 'Why the classes are online', p: 'Level-matched groups need many learners to choose from. A borough cannot supply that on its own, and a country can.' }
  },

  fees: {
    h2: 'Eastleigh fees',
    intro: 'For Eastleigh we apply the international rates used in every country outside India.',
    first: 'A free lesson of full length that closes with a suggested course.',
    group: 'Around eight live lessons per month in a group.',
    private: 'Around eight live lessons per month with a private tutor.',
    closer: 'Fees are charged in US dollars and we show no sterling equivalent. You receive no bill until the trial has produced an agreed course and a weekly time. The pricing page explains holidays, absences and moving between formats.'
  },

  reviewsH2: 'Google reviews from families in Hampshire and across the UK',

  book: {
    h2: 'Book a free lesson for Eastleigh',
    intro: 'Give us an age or school year and a favourite interest. The trial might be a guessing game about information, a Scratch project written with AI, a little Python, or a first go at squeezing data.',
    success: 'Thank you. The Eastleigh request is in and we will write back.'
  },

  faq: {
    h2: 'Eastleigh questions',
    intro: 'Arithmetic coding, the height project, coding, AI and the practical side.',
    items: [
      { q: 'How many people live in Eastleigh?', a: 'At the 2021 census the ONS counted 48,360 residents in the Eastleigh built-up area and 136,443 in the borough of Eastleigh.' },
      { q: 'Do you offer online coding and AI classes in Eastleigh?', a: 'Yes. We teach ages 6 to 67 on live video, which covers Eastleigh, Boyatt Wood, Bishopstoke, Fair Oak, Allbrook and the rest of the borough.' },
      { q: 'What is lossless compression?', a: 'Storing data in fewer bits in a way that allows the original to be recovered exactly. Zip files and PNG images are lossless; most photo and video formats are not.' },
      { q: 'How can a symbol take less than one bit?', a: 'No single symbol is stored separately. The whole message is encoded as one number, and a highly probable symbol narrows the range so little that its share of the final length is a fraction of a bit.' },
      { q: 'What happens in the Eastleigh project?', a: 'Learners fetch 576 ground heights along two lines in Python, encode the 574 steps between them several ways, and get from 4,032 bits down to 884 with a coder that predicts.' },
      { q: 'Where does vibe coding come in?', a: 'In every course. Learners have an AI draft code, then verify it, here by decoding what they encoded.' },
      { q: 'When can learners start on AI agents?', a: 'When they can write Python independently, commonly in sixth form or later. Copilot Studio agents are a one-to-one course only.' },
      { q: 'Do you support GCSE and A level?', a: 'We do, for computer science and maths, with understanding as the aim. We give no assurance about grades.' },
      { q: 'What is the cost?', a: 'Lesson one is free. After it, USD 100 a month for a group place or USD 150 a month for private tuition.' },
      { q: 'Are holidays lesson-free?', a: 'Yes, when you let us know the dates.' }
    ]
  },

  next: {
    eyebrow: 'Beyond Eastleigh',
    h2: 'More pages for Hampshire and the South East',
    html: 'Other projects can be found on <a class="cg-inline-link" href="/best-coding-class-in-southampton">Southampton</a>, <a class="cg-inline-link" href="/best-coding-class-in-winchester">Winchester</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-andover">Andover</a>, and the county has its page at <a class="cg-inline-link" href="/coding-classes-in-hampshire">Hampshire</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> links to the rest.',
    waLabel: 'Send a WhatsApp message'
  },

  footerHeading: 'Eastleigh and Hampshire',
  footerPlaces: [
    { href: '/coding-classes-in-hampshire', label: 'Hampshire' },
    { href: '/coding-and-ai-classes-in-south-east-england', label: 'South East England' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-esl .cg-hero-grid { align-items: center; gap: clamp(1.25rem, 3.7vw, 3.1rem); }
.cg-root.cg-esl .cg-hero h1 { font-weight: 750; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-esl .cg-capsule { border-left: 2px solid var(--cg-accent); border-right: 2px solid var(--cg-accent); padding: 0 1rem; }
.cg-root.cg-esl .cg-eyebrow { letter-spacing: 0.13em; font-weight: 600; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-esl .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.018em; }
.cg-root.cg-esl .cg-table caption { text-align: left; font-size: 0.88rem; font-weight: 600; }
.cg-root.cg-esl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-esl .cg-table th { font-size: 0.8rem; font-weight: 700; letter-spacing: 0.035em; }
.cg-root.cg-esl .cg-ladder-col { border-top: 2px solid var(--cg-accent); border-bottom: 2px solid var(--cg-accent); padding: 0.7rem 0; }
.cg-root.cg-esl .cg-callout { border-left-width: 5px; border-radius: 14px; }
`,

  dossier: {
    curriculumAuthority: 'Eastleigh (E07000086), Census 2021 TS001 usual residents 136,443. ONS 2021 BUAs in the borough (published): Eastleigh 48,360; Hedge End 23,190; West End 10,870; Bursledon 8,070; Netley 6,305. The Southampton and Chandler\'s Ford built-up areas lie mostly or partly outside the borough and are excluded. postcodes.io (Eastleigh): Eastleigh (town); Boyatt Wood, Bishopstoke, Fair Oak, Allbrook, Hiltingbury (suburban areas); Horton Heath, Crowdhill (villages); North Stoneham (other settlement).',
    localProject: 'Copernicus EU-DEM v1.1 via OpenTopoData eudem25m. West-east line at 50.969 N, 1.405 W to 1.295 W: 309 points about 25 m apart, 7.7 km, 9 to 49 m. South-north line at 1.353 W, 50.940 N to 51.000 N: 267 points, 6.7 km, 2 to 76 m. Heights rounded to whole metres: 576 heights, 574 steps. Steps: 0 m 348 (60.6%), +1 130, -1 71, +2 15, -2 7, +3 1, -3 1, -4 1. 7-bit heights 4,032 bits; 3-bit steps 1,722; whole-bit prefix (Huffman) code 936 (1.631 per step; flat step 1 bit, information about 0.72 bit); entropy 1.559 bits per step, 894.7 total; arithmetic coder with exact fractions 896 bits (1.561), round trip verified; adaptive without context 929; adaptive with previous step as context 884 (1.540); two-step context about 928. Flat after flat 67.5%. Lesson family: arithmetic coding, fractional bits, adaptive context models, prediction as compression.',
    requiredMentions: [
      '48,360',
      '136,443',
      'Boyatt Wood',
      'Bishopstoke',
      'Fair Oak',
      'Allbrook',
      'Hiltingbury',
      'Horton Heath',
      'arithmetic coding',
      '894.7',
      '4,032'
    ],
    sources: [
      { claim: 'Copernicus EU-DEM v1.1 elevation model, read through the OpenTopoData eudem25m API.', url: 'https://www.opentopodata.org/datasets/eudem/' },
      { claim: 'ONS Census 2021 TS001 usual residents via Nomis; ONS 2021 built-up area populations.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'postcodes.io places: suburban areas, villages and settlements in Eastleigh borough.', url: 'https://api.postcodes.io/places?q=Boyatt%20Wood' }
    ],
    rejectedClaims: [
      'What lies along the two lines (rivers, railways, hills by name): not read; only heights are reported.',
      'Eastleigh railway works or airport history: not read from a source; not claimed.',
      'That Eastleigh is the largest settlement in the borough: not claimed; part of the Southampton built-up area lies inside the borough.',
      'That arithmetic coding always beats a whole-bit code by this margin: not claimed; the gain depends on the data.',
      'Sum of the listed built-up areas: not published as a total; not added.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
