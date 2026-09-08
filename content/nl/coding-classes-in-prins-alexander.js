'use strict';
// Prins Alexander: 97,794 residents, the largest gebied, half of them over
// forty-five, on ground built out from the 1960s.
// Spine: one snapshot cannot tell whether older people moved here or whether
// the people who moved here got older, and the two predict opposite futures.

module.exports = {
  slug: 'coding-classes-in-prins-alexander',
  code: 'pra',
  accent: '#1D5E85',
  accentRationale: 'Prins Alexander: a steel blue off the Zevenhuizerplas and the polder sky, the last colour family the Rotterdam set had not used and clear of the dock green, brick red, river purple, olive, polder green, indigo and timber brown on the other seven district pages',
  pageType: 'district',
  place: {
    name: 'Prins Alexander',
    eyebrow: 'Prins Alexander, Rotterdam',
    schemaType: 'AdministrativeArea',
    chain: [
      { type: 'City', name: 'Rotterdam' },
      { type: 'AdministrativeArea', name: 'Zuid-Holland' },
      { type: 'Country', name: 'Netherlands' }
    ]
  },
  parents: [
    { slug: 'coding-classes-in-netherlands', name: 'Netherlands' },
    { slug: 'coding-classes-in-rotterdam', name: 'Rotterdam' }
  ],
  nav: [
    { label: 'Rotterdam', href: '/coding-classes-in-rotterdam' },
    { label: 'Courses', href: '/courses' },
    { label: 'How we teach', href: '/how-we-teach' }
  ],
  routeLabel: 'Prins Alexander, Rotterdam, Netherlands',
  title: 'Coding Classes in Prins Alexander, Rotterdam | Modern Age Coders',
  description: 'Live online coding, Python and AI classes in Prins Alexander for ages 6 to 67, from Ommoord and Zevenkamp to Nesselande. The first lesson is free.',
  ogDescription: 'Live online coding, Python and AI in Rotterdam largest district, on a page about why one snapshot cannot tell you which way a population is going.',
  twitterDescription: 'Online classes for ages 6 to 67, transparent USD fees and a free first class.',
  ogImageCourse: 'complete-app-development-masterclass-for-teens',
  verifiedOn: '9 September 2026',
  courseSchema: {
    name: 'Live Online Coding and Mathematics Classes for Prins Alexander Learners',
    description: 'Ability-placed online coding, Python, AI, app building and mathematics for children, teenagers and adults across the eight buurten of Prins Alexander, taught in English.'
  },

  h1: 'Coding classes in Prins Alexander, where half the district is over forty-five and nobody can tell you why from this data',
  capsuleQ: 'What are the best coding classes in Prins Alexander?',
  capsule: 'Coding classes in Prins Alexander reach 97,794 residents (1 January 2026), the largest of the fourteen gebieden, on 1,738 hectares of land at 5,635 people to the square kilometre. 25,205 residents are between forty-five and sixty-five and 22,845 are sixty-five or over: 48,050 people, forty-nine percent of the district. Whether that is because older people move to suburbs or because the people who bought these houses when they were new have simply got older, this snapshot cannot say, and the two answers point in opposite directions. Modern Age Coders teaches live online in English from Ommoord to Nesselande, ages 6 to 67, first lesson free, then USD 100 monthly in a group of five to ten or USD 150 one to one.',
  lead: 'Half of Prins Alexander is over forty-five. There are two ordinary explanations and they are not compatible. Either this is the kind of place people move to as they age, in which case the profile will look much the same in twenty years as each generation arrives. Or the district filled up once, when it was built, and everybody who arrived then has been getting older in the same houses, in which case the profile is about to change sharply. One year of data is consistent with both, and choosing between them is not a matter of looking harder at it.',
  wa: 'Hello Modern Age Coders, I want a free coding class for a learner in Prins Alexander.',

  picks: {
    eyebrow: 'Course picks for Prins Alexander',
    h2: 'Four courses for the largest district in the city',
    intro: 'A groep 5 child in Zevenkamp who has finished every game in the house, a teenager in Ommoord with an app in mind and no notion of how one gets made, a student in Prinsenland who needs Python to run without being supervised, and an adult in Nesselande watching a chart drift and wondering which way it is going: four doors, and the first hour of each costs nothing.',
    items: [
      { course: 'python-ai-kids-masterclass', band: 'Ages 8 to 12', note: 'Real typed Python, drawings that follow orders and a first program that spots a rule, taught in English to the groep 5 to 8 child in any of the eight buurten.' },
      { course: 'complete-app-development-masterclass-for-teens', band: 'Ages 13 to 18', note: 'An application taken from an empty project to something that installs and runs, for the teenager who has described one to three adults and built none of it.' },
      { course: 'python-ai-automation-masterclass-college', band: 'College and adult', note: 'Python that gathers, cleans, checks and reports unattended, for the student or worker repeating the same job by hand every week.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', band: 'Adults', note: 'Reading a table honestly, including what one year of it can and cannot tell you, for anybody reporting numbers that get acted on.' }
    ]
  },

  sections: [
    {
      id: 'context', tint: '', eyebrow: 'Prins Alexander today',
      h2: 'Ninety-eight thousand people on polder built out from the 1960s',
      intro: 'Prins Alexander holds 97,794 residents across 1,860 hectares, of which 1,738 are land and 122 water, at a published 5,635 people to the square kilometre. It is the largest of the fourteen gebieden by population and by land, and it was laid out on drained ground over the second half of the last century. Its eight buurten are Nesselande, Zevenkamp, Ommoord, Oosterflank, Het Lage Land, Prinsenland, s-Gravenland and Kralingseveer.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Half the district is over forty-five', p: '25,205 residents are between forty-five and sixty-five, 26 percent, and 22,845 are sixty-five or over, 23 percent. Together that is 48,050 people, 49 percent of the district, and the oldest profile of the eight Rotterdam districts this series has measured. Nothing in the argument below depends on comparing one band against another, so the differing widths the IJsselmonde page deals with do not bear on it.' },
          { h3: 'And it still has the most children', p: '14,585 residents are under fifteen, which is 15 percent but also the largest count of children in any Rotterdam district measured, because this is the largest district. 28 primary establishments teach 8,108 pupils and 9 secondary establishments teach 5,860, both the largest totals of the eight.' },
          { h3: 'Suburban housing, evenly split', p: '47,041 dwellings, of which 20,698 are owner-occupied, 44 percent, and 26,343 rented. Average value is 360,000 euro and average income 34,700 euro per resident for 2024, both around the middle of the eight districts. Households average 2.0 people and 21,710 of the 48,260 hold one person, 45 percent.' }
        ] },
        { kind: 'spec', title: 'Why a district built at once has an unusual age profile', p: 'When a large area of housing goes up over a short period, it fills over a short period too, largely with people at a similar stage of life. Those households then age together in the same houses, so the district carries the shape of its own construction for decades afterwards. That is a mechanism, not a measurement: nothing on this page shows it happening here. It is set out because it is the second of the two explanations for what the age table shows, and because it is the one nobody reaches for.' }
      ]
    },
    {
      id: 'schools', tint: 'tint', eyebrow: 'Where the learners are',
      h2: 'Two explanations, one table, opposite futures',
      intro: 'Both readings below fit the published figures exactly. They differ in what they predict, which is the only way to tell them apart and is not something a single year of data can do.',
      body: [
        { kind: 'table', caption: 'The same age profile, read two ways', head: ['', 'If older people move here', 'If the original residents aged in place', 'What the 2026 table shows'], rows: [
          ['Why 23 percent are over sixty-five', 'a steady inflow of older households', 'the people who arrived when it was built', 'identical either way'],
          ['Why 26 percent are forty-five to sixty-five', 'the next wave of arrivals', 'the cohort behind the first one', 'identical either way'],
          ['What happens by 2040', 'much the same profile, refreshed by new arrivals', 'a sharp fall as the housing turns over', 'nothing, it cannot see forward'],
          ['What it means for schools', 'a stable demand for places', 'a rise, as families buy the houses that free up', 'nothing'],
          ['What would distinguish them', 'the same bands measured across several years', 'or migration counts by age', 'neither was read for this page']
        ] },
        { kind: 'p', text: 'This is not a hedge. The two readings imply different things about who will be living in Ommoord in fifteen years, about how many primary places the district will need, and about whether 14,585 children is a floor or a ceiling. A single snapshot supports both equally, so the honest output is the pair of hypotheses plus the measurement that would separate them, rather than whichever one sounds more natural to whoever is reading.' }
      ]
    },
    {
      id: 'evidence', tint: '', eyebrow: 'Verified local facts',
      h2: 'Every figure, its source, its year, and the question left open',
      intro: 'One district row in full, one piece of arithmetic, and a clear statement of what would be needed to answer the question this page raises.',
      body: [
        { kind: 'grid3', cells: [
          { h3: 'Prins Alexander', p: '97,794 residents (2026); 48,260 households averaging 2.0 (2025), 21,710 single-person at 45 percent; ages 14,585 under fifteen at 15 percent, 11,325 at 12 percent, 23,860 at 24 percent, 25,205 at 26 percent and 22,845 at 23 percent; 1,860 hectares total, 1,738 land and 122 water; density 5,635; 47,041 dwellings; average value 360,000 euro; 20,698 owner-occupied at 44 percent and 26,343 rented at 56; income 34,700 euro (2024); 28 primary establishments with 8,108 pupils and 9 secondary with 5,860; eight buurten.' },
          { h3: 'The arithmetic', p: '25,205 plus 22,845 is 48,050, and 48,050 out of 97,794 is 49.1 percent. That is the only calculation the argument needs, and it is this page adding two published counts and dividing by a third.' },
          { h3: 'What would settle it', p: 'The same five bands published for this district across a run of years would show whether the older bands are filling from below, which is the cohort reading, or holding steady while people arrive and leave, which is the migration reading. Counts of arrivals and departures by age would do it directly. Neither was read for this page and neither is guessed at.' },
          { h3: 'Why the widths do not matter here', p: 'Elsewhere in this series, on the IJsselmonde page, the unequal spans of the published bands do a great deal of damage. This page is safe from that because it never sets one band against another: it adds the two oldest together and divides by the population, and both of those operations are indifferent to how wide the bands are.' },
          { h3: 'What this page does not say', p: 'It does not say the district is ageing, which would require more than one year. It does not say older people prefer suburbs. It does not predict what the schools will need. Each of those is a claim about direction or cause, and a snapshot carries neither.' }
        ] },
        { kind: 'p', text: 'This page is not affiliated with the gebied, with Rotterdam, or with any school in either, and claims no such thing. Its quoted figures are taken from the statistics office page for this wijk: a 2026 population, 2025 household and housing figures, a 2024 income. Only the 48,050 total and the 49.1 percent were calculated here.' }
      ]
    },
    {
      id: 'project', tint: 'deep', eyebrow: 'Signature project',
      h2: 'Is the district old, or is it the same people getting older?',
      intro: 'One age table, two mechanisms that fit it perfectly, and a rule for what to do when a snapshot cannot choose.',
      body: [
        { kind: 'grid3', cells: [
          { h3: '1. Write both explanations before preferring one', p: 'Older people move to suburbs. Or a suburb built in one go fills with one generation who then age in it. Both produce 49 percent of residents over forty-five. Writing the second one down is the whole difficulty, because the first arrives unbidden and feels like an observation rather than a hypothesis.' },
          { h3: '2. Ask what each predicts', p: 'A steady inflow of older households keeps the profile roughly where it is. A generation ageing in place pushes the older bands up for another decade and then empties them fast as the housing changes hands. Those are very different futures for the same district and for the 8,108 primary places in it.' },
          { h3: '3. Name the measurement, then stop', p: 'The same bands across several years, or arrivals and departures counted by age. Either would separate the two in an afternoon. Neither is on this page, so the page reports two live hypotheses and the test, which is a more useful output than a confident paragraph choosing between them for aesthetic reasons.' }
        ] },
        { kind: 'table', caption: 'The same shape, in four other places', head: ['Situation', 'The age reading', 'The cohort reading', 'What separates them'], rows: [
          ['A product whose users keep getting older', 'it appeals to older people', 'its original users aged and no new ones came', 'signup dates by age, over time'],
          ['A team with rising average tenure', 'people are staying longer', 'nobody new has been hired', 'joiners and leavers per year'],
          ['A town with a rising median age', 'retirees are moving in', 'the young left and the rest stayed', 'migration by age band'],
          ['A subscriber base skewing older', 'the offer suits that group', 'it was built with one generation', 'cohort retention curves'],
          ['This district at 49 percent over forty-five', 'suburbs attract older households', 'built at once, filled at once, aged at once', 'the same bands across years']
        ] },
        { kind: 'callout', h3: 'A snapshot shows a state, and every state has at least two histories', p: 'Cross-sectional data is the most available kind and the most confidently misread, because a single moment looks like an explanation as well as a description. A group is older than average. That is a state. It could have arrived by people of that age joining, or by the people already there ageing while nobody joined, and those two histories imply opposite things about what happens next. Nothing in the snapshot distinguishes them, and no amount of care with the snapshot will, because the information simply is not in it. What makes this expensive rather than merely academic is that one of the two readings is always more available than the other. The one that involves people choosing something is easy to picture and easy to say. The one that involves a group ageing together while the world moved on is duller, has no protagonist, and is very often the true one. So the discipline is to write the second explanation down deliberately, every time, before deciding anything: what would this look like if nobody had chosen anything and time had simply passed. Then ask which measurement would tell the two apart, and be honest about whether you have it. Reporting two hypotheses and the test that separates them is a real result. Picking whichever fits the story you were already telling is not, however well it is written.' }
      ]
    },
    {
      id: 'pipeline', tint: 'tint', eyebrow: 'Reliable pipeline',
      h2: 'Five habits for a single snapshot',
      intro: 'User age, team tenure, customer size, account maturity, contract length: every one of them arrives as a state and gets read as a trend. Practised on a district where half the residents are over forty-five for either of two opposite reasons.',
      body: [
        { kind: 'table', caption: 'Reading a cross-section without inventing a history', head: ['Stage', 'Rule', 'What it prevents', 'What it gives you'], rows: [
          ['Name the state', 'Describe what the data shows without any verb implying movement', 'A snapshot written up as a trend', 'A clean starting point'],
          ['Write the boring history', 'Ask what this would look like if nobody chose anything and time passed', 'The vivid explanation winning by default', 'A second hypothesis, usually the neglected one'],
          ['Derive the predictions', 'State what each history implies for the next few years', 'Two stories that sound the same', 'Something that can actually be tested'],
          ['Name the measurement', 'Say exactly which data would separate them', 'An argument with no route out of it', 'A costed next step'],
          ['Publish both until you have it', 'Report the pair, not a favourite', 'A guess hardening into an assumption', 'A finding that stays honest as data arrives']
        ] },
        { kind: 'grid3', mt: true, cells: [
          { h3: 'For younger learners', p: 'A photograph of a class and a question about whether they are getting taller. The children work out that one picture cannot answer it, and then decide exactly what second picture they would need.' },
          { h3: 'For teenagers', p: 'The five age bands in Python, with a function that generates the two candidate histories for any snapshot and refuses to prefer one without a second year of data. The stretch: write the confident paragraph that picks the migration story, then annotate every clause the data does not support.' },
          { h3: 'For adults', p: 'A real state from work read as a direction: average tenure, customer age, deal size. Adults almost always find the vivid explanation was adopted immediately, the dull one was never written down, and no one asked for a second period.' }
        ] },
        { kind: 'p', text: 'Population, household, age, area, density, dwelling, value, tenure, income, establishment and pupil figures come from the statistics office page for this wijk, with a 2026 population, 2025 household and housing figures and a 2024 income. The 48,050 residents aged forty-five and over and the 49.1 percent are this page adding two published bands and dividing by the published population. The construction history of the district is context rather than evidence, and no claim on this page rests on it.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Learning ladder',
    h2: 'From one photograph of a class to a report that publishes both histories',
    intro: 'The rung comes out of the free hour and what the learner can already do, and never out of which of the eight buurten the address falls in.',
    cols: [
      { band: 'Ages 6 to 10', h3: 'Are they getting taller?', p: 'Children find out one photograph cannot say, and work out what would.', courses: ['scratch-programming-complete-course', 'game-development-masterclass-for-kids'] },
      { band: 'Ages 11 to 13', h3: 'The other explanation', p: 'Learners write the dull history alongside the vivid one, every time.', courses: ['python-ai-kids-masterclass', 'maths-through-coding'] },
      { band: 'Ages 14 to 18', h3: 'Hypotheses with predictions attached', p: 'Teenagers build code that will not prefer a history without a second period of data.', courses: ['complete-app-development-masterclass-for-teens', 'data-science-course-for-teens-python-data'] },
      { band: 'Ages 18 to 67', h3: 'The state everybody read as a trend', p: 'Adults take a real snapshot from work and reconstruct the history nobody wrote down.', courses: ['python-ai-automation-masterclass-college', 'data-and-ai-analytics-for-non-programmers-course'] }
    ]
  },

  ai: {
    eyebrow: 'Coding and AI',
    h2: 'An AI will tell you this district is ageing. Why should a teenager in Ommoord ask which year that came from?',
    intro: 'Because ageing is a direction and the table has only one year in it.',
    p1: 'Ask a model about a district where 49 percent of residents are over forty-five and the word ageing will appear, because it is the natural word for that shape and because most of the text it has read uses it. Ageing describes a change over time, and nothing in the figures covers more than a single January. The reply will also, almost certainly, offer the explanation about older people preferring suburbs, which is the vivid one, and will not offer the one about a district built in a decade filling in a decade and ageing together, which is the dull one and quite possibly the right one.',
    p2: 'So the learner practises writing both histories before preferring either, and then building the version that enforces it: two candidate explanations generated from any snapshot, with the code refusing to choose until a second period arrives. It is a small structure around a habit that is genuinely hard, because one of the two explanations always sounds better. A fifteen-year-old in Zevenkamp who has held two histories open will be the person at thirty asking for last year figures before agreeing that customers are getting older. Models will keep producing the fluent direction from a still picture. Noticing that it is a still picture stays a person job.',
    closer: 'The case for a child in Prins Alexander learning to code in 2026 is therefore not about demography. It is that most data arrives as a single moment, that every moment has at least two histories behind it, and that the more interesting one is usually the one with nobody choosing anything in it.',
    blogAnchor: 'why a child should still learn to code in 2026'
  },

  delivery: {
    eyebrow: 'Delivery',
    h2: 'Live classes across the largest district in Rotterdam',
    intro: 'Prins Alexander covers seventeen square kilometres of land on the north-eastern edge, with the metro running through it and a good deal of distance between one buurt and the next.',
    cells: [
      { h3: 'Seventeen square kilometres, and no journey', p: 'The lesson runs at the table in Ommoord, Nesselande or Kralingseveer at one fixed hour a week. In a district this size the travel is the part that quietly kills an enrolment, and this removes it.' },
      { h3: 'Four words that are not translated', p: 'Groep, havo, vwo, profielkeuze. Those arrive in the lesson exactly as they appear on a Dutch school report, and everything constructed around them is in English.' },
      { h3: 'Free, and not a sales call', p: 'An hour of actual teaching with a task in it. What comes out is a level nobody had to guess at, the course that level indicates, and a time each week. Payment arrangements are a separate conversation, later.' },
      { h3: 'The other learners will not be neighbours', p: 'A group needs five to ten people at the same stage, and a single district rarely has them simultaneously. Drawing from everywhere is what makes a narrow level exist at all rather than something to wait for.' },
      { h3: 'The schedule already knows about the holidays', p: 'Two lessons a week, near enough eight a month. Zuid-Holland sits in regio Midden, whose dates are set long in advance, so the breaks are written in when the plan is made rather than negotiated when they arrive.' },
      { h3: 'Two clocks, one of which moves', p: 'The Dutch one, twice a year. That is the entire reason the teacher is sometimes three and a half hours ahead and sometimes four and a half, and it changes nothing about which hours of the week actually work.' }
    ],
    spec: { title: 'The most children of any Rotterdam district measured, and the most people over sixty-five', p: '14,585 residents are under fifteen and 22,845 are sixty-five or over, both the largest counts of the eight Rotterdam districts in this series, because this is the largest district. 28 primary establishments teach 8,108 pupils here. What none of that guarantees is a group of five to ten learners at one particular level in one particular subject within reach of any particular family, which is a matter of how thinly a specific stage is spread rather than of how many children there are. Groups here are assembled on ability from across the world, at every age from 6 to 67.' }
  },

  fees: {
    h2: 'The fee, in dollars, in all eight buurten',
    intro: 'On the page rather than saved for a phone call.',
    first: 'A complete lesson with a real task, a level and a named next course.',
    group: 'Per month, normally eight lessons, five to ten learners placed by ability.',
    private: 'Per month, normally eight lessons, one learner with one teacher.',
    closer: 'One international rate, quoted in dollars, with no euro edition, so an address in Nesselande is charged what one in Het Lage Land is. Nothing is paid until the free lesson has settled a course and an hour, and payment is arranged over WhatsApp afterwards. Pausing, switching plan and missing a week are all on the pricing page.'
  },

  reviewsH2: 'Six Google reviews, exactly as the people who left them wrote them',

  book: {
    h2: 'Send the level, not the buurt',
    intro: 'The first task might be one photograph of a class and a question it cannot answer, a function that generates two histories for a single snapshot, or a metric at work that was read as a direction from one month of data.',
    success: 'Thank you. Your Prins Alexander class request has been sent.'
  },

  faq: {
    h2: 'Prins Alexander coding class questions',
    intro: 'The district, its eight buurten, one question a snapshot cannot answer, the teaching and the terms.',
    items: [
      { q: 'Is Prins Alexander an ageing district?', a: 'This page will not say so, because ageing describes a change over time and the figures cover one January. What is published is that 25,205 residents are between forty-five and sixty-five and 22,845 are sixty-five or over, 48,050 people or 49.1 percent of the district. Two explanations fit that equally: older households moving in, or the people who arrived when the district was built ageing in the same houses. Separating them needs the same bands across several years, or arrivals and departures counted by age, and neither was read here.' },
      { q: 'Why does the difference between those two explanations matter?', a: 'Because they predict opposite futures. If older households keep arriving, the profile stays roughly as it is. If one generation is ageing in place, the older bands keep growing for a decade and then empty quickly as the housing changes hands, and the 8,108 primary places in the district would face a rise rather than a plateau. Same table, same year, very different planning.' },
      { q: 'Which neighbourhoods are in Prins Alexander?', a: 'Eight buurten: Nesselande, Zevenkamp, Ommoord, Oosterflank, Het Lage Land, Prinsenland, s-Gravenland and Kralingseveer. Together they hold 97,794 residents on 1,738 hectares of land, which makes this the largest of the fourteen gebieden both by population and by land area.' },
      { q: 'Does it have a lot of children?', a: 'The most of any Rotterdam district in this series in absolute terms: 14,585 residents under fifteen, which is 15 percent of a district that is simply larger than the others. 28 primary establishments teach 8,108 pupils and 9 secondary establishments teach 5,860, both also the largest counts of the eight districts measured.' },
      { q: 'Is this an expensive part of Rotterdam?', a: 'It sits in the middle. Average dwelling value is 360,000 euro and average income 34,700 euro per resident for 2024, both around the midpoint of the eight Rotterdam districts this series has read. 20,698 of the 47,041 dwellings are owner-occupied, 44 percent.' },
      { q: 'Is the class taught in Dutch?', a: 'The teaching is English. One category of word is exempt, the school vocabulary, so a teacher uses groep, havo, vwo and profielkeuze in their Dutch form because that is how a child encounters them. There is no Dutch edition of any course.' },
      { q: 'What hours suit a family here?', a: 'Three and a half hours during Dutch summer time, four and a half outside it, with all of that variation produced in the Netherlands rather than in India. Practically it removes nothing: after school, early evening and the whole weekend all remain workable. A single recurring hour is chosen in the free lesson and then does not move.' },
      { q: 'Is there a Modern Age Coders classroom in Prins Alexander?', a: 'No, and none is claimed here, elsewhere in Rotterdam or anywhere in the Netherlands. All teaching is live and online and needs a laptop or desktop, working audio, a current browser and a connection that holds. The telephone number shown on this page is an Indian one and is described as such.', boiler: true },
      { q: 'What do Prins Alexander coding classes cost?', a: 'The first lesson is free. After it, group tuition is USD 100 a month for two live lessons a week, normally eight across the month, in a group of five to ten learners. One-to-one tuition is USD 150 a month at the same frequency with a single teacher. Course, format, recurring hour and availability are all confirmed before anything is paid.', boiler: true },
      { q: 'How many learners are in a group?', a: 'Five to ten, matched on level, pace and goal rather than on age, school or address. One-to-one means a single learner with a single teacher. When no group at the right level is running, a family can take one-to-one lessons or wait for the next group to form.', boiler: true }
    ]
  },

  next: {
    eyebrow: 'Explore Rotterdam and beyond',
    h2: 'West into the city, south across the river, and out to the country',
    html: 'West are <a class="cg-inline-link" href="/coding-classes-in-kralingen-crooswijk">Kralingen-Crooswijk</a> and <a class="cg-inline-link" href="/coding-classes-in-rotterdam-centrum">Rotterdam Centrum</a>, north-west <a class="cg-inline-link" href="/coding-classes-in-hillegersberg-schiebroek">Hillegersberg-Schiebroek</a>, and south across the Maas <a class="cg-inline-link" href="/coding-classes-in-ijsselmonde">IJsselmonde</a>. The city page, <a class="cg-inline-link" href="/coding-classes-in-rotterdam">coding classes in Rotterdam</a>, carries the port and all fourteen gebieden, and everything here sits inside <a class="cg-inline-link" href="/coding-classes-in-zuid-holland">Zuid-Holland</a>. The series descends from the <a class="cg-inline-link" href="/coding-classes-in-netherlands">Netherlands coding hub</a>, and a learner after trained models rather than running programs should begin at <a class="cg-inline-link" href="/ai-and-machine-learning-classes-in-netherlands">AI and machine learning classes in the Netherlands</a> or the <a class="cg-inline-link" href="/ai-and-python-academy-netherlands">AI and Python Academy</a>.',
    waLabel: 'Finish this on WhatsApp'
  },

  footerHeading: 'Rotterdam and the Netherlands',
  footerPlaces: [
    { href: '/coding-classes-in-rotterdam', label: 'Rotterdam' },
    { href: '/coding-classes-in-hillegersberg-schiebroek', label: 'Hillegersberg-Schiebroek' },
    { href: '/coding-classes-in-netherlands', label: 'Netherlands hub' }
  ],

  personalityCss: `
.cg-root.cg-pra .cg-hero-grid { align-items: center; gap: clamp(1.6rem, 4vw, 3.05rem); }
.cg-root.cg-pra .cg-hero h1 { font-weight: 500; letter-spacing: -0.0115em; line-height: 1.11; }
.cg-root.cg-pra .cg-capsule { border-left-width: 4px; border-left-style: solid; border-bottom: 2px solid var(--cg-accent-soft); padding-left: 1.4rem; padding-bottom: 0.85rem; }
.cg-root.cg-pra .cg-eyebrow { letter-spacing: 0.155em; font-weight: 600; text-transform: uppercase; }
.cg-root.cg-pra .cg-section-head h2 { max-width: 36ch; }
.cg-root.cg-pra .cg-grid-3 { gap: clamp(1.1rem, 2.3vw, 1.8rem); }
.cg-root.cg-pra .cg-card { border-radius: 5px; border-left: 4px solid var(--cg-accent-soft); }
.cg-root.cg-pra .cg-table caption { letter-spacing: 0.035em; font-weight: 600; }
.cg-root.cg-pra .cg-table td { font-variant-numeric: tabular-nums; }
.cg-root.cg-pra .cg-ladder-col { border-top: 3px solid var(--cg-accent); padding-top: 1.05rem; }
`,

  dossier: {
    curriculumAuthority: 'Gebied Prins Alexander, Rotterdam, Zuid-Holland: 97,794 residents (2026), the largest of the fourteen gebieden by population and by land, on 1,860 hectares of which 1,738 land and 122 water, density 5,635; 48,260 households averaging 2.0 with 21,710 single-person at 45 percent; 25,205 residents aged forty-five to sixty-five at 26 percent and 22,845 aged sixty-five and over at 23, together 48,050 or 49.1 percent, the oldest profile of the eight Rotterdam districts measured; 14,585 under fifteen, the largest count of children of the eight; 47,041 dwellings, 20,698 owner-occupied at 44 percent, average value 360,000 euro; income 34,700 euro (2024), both around the midpoint of the eight; 28 primary establishments with 8,108 pupils and 9 secondary with 5,860, both the largest totals; eight buurten, Nesselande, Zevenkamp, Ommoord, Oosterflank, Het Lage Land, Prinsenland, s-Gravenland and Kralingseveer, on polder built out from the 1960s. Regio Midden holidays. The district page argues from the limits of a cross-section; Rotterdam Centrum owns boundary truncation, Delfshaven counts of non-interchangeable units, Feijenoord sample size, Charlois unstated bases, IJsselmonde unequal bands, Kralingen-Crooswijk salience, Hillegersberg-Schiebroek correlated measures, and the city page the port units argument.',
    localProject: 'A snapshot shows a state, and every state has at least two histories. Prins Alexander has 25,205 residents aged forty-five to sixty-five and 22,845 aged sixty-five and over, 48,050 people or 49.1 percent of the district, the oldest profile of the eight Rotterdam districts measured. Two ordinary mechanisms fit that identically. Either older households keep moving to a suburb, which predicts the profile persists as generations arrive; or a district laid out on polder from the 1960s filled over a short period with people at a similar stage of life who have aged in the same houses, which predicts the older bands keep rising for a decade and then empty quickly as the stock changes hands. The 2026 table is consistent with both and cannot distinguish them, and the difference matters for the 8,108 primary places here. What would separate them is the same five bands across a run of years, or arrivals and departures counted by age, neither of which was read. The vivid explanation, the one with people choosing something, arrives unbidden; the dull one, in which nobody chose anything and time passed, has to be written down deliberately and is often the true one. Distinct from stock versus flow (Amstelveen), which contrasts a level against a rate using published cohort retention: here there is only one observation and no flow data at all, and the fault is inferring a direction from a single cross-section. The page reports two live hypotheses and the measurement that would settle them, and picks neither.',
    requiredMentions: [
      '97,794',
      '48,260',
      '21,710',
      '47,041',
      '360,000',
      '34,700',
      '5,635',
      '14,585',
      '22,845',
      '25,205',
      '8,108',
      '5,860',
      'Ommoord',
      'Nesselande'
    ],
    sources: [
      { claim: 'Wijk Prins Alexander, Rotterdam: 97,794 inwoners (2026); 48,260 huishoudens averaging 2.0 (2025), 21,710 eenpersoonshuishoudens at 45 percent and 26,550 meerpersoonshuishoudens at 55; ages 14,585 (0 to 15, 15 percent), 11,325 (15 to 25, 12 percent), 23,860 (25 to 45, 24 percent), 25,205 (45 to 65, 26 percent), 22,845 (65+, 23 percent); 1,860 hectare total, 1,738 land, 122 water; bevolkingsdichtheid 5,635 per km2 (2025); woningvoorraad 47,041 (2025); gemiddelde WOZ 360,000 euro (2025); 26,343 huurwoningen (56 percent) and 20,698 koopwoningen (44 percent); gemiddeld inkomen 34,700 euro (2024); 28 vestigingen basisonderwijs with 8,108 leerlingen and 9 vestigingen voortgezet onderwijs with 5,860 leerlingen (2025); 8 buurten: Nesselande, Zevenkamp, Ommoord, Oosterflank, Het Lage Land, Prinsenland, s-Gravenland, Kralingseveer.', url: 'https://allecijfers.nl/wijk/prins-alexander-rotterdam/' },
      { claim: 'Rotterdam: 673,804 inwoners (2026); 22 wijken en 92 buurten. Prins Alexander is the largest gebied, the north-eastern suburb, built from the 1960s onward on drained polder land.', url: 'https://allecijfers.nl/gemeente/rotterdam/' },
      { claim: 'School holiday regions: regio Midden = Utrecht, Zuid-Holland and the northern part of Gelderland; regio Noord = Groningen, Friesland, Drenthe, Overijssel, Flevoland, Noord-Holland; regio Zuid = Zeeland, Noord-Brabant, Limburg and the southern part of Gelderland.', url: 'https://www.rijksoverheid.nl/themas/onderwijs/schoolvakanties/regios-schoolvakantie' }
    ],
    rejectedClaims: [
      'That the district is ageing. Ageing is a direction and the figures cover a single January.',
      'That older people prefer suburbs, or that they do not. Both are hypotheses the page holds open rather than conclusions it reaches.',
      'Any prediction about how many school places the district will need. That follows from whichever history is true, and the page does not choose one.',
      'Any comparison of counts between the five age bands as though the bands were the same width. That is the IJsselmonde page argument; the point here rests on two bands totalling almost half the district, which survives it.',
      'Any use of the construction history as evidence. It is offered as context and as the source of the second hypothesis, and nothing on the page rests on it.',
      'Figures for the eight buurten individually. All eight are named and none was read separately.',
      'Anything the Rotterdam city page owns, including the port throughput in two units and the named secondary schools with their addresses.'
    ]
  }
};
