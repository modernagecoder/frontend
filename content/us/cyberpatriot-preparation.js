'use strict';
// CyberPatriot preparation (ag- competition door; US cluster Phase 3, row 39).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Sources, read raw with curl on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/cyberpatriot-preparation/):
//  - uscyberpatriot.org (home): "the National Youth Cyber Education Program created by the Air & Space Forces Association";
//    the National Youth Cyber Defense Competition; reminders: Practice round October 7-20th, Roster Finalization October 21st.
//  - /competition-overview/: coach (one per team), "Each CyberPatriot team must consist of between two and six competitors",
//    "a maximum of five students are permitted to compete at any one time during a competition round", one substitution per
//    round; technical mentors and team assistants "(Minimum age: 18)" with background checks; Open, All Service and Middle
//    School divisions; two challenges in a four-hour period (Network Security Challenge on Windows and Linux; Cisco
//    Networking Challenge, quiz plus virtual networking exercise); "CyberPatriot is designed for any student, regardless of
//    prior cybersecurity knowledge."; online rounds from any location; National Finals in Bethesda, MD; team registration
//    June 2 to October 1, 2026; rounds one weekend a month October to January, any four-hour period Thursday to Sunday.
//  - /competition-schedule/: CyberPatriot 19 (2026-27) training schedule (Exhibition June 3 - August 24, 2026; Training Round
//    1 September 3 - October 5, 2026 with answer keys; Sneak Preview September 24, 2026; Practice Round October 7 - 20, 2026)
//    and competition schedule (Round 1 October 22 - 25, 2026; Round 2 and Middle School Introductory Round November 12 - 15,
//    2026; State Round December 10 - 13, 2026; Semifinals January 21 - 23, 2027; National Finals March 12-16, 2027);
//    competition windows by day in Eastern Time; "Scheduling conflicts are not considered emergencies".
//  - /challenges-and-scoring-values/: Round 1 Windows 11 100, Mint 21 100, quiz 10, Packet Tracer 20, Total Possible Points
//    230; Round 2 330; State Round tiers Platinum top 30%, Gold middle 40%, Silver remaining 30%; semifinal advancement.
//  - /competition-faq/: coach must be present; "There are no scheduled backup dates in CyberPatriot."; the 4-hour window
//    "begins the moment they open the first virtual image in VMware"; "no more than a single copy of the same virtual image
//    may be opened at the same time"; scores published 7-10 business days after a round.
//  - /join-the-competition/: teams for CP-19 created by October 1, 2026; "Competitors must be added to a roster no later than
//    October 21, 2026"; students do not create volunteer accounts; coaches add them to rosters.
//  - /technical-specifications/ and /training-materials/: 64-bit hosts, "8 GB of RAM", "40 GB of free disk space",
//    VMware Workstation Pro 26H1, Cisco Packet Tracer 9.0.0 for CP-19, Windows 10 with updates or Windows 11; past tasks incl.
//    "Answering forensics questions"; exhibition, training and practice rounds; Cisco NetAcad courses.
// Our own material, labelled on the page: the user-audit script and its sample accounts, the hardening checklist, the
// 12-week plan, and the time split of a four-hour round. Lesson family: least privilege (who should have access, and why).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const AUDIT = `# audit_users.py (ours): compare accounts on a practice machine
# with the users the scenario says are allowed
passwd = """root:x:0:0:root:/root:/bin/bash
ana:x:1000:1000:Ana:/home/ana:/bin/bash
ben:x:1001:1001:Ben:/home/ben:/bin/bash
guest2:x:1002:1002::/home/guest2:/bin/bash
toor:x:0:0::/root:/bin/bash"""

authorized = {"ana", "ben"}

