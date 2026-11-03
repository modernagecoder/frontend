'use strict';
// Programmieren lernen ab 12 (ag- German-language door, Germany cluster P3, row DE056, alloc code ple, accent #425B8F).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live in English only, matching the learner's pace and accent; this page says "auf Englisch"
// in the capsule and frames it as a benefit. Formal "Sie" throughout. Pages show euro; checkout charges USD.
// Spine: the age of twelve as a turning point. (1) What school gives a twelve-year-old in Klasse 6 and 7, Land by Land,
// from the GI Informatik-Monitor 2026/27 raw Land pages; (2) what twelve- and thirteen-year-olds already do with screens
// and AI (JIM-Studie 2025), set against the vendors' own age floors, so the course for this age teaches coding without
// chatbots; (3) Scratch or Python at twelve (our guidance); (4) an original Python example; (5) competitions that fit
// Klasse 6 and 7 (BWINF); (6) times in German and India time.
// Sources, raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/programmieren-lernen-ab-12/ (fetched 2 and 3 Nov 2026):
//  mpfs JIM-Studie 2025 (JIM_2025.pdf, text via PDFKit; PM_JIM-2025.pdf), https://mpfs.de/studie/jim-studie-2025/ :
//   "Bei den Zwölf- bis 13-Jährigen haben 69 Prozent ChatGPT ausprobiert, in allen höheren Altersgruppen sind es jeweils knapp 90 Prozent."
//   "Darauf greifen 40 Prozent der Zwölf- bis 13-Jährigen zurück" (Meta AI); Copilot "12 bis 13 Jahre: 15 %", DeepL "12 bis 13 Jahre: 8 %".
//   "Zwölf- bis 13-Jährige kommen auf 166 Minuten täglich" (smartphone screen time; all: "231 Minuten").
//   "Von Einschränkungen bei der Handynutzung seitens der Eltern berichtet vor allem die jüngste Altersgruppe (61 %)."
//   Method (PM): "1.200 Jugendliche im Alter von zwölf bis 19 Jahren im Zeitraum vom 2. Juni bis 12. Juli 2025".
//  Microsoft, Copilot for young people (ms-copilot-young.html): "You must be at least 13 years old to use Copilot, and in some
//   countries, the minimum age may be higher".
//  content/ai-tool-age-audit.json (vendor quotes, audited 15 July 2026): ChatGPT "You must be at least 13 years old ... If you are
//   under 18 you must have your parent or legal guardian's permission"; Gemini 16 in Germany. openai.com returned HTTP 403 on
//   3 Nov 2026 (not retried; noted in NOTES.txt).
//  GI Informatik-Monitor 2026/27 raw Land pages: Berlin "Grundschule und die Gemeinschaftsschule mit den Jahrgangsstufen 1 bis 6";
//   ITG "in der Jahrgangsstufe 7 oder 8". Thüringen MBI "mit jeweils zwei Wochenstunden in den Doppeljahrgangsstufen 5/6 und 7/8";
//   "Zum Schuljahr 2026/27 wurde der neue Lehrplan für die Jahrgangsstufen 7 in Kraft gesetzt." Sachsen-Anhalt "Seit dem Schuljahr
//   2026/27 wird in den Jahrgangsstufen 5 bis 10 an Sekundar-, Gemeinschafts- und Gesamtschulen das Pflichtfach Informatik
//   unterrichtet." Hessen "je einstündig ab der Jahrgangsstufe 7". Bayern Gymnasium "in den Jahrgangsstufen 6 und 7 im Umfang von
//   je einer Wochenstunde der Schwerpunkt Informatik"; Saarland "7 und 8 zweistündig"; Sachsen "einstündig in den Jahrgangsstufen
//   7 bis 10"; Schleswig-Holstein "vier Wochenstunden in den Jahrgangsstufen 7 bis 10"; Hamburg "vier Wochenstunden"; NRW "5 und 6";
//   Niedersachsen "9 und 10".
//  BWINF: Biber "Jugendliche ab Klasse 7 bearbeiten 15 Aufgaben in 40 Minuten"; "Die Biberwochen 2026 finden vom 9. bis 20. November
//   statt."; teachers register as coordinators ("Registrierung der Lehrkräfte als Koordinator:innen"). Jugendwettbewerb "Silber
//   (empfohlen für Jg. 7/8/9): 4 Aufgaben / 40 Minuten".
//  Time: EinhZeitG; summer time ended 25 Oct 2026, begins 28 Mar 2027 (facts-geo/timezone.tsv).
// Our own: rate(37) -> [50, 25, 37]; rate(100) -> [50, 75, 88, 94, 97, 99, 100]; worst case over 1 to 100 = 7 guesses;
// counting up from 1 needs 37 and 100 guesses (python3 -I, 3 Nov 2026).
// Lesson family: halve what is left; a good guessing strategy needs at most seven questions for 1 to 100 (binary search).

const { DE } = require('../../scripts/nl/lib/market-de');

const PY = [
  'def rate(geheim, unten=1, oben=100):',
  '    versuche = []',
  '    while True:',
  '        tipp = (unten + oben) // 2',
  '        versuche.append(tipp)',
  '        if tipp == geheim:',
  '            return versuche',
  '        if tipp < geheim:',
  '            unten = tipp + 1',
  '        else:',
  '            oben = tipp - 1',
  '',
  'print(rate(37))',
  'print(rate(100))',
  'schlimmster = max(len(rate(z)) for z in range(1, 101))',
  'print(schlimmster)'
].join('\n');

