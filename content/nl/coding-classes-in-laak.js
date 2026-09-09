'use strict';
// Laak: the smallest stadsdeel of The Hague, two wijken, both read.
// Spine: a distribution tells you about preference only if everybody had the
// same options, and in a converted industrial district they did not.

module.exports = {
  slug: 'coding-classes-in-laak',
  code: 'lak',
  accent: '#2E4678',
  accentRationale: 'Laak: a deep canal indigo off the water of the Laakkanaal and the insteekhavens dug around 1900, clear of every Hague page it links to by a wide margin, and nearest to the Groningen province accent, which it does not link to',
  pageType: 'district',
  place: {
    name: 'Laak',
    eyebrow: 'Laak, Den Haag',
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
  routeLabel: 'Laak, The Hague, Netherlands',
  title: 'Coding Classes in Laak, The Hague | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Laak, The Hague, for ages 6 to 67, across Laakkwartier, Spoorwijk and the Binckhorst. First lesson free.',
  ogDescription: 'Live online coding, Python and AI in the smallest stadsdeel of The Hague, on a page about reading a preference off a distribution nobody chose.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'python-ai-automation-masterclass-college',
  verifiedOn: '10 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Laak Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults across the two wijken of stadsdeel Laak in The Hague, taught in English.'
  },

  h1: 'Coding classes in Laak, where sixty-four percent of one wijk is aged twenty-five to forty-five and almost nobody chose that',
  capsuleQ: 'What are the best coding classes in Laak?',
  capsule: 'Coding classes in Laak reach the smallest stadsdeel of The Hague, two wijken, both read for this page. In Wijk 39 Binckhorst 2,635 of 4,126 residents are aged twenty-five to forty-five, sixty-four percent, while 100 are over sixty-five and 1,750 of its 1,902 dwellings are rented. That looks like a statement about who prefers the area. It is a statement about what was built there: an industrial district around the Laakkanaal, converted to flats. Modern Age Coders teaches live online in English from the Noordpolderbuurt to Laakhaven-Oost, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'A distribution across options looks like a record of what people wanted. It is only that if everybody was choosing from the same menu. The Binckhorst was dug for harbours and given over to industry around 1900, and most of it has since been rebuilt as housing, a good deal of it flats. Ninety-two percent of the dwellings there are rented. A family of five and a couple in their eighties are not declining the Binckhorst; for the most part they were never offered anything in it they could take. Read the age table as taste and you have learned something about people. Read it as supply and you have learned something true.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Laak.',

  picks: {
    eyebrow: 'Course picks for Laak',
    h2: 'Four courses for the smallest stadsdeel',
    intro: 'A groep 5 child in Spoorwijk who has never been shown that the machine takes instructions, a teenager in Laakkwartier-Oost with an app that has existed for a year as a conversation, a student near the Laakhaven whose code works only because of a setting they have forgotten about, and an adult in the Binckhorst being asked what customers prefer. Four entrances, and the first hour of each is free.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python where a child learns that a program does what it was told, not what was hoped, and that the difference is findable.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'An app carried from description to installation, for the teenager who has explained it to everyone and built none of it.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python that runs on its own, where a default nobody remembers setting turns into a result everybody trusts.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Reading usage figures without turning them into preferences, for anybody whose numbers get quoted in a decision.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Laak today',
      h2: 'Two wijken, the smallest district, both read',
      intro: 'Laak was formed in 1988 and is the smallest of the stadsdelen of The Hague, 4.27 square kilometres of which 4.02 are land and 0.24 water, holding 21,752 dwellings at a published 10,809 people to the square kilometre and 46,155 residents in 2023. It has two wijken and both were read for this page: Laakkwartier en Spoorwijk, and the Binckhorst.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'One large wijk and one small one', p: 'Laakkwartier en Spoorwijk holds 44,684 residents at January 2026 on 281 hectares, of which 268 are land and 12 water, at a published 16,690 to the square kilometre, with six buurten: Laakhaven-Oost, Laakhaven-West, Spoorwijk, Laakkwartier-West, Laakkwartier-Oost and the Noordpolderbuurt. Wijk 39 Binckhorst holds 4,126 on 146 hectares, 134 land and 12 water, at 2,556.' },
          { h3: 'Two wijken, two age structures', p: 'Laakkwartier en Spoorwijk has 7,535 residents aged fifteen to twenty-five, 17 percent, and 16,320 aged twenty-five to forty-five, 37 percent, with 4,105 over sixty-five at 9.2 percent. The Binckhorst has 2,635 aged twenty-five to forty-five out of 4,126, which is 64 percent, and 100 residents over sixty-five. Neither profile resembles the city as a whole.' },
          { h3: 'And two tenures', p: 'Laakkwartier en Spoorwijk has 21,095 dwellings, 14,766 of them rented at 70 percent and 6,118 owned at 29, with an average value of 249,000 euro and an average income of 26,300 euro per resident for 2024. The Binckhorst has 1,902 dwellings, 1,750 rented at 92 percent and 152 owned at 8, average value 386,000 euro.' }
        ] },
        { kind: 'spec', title: 'What was here before the flats', p: 'Around 1900 the Laakkanaal and its inlet harbours were dug, and industry established itself along them. Most of that industrial district has since been rebuilt as a campus of the Haagse Hogeschool and as a residential area including student flats. That is the published account, and it is the single most useful fact on this page, because it explains the age tables above without any appeal to what anybody wanted. Housing that goes up as flats, and largely as rented flats, is taken by the people for whom a rented flat is a workable home. The profile follows from the building programme.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'The same table, read as taste and read as supply',
      intro: 'Four published figures for the Binckhorst, and the two sentences each of them supports. Only one column is an inference about people.',
      body: [
        { kind: 'table', caption: 'What the Binckhorst figures do and do not license', head: ['The published figure', 'Read as preference', 'Read as availability', 'Which the data supports'], rows: [
          ['2,635 of 4,126 aged twenty-five to forty-five', 'young adults like it here', 'flats were built and they suit one household type', 'the second'],
          ['100 residents over sixty-five', 'older people avoid the area', 'nothing was built that an older household would take', 'the second'],
          ['360 residents under fifteen', 'families reject it', 'a converted industrial estate has few family homes', 'the second'],
          ['1,750 of 1,902 dwellings rented', 'people here prefer renting', 'what was built to rent, is rented', 'the second'],
          ['What would distinguish them', 'a survey of who considered moving here', 'and what was on the market when they looked', 'neither was read']
        ] },
        { kind: 'p', text: 'The right-hand column is not a hedge and it is not scepticism. It is that a distribution over options is evidence about preferences only when the options were open to everyone in the same way, and here they plainly were not: you cannot choose a four-bedroom house in a wijk that has almost none. Every figure in the left column is correct and every sentence in the second column is unsupported. That is a large amount of wrongness available at no cost, from data nobody has misread in any way a checker would catch.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Both wijken in full, the history, and what is not concluded',
      intro: 'Each row as published with its year, the account of the industrial district and where it comes from, and a plain list of what this page declines to say.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Laakkwartier en Spoorwijk', p: '44,684 residents (2026), the largest wijk in The Hague; 24,140 households averaging 1.8, 13,475 single-person at 56 percent and 10,665 multi-person at 44; 6,325 under fifteen at 14 percent, 7,535 aged fifteen to twenty-five at 17 percent, 16,320 aged twenty-five to forty-five at 37 percent, 10,385 aged forty-five to sixty-five at 23 percent, 4,105 over sixty-five at 9.2 percent; 281 hectares, 268 land and 12 water; density 16,690; 21,095 dwellings; average value 249,000 euro; 14,766 rented at 70 percent and 6,118 owner-occupied at 29; income 26,300 euro (2024); 12 primary establishments with 2,903 pupils and 2 secondary with 543; six buurten.' },
          { h3: 'Wijk 39 Binckhorst', p: '4,126 residents (2026); 1,870 households averaging 1.6, 1,025 single-person at 55 percent and 845 multi-person at 45; 360 under fifteen at 8.7 percent, 615 aged fifteen to twenty-five at 15 percent, 2,635 aged twenty-five to forty-five at 64 percent, 425 aged forty-five to sixty-five at 10 percent, 100 over sixty-five; 146 hectares, 134 land and 12 water; density 2,556; 1,902 dwellings; average value 386,000 euro; 1,750 rented at 92 percent and 152 owner-occupied at 8; 1 primary establishment with 62 pupils. Its income figure, 49,600 euro, is for 2023 where the other wijk is 2024.' },
          { h3: 'The stadsdeel, and its history', p: 'Laak was formed in 1988, is the smallest stadsdeel of The Hague, covers 4.27 square kilometres of which 4.02 are land and 0.24 water, holds 21,752 dwellings and had 46,155 residents in 2023 at a density of 10,809. Around 1900 the Laakkanaal and the insteekhavens were dug and industry settled along them; most of that industrial district has since been converted into a campus of the Haagse Hogeschool and a residential area including student flats. All of that is from the encyclopaedia entry.' },
          { h3: 'Why the dwelling counts are not added up', p: 'The stadsdeel figure of 21,752 dwellings comes from the encyclopaedia entry. The two wijk figures, 21,095 and 1,902, come from the statistics office for 2025. Adding the second pair gives a larger number than the first, and the reason is that they are different vintages from different publishers, not that anything is wrong. This page quotes all three and combines none of them.' },
          { h3: 'What was calculated', p: 'Nothing. Every population, household, age, area, density, dwelling, value, tenure, income, establishment and pupil figure above is quoted exactly as published, at the year the publisher assigned it. No wijk was averaged into a stadsdeel, no stadsdeel divided into a wijk, and no share recomputed from counts.' },
          { h3: 'What the page will not say', p: 'It will not say that young adults prefer the Binckhorst, that older people avoid it, or that families reject it. Those are claims about what people wanted, and the figures record only what people did, in a wijk where what they could do was narrow. The measurement that would separate the two is a survey of who considered living here and what was available when they looked, and no such thing was read.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to Laak, to either of its wijken, to The Hague or to any school counted above, and nothing here implies one. The two wijk rows come from the statistics office at that office own vintages, which is why an income figure for 2023 sits beside one for 2024 rather than being quietly aligned. The formation of the stadsdeel, its area, its dwelling stock, the 2023 population and the account of the Laakkanaal and the industrial district come from the encyclopaedia entry.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Did they choose it, or was it the only thing on the shelf?',
      intro: 'One age table, one obvious reading, and the question that decides whether the reading is worth anything.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. List what the alternatives were', p: 'Before treating a distribution as a preference, write down the options. In the Binckhorst, 1,750 of 1,902 dwellings are rented and the wijk was an industrial estate a generation ago. The set of things a household could have chosen there is short, and it is short in a way that excludes particular kinds of household outright.' },
          { h3: '2. Ask who the menu was open to', p: 'A preference is revealed by a choice, and a choice needs at least two available things. If the option a group would have taken was not on offer, their absence from the data is not information about them. It is information about the shelf.' },
          { h3: '3. Then name what you actually measured', p: 'Not who wants to live in a converted industrial district, but who can live in the housing that was built there. That is a smaller claim, it is fully supported, and it is the one that would still be true if everybody involved had entirely different tastes.' }
        ] },
        { kind: 'table', caption: 'A supply curve mistaken for a demand curve, in five other places', head: ['The observation', 'The preference reading', 'The availability reading', 'What settles it'], rows: [
          ['Ninety percent of sessions are on mobile', 'users prefer the app', 'the web version was never finished', 'whether the alternative shipped'],
          ['Almost nobody uses the export button', 'people do not want exports', 'it is three menus deep', 'where it sits in the interface'],
          ['The default plan is the most chosen', 'it suits most customers', 'it is what happens if you do nothing', 'what a non-choice produces'],
          ['Arm B of the test underperformed', 'users disliked the new design', 'arm B timed out for half its traffic', 'the error rate per arm'],
          ['Sixty-four percent of a wijk is twenty-five to forty-five', 'young adults chose this area', 'flats were built on an old industrial estate', 'what was available to whom']
        ] },
        { kind: 'callout', h3: 'Every usage figure is a measurement of the menu as much as of the diner', p: 'This is the error that survives seniority, because it does not feel like an inference at all. Somebody puts a chart on a screen showing that ninety percent of activity happens one way, and the sentence that follows begins with users prefer, and nobody in the room objects, because the chart is correct and the sentence sounds like a description of it. It is not a description. It is a causal claim with a missing premise, and the premise is that everyone in the population had genuine access to the alternatives. That premise is almost never true and almost never stated, which is why it is almost never checked. Defaults are the purest case: the most popular option in nearly every system on earth is whatever happens when the user does nothing, and this is reported as popularity every day of the week in rooms full of intelligent people. But the general form is wider and worse, because it quietly launders decisions already made into evidence for making them again. We built one thing, people used it, therefore people want that thing, therefore we will build more of it. The loop closes and nothing enters it from outside. The way out is a single question asked before any distribution is allowed to become a preference: what were the other options, and for whom were they actually reachable. If you cannot answer, you have measured your own supply and should say so, which is a genuinely useful thing to report and a much harder thing to say out loud.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits before a distribution becomes a preference',
      intro: 'Feature usage, plan mix, browser share, channel split, course enrolments: each arrives as a clean distribution and each gets read as a vote. Practised on a wijk whose age profile was decided by a building programme.',
      body: [
        { kind: 'table', caption: 'Testing whether a choice was a choice', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Enumerate the options', 'Write the full list of what was available, not just what was taken', 'A single option read as a winner', 'The real shape of the decision'],
          ['Check reachability', 'Ask, for each group, whether each option was open to them', 'Absence read as rejection', 'Who was choosing and who was not'],
          ['Find the default', 'Identify what happens when somebody does nothing', 'Inaction counted as endorsement', 'The share that means nothing'],
          ['Separate supply from demand', 'State plainly which one you measured', 'A build decision justifying itself', 'An honest description'],
          ['Name the missing study', 'Say what survey or test would settle it', 'An argument with no exit', 'A costed next step']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A vote where one option is written in enormous letters and the others are on the back of the sheet. The children work out why the result was decided before anybody voted.' },
          { h3: 'For teenagers', p: 'Usage logs from their own small app, with one feature deliberately buried, then a written account of what the numbers do and do not show. The stretch: change only the placement and collect the logs again.' },
          { h3: 'For adults', p: 'A real usage chart from work. Adults almost always find a default being reported as a preference, and at least one option that most of the population could never have reached.' }
        ] },
        { kind: 'p', text: 'Both wijk rows are quoted from the statistics office, one page each, at the vintages that office assigns: residents and ages January 2026, households and housing 2025, income 2024 for Laakkwartier en Spoorwijk and 2023 for the Binckhorst. The 1988 formation, the two wijken, the 4.27 square kilometres, the 21,752 dwellings, the 2023 population of 46,155 and the account of the Laakkanaal, the insteekhavens and the conversion of the industrial district come from the encyclopaedia entry. Nothing on this page was calculated.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a vote that was decided by the layout to a usage chart nobody has questioned',
    intro: 'The starting rung comes out of the free hour, from what the learner turns out to be able to do when handed something real. Address and birthday are not inputs.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'The vote that was rigged by the paper', p: 'Children discover a result can be settled by how the question was printed.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'What else was on the menu', p: 'Learners list the options before reading any result, every time.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Move it and measure again', p: 'Teenagers bury a feature, log the usage, unbury it and log it again.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'The default reported as a preference', p: 'Adults take a real chart apart and find the option that was never reachable.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will tell you young professionals are drawn to the Binckhorst. Why should a teenager in Spoorwijk ask what else was for sale?',
    intro: 'Because drawn to is a claim about wanting, and the table only records where people are.',
    p1: 'Give a model an age profile in which 64 percent of a wijk is between twenty-five and forty-five and the reply will be about appeal: vibrant, attracting young professionals, popular with. Those words are all about desire, and not one of the published figures measures desire. The model reaches for them because the writing it has learned from reaches for them, and because a distribution genuinely does look like the result of many people choosing. It will not mention that 92 percent of the housing is rented, that the wijk was industrial land around a canal dug in 1900, or that most of it was converted to flats, all of which is published and all of which explains the same table without anybody preferring anything.',
    p2: 'So the learner practises the reverse move, and the cheapest place to build it is a small program with logs, where you can bury a button, watch the usage collapse and see with your own eyes that you have measured your own interface rather than anybody taste. A fifteen-year-old in Laakkwartier who has done that once will be the person at thirty who hears users prefer in a meeting and asks what the other options were and who could reach them. Models will keep converting distributions into preferences, because that is the shape of the sentences they were trained on. Noticing the missing premise stays a person job.',
    closer: 'The case for a child in Laak learning to code in 2026 is therefore not about housing. It is that software is the one place where you can change the menu yourself, run it again, and watch the preference you were told about turn out to have been a layout decision.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes across the smallest stadsdeel',
    intro: 'Laak is four and a quarter square kilometres wedged between the railway lines and the canal, and it holds the largest wijk in The Hague, which means a great many people in a short distance and very little of the space one would want for anything else.',
    cells: [
      { h3: 'Dense, and still no room', p: 'Laakkwartier en Spoorwijk runs at a published 16,690 people to the square kilometre. Nothing about that density puts a room, at a time, with a teacher in it, within reach of a particular family. A lesson that arrives at the table needs neither the room nor the journey.' },
      { h3: 'The Dutch that stays Dutch', p: 'Groep, havo, vwo and profielkeuze. Four words held in the original inside an otherwise English hour, because a child should recognise the term for their own school year when a teacher says it.' },
      { h3: 'An hour of teaching, given away', p: 'A task, and a teacher watching how the learner approaches it rather than whether they get it right. By the end there is a level, the course that begins at it, and a weekly time. No charge, no card, no call afterwards dressed up as a lesson.' },
      { h3: 'Assembled by stage, from everywhere', p: 'Five to ten learners at one level. Even the largest wijk in the city does not reliably contain five people at one narrow stage in one month, so the pool is not the wijk and never has been. That is what makes the class exist now rather than later.' },
      { h3: 'Eight a month, against a published calendar', p: 'Two live lessons a week at one fixed hour. Zuid-Holland takes regio Midden holiday dates, which are set years ahead, so the weeks off are part of the plan from the first conversation.' },
      { h3: 'The offset, and which country moves it', p: 'Three and a half hours ahead in Dutch summer time and four and a half outside it. India has not changed its clock in decades, so the whole variation is made at this end, and neither value removes an hour a family here would have used.' }
    ],
    spec: { title: 'The largest wijk in the city, and what that does not guarantee', p: 'Laakkwartier en Spoorwijk holds 44,684 residents, more than any other wijk in The Hague, with 6,325 of them under fifteen and 12 primary establishments teaching 2,903 pupils. The Binckhorst beside it holds 360 under fifteen and one primary establishment with 62. Neither of those situations produces five to ten learners at one particular stage of one particular subject in one particular month, because a stage is narrow wherever you stand and crowding does not make it wider. So the group is built by level from a worldwide pool, at every age between 6 and 67.' }
  },

  fees: {
    h2: 'The fee, in dollars, in both wijken',
    intro: 'On the page, rather than saved for a phone call.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'One international rate quoted in dollars, with no euro edition, so an address in Spoorwijk is charged exactly what one in the Binckhorst is. Nothing is paid until the free lesson has settled a course and an hour, and payment is arranged over WhatsApp afterwards. Pausing, switching plan and missing a week are all set out on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, exactly as the people who left them wrote them',

  book: {
    h2: 'Send the level, not the wijk',
    intro: 'The first task might be a class vote decided by how the paper was laid out, a feature buried three menus deep and then unburied, or a usage chart from work that has been quoted as a preference for two years.',
    success: 'Thank you. Your Laak class request has been sent.'
  },

  faq: {
    h2: 'Laak coding class questions',
    intro: 'The stadsdeel, its two wijken, one thing a distribution cannot prove, the teaching and the terms.',
    items: [
      { q: 'Which neighbourhoods make up Laak?', a: 'Two wijken. Laakkwartier en Spoorwijk, with six buurten, Laakhaven-Oost, Laakhaven-West, Spoorwijk, Laakkwartier-West, Laakkwartier-Oost and the Noordpolderbuurt; and Wijk 39 Binckhorst. Laak was formed in 1988 and is the smallest stadsdeel of The Hague at 4.27 square kilometres, of which 4.02 are land, with 21,752 dwellings and 46,155 residents in 2023.' },
      { q: 'Why is the Binckhorst so young?', a: 'The published figures show 2,635 of its 4,126 residents aged twenty-five to forty-five, 64 percent, with 360 under fifteen and 100 over sixty-five. This page does not attribute that to preference. Around 1900 the Laakkanaal and its inlet harbours were dug and industry settled there, and most of that industrial district has since been converted to a Haagse Hogeschool campus and housing including student flats. Of the 1,902 dwellings, 1,750 are rented. The age profile follows what was built.' },
      { q: 'Is Laakkwartier en Spoorwijk really the largest wijk in The Hague?', a: 'By population, yes: 44,684 residents at January 2026, on 281 hectares of which 268 are land, at a published density of 16,690 per square kilometre. It has 24,140 households averaging 1.8 people, 13,475 of them single-person, and 21,095 dwellings at an average value of 249,000 euro, of which 14,766 are rented.' },
      { q: 'Are there many children in Laak?', a: '6,325 residents of Laakkwartier en Spoorwijk are under fifteen, 14 percent of the wijk, and 360 of the Binckhorst, 8.7 percent. Twelve primary establishments in the larger wijk teach 2,903 pupils and two secondary establishments teach 543; the Binckhorst has one primary establishment with 62 pupils. Where establishments stand relative to where children live is a separate question that the Escamp page in this series takes up.' },
      { q: 'Does this page say anything about who wants to live in Laak?', a: 'Deliberately not. The figures record where people live, not what they would have chosen from a wider set of options, and in a wijk where 92 percent of the dwellings are rented flats the set of options was narrow in a way that excludes some households outright. Settling the question would need a survey of who considered moving here and what was on the market when they looked, and no such thing was read for this page.' },
      { q: 'Is the class taught in Dutch?', a: 'No. English throughout, with one exception kept on purpose: the Dutch school vocabulary stays Dutch, so groep, havo, vwo and profielkeuze are used in class exactly as they appear on a child school paperwork. No course exists in a Dutch-language edition.' },
      { q: 'What hours suit a family in Laak?', a: 'The teacher sits three and a half hours ahead during Dutch summer time and four and a half outside it, and every part of that change is made by the Dutch clock rather than the Indian one. In practice the useful hours all survive: after school, early evening, and both days of the weekend. One recurring hour is agreed in the free lesson and then stays where it is.' },
      { q: 'Is there a Modern Age Coders classroom in Laak?', a: 'No, and none is claimed here, elsewhere in The Hague or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Laak coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore The Hague and beyond',
    h2: 'Out of the smallest stadsdeel, into the rest of the city',
    html: 'West is <a class="cg-inline-link" href="/coding-classes-in-the-hague-centrum">Den Haag Centrum</a>, which will not grade a household figure; south-west <a class="cg-inline-link" href="/coding-classes-in-escamp">Escamp</a>, which counts school buildings and then explains why that was beside the point; north-east <a class="cg-inline-link" href="/coding-classes-in-haagse-hout">Haagse Hout</a>, which asks how many digits a number has earned; and on the coast <a class="cg-inline-link" href="/coding-classes-in-scheveningen">Scheveningen</a>, where one name covers four different things. The city page, <a class="cg-inline-link" href="/coding-classes-in-the-hague">coding classes in The Hague</a>, holds all eight stadsdelen together. South-east is <a class="cg-inline-link" href="/coding-classes-in-delft">Delft</a> and around it all lies <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>. A learner whose goal is a trained model rather than a running program should start at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and every page here descends from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Finish this on WhatsApp'
  },

  footerHeading: 'The Hague and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-the-hague', label: 'The Hague' },
    { href: '/coding-classes-in-haagse-hout', label: 'Haagse Hout' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-lak .cg-hero-grid { grid-template-columns: 1fr 1.1fr; align-items: center; gap: clamp(1.45rem, 3.4vw, 2.75rem); }
.cg-root.cg-lak .cg-hero h1 { font-weight: 500; letter-spacing: -0.0128em; line-height: 1.11; }
.cg-root.cg-lak .cg-capsule { border-left: 5px solid var(--cg-accent); padding-left: 1.25rem; }
.cg-root.cg-lak .cg-eyebrow { letter-spacing: 0.175em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-lak .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.016em; }
.cg-root.cg-lak .cg-grid-3 { gap: clamp(1.05rem, 2.15vw, 1.72rem); }
.cg-root.cg-lak .cg-card { border-radius: 2px; border-top: 2px solid var(--cg-accent); }
.cg-root.cg-lak .cg-table caption { letter-spacing: 0.038em; font-weight: 600; }
.cg-root.cg-lak .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-lak .cg-table td:last-child { font-weight: 600; }
.cg-root.cg-lak .cg-ladder-col { border-left: 2px solid var(--cg-accent-soft); padding-left: 0.95rem; }
`,

  dossier: {
    curriculumAuthority: 'Stadsdeel Laak, Den Haag, Zuid-Holland: formed 1988, the smallest stadsdeel of The Hague, 4.27 km2 of which 4.02 land and 0.24 water, 21,752 woningen, published density 10,809, 46,155 residents (2023) against 47,305 for 2022 on the Hague city page; two wijken, both read at 2026. Laakkwartier en Spoorwijk 44,684, the largest wijk in The Hague, on 281 hectares of which 268 land and 12 water, density 16,690; 24,140 households averaging 1.8 with 13,475 single at 56 percent; 6,325 under fifteen at 14 percent, 7,535 aged fifteen to twenty-five at 17, 16,320 aged twenty-five to forty-five at 37, 10,385 aged forty-five to sixty-five at 23, 4,105 over sixty-five at 9.2; 21,095 dwellings, value 249,000 euro, 14,766 rented at 70 percent and 6,118 owned at 29; income 26,300 euro (2024); 12 primary establishments with 2,903 pupils and 2 secondary with 543; six buurten Laakhaven-Oost, Laakhaven-West, Spoorwijk, Laakkwartier-West, Laakkwartier-Oost and Noordpolderbuurt. Wijk 39 Binckhorst 4,126 on 146 hectares of which 134 land and 12 water, density 2,556; 1,870 households averaging 1.6 with 1,025 single at 55 percent; 360 under fifteen at 8.7 percent, 615 aged fifteen to twenty-five at 15, 2,635 aged twenty-five to forty-five at 64, 425 aged forty-five to sixty-five at 10, 100 over sixty-five; 1,902 dwellings, value 386,000 euro, 1,750 rented at 92 percent and 152 owned at 8; income 49,600 euro for 2023 rather than 2024; 1 primary establishment with 62 pupils. History: around 1900 the Laakkanaal and insteekhavens were dug and industry settled along them; most of that industrial district has been converted to a Haagse Hogeschool campus and a residential area including student flats. Regio Midden holidays. The district page argues that a distribution licenses no inference about preference unless the options were reachable by everyone; Den Haag Centrum owns the missing standard, Escamp necessary versus sufficient, Scheveningen the unstable referent, Haagse Hout precision against accuracy, Prins Alexander the single cross-section and Venlo the excluded-population denominator.',
    localProject: 'A distribution over options is evidence about preferences only if the options were open to everyone in the same way. Wijk 39 Binckhorst has 4,126 residents of whom 2,635 are aged twenty-five to forty-five, 64 percent, with 360 under fifteen and 100 over sixty-five, and 1,750 of its 1,902 dwellings are rented, 92 percent. The available sentence is that young adults are drawn to the area and that families and older people avoid it. Every word of that is an inference about wanting, and none of the figures measures wanting. The published history supplies the alternative: around 1900 the Laakkanaal and its inlet harbours were dug and industry established itself, and most of that industrial district has since been rebuilt as a Haagse Hogeschool campus and housing including student flats. Rented flats on a converted industrial estate are taken by the households for whom a rented flat is a workable home; a family of five and a couple in their eighties are not declining the Binckhorst, they were largely never offered anything in it they could take. So the age table measures the building programme, not taste, and the smaller claim is the fully supported one. The programming form is the most common false inference in product work and it survives seniority because it does not feel like an inference: ninety percent of sessions on mobile because the web client never shipped, an unused export button sitting three menus deep, an A/B arm that timed out for half its traffic, and above all the default, which is the most chosen option in almost every system on earth and is reported as popularity daily. The loop is what makes it expensive: we built one thing, people used it, therefore people want it, therefore we build more, and nothing enters the loop from outside. Distinct from the single cross-section (Prins Alexander), which asks whether a state arose by arrival or by ageing and is a question about history rather than about choice sets, and from the excluded-population denominator (Venlo), where the served population appears in no register at all; here everybody is registered and the fault is reading an outcome as a decision. The page states what would settle it, a survey of who considered moving here and what was on the market when they looked, and reports that neither was read.',
    requiredMentions: [
      '24,140',
      '13,475',
      '7,535',
      '16,320',
      '21,095',
      '249,000',
      '14,766',
      '4,126',
      '2,635',
      '1,902',
      '386,000',
      '16,690',
      '2,556',
      'Noordpolderbuurt'
    ],
    sources: [
      { claim: 'Wijk Laakkwartier en Spoorwijk, Den Haag: 44,684 inwoners (2026); 24,140 huishoudens averaging 1.8, 13,475 eenpersoonshuishoudens at 56 percent and 10,665 meerpersoonshuishoudens at 44; ages 6,325 (0 to 15, 14 percent), 7,535 (15 to 25, 17 percent), 16,320 (25 to 45, 37 percent), 10,385 (45 to 65, 23 percent), 4,105 (65+, 9.2 percent); 281 hectare, 268 land, 12 water; bevolkingsdichtheid 16,690 per km2; woningvoorraad 21,095 (2025); gemiddelde WOZ 249,000 euro (2025); 14,766 huurwoningen (70 percent) and 6,118 koopwoningen (29 percent); gemiddeld inkomen 26,300 euro (2024); 12 vestigingen basisonderwijs with 2,903 leerlingen and 2 vestigingen voortgezet onderwijs with 543 leerlingen; 6 buurten: Laakhaven-Oost, Laakhaven-West, Spoorwijk, Laakkwartier-West, Laakkwartier-Oost, Noordpolderbuurt.', url: 'https://allecijfers.nl/wijk/laakkwartier-en-spoorwijk-den-haag/' },
      { claim: 'Wijk 39 Binckhorst, Den Haag: 4,126 inwoners (2026); 1,870 huishoudens averaging 1.6, 1,025 eenpersoonshuishoudens at 55 percent and 845 meerpersoonshuishoudens at 45; ages 360 (0 to 15, 8.7 percent), 615 (15 to 25, 15 percent), 2,635 (25 to 45, 64 percent), 425 (45 to 65, 10 percent), 100 (65+, 2.42 percent); 146 hectare, 134 land, 12 water; bevolkingsdichtheid 2,556 per km2; woningvoorraad 1,902 (2025); gemiddelde WOZ 386,000 euro (2025); 1,750 huurwoningen (92 percent) and 152 koopwoningen (8 percent); gemiddeld inkomen 49,600 euro for 2023; 1 vestiging basisonderwijs with 62 leerlingen.', url: 'https://allecijfers.nl/wijk/binckhorst-den-haag/' },
      { claim: 'Stadsdeel Laak, Den Haag: formed 1988; het kleinste van de stadsdelen van Den Haag; two wijken, Laakkwartier en Spoorwijk and Binckhorst; 46,155 inwoners (2023); bevolkingsdichtheid 10,809 per km2; oppervlakte 4,27 km2, of which 4,02 land and 0,24 water; 21,752 woningen. Rond 1900 werden het Laakkanaal en insteekhavens gegraven, waar zich industrie vestigde. Het grootste deel van die industriewijk is nu omgebouwd tot campus van de Haagse Hogeschool en woongebied met (studenten)flats.', url: 'https://nl.wikipedia.org/wiki/Laak_(stadsdeel_van_Den_Haag)' },
      { claim: 'The Hague city page in this series publishes stadsdeel Laak at 47,305 residents for 2022 and describes Laakkwartier en Spoorwijk as the single largest wijk in the city at 44,684 on 1 January 2026.', url: 'https://learn.modernagecoders.com/coding-classes-in-the-hague' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'That young adults prefer the Binckhorst, that older people avoid it, or that families reject it. Those are claims about what people wanted; the figures record only where people are, in a wijk where the housing on offer is narrow.',
      'That the area is popular, vibrant, or attractive to any group. Every one of those words asserts a preference the data does not contain.',
      'Any causal claim running the other way either, such as that the building programme was a response to demand. Nothing read for this page establishes why the flats were built.',
      'Any stadsdeel dwelling total assembled from the two wijk figures. The 21,752 is from the encyclopaedia entry and the 21,095 and 1,902 are 2025 statistics office figures; they are different vintages from different publishers and are quoted separately.',
      'A 2026 population for the stadsdeel. The published totals are 46,155 for 2023 and 47,305 for 2022 on the city page, both dated wherever used.',
      'Any comparison of the two income figures as though they shared a year. Laakkwartier en Spoorwijk is 2024 and the Binckhorst is 2023, which is stated rather than aligned.',
      'Any reading of the third digit of the 2.42 percent over sixty-five in the Binckhorst. Precision against accuracy is the Haagse Hout page argument and is not reworked here.',
      'Any inference from where primary establishments stand relative to where children live. That is the Escamp page argument.',
      'Any account of how the age profile arose over time, such as whether residents arrived young or grew into the band. That is the Prins Alexander page argument, and this page makes no claim about the history of the stock.',
      'Anything the Hague city page owns, including the stadsdeel population table, the named secondary schools and their addresses.'
    ]
  }
};
