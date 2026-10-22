'use strict';
// U of T computer science admission requirements (ag- admissions door; Canada cluster Plan 2, row 59).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Sources, fetched raw with curl on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/
// uoft-computer-science-admission-requirements/; research copy ca/src/admissions/uoft-computer-science.html; facts 210 to 212):
//  - future.utoronto.ca/undergraduate-programs/computer-science/ (Ontario requirements view): for each campus, "Computer Science",
//    "Work-integrated learning option available.", BCS "Major, Specialist", HBSc "Minor", OUAC codes TMX, TXC, TAD; "Ontario Secondary
//    School Diploma (OSSD) with six subjects at the 4U/M level, including English"; "The co-op component of Grade 12 courses will not
//    be used for admission purposes"; Mississauga "ENG4U / EAE4U", "MHF4U", "MCV4U", "Math of Data Management" "Recommended" "MDM4U";
//    Scarborough "ENG4U / EAE4U", "MCV4U", "MHF4U"; St. George "ENG4U / EAE4U", "MCV4U", "Supplemental Application" "Required";
//    OUAC code "The code you'll use to apply to the program on the Ontario Universities' Application Centre (OUAC)."
//  - future.utoronto.ca/deadlines: "2027 admissions"; apply: Arts & Science St. George, U of T Mississauga and U of T Scarborough
//    recommended early application date November 7, deadline January 15; documents: February 1 for those three; supplemental:
//    "Computer Science Supplementary Application due February 1" (Arts & Science, U of T St. George) and U of T Scarborough
//    "Supplementary Application Form due February 1 (required for some program areas)"; "Admission decisions will be released
//    beginning in January and continue through to late May."; early consideration by November 7 and December 1.
//  - future.utoronto.ca/supplemental-applications: "Most programs only require your academic results for admission."; formats
//    ("short-answer or essay questions, provide a personal profile or even submit a video response"); lists "Computer Science
//    Supplemental Application" under the Faculty of Arts & Science.
//  - utm.utoronto.ca/future-students/programs/computer-science: OUAC "TMX"; "Competitive Average" "Mid to High 80s"; "ENG4U, MCV4U,
//    MHF4U; (recommended: Mathematics of Data Management)"; "A supplementary application is required."; "Entry to the Computer Science
//    admission category is gained directly from high school."; transfer students "are not eligible"; Specialist and Major "open only to
//    those applying directly from high school."
//  - utsc.utoronto.ca/admissions/programs/computer-science: "Please note: Computer Science is direct from high school only. If you have
//    any post-secondary education, you are not eligible for admission."; "at least six (6) grade 12" U or M courses; required English,
//    Advanced Functions, Calculus and Vectors; approximate grade requirements "Minimum 70% English", "High 90s overall (co-op)", "Low
//    90s overall"; five streams (Comprehensive, Artificial Intelligence and Machine Learning, Entrepreneurship, Information Systems,
//    Software Engineering); "More than half of the credits needed for your degree will be in Computer Science."; OUAC "TXC".
//  - The Ontario Curriculum, Grades 11 and 12: Mathematics (revised 2007), edu.gov.on.ca/eng/curriculum/secondary/math1112currb.pdf
//    (copy in .../src-pilots/computer-science-prerequisites-canadian-universities/): "Advanced Functions (MHF4U) must be taken prior
//    to or concurrently with Calculus and Vectors (MCV4U)." (paraphrased on the page).
// BLOCKED: artsci.utoronto.ca (Arts & Science computer science admission category page) returned a bot-verification challenge; not
// retried, saved as BLOCKED-artsci-cs-bot-challenge.html, and nothing from it is used. Requirements for students outside Ontario sit
// behind a form post on future.utoronto.ca and were not read. Left out: UTSC tuition notes (money), co-op and employment figures.
// No admission year is printed on the program page, so the read date is given; the deadlines page is labelled 2027 admissions.
// Our own material, labelled on the page: the uncovered() set checker in Python and its run (Python 3.13; three plans, outputs quoted),
// the campus-choice questions, the planning ladder.
// Lesson family: sets and alternatives (a requirement as a set; any one member satisfies it).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SETS_PY = `# Which listed U of T CS prerequisites does a course plan cover? (ours)
# Each requirement is a set of alternatives: any one course in the set satisfies it.
# Lists copied from future.utoronto.ca, Ontario requirements, read 22 October 2026.

CAMPUSES = {
    "St. George (TAD)":  [{"ENG4U", "EAE4U"}, {"MCV4U"}],
    "Mississauga (TMX)": [{"ENG4U", "EAE4U"}, {"MHF4U"}, {"MCV4U"}],
    "Scarborough (TXC)": [{"ENG4U", "EAE4U"}, {"MCV4U"}, {"MHF4U"}],
}

def uncovered(plan, requirements):
    """Return the requirements that no course in the plan satisfies."""
    return [" / ".join(sorted(alts)) for alts in requirements if not (alts & plan)]

