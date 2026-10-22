'use strict';
// App development classes for teens in Canada (ag- door, Canada cluster Plan 2, row 71).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: what it takes for a Canadian teenager to publish an app (Apple's and Google's own account rules, which hinge
// on the age of majority and 18), where app building sits in Canadian school documents, the toolchain we teach
// (React Native and Expo, from their own sites), and one original app-logic project on City of Hamilton open data.
// Sources read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/app-development-classes-for-teens-canada/):
//  - developer.apple.com/support/enrollment (redirected to developer.apple.com/help/account/membership/program-enrollment;
//    developer.apple.com_support_enrollment_.html): "To enroll, you'll need an Apple Account with two-factor
//    authentication turned on and be the legal age of majority in your region."
//  - developer.apple.com/programs/enroll (developer.apple.com_programs_enroll_.html): "If you're under the age of majority
//    in your region, your parent/guardian can enroll with their Apple Account and share their account with you."
//  - developer.apple.com/swift-student-challenge/eligibility: "13 years of age or older in all other countries and
//    regions" (Canada is not in the listed exceptions); "Be registered for free with Apple as an Apple developer or be a
//    member of the Apple Developer Program".
//  - support.google.com/googleplay/android-developer/answer/6112435 ("Get started with Play Console"): "You must be at
//    least 18 years of age to sign up for a Play Console account."; a one-time registration fee (the figure is not
//    printed: Canada pages are currency-neutral); "Developers with personal accounts created after November 13, 2023,
//    must meet specific testing requirements before they can make their app available on Google Play."; new personal
//    accounts "will be required to verify that they have access to an Android device".
//  - reactnative.dev: "Learn once, write anywhere."; "Create native apps for Android, iOS, and more using React".
//  - docs.expo.dev: "npx create-expo-app@latest".
//  - appinventor.mit.edu/about-us: "Those new to MIT App Inventor can have a simple app up and running in less than 30
//    minutes."
//  - facts-schools-contests.md: ICD2O "build hands-on projects"; ICS4C "design graphical user interfaces"; BC ADST list
//    includes "Web Development 10" and "Computer Programming 12" ("higher-level structures, such as functions, methods,
//    or classes"); Technovation "Technovation Challenge teaches young innovators to build their first solution."
//  - OpenAI and Anthropic terms (src-pilots/ai-classes-for-kids-in-canada/) for the AI note.
//  - Course facts: complete-app-development-masterclass-for-teens (ages 13 to 18, 10 to 12 months, phases Foundations to
//    First App, App Craft, The Wider Craft and the Capstone Build, Launch; React Native, Expo, Firebase).
//  - facts-geo.md section 3 for times.
// Open data: City of Hamilton, Spray Pads, https://hub.arcgis.com/api/v3/datasets/cbda734bc7bb4fa09f13574e534ebd7e_15/
//  downloads/data?format=csv&spatialRefId=4326&where=1%3D1 (data/hamilton-spray-pads.csv, 4,560 bytes, sha256
//  bc859451...f312, 68 rows, no quote characters). Licence: City of Hamilton Open Data Licence (data/hamilton-licence.html):
//  "licence to use the Data, including for commercial purposes"; attribution "Contains public sector Data made
//  available under the City of Hamilton's Open Data Licence".
// Our own calculations (nearest.js, run with Node 22, output nearest.out.txt; Python cross-checks inline): 68 pads,
//  COMMUNITY Hamilton 58, Stoney Creek 5, Glanbrook 2, Ancaster, Dundas, Flamborough 1 each; from our example point
//  43.2557, -79.8711: Durand Park 0.70 km, Beasley Park 0.74, McLaren Park 0.80, Central Park 0.94; treating degrees as a
//  flat grid ranks Central Park second, ahead of Beasley; on a grid of 1,800 points over the city the flat-grid nearest
//  pad differs from the true nearest at 297 points.
// Lesson family: real distance from coordinates (latitude and longitude are not a flat grid) inside app logic.

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const NEAREST = `// Our spray pad finder logic (Modern Age Coders, written for this page). Runs in Node or inside a React Native app.
const fs = require("fs");

function distanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;                                   // mean Earth radius in km
  const rad = (d) => (d * Math.PI) / 180;
  const dLat = rad(lat2 - lat1);
  const dLon = rad(lon2 - lon1);
  const h = Math.sin(dLat / 2) ** 2 +
            Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));           // the haversine formula
}

function loadPads(path) {
  const [header, ...lines] = fs.readFileSync(path, "utf8").replace(/^\\uFEFF/, "").trim().split(/\\r?\\n/);
  const cols = header.split(",");
  return lines.map((line) => {
    const f = line.split(",");                      // safe here: this file has no quoted fields
    return { name: f[cols.indexOf("NAME")], lat: Number(f[cols.indexOf("Y")]), lon: Number(f[cols.indexOf("X")]) };
  });
}

function nearest(pads, lat, lon, n) {
  return pads
    .map((p) => ({ ...p, km: distanceKm(lat, lon, p.lat, p.lon) }))
    .sort((a, b) => a.km - b.km)
    .slice(0, n);
}

const pads = loadPads("hamilton-spray-pads.csv");
const here = { lat: 43.2557, lon: -79.8711 };       // our example point, downtown Hamilton
console.log(pads.length, "spray pads loaded");
for (const p of nearest(pads, here.lat, here.lon, 4)) {
  console.log(p.name.padEnd(14), p.km.toFixed(2), "km");
}`;

