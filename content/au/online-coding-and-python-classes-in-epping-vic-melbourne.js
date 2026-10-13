'use strict';
// Epping (Vic.), Melbourne (cg- district page, Australia cluster Phase 8, row 281). Keyword slug in the rotation
// (online-coding-and-python-classes-in-*), suburb page (ABS SAL20878, Epping (Vic.), City of Whittlesea) under Melbourne
// and Victoria. Not the Sydney Epping page, which is a different place.
// Spine: pandas melt (wide to long) of the five time-band columns in the metropolitan station patronage file,
// FY18-19 to FY24-25: 1,555 wide rows to 7,775 long rows. Epping bands FY18-19 to FY24-25: pre-AM peak 450 to 300
// (-33.3%), AM peak 1,250 to 900 (-28.0%), interpeak 700 to 650 (-7.1%), PM peak 700 to 650 (-7.1%), PM late 100 to
// 100 (0%). FY24-25 stations above Epping: pre-AM 25 (9 tied), AM 54 (5 tied), interpeak 36 (1 tied), PM peak 39
// (4 tied), PM late 46 (33 tied). All-station medians: AM peak 875 to 600, interpeak 350 to 300. A melt without
// Stop_name as an id column still gives 7,775 rows but loses which station each row belongs to.
// Script: scratchpad au/b10/epvc.py.
// Lesson family: pandas melt; 0 hits in content/, claimed in au/claims.txt.

