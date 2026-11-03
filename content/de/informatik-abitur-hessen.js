'use strict';
// Informatik-Abitur Hessen (ag- German-language door, Germany cluster row DE086, P3).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; formal "Sie";
// euro shown, USD charged. We teach alongside school and award no grades.
// Angle: only Hessen facts. Landesabitur 2027: Pflichtaufgabe A offered in two language variants, Java and Python; BE per
// task; choice rules; KCGO topics (incl. Relationenalgebra and Registermaschine); aids (Glossar, Operatorenliste,
// Wörterbuch); 255 and 300 minutes; GK on 15 April 2027, LK on 19 April 2027. Hessen has no compulsory Informatik before
// the Oberstufe. Original exercise: a projection in relational algebra versus SQL with and without DISTINCT, in Python.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/informatik-abitur-hessen/, fetched
// 3 November 2026; PDF text via PDFKit, the date table checked on the rendered page):
//  - Hessisches Ministerium für Kultus, Bildung und Chancen, Abiturerlass zum Landesabitur 2027, "Erlass vom 2. Juli 2025"
//    (abiturerlass_la_2027.pdf, kultus.hessen.de): section 27 Informatik: "Die Pflichtaufgabe A zum Thema Algorithmik und
//    objektorientierte Modellierung (GK: 50 BE, LK 40 BE) wird im Grund- und im Leistungskurs in den beiden Sprachvarianten
//    Java und Python angeboten. Dem Prüfling wird die Aufgabe A in der Sprachvariante vorgelegt, die im Unterricht benutzt
//    wurde."; "Für den Leistungskurs liegt der weiteren Pflichtaufgabe B entweder das Thema Datenbanken oder das Thema
//    Konzepte und Anwendungen der theoretischen Informatik zugrunde."; "Insgesamt können im Grundkurs maximal 90 BE, im
//    Leistungskurs maximal 120 BE vergeben werden."; "Kerncurriculum für die gymnasiale Oberstufe (KCGO) für das Fach
//    Informatik (Ausgabe 2024)"; GK topics Q1.1 Klassen und Objekte, Q1.2 Such- und Sortieralgorithmen, Q2.1 ER- und
//    Relationenmodell, Q2.2 SQL, Q2.5 Relationenalgebra, Q3.1 Formale Sprachen und Grammatiken, Q3.2 Endliche Automaten,
//    Q3.5 Registermaschine, Q1.3 Rekursion (listed under Q4); LK adds Q1.4 Höhere Datenstrukturen und ihre
//    objektorientierte Modellierung; "Aufgabenvorschläge mit der Möglichkeit einer PC-Nutzung werden nicht bereitgestellt.";
//    Auswahlmodus: GK "zwei Aufgabenvorschläge B1 und B2, entweder zum Thema Datenbanken oder zum Thema Konzepte und
//    Anwendungen der theoretischen Informatik, zur Auswahl"; LK "zwei weitere Aufgabenvorschläge C1 und C2 zur Auswahl ...
//    das durch die beiden Pflichtaufgaben nicht abgedeckt ist. Der Prüfling bearbeitet somit drei Aufgaben"; aids
//    "ein Wörterbuch der deutschen Rechtschreibung", "das den Prüfungsaufgaben beigefügte Glossar", "eine Liste der
//    fachspezifischen Operatoren"; Bearbeitungszeit "alle anderen Fächer 300 Minuten 255 Minuten" (Leistungsfach,
//    Grundkursfach), "In die Bearbeitungszeit ist eine Auswahlzeit eingeschlossen"; "Die schriftlichen Abiturprüfungen 2027
//    finden im Zeitraum vom 15. April bis 5. Mai 2027, die Nachprüfungen im Zeitraum vom 18. Mai bis 3. Juni 2027 statt.
//    Die Kursphase Q4 endet am 19. März 2027."; Prüfungsabfolge (rendered): "Donnerstag, 15.04.2027" Grundkurs column
//    includes "Informatik"; "Montag, 19.04.2027" Leistungskurs column includes "Informatik".
//  - GI Informatik-Monitor 2026/27, Hessen page (infmon-he.txt): FACTS 77 ("Schulartübergreifend findet kein verbindlicher
//    Informatikunterricht statt."); Wahlunterricht "je einstündig ab der Jahrgangsstufe 7"; Einführungsphase "zwei- bis
//    dreistündig", "Entsprechende Vorkenntnisse aus der Sekundarstufe I sind hierfür nicht erforderlich."; Q-phase GK "zwei
//    oder drei Wochenstunden", LK "fünfstündig"; "In einem Leistungsfach Informatik wird schriftlich geprüft."; "zentral
//    (landesweit einheitlich)"; "Praktische Prüfungsanteile am Rechner sind nicht zulässig."; Digitale Welt "vom Schuljahr
//    2026/27 nur noch im Rahmen des Ganztags"; Kennzahlen "Anteil SuS mit Informatik in der Sek II 10 %" (2024/2025, KMK),
//    "Anteil Abiturientinnen und Abiturienten mit Prüfungsfach Informatik 5 %" (2024/2025, HMKB). National FACTS 96 (no
//    binding plans in Hessen). Gender shares not used.
//  - Time: EinhZeitG; summer time 2027 from 28 March.
// Our own: projektion.py, run with python3 -I on 3 November 2026:
//   "Relationenalgebra: ['Comic', 'Krimi', 'Sachbuch'] 3", "Tupel als Menge: 5 statt 6",
//   "SQL ohne DISTINCT: 6 Zeilen", "SQL mit DISTINCT: ['Comic', 'Krimi', 'Sachbuch'] 3". Names and data invented.
// Lesson family: a projection is a set; relational algebra removes duplicates, SQL keeps them unless you say DISTINCT.

