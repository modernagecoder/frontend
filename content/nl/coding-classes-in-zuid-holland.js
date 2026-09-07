'use strict';
// Zuid-Holland: the province page. About the spread: 50 municipalities, the
// densest province in the country, two cities with pages of their own and 48
// towns without. Spine: the Randstad, the region everyone in this province
// says they live in, has no official boundary and therefore no population.

module.exports = {
  slug: 'coding-classes-in-zuid-holland',
  code: 'zhl',
  accent: '#6F5D00',
  accentRationale: 'Zuid-Holland: the leaf green of the bulb fields before the flowers, darkened to clear every paper tint',
  pageType: 'governorate',
  place: {
    name: 'Zuid-Holland',
    eyebrow: 'Province of Zuid-Holland',
    schemaType: 'AdministrativeArea',
    chain: [{ type: 'Country', name: 'Netherlands' }]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Rotterdam', href: '/coding-classes-in-rotterdam' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Zuid-Holland, Netherlands',
  title: 'Coding Classes in Zuid-Holland | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across Zuid-Holland, ages 6 to 67: Leiden, Delft, Zoetermeer, Dordrecht, Gouda, Westland and 44 more towns past Rotterdam.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in all 50 municipalities of Zuid-Holland, the densest province in the country, built on a region that has no boundary.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'react-for-teens-complete-masterclass',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Zuid-Holland Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across the 50 municipalities of the province of Zuid-Holland, taught in English.'
  },

  h1: 'Coding classes in Zuid-Holland, the densest province in the country and the largest piece of a region that has no edge',
  capsuleQ: 'What are the best coding classes in Zuid-Holland?',
  capsule: 'Coding classes in Zuid-Holland serve 3,882,708 people in 50 municipalities (Statistics Netherlands, 1 January 2026), more than any other province, at about 1,430 to the square kilometre of land, denser than any other. Rotterdam and The Hague have pages of their own; the other 48 municipalities, from Zoetermeer and Leiden at 130,000 each down to Zoeterwoude at 10,355, are covered here by name. Every one of them gets the same live online class, taught in English to learners from 6 to 67 by Modern Age Coders, at the same fee: a free first lesson, USD 100 a month for a group place, USD 150 for a teacher alone.',
  lead: 'Ask anyone in Delft, Gouda or Dordrecht where they live and sooner or later they will say the Randstad. Ask how many people live in the Randstad and the honest answer is that its borders have never been officially specified, so the figure runs from 2.6 million to 8.6 million depending on who is counting. A child who can build the small program that shows why is ready for most of the maps they will ever be handed.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Zuid-Holland.',

  picks: {
    eyebrow: 'Course picks for Zuid-Holland',
    h2: 'Four courses for a province of universities, greenhouses and islands',
    intro: 'A groep 4 child in Katwijk, a teenager in Zoetermeer with a database to build, a Delft student who wants a real front end, and a Westland grower\'s daughter who wants the app that runs the glasshouse: four doors, one province.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 6 to 10', note: 'Decomposition, patterns and the first real algorithm, in English, before any syntax gets in the way.' },
      { course: 'mysql-mastery-for-teens', band: 'Ages 13 to 17', note: 'SQL from the first query to a real app, for the teenager who has noticed that every website is a database wearing a costume.' },
      { course: 'react-for-teens-complete-masterclass', band: 'Ages 14 to 18', note: 'JavaScript to real React apps, for the Leiden or Delft teenager who wants the thing to work on a phone by the weekend.' },
      { course: 'complete-flutter-app-development-masterclass-college', band: 'College and adult', note: 'Dart to cross-platform apps, for the student at Delft or The Hague who wants one codebase that runs on both stores.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Zuid-Holland today',
      h2: 'The most people, the most schools, and the least room',
      intro: 'Statistics Netherlands counted 3,882,708 residents on 1 January 2026 in 1,815,974 households, 600,471 of them under fifteen and 483,756 aged fifteen to twenty-five, on about 2,698 square kilometres of land inside 3,308 of territory. That is 1,432 people to the square kilometre, and no other province comes close.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Two cities with pages, 48 towns without', p: 'Rotterdam at 673,804 and The Hague at 569,468 together hold 32.0 percent of the province and have pages of their own. The remaining 2,639,436 people live in 48 municipalities, and this page is theirs: it names every one with its population so that a family can find its own town.' },
          { h3: 'The schools', p: '1,110 primary establishments teach 326,108 pupils and 370 secondary establishments 212,091, the largest school system of any province. The Hague alone runs five school systems inside one municipality; the rest of the province runs the Dutch one, with an international school in Delft and another in Leiden\'s catchment.' },
          { h3: 'Grown by a sixth since 1995', p: 'The province held 3.325 million people in 1995 and 3.883 million on 1 January 2026, a rise of 17 percent over thirty-one years. Most of the growth went into the ring of towns between the two cities: Zoetermeer, Pijnacker-Nootdorp, Lansingerland, Westland.' }
        ] },
        { kind: 'spec', title: 'Capital in one city, size in another', p: 'The Hague is the provincial capital as well as the seat of national government; Rotterdam is the larger city by more than a hundred thousand. Both were in the province of Holland until 1840, when it was split into a northern and a southern half, and the two halves have been arguing gently about which is the real one ever since.' }
      ]
    },
    {
      id: 'spread', tint: 'tint', eyebrow: 'The spread',
      h2: 'From the bulb fields to the islands: every one of the 50 municipalities, by population',
      intro: 'Six regions, each with its municipalities and their 1 January 2026 population, so that a family in Hillegom or Hardinxveld-Giessendam is on this page by name.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Leiden and the Duin- en Bollenstreek', p: '<a class="cg-inline-link" href="/coding-classes-in-leiden">Leiden</a> 130,328, the university city, with its own page; Katwijk 67,149; Noordwijk 46,453; Teylingen 38,739; Kaag en Braassem 29,467; Leiderdorp 27,973; Oegstgeest 26,095; Voorschoten 25,975; Lisse 23,842; Hillegom 23,078; Zoeterwoude 10,355. The flower fields are between the towns, and the international school families of the Leiden ring are among the most concentrated in the country.' },
          { h3: 'Haaglanden: the ring around the capital', p: '<a class="cg-inline-link" href="/coding-classes-in-zoetermeer">Zoetermeer</a> 130,836, third in the province by a margin of 508 over Leiden, with its own page; Westland 118,874, the glasshouse municipality; Delft 110,089, the technical university; Leidschendam-Voorburg 78,916; Lansingerland 66,633; Rijswijk 61,857; Pijnacker-Nootdorp 58,741; Wassenaar 27,975; Midden-Delfland 19,355.' },
          { h3: 'Rijnmond: the ring around the port', p: 'Nissewaard 89,112; Schiedam 81,931; Vlaardingen 77,480; Voorne aan Zee 75,012; Capelle aan den IJssel 69,698; Barendrecht 48,701; Ridderkerk 48,084; Maassluis 37,125; Krimpen aan den IJssel 29,864; Albrandswaard 26,559. Ten municipalities that share Rotterdam\'s metro, its port and its river, and not its page.' },
          { h3: 'The Drechtsteden and the Alblasserwaard', p: 'Dordrecht 122,991, fifth in the province; Molenlanden 45,625, with the Kinderdijk mills; Zwijndrecht 44,819; Gorinchem 39,060; Hendrik-Ido-Ambacht 33,100; Papendrecht 32,267; Sliedrecht 26,531; Alblasserdam 20,250; Hardinxveld-Giessendam 19,402. Shipyards, rivers and a city older than either of the big two.' },
          { h3: 'The Groene Hart', p: 'Alphen aan den Rijn 117,284, seventh in the province; Gouda 77,818; Krimpenerwaard 57,898; Zuidplas 49,291; Bodegraven-Reeuwijk 37,291; Waddinxveen 35,542; Nieuwkoop 29,728. The open middle of the Randstad, whose whole planning purpose is to stay open.' },
          { h3: 'The islands', p: 'Hoeksche Waard 91,445 and Goeree-Overflakkee 52,798, the two southern islands, each a single municipality since the mergers, each a forty-minute drive from a centre and each the plainest case in the province for a class that comes to the house.' }
        ] },
        { kind: 'p', text: 'Fifty municipalities, every one named. The city pages in this series are close-up; this page is the map, and the map is where a Zoeterwoude family finds itself.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Where every Zuid-Holland number on this page came from',
      intro: 'The offices and dates behind the figures, including the three population counts for a region that has none.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The province, counted', p: 'Statistics Netherlands, provisional, 1 January 2026: 3,882,708 residents in 50 municipalities; 1,815,974 households; 600,471 under fifteen; 483,756 aged fifteen to twenty-five; 1,110 primary establishments with 326,108 pupils and 370 secondary with 212,091; land 269,840 hectares, territory 330,786; density 1,432 per square kilometre; 3.325 million residents in 1995.' },
          { h3: 'The list', p: 'All 50 municipalities with their 1 January 2026 populations from the municipal registers, from Rotterdam at 673,804 to Zoeterwoude at 10,355. The fifty figures sum to the provincial total exactly, which is the first thing checked in class.' },
          { h3: 'The capital and the year', p: 'The Hague is the provincial capital and Rotterdam the largest city, by the province\'s own account; the province dates from the 1840 division of Holland; land 2,700.07 and water 607.79 square kilometres by that account, against 2,698.40 of land by the national count, both kept.' },
          { h3: 'The Randstad, three ways', p: 'From the English encyclopaedia entry: the conurbation, 8,403,915 people on 11,372.15 square kilometres on 1 January 2021; the urban area, 7,146,249 on 6,296.91; the four provinces together, 8,589,872 in 2023, of which Zuid-Holland 3,804,906. The same entry states that the Randstad\'s borders have never been officially specified and that it is not an official statistical area.' },
          { h3: 'The four cities', p: 'Amsterdam 941,927, Rotterdam 673,804, The Hague 569,468 and Utrecht 378,121 on 1 January 2026, together 2,563,320: the narrowest reading of the word Randstad anyone uses, and three and a third times smaller than the widest.' },
          { h3: 'The holiday region', p: 'Zuid-Holland takes its school holidays with regio Midden, alongside Utrecht and the northern half of Gelderland, by the Rijksoverheid\'s regional division. The summer break therefore falls in a different fortnight from Noord-Holland\'s and from Noord-Brabant\'s in most years.' }
        ] },
        { kind: 'p', text: 'None of the 50 municipalities, the province or any school inside it has any connection to Modern Age Coders, and this page claims none; they are listed because a page that says it serves a province ought to be able to name it.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How many people live in the Randstad? Build the program that shows the question has no answer until someone draws a line',
      intro: 'Three published figures for one word, a province that is the biggest piece of all three, and a table in which the population of a place changes by six million without anyone moving house.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Collect the definitions', p: 'The learner gathers every published reading of the Randstad: the four cities alone, the urban area, the conurbation, the four provinces. Each comes with a population, an area and a year, and none comes with an official boundary, because the encyclopaedia entry says plainly that none has ever been specified.' },
          { h3: '2. Write the aggregator', p: 'A function that takes a set of municipalities and sums their registered populations. Fed the four cities it returns 2,563,320. Fed the whole of the four provinces it returns 8,589,872 for 2023. Fed the conurbation as the encyclopaedia draws it, 8,403,915 for 2021. The code is the same every time; only the list of members changes.' },
          { h3: '3. Read the spread', p: 'Between the narrowest and the widest reading the figure grows by a factor of 3.35. The density moves the other way: 1,135 per square kilometre for the urban area, 739 for the conurbation, lower still for four whole provinces with their lakes and polders. Zuid-Holland is 44.3 percent of the widest figure and none of the narrowest except its two cities.' }
        ] },
        { kind: 'table', caption: 'One word, four published readings: the Randstad by definition', head: ['Definition', 'Population', 'Area', 'Year', 'Density'], rows: [
          ['The four cities (Amsterdam, Rotterdam, The Hague, Utrecht)', '2,563,320', 'the four municipalities', '2026', 'not comparable'],
          ['Urban area', '7,146,249', '6,296.91 km2', '2021', '1,135 per km2'],
          ['Conurbation', '8,403,915', '11,372.15 km2 (8,261.98 land)', '2021', '739 per km2'],
          ['Four provinces together', '8,589,872', 'all of NH, ZH, Utrecht, Flevoland', '2023', 'lower still'],
          ['Official statistical area', 'none', 'none', 'never specified', 'none']
        ] },
        { kind: 'callout', h3: 'A place with no boundary has no population, only candidates', p: 'Every count of people is a count inside a line, and where nobody has drawn the line every count is somebody\'s proposal. The Randstad is real in every conversation and absent from every register, which is why a sentence beginning "the Randstad has" should be followed by "according to" or should not be written. A learner who has fed the same aggregator four different member lists will ask for the boundary before believing any regional figure again: a metro area, a catchment, a market, a Greater anything. The table was computed before this paragraph was written; the four-city sum is arithmetic on the 2026 registers and the other three are quoted as published.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any figure that belongs to a region rather than a register',
      intro: 'Greater London, the Bay Area, the Ruhr, a sales territory, a school catchment: the same trap sits under every named area that nobody legally drew. Practised first on the region this province is the largest piece of.',
      body: [
        { kind: 'table', caption: 'When the place is a word and not a line', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Ask for the boundary', 'Before accepting a regional number, ask whose line it sits inside', 'Eight million and seven million quoted as if they measured the same thing', 'A figure with an owner'],
          ['Keep the member list', 'Store the region as a list of official units, never as a name', 'A total nobody can reproduce', 'A sum anyone can rerun'],
          ['Date the members', 'Municipalities merge; a list from 2010 is not a list from 2026', 'A boundary that quietly moved with the mergers', 'Comparable years'],
          ['Report the spread', 'Give the narrowest and the widest reading, not the middle', 'A false precision of one number', 'Honest uncertainty'],
          ['Prefer the register', 'When an official unit exists, sum those, and say the region is a label', 'The Randstad presented as a statistical area', 'Numbers that match the map']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Toy houses on a table and a loop of string. The child counts the houses inside the loop, then somebody moves the string and they count again. The houses never moved; the number did. Ten minutes and no screen, and the sentence is theirs: it depends where you put the string.' },
          { h3: 'For teenagers', p: 'The aggregator in Python over the 50 municipalities of the province and their neighbours, fed the four readings in turn, printing population, area and density for each. Then the harder question: propose a boundary and defend it in three sentences.' },
          { h3: 'For adults', p: 'The same program on a sales region, a hospital catchment or a market-size estimate from work, where the total is quoted weekly and the member list is in a spreadsheet nobody has opened since it was made. If a real one from work is shareable, bring it.' }
        ] },
        { kind: 'p', text: 'The provincial totals, the 50 municipal populations, the areas, the 1995 figure and the three Randstad readings are published by the offices and the encyclopaedia entry named in the sentences that use them. The four-city sum and the density figures are arithmetic on those published numbers, and nothing on this page reports a Zuid-Holland measurement that no office has published.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a loop of string to an aggregator that asks for its boundary',
    intro: 'The starting rung comes out of the free lesson, not out of the postcode.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Where the string goes', p: 'Children discover that a count depends on the loop, not on the houses.', courses: ['kids-coding-blocks-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'A sum over a list', p: 'Learners write a function that totals whatever list it is given and feed it two different lists.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Four readings, one word', p: 'Teenagers build the aggregator, reproduce the published figures and propose a boundary.', courses: ['python-complete-masterclass-teens', 'mysql-mastery-for-teens'] },
      { band: 'Ages 18 to 67', h3: 'Regions at work', p: 'Adults rebuild a territory total from its member list and find the line nobody drew.', courses: ['data-analysis-mastery-course-college', 'mysql-database-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'The AI knows the Randstad has eight million people. Why should a child in Gouda learn to count them?',
    intro: 'Because the assistant knows one of four answers, and it will give it without saying which line it used.',
    p1: 'Ask a tool how many people live in the Randstad and it answers instantly, usually with a figure near eight million and never with the sentence that matters: the borders have never been officially specified. The number is not invented; it is one published reading chosen for you, and the choosing is invisible. A person who has built the aggregator and fed it four member lists knows to ask which list. That is not a fact the model supplies. It is a habit the person brought.',
    p2: 'That habit is what the class trains, and it is why the code is still written by the learner rather than requested: not the loop, which the tools now write, but the reflex of asking for the boundary before believing a regional total. A thirteen-year-old in Alphen who has done it once with the Randstad will do it with a market-size slide at twenty-three and with a catchment figure in a council meeting at forty, and will be the one in the room saying: inside what line. The tools will have changed by then. The question will not.',
    closer: 'So for a Zuid-Holland parent the argument for coding in 2026 is not that the child will write aggregators for a living. It is that knowing a total is only as real as its member list is a skill, that it transfers to every named region and every named market, and nobody has yet found a way to teach it that does not involve the learner building the sum and then moving the string.',
    blogAnchor: 'is coding still worth learning now that AI can write it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a province where the distances are short and the queues are long',
    intro: 'Nowhere in Zuid-Holland is far from a city, and everywhere in Zuid-Holland is a long way from one at half past four. A class that arrives at the kitchen table in Naaldwijk or Sliedrecht asks nothing of the A4, the A13 or the A20.',
    cells: [
      { h3: 'No motorway between the child and the teacher', p: 'The lesson happens at home in Katwijk, Zoetermeer or Oud-Beijerland at a fixed hour, and the ring roads are somebody else\'s problem.' },
      { h3: 'Taught in English; the school\'s Dutch stays Dutch', p: 'Groep, havo, vwo, profielkeuze, MYP and Key Stage appear exactly as the family meets them at school, inside lessons otherwise held in English, the language the province\'s international households have in common.' },
      { h3: 'An hour that costs nothing and settles something', p: 'One task at the right level, then a course name and a starting rung, with no card asked for to set it up.' },
      { h3: 'Grouped by what they can do', p: 'Ability and goal decide the group. Island, glasshouse town or university city do not.' },
      { h3: 'Two lessons a week on regio Midden\'s calendar', p: 'Zuid-Holland takes its school holidays with regio Midden. The summer weeks are agreed before the slot is fixed, and they differ from Noord-Holland\'s in most years.' },
      { h3: 'Only one of the two clocks moves', p: 'India\'s stays put while the Dutch one jumps twice a year, so a Zuid-Holland afternoon trails the teacher\'s evening by four and a half hours in winter and three and a half in summer. Late afternoon, early evening and the weekend are the hours that fit both.' }
    ],
    spec: { title: 'The islands and the glasshouses', p: 'Goeree-Overflakkee and the Hoeksche Waard are each one municipality and each a real drive from anywhere; Westland is a town made of greenhouses that runs on a schedule the sun sets. In all three a weekly class that comes to the house is not a convenience but the only version that survives a season.' }
  },

  fees: {
    h2: 'Two prices for fifty municipalities, and a free hour before either',
    intro: 'The full tariff, printed before anyone asks for a number.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'The international tariff is a single dollar figure with no euro version, and Wassenaar pays what Sliedrecht pays. The free lesson comes first and fixes the course and the hour; payment follows on WhatsApp. Pauses, plan changes and missed lessons: see the pricing page.'
  },

  reviewsH2: 'Reviews, reproduced as written',

  book: {
    h2: 'Send the level, and name the town if you want to',
    intro: 'Expect an opening task of toy houses and a loop of string, a Python aggregator fed four member lists, or a regional total from work whose member list nobody has opened in years.',
    success: 'Thank you. Your Zuid-Holland class request has been sent.'
  },

  faq: {
    h2: 'Zuid-Holland coding class questions',
    intro: 'The province, its towns, the Randstad, the teaching and the terms.',
    items: [
      { q: 'How many people live in the Randstad?', a: 'It depends entirely on where the line is drawn, and nobody official has drawn it. The published readings run from 2,563,320 for the four cities alone in 2026, through 7,146,249 for the urban area and 8,403,915 for the conurbation in 2021, to 8,589,872 for the four provinces together in 2023. The encyclopaedia entry says the borders have never been officially specified. Reproducing all four from one program is the project on this page.' },
      { q: 'Which Zuid-Holland towns get their own page, and which are covered here?', a: 'Rotterdam and The Hague have pages already. Leiden, Delft, Zoetermeer, Dordrecht, Westland, Alphen aan den Rijn, Gouda, Schiedam, Vlaardingen, Leidschendam-Voorburg, Nissewaard, Capelle, Wassenaar, Voorschoten, Oegstgeest and Rijswijk follow in this series. Every other municipality appears above with its population, and the class a family books from Hillegom is the class a family books from Rotterdam.' },
      { q: 'Is Zuid-Holland really the densest province?', a: 'Yes, at 1,432 people per square kilometre of land on 1 January 2026, on about 2,698 square kilometres of land for 3,882,708 people. Noord-Holland is next, and the gap is large. It is also the most populous province and the one with the most schools: 1,110 primary and 370 secondary establishments.' },
      { q: 'We live on Goeree-Overflakkee or in the Hoeksche Waard. Does that change anything?', a: 'Nothing about the class, and it strengthens the case for it. Each island is one municipality, 52,798 and 91,445 people respectively, and each is a real drive from any centre. A child in Middelharnis sits in the identical group at the identical hour as a child in Delft, and the Haringvliet bridge is not part of the arrangement.' },
      { q: 'Is the teaching in English or Dutch?', a: 'In English. The Dutch words a school uses, groep through profielkeuze, are used unchanged. We have no Dutch-language classes.' },
      { q: 'What time are classes for a family in Zuid-Holland?', a: 'India keeps one time all year and the Netherlands keeps two, which puts a Zuid-Holland afternoon four and a half hours behind the teacher in winter and three and a half in summer. Late afternoon, early evening and the weekend suit both sides, and the hour a family keeps is settled in the free lesson.' },
      { q: 'What happens in the free lesson?', a: 'We find what the learner can do and set one task there. A child counts toy houses inside a loop of string that then moves. A teenager writes the aggregator and feeds it four Randstad readings. An adult brings a regional total from work. It finishes with a named course, a starting level, an agreed hour each week and the dollar fee stated aloud, and nobody has paid for anything.' },
      { q: 'Is there a Modern Age Coders classroom anywhere in Zuid-Holland?', a: 'No, and none is claimed in The Hague, in Rotterdam or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Zuid-Holland coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a Zuid-Holland group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or municipality. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'Down to the two cities, across to the neighbours, up to the country',
    html: 'Inside this province, <a class="cg-inline-link" href="/coding-classes-in-rotterdam">Rotterdam</a> hands off to eight gebieden and <a class="cg-inline-link" href="/coding-classes-in-the-hague">The Hague</a> to eight stadsdelen. The neighbouring province with a page is <a class="cg-inline-link" href="/coding-classes-in-noord-holland">Noord-Holland</a>, and the nearest city pages across the line are <a class="cg-inline-link" href="/coding-classes-in-utrecht">Utrecht</a> and <a class="cg-inline-link" href="/coding-classes-in-amsterdam">Amsterdam</a>. The country page, the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, is the parent of every page here; for model-building rather than programming, start at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-rotterdam', label: 'Rotterdam' },
    { href: '/coding-classes-in-the-hague', label: 'The Hague' }
  ],

  personalityCss: `
.cg-root.cg-zhl .cg-hero-grid { align-items: center; gap: clamp(1.5rem, 4vw, 3rem); }
.cg-root.cg-zhl .cg-hero h1 { font-weight: 600; letter-spacing: -0.015em; }
.cg-root.cg-zhl .cg-capsule { border-left: 0; border-top: 4px solid var(--cg-accent); border-bottom: 1px solid var(--cg-rule-2); }
.cg-root.cg-zhl .cg-eyebrow { letter-spacing: 0.08em; text-transform: none; font-size: 0.85rem; }
.cg-root.cg-zhl .cg-section-head h2 { max-width: 36ch; }
.cg-root.cg-zhl .cg-grid-3 { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: clamp(1rem, 2vw, 1.75rem); }
.cg-root.cg-zhl .cg-ladder-col { border-top-width: 3px; border-top-style: dotted; }
.cg-root.cg-zhl .cg-table th { letter-spacing: 0.1em; }
.cg-root.cg-zhl .cg-price strong { font-weight: 500; }
`,

  dossier: {
    curriculumAuthority: 'Province of Zuid-Holland: 50 municipalities, 3,882,708 residents (CBS 1 January 2026), 1,110 primary establishments (326,108 pupils) and 370 secondary (212,091), the largest school system of any province. Capital The Hague; largest city Rotterdam; formed 1840. Regions: Duin- en Bollenstreek, Rijnstreek, Midden-Holland, Alblasserwaard, Westland, the islands, the Groene Hart. Regio Midden holidays. A province page is about the spread and links down to the city pages (Rotterdam, The Hague) rather than repeating them; the hub owns the national curriculum.',
    localProject: 'A place with no boundary has no population, only candidates. The Randstad has never had officially specified borders and is not a statistical area (English encyclopaedia entry), yet carries published figures: four cities 2,563,320 (2026 registers), urban area 7,146,249 on 6,296.91 km2 (2021), conurbation 8,403,915 on 11,372.15 km2 (2021), four provinces 8,589,872 (2023, ZH 3,804,906 = 44.3 percent). The learner writes one aggregator over municipal registers and feeds it four member lists, reproducing all four figures (a 3.35-fold spread) and the densities that move the other way. Distinct from the unit-of-analysis trap (Haima: one entity with two OFFICIAL boundaries), from join-on-name (Liang) and from the Noord-Holland rank trap: the flaw here is a regional total quoted for a region nobody has drawn. Computed before writing; three readings quoted as published, one summed from the registers.',
    requiredMentions: [
      '3,882,708',
      '50 municipalities',
      'Zoetermeer',
      'Dordrecht',
      'Alphen aan den Rijn',
      'Westland',
      'Goeree-Overflakkee',
      'Hoeksche Waard',
      'Duin- en Bollenstreek',
      'Drechtsteden',
      '8,403,915',
      '7,146,249',
      '2,563,320',
      'never been officially specified'
    ],
    sources: [
      { claim: 'Zuid-Holland 3,882,708 residents on 1 January 2026 (CBS provisional); 50 municipalities; land 269,840 ha, total 330,786 ha; density 1,432 per km2; 1,815,974 households; 600,471 under 15; 483,756 aged 15 to 25; 1,110 primary establishments (326,108 pupils); 370 secondary (212,091); 3.325 million in 1995, a 17 percent rise.', url: 'https://allecijfers.nl/provincie/zuid-holland/' },
      { claim: 'All 50 municipalities on 1 January 2026: Rotterdam 673,804; Den Haag 569,468; Zoetermeer 130,836; Leiden 130,328; Dordrecht 122,991; Westland 118,874; Alphen aan den Rijn 117,284; Delft 110,089; Hoeksche Waard 91,445; Nissewaard 89,112; Schiedam 81,931; Leidschendam-Voorburg 78,916; Gouda 77,818; Vlaardingen 77,480; Voorne aan Zee 75,012; Capelle aan den IJssel 69,698; Katwijk 67,149; Lansingerland 66,633; Rijswijk 61,857; Pijnacker-Nootdorp 58,741; Krimpenerwaard 57,898; Goeree-Overflakkee 52,798; Zuidplas 49,291; Barendrecht 48,701; Ridderkerk 48,084; Noordwijk 46,453; Molenlanden 45,625; Zwijndrecht 44,819; Gorinchem 39,060; Teylingen 38,739; Bodegraven-Reeuwijk 37,291; Maassluis 37,125; Waddinxveen 35,542; Hendrik-Ido-Ambacht 33,100; Papendrecht 32,267; Krimpen aan den IJssel 29,864; Nieuwkoop 29,728; Kaag en Braassem 29,467; Wassenaar 27,975; Leiderdorp 27,973; Albrandswaard 26,559; Sliedrecht 26,531; Oegstgeest 26,095; Voorschoten 25,975; Lisse 23,842; Hillegom 23,078; Alblasserdam 20,250; Hardinxveld-Giessendam 19,402; Midden-Delfland 19,355; Zoeterwoude 10,355.', url: 'https://allecijfers.nl/ranglijst/grootste-en-kleinste-gemeenten-in-inwoners-in-de-provincie-zuid-holland/' },
      { claim: 'Capital Den Haag; largest city Rotterdam; 50 municipalities; land 2,700.07 km2, water 607.79 km2; formed 1840 from the province of Holland; regions Duin- en Bollenstreek, Rijnstreek, Midden-Holland, Alblasserwaard, Groenblauwe Slinger, Westland, the islands, Groene Hart.', url: 'https://nl.wikipedia.org/wiki/Zuid-Holland' },
      { claim: 'Randstad: conurbation 8,403,915 people on 11,372.15 km2 (8,261.98 land), density 738.99, 1 January 2021; urban area 7,146,249 on 6,296.91 km2, density 1,134.88; 2023 four-province total 8,589,872 (Noord-Holland 2,952,622, Zuid-Holland 3,804,906, Utrecht 1,387,643, Flevoland 444,701); the four largest cities Amsterdam, Rotterdam, The Hague, Utrecht; "The Randstad\'s borders have never been officially specified" and it "is not an official statistical area".', url: 'https://en.wikipedia.org/wiki/Randstad' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' },
      { claim: 'Amsterdam 941,927, Rotterdam 673,804, Den Haag 569,468 and Utrecht 378,121 on 1 January 2026 (CBS provisional).', url: 'https://allecijfers.nl/ranglijst/grootste-en-kleinste-gemeenten-in-inwoners-in-nederland/' }
    ],
    rejectedClaims: [
      'Leiden University\'s founding year (1575) and Dordrecht\'s city rights (1220). Not read at source for this page; both cities are described by population only.',
      'Any claim about Zuid-Holland having the worst traffic in the country. Characterised in prose without a figure, because no figure was read at source.',
      'A single land-area figure for the province. The national statistics site gives 2,698.40 km2 and the provincial article 2,700.07; both are stated.',
      'The Dutch encyclopaedia\'s Randstad figures. That title resolves to a disambiguation page; the English entry is used and cited.',
      'Anything the Netherlands hub, Rotterdam or The Hague owns: the SLO core objectives, the port units, the Surinamese-origin definition.'
    ]
  }
};
