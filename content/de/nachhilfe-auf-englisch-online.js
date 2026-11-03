'use strict';
// Nachhilfe auf Englisch online (ag- German-language door, Germany cluster P3 row DE078), written 2026-11-03.
// Owner 2026-11-02: classes are live, in English only, with mentors (based in India) who match the learner's pace and
// accent; the capsule says "auf Englisch". Formal "Sie" throughout. Pages show euro; checkout charges USD.
// Spine: maths and Informatik tutoring taught in English, for pupils at German schools (including bilingual streams) and
// at international schools in Germany. Which school system the child is in decides the syllabus: the quotable table maps
// AGIS and KMK facts on international qualifications against German ones. One original lesson where English-language
// maths and German maths part ways: significant figures against decimal places, plus a binary floating-point trap for
// Informatik. Deliberately not the Dreisatz and Leitideen spine of mathe-nachhilfe-auf-englisch.
// Sources (FACTS.md, ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/, facts read raw on 2 Nov 2026):
//  245 (AGIS homepage: 23 member schools; 246 notes the school finder shows 20), 247 (all AGIS members are authorised IB
//  schools), 248 (IB Diploma with prescribed subject combinations equivalent to the Abitur), 249 (IB MYP or IGCSE give a
//  qualification equivalent to the Mittlere Reife), 250 (children from up to 65 nations; English the common teaching
//  language), 252 (KMK recognition of the IB Diploma: agreement of 10.3.1986 as amended 15.6.2023), 255 (five European
//  Schools), 256 (Berlin SESB: bilingual streams at 33 schools, about 6,000 pupils), 30 (IQB pools for maths since 2017),
//  31 (common Abitur dates in maths since 2022), 113 (VERA-8 includes maths), 64 (NRW ZP10 in German, maths and English),
//  97 (about 15 percent take Informatik in the Qualifikationsphase). Time: EinhZeitG para 4; summer time from 28 March 2027.
// Our own: runden.py (scratchpad de/w/GC/nen, python3 -I 3.14): "   3.14159 | 2 d.p.: 3.14     | 3 s.f.: 3.14";
// "  0.004567 | 2 d.p.: 0.0      | 3 s.f.: 0.00457"; "   12345.6 | 2 d.p.: 12345.6  | 3 s.f.: 12300.0";
// "    0.0809 | 2 d.p.: 0.08     | 3 s.f.: 0.0809"; "2.67 | gespeichert als 2.67499999999999982236".
// Lesson family: significant figures are not decimal places; count from the first non-zero digit.

const { DE } = require('../../scripts/nl/lib/market-de');