plans = {
    "Plan A": {"EAE4U", "MHF4U", "MCV4U", "ICS4U", "SPH4U", "MDM4U"},
    "Plan B": {"ENG4C", "MHF4U", "MCV4U", "ICS4U", "SPH4U", "SCH4U"},
    "Test C": {"ENG4U", "MCV4U", "ICS4U", "SPH4U", "SCH4U", "MDM4U"},
}
for name, plan in plans.items():
    print(name)
    for campus, reqs in CAMPUSES.items():
        gaps = uncovered(plan, reqs)
        print("  " + campus + ":", "all listed courses in plan" if not gaps else "not in plan: " + ", ".join(gaps))`;

const L = (href, label) => '<a class="ag-inline-link" href="' + href + '" rel="noopener" target="_blank">' + label + '</a>';
const FUT = L('https://future.utoronto.ca/undergraduate-programs/computer-science/', 'U of T Future Students, Computer Science');
const DL = L('https://future.utoronto.ca/deadlines', 'U of T Dates and Deadlines');
const UTM = L('https://www.utm.utoronto.ca/future-students/programs/computer-science', 'U of T Mississauga, Computer Science');
const UTSC = L('https://www.utsc.utoronto.ca/admissions/programs/computer-science', 'U of T Scarborough, Computer Science');

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'U OF T CS', blurb: 'University of Toronto computer science admission by campus, St. George, Mississauga and Scarborough, from U of T&rsquo;s own pages, with a prerequisite checker of our own.' },
  slug: 'uoft-computer-science-admission-requirements',
  code: 'ucsa',
  accent: '#1D5751',
  accentRationale: 'U of T CS admission, Canada: a muted deep teal, #1D5751, allocated for this row; 7.3 RGB units from the nearest site accent (#1F5E52) and at least 14 from the other Canada accents, contrast 7.82 on the paper #FBF8F2 and 6.73 on the deepest tint',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'U of T computer science admission requirements',
  title: 'U of T Computer Science Admission: TAD, TMX and TXC',
  description: 'U of T computer science admission for each campus, St. George, Mississauga and Scarborough: prerequisites, supplementary forms, published averages and 2027 dates.',
  ogDescription: 'The three University of Toronto computer science programs side by side, as each campus publishes them: OUAC codes TAD, TMX and TXC, Ontario prerequisites, supplementary applications, averages and deadlines.',
  twitterDescription: 'U of T computer science by campus: TAD, TMX and TXC prerequisites, forms, averages and dates.',
  pageName: 'U of T Computer Science Admission Requirements',
  webPageDescription: 'A guide for Ontario high school students and parents to computer science admission at the University of Toronto&rsquo;s three campuses, built from U of T&rsquo;s central and campus admissions pages, with an original course-plan checker in Python.',
  courseDescription: 'Live online teaching in Grade 12 Advanced Functions, Calculus and Vectors and computer science for Ontario students aiming at university computer science, in a batch or one to one. No admission result is promised.',
  crumbs: [{ name: 'Canada', href: '/coding-classes-in-canada' }, { name: 'Ontario', href: '/coding-classes-in-ontario' }],
  crumbLabel: 'U of T CS admission',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#campuses', label: 'Three campuses' },
    { href: '#supplementary', label: 'Supplementary forms' },
    { href: '#averages', label: 'Averages' },
    { href: '#checker', label: 'Plan checker' },
    { href: '#dates', label: '2027 dates' }
  ],
  eyebrow: 'University of Toronto &middot; St. George, Mississauga, Scarborough &middot; Read 22 October 2026',
  h1: 'U of T computer science admission requirements, campus by campus',
  lede: 'The University of Toronto runs computer science on three campuses, and an Ontario student applies to each one separately, with its own OUAC code. The prerequisites overlap but are not identical, the supplementary application is described differently on different U of T pages, and only two campuses publish an average. This page lays out what each source said when we read it on 22 October 2026, side by side and unreconciled where the sources disagree. Admission rules change between cycles, so check every line on U of T&rsquo;s own pages in the autumn your teen applies. We teach the math and programming; we do not forecast decisions.',
  secondaryCta: { href: '#campuses', label: 'Compare the three campuses' },
  wa: 'Hello Modern Age Coders, my teen is considering computer science at U of T and wants help with Grade 12 math and programming. Could we book a free first class?',
  heroNote: 'Since 2020 &middot; 10,000+ students &middot; Calculus and Vectors and computer science, taught live',
  spec: [
    ['Audience', 'Ontario Grades 10 to 12'],
    ['Math covered', 'MHF4U and MCV4U, for understanding'],
    ['Programming', 'Python, Java or C++ projects'],
    ['Group size', 'Fifteen to twenty students'],
    ['Private option', 'One to one'],
    ['Hours', 'After school or weekend mornings, Eastern time'],
    ['Promise', 'Real skill, never an admission forecast'],
    ['Begin', 'A first class at no charge']
  ],
  capsuleQ: 'In short',
  capsule: 'U of T offers computer science at St. George (OUAC code TAD), Mississauga (TMX) and Scarborough (TXC). On 22 October 2026 all three listed ENG4U or EAE4U and MCV4U for Ontario students, Mississauga and Scarborough added MHF4U, and St. George listed a supplemental application as required. Modern Age Coders teaches that math, and the programming beside it, in Ontario Grade 12 University Math, a live online course run as a group class or one to one.',

  picks: {
    eyebrow: 'Prepare for the work itself',
    h2: 'Three courses for an Ontario student eyeing U of T computer science',
    lede: 'Every campus lists Calculus and Vectors, two list Advanced Functions, and first-year computer science assumes a student can already think in code. These courses cover that ground.',
    items: [
      { course: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', code: 'UCS / 01', title: 'Ontario Grade 12 University Math', note: 'MHF4U and MCV4U in step with the school course, with every result explained and checked a second way.' },
      { course: 'ics3u-ics4u-computer-science-companion-course', code: 'UCS / 02', title: 'Ontario Computer Science Companion', note: 'A second teacher for ICS3U or ICS4U: tracing, testing and program design in the school&rsquo;s language.' },
      { course: 'ccc-junior-and-senior-preparation-course', code: 'UCS / 03', title: 'CCC Junior and Senior preparation', note: 'Original algorithm problems under time pressure, for students who want harder thinking than the course sets.' }
    ]
  },

  sections: [
    {
      id: 'campuses', tint: 'tint', eyebrow: 'TAD, TMX, TXC',
      h2: 'The three U of T computer science programs, side by side',
      lede: 'U of T&rsquo;s central Future Students page lists all three campuses on one page, in the Ontario requirements view. This table copies it, then adds what each campus says on its own site.',
      body: [
        { kind: 'table', caption: 'U of T computer science for Ontario high school students, by campus (future.utoronto.ca and the two campus sites, read 22 October 2026)', head: ['', 'St. George', 'Mississauga', 'Scarborough'], rows: [
          ['OUAC code', 'TAD', 'TMX', 'TXC'],
          ['Faculty or division', 'Faculty of Arts &amp; Science', 'U of T Mississauga', 'U of T Scarborough'],
          ['English', 'ENG4U / EAE4U', 'ENG4U / EAE4U', 'ENG4U / EAE4U'],
          ['Calculus and Vectors', 'MCV4U', 'MCV4U', 'MCV4U'],
          ['Advanced Functions', 'Not listed on the central page', 'MHF4U', 'MHF4U'],
          ['Recommended', 'None listed', 'Math of Data Management, MDM4U', 'None listed'],
          ['Supplemental application', 'Required (central page)', 'Required (UTM&rsquo;s own page)', 'See the supplementary section below'],
          ['Degrees and options', 'BCS: Major, Specialist; HBSc: Minor', 'BCS: Major, Specialist; HBSc: Minor', 'BCS: Major, Specialist; HBSc: Minor'],
          ['Work-integrated learning', 'Option available', 'Option available', 'Option available']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The rule behind every column',
          left: [
            'For all three campuses the central page states the base requirement the same way: an &ldquo;Ontario Secondary School Diploma (OSSD) with six subjects at the 4U/M level, including English&rdquo;. It adds a line that catches some families out: &ldquo;The co-op component of Grade 12 courses will not be used for admission purposes&rdquo;.',
            'The course codes are Ontario&rsquo;s, and U of T labels them itself: English is ENG4U, with EAE4U accepted as the alternative for that line; Calculus &amp; Vectors is MCV4U; Advanced Functions is MHF4U; Math of Data Management is MDM4U.'
          ],
          rightH3: 'One difference worth noticing',
          right: [
            'On the central page, St. George lists English and Calculus and Vectors only, while Mississauga and Scarborough each list Advanced Functions as well. We report that as printed and draw no conclusion about admission from it. The Ontario mathematics curriculum (revised 2007) settles the practical side: it says Advanced Functions must be taken before or at the same time as Calculus and Vectors, so a St. George applicant with MCV4U has MHF4U anyway.',
            'What it does show is that a student cannot read one campus&rsquo;s list and assume it covers the others. Each OUAC code is a separate application with its own published list.'
          ] },
        { kind: 'source', html: 'Sources: ' + FUT + ' (Ontario requirements, all three campuses), ' + UTM + ' and ' + UTSC + ', read 22 October 2026. The central page states no admission year, so we give the date we read it. We have no affiliation with the University of Toronto.' }
      ]
    },
    {
      id: 'direct', tint: 'deep', eyebrow: 'Direct entry',
      h2: 'Mississauga and Scarborough: direct from high school only',
      lede: 'Both campus sites carry a warning that matters for anyone thinking of starting elsewhere and transferring in.',
      body: [
        { kind: 'table', caption: 'Entry rules on the two campus computer science pages (read 22 October 2026)', head: ['Campus', 'Wording on the campus page'], rows: [
          ['Mississauga (TMX)', '&ldquo;Entry to the Computer Science admission category is gained directly from high school.&rdquo; Transfer students who have completed any post-secondary studies, including at other U of T divisions, &ldquo;are not eligible for admission to the Computer Science admission category.&rdquo; The Specialist and Major are &ldquo;open only to those applying directly from high school.&rdquo;'],
          ['Scarborough (TXC)', '&ldquo;Please note: Computer Science is direct from high school only. If you have any post-secondary education, you are not eligible for admission.&rdquo;'],
          ['St. George (TAD)', 'The Arts &amp; Science admission page that would describe this did not load for us (a bot check), so we report nothing for St. George here']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What that means for planning',
          left: [
            'On the two campus pages we read, a student cannot take a year of another program and then apply into computer science as a transfer. The Grade 12 application is the entry point, so the Grade 12 courses and the supplementary application are where the effort belongs.',
            'Families sometimes assume a gap year of college or university courses can only help. On these two pages, any post-secondary study makes a student ineligible for the computer science admission category.'
          ],
          rightH3: 'What a program at Scarborough contains',
          right: [
            'Scarborough&rsquo;s page says that in the Specialist, &ldquo;More than half of the credits needed for your degree will be in Computer Science.&rdquo; It lists five streams: Comprehensive, Artificial Intelligence and Machine Learning, Entrepreneurship, Information Systems and Software Engineering.',
            'Mississauga&rsquo;s page describes computer science research areas including human-computer interaction, software engineering, numerical analysis, machine learning and cryptography. Both are real computer science degrees with heavy mathematics, which is why the math prerequisites exist.'
          ] }
      ]
    },
    {
      id: 'supplementary', tint: 'tint', eyebrow: 'Supplementary applications',
      h2: 'The supplementary application: three pages, three descriptions',
      lede: 'This is where U of T&rsquo;s own pages are least consistent, so we quote each one and add nothing. The Join U of T applicant portal is the final word for each applicant.',
      body: [
        { kind: 'table', caption: 'What each U of T page said about a supplementary application for computer science (read 22 October 2026)', head: ['Page', 'What it says'], rows: [
          ['future.utoronto.ca, Computer Science, St. George column', 'Supplemental Application: Required'],
          ['future.utoronto.ca, Computer Science, Mississauga and Scarborough columns', 'No supplemental application row shown'],
          ['future.utoronto.ca, Dates and Deadlines, 2027 admissions', 'Under Arts &amp; Science, U of T St. George: &ldquo;Computer Science Supplementary Application due February 1&rdquo;. Under U of T Scarborough: &ldquo;Supplementary Application Form due February 1 (required for some program areas)&rdquo;'],
          ['future.utoronto.ca, Supplemental Applications', 'Lists a &ldquo;Computer Science Supplemental Application&rdquo; under the Faculty of Arts &amp; Science'],
          ['utm.utoronto.ca, Computer Science', '&ldquo;A supplementary application is required.&rdquo;']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How to read the disagreement',
          left: [
            'St. George is described as requiring one on every central page we read. Mississauga&rsquo;s own page says one is required even though the central program page shows no such row. For Scarborough, the deadlines page says its form is required for some program areas without naming them on that page.',
            'We are not in a position to resolve that, and guessing would not help a family. The applicant portal lists each student&rsquo;s required items after they apply, and that list is the one to follow.'
          ],
          rightH3: 'What a supplementary application can look like',
          right: [
            'U of T&rsquo;s supplemental applications page says &ldquo;Most programs only require your academic results for admission.&rdquo; Where a program does ask for more, the page says applicants may need to &ldquo;answer short-answer or essay questions, provide a personal profile or even submit a video response.&rdquo;',
            'Whatever the format, the answers must be the student&rsquo;s own. We teach coding and math, and we do not produce or revise application material of any kind.'
          ] },
        { kind: 'source', html: 'Sources: ' + FUT + ', ' + DL + ', ' + L('https://future.utoronto.ca/supplemental-applications', 'U of T Supplemental Applications') + ' and ' + UTM + ', read 22 October 2026.' }
      ]
    },
    {
      id: 'averages', tint: 'deep', eyebrow: 'Published grade ranges',
      h2: 'What the campuses publish about averages',
      lede: 'The central program page lists no average for any campus. Two campus sites publish a range in their own words. We copy those words exactly and do not compare one campus with another.',
      body: [
        { kind: 'table', caption: 'Grade ranges published on the campus computer science pages (read 22 October 2026)', head: ['Campus', 'Label on the page', 'What it says'], rows: [
          ['Mississauga (TMX)', 'Competitive Average', 'Mid to High 80s'],
          ['Scarborough (TXC)', 'Approximate grade requirements', 'Minimum 70% English; High 90s overall (co-op); Low 90s overall'],
          ['St. George (TAD)', 'Not published on the pages we could read', 'Not stated']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why we stop at the quotation',
          left: [
            'A published range describes past applicants in general terms. It is not a threshold, and a campus that also requires a supplementary application reads more than grades. Turning these numbers into advice about any one student&rsquo;s chances would be guesswork presented as fact, so we do not do it, and no one on our team will.',
            'Scarborough distinguishes the co-op version of the program from the regular one, and lists a separate minimum for English. Families should read that whole block on the campus page rather than our summary of it.'
          ],
          rightH3: 'What the numbers do tell a Grade 11 student',
          right: [
            'They say the required Grade 12 courses carry weight, which is not news but is worth acting on early. Advanced Functions and Calculus and Vectors are demanding courses, and marks in them come from understanding, not from last-minute drilling.',
            'That is the part we can help with. Our Grade 12 math teaching aims at a student who can explain why a derivative rule works, check a vector answer geometrically, and recover when a question is phrased in an unfamiliar way.'
          ] }
      ]
    },
    {
      id: 'checker', tint: 'tint', eyebrow: 'A worked example, ours',
      h2: 'Checking a Grade 12 plan against all three lists, in Python',
      lede: 'Requirements written as &ldquo;ENG4U / EAE4U&rdquo; are really sets of alternatives: any one course from the set satisfies that line. That makes a campus list easy to check in code, and writing the checker is a good exercise in sets. The plans below are invented. The program only compares course codes with the lists as published; it says nothing about admission.',
      body: [
        { kind: 'ol', items: [
          '<b>Model one requirement as a set.</b> The English line becomes the set of ENG4U and EAE4U; the calculus line becomes a set with one member, MCV4U.',
          '<b>Model a campus as a list of those sets.</b> St. George has two; Mississauga and Scarborough have three each.',
          '<b>Model a student&rsquo;s plan as a set of course codes.</b> Order does not matter, and a course appears once.',
          '<b>A requirement is covered if the two sets overlap.</b> In Python, <code>alts &amp; plan</code> is the intersection; an empty intersection means nothing in the plan satisfies that line.',
          '<b>Collect what is not covered, rather than returning true or false.</b> A list of missing lines is more useful to a student than a yes or no.',
          '<b>Test a plan built to fail.</b> A plan that breaks one rule on purpose proves the checker can see the gap.'
        ] },
        { kind: 'code', label: 'Python &middot; prerequisite set checker (ours)', lang: 'python', code: SETS_PY, note: 'Output for Plan A: all listed courses in plan, on all three campuses. Plan B: not in plan: EAE4U / ENG4U, on all three, because ENG4C is a college-preparation (C) English, not a U course. Test C: all listed courses in plan at St. George; not in plan: MHF4U at Mississauga and Scarborough.' },
        { kind: 'table', mt: true, caption: 'What each invented plan shows (ours; outputs from Python 3.13)', head: ['Plan', 'What is different', 'What the checker reports'], rows: [
          ['Plan A', 'EAE4U instead of ENG4U, plus MHF4U and MCV4U', 'Every listed line covered on all three campuses: EAE4U satisfies the English set'],
          ['Plan B', 'ENG4C, a college-preparation (C) English, instead of a U English', 'The English line uncovered everywhere: a C course is not in the set'],
          ['Test C', 'A plan built to fail, with no MHF4U', 'Covered at St. George on the central page&rsquo;s list; MHF4U missing at the other two']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the exercise teaches',
          left: [
            'The intersection test is one line, but the modelling decision behind it is the real lesson: a slash in a requirement means or, and a list of requirements means and. Students who see that structure can read any university&rsquo;s requirements, and any software specification, more carefully.',
            'Test C is the kind of input good programmers write first. It is deliberately unrealistic, a plan without Advanced Functions, and its only job is to prove the checker notices a difference between campuses that a quick reading might miss.'
          ],
          rightH3: 'What it cannot do',
          right: [
            'The checker knows the course lists we copied on one day. It does not know the six-course rule, marks, the supplementary application or any later change U of T makes. A green line from it means only that the codes match.',
            'Treat it as a reading aid. The authoritative check is U of T&rsquo;s own page and, after applying, the applicant portal.'
          ] }
      ]
    },
    {
      id: 'dates', tint: 'deep', eyebrow: '2027 admissions',
      h2: 'U of T dates for computer science applicants',
      lede: 'U of T&rsquo;s deadline table is headed 2027 admissions and gives each date as a day and month. We copy them in that form.',
      body: [
        { kind: 'table', caption: 'From U of T Dates and Deadlines, 2027 admissions (read 22 October 2026)', head: ['Step', 'Arts &amp; Science, St. George', 'U of T Mississauga', 'U of T Scarborough'], rows: [
          ['Recommended early application date', 'November 7', 'November 7', 'November 7'],
          ['Application deadline', 'January 15', 'January 15', 'January 15'],
          ['Supporting documents deadline', 'February 1', 'February 1', 'February 1'],
          ['Supplemental application', 'Computer Science Supplementary Application due February 1', 'Not listed in this table', 'Supplementary Application Form due February 1 (required for some program areas)']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Early consideration',
          left: [
            'U of T says applicants who apply by November 7 and complete the next steps in the Join U of T portal by December 1 can be considered in the first admission round as well as later ones. It also says decisions &ldquo;will be released beginning in January and continue through to late May.&rdquo;',
            'For an Ontario Grade 12 student in the 2026 to 2027 school year, that makes November the month to finish the application itself, so that December and January can go to schoolwork and any supplementary application.'
          ],
          rightH3: 'Applying to more than one campus',
          right: [
            'Each campus has its own OUAC code, so a student interested in computer science at two or three campuses lists each one. The prerequisites table above shows why that is worth doing carefully: a plan that matches one campus&rsquo;s list may leave a line uncovered at another.',
            'The application goes through the Ontario Universities&rsquo; Application Centre. U of T says that about a week after applying, students receive an email explaining how to log into their applicant portal.'
          ] },
        { kind: 'source', html: 'Source: ' + DL + ', 2027 admissions tables and FAQ, read 22 October 2026.' }
      ]
    },
    {
      id: 'choosing', tint: 'tint', eyebrow: 'Choosing, ours',
      h2: 'Questions to ask before choosing campuses',
      lede: 'These questions are ours. None of them is about which campus is easier, because nothing we read supports an answer to that, and it is the wrong question anyway.',
      body: [
        { kind: 'ol', items: [
          '<b>Does my Grade 12 plan cover every listed line on every campus I will apply to?</b> Run the checker above, or do it by hand, then confirm on each campus page.',
          '<b>Which supplementary items will I owe?</b> Read each page, then trust the portal checklist once it appears.',
          '<b>Do I want co-op or work-integrated learning?</b> All three list a work-integrated learning option; the campus pages describe how it works.',
          '<b>Which stream or specialization interests me?</b> Scarborough lists five streams; read the program descriptions rather than the names alone.',
          '<b>Where would I live and study for four years?</b> The three campuses are in different parts of the Toronto area, and that changes daily life more than any course list.',
          '<b>Am I ready for first-year math?</b> Every campus lists Calculus and Vectors. If MCV4U feels shaky in October of Grade 12, that is the most useful thing to fix.'
        ] },
        { kind: 'p', mt: true, html: 'For the Ontario Grade 11 course that many future computer science students take first, see our <a class="ag-inline-link" href="/ics3u-computer-science-help">ICS3U help page</a>. For the contest some students try alongside Grade 12, see <a class="ag-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Grade 12 math, honestly assessed',
    h2: 'Four stages in Calculus and Vectors',
    lede: 'Our own stages, from teaching MCV4U to students who went on to university computer science. They describe understanding, which is what first-year math tests.',
    table: { caption: 'Stages in Calculus and Vectors (ours)', head: ['Stage', 'A sign you are here'], rows: [
      ['1. Pattern matcher', 'Differentiates correctly when the question looks like the last one'],
      ['2. Explainer', 'Says why the chain rule works, using a picture or a small example'],
      ['3. Checker', 'Verifies an answer independently, by graph, estimate or substitution'],
      ['4. Transferer', 'Uses rates of change and vectors on a problem from physics or code']
    ] },
    left: { h3: 'For parents', ps: [
      'Ask your teen how they know an answer is right. A stage 3 student has a method; a stage 1 student says it matched the back of the book.',
      'Moving from stage 1 to stage 2 takes patient questioning, and it is the step a busy classroom has least time for.'
    ] },
    right: { h3: 'For students', ps: [
      'After every calculus question, spend thirty seconds on a sanity check. It is the cheapest habit in mathematics.',
      'Write a short program that estimates a derivative numerically and compare it with your exact answer. You will understand both better.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine further courses for students bound for university',
    lede: 'Every course is taught live by a regular teacher, as a batch class or privately, around the school term.',
    bands: [
      { num: 'I', h3: 'Math beyond the requirement', sub: 'Grades 9 to 12', courses: [
        { code: 'UCS / MTH / 01', slug: 'waterloo-math-contests-gauss-to-euclid-course', title: 'Waterloo math contests', blurb: 'Contest-style reasoning with problems our teachers wrote.' },
        { code: 'UCS / MTH / 02', slug: 'complete-high-school-mathematics-mastery', title: 'High school mathematics', blurb: 'Rebuilding algebra and functions before Grade 12.' },
        { code: 'UCS / MTH / 03', slug: 'ap-calculus-exam-prep', title: 'AP Calculus', blurb: 'For students whose school offers AP alongside MCV4U.' }
      ] },
      { num: 'II', h3: 'Programming foundations', sub: 'Teens', courses: [
        { code: 'UCS / PRG / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Types, classes and objects, for ICS4U and beyond.' },
        { code: 'UCS / PRG / 02', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'Memory, speed and the language of many contests.' },
        { code: 'UCS / PRG / 03', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Data structures chosen for a reason.' }
      ] },
      { num: 'III', h3: 'Toward a specialization', sub: 'Teens', courses: [
        { code: 'UCS / SPC / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'The ideas behind Scarborough&rsquo;s AI stream, built by hand.' },
        { code: 'UCS / SPC / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Statistics and Python on real data sets.' },
        { code: 'UCS / SPC / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'How software teams track every change.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Grade 12 support that follows the Ontario semester',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evenings in Eastern time, fixed when the batch is chosen.' },
      { time: 'Weekends', l: 'Morning classes that leave the afternoon for homework.' },
      { time: '1-on-1', l: 'Timed around unit tests and the January exam weeks.' }
    ],
    cells: [
      { h3: 'One teacher, one term', p: 'Continuity from the first unit to the exam.' },
      { h3: 'School order kept', p: 'The units your teen&rsquo;s teacher sets, in that sequence.' },
      { h3: 'Every step justified', p: 'No rule used without knowing why it holds.' },
      { h3: 'Math meets code', p: 'Short programs that test each new idea.' },
      { h3: 'Forms stay theirs', p: 'We never touch application writing.' },
      { h3: 'Two formats', p: 'Batch class of 15 to 20 students, or private.' }
    ]
  },

  projectsH2: 'Student projects',
  projectsLede: 'Work by students we have taught, each one built and explained by its maker. See more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from parents and students, as they wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'The trial class is free. Families who continue pay one monthly fee for eight live classes, displayed with its currency code, and may leave at the end of any month; there is no term to sign up for.',
    free: ['Trial class, no charge', 'Bring this week&rsquo;s math or code', 'No card to book'],
    group: ['Batch of fifteen to twenty', 'A regular teacher', 'Batch time of your choice', 'Paid each month'],
    one: ['Private classes', 'Scheduled around tests', 'Planned from their own course']
  },

  faq: {
    eyebrow: 'Common questions',
    h2: 'U of T computer science admission: questions families ask',
    items: [
      { q: 'What are the U of T computer science prerequisites for Ontario students?', a: 'On 22 October 2026, U of T\'s Future Students page listed ENG4U or EAE4U and MCV4U for St. George (TAD); ENG4U or EAE4U, MHF4U and MCV4U for Mississauga (TMX), with MDM4U recommended; and ENG4U or EAE4U, MCV4U and MHF4U for Scarborough (TXC). All three also need an OSSD with six 4U or M courses including English.' },
      { q: 'What do TAD, TMX and TXC mean?', a: 'They are the OUAC codes students use to apply. TAD is computer science in the Faculty of Arts and Science at St. George, TMX is U of T Mississauga and TXC is U of T Scarborough. Each is a separate application.' },
      { q: 'Does U of T computer science need a supplementary application?', a: 'U of T\'s central page listed one as required for St. George, and its deadlines page gave the Computer Science Supplementary Application a February 1 date for 2027 admissions. Mississauga\'s own page also said one is required. Scarborough\'s form was described as required for some program areas. Follow the applicant portal checklist.' },
      { q: 'What average does U of T publish for computer science?', a: 'The central program page lists none. Mississauga\'s campus page gave a competitive average of mid to high 80s, and Scarborough\'s gave approximate requirements of low 90s overall, high 90s for co-op and at least 70 per cent in English. We quote these and make no prediction about any applicant.' },
      { q: 'Can I transfer into computer science at UTM or UTSC later?', a: 'Not according to the campus pages we read. Mississauga says entry to its computer science admission category is directly from high school and transfer students with post-secondary study are not eligible. Scarborough says computer science is direct from high school only.' },
      { q: 'Is ICS4U required for U of T computer science?', a: 'None of the three campus lists on U of T\'s central page names a computer science course. The listed requirements are English and math courses. A computer science course is still useful preparation for the work.' },
      { q: 'When is the U of T application deadline?', a: 'For 2027 admissions, U of T\'s deadlines table listed January 15 as the application deadline for Arts and Science at St. George, Mississauga and Scarborough, with November 7 as the recommended early date and February 1 for supporting documents.' },
      { q: 'Do co-op credits count toward the U of T average?', a: 'U of T\'s central page says the co-op component of Grade 12 courses will not be used for admission purposes. The base requirement is six subjects at the 4U or M level, including English.' },
      { q: 'Will you help with the U of T supplementary application?', a: 'No. We do not produce or revise application material of any kind. We teach Grade 12 math and programming so that a student\'s own skills and projects are real.' },
      { q: 'What class times are available?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Classes run on Eastern time, and the hour is reconfirmed after the 1 November 2026 change and again after 14 March 2027.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Pages for Ontario families planning ahead.',
    items: [
      { href: '/coding-and-ai-classes-in-toronto', label: 'Coding and AI classes in Toronto', p: 'Live classes for students across the city.' },
      { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario', p: 'Every age, every level, the whole province.' },
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Where all our Canada pages start.' },
      { href: '/ics3u-computer-science-help', label: 'ICS3U help', p: 'Grade 11 computer science in Python or Java.' },
      { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada', p: 'Advanced Functions and Calculus and Vectors.' },
      { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation', p: 'The national programming contest.' },
      { href: '/cemc-waterloo-contests-preparation', label: 'Waterloo math contests', p: 'Contest math for Grades 7 to 12.' },
      { href: '/how-to-read-code', label: 'How to read code', p: 'Reading a program before running it.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside a live class.' }
    ]
  },

  start: {
    h2: 'Begin with a free class',
    lede: 'Send us the Grade 12 courses your teen is taking, the unit they are on and any code they have written. The first lesson works on that material directly.',
    readFirst: 'Prefer to read first? The <a class="ag-inline-link" href="/courses/ontario-grade-12-university-math-mhf4u-mcv4u-course">MHF4U and MCV4U course page</a> lists the units, and <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes a class from start to finish.',
    note: 'Our teachers work from India and teach live over video, so families in the Toronto area or anywhere in Ontario simply log on. WhatsApp reaches us fastest.',
    formNote: 'No payment details are needed to book the free class.'
  },

  footer: {
    cols: [
      { h4: 'Ontario university preparation', links: [
        { href: '/courses/ontario-grade-12-university-math-mhf4u-mcv4u-course', label: 'MHF4U and MCV4U course' },
        { href: '/courses/ics3u-ics4u-computer-science-companion-course', label: 'ICS3U and ICS4U companion' },
        { href: '/courses/ccc-junior-and-senior-preparation-course', label: 'CCC preparation course' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-and-ai-classes-in-toronto', label: 'Toronto' },
        { href: '/coding-classes-in-ontario', label: 'Ontario' },
        { href: '/online-math-tutor-canada', label: 'Math tutoring in Canada' }
      ] }
    ],
    bottomRight: 'A slash means or; a list means and'
  },

  personalityCss: `
