'use strict';
// Informatik-Abitur Niedersachsen (ag- German-language door, Germany cluster row DE085, P3).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; formal "Sie";
// euro shown, USD charged. We teach alongside school and award no grades.
// Angle: only Niedersachsen facts. The written exam has no computer, no calculator and no Formelsammlung; the only aid is a
// central information sheet. The Kultusministerium's "Ergänzende Hinweise zum Kerncurriculum Informatik" (Neufassung Juni
// 2025, binding from the 2027 Abitur) fix notations: DynArray, Stack, Queue, BinTree operations, zero-based indices,
// Struktogramme, SQL subset, run-length coding (Anzahl-Wert), compression ratio, (7,4)-Hamming. Exam date Monday
// 26 April 2027. Original practice task: run-length coding with the official ratio formulas, in Python.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/informatik-abitur-niedersachsen/,
// fetched 3 November 2026; bildungsportal-niedersachsen.de returned HTTP 403 for the Zentralabitur 2027 page, kept as
// bildungsportal-HTTP403.html, not retried; the subject-specific Hinweise 2027 PDF that lives there was therefore not read):
//  - Nds. Kultusministerium, Ergänzende Hinweise zum Kerncurriculum Informatik, "Neufassung Juni 2025; verbindlich für die
//    Abiturprüfungen ab 2027" (cuvo.nibis.de upload 788, cuvo-788.pdf): "Ein Teil der Abschnitte ist im schriftlichen Abitur
//    als Hilfsmittel für die Prüflinge zugelassen."; string operations "in der im Unterricht verwendeten Programmiersprache";
//    "Der Operator / steht bei der Verwendung mit zwei ganzen Zahlen für die ganzzahlige Division ohne Rest"; "Der Operator
//    mod steht für den (kleinsten, positiven) Rest"; "beginnt die Nummerierung der Elemente einer statischen Reihung mit dem
//    Index 0"; "[Zeile][Spalte]"; DynArray, Stack (top, push, pop), Queue (head, enqueue, dequeue), BinTree (isLeaf, getLeft,
//    setRight ...); "Laufzeitfehler ... müssen bei der Verwendung durch entsprechende Abfragen explizit ausgeschlossen werden";
//    "Zur Darstellung von Algorithmen werden in den zentralen Prüfungsaufgaben Struktogramme verwendet"; "Konstruktor-
//    Operationen werden durch ein vorangestelltes c notiert"; "Verschachtelte SQL-Anweisungen werden im Rahmen der zentralen
//    Prüfungsaufgaben nicht thematisiert."; aggregate functions "AVG, COUNT, MAX, MIN, SUM"; "Die Notation erfolgt in der
//    Reihenfolge Anzahl-Wert."; "Vorgaben für die Notation der Anzahlen, z. B. nur einstellige Zahlen, ergeben sich aus dem
//    jeweiligen Aufgabenkontext."; "Kompressionsverhältnis = Größe der komprimierten Daten / Größe der Originaldaten";
//    "Prozentuale Datenersparnis = (1 – Größe der komprimierten Daten / Größe der Originaldaten) ∙ 100 %"; Hamming
//    "p0 p1 d0 p2 d1 d2 d3", "auf Basis einer geraden Parität"; ASCII table, Vigenère square.
//  - Nds. Kultusministerium, Termine für die Abiturprüfungen 2027, Bek. d. MK v. 28.04.2025 (Abiturtermine_2027.pdf,
//    mk.niedersachsen.de), rendered table checked: "Mo 26.04.2027 Sport, Informatik"; written main period "Di, 06.04. - Do,
//    13.05.2027"; end of fourth Qualifikationsphase half-year "Do, 18.03.2027"; first Nachschreibtermin "Fr 28.05.2027
//    Sport, Informatik"; oral exams "Mi, 19.05. - Mo, 07.06.2027".
//  - GI Informatik-Monitor 2026/27, Niedersachsen page (infmon-ni.txt): FACTS 79; Einführungsphase "als zweistündiges
//    Wahlpflichtfach"; Qualifikationsphase "durchgängig fünfstündig auf erhöhtem Anforderungsniveau (zweites
//    Schwerpunktfach) oder dreistündig auf grundlegendem Anforderungsniveau (Ergänzungsfach)"; "Im sprachlichen sowie im
//    musisch-künstlerischen Schwerpunkt kann Informatik nur zusätzlich im Wahlbereich belegt werden."; "Im Schwerpunktfach
//    Informatik wird grundsätzlich schriftlich geprüft."; "Praktische Prüfungsanteile ... nicht vorgesehen"; "Die
//    Verwendung eines Taschenrechners oder einer Formelsammlung ist ... nicht zulässig"; Kennzahlen "Anteil SuS mit
//    Informatik in der Sek II 9 %" (2024/2025, KMK) and "Anteil Abiturientinnen und Abiturienten mit Prüfungsfach
//    Informatik 5 %" (footnote "Inklusiv Berufliche Gymnasien", 2024/2025, Nds. Kultusministerium). National page FACTS 99
//    (Niedersachsen among "Schlusslichter ... ungefähr jede zwölfte Person"). Gender shares not used.
//  - Time: EinhZeitG; summer time 2027 from 28 March.
// Our own: rle.py, run with python3 -I on 3 November 2026:
//   "wwwwwwbbbwwww -> 6w3b4w | Verhältnis 0.462 | Ersparnis 53.8 %"
//   "wbwbwb -> 1w1b1w1b1w1b | Verhältnis 2.0 | Ersparnis -100.0 %"
//   Hand calculation (ours): twelve w with single-digit counts only: 9w3w.
// Lesson family: measure before you trust a compression; run-length coding can make data bigger.

