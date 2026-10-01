'use strict';
// Maths tuition in London (ag- maths by city, UK cluster Phase 11, row 569).
// Read on 1 October 2026 by curl, quotes grepped from the raw text:
//  - NCETM "Current Maths Hubs" and seven London hub pages. Lead schools and council areas, verbatim from each page:
//    London Central and North West (lead The St Marylebone CE School, Westminster): Barnet, Camden, Enfield, Haringey,
//    Islington, Westminster. London Central and West (lead Fox Primary School, Kensington and Chelsea): Brent, Ealing,
//    Hammersmith and Fulham, Harrow, Hillingdon, Hounslow, Kensington and Chelsea. London North East (lead Elmhurst Primary
//    School, Newham): Barking and Dagenham, Hackney, Havering, Newham, Redbridge, Waltham Forest. London South East Plus
//    (lead Redriff Primary School, Southwark): Bexley, City of London, Greenwich, Lewisham, Southwark, Tower Hamlets.
//    London South West ("led by two outstanding schools, Belleville Primary and Chesterton Primary"): Kingston upon Thames,
//    Merton, Richmond upon Thames, Sutton, Wandsworth. London Thames (lead Harris City Academy, Crystal Palace): Bromley,
//    Croydon, Lambeth.
//  - Royal Institution, Ri Masterclasses page: "Quite a few London series are administered by the Ri team"; "In 1981, the
//    first Masterclasses for secondary school students were set up, offering London children the opportunity to discover new
//    mathematics"; "Masterclasses are free to attend, school students are nominated by their teacher."; "This opportunity is
//    normally available for 9/10 year old and 13/14 year old students".
//  - DfE GCSE mathematics subject content (2013), statistics item 1: "infer properties of populations or distributions from
//    a sample, whilst knowing the limitations of sampling".
// Local project (our calculation): TfL Unified API /BikePoint, read 1 October 2026 (Powered by TfL Open Data). Every listed
// docking station is Installed=true. NbDocks: mean 26.29, median 24, population sd 8.55, min 10 (Royal Avenue 1, Chelsea),
// max 63 (Jubilee Plaza, Canary Wharf). Distance from a point we chose in Trafalgar Square (51.50735, -0.12776), haversine:
// under 3 km 299 stations, mean 25.16 docks; 3 to under 6 km 349, mean 26.21; 6 km and over 153, mean 28.67.
// 10,000 samples of 40 stations each (seed 2026): simple random sd of the sample mean 1.32, 90% of estimates 24.18 to 28.55,
// 55.1% within 1 dock of 26.29; proportional stratified (15/17/8) sd 1.31, 24.23 to 28.50, 55.2%; convenience (inner ring
// only) centred on 25.15, 23.02 to 27.35, 39.0%; systematic (every 20th by terminal number, random start) sd 0.98,
// 24.57 to 28.20, 80.0%. The total number of docks is not printed (live counts change and TfL publishes its own figures).
// Spine: can 40 docking stations tell you about all of them? Family: sampling methods, bias, stratification, the spread of
// a sample mean.

