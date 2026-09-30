'use strict';
// Finchley, Barnet (cg- district page, UK cluster Phase 9, row 445). Keyword slug per the owner's 2026-09-30 decision
// (rotation with city suffix), with the vibe coding / AI agents / how-to-think picks, FAQ and door links. Spine: why can a
// classifier with a superb ROC score still be wrong most of the time it says "yes"? (precision-recall curves and average
// precision against ROC AUC when the thing you are looking for is rare).
// Data (read 30 September 2026): Nomis Census 2021 for all 1,113 output areas in Barnet: TS045 car or van availability
// (NM_2063_1), TS017 household size (NM_2037_1), TS044 accommodation type (NM_2062_1), TS006 density (NM_2026_1).
// Our run (scratchpad fnc/fnc.py): label an area "car-light" when its share of households with no car is in the top slice
// of Barnet areas; logistic regression on log density, one-person share and flat share (standardised); out-of-fold
// predictions from stratified 5-fold cross-validation, averaged over 5 shuffles. Top 5% (no-car share at least 56.4%, 56
// areas): ROC AUC 0.905, average precision 0.359; to find 80% of them (45) the model also flags 164 ordinary areas
// (precision 0.215); its 56 most confident picks are right 37.5% of the time. Top 10% (at least 49.5%, 112 areas): ROC
// AUC 0.915, average precision 0.521. Top 25% (at least 39.6%, 279): 0.908 and 0.750. Top 50% (at least 28.5%, 557): 0.907
// and 0.901.
// Lesson family: precision-recall curve and average precision versus ROC AUC under rarity. Screened 30 September 2026:
// "average precision", "PR curve" 0 hits; claimed in claims.txt as fnc. Chatham owns ROC / AUC / threshold choice, Illinois
// and Overijssel class imbalance as such; here the lesson is the choice of summary metric. Barnet borough page = traffic
// cellular automaton, not reused (389,344, Wyldes Farm, Waterlow Court unused).
// Place facts: Census 2021 usual residents by 2022 ward, per ward, never summed: East Finchley 16,639; Finchley Church End
// 18,840; West Finchley 19,430. postcodes.io (Barnet): Finchley (N3), Church End (N3), East Finchley (N2), North Finchley
// (N12), Woodside Park (N12).

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'town', tag: 'FINCHLEY', label: 'Finchley', blurb: 'Coding and AI classes for Finchley in Barnet, with a project on why a model with an excellent score can still raise mostly false alarms when what it hunts is rare.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-and-ai-classes-in-finchley-london',
  code: 'fnc',
  accent: '#9B2D20',
  accentRationale: 'Finchley: a brick red (7.53:1 contrast), chosen by hand and unused elsewhere in the cluster',
  pageType: 'city',
  place: {
    name: 'Finchley',
    eyebrow: 'Finchley, Barnet, London',
    schemaType: 'Place',
    chain: [
      { type: 'AdministrativeArea', name: 'London' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'best-coding-class-in-london', name: 'London' }],
  nav: [
    { label: 'Barnet', href: '/coding-classes-in-barnet-london' },
    { label: 'London', href: '/best-coding-class-in-london' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Finchley, London',
  title: 'Coding and AI Classes in Finchley, London | Python, 6 to 67',
  description: 'Online coding, AI, Python and vibe coding lessons for Finchley, East Finchley, North Finchley and Woodside Park learners aged 6 to 67, live. First lesson free.',
  ogDescription: 'Coding and AI classes for Finchley, with a project showing why average precision, not ROC AUC, tells the truth when positives are rare.',
  twitterDescription: 'Finchley coding, AI, Python and vibe coding classes online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '30 September 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Finchley',
    description: 'Online coding, AI, Python, vibe coding and maths for children, teenagers and adults in Finchley and the London Borough of Barnet, taught live with careful measurement first.'
  },

  h1: 'Coding and AI classes in Finchley',
  capsuleQ: 'Where can Finchley learners find the best coding and AI classes?',
  capsule: 'Three Barnet wards carry the Finchley name: East Finchley with 16,639 residents at the 2021 census, Finchley Church End with 18,840 and West Finchley with 19,430. Church End, North Finchley and Woodside Park are recorded as suburban areas in the N3 and N12 postcode districts. Finchley learners aged six to 67 study coding, AI, Python, vibe coding and maths live on video with a tutor in India, privately or in a class of five to ten who are at one level. Careful measurement is taught before tools, so a learner knows what a score does and does not say. The opening Finchley lesson is free and closes with a suggested course. The Finchley project trains a classifier on 1,113 Census areas and finds that a score of 0.905 can sit alongside being wrong in four of every five alarms. Finchley families who carry on pay USD 100 each month for a class place, or USD 150 each month for a tutor to themselves.',
  lead: 'Spam, fraud, faults, rare diseases: most things worth detecting are rare. That rarity breaks the usual way of grading a classifier. The ROC curve and its summary, the AUC, ask how well the model separates positives from negatives, and they barely change when positives become scarce. But the person using the model cares about something else: when it says yes, how often is it right? That is precision, and it collapses as positives get rarer. This project shows both on one dataset, the Census areas of Barnet, by asking a model to find the areas where unusually many households have no car, and making the target steadily rarer.',
  wa: 'Hello Modern Age Coders, could we book a free coding or AI lesson for a learner in Finchley?',

  picks: {
    eyebrow: 'Finchley course picks',
    h2: 'Finchley courses in measuring, Python and AI',
    intro: 'Finchley learners begin on the course for their age. The first live lesson of each costs nothing, and we never take a card to reserve it.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 7 to 12', note: 'The how-to-think course: needles in haystacks, false alarms and asking what a score really counts.' },
      { course: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', band: 'Ages 8 to 12', note: 'Scratch games imagined by the learner, drafted with an AI and tested until they hold up.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 17', note: 'Machine learning in Python, including the rare-target classifier on Barnet Census areas.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Students and adults', note: 'How AI systems are evaluated, where the numbers mislead, and AI agents in Python.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Finchley and Barnet',
      h2: 'East Finchley, Church End, West Finchley and North Finchley',
      intro: 'Census 2021 counts for the three wards named Finchley, and places recorded in N2, N3 and N12.',
      body: [
        { kind: 'table', caption: 'The three Finchley wards of Barnet at the 2021 census (ONS figures from Nomis, wards as drawn in 2022)', head: ['Finchley ward', 'People counted'], rows: [
          ['East Finchley', '16,639'],
          ['Finchley Church End', '18,840'],
          ['West Finchley', '19,430']
        ] },
        { kind: 'p', text: 'Each line is the ONS count for one ward; they are not added together, because Finchley has no single official edge. Postcodes.io places Finchley and Church End in N3, East Finchley in N2, and North Finchley and Woodside Park in N12, all within the London Borough of Barnet. Barnet schools follow England\'s national curriculum, and with the term dates from you, no Finchley lesson falls in a holiday week.' },
        { kind: 'callout', h3: 'Barnet, London and thinking first', p: 'For more, see <a class="cg-inline-link" href="/coding-classes-in-barnet-london">coding classes in Barnet</a> and the <a class="cg-inline-link" href="/best-coding-class-in-london">London page</a>. Why we teach judgement before tools is on <a class="cg-inline-link" href="/learn-to-think-not-just-use-ai-tools-uk">learn to think, not just use AI tools</a>.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Finchley project',
      h2: 'Precision-recall against ROC: finding rare areas in Barnet Census data',
      intro: 'One model, one borough, and a target made rarer step by step.',
      body: [
        { kind: 'p', text: 'From the Nomis API the learner collects four Census 2021 tables for all 1,113 output areas in Barnet. An area is labelled car-light if its share of households without a car is among the highest in the borough. The detector is a logistic regression fed three clues per area: how densely people live, how many households are a single person, and how much of the housing is flats. Its verdict on each area is always given without having trained on that area. The experiment is run four times, with car-light meaning the top half of areas, the top quarter, the top tenth and finally the top twentieth: just 56 areas where at least 56.4% of households have no car.' },
        { kind: 'table', caption: 'The same model as the target gets rarer, out-of-fold predictions on 1,113 Barnet output areas, our Python run on Census 2021 data', head: ['Car-light means', 'Positive areas', 'ROC AUC', 'Average precision'], rows: [
          ['Top 50% of areas', '557', '0.907', '0.901'],
          ['Top 25%', '279', '0.908', '0.750'],
          ['Top 10%', '112', '0.915', '0.521'],
          ['Top 5%', '56', '0.905', '0.359']
        ] },
        { kind: 'p', text: 'The ROC AUC hardly moves: about 0.91 in every row. Judged by that number alone, the model is equally good at all four tasks. Average precision, the summary of the precision-recall curve, tells a different story, sliding from 0.901 to 0.359. In practical terms, at the rarest setting the model must flag 209 areas to catch 45 of the 56 car-light ones, so 164 of its alarms are false and only about one in five is right. Even its 56 most confident picks are correct just 37.5% of the time. Nothing about the model changed between rows. What changed is how many negatives there are to be wrong about, which ROC ignores and precision counts.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Hunt for five red counters hidden among a hundred blue ones, and tally the wrong grabs as well as the right ones.' },
          { h3: 'Ages 11 to 15', p: 'Train a simple classifier on Barnet areas in Python and count its hits and false alarms at one threshold.' },
          { h3: 'Ages 15 and up', p: 'Plot ROC and precision-recall curves side by side as the target gets rarer and explain why they part.' }
        ] },
        { kind: 'callout', h3: 'Census data, our classifier', p: 'Counts are Office for National Statistics Census 2021 data from Nomis, under the Open Government Licence. The car-light label is our own teaching device, not an official category, and the model and every score are our work.' }
      ]
    },
    {
      id: 'llm', tint: 'deep', eyebrow: 'Metrics and AI',
      h2: 'What this teaches about vibe coding and AI agents',
      intro: 'Good at ranking, poor at alarms: both can be true of the same detector.',
      body: [
        { kind: 'table', caption: 'From the Finchley metric test to working with AI', head: ['In the Barnet project', 'When an AI system reports a score'], rows: [
          ['ROC AUC stayed near 0.91', 'Some scores are blind to rarity'],
          ['Average precision fell to 0.359', 'Pick the metric that matches the job'],
          ['164 false alarms for 45 finds', 'Translate scores into counts of mistakes'],
          ['The model never changed', 'The data mix can change the verdict'],
          ['Car-light was our own label', 'Know who defined the target, and how']
        ] },
        { kind: 'p', text: 'An AI assistant asked to evaluate a detector will often print the ROC AUC, because most examples it learned from do. In a Finchley vibe coding lesson the learner describes the detector in words and an AI writes the Python; the learner then asks for the precision-recall curve and the raw count of false alarms before believing the headline. AI agents that screen messages, transactions or applications work on rare events all day, so this is the check that matters for them. Learners move on to building agents once they can write Python unaided, mostly from sixteen, and Copilot Studio agents are one-to-one lessons only. The idea underneath is on <a class="cg-inline-link" href="/understand-the-code-dont-copy-paste-uk">understand the code, don\'t copy-paste</a>; the agents pathway itself is on <a class="cg-inline-link" href="/ai-agents-course-for-students-uk">our page for UK students</a>.' },
        { kind: 'p', text: 'We have no tie to the Office for National Statistics, Nomis or postcodes.io beyond using their open data. The classifier and any mistakes in it are our own.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stages',
    h2: 'From counter hunts to honest metrics',
    intro: 'A Finchley learner\'s school year suggests a level; the trial lesson confirms it.',
    cols: [
      { band: 'Years 2 to 7', h3: 'How to think', p: 'Searching, sorting and counting the misses as carefully as the hits.', courses: ['problem-solving-and-computational-thinking-for-kids', 'scratch-programming-complete-course'] },
      { band: 'Years 4 to 8', h3: 'Vibe coding for kids', p: 'Games and small apps drafted with an AI and tested by the learner.', courses: ['vibe-coding-for-kids-beginners-ai-scratch-game-dev', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Python and machine learning', p: 'Classifiers, curves and metrics alongside GCSE and A level.', courses: ['ai-ml-masterclass-teens', 'statistics-probability-maths-course'] },
      { band: 'Adults', h3: 'AI evaluation and agents', p: 'Judging AI systems properly, then building agents in Python.', courses: ['complete-generative-ai-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and metrics',
    h2: 'What is a precision-recall curve, and when is it better than ROC AUC?',
    intro: 'A precision-recall curve shows, for every threshold, what share of the positives a model finds and what share of its alarms are right; it is the better guide whenever positives are rare, because ROC AUC ignores how many false alarms that rarity creates.',
    p1: 'On 1,113 Barnet Census areas, one model kept a ROC AUC near 0.91 while its average precision fell from 0.901 to 0.359 as the target shrank from half the areas to one in twenty.',
    p2: 'After this project, a learner meeting any AI accuracy claim asks: how rare is the thing being detected, and out of every hundred alarms, how many are real?',
    closer: 'A Finchley teenager who can turn a score into a count of false alarms will not be dazzled by a 0.9, and that habit is learned by coding the test.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How it works',
    h2: 'East Finchley to Woodside Park, on video',
    intro: 'A Finchley learner needs a computer with a camera and broadband that carries a video call.',
    cells: [
      { h3: 'The learner does the coding', p: 'Each line and each run is theirs. Watching the shared screen, the tutor asks what the number on it actually measures.' },
      { h3: 'Level found at the trial', p: 'A free first session shows us where to start, and any exam board goes on the record.' },
      { h3: 'Free Finchley trial', p: 'No payment for lesson one; it closes with a course suggestion.' },
      { h3: 'Classes matched by level', p: 'Groups of five to ten, with classmates from anywhere in the UK.' },
      { h3: 'Two sessions a week', p: 'School holidays are left free.' },
      { h3: 'Unchanging time', p: 'Our tutors absorb the British clock changes.' }
    ],
    spec: { title: 'Why the lessons are online', p: 'Finding five Finchley learners at the same level with the same evening free would take months. On video, the class forms from the whole country.' }
  },

  fees: {
    h2: 'Finchley fees',
    intro: 'Families in Finchley pay the international rate, the same one used in every country except India.',
    first: 'A whole lesson free, then our recommendation.',
    group: 'Roughly eight live small-group lessons per month.',
    private: 'Roughly eight live private lessons per month.',
    closer: 'Finchley fees are set in US dollars and there is no sterling price; an invoice is sent only after the trial has fixed the course and the weekly slot. The pricing page covers holidays, absences and switching format.'
  },

  reviewsH2: 'Barnet families and learners elsewhere in Britain, reviewing us on Google',

  book: {
    h2: 'Book a free Finchley lesson',
    intro: 'Let us have the learner\'s age or year group and one thing they enjoy. A Finchley trial can be a counter hunt, a Scratch game made with an AI, a first Python script, or a small detector tested on real data.',
    success: 'Thank you. Your Finchley request has arrived.'
  },

  faq: {
    h2: 'Finchley questions',
    intro: 'Rare targets, the Barnet Census project, vibe coding, Python and how Finchley lessons are arranged.',
    items: [
      { q: 'How many people live in the Finchley wards?', a: 'At the 2021 census East Finchley ward had 16,639 residents, Finchley Church End 18,840 and West Finchley 19,430. The ONS publishes them separately.' },
      { q: 'Are coding and AI classes available online in Finchley?', a: 'Yes. Learners aged 6 to 67 in East Finchley, North Finchley, Church End or anywhere in Barnet join by live video.' },
      { q: 'What is average precision?', a: 'A single number summarising the precision-recall curve: roughly, the precision you get averaged over all the levels of recall. It drops sharply when positives are rare, which ROC AUC does not.' },
      { q: 'What is the difference between precision and recall?', a: 'Recall is the share of real positives the model finds. Precision is the share of its positive calls that are correct. In our Barnet test, finding 80% of the rarest areas meant a precision of about 0.215.' },
      { q: 'What does the Finchley project involve?', a: 'Training one classifier on 1,113 Barnet Census areas to find car-light areas, making the target rarer in four steps, and comparing ROC AUC with average precision.' },
      { q: 'Is vibe coding included?', a: 'At every age. The learner sets out what the program should do, an AI writes a draft, and the learner checks it.' },
      { q: 'How soon can a Finchley learner build AI agents?', a: 'When they write Python unaided, mostly from sixteen; Copilot Studio agents are taught one-to-one.' },
      { q: 'Do you support GCSE and A level pupils?', a: 'Yes, for computer science and maths. We teach understanding and promise no grade.' },
      { q: 'What do Finchley lessons cost?', a: 'Nothing for the trial. Then USD 100 per month in a class or USD 150 per month for one-to-one teaching.' },
      { q: 'Are lessons held in school holidays?', a: 'No; send us the dates and we pause.' }
    ]
  },

  next: {
    eyebrow: 'Read on',
    h2: 'More Barnet and London pages',
    html: 'Every one of these carries a different project: <a class="cg-inline-link" href="/coding-classes-in-barnet-london">Barnet</a> (a traffic model), <a class="cg-inline-link" href="/coding-classes-in-haringey-london">Haringey</a>, <a class="cg-inline-link" href="/coding-classes-in-camden-london">Camden</a> and <a class="cg-inline-link" href="/ai-and-programming-classes-in-wimbledon-london">Wimbledon</a> (honest model scores). Other areas are listed on <a class="cg-inline-link" href="/best-coding-class-in-london">London</a> and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Finchley and Barnet',
  footerPlaces: [
    { href: '/coding-classes-in-barnet-london', label: 'Barnet' },
    { href: '/best-coding-class-in-london', label: 'London' },
    { href: '/coding-classes-in-united-kingdom', label: 'United Kingdom' }
  ],

  personalityCss: `
.cg-root.cg-fnc .cg-hero-grid { align-items: center; gap: clamp(1rem, 3.1vw, 2.6rem); }
.cg-root.cg-fnc .cg-hero h1 { font-weight: 760; letter-spacing: -0.026em; line-height: 1.05; }
.cg-root.cg-fnc .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1.2rem; }
.cg-root.cg-fnc .cg-eyebrow { letter-spacing: 0.17em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-fnc .cg-section-head h2 { max-width: 29ch; letter-spacing: -0.02em; }
.cg-root.cg-fnc .cg-table caption { font-weight: 600; text-align: left; font-size: 0.9rem; }
.cg-root.cg-fnc .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-fnc .cg-table th { letter-spacing: 0.05em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-fnc .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-fnc .cg-callout { border-left-width: 6px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'London Borough of Barnet (E09000003). Census 2021 usual residents by 2022 ward (per ward, not summed): East Finchley 16,639; Finchley Church End 18,840; West Finchley 19,430. postcodes.io (Barnet): Finchley (N3), Church End (N3), East Finchley (N2), North Finchley (N12), Woodside Park (N12).',
    localProject: 'Census 2021 TS045/TS017/TS044/TS006 for 1,113 Barnet OAs. Logistic regression (log density, one-person share, flat share), out-of-fold stratified 5-fold x 5 shuffles. Car-light = top slice by no-car share. Top 50% (557): ROC AUC 0.907, AP 0.901; top 25% (279): 0.908 / 0.750; top 10% (112): 0.915 / 0.521; top 5% (56, >= 56.4%): 0.905 / 0.359; at 80% recall 45 found with 164 false alarms (precision 0.215); top-56 precision 0.375. Lesson family: precision-recall curve, average precision vs ROC AUC under rarity.',
    requiredMentions: [
      '16,639',
      '18,840',
      '19,430',
      '1,113',
      'East Finchley',
      'North Finchley',
      'Woodside Park',
      'Church End',
      'average precision',
      'car-light'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS045, TS017, TS044, TS006 and usual residents by ward, via Nomis.', url: 'https://www.nomisweb.co.uk/sources/census_2021' },
      { claim: 'Nomis API dataset NM_2063_1, Census 2021 TS045 car or van availability.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2063_1.def.sdmx.json' },
      { claim: 'postcodes.io places: Finchley and suburban areas in Barnet.', url: 'https://api.postcodes.io/places?q=North%20Finchley' }
    ],
    rejectedClaims: [
      'A population for "Finchley": no single official boundary; ward figures given separately, never summed.',
      '"Car-light" as an official category: it is our own label for the experiment.',
      'Why some areas have fewer cars: no cause claimed.',
      'Local history or named landmarks: not read from a source; not claimed.',
      'Named schools and term dates: none named or read.',
      'Sterling prices: none.'
    ]
  }
};
