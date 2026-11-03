'use strict';
// Programmieren lernen für Kinder in München (ag- German-language city door, Germany cluster P5 row DE115, alloc code pmu,
// hubGroup stadt). Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; German pages
// say so in the capsule ("auf Englisch") and frame it as a benefit. Formal "Sie" throughout. Pages show euro; checkout USD.
// Angle (own spine, not a translation of the English Munich page): Münchner Eltern von Kindern zwischen 6 und 12; was die
// bayerische Schule Klasse für Klasse an Informatik bringt; warum Englisch hier ein Vorteil ist; ein Sonnenschein-Projekt
// mit den Stundenwerten der DWD-Station München-Stadt, bei dem Kinder mit einer Schleife ein Sternchen-Diagramm zeichnen;
// der Informatik-Biber direkt nach den Herbstferien.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/programmieren-lernen-kinder-muenchen/ and
// facts-school/src/, fetched 2 and 3 Nov 2026 with curl -sL -A "Mozilla/5.0"):
//  - km.bayern.de Grundschule: "Anfang Mai erhalten alle Schülerinnen und Schüler der 4. Klasse das Übertrittszeugnis.";
//    "Danach gibt es drei unmittelbare Anschlussmöglichkeiten: die Mittelschule, die Realschule oder das Gymnasium."
//  - GI Informatik-Monitor 2026/27, Bayern: Mittelschule 5 to 10 "je einer Wochenstunde"; Wahlfach "Informatik und
//    digitales Gestalten in den Jahrgangsstufe 7 bis 10 zweistündig"; Realschule Informationstechnologie 5 to 10; Gymnasium
//    Natur und Technik, grades 6 and 7, "Schwerpunkt Informatik"; grade 11 two hours in every branch; "Die Grundschule
//    umfasst die Jahrgangsstufen 1 bis 4".
//  - km.bayern.de Realschule: "Ab dem Prüfungstermin 2025 können alle Realschulen eine Abschlussprüfung im Fach
//    Informationstechnologie anbieten. Die Teilnahme ist für interessierte Schülerinnen und Schüler freiwillig."
//  - bwinf.de Biber (FACTS.md 129 to 136): kostenfrei, Klassen 3 bis 13, keine Vorkenntnisse; 9 Aufgaben in 30 Minuten
//    (Grundschule), 12 in 35 (Klasse 5 und 6), 15 in 40 (ab Klasse 7); Biberwochen 9. bis 20. November 2026; Ergebnisse
//    Dezember 2026, Urkunden Januar 2027; Schnupper-Biber ab 14. September 2026.
//  - KMK Ferien 2026/2027, Bayern row: Herbst 02.11. - 06.11., Weihnachten 24.12. - 08.01., 08.02. - 12.02., Ostern
//    22.03. - 02.04., Pfingsten 18.05. - 28.05., Sommer 02.08. - 13.09.
//  - Destatis GV-ISys 31.12.2024: München 1,505,005. EinhZeitG para 4; summer time 2027 from 28 March.
//  - Data: Deutscher Wetterdienst, Climate Data Center, hourly sunshine duration (stundenwerte_SD_03379_19850101_20251231_
//    hist.zip, produkt_sd_stunde_19850101_20251231_03379.txt, column SD_SO), station 3379 München-Stadt; licence CC BY 4.0
//    (Terms_of_use.pdf). Metadaten_Parameter: "Stundenwerte in UTC" for data from 01.04.2001. Metadaten_Fehldaten: SD_SO
//    gaps "22.04.2025-13:00;25.04.2025-11:00;53" and "09.09.2025-06:00;09.09.2025-20:00;15". 2025 rows: 6,502, hours
//    03 to 20 UTC only.
// Our own calculations (scratchpad de/w/C2/pmu, python3 -I): sterne.py prints one line per month, from "Jan ********** 100"
// to "Dez ****** 67", with Jun 309 the longest bar and Jul 202; halbjahr.py (run after it) prints "April bis September:
// 1406 Stunden", "Oktober bis März: 659 Stunden", "Verhältnis: 2.1". Sum over the hourly file 2066.4 h.
// Lesson family: drawing a chart from text, a loop that repeats a character.

const { DE: DE_DE } = require('../../scripts/nl/lib/market-de');

const STERNE = [
  'import csv',
  '',
  'MONATE = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun",',
  '          "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]',
  'minuten = [0] * 12',
  '',
  'with open("sonne_2025.csv", encoding="utf-8") as f:',
  '    for zeile in csv.DictReader(f):',
  '        monat = int(zeile["zeit_utc"][5:7])',
  '        minuten[monat - 1] += int(zeile["minuten"])',
  '',
  'for i in range(12):',
  '    stunden = minuten[i] // 60',
  '    print(MONATE[i], "*" * (stunden // 10), stunden)'
].join('\n');

const HALBJAHR = [
  'sommer = sum(minuten[3:9]) // 60',
  'winter = (sum(minuten[0:3]) + sum(minuten[9:12])) // 60',
  'print("April bis September:", sommer, "Stunden")',
  'print("Oktober bis März:", winter, "Stunden")',
  'print("Verhältnis:", round(sommer / winter, 1))'
].join('\n');

