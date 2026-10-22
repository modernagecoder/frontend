'use strict';
// Waterloo AIF guide (ag- admissions door; Canada cluster Plan 2, row 58).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Source, fetched raw with curl on 22 October 2026 (copy in keyword-research-2026-09/ca/src-pilots/waterloo-aif-guide/uw-aif.html,
// matching the research copy ca/src/admissions/uw-admission-information-form.html; facts-schools-contests.md 206, 208, 209):
//  - uwaterloo.ca/future-students/admissions/admission-information-form: "some programs require an Admission Information Form
//    and/or supplementary information forms in addition to your grades."; "These forms allow you to share your interests,
//    experiences, and abilities. The information is also used to award scholarships in some programs."; which programs (All
//    Engineering programs excluding Architecture, All programs in the Faculty of Mathematics, Computing and Financial Management;
//    CAP, Optometry, Pharmacy and Social Work use a series of short supplementary forms instead); deadlines (programs other than
//    those listed "February 15, 2027", Engineering "February 1, 2027", Engineering AND Math "(February 1, 2027 at 11:59 p.m. Eastern
//    Time)", Pharmacy "January 20, 2027", Social Work "TBD"); "Submissions will not be reviewed after the deadline."; Engineering
//    "We're not looking for specific extracurricular activities"; "Be honest and authentic."; Software Engineering SIF ("solving
//    open problems, debugging code, testing code, and learning new software languages"); Faculty of Mathematics: AIF required and
//    SIF, "looking for well-rounded students who have had meaningful experiences outside the classroom", SIF "asks about any Waterloo
//    mathematics contests"; submit "only once"; "You can't edit or add information once you've submitted the AIF."; screenshot tip;
//    the five questions and "(150-word limit)"; question 5 hours "between January 1, 2026 and December 31, 2026" and "For most
//    students, this equates to the second semester of Grade 11 (or equivalent), your summer break, and the first semester of Grade
//    12 (or equivalent)."; preview without submitting; "your application will not be reviewed" if not submitted; review by trained
//    people "and by artificial intelligence (AI)", "a second human scorer reviews the submission", identifying information removed,
//    "data is not sent to any third-party AI services"; AI answers question ("no one (including ChatGPT!) knows you better than you
//    do", "we reserve the right to deny admission or withdraw your Offer of Admission"); "You must complete and submit the AIF on your
//    own."; "reasonable grounds to believe your AIF was written by someone other than you"; save and return ("The AIF is the only
//    form you can save and return to later"); "Information in links (such as links to awards or portfolios) will not be reviewed.";
//    no spell check in the form; "The character limit includes spaces, punctuation, and special characters."
//  - cemc.uwaterloo.ca/contests/how-contests-work (facts-schools-contests.md 112, research copy ca/src/cemc/how-contests-work.html):
//    "It is not possible for students to individually register for a contest".
// Not used: the student-written Missing Manual article on the AIF (fetched, but it is not official wording and its program list
// differs from the official page). No sample answers are given anywhere on the page, on purpose.
// Our own material, labelled on the page: the hours_in_window and word_check functions in Python and their run (Python 3.13
// prints the five log lines, "Total inside 2026  482 hours" and "162 words, 12 over the 150-word limit"; edge cases checked), the
// invented activity log, the evidence ledger, the ten-week timeline, the four honesty tests.
// Lesson family: date ranges and clipping (count only what falls inside a window).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const HOURS_PY = `# Hours inside the AIF window, and a word-limit check (ours)
from datetime import date

WINDOW_START = date(2026, 1, 1)    # the window Waterloo's AIF page gives for question 5
WINDOW_END = date(2026, 12, 31)

def hours_in_window(start, end, hours_per_week):
    """Count only the part of an activity that falls inside the window."""
    first = max(start, WINDOW_START)
    last = min(end, WINDOW_END)
    if last < first:
        return 0                                  # the activity missed the window entirely
    days = (last - first).days + 1                # both end dates count
    return round(hours_per_week * days / 7)

def word_check(draft, limit=150):
    words = len(draft.split())
    if words <= limit:
        return f"{words} words, {limit - words} to spare"
    return f"{words} words, {words - limit} over the {limit}-word limit"

log = [
    ("Robotics club, build season",       date(2025, 9, 8),  date(2026, 3, 27), 4),
    ("Bus-times app for my school",       date(2026, 2, 2),  date(2026, 8, 28), 3),
    ("Part-time job, grocery store",      date(2026, 6, 29), date(2026, 12, 31), 10),
    ("Math help for Grade 9 students",    date(2024, 10, 1), date(2026, 12, 31), 1.5),
    ("Summer camp counsellor, 2025",      date(2025, 7, 2),  date(2025, 8, 22), 30),
]
total = 0
for name, start, end, per_week in log:
    h = hours_in_window(start, end, per_week)
    total += h
    print(f"{name:34} {h:4} hours")
