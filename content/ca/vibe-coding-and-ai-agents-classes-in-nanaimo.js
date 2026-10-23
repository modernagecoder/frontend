'use strict';
// Nanaimo, British Columbia (cg- city page, Canada cluster Wave 2, row 146: vibe-coding-and-ai-agents-classes-in-<city>).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md, brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: vibe coding and AI agents for Nanaimo teens and adults, taught as "an agent needs a budget and a finish line".
// The local project is a paging agent over the City of Nanaimo's Trails layer that must read every segment of a trail
// before it may answer; three stand-in plans show the honest run, a stuck loop stopped by a step budget, and an early
// answer rejected because it read 100 of 219 segments.
// Sources, read raw on 22 and 23 October 2026:
//  - BC curriculum (facts-schools-contests.md section 2): ADST 6 computational thinking "simple algorithms", "visual
//    programming" (Kodu, Scratch); ADST 6-7 minimum three modules; ADST 10-12 list includes "Web Development 10",
//    "Computer Programming 11", "Computer Programming 12", "Robotics 11", "Robotics 12"; Computer Programming 12
//    "higher-level structures, such as functions, methods, or classes, that help improve the organization of source code";
//    Computer Science 12 listed under Mathematics. BC graduation pages BLOCKED; none stated.
//  - BC Gov News 2026AG0013-000209: permanent daylight time from 8 March 2026, UTC-7. facts-geo.md: Nanaimo CMA, America/
//    Vancouver, area codes 236, 250, 257, 672, 778; India 12 h 30 min ahead. No population used.
//  - CEMC: BCC 9 to 20 November 2026, "15 multiple-choice questions" for Grade 7/8 and 9/10, 45 minutes; CCC Wednesday
//    17 February 2027, Junior and Senior "regardless of their grade", languages C, C++, Python 2, Python 3, Java; through a
//    school; CCO "Approximately 20 of the top official CCC Senior participants" invited. CCC rules: no generative AI.
//  - Tool terms: Anthropic 18+; OpenAI terms parent or guardian permission under 18; GitHub 13+, Copilot free for verified
//    students. Anthropic, Building effective agents: "it's also common to include stopping conditions (such as a maximum
//    number of iterations) to maintain control."
//  - City of Nanaimo open data (src-pilots/vibe-coding-and-ai-agents-classes-in-nanaimo/): Trails, item
//    82dfda594b9448f7812109d6e3a11072 (owner open.data_cityofnanaimo), snippet "Trails in the City of Nanaimo"; FeatureServer
//    layer 1 queried in two pages (trails-p0.json 418,402 bytes sha256 2ad6e53a...5115; trails-p2000.json 40,771 bytes sha256
//    8686310f...cdbe5), 2,190 rows; spatial reference 26910, units esriMeters; data last edited 18 October 2026 (UTC).
//    Licence: item licenseInfo links the Open Data Catalogue Licence page (licence.html): data "may be used under the terms
//    of the" Open Government Licence - Nanaimo; "including for commercial purposes, subject to the terms below."; attribution
//    "Contains information licenced under the Open Government Licence" + en dash + "Nanaimo." (the City spells it licenced).
// Our own calculations (trail_agent.py, python -I, trail_agent.out.txt; profile checks): 2,190 segments; 147 with no NAME;
//  SURF_TYPE Wilderness 725, Hard 637, Soft 564, Stairs 141, Boardwalk 84, Bridge 39; Bowen Park 219 segments summing to
//  7,535 m (7.53 km, ours, Bowen Park surfaces Wilderness 133, Hard 49, Soft 19, Stairs 13, Boardwalk 3, Bridge 2);
//  Westwood Lake Park 158 segments; honest plan OK 7.53 km, stuck plan stopped at 8 steps, early plan rejected (100 of 219).
//  No city-wide trail total is printed.
// Lesson family: stopping conditions and completeness: a step budget, and an answer allowed only after every page is read.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const SCRIPT = esc(`# Nanaimo trail agent with a step budget, and a check that redoes the sum (our teaching example)
import json