module.exports = {
  cluster: 'ag',
  clusterName: 'United Kingdom',
  hub: { group: 'maths', tag: 'LONDON MATHS', label: 'Maths tuition in London', blurb: 'KS2 to A level and adult maths across London, with a sampling project built on the Santander Cycles docking stations.' },
  slug: 'maths-tuition-in-london',
  code: 'mld',
  accent: '#244275',
  accentRationale: 'London maths: a muted Thames navy (9.95:1 contrast on white), chosen by hand and kept well away from the red on our London coding page',
  pageType: 'city',
  market: { name: 'United Kingdom', iso: 'GB', dial: '+44', lang: 'en-GB', locale: 'en_GB', geoRegion: 'GB', brandTag: 'UK', phonePlaceholder: '7700 900123', minDigits: 10, stripTrunk: true },
  routeLabel: 'Maths tuition in London',
  title: 'Maths Tuition in London | Online Maths Tutor, KS2 to A Level',
  description: 'Maths tuition in London for ages 6 to 67: an online maths tutor for KS2, KS3, GCSE, A level and Further Maths, plus adults. Free first lesson, live classes.',
  ogDescription: 'London maths tuition online, from times tables and Year 6 SATs to GCSE, A level, Further Maths and adult maths, taught live in small groups or one to one.',
  twitterDescription: 'London maths, taught live online: can 40 Santander Cycles docking stations tell you about all of them?',
  pageName: 'Maths Tuition in London',
  webPageDescription: 'Live online maths tuition for London learners aged 6 to 67, covering KS2 and Year 6 SATs maths, KS3, GCSE on every board and tier, A level Maths and Further Maths, and adult maths, with a sampling project built on TfL cycle hire data.',
  courseDescription: 'Live online maths lessons for London learners from primary school to adulthood, in level-matched groups of five to ten or one to one, following the national curriculum and the AQA, Edexcel and OCR specifications.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the UK', href: '/coding-classes-in-united-kingdom' }],
  crumbLabel: 'Maths tuition in London',
  navLinks: [
    { href: '#levels', label: 'Levels' },
    { href: '#docks', label: 'Cycle docks' },
    { href: '#samples', label: 'Sampling' },
    { href: '#hubs', label: 'Maths hubs' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'London &middot; Online maths tutor for ages 6 to 67 &middot; Groups of five to ten or one to one',
  h1: 'Maths tuition in London',
  lede: 'Nobody in London has time to measure everything, so mathematicians sample. We put that idea to work on the Santander Cycles network. TfL lists every docking station with its number of docks, so we know the true average: 26.29 docks per station. Then we asked what a learner would conclude from just 40 stations, chosen four different ways, ten thousand times over. A careless sample drawn only from central London lands within one dock of the truth just 39.0% of the time. A well-planned one manages 80.0%. That gap is the heart of GCSE statistics, and this page uses it to show how our online maths tutors teach London learners, from the Year 4 times tables check to Further Maths and adult maths.',
  secondaryCta: { href: '#docks', label: 'See the docking station data' },
  wa: 'Hello Modern Age Coders, I would like a free maths lesson for a learner in London.',
  heroNote: 'A maths page for London &middot; Primary, secondary, sixth form and adult learners &middot; Independent of every London school and council',
  spec: [
    ['Learners', 'Ages 6 to 67, anywhere in London'],
    ['Primary', 'KS2 maths, times tables, Year 6 SATs'],
    ['Secondary', 'KS3 maths and GCSE, foundation or higher tier'],
    ['Boards', 'AQA, Edexcel and OCR, plus IGCSE'],
    ['Sixth form', 'A level Maths and Further Maths'],
    ['Adults', 'Functional Skills, GCSE resits, refreshers'],
    ['Format', 'Live video, groups of 5 to 10 or one to one'],
    ['London project', 'Sampling 40 cycle docks out of hundreds']
  ],
  capsuleQ: 'What does maths tuition in London with us involve?',
  capsule: 'We are an online maths tutor for London learners aged 6 to 67. Lessons are live on video with a real teacher, in groups of five to ten learners at one level or one to one. We cover KS2 maths and Year 6 SATs preparation, the Year 4 multiplication tables check, KS3 maths, GCSE maths at foundation or higher tier on the AQA, Edexcel or OCR specification, IGCSE, A level Maths and Further Maths, and adult maths including Functional Skills and GCSE maths resits. Every course mixes exam practice with real data; our London example asks whether 40 Santander Cycles docking stations can tell you the average size of all of them. The first lesson is free. After that a group place is USD 100 a month and one-to-one lessons are USD 150 a month.',

  picks: {
    eyebrow: 'Where London families usually begin',
    h2: 'The three maths courses London learners ask for most',
    lede: 'GCSE, A level and primary maths cover most of the enquiries we get from London. Every other course is listed lower down.',
    items: [
      { course: 'gcse-mathematics-mastery', code: 'LDN / 1', title: 'GCSE maths, any board and tier', note: 'AQA, Edexcel or OCR, foundation or higher, including learners resitting the exam.' },
      { course: 'a-level-maths-course-pure-mechanics-statistics', code: 'LDN / 2', title: 'A level maths', note: 'Pure maths, statistics and mechanics, with the large data set treated as real data rather than a chore.' },
      { course: 'elementary-mathematics-complete-masterclass', code: 'LDN / 3', title: 'Primary maths for KS2', note: 'Place value, times tables, fractions and the reasoning questions of Year 6 SATs maths.' }
    ]
  },

  sections: [
    {
      id: 'levels', tint: 'tint', eyebrow: 'Every stage',
      h2: 'A maths tutor in London for KS2, KS3, GCSE and A level',
      lede: 'London schools teach the national curriculum for England, whichever borough they sit in, so the stages below apply from Havering to Hillingdon. Adults pick up wherever they stopped.',
      body: [
        { kind: 'table', caption: 'Maths stages for London learners and the focus of our lessons at each', head: ['Stage', 'School years', 'Where our lessons put the weight'], rows: [
          ['KS1', 'Years 1 and 2', 'Counting, number bonds to 20 and 100, halves and quarters, telling the time.'],
          ['KS2', 'Years 3 to 6', 'Times tables before the Year 4 check, long multiplication and division, fractions, and the reasoning papers of Year 6 SATs maths.'],
          ['KS3', 'Years 7 to 9', 'Algebra, ratio and proportion, angles, probability and first statistics, built carefully because GCSE rests on them.'],
          ['GCSE', 'Years 10 and 11', 'Foundation or higher tier, matched to AQA, Edexcel or OCR, including sampling, histograms and scatter graphs.'],
          ['A level', 'Years 12 and 13', 'Pure, statistics and mechanics, with Further Maths for learners who want more proof and more abstraction.'],
          ['Adults', 'Any age to 67', 'Functional Skills maths, GCSE maths resits, refreshers and maths for work.']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'KS2 maths and Year 6 SATs',
          left: [
            'The multiplication tables check is statutory for Year 4 pupils at state-funded schools in England, so most London children meet it at eight or nine. We teach the tables as connected facts: a child who knows 6 × 7 can work out 6 × 8 by adding one more six, and that habit is what survives a nervous morning.',
            'Year 6 SATs maths rewards children who can explain an answer, not just reach it. Our KS2 lessons spend real time on questions such as why 3/4 is larger than 5/8, because the reasoning papers are built from exactly that kind of question.'
          ],
          rightH3: 'GCSE, IGCSE and A level',
          right: [
            'A GCSE maths tutor has to know which board and tier a learner sits. We teach to the specification the school uses, AQA, Edexcel or OCR, and we decide with the family whether foundation or higher tier fits. Learners at schools that enter the international papers follow our IGCSE course instead.',
            'Our national pages explain each stage in more depth: <a class="ag-inline-link" href="/ks2-maths-tuition-online">KS2 maths</a>, <a class="ag-inline-link" href="/ks3-maths-tuition-online">KS3 maths</a>, <a class="ag-inline-link" href="/gcse-maths-tuition-online">GCSE maths</a>, <a class="ag-inline-link" href="/igcse-maths-tuition-online">IGCSE maths</a>, <a class="ag-inline-link" href="/a-level-maths-tuition-online">A level maths</a> and <a class="ag-inline-link" href="/further-maths-tuition-online">Further Maths</a>.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://www.gov.uk/government/collections/multiplication-tables-check" rel="noopener" target="_blank">gov.uk, multiplication tables check</a>, read on 1 October 2026. School years are the usual ones for each key stage in England.' }
      ]
    },
    {
      id: 'docks', tint: 'plain', eyebrow: 'The London project',
      h2: 'How big is a typical Santander Cycles docking station?',
      lede: 'TfL publishes every docking station with its number of docks. That makes it a rare thing in statistics: a population we can see in full, so we can test how well samples do.',
      body: [
        { kind: 'two',
          left: [
            'On 1 October 2026 we downloaded the cycle hire list from the TfL open data service. Each docking station comes with a name, a position and the number of docks it has, and every station in the list was marked as installed. Across all of them the mean is 26.29 docks per station and the median is 24.',
            'The smallest station in the list has 10 docks, at Royal Avenue 1 in Chelsea. The largest has 63, at Jubilee Plaza in Canary Wharf. The standard deviation, which measures how far a typical station sits from the mean, is 8.55 docks.'
          ],
          right: [
            'Now imagine a GCSE student who cannot download the list and has to walk around counting docks. They might visit 40 stations. The question every statistics course asks is how close the average of those 40 will be to the true 26.29, and whether the way they choose the 40 matters.',
            'To test it we split London into three rings by straight-line distance from a point in Trafalgar Square that we chose as the centre. Then we drew samples of 40 in four different ways and repeated each one 10,000 times, keeping a record of every estimate.'
          ] },
        { kind: 'table', mt: true, caption: 'Santander Cycles docking stations by distance from Trafalgar Square, our calculation from TfL data on 1 October 2026', head: ['Ring', 'Stations', 'Mean docks per station'], numCols: [1, 2], rows: [
          ['Under 3 km', '299', '25.16'],
          ['3 km to under 6 km', '349', '26.21'],
          ['6 km and over', '153', '28.67'],
          ['Every station in the list', 'All of the above', '26.29']
        ] },
        { kind: 'p', mt: true, html: 'Notice that the outer ring has larger stations on average, 28.67 docks against 25.16 in the middle of town. A sample that only visits central stations will therefore guess too low. That is bias, and the next section measures exactly how much it costs.' },
        { kind: 'source', html: 'Data: <a class="ag-inline-link" href="https://api.tfl.gov.uk/BikePoint" rel="noopener" target="_blank">TfL Unified API, BikePoint</a>, read 1 October 2026. Powered by TfL Open Data. The rings, the centre point and every average above are Modern Age Coders\' calculations, not TfL figures. Dock counts change as stations are rebuilt.' }
      ]
    },
    {
      id: 'samples', tint: 'deep', eyebrow: 'Sampling, measured',
      h2: 'Four ways to choose 40 stations, tested 10,000 times each',
      lede: 'The DfE content for GCSE maths asks students to "infer properties of populations or distributions from a sample, whilst knowing the limitations of sampling". Here are those limitations, counted.',
      body: [
        { kind: 'table', caption: 'Estimates of the mean docks per station from samples of 40, repeated 10,000 times (our simulation)', head: ['How the 40 were chosen', 'Middle 90% of estimates', 'Within 1 dock of 26.29'], rows: [
          ['Simple random: any 40, every station equally likely', '24.18 to 28.55', '55.1%'],
          ['Stratified: 15 inner, 17 middle, 8 outer, each at random', '24.23 to 28.50', '55.2%'],
          ['Convenience: 40 at random from the inner ring only', '23.02 to 27.35', '39.0%'],
          ['Systematic: every 20th station by terminal number', '24.57 to 28.20', '80.0%']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the numbers say',
          left: [
            'The convenience sample is the one a tired student takes: stay in the centre where the stations are close together. Its estimates centre on 25.15 rather than 26.29, so even ten thousand of them would never average out to the truth. Only 39.0% land within one dock.',
            'Stratifying by ring barely helped here, 55.2% against 55.1%. That surprises students, but it makes sense: the three rings have fairly similar means, so knowing which ring a station is in tells you little about its size. Stratification pays off when the groups really differ.'
          ],
          rightH3: 'The surprise winner',
          right: [
            'The systematic sample, taking every 20th station in order of its terminal number from a random start, did far better than the others: 80.0% within one dock and a spread of estimates of 0.98 docks against 1.32 for simple random sampling.',
            'We have not checked why. One reasonable guess is that neighbouring terminal numbers tend to be stations of a similar type, so spreading the sample evenly through the list covers every type. Testing that guess is a good A level statistics exercise in its own right.'
          ] },
        { kind: 'p', mt: true, html: 'At KS3 we use this data for mean, median and range. At GCSE the focus is the sampling methods and the word bias. At A level students find the standard error, compare it with 8.55 ÷ √40, and ask why the simulation and the formula agree so closely.' },
        { kind: 'source', html: 'All simulation figures are Modern Age Coders\' calculations from the TfL list above (10,000 repetitions of each method, fixed random seed). GCSE wording: <a class="ag-inline-link" href="https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives" rel="noopener" target="_blank">DfE, GCSE mathematics subject content</a>.' }
      ]
    },
    {
      id: 'hubs', tint: 'tint', eyebrow: 'Maths around London',
      h2: 'Six Maths Hubs, the Ri Masterclasses and the 11 plus boroughs',
      lede: 'A great deal of maths support in London happens through schools rather than through families. We describe it so parents know what exists; we run none of it.',
      body: [
        { kind: 'table', caption: 'NCETM Maths Hubs that serve London, with the lead school and council areas each page lists', head: ['Maths Hub', 'Lead', 'London council areas'], rows: [
          ['London Central and North West', 'The St Marylebone CE School, Westminster', 'Barnet, Camden, Enfield, Haringey, Islington, Westminster'],
          ['London Central and West', 'Fox Primary School, Kensington and Chelsea', 'Brent, Ealing, Hammersmith and Fulham, Harrow, Hillingdon, Hounslow, Kensington and Chelsea'],
          ['London North East', 'Elmhurst Primary School, Newham', 'Barking and Dagenham, Hackney, Havering, Newham, Redbridge, Waltham Forest'],
          ['London South East Plus', 'Redriff Primary School, Southwark', 'Bexley, City of London, Greenwich, Lewisham, Southwark, Tower Hamlets'],
          ['London South West', 'Belleville Primary and Chesterton Primary', 'Kingston upon Thames, Merton, Richmond upon Thames, Sutton, Wandsworth'],
          ['London Thames', 'Harris City Academy, Crystal Palace', 'Bromley, Croydon, Lambeth']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Royal Institution Masterclasses',
          left: [
            'The Ri Masterclasses began in London: the Royal Institution says that in 1981 the first ones for secondary students were set up, "offering London children the opportunity to discover new mathematics". It adds that "Quite a few London series are administered by the Ri team".',
            'The Ri is clear that "Masterclasses are free to attend, school students are nominated by their teacher", usually at ages 9 to 10 and 13 to 14. A keen London learner should ask a maths teacher about a nomination. Between them, the six hubs in the table cover all 32 boroughs and the City; the London Central and North West Maths Hub, for example, works with schools from Barnet to Westminster.'
          ],
          rightH3: '11 plus maths in London boroughs',
          right: [
            'Several outer boroughs still have selective schools with their own tests. We have separate pages on 11 plus maths for <a class="ag-inline-link" href="/11-plus-maths-tuition-barnet">Barnet</a>, <a class="ag-inline-link" href="/11-plus-maths-tuition-bexley">Bexley</a>, <a class="ag-inline-link" href="/11-plus-maths-tuition-enfield">Enfield</a>, <a class="ag-inline-link" href="/11-plus-maths-tuition-kingston">Kingston</a>, <a class="ag-inline-link" href="/11-plus-maths-tuition-redbridge">Redbridge</a> and <a class="ag-inline-link" href="/11-plus-maths-tuition-sutton">Sutton</a>, each about that borough\'s test.',
            'This page is the general one: maths for every age and stage across all of London. For competition maths, our <a class="ag-inline-link" href="/ukmt-maths-challenge-tutoring">UKMT maths challenge page</a> covers the Junior, Intermediate and Senior challenges.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.ncetm.org.uk/maths-hubs/find-your-hub/current-maths-hubs/" rel="noopener" target="_blank">NCETM, current Maths Hubs</a> and the individual London hub pages; <a class="ag-inline-link" href="https://www.rigb.org/learning/ri-masterclasses" rel="noopener" target="_blank">Royal Institution, Ri Masterclasses</a>. Read on 1 October 2026. We are independent of the NCETM, the Maths Hubs, the Royal Institution and every London school and council.' }
      ]
    },
    {
      id: 'adults', tint: 'plain', eyebrow: 'Grown-up learners',
      h2: 'A maths tutor for adults in London: Functional Skills, resits and refreshers',
      lede: 'Many of our London learners are adults: people resitting GCSE maths for a course or a job, parents who want to follow homework, and professionals who use numbers every day and want to trust them.',
      body: [
        { kind: 'three', cells: [
          { h3: 'GCSE maths resit', p: 'Our GCSE course takes resit candidates and starts from what the learner actually knows, which is rarely what the last result suggests. Most adults move faster than they expect once fractions and percentages make sense.' },
          { h3: 'Functional Skills maths', p: 'Practical maths for work and training: percentages, measures, data and problem solving in context. Our <a class="ag-inline-link" href="/functional-skills-maths-tuition-online">Functional Skills page</a> explains how we teach it.' },
          { h3: 'Refreshers and work maths', p: 'Ratios, spreadsheets, statistics for reports, and the sampling ideas on this page. See our page on <a class="ag-inline-link" href="/online-maths-classes-for-adults-in-uk">maths classes for adults</a>.' }
        ] },
        { kind: 'p', mt: true, html: 'Adults often enjoy the docking station project more than teenagers do, because they have stood at a full station looking for a free dock. The question of whether a sample of 40 can speak for the whole network is one they meet at work all the time, in surveys, audits and customer feedback.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'Four stages from number facts to judging a sample',
    lede: 'This is the order in which the ideas build. A new learner can join at any stage; the free lesson shows us where.',
    table: { caption: 'How London learners move from arithmetic to statistical judgement', head: ['Typical years', 'Stage', 'How we know it is secure'], rows: [
      ['Years 3 and 4', '1. Number facts', 'Recalls tables to 12 × 12 and derives a forgotten one from a neighbour'],
      ['Years 5 to 7', '2. Written methods', 'Multiplies, divides and handles fractions and decimals accurately on paper'],
      ['Years 8 to 10', '3. Algebra and averages', 'Forms equations and chooses between mean, median and mode for a data set'],
      ['Years 10 to 13', '4. Inference', 'Explains how a sample was chosen and how far its answer can be trusted']
    ] },
    left: { h3: 'Joining in Year 10 or 11', ps: [
      'A GCSE learner who starts late can still make real progress, provided we repair the foundations first. Weak algebra, in particular, undermines almost every higher-tier topic.',
      'If the time before the exam is shorter than the gap to close, we will say so plainly after the free lesson.'
    ] },
    right: { h3: 'After GCSE', ps: [
      'Many learners continue to A level Maths or Further Maths. Others take our <a class="ag-inline-link" href="/courses/statistics-probability-maths-course">statistics and probability course</a>, where sampling is studied properly.',
      'Some go on to <a class="ag-inline-link" href="/courses/maths-through-coding">maths through coding</a> and rebuild the docking station simulation as a short Python program.'
    ] }
  },

  catalogue: {
    eyebrow: 'All maths courses',
    h2: 'Maths courses for London learners, by stage',
    lede: 'Grouped from primary to adult. Open any card for the full syllabus.',
    bands: [
      { num: 'I', h3: 'Primary', sub: 'KS1 and KS2', courses: [
        { code: 'MLD / A1', slug: 'elementary-mathematics-complete-masterclass', title: 'Primary maths, Years 1 to 6', blurb: 'KS1 and KS2 maths, including Year 6 SATs reasoning.' },
        { code: 'MLD / A2', slug: '11-plus-maths-preparation-course-uk', title: '11 plus maths', blurb: 'For families whose borough or school sets a selective test.' },
        { code: 'MLD / A3', slug: 'mental-maths-mastery-kids', title: 'Mental maths for kids', blurb: 'Quick, accurate arithmetic without a pencil.' },
        { code: 'MLD / A4', slug: 'early-math-foundations', title: 'Early maths foundations', blurb: 'Number sense for the youngest learners.' }
      ] },
      { num: 'II', h3: 'Secondary', sub: 'KS3, GCSE and IGCSE', courses: [
        { code: 'MLD / B1', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'KS3 maths', blurb: 'Years 7 to 9: algebra, ratio, geometry and data.' },
        { code: 'MLD / B2', slug: 'gcse-mathematics-mastery', title: 'GCSE maths', blurb: 'AQA, Edexcel or OCR, foundation or higher, resits welcome.' },
        { code: 'MLD / B3', slug: 'igcse-mathematics-mastery', title: 'IGCSE maths', blurb: 'For schools that enter the international papers.' },
        { code: 'MLD / B4', slug: 'algebra-foundations-masterclass', title: 'Algebra foundations', blurb: 'Rebuilding algebra for learners who lost the thread.' }
      ] },
      { num: 'III', h3: 'Sixth form and beyond', sub: 'A level, competitions, university', courses: [
        { code: 'MLD / C1', slug: 'a-level-maths-course-pure-mechanics-statistics', title: 'A level maths', blurb: 'Pure, statistics and mechanics, with Further Maths for those who want more.' },
        { code: 'MLD / C2', slug: 'statistics-probability-maths-course', title: 'Statistics and probability', blurb: 'Sampling, distributions and hypothesis tests.' },
        { code: 'MLD / C3', slug: 'olympiad-competition-mathematics-mastery', title: 'Competition maths', blurb: 'Problem solving for UKMT challenges and olympiads.' },
        { code: 'MLD / C4', slug: 'college-mathematics-complete-masterclass', title: 'University maths', blurb: 'Calculus, linear algebra and proof.' }
      ] },
      { num: 'IV', h3: 'Adults and applied', sub: 'Maths for work and interest', courses: [
        { code: 'MLD / D1', slug: 'data-analytics-mathematics-masterclass', title: 'Maths for data work', blurb: 'The statistics behind dashboards and reports.' },
        { code: 'MLD / D2', slug: 'complete-business-finance-mathematics-mastery', title: 'Business and finance maths', blurb: 'Interest, growth and risk, worked through.' },
        { code: 'MLD / D3', slug: 'maths-through-coding', title: 'Maths through coding', blurb: 'Simulations like the docking station one, in Python.' },
        { code: 'MLD / D4', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Vedic maths', blurb: 'Fast calculation tricks, once the basics are firm.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Timing',
    h2: 'Lessons after school, in the evening or at the weekend',
    lede: 'Our teachers work from India on Indian Standard Time, which does not change during the year. London is four and a half hours behind India in summer and five and a half in winter, and we always quote lesson times in UK time.',
    slots: [
      { time: 'Weekdays, 4pm to 7pm', l: 'Primary and secondary learners after school.' },
      { time: 'Weekday evenings', l: 'Sixth formers, resit candidates and working adults.' },
      { time: 'Saturday and Sunday', l: 'Morning slots for anyone who prefers them.' }
    ],
    cells: [
      { h3: 'One teacher throughout', p: 'The same person teaches each week, so nothing has to be explained twice.' },
      { h3: 'Notes for parents', p: 'A brief written update after lessons on progress and next steps.' },
      { h3: 'Level, not postcode', p: 'Groups are formed by level, so a Croydon learner may sit with one from Leeds.' },
      { h3: 'Data from real life', p: 'Cycle docks, transport timetables and census tables sit alongside past papers.' },
      { h3: 'Private lessons', p: 'One to one when a specific topic or an exam date needs it.' },
      { h3: 'Explaining, not copying', p: 'Learners say why a method works before they practise it.' }
    ]
  },

  projectsH2: 'Projects our students have gone on to make',
  projectsLede: 'Learners who began with problems like the docking station sample went on to build the projects below. More are in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Reproduced unchanged from Google reviews written by families and learners.',

  fees: {
    h2: 'Fees',
    lede: 'Charged monthly in US dollars, the same for every country outside India. No registration fee and no contract.',
    free: ['A full lesson at the right level', 'An honest assessment afterwards', 'No payment details needed'],
    group: ['Five to ten learners of one level', 'The same teacher each week', 'Homework marked and discussed', 'Certificate on completion'],
    one: ['A teacher for a single learner', 'Lessons aimed at specific gaps', 'Flexible around exam dates']
  },

  faq: {
    eyebrow: 'London maths questions',
    h2: 'What London families and adult learners ask before booking',
    items: [
      { q: 'How much does a maths tutor cost in London?', a: 'With us the first lesson is free. After that, a place in a group of five to ten costs USD 100 a month and one-to-one tuition costs USD 150 a month, with no joining fee and no fixed term.' },
      { q: 'Is online maths tuition as good as face to face?', a: 'For most learners it works as well, provided the lesson is live and the teacher can see the working. Our lessons are live on video with a shared whiteboard, and the teacher watches each step rather than only the final answer.' },
      { q: 'What is stratified sampling?', a: 'Stratified sampling splits a population into groups, called strata, and then samples from each group in proportion to its size. It improves accuracy when the groups differ from one another; in our London cycle dock data the rings were too similar for it to help much.' },
      { q: 'Can you help with a GCSE maths resit?', a: 'Yes. Our GCSE course takes resit candidates of any age. We start by finding which topics are secure and which are not, then rebuild the weak ones before moving on to exam practice.' },
      { q: 'Do you teach Further Maths?', a: 'Yes. Learners who take Further Maths alongside A level Maths can study the extra pure, statistics and mechanics content with us, one to one or in a group if one at the right level is running.' },
      { q: 'Which exam boards do you teach for GCSE maths?', a: 'AQA, Edexcel and OCR, at foundation or higher tier. We also teach IGCSE for learners whose schools enter the international papers.' },
      { q: 'What is the best way to prepare for the Year 4 multiplication tables check?', a: 'Short, frequent practice that links facts together works far better than long drills. We teach children to derive a fact they forget from one they know, so 7 × 8 can be rebuilt from 7 × 4 doubled.' },
      { q: 'Do you offer 11 plus maths for London boroughs?', a: 'Yes. We have separate pages for Barnet, Bexley, Enfield, Kingston, Redbridge and Sutton, each describing that borough\'s test. This page covers general maths tuition for every age.' },
      { q: 'Are you connected with the London Maths Hubs or the Royal Institution?', a: 'No. We describe their public activities so families know about them. We have no link with the NCETM, any Maths Hub, the Royal Institution, TfL or any London school.' },
      { q: 'Do you promise particular grades?', a: 'No. We teach carefully and report progress honestly, but no tutor can promise an exam grade and we do not.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Further reading',
    h2: 'More maths and coding pages for London',
    lede: 'Our national maths pages by stage, our London coding page and the UK index.',
    items: [
      { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition', p: 'Our national GCSE page, by board and tier.' },
      { href: '/a-level-maths-tuition-online', label: 'A level maths tuition', p: 'Pure maths, statistics and mechanics.' },
      { href: '/ks3-maths-tuition-online', label: 'KS3 maths', p: 'Years 7 to 9, where GCSE success is really decided.' },
      { href: '/best-coding-class-in-london', label: 'Coding classes in London', p: 'Our London page for coding and AI.' },
      { href: '/maths-tuition-in-birmingham', label: 'Maths tuition in Birmingham', p: 'The same approach, with a Birmingham canal project.' },
      { href: '/coding-classes-in-united-kingdom', label: 'The UK index', p: 'Every nation, city, town and maths page we have.' }
    ]
  },

  start: {
    h2: 'Book a free maths lesson for a London learner',
    lede: 'Tell us the learner\'s age or school year, the exam board if there is one, and the topic that worries them most. The first lesson is a real lesson, and afterwards we tell you honestly where things stand.',
    readFirst: 'Want to look around first? Browse the <a class="ag-inline-link" href="/courses">course list</a> or read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>.',
    note: 'WhatsApp is the quickest way to reach us. The number has an Indian country code because our team is in India; there is no London office and every lesson is online.',
    formNote: 'No card details needed. We reply to agree a time that works for you.'
  },

  footer: {
    cols: [
      { h4: 'Maths by stage', links: [
        { href: '/ks2-maths-tuition-online', label: 'KS2 maths tuition' },
        { href: '/gcse-maths-tuition-online', label: 'GCSE maths tuition' },
        { href: '/further-maths-tuition-online', label: 'Further Maths tuition' },
        { href: '/functional-skills-maths-tuition-online', label: 'Functional Skills maths' }
      ] },
      { h4: 'London and the UK', links: [
        { href: '/best-coding-class-in-london', label: 'Coding in London' },
        { href: '/11-plus-maths-tuition-barnet', label: '11 plus maths in Barnet' },
        { href: '/maths-tuition-in-manchester', label: 'Maths tuition in Manchester' },
        { href: '/coding-classes-in-united-kingdom', label: 'UK index' }
      ] }
    ],
    bottomRight: 'London maths, taught live online'
  },

  personalityCss: `
.ag-root.ag-mld .ag-hero h1 { letter-spacing: -0.018em; }
.ag-root.ag-mld .ag-capsule { border-left-width: 4px; }
.ag-root.ag-mld .ag-section-head h2 { max-width: 26ch; }
.ag-root.ag-mld .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-mld .ag-table td:last-child { font-variant-numeric: tabular-nums; }
.ag-root.ag-mld .ag-spec dt { letter-spacing: 0.1em; }
.ag-root.ag-mld .ag-three h3 { letter-spacing: -0.004em; }
.ag-root.ag-mld .ag-slots { gap: 0.9rem; }
`,

  mustMention: ['London Central and North West Maths Hub', 'Royal Avenue 1', 'Jubilee Plaza', '26.29 docks', '28.67 docks', 'Belleville Primary and Chesterton Primary', 'Fox Primary School', 'Elmhurst Primary School', 'Redriff Primary School'],

  dossier: {
    curriculumAuthority: 'National curriculum for England (DfE); GCSE mathematics subject content (DfE, 2013), statistics item 1 on sampling; multiplication tables check (gov.uk). London schools are served by six NCETM Maths Hubs listed on ncetm.org.uk.',
    localProject: 'TfL Unified API BikePoint, 1 October 2026: NbDocks mean 26.29, median 24, sd 8.55, min 10 (Royal Avenue 1, Chelsea), max 63 (Jubilee Plaza, Canary Wharf). Rings from a Trafalgar Square point: <3 km 299 stations mean 25.16; 3-6 km 349 mean 26.21; >=6 km 153 mean 28.67. 10,000 samples of 40: SRS 55.1% within 1 dock (90%: 24.18-28.55), stratified 55.2%, convenience inner-only 39.0% (centred 25.15), systematic by terminal number 80.0% (sd 0.98 vs 1.32).',
    requiredMentions: ['London Central and North West Maths Hub', 'Royal Avenue 1', 'Jubilee Plaza', '26.29 docks', '28.67 docks', 'Belleville Primary and Chesterton Primary', 'Fox Primary School', 'Elmhurst Primary School', 'Redriff Primary School'],
    sources: [
      { claim: 'NCETM current Maths Hubs and the London hub pages: lead schools and council areas for the London hubs.', url: 'https://www.ncetm.org.uk/maths-hubs/find-your-hub/current-maths-hubs/' },
      { claim: 'Royal Institution, Ri Masterclasses: London origins in 1981, London series administered by the Ri, free, by teacher nomination, usually ages 9/10 and 13/14.', url: 'https://www.rigb.org/learning/ri-masterclasses' },
      { claim: 'TfL Unified API BikePoint: docking stations with NbDocks and positions (Powered by TfL Open Data).', url: 'https://api.tfl.gov.uk/BikePoint' },
      { claim: 'DfE GCSE mathematics subject content: "infer properties of populations or distributions from a sample, whilst knowing the limitations of sampling".', url: 'https://www.gov.uk/government/publications/gcse-mathematics-subject-content-and-assessment-objectives' },
      { claim: 'gov.uk: the multiplication tables check is statutory for year 4 pupils at state-funded schools in England.', url: 'https://www.gov.uk/government/collections/multiplication-tables-check' }
    ],
    rejectedClaims: [
      'A total number of docks or bikes for London: live counts change and TfL publishes its own network figures, so no sum of the list is printed.',
      'Why the systematic sample outperforms: not verified, printed only as a labelled guess.',
      'Any statement on London exam results, school rankings or borough performance: excluded by the spec.',
      'That the Maths Hubs, the Ri or TfL endorse or work with us.',
      'Named Maths Hub or Ri staff: not printed.'
    ]
  }
};
