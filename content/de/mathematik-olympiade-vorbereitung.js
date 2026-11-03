'use strict';
// Mathematik-Olympiade Vorbereitung (ag- German-language door, Germany cluster P3 row DE082, hub group 'german').
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; formal "Sie";
// pages show euro, checkout charges USD. We are not connected with the Mathematik-Olympiaden e.V., Bildung & Begabung or the
// Känguru e.V. We never reproduce MO problems or solutions (the archive allows only non-commercial sites to republish, and
// only without solutions); our three problems are our own.
// Spine: for German parents and pupils between the Regionalrunde (11 November 2026) and the Landesrunde (26 to 28 February
// 2027): when the 66th MO's tasks and solutions go online for practice (the organiser's release table), how the MO differs
// from the Bundeswettbewerb Mathematik and the Känguru, one idea that olympiad problems use again and again (invariants),
// a plan to the Landesrunde, and the routes beyond (Bundesrunde, IMO selection).
// The live English page math-olympiad-germany-preparation uses the round-by-round table, the entry route, a marking
// checklist and digit-sum problems; none of its tables, problems or sentences is reused here.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/mathematik-olympiade-vorbereitung/,
// fetched 2 and 3 Nov 2026; strings grepped from the .txt files):
//  - mathe-wettbewerbe.de/mo (mo-bw, FACTS 162 to 168): "jährlich rund 200.000 Schülerinnen und Schüler"; three rounds for
//    Klassenstufen 5 to 7, four from 8; primary since 2005; "Die Schulrunde startet jährlich zum Beginn des neuen Schuljahres,
//    frühestens am 1. August"; "Interessierte Schülerinnen und Schüler wenden sich direkt an die Fachlehrerin oder den
//    Fachlehrer ihrer Schule."; Regionalrunde "vier Aufgaben an einem zentralen Ort"; Landesrunde "Ende Februar als ein- oder
//    zweitägiger Klausurwettbewerb"; Bundesrunde "192 Schülerinnen und Schüler aus den Bundesländern sowie fünf
//    GastschülerInnen", "jeweils drei Aufgaben in viereinhalbstündigen Klausuren", "keine Kosten"; 2027 in Kaiserslautern.
//  - mathematik-olympiaden.de/moev (FACTS 166, 169): "Regionalrunde: 11.11.2026 Landesrunde: 26. – 28.02.2027 Bundesrunde:
//    30.05. – 02.06.2027"; "Der Verein ist Träger der Mathematik-Olympiade in Deutschland."
//  - mathematik-olympiaden.de aktuelle Aufgaben (mo-aktuell): 66. Olympiade release dates: Grundschule Schulrunde tasks
//    01.12.2026, solutions 20.12.2026; Regionalrunde 3/4 01.04.2027; Landesrunde 3/4 01.06.2027; Regionalrunde 5 - 12 tasks and
//    solutions 01.12.2026; Landesrunde 5 - 7 01.05.2027, 8 - 12 01.04.2027; Bundesrunde 8 - 12 02.06.2027.
//  - mathematik-olympiaden.de Aufgabenarchiv (mo-archiv): "Auf nicht-kommerziellen Internetangeboten ist es gestattet, Aufgaben
//    einzelner Jahrgänge (maximal 3) in unveränderter Form und ohne Lösung zu veröffentlichen".
//  - mathe-wettbewerbe.de/bwm (FACTS 170 to 179): Hochschulreife track, three rounds, about 14 months; four problems per home
//    round (Geometrie, Kombinatorik, Zahlentheorie, Algebra); at least three correct for a prize; no AI to solve or check;
//    groups of at most three in round 1; BWM 2026 deadlines 2 March and 24 August 2026; Studienstiftung.
//  - mathe-kaenguru.de (FACTS 183 to 186): 8 April 2027; registration 01.12.2026 to 31.01.2027; 75 minutes, 24 or 30
//    problems; "ein Einzelwettbewerb".
//  - mathe-wettbewerbe.de/imo (FACTS 180 to 182): AIMO decides the six-person team; starts end of November or early December
//    with two papers; "Für jede Klausur standen 180 Minuten Bearbeitungszeit zur Verfügung. Als Hilfsmittel sind nur
//    Schreibzeug, Zirkel und Geo-Dreieck zugelassen."; final seminar Oberwolfach.
//  - Time: Einheitenzeitgesetz; summer time ended 25 October 2026, begins 28 March 2027; India UTC+5:30.
// Our own (scratchpad de/w/GE/py/invariante.py, python3 -I, random.seed(2027)) prints:
//    Aufgabe 1, letzte Zahl in 1000 Spielen: {37}
//    Aufgabe 2, 10 Muenzen, Paritaet der Kopfzahl: {0} / Aufgabe 2, 11 Muenzen, Paritaet der Kopfzahl: {0}
//    Aufgabe 3, Summe: 2055378 gerade: True
// Lesson family: find what never changes (an invariant); it proves that something is impossible, a simulation only hints.

const { DE } = require('../../scripts/nl/lib/market-de');