const NAIV = [
  'def rate_naiv(geheim):',
  '    versuche = 0',
  '    for tipp in range(1, 101):',
  '        versuche = versuche + 1',
  '        if tipp == geheim:',
  '            return versuche',
  '',
  'print(rate_naiv(37), rate_naiv(100))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'Programmieren lernen ab 12' },
  slug: 'programmieren-lernen-ab-12',
  code: 'ple',
  accent: '#425B8F',
  accentRationale: 'Programmieren lernen ab 12: a calm slate blue #425B8F, the colour of a school exercise book cover, distinct from the petrol of the Informatik-Nachhilfe page; contrast 5.45 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Programmieren lernen ab 12 (auf Englisch)',
  title: 'Programmieren lernen ab 12: live online auf Englisch',
  description: 'Programmieren lernen ab 12: was Klasse 6 und 7 in Ihrem Bundesland bieten, warum Python jetzt passt, und ein Kurs live auf Englisch, in der Gruppe oder einzeln.',
  ogDescription: 'Mit 12 beginnt für viele Kinder die weiterführende Schule und das echte Programmieren. Was die Länder in Klasse 6 und 7 vorsehen, was die JIM-Studie 2025 über 12- bis 13-Jährige zeigt, und ein erstes Python-Programm.',
  twitterDescription: 'Programmieren ab 12, live auf Englisch: Informatik in Klasse 6 und 7, KI-Altersgrenzen und ein Zahlenraten in Python.',
  pageName: 'Programmieren lernen ab 12',
  webPageDescription: 'Ein Leitfaden für Eltern in Deutschland, deren Kind mit etwa 12 Jahren programmieren lernen möchte: Informatik in Klasse 6 und 7 nach dem Informatik-Monitor 2026/27, Mediennutzung der 12- bis 13-Jährigen nach der JIM-Studie 2025, die Altersgrenzen der KI-Anbieter und ein eigenes Python-Beispiel.',
  courseDescription: 'Live-Online-Kurse im Programmieren für Kinder ab etwa 12 Jahren in ganz Deutschland, ausschließlich auf Englisch: von Scratch zu Python und ins Web, ohne KI-Chatbots, in der Gruppe oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Programmieren ab 12',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#schule', label: 'Schule' },
    { href: '#ki-alter', label: 'KI-Alter' },
    { href: '#beispiel', label: 'Beispiel' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Deutschland &middot; Programmieren &middot; ab 12 Jahren',
  h1: 'Programmieren lernen ab 12, live auf Englisch',
  lede: 'Mit zwölf Jahren wechseln viele Kinder gerade auf die weiterführende Schule oder kommen in die Klasse 7, und plötzlich wird aus Spielen mit Bausteinen echtes Programmieren. Diese Seite zeigt, was die Bundesländer in Klasse 6 und 7 an Informatik vorsehen, was 12- und 13-Jährige laut JIM-Studie 2025 schon mit Smartphone und KI tun, ab welchem Alter die großen KI-Dienste überhaupt erlaubt sind, und wie ein erstes Python-Programm aussieht, das klug statt zufällig rät.',
  secondaryCta: { href: '#schule', label: 'Informatik in Klasse 6 und 7' },
  wa: 'Hallo Modern Age Coders, unser Kind ist etwa 12 und möchte programmieren lernen, gern auf Englisch. Können wir eine kostenlose Probestunde vereinbaren?',
  heroNote: 'Live seit 2020 &middot; über 10.000 Lernende weltweit &middot; Unterricht auf Englisch mit einem festen Mentor',
  spec: [
    ['Alter', 'Etwa 11 bis 13, Klasse 6 bis 8'],
    ['Einstieg', 'Scratch, dann Python und Web'],
    ['Gruppe', 'Fünfzehn bis zwanzig Kinder, oder einzeln'],
    ['KI-Chatbots', 'Nicht im Unterricht unter 13'],
    ['Sprache', 'Englisch, langsam und deutlich'],
    ['Probestunde', 'Kostenlos und unverbindlich']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Programmieren lernen ab 12 bei Modern Age Coders heißt: Ihr Kind lernt live online auf Englisch, mit einem festen Mentor aus Indien, der Tempo und Aussprache an Ihr Kind anpasst. Wer noch nie programmiert hat, beginnt mit Scratch und wechselt bald zu Python; wer schon Blöcke kennt, startet direkt mit Python oder Webseiten. Ihr Kind lernt zusammen mit fünfzehn bis zwanzig Gleichaltrigen oder allein mit dem Mentor, ganz ohne KI-Chatbots.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Kurse für den Einstieg mit 12',
    lede: 'Einer führt mit Python von ersten Spielen zu kleinen KI-Projekten, einer begleitet den Informatikunterricht der Schule, einer zeigt, wie Webseiten gebaut werden.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PLE / 01', title: 'Python und KI für Kinder', alt: 'Kursbild Python und KI für Kinder', note: 'Für etwa 9 bis 13 Jahre. Variablen, Schleifen und Funktionen an Spielen und Turtle-Grafik, später kleine Projekte, die erklären, wie KI lernt.' },
      { course: 'informatik-companion-course-klasse-5-10', code: 'PLE / 02', title: 'Informatik Companion, Klasse 5 bis 10', alt: 'Kursbild Informatik Companion, Klasse 5 bis 10', note: 'Geeignet von 10 bis 16 Jahren. Geht die Themen des Schulfachs durch, von Algorithmen und Daten bis zu Netzwerken, mit Scratch und Python.' },
      { course: 'html-css-course-for-beginners-build-real-websites', code: 'PLE / 03', title: 'HTML und CSS: eigene Webseiten', alt: 'Kursbild HTML und CSS für Einsteiger', note: 'Ab 10 Jahren. Eine eigene Webseite Schritt für Schritt aufbauen, mit Überschriften, Bildern, Farben und einem Layout fürs Handy.' }
    ]
  },

  sections: [
    {
      id: 'schule',
      eyebrow: 'Klasse 6 und 7',
      h2: 'Hat mein Kind mit 12 schon Informatik in der Schule?',
      lede: 'Das hängt fast ganz vom Bundesland ab. Mit 12 Jahren sitzt ein Kind meist in Klasse 6 oder 7, und genau in diesen beiden Jahrgängen gehen die Länder sehr verschiedene Wege. Die Tabelle fasst zusammen, was der Informatik-Monitor 2026/27 für diese beiden Klassen beschreibt.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik in Klasse 6 und 7, Schuljahr 2026/27 (Auswahl von zwölf Ländern)', head: ['Land', 'Klasse 6', 'Klasse 7'], rows: [
          ['Bayern, Gymnasium', 'Natur und Technik mit Schwerpunkt Informatik, eine Wochenstunde', 'Ebenso, eine Wochenstunde'],
          ['Bayern, Mittelschule', 'Informatik, eine Wochenstunde', 'Informatik, eine Wochenstunde'],
          ['Berlin', 'Noch Grundschule (Klasse 1 bis 6)', 'ITG mit einer Wochenstunde, in Klasse 7 oder 8'],
          ['Hamburg', 'Nicht vorgesehen', 'Vier Wochenstunden, von der Schule auf Klasse 7 bis 10 verteilt'],
          ['Hessen', 'Kein verbindlicher Unterricht', 'Am Gymnasium als Wahlangebot, je eine Stunde'],
          ['Niedersachsen', 'Nicht vorgesehen', 'Nicht vorgesehen, Pflicht erst in Klasse 9 und 10'],
          ['Nordrhein-Westfalen', 'Pflichtfach an allen Schularten', 'Nicht mehr verpflichtend'],
          ['Saarland', 'Nicht vorgesehen', 'Gemeinschaftsschule und G9-Gymnasium: zwei Wochenstunden'],
          ['Sachsen', 'Nicht vorgesehen', 'Eine Wochenstunde, Oberschule und Gymnasium'],
          ['Sachsen-Anhalt', 'Sekundar-, Gemeinschafts- und Gesamtschule: Pflichtfach seit 2026/27', 'Ebenso; am Gymnasium nur Wahlpflicht ab Klasse 9'],
          ['Schleswig-Holstein', 'Nicht vorgesehen', 'Anteil an insgesamt vier Stunden über Klasse 7 bis 10'],
          ['Thüringen', 'Medienbildung und Informatik, zwei Wochenstunden für Klasse 5 und 6 zusammen', 'Zwei Wochenstunden für Klasse 7 und 8; neuer Lehrplan für Klasse 7 seit 2026/27']
        ] },
        { kind: 'source', html: 'Grundlage: die Länderseiten des Informatik-Monitors 2026/27 der Gesellschaft für Informatik zu Bayern, Berlin, Hamburg, Hessen, Niedersachsen, Nordrhein-Westfalen, Saarland, Sachsen, Sachsen-Anhalt, Schleswig-Holstein und Thüringen, gelesen am 2. und 3. November 2026. Zusammenfassung und Auswahl der Länder von uns; maßgeblich ist immer die Stundentafel Ihrer Schule.' },
        { kind: 'two', mt: true,
          leftH3: 'Warum gerade 12 ein Wendepunkt ist',
          left: [
            'In Berlin reicht die Grundschule laut Informatik-Monitor bis Klasse 6, ein Berliner Kind wechselt also oft genau mit zwölf auf die weiterführende Schule. Der Informationstechnische Grundkurs (ITG) folgt dort in Klasse 7 oder 8. In Nordrhein-Westfalen ist es umgekehrt: Das Pflichtfach liegt in Klasse 5 und 6, mit zwölf ist es für viele schon wieder vorbei.',
            'Wer in Thüringen lernt, hat seit dem Schuljahr 2024/25 das Fach Medienbildung und Informatik, und zum Schuljahr 2026/27 ist der neue Lehrplan für Klasse 7 in Kraft getreten. In Sachsen-Anhalt ist Informatik seit 2026/27 an Sekundar-, Gemeinschafts- und Gesamtschulen von Klasse 5 bis 10 Pflichtfach.'
          ],
          rightH3: 'Was das für Ihr Kind heißt',
          right: [
            'Zwei Kinder gleichen Alters können also ein völlig unterschiedliches Vorwissen haben: das eine zwei Jahre Pflichtunterricht, das andere noch keine einzige Stunde. Deshalb fragen wir in der Probestunde nicht nach der Klasse, sondern danach, was Ihr Kind schon ausprobiert hat.',
            'Ein Kurs außerhalb der Schule ersetzt den Informatikunterricht nicht und vergibt keine Noten. Er kann aber eine Lücke füllen, wenn die Schule noch nichts anbietet, oder dort weitermachen, wo der Pflichtunterricht aufhört.'
          ] }
      ]
    },
    {
      id: 'ki-alter',
      eyebrow: 'Smartphone, KI und Altersgrenzen',
      h2: 'Dürfen 12-Jährige ChatGPT und andere KI-Dienste nutzen?',
      lede: 'Nach den Bedingungen der Anbieter in der Regel nicht ohne Weiteres, und trotzdem tun es viele. Die JIM-Studie 2025 des Medienpädagogischen Forschungsverbunds Südwest befragte 1.200 Jugendliche zwischen 12 und 19 Jahren vom 2. Juni bis 12. Juli 2025. Die jüngste Gruppe darin sind die 12- und 13-Jährigen.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Was 12- bis 13-Jährige laut JIM-Studie 2025 nutzen, und was die Anbieter erlauben', head: ['Dienst', 'Genutzt von 12- bis 13-Jährigen', 'Mindestalter laut Anbieter'], rows: [
          ['ChatGPT (OpenAI)', '69 Prozent haben es ausprobiert', '13 Jahre; unter 18 nur mit Erlaubnis der Eltern'],
          ['Meta AI', '40 Prozent', 'Nicht von uns geprüft'],
          ['Microsoft Copilot', '15 Prozent', 'Mindestens 13 Jahre, in manchen Ländern höher'],
          ['DeepL', '8 Prozent', 'Nicht von uns geprüft'],
          ['Google Gemini', 'In der Studie nicht nach Alter ausgewiesen', 'In Deutschland 16 Jahre']
        ] },
        { kind: 'source', html: 'Nutzung: mpfs, JIM-Studie 2025, Kapitel Künstliche Intelligenz; bei ChatGPT liegt der Anteil in allen höheren Altersgruppen laut Studie bei knapp 90 Prozent. Mindestalter: Microsoft, Seite zu Copilot für junge Menschen, gelesen am 3. November 2026; ChatGPT und Gemini nach den Nutzungsbedingungen der Anbieter, wörtlich festgehalten in unserer Prüfung vom 15. Juli 2026 (die Seite von OpenAI hat unseren Abruf am 3. November 2026 abgelehnt).' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Bildschirmzeit', p: 'Laut JIM-Studie 2025 liegen 12- bis 13-Jährige bei 166 Minuten Smartphone am Tag, alle Befragten zusammen bei 231 Minuten. Programmieren am Laptop ist eine andere Art Bildschirmzeit: Ihr Kind baut etwas, statt nur zu wischen.' },
          { h3: 'Regeln der Eltern', p: 'Einschränkungen der Handynutzung durch die Eltern nennt in der Studie vor allem die jüngste Altersgruppe, 61 Prozent. Ein fester Kurstermin pro Woche lässt sich gut in solche Familienregeln einbauen.' },
          { h3: 'Unsere Regel', p: 'Für Kinder unter 13 setzen wir im Unterricht keine KI-Chatbots ein. Ihr Kind schreibt jede Zeile selbst und lernt dabei, warum ein Programm tut, was es tut. Das ist auch die beste Vorbereitung darauf, KI später kritisch zu nutzen.' }
        ] },
        { kind: 'p', mt: true, html: 'Für Eltern heißt das nicht, dass KI verboten oder gefährlich wäre. Es heißt nur: Mit zwölf ist der richtige Moment, die Grundlagen selbst zu verstehen, bevor ein Werkzeug sie einem abnimmt. Wer selbst einmal eine Schleife gebaut hat, merkt später schneller, wenn eine KI-Antwort nicht stimmt.' }
      ]
    },
    {
      id: 'einstieg',
      eyebrow: 'Der richtige Anfang',
      h2: 'Scratch oder Python: womit fängt man mit 12 an?',
      lede: 'Mit zwölf sind Kinder alt genug für eine echte Programmiersprache, aber nicht jedes Kind sollte sofort damit beginnen. Unsere Faustregel richtet sich nach dem, was Ihr Kind schon kann, nicht nach dem Geburtsdatum.',
      body: [
        { kind: 'table', numCols: [], caption: 'Unser Einstieg je nach Vorwissen (unsere Empfehlung)', head: ['Ihr Kind', 'Wir beginnen mit', 'Nach etwa drei Monaten'], rows: [
          ['hat noch nie programmiert', 'Scratch, damit Schleife und Bedingung sichtbar werden', 'erste Python-Programme mit Turtle-Grafik'],
          ['kennt Scratch aus der Schule', 'Python, mit denselben Ideen in Textform', 'eigene kleine Spiele in Python'],
          ['tippt sicher und liest gern', 'Python und parallel HTML', 'eine eigene Webseite und ein Konsolenspiel'],
          ['liebt Knobelaufgaben', 'Python mit Rätseln und Zahlenspielen', 'erste Aufgaben im Stil der Informatik-Wettbewerbe']
        ] },
        { kind: 'p', mt: true, html: 'Der Schritt von Blöcken zu Text ist für viele Zwölfjährige der eigentliche Sprung. In Scratch kann man keinen Tippfehler machen, in Python schon. Ein vergessener Doppelpunkt oder eine falsche Einrückung führt zu einer Fehlermeldung, und genau dort hilft ein Mentor mehr als jedes Video: Er zeigt, wie man die Meldung liest, statt sie wegzuklicken.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Erst laut denken.</strong> Bevor Ihr Kind tippt, beschreibt es dem Mentor in einfachen Worten, was das Programm tun soll.',
          '<strong>Klein anfangen.</strong> Ein Programm mit drei Zeilen, das läuft, ist mehr wert als eines mit dreißig, das nicht läuft.',
          '<strong>Voraussagen, dann starten.</strong> Ihr Kind sagt vorher, was erscheinen wird, und vergleicht danach.',
          '<strong>Eine Sache ändern.</strong> Beim nächsten Versuch wird genau eine Zeile verändert, damit klar bleibt, woran es lag.'
        ] }
      ]
    },
    {
      id: 'beispiel',
      tint: 'tint',
      eyebrow: 'Ein erstes Python-Programm',
      h2: 'Wie viele Versuche braucht man, um eine Zahl von 1 bis 100 zu erraten?',
      lede: 'Höchstens sieben, wenn man klug rät. Das folgende Beispiel ist unser eigenes und eine typische Stunde für Zwölfjährige: Der Computer denkt sich keine Zahl aus, er errät eine. Bei jedem Tipp erfährt er nur "zu klein" oder "zu groß", und er halbiert jedes Mal den Bereich, der noch übrig ist.',
      body: [
        { kind: 'code', label: 'Klug raten: immer die Mitte nehmen', lang: 'Python', code: PY, note: 'Ausgabe, von uns mit Python 3 ausgeführt: <code>[50, 25, 37]</code>, dann <code>[50, 75, 88, 94, 97, 99, 100]</code>, dann <code>7</code>. Die Zahl 37 ist nach drei Tipps gefunden, die 100 nach sieben, und keine Zahl zwischen 1 und 100 braucht mehr als sieben.' },
        { kind: 'table', mt: true, numCols: [0, 1, 2, 3], caption: 'Was rate(37) Schritt für Schritt tut', head: ['Versuch', 'unten', 'oben', 'Tipp', 'Antwort'], rows: [
          ['1', '1', '100', '50', 'zu groß, also oben = 49'],
          ['2', '1', '49', '25', 'zu klein, also unten = 26'],
          ['3', '26', '49', '37', 'getroffen']
        ] },
        { kind: 'code', label: 'Zum Vergleich: einfach von 1 an hochzählen', lang: 'Python', code: NAIV, note: 'Ausgabe: <code>37 100</code>. Wer der Reihe nach rät, braucht für die 37 genau 37 Versuche und für die 100 sogar hundert. Beide Programme haben wir selbst ausgeführt.' },
        { kind: 'p', mt: true, html: 'Die Idee dahinter heißt binäre Suche, auf Englisch <em>binary search</em>, und sie steckt in vielen Programmen, die in großen Listen suchen. Für Zwölfjährige ist sie ideal, weil man sie erst als Spiel mit einem Partner ausprobieren und danach in wenigen Zeilen programmieren kann. Die Frage, warum es genau sieben sind, führt direkt zur Mathematik: Nach sieben Halbierungen ist von hundert Zahlen nur noch eine übrig.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Spielen Sie es zuerst zu zweit.</strong> Eine Person denkt sich eine Zahl, die andere rät und darf nur "zu klein" oder "zu groß" hören.',
          '<strong>Zählen Sie die Versuche.</strong> Wer mehr als sieben braucht, hat nicht immer die Mitte genommen.',
          '<strong>Ändern Sie den Bereich.</strong> Mit <code>oben=1000</code> fragt Ihr Kind, wie viele Versuche jetzt höchstens nötig sind, und prüft die Vermutung mit dem Programm.'
        ] }
      ]
    },
    {
      id: 'wettbewerbe',
      eyebrow: 'Wettbewerbe in Klasse 6 und 7',
      h2: 'Welche Informatik-Wettbewerbe passen zu 12-Jährigen?',
      lede: 'Zwei bundesweite Wettbewerbe der Bundesweiten Informatikwettbewerbe (BWINF) sind für dieses Alter wie gemacht. Beide laufen über die Schule: Eine Lehrkraft meldet sich als Koordinatorin oder Koordinator an und meldet danach die Schülerinnen und Schüler an.',
      body: [
        { kind: 'table', numCols: [], caption: 'Zwei Wettbewerbe für Klasse 6 und 7, laut BWINF', head: ['Wettbewerb', 'Für Klasse 7', 'Termine'], rows: [
          ['Informatik-Biber', '15 Aufgaben in 40 Minuten (Klasse 5 und 6: zwölf Aufgaben in 35 Minuten)', 'Biberwochen 2026 vom 9. bis 20. November 2026'],
          ['Jugendwettbewerb Informatik, 1. Runde', 'Level Silber, empfohlen für Klasse 7 bis 9: vier Aufgaben in 40 Minuten', 'Die 1. Runde 2026 lief vom 23. Februar bis 8. März 2026']
        ] },
        { kind: 'source', html: 'Quelle: Bundesweite Informatikwettbewerbe, Seiten zum Informatik-Biber, zu den Biberwochen 2026 und zum Jugendwettbewerb Informatik, gelesen am 2. November 2026. Modern Age Coders ist mit BWINF nicht verbunden. Die Aufgaben früherer Jahre stellt BWINF selbst zum Üben bereit; wir verwenden im Unterricht nur eigene Aufgaben.' },
        { kind: 'p', mt: true, html: 'Für den Jugendwettbewerb hat BWINF ab 2026 ein Levelsystem eingeführt: Bronze, Silber und Gold stehen allen offen, die Empfehlung nach Klassen ist nur eine Orientierung. Ein Zwölfjähriger, der schon sicher mit Schleifen umgeht, darf also auch Gold versuchen. In unserem Kurs zu den Informatik-Wettbewerben üben wir mit selbst geschriebenen Aufgaben, die dieselbe Art des Denkens trainieren.' }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Wann findet der Unterricht für Ihr Kind statt?',
      lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
      body: [
        { kind: 'table', numCols: [], caption: 'Beispielzeiten: deutsche Zeit und indische Zeit des Mentors', head: ['Deutsche Zeit', 'Indien bis 27. März 2027 (MEZ)', 'Indien ab 28. März 2027 (MESZ)'], rows: [
          ['14:45', '19:15', '18:15'],
          ['16:15', '20:45', '19:45'],
          ['Samstag 11:30', '16:00', '15:00']
        ] },
        { kind: 'source', html: 'Deutschland rechnet im Winter mit MEZ (UTC+1) und im Sommer mit MESZ (UTC+2); so regelt es das Einheiten- und Zeitgesetz. Umgestellt wurde zuletzt am 25. Oktober 2026, die nächste Sommerzeit startet am 28. März 2027. Für Indien gilt das ganze Jahr UTC+5:30, der Vorsprung beträgt also viereinhalb Stunden im Winter und dreieinhalb im Sommer. Die Zeiten oben sind Beispiele, keine festen Gruppentermine.' },
        { kind: 'p', mt: true, html: 'Viele Familien legen die Stunde direkt nach dem Mittagessen oder vor dem Sport, damit sie nicht mit Hausaufgaben kollidiert. Bei der Buchung sehen Sie alle Zeiten in Ihrer eigenen Zeitzone.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Woran Sie merken, dass Ihr Kind vorankommt',
    lede: 'Unsere eigenen Stufen für Kinder, die mit etwa zwölf Jahren beginnen.',
    table: { caption: 'Vier Stufen für den Einstieg ab 12 (unsere)', head: ['Stufe', 'Typische Dauer', 'Ihr Kind kann'], rows: [
      ['1. Abläufe bauen', 'erste Wochen', 'ein kleines Spiel in Scratch mit Schleife und Bedingung bauen'],
      ['2. Text statt Blöcke', 'nach etwa drei Monaten', 'dieselben Ideen in Python schreiben und Fehlermeldungen lesen'],
      ['3. Eigene Funktionen', 'nach etwa sechs Monaten', 'ein Problem in Funktionen zerlegen, wie beim Zahlenraten'],
      ['4. Eigenes Projekt', 'nach etwa einem Jahr', 'ein Projekt von der Idee bis zum fertigen Programm planen und erklären']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Fragen Sie nach der Stunde nicht nur, wie es war, sondern lassen Sie sich das Programm zeigen. Wer es erklären kann, hat es verstanden.',
      'Einmal im Monat berichten wir Ihnen kurz, woran Ihr Kind gearbeitet hat und welches Thema ansteht.'
    ] },
    right: { h3: 'Für Ihr Kind', ps: [
      'Fehlermeldungen sind keine Strafe, sondern Hinweise. Die wichtigste Zeile steht meistens ganz unten.',
      'Wenn ein Programm läuft, ändern Sie eine Zahl und schauen Sie, was passiert. So lernt man am schnellsten.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse für Kinder zwischen 11 und 13',
    lede: 'Alle live, auf Englisch, mit demselben Mentor jede Woche, in der Gruppe oder einzeln.',
    bands: [
      { num: 'I', h3: 'Mit Blöcken und Spielen', sub: '8 bis 12 Jahre', courses: [
        { code: 'PLE / BLOCK / 01', slug: 'scratch-programming-complete-course', title: 'Scratch von Anfang an', blurb: 'Eigene Spiele und Animationen, ohne Tippfehler.' },
        { code: 'PLE / BLOCK / 02', slug: 'game-development-masterclass-for-kids', title: 'Spiele entwickeln', blurb: 'Scratch, Roblox und Minecraft im Vergleich.' },
        { code: 'PLE / BLOCK / 03', slug: 'block-coding-app-development-masterclass', title: 'Apps mit Blöcken', blurb: 'Eine erste eigene App für das Smartphone.' }
      ] },
      { num: 'II', h3: 'Der Schritt zum Text', sub: '9 bis 15 Jahre', courses: [
        { code: 'PLE / TEXT / 01', slug: 'maths-through-coding', title: 'Mathematik mit Python', blurb: 'Schulmathematik in kleinen Programmen.' },
        { code: 'PLE / TEXT / 02', slug: 'kids-ai-web-development-course', title: 'Webseiten für Kinder', blurb: 'HTML, CSS und erste Schritte in JavaScript.' },
        { code: 'PLE / TEXT / 03', slug: 'ai-literacy-for-kids-course', title: 'KI verstehen', blurb: 'Wie Maschinen lernen, ganz ohne Chatbot.' }
      ] },
      { num: 'III', h3: 'Ab 13 und für Wettbewerbe', sub: '9 bis 18 Jahre', courses: [
        { code: 'PLE / WEITER / 01', slug: 'python-complete-masterclass-teens', title: 'Python für Jugendliche', blurb: 'Der vollständige Python-Kurs ab 13.' },
        { code: 'PLE / WEITER / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript für Jugendliche', blurb: 'Interaktive Webseiten und Browserspiele ab 13.' },
        { code: 'PLE / WEITER / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatik-Wettbewerbe', blurb: 'Eigene Übungsaufgaben für Biber und Jugendwettbewerb.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Ablauf',
    h2: 'So läuft eine Woche im Kurs ab',
    lede: 'Jede Woche gibt es zwei Live-Termine von je sechzig Minuten, immer mit demselben Mentor. Es gibt keine vorab aufgezeichneten Lektionen, und Ihr Kind kann jederzeit nachfragen.',
    slots: [
      { time: 'Nach der Schule', l: 'Frühe Nachmittage, wenn die Hausaufgaben erledigt sind.' },
      { time: 'Samstag', l: 'Späte Vormittage, ohne Schulstress.' },
      { time: 'Einzeln', l: 'Ein fester Termin, den Sie mit dem Mentor vereinbaren.' }
    ],
    cells: [
      { h3: 'Ein Mentor', p: 'Derselbe Mensch jede Woche, der Ihr Kind gut kennenlernt.' },
      { h3: 'Langsames Englisch', p: 'Kurze Sätze, Wiederholungen und viele Beispiele auf dem Bildschirm.' },
      { h3: 'Selbst tippen', p: 'Ihr Kind schreibt jede Zeile, nichts wird kopiert.' },
      { h3: 'Ohne Chatbot', p: 'Unter 13 Jahren arbeiten wir ohne KI-Assistenten.' },
      { h3: 'Kleine Projekte', p: 'Jede Woche ein Programm, das man zeigen kann.' },
      { h3: 'Rückmeldung', p: 'Kurze Berichte für die Eltern nach den Stunden.' }
    ]
  },

  projectsH2: 'Was Lernende gebaut haben',
  projectsLede: 'Aus dem ersten Zahlenraten wird mit der Zeit ein eigenes Spiel oder eine Webseite. Eine Auswahl finden Sie unten, mehr auf <a class="ag-inline-link" href="/student-labs">Student labs</a> (auf Englisch).',
  reviewsLede: 'Bewertungen von Eltern und Lernenden bei Google, im englischen Original belassen.',

  fees: {
    h2: 'Kosten für Familien in Deutschland',
    lede: 'Sie zahlen monatlich, und ein Monat enthält acht Live-Stunden. Auf dieser Seite sehen Sie die Beträge in Euro, umgerechnet zum Referenzkurs der Europäischen Zentralbank. Abgebucht wird in US-Dollar, die Umrechnung übernimmt Ihre Bank, deshalb kann der Betrag auf dem Konto um wenige Cent abweichen.',
    free: ['Eine kostenlose Probestunde', 'Ein kurzes Gespräch über das Vorwissen', 'Keine Zahlungsdaten nötig'],
    group: ['Fünfzehn bis zwanzig Kinder ähnlichen Alters', 'Derselbe Mentor jede Woche', 'Zwei Stunden pro Woche', 'Monatlich kündbar'],
    one: ['Ihr Kind allein mit dem Mentor', 'Tempo und Themen nach Ihrem Kind', 'Termine nach Absprache']
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    h2: 'Programmieren lernen ab 12: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein, der Unterricht ist immer live und ausschließlich auf Englisch. Für Zwölfjährige ist das meist ein Vorteil: Sie üben Programmieren und Englisch zugleich, und die Befehle in Python wie print, if oder while sind ohnehin englische Wörter. Die Mentoren sprechen langsam, wiederholen geduldig und passen sich an Tempo und Aussprache Ihres Kindes an.' },
      { q: 'Ist 12 ein gutes Alter, um mit dem Programmieren anzufangen?', a: 'Ja. Mit zwölf können die meisten Kinder sicher genug lesen und tippen, um eine echte Programmiersprache wie Python zu lernen, und sie denken schon abstrakt genug für Schleifen und Funktionen. Wer noch nie programmiert hat, beginnt bei uns für einige Wochen mit Scratch und wechselt dann zu Python.' },
      { q: 'Braucht mein Kind Vorkenntnisse?', a: 'Nein. Es reicht, dass Ihr Kind mit Maus und Tastatur umgehen kann. In der kostenlosen Probestunde findet der Mentor heraus, womit Ihr Kind am besten beginnt.' },
      { q: 'Hat mein Kind mit 12 schon Informatik in der Schule?', a: 'Das hängt vom Bundesland ab. Laut Informatik-Monitor 2026/27 ist Informatik in Nordrhein-Westfalen in Klasse 5 und 6 Pflicht, in Sachsen von Klasse 7 bis 10, in Niedersachsen erst in Klasse 9 und 10. In Hessen gibt es keinen verbindlichen Informatikunterricht, am Gymnasium nur ein Wahlangebot ab Klasse 7.' },
      { q: 'Darf mein 12-jähriges Kind ChatGPT benutzen?', a: 'Laut den Nutzungsbedingungen von OpenAI muss man mindestens 13 Jahre alt sein, und unter 18 braucht man die Erlaubnis der Eltern. Für Microsoft Copilot gilt ebenfalls ein Mindestalter von 13 Jahren. In unserem Unterricht für Kinder unter 13 setzen wir keine KI-Chatbots ein.' },
      { q: 'Welches Gerät braucht mein Kind?', a: 'Einen Laptop oder Computer mit Tastatur, eine stabile Internetverbindung und am besten ein Headset. Ein Tablet reicht für Scratch, für Python ist eine echte Tastatur deutlich angenehmer.' },
      { q: 'Zu welchen Uhrzeiten wird unterrichtet?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. Wer um 16:15 Uhr deutscher Zeit beginnt, trifft den Mentor im Winter um 20:45 Uhr indischer Zeit.' },
      { q: 'Gibt es eine Gruppe nur für Kinder in diesem Alter?', a: 'Ja. Die Gruppen haben fünfzehn bis zwanzig Kinder ähnlichen Alters und ähnlichen Vorwissens. Wer lieber allein lernt oder ein bestimmtes Ziel hat, wählt den Einzelunterricht.' },
      { q: 'Was kostet der Kurs, und wie wird bezahlt?', a: 'Sie sehen die Monatsgebühr hier in Euro, berechnet mit dem Referenzkurs der EZB. Belastet wird Ihr Konto in US-Dollar, und den Wechsel erledigt Ihre Bank. Die erste Stunde ist kostenlos.' },
      { q: 'Kann mein Kind bei Informatik-Wettbewerben mitmachen?', a: 'Ja, über die Schule. Beim Informatik-Biber 2026, der vom 9. bis 20. November 2026 läuft, lösen Jugendliche ab Klasse 7 laut BWINF 15 Aufgaben in 40 Minuten. Eine Lehrkraft meldet die Klasse an. Wir bereiten mit eigenen Übungsaufgaben darauf vor und sind mit BWINF nicht verbunden.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weitere Seiten',
    h2: 'Weiterlesen',
    lede: 'Mehr für Familien in Deutschland, teils auf Deutsch, teils auf Englisch.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Unsere Übersicht für ganz Deutschland.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Hilfe im Schulfach von Klasse 5 bis 13.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by state', p: 'Alle 16 Länder im Vergleich, auf Englisch.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Think, not copy AI', p: 'Warum wir Denken vor Kopieren stellen.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'So sieht eine Live-Stunde aus.' },
      { href: '/courses', label: 'All courses', p: 'Jeder Lehrplan auf einer Seite.' }
    ]
  },

  start: {
    h2: 'Eine kostenlose Probestunde vereinbaren',
    lede: 'In der Probestunde lernt der Mentor Ihr Kind kennen, fragt nach, was es schon ausprobiert hat, und schreibt mit ihm ein erstes kleines Programm. Danach schlagen wir den passenden Kurs vor.',
    readFirst: 'Zum Vorab-Lesen: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> erklärt den Live-Unterricht, <a class="ag-inline-link" href="/courses">All courses</a> zeigt alle Lehrpläne (beide auf Englisch).',
    note: 'Unterrichtet wird live über Video, von Mentoren in Indien und nur auf Englisch. Per WhatsApp antworten wir am schnellsten.',
    formNote: 'Kostenlos und ohne Verpflichtung.'
  },

  footer: {
    cols: [
      { h4: 'Für 12-Jährige', links: [
        { href: '/courses/python-ai-kids-masterclass', label: 'Python und KI für Kinder' },
        { href: '/courses/informatik-companion-course-klasse-5-10', label: 'Informatik Companion' },
        { href: '/courses/html-css-course-for-beginners-build-real-websites', label: 'HTML und CSS' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik nach Land' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Immer die Mitte nehmen'
  },

  personalityCss: `
.ag-root.ag-ple .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-ple .ag-capsule { border-left-width: 5px; }
.ag-root.ag-ple .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-ple .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-ple .ag-table td { hyphens: auto; }
`,

  dossier: {
    curriculumAuthority: 'GI Informatik-Monitor 2026/27 Land pages (Bayern, Berlin, Hamburg, Hessen, Niedersachsen, NRW, Saarland, Sachsen, Sachsen-Anhalt, Schleswig-Holstein, Thüringen); mpfs JIM-Studie 2025; Microsoft Copilot young-people page; vendor terms recorded in content/ai-tool-age-audit.json; BWINF Biber and Jugendwettbewerb pages; Einheiten- und Zeitgesetz. Read 2 and 3 November 2026. Example code our own.',
    localProject: 'Klug raten: an original Python binary search that guesses a number from 1 to 100; rate(37) gives [50, 25, 37], rate(100) gives seven guesses, and no number needs more than 7, while counting up from 1 needs 37 and 100 guesses; both run with python3 -I. Lesson family: halve what is left (binary search).',
    requiredMentions: ['[50, 25, 37]', '[50, 75, 88, 94, 97, 99, 100]', '166 Minuten Smartphone am Tag', '69 Prozent haben es ausprobiert', 'Noch Grundschule (Klasse 1 bis 6)', 'neuer Lehrplan für Klasse 7 seit 2026/27', 'Pflichtfach seit 2026/27', 'Level Silber, empfohlen für Klasse 7 bis 9', 'Immer die Mitte nehmen'],
    sources: [
      { claim: 'Use of ChatGPT, Meta AI, Copilot and DeepL by 12 to 13 year olds; screen time 166 minutes; parental limits 61 percent; survey method.', url: 'https://mpfs.de/studie/jim-studie-2025/' },
      { claim: 'Copilot minimum age 13, higher in some countries.', url: 'https://support.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-young-people' },
      { claim: 'Berlin Grundschule to grade 6 and ITG in grade 7 or 8.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/berlin' },
      { claim: 'Thüringen MBI hours and new grade 7 curriculum 2026/27.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/thueringen' },
      { claim: 'Sachsen-Anhalt compulsory Informatik grades 5 to 10 at Sekundar-, Gemeinschafts- und Gesamtschulen since 2026/27.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/sachsen-anhalt' },
      { claim: 'Biber task counts and 2026 dates; Jugendwettbewerb levels.', url: 'https://bwinf.de/biber/2026/' }
    ],
    rejectedClaims: [
      'German-language teaching: English only, said in the capsule and the FAQ.',
      'Recommending ChatGPT, Gemini or Copilot to under-13s: refused; vendor age floors are stated instead.',
      'Gender figures from the JIM-Studie: left out by rule.',
      'Any grade or school-result promise: not made; the school course is the one that counts.',
      'Scratch age range from scratch.mit.edu: the page is script-rendered and gave no text, so not stated.'
    ]
  }
};