for line in passwd.splitlines():
    name, _, uid, *rest = line.split(":")
    uid = int(uid)
    if uid == 0 and name != "root":
        print(f"{name}: a second UID 0 account, investigate")
    elif uid >= 1000 and name not in authorized:
        print(f"{name}: not on the authorized list")`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COMPETITION', blurb: 'CyberPatriot preparation from the official CyberPatriot 19 (2026-27) pages: teams, divisions, the round schedule, scoring values, technical setup and a defensive practice plan.' },
  slug: 'cyberpatriot-preparation',
  code: 'cp',
  accent: '#276B5F',
  accentRationale: 'CyberPatriot preparation: the allocated deep teal #276B5F, the colour of a secured network diagram, contrast 5.91, 5.55 and 5.08 on the three paper tints',
  pageType: 'market',
  market: US,
  routeLabel: 'CyberPatriot preparation',
  title: 'CyberPatriot Preparation: 2026-27 Schedule, Scoring, Setup',
  description: 'CyberPatriot preparation from the official CyberPatriot 19 pages: team rules, divisions, 2026-27 round dates, scoring values, computer setup and a defensive plan.',
  ogDescription: 'Teams of two to six, four-hour rounds securing Windows and Linux images plus a Cisco challenge. The CyberPatriot 19 season explained from the official pages, with a defensive practice plan.',
  twitterDescription: 'CyberPatriot 19 (2026-27) explained from the official pages, with a practice plan.',
  pageName: 'CyberPatriot Preparation',
  webPageDescription: 'A preparation guide for US middle and high school students, coaches and parents to CyberPatriot, built from the official CyberPatriot 19 pages, with a defensive script and plan of our own.',
  courseDescription: 'Live online defensive cybersecurity, Linux and Python classes for US teens preparing for CyberPatriot, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'CyberPatriot preparation',
  navLinks: [
    { href: '#teams', label: 'Teams' },
    { href: '#schedule', label: 'CP-19 schedule' },
    { href: '#scoring', label: 'Scoring' },
    { href: '#setup', label: 'Computer setup' },
    { href: '#practice', label: 'Practice' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Middle and high school &middot; Team cyber defense',
  h1: 'CyberPatriot preparation',
  lede: 'CyberPatriot is the Air &amp; Space Forces Association&rsquo;s youth cyber defense competition. Teams of middle and high school students get virtual Windows and Linux computers full of security problems and have four hours to find and fix as many as they can, plus a Cisco networking quiz and exercise. This guide is built from the official CyberPatriot 19 (2026-27) pages: who is on a team, the round dates, the published points, the computer you need, the penalties that catch new teams, and a defense-only practice plan with a small script we wrote.',
  secondaryCta: { href: '#plan', label: 'See the 12-week plan' },
  wa: 'Hello Modern Age Coders, my child in the US is on a CyberPatriot team and wants to prepare properly. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; defensive security, explained',
  spec: [
    ['What', 'Team cyber defense'],
    ['Run by', 'Air &amp; Space Forces Association'],
    ['Who', 'Middle and high school'],
    ['Team', 'Two to six, five at once'],
    ['Round', 'Four hours, online'],
    ['Season', 'October to March'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'CyberPatriot is a US team competition in which middle and high school students secure virtual Windows and Linux machines and complete a Cisco networking challenge in four-hour online rounds. Teams have one adult coach and two to six students, with five competing at a time. For CyberPatriot 19 (2026-27), Round 1 runs October 22 to 25, 2026, the State Round December 10 to 13, 2026, and the National Finals March 12 to 16, 2027.',

  picks: {
    eyebrow: 'Prepare with a teacher',
    h2: 'Three courses for a CyberPatriot competitor',
    lede: 'CyberPatriot rewards students who understand why a setting matters, not only where it is. These courses build that understanding, always from the defender&rsquo;s side.',
    items: [
      { course: 'picoctf-cyberpatriot-cybersecurity-competition-prep-for-teens', code: 'CP / 01', title: 'picoCTF and CyberPatriot prep', note: 'Ages 13 to 18. Competition skills, defensive and ethical.' },
      { course: 'cybersecurity-course-for-teens-ethical-defensive', code: 'CP / 02', title: 'Cybersecurity for teens', note: 'Ages 13 to 18. Accounts, passwords, updates, safe systems.' },
      { course: 'python-complete-masterclass-teens', code: 'CP / 03', title: 'Python for teens', note: 'Ages 13 to 18. Scripts that check a system for you.' }
    ]
  },

  sections: [
    {
      id: 'about', tint: 'tint', eyebrow: 'The program',
      h2: 'What CyberPatriot is',
      lede: 'One program, three divisions, and a competition built around securing computers rather than attacking them.',
      body: [
        { kind: 'table', caption: 'CyberPatriot at a glance, from the official home page and Competition Overview (read 17 October 2026)', head: ['Point', 'What the official pages say'], rows: [
          ['Organiser', 'The National Youth Cyber Education Program created by the Air &amp; Space Forces Association'],
          ['The contest', 'The National Youth Cyber Defense Competition, described as the nation&rsquo;s largest cyber defense competition'],
          ['The task', 'Find and fix security vulnerabilities in virtual operating systems; teams are scored on how secure they make them'],
          ['Who can start', '"CyberPatriot is designed for any student, regardless of prior cybersecurity knowledge."'],
          ['Where', 'Online from any location, from a classroom to home, except the in-person National Finals in Bethesda, MD'],
          ['Season name', 'CyberPatriot 19 (2026-27), often written CP-19']
        ] },
        { kind: 'table', mt: true, caption: 'The three CyberPatriot divisions', head: ['Division', 'Who competes'], rows: [
          ['Open', 'High school students from schools, scouting units, clubs, home school and STEM programs'],
          ['All Service', 'High school students in JROTC, Civil Air Patrol units and Naval Sea Cadet Corps units'],
          ['Middle School', 'Middle school students from schools, scouting units, clubs and STEM programs']
        ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.uscyberpatriot.org/" rel="noopener" target="_blank">uscyberpatriot.org</a> and its <a class="ag-inline-link" href="https://www.uscyberpatriot.org/competition-overview/" rel="noopener" target="_blank">Competition Overview</a>, read 17 October 2026. Modern Age Coders is not part of CyberPatriot or the Air &amp; Space Forces Association; we teach the underlying skills.' }
      ]
    },
    {
      id: 'teams', tint: 'deep', eyebrow: 'Who is on a team',
      h2: 'Coach, competitors, mentors: the CyberPatriot team rules',
      lede: 'A team is built around one adult coach. Students cannot register themselves.',
      body: [
        { kind: 'table', caption: 'Team roles, from the official Competition Overview and Join the Competition pages', head: ['Role', 'Rule'], rows: [
          ['Coach', 'An adult approved by a participating organization, such as a teacher, JROTC instructor, administrator or parent. "A team can only have one coach."'],
          ['Competitors', '"Each CyberPatriot team must consist of between two and six competitors" from the organization; five at most compete at once, with one substitution per round'],
          ['Technical mentor', 'An IT-experienced volunteer who must register and pass a background check (Minimum age: 18)'],
          ['Team assistant', 'A non-technical adult volunteer, also registered and background checked (Minimum age: 18)'],
          ['Student sign-up', 'Students do not create volunteer accounts; the coach adds them to the roster, then each completes a questionnaire'],
          ['Coaches&rsquo; teams', 'A coach can register up to five teams']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'If your child missed registration',
          left: [
            'For CyberPatriot 19, teams had to be created by October 1, 2026, and "Competitors must be added to a roster no later than October 21, 2026". After that, the season&rsquo;s rosters are set.',
            'A student who missed it can still prepare for the next season, CyberPatriot 20, and ask a teacher, JROTC instructor or club leader now about coaching a team when registration reopens.'
          ],
          rightH3: 'The coach is present every round',
          right: [
            'The FAQ is clear that coaches must be present to monitor students during a round and make sure the rules are followed. A mentor can stand in only through the official alternate coach request.',
            'Coaches also control the images and passwords, so practice outside the official rounds depends on what the coach makes available.'
          ] }
      ]
    },
    {
      id: 'schedule', tint: 'tint', eyebrow: 'The calendar',
      h2: 'CyberPatriot 19 (2026-27) schedule',
      lede: 'Unscored practice runs from summer into October, then one scored round a month. Dates below are from the official schedule; the program notes they may change.',
      body: [
        { kind: 'table', caption: 'CyberPatriot 19 training and competition rounds, 2026-27 season (official schedule, read 17 October 2026)', head: ['Round', 'Dates (CP-19)', 'Who and what'], rows: [
          ['Exhibition Round', 'June 3 to August 24, 2026', 'Practice and recruiting; scores do not count'],
          ['Training Round 1', 'September 3 to October 5, 2026', 'Basic images with answer keys in the ReadMe'],
          ['Practice Round', 'October 7 to 20, 2026', 'Teams must test at least one image to check access'],
          ['Round 1', 'October 22 to 25, 2026', 'Open and All Service teams; tests basic skills'],
          ['Round 2 and Middle School Introductory Round', 'November 12 to 15, 2026', 'High school round 2 sets tiers; first round for middle school teams'],
          ['State Round', 'December 10 to 13, 2026', 'All teams; high school teams start with a clean slate'],
          ['Semifinals', 'January 21 to 23, 2027', 'Qualifying teams only'],
          ['National Finals', 'March 12 to 16, 2027', 'In person in Bethesda, MD, for national finalist teams']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Choosing your four hours',
          left: [
            'Each competition weekend, a team picks one continuous four-hour block inside the published windows, in Eastern Time: Thursday 9:00 a.m. to 10:00 p.m., Friday 9:00 a.m. to 11:59 p.m., Saturday 8:00 a.m. to 11:59 p.m. and Sunday 10:00 a.m. to 8:00 p.m.',
            'For a team in California, our conversion: the Saturday window runs from 5:00 a.m. to 8:59 p.m. Pacific, so a 9:00 a.m. Pacific start is well inside it.'
          ],
          rightH3: 'No make-up days',
          right: [
            'The FAQ says "There are no scheduled backup dates in CyberPatriot." An emergency date exists only for genuine emergencies, and the schedule page adds that scheduling conflicts are not considered emergencies.',
            'Mark all the round weekends in the family calendar in September, before sports and travel fill them.'
          ] }
      ]
    },
    {
      id: 'round', tint: 'deep', eyebrow: 'Inside a round',
      h2: 'What happens in a four-hour CyberPatriot round',
      lede: 'Two challenges share one four-hour period. Understanding the split is half the preparation.',
      body: [
        { kind: 'table', caption: 'The two CyberPatriot challenges, from the official Competition Overview and Training Materials pages', head: ['Challenge', 'What teams do'], rows: [
          ['Network Security Challenge', 'Secure Windows and Linux virtual machine images; past tasks include hardening services, fixing vulnerabilities, removing malware and "Answering forensics questions"'],
          ['Cisco Networking Challenge', 'An online quiz and a Packet Tracer exercise on assigned Cisco Networking Academy training; past topics include subnetting and IP addressing']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Before the round.</b> Image download instructions reach approved coaches on the Monday; check each download&rsquo;s checksum and unzip it in advance.',
          '<b>Start.</b> On Thursday the StartEx email gives the image password. The four hours begin when the first image opens, so open nothing early.',
          '<b>Read before you change.</b> Go through everything the image gives you before touching a setting; training images, for example, carry a ReadMe file. Every fix should respect the scenario you are given.',
          '<b>Fix and check.</b> The Scoring Report on the image desktop shows points as fixes are recognised. Note every change, so a broken image can be rebuilt quickly.',
          '<b>Cisco tasks.</b> Someone on the team takes the networking quiz and the Packet Tracer exercise, which count separately.',
          '<b>Finish.</b> Stop within four hours, shut the image down properly and make sure every team member deletes the images afterwards.'
        ] },
        { kind: 'p', mt: true, html: 'Our suggested split for a five-person team (ours, not an official rule): two students per operating system image and one on the Cisco tasks, with the coach keeping time and the team swapping notes at the two-hour mark.' }
      ]
    },
    {
      id: 'scoring', tint: 'tint', eyebrow: 'Points',
      h2: 'CyberPatriot 19 scoring values by round',
      lede: 'The official Challenges and Scoring Values page lists the points available in each round. The values are subject to change.',
      body: [
        { kind: 'table', caption: 'Published points for the first three CP-19 rounds (official page, read 17 October 2026)', head: ['Round', 'Images', 'Cisco challenge', 'Total Possible Points (as published)'], rows: [
          ['Round 1, Open and All Service (October 22 to 25, 2026)', 'Windows 11 100; Mint 21 100', 'Quiz 10; Packet Tracer 20', '230'],
          ['Introductory Round, Middle School (November 12 to 15, 2026)', 'Windows 11 100; Debian 12 100', 'Quiz 10; Packet Tracer 20', '230'],
          ['Round 2, Open and All Service (November 12 to 15, 2026)', 'Windows 11 100; Server 2022 100; Debian 12 100', 'Quiz 10; Packet Tracer 20', '330']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Tiers after Round 2',
          left: [
            'High school results from Round 2 divide teams into tiers for the State Round: Platinum for the top 30% of teams, Gold for the middle 40% and Silver for the remaining 30%. Middle school teams are not tiered.',
            'For the Semifinals, the FAQ says the top 25% of Open Division teams in each tier advance, with wildcard places for unrepresented states, and the top 60% of Middle School teams advance on combined scores.'
          ],
          rightH3: 'What the numbers mean for practice',
          right: [
            'Our reading: in Round 1 the two images carry most of the points and the Cisco challenge the rest, so image hardening is where most practice time belongs. From the State Round, the high school Cisco section grows, and networking deserves more time.',
            'Scores are published 7 to 10 business days after a round ends, so a team learns its standing well after the weekend.'
          ] }
      ]
    },
    {
      id: 'penalties', tint: 'deep', eyebrow: 'Penalties',
      h2: 'Rules that cost new teams points',
      lede: 'Most lost points in a first season come from procedure, not from skill. These are the rules the FAQ spells out.',
      body: [
        { kind: 'table', caption: 'Common penalties and procedures, from the official Competition FAQ', head: ['Rule', 'What it means in practice'], rows: [
          ['Overtime penalty', 'The four-hour window "begins the moment they open the first virtual image in VMware"; opening an image early to test it starts the clock'],
          ['Multiple instance penalty', 'There must be "no more than a single copy of the same virtual image" open at once, even on different computers'],
          ['No cloud hosting', 'Images must not be run from vSphere or cloud hosting during rounds'],
          ['No sharing between teams', 'Teams from the same school cannot share information from the images or the Cisco challenge'],
          ['Restarting an image', 'A fresh copy starts at zero points, which is why notes of every change matter'],
          ['Score corrections', 'Only through the official form, by 11:59 p.m. Eastern on the last day of the round']
        ] },
        { kind: 'p', mt: true, html: 'The overtime rule is the one we drill first with new students. In a practice session we time four hours from the moment an image opens, so the habit of not peeking early is in place before Round 1.' }
      ]
    },
    {
      id: 'setup', tint: 'tint', eyebrow: 'The computer',
      h2: 'The computer you need for CyberPatriot 19',
      lede: 'The program keeps the requirements modest, but a few are firm. Check them in September, not on the Thursday of Round 1.',
      body: [
        { kind: 'table', caption: 'CP-19 technical requirements, from the official Technical Specifications page', head: ['Item', 'Requirement'], rows: [
          ['Computer', 'A 64-bit host computer; all teams are required to have one'],
          ['Processor', 'Intel 64-bit i3 from the Sandy Bridge generation or better, or AMD Bulldozer or better, with virtualization enabled in the BIOS'],
          ['Memory and disk', '8 GB of RAM and 40 GB of free disk space'],
          ['Operating system', '64-bit Windows 10 with security updates after October 14, 2025, or Windows 11'],
          ['Virtual machine software', 'VMware Workstation Pro 26H1, the standard for CP-19, a free download'],
          ['Other tools', 'WinMD5 to verify downloads and 7-Zip to unzip images; Cisco Packet Tracer 9.0.0'],
          ['Mac or Linux hosts', 'Allowed at the team&rsquo;s own risk; problems are not grounds for appeal']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why a Chromebook will not do',
          left: [
            'The images run inside VMware Workstation Pro on a 64-bit Windows host. A typical school Chromebook cannot run it, so a student practising at home needs a Windows laptop that meets the specification.',
            'The program recommends one host computer per image in a round; running two images on one machine makes the minimum specification inadequate.'
          ],
          rightH3: 'A September checklist (ours)',
          right: [
            'Confirm 64-bit Windows under Settings, System, About. Turn on virtualization in the BIOS. Install VMware, 7-Zip and WinMD5. Open a training image once and shut it down cleanly.',
            'Ask the school IT team to allow the sites on the official access list, such as uscyberpatriot.org and netacad.com, before the first round.'
          ] }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice, safely',
      h2: 'Practice images and a small defensive script',
      lede: 'Official practice images come only to registered coaches. We never distribute images or answer keys; we teach the thinking behind each fix.',
      body: [
        { kind: 'table', caption: 'Where official CyberPatriot practice comes from (Training Materials page)', head: ['Practice', 'What it is'], rows: [
          ['Exhibition Rounds', 'Unscored images for recruiting and training, in summer'],
          ['Training Round', 'Images with answer keys for guided training'],
          ['Practice Round', 'Unscored images just before the season, to check access'],
          ['Cisco Networking Academy', 'A content course for the quiz and Packet Tracer, plus free self-paced courses such as Linux Unhatched and Introduction to Cybersecurity']
        ] },
        { kind: 'code', mt: true, label: 'Python &middot; check accounts against the authorized list', lang: 'python', code: AUDIT, note: 'Output: guest2: not on the authorized list, then toor: a second UID 0 account, investigate. Our own sample lines in the format of a Linux /etc/passwd file. UID 0 means full administrator rights, so any account other than root holding it is a red flag. Run checks like this only on practice images or machines you are responsible for.' },
        { kind: 'two', mt: true,
          leftH3: 'The idea behind it: least privilege',
          left: [
            'A defender&rsquo;s first question is always who has access, and should they? The script automates the reading of a long account list; the decision still belongs to the student, checked against whatever the scenario says.',
            'Never delete an account just because a script flagged it. The scenario may require it, and removing an authorized user can cost points.'
          ],
          rightH3: 'A hardening checklist (ours)',
          right: [
            'Accounts and passwords, then updates, then the firewall, then services that should not be running, then software that should not be installed, and finally the forensics questions, which are worth reading first because fixes can destroy the evidence they ask about.',
            'Write every change in a shared team note with the time. It is the only way back from a frozen image.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'Twelve weeks',
      h2: 'A 12-week plan for a first CyberPatriot season',
      lede: 'Our plan for a new team member, about three hours a week including one class. It runs from late summer to the State Round, and repeats each season.',
      body: [
        { kind: 'table', caption: 'Twelve weeks to the State Round (ours; align the weeks with the current season&rsquo;s dates)', head: ['Weeks', 'Focus', 'Finished when'], rows: [
          ['1 to 2', 'Windows accounts, groups and password policy', 'Can set a password policy and audit users by hand'],
          ['3 to 4', 'Linux basics: users, sudo, packages, services', 'Can find and stop an unneeded service from the terminal'],
          ['5', 'Updates and firewalls on both systems', 'Both systems patched and firewalled on a practice machine'],
          ['6', 'Networking: IP addresses and subnets', 'Can work out a subnet&rsquo;s range by hand'],
          ['7', 'Packet Tracer basics', 'A small virtual network built and tested'],
          ['8', 'Forensics questions', 'Can answer file and log questions before fixing anything'],
          ['9', 'A full timed practice', 'Four hours timed from first image open, notes kept'],
          ['10 to 11', 'Weak spots from the practice', 'Each missed item explained and practised'],
          ['12', 'State Round readiness', 'Roles agreed, computers checked, calendar set']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Middle school', p: 'Windows first, with plenty of talking through why each setting protects people. Linux comes in slowly.' },
          { h3: 'First-year high school', p: 'Both operating systems and basic networking, with the overtime and instance rules drilled early.' },
          { h3: 'Returning competitors', p: 'Server images, deeper Linux, and the larger Cisco section of the later rounds.' }
        ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'From new recruit to steady team member',
    lede: 'Four stages we use to place a student on a CyberPatriot study plan.',
    table: { caption: 'CyberPatriot readiness stages (ours)', head: ['Stage', 'The student can'], rows: [
      ['1. Recruit', 'Explain what an operating system image is and follow the ReadMe'],
      ['2. Hardener', 'Fix accounts, passwords and updates on one system without help'],
      ['3. All-rounder', 'Work on Windows and Linux images and keep clean notes'],
      ['4. Lead', 'Plan the team&rsquo;s four hours and answer forensics questions first']
    ] },
    left: { h3: 'For parents', ps: [
      'CyberPatriot is defense from start to finish, which makes it one of the safest ways for a teen to learn security.',
      'The commitment is real: a four-hour block on round weekends from October to January, plus practice. Plan around it early.'
    ] },
    right: { h3: 'For students', ps: [
      'Read everything the image gives you before touching anything. A rushed fix can break something the scenario needed.',
      'Learn why each fix matters. The same settings protect your own laptop and your family&rsquo;s router.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for future cyber defenders',
    lede: 'Live online classes with a regular teacher, from first code in middle school to systems in high school.',
    bands: [
      { num: 'I', h3: 'Middle school', sub: 'First foundations', courses: [
        { code: 'CP / MID / 01', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'Ages 9 to 12, first scripts.' },
        { code: 'CP / MID / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for kids', blurb: 'Logic before systems.' },
        { code: 'CP / MID / 03', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Binary and subnets made friendly.' }
      ] },
      { num: 'II', h3: 'Systems', sub: 'High school', courses: [
        { code: 'CP / SYS / 01', slug: 'backend-coding-masterclass-for-teens', title: 'Backend for teens', blurb: 'Servers and how they run.' },
        { code: 'CP / SYS / 02', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'Memory and how software fails.' },
        { code: 'CP / SYS / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Structured, careful code.' }
      ] },
      { num: 'III', h3: 'Going further', sub: 'Strong students', courses: [
        { code: 'CP / ADV / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack web', blurb: 'Build, then defend, a web app.' },
        { code: 'CP / ADV / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data science for teens', blurb: 'Logs and data at scale.' },
        { code: 'CP / ADV / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and ML for teens', blurb: 'Where security meets AI.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Lesson times',
    h2: 'Practice that fits around round weekends',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'An evening session after school, any US time zone.' },
      { time: 'Weekends', l: 'Timed practice blocks between competition weekends.' },
      { time: '1-on-1', l: 'Fill one student&rsquo;s gaps before the State Round.' }
    ],
    cells: [
      { h3: 'Defense only', p: 'Hardening, auditing, patching.' },
      { h3: 'Windows and Linux', p: 'Both systems, side by side.' },
      { h3: 'Networking', p: 'Subnets and Packet Tracer basics.' },
      { h3: 'Timed drills', p: 'The four-hour clock, rehearsed.' },
      { h3: 'No image sharing', p: 'We teach skills, never answer keys.' },
      { h3: 'Batch or solo', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Projects from our learners',
  projectsLede: 'Defenders who can build understand systems better. Here are a few student builds, with more on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Reviews parents posted on Google, untouched.',

  fees: {
    h2: 'Fees',
    lede: 'CyberPatriot sets its own team fees, which the coach handles with the program. Our classes are a separate monthly charge in US dollars, so a student can train through the season and pause when it ends.',
    free: ['A free first lesson', 'A quick skills check', 'No card details'],
    group: ['Fifteen to twenty learners', 'One regular teacher', 'Batch times you choose', 'Monthly'],
    one: ['A teacher for one student', 'Built around the rounds', 'Weak spots first']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'CyberPatriot: common questions',
    items: [
      { q: 'What is CyberPatriot?', a: 'The National Youth Cyber Education Program created by the Air and Space Forces Association. Its core is the National Youth Cyber Defense Competition, where student teams secure virtual computers.' },
      { q: 'Who can compete in CyberPatriot?', a: 'High school students in the Open or All Service Divisions and middle school students in the Middle School Division, on a team from a participating school or approved youth organization.' },
      { q: 'How big is a CyberPatriot team?', a: 'Two to six competitors with one adult coach. Five students at most compete at one time in a round, with one substitution allowed each round.' },
      { q: 'Can my child sign up alone?', a: 'No. Students do not create accounts; a coach registers the team and adds competitors to the roster. For CyberPatriot 19, rosters had to be complete by October 21, 2026.' },
      { q: 'When are the CyberPatriot 19 rounds?', a: 'Round 1 is October 22 to 25, 2026, Round 2 and the Middle School Introductory Round November 12 to 15, the State Round December 10 to 13, the Semifinals January 21 to 23, 2027, and the National Finals March 12 to 16, 2027.' },
      { q: 'How long is a round?', a: 'Each team picks one continuous four-hour block in the competition weekend window, and the clock starts when the first image is opened.' },
      { q: 'What computer does a team need?', a: 'A 64-bit host with at least 8 GB of RAM, 40 GB of free disk space and virtualization enabled, running 64-bit Windows 10 with recent updates or Windows 11 and VMware Workstation Pro.' },
      { q: 'Are there practice images?', a: 'Yes, through registered coaches: summer exhibition rounds, a training round with answer keys, and a practice round in October. We do not share images or answer keys.' },
      { q: 'Does my teen need cybersecurity experience first?', a: 'No. The official overview says CyberPatriot is designed for any student, regardless of prior cybersecurity knowledge, and training materials come through the coach and Cisco Networking Academy.' },
      { q: 'When are your classes?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How does Modern Age Coders help a CyberPatriot student?', a: 'We teach the defensive skills behind the rounds, from Windows and Linux hardening to networking and forensics questions, and rehearse the four-hour format. We never help during a round.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US students who like to build, defend and compete.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'All our pages for US families.' },
      { href: '/computer-science-extracurriculars', label: 'CS extracurriculars', p: 'How a cyber team fits in.' },
      { href: '/hackathons-for-high-school-students', label: 'Hackathons for high schoolers', p: 'Building against the clock.' },
      { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles', p: 'Networks and the internet, for credit.' },
      { href: '/coding-for-14-year-olds', label: 'Coding for 14-year-olds', p: 'A good age to start CyberPatriot.' },
      { href: '/student-labs', label: 'Student labs', p: 'What our learners have built.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us the division and the next round date. The teacher checks Windows and Linux basics first, then sets a plan that fits the season calendar.',
    readFirst: 'To see our lesson style before booking, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> walks through it, and the <a class="ag-inline-link" href="/courses">course list</a> carries every syllabus.',
    note: 'Classes are live online from our teachers in India, scheduled for US time zones. WhatsApp is the quickest way to reach us.',
    formNote: 'Your first lesson costs nothing. No card needed.'
  },

  footer: {
    cols: [
      { h4: 'Compete and build', links: [
        { href: '/hackathons-for-high-school-students', label: 'Hackathons for high schoolers' },
        { href: '/usaco-preparation-online-coaching', label: 'USACO coaching' },
        { href: '/computer-science-extracurriculars', label: 'CS extracurriculars' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/ap-computer-science-principles-online-coaching', label: 'AP CS Principles' },
        { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' },
        { href: '/coding-for-14-year-olds', label: 'Coding for 14-year-olds' }
      ] }
    ],
    bottomRight: 'Who should have access?'
  },

  personalityCss: `
