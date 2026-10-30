'use strict';
// What coding classes cost in Canada (ag- cost door; Canada cluster Plan 2, row 82).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Owner 2026-10-24 (CAD live): other providers' published fees are printed as found, in Canadian dollars, only inside
// <span data-market-price data-no-price-swap>; our own fees are data-price anchors only (marketPrices: true).
// Sources, read raw with curl on 31 October 2026 (copies and SOURCES.txt in
// keyword-research-2026-09/ca/src-pilots/coding-classes-cost-canada/):
//  - codeninjas.com/faq (cn-faq.txt): "Rates are set by our locally owned and operated centers."; "Please contact a nearby
//    center for pricing information."; "we have programs for kids ages 5-14"; "the curriculum is divided into 9 levels,
//    from White to Black belt". No price published.
//  - uwaterloo.ca ESQ fall programs (uw-esq-fall.txt): after school clubs "4-week-long programs for all youth in grades 2-4
//    and 5-7"; "sharpen your coding skills"; Thursdays; "Time: 5:00 - 7:30 pm"; "Cost: $130/participant, bursary
//    applications available"; "Fall 2026 registration opens Tuesday, September 1st at 9 AM."
//  - uwaterloo.ca ESQ library programs (uw-library-progs.txt): "All library programs are free of cost, you just have to
//    register!"; "Cost: Free, registration required". Bursaries page (uw-bursaries.txt): "Bursaries are subject to
//    availability"; "Only those demonstrating need will receive a bursary/award".
//  - uottawa.ca engineering outreach clubs for kids (uottawa-clubs-kids.txt): "Aimed at children in grades 2 to 6";
//    "engineering, science and computer programming"; Saturdays "from 9:30 to noon or from 1 to 3:30 p.m."; "$145 for 5
//    in-person sessions". The 2026 to 2027 themes are science and engineering, so the page calls them general STEM clubs.
//  - uottawa.ca clubs for teens (uottawa-clubs-teens.txt): "Aimed at teenagers in grades 7 to 11"; "$160 for 5 weeks";
//    Microcontroller Bootcamp February 27 to March 27, 2027, 1:00 to 3:30 p.m., "Arduino, micro:bit, Phidgets, Sphero";
//    Game Development Studio January 30 to April 17, 2027, 1:00 to 4:00 p.m., "$340 for 12 weeks", "programming, game
//    design, source control and agile project management"; Technovation Girls Ottawa, grades 8 to 12, "Participation is free".
//  - makerkids.com/weekly-classes-virtual (mk-virtual.txt): 1-hour classes "$159/month (4 classes)"; 2-hour classes
//    "$249/month (4 classes)"; Maker Mavericks Python Level 1 "$749 (Full course" for "12 weeks)" (an en dash in the source
//    is not reproduced); "from age 5 to 13". makerkids.com/weekly-classes (mk-weekly.txt): "Monthly billing model allows
//    parents to start and stop classes easily"; "a 5 to 1 child to staff ratio". MakerKids' own pike13 store, Bloor
//    (makerkids1.txt): "2h classes are $225/month 1h classes are $145/month", while item listings on the same page read
//    CAD$199 and CAD$249; the page prints the intro line and says to confirm.
//  - cscircles.cemc.uwaterloo.ca (csc-circles.txt): "Computer Science Circles is a free service of the Centre for Education
//    in Mathematics and Computing at the University of Waterloo". cemc.uwaterloo.ca/resources: "There is no registration or
//    fee required to access these materials."
//  - calgarylibrary.ca Coding Buddies (calgarylib-codingbuddies.txt): "Kids work with teen volunteers to learn and practise
//    essential coding skills at their own pace", ages 8-12; Open Lab ages 13-17 "From art to robots, and photography to
//    coding"; join page: "Free Library Membership". The program page lists no fee, and the page says exactly that.
// Blocked or unpublished (never worked around): UBC Geering Up (browser verification), U of T outreach, Dalhousie,
// U of Alberta, Vancouver Public Library, City of Surrey (403); Jumbula registration pages (403); Code Ninjas (no price).
// Our own material, labelled on the page: every per-hour and per-class figure (inputs shown), the Python calculator (run
// under CPython on 31 October 2026, output reproduced), the seven comparison steps, the spend ladder and the questions.
// Lesson family: unit rates (turning a fee into a price per live hour) and writing a small function to do it.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

// A fee as another provider publishes it, kept out of the currency switcher.
const M = s => `<span data-market-price data-no-price-swap>${s}</span>`;
// Our fees: anchors only, so every visitor sees their own currency.
const CUR = ' <span class="fee-cur" data-price-currency>CAD</span>';
const G = '<span data-price="coding.canada.group">$140</span>' + CUR;
const P = '<span data-price="coding.canada.personal">$210</span>' + CUR;
const G1 = '<span data-price="coding.canada.group" data-price-derive="perClass">$17.50</span>' + CUR;
const P1 = '<span data-price="coding.canada.personal" data-price-derive="perClass">$26.25</span>' + CUR;

const CALC = `# Our worked example: cost per live hour, from fees as each provider publishes them
offers = [
    # (name, fee, sessions, hours per session)
    ("University after-school club", 130, 4, 2.5),
    ("University Saturday club, kids", 145, 5, 2.5),
    ("University teen bootcamp", 160, 5, 2.5),
    ("University game studio, teens", 340, 12, 3),
    ("Centre, virtual, 1-hour class", 159, 4, 1),
    ("Centre, virtual, 2-hour class", 249, 4, 2),
]

def per_hour(fee, sessions, hours):
    live_hours = sessions * hours
    return fee / live_hours, live_hours

for name, fee, sessions, hours in offers:
    rate, live = per_hour(fee, sessions, hours)
    print(f"{name:32} {live:5.1f} h  {rate:6.2f} per live hour")`;