SEGMENTS = []
for page in ("trails-p0.json", "trails-p2000.json"):
    SEGMENTS += [f["attributes"] for f in json.load(open(page, encoding="utf-8"))["features"]]

PAGE = 50
def get_segments(name, offset):
    """Tool: up to 50 segment lengths (metres) of one named trail, from offset, plus the trail's row count."""
    rows = [s for s in SEGMENTS if s["NAME"] == name]
    return {"lengths_m": [s["Shape__Length"] for s in rows[offset:offset + PAGE]], "total_rows": len(rows)}

def run(plan, max_steps=8):
    """Execute tool calls until the plan answers; stop when the step budget is spent."""
    seen, total = [], None
    for step, call in enumerate(plan, start=1):
        if step > max_steps:
            return "STOPPED: budget of %d steps spent, no answer" % max_steps
        if call["type"] == "answer":
            recomputed = round(sum(seen) / 1000, 2)
            if len(seen) != total:
                return "REJECTED: read %d of %d segments" % (len(seen), total)
            if call["km"] != recomputed:
                return "REJECTED: claimed %s km, tool results add to %s km" % (call["km"], recomputed)
            return "OK: %s km from %d segments" % (call["km"], total)
        result = get_segments(call["name"], call["offset"])
        seen += result["lengths_m"]
        total = result["total_rows"]
    return "plan ended without an answer"

# Three stand-in plans in place of a model, so the loop and its checks run with no AI service.
name = "Bowen Park"
rows = get_segments(name, 0)["total_rows"]
calls = [{"type": "tool", "name": name, "offset": o} for o in range(0, rows, PAGE)]
honest = calls + [{"type": "answer", "km": 7.53}]
stuck = [calls[0]] * 20                                   # asks for the first page again and again
early = calls[:2] + [{"type": "answer", "km": 3.26}]       # answers after two pages of five

