'use strict';
// Shropshire (cg- county index, UK cluster Phase 7, row 246). Two unitary councils: Shropshire and Telford and Wrekin.
// Spine: does evolution in code work, and which part of it matters? Sources read raw 26 September 2026: Darwin, The
// Autobiography of Charles Darwin (Project Gutenberg 2010): "I was born at Shrewsbury on February 12th, 1809". Darwin,
// On the Origin of Species, first edition 1859 (Project Gutenberg 1228): "I have called this principle, by which each
// slight variation, if useful, is preserved, by the term of Natural Selection". Historic England NHLE 1246556, Grade
// II, Castle Gates, Shrewsbury: "Statue of Charles Darwin. 1897. By H Montford. Seated bronze figure on polished granite
// plinth".
// Our experiment (scratchpad shr/ga.py): a seeded 40-item knapsack of our own (capacity 286 of total weight 859),
// exact optimum 411 by dynamic programming. 20,000 evaluations per run, 30 runs each: random search mean 91.6 per cent
// of optimum (worst 89.8, optimum 0/30); full GA (tournament of two, one-point crossover, mutation 1/40, best kept)
// 98.5 (96.8, 0/30); no selection apart from keeping the best 94.9 (91.7, 0/30); no mutation 92.0 (88.6, 0/30); no
// crossover 98.7 (97.1, 2/30).
// Lesson family: genetic algorithm with ablation (which ingredient matters), against random search and an exact
// method; screened (genetic algorithm, natural selection: 0 hits; Darwin appears on the Bromley page for a different
// lesson on self-fertilisation data).
// Place facts read raw 26 September 2026: Nomis Census 2021 TS001 (our sum 509,147); ONS built-up areas, all inside,
// agree with our OA sums. Term dates: none read.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'county', tag: 'SHROPSHIRE', blurb: 'Shrewsbury, Telford and the market towns, and a Darwin lesson: evolve answers in code, then switch off each ingredient to see what matters.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-classes-in-shropshire',
  code: 'shr',
  accent: '#5C2820',
  accentRationale: 'Shropshire: an iron-oxide red from the solver (9.51:1 on the darkest paper tint), a nod to Ironbridge, darker and browner than the Lancashire rose',
  pageType: 'governorate',
  place: {
    name: 'Shropshire',
    eyebrow: 'Shropshire',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'West Midlands' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'Herefordshire', href: '/coding-classes-in-herefordshire' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Shropshire',
  title: 'Coding Classes in Shropshire | Live Online, Ages 6 to 67',
  description: 'Live online coding, Python and maths classes across Shropshire, from Telford and Shrewsbury to Oswestry, Newport, Bridgnorth, Market Drayton and Ludlow.',
  ogDescription: 'Coding classes for all of Shropshire, and a Darwin project: evolve solutions with a genetic algorithm, then remove selection, mutation and crossover one at a time to see which matter.',
  twitterDescription: 'Shropshire coding, Python and maths classes for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, Python and Maths Classes for Shropshire',
    description: 'Ability-placed online coding, Python, AI and mathematics for children, teenagers and adults across Shropshire, taught live in English.'
  },

  h1: 'Coding classes in Shropshire',
  capsuleQ: 'What are the best coding classes in Shropshire?',
  capsule: 'Shropshire as a county is two unitary councils, Shropshire and Telford and Wrekin, and together they had 509,147 residents at the 2021 Census, our sum of the two published counts. Telford is the largest town, then Shrewsbury, with Oswestry, Newport, Bridgnorth and Market Drayton well behind. We teach live over video from India, and a learner\'s class is decided by what they can already do, never simply by age. Learners from 6 to 67 join groups of five to ten or have one-to-one lessons, in coding, Python, AI and maths. The Shropshire project starts with Charles Darwin, who was born in Shrewsbury. The first lesson is free; continuing is USD 100 a month in a group or USD 150 a month one-to-one.',
  lead: 'Charles Darwin opened his autobiography with the words "I was born at Shrewsbury on February 12th, 1809", and a bronze statue of him, made in 1897, sits in front of the town\'s library. His idea of natural selection, slight useful variations preserved over generations, became one of the most borrowed ideas in computing: the genetic algorithm, which breeds better answers to a problem instead of calculating them. This page\'s project builds one in Python, tests it against pure guessing and against an exact method, and then does what any good scientist would do: switches off each ingredient in turn to find out which ones actually matter.',
  wa: 'Hello Modern Age Coders, we are in Shropshire and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses for Shropshire',
    h2: 'Where Shropshire learners start',
    intro: 'An eight-year-old in Wem who likes making creatures in Scratch, a Year 9 in Bridgnorth fascinated by how AI learns, a Year 12 in Shrewsbury heading for computer science, and an adult in Telford studying AI properly. Each begins with a free lesson.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python for children, with games, puzzles and first steps with data and AI.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Maths learned by coding it, including chance, averages and experiments run many times.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'Python to real machine learning for teenagers, from first models to neural networks and computer vision.' },
      { course: 'artificial-intelligence-complete-masterclass-college', band: 'Adults', note: 'Search, logic and agents for adults, including hill-climbing, simulated annealing and genetic algorithms.' }
    ]
  },

  sections: [
    {
      id: 'shropshire', tint: '', eyebrow: 'Shropshire in figures',
      h2: '509,147 people under two councils',
      intro: 'Council counts are 2021 Census figures on Nomis, and the total is our own addition. Towns are ONS built-up areas, each checked against our sum of census output areas.',
      body: [
        { kind: 'table', caption: 'Shropshire built-up areas with at least 6,000 residents, 2021 Census', head: ['Town', 'Residents'], rows: [
          ['Telford', '156,910'],
          ['Shrewsbury', '76,015'],
          ['Oswestry', '17,510'],
          ['Newport', '14,190'],
          ['Bridgnorth', '12,175'],
          ['Market Drayton', '12,060'],
          ['Ludlow', '10,040'],
          ['Whitchurch', '9,855'],
          ['Shifnal', '8,980'],
          ['Albrighton', '6,985'],
          ['Wem', '6,280']
        ] },
        { kind: 'p', text: 'Shropshire Council covers 323,606 people and Telford and Wrekin 185,541. The shape is unusual: Telford alone is twice the size of Shrewsbury, and after those two no town reaches twenty thousand. By our own arithmetic, about a third of the county lives outside the eleven towns in the table, in villages and hamlets, which is exactly where a weekly club at the right level is hardest to find. All eleven towns lie wholly inside the county, and each matches our own count. Holiday dates are set by the two councils and by academy trusts; since we have not read them, we simply ask each family for theirs.' },
        { kind: 'callout', h3: 'Borders on every side', p: 'Shropshire touches Wales and several English counties with pages of their own, including <a class="cg-inline-link" href="/coding-classes-in-herefordshire">Herefordshire</a> to the south and <a class="cg-inline-link" href="/coding-classes-in-cheshire">Cheshire</a> to the north, with <a class="cg-inline-link" href="/best-coding-class-in-wolverhampton">Wolverhampton</a> just east.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Shropshire project',
      h2: 'Evolving an answer, then testing the theory',
      intro: 'A packing puzzle, a genetic algorithm, and an experiment that removes one ingredient at a time.',
      body: [
        { kind: 'p', text: 'The puzzle is one of our own invention: 40 items, each with a weight and a value, and a bag that holds 286 units of weight. Which items should go in to make the bag as valuable as possible? A pack is written as 40 yes-or-no genes. The genetic algorithm starts with 60 random packs, then builds each new generation by picking parents in small contests where the better pack wins, cutting two parents and joining the pieces (crossover), and flipping the odd gene at random (mutation). Any pack that is too heavy scores nothing. Because the puzzle is small, dynamic programming can also find the true optimum, a value of 411, so we can measure precisely how close each method gets.' },
        { kind: 'table', caption: 'Our experiment: 30 runs of 20,000 tries each, 26 September 2026', head: ['Method', 'Average result, share of optimum', 'Worst run', 'Runs that hit the optimum'], rows: [
          ['Pure guessing', '91.6%', '89.8%', '0 of 30'],
          ['Full genetic algorithm', '98.5%', '96.8%', '0 of 30'],
          ['No selection (parents picked at random)', '94.9%', '91.7%', '0 of 30'],
          ['No mutation', '92.0%', '88.6%', '0 of 30'],
          ['No crossover', '98.7%', '97.1%', '2 of 30']
        ] },
        { kind: 'p', text: 'Evolution clearly beats guessing: 98.5 per cent of the optimum on average, against 91.6. Take away selection, so parents are chosen at random, and it falls to 94.9 per cent; the only help left is that we always carry the top-scoring pack forward. Take away mutation and it falls further, to 92.0, barely better than guessing, because the population soon runs out of new variation. These two results are Darwin\'s point in miniature: variation and selection together do the work.' },
        { kind: 'p', text: 'The third result is the honest surprise. Removing crossover, the step that looks most like breeding, made no difference here; if anything the version without it did fractionally better. Crossover helps on some problems and not on others, and only an experiment tells you which. And note the last column: across 30 runs the full algorithm never found the optimal pack, while dynamic programming found it straight away. When an exact method exists and is fast enough, use it; evolution is for problems too big or too messy for exact methods.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 9 to 12', p: 'Play a paper version: pack a bag of cards with weights and values, keep the better of two packs, change one card, and repeat.' },
          { h3: 'Ages 12 to 15', p: 'Write the fitness function and a simple mutate-and-keep loop in Python, and compare it with random guessing over the same number of tries.' },
          { h3: 'Ages 15 and up', p: 'Build the full algorithm with tournaments, crossover and mutation, add the exact solver, and run the switch-one-off experiment many times.' }
        ] },
        { kind: 'callout', h3: 'What is Darwin\'s and what is ours', p: 'The quotations come from Darwin\'s autobiography and the first edition of On the Origin of Species, both on Project Gutenberg, and the statue details from its Historic England list entry. The puzzle, the algorithm and every result in the table are ours. A genetic algorithm borrows an idea from biology; it is not a model of how living things evolve.' }
      ]
    },
    {
      id: 'darwin', tint: 'deep', eyebrow: 'Why Shrewsbury',
      h2: 'A Shrewsbury boy and an idea computing borrowed',
      intro: 'The Shropshire link, from Darwin\'s own words and the official list entry.',
      body: [
        { kind: 'table', caption: 'Charles Darwin and Shrewsbury', head: ['Source', 'What it says'], rows: [
          ['Darwin\'s autobiography', 'He was born at Shrewsbury on 12 February 1809.'],
          ['On the Origin of Species, 1859', 'Each slight variation, if useful, is preserved: the principle he called Natural Selection.'],
          ['Historic England, entry 1246556', 'A seated bronze statue of Darwin by H Montford, made in 1897, stands in front of the library at Castle Gates.'],
          ['Historic England, entry 1246556', 'The base carries Darwin\'s dates and the names of the sculptor and the founders.']
        ] },
        { kind: 'p', text: 'Computer scientists borrowed Darwin\'s idea because some problems have too many possible answers to check one by one, like timetables, delivery routes, circuit layouts and the design of aerials. A population of rough answers that improves by variation and selection can find very good ones without anyone knowing the formula. A Shropshire student who has built one and then tested which parts matter has learned both a powerful technique and the habit of checking a good story with an experiment.' },
        { kind: 'p', text: 'Modern Age Coders is independent of Shropshire Council, Telford and Wrekin Council, Historic England and Project Gutenberg. Darwin\'s words are his; the code, the puzzle and any mistakes are ours.' },
        { kind: 'spec', title: 'Nearby pages', p: '<a class="cg-inline-link" href="/coding-classes-in-herefordshire">Herefordshire</a> and <a class="cg-inline-link" href="/best-coding-class-in-hereford">Hereford</a> are south; <a class="cg-inline-link" href="/coding-classes-in-cheshire">Cheshire</a> and <a class="cg-inline-link" href="/best-coding-class-in-chester">Chester</a> north; <a class="cg-inline-link" href="/best-coding-class-in-wolverhampton">Wolverhampton</a> and the <a class="cg-inline-link" href="/coding-classes-in-the-west-midlands">West Midlands</a> east.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The path',
    h2: 'From Scratch creatures to evolving algorithms',
    intro: 'The free lesson places each learner. A birthday is a first guess; skill settles it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Creatures and games', p: 'Block coding with creatures that move, collect and compete, and a first look at randomness.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 8 to 13', h3: 'Experiments in code', p: 'Typed Python that runs a game many times and counts what happens.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 13 to 18', h3: 'How AI learns', p: 'Machine learning and search for teenagers, with honest tests of what each method achieves.', courses: ['ai-ml-masterclass-teens', 'problem-solving-dsa-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'AI done properly', p: 'Search, logic, agents and machine learning for adults who want to understand AI, not just use it.', courses: ['artificial-intelligence-complete-masterclass-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and experiments',
    h2: 'Every AI method comes with a story. How do you know which part works?',
    intro: 'Switching parts off, one at a time, is how you find out.',
    p1: 'Genetic algorithms, neural networks and many other AI methods are explained with appealing stories from biology or the brain. Stories are a good way in, but they are not evidence. In our experiment, the part that sounds most like breeding, crossover, did nothing useful for this puzzle, while the plain-sounding parts, selection and mutation, did almost all the work.',
    p2: 'Researchers call this an ablation study: remove one component, rerun, compare. A Shropshire student who has done one knows to ask of any AI claim which ingredient is really responsible, and what happens without it. That question cuts through a great deal of hype.',
    closer: 'So a young person in Shropshire should learn to code in 2026 to test the stories told about AI, not just repeat them.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'How lessons run',
    h2: 'Ludlow to Whitchurch, one screen away',
    intro: 'Shropshire is large and rural, and for many families a weekly class in Telford or Shrewsbury means a real journey. Online lessons remove it.',
    cells: [
      { h3: 'From your own home', p: 'A farmhouse near Clun, a terrace in Oswestry, a new estate in Telford. Learner and teacher share one screen, and the learner types.' },
      { h3: 'The school system you know', p: 'Key stages, year groups, GCSEs and A levels mean what they mean in Shropshire schools, and lessons are in English.' },
      { h3: 'A free lesson to begin', p: 'A genuine lesson, then an honest recommendation. We ask for no card details.' },
      { h3: 'Classmates at your stage', p: 'Five to ten learners at one level, from Shropshire and many other places.' },
      { h3: 'Holidays when you need them', p: 'Most learners do two lessons a week and pause for their school\'s own holidays.' },
      { h3: 'Booked in UK time', p: 'Your slot is set in UK time and stays put through the clock changes; the teacher, on India time some hours ahead, moves instead.' }
    ],
    spec: { title: 'Why groups follow level', p: 'In a county of small towns and villages, five learners at the same stage free on one evening rarely live close together. Level-based groups let a learner in Church Stretton or Much Wenlock join a class that suits them.' }
  },

  fees: {
    h2: 'Fees in Shropshire',
    intro: 'Market Drayton or Albrighton, the fee is the same, as it is in every country we teach other than India.',
    first: 'One whole lesson of genuine work, then advice on level and course.',
    group: 'Around eight lessons a month with five to ten learners at one level.',
    private: 'Around eight lessons a month with the teacher to themselves.',
    closer: 'Our prices are in US dollars rather than pounds. Billing begins only once the free lesson has produced an agreed course and a regular weekly time. Pauses, missed lessons and a switch between group and private work are all set out on the pricing page.'
  },

  reviewsH2: 'Family reviews on Google',

  book: {
    h2: 'Ask for a free Shropshire lesson',
    intro: 'Tell us the learner\'s age or school year and what they enjoy. A first lesson might be a Scratch creature game, a Python experiment, or the evolving packs on this page.',
    success: 'Thank you. Your Shropshire request is with us.'
  },

  faq: {
    h2: 'Shropshire questions',
    intro: 'The county, the Darwin project and the practical details.',
    items: [
      { q: 'How many people live in Shropshire?', a: 'Shropshire Council\'s area had 323,606 usual residents and Telford and Wrekin 185,541 at the 2021 Census, 509,147 together by our sum of the ONS figures on Nomis.' },
      { q: 'What are the largest towns in Shropshire?', a: 'By ONS built-up area: Telford 156,910, Shrewsbury 76,015, Oswestry 17,510, Newport 14,190 and Bridgnorth 12,175.' },
      { q: 'What is the Darwin project?', a: 'Learners build a genetic algorithm in Python for a packing puzzle, compare it with guessing and an exact method, and switch off selection, mutation and crossover in turn. Selection and mutation mattered; crossover did not help on this puzzle.' },
      { q: 'Was Charles Darwin from Shropshire?', a: 'Yes. His autobiography begins "I was born at Shrewsbury on February 12th, 1809", and a Grade II listed statue of him from 1897 stands at Castle Gates in Shrewsbury.' },
      { q: 'What is a genetic algorithm?', a: 'A search method that keeps a population of possible answers, picks better ones as parents, mixes and randomly changes them, and repeats, so the answers improve over generations.' },
      { q: 'Is there a Shropshire classroom?', a: 'No. We only teach live on video, so a learner in Clun is as close to class as one in Telford.' },
      { q: 'Which ages do you teach?', a: 'Ages 6 to 67. Young children begin with blocks, Python often starts around eight to ten, teenagers move on to AI and algorithms, and adults study AI or Python in depth. The free lesson sets the level.' },
      { q: 'Can adults learn about AI methods like this?', a: 'Yes. The adult artificial intelligence course covers search, logic and agents, including hill-climbing, simulated annealing and genetic algorithms.' },
      { q: 'How much do lessons cost?', a: 'The first lesson is free. Carry on and you pay USD 100 monthly for a group seat or USD 150 monthly for one-to-one, with nothing to pay on joining and no term to commit to.' },
      { q: 'Do lessons pause for Shropshire school holidays?', a: 'Yes, if you wish. Shropshire Council, Telford and Wrekin Council and academy trusts publish their own dates, and we plan breaks around yours.' }
    ]
  },

  next: {
    eyebrow: 'Around Shropshire',
    h2: 'Neighbouring pages',
    html: 'Try <a class="cg-inline-link" href="/coding-classes-in-herefordshire">Herefordshire</a>, <a class="cg-inline-link" href="/coding-classes-in-cheshire">Cheshire</a>, <a class="cg-inline-link" href="/best-coding-class-in-wolverhampton">Wolverhampton</a> or <a class="cg-inline-link" href="/best-coding-class-in-stoke-on-trent">Stoke-on-Trent</a>. The <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> has every other area.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Shropshire and nearby',
  footerPlaces: [
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' },
    { href: '/coding-classes-in-herefordshire', label: 'Herefordshire' },
    { href: '/best-coding-class-in-wolverhampton', label: 'Wolverhampton' }
  ],

  personalityCss: `
.cg-root.cg-shr .cg-hero-grid { align-items: end; gap: clamp(1rem, 3vw, 2.6rem); }
.cg-root.cg-shr .cg-hero h1 { font-weight: 800; letter-spacing: -0.029em; line-height: 1.01; }
.cg-root.cg-shr .cg-capsule { border-top: 5px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-shr .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-shr .cg-section-head h2 { max-width: 24ch; letter-spacing: -0.02em; }
.cg-root.cg-shr .cg-table caption { font-style: italic; font-weight: 600; text-align: left; }
.cg-root.cg-shr .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-shr .cg-table th { letter-spacing: 0.04em; font-weight: 700; text-transform: uppercase; font-size: 0.8rem; }
.cg-root.cg-shr .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.95rem; }
.cg-root.cg-shr .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Shropshire: unitary councils Shropshire and Telford and Wrekin. ONS Census 2021 TS001 via Nomis: Shropshire 323,606; Telford and Wrekin 185,541; our sum 509,147. ONS built-up areas (published; agree with our OA sums, all inside): Telford 156,910; Shrewsbury 76,015; Oswestry 17,510; Newport 14,190; Bridgnorth 12,175; Market Drayton 12,060; Ludlow 10,040; Whitchurch 9,855; Shifnal 8,980; Albrighton 6,985; Wem 6,280. Darwin, Autobiography (Gutenberg 2010): "I was born at Shrewsbury on February 12th, 1809". Darwin, On the Origin of Species, first edition 1859 (Gutenberg 1228): "I have called this principle, by which each slight variation, if useful, is preserved, by the term of Natural Selection". Historic England NHLE 1246556, Grade II: "Statue of Charles Darwin. 1897. By H Montford. Seated bronze figure on polished granite plinth"; "The base of the statue carries Darwin\'s dates and is signed with the name of the sculptor, and the founders, Broad and Son".',
    localProject: 'Genetic algorithm with ablation on a seeded 40-item knapsack (ours): capacity 286, total weight 859, exact DP optimum 411. GA: population 60, tournament of two, one-point crossover, mutation 1/40, elitism of one, 20,000 evaluations, 30 runs. Mean / worst / exact hits: random search 91.6 / 89.8 / 0; full GA 98.5 / 96.8 / 0; no selection (elitism kept) 94.9 / 91.7 / 0; no mutation 92.0 / 88.6 / 0; no crossover 98.7 / 97.1 / 2. Page labels puzzle and results as ours and says a GA is not a model of biology. AI angle: ablation cuts through method stories. Lesson family: genetic algorithm, ablation, exact method comparison.',
    requiredMentions: [
      '509,147',
      'born at Shrewsbury',
      'Montford',
      '1246556',
      'genetic algorithm',
      'Natural Selection',
      'Market Drayton',
      'Oswestry',
      'Bridgnorth',
      'Shifnal',
      'Albrighton'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents for Shropshire and Telford and Wrekin, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Census 2021 built-up area populations for Shropshire towns.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'ONS Open Geography Portal: output area to built-up area lookup (OA21 to BUA22).', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'Charles Darwin, The Autobiography of Charles Darwin, Project Gutenberg eBook 2010.', url: 'https://www.gutenberg.org/ebooks/2010' },
      { claim: 'Charles Darwin, On the Origin of Species, first edition, Project Gutenberg eBook 1228.', url: 'https://www.gutenberg.org/ebooks/1228' },
      { claim: 'Historic England, National Heritage List entry 1246556: Statue of Charles Darwin, Shrewsbury.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1246556' }
    ],
    rejectedClaims: [
      'Ironbridge and the Flaxmill Maltings: not researched from primary pages for this build, so not described.',
      'That genetic algorithms usually need crossover: our own experiment found it did not help here; no general claim is made.',
      'Darwin\'s schooling in Shrewsbury: present in the autobiography but not used, to keep the page off school naming.',
      'Travel times across the county: not measured, so none are given.',
      'Shropshire school term dates: none read.',
      'Named Shropshire schools: none named.'
    ]
  }
};
