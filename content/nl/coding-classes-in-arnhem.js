'use strict';
// Arnhem: capital of Gelderland, second city of the province, and the place
// whose best-documented week produces figures that will not add up. Spine:
// categories must be disjoint and share one population before you may sum
// them. Dead plus captured plus evacuated exceeds the number who landed by
// 2,903, and the excess is a fact about the record, not about the men.

module.exports = {
  slug: 'coding-classes-in-arnhem',
  code: 'arn',
  accent: '#65335A',
  accentRationale: 'Arnhem: a deep heather purple for the Veluwezoom, set by the solver apart from Utrecht province\'s plum and Breda\'s Nassau violet',
  pageType: 'city',
  place: {
    name: 'Arnhem',
    eyebrow: 'Arnhem, Gelderland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Gelderland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Arnhem, Netherlands',
  title: 'Coding Classes in Arnhem | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Arnhem for ages 6 to 67, from Elden and Schaarsbergen to the city centre. First lesson free, then one flat monthly fee.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in Arnhem, capital of Gelderland, built on the discipline of never adding two categories that overlap.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'data-structures-algorithms-masterclass-college',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Arnhem Learners',
    description: 'Ability-placed online coding, Python, data, AI and mathematics for children, teenagers and adults in Arnhem, Elden and Schaarsbergen, taught in English.'
  },

  h1: 'Coding classes in Arnhem, where three published categories add up to more men than ever landed',
  capsuleQ: 'What are the best coding classes in Arnhem?',
  capsule: 'Coding classes in Arnhem serve a municipality of 171,822 people (Statistics Netherlands, 1 January 2026), the capital of Gelderland and its second city. Its most heavily documented week is September 1944, and the published figures for it will not reconcile: about 7,100 British troops landed in the first two lifts, while the recorded dead, the recorded prisoners and the recorded evacuation across the Rhine total 10,003. Nothing there is a lie. The categories overlap and the frames differ, and knowing that before you add is the whole of data work. Modern Age Coders teaches live online in English across the municipality, ages 6 to 67, first lesson free, then USD 100 a month in a group of five to ten or USD 150 one-to-one.',
  lead: 'Take three sourced figures about one week in this city: about 1,500 British dead, 6,340 taken prisoner, and 2,163 brought back across the Nederrijn on the night of 25 September 1944. Add them and you get 10,003 men from a force of roughly 7,100. The arithmetic is right and the sources are serious, so the fault is in the addition: a man wounded and captured appears in two of those counts, and the tallies were compiled over different periods and different formations. These were people, and getting their number right is a form of care. It is also the first lesson of every real dataset.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Arnhem.',

  picks: {
    eyebrow: 'Course picks for Arnhem',
    h2: 'Four courses for a city that has to be careful with its records',
    intro: 'A groep 5 child in Elden, a teenager in Schaarsbergen who wants to be the one who writes the tools, a student at one of the city\'s applied academies who needs algorithms rather than frameworks, and a parent in Presikhaaf whose reports never quite reconcile: four doors into one city.',
    items: [
      { course: 'problem-solving-and-computational-thinking-for-kids', band: 'Ages 8 to 12', note: 'Logic, sets and the habit of checking an answer, in English, for the groep 5 to 8 child who likes being right for the right reason.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from the first line to real projects across two years, for the teenager whose school timetable has no room for informatica.' },
      { course: 'data-structures-algorithms-masterclass-college', band: 'College and adult', note: 'Sets, maps, complexity and interview-ready problem solving, for the student who wants to know why a structure is chosen and not only how to call it.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Excel, Sheets and Power BI with AI, for the working parent whose monthly figures come from three systems that disagree.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Arnhem today',
      h2: 'The provincial capital, the second city, and half its households of one',
      intro: 'The national register held 171,822 people in the municipality on 1 January 2026, in 85,669 households averaging 1.92 people, on 97.74 square kilometres of land inside 101.54 of territory: 1,733 residents to the square kilometre. In 1995 the count was 134,572, so Arnhem has gained 37,250 people in thirty-one years, a rise of 28 percent.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'A working city, not a student one', p: '24,923 residents are under fifteen and 22,672 are between fifteen and twenty-five; 52,031 are between twenty-five and forty-five and 28,522 are sixty-five or over. 41,787 households hold one person, 49 percent. The higher-education mix is unusual: 11,302 at the applied level against 1,800 at university level, the most lopsided of any city on this site.' },
          { h3: 'The schools', p: '44 primary establishments teach 13,320 pupils and 18 secondary establishments teach 9,070, both counted for 2025. A city of this size with this many primary places and this few secondary ones is a city whose teenagers travel, and travelling to a weekly evening class is exactly what an online lesson removes.' },
          { h3: 'Capital, but second', p: 'Arnhem is the seat of the province of Gelderland and its eleventh-largest municipality in the country, and it is nonetheless smaller than Nijmegen, twenty minutes down the road. Being the capital and not the largest is a distinction this cluster has met before, and it is worth saying plainly rather than letting a reader assume.' }
        ] },
        { kind: 'spec', title: 'A city on the Nederrijn, under the Veluwe', p: 'Arnhem received city rights on 13 July 1233 from Count Otto the Second of Gelre. It sits on the north bank of the Nederrijn with the Veluwe rising behind it: the Veluwezoom, 5,000 hectares and the first national park in the country, declared in 1930, whose Signaal Imbosch at 109.9 metres is also the highest point in Gelderland. Burgers\' Zoo, founded by Johan Burgers in 1913 and moved here in 1923, covers 45 hectares and recorded 1,074,594 visitors in 2024.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Twenty-four wijken, two villages and a river through the middle',
      intro: 'The statistics office divides the municipality into 24 wijken and 83 buurten. The names people actually use are older and fewer, and the river splits the city in a way no boundary table quite captures.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The centre and the north bank', p: 'The rebuilt heart of the city, the station, and the streets that climb towards the Veluwe. Most of the 49 percent single-person households and most of the applied-education students are within a few kilometres of here.' },
          { h3: 'Elden and the south bank', p: 'Across the Nederrijn, Elden and the districts around it, joined to the rest by the bridges. A separate village in living memory, now the southern half of the city, with its own primary schools.' },
          { h3: 'Schaarsbergen', p: 'North of the city on the edge of the Veluwe, a village inside the municipality, closer to the woods and the national park than to the centre and a genuine drive on a winter evening.' },
          { h3: 'Presikhaaf and the east', p: 'Post-war housing towards Velp and Westervoort, where the primary schools are fullest and the under-fifteen share is highest.' },
          { h3: 'The west', p: 'The districts towards Oosterbeek and Renkum, older housing on the slope, and the ground over which most of the September 1944 fighting moved.' },
          { h3: 'De Praets, \'t Vlot and the edges', p: 'The smallest named places in the municipality, along with parts of Terlet and Deelen out on the heath. Twenty-four wijken cover all of it, and none of those lines has ever decided who sits in which group.' }
        ] },
        { kind: 'p', text: 'The class reaches every one of them at one hour, and the only thing that determines placement is what the learner can already do.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure and its source, and the arithmetic that refuses to close',
      intro: 'The national count, the municipal entry, the bridge, the park, the zoo, and the published tallies for September 1944 exactly as their sources give them.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The municipal count', p: 'Statistics Netherlands, provisional, 1 January 2026: 171,822 residents; 85,669 households averaging 1.92 people, 41,787 of them single-person, 49 percent; 24,923 under fifteen; 22,672 aged fifteen to twenty-five; 52,031 aged twenty-five to forty-five; 28,522 aged sixty-five and over; 44 primary establishments with 13,320 pupils and 18 secondary with 9,070, both for 2025; 11,302 students at the applied level and 1,800 at university level; total area 10,154 hectares, land 9,774; density 1,733; 24 wijken and 83 buurten; 134,572 residents in 1995, a rise of 37,250.' },
          { h3: 'The municipality, described', p: 'Arnhem\'s own entry: 172,002 residents on 1 January 2026, 180 more than the national figure for the same date, both kept; 101.54 square kilometres, 97.82 of land and 3.72 of water, against 97.74 of land nationally, both kept; mayor Ahmed Marcouch; city rights on 13 July 1233 from Count Otto the Second of Gelre; the eleventh municipality of the Netherlands and the second of Gelderland after Nijmegen; settlements Elden and Schaarsbergen, De Praets and \'t Vlot, and parts of Terlet and Deelen.' },
          { h3: 'The landings', p: 'The entry on the battle: about 5,200 British airborne troops landed on 17 September 1944 and about 1,900 more on 18 September. It separately gives 30,000 men for the wider operation including actions in Noord-Brabant, which is a different quantity over a different area and is not used in the arithmetic on this page.' },
          { h3: 'The tallies', p: 'From the same entry: British losses about 1,500 dead and 6,340 taken prisoner; Polish losses 103 dead and 300 taken prisoner; German losses about 1,500 dead and 2,000 wounded or missing. Of about 2,500 men in the perimeter, 2,163 crossed the Rhine on the night of 25 to 26 September. The fighting ran from 17 to 25 September 1944.' },
          { h3: 'The bridge', p: 'The road bridge over the Nederrijn was built between 1932 and 1935 and opened in 1935; it is 601 metres long with a longest span of 120 metres. British troops held its northern end from 17 to 25 September 1944. It was destroyed on 7 October 1944 by British and American air attack, rebuilt in 1949 and usable from 1950, and renamed after Lieutenant-Colonel John Dutton Frost on 16 September 1978.' },
          { h3: 'The park and the zoo', p: 'The Veluwezoom: 5,000 hectares, given in the same entry as 50 square kilometres; declared the first national park in the Netherlands in 1930; managed by Natuurmonumenten; highest point Signaal Imbosch at 109.9 metres, also the highest point of Gelderland. Burgers\' Zoo: founded 1913 by Johan Burgers, moved to Arnhem in 1923, 45 hectares, 1,074,594 visitors in 2024 and 1,100,000 in 2019.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the municipality, the park, the zoo or any school named here, and claims none. The 1944 figures are quoted because they are the best-documented numbers this city has and because the people behind them deserve arithmetic that is done properly.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Ten thousand from seven thousand: build the program that refuses to add overlapping categories',
      intro: 'Four published tallies, one week, one force, and a sum that comes out 41 percent larger than the number of people it is supposed to describe.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Establish the population', p: 'About 5,200 British troops landed on 17 September and about 1,900 on 18 September, so the force this page reasons about is roughly 7,100 men. Every figure that follows has to be checked against that ceiling before it is used, and the learner writes the check first.' },
          { h3: '2. Add the outcomes and watch it break', p: 'About 1,500 dead plus 6,340 prisoners is 7,840, already 740 more than landed. Add the 2,163 who crossed the Rhine and the total is 10,003, an excess of 2,903 over the force, 41 percent more men than were ever there. No individual number is disputed.' },
          { h3: '3. Find where the sets touch', p: 'The learner lists the reasons the sum overshoots, and none of them is dishonesty: a man wounded and then captured belongs to two tallies; men who died in captivity may sit in both; the prisoner count runs past 25 September while the landing count stops on 18 September; the Polish troops are tallied separately at 103 and 300; and the 30,000 figure covers a wider operation entirely. Different populations, different windows, one addition.' }
        ] },
        { kind: 'table', caption: 'Four published tallies for September 1944, and what may be added to what', head: ['Figure', 'As published', 'Population it describes', 'Window', 'Safe to add to the others?'], rows: [
          ['Landed 17 September', 'about 5,200', 'British airborne, first lift', '17 September', 'yes, to the second lift'],
          ['Landed 18 September', 'about 1,900', 'British airborne, second lift', '18 September', 'yes, to the first lift'],
          ['Dead', 'about 1,500', 'British', 'not stated in the source', 'no, overlaps with prisoners'],
          ['Taken prisoner', '6,340', 'British', 'not stated in the source', 'no, overlaps with dead and wounded'],
          ['Crossed the Rhine', '2,163', 'those in the perimeter, about 2,500', 'night of 25 to 26 September', 'no, a different denominator'],
          ['Wider operation', '30,000', 'includes actions in Noord-Brabant', 'the whole operation', 'no, a different area entirely']
        ] },
        { kind: 'callout', h3: 'Before you add, prove the categories are disjoint and share one population', p: 'Addition assumes two things that data almost never guarantees: that no case belongs to both categories, and that both categories are drawn from the same set of people over the same period. Here neither holds. A soldier who was wounded, captured and later died can be inside three of these tallies at once, and the evacuation figure has a denominator of about 2,500 rather than 7,100. The overshoot of 2,903 is therefore information, not error: it is the record telling you that these columns were compiled for different purposes. The right response is not to pick the number you like but to say which population each figure describes and to stop adding across them. Every figure above is quoted from its source, the two landing figures are the only ones this page sums, and the table was built before this paragraph was written. These were people, and that is precisely why the arithmetic has to be honest.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any set of totals you are tempted to add',
      intro: 'Customers by channel, patients by diagnosis, students by programme, incidents by cause, users by device: real categories overlap constantly, and the plus sign does not warn you. Practised on the record this city knows best.',
      body: [
        { kind: 'table', caption: 'When two totals are about to be summed', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Name the population', 'Write down whose members each figure counts, before adding anything', 'Landings and prisoners treated as one set', 'A ceiling every total must respect'],
          ['Check the window', 'Confirm both figures cover the same period', 'A count to 18 September added to one running past 25', 'Comparable columns'],
          ['Test for overlap', 'Ask whether one case can appear in both; if yes, do not add', 'A wounded prisoner counted twice', 'Sums that mean something'],
          ['Use inclusion and exclusion', 'Where overlap is known, subtract the intersection instead of guessing', 'A 41 percent overshoot presented as a total', 'The right number, or an honest range'],
          ['Treat the overshoot as evidence', 'When a sum exceeds its ceiling, investigate the definitions rather than the data', 'A source dismissed as wrong', 'An understanding of how the record was made']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A class list, two hoops on the floor, and children asked to stand in the hoop for football and the hoop for swimming. Several want to stand in both. The count of the two hoops exceeds the class, and the children find out for themselves that the overlap has to be subtracted once. No screen, no war, and the whole rule.' },
          { h3: 'For teenagers', p: 'The six published figures in Python, each stored with its population and its window as fields rather than as a bare number, and an add function that refuses to operate on two records whose populations differ. Then the stretch: given only these figures, what is the widest and narrowest number of men who could have been both wounded and captured?' },
          { h3: 'For adults', p: 'The same discipline on a report from work in which category totals exceed the headline: channels, causes, product lines, patient groups. Adults nearly always find at least one dashboard whose segments sum past 100 percent and a colleague who has stopped mentioning it.' }
        ] },
        { kind: 'p', text: 'The population, household, area, school, park, zoo and bridge figures come from the offices and entries named beside them. The two landing figures are the only ones this page adds; the 7,840, the 10,003 and the 2,903 are shown precisely as what a wrong addition produces, and are labelled as such.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From two hoops on the floor to a function that refuses to add',
    intro: 'The starting rung is decided during the free hour, and the postcode plays no part in that decision.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Standing in both hoops', p: 'Children discover the overlap by being in it, and subtract it once.', courses: ['kids-coding-blocks-masterclass', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Sets, unions and intersections', p: 'Learners write union and intersection in Python and check totals against a ceiling.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Numbers that carry their definitions', p: 'Teenagers store population and window with every figure and make addition refuse mismatches.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Segments that sum past the whole', p: 'Adults audit a live report whose categories overlap and rebuild it with the intersections named.', courses: ['data-structures-algorithms-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will add the casualty figures for you without blinking. Why should a child in Arnhem learn to stop it?',
    intro: 'Because every one of those numbers is correctly sourced, and the sum of them is nonsense, and nothing in the arithmetic announces that.',
    p1: 'Give a tool the four tallies and ask for a total and it will produce one, promptly and politely, because addition is defined on numbers and it has four numbers. It has no way of knowing from the digits alone that a wounded prisoner sits in two of them, that one figure has a denominator of 2,500 rather than 7,100, or that the 30,000 covers a different area. Those facts live in the definitions, not in the values, and definitions are what get stripped away when a figure is copied into a cell.',
    p2: 'So the learner writes the version that keeps them. Not because the syntax is hard, but because storing a number together with the population it describes and the window it covers, and refusing to add across a mismatch, is a design decision a person has to make and then defend. A fourteen-year-old in Elden who has done that here will do it with channel totals at twenty-four and with patient groups at thirty-four, and will be the one who asks what the denominator was. The tools will keep improving at arithmetic. They will not start knowing what your columns mean.',
    closer: 'The case for an Arnhem child learning to code in 2026 is therefore not that they will work in archives. It is that numbers arrive stripped of their definitions, that adding them anyway is the commonest mistake in professional life, and that the habit of asking whose members these are is best learned once, carefully, on a record that matters.',
    blogAnchor: 'the longer argument for teaching a child to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a city split by a river and backed onto a national park',
    intro: 'Schaarsbergen is up on the heath, Elden is over the water, and the centre is a climb from both. None of that matters to a lesson that arrives through the connection.',
    cells: [
      { h3: 'No bridge, no hill, no bus', p: 'The lesson happens at home in Elden, Schaarsbergen or Presikhaaf at one fixed hour a week, in January as readily as in June.' },
      { h3: 'English throughout, Dutch school words kept', p: 'The teaching language is English. Groep, havo, vwo and profielkeuze stay in Dutch because those are the words the child meets at school, and nothing is translated in either direction.' },
      { h3: 'What the first hour produces', p: 'A piece of work that shows the real level, the name of the course that fits it, and a weekly slot. Nobody is asked for payment details to arrange any of it.' },
      { h3: 'Level decides the group', p: 'Two learners at the same stage share a group whether one is in Schaarsbergen and the other south of the river; two at different stages do not, however near they live.' },
      { h3: 'Two lessons a week, on the middle calendar', p: 'Usually eight lessons a month at one fixed time. Arnhem lies in the northern part of Gelderland, which takes its holidays with regio Midden, and the family\'s weeks away are settled before the slot is.' },
      { h3: 'A gap of three and a half or four and a half hours', p: 'Only the Dutch clock moves, so the distance to the teacher is shorter from late March to late October and longer through the winter. Either way the overlap covers late afternoon, early evening and the whole weekend.' }
    ],
    spec: { title: 'A city that had to be rebuilt and knows what its records cost', p: 'Arnhem was fought over for nine days in September 1944 and rebuilt afterwards, and it keeps its account of that week in museums, on the bridge and in the street names. It is a good place to teach a child that a number stands for something, and that adding two of them carelessly is a way of getting people wrong.' }
  },

  fees: {
    h2: 'The fee, in dollars, for every address in the municipality',
    intro: 'Put on the page so that nobody has to ask for it.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'One international rate applies and it is quoted in dollars, with no euro list beside it, so a family in Schaarsbergen sees exactly what a family in the centre sees. Payment follows the free lesson rather than preceding it, and it goes over WhatsApp once a course and a time are agreed. Pauses, plan changes and missed weeks are described on the pricing page.'
  },

  reviewsH2: 'Six families, in the words they used on Google',

  book: {
    h2: 'Give us the level; the side of the river is optional',
    intro: 'The first task might be two hoops on the floor and a class that will not fit in them, six figures in Python that refuse to be added, or a dashboard from work whose segments sum past the total.',
    success: 'Thank you. Your Arnhem class request has been sent.'
  },

  faq: {
    h2: 'Arnhem coding class questions',
    intro: 'The city, its record, its districts, the teaching and the terms.',
    items: [
      { q: 'Why does a coding page use the September 1944 figures?', a: 'Because they are the best-documented numbers this city has, and because they demonstrate the commonest mistake in data work better than any invented example could. About 7,100 British troops landed in the first two lifts; the published tallies of dead, prisoners and men evacuated across the Rhine total 10,003. Every figure is sourced and none is disputed. The categories overlap, the windows differ and one has a denominator of about 2,500, so they must not be summed. These were people, which is exactly why the arithmetic is done carefully here.' },
      { q: 'Is Arnhem the capital of Gelderland or is Nijmegen?', a: 'Arnhem is the capital and the second city. Nijmegen is larger, at 189,871 against 171,822 on 1 January 2026 by the national count. Being the seat of a province and being its biggest city are different things, and this page says so rather than letting the reader assume.' },
      { q: 'Which parts of the municipality does this page cover?', a: 'All of it: the city on the north bank, Elden and the districts south of the Nederrijn, Schaarsbergen up towards the Veluwe, De Praets and \'t Vlot, and the parts of Terlet and Deelen inside the boundary. The statistics office splits the whole into 24 wijken and 83 buurten, and none of those lines affects a class.' },
      { q: 'Is any of this taught in Dutch?', a: 'No. The lesson runs in English from start to finish. The Dutch words a school uses are kept as they are, so groep, havo, vwo and profielkeuze are spoken the way the child hears them, but a Dutch-language course is not something offered.' },
      { q: 'What time are classes for a family in Arnhem?', a: 'The teacher is three and a half hours ahead under Dutch summer time and four and a half hours ahead in winter, since Indian clocks do not change. Workable hours run from the end of the school day to mid-evening, with both weekend days open. One recurring slot is agreed at the free lesson and then kept.' },
      { q: 'What is in the free lesson?', a: 'The teacher looks for the edge of what the learner can already manage and sets one piece of work just past it. For a child that may be two hoops on the floor and a class that will not fit. For a teenager, six figures stored with their definitions and an addition that refuses. For an adult, a report from work whose categories overlap. It ends with a course, a rung, a weekly time and a price in dollars, and nothing has been charged.' },
      { q: 'Do you teach in Elden and Schaarsbergen too?', a: 'Yes, at the same hour and on the same terms as the centre. Schaarsbergen on the edge of the Veluwezoom is a real journey on a dark evening, and removing that journey is a large part of why an online class suits this municipality.' },
      { q: 'Is there a Modern Age Coders classroom in Arnhem?', a: 'No, and none is claimed near the bridge, in Presikhaaf or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Arnhem coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in an Arnhem group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or district. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'Downstream, up the province, and out to the country',
    html: 'Twenty minutes down the Waal is <a class="cg-inline-link" href="/coding-classes-in-nijmegen">Nijmegen</a>, larger than the capital and arguing about its own age; both sit inside <a class="cg-inline-link" href="/coding-classes-in-gelderland">Gelderland</a>, a province cut between two holiday calendars. Above them all is the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and anyone aiming at a trained model rather than a written program should look at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-gelderland', label: 'Gelderland' },
    { href: '/coding-classes-in-nijmegen', label: 'Nijmegen' }
  ],

  personalityCss: `
.cg-root.cg-arn .cg-hero-grid { align-items: start; gap: clamp(1.9rem, 4.4vw, 3.6rem); }
.cg-root.cg-arn .cg-hero h1 { font-weight: 500; letter-spacing: -0.007em; line-height: 1.14; }
.cg-root.cg-arn .cg-capsule { border-left-width: 4px; border-left-style: solid; border-bottom: 2px solid var(--cg-accent-soft); padding-left: 1.45rem; padding-bottom: 0.6rem; }
.cg-root.cg-arn .cg-eyebrow { letter-spacing: 0.1em; font-weight: 600; }
.cg-root.cg-arn .cg-section-head h2 { max-width: 33ch; }
.cg-root.cg-arn .cg-grid-3 { gap: clamp(1.25rem, 2.6vw, 2rem); }
.cg-root.cg-arn .cg-ladder-col { border-top: 5px solid var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-arn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-arn .cg-callout { border-left-width: 7px; }
`,

  dossier: {
    curriculumAuthority: 'City and municipality of Arnhem, Gelderland: 171,822 residents (CBS 1 January 2026), capital of the province and its second city, eleventh municipality of the country; 44 primary establishments (13,320 pupils) and 18 secondary (9,070), both 2025; 11,302 students at applied level and 1,800 at university level. City rights 13 July 1233. Settlements Elden, Schaarsbergen, De Praets, t Vlot, parts of Terlet and Deelen. Regio Midden holidays with the northern part of Gelderland. The city page argues from category overlap in its own historical record; the province page owns the two-calendar split and Nijmegen owns the oldest-city question.',
    localProject: 'Categories must be disjoint and share one population before they may be added. Published tallies for September 1944 in this city: about 5,200 British airborne landed on 17 September and about 1,900 on 18 September, a force of roughly 7,100; about 1,500 dead; 6,340 taken prisoner; 2,163 evacuated across the Rhine on the night of 25 to 26 September out of about 2,500 in the perimeter; Polish losses 103 dead and 300 prisoners; 30,000 for the wider operation including Noord-Brabant. Dead plus prisoners is 7,840, already 740 over the force; adding the evacuation gives 10,003, an excess of 2,903 or 41 percent. The overshoot is caused by overlapping membership (wounded then captured), differing windows and a different denominator, not by any figure being wrong. Distinct from the part-to-whole trap (Bandar Seri Begawan: a subset added to its superset) and from double counting after a join (Ash Sharqiyah North): here neither category contains the other and both are legitimate, so the fix is inclusion and exclusion plus a refusal to add across populations. Only the two landing figures are summed on the page.',
    requiredMentions: [
      '171,822',
      '85,669',
      '41,787',
      '134,572',
      '13,320',
      '9,070',
      '11,302',
      '1,074,594',
      'Signaal Imbosch',
      'Schaarsbergen',
      '13 July 1233',
      '2,163',
      '601 metres',
      'Veluwezoom'
    ],
    sources: [
      { claim: 'Municipality of Arnhem 171,822 residents on 1 January 2026 (CBS provisional); 85,669 households averaging 1.92, 41,787 single-person (49 percent); 24,923 aged 0 to 15; 22,672 aged 15 to 25; 52,031 aged 25 to 45; 28,522 aged 65 and over; 44 primary establishments (13,320 pupils) and 18 secondary (9,070), both 2025; HBO 11,302 and WO 1,800 (2025); total area 10,154 ha, land 9,774 ha; density 1,733; 24 wijken and 83 buurten; 134,572 in 1995, a rise of 37,250 (28 percent).', url: 'https://allecijfers.nl/gemeente/arnhem/' },
      { claim: 'Arnhem 172,002 residents on 1 January 2026; area 101.54 km2, land 97.82, water 3.72; mayor Ahmed Marcouch (PvdA); city rights 13 July 1233 from Count Otto II van Gelre; the eleventh municipality of the Netherlands and second in Gelderland after Nijmegen; on the Nederrijn; settlements the city plus Elden and Schaarsbergen, De Praets and t Vlot, and parts of Terlet and Deelen.', url: 'https://nl.wikipedia.org/wiki/Arnhem' },
      { claim: 'Battle of Arnhem, 17 to 25 September 1944: about 5,200 British paratroopers landed on 17 September and about 1,900 more on 18 September; 30,000 men for the wider operation including actions in Noord-Brabant; British losses about 1,500 dead and 6,340 taken prisoner; Polish losses 103 dead and 300 taken prisoner; German losses about 1,500 dead and 2,000 wounded or missing; of about 2,500 men in the perimeter, 2,163 crossed the Rhine on the night of 25 to 26 September.', url: 'https://nl.wikipedia.org/wiki/Slag_om_Arnhem' },
      { claim: 'John Frost bridge: built 1932 to 1935 and opened 1935; 601 metres long with a longest span of 120 metres; crosses the Nederrijn; renamed on 16 September 1978 after Lieutenant-Colonel John Dutton Frost of the 2nd Battalion, 1st Airborne Brigade, whose battalion took the north side; the north end was held roughly nine days, 17 to 25 September 1944; destroyed 7 October 1944 by RAF and USAF; rebuilt 1949 and usable from 1950.', url: 'https://nl.wikipedia.org/wiki/John_Frostbrug' },
      { claim: 'Nationaal Park Veluwezoom: 5,000 hectares, given also as 50 km2; declared the first national park of the Netherlands in 1930; managed by Natuurmonumenten; highest point Signaal Imbosch at 109.9 metres, also the highest point of Gelderland.', url: 'https://nl.wikipedia.org/wiki/Nationaal_Park_Veluwezoom' },
      { claim: 'Koninklijke Burgers Zoo: founded 1913 by Johan Burgers, moved to Arnhem in 1923; 45 hectares; 1,074,594 visitors in 2024 and 1,100,000 in 2019.', url: 'https://nl.wikipedia.org/wiki/Koninklijke_Burgers%27_Zoo' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any total of the 1944 tallies presented as a real number of men. The 7,840 and the 10,003 appear only as what a wrong addition produces, and the page says so each time.',
      'A number for how many men were both wounded and captured. Not stated in any source read; the project asks for the widest and narrowest values consistent with the published figures rather than asserting one.',
      'The zoo species and individual counts. The source string reads 462 with 3,210 or more individuals and its meaning was not confirmed, so no animal figure is used.',
      'Any comparison of the 2024 and 2019 visitor figures. One is exact to the individual and the other is round to the hundred thousand, so no change between them is computed.',
      'The number of buildings destroyed in the city, the length of the wider operation, and any casualty figure for civilians. Not researched and not stated.',
      'Anything the Gelderland page owns: the two holiday regions and the 51 municipalities. Anything the Nijmegen page owns: the oldest-city tests.'
    ]
  }
};
