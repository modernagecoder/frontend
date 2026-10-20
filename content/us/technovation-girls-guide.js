'use strict';
// Technovation Girls guide (ag- competition door; US cluster Phase 3, row 40).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Sources, read raw with curl on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/technovation-girls-guide/):
//  - technovationchallenge.org (home): registration opens October 2026 on a new platform; local Chapters, Sites, Clubs and
//    Classes are optional; "Technovation is a 501c3 nonprofit organization in the United States."
//  - /competition/: season starts October 12, 2026; registration to March 11, 2027 at 23:59 UTC; "12 weeks to submission:
//    February 10, 2027", "This is the latest we recommend starting the program"; submission deadline May 5, 2027 at 5pm PDT;
//    Quarterfinals May 11 - June 7, 2027; semifinalists announced June 14, 2027; Semifinals June 15 - June 28, 2027; July 2027
//    celebration; World Summit TBD; "GIRLS TRACK: Judges will select 15 Finalist teams from around the world."; co-ed track
//    inaugural in 2027; "While the Technovation Challenge competition is not open to participants above the age of 18" the
//    curriculum is free for all; 2027 Honor Code: own work, remixes only if significantly improved, cite sources, "the mentors
//    do not create, design, develop, or write any aspect of the team's submission deliverables", AI disclosure, AI "should not
//    replace the students' own thinking".
//  - /submission-guidelines/: "A team can have between 1-5 members."; tracks Girls and Co-ed, placed automatically; divisions
//    by "the age of the oldest member of your team": Beginner 8-12, Junior 13-15, Senior 16-18 as of August 1, 2027; parental
//    consent; under-16 parental approval before identifiable information; English written items; subtitles; digital solutions
//    (mobile app, interactive web app, extension, chatbot, SMS or voice tool, dashboard, workflow or agent, Scratch for
//    Beginner only, Code.org App Lab, robot); "One video, maximum of 4 minutes"; "Private videos cannot be judged."; written
//    limits (project description max 100 words, ethics max 150, accuracy max 100, user adoption max 300 each for Junior,
//    learning reflection max 200); business canvas for Senior; "2+ iterations of your solution with specific examples of what
//    improved".
//  - /award-structure/: Girls Track finalists by division across Africa, Asia & Oceania, Europe, North America and Latin
//    America (3 Beginner, 5 Junior, 7 Senior); one Grand Prize Winner per division; 30 Regional Honors teams in 2027.
//  - /get-involved/: "The Technovation Challenge competition is free and open to all youth 8-18."; mentors 30-40 hours from
//    October to May, with a background check; judges 5+ hours from May to June.
//  - /technovation-curriculum/: Beginner 30+ hours (ages 8-12), Junior and Senior 50+ hours; AI in Action; "A condensed
//    version of the Technovation Girls curriculum" (Core Curriculum).
// Our own material, labelled on the page: the feedback script and its sample ratings, the 12-week plan, the age-to-grade
// mapping, and the US time-zone conversions of the two deadlines. Lesson family: evidence from real users (test, measure,
// iterate).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const FEEDBACK = `# feedback.py (ours): turn user-test ratings into evidence
ratings_v1 = [2, 3, 3, 4, 2, 3]   # 1 to 5, six testers, version 1
ratings_v2 = [4, 4, 3, 5, 4, 4]   # the same six testers, version 2

def average(scores):
    return sum(scores) / len(scores)

print(f"Version 1: {average(ratings_v1):.1f} out of 5")
print(f"Version 2: {average(ratings_v2):.1f} out of 5")

