'use strict';
// Surrey, British Columbia (cg- city page, Canada cluster Wave 2, row 125: ai-and-python-classes-for-teens-in-<city>).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md, brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: a teen in Surrey, British Columbia (not the English county) finds computing in two BC course families (ADST
// Computer Programming 11 and 12, and Mathematics' Computer Science 11 and 12), lives on permanent Pacific time since March
// 2026, can start contests with the Grade 9/10 Beaver Computing Challenge before the CCC, follows the AI tool age rules, and
// runs an unsupervised k-means clustering of City of Surrey playground locations against the City's own community labels.
// Sources, read raw on 22 October 2026:
//  - BC curriculum (facts-schools-contests.md, ca/src/bc/): ADST list includes "Computer Studies 10", "Web Development 10",
//    "Computer Programming 11", "Computer Information Systems 11", "Robotics 11"; Computer Programming 11 content
//    "programming language constructs to support input/output, logic, decision structure, and loops" and "Key components are
//    decomposition, patterns and generalizations, abstraction, and algorithmic thinking."; Computer Programming 12 "higher-level
//    structures, such as functions, methods, or classes, that help improve the organization of source code"; Mathematics list
//    includes "Computer Science 11" and "Computer Science 12"; CS 11 big ideas: decomposition "dividing complex problems into
//    parts that are easier to conceive, understand, and program", algorithms "sets of rules or instructions that precisely
//    define a sequence of operations", sample question "What makes one algorithm better than another algorithm?".
//    BC graduation requirements were BLOCKED (www2.gov.bc.ca reset), so none are stated.
//  - BC Gov News 2026AG0013-000209 (ca/src/geo/tz/): "B.C. will adopt permanent, year-round daylight saving time after clocks
//    shift forward an hour on Sunday, March 8, 2026"; "Pacific time will be set seven hours behind co-ordinated universal time
//    (UTC-7)". facts-geo.md: Surrey CSD in the Vancouver CMA; area codes 236/257/604/672/778; America/Vancouver.
//  - CEMC (ca/src/cemc/): BCC "North and South America: Monday, November 9, 2026 to Friday, November 20, 2026"; "Students in
//    Grade 10 or below are eligible to participate in the Grade 9/10 BCC"; "15 multiple-choice questions out of a total of 90
//    (Grade 7/8 and Grade 9/10)."; "Time allowed for completion is 45 minutes."; "only require familiarity with concepts covered
//    in the mathematics curriculum across all Canadian provinces"; BCC English only. CCC "Wednesday, February 17, 2027"; "5
//    questions."; "participants can create a free practice account and access previous contests"; CCC "available in English
//    and French"; "all students must participate through their school."
//  - OpenAI Help Center (openai-ages.flat.txt): "ChatGPT is not meant for children under 13, and we require that children ages
//    13 to 18 obtain parental consent before using ChatGPT." Anthropic Consumer Terms, Oct 8, 2025: "You must be at least 18
//    years old". CCC Online Grader rules: "AI-based tools within an IDE cannot be used."
//  - City of Surrey open data (src-pilots/ai-and-python-classes-for-teens-in-surrey-bc/): Park Playgrounds, item
//    b842e45ce90d4e3899c1a5218743c9ce, owner SurreyGIS, accessInformation "City of Surrey", description "Update frequency:
//    Monthly"; FeatureServer on services5.arcgis.com/YRpe0VKTJytZSSIB, spatial reference NAD_1983_UTM_Zone_10N, unit metre.
//    Licence: SurreyGIS Hub Page item 55089a19491a4fe59a41e059fd8af708 "Open Data License" (licence-page.txt): "The
//    Information Provider grants you a worldwide, royalty-free, perpetual, non-exclusive license to use the Information,
//    including for commercial purposes"; attribution "Contains information licensed under the Open Government License" followed
//    by the City's name (the separator did not decode cleanly, so only the part before it is quoted); non-endorsement clause.
//    data.surrey.ca did not connect; gisprod.surrey.ca (traffic loop API) returned a Cloudflare 403 and was not retried
//    (BLOCKED-403-cloudflare-*.html saved).
// Our own calculations (surrey_kmeans_page.py run live with python -I, surrey_kmeans_page.out.txt; surrey_kmeans.py and the
// seed sweep): 167 playgrounds, all STATUS OPERATING; COMMUNITY counts Newton 38, Cloverdale 32, Whalley 28, South Surrey 24,
// Guildford 18, Fleetwood 13, blank 13, City Centre 1; each playground reduced to the mean of its outline vertices (a rough
// centre); k-means with k=6, 20 seeds, 50 rounds each; tightest run spread 891 million square metres, 137 of 167 in a cluster
// led by their own community label, leaders Cloverdale, Guildford, Newton, South Surrey twice, Whalley (no Fleetwood); the
// tightest run with six different leaders: spread 944 million square metres, 144 of 167. Labels are the City's; clusters ours.
// Lesson family: unsupervised learning, k-means, random restarts and local minima, comparing clusters with human labels.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import json, random, urllib.request',
  'from collections import Counter',
  '',
  'URL = ("https://services5.arcgis.com/YRpe0VKTJytZSSIB/arcgis/rest/services/"',
  '       "Park%20Playgrounds/FeatureServer/0/query?where=1%3D1"',
  '       "&outFields=COMMUNITY&f=json")',
  'spots = []  # centre of each playground outline, metres east and north (UTM zone 10N)',
  'for f in json.load(urllib.request.urlopen(URL))["features"]:',
  '    ring = f["geometry"]["rings"][0]',
  '    spots.append((sum(p[0] for p in ring) / len(ring),',
  '                  sum(p[1] for p in ring) / len(ring), f["attributes"]["COMMUNITY"]))',
  '',
  'def nearest(x, y, centres):',
  '    gaps = [(x - cx) ** 2 + (y - cy) ** 2 for cx, cy in centres]',
  '    return gaps.index(min(gaps)), min(gaps)',
  '',
  'def kmeans(k, seed):',
  '    random.seed(seed)',
  '    centres = [s[:2] for s in random.sample(spots, k)]',
  '    for _ in range(50):',
  '        groups = [[] for _ in range(k)]',
  '        for s in spots:',
  '            groups[nearest(s[0], s[1], centres)[0]].append(s)',
  '        centres = [(sum(s[0] for s in g) / len(g), sum(s[1] for s in g) / len(g))',
  '                   if g else centres[i] for i, g in enumerate(groups)]',
  '    spread = sum(nearest(s[0], s[1], centres)[1] for s in spots)',
  '    return spread, groups',
  '',
  'runs = sorted(kmeans(6, seed) for seed in range(1, 21))',
  '',
  'def leaders(groups):',
  '    return [Counter(s[2] for s in g).most_common(1)[0] for g in groups]',
  '',
  'def report(label, spread, groups):',
  '    top = leaders(groups)',
  '    print(label, "spread", round(spread / 1e6), "million m2;",',
  '          sum(n for _, n in top), "of", len(spots), "match their cluster")',
  '    print("   clusters led by", sorted(str(name) for name, _ in top))',
  '',
  'report("tightest of 20 runs:", *runs[0])',
  'six = next(r for r in runs if len({name for name, _ in leaders(r[1])}) == 6)',
  'report("tightest run with six different leaders:", *six)'
].join('\n');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'SURREY', label: 'Surrey, BC', blurb: 'Python and AI for teenagers in Surrey, British Columbia: BC computer programming and computer science courses, Pacific time, the Beaver Challenge and CCC, and k-means on City of Surrey playgrounds.' },
  market: CA,
  slug: 'ai-and-python-classes-for-teens-in-surrey-bc',
  code: 'apyb',
  accent: '#52162C',
  accentRationale: 'Surrey, BC: a dark mulberry, #52162C, allocated for this row and kept at least 14 RGB units from the other Canada accents and 6 from every site accent; contrast 13.12 on the paper #FBF8F2, 12.34 and 11.29 on the two darker paper tints',
  pageType: 'city',
  place: {
    name: 'Surrey',
    eyebrow: 'Surrey, British Columbia',
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
  routeLabel: 'Surrey, BC',
  title: 'AI and Python Classes for Teens in Surrey, BC | Live Online',
  description: 'Live online Python and AI for teens aged 13 to 18 in Surrey, British Columbia: BC Computer Programming 11 and 12, Pacific time, the CCC and a Surrey data model.',
  ogDescription: 'For teens in Surrey, British Columbia: where computing sits in BC high school, what permanent Pacific time means for live classes, contests to start with, and a k-means project on City of Surrey data.',
  twitterDescription: 'Python and AI for teens in Surrey, BC, live online, with a k-means clustering project on City of Surrey playground data.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '22 October 2026',
  courseSchema: {
    name: 'Live Online Python and AI Classes for Teens in Surrey, British Columbia',
    description: 'Python, machine learning, data science and contest programming for students aged 13 to 18 in Surrey, British Columbia, taught live online in a group or one to one on Pacific time.'
  },

  h1: 'AI and Python classes for teens in Surrey, British Columbia',
  capsuleQ: 'Where can a teenager in Surrey, BC learn Python and AI live, with a real teacher?',
  capsule: 'Modern Age Coders teaches Python and AI live online to teens aged 13 to 18 in Surrey, British Columbia, in a class of fifteen to twenty or one to one. Students usually start with Python for Teens, then choose AI and Machine Learning for Teens, Data Science for Teens or CCC preparation. Classes are booked on Pacific time, which in BC no longer changes, and the first class is free.',
  lead: 'This page is about Surrey in British Columbia, the city south of the Fraser River, not the English county. A Surrey teenager has more computing on offer at school than the course names suggest: British Columbia files programming under two different subject areas, so a student can meet Computer Programming in one corner of the timetable and Computer Science in the mathematics department. Outside school, CEMC&rsquo;s contests start with a 45-minute challenge that needs no coding at all. Below we set out what the BC curriculum says, quoting it, what permanent Pacific time means for a live class with teachers in India, how contests fit a Grade 9 or 10 student, which AI tools a teen may legally use, and an unsupervised learning project built on the City of Surrey&rsquo;s own playground map.',
  wa: 'Hello Modern Age Coders, I would like a free Python or AI class for a teenager in Surrey, British Columbia.',

  picks: {
    eyebrow: 'Course picks for Surrey teens',
    h2: 'Four courses for a Surrey, BC student aged 13 to 18',
    intro: 'Python comes first for almost everyone. The other three follow a student&rsquo;s interest: models, data or contests.',
    items: [
      { course: 'python-complete-masterclass-teens', band: 'First course', note: 'From the first line of code to functions, lists, dictionaries and files: the base that BC Computer Programming 11 and the projects below both build on.' },
      { course: 'ai-ml-masterclass-teens', band: 'Models', note: 'Supervised and unsupervised learning, tested honestly. Clustering playgrounds, as on this page, is where its unsupervised unit begins.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Data', note: 'Reading open data, cleaning it, summarising it and drawing it, with real municipal files from British Columbia in the exercises.' },
      { course: 'ccc-junior-and-senior-preparation-course', band: 'Contests', note: 'Problems we write in the style of the Canadian Computing Competition, timed like the real paper and checked the way its grader checks.' }
    ]
  },

  sections: [
    {
      id: 'bc', tint: '', eyebrow: 'BC high school computing',
      h2: 'Two homes for programming in BC schools: Applied Design and Mathematics',
      intro: 'British Columbia lists programming courses in Applied Design, Skills, and Technologies (ADST) and, separately, Computer Science 11 and 12 in Mathematics. The quoted text is from curriculum.gov.bc.ca as we read it on 22 October 2026; the notes are ours.',
      body: [
        { kind: 'table', caption: 'Computing courses in the BC curriculum, Grades 10 to 12 (curriculum.gov.bc.ca, read 22 October 2026; the last column is our note)', head: ['Course', 'Subject area', 'What the curriculum text includes', 'Our note'], rows: [
          ['Computer Studies 10, Web Development 10', 'ADST', 'Both appear in the ADST 10 to 12 course list', 'The Computer Studies 10 content lists hardware, software types and security risks; Web Development 10 is the web-focused option'],
          ['Computer Programming 11', 'ADST', '&ldquo;programming language constructs to support input/output, logic, decision structure, and loops&rdquo;', 'The first full programming course for most students'],
          ['Computer Programming 12', 'ADST', '&ldquo;higher-level structures, such as functions, methods, or classes, that help improve the organization of source code&rdquo;', 'Organising larger programs, the step from scripts to software'],
          ['Computer Science 11 and 12', 'Mathematics', 'Big idea of decomposition: &ldquo;dividing complex problems into parts that are easier to conceive, understand, and program&rdquo;', 'Algorithmic and mathematical, closer to contest thinking'],
          ['Robotics 11, Computer Information Systems 11', 'ADST', 'Both appear in the ADST 10 to 12 course list', 'Hardware control and information systems, for students who like applied work']
        ] },
        { kind: 'p', text: 'Two lines in those documents describe our teaching better than we could. Computer Programming 11 defines computational thinking this way: &ldquo;Key components are decomposition, patterns and generalizations, abstraction, and algorithmic thinking.&rdquo; Computer Science 11 calls algorithms &ldquo;sets of rules or instructions that precisely define a sequence of operations&rdquo; and asks students, among its sample questions, &ldquo;What makes one algorithm better than another algorithm?&rdquo; That last question is the heart of the playground project further down: two runs of the same algorithm on the same data give different answers, and a student has to decide which one is better and why. Which BC courses a particular school offers, and in which grade, varies, so families should check the school&rsquo;s own course list.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Grade 9 and 10', p: 'Before the senior courses, we get students writing full Python programs, so Computer Programming 11 starts with logic and loops they already trust instead of syntax they are still learning.' },
          { h3: 'Programming or Computer Science?', p: 'Students who enjoy building apps and tools often like the ADST courses; those who enjoy puzzles and proofs often like Computer Science 11 and 12. Many take both, and our lessons support either.' },
          { h3: 'More detail', p: 'Our page on <a class="cg-inline-link" href="/computer-programming-11-and-12-bc">Computer Programming 11 and 12 in BC</a> covers the two ADST courses in depth, and <a class="cg-inline-link" href="/canada-coding-curriculum-by-province">coding curriculum by province</a> compares BC with the rest of Canada.' }
        ] },
        { kind: 'callout', h3: 'We do not grant BC credits', p: 'Our classes run alongside school courses and we do not grant provincial credits; BC course credits come only from the student&rsquo;s school. Modern Age Coders has no connection with BC&rsquo;s education ministry or with any BC school district.' }
      ]
    },
    {
      id: 'contests', tint: 'tint', eyebrow: 'First contests',
      h2: 'Beaver Challenge first, then the CCC: contests for a Surrey teen in 2026 to 2027',
      intro: 'Both contests below are run by CEMC at the University of Waterloo and are written through a school. Facts and quotes are CEMC&rsquo;s, read on 22 October 2026; the last column is our suggestion.',
      body: [
        { kind: 'table', caption: 'Two CEMC computing contests for teens, 2026 to 2027 (CEMC contest pages, read 22 October 2026)', head: ['Contest', 'When, per CEMC', 'Format, per CEMC', 'Who it suits'], rows: [
          ['Beaver Computing Challenge, Grade 9/10', 'Monday 9 November 2026 to Friday 20 November 2026', '&ldquo;15 multiple-choice questions out of a total of 90&rdquo;; &ldquo;Time allowed for completion is 45 minutes.&rdquo;', 'Students in Grade 10 or below, including those who have never coded'],
          ['Canadian Computing Competition (CCC)', 'Wednesday 17 February 2027', '&ldquo;5 questions.&rdquo;, three hours, written online; Junior or Senior level', 'Students who already write programs, at Junior first']
        ] },
        { kind: 'p', text: 'The Beaver Computing Challenge is the gentler door. CEMC says its questions &ldquo;only require familiarity with concepts covered in the mathematics curriculum across all Canadian provinces&rdquo;, and that &ldquo;Students in Grade 10 or below are eligible to participate in the Grade 9/10 BCC&rdquo;. It is offered in English only. The CCC is the real programming paper, available in English and French, and CEMC notes that &ldquo;participants can create a free practice account and access previous contests&rdquo; on its online grader. For a Surrey student in Grade 9, a sensible year is the Beaver Challenge in November, then a CCC Junior attempt in February once loops and lists are comfortable. Both are written through a school: CEMC states that &ldquo;all students must participate through their school.&rdquo;' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Pacific time on contest day', p: 'With BC on UTC-7 all year, the CCC falls on the same clock as every other week of the school year. We hold mock papers at the hour a student&rsquo;s school plans to run the real one.' },
          { h3: 'Python is enough to start', p: 'The CCC accepts Python, and for Junior questions it is all a teen needs. Students who later chase the hardest Senior problems add C++ with us in a later year.' },
          { h3: 'Practice with our problems', p: 'We do not copy CEMC questions or solutions. Students use CEMC&rsquo;s free archive and practice account on their own, and in class work through problems we have written. See the <a class="cg-inline-link" href="/beaver-computing-challenge-guide">Beaver Challenge guide</a>.' }
        ] }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'City of Surrey data project',
      h2: 'Can a computer find Surrey&rsquo;s communities on its own, from playground locations alone?',
      intro: 'The City of Surrey maps every park playground it runs and labels each with a community such as Newton or Cloverdale. Our students hide those labels, let the k-means algorithm group the playgrounds by location, then compare its groups with the City&rsquo;s. The clusters and counts here are our output; the community labels are the City&rsquo;s.',
      body: [
        { kind: 'table', caption: 'Our k-means results on City of Surrey Park Playgrounds (167 playgrounds fetched 22 October 2026; k = 6 clusters; 20 random starts of 50 rounds each)', head: ['Run', 'Total squared distance to cluster centres', 'Playgrounds in a cluster led by their own community', 'Communities leading the six clusters'], rows: [
          ['Tightest of the 20 runs', '891 million square metres', '137 of 167', 'Cloverdale, Guildford, Newton, South Surrey (twice), Whalley'],
          ['Tightest run with six different leaders', '944 million square metres', '144 of 167', 'Cloverdale, Fleetwood, Guildford, Newton, South Surrey, Whalley']
        ] },
        { kind: 'p', text: 'This is the full program in standard-library Python. It downloads the playground outlines in the City&rsquo;s own map grid, where positions are in metres, reduces each outline to a rough centre by averaging its corner points, and runs k-means twenty times from different random starting centres. When we ran it on 22 October 2026 it printed exactly the two rows in the table:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. No answers given', p: 'Unlike most school exercises, k-means is never told the right groups. It places six centres, gives each playground to the nearest one, moves each centre to the middle of its group, and repeats. The community names are used only afterwards, to judge the result.' },
          { h3: '2. Different starts, different answers', p: 'Twenty starts did not all agree. The run with the smallest total distance split South Surrey into two clusters and left Fleetwood without one of its own; a slightly looser run matched all six communities and placed 144 playgrounds with their own label.' },
          { h3: '3. Which one is better?', p: 'That is BC Computer Science 11&rsquo;s own question, and here it has no single answer. The tightest run is better by the algorithm&rsquo;s own measure; the six-community run is better at matching how the City describes itself. Students write down which they prefer, and why.' }
        ] },
        { kind: 'callout', h3: 'What the labels hide', p: 'Of the 167 playgrounds, 13 carry no community label and one is tagged City Centre. Newton has the most labelled playgrounds (38), then Cloverdale (32), Whalley (28), South Surrey (24), Guildford (18) and Fleetwood (13). Because South Surrey covers a large area with fewer playgrounds, a method that only cares about distance is tempted to cut it in two. Clusters reflect the data you give them, not the map in a resident&rsquo;s head.' },
        { kind: 'p', text: 'A note on the numbers: averaging an outline&rsquo;s corners gives a rough centre, not a true centroid, which is close enough for clustering a city&rsquo;s worth of small parks. The playground layer is published by the City of Surrey with an update frequency the City gives as monthly, so a later download may differ slightly. The City&rsquo;s open data licence grants &ldquo;a worldwide, royalty-free, perpetual, non-exclusive license to use the Information, including for commercial purposes&rdquo;, and asks for the statement &ldquo;Contains information licensed under the Open Government License&rdquo;, with the City of Surrey named after it. Source: City of Surrey, Park Playgrounds layer. The City has not endorsed this page or our classes, and our clusters are not City boundaries.' }
      ]
    },
    {
      id: 'tools', tint: '', eyebrow: 'AI tools and teen age limits',
      h2: 'What a Surrey teenager may use: AI tools, ages and contest rules',
      intro: 'Each rule comes from the organisation that owns the tool or runs the contest, read in its own document on 22 October 2026. The right-hand column is how we apply it.',
      body: [
        { kind: 'table', caption: 'AI tool rules for students under 18 (organisations&rsquo; own pages, read 22 October 2026)', head: ['Tool or setting', 'The organisation&rsquo;s rule', 'In our classes'], rows: [
          ['ChatGPT (OpenAI Help Center)', '&ldquo;ChatGPT is not meant for children under 13, and we require that children ages 13 to 18 obtain parental consent before using ChatGPT.&rdquo;', 'Optional, with a parent&rsquo;s consent; never needed to finish a lesson'],
          ['Claude (Anthropic Consumer Terms, Oct 8, 2025)', 'Users &ldquo;must be at least 18 years old&rdquo;', 'Never used or recommended for teens'],
          ['Coding editors during the CCC (CCC Online Grader rules)', '&ldquo;AI-based tools within an IDE cannot be used.&rdquo;', 'We switch editor autocomplete off in contest practice too']
        ] },
        { kind: 'p', text: 'The editor rule is the one Surrey families tend to miss. Many school laptops and free editors now finish lines of code automatically, and a student who has always worked that way can be startled to find the help gone on contest day. We start contest students with plain editors early. In project work the issue is different: the playground program is short enough that a chatbot could write it, but the interesting work is deciding whether a split South Surrey is a mistake or a finding. A teen who learns to make that call, and to explain it, is learning the part of AI work that tools cannot do for them.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Consent before ChatGPT', p: 'OpenAI asks for parental consent from 13 to 18. We let the family decide, list the lessons where the tool might appear, and make sure a teen without it misses nothing.' },
          { h3: 'Some tools wait until 18', p: 'Anthropic&rsquo;s terms set 18 as the minimum age, so Claude stays out of teen classes; our adult agentic coding course is closed to under-18s for the same reason.' },
          { h3: 'Assignments remain theirs', p: 'We explain, question and give practice. We do not complete marked school work, and we would rather see a shorter program a student can defend than a longer one they cannot.' }
        ] }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'Pacific time, now permanent',
      h2: 'Surrey keeps one clock all year now: what that means for live classes',
      intro: 'The BC government announced that &ldquo;B.C. will adopt permanent, year-round daylight saving time after clocks shift forward an hour on Sunday, March 8, 2026&rdquo;, and that &ldquo;Pacific time will be set seven hours behind co-ordinated universal time (UTC-7)&rdquo;. So Surrey does not fall back on 1 November 2026, while Ontario and Quebec do.',
      body: [
        { kind: 'table', caption: 'Surrey (America/Vancouver) against India and against Ontario through 2026 to 2027. Offsets from the BC release and IANA tzdb 2026e; conversions are ours', head: ['Period', 'Surrey', 'India is ahead of Surrey by', 'Saturday 9 to 10:30 am in Surrey is, in India', 'Weekday 4:30 to 6 pm in Surrey is, in India', 'Ontario is ahead of Surrey by'], rows: [
          ['To 31 October 2026', 'UTC-7', '12.5 hours', '9:30 to 11 pm', '5 to 6:30 am, next day', '3 hours'],
          ['1 November 2026 to 13 March 2027', 'UTC-7, no change', '12.5 hours', '9:30 to 11 pm', '5 to 6:30 am, next day', '2 hours'],
          ['From 14 March 2027', 'UTC-7', '12.5 hours', '9:30 to 11 pm', '5 to 6:30 am, next day', '3 hours']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Steady with India', p: 'Because India and BC both stay put, the gap is twelve and a half hours all year. A Surrey class time never shifts against its teacher, which makes long-term timetables simple.' },
          { h3: 'Shifting with Ontario', p: 'The difference from Ontario is what moves: two hours in winter, three in summer. Anything a Surrey teen joins on Eastern time, such as a national webinar, needs checking after 1 November.' },
          { h3: 'Surrey phone numbers', p: 'Surrey numbers use 604 and the BC overlay codes 236, 257, 672 and 778. Enter the ten digits in the form below without a leading 1.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From Python at 13 to an unsupervised model a Surrey student can explain at 18',
    intro: 'Treat the ages as rough. Placement depends on what a student can already program, checked in the free class.',
    cols: [
      { band: 'Ages 13 and 14', h3: 'Python in full', p: 'Complete programs with loops, lists and functions, and the Beaver Challenge for students who want a first contest.', courses: ['python-complete-masterclass-teens'] },
      { band: 'Ages 14 and 15', h3: 'Algorithms', p: 'Searching, sorting and careful counting, the CS 11 kind of thinking, with a CCC Junior paper in February.', courses: ['problem-solving-dsa-masterclass-teens', 'ccc-junior-and-senior-preparation-course'] },
      { band: 'Ages 15 to 17', h3: 'Data and clusters', p: 'Open municipal data cleaned and mapped, then k-means and other unsupervised methods on real files.', courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens'] },
      { band: 'Ages 17 and 18', h3: 'Bigger models, second language', p: 'Supervised models with proper testing, and C++ for students heading for CCC Senior.', courses: ['ai-ml-masterclass-teens', 'cpp-programming-masterclass-for-teens'] }
    ]
  },

  ai: {
    eyebrow: 'Judgement over tools',
    h2: 'Why a Surrey teen should learn to judge a model before trusting an AI tool',
    intro: 'Because k-means gave two different answers on the same playgrounds, and only a person can say which one matters.',
    p1: 'Unsupervised learning is a good place to see the limits of automation. The algorithm optimises one thing, distance, and is perfectly happy to split a community in two. A student who has watched that happen understands that every model optimises something specific, and that the something is chosen by a person.',
    p2: 'Our teaching follows from that. Students state the question first, write and run the steps, predict what should happen, and argue with what does. AI tools, where a family allows them, arrive later as a second opinion to be tested. Teens who work this way are the ones who notice when a confident answer is wrong.',
    closer: 'The CCC enforces the same idea from the other side: no assistant in the editor, so the reasoning has to be the student&rsquo;s.',
    blogAnchor: 'why learning to code still pays off in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for Surrey, Delta, Langley and White Rock',
    intro: 'Classes are online, so a teen in Newton and another in Cloverdale, Delta or White Rock can sit in the same lesson without a trip over the Pattullo Bridge.',
    cells: [
      { h3: 'Times that suit', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'South of the Fraser', p: 'Students in Delta, Langley and White Rock join the same groups as Surrey students, all on Pacific time.' },
      { h3: 'Two formats', p: 'Groups of fifteen to twenty at one level, or private lessons for a student with a fixed aim such as a CCC paper or a BC course project.' },
      { h3: 'Their own code', p: 'Students write and keep every project in their own files. Teachers review and explain; school assignments remain the student&rsquo;s work.' },
      { h3: 'What to have', p: 'A laptop or desktop able to run Python 3, a microphone and a reliable connection. Python is installed together in the first lesson if needed.' },
      { h3: 'Free first lesson', p: 'The first class costs nothing, asks for no card, and ends with a recommended course and level from the teacher.' }
    ],
    spec: { title: 'No Surrey centre', p: 'Modern Age Coders has no office or classroom in Surrey, BC and does not claim one. Teachers work from India and teach live online, on Pacific time.' }
  },

  fees: {
    h2: 'Fees for families in Surrey, BC',
    intro: 'Fees appear in your own currency, with the currency code printed beside each.',
    first: 'A complete live class at no cost, finishing with a placement and a course suggestion.',
    group: 'A monthly fee for eight live classes with fifteen to twenty teens at one level.',
    private: 'A monthly fee for one teacher with one student, at hours the family chooses.',
    closer: 'Surrey families pay the same as families anywhere in Canada. There is no charge until after the free class and an agreed course and schedule; the pricing page covers missed lessons and school breaks.'
  },

  reviewsH2: 'Reviews from parents and students on Google',

  book: {
    h2: 'Book a free class for a teen in Surrey, BC',
    intro: 'Tell us the grade and what the student has coded so far. A beginner writes a first complete program; a student with experience might try the Surrey playground data or a timed problem of ours in the CCC style.',
    success: 'Thank you. We will be in touch soon about a class in Surrey, BC.'
  },

  faq: {
    h2: 'Questions from Surrey, BC families',
    intro: 'What parents and teens in Surrey, British Columbia ask us most.',
    items: [
      { q: 'Is this page about Surrey in British Columbia?', a: 'Yes. It is for families in Surrey, BC, on Pacific time and in the BC school system, not Surrey in England. Classes are live online from home.' },
      { q: 'Do you have a classroom in Surrey?', a: 'No. Every lesson is live online. Teens join a class of fifteen to twenty or have a private teacher.' },
      { q: 'Does your course count as BC Computer Programming 11?', a: 'No. We teach alongside school courses and do not grant provincial credits. The credit for Computer Programming 11, 12 or Computer Science 11 comes from the school.' },
      { q: 'What should a Grade 9 student in Surrey start with?', a: 'Python for Teens in most cases, plus the Beaver Computing Challenge in November if they want a first contest. The free class confirms the level.' },
      { q: 'Does my teenager need my consent to use ChatGPT?', a: 'Yes. OpenAI\'s help centre says children aged 13 to 18 need parental consent, and that ChatGPT is not meant for children under 13. Our lessons work without it.' },
      { q: 'Is Claude used in your teen classes?', a: 'No. Anthropic\'s terms say users must be at least 18, so no student under 18 uses Claude with us.' },
      { q: 'Is editor autocomplete allowed in the CCC?', a: 'No. The CCC grader rules say AI-based tools within an IDE cannot be used, so we practise for contests with those features off.' },
      { q: 'Did BC stop changing the clocks?', a: 'Yes. The BC government says the province adopted permanent daylight saving time after 8 March 2026, set at UTC-7, so Surrey does not fall back on 1 November 2026.' },
      { q: 'When do classes run for Surrey students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every time is confirmed in Pacific time.' },
      { q: 'Where does the playground project data come from?', a: 'From the City of Surrey\'s published Park Playgrounds layer, used under the City\'s open data licence. Students download it and run the clustering themselves; the City has not endorsed our courses.' }
    ]
  },

  next: {
    eyebrow: 'More for British Columbia',
    h2: 'Other pages for Surrey and BC students',
    html: 'Start with <a class="cg-inline-link" href="/coding-classes-in-british-columbia">coding classes in British Columbia</a>, or read about <a class="cg-inline-link" href="/ubc-computer-science-admission-requirements">UBC computer science admission</a>. For contests see the <a class="cg-inline-link" href="/ccc-junior-guide">CCC Junior guide</a>, and for scheduling across provinces the <a class="cg-inline-link" href="/canada-time-zones-2026-online-class-times">Canada time zones guide</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Surrey and British Columbia',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-british-columbia', label: 'British Columbia' },
    { href: '/computer-programming-11-and-12-bc', label: 'BC Computer Programming 11 and 12' },
    { href: '/beaver-computing-challenge-guide', label: 'Beaver Computing Challenge' },
    { href: '/ai-and-machine-learning-classes-in-canada', label: 'AI and ML in Canada' }
  ],

  personalityCss: `
.cg-root.cg-apyb .cg-hero h1 { font-weight: 600; letter-spacing: -0.01em; line-height: 1.1; }
.cg-root.cg-apyb .cg-capsule { border-top: 3px solid var(--cg-accent); border-bottom: 1px solid var(--cg-accent); padding-block: 0.7rem; }
.cg-root.cg-apyb .cg-eyebrow { letter-spacing: 0.1em; font-size: 0.76rem; text-transform: uppercase; }
.cg-root.cg-apyb .cg-section-head h2 { max-width: 28ch; }
.cg-root.cg-apyb .cg-table caption { text-align: left; font-weight: 500; font-style: italic; }
.cg-root.cg-apyb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-apyb #project code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.77rem; line-height: 1.5; padding: 0.9rem 1rem; border-left: 3px double var(--cg-accent); }
.cg-root.cg-apyb .cg-ladder-col { border-bottom: 2px solid var(--cg-accent); padding-bottom: 0.7rem; }
.cg-root.cg-apyb .cg-callout { border-left-width: 2px; }
`,

  dossier: {
    curriculumAuthority: 'curriculum.gov.bc.ca: ADST 10 to 12 course list (Computer Studies 10, Web Development 10, Computer Programming 11 and 12, Computer Information Systems 11, Robotics 11), Computer Programming 11 content and computational thinking definition, Computer Programming 12 content, Mathematics list with Computer Science 11 and 12, CS 11 big ideas and sample question; BC Gov News 2026AG0013-000209 on permanent UTC-7; CEMC BCC (2026 dates, Grade 9/10 eligibility, 15 questions out of 90, 45 minutes, maths-only concepts, English only) and CCC (2027 date, 5 questions, free practice account, English and French, through a school); OpenAI Help Center age article; Anthropic Consumer Terms (Oct 8, 2025); CCC Online Grader rules on AI tools in an IDE; facts-geo.md for 236/257/604/672/778 and America/Vancouver.',
    localProject: 'City of Surrey open data, Park Playgrounds (City of Surrey Open Data License, commercial use allowed), 167 playgrounds fetched with urllib on 22 October 2026 in NAD83 UTM zone 10N metres; each reduced to the mean of its outline vertices; our surrey_kmeans_page.py (python -I): k = 6, 20 seeds, 50 rounds; tightest run 891 million square metres total squared distance, 137 of 167 in a cluster led by their own community, South Surrey split in two and no Fleetwood cluster; tightest six-leader run 944 million square metres, 144 of 167; labels Newton 38, Cloverdale 32, Whalley 28, South Surrey 24, Guildford 18, Fleetwood 13, blank 13, City Centre 1. Labelled as ours. Lesson family: unsupervised learning, k-means, random restarts, comparing clusters with human labels.',
    requiredMentions: [
      'Contains information licensed under the Open Government License',
      'Park Playgrounds',
      '891 million square metres',
      '944 million square metres',
      'split South Surrey into two clusters and left Fleetwood without one of its own',
      'Of the 167 playgrounds, 13 carry no community label and one is tagged City Centre',
      'Newton has the most labelled playgrounds (38)',
      'What makes one algorithm better than another algorithm?',
      'Surrey numbers use 604 and the BC overlay codes 236, 257, 672 and 778',
      'Students in Grade 10 or below are eligible to participate in the Grade 9/10 BCC'
    ],
    sources: [
      { claim: 'BC curriculum: ADST 10 to 12 course list.', url: 'https://curriculum.gov.bc.ca/curriculum/adst' },
      { claim: 'BC curriculum: Computer Programming 11 content and computational thinking definition.', url: 'https://curriculum.gov.bc.ca/curriculum/adst/11/computer-programming' },
      { claim: 'BC curriculum: Computer Programming 12 content.', url: 'https://curriculum.gov.bc.ca/curriculum/adst/12/computer-programming' },
      { claim: 'BC curriculum: Mathematics course list and Computer Science 11 big ideas.', url: 'https://curriculum.gov.bc.ca/curriculum/mathematics/11/computer-science' },
      { claim: 'BC Gov News: permanent daylight saving time from 8 March 2026, UTC-7.', url: 'https://news.gov.bc.ca/releases/2026AG0013-000209' },
      { claim: 'CEMC Beaver Computing Challenge: 2026 dates, Grade 9/10 eligibility, format.', url: 'https://cemc.uwaterloo.ca/contests/bcc' },
      { claim: 'CEMC CCC: 2027 date, 5 questions, free practice account.', url: 'https://cemc.uwaterloo.ca/contests/ccc' },
      { claim: 'CEMC how contests work: all students participate through their school.', url: 'https://cemc.uwaterloo.ca/contests/how-contests-work' },
      { claim: 'OpenAI Help Center: ChatGPT ages and parental consent.', url: 'https://help.openai.com/en/articles/8313401-is-chatgpt-safe-for-all-ages' },
      { claim: 'Anthropic Consumer Terms: users must be at least 18.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'CCC Online Grader rules: AI-based tools within an IDE cannot be used.', url: 'https://cccgrader.com/rules.pdf' },
      { claim: 'City of Surrey: Park Playgrounds item.', url: 'https://www.arcgis.com/home/item.html?id=b842e45ce90d4e3899c1a5218743c9ce' },
      { claim: 'City of Surrey Open Data License hub page: commercial use, attribution, non-endorsement.', url: 'https://www.arcgis.com/sharing/rest/content/items/55089a19491a4fe59a41e059fd8af708/data?f=json' },
      { claim: 'IANA tzdb northamerica: America/Vancouver and America/Toronto offsets.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any claim about Surrey schools, school districts or their results: none made, by the row instruction.',
      'Any Surrey population: StatCan not reachable live, so none printed.',
      'BC graduation requirements or credit counts: not stated; www2.gov.bc.ca was blocked.',
      'Traffic loop counts from gisprod.surrey.ca: not used; the host returned a Cloudflare challenge and was not retried.',
      'That the k-means clusters are City areas or boundaries: refused; they are our clusters.',
      'True polygon centroids: not claimed; we average outline vertices and say so.',
      'Which BC schools offer which computing courses: not claimed; families are told to check their school.',
      'That our courses earn BC credits: refused; we do not grant provincial credits.',
      'Recommending Claude or any 18+ tool to a teenager: refused under Anthropic\'s terms.',
      'Any affiliation with CEMC, the BC education ministry, the City of Surrey or any BC school district.',
      'CEMC contest fees: left out of the copy (currency-neutral page).'
    ]
  }
};
