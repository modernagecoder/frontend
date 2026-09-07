'use strict';
// Province of Utrecht: the province page, slug carries -province because the
// city owns the bare name. About the spread: 26 municipalities around one
// city. Spine: the province is the smallest by total area, second smallest by
// land, fifth by population and third by density. "The smallest province" is
// true on exactly one axis, and a superlative without its measure is not a fact.

module.exports = {
  slug: 'coding-classes-in-utrecht-province',
  code: 'utp',
  accent: '#75446E',
  accentRationale: 'Province of Utrecht: a muted plum for the Heuvelrug heather, kept below the chroma where purple becomes the retired look',
  pageType: 'governorate',
  place: {
    name: 'the province of Utrecht',
    eyebrow: 'Province of Utrecht',
    schemaType: 'AdministrativeArea',
    chain: [{ type: 'Country', name: 'Netherlands' }]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Utrecht city', href: '/coding-classes-in-utrecht' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Province of Utrecht, Netherlands',
  title: 'Coding Classes in the Province of Utrecht | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across the province of Utrecht, ages 6 to 67: Amersfoort, Veenendaal, Nieuwegein, Zeist, Houten, Woerden and 20 more towns.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in all 26 municipalities of the province of Utrecht, built on a province that is the smallest, the second smallest, the fifth and the third, depending on the measure.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'game-development-masterclass-for-kids',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for the Province of Utrecht',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across the 26 municipalities of the province of Utrecht, taught in English.'
  },

  h1: 'Coding classes in the province of Utrecht, the smallest province in the country on one measure and the fifth largest on another',
  capsuleQ: 'What are the best coding classes in the province of Utrecht?',
  capsule: 'Coding classes in the province of Utrecht serve 1,415,104 people in 26 municipalities (Statistics Netherlands, 1 January 2026), of whom 378,121 live in the city that shares the province\'s name and has a page of its own. The province is the smallest of the twelve by total area, the second smallest by land, the fifth by population and the third by density, and which of those a person quotes tells you what they wanted to say. From Renswoude to the city itself the offer is one class, live online, in English, for learners from 6 to 67, with the first lesson free and a monthly fee of USD 100 for a group of five to ten or USD 150 for private tuition.',
  lead: '"Utrecht is the smallest province" is a sentence everyone in Amersfoort or Veenendaal has heard, and it is true, on exactly one of the four measures a province is normally ranked by. On the other three it is second, fifth and third. A child who can build the small program that produces all four rankings from the same twelve rows has learned what a superlative is worth, which is nothing until its measure is named.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in the province of Utrecht.',

  picks: {
    eyebrow: 'Course picks for the province of Utrecht',
    h2: 'Four courses for a province of commuter towns and one old city',
    intro: 'A child in Houten, a teenager in Amersfoort, a student at the Hogeschool in Utrecht and a working parent in Nieuwegein: four doors, chosen so that a province built around one city has something for the twenty-five municipalities that are not it.',
    items: [
      { course: 'game-development-masterclass-for-kids', band: 'Ages 8 to 12', note: 'Scratch, Roblox and Minecraft games, in English, for the groep 5 to 8 child in Zeist or Leusden who already builds worlds for fun.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Two years from a blank file to advanced Python, whether or not the school in Amersfoort or Veenendaal timetables informatica.' },
      { course: 'full-stack-web-development-masterclass-college', band: 'College and adult', note: 'React, Node and deployment for the HU or UU student who wants something running at a public address before graduation.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Excel, SQL, Python and Power BI for the commuter on the A12 or the A27 whose job is a spreadsheet nobody else understands.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'The province today',
      h2: 'One city, twenty-five towns, and a province that has grown by a third in thirty years',
      intro: 'Statistics Netherlands counted 1,415,104 residents on 1 January 2026 in 645,543 households, 227,444 of them under fifteen and 175,696 aged fifteen to twenty-five, on 1,484.48 square kilometres of land inside 1,560.04 of territory. In 1995 the province held 1,063,460 people; the rise is 33 percent, about 11,300 a year for thirty-one years.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The city and the rest', p: 'Utrecht city holds 378,121 people, 26.7 percent of the province, and has its own page. Amersfoort at 163,764 is a clear second and gets a page in this series. The other 24 municipalities, from Veenendaal at 70,779 to Renswoude at 5,908, hold 873,219 people between them, and this page is theirs.' },
          { h3: 'The schools', p: '531 primary establishments teach 123,230 pupils and 112 secondary establishments 78,604. The city has the international school and the two gymnasia; Amersfoort has its own set; the smaller towns send their teenagers along the railway lines to whichever of the two is nearer.' },
          { h3: 'Thirteen people to the hectare', p: 'At 949 residents per square kilometre of land the province is the third densest in the country, behind only Zuid-Holland and Noord-Holland, and ahead of Noord-Brabant by a factor of almost two. It does not feel that way in the Lopikerwaard, which is the point of the project below.' }
        ] },
        { kind: 'spec', title: 'A capital that is also the province', p: 'Utrecht is the only Dutch province whose capital carries the province\'s exact name, which is why this page has "province" in its address. A search for Utrecht schools, Utrecht population or Utrecht coding classes returns two different places, and the city page and this one are careful to say which they mean.' }
      ]
    },
    {
      id: 'spread', tint: 'tint', eyebrow: 'The spread',
      h2: 'From the Vecht to the Lek: all 26 municipalities, by population',
      intro: 'Five landscapes the province names, plus the city\'s ring, each with its municipalities and their 1 January 2026 population, Renswoude included.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The city and its ring', p: 'Utrecht 378,121, with a page of its own; Zeist 66,648; De Bilt 43,687; Bunnik 16,402. Within a quarter of an hour of the city by train or bike, and in De Bilt the national weather service and its instruments.' },
          { h3: 'Eemland: Amersfoort and the north-east', p: '<a class="cg-inline-link" href="/coding-classes-in-amersfoort">Amersfoort</a> 163,764, the second city, with its own page; Soest 47,853; Leusden 32,287; Baarn 25,435; Bunschoten 22,905; Woudenberg 15,099; Eemnes 10,065. The Eem river, the Grebbelinie and the only part of the province that looks toward Amsterdam rather than Utrecht.' },
          { h3: 'The Heuvelrug and the Gelderse Vallei', p: 'Veenendaal 70,779, third in the province and a page to come; Utrechtse Heuvelrug 51,107, the wooded ridge; Rhenen 20,457; Renswoude 5,908, the smallest municipality. The Heuvelrug is the one part of the province with anything that could be called a hill.' },
          { h3: 'The Kromme Rijn and the Lek', p: 'Nieuwegein 68,257; Houten 50,952, the town planned around the bicycle; IJsselstein 33,171; Wijk bij Duurstede 23,707; Vijfheerenlanden 63,246, on the far side of the Lek. Commuter towns with a river between them and the city.' },
          { h3: 'The Vechtstreek and the Ronde Venen', p: 'Stichtse Vecht 66,196, the villages along the Vecht from Maarssen to Loenen; De Ronde Venen 45,749, the lakes and the peat. Half an hour from Utrecht and half an hour from Amsterdam, and split between them in where people work.' },
          { h3: 'The Lopikerwaard and the west', p: 'Woerden 54,199; Lopik 14,802; Montfoort 13,795; Oudewater 10,513. The Groene Hart end of the province: dairy, peat, small towns, and the longest drive to a secondary school in the province.' }
        ] },
        { kind: 'p', text: 'All 26 are above. The city page zooms in; this one stays at the scale where Montfoort is visible.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'The offices and dates behind every figure on this page',
      intro: 'Including the twelve-row table the project is built from.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The province, counted', p: 'Statistics Netherlands, provisional, 1 January 2026: 1,415,104 residents in 26 municipalities; 645,543 households; 227,444 under fifteen; 175,696 aged fifteen to twenty-five; 531 primary establishments with 123,230 pupils and 112 secondary with 78,604; land 148,448 hectares, territory 156,004; density 949; 1,063,460 residents in 1995.' },
          { h3: 'The list', p: 'All 26 municipalities with their 1 January 2026 populations from the municipal registers, from Utrecht at 378,121 to Renswoude at 5,908. The 26 figures sum to the provincial total exactly, and that is checked in class before the ranking work begins.' },
          { h3: 'The twelve provinces', p: 'From the Dutch encyclopaedia\'s table of provinces at the end of 2025: Utrecht 1,415,322 people on 1,485.46 square kilometres of land and 1,560.05 in total, density 953. The two population figures for the province, 1,415,104 and 1,415,322, differ by 218 across two sources for nearly the same date, and the page keeps both.' },
          { h3: 'The four rankings', p: 'From that table: by total area Utrecht is the smallest of the twelve at 1,560.05 square kilometres; by land area it is second smallest at 1,485.46, behind Flevoland at 1,411.63; by population it is fifth, behind Zuid-Holland, Noord-Holland, Noord-Brabant and Gelderland; by density it is third at 953, behind Zuid-Holland at 1,438 and Noord-Holland at 1,130.' },
          { h3: 'The capital and the regions', p: 'The capital is Utrecht; the Commissaris van de Koning is Hans Oosters; the province names the Utrechtse Heuvelrug, Eemland, the Kromme Rijnstreek, the Vechtstreek and the Lopikerwaard as its landscapes.' },
          { h3: 'The holiday region', p: 'The province of Utrecht takes its school holidays with regio Midden, alongside Zuid-Holland and the northern half of Gelderland, by the Rijksoverheid\'s regional division.' }
        ] },
        { kind: 'p', text: 'The province, its 26 municipalities and their schools are named here because a page claiming to serve them should be able to list them; none has any connection with Modern Age Coders and none is implied.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Smallest, second smallest, fifth, third: build the program that ranks one province four ways from the same twelve rows',
      intro: 'Twelve provinces, four columns, and a superlative that is true in one column and false in the other three.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Load the twelve rows', p: 'Each province with its population, its land area, its total area including water, and the density that follows from the first two. Twelve rows, four numbers each, all from one published table for the same date.' },
          { h3: '2. Rank by each column in turn', p: 'The learner sorts the same table four times. By total area Utrecht comes last: 1,560.05 square kilometres, the smallest province. By land area it comes eleventh, because Flevoland has 1,411.63 square kilometres of dry land inside 2,412.31 of territory. By population it comes fifth. By density it comes third.' },
          { h3: '3. Say the sentence properly', p: '"Utrecht is the smallest province" survives only with "by total area" attached. "Utrecht is a small province" is false by population, where it is in the top half, and by density, where it is nearly at the top. Every province has a column in which it looks impressive and one in which it does not, and the learner finds both for all twelve.' }
        ] },
        { kind: 'table', caption: 'The province of Utrecht in the table of twelve, end of 2025: one row, four rankings', head: ['Measure', 'Utrecht\'s figure', 'Rank among the twelve', 'Who is at the extreme'], rows: [
          ['Total area, including water', '1,560.05 km2', '12th of 12, the smallest', 'Friesland largest at 5,748.77'],
          ['Land area', '1,485.46 km2', '11th of 12', 'Flevoland smallest at 1,411.63; Gelderland largest at 4,963.71'],
          ['Population', '1,415,322', '5th of 12', 'Zuid-Holland largest at 3,882,709; Zeeland smallest at 394,514'],
          ['Density, people per km2 of land', '953', '3rd of 12', 'Zuid-Holland densest at 1,438; Drenthe sparsest at 193']
        ] },
        { kind: 'callout', h3: 'A superlative without its measure is not a fact', p: 'Smallest, largest, densest, fastest-growing: each is a rank, each rank belongs to a column, and the same row can be first in one column and last in another. The sentence "Utrecht is the smallest province" is not wrong; it is incomplete in a way that lets the reader supply the wrong column. A learner who has sorted the twelve rows four ways will ask "by what?" of every superlative they meet, from "the biggest market" to "the best school", and will usually find that the answer changes the sentence. The table was computed before this paragraph was written; every figure is from the published table of provinces and the ranks are a sort.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any sentence with a superlative in it',
      intro: 'Biggest customer, top school, leading market, smallest team: every one of them is a rank on a column somebody chose. Rehearsed on the province\'s own row before anything from work.',
      body: [
        { kind: 'table', caption: 'When a claim is a rank in disguise', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Name the column', 'Attach "by what" to every superlative before repeating it', 'Smallest by area read as small by people', 'A claim that can be checked'],
          ['Rank every column', 'Sort the same table by each measure and keep all the orders', 'One flattering order presented as the order', 'The whole picture'],
          ['Find the contradiction', 'Look for the row that is first in one column and last in another', 'A superlative that hides its opposite', 'The most interesting fact in the table'],
          ['Check the denominator', 'Density is one column divided by another; ask which area', 'Land and total area quietly swapped', 'A rank that means what it says'],
          ['Date the table', 'All twelve rows from one source and one date', 'Two population figures 218 apart read as a change', 'Comparable rows']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Twelve cards, one per province, each with a picture and two numbers: people and land. The child lines them up by people, then by land, and finds the card that moved furthest. The sentence is theirs at the end: which one is smallest depends on what you are counting.' },
          { h3: 'For teenagers', p: 'The twelve rows in Python with four sorts and a printed rank table, then a function that takes any row and returns the column in which it ranks best and the one in which it ranks worst. Then the harder question: write one true sentence about the province that contains a superlative and its measure.' },
          { h3: 'For adults', p: 'The same program on a customer list, a branch league or a product range from work, where "our biggest" is said in every meeting and means something different to each person saying it. A real one, if it can leave the office, is the best material.' }
        ] },
        { kind: 'p', text: 'The provincial totals, the 26 municipal populations, the areas and the twelve-province table are published by the offices and the encyclopaedia entry named in the sentences that use them. The four rankings are sorts of the published table and nothing on this page derives a Utrecht figure that no office has published.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From twelve cards to a ranking function that names its column',
    intro: 'Where a learner starts is found in the free lesson; where they live has no bearing.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Smallest by what', p: 'Children line up twelve cards two ways and find the one that moves the most.', courses: ['kids-coding-blocks-masterclass', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Four sorts of one table', p: 'Learners sort a list by four columns in Python and compare the orders.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Best column, worst column', p: 'Teenagers write the function that finds where any row ranks best and worst, and defend a sentence.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Superlatives at work', p: 'Adults rebuild a league from their own field with every column ranked, not only the flattering one.', courses: ['data-analysis-mastery-course-college', 'full-stack-web-development-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will tell a child in Amersfoort that Utrecht is the smallest province. Why teach the child to check?',
    intro: 'Because the assistant is right, in one column, and will not say which one unless the child knows to ask.',
    p1: 'Ask a tool for the smallest Dutch province and it says Utrecht with confidence, and it is right by total area. Ask for the smallest by land and it should say Flevoland, and it may or may not, depending on which sentence of which page it weighed. Neither answer is invented. The thing that is missing is the column, and a tool does not volunteer the column because the question did not ask for it. A person who has sorted the twelve rows four ways knows that the column is the whole question.',
    p2: 'That is what the class trains, and it is why the sorting is still done by the learner rather than requested: not the syntax, which the tools now write, but the reflex of asking "by what?" before believing a superlative and of running the other sorts to see whether the answer survives. A twelve-year-old in Houten who has done that with the provinces will do it with "the top school" at sixteen and "our biggest customer" at twenty-six without being told. The tools between now and then will change; the reflex will not.',
    closer: 'So for a parent in the province of Utrecht the case for coding in 2026 is not that the child will sort tables for a living. It is that knowing a superlative is a rank in a column, and that the column is a choice, is a skill that transfers to every claim the child will ever be sold, and it is taught in only one known way: the learner builds the table and sorts it four times.',
    blogAnchor: 'is coding still worth learning in 2026, now that AI writes it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a province where every road leads to one station',
    intro: 'The province is built like a wheel: the city at the hub, the towns on the spokes, and Utrecht Centraal at the centre of the country\'s railway. A child in Woerden or Wijk bij Duurstede does not need the wheel for a class that comes to the house.',
    cells: [
      { h3: 'Not one more journey through the hub', p: 'The lesson happens at home in Houten, Soest or Vianen at a fixed hour. The A12, the A27 and the train through Utrecht Centraal are for other things.' },
      { h3: 'Lessons in English, school words in Dutch', p: 'Groep, havo, vwo and profielkeuze keep their Dutch form; everything around them is said in English, the language the province\'s international families use with each other.' },
      { h3: 'The free hour, and what comes out of it', p: 'One task at the learner\'s level, then a course name and a start rung, arranged without a card.' },
      { h3: 'Grouped by ability, not by postcode', p: 'What a learner can already do decides the group; Eemland or Lopikerwaard does not.' },
      { h3: 'Two lessons a week on regio Midden\'s calendar', p: 'The province takes its school holidays with regio Midden, so the summer weeks fall in the same fortnight as Zuid-Holland\'s and a different one from Noord-Holland\'s in most years. They are agreed before the slot is fixed.' },
      { h3: 'Half past four here is nine in India, or eight', p: 'Indian Standard Time does not shift and Dutch time does, so an afternoon in Zeist runs four and a half hours behind the teacher\'s evening in winter and three and a half in summer; late afternoons, early evenings and weekends are the hours that fit both.' }
    ],
    spec: { title: 'The province the whole country passes through', p: 'Because every railway line crosses the province, families here are used to being on the way to somewhere. A class fixed to a weekly time in the household\'s own calendar is the one appointment that does not involve a platform.' }
  },

  fees: {
    h2: 'What the twenty-six municipalities pay: nothing, then USD 100 or USD 150',
    intro: 'The whole tariff, printed before anyone is asked for a phone number.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'Dollars, one rate worldwide outside India, no euro edition, Zeist and Renswoude charged alike. Course and hour first, in the free lesson; money afterwards, over WhatsApp. The pricing page covers pauses, changes and missed lessons.'
  },

  reviewsH2: 'Six reviews, as Google shows them',

  book: {
    h2: 'Give us the level; the town is optional',
    intro: 'The opening exercise could be twelve province cards, a Python table sorted four ways, or a league from work in which "biggest" has never been given its column.',
    success: 'Thank you. Your province of Utrecht class request has been sent.'
  },

  faq: {
    h2: 'Province of Utrecht coding class questions',
    intro: 'The province, its towns, the rankings, the teaching and the terms.',
    items: [
      { q: 'Is Utrecht really the smallest province in the Netherlands?', a: 'By total area, yes: 1,560.05 square kilometres including water, the least of the twelve. By land area it is second smallest, behind Flevoland at 1,411.63. By population it is fifth, with 1,415,104 residents on 1 January 2026, and by density third, at 949 to the square kilometre. The four rankings from one table are the project on this page.' },
      { q: 'Which towns in the province get their own page, and which are covered here?', a: 'Utrecht city has a page already. Amersfoort and Veenendaal follow in this series. The other 23, from Nieuwegein and Zeist to Oudewater, Eemnes and Renswoude, are listed above with their populations; the class is identical wherever the laptop is.' },
      { q: 'When I search for Utrecht, how do I know whether a page means the city or the province?', a: 'This page says "province" in its address and its title, and the city page does not. Utrecht is the only Dutch province whose capital carries its exact name, so the distinction has to be made in words every time, and both pages make it in their first sentence.' },
      { q: 'We live in the Lopikerwaard or the Vechtstreek, a long way from the city. Does that change anything?', a: 'Nothing about the class. A child in Lopik or Loenen is in the identical group at the identical hour as one in the city, and the drive to Utrecht Centraal is not part of the arrangement. That is the plainest argument this province offers for a class that comes to the house.' },
      { q: 'Is the teaching in English or Dutch?', a: 'English throughout, except for the Dutch school terms, which stay as the school says them. There are no Dutch-language classes.' },
      { q: 'What time are classes for a family in the province of Utrecht?', a: 'Because only the Dutch clock changes, an afternoon in the province sits four and a half hours behind the teacher in winter and three and a half in summer. Late afternoon, early evening and weekends suit both ends, and the weekly hour is chosen in the free lesson.' },
      { q: 'What happens in the free lesson?', a: 'We find what the learner can do and set one task there. A child lines up twelve province cards two ways. A teenager sorts the twelve rows four ways in Python and writes one honest superlative. An adult brings a league from work. By the end there is a course, a level, a fixed weekly time and a fee in dollars on the table, and no payment has been made.' },
      { q: 'Is there a Modern Age Coders classroom anywhere in the province of Utrecht?', a: 'No, and none is claimed in Utrecht, in Amersfoort or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do coding classes in the province of Utrecht cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or municipality. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'Into the city, across to the neighbours, up to the country',
    html: 'The city at the centre of this province has its own page: <a class="cg-inline-link" href="/coding-classes-in-utrecht">coding classes in Utrecht</a>. The neighbouring provinces with pages are <a class="cg-inline-link" href="/coding-classes-in-noord-holland">Noord-Holland</a> and <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>, and the nearest city pages across the line are <a class="cg-inline-link" href="/coding-classes-in-amsterdam">Amsterdam</a> and <a class="cg-inline-link" href="/coding-classes-in-almere">Almere</a>. Their common parent is the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>; a learner set on building models rather than programs should open <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-utrecht', label: 'Utrecht city' },
    { href: '/coding-classes-in-amsterdam', label: 'Amsterdam' }
  ],

  personalityCss: `
.cg-root.cg-utp .cg-hero-grid { gap: clamp(2rem, 5vw, 4rem); align-items: start; }
.cg-root.cg-utp .cg-hero h1 { font-weight: 500; letter-spacing: -0.01em; }
.cg-root.cg-utp .cg-capsule { border-left-width: 4px; padding: 1.3rem 1.5rem; }
.cg-root.cg-utp .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; }
.cg-root.cg-utp .cg-section-head h2 { max-width: 34ch; }
.cg-root.cg-utp .cg-grid-3 { gap: clamp(1.25rem, 3vw, 2.25rem) clamp(1.25rem, 3vw, 2rem); }
.cg-root.cg-utp .cg-ladder-col { border-top-width: 5px; }
.cg-root.cg-utp .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-utp .cg-align-row { padding-block: 1.2rem; }
`,

  dossier: {
    curriculumAuthority: 'Province of Utrecht: 26 municipalities, 1,415,104 residents (CBS 1 January 2026), 531 primary establishments (123,230 pupils) and 112 secondary (78,604). Capital Utrecht (the only province whose capital carries its exact name; hence the -province slug). Landscapes: Utrechtse Heuvelrug, Eemland, Kromme Rijnstreek, Vechtstreek, Lopikerwaard. Regio Midden holidays. A province page is about the spread and links down to the city page rather than repeating it; the hub owns the national curriculum.',
    localProject: 'A superlative without its measure is not a fact (rank depends on the column). From the encyclopaedia table of the twelve provinces at end 2025: Utrecht is 12th of 12 by total area (1,560.05 km2, the smallest), 11th by land area (1,485.46; Flevoland 1,411.63 is smaller), 5th by population (1,415,322) and 3rd by density (953; ZH 1,438, NH 1,130). The learner loads the twelve rows, sorts four ways, and writes a function that returns each row\'s best and worst column. Distinct from the Noord-Holland rank trap (an order loses its distances), from title-versus-size (reserved for Noord-Brabant) and from the denominator-choice trap (Gadong): the flaw here is a rank quoted without the column it was taken from. Computed before writing; all figures from one published table.',
    requiredMentions: [
      '1,415,104',
      '26 municipalities',
      'Amersfoort',
      'Veenendaal',
      'Nieuwegein',
      'Vijfheerenlanden',
      'Stichtse Vecht',
      'Lopikerwaard',
      'Renswoude',
      '1,560.05',
      '1,485.46',
      '1,063,460',
      'Eemland'
    ],
    sources: [
      { claim: 'Province of Utrecht 1,415,104 residents on 1 January 2026 (CBS provisional); 26 municipalities; total area 156,004 ha, land 148,448 ha; density 949 per km2; 645,543 households; 227,444 under 15; 175,696 aged 15 to 25; 531 primary establishments (123,230 pupils); 112 secondary (78,604); 1,063,460 residents in 1995, a 33 percent rise.', url: 'https://allecijfers.nl/provincie/utrecht/' },
      { claim: 'All 26 municipalities on 1 January 2026: Utrecht 378,121; Amersfoort 163,764; Veenendaal 70,779; Nieuwegein 68,257; Zeist 66,648; Stichtse Vecht 66,196; Vijfheerenlanden 63,246; Woerden 54,199; Utrechtse Heuvelrug 51,107; Houten 50,952; Soest 47,853; De Ronde Venen 45,749; De Bilt 43,687; IJsselstein 33,171; Leusden 32,287; Baarn 25,435; Wijk bij Duurstede 23,707; Bunschoten 22,905; Rhenen 20,457; Bunnik 16,402; Woudenberg 15,099; Lopik 14,802; Montfoort 13,795; Oudewater 10,513; Eemnes 10,065; Renswoude 5,908.', url: 'https://allecijfers.nl/ranglijst/grootste-en-kleinste-gemeenten-in-inwoners-in-de-provincie-utrecht/' },
      { claim: 'The twelve provinces at end 2025: Groningen 601,530 people, 2,323.94 km2 land, 2,959.68 total; Friesland 665,276, 3,335.62, 5,748.77; Drenthe 508,054, 2,632.65, 2,680.39; Overijssel 1,202,369, 3,319.00, 3,420.74; Flevoland 462,880, 1,411.63, 2,412.31; Gelderland 2,173,425, 4,963.71, 5,136.31; Utrecht 1,415,322, 1,485.46, 1,560.05, density 953; Noord-Holland 3,010,044, 2,664.82, 4,091.93, 1,130; Zuid-Holland 3,882,709, 2,700.07, 3,307.86, 1,438; Zeeland 394,514, 1,782.12, 2,933.44; Noord-Brabant 2,676,753, 4,905.46, 5,082.06; Limburg 1,138,362, 2,146.61, 2,209.85. Capitals as listed.', url: 'https://nl.wikipedia.org/wiki/Provincies_van_Nederland' },
      { claim: 'Capital Utrecht; 26 municipalities; land 1,485.46 km2, water 74.59 km2, total 1,560.05 km2; 1,415,322 residents at end 2025; Commissaris van de Koning Hans Oosters; landscapes Utrechtse Heuvelrug, Eemland, Kromme Rijnstreek, Vechtstreek, Lopikerwaard.', url: 'https://nl.wikipedia.org/wiki/Utrecht_(provincie)' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'That Utrecht is the fastest-growing province. Its 33 percent since 1995 beats Zuid-Holland\'s 17 and Noord-Brabant\'s 18, but Flevoland\'s growth over the same period was not read at source and is almost certainly higher, so no growth rank is asserted.',
      'The year Vijfheerenlanden moved from Zuid-Holland to Utrecht (2019). Not read at source; the municipality is listed without the date.',
      'Which secondary schools serve the smaller towns. Not researched for a province page; the city page carries the schools.',
      'The encyclopaedia summary\'s claims that Zeeland is smallest by land area and that Utrecht ranks 11th by population. Both contradict the table on the same page, which the page uses instead.',
      'Anything the Netherlands hub or the Utrecht city page owns: the SLO core objectives, the two pupil counts, the station\'s transfers.'
    ]
  }
};
