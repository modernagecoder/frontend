'use strict';
// Yorkshire and the Humber (region index, UK cluster Phase 7, row 311). ONS region E12000003. Spine: is the coast warmer
// than the hills, or is height hiding the real pattern? Data (downloaded raw 26 September 2026): Met Office historic station
// data: whitbydata.txt ("Whitby Coastguard / Whitby(from 2000 ...)"; "Location until Dec 1999 490400E 511400N 60m amsl & from
// 2000 489100E 510400N, Lat 54.481 Lon -0.624 41m amsl"), bradforddata.txt ("Lat 53.813 Lon -1.772, 134 metres amsl"),
// sheffielddata.txt ("Lat 53.381 Lon -1.490, 131 metres amsl"). Mean = (tmax + tmin) / 2.
// Window 2000 to 2020 so Whitby stays on one site (1991-99 at the old 60 m site averaged 9.45 over 106 months; mixing sites
// would blur the comparison). Our sums 2000-2020: Whitby 251 months (2000-11 missing) 10.06; Bradford 252 months 9.86;
// Sheffield 252 months 10.44. Adjusted to sea level with a standard 0.65 C per 100 m (general textbook figure): Whitby 10.33,
// Bradford 10.74, Sheffield 11.29. Raw order Sheffield > Whitby > Bradford; adjusted order Sheffield > Bradford > Whitby,
// the same as south-to-north latitude. Slip: 0.65 per metre adds 87.1 C to Bradford.
// Lesson family: adjusting for a known factor (lapse rate) before ranking; unit slip; site changes; screened (lapse rate,
// adjusted for height, reduce to sea level: 0 hits; Bradford and Sheffield city pages used rain walk and regression only).
// Region facts: ONS Census 2021 TS001 via Nomis TYPE480: Yorkshire and The Humber 5,480,774. ONS LAD22 to RGN22: 21 local
// authorities. ONS Census 2021 BUAs wholly in region: Leeds 536,280; Bradford 333,950; Kingston upon Hull 270,810; York
// 141,685; Huddersfield 141,675; Wakefield 97,870; Halifax 88,115; Doncaster 87,455; Grimsby 85,925; Scunthorpe 81,265;
// Harrogate 75,515; Rotherham 71,535; Barnsley 71,405; Dewsbury 63,720. Sheffield and Darlington BUAs are Part, omitted.

const AREAS = [['Bradford', 'best-coding-class-in-bradford'], ['Doncaster', 'best-coding-class-in-doncaster'], ['the East Riding of Yorkshire', 'coding-classes-in-east-riding-of-yorkshire'],
  ['Hull', 'best-coding-class-in-hull'], ['Leeds', 'best-coding-class-in-leeds'], ['North Yorkshire', 'coding-classes-in-north-yorkshire'],
  ['Ripon', 'best-coding-class-in-ripon'], ['Sheffield', 'best-coding-class-in-sheffield'], ['South Yorkshire', 'coding-classes-in-south-yorkshire'],
  ['Wakefield', 'best-coding-class-in-wakefield'], ['West Yorkshire', 'coding-classes-in-west-yorkshire'], ['York', 'best-coding-class-in-york']];

function linkedAreas() {
  const built = new Set(require('../../scripts/nl/lib/uk-index.js').builtUkPages().map(p => p.slug));
  return AREAS.map(([name, slug]) => built.has(slug) ? `<a class="cg-inline-link" href="/${slug}">${name}</a>` : name).join(', ');
}

