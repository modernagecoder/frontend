'use strict';
// IJsselmonde: 63,475 residents in four buurten on the south-east, with
// 11,115 residents under fifteen and 11,185 aged sixty-five and over.
// Spine: those two bands are not the same width and one has no upper end at
// all, so "as many pensioners as children" is a fact about the bands.

module.exports = {
  slug: 'coding-classes-in-ijsselmonde',
  code: 'ijs',
  accent: '#006C11',
  accentRationale: 'IJsselmonde: a strong polder green for the Zuiderpark side and the open ground the post-war estates were laid out on, the best-separated tone remaining and clearly brighter than the dock green and olive already carrying two other Rotterdam pages',
  pageType: 'district',
  place: {
    name: 'IJsselmonde',
    eyebrow: 'IJsselmonde, Rotterdam',
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
  routeLabel: 'IJsselmonde, Rotterdam, Netherlands',
  title: 'Coding Classes in IJsselmonde, Rotterdam | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in IJsselmonde for ages 6 to 67, across Beverwaard, Lombardijen and Groot IJsselmonde. First lesson free.',
  ogDescription: 'Live online coding, Python and AI for families in IJsselmonde, on a page about age bands that are not the same width and one that has no upper end.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'ai-ml-masterclass-teens',
  verifiedOn: '9 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for IJsselmonde Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across the four buurten of IJsselmonde, taught in English.'
  },

  h1: 'Coding classes in IJsselmonde, which has as many pensioners as children only because one age band never ends',
  capsuleQ: 'What are the best coding classes in IJsselmonde?',
  capsule: 'Coding classes in IJsselmonde reach 63,475 residents (1 January 2026) on 1,179 hectares of land at 5,376 people to the square kilometre, in 29,930 households averaging 2.1 people. The district publishes 11,115 residents under fifteen and 11,185 aged sixty-five and over, seventy apart, which reads as a place with as many pensioners as children. The first of those bands covers fifteen years and the second covers as many as anybody lives, so the two counts were never comparable. Modern Age Coders teaches live online in English across Beverwaard, Lombardijen and Groot IJsselmonde, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'IJsselmonde has 11,115 residents under fifteen and 11,185 aged sixty-five or over. Both are eighteen percent, seventy people apart, and it is a striking sentence: as many pensioners as children. It is also an artefact. The first band is fifteen years wide. The second has no upper end at all. Per year of age the children come to about 741 and the pensioners cannot be worked out, because nobody has said where the band stops. The symmetry belongs to the table, not to the district.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in IJsselmonde.',

  picks: {
    eyebrow: 'Course picks for IJsselmonde',
    h2: 'Four courses for eleven thousand children across four large buurten',
    intro: 'A groep 5 child in Beverwaard with a games console and no idea anyone makes them, a teenager in Lombardijen who wants to know what a model does under the surface, a student in Groot IJsselmonde who needs Python properly rather than as one module, and an adult in Oud IJsselmonde who reports a number every month and has begun to distrust it: four doors, first hour free on each.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Real typed Python, drawings that follow orders and a first program that spots a rule, taught in English to the groep 5 to 8 child in any of the four buurten.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'A model built, trained and deliberately broken, for the teenager who has used plenty of them and never seen inside one.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'College and adult', note: 'Python from an empty file to work that runs unattended, for the student who met it once in a module and wants the rest of it.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Reading a table honestly, including what a band of numbers is hiding, for anybody who passes figures to somebody more senior.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'IJsselmonde today',
      h2: 'Sixty-three thousand people in only four neighbourhoods',
      intro: 'IJsselmonde holds 63,475 residents across 1,309 hectares, of which 1,179 are land and 130 water, at a published 5,376 people to the square kilometre. It sits on the south-east of the city and is divided into just four buurten, the coarsest subdivision of any district in this series. Households here average 2.1 people, the largest of the Rotterdam districts measured.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Four buurten and nothing smaller', p: 'Oud IJsselmonde, Beverwaard, Groot IJsselmonde and Lombardijen. Four pieces for sixty-three thousand people means about sixteen thousand to a buurt, roughly twice the size of a buurt in the districts next door, so anybody hoping to look inside this district finds less detail waiting than they would elsewhere.' },
          { h3: 'The most owner-occupied of the five', p: '11,163 of the 29,377 dwellings are owner-occupied, 38 percent, the highest share of the five Rotterdam districts this series has measured, and 18,214 are rented. Average dwelling value is 267,000 euro and average income 27,800 euro per resident for 2024.' },
          { h3: 'Two education figures that count different people', p: '26 primary establishments teach 5,796 pupils and 7 secondary establishments teach 3,550. Separately, 1,340 residents are enrolled in applied higher education and 460 at university level, the lowest university figure of the districts read here. No sum of the two kinds appears anywhere on this page.' }
        ] },
        { kind: 'spec', title: 'The sentence this page is about', p: 'The published age table gives 11,115 residents under fifteen and 11,185 aged sixty-five and over. Both round to eighteen percent and they sit seventy people apart, which invites the observation that IJsselmonde has as many pensioners as children. That sentence is true of the two numbers and false of the district, because the two bands are not measuring comparable stretches of a human life, and the rest of this page works out by how much.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Five bands, four widths, and one with no end',
      intro: 'These are the five age groups the statistics office publishes for every district in the country. Reading their counts against each other assumes they cover comparable spans of life, and four different widths say otherwise.',
      body: [
        { kind: 'table', caption: 'The published bands, and what they look like once the width is divided out', head: ['Band', 'Residents', 'Years it covers', 'Residents per year of age'], rows: [
          ['0 to 15', '11,115', '15', 'about 741'],
          ['15 to 25', '7,525', '10', 'about 753'],
          ['25 to 45', '18,505', '20', 'about 925'],
          ['45 to 65', '15,140', '20', 'about 757'],
          ['65 and over', '11,185', 'no upper end is given', 'not computable'],
          ['What changes', 'the largest count is 25 to 45', 'because it is a twenty-year band', 'per year it leads by a quarter, not by two thirds']
        ] },
        { kind: 'p', text: 'The counts say the 25 to 45 group is two thirds larger than the under-fifteens, 18,505 against 11,115. Per year of age the gap is about 925 against 741, roughly a quarter. And the top band cannot be put on this footing at all: if it were assumed to run to ninety-five it would give about 373 residents per year of age, half the children\'s rate, but nothing published says where it stops and this page does not pretend to know. Every per-year figure here is arithmetic on the published counts, not a published figure.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure, its source, its year, and the division this page performs',
      intro: 'One district row in full, and the small piece of arithmetic that turns five counts into something comparable.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'IJsselmonde', p: '63,475 residents (2026); 29,930 households averaging 2.1 (2025), 13,085 single-person at 44 percent; ages 11,115 under fifteen at 18 percent, 7,525 at 12 percent, 18,505 at 29 percent, 15,140 at 24 percent and 11,185 aged sixty-five and over at 18 percent; 1,309 hectares total, 1,179 land and 130 water; density 5,376; 29,377 dwellings; average value 267,000 euro; 18,214 rented at 62 percent and 11,163 owned at 38; income 27,800 euro (2024); 1,340 residents in applied higher education and 460 at university; 26 primary establishments with 5,796 pupils and 7 secondary with 3,550; four buurten.' },
          { h3: 'Where the band widths come from', p: 'The office publishes the same five bands for every municipality and district: 0 to 15, 15 to 25, 25 to 45, 45 to 65, and 65 and over. The first four span fifteen, ten, twenty and twenty years. The fifth has a floor and no ceiling. Those widths are not stated as a caveat anywhere; they are simply the labels on the columns.' },
          { h3: 'The division', p: 'Dividing each count by the number of years its band covers gives about 741, 753, 925 and 757 residents per year of age for the first four bands. The fifth cannot be divided, because dividing needs a width. Every one of those four figures is this page working on published counts.' },
          { h3: 'What an assumed ceiling would give', p: 'If the top band were treated as running from sixty-five to ninety-five, thirty years, it would come to about 373 residents per year of age, which is half the rate of the under-fifteens. That number is printed only to show the scale of what the missing ceiling hides. Nothing read here supports choosing ninety-five or any other figure.' },
          { h3: 'What is not claimed', p: 'No statement that IJsselmonde is ageing, or is not. No comparison of its age structure with another district on the strength of these bands, since the same widths distort every district in the same direction and a comparison of like with like would need the underlying single-year figures, which were not read.' }
        ] },
        { kind: 'p', text: 'This page has no connection to the gebied, to the city, or to any school inside either, and asserts none. What is quoted comes from the statistics office page for the wijk. The per-year figures of about 741, 753, 925, 757 and the hypothetical 373 are calculated here and are marked as such wherever they appear.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'As many pensioners as children, and a band with no end',
      intro: 'Two counts seventy apart, five bands of four different widths, and a headline that survives only as long as nobody divides.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Check the widths before comparing the counts', p: 'A count in a band is a count of people over a stretch of years. Comparing two counts compares two stretches, and unless the stretches are equal the comparison is partly about the labels. Here the under-fifteens get fifteen years and the twenty-five to forty-fives get twenty, and the second band leads by two thirds on counts and by a quarter per year.' },
          { h3: '2. Notice which band cannot be fixed', p: 'The other four can be put on a common footing by dividing. The top band cannot, because it has no upper end. That is not an oversight in the data; it is how age is published everywhere, because the alternative is a band with very few people in it. But it means the oldest group can never be compared with any other on equal terms.' },
          { h3: '3. Rewrite the headline honestly', p: 'As many pensioners as children becomes: the district holds 11,115 people in the first fifteen years of life and 11,185 in the whole of life after sixty-five. That is duller, longer and true, and it no longer suggests a balance that the underlying population may not have at all.' }
        ] },
        { kind: 'table', caption: 'What the same data supports, and what it does not', head: ['Claim', 'Is it supported?', 'Why', 'What would settle it'], rows: [
          ['IJsselmonde has 11,115 residents under fifteen', 'yes', 'a published count in a defined band', 'nothing further'],
          ['It has as many pensioners as children', 'no', 'the bands cover very different spans of life', 'single-year age data'],
          ['The 25 to 45 group is the largest', 'yes, as a count', 'it is, and it is also the widest band', 'per year of age, where it leads by a quarter'],
          ['The district is ageing', 'no', 'a single snapshot cannot show a direction', 'the same bands across several years'],
          ['Its age profile differs from another district', 'not from these bands', 'the same distortion applies to both', 'single-year data for both']
        ] },
        { kind: 'callout', h3: 'A count inside a band is a count per year of age multiplied by the width of the band', p: 'Published data almost always arrives in buckets, because a table with a hundred rows for a hundred ages is unreadable and because small counts have to be grouped to protect the people in them. The grouping is sensible and the trouble starts the moment somebody compares one bucket with another without looking at how wide each one is. A twenty-year band will beat a ten-year band on almost any population, and that tells you about the bands. The version that reaches a headline is always the count, because the count is the number printed. There is a second problem underneath it, and it has no clean solution: the last bucket is usually open. Sixty-five and over, or a hundred thousand pounds and above, or ten years or longer. An open bucket has no width, so it can never be normalised, and any comparison involving it is a comparison of a defined range with an undefined one. The habit worth carrying is short. Before comparing two buckets, divide each count by its width and see whether the ordering survives. If one of the buckets is open, say plainly that it cannot be put on the same footing, and resist every temptation to assume a ceiling, because the assumption will be doing all the work in whatever conclusion follows.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for data that arrives in buckets',
      intro: 'Age bands, income brackets, tenure lengths, response-time ranges, order-value tiers: all bucketed, rarely evenly, and the last one is usually open. Practised on a district where two bands seventy apart tell a story that dividing removes.',
      body: [
        { kind: 'table', caption: 'Reading a bucketed table', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Write the widths down', 'Put the span of each bucket beside its count before reading anything', 'A wide bucket mistaken for a large group', 'A table you can actually compare across'],
          ['Divide by the width', 'Convert every closed bucket to a per-unit rate', 'A ranking that reflects the labels', 'The ordering that survives normalisation'],
          ['Flag the open bucket', 'Mark the unbounded one as not comparable, and leave it there', 'A ceiling assumed and then forgotten', 'An honest gap rather than a fabricated rate'],
          ['Never compare across widths', 'Refuse any sentence setting a narrow bucket against a wide one', 'Headlines the buckets manufactured', 'Claims that hold when somebody checks'],
          ['Ask for the raw distribution', 'Where a decision depends on it, request the unbucketed data', 'A permanent limit accepted as inevitable', 'Sometimes, the answer']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Sort the class by height into two groups, one covering ten centimetres and one covering thirty. The children notice the second group is bigger, work out why, and rebuild the comparison so it means something.' },
          { h3: 'For teenagers', p: 'The five bands in Python, with a width attached to each and the top one marked as open, and a comparison function that refuses to run between buckets of different widths until the counts are normalised. The stretch: write the two headlines these figures support, one honest and one not, and explain what separates them.' },
          { h3: 'For adults', p: 'A bucketed table from work: salary bands, response times, order values, tenure. Adults reliably find uneven widths, an open top bucket, and a conclusion drawn by comparing two of them directly.' }
        ] },
        { kind: 'p', text: 'The population, household, age, area, density, dwelling, value, tenure, income, student, establishment and pupil figures all come from the statistics office page for this wijk, with a 2026 population, 2025 household and housing figures and a 2024 income. The band widths of fifteen, ten, twenty and twenty years are read off the published labels. The per-year figures of about 741, 753, 925 and 757, and the hypothetical 373 for an assumed ceiling of ninety-five, are computed here and labelled as computed.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From sorting a class by height to a comparison that checks the bucket widths first',
    intro: 'The rung comes out of the free hour and what the learner can already do, and never out of which of the four buurten the address falls in.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Why is that group bigger?', p: 'Children find the answer is the size of the group, not the number of people.', courses: ['kids-coding-blocks-masterclass', 'roblox-game-coding-for-kids-lua-course'] },
      { band: 'Ages 11 to 13', h3: 'How wide is this bucket?', p: 'Learners write the span beside every count before they compare any two.', courses: ['python-ai-kids-masterclass', 'statistics-probability-maths-course'] },
      { band: 'Ages 14 to 18', h3: 'Normalise, or refuse', p: 'Teenagers build comparisons that divide by width and stop dead at an open bucket.', courses: ['ai-ml-masterclass-teens', 'mysql-mastery-for-teens'] },
      { band: 'Ages 18 to 67', h3: 'The salary band on the slide', p: 'Adults take a bucketed table from work and find the uneven widths inside it.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will tell you IJsselmonde has as many pensioners as children. Why should a teenager here ask how wide the bands are?',
    intro: 'Because 11,115 and 11,185 really are seventy apart, and the sentence they support is still wrong.',
    p1: 'Give a model the published age table and ask what stands out, and the near-equality of the first and last rows is the most quotable thing in it. The reply will be accurate about the numbers and misleading about the place, because it will not stop to notice that one row covers fifteen years of life and the other covers everything after sixty-five. Nothing in the table says so. The widths are in the labels, and labels are exactly what a summary skims.',
    p2: 'So the learner practises putting the width beside the count before reading anything, and then writes the version that enforces it: a width attached to every bucket, an open one flagged as incomparable, and a function that will not compare two buckets of different spans. A fourteen-year-old in Lombardijen who has taken a headline apart this way will be the person at thirty who asks how wide the salary bands are before agreeing where the staff are clustered. Models will keep reading the counts, which is what is printed. Reading the labels stays a person\'s job.',
    closer: 'The case for a child in IJsselmonde learning to code in 2026 is therefore not about demography. It is that almost every table an adult is handed has been bucketed by somebody else, that the buckets are rarely equal and the last one is usually open, and that a district with 11,115 children and 11,185 pensioners shows in two rows how much that can distort.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes across the south-east of the city',
    intro: 'IJsselmonde is spread out, mostly post-war, and separated from the rest of Rotterdam by water and motorway. Its households are the largest of the districts here, which usually means the flat is full.',
    cells: [
      { h3: 'A weekly hour that arrives instead of being travelled to', p: 'The class happens in Beverwaard, Lombardijen or Oud IJsselmonde at the same time each week, which removes the crossing and the evening journey in one move.' },
      { h3: 'What is taught in English and what is not', p: 'Everything except four words. Groep, havo, vwo and profielkeuze are said in Dutch exactly as the school writes them, because those are the terms a child already recognises.' },
      { h3: 'A first lesson with nothing attached to it', p: 'The teacher gives the learner something real to do and watches how it goes. That fixes a level, the level fixes a course, and a weekly hour is agreed. No payment details are taken at any point.' },
      { h3: 'The group is a level, not a place', p: 'Five to ten learners, all working at the same stage, from wherever in the world that stage happens to be populated this month. Two children in the same street at different stages are in different groups.' },
      { h3: 'Two lessons a week, and the breaks are known', p: 'Around eight lessons a month. Zuid-Holland follows the regio Midden holiday calendar, published far ahead, so the weeks off are in the plan from the first day rather than sprung later.' },
      { h3: 'India does not change its clocks', p: 'The Netherlands does, twice a year, so the teacher is three and a half hours ahead for part of the year and four and a half for the rest. The hours that work are unaffected either way.' }
    ],
    spec: { title: 'Eleven thousand children, and only four places to look for them', p: '11,115 residents are under fifteen, 18 percent, in a district divided into just four buurten averaging about sixteen thousand people each. There are plenty of children in IJsselmonde and very little published detail about where they are, and neither fact helps a family trying to find a group at one specific level in one specific subject nearby. A group assembled on ability from across the world does not depend on either, and it runs from age 6 up to 67.' }
  },

  fees: {
    h2: 'The fee, in dollars, in all four buurten',
    intro: 'Printed here instead of held for a call.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'A single international rate, in dollars, with no euro edition, so an address in Beverwaard is charged what one in Lombardijen is. Nothing is paid until the free lesson has settled a course and an hour, and payment follows over WhatsApp. Pausing, switching plan and missing a week are all on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, reproduced as the people who left them wrote them',

  book: {
    h2: 'Send us the level, not the buurt',
    intro: 'The first task might be a class sorted into two height groups of unequal size, a bucketed table that refuses to compare across widths, or a salary band chart at work with an open top and nobody asking about it.',
    success: 'Thank you. Your IJsselmonde class request has been sent.'
  },

  faq: {
    h2: 'IJsselmonde coding class questions',
    intro: 'The district, its four buurten, one misleading symmetry, the teaching and the terms.',
    items: [
      { q: 'Does IJsselmonde really have as many pensioners as children?', a: 'It has 11,115 residents under fifteen and 11,185 aged sixty-five and over, which is seventy apart and both eighteen percent. The sentence is still wrong, because the first band covers fifteen years of life and the second covers everything after sixty-five with no upper end given. Per year of age the children come to about 741; the top band cannot be worked out at all without assuming where it stops. The symmetry is a property of the bands, not of the district.' },
      { q: 'Which is the largest age group here?', a: 'By count, the 25 to 45 band at 18,505, which is two thirds larger than the under-fifteens. Per year of age it is about 925 against 741, a lead of roughly a quarter rather than two thirds. The difference is that the 25 to 45 band is twenty years wide and the 0 to 15 band is fifteen. Both statements are true and they support very different sentences.' },
      { q: 'Which neighbourhoods are in IJsselmonde?', a: 'Only four: Oud IJsselmonde, Beverwaard, Groot IJsselmonde and Lombardijen. That is the coarsest subdivision of any district in this series, about sixteen thousand people to a buurt, so there is less published detail available inside this district than inside its neighbours.' },
      { q: 'Is this a district of homeowners?', a: 'More than the others measured here. 11,163 of the 29,377 dwellings are owner-occupied, 38 percent, the highest share of the five Rotterdam districts in this series, with 18,214 rented. Average dwelling value is 267,000 euro and average income 27,800 euro per resident.' },
      { q: 'How many students live here?', a: '1,340 residents are enrolled in applied higher education and 460 at university level, the lowest university figure of the districts read for this series. Those count residents by what they study rather than people studying inside the boundary, and they are never added to the 5,796 primary and 3,550 secondary pupils taught at establishments here.' },
      { q: 'Is the class taught in Dutch?', a: 'The lesson is in English. Four Dutch school words are kept unchanged, groep, havo, vwo and profielkeuze, on the grounds that a child already knows them and an English version would need converting back before it was useful. No course exists in a Dutch edition.' },
      { q: 'What hours work for a family in IJsselmonde?', a: 'The gap to the teacher is three and a half hours under Dutch summer time and four and a half outside it, all of the movement coming from the Dutch clock. Either way the afternoons after school, the early evenings and both weekend days are open. One repeating hour is agreed in the free lesson and then left alone.' },
      { q: 'Is there a Modern Age Coders classroom in IJsselmonde?', a: 'No, and none is claimed here, elsewhere in Rotterdam or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do IJsselmonde coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Rotterdam and beyond',
    h2: 'West along the south bank, north across the river, and out to the country',
    html: 'West along the bank are <a class="cg-inline-link" href="/coding-classes-in-feijenoord">Feijenoord</a> and <a class="cg-inline-link" href="/coding-classes-in-charlois">Charlois</a>, and north across the Maas sit <a class="cg-inline-link" href="/coding-classes-in-rotterdam-centrum">Rotterdam Centrum</a> and <a class="cg-inline-link" href="/coding-classes-in-delfshaven">Delfshaven</a>. The city page, <a class="cg-inline-link" href="/coding-classes-in-rotterdam">coding classes in Rotterdam</a>, carries the port and all fourteen gebieden, and everything here sits inside <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>. The series descends from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and a learner after trained models rather than running programs should begin at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Take this to WhatsApp'
  },

  footerHeading: 'Rotterdam and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-rotterdam', label: 'Rotterdam' },
    { href: '/coding-classes-in-charlois', label: 'Charlois' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-ijs .cg-hero-grid { align-items: end; gap: clamp(1.5rem, 3.7vw, 2.9rem); }
.cg-root.cg-ijs .cg-hero h1 { font-weight: 500; letter-spacing: -0.0095em; line-height: 1.13; }
.cg-root.cg-ijs .cg-capsule { border-left-width: 2px; border-left-style: solid; border-top: 6px solid var(--cg-accent); padding-left: 1.2rem; padding-top: 0.95rem; }
.cg-root.cg-ijs .cg-eyebrow { letter-spacing: 0.125em; font-weight: 600; }
.cg-root.cg-ijs .cg-section-head h2 { max-width: 37ch; }
.cg-root.cg-ijs .cg-grid-3 { gap: clamp(1.25rem, 2.6vw, 2rem); }
.cg-root.cg-ijs .cg-card { border-radius: 2px; border-top: 4px solid var(--cg-accent-soft); }
.cg-root.cg-ijs .cg-table th { letter-spacing: 0.045em; }
.cg-root.cg-ijs .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ijs .cg-ladder-col { border-left: 4px solid var(--cg-accent-soft); padding-left: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Gebied IJsselmonde, Rotterdam, Zuid-Holland: 63,475 residents (2026) on 1,309 hectares of which 1,179 land and 130 water, density 5,376; 29,930 households averaging 2.1, the largest of the Rotterdam districts measured, with 13,085 single-person at 44 percent; 11,115 residents under fifteen at 18 percent and 11,185 aged sixty-five and over at 18 percent, seventy apart; 29,377 dwellings, 11,163 owner-occupied at 38 percent, the highest share of the five Rotterdam districts read, average value 267,000 euro; income 27,800 euro (2024); 1,340 residents in applied higher education and 460 at university, the lowest university figure here; 26 primary establishments with 5,796 pupils and 7 secondary with 3,550; only four buurten, Oud IJsselmonde, Beverwaard, Groot IJsselmonde and Lombardijen, the coarsest subdivision in the series at about sixteen thousand people each. Regio Midden holidays. The district page argues from unequal and unbounded bands; Rotterdam Centrum owns boundary truncation, Delfshaven counts of non-interchangeable units, Feijenoord sample size, Charlois unstated bases, and the city page the port units argument.',
    localProject: 'A count inside a band is a count per year of age multiplied by the width of the band. IJsselmonde publishes 11,115 residents under fifteen and 11,185 aged sixty-five and over, seventy apart and both eighteen percent, which supports the sentence that the district has as many pensioners as children. The two bands are not comparable: the first covers fifteen years of life and the second everything after sixty-five with no upper end given. Dividing each closed band by its width gives about 741 residents per year of age for the under-fifteens, 753 for 15 to 25 across ten years, 925 for 25 to 45 across twenty and 757 for 45 to 65 across twenty, so the largest count, 18,505 in the 25 to 45 band, leads the children by two thirds on counts and by only about a quarter per year. The top band cannot be normalised at all; assuming a ceiling of ninety-five would give about 373 per year, half the children rate, and the page prints that only to show the scale of what the missing ceiling hides. Distinct from the bin-width trap (Bawshar), which is about an analyst choosing how to group continuous data: here the bands are fixed by the publisher, unequal by design and one is open, so no regrouping is available and the fault is comparing counts across bands of different spans. The page makes no claim that the district is ageing, which a single snapshot cannot show, and none comparing its age profile with another district, since the same distortion applies to both.',
    requiredMentions: [
      '63,475',
      '29,930',
      '13,085',
      '29,377',
      '267,000',
      '27,800',
      '5,376',
      '11,115',
      '11,185',
      '18,505',
      '5,796',
      '3,550',
      'Beverwaard',
      'Lombardijen'
    ],
    sources: [
      { claim: 'Wijk IJsselmonde, Rotterdam: 63,475 inwoners (2026); 29,930 huishoudens averaging 2.1 (2025), 13,085 eenpersoonshuishoudens at 44 percent; ages 11,115 (0 to 15, 18 percent), 7,525 (15 to 25, 12 percent), 18,505 (25 to 45, 29 percent), 15,140 (45 to 65, 24 percent), 11,185 (65+, 18 percent); 1,309 hectare total, 1,179 land, 130 water (2025); bevolkingsdichtheid 5,376 per km2 (2025); woningvoorraad 29,377 (2025); gemiddelde WOZ 267,000 euro (2025); 18,214 huurwoningen (62 percent) and 11,163 koopwoningen (38 percent); gemiddeld inkomen 27,800 euro (2024); studenten HBO 1,340 and WO 460 (2025); 26 vestigingen basisonderwijs with 5,796 leerlingen and 7 vestigingen voortgezet onderwijs with 3,550 leerlingen (2025); 4 buurten: Oud IJsselmonde, Beverwaard, Groot IJsselmonde, Lombardijen.', url: 'https://allecijfers.nl/wijk/ijsselmonde-rotterdam/' },
      { claim: 'The statistics office publishes the same five age bands for every Dutch municipality and district: 0 tot 15 jaar, 15 tot 25 jaar, 25 tot 45 jaar, 45 tot 65 jaar and 65 jaar of ouder. The first four span 15, 10, 20 and 20 years; the fifth has a floor and no stated ceiling.', url: 'https://allecijfers.nl/gemeente/rotterdam/' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'That IJsselmonde has as many pensioners as children. The two bands cover very different spans of life and the page argues against the sentence rather than repeating it.',
      'Any per-year-of-age figure for the sixty-five and over band. It has no published upper end and none is assumed except once, explicitly hypothetically, to show the scale of the omission.',
      'That the district is ageing or not ageing. A single snapshot cannot show a direction.',
      'Any comparison of this age profile with another district on the strength of these bands, since the same widths distort every district identically and single-year data was not read.',
      'Figures for the four buurten individually. All four are named and none was read separately.',
      'Anything the Rotterdam city page owns, including the port throughput in two units and the named secondary schools with their addresses.'
    ]
  }
};
