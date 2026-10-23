'use strict';
// Thunder Bay (cg- city page, Canada cluster Wave 2, row 139, slug shape online-coding-and-python-classes-in-).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md, brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Shape from content/ca/coding-and-ai-classes-in-toronto.js, prose fresh (none of Toronto's sentences or quote choices reused).
// Spine: five tests a family can use to tell whether an "online class" is genuinely live; a Python path; a Python project
// on the City of Thunder Bay Heritage Register whose lessons are messy year text, typo-split categories and stale data;
// the Ontario curriculum at the points a Thunder Bay student meets it; Eastern time and NW Ontario's time-zone line; 807.
// Sources, read raw 22 to 23 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/online-coding-and-python-classes-in-thunder-bay/):
//  - City of Thunder Bay open data, ArcGIS item bd50ba0dc1534a13b4cb6f057646b049 "Heritage Register CSV" (item-heritage.json):
//    snippet "Properties On the Municipal Heritage Register"; description: properties "heritage designated by City of Thunder
//    Bay by-law as per section 29 of the Ontario Heritage Act; or listed as per section 27 (2) of the Heritage Act";
//    "Cira (Approximate Date of Construction)"; "The data was last updated on August 22 2022." File
//    Heritage_Register_-_City_of_Thunder_Bay.csv downloaded with curl 22 October 2026 (heritage-register.csv, 13,504 bytes,
//    sha256 577424be...a98c). Portal https://opendata-thunderbay.hub.arcgis.com/ (hub domain record "City of Thunder Bay's
//    Open Data"); city page https://www.thunderbay.ca/city-hall/thunder-bay-open-data/ (open-data-page.html).
//  - Licence PDF (open-data-licence.pdf / .txt): "The Corporation of the City of Thunder Bay Open Data Licence 1.0";
//    "including for commercial purposes"; attribution "Contains information licensed under the Open Data Licence - The
//    Corporation of the City of Thunder Bay." (en dash in source, written here as a hyphen); non-endorsement clause.
//  - Ontario (facts-schools-contests.md; raw ca/src/ontario/): Grade 1 C3.2 "read and alter existing code"; Grade 6 Science
//    A2.1 "write and execute code in investigations and when modelling concepts, with a focus on obtaining input in different
//    ways"; MTH1W C2.2 "create code by decomposing situations into computational steps"; ICD2O (2023, Open) strand item
//    "including automation and artificial intelligence"; ICS3U and ICS4U (2008), ICS3U no prerequisite; EQAO Grade 9 math
//    window 12 January to 5 February 2027 and "Results of this assessment are to be included as part of a student's final
//    course mark"; OSSD STEM group includes "computer studies"; Skills Ontario 2027 on 3 and 4 May at the Toronto Congress
//    Centre with registration through the institution's contact person.
//  - CEMC: BCC 9 to 20 November 2026; CCC Wednesday 17 February 2027; Gauss 10 to 21 May 2027; "all students must
//    participate through their school"; "students can look for another local school that will allow them to join".
//  - Time (facts-geo.md; src/geo/tz/backward and northamerica, tzdb 2026e): "Link America/Toronto America/Thunder_Bay";
//    comment: "most portions of Kenora, Rainy River, and Thunder Bay Districts lying broadly west of 90°W longitude" use
//    America/Winnipeg; Manitoba UTC-5 all year from 2026-10-31. Thunder Bay CMA area code 807; CNAC dial plan Note E: CRTC
//    2023-88 approved the move "to fully transition to restrictive ten-digit local dialling on 15 January 2024" in NPA 807.
//  - brand-facts.json: free first class "30-45 minutes"; group 15 to 20.
// Our own calculations (analysis.py, heritage_decades.py; python -I; analysis.out.txt, heritage_decades.out.txt): 136 rows,
// 8 columns; Status_on_Register: "Designated - Waverley Park" 60, "Listed" 49, "Designated" 26, combined value 1; Cira:
// 128 four-digit values, 7 year ranges, 1 value "1790 (placed 1964)"; decades by first year 1790s 1, 1870s 3, 1880s 5,
// 1890s 2, 1900s 53, 1910s 35, 1920s 14, 1930s 4, 1940s 4, 1950s 6, 1960s 5, 1970s 3, 1980s 1; ownership after merging
// three federal spellings: Private 84, Public Agency 25, City of Thunder Bay 16, board-run 5, Federal Government 5,
// "Provincal Government" 1; 62 entries added in 1988 (60 of them Waverley Park); year-added values 1979 to 2022 plus one
// "1988 / Listed 2009"; 11 rows with address "-"; 15 Street values with a leading space. No building names printed
// (the register includes schools, churches and private residences). Time conversions ours. Lesson family: parsing messy
// text fields, normalising categories, checking data age.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SCRIPT = [
  'import csv',
  '',
  'decades = {}',
  'owners = {}',
  'with open("heritage-register.csv", encoding="utf-8-sig") as f:',
  '    for row in csv.DictReader(f):',
  '        first_year = int(row["Cira"].strip()[:4])',
  '        decade = first_year // 10 * 10',
  '        decades[decade] = decades.get(decade, 0) + 1',
  '        owner = row["Ownership"].strip()',
  '        if owner.startswith("Federal"):',
  '            owner = "Federal Government"',
  '        owners[owner] = owners.get(owner, 0) + 1',
  '',
  'for decade in sorted(decades):',
  '    print(str(decade) + "s", decades[decade])',
  'print(owners)'
].join('\n').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