const { DE } = require('../../scripts/nl/lib/market-de');

const PY = [
  'def lauflaenge(folge):',
  '    if folge == "":',
  '        return ""',
  '    ergebnis = ""',
  '    anzahl = 1',
  '    for i in range(1, len(folge)):',
  '        if folge[i] == folge[i - 1]:',
  '            anzahl = anzahl + 1',
  '        else:',
  '            ergebnis = ergebnis + str(anzahl) + folge[i - 1]',
  '            anzahl = 1',
  '    ergebnis = ergebnis + str(anzahl) + folge[-1]',
  '    return ergebnis',
  '',
  'for folge in ["wwwwwwbbbwwww", "wbwbwb"]:',
  '    code = lauflaenge(folge)',
  '    verhaeltnis = len(code) / len(folge)',
  '    ersparnis = (1 - verhaeltnis) * 100',
  '    print(folge, "->", code, "| Verhältnis", round(verhaeltnis, 3), "| Ersparnis", round(ersparnis, 1), "%")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'Informatik-Abitur Niedersachsen' },
  slug: 'informatik-abitur-niedersachsen',
  code: 'ina',
  accent: '#68548C',
  accentRationale: 'Informatik-Abitur Niedersachsen: a dusky purple #68548C from alloc.tsv, set apart from the slate of NRW and the violet of Bayern; contrast 5.27 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Informatik-Abitur Niedersachsen (Unterricht auf Englisch)',
  title: 'Informatik-Abitur Niedersachsen 2027: Regeln, Termin, Übung',
  description: 'Informatik-Abitur Niedersachsen 2027: kein Rechner, kein Taschenrechner, nur ein Informationsblatt. Termin 26. April 2027 und eine Übung in Python, auf Englisch.',
  ogDescription: 'Was das Zentralabitur Informatik in Niedersachsen 2027 verlangt: Notationen nach den Ergänzenden Hinweisen, der Prüfungstag und eine eigene Übung zur Lauflängencodierung mit Lösung.',
  twitterDescription: 'Informatik-Abitur Niedersachsen 2027: Hilfsmittel, Notationen, Termin am 26. April 2027 und eine gelöste Übung.',
  pageName: 'Informatik-Abitur Niedersachsen',
  webPageDescription: 'Was Oberstufenschülerinnen und -schüler in Niedersachsen für das zentrale Informatik-Abitur 2027 wissen müssen: Hilfsmittel und Prüfungsformen nach dem Informatik-Monitor 2026/27, die verbindlichen Schreibweisen des Kultusministeriums, der Termin und eine eigene Aufgabe zur Lauflängencodierung.',
  courseDescription: 'Live-Kurs für die gymnasiale Oberstufe in Niedersachsen, nur auf Englisch unterrichtet: Struktogramme, DynArray, Stack, Queue und BinTree, SQL ohne Verschachtelung, Codierung und Kompression, mit Aufgaben ohne Rechner, als Gruppe oder einzeln.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Informatik-Abitur Niedersachsen',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#pruefung', label: 'Prüfung' },
    { href: '#notation', label: 'Notation' },
    { href: '#uebung', label: 'Übung' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Niedersachsen &middot; Zentralabitur 2027 &middot; Informatik',
  h1: 'Informatik-Abitur Niedersachsen: Vorbereitung auf Englisch',
  lede: 'In Niedersachsen wird Informatik im Abitur mit Stift und einem einzigen zugelassenen Hilfsmittel geschrieben: einem Informationsblatt des Landes. Taschenrechner und Formelsammlung sind nicht erlaubt. Umso wichtiger sind die Schreibweisen, die das Kultusministerium für die zentralen Aufgaben festgelegt hat. Diese Seite fasst sie zusammen, nennt den Prüfungstag 2027 und rechnet eine eigene Übung zur Lauflängencodierung durch.',
  secondaryCta: { href: '#notation', label: 'Die Schreibweisen' },
  wa: 'Hallo Modern Age Coders, unsere Tochter oder unser Sohn schreibt 2027 in Niedersachsen Informatik im Abitur. Ist eine kostenlose Probestunde auf Englisch möglich?',
  heroNote: 'Live seit 2020 &middot; über 10.000 Lernende weltweit unterrichtet &middot; Struktogramme und Code von Hand geübt, auf Englisch',
  spec: [
    ['Für', 'Einführungs- und Qualifikationsphase'],
    ['Sprachen', 'die Schulsprache, dazu SQL'],
    ['Form', 'Gruppe (15 bis 20) oder einzeln'],
    ['Übung', 'ohne Rechner und Taschenrechner'],
    ['Mentor', 'fest zugeteilt, live aus Indien'],
    ['Probe', 'erste Stunde kostenlos']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Das Informatik-Abitur 2027 in Niedersachsen wird zentral gestellt und am Montag, 26. April 2027 geschrieben, ohne Rechner, ohne Taschenrechner und ohne Formelsammlung; erlaubt ist nur ein Informationsblatt des Landes. Modern Age Coders bereitet darauf live online vor, auf Englisch, im Kurs Informatik Oberstufe und Abitur, als Gruppe oder im Einzelunterricht, mit einem Mentor, der sich auf Ihr Kind einstellt.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Kurse für das Abitur in Niedersachsen',
    lede: 'Der Abiturkurs folgt dem Kerncurriculum, der SQL-Kurs vertieft Datenbankabfragen im Umfang, den das Land vorgibt, und der Algorithmenkurs trainiert Datenstrukturen von Grund auf.',
    items: [
      { course: 'informatik-abitur-course-java-python', code: 'NI / 01', title: 'Informatik Oberstufe und Abitur', alt: 'Kursbild Informatik Oberstufe und Abitur mit Java und Python', note: 'Einführungs- bis Qualifikationsphase. Struktogramme, Datenstrukturen, Datenbanken, Codierung und Automaten, Lösungen von Hand.' },
      { course: 'mysql-mastery-for-teens', code: 'NI / 02', title: 'SQL und Datenbanken für Jugendliche', alt: 'Kursbild SQL und Datenbanken für Jugendliche', note: 'Ab 13. SELECT mit Gruppierung, Verknüpfung mehrerer Tabellen und ER-Modelle, Schritt für Schritt.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'NI / 03', title: 'Algorithmen und Datenstrukturen', alt: 'Kursbild Algorithmen und Datenstrukturen für Jugendliche', note: 'Ab 13. Stapel, Schlangen, Bäume und Suchverfahren, mit vielen Übungen zum Nachvollziehen.' }
    ]
  },

  sections: [
    {
      id: 'pruefung',
      eyebrow: 'Prüfung und Oberstufe',
      h2: 'Wie läuft das Informatik-Abitur in Niedersachsen ab?',
      lede: 'Die Aufgaben stellt das Land zentral, auf Grundlage der Einheitlichen Prüfungsanforderungen und des Kerncurriculums Informatik. Alle Kompetenzen des Kerncurriculums sind verbindlich, Rechnerarbeit gibt es keine.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik in der Oberstufe und im Abitur in Niedersachsen', head: ['Frage', 'Regel', 'Quelle'], rows: [
          ['Einführungsphase', 'Informatik als zweistündiges Wahlpflichtfach möglich', 'Informatik-Monitor 2026/27'],
          ['Erhöhtes Niveau', 'fünf Stunden, als zweites Schwerpunktfach im mathematisch-naturwissenschaftlichen Schwerpunkt', 'Informatik-Monitor 2026/27'],
          ['Grundlegendes Niveau', 'drei Stunden als Ergänzungsfach', 'Informatik-Monitor 2026/27'],
          ['Sprachlicher oder musisch-künstlerischer Schwerpunkt', 'Informatik nur zusätzlich im Wahlbereich', 'Informatik-Monitor 2026/27'],
          ['Prüfung im Schwerpunktfach', 'grundsätzlich schriftlich', 'Informatik-Monitor 2026/27'],
          ['Arbeit am Rechner', 'keine Aufgaben, die einen Rechner erfordern', 'Informatik-Monitor 2026/27'],
          ['Taschenrechner, Formelsammlung', 'nicht zulässig', 'Informatik-Monitor 2026/27'],
          ['Zugelassenes Hilfsmittel', 'ein zentral vorgegebenes Informationsblatt, ausgedruckt', 'Informatik-Monitor 2026/27; Kultusministerium'],
          ['Prüfungstag 2027', 'Montag, 26. April 2027', 'Kultusministerium, Bek. vom 28.04.2025']
        ] },
        { kind: 'source', html: 'Quellen: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Seite Niedersachsen (gelesen am 2. November 2026); Niedersächsisches Kultusministerium, Termine für die Abiturprüfungen 2027, Bekanntmachung vom 28. April 2025 (gelesen am 3. November 2026, Tabelle im Original geprüft).' },
        { kind: 'two', mt: true,
          leftH3: 'Wann Informatik schriftlich geprüft wird',
          left: [
            'Nach dem Informatik-Monitor kann das Ergänzungsfach Informatik am Gymnasium mit mathematisch-naturwissenschaftlichem Schwerpunkt drittes, schriftliches Prüfungsfach werden, wenn es in der Qualifikationsphase durchgehend fünfstündig belegt war und schon in der Einführungsphase belegt wurde.',
            'Mit drei Wochenstunden, durchgehend seit der Einführungsphase belegt, ist es als viertes, schriftliches oder als fünftes, mündliches Prüfungsfach möglich. Im fünften Fach kann auch eine Präsentationsprüfung stattfinden.'
          ],
          rightH3: 'Wie viele Informatik wählen',
          right: [
            'Laut Monitor hatten im Schuljahr 2024/2025 in Niedersachsen 9 Prozent der Lernenden der Sekundarstufe II Informatik belegt (Quelle: Kultusministerkonferenz). Prüfungsfach war Informatik für 5 Prozent der Abiturientinnen und Abiturienten, berufliche Gymnasien eingerechnet (Quelle: Kultusministerium).',
            'Im bundesweiten Teil des Monitors zählt Niedersachsen zu den drei Ländern, in denen nur ungefähr jede zwölfte Person in der Oberstufe Informatik belegt. Pflichtfach ist Informatik dort seit 2024/25 in Klasse 9 und 10.'
          ] }
      ]
    },
    {
      id: 'notation',
      eyebrow: 'Ergänzende Hinweise, Fassung Juni 2025',
      h2: 'Welche Schreibweisen gelten im Informatik-Abitur Niedersachsen?',
      lede: 'Das Kultusministerium hat im Juni 2025 neu gefasst, wie zentrale Aufgaben Datenstrukturen, Algorithmen und Datenbanken notieren. Die Fassung ist ab dem Abitur 2027 verbindlich. Ein Teil davon liegt in der Prüfung als Hilfsmittel aus, ein anderer Teil nicht.',
      body: [
        { kind: 'table', numCols: [], caption: 'Festlegungen aus den Ergänzenden Hinweisen zum Kerncurriculum Informatik (Auswahl)', head: ['Bereich', 'Festlegung'], rows: [
          ['Indizes', 'In sprachunabhängigen Betrachtungen beginnt die Zählung bei 0; bei Implementierungen gilt die Indizierung der verwendeten Sprache'],
          ['Zweidimensionale Reihungen', 'im Normalfall [Zeile][Spalte]'],
          ['Division und Rest', '/ ist bei zwei ganzen Zahlen die ganzzahlige Division, mod der kleinste positive Rest'],
          ['Dynamische Reihung', 'Klasse DynArray mit isEmpty, getItem, append, insertAt, setItem, delete, getLength'],
          ['Stapel und Schlange', 'Stack mit top, push, pop; Queue mit head, enqueue, dequeue'],
          ['Binärbaum', 'BinTree mit isLeaf, getLeft, setLeft, getRight, setRight, setEmpty und weiteren'],
          ['Laufzeitfehler', 'zum Beispiel pop auf leerem Stapel: müssen durch Abfragen ausgeschlossen werden'],
          ['Algorithmen', 'Struktogramme; Kommentare mit zwei Schrägstrichen'],
          ['Klassendiagramme', 'Konstruktoren mit vorangestelltem c, Sichtbarkeit + und - im Normalfall Pflicht'],
          ['SQL', 'SELECT mit WHERE, GROUP BY, HAVING, ORDER BY, LIMIT; AVG, COUNT, MAX, MIN, SUM; keine verschachtelten Anweisungen'],
          ['Lauflängencodierung', 'Reihenfolge Anzahl-Wert'],
          ['Hamming-Code', '(7,4) in der Reihenfolge p0 p1 d0 p2 d1 d2 d3, gerade Parität']
        ] },
        { kind: 'source', html: 'Quelle: Niedersächsisches Kultusministerium, Ergänzende Hinweise zum Kerncurriculum Informatik für die gymnasiale Oberstufe, Neufassung Juni 2025, verbindlich für die Abiturprüfungen ab 2027, bezogen über cuvo.nibis.de am 3. November 2026. Die Auswahl und die Kurzform sind unsere; maßgeblich ist das Dokument selbst.' },
        { kind: 'p', mt: true, html: 'Für die Vorbereitung ist ein Satz besonders wichtig: Mögliche Laufzeitfehler müssen in der eigenen Lösung durch Abfragen ausgeschlossen werden. Wer <code>pop</code> aufruft, ohne vorher mit <code>isEmpty</code> zu prüfen, verliert Punkte, auch wenn der Algorithmus sonst stimmt. Ebenso wichtig: Zeichenketten dürfen nur mit den aufgezählten Operationen bearbeitet werden, etwa Länge bestimmen, Zeichen auslesen, Teilzeichenkette bilden oder ASCII-Werte umrechnen. Bequeme Bibliotheksfunktionen darüber hinaus sind in zentralen Aufgaben nicht zulässig.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Struktogramm lesen', p: 'Die Aufgaben stellen Algorithmen als Struktogramm dar, sprachunabhängig formuliert. "gib ... zurück" beendet die Operation an dieser Stelle. Das zu übersetzen ist eine eigene Fertigkeit.' },
          { h3: 'Sprache der Schule', p: 'Die Hinweise schreiben keine bestimmte Programmiersprache vor, sondern sprechen von der im Unterricht verwendeten. Wir arbeiten in der Sprache, die Ihr Kind in der Schule nutzt.' },
          { h3: 'Ohne Rechenhilfe', p: 'Weil kein Taschenrechner erlaubt ist, müssen Kompressionsraten, Paritäten und Binärumrechnungen im Kopf oder schriftlich gelingen. Das üben wir gezielt.' }
        ] }
      ]
    },
    {
      id: 'uebung',
      tint: 'tint',
      eyebrow: 'Eine Übungsaufgabe von uns',
      h2: 'Lohnt sich eine Lauflängencodierung immer?',
      lede: 'Die Ergänzenden Hinweise legen fest, wie eine Lauflängencodierung notiert und wie das Kompressionsverhältnis berechnet wird. Die folgende Aufgabe ist unsere eigene, keine echte Prüfungsaufgabe; Folgen und Zahlen sind von uns gewählt.',
      body: [
        { kind: 'p', html: '<strong>Aufgabe (unsere).</strong> Eine Bildzeile aus weißen (w) und schwarzen (b) Pixeln wird lauflängencodiert, Notation Anzahl-Wert, jedes Zeichen zählt gleich viel. a) Codieren Sie die Zeile wwwwwwbbbwwww und berechnen Sie das Kompressionsverhältnis und die prozentuale Datenersparnis. b) Wiederholen Sie das für wbwbwb und deuten Sie das Ergebnis. c) Im Aufgabenkontext seien nur einstellige Anzahlen erlaubt. Wie lautet dann die Codierung von zwölf w hintereinander?' },
        { kind: 'table', numCols: [1, 2, 3], caption: 'Lösung zu a) und b), Größen in Zeichen (unsere Rechnung)', head: ['Zeile', 'Original', 'Codiert', 'Verhältnis', 'Ersparnis'], rows: [
          ['wwwwwwbbbwwww', '13', '6w3b4w (6)', '6/13 ≈ 0,462', 'etwa 53,8 Prozent'],
          ['wbwbwb', '6', '1w1b1w1b1w1b (12)', '12/6 = 2,0', 'minus 100 Prozent']
        ] },
        { kind: 'p', mt: true, html: 'Bei der ersten Zeile spart die Codierung gut die Hälfte. Bei der zweiten ist die codierte Zeile doppelt so lang wie vorher, die Ersparnis ist negativ. Das ist die eigentliche Lehre der Aufgabe: Lauflängencodierung lohnt sich nur, wenn lange Folgen gleicher Werte vorkommen. Bei ständig wechselnden Werten kostet jeder Wert ein zusätzliches Zeichen für die Anzahl.' },
        { kind: 'p', html: '<strong>Zu c).</strong> Zwölf passt nicht in eine Ziffer. Man teilt die Folge: 9w3w. Das sieht seltsam aus, weil zweimal w hintereinander steht, ist aber eindeutig zu decodieren. Die Hinweise sagen ausdrücklich, dass solche Vorgaben zur Notation der Anzahlen aus dem jeweiligen Aufgabenkontext folgen. Lesen Sie den Aufgabentext deshalb genau, bevor Sie codieren.' },
        { kind: 'code', label: 'rle.py: Codierung und Kennzahlen für beide Zeilen', lang: 'Python', code: PY, note: 'Ausgabe, so von uns ausgeführt: <code>wwwwwwbbbwwww -&gt; 6w3b4w | Verhältnis 0.462 | Ersparnis 53.8 %</code> und <code>wbwbwb -&gt; 1w1b1w1b1w1b | Verhältnis 2.0 | Ersparnis -100.0 %</code>. Python schreibt das Dezimalkomma als Punkt.' },
        { kind: 'p', mt: true, html: 'Das Programm nutzt bewusst nur Operationen, die auch die Ergänzenden Hinweise für Zeichenketten nennen: Länge bestimmen, ein Zeichen an einer Position lesen, zwei Zeichenketten verbinden. In der Prüfung schreiben Sie den Algorithmus mit Stift, als Struktogramm oder in Ihrer Unterrichtssprache. Den Rechner nutzen wir in der Vorbereitung nur, um die eigene Lösung hinterher zu prüfen.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Erst messen, dann loben.</strong> Rechnen Sie das Kompressionsverhältnis immer aus. Ein Wert über 1 heißt: Die Daten sind größer geworden.',
          '<strong>Den letzten Lauf nicht vergessen.</strong> Die Schleife schreibt einen Lauf erst, wenn der Wert wechselt. Nach der Schleife fehlt der letzte, deshalb steht die Zeile nach der Schleife im Code.',
          '<strong>Ohne Taschenrechner rechnen.</strong> 6/13 lässt sich schriftlich abschätzen: etwas weniger als die Hälfte, also etwas mehr als 50 Prozent Ersparnis. In der Prüfung reicht oft ein sauber begründeter Bruch.'
        ] }
      ]
    },
    {
      id: 'englisch',
      eyebrow: 'Unterricht auf Englisch',
      h2: 'Hilft Unterricht auf Englisch bei einer deutschen Prüfung?',
      lede: 'Wir unterrichten nur auf Englisch, die Prüfung ist deutsch. Die Operationen der Abiturklassen heißen ohnehin push, pop, enqueue und isEmpty, also englisch.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Die Klassen sprechen Englisch', p: 'DynArray, Stack, Queue und BinTree mit ihren Methoden sind englisch benannt. Im Unterricht erklären wir, was die Wörter bedeuten, und ordnen die deutschen Begriffe der Hinweise zu: Reihung, Stapel, Schlange, Binärbaum.' },
          { h3: 'Struktogramme auf Deutsch', p: 'Die Formulierungen im Struktogramm sind in der Prüfung deutsch. Wir lesen sie gemeinsam im Original, besprechen sie auf Englisch und übersetzen sie dann in Code.' },
          { h3: 'Langsam und klar', p: 'Der Mentor unterrichtet live aus Indien. Er hält das Tempo Ihres Kindes, sagt Schwieriges ein zweites Mal anders und lässt Raum für Rückfragen, gern auch auf Deutsch.' }
        ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Einstiegsstunde.</strong> Wir lösen mit Ihrem Kind eine Aufgabe aus dem aktuellen Semester und sehen, welche Schreibweisen schon sitzen.',
          '<strong>Plan bis zum 26. April 2027.</strong> Die Wochen bis zum Prüfungstag werden auf die Themen des Kerncurriculums verteilt, mit Puffer für Klausuren.',
          '<strong>Jede Woche ohne Rechner.</strong> Mindestens eine Aufgabe wird vollständig von Hand gelöst, inklusive aller Abfragen auf leere Strukturen.',
          '<strong>Generalprobe.</strong> Vor dem Termin schreiben wir eine eigene Aufgabe unter Prüfungsbedingungen, nur mit einem nachgebauten Informationsblatt.'
        ] }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Wann sind die Live-Stunden?',
      lede: 'Wir richten die Uhrzeit nach dem Schultag in Niedersachsen, nicht nach dem Kalender des Mentors. Drei Beispielzeiten:',
      body: [
        { kind: 'table', numCols: [], caption: 'Uhrzeit in Niedersachsen und beim Mentor in Indien', head: ['Niedersachsen', 'Mentor in Indien, Winterzeit', 'Mentor in Indien, ab 28. März 2027'], rows: [
          ['15:15', '19:45', '18:45'],
          ['19:00', '23:30', '22:30'],
          ['Samstag 12:00', '16:30', '15:30']
        ] },
        { kind: 'source', html: 'Grundlage ist das Einheiten- und Zeitgesetz: mitteleuropäische Zeit, UTC+1, solange keine Sommerzeit gilt, sonst UTC+2. Zurückgestellt wurde am 25. Oktober 2026, vorgestellt wird am 28. März 2027. Indien bleibt bei UTC+5:30, also im Winter viereinhalb und im Sommer dreieinhalb Stunden voraus. Beispielzeiten, keine festen Gruppen.' },
        { kind: 'p', mt: true, html: 'Nach dem Ende des vierten Halbjahres am 18. März 2027 und bis zum 26. April 2027 bleibt gut ein Monat. In dieser Zeit wünschen sich viele Familien zusätzliche Einzelstunden, die Sie in Ihrer eigenen Zeitzone buchen.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Woran der Fortschritt sichtbar wird',
    lede: 'Unsere eigene Einteilung für die Oberstufe in Niedersachsen. Sie ersetzt keine Bewertung der Schule.',
    table: { caption: 'Fünf Stufen bis zum Abitur (unsere)', head: ['Stufe', 'Etwa wann', 'Ihr Kind kann'], rows: [
      ['1. Struktogramm übersetzen', 'Einführungsphase', 'ein Struktogramm in Code umsetzen und umgekehrt'],
      ['2. Strukturen sicher nutzen', 'erstes Jahr der Q-Phase', 'mit DynArray, Stack und Queue arbeiten und jeden Laufzeitfehler ausschließen'],
      ['3. Rekursion im Baum', 'erstes Jahr der Q-Phase', 'BinTree rekursiv durchlaufen und Teilbäume begründet verändern'],
      ['4. Daten und Codes', 'zweites Jahr der Q-Phase', 'SQL im festgelegten Umfang schreiben, Hamming-Prüfbits setzen, Kompression bewerten'],
      ['5. Prüfungsreif', 'vor dem 26. April 2027', 'eine vollständige Aufgabe nur mit Informationsblatt lösen']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Monatlich erhalten Sie eine kurze Notiz: erreichte Stufe, offene Punkte, nächstes Ziel.',
      'Viele Fehler im Abitur sind keine Denkfehler, sondern vergessene Abfragen. Darauf achten wir in jeder Stunde.'
    ] },
    right: { h3: 'Für die Prüflinge', ps: [
      'Fragen Sie sich vor jedem pop und jedem dequeue: Kann die Struktur hier leer sein?',
      'Rechnen Sie Brüche zuerst als Bruch. Dezimalzahlen ohne Taschenrechner kosten Zeit.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse für Oberstufe und Studium',
    lede: 'Zum Aufholen, Vertiefen oder Weiterdenken. Alle in derselben Form, live und auf Englisch.',
    bands: [
      { num: 'I', h3: 'Programmiersprachen', sub: '13 bis 19 Jahre', courses: [
        { code: 'NI / CODE / 01', slug: 'python-complete-masterclass-teens', title: 'Python für Jugendliche', blurb: 'Saubere Grundlagen und eigene Programme.' },
        { code: 'NI / CODE / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java für Jugendliche', blurb: 'Klassen und Objekte Schritt für Schritt.' },
        { code: 'NI / CODE / 03', slug: 'competitive-programming-for-teens-course', title: 'Wettbewerbsprogrammierung', blurb: 'Schnelle Algorithmen für Neugierige.' }
      ] },
      { num: 'II', h3: 'Daten und Sicherheit', sub: '13 bis 19 Jahre', courses: [
        { code: 'NI / DATA / 01', slug: 'cybersecurity-course-for-teens-ethical-defensive', title: 'IT-Sicherheit', blurb: 'Verschlüsselung und Schutz verstehen.' },
        { code: 'NI / DATA / 02', slug: 'data-science-course-for-teens-python-data', title: 'Data Science', blurb: 'Daten auswerten mit Python.' },
        { code: 'NI / DATA / 03', slug: 'ai-ml-masterclass-teens', title: 'KI und maschinelles Lernen', blurb: 'Wie Modelle aus Daten lernen.' }
      ] },
      { num: 'III', h3: 'Mathematik', sub: '15 bis 19 Jahre', courses: [
        { code: 'NI / MATHE / 01', slug: 'abitur-mathematics-course-in-english', title: 'Abitur-Mathematik', blurb: 'Analysis, Stochastik, Geometrie.' },
        { code: 'NI / MATHE / 02', slug: 'statistics-probability-maths-course', title: 'Stochastik', blurb: 'Wahrscheinlichkeit gründlich verstanden.' },
        { code: 'NI / MATHE / 03', slug: 'maths-through-coding', title: 'Mathematik mit Code', blurb: 'Rechnen und prüfen mit Python.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Ablauf',
    h2: 'So läuft der Live-Unterricht',
    lede: 'Zwei Stunden pro Woche, beide live und mit demselben Mentor. Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Nachmittag oder Abend', l: 'Nach Schule und Hausaufgaben.' },
      { time: 'Samstag', l: 'Mittags, für längere Übungen am Stück.' },
      { time: 'Einzeln', l: 'Zwischen Ende der Q-Phase und Prüfungstag.' }
    ],
    cells: [
      { h3: 'Ein Mentor', p: 'Kennt Kursstand und Schreibweisen der Schule.' },
      { h3: 'Nach Kerncurriculum', p: 'Alle Kompetenzen, nicht nur Lieblingsthemen.' },
      { h3: 'Von Hand', p: 'Lösungen ohne Rechner, danach geprüft.' },
      { h3: 'Verständliches Englisch', p: 'Begriffe auch auf Deutsch erklärt.' },
      { h3: 'Monatsnotiz', p: 'Kurzer Stand für die Eltern.' },
      { h3: 'Gruppe oder allein', p: 'Fünfzehn bis zwanzig Lernende oder einzeln.' }
    ]
  },

  projectsH2: 'Was unsere Lernenden programmieren',
  projectsLede: 'Neben dem Abiturstoff entstehen eigene Projekte. Einige zeigen die Karten unten, weitere die Seite <a class="ag-inline-link" href="/student-labs">Student labs</a> (auf Englisch).',
  reviewsLede: 'Stimmen von Eltern und Lernenden aus Google-Bewertungen, im englischen Wortlaut.',

  fees: {
    h2: 'Kosten für die Vorbereitung',
    lede: 'Berechnet wird ein Monat mit acht Live-Stunden. Die Euro-Preise auf dieser Seite folgen dem Referenzkurs der Europäischen Zentralbank. Ihr Konto wird in US-Dollar belastet und von Ihrer Bank umgerechnet, darum kann der gebuchte Betrag minimal abweichen.',
    free: ['Probestunde ohne Kosten', 'Einstufung an Schulmaterial', 'Ohne Kartenangabe'],
    group: ['Fünfzehn bis zwanzig Lernende', 'Derselbe Mentor jede Woche', 'Zwei Stunden wöchentlich', 'Monatlich kündbar'],
    one: ['Ihr Kind allein mit dem Mentor', 'Plan entlang des Kerncurriculums', 'Zeiten nach Wunsch']
  },

  faq: {
    eyebrow: 'Fragen und Antworten',
    h2: 'Informatik-Abitur Niedersachsen: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein, nur auf Englisch und immer live. Gerade in Informatik ist das ein Vorteil: Ihr Kind lernt Programmieren und Englisch zugleich, und die Methoden der Abiturklassen wie push oder enqueue sind ohnehin englisch. Die Mentoren passen Tempo und Aussprache an.' },
      { q: 'Wann ist das Informatik-Abitur 2027 in Niedersachsen?', a: 'Am Montag, 26. April 2027, zusammen mit Sport. Der erste Nachschreibtermin ist Freitag, 28. Mai 2027. So steht es in der Bekanntmachung des Kultusministeriums vom 28. April 2025.' },
      { q: 'Ist ein Taschenrechner im Informatik-Abitur Niedersachsen erlaubt?', a: 'Nein. Laut Informatik-Monitor 2026/27 sind Taschenrechner und Formelsammlung nicht zulässig. Erlaubt ist ein zentral vorgegebenes Informationsblatt in ausgedruckter Form.' },
      { q: 'Gibt es praktische Aufgaben am Computer?', a: 'Nein. Es dürfen keine Aufgaben gestellt werden, für die ein Rechner erforderlich ist. Programme werden von Hand geschrieben oder als Struktogramm dargestellt.' },
      { q: 'Welche Programmiersprache wird verlangt?', a: 'Die Ergänzenden Hinweise des Kultusministeriums sprechen von der im Unterricht verwendeten Programmiersprache. Algorithmen werden in den Aufgaben als sprachunabhängige Struktogramme gezeigt; SQL wird in einem festgelegten Umfang verwendet.' },
      { q: 'Welche Fassung der Ergänzenden Hinweise gilt für 2027?', a: 'Die Neufassung vom Juni 2025. Sie ist laut Titelblatt verbindlich für die Abiturprüfungen ab 2027 und legt unter anderem DynArray, Stack, Queue und BinTree mit ihren Operationen fest.' },
      { q: 'Kommen verschachtelte SQL-Abfragen vor?', a: 'Nein. Die Ergänzenden Hinweise sagen ausdrücklich, dass verschachtelte SQL-Anweisungen in zentralen Prüfungsaufgaben nicht thematisiert werden.' },
      { q: 'Wann finden die Stunden statt?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. 15:15 Uhr in Hannover ist im Winter 19:45 Uhr in Indien.' },
      { q: 'Wie zahle ich, und in welcher Währung?', a: 'Monatlich, und zwar in US-Dollar. Angezeigt wird der Betrag in Euro, umgerechnet mit dem Referenzkurs der Europäischen Zentralbank; den tatsächlichen Wechsel macht Ihre Bank. Die erste Stunde ist kostenfrei.' },
      { q: 'Hilft der Kurs bei der Abiturnote?', a: 'Wir unterrichten begleitend zur Schule und versprechen keine Noten. Bewertet wird allein in der Schule und in der zentralen Prüfung; wir sind mit dem Kultusministerium nicht verbunden.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weiterlesen',
    h2: 'Weitere Seiten zu Informatik in Deutschland',
    lede: 'Die meisten Seiten sind englischsprachig.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Alle Seiten für Deutschland.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Klasse 5 bis 13 in allen Ländern.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by state', p: 'Wie viel Informatik jedes Land vorschreibt.' },
      { href: '/abitur-computer-science-in-english', label: 'Abitur computer science in English', p: 'Das Fach im Abitur, auf Englisch erklärt.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'Mathematik-Abitur auf Englisch.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Unser Unterricht im Detail.' }
    ]
  },

  start: {
    h2: 'Probestunde für Niedersachsen vereinbaren',
    lede: 'Legen Sie eine Klausur oder ein Arbeitsblatt aus dem aktuellen Halbjahr bereit, am besten mit einem Struktogramm. Der Mentor bearbeitet es mit Ihrem Kind und schlägt danach Kurs, Gruppe und Wochenplan bis zum 26. April 2027 vor.',
    readFirst: 'Vorab: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> erklärt den Ablauf einer Stunde, <a class="ag-inline-link" href="/informatik-nachhilfe-online">Informatik-Nachhilfe online</a> zeigt unser Angebot für alle Klassen.',
    note: 'Unterricht live online mit Mentoren in Indien, ausschließlich auf Englisch. Am schnellsten antworten wir über WhatsApp.',
    formNote: 'Die erste Stunde ist kostenfrei und verpflichtet zu nichts.'
  },

  footer: {
    cols: [
      { h4: 'Kurse', links: [
        { href: '/courses/informatik-abitur-course-java-python', label: 'Informatik Abitur' },
        { href: '/courses/mysql-mastery-for-teens', label: 'SQL für Jugendliche' },
        { href: '/courses/problem-solving-dsa-masterclass-teens', label: 'Algorithmen' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik nach Land' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Erst das Verhältnis, dann das Urteil'
  },

  personalityCss: `
.ag-root.ag-ina .ag-hero h1 { letter-spacing: -0.011em; }
.ag-root.ag-ina .ag-capsule { border-left-width: 4px; }
.ag-root.ag-ina .ag-section-head h2 { max-width: 29ch; }
.ag-root.ag-ina .ag-table td { hyphens: auto; }
.ag-root.ag-ina .ag-table caption { font-style: italic; }
`,

  dossier: {
    curriculumAuthority: 'Niedersächsisches Kultusministerium: Ergänzende Hinweise zum Kerncurriculum Informatik (Neufassung Juni 2025, binding from Abitur 2027) and Termine für die Abiturprüfungen 2027 (Bek. 28.04.2025); GI Informatik-Monitor 2026/27, Niedersachsen page; Einheiten- und Zeitgesetz. Read 2 and 3 November 2026. Exercise our own.',
    localProject: 'Run-length coding in the Niedersachsen notation (Anzahl-Wert) with the official ratio and saving formulas: an original Python exercise; wwwwwwbbbwwww gives 6w3b4w, ratio 0.462, saving 53.8 %; wbwbwb gives 1w1b1w1b1w1b, ratio 2.0, saving -100.0 %; with single-digit counts twelve w become 9w3w. Lesson family: measure before you trust a compression.',
    requiredMentions: ['6w3b4w (6)', '1w1b1w1b1w1b (12)', 'codierte Zeile doppelt so lang wie vorher', 'Montag, 26. April 2027', 'Freitag, 28. Mai 2027', 'Neufassung vom Juni 2025', 'Erst das Verhältnis, dann das Urteil', 'Man teilt die Folge: 9w3w'],
    sources: [
      { claim: 'Binding notations from Abitur 2027: DynArray, Stack, Queue, BinTree, zero-based indices, Struktogramme, SQL subset without nesting, run-length notation, compression formulas, Hamming.', url: 'https://cuvo.nibis.de/index.php?p=download&upload=788' },
      { claim: 'Abitur 2027 dates: Informatik Monday 26 April 2027, Nachschreibtermin 28 May 2027, end of Q-phase 18 March 2027.', url: 'https://www.mk.niedersachsen.de/download/99040/Abiturtermine_2027.pdf' },
      { claim: 'Niedersachsen Oberstufe rules, aids, no computer, shares 9 and 5 percent.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/niedersachsen' },
      { claim: 'One in twelve Oberstufe pupils take Informatik in BW, NI, HB.', url: 'https://informatik-monitor.de/' }
    ],
    rejectedClaims: [
      'German-language teaching: English only, stated in capsule and FAQ.',
      'The subject-specific Hinweise 2027 on bildungsportal-niedersachsen.de: not read (HTTP 403, not retried); no claims taken from it.',
      'Reproducing the ministry example sequence or real exam tasks: refused; our sequences are our own.',
      'Any grade promise: refused; we teach alongside school.',
      'Gender shares from the Informatik-Monitor: not used.'
    ]
  }
};
