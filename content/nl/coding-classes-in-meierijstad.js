'use strict';
// Meierijstad: Veghel, Schijndel, Sint-Oedenrode and Erp, merged on
// 1 January 2017. 85,236 residents.
// Spine (modest, per the Phase 5 method): the name was chosen by a vote open
// to every resident aged twelve and over. Meierijstad won with 2,172 of 5,216
// votes, 42 percent, so 58 percent of voters chose another name. The winner
// of a plurality is the largest minority, and a classifier that returns its
// top label, or a random forest that takes the most common vote of its trees,
// does exactly the same thing.

module.exports = {
  slug: 'coding-classes-in-meierijstad',
  code: 'mrs',
  accent: '#377338',
  accentRationale: 'Meierijstad: a meadow green for the Meierij, placed by the solver clear of every page it links to, the Den Bosch green, the Oss plum and the Helmond rose among them, with an unlinked province as its nearest neighbour',
  pageType: 'city',
  place: {
    name: 'Meierijstad',
    eyebrow: 'Meierijstad, Noord-Brabant',
    schemaType: 'City',
    chain: [
      { type: 'AdministrativeArea', name: 'Noord-Brabant' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [{ slug: 'coding-classes-in-netherlands', name: 'Netherlands' }],
  nav: [
    { label: 'Netherlands', href: '/coding-classes-in-netherlands' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Meierijstad, Netherlands',
  title: 'Coding Classes in Meierijstad | Modern Age Coders',
  description: 'Live online coding, Python, AI and app classes in Meierijstad for ages 6 to 67, in Veghel, Schijndel, Sint-Oedenrode or Erp. The first lesson is free.',
  ogDescription: 'Live online coding, Python, AI and mathematics for Veghel, Schijndel, Sint-Oedenrode and Erp, on a page about winners that did not win a majority.',
  twitterDescription: 'Classes in Meierijstad for ages 6 to 67, live online, with the first lesson free.',
  ogImageCourse: 'python-ai-kids-masterclass',
  verifiedOn: '11 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Meierijstad Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults in Veghel, Schijndel, Sint-Oedenrode and Erp, taught in English.'
  },

  h1: 'Coding classes in Meierijstad, a name chosen by 42 percent of the people who voted',
  capsuleQ: 'What are the best coding classes in Meierijstad?',
  capsule: 'Coding classes in Meierijstad serve 85,236 people (statistics office, 1 January 2026) in a municipality formed on 1 January 2017 from Schijndel, Sint-Oedenrode and Veghel. Its name was chosen in a vote open to every resident aged twelve and over, and the councils had said in advance that they would accept the winner. Meierijstad received 2,172 of the 5,216 votes, 42 percent; Land van Rode received 31 percent and Koevering 27. The name won fairly under the rules, and still 58 percent of the voters had chosen something else. The option with the most votes is not always the option most voters wanted, and every AI classifier that returns its top label faces the same gap. Modern Age Coders teaches live online in English, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'When three names are on a ballot, the winner needs only more votes than each of the others, not more than half. In Meierijstad the winning name took 42 percent, which was a clear first place and a minority at the same time. That is not a flaw in the vote. The rules were published, the councils agreed beforehand to accept the result, and the name has served the municipality ever since. It is simply a fact about counting that most people never notice: a plurality, the largest share, can be well short of a majority. And because each voter marked only one name, the count cannot say how the 3,044 people who chose another name felt about the winner, whether it was their second choice or their last. Machine learning systems make the same kind of decision millions of times a day, and the same two questions apply to every one of them.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Meierijstad.',

  picks: {
    eyebrow: 'Course picks for Meierijstad',
    h2: 'Four courses for four towns under one name',
    intro: 'A child in Erp who wants to build a quiz with a scoreboard, a teenager in Schijndel who has trained a first image classifier, a student in Veghel comparing three versions of a web page, and an adult in Sint-Oedenrode whose team votes on everything with a show of hands. Each of them starts with one full lesson that costs nothing.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Typed Python where a child runs a class vote with three options, counts it two ways and sees when the winner changes.' },
      { course: 'data-science-course-for-teens-python-data', band: 'Ages 13 to 18', note: 'A first classifier in Python that reports how sure it is, not only which label came top.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Models and tests read with the full spread of results, including margins and a rule for when to abstain.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Polls, surveys and A/B tests reported with shares and margins, never with a winner alone.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Meierijstad today',
      h2: 'Three municipalities, four towns and a castle for a council chamber',
      intro: 'Meierijstad was established on 1 January 2017 by the merger of three East Brabant municipalities in the Meierij region, given in the encyclopaedia with their populations at the time: Schijndel with 23,624 residents, Sint-Oedenrode with 17,907 and Veghel with 38,304. The statistics office counted 85,236 residents on 1 January 2026, on 18,400 hectares of land within 18,552, a published density of 460, in four woonplaatsen, four wijken and 93 buurten. The office has recalculated the years before 2017 to the present boundaries, and on those boundaries the count was 73,816 in 1995.',
      body: [
        { kind: 'table', caption: 'The four woonplaatsen, as the encyclopaedia gives them for 2023', head: ['Woonplaats', 'Residents in 2023', 'Before 2017'], rows: [
          ['Veghel', '33,895', 'part of the municipality of Veghel'],
          ['Schijndel', '24,030', 'the municipality of Schijndel'],
          ['Sint-Oedenrode', '18,530', 'part of the municipality of Sint-Oedenrode'],
          ['Erp', '7,260', 'the fourth town by size']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'Kasteel Dommelrode', p: 'The council of Meierijstad meets in Kasteel Dommelrode, the former town hall of Sint-Oedenrode, according to the encyclopaedia.' },
          { h3: 'Motorway and canal', p: 'The territory is crossed by the A50 motorway and by the Zuid-Willemsvaart canal, which run through the municipality on their way across Brabant.' },
          { h3: 'A younger name', p: 'The name itself is less than ten years old. A local advisory committee under René Bastiaanse was brought in to guide the choice, and the result was put to a vote of residents.' }
        ] }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'The name vote',
      h2: 'First place, and a minority of the votes',
      intro: 'The vote was open to every resident aged twelve and over, and the councils had said beforehand that they would accept the winner as the final name. The figures below are the encyclopaedia\'s.',
      body: [
        { kind: 'table', caption: 'The vote on the name of the new municipality', head: ['Name', 'Votes', 'Share of votes cast', 'Voters who chose another name'], rows: [
          ['Meierijstad', '2,172', '42 percent', '3,044, or 58 percent'],
          ['Land van Rode', '1,621', '31 percent', '3,595, or 69 percent'],
          ['Koevering', '1,423', '27 percent', '3,793, or 73 percent'],
          ['All votes', '5,216', '100 percent', '']
        ] },
        { kind: 'p', text: 'Under the rules of the vote, Meierijstad won, and nobody disputes that. What the table also shows is that a first place with three options can sit well below half. The count answers one question precisely, which name was marked most often, and leaves a second question open: how the voters for the other two names felt about the winner. If most of them would have ranked Meierijstad second, it was a broadly acceptable choice; if most would have ranked it last, a different way of counting could have produced a different name. The ballot asked for one name only, so the data needed to tell those situations apart was never collected. That is not a criticism of the vote, which did what it set out to do. It is a lesson about what a count of first choices can and cannot say.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Meierijstad in figures, and the sums on this page',
      intro: 'The statistics office row for the municipality with the year of each figure, then schools and origin, then the history from the encyclopaedia, then every calculation.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Residents', p: '85,236 in 2026, 84,711 in 2025, 78,822 in 2013 and 73,816 in 1995, the earlier years recalculated to the present boundaries; 42,727 men and 41,984 women in 2025. Ages in 2026: 12,552 under fifteen, 9,240 from fifteen to twenty-five, 20,648 from twenty-five to forty-five, 22,970 from forty-five to sixty-five and 19,826 aged sixty-five or more, adding to the 2026 total.' },
          { h3: 'Households and homes', p: '37,083 households in 2025 averaging 2.25 people, 12,044 of one person and 12,815 with children. 36,823 dwellings, 25,408 owner-occupied at 69 percent and 11,415 rented at 31, summing to the total; an estimated average value of 449,000 euro.' },
          { h3: 'Income and origin', p: 'Income of 34,400 euro per resident and 41,000 per income recipient in 2024, with 1.7 percent of residents in poverty. In 2025, 69,396 residents were of Dutch origin, 6,662 of European and 8,653 of non-European origin; 75,255 were born in the Netherlands and 9,456 abroad. Both splits add to the 2025 total.' },
          { h3: 'Schools', p: '30 primary establishments teach 6,930 pupils, about 231 each, and 6 secondary establishments teach 4,212, about 702 each. The office records 1,830 MBO students at institutions in the municipality.' },
          { h3: 'Land', p: '18,552 hectares, of which 18,400 land and 152 water; a published density of 460 residents per square kilometre over the land. Four woonplaatsen, four wijken and 93 buurten.' },
          { h3: 'Every calculation', p: '85,236 minus 73,816 is 11,420, a rise of 15.5 percent since 1995 on the same boundaries. In the name vote, 1,621 plus 1,423 is 3,044, and 2,172 of 5,216 is 41.6 percent, published as 42. 6,930 over 30 is 231 and 4,212 over 6 is 702. The age, origin and tenure groups were added only to confirm each is complete.' }
        ] },
        { kind: 'p', text: 'Modern Age Coders has no connection with the municipality of Meierijstad, its councils, the naming committee or any school in the area, and nothing here implies one. The municipal figures are the statistics office row for Meierijstad at the years stated, with the years before 2017 as the office has recalculated them. The merger, the former municipalities and their populations, the name vote and its figures, the committee, the woonplaatsen, Kasteel Dommelrode, the A50 and the Zuid-Willemsvaart come from the encyclopaedia entry for Meierijstad. The page does not estimate how many residents were eligible to vote, and it takes no view on the name.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Report the margin, not just the winner',
      intro: 'A winner is the answer to which option came first. Two further numbers say whether that answer can be trusted: how far ahead it was, and what share of the whole it had.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Keep the whole spread', p: 'Store the count or probability for every option, not only the name of the one that came top. A result reduced to its winner cannot be questioned later.' },
          { h3: '2. Print the share and the margin', p: 'Say what fraction the winner had and how far it led the runner-up. Forty-two percent with an eleven-point lead is a different result from ninety percent, even though both have a winner.' },
          { h3: '3. Decide when not to decide', p: 'Set a rule in advance for results that are too close or too thin: a runoff, a second opinion, or, in software, a model that says it is not sure and hands over to a person.' }
        ] },
        { kind: 'table', caption: 'A plurality winner in places people rarely call a vote', head: ['Where', 'The winner', 'What the winner alone hides', 'What to report as well'], rows: [
          ['An image classifier', 'the label with the highest probability', 'that the top label may have only 40 percent', 'the probability, and an abstain threshold'],
          ['A random forest', 'the class most trees voted for', 'how evenly the trees were split', 'the vote share across trees'],
          ['An A/B/C test of a web page', 'the variant with the most sign-ups', 'that the lead may be inside the noise', 'the margin and its uncertainty'],
          ['A recommendation system', 'the most-clicked item', 'how many users chose something else', 'the full distribution of choices'],
          ['The Meierijstad name vote', 'Meierijstad, with 2,172 votes', 'that 3,044 voters chose another name', 'the 42 percent share and the second and third places']
        ] },
        { kind: 'callout', h3: 'Why a model that always answers can mislead', p: 'Most classifiers end with a step that turns a spread of probabilities into a single label by taking the largest one. That step always produces an answer, whether the model is 99 percent sure or 34 percent sure among three classes, and many applications show users only the answer. A random forest, one of the most widely used methods in machine learning, decides by the most common vote among its trees; it is often described as majority voting, but with more than two classes it is a plurality, exactly like the Meierijstad ballot. The remedies are the same as in any careful count. Keep the full distribution. Report the share and the margin beside the winner. And decide in advance what happens when the winner is weak: for a model, that usually means abstaining and passing the case to a person. Meierijstad chose its name by a fair vote with published rules, and the result stands. What it offers a learner is the reminder that a winner and a majority are different things, and that a system which only ever reports its winner has thrown away the evidence of how close the decision was.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for any system that picks a winner',
      intro: 'For classifiers, votes, polls, experiments and recommendations. Practised in the municipality whose own name came first with 42 percent.',
      body: [
        { kind: 'table', caption: 'From a winner to a result that can be judged', head: ['Habit', 'What to do', 'What it prevents', 'What it gives'], rows: [
          ['Keep the distribution', 'Store every option\'s count or probability', 'Results that cannot be re-examined', 'The full picture on demand'],
          ['Share and margin', 'Report the winner\'s share and its lead over second place', 'A thin plurality presented as a mandate', 'A result readers can weigh'],
          ['Calibrate', 'Check that a stated 80 percent is right about 80 percent of the time', 'Confidence numbers that mean nothing', 'Probabilities you can act on'],
          ['An abstain rule', 'Decide in advance what happens when the top result is weak', 'A guess delivered as an answer', 'Hard cases sent to a person'],
          ['Ask for rankings when they matter', 'Collect second choices where the order of preference is the question', 'Data that cannot answer the real question', 'Counts that can be run more than one way']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A class vote on three game themes, counted first by first choices only and then with everyone\'s second choice added. The child finds out whether the winner stays the same.' },
          { h3: 'For teenagers', p: 'A small classifier in Python that prints its probabilities, then a rule that makes it say not sure below a chosen threshold. The teenager measures how many mistakes the rule prevents.' },
          { h3: 'For adults', p: 'A poll or A/B test from work, re-reported with shares, margins and an honest note on uncertainty. Adults often find that the winner everyone quoted was barely ahead.' }
        ] },
        { kind: 'p', text: 'This section rests on the encyclopaedia\'s figures for the 2017 name vote and on standard practice in machine learning and survey reporting. It does not question the result of the vote, and it makes no estimate of how voters would have ranked the three names.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From a class vote on three themes to a model that knows when to abstain',
    intro: 'Where each learner starts is decided during the free lesson, by watching them on a real task. Their town and their age do not decide it on their own.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Three choices', p: 'Children see that a winner of three options can have fewer than half the votes.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'Shares and margins', p: 'Learners turn vote counts into shares and a lead in Python.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'How sure is it?', p: 'Teenagers print a classifier\'s probabilities and add an abstain rule.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'Beyond the winner', p: 'Adults re-report a poll or test with its margin and uncertainty.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI classifier always names a winner. Why should a teenager in Veghel ask how big the win was?',
    intro: 'Because the municipality\'s own name came first with 42 percent of the votes.',
    p1: 'Every classifier, from a spam filter to a medical image model, finishes by picking the label with the highest score. The pick looks equally confident whether the scores were 97 to 3 or 38 to 34 to 28, and most apps show only the pick. Language models do something similar with every word they write, choosing among likely continuations and presenting the result in the same fluent voice whatever the margin was. The winner is always there. How narrowly it won is thrown away unless someone decides to keep it.',
    p2: 'A learner who has counted a three-way class vote, seen a winner with less than half, and then made a small model print its probabilities and refuse to answer below a threshold, understands something that a single label hides. Keeping the spread, reporting the margin and deciding when a system should abstain are choices a person makes about how results are shown. Models will keep naming winners. Asking how much each win was worth remains a human job.',
    closer: 'The case for a child in Meierijstad learning to code in 2026 is therefore not the new municipality or its motorway. It is that someone who asks for the margin as well as the winner will be needed wherever AI turns close decisions into confident answers.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Veghel, Schijndel, Sint-Oedenrode and Erp, one live class',
    intro: 'Four towns share a municipality of more than 18,000 hectares, and a lesson that starts at home is the same lesson in each of them.',
    cells: [
      { h3: 'Four towns, no journeys', p: 'A learner in Erp joins at the same moment as one in Schijndel, each from their own home. Nobody drives between the towns on a weekday evening for a class.' },
      { h3: 'The school system, in Dutch', p: 'Groep, brugklas, vmbo, havo, vwo and the profielkeuze keep their Dutch names in lessons, as a Brabant school uses them, while the teaching is in English.' },
      { h3: 'The first hour, taught properly', p: 'The free lesson is a real one on a real task. Afterwards the teacher suggests a level, a named course and a weekly time, and no card details are asked for.' },
      { h3: 'Groups beyond the Meierij', p: 'Five to ten learners at the same stage. Meierijstad has 12,552 residents under fifteen across four towns, and five who match on subject, level and hour are unlikely in any one of them, so groups may include learners from several countries.' },
      { h3: 'Regio Zuid holidays', p: 'Two lessons a week, about eight a month, at the same time each week, pausing for the regio Zuid holidays that Brabant schools follow.' },
      { h3: 'Hours that fit', p: 'India is three and a half hours ahead in summer and four and a half in winter, so after-school, early-evening and weekend-morning slots all stay available through the year.' }
    ],
    spec: { title: 'Thirty-six schools, four towns, and one group', p: 'Meierijstad has 30 primary establishments teaching 6,930 pupils and 6 secondary establishments teaching 4,212. A coding group needs five learners who match on subject, stage and hour at once, and they are found far more easily across all ages from 6 to 67 and many countries than within one municipality, however many towns it has.' }
  },

  fees: {
    h2: 'Meierijstad fees, set out in full',
    intro: 'These three prices are the whole of it.',
    first: 'A proper lesson on a proper task, finishing with a level and a named course.',
    group: 'Per month, usually eight lessons, five to ten learners matched by ability.',
    private: 'Per month, usually eight lessons, one teacher and one learner.',
    closer: 'The fee is a single dollar price for every country, with no euro version beside it, so a family in Erp pays what a family in Veghel pays. Nothing is charged until the free lesson has settled a course and a time, and payment is then arranged through WhatsApp. The pricing page explains breaks, a change of format and missed lessons.'
  },

  reviewsH2: 'Six Google reviews, word for word as written',

  book: {
    h2: 'Tell us where the learner is up to',
    intro: 'The first task might be a three-way class vote counted two ways, a small classifier that prints how sure it is, or an A/B test re-reported with its margin.',
    success: 'Thank you. Your Meierijstad class request has been sent.'
  },

  faq: {
    h2: 'Meierijstad coding class questions',
    intro: 'The municipality, its name, its towns and the lessons.',
    items: [
      { q: 'What does Meierijstad include?', a: 'The former municipalities of Schijndel, Sint-Oedenrode and Veghel, merged on 1 January 2017. Its four woonplaatsen are Veghel, Schijndel, Sint-Oedenrode and Erp, and the statistics office counts four wijken and 93 buurten.' },
      { q: 'How was the name Meierijstad chosen?', a: 'By a vote open to all residents aged twelve and over, guided by a local advisory committee under René Bastiaanse, with the councils having said beforehand that they would accept the winner. According to the encyclopaedia, Meierijstad received 2,172 votes (42 percent), Land van Rode 1,621 (31 percent) and Koevering 1,423 (27 percent), out of 5,216.' },
      { q: 'How many people live in Meierijstad?', a: 'The statistics office counted 85,236 residents on 1 January 2026, in 37,083 households in 2025. On the present boundaries the count was 73,816 in 1995, a rise of 11,420 or 15.5 percent.' },
      { q: 'Where does the Meierijstad council meet?', a: 'In Kasteel Dommelrode, the former town hall of Sint-Oedenrode, according to the encyclopaedia.' },
      { q: 'Which is the largest town in Meierijstad?', a: 'Veghel, with 33,895 residents in 2023 according to the encyclopaedia, followed by Schijndel with 24,030, Sint-Oedenrode with 18,530 and Erp with 7,260.' },
      { q: 'How many schools are there in Meierijstad?', a: 'The statistics office counts 30 primary establishments teaching 6,930 pupils and 6 secondary establishments teaching 4,212, with 1,830 MBO students at institutions in the municipality. This page rates no school.' },
      { q: 'What language are lessons in, and at what time?', a: 'English, with Dutch school terms such as groep, havo and vwo kept in Dutch. India is three and a half hours ahead in summer and four and a half in winter, so after-school, early-evening and weekend times all work. The weekly hour is agreed at the free lesson and holidays follow regio Zuid.' },
      { q: 'Is there a Modern Age Coders classroom in Meierijstad?', a: 'No, and none is claimed here or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Meierijstad coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Noord-Brabant and beyond',
    h2: 'To the provincial capital, the Brabant cities, and the hub',
    html: 'The provincial capital is close by and has its own page at <a class="cg-inline-link" href="/coding-classes-in-den-bosch">coding classes in Den Bosch</a>. <a class="cg-inline-link" href="/coding-classes-in-eindhoven">Eindhoven</a> lies to the south with seven district pages beneath it, and <a class="cg-inline-link" href="/coding-classes-in-oss">Oss</a> and <a class="cg-inline-link" href="/coding-classes-in-helmond">Helmond</a> have pages too; every Brabant page is gathered on <a class="cg-inline-link" href="/coding-classes-in-noord-brabant">Noord-Brabant</a>. For a learner who wants to start with machine learning there is the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>, and the full series is on the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>.',
    waLabel: 'Ask us on WhatsApp'
  },

  footerHeading: 'Meierijstad, Noord-Brabant and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-den-bosch', label: 'Den Bosch' },
    { href: '/coding-classes-in-noord-brabant', label: 'Noord-Brabant' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-mrs .cg-hero-grid { grid-template-columns: 1.06fr 0.94fr; align-items: center; gap: clamp(1.05rem, 2.6vw, 2.15rem); }
.cg-root.cg-mrs .cg-hero h1 { font-weight: 630; letter-spacing: -0.018em; line-height: 1.08; }
.cg-root.cg-mrs .cg-capsule { border-left: 3px solid var(--cg-accent); padding-left: 1.35rem; }
.cg-root.cg-mrs .cg-eyebrow { letter-spacing: 0.14em; font-weight: 700; text-transform: uppercase; }
.cg-root.cg-mrs .cg-section-head h2 { max-width: 27ch; letter-spacing: -0.013em; }
.cg-root.cg-mrs .cg-grid-3 { gap: clamp(0.9rem, 2vw, 1.65rem); }
.cg-root.cg-mrs .cg-card { border-radius: 7px; border-top: 3px solid var(--cg-accent-soft); }
.cg-root.cg-mrs .cg-table caption { letter-spacing: 0.025em; font-weight: 700; }
.cg-root.cg-mrs .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-mrs .cg-table td:nth-child(2) { font-weight: 700; }
.cg-root.cg-mrs .cg-ladder-col { border-bottom: 2px solid var(--cg-accent-soft); padding-bottom: 0.9rem; }
`,

  dossier: {
    curriculumAuthority: 'Gemeente Meierijstad, Noord-Brabant: 85,236 residents (statistics office, 1 January 2026), 84,711 (2025), 78,822 (2013), 73,816 (1995), the years 1995 to 2016 calculated for the present boundaries after the 2017 merger; 42,727 men and 41,984 women (2025); 37,083 households (2025) averaging 2.25, 12,044 one-person, 12,815 with children; ages (2026) 12,552 under fifteen, 9,240 fifteen to twenty-five, 20,648 twenty-five to forty-five, 22,970 forty-five to sixty-five, 19,826 sixty-five or over; 18,552 hectares, 18,400 land, 152 water, published density 460; 36,823 dwellings (2025), 25,408 owner-occupied at 69 percent, 11,415 rented at 31 percent; estimated average value 449,000 euro; income 34,400 euro per resident and 41,000 per recipient (2024); 1.7 percent in poverty; origin (2025) 69,396 Dutch, 6,662 European, 8,653 non-European, 75,255 born in the Netherlands and 9,456 abroad; 4 woonplaatsen, 4 wijken, 93 buurten; 30 primary establishments with 6,930 pupils and 6 secondary with 4,212 (2026); 1,830 MBO students at institutions. Encyclopaedia: established 1 January 2017 by merger of Schijndel (23,624), Sint-Oedenrode (17,907) and Veghel (38,304) in the Meierij; a local advisory committee under René Bastiaanse; a name vote open to all residents aged twelve and over, the councils having said beforehand they would accept the winner as the final name; Meierijstad 2,172 votes (42 percent), Land van Rode 1,621 (31), Koevering 1,423 (27), total 5,216; woonplaatsen in 2023 Veghel 33,895, Schijndel 24,030, Sint-Oedenrode 18,530, Erp 7,260 (the fourth town by size); the council meets in Kasteel Dommelrode, the former town hall of Sint-Oedenrode; crossed by the A50 and the Zuid-Willemsvaart; infobox 85,249 on 1 January 2026 and 185.52 square kilometres, not combined with the office row. Regio Zuid holidays. The city page teaches plurality versus majority.',
    localProject: 'A winner is not a majority. The Meierijstad name vote, open to residents aged twelve and over with the councils committed in advance to accept the result, gave Meierijstad 2,172 of 5,216 votes (42 percent), Land van Rode 31 and Koevering 27, so 3,044 voters, 58 percent, chose another name. The count answers which name was marked most often and cannot answer how the other voters ranked the winner, because the ballot collected first choices only; the page does not question the result and makes no estimate of rankings. The programming form is argmax: classifiers return the top label whether it had 97 or 38 percent, random forests decide by the most common vote among trees (a plurality once there are more than two classes), A/B/C tests crown a variant whose lead may be inside the noise, and recommendation systems report the most-clicked item. The defences are keeping the full distribution, reporting share and margin beside the winner, calibration, an abstain rule for weak results, and collecting rankings where the order of preference is the question. Chosen after a case-sensitive keyword check found no page using plurality. Distinct from non-response (Purmerend), which concerns who took part rather than how their votes were counted, from mean versus mode (Groningen), which concerns a numeric average against the commonest value, and from ranking in noise (Breda), which concerns rank stability under measurement uncertainty.',
    requiredMentions: [
      '73,816',
      '78,822',
      '37,083',
      '12,044',
      '12,815',
      '36,823',
      '25,408',
      '11,415',
      '4,212',
      '19,826',
      'Dommelrode',
      'Koevering',
      'Land van Rode',
      'Bastiaanse'
    ],
    sources: [
      { claim: 'Gemeente Meierijstad: 85,236 inwoners (2026), 84,711 (2025), 78,822 (2013), 73,816 (1995); historical data for 1995-2016 are calculated figures (formed 2017 from Schijndel, Sint-Oedenrode and Veghel); mannen 42,727, vrouwen 41,984 (2025); 37,083 huishoudens, 12,044 eenpersoons (32 percent), 12,815 met kinderen (35 percent), gemiddeld 2.25; ages 0-15 12,552, 15-25 9,240, 25-45 20,648, 45-65 22,970, 65+ 19,826 (2026); 18,552 hectare, land 18,400, water 152; bevolkingsdichtheid 460; woningvoorraad 36,823, koopwoningen 25,408 (69 percent), huurwoningen 11,415 (31 percent) (2025); gemiddelde WOZ 449,000 euro; gemiddeld inkomen per inwoner 34,400 and per inkomensontvanger 41,000 euro (2024); personen in armoede 1.7 percent; basisonderwijs 30 vestigingen 6,930 leerlingen, voortgezet onderwijs 6 vestigingen 4,212 leerlingen (2026), MBO 1,830; geboren in Nederland 75,255, buiten Nederland 9,456, herkomst Nederland 69,396, Europa 6,662, buiten Europa 8,653 (2025); 4 woonplaatsen, 4 wijken, 93 buurten. De gemeente Meierijstad is in 2017 bij een gemeentelijke herindeling ontstaan vanuit de gemeenten Schijndel, Sint-Oedenrode en Veghel.', url: 'https://allecijfers.nl/gemeente/meierijstad/' },
      { claim: 'Meierijstad (encyclopaedia): Meierijstad is een Nederlandse gemeente, die per 1 januari 2017 werd ingesteld door fusie van drie Oost-Brabantse gemeenten in de regio Meierij: Schijndel (23.624 inwoners), Sint-Oedenrode (17.907 inwoners) en Veghel (38.304 inwoners). Er werd een lokale adviescommissie ingeschakeld, die onder leiding stond van Rene Bastiaanse. De stemming was opengesteld voor alle inwoners van 12 jaar en ouder. De gemeenteraden hadden vooraf aangegeven de winnaar hiervan te accepteren als definitieve naam. Meierijstad kwam als winnaar uit de bus, gevolgd door Land van Rode en Koevering: Meierijstad 2.172 (42), Land van Rode 1.621 (31), Koevering 1.423 (27), totaal 5.216. Woonplaatsen 2023: Veghel 33.895, Schijndel 24.030, Sint-Oedenrode 18.530, Erp 7.260 (naar grootte de vierde woonkern). De raadsvergaderingen van de gemeente vinden plaats in Kasteel Dommelrode, het voormalige gemeentehuis van Sint-Oedenrode. Het grondgebied wordt doorkruist door de autosnelweg A50 en de Zuid-Willemsvaart. Infobox: 85.249 inwoners (1 jan 2026), 185,52 km2.', url: 'https://nl.wikipedia.org/wiki/Meierijstad' },
      { claim: 'School holiday regions: regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland; regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'Any estimate of how voters would have ranked the three names, or of whether another counting method would have produced a different name.',
      'Any turnout figure or estimate of eligible voters. Not in the sources read, and participation is the Purmerend argument.',
      'Any criticism of the vote or the name. The rules were published and the councils accepted the result in advance.',
      'The date of the name vote, which the sources read did not state in a quotable sentence.',
      'Any comparison of the woonplaats figures for 2023 with the municipal row. Town against municipality is the Zeeland argument.',
      'Any claim about companies based in Meierijstad. None was in the sources read.',
      'Anything the Den Bosch, Eindhoven, Oss, Helmond and Noord-Brabant pages own, including their figures and arguments.'
    ]
  }
};