.ag-root.ag-ucsa .ag-hero h1 { letter-spacing: -0.015em; max-width: 23ch; }
.ag-root.ag-ucsa .ag-capsule { border-left-width: 5px; }
.ag-root.ag-ucsa .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-ucsa .ag-table caption { text-align: left; }
.ag-root.ag-ucsa .ag-table th { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'University of Toronto pages fetched raw 22 October 2026: future.utoronto.ca Computer Science (Ontario requirements for St. George TAD, Mississauga TMX, Scarborough TXC), Dates and Deadlines (2027 admissions), Supplemental Applications; U of T Mississauga Computer Science; U of T Scarborough Computer Science. Arts & Science admission page blocked by a bot check and not used.',
    localProject: 'Our uncovered() checker in Python, which models each requirement as a set of alternatives and reports the lines a plan does not cover, run on three invented plans (Plan A covered everywhere; Plan B "not in plan: EAE4U / ENG4U" on all three; Test C missing MHF4U at Mississauga and Scarborough only); six campus-choice questions; a four-stage Calculus and Vectors ladder. Lesson family: sets and alternatives.',
    requiredMentions: ['uncovered(plan, requirements)', 'not in plan: EAE4U / ENG4U', 'all listed courses in plan', 'Questions to ask before choosing campuses', 'Computer Science Supplementary Application due February 1', 'three pages, three descriptions', 'Entry to the Computer Science admission category is gained directly from high school', 'Computer Science is direct from high school only', 'Math of Data Management, MDM4U'],
    sources: [
      { claim: 'Ontario prerequisites for TAD, TMX and TXC, the OSSD base rule, co-op credits, degrees and options, St. George supplemental application.', url: 'https://future.utoronto.ca/undergraduate-programs/computer-science/' },
      { claim: '2027 admissions deadlines for application, documents and supplemental applications; release of decisions; early consideration.', url: 'https://future.utoronto.ca/deadlines' },
      { claim: 'Supplemental application formats and the Computer Science Supplemental Application listing.', url: 'https://future.utoronto.ca/supplemental-applications' },
      { claim: 'Mississauga competitive average, prerequisites, supplementary application and direct-entry rule.', url: 'https://www.utm.utoronto.ca/future-students/programs/computer-science' },
      { claim: 'Scarborough direct-entry rule, approximate grade requirements, streams and credit share.', url: 'https://www.utsc.utoronto.ca/admissions/programs/computer-science' }
    ],
    rejectedClaims: [
      'Which campus is easier or harder to get into: no source supports it; the page refuses the comparison.',
      'Any applicant-specific prediction from the published ranges: none made.',
      'A single answer on whether Mississauga or Scarborough requires a supplementary application: the sources differ; all are quoted and families are sent to the portal.',
      'Anything from the Arts & Science admission page: blocked by a bot check, not retried, not used.',
      'Requirements for students outside Ontario: behind a form post, not read, not stated.',
      'UTSC tuition notes and any co-op or employment statistics: left out.',
      'That MHF4U is not needed for St. George: the page only reports that the central list does not name it.',
      'Any affiliation with the University of Toronto: none, and the page says so.'
    ]
  }
};
