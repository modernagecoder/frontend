'use strict';
// Eindhoven: Brainport. Spine: a city where an unusual share of the parents are
// engineers, and where a single published jobs number (20,000 workplaces at BIC
// Noord, approved 10 March 2026) gets turned into a homes number at every
// kitchen table with three ratios nobody has published together.

module.exports = {
  slug: 'coding-classes-in-eindhoven',
  code: 'ehv',
  accent: '#005351',
  accentRationale: 'Eindhoven: a deep teal for the Dommel, the river the city grew along, kept apart from the Philips red that Amsterdam\'s flag already took',
  pageType: 'city',
  place: {
    name: 'Eindhoven',
    eyebrow: 'Eindhoven, Noord-Brabant',
    schemaType: 'City',
    chain: [{ type: 'AdministrativeArea', name: 'Noord-Brabant' }, { type: 'Country', name: 'Netherlands' }]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Eindhoven, Noord-Brabant, Netherlands',
  title: 'Coding Classes in Eindhoven | Modern Age Coders',
  description: 'Live online coding, Python, C++ and AI classes for Eindhoven learners aged 6 to 67, written for Brainport families where the parents already build the machines.',
  ogDescription: 'Live online coding, Python, C++, AI and mathematics for Eindhoven families, built on the jobs-to-homes arithmetic every Brainport household did in March 2026.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'cpp-programming-masterclass-for-teens',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Eindhoven Learners',
    description: 'Ability-placed online coding, Python, C++, AI, data and mathematics for children, teenagers and adults in Eindhoven and the Brainport region, taught in English.'
  },

  h1: 'Coding classes in Eindhoven, for children whose parents build the machines that build the chips',
  capsuleQ: 'What are the best coding classes in Eindhoven?',
  capsule: 'Coding classes in Eindhoven serve a city where an unusual share of the parents are engineers: ASML, headquartered in Veldhoven next door, employed more than 44,000 people worldwide in 2025 from 143 nationalities; the High Tech Campus holds some 300 companies and more than 12,500 people; and 35.4 of every thousand Eindhoven residents are of Indian origin, the third highest share of any Dutch municipality (Statistics Netherlands, 1 January 2024). Modern Age Coders teaches coding, Python, C++, AI and mathematics live online, in English, to learners aged 6 to 67 here. The first class is free; then USD 100 a month in a group of five to ten, or USD 150 one to one.',
  lead: 'On 10 March 2026 the city council approved the plan for a campus at BIC Noord with room for 20,000 workplaces. Within a week the question in every Eindhoven kitchen was how many homes that means, and every answer was a different number. The project on this page is the short program that shows why they differ, and it may be the most Eindhoven thing a child here can learn.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Eindhoven.',

  picks: {
    eyebrow: 'Course picks for Eindhoven',
    h2: 'Four courses for a city that already knows what an engineer does all day',
    intro: 'Eindhoven children do not need convincing that software matters; they need a reason to build it themselves when a parent could do it for them. These four are chosen for that: making, not watching, from Scratch to C++ to a model trained by hand.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'The child of two engineers still starts with sequencing and debugging, in English, and still needs to own the first bug.' },
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'Scratch, Roblox and Minecraft, for the groep 5 to 8 child who wants something a classmate at ISE or the Eckart can actually play.' },
      { course: 'cpp-programming-masterclass-for-teens', band: 'Ages 14 to 18', note: 'C++ from fundamentals to the STL and real games, in the city where the machines that matter run on it.' },
      { course: 'ai-ml-masterclass-complete-college', band: 'College and adult', note: 'Python to deep learning and generative AI for the TU/e or Fontys student, or the engineer who wants the model built by hand once.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Eindhoven today',
      h2: 'A municipality of 249,783 people that behaves like a region',
      intro: 'Statistics Netherlands counted 249,783 residents on 1 January 2026, 130,304 households, 33,172 children under fifteen and 36,371 people aged fifteen to twenty-five. That is the municipality. Brainport, the thing people mean when they say Eindhoven, spills across twenty-one municipalities, and the difference is where this page\'s project lives.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The employer next door', p: 'ASML reports more than 44,000 employees worldwide in 2025 across 143 nationalities and more than sixty locations, with its global headquarters and largest research and manufacturing site in Veldhoven. Veldhoven is a separate municipality. The biggest employer in Eindhoven, in every conversation, is not in Eindhoven on any map.' },
          { h3: 'The campus, the university, the hogeschool', p: 'The High Tech Campus held about 300 companies and institutions and more than 12,500 developers, researchers and entrepreneurs of an estimated 85 nationalities in 2024. Eindhoven University of Technology was founded on 23 June 1956 and sits on 121 hectares; Fontys teaches about 33,000 of its 44,000 students in the city.' },
          { h3: 'The Indian share, third in the country', p: 'Statistics Netherlands put Eindhoven at 35.4 residents of Indian origin per thousand on 1 January 2024, behind only Amstelveen and Uithoorn. On the 2026 population that is roughly 8,800 people, most of them families who arrived through the same companies named above.' }
        ] },
        { kind: 'spec', title: 'Founded on light, run on lithography', p: 'Philips began making light bulbs here in 1891, which is why the city is still called the Lichtstad, and the International School\'s secondary department began in 1974 as a Philips initiative for the families the company brought in. The pattern has not changed; only the machines have.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Schools by name',
      h2: 'Seven schools an Eindhoven child might be in, and where we pick up from each',
      intro: 'Twenty-five secondary establishments serve 17,578 pupils in the municipality (Statistics Netherlands). The left column is the school as it describes itself and as the register counts it; the right column is what fits beside it.',
      body: [
        { kind: 'align', rows: [
          { code: 'ISE', req: 'International School Eindhoven, Oirschotsedijk 14b, on the former De Constant Rebecque Kazerne. Primary since 1965, secondary since 1974, IB since 1982; MYP and Diploma Programme; about 1,400 pupils of some 60 nationalities across its departments, 731 of them in the secondary school in 2025-26.', ours: 'Blocks then Python placed by the MYP year; C++ or the IB Computer Science course for the Diploma years. Many ISE families are on fixed contracts, and a course that moves with the family to the next posting is the point.' },
          { code: 'Stedelijk', req: 'Stedelijk College Eindhoven, Henegouwenlaan 2: vmbo through vwo under one roof, 1,297 pupils from the municipality in 2025-26, the largest intake in the city.', ours: 'Placement by what the learner can do, not by the stream. A vmbo-t student and a vwo student have sat in the same Python group here and neither noticed.' },
          { code: 'Van Maerlant', req: 'Van Maerlantlyceum, Jacob van Maerlantlaan 11, havo and vwo, 744 Eindhoven pupils.', ours: 'Python before the profile choice at the end of year 3; data science in Python beside wiskunde A or B afterwards.' },
          { code: 'Lorentz Casimir', req: 'Lorentz Casimir Lyceum, Celebeslaan 10, havo and vwo, 690 Eindhoven pupils, named for two physicists the city likes to claim.', ours: 'C++ and problem solving for the teenager who already knows what a compiler is because a parent explained it at dinner.' },
          { code: 'Augustinianum', req: 'Augustinianum, Dirk Boutslaan 25, havo and vwo, 649 Eindhoven pupils.', ours: 'The same bovenbouw pairing: Python for the humanities-leaning student, C++ or DSA for the one headed to TU/e.' },
          { code: 'Frits Philips', req: 'Frits Philips lyceum-mavo, Avignonlaan 1, mavo through vwo, 1,170 Eindhoven pupils.', ours: 'For a mavo learner, app-making and web courses that produce a portfolio before the MBO intake asks for one; for the vwo stream, the standard ladder.' },
          { code: 'SintLucas', req: 'SintLucas, Torenallee 75 on Strijp-S, the creative vmbo and MBO in the old Philips factory quarter.', ours: 'Creative coding, game development and web work, because a SintLucas learner already wants to make things and needs the code to be one more material.' }
        ] },
        { kind: 'p', text: 'The Eckartcollege, Huygens Lyceum, Montessori College, Novalis College and the Parmant schools complete the list. The school name tells us the vocabulary; the free class tells us the level.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Eindhoven facts, each with the office that published it',
      intro: 'Six things this page rests on, and one pair of figures that does not reconcile, kept in rather than tidied away.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The city, counted', p: 'Statistics Netherlands, provisional, 1 January 2026: 249,783 residents; 130,304 households; 33,172 under fifteen; 36,371 aged fifteen to twenty-five; 65 primary establishments with 19,433 pupils; 25 secondary establishments with 17,578; twenty wijken and 116 buurten.' },
          { h3: 'The twenty wijken, which do not add up', p: 'The same statistics site lists the twenty wijken for the same date, from Aanschot at 21,082 down to De Laak at 5,661, and they sum to 257,354, which is 7,571 more than the municipal figure. Nothing found explains the gap. The page uses the municipal figure and says the parts do not reconcile rather than choosing quietly.' },
          { h3: 'BIC Noord, decided', p: 'The Metropoolregio Eindhoven information letter of 12 March 2026: the municipal council approved the development plan for the ASML campus at BIC Noord on Tuesday 10 March 2026, with room in the long run for 20,000 workplaces and tens of thousands more at suppliers; Best and Oirschot granted the road permits, the province the nitrogen permit; the decisions were open to appeal from 14 March to 24 April 2026. The local outlet FRITS reported on 17 March 2026 that the site is about 100 hectares, that preparation began symbolically in the week of 10 March, that construction starts in the second quarter of 2026 and that the first employees are expected in 2028.' },
          { h3: 'Beethoven, the money', p: 'The Metropoolregio\'s own FAQ: on Thursday 28 March 2024 the outgoing cabinet announced a package of 2.51 billion euros with which the state and the region would invest in the living and business climate of Brainport and in a national talent plan for the chip sector, as part of Project Beethoven, the plan to keep ASML developing in the Netherlands.' },
          { h3: 'The employers, by their own numbers', p: 'ASML: more than 44,000 employees in 2025, 143 nationalities, headquarters Veldhoven. High Tech Campus: about 300 companies and institutions, more than 12,500 people, an estimated 85 nationalities, as of 2024. Both figures come from the organisations themselves and are used as they publish them.' },
          { h3: 'The schools, by name', p: 'ISE at Oirschotsedijk 14b, IB since 1982, 731 secondary pupils in 2025-26, Dutch primary department moved to Jan Luikenstraat 49 in 2024. Stedelijk College Eindhoven 1,297 Eindhoven pupils, Frits Philips 1,170, Van Maerlantlyceum 744, Lorentz Casimir Lyceum 690, Augustinianum 649, all for 2025-26 from the schools register.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no association with ASML, the High Tech Campus, the Metropoolregio, the municipality, the International School or any school named above, and claims none. A page about coding classes in Eindhoven should know what Eindhoven is; that is the only reason they are here.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Twenty thousand workplaces: build the program that turns it into homes, and watch the answer move by a factor of six',
      intro: 'One published number, three ratios that nobody has published together, and a table every Brainport household argued about in March 2026 without writing down.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Take the one published number', p: 'Room for 20,000 workplaces at BIC Noord in the long run, from the regional information letter of 12 March 2026. That is the only hard figure in the chain. Everything downstream of it is an assumption, and the exercise is to make each one explicit.' },
          { h3: '2. Name the three ratios', p: 'To get from workplaces to homes inside Eindhoven you need: the share of those jobs filled by people who move to the region rather than existing residents; the number of employed people per new household; and the share of new households that settle inside the municipality rather than in Best, Veldhoven or Helmond. The learner writes each as a variable with a plausible low and high value.' },
          { h3: '3. Multiply, and read the spread', p: 'With the share of newcomers between 50 and 90 percent, workers per household between 1.2 and 1.8, and the in-city share between 30 and 70 percent, the homes needed inside Eindhoven run from about 1,700 to about 10,500. The middle assumptions give about 4,700. Region-wide the same chain gives roughly 5,600 to 15,000. Every input is plausible; the output spans a factor of six.' }
        ] },
        { kind: 'table', caption: 'From 20,000 workplaces to homes inside the municipality: the same arithmetic, six sets of plausible inputs', head: ['Share of jobs going to newcomers', 'Employed people per new household', 'Share settling inside Eindhoven', 'Homes implied'], rows: [
          ['50 percent', '1.8', '30 percent', 'about 1,700'],
          ['50 percent', '1.5', '50 percent', 'about 3,300'],
          ['70 percent', '1.5', '50 percent', 'about 4,700'],
          ['90 percent', '1.5', '50 percent', 'about 6,000'],
          ['70 percent', '1.2', '70 percent', 'about 8,200'],
          ['90 percent', '1.2', '70 percent', 'about 10,500']
        ] },
        { kind: 'callout', h3: 'Three plausible ratios multiplied together are not a plausible number', p: 'Each input on its own is defensible. Multiply three of them and the uncertainty compounds rather than averaging out, which is why two neighbours who both read the same letter can arrive at 2,000 homes and 10,000 homes and both be arguing honestly. The lesson is not which number is right. It is that a headline homes figure derived from a jobs figure should arrive with its three ratios attached, and that when it does not, the first question is what they were. The table was computed before this paragraph was written; the ranges are illustrative and labelled, and the 20,000 is the only published input.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any number that was derived from another number',
      intro: 'The same chain sits under every capacity plan, every hiring forecast and every server budget an Eindhoven engineer has ever signed off. Practised first on the campus next door.',
      body: [
        { kind: 'table', caption: 'When one figure is manufactured from another', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Separate', 'Mark which inputs are published and which are assumed', 'A guess wearing the confidence of the one real figure', 'An honest starting point'],
          ['Range', 'Give every assumption a low and a high, not a point', 'A single answer that hides its own spread', 'Two numbers instead of one'],
          ['Multiply', 'Propagate the ranges through the chain, do not average them', 'Compounding uncertainty mistaken for cancelling', 'The real width of the answer'],
          ['Attribute', 'Report the output with its ratios attached', 'Numbers that cannot be challenged because they cannot be traced', 'Something a council or a manager can argue with'],
          ['Locate', 'Say which boundary the answer is for: municipality or region', 'Eindhoven and Brainport used as the same word', 'A figure that matches the map']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Twenty toy workers arrive. Some already live in the town, some share a house with another worker, some move to the next town. The child sorts the figures three times with three rules and counts the houses each time. The answers differ, and the child explains why with the figures still in their hands.' },
          { h3: 'For teenagers', p: 'The chain in Python with each ratio as a range, a nested loop over the corners and the midpoints, and a printed table like the one above. Then the harder version: which single ratio moves the answer most, found by holding the other two fixed.' },
          { h3: 'For adults', p: 'The same program on a real capacity plan from work: users to servers, orders to staff, hires to desks. Most engineering estimates in this city are a chain of three ratios and one published number, and most are presented as a point. Bring one if it is yours to share.' }
        ] },
        { kind: 'p', text: 'The 20,000 workplaces, the 10 March 2026 council decision, the 2.51 billion euro package of 28 March 2024, the population and school counts, the ASML and High Tech Campus figures and the ISE history are all published by the organisations named in the sentences that carry them. The three ratios and every homes figure in the table are illustrative and labelled as such; the page derives nothing it presents as a fact.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From twenty toy workers to a capacity model that shows its ratios',
    intro: 'One free class finds the rung. A parent\'s job title is not an input.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'A number that depends on three others', p: 'Children sort the same twenty figures three ways and get three different house counts.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Ranges instead of points', p: 'Learners replace each guess with a low and a high in Python and see the answer widen.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'The chain, and the ratio that matters most', p: 'Teenagers propagate ranges through a chain and find the sensitive input.', courses: ['cpp-programming-masterclass-for-teens', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Capacity plans with the working shown', p: 'Adults rebuild a real estimate from work with its ratios attached.', courses: ['data-analysis-mastery-course-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Should a child in Eindhoven still learn to code when the parents\' employer is teaching machines to write it?',
    intro: 'Ask an assistant how many homes 20,000 workplaces means and it will give you a number in one line. It will not tell you the three ratios it silently chose.',
    p1: 'That is the whole of the problem with a fluent tool: the answer arrives without its assumptions, and the assumptions are where the argument was. An engineer in this city knows that a yield figure, a throughput figure or a capacity figure is only as good as the chain behind it, and would never accept one from a colleague without the chain. The habit of demanding it is not something a model supplies. It is something a person brings to the model.',
    p2: 'What the class trains, then, is exactly that habit, on a problem the child can hold: making every assumption a named variable, giving it a range, propagating the range and reading the width of the answer honestly. A twelve-year-old who has done that with the BIC Noord figure will do it with an AI\'s output at twenty-two without being asked, and will be the person in the room who says: show me the ratios. That person is not replaced by the tool. That person is who the tool is for.',
    closer: 'So for an Eindhoven parent the answer is a plain one: the syntax is cheaper than it was, the judgement is not, and the only way anyone has found to grow the judgement is to make the learner build the chain and then take it apart.',
    blogAnchor: 'is coding still worth learning now that AI writes it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for families who already drive the Randweg twice a day',
    intro: 'Between the school run to the Oirschotsedijk, the commute to Veldhoven or the campus and the evening call with a supplier in Taiwan, an Eindhoven week has no room for a fourth destination. A class that arrives over the connection does not ask for one.',
    cells: [
      { h3: 'No extra trip on the A2', p: 'The lesson happens at the kitchen table in Meerhoven, Woensel or Stratum, at a fixed time, and the only traffic it competes with is the household\'s own.' },
      { h3: 'English, with the Brainport words kept', p: 'Taught in English, which is the working language of most of the households this page is written for. Groep, havo, vwo, profiel and MYP are used as the child hears them at school.' },
      { h3: 'One full free lesson first', p: 'A real task, a level and a named course at the end of it. No card and no decision until the family has watched a lesson happen.' },
      { h3: 'Groups of five to ten, matched on level', p: 'Who joins a group depends on what the learner can do and wants next. Which company a parent works for, and in which municipality, is not a variable.' },
      { h3: 'Eight lessons a month, regio Zuid calendar', p: 'Two lessons a week at a recurring time. Noord-Brabant sits in regio Zuid for school holidays, so the summer weeks differ from Amsterdam\'s, and that is settled before the slot is fixed.' },
      { h3: 'The clock, stated plainly', p: 'An Eindhoven evening is late in India: seven o\'clock here is half past ten or half past eleven there depending on the season. Late afternoon, early evening and weekend slots work for both sides and are confirmed on the free class.' }
    ],
    spec: { title: 'A posting that moves does not end the course', p: 'Brainport families are moved: to Veldhoven, to Wilton, to Linkou, back to Bengaluru. A course that lives on a laptop and a fixed time in the family\'s own calendar goes with them, and more than one learner has finished a Python course from a different continent than the one they started it on.' }
  },

  fees: {
    h2: 'One free class, then USD 100 or USD 150 a month, published here',
    intro: 'The fee is stated before anybody is asked for a phone number, because an engineer would want it that way round.',
    first: 'A full lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner and one teacher.',
    closer: 'The figure is in US dollars because there is one published international rate and no euro list; there is no Eindhoven supplement and no enrolment fee. The free class settles the course and the slot first and payment is arranged afterwards over WhatsApp. Pauses, plan changes and missed lessons are on the pricing page.'
  },

  reviewsH2: 'What families and learners say',

  book: {
    h2: 'Tell us the learner\'s level and, if you like, the number you were arguing about',
    intro: 'The first task might be twenty toy workers and three rules, a Python chain with three ranges, or a capacity estimate from work that arrived as a single confident figure.',
    success: 'Thank you. Your Eindhoven class request has been sent.'
  },

  faq: {
    h2: 'Eindhoven coding class questions',
    intro: 'The city, the campus next door, the schools, the teaching and the terms.',
    items: [
      { q: 'How many homes does the ASML campus at BIC Noord mean for Eindhoven?', a: 'Nobody can say from the published figure, and that is the project on this page. The regional letter of 12 March 2026 gives room for 20,000 workplaces in the long run. Turning that into homes needs three ratios that have not been published together, and across plausible values the answer inside the municipality runs from about 1,700 to about 10,500. The class teaches a learner to show the ratios rather than pick a number.' },
      { q: 'Our child is at the International School Eindhoven. Does the ladder fit the MYP and the Diploma Programme?', a: 'Yes. ISE at Oirschotsedijk 14b has run the IB since 1982 and had 731 secondary pupils in 2025-26. We place by the MYP year, and a Diploma student taking Computer Science uses the IB course directly. Because many ISE families are on fixed contracts, the course is built to move with the family to the next posting.' },
      { q: 'Our child is at a Dutch school here. Which schools do you know?', a: 'Stedelijk College Eindhoven on the Henegouwenlaan, Frits Philips, Van Maerlantlyceum, Lorentz Casimir Lyceum, Augustinianum, Eckartcollege, Huygens Lyceum, SintLucas on Strijp-S and the Parmant schools, with their streams and 2025-26 intake from the schools register. The school name tells us the vocabulary and roughly the stage; the free class tells us the level.' },
      { q: 'Why C++ for teenagers in Eindhoven when everyone else teaches Python?', a: 'We teach both, and most teenagers start with Python. But this is the one Dutch city where a fourteen-year-old may genuinely want C++, because the systems the parents work on run on it, and a C++ course from fundamentals through the STL to a real game is on the list for exactly that learner.' },
      { q: 'Is the teaching in English or in Dutch?', a: 'English, which is the working language of the households this page is written for and of the High Tech Campus with its 85 nationalities. Dutch school words are kept as the school uses them. We do not teach in Dutch and do not claim to.' },
      { q: 'What time are classes for a family in Eindhoven?', a: 'The Dutch clock moves twice a year and the Indian one does not, so an Eindhoven evening is three and a half or four and a half hours earlier than the teacher\'s. Late afternoon, early evening and weekend slots suit both sides. The recurring time is agreed on the free class and fixed before any payment.' },
      { q: 'What happens in the free Eindhoven class?', a: 'We find what the learner can do and set one task there. A child sorts twenty toy workers three ways and counts houses. A teenager writes the three-ratio chain in Python and finds the ratio that moves the answer most. An adult brings a capacity figure from work and takes it apart. The hour ends with a named course, a level, a slot and the fee in USD, and costs nothing.' },
      { q: 'Does Modern Age Coders have a centre in Eindhoven or on the High Tech Campus?', a: 'No. No premises are claimed in Eindhoven, in Veldhoven or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The phone number on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Eindhoven coding classes cost?', a: 'The first class is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month for one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How large is a group for Eindhoven learners?', a: 'Five to ten learners, matched on level, pace and goal rather than on age, school or a parent\'s employer. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'The country page, the two Amsterdam pages, and the page for building AI',
    html: 'The <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a> carries the national curriculum picture and the full course list. <a class="cg-inline-link" href="/coding-classes-in-amsterdam">Coding classes in Amsterdam</a> and <a class="cg-inline-link" href="/coding-classes-in-amstelveen">coding classes in Amstelveen</a> cover the capital and the municipality with the highest Indian-origin share in the country, and <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> is for the learner who wants to build models. Below this page sit <a class="cg-inline-link" href="/coding-classes-in-eindhoven-centrum">Eindhoven Centrum</a>, <a class="cg-inline-link" href="/coding-classes-in-stratum">Stratum</a>, <a class="cg-inline-link" href="/coding-classes-in-gestel">Gestel</a>, <a class="cg-inline-link" href="/coding-classes-in-strijp">Strijp</a>, <a class="cg-inline-link" href="/coding-classes-in-woensel-zuid">Woensel-Zuid</a> and <a class="cg-inline-link" href="/coding-classes-in-woensel-noord">Woensel-Noord</a>, six of seven stadsdeel pages, with Tongelre to follow, and pages for the rest of Noord-Brabant after them.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-amsterdam', label: 'Amsterdam' },
    { href: '/ai-and-machine-learning-classes-in-netherlands', label: 'AI and ML in the Netherlands' }
  ],

  personalityCss: `
.cg-root.cg-ehv .cg-hero-grid { grid-template-columns: 1.25fr 0.95fr; }
.cg-root.cg-ehv .cg-capsule { border-left: 0; border-top: 3px solid var(--cg-accent); padding-top: 1.25rem; }
.cg-root.cg-ehv .cg-section-head h2 { font-weight: 500; }
.cg-root.cg-ehv .cg-eyebrow { font-size: 0.8rem; letter-spacing: 0.14em; }
.cg-root.cg-ehv .cg-picks { gap: clamp(1.25rem, 2.5vw, 2rem); }
.cg-root.cg-ehv .cg-grid-3 { gap: clamp(1.25rem, 3vw, 2rem) clamp(1.5rem, 4vw, 3rem); }
.cg-root.cg-ehv .cg-ladder-col { border-top: 0; border-left: 3px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-ehv .cg-table th { letter-spacing: 0.12em; }
.cg-root.cg-ehv .cg-align-req { font-variant-numeric: tabular-nums; }
`,

  dossier: {
    curriculumAuthority: 'Eindhoven, Noord-Brabant: 25 secondary establishments with 17,578 pupils and 65 primary with 19,433 (CBS 1 January 2026). Named: International School Eindhoven (Oirschotsedijk 14b, De Constant Rebecque Kazerne; primary 1965, secondary 1974 as a Philips initiative, IB since 1982, MYP and DP, 731 secondary pupils 2025-26, Dutch primary at Jan Luikenstraat 49 since 2024); Stedelijk College Eindhoven (Henegouwenlaan 2, vmbo to vwo, 1,297); Frits Philips lyceum-mavo (Avignonlaan 1, 1,170); Van Maerlantlyceum (Jacob van Maerlantlaan 11, havo/vwo, 744); Lorentz Casimir Lyceum (Celebeslaan 10, 690); Augustinianum (Dirk Boutslaan 25, 649); SintLucas (Torenallee 75, Strijp-S). Regio Zuid holidays. The hub owns the national digital-literacy curriculum; this page owns Brainport and its schools.',
    localProject: 'Compounding uncertainty in a chain of ratios (a Fermi chain presented as a point). The one published figure is 20,000 workplaces at BIC Noord (Metropoolregio Eindhoven letter, 12 March 2026; council approval 10 March 2026). Homes inside Eindhoven = 20,000 x share of jobs going to newcomers / employed people per new household x share settling inside the municipality. With inputs 50 to 90 percent, 1.2 to 1.8 and 30 to 70 percent the output runs from about 1,700 to about 10,500 (middle 4,700); region-wide about 5,600 to 15,000. Three plausible ratios multiplied together span a factor of six. Distinct from the ratio-of-ratios trap (Al Mouj), from a denominator nobody published (Bidbid), from a bound treated as a value (Hong Kong) and from the unit-of-analysis trap (Haima): the flaw here is presenting the product of unstated ranges as one number. Computed before writing; ranges labelled illustrative.',
    requiredMentions: [
      'Oirschotsedijk 14b',
      'De Constant Rebecque Kazerne',
      '20,000 workplaces',
      '10 March 2026',
      'High Tech Campus',
      '35.4 residents of Indian origin per thousand',
      'Henegouwenlaan 2',
      'Van Maerlantlyceum',
      'Lorentz Casimir Lyceum',
      'Augustinianum',
      'Torenallee 75',
      '23 June 1956',
      '143 nationalities'
    ],
    sources: [
      { claim: 'Eindhoven 249,783 residents on 1 January 2026 (CBS provisional); 130,304 households; 33,172 under 15; 36,371 aged 15 to 25; 65 primary establishments with 19,433 pupils; 25 secondary with 17,578; 20 wijken, 116 buurten.', url: 'https://allecijfers.nl/gemeente/eindhoven/' },
      { claim: 'Twenty wijken on 1 January 2026 from Aanschot 21,082 to De Laak 5,661, summing to 257,354 (does not reconcile with the municipal 249,783; both kept).', url: 'https://allecijfers.nl/ranglijst/grootste-en-kleinste-wijken-in-inwoners-in-de-gemeente-eindhoven/' },
      { claim: 'Eindhoven 35.4 residents of Indian origin per thousand on 1 January 2024, third after Amstelveen (68.3) and Uithoorn (49.6).', url: 'https://www.cbs.nl/en-gb/news/2025/10/migrants-from-india-are-staying-longer-in-the-netherlands' },
      { claim: 'Information letter 12 March 2026: Eindhoven council approved the TAM development plan for the ASML campus at BIC Noord on Tuesday 10 March 2026; room for 20,000 workplaces long term plus tens of thousands at suppliers; Best and Oirschot road permits; Noord-Brabant Natura 2000 permit; decisions open to appeal 14 March to 24 April 2026.', url: 'https://metropoolregioeindhoven.nl/actueel/ons-nieuws/informatiebrief-over-besluitvorming-ruimtelijke-procedures-bic-noord-asml-campus' },
      { claim: 'FRITS, 17 March 2026: symbolic start of site preparation in the week of 10 March 2026; about 100 hectares; around 20,000 workplaces; construction from the second quarter of 2026; first employees 2028; ASML approached Eindhoven in September 2023.', url: 'https://frits.nl/eindhoven-begint-met-bouwrijp-maken-terrein-voor-asml-campus/' },
      { claim: 'Project Beethoven FAQ: on Thursday 28 March 2024 the outgoing cabinet announced a 2.51 billion euro package for the living and business climate of Brainport Eindhoven and a national talent plan for the chip sector, to enable ASML\'s continued development in the Netherlands.', url: 'https://static.metropoolregioeindhoven.nl/assets/Bestanden/FAQ-Project-Beethoven.pdf' },
      { claim: 'ASML: more than 44,000 employees (FTE) in 2025, 143 nationalities, more than 60 locations, global headquarters and largest R&D and manufacturing site in Veldhoven.', url: 'https://www.asml.com/en/company/about-asml' },
      { claim: 'High Tech Campus Eindhoven: about 300 companies and institutions, more than 12,500 product developers, researchers and entrepreneurs, an estimated 85 nationalities (2024).', url: 'https://en.wikipedia.org/wiki/High_Tech_Campus_Eindhoven' },
      { claim: 'International School Eindhoven: Oirschotsedijk 14b on the former De Constant Rebecque Kazerne; primary founded 1965; secondary 1974 as a Philips initiative; IB since 1982; MYP and DP; Dutch primary relocated 2024.', url: 'https://en.wikipedia.org/wiki/International_School_Eindhoven' },
      { claim: 'ISE: about 1,400 students and 200 teachers of about 60 nationalities speaking more than 40 languages; 731 secondary pupils in 2025-26; Dutch bilingual department at Jan Luikenstraat 49.', url: 'https://scholenopdekaart.nl/middelbare-scholen/eindhoven/23754/international-school-eindhoven-secondary-department/' },
      { claim: 'Eindhoven University of Technology founded 23 June 1956 as Technische Hogeschool Eindhoven; campus 121 hectares.', url: 'https://en.wikipedia.org/wiki/Eindhoven_University_of_Technology' },
      { claim: 'Fontys: more than 44,000 students, 33,000 of them in Eindhoven.', url: 'https://www.fontys.nl/en/Study-at-Fontys/Practical-information/Our-campuses/Eindhoven.htm' },
      { claim: 'Secondary schools in Eindhoven with 2025-26 pupils from the municipality: Stedelijk College Eindhoven (Henegouwenlaan 2) 1,297; Frits Philips (Avignonlaan 1) 1,170; Eckartcollege 794; Van Maerlantlyceum (Jacob van Maerlantlaan 11) 744; Lorentz Casimir Lyceum (Celebeslaan 10-20) 690; Huygens Lyceum 669; Augustinianum (Dirk Boutslaan 25) 649; ISE 567; SintLucas (Torenallee 75).', url: 'https://allecijfers.nl/middelbare-scholen-overzicht/eindhoven/' },
      { claim: 'Philips began in Eindhoven in 1891; the city is nicknamed the Lichtstad; the Dommel runs through it.', url: 'https://nl.wikipedia.org/wiki/Eindhoven' }
    ],
    rejectedClaims: [
      '60,000 homes needed before 2030 of which 17,000 from Project Beethoven. Found only in search summaries of municipal press releases that returned 403 when fetched. Not used. (The 100 hectares, Q2 2026 start and 2028 first employees were read directly in the FRITS article of 17 March 2026 and are attributed to it.)',
      'A mapping of the twenty CBS wijken onto the seven stadsdelen. The summary returned for the Wikipedia article was visibly misaligned (it placed Aanschot in Centrum), so no mapping is asserted; the district pages will research it individually.',
      'ASML employee numbers in Veldhoven specifically. Not published on the page fetched; only the worldwide figure is used.',
      'TU/e current student numbers. The figure found (about 12,900) is from 2020 and the university\'s facts page returned 404; the page uses the founding date and campus size only.',
      'Any claim that informatica is offered at a named Eindhoven school. Not verified; the page advises asking.',
      'Anything the Netherlands hub owns: the nine SLO core objectives, the March 2024 finalisation as a spine, the groep 8 streaming advice as an argument, the CET/CEST offset paragraph.'
    ]
  }
};
