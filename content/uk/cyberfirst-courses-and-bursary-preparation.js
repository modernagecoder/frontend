'use strict';
// CyberFirst courses and bursary, 2026 status and preparation (ag- guide door, UK and US exams cluster, row UK075).
// Sources read raw with curl on 31 October 2026 (copies in keyword-research-2026-09/uk-us-gap/src/cyberfirst-courses-and-bursary-preparation/):
//  - www.ncsc.gov.uk/cyberfirst/overview: HTTP 301 to www.ncsc.gov.uk/cyber-skills; /cyberfirst/bursaries and
//    /cyberfirst/degree-apprenticeships return 404. Cyber Skills overview: "Since 2016, the National Cyber Security Centre
//    (NCSC) has supported thousands of young people through the CyberFirst programme."; NCSC is "the Cyber Pathway lead for
//    the new and much larger TechFirst programme"; "A new TechGrad University Scholarship launches in November 2026";
//    scholarships "for up to 1150 domestic students each year" (amount printed in pounds; not reproduced).
//  - NCSC Cyber Skills, Members: "The CyberFirst programme has now transitioned over to TechFirst under the leadership of
//    DCMS."; NCSC focus "shifting towards more focused support for Key Stage 5 students"; "HMG-funded summer work placement
//    through the TechGrad Scholarship scheme".
//  - NCSC Cyber Skills, News: CyberFirst annual report 2025-2026 and social value report 2025-2026 published; Spotlight Talks.
//  - NCSC Cyber Skills, Skills: TechFirst "UK wide network of home nation and regional delivery partners"; CSE Connect.
//  - NCSC Cyber Skills, Key stage 4 and 5 resources: CyberFirst Navigators for 11 to 14 year olds; "CyberFirst Defenders: A
//    free course aimed at 14 to 15 year-olds" (sign up with IBM SkillsBuild) covering threats, first-line defences, securing a
//    home network, digital footprints; "CyberFirst Futures - coming soon", "A free course aimed at 15 to 16 year-olds";
//    Cyber Skills Live, "over 20 activities", "around 30 minutes" each, no registration.
//  - NCSC Cyber Skills, Key stage 3 resources: CyberSprinters for 7 to 11 year olds; Empower Cyber Week knowledge nuggets for
//    12 to 13 year olds (Binary 101, Logic Gates, Secrets, ASCII and Unicode).
//  - GOV.UK, TechFirst (Department for Digital, Culture, Media and Sport; published 4 December 2025, last updated 19 October
//    2026): "the government's flagship tech skills programme"; strands for schools, AI Apprenticeship Pathway, Undergraduate
//    Scholarship, Doctoral Support, Local, Women's Programme, Community; update of 7 May 2026 "Added details of the CyberFirst
//    International Pilots."
//  - GOV.UK, TechFirst for schools: "giving 1 million young people the chance"; regional delivery partners by region and
//    nation; TechFirst Schools Recognition, Bronze, Silver or Gold; Ada Computer Science with the Raspberry Pi Foundation, for
//    ages 11 to 19, developed with the University of Cambridge; TechFirst Girls Competition for girls aged 12 to 13, delivered
//    by IBM, Year 8 in England and Wales, Year 9 in Northern Ireland; "CyberFirst Girls Competition, which ran from 2016 to
//    2025"; 2026 dates: registration 5 October to 10 November, competition 11 to 20 November; UK Bebras 9 to 20 November 2026,
//    ages 6 to 19, 45 minutes.
//  - GOV.UK, TechFirst Undergraduate Scholarship: yearly funding for each year of full-time study at a UK university "for up
//    to 4 years (excluding year in industry)" (amount not reproduced); summer placements "typically around eight weeks long";
//    UK Home Student; before university: "at least 120 UCAS tariff points over a maximum 2 year period" and a full-time degree
//    "in any subject to start in September 2027"; "When applications open in November, you will need to complete a full
//    application. This will involve interactive learning activities, a technical aptitude assessment, and an interview";
//    "Registering your interest is not an application."; Semiconductor Pathway for Electrical and Electronic Engineering,
//    Physics, Materials Science or Computer Science.
// Not found on any page read: CyberFirst Advanced or any other residential CyberFirst summer course for 2026; a CyberFirst
// bursary application for 2027 entry. The page says so rather than guessing. The aptitude assessment's content is not
// published; the page says so and teaches broad computational thinking, never imitation items.
// Our own material, labelled on the page: password search-space arithmetic (26^8 = 208,827,064,576; 62^8 =
// 218,340,105,584,896; 26^12 = 95,428,956,661,682,176), a six-item warm-up set (binary 101101 = 45; Caesar shift; XOR
// truth table; 256 addresses in a /24 block; ASCII 'A' = 65; a parity check), and a route by age.
// Lesson family: counting what an attacker has to try.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'guide', tag: 'CYBERFIRST', blurb: 'CyberFirst has moved into TechFirst. Which free NCSC courses still run in 2026, what replaced the bursary, and how to prepare for the new scholarship\'s aptitude assessment and interview.' },
  slug: 'cyberfirst-courses-and-bursary-preparation',
  code: 'ccb',
  accent: '#075474',
  accentRationale: 'CyberFirst courses and bursary: a deep harbour blue #075474 from the cluster allocation, about 7.8:1 on #FBF8F2 and above 4.5:1 on every paper tint, cooler and darker than the cyber course page so the two security doors read apart',
  pageType: 'market',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'CyberFirst courses and bursary',
  title: 'CyberFirst Bursary and Courses in 2026: What Runs Now',
  description: 'CyberFirst bursary and courses in 2026: the programme is now TechFirst. Which free NCSC courses still run, the new scholarship, and how to prepare for its test.',
  ogDescription: 'The NCSC\'s CyberFirst pages now redirect, and the bursary page has gone. What still runs for ages 7 to 18, the TechFirst Undergraduate Scholarship with its aptitude assessment and interview, and how to prepare honestly.',
  twitterDescription: 'CyberFirst in 2026: what moved to TechFirst, which free courses remain, and the new undergraduate scholarship.',
  pageName: 'CyberFirst Courses and Bursary',
  webPageDescription: 'A guide to what remains of the NCSC CyberFirst programme in 2026 and what replaced it under TechFirst, built from NCSC and GOV.UK pages read on 31 October 2026, with original cyber security warm-up problems.',
  courseDescription: 'Live online cyber security and computing classes for UK teenagers aged 13 to 18: networks, cryptography, defensive security and Python, plus broad computational-thinking practice for students applying to the TechFirst Undergraduate Scholarship.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'CyberFirst courses and bursary',
  navLinks: [
    { href: '#status', label: 'What changed' },
    { href: '#courses', label: 'Free courses' },
    { href: '#scholarship', label: 'The scholarship' },
    { href: '#prepare', label: 'Preparing' },
    { href: '#route', label: 'By age' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United Kingdom &middot; Ages 7 to 18 &middot; Status checked 31 October 2026',
  h1: 'CyberFirst courses and bursary in 2026: what still runs, and how to prepare',
  lede: 'Families searching for the CyberFirst bursary in 2026 meet a moved programme. The National Cyber Security Centre says CyberFirst "has now transitioned over to TechFirst", the government\'s wider tech skills programme, and its old CyberFirst pages now redirect or return errors. Some free NCSC courses survive under the CyberFirst name, the girls\' competition has been renamed, and the bursary\'s place is taken by a TechFirst Undergraduate Scholarship whose application includes a technical aptitude assessment and an interview. This page sets out what the NCSC and GOV.UK pages said on 31 October 2026, and how a student can prepare without pretending to know an assessment nobody has published.',
  secondaryCta: { href: '#scholarship', label: 'The new scholarship' },
  wa: 'Hello Modern Age Coders, my child is interested in CyberFirst and TechFirst and would like a free cyber security class.',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Status from NCSC and GOV.UK pages only',
  spec: [
    ['CyberFirst now', 'Part of TechFirst'],
    ['Free NCSC course', 'CyberFirst Defenders, ages 14 to 15'],
    ['Coming soon', 'CyberFirst Futures, ages 15 to 16'],
    ['Bursary', 'Replaced by the TechFirst scholarship'],
    ['Scholarship test', 'Aptitude assessment and interview'],
    ['Applications', 'Open in November 2026'],
    ['Formats', 'Group of 15 to 20, or 1-on-1'],
    ['Start', 'One free class']
  ],
  capsuleQ: 'In short',
  capsule: 'CyberFirst, the National Cyber Security Centre\'s programme for young people since 2016, has transitioned into TechFirst, the UK government\'s tech skills programme. The NCSC still lists free CyberFirst courses, Defenders for ages 14 to 15 and Futures for 15 to 16 marked coming soon, while the old bursary is succeeded by the TechFirst Undergraduate Scholarship, which opens in November 2026 with an aptitude assessment and an interview. Modern Age Coders teaches cyber security and computing live online, in a group of 15 to 20 or 1-on-1.',

  picks: {
    eyebrow: 'Where to start',
    h2: 'Three courses for a teenager drawn to cyber security',
    lede: 'Defensive security itself, the Python that every security role uses, and competition practice that builds the same habits an aptitude assessment looks for.',
    items: [
      { course: 'cybersecurity-course-for-teens-ethical-defensive', code: 'CCB / 01', title: 'Cyber security for teens', note: 'Networks, cryptography and defence, taught legally and ethically, for ages 13 to 18.' },
      { course: 'python-complete-masterclass-teens', code: 'CCB / 02', title: 'Python for teens', note: 'Scripting is the everyday tool of security work, and a scholarship applicant should be fluent.' },
      { course: 'picoctf-cyberpatriot-cybersecurity-competition-prep-for-teens', code: 'CCB / 03', title: 'Capture-the-flag practice', note: 'Timed puzzles in cryptography and forensics, inside legal practice platforms.' }
    ]
  },

  sections: [
    {
      id: 'status', tint: 'tint', eyebrow: 'From CyberFirst to TechFirst',
      h2: 'Does CyberFirst still exist in 2026?',
      lede: 'In part. The NCSC says the programme has transitioned to TechFirst under the leadership of DCMS, the government department named on the TechFirst guidance, and that its own focus is moving to Key Stage 5 students heading into cyber study or work. The CyberFirst name survives on some free courses and on international pilots.',
      body: [
        { kind: 'table', caption: 'What we found for each part of CyberFirst on 31 October 2026, from NCSC and GOV.UK pages', head: ['Former CyberFirst element', 'Status we found', 'Source'], rows: [
          ['NCSC CyberFirst overview page', 'Redirects to the NCSC Cyber Skills page', 'ncsc.gov.uk, HTTP 301'],
          ['CyberFirst bursary page', 'Returns "not found"', 'ncsc.gov.uk, HTTP 404'],
          ['CyberFirst Girls Competition', 'Ran 2016 to 2025; now the TechFirst Girls Competition', 'GOV.UK TechFirst for schools'],
          ['CyberFirst Defenders course', 'Listed as a free course for ages 14 to 15', 'NCSC Key stage 4 and 5 resources'],
          ['CyberFirst Futures course', 'Listed as "coming soon", for ages 15 to 16', 'NCSC Key stage 4 and 5 resources'],
          ['CyberFirst Navigators and CyberSprinters', 'Online resources for ages 11 to 14 and 7 to 11', 'NCSC Key stage 3 and 4 resources'],
          ['CyberFirst International Pilots', 'Details added to TechFirst guidance on 7 May 2026', 'GOV.UK TechFirst'],
          ['Support for students before university', 'TechFirst Undergraduate Scholarship; NCSC calls its version TechGrad', 'GOV.UK and NCSC']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why searches still say CyberFirst',
          left: [
            'The NCSC says it has supported thousands of young people through CyberFirst since 2016, and it published a CyberFirst annual report and social value report for 2025 to 2026. Teachers, parents and older siblings still know the name, so the searches will continue for a while.',
            'The useful question is not whether a page says CyberFirst but whether it is current. Any bursary or course page dated before the move should be checked against GOV.UK.'
          ],
          rightH3: 'What we could not find',
          right: [
            'None of the pages we read on 31 October 2026 describes a CyberFirst Advanced course, a residential CyberFirst summer course, or a CyberFirst bursary application for 2027 entry. We are not saying they will never return; we are saying the official pages do not offer them today.',
            'If a school or provider advertises one, ask which official page it comes from. The NCSC and GOV.UK pages are the authority.'
          ] },
        { kind: 'source', html: 'Sources: NCSC <a class="ag-inline-link" href="https://www.ncsc.gov.uk/cyber-skills" rel="noopener" target="_blank">Cyber Skills overview</a>, <a class="ag-inline-link" href="https://www.ncsc.gov.uk/cyber-skills/members" rel="noopener" target="_blank">Members</a> and <a class="ag-inline-link" href="https://www.ncsc.gov.uk/cyber-skills/news" rel="noopener" target="_blank">News</a> pages, and GOV.UK <a class="ag-inline-link" href="https://www.gov.uk/guidance/techfirst" rel="noopener" target="_blank">TechFirst</a> guidance (last updated 19 October 2026), read 31 October 2026. We are not connected with the NCSC, GCHQ, DCMS, TechFirst, IBM or any delivery partner.' }
      ]
    },
    {
      id: 'courses', tint: 'deep', eyebrow: 'Free and official',
      h2: 'Which free CyberFirst and TechFirst courses can my child do?',
      lede: 'Several, and all are free. The NCSC lists the CyberFirst Defenders course for 14 to 15 year olds, signed up through IBM SkillsBuild, plus younger resources and a set of short browser activities. Through schools, TechFirst offers regional activities, Ada Computer Science and national challenges.',
      body: [
        { kind: 'table', caption: 'Free official options by age, from NCSC and GOV.UK pages (read 31 October 2026)', head: ['Age', 'Option', 'What it is', 'How to join'], rows: [
          ['7 to 11', 'CyberSprinters', 'Interactive online security resources, lesson plans and puzzles', 'Through a teacher or at home'],
          ['11 to 14', 'CyberFirst Navigators', 'Interactive online security resources', 'Online'],
          ['12 to 13', 'Empower Cyber Week knowledge nuggets', 'Short topics: binary, logic gates, secrets, ASCII and Unicode', 'Teacher packs and worksheets'],
          ['14 to 15', 'CyberFirst Defenders', 'Threats, first-line defences, securing a home network, digital footprints', 'Sign up with IBM SkillsBuild'],
          ['15 to 16', 'CyberFirst Futures', 'Advanced threats, attacker motivation, legislation, protecting networks', '"Coming soon"'],
          ['11 to 19', 'Ada Computer Science', 'Free computing platform with the Raspberry Pi Foundation, developed with the University of Cambridge', 'Register for an account'],
          ['Girls aged 12 to 13', 'TechFirst Girls Competition', 'Team challenges in cyber, AI, semiconductors and quantum', 'Teachers registered 5 October to 10 November 2026'],
          ['6 to 19', 'UK Bebras', '45 minutes of computational-thinking tasks', 'Through school; window 9 to 20 November 2026']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Defenders, in the NCSC\'s words',
          left: [
            'The NCSC calls Defenders "a valuable introduction on how to build and protect small networks and personal devices". Its listed topics are identifying common threats, first-line defences, constructing and securing a home network, and managing a digital footprint.',
            'That is a sensible first course for any 14 year old, whatever they do next, and it costs nothing. A student who finishes it and wants more is ready for structured classes.'
          ],
          rightH3: 'Through school, by region',
          right: [
            'GOV.UK says TechFirst reaches schools through regional delivery partners in every English region and in Wales, Scotland and Northern Ireland, and that schools can apply for Bronze, Silver or Gold TechFirst School recognition.',
            'A parent whose child\'s school is not involved can pass the regional contact to a computing teacher. Most TechFirst activity reaches students that way, not by individual sign-up.'
          ] },
        { kind: 'source', html: 'Course and resource details from the NCSC <a class="ag-inline-link" href="https://www.ncsc.gov.uk/cyber-skills/key-stage-4-and-5-resources" rel="noopener" target="_blank">Key stage 4 and 5 resources</a> and <a class="ag-inline-link" href="https://www.ncsc.gov.uk/cyber-skills/key-stage-3-resources" rel="noopener" target="_blank">Key stage 3 resources</a> pages, and GOV.UK <a class="ag-inline-link" href="https://www.gov.uk/guidance/techfirst-for-schools" rel="noopener" target="_blank">TechFirst for schools</a>, read 31 October 2026. The 2026 girls\' competition window closes on 20 November 2026.' }
      ]
    },
    {
      id: 'scholarship', tint: 'tint', eyebrow: 'What replaced the bursary',
      h2: 'What is the TechFirst Undergraduate Scholarship, and who can apply?',
      lede: 'It is the government\'s new funding scheme for students heading into tech: yearly financial support at a UK university for up to four years, summer placements and mentoring. School students can apply if they expect at least 120 UCAS tariff points and plan to start a full-time degree in September 2027. Applications open in November 2026.',
      body: [
        { kind: 'table', caption: 'TechFirst Undergraduate Scholarship, from the GOV.UK guidance (read 31 October 2026)', head: ['Feature', 'What GOV.UK says'], rows: [
          ['Funding', 'A fixed sum for each year of full-time study at a UK university, for up to 4 years (excluding a year in industry)'],
          ['Placements', 'Summer development or work placements, "typically around eight weeks long", in a digital or technology field'],
          ['Support', 'Career guidance, mentoring, events, networking and skills activities'],
          ['Subject', 'Any degree at any UK university'],
          ['Residency', 'Must be a UK Home Student, paying Home tuition fees'],
          ['Applying from school', 'At least 120 UCAS tariff points over at most two years; full-time degree starting September 2027'],
          ['Application stages', 'Interactive learning activities, a technical aptitude assessment, and an interview'],
          ['Not required', 'Previous industry experience, tech qualifications beyond entry requirements, or sector experience'],
          ['Optional strand', 'Semiconductor Pathway for Electrical and Electronic Engineering, Physics, Materials Science or Computer Science']
        ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Check eligibility.</strong> Home fee status, a full-time UK degree starting September 2027, and a realistic 120 UCAS tariff points.',
          '<strong>Register interest now.</strong> GOV.UK says registering brings news of opening dates and support sessions, but "Registering your interest is not an application."',
          '<strong>Apply in full when applications open in November 2026.</strong> The full application is separate from UCAS.',
          '<strong>Complete the interactive learning activities.</strong> GOV.UK has not yet published what they involve.',
          '<strong>Sit the technical aptitude assessment.</strong> Its content is also unpublished; GOV.UK says more information will follow.',
          '<strong>Interview.</strong> The final stage named in the guidance.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Who it says it welcomes',
          left: [
            'GOV.UK says applicants do not need previous industry experience or extra technology qualifications, and that it particularly welcomes applicants from groups underrepresented in tech, including students from lower socio-economic backgrounds.',
            'That makes it reachable for a student who has never been near a cyber club. Curiosity and the ability to reason are what the stages appear built to find.'
          ],
          rightH3: 'Two names for one idea',
          right: [
            'The NCSC\'s page announces "A new TechGrad University Scholarship" launching in November 2026, for up to 1150 domestic students a year, and mentions summer placements through the "TechGrad Scholarship scheme". GOV.UK calls its scheme the TechFirst Undergraduate Scholarship.',
            'Both describe yearly university funding with placements, opening in November 2026. Until the application site is live, treat the GOV.UK guidance as the reference for rules.'
          ] },
        { kind: 'source', html: 'Scholarship details from GOV.UK <a class="ag-inline-link" href="https://www.gov.uk/guidance/techfirst-undergraduate-scholarship" rel="noopener" target="_blank">TechFirst Undergraduate Scholarship</a> and the NCSC Cyber Skills overview, read 31 October 2026. The yearly amount is printed on GOV.UK and is not repeated here. We promise no scholarship and no place.' }
      ]
    },
    {
      id: 'prepare', tint: 'plain', eyebrow: 'Preparing honestly',
      h2: 'How do you prepare for the TechFirst technical aptitude assessment?',
      lede: 'Broadly, because nobody outside the scheme knows its content yet. GOV.UK says further information will be available soon. The honest preparation is fluency in the ideas any technical aptitude test is likely to touch: number bases, logic, simple cryptography, networks and counting. The worked example and warm-ups below are ours.',
      body: [
        { kind: 'p', html: '<strong>Our worked example: why length beats variety.</strong> A password of 8 lowercase letters has 26<sup>8</sup> = 208,827,064,576 possibilities. Allowing upper case and digits as well (62 symbols) gives 62<sup>8</sup> = 218,340,105,584,896, about a thousand times more. But simply using 12 lowercase letters gives 26<sup>12</sup> = 95,428,956,661,682,176, over four hundred times more than the 8-character mixed password.' },
        { kind: 'two', mt: true,
          leftH3: 'The reasoning, not the numbers',
          left: [
            'Each extra character multiplies the possibilities by the size of the alphabet, so length grows the search space exponentially. Adding symbol types only enlarges the base. Four more lowercase letters multiply by 26<sup>4</sup> = 456,976; changing 26 symbols to 62 multiplies by (62/26)<sup>8</sup>, which is only about 1,046.',
            'That is the kind of step an aptitude assessment rewards: turning a vague idea, "stronger password", into a count that can be compared.'
          ],
          rightH3: 'What this does not mean',
          right: [
            'Real attackers rarely try every combination; they try common words and leaked passwords first, so a long password made of predictable words can still fall quickly. Counting shows the ceiling, not the whole story.',
            'Saying that out loud in an interview, that a model has limits, is worth as much as the arithmetic.'
          ] },
        { kind: 'table', mt: true, caption: 'Six warm-up questions of our own, with answers', head: ['#', 'Our question', 'Answer'], rows: [
          ['1', 'Convert the binary number 101101 to decimal.', '45: 32 + 8 + 4 + 1'],
          ['2', 'Encrypt CODE with a Caesar shift of 3.', 'FRGH'],
          ['3', 'For which inputs does A XOR B give 1?', 'Exactly when A and B differ: 0,1 or 1,0'],
          ['4', 'How many addresses are in an IPv4 /24 block?', '256, since 32 &minus; 24 = 8 bits gives 2<sup>8</sup>'],
          ['5', 'What is the ASCII code of the capital letter A?', '65'],
          ['6', 'With even parity, what bit is added to 1011001?', '0, since the data already has four 1s']
        ] },
        { kind: 'source', html: 'The worked example and warm-ups are ours, written on 31 October 2026, and are not items from any TechFirst, CyberFirst or NCSC assessment, whose content has not been published. The NCSC\'s Empower Cyber Week packs on binary, logic gates and ASCII are free on its Key stage 3 resources page.' }
      ]
    },
    {
      id: 'route', tint: 'deep', eyebrow: 'A route by age',
      h2: 'What should a student do at each age to get into cyber security?',
      lede: 'Start free and official, add structured teaching when interest is real, and aim the last two years of school at the scholarship and a degree. Our suggested route uses only options the NCSC and GOV.UK list today.',
      body: [
        { kind: 'table', caption: 'Our suggested route, built on official free options', head: ['Age', 'Free and official', 'What a class can add'], rows: [
          ['7 to 11', 'CyberSprinters; UK Bebras', 'Scratch and block coding; puzzles with patterns'],
          ['11 to 13', 'CyberFirst Navigators; knowledge nuggets; TechFirst Girls Competition', 'First typed code in Python; binary and logic properly'],
          ['14 to 15', 'CyberFirst Defenders through IBM SkillsBuild', 'Networks and cryptography in depth; GCSE Computer Science support'],
          ['15 to 16', 'CyberFirst Futures when it opens; Ada Computer Science', 'Defensive security and capture-the-flag practice'],
          ['16 to 18', 'TechFirst Undergraduate Scholarship; NCSC Spotlight Talks', 'A Level Computer Science; a project; reasoning practice for the assessment']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Legal practice only',
          left: [
            'Every exercise we set runs on platforms built for practice or on the student\'s own machine. Trying techniques on systems you do not own or have permission to test is an offence under the Computer Misuse Act 1990, and we teach that before anything else.',
            'Capture-the-flag competitions such as picoCTF exist so that students can learn attack techniques legally, inside a deliberately vulnerable sandbox.'
          ],
          rightH3: 'Not only a cyber career',
          right: [
            'The scholarship covers any degree in any subject, and TechFirst spans AI, semiconductors and quantum as well as cyber. A student who discovers at 16 that they prefer machine learning has lost nothing.',
            'What carries across all of these is the same: careful reasoning, comfort with numbers and logic, and the ability to explain both.'
          ] },
        { kind: 'source', html: 'The route is ours, built from the free options listed on the NCSC Cyber Skills pages and GOV.UK TechFirst guidance on 31 October 2026. Availability of each option can change; check the official page before relying on a date.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'For a Year 12 or Year 13 applicant',
    h2: 'Four steps before the scholarship assessment',
    lede: 'Our plan for a sixth former who has registered interest and expects applications to open in November 2026. It works for a September 2027 start.',
    table: { caption: 'Our scholarship preparation plan', head: ['When', 'Step', 'Done when'], rows: [
      ['Now', '1. Register interest on GOV.UK', 'The confirmation email has arrived'],
      ['Weeks 1 to 3', '2. Fundamentals refreshed', 'Binary, logic, Caesar and XOR, and basic networking feel easy'],
      ['Weeks 3 to 6', '3. Reasoning under time', 'Twenty mixed counting and logic problems finished in an hour'],
      ['Before the interview', '4. Talk about one thing you built', 'Two minutes, aloud, on a project and what it taught you']
    ] },
    left: { h3: 'If applications have already opened', ps: [
      'Apply first and prepare second. A missed deadline cannot be fixed; a gap in networking knowledge can be closed in a fortnight.',
      'Read every instruction GOV.UK publishes about the learning activities, since they are the first stage and the least known.'
    ] },
    right: { h3: 'If you are in Year 10 or Year 11', ps: [
      'Take CyberFirst Defenders, which is free, and sit UK Bebras each November. Neither needs a tutor.',
      'Choose GCSE and A Level subjects that keep options open; GOV.UK asks for 120 UCAS tariff points, not particular subjects.'
    ] }
  },

  catalogue: {
    eyebrow: 'The full list',
    h2: 'What we teach a future cyber specialist',
    lede: 'Three groups by stage: first steps, security proper, and the sixth-form subjects a scholarship applicant needs.',
    bands: [
      { num: 'I', h3: 'First steps', sub: 'Ages 8 to 13', courses: [
        { code: 'CCB / F / 01', slug: 'scratch-programming-complete-course', title: 'Scratch programming', blurb: 'Logic and sequence before typing.' },
        { code: 'CCB / F / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'First real code.' },
        { code: 'CCB / F / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Computational thinking', blurb: 'Good practice for Bebras.' }
      ] },
      { num: 'II', h3: 'Security proper', sub: 'Ages 13 to 18', courses: [
        { code: 'CCB / S / 01', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cyber security for teens', blurb: 'Defence, networks and cryptography.' },
        { code: 'CCB / S / 02', slug: 'picoctf-cyberpatriot-cybersecurity-competition-prep-for-teens', title: 'Capture-the-flag practice', blurb: 'picoCTF and similar, legally.' },
        { code: 'CCB / S / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Scripts for security tasks.' }
      ] },
      { num: 'III', h3: 'School subjects', sub: 'GCSE and A Level', courses: [
        { code: 'CCB / Q / 01', slug: 'gcse-computer-science-course', title: 'GCSE Computer Science', blurb: 'Networks and security are on every board.' },
        { code: 'CCB / Q / 02', slug: 'a-level-computer-science-course-aqa-ocr', title: 'A Level Computer Science', blurb: 'AQA 7517 and OCR H446.' },
        { code: 'CCB / Q / 03', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A Level Maths', blurb: 'The mathematics behind cryptography.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live cyber security classes, all year',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekday evenings', l: 'Concepts: networks, ciphers, defences.' },
      { time: 'Weekend mornings', l: 'Practice labs and capture-the-flag sets.' },
      { time: '1-on-1', l: 'A scholarship applicant with a near deadline.' }
    ],
    cells: [
      { h3: 'Law first', p: 'The Computer Misuse Act comes in lesson one, before any technique.' },
      { h3: 'Count it', p: 'Every security claim is turned into a number the student can check.' },
      { h3: 'Sandboxes only', p: 'Practice happens on platforms built for it or the student\'s own machine.' },
      { h3: 'Groups of 15 to 20', p: 'Students explain their solutions to each other, as an interview will ask.' },
      { h3: 'Free first', p: 'We point families to Defenders and Bebras before suggesting any class.' },
      { h3: 'No award promised', p: 'We promise no scholarship, prize or place, and say so plainly.' }
    ]
  },

  projectsH2: 'What our students have built',
  projectsLede: 'Coding, maths and machine-learning projects our students have published. More in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reviews from families, as written on our Google business profile.',

  fees: {
    h2: 'Fees',
    lede: 'Every CyberFirst and TechFirst option on this page is free, and the scholarship costs nothing to apply for. Our classes are an optional monthly fee, with no joining charge and no contract.',
    free: ['A free first class', 'Our warm-up set, worked together', 'No card details'],
    group: ['Groups of 15 to 20', 'Weekly labs', 'Capture-the-flag practice', 'Monthly, stop any time'],
    one: ['One student, one teacher', 'Planned around the scholarship stages', 'For an application already open']
  },

  faq: {
    eyebrow: 'CyberFirst questions',
    h2: 'What families ask about CyberFirst and TechFirst',
    items: [
      { q: 'Is the CyberFirst bursary still running?', a: 'We found no CyberFirst bursary on the official pages on 31 October 2026: the NCSC bursary page returns not found and the NCSC says CyberFirst has transitioned to TechFirst. The scheme for school leavers is now the TechFirst Undergraduate Scholarship.' },
      { q: 'What is TechFirst?', a: 'GOV.UK calls it the government\'s flagship tech skills programme, with strands for schools, apprenticeships, undergraduate scholarships, doctoral support, local employers and women. The NCSC remains its lead for the cyber pathway.' },
      { q: 'When do TechFirst scholarship applications open?', a: 'GOV.UK says applications open in November, for degrees starting in September 2027. Registering interest beforehand brings updates but does not count as an application.' },
      { q: 'What is in the TechFirst application?', a: 'GOV.UK lists interactive learning activities, a technical aptitude assessment and an interview. It has not yet published the content of the assessment and says more information will follow.' },
      { q: 'Who can apply for the TechFirst Undergraduate Scholarship?', a: 'UK Home Students applying for, or already on, a full-time degree at a UK university in any subject. School applicants must expect at least 120 UCAS tariff points over at most two years.' },
      { q: 'Are CyberFirst courses still available?', a: 'The NCSC lists CyberFirst Defenders, a free course for 14 to 15 year olds signed up through IBM SkillsBuild, and CyberFirst Futures for 15 to 16 year olds as coming soon. We found no CyberFirst Advanced course listed.' },
      { q: 'What happened to the CyberFirst Girls Competition?', a: 'GOV.UK says it ran from 2016 to 2025 and is now the TechFirst Girls Competition, for girls aged 12 to 13. The 2026 competition runs from 11 to 20 November 2026.' },
      { q: 'Do I need coding experience to apply?', a: 'GOV.UK says previous industry experience and extra technology qualifications are not required. Being comfortable with logic, numbers and basic computing will still help with an aptitude assessment.' },
      { q: 'What days are your classes on?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you part of CyberFirst or TechFirst?', a: 'No. Modern Age Coders is an independent online school, not connected with the NCSC, GCHQ, DCMS, TechFirst, IBM or any delivery partner. We promise no scholarship or place.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Related pages',
    h2: 'More for young people interested in security',
    lede: 'Competitions, courses and the exam subjects that sit beside this route.',
    items: [
      { href: '/cyberfirst-girls-competition-preparation', label: 'CyberFirst Girls Competition', p: 'Now the TechFirst Girls Competition, for Year 8 teams.' },
      { href: '/cyber-security-course-for-teens-uk', label: 'Cyber security course for UK teens', p: 'Our defensive security course, and the law.' },
      { href: '/picoctf-for-beginners', label: 'picoCTF for beginners', p: 'A legal capture-the-flag to start with.' },
      { href: '/cybersecurity-classes-for-teens', label: 'Cyber security classes for teens', p: 'The wider course, for any country.' },
      { href: '/aqa-gcse-computer-science-8525-help', label: 'AQA GCSE Computer Science 8525', p: 'Networks and security at GCSE.' },
      { href: '/ocr-gcse-computer-science-j277-help', label: 'OCR GCSE Computer Science J277', p: 'The OCR route, including network security.' }
    ]
  },

  start: {
    h2: 'Book a free cyber security class',
    lede: 'Tell us your child\'s age and whether they are aiming at the scholarship, a competition or simply curiosity. The free class works through our warm-up set and ends with an honest view of what to do next, free options first.',
    readFirst: 'You might like to read <a class="ag-inline-link" href="/how-we-teach">how we teach</a> or look through <a class="ag-inline-link" href="/courses">the courses</a> first.',
    note: 'Teachers work from India; timetables are set in UK time. From a UK phone, WhatsApp tends to reach us fastest.',
    formNote: 'Free, no card, and one reply from us to settle a time.'
  },

  footer: {
    cols: [
      { h4: 'Cyber security', links: [
        { href: '/cyber-security-course-for-teens-uk', label: 'Cyber security for UK teens' },
        { href: '/cyberfirst-girls-competition-preparation', label: 'TechFirst Girls Competition' },
        { href: '/picoctf-for-beginners', label: 'picoCTF for beginners' },
        { href: '/cybersecurity-classes-for-teens', label: 'Cyber security classes' }
      ] },
      { h4: 'Courses', links: [
        { href: '/courses/cybersecurity-course-for-teens-ethical-defensive', label: 'Cyber security for teens' },
        { href: '/courses/python-complete-masterclass-teens', label: 'Python for teens' },
        { href: '/courses/gcse-computer-science-course', label: 'GCSE Computer Science' },
        { href: '/coding-classes-in-united-kingdom', label: 'All UK pages' }
      ] }
    ],
    bottomRight: 'Count what the attacker must try'
  },

  personalityCss: `
.ag-root.ag-ccb .ag-hero h1 { letter-spacing: -0.011em; max-width: 27ch; }
.ag-root.ag-ccb .ag-capsule { border-left-width: 4px; padding-left: 1.25rem; }
.ag-root.ag-ccb .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ccb .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ccb .ag-table th:first-child { width: 22%; }
.ag-root.ag-ccb .ag-three h3 { letter-spacing: -0.006em; }
.ag-root.ag-ccb .ag-steps li { line-height: 1.6; }
.ag-root.ag-ccb .ag-slots { gap: 1.05rem; }
`,

  dossier: {
    curriculumAuthority: 'Status read raw on 31 October 2026 from the NCSC (cyberfirst/overview 301 to cyber-skills; cyberfirst/bursaries 404; Cyber Skills overview: CyberFirst since 2016, NCSC as Cyber Pathway lead for TechFirst, TechGrad University Scholarship from November 2026 for up to 1150 domestic students a year; Members: transition to TechFirst under DCMS, focus on Key Stage 5; News: CyberFirst annual and social value reports 2025 to 2026; Key stage 4 and 5 resources: Navigators 11 to 14, Defenders 14 to 15 via IBM SkillsBuild with its four topics, Futures 15 to 16 coming soon; Key stage 3 resources: CyberSprinters 7 to 11, knowledge nuggets) and GOV.UK (TechFirst: flagship programme, strands, updated 19 October 2026, CyberFirst International Pilots 7 May 2026; TechFirst for schools: regional partners, Bronze, Silver, Gold recognition, Ada Computer Science, TechFirst Girls Competition after CyberFirst Girls 2016 to 2025 with 2026 dates, UK Bebras 9 to 20 November 2026; TechFirst Undergraduate Scholarship: up to 4 years, eight-week placements, Home Student, 120 UCAS tariff points, September 2027, learning activities, technical aptitude assessment and interview, applications open in November, Semiconductor Pathway).',
    localProject: 'A cyber security reasoning lesson of our own on counting what an attacker has to try: 26^8 = 208,827,064,576 against 62^8 = 218,340,105,584,896 against 26^12 = 95,428,956,661,682,176, showing that four more lowercase letters (x456,976) beat a larger alphabet (about x1,046), with the caveat that real attackers try common passwords first; plus six warm-ups (binary 101101 = 45, Caesar CODE to FRGH, XOR, 256 addresses in a /24, ASCII 65, even parity) and an age-by-age route built only on official free options. Lesson family: counting what an attacker has to try.',
    requiredMentions: ['has now transitioned over to TechFirst', 'Returns "not found"', 'Registering your interest is not an application.', 'a technical aptitude assessment, and an interview', '218,340,105,584,896', '95,428,956,661,682,176', 'Sign up with IBM SkillsBuild', 'Ran 2016 to 2025; now the TechFirst Girls Competition', 'Encrypt CODE with a Caesar shift of 3.', 'Count what the attacker must try'],
    sources: [
      { claim: 'CyberFirst history since 2016, NCSC as TechFirst cyber lead, TechGrad scholarship launch.', url: 'https://www.ncsc.gov.uk/cyber-skills' },
      { claim: 'CyberFirst transition to TechFirst under DCMS and the NCSC focus on Key Stage 5.', url: 'https://www.ncsc.gov.uk/cyber-skills/members' },
      { claim: 'CyberFirst Navigators, Defenders and Futures courses.', url: 'https://www.ncsc.gov.uk/cyber-skills/key-stage-4-and-5-resources' },
      { claim: 'TechFirst programme strands and update history.', url: 'https://www.gov.uk/guidance/techfirst' },
      { claim: 'TechFirst for schools, girls competition history and 2026 dates, Bebras, Ada Computer Science.', url: 'https://www.gov.uk/guidance/techfirst-for-schools' },
      { claim: 'TechFirst Undergraduate Scholarship eligibility, benefits and application stages.', url: 'https://www.gov.uk/guidance/techfirst-undergraduate-scholarship' }
    ],
    rejectedClaims: [
      'A current CyberFirst bursary or CyberFirst Advanced course: not found on any official page on 31 October 2026; the page says so instead of describing the old schemes as live.',
      'Scholarship and bursary amounts: printed in pounds on official pages; not reproduced, and no currency is typed on the page.',
      'The content of the TechFirst technical aptitude assessment: unpublished; no imitation items, and our warm-ups are labelled ours.',
      'An earlier GOV.UK sentence quoted on a sibling page about CyberFirst bursary students becoming TechFirst scholars: not present on the page as read on 31 October 2026, so not repeated.',
      'NCSC activity titles that refer to crimes: not repeated, under the content rules.',
      'Any scholarship, prize or place promise: declined on the page.',
      'Any affiliation with the NCSC, GCHQ, DCMS, TechFirst, IBM or any delivery partner: none, stated on the page.'
    ]
  }
};
