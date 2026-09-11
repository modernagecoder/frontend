'use strict';
// Limburg: the province page. A long thin province with two foreign borders
// and a population that has stood still for thirty years. Spine: the highest
// point of the Netherlands is 322.4 metres on the Vaalserberg or 870 metres on
// Saba, depending on what "the Netherlands" is taken to include, and the
// answer changed on 10 October 2010 without anyone moving a hill.

module.exports = {
  slug: 'coding-classes-in-limburg',
  code: 'lim',
  accent: '#681944',
  accentRationale: 'Limburg: chosen by the solver for maximum separation from every accent it links to, inside the editorial band',
  pageType: 'governorate',
  place: {
    name: 'Limburg',
    eyebrow: 'Province of Limburg',
    schemaType: 'AdministrativeArea',
    chain: [{ type: 'Country', name: 'Netherlands' }]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Limburg, Netherlands',
  title: 'Coding Classes in Limburg | Modern Age Coders',
  description: 'Live online coding, Python and AI classes across Limburg, ages 6 to 67: Maastricht, Venlo, Sittard-Geleen, Heerlen, Roermond, Weert and all 31 municipalities.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in all 31 municipalities of Limburg, from Mook to Vaals, built on the highest point in the country, which depends on what the country is.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'complete-kotlin-programming-masterclass-professional',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Limburg Learners',
    description: 'Ability-placed online coding, Python, AI, data and mathematics for children, teenagers and adults across the 31 municipalities of the province of Limburg, taught in English.'
  },

  h1: 'Coding classes in Limburg, home of the highest point in the Netherlands, unless you count all of the Netherlands',
  capsuleQ: 'What are the best coding classes in Limburg?',
  capsule: 'Coding classes in Limburg cover 1,138,374 people in 31 municipalities (Statistics Netherlands, 1 January 2026), a province that has grown by 8,324 people in thirty-one years and shares more border with Belgium and Germany than with the rest of the country. Its Vaalserberg, 322.4 metres above NAP, is the highest point of the European Netherlands, and stopped being the highest point of the Netherlands on 10 October 2010 without moving. Wherever in the province the laptop is, Modern Age Coders teaches the same live online class in English for learners from 6 to 67, the first lesson without charge, then USD 100 a month for a group of five to ten or USD 150 for private tuition.',
  lead: 'Every Limburg schoolchild is told that the highest point in the Netherlands is in Vaals. It was, until the morning the country grew to include an island in the Caribbean with a mountain nearly three times as tall. Nothing about the hill changed; the definition of the country did. A child who can build the program that answers "highest point of what?" has learned to ask the question that most tables never state.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Limburg.',

  picks: {
    eyebrow: 'Course picks for Limburg',
    h2: 'Four courses for a province that is a long road between two countries',
    intro: 'A groep 5 child in Weert, a teenager in Sittard who wants the phone in her pocket to run her own app, a Maastricht student, and a working parent in Venlo who wants the spreadsheet to explain itself: four doors along one road.',
    items: [
      { course: 'microsoft-office-kids-mastery', band: 'Ages 8 to 12', note: 'Word, PowerPoint and Excel done properly, in English, for the groep 5 to 8 child who is about to be asked for a werkstuk with a chart in it.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'From a blank file to advanced Python across two years, for the teenager whose school in Heerlen or Roermond does not timetable informatica.' },
      { course: 'complete-kotlin-programming-masterclass-professional', band: 'College and adult', note: 'Kotlin and Android to a published-ready app, for the student or professional who wants something on a real phone by the end.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Excel, Sheets and Power BI with AI for the parent whose job in Venlo logistics or Geleen chemicals is a dashboard nobody built for them.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Limburg today',
      h2: 'A million people who have been a million people since 1995',
      intro: 'Statistics Netherlands counted 1,138,374 residents on 1 January 2026 in 553,078 households, 142,880 of them under fifteen and 127,471 aged fifteen to twenty-five, on 2,144.65 square kilometres of land inside 2,209.86 of territory. In 1995 the province held 1,130,050 people. The difference over thirty-one years is 8,324, which is 0.74 percent, or fewer people than the province of Utrecht adds in a single year.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Four cities, no giant', p: 'Maastricht at 126,026 is the capital and the largest; Venlo at 104,195, Sittard-Geleen at 92,461 and Heerlen at 87,764 follow. No city holds more than 11.1 percent of the province, and the four sit on a line 90 kilometres long from Venlo in the north to Maastricht in the south.' },
          { h3: 'The schools', p: '382 primary establishments teach 78,846 pupils and 74 secondary establishments 48,103, the smallest secondary count of the provinces on this site so far. A child under fifteen is 12.6 percent of Limburg against 16 percent of Utrecht, which is what a province that has stopped growing looks like in a table.' },
          { h3: 'More foreign border than Dutch', p: 'Limburg touches Belgium along its whole western flank and Germany along its whole eastern one; at its narrowest the province is a few kilometres wide. Aachen is nearer to Vaals than Maastricht is, and Düsseldorf is nearer to Venlo than Eindhoven.' }
        ] },
        { kind: 'spec', title: 'Three Limburgs', p: 'The province divides itself into Zuid-Limburg, the hills and the old mines around Maastricht, Heerlen and Sittard; Midden-Limburg, the Maas valley around Roermond and Weert; and Noord-Limburg, the logistics and horticulture country around Venlo. They share a dialect family and a flag and not much of a commute.' }
      ]
    },
    {
      id: 'spread', tint: 'tint', eyebrow: 'The spread',
      h2: 'From Mook to Vaals: all 31 municipalities, by population',
      intro: 'The three Limburgs, each with its municipalities and their 1 January 2026 population from the municipal registers, ending at Mook en Middelaar with 8,192.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Zuid-Limburg: the cities', p: '<a class="cg-inline-link" href="/coding-classes-in-maastricht">Maastricht</a> 126,026, the capital, with its own page; <a class="cg-inline-link" href="/coding-classes-in-sittard-geleen">Sittard-Geleen</a> 92,461, with its own page; <a class="cg-inline-link" href="/coding-classes-in-heerlen">Heerlen</a> 87,764, with its own page; Kerkrade 45,824; Landgraaf 36,844; Beekdaelen 35,903; Brunssum 27,474; Stein 24,691. The old mining belt and the university city, within half an hour of each other.' },
          { h3: 'Zuid-Limburg: the hills', p: 'Eijsden-Margraten 26,350; Meerssen 18,454; Valkenburg aan de Geul 16,481; Beek 16,141; Gulpen-Wittem 13,945; Voerendaal 12,432; Simpelveld 10,459; Vaals 10,106, with the Vaalserberg. The one corner of the Netherlands with contour lines a cyclist notices.' },
          { h3: 'Midden-Limburg', p: '<a class="cg-inline-link" href="/coding-classes-in-roermond">Roermond</a> 61,431, with its own page; Weert 51,498; Leudal 36,099; Echt-Susteren 32,385; Maasgouw 24,377; Roerdalen 20,995; Nederweert 17,533. The Maas valley and the lakes, between the two halves that do most of the talking.' },
          { h3: 'Noord-Limburg', p: '<a class="cg-inline-link" href="/coding-classes-in-venlo">Venlo</a> 104,195, the second city, with a page of its own; Peel en Maas 45,816; Venray 45,108; Horst aan de Maas 44,821; Gennep 17,953; Beesel 13,579; Bergen 13,037; Mook en Middelaar 8,192, the smallest and the furthest north, closer to Nijmegen than to any Limburg city.' },
          { h3: 'Where the borders are', p: 'Belgium runs the length of the west from Mook to Eijsden; Germany the length of the east from Gennep to Vaals; at Vaals the two meet the Netherlands at a single point on the hill. Five of the 31 municipalities touch both countries or come within a few kilometres of doing so.' },
          { h3: 'What the province is not', p: 'It is not growing, and this page does not pretend otherwise: 8,324 more people in thirty-one years, and a share of under-fifteens lower than any other province on this site. For a family here, that is one more reason a class should come to the house rather than the other way round.' }
        ] },
        { kind: 'p', text: 'All 31 are above. Maastricht, Venlo, Sittard-Geleen, Heerlen and Roermond already have city pages that go close; this one stays at the scale where Mook and Vaals are both in view.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure on this page, with its office and its date',
      intro: 'Including the two heights the project is built on, and the discrepancy between two sources on one of them.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The province, counted', p: 'Statistics Netherlands, provisional, 1 January 2026: 1,138,374 residents in 31 municipalities; 553,078 households; 142,880 under fifteen; 127,471 aged fifteen to twenty-five; 382 primary establishments with 78,846 pupils and 74 secondary with 48,103; land 214,465 hectares, territory 220,986; density 529; 1,130,050 residents in 1995, a rise of 8,324.' },
          { h3: 'The list', p: 'All 31 municipalities with their 1 January 2026 populations from the municipal registers, from Maastricht at 126,026 to Mook en Middelaar at 8,192. The 31 figures sum to the provincial total exactly, and the class checks it before the hill.' },
          { h3: 'The hill', p: 'The Dutch encyclopaedia\'s entry on the Vaalserberg: 322.4 metres above NAP; the summit is the highest point of the European Netherlands; since 10 October 2010, through the constitutional reform inside the Kingdom, it is the highest point of the European Netherlands only and no longer of the Netherlands.' },
          { h3: 'The mountain', p: 'The same entry gives Mount Scenery on Saba as the highest point of the whole Kingdom at 870 metres. Other sources give 887 metres for the same mountain. The page uses the figure from the entry it read and states that a second figure exists; the difference does not affect which is higher.' },
          { h3: 'The capital and the table of twelve', p: 'Capital Maastricht; from the encyclopaedia\'s table of provinces at the end of 2025, Limburg has 1,138,362 people on 2,146.61 square kilometres of land and 2,209.85 in total, density 530, against 1,138,374 and 2,144.65 by the national count. Both kept, twelve people and two square kilometres apart.' },
          { h3: 'The holiday region', p: 'Limburg takes its school holidays with regio Zuid, alongside Noord-Brabant, Zeeland and the southern half of Gelderland, by the Rijksoverheid\'s regional division.' }
        ] },
        { kind: 'p', text: 'Neither the province, nor its 31 municipalities, nor any school in them has any connection to Modern Age Coders, and this page implies none. They are listed because a page claiming to serve Limburg should be able to say where Limburg ends.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'What is the highest point in the Netherlands? Build the program that shows the answer depends on what the Netherlands is',
      intro: 'Two hills, three definitions of one country, and a date on which the answer changed while every hill stayed where it was.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Write the question down properly', p: '"The highest point in the Netherlands" has a hidden argument: which set of places counts as the Netherlands. The learner writes a function that takes a set of territories and returns the highest point in it, and then notices that the set has to come from somewhere.' },
          { h3: '2. Feed it three sets', p: 'The European Netherlands: the twelve provinces, highest point the Vaalserberg at 322.4 metres. The country of the Netherlands since 10 October 2010: the twelve provinces plus Bonaire, Sint Eustatius and Saba as special municipalities, highest point Mount Scenery on Saba at 870 metres. The Kingdom: the country plus Aruba, Curacao and Sint Maarten, still Mount Scenery.' },
          { h3: '3. Run it on two dates', p: 'Fed the country as it was on 9 October 2010, the function returns Vaals. Fed the country as it was the next morning, it returns Saba. No survey was taken and no hill moved. The scope changed, and a fact that every Limburg child had learned became true only with a qualifier attached.' }
        ] },
        { kind: 'table', caption: 'The highest point, by what is taken to be the Netherlands', head: ['Scope', 'Members', 'Highest point', 'Height', 'True since'], rows: [
          ['The European Netherlands', 'the twelve provinces', 'Vaalserberg, Vaals, Limburg', '322.4 m above NAP', 'always'],
          ['The country of the Netherlands', 'twelve provinces plus Bonaire, Sint Eustatius and Saba', 'Mount Scenery, Saba', '870 m (887 m in other sources)', '10 October 2010'],
          ['The Kingdom of the Netherlands', 'the country plus Aruba, Curacao and Sint Maarten', 'Mount Scenery, Saba', '870 m (887 m in other sources)', 'before and after'],
          ['The Netherlands, unqualified', 'not defined', 'not answerable', 'not answerable', 'never']
        ] },
        { kind: 'callout', h3: 'Every "in the country" has a scope, and the scope is part of the fact', p: 'Highest, largest, oldest, first: each of these is computed over a set, and the set is usually left unstated because everyone assumes they share it. The Vaalserberg shows how quietly that assumption can break: the hill is the same, the sentence is the same, and the truth of the sentence turned on a constitutional act in another hemisphere. A learner who has written the function with the scope as an explicit argument will ask "of what, exactly?" of every national statistic they meet, and will find that the answer is often missing. The table was computed before this paragraph was written; both heights are quoted as published, with the discrepancy on one of them stated rather than resolved.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any figure computed over a set nobody named',
      intro: 'National totals, company-wide maxima, "the best in the region": each is a function of a set, and the set is the part that gets left out. Rehearsed first on the province\'s own hill.',
      body: [
        { kind: 'table', caption: 'When the answer depends on the membership', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Name the set', 'Make the scope an explicit argument, never a default', 'A highest point with no "of what"', 'A function that can be called honestly'],
          ['Date the set', 'Membership changes; record when the set was as it was', 'A 2009 fact quoted in 2026', 'A fact with a valid-from date'],
          ['List the members', 'Enumerate them; "the Netherlands" is twelve provinces or fifteen units', 'Saba forgotten, or counted twice', 'A set you can check'],
          ['Keep the qualifier', 'Say "European Netherlands" if that is what you mean', 'A true sentence with a false implication', 'A sentence that survives a Caribbean atlas'],
          ['Note the disagreement', 'Two heights for one mountain get both quoted, not averaged', 'A made-up 878.5', 'Honest uncertainty']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Toy hills on a table, and a rope that marks "the country". The child finds the tallest hill inside the rope, then the rope is moved to include one more hill from the far end of the table. The tallest changes and no hill moved. Ten minutes, no screen, and the sentence is the child\'s: it depends what is inside the rope.' },
          { h3: 'For teenagers', p: 'The function in Python with the territory set as its argument, three sets, two dates, and a printed table. Then the harder question: find two other national facts that changed on 10 October 2010 without anything physical changing, and write both with their qualifier.' },
          { h3: 'For adults', p: 'The same program on "our largest office", "the company record" or "the regional maximum" from work, where the set of things being compared was decided years ago by someone who has since left. If a real one can be brought in, it is the best material.' }
        ] },
        { kind: 'p', text: 'The provincial totals, the 31 municipal populations, the areas, the two heights and the date of the reform are published by the offices and the encyclopaedia entries named in the sentences that use them. The table is a re-arrangement of published facts by scope and derives nothing.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a rope on a table to a function with its scope as an argument',
    intro: 'The rung is found in the free lesson; which of the three Limburgs the laptop is in has no bearing.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Inside the rope', p: 'Children find the tallest of whatever is inside a boundary, then watch the boundary move.', courses: ['kids-coding-blocks-masterclass', 'microsoft-office-kids-mastery'] },
      { band: 'Ages 11 to 13', h3: 'A maximum over a list', p: 'Learners write a function that takes a list and returns its largest member, and feed it two lists.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Scope as an argument', p: 'Teenagers make the set explicit, date it, and find other facts that changed with it.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Sets at work', p: 'Adults recover the membership behind a company-wide superlative and re-run it.', courses: ['data-analysis-mastery-course-college', 'complete-kotlin-programming-masterclass-professional'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will say the highest point in the Netherlands is the Vaalserberg. Why should a child in Heerlen learn enough to argue?',
    intro: 'Because the assistant is right for the European Netherlands and wrong for the country, and it will not volunteer which one it meant.',
    p1: 'Ask a tool for the highest point in the Netherlands and it will answer with Vaals as often as with Saba, depending on which pages it weighed and how the question was phrased, and in either case without stating the scope. The answer is not invented; the qualifier is missing. Supplying it is not something a model does unasked. It is something a person does who has once written the function with the set as an argument and watched the answer change on a date.',
    p2: 'That is what the class trains, and it is why the function is still written by the learner: not the syntax, which the tools provide, but the habit of asking "of what?" before believing a superlative and of checking whether the set has changed since the sentence was written. A twelve-year-old in Venlo who has done that with the hill will do it with "the national average" at seventeen and "the company record" at twenty-seven without being told. The tools will change several times before then; the question will not.',
    closer: 'So for a Limburg parent the argument for coding in 2026 is not that the child will measure hills. It is that knowing every fact about a set depends on the set, that sets change by decree, and that the only way to learn it for good is to write the function and move the rope.',
    blogAnchor: 'is coding still worth learning in 2026, when AI writes it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a province that is ninety kilometres long and sometimes five wide',
    intro: 'Venlo to Maastricht is an hour on the A2 and a whole province; Vaals to Mook is longer. A class at the kitchen table in Weert or Gulpen does not need anyone to cover that distance.',
    cells: [
      { h3: 'No A2, no A73', p: 'The lesson happens at home in Venray, Roermond or Kerkrade at a fixed hour, and the length of the province never enters into it.' },
      { h3: 'English, and the school\'s Dutch as it is', p: 'Groep, havo, vwo and profielkeuze are said the way the school says them; the lesson around them is in English, the language shared by the university families in Maastricht and the logistics families in Venlo.' },
      { h3: 'One free lesson, one decision', p: 'A task at the learner\'s level, then a named course and a starting rung, with no card taken to arrange it.' },
      { h3: 'Ability decides the group', p: 'What a learner can do and wants next; not whether they are north, middle or south.' },
      { h3: 'Two lessons a week on regio Zuid\'s calendar', p: 'Eight a month at one recurring time. Limburg breaks up with regio Zuid, alongside Brabant and Zeeland, and the summer weeks are agreed before the slot is fixed.' },
      { h3: 'Four and a half hours in winter, three and a half in summer', p: 'India keeps one clock and the Netherlands keeps two, so a Limburg afternoon sits that far behind the teacher\'s evening. Late afternoon, early evening and weekends suit both ends.' }
    ],
    spec: { title: 'Two other countries are nearer than most of this one', p: 'From Vaals, Aachen is closer than Maastricht; from Venlo, the German border is closer than Eindhoven. A weekly class at home is the same class a family in Amsterdam gets, and it is the only version that does not involve a decision about which country to drive into.' }
  },

  fees: {
    h2: 'Thirty-one municipalities, one dollar tariff, a free hour first',
    intro: 'Stated in full before a number is asked for.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'The international rate is one figure in US dollars with no euro edition, and Vaals pays what Venlo pays. The free lesson fixes the course and the hour first; payment follows on WhatsApp. Pauses, plan changes and missed lessons are on the pricing page.'
  },

  reviewsH2: 'Six reviews from Google, word for word',

  book: {
    h2: 'Send the level, and the town if you like',
    intro: 'The opening task might be toy hills and a rope, a Python function with the country as its argument, or a company record from work whose set of contenders nobody has checked in years.',
    success: 'Thank you. Your Limburg class request has been sent.'
  },

  faq: {
    h2: 'Limburg coding class questions',
    intro: 'The province, its towns, the hill, the teaching and the terms.',
    items: [
      { q: 'Is the Vaalserberg the highest point in the Netherlands or not?', a: 'It is the highest point of the European Netherlands, at 322.4 metres above NAP. Since 10 October 2010, when Bonaire, Sint Eustatius and Saba became special municipalities of the country, the highest point of the Netherlands has been Mount Scenery on Saba, at 870 metres in the entry this page read and 887 in others. Building the function that answers "highest point of what?" is the project on this page.' },
      { q: 'Which Limburg towns get their own page, and which are covered here?', a: 'Maastricht, Venlo, Sittard-Geleen, Heerlen and Roermond have theirs already, all linked above. The other 26, from Weert and Kerkrade to Mook en Middelaar, are listed above with their populations, and the class is the same one whichever of them the laptop is in.' },
      { q: 'Has Limburg really not grown since 1995?', a: 'It has grown by 8,324 people, from 1,130,050 to 1,138,374, which is 0.74 percent over thirty-one years, or about 269 a year. The province of Utrecht added about 11,300 a year over the same period. The page states this plainly because it is the most important thing a family should know about where the province is heading.' },
      { q: 'We live in Vaals or Mook, at the ends of the province. Does that matter?', a: 'Not to the class. A child in Vaals and a child in Mook are 150 kilometres apart by road and in the same group at the same hour, and the nearest foreign city being closer than the capital is exactly why a class that comes to the house makes sense here.' },
      { q: 'Is the teaching in English or Dutch?', a: 'English, with the school\'s Dutch terms kept as the school says them. Dutch-language classes are not something we run. German and French are not offered either, which in this province is worth saying.' },
      { q: 'What time are classes for a family in Limburg?', a: 'India keeps one clock and the Netherlands keeps two, so a Limburg afternoon is four and a half hours behind the teacher in winter and three and a half in summer. Late afternoon, early evening and weekend slots suit both ends, and the recurring hour is chosen in the free lesson.' },
      { q: 'What happens in the free lesson?', a: 'We find what the learner can do and set one task there. A child finds the tallest toy hill inside a rope and then watches the rope move. A teenager writes the function with the country as its argument and runs it on two dates. An adult brings a company record from work. It closes with a course, a level, a weekly hour and the dollar fee, and nothing has been charged.' },
      { q: 'Is there a Modern Age Coders classroom anywhere in Limburg?', a: 'No, and none is claimed in Maastricht, in Venlo or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Limburg coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a Limburg group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or municipality. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'North along the Maas, and up to the country',
    html: 'The Maas leads north out of the province to <a class="cg-inline-link" href="/coding-classes-in-gelderland">Gelderland</a>, and the A2 west to <a class="cg-inline-link" href="/coding-classes-in-eindhoven">Eindhoven</a>, the nearest city page. Every page in this series descends from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and a learner who wants to build models rather than programs should open <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>. Maastricht, <a class="cg-inline-link" href="/coding-classes-in-venlo">Venlo</a>, <a class="cg-inline-link" href="/coding-classes-in-sittard-geleen">Sittard-Geleen</a>, <a class="cg-inline-link" href="/coding-classes-in-heerlen">Heerlen</a> and <a class="cg-inline-link" href="/coding-classes-in-roermond">Roermond</a> are built.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-eindhoven', label: 'Eindhoven' },
    { href: '/coding-classes-in-gelderland', label: 'Gelderland' }
  ],

  personalityCss: `
.cg-root.cg-lim .cg-hero-grid { align-items: start; gap: clamp(1.5rem, 4vw, 3rem); }
.cg-root.cg-lim .cg-hero h1 { font-weight: 600; letter-spacing: -0.012em; }
.cg-root.cg-lim .cg-capsule { border-left-width: 3px; border-bottom: 3px solid var(--cg-accent-soft); }
.cg-root.cg-lim .cg-eyebrow { letter-spacing: 0.13em; text-transform: uppercase; font-weight: 700; }
.cg-root.cg-lim .cg-section-head h2 { max-width: 33ch; }
.cg-root.cg-lim .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.6rem) clamp(1.5rem, 3.5vw, 2.5rem); }
.cg-root.cg-lim .cg-ladder-col { border-top-width: 6px; border-top-style: solid; }
.cg-root.cg-lim .cg-table caption { letter-spacing: 0.04em; }
.cg-root.cg-lim .cg-pick-band { font-weight: 700; }
`,

  dossier: {
    curriculumAuthority: 'Province of Limburg: 31 municipalities, 1,138,374 residents (CBS 1 January 2026), 382 primary establishments (78,846 pupils) and 74 secondary (48,103). Capital and largest city Maastricht. Three parts: Zuid-Limburg, Midden-Limburg, Noord-Limburg; borders with Belgium and Germany along its whole length. Population flat since 1995 (plus 8,324). Regio Zuid holidays. A province page is about the spread; the hub owns the national curriculum.',
    localProject: 'A fact about a set depends on the set (scope as an unstated argument). The Vaalserberg at 322.4 m above NAP is the highest point of the European Netherlands; since 10 October 2010, when Bonaire, Sint Eustatius and Saba became special municipalities, the highest point of the country of the Netherlands is Mount Scenery on Saba (870 m in the entry read; 887 m in other sources). The learner writes highest_point(set_of_territories), feeds it the European Netherlands, the country and the Kingdom, and runs it on 9 and 10 October 2010: the answer changes with no physical change. Distinct from the category-horizon trap (The Hague: a definition that stops following its subject over time), from the no-boundary trap (Zuid-Holland: a region nobody drew) and from the rank-by-measure trap (Utrecht): the flaw here is a superlative computed over a set that is left implicit and that changed by decree. Computed before writing; the height discrepancy is stated, not resolved.',
    requiredMentions: [
      '1,138,374',
      '31 municipalities',
      'Maastricht',
      'Venlo',
      'Sittard-Geleen',
      'Heerlen',
      'Roermond',
      'Vaalserberg',
      '322.4',
      'Mount Scenery',
      '10 October 2010',
      'Mook en Middelaar',
      '1,130,050',
      'Zuid-Limburg'
    ],
    sources: [
      { claim: 'Limburg 1,138,374 residents on 1 January 2026 (CBS provisional); 31 municipalities; total area 220,986 ha, land 214,465 ha; density 529; 553,078 households; 142,880 under 15; 127,471 aged 15 to 25; 382 primary establishments (78,846 pupils); 74 secondary (48,103); 1,130,050 in 1995, a rise of 8,324 (0.74 percent), about 269 a year.', url: 'https://allecijfers.nl/provincie/limburg/' },
      { claim: 'All 31 municipalities on 1 January 2026: Maastricht 126,026; Venlo 104,195; Sittard-Geleen 92,461; Heerlen 87,764; Roermond 61,431; Weert 51,498; Kerkrade 45,824; Peel en Maas 45,816; Venray 45,108; Horst aan de Maas 44,821; Landgraaf 36,844; Leudal 36,099; Beekdaelen 35,903; Echt-Susteren 32,385; Brunssum 27,474; Eijsden-Margraten 26,350; Stein 24,691; Maasgouw 24,377; Roerdalen 20,995; Meerssen 18,454; Gennep 17,953; Nederweert 17,533; Valkenburg aan de Geul 16,481; Beek 16,141; Gulpen-Wittem 13,945; Beesel 13,579; Bergen 13,037; Voerendaal 12,432; Simpelveld 10,459; Vaals 10,106; Mook en Middelaar 8,192.', url: 'https://allecijfers.nl/ranglijst/grootste-en-kleinste-gemeenten-in-inwoners-in-de-provincie-limburg/' },
      { claim: 'Vaalserberg 322.4 m above NAP; the summit is the highest point of the European Netherlands; since 10 October 2010, through constitutional reform within the Kingdom, it is only the highest point of the European Netherlands, not of the Netherlands; Mount Scenery on Saba, 870 m, is the highest point of the Kingdom.', url: 'https://nl.wikipedia.org/wiki/Vaalserberg' },
      { claim: 'The twelve provinces at end 2025: Limburg 1,138,362 people, 2,146.61 km2 land, 2,209.85 km2 total, density 530; capital Maastricht.', url: 'https://nl.wikipedia.org/wiki/Provincies_van_Nederland' },
      { claim: 'School holiday regions: regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Mount Scenery at 887 metres. The entry read gives 870; the page quotes 870 and notes that 887 appears elsewhere rather than choosing.',
      'The exact width of the province at its narrowest and the road distance from Vaals to Mook. Stated qualitatively; no figure was read at source.',
      'Maastricht University and the Brightlands campuses. Not researched for a province page.',
      'That Limburg has the lowest share of under-fifteens of all twelve provinces. Only the provinces on this site so far were compared; the page says so.',
      'Anything the Netherlands hub or Eindhoven owns: the SLO core objectives, the Brainport ratio chain.'
    ]
  }
};
