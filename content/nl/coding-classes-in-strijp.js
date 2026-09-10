'use strict';
// Strijp: the western stadsdeel of Eindhoven, three CBS wijken, all three
// read, Oud-Strijp, Halve Maan and Meerhoven.
// Spine: every detail added to a picture of a resident can only shrink the
// number of people it fits, and published totals give bounds, never the
// overlap itself.

module.exports = {
  slug: 'coding-classes-in-strijp',
  code: 'stp',
  accent: '#932601',
  accentRationale: 'Strijp: a fired-brick red for the Philips halls of Strijp-S, brighter than the Brabant red and kept apart from the Dommel teal of the Eindhoven city page, the green-teal of Gestel and the rose of Eindhoven Centrum, and nearest to Noord-Holland, which it does not link to',
  pageType: 'district',
  place: {
    name: 'Strijp',
    eyebrow: 'Strijp, Eindhoven',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'City', name: 'Eindhoven' },
      { type: 'AdministrativeArea', name: 'Noord-Brabant' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-netherlands', name: 'Netherlands' },
    { slug: 'coding-classes-in-eindhoven', name: 'Eindhoven' }
  ],
  nav: [
    { label: 'Eindhoven', href: '/coding-classes-in-eindhoven' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Strijp, Eindhoven, Netherlands',
  title: 'Coding Classes in Strijp, Eindhoven | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Strijp, Eindhoven for ages 6 to 67, in Oud-Strijp, Halve Maan and Meerhoven. The first lesson is free of charge.',
  ogDescription: 'Live online coding, Python and AI in Strijp, on a page about why a more detailed picture of a resident fits fewer people.',
  twitterDescription: 'Live classes in Strijp for ages 6 to 67, one USD fee and a first lesson that is free.',
  ogImageCourse: 'complete-app-development-masterclass-for-teens',
  verifiedOn: '10 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Strijp Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Oud-Strijp, Halve Maan and Meerhoven, taught in English.'
  },

  h1: 'Coding classes in Strijp, where every detail added to a picture makes it fit fewer people',
  capsuleQ: 'What are the best coding classes in Strijp, Eindhoven?',
  capsule: 'Coding classes in Strijp reach a stadsdeel of three statistics office wijken, Oud-Strijp, Halve Maan and Meerhoven, all three read, with 41,573 residents in January 2026. In Oud-Strijp in 2025, 8,645 of 15,840 residents were men, 6,195 lived alone and 1,950 were enrolled as students. How many were male students living alone? The published figures cannot say. They allow any number from none to 1,950, and every extra detail added to that picture can only lower the ceiling further. Modern Age Coders teaches live online in English from Philipsdorp to Meerhoven, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Ask someone to picture a resident of the old Philips quarter of Eindhoven and the picture arrives fully formed: young, male, living alone in a converted factory flat, studying or working somewhere in technology. Each detail makes the picture more convincing, and each one makes it true of fewer people, because a person who fits four descriptions fits each of the four and nobody else. The published figures for Oud-Strijp show exactly how far that goes. They give the number of men, of people living alone and of students separately, and from separate totals the most anyone can say is that the overlap lies between two limits. Treating the vivid picture as the typical resident is one of the oldest mistakes in reasoning, and it is also a bug in any query that forgets what AND does.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Strijp, Eindhoven.',

  picks: {
    eyebrow: 'Course picks for Strijp',
    h2: 'Four courses for the west of Eindhoven',
    intro: 'A groep 5 child in Meerhoven, one of 2,665 under fifteen in that wijk alone, a teenager in Halve Maan designing an app for the football club, a student in Oud-Strijp filtering a dataset until the result looks suspiciously tidy, and an adult near the Beatrixkanaal who has been handed a customer persona and asked to build a product around it. None of them pays for the first lesson, and every one of them gets a full one.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python where a child sorts a class by one rule, then two, then three, and watches the group that fits them all get smaller every time.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'A complete app, from the first screen to a working build, including search filters that must never return more results when a condition is added.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python and SQL where every extra condition is tested to shrink the result, and a query that grows is treated as a broken join.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Reading segments and personas by asking how many people each added detail leaves, and whether the data can say at all.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Strijp today',
      h2: 'A Philips quarter, a garden village and a new town by the airport',
      intro: 'Strijp was an independent municipality until 1920, when it joined Eindhoven with the other surrounding villages. The statistics office divides it into three wijken, Oud-Strijp, Halve Maan and Meerhoven, and their areas add to 2,930 hectares, 2,886 of land and 43 of water. The encyclopaedia gives the stadsdeel as 29.3 square kilometres, 28.86 of land and 0.43 of water, which is the same to the hectare, so the three wijken are all of Strijp. Their 2026 counts add to 41,573 residents, a sum this page makes from three published rows. The encyclopaedia also says 22 buurten; the office list has 24, six, eight and ten, and the page uses the office list.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Oud-Strijp, the Philips quarter', p: '16,547 residents on only 195 hectares of land, in six buurten: Strijp S, Schoot, Philipsdorp, Schouwbroek, the Eliasterrein Vonderkwartier and Engelsbergen. 8,000 residents are aged twenty-five to forty-five, 48 percent, the highest share of any Eindhoven wijk. Seven in ten of the 9,354 dwellings are rented.' },
          { h3: 'Halve Maan, families and industry', p: '11,436 residents on 1,139 hectares, eight buurten from Mispelhoef and Herdgang to the Drents Dorp, Lievendaal, Het Ven and the Hurk, where the land is as much industrial estate as housing. 1,910 residents are under fifteen, and four secondary establishments teach 1,579 pupils.' },
          { h3: 'Meerhoven, the new town in the west', p: '13,590 residents on 1,552 hectares, in ten buurten that include Eindhoven Airport and Flight Forum alongside Zandrijk, Bosrijk, Waterrijk, Meerrijk and Grasrijk. Households average 2.5 people, 2,485 of the 5,435 have children, and 72 percent of the dwellings are owner-occupied.' }
        ] },
        { kind: 'spec', title: 'Where Philips began to build, from 1918', p: 'The encyclopaedia entry puts the start of the Philips expansion here: from 1918 the company grew outwards, beginning with the complex Strijp-S, and the housing it needed produced Philipsdorp and the Drents Dorp. The same entry lists among the landmarks of the stadsdeel the Philips Stadion, the Evoluon, the architectural monuments of the Philips complex at Strijp-S, the Sint-Trudokerk, which dates originally from 1887, and the Beatrixkanaal, whose banks it describes as handsome in places. Meerhoven, the largest wijk by land, runs out to Eindhoven Airport. The page repeats those lines and does not add to them.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'The picture and the people',
      h2: 'Add a detail, lose some people, and never gain any',
      intro: 'Every count below is published for Oud-Strijp for 2025, so they share one year and one population of 15,840 residents. The limits in the last two columns are what those separate totals allow, and nothing more: no cross-tabulation of sex, household and enrolment at this level is used on this page.',
      body: [
        { kind: 'table', caption: 'A picture of a resident, one detail at a time, Oud-Strijp 2025', head: ['The picture so far', 'Published total for the newest detail', 'At most this many fit the whole picture', 'At least this many'], rows: [
          ['A resident of Oud-Strijp', '15,840 residents', '15,840', '15,840'],
          ['... who is a man', '8,645 men', '8,645', '8,645'],
          ['... who lives alone', '6,195 people in one-person households', '6,195', 'none: 8,645 and 6,195 fit inside 15,840 without meeting'],
          ['... who is enrolled as a student', '1,950 students, 210 MBO, 670 higher professional and 1,070 university', '1,950', 'none'],
          ['... in a flat in Strijp S, working on a start-up', 'not published here', 'fewer than 1,950', 'none']
        ] },
        { kind: 'p', text: 'The upper limit in the third column can only stay level or fall as the picture grows, because a person who fits a longer description also fits every shorter one inside it. It fell from 15,840 to 1,950 in three steps, and the most vivid version, the one with a flat and a start-up, cannot be larger than the 1,950 enrolled students. The lower limit in the fourth column is a different lesson. From separate totals alone, every overlap here could be zero: 8,645 men and 6,195 people living alone add to 14,840, which fits inside 15,840 without a single man living alone. That is not a claim that none do. It is a statement of what the published figures can and cannot say, and they cannot say how many people match the picture at all.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Oud-Strijp, Halve Maan and Meerhoven, figure by figure',
      intro: 'Each wijk as published, with the year on each figure, then the sums and the limits worked out here, then what the page refuses to conclude.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Wijk Oud-Strijp', p: '16,547 residents (2026) and 15,840 (2025), of them 8,645 men and 7,195 women (2025); 10,080 households averaging 1.6, 6,195 single-person, 2,540 multi-person without children, 1,340 with children; 1,240 under fifteen, 2,625 aged fifteen to twenty-five, 8,000 aged twenty-five to forty-five, 2,935 aged forty-five to sixty-five, 1,730 over sixty-five (2026); 196 hectares, 195 land and 1 water; published density 8,123 (2025); 9,354 dwellings, 2,806 owner-occupied and 6,548 rented; estimated average value 368,000 euro (2025); income 42,300 euro per resident and 47,200 per recipient (2024); 2 primary establishments with 383 pupils, 3 secondary with 1,296; resident students 210 MBO, 670 higher professional, 1,070 university (2025).' },
          { h3: 'Wijk Halve Maan', p: '11,436 residents (2026) and 11,290 (2025), 5,750 men and 5,540 women (2025); 5,580 households averaging 2.0, 2,520 single-person, 1,310 multi-person without children, 1,750 with children; 1,910 under fifteen, 1,345 aged fifteen to twenty-five, 3,890 aged twenty-five to forty-five, 2,800 aged forty-five to sixty-five, 1,520 over sixty-five (2026); 1,147 hectares, 1,139 land and 8 water; published density 991; 5,402 dwellings, 2,053 owner-occupied and 3,349 rented; estimated 391,000 euro (2025); income 35,400 euro per resident and 44,000 per recipient (2024); 4 primary establishments with 1,379 pupils, 4 secondary with 1,579.' },
          { h3: 'Wijk Meerhoven', p: '13,590 residents (2026), 13,635 (2025) and 9,770 (2013); 5,435 households averaging 2.5, 1,450 single-person, 1,500 multi-person without children, 2,485 with children; 2,665 under fifteen, 1,655 aged fifteen to twenty-five, 4,170 aged twenty-five to forty-five, 3,630 aged forty-five to sixty-five, 1,490 over sixty-five (2026); 1,587 hectares, 1,552 land and 34 water; published density 879 (2025); 5,325 dwellings, 3,834 owner-occupied and 1,491 rented; estimated 533,000 euro (2025), the highest in Eindhoven; income 44,600 euro per resident and 58,900 per recipient (2024); 2 primary establishments with 1,346 pupils and no secondary.' },
          { h3: 'The sums', p: 'Residents 16,547 plus 11,436 plus 13,590 is 41,573 (2026). Land 2,886 hectares of 2,930. Households 21,095 and dwellings 20,081 (2025), of them 8,693 owner-occupied. Under fifteen 5,815 (2026). Primary establishments 8 teaching 3,108 pupils; secondary 7 teaching 2,875. Each sum takes all three wijken at a single year.' },
          { h3: 'The limits', p: 'For Oud-Strijp in 2025, with 15,840 residents: men and living alone, between 0 and 6,195; men and students, between 0 and 1,950; all three, between 0 and 1,950. Men and not living alone, where 15,840 minus 6,195 is 9,645: at least 2,450, because 8,645 plus 9,645 exceeds 15,840 by that much. Women and not living alone: at least 1,000. Nothing else was worked out.' },
          { h3: 'What the page does not say', p: 'It does not say how many residents of Strijp are young men living alone, or tech workers, or start-up founders; no published figure used here can say it. It does not combine the 2026 age counts with the 2025 household and sex counts. And it does not read anything into the difference between 15,840 residents in 2025 and 16,547 in 2026.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with Strijp, Eindhoven, Philips, the stadium, the airport or any school in the stadsdeel, and nothing here suggests one. The three wijk rows each come from their own statistics office page, with residents and ages at 2026 and households, sex, dwellings, values and resident students at 2025, and income at 2024. The 1920 date, the 29.3 square kilometres, the 1918 start of the Philips expansion and the landmarks are taken from the encyclopaedia entry for the stadsdeel.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'AND can only take people away',
      intro: 'A description with two conditions fits no more people than either condition alone. It sounds too obvious to need saying, and it is broken constantly, by people judging likelihood and by code that joins tables.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Every condition sets a ceiling', p: 'Men in Oud-Strijp: 8,645. People living alone: 6,195. Anyone who is both is counted in each, so the number who are both cannot exceed the smaller, 6,195. Add students, 1,950, and the ceiling for all three drops to 1,950. Adding a detail never raises it.' },
          { h3: '2. Separate totals give only limits', p: 'Knowing how many are men and how many live alone does not tell you how many are both. The overlap could sit anywhere between the two limits, and here the lower one is zero. Only a table that counts the combination directly can close the gap.' },
          { h3: '3. Sometimes the totals force an overlap', p: 'When two groups together are larger than the population, they must share members. 8,645 men and 9,645 people who do not live alone add to 18,290 in a population of 15,840, so at least 2,450 men do not live alone. That is arithmetic, not a survey.' }
        ] },
        { kind: 'table', caption: 'The same rule, in five other places', head: ['Where it shows up', 'The conditions', 'What must hold', 'What it looks like when it breaks'], rows: [
          ['A search box with filters', 'size, colour, in stock', 'each filter returns no more items than before', 'adding a filter shows extra results'],
          ['A SQL query', 'WHERE a AND b', 'the row count never exceeds the count for a alone', 'a join duplicated rows before the filter'],
          ['A customer persona', 'age, job, city, hobby', 'the persona is rarer than any single trait', 'the persona is described as the typical customer'],
          ['Two summary tables', 'counts by sex, counts by household', 'only limits on the combination', 'someone multiplies the shares as if they were independent'],
          ['A picture of Oud-Strijp', 'man, living alone, student', 'at most 1,950 of 15,840', 'the picture is taken for the resident']
        ] },
        { kind: 'callout', h3: 'A more detailed story feels more likely and is always less likely', p: 'Psychologists have shown for decades that people rate a detailed description as more probable than a plainer one it contains: a person described as a young man who lives alone and studies seems more believable as a resident of the Philips quarter than a person described only as a man. That judgement is impossible arithmetically, since everyone in the first group is also in the second, and yet it is how stories persuade, because each added detail makes the picture more coherent while making it true of fewer people. Code has the same rule built in and breaks it in its own way. A query that adds a condition must return no more rows than before; if it returns more, a join upstream has multiplied the rows, and the result is wrong even though every number looks reasonable. Teams that test this invariant catch a whole family of silent bugs. The other trap is to pretend that separate totals answer a question about combinations. Multiplying 54.6 percent men by 39.1 percent living alone gives 21 percent, but only if sex and living alone were unrelated, which nobody has checked; the honest answer is that the figures allow anything from none to 6,195. In machine learning the same care applies to feature crosses and user segments, where the combination of several ordinary traits is often so rare that a model has hardly seen it. Strijp, where one wijk is 48 percent aged twenty-five to forty-five and another has children in nearly half its households, is a good place to notice that the picture that comes to mind fits only a slice of one of them.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for filters, segments and personas',
      intro: 'Search filters, SQL WHERE clauses, audience segments, eligibility rules and customer personas all combine conditions, and all of them should shrink as the conditions pile up. Practised on the Philips quarter of Eindhoven, where the easy picture fits a small part of the wijk.',
      body: [
        { kind: 'table', caption: 'Combining conditions without inventing people', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Count each condition alone', 'Get the total for every condition before combining any', 'A combination with no ceiling', 'The limits you are working inside'],
          ['Test that AND shrinks', 'Assert the combined count is no bigger than the smallest single count', 'Joins that duplicate rows', 'A query you can trust'],
          ['State limits, not guesses', 'From separate totals, report a range for the overlap', 'An overlap invented by multiplying shares', 'An honest answer about what is unknown'],
          ['Look for forced overlaps', 'Check whether two groups together exceed the whole', 'Missing a certainty the data already gives', 'Minimums that need no survey'],
          ['Count the persona', 'Before designing for a persona, estimate how many people it could fit', 'Building for a picture instead of a population', 'A product aimed at real numbers']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Everyone in the class stands up. Sit down if you are not wearing trainers, then if you do not have a sister, then if you did not walk to school. The class sees that each rule can only make the standing group smaller.' },
          { h3: 'For teenagers', p: 'A small shop search in Python with three filters, and a test that fails if adding a filter ever increases the results. Then a deliberately broken join that makes the test fail, and a hunt for the line that caused it.' },
          { h3: 'For adults', p: 'A persona from work, broken into its separate traits, with a real or estimated count for each. Adults usually find that the persona can fit at most a small fraction of the people it is meant to represent, and sometimes almost none.' }
        ] },
        { kind: 'p', text: 'Everything in this section comes from one wijk row for one year: 15,840 residents, 8,645 men, 6,195 people in one-person households and 1,950 enrolled students, all counted in 2025. The completeness of the stadsdeel rests on the match between the three wijk areas and the 29.3 square kilometres in the encyclopaedia. Every limit stated here is a single addition or subtraction set out above, and a reader can check each of them without any software at all.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sitting down one rule at a time to a query that is tested to shrink',
    intro: 'Where a learner begins is decided in the free lesson, from the way they tackle a real piece of work. The wijk and the birthday are not part of the decision.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Sit down if', p: 'Children apply one rule after another and see the group only ever gets smaller.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Both at once', p: 'Learners count two traits separately and find the most and fewest who could have both.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'The test that catches joins', p: 'Teenagers write filters with a check that fails the moment AND returns more.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Count the persona', p: 'Adults size a persona from real totals and see how few it actually describes.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will describe the typical resident of Strijp in vivid detail. Why should a teenager in Meerhoven count how many people fit?',
    intro: 'Because the published figures allow anywhere from none to 1,950 of 15,840.',
    p1: 'Ask a language model to describe a typical resident of the Philips quarter and it will produce a person: an age, a job in technology, a converted loft, perhaps a bicycle and a start-up. It is fluent and plausible, drawn from everything written about the place, and each detail it adds makes the portrait feel more like a real individual. It is also, by construction, a description that fits fewer people with every sentence. The model has no reason to count them and no data to count them with, and a reader has no signal that the portrait describes a slice rather than a whole.',
    p2: 'The learner who has built a search with filters, and written the test that fails if a filter ever adds results, carries a reflex that turns into judgement: every AND should shrink the set, and a picture is only as common as its rarest trait. Machine learning keeps putting this in front of people, in the segments that marketing asks for, in synthetic personas generated for testing, and in the rare feature combinations a model barely saw in training. Models will keep writing vivid people. Asking how many people could fit the description is still the human part.',
    closer: 'The case for a child in Strijp learning to code in 2026 is therefore not the halls of Strijp-S or the stadium down the road. It is that a query with two conditions has to be right about AND, and a person who has made one right stops believing pictures that fit almost nobody.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for Oud-Strijp, Halve Maan and Meerhoven',
    intro: 'Strijp stretches from flats a short walk from the station to family streets by the airport, with nearly eight times as much land in Meerhoven as in Oud-Strijp, and an evening is equally hard to find at either end.',
    cells: [
      { h3: 'From Grasrijk to the Schoot, no travel', p: 'A family in the far west of Meerhoven is a long ride from anything in the middle of the city, and twice a week that ride is where good intentions go to die. The lesson arrives on the laptop at the agreed time, and the ride simply does not happen.' },
      { h3: 'Groep and havo, as the school says them', p: 'Dutch school words stay Dutch in class: groep, havo, vwo, profielkeuze. They are the terms on every report and in every parents evening in Strijp, so the teacher uses the same ones rather than an English version no school here prints.' },
      { h3: 'A free lesson with real work in it', p: 'The learner spends the first hour on a genuine problem while the teacher watches the approach. It closes with a level, a matching course and a regular time, and nobody is asked for card details or booked into a sales call.' },
      { h3: 'Groups made by stage alone', p: 'Five to ten learners at the same point in the same subject. Strijp has 5,815 residents under fifteen, and still five at one exact stage wanting one exact hour is a rare combination, which is the point of this page, so groups come from a worldwide pool.' },
      { h3: 'Regio Zuid dates, planned in', p: 'Two lessons a week, about eight a month, at a time that stays fixed. Brabant schools take regio Zuid holidays, on dates that differ from the western provinces, and lessons are planned around them from the first month.' },
      { h3: 'India ahead by three and a half or four and a half', p: 'The gap depends on the season because only the Dutch clock changes. Straight after school, early evening and weekend mornings all work throughout the year, and the slot agreed at the free lesson keeps its place.' }
    ],
    spec: { title: 'Eight primary schools, and the rare combination a class needs', p: 'Strijp has eight primary establishments teaching 3,108 pupils and seven secondary establishments teaching 2,875. A coding group needs a combination of conditions, the same subject, the same stage and the same free hour, and each condition shrinks the pool exactly as this page describes. Only a very large pool leaves five people standing, so classes are formed by stage from learners everywhere, of every age from 6 to 67.' }
  },

  fees: {
    h2: 'The fee in Strijp, stated in dollars',
    intro: 'Here in full, before anybody has to ask.',
    first: 'One complete lesson, ending in a placement and a course recommendation.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'A single dollar rate for every country, with no euro list, so a rented flat in Philipsdorp and a family house in Waterrijk pay the same. Nothing changes hands until the free lesson has decided a course and an hour, and payment is then settled over WhatsApp. Breaks, changes of plan and missed lessons are covered in writing on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, each exactly as it was written',

  book: {
    h2: 'Tell us where the learner is up to',
    intro: 'The first task might be a class sitting down one rule at a time, a shop search tested so that filters only ever shrink it, or a persona from work sized against real totals.',
    success: 'Thank you. Your Strijp class request has been sent.'
  },

  faq: {
    h2: 'Strijp coding class questions',
    intro: 'The stadsdeel, its three wijken, one rule about combining conditions, the lessons and the terms.',
    items: [
      { q: 'What does Strijp include?', a: 'Three statistics office wijken: Oud-Strijp, Halve Maan and Meerhoven. Their areas add to 2,930 hectares, 2,886 of land, matching the 29.3 square kilometres in the encyclopaedia, and their 2026 counts add to 41,573 residents. The office lists 24 buurten, including Strijp S, Philipsdorp, the Drents Dorp, Eindhoven Airport and Flight Forum.' },
      { q: 'Is the typical resident of Strijp a young tech worker living alone?', a: 'The published figures cannot say, and the question hides a trap. In Oud-Strijp in 2025, 8,645 of 15,840 residents were men, 6,195 lived alone and 1,950 were enrolled students. The number who were all three lies somewhere between none and 1,950, and each further detail, such as a job in technology, can only lower that ceiling.' },
      { q: 'Why does adding detail make a description fit fewer people?', a: 'Because anyone who fits the longer description also fits every part of it. So the number who are men and live alone can be no larger than the number who live alone, 6,195, and adding students caps it at 1,950. A detailed picture feels more realistic and is always less common.' },
      { q: 'How different are the three wijken of Strijp?', a: 'Very. Oud-Strijp has 16,547 residents on 195 hectares, 48 percent aged twenty-five to forty-five and seven in ten dwellings rented. Meerhoven has 13,590 on 1,552 hectares, 2,665 children under fifteen, households averaging 2.5 and 72 percent of dwellings owner-occupied. Halve Maan lies between them, with the Drents Dorp and the Hurk industrial area.' },
      { q: 'What is the Philips history of Strijp?', a: 'Strijp was an independent municipality until 1920. From 1918 Philips expanded here, starting with the complex at Strijp-S, and the housing built for its workers includes Philipsdorp and the Drents Dorp. The encyclopaedia also lists the Philips Stadion, the Evoluon and the Sint-Trudokerk, originally from 1887, among the landmarks of the stadsdeel.' },
      { q: 'How many schools are in Strijp?', a: 'Adding the three wijk rows: eight primary establishments teaching 3,108 pupils and seven secondary establishments teaching 2,875, four of them in Halve Maan. There are 5,815 residents under fifteen. Nothing on this page comments on the quality or results of any school.' },
      { q: 'Are lessons in English, and at what time?', a: 'Yes, in English, with the Dutch school vocabulary left in Dutch. India is three and a half hours ahead of Strijp in summer and four and a half in winter, so after-school, early-evening and weekend slots all fit. A weekly time is agreed at the free lesson, and the calendar follows the regio Zuid holidays.' },
      { q: 'Is there a Modern Age Coders classroom in Strijp?', a: 'No, and none is claimed here, elsewhere in Eindhoven or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Strijp coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Eindhoven and beyond',
    h2: 'East to the old town, south to Gestel, and out across Brabant',
    html: 'The figures for the whole city, Brainport and the international schools are on <a class="cg-inline-link" href="/coding-classes-in-eindhoven">coding classes in Eindhoven</a>. East of Oud-Strijp is the old town, on <a class="cg-inline-link" href="/coding-classes-in-eindhoven-centrum">Eindhoven Centrum</a>, and to the south is <a class="cg-inline-link" href="/coding-classes-in-gestel">Gestel</a>, where one gap between two wijken can be told five true ways. Woensel-Zuid, Woensel-Noord and Tongelre are still to come, and every one of them lies in <a class="cg-inline-link" href="/coding-classes-in-noord-brabant">Noord-Brabant</a>. For machine learning without the detour, the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a> is the shorter road, and the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a> gathers the whole series in one place.',
    waLabel: 'Pick this up on WhatsApp'
  },

  footerHeading: 'Strijp, Eindhoven and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-eindhoven', label: 'Eindhoven' },
    { href: '/coding-classes-in-gestel', label: 'Gestel' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-stp .cg-hero-grid { grid-template-columns: 1.2fr 0.9fr; align-items: center; gap: clamp(1.2rem, 3.2vw, 2.5rem); }
.cg-root.cg-stp .cg-hero h1 { font-weight: 700; letter-spacing: -0.024em; line-height: 1.04; }
.cg-root.cg-stp .cg-capsule { border-left: 3px solid var(--cg-accent); border-right: 3px solid var(--cg-accent-soft); padding-inline: 1.1rem; }
.cg-root.cg-stp .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-stp .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.018em; }
.cg-root.cg-stp .cg-grid-3 { gap: clamp(0.95rem, 2.1vw, 1.7rem); }
.cg-root.cg-stp .cg-card { border-radius: 0; border-top: 4px solid var(--cg-accent-soft); }
.cg-root.cg-stp .cg-table caption { letter-spacing: 0.03em; font-weight: 700; }
.cg-root.cg-stp .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-stp .cg-table td:nth-child(3) { font-weight: 700; color: var(--cg-accent); }
.cg-root.cg-stp .cg-ladder-col { border-bottom: 2px solid var(--cg-accent-soft); padding-bottom: 0.85rem; }
`,

  dossier: {
    curriculumAuthority: 'Stadsdeel Strijp, Eindhoven, Noord-Brabant: an independent municipality until 1920, where Philips expanded from 1918 beginning with the complex Strijp-S, producing Philipsdorp and the Drents Dorp; three statistics office wijken, Oud-Strijp, Halve Maan and Meerhoven, whose areas add to 2,930 hectares, 2,886 land and 43 water, matching the encyclopaedia 29.3 square kilometres with 28.86 land and 0.43 water; 24 buurten in the office list against 22 in the encyclopaedia. Complete-set 2026 sum 41,573 residents, flagged as arithmetic. Oud-Strijp 16,547 (2026) and 15,840 (2025) residents on 195 hectares of land, 8,645 men and 7,195 women (2025), 10,080 households averaging 1.6 with 6,195 single-person, 2,540 multi-person without children and 1,340 with children, 8,000 aged twenty-five to forty-five at 48 percent (2026), 9,354 dwellings with 2,806 owner-occupied and 6,548 rented, estimated 368,000 euro, income 42,300 euro per resident, resident students 210 MBO, 670 higher professional and 1,070 university (2025), buurten Strijp S, Schoot, Philipsdorp, Schouwbroek, Eliasterrein Vonderkwartier, Engelsbergen, 2 primary with 383 pupils, 3 secondary with 1,296. Halve Maan 11,436 on 1,139 hectares, 5,580 households with 1,750 with children, 1,910 under fifteen, 5,402 dwellings, 38 percent owner-occupied, estimated 391,000 euro, buurten including Mispelhoef, Herdgang, Drents Dorp, Lievendaal, Het Ven and Hurk, 4 primary with 1,379 pupils, 4 secondary with 1,579. Meerhoven 13,590 on 1,552 hectares, 9,770 in 2013, 5,435 households averaging 2.5 with 2,485 with children, 2,665 under fifteen, 5,325 dwellings, 72 percent owner-occupied, estimated 533,000 euro, income 44,600 euro per resident and 58,900 per recipient, buurten including Eindhoven Airport, Flight Forum, Zandrijk, Bosrijk, Waterrijk, Meerrijk and Grasrijk, 2 primary with 1,346 pupils. Sums: 21,095 households, 20,081 dwellings, 8,693 owner-occupied, 5,815 under fifteen, 8 primary with 3,108 pupils, 7 secondary with 2,875. Landmarks from the encyclopaedia: Philips Stadion, Evoluon, the monuments of the Philips complex Strijp-S, Sint-Trudokerk originally of 1887, the Beatrixkanaal. Regio Zuid holidays. The district page argues that a conjunction can only shrink and that separate totals bound an overlap without determining it; Segbroek owns the ceiling check, Gestel the framing of a gap, Stratum the mean of ratios, Eindhoven Centrum confusion of the inverse.',
    localProject: 'A description with more conditions fits fewer people, and separate published totals give only limits on an overlap. For Oud-Strijp in 2025, with 15,840 residents: 8,645 men, 6,195 people in one-person households and 1,950 enrolled students (210 MBO, 670 higher professional, 1,070 university). A picture of a resident as a man who lives alone and studies has a ceiling that falls at each step, 15,840, 8,645, 6,195, 1,950, and cannot rise when a detail is added; its floor, from separate totals, is zero at every step, because 8,645 and 6,195 fit inside 15,840 without meeting. The totals can also force an overlap: 8,645 men and the 9,645 residents not living alone add to 18,290, so at least 2,450 men do not live alone, and at least 1,000 women. The picture that comes easily to mind, young, male, alone, in technology, is therefore at most 1,950 people and possibly none, and the published figures cannot say which. Multiplying the shares, 54.6 percent by 39.1, gives 21 percent only under an independence nobody has checked. The psychological form is the conjunction fallacy, where a detailed description is judged more probable than a plainer one it contains. The programming form is the invariant that adding an AND condition must never increase a row count, which catches joins that multiply rows before a filter, together with feature crosses and user segments that combine ordinary traits into rare ones, and synthetic personas that describe a slice as the whole. All figures in the argument share one year, 2025; the 2026 age counts are described separately and never combined with them. Distinct from the ceiling check (Segbroek), where a count is tested against the population that could supply it: here the argument is that each added condition lowers the ceiling monotonically and that marginals bound a joint without fixing it; distinct from the framing of a gap (Gestel), the mean of ratios (Stratum) and confusion of the inverse (Eindhoven Centrum).',
    requiredMentions: [
      '16,547',
      '11,436',
      '13,590',
      '41,573',
      '15,840',
      '8,645',
      '6,195',
      '2,886',
      '20,081',
      'Philipsdorp',
      'Drents Dorp',
      'Sint-Trudokerk',
      'Beatrixkanaal',
      'Evoluon'
    ],
    sources: [
      { claim: 'Wijk Oud-Strijp, Eindhoven: 16,547 inwoners (2026), 15,840 (2025); mannen 8,645, vrouwen 7,195 (2025); 10,080 huishoudens (2025), 6,195 eenpersoonshuishoudens, 2,540 meerpersoonshuishoudens zonder kinderen, 1,340 met kinderen, gemiddelde huishoudensgrootte 1.6; ages 1,240 (0 to 15), 2,625 (15 to 25), 8,000 (25 to 45), 2,935 (45 to 65), 1,730 (65+) (2026); bevolkingsdichtheid 8,123 per km2 (2025); 196 hectare, 195 land, 1 water; woningvoorraad 9,354, 2,806 koopwoningen and 6,548 huurwoningen (2025); gemiddelde WOZ 368,000 euro (2025); gemiddeld inkomen per inwoner 42,300 euro and per inkomensontvanger 47,200 euro (2024); 2 vestigingen basisonderwijs with 383 leerlingen, 3 voortgezet onderwijs with 1,296; studenten MBO 210, HBO 670, WO 1,070 (2025); buurten Strijp S, Schoot, Philipsdorp, Schouwbroek, Eliasterrein Vonderkwartier, Engelsbergen.', url: 'https://allecijfers.nl/wijk/oud-strijp-eindhoven/' },
      { claim: 'Wijk Halve Maan, Eindhoven: 11,436 inwoners (2026), 11,290 (2025); mannen 5,750, vrouwen 5,540 (2025); 5,580 huishoudens (2025), 2,520 eenpersoonshuishoudens, 1,310 zonder kinderen, 1,750 met kinderen, gemiddelde huishoudensgrootte 2.0; ages 1,910 (0 to 15), 1,345 (15 to 25), 3,890 (25 to 45), 2,800 (45 to 65), 1,520 (65+) (2026); bevolkingsdichtheid 991 per km2; 1,147 hectare, 1,139 land, 8 water; woningvoorraad 5,402, 2,053 koopwoningen (38 percent) and 3,349 huurwoningen (62 percent); gemiddelde WOZ 391,000 euro (2025); gemiddeld inkomen per inwoner 35,400 euro and per inkomensontvanger 44,000 euro (2024); 4 vestigingen basisonderwijs with 1,379 leerlingen, 4 voortgezet onderwijs with 1,579; buurten Mispelhoef, Herdgang, Wielewaal, Zwaanstraat, Drents Dorp, Lievendaal, Het Ven, Hurk.', url: 'https://allecijfers.nl/wijk/halve-maan-eindhoven/' },
      { claim: 'Wijk Meerhoven, Eindhoven: 13,590 inwoners (2026), 13,635 (2025), 9,770 (2013); bevolkingsdichtheid 879 per km2 (2025); 1,587 hectare, 1,552 land, 34 water; 5,435 huishoudens (2025), 1,450 eenpersoonshuishoudens, 1,500 zonder kinderen, 2,485 met kinderen, gemiddelde huishoudensgrootte 2.5; ages 2,665 (0 to 15), 1,655 (15 to 25), 4,170 (25 to 45), 3,630 (45 to 65), 1,490 (65+) (2026); woningvoorraad 5,325, 3,834 koopwoningen (72 percent) and 1,491 huurwoningen (28 percent); gemiddelde WOZ 533,000 euro (2025); gemiddeld inkomen per inwoner 44,600 euro and per inkomensontvanger 58,900 euro (2024); 2 vestigingen basisonderwijs with 1,346 leerlingen, 0 voortgezet onderwijs; buurten BeA2, Flight Forum, Eindhoven Airport, Meerbos, Zandrijk, Bosrijk, Meerrijk, Park Forum, Waterrijk, Grasrijk.', url: 'https://allecijfers.nl/wijk/meerhoven-eindhoven/' },
      { claim: 'Strijp (Eindhoven): Strijp was tot 1920 een zelfstandige gemeente. Op 1 januari 2023 telde het stadsdeel 39.230 inwoners; 19.250 woningen; oppervlakte 29,3 km2, land 28,86 km2, water 0,43 km2. Strijp wordt ingedeeld in drie wijken en 22 buurten. Vanaf 1918 breidde ook Philips zich uit, te beginnen met het complex Strijp-S; Philipsdorp and Drents Dorp. Landmarks listed: Het Philips Stadion; Het Evoluon; De architectonische monumenten van het Philipscomplex Strijp-S; De Sint-Trudokerk is oorspronkelijk uit 1887; Het Beatrixkanaal heeft hier en daar fraaie oevers; Eindhoven Airport.', url: 'https://nl.wikipedia.org/wiki/Strijp_(Eindhoven)' },
      { claim: 'Gemeente Eindhoven: 249,783 inwoners (2026); 130,304 huishoudens (2025); 20 wijken en 116 buurten.', url: 'https://allecijfers.nl/gemeente/eindhoven/' },
      { claim: 'School holiday regions: regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any count of residents who are young men living alone, tech workers or start-up founders. No figure used here can give it; the page gives limits only.',
      'An overlap computed by multiplying shares, such as 21 percent of residents being men who live alone. That assumes independence nobody has checked.',
      'Any combination of the 2026 age counts with the 2025 counts of sex, households or students. They are described side by side and never combined.',
      'Any growth read from 15,840 residents of Oud-Strijp in 2025 to 16,547 in 2026, or from 9,770 residents of Meerhoven in 2013 to 13,590 now. Base-year choice is the Flevoland and Emmen argument.',
      'Any use of the student counts for institutions located in Halve Maan or Meerhoven. Only students resident in Oud-Strijp are used, and residence against presence is the Leidschenveen-Ypenburg argument.',
      'A count exceeding the population that could supply it. That is the Segbroek page argument; here the ceiling falls as conditions are added.',
      'Anything about Philips, the Evoluon, the stadium or the airport beyond the lines in the encyclopaedia entry.',
      'Any reconciliation of the 22 buurten in the encyclopaedia with the 24 in the statistics office list.',
      'Anything the Eindhoven city page owns, including the Strijp-S address, the named secondary schools and their addresses, the High Tech Campus and the Indian-origin figures.'
    ]
  }
};