const PY = [
  'import random',
  'random.seed(2027)',
  '',
  '# Aufgabe 1: 1 bis 9, zwei Zahlen a, b durch a + b - 1 ersetzen',
  'enden = set()',
  'for versuch in range(1000):',
  '    tafel = list(range(1, 10))',
  '    while len(tafel) > 1:',
  '        a = tafel.pop(random.randrange(len(tafel)))',
  '        b = tafel.pop(random.randrange(len(tafel)))',
  '        tafel.append(a + b - 1)',
  '    enden.add(tafel[0])',
  'print("Aufgabe 1, letzte Zahl in 1000 Spielen:", enden)',
  '',
  '# Aufgabe 2: Anzahl Kopf nach Zuegen, in denen genau zwei Muenzen gedreht werden',
  'for n in (10, 11):',
  '    paritaeten = set()',
  '    for versuch in range(1000):',
  '        kopf = [False] * n',
  '        for zug in range(random.randrange(1, 30)):',
  '            for i in random.sample(range(n), 2):',
  '                kopf[i] = not kopf[i]',
  '            paritaeten.add(sum(kopf) % 2)',
  '    print(f"Aufgabe 2, {n} Muenzen, Paritaet der Kopfzahl:", paritaeten)',
  '',
  '# Aufgabe 3: Summe 1 bis 2027',
  'summe = 2027 * 2028 // 2',
  'print("Aufgabe 3, Summe:", summe, "gerade:", summe % 2 == 0)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'Mathematik-Olympiade Vorbereitung' },
  slug: 'mathematik-olympiade-vorbereitung',
  code: 'mov',
  accent: '#914870',
  accentRationale: 'Mathematik-Olympiade Vorbereitung: a deep raspberry #914870, the colour of a medal ribbon, distinct from the wine red of the Bundeswettbewerb Informatik door and the plum of the Abitur page; at least 5.07 on the paper #FBF8F2 and its tints',
  pageType: 'market',
  priceSubject: 'maths',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Mathematik-Olympiade Vorbereitung (auf Englisch)',
  title: 'Mathematik-Olympiade Vorbereitung: live auf Englisch, 2026/27',
  description: 'Mathematik-Olympiade 2026/27 vorbereiten, live auf Englisch: wann die Aufgaben online kommen, MO, BWM und Känguru im Vergleich, Invarianten mit Lösungen.',
  ogDescription: 'Vorbereitung auf die 66. Mathematik-Olympiade, live auf Englisch: Termine bis zur Bundesrunde 2027, wann Aufgaben und Lösungen zum Üben erscheinen, der Vergleich mit Bundeswettbewerb Mathematik und Känguru und drei eigene Aufgaben zu Invarianten.',
  twitterDescription: 'Mathematik-Olympiade 2026/27 vorbereiten: Termine, Übungsaufgaben, Wettbewerbe im Vergleich und Invarianten. Live auf Englisch.',
  pageName: 'Mathematik-Olympiade Vorbereitung',
  webPageDescription: 'Ein Leitfaden für Eltern und Schülerinnen und Schüler in Deutschland zur 66. Mathematik-Olympiade 2026/27: Termine von der Regionalrunde bis zur Bundesrunde, Veröffentlichungstermine der Aufgaben, der Vergleich mit Bundeswettbewerb Mathematik und Känguru, der Weg zur IMO und drei eigene Übungsaufgaben zu Invarianten.',
  courseDescription: 'Live-Online-Training für die Mathematik-Olympiade und den Känguru-Wettbewerb in ganz Deutschland, ausschließlich auf Englisch: Problemlösen nach Klassenstufe, Beweise sauber aufschreiben, mit eigenen Übungsaufgaben, in der Gruppe oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Mathematik-Olympiade',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#ueben', label: 'Aufgaben' },
    { href: '#vergleich', label: 'Vergleich' },
    { href: '#invarianten', label: 'Übung' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Deutschland &middot; Mathematik-Olympiade &middot; Klasse 3 bis 13',
  h1: 'Mathematik-Olympiade Vorbereitung, live auf Englisch',
  lede: 'An der Mathematik-Olympiade nehmen nach Angaben des Veranstalters jährlich rund 200.000 Schülerinnen und Schüler teil. Die Regionalrunde der 66. Olympiade ist am 11. November 2026, die Landesrunde vom 26. bis 28. Februar 2027. Diese Seite zeigt, wann die offiziellen Aufgaben und Lösungen zum Üben online gehen, wie sich die Olympiade vom Bundeswettbewerb Mathematik und vom Känguru unterscheidet, welche Denkidee in Olympiadeaufgaben immer wieder steckt und wie es nach der Landesrunde weitergehen kann. Trainiert wird bei uns live und auf Englisch; die Mentoren unterrichten von Indien aus.',
  secondaryCta: { href: '#ueben', label: 'Wann die Aufgaben erscheinen' },
  wa: 'Hallo Modern Age Coders, unser Kind nimmt an der Mathematik-Olympiade teil und möchte sich auf Englisch vorbereiten. Ist eine kostenlose Probestunde möglich?',
  heroNote: 'Mathe live online seit 2020 &middot; über 10.000 Lernende weltweit &middot; Problemlösen und Beweise, Unterricht auf Englisch',
  spec: [
    ['Für', 'Klasse 3 bis 13'],
    ['Inhalte', 'Problemlösen, Beweise, Zahlentheorie, Geometrie'],
    ['Aufgaben', 'Eigene Übungsaufgaben, nie Wettbewerbsaufgaben'],
    ['Gruppe', 'Fünfzehn bis zwanzig, oder Einzelunterricht'],
    ['Unterricht', 'Auf Englisch, live per Video'],
    ['Probestunde', 'Kostenlos, ohne Karte']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Mathematik-Olympiade Vorbereitung bei Modern Age Coders ist Live-Online-Training auf Englisch für Schülerinnen und Schüler der Klassen 3 bis 13 in ganz Deutschland, im Kurs Mathematik-Olympiade und Känguru Training: Knobeln, Beweisideen wie Invarianten und Schubfachprinzip, und das saubere Aufschreiben einer Lösung, so wie es die Olympiade verlangt. Geübt wird nur mit eigenen Aufgaben, allein mit einem festen Mentor oder zusammen mit fünfzehn bis zwanzig anderen.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Kurse für Mathe-Wettbewerbe',
    lede: 'Einer ist auf die deutschen Wettbewerbe zugeschnitten, einer führt weiter bis zum Niveau der internationalen Olympiaden, einer ist für jüngere Wettbewerbsneulinge.',
    items: [
      { course: 'mathematik-olympiade-and-kaenguru-training-course', code: 'MOV / 01', title: 'Mathematik-Olympiade und Känguru', alt: 'Kursbild Mathematik-Olympiade und Känguru Training', note: 'Für 8 bis 18 Jahre. Problemlösen nach Klassenstufe mit eigenen Aufgaben, vom Multiple-Choice-Knobeln bis zum ausgeschriebenen Beweis.' },
      { course: 'olympiad-competition-mathematics-mastery', code: 'MOV / 02', title: 'Wettbewerbsmathematik bis zur IMO', alt: 'Kursbild Olympiad and Competition Mathematics', note: 'Für Fortgeschrittene ab etwa Klasse 9. Kombinatorik, Zahlentheorie, Algebra und Geometrie auf dem Niveau von Landes- und Bundesrunde.' },
      { course: 'middle-school-math-competitions-course', code: 'MOV / 03', title: 'Mathe-Wettbewerbe für die Mittelstufe', alt: 'Kursbild Middle School Math Competitions', note: 'Für 10 bis 14 Jahre. Der Einstieg ins Wettbewerbsdenken mit kurzen Aufgaben, Schätzen, Ausschließen und ersten Begründungen.' }
    ]
  },

  sections: [
    {
      id: 'ueben',
      eyebrow: 'Üben mit Originalen',
      h2: 'Wann erscheinen die Aufgaben der 66. Mathematik-Olympiade zum Üben?',
      lede: 'Der Mathematik-Olympiaden e.V., Träger der Olympiade in Deutschland, stellt die Aufgaben und Lösungen jeder Runde nach einem festen Plan online. Wer weiß, wann was erscheint, kann gezielt mit den Originalen üben.',
      body: [
        { kind: 'table', numCols: [], caption: '66. Mathematik-Olympiade 2026/27: wann Aufgaben und Lösungen online verfügbar sind', head: ['Runde', 'Klassenstufen', 'Aufgaben online ab', 'Lösungen online ab'], rows: [
          ['Schulrunde', '3 und 4', '01.12.2026', '20.12.2026'],
          ['Regionalrunde', '5 bis 12', '01.12.2026', '01.12.2026'],
          ['Regionalrunde', '3 und 4', '01.04.2027', '01.04.2027'],
          ['Landesrunde', '8 bis 12', '01.04.2027', '01.04.2027'],
          ['Landesrunde', '5 bis 7', '01.05.2027', '01.05.2027'],
          ['Landesrunde', '3 und 4', '01.06.2027', '01.06.2027'],
          ['Bundesrunde', '8 bis 12', '02.06.2027', '02.06.2027']
        ] },
        { kind: 'source', html: 'Quelle: Mathematik-Olympiaden e.V., Seite "Aktuelle Aufgaben" zur 66. Olympiade 2026/2027 (mathematik-olympiaden.de), gelesen am 3. November 2026. Die Termine der Runden selbst nennt der Verein mit Schulrunde ab Schuljahresbeginn, Regionalrunde am 11.11.2026, Landesrunde vom 26. bis 28.02.2027 und Bundesrunde vom 30.05. bis 02.06.2027.' },
        { kind: 'two', mt: true,
          leftH3: 'Was das für die Vorbereitung heißt',
          left: [
            'Die Aufgaben der Regionalrunde vom 11. November 2026 sind ab dem 1. Dezember 2026 frei verfügbar, zusammen mit den Lösungen. Das ist der ideale Moment zum Nacharbeiten: Ihr Kind kennt die Aufgaben schon aus der Klausur und kann die eigene Lösung mit der offiziellen vergleichen.',
            'Für die Landesrunde Ende Februar gibt es zu diesem Zeitpunkt noch keine aktuellen Aufgaben. Dafür bietet das Aufgabenarchiv des Vereins die Aufgaben früherer Jahrgänge als PDF.'
          ],
          rightH3: 'Warum wir keine Olympiadeaufgaben zeigen',
          right: [
            'Der Verein erlaubt nur nicht-kommerziellen Internetangeboten, Aufgaben einzelner Jahrgänge, höchstens drei, unverändert und ohne Lösung zu veröffentlichen. Wir sind ein kommerzielles Angebot und zeigen daher keine einzige Olympiadeaufgabe.',
            'Im Unterricht verweisen wir auf das Archiv des Vereins und arbeiten sonst mit eigenen Aufgaben, die dieselben Denkweisen trainieren. Drei davon finden Sie weiter unten.'
          ] },
        { kind: 'p', mt: true, html: 'Wie man teilnimmt, beschreibt der Veranstalter knapp: Die Schulrunde beginnt jedes Jahr mit dem neuen Schuljahr, frühestens am 1. August, und interessierte Schülerinnen und Schüler wenden sich direkt an ihre Mathematiklehrerin oder ihren Mathematiklehrer. Für die Klassenstufen 5 bis 7 hat die Olympiade drei Runden, ab Klassenstufe 8 vier; die Grundschulen sind seit 2005 dabei. In der Regionalrunde bearbeiten die Teilnehmenden vier Aufgaben an einem zentralen Ort, die Landesrunde ist ein ein- oder zweitägiger Klausurwettbewerb.' }
      ]
    },
    {
      id: 'vergleich',
      eyebrow: 'Drei Wettbewerbe',
      h2: 'Mathematik-Olympiade, Bundeswettbewerb Mathematik oder Känguru: welcher passt?',
      lede: 'Die drei großen Mathematikwettbewerbe für Schulen in Deutschland verlangen sehr unterschiedliche Dinge. Die Tabelle stellt sie nach den Angaben der Veranstalter nebeneinander.',
      body: [
        { kind: 'table', numCols: [], caption: 'Drei Mathematikwettbewerbe im Vergleich, Stand 2026/27', head: ['', 'Mathematik-Olympiade', 'Bundeswettbewerb Mathematik', 'Känguru der Mathematik'], rows: [
          ['Für wen', 'Klasse 3 bis 13', 'alle, die künftig die Hochschulreife erlangen können', 'Klasse 3 bis 13'],
          ['Form', 'mehrere Runden, ab der Regionalrunde als Klausur, ab Klasse 8 bis zur Bundesrunde', 'zwei Hausaufgabenrunden, dann ein Fachgespräch', 'ein Einzelwettbewerb mit Antwortauswahl'],
          ['Aufgaben', 'Beweis- und Rechenaufgaben, Regionalrunde vier Aufgaben', 'je Hausrunde vier: Geometrie, Kombinatorik, Zahlentheorie, Algebra', '24 oder 30 Aufgaben in 75 Minuten'],
          ['Gruppen', 'Regional- und Landesrunde allein als Klausur', 'in Runde 1 bis zu drei Personen', 'nein'],
          ['Termine', 'Regionalrunde 11.11.2026, Landesrunde 26. bis 28.02.2027', 'Aufgaben jeweils ab 1. Dezember; 2026 Einsendeschluss 2. März und 24. August', 'Wettbewerb am 8. April 2027, Anmeldung 1. Dezember 2026 bis 31. Januar 2027'],
          ['Teilnahme über', 'die Mathematiklehrkraft', 'Registrierung beim Veranstalter', 'die Schule']
        ] },
        { kind: 'source', html: 'Quellen: mathe-wettbewerbe.de, Seiten zur Mathematik-Olympiade und zum Bundeswettbewerb Mathematik (Bildung &amp; Begabung); mathematik-olympiaden.de; mathe-kaenguru.de; gelesen am 2. November 2026. Für den Bundeswettbewerb Mathematik 2027 waren am Lesetag noch keine Einsendetermine genannt; die Angaben beziehen sich auf den Wettbewerb 2026.' },
        { kind: 'p', mt: true, html: 'Unsere Erfahrung: Das Känguru ist der niedrigschwellige Einstieg, weil es Schnelligkeit und Ausschließen belohnt. Die Olympiade verlangt in einer Klausur vollständige Begründungen. Der Bundeswettbewerb Mathematik gibt Wochen Zeit, dafür sind die Aufgaben deutlich schwerer: Für einen Preis in der ersten Runde und die Qualifikation zur zweiten müssen laut Veranstalter mindestens drei der vier Aufgaben richtig gelöst sein. Dort ist ausdrücklich untersagt, künstliche Intelligenz zur Lösung oder zur Überprüfung eigener Lösungswege zu nutzen. Wer die dritte Runde als Preisträgerin oder Preisträger abschließt, kommt laut Veranstalter mit Studienbeginn in die Förderung der Studienstiftung.' }
      ]
    },
    {
      id: 'invarianten',
      tint: 'tint',
      eyebrow: 'Drei Übungsaufgaben',
      h2: 'Was sind Invarianten, und warum helfen sie bei Olympiadeaufgaben?',
      lede: 'Viele Wettbewerbsaufgaben beschreiben einen Vorgang, der sich wiederholt, und fragen, was am Ende herauskommt oder ob ein Ziel erreichbar ist. Der Schlüssel ist fast immer eine Größe, die sich bei jedem Schritt nicht ändert: eine Invariante. Die drei Aufgaben sind unsere eigenen, keine Olympiadeaufgaben.',
      body: [
        { kind: 'p', html: '<strong>Aufgabe 1 (ab Klasse 5).</strong> An der Tafel stehen die Zahlen 1, 2, 3, ..., 9. In jedem Schritt wischt man zwei Zahlen a und b weg und schreibt a + b &minus; 1 an. Nach acht Schritten steht nur noch eine Zahl da. Welche? <em>Lösung:</em> Bei jedem Schritt sinkt die Summe aller Zahlen um 1, und die Anzahl der Zahlen sinkt ebenfalls um 1. Also ändert sich "Summe minus Anzahl" nie. Am Anfang ist sie 45 &minus; 9 = 36. Am Ende steht eine einzige Zahl x da, also gilt x &minus; 1 = 36 und x = 37, egal in welcher Reihenfolge man vorgeht.' },
        { kind: 'p', html: '<strong>Aufgabe 2 (ab Klasse 7).</strong> Auf dem Tisch liegen 11 Münzen, alle mit der Zahl nach oben. In jedem Zug dreht man genau zwei Münzen um. Kann man erreichen, dass alle 11 Münzen Kopf zeigen? <em>Lösung:</em> Nein. Ein Zug ändert die Anzahl der Münzen mit Kopf um &minus;2, 0 oder +2. Die Anzahl bleibt also immer gerade, denn sie beginnt bei 0. Elf ist ungerade. Bei 10 Münzen dagegen klappt es, etwa in fünf Zügen mit jeweils zwei neuen Münzen.' },
        { kind: 'p', html: '<strong>Aufgabe 3 (ab Klasse 9).</strong> An der Tafel stehen die Zahlen 1, 2, ..., 2027. In jedem Schritt ersetzt man zwei Zahlen durch den Betrag ihrer Differenz. Am Ende bleibt eine Zahl übrig. Kann sie 1 sein? <em>Lösung:</em> Nein. Ersetzt man a und b durch |a &minus; b|, ändert sich die Summe um 2 &middot; min(a, b) nach unten, also um eine gerade Zahl. Die Parität der Summe ist die Invariante. Am Anfang ist die Summe 2027 &middot; 2028 : 2 = 2.055.378, eine gerade Zahl. Also ist auch die letzte Zahl gerade, und 1 ist unmöglich.' },
        { kind: 'code', label: 'Der Computer als Zeuge, nicht als Beweis', lang: 'Python', code: PY, note: 'Ausgabe mit <code>python3 -I</code>: <code>Aufgabe 1, letzte Zahl in 1000 Spielen: {37}</code>, <code>Aufgabe 2, 10 Muenzen, Paritaet der Kopfzahl: {0}</code>, <code>Aufgabe 2, 11 Muenzen, Paritaet der Kopfzahl: {0}</code>, <code>Aufgabe 3, Summe: 2055378 gerade: True</code>.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Nach dem Unveränderlichen fragen.</strong> Bevor Sie probieren: Was passiert mit der Summe, der Anzahl, der Parität, dem Rest bei Division durch 3? Eine dieser Größen bleibt oft gleich.',
          '<strong>Die Invariante beweisen, nicht vermuten.</strong> Die tausend zufälligen Spiele im Programm machen die 37 glaubhaft. Bewiesen ist sie erst durch den einen Satz über Summe und Anzahl, der für jede Reihenfolge gilt.',
          '<strong>Unmöglichkeit begründen.</strong> Für "geht nicht" reicht kein erfolgloses Probieren. Eine Invariante, die am Anfang und am Ziel verschiedene Werte hat, ist ein vollständiger Beweis, so wie die gerade Anzahl in Aufgabe 2.'
        ] }
      ]
    },
    {
      id: 'plan',
      eyebrow: 'Fahrplan',
      h2: 'Wie bereitet man sich nach der Regionalrunde auf die Landesrunde vor?',
      lede: 'Zwischen der Regionalrunde am 11. November 2026 und der Landesrunde vom 26. bis 28. Februar 2027 liegen gut drei Monate. So teilen wir sie ein, als Vorschlag, den der Mentor an Klassenstufe und Stand anpasst.',
      body: [
        { kind: 'ol', items: [
          '<strong>November 2026: eigene Klausur auswerten.</strong> Was lief gut, wo fehlte die Idee, wo nur die Begründung? Dazu reichen die eigenen Notizen aus der Regionalrunde.',
          '<strong>Ab 1. Dezember 2026: mit den Originallösungen vergleichen.</strong> Dann sind Aufgaben und Lösungen der Regionalrunde online. Ihr Kind liest die offizielle Lösung erst, nachdem es die Aufgabe noch einmal selbst versucht hat.',
          '<strong>Dezember und Januar: Ideen sammeln.</strong> Jede Woche eine Denkidee mit eigenen Aufgaben: Invarianten, Schubfachprinzip, Fallunterscheidung, Rückwärtsarbeiten, Teilbarkeit.',
          '<strong>Januar und Februar: Klausurtraining.</strong> Ältere Landesrunden aus dem Aufgabenarchiv des Vereins unter Zeitdruck, danach eine ausführliche Besprechung des Aufschreibens.',
          '<strong>Letzte Woche vor der Landesrunde: nur noch Wiederholung.</strong> Keine neuen Themen, dafür ausgeschlafen in die Klausur.'
        ] },
        { kind: 'p', mt: true, html: 'Für die Klassenstufen 3 bis 7 endet der Wettbewerb laut Veranstalter mit der Landesrunde und einer Preisverleihung. Ab Klassenstufe 8 geht es für die Besten weiter: Zur Bundesrunde werden aus allen Ländern Mannschaften von bis zu 15 Schülerinnen und Schülern eingeladen, insgesamt jährlich 192 aus den Ländern und fünf Gäste aus deutschen Auslandsschulen. Sie lösen an zwei Tagen jeweils drei Aufgaben in viereinhalbstündigen Klausuren. 2027 richtet Rheinland-Pfalz die Bundesrunde vom 30. Mai bis 2. Juni in Kaiserslautern aus; Unterbringung und Verpflegung finanziert das ausrichtende Land, für die Teilnehmenden entstehen keine Kosten.' }
      ]
    },
    {
      id: 'weiter',
      eyebrow: 'Der Weg zur IMO',
      h2: 'Wie kommt man von der Mathematik-Olympiade zur Internationalen Mathematik-Olympiade?',
      lede: 'Über einen eigenen Auswahlwettbewerb, kurz AIMO. Er entscheidet laut Bildung &amp; Begabung, wer zur sechsköpfigen deutschen Delegation gehört.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Einladung', p: 'Zum Auswahlwettbewerb werden erfolgreiche Teilnehmende verschiedener Mathewettbewerbe eingeladen, darunter die Bundesrunde der Olympiade und die zweite Runde des Bundeswettbewerbs Mathematik.' },
          { h3: 'Zwei Klausuren', p: 'Der Auswahlwettbewerb beginnt jedes Jahr Ende November oder Anfang Dezember mit zwei Klausuren. Laut Veranstalter standen für jede Klausur 180 Minuten zur Verfügung, als Hilfsmittel nur Schreibzeug, Zirkel und Geo-Dreieck.' },
          { h3: 'Seminare', p: 'Die Besten besuchen Vorbereitungsseminare von Februar bis Mai. Das Abschlussseminar findet traditionell im Mathematischen Forschungsinstitut Oberwolfach im Schwarzwald statt.' }
        ] },
        { kind: 'p', mt: true, html: 'Kein Taschenrechner, kein Computer, nur Papier, Zirkel und Geodreieck: Daran sieht man, worauf es ankommt. Deshalb nutzen wir im Training den Computer nur, um eine Vermutung zu prüfen, wie oben bei den Invarianten. Die eigentliche Arbeit ist das Finden und Aufschreiben eines Beweises. Wir sind mit keinem dieser Veranstalter verbunden und versprechen weder Runden noch Platzierungen.' }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Wann findet das Training statt?',
      lede: 'Die Mentoren sind in Indien, die Stunden liegen trotzdem nach der Schule oder am Wochenende. Beispiele:',
      body: [
        { kind: 'table', numCols: [], caption: 'Beispieltermine, deutsche und indische Uhrzeit', head: ['Deutsche Zeit', 'Indien im Winter (bis 27. März 2027)', 'Indien im Sommer (ab 28. März 2027)'], rows: [
          ['13:00', '17:30', '16:30'],
          ['14:45', '19:15', '18:15'],
          ['Samstag 08:30', '13:00', '12:00'],
          ['Sonntag 15:00', '19:30', '18:30']
        ] },
        { kind: 'source', html: 'Grundlage ist das Einheiten- und Zeitgesetz: In Deutschland gilt im Winter MEZ (UTC+1), im Sommer MESZ (UTC+2), mit dem letzten Wechsel am 25. Oktober 2026 und dem nächsten am 28. März 2027. Indien hat ganzjährig UTC+5:30 und liegt damit im Winter viereinhalb, im Sommer dreieinhalb Stunden vorn. Die Uhrzeiten sind Beispiele.' },
        { kind: 'p', mt: true, html: 'In den Wochen vor der Landesrunde buchen manche Familien eine längere Samstagssitzung für eine Probeklausur. Beim Buchen sehen Sie jeden Termin in Ihrer Zeitzone.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Vom Knobeln zum Beweis',
    lede: 'Unsere eigene Einteilung in fünf Schritte, vom ersten Knobeln bis zur fertigen Ausarbeitung.',
    table: { caption: 'Fünf Stufen im Problemlösen (unsere)', head: ['Stufe', 'Ihr Kind kann', 'Typischer Wettbewerb'], rows: [
      ['1. Ausprobieren', 'kleine Fälle systematisch durchspielen', 'Känguru, Klasse 3 bis 6'],
      ['2. Muster sehen', 'aus Beispielen eine Vermutung ableiten', 'Schulrunde der Olympiade'],
      ['3. Begründen', 'eine Vermutung in ganzen Sätzen begründen', 'Regionalrunde'],
      ['4. Beweisen', 'Invarianten, Fallunterscheidung und Widerspruch gezielt einsetzen', 'Landesrunde'],
      ['5. Ausarbeiten', 'eine Lösung lückenlos und lesbar aufschreiben', 'Bundesrunde, Bundeswettbewerb Mathematik']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Fragen Sie nach einer Stunde nicht, ob die Aufgabe gelöst wurde, sondern warum die Lösung stimmt.',
      'Medaillen kann niemand zusagen, auch wir nicht. Sichtbar wird aber, wann Ihr Kind die nächste Stufe erreicht.'
    ] },
    right: { h3: 'Für Schülerinnen und Schüler', ps: [
      'Wenn eine Aufgabe fragt, ob etwas möglich ist, suchen Sie zuerst nach einer Größe, die sich nie ändert.',
      'Schreiben Sie jede Lösung so auf, dass jemand ohne Ihre Notizen sie prüfen kann.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse für mathebegeisterte Kinder',
    lede: 'Live auf Englisch, mit einem festen Mentor, in der Gruppe oder einzeln.',
    bands: [
      { num: 'I', h3: 'Grundlagen und Zahlgefühl', sub: '5 bis 15 Jahre', courses: [
        { code: 'MOV / BASIS / 01', slug: 'mental-maths-mastery-kids', title: 'Kopfrechnen', blurb: 'Zahlgefühl statt Tricks, 5 bis 10.' },
        { code: 'MOV / BASIS / 02', slug: 'algebra-foundations-masterclass', title: 'Algebra von Grund auf', blurb: 'Variablen und Gleichungen als Werkzeug.' },
        { code: 'MOV / BASIS / 03', slug: 'maths-through-coding', title: 'Mathematik mit Python', blurb: 'Vermutungen mit Code prüfen, 10 bis 15.' }
      ] },
      { num: 'II', h3: 'Schulmathematik vertiefen', sub: '11 bis 19 Jahre', courses: [
        { code: 'MOV / SCHULE / 01', slug: 'comprehensive-middle-school-mathematics-mastery', title: 'Mittelstufenmathematik', blurb: 'Brüche, Geometrie und Zuordnungen bis zum MSA.' },
        { code: 'MOV / SCHULE / 02', slug: 'statistics-probability-maths-course', title: 'Statistik und Wahrscheinlichkeit', blurb: 'Zählen und Wahrscheinlichkeit, auch für die Kombinatorik.' },
        { code: 'MOV / SCHULE / 03', slug: 'abitur-mathematics-course-in-english', title: 'Abitur Mathematik in English', blurb: 'Grund- und Leistungskurs in der Oberstufe.' }
      ] },
      { num: 'III', h3: 'Weitere Wettbewerbe', sub: '9 bis 19 Jahre', courses: [
        { code: 'MOV / WETT / 01', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatik-Wettbewerbe', blurb: 'Biber, Jugendwettbewerb und Bundeswettbewerb Informatik.' },
        { code: 'MOV / WETT / 02', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithmen und Logik', blurb: 'Problemlösen mit Datenstrukturen, 13 bis 18.' },
        { code: 'MOV / WETT / 03', slug: 'competitive-programming-for-teens-course', title: 'Wettbewerbsprogrammierung', blurb: 'Rechnen, Beweisen und Programmieren unter Zeitdruck.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Ablauf',
    h2: 'Wie das Olympiade-Training abläuft',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Nach der Schule', l: 'Kurze Sitzungen mit einer Denkidee pro Woche.' },
      { time: 'Samstagvormittag', l: 'Längere Sitzungen, auch als Probeklausur.' },
      { time: 'Einzeln', l: 'Vor Regional- und Landesrunde nach Absprache.' }
    ],
    cells: [
      { h3: 'Fester Mentor', p: 'Begleitet Ihr Kind durch die ganze Wettbewerbssaison.' },
      { h3: 'Eigene Aufgaben', p: 'Nur selbst geschriebene Übungen, nie Wettbewerbsaufgaben.' },
      { h3: 'Beweise schreiben', p: 'Jede Lösung wird vollständig aufgeschrieben und besprochen.' },
      { h3: 'Archiv nutzen', p: 'Wir zeigen, wo das Aufgabenarchiv des Vereins liegt.' },
      { h3: 'Ohne Hilfsmittel', p: 'Gerechnet wird mit Papier und Stift, wie in der Klausur.' },
      { h3: 'Zwei Formate', p: 'Fünfzehn bis zwanzig Kinder oder Einzelunterricht.' }
    ]
  },

  projectsH2: 'Projekte unserer Lernenden',
  projectsLede: 'Wer gern knobelt, programmiert oft auch gern. Eine Auswahl sehen Sie hier; die ganze Sammlung steht auf <a class="ag-inline-link" href="/student-labs">Student labs</a>, einer englischen Seite.',
  reviewsLede: 'Was Familien auf Google schreiben, unverändert auf Englisch.',

  fees: {
    h2: 'Preise für das Olympiade-Training',
    lede: 'Ein Monat umfasst acht Live-Stunden. Angezeigt werden die Preise in Euro, berechnet über den Referenzkurs der Europäischen Zentralbank. Die Abbuchung erfolgt in US-Dollar; Ihre Bank rechnet in Euro um, deshalb kann der abgebuchte Betrag um wenige Cent abweichen.',
    free: ['Kostenlose Probestunde', 'Einschätzung an eigenen Knobelaufgaben', 'Keine Karte nötig'],
    group: ['Fünfzehn bis zwanzig Kinder ähnlicher Klassenstufe', 'Ein fester Mentor', 'Zwei Stunden pro Woche', 'Monatlich beendbar'],
    one: ['Ihr Kind allein mit dem Mentor', 'Eigenes Tempo, eigene Schwerpunkte', 'Termine nach Wunsch']
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    h2: 'Mathematik-Olympiade Vorbereitung: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein, nur auf Englisch, und immer live. Für mathebegeisterte Kinder ist das ein Gewinn: Sie trainieren Problemlösen und Englisch zugleich und können später auch internationale Aufgabensammlungen lesen. Die deutschen Begriffe aus den Wettbewerben nennen wir mit.' },
      { q: 'Wann sind die Runden der 66. Mathematik-Olympiade?', a: 'Laut Mathematik-Olympiaden e.V. läuft die Schulrunde ab Schuljahresbeginn, die Regionalrunde ist am 11.11.2026, die Landesrunde vom 26. bis 28.02.2027 und die Bundesrunde vom 30.05. bis 02.06.2027 in Kaiserslautern.' },
      { q: 'Wie meldet man sich zur Mathematik-Olympiade an?', a: 'Über die Schule. Laut Veranstalter wenden sich interessierte Schülerinnen und Schüler direkt an ihre Mathematiklehrkraft. Die Schulrunde beginnt mit dem neuen Schuljahr, frühestens am 1. August.' },
      { q: 'Wo finde ich Aufgaben der Mathematik-Olympiade zum Üben?', a: 'Im Aufgabenarchiv und auf der Seite mit den aktuellen Aufgaben des Mathematik-Olympiaden e.V. Die Aufgaben und Lösungen der Regionalrunde 2026 für die Klassenstufen 5 bis 12 sind dort ab dem 01.12.2026 online. Wir selbst veröffentlichen keine Olympiadeaufgaben.' },
      { q: 'Ab welcher Klasse kann man mitmachen?', a: 'Ab Klasse 3. Seit 2005 gibt es die Olympiade auch für Grundschulen. Für die Klassenstufen 5 bis 7 hat sie drei Runden, ab Klassenstufe 8 vier, bis zur Bundesrunde.' },
      { q: 'Was ist der Unterschied zum Bundeswettbewerb Mathematik?', a: 'Die Olympiade besteht aus Klausuren, der Bundeswettbewerb Mathematik aus zwei Hausaufgabenrunden mit je vier Aufgaben und einem Fachgespräch. Dort darf in Runde 1 in Gruppen von bis zu drei gearbeitet werden, KI zur Lösung oder Prüfung ist untersagt.' },
      { q: 'Darf man in der Olympiade einen Taschenrechner benutzen?', a: 'Was in den Klausuren der Olympiade zugelassen ist, legen die Aufgabenblätter fest. Beim Auswahlwettbewerb zur IMO sind laut Veranstalter nur Schreibzeug, Zirkel und Geo-Dreieck erlaubt. Wir trainieren deshalb grundsätzlich ohne Hilfsmittel.' },
      { q: 'Wann finden die Stunden statt?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. 14:45 Uhr in Deutschland ist im Winter 19:15 Uhr in Indien.' },
      { q: 'Garantiert das Training eine Platzierung?', a: 'Nein. Platzierungen hängen von der Klausur am Wettbewerbstag ab, und wir versprechen weder Runden noch Preise. Was wir zeigen können: wie Ihr Kind Aufgaben sicherer angeht und Lösungen vollständiger aufschreibt.' },
      { q: 'Was kostet das Training, und wie wird bezahlt?', a: 'Sie zahlen pro Monat. Hier sehen Sie Euro-Beträge auf Basis des EZB-Referenzkurses, belastet wird Ihr Konto aber in US-Dollar, und Ihre Bank tauscht um. Die Teilnahme an der Olympiade selbst organisiert die Schule und der Verein, nicht wir.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weiterlesen',
    h2: 'Mehr zu Wettbewerben und Mathematik',
    lede: 'Überwiegend englischsprachige Seiten, passend zu unserem Unterricht.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Unser Angebot in Deutschland im Überblick.' },
      { href: '/math-olympiad-germany-preparation', label: 'Math olympiad Germany preparation', p: 'Die englische Seite zur Olympiade, mit anderen Übungsaufgaben.' },
      { href: '/math-and-coding-competitions-germany', label: 'Maths and coding competitions', p: 'Der Wettbewerbskalender 2026/27.' },
      { href: '/bundeswettbewerb-informatik-preparation', label: 'Bundeswettbewerb Informatik', p: 'Der Informatikwettbewerb von BWINF.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Learn to think, not copy AI', p: 'Warum eigene Gedanken mehr zählen als eine kopierte Antwort.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'So läuft unser Live-Unterricht.' }
    ]
  },

  start: {
    h2: 'Kostenlose Probestunde reservieren',
    lede: 'Zum Kennenlernen bearbeitet der Mentor mit Ihrem Kind zwei unserer Knobelaufgaben und hört zu, wie es denkt. Danach empfehlen wir Kurs, Gruppe und Schwerpunkte für die Saison.',
    readFirst: 'Zum Vorab-Lesen: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> und der Kurs <a class="ag-inline-link" href="/courses/mathematik-olympiade-and-kaenguru-training-course">Mathematik-Olympiade und Känguru</a> (beide auf Englisch).',
    note: 'Unterricht per Video aus Indien, ausschließlich englischsprachig. Wir sind mit dem Mathematik-Olympiaden e.V., Bildung &amp; Begabung und dem Känguru-Verein nicht verbunden. Per WhatsApp antworten wir am schnellsten.',
    formNote: 'Kostenlos, unverbindlich, ohne Karte.'
  },

  footer: {
    cols: [
      { h4: 'Mathe-Wettbewerbe', links: [
        { href: '/courses/mathematik-olympiade-and-kaenguru-training-course', label: 'Olympiade und Känguru' },
        { href: '/courses/olympiad-competition-mathematics-mastery', label: 'Wettbewerbsmathematik' },
        { href: '/courses/middle-school-math-competitions-course', label: 'Mittelstufe' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/math-olympiad-germany-preparation', label: 'Olympiade auf Englisch' },
        { href: '/math-and-coding-competitions-germany', label: 'Wettbewerbskalender' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Was bleibt gleich, wenn sich alles ändert?'
  },

  personalityCss: `
.ag-root.ag-mov .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-mov .ag-capsule { border-left-width: 5px; }
.ag-root.ag-mov .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-mov .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-mov .ag-table td { font-variant-numeric: tabular-nums; }
`,

  dossier: {
    curriculumAuthority: 'Mathematik-Olympiaden e.V. (Verein, aktuelle Aufgaben, Aufgabenarchiv); mathe-wettbewerbe.de (Bildung & Begabung) pages on the Mathematik-Olympiade, the Bundeswettbewerb Mathematik and the IMO selection; mathe-kaenguru.de; Einheitenzeitgesetz; read 2 and 3 November 2026. Problems our own.',
    localProject: 'Three original invariant problems with full written solutions: 1 to 9 replaced by a + b − 1 always ends at 37 (sum minus count stays 36), 11 coins turned two at a time can never all show heads (the head count stays even), and 1 to 2027 replaced by differences can never end at 1 (the sum 2,055,378 is even); a seeded Python run of 1000 random games agrees without proving anything. Lesson family: find what never changes; an invariant proves impossibility, a simulation only hints.',
    requiredMentions: ['Aufgabe 1, letzte Zahl in 1000 Spielen: {37}', 'Aufgabe 2, 11 Muenzen, Paritaet der Kopfzahl: {0}', '2.055.378', 'x = 37', 'Lösungen online ab', '20.12.2026', 'nur Schreibzeug, Zirkel und Geo-Dreieck', 'Was bleibt gleich, wenn sich alles ändert?'],
    sources: [
      { claim: 'About 200,000 a year; rounds by Klassenstufe; primary since 2005; entry via the teacher; Regionalrunde four problems; Bundesrunde 192 plus five guests, 4.5-hour papers, no costs, Kaiserslautern 2027.', url: 'https://www.mathe-wettbewerbe.de/mo' },
      { claim: 'Round dates of the 66th MO; the Verein is the organiser.', url: 'https://www.mathematik-olympiaden.de/moev/index.php' },
      { claim: 'Release dates of the 66th MO tasks and solutions; archive republication rule.', url: 'https://www.mathematik-olympiaden.de/' },
      { claim: 'Bundeswettbewerb Mathematik: eligibility, rounds, four problems, three correct, no AI, groups of three, 2026 deadlines, Studienstiftung.', url: 'https://www.mathe-wettbewerbe.de/bwm' },
      { claim: 'Känguru 8 April 2027, registration 1 December 2026 to 31 January 2027, 75 minutes, 24 or 30 problems.', url: 'https://www.mathe-kaenguru.de/' },
      { claim: 'AIMO: six-person team, two papers from late November, 180 minutes, only writing tools, compass and set square; Oberwolfach.', url: 'https://www.mathe-wettbewerbe.de/imo' }
    ],
    rejectedClaims: [
      'German-language teaching: we teach in English only, and the page says so.',
      'Reproducing any Mathematik-Olympiade problem or solution: refused; the archive rule allows only non-commercial sites, without solutions.',
      'Calculator rules for MO rounds: not stated on the pages read, so not claimed.',
      'Prize, round or placement promises and any connection with the organisers: none.'
    ]
  }
};
