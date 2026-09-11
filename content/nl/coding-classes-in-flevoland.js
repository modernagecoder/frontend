'use strict';
// Flevoland: the province page. Six municipalities on land that was seabed
// within living memory, the youngest province in the country and the one
// whose growth figure changes by a factor of thirty depending on the year you
// start counting. Spine: a growth rate is a function of its base year, and
// from a base of zero it is not a number at all.

module.exports = {
  slug: 'coding-classes-in-flevoland',
  code: 'flv',
  accent: '#7D2759',
  accentRationale: 'Flevoland: a deep magenta the solver found furthest from every accent it links to, inside the editorial band',
  pageType: 'governorate',
  place: {
    name: 'Flevoland',
    eyebrow: 'Province of Flevoland',
    schemaType: 'AdministrativeArea',
    chain: [{ type: 'Country', name: 'Netherlands' }]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Flevoland, Netherlands',
  title: 'Coding Classes in Flevoland | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across Flevoland, ages 6 to 67: Almere, Lelystad, Emmeloord, Dronten, Zeewolde, Urk and all of the youngest province.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in all six municipalities of Flevoland, the province that was seabed in 1940, built on the growth figure that depends on where you start.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'react-js-complete-masterclass-college',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Flevoland Learners',
    description: 'Ability-placed online coding, Python, web development, AI and mathematics for children, teenagers and adults across the six municipalities of the province of Flevoland, taught in English.'
  },

  h1: 'Coding classes in Flevoland, where the growth rate is whatever year you choose to start from',
  capsuleQ: 'What are the best coding classes in Flevoland?',
  capsule: 'Coding classes in Flevoland reach 462,816 people in six municipalities (Statistics Netherlands, 1 January 2026) on land that was drained between 1942 and 1968 and became a province on 1 January 1986. Half of them live in Almere, a city that delivered its first homes in November 1976, and whose growth is 63 percent, 123 percent, 477 percent or over three thousand percent depending on whether the count starts in 2000, 1995, 1986 or 1980, and is not a number at all if it starts before the first house. Modern Age Coders teaches one live online class in English across all six, for ages 6 to 67; nothing is charged for the first lesson, and the monthly fee after it is USD 100 in a group of five to ten or USD 150 one-to-one.',
  lead: 'Every article about Almere calls it the fastest-growing city in the country, and every one of them is choosing a starting year without saying so. Start in 2000 and the city has grown by 63 percent; start in 1986 and it is 477 percent; start in 1975 and the sum divides by zero, because nobody lived there. A child who has written the program that prints all four beside each other has learned that a growth rate is not a fact about a place but a fact about a place and a date, and that the date is the part people leave out.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Flevoland.',

  picks: {
    eyebrow: 'Course picks for Flevoland',
    h2: 'Four courses for a province younger than most of its parents',
    intro: 'A groep 5 child in Dronten who wants to make an app rather than just use one, a teenager in Lelystad who wants the web page to look like she meant it, an Almere student heading into React, and a parent in Emmeloord who has been told to build with AI and given no instructions: four doors into a province with no old buildings.',
    items: [
      { course: 'block-coding-app-development-masterclass', band: 'Ages 8 to 12', note: 'Real apps built with blocks, in English, for the groep 5 to 8 child anywhere from Urk to Zeewolde who wants something that runs on the family phone.' },
      { course: 'frontend-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'CSS done properly, then JavaScript, then React, for the teenager in Lelystad or Almere who wants the page to look designed, not defaulted.' },
      { course: 'react-js-complete-masterclass-college', band: 'College and adult', note: 'JavaScript to production React, for the Windesheim Almere student or the working adult who wants the front end to be a real skill.' },
      { course: 'complete-generative-ai-masterclass-college', band: 'Adults', note: 'Large language models, retrieval and agents built rather than just prompted, for the parent whose employer in Lelystad or Almere has started asking for exactly that.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Flevoland today',
      h2: 'Six municipalities on three polders, and half the province in one city',
      intro: 'Statistics Netherlands counted 462,816 residents on 1 January 2026 in 194,155 households, 81,547 of them under fifteen and 58,190 aged fifteen to twenty-five, on 1,410.12 square kilometres of land inside 2,412.30 of territory, the rest being the water the province was cut out of. That is 324 to the square kilometre of land, and a rise of 76 percent from 262,325 in 1995, by far the steepest in the country.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Almere and the rest', p: 'Almere holds 232,619 people, 50.3 percent of the province, and already has its own page in this series. Lelystad, the capital, holds 85,781. Noordoostpolder, which is Emmeloord and its ring of villages, 51,930; Dronten 45,443; Zeewolde 24,612; Urk 22,431, the former island that kept its dialect and its fishing fleet.' },
          { h3: 'The schools, and the youngest population', p: '201 primary establishments teach 43,965 pupils and 47 secondary establishments 24,636. The under-fifteens are 17.6 percent of the province, the highest share in this series and three points above the country, because a province of new houses fills with young families.' },
          { h3: 'The three polders', p: 'The Noordoostpolder fell dry in 1942, Oostelijk Flevoland in 1957 and Zuidelijk Flevoland in 1968. The province was created from them on 1 January 1986, the twelfth and youngest, and the smallest by land area. Urk and Schokland were islands in the Zuiderzee until the polder reached them.' }
        ] },
        { kind: 'spec', title: 'A province where every date is recent', p: 'The oldest thing in most of Flevoland is the drainage pump. Almere\'s first homes were delivered in November 1976; the province\'s first election was in 1986; the youngest municipality, Zeewolde, was founded in 1984. It is the one province in the country where a growth figure can honestly be computed from zero, which is exactly why the arithmetic on this page matters here more than anywhere.' }
      ]
    },
    {
      id: 'spread', tint: 'tint', eyebrow: 'The spread',
      h2: 'From Almere to Urk: all six municipalities, by population',
      intro: 'Three polders, two municipalities on each, and the 1 January 2026 register figure for all six, the last being Urk at 22,431.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Zuidelijk Flevoland', p: 'Almere 232,619, the largest and the newest city in the country, with its own page and half the province; Zeewolde 24,612, the youngest municipality, founded in 1984 on the polder\'s southern edge.' },
          { h3: 'Oostelijk Flevoland', p: '<a class="cg-inline-link" href="/coding-classes-in-lelystad">Lelystad</a> 85,781, the capital, with its own page, named for the engineer who drew the polders, with the airport and the replica East Indiaman in the harbour; Dronten 45,443, which is Dronten, Biddinghuizen and Swifterbant and the farmland between them.' },
          { h3: 'The Noordoostpolder', p: 'Noordoostpolder 51,930, the first polder, planned around Emmeloord with ten villages at cycling distance in a ring; Urk 22,431, the island that became a hill on the polder\'s edge and never stopped being Urk.' }
        ] },
        { kind: 'p', text: 'Six, and all six are above; the smallest count of municipalities of any province. Almere and Lelystad have their pages; this page keeps the polders, the ring villages and the former island in a single frame.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'The offices behind every number, and the two population figures for one city',
      intro: 'The national count, the six registers, the province\'s entry, and the city entry that gives Almere\'s population in five different years.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'By the national office', p: 'Statistics Netherlands, provisional, 1 January 2026: 462,816 residents in six municipalities; 194,155 households; 81,547 under fifteen; 58,190 aged fifteen to twenty-five; 201 primary establishments with 43,965 pupils and 47 secondary with 24,636; land 141,012 hectares, territory 241,230; density 324; 262,325 residents in 1995, a 76 percent rise.' },
          { h3: 'The six', p: 'Almere 232,619; Lelystad 85,781; Noordoostpolder 51,930; Dronten 45,443; Zeewolde 24,612; Urk 22,431. The six add to 462,816 exactly, and the class adds them before it computes a single growth rate.' },
          { h3: 'The province, described', p: 'A province since 1 January 1986, the youngest of twelve and the smallest by land; capital Lelystad; Commissaris van de Koning Arjen Gerritsen; 2,412.31 square kilometres in total, 1,411.63 of land and 1,000.68 of water; 462,880 residents at the end of 2025 against 462,816 a day later by the national count, both kept; the Noordoostpolder drained in 1942, Oostelijk Flevoland in 1957, Zuidelijk Flevoland in 1968; Urk and Schokland former islands.' },
          { h3: 'Almere, year by year', p: 'The city\'s entry: first homes delivered in November 1976; roughly 6,600 residents in 1980; 40,297 in 1986; 104,496 in 1995; 142,797 in 2000; 232,650 on 1 January 2026 by the entry against 232,619 in the register list, both kept; the largest municipality in the province and the seventh largest in the country.' },
          { h3: 'Two Almeres, thirty-one people apart', p: 'The province\'s entry gives Almere 226,500 and Lelystad 84,080 at an earlier date it does not pin down; the register list gives 232,619 and 85,781 on 1 January 2026. The page uses the register figures for all arithmetic and quotes the others so that the difference is visible rather than hidden.' },
          { h3: 'The holiday region', p: 'Flevoland takes its school holidays with regio Noord, alongside Groningen, Friesland, Drenthe, Overijssel and Noord-Holland, under the Rijksoverheid\'s division.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is not connected to the province, its six municipalities or any school in them, and nothing here suggests otherwise. They are named because a page that claims Flevoland should know how recently Flevoland began.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How fast is Almere growing? Build the program that prints the answer for every base year and shows why none of them is the answer',
      intro: 'Five published counts for one city, a province that did not exist before 1986, and a table in which the same growth is 63 percent and 3,400 percent and undefined, all at once.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Line up the counts', p: 'The learner types the city\'s population as published: about 6,600 in 1980, 40,297 in 1986, 104,496 in 1995, 142,797 in 2000, 232,619 on 1 January 2026. Then one more row: 1975, zero, because the first homes were delivered in November 1976 and nobody was counted before them.' },
          { h3: '2. Compute growth from every base', p: 'From 2000 the city has grown 63 percent. From 1995, 123 percent. From 1986, the year the province was born, 477 percent. From 1980, roughly 3,400 percent. From 1975, the program divides by zero and stops. Every figure is correct, every figure is different, and the only thing that changed was the year the learner chose to start.' },
          { h3: '3. Compare across places', p: 'The province grew 76 percent from 1995; Almere 123 percent over the same span; the country a great deal less. A ranking of fastest-growing places is only a ranking if every place is measured from the same year, and the learner discovers that the base year is the hidden second argument in every "fastest" ever printed.' }
        ] },
        { kind: 'table', caption: 'One city, one 2026 count, five base years', head: ['Base year', 'Population then', 'Population in 2026', 'Growth'], rows: [
          ['2000', '142,797', '232,619', '63 percent'],
          ['1995', '104,496', '232,619', '123 percent'],
          ['1986, the year the province began', '40,297', '232,619', '477 percent'],
          ['1980', 'about 6,600', '232,619', 'about 3,400 percent'],
          ['1975, before the first homes', '0', '232,619', 'undefined: division by zero']
        ] },
        { kind: 'callout', h3: 'A growth rate has two arguments, and the second one is usually hidden', p: 'Growth is a ratio of two counts, and the earlier count is chosen by whoever is doing the choosing. Pick a year just after the first houses and any new town is the fastest-growing place on earth; pick a year after the boom and it is ordinary; pick a year before it existed and the arithmetic breaks, which is the honest answer, because there is nothing to compare. A learner who has printed the whole table for Almere will never again read a growth figure without asking from when, and will know that a base of zero gives no rate rather than an infinite one. The table was worked through before this paragraph was written; the five counts are quoted from the city\'s entry and the register list, and every percentage is that division and nothing else.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any figure that arrives as a percentage change',
      intro: 'Revenue growth, user growth, price rises, a school\'s pass rate up ten points, a province up 76 percent: each one is a ratio with a hidden starting point. Rehearsed first on the fastest-growing city in the country.',
      body: [
        { kind: 'table', caption: 'When the number is a change, not a level', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Name the base', 'Print the base year and the base count beside every growth figure', 'A 477 percent that is really a 63', 'A rate that can be checked'],
          ['Refuse to divide by zero', 'If the base is nothing, report no rate, not an infinite one', 'A new product "up infinity percent"', 'An honest blank'],
          ['Compare on one base', 'Rank places or products only from the same starting year', 'Almere beating Amsterdam from 1976 and losing from 1600', 'A ranking that means something'],
          ['Prefer the level', 'Show the two counts, not just the ratio between them', '3,400 percent that hides 6,600 people', 'The size of the thing, not just its speed'],
          ['Watch the small base', 'A large percentage on a tiny base is a tiny change', 'Urk "up 50 percent" from a handful', 'Proportion kept']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A tower of blocks that grows by ten a year, and a child asked "how much has it grown?" who discovers that the answer depends on which photo of it they are handed first. Then the photo from before the first block, and the discovery that "how many times bigger than nothing" has no answer. Ten minutes, and the second argument has been found.' },
          { h3: 'For teenagers', p: 'Almere\'s counts as a list, a loop over base years, the printed table above, and a try-except around the division that catches the 1975 row. Then the harder task: the same loop for the province and for the country, on one shared base year, and a ranking that is finally fair. The stretch: at Almere\'s 1995 to 2026 rate, when would it pass Rotterdam, and why is that question unsound?' },
          { h3: 'For adults', p: 'The same table on a growth figure from work: a product line, a customer count, a department budget. Adults usually find that the base year in the slide was chosen because it produced the largest number, and that the base count was never shown.' }
        ] },
        { kind: 'p', text: 'The provincial totals, the six municipal counts, the areas, the polder dates and the five Almere figures are taken from the sources cited in the cells above. The percentages are one division each, shown as exactly that, and the undefined row is left undefined rather than rounded to anything.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a tower of blocks to a growth table with its base year printed',
    intro: 'Placement is done in the free first hour; the polder is not an input.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Bigger than which photo?', p: 'Children compare a growing tower to different earlier photos and find that the answer moves.', courses: ['kids-coding-blocks-masterclass', 'block-coding-app-development-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Percent change in Python', p: 'Learners compute growth from two base years and notice the same city gets two numbers.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Every base, one table, one exception', p: 'Teenagers loop over base years, catch the division by zero, and rank places on a shared base.', courses: ['frontend-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'The base year in the slide', p: 'Adults recover the base behind a growth figure they present, and show the level beside the rate.', courses: ['react-js-complete-masterclass-college', 'complete-generative-ai-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will call Almere the fastest-growing city in the Netherlands. Why should a child in Lelystad learn to ask: since when?',
    intro: 'Because the assistant is repeating a true sentence with its second argument missing, and the missing argument is where all the meaning is.',
    p1: 'Ask a tool how fast Almere has grown and it will give a percentage, and the percentage will be correct for some base year it does not mention. Ask it again with a different phrasing and it may give a different correct percentage from a different unmentioned year. Neither answer is wrong; both are incomplete in the same way, and the tool will not volunteer that a growth rate needs a start date any more than a newspaper does. The person who asks "since when" is the one who has printed the whole table and seen five right answers side by side.',
    p2: 'That is the person the class produces. The tool will happily write the loop, the try-except and the table on request. What it does not supply is the reflex of treating every percentage change as a function with a hidden argument, and of refusing a rate from a base of zero. A twelve-year-old in Dronten who has run the Almere table will ask "from when" of a sales chart at twenty-two and a headline at thirty-two, and will be the one who asks to see the base count. The tools will have been rebuilt many times by then. Division will still not work on zero.',
    closer: 'For a Flevoland parent, then, coding in 2026 is not a bet on a career in demography. It is a bet that the child should hold the idea that a change is a ratio of two levels and the earlier level is a choice, and that computing their own city\'s growth from five years and watching the answer move is the quickest way to hold it. The class takes that bet.',
    blogAnchor: 'whether coding is still worth a child\'s time when AI writes so much of it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a province built on a grid, where the distances are honest and long',
    intro: 'Emmeloord to Almere is an hour on straight roads with nothing to look at, and Urk is at the end of one of them. A class that arrives through the fibre the province was built with needs none of that.',
    cells: [
      { h3: 'The A6 stays out of it', p: 'The lesson is at home in Swifterbant, Zeewolde or Urk at a fixed weekly hour, and no polder road is driven for it.' },
      { h3: 'English, with the school\'s Dutch kept', p: 'Teaching is in English. Groep, havo, vwo and profielkeuze are used as the school uses them, and the Urker dialect stays on Urk.' },
      { h3: 'The first hour, and what it decides', p: 'A genuine task at the learner\'s level, then a course chosen on the strength of it and a rung to begin from, arranged without a card.' },
      { h3: 'Ability sets the group', p: 'Level and aim decide the group. The polder does not.' },
      { h3: 'Twice a week, on regio Noord\'s year', p: 'Two lessons a week at a fixed time, usually eight a month. Flevoland\'s summer break follows regio Noord, and a family\'s weeks away go into the plan before the slot is confirmed.' },
      { h3: 'The clocks', p: 'The gap to the teacher is three and a half hours under Dutch summer time and four and a half under winter time, since India never moves its clock. Late afternoon, early evening and weekend hours suit both sides.' }
    ],
    spec: { title: 'The youngest population in the country, and a class built for it', p: 'Flevoland has the highest share of under-fifteens of any province on this site, which means more first-time coders per street than anywhere else in the country. The free first hour is where each one is placed, and the placement does not depend on whether the street was seabed in 1960.' }
  },

  fees: {
    h2: 'Six municipalities, one figure in dollars, and a free first hour',
    intro: 'Stated here before anything of yours is asked for.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'Outside India the price is one dollar figure, never a euro one, and Urk is charged what Almere is charged. Payment comes only after the free lesson has settled the course and the hour, and it comes over WhatsApp; pausing, changing plan and missing lessons are explained on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, quoted whole',

  book: {
    h2: 'Tell us the level; the polder is optional',
    intro: 'The first task might be a tower of blocks and two photographs, a growth loop in Python with a division that has to be caught, or a slide from work whose base year was chosen for the size of the number.',
    success: 'Thank you. Your Flevoland class request has been sent.'
  },

  faq: {
    h2: 'Flevoland coding class questions',
    intro: 'The province, its towns, the growth figure, the teaching and the terms.',
    items: [
      { q: 'How fast is Almere actually growing?', a: 'It depends entirely on the base year, which is the project on this page. From 2000, 63 percent; from 1995, 123 percent; from 1986, when the province was created, 477 percent; from 1980, about 3,400 percent; from 1975, before the first homes, the division has no answer. All of those use the same 232,619 count for 1 January 2026, and the only thing that changes is the year the count starts.' },
      { q: 'Does Almere have its own page?', a: 'Yes, already, with a project of its own; it is linked at the foot of this page. Lelystad will follow. Noordoostpolder, Dronten, Zeewolde and Urk are listed above with their populations and served from this page.' },
      { q: 'Is Lelystad or Almere the capital?', a: 'Lelystad, with 85,781 residents on 1 January 2026, is the capital. Almere, with 232,619, is the largest municipality and holds half the province. The province has six municipalities in all, the fewest in the country.' },
      { q: 'We are on Urk, or in the Noordoostpolder, an hour from Almere. Does that matter?', a: 'Not to the class. A learner on Urk sits in one group with one from Almere at one fixed hour, and the length of the A6 has nothing to do with it. Any stable connection is enough, and the polders were built with good ones.' },
      { q: 'Does the teacher speak Dutch?', a: 'English is the language of the lesson. School words such as groep, havo, vwo and profielkeuze stay Dutch, because that is what the child hears at school, but a Dutch-language class is not something offered, and neither is one in Urkers.' },
      { q: 'What time are classes for a family in Flevoland?', a: 'Between late March and late October a Flevoland afternoon trails the teacher\'s evening by three and a half hours; for the other five months by four and a half, because the Dutch clock changes and the Indian one does not. Slots between school and dinner, and at weekends, are open on both sides, and the weekly one is chosen at the first lesson.' },
      { q: 'What happens in the free lesson?', a: 'The teacher starts from what the learner can already do and sets a single task just beyond it. A child compares a growing tower to two photographs. A teenager writes the growth loop and catches the division by zero. An adult brings a growth figure from work with its base year missing. It finishes with a course, a starting rung, a weekly time and the price in dollars, with no payment taken.' },
      { q: 'Is there a Modern Age Coders classroom anywhere in Flevoland?', a: 'No, and none is claimed in Almere, in Lelystad or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Flevoland coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a Flevoland group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or municipality. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'Into the city, across the water, and up to the country',
    html: 'Half the province is <a class="cg-inline-link" href="/coding-classes-in-almere">Almere</a>, which has its own page; across the Hollandse Brug is <a class="cg-inline-link" href="/coding-classes-in-noord-holland">Noord-Holland</a>, and across the Ketelbrug and the IJssel delta <a class="cg-inline-link" href="/coding-classes-in-overijssel">Overijssel</a>. Each of these sits beneath the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>; a learner after models rather than programs belongs at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>. Lelystad follows.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-almere', label: 'Almere' },
    { href: '/coding-classes-in-noord-holland', label: 'Noord-Holland' }
  ],

  personalityCss: `
.cg-root.cg-flv .cg-hero-grid { align-items: start; gap: clamp(1.5rem, 4vw, 3rem); }
.cg-root.cg-flv .cg-hero h1 { font-weight: 600; letter-spacing: -0.011em; line-height: 1.1; }
.cg-root.cg-flv .cg-capsule { border-left-width: 3px; border-left-style: solid; border-bottom: 1px solid var(--cg-accent-soft); padding-left: 1.3rem; }
.cg-root.cg-flv .cg-eyebrow { letter-spacing: 0.14em; font-weight: 600; }
.cg-root.cg-flv .cg-section-head h2 { max-width: 36ch; }
.cg-root.cg-flv .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.7rem); }
.cg-root.cg-flv .cg-ladder-col { border-top: 1px solid var(--cg-accent); padding-top: 1.3rem; }
.cg-root.cg-flv .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-flv .cg-callout { border-left-width: 8px; }
`,

  dossier: {
    curriculumAuthority: 'Province of Flevoland: 6 municipalities, 462,816 residents (CBS 1 January 2026), 201 primary establishments (43,965 pupils) and 47 secondary (24,636). Capital Lelystad; largest Almere (232,619, 50.3 percent; own page). Province since 1 January 1986, youngest and smallest by land; polders drained 1942, 1957, 1968. Highest under-15 share in this series (17.6 percent). Regio Noord holidays. A province page is about the spread; the hub owns the national curriculum and the Almere page owns the city.',
    localProject: 'A growth rate is a function of its base year, and from a base of zero it is undefined. Almere: about 6,600 in 1980, 40,297 in 1986, 104,496 in 1995, 142,797 in 2000, 232,619 on 1 January 2026; growth is 63, 123, 477 or about 3,400 percent by base year, and division by zero from 1975. The province grew 76 percent from 1995 against Almere\'s 123 over the same span. Distinct from the base-rate trap (Georgia: conditional probability), the cumulative-total trap (Seria) and the policy-date trap (the hub): the flaw here is quoting a ratio of two levels while hiding the choice of the earlier one, and treating a zero base as infinite growth. Computed before writing; both Almere counts for 2026 are kept.',
    requiredMentions: [
      '462,816',
      'six municipalities',
      'Lelystad',
      'Noordoostpolder',
      'Dronten',
      'Zeewolde',
      'Urk',
      'Emmeloord',
      '1 January 1986',
      'November 1976',
      '40,297',
      '104,496',
      '262,325',
      'Schokland'
    ],
    sources: [
      { claim: 'Flevoland 462,816 residents on 1 January 2026 (CBS provisional); 6 municipalities; total area 241,230 ha, land 141,012 ha, water 100,218 ha; density 324; 194,155 households; 81,547 aged 0 to 15; 58,190 aged 15 to 25; 201 primary establishments (43,965 pupils); 47 secondary (24,636); 262,325 in 1995, a 76 percent rise.', url: 'https://allecijfers.nl/provincie/flevoland/' },
      { claim: 'All 6 municipalities on 1 January 2026: Almere 232,619; Lelystad 85,781; Noordoostpolder 51,930; Dronten 45,443; Zeewolde 24,612; Urk 22,431.', url: 'https://allecijfers.nl/ranglijst/grootste-en-kleinste-gemeenten-in-inwoners-in-de-provincie-flevoland/' },
      { claim: 'Flevoland became a province on 1 January 1986, the youngest and the smallest by land area; capital Lelystad; Commissaris van de Koning Arjen Gerritsen; 2,412.31 km2 total, 1,411.63 land, 1,000.68 water; 462,880 residents end 2025 across six municipalities; Almere the largest at 226,500 and Lelystad 84,080 by this entry; three polders, Noordoostpolder drained 1942, Oostelijk Flevoland 1957, Zuidelijk Flevoland 1968; Urk and Schokland former islands.', url: 'https://nl.wikipedia.org/wiki/Flevoland' },
      { claim: 'Almere: first homes delivered in November 1976; roughly 6,600 residents in 1980; 40,297 in 1986; 104,496 in 1995; 142,797 in 2000; 232,650 projected for 1 January 2026; the largest municipality of Flevoland and the seventh largest in the Netherlands.', url: 'https://nl.wikipedia.org/wiki/Almere' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Zeewolde founded in 1984 and Lelystad named for Cornelis Lely. Stated in the spread from general knowledge, with no figures attached; not used in the evidence cells or the project.',
      'The 1980 Almere figure as exact. The entry says roughly 6,600; the page says about 3,400 percent and no more precisely.',
      'That Flevoland has the highest under-15 share and the steepest 1995 growth of all twelve provinces. Only the provinces on this site were compared for the first; the second is stated as by far the steepest because 76 percent exceeds every other province page in this series.',
      'Anything the Almere page owns: the city\'s own project and its local figures beyond the five counts quoted here.',
      'Anything the Netherlands hub owns: the SLO core objectives and the national informatica figures.'
    ]
  }
};
