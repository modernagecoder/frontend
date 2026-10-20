'use strict';
// Presidential AI Challenge guide (ag- competition door; US cluster Phase 3, row 36).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Sources, read raw with curl on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/presidential-ai-challenge-guide/):
//  - ai.gov now redirects to si.gov; si.gov/initiatives/presidential-challenge: "Registration for the 2027 Presidential SI
//    Challenge is open through December 18, 2026"; links the official challenge site at orise.orau.gov.
//  - orise.orau.gov/si-challenge/ (home): "On September 29, 2026, President Trump signed the Executive Order, "Inaugurating
//    the Era of Super Intelligence," to replace the term "Artificial Intelligence" ("AI") with "Super Intelligence" ("SI")";
//    "the Challenge will be referred to as the Presidential SI Challenge"; Executive Order (EO) 14277 (2025) directed it.
//  - whitehouse.gov order of April 2025, Sec. 5: "multiple age categories, distinct geographic regions for competition, and a
//    variety of topical themes"; order of September 29, 2026, Sec. 2: agencies "shall use "Super Intelligence" and "SI" in
//    place of "Artificial Intelligence" and "AI"".
//  - /about/eligibility.html: Team Leader "Age Requirement: 21 years or older", a full-time teacher, an approved community
//    group leader or an NSF principal investigator; elementary K-5 teams of 1-5, middle 6-8 and high 9-12 teams of 1-4,
//    educator teams of 1-3; U.S. citizen, U.S. national (American Samoa) or lawful permanent resident; parental consent form.
//  - /about/timeline.html: registration opens Tuesday, October 13, 2026; registration deadline Friday, December 18, 2026,
//    5:00 p.m. Eastern; project submission Wednesday, December 23, 2026, 5:00 p.m. Eastern; office hours Mondays 7:00 to
//    8:00 p.m. Eastern; state champions as soon as February 11, 2027, no later than February 15, 2027; regional virtual
//    presentations March 4 - April 8, 2027; regional champions by April 20, 2027; national event June 6-9, 2027, Washington, DC.
//  - /complete-the-challenge/: Standard Track and Trailblazer Track; "100% of the project's content must be original content
//    and created specifically for the Challenge after August 1, 2026."
//  - /complete-the-challenge/requirements.html: single PDF "no larger than 30 MB", "no more than 10 pages PLUS a title page
//    (11 pages total)", "12-point (or larger) font size"; the section list; "The video entry must be a single, 4-minute
//    maximum, video."; "Judges will only view the first four minutes of the video."; Trailblazer "must have nationwide impact
//    AND be novel (new or unique)".
//  - /complete-the-challenge/competition-tiers.html: state, regional, national tiers; at least three judges per project;
//    two State Champions for California, Florida, New York and Texas ("These are the states represented by 25 or more members
//    in the U.S. House of Representatives."); five regions West, West Central, East Central, Northeast, Southeast.
//  - /resources/scoring-guides.html: Standard Track points (10, 20, 15, 10, 15, 10, 10, 10; "Total: 100 points"), first tie
//    break Originality and Creativity, second SI Solution; Trailblazer points (15, 10, 20, 15, 20, 10, 10; total 100).
//  - /resources/faq.html: one-student teams need a teacher from the same school as Team Leader; a team cannot consist of just
//    siblings and their parent; Team Leaders limited to 20 teams; "Only one adult may be the Team Leader for all teams.";
//    teams may work with local mentors with parental permission; the track is chosen at submission; "There is no requirement
//    that the code be shared"; paid tools allowed; "At this time, there are no tools that are prohibited."; disqualification
//    for "academic dishonesty such as not disclosing the use of an SI tool"; travel to the National Finals provided.
// Our own material, labelled on the page: the nine-week plan, the page budget weighted by the published points, the
// accuracy-check script and its sample labels, and the day counts (October 13 to December 23, 2026 is 71 days; our count).
// Lesson family: measuring a model honestly (test set, accuracy, error list).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const ACCURACY = `# accuracy_check.py (ours): does the model agree with the team?
# The team sorted 10 photos by hand first. Those labels are the truth.
team_labels = ["recycle", "trash", "recycle", "recycle", "trash",
               "trash", "recycle", "trash", "recycle", "recycle"]
model_said = ["recycle", "trash", "trash", "recycle", "trash",
              "recycle", "recycle", "trash", "recycle", "recycle"]

correct = 0
mistakes = []
pairs = zip(team_labels, model_said)
for item, (truth, guess) in enumerate(pairs, start=1):
    if truth == guess:
        correct += 1
    else:
        mistakes.append((item, truth, guess))