print(f"{'Total inside 2026':34} {total:4} hours")
print(word_check("draft " * 162))`;

const AIF = '<a class="ag-inline-link" href="https://uwaterloo.ca/future-students/admissions/admission-information-form" rel="noopener" target="_blank">Admission Information Form (AIF) and other supplementary forms</a>';

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'WATERLOO AIF', blurb: 'The Waterloo Admission Information Form from Waterloo&rsquo;s own page: who needs it, the five questions, the 2027 deadlines, the AI rule, and an hours calculator of our own.' },
  slug: 'waterloo-aif-guide',
  code: 'wag',
  accent: '#25703E',
  accentRationale: 'Waterloo AIF guide, Canada: a muted fern green, #25703E, allocated for this row; 6.1 RGB units from the nearest site accent (#247038) and at least 14 from the other Canada accents, contrast 5.72 on the paper #FBF8F2 and 4.92 on the deepest tint',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Waterloo AIF guide',
  title: 'Waterloo AIF Guide: Questions, Deadline, AI Rule, Hours',
  description: 'The Waterloo Admission Information Form, read from the official page: who needs it, the five questions, the 2027 deadlines, the AI rule and how to count hours.',
  ogDescription: 'What the Waterloo AIF asks, who has to submit it, when it is due for 2027 entry and how Waterloo reviews it, read from the university&rsquo;s own page on 22 October 2026, plus a small hours calculator of ours.',
  twitterDescription: 'The Waterloo AIF from the official page: questions, deadlines, the AI rule and counting hours.',
  pageName: 'Waterloo AIF Guide',
  webPageDescription: 'A guide for students and parents to the University of Waterloo Admission Information Form, built from Waterloo&rsquo;s own AIF page, with an original Python tool for counting activity hours inside the form&rsquo;s window.',
  courseDescription: 'Live online coding and math classes for Canadian high school students who want real projects and skills of their own, in a batch or one to one. We never write any part of an application.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'Ontario', href: '/coding-classes-in-ontario' }],
  crumbLabel: 'Waterloo AIF guide',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#who', label: 'Who needs it' },
    { href: '#questions', label: 'The questions' },
    { href: '#rules', label: 'The rules' },
    { href: '#hours', label: 'Counting hours' },
    { href: '#timeline', label: 'Timeline' }
  ],
  eyebrow: 'University of Waterloo &middot; Admission Information Form &middot; 2027 entry',
  h1: 'The Waterloo AIF, explained from Waterloo&rsquo;s own page',
  lede: 'The Admission Information Form is the part of a Waterloo application that grades cannot fill. It is short, it can be submitted once, and Waterloo is explicit that the student must write it. This guide sets out what the official page says: who needs the form, what its five questions ask, when it is due for September 2027 entry, how it is read, and the rules on help and AI. Then it gives one tool of our own, a short program for counting activity hours inside the form&rsquo;s window. We never write or edit an application, and nothing here is a model answer to copy. Waterloo changes the form between cycles, so check its page before you start.',
  secondaryCta: { href: '#questions', label: 'Read the five questions' },
  wa: 'Hello Modern Age Coders, my teen is applying to Waterloo and wants to keep building real coding projects this year. Could we book a free first class?',
  heroNote: '10,000+ learners since 2020 &middot; Projects built and explained by the student &middot; We never write applications',
  spec: [
    ['Who it is for', 'Grade 12 applicants to Waterloo Math or Engineering'],
    ['What we teach', 'Coding, math and project work'],
    ['What we never do', 'Write, draft or edit an application'],
    ['Group', 'Fifteen to twenty students'],
    ['Private', 'One teacher, one student'],
    ['When', 'Evenings or weekend mornings'],
    ['Where', 'Live on video, anywhere in Canada'],
    ['Trial', 'The first class is free']
  ],
  capsuleQ: 'In short',
  capsule: 'The Waterloo Admission Information Form is an online form in the applicant portal: four short answers of up to 150 words each, then an activity chart with 2026 hours. On 22 October 2026 Waterloo required it for every Engineering program except Architecture, every Faculty of Mathematics program and Computing and Financial Management; the page lists February 15, 2027 for programs other than those in its next rows, which covers Math. Modern Age Coders teaches the coding itself live online through Ontario Computer Science Companion, as a group class or one to one.',

  picks: {
    eyebrow: 'Skills worth writing about',
    h2: 'Three courses where students build things of their own',
    lede: 'The form asks what a student has done and learned. These courses give a student work that is genuinely theirs, which they can describe in their own words.',
    items: [
      { course: 'ics3u-ics4u-computer-science-companion-course', code: 'WAG / 01', title: 'Ontario Computer Science Companion', note: 'For ICS3U and ICS4U students: programs written, traced and tested by the student, in Python or Java.' },
      { course: 'ccc-junior-and-senior-preparation-course', code: 'WAG / 02', title: 'CCC Junior and Senior preparation', note: 'Original timed problems in the CCC style, for a student who wants to try the contest through school.' },
      { course: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', code: 'WAG / 03', title: 'Ontario Grade 12 University Math', note: 'Advanced Functions and Calculus and Vectors, the two math courses a Waterloo Math applicant carries.' }
    ]
  },

  sections: [
    {
      id: 'who', tint: 'tint', eyebrow: 'Which programs',
      h2: 'What the AIF is, and who has to submit it',
      lede: 'Waterloo describes the form plainly: &ldquo;some programs require an Admission Information Form and/or supplementary information forms in addition to your grades.&rdquo; It adds that &ldquo;These forms allow you to share your interests, experiences, and abilities. The information is also used to award scholarships in some programs.&rdquo;',
      body: [
        { kind: 'table', caption: 'Supplementary forms by program group, from Waterloo&rsquo;s AIF page (read 22 October 2026)', head: ['Program group', 'What Waterloo asks for'], rows: [
          ['All Engineering programs (excluding Architecture)', 'The AIF and an online video interview, both required for admission; an optional alternate-choice form; a Supplementary Information Form for Software Engineering applicants only'],
          ['All programs in the Faculty of Mathematics, including Computer Science', 'The AIF, required for admission, and a Supplementary Information Form about Waterloo math contests'],
          ['Computing and Financial Management', 'Listed with the Faculty of Mathematics programs that use the AIF'],
          ['Conditional Admission to Pharmacy, Optometry, Pharmacy, Social Work', 'Not the AIF: a series of short supplementary forms in the applicant portal'],
          ['Faculties of Arts, Environment, Health and Science', 'The AIF is not used'],
          ['Architecture; Accounting and Financial Management; Sustainability and Financial Management', 'The AIF is not used']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why Waterloo uses it',
          left: [
            'For Faculty of Mathematics programs, Waterloo says the forms are used &ldquo;because we&rsquo;re looking for well-rounded students who have had meaningful experiences outside the classroom.&rdquo; Its FAQ adds that many programs receive more applications than they can accommodate, and the forms help it learn about applicants &ldquo;who may have very similar grades.&rdquo;',
            'For Engineering, the page is more specific about what it does not want: &ldquo;We&rsquo;re not looking for specific extracurricular activities and do not expect you to have engineering-related experience.&rdquo; It looks instead for time management, interpersonal and leadership skills and a variety of interests.'
          ],
          rightH3: 'What happens without it',
          right: [
            'The FAQ answers this without softening: for programs that require the AIF, if a student does not submit it and any other required forms, &ldquo;your application will not be reviewed.&rdquo; The AIF is not optional extra credit for those programs. It is part of the file.',
            'A student applying to several Waterloo programs completes one AIF, because the questions are the same for every program that uses it. Engineering and Math applicants may still owe extra forms, which the applicant portal lists in a personal checklist.'
          ] },
        { kind: 'source', html: 'Source: University of Waterloo, ' + AIF + ', read 22 October 2026. Modern Age Coders has no tie to the University of Waterloo.' }
      ]
    },
    {
      id: 'deadlines', tint: 'deep', eyebrow: 'September 2027 entry',
      h2: 'AIF deadlines for 2027',
      lede: 'The deadline depends on the programs a student has applied to, and Waterloo warns that &ldquo;Submissions will not be reviewed after the deadline.&rdquo;',
      body: [
        { kind: 'table', caption: 'Supplementary form deadlines on Waterloo&rsquo;s AIF page (read 22 October 2026)', head: ['Programs applied to', 'Deadline'], rows: [
          ['&ldquo;Programs other than those listed in the next rows&rdquo; (no row names the Faculty of Mathematics or Computer Science, so they fall here)', 'February 15, 2027'],
          ['Engineering', 'February 1, 2027'],
          ['Engineering and a Faculty of Mathematics program', 'The Engineering deadline: February 1, 2027 at 11:59 p.m. Eastern Time'],
          ['Pharmacy', 'January 20, 2027'],
          ['Optometry', 'Refer to the Doctor of Optometry website'],
          ['Bachelor of Social Work', 'TBD']
        ] },
        { kind: 'p', mt: true, html: 'Waterloo also recommends completing the forms &ldquo;as soon as possible&rdquo; once a student has applied and received portal instructions. For a student outside Ontario the Eastern Time cut-off matters: 11:59 p.m. Eastern is 10:59 p.m. in Alberta and 9:59 p.m. in British Columbia on 1 February 2027, by the winter offsets (Eastern UTC-5, Alberta UTC-6 all year, British Columbia UTC-7 all year). That conversion is ours; check it against your own clock.' }
      ]
    },
    {
      id: 'questions', tint: 'tint', eyebrow: 'The five questions',
      h2: 'What the AIF asks, question by question',
      lede: 'Waterloo publishes the questions in advance. Each of the first four carries a 150-word limit, and the fifth is an activity chart with hours. We summarise each prompt below; the full wording is on Waterloo&rsquo;s page, and students should answer from that, not from our summary.',
      body: [
        { kind: 'table', caption: 'The AIF questions as published by Waterloo for 2027 entry (read 22 October 2026; prompts summarised, headings and limits quoted)', head: ['Question', 'Heading on Waterloo&rsquo;s page', 'What it asks, in brief', 'Limit'], rows: [
          ['1', 'Tell us about a passion or strong interest of yours', 'How and when the interest began, how long it has lasted, what it taught the student about themselves, and how they will apply that at Waterloo', '150 words'],
          ['2', 'Community involvement', 'A group or community the student belongs to, what they contributed, whether they led or influenced decisions, and how the group is better for it', '150 words'],
          ['3', 'Experience reflection', 'A time the student was treated unfairly or saw someone else treated unfairly, what they did, whether they would act differently now, and how it changed them', '150 words'],
          ['4', 'Goals for Waterloo', 'The main goal for attending, any exposure to the intended field, and whether someone helped them think through alternatives or backup plans', '150 words'],
          ['5', 'Outside the classroom', 'Activities in school, the community or at home, with the hours spent on each between January 1, 2026 and December 31, 2026', 'Hours per activity']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The window for question 5',
          left: [
            'Waterloo is exact about the dates. Students include hours &ldquo;between January 1, 2026 and December 31, 2026&rdquo;, and for an activity that has run longer than 12 months, only that calendar year counts. The page then translates it: &ldquo;For most students, this equates to the second semester of Grade 11 (or equivalent), your summer break, and the first semester of Grade 12 (or equivalent).&rdquo;',
            'So a Grade 12 student reading this in October 2026 is already ten months into the window. The section on counting hours below shows how to work out the part of a long-running activity that falls inside it.'
          ],
          rightH3: 'Contests, awards and projects',
          right: [
            'Waterloo says contests such as its own math, computing and science contests, and awards, can go into the activity chart or into the other answers. One sentence on that FAQ is easy to miss and matters a great deal for coders: &ldquo;Information in links (such as links to awards or portfolios) will not be reviewed.&rdquo;',
            'A GitHub link, a deployed app or a portfolio site will not be opened. Whatever a student built has to be described in words, inside the limits, clearly enough for a reader who never sees the code.'
          ] },
        { kind: 'source', html: 'Source: ' + AIF + ', sections &ldquo;What are the questions on the AIF?&rdquo; and &ldquo;Common questions about the AIF&rdquo;, read 22 October 2026.' }
      ]
    },
    {
      id: 'rules', tint: 'deep', eyebrow: 'The rules',
      h2: 'Help, AI, editing and links: what Waterloo allows',
      lede: 'Most mistakes with the AIF are procedural, and Waterloo&rsquo;s FAQ answers each of them directly. These are the rules a family should know before anyone opens the form.',
      body: [
        { kind: 'table', caption: 'AIF rules quoted from Waterloo&rsquo;s FAQ (read 22 October 2026)', head: ['Question', 'Waterloo&rsquo;s answer'], rows: [
          ['Can someone else complete it?', '&ldquo;No. You must complete and submit the AIF on your own.&rdquo; An application may be rejected or an offer revoked if Waterloo has &ldquo;reasonable grounds to believe your AIF was written by someone other than you.&rdquo;'],
          ['Can AI write the answers?', 'The questions are about the student, and &ldquo;no one (including ChatGPT!) knows you better than you do.&rdquo; If AI is used to create answers that are untrue, incorrect or plagiarized, &ldquo;we reserve the right to deny admission or withdraw your Offer of Admission.&rdquo;'],
          ['How many times can it be submitted?', 'Once: the questions are the same for all programs that use it'],
          ['Can answers be changed later?', '&ldquo;You can&rsquo;t edit or add information once you&rsquo;ve submitted the AIF.&rdquo; Before submitting, though, the AIF is the only form a student can save and return to'],
          ['Can a student see it after submitting?', 'No; Waterloo suggests taking a screenshot first if a copy is wanted'],
          ['Is there a spell checker?', 'Not inside the online form; Waterloo recommends writing in a word processor first, then pasting'],
          ['How is length counted?', 'Some questions have a character limit, and &ldquo;The character limit includes spaces, punctuation, and special characters.&rdquo;']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Our position, stated once and kept',
          left: [
            'We do not write, draft, outline, rephrase or edit any part of a student&rsquo;s application, and we do not offer that service under another name. Waterloo&rsquo;s rule is clear, and it is also the right rule: the form is meant to be the student&rsquo;s own voice.',
            'Students under 18 should also know that ChatGPT&rsquo;s terms require a parent&rsquo;s permission at that age. That point is separate from Waterloo&rsquo;s rule, which is about authorship whatever the tool.'
          ],
          rightH3: 'What a family can properly do',
          right: [
            'A parent can remind a student about the deadline, help them remember the dates an activity started, or confirm hours from a work schedule. Those are facts, and getting facts right is the student&rsquo;s responsibility under Waterloo&rsquo;s own wording: the application must be &ldquo;truthful, complete, and correct.&rdquo;',
            'What a parent or tutor should not do is supply the sentences. A reader who sees thousands of these can tell, and Waterloo has said what it will do if it believes someone else wrote the form.'
          ] }
      ]
    },
    {
      id: 'review', tint: 'tint', eyebrow: 'How it is read',
      h2: 'How Waterloo reviews the AIF',
      lede: 'Waterloo&rsquo;s FAQ describes the review process in more detail than most universities publish, including its use of AI.',
      body: [
        { kind: 'three', cells: [
          { h3: 'People and AI', p: 'The form &ldquo;is reviewed both by people who have been trained on reviewing supplementary information forms and by artificial intelligence (AI).&rdquo; If the scores differ significantly, &ldquo;a second human scorer reviews the submission.&rdquo;' },
          { h3: 'Names removed', p: 'To reduce bias, identifying information such as name and applicant number is removed before review. Waterloo says the AI system and its data are managed by the university and that &ldquo;data is not sent to any third-party AI services.&rdquo;' },
          { h3: 'Why it exists', p: 'In highly competitive programs, Waterloo says, supplementary requirements &ldquo;allow us to be more selective beyond just grades.&rdquo; The form is how it tells apart applicants whose marks look alike.' }
        ] },
        { kind: 'p', mt: true, html: 'Two practical conclusions follow, and both are ours. First, a reader will compare answers across thousands of applicants with similar grades, so generic sentences cost the most: a line such as <i>I am passionate about technology</i> tells a reader nothing that the program choice did not already say. Second, specific details that only this student could write, such as what broke in a project and how they found the cause, are what make an answer the student&rsquo;s own.' },
        { kind: 'source', html: 'Source: ' + AIF + ', FAQ items &ldquo;How will my AIF be reviewed?&rdquo; and &ldquo;Why do some programs have supplementary application requirements?&rdquo;, read 22 October 2026. The example of a generic sentence is ours.' }
      ]
    },
    {
      id: 'hours', tint: 'deep', eyebrow: 'A tool, ours',
      h2: 'Counting activity hours inside the 2026 window, in Python',
      lede: 'Question 5 asks for hours, and only hours inside the 2026 calendar year. For an activity that started in 2024 or ran through a school year, working that out by hand invites mistakes. Here is a short program of ours that does the arithmetic, plus a word counter for the 150-word answers. It handles numbers only. It never suggests a word of anyone&rsquo;s answer.',
      body: [
        { kind: 'ol', items: [
          '<b>Write each activity as facts.</b> Its name, the date it started, the date it ended (or 31 December 2026 if it is still running), and the usual hours per week.',
          '<b>Clip each activity to the window.</b> The counted part starts at the later of the activity&rsquo;s start and 1 January 2026, and ends at the earlier of its end and 31 December 2026.',
          '<b>Handle activities that miss the window.</b> If the clipped end comes before the clipped start, the activity happened entirely outside 2026 and counts zero.',
          '<b>Count days, then convert.</b> Days inside the window, including both end dates, times hours per week, divided by seven.',
          '<b>Round once, at the end.</b> Waterloo asks for a number of hours; an estimate to the nearest hour is honest, a figure to two decimals is false precision.',
          '<b>Check the word count of each draft.</b> Count the student&rsquo;s own words, and cut from the student&rsquo;s own sentences when an answer runs over.'
        ] },
        { kind: 'code', label: 'Python &middot; hours inside the window and a word check (ours)', lang: 'python', code: HOURS_PY, note: 'Output: Robotics club, build season 49 hours; Bus-times app for my school 89 hours; Part-time job, grocery store 266 hours; Math help for Grade 9 students 78 hours; Summer camp counsellor, 2025 0 hours; Total inside 2026 482 hours; then 162 words, 12 over the 150-word limit. The activity log is invented for this example.' },
        { kind: 'table', mt: true, caption: 'How each activity in our invented log was clipped (ours; checked by hand against the program)', head: ['Activity', 'Counted from', 'Counted to', 'Days counted', 'Hours'], numCols: [3, 4], rows: [
          ['Robotics club, build season', '1 Jan 2026 (started 8 Sep 2025)', '27 Mar 2026', '86', '49'],
          ['Bus-times app for my school', '2 Feb 2026', '28 Aug 2026', '208', '89'],
          ['Part-time job, grocery store', '29 Jun 2026', '31 Dec 2026', '186', '266'],
          ['Math help for Grade 9 students', '1 Jan 2026 (started 1 Oct 2024)', '31 Dec 2026', '365', '78'],
          ['Summer camp counsellor, 2025', 'Outside the window', 'Outside the window', '0', '0']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the clipping catches',
          left: [
            'Two of the five activities started before 2026. Counted naively, the math help that began in October 2024 would contribute more than two years of hours instead of one; the robotics season would include four months of 2025. Both errors inflate the chart, which is exactly what Waterloo&rsquo;s 12-month rule is there to prevent.',
            'The summer camp from 2025 returns zero. That is correct for question 5 even though the experience was real, and nothing stops a student from mentioning what it taught them in another answer, in their own words.'
          ],
          rightH3: 'Why this is a coding lesson too',
          right: [
            'Clipping a range to a window is a pattern that appears everywhere in programming: calendars, billing periods, sensor logs, game timers. The two lines that take a max of the starts and a min of the ends are the whole idea, and the off-by-one question (does the end date count?) is the classic place to get it wrong.',
            'Students who write a tool like this for their own use have also done something worth knowing about themselves: they turned an annoying task into a program and tested it. If that is true of your teen, it belongs in their own words, not ours.'
          ] }
      ]
    },
    {
      id: 'genuine', tint: 'tint', eyebrow: 'Our advice',
      h2: 'Presenting genuine activities: four honesty tests',
      lede: 'This advice is ours. It is about choosing and checking material, never about wording, and it applies to any student, whether or not they study with us.',
      body: [
        { kind: 'table', caption: 'Four tests to run on every activity before it goes in the chart (ours)', head: ['Test', 'The question to ask', 'If the answer is no'], rows: [
          ['Evidence', 'Could you show a teacher, coach or employer who would confirm this activity and roughly these hours?', 'Lower the hours to what you can stand behind, or leave it out'],
          ['Ownership', 'Can you explain, without notes, what you personally did, as opposed to what the group or the course did?', 'Describe only your part, or choose a different activity'],
          ['Change', 'Can you name one thing you could not do before and can do now because of it?', 'It may still be worth listing, but it will not carry an answer'],
          ['Specifics', 'Is there a detail only you would know: a bug, a mistake, a decision, a number?', 'Spend ten minutes recalling the activity before writing about it']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Keep a ledger, starting now',
          left: [
            'The most useful thing a Grade 11 or Grade 12 student can do this month is start a plain activity ledger: date, activity, hours, and one line about what happened. It costs two minutes a week. In January it turns question 5 from guesswork into arithmetic, and the one-line notes are where specific details come from.',
            'For coding projects, the commit history in a Git repository is a ledger already, with dates attached. Our <a class="ag-inline-link" href="/courses/git-github-version-control-course-for-teens">Git and GitHub course for teens</a> teaches students to keep one properly.'
          ],
          rightH3: 'For students who code',
          right: [
            'Because links are not reviewed, a project has to survive being described in a sentence or two. A useful private exercise: explain the project aloud to someone who does not code, in under a minute. If that is hard, the difficulty is understanding, not writing, and the fix is more time with the code.',
            'That is where our classes help, and only there. Students build, trace and debug their own programs, so they can explain them. The writing about it stays theirs.'
          ] }
      ]
    },
    {
      id: 'math', tint: 'deep', eyebrow: 'For Math and Computer Science applicants',
      h2: 'The Supplementary Information Form and contests',
      lede: 'Faculty of Mathematics applicants, including Computer Science, have a second form alongside the AIF.',
      body: [
        { kind: 'two',
          leftH3: 'What the SIF asks',
          left: [
            'Waterloo says the Supplementary Information Form &ldquo;asks about any Waterloo mathematics contests you&rsquo;ve participated in, such as the Euclid Contest and/or the Canadian Senior Mathematics Contest.&rdquo; It repeats that taking part in those contests is not required for admission, while one of them is a condition for certain Faculty of Mathematics scholarships.',
            'CEMC, which runs those contests, says on its How contests work page that &ldquo;It is not possible for students to individually register for a contest&rdquo;: a teacher at the student&rsquo;s school does it. Tutoring companies, including us, cannot do that. Our <a class="ag-inline-link" href="/cemc-waterloo-contests-preparation">Waterloo math contests page</a> describes the contests themselves.'
          ],
          rightH3: 'Software Engineering is different',
          right: [
            'Software Engineering sits in the Faculty of Engineering, with its own supplementary form. Waterloo says applicants need experience in a programming course or self-study and &ldquo;a demonstrated interest in solving open problems, debugging code, testing code, and learning new software languages.&rdquo;',
            'That sentence reads like a description of good programming habits, and it is a fair checklist for any student who codes: do you debug systematically, do you test, have you learned a second language? Building those habits is our everyday work. Whether to apply, and what to say, is the student&rsquo;s.'
          ] },
        { kind: 'source', html: 'Source: ' + AIF + ', sections on Faculty of Mathematics and Engineering programs, read 22 October 2026.' }
      ]
    },
    {
      id: 'timeline', tint: 'tint', eyebrow: 'A timeline, ours',
      h2: 'Ten weeks to a finished AIF, for a February 2027 deadline',
      lede: 'This schedule is ours, counted back from February 15, 2027, the date Waterloo lists for programs other than those in its next rows; no row names Math programs, so that date applies to them. Engineering applicants should count back from February 1, 2027 instead.',
      body: [
        { kind: 'table', caption: 'A ten-week AIF schedule for a Faculty of Mathematics applicant (ours)', head: ['Week starting', 'Task', 'Done when'], rows: [
          ['7 December 2026', 'Read Waterloo&rsquo;s questions in full and note the limits', 'Each question copied into the student&rsquo;s own document'],
          ['14 December 2026', 'Update the activity ledger; run the hours check', 'Every activity has dates and hours inside 2026'],
          ['21 December 2026', 'Recall specifics for each likely topic, no drafting yet', 'One page of notes in the student&rsquo;s own words'],
          ['4 January 2027', 'First drafts of questions 1 and 2, by the student', 'Both drafts exist, any length'],
          ['11 January 2027', 'First drafts of questions 3 and 4, by the student', 'All four drafts exist'],
          ['18 January 2027', 'Student cuts each answer to the limit', 'Word and character counts within the limits'],
          ['25 January 2027', 'Student checks every fact against the ledger', 'No claim the student cannot stand behind'],
          ['1 February 2027', 'Student proofreads in a word processor with spell check', 'Clean copies ready to paste'],
          ['8 February 2027', 'Paste into the portal, preview, screenshot, submit', 'Submitted, with a copy saved'],
          ['15 February 2027', 'Waterloo&rsquo;s deadline for Math programs', 'Already done a week earlier']
        ] },
        { kind: 'p', mt: true, html: 'Every task in the schedule is done by the student. A parent&rsquo;s role is the calendar: knowing which week it is and whether the task is done. Waterloo&rsquo;s page recommends preparing answers in advance so spelling and grammar can be checked, and reviewing them because nothing can be changed after submission.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Where your teen is with their projects',
    h2: 'Four stages from coursework to work of their own',
    lede: 'Our stages for students who code, drawn from years of teaching teens. They describe ownership of work, which is what any honest description of an activity rests on.',
    table: { caption: 'Stages of project ownership (ours)', head: ['Stage', 'What you would notice'], rows: [
      ['1. Follower', 'Completes assigned exercises and tutorials, changing details but not the design'],
      ['2. Adapter', 'Takes a known project and extends it with a feature nobody asked for'],
      ['3. Originator', 'Starts from a problem of their own and builds a first working version'],
      ['4. Owner', 'Maintains a project over months, fixes reported bugs and can explain every decision']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask which project your teen would explain to a stranger, and why. The answer tells you which stage they are at better than any certificate.',
      'Stage 3 is where most students need a nudge. A teacher who asks what problem they want to solve, then helps them shrink it to something finishable, makes the difference.'
    ] },
    right: { h3: 'For students', ps: [
      'Keep a short log for each project: what you tried, what broke, what fixed it. That log is your memory when you need specifics months later.',
      'Finish small things. A finished tool that three classmates use beats an abandoned game engine in every honest description.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine more courses for teens who want work of their own',
    lede: 'Each course runs live with a regular teacher, in a group of fifteen to twenty or one to one, and each ends in something the student made.',
    bands: [
      { num: 'I', h3: 'Build and ship', sub: 'Teens', courses: [
        { code: 'WAG / BLD / 01', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'A dated history of every project, kept properly.' },
        { code: 'WAG / BLD / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Web tools other students can actually open.' },
        { code: 'WAG / BLD / 03', slug: 'react-for-teens-complete-masterclass', title: 'React for teens', blurb: 'From components to a finished web app.' }
      ] },
      { num: 'II', h3: 'Think harder', sub: 'Grades 9 to 12', courses: [
        { code: 'WAG / THK / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Algorithms reasoned through, not memorised.' },
        { code: 'WAG / THK / 02', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo math contests', blurb: 'Original problems in the style of Gauss to Euclid.' },
        { code: 'WAG / THK / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Timed problem sets for students past the basics.' }
      ] },
      { num: 'III', h3: 'Data and AI, done properly', sub: 'Teens', courses: [
        { code: 'WAG / DAI / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'A question, a data set and an honest chart.' },
        { code: 'WAG / DAI / 02', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Train and test a model rather than prompt one.' },
        { code: 'WAG / DAI / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'The language behind most first projects.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live project classes that fit around Grade 12',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Late afternoon or evening in your province, set when the batch is chosen.' },
      { time: 'Weekends', l: 'Mornings suit students with part-time jobs on weekday evenings.' },
      { time: '1-on-1', l: 'Booked around exams, applications season and work shifts.' }
    ],
    cells: [
      { h3: 'Student writes the code', p: 'The teacher asks questions; the keyboard stays with the student.' },
      { h3: 'Every bug explained', p: 'Found, named and fixed by the person who wrote it.' },
      { h3: 'Projects with a purpose', p: 'A real problem the student cares about.' },
      { h3: 'Version history kept', p: 'Dated commits that record how the work grew.' },
      { h3: 'No application help', p: 'We never write or edit forms or essays.' },
      { h3: 'Group or private', p: 'Fifteen to twenty in a batch, or one to one.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'Projects our students made and can explain themselves. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has the full set.',
  reviewsLede: 'Reviews from Google, left by parents and students and quoted exactly.',

  fees: {
    h2: 'Fees',
    lede: 'Try one class without paying. From then on you pay by the month for eight live lessons, the amount is labelled with its currency code, and there is no contract: stopping after any month is fine.',
    free: ['Opening class at no charge', 'Bring a project idea, or none', 'No card details'],
    group: ['A batch of fifteen to twenty', 'One teacher all term', 'Pick a batch time', 'Monthly billing'],
    one: ['Private lessons for your teen', 'Around exams and job shifts', 'Built on their own project']
  },

  faq: {
    eyebrow: 'Your questions',
    h2: 'The Waterloo AIF: common questions',
    items: [
      { q: 'What is the Waterloo AIF?', a: 'The Admission Information Form is an online form in the Waterloo applicant portal. Waterloo says it lets applicants share their interests, experiences and abilities beyond grades, and the information is also used for scholarships in some programs. It has four short-answer questions and an activity chart.' },
      { q: 'Which Waterloo programs require the AIF?', a: 'On 22 October 2026 Waterloo listed all Engineering programs except Architecture, all programs in the Faculty of Mathematics, including Computer Science, and Computing and Financial Management. Arts, Environment, Health and Science programs do not use it.' },
      { q: 'When is the AIF deadline for 2027?', a: 'Waterloo\'s page gave February 15, 2027 for programs other than those listed in the next rows of its table; none of those rows names Math or Computer Science, so that date covers them, and February 1, 2027 for Engineering. A student who applies to both Engineering and a Math program must submit by February 1, 2027 at 11:59 p.m. Eastern Time.' },
      { q: 'How long are the AIF answers?', a: 'Waterloo lists a 150-word limit for each of the first four questions. The fifth question is a chart of activities with the hours spent between January 1, 2026 and December 31, 2026. Waterloo also says some questions have a character limit that includes spaces and punctuation.' },
      { q: 'Can I use ChatGPT or another AI tool to write my AIF?', a: 'Waterloo says the questions are about you and that no one, including ChatGPT, knows you better than you do. If AI is used to create answers that are untrue, incorrect or plagiarized, Waterloo reserves the right to deny admission or withdraw an offer. Students under 18 also need a parent\'s permission to use ChatGPT at all.' },
      { q: 'Can a tutor or parent write or edit my AIF?', a: 'No. Waterloo says you must complete and submit the AIF on your own, and that an offer can be revoked if it believes someone else wrote it. We never write, draft or edit any part of an application.' },
      { q: 'Can I change my AIF after submitting it?', a: 'No. Waterloo says you cannot edit or add information after submitting, and you cannot view the submission afterwards, so it suggests taking a screenshot first. Before submitting, the AIF can be saved and returned to.' },
      { q: 'Will Waterloo look at my GitHub or portfolio link?', a: 'No. Waterloo\'s FAQ says information in links, such as links to awards or portfolios, will not be reviewed. Describe any project in words inside the form, within the limits.' },
      { q: 'How does Waterloo review the AIF?', a: 'Waterloo says trained reviewers and an artificial intelligence system both score it, a second human scorer reviews the form if their scores differ significantly, and identifying information is removed first. It says the data is not sent to any third-party AI service.' },
      { q: 'How do your classes relate to the AIF?', a: 'Only indirectly. We teach coding and math live online, and students build projects of their own that they understand. We do not discuss or review application answers. What a student writes, and whether to mention our classes at all, is their decision.' },
      { q: 'When can my teen take classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Each slot is fixed in your province\'s own clock and rechecked when daylight time starts or ends.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Other pages for teens in Canada aiming at a computing degree.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'The front door to every page we have for Canada.' },
      { href: '/ics3u-computer-science-help', label: 'ICS3U help', p: 'Ontario Grade 11 computer science, explained.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo math contests', p: 'What the Euclid and CSMC involve.' },
      { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation', p: 'The programming contest Waterloo encourages.' },
      { href: '/ccc-junior-guide', label: 'CCC Junior guide', p: 'A first look at the contest, with our own problems.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'Finding the faulty line without guessing.' },
      { href: '/how-to-read-code', label: 'How to read code', p: 'Understanding a program before changing it.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects made by our learners.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Our method for live classes.' }
    ]
  },

  start: {
    h2: 'Try a free class',
    lede: 'Let us know your teen&rsquo;s grade, any project they are working on and the language they use. We spend the first class on their own code, so bring something unfinished if they have it.',
    readFirst: 'Looking before booking? Our <a class="ag-inline-link" href="/how-we-teach">teaching approach</a> is written out, and the <a class="ag-inline-link" href="/courses/ics3u-ics4u-computer-science-companion-course">computer science companion syllabus</a> shows how a term is planned.',
    note: 'Lessons happen live on video with teachers based in India, so nobody travels and nobody comes to the house. Families in Canada usually reach us fastest on WhatsApp.',
    formNote: 'There is no charge for the first class and no card is needed to book it.'
  },

  footer: {
    cols: [
      { h4: 'Build real skill', links: [
        { href: '/courses/ics3u-ics4u-computer-science-companion-course', label: 'Computer science companion' },
        { href: '/courses/git-github-version-control-course-for-teens', label: 'Git and GitHub for teens' },
        { href: '/courses/ccc-junior-and-senior-preparation-course', label: 'CCC preparation course' },
        { href: '/how-to-think-like-a-programmer', label: 'Think like a programmer' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario' },
        { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo math contests' },
        { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' }
      ] }
    ],
    bottomRight: 'Your work, your words, inside the window'
  },

  personalityCss: `
