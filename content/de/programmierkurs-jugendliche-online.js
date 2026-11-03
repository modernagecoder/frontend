'use strict';
// Programmierkurs für Jugendliche online (ag- German-language door, Germany cluster P3, row DE057, alloc code pju, accent #7B476F).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live in English only, matching the learner's pace and accent; the capsule says "auf Englisch".
// Formal "Sie" throughout (parents and teenagers alike). Pages show euro; checkout charges USD.
// Spine: an online course for teenagers judged by what it must do at home. (1) What 12- to 19-year-olds already do with AI
// (JIM-Studie 2025) and how German 16- to 19-year-olds compare with the EU on generative AI (Eurostat isoc_ai_iaiu, 2025);
// (2) what a teenager needs at home for a live online course (JIM device ownership); (3) the project competitions a course
// can lead to (Bundeswettbewerb Informatik, Jugend forscht, BWKI) with 2026/27 dates; (4) an original Python example about
// a loop that never stops; (5) live versus recorded courses; (6) times.
// Sources, raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/programmierkurs-jugendliche-online/ (fetched 2 and 3 Nov 2026):
//  mpfs JIM-Studie 2025 (JIM_2025.pdf via PDFKit; PM_JIM-2025.pdf), https://mpfs.de/studie/jim-studie-2025/ :
//   "Insgesamt berichten 91 Prozent der Befragten, generell mindestens eine KI-Anwendung einzusetzen (2024: 62 %)."
//   "74 Prozent der 12- bis 19-Jährigen nutzen KI-Anwendungen für Hausaufgaben oder zum Lernen (2024: 65 %)."
//   "Knapp über die Hälfte (52 %) gibt an, KI in der Schule bzw. im Unterricht einzusetzen." ; "(12 bis 15 Jahre: 39 %, 16 bis 19 Jahre: 63 %)".
//   "84 Prozent haben das Tool bereits verwendet" (ChatGPT); "Inzwischen arbeitet die Hälfte der Jugendlichen mindestens mehrmals pro Woche mit ChatGPT."
//   Devices: "Ein Tablet besitzen 63 Prozent, jeweils 46 Prozent haben ein eigenes Fernsehgerät (Smart-TV: 42 %), einen Laptop oder eine
//   feste Spielekonsole. Rund ein Drittel verfügt jeweils über einen Computer"; "Smartphone ... (95 %)"; Gymnasium "einen Laptop (49 %,
//   Haupt-/Realschule: 38 %)". "Zwei Drittel der Befragten (68 %) fällt es schwer, die eigene Bildschirmzeit zu regulieren."
//   Method: "1.200 Jugendliche im Alter von zwölf bis 19 Jahren im Zeitraum vom 2. Juni bis 12. Juli 2025".
//  Eurostat isoc_ai_iaiu (2025, percentage of individuals), API JSON: 16 to 19, used generative AI in the last 3 months: DE 51.52,
//   EU27 66.38; for formal education: DE 20.9, EU27 49.86; for private purposes: DE 43.06, EU27 43.3. Rounded by us to whole numbers.
//  BWINF: "Mitmachen beim Bundeswettbewerb Informatik dürfen Jugendliche bis 21 Jahre, die sich noch nicht im Studium oder einer
//   Berufstätigkeit befinden"; "1. Runde: 1. September bis 23. November 2026"; "In der 1. Runde ist Gruppenarbeit zugelassen und erwünscht."
//  Jugend forscht: "Jugendliche zwischen 15 und 21 Jahren starten in der Sparte Jugend forscht. Jüngere ... bis 14 Jahre treten bei
//   Jugend forscht junior an."; Fachgebiet "Mathematik/Informatik"; "November: Online-Anmeldung bis 30. November"; "Januar: Abgabe der
//   schriftlichen Ausarbeitung"; "Februar: ... Regionalwettbewerb"; "Mai: Abschluss der Runde mit dem Bundesfinale".
//  BWKI: "richtet sich an Schülerinnen und Schüler der Sekundarstufe I und II"; "eine schriftliche Dokumentation, einen lauffähigen
//   Code und einen Video-Pitch"; "Projekte dürfen sowohl auf deutscher wie auch auf englischer Sprache abgegeben werden.";
//   "13.11.2026 Finale in Tübingen"; run by the Tübingen AI Center.
//  Time: EinhZeitG; summer time ended 25 Oct 2026, begins 28 Mar 2027.
// Our own: akku_stunden with "while akku != 0": (100, 10) -> 10; (100, 7) -> "abgebrochen bei -250" after 50 steps.
// Fixed with "while akku > 0" and a guard: (100, 10) -> (10, 0); (100, 7) -> (15, -5); verbrauch 0 -> ValueError
// "verbrauch muss positiv sein" (python3 -I, 3 Nov 2026).
// Lesson family: a stop condition with != can be jumped over; stop with a comparison and make sure every step moves towards it.

const { DE } = require('../../scripts/nl/lib/market-de');

const PY_BUG = [
  'def akku_stunden(start, verbrauch, schritte_max=50):',
  '    akku = start',
  '    stunden = 0',
  '    while akku != 0:',
  '        akku = akku - verbrauch',
  '        stunden = stunden + 1',
  '        if stunden == schritte_max:',
  "            return 'abgebrochen bei ' + str(akku)",
  '    return stunden',
  '',
  'print(akku_stunden(100, 10))',
  'print(akku_stunden(100, 7))'
].join('\n');

