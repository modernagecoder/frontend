'use strict';
// Richmond, British Columbia (cg- city page, Canada cluster Wave 2, row 141: vibe-coding-and-ai-agents-classes-in-<city>).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md, brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: vibe coding and AI agents for Richmond teens and adults, taught as "write the tests before you accept the code".
// The local project runs an AI-style first draft against tests a learner wrote first, on Metro Vancouver's Regional
// Greenway Network 2050 file filtered to Richmond, and shows the draft fail. Richmond BC, not Richmond Hill, Ontario.
// Sources, read raw on 22 and 23 October 2026:
//  - BC curriculum (facts-schools-contests.md section 2, ca/src/bc/): ADST 6-7 "Students will experience a minimum of three
//    modules of Applied Design, Skills, and Technologies 6-7 in each of Grades 6 and 7."; ADST 6 computational thinking
//    "simple algorithms", "visual programming" (Kodu, Scratch); ADST 10-12 list includes "Computer Studies 10", "Web
//    Development 10", "Computer Programming 11", "Computer Programming 12", "Robotics 11"; Computer Programming 11
//    "programming language constructs to support input/output, logic, decision structure, and loops"; Computer
//    Programming 12 "higher-level structures, such as functions, methods, or classes, that help improve the organization of
//    source code"; Mathematics list includes "Computer Science 11" and "Computer Science 12". BC graduation pages BLOCKED,
//    so no graduation rule is stated.
//  - BC Gov News 2026AG0013-000209 (ca/src/geo/tz/): permanent daylight time after March 8, 2026; "Pacific time will be set
//    seven hours behind co-ordinated universal time (UTC-7)". facts-geo.md section 3: BC UTC-7 all year, India 12 h 30 min
//    ahead; 4 to 7 pm local is 4:30 to 7:30 am next day in India; 9 am to noon Saturday is 9:30 pm to 12:30 am in India.
//    places.tsv: Richmond CSD 5915015 in the Vancouver CMA; area codes 236, 257, 604, 672, 778. No population used.
//  - CEMC (facts-schools-contests.md section 6): BCC 9 to 20 November 2026, Grade 9/10 level "Grade 10 or below", 45 minutes,
//    English only; CCC "Wednesday, February 17, 2027", level by skill "regardless of their grade", C, C++, Python, Java;
//    "all students must participate through their school."; CCC rules (src-pilots/ccc-junior-guide/ccc-rules.txt):
//    "AI-based tools within an IDE cannot be used."
//  - Tool terms (src-pilots/ai-classes-for-kids-in-canada/, src-pilots/vibe-coding-and-ai-agents-classes-in-canada/):
//    Anthropic Consumer Terms (effective Oct 8, 2025) minimum age 18; OpenAI Terms (effective January 1, 2026) "If you are
//    under 18 you must have your parent or legal guardian's permission to use the Services"; GitHub Terms "A User must be at
//    least 13 years of age."; GitHub Education, Copilot "Available for free to verified students, teachers, and open-source
//    maintainers". Anthropic, Building effective agents (Dec 19, 2024): agents need "ground truth" from the environment at
//    each step "(such as tool call results or code execution)".
//  - Metro Vancouver open data (src-pilots/vibe-coding-and-ai-agents-classes-in-richmond-bc/): Regional Greenway Network
//    2050, item 64dae354287e41b5a5f5b97b2d0e5e3d, FeatureServer/2 query saved as mv_regional_greenway_network_2050_all.json
//    (233,799 bytes, sha256 cebcb208...2f76), 535 segments region-wide, 51 with Municipality Richmond. Item description:
//    "reflects the progress made in expanding the RGN across the region between 2020 and 2023"; status definitions quoted
//    from it (Class 1 "complete routes that are available to the public for walking and cycling"; Class 2 "interim routes"
//    that "do not meet the 3m wide width goal and/or are not separated from traffic"); "Last Updated: November 19, 2024".
//    Licence: Open Government Licence - Metro Vancouver (mv_ogl_page_data.json): "license to use the Information, including
//    for commercial" / "purposes, subject to the terms below."; attribution "information licensed under the Open Government
//    Licence" + dash + "Metro Vancouver." (dash not reproduced). The City of Richmond publishes no dataset under an open
//    licence that we could find (portal items carry no licence or "Unauthorized use is strictly prohibited"), so the regional
//    file is used and the page says so.
// Our own calculations (greenway_tests_first.py, python -I, output greenway_tests_first.out.txt): 51 Richmond segments, 13
//  route names; status Operational - Class 1 23, Operational - Class 2 13, Planned 12, Proposed New 3; Steveston Greenways /
//  South Dike / East Richmond Trails+ has 24 segments (11, 6, 5, 2); routes with every segment operational: Cambie Skytrain
//  Bridge, Delta South-Surrey Regional Greenway, Knight St. Bridge, Oak St Bridge, Railway Ave. Greenway, West Dike Trail;
//  the draft also claims 4 more; 3 segments (OBJECTID 618, 812, 1005) moved from Operational to Planned; RouteDescription
//  "NA" in 6 rows. No length total is printed.
// Lesson family: tests written before accepting AI code; segments versus routes; all() versus any().

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const SCRIPT = esc(`# Tests first, then the AI-style draft, then the fix (Modern Age Coders, written for this page)
import json

DATA = json.load(open("mv_regional_greenway_network_2050_all.json", encoding="utf-8"))
SEGMENTS = [f["attributes"] for f in DATA["features"] if f["attributes"]["Municipality"] == "Richmond"]

# Step 1: the learner writes the tests before asking for any code. A tiny route of our own invention:
FIXTURE = [{"Name": "Test Route", "Status": "Operational - Class 1"},
           {"Name": "Test Route", "Status": "Planned"}]

def run_tests(open_routes):
    results = []
    results.append(("half-built test route is not open", "Test Route" not in open_routes(FIXTURE)))
    every = open_routes(SEGMENTS)
    results.append(("open routes are a subset of route names", set(every) <= {s["Name"] for s in SEGMENTS}))
    results.append(("no open route has a Planned segment",
                    all(s["Status"].startswith("Operational") for s in SEGMENTS if s["Name"] in every)))
    return results

# Step 2: the draft, the kind an assistant returns first. It reads well and is wrong.
def draft_open_routes(segs):
    return sorted({s["Name"] for s in segs if s["Status"].startswith("Operational")})

# Step 3: the version that passes, written after a test failed.
def open_routes(segs):
    names = {s["Name"] for s in segs}
    return sorted(n for n in names if all(s["Status"].startswith("Operational") for s in segs if s["Name"] == n))

for label, fn in (("draft", draft_open_routes), ("fixed", open_routes)):
    print(label, [("PASS" if ok else "FAIL") + ": " + name for name, ok in run_tests(fn)])`);

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'RICHMOND BC', label: 'Richmond, BC', blurb: 'Vibe coding and AI agents for teens and adults in Richmond, British Columbia, taught test-first on Metro Vancouver greenway data.' },
  market: CA,
  slug: 'vibe-coding-and-ai-agents-classes-in-richmond-bc',
  code: 'vaar',
  accent: '#80415A',
  accentRationale: 'Richmond, BC: a muted dike-berry plum, #80415A, allocated for row 141 at least 6 RGB units from every site accent and 14 from the other Canada accents; contrast 7.02 on the paper #FBF8F2 (6.60 and 6.04 on the two darker paper tints), above 4.5 on all three',
  pageType: 'city',
  place: {
    name: 'Richmond',
    eyebrow: 'Richmond, British Columbia',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'British Columbia' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }, { slug: 'coding-classes-in-british-columbia', name: 'British Columbia' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'British Columbia', href: '/coding-classes-in-british-columbia' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Richmond, BC',
  title: 'Vibe Coding and AI Agents Classes in Richmond, BC | Live Online',
  description: 'Vibe coding and AI agents for Richmond, BC teens and adults: tests written before AI code is kept, age rules for each tool, and a greenway data project.',
  ogDescription: 'Richmond learners build with AI help and prove it works: tests first, a draft that fails them, and Metro Vancouver greenway data checked route by route.',
  twitterDescription: 'Vibe coding and AI agents in Richmond, BC, for teens and adults, live online and test-first.',
  ogImageCourse: 'vibe-coding-for-teens-python-web-ai-projects-course',
  verifiedOn: '23 October 2026',
  courseSchema: {
    name: 'Vibe Coding and AI Agents Classes for Richmond, BC Learners',
    description: 'Live online vibe coding for Richmond teens aged 13 to 17 and AI agent development for adults, in separate courses, where every piece of AI-written code must pass tests the learner wrote first.'
  },

  h1: 'Vibe coding and AI agents classes in Richmond, BC',
  capsuleQ: 'Can a Richmond teen or adult learn vibe coding and AI agents properly?',
  capsule: 'Yes. Modern Age Coders teaches vibe coding and AI agents live online to Richmond, British Columbia learners: Vibe Coding for Teens for ages 13 to 17, and our Codex and Claude Code course for adults only. Learners join a class of fifteen to twenty or work with a teacher alone, and nothing an AI writes is kept until it passes the learner\'s own tests.',
  lead: 'This page is for Richmond in British Columbia, the island city between the two arms of the Fraser, not Richmond Hill in Ontario. Vibe coding means describing what you want and letting an AI model write the code; an AI agent goes further and decides which tools to run. Both save time, and both hand back code that looks finished before it is. Our answer is a habit we teach from the first class: write the test first, then let the AI try to pass it. Below you will see that habit on a real file, Metro Vancouver\'s greenway network filtered to Richmond, where a tidy first draft fails two of three tests. You will also find which AI tools a teen may legally use, what BC schools already teach, and how class times work on permanent Pacific time.',
  wa: 'Hello Modern Age Coders, I am in Richmond, BC and would like a free first class in vibe coding or AI agents.',

  picks: {
    eyebrow: 'Course picks for Richmond',
    h2: 'Four courses, chosen by age before anything else',
    intro: 'The tools a person may use depend on age, so the course does too. The free first class confirms the level.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Build Python and web projects with AI help that a teen is allowed to use, then explain every line and prove it with tests. Twelve weeks.' },
      { course: 'python-complete-masterclass-teens', band: 'Teens, first', note: 'For a teen who has never written a loop: the Python that makes AI-written Python readable, from variables to files and functions.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', band: 'Adults only, 18+', note: 'Agentic coding tools on real repositories for working adults. Claude Code is 18 and over under Anthropic\'s terms, so no teen joins this course.' },
      { course: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', band: 'Ages 18 and up', note: 'For university students and career changers: full stack projects built with AI assistance, plus the data structures that let you judge what it wrote.' }
    ]
  },

  sections: [
    {
      id: 'testfirst', tint: '', eyebrow: 'How we teach it',
      h2: 'Vibe coding in Richmond, taught the test-first way',
      intro: 'The word for the method is old; the reason for it is new. When a model can write fifty lines in a few seconds, the slow part of programming moves to deciding whether those fifty lines are right.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Say what right looks like', p: 'Before a prompt is typed, the learner writes down two or three checks the answer must pass, in plain code. A check is a promise that can be tested, not a feeling that the output looks sensible.' },
          { h3: '2. Let the AI draft', p: 'Only then does the assistant write the function. Teens use a tool their age allows; adults may use an agent that edits files and runs commands. Either way the draft is treated as a suggestion from a fast, careless colleague.' },
          { h3: '3. Run, read, repair', p: 'The tests run. Any failure is read and understood before anything is changed, and the repair is written or approved line by line by the learner. A line nobody can explain does not stay in the project.' }
        ] },
        { kind: 'p', text: 'This is how we keep the owner\'s promise in a subject where it is easy to break: we teach students to think a problem through, not to copy an answer, and AI output is an answer like any other. A Richmond Grade 10 student and a Richmond software tester will meet the same three steps; the teen practises them in Python with permitted tools, the adult on a larger codebase with an agent.' },
        { kind: 'table', mt: true, caption: 'What an AI coding agent does, and what it still needs from a person (our summary; the quoted phrase is Anthropic\'s, Building effective agents, 19 December 2024)', head: ['The agent can', 'The person still has to'], rows: [
          ['Write a working-looking function in seconds', 'Decide, before reading it, what the function must and must not return'],
          ['Read tool results and code output as it goes', 'Make sure those results are real: Anthropic says agents need &ldquo;ground truth&rdquo; from the environment at each step'],
          ['Repeat a fix across many files', 'Review each change in version control and undo the ones that went wrong'],
          ['Explain its own code fluently', 'Check the explanation against what the code actually does when it runs']
        ] }
      ]
    },
    {
      id: 'greenway', tint: 'deep', eyebrow: 'Richmond data project',
      h2: 'Which Richmond greenways are open end to end? Tests before the AI draft',
      intro: 'Metro Vancouver publishes its Regional Greenway Network 2050 as open data. The file splits each route into segments and gives every segment a status. Our learners ask one question of the Richmond rows, write the tests first, and then watch an AI-style draft fail them. The code and every count below are ours, run on the file downloaded on 23 October 2026.',
      body: [
        { kind: 'table', caption: 'Richmond segments in the Regional Greenway Network 2050 file, by status (our count of the 51 rows tagged Richmond; the status meanings are Metro Vancouver\'s own wording, shortened)', head: ['Status in the file', 'What Metro Vancouver says it means', 'Richmond segments'], rows: [
          ['Operational - Class 1', '&ldquo;complete routes that are available to the public for walking and cycling&rdquo;', '23'],
          ['Operational - Class 2', '&ldquo;interim routes&rdquo; that &ldquo;do not meet the 3m wide width goal and/or are not separated from traffic&rdquo;', '13'],
          ['Planned', 'Future routes already in providers\' plans, still needing planning, land, design, funding or construction', '12'],
          ['Proposed New', 'Conceptual routes proposed to fill gaps in the network', '3']
        ] },
        { kind: 'p', text: '<b>The question:</b> which named Richmond routes are open along their whole length? The 51 segments carry only 13 route names, and one of them, Steveston Greenways / South Dike / East Richmond Trails+, is split into 24 segments: 11 in Class 1, 6 in Class 2, 5 Planned and 2 Proposed New. That single route is where a hasty answer goes wrong.' },
        { kind: 'p', text: 'Here is the whole exercise as one Python file. It uses only the standard library and runs beside the downloaded JSON:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'table', mt: true, caption: 'What the run printed (our output, 23 October 2026)', head: ['Version', 'Test 1: half-built route', 'Test 2: real names only', 'Test 3: no Planned segment'], rows: [
          ['AI-style draft', 'FAIL', 'PASS', 'FAIL'],
          ['Fixed version', 'PASS', 'PASS', 'PASS']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Why the draft fails', p: 'It keeps a route if any one segment is operational. In Python that is the difference between any() and all(), and it is the most common shape of mistake in AI-written data code: correct syntax, wrong meaning. The draft names 10 routes; only 6 are open end to end.' },
          { h3: 'What the fix returns', p: 'Six routes have every Richmond segment operational: Cambie Skytrain Bridge, Delta South-Surrey Regional Greenway, Knight St. Bridge, Oak St Bridge, Railway Ave. Greenway and West Dike Trail. The four the draft added wrongly include the 24-segment Steveston route and the Sea Island Recreational Trail.' },
          { h3: 'Why test 1 uses made-up data', p: 'The two-row Test Route is ours, invented on purpose. A small case whose right answer you know by heart catches a wrong idea faster than a 51-row file whose answer you are still trying to find.' }
        ] },
        { kind: 'callout', h3: 'Three things the file cannot tell you', p: 'Three segments, OBJECTID 618, 812 and 1005, were Operational in the PreviousStatus column and are Planned now; the file does not say why, so we do not guess. Six rows carry the placeholder NA as their route description. And Metro Vancouver says the dataset reflects progress between 2020 and 2023, so a route opened since may still read Planned here.' },
        { kind: 'p', text: 'The file is Metro Vancouver\'s, not the City of Richmond\'s: we could not find a City of Richmond dataset published under an open licence, so we used the regional district\'s, filtered to the rows tagged Richmond. Some of those rows are bridges at the city\'s edge, which is why we count routes and never print a total length. Used under the Open Government Licence - Metro Vancouver, which allows use including for commercial purposes (<a class="cg-inline-link" href="https://open-data-portal-metrovancouver.hub.arcgis.com/pages/Open%20Government%20Licence">licence</a>). Contains information licensed under the Open Government Licence - Metro Vancouver. Metro Vancouver does not endorse this page or our classes.' }
      ]
    },
    {
      id: 'tools', tint: 'tint', eyebrow: 'Who may use which tool',
      h2: 'AI coding tools by age, from each company\'s own terms',
      intro: 'Most vibe coding videos skip this part. We read the terms of the tools our learners use on 22 October 2026; the age rules below decide which course a Richmond learner joins.',
      body: [
        { kind: 'table', caption: 'Age rules in the terms of common AI coding tools (read 22 October 2026; companies revise these pages, so read the current version yourself)', head: ['Tool', 'What the terms say', 'Richmond teens, 13 to 17', 'Adults'], rows: [
          ['GitHub and GitHub Copilot', 'GitHub requires users to be at least 13. GitHub Education lists Copilot as &ldquo;Available for free to verified students, teachers, and open-source maintainers&rdquo;.', 'Allowed from 13, free once verified as a student', 'Allowed'],
          ['ChatGPT and other OpenAI services', 'Minimum age 13; under 18 needs a parent\'s or legal guardian\'s permission (terms effective 1 January 2026).', 'Only with a parent\'s permission', 'Allowed'],
          ['Claude and Claude Code (Anthropic)', 'Users must be at least 18 (consumer terms effective 8 October 2025).', 'Never used or recommended', 'Allowed, in the adult course'],
          ['Canadian Computing Competition', 'Contest rules ban generative AI outright, including assistants built into a code editor.', 'Practise contest problems with no assistant', 'Not relevant']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For Richmond parents', p: 'Your teen will not be asked to sign up for any tool their age rules out. If a class uses an OpenAI tool, we ask for your permission first, because the company\'s own terms require it for anyone under 18.' },
          { h3: 'For Richmond adults', p: 'Adults practise with agents like Claude Code and Codex inside a Git repository: whatever the agent edits shows up as a diff a person reviews, tests and can roll back.' },
          { h3: 'For contest students', p: 'Because the CCC bans AI help, teen classes include regular practice with every assistant switched off. The test-first habit transfers to contest day; the crutch does not.' }
        ] }
      ]
    },
    {
      id: 'school', tint: '', eyebrow: 'What BC schools teach',
      h2: 'Coding in British Columbia schools, and where AI help fits',
      intro: 'Richmond public schools follow the BC curriculum. We went through the ministry\'s curriculum site on 22 October 2026; text in quotation marks comes from it, and the plain descriptions are our own.',
      body: [
        { kind: 'table', caption: 'Coding in the BC curriculum, Grade 6 to Grade 12 (BC Ministry of Education and Child Care curriculum site, read 22 October 2026)', head: ['Stage', 'What the curriculum includes', 'Where test-first vibe coding helps'], rows: [
          ['Grades 6 and 7, ADST', 'At least three ADST modules each year; the computational thinking module lists &ldquo;simple algorithms&rdquo; and &ldquo;visual programming&rdquo;, for example Scratch', 'Too early for AI coding tools; logic and testing ideas start here'],
          ['Grades 10 to 12, ADST courses', 'Computer Studies 10, Web Development 10, Computer Programming 11 and 12, Robotics 11 and 12, among others', 'Web Development 10 projects are natural first vibe coding work'],
          ['Computer Programming 11', '&ldquo;programming language constructs to support input/output, logic, decision structure, and loops&rdquo;', 'The any() versus all() bug above is exactly a decision-structure question'],
          ['Computer Programming 12', '&ldquo;higher-level structures, such as functions, methods, or classes, that help improve the organization of source code&rdquo;', 'Tests per function are how you check AI-written functions'],
          ['Mathematics: Computer Science 11 and 12', 'Separate computing courses filed under mathematics, beside Pre-calculus and Calculus', 'Algorithm reasoning that lets a student judge an AI\'s approach']
        ] },
        { kind: 'p', text: 'Two practical notes for a Richmond Grade 10 to 12 student. First, our classes sit beside a school course and never replace it; marked school work stays the student\'s own, and we do not grant British Columbia credits. Second, the contests most BC schools use are CEMC\'s. CEMC lists the Beaver Computing Challenge for 9 to 20 November 2026 (open to Grade 10 or below, 45 minutes, English only) and the 2027 Canadian Computing Competition for Wednesday 17 February 2027, where students choose Junior or Senior by skill regardless of grade. Entry is arranged by schools: CEMC does not let students register on their own. Our <a class="cg-inline-link" href="/computer-programming-11-and-12-bc">Computer Programming 11 and 12 page</a> covers the BC courses in depth, and the <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation page</a> covers the contest.' }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Class times',
      h2: 'Richmond is on Pacific time all year now',
      intro: 'British Columbia stopped changing its clocks in 2026. The BC government said the province would adopt permanent daylight time after clocks moved forward on 8 March 2026, with Pacific time set seven hours behind UTC.',
      body: [
        { kind: 'table', caption: 'Example conversions only, not a fixed timetable: Richmond and India clocks in the 2026 to 2027 school year (UTC-7 from the BC release and the IANA time zone database 2026e; conversions are ours)', head: ['Richmond time', 'India time', 'Example of who might pick it'], rows: [
          ['Weekday 4 to 7 pm', '4:30 to 7:30 am the next day', 'Teens after school'],
          ['Weekday 7 to 9 pm', '7:30 to 9:30 am the next day', 'Adults after work'],
          ['Saturday 9 am to noon', '9:30 pm to 12:30 am', 'Teens and adults who prefer mornings']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'No November surprise', p: 'Ontario and Quebec families change clocks on 1 November 2026; Richmond does not. A reminder that worked in October still works in December, and our teachers confirm times in Pacific time only.' },
          { h3: 'Richmond phone numbers', p: 'Numbers with the 604, 778, 236, 672 or 257 area codes work in the form below. Enter all ten digits; the country code is supplied for you.' },
          { h3: 'Teachers in India', p: 'Our teachers work from India, which is twelve and a half hours ahead of Richmond all year. That is why Richmond evenings and weekend mornings are the easiest slots to arrange.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a first Python loop to agents you can trust',
    intro: 'Ages are a guide; the free class places each learner by what they can already read and explain.',
    cols: [
      { band: 'Ages 13 and 14', h3: 'Read code first', p: 'Python by hand: loops, conditions, functions, and the first tests a learner writes themselves.', courses: ['python-complete-masterclass-teens', 'git-github-version-control-course-for-teens'] },
      { band: 'Ages 14 to 17', h3: 'Vibe coding with permitted tools', p: 'Web and Python projects built with assistants a teen may use, every change checked by tests.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 and up', h3: 'Building with AI', p: 'Full stack work with AI assistance, data structures, and generative AI from first principles.', courses: ['vibe-coding-for-college-fullstack-ai-dsa-career-course', 'complete-generative-ai-masterclass-college'] },
      { band: 'Working adults', h3: 'Agents on real code', p: 'Agentic coding tools on a live repository, with review, testing and safe rollback. Adults only.', courses: ['codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an AI writes the code, what is left for a Richmond learner to learn?',
    intro: 'The part that decides whether the code is any good.',
    p1: 'In the greenway example the draft was short, readable and confident, and it named four routes as open that are not. Nothing in the code looked wrong. The only reason anyone noticed is that a person had already decided, in a test, what a half-built route must return. That decision is not something a model can make for you, because it depends on what you mean by open.',
    p2: 'So our classes spend less time on typing and more on judgement: choosing the question, writing the check, reading the failure, and owning the fix. Teens build that judgement with tools their age allows; adults apply it to agents that act on their behalf. In both groups, the person stays the author.',
    closer: 'A Richmond learner who can write the test before the code will still be useful when the tools change again next year.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online classes for Richmond, from Steveston to City Centre',
    intro: 'Nobody crosses a bridge for a lesson. Every class is live, online and taught by a teacher who watches the learner\'s screen.',
    cells: [
      { h3: 'When classes run', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Batch or one to one', p: 'A batch of fifteen to twenty learners of the same age group and level, or one teacher for one learner, which suits adults bringing their own codebase.' },
      { h3: 'Teens and adults apart', p: 'Teen and adult classes never mix, because their permitted tools differ. A sixteen-year-old and a forty-year-old are placed in different courses even at the same level.' },
      { h3: 'Nearby in Metro Vancouver', p: 'Learners in Vancouver, Burnaby, Surrey and Delta join the same classes on the same Pacific time clock as Richmond.' },
      { h3: 'What you need', p: 'A laptop or desktop with a current browser, a microphone, and a steady connection. Teens need no paid AI subscription; adults are told in advance which tools the course uses.' },
      { h3: 'Begin with a free lesson', p: 'Your first session costs nothing and is taught like any other, then closes with a recommended level and course. We take no payment details at that stage.' }
    ],
    spec: { title: 'No Richmond office', p: 'Modern Age Coders has no centre in Richmond and claims none. Teaching is live and online from India, and we are not connected with the City of Richmond, Metro Vancouver, the BC ministry or CEMC.' }
  },

  fees: {
    h2: 'Fees for Richmond learners',
    intro: 'Three lines, each shown in your own currency by the price anchor.',
    first: 'A full live lesson at no cost, ending with a placement and a course suggestion.',
    group: 'The monthly fee for a batch of fifteen to twenty learners of one age group, eight live classes a month.',
    private: 'The monthly fee for one teacher and one learner, at times that suit you.',
    closer: 'Richmond pays the same monthly fee as the rest of Canada. Nothing is billed before the free lesson, and adults working around shifts can pause between months.'
  },

  reviewsH2: 'What families and students say about us on Google',

  book: {
    h2: 'Tell us about the Richmond learner',
    intro: 'The first class begins with a short AI-written function that hides one mistake. Spotting it and writing a test that exposes it shows the teacher where you stand, and which of the age-based courses suits you.',
    success: 'Thank you. The team will be in touch soon about a first class for Richmond.'
  },

  faq: {
    h2: 'Vibe coding and AI agents in Richmond, BC: questions',
    intro: 'What Richmond teens, parents and adults ask us most.',
    items: [
      { q: 'Do you teach vibe coding classes in Richmond, BC?', a: 'Yes, live online. Richmond teens aged 13 to 17 take Vibe Coding for Teens, and adults take separate courses. There is no Richmond classroom; every lesson is with a real teacher over video.' },
      { q: 'Is this page about Richmond, BC or Richmond Hill, Ontario?', a: 'Richmond, British Columbia, in Metro Vancouver. Richmond Hill is a different city in Ontario with different school courses and a different time zone.' },
      { q: 'What is vibe coding, in plain words?', a: 'Describing the program you want in ordinary language and letting an AI model write the code. Our classes treat that as the first step and teach the rest: testing, reading and fixing what the AI wrote.' },
      { q: 'Can my 15-year-old use Claude or Claude Code in your classes?', a: 'No. Anthropic sets 18 as the minimum age for its consumer services, so Claude and Claude Code appear only in our adult courses and are never suggested to anyone under 18.' },
      { q: 'Does my teen need ChatGPT for the teen course?', a: 'No. OpenAI\'s terms say anyone under 18 needs a parent\'s or guardian\'s permission, so we ask you first. Teens can work with GitHub Copilot instead, which GitHub offers free to verified students.' },
      { q: 'Can a Richmond adult learn to build and use AI agents?', a: 'Yes. Our Codex and Claude Code course is for adults only and works on real repositories with version control. Vibe Coding for College suits learners aged 18 and up who want full stack projects.' },
      { q: 'What does test-first mean for a beginner?', a: 'Before asking an AI for code, you write a few small checks the code must pass. Then you run them. On this page a first draft about Richmond greenways failed two of three checks, which is how the mistake was found.' },
      { q: 'Will this help with BC Computer Programming 11 or 12?', a: 'It sits beside them. The courses ask for logic, decisions, loops and functions, which are what tests check. We teach alongside the school course and do not grant British Columbia credits.' },
      { q: 'Are AI assistants allowed in the CCC?', a: 'No. Contest rules ban generative AI, editor plug-ins included. CEMC lists the 2027 CCC for Wednesday 17 February 2027, written through a school, so contest practice is done without assistants.' },
      { q: 'What time are classes for Richmond?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are confirmed in Pacific time, which BC keeps all year.' },
      { q: 'Where are the Richmond fees listed?', a: 'Scroll to the fees block above the reviews. It lists the free trial lesson, the monthly group fee and the monthly private fee, converted to your currency automatically. Payment comes only after the trial.' }
    ]
  },

  next: {
    eyebrow: 'More for British Columbia',
    h2: 'Other pages for Richmond and BC learners',
    html: 'For the national picture read <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-canada">vibe coding and AI agents classes in Canada</a>, or the province-wide <a class="cg-inline-link" href="/coding-classes-in-british-columbia">coding classes in British Columbia</a>. Parents of teens may want <a class="cg-inline-link" href="/parents-guide-to-vibe-coding">a parent\'s guide to vibe coding</a> and the <a class="cg-inline-link" href="/ai-tools-age-guide">AI tools age guide</a>; adults can start from <a class="cg-inline-link" href="/agentic-coding-classes">agentic coding classes</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Richmond and BC',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-british-columbia', label: 'British Columbia' },
    { href: '/vibe-coding-and-ai-agents-classes-in-canada', label: 'Vibe coding in Canada' },
    { href: '/computer-programming-11-and-12-bc', label: 'Computer Programming 11 and 12' },
    { href: '/canada-time-zones-2026-online-class-times', label: 'Canada class times 2026' }
  ],

  personalityCss: `
.cg-root.cg-vaar .cg-hero h1 { font-weight: 700; letter-spacing: -0.015em; line-height: 1.08; }
.cg-root.cg-vaar .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 1rem; }
.cg-root.cg-vaar .cg-eyebrow { letter-spacing: 0.08em; font-weight: 650; font-size: 0.8rem; text-transform: uppercase; }
.cg-root.cg-vaar .cg-section-head h2 { max-width: 30ch; }
.cg-root.cg-vaar .cg-table caption { text-align: left; font-style: italic; }
.cg-root.cg-vaar .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-vaar #greenway code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.5; padding: 0.9rem 1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-vaar .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.75rem; }
`,

  dossier: {
    curriculumAuthority: 'British Columbia curriculum, read 22 October 2026: ADST 6-7 minimum three modules, computational thinking module (simple algorithms, visual programming), ADST 10-12 computing courses, Computer Programming 11 and 12 content, Computer Science 11 and 12 under Mathematics; BC Gov News 2026AG0013-000209 permanent UTC-7; CEMC 2026-27 BCC and CCC dates and the through-a-school rule; CCC rules on AI; Anthropic, OpenAI and GitHub terms and GitHub Education; Anthropic, Building effective agents. Richmond area codes from places.tsv (CNAC via the Internet Archive).',
    localProject: 'Metro Vancouver Regional Greenway Network 2050 (Open Government Licence - Metro Vancouver), FeatureServer JSON downloaded 23 October 2026, filtered to the 51 segments tagged Richmond: our test-first exercise greenway_tests_first.py (python -I) in which an AI-style draft using any() fails two of three tests and the all() version passes; 6 routes open end to end, 4 wrongly claimed by the draft; status counts 23/13/12/3; three segments moved from Operational to Planned (OBJECTID 618, 812, 1005); 6 NA descriptions. Labelled as ours. Lesson family: tests written before accepting AI code.',
    requiredMentions: [
      'Steveston Greenways / South Dike / East Richmond Trails+',
      'OBJECTID 618, 812 and 1005',
      'Railway Ave. Greenway',
      'any() and all()',
      'Open Government Licence - Metro Vancouver',
      'not Richmond Hill in Ontario',
      '604, 778, 236, 672 or 257',
      'twelve and a half hours ahead of Richmond',
      'every assistant switched off',
      'Say what right looks like'
    ],
    sources: [
      { claim: 'Regional Greenway Network 2050 item: description, status definitions, between 2020 and 2023.', url: 'https://www.arcgis.com/home/item.html?id=64dae354287e41b5a5f5b97b2d0e5e3d' },
      { claim: 'Regional Greenway Network 2050 FeatureServer layer 2, the segments used.', url: 'https://services6.arcgis.com/56eqCzQ5SZhBaDST/arcgis/rest/services/Regional_Greenway_Network_2050/FeatureServer/2' },
      { claim: 'Open Government Licence - Metro Vancouver: commercial use, attribution, non-endorsement.', url: 'https://open-data-portal-metrovancouver.hub.arcgis.com/pages/Open%20Government%20Licence' },
      { claim: 'BC curriculum: ADST and Computer Programming 11 and 12.', url: 'https://curriculum.gov.bc.ca/curriculum/adst' },
      { claim: 'BC permanent daylight time, UTC-7.', url: 'https://news.gov.bc.ca/releases/2026AG0013-000209' },
      { claim: 'CEMC contests 2026-27: BCC and CCC dates, through-a-school rule.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'Anthropic consumer terms: minimum age 18.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'OpenAI terms: under 18 needs parent or guardian permission.', url: 'https://openai.com/policies/terms-of-use/' },
      { claim: 'GitHub Education: Copilot free for verified students.', url: 'https://github.com/education/students' },
      { claim: 'Anthropic, Building effective agents: ground truth at each step.', url: 'https://www.anthropic.com/research/building-effective-agents' }
    ],
    rejectedClaims: [
      'A City of Richmond dataset: none found under an open licence (portal items carry no licence or forbid unauthorized use), so Metro Vancouver data is used and named.',
      'Any total length of Richmond greenways: not printed; the Richmond tag includes boundary bridges and a Delta piece.',
      'Why three segments went from Operational to Planned: not stated in the file, not guessed.',
      'Any Richmond or Metro Vancouver population: not used.',
      'BC graduation requirements: the source was blocked, so none are stated.',
      'That our classes earn BC credits: refused; we do not grant British Columbia credits.',
      'Recommending Claude or Claude Code to anyone under 18: refused under Anthropic\'s terms.',
      'Any affiliation with the City of Richmond, Metro Vancouver, the BC ministry or CEMC.'
    ]
  }
};