for label, plan in (("honest", honest), ("stuck", stuck), ("early", early)):
    print(label, "->", run(plan))`);

const OUT = `honest -> OK: 7.53 km from 219 segments
stuck -> STOPPED: budget of 8 steps spent, no answer
early -> REJECTED: read 100 of 219 segments`;

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'NANAIMO', label: 'Nanaimo', blurb: 'Vibe coding and AI agents for Nanaimo teens and adults, with a City trails agent that has a step budget and must read every segment.' },
  market: CA,
  slug: 'vibe-coding-and-ai-agents-classes-in-nanaimo',
  code: 'vib',
  accent: '#182E66',
  accentRationale: 'Nanaimo: a muted harbour-night navy, #182E66, allocated for row 146 at least 6 RGB units from every site accent and 14 from the other Canada accents; contrast 12.22 on the paper #FBF8F2 (11.49 and 10.51 on the darker tints), well above 4.5 on all three',
  pageType: 'city',
  place: {
    name: 'Nanaimo',
    eyebrow: 'Nanaimo, British Columbia',
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
  routeLabel: 'Nanaimo',
  title: 'Vibe Coding and AI Agents Classes in Nanaimo, BC | Live Online',
  description: 'Vibe coding and AI agents for Nanaimo teens and adults: which AI tools each age may use, BC computing courses, and a trail agent with a step budget on City data.',
  ogDescription: 'An agent that pages through Nanaimo\'s trail segments, stops when it is stuck, and may answer only after reading them all. Vibe coding and agents, taught properly.',
  twitterDescription: 'Vibe coding and AI agents for Nanaimo teens and adults, live online, with agents that know when to stop.',
  ogImageCourse: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals',
  verifiedOn: '23 October 2026',
  courseSchema: {
    name: 'Vibe Coding and AI Agents Classes for Nanaimo Learners',
    description: 'Live online vibe coding for Nanaimo teens aged 13 to 17 and AI agent courses for adults, taught separately by age, with step budgets and completeness checks on every agent.'
  },

  h1: 'Vibe coding and AI agents classes in Nanaimo',
  capsuleQ: 'Where can a Nanaimo teen or adult learn to build with AI, safely?',
  capsule: 'Modern Age Coders teaches vibe coding and AI agents classes in Nanaimo live online. Nanaimo teens aged 13 to 17 learn in Vibe Coding for Teens, and adults learn AI agents in a separate Codex and Claude Code course that accepts over-18s only. Classes run live in groups of fifteen to twenty or privately, and every agent a learner builds gets a step budget and a completeness check.',
  lead: 'Nanaimo, on the east coast of Vancouver Island, has more than two thousand mapped trail segments in its open data, and they make a fine test of an AI agent. Vibe coding means describing the code you want to an AI model and letting it write the draft; an agent is the next step, where the model decides on its own to call a tool, read the result and call again. The two classic agent failures are going round in circles and stopping too soon with a confident answer. Here we build a small trail agent that pages through the City\'s segments, show both failures with stand-in plans, and add the two guards that catch them: a step budget, and a rule that the agent may not answer until it has read every page. You will also find the age limits on AI tools, the BC computing courses a Nanaimo student can take, and how Pacific time works now that BC no longer changes its clocks.',
  wa: 'Hello Modern Age Coders, I am in Nanaimo and would like a free first class in vibe coding or AI agents.',

  picks: {
    eyebrow: 'Course picks for Nanaimo',
    h2: 'Four courses for Nanaimo learners',
    intro: 'Courses are split by age because AI companies split their tools by age. Level is settled in the free lesson.',
    items: [
      { course: 'vibe-coding-for-teens-python-web-ai-projects-course', band: 'Ages 13 to 17', note: 'Building Python and web projects with AI help that teens are permitted to use, and learning to say exactly when a program has finished its job.' },
      { course: 'python-complete-masterclass-teens', band: 'Teens, first course', note: 'Loops, lists and functions written by hand, including the loop that never ends, which is the first thing an agent loop can get wrong.' },
      { course: 'git-github-version-control-course-for-teens', band: 'Teens, safety net', note: 'Commits, branches and pull requests, so that anything an assistant changes in a teen\'s project can be seen and reversed.' },
      { course: 'codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', band: 'Adults only, 18+', note: 'Agentic coding on real repositories for working adults. Anthropic permits Claude Code only from age 18, so teens are not admitted.' }
    ]
  },

  sections: [
    {
      id: 'trails', tint: 'deep', eyebrow: 'Nanaimo data project',
      h2: 'How long are the Bowen Park trails? An agent that must read every page',
      intro: 'The City of Nanaimo publishes its trails as open data, split into short segments with a name, a surface type and a length in metres. Our agent answers one question by paging through them. The code, the stand-in plans and every figure are ours, run on the City\'s layer as downloaded on 23 October 2026.',
      body: [
        { kind: 'table', caption: 'The City\'s trail segments at a glance (our tally of 2,190 rows; lengths in metres per the layer\'s own unit)', head: ['What we counted', 'Result'], rows: [
          ['Segments in the layer', '2,190, of which 147 have no trail name'],
          ['Surface types', 'Wilderness 725, Hard 637, Soft 564, Stairs 141, Boardwalk 84, Bridge 39'],
          ['Segments named Bowen Park', '219, more than any other name'],
          ['Segments named Westwood Lake Park', '158'],
          ['Sum of the Bowen Park segment lengths (our calculation)', '7,535 m, about 7.53 km']
        ] },
        { kind: 'p', text: '<b>The design:</b> the agent\'s only tool hands back at most 50 segment lengths at a time, plus the number of segments the trail has. With 219 Bowen Park segments, a correct answer needs five calls. The loop has two guards. A step budget of eight stops a plan that never finishes, and an answer is accepted only if the agent has read every segment and its total matches the sum of what its own tool calls returned.' },
        { kind: 'p', text: 'The full program, with three plans written by us in place of a model:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'p', text: 'What it printed:<code class="cg-mt-2">' + esc(OUT) + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The stuck plan', p: 'It asks for the first page twenty times. Without a budget the loop would run until someone noticed; with one, it stops after eight steps and says plainly that it has no answer. An honest stop is a result.' },
          { h3: 'The early plan', p: 'It reads two pages of five and answers 3.26 km. That number is the true sum of what it read, so a check that only re-adds its tool results would pass it. The completeness rule catches it: 100 of 219 segments is not the trail.' },
          { h3: 'The honest plan', p: 'Five calls, every segment read, a total that matches the tool results: 7.53 km. The figure is our sum of the City\'s segment lengths, not a published trail length, and segments without a name are not included.' }
        ] },
        { kind: 'callout', h3: 'What the file does not settle', p: 'Bowen Park segments include 13 of stairs and 2 of bridge, so the 7.53 km mixes surfaces a walker and a cyclist would treat very differently. The layer has no date column, and a trail split across two names would need a person to decide whether to merge them. We report the sum for one name and stop there.' },
        { kind: 'p', text: 'Used under the Open Government Licence - Nanaimo, which grants use including for commercial purposes (<a class="cg-inline-link" href="https://www.nanaimo.ca/your-government/maps-data/open-data-catalogue/open-data-catalogue-licence">Open Data Catalogue Licence</a>). Contains information licenced under the Open Government Licence - Nanaimo. No endorsement by the City of Nanaimo is implied.' }
      ]
    },
    {
      id: 'stopping', tint: '', eyebrow: 'How we teach agents',
      h2: 'Budgets, finish lines and honest stops',
      intro: 'Anthropic, describing how it builds agents, notes that it is common to include stopping conditions, such as a maximum number of iterations, to maintain control. We teach that as a rule, not an option, and add a second one: define what finished means before the agent starts.',
      body: [
        { kind: 'table', caption: 'Four guards every learner adds to an agent loop (ours)', head: ['Guard', 'Question it answers', 'In the Nanaimo agent'], rows: [
          ['Step budget', 'When do we give up?', 'Eight steps, then an explicit STOPPED message'],
          ['Completeness rule', 'Has the agent seen everything it needs?', 'Segments read must equal the trail\'s segment count'],
          ['Recomputation', 'Does the answer follow from the evidence?', 'The claimed total must equal the sum of the tool results'],
          ['Plain failure messages', 'Can a person tell what went wrong?', 'Each rejection says why, in numbers']
        ] },
        { kind: 'p', text: 'Vibe coding meets the same ideas in a smaller form. When a Nanaimo teen asks an assistant for a loop, we ask what makes it end, and what proves it ended for the right reason. A while loop that relies on a condition the data never meets is the stuck plan in miniature, and a for loop over the first page of results is the early plan.' },
        { kind: 'p', text: 'All of this rests on the owner\'s promise: we teach people to think a problem through and solve it, never to copy an answer, and an AI\'s answer is no exception. Whether the learner is in Grade 10 or runs a small business in Nanaimo, the closing question of every exercise is the same: how do you know it is finished, and how do you know it is right?' }
      ]
    },
    {
      id: 'tools', tint: 'tint', eyebrow: 'Age rules',
      h2: 'AI tools by age for Nanaimo learners',
      intro: 'Every company that makes an AI coding tool sets its own minimum age. We went through those pages on 22 October 2026, and the result below sets the course each Nanaimo learner can enter.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'From 13: GitHub Copilot', p: 'GitHub accounts are open from age 13, and GitHub Education gives Copilot free to verified students. It is the assistant our teen course leans on.' },
          { h3: '13 to 17 with a parent: OpenAI', p: 'ChatGPT and OpenAI\'s other services are open to 13 to 17 year olds only with a parent or guardian\'s say-so, under the company\'s current terms. We collect that say-so first.' },
          { h3: '18 and over: Claude and Claude Code', p: 'Anthropic\'s consumer terms set a minimum age of 18. Nanaimo teens therefore never see either tool in class; they belong to the adult course.' }
        ] },
        { kind: 'p', text: 'One more rule applies to everyone: the Canadian Computing Competition forbids generative AI and AI features built into code editors, so contest practice is done with every assistant switched off. Terms belong to the companies and are revised from time to time; we look them over again ahead of every intake, and anyone opening an account should read the live version.' }
      ]
    },
    {
      id: 'school', tint: '', eyebrow: 'BC school context',
      h2: 'Computing in BC schools for a Nanaimo student',
      intro: 'Nanaimo public schools follow the BC curriculum. Quoted phrases are from the ministry\'s curriculum site and from CEMC, read on 22 October 2026; the rest is our own summary.',
      body: [
        { kind: 'p', text: 'A Nanaimo child first meets computing in Grades 6 and 7, when the BC curriculum asks for at least three Applied Design, Skills, and Technologies modules a year; the computational thinking module mentions &ldquo;simple algorithms&rdquo; and &ldquo;visual programming&rdquo; with tools such as Kodu and Scratch. By secondary school the options widen into Web Development 10, Computer Programming 11 and 12, and Robotics 11 and 12 on the ADST side, and Computer Science 11 and 12 on the mathematics side.' },
        { kind: 'p', text: 'By Grade 12 the BC programming course expects students to organise code into functions, methods or classes. The trail agent is built that way on purpose: one tool function with a clear contract, one loop function holding its guards, and nothing hidden. We tutor beside the school course rather than in place of it; marks and credits come from the school, and we award no BC credit ourselves.' },
        { kind: 'table', mt: true, caption: 'CEMC computing contests open to Nanaimo students, 2026 to 2027 (CEMC, read 22 October 2026)', head: ['Contest', 'Details', 'Date'], rows: [
          ['Beaver Computing Challenge', '15 multiple-choice questions at the Grade 7/8 and 9/10 levels, 45 minutes, no coding needed', '9 to 20 November 2026'],
          ['Canadian Computing Competition', 'Junior or Senior, chosen by skill regardless of grade; C, C++, Python or Java', 'Wednesday 17 February 2027'],
          ['Canadian Computing Olympiad', 'By invitation: about 20 top official CCC Senior participants', 'Each spring, after the CCC']
        ] },
        { kind: 'p', text: 'Registration for CEMC contests goes through schools only. For more detail, read our guide to <a class="cg-inline-link" href="/computer-programming-11-and-12-bc">BC Computer Programming 11 and 12</a> or the <a class="cg-inline-link" href="/beaver-computing-challenge-guide">Beaver Computing Challenge guide</a>.' }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Class times',
      h2: 'One clock all year on Vancouver Island',
      intro: 'British Columbia moved to permanent Pacific daylight time in March 2026, so Nanaimo is seven hours behind UTC in summer and winter alike. Our teachers are in India, 12 hours 30 minutes ahead of Nanaimo through every season.',
      body: [
        { kind: 'table', caption: 'Example Nanaimo times and the India clock, for illustration only (UTC-7 all year; our conversion)', head: ['Nanaimo', 'India', 'Example learner'], rows: [
          ['Weekday 5:00 to 6:30 pm', '5:30 to 7:00 am, next day', 'Teens after school'],
          ['Weekday 8:00 to 9:30 pm', '8:30 to 10:00 am, next day', 'Working adults'],
          ['Saturday 9:00 to 10:30 am', '9:30 to 11:00 pm, same day', 'Families and adults']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'November stays quiet', p: 'Eastern Canada sets its clocks back on 1 November 2026. Nanaimo does not, so October class times carry straight through the winter.' },
          { h3: 'Island phone numbers', p: 'The booking form takes Island and BC numbers on 250, 778, 236, 672 or 257. Leave off the country code and give ten digits.' },
          { h3: 'Times in your zone', p: 'Every schedule we send is written in Pacific time first. Teachers in India do the conversion so that families do not have to.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a loop that ends to an agent that knows when to stop',
    intro: 'The age bands are rough. Each Nanaimo learner\'s first lesson decides the true starting point.',
    cols: [
      { band: 'Ages 13 and 14', h3: 'Loops that end', p: 'Python by hand, with loops, conditions and functions, and the habit of asking what stops each loop.', courses: ['python-complete-masterclass-teens', 'git-github-version-control-course-for-teens'] },
      { band: 'Ages 14 to 17', h3: 'Assisted projects', p: 'Vibe coding with permitted assistants, and machine learning with honest evaluation.', courses: ['vibe-coding-for-teens-python-web-ai-projects-course', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 18 and up', h3: 'AI in practice', p: 'Automation and generative AI for students and adults changing careers.', courses: ['python-ai-automation-masterclass-college', 'complete-generative-ai-masterclass-college'] },
      { band: 'Working adults', h3: 'Guarded agents', p: 'Coding agents on real repositories, with budgets, checks and rollback. Adults only.', courses: ['codex-and-claude-code-ai-coding-agents-masterclass-for-adults-professionals', 'vibe-coding-for-college-fullstack-ai-dsa-career-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'If an AI agent can do the work, why should a Nanaimo learner code?',
    intro: 'Because someone has to decide when the work is done.',
    p1: 'The early plan in the trail example gave an answer that was arithmetically perfect and factually wrong: it summed exactly what it had read, and it had read less than half the trail. No model can tell you that by itself, because it does not know what you meant by the whole trail. A person who has written a paging loop knows to ask.',
    p2: 'That is the part our classes protect. A fifteen-year-old practises it with a permitted assistant, a forty-year-old with an agent on a work repository; both must explain, unaided, why the program stops and why the answer covers everything.',
    closer: 'An agent with no budget and no finish line is not autonomous; it is unsupervised.',
    blogAnchor: 'is coding still worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live online for Nanaimo, from Departure Bay to Cedar',
    intro: 'No ferry, no drive. A live teacher works through the lesson with each learner over video and asks them to explain their code as they go.',
    cells: [
      { h3: 'Times', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Class size', p: 'A shared class holds fifteen to twenty learners of one age band and level; private lessons suit anyone who wants their own pace.' },
      { h3: 'Teens and adults kept apart', p: 'The companies\' terms give teens and adults different tools, so the two groups always take different courses.' },
      { h3: 'Up and down the Island', p: 'Learners in Lantzville, Ladysmith, Parksville and Victoria join the same online groups on the same Pacific clock.' },
      { h3: 'What you need', p: 'A computer with a modern browser, a microphone, and a connection that holds a video call. No paid AI subscription is needed for teens.' },
      { h3: 'Try a lesson free', p: 'The first lesson is a full class at no cost and ends with a placement. No card is taken.' }
    ],
    spec: { title: 'No Nanaimo centre', p: 'We have no premises in Nanaimo and claim none. Teaching is live over video from India, and we are not connected with the City of Nanaimo, the BC ministry or CEMC.' }
  },

  fees: {
    h2: 'Fees for Nanaimo learners',
    intro: 'Three lines, each priced in your own currency by the anchor.',
    first: 'A full first lesson, free, ending with a level and a suggested course.',
    group: 'The monthly fee for a group of fifteen to twenty, eight live classes a month.',
    private: 'The monthly fee for private lessons at times that suit you.',
    closer: 'Island learners pay the same monthly fee as learners on the mainland or anywhere else in Canada. Billing begins only after the first lesson.'
  },

  reviewsH2: 'Reviews from our students and families on Google',

  book: {
    h2: 'Tell us about the Nanaimo learner',
    intro: 'Lesson one hands the learner an AI-written loop that either never finishes or finishes too soon. Diagnosing which, then adding the guard, is how our teacher judges level and age track.',
    success: 'Thank you. The team will be in touch soon about a first class for Nanaimo.'
  },

  faq: {
    h2: 'Vibe coding and AI agents in Nanaimo: questions',
    intro: 'What Nanaimo families and adult learners ask us most.',
    items: [
      { q: 'Do you offer vibe coding classes in Nanaimo?', a: 'Yes, live online. Nanaimo teens from 13 to 17 take the teen course, adults take separate courses, and every class has a real teacher on video. There is no classroom in Nanaimo.' },
      { q: 'What is vibe coding?', a: 'Building software by describing what you want to an AI model and letting it write the code. We teach it as the first draft, followed by testing, checking and explaining.' },
      { q: 'What is a step budget in an AI agent?', a: 'A limit on how many actions the agent may take before it must stop. In our Nanaimo trail agent the budget is eight steps; a plan stuck repeating itself is stopped and reports that it has no answer.' },
      { q: 'Can my teenager use Claude Code?', a: 'Not with us. Anthropic\'s consumer terms set 18 as the minimum age, which keeps Claude Code inside the adult course.' },
      { q: 'Is ChatGPT required for the teen course?', a: 'No. Because OpenAI wants a parent to agree for users under 18, we bring it in only after you say yes; otherwise teens work with GitHub Copilot, free to verified students.' },
      { q: 'Can Vancouver Island adults learn to build agents?', a: 'Yes, online. Agent building with Codex and Claude Code is taught to adults only, on Git repositories, and every agent a learner writes carries a budget and a completeness check.' },
      { q: 'How long are the Bowen Park trails in the City data?', a: 'Our sum of the 219 segments named Bowen Park in the City of Nanaimo trails layer is about 7.53 km. That is our calculation from the segment lengths, not a figure published by the City.' },
      { q: 'Does this connect to BC Computer Programming 12?', a: 'Yes. That course is about organising code into functions and similar structures, which is how the trail agent is written. We work beside the school, which alone awards the credit.' },
      { q: 'What about AI help in computing contests?', a: 'Not allowed in the CCC, whose rules forbid generative AI and editor plug-ins. CEMC lists the 2027 CCC for Wednesday 17 February 2027, written at school.' },
      { q: 'Which lesson times can a Nanaimo family pick?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Our schedules show Pacific time, unchanged by any November switch.' }
    ]
  },

  next: {
    eyebrow: 'More for British Columbia',
    h2: 'Other pages for Nanaimo and BC learners',
    html: 'Our Canada-wide page, <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-canada">vibe coding and AI agents classes in Canada</a>, gives the national picture, and <a class="cg-inline-link" href="/coding-classes-in-british-columbia">coding classes in British Columbia</a> for the province. Families can read <a class="cg-inline-link" href="/what-is-vibe-coding">what is vibe coding?</a> and the <a class="cg-inline-link" href="/parents-guide-to-vibe-coding">parent\'s guide to vibe coding</a>; adults may want <a class="cg-inline-link" href="/ai-agents-explained">AI agents explained</a>.',
    waLabel: 'Chat with us on WhatsApp'
  },

  footerHeading: 'Nanaimo and BC',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-british-columbia', label: 'British Columbia' },
    { href: '/vibe-coding-and-ai-agents-classes-in-canada', label: 'Vibe coding in Canada' },
    { href: '/computer-programming-11-and-12-bc', label: 'Computer Programming 11 and 12' },
    { href: '/homeschool-coding-and-math-bc', label: 'Homeschool coding in BC' }
  ],

  personalityCss: `
