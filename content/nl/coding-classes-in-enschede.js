'use strict';
// Enschede: the largest city of Overijssel, a textile town that lost its
// industry and rebuilt around two institutions. Spine: one of those
// institutions publishes a single student total for three campuses in three
// different cities, and there is no honest way to allocate it to one of them.

module.exports = {
  slug: 'coding-classes-in-enschede',
  code: 'ens',
  accent: '#7D3D36',
  accentRationale: 'Enschede: a madder brown for the old textile dye houses, set by the solver apart from Zaanstad\'s oxide red and Eindhoven\'s teal',
  pageType: 'city',
  place: {
    name: 'Enschede',
    eyebrow: 'Enschede, Overijssel',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Overijssel' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Enschede, Netherlands',
  title: 'Coding Classes in Enschede | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Enschede for ages 6 to 67, in Glanerbrug, Boekelo, Lonneker and Usselo. First lesson free, then one flat monthly fee.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in Enschede, the largest city of Overijssel, built on a student total that belongs to three cities at once.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'complete-typescript-programming-masterclass-college',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Enschede Learners',
    description: 'Ability-placed online coding, Python, TypeScript, AI and mathematics for children, teenagers and adults in Enschede, Glanerbrug, Boekelo, Lonneker and Usselo, taught in English.'
  },

  h1: 'Coding classes in Enschede, where one published student total belongs to three cities at once',
  capsuleQ: 'What are the best coding classes in Enschede?',
  capsule: 'Coding classes in Enschede serve 162,683 people (Statistics Netherlands, 1 January 2026), the largest city of Overijssel and the slowest-growing in this series at 9.9 percent since 1995. Its university of technology reported 12,038 students in June 2021; its university of applied sciences reports 27,505, spread across campuses in Enschede, Deventer and Apeldoorn, with no published split between them. Anybody who divides that total by three has invented a number. Teaching here is done by Modern Age Coders over a live connection, in English, for learners of any age from 6 up to 67. The opening lesson is given without charge; after that a group of five to ten costs USD 100 monthly and private tuition USD 150.',
  lead: 'Here is a question with no honest answer in the published record: how many students study in Enschede? One institution gives 12,038, dated June 2021. The other gives 27,505 with no date and three campuses, only one of which is here. The city itself counts 5,700 residents in applied higher education and 7,380 at university level, which measures something else again. Dividing 27,505 by three gives 9,168, and 9,168 is not a fact about anywhere. It is a number a person made up while trying to be helpful.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Enschede.',

  picks: {
    eyebrow: 'Course picks for Enschede',
    h2: 'Four courses for a city that had to reinvent its work once already',
    intro: 'A groep 5 child in Glanerbrug on the German line, a teenager in Boekelo whose village has no club, a student at one of the two institutions who wants typed code rather than another framework, and a parent in Roombeek retraining: four doors into one city.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python, turtle drawings and a first program that learns a rule, in English, for the groep 5 to 8 child in Usselo or Lonneker.' },
      { course: 'javascript-course-for-teens-beginners-interactive-web', band: 'Ages 13 to 17', note: 'JavaScript and the browser from first principles, for the teenager who wants a page that reacts rather than a page that sits there.' },
      { course: 'complete-typescript-programming-masterclass-college', band: 'College and adult', note: 'Typed JavaScript, React and Node, for the student at a technical institution who has had enough of runtime surprises.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Excel, SQL, Python and BI, for the working parent whose figures arrive from systems that count different things.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Enschede today',
      h2: 'The largest city of its province, and the slowest grower in this series',
      intro: 'The national register held 162,683 people on 1 January 2026, in 81,938 households averaging 1.94 people, on 140.73 square kilometres of land inside 142.72 of territory: a published 1,153 residents to the square kilometre. In 1995 the count was 148,034, so Enschede has gained 14,649 people in thirty-one years, a rise of 9.9 percent, the smallest of any city on this site.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'More young adults than children', p: '25,987 residents are between fifteen and twenty-five, 16 percent, against 21,778 under fifteen, 13 percent; 43,705 are between twenty-five and forty-five and 30,850 are sixty-five or over. 39,237 households hold one person, 48 percent. Two large institutions pull in young adults and the industry that once held families here has gone.' },
          { h3: 'Sixty primary schools over a wide municipality', p: '60 primary establishments teach 12,785 pupils and 19 secondary establishments teach 8,556, both for 2025. The municipality covers 140 square kilometres including several villages, which is why the primary count is high relative to the pupil numbers.' },
          { h3: 'Textiles, and then not', p: 'Enschede was the most important centre of textile production in the Netherlands, and by the 1960s the industry had gone entirely. The city has been rebuilding its working life ever since, which is the plainest local argument this page can make for learning something that is still being invented.' }
        ] },
        { kind: 'spec', title: 'Two dates that both mark a beginning', p: 'The University of Twente was founded in 1961 and opened on 14 September 1964 by Queen Juliana; it describes itself as the largest campus university in the Netherlands. Saxion, the university of applied sciences, was formed by merger in 1998 and teaches in Enschede, Deventer and Apeldoorn. The city itself received city rights around 1300, confirmed in 1325 by bishop Jan van Diest.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Ten wijken, four villages, and a border two kilometres from the tram stop',
      intro: 'The statistics office divides the municipality into 10 wijken and 70 buurten, the coarsest division of any city in this series, over an area larger than most. Four named villages sit inside the boundary.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The centre and Roombeek', p: 'The rebuilt heart of the city, and to the north Roombeek, the district reconstructed after the explosion of 13 May 2000 destroyed about 42 hectares of it. New housing, a museum quarter and streets laid out in the last twenty years.' },
          { h3: 'The campus, north-west', p: 'The University of Twente sits on its own grounds outside the built-up city, which is what the phrase campus university means here and why the student population is less visible in the streets than in Groningen or Nijmegen.' },
          { h3: 'Glanerbrug', p: 'East, hard against the German border, effectively continuous with the settlement on the other side. A village with its own schools whose nearest large city in one direction is not in this country.' },
          { h3: 'Boekelo and Usselo', p: 'South-west, out among the fields towards Haaksbergen. Village primary schools, a bus for secondary, and no realistic prospect of an evening club forming for a handful of interested children.' },
          { h3: 'Lonneker and Twekkelo', p: 'North and west, the countryside inside the municipal boundary. Lonneker was a separate municipality until the twentieth century and still reads as a village rather than a district.' },
          { h3: 'The post-war districts', p: 'The rings of housing built while the mills were still running and emptied of their industry afterwards. This is where most of the 48 percent single-person households are, and where the city\'s slow growth is most visible.' }
        ] },
        { kind: 'p', text: 'Placement runs on stage alone, so a learner from any of the ten wijken or any of the villages can end up in the same group, and the German boundary a short walk from Glanerbrug is irrelevant to every part of it.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure and its source, and the four student counts that answer four questions',
      intro: 'The national count, the municipal entry, the two institutions, and the two disasters this city measures its history by.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The municipal count', p: 'Statistics Netherlands, provisional, 1 January 2026: 162,683 residents; 81,938 households for 2025 averaging 1.94 people, 39,237 of them single-person, 48 percent; 21,778 under fifteen; 25,987 aged fifteen to twenty-five; 43,705 aged twenty-five to forty-five; 30,850 aged sixty-five and over; 60 primary establishments with 12,785 pupils and 19 secondary with 8,556, both 2025; 5,700 residents in applied higher education and 7,380 at university level, both 2025; total area 14,272 hectares, land 14,073; density 1,153; 10 wijken and 70 buurten; 148,034 residents in 1995, a rise of 14,649.' },
          { h3: 'The municipality, described', p: 'Its own entry: 162,671 residents on 1 January 2026, twelve fewer than the national figure for the same date, both kept; 142.72 square kilometres, 140.83 of land and 1.89 of water, against 140.73 of land nationally, both kept; mayor Roelof Bleker; in Overijssel, on the German border; villages Lonneker, Boekelo, Usselo, Glanerbrug and Twekkelo; city rights around 1300, confirmed in 1325 by bishop Jan van Diest; the most important centre of textile production in the Netherlands, an industry entirely gone by the 1960s.' },
          { h3: 'The university of technology', p: 'The University of Twente: founded 1961, opened on 14 September 1964 by Queen Juliana; 12,038 students in June 2021; 1,810 academic staff and 1,340 support staff; described as the largest campus university in the Netherlands.' },
          { h3: 'The university of applied sciences', p: 'Saxion: 27,505 students and 2,818 staff, the student figure undated in the entry read; formed by merger in 1998; campuses in Enschede, Deventer and Apeldoorn. No breakdown of the 27,505 between the three cities appears in that entry, and none is invented on this page.' },
          { h3: 'The fire of 1862', p: 'A fire beginning on 7 May 1862 in a house on the Kalanderstraat destroyed the entire historic centre inside the moats. Two people died and 650 families were left without a home. One source gives the town a population of approximately 4,000 at the time; another gives about 4,500 with 3,675 people made homeless. All of those figures are printed here and none is combined with another.' },
          { h3: 'The explosion of 2000', p: 'On 13 May 2000 at about 15:35 a fireworks depot exploded: 23 people died, four of them firefighters, and nearly a thousand were injured. 200 homes were destroyed and about 1,500 badly damaged, 1,250 people were displaced, and about 42 hectares of Roombeek were laid waste. Damage was put at roughly a billion guilders, given elsewhere as 454 million euro.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the municipality, either institution or any school named here and claims none. The 1862 and 2000 figures are quoted because they are the city\'s own record and because people are behind them, which is a reason to handle them carefully rather than a reason to leave them out.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'How many students study here? Build the answer that refuses to allocate what nobody has split',
      intro: 'Four published figures, four different questions, and one total that belongs to three cities with no published share for any of them.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Sort the four figures by what they count', p: '12,038 is students enrolled at one institution, dated June 2021. 27,505 is students enrolled at another institution across three cities, undated. 5,700 and 7,380 are residents of this municipality registered in applied and university education respectively, dated 2025. Four counts, four populations, four dates, and no two of them are about the same thing.' },
          { h3: '2. Try to allocate the 27,505 and fail honestly', p: 'The obvious moves are to divide by three, giving 9,168, or to divide in proportion to the three cities\' populations. Both produce a number, neither has any support in the sources, and the second is worse because it looks principled. The right output is a range: somewhere between none and all of the 27,505 are in Enschede, and the record read here narrows it no further.' },
          { h3: '3. Say what would settle it', p: 'A campus-level enrolment breakdown, or a figure for students living in the municipality, or a published headcount for the Enschede site. The learner writes that sentence into the output, because a result that names its missing input is useful and a result that guesses is not.' }
        ] },
        { kind: 'table', caption: 'Four published student figures, and what each one is about', head: ['Figure', 'Counts', 'Where', 'Date', 'Can it be added to the others?'], rows: [
          ['12,038', 'enrolments at the university of technology', 'one campus, in this city', 'June 2021', 'no, different population and date'],
          ['27,505', 'enrolments at the university of applied sciences', 'three cities together', 'undated in the entry read', 'no, and it cannot be split either'],
          ['5,700', 'residents of the municipality in applied higher education', 'living here, studying anywhere', '2025', 'no, a residence count'],
          ['7,380', 'residents of the municipality at university level', 'living here, studying anywhere', '2025', 'no, a residence count'],
          ['9,168', 'nothing', 'nowhere', 'never', 'no: this is 27,505 divided by three']
        ] },
        { kind: 'callout', h3: 'An aggregate cannot be pushed down to its parts without a published split', p: 'This is one of the most common quiet fabrications in professional work. A group reports one revenue figure and somebody needs it by country; a chain reports one headcount and somebody needs it by branch; an institution reports one enrolment and somebody needs it by campus. Dividing equally is obviously arbitrary. Dividing in proportion to something else, population or floor space or last year\'s share, feels rigorous and is still an assumption dressed as a method, because the thing being allocated may not follow that pattern at all. The honest output is a bound plus a sentence naming the datum that would close it. A learner who has once refused to produce 9,168 will refuse a great many plausible numbers later, which is a more valuable habit than any syntax. The five rows above are quoted from their sources except the last, which is arithmetic included precisely so it can be rejected.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any total you are being asked to break down',
      intro: 'Group revenue by region, national figures by district, a chain by store, a survey by subgroup: the request always sounds reasonable and the data usually will not support it. Practised on the two institutions in this city.',
      body: [
        { kind: 'table', caption: 'When somebody wants the parts and only the whole was published', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Check for a published split', 'Look for the breakdown before reaching for a method', 'A model built where a table already exists', 'The real answer, sometimes'],
          ['Reject equal division', 'Never divide by the number of parts to fill a gap', '9,168 entering a spreadsheet as a fact', 'A gap that stays visible'],
          ['Distrust proportional splits', 'Allocating by population or size is an assumption, not evidence', 'A rigorous-looking fabrication', 'An assumption you must defend out loud'],
          ['Report a bound', 'Give the range the data supports, even when it is nought to everything', 'False precision', 'An answer that cannot be wrong'],
          ['Name the missing datum', 'Say which single figure would close the question', 'A dead end presented as an answer', 'A next step for whoever asked']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A bag holding thirty sweets that three children shared yesterday, and the question of how many each one had. The children discover that ten each is only right if they shared equally, that nobody said they did, and that the honest answer is between nought and thirty for each of them unless somebody remembers.' },
          { h3: 'For teenagers', p: 'The four figures in Python, each stored with its population, place and date, a function that refuses to add records whose fields differ, and an allocator that returns a range rather than a value. The stretch: what is the tightest bound on the Enschede share that these four figures together can support?' },
          { h3: 'For adults', p: 'The same discipline on a group total at work that somebody needs by region. Adults almost always find that an allocation made once, by a method nobody wrote down, has been carried forward for years and is now quoted as a measurement.' }
        ] },
        { kind: 'p', text: 'The population, household, area, school, institution and disaster figures come from the offices and entries named beside them, with their own dates where the sources give them. The 9,168 is this page dividing a published total by three in order to reject it, and it is labelled as such wherever it appears.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a shared bag of sweets to an allocator that returns a range',
    intro: 'The starting rung is decided in the free hour, and the wijk or village plays no part in it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Who had how many?', p: 'Children find that a shared total says nothing about the individual shares.', courses: ['kids-coding-blocks-masterclass', 'python-ai-kids-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Totals and parts', p: 'Learners write the bound rather than the guess and explain why the guess is worse.', courses: ['maths-through-coding', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 14 to 18', h3: 'Records that carry their scope', p: 'Teenagers give every figure a place, a population and a date, and make addition refuse mismatches.', courses: ['javascript-course-for-teens-beginners-interactive-web', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Allocations at work', p: 'Adults trace a regional breakdown back to the method that produced it, if there was one.', courses: ['complete-typescript-programming-masterclass-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Ask an AI how many students are in Enschede and it will give you a number. Why should a child here learn that there isn\'t one?',
    intro: 'Because four figures are available, they count four different things, and the most quotable of them covers three cities.',
    p1: 'A tool asked this question will assemble something plausible, most likely by adding an institutional enrolment to another institutional enrolment, or by quoting the larger figure alone. Neither move is careless in the ordinary sense; both follow from treating numbers as interchangeable once they share a unit. What is missing is not arithmetic but bookkeeping: which population, which place, which date. Those fields are usually absent from the text a model reads, and absent fields cannot be checked.',
    p2: 'So the learner builds the record that carries them and the function that refuses. The value is not in the code, which is short, but in the moment of deciding that no answer is better than an invented one, and then writing down what would produce a real answer. A fourteen-year-old in Glanerbrug who has declined to divide 27,505 by three will decline to allocate a group total by headcount at twenty-four, and will ask instead whether anybody has the branch-level table. The tools will keep getting better at producing numbers. Knowing which numbers should not exist stays a person\'s job.',
    closer: 'The case for an Enschede child learning to code in 2026 is therefore not about universities. It is that the pressure to produce a figure is constant, that dividing a total to meet it is the easiest fabrication in the world, and that a child who has once said the data does not support this will keep saying it when it matters.',
    blogAnchor: 'the case for teaching a child to code while AI writes it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes across 140 square kilometres and four villages',
    intro: 'Boekelo and Usselo are out among the fields, Glanerbrug is on the border, and Lonneker is a village that happens to be inside a city. The lesson reaches all of them without a bus timetable.',
    cells: [
      { h3: 'No evening journey at all', p: 'The class runs at the kitchen table in Glanerbrug, Boekelo or the centre at one fixed hour every week, whatever the weather is doing across the fields.' },
      { h3: 'One language for the lesson, another for the school terms', p: 'All instruction happens in English. Four Dutch words are deliberately left alone, groep and havo and vwo and profielkeuze, since a child has to recognise them on a real timetable. Nothing gets converted between the two languages.' },
      { h3: 'What the first hour produces', p: 'Work at the level the learner is genuinely at, the name of the course that fits, and a weekly slot, all arranged without any payment details.' },
      { h3: 'Stage decides the group', p: 'Two learners at the same point work together whether one is in Usselo and the other in Roombeek, and two at different points do not, however close they live.' },
      { h3: 'Two lessons a week, on the northern calendar', p: 'Usually eight lessons a month at one fixed time. Enschede takes its school holidays with regio Noord along with the rest of Overijssel, and holiday weeks are written into the schedule before a time is fixed.' },
      { h3: 'The distance to the teacher changes with the season', p: 'Dutch clocks go forward in spring and back in autumn while Indian ones stay put, which makes the gap three and a half hours across the summer months and four and a half across the winter ones. Anything between the school bell and mid-evening works, and so does either weekend day.' }
    ],
    spec: { title: 'A city where the nearest large centre may be in another country', p: 'From Glanerbrug the German settlement across the line is closer than the middle of Enschede, and Münster is a more natural destination than Zwolle. A weekly class delivered over the connection is the same class a family in the centre gets, and it is the only version that does not involve a decision about which direction to travel in.' }
  },

  fees: {
    h2: 'One tariff in dollars for the city and its villages',
    intro: 'Set out here so that nobody has to ask.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'Outside India there is a single price and it is in dollars, with no euro list, so Boekelo is quoted exactly what the centre is quoted. Nothing is collected until the free lesson has settled a course and a time, and then it goes through WhatsApp. Pausing, switching plan and missing a week are covered on the pricing page.'
  },

  reviewsH2: 'What six families wrote on Google, unedited',

  book: {
    h2: 'Start with the level; the village can follow',
    intro: 'The first task might be a bag of sweets three children shared yesterday, four figures in Python that refuse to be added, or a regional breakdown at work whose method nobody can name.',
    success: 'Thank you. Your Enschede class request has been sent.'
  },

  faq: {
    h2: 'Enschede coding class questions',
    intro: 'The city, its institutions, its villages, the teaching and the terms.',
    items: [
      { q: 'How many students actually study in Enschede?', a: 'No source read for this page answers that. The university of technology reported 12,038 in June 2021. The university of applied sciences reports 27,505 with no date given, across campuses in Enschede, Deventer and Apeldoorn, and publishes no split between them. The municipality separately counts 5,700 residents in applied higher education and 7,380 at university level for 2025, which counts where people live rather than where they study. Refusing to divide 27,505 by three is the project on this page.' },
      { q: 'Which parts of the municipality does the class reach?', a: 'All of them: the centre and Roombeek, the campus side, the post-war districts, and the villages of Glanerbrug, Boekelo, Usselo, Lonneker and Twekkelo. The statistics office divides the municipality into 10 wijken and 70 buurten across 140 square kilometres.' },
      { q: 'We live in Glanerbrug, right on the German border. Does that matter?', a: 'The class is unaffected by it. Somebody in Glanerbrug is placed in whichever group matches their stage, at whatever hour that group runs, for the identical fee a family in the centre pays. The border arguably makes the case stronger: in one direction the nearest sizeable town is across it, and driving there on a weekday evening is not something anyone does.' },
      { q: 'Is any of this taught in Dutch?', a: 'It is not. Every lesson is conducted in English. The four school words a Dutch child actually encounters, groep, havo, vwo and profielkeuze, are left untranslated on purpose. There is no Dutch edition of this course, and none in German for the families near the border.' },
      { q: 'What time are classes for a family in Enschede?', a: 'India holds one time all year and the Netherlands does not, so the teacher is three and a half hours in front during the summer months and four and a half during the winter ones. The practical window opens when school finishes and closes around mid-evening, and Saturday and Sunday are free of it entirely. A single repeating slot gets fixed at the free lesson.' },
      { q: 'Why does the page mention the 1862 fire and the 2000 explosion?', a: 'Because they are the two events this city measures its history by, and because the published figures for them are a lesson in careful reading. The fire of 7 May 1862 killed two people and left 650 families homeless in a town whose population one source gives as approximately 4,000 and another as about 4,500. The explosion of 13 May 2000 killed 23 people, four of them firefighters, injured nearly a thousand and destroyed about 42 hectares of Roombeek. The page quotes each figure as its source gives it and combines none of them.' },
      { q: 'What is in the free lesson?', a: 'Work begins at the boundary of what the learner can already handle, with a single task set just outside it. Three children and a bag of sweets suits a young one. A teenager gets four figures that carry their populations and will not add. An adult brings in a regional breakdown from work that nobody can explain the method for. By the close a course has been named, a rung chosen, a weekly time booked and a dollar figure quoted, with no money taken.' },
      { q: 'Is there a Modern Age Coders classroom in Enschede?', a: 'No, and none is claimed on the campus, in Roombeek or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Enschede coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in an Enschede group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or district. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'West along the A1, out to the province, and up to the country',
    html: 'Enschede is the largest city of <a class="cg-inline-link" href="/coding-classes-in-overijssel">Overijssel</a>, whose page turns a dike standard into a lifetime probability; west along the A1 is <a class="cg-inline-link" href="/coding-classes-in-apeldoorn">Apeldoorn</a>, one of the three cities the applied university counts in a single total. Sitting above all of it is the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>. Should the interest turn out to be models rather than programs, two further pages exist for that: <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> and the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-overijssel', label: 'Overijssel' },
    { href: '/coding-classes-in-apeldoorn', label: 'Apeldoorn' }
  ],

  personalityCss: `
.cg-root.cg-ens .cg-hero-grid { align-items: end; gap: clamp(1.55rem, 3.9vw, 3rem); }
.cg-root.cg-ens .cg-hero h1 { font-weight: 600; letter-spacing: -0.011em; line-height: 1.1; }
.cg-root.cg-ens .cg-capsule { border-left-width: 6px; border-left-style: dotted; padding-left: 1.45rem; }
.cg-root.cg-ens .cg-eyebrow { letter-spacing: 0.14em; font-weight: 600; }
.cg-root.cg-ens .cg-section-head h2 { max-width: 34ch; }
.cg-root.cg-ens .cg-grid-3 { gap: clamp(1.1rem, 2.3vw, 1.8rem); }
.cg-root.cg-ens .cg-ladder-col { border-top: 4px dashed var(--cg-accent); padding-top: 1.1rem; }
.cg-root.cg-ens .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ens .cg-callout { border-left-width: 5px; border-left-style: double; }
`,

  dossier: {
    curriculumAuthority: 'City and municipality of Enschede, Overijssel: 162,683 residents (CBS 1 January 2026), the largest city of the province and the slowest-growing in this series at 9.9 percent since 1995; 60 primary establishments (12,785 pupils) and 19 secondary (8,556), both 2025; 5,700 residents in applied higher education and 7,380 at university level. University of Twente (1961, opened 1964); Saxion (1998), campuses in three cities. Villages Lonneker, Boekelo, Usselo, Glanerbrug, Twekkelo; German border. Regio Noord holidays with the rest of Overijssel. The city page argues from an unallocatable aggregate; the province page owns the dike-standard arithmetic.',
    localProject: 'An aggregate cannot be pushed down to its parts without a published split. Four student figures are available and none answers the question: 12,038 enrolled at the University of Twente in June 2021; 27,505 enrolled at Saxion, undated in the entry read and spread across Enschede, Deventer and Apeldoorn with no published breakdown; 5,700 municipal residents in applied higher education and 7,380 at university level for 2025, which count residence rather than study. Dividing 27,505 by three gives 9,168, which is a fabrication, and a population-weighted split is a fabrication that looks principled. The honest output is a bound from none to all, plus a named missing datum. Distinct from the two-frames traps used elsewhere in the cluster and from largest-remainder apportionment (Al Amarat, where the parts were published and only the rounding was at issue): here the parts were never published at all. The 9,168 appears only in order to be rejected.',
    requiredMentions: [
      '162,683',
      '81,938',
      '39,237',
      '148,034',
      '12,785',
      '8,556',
      '27,505',
      '12,038',
      '9,168',
      'Roombeek',
      'Glanerbrug',
      'Boekelo',
      'Roelof Bleker',
      '13 May 2000'
    ],
    sources: [
      { claim: 'Enschede 162,683 residents on 1 January 2026 (CBS provisional); 81,938 households (2025) averaging 1.94, 39,237 single-person (48 percent); 21,778 aged 0 to 15; 25,987 aged 15 to 25; 43,705 aged 25 to 45; 30,850 aged 65 and over; total area 14,272 ha, land 14,073 ha; density 1,153; 60 primary establishments (12,785 pupils) and 19 secondary (8,556), both 2025; HBO 5,700 and WO 7,380 (2025); 10 wijken and 70 buurten; 148,034 in 1995, a rise of 14,649 (9.9 percent).', url: 'https://allecijfers.nl/gemeente/enschede/' },
      { claim: 'Enschede 162,671 residents on 1 January 2026; 142.72 km2 (140.83 land, 1.89 water); mayor Roelof Bleker (independent); in Overijssel on the German border; villages Lonneker, Boekelo, Usselo, Glanerbrug and Twekkelo; city rights around 1300, confirmed in 1325 by bishop Jan van Diest; the most important centre of textile production in the Netherlands, with the industry entirely gone by the 1960s; the 2000 disaster killed 23 people including four firefighters and injured nearly a thousand.', url: 'https://nl.wikipedia.org/wiki/Enschede' },
      { claim: 'University of Twente founded 1961 and opened on 14 September 1964 by Queen Juliana; 12,038 students in June 2021; 1,810 academic and 1,340 support staff; the largest campus university in the Netherlands.', url: 'https://nl.wikipedia.org/wiki/Universiteit_Twente' },
      { claim: 'Saxion Hogeschool: 27,505 students, undated in the infobox, and 2,818 staff; formed by merger in 1998; campuses in Enschede, Deventer and Apeldoorn.', url: 'https://nl.wikipedia.org/wiki/Saxion_Hogeschool' },
      { claim: 'The Enschede fire began on 7 May 1862 in a house on the Kalanderstraat; two people died and 650 families were made homeless; the entire historic centre inside the moats was destroyed; the town had approximately 4,000 inhabitants.', url: 'https://nl.wikipedia.org/wiki/Stadsbrand_van_Enschede_(1862)' },
      { claim: 'The Enschede fireworks disaster occurred on 13 May 2000 at about 15:35: 23 dead including four firefighters, about 950 injured, 200 homes destroyed and about 1,500 badly damaged, 1,250 people displaced, about 42 hectares of Roombeek affected; the company was S.E. Fireworks; damage about one billion guilders, given as 454 million euro.', url: 'https://nl.wikipedia.org/wiki/Vuurwerkramp_Enschede' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any figure for the number of Saxion students in Enschede. No published split exists in the sources read, and the page reports a bound rather than a value.',
      'Any sum of the four student figures. They count four different populations on different dates and are never added.',
      'A single population for Enschede in 1862. One source gives approximately 4,000 and another about 4,500 with 3,675 made homeless; all are quoted and none is preferred or combined.',
      'A share of the 1862 town made homeless. It would require combining figures from two sources that disagree about the denominator.',
      'The distance from Glanerbrug to the German border or to Munster in kilometres. Described qualitatively; no figure was read at source.',
      'Anything the Overijssel page owns: the dike standards and the 25 municipalities. Anything the Apeldoorn page owns: the settlement figures and the residual.'
    ]
  }
};
