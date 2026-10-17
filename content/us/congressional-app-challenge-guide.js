'use strict';
// Congressional App Challenge guide (ag- competition door; US cluster Phase 1 pilot, row 2).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Sources, read raw on 17 October 2026 (copies in
// keyword-research-2026-09/us/src-pilots/cac/):
//  - 2026 CAC Rules (congressionalappchallenge.us/wp-content/uploads/2026/05/2026-CAC-Rules.pdf): "Students must be
//    enrolled in middle school or high school on October 26th, 2026."; middle school "typically encompasses 6th-8th
//    grades"; district of residence or school, "only allowed to submit an app in one district"; "teams of up to four
//    (4) students", "At least half of teammates on any team must live or attend school in the same Congressional
//    District"; "Students may submit any app they've created after October 30th, 2025."; "Students may only submit
//    ONE app per year."; registration needs a personal email (not school), home and school address with "9-digit zip
//    code", parent or guardian name and email; any topic, platform and language incl. "block-based coding languages";
//    AI "permitted, provided that all AI usage is fully disclosed in the submission materials" and "must not
//    constitute the entirety of the technical development"; "DEMONSTRATION VIDEO (max 3 min)", "The video should be
//    1-3 minutes long.", "This is not a video-creation competition.", YouTube or Vimeo set to "public"; six written
//    questions; deadline "12:00 pm EDT, Monday, October 26th, 2026"; judged by "the Member of Congress and their
//    office"; criteria quality of the idea, implementation, "Demonstrated excellence of coding and programming
//    skills"; judges may request source code; results embargo "January 15, 2027"; winners featured on "the House.gov
//    website and the CongressionalAppChallenge.us website"; ARTS Act copyright fee waiver; "Contestants will own the
//    intellectual property rights to their Submission"; administered by "The Internet Education Foundation".
//  - /students/rules/: 2026 important dates (Jan 1 pre-registration opens, May launch, October 26 deadline, November
//    judging, December winners announced); "STUDENTS CAN USE ANY PROGRAMMING LANGUAGE"; "All competing students must be
//    U.S. residents at the time of submission. There is no citizen requirement for students."
//  - /about/: House Resolution 77 (2013) passed "with 411 votes to 3".
//  - /impact/: 2025 "13,830 Participants", "4,850 applications", "394 Congressional Districts participate", "85,000
//    Students have participated since 2015".
// Our own material, labelled on the page: the 10-week build plan, the scoping example (a school book-swap app) and its
// effort scores, and the arithmetic 4,850 / 394 = about 12.3 applications per participating district (both figures
// are the organiser's 2025 numbers; the division is ours and assumes every application came from those districts).
// Lesson family: scoping and prioritisation (must, should, later).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, stripTrunk: true };

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COMPETITION', blurb: 'The Congressional App Challenge explained from the official 2026 rules: who can enter, what to submit, how judging works, and a ten-week build plan.' },
  slug: 'congressional-app-challenge-guide',
  code: 'cac',
  accent: '#252A6B',
  accentRationale: 'Congressional App Challenge guide: a muted capitol navy chosen with the accent picker (hue 235, s .65, v .42), 89+ RGB units from the other US accents and 9 from every other site colour, contrast 10.51',
  pageType: 'market',
  market: US,
  routeLabel: 'Congressional App Challenge guide',
  title: 'Congressional App Challenge Guide: Rules, Video, Judging',
  description: 'The Congressional App Challenge from the official 2026 rules: eligibility, teams, the AI rule, the 1 to 3 minute demo video, judging and a ten-week build plan.',
  ogDescription: 'Middle and high school students, teams of up to four, any language, one app a year. The official 2026 rules explained, plus a ten-week plan from idea to demo video.',
  twitterDescription: 'The Congressional App Challenge explained from the 2026 rules, with a ten-week plan.',
  pageName: 'Congressional App Challenge Guide',
  webPageDescription: 'A guide for US middle and high school students and parents to the Congressional App Challenge, built from the official 2026 rules, with a build plan and a scoping example.',
  courseDescription: 'Live online app development and coding classes for US middle and high school students preparing a Congressional App Challenge entry, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Congressional App Challenge',
  navLinks: [
    { href: '#rules', label: 'Who can enter' },
    { href: '#dates', label: '2026 dates' },
    { href: '#submit', label: 'What to submit' },
    { href: '#judging', label: 'Judging' },
    { href: '#plan', label: 'Ten-week plan' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 6 to 12 &middot; One app per student per year',
  h1: 'Congressional App Challenge guide',
  lede: 'The Congressional App Challenge is the competition where a student&rsquo;s app is judged by the office of their own Member of Congress. It is open to middle and high school students, it accepts any programming language and any topic, and a winning app is featured on the House.gov website. This guide is built from the official 2026 rulebook, read in full: who can enter, what a submission needs, what the judges look at, how the rules treat AI tools, and a ten-week plan our teachers use to take a student from a blank page to a working app and a clear demo video.',
  secondaryCta: { href: '#plan', label: 'See the ten-week plan' },
  wa: 'Hello Modern Age Coders, my child in the US wants to enter the Congressional App Challenge. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; app projects planned week by week',
  spec: [
    ['Who', 'Middle and high school students'],
    ['Where', 'A participating district'],
    ['Teams', 'Solo, or up to four'],
    ['Language', 'Any, including block code'],
    ['AI tools', 'Allowed, if disclosed'],
    ['Video', 'One to three minutes'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'The Congressional App Challenge is a coding competition for US middle and high school students, run district by district and judged by each Member of Congress&rsquo;s office. Students enter alone or in teams of up to four, build an app in any language on any topic, and submit a 1 to 3 minute demo video plus written answers. For the 2026 cycle the deadline was 12:00 pm EDT on October 26, 2026.',

  picks: {
    eyebrow: 'Build the app with a teacher',
    h2: 'Three courses for a Congressional App Challenge entry',
    lede: 'Each one ends with a working app the student can explain line by line, which is what the judges ask about.',
    items: [
      { course: 'complete-app-development-masterclass-for-teens', code: 'CAC / 01', title: 'App development for teens', note: 'Ages 13 to 18. Real mobile apps in React Native.' },
      { course: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', code: 'CAC / 02', title: 'Hackathon and competition prep', note: 'Ages 13 to 18. Scoping, building and pitching on a deadline.' },
      { course: 'full-stack-web-development-teens-masterclass', code: 'CAC / 03', title: 'Full stack web for teens', note: 'Ages 13 to 18. A web app with a real database behind it.' }
    ]
  },

  sections: [
    {
      id: 'rules', tint: 'tint', eyebrow: 'Who can enter',
      h2: 'The 2026 eligibility rules, line by line',
      lede: 'These are the rules as the official 2026 rulebook states them. Each later cycle publishes its own rulebook, so check the current one on the official site before you register.',
      body: [
        { kind: 'table', caption: 'Congressional App Challenge eligibility, from the official 2026 rules (read 17 October 2026)', head: ['Rule', 'What the 2026 rules say'], rows: [
          ['Age', '"Students must be enrolled in middle school or high school on October 26th, 2026." Middle school "typically encompasses 6th-8th grades".'],
          ['Residency', '"All competing students must be U.S. residents at the time of submission. There is no citizen requirement for students."'],
          ['District', 'Compete in the district where you live or where you attend school; a district must be hosting a Challenge, and you may submit in only one district.'],
          ['Teams', 'Individuals, or "teams of up to four (4) students"; at least half of a team must live or attend school in the same Congressional District.'],
          ['Prior work', '"Students may submit any app they\'ve created after October 30th, 2025." A 2.0 version highlights only the new code.'],
          ['Entries', '"Students may only submit ONE app per year." No entries across several teams.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What is open',
          left: [
            'Almost everything technical. The rules allow any topic, and any platform including web apps, desktop apps, mobile apps, browser extensions, robots, augmented and virtual reality, wearables and embedded systems.',
            'Any language is allowed too, from C, C++, Java, JavaScript, Python and Swift to block-based coding. A sixth grader&rsquo;s Scratch project and a senior&rsquo;s React app compete under the same rules.'
          ],
          rightH3: 'What trips families up',
          right: [
            'Registration asks for a personal email address that is not a school account, a parent or guardian&rsquo;s name and email, and both home and school addresses with the full 9-digit zip code and Congressional District.',
            'Finding the district matters, because a student can compete in only one. Look up both addresses early, and check that your district appears on the official list of participating districts.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.congressionalappchallenge.us/students/rules/" rel="noopener" target="_blank">Congressional App Challenge rules page</a> and the linked 2026 rulebook PDF, read 17 October 2026. We are not connected with the Congressional App Challenge or the Internet Education Foundation, which administers it.' }
      ]
    },
    {
      id: 'dates', tint: 'deep', eyebrow: 'The calendar',
      h2: 'How a Challenge year runs: the 2026 cycle as published',
      lede: 'The organisers publish dates for each cycle. This was the 2026 calendar, which shows the shape every year follows: registration in winter, building through spring and summer, submission in the fall.',
      body: [
        { kind: 'table', caption: 'The 2026 Congressional App Challenge calendar, from the official rules page and rulebook', head: ['When (2026 cycle)', 'What happens'], rows: [
          ['January 1, 2026', 'Student pre-registration opens'],
          ['May 2026', 'The Challenge officially launches'],
          ['12:00 pm EDT, Monday, October 26, 2026', 'Deadline to register and submit the app online'],
          ['November 2026', 'Judging by each Member of Congress&rsquo;s office'],
          ['December 2026', 'Winners announced by each hosting Member'],
          ['January 15, 2027', 'Embargo date before which the organisers cannot disclose 2026 results']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the calendar means for planning',
          left: [
            'From a May launch to a late October deadline is roughly five months, which is plenty for a student who starts in spring and very tight for one who starts in October.',
            'The best entries we see begin as an idea in the summer, become a working first version by September, and spend the last weeks on testing and the video.'
          ],
          rightH3: 'If you are reading between cycles',
          right: [
            'Once a deadline passes, the next cycle&rsquo;s rulebook and dates appear on the official site. Use the months in between to learn the tools and build a small practice app.',
            'Remember the prior-work rule: for 2026, apps created after October 30, 2025 were eligible, so work started in the off season can count if the next rulebook keeps a similar rule.'
          ] }
      ]
    },
    {
      id: 'submit', tint: 'tint', eyebrow: 'What to submit',
      h2: 'The demo video and six questions the judges read',
      lede: 'The rulebook calls the demonstration video the most critical part of the application. It is also where many good apps lose marks, because the video does not explain what the app does.',
      body: [
        { kind: 'table', caption: 'What the 2026 demonstration video must include, from the official rulebook', head: ['Item', 'Rule'], rows: [
          ['Length', '"The video should be 1-3 minutes long." Videos outside the limit may be penalized.'],
          ['Names', 'The name of each participant and the name of the app'],
          ['Purpose', 'The purpose of the app, explained in one clear sentence'],
          ['Audience', 'Who the app is intended for'],
          ['Tools', 'The tools and coding languages used'],
          ['Function', 'A showcase of the app working'],
          ['Hosting', 'Uploaded to YouTube or Vimeo and set to "public"']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>What is the title of your app?</b>',
          '<b>Explain the app&rsquo;s purpose.</b>',
          '<b>What inspired you to create this app?</b>',
          '<b>What technical or coding difficulty did you face, and how did you address it?</b>',
          '<b>What did you learn while participating? What was your biggest takeaway?</b>',
          '<b>What would you change if you were to create a 2.0 version?</b>'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Writing the one-sentence purpose',
          left: [
            'The rules ask for the purpose in one clear sentence, and that sentence does more work than any other line in the application. A useful pattern is: who it helps, what problem it solves, and how.',
            'Compare "An app for school" with "A book-swap app that lets students at our middle school list, find and borrow books from each other in under a minute." The second tells a judge exactly what to look for in the demo.'
          ],
          rightH3: 'The technical difficulty answer',
          right: [
            'Question four is where a student shows they built the app themselves. Name one real bug, say what caused it, and say how it was fixed.',
            'Judges can request the source code, and the rules say refusing that request means disqualification, so every claim in the answers should match the code.'
          ] },
        { kind: 'p', mt: true, html: 'The rulebook is clear that "This is not a video-creation competition." A screen recording with a clear voice-over is enough; fancy editing earns nothing.' }
      ]
    },
    {
      id: 'ai', tint: 'deep', eyebrow: 'The AI rule',
      h2: 'Can students use AI tools in a Congressional App Challenge app?',
      lede: 'Yes, under conditions the 2026 rules spell out. Families ask about this more than any other rule.',
      body: [
        { kind: 'table', caption: 'AI, originality and open source in the 2026 rules', head: ['Topic', 'What the 2026 rules say'], rows: [
          ['AI tools', '"The use of AI tools in app development for the Congressional App Challenge is permitted, provided that all AI usage is fully disclosed in the submission materials."'],
          ['Limit on AI', 'AI may support specific aspects of the project and "must not constitute the entirety of the technical development".'],
          ['Originality', 'The app must be original and created by the student or team; all coding and technical development must be theirs.'],
          ['Libraries', 'Open-source libraries, frameworks and external tools are allowed if their use is clearly documented.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How we apply it in class',
          left: [
            'Students keep a simple AI log from day one: the date, the tool, what they asked, and what they kept. When the submission asks about AI, the answer is already written and accurate.',
            'Our rule for students is the same as the judges&rsquo; spirit: if AI suggested a piece of code, the student must be able to explain it before it stays in the app.'
          ],
          rightH3: 'Age-appropriate tools',
          right: [
            'Many general AI chatbots set their own minimum ages in their terms, and some are for adults only. Under-18 students should use only tools whose terms allow their age, with a parent aware of the account.',
            'For most entries, AI is most useful for explaining an error message or suggesting a test case, not for writing the app.'
          ] }
      ]
    },
    {
      id: 'judging', tint: 'tint', eyebrow: 'Judging',
      h2: 'How Congressional App Challenge apps are judged',
      lede: 'Judging happens district by district, which is the feature that makes this competition unusual.',
      body: [
        { kind: 'table', caption: 'Judging and prizes in the 2026 rules', head: ['Point', 'What the 2026 rules say'], rows: [
          ['Who judges', 'The Member of Congress and their office, who may use a panel of judges'],
          ['Criteria', 'Quality of the idea (creativity and originality); implementation (user experience and design); "Demonstrated excellence of coding and programming skills"'],
          ['Source code', 'Judges may request access to the app and source code; refusing means disqualification'],
          ['Winners', 'Announced directly by the hosting Member of Congress'],
          ['Recognition', 'Each district winner is featured on the House.gov and CongressionalAppChallenge.us websites, and can receive a copyright fee waiver under the ARTS Act'],
          ['Ownership', '"Contestants will own the intellectual property rights to their Submission"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Reading the three criteria',
          left: [
            'The idea, the implementation and the code are weighed together. A brilliant idea that barely runs struggles, and so does polished code that solves nothing anyone needs.',
            'Implementation includes user experience and design, so a judge who opens the app should understand it within seconds, without the student in the room.'
          ],
          rightH3: 'Why the district matters',
          right: [
            'Each office judges the entries in its own district, so a student competes against classmates and neighbors, not the whole country.',
            'Apps that solve a problem the student has seen in their own school or community are easy for a local office to understand, which is a natural advantage.'
          ] }
      ]
    },
    {
      id: 'scale', tint: 'deep', eyebrow: 'By the numbers',
      h2: 'How big the Congressional App Challenge is',
      lede: 'The figures the organisers publish for the 2025 cycle and since the first official Challenge.',
      body: [
        { kind: 'table', caption: 'Congressional App Challenge figures, from the official About and Impact pages (read 17 October 2026)', head: ['Figure', 'Value', 'Source'], numCols: [1], rows: [
          ['Participants in 2025', '13,830', 'Impact page'],
          ['Applications in 2025', '4,850', 'Impact page'],
          ['Congressional Districts participating in 2025', '394', 'Impact page'],
          ['Students since 2015', '85,000', 'Impact page'],
          ['House Resolution 77 vote (2013)', '411 to 3', 'About page']
        ] },
        { kind: 'p', mt: true, html: 'Our own arithmetic on the organiser&rsquo;s 2025 figures: 4,850 applications across 394 participating districts is about 12.3 applications per district (4,850 / 394), if every application came from those districts. Real districts vary widely, so treat this as a sense of scale, not a forecast for any one district. Sources: <a class="ag-inline-link" href="https://www.congressionalappchallenge.us/impact/" rel="noopener" target="_blank">Impact</a> and <a class="ag-inline-link" href="https://www.congressionalappchallenge.us/about/" rel="noopener" target="_blank">About</a>.' }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'Ten weeks',
      h2: 'A ten-week plan from idea to submitted app',
      lede: 'Our plan for a student entering alone or with one teammate. It assumes about three hours a week, including one live class.',
      body: [
        { kind: 'table', caption: 'Ten weeks to a Congressional App Challenge entry (ours)', head: ['Week', 'Goal', 'Done when'], rows: [
          ['1', 'Pick a real problem', 'One problem, one audience, written in a sentence'],
          ['2', 'Scope it', 'A must, should and later list (see below)'],
          ['3', 'Choose the tools', 'A starter project that runs on the target device'],
          ['4 to 5', 'Build the must features', 'A first version a friend can use without help'],
          ['6', 'Test with real users', 'Five people tried it; three problems written down'],
          ['7', 'Fix and add one should feature', 'The three problems are fixed'],
          ['8', 'Polish the design', 'A judge understands the screen in seconds'],
          ['9', 'Video and answers', 'A 1 to 3 minute video and the six answers drafted'],
          ['10', 'Submit early', 'Submitted days before the deadline, AI log disclosed']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Grades 6 to 8', p: 'Block code or a simple web app is perfectly eligible. Keep the must list to three features.' },
          { h3: 'Grades 9 to 10', p: 'A first typed-code app: a web app in JavaScript or a Python project with a simple interface.' },
          { h3: 'Grades 11 to 12', p: 'A full app with a database or an API, and the time to test it properly with real users.' }
        ] }
      ]
    },
    {
      id: 'scope', tint: 'deep', eyebrow: 'A worked example',
      h2: 'Scoping an app: must, should, later',
      lede: 'Most unfinished entries are too big, not too hard. Here is how one of our example projects, a book-swap app for a middle school, gets cut down to something a student can finish and demo.',
      body: [
        { kind: 'table', caption: 'Scoping a school book-swap app (our example; effort is our estimate in class hours)', head: ['Feature', 'Bucket', 'Effort (hours)', 'Why'], numCols: [2], rows: [
          ['List a book with title and photo', 'Must', '4', 'Without it there is no app'],
          ['Search books by title', 'Must', '3', 'The core use in the demo'],
          ['Request to borrow', 'Must', '5', 'Shows the app solving the problem'],
          ['Sign in with a school-approved account', 'Should', '6', 'Useful, but a demo can use test accounts'],
          ['Ratings and reviews', 'Later', '6', 'Nice, not needed to show the idea'],
          ['Chat between students', 'Later', '10', 'Big, and raises safety questions']
        ] },
        { kind: 'p', mt: true, html: 'In our estimate the three must features take 12 hours (4 + 3 + 5), which fits weeks 4 and 5 of the plan at three hours a week with time to spare for bugs. Adding everything would take 34 hours, almost three times as long, and the extra features would barely change what a judge sees in a three-minute video.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting ready',
    h2: 'Four stages before a strong entry',
    lede: 'Where students usually are when they first hear about the Challenge.',
    table: { caption: 'From first app to Challenge entry (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Curious', 'Has built small projects or games, maybe in Scratch'],
      ['2. Builder', 'Can make a simple app work with help'],
      ['3. Finisher', 'Has finished one app end to end, tested by others'],
      ['4. Entrant', 'Can scope, build, explain and demo an app on a deadline']
    ] },
    left: { h3: 'For parents', ps: [
      'A student at stage 1 or 2 in spring can still enter in the fall with a steady plan.',
      'The biggest jump is from builder to finisher: shipping one complete small app teaches more than starting three big ones.'
    ] },
    right: { h3: 'For students', ps: [
      'Pick a problem you have actually seen. It makes every answer in the application easier to write.',
      'Keep your AI log and your bug notes as you go. They become your submission answers.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for app builders in grades 6 to 12',
    lede: 'Every course is taught live online by a regular teacher, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Middle school', sub: 'Grades 6 to 8', courses: [
        { code: 'CAC / MID / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Block code is eligible too.' },
        { code: 'CAC / MID / 02', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'The first typed language.' },
        { code: 'CAC / MID / 03', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'From blocks to small apps.' }
      ] },
      { num: 'II', h3: 'High school', sub: 'Grades 9 to 12', courses: [
        { code: 'CAC / HS / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Projects with data and interfaces.' },
        { code: 'CAC / HS / 02', slug: 'react-for-teens-complete-masterclass', title: 'React for teens', blurb: 'Interfaces judges can use.' },
        { code: 'CAC / HS / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'A web app from the first week.' }
      ] },
      { num: 'III', h3: 'Going further', sub: 'Strong coders', courses: [
        { code: 'CAC / ADV / 01', slug: 'ap-computer-science-principles-exam-prep-course', title: 'AP Computer Science Principles', blurb: 'The Create task and the exam.' },
        { code: 'CAC / ADV / 02', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'Java, objects and the exam.' },
        { code: 'CAC / ADV / 03', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Vibe coding for teens', blurb: 'AI-assisted building, disclosed.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live classes around a busy school schedule',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Pick a batch that fits after school in your time zone.' },
      { time: 'Weekends', l: 'Weekend mornings are popular before a deadline.' },
      { time: '1-on-1', l: 'Very personalised, timed around the project.' }
    ],
    cells: [
      { h3: 'One mentor', p: 'The same teacher across the whole build.' },
      { h3: 'Week-by-week plan', p: 'The ten weeks, adjusted to the student.' },
      { h3: 'Code review', p: 'Every feature explained before it stays.' },
      { h3: 'Video rehearsal', p: 'Practice the three-minute demo out loud.' },
      { h3: 'Live, online', p: 'From any district in any state.' },
      { h3: 'Batch or one to one', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Apps our students have shipped',
  projectsLede: 'Real projects by our learners, from first apps to full web tools. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Reviews parents left on Google, unchanged.',

  fees: {
    h2: 'Fees',
    lede: 'Entering the Challenge is free; our part is the teaching. Classes are billed one month at a time and shown in your local currency, with nothing to sign for the whole build, so a student can join for the months before a deadline and stop afterwards.',
    free: ['A free first lesson', 'Bring your app idea', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A mentor to yourself', 'Timed around your deadline', 'Your own app']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Congressional App Challenge: common questions',
    items: [
      { q: 'What is the Congressional App Challenge?', a: 'It is a coding competition for US middle and high school students, run in participating Congressional Districts and judged by each Member of Congress and their office. It is administered by the Internet Education Foundation.' },
      { q: 'Who can enter the Congressional App Challenge?', a: 'For 2026, students enrolled in middle or high school on October 26, 2026 who were US residents at the time of submission. The rules say there is no citizen requirement.' },
      { q: 'Can students enter as a team?', a: 'Yes. The 2026 rules allow individuals or teams of up to four students, and at least half of a team must live or attend school in the same Congressional District.' },
      { q: 'What programming language can be used?', a: 'Any language, including C, C++, Java, JavaScript, Python, Swift and block-based coding. Any platform is allowed too, from web and mobile to robots and wearables.' },
      { q: 'Can AI tools be used?', a: 'Yes, for 2026, if all AI use is fully disclosed in the submission. AI may support parts of the project but must not be the entirety of the technical development.' },
      { q: 'How long should the demo video be?', a: 'The 2026 rulebook says one to three minutes. It must name the participants and the app, state the purpose in one sentence, describe the audience and tools, and show the app working.' },
      { q: 'When was the 2026 deadline?', a: 'The 2026 rulebook set the deadline at 12:00 pm EDT on Monday, October 26, 2026. Later cycles publish their own dates on the official site.' },
      { q: 'How are winners chosen?', a: 'Each Member of Congress and their office judge their district, sometimes with a panel. The 2026 criteria were the quality of the idea, its implementation, and demonstrated excellence of coding and programming skills.' },
      { q: 'What do winners receive?', a: 'For 2026, each district winner is featured on the House.gov and CongressionalAppChallenge.us websites and can receive a copyright fee waiver through the ARTS Act. Districts may add certificates or small awards.' },
      { q: 'Can a middle schooler with only Scratch experience enter?', a: 'Yes. Block-based coding is allowed. A small, finished Scratch app with a clear purpose is a real entry; the plan on this page keeps the must list to three features for grades 6 to 8.' },
      { q: 'How can Modern Age Coders help?', a: 'A regular teacher works through the ten-week plan with your student: scoping, building, testing, the demo video and honest AI disclosure. Classes are weekdays or weekends, flexible, in a batch or one to one.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US students who like to build and compete.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'All of our pages for US families.' },
      { href: '/hackathons-for-high-school-students', label: 'Hackathons for high schoolers', p: 'Building on a deadline, in teams.' },
      { href: '/computer-science-extracurriculars', label: 'CS extracurriculars', p: 'What else strong CS students do.' },
      { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles', p: 'The Create task and exam.' },
      { href: '/how-to-make-a-roblox-game', label: 'How to make a Roblox game', p: 'A first project for younger builders.' },
      { href: '/student-labs', label: 'Student labs', p: 'Apps our learners built.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Bring the idea, even if it is only a sentence. In the first lesson the teacher helps turn it into a must, should and later list, so you leave with a plan.',
    readFirst: 'If you would like to know how classes work first, <a class="ag-inline-link" href="/how-we-teach">our teaching method</a> is set out step by step, and the <a class="ag-inline-link" href="/courses">full course list</a> shows each syllabus.',
    note: 'Classes are taught by video from India, so there is no local office to visit. WhatsApp is the fastest way for a US family to reach us.',
    formNote: 'Free first lesson. No card needed.'
  },

  footer: {
    cols: [
      { h4: 'Build and compete', links: [
        { href: '/hackathons-for-high-school-students', label: 'Hackathons for high schoolers' },
        { href: '/computer-science-extracurriculars', label: 'CS extracurriculars' },
        { href: '/usaco-preparation-online-coaching', label: 'USACO coaching' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A' },
        { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles' },
        { href: '/how-to-make-a-roblox-game', label: 'How to make a Roblox game' }
      ] }
    ],
    bottomRight: 'Must, should, later'
  },

  personalityCss: `
.ag-root.ag-cac .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-cac .ag-capsule { border-left-width: 4px; border-radius: 2px; }
.ag-root.ag-cac .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-cac .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-cac .ag-band-head h3 { letter-spacing: -0.004em; }
.ag-root.ag-cac .ag-slots { gap: 1.3rem; }
`,

  dossier: {
    curriculumAuthority: 'Congressional App Challenge, official 2026 rulebook and site, read raw on 17 October 2026: eligibility (enrolled in middle or high school on October 26th, 2026; US residents; no citizen requirement), district, teams of up to four, prior work after October 30th, 2025, one app per year, any topic, platform and language, the AI disclosure rule, the 1-3 minute demo video, six questions, deadline 12:00 pm EDT Monday October 26th 2026, judging by the Member of Congress and office, three criteria, source-code requests, embargo January 15 2027, House.gov feature and ARTS Act waiver, IP stays with the contestant; About: H.Res. 77 passed 411 to 3; Impact: 2025 13,830 participants, 4,850 applications, 394 districts, 85,000 since 2015.',
    localProject: 'Our ten-week build plan and our scoping example for a school book-swap app: must features 4 + 3 + 5 = 12 hours, all features 34 hours; our arithmetic 4,850 / 394 = about 12.3 applications per participating district. Lesson family: scoping and prioritisation (must, should, later).',
    requiredMentions: ['There is no citizen requirement for students', 'teams of up to four (4) students', 'after October 30th, 2025', 'ONE app per year', 'fully disclosed in the submission materials', 'This is not a video-creation competition', '12:00 pm EDT, Monday, October 26, 2026', 'January 15, 2027', '13,830', '4,850 / 394', '411 to 3', 'must, should and later'],
    sources: [
      { claim: 'Official 2026 rules: eligibility, teams, AI, video, deadline, judging, prizes, IP, administrator.', url: 'https://www.congressionalappchallenge.us/wp-content/uploads/2026/05/2026-CAC-Rules.pdf' },
      { claim: 'Rules page: 2026 dates, US residency and no citizen requirement, any language and platform.', url: 'https://www.congressionalappchallenge.us/students/rules/' },
      { claim: 'About: House Resolution 77 (2013), 411 votes to 3.', url: 'https://www.congressionalappchallenge.us/about/' },
      { claim: 'Impact: 2025 participants, applications and districts; students since 2015.', url: 'https://www.congressionalappchallenge.us/impact/' }
    ],
    rejectedClaims: [
      'Win rates or odds for any district: not published; our 12.3 per district is labelled as our arithmetic on two published totals.',
      'Dates for the 2027 cycle: not yet published on 17 October 2026, so the page states the 2026 dates and points to the official site.',
      'Named past winners: not used; the page links to the official winners pages instead.',
      'That our classes improve a student\'s chance of winning: refused; judging is at each office\'s discretion.',
      'Any affiliation with the Challenge or the Internet Education Foundation: none, and the page says so.'
    ]
  }
};