.cg-root.cg-vib .cg-hero h1 { font-weight: 700; letter-spacing: -0.017em; line-height: 1.06; }
.cg-root.cg-vib .cg-capsule { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-vib .cg-eyebrow { letter-spacing: 0.1em; font-weight: 700; font-size: 0.78rem; text-transform: uppercase; }
.cg-root.cg-vib .cg-section-head h2 { max-width: 30ch; letter-spacing: -0.01em; }
.cg-root.cg-vib .cg-table caption { text-align: left; font-weight: 650; }
.cg-root.cg-vib .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-vib #trails code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.79rem; line-height: 1.5; padding: 0.9rem 1rem; border-left: 4px solid var(--cg-accent); }
.cg-root.cg-vib .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.75rem; }
`,

  dossier: {
    curriculumAuthority: 'BC curriculum, read 22 October 2026: ADST 6-7 modules and the computational thinking module, ADST 10-12 computing and robotics courses, Computer Programming 12 content, Computer Science 11 and 12 under Mathematics; BC Gov News 2026AG0013-000209 permanent UTC-7; CEMC BCC format and dates, CCC date, levels and languages, CCO invitation; CCC rules on AI; Anthropic, OpenAI and GitHub age rules; Anthropic, Building effective agents (stopping conditions). Nanaimo area codes from places.tsv.',
    localProject: 'City of Nanaimo Trails (Open Government Licence - Nanaimo), FeatureServer layer 1 queried in two pages on 23 October 2026, 2,190 segments in metres: our trail_agent.py (python -I) pages through the 219 Bowen Park segments 50 at a time; the honest plan answers 7.53 km (our sum), a stuck plan is stopped by an eight-step budget, and an early plan is rejected for reading 100 of 219 segments. Surface counts and 147 unnamed segments from our tally. Labelled as ours. Lesson family: stopping conditions and completeness.',
    requiredMentions: [
      'STOPPED: budget of 8 steps spent, no answer',
      'REJECTED: read 100 of 219 segments',
      'Segments named Bowen Park',
      '147 have no trail name',
      'Open Government Licence - Nanaimo',
      'Contains information licenced under',
      'Departure Bay to Cedar',
      '250, 778, 236, 672 or 257',
      'Completeness rule',
      'it is unsupervised'
    ],
    sources: [
      { claim: 'City of Nanaimo Trails item and FeatureServer layer.', url: 'https://www.arcgis.com/home/item.html?id=82dfda594b9448f7812109d6e3a11072' },
      { claim: 'City of Nanaimo Open Data Catalogue Licence (Open Government Licence - Nanaimo).', url: 'https://www.nanaimo.ca/your-government/maps-data/open-data-catalogue/open-data-catalogue-licence' },
      { claim: 'BC curriculum ADST and Computer Programming 12.', url: 'https://curriculum.gov.bc.ca/curriculum/adst/12/computer-programming' },
      { claim: 'BC permanent daylight time.', url: 'https://news.gov.bc.ca/releases/2026AG0013-000209' },
      { claim: 'CEMC BCC, CCC and CCO.', url: 'https://cemc.uwaterloo.ca/contests/ccc' },
      { claim: 'Anthropic consumer terms: 18+.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'OpenAI terms: parent or guardian permission under 18.', url: 'https://openai.com/policies/terms-of-use/' },
      { claim: 'GitHub Education: Copilot free for verified students.', url: 'https://github.com/education/students' },
      { claim: 'Anthropic, Building effective agents: stopping conditions.', url: 'https://www.anthropic.com/research/building-effective-agents' }
    ],
    rejectedClaims: [
      'A city-wide total trail length: not printed; segment sums are given for one name only and labelled as ours.',
      'That 7.53 km is the official length of the Bowen Park trails: refused; it is our sum of segment lengths.',
      'Any Nanaimo population: not used.',
      'BC graduation requirements: source blocked, not stated.',
      'That our classes earn BC credits: refused.',
      'Recommending Claude or Claude Code to anyone under 18: refused.',
      'Any affiliation with the City of Nanaimo, the BC ministry or CEMC.'
    ]
  }
};
