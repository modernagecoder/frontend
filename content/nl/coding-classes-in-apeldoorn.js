'use strict';
// Apeldoorn: twelve settlements on the Veluwe, from a town of 141,255 to a
// hamlet of 100, inside the ninth largest municipality in the country by area.
// Spine: the parts are dated 2023 and the whole is dated 2026, the residual is
// 2,012, and the growth explanation that almost fits it is not evidence.

module.exports = {
  slug: 'coding-classes-in-apeldoorn',
  code: 'apd',
  accent: '#813450',
  accentRationale: 'Apeldoorn: a heathland rose set by the solver well away from Amsterdam\'s brick red and Arnhem\'s heather purple',
  pageType: 'city',
  place: {
    name: 'Apeldoorn',
    eyebrow: 'Apeldoorn, Gelderland',
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
  routeLabel: 'Apeldoorn, Netherlands',
  title: 'Coding Classes in Apeldoorn | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Apeldoorn for ages 6 to 67, from Ugchelen and Beekbergen to Uddel and Loenen. First lesson free, then one flat fee.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families across the twelve settlements of Apeldoorn, built on the residual you get when the parts and the whole are dated differently.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'python-programming-masterclass-zero-to-advanced-college',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Apeldoorn Learners',
    description: 'Ability-placed online coding, Python, AI and mathematics for children, teenagers and adults across Apeldoorn, Ugchelen, Beekbergen, Uddel, Loenen and the smaller Veluwe settlements, taught in English.'
  },

  h1: 'Coding classes in Apeldoorn, where the twelve villages fall 2,012 short of the town they belong to',
  capsuleQ: 'What are the best coding classes in Apeldoorn?',
  capsule: 'Coding classes in Apeldoorn serve a municipality of 169,212 people (Statistics Netherlands, 1 January 2026) spread across twelve settlements on the Veluwe, from the town itself at 141,255 down to Radio Kootwijk at about 100. Add the twelve published settlement figures and you get 167,200, which is 2,012 short of the municipal total, and the reason is that the settlement figures are dated 2023 and the municipal figure is dated 2026. Modern Age Coders teaches live online in English to all twelve, for ages 6 to 67; the first lesson is free, and after it a group of five to ten is USD 100 a month and one-to-one is USD 150.',
  lead: 'The twelve settlements of this municipality are published with 2023 populations. The municipality is published with a 2026 one. Add the twelve and you are 2,012 people short, and the tempting move is to call that three years of growth and move on. It is a tempting move because it almost works: the municipality has been adding about 624 people a year since 1995, so three years would be roughly 1,872. Almost is the problem. A child who has met a residual that fits a story without proving it has learned something most adults never do.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Apeldoorn.',

  picks: {
    eyebrow: 'Course picks for Apeldoorn',
    h2: 'Four courses for a town of 141,255 and eleven villages around it',
    intro: 'A groep 5 child in Beekbergen with a village school and no club, a teenager in Ugchelen who wants Python before the profielkeuze rather than after, an adult in the town retraining out of an office job, and a parent in Loenen who has been handed a dashboard: four doors into one very wide municipality.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python, turtle drawings and a first program that learns a rule, in English, for the groep 5 to 8 child in Uddel or Klarenbeek as much as in the town.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Two years from the first line to real projects, for the teenager whose school offers informatica in the prospectus and not on the timetable.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'College and adult', note: 'Python from nothing to advanced, live, for the adult who has decided that this is the year they stop asking somebody else to run the numbers.' },
      { course: 'data-analysis-mastery-course-college', band: 'Adults', note: 'Excel, SQL, Python and BI for the working parent whose monthly figures come from tables with different dates on them.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Apeldoorn today',
      h2: 'A town on the Veluwe, eleven villages, and 340 square kilometres between them',
      intro: 'The national register held 169,212 people in the municipality on 1 January 2026, in 76,875 households averaging 2.14 people, on 339.86 square kilometres of land inside 341.15 of territory. The published density is 496 to the square kilometre, the lowest of any city in this series, because most of that land is Veluwe. In 1995 the count was 149,869, so the municipality has gained 19,343 people in thirty-one years, a rise of 13 percent.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The oldest city profile on this site', p: '38,724 residents are sixty-five or over, 23 percent, and 24,949 are under fifteen. Only 19,199 are between fifteen and twenty-five, 11 percent, the smallest young-adult share of any city here, because Apeldoorn has no university and its school leavers go to Zwolle, Nijmegen or further. 29,081 households hold one person, 38 percent, also the lowest here.' },
          { h3: 'Seventy-one primary schools', p: '71 primary establishments teach 13,491 pupils, an average of 190 each, and 20 secondary establishments teach 10,530, an average of 527. A municipality this wide needs a primary school in every village and can only afford secondary schools in the town, which is a commute for every teenager in Uddel, Hoenderloo or Klarenbeek.' },
          { h3: 'Ninth by area, twelfth by people', p: 'Apeldoorn is the ninth largest municipality in the country by area and the twelfth by population, and the largest in Gelderland by area. The Veluwe fills most of it: heath, forest and the Torenberg at 107.1 metres.' }
        ] },
        { kind: 'spec', title: 'A palace, a hamlet of a hundred, and everything between', p: 'Het Loo was built in 1689 for stadhouder Willem the Third, became a museum in 1984, closed for renovation from 2018 and reopened to visitors in 2022. At the other end of the municipality, Radio Kootwijk had about 100 residents in 2023 and Hoog Soeren about 235. The same weekly class is available to a child in either.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Twelve settlements, published with 2023 populations',
      intro: 'These are the figures the municipal entry gives, all dated 2023, and they are the input to the project below. The municipal total against which they are compared is dated 1 January 2026.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Apeldoorn, 141,255', p: 'The town itself: the station, the centre, the post-war districts and the business parks. On these figures it holds 84.5 percent of the settlement total, which is a concentration matched by almost nowhere else in this series.' },
          { h3: 'Ugchelen, 6,310', p: 'South-west of the town against the woods, close enough to walk in and separate enough to have its own name, its own schools and its own opinion about being called a district.' },
          { h3: 'Beekbergen, 4,925, and Lieren, 1,335', p: 'South of the town on the old road towards Arnhem, two village cores with primary schools and a bus to the secondary schools in the town.' },
          { h3: 'Uddel, 3,435, and Hoenderloo, 1,340', p: 'North-west and west, out on the Veluwe proper. From Uddel the nearest secondary school is a genuine journey, and a weekly evening class in the town is not a realistic proposition.' },
          { h3: 'Loenen, 3,345, Klarenbeek, 1,755, Wenum-Wiesel, 2,110', p: 'East and north of the town towards the IJssel, three village communities each with a school and a hall and no coding club.' },
          { h3: 'Beemte Broekland 1,055, Hoog Soeren 235, Radio Kootwijk 100', p: 'The smallest three. Radio Kootwijk is a hamlet round a former transmitter building in the middle of the forest, and a child living there gets exactly the same class at exactly the same hour as a child in the centre of the town.' }
        ] },
        { kind: 'p', text: 'Twelve settlements, one class, one hour. Where a learner lives has never determined which group they join; what they can already do always has.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure, its office and its date, with the dates kept visible',
      intro: 'The national count for 2026, the municipal entry for the settlements in 2023, the palace, and the two totals that differ.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The municipal count, 1 January 2026', p: 'Statistics Netherlands, provisional: 169,212 residents; 76,875 households averaging 2.14 people, 29,081 of them single-person, 38 percent; 24,949 under fifteen; 19,199 aged fifteen to twenty-five; 40,791 aged twenty-five to forty-five; 38,724 aged sixty-five and over; 71 primary establishments with 13,491 pupils and 20 secondary with 10,530; total area 34,115 hectares, land 33,986; density 496; 16 wijken and 95 buurten; 149,869 residents in 1995, a rise of 19,343.' },
          { h3: 'The settlements, 2023', p: 'From the municipal entry, all dated 2023: Apeldoorn 141,255; Ugchelen 6,310; Beekbergen 4,925; Uddel 3,435; Loenen 3,345; Wenum-Wiesel 2,110; Klarenbeek 1,755; Hoenderloo 1,340; Lieren 1,335; Beemte Broekland 1,055; Hoog Soeren 235; Radio Kootwijk 100. Twelve figures, one reference year, and it is not the reference year of the municipal total.' },
          { h3: 'The municipality, described', p: 'The same entry: 169,222 residents on 1 January 2026, ten more than the national figure for the same date, both kept; 341.15 square kilometres, 339.89 of land and 1.26 of water, against 339.86 of land nationally, both kept; mayor Ton Heerts since 18 December 2019; the twelfth largest municipality of the Netherlands by population and the ninth by area, and the largest in Gelderland by area; on the Veluwe, whose Torenberg reaches 107.1 metres.' },
          { h3: 'The two totals', p: 'The twelve settlement figures sum to 167,200. The municipal figure for 1 January 2026 is 169,212. The difference is 2,012, and this page treats that difference as a question rather than as a fact about anywhere.' },
          { h3: 'The rate of change', p: 'From the same national source: 149,869 residents in 1995 and 169,212 in 2026, a gain of 19,343 over thirty-one years, which is an average of about 624 a year. Three years at that average would be about 1,872. That figure is arithmetic on published totals and is used on this page only to show why a tempting explanation is not proof.' },
          { h3: 'Het Loo', p: 'Built in 1689 for stadhouder Willem the Third; a museum since 1984 after a restoration in the 1970s; closed for renovation from 2018 and open to visitors again from 2022. No visitor numbers were found at source and none is stated here.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection to the municipality, the palace or any school named on this page and claims none. They appear because a page that says it teaches Apeldoorn should be able to show which Apeldoorn, and on which date.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'A shortfall of 2,012: build the program that will not accept a story because it nearly fits',
      intro: 'Twelve parts from one year, one whole from another, and a gap with at least two causes that the published record cannot tell apart.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Add the parts', p: 'The learner sums the twelve settlement figures and gets 167,200. Against the municipal 169,212 that is a shortfall of 2,012, about 1.2 percent. The first instinct, that one of the numbers is wrong, is the wrong instinct: every figure is quoted correctly.' },
          { h3: '2. Read the dates', p: 'The settlements are dated 2023 and the municipality 1 January 2026. Nothing here is comparable until that is noticed, and a program that joins a settlement table to a municipal table on name alone will never notice it, because dates are usually stored somewhere other than the column being joined.' },
          { h3: '3. List the causes and refuse to choose', p: 'The gap could be three years of growth. It could be residents who live outside every listed settlement, on the heath and in hamlets too small to list. It could be both, in any proportion. At about 624 a year the growth story predicts roughly 1,872, which is close to 2,012 and therefore seductive, and the sources do not contain what would settle it.' }
        ] },
        { kind: 'table', caption: 'One municipality, two reference dates, and what the residual could be', head: ['Quantity', 'Value', 'Reference date', 'What it can support'], rows: [
          ['Sum of twelve settlements', '167,200', '2023', 'a description of the settlements in 2023'],
          ['Municipality', '169,212', '1 January 2026', 'a description of the municipality in 2026'],
          ['Residual', '2,012', 'neither', 'a question, not a quantity'],
          ['Growth at the long-run average', 'about 1,872 over three years', 'derived from 1995 and 2026', 'a plausible partial explanation'],
          ['Residents outside any listed settlement', 'not published', 'not applicable', 'the other plausible explanation']
        ] },
        { kind: 'callout', h3: 'A residual that nearly matches your theory is still a residual', p: 'The dangerous number here is 1,872. It is close enough to 2,012 to feel like confirmation, and it is not evidence of anything, because a second explanation predicts a gap of unknown size in the same direction and the two are indistinguishable from these sources. What the learner takes away is a habit with two halves. First, before adding or comparing anything, find the reference date of every input and put it beside the value, because dates hide in filenames and footnotes rather than in columns. Second, when a residual appears, enumerate the possible causes before testing any of them, and do not let the first one that roughly fits close the question. The twelve settlement figures, the municipal total and the 1995 figure are quoted from their sources; the 167,200, the 2,012 and the 1,872 are arithmetic on them and are labelled as derived every time they appear.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for data that arrives from more than one year',
      intro: 'A price list from March against sales from December, a headcount from last quarter against a budget from this one, a reference table nobody has refreshed: mismatched vintages are the most common silent error in office data. Practised on twelve villages and a town.',
      body: [
        { kind: 'table', caption: 'When two figures come from different moments', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Date every input', 'Store the reference date beside the value, not in the filename', 'A 2023 sum compared with a 2026 total', 'Inputs that can be checked'],
          ['Compare like dates', 'Refuse the comparison, or restate one side, before computing a difference', 'A residual mistaken for a finding', 'Differences that mean something'],
          ['Enumerate the causes', 'Write down every explanation for a gap before testing one', 'The first plausible story adopted as fact', 'A question you can actually answer'],
          ['Beware the near miss', 'A predicted value close to the observed one is not confirmation', '1,872 accepted as proof of 2,012', 'Proper scepticism about your own theory'],
          ['Say what would settle it', 'Name the missing datum explicitly in the write-up', 'An open question presented as closed', 'A note your successor can act on']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Two photographs of the same shelf taken a year apart, and a child asked how many books were added. They count, they subtract, and then they notice a book that was borrowed and another that was moved to a different shelf. The difference had three causes and only one of them was buying books.' },
          { h3: 'For teenagers', p: 'The twelve settlement figures and the municipal total in Python, each stored as a value with a date, and a comparison function that raises an error when the dates differ. Then the stretch: what single published figure, if it existed, would split the 2,012 between growth and unlisted residents?' },
          { h3: 'For adults', p: 'The same discipline on two tables from work that are joined every month. Adults very often find a reference table that was last refreshed years ago and a monthly variance that has been explained by the same convenient story ever since.' }
        ] },
        { kind: 'p', text: 'The population, household, area, school and settlement figures come from the offices and entries named beside them, each with the date its source gives. The sum of 167,200, the residual of 2,012 and the three-year projection of about 1,872 are this page\'s arithmetic and are presented as arithmetic, not as findings about anybody.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From two photographs of a shelf to a comparison that refuses mismatched dates',
    intro: 'The rung is settled during the free hour, and which of the twelve settlements the learner lives in has no bearing on it.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'What changed, and why', p: 'Children compare two pictures of the same shelf and find three reasons for one difference.', courses: ['kids-coding-blocks-masterclass', 'python-ai-kids-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Every number gets a date', p: 'Learners store values with their reference dates and see what breaks when the dates differ.', courses: ['maths-through-coding', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 14 to 18', h3: 'Residuals and rival explanations', p: 'Teenagers compute the shortfall, list its causes and write the check that refuses to close the question.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Stale joins at work', p: 'Adults audit a monthly join for a reference table that has not been refreshed and a variance nobody re-examines.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will add the twelve villages for you and hand back 167,200. Why should a child in Apeldoorn learn to ask what year that is?',
    intro: 'Because the sum is right, the shortfall is real, and the explanation that arrives with it will sound better than the evidence supports.',
    p1: 'A tool given the twelve settlement figures will total them correctly and, asked why the total is short, will offer growth as the reason, because growth is the reason that fits the shape of the question. It is not making anything up; it is doing what a reader does. What it will not do unprompted is look for the reference dates, notice that the parts and the whole are three years apart, or point out that a second explanation predicts a gap in the same direction and cannot be separated from the first.',
    p2: 'So the learner writes the version that keeps the dates attached and refuses to compare across them. The difficulty is not the code, which is a few lines. The difficulty is deciding that a number without a date is not yet usable, and holding to that when a tidy answer is available. A twelve-year-old in Ugchelen who has done this once will ask when a reference table was last refreshed at twenty-two, and will be the person in the room who says the variance has two explanations. Whatever the tools become, they will still not know which year your spreadsheet is from.',
    closer: 'The case for a child in Apeldoorn learning to code in 2026 is therefore not about villages or palaces. It is that data arrives from different moments and pretends not to, that the gaps this creates invite convenient stories, and that writing the check which refuses the comparison is the cheapest insurance available against being confidently wrong.',
    blogAnchor: 'the fuller case for teaching a child to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes across 340 square kilometres of heath and forest',
    intro: 'From Uddel or Radio Kootwijk the town is a serious drive, and on a January evening it is the deciding factor in whether a child does anything at all after school. The lesson removes the drive entirely.',
    cells: [
      { h3: 'The Veluwe stays where it is', p: 'Class happens at the kitchen table in Hoenderloo, Klarenbeek or the centre of the town at one fixed hour every week, whatever the forest roads are doing.' },
      { h3: 'English throughout, Dutch school words kept', p: 'Teaching is in English. Groep, havo, vwo and profielkeuze are said the way the child\'s school says them, and nothing is translated in either direction.' },
      { h3: 'What the first hour produces', p: 'A piece of work that shows the real level, the name of the course that fits, and a weekly slot, all arranged without any payment details.' },
      { h3: 'Placed by ability, not by village', p: 'A learner in Beekbergen and a learner in the town share a group when they are at the same stage, and do not when they are not.' },
      { h3: 'Two lessons a week, on the middle calendar', p: 'Usually eight lessons a month at a fixed time. Apeldoorn is in the northern part of Gelderland, which takes its holidays with regio Midden, and the family\'s weeks away go into the plan before the slot is set.' },
      { h3: 'Three and a half hours, or four and a half', p: 'The Dutch clock changes twice a year and the Indian one does not, so the gap to the teacher depends on the season. The overlap covers the late afternoon, the early evening and both weekend days.' }
    ],
    spec: { title: 'A hamlet of a hundred gets the same teacher as the town', p: 'Radio Kootwijk had about 100 residents in 2023 and no plausible catchment for any after-school club. This is exactly the case an online class exists to serve, and the fee, the group size and the hour are identical to those a family in the centre of Apeldoorn is offered.' }
  },

  fees: {
    h2: 'The fee, in dollars, for all twelve settlements',
    intro: 'On the page, so that nobody has to ask.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'A single international rate applies and it is quoted in dollars, with no euro list, so a family in Uddel is charged what a family in the town is charged. Nothing is paid until the free lesson has produced a course and a time, and payment then goes over WhatsApp. Pausing, changing plan and missing a week are all covered on the pricing page.'
  },

  reviewsH2: 'Six families, in the words they left on Google',

  book: {
    h2: 'Give us the level; the village can come later',
    intro: 'The first task might be two photographs of a bookshelf, twelve village figures in Python that refuse to be compared with a total from another year, or a monthly variance at work that has had the same explanation for a decade.',
    success: 'Thank you. Your Apeldoorn class request has been sent.'
  },

  faq: {
    h2: 'Apeldoorn coding class questions',
    intro: 'The municipality, its villages, its dates, the teaching and the terms.',
    items: [
      { q: 'Why do the twelve villages not add up to the municipality?', a: 'Because they are dated differently. The settlement figures are published for 2023 and total 167,200; the municipal figure is for 1 January 2026 and is 169,212. The shortfall of 2,012 could be three years of growth, or residents living outside every listed settlement, or both, and the published record cannot separate them. At the long-run average of about 624 people a year, three years would be roughly 1,872, which is close enough to be tempting and not close enough to be proof. Working that through is the project on this page.' },
      { q: 'Which settlements does this page cover?', a: 'All twelve: the town of Apeldoorn and Ugchelen, Beekbergen, Uddel, Loenen, Wenum-Wiesel, Klarenbeek, Hoenderloo, Lieren, Beemte Broekland, Hoog Soeren and Radio Kootwijk. The class and the fee are identical in every one of them.' },
      { q: 'We live in Uddel or Hoenderloo, well out on the Veluwe. Is that a problem?', a: 'It is the reason this works. The nearest secondary school is already a journey and an after-school club in the town is not realistic on a winter evening. A learner in Uddel joins the same group at the same hour as one in the centre, and nobody drives anywhere.' },
      { q: 'Is any of this taught in Dutch?', a: 'No. The lesson is in English from beginning to end. The Dutch words a school uses are kept, so groep, havo, vwo and profielkeuze are spoken as the child hears them, but there is no Dutch-language version of the course.' },
      { q: 'What time are classes for a family in Apeldoorn?', a: 'The teacher is three and a half hours ahead under Dutch summer time and four and a half hours ahead in winter, because Indian clocks never change. That leaves the stretch from the end of school to mid-evening, and the whole weekend. One recurring slot is agreed during the free lesson and then kept.' },
      { q: 'Why does Apeldoorn have such a low population density?', a: 'Because the municipality covers 339.86 square kilometres, the ninth largest area in the country, and most of it is Veluwe heath and forest rather than housing. The published figure of 496 people to the square kilometre describes the municipal boundary, not how closely anybody actually lives.' },
      { q: 'What is in the free lesson?', a: 'The teacher finds the edge of what the learner can already do and sets a single piece of work just past it. For a child that might be two photographs of a shelf and three reasons for one difference. For a teenager, twelve figures with dates attached and a comparison that refuses to run. For an adult, a report from work whose inputs come from different months. The hour ends with a course, a rung, a weekly time and a price in dollars, and nothing has been charged.' },
      { q: 'Is there a Modern Age Coders classroom in Apeldoorn?', a: 'No, and none is claimed near Het Loo, in Ugchelen or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Apeldoorn coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in an Apeldoorn group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or settlement. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'South off the Veluwe, and out to the country',
    html: 'South across the Veluwe are <a class="cg-inline-link" href="/coding-classes-in-arnhem">Arnhem</a>, the provincial capital, and <a class="cg-inline-link" href="/coding-classes-in-nijmegen">Nijmegen</a>, the largest city; all three sit inside <a class="cg-inline-link" href="/coding-classes-in-gelderland">Gelderland</a>, which is split between two school-holiday calendars. The <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a> stands above the whole series, and a learner aiming at a trained model rather than a written program should start at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-gelderland', label: 'Gelderland' },
    { href: '/coding-classes-in-arnhem', label: 'Arnhem' }
  ],

  personalityCss: `
.cg-root.cg-apd .cg-hero-grid { align-items: center; gap: clamp(1.6rem, 4vw, 3.1rem); }
.cg-root.cg-apd .cg-hero h1 { font-weight: 600; letter-spacing: -0.009em; line-height: 1.11; }
.cg-root.cg-apd .cg-capsule { border-left-width: 5px; border-left-style: dotted; padding-left: 1.5rem; }
.cg-root.cg-apd .cg-eyebrow { letter-spacing: 0.12em; font-weight: 600; }
.cg-root.cg-apd .cg-section-head h2 { max-width: 32ch; }
.cg-root.cg-apd .cg-grid-3 { grid-template-columns: repeat(auto-fit, minmax(228px, 1fr)); gap: clamp(1.15rem, 2.4vw, 1.85rem); }
.cg-root.cg-apd .cg-ladder-col { border-top: 3px dashed var(--cg-accent); padding-top: 1.1rem; }
.cg-root.cg-apd .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-apd .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'City and municipality of Apeldoorn, Gelderland: 169,212 residents (CBS 1 January 2026) across twelve settlements; 71 primary establishments (13,491 pupils) and 20 secondary (10,530); no university, and the smallest 15-to-25 share in this series at 11 percent. Ninth largest municipality by area in the country, twelfth by population, largest in Gelderland by area; density 496. Regio Midden holidays with the northern part of Gelderland. The city page argues from mismatched reference dates; the province page owns the two-calendar split and Arnhem owns the overlapping-categories problem.',
    localProject: 'Parts and wholes from different reference dates, and a residual with rival explanations. The twelve published settlement figures are dated 2023 and sum to 167,200; the municipal total is dated 1 January 2026 and is 169,212; the residual is 2,012. It could be three years of growth, or residents outside every listed settlement, or both. The long-run average gain since 1995 is about 624 a year, so three years predicts about 1,872, close enough to be seductive and not close enough to be evidence. Distinct from stale cached data (Ibri), from the base-year trap (Flevoland: choosing when to start a growth rate) and from the part-to-whole trap (Bandar Seri Begawan): here both figures are current and correct for their own dates, and the error is comparing across vintages and then closing the question with the first story that nearly fits. Computed before writing; every derived figure is labelled as derived.',
    requiredMentions: [
      '169,212',
      '76,875',
      '29,081',
      '149,869',
      '13,491',
      '10,530',
      '141,255',
      '167,200',
      'Ugchelen',
      'Beekbergen',
      'Radio Kootwijk',
      'Hoog Soeren',
      'Torenberg',
      'Ton Heerts'
    ],
    sources: [
      { claim: 'Municipality of Apeldoorn 169,212 residents on 1 January 2026 (CBS provisional); 76,875 households averaging 2.14, 29,081 single-person (38 percent); 24,949 aged 0 to 15; 19,199 aged 15 to 25; 40,791 aged 25 to 45; 38,724 aged 65 and over; 71 primary establishments (13,491 pupils); 20 secondary (10,530); total area 34,115 ha, land 33,986 ha; density 496; 16 wijken and 95 buurten; 149,869 in 1995, a rise of 19,343 (13 percent).', url: 'https://allecijfers.nl/gemeente/apeldoorn/' },
      { claim: 'Apeldoorn 169,222 residents on 1 January 2026; 341.15 km2 total, 339.89 land, 1.26 water; mayor Ton Heerts (PvdA) since 18 December 2019; twelfth largest municipality by population, ninth by area, largest in Gelderland by area; on the Veluwe, highest hill Torenberg 107.1 m. Settlement populations dated 2023: Apeldoorn 141,255; Ugchelen 6,310; Beekbergen 4,925; Uddel 3,435; Loenen 3,345; Wenum-Wiesel 2,110; Klarenbeek 1,755; Hoenderloo 1,340; Lieren 1,335; Beemte Broekland 1,055; Hoog Soeren 235; Radio Kootwijk 100.', url: 'https://nl.wikipedia.org/wiki/Apeldoorn_(gemeente)' },
      { claim: 'Paleis Het Loo is in Apeldoorn, built in 1689 for stadhouder Willem III; a museum since 1984 after restoration in the 1970s; under renovation from 2018 and accessible to visitors again from 2022.', url: 'https://nl.wikipedia.org/wiki/Paleis_Het_Loo' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any allocation of the 2,012 residual between growth and unlisted residents. The page states both causes and says the sources cannot separate them.',
      'A 2026 population for any individual settlement. Only 2023 settlement figures were published in the source read, and no figure is projected forward.',
      'Visitor numbers for Het Loo. Not found at source and not stated.',
      'That Apeldoorn has the lowest density or the smallest young-adult share of all Dutch municipalities. Both are stated only as the lowest among the cities in this series.',
      'Anything the Gelderland page owns: the two holiday regions and the 51 municipalities. Anything the Arnhem page owns: the September 1944 tallies and the Veluwezoom figures.'
    ]
  }
};
