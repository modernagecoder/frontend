'use strict';
// AI and Python Academy, The Hague (ag- spoke of the Dutch academy hub).
// Spine: the childcare-benefits case, narrowed to its technical lesson. The
// State Secretary's letter of 17 July 2020 (Kamerstuk 31066, nr. 683) reports
// the data protection authority's finding that Toeslagen used nationality in
// a risk classification model, judged unlawful and discriminatory, and no
// longer used since October 2018. The inquiry report "Ongekend onrecht" was
// handed over in The Hague on 17 December 2020 and the cabinet resigned on
// 15 January 2021. The analytical point is modest: a column can stand for a
// group, and errors must be counted per group because an overall rate hides
// who bears the false alarms (invented worked example). Den Haag Centrum owns
// "a measurement is not a verdict"; that framing is not reused. The fine
// amount is left out: the authority's own pages returned 403.

module.exports = {
  cluster: 'ag',
  slug: 'ai-and-python-academy-the-hague',
  code: 'adh',
  accent: '#004458',
  accentRationale: 'The Hague academy: a deep teal from the solver, more than twenty-three units from every page it links to, the city, Centrum and Zuid-Holland pages and all four academy pages among them, with an unlinked Amsterdam district as its nearest neighbour',
  pageType: 'market',
  market: { name: 'Netherlands', iso: 'NL', dial: '+31', lang: 'en-NL', locale: 'en_NL', geoRegion: 'NL', brandTag: 'Netherlands', phonePlaceholder: '6 XXXX XXXX', minDigits: 9 },
  routeLabel: 'AI and Python Academy, The Hague',
  title: 'AI and Python Academy, The Hague | Build Real AI',
  description: 'The Hague is where the Netherlands learned what a biased risk model costs. Learn to build AI and test for fairness, live online for ages 6 to 67. First lesson free.',
  ogDescription: 'A risk model that gave some applicants a greater chance of being checked because of their nationality, a parliamentary report called Ongekend onrecht, and the test that would have shown it. Live online from The Hague.',
  twitterDescription: 'Build AI and check it group by group. Live online Python, data and models for The Hague, ages 6 to 67.',
  pageName: 'AI and Python Academy for Students in The Hague',
  webPageDescription: 'Live online Python, data, machine learning and AI agent classes for learners in The Hague aged 6 to 67, with fairness testing taught as part of every model.',
  courseDescription: 'A live online programme for learners in The Hague aged 6 to 67: Python by hand, data, models with measured errors and agents, with every model checked group by group before anyone relies on it.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'AI and Python Academy, Netherlands', href: '/ai-and-python-academy-netherlands' }],
  crumbLabel: 'The Hague',
  navLinks: [
    { href: '#case', label: 'The case' },
    { href: '#test', label: 'The test' },
    { href: '#ladder', label: 'The ladder' },
    { href: '#catalogue', label: 'Courses' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'The Hague &middot; Live online &middot; Ages 6 to 67',
  h1: 'AI and Python classes in The Hague, with fairness tested',
  lede: 'On 17 December 2020, in The Hague, a parliamentary committee handed over a report called Ongekend onrecht, unprecedented injustice, about how the childcare allowance had been run. Four weeks later the whole cabinet offered its resignation. The failures it describes run through laws, courts and a whole administration, far beyond any single program. But one strand is squarely a programmer\'s concern. The tax authority\'s benefits department had used applicants\' nationality in a risk classification model, and the data protection authority judged that unlawful and discriminatory. Every student who builds a model that sorts people should know this case, and should know the simple check that brings such a problem into view: counting the model\'s mistakes separately for each group. This page teaches AI and Python from a child\'s first program upward, with that check built into every model, live online for learners in The Hague.',
  secondaryCta: { href: '#test', label: 'See the check' },
  wa: 'Hello Modern Age Coders, I want a free class for a learner in The Hague, on the AI and Python track.',
  heroNote: 'Teaching live since 2020 &middot; more than 10,000 students &middot; no recorded courses',
  spec: [
    ['For', 'Learners in The Hague, 6 to 67'],
    ['Track', 'Python, data, models, agents'],
    ['Built in', 'Error rates checked group by group'],
    ['Format', 'Live video with a teacher'],
    ['Groups', '5 to 10, or one to one'],
    ['Hours', 'Dutch afternoons, evenings, weekends'],
    ['Taught in', 'English'],
    ['To begin', 'A free lesson, no card']
  ],
  capsuleQ: 'In short',
  capsule: 'Modern Age Coders teaches learners in The Hague, aged six to sixty-seven, a live online AI and Python track: typed Python, real data, models whose errors are measured, and agents whose decisions can be traced. Every model on the track is checked group by group, because an overall error rate can look acceptable while one group carries most of the false alarms. The reason is local and documented: the risk model in the childcare-benefits case, which the data protection authority found had used nationality unlawfully. Teaching happens in English, either in a small group of five to ten at one level or with a teacher of your own. There is no charge for the first lesson; afterwards the group rate is USD 100 a month and private tuition USD 150.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three courses for learners in The Hague',
    lede: 'One for a child learning what AI is and is not, one for a teenager ready to work with real data, one for the adult whose work involves data about people. Each opens its own syllabus and timetable.',
    items: [
      { course: 'ai-literacy-for-kids-course', code: 'DHG / 01', title: 'AI Literacy for Kids', note: 'What an AI system does with the examples it learns from, and why a program can be unfair without anyone intending it: explained with games and examples a ten-year-old can check.' },
      { course: 'data-science-course-for-teens-python-data', code: 'DHG / 02', title: 'Data Science for Teens', note: 'Python for real datasets, with the habit of splitting every result by group before trusting it, the check at the centre of this page.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', code: 'DHG / 03', title: 'Data and AI Analytics for Non-Programmers', note: 'For the professional in a ministry, agency or organisation whose spreadsheets and AI tools make decisions about people: how to break results down and ask who is affected.' }
    ]
  },

  sections: [
    {
      id: 'case', tint: 'tint', eyebrow: 'The case',
      h2: 'The risk model the whole country now studies',
      lede: 'This section quotes three primary documents: the government\'s letter reporting the data protection authority\'s findings, the parliamentary committee\'s own announcement, and the prime minister\'s statement. It does not try to retell the whole affair, which is far larger than any model.',
      body: [
        { kind: 'two',
          left: [
            'On <strong>17 July 2020</strong> the State Secretary for Finance, A.C. <strong>Van Huffelen</strong>, sent parliament the government\'s response to a report by the Autoriteit Persoonsgegevens on how the benefits department, <strong>Toeslagen</strong>, had processed the nationality of childcare-allowance applicants. The letter, <strong>Kamerstuk 31066</strong>, nr. 683, sets out three ways nationality was processed. All three were judged <strong>onrechtmatig</strong>, unlawful, and two of them <strong>discriminerend</strong>, discriminatory.',
            'One of the three was a <strong>risk classification model</strong> that selected applications for checking. The letter is plain about its effect: an application from non-Dutch nationals, in combination with other indicators, therefore had a greater chance of being selected for a check. Since <strong>October 2018</strong>, it adds, nationality has no longer been used in the model, and in June 2019 the department decided to stop running queries based on nationality.'
          ],
          right: [
            'On <strong>17 December 2020</strong> the parliamentary committee on the childcare allowance, chaired by <strong>Chris van Dam</strong>, handed its final report to the Speaker of the House, <strong>Khadija Arib</strong>. It found that fundamental principles of the rule of law had been violated in the approach to fraud; that the ministry had run the allowance as a mass process; that parliament and cabinet had passed legislation that was rock-hard; and that the administrative courts had for years helped keep it going. A mistake in an application, it wrote, was quickly seen as fraud, so that parents were wrongly branded.',
            'On <strong>15 January 2021</strong> the prime minister told the King that he had offered the resignation of the whole cabinet. If the whole system has failed, he said, responsibility can only be carried together, and he spoke of thousands of parents to whom great injustice had been done.'
          ] },
        { kind: 'table', mt: true, caption: 'Four dates, from the documents themselves', head: ['Date', 'Document', 'What it records'], rows: [
          ['17 July 2020', 'Letter of the State Secretary for Finance (Kamerstuk 31066, nr. 683)', 'Three processings of nationality judged unlawful, two discriminatory; nationality out of the risk model since October 2018'],
          ['June 2019', 'Same letter', 'Toeslagen decided to stop queries based on nationality'],
          ['17 December 2020', 'Tweede Kamer announcement of the final report', 'Ongekend onrecht handed over; principles of the rule of law violated'],
          ['15 January 2021', 'Statement of the prime minister', 'Resignation of the whole cabinet offered to the King']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://zoek.officielebekendmakingen.nl/kst-31066-683.html" rel="noopener" target="_blank">Kamerstuk 31066, nr. 683, letter of 17 July 2020</a>; <a class="ag-inline-link" href="https://www.tweedekamer.nl/nieuws/kamernieuws/eindverslag-onderzoek-kinderopvangtoeslag-overhandigd" rel="noopener" target="_blank">Tweede Kamer, Eindverslag onderzoek kinderopvangtoeslag overhandigd</a>; <a class="ag-inline-link" href="https://www.rijksoverheid.nl/documenten/videos/2021/01/15/verklaring-minister-president-rutte-na-afloop-van-ministerraad-15-januari-2021" rel="noopener" target="_blank">Rijksoverheid, statement of the prime minister, 15 January 2021</a>. All read 15 September 2026; the documents are in Dutch and are translated here as closely as possible. We have no connection with any of the bodies named.' }
      ]
    },
    {
      id: 'test', tint: 'deep', eyebrow: 'The test',
      h2: 'The check that brings it into view: mistakes counted group by group',
      lede: 'No single test makes a model fair, and the documents above describe failures no test could have caught. But one habit catches the specific problem of a model that treats groups differently, and it is simple enough to teach a teenager.',
      body: [
        { kind: 'three', cells: [
          { h3: 'A column can stand for a group', p: 'Nationality in a risk model is the obvious case, because the column names the group outright. The harder lesson is that removing such a column does not remove what the rest of the data reveals. Other columns can carry much of the same information, so a model can go on sorting people by group after the group itself has been deleted. The only way to know is to measure.' },
          { h3: 'Count mistakes per group', p: 'A model that flags applications for checking makes two kinds of mistake: it flags people who did nothing wrong, and it misses some who did. The first kind, false alarms, is the one that falls on innocent people. Counted over everyone, the false-alarm rate can look small. Counted separately for each group, it can show that one group carries several times its share.' },
          { h3: 'Decide what a flag leads to', p: 'A flag is the start of a process, and the harm depends on what follows it: a friendly question, or a demand to repay. The committee\'s phrase, that a mistake was quickly seen as fraud, describes what happens when that next step is built without room for error. Designing it is part of building the model.' }
        ] },
        { kind: 'table', mt: true, caption: 'An invented example: 1,000 applications, a model that flags 70 of them, and the false alarms split by group', head: ['Group', 'Applications', 'Of which correct', 'Correct but flagged', 'False-alarm rate'], rows: [
          ['Group A', '800', '780', '25', '3.2 percent'],
          ['Group B', '200', '195', '26', '13.3 percent'],
          ['Everyone', '1,000', '975', '51', '5.2 percent']
        ] },
        { kind: 'two', mt: true,
          left: [
            'Read the last row alone and the model looks tolerable: about one correct application in twenty is wrongly flagged. Split the same row by group and the picture changes. A correct applicant in group B is wrongly flagged about four times as often as one in group A, 13.3 percent against 3.2, and nothing in the overall figure hints at it.',
            'The numbers are invented for teaching, and they describe no real system. The arithmetic is the point: 25 of 780, 26 of 195, and 51 of 975.'
          ],
          right: [
            'The check takes a few lines of Python once the groups are known, and learners on our track write it for every model that sorts people: selection rates and false-alarm rates for each group, side by side, before anyone relies on the model.',
            'What the check cannot do is decide what is acceptable, or whether a model should be used at all. Those are human decisions, and in the case above they were made, and then examined, by parliament, the courts and the government.'
          ] },
        { kind: 'source', html: 'The worked example is invented and represents no real model or dataset. The lessons drawn are ours, not those of any body named in the section above.' }
      ]
    },
    {
      id: 'learn', tint: '', eyebrow: 'At every age',
      h2: 'Fairness as a habit, from the first program to the working model',
      lede: 'The group-by-group check sounds advanced, but its simplest form fits a child\'s first program, and its full form fits a professional\'s daily work in a city of ministries and international organisations.',
      body: [
        { kind: 'two',
          left: [
            'A child who writes a quiz program can already ask whether it is fair: does it give everyone the same questions, and does it mark every answer the same way? That question, asked early and often, is the root of everything this page describes.',
            'A teenager who trains a first model on real data learns to split the results: how well does it do for this group, and for that one? The split takes minutes and changes how the teenager reads every accuracy figure afterwards.'
          ],
          right: [
            'Adults in The Hague often work where data about people is processed every day, in ministries, agencies, international organisations and firms that serve them. For them the check is practical: before a spreadsheet rule or an AI tool is used to sort people, look at who it flags and how often it is wrong for each group.',
            'For the city\'s schools and districts, see <a class="ag-inline-link" href="/coding-classes-in-the-hague">coding classes in The Hague</a> and <a class="ag-inline-link" href="/coding-classes-in-the-hague-centrum">Den Haag Centrum</a>; for the province, <a class="ag-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>. The <a class="ag-inline-link" href="/ai-and-python-academy-netherlands">national academy page</a> covers the country.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The five rungs',
    h2: 'From a fair quiz to a model checked group by group',
    lede: 'The rungs are climbed in order. Data comes before models because unfairness usually starts in the data, and measurement comes before agents because an agent that acts on people must first be shown to treat them evenly.',
    table: { caption: 'The five rungs for a learner in The Hague, with the fairness question asked at each', head: ['Rung', 'Usually', 'The fairness question learned'], rows: [
      ['1. Python by hand', 'Groep 6 to 8, or any adult beginner', 'Does my program treat every input by the same rule?'],
      ['2. Data', 'Brugklas to the third year', 'Who is in this data, who is missing, and what does each column reveal?'],
      ['3. Models', 'Havo 4 to vwo 6, students, adults', 'How often is the model wrong for each group, not just overall?'],
      ['4. Agents', 'Upper school and beyond', 'Which decisions about people may the program not take alone?'],
      ['5. Publishing', 'At every stage', 'Are the group results written down where others can check them?']
    ] },
    left: { h3: 'Why the data rung matters most here', ps: [
      'Most unfair models are built from data that was already uneven: some groups checked more often in the past, some recorded differently, some barely present. A learner who has studied a dataset before modelling it sees those patterns before the model copies them.',
      'Our general order of teaching, subject by subject, is on the <a class="ag-inline-link" href="/coding-roadmap">coding roadmap</a>.'
    ] },
    right: { h3: 'How the rungs meet a Hague school career', ps: [
      'Groep 6 to 8 is the natural moment for rung 1, with a pause in the weeks of the doorstroomtoets, and the year a pupil chooses a profile is a sensible time to sample rung 2. Pupils at the city\'s international schools join the same rungs at the same ages.',
      'Adults usually start at rung 2, with their own work data in mind, often one to one.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Eleven live courses for The Hague, placed by what a learner can do',
    lede: 'Arranged by stage of life, from primary school to working adult. Every course has its own page with timetable and fee, and where a learner begins is settled in the free lesson, not by this list.',
    bands: [
      { num: 'I', h3: 'Children, groep 3 to 8', sub: 'First programs, and first questions about fairness', courses: [
        { code: 'DHG / KIDS / 01', slug: 'ai-literacy-for-kids-course', title: 'AI Literacy for Kids', blurb: 'Where an AI system gets its ideas, how it can end up unfair with nobody meaning it, and the questions a child should put to any answer that sounds certain.' },
        { code: 'DHG / KIDS / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for Kids', blurb: 'Real Python for nine- to twelve-year-olds, from turtle pictures and simple games to a program that learns a rule and is then tried on cases it has never seen.' },
        { code: 'DHG / KIDS / 03', slug: 'scratch-programming-complete-course', title: 'Scratch Coding for Kids', blurb: 'Block-based games for the youngest learners, including quizzes that must mark every player the same way.' }
      ] },
      { num: 'II', h3: 'Teenagers, havo, vwo and international schools', sub: 'Real data, real models, and results split by group', courses: [
        { code: 'DHG / TEEN / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data Science for Teens', blurb: 'Reading, cleaning and plotting real data, and breaking every result down by group before drawing a conclusion.' },
        { code: 'DHG / TEEN / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and Machine Learning for Teens', blurb: 'Statistics, classical models and neural networks, each model tested for how its errors fall across groups.' },
        { code: 'DHG / TEEN / 03', slug: 'python-complete-masterclass-teens', title: 'Python for Teens', blurb: 'The two-year Python foundation, for the teenager who wants to understand the code behind the headlines.' },
        { code: 'DHG / TEEN / 04', slug: 'teens-ai-tools-mastery-course', title: 'AI Tools for Teens', blurb: 'Using AI tools for study and projects, with attention to privacy, bias and when not to trust the output.' }
      ] },
      { num: 'III', h3: 'Students and working adults', sub: 'Data, models and AI tools that affect real people', courses: [
        { code: 'DHG / PRO / 01', slug: 'data-and-ai-analytics-for-non-programmers-course', title: 'Data and AI Analytics for Non-Programmers', blurb: 'For professionals without a programming background: spreadsheet models, dashboards and AI assistants, each result split by the groups of people it touches.' },
        { code: 'DHG / PRO / 02', slug: 'data-analysis-mastery-course-college', title: 'Data Analysis Course', blurb: 'Excel, SQL, Python and business intelligence, for analysts whose reports shape decisions about people and budgets.' },
        { code: 'DHG / PRO / 03', slug: 'ai-ml-masterclass-complete-college', title: 'AI and Machine Learning Masterclass', blurb: 'The full machine learning route for adults, with evaluation by group treated as part of every model, not an extra.' },
        { code: 'DHG / PRO / 04', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI: LLMs, RAG and Agents', blurb: 'The workings of large language models, and how to build assistants on them that know their limits, including the decisions about people that must stay with a person.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How the classes run',
    h2: 'Two clocks and a weekly slot',
    lede: 'Dutch clocks change twice a year and Indian clocks never do. In winter the teacher\'s day runs four and a half hours ahead of The Hague, in summer three and a half. That makes late afternoons and weekends the easy slots, weekday evenings a matter of arrangement, and the fixed weekly time something agreed at the free lesson, never promised here.',
    slots: [
      { time: 'Straight after school', l: 'Late afternoon in The Hague, early evening or later for the teacher. The usual choice for primary pupils and the brugklas.' },
      { time: 'After dinner', l: 'Arranged teacher by teacher. It suits upper-school pupils, students and anyone coming home from a ministry or an office.' },
      { time: 'Saturday or Sunday', l: 'Mornings or afternoons in The Hague. The slot most working adults and busy households end up choosing.' }
    ],
    cells: [
      { h3: 'The opening session', p: 'A real task, a teacher watching how the learner approaches it, and at the end a clear view of where to start. No questionnaire does that as well.' },
      { h3: 'Groups of five to ten', p: 'Classmates come from several countries and share one level, so nobody in The Hague is held back by a local average or left behind by it.' },
      { h3: 'Private lessons', p: 'For diplomats, civil servants and others whose diaries move, for a narrowly defined goal, and for the Copilot Studio courses, which are never taught in groups.' },
      { h3: 'Code seen as it is typed', p: 'Teacher and learner share screens, so a misunderstanding is corrected in the minute it appears.' },
      { h3: 'English, with Dutch kept for school', p: 'Teaching is in English; groep, brugklas, havo and vwo stay in Dutch because that is how parents in the city speak of them.' },
      { h3: 'A record of every model', p: 'Code is committed to the learner\'s own GitHub repository after each lesson, and each model sits next to its group-by-group results.' }
    ]
  },

  projectsH2: 'Projects our students left online',
  projectsLede: 'Four things students built and published at public addresses. Try them, test them, find their limits; the <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Shown as their authors posted them on Google. We do not write, edit or pay for any review.',

  fees: {
    h2: 'Fees, in two figures',
    lede: 'Monthly, in US dollars, at the rates charged in every country outside India. The Hague pays what every other city pays, with no enrolment fee and no contract for the year. The Copilot Studio courses are taught privately and so carry the private rate.',
    free: ['A real lesson on a real problem', 'Places the learner on the right rung', 'No card or bank details'],
    group: ['Five to ten learners at one level', 'One live teacher throughout', 'Work reviewed each week', 'Certificate at the end'],
    one: ['One learner, one teacher', 'Pace and focus fitted to the goal', 'The only format for Copilot Studio']
  },

  faq: {
    eyebrow: 'Questions from The Hague',
    h2: 'What families and professionals in The Hague ask first',
    items: [
      { q: 'Why does this page talk about the childcare-benefits case?', a: 'Because it is the best-documented Dutch example of a risk model treating groups differently. The government\'s own letter of 17 July 2020 reports that nationality was used in a risk classification model, and that this was judged unlawful and discriminatory. We use it to teach one narrow, practical lesson: count a model\'s mistakes separately for each group.' },
      { q: 'Does the page claim a model caused the whole affair?', a: 'No. The parliamentary report Ongekend onrecht describes failures across the administration, the law and the courts. The risk model is one strand, and the only one this page teaches from.' },
      { q: 'What is a false-alarm rate?', a: 'The share of correct cases that a model wrongly flags. If 26 of 195 correct applications in a group are flagged, that group\'s false-alarm rate is 13.3 percent. Comparing that rate across groups is the check this page teaches.' },
      { q: 'Is my child too young for this?', a: 'Not for the simple version. A child who writes a quiz can ask whether it marks every player the same way. The group-by-group check on real data usually comes around havo 4 to vwo 6.' },
      { q: 'We are at an international school. Does that change anything?', a: 'No. The ladder follows what a learner can do, not a national curriculum, and all lessons are in English.' },
      { q: 'I work with data about people. Where should I start?', a: 'Usually with data analytics or data analysis, depending on whether you code, and often one to one. Breaking results down by group is part of both.' },
      { q: 'Are you connected with any government body?', a: 'No. We quote public documents from parliament and the government. We have no relationship with any ministry, authority, committee or school in The Hague.' },
      { q: 'What does it cost?', a: 'A place in a group is USD 100 a month; private lessons are USD 150 a month. Both are billed in dollars, neither has a joining fee or a yearly commitment, and the first lesson is free.' },
      { q: 'Where are the teachers?', a: 'They teach live from India, which is ahead of The Hague by three and a half hours in the Dutch summer and four and a half in the winter; late afternoons and weekends therefore suit best.' },
      { q: 'What happens after I send the form?', a: 'We call you back at a Dutch hour to fix the free lesson. No payment is taken and no seat is reserved before the family has watched that lesson and made up its mind.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Where else to read, for The Hague and beyond',
    lede: 'The AI track is one part of what we publish for the city. The rest is here.',
    items: [
      { href: '/coding-classes-in-the-hague', label: 'Coding classes in The Hague', p: 'General coding for the city, stadsdeel by stadsdeel, with the local schools.' },
      { href: '/coding-classes-in-zuid-holland', label: 'Coding classes in Zuid-Holland', p: 'The province around the city, municipality by municipality.' },
      { href: '/ai-and-python-academy-netherlands', label: 'AI and Python Academy, Netherlands', p: 'The academy for the whole country: informatica in Dutch schools and the national AI build-out.' },
      { href: '/ai-and-python-academy-amsterdam', label: 'AI and Python Academy, Amsterdam', p: 'Seventy-three city algorithms, read entry by entry.' },
      { href: '/ai-and-python-academy-eindhoven', label: 'AI and Python Academy, Eindhoven', p: 'Soccer robots, drones and the gap between simulation and reality.' },
      { href: '/ai-and-python-academy-groningen', label: 'AI and Python Academy, Groningen', p: 'What the first year of a university AI degree asks of a pupil.' }
    ]
  },

  start: {
    h2: 'Arrange a free lesson',
    lede: 'Give us a phone number and someone from our team calls back at a Dutch hour. That first session is taught properly, and it ends with the one decision that matters most here: the rung the learner starts on.',
    readFirst: 'Would you rather read first? Start with the <a class="ag-inline-link" href="/courses">course list</a>, then <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, then the reasoning behind these pages at <a class="ag-inline-link" href="/learn-to-build-ai">Learn to Build AI</a>.',
    note: 'A WhatsApp message costs nothing from a Dutch phone and gets the fastest reply. The number is an Indian one, and we hold no office, address or premises in The Hague or elsewhere in the Netherlands.',
    formNote: 'No card and no commitment. One call to arrange the lesson.'
  },

  footer: {
    cols: [
      { h4: 'The Hague', links: [
        { href: '/coding-classes-in-the-hague', label: 'Coding classes in The Hague' },
        { href: '/coding-classes-in-zuid-holland', label: 'Zuid-Holland' },
        { href: '/ai-and-python-academy-netherlands', label: 'Academy, Netherlands' },
        { href: '/coding-classes-in-netherlands', label: 'Coding in the Netherlands' }
      ] },
      { h4: 'The track', links: [
        { href: '/coding-roadmap', label: 'The coding roadmap' },
        { href: '/learn-to-build-ai', label: 'Learn to Build AI' },
        { href: '/student-labs', label: 'Student labs' },
        { href: '/how-we-teach', label: 'How we teach' }
      ] }
    ],
    bottomRight: 'Teaching The Hague on CET and CEST'
  },

  personalityCss: `
.ag-root.ag-adh .ag-hero-grid { gap: clamp(1.3rem, 3.4vw, 3rem); }
.ag-root.ag-adh .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-adh .ag-capsule { border-left-width: 6px; }
.ag-root.ag-adh .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-adh .ag-band-head h3 { letter-spacing: -0.008em; }
.ag-root.ag-adh .ag-table caption { text-align: left; }
.ag-root.ag-adh .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-adh .ag-slots { gap: 1.2rem; }
`,

  mustMention: ['Ongekend onrecht', 'Chris van Dam', 'Khadija Arib', '17 December 2020', 'Kamerstuk 31066', 'Van Huffelen', 'October 2018', 'onrechtmatig', 'discriminerend', '15 January 2021', 'Toeslagen', '13.3 percent']
};