module.exports = {
  clusterName: 'United Kingdom',
  hub: { group: 'region', tag: 'YORKSHIRE AND THE HUMBER', label: 'Yorkshire and the Humber', blurb: 'Every Yorkshire and Humber county and city page in one index, and a Whitby, Bradford and Sheffield lesson on adjusting for height.' },
  market: { iso: 'GB', dial: '+44', name: 'United Kingdom', locale: 'en_GB', geoRegion: 'GB', phoneLabel: 'UK mobile number', phonePlaceholder: '7700 900123', gradeLabel: 'School year or age', minDigits: 10, stripTrunk: true },
  slug: 'coding-and-ai-classes-in-yorkshire-and-the-humber',
  code: 'ryh',
  accent: '#5C1F7A',
  accentRationale: 'Yorkshire and the Humber: a moorland-heather violet from the solver (8.76:1 on the darkest paper tint)',
  pageType: 'governorate',
  place: {
    name: 'Yorkshire and the Humber',
    eyebrow: 'Yorkshire and the Humber',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'AdministrativeArea', name: 'England' },
      { type: 'Country', name: 'United Kingdom' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-united-kingdom', name: 'United Kingdom' }, { slug: 'coding-and-ai-classes-in-england', name: 'England' }],
  nav: [
    { label: 'England', href: '/coding-and-ai-classes-in-england' },
    { label: 'Leeds', href: '/best-coding-class-in-leeds' },
    { label: 'Courses', href: '/courses' }
  ],
  routeLabel: 'Yorkshire and the Humber',
  title: 'Coding and AI Classes in Yorkshire and the Humber | 6 to 67',
  description: 'Live online coding, AI, Python and maths classes across Yorkshire and the Humber, with pages for Leeds, Sheffield, Bradford, Hull, York and all four counties.',
  ogDescription: 'Coding and AI classes for Yorkshire and the Humber, and a Met Office project: adjust Whitby, Bradford and Sheffield temperatures for height in Python and watch the ranking flip.',
  twitterDescription: 'Yorkshire and the Humber coding, AI, Python and maths for ages 6 to 67, live online. First lesson free.',
  ogImageCourse: 'complete-high-school-mathematics-mastery',
  verifiedOn: '26 September 2026',
  courseSchema: {
    name: 'Live Online Coding, AI and Maths Classes for Yorkshire and the Humber',
    description: 'Online coding, AI, Python, data and mathematics for children, teenagers and adults across Yorkshire and the Humber, taught live in English and placed by level.'
  },

  h1: 'Coding and AI classes in Yorkshire and the Humber',
  capsuleQ: 'What are the best coding and AI classes in Yorkshire and the Humber?',
  capsule: 'Yorkshire and The Humber had 5,480,774 usual residents at the 2021 census, across 21 local authorities. Leeds is its largest built-up area, followed by Bradford, Kingston upon Hull, York and Huddersfield, with Wakefield, Halifax, Doncaster, Grimsby, Scunthorpe, Harrogate, Rotherham and Barnsley among the other large towns. We teach every class live by video, with teachers in India. Learners of 6 to 67 take coding, AI, Python and maths, privately or in groups of five to ten sorted by level. One free lesson picks the starting course. This page indexes our Yorkshire and Humber pages and adds a temperature project. Those who continue pay USD 100 per month for a class place, or USD 150 per month to learn one-to-one.',
  lead: 'Three Met Office stations in the region publish long monthly records: Whitby, Bradford and Sheffield. Over 2000 to 2020 our sums make Sheffield the warmest at 10.44 degrees, then Whitby at 10.06, then Bradford at 9.86. So is the coast warmer than West Yorkshire? Not so fast. Bradford\'s station stands 134 metres above sea level and Whitby\'s only 41, and air generally gets cooler as you climb, by roughly 0.65 degrees for every 100 metres. Before comparing places, a fair analyst removes the effect of height, and when you do, the ranking changes and a different pattern appears. This page\'s project makes that adjustment in Python and shows how an unadjusted comparison can mislead.',
  wa: 'Hello Modern Age Coders, we are in Yorkshire and the Humber and would like to book a free lesson, please.',

  picks: {
    eyebrow: 'Courses across Yorkshire and the Humber',
    h2: 'Starting courses in Yorkshire and the Humber',
    intro: 'A Year 2 pupil in Grimsby who likes the seaside, a Year 8 in Rotherham starting Python, a Year 12 in Harrogate on A level maths, and a Barnsley adult learning data skills. Each gets a free first lesson.',
    items: [
      { course: 'kids-coding-blocks-masterclass', band: 'Ages 6 to 12', note: 'Block coding with hills, heights and simple charts.' },
      { course: 'maths-through-coding', band: 'Ages 10 to 15', note: 'Rates, units and adjustments worked through in code.' },
      { course: 'complete-high-school-mathematics-mastery', band: 'Ages 14 to 18', note: 'Full secondary maths, including rates of change and modelling.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', band: 'Adults', note: 'Python for adults from first steps to real analysis.' }
    ]
  },

  sections: [
    {
      id: 'yorkshire-and-the-humber', tint: '', eyebrow: 'The region counted',
      h2: '5,480,774 people in Yorkshire and the Humber',
      intro: 'Nomis supplies the region\'s 2021 census usual-resident count from ONS. Only ONS built-up areas that sit fully inside Yorkshire and The Humber appear in the towns table.',
      body: [
        { kind: 'table', caption: 'Yorkshire and The Humber: ONS 2021 built-up areas wholly inside the region', head: ['Place', 'Residents', 'Place', 'Residents'], rows: [
          ['Leeds', '536,280', 'Doncaster', '87,455'],
          ['Bradford', '333,950', 'Grimsby', '85,925'],
          ['Kingston upon Hull', '270,810', 'Scunthorpe', '81,265'],
          ['York', '141,685', 'Harrogate', '75,515'],
          ['Huddersfield', '141,675', 'Rotherham', '71,535'],
          ['Wakefield', '97,870', 'Barnsley', '71,405'],
          ['Halifax', '88,115', 'Dewsbury', '63,720']
        ] },
        { kind: 'p', text: 'The ONS lookup gives 21 local authorities. Sheffield\'s built-up area is left out of the table because it crosses the regional boundary. Schools follow the national curriculum for England, with GCSE and A level exams from several boards, and term dates are set by each council, so we ask families for theirs.' },
        { kind: 'p', text: 'Our pages across Yorkshire and the Humber, each with its own project, are linked here as they go live: ' + linkedAreas() + '.' },
        { kind: 'callout', h3: 'England and A level coursework', p: 'The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England</a> page explains schooling, and <a class="cg-inline-link" href="/a-level-computer-science-nea-help">A level Computer Science NEA help</a> covers the programming project.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'The Yorkshire and Humber project',
      h2: 'Adjust for height, then compare',
      intro: 'One multiplication per station changes the whole ranking.',
      body: [
        { kind: 'p', text: 'The learner reads the three station files, keeps 2000 to 2020, and averages the monthly means. The window is chosen with care: Whitby\'s file records that its station moved in 2000 from a site 60 metres up to one 41 metres up, and mixing the two would blur the comparison. Then comes the adjustment. Each station\'s height in metres, multiplied by 0.0065, estimates how much cooler it is than it would be at sea level, so adding that amount puts all three on the same footing. The 0.65 degrees per 100 metres is a standard textbook average; real rates vary with weather.' },
        { kind: 'table', caption: 'Our height-adjusted means from Met Office station data, 2000 to 2020, 26 September 2026', head: ['Station', 'Height', 'Measured mean', 'Adjusted to sea level'], rows: [
          ['Sheffield', '131 m', '10.44 C', '11.29 C'],
          ['Bradford', '134 m', '9.86 C', '10.74 C'],
          ['Whitby', '41 m', '10.06 C', '10.33 C'],
          ['Ranking', '', 'Sheffield, Whitby, Bradford', 'Sheffield, Bradford, Whitby']
        ] },
        { kind: 'p', text: 'Before adjustment, Whitby seems warmer than Bradford. After it, Bradford is warmer by about 0.4 degrees, and the adjusted order, Sheffield then Bradford then Whitby, matches the stations\' latitudes from south to north: 53.38, 53.81 and 54.48 degrees. Height was hiding a north-to-south pattern. That does not prove latitude is the whole story, since the sea, towns and the exact site all play a part, but it shows why measured values should not be ranked before known effects are removed.' },
        { kind: 'p', text: 'The unit slip is spectacular. The rate is 0.65 degrees per 100 metres, which is 0.0065 per metre. Use 0.65 per metre by mistake and Bradford\'s adjusted temperature gains 87 degrees. The learner writes the rate with its units in the variable name and adds a test that no adjustment exceeds a few degrees. A subtler check asks what happens if Whitby\'s older site is included: its 1991 to 1999 average was 9.45 at 60 metres, so the site change alone could shift a longer average.' },
        { kind: 'grid3', cells: [
          { h3: 'Ages 8 to 11', p: 'Compare three thermometers on a Scratch map, then add a height bonus and re-rank them.' },
          { h3: 'Ages 11 to 15', p: 'Read the files in Python, average, adjust for height and print both rankings.' },
          { h3: 'Ages 15 and up', p: 'Test the unit slip, try different lapse rates, and discuss what else could explain the pattern.' }
        ] },
        { kind: 'callout', h3: 'Met Office values, our adjustment', p: 'Monthly temperatures and station heights come from the Met Office files. The window, the averages and the 0.65 degree adjustment are ours, so the adjusted figures illustrate the method rather than giving official values.' }
      ]
    },
    {
      id: 'the-stations', tint: 'deep', eyebrow: 'The three stations',
      h2: 'Three long station records',
      intro: 'How each station file describes its site.',
      body: [
        { kind: 'table', caption: 'Met Office historic station data for Whitby, Bradford and Sheffield, as stated in each file', head: ['Station', 'Latitude and longitude', 'Height', 'Note in the file'], rows: [
          ['Whitby', 'Lat 54.481, Lon -0.624', '41 m (60 m until December 1999)', 'Whitby Coastguard until 1999, Whitby from 2000'],
          ['Bradford', 'Lat 53.813, Lon -1.772', '134 m', 'One location given'],
          ['Sheffield', 'Lat 53.381, Lon -1.490', '131 m', 'One location given']
        ] },
        { kind: 'p', text: 'Adjusting for a known effect before comparing is a core skill in science, medicine and business: house prices adjusted for size, exam results adjusted for starting points, sales adjusted for season. A Yorkshire and Humber learner who has watched a ranking flip after one honest adjustment, and caught a unit slip worth 87 degrees, knows to ask what has been adjusted for.' },
        { kind: 'p', text: 'Modern Age Coders has no link with the Met Office or the ONS. The records are theirs, and the adjustments on this page, mistakes and all, are ours.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Year by year',
    h2: 'From thermometers to fair comparisons',
    intro: 'Years here are a rough guide; the trial lesson finds the right level.',
    cols: [
      { band: 'Years 1 to 4', h3: 'Compare and sort', p: 'Block coding that compares, sorts and ranks.', courses: ['kids-coding-blocks-masterclass', 'scratch-programming-complete-course'] },
      { band: 'Years 5 to 8', h3: 'Rates and units', p: 'Python with rates, units and simple adjustments.', courses: ['maths-through-coding', 'python-ai-kids-masterclass'] },
      { band: 'Years 9 to 13', h3: 'Models and AI', p: 'Linear models, data and first AI, alongside GCSE and A level.', courses: ['complete-high-school-mathematics-mastery', 'python-complete-masterclass-teens'] },
      { band: 'Adults', h3: 'Analysis at work', p: 'Adult Python for comparing and presenting data.', courses: ['python-programming-masterclass-zero-to-advanced-college', 'data-analysis-mastery-course-college'] }
    ]
  },

  ai: {
    eyebrow: 'AI and fair comparison',
    h2: 'An AI can rank places by temperature. Did it adjust for height?',
    intro: 'Unadjusted rankings are easy to produce and easy to misread.',
    p1: 'Ask a chatbot which of three towns is warmest and it will usually rank the raw figures. Whether height, site changes or different years were accounted for is rarely mentioned.',
    p2: 'A learner in Yorkshire and the Humber who has seen one adjustment reverse a ranking knows to ask what a comparison controls for.',
    closer: 'Spotting an unadjusted comparison before it misleads anyone is a skill a Yorkshire or Humber teenager sharpens by coding in 2026.',
    blogAnchor: 'why teenagers should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Lesson set-up',
    h2: 'From Scunthorpe to Harrogate, on video',
    intro: 'Town, village or city, the classroom is a link.',
    cells: [
      { h3: 'Students type', p: 'Learners write their own code while the tutor watches the shared screen and asks a well-timed question.' },
      { h3: 'Placed by year group', p: 'We start a Halifax Year 5 or a Dewsbury Year 11 at the level their school year suggests, then adjust after the trial; exams are named as their board names them.' },
      { h3: 'Free trial', p: 'A whole first lesson for nothing, then a recommendation.' },
      { h3: 'Level first', p: 'Each class gathers five to ten learners who are at the same point, wherever in Britain they live.' },
      { h3: 'Term time', p: 'Twice a week in term; no lessons in holidays.' },
      { h3: 'Fixed UK hour', p: 'Clock changes leave your lesson time alone; our teachers adapt.' }
    ],
    spec: { title: 'Why online suits a large region', p: 'Five learners at one level and one free hour rarely share a town. Online, a Grimsby or Barnsley learner joins a class at exactly the right stage.' }
  },

  fees: {
    h2: 'Fees in Yorkshire and the Humber',
    intro: 'One price covers Leeds, Grimsby and everywhere between, the same price we charge across every country outside India.',
    first: 'One full lesson free, then honest advice.',
    group: 'Around eight lessons a month with five to ten others.',
    private: 'Around eight lessons a month with a tutor to yourself.',
    closer: 'We charge in US dollars, never sterling. The first bill comes only once the trial has fixed a course and a weekly time; see the pricing page for holidays, absences and moving between class and private tuition.'
  },

  reviewsH2: 'Families review us on Google',

  book: {
    h2: 'Book a free Yorkshire or Humber lesson',
    intro: 'A school year or age and an interest are all we need. The trial could be a Scratch map, a first Python program, or the three-station height puzzle.',
    success: 'Thank you. Your request from Yorkshire and the Humber is in.'
  },

  faq: {
    h2: 'Yorkshire and the Humber questions',
    intro: 'The region, the temperature project and practical details.',
    items: [
      { q: 'What is the population of Yorkshire and the Humber?', a: 'The 2021 census counted 5,480,774 usual residents in Yorkshire and The Humber.' },
      { q: 'What are the largest places in Yorkshire and the Humber?', a: 'Among ONS built-up areas wholly in the region: Leeds 536,280, Bradford 333,950 and Kingston upon Hull 270,810.' },
      { q: 'What is the three-station project?', a: 'Learners adjust Met Office temperatures for Whitby, Bradford and Sheffield to sea level in Python and see the warmest-to-coolest order change.' },
      { q: 'What is a lapse rate?', a: 'How quickly air temperature falls with height, on average about 0.65 degrees for every 100 metres.' },
      { q: 'Why use 2000 to 2020?', a: 'Whitby\'s station moved in 2000, so that window keeps all its data on one site.' },
      { q: 'Are lessons online?', a: 'Yes, all live by video from home.' },
      { q: 'Is there help for GCSE and A level students?', a: 'Yes, across maths and computing; our aim is real understanding, and we never guarantee a grade.' },
      { q: 'What ages do you teach?', a: 'Children from six, teenagers and adults up to 67 all have courses.' },
      { q: 'What do lessons cost?', a: 'Nothing for the opening lesson, then USD 100 monthly for a group place or USD 150 monthly for private teaching.' },
      { q: 'Are there lessons during holidays?', a: 'No. Tell us your school holiday weeks.' }
    ]
  },

  next: {
    eyebrow: 'Other regions',
    h2: 'More English regions',
    html: 'Region indexes also cover the <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-midlands">East Midlands</a>, the <a class="cg-inline-link" href="/coding-and-ai-classes-in-west-midlands-region">West Midlands region</a> and <a class="cg-inline-link" href="/coding-and-ai-classes-in-east-of-england">the East of England</a>. The <a class="cg-inline-link" href="/coding-and-ai-classes-in-england">England</a> page explains schooling, and the <a class="cg-inline-link" href="/coding-classes-in-united-kingdom">UK hub</a> lists the full series.',
    waLabel: 'Send us a WhatsApp'
  },

  footerHeading: 'Yorkshire and the Humber',
  footerPlaces: [
    { href: '/coding-and-ai-classes-in-england', label: 'England' },
    { href: '/best-coding-class-in-leeds', label: 'Leeds' },
    { href: '/best-coding-class-in-hull', label: 'Hull' }
  ],

  personalityCss: `
.cg-root.cg-ryh .cg-hero-grid { align-items: start; gap: clamp(1rem, 3vw, 2.5rem); }
.cg-root.cg-ryh .cg-hero h1 { font-weight: 715; letter-spacing: -0.025em; line-height: 1.05; }
.cg-root.cg-ryh .cg-capsule { border-top: 3px solid var(--cg-accent); border-bottom: 3px solid var(--cg-accent); padding: 0.85rem 0; }
.cg-root.cg-ryh .cg-eyebrow { letter-spacing: 0.15em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-ryh .cg-section-head h2 { max-width: 22ch; letter-spacing: -0.019em; }
.cg-root.cg-ryh .cg-table caption { font-weight: 600; text-align: left; font-style: italic; }
.cg-root.cg-ryh .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-ryh .cg-table th { letter-spacing: 0.05em; font-weight: 700; text-transform: uppercase; font-size: 0.78rem; }
.cg-root.cg-ryh .cg-ladder-col { border-top: 4px solid var(--cg-accent); padding-top: 0.85rem; }
.cg-root.cg-ryh .cg-callout { border-left-width: 5px; border-radius: 0 10px 10px 0; }
`,

  dossier: {
    curriculumAuthority: 'Yorkshire and The Humber region (E12000003). ONS Census 2021 TS001 via Nomis TYPE480: 5,480,774. ONS LAD22 to RGN22: 21 local authorities. ONS Census 2021 BUAs wholly in region: Leeds 536,280; Bradford 333,950; Kingston upon Hull 270,810; York 141,685; Huddersfield 141,675; Wakefield 97,870; Halifax 88,115; Doncaster 87,455; Grimsby 85,925; Scunthorpe 81,265; Harrogate 75,515; Rotherham 71,535; Barnsley 71,405; Dewsbury 63,720. Met Office historic station data: Whitby "Location until Dec 1999 490400E 511400N 60m amsl & from 2000 489100E 510400N, Lat 54.481 Lon -0.624 41m amsl"; Bradford "Lat 53.813 Lon -1.772, 134 metres amsl"; Sheffield "Lat 53.381 Lon -1.490, 131 metres amsl".',
    localProject: '2000-2020 means ((tmax+tmin)/2): Whitby 10.06 (251 months), Bradford 9.86 (252), Sheffield 10.44 (252). Sea-level adjusted with 0.0065 C/m: 10.33, 10.74, 11.29. Raw order Sheffield, Whitby, Bradford; adjusted Sheffield, Bradford, Whitby (latitude order). Whitby 1991-99 old site 9.45. Unit slip 0.65/m: +87.1 C. Lesson family: adjusting for a known factor (lapse rate) before ranking.',
    requiredMentions: [
      'Doncaster',
      'Rotherham',
      'Halifax',
      'Harrogate',
      'Barnsley',
      'Grimsby',
      'Scunthorpe',
      'Dewsbury',
      'Whitby',
      'lapse rate'
    ],
    sources: [
      { claim: 'ONS Census 2021 TS001 usual residents by region, via Nomis.', url: 'https://www.nomisweb.co.uk/' },
      { claim: 'ONS Open Geography Portal lookups: LAD22 to RGN22 and BUA22 to region.', url: 'https://geoportal.statistics.gov.uk/' },
      { claim: 'ONS Census 2021 built-up area populations.', url: 'https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates' },
      { claim: 'Met Office historic station data, Whitby.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/whitbydata.txt' },
      { claim: 'Met Office historic station data, Bradford.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/bradforddata.txt' },
      { claim: 'Met Office historic station data, Sheffield.', url: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/sheffielddata.txt' }
    ],
    rejectedClaims: [
      'A measured local lapse rate: not claimed; 0.65 C per 100 m is a labelled textbook average.',
      'Latitude as the full explanation: explicitly not claimed.',
      'Sheffield and Darlington BUAs: cross the boundary, omitted.',
      'Named schools and school term dates: none named or read.',
      'Distances and travel times: not claimed.',
      'Sterling prices: none.'
    ]
  }
};
