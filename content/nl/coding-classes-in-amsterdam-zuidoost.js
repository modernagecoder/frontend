'use strict';
// Amsterdam-Zuidoost: 95,385 residents, a stadsdeel since 1987, holding a
// converted office district and a family suburb.
// Spine: the same column name can hold two different kinds of object. A
// dwelling in Amstel III and a dwelling in Gein are not the same thing, so
// averaging the column is partly a statement about the mixture.

module.exports = {
  slug: 'coding-classes-in-amsterdam-zuidoost',
  code: 'azo',
  accent: '#5B284C',
  accentRationale: 'Amsterdam-Zuidoost: a dark plum off the Bijlmer brick, the last band left with real separation and readable apart from the rose, ochre, violet, viridian, harbour teal and moss on the other six Amsterdam district pages',
  pageType: 'district',
  place: {
    name: 'Amsterdam-Zuidoost',
    eyebrow: 'Zuidoost, Amsterdam',
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
  routeLabel: 'Amsterdam-Zuidoost, Netherlands',
  title: 'Coding Classes in Amsterdam-Zuidoost | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Amsterdam-Zuidoost for ages 6 to 67, from the Bijlmer out to Gein. The first lesson costs nothing at all.',
  ogDescription: 'Live online coding, Python and AI for families in Amsterdam-Zuidoost, where one neighbourhood has cheaper homes and richer residents than the next one along.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'complete-app-development-masterclass-for-teens',
  verifiedOn: '9 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Amsterdam-Zuidoost Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults across the Bijlmer, Gaasperdam and Gein, taught in English.'
  },

  h1: 'Coding classes in Amsterdam-Zuidoost, where the neighbourhood with the cheaper homes has the better-off residents',
  capsuleQ: 'What are the best coding classes in Amsterdam-Zuidoost?',
  capsule: 'Coding classes in Amsterdam-Zuidoost reach 95,385 residents (1 January 2026) across 22.08 square kilometres, in a district that has been a stadsdeel since 1987. Amstel III and Bullewijk has an average dwelling value of 211,000 euro and an average income of 37,400 euro. Gein, a few minutes down the line, has 344,000 euro and 30,600 euro. Cheaper homes and better-off people, in that order, which happens because the word dwelling is doing two different jobs. Modern Age Coders teaches live online in English across the whole district, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'In Amstel III and Bullewijk the average home is valued at 211,000 euro and the average resident earns 37,400. In Gein the average home is 344,000 and the average resident earns 30,600. Cheaper housing, richer people. That combination is not a puzzle about the property market. It is what happens when one column called dwellings holds rented studios averaging 1.2 occupants in one row and family houses averaging 2.0 in the next, and somebody takes the average anyway.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Amsterdam-Zuidoost.',

  picks: {
    eyebrow: 'Course picks for Amsterdam-Zuidoost',
    h2: 'Four courses for a district of families and a district of twenty-somethings, side by side',
    intro: 'A groep 5 child in Gein who has finished every game in the house and wants to make one, a teenager in the Bijlmer with an app in mind and no idea where an app comes from, a student near the AMC who needs Python to stop being a chore, and an adult in Holendrecht handed a set of AI tools at work with no instructions attached: four doors, and the first hour of each is free.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Real typed Python, drawings that obey instructions and a first program that finds a rule, taught in English to the groep 5 to 8 child anywhere in the district.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'An application taken from an empty project to something that installs and runs, for the teenager who has described one to three adults and built none of it.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python that gathers, cleans, decides and reports without supervision, for the student or worker repeating one job by hand every week.' },
      { course: 'ai-tools-mastery-complete-college', band: 'Adults', note: 'The current tools handled with judgement instead of faith, for anybody whose employer switched them on and moved straight to the deadline.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Zuidoost today',
      h2: 'Ninety-five thousand people, and the oldest stadsdeel in the city',
      intro: 'Zuidoost was established as a stadsdeel in 1987 with a directly elected stadsdeelraad, which makes it the longest-standing of the eight. It counted 95,385 residents on 1 January 2026 across 22.08 square kilometres. Unlike several of its neighbours, its published population is current, so the figures on this page sit in the same year as the wijk figures below them.',
      body: [
        { kind: 'spec', title: 'Four areas since 2022, and a district rebuilt before that', p: 'Since 24 March 2022 the district has been divided into four areas: Bijlmer-West, coded GT21, Bijlmer-Centrum GT22, Bijlmer-Oost GT23 and Gaasperdam GT24. After 19 March 2014 Zuidoost continued to exist as a stadsdeel while the form of government attached to it changed. From the 1990s onward a large part of the Bijlmermeer was extensively renewed, which is why so much of the housing here is younger than the district. What that kind of rebuilding does to a place that keeps its name is the argument of the Amsterdam-West page in this series, and this page leaves it there. The district also holds Venserpolder, the Amsterdamse Poort, Ganzenhoef, Geerdinkhof, Kantershof, Holendrecht, Nellestein, Reigersbos and Gein, along with Station Amsterdam Bijlmer ArenA, the Johan Cruijff ArenA and the ArenAPoort shopping area.' },
        { kind: 'grid3', cells: [
          { h3: 'A district at 4,320 to the square kilometre', p: '95,385 residents over 22.08 square kilometres gives about 4,320 people to the square kilometre, which this page is working out rather than quoting. That is thin by Amsterdam standards, and the reason is visible in the two wijken below: one of them is a converted business park with 859 people to the square kilometre.' },
          { h3: 'Two wijken, chosen for how unlike they are', p: 'Amstel III and Bullewijk, and Gein. They hold 16,518 residents between them, and on almost every published measure they point in opposite directions. That is what makes them useful rather than what makes them unusual.' },
          { h3: 'What is not computed here', p: 'No Zuidoost average of income, dwelling value, household size or age. Two wijken cannot produce one, and the point of this page is that averaging across places this different would produce a number describing neither of them.' }
        ] }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'One column name, two entirely different objects',
      intro: 'Both of these are wijken of Amsterdam-Zuidoost and both are described by the same set of published columns. Populations are 2026, households and housing are 2025, incomes are 2024.',
      body: [
        { kind: 'table', caption: 'The same fields, filled in for two very different places', head: ['What the column is called', 'Amstel III and Bullewijk', 'Gein', 'Does the name mean the same thing?'], rows: [
          ['Residents', '5,440', '11,078', 'yes'],
          ['Households, average size', '2,805 at 1.2 people', '5,550 at 2.0 people', 'the unit differs: 1.2 is barely a household'],
          ['Single-person households', '2,225, 79 percent', '2,550, 46 percent', 'no, these are different living arrangements'],
          ['Dwellings', '2,595', '5,147', 'no: rented units against family houses'],
          ['Rented, and owned', '2,595 rented, 100 percent, and 0 owned', '3,037 rented, 59 percent, and 2,110 owned', 'no, and the zero is the clue'],
          ['Average dwelling value', '211,000 euro', '344,000 euro', 'not comparable, for the reason above'],
          ['Average income per resident', '37,400 euro', '30,600 euro', 'yes, and it runs the other way'],
          ['Under fifteen, and sixty-five plus', '235 and 60', '1,605 and 2,445', 'yes, and the gap is enormous'],
          ['People per square kilometre', '859', '6,117', 'yes, seven times apart']
        ] },
        { kind: 'p', text: 'Amstel III and Bullewijk holds seven buurten, among them the AMC, Hoge Dijk and four numbered stretches of Amstel III itself, on 500 hectares of land. Gein holds four, named Gein 1 to Gein 4, on 183 hectares. The rest of the district, including Venserpolder, Holendrecht, Reigersbos, Nellestein, Ganzenhoef, Geerdinkhof and Kantershof, is named and given no invented figures. Placement here follows what a learner can already do, so a child from Gein 3 and a teenager from the Bijlmer meet in one group when they are working at one level.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure, its source, its year, and one arithmetic check',
      intro: 'One district entry, two wijk pages, and a subtraction that shows the two places are not built the same way.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The district, from its entry', p: 'Het stadsdeel telde op 1 januari 2026 95.385 inwoners; het heeft een oppervlakte van 22,08 km2; Zuidoost werd in 1987 ingesteld als stadsdeel met een rechtstreeks gekozen stadsdeelraad; na 19 maart 2014 bleef Zuidoost als stadsdeel bestaan, maar veranderde de daaraan verbonden bestuursvorm; since 24 March 2022 it is divided into Bijlmer-West (GT21), Bijlmer-Centrum (GT22), Bijlmer-Oost (GT23) and Gaasperdam (GT24); vanaf de jaren negentig werd een groot deel van de Bijlmermeer ingrijpend vernieuwd.' },
          { h3: 'Amstel III and Bullewijk', p: '5,440 residents (2026); 2,805 households averaging 1.2 (2025), of which 2,225 hold one person, 79 percent; ages 235 under fifteen at 4.32 percent, 1,755 aged fifteen to twenty-five at 32 percent, 3,090 aged twenty-five to forty-five at 57 percent, 295 aged forty-five to sixty-five at 5.4 percent and 60 aged sixty-five and over at 1.1 percent; 527 hectares total, 500 land and 28 water; density 859; 2,595 dwellings, all 2,595 of them rented at 100 percent and none owned; average value 211,000 euro; average income 37,400 euro (2024); seven buurten.' },
          { h3: 'Gein', p: '11,078 residents (2026); 5,550 households averaging 2.0 (2025), of which 2,550 hold one person, 46 percent; ages 1,605 at 14 percent, 1,300 at 12 percent, 2,960 at 27 percent, 2,760 at 25 percent and 2,445 at 22 percent; 192 hectares total, 183 land and 9 water; density 6,117; 5,147 dwellings, 3,037 rented at 59 percent and 2,110 owned at 41; average value 344,000 euro; average income 30,600 euro (2024); four buurten, Gein 1 to Gein 4.' },
          { h3: 'A subtraction worth doing', p: 'Multiply 2,805 households by an average of 1.2 and you account for about 3,366 of Amstel III\'s 5,440 residents. Even at 1.25, the top of what the published 1.2 can round from, you reach only 3,506. So at least 1,900 residents there are not inside a private household at all. Gein\'s 5,550 households at 2.0 account for essentially all of its 11,078. Why a rounding bound is the right test is the Amsterdam-Noord page; here it is simply used.' },
          { h3: 'What is not claimed', p: 'This page does not say what those 1,900 residents live in. The published figures name no institution, and a district holding a large academic hospital and a great deal of recently built rented accommodation offers more than one candidate. The gap is computed, its size is stated, and its cause is left alone.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the stadsdeel, the city, the hospital or any school named here and claims none. The district density of about 4,320, the two-wijk total of 16,518 and the household arithmetic above are this page multiplying and subtracting published numbers, and are labelled as arithmetic where they appear.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Cheaper homes, richer residents, and a column that lied by keeping its name',
      intro: 'Two wijken, one schema, and an inversion that disappears the moment you ask what a row actually represents.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Notice the relationship running backwards', p: 'Across most neighbourhoods, higher average incomes sit beside higher average dwelling values. Here it inverts: 37,400 euro of income against 211,000 of dwelling value in one wijk, and 30,600 against 344,000 in the other. An inversion is not a mystery to be explained. It is a prompt to check whether the two columns are measuring what their names say.' },
          { h3: '2. Ask what one row is', p: 'In Amstel III every one of the 2,595 dwellings is rented and none is owned, average household size is 1.2, 79 percent of households are one person, and only 60 residents in the whole wijk are over sixty-five. In Gein, 41 percent of homes are owned, households average 2.0 and 2,445 residents are over sixty-five. The word dwelling is covering a rented unit for one young adult in the first case and a family house in the second.' },
          { h3: '3. Stop averaging across the boundary', p: 'Once the rows are different kinds of object, an average over them is a statement about the mixture rather than about value. The fix is not a better average. It is to split the column by type, report each separately, and say plainly that a district-wide figure would answer no question anybody has.' }
        ] },
        { kind: 'table', caption: 'What each figure is really telling you', head: ['Reading', 'What it looks like it says', 'What it actually says', 'The check that catches it'], rows: [
          ['Homes are cheaper in Amstel III', 'housing is more affordable there', 'the units counted are smaller and all rented', 'look at tenure: 100 percent rented, 0 owned'],
          ['Residents earn more in Amstel III', 'it is the more prosperous neighbourhood', 'its residents are 89 percent aged fifteen to forty-five', 'look at the age profile, not the average'],
          ['Gein has more expensive homes', 'it is the wealthier place', '41 percent of its homes are owner-occupied family housing', 'compare tenure before comparing value'],
          ['A district average of either', 'a summary of Zuidoost', 'a weighted statement about which type dominates', 'ask whether the rows are the same kind of thing'],
          ['1.2 people per household', 'small households', 'at least 1,900 residents outside private households entirely', 'multiply households by size and compare with population']
        ] },
        { kind: 'callout', h3: 'Before you average a column, check that the rows are the same kind of thing', p: 'A schema is a promise that everything in a column is comparable, and it is a promise nothing enforces. The column header says dwellings, and in one row that is a rented studio holding one person and in the next it is a house holding a family, and the header says dwellings in both. Take the average and you have produced a number that moves when the mixture moves, whether or not a single price has changed. This is the quietest way that data goes wrong, because nothing is missing, nothing is stale, nothing is mistyped and every individual value is correct. The examples multiply as soon as you look. Average order value in a business that sells a five pound accessory and a five thousand pound machine tells you about the sales mix. Average session length across a site with bots and humans on it tells you what share are bots. Average salary across full-time and part-time staff moves when hiring patterns move. Average response time across cached and uncached requests measures the cache hit rate. In every case the fix is the same and it is unglamorous: find the type, split the column by it, report the parts, and only then decide whether any combined figure is worth publishing. The tell is often an inversion, a relationship that everybody expects running the wrong way round, as it does here. An inversion almost never means the world is surprising. It means two things sharing a column name are not the same thing, and the mixture has changed between the rows.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for a column that holds more than one kind of thing',
      intro: 'Order values, session lengths, salaries, response times, ticket resolution: every one of them is routinely averaged over rows that are not comparable. Practised on two neighbourhoods where cheaper housing sits beside higher incomes.',
      body: [
        { kind: 'table', caption: 'Averaging only where averaging is allowed', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Ask what one row is', 'Write a sentence describing a single row before touching the column', 'A schema trusted because it has a name', 'The type, which everything else depends on'],
          ['Look for a type field', 'Find the column that already distinguishes the kinds, or add one', 'Two populations blended invisibly', 'The ability to split later without re-collecting'],
          ['Split before summarising', 'Report the average per type, then decide about a combined figure', 'A number that moves with the mixture', 'Figures that mean what they appear to mean'],
          ['Treat inversions as evidence', 'When a relationship runs backwards, suspect the definitions first', 'A surprising story told about a schema fault', 'A fast route to the actual problem'],
          ['Cross-check the totals', 'Multiply an average by its count and compare with the whole', 'A category quietly covering part of the population', 'A size for what the column is missing']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'The average price of everything in a shop that sells sweets and bicycles. The children compute it, notice it describes nothing on either shelf, and work out the rule about when averaging is allowed at all.' },
          { h3: 'For teenagers', p: 'The two wijken in Python, with a type field on every row and an average function that refuses to run across mixed types unless it is told to. The stretch: produce the inverted result on purpose, then write the two sentences that explain it away.' },
          { h3: 'For adults', p: 'A real average from work. Adults very reliably find a mixture inside it, a change in that mixture that moved the figure, and a meeting where the movement was explained as something else entirely.' }
        ] },
        { kind: 'p', text: 'The district population, area, formation, governance, the four areas of 2022 and the renewal of the Bijlmermeer come from the stadsdeel entry, with the population dated 1 January 2026. Every population, household, age, area, density, dwelling, value, tenure and income figure comes from the national statistics office page for the wijk named beside it, with 2026 populations, 2025 household and housing figures and 2024 incomes. The district density of about 4,320, the two-wijk total of 16,518, the 89 percent aged fifteen to forty-five and the household arithmetic showing at least 1,900 residents outside private households are this page multiplying, dividing and subtracting published numbers, and are labelled as arithmetic wherever they appear.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a shop selling sweets and bicycles to an average that refuses to cross a type',
    intro: 'The rung is settled in the free hour by what the learner can already do, and never by which part of the district the address falls in.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'What is the average thing in this shop?', p: 'Children compute an average that describes nothing on either shelf.', courses: ['kids-coding-blocks-masterclass', 'roblox-game-coding-for-kids-lua-course'] },
      { band: 'Ages 11 to 13', h3: 'Describe one row out loud', p: 'Learners say what a single record is before they do anything to the column.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Type fields and averages that refuse', p: 'Teenagers build a summary that will not run across mixed kinds without being told to.', courses: ['complete-app-development-masterclass-for-teens', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'The mixture inside the metric', p: 'Adults take a real average from work and find the two populations hiding in it.', courses: ['python-ai-automation-masterclass-college', 'ai-tools-mastery-complete-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will explain why cheaper homes sit beside higher incomes. Why should a teenager in Zuidoost distrust the explanation?',
    intro: 'Because the inversion is not a fact about the housing market; it is a fault in a column header.',
    p1: 'Give a model the two rows and ask why one neighbourhood has cheaper housing and better-off residents, and it will produce something about young professionals, about regeneration, about proximity to work. Each of those is a reasonable sentence and all of them are answers to a question that should have been refused, because the two dwelling figures are averages over different kinds of object: 2,595 rented units with no owner-occupation at all in one wijk, and a stock that is 41 percent owned family housing in the other. Nothing in the numbers announces that. The column is called dwellings in both rows.',
    p2: 'So the learner practises describing one row out loud before touching the column, and then writes the version that enforces it, with a type on every record and an average that will not silently cross one. It is a small amount of code guarding against the most invisible failure in the whole subject, because nothing is missing and every value is correct. A fourteen-year-old in Gein who has taken an inverted result apart will be the person at twenty-nine who asks what a row is before agreeing that average order value has fallen. Models will keep producing the explanation on request. Refusing the question stays a person\'s job.',
    closer: 'The case for a child in Amsterdam-Zuidoost learning to code in 2026 is therefore not about property. It is that averages are the most trusted and least examined operation in working life, that they are only valid over things of one kind, and that two neighbourhoods a few minutes apart with the price and the income running opposite ways make the rule impossible to forget.',
    blogAnchor: 'why learning to code still repays a child in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes from the Bijlmer out to Gein',
    intro: 'Zuidoost is spread across twenty-two square kilometres and served by a metro that runs north to south, which is fine until the class a family wants is not on the line at all.',
    cells: [
      { h3: 'Twenty-two square kilometres, and nothing to cross', p: 'The class happens wherever the laptop already is, in Gein, in Holendrecht or in the middle of the Bijlmer, at one hour that repeats. In a district this size on one metro line, that removes the part families actually struggle with.' },
      { h3: 'Four Dutch words, and the rest in English', p: 'Groep. Havo. Vwo. Profielkeuze. Those stay as the school prints them, and everything built around them is English. A child should not have to work out which term the teacher means before working out the lesson.' },
      { h3: 'The opening hour costs nothing and settles everything', p: 'What the learner can do is established by giving them something to do. The course is then whatever that answer points at, and a weekly time is agreed on the spot. Card details are not collected at any stage of it.' },
      { h3: 'Grouped by what they can do, and by nothing else', p: 'Two learners working at one level belong together whether one is in Gein and the other in Venserpolder. Two at different levels do not belong together, and no shared postcode changes that.' },
      { h3: 'Eight lessons in most months', p: 'Two a week at a repeating hour. Because Noord-Holland sits in the regio Noord holiday block, the weeks that will be lost to it are known in advance, and they are put into the schedule rather than discovered halfway through a term.' },
      { h3: 'A time difference that only one side causes', p: 'The Indian clock has not moved since it was set. The Dutch one does, twice a year, which is why the teacher is three and a half hours ahead for part of the year and four and a half for the rest. Both settings leave the same usable window open.' }
    ],
    spec: { title: 'Two neighbourhoods with almost no age overlap', p: 'Amstel III and Bullewijk has 235 residents under fifteen and 60 over sixty-five. Gein, in the same district, has 1,605 and 2,445. One is a place almost entirely of people between fifteen and forty-five, 89 percent of it; the other has a full age range. A district that looks average in aggregate is nothing of the kind on the ground, which is precisely why a group formed on ability from across the world beats one formed from whoever happens to live nearby, at every age up to sixty-seven.' }
  },

  fees: {
    h2: 'The fee, in dollars, everywhere in the district',
    intro: 'On the page rather than kept back for a call.',
    first: 'A full lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'There is one international rate, quoted in dollars, with no euro edition, so an address in Gein is charged exactly what an address near the AMC is. Nothing is paid until the free lesson has settled a course and an hour, and payment is arranged over WhatsApp afterwards. Pausing, switching plan and missing a week are all described on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, kept exactly as the people who left them wrote them',

  book: {
    h2: 'Tell us the level, not the neighbourhood',
    intro: 'The first task might be the average price of everything in a shop that sells sweets and bicycles, an average that refuses to run across two types, or a metric at work that moved because its mixture did.',
    success: 'Thank you. Your Amsterdam-Zuidoost class request has been sent.'
  },

  faq: {
    h2: 'Amsterdam-Zuidoost coding class questions',
    intro: 'The district, two very unlike neighbourhoods, one inverted result, the teaching and the terms.',
    items: [
      { q: 'How can a neighbourhood have cheaper homes and better-off residents at the same time?', a: 'Because the two figures are not describing the same kind of object. Amstel III and Bullewijk has an average dwelling value of 211,000 euro and an average income of 37,400; Gein has 344,000 and 30,600. In Amstel III all 2,595 dwellings are rented and none is owner-occupied, households average 1.2 people and 79 percent of them hold one person. In Gein 41 percent of homes are owned and households average 2.0. The word dwelling is covering a rented unit for one young adult in one row and a family house in the next, so averaging the column compares two different things.' },
      { q: 'Where are the missing residents of Amstel III?', a: 'This page does not say, and it is careful not to guess. Multiplying 2,805 households by an average of 1.2 accounts for about 3,366 of the 5,440 residents, and even at 1.25, the highest the published 1.2 could round from, only 3,506. So at least 1,900 people there are not in a private household. The district holds a large academic hospital and a great deal of recently built rented accommodation, and nothing published that was read here says which of those explains the gap.' },
      { q: 'What are the two neighbourhoods on this page?', a: 'Amstel III and Bullewijk, with 5,440 residents across seven buurten including the AMC and Hoge Dijk on 500 hectares of land, and Gein, with 11,078 residents across four buurten named Gein 1 to Gein 4 on 183 hectares. They were chosen for how unlike each other they are. The rest of the district, including Venserpolder, Holendrecht, Reigersbos, Nellestein, Ganzenhoef, Geerdinkhof and Kantershof, is named on this page without figures.' },
      { q: 'How long has Zuidoost been a district?', a: 'Since 1987, when it was established as a stadsdeel with a directly elected stadsdeelraad, which makes it the longest-standing of the eight. After 19 March 2014 it continued to exist as a stadsdeel while the form of government attached to it changed, and since 24 March 2022 it has been divided into four areas: Bijlmer-West, Bijlmer-Centrum, Bijlmer-Oost and Gaasperdam.' },
      { q: 'Is the class taught in Dutch?', a: 'No, English is the language of the lesson from the first minute to the last. Four Dutch school words are held back from that rule, groep and havo and vwo and profielkeuze, on the grounds that a child already knows them and an English rendering would only need turning back again. Nothing is offered in a Dutch edition.' },
      { q: 'What hours suit a family in Zuidoost?', a: 'For part of the year the teacher is three and a half hours ahead and for the rest four and a half, a difference produced entirely by the Dutch clock changing while the Indian one does not. In practice that leaves every afternoon after school, every early evening, and the whole of both weekend days. One repeating hour is chosen in the free lesson and then left alone.' },
      { q: 'Why not use a class nearer home?', a: 'For most things, do. The specific difficulty is that a group of five to ten learners at one particular level in one particular subject needs a pool to draw from, and this district is two very different populations rather than one: a wijk with 235 children under fifteen sits beside one with 1,605. Groups here are formed on ability from across the world, which is the only arrangement in which a narrow level actually fills.' },
      { q: 'Is there a Modern Age Coders classroom in Amsterdam-Zuidoost?', a: 'No, and none is claimed in the Bijlmer, elsewhere in Amsterdam or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Amsterdam-Zuidoost coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or neighbourhood. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Amsterdam and beyond',
    h2: 'North-west into the city, and out to the province',
    html: 'North-west of here is <a class="cg-inline-link" href="/coding-classes-in-amsterdam-oost">Amsterdam-Oost</a>, whose page sets two neighbourhoods with the same number of homes against each other, and beyond it <a class="cg-inline-link" href="/coding-classes-in-amsterdam-zuid">Amsterdam-Zuid</a> and its two disagreeing registers. <a class="cg-inline-link" href="/coding-classes-in-amsterdam-west">Amsterdam-West</a> carries the label that outlived its buildings. The city page, <a class="cg-inline-link" href="/coding-classes-in-amsterdam">coding classes in Amsterdam</a>, holds the picture for all eight districts, and just south of the city sits <a class="cg-inline-link" href="/coding-classes-in-amstelveen">Amstelveen</a>. Everything descends from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and a learner who wants trained models rather than running programs should begin at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Carry on in WhatsApp'
  },

  footerHeading: 'Amsterdam and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-amsterdam', label: 'Amsterdam' },
    { href: '/coding-classes-in-amsterdam-oost', label: 'Amsterdam-Oost' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-azo .cg-hero-grid { align-items: center; gap: clamp(1.45rem, 3.5vw, 2.75rem); }
.cg-root.cg-azo .cg-hero h1 { font-weight: 600; letter-spacing: -0.0145em; line-height: 1.1; }
.cg-root.cg-azo .cg-capsule { border-left-width: 3px; border-left-style: solid; border-right: 3px solid var(--cg-accent-soft); padding-left: 1.3rem; padding-right: 1.3rem; }
.cg-root.cg-azo .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; }
.cg-root.cg-azo .cg-section-head h2 { max-width: 35ch; letter-spacing: -0.009em; }
.cg-root.cg-azo .cg-grid-3 { gap: clamp(1.05rem, 2.2vw, 1.65rem); }
.cg-root.cg-azo .cg-card { border-radius: 8px; }
.cg-root.cg-azo .cg-table caption { font-weight: 700; letter-spacing: 0.025em; }
.cg-root.cg-azo .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-azo .cg-ladder-col { border-left: 5px solid var(--cg-accent-soft); padding-left: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Stadsdeel Amsterdam-Zuidoost, Noord-Holland: 95,385 residents on 1 January 2026 across 22.08 km2, about 4,320 per km2; established as a stadsdeel in 1987 with a directly elected stadsdeelraad, the longest-standing of the eight; after 19 March 2014 it continued as a stadsdeel with a changed form of government; divided since 24 March 2022 into Bijlmer-West GT21, Bijlmer-Centrum GT22, Bijlmer-Oost GT23 and Gaasperdam GT24; a large part of the Bijlmermeer was extensively renewed from the 1990s. Two wijken carry full figures: Amstel III/Bullewijk 5,440 residents, 2,805 households at 1.2, 2,595 dwellings all rented, WOZ 211,000 euro, income 37,400 euro, density 859; Gein 11,078 residents, 5,550 households at 2.0, 5,147 dwellings with 41 percent owned, WOZ 344,000 euro, income 30,600 euro, density 6,117. Regio Noord holidays. The district page argues from a column holding two kinds of object; Amsterdam-Centrum owns aggregates over ground, Noord the rounding bound, Oost self-selection, Zuid the two registers, West the identifier that outlived its referent, Nieuw-West settings versus measurements.',
    localProject: 'Before you average a column, check that the rows are the same kind of thing. Amstel III and Bullewijk has an average dwelling value of 211,000 euro and an average income of 37,400; Gein, in the same district, has 344,000 and 30,600. Cheaper housing beside higher incomes inverts the usual relationship, and the inversion is the signal. In Amstel III all 2,595 dwellings are rented and none owned, households average 1.2 with 79 percent single-person, and only 60 of 5,440 residents are over sixty-five while 89 percent are between fifteen and forty-five. In Gein 2,110 of 5,147 dwellings are owner-occupied, households average 2.0 and 2,445 residents are over sixty-five. The column called dwellings holds a rented unit for one young adult in one row and a family house in the next, so its average is a statement about the mixture rather than about value. A supporting subtraction: 2,805 households at 1.2 account for about 3,366 residents and at most 3,506 at the top of the rounding, leaving at least 1,900 of the 5,440 outside any private household, a gap the page sizes and refuses to explain. Distinct from self-selection (Amsterdam-Oost), where both measurements are sound and the fault is attributing a group difference to the group label; from the two-register trap (Amsterdam-Zuid), where two counts of different objects are compared deliberately; and from the unit-of-observation trap (Zeeland), where two legitimate row types produce two rankings: here one column silently contains two types and every individual value is correct.',
    requiredMentions: [
      '95,385',
      '5,440',
      '2,805',
      '2,595',
      '211,000',
      '37,400',
      '11,078',
      '5,550',
      '5,147',
      '344,000',
      '30,600',
      '6,117',
      'Amstel III',
      'Bullewijk'
    ],
    sources: [
      { claim: 'Amsterdam-Zuidoost: het stadsdeel telde op 1 januari 2026 95.385 inwoners; het heeft een oppervlakte van 22,08 km2; Zuidoost werd in 1987 ingesteld als stadsdeel met een rechtstreeks gekozen stadsdeelraad; na 19 maart 2014 bleef Zuidoost als stadsdeel bestaan, maar veranderde de daaraan verbonden bestuursvorm; since 24 March 2022 divided into Bijlmer-West (GT21), Bijlmer-Centrum (GT22), Bijlmer-Oost (GT23) en Gaasperdam (GT24); vanaf de jaren negentig werd een groot deel van de Bijlmermeer ingrijpend vernieuwd; the district contains Venserpolder, Amsterdamse Poort, Ganzenhoef, Geerdinkhof, Kantershof, Holendrecht, Nellestein, Reigersbos and Gein, along with Station Amsterdam Bijlmer ArenA, the Johan Cruijff ArenA and the ArenAPoort.', url: 'https://nl.wikipedia.org/wiki/Amsterdam-Zuidoost' },
      { claim: 'Wijk Amstel III/Bullewijk, Amsterdam: 5,440 inwoners (2026); 2,805 huishoudens averaging 1.2 (2025), 2,225 eenpersoonshuishoudens at 79 percent; ages 235 (0 to 15, 4.32 percent), 1,755 (15 to 25, 32 percent), 3,090 (25 to 45, 57 percent), 295 (45 to 65, 5.4 percent), 60 (65+, 1.1 percent); 527 hectare total, 500 land, 28 water; bevolkingsdichtheid 859 per km2 (2025); woningvoorraad 2,595 (2025); average WOZ 211,000 euro (2025); 2,595 huurwoningen (100 percent) and 0 koopwoningen (0 percent); average income 37,400 euro (2024); 7 buurten: Hoofdcentrum-Zuidoost, Amstel III deel A/B-Noord, Amstel III deel C/D-Noord, Amstel III deel A/B-Zuid, Amstel III deel C/D-Zuid, AMC, Hoge Dijk.', url: 'https://allecijfers.nl/wijk/amstel-iii-bullewijk-amsterdam/' },
      { claim: 'Wijk Gein, Amsterdam: 11,078 inwoners (2026); 5,550 huishoudens averaging 2.0 (2025), 2,550 eenpersoonshuishoudens at 46 percent; ages 1,605 (0 to 15, 14 percent), 1,300 (15 to 25, 12 percent), 2,960 (25 to 45, 27 percent), 2,760 (45 to 65, 25 percent), 2,445 (65+, 22 percent); 192 hectare total, 183 land, 9 water; bevolkingsdichtheid 6,117 per km2; woningvoorraad 5,147 (2025); average WOZ 344,000 euro (2025); 3,037 huurwoningen (59 percent) and 2,110 koopwoningen (41 percent); average income 30,600 euro (2024); 4 buurten, Gein 1 to Gein 4.', url: 'https://allecijfers.nl/wijk/gein-amsterdam/' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any explanation of what the at-least-1,900 residents of Amstel III outside private households actually live in. The gap is computed and sized; no source read names an institution, and the page declines to guess.',
      'Any comparison of the two average dwelling values as though they were prices for comparable homes. One stock is 100 percent rented with no owner-occupation and the other is 41 percent owned.',
      'A Zuidoost average of income, dwelling value, household size or age. Two wijken cannot produce one, and averaging across places this unlike is the error the page is about.',
      'Any argument about the Bijlmermeer being rebuilt while keeping its name. That is the Amsterdam-West page.',
      'Any re-derivation of why a rounding bound is the correct test on the household arithmetic. The Amsterdam-Noord page carries that; this page only applies it.',
      'Figures for Venserpolder, Holendrecht, Reigersbos, Nellestein, Ganzenhoef, Geerdinkhof or Kantershof. They are named and given no numbers.',
      'Anything the Amsterdam city page owns, including the doorstroomtoets rates, the international school locations and the 2055 district projections.'
    ]
  }
};
