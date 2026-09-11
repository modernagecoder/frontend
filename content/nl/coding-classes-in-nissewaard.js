'use strict';
// Nissewaard: Spijkenisse and Bernisse, merged on 1 January 2015, on
// Voorne-Putten. 89,112 residents.
// Spine (modest, per the Phase 5 method): Spijkenisse was built in a burst,
// groeigemeente in 1958 and groeikern in 1977, with about 68,000 residents
// in 26,400 dwellings by around 1990. A place filled in one burst ages
// together, and its averages then move because the mix of households
// changes, not because any household changes. That is the composition
// effect, and a machine learning model meets it as dataset shift.

module.exports = {
  slug: 'coding-classes-in-nissewaard',
  code: 'nsw',
  accent: '#005126',
  accentRationale: 'Nissewaard: a deep polder green placed by the solver more than thirty units from every page it links to, the Rotterdam teal and the Zuid-Holland ochre among them, with an unlinked city as its nearest neighbour',
  pageType: 'city',
  place: {
    name: 'Nissewaard',
    eyebrow: 'Nissewaard, Zuid-Holland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Zuid-Holland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Nissewaard, Netherlands',
  title: 'Coding Classes in Nissewaard | Modern Age Coders',
  description: 'Live online coding, Python, AI and app classes in Nissewaard for ages 6 to 67, in Spijkenisse, Heenvliet, Geervliet, Zuidland or Simonshaven. First lesson free.',
  ogDescription: 'Live online coding, Python, AI and mathematics for Spijkenisse and the Bernisse villages, on a page about averages that move when the mix moves.',
  twitterDescription: 'Classes in Nissewaard for ages 6 to 67, live online, and the first lesson is free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Nissewaard Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Spijkenisse and the villages of Nissewaard, taught in English.'
  },

  h1: 'Coding classes in Nissewaard, a town built for young families that grew up together',
  capsuleQ: 'What are the best coding classes in Nissewaard?',
  capsule: 'Coding classes in Nissewaard serve 89,112 people (statistics office, 1 January 2026) in a municipality formed on 1 January 2015 from Spijkenisse and Bernisse, on the island of Voorne-Putten. Spijkenisse became a groeigemeente in 1958 and a groeikern in 1977, and by around 1990 it had 26,400 dwellings housing 68,000 people, almost twenty new wijken and a metro connection with Rotterdam. A town filled in one burst ages together, so its averages can shift simply because the mix of households shifts, while no single household has changed at all. Statisticians call it the composition effect, and machine learning meets it as dataset shift. Modern Age Coders teaches live online in English, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Most towns grow a little every year, and their residents come in all ages at once. Spijkenisse grew in a hurry, from its designation as a groeigemeente in 1958 through the raised targets of a groeikern after 1977, and by around 1990 it had almost twenty new wijken. Places built like that fill with people at the same stage of life, and then all of them move on to the next stage together. The consequence is easy to miss in the figures. An average over the whole town, of household size, of income, of anything, can rise or fall because the town now contains more of one kind of household and fewer of another, even when every kind is exactly as it was. Anyone who builds a model, a dashboard or a school report will meet the same effect, and it is far easier to spot once someone has shown it on a town.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Nissewaard.',

  picks: {
    eyebrow: 'Course picks for Nissewaard',
    h2: 'Four courses for Spijkenisse and the Bernisse villages',
    intro: 'A child in Zuidland who wants to build a game, a teenager in Spijkenisse who takes the metro and wonders how an app predicts the next train, a student comparing averages that refuse to behave, and an adult in Heenvliet whose monthly figures moved when nothing at work did. Each of them can start with a complete lesson that costs nothing.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python where a child builds a class average from two groups and watches it move when only the group sizes change.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Real data in Python, with every overall average split into its groups before anyone draws a conclusion from it.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Models and metrics monitored group by group, so that a change in the mix of inputs is never mistaken for a change in quality.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Dashboards that show the mix beside the average, so a moving figure can be explained before it is acted on.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Nissewaard today',
      h2: 'Spijkenisse, Bernisse, and a name chosen in 2013',
      intro: 'The municipality was formed on 1 January 2015 by merging Spijkenisse and Bernisse, and in July 2013 the two councils had chosen the name Nissewaard. The statistics office counted 89,112 residents on 1 January 2026, on 7,331 hectares of land within 8,379, a published density of 1,205, in seven woonplaatsen, 24 wijken and 90 buurten. The office has recalculated the years before the merger to the present boundaries, and on those boundaries the count was 83,122 in 1995.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Spijkenisse before the growth', p: 'The medieval Dorpskerk is the oldest building in Spijkenisse. Only after the Spijkenisserbrug was built in 1903, the encyclopaedia says, did more activity and more variety arrive in the population. Since the first bridge, several links have been made from Voorne-Putten to the Rotterdam port area to the north, the Hartelbrug near Spijkenisse among them.' },
          { h3: 'The growth itself', p: 'In 1958 Spijkenisse officially became a groeigemeente, and in 1977 it accepted the status of groeikern with a raised target. Around 1990, after the period of rapid growth, it had 26,400 dwellings housing 68,000 residents, almost twenty new wijken, a metro link to Rotterdam with three metro stations, a new town centre and a hospital.' },
          { h3: 'After the growth', p: 'A large library and cultural centre, the Boekenberg, was built, along with a new theatre, de Stoep. The encyclopaedia gives Spijkenisse 72,830 residents on 1 January 2023. The Bernisse side of the municipality holds villages such as Heenvliet, Geervliet, Zuidland, Abbenbroek, Simonshaven and Hekelingen.' }
        ] },
        { kind: 'table', mt: true, caption: 'The municipality in the statistics office row', head: ['Measure', 'Figure', 'Year'], rows: [
          ['Residents', '89,112; 88,341; 84,771; 83,122', '2026, 2025, 2013, 1995'],
          ['Households, one-person, with children', '40,096; 13,993; 14,324', '2025'],
          ['Average household', '2.18 people', '2025'],
          ['Dwellings, owner-occupied, rented', '40,514; 23,903 (59 percent); 16,611', '2025'],
          ['Under fifteen, sixty-five or over', '14,107; 19,685', '2026'],
          ['Income per resident, per income recipient', '34,000 and 41,700 euro', '2024']
        ] }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'When the mix moves',
      h2: 'An average that changes while nothing inside it does',
      intro: 'The figures in this table are invented to show the mechanism cleanly. They are not Nissewaard data, and the page does not claim that Nissewaard households followed this path.',
      body: [
        { kind: 'table', caption: 'An illustration: the same two kinds of household, mixed in different proportions', head: ['Moment', 'Family households, averaging 3.5 people', 'Older households, averaging 1.6 people', 'Average over the whole town'], rows: [
          ['Soon after a growth burst', '70 percent of households', '30 percent', '0.7 times 3.5 plus 0.3 times 1.6, which is 2.93'],
          ['A generation later', '40 percent of households', '60 percent', '0.4 times 3.5 plus 0.6 times 1.6, which is 2.36'],
          ['What changed', 'nothing: still 3.5', 'nothing: still 1.6', 'down by 0.57, entirely from the mix']
        ] },
        { kind: 'p', text: 'In the illustration, no household of either kind became smaller. Every family still averages 3.5 people and every older household 1.6. Yet the town-wide average fell by more than half a person, because the town now holds more of the smaller kind. Read without the breakdown, the falling average invites a story about families shrinking. Read with it, the story is about who lives in the town. A place like Spijkenisse, where almost twenty wijken were filled within a few decades, is exactly where this effect is strongest, because many households there reached the same stage of life at about the same time. The honest question to ask of any moving average is therefore twofold: did the groups change, or did the proportions?' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Nissewaard in figures, and the arithmetic this page does',
      intro: 'The statistics office row with each year shown, then schools and origin, then the history from the encyclopaedia, and last the things the page deliberately leaves alone.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'People', p: '89,112 residents in 2026 and 88,341 in 2025; 43,340 men and 45,001 women in 2025. Ages in 2026: 14,107 under fifteen, 9,564 from fifteen to twenty-five, 23,052 from twenty-five to forty-five, 22,704 from forty-five to sixty-five and 19,685 aged sixty-five or more, which together make the 2026 total.' },
          { h3: 'Homes and money', p: '40,514 dwellings in 2025, of which 23,903 owner-occupied and 16,611 rented, summing to the total; an estimated average value of 308,000 euro. Income of 34,000 euro per resident and 41,700 per income recipient in 2024, with 2.7 percent of residents in poverty.' },
          { h3: 'Origin', p: 'In 2025, 61,037 residents were of Dutch origin, 7,570 of European and 19,734 of non-European origin, adding to the 2025 total of 88,341; 74,009 were born in the Netherlands.' },
          { h3: 'Schools', p: '31 primary establishments teach 7,532 pupils, about 243 each, and 9 secondary establishments teach 4,696, about 522 each (2026). The office also records 2,884 MBO, 1,560 higher professional and 450 university students at institutions in the municipality.' },
          { h3: 'The arithmetic', p: '89,112 minus 83,122 is 5,990, a rise of 7.2 percent since 1995 on the same boundaries. 7,532 over 31 is about 243 and 4,696 over 9 about 522. The illustration table uses invented shares and sizes and is labelled as such. The age groups, the origin groups and the two tenure groups were added only to check that each is complete.' },
          { h3: 'Left alone on purpose', p: 'The page does not compare the 1990 figure of 68,000 residents in 26,400 Spijkenisse dwellings with the present 2.18 people per household, since one is a single town in dwellings and the other a merged municipality in households. It does not claim that household size in Nissewaard has fallen, or by how much. And it does not combine the encyclopaedia count of 72,830 for Spijkenisse in 2023 with the municipal row.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with the municipality of Nissewaard, the Boekenberg, the metro operator or any school on Voorne-Putten, and nothing here suggests one. The municipal figures are the statistics office row for Nissewaard at the years stated, with the years before 2015 as the office has recalculated them. The merger date, the name decision and the villages come from the encyclopaedia entry for Nissewaard, and the growth history, the bridges, the library and the Dorpskerk from the entry for Spijkenisse.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Split the average before you explain it',
      intro: 'When an overall figure moves, there are always two candidates: the groups inside it changed, or the share of each group changed. Only a breakdown can tell them apart.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Name the groups', p: 'Decide which groups could plausibly differ: families and older households, new users and old ones, easy questions and hard ones, day shifts and night shifts. Choose them before looking at the change, not after.' },
          { h3: '2. Compute both parts', p: 'For each period, record every group\'s own average and its share of the whole. The overall change then splits into a part from the groups themselves and a part from the shifting shares, and each can be measured.' },
          { h3: '3. Report the right one', p: 'If the groups held steady and only the shares moved, say so plainly: the population changed, not the behaviour. If the groups moved too, say how much of the change belongs to each.' }
        ] },
        { kind: 'table', caption: 'The same effect in places people rarely expect it', head: ['Where', 'The overall figure', 'What actually moved', 'The mistaken reading'], rows: [
          ['A machine learning model', 'accuracy falls from one month to the next', 'more inputs now come from a harder group', 'the model has got worse'],
          ['An app\'s average rating', 'the average drops after a launch abroad', 'a new market that rates everything lower', 'the app has got worse'],
          ['A school\'s average score', 'results fall in one year', 'a larger share of pupils in their first year at the school', 'teaching has got worse'],
          ['Average salary at a company', 'the average falls', 'many new junior hires joined', 'people are being paid less'],
          ['Average household size in a growth town', 'it falls over a generation', 'more of the town is older households', 'families have shrunk']
        ] },
        { kind: 'callout', h3: 'Why a model can lose accuracy without getting worse', p: 'Machine learning systems are usually judged by one overall number, and that number is an average over whatever inputs arrived. Suppose a model reads handwriting correctly 98 percent of the time for neat writers and 85 percent of the time for hurried ones, and suppose the proportion of hurried writers rises from a fifth to a half because the product is now used on phones. The overall accuracy falls from about 95 to about 92 percent, and a dashboard shows a model in decline, although it performs exactly as before on every kind of writing. Engineers call this dataset shift, and the remedy is the same as for a growth town: keep the breakdown, track each group separately, and compare like with like before changing anything. Retraining a model that has not got worse can make it worse for the group it used to serve well. Nissewaard offers the shape of the problem without any need for invented drama: a town filled in one burst, whose averages will keep moving for decades simply because its people move through life together.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any average that is going to be compared',
      intro: 'For dashboards, model monitoring, school results, surveys and census figures. Practised on the town that filled almost twenty wijken within a generation.',
      body: [
        { kind: 'table', caption: 'Keeping the mix visible', head: ['Habit', 'What to do', 'What it catches', 'What it gives'], rows: [
          ['Store the groups', 'Keep each record\'s group, not only the overall total', 'Averages that cannot be split later', 'A breakdown on demand'],
          ['Show shares with averages', 'Put each group\'s share of the whole next to the overall figure', 'Mix changes hidden inside a single number', 'A visible composition'],
          ['Decompose every change', 'Split any change into a within-group part and a mix part', 'Behaviour blamed for a change in population', 'The right explanation'],
          ['Hold the mix fixed', 'Recompute the new period with the old shares to see what would have happened', 'Comparisons of unlike populations', 'A like-for-like figure'],
          ['Monitor by group', 'Track model or process quality per group, not only overall', 'Retraining a model that has not got worse', 'Changes aimed where they are needed']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Two jars of sweets with different average weights. The child mixes them in different proportions, weighs the average each time, and discovers that the average moves even though no sweet has changed.' },
          { h3: 'For teenagers', p: 'A Python notebook with two groups of made-up exam scores. The teenager changes only the group sizes, watches the overall mean move, and then writes the function that splits the change into its two parts.' },
          { h3: 'For adults', p: 'A real figure from work that went up or down, rebuilt with a breakdown by customer type, region or product. Adults often find that a worrying trend was a change of mix that nobody had looked for.' }
        ] },
        { kind: 'p', text: 'This section uses only the published history of Spijkenisse as a growth town and labelled, invented numbers for the illustration and the handwriting example. It makes no claim about the actual household sizes, ages or incomes of any group in Nissewaard over time.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From mixing two jars to monitoring a model group by group',
    intro: 'Where each learner begins is decided during the free lesson, by watching them tackle a real task. Neither their village nor their birthday settles it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Two jars', p: 'Children see an average move when only the mixture changes.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Group sizes', p: 'Learners compute a class average from two groups of different sizes.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Within and between', p: 'Teenagers split a change in a mean into its two parts in Python.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Model monitoring', p: 'Adults track a model or a process by group instead of overall.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI model can lose accuracy without getting any worse. Why should a teenager in Spijkenisse learn how that happens?',
    intro: 'Because the town itself shows how an average moves when the people inside it change places.',
    p1: 'Every deployed model is watched through a handful of overall numbers: accuracy, error rate, customer satisfaction. Each of them is an average over whatever arrived that week, and what arrives keeps changing. New users come from a different country, a product moves from laptops to phones, a season brings different questions. When the overall number drops, the natural response is to retrain the model, and an AI assistant asked why accuracy fell will usually offer reasons about the model. It rarely asks whether the model changed at all, or only the mix of what it was given.',
    p2: 'A learner who has mixed two groups in different proportions and watched the overall average move while each group stood still recognises the pattern at once in a monitoring chart. The habit of splitting the number before explaining it, of asking whether the groups changed or only their shares, is a small piece of arithmetic and a large piece of judgement. It decides whether an engineer fixes a real fault or damages a working system. That judgement belongs to people.',
    closer: 'The case for a child in Nissewaard learning to code in 2026 is therefore not the metro to Rotterdam. It is that someone who asks what the mix was before explaining a moving average will be needed wherever AI systems are judged by a single number.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'On Voorne-Putten, the lesson comes to the house',
    intro: 'Nissewaard spans Spijkenisse and a string of Bernisse villages, and while the metro serves the town, a lesson that needs no journey serves them all equally.',
    cells: [
      { h3: 'Village or town, same seat', p: 'A learner in Abbenbroek, Simonshaven or Hekelingen joins from home exactly as one in Spijkenisse does. There is no metro to catch and no drive across the island after the evening meal.' },
      { h3: 'Groep and havo in Dutch', p: 'The school vocabulary a Nissewaard family already uses, groep, brugklas, vmbo, havo, vwo and profielkeuze, stays in Dutch during lessons, while the teaching itself is in English.' },
      { h3: 'An honest first hour', p: 'The free lesson is a real one. The teacher sets a genuine task, watches how the learner approaches it, and afterwards recommends a level, a course and a weekly time, with no card requested and no pressure to decide.' },
      { h3: 'Well-matched classmates', p: 'A group is five to ten learners who are at the same stage. Nissewaard has 14,107 residents under fifteen, but matching five of them on subject, level and hour is unlikely, so a group may include learners from several countries.' },
      { h3: 'Regio Midden holidays', p: 'Two sessions a week, roughly eight each month, at one fixed hour. Zuid-Holland schools take regio Midden holidays, and lessons pause for the same weeks.' },
      { h3: 'Time zones that suit families', p: 'With India three and a half hours ahead in summer and four and a half in winter, the usual slots fall after school, in the early evening and at weekends, and they hold steady through the year.' }
    ],
    spec: { title: 'Forty schools, and a group from further away', p: 'Nissewaard has 31 primary establishments teaching 7,532 pupils and 9 secondary establishments teaching 4,696. That is plenty of pupils, but a class that works needs five of them matched on subject, stage and hour, and such a match is much easier to make across the whole age range from 6 to 67 and many countries than within one island.' }
  },

  fees: {
    h2: 'Nissewaard fees, stated once and in full',
    intro: 'The three prices below are the whole picture.',
    first: 'A real lesson on a real task, ending in a recommended level and course.',
    group: 'Monthly, usually eight lessons, in a group of five to ten learners at the same level.',
    private: 'Monthly, usually eight lessons, with one teacher and one learner.',
    closer: 'The fee is in dollars and is the same for every country, so there is no euro price to weigh against it, and a family in Zuidland pays what a family in Spijkenisse pays. Payment begins only once the free lesson has fixed a course and an hour, and it is set up over WhatsApp. The pricing page covers breaks, a change of format and lessons that are missed.'
  },

  reviewsH2: 'Six Google reviews, quoted in full',

  book: {
    h2: 'Tell us about the learner',
    intro: 'The first task might be mixing two jars of sweets, averaging two groups of different sizes, or splitting a change in a mean into its two parts.',
    success: 'Thank you. Your Nissewaard class request has been sent.'
  },

  faq: {
    h2: 'Nissewaard coding class questions',
    intro: 'The municipality, its growth, the villages and the lessons.',
    items: [
      { q: 'What does Nissewaard include?', a: 'The town of Spijkenisse and the villages of the former municipality of Bernisse, such as Heenvliet, Geervliet, Zuidland, Abbenbroek, Simonshaven and Hekelingen. The two municipalities merged on 1 January 2015. The statistics office counts seven woonplaatsen, 24 wijken and 90 buurten.' },
      { q: 'Where does the name Nissewaard come from?', a: 'The encyclopaedia records that the councils of Spijkenisse and Bernisse decided on the new name Nissewaard in July 2013, ahead of the merger on 1 January 2015. It does not explain the origin of the name, and neither does this page.' },
      { q: 'How many people live in Nissewaard?', a: 'The statistics office counted 89,112 residents on 1 January 2026, in 40,096 households in 2025. On the present boundaries the count was 83,122 in 1995, a rise of 5,990 or 7.2 percent.' },
      { q: 'Why did Spijkenisse grow so fast?', a: 'It became an official groeigemeente in 1958 and accepted groeikern status with a raised target in 1977. According to the encyclopaedia, by around 1990 it had 26,400 dwellings housing 68,000 residents, almost twenty new wijken, a metro connection with Rotterdam with three stations, a new town centre and a hospital.' },
      { q: 'What is the Boekenberg?', a: 'A large library and cultural centre in Spijkenisse, built together with a new theatre, de Stoep, as the encyclopaedia entry for Spijkenisse describes.' },
      { q: 'How many schools are there in Nissewaard?', a: 'The statistics office counts 31 primary establishments teaching 7,532 pupils and 9 secondary establishments teaching 4,696, with 2,884 MBO, 1,560 higher professional and 450 university students at institutions in the municipality. This page rates no school.' },
      { q: 'What language are lessons in, and at what time?', a: 'English, with Dutch school terms such as groep, havo and vwo kept in Dutch. India is three and a half hours ahead in summer and four and a half in winter, so after-school, early-evening and weekend times all work. The weekly hour is set at the free lesson and holidays follow regio Midden.' },
      { q: 'Is there a Modern Age Coders classroom in Nissewaard?', a: 'No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Nissewaard coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Zuid-Holland and beyond',
    h2: 'Up the metro line to Rotterdam, and out to the province',
    html: 'The metro that Spijkenisse gained in its growth years runs to the city covered by <a class="cg-inline-link" href="/coding-classes-in-rotterdam">coding classes in Rotterdam</a>, which hands on to its own district pages. Further up the rivers, <a class="cg-inline-link" href="/coding-classes-in-dordrecht">Dordrecht</a> has a page too, and every city in the province with one is gathered on <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>. For a learner heading straight into machine learning there is the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and the full series is on the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Write to us on WhatsApp'
  },

  footerHeading: 'Nissewaard, Zuid-Holland and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-rotterdam', label: 'Rotterdam' },
    { href: '/coding-classes-in-zuid-holland', label: 'Zuid-Holland' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-nsw .cg-hero-grid { grid-template-columns: 1.08fr 0.92fr; align-items: center; gap: clamp(1.15rem, 2.9vw, 2.3rem); }
.cg-root.cg-nsw .cg-hero h1 { font-weight: 640; letter-spacing: -0.019em; line-height: 1.07; }
.cg-root.cg-nsw .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1.2rem; }
.cg-root.cg-nsw .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-nsw .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.011em; }
.cg-root.cg-nsw .cg-grid-3 { gap: clamp(1.05rem, 2.2vw, 1.8rem); }
.cg-root.cg-nsw .cg-card { border-radius: 8px; border-left: 4px solid var(--cg-accent-soft); }
.cg-root.cg-nsw .cg-table caption { letter-spacing: 0.05em; font-weight: 600; }
.cg-root.cg-nsw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-nsw .cg-table td:last-child { font-weight: 700; }
.cg-root.cg-nsw .cg-ladder-col { border-bottom: 3px solid var(--cg-accent-soft); padding-bottom: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Gemeente Nissewaard, Zuid-Holland: 89,112 residents (statistics office, 1 January 2026), 88,341 (2025), 84,771 (2013), 83,122 (1995), the years 1995 to 2014 recalculated to present boundaries after the 2015 merger; 43,340 men and 45,001 women (2025); 40,096 households (2025) averaging 2.18, 13,993 one-person, 26,103 multi-person, 14,324 with children; ages (2026) 14,107 under fifteen, 9,564 fifteen to twenty-five, 23,052 twenty-five to forty-five, 22,704 forty-five to sixty-five, 19,685 sixty-five or over; 8,379 hectares, 7,331 land, 1,048 water, published density 1,205; 40,514 dwellings (2025), 23,903 owner-occupied at 59 percent, 16,611 rented at 41 percent; estimated average value 308,000 euro; income 34,000 euro per resident and 41,700 per recipient (2024); 2.7 percent in poverty; origin (2025) 61,037 Dutch, 7,570 European, 19,734 non-European, 74,009 born in the Netherlands; 7 woonplaatsen, 24 wijken, 90 buurten; 31 primary establishments with 7,532 pupils and 9 secondary with 4,696 (2026); 2,884 MBO, 1,560 HBO, 450 WO students at institutions (2025). Encyclopaedia (Nissewaard): a municipality on Voorne-Putten in the south of Zuid-Holland, formed 1 January 2015 by merging Spijkenisse and Bernisse; the councils chose the name Nissewaard in July 2013; kernen include Spijkenisse, Geervliet, Hekelingen, Simonshaven, Abbenbroek, Heenvliet, Zuidland; infobox 89,111 on 1 January 2026, 83.79 square kilometres. Encyclopaedia (Spijkenisse): groeigemeente 1958, groeikern with a raised target 1977; around 1990, 26,400 dwellings for 68,000 residents, almost twenty new wijken, a metro connection with Rotterdam and three metro stations, a new town centre, a hospital; the Spijkenisserbrug of 1903 brought more activity and variety; links to the Rotterdam port area including the Hartelbrug; the Boekenberg library and cultural centre and the theatre de Stoep; the medieval Dorpskerk the oldest building; 72,830 residents on 1 January 2023. Regio Midden holidays. The city page teaches the composition effect with a labelled invented illustration.',
    localProject: 'Split the average before you explain it. Spijkenisse was filled in a burst, groeigemeente in 1958 and groeikern in 1977, with about 68,000 residents in 26,400 dwellings and almost twenty new wijken by around 1990, and a place filled that way ages together, so its overall averages can move because the proportions of household types change while each type stays the same. The page shows this with a clearly invented illustration (families at 3.5 and older households at 1.6; 70 to 30 gives 2.93, 40 to 60 gives 2.36, a fall of 0.57 from the mix alone) and makes no claim about actual Nissewaard household sizes over time. The programming form is dataset shift: a handwriting model at 98 percent on neat writers and 85 on hurried ones falls from about 95 to about 92 percent overall when hurried writers rise from a fifth to a half, with no change on either group; app ratings after a launch abroad, school averages with more first-year pupils and company salary averages after junior hiring follow the same pattern. The defences are storing each record\'s group, showing shares beside averages, decomposing every change into within-group and mix parts, recomputing with the mix held fixed, and monitoring by group. Composition effect taken from the tracker free list. Distinct from weighted versus unweighted averages (Oman), which is about how one average is formed rather than how it changes, from the mean of ratios (Stratum), from households versus persons (Charlois) and from self-selection (Amsterdam-Oost).',
    requiredMentions: [
      '83,122',
      '84,771',
      '40,096',
      '13,993',
      '14,324',
      '40,514',
      '23,903',
      '7,532',
      '4,696',
      '19,685',
      'Boekenberg',
      'Spijkenisserbrug',
      'Geervliet',
      'Simonshaven'
    ],
    sources: [
      { claim: 'Gemeente Nissewaard: 89,112 inwoners (2026), 88,341 (2025), 84,771 (2013), 83,122 (1995), historical data 1995-2014 recalculated to current boundaries due to the 2015 merger of Bernisse and Spijkenisse; mannen 43,340, vrouwen 45,001 (2025); ages 0-15 14,107, 15-25 9,564, 25-45 23,052, 45-65 22,704, 65+ 19,685 (2026); 40,096 huishoudens, 13,993 eenpersoons, 26,103 meerpersoons, 14,324 met kinderen, gemiddeld 2.18 (2025); 8,379 hectare, land 7,331, water 1,048; bevolkingsdichtheid 1,205; woningvoorraad 40,514, koopwoningen 23,903 (59 percent), huurwoningen 16,611 (41 percent) (2025); gemiddelde WOZ 308,000 euro; gemiddeld inkomen per inwoner 34,000 and per inkomensontvanger 41,700 euro (2024); personen in armoede 2.7 percent; basisonderwijs 31 vestigingen 7,532 leerlingen, voortgezet onderwijs 9 vestigingen 4,696 leerlingen (2026); MBO 2,884, HBO 1,560, WO 450 studenten (2025); geboren in Nederland 74,009, herkomst Nederland 61,037, Europa 7,570, buiten Europa 19,734 (2025); 7 woonplaatsen, 24 wijken, 90 buurten.', url: 'https://allecijfers.nl/gemeente/nissewaard/' },
      { claim: 'Nissewaard (encyclopaedia): Nissewaard is een gemeente op het eiland Voorne-Putten in het zuiden van de Nederlandse provincie Zuid-Holland. De gemeente is op 1 januari 2015 ontstaan door samenvoeging van de gemeenten Spijkenisse en Bernisse. De gemeenteraden van Spijkenisse en van Bernisse hebben in juli 2013 tot de nieuwe naam Nissewaard besloten. Kernen include Spijkenisse, Geervliet, Hekelingen, Simonshaven, Abbenbroek, Heenvliet, Zuidland. Infobox: 89.111 inwoners (1 jan 2026), 83,79 km2 (73,58 land, 10,21 water).', url: 'https://nl.wikipedia.org/wiki/Nissewaard' },
      { claim: 'Spijkenisse (encyclopaedia): In 1958 werd Spijkenisse officieel groeigemeente en in 1977 aanvaardde de gemeente Spijkenisse de status als groeikern met een verhoogde taakstelling. Na de periode van forse groei, rond 1990, had Spijkenisse 26.400 woningen die onderdak boden aan 68.000 inwoners, bijna twintig nieuwe wijken, een metro-verbinding met Rotterdam en drie metrostations, een nieuw stadscentrum, een ziekenhuis en talloze andere voorzieningen. Pas sinds de aanleg van de Spijkenisserbrug, in 1903, kwam er meer bedrijvigheid en meer diversiteit in de bevolking. Vanaf Voorne-Putten zijn sinds de eerste brug enkele verbindingen gemaakt met het noordelijk gelegen havengebied van Rotterdam (waaronder de Hartelbrug bij Spijkenisse). Zo zijn er een grote bibliotheek annex cultureel centrum (de Boekenberg) en is er een nieuw theater (de Stoep) gebouwd. De middeleeuwse Dorpskerk is het oudste gebouw in Spijkenisse. Spijkenisse is een stad met 72.830 inwoners (1 januari 2023) op het eiland Putten.', url: 'https://nl.wikipedia.org/wiki/Spijkenisse' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any comparison of 68,000 residents in 26,400 Spijkenisse dwellings around 1990 with the present 2.18 people per Nissewaard household. Different units, different boundaries and different vintages.',
      'Any claim that household size, income or age in Nissewaard has changed by a particular amount, or that the composition effect explains any real Nissewaard figure. The illustration is invented and labelled.',
      'Any origin for the name Nissewaard. The encyclopaedia entry does not give one.',
      'Any combination of the Spijkenisse count of 72,830 (2023) with the municipal row. Town against municipality is the Zeeland argument.',
      'Any comment on the higher-education student counts. Reading those columns is the Westland argument.',
      'Metro line letters, station names or the metro opening date. Summarised rather than quoted in the sources read.',
      'Anything the Rotterdam, Dordrecht and Zuid-Holland pages own, including their districts and arguments.'
    ]
  }
};
