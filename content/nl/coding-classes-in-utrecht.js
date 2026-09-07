'use strict';
// Utrecht: the country's transfer point. Spine: two official totals both called
// "Utrecht secondary pupils" that differ by 4,870, and why a net figure is one
// equation with two unknowns. The busiest station in the country counts its
// passengers excluding transfers, which is the same trap in a second dataset.

module.exports = {
  slug: 'coding-classes-in-utrecht',
  code: 'utr',
  accent: '#006852',
  accentRationale: 'Utrecht: a sea green for the Singel, the ring of water the old city sits inside',
  pageType: 'city',
  place: {
    name: 'Utrecht',
    eyebrow: 'Utrecht, province of Utrecht',
    schemaType: 'City',
    chain: [{ type: 'AdministrativeArea', name: 'Utrecht' }, { type: 'Country', name: 'Netherlands' }]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Utrecht, Netherlands',
  title: 'Coding Classes in Utrecht | Modern Age Coders',
  description: 'Live online coding, Python, JavaScript and AI classes for Utrecht learners aged 6 to 67, in the city where every count of pupils and passengers has two answers.',
  ogDescription: 'Live online coding, Python, JavaScript, AI and mathematics for Utrecht families, built on the two official totals that both call themselves Utrecht pupils.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'javascript-course-for-teens-beginners-interactive-web',
  verifiedOn: '7 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Utrecht Learners',
    description: 'Ability-placed online coding, Python, JavaScript, AI, data and mathematics for children, teenagers and adults across the ten wijken of Utrecht, taught in English.'
  },

  h1: 'Coding classes in Utrecht, where the busiest station in the country counts everyone except the people changing trains',
  capsuleQ: 'What are the best coding classes in Utrecht?',
  capsule: 'Coding classes in Utrecht serve a city of 378,121 people (Statistics Netherlands, 1 January 2026) with as many residents aged fifteen to twenty-five as under fifteen, whose 31 secondary schools teach 20,640 pupils while its 15,770 resident secondary pupils are spread across 62 schools in and around the city, and whose central station carries 241,730 passengers a day not counting the ones who change trains. Modern Age Coders runs live online coding, Python, JavaScript, AI and mathematics classes in English for Utrecht learners from 6 to 67. The opening lesson is free; a group place is then USD 100 a month and one-to-one tuition USD 150.',
  lead: 'Two official offices count Utrecht\'s secondary pupils and get answers 4,870 apart, and both are right, because one counts the schools and the other counts the children. Working out what that gap can and cannot tell you is a twenty-minute program, and it is the most Utrecht thing a child here can learn, in a city whose whole function is people passing through.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Utrecht.',

  picks: {
    eyebrow: 'Course picks for Utrecht',
    h2: 'Four courses for a city with 57,569 people between fifteen and twenty-five',
    intro: 'Utrecht has a university founded in 1636 with more than 33,000 students, a hogeschool, a science park and a new half of the city built since 1997 for young families. These four courses are chosen for that spread: a child in Leidsche Rijn, a teenager at one of the two gymnasia, a student on the Science Park, and a graduate who wants the next job to be one they can build.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 10', note: 'Sequences, conditions and the first real bug, in English, for a groep 3 to 5 child in Terwijde or Wittevrouwen.' },
      { course: 'javascript-course-for-teens-beginners-interactive-web', band: 'Ages 13 to 17', note: 'Interactive websites and browser games in JavaScript, for the teenager who wants the thing they built to run on a phone the same day.' },
      { course: 'data-science-complete-masterclass-college', band: 'College and adult', note: 'Python, machine learning and deep learning for the UU or HU student who has a dataset and no idea yet what it can and cannot say.' },
      { course: 'git-github-version-control-course-for-college-students', band: 'College and adult', note: 'Team-ready version control for the student whose group project has four copies of the same file with four different names.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Utrecht today',
      h2: 'Half the city is younger than its residents, and a quarter of it did not exist in 1997',
      intro: 'Statistics Netherlands counted 378,121 people on 1 January 2026 in 194,040 households: 57,789 under fifteen and 57,569 between fifteen and twenty-five, which is what a university city with a new suburb looks like in a table. Fifty-nine percent are of Dutch origin, eleven percent from elsewhere in Europe and thirty percent from outside it; the largest origin groups in 2022 were Morocco at 31,694, Turkey at 14,466 and Suriname at 7,720, and nearly a quarter of residents were born abroad.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Ten wijken, two of them brand new', p: 'Leidsche Rijn is the largest wijk at 51,692 and Vleuten-De Meern the second at 51,181 on 1 January 2026. Between them that is 102,873 people, twenty-seven percent of the city, on land that was a separate municipality until 1 January 2001 and largely fields until the first pile was driven on 4 December 1997.' },
          { h3: 'The old city and its ring', p: 'Binnenstad is the smallest wijk at 20,549 and holds the Domtoren, at 112.32 metres the tallest church tower in the country, and the university founded in 1636. Oost, at 33,624, holds the Science Park: about 300 hectares bought by the state in 1958, called De Uithof until 2018, reached by tram 22 since 14 December 2019.' },
          { h3: 'The 1960s and the between', p: 'Overvecht, 36,124, is the post-war north. Noordwest at 45,442, Zuidwest at 41,497, Noordoost at 39,780, West at 29,466 and Zuid at 28,766 make up the ring of pre-war and mid-century Utrecht between the old city and the new one.' }
        ] },
        { kind: 'spec', title: 'Leidsche Rijn, the largest housing project in the country', p: 'Thirty thousand homes planned across 1,126 hectares for a final population of about 90,000, the first pile driven on 4 December 1997, the centre opened on 16 May 2018, the railway through it widened to four tracks by October 2018 with stations at Leidsche Rijn, Terwijde and a relocated Vleuten. The Dutch encyclopaedia calls it the largest Vinex location in the Netherlands, and most of the children in it were born after the centre was.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Schools by name',
      h2: 'Thirty-one schools in the city, sixty-two that Utrecht children attend, and the eight worth naming',
      intro: 'The schools register lists 68 secondary establishments serving Utrecht, 31 of them inside the municipality, and 15,770 Utrecht-resident pupils in 2025-26. The left column is each school as the register describes it; the right is what fits beside it.',
      body: [
        { kind: 'align', rows: [
          { code: 'ISU', req: 'International School Utrecht, Van Deventerlaan 1 in Papendorp: all three IB programmes, PYP, MYP and Diploma, governed by NUOVO Scholen and SPO Utrecht, which makes it a publicly run international school; 457 Utrecht-resident pupils.', ours: 'Placement by MYP year; a Diploma student who has chosen Computer Science takes the IB course itself and uses the live sessions for the internal assessment.' },
          { code: 'Amadeus', req: 'Amadeus Lyceum, Burchtpoort 3 in Vleuten, mavo, havo and vwo, and at 1,630 Utrecht pupils the largest intake in the city.', ours: 'The Python ladder by level; a term of Python for third-years before the profielkeuze; JavaScript for the teenager who wants something visible fast.' },
          { code: 'Boni', req: 'Het Boni, Burgemeester Fockema Andreaelaan 7 to 9, havo and vwo, 1,625 Utrecht pupils, a whisker behind Amadeus.', ours: 'Data science in Python beside wiskunde A or B in the bovenbouw; problem solving and data structures for the student aiming at the Science Park.' },
          { code: 'LRC', req: 'Leidsche Rijn College, Maartvlinder 1, vbo through vwo under one roof, 1,328 Utrecht pupils, the school of the new half of the city.', ours: 'Blocks and Python for the onderbouw; app and website courses for the vmbo stream so that something exists to show an MBO intake.' },
          { code: 'Academie Tien', req: 'Academie Tien, Berlijnplein 300 in Leidsche Rijn Centrum, vbo through vwo, 1,150 Utrecht pupils, in a building that did not exist before 2018.', ours: 'The same ladder, with a slot that survives a family whose commute runs through Utrecht Centraal twice a day.' },
          { code: 'Gymnasia', req: 'Christelijk Gymnasium Utrecht on the Koningsbergerstraat, 869 Utrecht pupils, and the Utrechts Stedelijk Gymnasium on the Ina Boudier-Bakkerlaan, 747: two categorical gymnasia, vwo only.', ours: 'Problem solving, data structures and the Python-to-machine-learning track, because a student doing Latin for six years can do recursion.' },
          { code: 'UniC and X11', req: 'UniC at Van Bijnkershoeklaan 2 (havo and vwo, 910) and X11 at number 8 (vbo, mavo and havo, 903), two schools on one lane.', ours: 'Creative coding and game development for X11\'s makers; the standard ladder for UniC.' }
        ] },
        { kind: 'p', text: 'Gerrit Rietveld College on the Eykmanlaan (1,145) and Descart on the Grebbeberglaan (1,175) complete the list of the largest. What a school is called fixes the words a family uses with us; what the learner can do is found out in the free lesson.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Utrecht facts, each with the office that published it',
      intro: 'Seven things this page rests on, including the two totals that make the project possible.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'The count', p: 'Statistics Netherlands, provisional, 1 January 2026: 378,121 residents; 194,040 households; 57,789 under fifteen; 57,569 aged fifteen to twenty-five; 113 primary establishments with 31,673 pupils; 31 secondary establishments with 20,640 pupils; ten wijken and 111 buurten.' },
          { h3: 'The other count', p: 'The schools register, 2025-26: 68 secondary establishments serve Utrecht residents, 31 of them in the municipality; 62 different schools in total; 15,770 Utrecht-resident pupils attend a secondary school somewhere. Twenty thousand six hundred and forty in the city\'s schools and fifteen thousand seven hundred and seventy from the city\'s homes are both true.' },
          { h3: 'The station', p: 'Utrecht Centraal carried 241,730 passengers a day in 2025, a figure its own information box marks as excluding transfers, over sixteen tracks with more than a thousand departures a day. The Stationsplein bicycle parking, opened on the east side, holds 29,232 bicycles and is the largest in the world.' },
          { h3: 'The new half', p: 'Leidsche Rijn: first pile 4 December 1997, 30,000 homes planned, 1,126 hectares, about 90,000 residents planned, about 45,000 living there by 2022, Leidsche Rijn Centrum opened 16 May 2018, four tracks by October 2018. Vleuten-De Meern was a separate municipality until 1 January 2001.' },
          { h3: 'The university and the park', p: 'Utrecht University was founded in 1636 and has more than 33,000 students. The Science Park in Oost covers about 300 hectares bought by the state in 1958, was renamed from De Uithof in 2018, has about 3,000 student rooms on site and has been served by tram 22 from Utrecht Centraal since 14 December 2019.' },
          { h3: 'The ten wijken, in order', p: 'Leidsche Rijn 51,692; Vleuten-De Meern 51,181; Noordwest 45,442; Zuidwest 41,497; Noordoost 39,780; Overvecht 36,124; Oost 33,624; West 29,466; Zuid 28,766; Binnenstad 20,549, all on 1 January 2026 from the municipal register. They sum to 378,121, which matches the national figure exactly and is worth a small round of applause in class.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no association with the municipality of Utrecht, with Utrecht University, with the Science Park, with ProRail or NS, or with any school named above, and claims none. They are here because a page about coding classes in a city should be able to describe the city.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Twenty thousand six hundred and forty in the schools, fifteen thousand seven hundred and seventy from the homes: build the program that shows what the gap cannot tell you',
      intro: 'Two published totals, one word, and a line of solutions that no amount of staring at the two numbers will collapse to a point.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Take the two totals', p: 'Statistics Netherlands counts 20,640 pupils in the 31 secondary schools located in Utrecht. The schools register counts 15,770 Utrecht-resident pupils in secondary education anywhere. The difference is 4,870. Both are real, both are for the same city, and both use the phrase "Utrecht pupils" for populations that only partly overlap.' },
          { h3: '2. Name the two flows', p: 'Some pupils live outside the municipality and travel into Utrecht schools: call them in. Some live in Utrecht and travel out to Nieuwegein, Zeist, Houten or a school across the line: call them out. What the two totals tell you is exactly one thing: in minus out equals 4,870. That is one equation with two unknowns, and the learner writes it down as one.' },
          { h3: '3. Walk the line of solutions', p: 'If nobody leaves, 4,870 come in. If 2,500 leave, 7,370 come in and 9,870 children cross the municipal line each morning. If 8,000 leave, more than half of Utrecht\'s own pupils are schooled outside it and 12,870 come in. Every row fits both published numbers. The gap is real; the story you tell about it is a choice until a third figure arrives.' }
        ] },
        { kind: 'table', caption: 'One net figure, many pairs of gross flows: every row satisfies both published totals', head: ['Utrecht residents schooled outside the city', 'Pupils coming in from outside', 'Children crossing the line daily', 'Share of Utrecht pupils schooled elsewhere'], rows: [
          ['0', '4,870', '4,870', '0 percent'],
          ['1,000', '5,870', '6,870', '6.3 percent'],
          ['2,500', '7,370', '9,870', '15.9 percent'],
          ['5,000', '9,870', '14,870', '31.7 percent'],
          ['8,000', '12,870', '20,870', '50.7 percent']
        ] },
        { kind: 'callout', h3: 'A net figure is one equation with two unknowns', p: 'The 4,870 tells you Utrecht is a net importer of secondary pupils, and nothing else. It cannot tell you how many Utrecht children leave the city for school each morning, and every confident sentence about that is one row of the table chosen without saying so. The same shape hides in the station down the road: 241,730 passengers a day excluding transfers, at the one station in the country whose entire purpose is transfers. A learner who has walked this line once will ask "net or gross?" of every migration figure, every headcount change and every passenger count for the rest of their life. The table was computed before this paragraph was written; the two totals are published, and the rows are the solution set, not data.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any figure that is really a difference between two flows',
      intro: 'Net migration, net hiring, net promoter, net new customers: most numbers with "net" in front of them are this table in disguise. Practised first on the city\'s own schools.',
      body: [
        { kind: 'table', caption: 'When a number is a subtraction', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Name', 'Say whether the figure is a stock, a gross flow or a net flow', 'Net imports read as a headcount of commuters', 'A sentence that is true'],
          ['Count the unknowns', 'Write the equation and count what you do not know', 'A single answer to a question with a line of answers', 'Honest uncertainty'],
          ['Walk the line', 'Tabulate several pairs that fit, from one extreme to the other', 'The first plausible story winning', 'The full range of what the data allows'],
          ['Find the third figure', 'Ask which extra measurement would fix the point', 'An argument that can never end', 'A question the data could answer'],
          ['Read the footnote', 'Check what the count excludes; excluding transfers at a hub changes everything', 'The busiest station reported as smaller than it is', 'A number that matches the place']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'Two classrooms of toy figures swap some children in each direction while the child looks away. Then the child is told only how many more are in room A than before, and asked how many moved. They cannot say, and they work out that they would need to have watched one of the doors. Ten minutes, no screen, and the sentence is theirs.' },
          { h3: 'For teenagers', p: 'The equation in Python, a loop over out-commuter values, and a printed table like the one above. Then the harder question: which single number, if Utrecht published it, would collapse the line to a point, and where would you go to find it.' },
          { h3: 'For adults', p: 'The same program on a team\'s net headcount change, a country\'s net migration or a product\'s net new subscribers. Most of those dashboards show the net in large type and neither gross flow at all, and a Utrecht commuter who has sat in a meeting about "we grew by twelve" knows how that goes. Bring one if it is yours to share.' }
        ] },
        { kind: 'p', text: 'The two pupil totals, the population and wijk figures, the station count and its exclusion, the Leidsche Rijn dates and the university and Science Park figures are all published by the offices named in the sentences that use them. The rows of the solution table are arithmetic on the two published totals and are presented as the set of possibilities, never as a measurement.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From two toy classrooms to a net-flow model with its unknowns counted',
    intro: 'The free lesson finds the rung; which of the ten wijken the laptop is in does not.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'What a difference cannot tell you', p: 'Children discover that knowing how many more does not tell them how many moved.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Ages 11 to 13', h3: 'An equation with a spare unknown', p: 'Learners write in minus out in Python and print every pair that works.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Ages 14 to 18', h3: 'The line of solutions, and the third figure', p: 'Teenagers tabulate the solution set and name the measurement that would fix it.', courses: ['python-complete-masterclass-teens', 'javascript-course-for-teens-beginners-interactive-web'] },
      { band: 'Ages 18 to 67', h3: 'Net numbers at work', p: 'Adults take apart a net headcount, a net migration or a net subscriber figure from their own field.', courses: ['data-analysis-mastery-course-college', 'python-programming-masterclass-zero-to-advanced-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Utrecht educates a large share of the country\'s engineers. Why should a ten-year-old here still write code when an AI already can?',
    intro: 'Ask an assistant how many Utrecht children go to school outside the city and it will hand you a number, warmly and at once. The number will be one row of the table above, chosen for you without a word.',
    p1: 'The fluency is the problem. A tool that always answers does not, unasked, say that the question has a line of answers, that the published figures fix only the difference, or that the confident integer it produced rests on an assumption it never showed you. Noticing that is not a feature of any model. It is a habit in a person, and the habit is built by writing the equation once, counting its unknowns and watching the table refuse to collapse.',
    p2: 'That is why the learner still writes the program here rather than requesting it: not for the syntax, which the tools supply, but for the moment of seeing that in minus out is one equation and not two. A twelve-year-old in Leidsche Rijn who has had that moment with the school figures will have it again with a migration headline at sixteen and a growth dashboard at twenty-six, and will be the one in the room asking "net or gross?" while everyone else nods at the number. The tools between now and then will change several times. The question will not.',
    closer: 'So for a Utrecht parent the case for coding in 2026 is not that the child will type for a living. It is that counting the unknowns in a number is a skill, that it transfers, and that nobody has found a way to teach it except by having the learner build the model and then find what it cannot say.',
    blogAnchor: 'is coding still worth learning when AI writes it'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for the city everybody passes through',
    intro: 'Utrecht families already spend more of their week in transit than most: through the station, over the A2, on tram 22 to the Science Park. A lesson that arrives at the kitchen table is the one appointment that does not.',
    cells: [
      { h3: 'No platform, no transfer', p: 'The class is at home in Terwijde, Lombok or Tuindorp at a fixed hour, and it is indifferent to whether the 17:38 from Amsterdam is on time.' },
      { h3: 'English first, Dutch words intact', p: 'Teaching is in English. Groep, havo, vwo, gymnasium, profielkeuze and MYP stay in Dutch or in IB-speak, exactly as the school uses them, because that is the vocabulary the family lives in.' },
      { h3: 'The opening lesson is the whole product, once, for free', p: 'A task pitched at the learner, a level, a named course and a weekly time by the end of the hour. No card details are taken to arrange it.' },
      { h3: 'Five to ten learners, grouped by level', p: 'Groups are assembled from what learners can do and want next. Wijk, school and whether the family arrived last month or in 1636 do not enter into it.' },
      { h3: 'Two lessons a week, on regio Midden\'s calendar', p: 'Roughly eight a month at one recurring time. The province of Utrecht takes its school holidays with regio Midden, and those weeks are agreed before the slot is.' },
      { h3: 'Four and a half hours, or three and a half', p: 'That is the gap between a Utrecht afternoon and the teacher\'s evening in India, wider in winter because only the Dutch clock moves. After-school, early-evening and weekend slots suit both ends and the family fixes one during the free lesson.' }
    ],
    spec: { title: 'A city of arrivals and departures', p: 'Utrecht has 57,569 residents between fifteen and twenty-five and most of them will leave within a decade, for a job in Amsterdam, a lab in Eindhoven or a posting abroad. A course that lives on a laptop and a fixed time in the learner\'s own week goes with them, and a student who started the data science course in a room on the Cambridgelaan can finish it from wherever the first job is.' }
  },

  fees: {
    h2: 'Nothing for the first lesson, then USD 100 or USD 150 a month',
    intro: 'The whole tariff, printed before anyone asks for a phone number.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'One international rate exists and it is in US dollars; there is no euro list, no Utrecht supplement and no enrolment charge. The free lesson settles the course and the slot, and payment is arranged afterwards over WhatsApp rather than before. Pauses, plan changes and missed lessons are set out on the pricing page.'
  },

  reviewsH2: 'What families and learners say',

  book: {
    h2: 'Tell us the learner\'s level, and the wijk if it helps',
    intro: 'The opening task might be two toy classrooms and a closed door, a Python loop over out-commuters, or a net figure from work that has been quoted in meetings for years without anyone asking what it hides.',
    success: 'Thank you. Your Utrecht class request has been sent.'
  },

  faq: {
    h2: 'Utrecht coding class questions',
    intro: 'The city, its schools, the station, the teaching and the terms.',
    items: [
      { q: 'How many Utrecht children go to secondary school outside the city?', a: 'Nobody can say from the published figures, and that is the project on this page. Statistics Netherlands counts 20,640 pupils in Utrecht\'s 31 secondary schools; the schools register counts 15,770 Utrecht-resident secondary pupils across 62 schools. The difference of 4,870 is a net figure: pupils in minus pupils out. Any pair of gross flows with that difference fits, from nobody leaving to more than half leaving.' },
      { q: 'Our child is at the International School Utrecht. Does the ladder fit the IB?', a: 'Yes. ISU at Van Deventerlaan 1 in Papendorp runs the PYP, MYP and Diploma Programme and is governed by NUOVO Scholen and SPO Utrecht, which makes it publicly run. We place by MYP year, and a Diploma student who has chosen Computer Science takes the IB course directly, using the live sessions for the internal assessment.' },
      { q: 'Which Utrecht schools do you know?', a: 'Amadeus Lyceum in Vleuten, Het Boni, Leidsche Rijn College, Academie Tien on the Berlijnplein, Gerrit Rietveld College, Descart, UniC, X11, the Christelijk Gymnasium Utrecht, the Utrechts Stedelijk Gymnasium and the International School, with their streams and 2025-26 intake from the schools register. The name sets the vocabulary; the free lesson sets the level.' },
      { q: 'Is the Utrecht Centraal passenger figure really missing the transfers?', a: 'The station\'s own information box gives 241,730 passengers a day for 2025 and marks the figure as excluding transfers. Utrecht Centraal is the country\'s main railway hub, with more than a thousand departures a day, so the excluded category is the one that defines the place. The page uses it as a second example of a count that leaves out the flow that matters, the same shape as the pupil figures.' },
      { q: 'Do you teach in English or Dutch?', a: 'In English. Nearly a quarter of Utrecht was born abroad and the university, the Science Park and the international school all work in English. Dutch school vocabulary is kept exactly as the school uses it. Dutch-medium teaching is not something we offer.' },
      { q: 'What time are classes for a family in Utrecht?', a: 'The teacher is in India, where the clock never changes, so a Utrecht afternoon is four and a half hours behind in winter and three and a half in summer. After-school, early-evening and weekend slots work at both ends. The recurring time is fixed during the free lesson, before any payment.' },
      { q: 'What happens in the free Utrecht lesson?', a: 'We find what the learner can do and set one task there. A child watches two toy classrooms swap children behind a closed door. A teenager writes in minus out in Python and prints the solution line. An adult brings a net figure from work. The lesson ends with a course, a level, a weekly slot and the price in dollars, and nothing has been paid.' },
      { q: 'Is there a Modern Age Coders classroom in Utrecht?', a: 'No, and none is claimed in Utrecht, on the Science Park or anywhere in the Netherlands. Lessons are live online and need a laptop or desktop, working audio, a current browser and a stable connection. The telephone number on this page is Indian and is described as such.', boiler: true },
      { q: 'What do Utrecht coding classes cost?', a: 'The first lesson is free. Group tuition is USD 100 a month for two live lessons a week, normally eight in the month, in a group of five to ten. Private tuition is USD 150 a month, one learner with one teacher at the same frequency. Course, format, recurring time and availability are confirmed before payment.', boiler: true },
      { q: 'How many learners are in a Utrecht group?', a: 'Between five and ten, matched on level, pace and goal rather than on age, school or wijk. Private tuition is one learner and one teacher. If no group at the right level is running, the family can take private tuition or wait for the next one to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Netherlands',
    h2: 'Down the line in every direction',
    html: 'Thirty minutes north-west is <a class="cg-inline-link" href="/coding-classes-in-amsterdam">Amsterdam</a>, with its eight district pages, and beyond it <a class="cg-inline-link" href="/coding-classes-in-amstelveen">Amstelveen</a>; forty minutes south is <a class="cg-inline-link" href="/coding-classes-in-eindhoven">Eindhoven</a>; west along the A12 is <a class="cg-inline-link" href="/coding-classes-in-the-hague">The Hague</a>; and across the Hollandse Brug, <a class="cg-inline-link" href="/coding-classes-in-almere">Almere</a>. All of them spoke from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and the learner who wants to train models rather than write programs should start at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a>. A page for the province of Utrecht, Amersfoort and the rest follows in this series.',
    waLabel: 'Close with WhatsApp'
  },

  footerHeading: 'The Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' },
    { href: '/coding-classes-in-amsterdam', label: 'Amsterdam' },
    { href: '/coding-classes-in-eindhoven', label: 'Eindhoven' }
  ],

  personalityCss: `
.cg-root.cg-utr .cg-hero-grid { grid-template-columns: 1fr 1fr; align-items: end; }
.cg-root.cg-utr .cg-capsule { border-left: 0; border-bottom: 3px solid var(--cg-accent); padding: 1.1rem 0 1.4rem; background: transparent; }
.cg-root.cg-utr .cg-eyebrow { font-style: italic; text-transform: none; letter-spacing: 0.01em; font-size: 0.9rem; }
.cg-root.cg-utr .cg-section-head h2 { max-width: 34ch; }
.cg-root.cg-utr .cg-picks { grid-template-columns: repeat(auto-fill, minmax(215px, 1fr)); gap: 1rem; }
.cg-root.cg-utr .cg-grid-3 { grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
.cg-root.cg-utr .cg-ladder-col { border-top: 6px solid var(--cg-accent-soft); }
.cg-root.cg-utr .cg-align-row { padding-block: 1rem; border-bottom: 1px dotted var(--cg-rule-2); }
.cg-root.cg-utr .cg-table caption { font-style: italic; text-transform: none; letter-spacing: 0; }
`,

  dossier: {
    curriculumAuthority: 'Utrecht: 31 secondary establishments in the municipality with 20,640 pupils (CBS 1 January 2026); 68 establishments and 62 schools serving 15,770 Utrecht-resident pupils (register 2025-26); 113 primary with 31,673. Named: International School Utrecht (Van Deventerlaan 1, Papendorp; PYP, MYP, DP; governed by NUOVO Scholen and SPO Utrecht; 457); Amadeus Lyceum (Burchtpoort 3, Vleuten; 1,630); Het Boni (Burg. Fockema Andreaelaan 7-9; havo/vwo; 1,625); Leidsche Rijn College (Maartvlinder 1; 1,328); Academie Tien (Berlijnplein 300; 1,150); Gerrit Rietveld College (Eykmanlaan 1200; 1,145); Descart (Grebbeberglaan 7; 1,175); UniC (910) and X11 (903) on the Van Bijnkershoeklaan; Christelijk Gymnasium Utrecht (869); Utrechts Stedelijk Gymnasium (747). Regio Midden holidays. The hub owns the national digital-literacy curriculum; this page owns Utrecht\'s two pupil counts and the station.',
    localProject: 'A net figure is one equation with two unknowns. CBS counts 20,640 pupils in the 31 secondary schools located in Utrecht; the register counts 15,770 Utrecht-resident secondary pupils across 62 schools; in minus out = 4,870 and nothing else is fixed. The learner tabulates the solution line (out 0 to 8,000 -> in 4,870 to 12,870; share schooled elsewhere 0 to 50.7 percent) and names the third measurement that would collapse it. Second instance on the same page: Utrecht Centraal\'s 241,730 daily passengers are stated as excluding transfers, at the national transfer hub. Distinct from the unit-of-analysis trap (Haima: one entity, two boundaries), from the stock/flow model (Amstelveen) and from the two-instruments trap (Amsterdam): the flaw here is reading a difference as if it were either of the two gross quantities. Computed before writing; the table is the solution set, not data.',
    requiredMentions: [
      '241,730',
      'Van Deventerlaan 1',
      'Amadeus Lyceum',
      'Het Boni',
      'Leidsche Rijn College',
      'Berlijnplein 300',
      '4 December 1997',
      '112.32',
      'Science Park in Oost',
      '1 January 2001',
      '20,640',
      '15,770',
      'NUOVO Scholen',
      'Utrechts Stedelijk Gymnasium'
    ],
    sources: [
      { claim: 'Utrecht 378,121 residents on 1 January 2026 (CBS provisional); 194,040 households; 57,789 under 15; 57,569 aged 15 to 25; 113 primary establishments (31,673 pupils); 31 secondary (20,640); 10 wijken, 111 buurten; origin 59% Dutch, 11% Europe, 30% outside Europe; Morocco 31,694, Turkey 14,466, Suriname 7,720 (2022); about 24% born abroad.', url: 'https://allecijfers.nl/gemeente/utrecht/' },
      { claim: 'Ten wijken on 1 January 2026: Leidsche Rijn 51,692; Vleuten-De Meern 51,181; Noordwest 45,442; Zuidwest 41,497; Noordoost 39,780; Overvecht 36,124; Oost 33,624; West 29,466; Zuid 28,766; Binnenstad 20,549 (sum 378,121).', url: 'https://allecijfers.nl/ranglijst/grootste-en-kleinste-wijken-in-inwoners-in-de-gemeente-utrecht/' },
      { claim: 'Secondary schools, 2025-26: 68 establishments serve Utrecht, 31 in the municipality, 62 different schools; 15,770 Utrecht-resident pupils. Amadeus Lyceum (Burchtpoort 3, Vleuten) 1,630; Het Boni (Burg Fockema Andreaelaan 7-9) 1,625; Leidsche Rijn College (Maartvlinder 1) 1,328; Descart (Grebbeberglaan 7) 1,175; Academie Tien (Berlijnplein 300) 1,150; Gerrit Rietveld College (Eykmanlaan 1200) 1,145; UniC (Van Bijnkershoeklaan 2) 910; X11 (Van Bijnkershoeklaan 8) 903; Christelijk Gymnasium Utrecht (Koningsbergerstraat 2) 869; Utrechts Stedelijk Gymnasium (Ina Boudier-Bakkerlaan 7) 747; International School Utrecht (Van Deventerlaan 1) 457.', url: 'https://allecijfers.nl/middelbare-scholen-overzicht/utrecht/' },
      { claim: 'International School Utrecht: Van Deventerlaan 1, 3528 AG Utrecht; PYP (ages 4 to 11), MYP (11 to 16), DP (16 to 18); governed by NUOVO Scholen and SPO Utrecht.', url: 'https://www.isutrecht.nl/' },
      { claim: 'Utrecht Centraal: 241,730 daily railway passengers excluding transfers (2025); 16 tracks, 12 through; more than 1,000 departures a day; Stationsplein bicycle parking 29,232 spaces, the largest in the world; first station opened 18 December 1843; current building 2011 to 2016 by Benthem Crouwel.', url: 'https://en.wikipedia.org/wiki/Utrecht_Centraal_station' },
      { claim: 'Leidsche Rijn: first pile 4 December 1997; 30,000 homes planned; about 90,000 inhabitants planned; about 45,000 residents by 2022; 1,126 hectares; Leidsche Rijn Centrum opened 16 May 2018; four tracks by October 2018; stations Utrecht Leidsche Rijn, Utrecht Terwijde and a relocated Vleuten.', url: 'https://nl.wikipedia.org/wiki/Leidsche_Rijn_(wijk)' },
      { claim: 'Vleuten-De Meern part of Utrecht since 1 January 2001; Leidsche Rijn the largest Vinex location in the Netherlands, planned for about 90,000 residents; Domtoren 112.32 m, the tallest church tower in the country; Utrecht University founded 1636 with more than 33,000 students; the ten wijken.', url: 'https://nl.wikipedia.org/wiki/Utrecht_(stad)' },
      { claim: 'Utrecht Science Park: about 300 hectares bought by the state in 1958; called De Uithof until renamed in 2018; tram line 22 (Uithoflijn) from Utrecht Centraal opened 14 December 2019 replacing bus 12; about 3,000 student rooms (Cambridgelaan 1,002, De Bisschoppen 552, Casa Confetti 377, Johanna 655, Campus USP 030 400); Utrecht University, HU and UMC Utrecht on site.', url: 'https://en.wikipedia.org/wiki/Utrecht_Science_Park' }
    ],
    rejectedClaims: [
      'Utrecht groep 8 advice shares and higher-test-advice rates. No municipal publication was found; national figures only, and the page does not use them.',
      'The Catharijnesingel restoration date (2020) and the Leidsche Rijntunnel opening date. Not in the sources read; omitted.',
      'Utrecht University\'s exact 2025 student count. Only "more than 33,000" was found at source.',
      'Founding year and pupil numbers of the International School Utrecht from its own site. Not on the page read; the register\'s 457 Utrecht-resident figure is used instead.',
      'An assignment of each named school to a wijk. Only Vleuten (Amadeus), Berlijnplein (Academie Tien, Leidsche Rijn Centrum), Papendorp (ISU) and the Science Park (Oost) are stated; the rest are given by address only.',
      'Anything the Netherlands hub owns: the nine SLO core objectives, the March 2024 finalisation as a spine, the groep 8 streaming advice as an argument, the CET/CEST offset paragraph.'
    ]
  }
};
