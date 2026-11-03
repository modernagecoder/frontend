'use strict';
// App entwickeln lernen für Jugendliche (ag- German-language door, Germany cluster P3, row DE068, alloc code ael, accent #60470A).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live in English only, matching the learner's pace and accent; the capsule says "auf Englisch".
// Formal "Sie" throughout. Pages show euro; checkout charges USD. No store or developer fees typed (rule: no currency figures).
// Spine: a teenager who wants to build an app. (1) Why apps: what 12- to 19-year-olds use (JIM-Studie 2025); (2) the age rules of the
// two app stores for publishing (Google Play Console 18+, Apple via a parent under the age of majority) and two App Store rules that
// shape a first app; (3) what a computer needs (Android Studio system requirements) and the block-based alternative (MIT App Inventor);
// (4) an original example: the logic of a vocabulary flashcard app written and tested without any screen; (5) a path from idea to
// app; (6) times.
// Sources, raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/app-entwickeln-lernen-jugendliche/ (fetched 3 Nov 2026):
//  mpfs JIM-Studie 2025: "Smartphone (95 %)"; "Bei den meistgenutzten Apps liegt WhatsApp mit 96 Prozent regelmäßiger Nutzung weiterhin
//   vorne."; "Hinter Instagram (63 %) liegt nun Snapchat (56 %)"; "84 Prozent zählen den Dienst zu ihren Top drei" (WhatsApp).
//  Google Play Console Help, Get started with Play Console: "You must be at least 18 years of age to sign up for a Play Console account.";
//   "Step 3: Pay the registration fee" ("one-time registration fee"; amount not printed on our page).
//  Apple Developer, Enroll: "If you're under the age of majority in your region, your parent/guardian can enroll with their Apple Account
//   and share their account with you."; membership is charged "per membership year" (amount not printed).
//  Apple App Store Review Guidelines: 1.3 Kids Category "These apps must not include links out of the app, purchasing opportunities, or
//   other distractions to kids unless reserved for a designated area behind a parental gate."; 4.2 Minimum Functionality "Your app should
//   include features, content, and UI that elevate it beyond a repackaged website."
//  Android Developers, Install Android Studio, system requirements: Windows "64-bit Microsoft Windows 10"; RAM "Studio: 8 GB",
//   "Studio & Emulator: 16GB"; disk "Studio: 8 GB of free space."; "Windows machines with ARM-based CPUs aren't currently supported.";
//   macOS minimum "macOS 12"; screen "1280 x 800".
//  MIT App Inventor, About Us: "With over 24 million learners from 195 countries collectively creating over 100 million apps";
//   "Those new to MIT App Inventor can have a simple app up and running in less than 30 minutes."; "serves more than 6 million registered users".
//  Time: EinhZeitG; summer time ended 25 Oct 2026, begins 28 Mar 2027.
// Our own example (python3 -I, 3 Nov 2026): flashcard logic with five boxes; five tests pass ("alle Tests bestanden"); one card's path:
// Tag 1 -> Fach 2, Tag 2 -> Fach 3, Tag 4 -> Fach 1, Tag 5 -> Fach 2. Without min() neues_fach(5, True) returns 6 and the test raises
// AssertionError.
// Lesson family: logic first, screen later; keep an app's rules in plain functions you can test without any button.

const { DE } = require('../../scripts/nl/lib/market-de');