const AUSGABE = [
  'Jan ********** 100',
  'Feb ********** 102',
  'Mär ****************** 181',
  'Apr ************************ 247',
  'Mai ********************** 229',
  'Jun ****************************** 309',
  'Jul ******************** 202',
  'Aug ************************** 263',
  'Sep *************** 155',
  'Okt ********** 107',
  'Nov ********** 101',
  'Dez ****** 67'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'stadt', label: 'München: Programmieren für Kinder' },
  slug: 'programmieren-lernen-kinder-muenchen',
  code: 'pmu',
  accent: '#673C14',
  accentRationale: 'Programmieren lernen für Kinder in München: ein warmes Nussbraun #673C14, wie ein Holzlineal oder das Holz einer Schulbank, deutlich anders als das Stahlblau der englischen Münchner Kinderseite; es erreicht mehr als 4,5:1 auf dem Papier und allen drei Tönungen (Vorgabe mindestens 7,63)',
  pageType: 'market',
  market: DE_DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Programmieren lernen für Kinder in München (auf Englisch)',
  title: 'Programmieren lernen für Kinder in München: live auf Englisch',
  description: 'Programmieren lernen für Kinder in München, 6 bis 12 Jahre: live online auf Englisch, Informatik in Bayerns Schulen, der Informatik-Biber und ein Projekt zur Sonne.',
  ogDescription: 'Live-Online-Programmierkurse auf Englisch für Münchner Kinder von 6 bis 12: was die bayerische Schule wann an Informatik bietet, warum Englisch ein Vorteil ist, und ein Projekt mit den Sonnenstunden der Wetterstation München-Stadt.',
  twitterDescription: 'Programmieren für Münchner Kinder, live auf Englisch: Informatik in Bayern, der Biber und ein Sonnenschein-Projekt.',
  pageName: 'Programmieren lernen für Kinder in München',
  webPageDescription: 'Ein Leitfaden für Münchner Eltern von Kindern zwischen 6 und 12 Jahren: Informatik an bayerischen Schulen nach Klasse und Schulart laut Kultusministerium und Informatik-Monitor 2026/27, der Informatik-Biber 2026 und ein eigenes Python-Projekt mit den stündlichen Sonnenscheindaten des Deutschen Wetterdienstes für München-Stadt.',
  courseDescription: 'Live-Online-Programmierkurse ausschließlich auf Englisch für Kinder von 6 bis 12 Jahren in München: zuerst Scratch, dann Python und kleine Datenprojekte, in einer Gruppe mit fünfzehn bis zwanzig Kindern oder im Einzelunterricht, mit einem festen Mentor.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kinder in München',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#schule', label: 'Schule' },
    { href: '#sonne', label: 'Projekt' },
    { href: '#biber', label: 'Biber' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'München &middot; Programmieren für Kinder &middot; 6 bis 12 Jahre',
  h1: 'Programmieren lernen für Kinder in München, live auf Englisch',
  lede: 'Viele Münchner Kinder spielen täglich am Tablet, aber wie ein Spiel entsteht, erfahren sie in der Schule erst nach dem Übertritt, und auch dann je nach Schulart sehr unterschiedlich. Hier lesen Sie, was die bayerische Schule Klasse für Klasse an Informatik vorsieht, wie unser Live-Unterricht auf Englisch für Kinder von 6 bis 12 funktioniert, warum die Sprache dabei eher hilft als stört, und wie ein zehnjähriges Kind mit den echten Sonnenstunden der Münchner Wetterstation sein erstes Diagramm programmiert.',
  secondaryCta: { href: '#sonne', label: 'Zum Sonnen-Projekt' },
  wa: 'Hallo Modern Age Coders, wir wohnen in München und unser Kind möchte programmieren lernen, gern auf Englisch. Können wir eine kostenlose Probestunde buchen?',
  heroNote: 'Live-Unterricht seit 2020 &middot; mehr als 10.000 Lernende weltweit &middot; ein fester Mentor, Unterricht auf Englisch',
  spec: [
    ['Alter', '6 bis 12 Jahre, Gruppen nach Alter'],
    ['Einstieg', 'Scratch, danach Python'],
    ['Gruppe', 'Fünfzehn bis zwanzig, oder Einzelunterricht'],
    ['Zeiten', 'Nachmittags und am Wochenende, flexibel'],
    ['Sprache', 'Englisch, mit Mentoren aus Indien'],
    ['Probestunde', 'Kostenlos, ohne Karte']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Bei Modern Age Coders lernen Kinder aus München zwischen 6 und 12 Jahren live online programmieren, und zwar auf Englisch: zuerst mit Scratch, später mit Python und kleinen Projekten zu echten Münchner Daten. Unterricht auf Englisch, mit Mentoren aus Indien, die sich auf Tempo und Aussprache Ihres Kindes einstellen. Gelernt wird allein mit dem Mentor oder in einer Gruppe von fünfzehn bis zwanzig Gleichaltrigen, wahlweise nach der Schule oder am Samstag.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Kurse für Münchner Kinder im Grundschulalter und kurz danach',
    lede: 'Ein Kurs mit getipptem Python für Kinder ab etwa neun, ein langer Einstieg mit Bausteinen ab sechs und ein kurzer Scratch-Kurs zum Ausprobieren.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PMU / 01', title: 'Python und KI für Kinder', alt: 'Kursbild Python und KI für Kinder', note: 'Für Kinder ab etwa neun Jahren. Echter Python-Code von Anfang an, Zeichnen mit der Schildkröte, kleine Spiele und Datenprojekte wie das Sonnen-Diagramm auf dieser Seite.' },
      { course: 'kids-coding-blocks-masterclass', code: 'PMU / 02', title: 'Coding für Kinder', alt: 'Kursbild Coding für Kinder mit Scratch', note: 'Der ausführliche Weg ab sechs Jahren, ungefähr ein Schuljahr lang: Geschichten und Spiele in Scratch, erste Apps, dann der behutsame Schritt zum getippten Code.' },
      { course: 'scratch-programming-complete-course', code: 'PMU / 03', title: 'Scratch für Kinder', alt: 'Kursbild Scratch für Kinder', note: 'Drei bis vier Monate. Am Ende hat Ihr Kind mehrere eigene Spiele gebaut, und Sie wissen, ob das Interesse anhält.' }
    ]
  },

  sections: [
    {
      id: 'schule',
      eyebrow: 'Informatik an Münchner Schulen',
      h2: 'Ab welcher Klasse lernen Kinder in München an der Schule programmieren?',
      lede: 'Die Grundschule umfasst in Bayern die Klassen 1 bis 4. Feste Informatikstunden nennt der Informatik-Monitor 2026/27 erst ab Klasse 5, und welche, hängt von der Schulart nach dem Übertritt ab.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik im Münchner Schulweg, Klasse für Klasse (Schuljahr 2026/27)', head: ['Klasse', 'Was vorgesehen ist'], rows: [
          ['1 bis 4', 'Grundschule; Anfang Mai der 4. Klasse kommt das Übertrittszeugnis'],
          ['5 und 6', 'Mittelschule: Informatik, eine Wochenstunde; Realschule: Informationstechnologie'],
          ['6 und 7', 'Gymnasium: im Fach Natur und Technik je eine Stunde mit Schwerpunkt Informatik'],
          ['7 bis 10', 'Mittelschule: zusätzlich das Wahlfach Informatik und digitales Gestalten, zweistündig'],
          ['9 und 10', 'Naturwissenschaftlich-technologisches Gymnasium: Informatik, zwei Wochenstunden'],
          ['10', 'Realschule: freiwillige Abschlussprüfung in Informationstechnologie möglich'],
          ['11', 'Gymnasium: zwei verpflichtende Informatikstunden in jeder Ausbildungsrichtung']
        ] },
        { kind: 'source', html: 'Grundlage: der Informatik-Monitor 2026/27 der Gesellschaft für Informatik, Seite Bayern, und das Bayerische Staatsministerium für Unterricht und Kultus mit seinen Seiten zur Grundschule und zur Realschule. Gelesen am 2. und 3. November 2026. An der Realschule läuft Informationstechnologie von Klasse 5 bis 10, mit einem Gesamtumfang, der von der Wahlpflichtfächergruppe abhängt.' },
        { kind: 'two', mt: true,
          leftH3: 'Was das für die Grundschulzeit heißt',
          left: [
            'Für die Klassen 1 bis 4 führt der Monitor in Bayern keine eigenen Informatikstunden auf. Wer sein Kind in diesen Jahren an das Programmieren heranführen möchte, tut das also außerhalb des Stundenplans, und genau dafür ist dieses Alter gut geeignet: Sechs- bis Neunjährige lernen spielerisch, in kurzen Einheiten und mit viel Ausprobieren.',
            'Dabei geht es nicht darum, den Stoff der weiterführenden Schule vorzuziehen. Wir üben die Denkweisen darunter: Schritte in die richtige Reihenfolge bringen, Muster erkennen, eine Idee testen und verbessern, wenn sie nicht klappt.'
          ],
          rightH3: 'Und nach dem Übertritt',
          right: [
            'An der Mittelschule steht Informatik ab Klasse 5 jede Woche auf dem Plan, am Gymnasium beginnt sie versteckt im Fach Natur und Technik. Seit dem Prüfungstermin 2025 kann jede bayerische Realschule eine Abschlussprüfung in Informationstechnologie anbieten; die Teilnahme ist freiwillig.',
            'Ein Kind, das mit zehn schon Schleifen und Variablen kennt, startet in diese Fächer mit Selbstvertrauen. Mehr versprechen wir nicht: Die Noten gibt die Schule, und dort zählt der Unterricht der Lehrkraft.'
          ] }
      ]
    },
    {
      id: 'englisch',
      eyebrow: 'Unterricht auf Englisch',
      h2: 'Warum Programmieren auf Englisch für Münchner Kinder ein Vorteil ist',
      lede: 'Unser Unterricht findet ausschließlich auf Englisch statt. Für viele Familien ist das kein Kompromiss, sondern ein Grund, sich für uns zu entscheiden.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Zwei Fächer in einer Stunde', p: 'Ihr Kind lernt programmieren und spricht dabei eine Stunde lang Englisch, über Dinge, die es selbst baut. Das ist anders als Vokabeln im Heft: Wörter wie repeat, if oder score braucht es sofort, um das eigene Spiel zum Laufen zu bringen.' },
          { h3: 'Ein Mentor, der sich einstellt', p: 'Unsere Mentoren reden ruhig und deutlich, sagen einen Satz notfalls mit einfacheren Worten noch einmal und gewöhnen sich an die Aussprache Ihres Kindes. Ein deutsches Wort mitten im Satz ist kein Problem; der Mentor nennt freundlich das englische dazu.' },
          { h3: 'Code ist ohnehin Englisch', p: 'Die Befehle in Python heißen print, for und while, und auch Scratch zeigt seine Blöcke auf Wunsch auf Englisch. Was Kinder in unseren Stunden lernen, gilt deshalb unverändert weiter, egal in welcher Sprache sie später Informatik haben.' }
        ] },
        { kind: 'p', mt: true, html: 'Die Mentoren arbeiten von Indien aus und sind per Video live zugeschaltet; ein Münchner Nachmittag ist dort Abend, das passt für beide Seiten. Weil Ihr Kind immer bei derselben Person lernt, merkt diese schnell, ob es lieber selbst tüftelt, einen kleinen Hinweis möchte oder einen Moment Ruhe vor der Antwort braucht.' }
      ]
    },
    {
      id: 'sonne',
      tint: 'tint',
      eyebrow: 'Ein echtes Münchner Projekt',
      h2: 'Wann scheint in München die Sonne? Ein Sternchen-Diagramm mit Python',
      lede: 'Der Deutsche Wetterdienst misst an seiner Station München-Stadt jede Stunde, wie viele Minuten die Sonne geschienen hat, und stellt die Werte als offene Daten bereit. Unsere älteren Kinder zeichnen daraus mit wenigen Zeilen Code ein Diagramm für das Jahr 2025, ganz ohne Grafikprogramm.',
      body: [
        { kind: 'two',
          leftH3: 'Die Daten',
          left: [
            'Die Station hat die Nummer 3379. Für 2025 enthält die Datei 6.502 Zeilen, jede mit einer Uhrzeit und den Sonnenminuten dieser Stunde, von 0 bis 60. Nachtstunden fehlen, weil die Sonne dann ohnehin nicht scheint. Wir geben dem Kind eine kleine Datei sonne_2025.csv mit zwei Spalten: Zeit und Minuten.',
            'Eine Besonderheit steht in den Metadaten: Die Zeiten sind in UTC angegeben, nicht in Münchner Zeit. Für Monatssummen spielt das keine Rolle, für die Frage nach der sonnigsten Uhrzeit aber sehr wohl.'
          ],
          rightH3: 'Die Idee',
          right: [
            'Ein Diagramm muss nicht gemalt werden. In Python kann man einen Text vervielfachen: "*" * 5 ergibt fünf Sternchen. Ein Kind addiert die Minuten jedes Monats, rechnet sie in Stunden um und druckt für je zehn Sonnenstunden ein Sternchen.',
            'So entsteht mit einer Schleife über zwölf Monate ein Balkendiagramm, das man sofort lesen kann, und das Kind versteht nebenbei, was eine Liste, eine Schleife und eine ganzzahlige Division sind.'
          ] },
        { kind: 'code', label: 'Version 1: Sonnenstunden pro Monat als Sternchen', lang: 'Python', code: STERNE, note: 'Wir haben das Programm selbst ausgeführt. Ausgabe:<br><code>' + AUSGABE.split('\n').join('</code><br><code>') + '</code>' },
        { kind: 'p', mt: true, html: 'Kinder erwarten meist, dass der Juli gewinnt. Tatsächlich hat 2025 der Juni mit 309 Stunden den längsten Balken, und der Juli liegt mit 202 Stunden sogar hinter dem Mai. Ein Diagramm aus Sternchen zeigt so etwas auf einen Blick, schneller als eine Tabelle mit Zahlen.' },
        { kind: 'p', html: 'Ehrlich gehört auch dazu: Laut der Fehlwertliste des DWD fehlen für den 22. bis 25. April 2025 insgesamt 53 Stundenwerte und für den 9. September 2025 weitere 15. April und September sind deshalb etwas zu kurz geraten. Mit älteren Kindern sprechen wir darüber, warum man so etwas unter ein Diagramm schreibt.' },
        { kind: 'code', label: 'Version 2: Sommerhalbjahr gegen Winterhalbjahr', lang: 'Python', code: HALBJAHR, note: 'Im Anschluss an Version 1 ausgeführt, gibt es aus: <code>April bis September: 1406 Stunden</code>, <code>Oktober bis März: 659 Stunden</code> und <code>Verhältnis: 2.1</code>.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Sonnenstunden an der Station München-Stadt 2025, ausgewählte Monate (eigene Berechnung)', head: ['Monat', 'Sonnenstunden', 'Sternchen im Diagramm'], rows: [
          ['Juni', '309', '30'],
          ['August', '263', '26'],
          ['Juli', '202', '20'],
          ['Dezember', '67', '6']
        ] },
        { kind: 'source', html: 'Daten: Deutscher Wetterdienst, Climate Data Center, stündliche Sonnenscheindauer der Station 3379 München-Stadt, Lizenz CC BY 4.0, heruntergeladen am 3. November 2026. Die Monatssummen sind unsere eigene Berechnung aus den Stundenwerten, auf ganze Stunden abgerundet.' },
        { kind: 'ol', mt: true, items: [
          '<strong>6 bis 8 Jahre, ohne Bildschirm.</strong> Malen Sie mit Ihrem Kind eine Woche lang jeden Abend ein Kästchen für einen sonnigen Tag. Am Sonntag zählen Sie die Kästchen: Das ist schon ein Diagramm.',
          '<strong>8 bis 10 Jahre, Scratch.</strong> Die Katze sagt für jeden Monat so viele Sterne, wie in einer Liste stehen. Dafür braucht es eine Schleife, die Text zusammensetzt.',
          '<strong>10 bis 12 Jahre, Python.</strong> Führen Sie Version 1 aus und ändern Sie sie so, dass ein Sternchen für fünf Stunden steht. Was passiert mit der Breite des Diagramms?',
          '<strong>Für Fortgeschrittene.</strong> Zählen Sie die Minuten nach Uhrzeit statt nach Monat. Rechnen Sie UTC in Münchner Zeit um, eine Stunde im Winter, zwei im Sommer, und finden Sie die sonnigste Stunde des Tages.'
        ] }
      ]
    },
    {
      id: 'biber',
      eyebrow: 'Ein kostenloser Wettbewerb',
      h2: 'Was ist der Informatik-Biber, und kann mein Kind in München mitmachen?',
      lede: 'Ja, über die Schule. Die Biberwochen beginnen in Bayern direkt nach den Herbstferien, die vom 2. bis 6. November 2026 dauern.',
      body: [
        { kind: 'two',
          leftH3: 'So funktioniert der Biber',
          left: [
            'Den Informatik-Biber veranstalten die Bundesweiten Informatikwettbewerbe als Online-Wettbewerb mit Denkaufgaben, für den keine Gebühr anfällt. Mitmachen können die Klassen 3 bis 13, ganz ohne Vorkenntnisse. In der Grundschule gibt es neun Aufgaben und 30 Minuten Zeit, in Klasse 5 und 6 zwölf Aufgaben und 35 Minuten, ab Klasse 7 fünfzehn Aufgaben und 40 Minuten.',
            'Die Schule meldet die Kinder an und führt den Wettbewerb im Unterricht durch. Fragen Sie also die Klassenlehrkraft, ob die Schule mitmacht.'
          ],
          rightH3: 'Die Termine 2026',
          right: [
            'Gespielt wird in den Biberwochen zwischen dem 9. und 20. November 2026; zum Üben steht seit dem 14. September 2026 der Schnupper-Biber bereit. Im Dezember 2026 kommen die Ergebnisse, im Januar 2027 folgen Urkunden und Preise.',
            'Wir verwenden im Unterricht keine echten Biber-Aufgaben. Wir schreiben eigene Rätsel im gleichen Geist, über Reihenfolgen, Regeln und kürzeste Wege, und wer daran Freude hat, hat sie meist auch am Biber.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Schulferien in Bayern im Schuljahr 2026/27 (erster und letzter Ferientag)', head: ['Ferien', 'Zeitraum'], rows: [
          ['Herbstferien', '2. bis 6. November 2026'],
          ['Weihnachtsferien', '24. Dezember 2026 bis 8. Januar 2027'],
          ['Frühjahrsferien', '8. bis 12. Februar 2027'],
          ['Osterferien', '22. März bis 2. April 2027'],
          ['Pfingstferien', '18. bis 28. Mai 2027'],
          ['Sommerferien', '2. August bis 13. September 2027']
        ] },
        { kind: 'source', html: 'Quellen: Bundesweite Informatikwettbewerbe, Informatik-Biber 2026; Kultusministerkonferenz, Ferien im Schuljahr 2026/2027, Stand 9. Oktober 2025, Zeile Bayern. Unser Unterricht läuft in den Ferien weiter, wenn Sie nicht pausieren möchten.' }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Zu welchen Uhrzeiten findet der Unterricht in München statt?',
      lede: 'Der Münchner Nachmittag liegt im indischen Abend, deshalb beginnen die meisten Stunden zwischen Schulschluss und Abendessen.',
      body: [
        { kind: 'table', numCols: [], caption: 'Beispielzeiten: München und Indien im Vergleich', head: ['Münchner Zeit', 'In Indien, Winter (bis 28. März 2027)', 'In Indien, Sommer (ab 28. März 2027)'], rows: [
          ['15:45', '20:15', '19:15'],
          ['17:15', '21:45', '20:45'],
          ['Samstag 11:15', '15:45', '14:45']
        ] },
        { kind: 'source', html: 'Deutschland rechnet nach dem Einheitenzeitgesetz im Winter mit UTC+1 (MEZ), im Sommer mit UTC+2 (MESZ). Umgestellt wurde zuletzt am 25. Oktober 2026, die nächste Umstellung folgt am 28. März 2027. In Indien gilt das ganze Jahr UTC+5:30, also viereinhalb Stunden Vorsprung im Winter und dreieinhalb im Sommer. Feste Gruppentermine sind das nicht, nur Beispiele.' },
        { kind: 'p', mt: true, html: 'Bei der Buchung wählen Sie eine Zeit in Ihrer eigenen Uhrzeit, der Mentor sieht denselben Termin in seiner. Kinder aus der Ganztagsschule nehmen oft einen späteren Nachmittag oder den Samstagvormittag, der für die Jüngsten besonders entspannt ist.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Lernstufen',
    h2: 'Fünf Stufen vom ersten Block bis zu echten Messwerten',
    lede: 'Diese Einteilung stammt von uns. Mit ihr finden wir die passende Gruppe für ein neues Kind und beschreiben Ihnen den Fortschritt in klaren Worten.',
    table: { caption: 'Programmier-Stufen von 6 bis 12 Jahren (eigene Einteilung)', head: ['Stufe', 'Übliches Alter', 'Ihr Kind kann'], rows: [
      ['1. Abfolge', '6 und 7', 'Eine Figur Schritt für Schritt über den Bildschirm führen'],
      ['2. Wiederholung', '7 bis 8', 'Eine Schleife statt zehnmal desselben Blocks verwenden'],
      ['3. Listen', '8 bis 10', 'Werte in einer Liste sammeln und zusammenzählen'],
      ['4. Text als Bild', '9 bis 11', 'Mit einer Schleife ein Diagramm aus Zeichen drucken'],
      ['5. Messwerte', 'ab 10', 'Eine echte Messreihe einlesen und das Ergebnis in eigenen Worten erklären']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Stufe 4 ist der Kern des Sonnen-Projekts. Wer versteht, dass ein Diagramm nur wiederholte Zeichen sind, hat das Prinzip einer Schleife wirklich begriffen.',
      'Unsere Rückmeldung beschreibt Dinge, die Ihr Kind gebaut hat und selbst erklären kann. Bildschirmminuten zählen wir nicht.'
    ] },
    right: { h3: 'Für Kinder', ps: [
      'Ein Balken ist nur ein Sternchen, das oft genug wiederholt wird.',
      'Überrascht ein Diagramm, lohnt sich die Frage, was dahintersteckt.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse für Kinder in München',
    lede: 'Jeder Kurs läuft live, auf Englisch und mit demselben Mentor, wahlweise privat oder in einer Gruppe.',
    bands: [
      { num: 'I', h3: 'Denken und Mathe', sub: '7 bis 15 Jahre', courses: [
        { code: 'PMU / DENK / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Knobeln und Problemlösen', blurb: 'Logikrätsel und Schritt-für-Schritt-Pläne ab 7.' },
        { code: 'PMU / DENK / 02', slug: 'maths-through-coding', title: 'Mathe mit Python', blurb: 'Brüche, Muster und Graphen als kleine Programme, ab 10.' },
        { code: 'PMU / DENK / 03', slug: 'ai-literacy-for-kids-course', title: 'KI verstehen', blurb: 'Wie Computer lernen, ganz ohne Erwachsenen-Konten, ab 8.' }
      ] },
      { num: 'II', h3: 'Spiele und Welten', sub: '7 bis 14 Jahre', courses: [
        { code: 'PMU / SPIEL / 01', slug: 'minecraft-coding-for-kids-course', title: 'Programmieren in Minecraft', blurb: 'Code in einer Welt, die Kinder schon kennen, ab 7.' },
        { code: 'PMU / SPIEL / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox-Spiele mit Luau', blurb: 'Eigene Spiele, die Freunde spielen können, ab 8.' },
        { code: 'PMU / SPIEL / 03', slug: 'game-development-masterclass-for-kids', title: 'Spiele entwickeln', blurb: 'Drei Spielwelten nacheinander: Scratch, Roblox, Minecraft, ab 8.' }
      ] },
      { num: 'III', h3: 'Selbst bauen', sub: '8 bis 12 Jahre', courses: [
        { code: 'PMU / BAU / 01', slug: 'block-coding-app-development-masterclass', title: 'Apps mit Bausteinen', blurb: 'Apps, die wirklich auf dem Handy laufen, ab 8.' },
        { code: 'PMU / BAU / 02', slug: 'kids-ai-web-development-course', title: 'Die erste Website', blurb: 'Eigene Seiten gestalten und veröffentlichen, ab 9.' },
        { code: 'PMU / BAU / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatik-Wettbewerbe', blurb: 'Knobeln im Stil des Bibers und darüber hinaus, ab 9.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'So läuft es ab',
    h2: 'Eine Unterrichtswoche für Münchner Familien',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Nachmittags', l: 'Nach Grundschule oder Ganztag, ab etwa 15:45 Münchner Zeit.' },
      { time: 'Samstags', l: 'Am Vormittag, ruhig und ohne Hausaufgabendruck.' },
      { time: 'Einzeln', l: 'Zu einer vereinbarten Zeit, im Tempo Ihres Kindes.' }
    ],
    cells: [
      { h3: 'Ein Mentor', p: 'Dieselbe Person jede Woche.' },
      { h3: 'Klares Englisch', p: 'Kurze Sätze, bei Bedarf noch einmal anders erklärt.' },
      { h3: 'Selbst machen', p: 'Ihr Kind klickt und tippt von der ersten Stunde an.' },
      { h3: 'Nach Alter', p: 'Sechsjährige lernen mit Sechsjährigen.' },
      { h3: 'Rückmeldung', p: 'Was gebaut wurde und was als Nächstes kommt.' },
      { h3: 'Gruppe oder privat', p: 'Eine Gruppe von fünfzehn bis zwanzig, oder Ihr Kind mit dem Mentor.' }
    ]
  },

  projectsH2: 'Was ältere Lernende bauen',
  projectsLede: 'Viele Kinder, die in der Grundschule anfangen, bleiben bis ins Jugendalter dabei. Eine kleine Auswahl aus den Projekten unserer älteren Lernenden folgt hier; die ganze Sammlung steht unter <a class="ag-inline-link" href="/student-labs">Student labs</a> (englischsprachig).',
  reviewsLede: 'Was Familien auf Google über uns schreiben, unverändert und auf Englisch.',

  fees: {
    h2: 'Preise für Familien in München',
    lede: 'Die monatliche Gebühr deckt acht Live-Stunden ab. Angezeigt wird sie in Euro auf Basis des Referenzkurses der Europäischen Zentralbank; belastet wird Ihre Karte dagegen in US-Dollar. Die Umrechnung übernimmt Ihre Bank, kleine Abweichungen sind also möglich.',
    free: ['Eine kostenlose Probestunde', 'Ein kleines Rätsel und ein erstes Programm', 'Keine Karte nötig'],
    group: ['Fünfzehn bis zwanzig Kinder ähnlichen Alters', 'Ein fester Mentor', 'Zwei Stunden pro Woche', 'Monatlich, jederzeit kündbar'],
    one: ['Ihr Kind und ein Mentor', 'Eigene Projekte, eigenes Tempo', 'Zeiten nach Ihrem Wunsch']
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    h2: 'Programmieren lernen für Kinder in München: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein. Unsere Stunden laufen live und nur auf Englisch, und gerade darin sehen viele Eltern den Gewinn: Programmieren und Englisch zugleich, ohne zusätzlichen Termin. Die Mentoren reden ruhig und deutlich, richten sich nach Tempo und Aussprache des Kindes und erklären etwas gern ein zweites Mal anders.' },
      { q: 'Muss mein Kind schon gut Englisch können?', a: 'Nein. Viele Kinder beginnen mit wenig Englisch. In den ersten Stunden zeigt der Mentor fast alles am Bildschirm vor, und die wichtigen Wörter wiederholen sich ständig. Nach der kostenlosen Probestunde sagen wir Ihnen ehrlich, ob Gruppe oder Einzelunterricht besser passt.' },
      { q: 'Ab welchem Alter kann mein Kind anfangen?', a: 'Ab sechs Jahren. Die Jüngsten arbeiten mit Scratch, wo Bausteine zusammengesteckt werden und kaum etwas getippt werden muss. Ab etwa neun Jahren sind die meisten Kinder bereit für Python.' },
      { q: 'Hat mein Kind in der Grundschule schon Informatik?', a: 'Der Informatik-Monitor 2026/27 führt für Bayern feste Informatikstunden erst ab Klasse 5 auf, je nach Schulart: an der Mittelschule eine Wochenstunde, an der Realschule das Fach Informationstechnologie, am Gymnasium einen Schwerpunkt im Fach Natur und Technik in Klasse 6 und 7.' },
      { q: 'Hilft Programmieren beim Übertritt nach der 4. Klasse?', a: 'Das versprechen wir nicht. Für das Übertrittszeugnis zählen die Noten in Deutsch, Mathematik sowie Heimat- und Sachunterricht. Programmieren übt genaues, schrittweises Denken, das viele Kinder auch in Mathe nutzen, aber die Noten vergibt die Schule.' },
      { q: 'Wann finden die Stunden statt?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. Beliebt sind 15:45 oder 17:15 Uhr und der Samstagvormittag.' },
      { q: 'Wo sitzen die Mentoren?', a: 'In Indien. Sie unterrichten live per Video, und Ihr Kind behält seinen Mentor. Um 15:45 Uhr in München ist es in Indien bis zum 28. März 2027 schon 20:15 Uhr.' },
      { q: 'Wie groß sind die Gruppen?', a: 'Eine Gruppe besteht aus fünfzehn bis zwanzig Kindern ähnlichen Alters. Wer lieber allein mit dem Mentor arbeitet, erhält zwei Einzelstunden pro Woche zu vereinbarten Zeiten.' },
      { q: 'Was kostet der Kurs, und wie wird bezahlt?', a: 'Monatlich. Auf dieser Seite sehen Sie den Betrag in Euro, berechnet mit dem Referenzkurs der Europäischen Zentralbank; abgerechnet wird in US-Dollar, und den Wechselkurs setzt Ihre Bank an. Deshalb kann der Betrag auf dem Auszug etwas anders aussehen. Für die Probestunde zahlen Sie nichts.' },
      { q: 'Welche Ausstattung braucht mein Kind?', a: 'Einen Laptop oder PC mit Tastatur, eine Kamera und eine stabile Internetverbindung. Scratch läuft im Browser; Python richten wir in den ersten Python-Stunden gemeinsam ein. Ein Tablet allein reicht für getippten Code nicht aus.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weitere Seiten',
    h2: 'Weiterlesen',
    lede: 'Mehr für Familien in Deutschland.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Unsere Übersicht für Deutschland (auf Englisch).' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Informatik von Klasse 5 bis zum Abitur, eine Seite auf Deutsch.' },
      { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber üben', p: 'Was der Biber verlangt, mit eigenen Rätseln (auf Englisch).' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik nach Bundesland', p: 'Alle 16 Länder im Vergleich (auf Englisch).' },
      { href: '/ai-tools-age-guide', label: 'KI-Werkzeuge nach Alter', p: 'Welche KI-Werkzeuge ab welchem Alter erlaubt sind (auf Englisch).' },
      { href: '/how-we-teach', label: 'So unterrichten wir', p: 'Unser Live-Unterricht im Detail (auf Englisch).' }
    ]
  },

  start: {
    h2: 'Kostenlose Probestunde buchen',
    lede: 'Zur Probestunde gehören ein Denkrätsel und ein winziges erstes Programm. Dabei merkt der Mentor, wie Ihr Kind an eine Aufgabe herangeht und wie wohl es sich mit Englisch fühlt; im Anschluss schlägt er einen Kurs und eine passende Gruppe vor.',
    readFirst: 'Zum Nachlesen vorab: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> zeigt den Ablauf einer Stunde, unter <a class="ag-inline-link" href="/courses">All courses</a> stehen sämtliche Lehrpläne; beide Seiten sind englischsprachig.',
    note: 'Alle Stunden finden live online statt, gehalten von Mentoren in Indien und nur auf Englisch. Schnelle Antworten gibt es per WhatsApp, gern auf Englisch.',
    formNote: 'Kostenlos, ohne Karte und ohne Vertrag.'
  },

  footer: {
    cols: [
      { h4: 'Für Kinder', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch für Kinder' },
        { href: '/python-for-10-year-olds', label: 'Python mit zehn' },
        { href: '/ai-projects-for-kids', label: 'KI-Projekte für Kinder' },
        { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online' },
        { href: '/student-labs', label: 'Projekte unserer Lernenden' },
        { href: '/how-we-teach', label: 'So unterrichten wir' }
      ] }
    ],
    bottomRight: 'Ein Balken ist ein wiederholtes Zeichen'
  },

  personalityCss: `
.ag-root.ag-pmu .ag-hero h1 { letter-spacing: -0.011em; }
.ag-root.ag-pmu .ag-capsule { border-left-width: 5px; border-radius: 3px; }
.ag-root.ag-pmu .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-pmu .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-pmu .ag-code-head b { letter-spacing: 0.012em; }
`,

  dossier: {
    curriculumAuthority: 'Bayerisches Staatsministerium für Unterricht und Kultus (Grundschule, Realschule); Gesellschaft für Informatik, Informatik-Monitor 2026/27, Bayern; Bundesweite Informatikwettbewerbe, Informatik-Biber 2026; KMK Ferien 2026/2027; Einheitenzeitgesetz; Deutscher Wetterdienst, Climate Data Center, stündliche Sonnenscheindauer Station 3379, CC BY 4.0; alle gelesen am 2. und 3. November 2026.',
    localProject: 'Das Münchner Sonnen-Diagramm: ein eigenes Python-Projekt mit den stündlichen Sonnenminuten 2025 der DWD-Station München-Stadt, das pro Monat die Sonnenstunden summiert und je zehn Stunden ein Sternchen druckt (Juni 309, Juli 202, Dezember 67), dann Sommer- und Winterhalbjahr vergleicht (1406 zu 659, Verhältnis 2.1); mit Hinweis auf die vom DWD gemeldeten Lücken im April und September 2025 und auf UTC-Zeiten. Lesson family: ein Diagramm aus Text, eine Schleife, die ein Zeichen wiederholt.',
    requiredMentions: ['sonne_2025.csv', 'Jun ****************************** 309', 'Jul ******************** 202', 'April bis September: 1406 Stunden', 'Oktober bis März: 659 Stunden', 'Verhältnis: 2.1', 'Informatik und digitales Gestalten', 'Ein Balken ist ein wiederholtes Zeichen'],
    sources: [
      { claim: 'Übertrittszeugnis Anfang Mai der 4. Klasse; drei Schularten danach.', url: 'https://www.km.bayern.de/lernen/schularten/grundschule' },
      { claim: 'Informatik in Bayern nach Schulart und Klasse.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/bayern' },
      { claim: 'Freiwillige Abschlussprüfung in Informationstechnologie an Realschulen ab 2025.', url: 'https://www.km.bayern.de/lernen/schularten/realschule' },
      { claim: 'Informatik-Biber 2026: Termine, Klassen, Aufgabenzahl.', url: 'https://bwinf.de/biber/' },
      { claim: 'Schulferien Bayern 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'DWD stündliche Sonnenscheindauer, Station 3379, CC BY 4.0, Zeiten in UTC.', url: 'https://opendata.dwd.de/climate_environment/CDC/observations_germany/climate/hourly/sun/historical/' }
    ],
    rejectedClaims: [
      'Feste Informatikstunden in der bayerischen Grundschule: der Monitor nennt keine, daher keine Angabe.',
      'Dass Programmieren den Übertritt verbessert: nicht belegt, die Seite verspricht es ausdrücklich nicht.',
      'Gründe für den trüben Juli 2025: die Daten sagen nichts darüber, daher keine.',
      'Unterricht auf Deutsch: wir unterrichten nur auf Englisch, und die Seite sagt es.',
      'Verbindungen zum DWD, zum Kultusministerium, zu BWINF oder einer Schule: keine.'
    ]
  }
};
