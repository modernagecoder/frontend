'use strict';
// The Hague: the city that hands off to eight district pages. Spine: a city
// where 43 percent of residents have origins outside Europe and the largest
// South Asian community in the country is counted by no column of the table,
// because the statistics office counts two generations and the community is
// on its fourth. Reads as a map, never as a district page.

module.exports = {
  slug: 'coding-classes-in-the-hague',
  code: 'dhg',
  accent: '#39588A',
  accentRationale: 'The Hague: a slate blue for the North Sea at Scheveningen, low enough in chroma to stay out of the retired electric-blue band',
  pageType: 'city',
  place: {
    name: 'The Hague',
    eyebrow: 'The Hague (Den Haag), Zuid-Holland',
    schemaType: 'City',
    chain: [{ type: 'AdministrativeArea', name: 'Zuid-Holland' }, { type: 'Country', name: 'Netherlands' }]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'The Hague (Den Haag), Zuid-Holland, Netherlands',
  title: 'Coding Classes in The Hague | Modern Age Coders',
  description: 'Live online coding, Python and AI classes for The Hague learners aged 6 to 67, from Escamp to Scheveningen, in the city where 43 percent have roots outside Europe.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in Den Haag, built on the community that the statistics count for two generations and then stop.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'igcse-computer-science-0478-course',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for The Hague Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across the eight stadsdelen of The Hague, taught in English.'
  },

  h1: 'Coding classes in The Hague, a city whose largest South Asian community appears in no column of the census',
  capsuleQ: 'What are the best coding classes in The Hague?',
  capsule: 'Coding classes in The Hague serve a city of 569,468 people (Statistics Netherlands, 1 January 2026) where 43 percent of residents have their origins outside Europe, 44,769 of them from Suriname, and where the Hindustani community that grew from that migration is the largest in the country and is not measured by any statistic, because the office counts countries of origin for two generations and then stops. Live online and in English, for ages 6 to 67 across all eight stadsdelen, Modern Age Coders teaches coding, Python, AI and mathematics. There is no charge for the first lesson; after it, USD 100 a month buys a place in a group of five to ten and USD 150 a month buys private tuition.',
  lead: 'A grandchild of a family that arrived from Suriname around 25 November 1975 is, in the national statistics, of Dutch origin. The community has not gone anywhere; the column has. Building the small program that shows a group growing while its measured size shrinks is the project on this page, and in this city it is not an abstract one.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in The Hague.',

  picks: {
    eyebrow: 'Course picks for The Hague',
    h2: 'Four courses for a city with 138 primary schools, 59 secondary and five international ones',
    intro: 'The Hague schools a child on the National Curriculum for England in Leidschenveen, a child on the IB in Kijkduin, a child at a gymnasium in the Statenkwartier and a child at a vmbo in Escamp, all inside one municipality. These four are chosen so that each of them has a door.',
      items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 6 to 10', note: 'Decomposition and pattern-finding before any syntax, in English, for a groep 3 to 5 child or a Key Stage 1 pupil at the British School.' },
      { course: 'kids-ai-web-development-course', band: 'Ages 8 to 12', note: 'A real website that exists afterwards, for the groep 6 to 8 years in which a Hague child is deciding what they are good at.' },
      { course: 'igcse-computer-science-0478-course', band: 'Ages 14 to 16', note: 'The Cambridge IGCSE 0478 syllabus in full, for the Years 10 and 11 that the British School in the Netherlands runs on the Vrouw Avenweg.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Excel, Sheets and Power BI with AI, for the policy analyst, the embassy officer or the court clerk who reads data all day and has never built any.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The Hague today',
      h2: 'Eight districts, forty-five wijken, and a population whose origins have inverted in thirty years',
      intro: 'In 1995, 63 percent of Hague residents were of Dutch origin. By 2025 it was 39 percent, with 18 percent from elsewhere in Europe and 43 percent from outside it. The three largest origin groups are Suriname at 44,769, Turkey at 42,148 and Morocco at 32,680 (Statistics Netherlands, via the municipal profile). This page is written for the city that number describes, not the one in the postcards.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The count', p: '569,468 residents on 1 January 2026; 285,140 households; 86,156 children under fifteen and 74,245 people aged fifteen to twenty-five. The forty-four wijken listed on the same statistics site sum to 569,460, eight short of the municipal figure, which is as close as Dutch parts and wholes usually get and is checked in the class.' },
          { h3: 'The schools', p: '138 primary establishments with 46,396 pupils and 58 secondary with 30,043, by the national count. The city\'s own school listing runs to 59 secondary schools and 25,675 Hague-resident pupils in 2025-26, led by Segbroek College with 1,385, the International School of The Hague with 1,174 and Johan de Witt with 990.' },
          { h3: 'The districts, sized', p: 'Escamp is the largest stadsdeel at 128,967 residents in 2022, then Centrum at 106,261, Segbroek 62,507, Scheveningen 59,992, Loosduinen 51,395, Haagse Hout 48,606, Leidschenveen-Ypenburg 48,273 and Laak 47,305. Laak holds the single largest wijk in the city, Laakkwartier en Spoorwijk, at 44,684 on 1 January 2026.' }
        ] },
        { kind: 'spec', title: 'A government town by a quarter', p: 'About a quarter of the jobs in The Hague are in the national government or the roughly two hundred international organisations the city hosts, from the ministries to Europol, Eurojust, the European Patent Office and the European Space Agency, whose staff get priority at the European School. A coding class here has to fit a policy analyst as naturally as an engineer.' }
      ]
    },
    {
      id: 'districts', tint: 'tint', eyebrow: 'The eight stadsdelen',
      h2: 'What separates Escamp from Haagse Hout, in the numbers a parent would notice',
      intro: 'Each stadsdeel gets its own page in this series, written close up. This is the map, with the figure that distinguishes each, so that those pages never have to repeat the city.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Escamp', p: 'The largest district by far, 128,967 people in 2022, and the post-war south-west: Bouwlust 29,012, Wateringse Veld 24,628, Moerwijk 21,974, Morgenstond 20,553, Rustenburg en Oostbroek 18,994, Leyenburg 17,143. Six wijken, each the size of a Dutch town. <a class="cg-inline-link" href="/coding-classes-in-escamp">Its page</a> takes apart what a count of school buildings inside a boundary can and cannot tell you.' },
          { h3: 'Centrum', p: '106,261 people in 2022 and the densest immigrant history in the city: the Schildersbuurt at 30,102 and the Transvaalkwartier at 16,335 are where the Hindustani community of The Hague is most visible, along with the Stationsbuurt at 12,945 and the Centrum wijk itself at 21,955. <a class="cg-inline-link" href="/coding-classes-in-the-hague-centrum">Its page</a> reads five of its eight wijken in full and refuses to grade any of them.' },
          { h3: 'Laak and Leidschenveen-Ypenburg', p: 'Laak, 47,305, is one enormous wijk and the Binckhorst being rebuilt beside it, and <a class="cg-inline-link" href="/coding-classes-in-laak">its page</a> shows why the Binckhorst age table is a fact about what was built rather than about what anyone preferred. Leidschenveen-Ypenburg, 48,273, is the newest district, and <a class="cg-inline-link" href="/coding-classes-in-leidschenveen-ypenburg">its page</a> shows that two of its four wijken are business parks whose published densities describe the night: Ypenburg 26,358 and Leidschenveen 20,049, built on the old airfield, and home to two of the British School\'s three Hague campuses on the Vrouw Avenweg.' },
          { h3: 'Segbroek and Scheveningen', p: 'Segbroek, 62,507, is the pre-war middle of the city: Valkenboskwartier 18,159, Regentessekwartier 14,376, the Bomen- en Bloemenbuurt 14,912 and Segbroek College, the largest secondary school in The Hague. Scheveningen, 59,992, is the coast, the Statenkwartier and the Lycee Francais on the Scheveningseweg; <a class="cg-inline-link" href="/coding-classes-in-scheveningen">its page</a> works out why the 1680 village count and the 2026 wijk count cannot be set against each other.' },
          { h3: 'Haagse Hout', p: '<a class="cg-inline-link" href="/coding-classes-in-haagse-hout">Its page</a> finds a second published total for this same 2022 figure, 534 people away, and works out what that means. 48,606 people: Bezuidenhout 19,254 behind the central station, Benoordenhout 15,393 with the European School and the international organisations of the Oostduinlaan and the Van Alkemadelaan, and Mariahoeve en Marlot 15,759 on the edge of the Haagse Bos.' },
          { h3: 'Loosduinen', p: '51,395 people in the west: the old village of Loosduinen 17,884, Waldeck 17,950, Kraayenstein en Vroondaal 10,743, and Kijkduin en Ockenburgh 3,978, where the International School of The Hague sits at Wijndaelerweg 11 with 1,174 Hague-resident pupils.' }
        ] },
        { kind: 'p', text: 'District pages in this series are written under one rule: a paragraph of city context, then only what is true of that district and false of its neighbours. This page carries the city so that they can stay local.' }
      ]
    },
    {
      id: 'schools', tint: '', eyebrow: 'Schools by name',
      h2: 'Five school systems in one city, and where each one hands off to us',
      intro: 'A Hague child may be on the Dutch system, the English one, the IB, the European Baccalaureate or the French baccalaureat without leaving the municipality. The left column is the school as it describes itself; the right is what fits beside it.',
      body: [
        { kind: 'align', rows: [
          { code: 'BSN', req: 'The British School in the Netherlands: Junior School Vlaskamp at Vlaskamp 19, Junior and Senior School Leidschenveen at Vrouw Avenweg 640 and 422, Senior School Voorschoten just outside the city. National Curriculum for England, IGCSE and A level.', ours: 'Key Stage 2 pupils start with blocks and Python placed by year group; Years 10 and 11 take the Cambridge IGCSE Computer Science 0478 course directly; Sixth Form the A level.' },
          { code: 'ISH', req: 'International School of The Hague, Wijndaelerweg 11 in Kijkduin: primary and secondary on one site, the IB Middle Years and Diploma Programmes, 1,174 Hague-resident pupils in 2025-26.', ours: 'Placement by MYP year; the IB Diploma Computer Science course for Diploma students, with the live sessions used for the internal assessment.' },
          { code: 'ESH', req: 'European School The Hague, founded August 2012, an accredited European School run by the Rijnlands Lyceum foundation, European Baccalaureate since 2019, priority for the children of Europol, Eurojust, European Patent Office and European Space Agency staff.', ours: 'The Dutch, English and French sections all reach the same Python and data ladder; the European Baccalaureate ICT option is supported with the general courses rather than a bespoke one.' },
          { code: 'Segbroek', req: 'Segbroek College on the Klaverstraat, mavo, havo and vwo, the largest secondary school in the city with 1,385 Hague pupils.', ours: 'A term of Python in the third year, ahead of the profielkeuze, is the cheapest way to find out whether code belongs in the profile; in the bovenbouw, data work in Python runs alongside wiskunde A or B. Whether the school timetables informatica is never assumed, because many do not.' },
          { code: 'Gymnasia', req: 'Gymnasium Haganum (708 pupils) and the Christelijk Gymnasium Sorghvliet (721), both vwo only, both categorical gymnasia in a city that still has two.', ours: 'For the gymnasium learner: problem solving and data structures, and the Python-to-machine-learning track, because a student who does Latin for six years can do recursion.' },
          { code: 'Johan de Witt', req: 'Johan de Witt on the Zusterstraat, vmbo through vwo, 990 Hague pupils, the school of the Schildersbuurt and the Transvaalkwartier.', ours: 'For the vmbo streams, the app and website courses whose output is something to show an MBO admissions tutor; for the havo and vwo streams, the Python ladder every other school on this list gets.' }
        ] },
        { kind: 'p', text: 'The Lycee Francais Vincent van Gogh on the Scheveningseweg, the German International School on the Van Bleiswijkstraat, the Maris College sites and the American School of The Hague across the line in Wassenaar complete the list. A school\'s name sets the words we use with the family; the level comes from the free lesson and nowhere else.' }
      ]
    },
    {
      id: 'transition', tint: 'tint', eyebrow: 'The transition at eleven',
      h2: 'BOVO Haaglanden: how a Hague child gets a secondary school, and what 99.2 percent means',
      intro: 'The Hague and its region run their own transition procedure, BOVO Haaglanden, with a digital application as the standard route and a minimum number of schools on every preference list.',
      body: [
        { kind: 'align', rows: [
          { code: 'The list', req: 'Parents submit a ranked list of schools through the parent portal, with a minimum length set by the procedure, and oversubscribed schools place by lot.', ours: 'Nothing we teach changes a lottery number, and we say so. A recurring online class is booked around the family rather than the school, so it survives whichever school the list produces.' },
          { code: 'The result', req: 'On 13 May 2026 BOVO reported that 99.2 percent of pupils were placed within the top three of their list. It did not publish the first-choice share in the same line.', ours: 'That is a top-three figure, not a first-choice figure, and the class teaches a learner to notice the difference: a placement statistic is only as strong as the rank it reports.' }
        ] }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'The Hague facts, with the office and the date on each',
      intro: 'Everything this page rests on, traced. One figure is an estimate and is labelled as one.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Population and origin', p: 'Statistics Netherlands, provisional, 1 January 2026: 569,468 residents, 285,140 households, 86,156 under fifteen. Origin, 2025: Netherlands 39 percent, rest of Europe 18, outside Europe 43; Suriname 44,769, Turkey 42,148, Morocco 32,680. In 1995 the Dutch-origin share was 63 percent.' },
          { h3: 'The Hindustani community, and why it has no number', p: 'The demographer Chan Choenni, writing on 22 October 2023, counts 163,413 Hindustani residents nationally by the statistics office\'s two-generation definition, 45 percent of the 363,142 people of Surinamese origin on 1 January 2023, and about 185,000 once a third generation of roughly 22,500 is added. The office records country of origin, never ethnicity or religion, so no figure exists for The Hague. The commonly cited estimate of about 50,000 in The Hague and its surroundings is an estimate, and this page calls it one.' },
          { h3: 'The districts', p: 'Stadsdeel populations, 2022: Escamp 128,967; Centrum 106,261; Segbroek 62,507; Scheveningen 59,992; Loosduinen 51,395; Haagse Hout 48,606; Leidschenveen-Ypenburg 48,273; Laak 47,305. Wijk populations on 1 January 2026 from Laakkwartier en Spoorwijk at 44,684 to Oostduinen at zero.' },
          { h3: 'The schools', p: 'National count: 138 primary establishments (46,396 pupils), 58 secondary (30,043). City listing 2025-26: 59 secondary schools; Segbroek College 1,385 Hague pupils, International School of The Hague 1,174, Johan de Witt 990, Christelijk Gymnasium Sorghvliet 721, Gymnasium Haganum 708.' },
          { h3: 'The international schools', p: 'British School in the Netherlands at Vlaskamp 19 and Vrouw Avenweg 640 and 422; International School of The Hague at Wijndaelerweg 11, 2554 BZ; European School The Hague, founded August 2012, Rijnlands Lyceum foundation, European Baccalaureate from 2019, 1,325 pupils in 2018-19; Lycee Francais Vincent van Gogh, Scheveningseweg 237; German International School, Van Bleiswijkstraat 125.' },
          { h3: 'The transition', p: 'BOVO Haaglanden, 13 May 2026: 99.2 percent of pupils placed within the top three of their preference list; digital application is the standard route; a minimum list length applies. Suriname became independent on 25 November 1975, and the migration the Hindustani community dates itself from surrounds that date.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no association with the municipality of The Hague, with BOVO Haaglanden, with any international organisation or with any school named above, and claims none. They appear because a page about coding classes in this city has to know which city it is.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Counted for two generations, present for four: build the model of a community that outlives its own category',
      intro: 'One real definition, one real national figure, and a generational model that shows the measured size of a community falling while the community itself grows.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Take the definition as it is', p: 'The statistics office counts a person as of Surinamese origin if they were born in Suriname, or were born in the Netherlands with at least one parent born there. A grandchild of the 1975 arrivals, born here to parents born here, is of Dutch origin. That is the rule, exactly, and the project changes nothing about it.' },
          { h3: '2. Write the generational model', p: 'A first generation arrives around 1975. Each generation has children; the learner sets a rate and a generation length and lets the program run to the present. It counts two things: everyone descended from the arrivals, and the subset the definition still sees. The two lines diverge the moment the first grandchild is born.' },
          { h3: '3. Read the divergence', p: 'With illustrative generation sizes of 100, 160, 256 and 410, the descendant community is 926 and the counted community is 260: 28 percent of it is visible. Choenni\'s national arithmetic runs the same way with real numbers: 163,413 counted, about 22,500 in a third generation the count cannot see, so roughly one in eight of the community is already outside the column, and the share grows every year.' }
        ] },
        { kind: 'table', caption: 'A community across four generations, and how much of it the two-generation definition still counts', head: ['Generation', 'Illustrative size', 'Counted as Surinamese origin?', 'Cumulative community', 'Cumulative counted'], rows: [
          ['First: arrived around 1975', '100', 'yes, born in Suriname', '100', '100'],
          ['Second: born in the Netherlands to first-generation parents', '160', 'yes, a parent born in Suriname', '260', '260'],
          ['Third: born to second-generation parents', '256', 'no, both parents born in the Netherlands', '516', '260'],
          ['Fourth', '410', 'no', '926', '260']
        ] },
        { kind: 'callout', h3: 'A falling number is not a shrinking group', p: 'From the fourth generation onward, every year the definition sees a smaller share of a larger community, and a naive reading of the origin statistics would report the Hindustani presence in The Hague declining. The Schildersbuurt would disagree. The lesson is not that the definition is wrong; the statistics office has good reasons for a rule that does not follow ancestry forever. The lesson is that a category has a horizon, that the horizon is part of the number, and that a learner who knows to ask where a definition stops has learned something that applies to every dataset with a category in it. The table was computed before this paragraph was written; the generation sizes are illustrative and labelled, and the 163,413 and 22,500 are Choenni\'s figures.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any number that comes with a category attached',
      intro: 'The same failure sits inside customer segments, patient cohorts and every dashboard with a dropdown. Practised first on the city\'s own origin table.',
      body: [
        { kind: 'table', caption: 'When the data has categories and the world has people', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Define', 'Read the definition of the category before reading the count', 'A two-generation rule read as a headcount of a community', 'A number you understand'],
          ['Horizon', 'Ask where the definition stops following the thing you care about', 'A falling series reported as a shrinking group', 'The shape of the blind spot'],
          ['Model', 'Simulate the thing and the category side by side', 'Confusing the measured with the real', 'Two lines, and the gap between them'],
          ['Label', 'Mark every estimate as an estimate, with its source', 'A regional guess quoted as a census figure', 'A page someone else can trust'],
          ['Locate', 'Say which boundary the count is for: city, region, country', 'The Hague and Haaglanden used as one word', 'A figure that matches the map']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A family tree of paper figures: two arrive, they have children, the children have children. The child colours everyone the rule can see and counts the coloured ones against the whole tree, then does it again a generation later. Ten minutes, no screen, and the child says the sentence: the family grew and the coloured ones did not.' },
          { h3: 'For teenagers', p: 'The generational model in Python with a birth rate, a generation length and the two-generation rule as a function. The learner plots the community against the counted subset from 1975 to 2026, then changes the rule to three generations and watches where the lines part.' },
          { h3: 'For adults', p: 'The same program on a customer base with an "active" definition, a patient list with an age cut-off, or a payroll with a contract type. Most business categories have a horizon nobody remembers setting, and a Hague analyst who works for a ministry has probably inherited several. Bring one if it is yours to share.' }
        ] },
        { kind: 'p', text: 'The population, origin and school counts, the stadsdeel and wijk figures, the school addresses, the BOVO result and Choenni\'s national arithmetic are published by the offices and authors named in the sentences that use them. The four generation sizes in the table are illustrative and labelled; the 50,000 regional figure is presented as the estimate it is, and nothing on this page derives a Hague ethnic count that no office has published.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a paper family tree to a model with the definition built in',
    intro: 'One free class finds the rung. The school system the child is on only tells us the vocabulary.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Who the rule can see', p: 'Children colour a family tree by a rule and count the coloured figures against the whole.', courses: ['kids-coding-blocks-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'A rule as a function', p: 'Learners write the two-generation rule in Python and run it over a made-up family.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Two lines that part', p: 'Teenagers model a community and its counted subset from 1975 to now, then change the rule.', courses: ['python-complete-masterclass-teens', 'ib-diploma-computer-science-course'] },
      { band: 'Ages 18 to 67', h3: 'Categories with a horizon at work', p: 'Adults find the definition behind a business category and model what it hides.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'statistics-probability-maths-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'When the ministries in The Hague are buying AI by the department, why teach a child here to write code?',
    intro: 'Ask an assistant how many Hindustani people live in The Hague and it will give you a number. It will not tell you that no office has ever produced one.',
    p1: 'A fluent tool answers the question it was asked. It does not, unprompted, say that the statistics office counts countries of origin rather than communities, that the count stops after two generations, or that the confident figure it just produced is somebody\'s estimate passed through six websites. The person who knows to ask those things is the person who has once built the model themselves and watched the counted line fall away from the real one.',
    p2: 'That is what the class trains, and it is why the learner still writes the code rather than requesting it: not the syntax, which the tools now supply, but the reflex of asking what the category is, where it stops, and what would be different if it stopped somewhere else. A thirteen-year-old in Ypenburg who has done that with the origin table will do it with a departmental dashboard at twenty-three without being told, and will be the person in the room who says: which definition is that. The Hague employs a great many people whose whole job is that question.',
    closer: 'So the answer for a Hague parent is a plain one: the code is cheaper than it was and the judgement is not, and the only method anyone has found for growing the judgement is to have the learner build the thing and then find the horizon in it.',
    blogAnchor: 'is coding still worth learning in 2026, now that AI writes it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a city that is forty minutes wide by tram',
    intro: 'Kijkduin to Leidschenveen is most of an hour on public transport, and a Hague week already has the school run, the office and the sea in it. A class that arrives over the connection adds nothing to the timetable but the lesson.',
    cells: [
      { h3: 'No crossing of the city', p: 'The lesson is at the kitchen table in Escamp, Segbroek or Ypenburg at a fixed time. Tram 1, tram 9 and the RandstadRail are for other things.' },
      { h3: 'English, with the Hague words kept', p: 'Taught in English. Groep, havo, vwo, Key Stage, MYP and the BOVO list are used as the family hears them, because the family has to live with them.' },
      { h3: 'One free lesson that ends in a decision', p: 'A real task, a level, a named course and a slot. No card and no commitment until the family has watched a lesson happen.' },
      { h3: 'Five to ten learners a group, sorted by what they can do', p: 'A group is assembled from level and goal, nothing else. The school system, the stadsdeel and the country the grandparents left are not inputs to it.' },
      { h3: 'Eight lessons a month on the regio Midden calendar', p: 'Two lessons a week at a recurring time. Zuid-Holland sits in regio Midden for school holidays, so the summer break falls a week apart from Amsterdam\'s, and that is settled before the slot is.' },
      { h3: 'Where the hours line up', p: 'By the time a Hague family sits down to dinner the teacher\'s day in India is almost over, three and a half hours ahead in summer and four and a half in winter. The slots that suit both ends are the ones after school, before dinner and at the weekend, and the one the family keeps is fixed during the free lesson.' }
    ],
    spec: { title: 'Three-year cycles', p: 'Embassy, court, patent office and agency families in The Hague tend to be posted for three years and then moved. A course that lives on a laptop and a fixed time in the family\'s own calendar goes to the next posting, and a learner who started the Python course in Benoordenhout can finish it in Geneva or Brussels without a change of teacher.' }
  },

  fees: {
    h2: 'One free class, then USD 100 or USD 150 a month, published here',
    intro: 'Stated in full before anyone is asked for a phone number.',
    first: 'A full lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner and one teacher.',
    closer: 'Dollars, because the international tariff is published once and has no euro edition; The Hague pays what every other city outside India pays, with no joining fee. Course and slot are settled in the free lesson, and only then is payment arranged, over WhatsApp. What happens with a pause, a change of plan or a missed lesson is written up on the pricing page.'
  },

  reviewsH2: 'What families and learners say',

  book: {
    h2: 'Send the learner\'s level, and the school system if it helps',
    intro: 'The opening task could be a paper family tree and a colouring rule, a Python model of a community and its counted subset, or a departmental category from work that you have never seen the definition of.',
    success: 'Thank you. Your The Hague class request has been sent.'
  },

  faq: {
    h2: 'The Hague coding class questions',
    intro: 'The city, its five school systems, the transition, the teaching and the terms.',
    items: [
      { q: 'How many Hindustani people live in The Hague, and why does the page not just say?', a: 'Because no office has counted them. Statistics Netherlands records country of origin for two generations, never ethnicity, so the 44,769 residents of Surinamese origin include Hindustani, Creole and Javanese families together, and a grandchild of the 1975 arrivals is of Dutch origin. The demographer Chan Choenni puts the national Hindustani figure at 163,413 by that rule and about 185,000 with a third generation added. The often-quoted 50,000 for The Hague and its surroundings is an estimate, and the page labels it one.' },
      { q: 'Our child is at the British School in the Netherlands. Does the ladder fit the English system?', a: 'Yes. The BSN runs the National Curriculum for England at Vlaskamp 19 and on the Vrouw Avenweg, with IGCSE and A level in the senior years. Key Stage 2 pupils start with blocks and Python by year group, Years 10 and 11 take the Cambridge IGCSE Computer Science 0478 course directly, and Sixth Form students the A level.' },
      { q: 'Our child is at the International School of The Hague or the European School. Which courses match?', a: 'For ISH at Wijndaelerweg 11, placement is by MYP year and Diploma students use the IB Computer Science course. For the European School, founded in 2012 with the European Baccalaureate since 2019, the Dutch, English and French sections all reach the same Python and data ladder, and the Baccalaureate ICT option is supported through the general courses.' },
      { q: 'What does BOVO Haaglanden\'s 99.2 percent actually mean for our family?', a: 'That 99.2 percent of pupils in the 2026 first round were placed within the top three of their preference list, as BOVO reported on 13 May 2026. It is a top-three figure, not a first-choice figure, and the difference matters. No class changes a lottery outcome; what a recurring online class does is survive whichever school the list produces.' },
      { q: 'Is the teaching in English or Dutch?', a: 'English, which is the one language a city with five school systems and two hundred international organisations actually shares. Dutch school vocabulary is kept exactly as the school uses it. Dutch-language teaching is not something we offer, and nothing on this page suggests otherwise.' },
      { q: 'What time are classes for a family in The Hague?', a: 'India stays on one clock all year and the Netherlands does not, so the gap between a Hague afternoon and the teacher\'s evening is four and a half hours in winter and three and a half in summer. After-school, pre-dinner and weekend times are the ones that work at both ends, and the family picks its recurring slot during the free lesson, before anything is paid.' },
      { q: 'What happens in the free The Hague class?', a: 'We work out what the learner can do and set one task there. A child colours a paper family tree by a rule and counts. A teenager writes the two-generation rule as a function and plots the two lines. An adult brings a category from work and finds its definition. By the end of the hour the family has a course name, a level, a weekly time and the price in dollars, and has paid nothing for any of it.' },
      { q: 'Does Modern Age Coders have a centre anywhere in The Hague?', a: 'No. No premises are claimed in The Hague, in Wassenaar, in Rijswijk or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The phone number on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do The Hague coding classes cost?', a: 'The first class is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month for one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How large is a group for learners in The Hague?', a: 'Five to ten learners, matched on level, pace and goal rather than on age, school system or stadsdeel. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'Where this page sits in the series',
    html: 'Above it is the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, which owns the national curriculum argument and lists every course. Beside it are <a class="cg-inline-link" href="/coding-classes-in-amsterdam">Amsterdam</a>, <a class="cg-inline-link" href="/coding-classes-in-amstelveen">Amstelveen</a> and <a class="cg-inline-link" href="/coding-classes-in-eindhoven">Eindhoven</a>, each written the way this one is. For a learner whose goal is a trained model rather than a program, the right door is <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a>. Below this page sit <a class="cg-inline-link" href="/coding-classes-in-the-hague-centrum">Den Haag Centrum</a>, <a class="cg-inline-link" href="/coding-classes-in-escamp">Escamp</a>, <a class="cg-inline-link" href="/coding-classes-in-scheveningen">Scheveningen</a> , <a class="cg-inline-link" href="/coding-classes-in-haagse-hout">Haagse Hout</a>, <a class="cg-inline-link" href="/coding-classes-in-laak">Laak</a> and <a class="cg-inline-link" href="/coding-classes-in-leidschenveen-ypenburg">Leidschenveen-Ypenburg</a>, six of the eight stadsdeel pages, with Loosduinen and Segbroek on their way.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-amsterdam', label: 'Amsterdam' },
    { href: '/coding-classes-in-eindhoven', label: 'Eindhoven' }
  ],

  personalityCss: `
.cg-root.cg-dhg .cg-hero-grid { grid-template-columns: 1.2fr 1fr; align-items: center; }
.cg-root.cg-dhg .cg-section-head h2 { letter-spacing: -0.02em; }
.cg-root.cg-dhg .cg-capsule { padding: 1.2rem 1.4rem 1.2rem 1.6rem; border-left-width: 8px; }
.cg-root.cg-dhg .cg-eyebrow { font-weight: 500; letter-spacing: 0.2em; }
.cg-root.cg-dhg .cg-align-row { border-bottom: 1px solid var(--cg-rule); }
.cg-root.cg-dhg .cg-ladder { gap: clamp(1.5rem, 3.5vw, 2.5rem); }
.cg-root.cg-dhg .cg-fact-k { font-variant-numeric: tabular-nums; }
.cg-root.cg-dhg .cg-pick-note { line-height: 1.55; }
.cg-root.cg-dhg .cg-price strong { font-size: 2.2rem; }
`,

  dossier: {
    curriculumAuthority: 'The Hague, Zuid-Holland: five school systems inside one municipality. Dutch (138 primary, 58 secondary establishments per CBS; city listing 59 secondary schools, 25,675 Hague pupils 2025-26: Segbroek College 1,385, Johan de Witt 990, Gymnasium Haganum 708, Christelijk Gymnasium Sorghvliet 721), English (British School in the Netherlands: Vlaskamp 19; Vrouw Avenweg 640 and 422; IGCSE, A level), IB (International School of The Hague, Wijndaelerweg 11, 1,174 pupils), European Baccalaureate (European School The Hague, founded August 2012, Rijnlands Lyceum foundation, EB from 2019, priority for Europol/Eurojust/EPO/ESA families), French (Lycee Francais Vincent van Gogh, Scheveningseweg 237) and German (Van Bleiswijkstraat 125). Transition via BOVO Haaglanden (99.2 percent placed in top three, 13 May 2026). Regio Midden holidays. The hub owns the national digital-literacy curriculum; this page owns The Hague\'s systems and the origin table.',
    localProject: 'A category with a horizon: the community outlives its own definition. CBS counts Surinamese origin for two generations (born in Suriname, or born in NL with a parent born there); the third generation is Dutch origin. Choenni (22 Oct 2023): 163,413 Hindustani nationally by that rule, 45 percent of 363,142 Surinamese-origin residents on 1 Jan 2023, about 185,000 with a third generation of about 22,500 added; The Hague has 44,769 Surinamese-origin residents (2025) and no Hindustani count exists. The learner models four generations (illustrative 100, 160, 256, 410): community 926, counted 260, 28 percent visible, and the counted line falls away from the community line from the third generation. Distinct from construct validity (Washington: the instrument measures something else), from the reclassification break (Mahdah: the label stayed and the boundary moved) and from the stock/flow model (Amstelveen): the flaw here is a definition that stops following the thing it names. Computed before writing; generation sizes labelled illustrative.',
    requiredMentions: [
      'Wijndaelerweg 11',
      'Vlaskamp 19',
      'Vrouw Avenweg',
      'Laakkwartier en Spoorwijk',
      '44,769',
      'Schildersbuurt',
      '99.2 percent',
      '163,413',
      '25 November 1975',
      'Segbroek College',
      'Gymnasium Haganum',
      'Sorghvliet',
      'Rijnlands Lyceum'
    ],
    sources: [
      { claim: 'Den Haag 569,468 residents on 1 January 2026 (CBS provisional); 285,140 households; 86,156 under 15; 74,245 aged 15 to 25; 138 primary schools (46,396 pupils); 58 secondary (30,043); 45 wijken, 115 buurten; origin 2025: Netherlands 39%, Europe 18%, outside Europe 43%; Suriname 44,769, Turkey 42,148, Morocco 32,680; Dutch-origin share 63% in 1995.', url: 'https://allecijfers.nl/gemeente/den-haag/' },
      { claim: 'Forty-four wijken on 1 January 2026 from Laakkwartier en Spoorwijk 44,684, Schildersbuurt 30,102, Bouwlust 29,012, Ypenburg 26,358, Wateringse Veld 24,628 down to Oostduinen 0; sum 569,460.', url: 'https://allecijfers.nl/ranglijst/grootste-en-kleinste-wijken-in-inwoners-in-de-gemeente-den-haag/' },
      { claim: 'Stadsdeel populations 2022: Escamp 128,967; Centrum 106,261; Segbroek 62,507; Scheveningen 59,992; Loosduinen 51,395; Haagse Hout 48,606; Leidschenveen-Ypenburg 48,273; Laak 47,305. Laak contains Laakkwartier en Spoorwijk and Binckhorst; Leidschenveen-Ypenburg contains Leidschenveen, Ypenburg, Forepark, Hoornwijk; Escamp contains Bouwlust, Morgenstond, Moerwijk, Leyenburg, Rustenburg en Oostbroek, Wateringse Veld, Zuiderpark.', url: 'https://nl.wikipedia.org/wiki/Den_Haag' },
      { claim: 'Secondary schools in Den Haag: 59 schools; 25,675 Hague-resident pupils 2025-26; Segbroek College (Klaverstraat) 1,385 mavo/havo/vwo; International School of The Hague 1,174; Johan de Witt (Zusterstraat) 990; Christelijk Gymnasium Sorghvliet 721 vwo; Gymnasium Haganum 708 vwo; Maris College; praktijkonderwijs at De Poort, Hofstede College, Esloo College.', url: 'https://allecijfers.nl/middelbare-scholen-overzicht/den-haag/' },
      { claim: 'International School of The Hague visiting address Wijndaelerweg 11, 2554 BZ Den Haag, primary and secondary on one site.', url: 'https://www.ishthehague.nl/about/contact-us' },
      { claim: 'British School in the Netherlands campuses: Junior School Vlaskamp, Vlaskamp 19, 2592 AA; Junior School Leidschenveen, Vrouw Avenweg 640, 2493 WZ; Senior School Leidschenveen, Vrouw Avenweg 422, 2493 WX; Senior School Voorschoten.', url: 'https://www.britishschool.nl/our-school/four-campuses/our-campuses' },
      { claim: 'European School The Hague: founded August 2012; accredited European School managed by the Rijnlands Lyceum foundation; European Baccalaureate accreditation June 2018, first exams 2019; 1,325 pupils in 2018-19; language sections Dutch, English, French, German, Spanish (primary); priority for children of Europol, Eurojust, European Patent Office and European Space Agency staff.', url: 'https://en.wikipedia.org/wiki/European_School_The_Hague' },
      { claim: 'Lycee Francais Vincent van Gogh, Scheveningseweg 237, 2584 AA; German International School of The Hague, Van Bleiswijkstraat 125, 2582 LB; American School of The Hague in Wassenaar.', url: 'https://www.iamexpat.nl/education/primary-secondary-education/international-schools-netherlands/the-hague' },
      { claim: 'BOVO Haaglanden: 99.2% of pupils placed within the top three of their school list (announced 13 May 2026); digital application is the standard route; a minimum number of schools on the preference list applies.', url: 'https://www.bovohaaglanden.nl/' },
      { claim: 'Choenni, 22 October 2023: 163,413 Hindostanen by the CBS two-generation definition on 1 January 2023, 45% of 363,142 Surinamese-origin residents; about 185,000 including an estimated third generation of about 22,500 (45% of about 50,000 third-generation Surinamese); CBS counts only first and second generation.', url: 'https://www.hindorama.com/de-hindostaanse-gemeenschap-in-nederland-anno-2023-een-beschouwing-dr-chan-choenni/' },
      { claim: 'About 50,000 Hindoestanen in Den Haag and surroundings (estimate), concentrated in the Schilderswijk and Transvaal; Suriname independent 25 November 1975 with migration just before and after; CBS records country of origin, not ethnicity or religion.', url: 'https://nl.wikipedia.org/wiki/Hindoestanen' },
      { claim: 'About 26% of jobs in The Hague are with the national government or international institutions; roughly 200 international governmental organisations.', url: 'https://en.wikipedia.org/wiki/The_Hague' }
    ],
    rejectedClaims: [
      'The addresses of the two European School The Hague sites. The Wikipedia summary put the primary at Oostduinlaan 50 and the secondary at the former Aloysius College, which is the same address; the school\'s contact page could not be fetched. No ESH address is stated.',
      'The first-choice placement share in BOVO Haaglanden 2026 and the number of pupils. Only the 99.2% top-three figure was published on the page read; the page says so.',
      'A Hague-only Hindustani count. None exists; the 50,000 regional figure is presented as an estimate with its source, never as a statistic.',
      'A wijk-to-stadsdeel mapping for Centrum, Segbroek, Scheveningen, Haagse Hout and Loosduinen. Only Escamp, Laak and Leidschenveen-Ypenburg were confirmed in the source read; the other assignments in the district section are limited to wijken whose stadsdeel is not in doubt, and the district pages will verify each.',
      'Anything the Netherlands hub owns: the nine SLO core objectives, the March 2024 finalisation as a spine, the groep 8 streaming advice as an argument, the CET/CEST offset paragraph.'
    ]
  }
};
