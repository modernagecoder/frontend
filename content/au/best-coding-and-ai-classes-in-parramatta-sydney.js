'use strict';
// Parramatta, Sydney (cg- district page, Australia cluster Phase 8, row 203). Keyword slug in the rotation
// (best-coding-and-ai-classes-in-*), council-area page under Sydney and New South Wales.
// Spine: does the average of a few random schools' founding years behave like the average of the whole set?
// Data: NSW Department of Education, "Master dataset: NSW government school locations and student enrolment
// numbers" (data.nsw.gov.au, Creative Commons Attribution), CSV read 10 October 2026, Date_extracted 2026-10-02.
// Rows with LGA "Parramatta": 49 (Primary 33, Secondary 10, Schools for Specific Purposes 5, Other 1). Year of
// Date_1st_teacher: mean 1952.94, population SD 37.97, median 1958, skewness -0.531, earliest 1852 (Parramatta
// North Public School), latest 2025 (Wentworth Point High School); 24 of 49 first teachers fall in 1950 to 1974.
// Our simulation (scratchpad au/b1/prmt_clt.py, seed 2026, 20,000 samples with replacement per size): SD of the
// sample mean 38.08 (n=1), 19.02 (n=4), 12.65 (n=9), 9.52 (n=16), 7.61 (n=25) against 37.97/sqrt(n) = 18.99,
// 12.66, 9.49, 7.59; skewness of the means -0.538, -0.249, -0.215, -0.147, -0.110; share within one SD 71.4%,
// 68.7%, 68.4%, 68.2%, 68.4%; within two SD 95.7%, 95.3%, 95.6%, 95.3%, 95.5%.
// Lesson family: central limit theorem (sampling distribution of the mean); screened 0 hits 10 October 2026.
// Place facts: ABS Census 2021 QuickStats, Parramatta LGA (LGA16260); Transport for NSW monthly station usage
// (entry_exit.csv, CC BY): Parramatta Station, Train, Entry, August 2026: 1,058,394 (fourth of the station rows).
// Excluded: income, rent, mortgage, ancestry, birthplace, language, religion, health, and the dataset's
// enrolment, ICSEA, Indigenous and LBOTE columns.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'PARRAMATTA',
    label: 'Parramatta, Sydney',
    blurb: 'Parramatta learners, and a project that checks the central limit theorem on the founding years of 49 public schools.'
  },
  market: {
    name: 'Australia',
    iso: 'AU',
    dial: '+61',
    lang: 'en-AU',
    locale: 'en_AU',
    geoRegion: 'AU',
    brandTag: 'AU',
    phoneLabel: 'Australian mobile number',
    phonePlaceholder: '491 570 156',
    gradeLabel: 'Year level or age',
    minDigits: 9,
    stripTrunk: true
  },
  slug: 'best-coding-and-ai-classes-in-parramatta-sydney',
  code: 'prmt',
  accent: '#983630',
  accentRationale: 'Parramatta: a sandstone brick red (hue 3), chosen by hand at least 10 RGB units from every accent in content, the shared stylesheets and the claims log, 7.2:1 on white and 5.9:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Parramatta',
    eyebrow: 'Parramatta, Sydney, New South Wales',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Sydney' },
      { type: 'AdministrativeArea', name: 'New South Wales' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-new-south-wales', name: 'New South Wales' },
    { slug: 'best-coding-classes-in-sydney', name: 'Sydney' }
  ],
  nav: [
    { label: 'Sydney', href: '/best-coding-classes-in-sydney' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Parramatta, Sydney',
  title: 'Best Coding and AI Classes in Parramatta, Sydney | Live Online',
  description: 'Live online coding, AI and Python classes for Parramatta children, teens and adults, with a real teacher, in small groups or one to one. The first lesson is free.',
  ogDescription: 'Coding and AI classes for Parramatta, with a project that tests the central limit theorem on the founding years of 49 public schools in the council area.',
  twitterDescription: 'Parramatta coding, AI and Python classes, live online for ages 6 to 67. First lesson free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '10 October 2026',
  courseSchema: {
    name: 'Live Online Coding and AI Classes for Parramatta',
    description: 'Level-matched online coding, Python, statistics in code and AI for children, teenagers and adults in the Parramatta council area, taught live in English.'
  },
  h1: 'Coding and AI classes in Parramatta',
  capsuleQ: 'Where can Parramatta learners find the best coding and AI classes?',
  capsule: 'In live online lessons where a teacher builds real programs with each learner, from Scratch for children to Python, statistics and AI for teenagers and adults. The 2021 Census counted 256,729 people in the Parramatta council area, with a median age of 35, four years younger than New South Wales. Classes run over video, one to one or in a small group at the same level, and the first lesson is free.',
  lead: 'Pick four public schools in Parramatta at random and average the years their first teachers arrived. Do it again, and again, twenty thousand times. The single years are lopsided: two schools go back to the 1850s and 1870s, half the list opened between 1950 and 1974, and the newest high school opened in 2025. Yet the averages of four already pile up in a near-symmetric hump, and the averages of twenty-five are tighter still, spread almost exactly as a short formula predicts. Our Parramatta project shows the central limit theorem working on local data, and why it matters whenever a computer reports an average.',
  wa: 'Hello Modern Age Coders, we would like to book a free coding or AI lesson for a learner in Parramatta.',
  picks: {
    eyebrow: 'Course picks for Parramatta',
    h2: 'Where a Parramatta learner might begin',
    intro: 'Every course below links to the statistics project on this page. The free opening lesson settles which one fits, without any card details.',
    items: [
      {
        course: 'scratch-programming-complete-course',
        band: 'Ages 6 to 11',
        note: 'Games and animations in blocks, including spinners and dice that show how averages settle down.'
      },
      {
        course: 'data-science-course-for-teens-python-data',
        band: 'Ages 13 to 17',
        note: 'Python with real tables: sampling, averages, spread and charts built from open data.'
      },
      {
        course: 'ai-ml-masterclass-teens',
        band: 'Ages 14 to 18',
        note: 'Machine learning for teenagers, where every accuracy figure is itself an average of samples.'
      },
      {
        course: 'data-science-complete-masterclass-college',
        band: 'University and adult',
        note: 'Statistics in Python for work: estimates, uncertainty and honest reporting.'
      }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Parramatta in the Census',
      h2: 'A young, apartment-heavy council area at the centre of Sydney',
      intro: 'The bureau\'s 2021 QuickStats for the City of Parramatta council area, compared with the whole of New South Wales and with Australia.',
      body: [
        {
          kind: 'table',
          caption: 'What QuickStats records for the Parramatta local government area in 2021',
          head: ['Measure', 'Value'],
          rows: [
            ['Residents', '256,729'],
            ['Families', '69,127'],
            ['Private dwellings', '106,562'],
            ['Average people per household', '2.6']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Parramatta beside the state and the nation',
          head: ['Indicator', 'Parramatta', 'State', 'Nation'],
          rows: [
            ['Median age in years', '35', '39', '38'],
            ['Flats or apartments, share of occupied homes', '47.3% (43,561 homes)', '21.7%', '14.2%'],
            ['Separate houses, share of occupied homes', '38.9% (35,872 homes)', '65.6%', '72.3%'],
            ['Bachelor degree or higher, residents 15 and over', '44.2% (92,832 people)', '27.8%', '26.3%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'More flats than houses',
              p: 'Almost half of Parramatta\'s occupied homes are flats or apartments, more than double the share for New South Wales as a whole.'
            },
            {
              h3: 'A professional workforce',
              p: 'Professionals made up 35.0% of employed Parramatta residents in 2021, or 43,035 people, well above the state figure of 25.8%.'
            },
            { h3: 'Young adults', p: 'The Census counted 16,999 people aged 20 to 24, 6.6% of residents, and 13,966 aged 10 to 14.' }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau perturbs every cell slightly to protect privacy, which means rows seldom sum to the printed totals, so each figure here is printed exactly as released, and no total on this page was made by adding rows up ourselves.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Do random averages of Parramatta school years behave as theory says?',
      intro: 'The NSW Department of Education publishes the date each government school recorded its first teacher. We took the 49 schools in the Parramatta council area and sampled them twenty thousand times at each size.',
      body: [
        {
          kind: 'table',
          caption: 'The 49 founding years as a whole (our calculation from the department\'s file)',
          head: ['Measure', 'Value'],
          rows: [
            ['Earliest first teacher', '1852, Parramatta North Public School'],
            ['Latest first teacher', '2025, Wentworth Point High School'],
            ['Mean year', '1952.94'],
            ['Median year', '1958'],
            ['Spread (standard deviation)', '37.97 years'],
            ['Skewness', '-0.531, a long tail of early schools'],
            ['First teachers between 1950 and 1974', '24 of 49']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Spread of 20,000 sample averages at each sample size (our simulation, seed 2026)',
          head: ['Schools per sample', 'Spread of the averages', 'Theory: 37.97 divided by the square root of n', 'Skewness of the averages'],
          rows: [
            ['1', '38.08 years', '37.97', '-0.538'],
            ['4', '19.02 years', '18.99', '-0.249'],
            ['9', '12.65 years', '12.66', '-0.215'],
            ['16', '9.52 years', '9.49', '-0.147'],
            ['25', '7.61 years', '7.59', '-0.110']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: '1. Sample',
              p: 'Python\'s random.choices draws n founding years with replacement, and statistics.mean averages them. One line, repeated twenty thousand times for each size.'
            },
            {
              h3: '2. Measure the spread',
              p: 'The averages bunch together as n grows, and the measured spread lands within a fraction of a year of 37.97 divided by the square root of n every time.'
            },
            {
              h3: '3. Watch the shape',
              p: 'The lopsided skew of -0.53 in the raw years shrinks to -0.11 by samples of 25, and about 68% of averages sit within one spread of the true mean, as a bell curve would put them.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'The theorem, in one Parramatta sentence',
          p: 'However uneven the original numbers, the average of many independent draws follows a bell curve centred on the true mean, with a spread that shrinks with the square root of the sample size. Parramatta\'s school years are uneven, with schools from 1852, a crowd in the 1950s and 1960s and new ones still opening, and the theorem still holds once the samples are large enough.'
        },
        {
          kind: 'p',
          text: 'Every figure in this section is our own calculation from the department\'s published dates; the department has nothing to do with the simulation. Nothing here describes any school\'s quality, enrolment or results. Samples are drawn with replacement, so a school can appear twice in one sample, which is exactly the condition the theorem assumes.'
        }
      ]
    },
    {
      id: 'pipeline',
      tint: 'tint',
      eyebrow: 'Where the theorem matters',
      h2: 'Questions a learner can ask next with the same code',
      intro: 'Once the sampling loop works, small changes to it answer questions that matter well beyond Parramatta.',
      body: [
        {
          kind: 'table',
          caption: 'Follow-on experiments on the Parramatta schools file',
          head: ['Question', 'Change to the code', 'What it teaches'],
          rows: [
            [
              'What if we sample without replacement?',
              'Use random.sample instead of random.choices',
              'The finite population correction'
            ],
            ['How small can a sample be?', 'Plot the averages for n from 1 to 10', 'When the bell shape is a fair guess'],
            [
              'Does the median behave the same way?',
              'Swap statistics.mean for statistics.median',
              'Not every statistic settles as neatly'
            ],
            [
              'How sure are we of the mean year?',
              'Build a range of plus or minus two spreads',
              'Where confidence statements come from'
            ]
          ]
        },
        {
          kind: 'p',
          text: 'The same idea sits under any number reported with a margin: a poll, a test score average, a click rate on a website. Learners who have watched it happen on 49 local schools read those margins with an understanding of where they come from, rather than taking them on trust.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Teenagers', p: 'Write the sampling loop by hand, chart the averages, and compare the measured spreads with the square-root rule.' },
            { h3: 'University students', p: 'Bootstrap resampling, standard errors and the conditions under which the theorem fails.' },
            { h3: 'Adults', p: 'Reading dashboards and survey results at work, knowing how much a small sample can wobble.' }
          ]
        },
        {
          kind: 'p',
          text: 'The education department, the City of Parramatta, Transport for NSW and the statistics bureau release these files openly and have no link with us; every sample, spread and skewness value above came out of our own Python.'
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Parramatta',
      h2: 'Schools from 1852 to 2025, and one of Sydney\'s busiest stations',
      intro: 'More detail from the same open files and the state\'s own calendar.',
      body: [
        {
          kind: 'grid3',
          cells: [
            {
              h3: 'Old and new together',
              p: 'Parramatta North Public School records its first teacher in 1852 and Parramatta Public School in 1873, while Bayanami Public School (2019), Ngarala Public School (2023) and Wentworth Point High School (2025) are the newest schools in the file for this council area.'
            },
            {
              h3: 'A busy interchange',
              p: 'Transport for NSW counted 1,058,394 Opal entries at Parramatta Station in August 2026, the fourth highest entry count among all the stations in its monthly file.'
            },
            {
              h3: 'Terms in 2027',
              p: 'Students in the NSW Eastern division return for Term 1 on 3 February 2027, a Wednesday, and break up after Term 4 on 20 December 2027.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'A second exercise in the same file',
          p: 'The department stores each first-teacher date as text such as 1852-01-01. Turning those strings into dates, then asking how many schools opened in each decade, is a short task that practises parsing and counting before any statistics begin.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From rolling dice in Scratch to sampling theory in Python',
    intro: 'The ages are a guide only; the free trial lesson sets the actual starting point.',
    cols: [
      {
        band: 'Ages 6 to 11',
        h3: 'Chance in blocks',
        p: 'Scratch dice, spinners and counters that show averages settling as the rolls pile up.',
        courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids']
      },
      {
        band: 'Ages 12 to 15',
        h3: 'First Python data',
        p: 'Reading a real table, finding means and medians, and drawing the first charts.',
        courses: ['python-complete-masterclass-teens', 'maths-through-coding']
      },
      {
        band: 'Ages 15 to 18',
        h3: 'Sampling and models',
        p: 'Simulations, spreads and machine learning evaluated on held-out samples.',
        courses: ['data-science-course-for-teens-python-data', 'ai-ml-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Statistics that hold up',
        p: 'Estimation, resampling and uncertainty in work data, reported honestly.',
        courses: ['data-science-complete-masterclass-college', 'data-analysis-mastery-course-college']
      }
    ]
  },
  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will quote an average in seconds. Why should a Parramatta learner simulate one?',
    intro: 'Because knowing how far an average can wobble is the difference between reading a result and believing it.',
    p1: 'When an AI system reports that a model is 87% accurate, that figure is an average over a sample of test cases, and the central limit theorem decides how much it could change on another sample. Ask an assistant for the accuracy and it will give you the number; it will seldom volunteer that a test set of 25 examples leaves a much wider margin than one of 2,500.',
    p2: 'A learner who has watched 20,000 averages of Parramatta school years narrow by the square root of the sample size carries that instinct into every AI result they meet. They ask how many examples a claim rests on, whether the samples were independent, and how wide the honest range around the headline figure would be.',
    closer: 'In 2026 averages are free to compute and easy to misread, and a Parramatta learner who has seen one settle on real data is the one who asks how sure it really is.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'From the oldest school to the newest, one live class',
    intro: 'The 49 schools in our project run from Parramatta North Public School, open since 1852, to Wentworth Point High School, open since 2025, and an online lesson reaches all of their neighbourhoods equally.',
    cells: [
      {
        h3: 'No commute',
        p: 'Two learners from opposite ends of the council area share a lesson without crossing the city, so the hour goes on coding rather than travel.'
      },
      {
        h3: 'NSW stages, plain English',
        p: 'Lessons follow the NSW stages from primary through Stage 6, pause in the state school holidays, and can connect projects to school computing and maths.'
      },
      {
        h3: 'A genuine trial',
        p: 'The free first lesson is a normal class. At the end the teacher suggests a level, a course and a time, and nothing is paid on the day.'
      },
      {
        h3: 'Groups by ability',
        p: 'Classes of five to ten, sorted by how far each learner has come rather than by birthday, with classmates from Parramatta and elsewhere.'
      },
      { h3: 'Two lessons a week', p: 'Usually two lessons a week at a fixed hour, around eight a month, with holiday breaks arranged in advance.' },
      {
        h3: 'Teachers in India',
        p: 'A 6pm Parramatta lesson in summer begins at 12:30pm India time; in winter, when Sydney leaves daylight saving, the same lesson begins at 1:30pm there.'
      }
    ],
    spec: {
      title: 'Sydney clocks and India time',
      p: 'Sydney moves to daylight saving on Sunday 4 October 2026 and back on Sunday 4 April 2027. India keeps a single time zone all year, so the gap to our teachers changes by an hour twice a year, and every lesson time we quote is Sydney time.'
    }
  },
  fees: {
    h2: 'What lessons cost for Parramatta learners',
    intro: 'Three plain figures, with nothing held back.',
    first: 'One full lesson free, ending with a recommended level, course and time.',
    group: 'A month of lessons, normally eight, shared with five to ten learners at one level.',
    private: 'About eight lessons a month on the same rhythm, one teacher and one learner.',
    closer: 'Families outside India are invoiced in US dollars, so there is one price for the whole of Parramatta and no local price list. Payment starts only once the trial has settled a course and a slot; breaks, missed lessons and changing format are explained on the pricing page.'
  },
  reviewsH2: 'Reviews from families, on Google',
  book: {
    h2: 'Share an age and an interest',
    intro: 'That is enough for a teacher to plan the first lesson. A Year 6 student might begin with a dice game in Scratch; an adult might go straight to the sampling project.',
    success: 'Thank you. We will be in touch soon about a Parramatta class.'
  },
  faq: {
    h2: 'Parramatta coding and AI class questions',
    intro: 'What Parramatta families and adult learners usually ask first.',
    items: [
      {
        q: 'How many people live in the Parramatta council area?',
        a: '256,729 at the 2021 Census, according to the bureau\'s QuickStats for the Parramatta local government area, with a median age of 35.'
      },
      {
        q: 'What is the central limit theorem?',
        a: 'It says that the average of many independent random draws follows an approximately bell-shaped curve centred on the true mean, whatever the shape of the original numbers, with a spread that shrinks with the square root of the number of draws.'
      },
      {
        q: 'What is the Parramatta schools project?',
        a: 'Learners take the founding years of the 49 government schools in the Parramatta council area, draw 20,000 random samples at each size in Python, and check that the spread of the averages matches 37.97 divided by the square root of the sample size.'
      },
      {
        q: 'Is the project a ranking of Parramatta schools?',
        a: 'Not at all. Only the published first-teacher dates go into it, and the page says nothing about how any school performs, how big it is or which streets it serves.'
      },
      {
        q: 'Can students get help with HSC maths or computing?',
        a: 'Yes. Senior students taking maths or computing for the HSC are taught against the NSW syllabus and its timeline. Anything a school assesses has to be written by the student; our part is explaining methods, never producing the work.'
      },
      {
        q: 'When do lessons run for Parramatta learners?',
        a: 'Families usually pick an after-school or weekend time at the trial, always stated in Sydney time. Our teachers\' clocks in India run 4 hours 30 minutes behind Sydney in winter and 5 hours 30 minutes behind once daylight saving begins.'
      },
      {
        q: 'Can young children join?',
        a: 'Yes, from age six. Younger learners start with Scratch blocks, games and drawings, and the statistics project on this page is aimed at older students.'
      },
      {
        q: 'Do you have a centre in Parramatta?',
        a: 'No, and we do not claim one. Every lesson is live online and we have no premises in Australia. A learner needs a laptop or desktop, sound and a steady connection; the phone number shown is Indian.',
        boiler: true
      },
      {
        q: 'How much are coding classes for Parramatta learners?',
        a: 'The first lesson is free. After that a group place costs USD 100 a month for two live lessons a week, around eight a month, with five to ten learners, or USD 150 a month for the same pattern one to one. The course, format and time are agreed before anything is paid.',
        boiler: true
      },
      {
        q: 'How large are the groups?',
        a: 'Five to ten learners, grouped by level, pace and goal rather than age or suburb. If no group suits the time a learner needs, one-to-one lessons are offered.',
        boiler: true
      }
    ]
  },
  next: {
    eyebrow: 'Explore Sydney and NSW',
    h2: 'More for Parramatta learners',
    html: 'For the whole city see <a class="cg-inline-link" href="/best-coding-classes-in-sydney">coding classes in Sydney</a>, and for younger children <a class="cg-inline-link" href="/coding-classes-for-kids-sydney">coding classes for kids in Sydney</a>. Senior students can turn to <a class="cg-inline-link" href="/hsc-maths-advanced-tutoring">HSC Mathematics Advanced tutoring</a>, and the <a class="cg-inline-link" href="/coding-and-ai-classes-in-new-south-wales">New South Wales page</a> covers the rest of the state.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Parramatta and Sydney',
  footerPlaces: [
    { href: '/best-coding-classes-in-sydney', label: 'Sydney' },
    { href: '/vibe-coding-and-ai-agents-classes-in-blacktown-sydney', label: 'Blacktown' },
    { href: '/best-coding-and-ai-classes-in-the-hills-shire-sydney', label: 'The Hills Shire' },
    { href: '/coding-and-ai-classes-in-new-south-wales', label: 'New South Wales' }
  ],
  personalityCss: `
.cg-root.cg-prmt .cg-hero-grid { align-items: center; gap: clamp(1rem, 3vw, 2.4rem); }
.cg-root.cg-prmt .cg-hero h1 { font-weight: 760; letter-spacing: -0.02em; line-height: 1.07; }
.cg-root.cg-prmt .cg-capsule { border-left: 4px solid var(--cg-accent); padding: 0.45rem 0 0.45rem 1rem; }
.cg-root.cg-prmt .cg-eyebrow { letter-spacing: 0.12em; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; }
.cg-root.cg-prmt .cg-section-head h2 { max-width: 31ch; letter-spacing: -0.01em; }
.cg-root.cg-prmt .cg-grid-3 { gap: clamp(1rem, 2.2vw, 1.8rem); }
.cg-root.cg-prmt .cg-table caption { font-weight: 700; text-align: left; }
.cg-root.cg-prmt .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-prmt .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 0.8rem; }
.cg-root.cg-prmt .cg-callout { border-left-width: 5px; }
`,
  dossier: {
    curriculumAuthority: 'Parramatta, ABS Census 2021 QuickStats, Parramatta local government area LGA16260 (read 10 October 2026): 256,729 people; median age 35 (New South Wales 39, Australia 38); 69,127 families; 106,562 private dwellings; average 2.6 people per household; dwelling structure, occupied private dwellings: separate house 35,872 (38.9 percent; NSW 65.6; Australia 72.3), flat or apartment 43,561 (47.3 percent; NSW 21.7; Australia 14.2); occupation: Professionals 43,035 (35.0 percent; NSW 25.8; Australia 24.0); education, people aged 15 and over: Bachelor Degree level and above 92,832 (44.2 percent; NSW 27.8; Australia 26.3); age 20 to 24 16,999 (6.6 percent); age 10 to 14 13,966 (5.4 percent). NSW Department of Education 2027 term dates, Eastern division: Term 1 Wednesday 3 February to Friday 9 April; Term 4 Tuesday 12 October to Monday 20 December. IANA tz Australia/Sydney: daylight saving from Sunday 4 October 2026 to Sunday 4 April 2027. Transport for NSW monthly station usage (entry_exit.csv, CC BY): Parramatta Station, Train, Entry, August 2026, 1,058,394.',
    localProject: 'Central limit theorem. NSW Department of Education master dataset (data.nsw.gov.au, CC BY), Date_extracted 2026-10-02, rows with LGA = Parramatta: 49 (Primary 33, Secondary 10, SSP 5, Other 1). Year of Date_1st_teacher: mean 1952.94, SD 37.97 (population), median 1958, skewness -0.531, min 1852 (Parramatta North Public School), max 2025 (Wentworth Point High School); 24 of 49 between 1950 and 1974. Simulation, seed 2026, 20,000 samples with replacement per size: SD of means 38.08, 19.02, 12.65, 9.52, 7.61 for n = 1, 4, 9, 16, 25 (theory 37.97, 18.99, 12.66, 9.49, 7.59); skewness -0.538, -0.249, -0.215, -0.147, -0.110; within one SD 71.4, 68.7, 68.4, 68.2, 68.4 percent; within two SD 95.7, 95.3, 95.6, 95.3, 95.5 percent.',
    requiredMentions: ['256,729', '69,127', '106,562', '43,561', '92,832', 'Parramatta North Public School', 'Wentworth Point High School', '1,058,394', '1952.94'],
    sources: [
      {
        claim: 'ABS Census 2021 QuickStats, Parramatta local government area (LGA16260): people, median age, families, private dwellings, dwelling structure, occupation, education, age.',
        url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/LGA16260'
      },
      {
        claim: 'NSW Department of Education, Master dataset: NSW government school locations and student enrolment numbers (Creative Commons Attribution).',
        url: 'https://data.nsw.gov.au/data/dataset/nsw-education-nsw-public-schools-master-dataset'
      },
      {
        claim: 'Transport for NSW, Train Station Entries and Exits: monthly station usage from Opal data (Creative Commons Attribution).',
        url: 'https://opendata.transport.nsw.gov.au/data/dataset/train-station-entries-and-exits-data'
      },
      { claim: 'NSW Department of Education, 2027 term dates, Eastern division.', url: 'https://education.nsw.gov.au/schooling/calendars/2027' },
      { claim: 'IANA time zone database, australasia file: Australia/Sydney rules.', url: 'https://data.iana.org/time-zones/tzdb/australasia' }
    ],
    rejectedClaims: [
      'Why so many Parramatta schools opened between 1950 and 1974: not verified, so no reason is given.',
      'Any statement about school quality, size, results or enrolment: excluded; the project uses dates only.',
      'Enrolment, ICSEA, Indigenous and LBOTE columns of the master dataset: excluded by the cluster rules.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures from QuickStats: excluded by the cluster rules.',
      'Suburb lists for the council area: not printed, because each suburb\'s boundary was not verified against the LGA.',
      'Any affiliation with the NSW Department of Education, City of Parramatta, Transport for NSW or the ABS.'
    ]
  }
};