const CALC_OUT = `University after-school club      10.0 h   13.00 per live hour
University Saturday club, kids    12.5 h   11.60 per live hour
University teen bootcamp          12.5 h   12.80 per live hour
University game studio, teens     36.0 h    9.44 per live hour
Centre, virtual, 1-hour class      4.0 h   39.75 per live hour
Centre, virtual, 2-hour class      8.0 h   31.12 per live hour`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'COST', blurb: 'What coding classes cost in Canada, format by format: free clubs, university clubs and centre fees as each provider publishes them, worked out per live hour.' },
  slug: 'coding-classes-cost-canada',
  code: 'ccc',
  accent: '#455C71',
  accentRationale: 'Coding classes cost in Canada: a muted ledger slate #455C71, contrast 6.55 on the paper #FBF8F2 and 5.64 on #EDE7DA, at least 6 RGB units from every site accent and 14 from every other Canada accent',
  pageType: 'market',
  market: CA,
  marketPrices: true,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Coding classes cost in Canada',
  title: 'Coding Classes Cost in Canada 2026: Fees by Format',
  description: 'What coding classes for kids and teens cost in Canada in 2026: free clubs, university clubs, centre fees as published, Code Ninjas, and our live online fee.',
  ogDescription: 'Free library clubs, university Saturday clubs, private centres that bill by the month, and franchises that set fees centre by centre. Every fee as its provider publishes it, then worked out per live hour.',
  twitterDescription: 'Coding class fees in Canada as providers publish them, turned into a price per live hour.',
  pageName: 'Coding Classes Cost in Canada',
  webPageDescription: 'A cost guide for Canadian parents and teens: what coding classes cost by format in 2026, from free programs to university clubs and private centres, with every fee taken from the provider\'s own page and a method for comparing them per live hour.',
  courseDescription: 'Live online coding classes for kids and teens across Canada, taught by a regular teacher in a group batch of 15 to 20 or one to one, eight one-hour classes a month.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Coding classes cost in Canada',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#market', label: 'Fees by format' },
    { href: '#hourly', label: 'Per live hour' },
    { href: '#compare', label: 'How to compare' },
    { href: '#free', label: 'Free options' },
    { href: '#ours', label: 'Our fee' }
  ],
  eyebrow: 'Canada &middot; Cost guide &middot; Ages 6 to 18 and beyond',
  h1: 'What coding classes cost in Canada',
  lede: 'Ask five Canadian providers what a coding class costs and you will get five different units: a fee per participant for a four-week club, a fee for five Saturday mornings, a monthly membership for four classes, a price for a twelve-week course, or no figure at all until you phone a centre. This guide puts those units side by side. Every outside fee on it was read on the provider\'s own website on 31 October 2026 and is printed exactly as published. Then we do the one piece of arithmetic that makes them comparable, the price of a single hour of live teaching, and show our inputs so you can check every line.',
  secondaryCta: { href: '#market', label: 'See the fee table' },
  wa: 'Hello Modern Age Coders, we are in Canada and comparing coding class fees for our child. Could we book a free first class?',
  heroNote: 'Live classes since 2020 &middot; 10,000+ students &middot; rated 4.9 across 547 Google reviews',
  spec: [
    ['Free routes', 'Libraries, CEMC, some clubs'],
    ['University clubs', 'Term blocks, in person'],
    ['Private centres', 'Often monthly memberships'],
    ['Franchises', 'Fees set centre by centre'],
    ['Our format', 'Live online, eight classes a month'],
    ['Class size', 'Batch of 15 to 20, or 1-on-1'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'Coding classes for Canadian kids and teens run from free (library clubs, CEMC\'s Computer Science Circles) to ' + M('$130 CAD') + ' for a four-week University of Waterloo club and ' + M('$159 CAD') + ' a month for four one-hour virtual classes at a Toronto centre. Code Ninjas centres set their own rates. Modern Age Coders teaches live online: ' + G + ' a month in a group batch, or ' + P + ' one to one.',

  picks: {
    eyebrow: 'Where the fee goes',
    h2: 'Three courses Canadian families start with',
    lede: 'Each is taught live by a regular teacher, eight one-hour classes a month, in a batch of fifteen to twenty or one to one.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'CCC / 01', title: 'Coding for kids', note: 'Ages 6 to 12. Scratch games first, then apps, Minecraft and an early taste of Python.' },
      { course: 'python-ai-kids-masterclass', code: 'CCC / 02', title: 'Python and AI for kids', note: 'Ages 9 to 12. The step from blocks to typed code, with projects a child can explain.' },
      { course: 'python-complete-masterclass-teens', code: 'CCC / 03', title: 'Python for teens', note: 'Ages 13 to 18. From a first program to real projects, at the pace of Grades 8 to 12.' }
    ]
  },

  sections: [
    {
      id: 'market', tint: 'tint', eyebrow: 'Fees by format',
      h2: 'Coding class fees in Canada, as each provider publishes them',
      lede: 'One row per format, with a real Canadian example of each. The figure is copied from the provider\'s own page exactly as it appears there, and the unit it is quoted in is kept, because the unit is half of the price.',
      body: [
        { kind: 'table', caption: 'Coding and STEM class fees in Canada, as published on each provider\'s own site, checked 31 October 2026', head: ['Format', 'Example', 'Published fee', 'What the fee covers'], rows: [
          ['Free online course', 'Computer Science Circles (CEMC, University of Waterloo)', 'Free', 'Self-paced Python lessons in the browser; CEMC calls it "a free service"'],
          ['Free library club', 'Coding Buddies, Calgary Public Library', 'No fee listed', 'Ages 8 to 12, coding practice with teen volunteers; library membership is free'],
          ['Free university outreach', 'ESQ library programs, University of Waterloo', 'Free', '"All library programs are free of cost, you just have to register!"'],
          ['University after-school club', 'ESQ after school clubs, University of Waterloo, fall 2026', M('$130 CAD'), 'Per participant: four Thursdays, 5:00 to 7:30 pm, grades 2 to 4 or 5 to 7, STEM with coding'],
          ['University Saturday club, kids', 'Clubs for kids, University of Ottawa, 2026 to 2027', M('$145 CAD'), 'Five in-person sessions of two and a half hours, grades 2 to 6, general STEM themes'],
          ['University Saturday club, teens', 'Microcontroller Bootcamp, University of Ottawa, spring 2027', M('$160 CAD'), 'Five Saturdays, 1:00 to 3:30 pm, grades 7 to 11, Arduino and micro:bit coding'],
          ['University term project club', 'Game Development Studio, University of Ottawa, 2027', M('$340 CAD'), 'Twelve Saturdays, 1:00 to 4:00 pm, programming, game design and source control'],
          ['Private centre, live virtual', 'MakerKids (Toronto), one-hour weekly class', M('$159 CAD'), 'A month of four one-hour classes'],
          ['Private centre, live virtual', 'MakerKids (Toronto), two-hour weekly class', M('$249 CAD'), 'A month of four two-hour classes'],
          ['Private centre, fixed course', 'MakerKids, Python Level 1 (virtual)', M('$749 CAD'), 'The full twelve-week course'],
          ['Franchise centre', 'Code Ninjas', 'Not published', '"Rates are set by our locally owned and operated centers."'],
          ['Live online, group (ours)', 'Modern Age Coders', G, 'A month of eight one-hour live classes in a batch of 15 to 20'],
          ['Live online, one to one (ours)', 'Modern Age Coders', P, 'A month of eight one-hour live classes with a teacher to yourself']
        ] },
        { kind: 'source', html: 'Sources, each read on the provider\'s own site on 31 October 2026: <a class="ag-inline-link" href="https://cscircles.cemc.uwaterloo.ca/" rel="noopener" target="_blank">Computer Science Circles</a>; <a class="ag-inline-link" href="https://www.calgarylibrary.ca/events-and-programs/programs/coding-buddies" rel="noopener" target="_blank">Calgary Public Library, Coding Buddies</a>; University of Waterloo Engineering Outreach, <a class="ag-inline-link" href="https://uwaterloo.ca/engineering-outreach/programs/engineering-science-quest/fall-programs" rel="noopener" target="_blank">ESQ fall programs</a> and <a class="ag-inline-link" href="https://uwaterloo.ca/engineering-outreach/youth-programs-0/general-free-programs/esq-library-programs" rel="noopener" target="_blank">library programs</a>; University of Ottawa Engineering Outreach, <a class="ag-inline-link" href="https://www.uottawa.ca/faculty-engineering/outreach/clubs-kids" rel="noopener" target="_blank">clubs for kids</a> and <a class="ag-inline-link" href="https://www.uottawa.ca/faculty-engineering/outreach/clubs-teens" rel="noopener" target="_blank">clubs for teens</a>; <a class="ag-inline-link" href="https://makerkids.com/weekly-classes-virtual/" rel="noopener" target="_blank">MakerKids virtual weekly classes</a>; <a class="ag-inline-link" href="https://www.codeninjas.com/faq" rel="noopener" target="_blank">Code Ninjas FAQ</a>. Fees change each term; check the provider\'s page before you pay. We are not connected with any provider named here.' },
        { kind: 'two', mt: true,
          leftH3: 'How to read the table',
          left: [
            'The published fee column is not a ranking. A four-week club and a monthly membership are different products, and the cheapest line on the page is free. What the table shows is the shape of the Canadian market: free self-paced and volunteer options at one end, short university terms in the middle, and monthly memberships at private centres, with franchises that quote by phone.',
            'The University of Ottawa kids\' clubs describe hands-on activities in "engineering, science and computer programming", but the themes listed for 2026 to 2027 are space, building, environment and chemistry, so we list them as general STEM clubs. The teen bootcamp and the game studio are the coding rows from that university.'
          ],
          rightH3: 'What no table can show',
          right: [
            'Quality is missing from every column. Two classes at the same fee can differ completely in who teaches, how many children share that teacher, and whether a child leaves able to write a program alone. The steps further down this page turn those questions into things you can ask.',
            'Most fees here also come with conditions: a registration window that opens on a fixed morning, a term that started weeks ago, a campus a long drive away. A cheap class that runs on the wrong side of the city on the wrong day costs more than its fee.'
          ] }
      ]
    },
    {
      id: 'hourly', tint: 'deep', eyebrow: 'Per live hour',
      h2: 'The same fees, turned into a price per hour of live teaching',
      lede: 'The fairest single number for comparing coding classes is the fee divided by the hours a teacher is actually in the room or on the call. Every figure in the last column is our calculation, from the inputs in the column before it.',
      body: [
        { kind: 'table', caption: 'Fee per live hour: our calculation from each provider\'s published fee and schedule (checked 31 October 2026)', head: ['Class', 'Published fee', 'Inputs we used', 'Per live hour (ours)'], rows: [
          ['ESQ after school club, Waterloo', M('$130 CAD'), '4 sessions x 2.5 hours = 10 hours', M('$13.00 CAD')],
          ['Clubs for kids, Ottawa', M('$145 CAD'), '5 sessions x 2.5 hours = 12.5 hours', M('$11.60 CAD')],
          ['Microcontroller Bootcamp, Ottawa', M('$160 CAD'), '5 sessions x 2.5 hours = 12.5 hours', M('$12.80 CAD')],
          ['Game Development Studio, Ottawa', M('$340 CAD'), '12 sessions x 3 hours = 36 hours', M('$9.44 CAD')],
          ['MakerKids virtual, one-hour class', M('$159 CAD'), '4 classes x 1 hour = 4 hours', M('$39.75 CAD')],
          ['MakerKids virtual, two-hour class', M('$249 CAD'), '4 classes x 2 hours = 8 hours', M('$31.12 CAD')],
          ['Modern Age Coders, group batch', G, '8 classes x 1 hour = 8 hours', G1],
          ['Modern Age Coders, one to one', P, '8 classes x 1 hour = 8 hours', P1]
        ] },
        { kind: 'p', mt: true, html: 'Our arithmetic assumes every scheduled session runs and the child attends all of it. The university session lengths are the start and end times each page prints, so they include breaks and, in Waterloo\'s case, the pizza the club serves. The MakerKids figure for the two-hour class is 249 divided by 8, which is 31.125; our Python below prints it as 31.12. Our own classes are one hour each, so the price per class is also the price per live hour.' },
        { kind: 'two', mt: true,
          leftH3: 'Why university clubs are cheaper per hour',
          left: [
            'The university outreach programs in Waterloo and Ottawa are run by engineering faculties, and Waterloo\'s says its bursaries come "With generous support from our supporters". Per hour they are the least expensive paid option we found. If you live near one and the dates suit, they are a good first taste of building and coding.',
            'They are also short. A four-week or five-week block ends, the next one is on a different theme, and registration opens on a set morning and can fill: two of the Ottawa teen bootcamps were marked full when we read the page. They are a series of sessions rather than a curriculum that builds month after month.'
          ],
          rightH3: 'Why a weekly class costs more per hour',
          right: [
            'A private centre or an online school is paying for a continuing programme: a teacher who knows your child, a sequence of lessons, and timetables that run all year. MakerKids states a ratio of five children to one staff member for its in-person weekly classes, and a small room is part of what that fee buys.',
            'Our group fee sits between the university clubs and the private centre per live hour. The difference you are paying for is the steady path: eight classes every month with the same teacher, from first Scratch game to Python projects, which is the part of learning to code that a short club cannot give.'
          ] }
      ]
    },
    {
      id: 'calc', tint: 'tint', eyebrow: 'A worked example',
      h2: 'Our worked example: a cost calculator a student can write',
      lede: 'This is the arithmetic from the table above as a short Python program. We wrote it for this page and ran it on 31 October 2026. It doubles as a first lesson in functions and loops, which is how we would use it in class with a twelve-year-old.',
      body: [
        { kind: 'code', label: 'Our worked example: price per live hour', lang: 'Python', code: CALC, note: 'Add the quote you were given as one more line in the list, in the same form: a name, the fee, the number of sessions and the hours in each.' },
        { kind: 'code', label: 'What it prints', lang: 'Output', code: CALC_OUT },
        { kind: 'two', mt: true,
          leftH3: 'What the program teaches',
          left: [
            'A list of tuples holds the data, a function does one job and returns two values, and a loop prints a line per offer. A student who can explain why <code>live_hours</code> is calculated inside the function, and not typed in, has understood the idea of a unit rate in both math and code.',
            'Changing one input and predicting the output before running it is the habit we build in every class. Try it: if the Waterloo club ran three hours a session, what would the last column say?'
          ],
          rightH3: 'Where the program stops being enough',
          right: [
            'A price per hour treats every hour as equal, and they are not. An hour with a teacher reading your child\'s own code is worth more than an hour of a child working alone in a room with a supervisor nearby. The steps below add the questions that a single number leaves out.',
            'The program also ignores anything paid on top: registration fees, kits, a missed session that cannot be made up. Add those to the fee before you divide, and the comparison stays honest.'
          ] }
      ]
    },
    {
      id: 'compare', tint: 'deep', eyebrow: 'How to compare',
      h2: 'Seven steps to work out what a coding class really costs',
      lede: 'Our method for any quote, from a library club to a private tutor. It takes about ten minutes with the provider\'s page open, and it works for in-person and online classes alike.',
      body: [
        { kind: 'ol', items: [
          '<b>Write the fee in its own unit.</b> Per participant, per month, per course or per session. Never convert one into another in your head; write the unit next to the number.',
          '<b>Count the live sessions the fee buys.</b> Four Thursdays, five Saturdays, twelve weeks, or eight classes a month. If the page does not say, ask, and do not guess.',
          '<b>Multiply by the length of each session.</b> Use the times the provider prints. That gives the hours of live teaching, the number the whole comparison rests on.',
          '<b>Divide the fee by those hours.</b> That is your price per live hour. Label it as your own calculation when you share it with a partner or another parent.',
          '<b>Add whatever sits outside the fee.</b> Registration, kits, software, materials and travel. A class across town on a weekday evening has a cost that never shows on the receipt.',
          '<b>Ask who teaches and how many share them.</b> A ratio, a batch size, or a one-to-one booking. Then ask whether the same teacher stays for the next term.',
          '<b>Ask what happens after this block ends.</b> Is there a next level, a sequence, a plan for the year? A cheap term with nothing after it is a sampler, which is fine if a sampler is what you wanted.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Questions to ask a centre that does not publish fees',
          left: [
            'Code Ninjas\' own FAQ answers its cost question with "Please contact a nearby center for pricing information." That is normal for franchises, where each centre is a local business. When you call, ask for the fee in writing with its unit, the number of visits it covers, and how long each visit lasts.',
            'Also ask whether there is a registration or enrolment fee, whether a missed visit can be made up, and how much notice is needed to stop. Then run the seven steps above on the answer.'
          ],
          rightH3: 'Questions to ask any online school',
          right: [
            'Is the class live, with a teacher talking to your child, or recorded? How many students are in a live batch? Is the fee billed monthly, or sold as a block of credits that expire? Will the timetable work in your province\'s time zone after the clocks change?',
            'Some Canadian online schools sell high school credit courses, which are a different product with their own fees and their own rules from the province. A coding class that teaches alongside school is not a credit course, and we do not grant Ontario credits or any provincial credit.'
          ] }
      ]
    },
    {
      id: 'free', tint: 'tint', eyebrow: 'Free options',
      h2: 'Free and low-cost ways to start coding in Canada',
      lede: 'Before paying anyone, try what is free. Canada has more of it than most countries, much of it built in Waterloo.',
      body: [
        { kind: 'table', caption: 'Free coding and STEM options we could confirm on their own pages, checked 31 October 2026', head: ['Option', 'Who it suits', 'What its page says'], rows: [
          ['Computer Science Circles, CEMC', 'Python beginners working at their own pace', '"Computer Science Circles is a free service of the Centre for Education in Mathematics and Computing at the University of Waterloo"'],
          ['CEMC resources', 'Students and teachers, math and computer science', '"There is no registration or fee required to access these materials."'],
          ['ESQ library programs, Waterloo region', 'Ages 6 to 13, depending on the session', '"All library programs are free of cost, you just have to register!"'],
          ['Technovation Girls Ottawa, University of Ottawa', 'Grades 8 to 12, building a mobile app with mentors', '"Participation is free"'],
          ['Coding Buddies, Calgary Public Library', 'Ages 8 to 12, beginners', 'Kids "learn and practise essential coding skills at their own pace" with teen volunteers; no fee listed'],
          ['Open Lab, Calgary Public Library', 'Ages 13 to 17', '"From art to robots, and photography to coding"; no fee listed']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What free does well',
          left: [
            'Free options answer the first question every parent has: does my child actually like this? A month of Computer Science Circles at the kitchen table, or a few library sessions, tells you more than any sales call.',
            'They are also strong for a motivated teen. CEMC\'s materials come from the same Waterloo centre that runs the Canadian Computing Competition, and a Grade 9 student who works through them steadily is learning real Python. Our <a class="ag-inline-link" href="/cemc-free-resources-guide">guide to CEMC\'s free resources</a> goes through them one by one.'
          ],
          rightH3: 'Where free runs out',
          right: [
            'Self-paced material has no one to notice when a child is stuck, and volunteer clubs depend on volunteers. Library sessions run in short series with limited places, and the days and branches change each season.',
            'Help with the fee exists too. Waterloo\'s outreach program offers bursaries, and its page is honest that they "are subject to availability" and that "Only those demonstrating need will receive a bursary/award". Waterloo\'s fall club listing says "bursary applications available", so ask any program about financial help before deciding it is out of reach.'
          ] }
      ]
    },
    {
      id: 'centres', tint: 'deep', eyebrow: 'Centres and franchises',
      h2: 'How private centres and franchises price coding in Canada',
      lede: 'Two models dominate the bricks-and-mortar end of the market: a local centre that publishes a monthly membership, and a franchise brand whose centres each set their own fee.',
      body: [
        { kind: 'two',
          leftH3: 'A centre that publishes its fees',
          left: [
            'MakerKids, in Toronto, is one of the few Canadian coding centres whose own site shows its prices. For live virtual classes it lists ' + M('$159 CAD') + ' a month for four one-hour classes and ' + M('$249 CAD') + ' a month for four two-hour classes, and a twelve-week Python Level 1 course at ' + M('$749 CAD') + '. Its in-person weekly classes use a "Monthly billing model" that lets parents "start and stop classes easily".',
            'Its booking store for in-person classes at the Bloor location opens by listing two-hour classes at ' + M('$225 CAD') + ' a month and one-hour classes at ' + M('$145 CAD') + ' a month, while the individual class listings on that same page show other figures. When a provider\'s own pages disagree, confirm the fee for the exact class before you pay.'
          ],
          rightH3: 'A franchise that quotes by centre',
          right: [
            'Code Ninjas runs centres across Canada, and its FAQ says it has "programs for kids ages 5-14" with a curriculum "divided into 9 levels, from White to Black belt". On cost, the same FAQ says "Rates are set by our locally owned and operated centers." So there is no national figure to print, and we will not guess one.',
            'That is not a criticism: a franchise centre in a downtown mall and one in a smaller town have different rents. It does mean you compare a Code Ninjas quote by phone, using the seven steps. Our <a class="ag-inline-link" href="/modern-age-coders-vs-code-ninjas">comparison with Code Ninjas</a> sets out how the two ways of learning differ.'
          ] },
        { kind: 'p', mt: true, html: 'The MakerKids figures in the fee tables on this page come from its virtual classes page, read on 31 October 2026, because that page states both the number of classes and their length. The in-person figures above come from its booking store on the same day. Neither is a promise of next term\'s fee.' }
      ]
    },
    {
      id: 'ours', tint: 'tint', eyebrow: 'Our fee',
      h2: 'What Modern Age Coders charges Canadian families, and what it buys',
      lede: 'Our classes are live online, so the fee is the same in every province. The price anchors below show each visitor the fee in their own currency, wherever they are reading from.',
      body: [
        { kind: 'table', caption: 'Modern Age Coders coding fees for Canada, per month (eight one-hour live classes)', head: ['Format', 'Monthly fee', 'Per live class', 'Who it suits'], rows: [
          ['Group batch, 15 to 20 students', G, G1, 'A child who enjoys a class of peers and a fixed weekly rhythm'],
          ['One to one', P, P1, 'A student with a goal, a gap to close, or a timetable that will not fit a batch'],
          ['First class', 'Free', 'Free', 'Anyone deciding whether live online learning suits their child']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the monthly fee includes',
          left: [
            'Eight live classes of one hour, taught by the same teacher, following one of our full courses from start to finish. Parents can reach us on WhatsApp between classes. There is no registration fee and no kit to buy: a laptop and a browser are enough.',
            'Paying six months at once takes a quarter off the monthly fee. Paying month by month costs more over the same period, but you can stop at the end of any month.'
          ],
          rightH3: 'What our teachers do in those hours',
          right: [
            'We teach students how to think through a problem, not to copy an answer, whether that answer comes from a classmate, a video or an AI tool. A child explains the code they wrote before the class moves on, and every course works up to projects they built themselves.',
            'The teaching is the same for a family in Halifax, in Winnipeg or abroad. Teachers work from India, so classes run at hours set for Canadian time zones, and a batch can be chosen for after school or a weekend morning in your province.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Spending in stages',
    h2: 'A sensible order to spend in',
    lede: 'Our suggestion for families who are not sure yet. Each stage is a reason to spend a little more, never a requirement.',
    table: { caption: 'From free to steady weekly classes (ours)', head: ['Stage', 'What to try', 'Move on when'], rows: [
      ['1. Taste', 'A free library session or a few Computer Science Circles lessons', 'The child asks for more without being reminded'],
      ['2. Try', 'A short club, or a free first class with a teacher', 'They finish something and want to show it to you'],
      ['3. Commit', 'A weekly class that follows a course month after month', 'They are stuck on ideas, not on syntax'],
      ['4. Focus', 'One to one, for a contest, a school course or a big project', 'There is a specific goal and a date']
    ] },
    left: { h3: 'For parents', ps: [
      'Most children should spend a while at stage 2 before a monthly fee. A child who loved a five-week club is a much safer bet for a year of classes than one who has never tried.',
      'The jump that matters most is from stage 2 to stage 3. Short blocks keep restarting; steady weekly teaching is where a child goes from following steps to solving problems alone.'
    ] },
    right: { h3: 'For teens paying attention to cost', ps: [
      'Free CEMC material plus a contest such as the CCC, written at your school, is a serious path on its own. Pay for teaching when you want someone to read your code and push you.',
      'If you choose one to one, use it on purpose: bring the problem you are stuck on, not a blank hour.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses a Canadian fee can go towards',
    lede: 'The monthly fee is the same whichever course a student follows. Each is taught live, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Children', sub: 'Ages 6 to 12', courses: [
        { code: 'CCC / KID / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Games and stories in blocks.' },
        { code: 'CCC / KID / 02', slug: 'game-development-masterclass-for-kids', title: 'Game development for kids', blurb: 'Scratch, then Roblox and Minecraft.' },
        { code: 'CCC / KID / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'The first typed language.' }
      ] },
      { num: 'II', h3: 'Teens', sub: 'Ages 13 to 18', courses: [
        { code: 'CCC / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From first script to projects.' },
        { code: 'CCC / TEEN / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive web pages.' },
        { code: 'CCC / TEEN / 03', slug: 'complete-app-development-masterclass-for-teens', title: 'App development for teens', blurb: 'Mobile apps from scratch.' }
      ] },
      { num: 'III', h3: 'Canadian goals', sub: 'Contests and school', courses: [
        { code: 'CCC / GOAL / 01', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC Junior and Senior preparation', blurb: 'For the Canadian Computing Competition.' },
        { code: 'CCC / GOAL / 02', slug: 'ics3u-ics4u-computer-science-companion-course', title: 'ICS3U and ICS4U companion', blurb: 'Alongside Ontario school CS.' },
        { code: 'CCC / GOAL / 03', slug: 'vibe-coding-for-teens-python-web-ai-projects-course', title: 'Vibe coding for teens', blurb: 'AI-assisted building, understood.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live classes on Canadian time',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school in your province\'s time zone.' },
      { time: 'Weekends', l: 'Weekend mornings suit many younger children.' },
      { time: '1-on-1', l: 'Set around your family\'s week.' }
    ],
    cells: [
      { h3: 'Same teacher', p: 'One teacher who learns how your child thinks.' },
      { h3: 'Eight hours a month', p: 'Eight one-hour classes, every month.' },
      { h3: 'Nothing to buy', p: 'A laptop and a browser are the whole kit.' },
      { h3: 'Clock changes handled', p: 'Ontario and Quebec move to UTC-5 on 1 November 2026; we adjust.' },
      { h3: 'Any province', p: 'Victoria to St. John\'s, the same class.' },
      { h3: 'Batch or one to one', p: 'Fifteen to twenty in a batch, or one to one.' }
    ]
  },

  projectsH2: 'What a month of classes turns into',
  projectsLede: 'Projects built by our learners, the clearest evidence of what the fee pays for. More are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'What parents wrote on Google, word for word.',

  fees: {
    h2: 'Fees',
    lede: 'One monthly fee for eight live one-hour classes, the same in every province, with no registration charge. Pay month to month and stop when you like, or pay six months at once for a quarter off.',
    free: ['A free first class', 'Meet the teacher first', 'No card asked for'],
    group: ['A batch of fifteen to twenty', 'The same teacher each week', 'Pick a batch time', 'Billed monthly'],
    one: ['A teacher to yourself', 'Times set around you', 'Paced to your goal']
  },

  faq: {
    eyebrow: 'Questions from Canadian parents',
    h2: 'Coding class costs in Canada: common questions',
    items: [
      { q: 'How much do coding classes for kids cost in Canada?', a: 'It depends on the format. Free options include CEMC\'s Computer Science Circles and library clubs. University outreach clubs in Waterloo and Ottawa charge a fee per term block of four or five sessions, private centres such as MakerKids publish monthly memberships, and franchise centres quote locally. The fee table on this page prints each one as published.' },
      { q: 'How much does Code Ninjas cost in Canada?', a: 'Code Ninjas does not publish a national price. Its FAQ says rates are set by its locally owned and operated centres and asks families to contact a nearby centre for pricing. Ask the centre for the fee in writing, the number of visits it covers and how long each visit lasts, then compare it per hour.' },
      { q: 'Are there free coding classes for kids in Canada?', a: 'Yes. CEMC at the University of Waterloo runs Computer Science Circles as a free service, and its other resources need no registration or fee. Some public libraries run coding clubs, such as Coding Buddies at Calgary Public Library, and university outreach programs run free library sessions and clubs such as Technovation Girls Ottawa.' },
      { q: 'What is the fairest way to compare two coding classes?', a: 'Work out the price per live hour: count the sessions the fee buys, multiply by the length of each, and divide the fee by the result. Then add anything outside the fee, and ask who teaches and how many students share that teacher. The seven steps on this page set it out.' },
      { q: 'Are online coding classes cheaper than in-person ones in Canada?', a: 'Not always. Short university clubs we found cost less per live hour than any weekly class, online or in person. What online classes save is travel time and the choice of a teacher and timetable that a local centre may not have. Compare per hour, not by format.' },
      { q: 'What does the Modern Age Coders fee include?', a: 'Eight one-hour live classes a month with the same teacher, following a full course from start to finish. There is no registration fee and no kit. The fee table on this page shows the monthly fee for a group batch and for one to one.' },
      { q: 'Is there a discount for paying in advance?', a: 'Yes. Paying for six months at once takes a quarter off the monthly fee. Paying monthly lets you stop at the end of any month.' },
      { q: 'How big are your group classes?', a: 'A group batch has fifteen to twenty students with one teacher. If you would like a teacher to yourself, one to one is the other option; we do not sell a smaller batch to Canadian families.' },
      { q: 'When do classes run for Canadian families?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Classes are timed for Canadian time zones, from British Columbia to Newfoundland.' },
      { q: 'Do your coding classes give Ontario high school credits?', a: 'No. We teach coding alongside a student\'s school course and we do not grant Ontario credits or credits in any province. Credit courses are a different product, sold by schools that issue credits.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Canadian families weighing up their options.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'Every page we have for Canadian students.' },
      { href: '/coding-classes-for-kids-in-canada', label: 'Coding classes for kids in Canada', p: 'Where children aged 6 to 12 begin.' },
      { href: '/coding-classes-for-teens-in-canada', label: 'Coding classes for teens in Canada', p: 'The path from Grade 8 to Grade 12.' },
      { href: '/modern-age-coders-vs-code-ninjas', label: 'Modern Age Coders vs Code Ninjas', p: 'A belt-based centre against a live online class.' },
      { href: '/best-online-coding-classes-in-canada', label: 'Choosing an online coding class in Canada', p: 'The criteria that matter beyond the fee.' },
      { href: '/cemc-free-resources-guide', label: 'CEMC free resources', p: 'Waterloo\'s free material, one by one.' },
      { href: '/canada-time-zones-2026-online-class-times', label: 'Class times across Canada', p: 'Every province\'s offset in 2026.' },
      { href: '/online-coding-classes-cost', label: 'Coding class costs worldwide', p: 'How formats are priced outside Canada.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'The cheapest way to judge any class is to watch one. Book a free first class, see how the teacher works with your child, and decide on the fee afterwards.',
    readFirst: 'Curious how a class is put together? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through a lesson, and the <a class="ag-inline-link" href="/courses">course list</a> has every syllabus.',
    note: 'We teach by video call from India and have no Canadian office. WhatsApp reaches us fastest from any province.',
    formNote: 'Free first class. No card details.'
  },

  footer: {
    cols: [
      { h4: 'Costs and choices', links: [
        { href: '/online-coding-classes-cost', label: 'Coding class costs' },
        { href: '/modern-age-coders-vs-code-ninjas', label: 'Compared with Code Ninjas' },
        { href: '/pricing', label: 'Our pricing' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-ontario', label: 'Ontario' },
        { href: '/coding-classes-in-british-columbia', label: 'British Columbia' },
        { href: '/coding-classes-in-alberta', label: 'Alberta' }
      ] }
    ],
    bottomRight: 'Fee divided by live hours'
  },

  personalityCss: `
.ag-root.ag-ccc .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-ccc .ag-capsule { border-left-width: 5px; border-radius: 1px; }
.ag-root.ag-ccc .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ccc .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ccc .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-ccc .ag-steps { gap: 1.1rem; }
.ag-root.ag-ccc .ag-band-head h3 { letter-spacing: -0.006em; }
`,

  dossier: {
    curriculumAuthority: 'Provider pages read raw on 31 October 2026: Code Ninjas FAQ (no price; rates set by local centres; ages 5-14; 9 belt levels); University of Waterloo ESQ fall programs (after school clubs, 4 weeks, grades 2-4 and 5-7, Thursdays 5:00 to 7:30 pm, fee per participant, bursaries) and ESQ library programs (free); University of Ottawa clubs for kids (grades 2 to 6, five Saturday sessions) and clubs for teens (grades 7 to 11, five weeks; Game Development Studio, twelve Saturdays 1:00 to 4:00 pm; Technovation Girls Ottawa free); MakerKids virtual weekly classes (monthly for four classes, one or two hours; twelve-week Python Level 1) and weekly classes (monthly billing, 5 to 1 ratio); CEMC Computer Science Circles (free service) and resources (no registration or fee); Calgary Public Library Coding Buddies (ages 8-12, no fee listed) and free membership.',
    localProject: 'Our cost-per-live-hour calculator in Python (run under CPython on 31 October 2026): 130 / 10 = 13.00, 145 / 12.5 = 11.60, 160 / 12.5 = 12.80, 340 / 36 = 9.44, 159 / 4 = 39.75, 249 / 8 = 31.125 printed 31.12; our seven comparison steps and spend ladder. Lesson family: unit rates and a small function.',
    requiredMentions: ['Rates are set by our locally owned and operated centers.', 'All library programs are free of cost, you just have to register!', 'they "are subject to availability"', 'Microcontroller Bootcamp', 'Game Development Studio', 'Technovation Girls Ottawa', 'Coding Buddies', 'four Thursdays, 5:00 to 7:30 pm', 'Fee divided by live hours', '249 divided by 8, which is 31.125', 'Seven steps to work out what a coding class really costs', 'Monthly billing model'],
    sources: [
      { claim: 'Code Ninjas: rates set by locally owned centres; contact a centre for pricing; ages 5-14; 9 levels.', url: 'https://www.codeninjas.com/faq' },
      { claim: 'University of Waterloo ESQ after school clubs: four weeks, grades 2-4 and 5-7, fall 2026 fee per participant.', url: 'https://uwaterloo.ca/engineering-outreach/programs/engineering-science-quest/fall-programs' },
      { claim: 'University of Waterloo ESQ library programs are free with registration.', url: 'https://uwaterloo.ca/engineering-outreach/youth-programs-0/general-free-programs/esq-library-programs' },
      { claim: 'University of Waterloo Engineering Outreach bursaries, subject to availability.', url: 'https://uwaterloo.ca/engineering-outreach/registration/engineering-outreach-bursaries' },
      { claim: 'University of Ottawa clubs for kids: grades 2 to 6, five Saturday sessions and fee.', url: 'https://www.uottawa.ca/faculty-engineering/outreach/clubs-kids' },
      { claim: 'University of Ottawa clubs for teens: bootcamp and Game Development Studio fees and schedules; Technovation Girls Ottawa free.', url: 'https://www.uottawa.ca/faculty-engineering/outreach/clubs-teens' },
      { claim: 'MakerKids virtual weekly classes: monthly fees for four classes, twelve-week Python course.', url: 'https://makerkids.com/weekly-classes-virtual/' },
      { claim: 'MakerKids weekly classes: monthly billing, 5 to 1 child to staff ratio.', url: 'https://makerkids.com/weekly-classes/' },
      { claim: 'MakerKids Bloor booking store intro line on 1h and 2h monthly fees.', url: 'https://makerkids.pike13.com/categories/91601' },
      { claim: 'CEMC Computer Science Circles is a free service.', url: 'https://cscircles.cemc.uwaterloo.ca/' },
      { claim: 'CEMC resources need no registration or fee.', url: 'https://cemc.uwaterloo.ca/resources' },
      { claim: 'Calgary Public Library Coding Buddies, ages 8-12; Open Lab ages 13-17; free membership.', url: 'https://www.calgarylibrary.ca/events-and-programs/programs/coding-buddies' }
    ],
    rejectedClaims: [
      'A Code Ninjas price: not published by Code Ninjas; no figure printed or estimated.',
      'An average or typical Canadian fee: not computed; averaging providers\' fees would be our invention, so the page prints each fee as published.',
      'Private tutor hourly rates: no primary published rate found on 31 October 2026, so none is given.',
      'UBC Geering Up, U of T, Dalhousie, U of Alberta, Vancouver Public Library, City of Surrey and Jumbula-hosted centre fees: hosts blocked automated reading (403 or verification), not worked around.',
      'Fees of online high school credit schools: described, not named or priced; credit courses are a different product and we grant no credits.',
      'Totals across providers or across months of our fee: never summed; our own figures are per month and per live hour only.',
      'Any affiliation with the universities, libraries, CEMC or centres named: none, and the page says so.'
    ]
  }
};