better = sum(1 for a, b in zip(ratings_v1, ratings_v2) if b > a)
print(f"{better} of {len(ratings_v1)} testers rated version 2 higher")`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COMPETITION', blurb: 'Technovation Girls, now the Technovation Challenge Girls Track, explained from the official 2026-27 pages: divisions, dates, the new digital solutions rule, the video and a 12-week plan.' },
  slug: 'technovation-girls-guide',
  code: 'tgg',
  accent: '#2C5170',
  accentRationale: 'Technovation Girls guide: the allocated slate blue #2C5170, the blue of an evening pitch stage, contrast 7.87, 7.40 and 6.77 on the three paper tints',
  pageType: 'market',
  market: US,
  routeLabel: 'Technovation Girls guide',
  title: 'Technovation Girls Guide: 2026-27 Divisions, Dates, Rules',
  description: 'Technovation Girls, now the Technovation Challenge Girls Track, from the official 2026-27 pages: ages 8 to 18, teams of 1 to 5, dates, the video and the rules.',
  ogDescription: 'Free for ages 8 to 18, teams of up to five, one 4-minute video and a working digital solution due May 5, 2027. The 2026-27 Technovation season explained, with a 12-week plan.',
  twitterDescription: 'Technovation Girls and the 2026-27 Technovation Challenge, from the official pages.',
  pageName: 'Technovation Girls Guide',
  webPageDescription: 'A guide for US girls, parents and teachers to Technovation Girls, now the Technovation Challenge Girls Track, built from the official 2026-27 pages, with a plan and a worked feedback example.',
  courseDescription: 'Live online app, web and AI classes for US girls aged 8 to 18 building a Technovation Challenge project, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Technovation Girls',
  navLinks: [
    { href: '#tracks', label: 'Girls and co-ed' },
    { href: '#divisions', label: 'Divisions' },
    { href: '#dates', label: '2026-27 dates' },
    { href: '#submit', label: 'What to submit' },
    { href: '#plan', label: '12-week plan' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages 8 to 18 &middot; Teams of one to five',
  h1: 'Technovation Girls guide',
  lede: 'Technovation Girls is the name most families know for a free global program in which girls aged 8 to 18 find a problem in their community, build a working tech solution for it, and pitch it on video. The organiser now runs it as the Technovation Challenge, with a Girls Track and, new for the 2027 season, a Co-ed Track. This guide reads the official 2026-27 pages closely: the divisions, every published date with US time zones, the new rule that any working digital solution counts, what goes in the 4-minute video and the written answers, and a 12-week plan.',
  secondaryCta: { href: '#plan', label: 'See the 12-week plan' },
  wa: 'Hello Modern Age Coders, my daughter in the US wants to enter Technovation and learn to build her project. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; real apps, built by the student',
  spec: [
    ['What', 'Build tech for a real problem'],
    ['Who', 'Ages 8 to 18'],
    ['Cost', 'Free to enter'],
    ['Teams', '1 to 5 members'],
    ['Tracks', 'Girls, or the new Co-ed'],
    ['Due', 'May 5, 2027, 5pm Pacific'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'Technovation Girls is the Girls Track of the Technovation Challenge, a free program for ages 8 to 18 in which teams of 1 to 5 build a working digital solution to a community problem and submit a video of up to 4 minutes plus written answers. For the 2026-27 season, the season starts October 12, 2026, registration closes March 11, 2027, and submissions are due May 5, 2027 at 5pm PDT. Modern Age Coders teaches this live online for US students, in a batch or one to one, and the first class is free.',

  picks: {
    eyebrow: 'Build the project with a teacher',
    h2: 'Three courses for a Technovation team member',
    lede: 'Technovation asks for a solution that really works and has been tested with real users. These courses teach a girl to build one herself.',
    items: [
      { course: 'princess-coders-complete-coding-masterclass', code: 'TG / 01', title: 'Princess Coders', note: 'Our coding course for girls, from first program to real projects.' },
      { course: 'complete-app-development-masterclass-for-teens', code: 'TG / 02', title: 'App development for teens', note: 'Ages 13 to 18. Mobile apps that judges can install.' },
      { course: 'ai-ml-masterclass-teens', code: 'TG / 03', title: 'AI and machine learning for teens', note: 'Ages 13 to 18. AI features, built and tested.' }
    ]
  },

  sections: [
    {
      id: 'tracks', tint: 'tint', eyebrow: 'The name',
      h2: 'Technovation Girls, the Girls Track and the new Co-ed Track',
      lede: 'The program people search for as Technovation Girls is now officially the Technovation Challenge. Here is how the parts fit for 2026-27.',
      body: [
        { kind: 'table', caption: 'How the Technovation Challenge is organised for 2026-27 (official pages, read 17 October 2026)', head: ['Question', 'What the official pages say'], rows: [
          ['Who runs it', 'Technovation, which describes itself as a 501c3 nonprofit organization in the United States'],
          ['Who can compete', '"The Technovation Challenge competition is free and open to all youth 8-18."'],
          ['Tracks', 'Teams are placed automatically into the Girls track or the Co-ed track by team composition'],
          ['The Girls Track', 'For teams of girls; the official Get Involved page sets out exactly who the track includes'],
          ['The Co-ed Track', 'New for the 2027 season; finalist numbers to be set after submissions close in May 2027'],
          ['The old name', 'The curriculum page still calls its short course a condensed version of the Technovation Girls curriculum']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What stays the same for girls',
          left: [
            'The Girls Track keeps the full award structure: Judges will select 15 Finalist teams from around the world, and the final round is judged at World Summit, where one Grand Prize Winner per division is announced.',
            'The curriculum, the honor code and the submission rules are the same for both tracks, so a girls&rsquo; team prepares exactly as before.'
          ],
          rightH3: 'Local groups are optional',
          right: [
            'Technovation runs through local Chapters, Sites, Clubs and Classes, often at school districts, nonprofits and universities. The home page says joining one is not mandatory.',
            'A team of friends can take part virtually on its own, which matters in US towns with no local chapter.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://technovationchallenge.org/competition/" rel="noopener" target="_blank">Competition</a>, <a class="ag-inline-link" href="https://technovationchallenge.org/submission-guidelines/" rel="noopener" target="_blank">Submission Guidelines</a> and <a class="ag-inline-link" href="https://technovationchallenge.org/get-involved/" rel="noopener" target="_blank">Get Involved</a> pages, read 17 October 2026. Modern Age Coders works independently of Technovation; we teach the coding and AI skills.' }
      ]
    },
    {
      id: 'divisions', tint: 'deep', eyebrow: 'Divisions',
      h2: 'Beginner, Junior or Senior: the 2027 divisions',
      lede: 'The division is set automatically by the age of the oldest team member on August 1, 2027. The grade column is our rough US mapping; the rule itself is age.',
      body: [
        { kind: 'table', caption: 'Technovation 2027 divisions (official ages) with our approximate US grades', head: ['Division', 'Age on August 1, 2027 (official)', 'Typical US grade (our mapping)', 'Curriculum (official)'], rows: [
          ['Beginner', '8 to 12', 'About grades 3 to 7', '30+ hours: ideation, coding, AI, pitching'],
          ['Junior', '13 to 15', 'About grades 8 to 10', '50+ hours, adds entrepreneurship'],
          ['Senior', '16 to 18', 'About grades 11 to 12', '50+ hours, adds entrepreneurship']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The oldest member decides',
          left: [
            'The guidelines state the size rule simply: "A team can have between 1-5 members." Age is where teams get caught out. A team of three 12-year-olds and one 13-year-old competes in the Junior Division, because the rule is "based on the age of the oldest member of your team". Families mixing ages should check this before forming a team.',
            'Use the age on August 1, 2027, not today&rsquo;s age. A student who turns 13 in July 2027 is already Junior for this season.'
          ],
          rightH3: 'Profiles and consent',
          right: [
            'Every member completes a profile with name, age on August 1, 2027, location and a parental consent form; a media consent form is optional.',
            'Members under 16 on that date need parental approval on file before any identifiable information, such as a full name, photo or location, goes into the profile or the submission.'
          ] },
        { kind: 'p', mt: true, html: 'The competition is not open to anyone older than 18, but the official Competition page adds that the curriculum is free for learners of all ages and genders, so an older sibling or a parent can follow along.' }
      ]
    },
    {
      id: 'dates', tint: 'tint', eyebrow: 'The calendar',
      h2: 'Technovation 2026-27 season calendar',
      lede: 'The season runs from October to the summer, and the dates below belong to the 2026-27 season and its 2027 competition. Next season&rsquo;s calendar will replace them when Technovation posts it.',
      body: [
        { kind: 'table', caption: 'Technovation Challenge 2026-27 key dates, from the official Competition page (read 17 October 2026)', head: ['Date (2026-27 season)', 'What happens'], rows: [
          ['October 12, 2026', 'The season officially starts and registration opens'],
          ['February 10, 2027', '12 weeks to submission: the latest the organiser recommends starting'],
          ['March 11, 2027, 23:59 UTC', 'Registration deadline for students and mentors'],
          ['May 5, 2027, 5pm PDT', 'Submission deadline'],
          ['May 11 to June 7, 2027', 'Quarterfinals, online or at Regional Pitch Events'],
          ['June 14, 2027', 'Semifinalists announced'],
          ['June 15 to June 28, 2027', 'Semifinals, judged entirely online'],
          ['July 2027', 'Virtual celebration; Finalists and Regional Honorees announced'],
          ['To be announced', 'World Summit, where the Girls Track final is judged']
        ] },
        { kind: 'table', mt: true, caption: 'The two deadlines in US time zones (our conversion)', head: ['Time zone', 'Registration closes, March 11, 2027', 'Submission due, May 5, 2027'], rows: [
          ['Eastern', '6:59 p.m.', '8:00 p.m.'],
          ['Central', '5:59 p.m.', '7:00 p.m.'],
          ['Mountain, and Arizona all year', '4:59 p.m.', '6:00 p.m. (Arizona 5:00 p.m.)'],
          ['Pacific', '3:59 p.m.', '5:00 p.m.'],
          ['Alaska', '2:59 p.m.', '4:00 p.m.'],
          ['Hawaii', '1:59 p.m.', '2:00 p.m.']
        ] },
        { kind: 'p', mt: true, html: 'Why the times shift: US clocks spring forward on March 14, 2027, three days after the registration deadline, so March 11 is still on standard time while May 5 is on daylight time. Hawaii and most of Arizona do not change their clocks. These conversions are ours; the official times are 23:59 UTC and 5pm PDT.' }
      ]
    },
    {
      id: 'build', tint: 'deep', eyebrow: 'New for 2027',
      h2: 'From apps to any working digital solution',
      lede: 'The biggest change this season: teams are no longer limited to a mobile app. The official list of examples is below.',
      body: [
        { kind: 'table', caption: 'What counts as a digital solution in 2027, and what to hand in (official Submission Guidelines)', head: ['Solution type', 'Code or link to submit'], rows: [
          ['Mobile app (App Inventor, Thunkable or other languages)', 'An .aia file, a Thunkable project link, or a .zip file'],
          ['Web app (interactive only)', 'A .zip file and a live interactive URL'],
          ['Browser extension or plugin', 'A .zip file and a store link or hosted demo'],
          ['Chatbot or AI assistant', 'A .zip file and a live access link'],
          ['SMS or voice-based tool', 'A .zip file and a web sandbox or demo number'],
          ['Data dashboard', 'A .zip file and a live dashboard URL'],
          ['Automated workflow or AI agent', 'A .zip file and a live link or hosted interface'],
          ['Scratch project (Beginner Division only)', 'The Scratch project page link'],
          ['Code.org App Lab project', 'The studio.code.org project link'],
          ['Coded robot, drone or gadget', 'A .zip file or a URL']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The rule underneath has not changed',
          left: [
            'The guidelines say the solution must involve coding or AI, be tested with real users, and work. A website that only shows information is not eligible; it must be interactive.',
            'What is new is the choice of format, and the team must now explain why the format it chose fits its users and its problem.'
          ],
          rightH3: 'Choosing a format (our advice)',
          right: [
            'Start with the user. A problem for grandparents who text but never install apps suits an SMS tool; a problem for classmates who live on their phones suits a mobile app.',
            'For a first season, choose the format the team can finish and test. A simple working tool tested by ten real people beats an ambitious one that never runs.'
          ] }
      ]
    },
    {
      id: 'submit', tint: 'tint', eyebrow: 'What to submit',
      h2: 'The 4-minute video and the written answers',
      lede: 'Every team submits a video, its technical work and written components. The rules differ a little by division; these are the shared essentials.',
      body: [
        { kind: 'table', caption: 'Submission essentials for 2027 (official Submission Guidelines)', head: ['Item', 'Rule'], rows: [
          ['Video', '"One video, maximum of 4 minutes", replacing the old separate pitch and technical videos'],
          ['Hosting', 'YouTube or Vimeo, unlisted or public. "Private videos cannot be judged."'],
          ['Language', 'Written items in English; the video may be in any language, with English subtitles required if it is not in English'],
          ['Project description', 'At most 100 words: the problem and the solution'],
          ['Ethics', 'Two or more ethical issues considered, such as privacy, accessibility or bias, in at most 150 words'],
          ['Accuracy', 'How information and any AI output were checked, with a specific example, in at most 100 words'],
          ['Learning reflection', 'At most 200 words'],
          ['Senior Division', 'A business canvas, and key business canvas elements in the video'],
          ['Junior Division', 'Two user adoption answers of at most 300 words each']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the Senior and Junior video must show',
          left: [
            'Why the problem matters and the research behind it; how the solution works and why that format; evidence that target users gave feedback; what was built and with which tools; and "2+ iterations of your solution with specific examples of what improved".',
            'It must also show the debugging process and the metrics or evidence that the solution actually worked. That is a lot for four minutes, so script it.'
          ],
          rightH3: 'The Beginner video',
          right: [
            'Beginners show why the problem matters to them, how they approached it, one or two key features, how they built it, and the features they plan next.',
            'For an 8 to 12-year-old, a clear screen recording with the team explaining in their own words is exactly what the rules ask for.'
          ] }
      ]
    },
    {
      id: 'honor', tint: 'deep', eyebrow: 'Fair play',
      h2: 'The 2027 Honor Code: mentors, remixes and AI',
      lede: 'Every team agrees to the Honor Code when it submits. Three of its rules shape how a student should get help, including from us.',
      body: [
        { kind: 'table', caption: 'Key points of the 2027 Technovation Honor Code (official Competition page)', head: ['Topic', 'What the Honor Code says'], rows: [
          ['Own work', 'The submission is created by the students on the team; remixing other materials or updating a past project is acceptable only with significant improvement'],
          ['Citing', 'Tutorials, code libraries, templates and datasets are cited in the written components'],
          ['Mentors', 'Mentors help students learn and find resources, but "the mentors do not create, design, develop, or write any aspect of the team\'s submission deliverables"'],
          ['AI tools', 'Any AI use is disclosed: the tools, what they helped with, and how the team built on or checked the output; AI "should not replace the students\' own thinking"']
        ] },
        { kind: 'p', mt: true, html: 'We hold our own teachers to the same standard. In class, a teacher explains a concept, such as how a button triggers a database write, using a separate example; the student then writes the code for her own project. We never write, design or edit a team&rsquo;s app, video or written answers. Technovation&rsquo;s official mentors are volunteers who register, pass a background check and give 30 to 40 hours across the season; our classes are lessons, not that role.' }
      ]
    },
    {
      id: 'evidence', tint: 'tint', eyebrow: 'A worked example',
      h2: 'Showing that version 2 is better, with numbers',
      lede: 'Judges ask for user feedback, two or more iterations and evidence the solution worked. Here is how a team can turn a simple user test into that evidence, using our own sample ratings.',
      body: [
        { kind: 'p', html: 'Our example: a Junior team builds a homework reminder app for their middle school. Six classmates try version 1 and rate it from 1 to 5. The team fixes the three complaints that came up most, then the same six testers rate version 2.' },
        { kind: 'code', label: 'Python &middot; summarise two rounds of user testing', lang: 'python', code: FEEDBACK, note: 'Output: Version 1: 2.8 out of 5, Version 2: 4.0 out of 5, and 5 of 6 testers rated version 2 higher. Six testers is our small example; more testers give a more trustworthy result.' },
        { kind: 'two', mt: true,
          leftH3: 'How the numbers go into the submission',
          left: [
            'In the video, one sentence and a simple chart: "After our second iteration, the average rating rose from 2.8 to 4.0 out of 5, and 5 of our 6 testers preferred it." That covers feedback, iteration and evidence at once.',
            'In the written answers, name the three complaints and the exact change made for each. Specific examples of what improved are what the guidelines ask for.'
          ],
          rightH3: 'What the averages hide',
          right: [
            'One tester did not rate version 2 higher. A strong team asks that person why, and reports the answer honestly; that is a third iteration waiting to happen.',
            'This is the lesson we teach: a number means little without the question you asked, how many people answered, and what you changed because of it.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'Twelve weeks',
      h2: 'A 12-week plan to the May 5, 2027 deadline',
      lede: 'The organiser names February 10, 2027 as the latest recommended start, 12 weeks before submission. Our plan fills that window week by week and assumes each girl gives it roughly three hours a week, one of them in class.',
      body: [
        { kind: 'table', caption: 'Twelve weeks to a Technovation submission, 2026-27 season (ours)', head: ['Week of', 'Goal', 'Finished when'], rows: [
          ['February 8, 2027', 'Form the team, register, pick a problem', 'Registered; the problem written in one sentence'],
          ['February 15', 'Research the problem as a system', 'Causes, who is affected and how factors connect, noted'],
          ['February 22', 'Interview real users', 'At least five people asked what would help'],
          ['March 1', 'Choose the format and tools', 'A starter project running; registration done before March 11'],
          ['March 8 and 15', 'Build version 1', 'The main feature works end to end'],
          ['March 22', 'First user test', 'Ratings and complaints from real users'],
          ['March 29 and April 5', 'Build version 2', 'The top complaints fixed and retested'],
          ['April 12', 'Business canvas or user adoption answers', 'Drafted for the team&rsquo;s division'],
          ['April 19', 'Written components', 'All answers inside the word limits, sources and AI use cited'],
          ['April 26', 'Script, record and subtitle the video', 'Under four minutes, unlisted on YouTube or Vimeo'],
          ['May 3', 'Submit early', 'Submitted before May 5, 2027, honor code agreed']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Beginner, ages 8 to 12', p: 'Scratch, App Inventor or Code.org App Lab, one or two features, and a parent or teacher nearby for the user tests.' },
          { h3: 'Junior, ages 13 to 15', p: 'A real app or interactive web app, two rounds of testing, and the user adoption answers.' },
          { h3: 'Senior, ages 16 to 18', p: 'A full solution, possibly with AI, a business canvas and metrics showing the solution worked.' }
        ] }
      ]
    },
    {
      id: 'awards', tint: 'tint', eyebrow: 'Judging',
      h2: 'How Technovation judging and awards work in 2027',
      lede: 'Three rounds of judging, then honors. The Girls Track numbers below are published; the Co-ed Track numbers are to be set after submissions close.',
      body: [
        { kind: 'table', caption: 'Girls Track finalists and honors for 2027 (official Award Structure page)', head: ['Award', 'How many, as published'], rows: [
          ['Finalists, Beginner Division', '3 teams representing 3 different regions'],
          ['Finalists, Junior Division', '5 teams, one per region'],
          ['Finalists, Senior Division', '7 teams, one per region plus 2 without regional restriction'],
          ['Grand Prize Winners', 'One per division, chosen at World Summit'],
          ['Regional Honors', '30 teams in 2027 across the five regions, by division and track']
        ] },
        { kind: 'p', mt: true, html: 'The five regions are Africa, Asia &amp; Oceania, Europe, North America and Latin America, so US teams are judged within North America for regional places. Finalists and honorees receive educational stipends set out on the official Award Structure page, and Girls Track finalist teams travel to World Summit at the organiser&rsquo;s expense.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'Four stages before a confident Technovation entry',
    lede: 'Where a girl usually is when she first hears about Technovation, and what comes next.',
    table: { caption: 'Technovation readiness stages (ours)', head: ['Stage', 'She can'], rows: [
      ['1. Curious', 'Describe a problem she has noticed and who it affects'],
      ['2. Maker', 'Build a small working project with help'],
      ['3. Tester', 'Put her project in front of real users and record what they say'],
      ['4. Pitcher', 'Explain the problem, the solution, the tests and the next version in four minutes']
    ] },
    left: { h3: 'For parents', ps: [
      'A team of friends with no local chapter can still take part online, and the curriculum is free.',
      'If the team works with a mentor, agree early how that adult will help. Under the Honor Code a mentor guides and never builds.'
    ] },
    right: { h3: 'For students', ps: [
      'Choose a problem you have actually seen. Interviews and testing are much easier when you know the people.',
      'Save every version of your project. Two clear iterations are part of what judges look for.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for Technovation builders, ages 8 to 18',
    lede: 'Live online classes with a regular teacher, grouped by Technovation division.',
    bands: [
      { num: 'I', h3: 'Beginner', sub: 'Ages 8 to 12', courses: [
        { code: 'TG / BEG / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Allowed for Beginner teams.' },
        { code: 'TG / BEG / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Ages 9 to 12, typed code.' },
        { code: 'TG / BEG / 03', slug: 'ai-literacy-for-kids-course', title: 'AI literacy for kids', blurb: 'How AI works, ages 8 to 14.' }
      ] },
      { num: 'II', h3: 'Junior', sub: 'Ages 13 to 15', courses: [
        { code: 'TG / JR / 01', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive web apps.' },
        { code: 'TG / JR / 02', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML and CSS', blurb: 'Pages users enjoy.' },
        { code: 'TG / JR / 03', slug: 'teens-ai-tools-mastery-course', title: 'AI tools for teens', blurb: 'Ages 13 to 18, used honestly.' }
      ] },
      { num: 'III', h3: 'Senior', sub: 'Ages 16 to 18', courses: [
        { code: 'TG / SR / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web', blurb: 'A real database behind it.' },
        { code: 'TG / SR / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Metrics that prove impact.' },
        { code: 'TG / SR / 03', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon prep', blurb: 'Build and pitch to a deadline.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lesson times',
    h2: 'Lessons that fit the Technovation season',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'An after-school class, Eastern through Hawaii.' },
      { time: 'Weekends', l: 'Longer build time in the spring rush.' },
      { time: '1-on-1', l: 'Paced to her part of the team project.' }
    ],
    cells: [
      { h3: 'She builds it', p: 'Concepts taught, code written by her.' },
      { h3: 'Any format', p: 'Apps, web, chatbots, Scratch.' },
      { h3: 'Testing habits', p: 'Real users, real numbers.' },
      { h3: 'Pitch practice', p: 'Four minutes, rehearsed aloud.' },
      { h3: 'Honest AI use', p: 'Disclosed, checked, explained.' },
      { h3: 'Group or solo', p: 'Batches of fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Projects our students have built',
  projectsLede: 'Working apps and tools made by our learners. The <a class="ag-inline-link" href="/student-labs">student labs</a> page holds many more.',
  reviewsLede: 'Parents&rsquo; reviews from Google, quoted as posted.',

  fees: {
    h2: 'Fees',
    lede: 'Technovation is free to enter. Our lessons are separate, billed monthly in US dollars, so a student can learn through the build season and finish when the project is submitted.',
    free: ['A free first lesson', 'Bring the team&rsquo;s problem', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'A batch that suits you', 'Monthly fees'],
    one: ['A teacher just for her', 'Built around the season', 'Her project, her pace']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Technovation Girls: common questions',
    items: [
      { q: 'Is Technovation Girls the same as the Technovation Challenge?', a: 'Yes. Technovation Girls is the name many families still use. The organiser now calls the program the Technovation Challenge, with a Girls Track and, new for 2027, a Co-ed Track.' },
      { q: 'Who can enter Technovation?', a: 'Young people aged 8 to 18. The official Get Involved page says the competition is free and open to all youth 8-18, and teams are placed in the Girls or Co-ed track by team composition.' },
      { q: 'How many people can be on a team?', a: 'Between 1 and 5 members. The team\'s division is set by the age of its oldest member on August 1, 2027.' },
      { q: 'What are the divisions?', a: 'Beginner for ages 8 to 12, Junior for 13 to 15 and Senior for 16 to 18, all measured on August 1, 2027 for the 2026-27 season.' },
      { q: 'When is the 2027 Technovation deadline?', a: 'Submissions are due May 5, 2027 at 5pm PDT, which is 8:00 p.m. Eastern. Registration for students and mentors closes March 11, 2027 at 23:59 UTC.' },
      { q: 'Does the project have to be a mobile app?', a: 'No, not any more. For 2027 any working digital solution counts, including web apps, chatbots, browser extensions, dashboards, SMS tools and robots. Scratch is allowed for the Beginner Division only.' },
      { q: 'How long is the video?', a: 'One video of at most 4 minutes on YouTube or Vimeo, set to unlisted or public. Private videos cannot be judged, and non-English videos need English subtitles.' },
      { q: 'Can a mentor or tutor help build the project?', a: 'They can teach skills and point to resources, but under the Honor Code mentors do not create, design, develop or write any part of the submission. Our teachers follow the same rule.' },
      { q: 'Can teams use AI tools?', a: 'Yes, if every use is disclosed in the written components, including which tools, what they helped with and how the team checked the output. AI should not replace the students\' own thinking.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How does Modern Age Coders help with Technovation?', a: 'We teach girls to code and build the kind of solution Technovation asks for, test it with users and explain it clearly. The project, the video and the answers remain the team\'s own work.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US girls and teens who want to build and compete.',
    items: [
      { href: '/coding-classes-for-girls', label: 'Coding classes for girls', p: 'Our classes designed for girls.' },
      { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge', p: 'The fall app competition by district.' },
      { href: '/hackathons-for-high-school-students', label: 'Hackathons for high schoolers', p: 'Build and pitch in a weekend.' },
      { href: '/ai-projects-for-high-school-students', label: 'AI projects for high schoolers', p: 'Ideas for an AI feature.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'All our pages for US families.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects our learners built.' },
      { href: '/coding-competitions-for-high-school-students', label: 'Coding competitions for high school students', p: 'US high school coding competitions for 2026-27, from the organisers\' own rules.' },
      { href: '/coding-competitions-for-middle-school-students', label: 'Coding competitions for middle school students', p: 'Middle school coding competitions for 2026-27, grade by grade.' },
      { href: '/machine-learning-competitions-for-high-school-students', label: 'Machine learning competitions for high school students', p: 'ML and AI competitions for US high schoolers, 2026-27, from the official rules.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us the problem your daughter&rsquo;s team chose, or that they have not chosen yet. The first lesson matches the problem to a format she can build and test in time.',
    readFirst: 'Prefer to read first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> describes a lesson from start to finish, and the <a class="ag-inline-link" href="/courses">course list</a> gives every syllabus.',
    note: 'Our teachers are based in India and teach live online at times that suit US families. WhatsApp is the quickest way to ask a question.',
    formNote: 'First lesson free, and no card is needed.'
  },

  footer: {
    cols: [
      { h4: 'Build and pitch', links: [
        { href: '/coding-classes-for-girls', label: 'Coding classes for girls' },
        { href: '/hackathons-for-high-school-students', label: 'Hackathons for high schoolers' },
        { href: '/ai-projects-for-high-school-students', label: 'AI projects for high schoolers' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' },
        { href: '/computer-science-extracurriculars', label: 'CS extracurriculars' },
        { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles' }
      ] }
    ],
    bottomRight: 'Test, measure, iterate'
  },

  personalityCss: `
