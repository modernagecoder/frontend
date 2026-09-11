'use strict';
// Middelburg: capital of Zeeland, 50,439 residents. In 1608 the spectacle
// maker Hans Lipperhey, living here, applied for a patent on the telescope
// and was refused, because within weeks others turned out to know the same
// secret. Spine (modest, per the Phase 5 method): a design cannot be kept
// secret once it has been seen, so security rests on a small secret key and
// a public method, the principle Auguste Kerckhoffs wrote down in 1883.

module.exports = {
  slug: 'coding-classes-in-middelburg',
  code: 'mdb',
  accent: '#6C435F',
  accentRationale: 'Middelburg: a muted plum, sitting seventeen units from Zeeland, its closest linked page, and further from Alkmaar, Bergen op Zoom and the academy, with an unlinked province page as its nearest neighbour',
  pageType: 'city',
  place: {
    name: 'Middelburg',
    eyebrow: 'Middelburg, Zeeland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Zeeland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Middelburg, Netherlands',
  title: 'Coding Classes in Middelburg | Modern Age Coders',
  description: 'Live online coding, Python, AI and cyber security classes for learners in Middelburg, ages 6 to 67, taught in English at a fixed weekly hour. First lesson free.',
  ogDescription: 'Live online coding, Python, AI and cyber security in Middelburg, on a page about a telescope secret of 1608 and why good security never hides its method.',
  twitterDescription: 'Middelburg classes for learners aged 6 to 67, live online, with the first lesson free.',
  ogImageCourse: 'cybersecurity-course-for-teens-ethical-defensive',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Middelburg Learners',
    description: 'Ability-placed online coding, Python, AI, cyber security and mathematics for children, teenagers and adults in Middelburg, taught in English.'
  },

  h1: 'Coding classes in Middelburg, where a secret got out in 1608',
  capsuleQ: 'What are the best coding classes in Middelburg?',
  capsule: 'Middelburg, the capital of Zeeland, had 50,439 residents on 1 January 2026, the national statistics record. Its abbey was built in 1123 and it received town rights in 1217. In 1608 Hans Lipperhey, a spectacle maker who had lived in the town since at least 1594, applied for a patent on a telescope. He did not get one. A few weeks later Jacob Metius, a spectacle maker from Alkmaar, applied for the same thing, and in October it emerged that another young man in Middelburg knew how to make it too. A year later Galileo, inspired by the news, had built a better one. Once a design has been seen or described it cannot be kept secret, and computer security has been built on that fact since 1883, when Auguste Kerckhoffs wrote that a system should stay safe even if the enemy learns how it works. Keep the key secret, never the method. Modern Age Coders teaches live online in English for ages 6 to 67; the first lesson is free, then USD 100 a month in a group or USD 150 one to one.',
  lead: 'The States General did not reward Lipperhey with a monopoly. They ordered three binocular instruments from him instead and paid him 900 karolusguldens, the encyclopaedia records, because a patent is worthless when the thing it protects is already known to others. Security has the same problem. A lock, a cipher or a program whose safety depends on nobody learning how it works is only safe until the first person looks closely, and people always look. Auguste Kerckhoffs, born in Nuth in Limburg in 1835, put the lesson into a list of six principles for military ciphers in 1883, and the second is still taught to every student of security: the design should not require secrecy. What must stay secret is small, separate and easy to change, a key or a password, and the method can then be published, examined and improved by anyone. The same rule now governs passwords, websites, banking apps and AI assistants, and it is one of the most useful things a young programmer can learn.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Middelburg.',

  picks: {
    eyebrow: 'Course picks for Middelburg',
    h2: 'Four courses for the capital of Zeeland',
    intro: 'A child who loves secret codes, a teenager curious about how hackers get in and how defenders stop them, a student who wants to build software properly, and an adult whose work runs on accounts, logins and shared files. Each of them starts with a free lesson.',
    items: [
      { course: 'scratch-programming-complete-course', band: 'Ages 6 to 10', note: 'Secret-message games in Scratch, where a child builds a code, breaks a friend\'s, and learns why a bigger key wins.' },
      { course: 'cybersecurity-course-for-teens-ethical-defensive', band: 'Ages 13 to 18', note: 'Ethical, defensive security: how passwords, keys and encryption really work, and why hiding the method never protects anything.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python and AI tools built the careful way, with keys kept out of the code and out of every prompt sent to a model.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Spreadsheets, reports and AI assistants at work, with a clear rule for what may be shared and what must stay private.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Middelburg today',
      h2: 'An abbey of 1123, a town hall of 1458, and a capital rebuilt after 1940',
      intro: 'The municipality covers 5,304 hectares, 4,838 of them land and 466 water, with a published density of 1,037 residents per square kilometre. The statistics office divides it into 25 wijken and 73 buurten.',
      body: [
        { kind: 'table', caption: 'Middelburg in the encyclopaedia, by date', head: ['Year', 'Event'], rows: [
          ['1123', 'the canons built a new monastery inside the ring-wall stronghold: the abbey of Middelburg'],
          ['1217', 'Middelburg received town rights from Count Willem I of Holland'],
          ['1458', 'the oldest parts of the late-Gothic town hall on the Markt, now used as a university building'],
          ['1608', 'Hans Lipperhey applied for a patent on the telescope, and was refused'],
          ['17 May 1940', 'a bombardment destroyed about a quarter of the inner city by fire, and more than 600 buildings were lost'],
          ['2004', 'the Roosevelt Academy was founded, bringing a form of university education to Middelburg']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The Lange Jan', p: 'The abbey has a tower almost 91 metres high, known as the Lange Jan, the encyclopaedia says.' },
          { h3: 'A trading chamber', p: 'The Kamer van Zeeland was, after Amsterdam, the most powerful trading chamber of the VOC.' },
          { h3: 'An older population', p: 'Of the 50,439 residents counted for 2026, 11,828 are sixty-five or over, and exactly as many, 11,828, are aged twenty-five to forty-five.' }
        ] }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'How the secret spread',
      h2: 'One instrument, three claimants, and no patent',
      intro: 'The encyclopaedia entry for Hans Lipperhey sets out what happened, and it reads like a lesson in why secrets about how something works do not last.',
      body: [
        { kind: 'table', caption: 'Hans Lipperhey and the telescope, from the encyclopaedia', head: ['When', 'What happened', 'What it shows'], rows: [
          ['About 1570', 'born in Wesel', 'the maker came to Middelburg from elsewhere'],
          ['1594 and 1602', 'living in Middelburg and married there in 1594; a citizen (poorter) of the town from 1602', 'an established craftsman, not a newcomer'],
          ['25 September 1608', 'asked the States of Zeeland for a letter of introduction for his application', 'he believed the idea was his alone'],
          ['Weeks later', 'Jacob Metius, a spectacle maker from Alkmaar, applied for a patent too', 'someone else already knew'],
          ['October 1608', 'another young man in Middelburg turned out to know the secret; no patent was granted', 'a secret shared is no longer a secret'],
          ['Instead', 'Lipperhey was asked to deliver three binocular instruments, for 900 karolusguldens', 'the skill could be paid for, the design could not be owned'],
          ['A year later', 'Galileo, inspired by the news of the invention, made an improved version', 'a description was enough to copy it']
        ] },
        { kind: 'p', text: 'Nobody stole anything. The design was simple enough that other skilled people found it, or worked it out from a description, and after that no official decision could put it back in the box. Security engineers call the belief that a hidden method keeps you safe security through obscurity, and they treat it as a warning sign. It works only until someone reads the code, takes apart the device, studies the traffic or simply guesses, and it gives no warning when that has happened. The sound alternative is to assume from the start that the method is known, and to make the safety rest on something small that can be kept secret and changed quickly if it leaks: a key, a password, a token. Kerckhoffs was writing about ciphers carried by army officers, who could be captured along with their equipment. The same reasoning applies to a phone that can be stolen, an app that can be downloaded and examined, or an AI assistant whose hidden instructions a curious user can coax out.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Middelburg in the national statistics',
      intro: 'The figures published for the municipality with their years, then the encyclopaedia history, then the page\'s own arithmetic.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Residents', p: '44,922 in 1995, 47,523 in 2013, 50,152 in 2025 and 50,439 on 1 January 2026. The 2025 count is 24,483 men and 25,669 women.' },
          { h3: 'Ages in 2026', p: '7,637 under fifteen, 6,143 aged fifteen to twenty-five, 11,828 aged twenty-five to forty-five, 13,003 aged forty-five to sixty-five, and 11,828 aged sixty-five and over.' },
          { h3: 'Households', p: '24,146 households in 2025, averaging 2.03 people: 10,354 of a single person and 13,792 of more, 6,949 of them with children.' },
          { h3: 'Homes and income', p: '24,857 dwellings in 2025, 15,163 owner-occupied and 9,694 rented, with an estimated average value of 306,000 euro. Average income was 32,900 euro per resident and 39,600 per income recipient in 2024, and 2.7 percent of residents were in poverty.' },
          { h3: 'Schools and origin', p: '23 primary establishments teach 4,505 pupils and 9 secondary establishments teach 4,501; institutions in the municipality count 1,428 MBO, 1,667 higher professional and 540 university students. 86 percent of residents were born in the Netherlands; 8.7 percent have a European and 15 percent a non-European origin.' },
          { h3: 'The arithmetic', p: '50,439 minus 47,523 is 2,916, a rise of 6.1 percent since 2013. The five age groups add up to 50,439, which confirms that the two groups of 11,828 are both correct; the men and women make 50,152 and the household types 24,146. The key-space times below use one billion guesses a second.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with the municipality of Middelburg, the Zeeuws archives, University College Roosevelt or any school in Zeeland, and nothing on this page implies one. The statistics are those published for Middelburg for the years stated. The abbey, the town rights, the town hall, the Lange Jan, the bombardment, the VOC chamber and the Roosevelt Academy come from the encyclopaedia entry for Middelburg; the telescope story from its entry for Hans Lipperhey; Kerckhoffs\'s dates and principle from the encyclopaedia entry for him.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Break a hidden code, then build one that survives being published',
      intro: 'Learners start by cracking a code whose only protection is that nobody knows the method, and finish by measuring what a real key is worth.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Crack the Caesar cipher', p: 'Shift every letter three places and a message looks unreadable. But once anyone knows the method, there are only 25 possible shifts, and a program tries them all in a moment. The secret was the method, so the protection was gone as soon as the method was known.' },
          { h3: '2. Count the keys', p: 'Security depends on how many keys an attacker would have to try. Learners work out the numbers for a PIN, a short password, a long one and a random key, and see how quickly the count grows with length.' },
          { h3: '3. Move the secret out', p: 'Take a small program that uses a key and move the key out of the code into a separate setting that is never shared. The code can then be published, shown to a teacher or checked by an AI assistant without giving anything away.' }
        ] },
        { kind: 'table', caption: 'How long an attacker needs, trying one billion keys a second', head: ['What protects it', 'Possible keys', 'Time to try them all'], rows: [
          ['A Caesar shift, method known', '25', 'far less than a millionth of a second'],
          ['A four-digit PIN', '10,000', 'ten millionths of a second'],
          ['Eight lower-case letters', '208,827,064,576', 'about three and a half minutes'],
          ['Twelve lower-case letters', '95,428,956,661,682,176', 'about three years'],
          ['A random 128-bit key', 'about 3.4 followed by 38 zeros', 'more than ten thousand billion billion years']
        ] },
        { kind: 'callout', h3: 'Why AI makes the old rule more important', p: 'Companies often give an AI assistant a hidden set of instructions, sometimes called a system prompt, and it is tempting to put secrets there: a discount code, an internal rule, even a password or an access key for another service. It is the same mistake as the hidden method. Users have repeatedly persuaded assistants to repeat their instructions, and a secret that sits inside the text a model reads is only as safe as the model\'s willingness to keep quiet. The safe design follows Kerckhoffs: assume anyone can read the prompt, keep keys on a server the model never sees, and let the assistant ask that server to act, with the server checking who is allowed to do what. The same goes for code written with AI help. An assistant asked to fix a program will happily copy a key it finds in the file into its answer, a public forum or a shared repository. A learner who has cracked a Caesar cipher in 25 tries and then kept a key out of their own code understands why the method can be public and the key never can.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for keeping secrets in code and AI tools',
      intro: 'For apps, websites, school projects and AI assistants. Taught from a town where a secret of 1608 escaped in a matter of weeks.',
      body: [
        { kind: 'table', caption: 'Security that does not depend on hiding the method', head: ['Habit', 'In practice', 'What it avoids', 'What it gives'], rows: [
          ['Assume the method is known', 'Design as if an attacker has read every line of the code', 'Safety that vanishes when someone looks', 'Protection that survives scrutiny'],
          ['Keep the secret small', 'Protect a key or password, not a whole design', 'Secrets too big to change', 'A secret that can be replaced in minutes'],
          ['Keep keys out of code and prompts', 'Store them in a separate setting or on a server', 'Keys leaking through shared code or AI chats', 'Code that is safe to share'],
          ['Use published, tested methods', 'Rely on well-known encryption, never a home-made cipher', 'Clever schemes nobody has checked', 'Methods experts have tried to break'],
          ['Plan for a leak', 'Know how to revoke and replace every key', 'A single leak that lasts for years', 'Fast recovery when things go wrong']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A secret-message game in Scratch. The child invents a code, a friend tries to break it, and together they discover that a longer key beats a cleverer method.' },
          { h3: 'For teenagers', p: 'The Caesar cipher broken in Python, then a password checker that counts possible keys, then a small app that reads its key from a separate file that is never shared.' },
          { h3: 'For adults', p: 'An audit of the passwords, shared links and AI chats in a working week, asking of each one: if the method were public, what would still keep this safe?' }
        ] },
        { kind: 'p', text: 'This section takes the telescope story from the encyclopaedia and uses standard arithmetic for the key counts. It makes no claim about the security of any organisation in Middelburg or Zeeland.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a secret-message game to keys kept safely out of the code',
    intro: 'The free lesson places each learner by watching them work on a real task. Neither age nor school decides the starting level.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Secret messages', p: 'Children make and break simple codes in games of their own.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Counting keys', p: 'Learners code a Caesar cipher and discover why the number of keys matters.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Defensive security', p: 'Teenagers learn how attacks work in order to stop them, ethically.', courses: ['cybersecurity-course-for-teens-ethical-defensive', 'python-complete-masterclass-teens'] },
      { band: 'Ages 18 to 67', h3: 'Safe tools at work', p: 'Adults build and use AI tools with every key kept where it belongs.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI assistant can be told to keep its instructions hidden. Why should a teenager in Middelburg learn to assume it cannot?',
    intro: 'Because a secret that depends on the listener staying quiet is not a secret at all.',
    p1: 'The instructions behind an AI assistant are text, and a language model is built to work with text. Ask it the right way, in the right order, and it may repeat what it was told to hide. Developers keep finding clever ways to stop this and users keep finding new ways around them, which is exactly the contest Kerckhoffs described: a protection that relies on the method staying hidden has to win every time, while the attacker only has to win once. Anyone who puts a password, a customer list or an access key inside a prompt has made the model the lock.',
    p2: 'A learner who has broken a Caesar cipher by trying all 25 shifts, and then counted how many tries a random key would need, sees the difference straight away. Deciding what counts as a secret, keeping it small and separate, and designing the system so that everything else can be public are human decisions. The model can write the code and explain the cipher. Keeping the key out of its reach is the programmer\'s job.',
    closer: 'So the case for a child in Middelburg learning to code in 2026 is not the telescope. It is that people who understand where secrets belong will be needed wherever AI tools touch passwords, money and private data, which is nearly everywhere.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'A live lesson for every household in Middelburg',
    intro: 'Every lesson is taught live over video, so a learner joins from home anywhere in the municipality, whether in the old centre or out in one of its villages.',
    cells: [
      { h3: 'A desk at home', p: 'The class meets on screen at the agreed hour. Nobody cycles anywhere, and a wet Zeeland evening makes no difference to it.' },
      { h3: 'Dutch school words kept', p: 'Groep 8, brugklas, vmbo, havo, vwo and the profiel are named in Dutch, because that is how Middelburg families talk about school; the lesson itself is in English.' },
      { h3: 'A first lesson with no bill', p: 'The learner works on a real task, the teacher recommends a level, a course and a time, and no payment details are asked for.' },
      { h3: 'Groups beyond Walcheren', p: 'Five to ten learners at one stage. Middelburg has 7,637 residents under fifteen, not enough to fill every level at every hour, so groups draw on learners from other towns and countries.' },
      { h3: 'On the regio Zuid calendar', p: 'Two lessons a week, about eight a month, at a set hour, with breaks for the regio Zuid school holidays that Zeeland follows.' },
      { h3: 'Teachers in India', p: 'India is three and a half hours ahead of Middelburg in summer and four and a half in winter, which leaves late afternoons, evenings and weekend mornings free for lessons.' }
    ],
    spec: { title: 'Thirty-two schools, and one class online', p: 'Middelburg has 23 primary establishments teaching 4,505 pupils and 9 secondary establishments teaching 4,501. A good coding group needs five learners at the same stage at the same hour, and they are much easier to find among learners of every age from 6 to 67 in many countries than within one town.' }
  },

  fees: {
    h2: 'What classes cost in Middelburg',
    intro: 'The full price list, nothing held back.',
    first: 'A real lesson on a real task, ending with a level and a course.',
    group: 'Per month, normally eight lessons, five to ten learners at one level.',
    private: 'Per month, normally eight lessons, one learner and one teacher.',
    closer: 'There is one price in US dollars for every country and no separate euro rate, so a family in the centre of Middelburg pays exactly what a family in a village of the municipality pays. Nothing is charged until the free lesson has settled a course and an hour, and payment is then arranged on WhatsApp. Pauses, switching format and missed lessons are covered on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, in their authors\' own words',

  book: {
    h2: 'Where is the learner starting from?',
    intro: 'The first task might be a secret-message game, a Caesar cipher to break in Python, or a small program that keeps its key out of the code.',
    success: 'Thank you. Your Middelburg class request has been sent.'
  },

  faq: {
    h2: 'Middelburg coding class questions',
    intro: 'The town, its history, its figures, and the lessons.',
    items: [
      { q: 'How many people live in Middelburg?', a: 'The national count was 50,439 on 1 January 2026, in 24,146 households in 2025. It was 47,523 in 2013 and 44,922 in 1995.' },
      { q: 'How old is Middelburg?', a: 'The encyclopaedia records that the canons built the abbey of Middelburg in 1123, and that the town received its town rights from Count Willem I of Holland in 1217.' },
      { q: 'What does Middelburg have to do with the telescope?', a: 'Hans Lipperhey, a spectacle maker living in Middelburg, applied for a patent on a telescope in 1608. It was refused after Jacob Metius of Alkmaar applied for one too and another young man in Middelburg was found to know the secret. Lipperhey was paid 900 karolusguldens for three binocular instruments instead.' },
      { q: 'What happened to Middelburg in 1940?', a: 'On 17 May 1940 a bombardment destroyed about a quarter of the inner city by fire, and more than 600 buildings were lost, according to the encyclopaedia.' },
      { q: 'How many schools are there in Middelburg?', a: 'The statistics count 23 primary establishments teaching 4,505 pupils and 9 secondary establishments teaching 4,501, with 1,428 MBO, 1,667 higher professional and 540 university students at institutions in the municipality. This page rates no school.' },
      { q: 'Do the classes teach hacking?', a: 'The security course is ethical and defensive. Teenagers learn how attacks work so that they can prevent them, practise only on systems they own or are allowed to test, and spend most of their time on passwords, keys and safe design.' },
      { q: 'What language are lessons in, and what time are they?', a: 'In English, with Dutch school words such as brugklas, havo and vwo left as they are. The teachers are in India, three and a half hours ahead of Middelburg in summer and four and a half in winter, so lessons fit late afternoons, evenings and weekend mornings. The hour is agreed in the free lesson, and regio Zuid holidays are kept.' },
      { q: 'Is there a Modern Age Coders classroom in Middelburg?', a: 'No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Middelburg coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Zeeland and beyond',
    h2: 'Across Zeeland, to Alkmaar, and back to the hub',
    html: 'Middelburg is the capital of the province covered by <a class="cg-inline-link" href="/coding-classes-in-zeeland">coding classes in Zeeland</a>, which lists all 13 of its municipalities. Jacob Metius, the second claimant to the telescope, came from the town covered by <a class="cg-inline-link" href="/coding-classes-in-alkmaar">coding classes in Alkmaar</a>, and the nearest built page across the provincial border is <a class="cg-inline-link" href="/coding-classes-in-bergen-op-zoom">Bergen op Zoom</a>. For machine learning from the start there is the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and the whole series is on the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Message us on WhatsApp'
  },

  footerHeading: 'Middelburg, Zeeland and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-zeeland', label: 'Zeeland' },
    { href: '/coding-classes-in-bergen-op-zoom', label: 'Bergen op Zoom' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-mdb .cg-hero-grid { align-items: start; gap: clamp(1rem, 2.6vw, 2.1rem); }
.cg-root.cg-mdb .cg-hero h1 { font-weight: 640; letter-spacing: -0.018em; line-height: 1.08; }
.cg-root.cg-mdb .cg-capsule { border-top: 3px solid var(--cg-accent); padding-top: 1.1rem; }
.cg-root.cg-mdb .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-mdb .cg-section-head h2 { max-width: 28ch; letter-spacing: -0.012em; }
.cg-root.cg-mdb .cg-grid-3 { gap: clamp(0.9rem, 2vw, 1.6rem); }
.cg-root.cg-mdb .cg-card { border-radius: 6px; border-left: 3px solid var(--cg-accent-soft); }
.cg-root.cg-mdb .cg-table caption { letter-spacing: 0.03em; font-weight: 700; }
.cg-root.cg-mdb .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mdb .cg-table td:first-child { font-weight: 700; }
.cg-root.cg-mdb .cg-ladder-col { border-top: 3px solid var(--cg-accent-soft); padding-top: 0.85rem; }
`,

  dossier: {
    curriculumAuthority: 'Gemeente Middelburg, Zeeland: 50,439 residents (statistics, 1 January 2026), 50,152 (2025), 47,523 (2013), 44,922 (1995); 24,483 men and 25,669 women (2025); ages (2026) 7,637 under fifteen, 6,143 fifteen to twenty-five, 11,828 twenty-five to forty-five, 13,003 forty-five to sixty-five, 11,828 sixty-five or over (summing to 50,439); 24,146 households (2025) averaging 2.03, 10,354 one-person, 13,792 multi-person, 6,949 with children; 5,304 hectares, 4,838 land, 466 water, published density 1,037; 24,857 dwellings (2025), 15,163 owner-occupied at 61 percent, 9,694 rented at 39 percent; estimated average value 306,000 euro; income 32,900 euro per resident and 39,600 per recipient (2024); 2.7 percent in poverty; 86 percent born in the Netherlands, 8.7 percent European and 15 percent non-European origin (2025); 25 wijken, 73 buurten; 23 primary establishments with 4,505 pupils, 9 secondary with 4,501; 1,428 MBO, 1,667 HBO and 540 WO students at institutions. Encyclopaedia (Middelburg): in 1123 the canons built a new monastery inside the ring-wall stronghold, the abbey; town rights in 1217 from Count Willem I of Holland; the abbey tower almost 91 metres high, the Lange Jan; the oldest parts of the late-Gothic town hall on the Markt, used as a university building, date from 1458; the bombardment of 17 May 1940 destroyed about a quarter of the inner city by fire, more than 600 buildings lost; the Kamer van Zeeland was after Amsterdam the most powerful VOC chamber; the Roosevelt Academy founded in 2004. Encyclopaedia (Hans Lipperhey): born Wesel about 1570, buried Middelburg 29 September 1619; living in Middelburg and married there in 1594; poorter from 1602; on 25 September 1608 asked the States of Zeeland for a letter of introduction; his patent application was followed weeks later by one from the Alkmaar spectacle maker Jacob Metius, and in October 1608 another young man in Middelburg was found to know it, so the States General granted no patent; he was asked to deliver three binocular instruments for 900 karolusguldens; a year later Galileo, inspired by the news, made an improved version. Encyclopaedia (Auguste Kerckhoffs): born 19 January 1835 in Nuth, died 9 August 1903 in Paris; La Cryptographie Militaire, Journal des Sciences Militaires, 1883; six principles, the second that the design of a system should not require secrecy. Regio Zuid holidays. The city page teaches security that does not depend on a hidden method.',
    localProject: 'Keep the key secret, never the method. Lipperhey\'s 1608 telescope patent failed because the design was already known to Metius of Alkmaar and another young man in Middelburg, and Galileo improved it from the news within a year; Kerckhoffs\'s second principle of 1883 turns that into the rule that a system must stay safe when its design is known. The worked form cracks a Caesar cipher (25 shifts once the method is known) and counts key spaces at one billion guesses a second: 10,000 for a four-digit PIN, 208,827,064,576 for eight lower-case letters (about three and a half minutes), 95,428,956,661,682,176 for twelve (about three years), about 3.4 times ten to the 38 for a random 128-bit key (more than ten to the 22 years). For AI, secrets placed in a hidden system prompt are security through obscurity, and keys belong on a server the model never sees; AI coding assistants can copy keys found in code. The habits are assuming the method is known, keeping the secret small, keeping keys out of code and prompts, using published methods and planning for a leak. Chosen after a case-sensitive check found no page using Caesar, cipher, brute force, key space, API key or system prompt. Distinct from Roosendaal, which concerns validating input at a trust boundary and prompt injection, not where secrets live, and from Lelystad, which concerns single points of failure.',
    requiredMentions: [
      '47,523',
      '24,146',
      '10,354',
      '6,949',
      '24,857',
      '15,163',
      '9,694',
      '13,792',
      '7,637',
      '6,143',
      '13,003',
      'Lipperhey',
      'Metius',
      'karolusguldens'
    ],
    sources: [
      { claim: 'Gemeente Middelburg: 50,439 inwoners (2026), 50,152 (2025), 47,523 (2013), 44,922 (1995); mannen 24,483, vrouwen 25,669 (2025); ages 0-15 7,637, 15-25 6,143, 25-45 11,828, 45-65 13,003, 65+ 11,828 (2026); 24,146 huishoudens, 10,354 eenpersoons, 13,792 meerpersoons, 6,949 met kinderen, gemiddeld 2.03 (2025); 5,304 hectare, land 4,838, water 466; bevolkingsdichtheid 1,037; woningvoorraad 24,857, koop 15,163 (61 percent), huur 9,694 (39 percent) (2025); gemiddelde WOZ 306,000 euro; gemiddeld inkomen per inwoner 32,900 and per inkomensontvanger 39,600 euro (2024); personen in armoede 2.7 percent; basisonderwijs 23 vestigingen 4,505 leerlingen, voortgezet onderwijs 9 vestigingen 4,501 leerlingen; MBO 1,428, HBO 1,667, WO 540; geboren in Nederland 86 percent; herkomst Europa 8.7 percent, buiten Europa 15 percent (2025); 25 wijken, 73 buurten.', url: 'https://allecijfers.nl/gemeente/middelburg/' },
      { claim: 'Middelburg (encyclopaedia): In 1123 bouwden de kanunniken een nieuw klooster binnen de veilige ringwalburg: de abdij van Middelburg. In 1217 kreeg Middelburg stadsrechten van graaf Willem I van Holland. De Abdij van Middelburg heeft een bijna 91 meter hoge toren die de Lange Jan genoemd wordt. De oudste delen van het als universiteitsgebouw in gebruik zijnde laatgotische stadhuis aan de Markt dateren uit 1458. Bij dit bombardement op Middelburg werd ongeveer een kwart van de binnenstad door brand verwoest, waarbij meer dan 600 panden verloren gingen (17 mei 1940). De Kamer van Zeeland was na Amsterdam de machtigste handelskamer van de VOC. In 2004 kreeg Middelburg een vorm van universitair onderwijs. In dat jaar werd de Roosevelt Academy opgericht.', url: 'https://nl.wikipedia.org/wiki/Middelburg_(Zeeland)' },
      { claim: 'Hans Lipperhey (encyclopaedia): Hans (of Johannes) Lipperhey, (Wezel, rond 1570 - Middelburg (Zeeland), begraven 29 september 1619). In 1594 woonde hij in Middelburg, waar hij in dat jaar in het huwelijk trad. In 1602 werd hij poorter van deze stad. In 1608, op 25 september vroeg hij bij het dagelijks bestuur van de Staten van Zeeland een introductiebrief. Toen Lipperheys octrooiaanvraag enkele weken later gevolgd werd door een tweede aanvraag van een patent, nu van de Alkmaarse brillenmaker Jacob Metius, en toen in oktober 1608 bleek dat in Middelburg een andere jongman woonde, besloten de gedeputeerden van de Staten-Generaal om geen patent toe te kennen. Wel kreeg Lipperhey de opdracht om drie binoculaire kijkers te leveren. Hij ontving daar 900 karolusguldens voor. Al een jaar later fabriceerde Galileo, geinspireerd door het nieuws van Lipperheys vinding, een verbeterde versie van de verrekijker.', url: 'https://nl.wikipedia.org/wiki/Hans_Lipperhey' },
      { claim: 'Auguste Kerckhoffs (encyclopaedia): Jean Guillaume Auguste Victor Francois Hubert Kerckhoffs, born 19 January 1835 in Nuth, Netherlands, died 9 August 1903 in Paris; La Cryptographie Militaire, published in Le Journal des Sciences Militaires in 1883; six principles of practical cipher design, the second: the design of a system should not require secrecy, and compromise of the system should not inconvenience the correspondents.', url: 'https://en.wikipedia.org/wiki/Auguste_Kerckhoffs' },
      { claim: 'School holiday regions: regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland and Noord-Holland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'That Lipperhey invented the telescope, or that it was invented in Middelburg. The source records a patent application that was refused because others knew the design; priority is not settled here.',
      'The name of the other young man in Middelburg. The source read does not name him.',
      'The town figure of 43,165 from the encyclopaedia and the smallest-capital claim. Both belong to the Zeeland page\'s argument about units, and neither is combined with the statistics here.',
      'Any claim about the security of any organisation, school or company in Middelburg or Zeeland.',
      'Real attacker speeds. The key-space table assumes one billion guesses a second for comparison only.',
      'Anything the Zeeland, Alkmaar, Bergen op Zoom and Roosendaal pages own, including their figures and arguments.'
    ]
  }
};