.ag-root.ag-cp .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-cp .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-cp .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-cp .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-cp .ag-steps { gap: 0.85rem; }
.ag-root.ag-cp .ag-slots { gap: 1.15rem; }
`,

  dossier: {
    curriculumAuthority: 'CyberPatriot, official pages for CyberPatriot 19 (2026-27), read raw on 17 October 2026: Air & Space Forces Association program; three divisions; coach, two to six competitors with five at once, mentors and assistants aged 18 with background checks; team creation by October 1 and rosters by October 21, 2026; training and competition schedule through the National Finals March 12-16, 2027 in Bethesda, MD; competition windows; two challenges in four hours; scoring values (230, 230, 330) and tiers; FAQ penalties and no backup dates; technical specifications (64-bit, 8 GB RAM, 40 GB disk, VMware Workstation Pro 26H1, Packet Tracer 9.0.0); training materials.',
    localProject: 'Our user-audit script on sample /etc/passwd lines (flags guest2 and a second UID 0 account, toor), our hardening order, our team split for a four-hour round, our Pacific conversion of the Saturday window, and our 12-week plan. Lesson family: least privilege.',
    requiredMentions: ['Air &amp; Space Forces Association', 'CyberPatriot 19 (2026-27)', 'Each CyberPatriot team must consist of between two and six competitors', 'Competitors must be added to a roster no later than October 21, 2026', 'Round 1 is October 22 to 25, 2026', 'December 10 to 13, 2026', 'In person in Bethesda, MD, for national finalist teams', 'There are no scheduled backup dates in CyberPatriot.', 'begins the moment they open the first virtual image in VMware', '8 GB of RAM and 40 GB of free disk space', 'toor: a second UID 0 account, investigate', 'UID 0 means full administrator rights'],
    sources: [
      { claim: 'Program, organiser, competition description, season reminders.', url: 'https://www.uscyberpatriot.org/' },
      { claim: 'Team roles, divisions, challenges, registration window, Finals location.', url: 'https://www.uscyberpatriot.org/competition-overview/' },
      { claim: 'CP-19 training and competition schedule and windows.', url: 'https://www.uscyberpatriot.org/competition-schedule/' },
      { claim: 'Scoring values by round, tiers, semifinal advancement.', url: 'https://www.uscyberpatriot.org/challenges-and-scoring-values/' },
      { claim: 'Coach presence, penalties, backup dates, score publication.', url: 'https://www.uscyberpatriot.org/competition-faq/' },
      { claim: 'Registration deadlines and how students join.', url: 'https://www.uscyberpatriot.org/join-the-competition/' },
      { claim: 'Hardware and software requirements.', url: 'https://www.uscyberpatriot.org/technical-specifications/' },
      { claim: 'Training rounds, past task types, Cisco courses.', url: 'https://www.uscyberpatriot.org/training-materials/' }
    ],
    rejectedClaims: [
      'Team fees and fee waiver rules: published, not printed because US pages carry no typed dollar figures; the page says the program sets its own fees.',
      'The end date of Training Round 2: the schedule page prints "Oct 30, 2026 - Jan 19, 2026" while the scoring page says January 1, 2027, so no end date is printed.',
      'Any answer keys, image contents or round solutions: refused; we teach skills only.',
      'That our classes get a team to the Semifinals or National Finals: refused; advancement depends on scores in each round.',
      'Any affiliation with CyberPatriot or the Air & Space Forces Association: none, and the page says so.'
    ]
  }
};