const PY = [
  'from math import floor, log10',
  '',
  'def stellen(x, n):',
  '    # auf n Nachkommastellen runden (decimal places)',
  '    return round(x, n)',
  '',
  'def ziffern(x, n):',
  '    # auf n gültige Ziffern runden (significant figures)',
  '    return round(x, n - 1 - floor(log10(abs(x))))',
  '',
  'werte = [3.14159, 0.004567, 12345.6, 0.0809]',
  'for x in werte:',
  "    print(f'{x:>10} | 2 d.p.: {stellen(x, 2):<8} | 3 s.f.: {ziffern(x, 3)}')",
  '',
  '# Eine Falle für Informatik: Kommazahlen sind im Rechner binär gespeichert',
  "print(round(2.675, 2), '| gespeichert als', f'{2.675:.20f}')"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'Nachhilfe auf Englisch online' },
  slug: 'nachhilfe-auf-englisch-online',
  code: 'nen',
  accent: '#7E5104',
  accentRationale: 'Nachhilfe auf Englisch online: a dark ochre #7E5104, the colour of a well-used exercise book cover, warm but clearly apart from the brick red and moss green doors; contrast 5.56 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Nachhilfe auf Englisch online',
  title: 'Nachhilfe auf Englisch online: Mathe und Informatik, live',
  description: 'Nachhilfe auf Englisch online in Mathe und Informatik: für deutsche, bilinguale und internationale Schulen, von Klasse 5 bis Abitur, IB und IGCSE. Live, mit Mentor.',
  ogDescription: 'Mathe- und Informatik-Nachhilfe auf Englisch für Schülerinnen und Schüler in Deutschland: welcher Lehrplan zu welcher Schule gehört, was IB und IGCSE in Deutschland gelten, und warum "3 significant figures" nicht drei Nachkommastellen heißt.',
  twitterDescription: 'Nachhilfe auf Englisch in Mathe und Informatik, live online: für deutsche und internationale Schulen.',
  pageName: 'Nachhilfe auf Englisch online',
  webPageDescription: 'Ein Leitfaden für Familien in Deutschland, die Nachhilfe in Mathematik oder Informatik auf Englisch suchen: welche Schulformen und Abschlüsse es gibt, von bilingualen Zügen bis zu internationalen Schulen mit IB und IGCSE, was diese Abschlüsse laut AGIS und KMK in Deutschland gelten, und eine eigene Übung zu gültigen Ziffern und Nachkommastellen.',
  courseDescription: 'Live-Online-Nachhilfe in Mathematik und Informatik in ganz Deutschland, ausschließlich auf Englisch: für Klasse 5 bis 13 an deutschen Schulen und für IB, IGCSE und AP an internationalen Schulen, mit einem festen Mentor, in der Gruppe oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Nachhilfe auf Englisch',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#schulen', label: 'Schulen' },
    { href: '#faecher', label: 'Fächer' },
    { href: '#runden', label: 'Runden' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Deutschland &middot; Mathematik und Informatik &middot; Klasse 5 bis 13, IB, IGCSE',
  h1: 'Nachhilfe auf Englisch online: Mathe und Informatik',
  lede: 'Manche Kinder lernen Mathematik auf Deutsch und wünschen sich die Erklärung trotzdem auf Englisch, weil es ihre Familiensprache ist. Andere besuchen eine internationale Schule und brauchen Hilfe in IB oder IGCSE. Wieder andere wechseln zwischen beiden Welten. Diese Seite ordnet, welcher Lehrplan zu welcher Schule gehört, was die Abschlüsse in Deutschland gelten, und zeigt eine Stelle, an der englischsprachige und deutsche Mathematik verschieden zählen. Unterricht auf Englisch, mit Mentoren aus Indien.',
  secondaryCta: { href: '#schulen', label: 'Welche Schule, welcher Lehrplan?' },
  wa: 'Hallo Modern Age Coders, wir suchen Nachhilfe auf Englisch in Mathe oder Informatik für unser Kind in Deutschland. Können wir eine kostenlose Probestunde buchen?',
  heroNote: 'Unterricht auf Englisch, mit Mentoren aus Indien &middot; live online seit 2020 &middot; über 10.000 Lernende weltweit',
  spec: [
    ['Fächer', 'Mathematik, Informatik'],
    ['Schulen', 'Deutsche, bilinguale, internationale'],
    ['Lehrpläne', 'Land, Abitur, IB, IGCSE, AP'],
    ['Gruppe', 'Fünfzehn bis zwanzig, oder einzeln'],
    ['Mentor', 'Fest, live per Video aus Indien'],
    ['Probestunde', 'Kostenlos, ohne Karte']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Unsere Nachhilfe auf Englisch online, bei Modern Age Coders live gehalten, gibt es in Mathematik und Informatik, ausschließlich auf Englisch, mit Mentoren aus Indien. Sie richtet sich an Schülerinnen und Schüler in ganz Deutschland: an deutschen und bilingualen Schulen von Klasse 5 bis zum Abitur und an internationalen Schulen mit IB, IGCSE oder AP. Der Mentor arbeitet mit dem Material der Schule, in einer Gruppe von fünfzehn bis zwanzig oder im Einzelunterricht.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Kurse für Nachhilfe auf Englisch',
    lede: 'Einer für das deutsche Mathe-Abitur, einer für IB-Mathematik an internationalen Schulen, einer für Informatik in der Oberstufe.',
    items: [
      { course: 'abitur-mathematics-course-in-english', code: 'NEN / 01', title: 'Abitur Mathematik auf Englisch', alt: 'Kursbild Abitur Mathematik in English, Leistungskurs und Grundkurs', note: 'Für die Oberstufe an deutschen Schulen. Analysis, analytische Geometrie und Stochastik für Leistungs- und Grundkurs, erklärt auf Englisch.' },
      { course: 'ib-mathematics-aa-ai-masterclass', code: 'NEN / 02', title: 'IB Mathematik AA und AI', alt: 'Kursbild IB Mathematics AA und AI, SL und HL', note: 'Für internationale Schulen. Analysis and Approaches oder Applications and Interpretation, auf SL oder HL, mit Unterstützung bei der IA.' },
      { course: 'informatik-abitur-course-java-python', code: 'NEN / 03', title: 'Informatik Oberstufe und Abitur', alt: 'Kursbild Informatik Abitur mit Java und Python', note: 'Oberstufe, etwa 16 bis 19. Klassen und Objekte, Listen und Bäume, SQL, dazu Code auf Papier lesen, wahlweise Java oder Python.' }
    ]
  },

  sections: [
    {
      id: 'schulen',
      eyebrow: 'Welche Schule, welcher Lehrplan',
      h2: 'Welche Nachhilfe auf Englisch passt zu welcher Schule?',
      lede: 'Das hängt davon ab, nach welchem Lehrplan Ihr Kind lernt. In Deutschland gibt es neben den Schulen der Länder bilinguale Züge, Europäische Schulen und internationale Schulen. Die Tabelle fasst zusammen, was offizielle Stellen über die Abschlüsse schreiben.',
      body: [
        { kind: 'table', numCols: [], caption: 'Schulwege mit Englisch in Deutschland und was die Abschlüsse gelten', head: ['Schulweg', 'Was die Quelle sagt', 'Quelle'], rows: [
          ['Internationale Schulen der AGIS', 'Alle Mitglieder sind autorisierte IB-Schulen; Englisch ist die gemeinsame Unterrichtssprache, Kinder aus bis zu 65 Nationen', 'AGIS'],
          ['IB Diploma', 'Mit vorgeschriebenen Fächerkombinationen dem deutschen Abitur gleichwertig', 'AGIS; KMK-Vereinbarung vom 10.3.1986 in der Fassung vom 15.6.2023'],
          ['IB MYP oder IGCSE', 'Führt zu einem Abschluss, der der Mittleren Reife entspricht', 'AGIS'],
          ['Staatliche Europa-Schule Berlin', 'Bilinguale Züge an 33 Schulen mit etwa 6.000 Schülerinnen und Schülern', 'KMK, Eurydice-Dossier'],
          ['Europäische Schulen', 'Fünf Schulen in Deutschland mit europäischem Unterrichtsmodell', 'KMK, Eurydice-Dossier'],
          ['Gymnasium und andere Schulen der Länder', 'Abitur in Mathematik mit gemeinsamem Aufgabenpool seit 2017 und weitgehend gemeinsamen Prüfungsterminen seit 2022', 'IQB; KMK']
        ] },
        { kind: 'source', html: 'Quellen: Arbeitsgemeinschaft der Internationalen Schulen in Deutschland (AGIS), Startseite und Seite "Wer wir sind"; KMK, Eurydice-Dossier zum deutschen Bildungssystem; IQB zum Abituraufgabenpool; gelesen am 2. November 2026. Die AGIS nennt auf ihrer Startseite 23 Mitgliedsschulen, die Schulsuche auf derselben Website zeigt 20. Mit der AGIS, der KMK und dem IQB sind wir nicht verbunden.' },
        { kind: 'two', mt: true,
          leftH3: 'An einer deutschen Schule',
          left: [
            'Ihr Kind lernt nach dem Lehrplan seines Landes, und die Nachhilfe folgt diesem Lehrplan, nur eben auf Englisch erklärt. Das hilft Kindern, die zu Hause Englisch sprechen, und Kindern, die ihr Englisch nebenbei verbessern wollen.',
            'Fachwörter bekommen beide Namen: Der Mentor sagt "derivative" und schreibt "Ableitung" dazu, damit Ihr Kind in der Klassenarbeit das deutsche Wort parat hat.'
          ],
          rightH3: 'An einer internationalen Schule',
          right: [
            'Hier ist Englisch ohnehin die Unterrichtssprache, und die Nachhilfe arbeitet mit den Aufgabenformaten von IB, IGCSE oder AP. Viele Familien, die zwischen einer internationalen und einer deutschen Schule wechseln, brauchen beides: die englischen Formate und den Anschluss an den deutschen Lehrplan.',
            'Ob ein bestimmter Abschluss in Ihrem Fall als gleichwertig gilt, entscheiden die zuständigen Stellen; wir beraten dazu nicht und vergeben selbst keine Abschlüsse.'
          ] }
      ]
    },
    {
      id: 'faecher',
      eyebrow: 'Fächer',
      h2: 'Was deckt Nachhilfe auf Englisch in Mathe und Informatik ab?',
      lede: 'Unsere Übersicht nach Stufe. Ausgangspunkt jeder Stunde sind die Unterlagen, mit denen Ihr Kind gerade in der Schule arbeitet.',
      body: [
        { kind: 'table', numCols: [], caption: 'Themen der Nachhilfe nach Stufe und Schulweg (unsere Einteilung)', head: ['Stufe', 'Deutsche Schule', 'Internationale Schule'], rows: [
          ['Klasse 5 bis 7', 'Brüche, Dezimalzahlen, Prozent, erste Geometrie; Informatik mit Scratch, wo sie Pflicht ist', 'MYP Mathematics, Cambridge Lower Secondary'],
          ['Klasse 8 bis 10', 'Funktionen, Gleichungen, Wahrscheinlichkeit; VERA-8, MSA, ZP10; Python', 'IGCSE Mathematics und Computer Science, MYP'],
          ['Oberstufe', 'Analysis, analytische Geometrie, Stochastik; Informatik mit Java oder Python', 'IB Mathematics AA oder AI, IB Computer Science, AP'],
          ['Prüfungsjahr', 'Abitur mit Aufgaben im Stil des gemeinsamen Pools', 'IB-Prüfungen, IA-Begleitung, IGCSE-Papers']
        ] },
        { kind: 'p', mt: true, html: 'Mathematik steht in Deutschland an vielen Stellen auf dem Prüfstand: in den Vergleichsarbeiten VERA-8, in Nordrhein-Westfalen in den Zentralen Prüfungen am Ende der Klasse 10 und im Abitur mit dem gemeinsamen Aufgabenpool der Länder. Informatik ist dagegen seltener Prüfungsfach: Nach dem aktuellen Informatik-Monitor der GI (Ausgabe 2026/27) wählen bundesweit nur rund 15 Prozent in der Qualifikationsphase das Fach. Wer es wählt, hat oft kaum Hilfe in der Nähe.' },
        { kind: 'p', html: 'In der Nachhilfe auf Englisch arbeiten wir deshalb in beiden Fächern mit den Aufgaben der Schule: Arbeitsblätter, alte Klassenarbeiten, Übungs-Papers. Prüfungsaufgaben der Organisatoren geben wir nicht als eigene aus; was wir selbst schreiben, kennzeichnen wir als unsere Übung.' }
      ]
    },
    {
      id: 'runden',
      tint: 'tint',
      eyebrow: 'Eine Übung aus der Nachhilfe',
      h2: 'Was heißt "give your answer to 3 significant figures"?',
      lede: 'Auf drei gültige Ziffern runden, und das ist etwas anderes als drei Nachkommastellen. In englischsprachigen Aufgaben, etwa bei IGCSE oder IB, steht oft "significant figures", in deutschen Aufgaben meist "auf zwei Nachkommastellen". Kinder, die zwischen beiden Welten wechseln, verlieren hier Punkte, obwohl sie richtig gerechnet haben. Die Übung und der Code sind unsere eigenen.',
      body: [
        { kind: 'code', label: 'Nachkommastellen gegen gültige Ziffern', lang: 'Python', code: PY, note: 'Ausgabe unseres Laufs mit Python 3.14:<br><code>   3.14159 | 2 d.p.: 3.14     | 3 s.f.: 3.14</code><br><code>  0.004567 | 2 d.p.: 0.0      | 3 s.f.: 0.00457</code><br><code>   12345.6 | 2 d.p.: 12345.6  | 3 s.f.: 12300.0</code><br><code>    0.0809 | 2 d.p.: 0.08     | 3 s.f.: 0.0809</code><br><code>2.67 | gespeichert als 2.67499999999999982236</code>' },
        { kind: 'table', mt: true, numCols: [], caption: 'Dieselben Zahlen, zwei Arten zu runden (unsere Übung, deutsche Schreibweise mit Komma)', head: ['Zahl', 'Auf 2 Nachkommastellen', 'Auf 3 gültige Ziffern', 'Warum'], rows: [
          ['3,14159', '3,14', '3,14', 'Hier zufällig gleich'],
          ['0,004567', '0,00', '0,00457', 'Führende Nullen zählen nicht als gültige Ziffern'],
          ['12345,6', '12345,60', '12300', 'Gültige Ziffern runden auch vor dem Komma'],
          ['0,0809', '0,08', '0,0809', 'Die Null zwischen 8 und 9 zählt mit']
        ] },
        { kind: 'p', mt: true, html: 'Der Trick: Gültige Ziffern zählt man ab der ersten Ziffer, die keine Null ist. Bei 0,004567 sind das 4, 5 und 6, gerundet 0,00457. Auf zwei Nachkommastellen bleibt von derselben Zahl nur 0,00 übrig, und die ganze Information ist weg. Bei 12345,6 ist es umgekehrt: Drei gültige Ziffern ergeben 12300, die Nachkommastellen verändern gar nichts. Python zeigt die Zahl als <code>12300.0</code>, auf Papier schreibt man 12300.' },
        { kind: 'p', html: 'Die letzte Zeile ist für die Informatik gedacht. <code>round(2.675, 2)</code> ergibt in Python 2,67 und nicht 2,68, obwohl man in der Schule aufrunden würde. Der Grund steht dahinter: Der Rechner speichert 2,675 als Binärzahl, und die liegt ganz knapp darunter, bei 2,67499999999999982236. Wer in der Oberstufe Informatik hat, begegnet genau dieser Frage beim Thema Zahldarstellung.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Die Aufgabe genau lesen.</strong> "decimal places" heißt Nachkommastellen, "significant figures" heißt gültige Ziffern. Wir markieren das Wort, bevor gerechnet wird.',
          '<strong>Ab der ersten Nicht-Null zählen.</strong> Führende Nullen zählen nie, Nullen zwischen anderen Ziffern immer.',
          '<strong>Erst am Ende runden.</strong> Zwischenergebnisse behalten ihre volle Genauigkeit, gerundet wird die Antwort.',
          '<strong>Dem Rechner nicht blind trauen.</strong> Ein Taschenrechner oder Programm rundet nach eigenen Regeln. Wer weiß, warum 2,675 zu 2,67 wird, kann das in der Prüfung begründen.'
        ] }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Wann findet die Nachhilfe auf Englisch statt?',
      lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
      body: [
        { kind: 'table', numCols: [], caption: 'Drei mögliche Termine für Nachhilfe, mit der Uhrzeit des Mentors', head: ['Uhrzeit in Deutschland', 'Uhrzeit in Indien, Winter', 'Uhrzeit in Indien ab 28. März 2027'], rows: [
          ['15:35', '20:05', '19:05'],
          ['17:05', '21:35', '20:35'],
          ['Sonntag 12:30', '17:00', '16:00']
        ] },
        { kind: 'source', html: 'Zeitrechnung nach dem Einheiten- und Zeitgesetz: Deutschland hat im Winter MEZ (UTC+1) und im Sommer MESZ (UTC+2); die Umstellung zurück war am 25. Oktober 2026, die nächste nach vorn ist am 28. März 2027. Indien rechnet ohne Umstellung mit UTC+5:30, also viereinhalb Stunden später im Winter, dreieinhalb im Sommer. Beispiele, keine festen Gruppen.' },
        { kind: 'p', mt: true, html: 'Vor Klassenarbeiten, Klausuren, IB-Prüfungen oder dem Abgabetermin einer IA vereinbaren viele Familien zusätzliche Einzelstunden. Die Uhrzeiten im Buchungsformular folgen der Zeitzone Ihres Geräts.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Woran Sie sehen, dass die Nachhilfe wirkt',
    lede: 'Fünf Stufen, die wir selbst verwenden. Sie gelten für Mathematik und Informatik gleichermaßen.',
    table: { caption: 'Fünf Stufen in der Nachhilfe auf Englisch (unsere)', head: ['Stufe', 'Woran man sie erkennt', 'Typisch nach'], rows: [
      ['1. Verstehen', 'Die Erklärung des Mentors auf Englisch folgen und Rückfragen stellen', 'den ersten Stunden'],
      ['2. Benennen', 'Fachwörter in beiden Sprachen kennen, etwa derivative und Ableitung', 'einigen Wochen'],
      ['3. Selbst lösen', 'Aufgaben aus dem Schulmaterial ohne Hilfe lösen', 'zwei bis drei Monaten'],
      ['4. Genau sein', 'Rundung, Einheiten und Schreibweise wie verlangt angeben', 'etwa einem Halbjahr'],
      ['5. Begründen', 'den eigenen Lösungsweg auf Englisch oder Deutsch erklären', 'etwa einem Schuljahr']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Bitten Sie Ihr Kind, Ihnen eine gelöste Aufgabe zu erklären, in der Sprache, die ihm leichter fällt. Ein Kind, das erklären kann, hat verstanden.',
      'Nach einigen Stunden schreiben wir Ihnen ein paar Zeilen zum Stand und zu den nächsten Themen.'
    ] },
    right: { h3: 'Für die Lernenden', ps: [
      'Markieren Sie in jeder Aufgabe, wie genau die Antwort sein soll, bevor Sie rechnen.',
      'Legen Sie sich eine Liste mit Fachwörtern in beiden Sprachen an, mit einem Beispiel zu jedem.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse für Mathe und Informatik auf Englisch',
    lede: 'Jeder davon live und englischsprachig, mit einer festen Bezugsperson, als Gruppe oder als Einzelstunde.',
    bands: [
      { num: 'I', h3: 'Mathematik', sub: '10 bis 18 Jahre', courses: [
        { code: 'NEN / MATHE / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Mathematik der Mittelstufe', blurb: 'Bruchrechnung bis Geometrie, sicher und gründlich.' },
        { code: 'NEN / MATHE / 02', slug: 'igcse-mathematics-mastery', title: 'IGCSE Mathematics', blurb: 'Core und Extended für internationale Schulen.' },
        { code: 'NEN / MATHE / 03', slug: 'statistics-probability-maths-course', title: 'Statistik und Wahrscheinlichkeit', blurb: 'Für Stochastik im Abitur und im IB.' }
      ] },
      { num: 'II', h3: 'Informatik', sub: '10 bis 19 Jahre', courses: [
        { code: 'NEN / INF / 01', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'Begleitung zum Pflichtfach ab Klasse 5.' },
        { code: 'NEN / INF / 02', slug: 'igcse-computer-science-0478-course', title: 'Cambridge 0478', blurb: 'IGCSE-Informatik mit Pseudocode und Python.' },
        { code: 'NEN / INF / 03', slug: 'ib-diploma-computer-science-course', title: 'IB Computer Science', blurb: 'Der neue Lehrplan, erste Prüfung 2027.' }
      ] },
      { num: 'III', h3: 'Darüber hinaus', sub: '12 bis 18 Jahre', courses: [
        { code: 'NEN / PLUS / 01', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP CS A mit Java', blurb: 'Für Schulen mit amerikanischem Lehrplan.' },
        { code: 'NEN / PLUS / 02', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Mathe-Olympiade und Känguru', blurb: 'Knobelaufgaben, mit eigenen Übungen.' },
        { code: 'NEN / PLUS / 03', slug: 'maths-through-coding', title: 'Rechnen mit Code', blurb: 'Mathe aus der Schule als kleine Python-Programme.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Ablauf',
    h2: 'Wie die Nachhilfe auf Englisch abläuft',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Nachmittags', l: 'Nach der Schule, etwa ab 15:35 Uhr deutscher Zeit.' },
      { time: 'Sonntag', l: 'Mittags, gut vor Klausurwochen.' },
      { time: 'Einzeln', l: 'Zusätzliche Stunden vor Prüfungen und Abgaben.' }
    ],
    cells: [
      { h3: 'Schulmaterial zuerst', p: 'Arbeitsblätter, Hefte und alte Arbeiten bilden den Ausgangspunkt.' },
      { h3: 'Zwei Sprachen für Fachwörter', p: 'Englisch im Unterricht, das deutsche Wort für die Klassenarbeit dazu.' },
      { h3: 'Mathe und Informatik', p: 'Ein Mentor, der beide Fächer unterrichtet, wenn Ihr Kind beides braucht.' },
      { h3: 'Formate kennen', p: 'Abitur, IB, IGCSE und AP haben eigene Regeln; wir üben sie.' },
      { h3: 'Ein fester Mentor', p: 'Dieselbe Person, die die Schule und den Stand Ihres Kindes kennt.' },
      { h3: 'Gruppe oder einzeln', p: 'Bis zu zwanzig Gleichaltrige, mindestens fünfzehn, oder nur Ihr Kind.' }
    ]
  },

  projectsH2: 'Arbeiten unserer Lernenden',
  projectsLede: 'Ein paar Projekte aus unseren Kursen weltweit; eine längere Liste finden Sie auf <a class="ag-inline-link" href="/student-labs">Student labs</a> (auf Englisch).',
  reviewsLede: 'Rezensionen von Eltern und Lernenden auf Google, so wie sie dort auf Englisch stehen.',

  fees: {
    h2: 'Was Nachhilfe auf Englisch kostet',
    lede: 'Pro Monat zahlen Sie eine Gebühr, die acht Live-Stunden umfasst. Hier steht sie in Euro, ermittelt mit dem Referenzkurs der Europäischen Zentralbank. Eingezogen wird sie in US-Dollar; Ihre Bank wechselt den Betrag, deshalb sind kleine Unterschiede auf dem Kontoauszug möglich.',
    free: ['Eine kostenlose Probestunde mit Schulmaterial', 'Eine kurze Einschätzung von Stand und Lehrplan', 'Keine Kreditkarte'],
    group: ['Fünfzehn bis zwanzig Lernende', 'Ein Mentor, der bleibt', 'Zwei Stunden pro Woche', 'Monatlich zahlbar, monatlich kündbar'],
    one: ['Ihr Kind allein mit dem Mentor', 'Eigenes Schulmaterial, eigener Lehrplan', 'Termine nach Wunsch']
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    h2: 'Nachhilfe auf Englisch online: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein, und genau darum geht es hier. Die Nachhilfe ist live und ausschließlich auf Englisch. Die Mentoren aus Indien sprechen klar, wiederholen bei Bedarf und stellen sich auf Tempo und Aussprache Ihres Kindes ein. Fachwörter nennen sie zusätzlich auf Deutsch, damit Ihr Kind in der Klassenarbeit die richtigen Begriffe kennt.' },
      { q: 'Für welche Schulen ist die Nachhilfe gedacht?', a: 'Für Schülerinnen und Schüler an deutschen Schulen, an bilingualen Zügen wie der Staatlichen Europa-Schule Berlin und an internationalen Schulen mit IB, IGCSE oder AP. Wir arbeiten jeweils nach dem Lehrplan und dem Material Ihrer Schule.' },
      { q: 'Hilft Nachhilfe auf Englisch auch, wenn mein Kind auf Deutsch unterrichtet wird?', a: 'Ja, besonders wenn zu Hause Englisch gesprochen wird oder Ihr Kind sein Englisch verbessern möchte. Der Inhalt folgt dem Lehrplan Ihres Landes, nur die Erklärung ist englisch. Deutsche Fachwörter bekommt Ihr Kind immer dazu.' },
      { q: 'Ist das IB Diploma in Deutschland dem Abitur gleichwertig?', a: 'Laut AGIS ist das IB Diploma mit vorgeschriebenen Fächerkombinationen dem Abitur gleichwertig; die KMK hat dazu eine Vereinbarung vom 10. März 1986 in der Fassung vom 15. Juni 2023. Ob die Bedingungen im Einzelfall erfüllt sind, prüfen die zuständigen Stellen. Wir beraten dazu nicht.' },
      { q: 'Was bedeutet "3 significant figures"?', a: 'Auf drei gültige Ziffern runden, gezählt ab der ersten Ziffer, die keine Null ist. 0,004567 wird so zu 0,00457, während es auf zwei Nachkommastellen zu 0,00 würde. Kinder, die zwischen englischsprachigen und deutschen Aufgaben wechseln, üben diesen Unterschied bei uns gezielt.' },
      { q: 'Gibt es auch Informatik-Nachhilfe auf Englisch?', a: 'Ja, von Scratch und Python in der Mittelstufe bis zu Java, Datenstrukturen und Datenbanken in der Oberstufe, dazu IGCSE und IB Computer Science und AP Computer Science A. Viele Lernende nehmen Mathe und Informatik beim selben Mentor.' },
      { q: 'Bereiten Sie auf Abitur, IB-Prüfungen oder IGCSE vor?', a: 'Ja, mit Übungen im Stil der jeweiligen Prüfung, die wir selbst schreiben und als unsere kennzeichnen. Noten und Abschlüsse vergibt nur die Schule beziehungsweise die Prüfungsorganisation; wir unterrichten begleitend.' },
      { q: 'Wann finden die Stunden statt?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. Eine Stunde um 15:35 Uhr deutscher Winterzeit beginnt beim Mentor in Indien um 20:05 Uhr.' },
      { q: 'Was kostet die Nachhilfe?', a: 'Angezeigt wird die Monatsgebühr in Euro nach dem Referenzkurs der EZB, belastet wird sie in US-Dollar, und die Umrechnung übernimmt Ihre Bank. Für die Probestunde fallen keine Kosten an.' },
      { q: 'Kann der Mentor mit Material aus der Schule arbeiten?', a: 'Ja, das ist der Normalfall. Ihr Kind zeigt Arbeitsblätter, Hefte oder alte Arbeiten am Bildschirm, und der Mentor beginnt genau dort, wo es hakt.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weiterlesen',
    h2: 'Seiten für Mathe und Informatik in Deutschland',
    lede: 'Überwiegend auf Englisch.',
    items: [
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'Das Mathe-Abitur, auf Englisch erklärt.' },
      { href: '/abitur-vs-ib-vs-a-levels-maths', label: 'Abitur vs IB vs A levels maths', p: 'Drei Wege zur Hochschulreife im Vergleich.' },
      { href: '/ib-computer-science-tutor-germany', label: 'IB computer science tutor Germany', p: 'Hilfe für IB Computer Science.' },
      { href: '/igcse-computer-science-tutor-germany', label: 'IGCSE computer science tutor Germany', p: 'Cambridge 0478 an internationalen Schulen.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Informatik nach Bundesland, auf Deutsch erklärt.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Unsere Seiten für Deutschland.' }
    ]
  },

  start: {
    h2: 'Kostenlose Probestunde mit Schulmaterial',
    lede: 'Bringen Sie zur Probestunde eine aktuelle Aufgabe oder eine alte Arbeit mit. Der Mentor bespricht sie mit Ihrem Kind auf Englisch, findet heraus, wo es hakt, und empfiehlt danach Kurs und Gruppe.',
    readFirst: 'Zum Nachlesen: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> über unseren Unterricht, <a class="ag-inline-link" href="/courses">All courses</a> mit allen Lehrplänen; beide Seiten sind auf Englisch.',
    note: 'Nachhilfe live online, nur auf Englisch, mit Mentoren aus Indien. Fragen beantworten wir am zügigsten über WhatsApp.',
    formNote: 'Kostenlos, ohne Kreditkarte, unverbindlich.'
  },

  footer: {
    cols: [
      { h4: 'Nachhilfe', links: [
        { href: '/courses/abitur-mathematics-course-in-english', label: 'Abitur Mathematik' },
        { href: '/courses/ib-mathematics-aa-ai-masterclass', label: 'IB Mathematik' },
        { href: '/courses/informatik-abitur-course-java-python', label: 'Informatik Abitur' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Ab der ersten Nicht-Null zählen'
  },

  personalityCss: `
.ag-root.ag-nen .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-nen .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-nen .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-nen .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-nen .ag-table td { hyphens: auto; }
`,

  dossier: {
    curriculumAuthority: 'FACTS.md 30, 31, 64, 97, 113, 245 to 250, 252, 255, 256 (AGIS, KMK Eurydice dossier, IQB, GI Informatik-Monitor, NRW ZP10), read raw 2 November 2026; Einheiten- und Zeitgesetz. Example our own.',
    localProject: 'Significant figures against decimal places: an original Python check on four numbers (0.004567 becomes 0.0 to 2 d.p. but 0.00457 to 3 s.f.; 12345.6 becomes 12300 to 3 s.f.), plus the Informatik trap round(2.675, 2) = 2.67 because 2.675 is stored as 2.67499999999999982236. Lesson family: significant figures are not decimal places.',
    requiredMentions: ['  0.004567 | 2 d.p.: 0.0      | 3 s.f.: 0.00457', '2.67 | gespeichert als 2.67499999999999982236', 'Nachkommastellen gegen gültige Ziffern', 'Bilinguale Züge an 33 Schulen mit etwa 6.000 Schülerinnen und Schülern', 'KMK-Vereinbarung vom 10.3.1986 in der Fassung vom 15.6.2023', 'Führt zu einem Abschluss, der der Mittleren Reife entspricht', 'Was heißt "give your answer to 3 significant figures"?', 'Ab der ersten Nicht-Null zählen'],
    sources: [
      { claim: 'AGIS: member schools, all authorised IB schools, English as common language, up to 65 nations; IB Diploma equivalent to Abitur; MYP or IGCSE equivalent to Mittlere Reife.', url: 'https://www.agis-schools.org/' },
      { claim: 'KMK Eurydice dossier: IB recognition agreement, five European Schools, SESB Berlin 33 schools and about 6,000 pupils.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Eurydice/DE/dossier_de_ebook.pdf' },
      { claim: 'IQB Abitur pools since 2017; common dates since 2022.', url: 'https://www.iqb.hu-berlin.de/abitur/' },
      { claim: 'About 15 percent take Informatik in the Qualifikationsphase.', url: 'https://informatik-monitor.de/' },
      { claim: 'German legal time.', url: 'https://www.gesetze-im-internet.de/me_einhg/BJNR007090969.html' }
    ],
    rejectedClaims: [
      'Advice on recognition of a particular qualification: refused; the page sends readers to the competent bodies.',
      'Naming international schools as a source of our students: refused; only AGIS facts as context.',
      'Reproducing IB, IGCSE or Abitur exam questions: refused; the exercise is our own.',
      'Echoing the Dreisatz spine of mathe-nachhilfe-auf-englisch: avoided.',
      'German-language teaching: English only, said plainly.'
    ]
  }
};