const PY_FIX = [
  'def akku_stunden(start, verbrauch):',
  '    if verbrauch <= 0:',
  "        raise ValueError('verbrauch muss positiv sein')",
  '    akku = start',
  '    stunden = 0',
  '    while akku > 0:',
  '        akku = akku - verbrauch',
  '        stunden = stunden + 1',
  '    return stunden, akku',
  '',
  'print(akku_stunden(100, 10))',
  'print(akku_stunden(100, 7))',
  'try:',
  '    akku_stunden(100, 0)',
  'except ValueError as fehler:',
  '    print(fehler)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'Programmierkurs für Jugendliche online' },
  slug: 'programmierkurs-jugendliche-online',
  code: 'pju',
  accent: '#7B476F',
  accentRationale: 'Programmierkurs für Jugendliche online: a muted plum #7B476F, warmer and older than the blue of the ab-12 page, the colour of a teenager\'s hoodie rather than a school folder; contrast 5.73 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Programmierkurs für Jugendliche online (auf Englisch)',
  title: 'Programmierkurs für Jugendliche online, live auf Englisch',
  description: 'Programmierkurs für Jugendliche online: live auf Englisch mit festem Mentor, dazu was die JIM-Studie 2025 zeigt und welche Wettbewerbe 2026/27 offenstehen.',
  ogDescription: 'Ein Online-Programmierkurs für Jugendliche von 13 bis 18, live auf Englisch: wie 12- bis 19-Jährige KI heute nutzen, was man zu Hause braucht, welche Projektwettbewerbe passen, und eine Schleife, die nie aufhört.',
  twitterDescription: 'Programmierkurs für Jugendliche, live auf Englisch: KI-Nutzung laut JIM 2025, Ausstattung, Wettbewerbe 2026/27.',
  pageName: 'Programmierkurs für Jugendliche online',
  webPageDescription: 'Ein Leitfaden für Jugendliche und Eltern in Deutschland zum Online-Programmierkurs: KI-Nutzung der 12- bis 19-Jährigen nach der JIM-Studie 2025, Eurostat-Zahlen zu generativer KI bei 16- bis 19-Jährigen, die nötige Ausstattung, Projektwettbewerbe 2026/27 und ein eigenes Python-Beispiel.',
  courseDescription: 'Live-Online-Programmierkurse für Jugendliche von 13 bis 18 Jahren in ganz Deutschland, ausschließlich auf Englisch: Python, Web und KI-Projekte bis zur Wettbewerbsreife, in der Gruppe oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Programmierkurs Jugendliche',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#alltag', label: 'Alltag' },
    { href: '#technik', label: 'Technik' },
    { href: '#projekte', label: 'Projekte' },
    { href: '#beispiel', label: 'Beispiel' }
  ],
  eyebrow: 'Deutschland &middot; Programmierkurs &middot; 13 bis 18 Jahre',
  h1: 'Programmierkurs für Jugendliche online, live auf Englisch',
  lede: 'Fast alle Jugendlichen nutzen inzwischen KI, aber nur wenige wissen, wie die Programme dahinter gebaut sind. Ein guter Online-Programmierkurs schließt genau diese Lücke. Hier lesen Sie, was die JIM-Studie 2025 über 12- bis 19-Jährige herausgefunden hat, welche Technik zu Hause wirklich nötig ist, zu welchen Projektwettbewerben ein Kurs führen kann und warum eine Schleife manchmal einfach nicht aufhört.',
  secondaryCta: { href: '#projekte', label: 'Wettbewerbe 2026/27' },
  wa: 'Hallo Modern Age Coders, ich interessiere mich für einen Online-Programmierkurs für Jugendliche, live auf Englisch. Kann ich eine kostenlose Probestunde buchen?',
  heroNote: 'Live-Unterricht seit 2020 &middot; mehr als 10.000 Lernende in vielen Ländern &middot; auf Englisch, mit einem Mentor für Sie',
  spec: [
    ['Alter', '13 bis 18, Klasse 7 bis 13'],
    ['Sprachen', 'Python, JavaScript, Java'],
    ['Format', 'Live per Video, nichts vorab aufgezeichnet'],
    ['Gruppe', 'Fünfzehn bis zwanzig, oder Einzelunterricht'],
    ['Ziele', 'Eigene Projekte, Schule, Wettbewerbe'],
    ['Probestunde', 'Kostenlos, ohne Verpflichtung']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Der Programmierkurs für Jugendliche von Modern Age Coders ist ein Live-Kurs online, auf Englisch, für 13- bis 18-Jährige in ganz Deutschland. Ein fester Mentor aus Indien passt Tempo und Aussprache an. Sie lernen Python, dann Web oder Java, und bauen eigene Projekte bis zur Reife für Wettbewerbe wie Jugend forscht oder den Bundeswettbewerb Künstliche Intelligenz. Wählbar sind eine Gruppe von fünfzehn bis zwanzig Jugendlichen oder Einzelunterricht.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Kurse, mit denen Jugendliche online starten',
    lede: 'Python als Grundlage, das Web als erstes großes Projektfeld und künstliche Intelligenz für alle, die ein eigenes Modell trainieren wollen.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'PJU / 01', title: 'Python für Jugendliche', alt: 'Kursbild Python für Jugendliche', note: 'Von 13 bis 18, ohne Vorkenntnisse. Variablen bis Klassen, Dateien und Daten, mit einem eigenen Projekt am Ende jedes Abschnitts.' },
      { course: 'full-stack-web-development-teens-masterclass', code: 'PJU / 02', title: 'Full-Stack-Webentwicklung', alt: 'Kursbild Full-Stack-Webentwicklung für Jugendliche', note: 'Für Jugendliche mit ersten Programmiererfahrungen. Eine Webanwendung mit React und Node.js bauen, vom Formular bis zur Datenbank.' },
      { course: 'ai-ml-masterclass-teens', code: 'PJU / 03', title: 'KI und maschinelles Lernen', alt: 'Kursbild KI und maschinelles Lernen für Jugendliche', note: 'Mit Python-Grundlagen. Eigene Modelle trainieren und prüfen, die Art Projekt, die beim Bundeswettbewerb Künstliche Intelligenz verlangt wird.' }
    ]
  },

  sections: [
    {
      id: 'alltag',
      eyebrow: 'KI im Alltag',
      h2: 'Wie viele Jugendliche nutzen KI schon für die Schule?',
      lede: 'Die Mehrheit. Für die JIM-Studie 2025 wurden zwischen dem 2. Juni und dem 12. Juli 2025 insgesamt 1.200 Jugendliche im Alter von 12 bis 19 Jahren befragt, herausgegeben vom mpfs in Stuttgart. 91 Prozent setzen mindestens eine KI-Anwendung ein, 2024 waren es 62 Prozent.',
      body: [
        { kind: 'table', numCols: [1, 2], caption: 'Wofür 12- bis 19-Jährige KI nutzen, JIM-Studie 2025', head: ['Zweck', '2025', '2024'], rows: [
          ['Hausaufgaben oder Lernen', '74 Prozent', '65 Prozent'],
          ['Informationssuche', '70 Prozent', '43 Prozent'],
          ['Herausfinden, wie etwas geht', '54 Prozent', 'damals 19 Punkte weniger'],
          ['In der Schule oder im Unterricht', '52 Prozent', 'nicht verglichen'],
          ['Nur zum Spaß', '47 Prozent', '5 Punkte mehr']
        ] },
        { kind: 'source', html: 'Zahlen aus dem KI-Kapitel der JIM-Studie 2025 (mpfs), Basis: Befragte, die ChatGPT oder eine andere KI-Anwendung genutzt haben. Die Frage zu Hausaufgaben wurde 2025 leicht anders gestellt als 2024.' },
        { kind: 'p', mt: true, html: 'Beim Einsatz im Unterricht ist der Abstand zwischen jüngeren und älteren Jugendlichen groß: Laut JIM-Studie 2025 nutzen 39 Prozent der 12- bis 15-Jährigen KI in der Schule, bei den 16- bis 19-Jährigen sind es 63 Prozent. ChatGPT haben 84 Prozent schon verwendet, und die Hälfte arbeitet mindestens mehrmals pro Woche damit.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Generative KI bei 16- bis 19-Jährigen, Deutschland und EU, 2025', head: ['In den letzten drei Monaten genutzt', 'Deutschland', 'EU-27'], rows: [
          ['überhaupt', '52 Prozent', '66 Prozent'],
          ['für private Zwecke', '43 Prozent', '43 Prozent'],
          ['für Schule, Ausbildung oder Studium', '21 Prozent', '50 Prozent']
        ] },
        { kind: 'source', html: 'Quelle: Eurostat, Datensatz isoc_ai_iaiu (Nutzung generativer KI-Werkzeuge), Jahr 2025, Anteil an allen Personen der Altersgruppe, abgerufen am 3. November 2026. Auf ganze Zahlen gerundet von uns. Eurostat fragt ab 16 Jahren, die JIM-Studie schon ab 12; die beiden Erhebungen messen also verschiedene Gruppen mit verschiedenen Fragen.' },
        { kind: 'p', mt: true, html: 'Auffällig ist die letzte Zeile: Für Schule und Ausbildung nutzen in Deutschland laut Eurostat nur gut ein Fünftel der 16- bis 19-Jährigen generative KI, im EU-Schnitt ist es die Hälfte. Für einen Programmierkurs heißt das vor allem eines: Wer versteht, wie solche Werkzeuge funktionieren und wo sie Fehler machen, kann sie später bewusst einsetzen statt blind. In unseren Kursen für unter 18-Jährige schreiben die Jugendlichen ihren Code selbst; KI ist Gegenstand des Unterrichts, nicht Ersatz für das eigene Denken.' }
      ]
    },
    {
      id: 'technik',
      eyebrow: 'Ausstattung',
      h2: 'Was braucht man zu Hause für einen Online-Programmierkurs?',
      lede: 'Einen Rechner mit Tastatur, und das ist für viele Jugendliche die eigentliche Hürde. Laut JIM-Studie 2025 haben fast alle ein Smartphone, aber längst nicht alle einen eigenen Laptop.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Eigene Geräte der 12- bis 19-Jährigen, JIM-Studie 2025', head: ['Gerät', 'Anteil mit eigenem Gerät', 'Für den Kurs'], rows: [
          ['Smartphone', '95 Prozent', 'Gut für WhatsApp mit dem Mentor, nicht zum Programmieren'],
          ['Tablet', '63 Prozent', 'Reicht für Blöcke, mühsam für Python'],
          ['Laptop', '46 Prozent', 'Ideal'],
          ['Computer (Desktop)', 'rund ein Drittel', 'Ideal, mit Headset']
        ] },
        { kind: 'source', html: 'Quelle: mpfs, JIM-Studie 2025, Kapitel Medienausstattung, Basis: alle Befragten, n = 1.200. Laut Studie haben Jugendliche am Gymnasium häufiger einen eigenen Laptop (49 Prozent) als an Haupt- und Realschulen (38 Prozent). Die Bewertung in der rechten Spalte stammt von uns.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Der Rechner', p: 'Ein gewöhnlicher Laptop der letzten Jahre genügt, Windows, macOS oder Linux. Python und ein Editor laufen auch auf älteren Geräten. Wer keinen eigenen hat, kann den Familienrechner nutzen, wenn er zur Kurszeit frei ist.' },
          { h3: 'Die Verbindung', p: 'Für Video und geteilten Bildschirm reicht ein normaler Haushaltsanschluss. Wichtiger als die Geschwindigkeit ist ein ruhiger Platz, an dem man eine Stunde lang ungestört sprechen kann.' },
          { h3: 'Das Konto', p: 'Für die Kurse braucht man keine Konten bei KI-Diensten. Was wir installieren, ist kostenlos: Python, ein Code-Editor und ein Browser. Eltern erfahren vorher, was auf dem Rechner landet.' }
        ] }
      ]
    },
    {
      id: 'projekte',
      eyebrow: 'Wettbewerbe 2026/27',
      h2: 'Zu welchen Wettbewerben kann ein Programmierkurs führen?',
      lede: 'Drei bundesweite Wettbewerbe belohnen genau das, was in einem guten Kurs entsteht: eigene Programme und Projekte. Modern Age Coders ist mit keinem der Veranstalter verbunden; wir helfen beim Lernen, die Anmeldung und die Arbeit liegen bei den Jugendlichen selbst.',
      body: [
        { kind: 'table', numCols: [], caption: 'Drei Projektwettbewerbe für Jugendliche, nach Angaben der Veranstalter', head: ['Wettbewerb', 'Wer darf mitmachen', 'Termine 2026/27', 'Was man abgibt'], rows: [
          ['Bundeswettbewerb Informatik (BWINF)', 'Jugendliche bis 21 Jahre, die noch nicht studieren oder berufstätig sind', '1. Runde vom 1. September bis 23. November 2026', 'Lösungen zu Aufgaben; in Runde 1 ist Gruppenarbeit erwünscht'],
          ['Jugend forscht, Fachgebiet Mathematik/Informatik', '15 bis 21 Jahre (bis 14 bei Jugend forscht junior)', 'Online-Anmeldung bis 30. November, schriftliche Arbeit im Januar, Regionalwettbewerb im Februar, Bundesfinale im Mai', 'Ein eigenes Forschungsprojekt mit Ausarbeitung'],
          ['Bundeswettbewerb Künstliche Intelligenz (BWKI)', 'Schülerinnen und Schüler der Sekundarstufe I und II', 'Finale 2026 am 13. November 2026 in Tübingen', 'Dokumentation, lauffähiger Code und ein Video-Pitch']
        ] },
        { kind: 'source', html: 'Quellen: Bundesweite Informatikwettbewerbe, Seite zum Bundeswettbewerb Informatik; Stiftung Jugend forscht, Seiten zu Alterssparten und zum Ablauf; Bundeswettbewerb Künstliche Intelligenz des Tübingen AI Center, Startseite und Teilnahmebedingungen. Alle gelesen am 2. November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'Ein Vorteil für Englisch-Lernende',
          left: [
            'Beim BWKI dürfen Projekte laut Teilnahmebedingungen auf Deutsch oder auf Englisch abgegeben werden. Wer seinen Code ohnehin auf Englisch kommentiert und mit dem Mentor auf Englisch bespricht, kann die Dokumentation gleich in dieser Sprache schreiben.',
            'Auch sonst gilt: Fehlermeldungen, Dokumentationen und Foren zum Programmieren sind fast immer englisch. Ein Kurs auf Englisch übt also das, was man beim eigenen Projekt sowieso braucht.'
          ],
          rightH3: 'Wie wir vorbereiten',
          right: [
            'Wir lösen keine Wettbewerbsaufgaben für die Teilnehmenden und verwenden im Unterricht keine Originalaufgaben. Wir üben mit eigenen Aufgaben, die dieselben Fähigkeiten trainieren: ein Problem zerlegen, sauber testen, verständlich dokumentieren.',
            'Für Jugend forscht und den BWKI hilft der Mentor, eine Idee auf eine machbare Größe zu bringen und einen Zeitplan rückwärts vom Abgabetermin zu planen. Die Arbeit selbst bleibt die der Jugendlichen.'
          ] }
      ]
    },
    {
      id: 'beispiel',
      tint: 'tint',
      eyebrow: 'Ein Beispiel aus dem Kurs',
      h2: 'Warum hört diese Python-Schleife nie auf?',
      lede: 'Weil ihre Bedingung übersprungen werden kann. Das folgende Beispiel ist unser eigenes: Ein Programm soll ausrechnen, wie viele Stunden ein Handy-Akku hält, wenn er pro Stunde um einen festen Wert sinkt. Mit 10 Prozent pro Stunde klappt es, mit 7 Prozent läuft die Schleife ewig.',
      body: [
        { kind: 'code', label: 'Version 1: mit != als Abbruchbedingung', lang: 'Python', code: PY_BUG, note: 'Ausgabe, von uns mit Python 3 ausgeführt: <code>10</code>, dann <code>abgebrochen bei -250</code>. Die Notbremse <code>schritte_max</code> haben wir nur eingebaut, damit das Programm überhaupt endet.' },
        { kind: 'table', mt: true, numCols: [0, 1, 2], caption: 'Was mit verbrauch = 7 passiert', head: ['Stunde', 'akku vorher', 'akku nachher', 'akku != 0?'], rows: [
          ['13', '16', '9', 'ja, weiter'],
          ['14', '9', '2', 'ja, weiter'],
          ['15', '2', '-5', 'ja, weiter'],
          ['16', '-5', '-12', 'ja, weiter, für immer']
        ] },
        { kind: 'p', mt: true, html: 'Der Akku springt von 2 direkt auf -5. Die Null wird nie genau getroffen, also ist <code>akku != 0</code> immer wahr. Mit 10 Prozent pro Stunde fällt das nicht auf, weil 100 zufällig durch 10 teilbar ist. Genau solche Fehler sind tückisch: Das Programm besteht den ersten Test und scheitert beim zweiten.' },
        { kind: 'code', label: 'Version 2: mit > 0 und einer Schutzabfrage', lang: 'Python', code: PY_FIX, note: 'Ausgabe: <code>(10, 0)</code>, dann <code>(15, -5)</code>, dann <code>verbrauch muss positiv sein</code>. Nach 15 Stunden ist der Akku leer; die -5 zeigt, dass die letzte Stunde nicht mehr voll war. Beide Versionen haben wir selbst ausgeführt.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Mit einem Vergleich abbrechen.</strong> <code>&gt; 0</code> oder <code>&lt;= 0</code> fängt auch Werte ab, die über die Grenze springen. <code>!=</code> fängt nur einen einzigen Wert.',
          '<strong>Prüfen, ob jeder Schritt zum Ziel führt.</strong> Mit <code>verbrauch = 0</code> würde auch Version 2 ewig laufen, deshalb die Schutzabfrage am Anfang.',
          '<strong>Mit einem unbequemen Wert testen.</strong> Eine Zahl wie 7, die nicht glatt aufgeht, findet mehr Fehler als die bequeme 10.'
        ] }
      ]
    },
    {
      id: 'live',
      eyebrow: 'Live oder Video',
      h2: 'Lernen Jugendliche online live besser als mit Videokursen?',
      lede: 'Für die meisten ja, aus einem einfachen Grund: Ein Video beantwortet keine Fragen. Dazu kommt, was die JIM-Studie 2025 über Selbstkontrolle zeigt: Zwei Drittel der Befragten, 68 Prozent, fällt es schwer, die eigene Bildschirmzeit zu regulieren. Ein fester Termin mit einem Menschen, der wartet, hilft dabei mehr als ein Kurs, den man jederzeit anfangen könnte.',
      body: [
        { kind: 'table', numCols: [], caption: 'Live-Kurs und Videokurs im Vergleich (unsere Einschätzung)', head: ['', 'Live mit Mentor', 'Aufgezeichneter Videokurs'], rows: [
          ['Wenn etwas nicht läuft', 'Der Mentor sieht den Bildschirm und fragt nach', 'Man sucht allein oder gibt auf'],
          ['Tempo', 'Passt sich der Person an', 'Für alle gleich'],
          ['Verbindlichkeit', 'Fester Termin jede Woche', 'Hängt allein von der eigenen Disziplin ab'],
          ['Eigene Projekte', 'Werden besprochen und verbessert', 'Meist nur nachgebaute Beispiele'],
          ['Englisch', 'Gesprochen, mit Rückfragen', 'Nur zuhören']
        ] },
        { kind: 'p', mt: true, html: 'Bei uns ist nichts vorab aufgezeichnet. Jede Stunde ist ein Gespräch mit Bildschirmfreigabe: Die Jugendlichen teilen ihren Code, der Mentor stellt Fragen, statt die Lösung zu diktieren, und am Ende steht ein Programm, das sie selbst erklären können.' }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Wann findet der Kurs statt?',
      lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
      body: [
        { kind: 'table', numCols: [], caption: 'Mögliche Zeiten in deutscher und indischer Zeit', head: ['Deutschland', 'Indien im Winter (bis 27. März 2027)', 'Indien im Sommer (ab 28. März 2027)'], rows: [
          ['Mittwoch 13:30', '18:00', '17:00'],
          ['17:15', '21:45', '20:45'],
          ['Sonntag 10:00', '14:30', '13:30']
        ] },
        { kind: 'source', html: 'Nach dem Einheiten- und Zeitgesetz gilt in Deutschland im Winter MEZ (UTC+1), im Sommer MESZ (UTC+2). Am 25. Oktober 2026 ging die Sommerzeit zu Ende, am 28. März 2027 beginnt sie neu. Indien bleibt ganzjährig bei UTC+5:30, ist also im Winter viereinhalb und im Sommer dreieinhalb Stunden voraus. Die Zeilen sind Beispiele; feste Gruppentermine gibt es nicht.' },
        { kind: 'p', mt: true, html: 'In der Oberstufe mit Nachmittagsunterricht wählen viele Jugendliche den Sonntagvormittag oder einen freien Nachmittag mitten in der Woche. In Klausurphasen lässt sich ein Termin verschieben, wenn Sie es rechtzeitig sagen.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Lernweg',
    h2: 'Vom ersten Programm zum Wettbewerbsprojekt',
    lede: 'Unsere eigenen Stufen für Jugendliche, die online bei uns lernen.',
    table: { caption: 'Fünf Stufen für Jugendliche (unsere)', head: ['Stufe', 'Typischer Zeitraum', 'Sie können'], rows: [
      ['1. Grundlagen', 'erste zwei Monate', 'Variablen, Bedingungen und Schleifen sicher einsetzen'],
      ['2. Fehler finden', 'bis Monat vier', 'Fehlermeldungen lesen und Abbruchbedingungen prüfen'],
      ['3. Strukturieren', 'bis Monat sechs', 'Programme in Funktionen und Dateien gliedern'],
      ['4. Eigenes Projekt', 'bis Monat zehn', 'eine Idee planen, bauen, testen und vorstellen'],
      ['5. Wettbewerbsreif', 'ab etwa einem Jahr', 'ein Projekt dokumentieren, wie es BWKI oder Jugend forscht verlangen']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Sie sehen nach den Stunden kurz, woran gearbeitet wurde. Bei Jugendlichen ab 16 besprechen wir mit Ihnen gemeinsam, wie viel davon sie selbst berichten möchten.',
      'Wer bei Stufe 2 hängen bleibt, ist nicht schlecht, sondern genau an der Stelle, an der echtes Programmieren beginnt.'
    ] },
    right: { h3: 'Für Jugendliche', ps: [
      'Testen Sie Ihr Programm mit einem Wert, der nicht glatt aufgeht. Die bequeme Zahl verrät Fehler am seltensten.',
      'Schreiben Sie beim eigenen Projekt jede Woche drei Sätze dazu, was Sie gemacht haben. Daraus wird später die Dokumentation.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse für Jugendliche',
    lede: 'Alle live online, auf Englisch, mit einem festen Mentor, in der Gruppe oder einzeln.',
    bands: [
      { num: 'I', h3: 'Weitere Sprachen', sub: '13 bis 18 Jahre', courses: [
        { code: 'PJU / SPRACHE / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java für Jugendliche', blurb: 'Objekte und Klassen, wie in vielen Oberstufen.' },
        { code: 'PJU / SPRACHE / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript für Jugendliche', blurb: 'Interaktive Seiten und Spiele im Browser.' },
        { code: 'PJU / SPRACHE / 03', slug: 'complete-game-development-masterclass-for-teens', title: 'Spieleentwicklung', blurb: 'Unity und C# bis zum fertigen Spiel.' }
      ] },
      { num: 'II', h3: 'Projekte und Wettbewerbe', sub: '13 bis 19 Jahre', courses: [
        { code: 'PJU / PROJEKT / 01', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatik-Wettbewerbe', blurb: 'Eigene Übungen für BWINF und BWKI.' },
        { code: 'PJU / PROJEKT / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data Science', blurb: 'Daten auswerten und erste Modelle, ab 14.' },
        { code: 'PJU / PROJEKT / 03', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon-Vorbereitung', blurb: 'Im Team unter Zeitdruck bauen, 13 bis 17.' }
      ] },
      { num: 'III', h3: 'Schule und Oberstufe', sub: '15 bis 19 Jahre', courses: [
        { code: 'PJU / SCHULE / 01', slug: 'informatik-abitur-course-java-python', title: 'Informatik Oberstufe und Abitur', blurb: 'Java oder Python, Aufgaben auf Papier.' },
        { code: 'PJU / SCHULE / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithmen und Datenstrukturen', blurb: 'Listen, Bäume, Suchen und Sortieren.' },
        { code: 'PJU / SCHULE / 03', slug: 'competitive-programming-for-teens-course', title: 'Wettbewerbsprogrammierung', blurb: 'Für alle, die schneller lösen wollen.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Kursablauf',
    h2: 'Wie der Online-Kurs aufgebaut ist',
    lede: 'Pro Woche zwei Live-Termine zu je einer Stunde mit demselben Mentor, dazwischen eine kleine Aufgabe für zu Hause, die in der nächsten Stunde besprochen wird.',
    slots: [
      { time: 'Mitte der Woche', l: 'Ein freier Nachmittag, auch mit Oberstufen-Stundenplan.' },
      { time: 'Sonntag', l: 'Vormittags, mit Zeit für längere Projekte.' },
      { time: 'Einzeln', l: 'Feste Zeit nach Absprache, auch vor Abgabeterminen.' }
    ],
    cells: [
      { h3: 'Bildschirm teilen', p: 'Der Mentor sieht Ihren Code und fragt nach.' },
      { h3: 'Englisch sprechen', p: 'Fachbegriffe werden erklärt, nicht vorausgesetzt.' },
      { h3: 'Eigener Code', p: 'Kein Kopieren, auch nicht aus einer KI.' },
      { h3: 'Aufgabe der Woche', p: 'Klein genug für einen Nachmittag.' },
      { h3: 'Projektplan', p: 'Rückwärts geplant vom eigenen Ziel.' },
      { h3: 'Gruppe oder allein', p: 'Fünfzehn bis zwanzig Jugendliche oder Einzelunterricht.' }
    ]
  },

  projectsH2: 'Projekte von Jugendlichen',
  projectsLede: 'Was nach einigen Monaten entsteht: Spiele, Webanwendungen und kleine KI-Modelle. Eine Auswahl unten, weitere auf <a class="ag-inline-link" href="/student-labs">Student labs</a> (auf Englisch).',
  reviewsLede: 'Was Eltern und Lernende bei Google schreiben, unübersetzt im englischen Original.',

  fees: {
    h2: 'Preise für Jugendliche in Deutschland',
    lede: 'Abgerechnet wird pro Monat, und jeder Monat umfasst acht Live-Stunden. Die Beträge auf dieser Seite stehen in Euro und beruhen auf dem Referenzkurs der Europäischen Zentralbank. Die Zahlung selbst läuft in US-Dollar; Ihre Bank wechselt den Betrag, sodass auf dem Kontoauszug eine kleine Abweichung möglich ist.',
    free: ['Eine kostenlose Probestunde', 'Gemeinsamer Blick auf Vorwissen und Ziele', 'Keine Kartendaten nötig'],
    group: ['Fünfzehn bis zwanzig Jugendliche ähnlichen Alters', 'Ein fester Mentor', 'Zwei Live-Stunden pro Woche', 'Monat für Monat kündbar'],
    one: ['Sie und Ihr Mentor allein', 'Eigenes Projekt, eigenes Tempo', 'Termine nach Wunsch']
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    h2: 'Programmierkurs für Jugendliche online: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein, der Kurs läuft live und nur auf Englisch. Für Jugendliche ist das ein doppelter Gewinn: Sie lernen Programmieren und trainieren nebenbei das Englisch, in dem Fehlermeldungen, Dokumentationen und Foren ohnehin geschrieben sind. Die Mentoren sprechen deutlich und passen sich an Tempo und Aussprache an.' },
      { q: 'Für welches Alter ist der Kurs gedacht?', a: 'Für Jugendliche von 13 bis 18 Jahren, also ungefähr Klasse 7 bis 13. Jüngere finden auf unserer Seite zum Programmieren ab 12 einen passenderen Einstieg, Volljährige wechseln in die Kurse für Erwachsene.' },
      { q: 'Braucht man Vorkenntnisse?', a: 'Nein. Der Python-Kurs beginnt ganz vorn. Wer schon programmiert hat, zeigt in der Probestunde, was er oder sie kann, und steigt passend ein.' },
      { q: 'Welche Programmiersprache lernt man zuerst?', a: 'Meistens Python, weil man damit schnell eigene Programme schreibt und weil es in Schule, Wissenschaft und KI weit verbreitet ist. Danach folgen je nach Ziel JavaScript für das Web oder Java für die Oberstufe.' },
      { q: 'Wird im Kurs mit ChatGPT oder anderen KI-Werkzeugen gearbeitet?', a: 'In unseren Kursen für unter 18-Jährige schreiben die Jugendlichen ihren Code selbst. Wir erklären, wie KI funktioniert und wo sie danebenliegt, empfehlen aber keine Werkzeuge, die erst ab 18 erlaubt sind. Für ChatGPT verlangt OpenAI unter 18 die Erlaubnis der Eltern.' },
      { q: 'Kann der Kurs auf Jugend forscht oder den BWKI vorbereiten?', a: 'Ja, als Lernbegleitung. Bei Jugend forscht startet man mit 15 bis 21 Jahren in der Sparte Jugend forscht, die Online-Anmeldung endet am 30. November. Beim BWKI gibt man Dokumentation, lauffähigen Code und einen Video-Pitch ab. Die Projekte bleiben die der Jugendlichen, und wir sind mit keinem Veranstalter verbunden.' },
      { q: 'Welche Technik braucht man?', a: 'Einen Laptop oder Computer mit Tastatur, eine stabile Internetverbindung und ein Headset. Ein Tablet allein reicht für Python kaum. Alle Programme, die wir verwenden, sind kostenlos.' },
      { q: 'Wann sind die Kurszeiten?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. Ein Termin am Sonntag um 10:00 Uhr ist im Winter 14:30 Uhr beim Mentor in Indien.' },
      { q: 'Gibt es Gruppen oder nur Einzelunterricht?', a: 'Beides. Die Gruppen haben fünfzehn bis zwanzig Jugendliche mit ähnlichem Stand. Im Einzelunterricht arbeitet der Mentor nur mit Ihnen, etwa an einem eigenen Projekt.' },
      { q: 'Wie wird bezahlt, und in welcher Währung?', a: 'Monatlich. Auf dieser Seite sind die Beträge in Euro zum Referenzkurs der EZB angegeben, belastet wird in US-Dollar, und Ihre Bank rechnet um. Die Probestunde ist kostenlos.' },
      { q: 'Bekommt man ein Zeugnis oder eine Note?', a: 'Nein. Wir vergeben keine Schulnoten und keine anerkannten Abschlüsse. Was am Ende zählt, sind die eigenen Programme und Projekte, die man vorzeigen und erklären kann.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weitere Seiten',
    h2: 'Weiterlesen',
    lede: 'Weitere Seiten für Jugendliche und Familien in Deutschland, teils auf Englisch.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Alle Seiten für Deutschland auf einen Blick.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Unterstützung im Schulfach Informatik.' },
      { href: '/abitur-computer-science-in-english', label: 'Abitur computer science', p: 'Informatik im Abitur, auf Englisch erklärt.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany', p: 'KI-Kurse für Jugendliche und Erwachsene.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Think, not copy AI', p: 'Selbst denken statt KI-Antworten abschreiben.' },
      { href: '/student-labs', label: 'Student labs', p: 'Was unsere Lernenden gebaut haben.' }
    ]
  },

  start: {
    h2: 'Kostenlose Probestunde ausmachen',
    lede: 'In der Probestunde schreiben Sie mit dem Mentor ein kleines Programm und sprechen über Ihr Ziel, ob Schule, eigenes Projekt oder Wettbewerb. Danach empfehlen wir Kurs und Format.',
    readFirst: 'Wer vorher stöbern möchte: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> beschreibt eine Live-Stunde, <a class="ag-inline-link" href="/courses">All courses</a> enthält jeden Lehrplan (beide auf Englisch).',
    note: 'Die Mentoren unterrichten live aus Indien, ausschließlich auf Englisch. Schnelle Fragen beantworten wir per WhatsApp.',
    formNote: 'Kostenlos und unverbindlich, auch für Jugendliche, die sich selbst anmelden; unter 18 bitte mit Wissen der Eltern.'
  },

  footer: {
    cols: [
      { h4: 'Für Jugendliche', links: [
        { href: '/courses/python-complete-masterclass-teens', label: 'Python für Jugendliche' },
        { href: '/courses/full-stack-web-development-teens-masterclass', label: 'Webentwicklung' },
        { href: '/courses/ai-ml-masterclass-teens', label: 'KI und ML' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/abitur-computer-science-in-english', label: 'Informatik-Abitur' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Mit einem Vergleich abbrechen, nie mit !='
  },

  personalityCss: `
.ag-root.ag-pju .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-pju .ag-capsule { border-left-width: 3px; border-radius: 2px; }
.ag-root.ag-pju .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-pju .ag-table caption { text-align: left; font-weight: 600; letter-spacing: 0.01em; }
.ag-root.ag-pju .ag-table td { hyphens: auto; }
`,

  dossier: {
    curriculumAuthority: 'mpfs JIM-Studie 2025; Eurostat isoc_ai_iaiu (2025); BWINF Bundeswettbewerb page; Stiftung Jugend forscht age and schedule pages; BWKI (Tübingen AI Center) home page and Teilnahmebedingungen; Einheiten- und Zeitgesetz. Read 2 and 3 November 2026. Example code our own.',
    localProject: 'A loop that never stops: an original Python battery model in which "while akku != 0" works for 10 percent per hour (10 hours) and runs past zero for 7 percent (aborted at -250 after 50 steps); fixed with "while akku > 0" and a guard, giving (10, 0), (15, -5) and a ValueError for 0. Lesson family: a stop condition with != can be jumped over.',
    requiredMentions: ['abgebrochen bei -250', '(15, -5)', 'verbrauch muss positiv sein', 'damals 19 Punkte weniger', 'für Schule, Ausbildung oder Studium', 'Datensatz isoc_ai_iaiu', 'Finale 2026 am 13. November 2026 in Tübingen', 'Reicht für Blöcke, mühsam für Python', 'Mit einem Vergleich abbrechen, nie mit !='],
    sources: [
      { claim: 'AI use by purpose among 12 to 19 year olds, ChatGPT use, device ownership, screen-time self-regulation, survey method.', url: 'https://mpfs.de/studie/jim-studie-2025/' },
      { claim: 'Generative AI use by 16 to 19 year olds, Germany and EU-27, 2025.', url: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/isoc_ai_iaiu' },
      { claim: 'Bundeswettbewerb Informatik age rule, round 1 dates, group work.', url: 'https://bwinf.de/bundeswettbewerb/' },
      { claim: 'Jugend forscht age groups and annual schedule.', url: 'https://www.jugend-forscht.de/teilnahme/ablauf/ablauf-auf-einen-blick.html' },
      { claim: 'BWKI eligibility, submission parts, German or English, 2026 final.', url: 'https://www.bw-ki.de/teilnahmebedingungen' }
    ],
    rejectedClaims: [
      'German-language teaching: English only, stated in the capsule and FAQ.',
      'Gender breakdowns from JIM and Eurostat: left out by rule.',
      'Recommending 18+ AI tools to under-18s: refused.',
      'Any claim that our students win competitions: none shown, none made.',
      'Adding JIM and Eurostat figures together: refused; they measure different groups with different questions.'
    ]
  }
};
