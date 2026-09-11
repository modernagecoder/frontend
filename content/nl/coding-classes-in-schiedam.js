'use strict';
// Schiedam: charter of 1275, the jenever town nicknamed Zwart Nazareth, six
// classical windmills. 81,931 residents.
// Spine (modest, per the Phase 5 method): distillation keeps what comes over
// with the vapour and leaves the rest in the still. Knowledge distillation in
// AI trains a small model to copy a large one: it keeps what the copying data
// exercised, inherits the teacher's mistakes, and leaves behind whatever was
// never asked. A distilled model has to be tested against the truth, not only
// against its teacher.

module.exports = {
  slug: 'coding-classes-in-schiedam',
  code: 'sdm',
  accent: '#2E6800',
  accentRationale: 'Schiedam: a juniper green for the jenever town, placed by the solver more than twenty-six units from every page it links to, the Rotterdam teal and the Zuid-Holland ochre among them',
  pageType: 'city',
  place: {
    name: 'Schiedam',
    eyebrow: 'Schiedam, Zuid-Holland',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Zuid-Holland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Schiedam, Netherlands',
  title: 'Coding Classes in Schiedam | Modern Age Coders',
  description: 'Online coding, Python, AI and app classes taught live for Schiedam, ages 6 to 67, from Kethel and Woudhoek to Groenoord and Nieuwland. First lesson is free.',
  ogDescription: 'Live online coding, Python, AI and mathematics in the jenever town, on a page about what a distilled AI model keeps and what it leaves in the still.',
  twitterDescription: 'Schiedam classes from age 6 to 67, taught live online, beginning with a free lesson.',
  ogImageCourse: 'python-ai-automation-masterclass-college',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Schiedam Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Schiedam, taught in English.'
  },

  h1: 'Coding classes in Schiedam, the jenever town, and what a distilled AI model leaves in the still',
  capsuleQ: 'What are the best coding classes in Schiedam?',
  capsule: 'Schiedam, a town of 81,931 on 1 January 2026 in the national count, received its charter in 1275 and had its golden age in the eighteenth century, when tens of branderijen and distilleries exported jenever around the world and earned the town the nickname Zwart Nazareth. Six classical windmills still shape the skyline. Distilling is a good way into one of the most used techniques in modern AI, knowledge distillation, in which a small model is trained to copy a large one: like a still, it keeps what comes over and leaves the rest behind, and the copy inherits the original\'s mistakes along with its skill. For every age from 6 to 67, Modern Age Coders runs live classes online in English; the first is free, then a place in a group costs USD 100 a month and private tuition USD 150.',
  lead: 'A still does not make anything new. It heats what it is given, collects what rises, and leaves the rest in the pot, so the spirit that comes out is shaped both by the mash that went in and by what the process could carry over. Schiedam built its eighteenth-century fortune on that simple fact, with tens of distilleries shipping jenever across the world. Artificial intelligence has borrowed the word. In knowledge distillation, a large and expensive model, the teacher, answers a great many questions, and a smaller, cheaper model, the student, is trained to give the same answers. The student can be remarkably good. It is also exactly as good as the questions it was trained on, it copies the teacher\'s errors as faithfully as its insights, and anything the teacher knew but was never asked stays behind in the still.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Schiedam.',

  picks: {
    eyebrow: 'Course picks for Schiedam',
    h2: 'Four courses for the town of the tallest mills',
    intro: 'A child in Kethel who wants to make a quiz game, a teenager in Groenoord curious how small AI models fit on a phone, a student in Nieuwland summarising long documents with a model, and an adult in Woudhoek whose firm wants a cheaper AI tool that works as well as the expensive one. Their first lesson is free, whichever of them it is.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Python where a child builds a question-and-answer bot by copying answers from a bigger list, then finds the questions it cannot handle.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'An app that uses a small AI model on the device, with tests that check its answers against the truth rather than against a bigger model.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Training and evaluating compact models in Python, including what is lost when a large model is copied into a small one.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Choosing between large and small AI tools with a checklist that asks what the cheaper one was trained to copy.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Schiedam today',
      h2: 'A charter of 1275, a golden age of jenever, and six mills on the skyline',
      intro: 'Schiedam is one woonplaats, divided by the statistics office into 12 wijken and 70 buurten, among them Kethel, Spaland, Woudhoek, Groenoord, Nieuwland, Bijdorp and Schiedam-Oost, -West and -Zuid. On 1,781 hectares of land within 1,986, it houses a published 4,617 residents to the square kilometre, a dense town by any measure.',
      body: [
        { kind: 'spec', title: 'Jenever, and a nickname', p: 'In 1275 town rights were granted by Aleid van Holland. The eighteenth century was a golden age for Schiedam, as imports of drink from abroad came to a halt and jenever distilling rose: tens of branderijen and distilleries were founded and exported all over the world. The jenever industry gave Schiedam the nickname Zwart Nazareth. The Jenevermuseum has been housed on the historic Lange Haven since 1996.' },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'The mills', p: 'Six classical windmills still define the townscape, and several of them count among the tallest classical windmills in the world. De Noord is one of the six.' },
          { h3: 'A busy town on little land', p: 'With 1,781 hectares of land and 205 of water, Schiedam is small in area and large in people: the published density of 4,617 residents per square kilometre is among the highest of any page in this series.' },
          { h3: 'The wijken', p: 'The encyclopaedia names wijken including Bijdorp, Groenoord, Kethel, Nieuwland, Schiedam-Oost, Schiedam-West, Schiedam-Zuid, Spaland and Woudhoek.' }
        ] }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'What the still keeps',
      h2: 'From a pot still to a student model',
      intro: 'The left-hand column describes distillation in general terms, not any Schiedam distillery; the right-hand column describes knowledge distillation as it is used in AI.',
      body: [
        { kind: 'table', caption: 'Two kinds of distillation, side by side', head: ['Step', 'In a still', 'In knowledge distillation', 'The consequence'], rows: [
          ['What goes in', 'the mash', 'a large teacher model and a set of questions', 'the output can be no better than the input'],
          ['What is carried over', 'what rises with the vapour', 'the teacher\'s answers to those questions', 'only what the process exercises is kept'],
          ['What stays behind', 'what does not rise', 'whatever the teacher knew but was never asked', 'gaps nobody can see in the result'],
          ['Faults in the input', 'carried into the spirit if they rise too', 'the teacher\'s mistakes, copied faithfully', 'the student is confidently wrong where the teacher was'],
          ['The result', 'a concentrated spirit', 'a smaller, faster, cheaper model', 'valuable, and narrower than it looks']
        ] },
        { kind: 'p', text: 'The attraction of knowledge distillation is real. A distilled model can run on a phone instead of a data centre, answer in a fraction of the time and cost far less, and on the questions it was trained with it may be nearly as good as the teacher. The risk is in how it is judged. It is tempting to test the student by comparing it with the teacher, because the teacher is available and the truth is expensive. That test only measures copying. A student that matches its teacher perfectly has matched the teacher\'s errors perfectly too, and a student tested only on the kinds of question it was trained on will look better than it will be on anything else. Honest evaluation compares the student with the truth, on questions of every kind, including the ones nobody thought to distil.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Schiedam in the national figures',
      intro: 'The national statistics as published for the municipality, each figure with its year, followed by the encyclopaedia history and the few calculations made on this page.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'How many', p: '81,931 residents on 1 January 2026 and 82,232 a year earlier; 76,216 in 2013 and 73,480 in 1995, a rise the figures site gives as 12 percent. In 2025 the town had 41,090 men and 41,142 women.' },
          { h3: 'Ages', p: 'In 2026 there were 12,890 children under fifteen, 8,959 people aged fifteen to twenty-five, 24,280 aged twenty-five to forty-five, 21,006 aged forty-five to sixty-five and 14,796 aged sixty-five and over.' },
          { h3: 'Households', p: '39,168 households in 2025 with an average of 2.07 people: 16,390 living alone, 9,763 without children and 13,015 with them.' },
          { h3: 'Homes, income, poverty', p: '38,420 dwellings in 2025, split evenly between owned and rented, at an estimated average value of 314,000 euro. Average income was 32,300 euro per resident and 40,000 per income recipient in 2024, and 5 percent of residents lived in poverty.' },
          { h3: 'Schools', p: '24 primary establishments with 7,114 pupils, around 296 each, and 8 secondary establishments with 4,076, around 510 each. The site also records 1,614 MBO, 1,840 higher professional and 790 university students at institutions in the town.' },
          { h3: 'Origin and arithmetic', p: '59,340 residents were born in the Netherlands and 22,892 abroad in 2025; by origin, 41,898 were Dutch, 11,801 European and 28,533 from outside Europe. Each split, the age groups and the household types were totalled only to check them. 81,931 minus 73,480 is 8,451; 7,114 over 24 is about 296 and 4,076 over 8 about 510.' }
        ] },
        { kind: 'p', text: 'Neither the municipality of Schiedam, the Jenevermuseum, any distillery nor any school in the town has any tie to Modern Age Coders, and none is implied. All population, housing, income and school figures are the national statistics as published for Schiedam for the years given. The charter, the eighteenth-century distilling boom, the nickname, the mills, the museum and the wijken are taken from the encyclopaedia entry for Schiedam, which gives its own population figure of 82,055 for 1 January 2026; that figure comes from a different source and is not mixed with the statistics here.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Test the copy against the truth, not against the original',
      intro: 'Knowledge distillation is everywhere in AI products today. The discipline it needs is mostly about evaluation, and it can be learned on a very small scale.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Record what was distilled', p: 'Keep the list of questions the teacher answered to train the student. That list is the still: it decides what could come over, and anything outside it was never offered to the student at all.' },
          { h3: '2. Score against the truth', p: 'Build a test set with correct answers from outside both models, and score teacher and student on it separately. Agreement between them is not accuracy; it is only agreement.' },
          { h3: '3. Look outside the training mix', p: 'Include questions unlike anything in the distillation set: rare topics, other languages, edge cases. That is where the student and teacher usually part company, and where users get hurt.' }
        ] },
        { kind: 'table', caption: 'What a distilled model keeps and what it can lose', head: ['What was measured', 'How it looks', 'What it can hide', 'A better check'], rows: [
          ['Agreement with the teacher', '98 percent match', 'the teacher\'s own errors, copied', 'accuracy against known correct answers'],
          ['Accuracy on the distillation topics', 'close to the teacher', 'weakness on topics never distilled', 'a test set drawn from real use'],
          ['Average accuracy', 'a single strong number', 'failures on rare but important cases', 'scores by type of question'],
          ['Speed and cost', 'far better than the teacher', 'nothing, this gain is real', 'keep measuring it alongside quality'],
          ['A spirit from a still', 'concentrated and clear', 'whatever stayed in the pot', 'knowing what the mash contained']
        ] },
        { kind: 'callout', h3: 'Why a copy can be more confident than it deserves', p: 'A teacher model that is unsure about a question often spreads its answer across several possibilities. Distillation training can pass that uncertainty on, but in practice students are frequently trained on the teacher\'s single best answer, and they learn to give that answer firmly. The student then states, without hesitation, conclusions the teacher only half believed, and it does so fastest on the questions where it has no business being sure. The remedies are not exotic. Keep the teacher\'s full spread of answers where possible, measure the student against real ground truth rather than against its teacher, test it well outside the questions it was distilled on, and treat speed and cost as gains to weigh against a documented loss rather than as a free lunch. The same thinking applies to every summary, compressed file and shortened report: something concentrated from a larger source is only as trustworthy as the process that made it, and the part that did not come over is invisible in the result. Schiedam, with its mills and its distilling past, is a good place to remember what stays in the pot.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five checks for any smaller copy of a larger model',
      intro: 'For distilled models, compressed models, summaries and any cheaper substitute for an expensive system. Worked through in the town that distilled for the world.',
      body: [
        { kind: 'table', caption: 'Evaluating a copy honestly', head: ['Check', 'Method', 'Hazard it guards against', 'Outcome'], rows: [
          ['Keep the recipe', 'Store the distillation questions and the teacher version used', 'Not knowing what the student was offered', 'A known scope'],
          ['Ground truth', 'Score both models on answers verified independently', 'Copying scored as accuracy', 'Real accuracy for each'],
          ['Breadth', 'Test on topics and formats absent from training', 'Hidden gaps outside the distilled range', 'A map of where the student fails'],
          ['Confidence', 'Compare how sure each model is on hard questions', 'A student more certain than its teacher', 'Calibrated answers'],
          ['Trade-off in writing', 'Record what was gained and what was lost, side by side', 'Speed hiding a quality loss', 'A decision others can review']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A quiz bot that learns by copying a friend\'s answers. The child finds that the bot copies the friend\'s wrong answers too, and never learns the questions the friend was not asked.' },
          { h3: 'For teenagers', p: 'A small Python classifier trained to imitate a larger one. The teenager scores it first against the larger model and then against the true labels, and explains the gap between the two numbers.' },
          { h3: 'For adults', p: 'A proposal to replace an expensive AI tool with a cheaper one, rewritten with a test set of real cases and correct answers. Adults usually find the cheaper tool is good in the middle and weak at the edges.' }
        ] },
        { kind: 'p', text: 'This section uses the encyclopaedia\'s account of Schiedam\'s distilling history only as an image, and general knowledge of how knowledge distillation works in machine learning. It describes no Schiedam distillery\'s methods and no particular AI product.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a quiz bot that copies a friend to a model scored against the truth',
    intro: 'The level is set in the free lesson by watching the learner handle a real task. Neither age alone nor which wijk they live in fixes where they start.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Copying a friend', p: 'Children build a bot that copies answers and find what it gets wrong.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Right, or just the same?', p: 'Learners check copied answers against a key instead of against the source.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Student and teacher', p: 'Teenagers train a small model to imitate a larger one and score both.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'The cheaper tool', p: 'Adults test a lighter AI tool on real cases before adopting it.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'Many AI tools are smaller copies of bigger ones. Why should a teenager in Schiedam ask what was left in the still?',
    intro: 'Because a town that distilled for the world knows that the spirit is only part of what went into the pot.',
    p1: 'A great many of the AI features people use every day, on phones, in browsers and inside apps, run on compact models distilled from much larger ones. They are fast and cheap, and on everyday requests they can be very good. They are also narrower than they appear. A distilled model has learned from the questions its makers chose, it reproduces its teacher\'s errors, and it can answer with more confidence than the teacher had. None of that shows in a demo, which naturally uses the kind of question the model handles best.',
    p2: 'A learner who has trained a small model to copy a large one, scored it against its teacher and then against the truth, and watched the two scores come apart, understands evaluation in a way that no product page will teach. Asking what a model was trained to copy, testing it on questions outside that range and weighing speed against a measured loss are decisions that belong to people. The models will keep getting smaller and quicker. Knowing what they left behind remains a human task.',
    closer: 'So the reason for a child in Schiedam to learn to code in 2026 is not the mills or the museum. It is that someone who asks what a smaller model left in the still will be needed wherever cheap copies of powerful AI are put in front of people.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes for a close-packed town',
    intro: 'Schiedam fits more than eighty thousand people onto under eighteen square kilometres of land, and a class that starts at home saves every one of them a trip through busy streets.',
    cells: [
      { h3: 'From the living room', p: 'A pupil in Spaland and a pupil in Bijdorp log on at the same minute from their own homes. No cycle through the evening traffic and no waiting at a door afterwards.' },
      { h3: 'School vocabulary left in Dutch', p: 'Brugklas, vmbo, havo, vwo, groep and the profielkeuze are never translated during a lesson; the explanations around them are in English.' },
      { h3: 'A free lesson that teaches', p: 'The opening session is a lesson, not a sales demonstration. The teacher sets a real task, watches how it is handled, and afterwards proposes a level, a course and a regular time, with no payment details taken.' },
      { h3: 'Groups of equals', p: 'Five to ten learners who stand at the same point in the same subject. Schiedam has 12,890 residents under fifteen, but five of them matched on subject, stage and hour is rare, so a group may include learners from abroad.' },
      { h3: 'Regio Midden calendar', p: 'Classes meet twice a week, about eight times a month, in one fixed slot, and break for the regio Midden holidays that Zuid-Holland schools keep.' },
      { h3: 'Evenings on Indian time', p: 'Because the teachers work from India, three and a half hours ahead in the Dutch summer and four and a half in winter, late afternoons, evenings and weekend mornings are all practical here.' }
    ],
    spec: { title: 'Thirty-two schools on a small map, and one group from further away', p: 'Schiedam has 24 primary establishments with 7,114 pupils and 8 secondary establishments with 4,076. A coding group still depends on five learners who line up on subject, stage and hour, and across all ages from 6 to 67 and many countries that line-up happens much more easily than in one town.' }
  },

  fees: {
    h2: 'The price of classes in Schiedam',
    intro: 'Three figures, shown in full here rather than on request.',
    first: 'One real lesson with a real task, closing with a level and a recommended course.',
    group: 'Monthly, usually eight classes, with five to ten learners at one level.',
    private: 'Monthly, usually eight classes, one learner and a dedicated teacher.',
    closer: 'The dollar price is the same everywhere and no euro list exists beside it, so a household in Kethel pays what one in Schiedam-Zuid pays. No payment is taken until the free lesson has settled the course and the slot, after which WhatsApp is used to arrange it. The pricing page covers pauses, a change of format and missed classes.'
  },

  reviewsH2: 'Six Google reviews, printed without edits',

  book: {
    h2: 'Where does the learner stand today?',
    intro: 'The first task might be a quiz bot that copies a friend, a set of copied answers checked against a key, or a small model trained to imitate a bigger one and tested against the truth.',
    success: 'Thank you. Your Schiedam class request has been sent.'
  },

  faq: {
    h2: 'Schiedam coding class questions',
    intro: 'The jenever town, its mills, its numbers, and the lessons.',
    items: [
      { q: 'Which wijken does Schiedam have?', a: 'The statistics office divides the town into 12 wijken and 70 buurten. Among the wijken named in the encyclopaedia are Bijdorp, Groenoord, Kethel, Nieuwland, Schiedam-Oost, Schiedam-West, Schiedam-Zuid, Spaland and Woudhoek.' },
      { q: 'How many people live in Schiedam?', a: 'The national count was 81,931 on 1 January 2026, down from 82,232 a year earlier, in 39,168 households in 2025. In 1995 it was 73,480, and the figures site gives the rise since then as 12 percent.' },
      { q: 'Why is Schiedam called Zwart Nazareth?', a: 'According to the encyclopaedia, the nickname came from the jenever industry, which boomed in the eighteenth century when tens of branderijen and distilleries were founded and exported around the world.' },
      { q: 'What is special about the Schiedam windmills?', a: 'Six classical windmills still shape the townscape, and several of them are among the tallest classical windmills in the world, the encyclopaedia says. De Noord is one of them.' },
      { q: 'When did Schiedam become a town?', a: 'Town rights were granted in 1275 by Aleid van Holland. The Jenevermuseum on the Lange Haven, open there since 1996, tells the story of the distilling that followed centuries later.' },
      { q: 'How many schools are there in Schiedam?', a: 'The statistics list 24 primary establishments with 7,114 pupils and 8 secondary establishments with 4,076, together with 1,614 MBO, 1,840 higher professional and 790 university students at institutions in the town. This page rates none of them.' },
      { q: 'In what language, and at what hours, are lessons given?', a: 'Lessons are given in English, and Dutch school terms like groep, vmbo and vwo keep their Dutch names. The teachers are in India, three and a half hours ahead of Schiedam in summer and four and a half in winter, so afternoon, evening and weekend slots are straightforward. The slot is set during the free lesson, and regio Midden holidays are observed.' },
      { q: 'Is there a Modern Age Coders classroom in Schiedam?', a: 'No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Schiedam coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore the Rijnmond and beyond',
    h2: 'Into Rotterdam, around the port, and out to the province',
    html: 'Schiedam\'s large neighbour has its own page at <a class="cg-inline-link" href="/coding-classes-in-rotterdam">coding classes in Rotterdam</a>, with district pages beneath it including <a class="cg-inline-link" href="/coding-classes-in-delfshaven">Delfshaven</a>. Across the river, <a class="cg-inline-link" href="/coding-classes-in-nissewaard">Nissewaard</a> has a page too, and every town and city in the province with one is gathered on <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>. To begin with machine learning directly, go to the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>; the complete series is on the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Chat with us on WhatsApp'
  },

  footerHeading: 'Schiedam, Zuid-Holland and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-rotterdam', label: 'Rotterdam' },
    { href: '/coding-classes-in-zuid-holland', label: 'Zuid-Holland' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-sdm .cg-hero-grid { grid-template-columns: 0.92fr 1.08fr; align-items: center; gap: clamp(1rem, 2.5vw, 2.05rem); }
.cg-root.cg-sdm .cg-hero h1 { font-weight: 600; letter-spacing: -0.012em; line-height: 1.11; }
.cg-root.cg-sdm .cg-capsule { border-top: 2px solid var(--cg-accent); padding-top: 1.3rem; }
.cg-root.cg-sdm .cg-eyebrow { letter-spacing: 0.11em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-sdm .cg-section-head h2 { max-width: 35ch; letter-spacing: -0.01em; }
.cg-root.cg-sdm .cg-grid-3 { gap: clamp(1.1rem, 2.6vw, 2.1rem); }
.cg-root.cg-sdm .cg-card { border-radius: 14px; border-top: 3px solid var(--cg-accent-soft); }
.cg-root.cg-sdm .cg-table caption { letter-spacing: 0.015em; font-weight: 700; }
.cg-root.cg-sdm .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-sdm .cg-table td:last-child { font-weight: 600; }
.cg-root.cg-sdm .cg-ladder-col { border-left: 4px solid var(--cg-accent-soft); padding-left: 0.95rem; }
`,

  dossier: {
    curriculumAuthority: 'Gemeente Schiedam, Zuid-Holland: 81,931 residents (statistics, 1 January 2026), 82,232 (2025), 76,216 (2013), 73,480 (1995), growth given by the site as 8,451 or 12 percent; 41,090 men and 41,142 women (2025); ages (2026) 12,890 under fifteen, 8,959 fifteen to twenty-five, 24,280 twenty-five to forty-five, 21,006 forty-five to sixty-five, 14,796 sixty-five or over; 39,168 households (2025) averaging 2.07, 16,390 one-person, 9,763 multi-person without children, 13,015 with children; 1,986 hectares, 1,781 land, 205 water, published density 4,617; 38,420 dwellings (2025), half owner-occupied and half rented; estimated average value 314,000 euro; income 32,300 euro per resident and 40,000 per recipient (2024); 5 percent in poverty; 59,340 born in the Netherlands and 22,892 abroad, origin 41,898 Dutch, 11,801 European, 28,533 non-European (2025); one woonplaats, 12 wijken, 70 buurten; 24 primary establishments with 7,114 pupils and 8 secondary with 4,076 (2025); 1,614 MBO, 1,840 HBO and 790 WO students at institutions. Encyclopaedia: town rights granted in 1275 by Aleid van Holland (Aleida van Avesnes); the eighteenth century a golden age as drink imports stopped and jenever distilling rose, with tens of branderijen and distilleries exporting worldwide; the jenever industry gave the nickname Zwart Nazareth; six classical windmills still define the townscape, several among the tallest classical windmills in the world, De Noord among them; the Jenevermuseum on the Lange Haven since 1996; wijken including Bijdorp, Groenoord, Kethel, Nieuwland, Schiedam-Oost, Schiedam-West, Schiedam-Zuid, Spaland, Woudhoek; infobox 82,055 on 1 January 2026 and 19.86 square kilometres, not combined with the statistics. Regio Midden holidays. The city page teaches knowledge distillation and how to evaluate a distilled model.',
    localProject: 'A copy is tested against the truth, not against the original. A still keeps what rises and leaves the rest in the pot; knowledge distillation trains a small student model on a large teacher\'s answers to a chosen set of questions, so the student keeps what those questions exercised, copies the teacher\'s errors faithfully, can become more confident than the teacher when trained on single best answers, and never learns what was not asked. Agreement with the teacher is therefore not accuracy, and accuracy on distilled topics is not accuracy in use. The defences are keeping the distillation questions and teacher version, scoring both models against independently verified answers, testing outside the distilled range, comparing confidence on hard questions, and recording what was gained and lost side by side. The distilling history is used as an image only; no Schiedam distillery or AI product is described. Chosen after a case-sensitive check found no page using distil in any form. Distinct from accuracy follows use (Oss), which concerns reused data rather than a model copying a model, from plurality and argmax (Meierijstad), and from format durability (Hilversum).',
    requiredMentions: [
      '73,480',
      '76,216',
      '39,168',
      '16,390',
      '13,015',
      '38,420',
      '7,114',
      '14,796',
      'Zwart Nazareth',
      'Jenevermuseum',
      'Aleid',
      'Kethel',
      'Woudhoek',
      'Spaland'
    ],
    sources: [
      { claim: 'Gemeente Schiedam: 81,931 inwoners (2026), 82,232 (2025), 76,216 (2013), 73,480 (1995), growth 8,451 (12 percent); mannen 41,090, vrouwen 41,142 (2025); 39,168 huishoudens, 16,390 eenpersoons (42 percent), 9,763 meerpersoons zonder kinderen (25 percent), 13,015 met kinderen (33 percent), gemiddeld 2.07 (2025); ages 0-15 12,890, 15-25 8,959, 25-45 24,280, 45-65 21,006, 65+ 14,796 (2026); 1,986 hectare, land 1,781, water 205; bevolkingsdichtheid 4,617; woningvoorraad 38,420, 50 percent koop, 50 percent huur (2025); gemiddelde WOZ 314,000 euro; gemiddeld inkomen per inwoner 32,300 and per inkomensontvanger 40,000 euro (2024); personen in armoede 5 percent; basisonderwijs 24 vestigingen 7,114 leerlingen, voortgezet onderwijs 8 vestigingen 4,076 leerlingen, MBO 1,614, HBO 1,840, WO 790 (2025); geboren in Nederland 59,340, buiten Nederland 22,892, herkomst Nederland 41,898, Europa 11,801, buiten Europa 28,533 (2025); 12 wijken, 70 buurten, 1 woonplaats.', url: 'https://allecijfers.nl/gemeente/schiedam/' },
      { claim: 'Schiedam (encyclopaedia): In 1275 werden stadsrechten verleend door vrouwe Aleid van Holland (Aleida van Avesnes). De achttiende eeuw was voor Schiedam een Gouden Eeuw, als gevolg van de stilgevallen drankimport uit het buitenland en de opkomst van de jeneverstokerij. Er ontstonden tientallen branderijen en destilleerderijen die over de hele wereld exporteerden. De jeneverindustrie gaf Schiedam de bijnaam Zwart Nazareth. De zes klassieke windmolens bepalen nog steeds het stadsbeeld; enkele van deze molens behoren tot de hoogste klassieke windmolens ter wereld; De Noord among the six. Het Jenevermuseum gevestigd aan de historische Lange Haven since 1996. Wijken: Bijdorp, Groenoord, Kethel, Nieuwland, Schiedam-Oost, Schiedam-West, Schiedam-Zuid, Spaland, Woudhoek. Infobox: 19,86 km2, 82.055 inwoners (1 januari 2026).', url: 'https://nl.wikipedia.org/wiki/Schiedam' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Why the jenever industry produced the nickname Zwart Nazareth. The source gives the nickname and its link to the industry, not the reason.',
      'The number of distilleries at the peak. The source says tens, and the page says only that.',
      'Heights of the windmills or a claim that any one is the tallest. The source says several are among the tallest classical windmills.',
      'Any description of distilling methods at a Schiedam distillery, or of any particular AI product.',
      'Owned and rented dwelling counts. Only the even split was published in the row read.',
      'Any comparison of the encyclopaedia figure of 82,055 with the statistics figure of 81,931. Two sources that disagree is the Breda argument.',
      'Anything the Rotterdam, Delfshaven, Nissewaard and Zuid-Holland pages own, including their figures and arguments.'
    ]
  }
};
