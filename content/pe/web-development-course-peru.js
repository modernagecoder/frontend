// SHIP: market (en subject door) | web development for Peru: accessible by law since 2025 (WCAG 2.2, RS 001-2025-PCM/SGTD) | parse HTML with html.parser instead of counting text: alt, lang and vague links
'use strict';
// Web development course, Peru (ag- English subject door, Peru cluster row PE015, hubGroup subjects, code wed, #105E62).
// Spec docs/superpowers/specs/2026-11-08-pe-cluster-design.md; writer brief docs/superpowers/plans/2026-11-09-pe-writer-brief.md.
// Owner 2026-11-09: "make sure all our classes are live online in english". Owner 2026-11-08: timing flexible, any time.
// Fees render in USD from the template only; no soles, no typed figure. British spelling.
// Audience: adults and university students in Peru (18+), with teens sent to the teen web courses. Spanish twin (live):
// /curso-de-desarrollo-web-en-ingles-peru (its spine: INEI internet growth 2019 to 2026, e-commerce, front end and back
// end, full stack route; lesson: html.escape). This page takes a different spine: since June 2025 Peru requires WCAG 2.2
// for public digital services, so web development taught properly is accessible web development; lesson: parsing HTML
// with html.parser to find missing alt text, a missing lang and vague link text.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/pe/src-pages/web-development-course-peru/, fetched
// 9 November 2026 with curl -sL -A "Mozilla/5.0"; PDF text extracted with PDFKit; quotes string-matched):
//  - Resolución de Secretaría de Gobierno y Transformación Digital N° 001-2025-PCM/SGTD, "Lima, 24 de junio de 2025"
//    (rs_lineamiento.pdf/.txt, https://cdn.www.gob.pe/uploads/document/file/8277001/6905744-rs-que-aprueba-lineamiento-de-accesibilidad-digital.pdf):
//    "mediante Resolución Ministerial N° 100-2025-PCM de 13 de mayo de 2025, se derogó la mencionada Resolución Ministerial
//    N° 126-2009-PCM"; Art. 2 deadlines: "Poder Ejecutivo, Poder Legislativo y Poder Judicial en un plazo no mayor de (12)
//    doce meses", "Organismos Constitucionales Autónomos ... (12)", "Gobiernos regionales y universidades públicas en un plazo
//    no mayor de (12)", "Gobiernos locales Tipo A y Tipo C en un plazo no mayor de (18) meses", "Gobiernos locales Tipo B en
//    un plazo no mayor de (24) meses", public companies "(12) meses", other entities of Ley 27444 "(18) meses"; Art. 4
//    complementary guides within "ciento ochenta (180) días hábiles".
//  - Lineamiento para el diseño y desarrollo de servicios o plataformas digitales accesibles (lineamiento_2025.pdf/.txt,
//    https://cdn.www.gob.pe/uploads/document/file/8316339/6929423-lineamiento-para-el-diseno-y-desarrollo-de-servicios-o-plataformas-digitales-accesibles.pdf):
//    6.2 "incorporan de forma obligatoria las Pautas de Accesibilidad para el Contenido Web (WCAG, por su abreviatura en
//    inglés) en su versión 2.2 y posteriores versiones, como estándar mínimo"; "se realiza de manera progresiva"; 5.19 to
//    5.21 level definitions (Nivel A "nivel de conformidad mínimo"; Nivel AA "Es el que se solicita generalmente a las
//    administraciones públicas"; Nivel AAA "intérprete de lengua de señas peruana"); 7.2 team roles "Desarrollador
//    (Front-End y Back-End)", "Redactor de experiencia de usuario (UXW)", "Diseñador de experiencia e interfaz de usuario
//    (UX/UI)"; 7.4 "Accesibilidad en Lengua de Señas Peruana y Lenguas Originarias"; criterion 1.1.1 roles "Desarrollador",
//    "Redactor de experiencia de usuario".
//  - gob.pe search results (gob_search_accesibilidad.html, gob_search_lineamiento.html): "Conadis recibe el Sello de
//    Accesibilidad Digital 2025 nivel AA por su Mesa de Partes Digital", "23 de diciembre de 2025"; designations of
//    "Coordinador de Accesibilidad Digital" by municipalities and public universities in 2025 and 2026 (names not printed).
//  - W3C, WCAG 2.2, https://www.w3.org/TR/WCAG22/ (w3c_wcag22.html/.txt): "W3C Recommendation 12 December 2024"; "four
//    principles that provide the foundation for web accessibility: perceivable, operable, understandable, and robust";
//    "The 13 guidelines"; 1.1.1 Non-text Content (Level A); 2.4.4 Link Purpose (In Context) (Level A); 3.1.1 Language of
//    Page (Level A); 1.4.3 Contrast (Minimum) (Level AA) "at least 4.5:1"; "4.1.1 Parsing (Obsolete and removed)".
//  - EF EPI 2025 Peru page (facts-market/src/ef_peru.raw): Lima 555 high; Peru 519.
//  - Time (facts-geo/timezone.tsv): America/Lima UTC-5 all year; India UTC+5:30; 10 h 30 min.
// Our own example (scratchpad pe/e3/code/wed_v1full.py and wed_v2full.py), run with python3 -I, exact output:
//    v1: Images: 4 / Missing alt: 1
//    v2: html: no lang (WCAG 3.1.1) / img logo.png: no alt (WCAG 1.1.1) / img mapa.png: no alt (WCAG 1.1.1) /
//        a /horarios: 'click here' (WCAG 2.4.4) / 4 problems
// Lesson family: parse, don't search; counting the text 'alt="' is fooled by data-alt and misses structure, while an
//    html.parser subclass reads tags and attributes as the browser does (and accepts alt="" for a decorative image).

