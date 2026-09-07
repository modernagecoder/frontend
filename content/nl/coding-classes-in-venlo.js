'use strict';
// Venlo: 104,195 residents on the German border, ten kernen, and a city
// centre that has served visitors from the Ruhrgebiet since the 1960s.
// Spine: "per capita" names a population, and in Venlo the people the city
// serves are not in the register you would divide by.

module.exports = {
  slug: 'coding-classes-in-venlo',
  code: 'vnl',
  accent: '#832545',
  accentRationale: 'Venlo: a deep carmine drawn from the border-town brick and the Limburg reds, set by the solver clear of the tones already carrying the Maastricht and Limburg pages',
  pageType: 'city',
  place: {
    name: 'Venlo',
    eyebrow: 'Venlo, Limburg',
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
  routeLabel: 'Venlo, Netherlands',
  title: 'Coding Classes in Venlo | Modern Age Coders',
  description: 'Live online coding, Python, Java and AI classes in Venlo for ages 6 to 67, across Blerick, Tegelen, Belfeld, Steyl and every kern. First lesson is free.',
  ogDescription: 'Live online coding, Python, Java and AI for families in Venlo, built on a city of 104,195 residents that serves about five million visitors it never counts.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'java-programming-masterclass-for-teens',
  verifiedOn: '8 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Venlo Learners',
    description: 'Ability-placed online coding, Python, Java, AI and mathematics for children, teenagers and adults across Venlo, Blerick, Tegelen and the border kernen, taught in English.'
  },

  h1: 'Coding classes in Venlo, a city of 104,195 residents that about five million visitors a year are not counted in',
  capsuleQ: 'What are the best coding classes in Venlo?',
  capsule: 'Coding classes in Venlo reach 104,195 people (Statistics Netherlands, 1 January 2026) on 128.99 square kilometres against the German border, at 838 residents to the square kilometre, in 49,770 households of which 19,864 hold one person. The municipal entry says the city centre has benefited from visitors out of the German hinterland since the 1960s, and puts the yearly total at circa 5 miljoen bezoekers, mainly from the neighbouring Ruhrgebied. Divide that by the register and you get 48 visits a year for every resident, a figure describing nobody. Modern Age Coders teaches live online in English from Boekend to Steyl, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Venlo has 104,195 residents and receives about five million visitors a year, most of them from just over the German border. Work out the ratio and you get roughly forty-eight visits per resident per year, which is arithmetically flawless and describes no human being in the city. No resident makes those visits. The people who do are not in the register that supplied the denominator. Every phrase of the form per capita, per head or per resident carries a hidden claim about who the number is about, and in a border city that claim is simply false.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Venlo.',

  picks: {
    eyebrow: 'Course picks for Venlo',
    h2: 'Four courses for a city that works in two countries',
    intro: 'A groep 5 child in Blerick who has outgrown dragging blocks around, a teenager in Tegelen who wants the language the logistics firms actually run on, a student on the campus at the old Floriade grounds who needs Python to do the repetitive part, and a parent in Belfeld handed a set of AI tools and no instructions: four separate doors, one free hour each.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python, drawings that obey instructions and a first program that learns a rule, taught in English to the groep 5 to 8 child anywhere in the municipality.' },
      { course: 'java-programming-masterclass-for-teens', band: 'Ages 13 to 18', note: 'Java from first principles to real classes and objects, for the teenager pointing at a technical profiel and the industry on both sides of the border.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python that collects, cleans, decides and reports without being asked twice, for the student or worker doing the same job by hand every week.' },
      { course: 'ai-tools-mastery-complete-college', band: 'Adults', note: 'The current tools used with judgement rather than faith, for the parent whose employer switched them on and explained nothing.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Venlo today',
      h2: 'A hundred and four thousand residents, and a hinterland that is in another country',
      intro: 'The national register held 104,195 residents on 1 January 2026, in 49,770 households averaging 2.06 people, on 12,416 hectares of land inside 12,899 hectares of territory, a published 838 residents to the square kilometre. In 1995 the count was 98,792, so the recorded gain across thirty-one years is 5,403 people, or 5.5 percent, which is modest for a city this size and, as the evidence section notes, is not a comparison of the same ground.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Two in five households are one person', p: '19,864 of the 49,770 households hold exactly one person, 40 percent of them. The largest age band is 27,873 residents between forty-five and sixty-five, with 25,837 between twenty-five and forty-five. 14,065 residents are under fifteen, 11,608 are between fifteen and twenty-five and 24,812 are sixty-five or over.' },
          { h3: 'Twenty-nine primary schools, four secondary', p: '29 primary establishments teach 8,281 pupils and just 4 secondary establishments teach 4,924. That is about 286 pupils to a primary establishment and about 1,231 to a secondary one, arithmetic this page is doing on published counts. Four registered establishments for a city of this size is unusual, and an establishment is an administrative entry rather than a building.' },
          { h3: 'Students here and students from here', p: '3,248 people study at institutions inside the municipality. Separately, among residents, 2,270 are enrolled in applied higher education and 630 at university level, 2,900 in total. The two figures answer different questions and are never added together on this page.' }
        ] },
        { kind: 'spec', title: 'City rights in 1343, two mergers, a flower show and a campus', p: 'Venlo acquired stadsrechten in 1343. On 1 January 2001 the municipalities of Tegelen and Belfeld merged into it, and on 1 January 2010 the merger with Arcen en Velden took effect. The Floriade was held here in 2012, and from 2017 that ground has been used by the Brightlands Campus Greenport Venlo. The entry also describes the terminal here as de grootste inlandse railterminal van Europa, a claim this page quotes and does not test. The mayor is A. S. Antoin Scholten.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Ten named places, seven registered woonplaatsen, one border',
      intro: 'Venlo is a town, a large district across the river that used to be its own place, three former municipalities that arrived this century, and a run of villages up the Maas towards Germany. The national register counts 7 woonplaatsen, 21 wijken and 113 buurten; the municipal entry lists ten places with populations. Both are correct and they are answering different questions.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Venlo', p: 'The town itself at 40,945, with the station, the shopping streets that the entry says have relied on German visitors since the 1960s, and rather less than half the municipality.' },
          { h3: 'Blerick', p: 'At 23,990 the second place by a distance, on the west bank of the Maas, large enough to be a town anywhere else and treated by most residents as its own place with its own everything.' },
          { h3: 'Tegelen and Steyl', p: 'Tegelen at 15,125 was a municipality until 2001, with a long ceramics history; Steyl at 3,635 sits beside it on the river and is known for its mission houses.' },
          { h3: 'Belfeld and Boekend', p: 'Belfeld at 5,475 also arrived in 2001, on the southern edge towards Reuver; Boekend at 880 is the smallest place with a published figure, out past Blerick.' },
          { h3: 'Velden, Arcen and Lomm', p: 'Velden at 5,415, Arcen at 2,760 and Lomm at 1,040, the three river villages north of the town that came in together as Arcen en Velden on 1 January 2010.' },
          { h3: 'Hout-Blerick', p: 'At 2,865, south-west of Blerick along the Maas, the last of the ten places the municipal entry gives a figure for.' }
        ] },
        { kind: 'p', text: 'The ten published figures add to 102,130 against a municipal total of 104,195, but the entry gives no date for the place populations, so the gap of 2,065 cannot be interpreted and is not interpreted here. Every one of these places gets the same class at the same hour for the same fee, and placement follows demonstrated ability rather than which side of the Maas the address is on.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure, its source, and the hedges kept exactly as written',
      intro: 'The national count, the municipal entry, the visitor figure with all three of its qualifications, and four claims this page declines to make.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The municipal count', p: 'Statistics Netherlands: 104,195 residents in 2026; 49,770 households for 2025 averaging 2.06, 19,864 of them single-person, 40 percent; 14,065 under fifteen; 11,608 aged fifteen to twenty-five; 25,837 aged twenty-five to forty-five; 27,873 aged forty-five to sixty-five; 24,812 aged sixty-five and over; total area 12,899 hectares with 12,416 of land; density 838; 29 primary establishments with 8,281 pupils and 4 secondary with 4,924; 3,248 students at institutions here; 2,270 residents in applied higher education and 630 at university level; 7 woonplaatsen, 21 wijken and 113 buurten; 98,792 residents in 1995, a rise of 5,403.' },
          { h3: 'The municipality, described', p: 'Its own entry: op 1 januari 2026 telde de gemeente 104.201 inwoners, six more than the national figure for the same date, and both are kept here; 128.99 square kilometres of which 124.25 land and 4.74 water; mayor A. S. Antoin Scholten of the VVD; in 1343 verwierf Venlo stadsrechten; the 2001 merger with Tegelen and Belfeld and the 2010 merger with Arcen en Velden.' },
          { h3: 'The visitors, quoted with every qualifier', p: 'The entry writes that de detailhandel in de binnenstad van Venlo is sinds de jaren 60 gebaat bij de bezoekers uit het Duitse achterland, and gives Venlo jaarlijks circa 5 miljoen bezoekers uit voornamelijk het aangrenzende Ruhrgebied. Circa means about. Voornamelijk means mainly, not only. No year is attached to the five million. All three qualifications survive on this page.' },
          { h3: 'The ten places, undated', p: 'The municipal entry lists Venlo 40,945, Blerick 23,990, Tegelen 15,125, Belfeld 5,475, Velden 5,415, Steyl 3,635, Hout-Blerick 2,865, Arcen 2,760, Lomm 1,040 and Boekend 880, and attaches no date to the table. This page reproduces the figures and refuses to divide any of them into a dated total.' },
          { h3: 'The Floriade ground', p: 'In 2012 werd in Venlo de Floriade gehouden, and dit terrein wordt vanaf 2017 gebruikt door de Brightlands Campus Greenport Venlo. That is the whole of what the entry says about it here, and this page adds nothing about visitor numbers, cost or outcome, because it read none.' },
          { h3: 'Four claims not made here', p: 'No distance from Venlo to the German border appears on this page, because no source read gave one. The rail terminal is quoted as the entry describes it and is not asserted as a measured fact. The gain of 5,403 residents since 1995 is not called growth of unchanged ground, since two mergers landed inside that span. And the undated place populations are never divided into the dated municipal total.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the municipality, the campus, the terminal or any school named here and claims none. Where a source hedges, the hedge is reproduced rather than removed.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Forty-eight visits per resident: a rate about people who do not exist',
      intro: 'One numerator that the source publishes, several denominators that are all available, and not one of them a population of the people doing the visiting.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Say out loud who the denominator is', p: 'Per capita is not a unit. It is a sentence with a subject, and the subject is whoever is in the register you divided by. Here that is 104,195 people registered as living in the municipality on one January morning. The learner writes the full sentence before computing anything, and the problem usually announces itself in the writing.' },
          { h3: '2. Find out who the thing actually serves', p: 'The entry is explicit that the city-centre retail has depended on visitors from the German hinterland since the 1960s, and puts them at circa 5 million a year. Those people are the users. They are not in the denominator, they are not in any Dutch register, and no amount of care with the Dutch data will put them there.' },
          { h3: '3. Report the count and the served population separately', p: 'The honest output is not a better ratio. It is the raw figure with a sentence naming who it belongs to: about five million visits a year, mainly from the neighbouring Ruhrgebied, into a municipality of 104,195 residents. Two numbers and a relationship, rather than one number and a false implication.' }
        ] },
        { kind: 'table', caption: 'One numerator, four denominators, and none of them the people involved', head: ['Divided by', 'Gives', 'What that is arithmetically', 'What it is not'], rows: [
          ['104,195 municipal residents', 'about 48 visits per resident a year', 'five million spread over everybody registered here', 'a description of any resident, none of whom makes those visits'],
          ['40,945 residents of the town itself', 'about 122 visits per resident a year', 'the same numerator over a smaller register', 'more meaningful for being a larger number'],
          ['49,770 households', 'about 100 visits per household a year', 'a third way of dividing the same five million', 'a household activity in any sense at all'],
          ['nothing at all', 'circa 5 million visits a year', 'the figure the source actually publishes', 'per capita anything, which is why the source does not divide it']
        ] },
        { kind: 'callout', h3: 'Ask who the denominator is, and whether they are the people the number is about', p: 'The phrase per capita is one of the most trusted in public life and one of the least examined. It always names a population, usually the residents of whatever administrative area the data arrived in, and it quietly asserts that those residents are the people the numerator concerns. In a border city that assertion falls apart in a single sentence, but the same failure is everywhere once you look for it. A hospital in a small town serves a region and its beds per head of the town look extravagant. A motorway service station has a staggering turnover per local resident. A university town has an absurd number of bars per capita, because the students are counted in some registers and not others. A website hosted in one country divides its users by that country. In every one of those cases the arithmetic is correct, the denominator is real, and the resulting sentence is about nobody. The repair is not a cleverer statistic. It is to name the served population out loud, and if you cannot count it, to say the count is missing rather than substitute the register you happen to have. A rate whose denominator excludes the users is worse than no rate, because it looks like an answer.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for a rate whose users are not on the register',
      intro: 'Customers outside your country, patients outside your town, readers outside your language, players outside your platform: every service has users its denominator has never heard of. Practised on a city that serves a foreign region of a size it does not record.',
      body: [
        { kind: 'table', caption: 'Building a rate you can defend', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Write the sentence', 'Say per what, naming the actual register', 'Per capita used as though it were a unit', 'A claim somebody can check'],
          ['Identify the users', 'List who the numerator is generated by, not who lives nearby', 'A denominator chosen by data availability', 'The population the question is really about'],
          ['Test for overlap', 'Ask what share of the users are in the denominator', 'A ratio between two unrelated groups', 'A quick sense of whether the rate is meaningful at all'],
          ['Publish the raw count', 'Give the numerator on its own, with its source hedges', 'False precision manufactured by division', 'A number the reader can redivide themselves'],
          ['Name the missing count', 'When the served population is uncountable, say so in the output', 'A silent substitution nobody can see later', 'An honest gap instead of a confident error']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Count the sweets sold at a school fair, then work out sweets per pupil, then notice that half the buyers were parents and grandparents. The children rebuild the sum with the right group and discover the first answer was about nobody.' },
          { h3: 'For teenagers', p: 'A small Python model of the city with residents, visits and households, a rate function that refuses to run until it is told which population it is dividing by, and an output that always prints the denominator beside the figure. The stretch: what would you have to measure to make a per-user rate here honest, and who would have to collect it?' },
          { h3: 'For adults', p: 'A per-head figure from work: cost per employee, revenue per customer, tickets per user. Adults regularly find a denominator that came from whichever system was easiest to query, and a population it was never supposed to describe.' }
        ] },
        { kind: 'p', text: 'Population, household, age, area, school and student figures come from the national statistics office; the municipal description, city rights, mergers, mayor, place populations, Floriade, campus, terminal claim and visitor figure come from the encyclopaedia entry for the municipality. The figures of about 48, about 122 and about 100 are this page dividing the published five million by three published registers in order to show that all three are meaningless, and they are labelled as arithmetic wherever they appear.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sweets per pupil to a rate that will not run without a named population',
    intro: 'The starting rung is decided in the free hour by what the learner can already do, and never by which of the ten places the address falls in.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Who actually bought them?', p: 'Children divide by the wrong group, notice, and divide again by the right one.', courses: ['kids-coding-blocks-masterclass', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Per what, exactly?', p: 'Learners write the full sentence a rate is short for before they compute it.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Denominators that must be declared', p: 'Teenagers build code that refuses to produce a rate until told which population it belongs to.', courses: ['java-programming-masterclass-for-teens', 'mysql-mastery-for-teens'] },
      { band: 'Ages 18 to 67', h3: 'The per-head figure in the report', p: 'Adults take a per-employee or per-customer number and find out where its denominator came from.', courses: ['python-ai-automation-masterclass-college', 'ai-tools-mastery-complete-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will happily divide five million by a hundred thousand. Why should a child in Venlo learn to refuse?',
    intro: 'Because the division is correct, the result is clean, and the sentence it produces is about nobody at all.',
    p1: 'Give a model the visitor figure and the population and ask for visits per resident, and it will return forty-eight without hesitation. It is right. It is also answering a question that should have been rejected rather than computed, because the visitors are German and the residents are Dutch and the two groups barely overlap. Nothing in the arithmetic can detect that. The check is semantic, it happens before the calculation, and it consists of asking who the denominator is and whether they are the people the numerator concerns.',
    p2: 'So the learner builds a rate function that will not run until it is told which population it is dividing by, and that prints the population next to the answer every time. It is a few lines of code enforcing a habit, and the habit is what lasts. A fourteen-year-old in Blerick who has been made to name the denominator will be the person at thirty who asks which system the employee count came from before agreeing that cost per head has gone up. Models will keep dividing anything by anything. Deciding that a division should not happen remains a human job.',
    closer: 'The argument for a child in Venlo learning to code in 2026 is therefore not about shopping streets. It is that per capita is a sentence with a hidden subject, that the subject is usually whoever the data happened to be filed under, and that a border city serving five million people it never counts is the plainest demonstration of the problem in the country.',
    blogAnchor: 'why a child still gains from writing the code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes on both banks of the Maas and up to the border',
    intro: 'Venlo is compact enough that distance is rarely the problem, but it is a working city with shift patterns, cross-border commuting and evenings that fill up early.',
    cells: [
      { h3: 'The lesson comes to the house', p: 'One fixed hour a week at the kitchen table in Blerick, Tegelen or Arcen, which is the only arrangement that survives a rota and a school run at the same time.' },
      { h3: 'English in the class, Dutch on the school paperwork', p: 'Teaching is entirely in English. Groep, havo, vwo and profielkeuze stay in Dutch deliberately, because a child recognises those words from their own timetable and an English substitute only adds a step.' },
      { h3: 'What the free hour produces', p: 'A level the learner has shown rather than claimed, the course that follows from it, and a weekly slot. No card details are requested at any stage.' },
      { h3: 'Stage decides the group, the postcode does not', p: 'A learner in Boekend and a learner in Steyl work together when they are at the same stage, and separately when they are not, whatever the addresses say.' },
      { h3: 'Twice a week, on the regio Zuid calendar', p: 'Two live lessons a week in a repeating slot, normally eight in a month. Limburg takes its school holidays with regio Zuid, and the weeks a family will be away go into the plan before it is agreed.' },
      { h3: 'Three and a half hours, four and a half in winter', p: 'Only the Dutch clock changes, so the gap to the teacher depends on the season. After school, early evening and both weekend days work at either setting.' }
    ],
    spec: { title: 'A quarter of the city is over sixty-five, and the class runs to sixty-seven', p: '24,812 of the 104,195 residents are sixty-five or older, against 14,065 under fifteen. The upper end of the age range here is not decoration: the adult pipeline is built for a sixty-two-year-old in Velden as seriously as the kids pipeline is built for a nine-year-old in Blerick, and the first hour costs neither of them anything.' }
  },

  fees: {
    h2: 'The fee, in dollars, the same on both sides of the river',
    intro: 'Written down here rather than saved for a telephone call.',
    first: 'A full lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'There is a single international rate and it is quoted in dollars. No euro price exists, so Arcen pays exactly what the middle of Venlo pays. Nothing is charged until the free lesson has settled the course and the hour, and payment is then arranged over WhatsApp. Pausing, changing plan and missing a week are all explained on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, set down exactly as their authors wrote them',

  book: {
    h2: 'Send the level, not the postcode',
    intro: 'The first task might be sweets per pupil at a school fair, a rate function that refuses to run until it knows its population, or a per-head figure from work whose denominator turns out to come from the payroll system.',
    success: 'Thank you. Your Venlo class request has been sent.'
  },

  faq: {
    h2: 'Venlo coding class questions',
    intro: 'The municipality, its ten places, its German hinterland, the teaching and the terms.',
    items: [
      { q: 'Do five million Germans really visit Venlo every year?', a: 'The municipal entry says the city receives circa 5 million visitors a year, mainly from the neighbouring Ruhrgebied, and that city-centre retail has benefited from visitors out of the German hinterland since the 1960s. Circa means about, mainly does not mean only, and no year is attached to the figure. Those three qualifications are in the source and are kept here rather than tidied away.' },
      { q: 'What is wrong with saying Venlo has 48 visits per resident?', a: 'Nothing arithmetically. About five million divided by 104,195 residents does give roughly 48. The trouble is that no resident makes those visits and the people who do are not in the register that supplied the denominator, so the sentence describes nobody. The same objection applies to dividing by the 40,945 residents of the town or the 49,770 households. The honest report is the count with its served population named, which is exactly what the source does.' },
      { q: 'How many places are there in the municipality of Venlo?', a: 'Seven woonplaatsen are registered nationally, alongside 21 wijken and 113 buurten, while the municipal entry lists ten places with populations: Venlo 40,945, Blerick 23,990, Tegelen 15,125, Belfeld 5,475, Velden 5,415, Steyl 3,635, Hout-Blerick 2,865, Arcen 2,760, Lomm 1,040 and Boekend 880. Both counts are correct and they are answers to different questions.' },
      { q: 'Is the class taught in Dutch or German?', a: 'Neither. Every lesson is in English from start to finish. Dutch school vocabulary is kept as a Dutch school writes it, so groep, havo, vwo and profielkeuze are used rather than translated, but there is no Dutch-language and no German-language version of any course.' },
      { q: 'What hours suit a family in Venlo?', a: 'The teacher is three and a half hours ahead during Dutch summer time and four and a half in winter, because only the Dutch clock moves. The workable window runs from the end of the school day to mid-evening, with Saturday and Sunday fully open, and one repeating weekly slot is fixed during the free lesson and then left alone.' },
      { q: 'When did Tegelen, Belfeld, Arcen and Velden become part of Venlo?', a: 'Tegelen and Belfeld merged into Venlo on 1 January 2001, and the merger with Arcen en Velden took effect on 1 January 2010. Because of those two changes, the rise from 98,792 residents in 1995 to 104,195 in 2026 is not a measure of growth on unchanged ground and this page never presents it as one.' },
      { q: 'What happens in the free lesson?', a: 'The teacher watches the learner work in order to find where their ability currently stops, then sets one task just beyond it. A young child might divide sweets by pupils and then discover who really bought them. A teenager writes a rate function that refuses to produce an answer until it is told which population it is dividing by. An adult brings a per-head figure from work. It ends with a course, a rung, a weekly hour and a dollar price, and nothing has been charged.' },
      { q: 'Is there a Modern Age Coders classroom in Venlo?', a: 'No, and none is claimed in Venlo, in Blerick or anywhere else in the Netherlands. All lessons are live and online and require a laptop or desktop, working audio, a current browser and a connection that holds up. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Venlo coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across a month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. The course, the format, the recurring hour and availability are all confirmed before any payment happens.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, grouped by level, pace and goal rather than by age, school or which place they live in. One-to-one means a single learner with a single teacher. If no group at the right level is running at that moment, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'South down the Maas, west into Brabant, and up to the country',
    html: 'Venlo sits in <a class="cg-inline-link" href="/coding-classes-in-limburg">Limburg</a>, the long province with a page of its own. South down the river is <a class="cg-inline-link" href="/coding-classes-in-maastricht">Maastricht</a>, and west across the border of the province lies <a class="cg-inline-link" href="/coding-classes-in-noord-brabant">Noord-Brabant</a> with <a class="cg-inline-link" href="/coding-classes-in-eindhoven">Eindhoven</a> at its technical centre. Every one of them descends from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and a learner whose goal is a trained model rather than a running program should start at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Take this to WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-limburg', label: 'Limburg' },
    { href: '/coding-classes-in-maastricht', label: 'Maastricht' }
  ],

  personalityCss: `
.cg-root.cg-vnl .cg-hero-grid { align-items: center; gap: clamp(1.45rem, 3.4vw, 2.7rem); }
.cg-root.cg-vnl .cg-hero h1 { font-weight: 600; letter-spacing: -0.0125em; line-height: 1.09; }
.cg-root.cg-vnl .cg-capsule { border-left-width: 6px; border-left-style: double; padding-left: 1.55rem; }
.cg-root.cg-vnl .cg-eyebrow { letter-spacing: 0.145em; font-weight: 600; }
.cg-root.cg-vnl .cg-section-head h2 { max-width: 34ch; }
.cg-root.cg-vnl .cg-grid-3 { gap: clamp(1.15rem, 2.3vw, 1.75rem); }
.cg-root.cg-vnl .cg-card h3 { letter-spacing: 0.005em; }
.cg-root.cg-vnl .cg-table th { letter-spacing: 0.045em; }
.cg-root.cg-vnl .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-vnl .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'City and municipality of Venlo, Limburg: 104,195 residents (CBS 2026) on 128.99 km2 against the German border at a published density of 838; 49,770 households averaging 2.06 with 19,864 single-person, 40 percent; 29 primary establishments (8,281 pupils) and only 4 secondary (4,924), about 1,231 pupils to a secondary establishment; 3,248 students at institutions here against 2,900 residents enrolled; 7 woonplaatsen registered nationally against 10 places listed with populations by the municipal entry, both correct; stadsrechten 1343; mergers with Tegelen and Belfeld on 1 January 2001 and Arcen en Velden on 1 January 2010; Floriade 2012 and Brightlands Campus Greenport from 2017; regio Zuid holidays. The city page argues from a denominator that excludes the served population; Limburg owns the provincial scope argument and Maastricht owns correlate-versus-definition.',
    localProject: 'Per capita is a sentence with a hidden subject: ask who the denominator is and whether they are the people the number is about. The municipal entry says Venlo receives jaarlijks circa 5 miljoen bezoekers uit voornamelijk het aangrenzende Ruhrgebied and that city-centre retail has been gebaat bij de bezoekers uit het Duitse achterland since the 1960s. Divided by 104,195 municipal residents that is about 48 visits per resident a year, by the 40,945 residents of the town itself about 122, and by 49,770 households about 100: three arithmetically correct figures, none of which describes anybody, because the visitors are not in any of those registers and the residents do not make the visits. The honest output is the raw count with the served population named, which is what the source itself does. Distinct from the denominator-choice trap (Gadong), where four nested resident populations are all defensible and the fault is failing to name which; from rate-versus-count (New York), where the denominator is right and only the ranking is wrong; and from the exposure-window trap (Emmen), where the denominator is unknown rather than mismatched. Here there is exactly one resident register, it is accurate, and it excludes the population the numerator was generated by. The source hedges circa and voornamelijk and the absence of a year are all preserved.',
    requiredMentions: [
      '104,195',
      '49,770',
      '19,864',
      '98,792',
      '8,281',
      '4,924',
      '3,248',
      '40,945',
      '23,990',
      'Ruhrgebied',
      'Blerick',
      'Tegelen',
      'Steyl',
      'Boekend'
    ],
    sources: [
      { claim: 'Venlo 104,195 residents in 2026 (CBS); 49,770 households (2025) averaging 2.06, 19,864 single-person (40 percent); 14,065 aged 0 to 15; 11,608 aged 15 to 25; 25,837 aged 25 to 45; 27,873 aged 45 to 65; 24,812 aged 65 and over; total area 12,899 ha, land 12,416 ha; density 838; 29 primary establishments (8,281 pupils) and 4 secondary (4,924); 3,248 students at institutions in the municipality; HBO 2,270 and WO 630; 7 woonplaatsen, 21 wijken and 113 buurten; 98,792 residents in 1995, a rise of 5,403 (5.5 percent).', url: 'https://allecijfers.nl/gemeente/venlo/' },
      { claim: 'Op 1 januari 2026 telde de gemeente Venlo 104.201 inwoners; oppervlakte 128,99 km2, land 124,25 km2, water 4,74 km2; burgemeester A.S. (Antoin) Scholten (VVD); in 1343 verwierf Venlo stadsrechten; op 1 januari 2001 fuseerden de gemeenten Tegelen en Belfeld met Venlo and the merger with Arcen en Velden was a fact on 1 januari 2010; de detailhandel in de binnenstad van Venlo is sinds de jaren 60 gebaat bij de bezoekers uit het Duitse achterland, with Venlo jaarlijks circa 5 miljoen bezoekers uit voornamelijk het aangrenzende Ruhrgebied; in 2012 werd in Venlo de Floriade gehouden and dit terrein wordt vanaf 2017 gebruikt door de Brightlands Campus Greenport Venlo; the terminal is described as de grootste inlandse railterminal van Europa; place populations, with no date given in the table: Venlo 40,945, Blerick 23,990, Tegelen 15,125, Belfeld 5,475, Velden 5,415, Steyl 3,635, Hout-Blerick 2,865, Arcen 2,760, Lomm 1,040, Boekend 880.', url: 'https://nl.wikipedia.org/wiki/Venlo_(gemeente)' },
      { claim: 'School holiday regions: regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'A distance from Venlo to the German border. No source read gives one, so none is stated.',
      'The rail terminal asserted as the largest inland one in Europe. The entry describes it that way and the page quotes the description without testing it.',
      'Any interpretation of the 2,065 gap between the ten listed place populations and the municipal total. The place table carries no date, so the gap cannot be attributed and is not.',
      'The rise of 5,403 residents since 1995 described as growth of unchanged ground. Two mergers landed inside that span, and what a boundary change does to a series belongs to the Alkmaar page.',
      'Any visitor, cost or outcome figure for the Floriade 2012. Only the fact of it and the later campus use were read.',
      'The hedges removed. Circa and voornamelijk stay attached to the five million throughout, and no year is invented for it.',
      'Anything the Limburg or Maastricht pages own.'
    ]
  }
};
