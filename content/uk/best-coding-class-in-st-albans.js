'use strict';
// St Albans (cg- city page, UK cluster Phase 4). Spine: which matters more, the fertiliser or the year? Two-way analysis
// of variance (treatment by year, no replication) on the Broadbalk wheat yields that Rothamsted Research publishes for
// schools in "Lessons from Broadbalk" (e-RA outreach, instructions PDF, V2 2021; table read from the rendered page:
// columns 2016, 2017, 2018; read 23 September 2026; scratchpad sta/anova.py). Continuous wheat, t/ha: Nil 0.74 0.44
// 0.44; FYM 5.65 6.37 6.36; N1 2.59 3.43 2.56; N2 4.48 4.03 4.59; N3 6.7 4.96 6.38; N4 7.16 3.96 6.98; N5 9.67 4.39 6.49;
// N6 9.63 4.26 7.38. Rotational (first wheat): Nil 1.75 2.27 0.95; FYM 6.45 7.1 7.16; N1 4.94 4.29 2.55; N2 7.71 6.53
// 4.34; N3 9.31 8.09 7.2; N4 10.2 9.06 8.14; N5 11.09 9.82 8.08; N6 11.66 10.41 8.16. Continuous: treatment means Nil 0.54
// to N6 7.09 (FYM 6.13); year means 2016 5.83, 2017 3.98, 2018 5.15; sums of squares total 146.00, treatment 108.08
// (74.0 percent), year 13.97 (9.6), residual 23.95 (16.4); F treatment 9.02 on 7 and 14, p 0.00028; F year 4.08 on 2 and
// 14, p 0.040; largest residuals N5 2016 +1.98, N6 2017 -1.83; one-way F ignoring year 6.51. Rotational: means Nil 1.66
// to N6 10.08 (FYM 6.90); treatment 87.9 percent, year 8.5, residual 3.7; F treatment 48.11, p about 1e-8; F year 16.23,
// p 0.0002; one-way F 16.57. Rotational above continuous for all 8 treatment means and in 22 of 24 cells; mean
// difference 1.98 t/ha. Nitrogen steps N1 to N6: continuous gains 1.51, 1.65, 0.02, 0.82, 0.24; rotational 2.27, 2.01,
// 0.93, 0.53, 0.41.
// Lesson family: analysis of variance (partitioning sums of squares, blocking, F tests, residuals). Screened 23
// September 2026: ANOVA and analysis of variance 0 hits; distinct from Lancaster permutation test and Sheffield
// least squares.
// Place facts read raw 23 September 2026: Census 2021 via Nomis, St Albans E07000240: TS001 148,167 usual residents,
// 146,953 in households, 1,214 communal; TS007A 10,327 aged 5 to 9 (7.0 percent, England 5.9), 11,081 aged 10 to 14 (7.5,
// England 6.0), 5,944 aged 20 to 24 (4.0, England 6.0), 11,554 aged 40 to 44 (7.8, England 6.3), 11,766 aged 45 to 49
// (7.9, England 6.4); TS068 30,534 students of 139,508 aged 5 and over (21.9 percent, England 20.4); TS006 919.3 per
// square km (England 433.5). Rothamsted Research, Long-term Experiments page: Rothamsted (Harpenden, Hertfordshire) is
// home to the oldest continuing agricultural field experiments in the world; between 1843 and 1856 Sir John Lawes and
// Sir Henry Gilbert established several long-term experiments; meteorological measurements since the 1850s. Lessons
// from Broadbalk: Broadbalk set up in 1843 by Lawes and Gilbert to compare fertiliser treatments on wheat yield. e-RA
// dataset 01-FISHER1921: Broadbalk yields 1852 to 1918 as used by R.A. Fisher in his 1921 paper Studies in crop
// variation (download behind an end-user agreement form, not submitted). NHLE: Rothamsted Manor House 1347199 Grade I
// (listed 19 October 1953); Clock Tower 1103127 Grade I (8 May 1950); scheduled monuments Verulamium, site of 1003515
// (89.2 ha) and Verulamium, part of wall and ditch of Roman city 1003519. Places in OS Open Names (St Albans district):
// Harpenden, Wheathampstead, Redbourn, London Colney, Bricket Wood, How Wood, Park Street, Chiswell Green, Sandridge,
// Marshalswick, Fleetville, Jersey Farm.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'ST ALBANS', blurb: 'The Roman city of Verulamium and the home of Rothamsted, with a project that splits wheat yields into fertiliser, weather and luck.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-st-albans',
  code: 'sta',
  accent: '#655115',
  accentRationale: 'St Albans: a ripe-wheat gold for Broadbalk, from the solver (6.22:1 on every paper tint, dE 7.2 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'St Albans',
    eyebrow: 'St Albans, Hertfordshire',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'St Albans' },
      { type: 'AdministrativeArea', name: 'Hertfordshire' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'St Albans, England',
  title: 'Best Coding Classes in St Albans | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for St Albans learners aged 6 to 67, from Harpenden and Redbourn to London Colney. The first lesson is free.',
  ogDescription: 'Coding and AI lessons for St Albans, on a page that uses Rothamsted\'s Broadbalk wheat to ask which matters more, the fertiliser or the year.',
  twitterDescription: 'St Albans learners aged six to sixty-seven can study coding, Python and AI in live online lessons with us. The first lesson is free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'St Albans Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, statistics and experiment design, AI and mathematics taught live online in English to St Albans children, teenagers and adults, in small groups by level or one to one.'
  },

  h1: 'Coding classes in St Albans',
  capsuleQ: 'What are the best coding classes in St Albans?',
  capsule: 'The St Albans district had 148,167 usual residents at the 2021 census, and 7.5% of them were aged 10 to 14, against 6.0% across England. Rothamsted Research, in Harpenden within the district, says it is home to the oldest continuing agricultural field experiments in the world, begun by Sir John Lawes and Sir Henry Gilbert from 1843. We teach St Albans learners aged six to sixty-seven from India in live video lessons, in a group of five to ten at the same level or one to one, at times planned around UK school and work. Lesson one is free; after it, a group place is USD 100 a month and one-to-one teaching USD 150.',
  lead: 'Rothamsted still grows wheat on Broadbalk, the field its founders laid out in 1843, and publishes yields for schools. In 2016, 2017 and 2018, the published table compares eight treatments, from no fertiliser at all to the heaviest dose of nitrogen. Some years were good, some poor. How much of the difference in yield came from the fertiliser, how much from the year, and how much is left over? Analysis of variance, the method linked with R.A. Fisher, who analysed Broadbalk\'s records in his 1921 paper Studies in crop variation, answers exactly that. For wheat grown every year, the treatment explains 74.0% of the variation; for wheat grown in rotation, 87.9%. And the leftover points straight at one strange year.',
  wa: 'Hello Modern Age Coders, I would like a free coding lesson for a learner in St Albans, please.',

  picks: {
    eyebrow: 'Course picks for St Albans',
    h2: 'Four courses for the Rothamsted district',
    intro: 'Pick the course nearest to what the learner already likes. Every one starts with a free live lesson, booked without a card.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, a first step towards fair tests where only one thing changes at a time.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from first lines to full projects, enough to take a table of yields apart and measure every source of difference.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'Statistics on real data in Python, including designing a fair experiment and testing what it shows.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Python for adults who run trials or compare options at work and need to separate real effects from background noise.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'St Albans today',
      h2: 'A district of families',
      intro: 'Census 2021 figures for the City and District of St Albans, which includes Harpenden, Redbourn and London Colney, from the Office for National Statistics on Nomis.',
      body: [
        { kind: 'table', caption: 'St Albans district, Census 2021', head: ['Measure', 'St Albans', 'England'], rows: [
          ['Usual residents', '148,167', '56,490,048'],
          ['Living in households', '146,953', 'Not compared'],
          ['Living in communal establishments', '1,214', 'Not compared'],
          ['Aged 5 to 9', '10,327 (7.0%)', '5.9%'],
          ['Aged 10 to 14', '11,081 (7.5%)', '6.0%'],
          ['Aged 20 to 24', '5,944 (4.0%)', '6.0%'],
          ['Aged 45 to 49', '11,766 (7.9%)', '6.4%'],
          ['Students among residents aged 5 and over', '30,534 (21.9%)', '20.4%'],
          ['Usual residents per square kilometre', '919.3', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Children and parents', p: 'In 2021, 7.5% of residents were aged 10 to 14 and 7.0% were 5 to 9, while people aged 40 to 44 and 45 to 49 made up 7.8% and 7.9%, all well above England.' },
          { h3: 'Fewer young adults', p: 'Only 4.0% of residents were aged 20 to 24, against 6.0% nationally, and 21.9% of those aged five and over were studying.' },
          { h3: 'Almost all households', p: 'Of the 148,167 residents, 146,953 lived in households; just 1,214 lived in communal establishments.' }
        ] },
        { kind: 'p', text: 'Our St Albans groups reflect that family-heavy district. A Year 5 child in Marshalswick might be making a first game, a Year 10 student in Harpenden starting GCSE Computer Science, and a parent in Wheathampstead learning Python for work, each placed in a small group at their own level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'Roman city and research station',
      h2: 'From Verulamium to Broadbalk',
      intro: 'From Rothamsted Research\'s own pages and Historic England\'s open data.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Verulamium', p: 'Historic England schedules the site of the Roman city of Verulamium, over 89 hectares, and a separate stretch of the wall and ditch of the Roman city, as ancient monuments.' },
          { h3: '1843', p: 'Rothamsted says Sir John Lawes and Sir Henry Gilbert established long-term field experiments in Harpenden between 1843 and 1856; Broadbalk, begun in 1843, still compares fertilisers on wheat.' },
          { h3: 'Grade I', p: 'Historic England lists Rothamsted Manor House and the city\'s Clock Tower at Grade I, the manor house since 19 October 1953 and the tower since 8 May 1950.' }
        ] },
        { kind: 'p', text: 'Rothamsted\'s archive also holds the Broadbalk yields from 1852 to 1918 that R.A. Fisher used in his 1921 paper Studies in crop variation, and it has kept weather records since the 1850s. We have no connection with Rothamsted Research, St Albans City and District Council or Historic England. Broadbalk is on this page because its long records have been used to develop and teach statistical methods, as Fisher\'s 1921 paper shows.' },
        { kind: 'spec', title: 'Where the yields come from', p: 'Rothamsted publishes a schools activity, Lessons from Broadbalk, with wheat yields for 2016, 2017 and 2018 under eight treatments: no fertiliser, farmyard manure, and six rising doses of nitrogen, N1 to N6, each with the same phosphorus, potassium and magnesium.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Which matters more, the fertiliser or the year?',
      intro: 'Analysis of variance splits the total spread in a set of results into parts: how much each factor explains, and how much is left over. Comparing the parts tells you which effects are real.',
      body: [
        { kind: 'table', caption: 'Broadbalk wheat yields, 8 treatments over 2016 to 2018 (tonnes per hectare): how the total variation divides', head: ['Source of variation', 'Wheat every year', 'Wheat in rotation'], rows: [
          ['Fertiliser treatment', '74.0%', '87.9%'],
          ['Year (weather and conditions)', '9.6%', '8.5%'],
          ['Left over (residual)', '16.4%', '3.7%'],
          ['F test for treatment (7 and 14 degrees of freedom)', '9.02', '48.11'],
          ['F test for year (2 and 14 degrees of freedom)', '4.08', '16.23']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Take the averages', p: 'For wheat grown every year, treatment averages run from 0.54 tonnes per hectare with no fertiliser to 7.09 with the heaviest nitrogen; farmyard manure gives 6.13.' },
          { h3: '2. Split the spread', p: 'Measure how far each yield sits from the overall average, square it and add up. Then work out how much of that total the treatment averages and the year averages account for.' },
          { h3: '3. Compare with the leftover', p: 'An F test divides each factor\'s share by what is left over. Treatment is clear in both systems; the year effect is clear in rotation and borderline for wheat grown every year.' }
        ] },
        { kind: 'callout', h3: 'Blocking: the idea that made the method', p: 'Treat each year as a block and remove its effect before testing the fertiliser, and the test gets sharper. Ignoring the years, the F for treatment is 6.51 for wheat every year and 16.57 in rotation; accounting for them, it rises to 9.02 and 48.11. That is the reasoning behind blocked experimental designs: soak up the variation you cannot control so the effect you care about stands out.' },
        { kind: 'p', text: 'The leftover is where the surprises hide. For wheat grown every year, the largest residuals are the heavy-nitrogen plots in 2016 and 2017: the N6 plot yielded 9.63 tonnes in 2016 and just 4.26 in 2017, while the rotation\'s N6 plot held up at 10.41. The model cannot explain that, which is exactly why it is worth a question. Across all treatments, wheat in rotation out-yielded wheat every year in 22 of 24 cases, by 1.98 tonnes per hectare on average, and the gain from each extra step of nitrogen shrank as the dose rose.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Experiments in practice',
      h2: 'Five questions before trusting an experiment',
      intro: 'Learned on Broadbalk, then used in medicine trials, website tests, engineering, education research and anywhere several things change at once.',
      body: [
        { kind: 'table', caption: 'Decisions behind an analysis of variance', head: ['Question', 'For the Broadbalk yields', 'What goes wrong if you skip it'], rows: [
          ['What are the factors?', 'Treatment and year, eight by three', 'Weather credited to fertiliser, or the reverse'],
          ['Is there replication?', 'One plot per treatment per year', 'Interactions that cannot be tested with this data'],
          ['What is the block?', 'The year, removed before testing treatment', 'A real effect hidden by good and bad years'],
          ['What do the residuals say?', 'The 2017 heavy-nitrogen plots stand out', 'An anomaly averaged away unnoticed'],
          ['What is the comparison?', 'Continuous and rotational wheat, same treatments', 'Two systems compared under different rules']
        ] },
        { kind: 'p', text: 'The second row sets the limit. With one yield per treatment per year, the analysis cannot tell whether a fertiliser works differently in different years, because that interaction is tangled up with the leftover. Saying so plainly, and asking what data would separate them, is part of doing the analysis properly.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Growing cress with and without plant food, changing one thing at a time, and measuring what happens.' },
          { h3: 'Teenagers', p: 'Two-way analysis of variance in Python on Rothamsted\'s yields, with sums of squares, F tests and residuals worked through by hand.' },
          { h3: 'Adults', p: 'Designing and analysing trials at work, with blocks, replication and the limits of each design stated clearly.' }
        ] },
        { kind: 'p', text: 'We are not connected with Rothamsted Research, St Albans City and District Council or Historic England. The yields come from Rothamsted\'s published schools resource and the census and listing data are open; the sums of squares, F tests and residuals on this page are our own calculations.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a fair test to analysis of variance',
    intro: 'Treat the ages as approximate; the free lesson shows where each learner should start.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Fair tests', p: 'Planning experiments where only one thing changes, and recording results in a simple table.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Averages in code', p: 'Reading a table of results into Python and working out averages by row and by column.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Analysis of variance', p: 'Splitting real Broadbalk yields into treatment, year and residual, with F tests and a close look at the leftovers.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Trials at work', p: 'Comparing options fairly, with blocks and replication planned before the data arrives.', courses: ['python-ai-automation-masterclass-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI companies run experiments constantly. Why should a St Albans teenager analyse wheat yields?',
    intro: 'Because every claim that a new model is better rests on the same question Broadbalk asks: is the difference real, or is it the weather?',
    p1: 'When an AI system is compared with another, the results vary from run to run just as wheat yields vary from year to year. A learner who has split Broadbalk\'s yields into treatment, year and leftover knows to ask how much of a claimed improvement could be background variation, and whether the test was blocked fairly.',
    p2: 'The residuals lesson matters too. The strange 2017 yields stood out only because the model accounted for everything else. Looking hard at what a model cannot explain is how researchers find problems in AI systems as well as in wheat fields.',
    closer: 'So a St Albans teenager should keep learning to code in 2026, in the district that holds Broadbalk, a field whose records Fisher analysed in 1921: machines can run a thousand tests a day, but someone has to design them fairly and read what is left over.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Harpenden, Fleetville or Bricket Wood, all from home',
    intro: 'The district runs from the city to Harpenden, Redbourn and the villages around London Colney. Online, each of them is the same distance from the lesson.',
    cells: [
      { h3: 'City, town and village', p: 'A learner in Jersey Farm and another in Park Street can share one class, with no journey into the city centre.' },
      { h3: 'Levels schools use', p: 'Our levels track the English curriculum Hertfordshire pupils follow, from Reception through each Key Stage to GCSE and A level, all taught in English.' },
      { h3: 'A lesson from the start', p: 'The free session teaches a genuine task and closes with our advice on level, course and a weekly time. No card is asked for.' },
      { h3: 'Grouped by stage', p: 'Five to ten learners at one level, from St Albans, around the UK and overseas, so each stage has workable times.' },
      { h3: 'Twice a week', p: 'Two regular lessons weekly, about eight a month, with half terms and exams arranged with the teacher in good time.' },
      { h3: 'Across the time difference', p: 'A 4 pm lesson in St Albans is 8.30 pm for our teachers in India in summer and 9.30 pm in winter, as India keeps the same clock all year; they arrange their evenings for UK families.' }
    ],
    spec: { title: 'Across Hertfordshire', p: 'Families in Hatfield, Welwyn Garden City, Hemel Hempstead or Watford join exactly the same classes, since every group is online and set by level.' }
  },

  fees: {
    h2: 'St Albans lesson fees',
    intro: 'A free first lesson, then a single monthly fee.',
    first: 'A full lesson at no charge, ending with a suggested level, course and weekly time.',
    group: 'Around eight live lessons a month in a group of five to ten learners at the same stage.',
    private: 'Around eight live lessons a month, with the teacher focused on your learner alone.',
    closer: 'Families in Sandridge or How Wood pay in US dollars, just like every family outside India, and our pages show no pound prices. Billing begins only after the free lesson, once a course and a weekly slot are agreed; pauses, missed lessons and switching between group and one-to-one teaching are explained on the pricing page.'
  },

  reviewsH2: 'Google reviews from six families, left as written',

  book: {
    h2: 'Book a free lesson for a St Albans learner',
    intro: 'The first task is chosen for the learner: a fair-test game for a young child, a short Python program that averages the rows and columns of a table for a beginner, or Rothamsted\'s wheat yields and analysis of variance for a teenager ready for real data.',
    success: 'Thank you. We will be in touch soon to arrange a lesson for your St Albans learner.'
  },

  faq: {
    h2: 'St Albans coding class questions',
    intro: 'What St Albans families ask us most often.',
    items: [
      { q: 'How many people live in the St Albans district?', a: 'Census 2021 counted 148,167 usual residents in the City and District of St Albans, which includes Harpenden; 146,953 lived in households and 1,214 in communal establishments.' },
      { q: 'How does St Albans compare with England?', a: 'It has many families: 7.5% of residents were aged 10 to 14 and 7.9% aged 45 to 49 in 2021, against 6.0% and 6.4% in England, while only 4.0% were aged 20 to 24. Of the 139,508 aged five and over, 30,534 were students. Density was 919.3 residents per square kilometre.' },
      { q: 'What is analysis of variance?', a: 'A method for splitting the variation in a set of results into parts explained by different factors, plus a leftover, and testing which factors matter. It is widely used to analyse experiments with more than one thing changing.' },
      { q: 'What did the analysis of the Broadbalk yields show?', a: 'Fertiliser treatment explained 74.0% of the variation for wheat grown every year and 87.9% for wheat in rotation. The year mattered too, and the residuals pointed to the heavy-nitrogen plots in 2017, which yielded far less than in 2016.' },
      { q: 'Where do the yields come from?', a: 'From Rothamsted Research\'s published schools activity, Lessons from Broadbalk, which lists yields for 2016 to 2018 under eight fertiliser treatments for wheat grown every year and wheat grown in rotation.' },
      { q: 'What is Rothamsted?', a: 'A research institute in Harpenden, in the St Albans district, which says it is home to the oldest continuing agricultural field experiments in the world, begun by Sir John Lawes and Sir Henry Gilbert from 1843. We are not connected with Rothamsted Research.' },
      { q: 'When do St Albans lessons run?', a: 'Most St Albans families choose a time after school, on a weekday evening or at the weekend, and we agree it during the free lesson. India is four and a half hours ahead of the UK in summer and five and a half in winter.' },
      { q: 'Is there a centre in St Albans?', a: 'No. We have no St Albans centre and no premises anywhere in the UK, because all our lessons are live online. A learner needs a computer with sound and a reliable connection, and our phone number is Indian.', boiler: true },
      { q: 'How much are lessons for a St Albans learner?', a: 'The first lesson is free. After that, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners; one-to-one teaching on the same timetable is USD 150 a month. The course, format and time are agreed before anything is charged.', boiler: true },
      { q: 'How are the groups organised?', a: 'By level, pace and goals rather than age or where a learner lives, with five to ten learners at one stage. If no group suits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'The South East and beyond',
    html: 'Nearby, the <a class="cg-inline-link" href="/best-coding-class-in-cambridge">Cambridge page</a> keeps a top ten from decades of weather records, and <a class="cg-inline-link" href="/best-coding-class-in-lancaster">Lancaster</a> asks whether chance alone could explain a rise in flood peaks. <a class="cg-inline-link" href="/best-coding-class-in-oxford">Oxford</a> asks whether today\'s rain remembers yesterday\'s. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> sets out school stages, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> links every other city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'St Albans and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-cambridge', label: 'Cambridge' },
    { href: '/best-coding-class-in-oxford', label: 'Oxford' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-sta .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.4rem); }
.cg-root.cg-sta .cg-hero h1 { font-weight: 700; letter-spacing: -0.021em; line-height: 1.06; }
.cg-root.cg-sta .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1.05rem; }
.cg-root.cg-sta .cg-eyebrow { letter-spacing: 0.16em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-sta .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.014em; }
.cg-root.cg-sta .cg-grid-3 { gap: clamp(1rem, 2.5vw, 2.1rem); }
.cg-root.cg-sta .cg-table th { letter-spacing: 0.024em; }
.cg-root.cg-sta .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-sta .cg-ladder-col { border-top: 2px dashed var(--cg-accent); padding-top: 1rem; }
.cg-root.cg-sta .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'St Albans, Census 2021 via Nomis (E07000240): TS001 148,167 usual residents, 146,953 in households, 1,214 in communal establishments; TS007A 10,327 aged 5 to 9 (7.0 percent, England 5.9), 11,081 aged 10 to 14 (7.5 percent, England 6.0), 5,944 aged 20 to 24 (4.0 percent, England 6.0), 11,554 aged 40 to 44 (7.8 percent, England 6.3), 11,766 aged 45 to 49 (7.9 percent, England 6.4); TS068 30,534 students of 139,508 residents aged 5 and over (21.9 percent, England 20.4); TS006 919.3 per square kilometre (England 433.5). Rothamsted Research: oldest continuing agricultural field experiments in the world (its claim); Lawes and Gilbert 1843 to 1856; weather records since the 1850s; Broadbalk 1843; Fisher 1921 dataset. NHLE: Rothamsted Manor House and Clock Tower Grade I; Verulamium scheduled monuments.',
    localProject: 'Which matters more, the fertiliser or the year? Rothamsted Lessons from Broadbalk yields, 2016 to 2018, 8 treatments, continuous and rotational wheat. Two-way ANOVA without replication. Continuous: treatment 74.0 percent, year 9.6, residual 16.4; F treatment 9.02 (7,14) p 0.00028; F year 4.08 (2,14) p 0.040; one-way F 6.51. Rotational: 87.9, 8.5, 3.7; F 48.11 and 16.23; one-way 16.57. Largest continuous residuals N5 2016 +1.98, N6 2017 -1.83. Rotation higher in 22 of 24 cells, mean +1.98 t/ha. Nitrogen gains shrink with dose. Lesson family: analysis of variance.',
    requiredMentions: [
      '148,167',
      '146,953',
      '30,534',
      '139,508',
      '919.3',
      'Rothamsted',
      'Broadbalk',
      'Verulamium',
      'Lawes',
      'Harpenden',
      'Clock Tower',
      'analysis of variance'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, St Albans: 148,167 usual residents; 146,953 in households; 1,214 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E07000240' },
      { claim: 'Nomis, Census 2021 TS007A: St Albans and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E07000240,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: St Albans 30,534 students of 139,508 aged 5 and over (21.9 percent).', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E07000240,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: density, St Albans 919.3 per square kilometre.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E07000240,E92000001' },
      { claim: 'Rothamsted Research, Long-term Experiments: oldest continuing agricultural field experiments in the world; Lawes and Gilbert 1843 to 1856; weather since the 1850s.', url: 'https://www.rothamsted.ac.uk/long-term-experiments' },
      { claim: 'e-RA, Lessons from Broadbalk (instructions, 2021): Broadbalk set up in 1843; yields 2016 to 2018 for eight treatments, continuous and rotational wheat.', url: 'https://www.era.rothamsted.ac.uk/metadata/rbk1/OUTREACH/Lessons-from-Broadbalk-Instructions-V2-2021.pdf' },
      { claim: 'e-RA dataset 01-FISHER1921: Broadbalk yields 1852 to 1918 as used by R.A. Fisher in his 1921 paper Studies in crop variation.', url: 'https://www.era.rothamsted.ac.uk/dataset/rbk1/01-FISHER1921' },
      { claim: 'Historic England NHLE open data: Rothamsted Manor House 1347199 and Clock Tower 1103127, Grade I; Verulamium scheduled monuments 1003515 and 1003519.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1347199' }
    ],
    rejectedClaims: [
      'Analysing Fisher\'s own 1852 to 1918 dataset: its download sits behind an end-user agreement form asking for a name and organisation, which we did not submit on the owner\'s behalf; the openly published schools table is used instead.',
      'Testing whether fertilisers act differently in different years: impossible with one plot per treatment per year, and the page says so.',
      'St Albans Cathedral history: the cathedral\'s history pages did not return readable content; no cathedral history is claimed.',
      'A claim that Fisher invented analysis of variance at Rothamsted in a particular year: not taken from a fetched source; the page says only that the method was developed by Fisher from Rothamsted\'s records, and cites the dataset page for his 1921 use of Broadbalk yields.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with Rothamsted Research, St Albans City and District Council or Historic England.'
    ]
  }
};