const { EN: PE_EN } = require('../../scripts/nl/lib/market-pe');

const V1 = `PAGE = """<html>
<body>
<h1>Turismo en Cusco</h1>
<img src="machu-picchu.jpg" alt="Machu Picchu at sunrise">
<img src="logo.png">
<img src="mapa.png" data-alt="map of the route">
<img src="divider.png" alt="">
<p>Tours leave every morning.</p>
<a href="/horarios">click here</a>
<a href="/contacto">Contact the tourist office</a>
</body>
</html>"""

images = PAGE.count("<img")
with_alt = PAGE.count('alt="')
print("Images:", images)
print("Missing alt:", images - with_alt)`;

const V2 = `from html.parser import HTMLParser

PAGE = """..."""   # the same page as in version 1

VAGUE = {"click here", "here", "aquí", "haga clic aquí", "más", "read more"}

class Checker(HTMLParser):
    def __init__(self):
        super().__init__()
        self.problems = []
        self.link = None                       # (href, text so far)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "html" and not a.get("lang"):
            self.problems.append("html: no lang (WCAG 3.1.1)")
        if tag == "img" and "alt" not in a:
            self.problems.append("img " + a["src"] + ": no alt (WCAG 1.1.1)")
        if tag == "a":
            self.link = [a.get("href", "?"), ""]

    def handle_data(self, data):
        if self.link:
            self.link[1] += data

    def handle_endtag(self, tag):
        if tag == "a" and self.link:
            href, text = self.link
            if text.strip().lower() in VAGUE:
                self.problems.append("a " + href + ": '" + text.strip() + "' (WCAG 2.4.4)")
            self.link = None

c = Checker()
c.feed(PAGE)
for p in c.problems:
    print(p)
print(len(c.problems), "problems")`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Peru',
  hub: { group: 'subjects', label: 'Web development course' },
  slug: 'web-development-course-peru',
  code: 'wed',
  accent: '#105E62',
  accentRationale: 'Web development in Peru: a blue-green #105E62 allocated to this row, the colour of a link that has been visited; it passes WCAG 1.4.3 itself, above 4.5:1 on #FBF8F2, #F5F1E8 and #EDE7DA',
  pageType: 'market',
  market: PE_EN,
  parents: [{ slug: 'coding-and-ai-classes-in-peru', name: 'Peru' }],
  routeLabel: 'Web development course, Peru',
  title: 'Web Development Course in Peru: Live Online, in English',
  description: 'Web development course for Peru, live online in English: HTML, CSS, JavaScript, React and Python, with WCAG 2.2 accessibility, as Peru now requires. Any hour.',
  ogDescription: 'Learn web development from Peru with a live mentor, in English and at flexible hours: what a course should cover, why accessibility became a legal minimum for Peru\'s public websites in 2025, what WCAG 2.2 asks, and a worked lesson that checks a page the way a browser reads it.',
  twitterDescription: 'Web development from Peru, live online in English, with the WCAG 2.2 rules Peru adopted in 2025 and a real lesson.',
  pageName: 'Web Development Course in Peru',
  webPageDescription: 'A guide for adults and university students in Peru who want to learn web development live online in English, built from RS 001-2025-PCM/SGTD and its accessibility guideline, the W3C WCAG 2.2 Recommendation, EF EPI 2025, and an original Python lesson that parses HTML to find accessibility errors.',
  courseDescription: 'Live online web development courses in English for learners in Peru aged 18 and over: HTML and CSS, JavaScript, React, Node.js or Python back ends, databases and accessibility to WCAG 2.2, in a group of fifteen to twenty or one to one, at flexible hours.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding and AI classes in Peru', href: '/coding-and-ai-classes-in-peru' }],
  crumbLabel: 'Web development course',
  navLinks: [
    { href: '/coding-and-ai-classes-in-peru', label: 'Peru' },
    { href: '#law', label: 'Peru\'s 2025 rule' },
    { href: '#wcag', label: 'WCAG 2.2' },
    { href: '#lesson', label: 'Lesson' },
    { href: '#route', label: 'Route' },
    { href: '#times', label: 'Times' }
  ],
  eyebrow: 'Peru &middot; Web development &middot; Live online, in English &middot; 18 and over',
  h1: 'Web development course in Peru',
  lede: 'In June 2025 Peru made the international accessibility guidelines, WCAG 2.2, the minimum standard for every public website and digital service, with deadlines running into 2026 and 2027. That changes what it means to know web development in Peru. This page explains the rule, what WCAG asks of a developer, the route our courses take, and a lesson in which a short program checks a page the way a browser and a screen reader see it.',
  secondaryCta: { href: '#lesson', label: 'See the checker lesson' },
  wa: 'Hello Modern Age Coders, I am in Peru and would like to learn web development, live online in English. Could I book a free first class?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ learners worldwide &middot; one mentor who reads your code',
  spec: [
    ['For', 'Adults and university students, 18 and over'],
    ['Front end', 'HTML, CSS, JavaScript, React'],
    ['Back end', 'Node.js or Python, with a database'],
    ['Built in', 'Accessibility to WCAG 2.2 from the first page'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['First class', 'Free, no card']
  ],
  capsuleQ: 'The short answer',
  capsule: 'Modern Age Coders runs web development courses for adults and university students in Peru, live online and in English. Learners begin with HTML and CSS, move to JavaScript and React, and then build a back end in Node.js or Python with a database, making every page accessible to the WCAG 2.2 guidelines that Peru adopted as its public-sector minimum in 2025. A mentor teaches on video in every class, to a group of fifteen to twenty or one to one, at whatever day and hour you choose.',

  picks: {
    eyebrow: 'Start here',
    h2: 'Three ways into web development',
    lede: 'A complete route, a short first step, and a Python route for people who already know some code. All three are taught live in English.',
    items: [
      { course: 'full-stack-web-development-masterclass-college', code: 'PE / WEB / 01', title: 'Full stack development', note: 'For beginners from 18, over 12 to 14 months. HTML and CSS to React and Node.js, with databases and the basics of putting a site online.' },
      { course: 'html-css-course-for-beginners-build-real-websites', code: 'PE / WEB / 02', title: 'HTML and CSS for beginners', note: 'Four months, from 10 years old to adult. Real responsive pages from nothing, and the place where accessible structure is first learnt.' },
      { course: 'python-web-development-django-flask-course', code: 'PE / WEB / 03', title: 'Python web development', note: 'Six months of Django and Flask for learners with Python basics. A route into the web for people who came to code through data or university.' }
    ]
  },

  sections: [
    {
      id: 'skills',
      eyebrow: 'What you learn',
      h2: 'What should a web development course teach in 2026?',
      lede: 'The three classic layers, plus two things that used to be optional and are no longer: accessibility and version control.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Structure and style', p: 'HTML that describes what each part of a page is, a heading, a list, a form, and CSS that makes it look right on a phone and a desktop. Good structure is also the first half of accessibility.' },
          { h3: 'Behaviour', p: 'JavaScript for interaction, then React for larger interfaces built from components. Learners write the logic themselves before reaching for a library.' },
          { h3: 'The server', p: 'A back end in Node.js or Python, a database, logins and the security habits that go with them. Learners deploy at least one complete site that other people can use.' }
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Accessibility', p: 'Text alternatives, keyboard use, contrast, clear link text and the page language, checked against WCAG 2.2. In Peru this is now the legal floor for public services.' },
          { h3: 'Version control', p: 'Git from week one: small commits, branches, pull requests and code review with the mentor.' },
          { h3: 'Reading the specs', p: 'MDN, the W3C Recommendation and framework docs are in English. Learning to read them is part of the course, not homework.' }
        ] },
        { kind: 'p', mt: true, html: 'Our Spanish page, <a class="ag-inline-link" href="/curso-de-desarrollo-web-en-ingles-peru">curso de desarrollo web en inglés</a>, explains front end, back end and full stack in detail, with INEI\'s figures on how quickly Peruvian homes got online and a lesson on escaping user text. This page concentrates on the rule that changed Peruvian web work in 2025.' }
      ]
    },
    {
      id: 'law',
      tint: 'tint',
      eyebrow: 'Peru\'s 2025 rule',
      h2: 'Do websites in Peru have to be accessible?',
      lede: 'Public ones do. On 24 June 2025 the Secretariat of Government and Digital Transformation of the PCM approved a guideline that obliges public bodies to adopt WCAG 2.2 and later versions as the minimum accessibility standard for their digital services, replacing the 2009 rules.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Deadlines to apply Peru\'s 2025 digital accessibility guideline, by type of public body', head: ['Public body', 'Deadline, months'], rows: [
          ['Executive, Legislature and Judiciary', '12'],
          ['Autonomous constitutional bodies', '12'],
          ['Regional governments and public universities', '12'],
          ['Public companies of regional and local governments or under FONAFE', '12'],
          ['Local governments, Type A and Type C', '18'],
          ['Other bodies covered by Ley 27444 not listed above', '18'],
          ['Local governments, Type B', '24']
        ] },
        { kind: 'source', html: 'Source: Resolución de Secretaría de Gobierno y Transformación Digital N° 001-2025-PCM/SGTD, Lima, 24 June 2025, article 2 ("plazo no mayor de"). Deadlines run from the resolution; other bodies apply it "en función a sus capacidades y recursos". The earlier rules, RM 126-2009-PCM, were repealed by RM 100-2025-PCM on 13 May 2025.' },
        { kind: 'two', mt: true,
          leftH3: 'What the guideline actually requires',
          left: [
            'Section 6.2 of the guideline says public bodies "incorporan de forma obligatoria" the Web Content Accessibility Guidelines, WCAG, "en su versión 2.2 y posteriores versiones, como estándar mínimo", applied progressively. It defines level AA as the one "que se solicita generalmente a las administraciones públicas".',
            'It goes further than the international text in one Peruvian direction: a section on accessibility in Peruvian Sign Language and in Peru\'s original languages, and a description of level AAA that mentions an interpreter of "lengua de señas peruana" for multimedia.'
          ],
          rightH3: 'Who does the work',
          right: [
            'The guideline names the team roles every public body needs for accessibility, at minimum: a front-end and back-end developer, a user experience writer, and a UX/UI designer. Bodies may also designate a Coordinador de Accesibilidad Digital, and gob.pe shows municipalities and public universities naming one through 2025 and 2026.',
            'There is also a public reward: a Sello de Accesibilidad Digital. On 23 December 2025, gob.pe reported that Conadis, Peru\'s council for people with disabilities, received the 2025 seal at level AA for its digital document desk.'
          ] },
        { kind: 'p', mt: true, html: 'For a learner, the point is practical. The developer role in that guideline is exactly the job a web course prepares you for, and the state now expects that developer to know WCAG. Private companies are not bound by this guideline, but many supply software to public bodies, and accessible sites are simply better sites. We teach it to everyone.' }
      ]
    },
    {
      id: 'wcag',
      eyebrow: 'WCAG 2.2',
      h2: 'What is WCAG 2.2, and what does level AA mean?',
      lede: 'WCAG is the W3C\'s Web Content Accessibility Guidelines. Version 2.2 is a W3C Recommendation, in its current form dated 12 December 2024, and it is the version Peru\'s guideline names.',
      body: [
        { kind: 'table', numCols: [], caption: 'How WCAG 2.2 is organised, and the three conformance levels as Peru\'s guideline describes them', head: ['Part', 'What it is', 'Example'], rows: [
          ['4 principles', 'Perceivable, operable, understandable, robust', 'Robust: works with assistive technology'],
          ['13 guidelines', 'Goals under the principles, not testable on their own', '1.1 Text Alternatives'],
          ['Success criteria', 'Testable statements, each with a level', '1.1.1 Non-text Content, level A'],
          ['Level A', 'The minimum level of conformance (Peru\'s guideline, 5.19)', 'Every image has a text alternative'],
          ['Level AA', 'The level generally asked of public administrations (5.20)', '1.4.3 Contrast (Minimum): at least 4.5:1'],
          ['Level AAA', 'The high level; includes a Peruvian Sign Language interpreter for multimedia (5.21)', 'Extended audio description']
        ] },
        { kind: 'source', html: 'Sources: W3C, Web Content Accessibility Guidelines (WCAG) 2.2, W3C Recommendation 12 December 2024; Lineamiento para el diseño y desarrollo de servicios o plataformas digitales accesibles, sections 5.19 to 5.21 and Annex 1 (PCM, 2025). Read on 9 November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'The criteria beginners break most',
          left: [
            'In our experience, first websites fail the same few criteria again and again: images without a text alternative (1.1.1), links that say "click here" (2.4.4, Link Purpose), a page with no declared language (3.1.1, Language of Page) and pale grey text on white (1.4.3, Contrast). The first three are level A, the most basic level.',
            'All four are cheap to get right on the first day and tedious to fix on a finished site with hundreds of pages. That is why we teach them in the HTML module, not at the end.'
          ],
          rightH3: 'A detail that tells you the version',
          right: [
            'WCAG 2.2 marks success criterion 4.1.1, Parsing, as "Obsolete and removed". Older courses and checklists still teach it as a requirement. A learner who notices that, and knows why browsers made it unnecessary, has read the actual Recommendation rather than a summary of a summary.',
            'Reading the source is a habit we push throughout: when a learner asks whether something is required, the mentor sends them to the W3C text first.'
          ] }
      ]
    },
    {
      id: 'lesson',
      eyebrow: 'A lesson from the course',
      h2: 'How can a program check whether a web page is accessible?',
      lede: 'By reading the page as structure, the way a browser does, rather than searching it as text. Our learners discover the difference with a small page about tours in Cusco that has four deliberate mistakes.',
      body: [
        { kind: 'two',
          leftH3: 'The page',
          left: [
            'The page has four images. One has a proper description. One, a logo, has no alt attribute at all. One, a route map, has a <code>data-alt</code> attribute, which looks like alt text to a human but is ignored by screen readers. One, a decorative divider, has an empty <code>alt=""</code>, which is correct: it tells assistive technology to skip it.',
            'There is also no <code>lang</code> on the <code>html</code> element, and one link whose whole text is "click here".'
          ],
          rightH3: 'The first attempt',
          right: [
            'Version 1 does what most beginners try: count the images, count the occurrences of <code>alt="</code>, and subtract. It runs, prints a reasonable answer and gives a false sense of safety.',
            'Before running Version 2, the mentor asks the learner to list every problem by eye. Most find the logo; fewer catch the map, the language or the link.'
          ] },
        { kind: 'code', label: 'Version 1: count the text', lang: 'Python', code: V1, note: 'It prints <code>Images: 4</code> and <code>Missing alt: 1</code>. The real answer is 2: the search also counted <code>data-alt="</code> as alt text.' },
        { kind: 'code', label: 'Version 2: parse the tags (PAGE is the same string as above)', lang: 'Python', code: V2, note: 'With the same page pasted in, it prints <code>html: no lang (WCAG 3.1.1)</code>, <code>img logo.png: no alt (WCAG 1.1.1)</code>, <code>img mapa.png: no alt (WCAG 1.1.1)</code>, <code>a /horarios: \'click here\' (WCAG 2.4.4)</code> and <code>4 problems</code>.' },
        { kind: 'p', mt: true, html: 'Python\'s <code>html.parser</code> hands the program each tag with its attributes already separated, so <code>"alt" in a</code> means exactly "this image has an alt attribute", whatever else is written nearby. It also lets the empty <code>alt=""</code> through, because the attribute is present, and that is the right behaviour for a decorative image. A text search can do none of this reliably.' },
        { kind: 'p', html: 'The wider lesson reaches far beyond accessibility. HTML, JSON, CSV and dates all look like text, and every one of them has a parser in the standard library. A developer who reaches for the parser instead of a search writes code that survives the next page, not just this one. Professional tools such as browser accessibility audits are built on the same idea, and once a learner has written a small checker, they understand what those tools can and cannot see: no program can tell you whether "Machu Picchu at sunrise" is a good description of the photo. A person still has to judge that.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Fix the page.</strong> Correct all four problems in the HTML and run Version 2 again until it prints <code>0 problems</code>.',
          '<strong>Add a check.</strong> Flag any image whose alt text is the file name, such as <code>alt="logo.png"</code>.',
          '<strong>Spanish and English.</strong> Our Cusco page mixes a Spanish heading with English text. Which <code>lang</code> should the page declare, and how does WCAG 3.1.2 handle a passage in another language?',
          '<strong>Go further.</strong> Read success criterion 1.4.3 in the W3C text and write a function that computes the contrast ratio of two colours.'
        ] },
        { kind: 'source', html: 'The page, code, output and tasks are ours, written for this page and run with Python 3 on 9 November 2026. The tour page is invented.' }
      ]
    },
    {
      id: 'route',
      eyebrow: 'A route of our own',
      h2: 'How long does it take to learn web development?',
      lede: 'For a beginner who practises between classes, a first real website comes within weeks and a complete full stack project within about a year. Our suggested route:',
      body: [
        { kind: 'table', numCols: [], caption: 'A suggested route into web development (our plan)', head: ['Stage', 'What you learn', 'What you finish with'], rows: [
          ['First months', 'HTML, CSS and accessible structure', 'A personal site that passes the checks in the lesson above'],
          ['Next', 'JavaScript, without a framework', 'Interactive pages: forms, filters, a small game'],
          ['Then', 'React and components', 'A front end for a real use, such as a booking page'],
          ['Then', 'Node.js or Python, and a database', 'A back end with logins and stored data'],
          ['Final stage', 'Deployment, testing, an accessibility review', 'A full stack project online, documented']
        ] },
        { kind: 'source', html: 'Our plan, adjusted to each learner. Our full stack course for adults runs 12 to 14 months from zero; the HTML and CSS course is four months. We promise no job or salary.' },
        { kind: 'two', mt: true,
          leftH3: 'Can AI build the website for me?',
          left: [
            'AI tools now produce working pages quickly, and our professional courses show how to use them. But generated pages fail accessibility checks often, because the model reproduces the average of the web, and the average web is not accessible.',
            'The developer who knows WCAG can review what the tool produced and fix it. The one who does not cannot even see what is wrong. Our page on <a class="ag-inline-link" href="/vibe-coding-curso-en-ingles">vibe coding</a>, in Spanish, covers this balance.'
          ],
          rightH3: 'For adults changing career',
          right: [
            'Many of our adult learners in Peru come from other jobs: administration, teaching, sales. Web development suits that path, because results are visible early and the portfolio is a link anyone can open.',
            'Our page for <a class="ag-inline-link" href="/cursos-de-programacion-para-adultos-peru">adults learning to code in Peru</a> explains how classes fit around work.'
          ] }
      ]
    },
    {
      id: 'english',
      eyebrow: 'Language of the classes',
      h2: 'Are the classes in Spanish?',
      lede: 'No. Our classes are live and online, and they are taught in English only, by mentors based in India who adjust to each learner.',
      body: [
        { kind: 'two',
          leftH3: 'How the English works in class',
          left: [
            'Mentors use plain sentences, slow down for new terms, and say a thing twice in different ways when a learner hesitates. Questions in unpolished English are welcome; most of the hour is spent looking at the same code and the same browser window.',
            'The vocabulary of the web is English: element, attribute, selector, request, response. Even Peru\'s own guideline refers to WCAG "por su abreviatura en inglés" and links each criterion to its English page.'
          ],
          rightH3: 'Where Peru stands in English',
          right: [
            'EF\'s English Proficiency Index 2025 gives Peru 519 points overall, which EF calls moderate, and gives Lima 555, which falls in its high band.',
            'A learner near the national level will find the first weeks demanding and then easier. A learner in Lima\'s band will mostly notice that the documentation finally makes sense. The free class is the honest test.'
          ] }
      ]
    },
    {
      id: 'times',
      eyebrow: 'Class times',
      h2: 'What time would my classes be, from Peru?',
      lede: 'Any time you pick. Peru and India both stay on one clock all year.',
      body: [
        { kind: 'table', numCols: [], caption: 'Sample times in Peru and in India (illustrations, not a schedule)', head: ['Peru time', 'India time', 'Note'], rows: [
          ['07:00', '17:30', 'Before a working day'],
          ['11:30', '22:00', 'Late morning, same day in India'],
          ['18:30', '05:00, next day', 'After work'],
          ['22:00', '08:30, next day', 'Late evening']
        ] },
        { kind: 'source', html: 'Time zones: America/Lima at UTC minus 5, with no summer time since 1994 (tz database); Asia/Kolkata at UTC plus 5:30. India is therefore 10 hours 30 minutes ahead on every day of the year.' },
        { kind: 'p', mt: true, html: 'You choose your slot in Peru time when you book; the mentor\'s calendar shows the India equivalent. Because neither country shifts its clocks, the slot you pick in November is still right in June.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Progress',
    h2: 'How do you know your web skills are growing?',
    lede: 'Six stages of our own. At each, the mentor checks a working page, not a quiz answer.',
    table: { caption: 'Web development stages (ours)', head: ['Stage', 'You can', 'Checked by'], rows: [
      ['1. Structure', 'Write semantic HTML with headings, lists, forms and alt text', 'A page with zero problems in the lesson checker'],
      ['2. Layout', 'Make the page work from a small phone to a wide screen', 'The same page at three widths'],
      ['3. Interaction', 'Add JavaScript that also works from the keyboard', 'The page used with no mouse at all'],
      ['4. Components', 'Build a React interface from small reusable parts', 'One component reused in three places'],
      ['5. Server', 'Store and serve data from a back end you wrote', 'A form that saves and a page that lists'],
      ['6. Release', 'Deploy, test and review against WCAG 2.2 level AA', 'A public link and a short accessibility statement']
    ] },
    left: { h3: 'For learners', ps: [
      'Stage 3 surprises people. Unplug the mouse and try your own site: if you cannot reach every button, neither can many real users.',
      'Stage 6 mirrors what Peru\'s public bodies must now publish about their own services.'
    ] },
    right: { h3: 'For employers', ps: [
      'Each stage ends in something public: a link, a repository, a statement.',
      'Our certificate of completion is our own; it is not a Peruvian degree and is not the state\'s accessibility seal.'
    ] }
  },

  catalogue: {
    eyebrow: 'More courses',
    h2: 'Nine more courses for the web',
    lede: 'Courses for teenagers who want to start early, for adults adding depth, and for working developers. All taught live, in English.',
    bands: [
      { num: 'I', h3: 'Teenagers', sub: 'Ages 13 to 18', courses: [
        { code: 'PE / TEEN / 01', slug: 'frontend-development-masterclass-for-teens', title: 'Frontend for teens', blurb: 'HTML, CSS and JavaScript from zero, 9 to 11 months.' },
        { code: 'PE / TEEN / 02', slug: 'full-stack-web-development-teens-masterclass', title: 'Full stack for teens', blurb: 'React and Node.js for 13 to 18 year olds.' },
        { code: 'PE / TEEN / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive pages and browser games, six months.' }
      ] },
      { num: 'II', h3: 'Adults adding depth', sub: '18 and over', courses: [
        { code: 'PE / WEB / 04', slug: 'react-js-complete-masterclass-college', title: 'React', blurb: 'JavaScript to production React, from zero.' },
        { code: 'PE / WEB / 05', slug: 'mysql-database-complete-masterclass-college', title: 'MySQL', blurb: 'The database behind most of the web, properly designed.' },
        { code: 'PE / WEB / 06', slug: 'git-github-version-control-course-for-college-students', title: 'Git and GitHub', blurb: 'Team habits in twenty-four classes.' }
      ] },
      { num: 'III', h3: 'Wider skills', sub: 'Students and professionals', courses: [
        { code: 'PE / PRO / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'Python from zero, the base for Django and Flask.' },
        { code: 'PE / PRO / 02', slug: 'vibe-coding-for-college-fullstack-ai-dsa-career-course', title: 'Vibe coding for college', blurb: 'Full stack with AI tools, for 18 and over, in 12 weeks.' },
        { code: 'PE / PRO / 03', slug: 'git-github-advanced-version-control-masterclass-for-professionals', title: 'Advanced Git', blurb: 'Reviews, releases and branch strategy for teams.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How it works',
    h2: 'How live web development classes run',
    lede: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family.',
    slots: [
      { time: 'Mornings', l: 'A Peru morning falls in the Indian evening, a good hour for a focused class.' },
      { time: 'Evenings', l: 'After work in Peru is early morning in India, and that hour is covered too.' },
      { time: '1-on-1', l: 'A slot, pace and project chosen around you.' }
    ],
    cells: [
      { h3: 'Build in the browser', p: 'Every class ends with something visible on screen.' },
      { h3: 'One mentor', p: 'Who reviews your code and knows your project.' },
      { h3: 'English made clear', p: 'Short sentences, terms explained, time to answer.' },
      { h3: 'Accessible by habit', p: 'Each page you build is checked against WCAG.' },
      { h3: 'Small tasks between', p: 'Practice that the next class starts from.' },
      { h3: 'Group or private', p: 'Fifteen to twenty adults, or one to one.' }
    ]
  },

  projectsH2: 'Sites and tools our learners have built',
  projectsLede: 'Some appear below; browse the <a class="ag-inline-link" href="/student-labs">student labs</a> for more.',
  reviewsLede: 'Learners and parents on Google, in their own words.',

  fees: {
    h2: 'Fees for the web development course',
    lede: 'Billed monthly. Our fees are set in US dollars and charged to your card in dollars, and your bank changes them into soles at the rate it uses, so the statement amount can vary a little.',
    free: ['A free first class', 'A tiny web page built together, and a chat about goals', 'No card required'],
    group: ['Fifteen to twenty adults at a similar stage', 'One mentor for the whole course', 'Two live classes a week', 'Monthly; stop whenever you wish'],
    one: ['Just you and a mentor', 'A project of your choosing', 'Days and times you decide']
  },

  faq: {
    eyebrow: 'Questions from Peru',
    h2: 'Web development course in Peru: questions and answers',
    items: [
      { q: 'Are the classes in Spanish?', a: 'No. We teach web development in English only, live and online. Mentors based in India use short, clear sentences, take your pace and accent into account and explain any term again in other words. The web\'s own vocabulary and documentation are English.' },
      { q: 'Can I learn web development from zero?', a: 'Yes. The full stack course and the HTML and CSS course both start from nothing. You build a first page in the opening weeks.' },
      { q: 'Do websites in Peru have to meet WCAG 2.2?', a: 'Public ones do. Since 24 June 2025, RS 001-2025-PCM/SGTD and its guideline oblige public bodies to adopt WCAG 2.2 and later versions as the minimum, with deadlines of 12 to 24 months by type of body. Private sites are not covered by that guideline.' },
      { q: 'What is WCAG level AA?', a: 'The middle of WCAG\'s three conformance levels. Peru\'s guideline describes it as the level generally asked of public administrations; it includes, for example, a contrast ratio of at least 4.5:1 for normal text.' },
      { q: 'Do I need to learn React?', a: 'Not at first. We teach HTML, CSS and plain JavaScript properly, then React. Learners who start with React often cannot explain what it is doing underneath.' },
      { q: 'Python or Node.js for the back end?', a: 'Both are good. Node.js keeps one language from front to back; Python suits people who also want data or automation. The free class helps you choose.' },
      { q: 'What time are classes?', a: 'Any day, any time, flexible: choose a batch, or for a very personalised plan choose 1-on-1 at the hour that suits your family. India is 10 hours 30 minutes ahead of Peru all year, so 18:30 in Peru is 05:00 the next day for the mentor.' },
      { q: 'How long until I can build a real site?', a: 'A simple accessible site in the first months; a full stack project with a database within about a year for a beginner, depending on practice. We do not promise jobs or salaries.' },
      { q: 'How much does it cost?', a: 'Look at the fee section: the monthly price is in US dollars, the card is charged in dollars, and soles appear only after your bank converts it. Visitors from India see rupees. The first class costs nothing and needs no card.' },
      { q: 'Will I get a certificate?', a: 'Our own certificate of completion after the final exam. It is not a university degree, and it is not the Peruvian state\'s Sello de Accesibilidad Digital, which public bodies apply for.' },
      { q: 'Are you connected with the PCM or Conadis?', a: 'No. We quote their public documents to explain the rules; we have no connection with the PCM, its Secretariat of Government and Digital Transformation, Conadis or any public body.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Read next',
    h2: 'Related pages',
    lede: 'For adults in Peru who want to build for the web.',
    items: [
      { href: '/curso-de-desarrollo-web-en-ingles-peru', label: 'Desarrollo web en inglés', p: 'The Spanish page: full stack explained, and a lesson on escaping user text.' },
      { href: '/cursos-de-programacion-para-adultos-peru', label: 'Programación para adultos', p: 'Learning to code around a job in Peru.' },
      { href: '/vibe-coding-curso-en-ingles', label: 'Vibe coding en inglés', p: 'Building with AI without copying blindly.' },
      { href: '/coding-and-ai-classes-in-peru', label: 'Coding and AI classes in Peru', p: 'All our Peru pages in one list.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projects learners finished and published.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside a live class.' }
    ]
  },

  start: {
    h2: 'Book a free web development class',
    lede: 'In the free class you and the mentor build a tiny page together and talk about what you want to make. The mentor gauges how you think and how comfortable the English is, then proposes a course.',
    readFirst: 'To read before booking, see <a class="ag-inline-link" href="/how-we-teach">a class described step by step</a> or the <a class="ag-inline-link" href="/courses">full catalogue of courses</a>.',
    note: 'Live, online, in English only, with mentors in India. WhatsApp in English gets the fastest reply.',
    formNote: 'Free; nothing to sign up for afterwards.'
  },

  footer: {
    cols: [
      { h4: 'Peru', links: [
        { href: '/coding-and-ai-classes-in-peru', label: 'Peru hub' },
        { href: '/curso-de-desarrollo-web-en-ingles-peru', label: 'Web, in Spanish' },
        { href: '/cursos-de-programacion-para-adultos-peru', label: 'Adults' },
        { href: '/vibe-coding-curso-en-ingles', label: 'Vibe coding' }
      ] },
      { h4: 'Learn more', links: [
        { href: '/student-labs', label: 'Student projects' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/what-is-vibe-coding', label: 'What is vibe coding' },
        { href: '/courses', label: 'All courses' }
      ] }
    ],
    bottomRight: 'Parse it, do not search it'
  },

  personalityCss: `
.ag-root.ag-wed .ag-hero h1 { letter-spacing: -0.012em; max-width: 20ch; }
.ag-root.ag-wed .ag-capsule { border-left-width: 4px; border-radius: 4px; }
.ag-root.ag-wed .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-wed .ag-table td.ag-num { font-variant-numeric: tabular-nums; font-weight: 600; }
.ag-root.ag-wed .ag-code-note code { font-weight: 600; }
`,

  dossier: {
    curriculumAuthority: 'PCM Secretaría de Gobierno y Transformación Digital, RS 001-2025-PCM/SGTD (24 June 2025) and the Lineamiento para el diseño y desarrollo de servicios o plataformas digitales accesibles; gob.pe records (Conadis seal, December 2025); W3C WCAG 2.2 Recommendation (12 December 2024); EF EPI 2025; tz database America/Lima.',
    localProject: 'How can a program check whether a page is accessible? An original Python lesson on an invented Cusco tour page: Version 1 counts the text alt=" and reports Missing alt: 1, fooled by data-alt; Version 2 subclasses html.parser and finds four problems (no lang, two images without alt, a "click here" link), accepting alt="" for a decorative image. Lesson family: parse, do not search.',
    requiredMentions: ['Missing alt: 1', 'img mapa.png: no alt (WCAG 1.1.1)', '4 problems', '001-2025-PCM/SGTD', 'RM 100-2025-PCM', 'Local governments, Type B', 'W3C Recommendation 12 December 2024', 'Parse it, do not search it', 'Obsolete and removed'],
    sources: [
      { claim: 'RS 001-2025-PCM/SGTD of 24 June 2025: approval, deadlines by body, repeal of RM 126-2009-PCM by RM 100-2025-PCM.', url: 'https://cdn.www.gob.pe/uploads/document/file/8277001/6905744-rs-que-aprueba-lineamiento-de-accesibilidad-digital.pdf' },
      { claim: 'The 2025 accessibility guideline: WCAG 2.2 as minimum, levels, roles, sign language section.', url: 'https://cdn.www.gob.pe/uploads/document/file/8316339/6929423-lineamiento-para-el-diseno-y-desarrollo-de-servicios-o-plataformas-digitales-accesibles.pdf' },
      { claim: 'Conadis receives the 2025 Sello de Accesibilidad Digital at level AA, 23 December 2025.', url: 'https://www.gob.pe/busquedas?term=accesibilidad+web+WCAG' },
      { claim: 'WCAG 2.2 W3C Recommendation: principles, 13 guidelines, criteria levels, 4.1.1 removed.', url: 'https://www.w3.org/TR/WCAG22/' },
      { claim: 'EF EPI 2025: Peru 519, Lima 555.', url: 'https://www.ef.com/wwen/epi/regions/latin-america/peru/' },
      { claim: 'Peru time UTC-5 without summer time.', url: 'https://raw.githubusercontent.com/eggert/tz/main/southamerica' }
    ],
    rejectedClaims: [
      'A claim that private websites in Peru are legally bound by WCAG 2.2: the guideline covers public bodies; not stated for private sites.',
      'Compliance rates of Peruvian public websites: no primary measurement found, none printed.',
      'Names of officials designated as accessibility coordinators: not printed.',
      'Web developer salaries in Peru: no primary source verified.',
      'Spanish-language teaching: every class is in English, and the page says so.',
      'Any connection with the PCM, Conadis or the W3C: none.'
    ]
  }
};
