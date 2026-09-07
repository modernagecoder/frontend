'use strict';
// Amsterdam-Centrum: 90,400 residents on 8.04 square kilometres, ten wijken,
// and a district figure that sits below every one of its own parts.
// Spine: check that the whole and the parts were measured the same way, and
// then remember that an area average licenses no claim about anything inside
// it. The stadsdeel is not a statistical unit; the wijken are.

module.exports = {
  slug: 'coding-classes-in-amsterdam-centrum',
  code: 'acn',
  accent: '#A04761',
  accentRationale: 'Amsterdam-Centrum: a deep rose taken from the brick along the canals, placed by the solver at the greatest available distance from the accents already in the cluster and clear of every page it links to',
  pageType: 'district',
  place: {
    name: 'Amsterdam-Centrum',
    eyebrow: 'Centrum, Amsterdam',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'City', name: 'Amsterdam' },
      { type: 'AdministrativeArea', name: 'Noord-Holland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-netherlands', name: 'Netherlands' },
    { slug: 'coding-classes-in-amsterdam', name: 'Amsterdam' }
  ],
  nav: [
    { label: 'Amsterdam', href: '/coding-classes-in-amsterdam' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Amsterdam-Centrum, Netherlands',
  title: 'Coding Classes in Amsterdam-Centrum | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Amsterdam-Centrum for ages 6 to 67, from the Jordaan to the Oostelijke Eilanden. The first lesson is free.',
  ogDescription: 'Live online coding, Python and AI for families in the centre of Amsterdam, built on a district statistic that sits below every single one of its own wijken.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'data-science-complete-masterclass-college',
  verifiedOn: '8 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Amsterdam-Centrum Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across the ten wijken of Amsterdam-Centrum, taught in English.'
  },

  h1: 'Coding classes in Amsterdam-Centrum, where the district is less crowded than every neighbourhood inside it',
  capsuleQ: 'What are the best coding classes in Amsterdam-Centrum?',
  capsule: 'Coding classes in Amsterdam-Centrum reach 90,400 residents (1 January 2026) on 8.04 square kilometres, which works out at 11,244 people to the square kilometre. Every wijk this page checked is denser than that: 23,476 in the Jordaan, 15,682 on the Oostelijke Eilanden, 14,456 in Grachtengordel-West and 13,600 in Burgwallen-Oude Zijde. A whole cannot really be less crowded than all of its parts, and finding out why is more useful than any of the numbers. Modern Age Coders teaches live online in English across all ten wijken, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Amsterdam-Centrum holds 90,400 people on 8.04 square kilometres, about 11,244 to the square kilometre. Walk into the Jordaan and the figure is 23,476. Cross to the Oostelijke Eilanden and it is 15,682. Burgwallen-Oude Zijde, the smallest of the four checked here, still comes in at 13,600. Four neighbourhoods, all inside the district, all denser than the district itself. That is not possible if the numbers mean the same thing, which is the first clue that they do not, and the whole reason this page exists.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Amsterdam-Centrum.',

  picks: {
    eyebrow: 'Course picks for Amsterdam-Centrum',
    h2: 'Four courses for ten wijken and a very short walk between them',
    intro: 'A groep 5 child on the Kadijken who has finished with dragging blocks, a teenager in the Jordaan who wants to know how a model is actually trained, a student off the Grachtengordel who needs data work to be a skill rather than a module, and an adult near the Nieuwmarkt whose job now includes AI tools nobody explained: four doors, and the first hour of each is free.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python, drawings that follow orders and a first program that finds a rule, taught in English to the groep 5 to 8 child anywhere in the district.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'How a model is built, trained and broken, for the teenager who wants the machinery rather than the demonstration.' },
      { course: 'data-science-complete-masterclass-college', band: 'College and adult', note: 'Python, pandas and the discipline of asking what a number was computed over, for the student who will be handed datasets for the rest of their working life.' },
      { course: 'ai-tools-mastery-complete-college', band: 'Adults', note: 'Current tools used with judgement rather than trust, for anyone whose employer switched them on and left the rest to them.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Centrum today',
      h2: 'Ninety thousand residents on eight square kilometres of canal and quay',
      intro: 'Amsterdam holds 941,927 residents in 516,096 households across 111 wijken and 519 buurten, and the city page in this series carries that picture along with the doorstroomtoets argument. This page starts where that one stops. Amsterdam-Centrum recorded 90,400 residents on 1 January 2026 on 8.04 square kilometres, and its ten wijken are far less alike than a single district name suggests.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'A district that is not a statistical unit', p: 'The national statistics office publishes Amsterdam at municipality level and then at wijk and buurt level. It does not publish a stadsdeel table in that shape, so the district figures on this page come from the municipal entry and the detailed figures come from the wijken beneath it. Those are two different sources with two different conventions, which turns out to matter a great deal.' },
          { h3: 'Ten wijken, four of them measured here', p: 'Centrum contains Burgwallen-Oude Zijde, Burgwallen-Nieuwe Zijde, Grachtengordel-West, Grachtengordel-Zuid, Nieuwmarkt/Lastage, Haarlemmerbuurt, Jordaan, De Weteringschans, Weesperbuurt/Plantage and Oostelijke Eilanden/Kadijken. This page carries full published figures for four of them, holding 45,986 residents between them, and does not invent numbers for the other six.' },
          { h3: 'Governance in three dates', p: 'The stadsdeel was created in 2002; before that the binnenstad was run directly by the central city government. It held the legal status of deelgemeente until 19 March 2014. Since 2018 Centrum has had a directly elected stadsdeelcommissie, with eleven members following the 2022 elections.' }
        ] },
        { kind: 'spec', title: 'What the district figure is actually computed on', p: 'The 8.04 square kilometres published for the district carries no split between land and water. In a district built around the IJ, the harbour front and the ring of canals, that is not a detail: the wijk figures divide by land alone, and the difference between the two conventions is visible in the arithmetic further down this page. The Jordaan is published at 95 hectares of which 83 are land; the Oostelijke Eilanden at 130 hectares of which 99 are land. Roughly a fifth to a quarter of the surface here is water.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Four wijken, ten minutes apart, with almost nothing in common',
      intro: 'These four are within a short walk of one another and they are not versions of the same place. On every measure that is published for all of them, they differ by a wide margin, and a family choosing a class is living in one of them rather than in an average.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Jordaan', p: '19,354 residents in 2026, the largest of the four, in 13,260 households averaging 1.5 people, of which 8,855 hold one person, 67 percent. 1,245 residents are under fifteen, 6.4 percent. 13,425 dwellings across 11 buurten, an average value of 556,000 euro, 72 percent of them rented, and an average income of 45,800 euro per resident in 2024.' },
          { h3: 'Oostelijke Eilanden and Kadijken', p: '15,484 residents in 8 buurten including Kattenburg, Wittenburg, Oostenburg and Het Funen, in 9,475 households averaging 1.6, of which 5,815 hold one person, 61 percent, the lowest of the four. 1,305 residents are under fifteen, 8.4 percent, the highest share here. 8,016 dwellings, average value 539,000 euro, 70 percent rented, average income 43,400 euro.' },
          { h3: 'Grachtengordel-West', p: '6,465 residents in 4 buurten, in 4,290 households averaging 1.5, of which 2,695 hold one person, 63 percent. 410 residents are under fifteen, 6.3 percent. 4,394 dwellings at an average value of 892,000 euro, the highest here by a distance, only 56 percent rented, and an average income of 65,800 euro per resident.' },
          { h3: 'Burgwallen-Oude Zijde', p: '4,683 residents in 5 buurten including Kop Zeedijk and Oude Kerk en omgeving, in 3,395 households averaging 1.4, of which 2,340 hold one person, 69 percent, the highest here. 205 residents are under fifteen, 4.38 percent. 3,029 dwellings, average value 526,000 euro, 80 percent rented, average income 40,700 euro.' },
          { h3: 'The six not measured here', p: 'Burgwallen-Nieuwe Zijde, Grachtengordel-Zuid, Nieuwmarkt/Lastage, Haarlemmerbuurt, De Weteringschans and Weesperbuurt/Plantage make up the rest of the district. They are named because they exist, and no figures are given for them because none were read.' },
          { h3: 'What the class does about it', p: 'Nothing, deliberately. A learner is placed on what they can already do, so a child on Kattenburg and a child on the Prinsengracht sit in the same group when they are at the same stage. The wijk on the address is not an input to anything, and it is the one field in this whole page the class never asks for.' }
        ] },
        { kind: 'p', text: 'Between the four, average income runs from 40,700 to 65,800 euro, average dwelling value from 526,000 to 892,000, the share of children under fifteen from 4.38 to 8.4 percent, and rented housing from 56 to 80 percent. All four sit inside one district with one name.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure, its source, its year, and what this page will not calculate',
      intro: 'Two sources with two conventions, four wijken with full detail, six without, and a set of sums this page deliberately refuses to do.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The district, from the municipal entry', p: 'Amsterdam-Centrum: 90,400 inwoners on 1 January 2026; oppervlakte 8.04 square kilometres, with no land and water split given; the stadsdeel created in 2002, the binnenstad having been run directly by the central city government before that; the legal status of deelgemeente held until 19 March 2014; a directly elected stadsdeelcommissie since 2018, with eleven members after the 2022 elections; and ten named wijken.' },
          { h3: 'The wijken, from the statistics office', p: 'Population figures are 2026; household, area, density, dwelling and tenure figures are 2025; income figures are 2024. Jordaan 19,354 and 23,476 per square kilometre; Oostelijke Eilanden/Kadijken 15,484 and 15,682; Grachtengordel-West 6,465 and 14,456; Burgwallen-Oude Zijde 4,683 and 13,600. Every density in that list is computed on land area.' },
          { h3: 'The city, in one paragraph', p: 'Amsterdam: 941,927 residents in 2026, 516,096 households in 2025, 2 woonplaatsen, 111 wijken and 519 buurten. The city page in this series carries the school-advice picture and the projections to 2055 for all eight districts, and this page does not repeat them.' },
          { h3: 'Two conventions, stated plainly', p: 'The district area of 8.04 square kilometres is published without a land and water split. Every wijk density is published on land. Comparing the two therefore compares a figure that includes canals and harbour with figures that exclude them. This page says so rather than quietly picking one.' },
          { h3: 'Sums this page does not do', p: 'The four wijken hold 45,986 of the district\'s 90,400 residents, which is 50.9 percent, and that fraction is stated because both numbers are 2026. No district average income, dwelling value or household size is computed from four of ten wijken, because a partial average is not an average.' },
          { h3: 'A comparison left to another page', p: 'How the choice of zone boundaries changes a per-zone statistic is the argument of the Tilburg page in this series, and how a mean can sit where nobody lives is the argument of the Groningen page. This page borrows neither and stays on its own question, which is what an aggregate over ground can and cannot tell you about anything standing on it.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the stadsdeel, the city or any school named here and claims none. Where two sources use different conventions, both are printed with the convention attached.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'A district less crowded than all four of its own neighbourhoods',
      intro: 'One impossible-looking result, one boring explanation for half of it, and one genuine lesson underneath that no amount of tidying removes.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Notice that the result cannot be true', p: 'A whole cannot be less dense than every part, if density means the same thing throughout. Centrum is published at 11,244 people to the square kilometre and the four wijken measured run from 13,600 to 23,476. The learner\'s first move is not to explain the result but to distrust it, because the arithmetic is announcing that two numbers have different definitions.' },
          { h3: '2. Find the definitions', p: 'They do. The district area of 8.04 square kilometres includes the water; the wijk densities divide by land only, and in this district the water is a fifth or more of the surface. Once that is known the paradox stops being a paradox. It never was a fact about crowding. It was a fact about two spreadsheets.' },
          { h3: '3. Keep the real lesson after the tidying', p: 'Fix the denominators and the district figure still describes no wijk. Income across these four runs from 40,700 to 65,800 euro and dwelling value from 526,000 to 892,000. Any Centrum-wide figure sits somewhere in the middle of that and matches nowhere, and a claim about a person living there is further away still.' }
        ] },
        { kind: 'table', caption: 'The district and four of its ten wijken, all published, none comparable without care', head: ['Where', 'Residents', 'People per square kilometre', 'Average income per resident', 'Rented housing'], rows: [
          ['Amsterdam-Centrum, whole district', '90,400 (2026)', '11,244, on 8.04 km2 with no land and water split published', 'not published at this level', 'not published at this level'],
          ['Jordaan', '19,354 (2026)', '23,476, on land', '45,800 euro (2024)', '72 percent'],
          ['Oostelijke Eilanden/Kadijken', '15,484 (2026)', '15,682, on land', '43,400 euro (2024)', '70 percent'],
          ['Grachtengordel-West', '6,465 (2026)', '14,456, on land', '65,800 euro (2024)', '56 percent'],
          ['Burgwallen-Oude Zijde', '4,683 (2026)', '13,600, on land', '40,700 euro (2024)', '80 percent']
        ] },
        { kind: 'callout', h3: 'Ask what the number was computed over, then ask who it is about', p: 'Two questions, in that order, and they catch different mistakes. The first is mechanical: what is on the bottom of this fraction, and is it the same thing as the bottom of the fraction I am comparing it with? Here the answer was no, and the impossible result was the only reason anybody looked. Most of the time there is no impossible result to warn you, and two figures with quietly different denominators simply get compared and believed. The second question is deeper and survives every correction. An average taken over an area is a property of the area. It is not a summary of the places inside it, it is not a midpoint between them, and it is emphatically not a description of anybody who lives there. Say that Centrum has a certain average income and you have said something about eight square kilometres of ground. The person on Kattenburg and the person on the Prinsengracht are both inside that statement and neither is described by it. This mistake has a formal name and an enormous history in public policy, where district-level averages get used to reason about the individuals inside districts, and it produces confident conclusions that reverse the moment anybody looks one level down. The rule that follows is short. To make a claim about wijken, get wijk data. To make a claim about households, get household data. Division is not a substitute for evidence at the level you want to talk about.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for statistics attached to places',
      intro: 'Regional sales, per-branch performance, results by school, uptime by data centre, conversion by country: every one is an aggregate over an area, and every one gets used to reason about the things inside it. Practised on a district that appeared to be emptier than all of its own neighbourhoods.',
      body: [
        { kind: 'table', caption: 'Working with an average that belongs to a place', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Write the denominator down', 'Record what each figure was divided by, in the same row as the figure', 'Two different conventions compared as though they matched', 'Comparisons that survive a second reader'],
          ['Treat an impossible result as a gift', 'When a whole falls outside its parts, look for a definition, not an explanation', 'A clever story invented for a spreadsheet error', 'The actual fault, usually within minutes'],
          ['Name the level of the claim', 'Say whether you are talking about areas, households or people', 'An area statistic used to describe a person', 'A claim somebody can check with the right data'],
          ['Show the spread, not the middle', 'Publish the range across subunits beside any aggregate', 'A single number standing in for a wide distribution', 'A reader who can see whether the average means anything'],
          ['Refuse the partial average', 'Never average a subset and label it the whole', 'Four wijken quietly presented as ten', 'An honest gap where a number would have been wrong']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Two jars of marbles, one big and one small, and a question about which is fuller. The children discover they have to agree what fullness is divided by before they can answer, and that the argument was never about marbles.' },
          { h3: 'For teenagers', p: 'The four wijken and the district in Python, a density function that demands to be told land or total, and a report that prints the range across subunits next to every average. The stretch: build the version that compares total-area district density with land-area wijk density, watch it produce the impossible result, and write the two sentences that explain it.' },
          { h3: 'For adults', p: 'A real regional or per-branch figure from work. Adults reliably find two teams computing the same metric over different denominators, and a conclusion about individual customers drawn from a regional average.' }
        ] },
        { kind: 'p', text: 'The district population, area, governance dates and wijk list come from the municipal entry for the stadsdeel. The wijk populations, households, ages, areas, densities, dwellings, values, tenure shares and incomes come from the national statistics office pages for each wijk, with 2026 populations, 2025 household and housing figures and 2024 incomes. The district density of 11,244, the four-wijk total of 45,986 and the share of 50.9 percent are this page dividing and adding published numbers, and are labelled as arithmetic where they appear.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From two jars of marbles to a report that prints its own denominators',
    intro: 'Which rung a learner starts on comes out of the free hour and what they can already do, and never out of which of the ten wijken the address is in.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Which jar is fuller?', p: 'Children find out that they must agree on the bottom of the fraction first.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'Per what, over what', p: 'Learners start recording what every rate was divided by, next to the rate.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Aggregates and the levels below them', p: 'Teenagers build code that prints the spread across subunits beside every average.', courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'The regional number in the report', p: 'Adults take an area average from work and find out which level it can honestly speak for.', courses: ['data-science-complete-masterclass-college', 'ai-tools-mastery-complete-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will tell you Centrum is less crowded than the Jordaan. Why should a child here learn to say that is impossible?',
    intro: 'Because both figures are published, both are correct, and putting them side by side produces nonsense.',
    p1: 'Hand a model the district density and the wijk density and ask it to compare them, and it will compare them. It has two numbers with the same unit and the same name, and nothing in either one announces that the first was divided by an area including canals and the second by land alone. The output will be fluent, will use the word denser, and will be wrong in a way that no amount of care with the arithmetic could have caught, because the fault was upstream in what each number was made from.',
    p2: 'So the learner practises the habit that does catch it: keep the denominator attached to the figure, and treat an impossible result as information rather than as something to explain away. Then the harder half, which no correction removes, is remembering that a number about eight square kilometres of ground is not a number about a household on Kattenburg. A twelve-year-old who has argued about two jars of marbles will, at twenty-eight, be the person asking whether the regional conversion rate says anything at all about an individual customer. Models will keep comparing whatever is put in front of them. Knowing what a number was made from stays a person\'s job.',
    closer: 'The case for a child in the centre of Amsterdam learning to code in 2026 is therefore not about canals. It is that almost every figure in adult working life is an aggregate over some area or group, that comparing two of them requires knowing what each was divided by, and that a district apparently emptier than all its own neighbourhoods is the most vivid single example this city can offer.',
    blogAnchor: 'the case for a child writing code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes in a district where nothing is far and nothing has room',
    intro: 'Centrum is eight square kilometres and a family can cross it on foot. What it does not have is spare rooms, spare hours or a quiet corner between school and dinner.',
    cells: [
      { h3: 'One hour a week, at your own table', p: 'The lesson runs at home in the Jordaan, on the Kadijken or off the Nieuwmarkt at a fixed weekly time, with no journey and no room to hire at either end.' },
      { h3: 'English, with the school\'s Dutch words kept', p: 'Teaching is entirely in English, which suits a district with this many international households. Groep, havo, vwo and profielkeuze stay Dutch, because a child reads those on their own school paperwork.' },
      { h3: 'What the free hour settles', p: 'A level the learner has shown rather than described, the course that follows from it, and a weekly slot. Payment details are not requested at any stage of it.' },
      { h3: 'Grouped by stage, never by wijk', p: 'Two learners at the same level work together whether one is on the Prinsengracht and the other on Oostenburg, and two at different levels do not, whatever the postcodes say.' },
      { h3: 'Twice weekly, on the regio Noord calendar', p: 'Two lessons a week at a repeating hour, normally eight in a month. Noord-Holland takes its school holidays with regio Noord, and the weeks a family is away go into the plan before it starts.' },
      { h3: 'Three and a half hours ahead, four and a half in winter', p: 'Only the Dutch clock moves, so the gap to the teacher depends on the month. After school, early evening and both weekend days work at either setting.' }
    ],
    spec: { title: 'A district where children are scarce and unevenly spread', p: 'Under-fifteens are 4.38 percent of Burgwallen-Oude Zijde and 8.4 percent of the Oostelijke Eilanden, which is not far off double. In a district where a whole wijk can hold 205 children, the chance that a local club or school can assemble a group of five to ten at one specific level in one specific subject is small, and that is arithmetic rather than any comment on the schools. A group formed on ability from across the world is the version of this that actually fills, at every age up to sixty-seven.' }
  },

  fees: {
    h2: 'The fee, in dollars, the same in all ten wijken',
    intro: 'Printed here rather than kept back for a call.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'One international rate exists, quoted in dollars, with no euro edition, so an address on the Zeedijk sees exactly what an address on the Herengracht sees. Nothing is charged until the free lesson has fixed a course and an hour, and payment is then arranged over WhatsApp. Pausing, changing plan and missing a week are all set out on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, reproduced as the people who left them typed them',

  book: {
    h2: 'Send the level, and keep the wijk to yourself',
    intro: 'The first task might be two jars of marbles and an argument about fullness, a density function that refuses to run until told land or total, or an area average from work that has been describing individuals for years.',
    success: 'Thank you. Your Amsterdam-Centrum class request has been sent.'
  },

  faq: {
    h2: 'Amsterdam-Centrum coding class questions',
    intro: 'The district, its ten wijken, its two sets of figures, the teaching and the terms.',
    items: [
      { q: 'How can a district be less crowded than every neighbourhood in it?', a: 'It cannot, and that is the point. Amsterdam-Centrum is published at 11,244 people to the square kilometre while the Jordaan is at 23,476, the Oostelijke Eilanden at 15,682, Grachtengordel-West at 14,456 and Burgwallen-Oude Zijde at 13,600. The district area of 8.04 square kilometres carries no land and water split, and the wijk densities are computed on land alone. In a district ringed with canals and open to the harbour, that difference is large enough to produce the impossible result. Two numbers with the same name were made from different things.' },
      { q: 'Which wijken are in Amsterdam-Centrum?', a: 'Ten: Burgwallen-Oude Zijde, Burgwallen-Nieuwe Zijde, Grachtengordel-West, Grachtengordel-Zuid, Nieuwmarkt en Lastage, Haarlemmerbuurt, Jordaan, De Weteringschans, Weesperbuurt en Plantage, and Oostelijke Eilanden en Kadijken. This page carries full published figures for four of them, which hold 45,986 of the district\'s 90,400 residents, and gives no invented figures for the other six.' },
      { q: 'Are the wijken in the centre really that different from each other?', a: 'On every measure published for all four checked here, yes. Average income per resident runs from 40,700 euro in Burgwallen-Oude Zijde to 65,800 in Grachtengordel-West. Average dwelling value runs from 526,000 to 892,000 euro. Children under fifteen are 4.38 percent of one wijk and 8.4 percent of another. Rented housing runs from 56 to 80 percent. All of that sits inside one district that a single average would flatten completely.' },
      { q: 'When did Centrum become a stadsdeel?', a: 'In 2002. Before that the binnenstad was administered directly by the central city government. It held the legal status of deelgemeente until 19 March 2014, and since 2018 it has had a directly elected stadsdeelcommissie, which has had eleven members since the 2022 elections.' },
      { q: 'Is the class taught in Dutch?', a: 'No. Every lesson is in English from beginning to end, which suits a district with a large international population. Dutch school vocabulary is kept as a Dutch school writes it, so groep, havo, vwo and profielkeuze are used rather than translated, but no Dutch-language version of any course exists.' },
      { q: 'What hours work for a family in the centre?', a: 'The teacher is three and a half hours ahead during Dutch summer time and four and a half in winter, because only the Dutch clock changes. The workable window runs from the end of the school day to mid-evening, with both weekend days open, and one repeating weekly slot is agreed at the free lesson and then kept.' },
      { q: 'Why not just use a school or club in the centre?', a: 'For a general education, by all means. The difficulty is specific: a group of five to ten learners at one particular level in one particular subject needs a pool to draw from, and a wijk holding 205 children under fifteen does not have one. Groups here are formed on ability from across the world, which is the only arrangement in which a specific level actually fills.' },
      { q: 'Is there a Modern Age Coders classroom in Amsterdam-Centrum?', a: 'No, and none is claimed in the centre, elsewhere in Amsterdam or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Amsterdam-Centrum coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or wijk. One-to-one means one learner with one teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Amsterdam and beyond',
    h2: 'Out to the city, south to Amstelveen, and up to the country',
    html: 'The city page, <a class="cg-inline-link" href="/coding-classes-in-amsterdam">coding classes in Amsterdam</a>, carries the school-advice picture and the map of all eight districts, and the other seven district pages follow this one in the series. South of the ring is <a class="cg-inline-link" href="/coding-classes-in-amstelveen">Amstelveen</a>, the municipality with the highest Indian-origin share in the country, and the whole city sits inside <a class="cg-inline-link" href="/coding-classes-in-noord-holland">Noord-Holland</a>. Everything descends from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and a learner who wants trained models rather than running programs should begin at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Finish this on WhatsApp'
  },

  footerHeading: 'Amsterdam and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-amsterdam', label: 'Amsterdam' },
    { href: '/coding-classes-in-noord-holland', label: 'Noord-Holland' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-acn .cg-hero-grid { align-items: center; gap: clamp(1.5rem, 3.7vw, 2.85rem); }
.cg-root.cg-acn .cg-hero h1 { font-weight: 600; letter-spacing: -0.014em; line-height: 1.07; }
.cg-root.cg-acn .cg-capsule { border-left-width: 5px; border-left-style: solid; border-top: 2px solid var(--cg-accent-soft); padding-left: 1.4rem; padding-top: 0.75rem; }
.cg-root.cg-acn .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-acn .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.01em; }
.cg-root.cg-acn .cg-grid-3 { gap: clamp(1.05rem, 2.2vw, 1.7rem); }
.cg-root.cg-acn .cg-card { border-radius: 2px; }
.cg-root.cg-acn .cg-table caption { letter-spacing: 0.03em; }
.cg-root.cg-acn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-acn .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Stadsdeel Amsterdam-Centrum, Noord-Holland: 90,400 residents on 1 January 2026 across 8.04 km2 published without a land and water split, giving 11,244 per km2; ten wijken, of which four carry full CBS figures here holding 45,986 residents, 50.9 percent of the district; created as a stadsdeel in 2002, deelgemeente status until 19 March 2014, directly elected stadsdeelcommissie since 2018 with eleven members after 2022. The stadsdeel is not a CBS publication level: the office publishes Amsterdam at municipality, wijk and buurt level only, so district figures and wijk figures come from different sources with different conventions. Regio Noord holidays. The district page argues from aggregates over ground; the Amsterdam city page owns the doorstroomtoets disagreement rate and the 2055 projections, Tilburg owns the modifiable areal unit problem and Groningen owns mean versus mode.',
    localProject: 'Ask what the number was computed over, then ask who it is about. Amsterdam-Centrum is published at 90,400 residents on 8.04 km2, which is 11,244 per square kilometre, and every wijk measured inside it is denser: Jordaan 23,476, Oostelijke Eilanden/Kadijken 15,682, Grachtengordel-West 14,456, Burgwallen-Oude Zijde 13,600. A whole cannot be less dense than all its parts, and the impossibility is the signal: the district area carries no land and water split while every wijk density divides by land alone, and in a district on the canals and the harbour the water is a fifth or more of the surface. Fixing the denominators removes the paradox and leaves the real lesson intact, because the district figure still describes no wijk: income across the four runs 40,700 to 65,800 euro, dwelling value 526,000 to 892,000, under-fifteens 4.38 to 8.4 percent and rented housing 56 to 80 percent. An average over an area is a property of the area, not a summary of its parts, not a midpoint between them and not a description of any person in it. Distinct from the modifiable areal unit problem (Tilburg), which is about the zoning changing the statistic; from mean versus mode (Groningen), which is about one distribution; and from the mismatched-denominator trap (Venlo), where the denominator is a real population that excludes the users. Here two denominators measure different surfaces and the deeper fault is inferring downward from an aggregate. No district average is computed from four of ten wijken.',
    requiredMentions: [
      '90,400',
      '19,354',
      '23,476',
      '15,484',
      '15,682',
      '6,465',
      '4,683',
      '13,600',
      '45,986',
      '892,000',
      '40,700',
      'Burgwallen-Oude Zijde',
      'Grachtengordel-West',
      '8,855',
      '556,000'
    ],
    sources: [
      { claim: 'Amsterdam-Centrum: 90.400 inwoners (1 januari 2026); oppervlakte 8,04 km2 with no land and water split given; het stadsdeel werd in 2002 ingesteld, daarvoor werd de binnenstad rechtstreeks door het centrale gemeentebestuur bestuurd; tot 19 maart 2014 had Centrum tevens de wettelijke status van deelgemeente; sinds 2018 heeft Centrum een rechtstreeks gekozen stadsdeelcommissie, with eleven members following the 2022 elections; ten wijken: Burgwallen-Oude Zijde, Burgwallen-Nieuwe Zijde, Grachtengordel-West, Grachtengordel-Zuid, Nieuwmarkt/Lastage, Haarlemmerbuurt, Jordaan, De Weteringschans, Weesperbuurt/Plantage, Oostelijke Eilanden/Kadijken.', url: 'https://nl.wikipedia.org/wiki/Amsterdam-Centrum' },
      { claim: 'Wijk Jordaan, Amsterdam: 19,354 inwoners (2026); 13,260 huishoudens averaging 1.5 (2025); 8,855 eenpersoonshuishoudens, 67 percent; ages 1,245 (0 to 15, 6.4 percent), 2,135 (15 to 25), 7,385 (25 to 45), 4,880 (45 to 65), 3,695 (65+); 95 hectare total, 83 land, 11 water (2025); bevolkingsdichtheid 23,476 per km2 (2025); 13,425 woningen (2025); average WOZ 556,000 euro (2025); 72 percent huurwoningen and 28 percent koopwoningen (2025); average income 45,800 euro per resident (2024); 11 buurten.', url: 'https://allecijfers.nl/wijk/jordaan-amsterdam/' },
      { claim: 'Wijk Burgwallen-Oude Zijde, Amsterdam: 4,683 inwoners (2026); 3,395 huishoudens averaging 1.4 (2025); 2,340 eenpersoonshuishoudens, 69 percent; ages 205 (0 to 15, 4.38 percent), 875 (15 to 25), 2,210 (25 to 45), 910 (45 to 65), 505 (65+); 40 hectare total, 35 land (2025); bevolkingsdichtheid 13,600 per km2 (2025); 3,029 woningen (2025); average WOZ 526,000 euro (2025); 80 percent huurwoningen and 20 percent koopwoningen (2025); average income 40,700 euro (2024); 5 buurten: Kop Zeedijk, Oude Kerk en omgeving, Burgwallen-Oost, Nes en omgeving, BG-terrein en omgeving.', url: 'https://allecijfers.nl/wijk/burgwallen-oude-zijde-amsterdam/' },
      { claim: 'Wijk Oostelijke Eilanden/Kadijken, Amsterdam: 15,484 inwoners (2026); 9,475 huishoudens averaging 1.6 (2025); 5,815 eenpersoonshuishoudens, 61 percent; ages 1,305 (0 to 15, 8.4 percent), 1,725 (15 to 25), 6,140 (25 to 45), 3,630 (45 to 65), 2,730 (65+); 130 hectare total, 99 land (2025); bevolkingsdichtheid 15,682 per km2 (2025); 8,016 woningen (2025); average WOZ 539,000 euro (2025); 70 percent huurwoningen and 30 percent koopwoningen (2025); average income 43,400 euro (2024); 8 buurten: Marine-Etablissement, Kattenburg, Wittenburg, Oostenburg, Czaar Peterbuurt, Kadijken, Het Funen, Kazernebuurt.', url: 'https://allecijfers.nl/wijk/oostelijke-eilanden-kadijken-amsterdam/' },
      { claim: 'Wijk Grachtengordel-West, Amsterdam: 6,465 inwoners (2026); 4,290 huishoudens averaging 1.5 (2025); 2,695 eenpersoonshuishoudens, 63 percent; ages 410 (0 to 15, 6.3 percent), 995 (15 to 25), 2,295 (25 to 45), 1,590 (45 to 65), 1,160 (65+); 57 hectare total, 45 land (2025); bevolkingsdichtheid 14,456 per km2 (2025); 4,394 woningen (2025); average WOZ 892,000 euro (2025); 56 percent huurwoningen (2025); average income 65,800 euro (2024); 4 buurten.', url: 'https://allecijfers.nl/wijk/grachtengordel-west-amsterdam/' },
      { claim: 'Amsterdam: 941,927 inwoners (2026); 516,096 huishoudens (2025); 2 woonplaatsen, 111 wijken en 519 buurten; the site publishes per-wijk and per-buurt pages but no stadsdeel-level pages.', url: 'https://allecijfers.nl/gemeente/amsterdam/' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any district-level average income, dwelling value, household size or age share. Four of ten wijken were read and a partial average is not an average.',
      'The district density of 11,244 compared with wijk densities as though the two were the same measurement. The district area is published without a land and water split and every wijk density divides by land alone, and the page says so wherever both appear.',
      'Figures for Burgwallen-Nieuwe Zijde, Grachtengordel-Zuid, Nieuwmarkt/Lastage, Haarlemmerbuurt, De Weteringschans or Weesperbuurt/Plantage. They are named and no numbers are invented for them.',
      'An exact land area for the stadsdeel. The municipal entry gives only a single 8.04 km2 figure.',
      'Anything the Amsterdam city page owns: the doorstroomtoets disagreement rate, the Centrale Loting en Matching figures, the 2055 projections and the primary school counts.',
      'The zoning argument, which belongs to the Tilburg page, and the mean-versus-mode argument, which belongs to the Groningen page.'
    ]
  }
};
