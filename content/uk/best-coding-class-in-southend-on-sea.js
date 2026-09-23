'use strict';
// Southend-on-Sea (cg- city page, UK cluster Phase 4). Spine: when exactly was high water? Sub-sample peak finding
// (three-point parabola), Newton's method against bisection, and data checks on the Environment Agency Southend tide
// gauge, flood-monitoring station 0019, measure 0019-level-tidal_level-i-15_min-mAOD, 25 August 00:00 to 23 September
// 04:00 UTC 2026 (2,801 slots, 7 missing, 1 double-valued reading at 11:45 on 15 September dropped: 2,793 used),
// read 23 September 2026 (scratchpad sos/hw.py). Second feed E22944 at the same point (TQ 89070 83023): median
// difference 0.008 m, 4 readings more than 0.2 m apart, e.g. 3.013 against -1.761 at 20:30 UTC 28 August. 56 high
// and 56 low waters. Highest reading 3.343 m AOD at 01:45 UTC 13 September (refined 3.34 at about 01:38); lowest
// -2.772 at 20:00 UTC 12 September; range from previous low 6.11 m (13 September) down to 1.98 m (21 September);
// median time between high waters 745.3 minutes. Refinement: cubic fit over plus or minus one hour on 15-minute
// data, peak by Newton's method on the derivative, median 2 iterations (max 3) to one second; bisection median 13
// halvings. Hourly thinning test (four phases, 222 comparisons against the 15-minute refined time): highest hourly
// reading median 15.2 minutes off (max 31.6), height median 0.020 m low (max 0.142); three-point parabola median 1.0
// minute (max 4.0), height median 0.006 m (max 0.063); cubic over plus or minus two hours with Newton median 3.7.
// Lesson family: sub-sample peak interpolation and root finding (parabolic vertex, Newton against bisection,
// convergence, validation by thinning, cross-checking a second feed). Screened 23 September 2026: Newton's method,
// parabolic interpolation 0 hits; bisection appears only as a side step on the Durham page.
// Place facts read raw 23 September 2026: Census 2021 via Nomis, Southend-on-Sea E06000033: TS001 180,686 usual
// residents, 178,647 in households, 2,039 communal; TS007A 11,154 aged 10 to 14 (6.2 percent, England 6.0), 9,356 aged
// 20 to 24 (5.2, England 6.0), 4,978 aged 85 and over (2.8, England 2.4); TS068 31,766 students of 170,444 aged 5 and
// over (18.6 percent, England 20.4); TS006 4,335.6 per square km (England 433.5). Southend Pier website (Southend-on-Sea
// City Council): longest pleasure pier in the world, stretches 1.33 miles into the Thames Estuary; 1829 pier campaign
// so boats could reach Southend at all tides, first Pier Act royal assent 14 May 1829; June 1830 a 600 foot wooden
// pier, still too short to be usable at low tide; by 1833 extended to 1,800 feet; 1846 just over a mile; iron pier
// completed 1889; 1890 single track electric railway, first pier railway in the country; 1898 extension made it the
// longest pleasure pier in the world. NHLE: Pleasure Pier 1112705 Grade II, listed 19 December 1973; The Kursaal
// 1236532 Grade II, listed 8 April 1994. GOV.UK List of Cities (29 August 2022) includes Southend-on-Sea. Places in
// OS Open Names (Southend-on-Sea): Leigh-on-Sea, Westcliff-on-Sea, Prittlewell, Southchurch, Thorpe Bay, Shoeburyness,
// Eastwood.

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'city', tag: 'SOUTHEND-ON-SEA', blurb: 'The city with the world\'s longest pleasure pier, and a project that pins down the minute of high water from readings taken every fifteen.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'best-coding-class-in-southend-on-sea',
  code: 'sos',
  accent: '#173B45',
  accentRationale: 'Southend-on-Sea: an estuary slate for the Thames at low water, from the solver (9.75:1 on every paper tint, dE 6.4 from the nearest used accent)',
  pageType: 'city',
  place: {
    name: 'Southend-on-Sea',
    eyebrow: 'Southend-on-Sea, Essex',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Southend-on-Sea' },
      { type: 'AdministrativeArea', name: 'Essex' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }],
  nav: [
    { label: 'United Kingdom', href: '/coding-classes-in-united-kingdom' },
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Southend-on-Sea, England',
  title: 'Best Coding Classes in Southend-on-Sea | Modern Age Coders',
  description: 'Live online coding, Python, AI and maths lessons for Southend-on-Sea learners aged 6 to 67, from Leigh-on-Sea to Shoeburyness. The first lesson is free.',
  ogDescription: 'Coding and AI lessons for Southend-on-Sea, on a page that finds the minute of high water at Southend from tide readings taken every fifteen minutes.',
  twitterDescription: 'Learners in Southend-on-Sea aged six to sixty-seven can study coding, Python and AI with us in live online lessons, with the first one free.',
  ogImageCourse: 'python-complete-masterclass-teens',
  verifiedOn: '23 September 2026',
  courseSchema: {
    name: 'Southend-on-Sea Online Coding, Maths and AI Lessons',
    description: 'Coding, Python, numerical methods, AI and mathematics taught live online in English to Southend-on-Sea children, teenagers and adults, one to one or in small groups by level.'
  },

  h1: 'Coding classes in Southend-on-Sea',
  capsuleQ: 'What are the best coding classes in Southend-on-Sea?',
  capsule: 'At the 2021 census, 180,686 people lived in Southend-on-Sea, at 4,335.6 residents per square kilometre against 433.5 for England as a whole. The council\'s pier website says Southend Pier stretches 1.33 miles into the Thames Estuary, the longest pleasure pier in the world. Learners in Southend-on-Sea aged six to sixty-seven join our teachers in India on live video, either one to one or in a group of five to ten at a matching level, at times that suit British school and working days. The first lesson is free; after it, a group place costs USD 100 a month and private lessons USD 150.',
  lead: 'Southend\'s tide gauge reports the water level every fifteen minutes, but high water does not wait for the next reading. Over four weeks of 2026 our teenagers found 56 high tides and asked when each one really peaked. Taking the highest reading is the obvious answer, and a poor one: thin the data to hourly readings and it misses the time found from the full record by a median of 15.2 minutes. Fit a parabola through the top three readings and use its vertex instead, and the median miss falls to 1.0 minute. Then they compare two ways of finding where a curve levels off: Newton\'s method gets there in two steps, bisection in thirteen.',
  wa: 'Hello Modern Age Coders, I would like to arrange a free coding lesson for a learner in Southend-on-Sea.',

  picks: {
    eyebrow: 'Course picks for Southend-on-Sea',
    h2: 'Four courses for the pier city',
    intro: 'Choose by what the learner already enjoys doing. A free live lesson starts every course, and there is no card to enter when you book it.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 12', note: 'Block programming for younger children, the first step before programs that guess a hidden number by halving the range each time.' },
      { course: 'python-complete-masterclass-teens', band: 'Ages 13 to 18', note: 'Python from a first program to full projects, with the grounding to read tide readings and fit curves through them.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 13', note: 'Mathematics explored in code, where halving a range or finding the biggest value becomes something a learner can compute and test.' },
      { course: 'python-ai-automation-masterclass-college', band: 'University and adult', note: 'Python for adults who work with measurements and need values between the readings, not just at them.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Southend-on-Sea today',
      h2: 'A seaside city packed along the shore',
      intro: 'Census 2021 figures for the Southend-on-Sea unitary authority, published by the Office for National Statistics on Nomis.',
      body: [
        { kind: 'table', caption: 'Southend-on-Sea, Census 2021', head: ['Measure', 'Southend-on-Sea', 'England'], rows: [
          ['Usual residents', '180,686', '56,490,048'],
          ['Living in households', '178,647', 'Not compared'],
          ['Living in communal establishments', '2,039', 'Not compared'],
          ['Aged 10 to 14', '11,154 (6.2%)', '6.0%'],
          ['Aged 20 to 24', '9,356 (5.2%)', '6.0%'],
          ['Aged 85 and over', '4,978 (2.8%)', '2.4%'],
          ['Students among residents aged 5 and over', '31,766 (18.6%)', '20.4%'],
          ['Usual residents per square kilometre', '4,335.6', '433.5']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Very densely built', p: 'Southend-on-Sea had 4,335.6 residents per square kilometre in 2021, a long, continuous strip of town running along the estuary shore.' },
          { h3: 'School-age children', p: 'Children aged 10 to 14 were 6.2% of residents, slightly above England\'s 6.0%, while people aged 20 to 24 were fewer, 5.2% against 6.0%.' },
          { h3: 'All ages together', p: 'Residents aged 85 and over made up 2.8%, above the national 2.4%, and 31,766 of the 170,444 residents aged five and over were in education.' }
        ] },
        { kind: 'p', text: 'Our Southend-on-Sea groups take in that whole range. A Year 4 pupil in Shoeburyness might be making a first game, a Year 12 student in Westcliff-on-Sea tackling A level Computer Science, and a retired engineer in Leigh-on-Sea learning Python to explore data, each placed in a small group at the right level.' }
      ]
    },
    {
      id: 'heritage', tint: 'tint', eyebrow: 'The pier',
      h2: 'A pier built longer and longer to beat the tide',
      intro: 'From the pier\'s own history pages, run by Southend-on-Sea City Council, and from Historic England\'s open listing data.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1829 to 1846', p: 'The first Pier Act received royal assent on 14 May 1829 so that boats could reach Southend at all tides. A 600 foot wooden pier opened in June 1830, still too short at low tide; by 1833 it was 1,800 feet, and by 1846 just over a mile.' },
          { h3: '1889 and 1890', p: 'A new iron pier was completed in 1889, and in 1890 a single track electric railway began to run along it, which the pier\'s history describes as the first pier railway in the country.' },
          { h3: '1898 onwards', p: 'An extension in 1898 made Southend Pier the longest pleasure pier in the world. It now reaches 1.33 miles into the Thames Estuary, and Historic England lists it at Grade II.' }
        ] },
        { kind: 'p', text: 'The pier\'s story is really a story about the tide. Each extension was an answer to one question: how far out do you have to go before there is still water at low tide? Historic England also lists the Kursaal on the seafront at Grade II, and the government\'s List of Cities, published in 2022, includes Southend-on-Sea. We have no connection with Southend-on-Sea City Council, the pier or Historic England; we use the tide because it is the reason the pier looks the way it does, and because it produces a clean, repeating signal that is perfect for learning numerical methods.' },
        { kind: 'spec', title: 'Where the tide readings come from', p: 'The Environment Agency\'s real-time flood monitoring service publishes the Southend tide gauge every 15 minutes, as height in metres above Ordnance Datum Newlyn, with times in UTC. The service keeps roughly the last four weeks.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'When exactly was high water?',
      intro: 'A gauge that reads every 15 minutes, or every hour, almost never samples the exact top of the tide. Numerical methods estimate what happened between the readings.',
      body: [
        { kind: 'table', caption: 'Southend tide gauge, 25 August to 23 September 2026: 56 high waters, readings thinned to hourly in four ways (222 cases), scored against the full 15-minute record', head: ['Method on hourly readings', 'Median error in time', 'Largest error in time', 'Median error in height'], rows: [
          ['Take the highest reading', '15.2 minutes', '31.6 minutes', '0.020 metres'],
          ['Vertex of a parabola through the top three', '1.0 minute', '4.0 minutes', '0.006 metres'],
          ['Cubic over four hours, peak by Newton\'s method', '3.7 minutes', '9.7 minutes', 'Not measured']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: '1. Find the tides', p: 'Scan 2,793 readings for points higher than the two on either side, and merge any found less than eight hours apart. That gives 56 high waters in four weeks.' },
          { h3: '2. Estimate the peak', p: 'Near its top, a tide curve looks like an upside-down parabola. Fit one through three readings and its vertex gives a time and height between them.' },
          { h3: '3. Test it honestly', p: 'We have no second clock, so we make one. Keep only every fourth reading, estimate each peak from those, and compare with the estimate from all the readings.' }
        ] },
        { kind: 'callout', h3: 'Two steps against thirteen', p: 'Finding a peak means finding where the curve\'s slope is zero, a root-finding problem. Bisection keeps halving an interval known to contain the root and needed a median of 13 halvings to pin each high water to one second. Newton\'s method follows the slope of the slope and needed a median of 2 steps, never more than 3. It is faster because it uses more information, and it can fail badly if started in the wrong place, which is why the code checks every answer against the readings.' },
        { kind: 'p', text: 'One result surprised the class. A smooth cubic curve fitted over four hours of hourly readings did worse than the simple parabola through three, a median of 3.7 minutes out, because a tide rises and falls at different speeds and a wide window blends in the wrong shape. The tides themselves ranged from 6.11 metres between low and high water on 13 September, when the highest reading reached 3.343 metres above Ordnance Datum, down to 1.98 metres on 21 September, and the median time between one high water and the next was 745.3 minutes.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Between the readings',
      h2: 'Five checks before trusting a value between samples',
      intro: 'Practised on the Southend tide, then used on engineering data such as vibration sensors, audio pitch, GPS tracks, satellite orbits and any signal sampled less often than it changes.',
      body: [
        { kind: 'table', caption: 'Checks behind a sub-sample estimate', head: ['Check', 'For the Southend tide', 'What goes wrong without it'], rows: [
          ['Is there a second source?', 'Two feeds from the same gauge compared', 'A bad reading taken as a real high water'],
          ['Are there gaps or doubles?', '7 missing slots; 1 reading with two values dropped', 'A curve fitted across a hole in the data'],
          ['What shape is assumed?', 'A parabola, only near the top', 'A model stretched far beyond where it fits'],
          ['How is it tested?', 'Thin the data, then score against the full record', 'A method that only looks accurate'],
          ['Does the solver converge?', 'Newton checked against bisection', 'A fast method quietly finding the wrong root']
        ] },
        { kind: 'p', text: 'The first row mattered more than expected. The gauge publishes two feeds, and they usually agree to within a centimetre, a median difference of 0.008 metres. But at four moments one feed differed from the other by more than 20 centimetres, including a reading of 3.013 metres at 20:30 UTC on 28 August when the other feed, and the tide, stood near minus 1.8. Left in, that single number would have looked like a high tide arriving in the middle of a low one.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Younger learners', p: 'Guessing a hidden number between 1 and 100 by halving the range each time, and counting how many guesses it takes.' },
          { h3: 'Teenagers', p: 'Tide readings in Python, peak finding, a parabola vertex, Newton\'s method against bisection, and a thinning test to score each method.' },
          { h3: 'Adults', p: 'Estimating values between measurements at work, with the assumed shape and the test written down beside every result.' }
        ] },
        { kind: 'p', text: 'We are not connected with the Environment Agency, Southend-on-Sea City Council, Southend Pier or Historic England. The readings, census tables and listing records are open data; the peaks, fits and error scores on this page are our own calculations.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From halving a guess to Newton\'s method',
    intro: 'The age bands are only a guide; the free lesson finds the right starting point.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Guess and halve', p: 'Number-guessing games where each clue halves the range, and counting how many guesses the smartest strategy needs.', courses: ['scratch-programming-complete-course', 'problem-solving-and-computational-thinking-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Curves from points', p: 'Plotting readings in Python and drawing a parabola through three points to see where it peaks.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Roots and peaks', p: 'Bisection and Newton\'s method in Python, a parabola vertex from real tide readings, and a fair test of every method.', courses: ['python-complete-masterclass-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Measurements at work', p: 'Estimating peaks, crossings and in-between values from sampled data, with the assumptions and checks stated plainly.', courses: ['python-ai-automation-masterclass-college', 'data-science-complete-masterclass-college'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'AI models are trained by numerical methods. Why should a Southend-on-Sea teenager write one by hand?',
    intro: 'Because every model is a root-finding or peak-finding problem underneath, and knowing how those methods fail is what makes a result trustworthy.',
    p1: 'Training a neural network means searching for the point where an error curve stops falling, the same kind of problem as finding the top of a tide. A learner who has watched Newton\'s method land in two steps, and knows it can also leap to a wrong answer from a bad start, understands why training needs careful step sizes and checks.',
    p2: 'The tide project also teaches the habit of testing against something you can trust. Thinning the readings and scoring each method against the full record is the same idea as holding back test data in machine learning. Doing it by hand, on the water that shaped Southend, makes the idea stick.',
    closer: 'So a Southend-on-Sea teenager should still learn to program in 2026, beside a pier that was built longer each time the tide won: tools will keep getting faster, but somebody has to know what happens between the readings.',
    blogAnchor: 'why coding is worth learning in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Leigh-on-Sea, Southchurch or Thorpe Bay, straight from home',
    intro: 'The city runs along the estuary from Leigh-on-Sea in the west to Shoeburyness in the east. Online, every part of it is the same distance from the lesson.',
    cells: [
      { h3: 'One class along the shore', p: 'A learner in Eastwood and another in Thorpe Bay can join the same lesson without a trip along the seafront.' },
      { h3: 'English school stages', p: 'Teaching follows the stages used in Southend-on-Sea schools, from Reception and Key Stages 1 to 4 through GCSE and A level, all in English.' },
      { h3: 'A lesson, start to finish', p: 'The free session teaches a real task and ends with our suggested level, course and weekly time. We never ask for card details.' },
      { h3: 'Levels, not postcodes', p: 'Five to ten learners at the same stage, from Southend-on-Sea, across the UK and abroad, so there are workable times at every level.' },
      { h3: 'Two lessons each week', p: 'Two set lessons weekly, about eight a month, with holidays and exam weeks planned with the teacher in good time.' },
      { h3: 'Late evenings in India', p: 'A 4 pm lesson in Southend-on-Sea starts at 8.30 pm in India during British Summer Time and 9.30 pm in winter, because India stays on one time all year; our teachers arrange their evenings for UK learners.' }
    ],
    spec: { title: 'Around south Essex', p: 'Families in Rochford, Rayleigh, Hadleigh or Benfleet join the very same classes, as lessons are online and every group is set by level.' }
  },

  fees: {
    h2: 'Southend-on-Sea lesson fees',
    intro: 'A free lesson first, then one fee each month.',
    first: 'A full lesson free of charge, ending with advice on level, course and a weekly slot.',
    group: 'About eight live lessons a month in a class of five to ten learners at the same stage.',
    private: 'About eight live lessons a month, with the teacher concentrating on your learner alone.',
    closer: 'Prittlewell families are charged in US dollars just like every family outside India, and our site shows no pound prices at all. The free lesson always comes before any bill, and charging begins only when a course and weekly time are settled; the pricing page explains pausing, missed lessons and moving between group and private teaching.'
  },

  reviewsH2: 'Six families\' Google reviews, exactly as posted',

  book: {
    h2: 'Book a free lesson for a Southend-on-Sea learner',
    intro: 'The first task suits the learner: a halving guessing game for a young child, a short Python program that finds the biggest number in a list for a beginner, or the Southend tide readings and a parabola for a teenager ready for real data.',
    success: 'Thank you. We will be in touch soon to set up a lesson for your Southend-on-Sea learner.'
  },

  faq: {
    h2: 'Southend-on-Sea coding class questions',
    intro: 'What Southend-on-Sea families ask us most.',
    items: [
      { q: 'How many people live in Southend-on-Sea?', a: 'The 2021 census counted 180,686 usual residents in the Southend-on-Sea unitary authority: 178,647 in households and 2,039 in communal establishments.' },
      { q: 'How does Southend-on-Sea compare with England?', a: 'It is very densely built, with 4,335.6 residents per square kilometre against England\'s 433.5. It has slightly more children aged 10 to 14 (6.2% against 6.0%) and more people aged 85 and over (2.8% against 2.4%).' },
      { q: 'What is Newton\'s method?', a: 'A way of finding where a function equals zero by repeatedly following its tangent line to the axis. Near a good starting point it closes in very fast, but from a poor start it can jump away, so its answers need checking.' },
      { q: 'Why not just take the highest tide reading?', a: 'Because the true peak usually falls between readings. On hourly readings from the Southend gauge, the highest reading missed the time of high water by a median of 15.2 minutes, while the vertex of a parabola through the top three readings missed by a median of 1.0 minute.' },
      { q: 'Where do the tide readings come from?', a: 'From the Environment Agency\'s free real-time flood monitoring service, which publishes the Southend tide gauge every 15 minutes in metres above Ordnance Datum. We used 25 August to 23 September 2026.' },
      { q: 'Why is Southend Pier so long?', a: 'Its history page says the pier was first built so boats could reach Southend at all tides, and that the 1830 pier was still too short to use at low tide. It was extended again and again, and now stretches 1.33 miles. We are not connected with the pier.' },
      { q: 'When do Southend-on-Sea lessons run?', a: 'After school, on weekday evenings or at weekends, at a UK time we settle together in the free lesson. India is four and a half hours ahead of Southend-on-Sea in summer and five and a half hours ahead in winter.' },
      { q: 'Can we visit you in Southend-on-Sea?', a: 'No. There is no Southend-on-Sea centre and we have no premises anywhere in the UK, as every lesson is live online. A learner needs a computer with sound and a reliable internet connection, and our phone number is Indian.', boiler: true },
      { q: 'What do lessons cost for a Southend-on-Sea learner?', a: 'The first lesson is free. After that, a group place is USD 100 a month for two live lessons a week, about eight a month, with five to ten learners; one-to-one lessons on the same timetable cost USD 150 a month. We agree the course, format and time before charging anything.', boiler: true },
      { q: 'How is a learner\'s group chosen?', a: 'By level, pace and goals rather than age or address, with five to ten learners working at one stage. Where no group fits the learner\'s week, we offer one-to-one lessons.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore England and the UK',
    h2: 'Essex, the coast and beyond',
    html: 'Inland, the <a class="cg-inline-link" href="/best-coding-class-in-chelmsford">Chelmsford page</a> squeezes a year of river readings with a compressor learners write themselves. On the other side of England, <a class="cg-inline-link" href="/best-coding-class-in-liverpool">Liverpool</a> reads its tide as a sum of waves, and <a class="cg-inline-link" href="/best-coding-class-in-brighton-and-hove">Brighton and Hove</a> slides a window along a year of seaside ozone. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England guide</a> covers school stages, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK coding page</a> links every other city.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Southend-on-Sea and the UK',
  footerPlaces: [
    { href: '/best-coding-class-in-chelmsford', label: 'Chelmsford' },
    { href: '/best-coding-class-in-liverpool', label: 'Liverpool' },
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/coding-classes-in-united-kingdom', label: 'UK hub' }
  ],

  personalityCss: `
.cg-root.cg-sos .cg-hero-grid { align-items: end; gap: clamp(1rem, 2.8vw, 2.3rem); }
.cg-root.cg-sos .cg-hero h1 { font-weight: 700; letter-spacing: -0.022em; line-height: 1.06; }
.cg-root.cg-sos .cg-capsule { border-bottom: 3px solid var(--cg-accent); padding-bottom: 1rem; }
.cg-root.cg-sos .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-sos .cg-section-head h2 { max-width: 33ch; letter-spacing: -0.016em; }
.cg-root.cg-sos .cg-grid-3 { gap: clamp(1rem, 2.3vw, 2.05rem); }
.cg-root.cg-sos .cg-table th { letter-spacing: 0.028em; }
.cg-root.cg-sos .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-sos .cg-ladder-col { border-left: 4px solid var(--cg-accent); padding-left: 0.85rem; }
.cg-root.cg-sos .cg-callout { border-left-width: 5px; }
`,

  dossier: {
    curriculumAuthority: 'Southend-on-Sea, Census 2021 via Nomis (E06000033): TS001 180,686 usual residents, 178,647 in households, 2,039 in communal establishments; TS007A 11,154 aged 10 to 14 (6.2 percent, England 6.0), 9,356 aged 20 to 24 (5.2 percent, England 6.0), 4,978 aged 85 and over (2.8 percent, England 2.4); TS068 31,766 students of 170,444 residents aged 5 and over (18.6 percent, England 20.4); TS006 4,335.6 usual residents per square kilometre (England 433.5). Southend Pier website (Southend-on-Sea City Council): 1.33 miles, longest pleasure pier in the world; first Pier Act 14 May 1829 so boats could reach Southend at all tides; 600 foot wooden pier June 1830 too short at low tide; 1,800 feet by 1833; just over a mile by 1846; iron pier 1889; first pier railway in the country 1890; 1898 extension. NHLE: Pleasure Pier 1112705 and The Kursaal 1236532, Grade II. GOV.UK List of Cities 2022.',
    localProject: 'When exactly was high water? EA flood monitoring, Southend tide gauge 0019, 15-minute mAOD, 25 August to 23 September 2026: 2,793 readings used (7 missing, 1 double-valued dropped); 56 high waters. Hourly thinning (222 cases): highest reading median 15.2 min off (max 31.6), height 0.020 m low; three-point parabola median 1.0 min (max 4.0), height 0.006 m; cubic over 4 hours with Newton 3.7 min. Newton median 2 iterations (max 3) against bisection 13 to one second. Second feed E22944: median difference 0.008 m, 4 readings over 0.2 m apart (3.013 against -1.761 at 20:30 UTC 28 August). Highest 3.343 m AOD 13 September; lowest -2.772 on 12 September; range 6.11 to 1.98 m; median interval 745.3 min. Lesson family: sub-sample peak interpolation and root finding.',
    requiredMentions: [
      '180,686',
      '178,647',
      '4,335.6',
      '31,766',
      '170,444',
      'Kursaal',
      'Leigh-on-Sea',
      'Shoeburyness',
      'Westcliff',
      'Prittlewell',
      'pier railway',
      '15.2 minutes'
    ],
    sources: [
      { claim: 'Nomis, Census 2021 TS001, Southend-on-Sea: 180,686 usual residents; 178,647 in households; 2,039 in communal establishments.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2021_1.data.csv?geography=E06000033' },
      { claim: 'Nomis, Census 2021 TS007A: Southend-on-Sea and England five-year age bands.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2020_1.data.csv?geography=E06000033,E92000001' },
      { claim: 'Nomis, Census 2021 TS068: Southend-on-Sea 31,766 students of 170,444 aged 5 and over (18.6 percent); England 20.4 percent.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2085_1.data.csv?geography=E06000033,E92000001' },
      { claim: 'Nomis, Census 2021 TS006: population density, Southend-on-Sea 4,335.6 per square kilometre.', url: 'https://www.nomisweb.co.uk/api/v01/dataset/NM_2026_1.data.csv?geography=E06000033,E92000001' },
      { claim: 'Environment Agency real-time flood monitoring, Southend tide gauge 0019, 15-minute tidal level in mAOD; second feed E22944.', url: 'https://environment.data.gov.uk/flood-monitoring/id/measures/0019-level-tidal_level-i-15_min-mAOD' },
      { claim: 'Southend Pier website, home page: longest pleasure pier in the world, 1.33 miles into the Thames Estuary; 1889, 1890, 1898.', url: 'https://www.southendpier.co.uk/' },
      { claim: 'Southend Pier website, Pier History: 1829 Pier Act (14 May), boats at all tides; 1830 wooden pier too short at low tide; 1833, 1846 extensions; first pier railway 1890.', url: 'https://www.southendpier.co.uk/history' },
      { claim: 'Historic England NHLE open data: Pleasure Pier 1112705 and The Kursaal 1236532, both Grade II.', url: 'https://historicengland.org.uk/listing/the-list/list-entry/1112705' },
      { claim: 'GOV.UK, List of Cities (29 August 2022): Southend-on-Sea listed.', url: 'https://www.gov.uk/government/publications/list-of-cities' }
    ],
    rejectedClaims: [
      'A ground truth for the time of high water: the one-minute Southend feed stopped in November 2021, so methods are scored against the full 15-minute record after thinning.',
      'The circumstances of the 2021 city status announcement: involve a crime and are excluded by the cluster rules; only the List of Cities is cited.',
      'Pier construction costs quoted on the pier website: money data, excluded.',
      'The E22944 feed as primary: 4 readings differ from station 0019 by more than 0.2 metres, including an impossible 3.013 metres near low water; station 0019 is used and the difference is reported.',
      'Southend-on-Sea City Council pier pages under gov.uk paths: returned 404; the council-run pier website is used instead.',
      'Nationality, ethnicity, religion, birthplace and economic figures; crime, league tables, health and money data: excluded by the cluster rules.',
      'Any affiliation with the Environment Agency, Southend-on-Sea City Council, Southend Pier or Historic England.'
    ]
  }
};
