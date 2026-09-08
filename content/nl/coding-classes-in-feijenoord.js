'use strict';
// Feijenoord: 81,512 residents on the south bank, nine buurten, 22 percent of
// its surface water, and the lowest average income of the four Rotterdam
// districts this series has measured.
// Spine: four data points cannot carry a conclusion. A perfect rank agreement
// across four districts happens one time in twelve by chance.

module.exports = {
  slug: 'coding-classes-in-feijenoord',
  code: 'fyn',
  accent: '#6C4F85',
  accentRationale: 'Feijenoord: a muted river purple off the Maas at dusk and the Kop van Zuid brickwork, the best-separated tone left and clearly apart from the dock green and brick red already carrying the other two Rotterdam district pages',
  pageType: 'district',
  place: {
    name: 'Feijenoord',
    eyebrow: 'Feijenoord, Rotterdam',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'City', name: 'Rotterdam' },
      { type: 'AdministrativeArea', name: 'Zuid-Holland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-netherlands', name: 'Netherlands' },
    { slug: 'coding-classes-in-rotterdam', name: 'Rotterdam' }
  ],
  nav: [
    { label: 'Rotterdam', href: '/coding-classes-in-rotterdam' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Feijenoord, Rotterdam, Netherlands',
  title: 'Coding Classes in Feijenoord, Rotterdam | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Feijenoord for ages 6 to 67, from Katendrecht and Vreewijk to the Afrikaanderwijk. First lesson free.',
  ogDescription: 'Live online coding, Python and AI for families on the south bank of Rotterdam, on a page about why four data points cannot support a conclusion.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'complete-game-development-masterclass-for-teens',
  verifiedOn: '9 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Feijenoord Learners',
    description: 'Ability-placed online coding, Python, AI, game building and mathematics for children, teenagers and adults across the nine buurten of Feijenoord, taught in English.'
  },

  h1: 'Coding classes in Feijenoord, where four districts line up perfectly and that turns out to prove nothing',
  capsuleQ: 'What are the best coding classes in Feijenoord?',
  capsule: 'Coding classes in Feijenoord reach 81,512 residents (1 January 2026) on the south bank of the Maas, on 662 hectares of land inside 855 hectares of territory, nearly a quarter of it water. Across the four Rotterdam districts this series has now measured, average income and average dwelling value rank in exactly the same order. That looks like proof they move together. With four items there are only twenty-four possible orderings, so a perfect match arrives by chance about one time in twelve, which is not proof of anything. Modern Age Coders teaches live online in English from Katendrecht to Vreewijk, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Rank four Rotterdam districts by average income and you get Centrum, Prins Alexander, Delfshaven, Feijenoord. Rank the same four by average dwelling value and you get exactly the same order. It looks like a finding. It is not. Four things can be arranged in twenty-four ways, so two lists agreeing perfectly, in either direction, happens about once in twelve by accident. One more district would have made the result worth something. Four does not, and Rotterdam has twenty-two to choose from.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Feijenoord.',

  picks: {
    eyebrow: 'Course picks for Feijenoord',
    h2: 'Four courses for the youngest district on the south bank',
    intro: 'A groep 5 child in Vreewijk who plays games all week and has never made one, a teenager in Bloemhof who wants to build rather than finish, a student on Katendrecht who needs Python to run without being watched, and an adult in Hillesluis who has to present a chart every month and would like to trust it: four doors, and the first hour of each costs nothing.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Real typed Python, drawings that obey orders and a first program that spots a rule, taught in English to the groep 5 to 8 child in any of the nine buurten.' },
      { course: 'complete-game-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'A game taken from an empty project to something other people can play, for the teenager who has finished hundreds and built none.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python that gathers, cleans, checks and reports unattended, for the student or worker repeating one task by hand every week.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Reading a table honestly, including how much a small sample can carry, for anybody who reports numbers to people who act on them.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Feijenoord today',
      h2: 'Eighty-one thousand people, and a fifth of the ground is river',
      intro: 'Feijenoord holds 81,512 residents across 855 hectares, of which 662 are land and 192 water, at a published 12,196 people to the square kilometre. Nearly a quarter of its surface is the Maas and the harbours cut into it, which is more water than any other district measured in this series. It is the youngest of the four Rotterdam districts here and the one with the lowest average income.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The youngest and the most rented', p: '13,145 residents are under fifteen, 16 percent, and 11,350 are sixty-five or over, 14 percent. Households average 2.0 people, higher than in the centre or Delfshaven, and 30,086 of the 38,572 dwellings are rented, 78 percent, the highest share of the four districts compared here.' },
          { h3: 'Islands, a peninsula and a garden village', p: 'The Noordereiland sits in the middle of the river; Katendrecht is a former dockland spit; Vreewijk was laid out as a garden village; the Kop van Zuid is converted quayside. Add the Afrikaanderwijk, Hillesluis, Bloemhof, Kop van Zuid - Entrepot and the buurt of Feijenoord itself and the nine have very little in common beyond a boundary.' },
          { h3: 'Schools and students', p: '32 primary establishments teach 7,247 pupils and 10 secondary establishments teach 5,283. Among residents, 2,210 are enrolled in applied higher education and 1,510 at university level, a balance the other way round from Delfshaven across the river.' }
        ] },
        { kind: 'spec', title: 'Where this page gets its comparison from', p: 'Four Rotterdam districts now carry full published rows in this series: Rotterdam Centrum, Delfshaven, Prins Alexander and this one. Four of the city\'s twenty-two wijken is enough to notice a pattern and nowhere near enough to believe one, and the distance between noticing and believing is what the rest of this page is about. Port throughput and secondary-school choice are handled on the city page and appear nowhere below.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Four districts, three measures, and one perfect match',
      intro: 'Everything below is published by one office for the same years. Read down the income column and then down the dwelling value column, and the ordering is identical.',
      body: [
        { kind: 'table', caption: 'Four Rotterdam districts, ranked three ways', head: ['District', 'Average income per resident', 'Average dwelling value', 'People per square kilometre'], rows: [
          ['Rotterdam Centrum', '44,500 euro, first', '424,000 euro, first', '10,191, third'],
          ['Prins Alexander', '34,700 euro, second', '360,000 euro, second', '5,635, fourth'],
          ['Delfshaven', '30,100 euro, third', '325,000 euro, third', '14,944, first'],
          ['Feijenoord', '29,200 euro, fourth', '311,000 euro, fourth', '12,196, second'],
          ['The pattern', 'income and value agree exactly', 'in every one of four places', 'density agrees with neither']
        ] },
        { kind: 'p', text: 'Feijenoord is at the bottom of both columns, and the gap to Delfshaven above it is 900 euro of income and 14,000 euro of value, about three and four percent. Whether an ordering that close is an ordering at all is the argument of the Breda page in this series and is not reopened here. What this page is about is different and comes before it: even taking every figure at face value, four is not enough places for a perfect agreement to mean anything.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure, its source, its year, and the counting behind the claim',
      intro: 'One district row in full, three comparison figures each for the others, and the arithmetic that decides how much the pattern is worth.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Feijenoord', p: '81,512 residents (2026); 39,940 households averaging 2.0 (2025), 18,935 single-person at 47 percent; ages 13,145 under fifteen at 16 percent, 10,740 at 13 percent, 26,640 at 33 percent, 19,620 at 24 percent and 11,350 at 14 percent; 855 hectares total, 662 land and 192 water; density 12,196; 38,572 dwellings; average value 311,000 euro; 30,086 rented at 78 percent and 8,486 owned at 22; income 29,200 euro (2024); 2,210 residents in applied higher education and 1,510 at university; 32 primary establishments with 7,247 pupils and 10 secondary with 5,283; nine buurten.' },
          { h3: 'Three districts, three numbers each', p: 'Income, dwelling value and density are all that the table needs, so they are all that is taken. Rotterdam Centrum: 44,500 euro, 424,000 euro, 10,191. Prins Alexander: 34,700, 360,000, 5,635. Delfshaven: 30,100, 325,000, 14,944. Every other column for those three lives on their own pages.' },
          { h3: 'Why twenty-four', p: 'Four districts can be put in order in 4 times 3 times 2 times 1 ways, which is twenty-four. If one ranking is fixed and another is arbitrary, the chance that the second matches it exactly is one in twenty-four, and the chance that it matches exactly forwards or exactly backwards is two in twenty-four, which is one in twelve, about 8.3 percent.' },
          { h3: 'What five would have given', p: 'Five districts can be ordered in 120 ways, so a perfect match in either direction falls to two in 120, about 1.7 percent. One more district would have moved this result from unremarkable to worth reporting. Rotterdam has 22 wijken and this series has read four of them.' },
          { h3: 'What this page does not claim', p: 'It does not claim that income and dwelling value are unrelated. It claims that these four districts do not establish that they are related, which is a different and weaker statement. It also makes no claim about why Feijenoord sits where it does in either column, because explaining a position needs more than a position.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the gebied, the city or any school named here and claims none. Every population, household, age, area, density, dwelling, value, tenure, income, student, establishment and pupil figure comes from the national statistics office page for the wijk named beside it. The counts of twenty-four and 120 orderings, the probabilities of one in twelve and 1.7 percent, and the percentage gaps between Delfshaven and Feijenoord are this page working from those published figures.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Two columns in perfect agreement, and one chance in twelve',
      intro: 'A pattern that looks like a law, a sample small enough that patterns are cheap, and the number of items it would have taken to say anything.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Count the ways it could have come out', p: 'Before deciding a match is impressive, work out how many outcomes there were. Four districts have twenty-four possible orderings. That is the whole space. A perfect agreement is one point in it, or two if you accept the reverse order as equally interesting, and two in twenty-four is one in twelve.' },
          { h3: '2. Compare that with how surprised you feel', p: 'A perfect match across four things feels like strong evidence and is roughly as likely as rolling a six on a fair die twice out of five attempts. Nobody would publish that. The feeling comes from the neatness of the result rather than from its improbability, and neatness is exactly what small samples produce.' },
          { h3: '3. Work out what would have been enough', p: 'Five districts drop the chance to about 1.7 percent, ten make a perfect match effectively impossible by accident. So the question is not whether this analysis was done carefully, it is whether it was done at a size where care could pay off. Here it was not, and the fix costs eighteen more page fetches rather than any cleverness.' }
        ] },
        { kind: 'table', caption: 'How much a perfect rank agreement is worth, by sample size', head: ['Districts compared', 'Possible orderings', 'Chance of a perfect match either way', 'Is the agreement evidence?'], rows: [
          ['3', '6', 'one in three, about 33 percent', 'no, it is nearly expected'],
          ['4, as on this page', '24', 'one in twelve, about 8.3 percent', 'no, and it is the case here'],
          ['5', '120', 'about 1.7 percent', 'beginning to be'],
          ['6', '720', 'about 0.3 percent', 'yes, on this measure alone'],
          ['22, the wijken Rotterdam has', 'more than 10 to the power 21', 'vanishingly small', 'the analysis somebody should do']
        ] },
        { kind: 'callout', h3: 'Count the ways it could have come out before deciding the result is surprising', p: 'A pattern is only informative in proportion to how unlikely it was, and people are very bad at estimating that, because what registers is how tidy the answer looks rather than how large the space of possible answers was. Four things lining up perfectly feels like a discovery. It is a one-in-twelve event, which is to say it is the sort of thing that happens all the time. The same illusion runs through most small comparisons in working life. Three regions where the new process outperformed the old one. Four quarters in a row of improvement. Five customers who all mentioned the same feature. Two teams whose rankings on speed and on quality happen to match. In each case the arithmetic that would deflate it is available in a minute and almost never done, because it requires asking a question nobody enjoys, which is how many different results would have looked just as meaningful. The habit is to do that counting first, before forming a view, and to write the number down next to the finding. If the answer is that only a handful of outcomes were possible, then the pattern was cheap and the honest report says so. And the remedy is usually not a better method but more data, which is a duller conclusion than a clever analysis and is very often the true one.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for a pattern found in a handful of things',
      intro: 'Three regions, four quarters, five customers, six tickets: small samples produce tidy patterns constantly, and the tidiness is what makes them convincing. Practised on four districts that agree perfectly and prove nothing.',
      body: [
        { kind: 'table', caption: 'Weighing a pattern before believing it', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Count the outcome space', 'Work out how many results were possible before looking at the one you got', 'Tidiness mistaken for improbability', 'A number to set against your surprise'],
          ['State the sample size first', 'Put n at the top of the finding, not in a footnote', 'A conclusion read without its basis', 'A reader who can judge it themselves'],
          ['Ask what size would have sufficed', 'Compute the n at which this result would have been convincing', 'An argument about method when the problem is data', 'A concrete, costed next step'],
          ['Resist the reverse-order rescue', 'Decide in advance whether an inverse match would have counted', 'Two chances taken and one reported', 'An honest probability rather than a halved one'],
          ['Get more data before getting clever', 'Prefer twenty more observations to a better test on four', 'Sophistication applied to nothing', 'A result that survives being checked']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Four cards shuffled into a line, guessing the order, and doing it again and again. The children discover how often they get it exactly right, and that the answer is far more often than they expected.' },
          { h3: 'For teenagers', p: 'The four districts in Python, a function that returns the number of possible orderings for any n, and a report that prints the chance of a perfect match beside every ranking it produces. The stretch: fetch the other eighteen Rotterdam wijken and find out whether the pattern survives at n of twenty-two.' },
          { h3: 'For adults', p: 'A small comparison from work that convinced somebody: three regions, four quarters, five accounts. Adults reliably find that the outcome space was tiny, that nobody counted it, and that a decision was taken anyway.' }
        ] },
        { kind: 'p', text: 'All population, household, age, area, density, dwelling, value, tenure, income, student, establishment and pupil figures come from the national statistics office pages for the four wijken named, with 2026 populations, 2025 household and housing figures and 2024 incomes. The ordering counts of 6, 24, 120 and 720, the probabilities derived from them, and the percentage gaps between districts are this page computing from those published figures and from ordinary arithmetic on factorials.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From four shuffled cards to a report that prints its own sample size',
    intro: 'The rung is settled in the free hour by what the learner can already do, and never by which of the nine buurten the address falls in.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'How often do you get it right?', p: 'Children guess the order of four cards, over and over, and count the hits.', courses: ['kids-coding-blocks-masterclass', 'minecraft-coding-for-kids-course'] },
      { band: 'Ages 11 to 13', h3: 'How many ways could this have gone?', p: 'Learners count the possible outcomes before deciding the actual one is surprising.', courses: ['python-ai-kids-masterclass', 'statistics-probability-maths-course'] },
      { band: 'Ages 14 to 18', h3: 'Findings that carry their own n', p: 'Teenagers build reports that print the sample size and the chance beside every pattern.', courses: ['complete-game-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'The three regions that convinced everybody', p: 'Adults take a small comparison from work and count the space it came out of.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will confirm that richer districts have pricier homes. Why should a teenager in Feijenoord ask how many districts were checked?',
    intro: 'Because four of them agreeing is an ordinary event, and the answer will not mention that.',
    p1: 'Show a model four districts where income and dwelling value rank identically and ask what it means, and you will get a clean account of housing markets and purchasing power. The account may even be right in general. What it will not do is stop to ask how many orderings four items have, notice that the answer is twenty-four, and conclude that this particular evidence is worth almost nothing. Nothing in the table announces its own sample size, and a fluent explanation of a pattern never begins by questioning whether there is one.',
    p2: 'So the learner practises counting the outcome space before forming a view, and then builds the version that enforces it, printing n and the chance of a coincidence beside every pattern the code reports. It is a few lines guarding against the most common way that small analyses persuade people. A fifteen-year-old in Bloemhof who has worked out that four districts prove nothing will be the person at thirty asking how many regions were in the pilot before agreeing the new process works. Models will keep explaining patterns handed to them. Asking whether the pattern was cheap stays a person\'s job.',
    closer: 'The case for a child in Feijenoord learning to code in 2026 is therefore not about house prices. It is that small samples produce tidy results constantly, that tidiness is exactly what convinces people, and that four districts falling into perfect order makes the point in a table anybody can check in a minute.',
    blogAnchor: 'why writing code still repays a child in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes on the south bank',
    intro: 'Feijenoord runs from the Noordereiland in the river out to Vreewijk, and the Maas separates it from most of the city. For a weekly evening class that water is the whole problem.',
    cells: [
      { h3: 'No bridge, no tunnel, no metro', p: 'The lesson arrives at the table in Vreewijk, on Katendrecht or in the Afrikaanderwijk, at one hour that repeats. In a district cut off by a river, removing the journey removes the thing that actually stops families.' },
      { h3: 'Where the Dutch stops and the English starts', p: 'The lesson is English. The school vocabulary is not, and stays as the school prints it, so a teacher will say groep or havo or vwo or profielkeuze exactly as a child has already seen them written.' },
      { h3: 'One free hour, and three things settled in it', p: 'The learner is given something real to do while somebody watches. That establishes a level, the level points at one course rather than another, and an hour is put in the week. None of it involves a card.' },
      { h3: 'Ability sorts the groups, geography does not', p: 'A group holds five to ten learners working at one level, gathered from wherever they happen to live. Two neighbours at different stages will not be in it together, and that is the point of it.' },
      { h3: 'Two a week, and the holidays are already known', p: 'That comes to eight lessons in a typical month. Because Zuid-Holland sits in regio Midden, the school breaks are published long in advance, so they go into the schedule when it is made rather than disrupting it later.' },
      { h3: 'A gap of three and a half hours, or four and a half', p: 'Which of the two depends on the month, and entirely on the Dutch side, since the Indian clock has not moved in decades. Either way the afternoons, the early evenings and both weekend days remain workable at both ends.' }
    ],
    spec: { title: 'The youngest of the four districts measured, and the most rented', p: '13,145 residents are under fifteen, 16 percent, the highest share of the four Rotterdam districts in this series, and 78 percent of homes are rented, also the highest. Feijenoord has more children than any of the districts it is compared with and the least room to give them, in households averaging two people in flats that mostly belong to somebody else. A weekly hour that needs no journey and no spare room is built for exactly that, from age 6 to age 67.' }
  },

  fees: {
    h2: 'The fee, in dollars, in all nine buurten',
    intro: 'Printed here rather than kept for a call.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'There is one international rate and it is in dollars, with no euro edition, so an address on the Noordereiland is charged exactly what one in Vreewijk is. Nothing is paid until the free lesson has settled a course and an hour, and payment is arranged over WhatsApp afterwards. Pausing, switching plan and missing a week are all set out on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, as the people who left them typed them',

  book: {
    h2: 'Tell us the level, not the buurt',
    intro: 'The first task might be four shuffled cards and a count of how often the order comes out right, a report that prints its own sample size, or a three-region comparison at work that convinced a room without anybody counting the outcomes.',
    success: 'Thank you. Your Feijenoord class request has been sent.'
  },

  faq: {
    h2: 'Feijenoord coding class questions',
    intro: 'The district, its nine buurten, one cheap pattern, the teaching and the terms.',
    items: [
      { q: 'Do richer districts really have more expensive homes?', a: 'Probably, in general. This page does not show it. Across the four Rotterdam districts measured here, average income and average dwelling value rank in exactly the same order, which looks convincing until you count the possibilities. Four items can be ordered in twenty-four ways, so two rankings agreeing exactly, forwards or backwards, happens about one time in twelve by chance. That is not evidence. Five districts would have made it about 1.7 percent, and Rotterdam has twenty-two wijken to draw on.' },
      { q: 'Why compare only four districts then?', a: 'Because four is what this series has read so far: Rotterdam Centrum, Delfshaven, Prins Alexander and Feijenoord. The honest thing is to say so rather than to present the pattern as a result. The fix is not a cleverer method, it is eighteen more district pages, and the page says that plainly.' },
      { q: 'Which neighbourhoods are in Feijenoord?', a: 'Nine buurten: the Noordereiland, Feijenoord, Kop van Zuid - Entrepot, Kop van Zuid, the Afrikaanderwijk, Katendrecht, Hillesluis, Bloemhof and Vreewijk. The district carries the same name as one of the nine, and two more differ only by a suffix, so anyone looking a figure up by name should check which row they have got.' },
      { q: 'How much of Feijenoord is water?', a: '192 hectares out of 855, which is nearly a quarter, more than any other district measured in this series. The published density of 12,196 people to the square kilometre is computed on the 662 hectares of land rather than the total. What happens when a whole and its parts are measured on different bases is the argument of the Amsterdam-Centrum page and is not reopened here.' },
      { q: 'Is Feijenoord a district with a lot of children?', a: '13,145 residents are under fifteen, 16 percent, which is the highest share of the four Rotterdam districts in this series. Households average 2.0 people, also the highest of the four, and 30,086 of the 38,572 dwellings are rented, 78 percent. There are 32 primary establishments teaching 7,247 pupils and 10 secondary teaching 5,283.' },
      { q: 'Is the class taught in Dutch?', a: 'The lesson is in English and stays there. Dutch survives in one place only, the school words, so groep and havo and vwo and profielkeuze are said the way a child has already read them. No course has a Dutch-language version.' },
      { q: 'What hours work for a family in Feijenoord?', a: 'Anywhere between three and a half and four and a half hours, and which of the two depends on whether Dutch summer time is running, because the Indian clock never moves. The practical effect is small: afternoons after school, early evenings and either weekend day all work. The hour is picked once, during the free lesson, and then it does not move.' },
      { q: 'Is there a Modern Age Coders classroom in Feijenoord?', a: 'No, and none is claimed on the south bank, elsewhere in Rotterdam or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Feijenoord coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Rotterdam and beyond',
    h2: 'North across the river, west along the bank, and up to the country',
    html: 'North across the Maas is <a class="cg-inline-link" href="/coding-classes-in-rotterdam-centrum">Rotterdam Centrum</a>, whose page argues that a small district is mostly edge, and west along the bank is <a class="cg-inline-link" href="/coding-classes-in-delfshaven">Delfshaven</a>, where counting schools gets the answer backwards. The city page, <a class="cg-inline-link" href="/coding-classes-in-rotterdam">coding classes in Rotterdam</a>, carries the port and all fourteen gebieden, and everything here sits inside <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a> with <a class="cg-inline-link" href="/coding-classes-in-dordrecht">Dordrecht</a> further down the water. The series descends from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and a learner after trained models rather than running programs should begin at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Carry on in WhatsApp'
  },

  footerHeading: 'Rotterdam and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-rotterdam', label: 'Rotterdam' },
    { href: '/coding-classes-in-delfshaven', label: 'Delfshaven' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-fyn .cg-hero-grid { align-items: start; gap: clamp(1.55rem, 3.8vw, 2.95rem); }
.cg-root.cg-fyn .cg-hero h1 { font-weight: 500; letter-spacing: -0.012em; line-height: 1.11; }
.cg-root.cg-fyn .cg-capsule { border-left-width: 5px; border-left-style: double; padding-left: 1.45rem; }
.cg-root.cg-fyn .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; }
.cg-root.cg-fyn .cg-section-head h2 { max-width: 36ch; letter-spacing: -0.005em; }
.cg-root.cg-fyn .cg-grid-3 { gap: clamp(1.2rem, 2.5vw, 1.95rem); }
.cg-root.cg-fyn .cg-card { border-radius: 9px; }
.cg-root.cg-fyn .cg-table th { text-transform: uppercase; letter-spacing: 0.055em; }
.cg-root.cg-fyn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-fyn .cg-ladder-col { border-bottom: 4px solid var(--cg-accent-soft); padding-bottom: 1.05rem; }
`,

  dossier: {
    curriculumAuthority: 'Gebied Feijenoord, Rotterdam, Zuid-Holland: 81,512 residents (2026) on 855 hectares of which 662 land and 192 water, nearly a quarter water, the highest water share of any district in this series; density 12,196 computed on land; 39,940 households averaging 2.0 with 18,935 single-person at 47 percent; 13,145 residents under fifteen at 16 percent, the highest of the four Rotterdam districts measured; 38,572 dwellings, 30,086 rented at 78 percent, the highest, average value 311,000 euro, the lowest; income 29,200 euro (2024), the lowest; 2,210 residents in applied higher education and 1,510 at university, the reverse balance from Delfshaven; 32 primary establishments with 7,247 pupils and 10 secondary with 5,283; nine buurten, one of which is itself called Feijenoord and two of which differ only by a suffix. Regio Midden holidays. The district page argues from sample size; Rotterdam Centrum owns boundary truncation, Delfshaven owns counts of non-interchangeable units, and the city page owns the port units argument.',
    localProject: 'Count the ways it could have come out before deciding the result is surprising. Across the four Rotterdam districts this series has measured, average income and average dwelling value rank in exactly the same order: Rotterdam Centrum 44,500 euro and 424,000, Prins Alexander 34,700 and 360,000, Delfshaven 30,100 and 325,000, Feijenoord 29,200 and 311,000. A perfect agreement looks like a finding. Four items have 4 factorial, twenty-four, possible orderings, so two rankings matching exactly in either direction is a two in twenty-four event, one in twelve, about 8.3 percent, which is not evidence of anything. Five districts would drop it to about 1.7 percent and six to 0.3, so the remedy is more data rather than a better method, and Rotterdam has 22 wijken of which four were read. Density is the control: it ranks Delfshaven first, Feijenoord second, Centrum third and Prins Alexander fourth, agreeing with neither of the other two columns. Distinct from multiple comparisons (Al Khoudh), which is about testing many hypotheses until one looks significant: here exactly one comparison was made and the problem is that at n of four a single comparison has almost no power. Distinct also from rank stability under measurement noise (Breda), which is about gaps smaller than source disagreement: this page takes every figure at face value and still finds the pattern worthless. The page does not claim income and dwelling value are unrelated, only that these four districts do not establish that they are.',
    requiredMentions: [
      '81,512',
      '39,940',
      '18,935',
      '38,572',
      '311,000',
      '29,200',
      '12,196',
      '13,145',
      '7,247',
      '5,283',
      '1,510',
      'Katendrecht',
      'Afrikaanderwijk',
      'Vreewijk'
    ],
    sources: [
      { claim: 'Wijk Feijenoord, Rotterdam: 81,512 inwoners (2026); 39,940 huishoudens averaging 2.0 (2025), 18,935 eenpersoonshuishoudens at 47 percent; ages 13,145 (0 to 15, 16 percent), 10,740 (15 to 25, 13 percent), 26,640 (25 to 45, 33 percent), 19,620 (45 to 65, 24 percent), 11,350 (65+, 14 percent); 855 hectare total, 662 land, 192 water; bevolkingsdichtheid 12,196 per km2; woningvoorraad 38,572 (2025); gemiddelde WOZ 311,000 euro (2025); 30,086 huurwoningen (78 percent) and 8,486 koopwoningen (22 percent); gemiddeld inkomen 29,200 euro (2024); studenten HBO 2,210 and WO 1,510; 32 vestigingen basisonderwijs with 7,247 leerlingen and 10 vestigingen voortgezet onderwijs with 5,283 leerlingen; 9 buurten: Noordereiland, Feijenoord, Kop van Zuid - Entrepot, Kop van Zuid, Afrikaanderwijk, Katendrecht, Hillesluis, Bloemhof, Vreewijk.', url: 'https://allecijfers.nl/wijk/feijenoord-rotterdam/' },
      { claim: 'Wijk Rotterdam Centrum: gemiddeld inkomen 44,500 euro (2024); gemiddelde WOZ 424,000 euro (2025); bevolkingsdichtheid 10,191 per km2 (2025). Only these three columns are used on this page.', url: 'https://allecijfers.nl/wijk/rotterdam-centrum-rotterdam/' },
      { claim: 'Wijk Delfshaven: gemiddeld inkomen 30,100 euro (2024); gemiddelde WOZ 325,000 euro (2025); bevolkingsdichtheid 14,944 per km2 (2025). Wijk Prins Alexander: gemiddeld inkomen 34,700 euro (2024); gemiddelde WOZ 360,000 euro (2025); bevolkingsdichtheid 5,635 per km2 (2025). Only these three columns are used from each.', url: 'https://allecijfers.nl/wijk/delfshaven-rotterdam/' },
      { claim: 'Rotterdam: 673,804 inwoners (2026); 22 wijken en 92 buurten, of which four have been read for this series.', url: 'https://allecijfers.nl/gemeente/rotterdam/' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'That income and average dwelling value are unrelated. The page claims only that four districts do not establish a relationship, which is a weaker and different statement.',
      'That the ordering of Delfshaven above Feijenoord is secure. The gaps are about three and four percent, and whether an ordering that close is an ordering belongs to the Breda page.',
      'Any comparison of the district density against a total-area figure. The published density is on land, and the land-versus-total question belongs to the Amsterdam-Centrum page.',
      'Any explanation of why Feijenoord sits at the bottom of the income and dwelling value columns. Explaining a position needs more than a position.',
      'Full statistics rows for the three comparison districts. Only the three columns used in the table are taken from each; the rest belongs to their own pages.',
      'Figures for the individual buurten. Nine are named and none was read separately.',
      'Anything the Rotterdam city page owns, including the port throughput in two units and the named secondary schools with their addresses.'
    ]
  }
};