const { DE } = require('../../scripts/nl/lib/market-de');

const PY = [
  'import sqlite3',
  '',
  'ausleihe = [',
  '    ("Mara", "Krimi"), ("Mara", "Comic"), ("Jonas", "Krimi"),',
  '    ("Lea", "Sachbuch"), ("Jonas", "Krimi"), ("Lea", "Comic"),',
  ']',
  '',
  '# Projektion in der Relationenalgebra: Ergebnis ist eine Menge',
  'projektion = {genre for name, genre in ausleihe}',
  'print("Relationenalgebra:", sorted(projektion), len(projektion))',
  'print("Tupel als Menge:", len(set(ausleihe)), "statt", len(ausleihe))',
  '',
  'db = sqlite3.connect(":memory:")',
  'db.execute("CREATE TABLE ausleihe (name TEXT, genre TEXT)")',
  'db.executemany("INSERT INTO ausleihe VALUES (?, ?)", ausleihe)',
  'ohne = db.execute("SELECT genre FROM ausleihe").fetchall()',
  'mit = db.execute("SELECT DISTINCT genre FROM ausleihe ORDER BY genre").fetchall()',
  'print("SQL ohne DISTINCT:", len(ohne), "Zeilen")',
  'print("SQL mit DISTINCT:", [z[0] for z in mit], len(mit))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'Informatik-Abitur Hessen' },
  slug: 'informatik-abitur-hessen',
  code: 'iah',
  accent: '#74301E',
  accentRationale: 'Informatik-Abitur Hessen: a deep rust #74301E from alloc.tsv, the warmest of the five Land pages; contrast 7.80 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Informatik-Abitur Hessen (Unterricht auf Englisch)',
  title: 'Informatik-Abitur Hessen 2027: Java oder Python, Termine, Übung',
  description: 'Landesabitur Hessen 2027, Informatik: Aufgabe A in Java oder Python, Grundkurs 15. April, Leistungskurs 19. April 2027. Dazu eine SQL-Übung, Unterricht auf Englisch.',
  ogDescription: 'Wie das Landesabitur 2027 in Hessen im Fach Informatik aufgebaut ist: Sprachvarianten, Bewertungseinheiten, Themen des Kerncurriculums, Termine und eine eigene Übung zur Projektion in SQL.',
  twitterDescription: 'Informatik-Abitur Hessen 2027: Java oder Python, Aufbau, Termine und eine gelöste Übung zur Relationenalgebra.',
  pageName: 'Informatik-Abitur Hessen',
  webPageDescription: 'Hessisches Landesabitur 2027 im Fach Informatik, erklärt für Familien: Aufgabenstruktur, Sprachvarianten und Termine laut Abiturerlass vom 2. Juli 2025, Belegungsregeln laut GI-Monitor und eine selbst geschriebene Übung zu Projektion und SQL.',
  courseDescription: 'Unterricht für die hessische Oberstufe, live und nur auf Englisch: Klassen und Objekte in Java oder Python, Suchen und Sortieren, Rekursion, ER-Modell, SQL und Relationenalgebra, Grammatiken, Automaten und Registermaschine, als Gruppe oder einzeln.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Informatik-Abitur Hessen',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#aufbau', label: 'Aufbau' },
    { href: '#termine', label: 'Termine' },
    { href: '#uebung', label: 'Übung' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Hessen &middot; Landesabitur 2027 &middot; Informatik',
  h1: 'Informatik-Abitur Hessen: Vorbereitung live auf Englisch',
  lede: 'Hessen stellt die Pflichtaufgabe im Informatik-Abitur in zwei Fassungen: in Java und in Python, jeweils in der Sprache, die im Kurs verwendet wurde. Gleichzeitig gibt es vor der Oberstufe kein Pflichtfach Informatik, viele beginnen also spät. Hier finden Sie den Aufbau der Prüfung nach dem Abiturerlass 2027, die Termine, die Themen und eine eigene Übung zur Relationenalgebra mit Lösung.',
  secondaryCta: { href: '#aufbau', label: 'Aufbau der Prüfung' },
  wa: 'Hallo Modern Age Coders, unser Kind hat Informatik im hessischen Landesabitur 2027. Können wir eine Probestunde auf Englisch ausprobieren?',
  heroNote: 'Seit 2020 live online &middot; mehr als 10.000 Lernende weltweit &middot; Java und Python auf Englisch erklärt',
  spec: [
    ['Für', 'E-Phase sowie Q1 bis Q4 in Hessen'],
    ['Sprachen', 'Java oder Python, dazu SQL'],
    ['Form', 'Gruppe von 15 bis 20 oder einzeln'],
    ['Übung', 'handschriftlich, ohne PC'],
    ['Mentor', 'derselbe, live aus Indien'],
    ['Beginn', 'mit kostenloser Probestunde']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Im hessischen Landesabitur 2027 gibt es die Pflichtaufgabe A in Informatik auf Java oder Python, je nach Unterrichtssprache; geschrieben wird ohne PC, im Grundkurs am 15. April 2027 und im Leistungskurs am 19. April 2027. Modern Age Coders bereitet live online darauf vor, auf Englisch, im Kurs Informatik Oberstufe und Abitur, als Gruppe oder einzeln, mit festem Mentor und angepasstem Tempo.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Kurse für das hessische Abitur',
    lede: 'Der Abiturkurs arbeitet in Java oder Python, wie im Kurs Ihres Kindes. Dazu kommen ein Python-Kurs für alle, die erst in der Oberstufe mit Programmieren beginnen, und ein Datenbankkurs für den großen SQL-Anteil.',
    items: [
      { course: 'informatik-abitur-course-java-python', code: 'HE / 01', title: 'Informatik Oberstufe und Abitur', alt: 'Kursbild Informatik Oberstufe und Abitur mit Java und Python', note: 'E-Phase bis Q4. Objektorientierung, Algorithmen, Datenbanken und theoretische Informatik, auf Papier geübt.' },
      { course: 'python-complete-masterclass-teens', code: 'HE / 02', title: 'Python für Jugendliche', alt: 'Kursbild Python für Jugendliche', note: 'Ab 13. Für den späten Einstieg: von der ersten Variable bis zu Klassen und Listen, ohne Vorkenntnisse.' },
      { course: 'mysql-mastery-for-teens', code: 'HE / 03', title: 'SQL und Datenbanken für Jugendliche', alt: 'Kursbild SQL und Datenbanken für Jugendliche', note: 'Ab 13. Tabellen entwerfen, verknüpfen, gruppieren, mit vielen kleinen Abfragen.' }
    ]
  },

  sections: [
    {
      id: 'aufbau',
      eyebrow: 'Landesabitur 2027',
      h2: 'Wie ist das Informatik-Abitur in Hessen aufgebaut?',
      lede: 'Der Abiturerlass vom 2. Juli 2025 regelt für jedes Fach Kursart, Aufgabenstruktur, Themen und Hilfsmittel. Für Informatik ergibt sich daraus folgendes Bild.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik im hessischen Landesabitur 2027', head: ['Punkt', 'Grundkurs', 'Leistungskurs'], rows: [
          ['Pflichtaufgabe A', 'Algorithmik und objektorientierte Modellierung, 50 BE', 'Algorithmik und objektorientierte Modellierung, 40 BE'],
          ['Sprachvariante von A', 'Java oder Python, wie im Unterricht', 'Java oder Python, wie im Unterricht'],
          ['Weitere Aufgaben', 'Wahl zwischen B1 und B2 (Datenbanken oder theoretische Informatik), 40 BE', 'Pflichtaufgabe B (Datenbanken oder theoretische Informatik) und Wahl zwischen C1 und C2 zum anderen Thema, je 40 BE'],
          ['Bewertungseinheiten gesamt', '90', '120'],
          ['Bearbeitungszeit inklusive Auswahl', '255 Minuten', '300 Minuten'],
          ['Hilfsmittel', 'Rechtschreibwörterbuch, beigefügtes Glossar, Operatorenliste', 'Rechtschreibwörterbuch, beigefügtes Glossar, Operatorenliste'],
          ['Aufgaben mit PC', 'werden nicht bereitgestellt', 'werden nicht bereitgestellt'],
          ['Grundlage', 'KCGO Informatik, Ausgabe 2024', 'KCGO Informatik, Ausgabe 2024']
        ] },
        { kind: 'source', html: 'Unsere Zusammenfassung aus dem Abiturerlass zum Landesabitur 2027 des Hessischen Ministeriums für Kultus, Bildung und Chancen (Erlass vom 2. Juli 2025): Abschnitt 2.4 zur Bearbeitungszeit, Anlage zu den erlaubten Hilfsmitteln, Auswahlmodus und Abschnitt 27 Informatik. Gelesen am 3. November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'Was die Sprachvarianten bedeuten',
          left: [
            'Die Pflichtaufgabe A wird laut Erlass in den beiden Sprachvarianten Java und Python angeboten. Jeder Prüfling bekommt die Fassung, die im Unterricht benutzt wurde. Es gibt also keine Wahl am Prüfungstag, aber auch keinen Nachteil für Kurse, die mit Python arbeiten.',
            'Für die Vorbereitung heißt das: Geübt wird in genau der Sprache des eigenen Kurses. Wir fragen deshalb in der ersten Stunde, mit welcher Sprache die Schule arbeitet.'
          ],
          rightH3: 'Ohne Rechner, mit Glossar',
          right: [
            'Nach dem Erlass werden keine Aufgabenvorschläge mit PC-Nutzung bereitgestellt, und der Informatik-Monitor 2026/27 hält fest, dass praktische Prüfungsanteile am Rechner in Hessen nicht zulässig sind.',
            'Den Aufgaben liegt ein Glossar bei, dazu kommt eine Liste der fachspezifischen Operatoren. Wer die Operatoren wie erläutern, implementieren oder beurteilen sicher unterscheidet, schreibt gezieltere Antworten.'
          ] }
      ]
    },
    {
      id: 'themen',
      eyebrow: 'Themen nach KCGO',
      h2: 'Welche Themen kommen im hessischen Informatik-Abitur 2027 vor?',
      lede: 'Der Erlass nennt die Themenfelder des Kerncurriculums, auf die sich die Aufgaben 2027 schwerpunktmäßig beziehen. Der Leistungskurs hat ein Themenfeld mehr.',
      body: [
        { kind: 'table', numCols: [], caption: 'Schwerpunkte der Prüfungsaufgaben 2027 nach Themenfeldern des KCGO', head: ['Themenfeld', 'Grundkurs', 'Leistungskurs'], rows: [
          ['Q1.1 Klassen und Objekte', 'ja', 'ja'],
          ['Q1.2 Such- und Sortieralgorithmen', 'ja', 'ja'],
          ['Q1.3 Rekursion', 'ja', 'ja'],
          ['Q1.4 Höhere Datenstrukturen und ihre objektorientierte Modellierung', 'nein', 'ja'],
          ['Q2.1 ER- und Relationenmodell', 'ja', 'ja'],
          ['Q2.2 SQL', 'ja', 'ja'],
          ['Q2.5 Relationenalgebra', 'ja', 'ja'],
          ['Q3.1 Formale Sprachen und Grammatiken', 'ja', 'ja'],
          ['Q3.2 Endliche Automaten', 'ja', 'ja'],
          ['Q3.5 Registermaschine', 'ja', 'ja']
        ] },
        { kind: 'source', html: 'Quelle: Abiturerlass zum Landesabitur 2027, Abschnitt 27.3 Hinweise zum Prüfungsinhalt (Grundlage: KCGO Informatik, Ausgabe 2024). Die Ja-und-Nein-Darstellung ist unsere; der Erlass listet die Themenfelder je Kursart.' },
        { kind: 'p', mt: true, html: 'Auffällig ist die Breite im Datenbankteil: ER-Modell, SQL und Relationenalgebra stehen nebeneinander. Viele lernen SQL, ohne den Bezug zur Relationenalgebra zu sehen, obwohl genau dieser Vergleich typische Fehler erklärt. Unsere Übung weiter unten greift das auf. Ebenso eigen ist die Registermaschine, ein sehr einfaches Rechnermodell, an dem man Programme Befehl für Befehl verfolgt.' },
        { kind: 'two', mt: true,
          leftH3: 'Später Start ist normal',
          left: [
            'In Hessen findet laut Informatik-Monitor schulartübergreifend kein verbindlicher Informatikunterricht statt. Am Gymnasium kann Informatik ab Jahrgangsstufe 7 einstündig als Wahlunterricht angeboten werden.',
            'Für die Einführungsphase sind laut Monitor keine Vorkenntnisse aus der Sekundarstufe I nötig; Informatik kann dort zwei- bis dreistündig angeboten werden. Der Schulversuch Digitale Welt läuft ab 2026/27 nur noch im Ganztag.'
          ],
          rightH3: 'Grund- und Leistungskurs',
          right: [
            'In der Qualifikationsphase können Schulen einen Grundkurs mit zwei oder drei Wochenstunden anbieten, dazu den Leistungskurs mit fünf. Im Leistungsfach wird schriftlich geprüft.',
            'Ein durchgängig belegter Grundkurs kann drittes Prüfungsfach (schriftlich), viertes (mündlich) oder fünftes Prüfungsfach (Präsentation, besondere Lernleistung oder mündlich) sein. Im Schuljahr 2024/2025 hatten 10 Prozent der Lernenden in der Sekundarstufe II Informatik belegt, 5 Prozent der Abiturientinnen und Abiturienten hatten es als Prüfungsfach.'
          ] }
      ]
    },
    {
      id: 'termine',
      eyebrow: 'Prüfungstage',
      h2: 'Wann ist das Informatik-Abitur 2027 in Hessen?',
      lede: 'Grundkurs und Leistungskurs schreiben an verschiedenen Tagen. Beide Termine liegen ganz am Anfang des Prüfungszeitraums.',
      body: [
        { kind: 'table', numCols: [], caption: 'Termine Landesabitur 2027, soweit sie Informatik betreffen', head: ['Datum', 'Was'], rows: [
          ['19. März 2027', 'Ende der Kursphase Q4'],
          ['Donnerstag, 15. April 2027', 'Informatik im Grundkurs; zugleich Beginn der schriftlichen Prüfungen'],
          ['Montag, 19. April 2027', 'Informatik im Leistungskurs'],
          ['5. Mai 2027', 'Ende der schriftlichen Prüfungen (Mathematik)'],
          ['18. Mai bis 3. Juni 2027', 'Zeitraum der Nachprüfungen']
        ] },
        { kind: 'source', html: 'Quelle: Abiturerlass zum Landesabitur 2027, Abschnitt II.1 Prüfungszeitraum und Tabelle 2.1 Prüfungsabfolge für den Haupttermin, gegen die gedruckte Tabelle geprüft am 3. November 2026.' },
        { kind: 'p', mt: true, html: 'Wer Informatik als Leistungskurs hat, schreibt am Montag nach der ersten Prüfungswoche, vor Physik, Chemie, Deutsch, Englisch und Mathematik. Die Zeit nach dem Ende der Q4 am 19. März 2027 bis zum 19. April 2027 ist daher die wichtigste Wiederholungsphase, und die Osterferien liegen mittendrin. Im Grundkurs ist Informatik sogar der allererste schriftliche Termin.' }
      ]
    },
    {
      id: 'uebung',
      tint: 'tint',
      eyebrow: 'Eine Übungsaufgabe von uns',
      h2: 'Warum liefert SQL mehr Zeilen als die Relationenalgebra?',
      lede: 'Relationenalgebra und SQL stehen in Hessen nebeneinander im Prüfungsstoff. Die folgende Aufgabe ist unsere eigene, keine echte Prüfungsaufgabe; Namen und Daten sind erfunden.',
      body: [
        { kind: 'p', html: '<strong>Aufgabe (unsere).</strong> In der Schulbücherei werden Ausleihen als Paare (Name, Genre) erfasst: (Mara, Krimi), (Mara, Comic), (Jonas, Krimi), (Lea, Sachbuch), (Jonas, Krimi), (Lea, Comic). a) Geben Sie das Ergebnis der Projektion auf das Attribut Genre an. b) Wie viele Zeilen liefert <code>SELECT genre FROM ausleihe</code>, und wie viele mit <code>DISTINCT</code>? c) Erklären Sie den Unterschied und was er für die Erfassung bedeutet.' },
        { kind: 'table', numCols: [1], caption: 'Lösung zu a) und b) (unsere)', head: ['Ausdruck', 'Anzahl', 'Ergebnis'], rows: [
          ['Projektion auf Genre (Relationenalgebra)', '3', 'Comic, Krimi, Sachbuch'],
          ['SELECT genre FROM ausleihe', '6', 'Krimi, Comic, Krimi, Sachbuch, Krimi, Comic'],
          ['SELECT DISTINCT genre FROM ausleihe', '3', 'Comic, Krimi, Sachbuch (sortiert)']
        ] },
        { kind: 'p', mt: true, html: '<strong>Zu c).</strong> Eine Relation ist eine Menge von Tupeln. Mengen enthalten kein Element doppelt, deshalb liefert die Projektion jedes Genre nur einmal. SQL arbeitet dagegen mit Tabellen, in denen Zeilen mehrfach vorkommen dürfen; erst <code>DISTINCT</code> entfernt Duplikate. Es gibt noch eine zweite, feinere Beobachtung: Das Paar (Jonas, Krimi) steht zweimal in der Liste. Als Relation aufgefasst wären das nur fünf verschiedene Tupel, nicht sechs. Für eine Bücherei, die jede Ausleihe zählen will, fehlt also ein Attribut, zum Beispiel ein Datum oder eine Ausleihnummer als Primärschlüssel.' },
        { kind: 'code', label: 'projektion.py: Menge gegen Tabelle', lang: 'Python', code: PY, note: 'Ausgabe, von uns ausgeführt: <code>Relationenalgebra: [\'Comic\', \'Krimi\', \'Sachbuch\'] 3</code>, <code>Tupel als Menge: 5 statt 6</code>, <code>SQL ohne DISTINCT: 6 Zeilen</code>, <code>SQL mit DISTINCT: [\'Comic\', \'Krimi\', \'Sachbuch\'] 3</code>.' },
        { kind: 'p', mt: true, html: 'Python bildet die Projektion mit einer Menge nach, die SQL-Abfragen laufen in einer kleinen SQLite-Datenbank im Arbeitsspeicher. In der Prüfung schreiben Sie beides von Hand. Den Code nutzen wir in der Vorbereitung nur, um eine Lösung hinterher zu überprüfen.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Erst die Anzahl schätzen.</strong> Sagen Sie vor jeder Abfrage voraus, wie viele Zeilen herauskommen. Weicht das Ergebnis ab, haben Sie etwas über die Daten gelernt.',
          '<strong>Menge oder Tabelle?</strong> Fragen Sie bei jeder Lösung, ob Sie in Relationenalgebra (ohne Duplikate) oder in SQL (mit Duplikaten) denken.',
          '<strong>Doppelte Zeilen sind ein Hinweis.</strong> Zwei gleiche Datensätze deuten oft auf einen fehlenden Schlüssel hin. Das ist genau der Übergang zum ER-Modell.'
        ] }
      ]
    },
    {
      id: 'englisch',
      eyebrow: 'Unterricht auf Englisch',
      h2: 'Wie passt Englisch zu einer hessischen Abiturprüfung?',
      lede: 'Wir unterrichten ausschließlich auf Englisch, das Abitur ist auf Deutsch. Bei Java, Python und SQL fällt das kaum auf: SELECT, class, return und while sind englische Wörter.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Operatoren auf Deutsch', p: 'Die Operatorenliste ist deutsch. Wir üben, was "erläutern", "implementieren" oder "beurteilen" jeweils verlangt, und antworten in der Stunde trotzdem auf Englisch.' },
          { h3: 'Java oder Python', p: 'Der Mentor unterrichtet in der Sprachvariante Ihres Kurses. Wer mit Python arbeitet, übt mit Python, wer mit Java arbeitet, mit Java.' },
          { h3: 'Im passenden Tempo', p: 'Unterrichtet wird live aus Indien. Der Mentor spricht ruhig, erklärt Begriffe ein zweites Mal mit anderen Worten und gibt Zeit zum Nachdenken.' }
        ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Sprache und Stand klären.</strong> In der ersten Stunde: Java oder Python, Grund- oder Leistungskurs, welches Halbjahr.',
          '<strong>Themenfelder planen.</strong> Die Liste des Erlasses wird auf die Wochen bis April 2027 verteilt, mit Puffer für Q3 und Q4.',
          '<strong>Aufgabe A trainieren.</strong> Algorithmik und objektorientierte Modellierung sind Pflicht für alle. Hier liegt der größte Teil der Übung.',
          '<strong>Wahl üben.</strong> Datenbanken oder theoretische Informatik: Wir üben beide und auch die Entscheidung, welche Wahlaufgabe man nimmt.'
        ] }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Wann können wir unterrichten?',
      lede: 'Die Uhrzeit richtet sich nach dem Stundenplan in Hessen. So sehen drei Beispiele hier und beim Mentor aus:',
      body: [
        { kind: 'table', numCols: [], caption: 'Hessen und Indien im Vergleich', head: ['Uhrzeit in Hessen', 'Indien im Winter', 'Indien ab 28. März 2027'], rows: [
          ['13:00', '17:30', '16:30'],
          ['17:15', '21:45', '20:45'],
          ['Sonntag 09:00', '13:30', '12:30']
        ] },
        { kind: 'source', html: 'Das Einheiten- und Zeitgesetz bestimmt die gesetzliche Zeit: MEZ (UTC+1), in der Sommerzeit MESZ (UTC+2). Am 25. Oktober 2026 endete die Sommerzeit, am 28. März 2027 beginnt sie neu. Indien rechnet ganzjährig mit UTC+5:30 und ist daher im Winter 4 Stunden 30 Minuten, im Sommer 3 Stunden 30 Minuten voraus. Nur Beispiele, keine festen Gruppenzeiten.' },
        { kind: 'p', mt: true, html: 'Zwischen dem 19. März und dem 19. April 2027 möchten viele Familien zusätzliche Einzelstunden. Bei der Buchung sehen Sie die Zeiten in Ihrer eigenen Zeitzone.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Woran Sie erkennen, wie weit die Vorbereitung ist',
    lede: 'Unsere eigene Einteilung, abgestimmt auf die Themenfelder des Erlasses. Keine Noten, keine Prognose.',
    table: { caption: 'Fünf Stufen bis zum Landesabitur (unsere Einteilung)', head: ['Stufe', 'Etwa wann', 'Ihr Kind kann'], rows: [
      ['1. Klassen entwerfen', 'E-Phase', 'Klassen mit Attributen und Methoden in Java oder Python schreiben'],
      ['2. Suchen, Sortieren, Rekursion', 'Q1', 'Algorithmen von Hand ausführen und ihren Aufwand vergleichen'],
      ['3. Datenbanken', 'Q2', 'ein ER-Modell in Tabellen übersetzen, SQL schreiben, Relationenalgebra lesen'],
      ['4. Theorie', 'Q3', 'Grammatiken, Automaten und Registermaschinenprogramme verfolgen'],
      ['5. Prüfungsreif', 'vor April 2027', 'Aufgabe A und eine Wahlaufgabe in der vorgesehenen Zeit sicher lösen']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Einmal im Monat erhalten Sie eine kurze Rückmeldung zu Stufe und nächsten Zielen.',
      'Wer in der E-Phase ohne Vorwissen startet, braucht in Stufe 1 meist am längsten. Danach geht es oft schneller.'
    ] },
    right: { h3: 'Hinweise für Prüflinge', ps: [
      'Sagen Sie vor jeder SQL-Abfrage die Zeilenzahl voraus.',
      'Lesen Sie den Operator zuerst. "Implementieren" verlangt Code, "erläutern" einen Text.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse neben dem Abitur',
    lede: 'Für späte Einsteiger, für Vertiefung oder als Ausblick aufs Studium. Alle im selben Live-Format.',
    bands: [
      { num: 'I', h3: 'Programmieren', sub: '13 bis 19 Jahre', courses: [
        { code: 'HE / CODE / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java für Jugendliche', blurb: 'Objektorientierung ohne Vorwissen.' },
        { code: 'HE / CODE / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithmen und Datenstrukturen', blurb: 'Suchen, Sortieren, Rekursion vertieft.' },
        { code: 'HE / CODE / 03', slug: 'competitive-programming-for-teens-course', title: 'Wettbewerbsprogrammierung', blurb: 'Für alle, die mehr wollen.' }
      ] },
      { num: 'II', h3: 'Daten und Systeme', sub: '13 bis 19 Jahre', courses: [
        { code: 'HE / DATA / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data Science', blurb: 'Daten mit Python untersuchen.' },
        { code: 'HE / DATA / 02', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'IT-Sicherheit', blurb: 'Wie Systeme geschützt werden.' },
        { code: 'HE / DATA / 03', slug: 'ai-ml-masterclass-teens', title: 'KI und maschinelles Lernen', blurb: 'Lernende Modelle von innen.' }
      ] },
      { num: 'III', h3: 'Mathematik', sub: '15 bis 19 Jahre', courses: [
        { code: 'HE / MATHE / 01', slug: 'abitur-mathematics-course-in-english', title: 'Abitur-Mathematik', blurb: 'Vorbereitung auf das Mathe-Abitur.' },
        { code: 'HE / MATHE / 02', slug: 'statistics-probability-maths-course', title: 'Stochastik', blurb: 'Zufall und Statistik verstehen.' },
        { code: 'HE / MATHE / 03', slug: 'maths-through-coding', title: 'Mathematik mit Code', blurb: 'Mathe in Python nachrechnen.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Ablauf',
    h2: 'So läuft die Vorbereitung',
    lede: 'Wöchentlich zwei Live-Einheiten, jede etwa eine Stunde, immer mit Ihrem Mentor. Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Mittag oder später Nachmittag', l: 'Passend zum hessischen Schultag.' },
      { time: 'Sonntag', l: 'Am Vormittag, für ruhige Übung.' },
      { time: 'Einzeln', l: 'Nach dem Ende der Q4 bis zum Prüfungstag.' }
    ],
    cells: [
      { h3: 'Fester Mentor', p: 'Kennt Sprache, Kursart und Lücken.' },
      { h3: 'Nach Erlass', p: 'Die Themenfelder 2027 sind der Plan.' },
      { h3: 'Ohne PC üben', p: 'Lösungen zuerst handschriftlich.' },
      { h3: 'Klares Englisch', p: 'Begriffe zusätzlich auf Deutsch.' },
      { h3: 'Monatlicher Stand', p: 'Kurz und konkret für Eltern.' },
      { h3: 'Gruppe oder einzeln', p: 'Fünfzehn bis zwanzig oder allein.' }
    ]
  },

  projectsH2: 'Projekte von Lernenden',
  projectsLede: 'Was Lernende neben der Schule programmieren, zeigen die Karten unten. Mehr auf <a class="ag-inline-link" href="/student-labs">Student labs</a> (englischsprachig).',
  reviewsLede: 'Google-Bewertungen von Familien und Lernenden, unverändert auf Englisch.',

  fees: {
    h2: 'Preise der Vorbereitung',
    lede: 'Die Gebühr gilt pro Monat und schließt acht Live-Stunden ein. In Euro angezeigt wird sie nach dem Referenzkurs der Europäischen Zentralbank. Abgebucht wird in US-Dollar; die Umrechnung erledigt Ihre Bank, deshalb kann der Endbetrag geringfügig abweichen.',
    free: ['Probestunde gratis', 'Kurze Einstufung', 'Ohne Karte'],
    group: ['Gruppe mit fünfzehn bis zwanzig', 'Durchgehend derselbe Mentor', 'Zwei Einheiten pro Woche', 'Monatlich kündbar'],
    one: ['Einzelunterricht nur für Ihr Kind', 'In Java oder Python, wie im Kurs', 'Termine nach Absprache']
  },

  faq: {
    eyebrow: 'Fragen und Antworten',
    h2: 'Informatik-Abitur Hessen: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein. Unsere Stunden sind live und werden nur auf Englisch gehalten. Gerade hier zahlt sich das aus, denn Ihr Kind trainiert Programmieren und Englisch zugleich; SELECT, class und return kennt es ohnehin. Tempo und Aussprache stimmt der Mentor auf Ihr Kind ab.' },
      { q: 'Wird das Informatik-Abitur in Hessen in Java oder in Python geschrieben?', a: 'In beiden. Laut Abiturerlass 2027 gibt es die Pflichtaufgabe A in den Sprachvarianten Java und Python, und jeder Prüfling erhält die Variante, die im Unterricht benutzt wurde.' },
      { q: 'Wann ist das Informatik-Abitur 2027 in Hessen?', a: 'Im Grundkurs am Donnerstag, 15. April 2027, im Leistungskurs am Montag, 19. April 2027. Die Nachprüfungen liegen zwischen dem 18. Mai und dem 3. Juni 2027.' },
      { q: 'Wie lange dauert die Prüfung?', a: 'Laut Erlass 255 Minuten im Grundkursfach und 300 Minuten im Leistungsfach. Die Auswahlzeit ist darin enthalten.' },
      { q: 'Welche Hilfsmittel sind erlaubt?', a: 'Ein Wörterbuch der deutschen Rechtschreibung, das den Aufgaben beigefügte Glossar und eine Liste der fachspezifischen Operatoren. Aufgaben mit PC-Nutzung werden nicht bereitgestellt.' },
      { q: 'Ist Informatik in Hessen Pflichtfach?', a: 'Nein. Laut Informatik-Monitor 2026/27 findet in Hessen schulartübergreifend kein verbindlicher Informatikunterricht statt, und verbindliche Pläne für ein Pflichtfach sind nicht bekannt. In der Einführungsphase sind keine Vorkenntnisse nötig.' },
      { q: 'Wie viele Bewertungseinheiten gibt es?', a: 'Im Grundkurs höchstens 90 (Aufgabe A 50, Wahlaufgabe B 40), im Leistungskurs höchstens 120 (drei Aufgaben zu je 40).' },
      { q: 'Wann finden die Stunden statt?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. 17:15 Uhr in Frankfurt ist im Winter 21:45 Uhr in Indien.' },
      { q: 'In welcher Währung bezahle ich?', a: 'Abgerechnet wird monatlich in US-Dollar. Zur Orientierung steht hier ein Euro-Betrag, berechnet mit dem Referenzkurs der Europäischen Zentralbank, und Ihre Bank übernimmt den Währungswechsel. Für die erste Stunde fällt nichts an.' },
      { q: 'Sind Sie mit dem Kultusministerium verbunden?', a: 'Nein. Wir unterrichten neben der Schule, vergeben keine Noten und versprechen kein Ergebnis. Maßgeblich sind Schule, Erlass und Prüfung.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weiterlesen',
    h2: 'Weitere Seiten zu Informatik in Deutschland',
    lede: 'Großteils auf Englisch.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Unser Angebot für ganz Deutschland.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Für alle Klassenstufen.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by state', p: 'Pflichtfach oder nicht, Land für Land.' },
      { href: '/abitur-computer-science-in-english', label: 'Abitur computer science in English', p: 'Das Fach im Abitur, englisch erklärt.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'Mathematik-Abitur auf Englisch.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projekte unserer Lernenden.' }
    ]
  },

  start: {
    h2: 'Probestunde für Hessen buchen',
    lede: 'Sagen Sie uns vorab, ob in der Schule Java oder Python verwendet wird, und legen Sie eine aktuelle Klausur aus Q1 bis Q4 dazu. Der Mentor löst eine Aufgabe mit Ihrem Kind und schlägt danach Kurs und Wochenplan bis April 2027 vor.',
    readFirst: 'Zum Vorab-Lesen: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> über unseren Unterricht, <a class="ag-inline-link" href="/informatik-in-german-schools-by-state">Informatik by state</a> über Informatik in allen Ländern (beide englisch).',
    note: 'Live-Unterricht online, ausschließlich auf Englisch, Mentoren in Indien. WhatsApp ist der schnellste Weg zu uns.',
    formNote: 'Ohne Kosten, ohne Vertrag, ohne Karte.'
  },

  footer: {
    cols: [
      { h4: 'Kurse', links: [
        { href: '/courses/informatik-abitur-course-java-python', label: 'Informatik Abitur' },
        { href: '/courses/python-complete-masterclass-teens', label: 'Python für Jugendliche' },
        { href: '/courses/mysql-mastery-for-teens', label: 'SQL für Jugendliche' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/abitur-computer-science-in-english', label: 'Abitur computer science' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Eine Relation kennt keine Duplikate'
  },

  personalityCss: `
.ag-root.ag-iah .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-iah .ag-capsule { border-left-width: 6px; }
.ag-root.ag-iah .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-iah .ag-table td:nth-child(2) { white-space: normal; }
.ag-root.ag-iah .ag-code-head b { letter-spacing: 0.015em; }
`,

  dossier: {
    curriculumAuthority: 'Hessisches Ministerium für Kultus, Bildung und Chancen: Abiturerlass zum Landesabitur 2027 (Erlass vom 2. Juli 2025), sections 2.4, aids annex, Auswahlmodus, 27 Informatik, Prüfungsabfolge; GI Informatik-Monitor 2026/27, Hessen page; Einheiten- und Zeitgesetz. Read 2 and 3 November 2026. Exercise our own.',
    localProject: 'Projection as a set: an original Python exercise on invented library loans; relational algebra gives 3 genres, SQL without DISTINCT 6 rows, with DISTINCT 3; the six pairs are only 5 distinct tuples, which exposes a missing key. Lesson family: a projection is a set; SQL keeps duplicates unless you say DISTINCT.',
    requiredMentions: ['Tupel als Menge: 5 statt 6', 'SQL ohne DISTINCT: 6 Zeilen', 'in den Sprachvarianten Java und Python', 'Donnerstag, 15. April 2027', 'Montag, 19. April 2027', 'Q3.5 Registermaschine', 'Eine Relation kennt keine Duplikate', 'Aufgabe A 50, Wahlaufgabe B 40'],
    sources: [
      { claim: 'Hessen Landesabitur 2027 Informatik: Java and Python variants, BE, choice rules, topics, aids, no PC, times, dates.', url: 'https://kultus.hessen.de/sites/kultus.hessen.de/files/2026-08/abiturerlass_la_2027.pdf' },
      { claim: 'Hessen: no compulsory Informatik, E-phase without prior knowledge, GK and LK hours, central exam, no computer, shares 10 and 5 percent, Digitale Welt.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/hessen' },
      { claim: 'No binding plans for Pflichtfach Informatik in Hessen.', url: 'https://informatik-monitor.de/' },
      { claim: 'German legal time.', url: 'https://www.gesetze-im-internet.de/einhzeitg/' }
    ],
    rejectedClaims: [
      'German-language teaching: English only, said plainly.',
      'Third-party practice-exam sites as sources for the Java/Python rule: rejected; quoted from the Erlass itself.',
      'Reproducing real Hessen Abitur tasks: refused; the exercise is our own.',
      'Any grade promise: refused.',
      'Gender shares from the Informatik-Monitor: not used.'
    ]
  }
};