total = len(team_labels)
print(f"Accuracy: {correct}/{total} = {correct / total:.0%}")
for item, truth, guess in mistakes:
    print(f"  photo {item}: we said {truth}, model said {guess}")`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COMPETITION', blurb: 'The Presidential AI Challenge, now named the Presidential SI Challenge, explained from the official 2027 rules: teams, tracks, the PDF and video, scoring and the deadlines.' },
  slug: 'presidential-ai-challenge-guide',
  code: 'pacg',
  accent: '#4A520C',
  accentRationale: 'Presidential AI Challenge guide: the allocated deep olive #4A520C, the green of a federal seal ribbon, contrast 7.91, 7.44 and 6.81 on the three paper tints',
  pageType: 'market',
  market: US,
  routeLabel: 'Presidential AI Challenge guide',
  title: 'Presidential AI Challenge Guide: 2027 Rules, Dates, Scoring',
  description: 'The Presidential AI Challenge, renamed the Presidential SI Challenge, from the official 2027 rules: teams, Team Leaders, tracks, the PDF, the video and scoring.',
  ogDescription: 'Teams of K-12 students with an adult Team Leader, a 10-page PDF and a 4-minute video, scored out of 100. The official 2027 cycle rules and dates, plus a nine-week plan.',
  twitterDescription: 'The Presidential AI (now SI) Challenge explained from the official 2027 rules.',
  pageName: 'Presidential AI Challenge Guide',
  webPageDescription: 'A guide for US students, parents and teachers to the Presidential AI Challenge, renamed the Presidential SI Challenge, built from the official 2027 cycle pages, with a plan and a worked accuracy check.',
  courseDescription: 'Live online AI and machine learning classes for US students in grades K to 12 who want the skills behind a Presidential AI Challenge project, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Presidential AI Challenge',
  navLinks: [
    { href: '#name', label: 'The new name' },
    { href: '#teams', label: 'Teams' },
    { href: '#dates', label: '2026 to 2027 dates' },
    { href: '#deliver', label: 'PDF and video' },
    { href: '#score', label: 'Scoring' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades K to 12 &middot; Team projects with an adult leader',
  h1: 'Presidential AI Challenge guide',
  lede: 'The Presidential AI Challenge asks K-12 teams to use artificial intelligence on a real problem in their community, then write it up and show it on video. Since September 29, 2026 the organisers call it the Presidential SI Challenge, after a federal order replaced the term AI with Super Intelligence. This guide reads the official 2027 cycle pages closely: who may enter, why every team needs an adult Team Leader, what goes in the 10-page PDF and the 4-minute video, how the 100 points are split, and a nine-week plan our teachers built around those rules.',
  secondaryCta: { href: '#plan', label: 'See the nine-week plan' },
  wa: 'Hello Modern Age Coders, my child in the US is entering the Presidential AI Challenge and wants to learn the AI skills for the project. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; AI taught from the maths up',
  spec: [
    ['Who', 'K-12 students and teachers'],
    ['Teams', '1 to 5, or 1 to 4, by grade'],
    ['Leader', 'An adult aged 21 or over'],
    ['Tracks', 'Standard or Trailblazer'],
    ['Write-up', 'One PDF, up to 10 pages'],
    ['Video', 'Up to 4 minutes'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'The Presidential AI Challenge, renamed the Presidential SI Challenge on September 29, 2026, is a federal K-12 competition where student teams use AI to tackle a community problem. Each team needs an adult Team Leader, submits one PDF of up to 10 pages plus a title page and a video of up to 4 minutes, and is scored out of 100. For the 2027 cycle, registration closes December 18, 2026 and projects are due December 23, 2026, both at 5:00 p.m. Eastern. Modern Age Coders teaches this live online for US students, in a batch or one to one, and the first class is free.',

  picks: {
    eyebrow: 'Learn the AI behind the project',
    h2: 'Three courses for a Presidential AI Challenge team member',
    lede: 'The Challenge rewards students who understand the method they use, not students who only name a tool. These courses teach that understanding.',
    items: [
      { course: 'ai-ml-masterclass-teens', code: 'PAC / 01', title: 'AI and machine learning for teens', note: 'Ages 13 to 18. Train, test and explain real models in Python.' },
      { course: 'teens-ai-tools-mastery-course', code: 'PAC / 02', title: 'AI tools for teens', note: 'Ages 13 to 18. Age-appropriate tools, used and checked properly.' },
      { course: 'ai-literacy-for-kids-course', code: 'PAC / 03', title: 'AI literacy for kids', note: 'Ages 8 to 14. How AI works, for elementary and middle school teams.' }
    ]
  },

  sections: [
    {
      id: 'name', tint: 'tint', eyebrow: 'AI or SI',
      h2: 'Why the Presidential AI Challenge is now the Presidential SI Challenge',
      lede: 'Families still search for the old name, and the official pages now use the new one. Both refer to the same competition.',
      body: [
        { kind: 'table', caption: 'How the Challenge got its name and its new name, from the White House and ORISE pages (read 17 October 2026)', head: ['When', 'What the official record says'], rows: [
          ['April 2025', 'Executive Order 14277 directed a task force to plan a Presidential Artificial Intelligence Challenge with "multiple age categories, distinct geographic regions for competition, and a variety of topical themes".'],
          ['2025 to 2026', 'The first cycle ran, with state, regional and national champions listed on the official winners page.'],
          ['September 29, 2026', 'A new order, "Inaugurating the Era of Super Intelligence", told federal agencies to use "Super Intelligence" and "SI" in place of "Artificial Intelligence" and "AI".'],
          ['From that date', 'The challenge site states that "the Challenge will be referred to as the Presidential SI Challenge".'],
          ['October 2026', 'The ai.gov address now forwards to si.gov, which links the official challenge site run by ORISE.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What changed for students',
          left: [
            'Only the vocabulary. The rules for the 2027 cycle still ask students to study, build or use artificial intelligence to solve a problem; they simply call it SI. A project about machine learning, computer vision or a chatbot fits exactly as it did before.',
            'In a written entry, use the official name of the Challenge, but describe your own method in plain technical words. A judge wants to know whether you trained a classifier or prompted a language model, whatever the umbrella term.'
          ],
          rightH3: 'Where the real pages are',
          right: [
            'The official home is orise.orau.gov/si-challenge, with eligibility, dates, scoring guides, an FAQ and a downloadable Guidebook for Participation. Questions go to the Challenge email address listed there.',
            'Several unofficial sites and posts still describe the 2025 rules. When a detail matters, such as a deadline or a page limit, check it against the official page for the current cycle.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://orise.orau.gov/si-challenge/" rel="noopener" target="_blank">Presidential SI Challenge home</a>, <a class="ag-inline-link" href="https://www.whitehouse.gov/presidential-actions/2026/09/inaugurating-the-era-of-super-intelligence/" rel="noopener" target="_blank">order of September 29, 2026</a> and <a class="ag-inline-link" href="https://www.whitehouse.gov/presidential-actions/2025/04/advancing-artificial-intelligence-education-for-american-youth/" rel="noopener" target="_blank">order of April 2025</a>, read 17 October 2026. Modern Age Coders has no link to the Challenge, the White House or ORISE; we teach the skills.' }
      ]
    },
    {
      id: 'teams', tint: 'deep', eyebrow: 'Who can enter',
      h2: 'Team sizes, grade bands and the Team Leader rule',
      lede: 'Entry is by team, and every team is registered by one adult. This is the rule that most changes how a family plans.',
      body: [
        { kind: 'table', caption: 'Presidential SI Challenge categories for the 2027 cycle, from the official Eligibility page', head: ['Category', 'Who', 'Team size'], rows: [
          ['Elementary Student', 'Grades K-5, with parental consent', '1-5 students and one Team Leader'],
          ['Middle School Student', 'Grades 6-8, with parental consent', '1-4 students and one Team Leader'],
          ['High School Student', 'Grades 9-12, with parental consent', '1-4 students and one Team Leader'],
          ['Educator', 'Full-time K-12 classroom or homeschool teachers aged 21 or over', '1-3 educators']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Who may be a Team Leader',
          left: [
            'The Eligibility page sets "Age Requirement: 21 years or older" and a professional requirement: a full-time public, private or homeschool teacher, a leader of an approved community group such as a 4-H club, scout group or Boys and Girls Club, or a principal investigator on an eligible National Science Foundation grant.',
            'A homeschool parent can qualify as a teacher with one of three proofs for the 2026-2027 school year, such as a letter of intent to homeschool dated after July 1, 2026.'
          ],
          rightH3: 'Rules that surprise families',
          right: [
            'The FAQ says a team cannot consist of just siblings and their parent, and that "Teams with only one student must have a teacher, from the same school as the student, as the Team Leader."',
            'Grades cannot mix: a 6th grader and a 9th grader cannot share a team. Each student joins one team only, and community club members must live in the same or a neighboring county.'
          ] },
        { kind: 'p', mt: true, html: 'Every student, educator and Team Leader must be a U.S. citizen, a U.S. national (American Samoa) or a lawful permanent resident, and the FAQ adds that students must attend school in the 50 states, the District of Columbia, a U.S. territory, a Department of War Education Activity school, a Tribally Controlled School or a Bureau of Indian Education school. Proof of eligibility is checked at the state, regional and national levels.' },
        { kind: 'p', mt: true, html: '<b>Where a tutor fits, and where not.</b> The FAQ states: "Only one adult may be the Team Leader for all teams. No other adults will be recognized by the Challenge." It also says a team may work with local mentors with permission from the students&rsquo; parents or legal guardians. Our teachers do neither job. We teach a student the AI and Python behind their idea in ordinary lessons, and the student brings that skill to the team their own teacher or club leader runs.' }
      ]
    },
    {
      id: 'dates', tint: 'tint', eyebrow: 'The calendar',
      h2: 'Presidential AI Challenge 2027 cycle: every published date',
      lede: 'These dates are for the 2027 Challenge, which runs through the 2026 to 2027 school year. A later cycle will publish its own calendar on the official site.',
      body: [
        { kind: 'table', caption: 'The 2027 cycle calendar, from the official Important Dates and Competition Tiers pages (read 17 October 2026)', head: ['Date (2027 cycle)', 'What happens'], rows: [
          ['Tuesday, October 13, 2026', 'Online registration opens'],
          ['Mondays from October 19 to December 21, 2026, plus Wednesday, December 16', 'Virtual office hours, 7:00 to 8:00 p.m. Eastern; under-18s attend only with their Team Leader'],
          ['Friday, December 18, 2026, 5:00 p.m. Eastern', 'Registration deadline (2:00 p.m. Pacific)'],
          ['Wednesday, December 23, 2026, 5:00 p.m. Eastern', 'Project submission deadline'],
          ['February 11 to 15, 2027', 'State Champions announced, no later than February 15'],
          ['March 4 to April 8, 2027', 'State Champions present updated projects to a virtual panel'],
          ['April 14 to 20, 2027', 'Regional Champions announced, no later than April 20'],
          ['June 6 to 9, 2027', 'National Championships in Washington, DC']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The two deadlines are five days apart',
          left: [
            'Registration closes on December 18 and submission closes on December 23. The FAQ is blunt that a team registered late can be entered in the system but will not be allowed to submit a project, so the Team Leader must register first.',
            'Our count: from registration opening on October 13 to the submission deadline on December 23, 2026 is 71 days, about ten weeks, so a team that starts in late November has under four weeks left.'
          ],
          rightH3: 'Converting 5:00 p.m. Eastern',
          right: [
            'The deadline is 4:00 p.m. Central, 3:00 p.m. Mountain, 2:00 p.m. Pacific, 1:00 p.m. Alaska and 12:00 noon in Hawaii on December 23, 2026, our conversion for standard time in winter.',
            'Teams in Arizona, which does not observe daylight saving time, are on 3:00 p.m. in December, the same as Mountain time.'
          ] }
      ]
    },
    {
      id: 'tracks', tint: 'deep', eyebrow: 'Two tracks',
      h2: 'Standard Track or Trailblazer Track?',
      lede: 'Student teams choose a track when the Team Leader submits the project, not at registration, so a team can decide once the idea is clear.',
      body: [
        { kind: 'table', caption: 'The two student tracks in the 2027 rules', head: ['', 'Standard Track', 'Trailblazer Track'], rows: [
          ['Who', 'Elementary, middle and high school teams', 'Middle and high school teams only'],
          ['Problem', 'A challenge affecting students, their families or their communities', 'A challenge or opportunity affecting the country'],
          ['Bar to enter', 'A positive impact or an innovative solution', '"must have nationwide impact AND be novel (new or unique)"'],
          ['Extra section', 'None', 'Research supporting the novel approach'],
          ['Eligibility check', 'None', 'Originality and national reach are checked before scoring']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How we help a student choose',
          left: [
            'Ask one question: can the team show evidence that nobody has solved this the same way? If a quick search turns up three similar apps, the Standard Track is the honest home, and a well-researched local project there is a strong entry.',
            'The Trailblazer Track suits a team that has already built something and found a real gap. It rewards research on existing tools more heavily, so the team must have done that research.'
          ],
          rightH3: 'Kinds of AI the rules name',
          right: [
            'The official page encourages any age-appropriate technology, listing generative SI, large language models, agentic and multi-agent systems, machine learning, deep learning, natural language processing, robotics, computer vision, expert systems, decision trees and neural networks.',
            'For a first project, a simple trained classifier or a carefully tested chatbot is plenty. Depth of understanding scores; the length of the tool list does not.'
          ] }
      ]
    },
    {
      id: 'deliver', tint: 'tint', eyebrow: 'What to submit',
      h2: 'The PDF and the 4-minute video',
      lede: 'Each student team submits two things through the registration portal: a written proposal and a video. The format rules are strict and easy to check.',
      body: [
        { kind: 'table', caption: 'Submission format for student teams, from the official Requirements and Deliverables page', head: ['Item', 'Rule (2027 cycle)'], rows: [
          ['Format', 'A single PDF, no larger than 30 MB'],
          ['Length', '"no more than 10 pages PLUS a title page (11 pages total)"'],
          ['Type size', '12-point or larger'],
          ['Title page', 'Project title, team members with school and grade, the Team Leader&rsquo;s school or group, and a video link that needs no password'],
          ['Sections', 'Summary (one page at most), Objective, Solution, Safety, Learning Achievements, Next Steps, References and Acknowledgements'],
          ['Video', '"The video entry must be a single, 4-minute maximum, video." Maximum file size 300 MB.'],
          ['Originality', '"100% of the project\'s content must be original content and created specifically for the Challenge after August 1, 2026."']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Video details judges enforce',
          left: [
            '"Judges will only view the first four minutes of the video." Credits, if any, count inside the four minutes. A phone video should be shot horizontally, and a recorded team video call is allowed.',
            'Someone outside the team may film and edit, but the people on screen and the content must come from team members. Test the link on several computers before the deadline.'
          ],
          rightH3: 'Code, tools and cost',
          right: [
            'The FAQ says "There is no requirement that the code be shared", though a link to the code can strengthen a project. A physical build is optional; a fully digital project is fine.',
            'Paid tools are allowed and "At this time, there are no tools that are prohibited." Costs are not reimbursed, and many free tools work well for a student project.'
          ] },
        { kind: 'p', mt: true, html: 'The single most important honesty rule is in the FAQ: a team can be disqualified for "academic dishonesty such as not disclosing the use of an SI tool". Every tool used for the project and for writing the submission belongs in the References and Acknowledgements section.' }
      ]
    },
    {
      id: 'score', tint: 'deep', eyebrow: 'Scoring',
      h2: 'How the Standard Track is scored out of 100',
      lede: 'At least three judges score each eligible project at the state level with the published guides. These are the Standard Track points for student teams.',
      body: [
        { kind: 'table', caption: 'Standard Track scoring guide for student teams, 2027 cycle (official Scoring Guides page)', head: ['Criterion', 'Points', 'What judges look for'], numCols: [1], rows: [
          ['Objective Definition and Relevance', '10', 'A real school or community need, and why it matters'],
          ['SI Solution', '20', 'How the AI would work in practice, in detail'],
          ['Research and Accuracy', '15', 'Age-relevant research into the need and the technology'],
          ['Safety', '10', 'Physical and emotional safety of users, and data security'],
          ['Process and Learning', '15', 'Planning, roles, what was learned, challenges overcome'],
          ['Use and Validation of SI Concepts', '10', 'Sound, realistic and justified use of AI'],
          ['Originality and Creativity', '10', 'An innovative and thoughtful approach'],
          ['Video Quality', '10', 'Clear, engaging, shows feasibility and potential'],
          ['Total', '100', 'As published: "Total: 100 points"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Ties, and the Trailblazer weights',
          left: [
            'Ties on the Standard Track are broken first by Originality and Creativity and second by SI Solution, so those two rows matter beyond their points.',
            'The Trailblazer guide shifts weight: Use and Validation of SI Concepts rises to 20, Research Supporting Novelty is 15 and is the first tie break, and originality moves out of the points into an eligibility check that happens before scoring.'
          ],
          rightH3: 'What the numbers tell a team',
          right: [
            'Our reading of the Standard Track guide: the video row is worth 10, while the SI Solution row alone is worth 20, and two more rows judge research and the soundness of the AI. A polished video cannot rescue a vague method.',
            'Safety is a full 10 points on its own row. Teams that collect photos, voices or names from other students should say exactly how that data is protected.'
          ] }
      ]
    },
    {
      id: 'budget', tint: 'tint', eyebrow: 'Our method',
      h2: 'A page budget that follows the points',
      lede: 'Ten pages fill fast. We give each section space in rough proportion to the points it earns. This budget is ours, not an official template.',
      body: [
        { kind: 'table', caption: 'A 10-page plan for a Standard Track PDF (ours; title page not counted)', head: ['Section', 'Pages', 'Linked criteria'], numCols: [1], rows: [
          ['Summary', '1', 'Every criterion; the rules cap it at one page'],
          ['Objective', '1', 'Objective Definition and Relevance'],
          ['Solution', '3', 'SI Solution, Use and Validation, Originality'],
          ['Safety', '1', 'Safety'],
          ['Learning Achievements', '2', 'Process and Learning, Research and Accuracy'],
          ['Next Steps', '1', 'Process and Learning'],
          ['References and Acknowledgements', '1', 'Research and Accuracy, and tool disclosure']
        ] },
        { kind: 'p', mt: true, html: 'Our arithmetic: 1 + 1 + 3 + 1 + 2 + 1 + 1 = 10 pages, the limit, with the Solution section given three because the SI Solution row, the largest on the guide at 20 points, is judged mostly there, along with originality and the validity of the method. Teams that run long usually do so in the Objective; one tight page with a single number from real research beats three pages of background.' }
      ]
    },
    {
      id: 'check', tint: 'deep', eyebrow: 'A worked example',
      h2: 'Proving the AI works: a ten-line accuracy check',
      lede: 'The Learning Achievements section asks how the team tested any AI output and how accurate it was. Here is how a student can answer with evidence, using our own example project.',
      body: [
        { kind: 'p', html: 'Our example: a middle school team trains an image model to sort photos of lunchroom waste into recycle or trash. Before trusting it, the students sort ten new photos by hand, then compare the model&rsquo;s answers with their own. The script uses only plain Python, so it runs in any editor.' },
        { kind: 'code', label: 'Python &middot; compare the model with the team', lang: 'python', code: ACCURACY, note: 'Output: Accuracy: 8/10 = 80%, then photo 3 (we said recycle, model said trash) and photo 6 (we said trash, model said recycle). Ten photos is our toy number; a real test set should be larger and should never include photos the model was trained on.' },
        { kind: 'two', mt: true,
          leftH3: 'What to write from this',
          left: [
            'A sentence a judge can check: "On 10 photos the model had never seen, it agreed with our labels 8 times (80%). It confused a greasy pizza box and a juice carton, so we added 40 more photos of those two items and tested again."',
            'That one paragraph answers the accuracy question, shows a challenge overcome and gives the Next Steps section something real to say.'
          ],
          rightH3: 'Why the error list matters most',
          right: [
            'The accuracy figure is a summary; the list of mistakes is the learning. Students who look at which photos failed find the pattern, and that pattern is what the Use and Validation criterion rewards.',
            'This is the lesson we teach in class: never report a model you have not tested on fresh data, and always say what it gets wrong.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'Nine weeks',
      h2: 'A nine-week plan to the December 23, 2026 deadline',
      lede: 'Our plan for a team that starts in mid October, with about three hours a week per student including one class. Dates are for the 2027 cycle.',
      body: [
        { kind: 'table', caption: 'Nine weeks to a Presidential SI Challenge submission (ours)', head: ['Week of', 'Goal', 'Finished when'], rows: [
          ['October 19, 2026', 'Team Leader registers; pick a real problem', 'Registration confirmed and consent forms collected'],
          ['October 26', 'Research the need', 'One fact from a real source, written down with its link'],
          ['November 2', 'Choose the AI method', 'One sentence naming the method and why it fits'],
          ['November 9 and 16', 'Build a first version', 'Something that runs end to end, however rough'],
          ['November 23', 'Test on fresh data', 'An accuracy figure and a list of mistakes'],
          ['November 30', 'Improve and retest', 'A second figure, and what changed'],
          ['December 7', 'Write the PDF', 'All sections drafted inside the page budget'],
          ['December 14', 'Record the video and cut it', 'Under four minutes, link tested on three computers'],
          ['December 21', 'Submit early', 'Submitted before December 23, every tool disclosed']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Grades K to 5', p: 'A teacher-led idea with a ready-made tool, such as an image sorter trained in a browser. The learning write-up matters more than the code.' },
          { h3: 'Grades 6 to 8', p: 'A small classifier or a tested chatbot with clear rules. Students write and run the accuracy check themselves.' },
          { h3: 'Grades 9 to 12', p: 'A trained model in Python with a real test set, or a Trailblazer idea backed by research on what already exists.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'Where a student is before the Challenge',
    lede: 'A rough map of AI skill, from hearing the word to defending a method in front of judges.',
    table: { caption: 'Four steps of AI readiness for a Challenge entry (ours)', head: ['Step', 'The student can'], rows: [
      ['1. Aware', 'Explain in their own words what an AI model does with examples'],
      ['2. User', 'Use an age-appropriate tool and notice when it is wrong'],
      ['3. Tester', 'Measure a model on fresh data and report its mistakes'],
      ['4. Builder', 'Train, test, improve and explain a model for a real problem']
    ] },
    left: { h3: 'For parents', ps: [
      'The Challenge counts learning as much as results. A team at step 2 in October can reach step 3 by December, and the write-up rewards that growth.',
      'Check the age rules of every AI tool your child uses; the Challenge itself asks that tools follow their terms of service and are supervised.'
    ] },
    right: { h3: 'For students', ps: [
      'Keep a log from the first week: each tool, what you asked it and what you kept. It becomes your References section.',
      'Test before you trust. A single honest accuracy figure is worth more to a judge than a page of promises.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for future AI builders, kindergarten to grade 12',
    lede: 'Live online lessons with a regular teacher, matched to the grade bands the Challenge uses.',
    bands: [
      { num: 'I', h3: 'Elementary', sub: 'Grades K to 5', courses: [
        { code: 'PAC / ELM / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Logic first, in blocks.' },
        { code: 'PAC / ELM / 02', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Projects that feel finished.' },
        { code: 'PAC / ELM / 03', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Blocks to small apps and AI.' }
      ] },
      { num: 'II', h3: 'Middle school', sub: 'Grades 6 to 8', courses: [
        { code: 'PAC / MID / 01', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Ages 9 to 12, typed code.' },
        { code: 'PAC / MID / 02', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'The numbers inside a model.' },
        { code: 'PAC / MID / 03', slug: 'orange-data-mining-visual-machine-learning-course-for-teens', title: 'Visual machine learning', blurb: 'Models without code first.' }
      ] },
      { num: 'III', h3: 'High school', sub: 'Grades 9 to 12', courses: [
        { code: 'PAC / HS / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Real datasets, honest charts.' },
        { code: 'PAC / HS / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language most AI uses.' },
        { code: 'PAC / HS / 03', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon prep', blurb: 'Build and pitch on a deadline.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lesson times',
    h2: 'AI lessons that fit a fall semester',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school in your own time zone.' },
      { time: 'Weekends', l: 'Longer build sessions before the December rush.' },
      { time: '1-on-1', l: 'Paced to one student&rsquo;s part of the team project.' }
    ],
    cells: [
      { h3: 'Concepts first', p: 'What a model learns, and how it fails.' },
      { h3: 'Real Python', p: 'Code the student can read aloud.' },
      { h3: 'Testing habit', p: 'Fresh data, accuracy, error lists.' },
      { h3: 'Writing help', p: 'Explaining a method in plain words.' },
      { h3: 'Any state', p: 'Online, from Alaska to Puerto Rico.' },
      { h3: 'Group or solo', p: 'Batches of fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Projects built by our students',
  projectsLede: 'From first models to finished apps, these are learners&rsquo; own builds. More are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What parents wrote on Google, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'The Challenge charges no entry fee, and its FAQ notes that project costs are the team&rsquo;s own. Our lessons are billed monthly in US dollars, so a student can learn through the fall build and stop after the December deadline.',
    free: ['A free first lesson', 'Bring the team&rsquo;s idea', 'No card details'],
    group: ['Fifteen to twenty learners', 'A regular AI teacher', 'Pick a batch that fits', 'Billed monthly'],
    one: ['One student, one teacher', 'Built around the project', 'Your own pace']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Presidential AI Challenge: common questions',
    items: [
      { q: 'Is the Presidential AI Challenge the same as the Presidential SI Challenge?', a: 'Yes. After an order signed on September 29, 2026 replaced the term AI with SI in federal use, the official site says the Challenge will be referred to as the Presidential SI Challenge. The competition and its rules continue.' },
      { q: 'Who can enter the 2027 Presidential SI Challenge?', a: 'K-12 students in elementary, middle and high school categories, plus full-time K-12 educators. Every participant must be a U.S. citizen, U.S. national or lawful permanent resident at an eligible U.S. school.' },
      { q: 'Can my child enter alone?', a: 'Only with a teacher from the same school as Team Leader, the FAQ says. Otherwise teams are 1 to 5 students in grades K-5 or 1 to 4 students in grades 6-8 or 9-12, led by one adult.' },
      { q: 'Who can be a Team Leader?', a: 'An adult aged 21 or older who is a full-time public, private or homeschool teacher, a leader of an approved community group such as 4-H or scouts, or an eligible NSF principal investigator.' },
      { q: 'What are the 2027 cycle deadlines?', a: 'Registration closes Friday, December 18, 2026 and projects are due Wednesday, December 23, 2026, both at 5:00 p.m. Eastern. A team registered late cannot submit.' },
      { q: 'How long can the video be?', a: 'Four minutes at most, in a single video. The official page says judges will only view the first four minutes, and any credits count inside that time.' },
      { q: 'How many pages is the PDF?', a: 'No more than 10 pages plus a title page, 11 pages in total, at 12-point type or larger, in one PDF no larger than 30 MB.' },
      { q: 'Are AI tools like chatbots allowed?', a: 'Yes. The FAQ says no tools are prohibited at this time, but every tool must be disclosed, and failing to disclose one counts as academic dishonesty. Tools must be age-appropriate and used under their terms.' },
      { q: 'Does our team have to share its code?', a: 'No. The FAQ says there is no requirement that the code be shared, although a link to the code in the PDF can strengthen a project.' },
      { q: 'When are classes held?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How can Modern Age Coders help?', a: 'We teach the AI, Python and testing skills a student needs to contribute to their team. We do not act as Team Leader, register teams or write any part of a submission; the Challenge requires the work to be the students\' own.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US students who want to build with AI and enter competitions.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Every page we have for American families.' },
      { href: '/ai-projects-for-high-school-students', label: 'AI projects for high schoolers', p: 'Project ideas with real depth.' },
      { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge', p: 'The fall app competition by district.' },
      { href: '/ai-and-machine-learning-classes-in-usa', label: 'AI and ML classes in the USA', p: 'Our machine learning teaching.' },
      { href: '/computer-science-extracurriculars', label: 'CS extracurriculars', p: 'Where a Challenge entry fits.' },
      { href: '/best-ai-courses-for-teens-2026', label: 'AI courses for teens', p: 'How the options compare.' },
      { href: '/acsl-competition-preparation', label: 'ACSL competition preparation', p: 'ACSL from the official 2026-27 pages, with original practice problems.' },
      { href: '/picoctf-for-beginners', label: 'picoCTF for beginners', p: 'picoCTF, now CyLab Security Academy, for US beginners aged 13 and up.' },
      { href: '/cyberpatriot-preparation', label: 'CyberPatriot preparation', p: 'CyberPatriot 19 (2026-27) explained from the official pages, with a practice plan.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us the problem your child&rsquo;s team chose. In the first lesson the teacher checks what AI method would suit it and what the student needs to learn to build and test it.',
    readFirst: 'Curious about our approach before booking? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through a typical lesson, and the <a class="ag-inline-link" href="/courses">course list</a> has every syllabus in full.',
    note: 'Our teachers work online from India and teach US students in their own time zones. A WhatsApp message usually gets the quickest reply.',
    formNote: 'The first lesson is free. No payment card asked.'
  },

  footer: {
    cols: [
      { h4: 'Build with AI', links: [
        { href: '/ai-projects-for-high-school-students', label: 'AI projects for high schoolers' },
        { href: '/ai-and-machine-learning-classes-in-usa', label: 'AI and ML classes' },
        { href: '/best-ai-courses-for-teens-2026', label: 'AI courses for teens' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' },
        { href: '/hackathons-for-high-school-students', label: 'Hackathons for high schoolers' },
        { href: '/computer-science-extracurriculars', label: 'CS extracurriculars' }
      ] }
    ],
    bottomRight: 'Test before you trust'
  },

  personalityCss: `