module.exports = {
  clusterName: 'Canada',
  hub: { group: 'city', tag: 'THUNDER BAY', label: 'Thunder Bay', blurb: 'Live online Python for Thunder Bay learners, with a heritage register project on messy dates, typos and checking how old data is.' },
  market: CA,
  slug: 'online-coding-and-python-classes-in-thunder-bay',
  code: 'pthb',
  accent: '#163494',
  accentRationale: 'Thunder Bay: a deep Lake Superior blue, #163494, allocated for this row and clear of the retired purple and cyan band; contrast 10.14 on the paper #FBF8F2 and at least 8.73 on all three paper tints',
  pageType: 'city',
  place: {
    name: 'Thunder Bay',
    eyebrow: 'Thunder Bay, Ontario',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Ontario' },
      { type: 'Country', name: 'Canada' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }, { slug: 'coding-classes-in-ontario', name: 'Ontario' }],
  nav: [
    { label: 'Canada', href: '/coding-classes-in-canada' },
    { label: 'Ontario', href: '/coding-classes-in-ontario' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Thunder Bay',
  title: 'Online Coding and Python Classes in Thunder Bay | Live Online',
  description: 'Live online coding and Python classes for Thunder Bay learners aged 6 to adult: how to tell a class is truly live, a Python path, and a heritage register project.',
  ogDescription: 'Five tests for a live online class, a Python path for every age, and a Python project on the City of Thunder Bay heritage register for Northwestern Ontario learners.',
  twitterDescription: 'Thunder Bay coding and Python classes, live online with a real teacher, on Eastern time.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '23 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Thunder Bay Learners',
    description: 'Live online coding and Python for Thunder Bay learners aged 6 to adult, in a group of fifteen to twenty or one to one, from first programs to cleaning real municipal data.'
  },

  h1: 'Online coding and Python classes in Thunder Bay',
  capsuleQ: 'Can a Thunder Bay student learn Python live online with a real teacher?',
  capsule: 'Yes. Modern Age Coders teaches live online coding and Python to Thunder Bay learners, from six year olds to adults, in groups of fifteen to twenty or one to one. Python and AI for Kids, Python for Teens and the Python Masterclass are the usual first courses, and teens can add CCC preparation. A first class is free.',
  lead: 'Thunder Bay is a long way from most of the province\'s tech jobs and coding schools, which makes "online" sound like the obvious answer. It is, provided the class is actually live and someone is actually teaching. This page gives five plain tests for that, a Python path from Grade 1 to adulthood, a project our students run on the City of Thunder Bay heritage register (136 rows that teach more about messy data than many textbooks), and where coding already appears in the Ontario curriculum a Thunder Bay student follows.',
  wa: 'Hello Modern Age Coders, I would like a free live Python class for a learner in Thunder Bay.',

  picks: {
    eyebrow: 'Python courses for Thunder Bay',
    h2: 'Four courses for Thunder Bay learners, from first Python to the CCC',
    intro: 'Python for each age group, plus contest preparation for teens who already enjoy problem solving. The free class confirms the starting point.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Grades 4 to 7', note: 'Children leave blocks behind and type programs that draw, count, ask and decide, explaining each line to the teacher as they go.' },
      { course: 'python-complete-masterclass-teens', band: 'Grades 8 to 12', note: 'Core Python taken all the way to files and data, including text cleaning like the heritage register project on this page.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'A steady route into Python for adults who have never coded, or who stopped years ago and want to start properly.' },
      { course: 'ccc-junior-and-senior-preparation-course', band: 'Grades 9 to 12', note: 'Preparation for the CEMC Canadian Computing Competition with original problems, taught in Python or another CCC language.' }
    ]
  },

  sections: [
    {
      id: 'tests', tint: '', eyebrow: 'Is it really live?',
      h2: 'Five tests that tell you whether an online coding class is genuinely live',
      intro: 'Plenty of products call themselves online classes. These five questions separate teaching from content, and they work on any provider, including us.',
      body: [
        { kind: 'table', caption: 'Five tests for a live online coding class, and how our classes answer them (our own checklist)', head: ['Test', 'What to look for', 'How it works with us'], rows: [
          ['1. Does a person see the code?', 'Someone looks at what your child typed, not just at a quiz score', 'The teacher reads the learner\'s screen and code during the lesson'],
          ['2. Can the learner interrupt?', 'Questions are answered in the moment, about the learner\'s own program', 'Yes, out loud; questions are the point of the lesson'],
          ['3. Is the code kept?', 'Programs are saved as files the learner owns and can reopen', 'Learners code on their own computer from the first week'],
          ['4. Is progress shown honestly?', 'A program rebuilt from a blank file, not badges', 'Every few weeks, without notes'],
          ['5. Can you try before paying?', 'A real lesson, not a sales call', 'A free class of 30 to 45 minutes that ends with a suggested level']
        ] },
        { kind: 'p', text: 'The first test matters most. A Thunder Bay twelve year old who writes <code>print(Hello)</code> without quotation marks gets a NameError. In a recorded course she pauses the video and guesses. In a live class the teacher asks her to read the last line of the error aloud, then asks what Python thinks <code>Hello</code> is. She works it out herself in under a minute, and next time she reads the error before asking anyone.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Group classes', p: 'Fifteen to twenty learners at the same level, one teacher, a fixed weekly rhythm. Most children and teens start here.' },
          { h3: 'One to one', p: 'A teacher for a single learner. Adults with irregular hours often choose it, and so do teens preparing for the CCC.' },
          { h3: 'What you need', p: 'A laptop or desktop with sound, a connection that holds a video call, and Python 3, which is free and installed with help in the early lessons.' }
        ] }
      ]
    },
    {
      id: 'heritage', tint: 'deep', eyebrow: 'Thunder Bay data project',
      h2: 'When were Thunder Bay\'s heritage buildings built? A Python project on the city register',
      intro: 'The City of Thunder Bay publishes its Municipal Heritage Register as an open data CSV under its Open Data Licence 1.0. The file is small, which is exactly why it is good for learning: every messy value can be looked at by hand. We pulled the CSV with curl on 22 October 2026, and each count here comes from our own Python, not from the City.',
      body: [
        { kind: 'table', caption: 'Our count of register entries by decade of construction, taking the first year in the Cira column (136 rows). One row reads "1790 (placed 1964)"', head: ['Decade (first year in the Cira column)', 'Entries'], rows: [
          ['1790s', '1'],
          ['1870s', '3'],
          ['1880s', '5'],
          ['1890s', '2'],
          ['1900s', '53'],
          ['1910s', '35'],
          ['1920s', '14'],
          ['1930s', '4'],
          ['1940s', '4'],
          ['1950s', '6'],
          ['1960s', '5'],
          ['1970s', '3'],
          ['1980s', '1']
        ] },
        { kind: 'p', text: 'The script that prints the table and the ownership counts. Nothing to install beyond Python itself; save it beside heritage-register.csv and run it:<code class="cg-mt-2">' + SCRIPT + '</code>' },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. A year that is not a number', p: 'The column is spelled "Cira", and the city describes it as the approximate date of construction. 128 values are plain years; seven are ranges such as 1910-1913; one says 1790 (placed 1964). Calling int() on the whole field crashes, so students decide on a rule, first year, and write it down.' },
          { h3: '2. One owner, three spellings', p: 'The Ownership column has "Federal Government", "Federal" and "Federal Governement". Merged, they are five entries; left alone, they look like three tiny groups. One "Provincal Government" stays as it is, because a typo fix should be a decision, not an accident.' },
          { h3: '3. A spike that is not a building boom', p: 'Sixty-two entries were added to the register in 1988, sixty of them marked "Designated - Waverley Park". That year shows a decision about a whole area, not sixty separate ones, and a chart of "heritage additions per year" needs to say so.' }
        ] },
        { kind: 'callout', h3: 'How old is this file?', p: 'The dataset description says "The data was last updated on August 22 2022." Anything added or removed since then is not in it. That is not a flaw to hide; it is the first thing to print above any chart, and the habit of checking it is worth more than the chart itself.' },
        { kind: 'p', text: 'Ownership after our merge: 84 private, 25 public agency, 16 City of Thunder Bay, 5 board-run by the City, 5 federal and 1 provincial. Status: 60 Waverley Park designations, 49 listed, 26 other designations and 1 entry with a combined status. Contains information licensed under the Open Data Licence - The Corporation of the City of Thunder Bay (<a class="cg-inline-link" href="https://media-004-ca.cdn.govstack.com/thunderbay-002-ca-dot-site/media/inmjquon/city-of-thunder-bay-open-data-licence.pdf">licence</a>, <a class="cg-inline-link" href="https://opendata-thunderbay.hub.arcgis.com/">open data portal</a>, <a class="cg-inline-link" href="https://www.thunderbay.ca/city-hall/thunder-bay-open-data/">city open data page</a>). We print no building names. The licence gives no endorsement, and none is implied.' }
      ]
    },
    {
      id: 'ontario', tint: 'tint', eyebrow: 'Ontario curriculum',
      h2: 'Where a Thunder Bay student already meets code in Ontario schools',
      intro: 'Thunder Bay schools follow the Ontario curriculum, the same documents as Toronto or Ottawa. We read them from the ministry\'s curriculum service on 22 October 2026; quotation marks mark the ministry\'s words.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Grade 1 onward', p: 'From Grade 1, math asks children to "read and alter existing code" and say how the change affects the outcome. By Grade 6, science adds coding in investigations, "with a focus on obtaining input in different ways".' },
          { h3: 'Grade 9 and Grade 10', p: 'MTH1W has students "create code by decomposing situations into computational steps". EQAO\'s Grade 9 math assessment runs 12 January to 5 February 2027 and counts in the course mark. ICD2O, an open Grade 10 course from 2023, includes "automation and artificial intelligence".' },
          { h3: 'Grades 11 and 12', p: 'ICS3U needs no prerequisite and leads to ICS4U; both date from 2008. The diploma rules put computer studies in the STEM-related course group, one of the compulsory-credit choices. Our <a class="cg-inline-link" href="/ics3u-computer-science-help">ICS3U help page</a> goes into the course.' }
        ] },
        { kind: 'p', text: 'The heritage project lines up with that ladder better than it looks. Reading a CSV and counting is Grade 8 data work; deciding how to turn "1910-1913" into a number is exactly the decomposition MTH1W describes; and merging three spellings of one owner is the kind of careful design ICS3U expects. A Thunder Bay student who has done it once tends to find school coding tasks short.' },
        { kind: 'table', mt: true, caption: 'Contests open to Thunder Bay students in 2026 to 2027 (dates as published by CEMC and Skills Ontario, read 22 October 2026)', head: ['Event', 'Organiser', 'Date', 'How to enter'], rows: [
          ['Beaver Computing Challenge', 'CEMC', '9 to 20 November 2026', 'Through a school'],
          ['Canadian Computing Competition', 'CEMC', 'Wednesday 17 February 2027', 'Through a school'],
          ['Gauss math contest (Grades 7 and 8)', 'CEMC', '10 to 21 May 2027', 'Through a school'],
          ['Skills Ontario Competition, including Coding', 'Skills Ontario', '3 and 4 May 2027, Toronto Congress Centre', 'Through the school\'s contact person']
        ] },
        { kind: 'callout', h3: 'What we do not do', p: 'We teach alongside school courses and do not grant Ontario credits. CEMC says all students take part through their school and suggests that where a school does not participate, students "look for another local school that will allow them to join". We are not connected with the Ontario Ministry of Education, EQAO, any Thunder Bay school board, CEMC, Skills Ontario or the City of Thunder Bay.' }
      ]
    },
    {
      id: 'clock', tint: '', eyebrow: 'Eastern time in the northwest',
      h2: 'Thunder Bay keeps Eastern time, though part of its district does not',
      intro: 'In the IANA time zone database, America/Thunder_Bay is simply a link to America/Toronto, so the city changes its clocks with the rest of Eastern Ontario. The database notes that parts of Thunder Bay District lying broadly west of 90 degrees west follow America/Winnipeg instead.',
      body: [
        { kind: 'table', caption: 'Two sample Thunder Bay class times and the matching time in India, 2026 to 2027 (tz database 2026e offsets; our own arithmetic; illustrative times, not set batches)', head: ['Period', 'Thunder Bay', '6 pm Tuesday in Thunder Bay is, in India', '11 am Saturday in Thunder Bay is, in India'], rows: [
          ['Rest of October 2026', 'UTC-4', '3:30 am Wednesday', '8:30 pm Saturday'],
          ['Winter, after clocks go back on 1 November 2026', 'UTC-5', '4:30 am Wednesday', '9:30 pm Saturday'],
          ['Spring and summer, once clocks go forward on 14 March 2027', 'UTC-4', '3:30 am Wednesday', '8:30 pm Saturday']
        ] },
        { kind: 'p', text: 'Manitoba’s clocks will not go back on 1 November 2026; the province stays on UTC-5 from then on. So this winter, a family in Thunder Bay and a relative in the western part of the district or in Winnipeg share a clock; from 14 March 2027 they are an hour apart again. We write every class time in Thunder Bay time and re-confirm it before each change. Our <a class="cg-inline-link" href="/canada-time-zones-2026-online-class-times">Canada time zones page</a> covers the rest of the country.' },
        { kind: 'p', text: 'One local practical note: area code 807 moved to ten-digit local dialling, under a CRTC decision recorded in the national dial plan, fully from 15 January 2024. Our form wants those same ten digits.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'The Python path',
    h2: 'From Grade 1 code reading to Python at work',
    intro: 'Where a learner starts depends on what they can already do, which the free class shows; the age bands are approximate.',
    cols: [
      { band: 'Grades 1 to 3', h3: 'Reading and changing code', p: 'Blocks and short programs the child alters and explains, close to what Ontario math asks from Grade 1.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Grades 4 to 8', h3: 'Typed Python', p: 'Variables, loops, conditions and small functions, then a first data file before Grade 8 data work arrives.', courses: ['python-ai-kids-masterclass', 'ai-literacy-for-kids-course'] },
      { band: 'Grades 9 to 12', h3: 'Data, contests, ICS', p: 'Full Python, real files like the heritage register, the CCC, and support beside ICS3U and ICS4U.', courses: ['python-complete-masterclass-teens', 'ics3u-ics4u-computer-science-companion-course'] },
      { band: 'Adults', h3: 'Python for real tasks', p: 'From the first line to scripts that tidy spreadsheets and reports, at a pace that fits a working week.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'python-ai-automation-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Python and AI',
    h2: 'What happens when an AI meets "1790 (placed 1964)"',
    intro: 'It guesses, and it does not tell you it guessed.',
    p1: 'Give an AI assistant the Thunder Bay register and ask for a chart of construction by decade. Its code may silently drop the eight rows that are not plain years, or crash and then "fix" itself by skipping them, and it will keep the three federal spellings apart. You get a neat chart that quietly leaves out rows and splits one owner three ways.',
    p2: 'Our classes teach learners to think the problem through before typing: look at the odd values, choose a rule, write the rule down, then code it. Teens use AI tools with us within each tool\'s age limits, as a draft to inspect line by line. Copying an answer, from a classmate or a chatbot, teaches nothing we can build on.',
    closer: 'Ontario\'s new Grade 10 course puts artificial intelligence on the timetable; the students who get most from it will be the ones who can check what AI produces.',
    blogAnchor: 'should you still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for Thunder Bay and Northwestern Ontario',
    intro: 'Distance is the problem online learning solves best. Here is how the rest works.',
    cells: [
      { h3: 'Times that fit', p: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { h3: 'Across the northwest', p: 'Learners in Kakabeka Falls, Nipigon, Marathon and Dryden can join the same classes. Anyone in the part of the district that keeps Winnipeg time simply gets their times written in that zone.' },
      { h3: 'Ontario grades', p: 'Teachers plan in Ontario grades and course codes, and know when EQAO, ICS3U units and CEMC contests fall in the year.' },
      { h3: '807 numbers', p: 'Thunder Bay numbers on area code 807 work in the form; the country code is added for you.' },
      { h3: 'Homework stays honest', p: 'We help a student understand a school task, never write it for them. Marked work is the student\'s own.' },
      { h3: 'Free to begin', p: 'The first class is free and needs no card. By its end you know the right starting point and a time that could work.' }
    ],
    spec: { title: 'No Thunder Bay centre', p: 'Modern Age Coders has no office in Thunder Bay or Northwestern Ontario and claims none. All teaching is live and online, by teachers based in India.' }
  },

  fees: {
    h2: 'Fees for Thunder Bay learners',
    intro: 'Three items, each shown in the currency for your region.',
    first: 'A full live lesson without charge, closing with a level and a course suggestion.',
    group: 'The monthly fee for a group of fifteen to twenty learners at one stage.',
    private: 'The monthly fee for one teacher with one learner, at times you set together.',
    closer: 'A Thunder Bay learner pays the same as one in Toronto or anywhere else in Canada. There is no bill until the free lesson has happened and you have picked a course and time; holiday and missed-class rules sit on the pricing page.'
  },

  reviewsH2: 'Google reviews from families and learners',

  book: {
    h2: 'Book a free class for a Thunder Bay learner',
    intro: 'Send an age or grade and a few words on past coding. A Grade 2 child might start with a moving sprite; a Grade 11 student might start with the heritage register CSV.',
    success: 'Thank you. We will contact you soon about a free class for Thunder Bay.'
  },

  faq: {
    h2: 'Thunder Bay online coding and Python questions',
    intro: 'The things Thunder Bay and Northwestern Ontario families ask before booking.',
    items: [
      { q: 'Are there coding classes in Thunder Bay?', a: 'Ours are live and online rather than in a local building. A teacher teaches each lesson in real time and the learner joins from home in Thunder Bay or anywhere in the region.' },
      { q: 'How can I tell an online class is really live?', a: 'Check that a person sees the learner\'s code, that questions are answered in the moment, that programs are kept as files, and that you can try a real lesson free. Ours passes all of those.' },
      { q: 'What age can my child start Python?', a: 'Usually around 9, or Grade 4. Younger children, from 6, begin with blocks and short programs first. Teens and adults can start Python at once.' },
      { q: 'How long is the free class?', a: 'Between 30 and 45 minutes of real teaching at the learner\'s level. It ends with a suggested course and time, and no card is needed.' },
      { q: 'Do you teach adults in Thunder Bay?', a: 'Yes. Adults usually begin in the Python Masterclass, and those who want Python for work go on to the automation course.' },
      { q: 'Do your classes give an Ontario credit?', a: 'No. We do not grant Ontario credits. ICS3U, ICS4U and every other credit come from school; we add practice and understanding beside them.' },
      { q: 'Can my teen prepare for the CCC with you?', a: 'Yes. CEMC has set the 2027 CCC for Wednesday 17 February 2027. Entry is through a school, and our CCC course prepares students with problems we write ourselves.' },
      { q: 'What time zone are Thunder Bay classes in?', a: 'Eastern time, the same as Toronto. Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Does an 807 number work in your form?', a: 'Yes. Enter the ten digits of an 807 number without the leading 1. Numbers from elsewhere in Canada work too.' },
      { q: 'What does my child need at home?', a: 'A laptop or desktop with sound, a stable internet connection and a quiet spot. Tablets make typing code painful, so we ask for a keyboard. Python is free, and we help install it.' },
      { q: 'What does it cost?', a: 'Look at the Fees block on this page. It sets out the free class and the two monthly options, group or one to one, in your own currency, and nothing is paid before the free class.' }
    ]
  },

  next: {
    eyebrow: 'More for Ontario',
    h2: 'Other pages for Thunder Bay and Ontario learners',
    html: 'For the province, read <a class="cg-inline-link" href="/coding-classes-in-ontario">coding classes in Ontario</a>, or start from <a class="cg-inline-link" href="/coding-classes-in-canada">coding classes in Canada</a>. Students can go on to <a class="cg-inline-link" href="/ontario-coding-curriculum-grades-1-to-8">Ontario coding by grade</a>, <a class="cg-inline-link" href="/icd2o-digital-technology-course-explained">ICD2O explained</a> and <a class="cg-inline-link" href="/canadian-computing-competition-ccc-prep">CCC preparation</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Thunder Bay and Ontario',
  footerPlaces: [
    { href: '/coding-classes-in-canada', label: 'Canada hub' },
    { href: '/coding-classes-in-ontario', label: 'Ontario' },
    { href: '/ontario-coding-curriculum-grades-1-to-8', label: 'Ontario coding, Grades 1 to 8' },
    { href: '/icd2o-digital-technology-course-explained', label: 'ICD2O explained' },
    { href: '/canadian-computing-competition-ccc-prep', label: 'CCC preparation' }
  ],

  personalityCss: `
.cg-root.cg-pthb .cg-hero h1 { font-weight: 760; letter-spacing: -0.022em; line-height: 1.03; }
.cg-root.cg-pthb .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-pthb .cg-eyebrow { letter-spacing: 0.13em; font-weight: 700; font-size: 0.77rem; text-transform: uppercase; }
.cg-root.cg-pthb .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.012em; }
.cg-root.cg-pthb .cg-table caption { font-weight: 660; text-align: left; }
.cg-root.cg-pthb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-pthb #heritage code { display: block; white-space: pre-wrap; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 0.8rem; line-height: 1.55; padding: 0.9rem 1.1rem; border-left: 3px solid var(--cg-accent); }
.cg-root.cg-pthb .cg-ladder-col { border-top: 2px solid var(--cg-accent); padding-top: 0.9rem; }
.cg-root.cg-pthb .cg-callout { border-left-width: 4px; }
`,

  dossier: {
    curriculumAuthority: 'Ontario, read 22 October 2026 from the Ontario curriculum content API and ontario.ca, saved raw: Grade 1 math C3.2 read and alter code; Grade 6 science A2.1 coding with input; MTH1W C2.2 decomposing into computational steps; ICD2O (2023) automation and AI; ICS3U and ICS4U (2008); EQAO Grade 9 window 12 January to 5 February 2027, counts in the course mark; OSSD STEM group includes computer studies. CEMC 2026-27 BCC, CCC and Gauss dates and school-entry rules; Skills Ontario 2027. IANA tzdb 2026e link America/Thunder_Bay to America/Toronto and the NW Ontario note; CNAC dial plan Note E on 807 ten-digit dialling.',
    localProject: 'City of Thunder Bay open data, Heritage Register CSV (Open Data Licence 1.0, The Corporation of the City of Thunder Bay), downloaded with curl on 22 October 2026 and analysed with our scripts (python -I): 136 rows; Cira column 128 plain years, 7 ranges, 1 "1790 (placed 1964)"; construction decades by first year (1900s 53, 1910s 35, 1920s 14 ...); ownership after merging three federal spellings (Private 84, Public Agency 25, City 16, board-run 5, Federal 5, provincial 1); 62 entries added in 1988, 60 of them Waverley Park; file last updated 22 August 2022 per its description. No building names printed. Labelled as ours. Lesson family: messy text fields, category normalisation, data age.',
    requiredMentions: [
      'Federal Governement',
      'Provincal Government',
      '1790 (placed 1964)',
      'The data was last updated on August 22 2022.',
      'Designated - Waverley Park',
      'Open Data Licence - The Corporation of the City of Thunder Bay',
      'Kakabeka Falls, Nipigon, Marathon and Dryden',
      'Five tests that tell you whether an online coding class is genuinely live',
      'America/Thunder_Bay is simply a link to America/Toronto',
      'area code 807 moved to ten-digit local dialling'
    ],
    sources: [
      { claim: 'City of Thunder Bay open data portal (Heritage Register CSV).', url: 'https://opendata-thunderbay.hub.arcgis.com/' },
      { claim: 'City of Thunder Bay ArcGIS item: Heritage Register CSV, description and last-updated note.', url: 'https://www.arcgis.com/home/item.html?id=bd50ba0dc1534a13b4cb6f057646b049' },
      { claim: 'City of Thunder Bay Open Data Licence 1.0 (commercial use, attribution, non-endorsement).', url: 'https://media-004-ca.cdn.govstack.com/thunderbay-002-ca-dot-site/media/inmjquon/city-of-thunder-bay-open-data-licence.pdf' },
      { claim: 'Ontario curriculum content API: elementary math and science coding, MTH1W, ICD2O, ICS courses.', url: 'https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics' },
      { claim: 'EQAO: Grade 9 math window and course-mark rule.', url: 'https://www.eqao.com/the-assessments/' },
      { claim: 'CEMC contests 2026-27 and the through-a-school rule.', url: 'https://cemc.uwaterloo.ca/contests' },
      { claim: 'Skills Ontario Competition 2027.', url: 'https://www.skillsontario.com/skills-ontario-competition' },
      { claim: 'IANA tzdb backward and northamerica: America/Thunder_Bay link and the NW Ontario note.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'Any Thunder Bay population figure: StatCan not reachable live, nothing printed.',
      'Names of buildings on the register: not printed (the register includes schools, places of worship and private residences).',
      'That the register is current: refused; its description says it was last updated on 22 August 2022.',
      'The city\'s exact longitude relative to 90 degrees west: not stated, no saved source.',
      'That the 1988 spike was 62 separate decisions: refused; 60 of the entries share the Waverley Park designation.',
      'That our classes earn Ontario credits: refused; we do not grant Ontario credits.',
      'CEMC and Skills Ontario fees: left out (currency-neutral page).',
      'Any affiliation with the City of Thunder Bay, the Ontario Ministry of Education, EQAO, CEMC or Skills Ontario.'
    ]
  }
};