.ag-root.ag-tgg .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-tgg .ag-capsule { border-left-width: 4px; border-radius: 6px; }
.ag-root.ag-tgg .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-tgg .ag-table caption { text-align: left; font-style: italic; letter-spacing: 0.005em; }
.ag-root.ag-tgg .ag-band-head h3 { letter-spacing: -0.006em; }
.ag-root.ag-tgg .ag-slots { gap: 1.05rem; }
`,

  dossier: {
    curriculumAuthority: 'Technovation Challenge (Technovation Girls), official pages for the 2026-27 season, read raw on 17 October 2026: free and open to youth 8-18; Girls and Co-ed tracks; teams of 1-5; divisions by oldest member on August 1, 2027; key dates October 12, 2026 to the May 5, 2027 5pm PDT deadline and June 2027 judging; digital solutions list; one video of up to 4 minutes; written word limits; Honor Code on mentors, remixes and AI; Girls Track awards (15 finalists by division, 30 Regional Honors); mentor time commitment; curriculum hours; 501c3 nonprofit.',
    localProject: 'Our feedback script on six sample testers (2.8 to 4.0 out of 5; 5 of 6 preferred version 2), our 12-week plan from February 8, 2027, our age-to-grade mapping, and our US time-zone conversions (March 11, 2027 23:59 UTC is 6:59 p.m. Eastern; May 5, 2027 5pm PDT is 8:00 p.m. Eastern). Lesson family: evidence from real users.',
    requiredMentions: ['The Technovation Challenge competition is free and open to all youth 8-18.', 'A team can have between 1-5 members.', 'based on the age of the oldest member of your team', 'August 1, 2027', 'October 12, 2026', 'March 11, 2027, 23:59 UTC', 'May 5, 2027, 5pm PDT', 'One video, maximum of 4 minutes', 'Private videos cannot be judged.', 'Judges will select 15 Finalist teams from around the world', '2+ iterations of your solution with specific examples of what improved', '5 of 6 testers rated version 2 higher'],
    sources: [
      { claim: 'Season dates, judging rounds, tracks, Honor Code, age limit.', url: 'https://technovationchallenge.org/competition/' },
      { claim: 'Teams, divisions, consent, digital solutions, video and written requirements.', url: 'https://technovationchallenge.org/submission-guidelines/' },
      { claim: 'Finalists by division and region, Grand Prize, Regional Honors.', url: 'https://technovationchallenge.org/award-structure/' },
      { claim: 'Free and open to youth 8-18, mentor and judge commitments.', url: 'https://technovationchallenge.org/get-involved/' },
      { claim: 'Curriculum by division and hours, Technovation Girls curriculum name.', url: 'https://technovationchallenge.org/technovation-curriculum/' },
      { claim: 'Local programs optional, nonprofit status, new platform.', url: 'https://technovationchallenge.org/' }
    ],
    rejectedClaims: [
      'Stipend amounts and travel value: published on the Award Structure page, not printed because US pages carry no typed dollar figures.',
      'Registration opening date: the Competition page says both October 12 and October 11, 2026; the page prints the season start, October 12, 2026, and says registration opens then.',
      'The full wording of who the Girls Track includes: not reproduced; the page links to the official Get Involved page, which sets it out.',
      'Impact percentages on the home page (skills, STEM degrees, careers): not used; they are the organiser\'s survey claims, not rules.',
      'That our classes improve a team\'s chance of becoming a finalist: refused; judging is by Technovation\'s judges.',
      'Any affiliation with Technovation: none, and the page says so.'
    ]
  }
};
