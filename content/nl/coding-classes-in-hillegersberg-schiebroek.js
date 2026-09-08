'use strict';
// Hillegersberg-Schiebroek: 44,792 residents, the least dense, most
// owner-occupied and highest-valued of the Rotterdam districts measured.
// Spine: four indicators agreeing is not four pieces of evidence. Sort all
// seven districts on each pair and two of the four collapse into one fact.

module.exports = {
  slug: 'coding-classes-in-hillegersberg-schiebroek',
  code: 'hgs',
  accent: '#784C34',
  accentRationale: 'Hillegersberg-Schiebroek: a warm timber brown for the villa streets and the Bergse plassen shoreline, the best-separated tone the solver had left and clear of every page this one links to',
  pageType: 'district',
  place: {
    name: 'Hillegersberg-Schiebroek',
    eyebrow: 'Hillegersberg-Schiebroek, Rotterdam',
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
  routeLabel: 'Hillegersberg-Schiebroek, Rotterdam, Netherlands',
  title: 'Coding Classes in Hillegersberg-Schiebroek | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Hillegersberg-Schiebroek, Rotterdam, for ages 6 to 67, from Schiebroek to Terbregge. First lesson free.',
  ogDescription: 'Live online coding, Python and AI for families in Hillegersberg-Schiebroek, on a page about why four indicators agreeing is rarely four pieces of evidence.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'data-analysis-mastery-course-college',
  verifiedOn: '9 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Hillegersberg-Schiebroek Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across the five buurten of Hillegersberg-Schiebroek, taught in English.'
  },

  h1: 'Coding classes in Hillegersberg-Schiebroek, where four measures agree and only two of them are telling you anything new',
  capsuleQ: 'What are the best coding classes in Hillegersberg-Schiebroek?',
  capsule: 'Coding classes in Hillegersberg-Schiebroek reach 44,792 residents (1 January 2026) on 1,163 hectares of land at 3,862 people to the square kilometre, the lowest density of the seven Rotterdam districts in this series. It is also the highest on average dwelling value at 496,000 euro, the highest on owner-occupation at 54 percent, and second on income at 42,400 euro. Four measures pointing one way looks like four reasons to believe something. Sort all seven districts on each and two of the four turn out to be one fact said twice. Modern Age Coders teaches live online in English from Schiebroek to Terbregge, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'This district comes top or near it on dwelling value, on owner-occupation and on income, and bottom on density. Four independent-looking confirmations that it is the comfortable end of Rotterdam. Two of them are not independent at all: order the seven districts by average dwelling value and then by average income and you get almost the same list. Two of them are: order them by owner-occupation and the list scrambles completely. Knowing which is which took one sort of a table, and almost nobody does it.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Hillegersberg-Schiebroek.',

  picks: {
    eyebrow: 'Course picks for Hillegersberg-Schiebroek',
    h2: 'Four courses for the quietest corner of the city',
    intro: 'A groep 5 child in Molenlaankwartier who has run out of things to build in Minecraft, a teenager in Schiebroek who wants to know how a model decides anything, a student in Terbregge who needs Python to be a habit rather than a module, and an adult in Hillegersberg Zuid staring at a dashboard of a dozen metrics: four doors, and the first hour of each is free.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Real typed Python, drawings that follow orders and a first program that spots a rule, taught in English to the groep 5 to 8 child in any of the five buurten.' },
      { course: 'ai-ml-masterclass-teens', band: 'Ages 13 to 18', note: 'A model trained, tested and broken on purpose, for the teenager who has used a dozen and been shown inside none.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'College and adult', note: 'Python from an empty file to work that runs unattended, for the student who met it in one module and wants the rest of it.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Cleaning, joining, and testing whether two columns are really two facts, for anybody who reads a dashboard and has to act on it.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Hillegersberg-Schiebroek today',
      h2: 'Forty-five thousand people, and more homes than households',
      intro: 'Hillegersberg-Schiebroek holds 44,792 residents across 1,326 hectares, of which 1,163 are land and 163 water, at a published 3,862 people to the square kilometre. That is the lowest density of the seven Rotterdam districts this series has read, on the third largest area. Its five buurten are Schiebroek, Molenlaankwartier, Hillegersberg Noord, Terbregge and Hillegersberg Zuid.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The only district here where most homes are owned', p: '11,473 of the 21,247 dwellings are owner-occupied, 54 percent, against 9,774 rented. Every other Rotterdam district in this series sits between 22 and 38 percent owned, so this one leads the next by sixteen points. Average dwelling value is 496,000 euro, the highest read here.' },
          { h3: 'Households outnumbered by homes', p: '21,000 households against 21,247 dwellings, so there are 247 more homes than households. In every other Rotterdam district measured the gap runs the other way. What the difference between those two registers means is the argument of the Amsterdam-Zuid page in this series and is noted here rather than reopened.' },
          { h3: 'An older district with plenty of children', p: '8,850 residents are sixty-five or over, 20 percent, and 11,785 are between forty-five and sixty-five, 26 percent, which is the largest band and unusual: elsewhere the twenty-five to forty-five band leads. There are still 7,880 residents under fifteen, 18 percent, and households average 2.1 people.' }
        ] },
        { kind: 'spec', title: 'What the schools figures show, and what they do not', p: '26 primary establishments teach 5,713 pupils and 8 secondary establishments teach 4,381, in a district of 44,792 people. Charlois, half again as large at 70,932, has 7 secondary establishments teaching 2,800. Whether that means anything about provision depends on catchments nobody publishes, which is the argument of the Rotterdam Centrum page in this series. It is mentioned here as a caution against reading these two numbers as a compliment.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Seven districts, four measures, and which of them move together',
      intro: 'This is the whole comparison the page rests on. Each column is published for every district; the question is not what the numbers say but how many separate things they say.',
      body: [
        { kind: 'table', caption: 'The seven Rotterdam districts read for this series, sorted by average income', head: ['District', 'Average income', 'Average dwelling value', 'Owner-occupied', 'People per square kilometre'], rows: [
          ['Rotterdam Centrum', '44,500 euro', '424,000 euro', '27 percent', '10,191'],
          ['Hillegersberg-Schiebroek', '42,400 euro', '496,000 euro', '54 percent', '3,862'],
          ['Kralingen-Crooswijk', '35,000 euro', '395,000 euro', '26 percent', '5,364'],
          ['Delfshaven', '30,100 euro', '325,000 euro', '28 percent', '14,944'],
          ['Feijenoord', '29,200 euro', '311,000 euro', '22 percent', '12,196'],
          ['IJsselmonde', '27,800 euro', '267,000 euro', '38 percent', '5,376'],
          ['Charlois', '26,400 euro', '240,000 euro', '29 percent', '6,302']
        ] },
        { kind: 'p', text: 'Read the dwelling value column downward and it descends almost in step with income, swapping only the top two. Read the owner-occupation column downward and it goes 27, 54, 26, 28, 22, 38, 29, which is no order at all. Read density and it goes 10,191, 3,862, 5,364, 14,944, 12,196, 5,376, 6,302, which is also no order. So of the four measures on which this district looks comfortable, value and income are close to one fact, while ownership and density are genuinely separate ones. That sorting is the entire method and it took a minute.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure, its source, its year, and what the sorting shows',
      intro: 'One district row in full, four columns from six others, and a plain account of what agreeing columns do and do not establish.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Hillegersberg-Schiebroek', p: '44,792 residents (2026); 21,000 households averaging 2.1 (2025), 8,800 single-person at 42 percent; ages 7,880 under fifteen at 18 percent, 5,000 at 11 percent, 11,295 at 25 percent, 11,785 at 26 percent and 8,850 at 20 percent; 1,326 hectares total, 1,163 land and 163 water; density 3,862; 21,247 dwellings; average value 496,000 euro; 11,473 owner-occupied at 54 percent and 9,774 rented at 46; income 42,400 euro (2024); 920 residents in applied higher education and 740 at university; 26 primary establishments with 5,713 pupils and 8 secondary with 4,381; five buurten.' },
          { h3: 'What was borrowed from the other six', p: 'Income, dwelling value, ownership share, density. Nothing else. Those six districts each have a page of their own where the rest of their figures live, and duplicating them here would add length without adding evidence.' },
          { h3: 'The result of the sort', p: 'Value and income put the seven districts in nearly one order, differing only over which of the leading pair comes first. Ownership produces an order resembling nothing else in the table, and so does density. That is a statement about four columns of seven numbers, offered as exactly that.' },
          { h3: 'The limits of it', p: 'Overlapping information is not causation in either direction, and this page proposes none. Seven places is also not many, a point the Feijenoord page in this series works through at length, so the sort is used to count facts rather than to establish any of them.' },
          { h3: 'One figure left deliberately unread', p: 'Dwellings exceed households by 247 here, uniquely among the Rotterdam districts measured. Several explanations are available and none is tested, so the number is printed and left alone; the machinery for interpreting a gap between two registers sits on the Amsterdam-Zuid page.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders is not connected to this gebied, to Rotterdam, or to any school in either, and nothing here implies otherwise. Quoted figures come from the statistics office page for the wijk named alongside them. The finding that two orderings coincide and two do not was produced by sorting those published columns.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Four measures, two facts',
      intro: 'A district that looks comfortable on everything, a set of columns that appear to confirm each other, and a one-minute test that says how many of them are separate.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Count the confirmations you think you have', p: 'Highest dwelling value, highest owner-occupation, second highest income, lowest density. Four measures, all pointing the same way, and the natural reading is that four different things independently support one conclusion. Write that count down, because it is what the next step is going to test.' },
          { h3: '2. Sort every unit on each pair', p: 'Not this district: all seven. Order them by income and then by dwelling value and the two lists are almost identical. Order them by ownership and the list bears no relation to either. That is the whole test, it needs no statistics, and it distinguishes a column that repeats another from a column that adds something.' },
          { h3: '3. Recount', p: 'Value and income are close to one fact stated twice, so the four confirmations are really about two separate things: how much money is around, and what kind of housing it is. That is still a real finding about this district. It is simply half as much support as it appeared to be, and the difference matters whenever somebody is deciding on the strength of it.' }
        ] },
        { kind: 'table', caption: 'What each column adds once the others are known', head: ['Measure', 'Where this district sits', 'Does its ordering match income?', 'Is it new information?'], rows: [
          ['Average income', '42,400 euro, second of seven', 'it is the reference', 'yes, by definition'],
          ['Average dwelling value', '496,000 euro, first of seven', 'almost exactly, swapping only the top two', 'very little, once income is known'],
          ['Owner-occupation', '54 percent, first by sixteen points', 'no, the ordering scrambles', 'yes, and it is the strongest single result here'],
          ['Density', '3,862, lowest of seven', 'no', 'yes, though it may repeat the ownership column'],
          ['The recount', 'four measures', 'two orderings', 'about two independent facts']
        ] },
        { kind: 'callout', h3: 'Agreement between measures is only evidence when the measures are independent', p: 'The most persuasive thing a set of numbers can do is agree, and agreement is exactly what correlated measures produce whether or not anything is true. A dashboard with a dozen tiles all pointing the same way feels like a dozen reasons; it is often three reasons and nine echoes, because the metrics were built from overlapping data in the first place. Revenue, order count and active users move together. Page views, sessions and bounce rate move together. Salary, seniority and tenure move together. When they all shift in one week, that is one event reported nine times, and the meeting treats it as nine. The test costs nothing and almost nobody runs it: take every unit you have, sort them by one measure and then by the other, and look at whether the two orderings are the same. If they are, the second column is telling you what the first already did, and you have one fact. If they are not, you have two, and the one that broke ranks is usually the interesting one. Here the column that broke ranks was owner-occupation, which put this district sixteen points clear of everything else while the income ordering had it second. That is a more specific and more useful finding than the general impression of comfort that all four columns together produced, and it only became visible once the echoes were separated from the signals.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for a dashboard where everything agrees',
      intro: 'Revenue and orders, sessions and page views, salary and seniority, complaints and churn: measures built from overlapping data agree by construction, and agreement is what convinces people. Practised on four columns that turn out to be about two things.',
      body: [
        { kind: 'table', caption: 'Separating the signals from the echoes', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Count what you think you have', 'Write down how many independent confirmations you believe you are holding', 'A vague sense of overwhelming support', 'A number the next step can correct'],
          ['Sort on every pair', 'Order all units by each measure and compare the orderings', 'Correlated columns counted separately', 'A map of which columns repeat which'],
          ['Find the one that breaks rank', 'Look for the measure whose ordering differs from the rest', 'The most informative column lost in the crowd', 'Usually, the actual finding'],
          ['Report the count honestly', 'Say four measures, about two facts, rather than four measures agree', 'Confidence built out of repetition', 'A claim that holds when somebody checks'],
          ['Design for independence', 'When choosing metrics, prefer ones built from different data', 'A dashboard that can only ever say one thing', 'Instruments that can disagree, which is the point of having them']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Three friends all say the film was good, and then it turns out they watched it together and talked about it afterwards. The children work out how many opinions they actually have, and it is not three.' },
          { h3: 'For teenagers', p: 'The seven districts in Python, a function that ranks them on any column, and a comparison that reports how closely two rankings agree. The stretch: find every pair of columns whose orderings match, group them, and state how many independent facts the table really contains.' },
          { h3: 'For adults', p: 'A real dashboard from work. Adults nearly always find several tiles that move together every single month, a decision that cited three of them, and nobody who has ever checked whether they were three things.' }
        ] },
        { kind: 'p', text: 'The population, household, age, area, density, dwelling, value, tenure, income, student, establishment and pupil figures for this district come from the statistics office page for this wijk, with a 2026 population, 2025 household and housing figures and a 2024 income. The income, dwelling value, ownership and density columns for the six comparison districts come from the statistics office pages for those wijken. The orderings and the observation that two of the four match are this page sorting published columns.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From three friends who watched the film together to a table that counts its own facts',
    intro: 'The rung is settled in the free hour by what the learner can already do, and never by which of the five buurten the address falls in.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'How many opinions is that?', p: 'Children discover that three people agreeing can be one opinion.', courses: ['kids-coding-blocks-masterclass', 'minecraft-coding-for-kids-course'] },
      { band: 'Ages 11 to 13', h3: 'Do these two columns say the same thing?', p: 'Learners sort a small table twice and compare the two orders.', courses: ['python-ai-kids-masterclass', 'statistics-probability-maths-course'] },
      { band: 'Ages 14 to 18', h3: 'Rankings that reveal the echoes', p: 'Teenagers write code that groups columns by whether their orderings agree.', courses: ['ai-ml-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'The dashboard where everything moves together', p: 'Adults take a real panel of metrics and count how many facts it holds.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will list four reasons this district is comfortable. Why should a teenager here ask how many are separate?',
    intro: 'Because two of the four produce the same ordering across seven districts, and the reply will present all four as support.',
    p1: 'Give a model the table and ask what it shows, and you will get a well-organised paragraph: highest dwelling value, highest owner-occupation, second highest income, lowest density. Four measures, four sentences, one conclusion, and the effect is cumulative because that is how prose works. Nothing in the paragraph will mention that value and income put the seven districts in almost the same order, so the two of them are close to a single fact repeated, and the impression of four-fold support is an artefact of listing.',
    p2: 'So the learner practises the sort, which is the whole method: rank every unit on each column and see which orderings coincide. Then they write the version that does it automatically, grouping columns whose rankings agree and reporting how many independent facts a table actually holds. A fifteen-year-old in Schiebroek who has watched four confirmations collapse into two will be the person at thirty asking whether the three metrics in a business case are three metrics. Models will keep listing measures, correctly and persuasively. Counting how many of them are separate stays a person\'s job.',
    closer: 'The case for a child in Hillegersberg-Schiebroek learning to code in 2026 is therefore not about house prices. It is that agreement between measures is the most convincing thing in any report and the least examined, that a single sort tells you whether the agreement means anything, and that a district looking comfortable on four counts and two facts makes the difference concrete.',
    blogAnchor: 'whether coding is still worth a child\'s time in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes in the quietest part of Rotterdam',
    intro: 'This is the low-density corner of the city, with lakes, villa streets and the most owner-occupied housing in it. Space is not the constraint here; a specific level in a specific subject still is.',
    cells: [
      { h3: 'A fixed hour at home, wherever home is', p: 'Molenlaankwartier, Terbregge or Schiebroek, at the same time every week. In a district this spread out that is worth more than proximity to anything.' },
      { h3: 'The lesson is English; the school words are not', p: 'A teacher here says groep, havo, vwo and profielkeuze in Dutch and everything around them in English, on the simple ground that a child should not have to translate the name of their own school year before following the sentence it is in.' },
      { h3: 'What the opening hour is for', p: 'Finding out what the learner can already do, by giving them something to do rather than a questionnaire. A level comes out of it, a course follows from the level, and a weekly slot is agreed. It costs nothing and no card is asked for.' },
      { h3: 'Why the other learners are usually elsewhere', p: 'A group is five to ten people at one stage. Assembling that from a single district would mean waiting; assembling it from everywhere means it exists this month. Geography is not a criterion and never has been.' },
      { h3: 'Eight lessons, most months', p: 'Two each week at a fixed hour. The regio Midden calendar governs school holidays across Zuid-Holland and comes out far ahead, so the weeks off are agreed with the schedule instead of colliding with it.' },
      { h3: 'Why the offset is not constant', p: 'Dutch summer time comes and goes; Indian time never has. So the teacher sits three and a half hours ahead for part of the year and four and a half for the rest, and in both cases the afternoons, evenings and weekends remain available.' }
    ],
    spec: { title: 'Nearly eight thousand children in the least crowded district here', p: '7,880 residents are under fifteen, 18 percent, spread across 1,163 hectares of land at 3,862 people to the square kilometre, the lowest density of the seven Rotterdam districts in this series. There are plenty of children and a great deal of space between them, which is exactly the arithmetic that stops a local group at one narrow level from forming however good the schools are. A group of five to ten assembled on ability from across the world is indifferent to the distance, at every age from 6 to 67.' }
  },

  fees: {
    h2: 'The fee, in dollars, in all five buurten',
    intro: 'On the page rather than kept for a call.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'A single international rate, in dollars, with no euro edition, so an address in Terbregge is charged what one in Schiebroek is. Nothing is paid until the free lesson has settled a course and an hour, and payment follows over WhatsApp. Pausing, switching plan and missing a week are all on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, printed as the people who left them wrote them',

  book: {
    h2: 'Send the level; the buurt is not asked',
    intro: 'The first task might be three friends whose opinions turn out to be one, a function that reports how closely two rankings agree, or a dashboard from work whose tiles have moved together every month for two years.',
    success: 'Thank you. Your Hillegersberg-Schiebroek class request has been sent.'
  },

  faq: {
    h2: 'Hillegersberg-Schiebroek coding class questions',
    intro: 'The district, its five buurten, four measures and two facts, the teaching and the terms.',
    items: [
      { q: 'Is this the most prosperous district in Rotterdam?', a: 'It is the highest on average dwelling value at 496,000 euro and on owner-occupation at 54 percent, and second on average income at 42,400 euro behind Rotterdam Centrum, among the seven districts this series has measured out of twenty-two. Whether that adds up to four separate reasons is the question the page is about: value and income put the seven districts in nearly the same order, so those two are close to one fact, while ownership orders them completely differently and is genuinely separate information.' },
      { q: 'What does it mean that two of the measures agree?', a: 'That they carry overlapping information, not that either causes the other. Sorting seven districts by average income and then by average dwelling value gives almost the same list, swapping only the top two. Sorting them by owner-occupation gives 27, 54, 26, 28, 22, 38 and 29 percent, which follows neither. The first pair is one fact told twice and the second is an addition, and separating them took one sort of a table.' },
      { q: 'Which neighbourhoods are in Hillegersberg-Schiebroek?', a: 'Five buurten: Schiebroek, Molenlaankwartier, Hillegersberg Noord, Terbregge and Hillegersberg Zuid. The district holds 44,792 residents across 1,326 hectares of which 163 are water, at 3,862 people to the square kilometre, the lowest density of the seven Rotterdam districts read for this series.' },
      { q: 'Why are there more homes here than households?', a: '21,247 dwellings against 21,000 households, so 247 more homes than households, and this is the only Rotterdam district measured where the gap runs that way. This page reports it and does not interpret it, because a household is a registration and a dwelling is a building-register entry, and what their difference means is worked through on the Amsterdam-Zuid page in this series.' },
      { q: 'Does the district have good schools?', a: 'This page has no basis for saying so and does not. What is published is 26 primary establishments teaching 5,713 pupils and 8 secondary teaching 4,381, in a district of 44,792 people. Those are counts of registrations and attendance rather than descriptions of teaching, and reading them as provision needs catchment data that nobody publishes.' },
      { q: 'Is the class taught in Dutch?', a: 'No. Teaching is in English, with one narrow exception: the Dutch words for school years and tracks stay Dutch, so groep, havo, vwo and profielkeuze appear exactly as a child meets them at school. Courses are not offered in a Dutch version.' },
      { q: 'What hours work for a family here?', a: 'Under Dutch summer time the teacher is three and a half hours ahead; outside it, four and a half. India is not the reason for either, since its clock has not changed in decades. What that leaves open is generous: the end of the school day onwards, plus all of Saturday and Sunday. The weekly hour is fixed during the free lesson and stays fixed.' },
      { q: 'Is there a Modern Age Coders classroom in Hillegersberg-Schiebroek?', a: 'No, and none is claimed here, elsewhere in Rotterdam or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Hillegersberg-Schiebroek coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Rotterdam and beyond',
    h2: 'South into the city, east to the suburbs, and out to the country',
    html: 'South is <a class="cg-inline-link" href="/coding-classes-in-rotterdam-centrum">Rotterdam Centrum</a>, and east <a class="cg-inline-link" href="/coding-classes-in-kralingen-crooswijk">Kralingen-Crooswijk</a>, whose page rules out the explanation everybody reaches for. Across the river are <a class="cg-inline-link" href="/coding-classes-in-feijenoord">Feijenoord</a> and <a class="cg-inline-link" href="/coding-classes-in-charlois">Charlois</a>. The city page, <a class="cg-inline-link" href="/coding-classes-in-rotterdam">coding classes in Rotterdam</a>, carries the port and all fourteen gebieden, and everything here sits inside <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>. The series descends from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and a learner after trained models rather than running programs should begin at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Settle this on WhatsApp'
  },

  footerHeading: 'Rotterdam and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-rotterdam', label: 'Rotterdam' },
    { href: '/coding-classes-in-kralingen-crooswijk', label: 'Kralingen-Crooswijk' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-hgs .cg-hero-grid { align-items: start; gap: clamp(1.45rem, 3.5vw, 2.7rem); }
.cg-root.cg-hgs .cg-hero h1 { font-weight: 500; letter-spacing: -0.01em; line-height: 1.14; }
.cg-root.cg-hgs .cg-capsule { border-left-width: 6px; border-left-style: solid; border-top: 1px solid var(--cg-accent-soft); padding-left: 1.5rem; padding-top: 0.85rem; }
.cg-root.cg-hgs .cg-eyebrow { letter-spacing: 0.145em; font-weight: 700; }
.cg-root.cg-hgs .cg-section-head h2 { max-width: 38ch; }
.cg-root.cg-hgs .cg-grid-3 { gap: clamp(1.2rem, 2.45vw, 1.9rem); }
.cg-root.cg-hgs .cg-card { border-radius: 4px; }
.cg-root.cg-hgs .cg-table th { letter-spacing: 0.04em; text-transform: uppercase; }
.cg-root.cg-hgs .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-hgs .cg-ladder-col { border-bottom: 5px solid var(--cg-accent-soft); padding-bottom: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Gebied Hillegersberg-Schiebroek, Rotterdam, Zuid-Holland: 44,792 residents (2026) on 1,326 hectares of which 1,163 land and 163 water, density 3,862, the lowest of the seven Rotterdam districts measured; 21,000 households averaging 2.1 with 8,800 single-person at 42 percent, against 21,247 dwellings, so 247 more homes than households, the only district here with that sign; 11,473 dwellings owner-occupied at 54 percent, the highest by sixteen points, average value 496,000 euro, the highest; income 42,400 euro (2024), second behind Rotterdam Centrum; 11,785 residents aged forty-five to sixty-five at 26 percent, the largest band, and 8,850 aged sixty-five and over at 20 percent, with 7,880 under fifteen at 18; 920 residents in applied higher education and 740 at university; 26 primary establishments with 5,713 pupils and 8 secondary with 4,381; five buurten, Schiebroek, Molenlaankwartier, Hillegersberg Noord, Terbregge and Hillegersberg Zuid. Regio Midden holidays. The district page argues from correlated measures; Rotterdam Centrum owns boundary truncation, Delfshaven counts of non-interchangeable units, Feijenoord sample size, Charlois unstated bases, IJsselmonde unequal bands, Kralingen-Crooswijk salience, and the city page the port units argument.',
    localProject: 'Agreement between measures is only evidence when the measures are independent. Hillegersberg-Schiebroek is first of seven Rotterdam districts on average dwelling value at 496,000 euro, first on owner-occupation at 54 percent, second on income at 42,400 euro and last on density at 3,862, which reads as four independent confirmations of one conclusion. Sorting all seven districts on each column tests that in a minute. By income the order runs Rotterdam Centrum, Hillegersberg-Schiebroek, Kralingen-Crooswijk, Delfshaven, Feijenoord, IJsselmonde, Charlois; by dwelling value it is the same list with only the top two swapped, so those two columns are close to one fact stated twice. By owner-occupation it runs 27, 54, 26, 28, 22, 38, 29 percent, matching nothing, and by density 10,191, 3,862, 5,364, 14,944, 12,196, 5,376, 6,302, also matching nothing. So four measures carry about two independent facts, and the column that broke rank, ownership, turns out to hold the strongest single result. The general case is dashboards built from overlapping data: revenue with order count, sessions with page views, salary with seniority, which move together by construction and are then counted as separate corroboration. Distinct from small-sample weakness (Feijenoord), which is about how little a perfect agreement across few items proves, and from multiple comparisons (Al Khoudh): here the number of units and the number of tests are not the issue, and the fault is treating correlated columns as independent support.',
    requiredMentions: [
      '44,792',
      '21,000',
      '8,800',
      '21,247',
      '496,000',
      '42,400',
      '3,862',
      '7,880',
      '11,785',
      '5,713',
      '4,381',
      'Schiebroek',
      'Terbregge',
      'Molenlaankwartier'
    ],
    sources: [
      { claim: 'Wijk Hillegersberg-Schiebroek, Rotterdam: 44,792 inwoners (2026); 21,000 huishoudens averaging 2.1 (2025), 8,800 eenpersoonshuishoudens at 42 percent; ages 7,880 (0 to 15, 18 percent), 5,000 (15 to 25, 11 percent), 11,295 (25 to 45, 25 percent), 11,785 (45 to 65, 26 percent), 8,850 (65+, 20 percent); 1,326 hectare total, 1,163 land, 163 water; bevolkingsdichtheid 3,862 per km2 (2025); woningvoorraad 21,247 (2025); gemiddelde WOZ 496,000 euro (2025); 11,473 koopwoningen (54 percent) and 9,774 huurwoningen (46 percent); gemiddeld inkomen 42,400 euro (2024); studenten HBO 920 and WO 740 (2025); 26 vestigingen basisonderwijs with 5,713 leerlingen and 8 vestigingen voortgezet onderwijs with 4,381 leerlingen; 5 buurten: Schiebroek, Molenlaankwartier, Hillegersberg Noord, Terbregge, Hillegersberg Zuid.', url: 'https://allecijfers.nl/wijk/hillegersberg-schiebroek-rotterdam/' },
      { claim: 'Income, average dwelling value, owner-occupation share and density for the six comparison districts, used for the sorting only. Rotterdam Centrum 44,500 euro, 424,000 euro, 27 percent, 10,191. Kralingen-Crooswijk 35,000, 395,000, 26 percent, 5,364. Delfshaven 30,100, 325,000, 28 percent, 14,944. Feijenoord 29,200, 311,000, 22 percent, 12,196. IJsselmonde 27,800, 267,000, 38 percent, 5,376. Charlois 26,400, 240,000, 29 percent, 6,302.', url: 'https://allecijfers.nl/gemeente/rotterdam/' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'That average dwelling value causes average income or the reverse. Two orderings agreeing shows overlapping information, not a direction.',
      'That this is the most prosperous district in Rotterdam. It leads on two of four measures among seven of the city twenty-two wijken, and the page says so in those terms.',
      'Any interpretation of the 247 more dwellings than households. The difference is reported and the argument about what two registers mean belongs to the Amsterdam-Zuid page.',
      'Any claim about school quality. The establishment and pupil counts are registrations and attendance, and reading provision from them needs catchments nobody publishes, which is the Rotterdam Centrum page argument.',
      'Any conclusion drawn from seven districts being a large enough sample. What few points can carry is the Feijenoord page argument.',
      'Figures for the five buurten individually. All five are named and none was read separately.',
      'Anything the Rotterdam city page owns, including the port throughput in two units and the named secondary schools with their addresses.'
    ]
  }
};
