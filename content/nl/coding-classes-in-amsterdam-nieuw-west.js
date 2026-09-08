'use strict';
// Amsterdam Nieuw-West: the Westelijke Tuinsteden, built to a 1935 plan,
// around a lake that was dug to raise the ground the houses stand on.
// Spine: ask whether a number was measured or chosen. Two wijken here share
// a tenure split to a hundredth of a percentage point and differ by half on
// density, and both facts were decided by a building programme.

module.exports = {
  slug: 'coding-classes-in-amsterdam-nieuw-west',
  code: 'anw',
  accent: '#2F4505',
  accentRationale: 'Amsterdam Nieuw-West: a dark moss for the green between the blocks that the 1935 plan specified, taken from the last hue band with real separation and reading clearly apart from the rose, ochre, violet, viridian and harbour teal on the other five Amsterdam district pages',
  pageType: 'district',
  place: {
    name: 'Amsterdam Nieuw-West',
    eyebrow: 'Nieuw-West, Amsterdam',
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
  routeLabel: 'Amsterdam Nieuw-West, Netherlands',
  title: 'Coding Classes in Amsterdam Nieuw-West | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Amsterdam Nieuw-West for ages 6 to 67, from Slotermeer to Osdorp. The first lesson costs nothing at all.',
  ogDescription: 'Live online coding, Python and AI for families in Amsterdam Nieuw-West, in a district where almost every distinctive figure was decided by a plan, not discovered.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '9 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Amsterdam Nieuw-West Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults across the Westelijke Tuinsteden of Amsterdam Nieuw-West, taught in English.'
  },

  h1: 'Coding classes in Amsterdam Nieuw-West, where two neighbourhoods have identical tenure and nobody in either of them chose it',
  capsuleQ: 'What are the best coding classes in Amsterdam Nieuw-West?',
  capsule: 'Coding classes in Amsterdam Nieuw-West reach the Westelijke Tuinsteden, built in the 1950s and 1960s to a plan drawn in 1935, around a lake that was dug to get the sand that raised the ground under the houses. Slotermeer-Noordoost and Osdorp-Midden are published at exactly the same tenure split, 73 percent rented and 27 percent owned, while their densities differ by more than half. The matching figure was specified by a building programme and the differing one was not. Modern Age Coders teaches live online in English from Geuzenveld to the Sloterplas, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Slotermeer-Noordoost has 4,192 homes, of which 3,060 are rented. Osdorp-Midden has 6,713, of which 4,900 are rented. Work both out and you get 72.99 percent in one and 72.99 percent in the other. Two separate neighbourhoods, sixty percent apart in size, agreeing to a hundredth of a percentage point. Numbers do not do that by accident. That figure was not discovered about the people who live there; it was decided by whoever commissioned the buildings, and the useful habit is knowing which kind of number you are looking at before you try to explain it.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Amsterdam Nieuw-West.',

  picks: {
    eyebrow: 'Course picks for Amsterdam Nieuw-West',
    h2: 'Four courses for the part of Amsterdam with the most children in it',
    intro: 'A groep 5 child in Geuzenveld who has run out of levels to finish, a teenager in Osdorp who wants to know what a model actually does rather than what it says, a student in Slotervaart who needs Python to become second nature, and an adult near the Sloterplas who was handed a set of AI tools at work and left to it: four doors, and the first hour of each costs nothing.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Real typed Python, drawings that follow orders and a first program that spots a rule, taught in English to the groep 5 to 8 child anywhere in the district.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'Building, training and breaking a model, for the teenager who has used a dozen of them and been shown the inside of none.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'College and adult', note: 'Python from an empty file to work that runs unattended, for the student who has met it in one module and wants it properly.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Reading a table honestly, including telling a measurement from a setting, for anyone who reports numbers to somebody who will act on them.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Nieuw-West today',
      h2: 'A district drawn in 1935 and built twenty years later',
      intro: 'Very little about this district happened by accumulation. The western expansion of Amsterdam was drawn on paper first, built two decades later, and then reorganised twice, and the sequence of those decisions explains more of what the statistics show than anything the residents have done since.',
      body: [
        { kind: 'table', caption: 'A district settled in five decisions', head: ['When', 'What was decided', 'What it fixed'], rows: [
          ['1935', 'the Algemeen Uitbreidingsplan laid the basis for the western expansion', 'how open the building would be and how much green would sit between it'],
          ['The 1950s and 1960s', 'the Westelijke Tuinsteden were built to that plan, in the open building style', 'the dwelling sizes, and with them the households that could fit in them'],
          ['During the building', 'the Sloterplas was dug for sand extraction, to raise the ground of the garden cities around it', 'the largest piece of water in the district, which is a by-product of the houses'],
          ['2010', 'Geuzenveld-Slotermeer, Slotervaart and Osdorp were joined as one deelgemeente', 'the boundary all the district figures below are counted inside'],
          ['1 January 2015', 'the stretch of Westpoort lying west of the ring road joined the district', 'a piece of port land now sitting inside the district totals']
        ] },
        { kind: 'grid3', cells: [
          { h3: 'The entry\'s own figures, and how old they are', p: 'The stadsdeel entry gives 159,522 residents for 1 January 2021 and an area of 32.38 square kilometres. That population is five years older than the wijk populations further down, which are 2026, so this page keeps the two apart and works out no density, share or total that would need both of them at once.' },
          { h3: 'Who governs it now', p: 'The district was set up as a deelgemeente in 2010. When the deelgemeenten were abolished as a layer of government, part of the work of the Amsterdam districts passed to bestuurscommissies, which is the arrangement in place today.' },
          { h3: 'What this page puts numbers on', p: 'Two wijken, Slotermeer-Noordoost and Osdorp-Midden, holding 25,233 residents between them. The rest of the district, including Geuzenveld, Slotervaart, Overtoomse Veld, Osdorp-Oost, De Aker, Sloten and Nieuw Sloten, is named without figures, because none were read for it.' }
        ] }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Two garden-city neighbourhoods, and which of their numbers agree',
      intro: 'Both were built as part of the same programme and both are still overwhelmingly rented. Populations are 2026 figures; households, area, density, housing and tenure are 2025; incomes are 2024.',
      body: [
        { kind: 'table', caption: 'Slotermeer-Noordoost and Osdorp-Midden, side by side', head: ['', 'Slotermeer-Noordoost', 'Osdorp-Midden', 'How close are they?'], rows: [
          ['Residents', '9,499', '15,734', 'Osdorp-Midden is 66 percent larger'],
          ['Households, average size', '4,510 at 2.1 people', '7,415 at 2.1 people', 'identical average'],
          ['Dwellings', '4,192', '6,713', '60 percent more in Osdorp-Midden'],
          ['Rented, and the share', '3,060, published as 73 percent', '4,900, published as 73 percent', 'both work out at 72.99 percent'],
          ['Owned, and the share', '1,132, published as 27 percent', '1,813, published as 27 percent', 'identical to the published figure'],
          ['Average dwelling value', '367,000 euro', '397,000 euro', '8 percent apart'],
          ['Average income per resident', '26,300 euro', '28,600 euro', '9 percent apart'],
          ['Land, and people per square kilometre', '96 hectares, 9,755', '103 hectares, 15,218', 'seven percent more land, and 56 percent denser'],
          ['Under fifteen', '1,760, 19 percent', '2,780, 18 percent', 'the highest child shares on any Amsterdam page here']
        ] },
        { kind: 'p', text: 'Slotermeer-Noordoost holds the Coronelbuurt, Arondeusbuurt, Meerwaldtbuurt and Dobbebuurt; Osdorp-Midden holds Reimerswaal, the Botteskerkbuurt and the two Zuidwestkwadrant buurten. The district also contains Geuzenveld, Slotervaart, Overtoomse Veld, Osdorp-Oost, De Aker, Sloten and Nieuw Sloten among others, and no figures are invented for them. Placement follows demonstrated ability. A child from the Dobbebuurt and a child from Reimerswaal end up in one group when they are working at one level, and the form never asks which of the two it is.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure, its source, its year, and the claim not made',
      intro: 'One district entry, two wijk pages, one arresting coincidence and a careful refusal to explain it.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The district, from its entry', p: 'Amsterdam Nieuw-West: 159,522 inwoners for 1 January 2021; oppervlakte 32.38 square kilometres; het stadsdeel werd als deelgemeente ingesteld in 2010 en is een samenvoeging van de vroegere stadsdelen Geuzenveld-Slotermeer, Slotervaart en Osdorp; sinds 1 januari 2015 is van Westpoort het gedeelte ten westen van de A10 toegevoegd; na afschaffing van de deelgemeenten als bestuurslaag werd een deel van de taken overgenomen door bestuurscommissies.' },
          { h3: 'The plan and the building', p: 'De basis hiervoor werd gelegd in het Algemeen Uitbreidingsplan uit 1935. De Westelijke Tuinsteden werden in de jaren vijftig en zestig van de 20e eeuw gebouwd. De wijken zijn gebouwd volgens de open bebouwingswijze, met veel groen tussen de bebouwing. Tot de Westelijke Tuinsteden behoren Slotermeer, Geuzenveld, Slotervaart, Overtoomse Veld en Osdorp. In het midden van het gebied ligt de Sloterplas, die gegraven werd voor de zandwinning ten behoeve van de ophoging van de omliggende tuinsteden.' },
          { h3: 'Slotermeer-Noordoost', p: '9,499 residents (2026); 4,510 households averaging 2.1 (2025), 2,305 single-person at 51 percent; ages 1,760, 1,325, 2,975, 2,360 and 1,070; 102 hectares total, 96 land and 5 water; density 9,755; 4,192 dwellings; average value 367,000 euro; 3,060 rented at 73 percent and 1,132 owned at 27; average income 26,300 euro (2024); four buurten.' },
          { h3: 'Osdorp-Midden', p: '15,734 residents (2026); 7,415 households averaging 2.1 (2025), 3,580 single-person at 48 percent; ages 2,780, 2,250, 5,115, 3,555 and 2,040; 112 hectares total, 103 land and 8 water; density 15,218; 6,713 dwellings; average value 397,000 euro; 4,900 rented at 73 percent and 1,813 owned at 27; average income 28,600 euro (2024); four buurten.' },
          { h3: 'The claim this page does not make', p: 'It does not assert why the two tenure shares match. No source read explains it, and two figures agreeing closely is evidence that something common is acting on both, not proof of what that something is. The page states the arithmetic, observes that a common building programme explains it more easily than two independent sets of household decisions, and leaves the question open rather than answering it.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the stadsdeel, the city or any school named here and claims none. The tenure shares of 72.99 percent, the two-wijk total of 25,233 residents and the percentage comparisons between the wijken are this page dividing and subtracting published numbers, and are labelled as arithmetic wherever they appear.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Two neighbourhoods, one tenure split, and nobody who chose it',
      intro: 'A figure that matches to a hundredth of a percentage point, a figure that differs by more than half, and a rule for telling which sort of number you are holding.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Look for the numbers that agree too well', p: '3,060 rented out of 4,192, and 4,900 out of 6,713. Both are 72.99 percent. Two neighbourhoods of different sizes, built in different years, agreeing that closely is not what independent decisions by thousands of households look like. Improbable agreement is a signal, and the thing it signals is usually a shared cause upstream.' },
          { h3: '2. Ask who could have set it', p: 'These are the Westelijke Tuinsteden, built in the 1950s and 1960s to a plan laid down in 1935, in an open building style specified before a brick was laid. A tenure mix in housing built to a programme is part of the programme. Nobody living in either wijk selected 73 percent; it was in the drawings.' },
          { h3: '3. Separate the settings from the outcomes', p: 'Then look at what does not match. Osdorp-Midden is 56 percent denser than Slotermeer-Noordoost on seven percent more land, because more was built on it. That is also a decision, made later and separately, which is why it varies while the tenure mix does not. Almost nothing distinctive in these two columns is a fact about residents.' }
        ] },
        { kind: 'table', caption: 'Which figures were set, and which fell out of the site', head: ['Figure', 'Slotermeer-Noordoost', 'Osdorp-Midden', 'Measured, or chosen?'], rows: [
          ['Share of homes rented', '72.99 percent', '72.99 percent', 'chosen: a housing programme sets its own tenure mix'],
          ['Average household size', '2.1', '2.1', 'largely chosen: dwelling size decides who can fit'],
          ['Dwellings built', '4,192', '6,713', 'chosen, but decided separately for each site'],
          ['People per square kilometre', '9,755', '15,218', 'follows from the dwellings, so also downstream of a decision'],
          ['Average dwelling value', '367,000 euro', '397,000 euro', 'measured: a market outcome, and the two are 8 percent apart'],
          ['Average income per resident', '26,300 euro', '28,600 euro', 'measured: about the people, and again a real difference']
        ] },
        { kind: 'callout', h3: 'Before you explain a number, find out whether anybody chose it', p: 'Data arrives looking uniform. Every column is a number, every number invites an explanation, and nothing in the file marks which values were observed in the world and which were entered into a form by somebody with the authority to decide them. That distinction changes everything about what a figure can tell you. A measured value carries information about the thing it measured. A set value carries information about whoever set it, and about nothing else. The tell is usually improbable agreement or improbable roundness. Two neighbourhoods matching to a hundredth of a percentage point. A distribution that stops dead at 100, or 30, or 5,000. A metric that plateaus at exactly the same level every month. A cohort where everybody has the same start date. In each case the pattern that looks like a finding is the shape of a rule, a quota, a rate limit, a budget cap, a default value or a maximum on a form. The failure this produces is expensive because it is so satisfying: somebody explains why usage plateaued last quarter, and the explanation is fluent and plausible and about customer behaviour, and the real answer is that a limit was set at that number in a configuration file three years ago. So the question goes first, before any explanation is attempted. Was this measured, or was it chosen? If it was chosen, the interesting question is not why the value is what it is but who decided, when, and what would happen if they decided differently.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for telling a measurement from a setting',
      intro: 'Rate limits, quotas, budget caps, form maximums, default values, target thresholds: every one of them produces a pattern in the data that looks exactly like a behaviour. Practised on two neighbourhoods that agree to a hundredth of a percentage point.',
      body: [
        { kind: 'table', caption: 'Sorting the observed from the configured', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Mark every column', 'Label each field as measured, derived or configured before analysing', 'A setting explained as a behaviour', 'A dataset that says what it is'],
          ['Distrust close agreement', 'Treat two independent things matching too well as a signal, not a coincidence', 'A shared cause upstream going unnoticed', 'A specific question about what links them'],
          ['Distrust round edges', 'Look at where a distribution stops, not only where it clusters', 'A limit read as a natural ceiling', 'The rule that made the shape'],
          ['Find the decider', 'For a configured value, name who set it and when', 'A number treated as a fact of nature', 'Somebody to ask, and a date to check against'],
          ['Ask what a change would do', 'For any setting, ask what happens if it moves', 'Effort spent explaining an arbitrary value', 'A lever, which is worth more than an explanation']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A game where nobody can score more than ten. The children chart everyone\'s scores, notice the wall at ten, and work out that the most obvious pattern in their data is a rule of the game rather than anything about how well anybody played.' },
          { h3: 'For teenagers', p: 'The two wijken in Python, with every field tagged as measured or configured, and a summary that refuses to offer an explanation for a configured one. The stretch: find two columns that agree more closely than chance would allow, and write the two candidate causes without deciding between them.' },
          { h3: 'For adults', p: 'A real metric from work that has flattened out. Adults very often find a cap, a quota or a default sitting exactly at the plateau, and a well-received explanation that was about customers all along.' }
        ] },
        { kind: 'p', text: 'The district population, area, formation, governance, the Westpoort addition, the 1935 plan, the open building style, the list of garden cities and the origin of the Sloterplas all come from the stadsdeel entry, with the population dated 1 January 2021. Every population, household, age, area, density, dwelling, value, tenure and income figure comes from the national statistics office page for the wijk named beside it, with 2026 populations, 2025 household and housing figures and 2024 incomes. The tenure shares of 72.99 percent, the comparisons of 66, 60, 56, 8 and 9 percent and the two-wijk total of 25,233 are this page dividing published numbers, and are labelled as arithmetic where they appear.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a game nobody can score eleven in to a dataset that labels its own settings',
    intro: 'The starting rung is decided in the free hour by what the learner can already do, and never by which of the garden cities the address is in.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Why does everyone stop at ten?', p: 'Children find the rule of the game hiding inside their own chart.', courses: ['kids-coding-blocks-masterclass', 'minecraft-coding-for-kids-course'] },
      { band: 'Ages 11 to 13', h3: 'Measured, or entered by somebody?', p: 'Learners sort the columns of a small dataset into things found and things set.', courses: ['python-ai-kids-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 14 to 18', h3: 'Agreement that is too good', p: 'Teenagers hunt for values that match more closely than chance permits and say what that implies.', courses: ['ai-ml-masterclass-teens', 'complete-app-development-masterclass-for-teens'] },
      { band: 'Ages 18 to 67', h3: 'The plateau with a cap under it', p: 'Adults take a flattened metric from work and go looking for the setting that flattened it.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will explain why these two neighbourhoods rent at the same rate. Why should a teenager here refuse the explanation?',
    intro: 'Because the agreement is too exact to have come from people, and every explanation about people is therefore wrong before it starts.',
    p1: 'Ask a model why two Amsterdam neighbourhoods both rent at 73 percent and you will get an answer about affordability, about who moves where, about the housing market in the west of the city. It will be coherent and it will be entirely beside the point, because two independent populations do not land on 72.99 percent twice. The exactness is the evidence, and the exactness is the one thing a fluent explanation has no reason to dwell on. The model is not failing at reasoning. It is answering a question that assumed the number described behaviour.',
    p2: 'So the learner practises the question that comes first: was this measured or was it chosen. Then they build the version that enforces it, tagging every field as observed or configured and refusing to offer an explanation for a configured one. A thirteen-year-old in Osdorp who has caught a housing programme hiding inside a percentage will be the person at twenty-eight who checks the config file before writing three paragraphs about customer behaviour. Models will keep producing the explanation, immediately and well, because that is what the question sounded like it wanted. Knowing that the number was never a question about people stays a person\'s job.',
    closer: 'The case for a child in Nieuw-West learning to code in 2026 is therefore not about housing policy. It is that a great deal of what looks like evidence in adult working life is the shape of somebody\'s earlier decision, that improbable agreement and round edges are how you spot it, and that a district built to a 1935 drawing around a lake dug for its own sand makes the lesson impossible to miss.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes across the garden cities',
    intro: 'Nieuw-West is spread out by design, with green between the blocks and real distances between one part and the next, and it has more children in it than anywhere else in this city that this series has measured.',
    cells: [
      { h3: 'Nothing to cross the district for', p: 'The lesson runs at the kitchen table in Geuzenveld, Osdorp or Slotervaart at one fixed hour each week, which matters more here than in the older districts because the distances are genuine.' },
      { h3: 'One language for the lesson, another for the paperwork', p: 'The teaching happens in English. Four Dutch words survive it, groep and havo and vwo and profielkeuze, kept because a child already knows them from their own timetable and an English version would only need translating back.' },
      { h3: 'Three things exist by the end of the first hour', p: 'A level, established by watching the learner work rather than by asking. A course chosen because that level points at it. And an hour in the week that will not move. Money is not mentioned while any of that is happening.' },
      { h3: 'Ability decides, the tuinstad does not', p: 'Two learners at the same stage work together whichever garden city they live in, and two at different stages work apart, which is the whole reason the groups are worth joining.' },
      { h3: 'Two lessons every week, around the regio Noord calendar', p: 'The same slot twice a week, which usually comes to eight lessons in a month. School holidays here follow regio Noord, and any week a family already knows it will be away is written into the schedule at the start rather than negotiated later.' },
      { h3: 'The teacher sits in India, and the gap changes twice a year', p: 'Three and a half hours ahead through the summer and four and a half through the winter, all of that movement coming from the Dutch side. Anything from the end of the school day to mid-evening lands inside both working days, and so does any hour of the weekend.' }
    ],
    spec: { title: 'The largest concentration of school-age children on any Amsterdam page in this series', p: 'Under-fifteens are 19 percent of Slotermeer-Noordoost and 18 percent of Osdorp-Midden, which is 1,760 and 2,780 children, against 4.38 percent in the least childlike wijk of the centre. Average household size is 2.1 in both. This is where the city\'s families are, and it is also where a specialist class at one particular level is least likely to exist locally, because a full population of children is not the same thing as a full group of eleven-year-olds ready for the same lesson. Groups here are assembled on ability from across the world, at every age up to sixty-seven.' }
  },

  fees: {
    h2: 'The fee, in dollars, the same in every tuinstad',
    intro: 'Written on the page rather than kept for a call.',
    first: 'A whole lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'One international rate applies and it is quoted in dollars, with no euro edition, so an address in Geuzenveld is charged exactly what an address in Slotervaart is. Nothing is paid until the free lesson has settled a course and an hour, and payment is then arranged over WhatsApp. Pausing, switching plan and missing a week are all set out on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, printed as the people who left them wrote them',

  book: {
    h2: 'Send us the level, not the tuinstad',
    intro: 'The first task might be a game nobody can score eleven in, a dataset whose columns are tagged measured or configured, or a metric at work that flattened out the month somebody set a cap.',
    success: 'Thank you. Your Amsterdam Nieuw-West class request has been sent.'
  },

  faq: {
    h2: 'Amsterdam Nieuw-West coding class questions',
    intro: 'The district, its garden cities, one very exact coincidence, the teaching and the terms.',
    items: [
      { q: 'Why do two neighbourhoods here have exactly the same share of rented homes?', a: 'Slotermeer-Noordoost has 3,060 rented of 4,192 and Osdorp-Midden 4,900 of 6,713, which work out at 72.99 percent in both cases and are published as 73 percent. Two separate populations do not land on the same figure to a hundredth of a percentage point by chance, so something common is acting on both. These are the Westelijke Tuinsteden, built in the 1950s and 1960s to a plan laid down in 1935, and a housing programme sets its own tenure mix. This page does not assert that as the cause, because no source read states it, but it is a far easier explanation than thousands of independent household decisions.' },
      { q: 'Is the Sloterplas a natural lake?', a: 'No. The entry records that it lies in the middle of the district and was dug for sand extraction, in order to raise the ground of the surrounding garden cities. The largest piece of water in Nieuw-West is the hole left by the material the houses are standing on, which makes it one more thing here that was decided rather than found.' },
      { q: 'Which neighbourhoods are in Amsterdam Nieuw-West?', a: 'The Westelijke Tuinsteden are Slotermeer, Geuzenveld, Slotervaart, Overtoomse Veld and Osdorp, and the district also includes Osdorp-Oost, De Aker, Sloten and Nieuw Sloten among others. Full published figures appear on this page for Slotermeer-Noordoost and Osdorp-Midden, which hold 25,233 residents between them, and no numbers are invented for the rest.' },
      { q: 'When was the district created?', a: 'It was established as a deelgemeente in 2010 by joining Geuzenveld-Slotermeer, Slotervaart and Osdorp, and since 1 January 2015 it has also held the part of Westpoort west of the A10. After the deelgemeenten were abolished as a layer of government, part of their work passed to bestuurscommissies. The district entry gives 159,522 residents for 1 January 2021 and an area of 32.38 square kilometres.' },
      { q: 'Are the two neighbourhoods equally crowded?', a: 'Not at all, and that is the interesting half. Osdorp-Midden is published at 15,218 people to the square kilometre and Slotermeer-Noordoost at 9,755, so one is 56 percent denser than the other on seven percent more land. What differs between them is how many homes were built, 6,713 against 4,192. The figures that match were set by a programme, and the figures that differ were set later and separately.' },
      { q: 'Is the class taught in Dutch?', a: 'It is not. Teaching is in English throughout. The exception is deliberate and narrow: school vocabulary stays in Dutch, so a teacher says groep, havo, vwo or profielkeuze rather than reaching for an English equivalent a child would not recognise. No course exists in a Dutch edition.' },
      { q: 'What hours suit a family in Nieuw-West?', a: 'Summer puts three and a half hours between the two ends and winter puts four and a half, because only the Dutch clock moves. What that leaves in practice is the stretch from the end of the school day to mid-evening, plus any hour of Saturday or Sunday. The recurring slot is fixed during the free lesson and then stays where it is.' },
      { q: 'Is there a Modern Age Coders classroom in Amsterdam Nieuw-West?', a: 'No, and none is claimed in Osdorp, elsewhere in Amsterdam or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Amsterdam Nieuw-West coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or neighbourhood. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Amsterdam and beyond',
    h2: 'East to the old city, and out to the province',
    html: 'East of the ring is <a class="cg-inline-link" href="/coding-classes-in-amsterdam-west">Amsterdam-West</a>, whose page follows a label that outlived the buildings it described, and beyond it <a class="cg-inline-link" href="/coding-classes-in-amsterdam-centrum">Amsterdam-Centrum</a>, less crowded on paper than every neighbourhood inside it. South is <a class="cg-inline-link" href="/coding-classes-in-amsterdam-zuid">Amsterdam-Zuid</a> and its two disagreeing registers. The city page, <a class="cg-inline-link" href="/coding-classes-in-amsterdam">coding classes in Amsterdam</a>, carries the picture for all eight districts, and the city sits inside <a class="cg-inline-link" href="/coding-classes-in-noord-holland">Noord-Holland</a>. Everything descends from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and a learner who wants trained models rather than running programs should begin at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Settle this on WhatsApp'
  },

  footerHeading: 'Amsterdam and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-amsterdam', label: 'Amsterdam' },
    { href: '/coding-classes-in-amsterdam-west', label: 'Amsterdam-West' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-anw .cg-hero-grid { align-items: end; gap: clamp(1.6rem, 4.1vw, 3.1rem); }
.cg-root.cg-anw .cg-hero h1 { font-weight: 500; letter-spacing: -0.007em; line-height: 1.17; }
.cg-root.cg-anw .cg-capsule { border-left-width: 8px; border-left-style: solid; padding-left: 1.7rem; }
.cg-root.cg-anw .cg-eyebrow { letter-spacing: 0.115em; font-weight: 600; }
.cg-root.cg-anw .cg-section-head h2 { max-width: 40ch; }
.cg-root.cg-anw .cg-grid-3 { gap: clamp(1.3rem, 2.7vw, 2.1rem); }
.cg-root.cg-anw .cg-card { border-radius: 4px; border-left: 3px solid var(--cg-accent-soft); }
.cg-root.cg-anw .cg-table th { letter-spacing: 0.03em; }
.cg-root.cg-anw .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-anw .cg-ladder-col { border-top: 6px solid var(--cg-accent-soft); padding-top: 1.05rem; }
`,

  dossier: {
    curriculumAuthority: 'Stadsdeel Amsterdam Nieuw-West, Noord-Holland: established as a deelgemeente in 2010 by merging Geuzenveld-Slotermeer, Slotervaart and Osdorp, with the part of Westpoort west of the A10 added on 1 January 2015; its entry publishes 159,522 residents for 1 January 2021, five years older than the wijk figures, so no district density or share is computed here, and an area of 32.38 km2. The Westelijke Tuinsteden, Slotermeer, Geuzenveld, Slotervaart, Overtoomse Veld and Osdorp, were built in the 1950s and 1960s on the basis of the Algemeen Uitbreidingsplan of 1935, in the open building style with much green between the blocks; the Sloterplas was dug for sand extraction to raise the surrounding garden cities. Two wijken carry full figures: Slotermeer-Noordoost 9,499 residents, 4,192 dwellings, density 9,755, income 26,300 euro; Osdorp-Midden 15,734 residents, 6,713 dwellings, density 15,218, income 28,600 euro. Under-fifteens are 19 and 18 percent, the highest child shares on any Amsterdam page in this series. Regio Noord holidays. The district page argues from settings versus measurements; Amsterdam-Centrum owns aggregates over ground, Noord the rounding bound, Oost self-selection, Zuid the two registers, West the identifier that outlived its referent.',
    localProject: 'Before you explain a number, find out whether anybody chose it. Slotermeer-Noordoost has 3,060 rented dwellings of 4,192 and Osdorp-Midden 4,900 of 6,713, which are 72.99 percent in both cases and are published as 73 percent, with owned shares of 27 percent in both. Two neighbourhoods 66 percent apart in population, built at different times, agreeing to a hundredth of a percentage point is not what independent household decisions produce, and these are the Westelijke Tuinsteden, built in the 1950s and 1960s to the Algemeen Uitbreidingsplan of 1935 in a specified open building style. A housing programme sets its own tenure mix, so the matching figure was decided rather than discovered. The contrast within the same pair proves the point: density is 9,755 against 15,218, 56 percent apart on seven percent more land, because 4,192 dwellings were built on one site and 6,713 on the other, a decision made separately and later. Average dwelling value and average income, the two genuinely measured columns, differ by 8 and 9 percent. Even the Sloterplas was dug for sand to raise the ground the houses stand on. The tells for a configured value are improbable agreement and improbable roundness: a distribution that stops dead, a metric that plateaus at one level, a cohort sharing a start date. Distinct from Goodhart, which is a measure corrupted by becoming a target, and from the confounded proxy (Deventer), where an outside condition moves a real measurement: here the value was never a measurement at all. The page states the arithmetic and declines to assert the cause, because close agreement evidences a shared cause without identifying it.',
    requiredMentions: [
      '159,522',
      '9,499',
      '4,510',
      '4,192',
      '9,755',
      '367,000',
      '26,300',
      '15,734',
      '7,415',
      '6,713',
      '15,218',
      '28,600',
      'Sloterplas',
      'Osdorp-Midden'
    ],
    sources: [
      { claim: 'Amsterdam Nieuw-West: 159.522 inwoners (1 januari 2021); oppervlakte 32,38 km2; het stadsdeel werd als deelgemeente ingesteld in 2010 en is een samenvoeging van de vroegere stadsdelen Geuzenveld-Slotermeer, Slotervaart en Osdorp; sinds 1 januari 2015 is van Westpoort het gedeelte ten westen van de A10 (Ringweg Amsterdam) toegevoegd aan Stadsdeel Nieuw-West; na afschaffing van de deelgemeenten als bestuurslaag werd een deel van de taken van de Amsterdamse stadsdelen overgenomen door bestuurscommissies; de basis hiervoor werd gelegd in het Algemeen Uitbreidingsplan uit 1935; de Westelijke Tuinsteden werden in de jaren vijftig en zestig van de 20e eeuw gebouwd; de wijken zijn gebouwd volgens de open bebouwingswijze, met veel groen tussen de bebouwing; tot de Westelijke Tuinsteden behoren Slotermeer, Geuzenveld, Slotervaart, Overtoomse Veld en Osdorp; in het midden van het gebied ligt de Sloterplas, die gegraven werd voor de zandwinning ten behoeve van de ophoging van de omliggende tuinsteden.', url: 'https://nl.wikipedia.org/wiki/Amsterdam_Nieuw-West' },
      { claim: 'Wijk Slotermeer-Noordoost, Amsterdam: 9,499 inwoners (2026); 4,510 huishoudens averaging 2.1 (2025), 2,305 eenpersoonshuishoudens at 51 percent and 2,205 meerpersoonshuishoudens at 49; ages 1,760 (0 to 15, 19 percent), 1,325 (15 to 25, 14 percent), 2,975 (25 to 45, 31 percent), 2,360 (45 to 65, 25 percent), 1,070 (65+, 11 percent); 102 hectare total, 96 land, 5 water; bevolkingsdichtheid 9,755 per km2; woningvoorraad 4,192 (2025); average WOZ 367,000 euro (2025); 3,060 huurwoningen (73 percent) and 1,132 koopwoningen (27 percent); average income 26,300 euro (2024); 4 buurten: Coronelbuurt, Arondeusbuurt, Meerwaldtbuurt, Dobbebuurt.', url: 'https://allecijfers.nl/wijk/slotermeer-noordoost-amsterdam/' },
      { claim: 'Wijk Osdorp-Midden, Amsterdam: 15,734 inwoners (2026); 7,415 huishoudens averaging 2.1 (2025), 3,580 eenpersoonshuishoudens at 48 percent and 3,835 meerpersoonshuishoudens at 52; ages 2,780 (0 to 15, 18 percent), 2,250 (15 to 25, 14 percent), 5,115 (25 to 45, 33 percent), 3,555 (45 to 65, 23 percent), 2,040 (65+, 13 percent); 112 hectare total, 103 land, 8 water (2025); bevolkingsdichtheid 15,218 per km2 (2025); woningvoorraad 6,713 (2025); average WOZ 397,000 euro (2025); 4,900 huurwoningen (73 percent) and 1,813 koopwoningen (27 percent); average income 28,600 euro (2024); 4 buurten: Reimerswaal, Botteskerkbuurt, Zuidwestkwadrant-Noord, Zuidwestkwadrant-Zuid.', url: 'https://allecijfers.nl/wijk/osdorp-midden-amsterdam/' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any assertion of the cause of the matching tenure shares. Close agreement is evidence that something common acts on both, not proof of what it is, and no source read states the reason.',
      'A district density, share or average computed from the 2021 district population against 2025 or 2026 wijk figures. Mixing vintages is the Apeldoorn page\'s argument.',
      'Any figure offered as a Nieuw-West average. Two wijken out of the many in this district cannot produce one.',
      'Any comparison of this district\'s density with another district\'s. The district areas and populations across the Amsterdam entries are on different bases and different dates, and the land-versus-total question belongs to the Amsterdam-Centrum page.',
      'Anything made of the hectare figures being one short of their own total. Amsterdam-Noord already carries the argument about rounded components.',
      'Figures for Geuzenveld, Slotervaart, Overtoomse Veld, Osdorp-Oost, De Aker, Sloten or Nieuw Sloten. They are named and given no numbers.',
      'Anything the Amsterdam city page owns, including the doorstroomtoets rates, the school counts and the 2055 district projections.'
    ]
  }
};
