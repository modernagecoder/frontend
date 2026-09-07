'use strict';
// Groningen city: the sixth largest municipality, the youngest by age
// structure, and the one where 61 percent of households contain exactly one
// person. Spine: the average household holds 1.7 people and no household
// holds 1.7 people; the mean of a discrete quantity with a 61 percent mode
// describes neither group it is made of.

module.exports = {
  slug: 'coding-classes-in-groningen',
  code: 'grn',
  accent: '#721025',
  accentRationale: 'Groningen city: a deep brick red, the colour of the Martini tower brickwork, placed by the solver clear of Amsterdam\'s and Apeldoorn\'s reds',
  pageType: 'city',
  place: {
    name: 'Groningen',
    eyebrow: 'Groningen, province of Groningen',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Province of Groningen' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Groningen, Netherlands',
  title: 'Coding Classes in Groningen | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Groningen for ages 6 to 67, from the Binnenstad to Haren and Ten Boer. First lesson free, then one flat monthly fee.',
  ogDescription: 'Live online coding, Python, AI and mathematics for families in Groningen, the youngest city in the country, built on the average household that no household has.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'data-science-complete-masterclass-college',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Groningen Learners',
    description: 'Ability-placed online coding, Python, data science, AI and mathematics for children, teenagers and adults in the city of Groningen and the villages of its municipality, taught in English.'
  },

  h1: 'Coding classes in Groningen, where the average household has 1.7 people and no household does',
  capsuleQ: 'What are the best coding classes in Groningen?',
  capsule: 'Coding classes in Groningen serve a municipality of 244,427 people (Statistics Netherlands, 1 January 2026), the sixth largest in the country and the youngest by age structure: one resident in five is between fifteen and twenty-five, against about one in sixteen nationally. Its 145,521 households average 1.7 people, and 61 percent of them contain exactly one person, so the average describes neither the majority nor the minority. Modern Age Coders teaches live online in English, from the Binnenstad to Haren and Ten Boer, for learners from 6 to 67; the first lesson is free and after it a group of five to ten costs USD 100 a month and one-to-one USD 150.',
  lead: 'Divide 244,427 residents by 145,521 households and Groningen has 1.7 people per household. Then read the next line: 61 percent of those households hold exactly one person. Those 88,768 people account for 88,768 of the residents, which leaves 155,659 people in the other 56,753 households, or 2.74 each. The city has households of one and households of nearly three, and 1.7 is the number no front door in it has ever answered to. A child who can compute that gap has learned what an average is for and what it is not.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Groningen.',

  picks: {
    eyebrow: 'Course picks for Groningen',
    h2: 'Four courses for a city where a fifth of the population is a student',
    intro: 'A groep 4 child in Helpman, a teenager at a school in Paddepoel who wants the data and not the slogan, a Rijksuniversiteit or Hanzehogeschool student who needs Python to be a tool rather than a module, and a parent in Haren going back to work: four doors in one city.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Scratch from a blank stage to a finished game in three months, in English, for the groep 3 to 6 child in Beijum, Vinkhuizen or Ten Boer.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'Python, real datasets and a first model, for the teenager who wants to test a claim about their own city rather than repeat it.' },
      { course: 'data-science-complete-masterclass-college', band: 'College and adult', note: 'Python, machine learning and deep learning end to end, for the student whose degree assumes statistics and never teaches the code.' },
      { course: 'python-ai-automation-masterclass-college', band: 'Adults', note: 'Scripting, scraping and automation for the working parent whose week is a stack of repeated tasks a short program could finish.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Groningen today',
      h2: 'The sixth largest municipality, the youngest population, and 61 percent living alone',
      intro: 'Statistics Netherlands counted 244,427 residents in the municipality on 1 January 2026, in 145,521 households on 185.53 square kilometres of land inside 197.96 of territory: 1,318 to the square kilometre. In 1995 the count was 196,339, so the city has added 48,088 people, a rise of 24 percent.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'An age structure unlike anywhere else', p: '52,431 residents are between fifteen and twenty-five, 21 percent of the city, against roughly six percent nationally for the narrower twenty to twenty-five band. Another 75,681 are between twenty-five and forty-five. Only 27,786 are under fifteen, 11 percent, the lowest share of any place in this series, and 38,793 are sixty-five or over.' },
          { h3: 'Two institutions, sixty thousand students', p: 'The Rijksuniversiteit Groningen, founded in 1614 and the second oldest in the country after Leiden, had about 33,000 students in 2025, 8,250 of them international, across eleven faculties. The Hanzehogeschool has about 31,294. The national statistics page gives 61,889 students in higher education for the municipality, a third figure on a third definition.' },
          { h3: 'More secondary pupils than primary', p: '80 primary establishments teach 15,901 pupils and 30 secondary establishments teach 16,469. In almost every Dutch town primary outnumbers secondary by half again, because primary covers eight year groups and secondary four to six. Groningen is the other way round, because its secondary schools draw from the whole north and its primary schools do not.' }
        ] },
        { kind: 'spec', title: 'One municipality, twenty-one places', p: 'Since 1 January 2019 the municipality has included the former municipalities of Haren and Ten Boer: 21 population centres in all, the city itself at 206,010 in 2023, then Haren at 18,450, Ten Boer at 4,630 and Glimmen at 1,370. A page that says Groningen therefore has to say which Groningen, and this one means the municipality unless it says otherwise.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'From the Binnenstad to the villages: the shape of a city that empties and fills',
      intro: 'The municipality is described two ways at once. The national statistics page divides it into 20 wijken and 160 buurten; the municipality\'s own encyclopaedia entry gives seven gebiedsdelen and 14 wijken in 106 buurten. Both counts are kept below, because both are published and neither is wrong.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The centre', p: 'The Binnenstad inside the diepenring, where the Martini tower, the Grote Markt and most of the university buildings are, and where a large share of the single-person households sit. Term time and July look like two different cities from the same window.' },
          { h3: 'The nineteenth-century ring', p: 'The Oosterpoort, the Korrewegwijk, the Schilderswijk and the Oranjewijk: brick terraces built when the city outgrew its walls, now a mix of families who stayed and students who arrive for three years at a time.' },
          { h3: 'The post-war west', p: 'Vinkhuizen, Paddepoel and Selwerd, planned in the 1960s around the Zernike campus, with the highest concentration of student housing and some of the youngest streets in the country.' },
          { h3: 'The south', p: 'Helpman, De Wijert and the Corpus den Hoorn side: older housing stock, more families with school-age children, and the part of the municipality whose age profile looks most like the rest of the Netherlands.' },
          { h3: 'The north-east', p: 'Beijum and Lewenborg, the large 1970s and 1980s expansions across the Van Starkenborghkanaal, where the primary schools are fullest and the under-fifteen share is highest.' },
          { h3: 'Haren, Ten Boer and the villages', p: 'Haren with 18,450, Ten Boer with 4,630, Glimmen with 1,370 and the smaller places around them: village primary schools, a drive to the city for secondary, and the part of the municipality where a class that arrives through the router changes the most.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders teaches into all of them at the same hour, and the placement question is what the learner can already do, never which wijk the postcode falls in.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure and its office, including three student counts and two ways of dividing the city',
      intro: 'The national count, the municipal entry, the two institutions, and the places where the sources disagree.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The municipal count', p: 'Statistics Netherlands, provisional, 1 January 2026: 244,427 residents; 145,521 households at an average of 1.7 people, 61 percent of them single-person; 27,786 under fifteen; 52,431 aged fifteen to twenty-five; 75,681 aged twenty-five to forty-five; 38,793 aged sixty-five and over; 80 primary establishments with 15,901 pupils and 30 secondary with 16,469; 61,889 students in higher education; land 18,553 hectares, territory 19,796; density 1,318; 196,339 residents in 1995.' },
          { h3: 'The municipality, described', p: 'Its encyclopaedia entry: 244,829 residents on 1 January 2026, the sixth largest municipality in the country and the largest in the north; 197.96 square kilometres, 185.60 of land and 12.36 of water; Haren and Ten Boer merged in on 1 January 2019; 21 population centres, the city 206,010 in 2023, Haren 18,450, Ten Boer 4,630, Glimmen 1,370; mayor Roelien Kamminga since 30 June 2025; seven gebiedsdelen, 14 wijken and 106 buurten.' },
          { h3: 'Two counts, 402 people apart', p: 'The national page gives 244,427 for 1 January 2026 and the encyclopaedia entry gives 244,829 for the same date. Both are printed here with their sources; the arithmetic on this page uses the national figure throughout and says so.' },
          { h3: 'Twenty wijken or fourteen', p: 'The national page divides the municipality into 20 wijken and 160 buurten; the entry gives 14 wijken in 106 buurten under seven gebiedsdelen. These are two classifications, one statistical and one administrative, not a contradiction, and the page keeps both rather than picking.' },
          { h3: 'The university and the hogeschool', p: 'The Rijksuniversiteit Groningen: founded 1614, second oldest in the country after Leiden, about 33,000 students in 2025 including 8,250 international from more than 120 nationalities, about 3,600 academic staff, eleven faculties plus University College Groningen and Campus Fryslân. The Hanzehogeschool Groningen: about 31,294 students and 3,831 staff, formed in 1986, teaching traced to 1798, 18 schools.' },
          { h3: 'Three student numbers that cannot be added', p: '33,000 at the university, 31,294 at the hogeschool and 61,889 in the municipality\'s higher-education count. The first two are enrolments at institutions, some of whose students live outside the city; the third is a municipal figure on its own definition. The page quotes all three and adds none of them together.' }
        ] },
        { kind: 'p', text: 'Neither institution, nor the municipality, nor any school named on this page has any connection to Modern Age Coders, and none is implied. They are here because a page that claims to teach Groningen should be able to say what Groningen is made of.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: '1.7 people per household: build the program that finds the two cities inside one average',
      intro: 'Two published numbers, one percentage, and a mean that turns out to describe neither of the groups it was computed from.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Reproduce the average', p: 'The learner divides 244,427 residents by 145,521 households and gets 1.6797, which the source rounds to 1.7. So far the arithmetic agrees with the published figure, which is the point: the number is right. Everything that follows is about what it means.' },
          { h3: '2. Split on the 61 percent', p: 'Sixty-one percent of 145,521 is about 88,768 households, each holding exactly one person, so those households account for 88,768 residents. That leaves 155,659 residents in 56,753 households, an average of 2.74 each. The learner has now found two populations where the source printed one number.' },
          { h3: '3. Ask what a typical household is', p: 'The mean is 1.68. The mode is 1, held by 61 percent. The median household, the 72,761st of 145,521 when sorted by size, also holds 1 person, because the single-person households alone run past the halfway mark. Three measures of the middle, two of which say one person and none of which says 1.7.' }
        ] },
        { kind: 'table', caption: 'One city, one average, and the two groups it is made of', head: ['Group', 'Households', 'Residents', 'People per household'], rows: [
          ['Households of exactly one person, 61 percent', 'about 88,768', 'about 88,768', '1.00'],
          ['All other households', 'about 56,753', 'about 155,659', 'about 2.74'],
          ['The municipality as published', '145,521', '244,427', '1.68, printed as 1.7'],
          ['Any single household in the city', '1', 'a whole number', 'never 1.7']
        ] },
        { kind: 'callout', h3: 'A mean is a balance point, not a description', p: 'The average household size is exactly the right number for some purposes: multiply it by the number of households and the residents come back. It is the wrong number for almost every purpose a person actually has, because household size is a count of people, and no household contains seven tenths of anybody. When a majority of cases sit at one value, as 61 percent of Groningen\'s households sit at one person, the mean is pulled off the mode and lands in a gap where nothing lives. A learner who has split this one on its own published percentage will ask, of every average they are ever handed, what the distribution underneath looks like and whether the mean is a value any case could take. The split above assumes every resident lives in a private household, which the sources do not state; the assumption is written into the program and printed with the answer.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any average that arrives without its distribution',
      intro: 'Average class size, average salary, average response time, average basket, average household: each is a single number standing in for a shape. Practised first on the city the learner lives in.',
      body: [
        { kind: 'table', caption: 'When one number is standing in for a distribution', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Ask what is being counted', 'Check whether the quantity is discrete; a mean of a count need not be attainable', '1.7 people read as a household you could visit', 'A mean you know how to use'],
          ['Find the mode', 'Look for a value a large share of cases share', 'A 61 percent majority hidden behind a decimal', 'The typical case, as opposed to the balance point'],
          ['Split and recompute', 'Break the population on the biggest known group and average each part', 'One number covering two populations', 'Two numbers that each describe something'],
          ['Locate the median', 'Sort and walk to the middle case, do not trust the mean to sit there', 'A skewed distribution read as symmetric', 'The middle case itself'],
          ['State the assumption', 'Write down what the split assumes and print it with the result', 'A derived 2.74 passed off as published', 'A number a reader can audit']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Ten cups on a table: six with one bean each and four with three. The child works out the average, gets 1.8, and then looks for a cup with 1.8 beans in it. There is none. Ten minutes, no screen, and the child can say what the average did and did not tell them.' },
          { h3: 'For teenagers', p: 'The two published figures and the 61 percent in Python, the split, the derived 2.74, and a bar chart of household size that shows the spike at one. Then the harder question: what would the single-person share have to fall to for the mean to reach two, and is that a plausible city?' },
          { h3: 'For adults', p: 'The same split on an average from work: handling time, order value, tenure, class size. Adults usually find a mode they had not noticed, a long tail pulling the mean, and a decision that was made on the mean alone.' }
        ] },
        { kind: 'p', text: 'The resident count, the household count, the average of 1.7, the 61 percent share, the age bands, the school counts and the student figures are published by the offices and entries named beside them. The 88,768, the 155,659 and the 2.74 are arithmetic on those published figures and are labelled as derived wherever they appear.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From ten cups of beans to a split that finds two populations in one mean',
    intro: 'The rung is decided in the free first hour, and the wijk on the address is not one of the inputs.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'The cup with 1.8 beans', p: 'Children compute an average and then go looking for the case that matches it.', courses: ['scratch-programming-complete-course', 'kids-coding-blocks-masterclass'] },
      { band: 'Ages 11 to 13', h3: 'Mean, median and mode', p: 'Learners compute all three on a small dataset and find where they part company.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'Splitting a published average', p: 'Teenagers reproduce the city figure, split it on the 61 percent and chart the spike.', courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Distributions at work', p: 'Adults take an average their team relies on and recover the shape behind it.', courses: ['data-science-complete-masterclass-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will tell a Groningen parent the average household here has 1.7 people. Why should their child learn to take that apart?',
    intro: 'Because the number is correct, the source is real, and the sentence it forms in a reader\'s head is false.',
    p1: 'Ask a tool about household size in Groningen and it will return 1.7, properly sourced, because that is what the statistics office publishes. It will not, unbidden, note that household size is a count and 1.7 is not an attainable one, nor reach for the 61 percent single-person share that sits in the same table, nor split the city into the 88,768 who live alone and the 155,659 who do not. Those moves belong to someone who has done the division themselves and gone looking for what it hid.',
    p2: 'That is the habit the class installs, and it is why the learner still writes the code rather than reading the answer. The tool will produce the split, the median and the chart the moment it is asked. What it will not do is ask on its own behalf whether the mean it just quoted describes any real case. A thirteen-year-old in Selwerd who has found the spike at one will look for the mode behind an average salary at twenty-three and an average waiting time at thirty-three, and will be the one in the room who says: show me the distribution. Whatever the tools are called by then, that sentence will still be the useful one.',
    closer: 'For a Groningen parent, then, the case for coding in 2026 is not that the child will become a statistician. It is that an average is a summary with a shape underneath it, that finding the shape is a dozen lines of code, and that the quickest way to learn it for good is to take apart a number published about the street the child lives on.',
    blogAnchor: 'whether coding is still worth learning now that AI writes most of it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a city that is compact, and a municipality that is not',
    intro: 'The city is famously cyclable end to end, but the municipality now runs from Ten Boer to Glimmen, and a winter evening in a village is not a bike ride. A class that arrives through the connection treats both the same.',
    cells: [
      { h3: 'No evening trip anywhere', p: 'The lesson happens at the kitchen table in Beijum, Helpman or Haren at a fixed weekly hour, in the dark and the rain as easily as in June.' },
      { h3: 'English, with the school\'s Dutch left alone', p: 'Teaching is in English, which the 8,250 international students at the university and their families already work in. Groep, havo, vwo and profielkeuze are said exactly as the school says them.' },
      { h3: 'What the free hour settles', p: 'One real task at the learner\'s level, a course chosen from how it goes, and a starting rung, arranged without a card.' },
      { h3: 'Grouped by level, not by postcode', p: 'A learner from the Korrewegwijk and one from Glimmen sit in the same group if they are at the same point, and in different ones if they are not.' },
      { h3: 'Twice a week, on regio Noord\'s calendar', p: 'Two fixed lessons a week, usually eight in a month. Groningen breaks up with regio Noord, and the family\'s weeks away are agreed before the slot is confirmed.' },
      { h3: 'Three and a half hours, then four and a half', p: 'The Dutch clock moves in March and October and the Indian one does not, so a Groningen afternoon runs that far behind the teacher\'s evening. After school, before dinner and at weekends work at both ends.' }
    ],
    spec: { title: 'A city that empties in July and fills in September', p: 'With a fifth of the population aged fifteen to twenty-five, Groningen\'s rhythm is academic, and a family fitting lessons around a student household, a school year and a shift pattern needs a fixed hour rather than a room to get to. The hour is chosen once, in the free lesson, and it stays.' }
  },

  fees: {
    h2: 'One tariff in dollars for the whole municipality, and a free hour first',
    intro: 'Printed here before anything of yours is asked for.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'Everyone outside India sees one figure in US dollars and never a euro one, so Ten Boer is charged what the Binnenstad is. Nothing is paid until the free lesson has fixed the course and the hour, and then it is paid over WhatsApp. Pausing, switching plan and missing a lesson are explained on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, in the reviewers\' own words',

  book: {
    h2: 'Tell us the level; the wijk is optional',
    intro: 'The opening task might be ten cups of beans, the household split in Python, or an average from work that has never been shown with its distribution.',
    success: 'Thank you. Your Groningen class request has been sent.'
  },

  faq: {
    h2: 'Groningen coding class questions',
    intro: 'The city, its households, its students, the teaching and the terms.',
    items: [
      { q: 'Why does this page say no household in Groningen has 1.7 people?', a: 'Because household size is a count of people and 1.7 is not one. The figure is the right answer to a division: 244,427 residents by 145,521 households is 1.68, printed as 1.7. But 61 percent of those households hold exactly one person, so about 88,768 households average 1.00 and the other 56,753 average about 2.74. The mean sits in the gap between them, and the median and the mode both sit at one. Taking that apart is the project on this page.' },
      { q: 'Does this page cover the city or the whole municipality?', a: 'The municipality, which since 1 January 2019 includes Haren and Ten Boer: 21 population centres in all, 244,427 people on 1 January 2026. The city itself was 206,010 in 2023. Where a figure is for the city rather than the municipality the page says so.' },
      { q: 'How many students are there really?', a: 'It depends which count you use, and the page refuses to add them. The Rijksuniversiteit Groningen had about 33,000 in 2025, the Hanzehogeschool about 31,294, and the national statistics page gives 61,889 in higher education for the municipality on its own definition. The first two are enrolments at institutions, and a student enrolled here may live somewhere else.' },
      { q: 'We are in Haren, Ten Boer or one of the villages. Is the class different?', a: 'It is the same class at the same hour. A child in Glimmen and a child in the Oosterpoort are in one group if they are at the same level, and the drive that would separate them for an in-person class never happens.' },
      { q: 'Does the teacher speak Dutch?', a: 'Teaching is in English. The school\'s words, groep, havo, vwo and profielkeuze, are kept as the school uses them, but the class is not offered in Dutch and not in Gronings.' },
      { q: 'What time are classes for a family in Groningen?', a: 'A Groningen afternoon is three and a half hours behind the teacher while Dutch summer time runs and four and a half hours behind in winter, because India keeps a single clock. Late afternoon, early evening and weekend hours suit both ends, and the recurring one is chosen during the free lesson.' },
      { q: 'Is there really more secondary than primary in the city?', a: 'By pupils, yes: 80 primary establishments teach 15,901 and 30 secondary establishments teach 16,469, which is the reverse of the usual pattern because secondary schools here draw from far beyond the municipal boundary. It is a good reminder that a school figure counts where the school is, not where the child sleeps.' },
      { q: 'Is there a Modern Age Coders classroom in Groningen?', a: 'No, and none is claimed at Zernike, in the Binnenstad or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Groningen coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a Groningen group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or neighbourhood. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'Out to the province, and up to the country',
    html: 'The city sits inside the <a class="cg-inline-link" href="/coding-classes-in-groningen-province">province of Groningen</a>, whose page takes apart the earthquake scale; south along the A28 is <a class="cg-inline-link" href="/coding-classes-in-drenthe">Drenthe</a> and west across the Lauwersmeer is <a class="cg-inline-link" href="/coding-classes-in-friesland">Friesland</a>. All of them hang off the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and a learner who wants a model that learns rather than a program that runs should open <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-groningen-province', label: 'Province of Groningen' },
    { href: '/coding-classes-in-drenthe', label: 'Drenthe' }
  ],

  personalityCss: `
.cg-root.cg-grn .cg-hero-grid { align-items: end; gap: clamp(1.75rem, 4vw, 3.25rem); }
.cg-root.cg-grn .cg-hero h1 { font-weight: 500; letter-spacing: -0.01em; line-height: 1.12; }
.cg-root.cg-grn .cg-capsule { border-left-width: 5px; border-left-style: solid; padding-left: 1.45rem; }
.cg-root.cg-grn .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; }
.cg-root.cg-grn .cg-section-head h2 { max-width: 33ch; }
.cg-root.cg-grn .cg-grid-3 { gap: clamp(1.15rem, 2.5vw, 1.85rem); }
.cg-root.cg-grn .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 1.15rem; }
.cg-root.cg-grn .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-grn .cg-callout { border-left-width: 6px; }
`,

  dossier: {
    curriculumAuthority: 'City and municipality of Groningen: 244,427 residents (CBS 1 January 2026), sixth largest in the country; 80 primary establishments (15,901 pupils) and 30 secondary (16,469), the unusual case where secondary pupils outnumber primary; 61,889 in higher education. Rijksuniversiteit Groningen (1614) and Hanzehogeschool. Haren and Ten Boer merged in on 1 January 2019; 21 population centres. Regio Noord holidays. The city page argues from household and age structure; the province page owns the earthquake scale and the hub owns the national curriculum.',
    localProject: 'A mean is a balance point, not a description (a discrete quantity whose average is unattainable, with a majority mode). Groningen: 244,427 residents in 145,521 households is 1.68, published as 1.7, while 61 percent of households hold exactly one person. Splitting gives about 88,768 single-person households averaging 1.00 and about 56,753 others averaging about 2.74; mode and median both sit at 1. Distinct from the midrange-versus-median trap (Tutong), from the average-of-rates trap (Al Mudhaibi) and from the net-figure trap (Utrecht city: pupils in schools versus pupils from homes): the flaw here is reading a mean of a count as a typical case when a 61 percent mode sits elsewhere. Derived before writing, and the assumption that every resident lives in a private household is printed with the result.',
    requiredMentions: [
      '145,521',
      '88,768',
      '155,659',
      '2.74',
      '52,431',
      '15,901',
      '16,469',
      '61,889',
      '196,339',
      'Hanzehogeschool',
      'Ten Boer',
      'Glimmen',
      '1614',
      '8,250'
    ],
    sources: [
      { claim: 'Municipality of Groningen 244,427 residents on 1 January 2026 (CBS provisional); 145,521 households averaging 1.7 people with 61 percent single-person; 27,786 under 15; 52,431 aged 15 to 25; 75,681 aged 25 to 45; 38,793 aged 65 and over; 80 primary establishments (15,901 pupils); 30 secondary (16,469); 61,889 students in higher education; total area 19,796 ha, land 18,553 ha; density 1,318; 20 wijken and 160 buurten; 196,339 residents in 1995, a rise of 48,088 (24 percent).', url: 'https://allecijfers.nl/gemeente/groningen/' },
      { claim: 'Municipality of Groningen 244,829 residents on 1 January 2026, the sixth largest municipality in the Netherlands and the largest in the north; 197.96 km2 total, 185.60 land, 12.36 water; Haren and Ten Boer merged with Groningen on 1 January 2019; 21 population centres, the city 206,010 (2023), Haren 18,450, Ten Boer 4,630, Glimmen 1,370; mayor Roelien Kamminga since 30 June 2025; seven gebiedsdelen and 14 wijken in 106 buurten.', url: 'https://nl.wikipedia.org/wiki/Groningen_(gemeente)' },
      { claim: 'City of Groningen 206,010 inhabitants on 1 January 2023; the 200,000th resident welcomed on 28 October 2014; roughly 60,000 students of whom nearly 35,000 live in the city (2018); the 20 to 25 age group is 15.9 percent of the population against a national 6.0 percent; the largest city of the northern Netherlands.', url: 'https://nl.wikipedia.org/wiki/Groningen_(stad)' },
      { claim: 'University of Groningen founded 1614, the second oldest in the Netherlands after Leiden; about 33,000 students in 2025 including 8,250 international students from more than 120 nationalities; about 3,600 academic staff; eleven faculties plus University College Groningen and Campus Fryslân.', url: 'https://en.wikipedia.org/wiki/University_of_Groningen' },
      { claim: 'Hanzehogeschool Groningen: 31,294 students and 3,831 staff (earlier figures 30,878 and 3,417); formed by merger in 1986 with teaching traced to 1798 at the Academie van Teeken-, Bouw- en Zeevaartkunde; 18 schools.', url: 'https://nl.wikipedia.org/wiki/Hanzehogeschool_Groningen' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any sum of the three student figures. 33,000 at the university, 31,294 at the hogeschool and 61,889 in the municipal higher-education count are on different definitions; the page quotes each and adds none.',
      'A ratio of students to residents aged 15 to 25. 61,889 over 52,431 exceeds 100 percent because the two counts have different frames, so the page does not compute it.',
      'Which wijken hold the highest single-person share. The 61 percent is municipal; no wijk-level breakdown was read, so the neighbourhood descriptions carry no figures.',
      'The 2018 figure of nearly 35,000 students living in the city. Quoted in the source entry but too old to use in the arithmetic; kept in the source record only.',
      'Anything the province page owns: the earthquake magnitudes, the gas field dates, the ten municipalities.',
      'Anything the Netherlands hub owns: the SLO core objectives and the national informatica figures.'
    ]
  }
};