const NEAREST_OUT = `68 spray pads loaded
Durand Park    0.70 km
Beasley Park   0.74 km
McLaren Park   0.80 km
Central Park   0.94 km`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'APP DEVELOPMENT, TEENS', blurb: 'App development for Canadian teens: Apple\'s and Google\'s account rules for under-18s, where apps sit in school courses, and a Hamilton spray pad finder.' },
  slug: 'app-development-classes-for-teens-canada',
  code: 'adtc',
  accent: '#273175',
  accentRationale: 'App development for teens, Canada: a deep ink blue #273175, allocated for row 71 at least 6 RGB units from every site accent and 14 from the other Canada accents; contrast 11.11 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'App development classes for teens in Canada',
  title: 'App Development Classes for Teens in Canada: Build and Ship',
  description: 'App development for Canadian teens aged 13 to 18: what Apple and Google require before an under-18 can publish, the tools we teach, and a Hamilton spray pad app.',
  ogDescription: 'How a Canadian teenager goes from first screen to a published app: the store rules for under-18s from Apple and Google, React Native and Expo, and real app logic on the City of Hamilton\'s spray pad data.',
  twitterDescription: 'App development for Canadian teens: store rules for under-18s, React Native, and a Hamilton data app.',
  pageName: 'App Development Classes for Teens in Canada',
  webPageDescription: 'A guide for Canadian teenagers and parents to building and publishing mobile apps, built from Apple Developer and Google Play Console help pages, React Native, Expo and MIT App Inventor sites and provincial curriculum documents, with original app logic on City of Hamilton open data.',
  courseDescription: 'Live online app development classes for teenagers aged 13 to 18 across Canada, from first screens to a published-ready app in React Native, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'App development for teens',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#stores', label: 'Store rules' },
    { href: '#school', label: 'At school' },
    { href: '#tools', label: 'Tools' },
    { href: '#project', label: 'Hamilton app' },
    { href: '#steps', label: 'First app' }
  ],
  eyebrow: 'Canada &middot; App development &middot; Ages 13 to 18',
  h1: 'App development classes for teens in Canada',
  lede: 'Plenty of Canadian teenagers have an app idea; far fewer know that publishing one runs into age rules before it runs into code. Apple and Google both tie developer accounts to adulthood, so a fifteen year old in Surrey or Sudbury can build a complete app but usually needs a parent to put it in a store. This page sets out those rules in each company\'s own words, shows where app building sits in Canadian school courses, explains the tools we teach, and walks through the real logic of a small app: finding the nearest City of Hamilton spray pad.',
  secondaryCta: { href: '#project', label: 'See the Hamilton app' },
  wa: 'Hello Modern Age Coders, my teenager in Canada wants to build an app. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; teens build, test and explain every screen of their own app',
  spec: [
    ['Ages', '13 to 18'],
    ['Builds', 'Android and iOS apps from one codebase'],
    ['Tools', 'JavaScript, React Native, Expo'],
    ['Publishing', 'With a parent where stores require it'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'App development classes for teens in Canada take students aged 13 to 18 from first screens to a complete Android and iOS app in React Native, with publishing done through a parent where Apple or Google require an adult account. Modern Age Coders teaches them live online, in a batch or one to one, in App Development for Teens.',

  picks: {
    eyebrow: 'Courses for app builders',
    h2: 'Three routes to building apps',
    lede: 'The app course itself, the JavaScript underneath it, and the full stack course for teens who also want the server side.',
    items: [
      { course: 'complete-app-development-masterclass-for-teens', code: 'ADTC / 01', title: 'App Development for Teens', note: 'Ages 13 to 18, absolute beginners. Ten to twelve months in four phases: a first app, app craft, a capstone build and launch, in React Native.' },
      { course: 'javascript-course-for-teens-beginners-interactive-web', code: 'ADTC / 02', title: 'JavaScript for Teens', note: 'Ages 13 to 18. Six months of the language React Native is written in: the page, data and the network, then canvas games.' },
      { course: 'full-stack-web-development-teens-masterclass', code: 'ADTC / 03', title: 'Full Stack Web Development for Teens', note: 'Ages 13 to 18. Twelve to fourteen months of React and Node.js, for an app that needs its own server and database.' }
    ]
  },

  sections: [
    {
      id: 'stores', tint: 'tint', eyebrow: 'Publishing rules',
      h2: 'What Apple and Google require before a teen can publish an app',
      lede: 'Building an app has no age limit. Publishing one does. These are the rules from each company\'s own help pages, read on 22 October 2026. Neither page gives a number for Canada; Apple\'s depends on the age of majority in the developer\'s province.',
      body: [
        { kind: 'table', caption: 'Developer account rules for app stores, from Apple and Google (read 22 October 2026)', head: ['Store or programme', 'What the company says', 'What it means for a Canadian teen'], rows: [
          ['Apple Developer Program', 'You need "an Apple Account with two-factor authentication turned on and be the legal age of majority in your region."', 'A teen under the age of majority cannot enrol alone'],
          ['Apple, for under-age developers', '"If you\'re under the age of majority in your region, your parent/guardian can enroll with their Apple Account and share their account with you."', 'A parent enrols; the teen builds and submits under that account'],
          ['Google Play Console', '"You must be at least 18 years of age to sign up for a Play Console account."', 'Under 18, a parent or guardian holds the account'],
          ['Google Play, new personal accounts', '"Developers with personal accounts created after November 13, 2023, must meet specific testing requirements before they can make their app available on Google Play."', 'Plan for a testing period before release, and an Android device to verify the account'],
          ['Google Play fee', 'A one-time registration fee, paid by card', 'A cost to discuss before the launch phase'],
          ['Swift Student Challenge (Apple)', '"13 years of age or older in all other countries and regions", with free registration as an Apple developer', 'Open to Canadian students from 13, without a paid account']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How we handle publishing with teens',
          left: [
            'Most of a teen\'s app course is spent building and testing on their own phone and in a simulator, which needs no store account at all. Publishing comes at the end, and only if the family wants it. Where a store requires an adult, the parent opens the account, and the teen prepares everything else: the build, the screenshots, the description and the privacy answers.',
            'We never ask a teen to misstate their age to a store, and we explain to families what each account involves before the launch phase begins.'
          ],
          rightH3: 'Why the rules are worth respecting',
          right: [
            'A published app has users, reviews, data and sometimes payments, and the account holder is responsible for all of them. That is why the stores tie accounts to adulthood. A teen who learns the release process with a parent beside them learns it properly.',
            'For a teen who wants a public showcase without a store, Apple\'s Swift Student Challenge accepts Canadian entrants from 13, and an app can also be shared as a web build.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://developer.apple.com/help/account/membership/program-enrollment/" rel="noopener" target="_blank">Apple, program enrollment</a>; <a class="ag-inline-link" href="https://developer.apple.com/programs/enroll/" rel="noopener" target="_blank">Apple Developer Program, enroll</a>; <a class="ag-inline-link" href="https://developer.apple.com/swift-student-challenge/eligibility/" rel="noopener" target="_blank">Swift Student Challenge eligibility</a>; <a class="ag-inline-link" href="https://support.google.com/googleplay/android-developer/answer/6112435" rel="noopener" target="_blank">Google, Get started with Play Console</a>. All read 22 October 2026. We are not connected with Apple or Google.' }
      ]
    },
    {
      id: 'school', tint: 'deep', eyebrow: 'Apps and school',
      h2: 'Where app building sits in Canadian school courses',
      lede: 'No province we read offers a course called app development for teens, but several courses ask for exactly the skills an app needs: interfaces, projects and organised code.',
      body: [
        { kind: 'table', caption: 'App-related skills in provincial course documents (read 22 October 2026)', head: ['Course', 'What the document says', 'The app skill'], rows: [
          ['Ontario ICD2O, Grade 10', 'Students "build hands-on projects"', 'Finishing a working thing, not just exercises'],
          ['Ontario ICS4C, Grade 12 College', 'Students "design graphical user interfaces"', 'Screens, buttons and layouts'],
          ['British Columbia, Web Development 10', 'Listed among the ADST courses', 'The web technologies React Native grew from'],
          ['British Columbia, Computer Programming 12', '"higher-level structures, such as functions, methods, or classes"', 'Organising an app into components'],
          ['Technovation (global, open to Canadians)', '"Technovation Challenge teaches young innovators to build their first solution."', 'A team app project with a real problem']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What an app course adds to school',
          left: [
            'School courses teach the parts. An app course puts them together under real constraints: a small screen, a slow network, a user who taps the wrong button. Teens who have done both find their school projects easier, because they have already met the hard part, which is finishing.',
            'We teach alongside school and replace no course. A teen who is also in ICS3U or ICS4U can bring that work to class too.'
          ],
          rightH3: 'Blocks first, for younger siblings',
          right: [
            'For children under 13, MIT App Inventor says newcomers "can have a simple app up and running in less than 30 minutes" using blocks. Our App Making for Kids course uses that route for ages 8 to 12.',
            'Teenagers go straight to typed JavaScript, because that is what real apps are made of and what they will meet in any later course.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&amp;elements.code=ICD2O&amp;depth=0" rel="noopener" target="_blank">Ontario ICD2O</a>; <a class="ag-inline-link" href="https://curriculum.gov.bc.ca/curriculum/adst" rel="noopener" target="_blank">BC ADST courses</a>; <a class="ag-inline-link" href="https://technovation.org/" rel="noopener" target="_blank">Technovation</a>; <a class="ag-inline-link" href="https://appinventor.mit.edu/about-us" rel="noopener" target="_blank">MIT App Inventor</a>. Read 22 October 2026.' }
      ]
    },
    {
      id: 'tools', tint: 'tint', eyebrow: 'The toolchain',
      h2: 'The tools a teen learns, and why these ones',
      lede: 'We teach one codebase for both Android and iPhone, because most Canadian families have a mix of both and a teen wants to show the app to everyone.',
      body: [
        { kind: 'table', caption: 'Tools in our App Development for Teens course (from the course syllabus, with each project\'s own description)', head: ['Tool', 'What its makers say', 'Why we use it'], rows: [
          ['JavaScript', 'The language of the web and of React Native', 'One language for app logic, screens and later a server'],
          ['React Native', '"Learn once, write anywhere."; "Create native apps for Android, iOS, and more using React"', 'One codebase, real native apps'],
          ['Expo', 'A new project starts with "npx create-expo-app@latest"', 'Run the app on a phone in minutes, without native setup'],
          ['Firebase', 'The backend the course syllabus names for the app', 'Stored data and accounts without running a server'],
          ['Git and GitHub', 'Version control', 'Every change can be seen and undone']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Months 1 to 3', p: 'Foundations to a first app: JavaScript, components, a screen that responds to a tap, running on the teen\'s own phone.' },
          { h3: 'Months 4 to 8', p: 'App craft, then the wider craft: navigation, data, offline storage, and a capstone app planned and built by the teen.' },
          { h3: 'Months 9 and 10', p: 'Launch: testing, store preparation, and publishing through a parent\'s account where the store requires an adult.' }
        ] }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Real app logic',
      h2: 'A spray pad finder on Hamilton\'s open data',
      lede: 'The City of Hamilton publishes the locations of its spray pads under a licence that allows commercial use. The heart of a "nearest spray pad" app is one function: how far is each pad from the user? It is also where most first attempts go wrong. The code and every number below are ours, run on the city\'s file downloaded on 22 October 2026.',
      body: [
        { kind: 'p', html: '<b>The app\'s job:</b> from the phone\'s location, list the four nearest spray pads with their distance. The file holds 68 spray pads with NAME, ADDRESS, COMMUNITY and coordinates, X for longitude and Y for latitude. For testing we use a fixed example point of ours in downtown Hamilton, latitude 43.2557 and longitude -79.8711; in the app the point comes from the phone.' },
        { kind: 'code', label: 'Our app logic &middot; nearest.js', lang: 'javascript', code: NEAREST },
        { kind: 'code', label: 'Output on the city\'s file (Node 22)', lang: 'text', code: NEAREST_OUT, note: 'The same functions drop into a React Native screen unchanged; only loadPads changes, because an app bundles or downloads the data instead of reading a file.' },
        { kind: 'table', mt: true, caption: 'The shortcut most first attempts take, and what it does to the answer (our runs on the same file)', head: ['Method', 'Second nearest from our point', 'Why'], rows: [
          ['Haversine distance (our code)', 'Beasley Park, 0.74 km', 'Treats the Earth as a sphere, so a degree east and a degree north are measured fairly'],
          ['Latitude and longitude as a flat grid', 'Central Park, really 0.94 km away', 'At Hamilton\'s latitude a degree of longitude is much shorter than a degree of latitude, so east-west gaps are overstated'],
          ['Flat grid, tested across the whole city', 'Wrong nearest pad at 297 of 1,800 test points', 'About one location in six would send a family to the wrong pad']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What a teen learns from one function',
          left: [
            'That a plausible-looking result can be wrong, and that the only way to know is to test against something trusted. We check the haversine function by hand on two points whose distance we can measure on a map, before trusting it on 68.',
            'That data has a shape: X is longitude and Y is latitude here, and swapping them is the single most common bug in a map app. The code reads columns by name for that reason.'
          ],
          rightH3: 'Turning logic into an app',
          right: [
            'In class the next steps are a list screen that shows the four results, a button that asks the phone for its location with the user\'s permission, and a message when permission is refused. Each step is tested on a real phone.',
            'The teen also writes down, in the app\'s about screen, where the data comes from and under which licence, exactly as the city asks.'
          ] },
        { kind: 'source', html: 'Data: <a class="ag-inline-link" href="https://hub.arcgis.com/datasets/cbda734bc7bb4fa09f13574e534ebd7e_15" rel="noopener" target="_blank">City of Hamilton open data</a>, Spray Pads. Contains public sector Data made available under the City of Hamilton\'s Open Data Licence. The licence allows use "including for commercial purposes". Code, example point and results are ours; the City of Hamilton does not endorse this page.' }
      ]
    },
    {
      id: 'steps', tint: 'tint', eyebrow: 'First app',
      h2: 'From idea to a first app: seven steps we follow with teens',
      lede: 'Our process for a teen\'s first complete app, whatever the idea. It is deliberately slow at the start and fast at the end.',
      body: [
        { kind: 'ol', items: [
          '<b>Write the idea in one sentence.</b> "An app that shows the nearest spray pad" is buildable; "an app for summer" is not yet.',
          '<b>Draw every screen on paper.</b> Usually three or four. Each arrow between screens becomes a navigation step later.',
          '<b>Find the data.</b> Where does the app\'s information come from, and does its licence allow use in an app? The Hamilton file does; many files online do not.',
          '<b>Write the logic first, without screens.</b> Like nearest.js above: plain functions, tested with known answers.',
          '<b>Build one screen at a time.</b> Run it on the phone after every change. A screen that only works in the simulator is not finished.',
          '<b>Ask someone else to use it.</b> A parent or friend, with no instructions. Note every place they hesitate.',
          '<b>Decide about publishing.</b> If the family wants a store release, a parent opens the account where the store requires an adult, and the teen prepares the release.'
        ] },
        { kind: 'p', mt: true, html: 'Step 4 is the one teens most want to skip, and the one that saves the most time. Bugs in logic are much easier to find when no screen is in the way.' }
      ]
    },
    {
      id: 'thinking', tint: 'deep', eyebrow: 'Thinking first',
      h2: 'Apps built by teens who understand them',
      lede: 'Our promise to every family is the same, in Canada or anywhere else: we teach students to think a problem through and solve it, not to copy an answer or an AI\'s output. App building tempts copying more than most subjects, so we are specific.',
      body: [
        { kind: 'three', cells: [
          { h3: 'No pasted screens', p: 'Code for a screen is typed and explained by the teen. Templates are studied, not dropped in.' },
          { h3: 'Every bug explained', p: 'When something breaks, the teen says why before fixing it. The explanation goes in a short log the teacher reads.' },
          { h3: 'AI within the rules', p: 'Teens may use assistants their age allows, such as OpenAI\'s tools with a parent\'s permission; Claude is 18 and over and never recommended to them. Any AI-suggested line must be explained.' }
        ] }
      ]
    },
    {
      id: 'time', tint: 'tint', eyebrow: 'From coast to coast',
      h2: 'When app classes run for Canadian teens',
      lede: 'Every class is booked in the teen\'s own zone. Only the eastern provinces change clocks this school year, so a class time can shift for an Ontario family against a BC teacher booking in early November and mid-March.',
      body: [
        { kind: 'table', caption: 'How far behind UTC each zone is, 2026 to 2027 (IANA tz database 2026e)', head: ['Teens in', 'November 2026 to March 2027', 'After 14 March 2027'], rows: [
          ['Vancouver, Kelowna, Whitehorse', '7 hours behind', '7 hours behind'],
          ['Calgary, Edmonton, Saskatoon', '6 hours behind', '6 hours behind'],
          ['Winnipeg', '5 hours behind', '5 hours behind'],
          ['Toronto, Ottawa, Quebec City', '5 hours behind', '4 hours behind'],
          ['Halifax, Fredericton, Charlottetown', '4 hours behind', '3 hours behind'],
          ['St. John\'s', '3 hours 30 minutes behind', '2 hours 30 minutes behind']
        ] },
        { kind: 'p', mt: true, html: 'App classes need a phone nearby for testing, so teens usually pick a weekday evening or a weekend morning at home. We confirm the time again on 1 November 2026 and 14 March 2027.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Four stages',
    h2: 'Where is your teen as an app builder?',
    lede: 'Our stages for placing a teenager in the first class.',
    table: { caption: 'Four app-building stages (ours)', head: ['Stage', 'What the teen can do'], rows: [
      ['1. Screens', 'Builds a screen with text, an image and a button that does something'],
      ['2. Logic', 'Writes and tests functions, like distanceKm, separately from the screens'],
      ['3. Data', 'Loads data, stores it on the phone and handles a failed network call'],
      ['4. Release', 'Tests on real devices, prepares a release and understands the store\'s rules']
    ] },
    left: { h3: 'For parents', ps: [
      'Stage 4 is where a parent becomes part of the process, because the stores tie developer accounts to adults.',
      'A teen at stage 2 can already build useful tools; the polish comes later.'
    ] },
    right: { h3: 'For teens', ps: [
      'Test on your real phone every day. Simulators hide problems with touch, speed and permissions.',
      'Write the logic as plain functions first, then build the screen around them.'
    ] }
  },

  catalogue: {
    eyebrow: 'Related courses',
    h2: 'Nine more courses for teen builders',
    lede: 'Live, with one regular teacher, in a batch or one to one, from anywhere in Canada.',
    bands: [
      { num: 'I', h3: 'The web side', sub: 'Ages 13 to 18', courses: [
        { code: 'ADTC / WEB / 01', slug: 'frontend-development-masterclass-for-teens', title: 'Frontend for teens', blurb: 'CSS craft to React interfaces.' },
        { code: 'ADTC / WEB / 02', slug: 'react-for-teens-complete-masterclass', title: 'React for teens', blurb: 'The library React Native grew from.' },
        { code: 'ADTC / WEB / 03', slug: 'backend-coding-masterclass-for-teens', title: 'Backend for teens', blurb: 'Node, APIs and databases.' }
      ] },
      { num: 'II', h3: 'Data and tools', sub: 'Ages 13 to 18', courses: [
        { code: 'ADTC / DATA / 01', slug: 'mysql-mastery-for-teens', title: 'MySQL for teens', blurb: 'Databases from the first query.' },
        { code: 'ADTC / DATA / 02', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Version control from zero.' },
        { code: 'ADTC / DATA / 03', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A second language for data work.' }
      ] },
      { num: 'III', h3: 'Other things to build', sub: 'Ages 8 to 18', courses: [
        { code: 'ADTC / MORE / 01', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'Unity and C#.' },
        { code: 'ADTC / MORE / 02', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'Cybersecurity for teens', blurb: 'Keeping apps and users safe.' },
        { code: 'ADTC / MORE / 03', slug: 'block-coding-app-development-masterclass', title: 'App making for kids', blurb: 'For younger siblings, ages 8 to 12.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live app classes with a phone on the desk',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evenings, when the phone and laptop are both at hand.' },
      { time: 'Weekends', l: 'Longer build sessions for the capstone.' },
      { time: '1-on-1', l: 'Built around the teen\'s own app idea.' }
    ],
    cells: [
      { h3: 'Both phones', p: 'One codebase for Android and iPhone.' },
      { h3: 'Logic first', p: 'Functions tested before any screen.' },
      { h3: 'Real devices', p: 'Every change run on the teen\'s phone.' },
      { h3: 'Licensed data', p: 'Open data used only where its licence allows.' },
      { h3: 'Store rules respected', p: 'Parents hold accounts where stores require.' },
      { h3: 'Batch or solo', p: 'Fifteen to twenty teens, or one to one.' }
    ]
  },

  projectsH2: 'Apps and sites our students built',
  projectsLede: 'A few finished projects from our students are below. The <a class="ag-inline-link" href="/student-labs">student labs</a> page shows the full range.',
  reviewsLede: 'Google reviews from students and parents, exactly as posted.',

  fees: {
    h2: 'Fees',
    lede: 'The monthly fee covers eight live classes. Store fees, where a family chooses to publish, are paid to the store and are separate from ours.',
    free: ['A free first class', 'A first screen on the teen\'s own phone', 'No card required'],
    group: ['Fifteen to twenty teens', 'One regular teacher', 'A set weekly slot', 'Month-to-month billing'],
    one: ['Your own teacher', 'Your own app idea', 'Pace set by your project']
  },

  faq: {
    eyebrow: 'Teens and parents ask',
    h2: 'App development for teens in Canada: common questions',
    items: [
      { q: 'Can a teenager publish an app on the App Store?', a: 'Apple requires the legal age of majority in your region to enrol in the Apple Developer Program. It also says that if you are under the age of majority, a parent or guardian can enrol with their Apple Account and share it with you.' },
      { q: 'Can a teenager publish on Google Play?', a: 'Google says you must be at least 18 years of age to sign up for a Play Console account, so a parent or guardian holds the account. New personal accounts must also meet testing and device verification requirements before release.' },
      { q: 'What age can my teen start app development?', a: 'Our App Development for Teens course takes absolute beginners aged 13 to 18. For children aged 8 to 12, App Making for Kids uses blocks first.' },
      { q: 'Which tools will my teen use?', a: 'JavaScript and React Native, with Expo to run the app on a phone quickly and Firebase for data. One codebase builds for both Android and iPhone.' },
      { q: 'Does my teen need a Mac to build iPhone apps?', a: 'Not to learn. The React Native site says developers can "Get started quickly with Expo Go", which runs the app on the teen\'s own phone during development. Publishing to Apple\'s store has its own requirements, which we explain when a family reaches that stage.' },
      { q: 'Is app development taught in Canadian high schools?', a: 'Not usually as its own course, but parts of it are. Ontario\'s ICD2O has students build hands-on projects and ICS4C asks them to design graphical user interfaces; British Columbia lists Web Development 10 and Computer Programming 12.' },
      { q: 'Are there app competitions for Canadian teens?', a: 'Apple\'s Swift Student Challenge accepts students aged 13 or older in Canada, with free registration as an Apple developer. Technovation runs a global challenge in which teams build a first solution to a real problem.' },
      { q: 'Can my teen use AI tools to build an app?', a: 'Within each company\'s rules. OpenAI requires a parent\'s or guardian\'s permission for users under 18, and Anthropic does not allow anyone under 18 to use Claude. In our classes, any AI-suggested code must be explained by the teen.' },
      { q: 'When are app classes held for Canadian teens?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Times are set in your own province\'s zone.' },
      { q: 'What will my teen have at the end?', a: 'A complete app of their own design, tested on real phones, with its logic written and explained by the teen, such as the Hamilton spray pad finder on this page. Publishing is optional and done through a parent where the store requires it.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Canadian teens who want to build things people use.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'All our Canadian pages.' },
      { href: '/build-apps-with-ai', label: 'Build apps with AI', p: 'Where assistants help and where they do not.' },
      { href: '/app-inventor-for-kids', label: 'App Inventor for kids', p: 'The block route for younger children.' },
      { href: '/javascript-for-kids', label: 'JavaScript for kids', p: 'The language behind React Native.' },
      { href: '/vibe-coding-for-teens', label: 'Vibe coding for teens', p: 'Building with AI help, within the rules.' },
      { href: '/ics3u-computer-science-help', label: 'ICS3U help', p: 'Ontario\'s Grade 11 computer science.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'Finding what is really broken.' },
      { href: '/how-to-think-like-a-programmer', label: 'Think like a programmer', p: 'Turning an idea into steps.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects built by our students.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'In the first class your teen builds a single screen and runs it on their own phone. The teacher sees how they think and explains what a full app course would cover for their idea.',
    readFirst: 'Read more first: <a class="ag-inline-link" href="/how-we-teach">how we teach</a> describes our live classes, and the <a class="ag-inline-link" href="/courses">course list</a> has every syllabus.',
    note: 'Teachers are based in India and teach live over video, so teens in any province can join from home. A WhatsApp message gets the quickest reply.',
    formNote: 'There is no charge for the first class, and no card is requested.'
  },

  footer: {
    cols: [
      { h4: 'Building apps', links: [
        { href: '/build-apps-with-ai', label: 'Build apps with AI' },
        { href: '/app-inventor-for-kids', label: 'App Inventor for kids' },
        { href: '/javascript-for-kids', label: 'JavaScript for kids' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/canada-time-zones-2026-online-class-times', label: 'Class times by zone' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/ics3u-computer-science-help', label: 'ICS3U help' }
      ] }
    ],
    bottomRight: 'Logic first, then the screen'
  },

  personalityCss: `
.ag-root.ag-adtc .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-adtc .ag-capsule { border-left-width: 5px; border-radius: 8px; }
.ag-root.ag-adtc .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-adtc .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-adtc .ag-band-head h3 { letter-spacing: -0.009em; }
.ag-root.ag-adtc .ag-slots { gap: 1.05rem; }
`,

  dossier: {
    curriculumAuthority: 'Apple Developer program enrollment, enroll and Swift Student Challenge eligibility pages; Google Play Console Get started help page; React Native, Expo and MIT App Inventor sites; Ontario ICD2O and ICS4C; BC ADST course list and Computer Programming 12; Technovation; OpenAI and Anthropic terms; all read 22 October 2026. City of Hamilton Spray Pads under the City of Hamilton Open Data Licence.',
    localProject: 'A Hamilton spray pad finder: original JavaScript app logic (haversine distance, loading, ranking) run in Node on the City of Hamilton spray pad file (68 pads), listing the four nearest to our example point, with the flat-grid shortcut measured (wrong second place; wrong nearest at 297 of 1,800 test points) and a seven-step first-app process. Lesson family: real distance from coordinates.',
    requiredMentions: ['nearest.js', '68 spray pads loaded', 'Durand Park', 'Beasley Park, 0.74 km', '297 of 1,800', 'be the legal age of majority in your region', 'created after November 13, 2023', 'npx create-expo-app@latest', 'Logic first, then the screen'],
    sources: [
      { claim: 'Apple Developer Program requires the legal age of majority; parents can enrol for under-age developers.', url: 'https://developer.apple.com/help/account/membership/program-enrollment/' },
      { claim: 'Parent or guardian enrolment for developers under the age of majority.', url: 'https://developer.apple.com/programs/enroll/' },
      { claim: 'Swift Student Challenge minimum age 13 outside listed countries.', url: 'https://developer.apple.com/swift-student-challenge/eligibility/' },
      { claim: 'Play Console 18+, one-time fee, testing and device verification for new personal accounts.', url: 'https://support.google.com/googleplay/android-developer/answer/6112435' },
      { claim: 'React Native description.', url: 'https://reactnative.dev/' },
      { claim: 'Expo project creation command.', url: 'https://docs.expo.dev/' },
      { claim: 'MIT App Inventor first app in under 30 minutes.', url: 'https://appinventor.mit.edu/about-us' },
      { claim: 'Hamilton spray pads open data and licence.', url: 'https://hub.arcgis.com/api/v3/datasets/cbda734bc7bb4fa09f13574e534ebd7e_15/downloads/data?format=csv&spatialRefId=4326&where=1%3D1' }
    ],
    rejectedClaims: [
      'The Play Console registration fee as a figure: not printed; Canada pages are currency-neutral.',
      'The age of majority in each province as a number: not verified from a primary source, so not stated.',
      'That a teen can publish to either store alone: refused; both companies tie accounts to adults.',
      'That our students\' apps reach the stores or earn money: not claimed.',
      'Recommending Claude to anyone under 18: refused.'
    ]
  }
};