.ag-root.ag-wag .ag-hero h1 { letter-spacing: -0.008em; max-width: 21ch; }
.ag-root.ag-wag .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-wag .ag-section-head h2 { max-width: 28ch; }
.ag-root.ag-wag .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-wag .ag-code-head span { letter-spacing: 0.04em; }
`,

  dossier: {
    curriculumAuthority: 'University of Waterloo, Admission Information Form (AIF) and other supplementary forms page, fetched raw 22 October 2026: programs that use it, deadlines for 2027 entry, Engineering and Faculty of Mathematics details, the Supplementary Information Form, submission rules, the five questions and limits, the 2026 hours window, review by trained people and AI, the AI-use and authorship rules, links not reviewed, character limits.',
    localProject: 'Our hours_in_window and word_check functions in Python: an invented five-activity log clipped to the 1 January to 31 December 2026 window (49, 89, 266, 78 and 0 hours, "Total inside 2026 482 hours") and a word check that prints "162 words, 12 over the 150-word limit"; a hand-checked clipping table; four honesty tests; a ten-week AIF schedule done entirely by the student. No sample answers. Lesson family: date ranges and clipping.',
    requiredMentions: ['hours_in_window', 'Total inside 2026', '162 words, 12 over the 150-word limit', 'no one (including ChatGPT!) knows you better than you do', 'Information in links (such as links to awards or portfolios) will not be reviewed', 'a second human scorer reviews the submission', 'Experience reflection', 'Submissions will not be reviewed after the deadline', 'reasonable grounds to believe your AIF was written by someone other than you', 'solving open problems, debugging code'],
    sources: [
      { claim: 'What the AIF is, which programs use it, deadlines for 2027 entry, Engineering and Faculty of Mathematics forms.', url: 'https://uwaterloo.ca/future-students/admissions/admission-information-form' },
      { claim: 'The five AIF questions, the 150-word limits and the 2026 hours window.', url: 'https://uwaterloo.ca/future-students/admissions/admission-information-form#aif-questions' },
      { claim: 'Review by trained people and AI, AI-use rule, authorship rule, editing, links and character limits (FAQ on the same page).', url: 'https://uwaterloo.ca/future-students/admissions/admission-information-form' }
    ],
    rejectedClaims: [
      'Any sample, model or template answer to an AIF question: none given, on purpose.',
      'Any offer to write, draft, outline, edit or review application answers: refused on the page.',
      'Any claim that our classes, contests or projects improve admission chances: none made.',
      'That Modern Age Coders can register students for CEMC contests: tutoring companies cannot; the page says so.',
      'The Missing Manual article\'s program list and tips: not official wording, not used.',
      'Hours guidance beyond Waterloo\'s own 2026 window, or any window for a later cycle: not stated; the page says the form changes between cycles.',
      'Any affiliation with the University of Waterloo: none, and the page says so.'
    ]
  }
};