.ag-root.ag-pacg .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-pacg .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-pacg .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-pacg .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-pacg .ag-band-head h3 { letter-spacing: 0.01em; }
.ag-root.ag-pacg .ag-slots { gap: 1.1rem; }
`,

  dossier: {
    curriculumAuthority: 'Presidential SI Challenge (formerly Presidential AI Challenge), official ORISE pages for the 2027 cycle and White House orders, read raw on 17 October 2026: renaming on September 29, 2026; EO 14277; eligibility (Team Leader 21+, teacher or approved community leader; K-5 teams of 1-5, 6-8 and 9-12 teams of 1-4, educators 1-3; citizenship, national or LPR); dates (registration October 13 to December 18, 2026, submission December 23, 2026, 5:00 p.m. Eastern; state, regional and national tiers through June 6-9, 2027); tracks; PDF and video rules; Standard and Trailblazer scoring guides; FAQ rulings on solo teams, siblings, tools, code and disclosure.',
    localProject: 'Our nine-week plan, our page budget weighted by the published points (1 + 1 + 3 + 1 + 2 + 1 + 1 = 10 pages), our accuracy-check script with ten sample labels (8/10 = 80%), our 71-day count from October 13 to December 23, 2026, and our time-zone conversion of 5:00 p.m. Eastern. Lesson family: measuring a model honestly.',
    requiredMentions: ['the Challenge will be referred to as the Presidential SI Challenge', 'September 29, 2026', 'Age Requirement: 21 years or older', 'Teams with only one student must have a teacher', 'Friday, December 18, 2026, 5:00 p.m. Eastern', 'Wednesday, December 23, 2026, 5:00 p.m. Eastern', 'no more than 10 pages PLUS a title page (11 pages total)', 'Judges will only view the first four minutes of the video.', 'Total: 100 points', 'At this time, there are no tools that are prohibited.', 'Accuracy: 8/10 = 80%', 'June 6 to 9, 2027'],
    sources: [
      { claim: 'Renaming, EO 14277, overview of student and educator projects.', url: 'https://orise.orau.gov/si-challenge/' },
      { claim: 'Eligibility: Team Leader, categories, team sizes, citizenship.', url: 'https://orise.orau.gov/si-challenge/about/eligibility.html' },
      { claim: 'Important dates for the 2027 cycle.', url: 'https://orise.orau.gov/si-challenge/about/timeline.html' },
      { claim: 'PDF and video requirements, originality date.', url: 'https://orise.orau.gov/si-challenge/complete-the-challenge/requirements.html' },
      { claim: 'Competition tiers, regions, two champions for four states.', url: 'https://orise.orau.gov/si-challenge/complete-the-challenge/competition-tiers.html' },
      { claim: 'Scoring guides and tie breaks.', url: 'https://orise.orau.gov/si-challenge/resources/scoring-guides.html' },
      { claim: 'FAQ: solo teams, siblings, mentors, tools, code, disqualification.', url: 'https://orise.orau.gov/si-challenge/resources/faq.html' },
      { claim: 'Order of September 29, 2026 replacing AI with SI.', url: 'https://www.whitehouse.gov/presidential-actions/2026/09/inaugurating-the-era-of-super-intelligence/' }
    ],
    rejectedClaims: [
      'Cash prize amounts for National Champions: published in the Official Rules, left out because US pages print no typed dollar figures and prizes are not the point of the guide.',
      'Names of the First Lady, officials or past winners: not used; the page links to the official winners page instead.',
      'The regional assignment of every state: published, summarised as five regions rather than reprinted in full.',
      'That our lessons improve a team\'s chance of becoming a State Champion: refused; judging is by the Challenge\'s own panels.',
      'That a Modern Age Coders teacher can serve as Team Leader or registered mentor: refused; the rules recognise one adult Team Leader only.',
      'Any affiliation with the Challenge, ORISE, the Department of Energy or the White House: none, and the page says so.'
    ]
  }
};