const PY = [
  'FAECHER = 5',
  '',
  'def neues_fach(fach, richtig):',
  '    if richtig:',
  '        return min(fach + 1, FAECHER)',
  '    return 1',
  '',
  'def ist_faellig(fach, tag):',
  '    return tag % (2 ** (fach - 1)) == 0',
  '',
  '# Tests ohne Bildschirm',
  'assert neues_fach(1, True) == 2',
  'assert neues_fach(5, True) == 5',
  'assert neues_fach(4, False) == 1',
  'assert ist_faellig(1, 7)',
  'assert not ist_faellig(3, 6)',
  "print('alle Tests bestanden')",
  '',
  'karte = 1',
  'for tag, richtig in [(1, True), (2, True), (4, False), (5, True)]:',
  '    karte = neues_fach(karte, richtig)',
  "    print('Tag', tag, '-> Fach', karte)"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'App entwickeln lernen für Jugendliche' },
  slug: 'app-entwickeln-lernen-jugendliche',
  code: 'ael',
  accent: '#60470A',
  accentRationale: 'App entwickeln lernen für Jugendliche: a dark bronze #60470A, the colour of a well-used phone case, strong enough for small interface labels; contrast 7.09 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'App entwickeln lernen für Jugendliche (auf Englisch)',
  title: 'App entwickeln lernen für Jugendliche: live auf Englisch',
  description: 'App entwickeln lernen für Jugendliche: live online auf Englisch, mit festem Mentor. Dazu Altersregeln der App-Stores, Technik für Android Studio und ein Beispiel.',
  ogDescription: 'Jugendliche, die eine eigene App bauen wollen: was die App-Stores ab welchem Alter erlauben, welchen Rechner Android Studio braucht, warum man die Logik vor dem Bildschirm baut, und ein Live-Kurs auf Englisch.',
  twitterDescription: 'Eigene Apps bauen, live auf Englisch: Altersregeln der Stores, Technik und ein Karteikasten-Beispiel.',
  pageName: 'App entwickeln lernen für Jugendliche',
  webPageDescription: 'Ein Leitfaden für Jugendliche und Eltern in Deutschland zum App-Entwickeln: App-Nutzung laut JIM-Studie 2025, Altersregeln von Google Play und Apple, Systemanforderungen von Android Studio, MIT App Inventor als Einstieg und ein eigenes Python-Beispiel für die Logik einer Lern-App.',
  courseDescription: 'Live-Online-Kurse im App-Entwickeln für Jugendliche von 13 bis 18 Jahren in ganz Deutschland, ausschließlich auf Englisch: JavaScript und React Native, von der Idee bis zur fertigen App, in der Gruppe oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'App entwickeln für Jugendliche',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#konten', label: 'Konten' },
    { href: '#rechner', label: 'Rechner' },
    { href: '#beispiel', label: 'Beispiel' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Deutschland &middot; App-Entwicklung &middot; 13 bis 18 Jahre',
  h1: 'App entwickeln lernen für Jugendliche, live auf Englisch',
  lede: 'Fast jede und jeder Jugendliche hat ein Smartphone, und viele haben schon eine Idee für eine eigene App. Zwischen Idee und App liegen aber Fragen, die selten jemand beantwortet: Ab welchem Alter darf man überhaupt eine App veröffentlichen? Welcher Rechner reicht? Und womit fängt man an, damit das Projekt nicht nach zwei Wochen stecken bleibt? Diese Seite beantwortet sie mit den Regeln von Google und Apple und mit einem Beispiel, das zeigt, wie Profis eine App aufbauen: erst die Logik, dann der Bildschirm.',
  secondaryCta: { href: '#konten', label: 'Ab wann darf man veröffentlichen?' },
  wa: 'Hallo Modern Age Coders, ich möchte lernen, eigene Apps zu entwickeln, live auf Englisch. Kann ich eine kostenlose Probestunde machen?',
  heroNote: 'Live-Unterricht seit 2020 &middot; über 10.000 Lernende weltweit &middot; auf Englisch, mit einem eigenen Mentor',
  spec: [
    ['Alter', '13 bis 18, Klasse 7 bis 13'],
    ['Technik', 'JavaScript, React Native, später Datenbanken'],
    ['Geräte', 'Android und iPhone aus einem Code'],
    ['Gruppe', 'Fünfzehn bis zwanzig, oder Einzelunterricht'],
    ['Ergebnis', 'Eine eigene, fertige App'],
    ['Probestunde', 'Kostenlos']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Bei Modern Age Coders lernen Jugendliche von 13 bis 18, eigene Apps zu entwickeln: live online und auf Englisch, betreut von einem Mentor in Indien, der jede Woche derselbe bleibt und sich nach Ihrem Tempo und Ihrer Aussprache richtet. Mit JavaScript und React Native entsteht eine App für Android und iPhone, von der Idee über geprüfte Regeln bis zum fertigen Bildschirm. Wählbar sind fünfzehn bis zwanzig Mitlernende oder Einzelstunden.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Kurse für die erste eigene App',
    lede: 'Der App-Kurs selbst, die Sprache, auf der er aufbaut, und Python für alle, die zuerst sicher programmieren lernen möchten.',
    items: [
      { course: 'complete-app-development-masterclass-for-teens', code: 'AEL / 01', title: 'App-Entwicklung für Jugendliche', alt: 'Kursbild App-Entwicklung für Jugendliche', note: 'Für 13 bis 18, ohne Vorwissen. Mit React Native eine App für Android und iPhone bauen, mit Bildschirmen, Daten und Tests.' },
      { course: 'javascript-course-for-teens-beginners-interactive-web', code: 'AEL / 02', title: 'JavaScript für Jugendliche', alt: 'Kursbild JavaScript für Jugendliche', note: 'Ab 13. Die Sprache hinter React Native, zuerst an interaktiven Webseiten und kleinen Browserspielen geübt.' },
      { course: 'python-complete-masterclass-teens', code: 'AEL / 03', title: 'Python für Jugendliche', alt: 'Kursbild Python für Jugendliche', note: 'Ab 13. Für alle, die erst einmal Logik, Funktionen und Tests lernen wollen, bevor ein Bildschirm dazukommt.' }
    ]
  },

  sections: [
    {
      id: 'apps',
      eyebrow: 'Apps im Alltag',
      h2: 'Welche Apps nutzen Jugendliche in Deutschland am meisten?',
      lede: 'Vor allem Apps zum Schreiben und Teilen. Die JIM-Studie 2025 hat 1.200 Jugendliche zwischen 12 und 19 Jahren befragt: 95 Prozent besitzen ein eigenes Smartphone, und die App, die fast alle regelmäßig öffnen, ist ein Messenger.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Regelmäßig genutzte Apps der 12- bis 19-Jährigen, JIM-Studie 2025', head: ['App', 'Regelmäßige Nutzung', 'Was eine solche App im Kern tut'], rows: [
          ['WhatsApp', '96 Prozent', 'Nachrichten speichern, sortieren und zustellen'],
          ['Instagram', '63 Prozent', 'Bilder anzeigen, in eine Reihenfolge bringen'],
          ['Snapchat', '56 Prozent', 'Inhalte für eine begrenzte Zeit zeigen']
        ] },
        { kind: 'source', html: 'Quelle: mpfs, JIM-Studie 2025, Kapitel zu Apps und Smartphone. WhatsApp zählen laut Studie 84 Prozent zu ihren drei wichtigsten Apps. Die rechte Spalte ist unsere eigene, stark vereinfachte Beschreibung.' },
        { kind: 'p', mt: true, html: 'Die rechte Spalte ist der eigentliche Lernstoff. Hinter jeder dieser Apps steckt eine Logik, die man in wenigen Sätzen beschreiben kann: Was wird gespeichert, wann ändert es sich, was sieht die Person auf dem Bildschirm? Wer lernt, eine App so zu zerlegen, kann auch eine eigene planen. Ein Messenger ist für den Anfang zu groß; ein Vokabeltrainer, ein Hausaufgabenplaner oder ein Trainingstagebuch dagegen nicht.' }
      ]
    },
    {
      id: 'konten',
      eyebrow: 'Altersregeln der Stores',
      h2: 'Ab welchem Alter darf man eine App im App Store oder bei Google Play veröffentlichen?',
      lede: 'Programmieren darf man in jedem Alter, veröffentlichen ist eine andere Frage. Beide großen Stores verlangen ein Entwicklerkonto, und beide knüpfen es an die Volljährigkeit.',
      body: [
        { kind: 'table', numCols: [], caption: 'Entwicklerkonten bei Google und Apple, nach Angaben der Anbieter', head: ['Store', 'Altersregel', 'Gebühr'], rows: [
          ['Google Play (Play Console)', 'Mindestens 18 Jahre für die Anmeldung zu einem Play-Console-Konto', 'Einmalige Registrierungsgebühr'],
          ['Apple App Store (Apple Developer Program)', 'Unter der Volljährigkeit im eigenen Land kann ein Elternteil das Konto mit seiner Apple-ID anlegen und mit dem Kind teilen', 'Mitgliedsgebühr pro Mitgliedsjahr']
        ] },
        { kind: 'source', html: 'Quellen: Google, Play Console Help, "Get started with Play Console"; Apple, Seite "Enroll" des Apple Developer Program. Gelesen am 3. November 2026. Die aktuelle Höhe der Gebühren nennen die Anbieter selbst; wir geben keine Beträge an. Modern Age Coders ist weder mit Google noch mit Apple verbunden.' },
        { kind: 'two', mt: true,
          leftH3: 'Was das für Jugendliche heißt',
          left: [
            'Eine App bauen, auf dem eigenen Handy testen und Freunden zeigen kann man ohne Store-Konto. Erst die Veröffentlichung braucht ein Konto, und unter 18 läuft das über die Eltern: bei Apple ausdrücklich über deren Konto, bei Google erst ab 18 Jahren.',
            'Wir planen das im Kurs von Anfang an ein. Die Apps laufen über eine Test-App auf dem eigenen Smartphone, und ob und wann veröffentlicht wird, entscheidet die Familie.'
          ],
          rightH3: 'Zwei Store-Regeln, die die erste App prägen',
          right: [
            'Apples Richtlinie 4.2 verlangt, dass eine App Funktionen, Inhalte und eine Oberfläche bietet, die über eine umverpackte Webseite hinausgehen. Eine App, die nur eine Webseite anzeigt, hat also schlechte Chancen.',
            'Wer eine App für Kinder baut, muss Apples Abschnitt 1.3 kennen: Apps in der Kinder-Kategorie dürfen keine Links aus der App heraus, keine Kaufmöglichkeiten und keine anderen Ablenkungen enthalten, außer hinter einer Elternschranke.'
          ] }
      ]
    },
    {
      id: 'rechner',
      eyebrow: 'Technik zu Hause',
      h2: 'Welchen Rechner braucht man, um Apps zu entwickeln?',
      lede: 'Weniger, als viele befürchten, aber mehr als ein Tablet. Android Studio, die offizielle Entwicklungsumgebung von Google, nennt diese Mindestanforderungen:',
      body: [
        { kind: 'table', numCols: [], caption: 'Android Studio, Mindestanforderungen laut Google', head: ['Bereich', 'Mindestens', 'Hinweis'], rows: [
          ['Betriebssystem', '64-Bit Windows 10, oder macOS 12', 'Windows-Rechner mit ARM-Prozessor werden derzeit nicht unterstützt'],
          ['Arbeitsspeicher', '8 GB für Android Studio, 16 GB mit Emulator', 'Der Emulator simuliert ein Handy auf dem Rechner'],
          ['Speicherplatz', '8 GB frei für Android Studio', 'Mit Emulator deutlich mehr'],
          ['Bildschirm', '1280 x 800', 'Ein normaler Laptop reicht']
        ] },
        { kind: 'source', html: 'Quelle: Android Developers, "Install Android Studio", Abschnitt Systemanforderungen, gelesen am 3. November 2026.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Unser Weg im Kurs', p: 'Wir arbeiten mit React Native und testen auf dem eigenen Smartphone. Dafür reicht oft ein Laptop, der für Android Studio mit Emulator zu schwach wäre. Den Emulator brauchen wir nur in Ausnahmen.' },
          { h3: 'iPhone-Apps', p: 'Wer später eine iPhone-App selbst veröffentlichen möchte, braucht dafür in der Regel Apples Werkzeuge und ein Apple-Entwicklerkonto. Im Kurs testen wir iPhone-Apps über eine Test-App, ohne dass jede Familie einen Mac kaufen muss.' },
          { h3: 'Ohne Rechner?', p: 'Für die ersten Schritte gibt es MIT App Inventor, eine Umgebung mit Blöcken im Browser. Laut MIT haben über 24 Millionen Lernende aus 195 Ländern damit mehr als 100 Millionen Apps gebaut, und eine einfache App läuft nach weniger als 30 Minuten.' }
        ] },
        { kind: 'p', mt: true, html: 'Blöcke sind ein guter Anfang für Jüngere. Für Jugendliche ab 13 empfehlen wir meist den direkten Weg über JavaScript, weil man damit Webseiten und Apps mit derselben Sprache baut und die Grenzen der Blöcke nicht mehr im Weg sind.' }
      ]
    },
    {
      id: 'beispiel',
      tint: 'tint',
      eyebrow: 'Ein Beispiel aus dem Kurs',
      h2: 'Wie baut man eine App so, dass sie zuverlässig funktioniert?',
      lede: 'Erst die Logik, dann der Bildschirm. Das Beispiel ist unser eigenes: ein Vokabeltrainer nach dem Karteikasten-Prinzip. Jede Karte liegt in einem von fünf Fächern. Wer eine Vokabel weiß, schiebt die Karte ein Fach weiter; wer sie nicht weiß, legt sie zurück in Fach 1. Bevor es auch nur einen einzigen Knopf gibt, schreiben wir diese Regeln als Funktionen und testen sie.',
      body: [
        { kind: 'code', label: 'Die Regeln des Karteikastens, ganz ohne Bildschirm', lang: 'Python', code: PY, note: 'Ausgabe, von uns mit Python 3 ausgeführt: <code>alle Tests bestanden</code>, dann <code>Tag 1 -&gt; Fach 2</code>, <code>Tag 2 -&gt; Fach 3</code>, <code>Tag 4 -&gt; Fach 1</code>, <code>Tag 5 -&gt; Fach 2</code>. Wir zeigen die Logik in Python, weil sie dort am kürzesten ist; im Kurs schreiben wir dieselben Regeln in JavaScript.' },
        { kind: 'table', mt: true, numCols: [0, 1], caption: 'Wann eine Karte wieder drankommt (unsere Regel)', head: ['Fach', 'Alle wie viele Tage', 'Grund'], rows: [
          ['1', '1', 'neu oder vergessen, also jeden Tag'],
          ['2', '2', 'einmal gewusst'],
          ['3', '4', 'zweimal hintereinander gewusst'],
          ['4', '8', 'fast sicher'],
          ['5', '16', 'nur noch zur Kontrolle']
        ] },
        { kind: 'p', mt: true, html: 'Der zweite Test, <code>neues_fach(5, True) == 5</code>, ist der wichtigste. In einer ersten Fassung ohne <code>min</code> liefert die Funktion für eine gewusste Karte in Fach 5 eine 6, und der Test bricht mit einem <code>AssertionError</code> ab. In einer App mit Bildschirm hätte man diesen Fehler vielleicht erst nach Wochen bemerkt, wenn eine Karte in einem Fach landet, das es gar nicht gibt, und nie wieder auftaucht.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Regeln in Sätzen aufschreiben.</strong> "Gewusst heißt ein Fach weiter, höchstens bis Fach 5." Jeder Satz wird später eine Funktion.',
          '<strong>Für jede Regel einen Test.</strong> Besonders für die Ränder: das letzte Fach, das erste Fach, ein falscher Tipp ganz oben.',
          '<strong>Erst dann den Bildschirm.</strong> Der Knopf "Gewusst" ruft nur noch <code>neues_fach</code> auf. Die Oberfläche bleibt dünn, die Logik ist geprüft.',
          '<strong>Bei jeder Änderung alle Tests laufen lassen.</strong> So merkt man sofort, wenn eine neue Idee eine alte Regel kaputt macht.'
        ] }
      ]
    },
    {
      id: 'weg',
      eyebrow: 'Von der Idee zur App',
      h2: 'Wie lange dauert es, bis die erste eigene App fertig ist?',
      lede: 'Eine kleine App mit zwei, drei Bildschirmen schaffen die meisten bei uns in einigen Monaten. Unsere Schritte, mit groben Zeiträumen:',
      body: [
        { kind: 'table', numCols: [], caption: 'Von der Idee zur fertigen App (unser Plan)', head: ['Schritt', 'Etwa', 'Ergebnis'], rows: [
          ['1. Grundlagen in JavaScript', 'Monat 1 bis 2', 'Variablen, Funktionen, Listen und Objekte sitzen'],
          ['2. Die Idee klein schneiden', 'Monat 3', 'Eine Seite Text: Was speichert die App, welche Regeln gelten?'],
          ['3. Logik und Tests', 'Monat 3 bis 4', 'Alle Regeln als Funktionen, alle Tests grün'],
          ['4. Bildschirme bauen', 'Monat 4 bis 6', 'React-Native-Oberfläche auf dem eigenen Smartphone'],
          ['5. Daten speichern', 'Monat 6 bis 8', 'Die App merkt sich Inhalte auch nach dem Schließen'],
          ['6. Zeigen und verbessern', 'ab Monat 8', 'Freunde testen, Rückmeldungen fließen ein']
        ] },
        { kind: 'p', mt: true, html: 'Die meisten App-Projekte von Jugendlichen scheitern nicht am Programmieren, sondern daran, dass die Idee zu groß ist. Deshalb verbringt der Mentor mit Ihnen bewusst Zeit mit Schritt 2. Eine fertige kleine App ist mehr wert als eine halbe große.' }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Wann finden die App-Stunden statt?',
      lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
      body: [
        { kind: 'table', numCols: [], caption: 'Beispielzeiten, in Deutschland und beim Mentor in Indien', head: ['Uhrzeit in Deutschland', 'In Indien bis 27. März 2027', 'In Indien ab 28. März 2027'], rows: [
          ['14:15', '18:45', '17:45'],
          ['Freitag 16:20', '20:50', '19:50'],
          ['Sonntag 10:15', '14:45', '13:45']
        ] },
        { kind: 'source', html: 'Für Deutschland gilt nach dem Einheiten- und Zeitgesetz im Winter MEZ (UTC+1) und im Sommer MESZ (UTC+2); die Winterzeit läuft seit dem 25. Oktober 2026, die Sommerzeit kehrt am 28. März 2027 zurück. Indien hat durchgehend UTC+5:30 und liegt im Winter viereinhalb, im Sommer dreieinhalb Stunden vorn. Die Zeiten sind Beispiele, keine festen Gruppentermine.' },
        { kind: 'p', mt: true, html: 'Für längere Bauphasen eignet sich der Sonntagvormittag besonders, weil man ohne Schulstress an einem Bildschirm bleiben kann, bis er fertig ist.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Fünf Stufen zur eigenen App',
    lede: 'Unsere eigenen Stufen für Jugendliche, die Apps entwickeln lernen.',
    table: { caption: 'Fünf Stufen der App-Entwicklung (unsere)', head: ['Stufe', 'Ungefähr', 'Was Sie dann beherrschen'], rows: [
      ['1. Programmieren', 'erste zwei Monate', 'kleine Programme in JavaScript schreiben und lesen'],
      ['2. Planen', 'Monat drei', 'eine App-Idee in Daten und Regeln zerlegen'],
      ['3. Testen', 'bis Monat vier', 'Regeln als Funktionen schreiben und mit Tests absichern'],
      ['4. Gestalten', 'bis Monat sechs', 'Bildschirme bauen, die nur die geprüfte Logik aufrufen'],
      ['5. Fertigstellen', 'ab Monat acht', 'Daten speichern, Fehler beheben und die App anderen zeigen']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Eine Veröffentlichung im Store ist nicht das Ziel des Kurses, sondern eine mögliche Entscheidung der Familie danach. Unter 18 läuft sie über Ihr Konto.',
      'Nach den Stunden erfahren Sie kurz, an welchem Teil der App gearbeitet wurde.'
    ] },
    right: { h3: 'Für Jugendliche', ps: [
      'Schreiben Sie die Regeln Ihrer App zuerst als Sätze auf. Wenn ein Satz nicht passt, passt der Code auch nicht.',
      'Testen Sie immer das letzte Fach, den letzten Eintrag, den höchsten Wert. Dort brechen Apps am häufigsten.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse rund um Apps und Software',
    lede: 'Jeder davon läuft wie der App-Kurs: live, englischsprachig, mit einer festen Bezugsperson.',
    bands: [
      { num: 'I', h3: 'Web', sub: '10 bis 18 Jahre', courses: [
        { code: 'AEL / WEB / 01', slug: 'full-stack-web-development-teens-masterclass', title: 'Full-Stack-Webentwicklung', blurb: 'React und Node.js für Jugendliche.' },
        { code: 'AEL / WEB / 02', slug: 'html-css-course-for-beginners-build-real-websites', title: 'HTML und CSS', blurb: 'Gestaltung und Layout von Grund auf.' },
        { code: 'AEL / WEB / 03', slug: 'mysql-mastery-for-teens', title: 'Datenbanken für Jugendliche', blurb: 'Wo Apps ihre Daten ablegen.' }
      ] },
      { num: 'II', h3: 'Spiele und Gestaltung', sub: '13 bis 18 Jahre', courses: [
        { code: 'AEL / SPIEL / 01', slug: 'complete-game-development-masterclass-for-teens', title: 'Spieleentwicklung', blurb: 'Unity und C#, bis zum fertigen Spiel.' },
        { code: 'AEL / SPIEL / 02', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Godot', blurb: 'Spiele in 2D und 3D mit GDScript.' },
        { code: 'AEL / SPIEL / 03', slug: 'canva-ai-design-masterclass', title: 'Design mit Canva', blurb: 'Icons, Screens und Werbebilder ab 13.' }
      ] },
      { num: 'III', h3: 'Für später, ab 18', sub: 'ab 18 Jahren', courses: [
        { code: 'AEL / SPAETER / 01', slug: 'complete-flutter-app-development-masterclass-college', title: 'Flutter', blurb: 'Dart und plattformübergreifende Apps.' },
        { code: 'AEL / SPAETER / 02', slug: 'complete-kotlin-programming-masterclass-professional', title: 'Kotlin und Android', blurb: 'Native Android-Apps.' },
        { code: 'AEL / SPAETER / 03', slug: 'complete-swift-programming-masterclass-college', title: 'Swift und iOS', blurb: 'Native iPhone-Apps mit SwiftUI.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Ablauf',
    h2: 'So läuft der App-Kurs ab',
    lede: 'Pro Woche treffen Sie Ihren Mentor zweimal für sechzig Minuten live. Dazwischen arbeiten Sie an Ihrer eigenen App weiter, und in der nächsten Stunde wird gemeinsam geschaut, was funktioniert und was nicht.',
    slots: [
      { time: 'Nachmittags', l: 'Nach der Schule, an einem Wochentag.' },
      { time: 'Sonntag', l: 'Vormittags, für längere Bauphasen.' },
      { time: 'Einzeln', l: 'Zu einer festen Zeit nach Absprache.' }
    ],
    cells: [
      { h3: 'Eigene Idee', p: 'Ihre App, nicht ein Beispiel aus dem Buch.' },
      { h3: 'Logik zuerst', p: 'Regeln und Tests vor dem ersten Knopf.' },
      { h3: 'Am eigenen Handy', p: 'Testen über eine Test-App, ohne Store.' },
      { h3: 'Englisch', p: 'Die Sprache jeder Dokumentation, gleich mitgelernt.' },
      { h3: 'Ohne KI-Abkürzung', p: 'Der Code entsteht im eigenen Kopf.' },
      { h3: 'Allein oder zusammen', p: 'Eine Runde mit Gleichaltrigen oder Stunden nur für Sie.' }
    ]
  },

  projectsH2: 'Projekte von Lernenden',
  projectsLede: 'Apps, Spiele und Webseiten, die unsere Lernenden gebaut haben. Eine Auswahl unten, mehr auf <a class="ag-inline-link" href="/student-labs">Student labs</a> (auf Englisch).',
  reviewsLede: 'Google-Bewertungen von Eltern und Lernenden, im Original auf Englisch.',

  fees: {
    h2: 'Preise für Jugendliche in Deutschland',
    lede: 'Bezahlt wird monatlich, ein Monat umfasst acht Live-Stunden. Diese Seite zeigt die Beträge in Euro, umgerechnet mit dem Referenzkurs der Europäischen Zentralbank. Abgebucht wird in US-Dollar; die Bank rechnet um, daher sind kleine Abweichungen auf dem Kontoauszug möglich. Gebühren der App-Stores sind darin nicht enthalten und fallen nur an, wenn die Familie selbst veröffentlicht.',
    free: ['Eine kostenlose Probestunde', 'Gespräch über Ihre App-Idee', 'Keine Kartendaten nötig'],
    group: ['Fünfzehn bis zwanzig Jugendliche', 'Ein fester Mentor', 'Zwei Stunden pro Woche', 'Monatlich kündbar'],
    one: ['Sie und der Mentor allein', 'Ihre App, Ihr Tempo', 'Termine nach Absprache']
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    h2: 'App entwickeln lernen für Jugendliche: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein, unterrichtet wird live und ausschließlich auf Englisch. Wer Apps bauen will, profitiert davon doppelt: Programmieren und Englisch wachsen gemeinsam, und genau in dieser Sprache sind die Richtlinien von Apple und Google, die React-Native-Dokumentation und fast jede Fehlermeldung geschrieben. Ihr Mentor redet ruhig, wiederholt bei Bedarf und stellt sich auf Ihre Geschwindigkeit und Aussprache ein.' },
      { q: 'Ab welchem Alter kann man Apps entwickeln lernen?', a: 'Programmieren kann man in jedem Alter lernen; unser App-Kurs ist für 13 bis 18 Jahre gedacht. Für Jüngere gibt es Kurse mit Blöcken, und MIT App Inventor ist ebenfalls ein guter Einstieg.' },
      { q: 'Darf ich mit 15 eine App bei Google Play veröffentlichen?', a: 'Nicht mit einem eigenen Konto. Laut Google muss man mindestens 18 Jahre alt sein, um sich für ein Play-Console-Konto anzumelden. Bauen und auf dem eigenen Handy testen können Sie Ihre App trotzdem.' },
      { q: 'Und im App Store von Apple?', a: 'Laut Apple kann ein Elternteil das Entwicklerkonto mit seiner eigenen Apple-ID anlegen und mit Ihnen teilen, wenn Sie noch nicht volljährig sind. Die Entscheidung über eine Veröffentlichung liegt also bei der Familie.' },
      { q: 'Brauche ich einen teuren Rechner?', a: 'Nein. Android Studio verlangt laut Google mindestens 8 GB Arbeitsspeicher, mit Emulator 16 GB. Weil wir im Kurs auf dem eigenen Smartphone testen, reicht oft ein normaler Laptop. Windows-Rechner mit ARM-Prozessor werden von Android Studio derzeit nicht unterstützt.' },
      { q: 'Welche Programmiersprache lerne ich?', a: 'JavaScript und darauf aufbauend React Native. Damit entsteht aus einem Code eine App für Android und iPhone. Wer möchte, lernt vorher Python, um die Logik in Ruhe zu üben.' },
      { q: 'Wird die App mit KI generiert?', a: 'Nein. Jede Zeile Ihrer App tippen Sie selbst, und Sie können jede Regel darin erklären. KI-Dienste mit einer Altersgrenze von 18 Jahren gehören nicht in unseren Unterricht für Jugendliche.' },
      { q: 'Zu welchen Zeiten kann ich teilnehmen?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. Sonntag um 10:15 Uhr ist im Winter 14:45 Uhr beim Mentor in Indien.' },
      { q: 'Gibt es Gruppen?', a: 'Ja, mit fünfzehn bis zwanzig Jugendlichen. Wer an einer eigenen, größeren Idee arbeitet, wählt oft den Einzelunterricht.' },
      { q: 'Was kostet der Kurs, und wie wird bezahlt?', a: 'Pro Monat fällt eine Gebühr an, die wir hier in Euro nach dem EZB-Referenzkurs ausweisen; Ihr Konto wird in US-Dollar belastet, den Wechsel macht Ihre Bank. Gebühren für ein Entwicklerkonto bei Google oder Apple sind nicht enthalten. Die Probestunde ist kostenlos.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weitere Seiten',
    h2: 'Weiterlesen',
    lede: 'Noch mehr Lesestoff zu Informatik und Programmieren in Deutschland.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Alle Seiten für Deutschland.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Wenn das Schulfach Informatik drückt.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany', p: 'KI-Projekte für Jugendliche.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Think, not copy AI', p: 'Warum eigene Gedanken mehr zählen als fertige Antworten.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'So unterrichten wir live.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projekte unserer Lernenden.' }
    ]
  },

  start: {
    h2: 'Kostenlose Probestunde zur App-Idee',
    lede: 'Bringen Sie Ihre App-Idee mit. In der Probestunde schneiden wir sie gemeinsam auf eine Größe, die sich in einigen Monaten bauen lässt, und schreiben die erste Regel als Funktion.',
    readFirst: 'Zum Stöbern vorab: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> erklärt die Live-Stunden, <a class="ag-inline-link" href="/courses">All courses</a> enthält alle Lehrpläne (beide auf Englisch).',
    note: 'Die Mentoren sitzen in Indien und unterrichten live, ausschließlich auf Englisch. Per WhatsApp erreichen Sie uns am schnellsten.',
    formNote: 'Kostenlos und unverbindlich; unter 18 bitte mit Wissen der Eltern.'
  },

  footer: {
    cols: [
      { h4: 'Apps', links: [
        { href: '/courses/complete-app-development-masterclass-for-teens', label: 'App-Entwicklung' },
        { href: '/courses/javascript-course-for-teens-beginners-interactive-web', label: 'JavaScript' },
        { href: '/courses/python-complete-masterclass-teens', label: 'Python' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'KI in Deutschland' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Erst die Regeln, dann die Knöpfe'
  },

  personalityCss: `
.ag-root.ag-ael .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-ael .ag-capsule { border-left-width: 4px; border-radius: 6px; }
.ag-root.ag-ael .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-ael .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-ael .ag-code-head b { letter-spacing: 0.015em; }
`,

  dossier: {
    curriculumAuthority: 'mpfs JIM-Studie 2025; Google Play Console Help; Apple Developer Program enrolment page and App Store Review Guidelines; Android Developers system requirements; MIT App Inventor About page; Einheiten- und Zeitgesetz. Read 3 November 2026. Example code our own.',
    localProject: 'Logic before buttons: an original flashcard app core in Python with five boxes, written and tested without a screen; five asserts pass, one card moves Fach 2, 3, 1, 2 over four days, and a first version without min() fails the box-5 test with AssertionError. Run with python3 -I. Lesson family: keep an app\'s rules in plain functions you can test without any button.',
    requiredMentions: ['alle Tests bestanden', 'neues_fach(5, True) == 5', 'Die Regeln des Karteikastens, ganz ohne Bildschirm', 'Mindestens 18 Jahre für die Anmeldung zu einem Play-Console-Konto', '8 GB für Android Studio, 16 GB mit Emulator', 'Windows-Rechner mit ARM-Prozessor', 'über 24 Millionen Lernende aus 195 Ländern', 'Apples Richtlinie 4.2', 'Erst die Regeln, dann die Knöpfe'],
    sources: [
      { claim: 'Smartphone ownership 95 percent; regular use of WhatsApp 96, Instagram 63, Snapchat 56 percent.', url: 'https://mpfs.de/studie/jim-studie-2025/' },
      { claim: 'Play Console accounts require age 18; one-time registration fee.', url: 'https://support.google.com/googleplay/android-developer/answer/6112435?hl=en' },
      { claim: 'Under the age of majority a parent enrols and shares the Apple developer account.', url: 'https://developer.apple.com/programs/enroll/' },
      { claim: 'App Store Review Guidelines 1.3 Kids Category and 4.2 Minimum Functionality.', url: 'https://developer.apple.com/app-store/review/guidelines/' },
      { claim: 'Android Studio minimum system requirements.', url: 'https://developer.android.com/studio/install' },
      { claim: 'MIT App Inventor learners, countries, apps, 30 minutes to a first app.', url: 'https://appinventor.mit.edu/about-us' }
    ],
    rejectedClaims: [
      'German-language teaching: English only.',
      'Store fee amounts in dollars: not printed by rule; the stores state their own fees.',
      'Gender figures from the JIM-Studie: left out.',
      'Promising that a learner\'s app will be published or accepted: not made; publishing is the family\'s decision and the store\'s review.',
      'That a Mac is never needed for iPhone apps: not claimed; the page says publishing usually needs Apple\'s tools and account.'
    ]
  }
};
