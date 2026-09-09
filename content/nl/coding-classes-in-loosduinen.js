'use strict';
// Loosduinen: the western stadsdeel of The Hague, four wijken, all read.
// Spine: the WOZ figure this series has printed on sixty-nine pages is an
// estimate, and once stored it is indistinguishable from a measurement.

module.exports = {
  slug: 'coding-classes-in-loosduinen',
  code: 'lsn',
  accent: '#8A4000',
  accentRationale: 'Loosduinen: a dune ochre off the sand at Kijkduin and the old brick of the village core, the widest separation available from every Hague page it links to, and nearest to Deventer, which it does not link to',
  pageType: 'district',
  place: {
    name: 'Loosduinen',
    eyebrow: 'Loosduinen, Den Haag',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'City', name: 'The Hague' },
      { type: 'AdministrativeArea', name: 'Zuid-Holland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-netherlands', name: 'Netherlands' },
    { slug: 'coding-classes-in-the-hague', name: 'The Hague' }
  ],
  nav: [
    { label: 'The Hague', href: '/coding-classes-in-the-hague' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Loosduinen, The Hague, Netherlands',
  title: 'Coding Classes in Loosduinen, The Hague | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Loosduinen, The Hague, for ages 6 to 67, from Houtwijk and Waldeck to Kijkduin. The first lesson is free.',
  ogDescription: 'Live online coding, Python and AI in the west of The Hague, on a page about a number everybody quotes and nobody measured.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'data-and-ai-analytics-for-non-programmers-course',
  verifiedOn: '10 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Loosduinen Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults across the four wijken of stadsdeel Loosduinen in The Hague, taught in English.'
  },

  h1: 'Coding classes in Loosduinen, where one column of the table was counted and one was estimated and they look identical',
  capsuleQ: 'What are the best coding classes in Loosduinen?',
  capsule: 'Coding classes in Loosduinen reach the west of The Hague, four wijken, all read for this page. Waldeck has 17,950 residents, 9,690 households and 10,020 dwellings, every one of those enumerated from a register. It also has an average WOZ value of 308,000 euro, which was not enumerated from anything: it is an estimate made by municipal assessors from sale prices of comparable homes, referenced to a date a year before the tax year. All four figures print the same way. Modern Age Coders teaches live online in English from the Componistenbuurt to Ockenburgh, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'This series has now printed an average WOZ value on sixty-nine pages, always in the same sentence as a population and always in the same shape. The population was counted. The WOZ was modelled: an official estimates what a dwelling would fetch, working from what comparable dwellings nearby actually sold for, and the estimate is pinned to a valuation date one year before the tax year it governs. It is a good estimate and it is used for real things, from municipal tax to mortgage collateral. It is still not the same kind of object as a headcount, and no table anywhere in this cluster has ever said so.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Loosduinen.',

  picks: {
    eyebrow: 'Course picks for Loosduinen',
    h2: 'Four courses for the western edge',
    intro: 'A groep 6 child in Houtwijk who has never been asked where a number on a screen came from, a teenager in Nieuw Waldeck with a game that lives entirely in a notebook, a student in Vroondaal whose program fills a missing value and forgets it did, and an adult in Kijkduin reading a report in which every figure looks equally solid. Four ways in, and the first hour of each is free.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python, where a child sees the difference between a number the program was given and a number the program worked out.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'A real application built from nothing to something installable, for the teenager whose version so far is a notebook full of screens.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python that runs unattended, where an imputed value written into a table becomes a fact for everybody downstream.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Asking of every figure how it was produced, for anybody who signs off numbers other people will act on.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Loosduinen today',
      h2: 'Four wijken, from the old village to the dunes',
      intro: 'The four wijken read for this page are Wijk 17 Loosduinen, the old village core; Wijk 18 Waldeck; Wijk 16 Kraayenstein en Vroondaal; and Wijk 15 Kijkduin en Ockenburgh, which runs out to the beach. The Hague city page in this series lists these four for the stadsdeel and gives it 51,395 residents for 2022. Every figure below is quoted from the statistics office row for the wijk it belongs to.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Two wijken of almost the same size', p: 'Loosduinen holds 17,884 residents and Waldeck 17,950, sixty-six apart, but Loosduinen sits on 270 hectares of land at a published 6,646 people to the square kilometre and Waldeck on 181 at 9,754. Kraayenstein en Vroondaal holds 10,743 on 302 hectares at 3,472, and Kijkduin en Ockenburgh 3,978 on 472 hectares at 784, the lowest density of any populated Hague wijk in this series.' },
          { h3: 'The oldest corner of the city', p: 'Over-sixty-fives are 26 percent in Loosduinen, 32 percent in Waldeck, where 5,740 residents are in that band, and 32 percent in Kijkduin en Ockenburgh. Only Kraayenstein en Vroondaal breaks the pattern at 13 percent, and it is also the only one of the four where under-fifteens reach 23 percent, with 2,435 children.' },
          { h3: 'Households, and how many hold one person', p: 'Waldeck has 9,690 households averaging 1.8 people, 5,160 of them a single person, 53 percent, in a stock of 10,020 dwellings. Loosduinen has 8,535 averaging 2.0 with 3,615 single. Kraayenstein en Vroondaal has 4,140 averaging 2.5, the largest here, with 4,109 dwellings. Kijkduin en Ockenburgh has 1,870 averaging 1.9.' }
        ] },
        { kind: 'spec', title: 'What the WOZ figure actually is', p: 'It is the estimated market value of a dwelling, set each year by municipal assessors in a formal written decision. For homes it is worked out by comparing sale prices of similar dwellings nearby and adjusting for the characteristics of the particular house. Its valuation date, the waardepeildatum, is fixed one year before the tax year it applies to, so a value labelled 2025 describes conditions at the start of 2024. It approximates market value without being identical to any actual transaction, and it is used for municipal property tax, water board levies, income tax, inheritance tax and increasingly by banks as evidence of mortgage collateral. All of that is worth knowing before treating it as a fact about houses.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'One wijk, five figures, two entirely different kinds of number',
      intro: 'Every figure below is published for Wijk 18 Waldeck, and every one of them prints the same way. They were not produced the same way.',
      body: [
        { kind: 'table', caption: 'How each Waldeck figure was made', head: ['The published figure', 'How it was produced', 'The date it describes', 'What kind of thing it is'], rows: [
          ['17,950 residents', 'enumerated from the population register', '1 January 2026', 'a count'],
          ['9,690 households', 'enumerated from the register', '2025', 'a count'],
          ['10,020 dwellings', 'enumerated from the housing register', '2025', 'a count'],
          ['31,900 euro average income', 'aggregated from tax records', '2024', 'a count, divided'],
          ['308,000 euro average WOZ', 'estimated by assessors from comparable sales', 'a date one year before the tax year', 'an estimate']
        ] },
        { kind: 'p', text: 'Four of those are records of things that happened, assembled by counting. The fifth is somebody skilled making a judgement about what a house would fetch if it were sold, which it was not. That is a legitimate and carefully produced number, and it is not the same kind of claim as 17,950. The reason this matters is visible in the table itself: nothing in the layout, the formatting, the precision or the placement distinguishes the fifth row from the other four, and by the time any of them reaches a page like this one, all trace of how it was made has been stripped off.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Four wijken in full, with the counted and the estimated marked apart',
      intro: 'Every row as published with its year, an explicit note of which figures are estimates, and the things this page declines to conclude.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Wijk 17 Loosduinen', p: '17,884 residents (2026, counted); 8,535 households averaging 2.0, 3,615 single-person at 42 percent (2025, counted); 2,605 under fifteen at 15 percent, 1,900 aged fifteen to twenty-five, 4,130 aged twenty-five to forty-five, 4,615 aged forty-five to sixty-five, 4,635 over sixty-five at 26 percent; 274 hectares, 270 land and 4 water; density 6,646; 8,751 dwellings (counted); average value 325,000 euro (2025, estimated); 4,200 owner-occupied at 48 percent and 4,551 rented at 52; income 31,600 euro (2024); 5 primary establishments with 1,099 pupils and 1 secondary with 126; three buurten, Houtwijk, Kom Loosduinen, and Kerketuinen en Zichtenburg.' },
          { h3: 'Wijk 18 Waldeck', p: '17,950 residents (2026, counted); 9,690 households averaging 1.8, 5,160 single-person at 53 percent and 4,530 multi-person at 47; 2,265 under fifteen at 13 percent, 1,540 aged fifteen to twenty-five at 8.6 percent, 4,110 aged twenty-five to forty-five, 4,310 aged forty-five to sixty-five, 5,740 over sixty-five at 32 percent; 185 hectares, 181 land and 4 water; density 9,754; 10,020 dwellings (counted); average value 308,000 euro (2025, estimated); 4,309 owner-occupied at 43 percent and 5,711 rented at 57; income 31,900 euro (2024); 5 primary establishments with 1,180 pupils and 5 secondary with 2,391; five buurten, the Componistenbuurt, Rosenburg, Waldeck-Noord, Nieuw Waldeck and Waldeck-Zuid.' },
          { h3: 'Wijk 16 Kraayenstein en Vroondaal', p: '10,743 residents (2026, counted); 4,140 households averaging 2.5, 1,320 single-person at 32 percent; 2,435 under fifteen at 23 percent, the highest child share of the four, 1,145 aged fifteen to twenty-five, 2,870 aged twenty-five to forty-five, 2,910 aged forty-five to sixty-five, 1,420 over sixty-five at 13 percent; 336 hectares, 302 land and 34 water; density 3,472; 4,109 dwellings (counted); average value 594,000 euro (2025, estimated); 2,835 owner-occupied at 69 percent and 1,274 rented at 31; income 42,900 euro (2024); 1 primary establishment with 692 pupils and 1 secondary with 501; one buurt sharing the wijk name.' },
          { h3: 'Wijk 15 Kijkduin en Ockenburgh', p: '3,978 residents (2026, counted); 1,870 households averaging 1.9, 800 single-person at 43 percent; 380 under fifteen at 9.6 percent, 495 aged fifteen to twenty-five, 735 aged twenty-five to forty-five, 1,140 aged forty-five to sixty-five, 1,270 over sixty-five at 32 percent; 482 hectares, 472 land and 10 water; density 784; 1,673 dwellings (counted); average value 670,000 euro (2025, estimated), the highest of the four; 887 owner-occupied at 53 percent and 786 rented at 47; income 46,900 euro (2024); 1 primary establishment with 214 pupils and 1 secondary with 1,307; two buurten, Kijkduin and Ockenburgh.' },
          { h3: 'Where the description of the WOZ comes from', p: 'The published account of the Wet waardering onroerende zaken: the WOZ value is the estimated market value of a dwelling, fixed annually by municipal assessors in a written decision; for homes it is determined by comparing sale prices of comparable dwellings nearby together with the characteristics of the property; the waardepeildatum is set one year before the start of the tax year; it approximates market value without being identical to actual transaction prices; and it is used for municipal property tax, water board charges, income tax, inheritance tax and, increasingly, by banks as proof of mortgage collateral.' },
          { h3: 'What was calculated, and what is refused', p: 'Nothing was calculated. No wijk was averaged into a stadsdeel, no figure recomputed, no total assembled from the four rows, and no stadsdeel population asserted for 2026; the city page carries 51,395 for 2022 and it is dated wherever used. The 1,307 secondary pupils in a wijk of 3,978 residents are reported and not interpreted, because what a school inside a boundary implies about the children outside it is the Escamp page argument.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to Loosduinen, to any of its four wijken, to The Hague or to any school counted above, and nothing here suggests one. Each wijk row was taken from its own statistics office page at that office own vintages: residents and ages January 2026, households and housing 2025, income 2024. The description of what the WOZ value is comes from the published account of the law that creates it, and every WOZ figure on this page is labelled as an estimate for that reason.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'The table has no column for how you know',
      intro: 'A figure everybody quotes, a process nobody looks up, and the reason a stored estimate stops being an estimate.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Ask how each number was made', p: 'Counted, measured, estimated, imputed, inherited from another system, or typed in by somebody. Those are wholly different claims about the world, and by the time a figure reaches a table it looks the same whichever it was. The question takes ten seconds and is almost never asked.' },
          { h3: '2. Notice that storage erases the answer', p: 'A database column holds 308000. It does not hold the fact that an assessor produced it by comparison with nearby sales, or that its reference date is a year earlier than its label. The provenance was real at the moment of creation and did not survive being written down.' },
          { h3: '3. Then carry the provenance with the value', p: 'A second column, a suffix, a naming convention, anything. The discipline is that a derived value should be impossible to mistake for an observed one at a glance, because the person who reads it next will not have the context you have now, and quite often that person is you.' }
        ] },
        { kind: 'table', caption: 'An estimate that stopped looking like one, in five other places', head: ['The stored value', 'How it was really made', 'How it reads downstream', 'What it costs'], rows: [
          ['A column named price', 'a model predicted it', 'what the thing costs', 'forecasts trained on forecasts'],
          ['Latitude and longitude', 'geocoded from a text address', 'a surveyed position', 'distances computed to the metre'],
          ['An age field', 'inferred from a first name', 'something the user told you', 'a segment built on a guess'],
          ['A blank filled by imputation', 'the column mean, months ago', 'an ordinary observation', 'variance quietly destroyed'],
          ['An average WOZ of 308,000 euro', 'assessed from comparable sales', 'what houses there are worth', 'a valuation read as a price']
        ] },
        { kind: 'callout', h3: 'Once a guess is written down it is data, and nothing in the file remembers otherwise', p: 'This page has an awkward admission to make, and it is the most useful thing on it. Sixty-nine pages in this series have printed an average WOZ value, always beside a population count, always in the same sentence shape, and not one of them has ever indicated that the first was enumerated and the second estimated. Nobody was careless. The figures arrived in one table, formatted alike, and the difference between them lives in a law that you have to go and read, not in the number. That is exactly the mechanism, and it is worth seeing at work on yourself rather than only in the abstract, because in software the same thing happens continuously and much faster. A model produces a number and it is written to a column. The column has a type, and the type is decimal, and there is no type for probably. Six months later somebody joins that column to a table of real observations and computes an average, and the average is now part estimate and part measurement in an unrecorded proportion, and it goes into a report, and somebody acts on it. No step in that chain was wrong. The provenance was simply not one of the things the system was built to carry, so it fell off at the first write, and every reader after that inherits a number stripped of the only fact that would have told them how much weight it bears. The fix is unglamorous and cheap: name the column so the guess is visible, keep the method beside the value, and when you publish, say which of your figures were counted. It takes a sentence. It is the difference between a table somebody can audit and a table somebody has to trust.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for a number whose origins fell off',
      intro: 'A forecast, an imputed blank, a geocoded point, a scraped figure, a model score written back to the source table: every one of them is a claim about the world that arrives shaped like a fact. Practised on a valuation that seventy pages have quoted as a price.',
      body: [
        { kind: 'table', caption: 'Recovering provenance and keeping it', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Classify the origin', 'Sort every figure into counted, measured, estimated or imputed', 'Four kinds of claim in one column', 'A map of what you actually know'],
          ['Find the reference date', 'Ask what moment the figure describes, not when it was published', 'A label read as a date', 'The real timeline'],
          ['Name it visibly', 'Put the method in the column name or beside it', 'Provenance lost at the first write', 'A value that explains itself'],
          ['Refuse silent joins', 'Never mix estimated and observed into one aggregate unnoticed', 'An average of two different things', 'Aggregates you can defend'],
          ['Publish the split', 'State which of your figures were counted', 'A reader forced to trust you', 'A table somebody can audit']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Two numbers on the board, one counted from objects on the table and one guessed by the class. Ten minutes later, with the objects gone, the children try to say which was which.' },
          { h3: 'For teenagers', p: 'A dataset with a column half observed and half filled in, and a program that must report the average honestly. The stretch: change the storage so the program can tell, and find out that this is a design decision rather than a coding one.' },
          { h3: 'For adults', p: 'A figure from work traced back to its origin. Adults very often find a number three systems from any measurement, and at least one aggregate mixing estimated and observed values with no marker.' }
        ] },
        { kind: 'p', text: 'The four wijken were read one page each from the statistics office at that office own vintages: residents and ages January 2026, households and housing 2025, income 2024. Every average dwelling value quoted here is labelled an estimate because the published account of the Wet waardering onroerende zaken describes it as one, set by municipal assessors from sale prices of comparable dwellings, with a valuation date one year ahead of the tax year. The stadsdeel figure of 51,395 residents for 2022 comes from the Hague city page in this series. Nothing on this page was calculated.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From guessing against counting to an aggregate that mixes both',
    intro: 'The rung is decided in the free hour by what the learner can do when given something real. Neither the wijk nor the age has any bearing on it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Counted or guessed', p: 'Children put two numbers on the board and later try to tell them apart.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Where did this number come from', p: 'Learners ask it of every value before using any of them.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Storage that remembers', p: 'Teenagers redesign a table so a program can tell an estimate from an observation.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Three systems from a measurement', p: 'Adults trace a real figure back and find where the provenance fell off.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will tell you houses in Kijkduin are worth 670,000 euro. Why should a teenager in Waldeck ask who worked that out?',
    intro: 'Because nobody sold anything for it, and the figure is an assessment made for taxation.',
    p1: 'Ask a model about property in a Dutch wijk and the WOZ figure will come back as a price, because it is the number published under a heading that looks like one and because the surrounding text in most sources treats it that way. The model has no access to the distinction. It sees 670,000 euro sitting beside 3,978 residents in the same table and has no reason to suppose that one was arrived at by counting people and the other by an official comparing recent sales of similar houses and adjusting for the property, at a valuation date a year before the tax year. It will not mention the reference date either, because the reference date is in the law rather than in the table.',
    p2: 'So the learner practises asking how a number was made before asking what it means, and code is where the habit is built, because in code you can watch the erasure happen. Write an estimate to a column, close the file, open it a week later, and the estimate is now just a number of type decimal like every other. A fifteen-year-old in Houtwijk who has designed a table that keeps its own provenance will be the person at thirty who asks, of a figure in a board pack, whether anybody measured it. Models will keep flattening estimates into facts, because the text they learn from has already flattened them. Asking how you know stays a person job.',
    closer: 'The case for a child in Loosduinen learning to code in 2026 is therefore not about property. It is that a program forces you to decide what kind of thing each value is and where it will be stored, and that decision is where most of the honesty in any system either gets built in or gets lost.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes across the west of the city',
    intro: 'Loosduinen runs from the old village out to the dunes at Kijkduin and Ockenburgh, and the western wijken are a long way from anything central by tram, which matters more in January than it does when a family first signs up.',
    cells: [
      { h3: 'The far side of the city, and no journey', p: 'From Kijkduin or Nieuw Waldeck an evening class in the middle of town is two long tram rides in the dark. Taking the journey out of the arrangement is what makes a weekly commitment survive the winter rather than quietly lapse.' },
      { h3: 'The four words that stay Dutch', p: 'Groep, havo, vwo, profielkeuze. English carries the rest of the hour. A child should hear the name of their own school year in the form they read it in, not in a translation they have to convert back.' },
      { h3: 'Free, and actually a lesson', p: 'A task, a teacher watching the working rather than the result, and three things fixed by the end: the level, the course, the weekly hour. Nothing is charged and no card details are requested at any stage.' },
      { h3: 'Grouped by stage, gathered from anywhere', p: 'Five to ten learners at one level. A stadsdeel of fifty thousand will not reliably hold five people at one narrow stage in one month, so the pool is worldwide, which is the reason a class exists to join instead of a list to wait on.' },
      { h3: 'Two a week, holidays already in it', p: 'Roughly eight lessons a month at a fixed hour. Zuid-Holland follows the regio Midden holiday calendar, published years ahead, so the weeks off are part of the schedule from the first conversation.' },
      { h3: 'Three and a half hours, or four and a half', p: 'The teacher is in India, which has kept one clock for decades, so both changes each year happen on the Dutch side. Neither setting removes an hour a family here would have used anyway.' }
    ],
    spec: { title: 'The oldest stadsdeel in the series, and one wijk that is not', p: 'Over-sixty-fives are 26 percent in Loosduinen, 32 in Waldeck and 32 in Kijkduin en Ockenburgh, the highest shares in any Hague stadsdeel this series has read. Kraayenstein en Vroondaal runs against all of it at 13 percent, with 2,435 residents under fifteen, 23 percent of the wijk. Neither the high shares nor the low one settles the question that actually decides whether a class can run, which is how many people sit at one precise stage of one precise subject during one precise month. That figure is small everywhere and having more children within a kilometre does not raise it. Hence a worldwide pool, sorted by stage, spanning ages 6 to 67.' }
  },

  fees: {
    h2: 'The fee, in dollars, in all four wijken',
    intro: 'Below, in full, because a price a family has to ask for is a price that has something wrong with it.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'Dollars, one rate, worldwide, and no separate euro price list, which means Rosenburg and Kijkduin see the same figure. Nothing is paid until the free lesson has produced a course and an hour, and payment is arranged over WhatsApp afterwards. Pausing, switching plan and missing a week are all written out on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, exactly as the people who left them wrote them',

  book: {
    h2: 'Send the level, not the wijk',
    intro: 'The first task might be two numbers on a board, one counted and one guessed, to be told apart an hour later; a table redesigned so a program can tell an estimate from an observation; or a figure at work traced back until the provenance runs out.',
    success: 'Thank you. Your Loosduinen class request has been sent.'
  },

  faq: {
    h2: 'Loosduinen coding class questions',
    intro: 'The stadsdeel, its four wijken, one number that is not what it looks like, the teaching and the terms.',
    items: [
      { q: 'Which neighbourhoods make up Loosduinen?', a: 'Four wijken were read for this page: Wijk 17 Loosduinen, the old village core, with the buurten Houtwijk, Kom Loosduinen and Kerketuinen en Zichtenburg; Wijk 18 Waldeck, with the Componistenbuurt, Rosenburg, Waldeck-Noord, Nieuw Waldeck and Waldeck-Zuid; Wijk 16 Kraayenstein en Vroondaal; and Wijk 15 Kijkduin en Ockenburgh, which reaches the beach. The Hague city page in this series lists these four and gives the stadsdeel 51,395 residents for 2022.' },
      { q: 'What is the WOZ value, exactly?', a: 'It is the estimated market value of a dwelling, fixed each year by municipal assessors in a written decision. For homes it is worked out from the sale prices of comparable dwellings nearby together with the characteristics of the particular property, and its valuation date is set one year before the start of the tax year, so a value labelled 2025 describes conditions at the beginning of 2024. It approximates market value without being any actual transaction price, and it is used for municipal property tax, water board charges, income tax, inheritance tax and increasingly by banks as evidence of mortgage collateral.' },
      { q: 'So are the WOZ figures on this site wrong?', a: 'No. They are correctly quoted and they are what the statistics office publishes. The point of this page is narrower and worth more: they are estimates rather than counts, they sit in the same tables as counts, and nothing in the presentation distinguishes them. This series has printed an average WOZ value beside a population figure on sixty-nine pages without once marking that difference. On this page each one is labelled.' },
      { q: 'Which part of Loosduinen is most expensive?', a: 'On the assessed values, Kijkduin en Ockenburgh at an estimated 670,000 euro average for 2025, then Kraayenstein en Vroondaal at 594,000, Loosduinen at 325,000 and Waldeck at 308,000. Average income per resident for 2024 runs 46,900, 42,900, 31,600 and 31,900 euro across the same four. The first set are estimates and the second are aggregated from tax records.' },
      { q: 'Is this an old part of the city?', a: 'In population terms it is the oldest this series has read in The Hague. Over-sixty-fives are 32 percent in Waldeck, where 5,740 residents are in that band, 32 percent in Kijkduin en Ockenburgh and 26 percent in Loosduinen. Kraayenstein en Vroondaal is the exception at 13 percent, and it also has the highest child share of the four at 23 percent, 2,435 residents under fifteen.' },
      { q: 'Is the class taught in Dutch?', a: 'No. Teaching is in English from beginning to end, with a single deliberate exception: the Dutch school vocabulary stays Dutch, so groep, havo, vwo and profielkeuze are used exactly as a child meets them on their own school paperwork. There is no Dutch-language edition of any course.' },
      { q: 'What hours suit a family in Loosduinen?', a: 'The teacher is three and a half hours ahead while Dutch summer time is in force and four and a half outside it, and all of that variation is produced by the Dutch clock rather than the Indian one. What remains open is most of what a family would use: after school, early evening, and both weekend days. The weekly hour is agreed in the free lesson and then stays fixed.' },
      { q: 'Is there a Modern Age Coders classroom in Loosduinen?', a: 'No, and none is claimed here, elsewhere in The Hague or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Loosduinen coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore The Hague and beyond',
    h2: 'East into the city, south into the greenhouses',
    html: 'East are <a class="cg-inline-link" href="/coding-classes-in-escamp">Escamp</a>, which counts school buildings and then explains why the count was beside the point, and <a class="cg-inline-link" href="/coding-classes-in-the-hague-centrum">Den Haag Centrum</a>, which declines to grade a household figure. North along the coast is <a class="cg-inline-link" href="/coding-classes-in-scheveningen">Scheveningen</a>, and inland <a class="cg-inline-link" href="/coding-classes-in-haagse-hout">Haagse Hout</a>, <a class="cg-inline-link" href="/coding-classes-in-laak">Laak</a> and <a class="cg-inline-link" href="/coding-classes-in-leidschenveen-ypenburg">Leidschenveen-Ypenburg</a>. The city page, <a class="cg-inline-link" href="/coding-classes-in-the-hague">coding classes in The Hague</a>, holds all eight stadsdelen together. South across the boundary are the greenhouses of the <a class="cg-inline-link" href="/coding-classes-in-westland">Westland</a>, and the whole of it sits in <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>. Two doors lead somewhere else entirely: <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> and the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, both for people who want to train a model rather than write a program. The <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a> sits above all of it.',
    waLabel: 'Finish this on WhatsApp'
  },

  footerHeading: 'The Hague and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-the-hague', label: 'The Hague' },
    { href: '/coding-classes-in-escamp', label: 'Escamp' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-lsn .cg-hero-grid { grid-template-columns: 1.12fr 1fr; align-items: center; gap: clamp(1.5rem, 3.5vw, 2.8rem); }
.cg-root.cg-lsn .cg-hero h1 { font-weight: 500; letter-spacing: -0.0126em; line-height: 1.12; }
.cg-root.cg-lsn .cg-capsule { border-left: 3px solid var(--cg-accent); border-top: 1px solid var(--cg-accent-soft); padding: 0.9rem 1.3rem; }
.cg-root.cg-lsn .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-lsn .cg-section-head h2 { max-width: 34ch; letter-spacing: -0.014em; }
.cg-root.cg-lsn .cg-grid-3 { gap: clamp(1.08rem, 2.2vw, 1.76rem); }
.cg-root.cg-lsn .cg-card { border-radius: 4px; border-bottom: 2px solid var(--cg-accent); }
.cg-root.cg-lsn .cg-table caption { letter-spacing: 0.04em; font-weight: 600; }
.cg-root.cg-lsn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lsn .cg-table tbody tr:last-child td { font-weight: 600; }
.cg-root.cg-lsn .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Stadsdeel Loosduinen, Den Haag, Zuid-Holland: the west of the city, from the old village core out to the dunes at Kijkduin and Ockenburgh; 51,395 residents for 2022 on the Hague city page, which lists its four wijken. All four read at 2026. Wijk 17 Loosduinen 17,884 on 274 hectares, 270 land and 4 water, density 6,646; 8,535 households averaging 2.0 with 3,615 single at 42 percent; 2,605 under fifteen at 15 percent, 4,635 over sixty-five at 26 percent; 8,751 dwellings, estimated value 325,000 euro, 4,200 owner-occupied at 48 percent; income 31,600 euro (2024); 5 primary establishments with 1,099 pupils and 1 secondary with 126; buurten Houtwijk, Kom Loosduinen and Kerketuinen en Zichtenburg. Wijk 18 Waldeck 17,950 on 185 hectares, 181 land, density 9,754; 9,690 households averaging 1.8 with 5,160 single at 53 percent; 2,265 under fifteen at 13 percent, 1,540 aged fifteen to twenty-five at 8.6, 5,740 over sixty-five at 32 percent; 10,020 dwellings, estimated value 308,000 euro, 4,309 owner-occupied at 43 percent; income 31,900 euro (2024); 5 primary establishments with 1,180 pupils and 5 secondary with 2,391; five buurten Componistenbuurt, Rosenburg, Waldeck-Noord, Nieuw Waldeck and Waldeck-Zuid. Wijk 16 Kraayenstein en Vroondaal 10,743 on 336 hectares, 302 land and 34 water, density 3,472; 4,140 households averaging 2.5 with 1,320 single at 32 percent; 2,435 under fifteen at 23 percent, 1,420 over sixty-five at 13 percent; 4,109 dwellings, estimated value 594,000 euro, 2,835 owner-occupied at 69 percent; income 42,900 euro (2024); 1 primary establishment with 692 pupils and 1 secondary with 501. Wijk 15 Kijkduin en Ockenburgh 3,978 on 482 hectares, 472 land and 10 water, density 784, the lowest of any populated Hague wijk in this series; 1,870 households averaging 1.9 with 800 single at 43 percent; 380 under fifteen at 9.6 percent, 1,270 over sixty-five at 32 percent; 1,673 dwellings, estimated value 670,000 euro; income 46,900 euro (2024); 1 primary establishment with 214 pupils and 1 secondary with 1,307; buurten Kijkduin and Ockenburgh. The WOZ value is the estimated market value of a dwelling, set annually by municipal assessors from sale prices of comparable dwellings and the characteristics of the property, with a waardepeildatum one year before the start of the tax year, used for municipal property tax, water board levies, income tax, inheritance tax and by banks as mortgage collateral evidence. Regio Midden holidays. The district page argues that provenance does not survive storage; Haagse Hout owns precision against accuracy, Scheveningen the unstable referent, Escamp necessary versus sufficient, Laak choice against constraint and Leidschenveen-Ypenburg the night-time register.',
    localProject: 'An estimate, once written down, is indistinguishable from a measurement, and nothing in the file remembers the difference. Wijk 18 Waldeck publishes 17,950 residents, 9,690 households, 10,020 dwellings, an average income of 31,900 euro and an average WOZ value of 308,000 euro. The first three were enumerated from registers and the fourth aggregated from tax records. The fifth was not counted at all: the WOZ value is the estimated market value of a dwelling, fixed each year by municipal assessors who compare sale prices of similar dwellings nearby and adjust for the characteristics of the property, and its waardepeildatum is set one year before the start of the tax year, so a figure labelled 2025 describes the beginning of 2024. It approximates market value without being any transaction that occurred. All five print identically, in the same table, to the same width, and the distinction lives in the law that creates the figure rather than anywhere in the figure itself. This series has printed an average WOZ beside a population count on sixty-nine pages without once marking which was counted, which is offered here as the demonstration rather than as an apology, because that is precisely how the erasure works. In software it happens faster and at greater volume: a model writes a prediction to a column typed decimal, and there is no type for probably; a geocoder writes coordinates that read as surveyed; a first name yields an inferred age; an imputed blank fills with a months-old column mean and destroys the variance silently. Six months later that column is joined to observed data and averaged, and the result is part estimate and part measurement in an unrecorded proportion. Distinct from precision against accuracy (Haagse Hout), which concerns how many digits a figure is printed with rather than how the figure was produced, and from the gap between two registers (Amsterdam-Zuid), where both quantities were counted. The remedy is cheap and unglamorous: classify every figure as counted, measured, estimated or imputed, keep the method beside the value, and refuse aggregates that mix them without a marker.',
    requiredMentions: [
      '8,535',
      '2,605',
      '4,635',
      '8,751',
      '9,690',
      '5,160',
      '10,020',
      '308,000',
      '2,391',
      '4,109',
      '594,000',
      '1,307',
      '9,754',
      'Componistenbuurt'
    ],
    sources: [
      { claim: 'Wijk 17 Loosduinen, Den Haag: 17,884 inwoners (2026); 8,535 huishoudens averaging 2.0, 3,615 eenpersoonshuishoudens at 42 percent; ages 2,605 (0 to 15, 15 percent), 1,900 (15 to 25, 11 percent), 4,130 (25 to 45, 23 percent), 4,615 (45 to 65, 26 percent), 4,635 (65+, 26 percent); 274 hectare, 270 land, 4 water; bevolkingsdichtheid 6,646 per km2; woningvoorraad 8,751 (2025); gemiddelde WOZ 325,000 euro (2025); 4,551 huurwoningen (52 percent) and 4,200 koopwoningen (48 percent); gemiddeld inkomen 31,600 euro (2024); 5 vestigingen basisonderwijs with 1,099 leerlingen and 1 vestiging voortgezet onderwijs with 126 leerlingen; buurten: Houtwijk, Kom Loosduinen, Kerketuinen en Zichtenburg.', url: 'https://allecijfers.nl/wijk/loosduinen-den-haag/' },
      { claim: 'Wijk 18 Waldeck, Den Haag: 17,950 inwoners (2026); 9,690 huishoudens averaging 1.8, 5,160 eenpersoonshuishoudens at 53 percent and 4,530 meerpersoonshuishoudens at 47; ages 2,265 (0 to 15, 13 percent), 1,540 (15 to 25, 8.6 percent), 4,110 (25 to 45, 23 percent), 4,310 (45 to 65, 24 percent), 5,740 (65+, 32 percent); 185 hectare, 181 land, 4 water; bevolkingsdichtheid 9,754 per km2; woningvoorraad 10,020 (2025); gemiddelde WOZ 308,000 euro (2025); 5,711 huurwoningen (57 percent) and 4,309 koopwoningen (43 percent); gemiddeld inkomen 31,900 euro (2024); 5 vestigingen basisonderwijs with 1,180 leerlingen and 5 vestigingen voortgezet onderwijs with 2,391 leerlingen; 5 buurten: Componistenbuurt, Rosenburg, Waldeck-Noord, Nieuw Waldeck, Waldeck-Zuid.', url: 'https://allecijfers.nl/wijk/waldeck-den-haag/' },
      { claim: 'Wijk 16 Kraayenstein en Vroondaal, Den Haag: 10,743 inwoners (2026); 4,140 huishoudens averaging 2.5, 1,320 eenpersoonshuishoudens at 32 percent; ages 2,435 (0 to 15, 23 percent), 1,145 (15 to 25, 11 percent), 2,870 (25 to 45, 27 percent), 2,910 (45 to 65, 27 percent), 1,420 (65+, 13 percent); 336 hectare, 302 land, 34 water; bevolkingsdichtheid 3,472 per km2; woningvoorraad 4,109 (2025); gemiddelde WOZ 594,000 euro (2025); 1,274 huurwoningen (31 percent) and 2,835 koopwoningen (69 percent); gemiddeld inkomen 42,900 euro (2024); 1 vestiging basisonderwijs with 692 leerlingen and 1 vestiging voortgezet onderwijs with 501 leerlingen; one buurt sharing the wijk name.', url: 'https://allecijfers.nl/wijk/kraayenstein-en-vroondaal-den-haag/' },
      { claim: 'Wijk 15 Kijkduin en Ockenburgh, Den Haag: 3,978 inwoners (2026); 1,870 huishoudens averaging 1.9, 800 eenpersoonshuishoudens at 43 percent and 1,070 meerpersoonshuishoudens at 57; ages 380 (0 to 15, 9.6 percent), 495 (15 to 25, 12 percent), 735 (25 to 45, 18 percent), 1,140 (45 to 65, 29 percent), 1,270 (65+, 32 percent); 482 hectare, 472 land, 10 water; bevolkingsdichtheid 784 per km2; woningvoorraad 1,673 (2025); gemiddelde WOZ 670,000 euro (2025); 786 huurwoningen (47 percent) and 887 koopwoningen (53 percent); gemiddeld inkomen 46,900 euro (2024); 1 vestiging basisonderwijs with 214 leerlingen and 1 vestiging voortgezet onderwijs with 1,307 leerlingen; 2 buurten: Kijkduin, Ockenburgh.', url: 'https://allecijfers.nl/wijk/kijkduin-en-ockenburgh-den-haag/' },
      { claim: 'Wet waardering onroerende zaken: the WOZ-waarde is the estimated market value of a dwelling, a standardised valuation of real property used for tax purposes. Municipal tax assessors (heffingsambtenaren) establish it through formal written decisions issued annually. For residential property it is determined by comparison with similar homes sold near the assessment date, adjusted to market conditions on the reference date: gemeenten bepalen de WOZ-waarde op basis van verkoopprijzen van vergelijkbare woningen in de buurt, en specifieke kenmerken van de woning. The waardepeildatum is fixed one year before the tax year begins. It is used for municipal property tax, water board fees, income tax, inheritance tax and increasingly by banks as proof of mortgage collateral. It approximates market value but is not identical to actual transaction prices.', url: 'https://nl.wikipedia.org/wiki/Wet_waardering_onroerende_zaken' },
      { claim: 'The Hague city page in this series publishes stadsdeel Loosduinen at 51,395 residents for 2022, listing the old village of Loosduinen 17,884, Waldeck 17,950, Kraayenstein en Vroondaal 10,743 and Kijkduin en Ockenburgh 3,978.', url: 'https://learn.modernagecoders.com/coding-classes-in-the-hague' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'That any WOZ figure quoted anywhere in this series is wrong. Every one is correctly quoted; the argument is that they are estimates presented indistinguishably from counts.',
      'That the WOZ value is what a house would sell for, or what anybody paid. It approximates market value and is not identical to any transaction price.',
      'Any claim about house prices in these wijken. No transaction data was read and none is inferred from the assessed values.',
      'A 2026 population for the stadsdeel. The city page carries 51,395 for 2022 and it is dated wherever used; no total is assembled from the four wijk rows.',
      'Any inference from the 1,307 secondary pupils in a wijk of 3,978 residents. What a school inside a boundary implies about children outside it is the Escamp page argument.',
      'Any argument from how many digits a figure is printed with. That is the Haagse Hout page argument; this page concerns how figures were produced, not how they are formatted.',
      'Any reading of the difference between the dwelling counts and the household counts. Both are enumerated, and a gap between two registers is the Amsterdam-Zuid page argument.',
      'Any explanation of why the over-sixty-five share is high in three of the four wijken. That would be a claim about the history of the stock, which is the Prins Alexander page argument.',
      'Any comparison of the four wijken as though agreement on one column implied similarity on others. Correlated measures are the Hillegersberg-Schiebroek page argument.',
      'Anything the Hague city page owns, including the stadsdeel population table, the International School of The Hague at Wijndaelerweg 11 and the named secondary schools.'
    ]
  }
};
