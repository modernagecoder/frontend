'use strict';
// Zwolle: capital of Overijssel, a Hanseatic town, and one of the country's
// biggest rail junctions. Spine: "one of the biggest" is a claim with no
// threshold and no comparison set, so it cannot be tested; "eight directions
// leave this station" can be, and says more.

module.exports = {
  slug: 'coding-classes-in-zwolle',
  code: 'zwo',
  accent: '#1E507B',
  accentRationale: 'Zwolle: the blue of the IJssel and the Zwarte Water, set by the solver apart from The Hague\'s slate and Overijssel\'s river blue',
  pageType: 'city',
  place: {
    name: 'Zwolle',
    eyebrow: 'Zwolle, Overijssel',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Overijssel' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Zwolle, Netherlands',
  title: 'Coding Classes in Zwolle | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Zwolle for ages 6 to 67, across all 16 wijken of the Overijssel capital. First lesson free, then one flat fee.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in Zwolle, capital of Overijssel, built on the difference between a claim you can test and one you cannot.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Zwolle Learners',
    description: 'Ability-placed online coding, Python, data, AI and mathematics for children, teenagers and adults across the wijken of Zwolle, taught in English.'
  },

  h1: 'Coding classes in Zwolle, where one of the biggest is not a claim you can check',
  capsuleQ: 'What are the best coding classes in Zwolle?',
  capsule: 'Coding classes in Zwolle serve 134,147 people (Statistics Netherlands, 1 January 2026), the capital of Overijssel and the nineteenth municipality of the country. Its own entry calls the station one of the largest railway junctions in the Netherlands and says eight directions leave it. Only one of those two statements can be tested, and it is not the first. Across the whole municipality the teaching is done by Modern Age Coders on a live connection, in English, at any age between 6 and 67. Nothing is charged for the opening hour. From there it is USD 100 monthly in a group of five to ten, or USD 150 with a teacher to yourself.',
  lead: 'Two sentences about this city\'s station sit next to each other in the same source. Zwolle is one of the largest railway junctions in the Netherlands. From Zwolle you can travel in eight directions by train. The second can be checked by anyone with a map and ten minutes. The first cannot be checked by anyone at all, because nobody has said which junctions are in the running, what is being measured, or where the cutoff falls. A child who can tell those two sentences apart is already harder to sell to than most adults.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Zwolle.',

  picks: {
    eyebrow: 'Course picks for Zwolle',
    h2: 'Four courses for a city that half the north travels into',
    intro: 'A groep 5 child in Stadshagen, a teenager in Zwolle-Zuid who wants to test a claim rather than repeat it, a student at one of the applied institutions here, and a parent in Berkum whose reports are full of phrases nobody can check: four doors into one city.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch from an empty stage to a finished game in three months, in English, for the groep 3 to 6 child anywhere in the municipality.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Python and real datasets to a first model, for the teenager who would rather check a claim than accept it.' },
      { course: 'statistics-probability-maths-course', band: 'Teens and adults', note: 'From data to hypothesis testing, for anyone who wants to know what evidence would actually settle a question.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Excel, SQL, Python and BI, for the working parent who has to turn a vague brief into a number somebody can defend.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Zwolle today',
      h2: 'The provincial capital, nineteenth in the country, and more secondary pupils than primary',
      intro: 'The national register held 134,147 people on 1 January 2026, in 63,332 households averaging 2.07 people, on 110.67 square kilometres of land inside 119.36 of territory: a published 1,209 residents to the square kilometre. In 1995 the count was 100,160, so Zwolle has gained 33,987 people in thirty-one years, a rise of 34 percent.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'A city that fills up in the morning', p: '62 primary establishments teach 12,931 pupils and 25 secondary establishments teach 13,407, so secondary outnumbers primary, which happens only where schools draw from far outside the boundary. The municipality also counts 25,320 students in higher education for a reference date of 1 August 2026, against 4,820 residents in applied higher education and 1,160 at university level for 2025.' },
          { h3: 'An even spread of ages', p: '21,460 residents are under fifteen and 17,279 are between fifteen and twenty-five; 38,139 are between twenty-five and forty-five, 33,565 between forty-five and sixty-five, and 23,704 are sixty-five or over. 27,236 households hold one person, 43 percent. The five published bands account for the whole municipality.' },
          { h3: 'A Hanseatic town on three waters', p: 'Zwolle is a Hanzestad and the capital of Overijssel, and it sits where the IJssel, the Vecht and the Zwarte Water come together. City rights were granted in 1230 by bishop Wilbrand van Oldenburg, and the municipality is a single woonplaats divided into 16 wijken and 78 buurten.' }
        ] },
        { kind: 'spec', title: 'A tower that stopped being the tallest', p: 'The Peperbus, formally the Onze-Lieve-Vrouwetoren, was built between 1463 and 1482 and stands 75 metres. It is no longer the tallest structure in the city: the IJsseltoren, at about 96 metres, now is. The Sassenpoort, the city gate completed in 1406, has been a national monument since 13 February 1967.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'One woonplaats, sixteen wijken, and a station everybody changes at',
      intro: 'Unlike most municipalities in this series, Zwolle is a single woonplaats: no villages with separate names, just one town divided into 16 wijken and 78 buurten.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The centre inside the moat', p: 'The old town within the star-shaped defences, with the Peperbus, the Sassenpoort and the market. Small, walkable and holding a large share of the 43 percent single-person households.' },
          { h3: 'Around the station', p: 'The quarter that eight rail directions converge on, and the reason the secondary schools and the applied institutions can draw from a region rather than a city. On a weekday morning this is the busiest ground in the province.' },
          { h3: 'Zwolle-Zuid', p: 'The large southern expansion across the Nieuwe Vecht, built from the 1970s, with its own centres and schools and most of the families with children of primary age.' },
          { h3: 'Stadshagen', p: 'The newest large district, north-west across the Zwartewater, built from the late 1990s. Full primary schools, young families, and the part of the city that accounts for much of the 34 percent growth since 1995.' },
          { h3: 'Berkum, Wipstrik and the east', p: 'Older residential districts between the centre and the Vecht, mixed housing and short journeys, the part of the city that changed least over the period this page covers.' },
          { h3: 'Westenholte and the edges', p: 'The former village cores and the industrial edges by the water. Even here nothing is far, because the whole municipality is a single town of 110 square kilometres, most of which is not built on.' }
        ] },
        { kind: 'p', text: 'The class reaches every wijk at one hour and one fee, and stage rather than address decides which group a learner joins.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure and its source, and the one sentence this page will not repeat as fact',
      intro: 'The national count, the municipal entry, the tower, the gate, and the claim the project below takes apart.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The municipal count', p: 'Statistics Netherlands, provisional, 1 January 2026: 134,147 residents; 63,332 households for 2025 averaging 2.07 people, 27,236 of them single-person, 43 percent; 21,460 under fifteen; 17,279 aged fifteen to twenty-five; 38,139 aged twenty-five to forty-five; 33,565 aged forty-five to sixty-five; 23,704 aged sixty-five and over; 62 primary establishments with 12,931 pupils and 25 secondary with 13,407; 25,320 students in higher education at 1 August 2026; 4,820 residents in applied higher education and 1,160 at university level for 2025; total area 11,936 hectares, land 11,067; density 1,209; one woonplaats, 16 wijken and 78 buurten; 100,160 residents in 1995, a rise of 33,987.' },
          { h3: 'The municipality, described', p: 'Its own entry: 134,143 residents on 1 January 2026, four fewer than the national figure for the same date, both kept; 119.36 square kilometres, 111.10 of land and 8.26 of water, against 110.67 of land nationally, both kept; mayor Peter Snijders; capital of Overijssel; the nineteenth municipality of the Netherlands; a Hanzestad; city rights in 1230 from bishop Wilbrand van Oldenburg.' },
          { h3: 'The claim, quoted exactly', p: 'The same entry describes Zwolle as one of the largest railway junctions in the Netherlands, and states that from here one can travel in eight directions by train. This page repeats the second as a fact and treats the first as a claim to be examined rather than passed on.' },
          { h3: 'What the entry does not give', p: 'No list of the country\'s railway junctions, no measure by which they are ranked, and no passenger figure for this station or any other. Those absences are the whole of the project below, and none of them is filled in here by inference.' },
          { h3: 'The tower and the gate', p: 'The Peperbus, formally the Onze-Lieve-Vrouwetoren, built 1463 to 1482, 75 metres, no longer the tallest in the city since the IJsseltoren at about 96 metres. The Sassenpoort, a city gate of the late fourteenth and early fifteenth century, completed in 1406 and a national monument since 13 February 1967.' },
          { h3: 'A name that is not unique', p: 'The formal name of the Peperbus, Onze-Lieve-Vrouwetoren, is also the formal name of the tower in Amersfoort, which stands at 98 metres and anchors the national coordinate grid. Two different towers, two cities, one name. This page mentions the coincidence and does not build on it.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the municipality, the station or any school named here and claims none. That is a statement anybody can check, which is the standard this page is arguing for.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'One of the largest: build the test, discover there isn\'t one, and write the claim that can be tested',
      intro: 'Two sentences about the same station, one checkable and one not, and the three things a superlative needs before anybody can agree or disagree with it.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Write the test before the answer', p: 'To decide whether Zwolle is one of the largest railway junctions the learner needs three things: the set of junctions being compared, the quantity by which largest is judged, and the cutoff that separates one of the largest from the rest. The source supplies none of the three, so the program cannot be written, and that is the finding rather than a failure.' },
          { h3: '2. Try each missing piece in turn', p: 'Suppose largest means directions, and the cutoff is the top three. Zwolle has eight directions and the learner has no other station\'s count, so the verdict is unknown. Suppose the cutoff is the top ten. Still unknown, for the same reason. Suppose largest means passengers. Now even the measurement for Zwolle is missing. Every route ends in unknown, and none of them ends in false.' },
          { h3: '3. Rewrite it into something checkable', p: 'The claim that survives is the one already in the source: eight directions leave this station. It has a measure, a subject and a value, it can be confirmed or refuted with a railway map, and it happens to be more informative than the superlative it sat next to. The learner ends with a rule: if a claim cannot be made false, it is not carrying information.' }
        ] },
        { kind: 'table', caption: 'What a testable claim needs, and which pieces each sentence has', head: ['Claim', 'Comparison set', 'Measure', 'Threshold', 'Can it be checked?'], rows: [
          ['One of the largest railway junctions in the Netherlands', 'not given', 'not given', 'not given', 'no'],
          ['Eight directions leave the station', 'not needed', 'directions', 'not needed', 'yes, with a map'],
          ['The nineteenth municipality of the Netherlands by population', 'all municipalities', 'residents', 'rank 19 exactly', 'yes, and the source gives it'],
          ['The Peperbus is 75 metres tall', 'not needed', 'metres', 'not needed', 'yes'],
          ['The Peperbus is the tallest in Zwolle', 'buildings in Zwolle', 'height', 'rank 1', 'yes, and it is false since the IJsseltoren']
        ] },
        { kind: 'callout', h3: 'A superlative without a set, a measure and a threshold is a mood, not a fact', p: 'The phrase one of the largest is doing something specific: it borrows the authority of a ranking while declining to say where the line is, so it cannot be shown to be wrong and therefore cannot be shown to be right either. The remedy is mechanical. Ask what is being compared, by what quantity, and where the cutoff falls. If any of the three is missing, either find it or replace the sentence with one that carries a measurable value, which is nearly always more useful anyway. The last row of the table above is included deliberately: a properly formed superlative can be checked, and this one turns out to be false, which is exactly what a good claim is supposed to risk. Every row was assessed against what the sources on this page actually provide, and the two sentences about the station are quoted from the same entry.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for claims that sound like measurements',
      intro: 'A leading provider, among the fastest growing, one of the most trusted, a top destination: the phrases are everywhere and almost none of them can be checked. Practised on a sentence about the station down the road.',
      body: [
        { kind: 'table', caption: 'When a sentence borrows the authority of a number', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Name the set', 'Ask what the subject is being compared with', 'A ranking with no other entrants', 'A comparison somebody could repeat'],
          ['Name the measure', 'Ask what quantity decides the ordering', 'Largest meaning whatever suits', 'A number to go and find'],
          ['Name the threshold', 'Ask where one of the largest stops', 'An unfalsifiable boast', 'A verdict that can go either way'],
          ['Prefer the value', 'Replace the superlative with the underlying figure wherever one exists', 'Eight directions lost behind a slogan', 'More information in fewer words'],
          ['Hold your own copy to it', 'Apply the same three questions to what you write and publish', 'A page that criticises what it does', 'Claims a reader can audit']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A child says their dog is one of the fastest dogs in the street. The class works out what would have to happen to find out: which dogs, how measured, how many count as one of the fastest. Then they try one of the tallest children in the class, which is easy, and see why the first was hard.' },
          { h3: 'For teenagers', p: 'A small function that takes a claim and returns testable or not, given fields for set, measure and threshold, plus a rewriter that turns a superlative into a value-bearing statement wherever the underlying figure exists. The stretch: collect ten claims from real advertising and classify all of them.' },
          { h3: 'For adults', p: 'The same three questions on the copy your own organisation publishes. Adults almost always find at least one claim that cannot be tested and one that can and is out of date, which is the more embarrassing of the two.' }
        ] },
        { kind: 'p', text: 'The population, household, area, school, tower and gate figures come from the offices and entries named beside them. The verdicts in the table are assessments of what those sources supply, not new measurements, and this page states no ranking for the station because none of its sources contains one.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From the fastest dog in the street to a claim that can be shown false',
    intro: 'Where a learner begins is settled in the free hour, and the wijk on the address is not consulted.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'How would we find out?', p: 'Children turn a boast into a question with a method attached.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Set, measure, cutoff', p: 'Learners test claims against the three things a comparison needs.', courses: ['maths-through-coding', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 14 to 18', h3: 'Falsifiable by design', p: 'Teenagers write the classifier and the rewriter, and try both on real advertising.', courses: ['data-science-course-for-teens-python-data', 'statistics-probability-maths-course'] },
      { band: 'Ages 18 to 67', h3: 'Auditing your own claims', p: 'Adults apply the three questions to copy their own organisation publishes.', courses: ['data-analysis-mastery-course-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will tell you Zwolle is a major rail hub. Why should a child here learn to ask what would make that false?',
    intro: 'Because the sentence is in the sources, it sounds like a measurement, and there is no arrangement of the world in which it would be wrong.',
    p1: 'Ask a tool about the station and it will produce the phrase, because the phrase is what the sources say. It is not inventing anything. The trouble is that agreeable, unfalsifiable sentences are exactly the ones that survive being copied from page to page, and a system trained on copies will reproduce them with more confidence than the original had. What breaks the cycle is a person asking the three questions, and noticing that the answer to all three is silence.',
    p2: 'That is why the learner writes the classifier rather than reading a warning about vague language. Building it forces the three fields to be explicit and makes the failure visible: the record simply cannot be filled in. A twelve-year-old in Stadshagen who has done that will apply it to a school prospectus at sixteen and to a job advertisement at twenty-two, and will be the one who asks what the comparison set was. Tools will keep producing fluent claims. Deciding which of them could be wrong is the part that stays with people.',
    closer: 'The case for a Zwolle child learning to code in 2026 is therefore not about railways. It is that a great deal of what anybody reads is built to be agreeable rather than checkable, that telling the two apart takes three questions and no expertise, and that the habit is best fixed by testing a sentence about the station they pass every day.',
    blogAnchor: 'whether a child should learn to code now that AI can'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a city the whole region commutes into',
    intro: 'Zwolle is where the north changes trains, and a great many of its secondary pupils and students arrive each morning from outside it. A lesson delivered over the connection reverses that: the class comes to the house instead.',
    cells: [
      { h3: 'No train, no bicycle, no car park', p: 'The lesson runs at the kitchen table in Stadshagen, Zwolle-Zuid or Westenholte at one fixed hour a week, in any weather and any month.' },
      { h3: 'The teaching is English; the school words stay Dutch', p: 'Instruction is in English throughout, and groep, havo, vwo and profielkeuze are used exactly as the school uses them, without translation in either direction.' },
      { h3: 'The opening hour, and what it produces', p: 'Three outcomes: evidence of where the learner really stands, the name of a course that follows from that evidence, and a time each week. Setting all three up needs no card and no deposit.' },
      { h3: 'Grouping follows ability and nothing else', p: 'A learner from Berkum and a learner from Stadshagen share a group whenever they are working at the same level. Where the levels differ, so do the groups, regardless of how near the two addresses are.' },
      { h3: 'Eight lessons a month, around the northern holidays', p: 'Lessons come twice weekly in one repeating slot, so eight in a typical month. The school year here belongs to regio Noord, as it does throughout Overijssel, and holidays a family has already booked get written in before the slot is settled.' },
      { h3: 'Summer narrows the gap, winter widens it', p: 'Clocks here shift in March and October while India leaves its own alone, putting the teacher three and a half hours in front for part of the year and four and a half for the rest. Late afternoons and early evenings work, and so does any hour of Saturday or Sunday.' }
    ],
    spec: { title: 'More secondary pupils than primary, because the region comes here', p: '62 primary establishments teach 12,931 pupils and 25 secondary establishments teach 13,407. A city whose schools draw from a whole province is a city whose teenagers already spend an hour a day travelling, and adding an evening journey on top of that is what stops many families from starting anything at all.' }
  },

  fees: {
    h2: 'The fee, in dollars, in every wijk',
    intro: 'Stated on the page rather than kept for a phone call.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'One international rate applies and it is quoted in dollars, never in euros, so every address in the municipality sees the same figure. Payment follows the free lesson rather than preceding it, and it goes over WhatsApp once a course and a time are settled. Pausing, changing plan and missing a week are described on the pricing page.'
  },

  reviewsH2: 'Six families, in the words they left on Google',

  book: {
    h2: 'Send the level; the wijk is not needed',
    intro: 'The first task might be a boast about a dog turned into a question with a method, a classifier that decides whether a claim can be tested, or a line of copy your own employer publishes that turns out not to be checkable.',
    success: 'Thank you. Your Zwolle class request has been sent.'
  },

  faq: {
    h2: 'Zwolle coding class questions',
    intro: 'The city, its station, its schools, the teaching and the terms.',
    items: [
      { q: 'Why does this page refuse to call Zwolle a major rail hub?', a: 'Because the phrase cannot be checked. Its own entry says Zwolle is one of the largest railway junctions in the Netherlands and also that eight directions leave the station. The second has a measure and a value and can be confirmed with a map; the first gives no comparison set, no measure and no cutoff, so no evidence could make it false. Building the test, finding that it cannot be built, and rewriting the claim into something checkable is the project on this page.' },
      { q: 'Is Zwolle the capital of Overijssel?', a: 'Yes, and it is the nineteenth municipality of the Netherlands by population, with 134,147 residents on 1 January 2026. Enschede is the larger city in the province. Being the seat of a province and being its biggest city are different things, which this cluster has run into more than once.' },
      { q: 'Why are there more secondary pupils than primary in Zwolle?', a: 'Because the secondary schools draw from far outside the municipal boundary. 62 primary establishments teach 12,931 pupils and 25 secondary establishments teach 13,407. A school figure counts where the school is, not where the child sleeps, and in a regional centre with eight rail directions that difference is large.' },
      { q: 'Is any of this taught in Dutch?', a: 'It is not. English carries every lesson from start to finish. Four Dutch terms survive that, groep and havo and vwo and profielkeuze, on the grounds that a learner has to recognise them wherever they turn up. What does not exist is a Dutch-medium edition of this course.' },
      { q: 'What time are classes for a family in Zwolle?', a: 'The teacher is three and a half hours ahead while Dutch summer time runs and four and a half in winter, because the Indian clock stays put. The workable window runs from the end of the school day to mid-evening, with both weekend days available, and one repeating slot is agreed in the free lesson.' },
      { q: 'Is the Peperbus the tallest thing in Zwolle?', a: 'Not any more. It stands 75 metres and was built between 1463 and 1482, and the IJsseltoren at about 96 metres is now taller. That is a good example of a superlative that was properly formed, could therefore be checked, and turned out to stop being true when somebody built something.' },
      { q: 'What is in the free lesson?', a: 'The teacher finds the boundary of what the learner can already do and sets one task just past it. A child might turn a boast about a dog into a question with a method. A teenager writes a classifier that decides whether a claim can be tested. An adult brings a line of copy from work. The hour ends with a course, a rung, a weekly time and a dollar figure, and nothing has been charged.' },
      { q: 'Is there a Modern Age Coders classroom in Zwolle?', a: 'No, and none is claimed near the station, in Stadshagen or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Zwolle coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a Zwolle group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or wijk. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'East to the border, out to the province, and up to the country',
    html: 'East along the line is <a class="cg-inline-link" href="/coding-classes-in-enschede">Enschede</a>, the largest city of <a class="cg-inline-link" href="/coding-classes-in-overijssel">Overijssel</a>, whose page turns a dike standard into a lifetime probability; south-west is <a class="cg-inline-link" href="/coding-classes-in-apeldoorn">Apeldoorn</a>. Standing over the whole set is the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>. A learner who turns out to want machine learning instead of software should look at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a>, or at the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-overijssel', label: 'Overijssel' },
    { href: '/coding-classes-in-enschede', label: 'Enschede' }
  ],

  personalityCss: `
.cg-root.cg-zwo .cg-hero-grid { align-items: start; gap: clamp(1.75rem, 4.2vw, 3.25rem); }
.cg-root.cg-zwo .cg-hero h1 { font-weight: 500; letter-spacing: -0.0085em; line-height: 1.13; }
.cg-root.cg-zwo .cg-capsule { border-left-width: 5px; border-left-style: solid; padding-left: 1.35rem; padding-top: 0.35rem; }
.cg-root.cg-zwo .cg-eyebrow { letter-spacing: 0.125em; font-weight: 600; }
.cg-root.cg-zwo .cg-section-head h2 { max-width: 34ch; }
.cg-root.cg-zwo .cg-grid-3 { gap: clamp(1.15rem, 2.4vw, 1.85rem) clamp(1.3rem, 2.8vw, 2.05rem); }
.cg-root.cg-zwo .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1.25rem; }
.cg-root.cg-zwo .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-zwo .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'City and municipality of Zwolle, capital of Overijssel: 134,147 residents (CBS 1 January 2026), the nineteenth municipality of the country; 62 primary establishments (12,931 pupils) and 25 secondary (13,407), so secondary outnumbers primary; 25,320 students in higher education at 1 August 2026. A single woonplaats with 16 wijken and 78 buurten; city rights 1230; a Hanzestad on the IJssel, Vecht and Zwarte Water. Regio Noord holidays with the rest of Overijssel. The city page argues from falsifiability; the province page owns the dike-standard arithmetic and Enschede owns the unallocatable aggregate.',
    localProject: 'A superlative without a set, a measure and a threshold cannot be tested. The municipal entry calls Zwolle one of the largest railway junctions in the Netherlands and separately states that eight directions leave the station. The second is checkable and the first is not: no comparison set, no measure and no cutoff is given anywhere, and no passenger figure appears, so every route through the test ends in unknown rather than in true or false. The learner builds a classifier over the three fields, discovers the record cannot be filled, and rewrites the claim into the value-bearing sentence already available. A properly formed superlative is included for contrast: the Peperbus at 75 metres was the tallest in the city and is not, since the IJsseltoren at about 96 metres. Distinct from the superlative-without-a-measure trap (Utrecht province, where four real measures existed and gave four answers) and from the criterion trap (Nijmegen, where the tests existed but the evidence table was empty): here the claim supplies none of the three things a comparison needs, so it carries no information at all. The page holds its own copy to the same standard.',
    requiredMentions: [
      '134,147',
      '63,332',
      '27,236',
      '100,160',
      '12,931',
      '13,407',
      '25,320',
      'Peperbus',
      'Sassenpoort',
      'Peter Snijders',
      'eight directions',
      'IJsseltoren',
      'Hanzestad',
      'Wilbrand van Oldenburg'
    ],
    sources: [
      { claim: 'Zwolle 134,147 residents on 1 January 2026 (CBS provisional); 63,332 households (2025) averaging 2.07, 27,236 single-person (43 percent); 21,460 aged 0 to 15; 17,279 aged 15 to 25; 38,139 aged 25 to 45; 33,565 aged 45 to 65; 23,704 aged 65 and over; total area 11,936 ha, land 11,067 ha; density 1,209; 62 primary establishments (12,931 pupils) and 25 secondary (13,407); 25,320 students in higher education at 1 August 2026; HBO 4,820 and WO 1,160 (2025); one woonplaats, 16 wijken and 78 buurten; 100,160 in 1995, a rise of 33,987 (34 percent).', url: 'https://allecijfers.nl/gemeente/zwolle/' },
      { claim: 'Zwolle 134,143 residents on 1 January 2026; 119.36 km2 (111.10 land, 8.26 water); mayor Peter Snijders (VVD); capital of the province of Overijssel; the nineteenth municipality of the Netherlands; a Hanzestad; city rights 1230 from bishop Wilbrand van Oldenburg; described as one of the largest railway junctions in the Netherlands, from which one can travel in eight directions by train. No list of junctions, no ranking measure and no passenger figure is given.', url: 'https://nl.wikipedia.org/wiki/Zwolle' },
      { claim: 'The Peperbus, formally the Onze-Lieve-Vrouwetoren, is 75 metres tall and was built between 1463 and 1482; it is no longer the tallest structure in Zwolle since the IJsseltoren at about 96 metres.', url: 'https://nl.wikipedia.org/wiki/Peperbus_(Zwolle)' },
      { claim: 'The Sassenpoort is a city gate of the late fourteenth and early fifteenth century, completed in 1406, and a rijksmonument since 13 February 1967.', url: 'https://nl.wikipedia.org/wiki/Sassenpoort' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any ranking of Zwolle station among Dutch railway junctions. No source read supplies a comparison set, a measure or a cutoff, and the page states that rather than filling any of them in.',
      'Passenger numbers for Zwolle station or any other. Not found at source.',
      'An estimate of how many of the 13,407 secondary pupils travel in from outside the municipality. The page notes only that a school figure counts where the school is.',
      'Anything built on the Peperbus and the Amersfoort tower sharing a formal name. The coincidence is mentioned once and not used.',
      'Anything the Overijssel page owns: the dike standards and the 25 municipalities. Anything the Enschede or Apeldoorn pages own.'
    ]
  }
};