module.exports = {
  clusterName: 'Australia',
  hub: {
    group: 'town',
    tag: 'EPPING',
    label: 'Epping, Melbourne',
    blurb: 'Online coding and Python classes for Epping in Melbourne\'s north, with a pandas project that reshapes seven years of station data.'
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
  slug: 'online-coding-and-python-classes-in-epping-vic-melbourne',
  code: 'epvc',
  accent: '#842D3B',
  accentRationale: 'Epping: a deep brick red (hue 350), picked by a full search of the muted range: 28.6 RGB units from every Victorian page accent, 18.6 from every other Australian accent and 6.2 from every other colour in content, the stylesheets and the claims logs; 7.04:1 on the darkest paper tint',
  pageType: 'city',
  place: {
    name: 'Epping',
    eyebrow: 'Epping, City of Whittlesea, Melbourne, Victoria',
    schemaType: 'Place',
    chain: [
      { type: 'City', name: 'Melbourne' },
      { type: 'AdministrativeArea', name: 'Victoria' },
      { type: 'Country', name: 'Australia' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-australia', name: 'Australia' },
    { slug: 'coding-and-ai-classes-in-victoria', name: 'Victoria' },
    { slug: 'vibe-coding-and-ai-agents-classes-in-melbourne', name: 'Melbourne' }
  ],
  nav: [
    { label: 'Melbourne', href: '/vibe-coding-and-ai-agents-classes-in-melbourne' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Epping, Melbourne',
  title: 'Online Coding and Python Classes in Epping, Melbourne',
  description: 'Live online coding and Python classes for Epping children, teenagers and adults in Melbourne\'s north, from Scratch to pandas and data, in groups or one to one.',
  ogDescription: 'Python classes for Epping, Victoria: one pandas melt turned 1,555 rows of station data into 7,775 and showed the morning peak at Epping down 28% since FY18-19.',
  twitterDescription: 'Epping online coding and Python classes, first class free.',
  ogImageCourse: 'data-science-course-for-teens-python-data',
  verifiedOn: '11 October 2026',
  courseSchema: {
    name: 'Live Online Coding and Python Classes for Epping, Melbourne',
    description: 'Level-matched online lessons in Scratch, Python, pandas and data analysis for learners in Epping, Victoria, taught live in English.'
  },
  h1: 'Online coding and Python classes in Epping, Melbourne',
  capsuleQ: 'How do online Python classes work for learners in Epping, Victoria?',
  capsule: 'Live lessons over video, in small groups by level, where learners write real Python on their own computers. Epping sits on the Mernda line in the north of Melbourne, and the 2021 Census counted 33,489 residents in 11,923 private dwellings there.',
  lead: 'The state\'s station patronage file gives each station one row per year, with the time of day spread across five columns: before the morning peak, the morning peak, the middle of the day, the afternoon peak and late. That layout is easy to read and awkward to analyse. One pandas function, melt, turns those five columns into rows, and Epping\'s changing day comes out of it.',
  wa: 'Hello Modern Age Coders, I would like a free online coding or Python class for a learner in Epping, Melbourne.',
  picks: {
    eyebrow: 'Course picks for Epping',
    h2: 'Courses that make data tidy',
    intro: 'Every course here gets learners reshaping and summarising tables in Python, as the melt project does. The free first class settles the level.',
    items: [
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 17', note: 'pandas from the first DataFrame to group-by summaries and charts.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 17', note: 'The Python foundations that make pandas make sense.' },
      { course: 'data-analysis-mastery-course-college', band: 'University and adult', note: 'Excel, SQL and pandas, with tidy data at the centre.' },
      { course: 'data-science-complete-masterclass-college', band: 'University and adult', note: 'Full data projects from messy files to explained results.' }
    ]
  },
  sections: [
    {
      id: 'context',
      tint: '',
      eyebrow: 'Epping in the Census',
      h2: 'A northern suburb of family homes',
      intro: 'Figures for the Epping suburb in Victoria (ABS code SAL20878, listed as Epping (Vic.)) from the 2021 Census QuickStats, beside the Victorian figure.',
      body: [
        {
          kind: 'table',
          caption: 'Epping (Vic.) suburb, 2021 Census headline counts',
          head: ['Headline', 'Epping'],
          rows: [
            ['Residents', '33,489'],
            ['Median age', '35'],
            ['Families', '8,779'],
            ['Private dwellings', '11,923'],
            ['Average people per household', '2.9']
          ]
        },
        {
          kind: 'table',
          mt: true,
          caption: 'Epping measured against Victoria',
          head: ['Measure', 'Epping', 'Victoria'],
          rows: [
            ['Separate houses', '81.2% (8,687)', '73.4%'],
            ['Semi-detached, row or terrace houses and townhouses', '17.0% (1,816)', '13.9%'],
            ['Workers who drove to work', '59.9% (9,006)', '49.9%'],
            ['Workers who took the train', '2.3% (342)', '1.6%'],
            ['Employed residents who worked at home', '17.0% (2,553)', '25.7%']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Size', p: 'The bureau measures Epping at 35.27 square kilometres, in the City of Whittlesea.' },
            { h3: 'Driving to work', p: 'Six in ten workers drove themselves to work, ten points above the state share.' },
            { h3: 'An unusual August', p: 'Census night in 2021 fell in a Victorian lockdown, so the home-working share reflects that week, not a normal one.' }
          ]
        },
        {
          kind: 'p',
          text: 'The bureau slightly perturbs every cell to keep individuals unidentifiable, so pieces of a table may not reach its total. Numbers here are reproduced as published, never summed by us.'
        }
      ]
    },
    {
      id: 'project',
      tint: 'deep',
      eyebrow: 'Signature project',
      h2: 'Five columns into one',
      intro: 'We loaded the station patronage files for FY18-19 to FY24-25: 1,555 rows, one per station per year, each with five time-band columns of average entries. pandas.melt, keeping the year and station as identifiers, turned them into 7,775 rows of year, station, band and value, one row per measurement. Grouping that long table by band shows how Epping\'s day changed.',
      body: [
        {
          kind: 'table',
          caption: 'Epping station, entries by time band in the published file (melted, our calculation of change)',
          head: ['Band', 'FY18-19', 'FY24-25', 'Change'],
          rows: [
            ['Before the morning peak', '450', '300', 'Down 33.3%'],
            ['Morning peak', '1,250', '900', 'Down 28.0%'],
            ['Interpeak', '700', '650', 'Down 7.1%'],
            ['Afternoon peak', '700', '650', 'Down 7.1%'],
            ['Late', '100', '100', 'No change']
          ]
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            {
              h3: 'The early trains lost most',
              p: 'Entries before and during the morning peak fell by about a third and over a quarter, while the middle of the day and the afternoon fell by just 7.1%.'
            },
            {
              h3: 'Across the network',
              p: 'The median station\'s morning peak band fell from 875 to 600 over the same years, and its interpeak band from 350 to 300, so Epping follows a wider pattern.'
            },
            {
              h3: 'Epping\'s place',
              p: 'In FY24-25, 54 stations had a higher morning peak figure than Epping, but only 36 a higher interpeak figure. Its annual total, 748,150 entries, ranked 49th of 222.'
            }
          ]
        },
        {
          kind: 'callout',
          h3: 'The melt that looks right and is not',
          p: 'Leave the station name out of the identifier columns and melt still returns 7,775 rows with sensible-looking numbers. But every row has lost the station it came from, so any group-by afterwards silently mixes all stations together. Checking the row count is not enough; check that each row can still be traced.'
        },
        {
          kind: 'p',
          text: 'The band figures are the publisher\'s estimates, rounded to the nearest 50, and the file does not state the clock hours of each band, so we report the bands by name only. We never add bands together into a total. Melting, grouping and the percentage changes are our own calculation.'
        }
      ]
    },
    {
      id: 'code',
      tint: 'tint',
      eyebrow: 'In pandas',
      h2: 'Wide for reading, long for analysis',
      intro: 'A wide table puts one kind of measurement in several columns. A long table gives each measurement its own row with a label saying what it is. pandas.melt goes from wide to long; pivot goes back.',
      body: [
        {
          kind: 'table',
          caption: 'The arguments that matter in pandas.melt',
          head: ['Argument', 'Set to', 'Why'],
          rows: [
            ['id_vars', 'Fin_year, Stop_name', 'Columns copied onto every new row so each value stays traceable'],
            ['value_vars', 'The five Pax band columns', 'The columns to fold into rows'],
            ['var_name', 'band', 'Name for the new label column'],
            ['value_name', 'entries', 'Name for the new number column']
          ]
        },
        {
          kind: 'p',
          text: 'Once the data is long, one group-by over band and year answers questions that would need five separate column calculations in the wide layout, and charts with one line per band need almost no code. Spreadsheet users meet the same idea as "unpivot", and SQL users as UNPIVOT or a union of selects.'
        },
        {
          kind: 'grid3',
          mt: true,
          cells: [
            { h3: 'Younger learners', p: 'Turn a times table grid into a list of facts, "3 times 4 is 12", and notice that nothing is lost.' },
            { h3: 'Secondary students', p: 'Melt the station file in pandas, then make the wrong melt on purpose and find the damage.' },
            { h3: 'Adults', p: 'Unpivot a monthly report so that one pivot table or chart can answer every question.' }
          ]
        }
      ]
    },
    {
      id: 'city',
      tint: '',
      eyebrow: 'Around Epping',
      h2: 'A station and eleven schools',
      intro: 'From the patronage file and the 2025 school locations file.',
      body: [
        {
          kind: 'grid3',
          cells: [
            { h3: 'Epping station', p: 'Epping recorded 748,150 entries in FY24-25 against 887,650 in FY18-19, with 48 stations ahead of it.' },
            { h3: 'Weekdays', p: 'The file\'s average weekday figure for Epping fell from 3,050 entries in FY18-19 to 2,450 in FY24-25.' },
            {
              h3: 'Schools',
              p: 'Eleven open schools lie inside Epping, six of them government, including Meadowglen Primary School, Harvest Home Primary School and Lalor North Secondary College.'
            }
          ]
        },
        {
          kind: 'spec',
          title: 'Term 3, 2027',
          p: 'Victorian government schools run Term 3 from Monday 12 July to Friday 17 September 2027, a natural point to start or change a course.'
        }
      ]
    }
  ],
  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From times tables to tidy data',
    intro: 'Ages are only a guide; the free first class places each learner.',
    cols: [
      {
        band: 'Ages 6 to 10',
        h3: 'Scratch and lists',
        p: 'Games that store and sort lists of things.',
        courses: ['scratch-programming-complete-course', 'microsoft-office-kids-mastery']
      },
      {
        band: 'Ages 10 to 14',
        h3: 'Python basics',
        p: 'Lists, dictionaries and reading a first CSV file.',
        courses: ['python-ai-kids-masterclass', 'maths-through-coding']
      },
      {
        band: 'Ages 13 to 17',
        h3: 'pandas and charts',
        p: 'DataFrames, melt, group-by and clear plots.',
        courses: ['data-science-course-for-teens-python-data', 'python-complete-masterclass-teens']
      },
      {
        band: 'University and adult',
        h3: 'Data at work',
        p: 'Reshaping, joining and reporting real business data.',
        courses: ['data-analysis-mastery-course-college', 'data-and-ai-analytics-for-non-programmers-course']
      }
    ]
  },
  ai: {
    eyebrow: 'Python and AI',
    h2: 'Will an AI reshape the data for an Epping learner?',
    intro: 'Readily, and that is why the learner needs to know what a correct result looks like.',
    p1: 'Ask an assistant to "turn the time bands into rows" and it will produce a melt in one line. Whether it kept the station name as an identifier is a detail it may skip, and the output has the right number of rows either way.',
    p2: 'A learner who has broken a melt on purpose knows to check the identifier columns, not just the row count. That small check is the difference between a chart of Epping and a chart of every station blended into one.',
    closer: 'Our Epping classes treat AI as a fast typist and the learner as the person responsible for the answer.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },
  delivery: {
    eyebrow: 'Delivery',
    h2: 'Online lessons for Epping',
    intro: 'Lessons are live over video, so learners take part from home.',
    cells: [
      { h3: 'Real code, real time', p: 'Learners code on their own computers and share the screen, and the teacher responds to what they write.' },
      { h3: 'In step with school', p: 'Courses follow the Victorian terms and stop for each holiday.' },
      { h3: 'A full first lesson', p: 'The free trial is a complete class; then the teacher recommends a course and a weekly slot.' },
      { h3: 'Groups by level', p: 'Groups contain fifteen to twenty learners at a similar stage.' },
      { h3: 'A weekly habit', p: 'Two lessons each week on fixed days, about eight a month, with holidays set out early.' },
      { h3: 'Teachers in India', p: 'Teachers work in India, so a 3:30pm Epping class in daylight saving is 10am India time, and 11am in Melbourne winter.' }
    ],
    spec: {
      title: 'Melbourne clocks',
      p: 'Daylight saving in Melbourne began on Sunday 4 October 2026 and ends on Sunday 4 April 2027. India keeps one time all year, so lesson times are always confirmed in Melbourne time.'
    }
  },
  fees: {
    h2: 'Epping class fees',
    intro: 'Three numbers explain the cost.',
    first: 'One free lesson that ends with an honest next step.',
    group: 'Four weeks of group lessons, normally eight, in a group of fifteen to twenty.',
    private: 'Roughly eight one-to-one lessons in a month.',
    closer: 'Outside India we bill in US dollars, so Epping families pay the same as families anywhere else abroad. Nothing is due until the trial has agreed the course and time; the pricing page covers holidays, missed lessons and changing between group and private.'
  },
  reviewsH2: 'What Google reviewers write about our classes',
  book: {
    h2: 'Book a free Epping class',
    intro: 'Tell us the age and one interest. A six-year-old might begin with a list game in Scratch; a Year 12 student might begin by melting the station file in pandas.',
    success: 'Thank you. Our team will contact you soon about an Epping class.'
  },
  faq: {
    h2: 'Epping coding and Python questions',
    intro: 'Questions Epping families and adult learners raise with us.',
    items: [
      {
        q: 'How many people live in Epping, Victoria?',
        a: 'The 2021 Census QuickStats for the Epping (Vic.) suburb record 33,489 residents, 8,779 families and 11,923 private dwellings, with a median age of 35.'
      },
      {
        q: 'What does pandas melt do?',
        a: 'It reshapes a table from wide to long. Several columns that hold the same kind of value become a pair of columns, one naming the original column and one holding the value, with identifier columns repeated on every row.'
      },
      {
        q: 'What is the difference between melt and pivot?',
        a: 'They are opposites. melt turns columns into rows, making a table longer; pivot turns the values of one column back into separate columns, making it wider.'
      },
      {
        q: 'What did the Epping station project find?',
        a: 'After melting 1,555 rows into 7,775, Epping\'s morning peak band fell 28.0% from FY18-19 to FY24-25 and the pre-morning band 33.3%, while the interpeak and afternoon peak bands fell 7.1%.'
      },
      {
        q: 'Is pandas too advanced for school students?',
        a: 'Not for teenagers who know basic Python. Tables are familiar from spreadsheets, and seeing a chart appear from a few lines of code keeps students going.'
      },
      { q: 'What do younger Epping children start with?', a: 'Children from six start with Scratch, building games that keep lists and scores.' },
      {
        q: 'Where are Epping classes held?',
        a: 'Online, live. We have no premises in Australia, and the phone number on our site is from India.',
        boiler: true
      },
      {
        q: 'How much do coding classes cost for Epping learners?',
        a: 'The first lesson is free. Group classes then cost USD 100 a month for two live lessons a week, roughly eight a month, with fifteen to twenty learners, and one-to-one classes cost USD 150 a month. The course, format and time are agreed before you pay.',
        boiler: true
      },
      {
        q: 'How many learners in each group?',
        a: 'Five to ten, grouped on level, pace and goals, with one-to-one lessons if no group time works.',
        boiler: true
      },
      {
        q: 'Do adults learn pandas with you?',
        a: 'Yes. Adults have their own groups or private lessons, often to move reporting work out of manual spreadsheets.'
      }
    ]
  },
  next: {
    eyebrow: 'Explore Melbourne and Victoria',
    h2: 'More for Epping learners',
    html: 'This page is for Epping in Melbourne\'s north. For the wider city, see the <a class="cg-inline-link" href="/vibe-coding-and-ai-agents-classes-in-melbourne">Melbourne page</a>; for the state, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-victoria">Victoria guide</a>. Families with a young beginner can read about <a class="cg-inline-link" href="/coding-classes-for-kids-melbourne">kids coding classes in Melbourne</a>.',
    waLabel: 'Message us on WhatsApp'
  },
  footerHeading: 'Epping and Melbourne',
  footerPlaces: [
    { href: '/coding-classes-for-kids-melbourne', label: 'Kids coding, Melbourne' },
    { href: '/vibe-coding-and-ai-agents-classes-in-melbourne', label: 'Melbourne' },
    { href: '/coding-and-ai-classes-in-victoria', label: 'Victoria' },
    { href: '/coding-classes-in-australia', label: 'Australia' }
  ],
  personalityCss: `
.cg-root.cg-epvc .cg-hero-grid { align-items: start; gap: clamp(1.25rem, 3.7vw, 2.9rem); }
.cg-root.cg-epvc .cg-hero h1 { font-weight: 650; letter-spacing: -0.015em; line-height: 1.08; }
.cg-root.cg-epvc .cg-capsule { border-top: 2px solid var(--cg-accent); border-bottom: 2px solid var(--cg-accent); padding: 0.8rem 0; }
.cg-root.cg-epvc .cg-eyebrow { letter-spacing: 0.12em; font-weight: 680; font-size: 0.79rem; text-transform: uppercase; }
.cg-root.cg-epvc .cg-section-head h2 { max-width: 26ch; letter-spacing: -0.011em; }
.cg-root.cg-epvc .cg-grid-3 { gap: clamp(0.7rem, 2.3vw, 1.85rem); }
.cg-root.cg-epvc .cg-table caption { font-weight: 620; text-align: left; text-transform: none; }
.cg-root.cg-epvc .cg-table td:nth-child(n+2) { font-variant-numeric: tabular-nums; text-align: right; }
.cg-root.cg-epvc .cg-ladder-col { border-left: 3px double var(--cg-accent); padding-left: 1.05rem; }
.cg-root.cg-epvc .cg-callout { border-left-width: 2px; }
`,
  dossier: {
    curriculumAuthority: 'Epping (Vic.), ABS Census 2021 QuickStats, Epping (Vic.) suburb SAL20878 (read 11 October 2026): 33,489 people; median age 35; 8,779 families; 11,923 private dwellings; 2.9 people per household; separate house 81.2% (8,687; Victoria 73.4%); semi-detached, row or terrace house, townhouse 17.0% (1,816; Victoria 13.9%); car as driver 59.9% (9,006; Victoria 49.9%); train 2.3% (342; Victoria 1.6%); worked at home 17.0% (2,553; Victoria 25.7%; lockdown Census). ABS SAL area 35.27 square kilometres, City of Whittlesea. Epping station 748,150 entries FY24-25 (rank 49 of 222; FY18-19 887,650); average weekday 3,050 (FY18-19) to 2,450 (FY24-25). Victorian School Locations 2025: 11 open schools (Government 6, Catholic 3, Independent 2), including Meadowglen Primary School, Harvest Home Primary School and Lalor North Secondary College. Victorian 2027 Term 3: Monday 12 July to Friday 17 September. Melbourne daylight saving 4 October 2026 to 4 April 2027 (IANA).',
    localProject: 'pandas melt (wide to long). Metropolitan station patronage FY18-19 to FY24-25: 1,555 wide rows, value_vars Pax_pre_AM_peak, Pax_AM_peak, Pax_interpeak, Pax_PM_peak, Pax_PM_late, id_vars Fin_year and Stop_name: 7,775 long rows. Epping FY18-19 to FY24-25: pre-AM 450 to 300 (-33.3%), AM peak 1,250 to 900 (-28.0%), interpeak 700 to 650 (-7.1%), PM peak 700 to 650 (-7.1%), PM late 100 to 100 (0%). FY24-25 stations above Epping: pre-AM 25 (9 tied), AM 54 (5 tied), interpeak 36 (1 tied), PM peak 39 (4 tied), PM late 46 (33 tied). All-station medians AM peak 875 to 600, interpeak 350 to 300. Melt without Stop_name: 7,775 rows, station identity lost. Bands never summed. Script: scratchpad au/b10/epvc.py.',
    requiredMentions: [
      '33,489',
      '8,779',
      '11,923',
      '35.27 square kilometres',
      '748,150',
      '887,650',
      '1,555 rows',
      'Meadowglen Primary School',
      'Harvest Home Primary School',
      'Lalor North Secondary College'
    ],
    sources: [
      { claim: 'ABS Census 2021 QuickStats, Epping (Vic.) suburb (SAL20878).', url: 'https://abs.gov.au/census/find-census-data/quickstats/2021/SAL20878' },
      {
        claim: 'Department of Transport and Planning, Annual metropolitan train station patronage (station entries), FY18-19 to FY24-25 (Creative Commons Attribution 4.0); estimates rounded to the nearest 50.',
        url: 'https://discover.data.vic.gov.au/dataset/annual-metropolitan-train-station-patronage-station-entries'
      },
      {
        claim: 'Victorian Department of Education, School Locations 2025 (Creative Commons Attribution 4.0), dv402-SchoolLocations2025.csv.',
        url: 'https://discover.data.vic.gov.au/dataset/school-locations-2025'
      },
      {
        claim: 'ABS ASGS 2021 Suburbs and Localities boundary service (SAL20878 polygon and area).',
        url: 'https://geo.abs.gov.au/arcgis/rest/services/ASGS2021/SAL/MapServer'
      },
      { claim: 'pandas documentation, pandas.melt.', url: 'https://pandas.pydata.org/docs/reference/api/pandas.melt.html' },
      {
        claim: 'Victorian Government, school term dates and holidays, 2027 Victorian school term dates.',
        url: 'https://www.vic.gov.au/school-term-dates-and-holidays-victoria'
      },
      {
        claim: 'IANA time zone database, australasia file: Australia/Melbourne daylight saving rules.',
        url: 'https://data.iana.org/time-zones/tzdb/australasia'
      }
    ],
    rejectedClaims: [
      'Clock hours of each time band: not stated by the publisher, so not given.',
      'Any total made by adding time bands: never computed or printed.',
      'Reasons for the fall in Epping station entries since FY18-19: not claimed.',
      'Names of Catholic or independent schools: not used; counted only.',
      'Income, rent, mortgage, ancestry, birthplace, language and religion figures: excluded by the cluster rules.',
      'Any affiliation with the City of Whittlesea, the Victorian Department of Education or the Department of Transport and Planning.'
    ]
  }
};
