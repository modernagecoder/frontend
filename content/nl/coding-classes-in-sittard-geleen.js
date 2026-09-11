'use strict';
// Sittard-Geleen: a charter town of 1243 and a mining town, merged with Born
// in 2001. 92,461 residents in the Limburg flessenhals.
// Spine (modest, per the Phase 5 method): at Sittard the Netherlands is less
// than ten kilometres wide, so any count of what lies within ten kilometres,
// made from Dutch data alone, stops at a border the people and shops do not.
// That is the edge effect, and image filters, moving averages and nearest
// neighbour searches all meet it.

module.exports = {
  slug: 'coding-classes-in-sittard-geleen',
  code: 'stg',
  accent: '#483D06',
  accentRationale: 'Sittard-Geleen: a dark coal-olive for the town of the Staatsmijn Maurits, placed by the solver more than twenty-four units from every page it links to, with an unlinked city as its nearest neighbour',
  pageType: 'city',
  place: {
    name: 'Sittard-Geleen',
    eyebrow: 'Sittard-Geleen, Limburg',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Limburg' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Sittard-Geleen, Netherlands',
  title: 'Coding Classes in Sittard-Geleen | Modern Age Coders',
  description: 'Live online coding, Python, AI and app classes in Sittard-Geleen for ages 6 to 67, from Limbrichterveld and Munstergeleen to Holtum-Born. The first lesson is free.',
  ogDescription: 'Live online coding, Python, AI and mathematics in the Limburg flessenhals, on a page about what happens to data at a border.',
  twitterDescription: 'Classes in Sittard-Geleen for ages 6 to 67, live online, with a free first lesson.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Sittard-Geleen Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Sittard, Geleen, Born and the surrounding villages, taught in English.'
  },

  h1: 'Coding classes in Sittard-Geleen, where the country is less than ten kilometres wide',
  capsuleQ: 'What are the best coding classes in Sittard-Geleen?',
  capsule: 'Coding classes in Sittard-Geleen serve 92,461 people (statistics office, 1 January 2026) in a municipality formed in 2001 from Sittard, Geleen and Born. Sittard received its town rights in 1243; Geleen grew from a village of about 3,000 into a mining and chemical town around the Staatsmijn Maurits. The encyclopaedia places Sittard in the flessenhals of Limburg, where Dutch territory is less than ten kilometres wide, with Belgium across the Maas to the west and Germany to the east. Any count of what lies within ten kilometres of the Markt, made from Dutch data alone, therefore stops at a border that neither people nor shops observe. Programmers call that the edge effect. Modern Age Coders teaches live online in English, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'From anywhere in Sittard, both national borders lie within ten kilometres, because at this point the Netherlands is narrower than that. Ask a Dutch dataset how many people, schools or shops lie within ten kilometres of the Markt and it answers truthfully about the Dutch part and says nothing about the rest, because the rest is in another country\'s statistics. The answer is not wrong, but it is cut off, and a map drawn from it makes the border look emptier than it is. The same thing happens at the edge of every image a computer filters, at the two ends of every moving average, and to every point near the rim of a dataset when a program looks for its nearest neighbours. Sittard-Geleen is a good place to learn to look for the edge before trusting the middle.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Sittard-Geleen.',

  picks: {
    eyebrow: 'Course picks for Sittard-Geleen',
    h2: 'Four courses for a town between two borders',
    intro: 'A child in Munstergeleen who wants to make a game, a teenager in Limbrichterveld curious how a photo filter works, a student in Geleen smoothing a noisy series, and an adult in Born whose reports stop at the national border when the customers do not. Each of them starts with a full lesson at no cost.',
    items: [
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'Games on a grid, where a child soon discovers that the squares along the edge have fewer neighbours than the rest.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Python with real series and images, including what a smoothing window does at the first and last points.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Image filters, moving averages and nearest-neighbour searches written by hand, edges included.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Maps and catchment reports read with an eye on where the data stops and the world carries on.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Sittard-Geleen today',
      h2: 'A charter town, a mining town, and Born, together since 2001',
      intro: 'In 2001 the present municipality was formed by the administrative merger of Sittard, Geleen and Born. The statistics office counted 92,461 residents on 1 January 2026, on 7,861 hectares of land within 8,058, a published density of 1,177 to the square kilometre, divided into eight wijken, 37 buurten and 13 woonplaatsen. On the present boundaries the office gives 96,089 for 1995, so the municipality has 3,628 fewer residents than then, 3.8 percent.',
      body: [
        { kind: 'table', caption: 'Geleen before and after the mine, as the encyclopaedia records it', head: ['When', 'Residents of Geleen', 'What the entry says'], rows: [
          ['Before 1915 to 1923', 'a little over 3,000', 'a small village until the Staatsmijn Maurits was built'],
          ['1930', '12,000', 'six years after the mine was brought into production in 1924'],
          ['1955', '25,000', 'the mine grew into the largest and most modern in Europe'],
          ['1980', '36,000', 'the mine had closed in 1967; the chemical complex stayed in operation'],
          ['2023', '31,185', 'the most recent figure in the entry']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Sittard', p: 'Sittard grew strongly from the eleventh century and received town rights in 1243 from Duke Hendrik IV of Limburg. The Basiliek van Onze-Lieve-Vrouw van het Heilig Hart of 1877 stands on the Oude Markt, and the Sint-Petrus\' Stoel van Antiochiekerk dates from the fourteenth century. Evening life gathers around the historic market square.' },
          { h3: 'Geleen', p: 'After the mine closed, the chemical works of the Staatsmijnen kept running and switched to natural gas as their raw material. The fertiliser branch became OCI Agro, SABIC took over the bulk chemicals and the fine chemicals stayed with DSM, the successor of the Staatsmijnen. The site itself became independent as Chemelot.' },
          { h3: 'Between two borders', p: 'In the west the municipality borders Belgium along the Maas, and in the east it borders Germany. Sittard lies squeezed between the two national borders in what the encyclopaedia calls the flessenhals of Limburg, where Dutch territory is less than ten kilometres wide.' }
        ] }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the data stops',
      h2: 'Ten kilometres from the Markt, and a border in every direction but two',
      intro: 'The only fact this section needs is the encyclopaedia\'s: here the Netherlands is less than ten kilometres wide. Everything else follows from asking a Dutch-only dataset about the neighbourhood of a point on that strip.',
      body: [
        { kind: 'table', caption: 'Questions asked within ten kilometres of Sittard, answered from Dutch data alone', head: ['The question', 'What Dutch data can count', 'What it cannot see', 'The effect on the answer'], rows: [
          ['How many people live within reach?', 'residents on the Dutch side', 'residents in Belgium and Germany', 'too low, and lower the closer the point is to a border'],
          ['How many schools or shops are nearby?', 'establishments in Dutch registers', 'those across either border', 'a town that looks under-served when it may not be'],
          ['What is the average of the surrounding areas?', 'the Dutch neighbours of an area', 'the foreign neighbours', 'an average taken over half a neighbourhood'],
          ['Where are the empty parts of the map?', 'every Dutch buurt', 'whatever lies just beyond', 'a border that looks like the end of the world']
        ] },
        { kind: 'p', text: 'None of these answers contains an error in the ordinary sense. Every Dutch figure is correct. The trouble is that a question about a circle has been answered with data about a strip, and near the edge of the strip much of the circle is simply missing. Statisticians call this an edge effect, and it affects any calculation that looks at the neighbourhood of a point: counts within a radius, averages of adjacent areas, smoothed maps and heat maps. The further a point lies from the edge of the data, the less it matters. In Sittard, both edges are always close.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Sittard-Geleen in figures, with each sum and division stated',
      intro: 'First the statistics office row for the municipality with the year of each figure, then schools and origin, then the history. Where the page adds or divides anything, it says so.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Residents', p: '92,461 (2026), 92,491 (2025), 94,024 (2013) and 96,089 (1995), the earlier years recalculated to present boundaries; 46,075 men and 46,416 women in 2025. Ages in 2026: 11,220 under fifteen, 9,368 fifteen to twenty-five, 22,169 twenty-five to forty-five, 25,056 forty-five to sixty-five and 24,648 sixty-five or over. The five groups add to the 2026 total.' },
          { h3: 'Households and homes', p: '46,163 households in 2025 averaging 1.96 people, 19,418 of one person and 12,552 with children. 47,306 dwellings, 27,911 owner-occupied at 59 percent and 19,395 rented at 41, which together make the total. Estimated average value 271,000 euro (2025).' },
          { h3: 'Income and origin', p: 'Income 33,700 euro per resident and 39,500 per income recipient (2024); 3.5 percent of residents in poverty. In 2025, 69,019 residents were of Dutch origin, 11,871 of European and 11,601 of non-European origin; 80,609 were born in the Netherlands and 11,882 abroad. Both splits add to the 2025 total.' },
          { h3: 'Schools', p: '25 primary establishments teach 6,400 pupils, about 256 each, and 8 secondary establishments teach 4,617, about 577 each (2025). The office records 3,840 MBO, 5,173 higher professional and 700 university students at institutions in the municipality.' },
          { h3: 'Wijken', p: 'The office lists eight wijken: Sittard, Geleen, Limbrichterveld, Overhoven, Munstergeleen, Guttecoven, Holtum-Born, and Obbicht and Papenhoven, with 37 buurten and 13 woonplaatsen between them.' },
          { h3: 'Every calculation', p: '96,089 minus 92,461 is 3,628, which is 3.8 percent of 96,089, on the same boundaries throughout. 6,400 pupils over 25 establishments is 256; 4,617 over 8 is about 577. The age groups, both origin splits and the two tenure groups were added only to confirm they are complete. Nothing else was calculated.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with the municipality of Sittard-Geleen, Chemelot, DSM, SABIC, OCI Agro or any school in the area, and nothing here implies one. The municipal figures are the statistics office row for Sittard-Geleen at the years stated. The merger, the borders and the flessenhals come from the encyclopaedia entries for Sittard-Geleen and Sittard, and the mine, the population of Geleen and the chemical industry from the entry for Geleen. The town figures in those entries, 31,185 for Geleen and 37,490 for Sittard in 2023, are quoted as the entries give them and are not combined with the municipal row.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Look at the edge before you trust the middle',
      intro: 'Any calculation that uses the neighbours of a point has to decide what to do where the neighbours run out. Programs make that decision silently unless someone makes it for them.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Find the edge', p: 'Draw the boundary of the data, not of the world. For Sittard it is the national border; for a photo it is the frame; for a time series it is the first and last day. Every point within one window of that boundary is an edge point.' },
          { h3: '2. Choose how to fill it', p: 'Fetch real data from beyond the edge where it exists, mirror the data back on itself, repeat the last value, fill with zeros, or compute only where the whole window fits. Each choice changes the answer near the edge, and none is free.' },
          { h3: '3. Mark what you guessed', p: 'Flag every result that used filled-in neighbours, so that nobody later reads a border buurt, a photo corner or the last week of a chart with the same confidence as the middle.' }
        ] },
        { kind: 'table', caption: 'The same edge in different programs', head: ['Where it happens', 'What runs out', 'The usual silent choice', 'What it does'], rows: [
          ['An image filter or a convolutional network', 'pixels beyond the frame', 'pad the border with zeros', 'darkens or distorts the edges of the result'],
          ['A seven-day moving average', 'days before the first and after the last', 'average whatever days exist', 'the ends of the curve rest on fewer days and wobble more'],
          ['A nearest-neighbour search', 'points beyond the rim of the data', 'take the nearest points that exist', 'edge points get neighbours that are all on one side'],
          ['A heat map of a country', 'data across the border', 'leave the other side blank', 'border regions look emptier than they are'],
          ['Anything within ten kilometres of Sittard', 'Belgium and Germany', 'count only the Dutch side', 'every nearby total is cut off']
        ] },
        { kind: 'callout', h3: 'Why the edge matters more than it looks', p: 'In a large dataset the edge seems like a small share of the points, easy to ignore. It rarely is. In an image, the band of pixels within a filter\'s reach of the frame can be a real fraction of the whole, and deep networks stack filter upon filter, so the edge band widens at every layer. In a time series, the last few days are usually the ones people care about most, and they are exactly the ones a centred moving average cannot compute properly. On a map, the areas near a border are often those where the most interesting questions are asked, about trade, travel and services that cross it. So the choice made at the edge, whether zeros, mirrors, repeated values or real data fetched from beyond, often decides the answer to the question that mattered. Sittard-Geleen makes this concrete: a strip less than ten kilometres wide, in which every point is close to an edge, and in which any circle drawn around the Markt crosses into two other countries.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for calculations near a boundary',
      intro: 'For filters, rolling windows, neighbourhood averages, radius counts and maps. Learned in a municipality where both national borders are always close.',
      body: [
        { kind: 'table', caption: 'Handling the edge on purpose', head: ['Habit', 'What it means', 'What it prevents', 'What it gives'], rows: [
          ['Draw the data boundary', 'Mark where the dataset ends, separately from where the world ends', 'Mistaking a data border for an empty area', 'A clear edge zone'],
          ['Measure the edge zone', 'Count how many points lie within one window of the boundary', 'Assuming the edge is too small to matter', 'A share you can report'],
          ['Choose the fill', 'Pick zeros, mirroring, repetition, outside data or full windows only, and say which', 'Library defaults deciding the answer', 'A documented choice'],
          ['Compare fills', 'Run two different fills and see how much edge results move', 'Confidence in a number that depends on a guess', 'A measure of edge uncertainty'],
          ['Flag the edge', 'Mark results that used filled neighbours', 'Edge values read like central ones', 'Honest maps and charts']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A grid game where every square counts its neighbours. The child notices that corner squares have only three and edge squares five, and decides what the game should do about it.' },
          { h3: 'For teenagers', p: 'A blur filter written by hand in Python, run on a photograph with zero padding and then with mirroring. The teenager compares the borders of the two results and explains the difference.' },
          { h3: 'For adults', p: 'A moving average of real weekly figures, with the last few points marked as resting on fewer weeks. Adults are often surprised how much the most recent point on a smoothed chart can move once the next week arrives.' }
        ] },
        { kind: 'p', text: 'This section rests on a single sentence from the encyclopaedia, that Dutch territory at Sittard is less than ten kilometres wide, and on standard practice in image processing and statistics. It makes no claim about any real count of residents, schools or shops across either border.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From counting neighbours on a grid to padding a neural network',
    intro: 'Every learner is placed in the free lesson by working on a real task while the teacher watches. A home in Geleen or Obbicht decides nothing, and neither does age by itself.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Corner squares', p: 'Children find that squares at the edge of a grid have fewer neighbours.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'A rolling average', p: 'Learners smooth a series by hand and watch the first and last points.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Blur and pad', p: 'Teenagers write an image filter and try two ways to handle the frame.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Beyond the border', p: 'Adults rebuild a catchment report with the missing side made visible.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An image model pads the edge of every picture it sees. Why should a teenager in Sittard learn what happens at a border?',
    intro: 'Because at Sittard the country is less than ten kilometres wide, and every calculation here meets an edge.',
    p1: 'A convolutional network, the kind behind most image recognition, slides small filters across a picture, and at the frame each filter reaches for pixels that are not there. The framework fills them in, usually with zeros, and nobody asks. Language and forecasting models have their own edges: the start of a text, the end of a series, the last day before a prediction. Models learn to cope with whatever filling they were given, which is fine until the edge is where the important part of the picture or the series happens to be.',
    p2: 'A learner who has written a blur filter by hand, watched the border of a photograph darken under zero padding and then come right with mirroring, understands something that no default setting explains. The choice at the edge is a decision about data that does not exist, and it has to be made by someone who knows what lies beyond. Models will keep filling edges automatically. Knowing when that filling matters is still a human job.',
    closer: 'The case for a child in Sittard-Geleen learning to code in 2026 is therefore not the chemical park on the edge of Geleen. It is that someone who has learned to look for the edge of the data before trusting its middle will be needed wherever AI makes decisions about pictures, places and the last week of a trend.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Lessons that reach Obbicht as easily as the Markt',
    intro: 'Thirteen woonplaatsen share one municipality here, some of them villages by the Maas and some of them the quarters that grew up around the mine, and the lesson is the same wherever the laptop sits.',
    cells: [
      { h3: 'No bus to catch', p: 'A pupil in Guttecoven, Holtum or Papenhoven logs in from the kitchen table at the agreed time. The teacher is on screen a minute before the start, and nobody waits in the dark for a lift home.' },
      { h3: 'Brugklas stays brugklas', p: 'The Dutch names for school years and streams, from groep to vwo and the profielkeuze, are used exactly as a Limburg school report uses them. Lessons are in English; the school system is not translated away.' },
      { h3: 'Try it before deciding', p: 'The opening session costs nothing and is taught as a lesson, not a demonstration. By its end the teacher can name a starting level and the course that fits and can propose a weekly slot, and there is nothing to sign.' },
      { h3: 'Classmates from elsewhere', p: 'Groups hold five to ten learners who have reached the same point. With 11,220 residents under fifteen spread across thirteen woonplaatsen, five matched learners free at one hour would be luck, so classmates may log in from other countries.' },
      { h3: 'The regio Zuid calendar', p: 'Lessons run twice weekly, eight or so in a month, at the same time each week, and pause for the regio Zuid school holidays that Limburg shares with Noord-Brabant and Zeeland.' },
      { h3: 'Evenings left free', p: 'The teachers work on Indian time, three and a half hours ahead of Limburg in summer and four and a half in winter, which puts late afternoons, early evenings and Saturday or Sunday mornings within reach all year.' }
    ],
    spec: { title: 'Thirty-three schools, and why a group still forms online', p: 'Between them, 25 primary and 8 secondary establishments in the municipality teach 6,400 and 4,617 pupils. Even so, a group needs learners who match on subject, stage and hour all at once, and those are found across the whole age range from 6 to 67 and across many countries far more reliably than inside one Limburg municipality.' }
  },

  fees: {
    h2: 'Sittard-Geleen fees in plain figures',
    intro: 'Three numbers, set out below, with nothing held back for a sales call.',
    first: 'One complete lesson on a genuine task; the learner leaves with a level and the course it points to.',
    group: 'A month of lessons, usually eight, in a group of five to ten matched by ability.',
    private: 'A month of lessons, usually eight, taught to one learner alone.',
    closer: 'One price in dollars covers every country, so there is no euro version to compare, and a household in Overhoven pays what a household in Obbicht pays. The first charge comes only after the free session has fixed the course and the time, and it is arranged through WhatsApp. Pausing, switching format and missed lessons are explained on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, left unedited',

  book: {
    h2: 'Where is the learner starting from?',
    intro: 'The first task could be counting neighbours on a grid, smoothing a short series by hand, or blurring a photograph with two kinds of edge.',
    success: 'Thank you. Your Sittard-Geleen class request has been sent.'
  },

  faq: {
    h2: 'Sittard-Geleen coding class questions',
    intro: 'The municipality, the mine, the border and the lessons.',
    items: [
      { q: 'What does Sittard-Geleen include?', a: 'The municipality was formed in 2001 by the merger of Sittard, Geleen and Born. The statistics office lists eight wijken: Sittard, Geleen, Limbrichterveld, Overhoven, Munstergeleen, Guttecoven, Holtum-Born, and Obbicht and Papenhoven, with 37 buurten and 13 woonplaatsen.' },
      { q: 'How many people live in Sittard-Geleen?', a: 'The statistics office counted 92,461 residents on 1 January 2026, in 46,163 households in 2025. On the present boundaries the count was 96,089 in 1995, so the municipality has 3,628 fewer residents, or 3.8 percent.' },
      { q: 'What was the Staatsmijn Maurits?', a: 'The state coal mine at Geleen, built between 1915 and 1923 and brought into production in 1924. According to the encyclopaedia it grew into the largest and most modern mine in Europe and closed in 1967. Geleen grew from a village of a little over 3,000 to 36,000 residents by 1980.' },
      { q: 'What is Chemelot?', a: 'The chemical park at Geleen that grew from the chemical works of the Staatsmijnen, which kept running after the mine closed and switched to natural gas. The fertiliser branch became OCI Agro, SABIC took over bulk chemicals and DSM kept the fine chemicals; the park became independent as Chemelot.' },
      { q: 'Why is Sittard called the flessenhals?', a: 'Because it lies squeezed between two national borders, Belgium across the Maas to the west and Germany to the east, at a point where, according to the encyclopaedia, Dutch territory is less than ten kilometres wide.' },
      { q: 'How many schools are there in Sittard-Geleen?', a: 'The statistics office counts 25 primary establishments teaching 6,400 pupils and 8 secondary establishments teaching 4,617, with 3,840 MBO, 5,173 higher professional and 700 university students at institutions in the municipality. This page rates no school.' },
      { q: 'What language are lessons in, and at what time?', a: 'English, with Dutch school terms such as groep, havo and vwo kept in Dutch. India is three and a half hours ahead in summer and four and a half in winter, so after-school, early-evening and weekend times all work. A weekly hour is agreed at the free lesson and holidays follow regio Zuid.' },
      { q: 'Is there a Modern Age Coders classroom in Sittard-Geleen?', a: 'No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Sittard-Geleen coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Limburg and beyond',
    h2: 'South to Maastricht, north to Venlo, and up to the hub',
    html: 'Down the Maas, <a class="cg-inline-link" href="/coding-classes-in-maastricht">coding classes in Maastricht</a> covers the provincial capital, and to the north <a class="cg-inline-link" href="/coding-classes-in-venlo">Venlo</a> has a page of its own. The same cut-off, drawn by a district boundary instead of a national one, is the subject of the page on <a class="cg-inline-link" href="/coding-classes-in-rotterdam-centrum">Rotterdam Centrum</a>. All of the province, from the flessenhals to the hills of the south, is gathered on <a class="cg-inline-link" href="/coding-classes-in-limburg">Limburg</a>. A learner who wants to start with machine learning can go straight to the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and every page in the series is listed on the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Sittard-Geleen, Limburg and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-maastricht', label: 'Maastricht' },
    { href: '/coding-classes-in-limburg', label: 'Limburg' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-stg .cg-hero-grid { grid-template-columns: 0.95fr 1.05fr; align-items: end; gap: clamp(1rem, 2.6vw, 2.1rem); }
.cg-root.cg-stg .cg-hero h1 { font-weight: 620; letter-spacing: -0.015em; line-height: 1.09; }
.cg-root.cg-stg .cg-capsule { border-left: 2px solid var(--cg-accent); padding-left: 1.4rem; }
.cg-root.cg-stg .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-stg .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.014em; }
.cg-root.cg-stg .cg-grid-3 { gap: clamp(0.95rem, 2vw, 1.6rem); }
.cg-root.cg-stg .cg-card { border-radius: 4px; border-top: 4px solid var(--cg-accent-soft); }
.cg-root.cg-stg .cg-table caption { letter-spacing: 0.03em; font-weight: 700; }
.cg-root.cg-stg .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-stg .cg-table td:nth-child(2) { font-weight: 600; }
.cg-root.cg-stg .cg-ladder-col { border-top: 3px solid var(--cg-accent-soft); padding-top: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Gemeente Sittard-Geleen, Limburg: 92,461 residents (statistics office, 1 January 2026), 92,491 (2025), 94,024 (2013), 96,089 (1995), earlier years recalculated to present boundaries; 46,075 men and 46,416 women (2025); 46,163 households (2025) averaging 1.96, 19,418 one-person, 12,552 with children; ages (2026) 11,220 under fifteen, 9,368 fifteen to twenty-five, 22,169 twenty-five to forty-five, 25,056 forty-five to sixty-five, 24,648 sixty-five or over; 8,058 hectares, 7,861 land, 197 water, published density 1,177; 47,306 dwellings (2025), 27,911 owner-occupied at 59 percent, 19,395 rented at 41 percent; estimated average value 271,000 euro; income 33,700 euro per resident and 39,500 per recipient (2024); 3.5 percent in poverty; origin (2025) 69,019 Dutch, 11,871 European, 11,601 non-European, 80,609 born in the Netherlands, 11,882 abroad; 8 wijken (Obbicht and Papenhoven, Holtum-Born, Guttecoven, Overhoven, Limbrichterveld, Sittard, Munstergeleen, Geleen), 37 buurten, 13 woonplaatsen; 25 primary establishments with 6,400 pupils and 8 secondary with 4,617 (2025); 3,840 MBO, 5,173 HBO, 700 WO students at institutions. Encyclopaedia: municipality formed 2001 by the administrative merger of Sittard, Geleen and Born; borders Belgium via the Maas in the west and Germany in the east; Sittard town rights 1243 from Duke Hendrik IV of Limburg; Sittard lies between two national borders in the flessenhals of Limburg, where Dutch territory is less than ten kilometres wide; Basiliek van Onze-Lieve-Vrouw van het Heilig Hart 1877 on the Oude Markt; Sint-Petrus Stoel van Antiochiekerk fourteenth century; evening life around the historic market; Sittard 37,490 in 2023. Geleen: a village of a little over 3,000 until the Staatsmijn Maurits was built (1915 to 1923); mine in production 1924, largest and most modern in Europe, closed 1967; 12,000 residents in 1930, 25,000 in 1955, 36,000 in 1980, 31,185 in 2023; the chemical complex stayed in operation and switched to natural gas; fertiliser became OCI Agro, SABIC took bulk chemicals, DSM kept fine chemicals; the park became independent as Chemelot; station Geleen-Lutterade on the Sittard to Maastricht line. Regio Zuid holidays. The city page observes the edge effect: calculations about the neighbourhood of a point are cut off where the data stops.',
    localProject: 'Look at the edge before you trust the middle. At Sittard Dutch territory is less than ten kilometres wide, so both national borders lie within ten kilometres of any point there, and any count within ten kilometres made from Dutch data alone (residents, schools, shops, the average of neighbouring areas) is truncated at a border people and shops do not observe; every Dutch figure is correct but a question about a circle has been answered with data about a strip. The programming form is the edge effect: zero padding in image filters and convolutional networks, moving averages at the ends of a series, nearest-neighbour searches at the rim of a dataset, and heat maps that leave the far side of a border blank. The defences are to draw the data boundary separately from the real one, measure the share of points in the edge zone, choose and document a fill (outside data, mirroring, repetition, zeros or full windows only), compare two fills to measure edge uncertainty, and flag results that used filled neighbours. Shares its root with Rotterdam Centrum, which owns boundary truncation of a district neighbourhood and the ranking by area that follows from it; this page ranks nothing by area and instead takes the truncation into code, where the question is which fill to use beyond the edge (outside data, mirroring, repetition, zeros or full windows only), and it links to that page. Kept modest under the Phase 5 method. Also distinct from boundary changes in a series (Alkmaar, Zaanstad), from the unit of observation (Zeeland), from the denominator that excludes the served population (Venlo) and from representation edge cases (Maastricht). Makes no claim about any real count across either border.',
    requiredMentions: [
      '96,089',
      '94,024',
      '46,163',
      '19,418',
      '12,552',
      '47,306',
      '27,911',
      '4,617',
      '5,173',
      '24,648',
      'Guttecoven',
      'Munstergeleen',
      'Chemelot',
      'Obbicht'
    ],
    sources: [
      { claim: 'Gemeente Sittard-Geleen: 92,461 inwoners (2026), 92,491 (2025), 94,024 (2013), 96,089 (1995), historical data recalculated to current boundaries; mannen 46,075, vrouwen 46,416 (2025); 46,163 huishoudens, 19,418 eenpersoons, 12,552 met kinderen, gemiddeld 1.96; ages 0-15 11,220, 15-25 9,368, 25-45 22,169, 45-65 25,056, 65+ 24,648 (2026); 8,058 hectare, land 7,861, water 197; bevolkingsdichtheid 1,177; woningvoorraad 47,306, koopwoningen 27,911 (59 percent), huurwoningen 19,395 (41 percent) (2025); gemiddelde WOZ 271,000 euro; gemiddeld inkomen per inwoner 33,700 and per inkomensontvanger 39,500 euro (2024); personen in armoede 3.5 percent; basisonderwijs 25 vestigingen 6,400 leerlingen, voortgezet onderwijs 8 vestigingen 4,617 leerlingen (2025); MBO 3,840, HBO 5,173, WO 700 studenten; herkomst Nederland 69,019, Europa 11,871, buiten Europa 11,601, geboren in Nederland 80,609, buiten Nederland 11,882 (2025); 8 wijken: Obbicht and Papenhoven, Holtum-Born, Guttecoven, Overhoven, Limbrichterveld, Sittard, Munstergeleen, Geleen; 37 buurten; 13 woonplaatsen.', url: 'https://allecijfers.nl/gemeente/sittard-geleen/' },
      { claim: 'Sittard-Geleen (encyclopaedia): In 2001 ontstond de huidige gemeente Sittard-Geleen door de bestuurlijke samenvoeging van de gemeenten Sittard, Geleen en Born. In het westen grenst Sittard-Geleen via de rivier de Maas aan Belgie en in het oosten aan Duitsland.', url: 'https://nl.wikipedia.org/wiki/Sittard-Geleen' },
      { claim: 'Sittard (encyclopaedia): Sittard groeide vanaf de 11e eeuw sterk uit. De plaats kreeg in 1243 stadsrechten van hertog Hendrik IV van Limburg. Sittard ligt ingeklemd tussen twee rijksgrenzen in de zogenoemde flessenhals van de provincie Limburg, waar het Nederlandse grondgebied nog geen tien kilometer breed is. Het uitgaansleven is geconcentreerd rond de historische markt waar veel cafes en restaurants te vinden zijn. De Basiliek van Onze-Lieve-Vrouw van het Heilig Hart, van 1877, aan de Oude Markt in Sittard-Centrum. De Sint-Petrus\' Stoel van Antiochiekerk, uit de 14de eeuw, in Sittard-Centrum. Infobox: 37,490 inhabitants (2023).', url: 'https://nl.wikipedia.org/wiki/Sittard' },
      { claim: 'Geleen (encyclopaedia): Tot de bouw van de Staatsmijn Maurits (1915-1923) was Geleen een dorpje van ruim 3.000 inwoners. In 1924 werd de mijn in exploitatie genomen; zou weldra uitgroeien tot de grootste en modernste van Europa; sloot reeds in 1967. In 1930 bedroeg de bevolking al 12.000 zielen, in 1955: 25.000 en in 1980: 36.000. Anno 2023 wonen er 31.185 mensen. Het chemiecomplex van de Staatsmijnen bleef in functie en schakelde om op aardgas als grondstof. De kunstmesttak verzelfstandigde als OCI Agro, SABIC nam de bulkchemie over, de fijnchemie bleef in handen van de feitelijke opvolger van Staatsmijnen, DSM. Het chemiepark verzelfstandigde onder de naam Chemelot. Station Geleen-Lutterade aan de spoorverbinding Sittard - Maastricht.', url: 'https://nl.wikipedia.org/wiki/Geleen' },
      { claim: 'School holiday regions: regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any real count of residents, schools or shops within ten kilometres of Sittard, on either side of the border. Not in the sources read; the section is conceptual.',
      'Any share of a ten-kilometre circle that lies outside the Netherlands. The width of the strip is given only as less than ten kilometres, so only the fact that both borders lie within ten kilometres is stated.',
      'Any comparison of the Geleen figure of 31,185 or the Sittard figure of 37,490 with the municipal row. Town against municipality is the Zeeland argument.',
      'Any account of the decline since 1995 beyond the subtraction on the same boundaries. Causes are not in the sources read.',
      'Any comment on the higher-education student counts. Reading those columns is the Westland argument.',
      'Any claim about carnival customs, Fortuna Sittard or the fortifications. Summarised rather than quoted in the sources read, so left out.',
      'Anything the Maastricht, Venlo and Limburg pages own, including their figures and arguments.'
    ]
  }
};
