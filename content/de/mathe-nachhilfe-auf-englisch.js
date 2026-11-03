'use strict';
// Mathe-Nachhilfe auf Englisch (ag- German-language door, Germany cluster P3 row DE077, hub group 'german').
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; formal "Sie";
// pages show euro, checkout charges USD. We are not connected with the KMK, the IQB or any Land ministry.
// Angle: German parents searching for maths tutoring in English: families who moved to Germany, bilingual children, pupils
// switching between an international school and a German school, and parents who want maths plus English practice.
// Spine: who it suits; what German school maths asks up to the MSA (the five Leitideen and six process competences of the
// KMK Bildungsstandards ESA/MSA, with English words); the German ways of writing numbers that trip up English-taught
// children (our table); the Dreisatz and when it fails; when tutoring helps most before VERA 8, the MSA and the ZP10.
// online-math-tutor-germany (English, not live) carries the checkpoint table and estimate-first tasks; neither is used here.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/mathe-nachhilfe-auf-englisch/,
// fetched 2 and 3 Nov 2026; quoted strings grepped from the .txt files):
//  - KMK Bildungsstandards Mathematik ESA/MSA (1fbbb88e, "Beschluss der Kultusministerkonferenz vom 15.10.2004 und vom
//    04.12.2003, i.d.F. vom 23.06.2022"; FACTS 121 to 124): the five Leitideen and their Sachgebiete ("Die darauf bezogenen
//    mathematischen Sachgebiete der Sekundarstufe I sind die Arithmetik und Algebra"; "Arithmetik, Algebra und Geometrie";
//    "Algebra und Funktionen"; "Das zugehörige mathematische Sachgebiet der Sekundarstufe I ist die Geometrie"; "die Stochastik
//    und Funktionen"); the six process competences; "nutzen bekannte und direkt erkennbare Modelle (z. B. Proportionalität bzw.
//    Dreisatz)"; "unterscheiden proportionale und antiproportionale Zusammenhänge in Sachsituationen und stellen damit
//    Berechnungen an"; "Das Spektrum reicht von Standardmodellen (z. B. proportionale Zuordnung)"; Leitidee Zahl und Operation
//    includes "die sachgerechte Nutzung von Prozent- und Zinsrechnung".
//  - IQB VERA-8 page (d5993989, FACTS 113 to 116): grade 8 in German, maths, English, French; "VERA-8 2027: 08.02. bis
//    25.03.2027"; results "nicht benotet".
//  - Berlin, Abschlüsse am Gymnasium nach Klasse 9 und 10 (be-gym-9-10): "Dabei haben die Fächer Deutsch, Mathematik und die
//    1. Fremdsprache eine besondere Bedeutung. Sie werden im Folgenden als Kernfächer im MSA bezeichnet."
//  - Berlin Prüfungsplan 2026/27 (be-pruefungsplan-2027, "Stand: 15.09.2026"): "MSA und erweiterte Berufsbildungsreife 2027";
//    "Do, 15.04.2027 Mathematik"; "Mo, 24.05.2027 Nachtermin: Mathematik"; written exams begin "um 10:00 Uhr".
//  - NRW ZP10 Termine 2027 (zp10-termine-2027): Mathematik "Donnerstag, 20. Mai 2027" Haupttermin, "Donnerstag, 03. Juni 2027"
//    Nachschreibtermin; "Die schriftlichen Prüfungen beginnen jeweils um 9:00 Uhr."
//  - AGIS homepage (64e5459f, FACTS 250): "Sie führen Kinder aus bis zu 65 verschiedenen Nationen zusammen und nutzen Englisch
//    als gemeinsame Sprache im Unterricht."
//  - Time: Einheitenzeitgesetz; summer time ended 25 October 2026, begins 28 March 2027; India UTC+5:30.
// Our own (scratchpad de/w/GE/py/dreisatz.py, python3 -I) prints:
//    Farbe -> proportional / Pumpen -> antiproportional / Kerze -> weder noch
//    Pumpen, falsch als proportional: 16/3 / Kerze, falsch als proportional: 28
// Lesson family: decide the type of Zuordnung first (quotient-equal, product-equal or neither), then calculate.

const { DE } = require('../../scripts/nl/lib/market-de');

const PY = [
  'from fractions import Fraction as F',
  '',
  'def art(paare):',
  '    quotienten = {F(y, x) for x, y in paare}',
  '    produkte = {x * y for x, y in paare}',
  '    if len(quotienten) == 1:',
  '        return "proportional"',
  '    if len(produkte) == 1:',
  '        return "antiproportional"',
  '    return "weder noch"',
  '',
  'farbe = [(3, 18), (1, 6), (5, 30)]       # Liter, Quadratmeter',
  'pumpen = [(6, 8), (3, 16), (4, 12)]      # Pumpen, Stunden',
  'kerze = [(0, 20), (3, 14), (6, 8)]       # Stunden, Zentimeter',
  '',
  'for name, paare in [("Farbe", farbe), ("Pumpen", pumpen), ("Kerze", kerze[1:])]:',
  '    print(name, "->", art(paare))',
  '',
  'print("Pumpen, falsch als proportional:", F(8, 6) * 4)',
  'print("Kerze, falsch als proportional:", F(14, 3) * 6)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'Mathe-Nachhilfe auf Englisch' },
  slug: 'mathe-nachhilfe-auf-englisch',
  code: 'mne',
  accent: '#68482D',
  accentRationale: 'Mathe-Nachhilfe auf Englisch: a dark walnut brown #68482D, the colour of a wooden ruler and a well-used pencil, distinct from the plum of the Abitur preparation page and the Informatik petrol; at least 6.67 on the paper #FBF8F2 and its tints',
  pageType: 'market',
  priceSubject: 'maths',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Mathe-Nachhilfe auf Englisch',
  title: 'Mathe-Nachhilfe auf Englisch: live online, Klasse 1 bis 13',
  description: 'Mathe-Nachhilfe auf Englisch für Kinder in Deutschland: live online, nach den KMK-Bildungsstandards, mit deutschen Schreibweisen erklärt. Klasse 1 bis 13.',
  ogDescription: 'Mathe-Nachhilfe live auf Englisch für Familien in Deutschland: was der deutsche Lehrplan bis zum MSA verlangt, welche deutschen Schreibweisen Kinder aus englischsprachigen Schulen verwirren, und wann der Dreisatz versagt.',
  twitterDescription: 'Mathe-Nachhilfe live auf Englisch: Lehrplan bis zum MSA, deutsche Schreibweisen und der Dreisatz mit Gegenprobe.',
  pageName: 'Mathe-Nachhilfe auf Englisch',
  webPageDescription: 'Ein Leitfaden für Eltern in Deutschland, die Mathe-Nachhilfe auf Englisch suchen: für wen sie passt, was die KMK-Bildungsstandards bis zum Mittleren Schulabschluss verlangen, wie Zahlen in Deutschland anders geschrieben werden, und eine eigene Übung zu proportionalen und antiproportionalen Zuordnungen.',
  courseDescription: 'Live-Online-Mathe-Nachhilfe für die Klassen 1 bis 13 in ganz Deutschland, ausschließlich auf Englisch: Grundschulmathematik, Mittelstufe bis zum MSA und zur ZP10, Oberstufe und Abitur, abgestimmt auf den Lehrplan der Schule, in der Gruppe oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Mathe-Nachhilfe auf Englisch',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#fuer-wen', label: 'Für wen' },
    { href: '#lehrplan', label: 'Lehrplan' },
    { href: '#dreisatz', label: 'Dreisatz' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Deutschland &middot; Mathematik &middot; Klasse 1 bis 13',
  h1: 'Mathe-Nachhilfe auf Englisch, live und online',
  lede: 'Manche Kinder rechnen in Deutschland, denken aber auf Englisch: weil die Familie aus dem Ausland kommt, weil sie zweisprachig aufwachsen oder weil sie von einer internationalen Schule an ein Gymnasium wechseln. Andere Eltern wünschen sich Mathe-Nachhilfe auf Englisch, damit ihr Kind zwei Fächer zugleich übt. Diese Seite zeigt, was der deutsche Mathematikunterricht bis zum Mittleren Schulabschluss verlangt, welche Schreibweisen Kinder aus englischsprachigen Schulen stolpern lassen und wie wir am Beispiel des Dreisatzes unterrichten. Unterrichtet wird live und ausschließlich auf Englisch; die Mentoren sitzen in Indien.',
  secondaryCta: { href: '#lehrplan', label: 'Was der Lehrplan verlangt' },
  wa: 'Hallo Modern Age Coders, wir suchen Mathe-Nachhilfe auf Englisch für unser Kind in Deutschland. Ist eine kostenlose Probestunde möglich?',
  heroNote: 'Live-Mathematikunterricht seit 2020 &middot; mehr als 10.000 Lernende weltweit &middot; fester Mentor, Unterricht auf Englisch',
  spec: [
    ['Klassen', '1 bis 13, alle Schularten'],
    ['Grundlage', 'Schulbuch und Lehrplan Ihres Landes'],
    ['Sprache', 'Englisch, deutsche Fachwörter dazu'],
    ['Gruppe', 'Fünfzehn bis zwanzig, oder Einzelunterricht'],
    ['Mentoren', 'Live per Video aus Indien'],
    ['Probestunde', 'Kostenlos, ohne Karte']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Mathe-Nachhilfe auf Englisch bei Modern Age Coders ist live online, für Kinder und Jugendliche von Klasse 1 bis 13 in ganz Deutschland. Der Mentor erklärt auf Englisch, nennt die deutschen Fachwörter dazu und arbeitet mit dem Schulbuch und dem Lehrplan Ihres Landes, von der Grundschule über den Mittleren Schulabschluss bis zum Abitur. Ihr Kind lernt allein mit dem Mentor oder mit fünfzehn bis zwanzig anderen Kindern, im eigenen Tempo und mit einem Mentor, der sich auf seine Aussprache einstellt.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Mathekurse für drei Schulstufen',
    lede: 'Einer für die Grundschule, einer für die Mittelstufe bis zum MSA, einer für die Oberstufe. Der Mentor richtet jeden davon an dem aus, was gerade in der Schule drankommt.',
    items: [
      { course: 'elementary-mathematics-complete-masterclass', code: 'MNE / 01', title: 'Grundschulmathematik', alt: 'Kursbild Elementary Mathematics, Grundschulmathematik', note: 'Klasse 1 bis 4 (in Berlin und Brandenburg bis 6). Zahlenraum, schriftliche Rechenverfahren, Größen und erste Geometrie, mit viel Anschauung.' },
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'MNE / 02', title: 'Mittelstufenmathematik', alt: 'Kursbild Middle School Mathematics Mastery', note: 'Klasse 5 bis 10. Brüche, Prozente, Zuordnungen, Terme und Gleichungen, Geometrie, Daten und Zufall, bis zum Mittleren Schulabschluss.' },
      { course: 'abitur-mathematics-course-in-english', code: 'MNE / 03', title: 'Abitur Mathematik in English', alt: 'Kursbild Abitur Mathematik in English', note: 'Oberstufe, Grund- und Leistungskurs. Analysis, Geometrie und Stochastik, mit Aufgaben, wie sie der gemeinsame Pool der Länder vorsieht.' }
    ]
  },

  sections: [
    {
      id: 'fuer-wen',
      eyebrow: 'Für wen',
      h2: 'Für wen ist Mathe-Nachhilfe auf Englisch sinnvoll?',
      lede: 'Für mehr Familien, als man denkt. Vier Situationen begegnen uns besonders oft.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Neu in Deutschland', p: 'Ihr Kind hat Mathematik bisher auf Englisch gelernt und sitzt jetzt in einer deutschen Klasse. Der Stoff ist oft bekannt, die Wörter nicht. Nachhilfe auf Englisch schließt die Lücke, während das Deutsch wächst.' },
          { h3: 'Zweisprachig', p: 'Zu Hause wird Englisch gesprochen, in der Schule Deutsch. Viele zweisprachige Kinder verstehen eine Erklärung schneller in der Sprache, in der sie denken. Die Klassenarbeit schreiben sie trotzdem sicher auf Deutsch.' },
          { h3: 'Zwischen zwei Systemen', p: 'Ein Wechsel von einer internationalen Schule an ein Gymnasium oder umgekehrt verschiebt Themen um ein oder zwei Jahre. Wir finden heraus, was fehlt und was doppelt kommt.' }
        ] },
        { kind: 'p', mt: true, html: '<strong>Und die vierte Gruppe:</strong> Eltern, deren Kind gut Deutsch spricht, die aber möchten, dass es nebenbei sein Englisch trainiert. Mathematik eignet sich dafür gut, weil die Sätze kurz sind und die Zahlen helfen. Ein Kind, das "three quarters of twelve is nine" sagen kann, hat Bruchrechnung und Englisch zugleich geübt.' },
        { kind: 'p', html: 'Wie verbreitet Englisch als Unterrichtssprache in Deutschland ist, zeigt die Arbeitsgemeinschaft der Internationalen Schulen in Deutschland (AGIS): Ihre Mitgliedsschulen führen nach eigener Angabe Kinder aus bis zu 65 verschiedenen Nationen zusammen und nutzen Englisch als gemeinsame Sprache im Unterricht. Für Kinder, die von dort an eine deutsche Schule wechseln, ist der erste Schritt meist nicht die Mathematik, sondern die Art, wie sie auf Deutsch aufgeschrieben wird.' }
      ]
    },
    {
      id: 'lehrplan',
      eyebrow: 'Lehrplan',
      h2: 'Was verlangt der Mathematikunterricht in Deutschland bis zum MSA?',
      lede: 'Die Lehrpläne schreiben die Länder, die Ziele sind aber gemeinsam: Die Bildungsstandards der Kultusministerkonferenz sind laut KMK in allen Ländern verbindliche Zielvorgaben. Für Mathematik bis zum Ersten und Mittleren Schulabschluss gibt es seit 2022 ein gemeinsames Dokument.',
      body: [
        { kind: 'table', numCols: [], caption: 'Die fünf Leitideen der Bildungsstandards Mathematik für ESA und MSA, mit den englischen Wörtern aus unserem Unterricht', head: ['Leitidee', 'Sachgebiete laut KMK', 'Im Unterricht auf Englisch'], rows: [
          ['Zahl und Operation', 'Arithmetik und Algebra, auch Prozent- und Zinsrechnung', 'number and operations, percentages, interest'],
          ['Größen und Messen', 'Arithmetik, Algebra und Geometrie', 'measures, units, area, volume'],
          ['Strukturen und funktionaler Zusammenhang', 'Algebra und Funktionen', 'functions, equations, proportional relationships'],
          ['Raum und Form', 'Geometrie', 'shapes, space, constructions'],
          ['Daten und Zufall', 'Stochastik und Funktionen', 'statistics, probability, chance']
        ] },
        { kind: 'source', html: 'Quelle: Kultusministerkonferenz, Bildungsstandards für das Fach Mathematik, Erster Schulabschluss (ESA) und Mittlerer Schulabschluss (MSA), Beschluss vom 15.10.2004 und vom 04.12.2003 in der Fassung vom 23.06.2022, gelesen am 2. November 2026. Die englischen Begriffe in der dritten Spalte sind unsere eigene Übersetzung.' },
        { kind: 'two', mt: true,
          leftH3: 'Nicht nur Inhalte, auch Tätigkeiten',
          left: [
            'Neben den Leitideen nennt die KMK sechs allgemeine Kompetenzen: mathematisch kommunizieren, Probleme mathematisch lösen, mathematisch modellieren, mathematisch darstellen, mit mathematischen Objekten umgehen und mit Medien mathematisch arbeiten.',
            'Für Kinder aus englischsprachigen Schulen ist vor allem das Kommunizieren neu. In deutschen Klassenarbeiten wird oft verlangt, einen Rechenweg zu begründen oder ein Ergebnis in einem Antwortsatz zu deuten. Wir üben das, indem das Kind zuerst auf Englisch erklärt und dann den deutschen Antwortsatz formuliert.'
          ],
          rightH3: 'Wann geprüft wird',
          right: [
            'In Klasse 8 schreiben Schülerinnen und Schüler die Vergleichsarbeit VERA-8, unter anderem in Mathematik; das IQB nennt für 2027 den Zeitraum vom 8. Februar bis 25. März 2027, und die Ergebnisse werden nicht benotet.',
            'Am Ende von Klasse 10 wird es ernst: In Berlin zählt Mathematik zu den Kernfächern im MSA, die schriftliche Prüfung ist am Donnerstag, dem 15. April 2027. In Nordrhein-Westfalen ist die ZP10 in Mathematik am Donnerstag, dem 20. Mai 2027.'
          ] }
      ]
    },
    {
      id: 'schreibweisen',
      eyebrow: 'Schreibweisen',
      h2: 'Welche deutschen Schreibweisen verwirren Kinder aus englischsprachigen Schulen?',
      lede: 'Die Mathematik ist dieselbe, die Zeichen sind es nicht. Diese Unterschiede kosten in der ersten Klassenarbeit nach einem Schulwechsel erstaunlich viele Punkte. Die Tabelle ist unsere eigene Zusammenstellung aus dem Unterricht.',
      body: [
        { kind: 'table', numCols: [], caption: 'Gleiche Mathematik, andere Schreibweise (unsere Zusammenstellung)', head: ['Was', 'In Deutschland', 'In englischsprachigen Schulen'], rows: [
          ['Dezimalzahl', '3,75', '3.75'],
          ['Große Zahl', '12.500 oder 12 500', '12,500'],
          ['Malzeichen', '4 &middot; 7', '4 &times; 7'],
          ['Geteilt', '28 : 4', '28 &divide; 4'],
          ['Punkt im Koordinatensystem', 'P(2 | 5)', 'P(2, 5)'],
          ['Eine Milliarde', '1 Milliarde = 10<sup>9</sup>', '1 billion = 10<sup>9</sup>'],
          ['Eine Billion', '1 Billion = 10<sup>12</sup>', '1 trillion = 10<sup>12</sup>'],
          ['Gemischte Zahl', 'oft vermieden, eher 7/4', '1&frac34; ist üblich']
        ] },
        { kind: 'p', mt: true, html: 'Die Billion ist der Klassiker: Wer auf Englisch "one billion" gelernt hat und in einer deutschen Sachaufgabe "eine Billion" liest, liegt um den Faktor tausend daneben. Auch das Komma macht Ärger. Ein Kind, das 3,75 als "drei Komma sieben fünf" lesen soll, aber 3.75 gewohnt ist, verwechselt beim schnellen Abschreiben leicht Tausender- und Dezimaltrennzeichen. Wir sprechen diese Unterschiede in den ersten Stunden ausdrücklich an und üben beide Schreibweisen, bis das Umschalten automatisch geht.' },
        { kind: 'p', html: 'Auch die Namen der Klassenstufen unterscheiden sich. Wir arbeiten immer mit der deutschen Klasse Ihres Kindes und dem Schulbuch, das es tatsächlich benutzt, nicht mit einem Lehrplan aus einem anderen Land.' }
      ]
    },
    {
      id: 'dreisatz',
      tint: 'tint',
      eyebrow: 'Ein Übungsbeispiel',
      h2: 'Was ist der Dreisatz, und wann funktioniert er nicht?',
      lede: 'Die KMK-Bildungsstandards nennen den Dreisatz ausdrücklich als bekanntes Modell und verlangen, dass Schülerinnen und Schüler proportionale und antiproportionale Zusammenhänge in Sachsituationen unterscheiden. Genau daran scheitern viele: Sie rechnen den Dreisatz, ohne vorher zu prüfen, ob er passt. Die drei Aufgaben sind unsere eigenen.',
      body: [
        { kind: 'ol', items: [
          '<strong>Farbe (proportional).</strong> 3 Liter Farbe reichen für 18 m&sup2; Wand. Wie viel Farbe brauchen Sie für 30 m&sup2;? Doppelte Fläche, doppelte Farbe: Es ist eine proportionale Zuordnung. 1 Liter reicht für 6 m&sup2;, also brauchen Sie für 30 m&sup2; genau 5 Liter.',
          '<strong>Pumpen (antiproportional).</strong> 6 gleiche Pumpen leeren ein Becken in 8 Stunden. Wie lange brauchen 4 Pumpen? Mehr Pumpen, weniger Zeit: Die Zuordnung ist antiproportional, das Produkt bleibt gleich. 6 &middot; 8 = 48 Pumpenstunden, also brauchen 4 Pumpen 48 : 4 = 12 Stunden. Wer stur proportional rechnet, erhält 16/3, also etwa 5,3 Stunden, und das kann nicht stimmen, denn weniger Pumpen brauchen nicht weniger Zeit.',
          '<strong>Kerze (weder noch).</strong> Eine Kerze ist 20 cm lang. Nach 3 Stunden ist sie noch 14 cm lang. Wie lang ist sie nach 6 Stunden? Der Dreisatz liefert 28 cm, die Kerze wäre also gewachsen. Richtig ist: Sie brennt 2 cm pro Stunde ab und ist nach 6 Stunden noch 8 cm lang. Die Zuordnung ist linear, aber nicht proportional.'
        ] },
        { kind: 'code', label: 'Die Gegenprobe in Python: quotientengleich, produktgleich oder keins von beiden', lang: 'Python', code: PY, note: 'Ausgabe, mit <code>python3 -I</code> ausgeführt: <code>Farbe -&gt; proportional</code>, <code>Pumpen -&gt; antiproportional</code>, <code>Kerze -&gt; weder noch</code>, dann <code>Pumpen, falsch als proportional: 16/3</code> und <code>Kerze, falsch als proportional: 28</code>.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Der Test vor dem Dreisatz (unsere Faustregel)', head: ['Wenn', 'Dann ist die Zuordnung', 'Rechnen Sie'], rows: [
          ['alle Quotienten y : x gleich sind', 'proportional', 'über eine Einheit, mal und geteilt in dieselbe Richtung'],
          ['alle Produkte x &middot; y gleich sind', 'antiproportional', 'über das Produkt, die Richtungen sind entgegengesetzt'],
          ['weder noch', 'keine der beiden', 'kein Dreisatz: Zuordnung erst beschreiben, etwa als lineare Funktion']
        ] },
        { kind: 'p', mt: true, html: 'Die Faustregel, die wir Kindern mitgeben, ist kurz: <strong>Erst die Art der Zuordnung bestimmen, dann rechnen.</strong> In der Grundschule geschieht das mit "je mehr, desto mehr" und "je mehr, desto weniger", in Klasse 7 mit Quotienten und Produkten, in Klasse 9 und 10 mit Funktionsgleichungen. Auf Englisch heißen die Begriffe direct proportion und inverse proportion; im Unterricht sagen wir beide Wörter, damit die deutsche Klassenarbeit keine Überraschung bringt.' }
      ]
    },
    {
      id: 'ablauf',
      eyebrow: 'Ablauf',
      h2: 'Wie läuft Mathe-Nachhilfe auf Englisch bei uns ab?',
      lede: 'In fünf Schritten von der Probestunde zum festen Rhythmus.',
      body: [
        { kind: 'ol', items: [
          '<strong>Probestunde.</strong> Ihr Kind bringt eine aktuelle Klassenarbeit oder ein Arbeitsblatt mit. Der Mentor löst eine Aufgabe gemeinsam mit ihm und hört genau hin, wo es stockt: beim Rechnen, beim Lesen oder bei den deutschen Wörtern.',
          '<strong>Einstufung.</strong> Wir ordnen ein, in welcher Leitidee die Lücke liegt, und vergleichen mit dem, was laut Schulbuch in den nächsten Wochen kommt.',
          '<strong>Wöchentlicher Unterricht.</strong> Zwei Live-Stunden pro Woche, in der Gruppe oder einzeln, immer mit demselben Mentor. Erklärt wird auf Englisch, die Aufgaben stammen aus dem deutschen Unterricht.',
          '<strong>Vor Klassenarbeiten.</strong> Gezielte Wiederholung des Themas der Arbeit, mit Aufgaben im Stil der Schule und einem deutschen Antwortsatz am Ende jeder Aufgabe.',
          '<strong>Rückmeldung.</strong> Sie erhalten kurze Berichte, was geübt wurde und was noch schwerfällt. Grundlage für Noten bleibt immer die Schule; wir unterrichten begleitend.'
        ] },
        { kind: 'p', mt: true, html: 'Unsere Mentoren arbeiten von Indien aus, unterrichten live per Video und sprechen ein klares, langsames Englisch. Sie wiederholen eine Erklärung mit anderen Worten, bis sie sitzt, und stellen sich auf die Aussprache Ihres Kindes ein. Ein deutsches Wort zwischendurch ist ausdrücklich erlaubt; der Mentor nennt das englische dazu.' }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Zu welchen Zeiten findet die Nachhilfe statt?',
      lede: 'Die Mentoren sitzen in Indien, die Stunden liegen trotzdem im deutschen Nachmittag oder am Wochenende. Einige Beispiele, umgerechnet:',
      body: [
        { kind: 'table', numCols: [], caption: 'Beispiele: so spät ist es dann beim Mentor in Indien', head: ['Deutsche Zeit', 'Indien, Winter (bis 27. März 2027)', 'Indien, Sommer (ab 28. März 2027)'], rows: [
          ['13:45', '18:15', '17:15'],
          ['17:15', '21:45', '20:45'],
          ['Samstag 09:00', '13:30', '12:30'],
          ['Sonntag 16:00', '20:30', '19:30']
        ] },
        { kind: 'source', html: 'Nach dem Einheiten- und Zeitgesetz gilt in Deutschland im Winter MEZ (UTC+1) und im Sommer MESZ (UTC+2); umgestellt wurde zuletzt am 25. Oktober 2026, die nächste Umstellung ist am 28. März 2027. Indien hat ohne Umstellung UTC+5:30. Der Unterschied beträgt daher im Winter viereinhalb, im Sommer dreieinhalb Stunden. Es handelt sich um Beispiele, nicht um feste Kurszeiten.' },
        { kind: 'p', mt: true, html: 'Grundschulkinder lernen meist am frühen Nachmittag oder am Samstagvormittag, Jugendliche lieber später. Wenn Sie buchen, rechnet das Buchungsformular jede Uhrzeit automatisch in Ihre Zeitzone um.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Woran Sie den Fortschritt Ihres Kindes erkennen',
    lede: 'Fünf Stufen, die wir für Kinder nutzen, die Mathe auf Englisch lernen und auf Deutsch geprüft werden. Die Einteilung ist unsere.',
    table: { caption: 'Fünf Stufen beim Lernen in zwei Sprachen (unsere)', head: ['Stufe', 'Ihr Kind kann', 'Typisch für'], rows: [
      ['1. Verstehen', 'eine Erklärung auf Englisch nachvollziehen und nachrechnen', 'die ersten Wochen'],
      ['2. Übersetzen', 'eine deutsche Textaufgabe in eine Rechnung übertragen', 'Kinder nach einem Schulwechsel'],
      ['3. Prüfen', 'vor dem Rechnen sagen, ob ein Dreisatz passt', 'Klasse 6 bis 8'],
      ['4. Begründen', 'einen Rechenweg auf Deutsch begründen', 'Klassenarbeiten ab Klasse 7'],
      ['5. Selbstständig', 'neue Aufgabentypen ohne Hilfe angehen', 'vor dem MSA oder der ZP10']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Die Stufe 2 dauert nach einem Umzug oft am längsten. Das liegt selten an der Mathematik und fast immer an der Sprache der Aufgabe.',
      'Fragen Sie Ihr Kind nach einer Stunde, welche zwei Wörter es neu gelernt hat, eines auf Deutsch und eines auf Englisch.'
    ] },
    right: { h3: 'Für Schülerinnen und Schüler', ps: [
      'Lesen Sie eine Textaufgabe zweimal: einmal, um die Geschichte zu verstehen, einmal, um die Zahlen herauszuschreiben.',
      'Bevor Sie einen Dreisatz rechnen, sagen Sie laut: je mehr, desto mehr, oder je mehr, desto weniger?'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Mathekurse auf Englisch',
    lede: 'Jeder Kurs ist live, mit einem Mentor, der Ihr Kind über Monate begleitet, in einer Gruppe oder einzeln.',
    bands: [
      { num: 'I', h3: 'Für jüngere Kinder', sub: '4 bis 10 Jahre', courses: [
        { code: 'MNE / KLEIN / 01', slug: 'early-math-foundations', title: 'Erste Mathematik', blurb: 'Zählen, Formen und Muster zum Anfassen, 4 bis 7.' },
        { code: 'MNE / KLEIN / 02', slug: 'mental-maths-mastery-kids', title: 'Kopfrechnen', blurb: 'Zahlgefühl statt Tricks, 5 bis 10.' },
        { code: 'MNE / KLEIN / 03', slug: 'maths-through-coding', title: 'Mathematik mit Python', blurb: 'Rechnen und Programmieren verbinden, 10 bis 15.' }
      ] },
      { num: 'II', h3: 'Mittelstufe und Oberstufe', sub: '11 bis 18 Jahre', courses: [
        { code: 'MNE / MITTE / 01', slug: 'algebra-foundations-masterclass', title: 'Algebra von Grund auf', blurb: 'Variablen, Klammern und lineare Gleichungen ohne Angst.' },
        { code: 'MNE / MITTE / 02', slug: 'statistics-probability-maths-course', title: 'Statistik und Wahrscheinlichkeit', blurb: 'Daten und Zufall, von Diagrammen bis zu Verteilungen.' },
        { code: 'MNE / MITTE / 03', slug: 'complete-high-school-mathematics-mastery', title: 'Oberstufenmathematik', blurb: 'Von der Algebra bis zur Analysis.' }
      ] },
      { num: 'III', h3: 'Internationale Abschlüsse und Wettbewerbe', sub: '9 bis 19 Jahre', courses: [
        { code: 'MNE / INT / 01', slug: 'igcse-mathematics-mastery', title: 'IGCSE Mathematics', blurb: 'Core und Extended für internationale Schulen.' },
        { code: 'MNE / INT / 02', slug: 'ib-mathematics-aa-ai-masterclass', title: 'IB Maths AA und AI', blurb: 'Beide IB-Mathekurse, Standard und Higher Level.' },
        { code: 'MNE / INT / 03', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Mathematik-Olympiade und Känguru', blurb: 'Knobeln und Beweisen mit eigenen Aufgaben.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'So läuft es',
    h2: 'Wie der Live-Unterricht funktioniert',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Früher Nachmittag', l: 'Für Grundschulkinder, bald nach Schulschluss.' },
      { time: 'Später Nachmittag', l: 'Für die Mittel- und Oberstufe, nach den Hausaufgaben.' },
      { time: 'Samstag und Sonntag', l: 'Vormittags oder nachmittags, ohne Schulstress.' }
    ],
    cells: [
      { h3: 'Derselbe Mentor', p: 'Er kennt nach wenigen Wochen das Schulbuch und die Stolpersteine Ihres Kindes.' },
      { h3: 'Klares Englisch', p: 'Langsam gesprochen, mit einfachen Worten, gern wiederholt.' },
      { h3: 'Deutsche Fachwörter', p: 'Zu jedem englischen Begriff das Wort aus der Klassenarbeit.' },
      { h3: 'Schulmaterial', p: 'Arbeitsblätter und Hefteinträge werden mitbenutzt.' },
      { h3: 'Antwortsätze', p: 'Jede Textaufgabe endet mit einem Satz auf Deutsch.' },
      { h3: 'Zwei Formate', p: 'Eine Gruppe mit fünfzehn bis zwanzig Kindern oder Einzelunterricht.' }
    ]
  },

  projectsH2: 'Projekte unserer Lernenden',
  projectsLede: 'Wer Mathematik mag, programmiert irgendwann gern. Unten einige Projekte von Lernenden, mehr auf <a class="ag-inline-link" href="/student-labs">Student labs</a> (die Seite ist auf Englisch).',
  reviewsLede: 'Stimmen von Eltern und Lernenden aus Google-Bewertungen, im englischen Wortlaut.',

  fees: {
    h2: 'Preise für Mathe-Nachhilfe in Deutschland',
    lede: 'Abgerechnet wird pro Monat, darin stecken acht Live-Stunden. Wir zeigen die Beträge in Euro, umgerechnet mit dem Referenzkurs der Europäischen Zentralbank. Die Zahlung selbst läuft in US-Dollar, Ihre Bank tauscht den Betrag in Euro, und dabei kann sich der abgebuchte Betrag geringfügig unterscheiden.',
    free: ['Eine kostenlose Probestunde', 'Einstufung an einer echten Klassenarbeit', 'Ohne Karte'],
    group: ['Fünfzehn bis zwanzig Kinder ähnlichen Alters', 'Fester Mentor', 'Zweimal pro Woche live', 'Monatlich kündbar'],
    one: ['Nur Ihr Kind und der Mentor', 'Tempo und Themen nach Bedarf', 'Termine nach Absprache']
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    h2: 'Mathe-Nachhilfe auf Englisch: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein, ausschließlich auf Englisch, und das ist Absicht: Ihr Kind übt Mathematik und Englisch zugleich. Der Mentor nennt zu jedem Begriff das deutsche Fachwort, und Antwortsätze üben wir auf Deutsch, damit die Klassenarbeit in der Schule keine Überraschung bringt.' },
      { q: 'Muss mein Kind schon gut Englisch können?', a: 'Nein. Für die Grundschule reicht ein einfaches Alltagsenglisch, weil Zahlen, Bilder und Rechnungen viel erklären. Die Mentoren sprechen langsam und deutlich, sagen eine Sache notfalls dreimal auf verschiedene Weise und gewöhnen sich schnell an die Aussprache Ihres Kindes.' },
      { q: 'Richtet sich die Nachhilfe nach dem deutschen Lehrplan?', a: 'Ja. Wir arbeiten mit dem Schulbuch, den Arbeitsblättern und dem Lehrplan Ihres Landes. Alle Länder bauen auf den Bildungsstandards der Kultusministerkonferenz auf, die für Mathematik bis zum MSA fünf Leitideen nennen, von Zahl und Operation bis Daten und Zufall.' },
      { q: 'Hilft die Nachhilfe auch vor dem MSA oder der ZP10?', a: 'Ja. In Berlin ist die schriftliche MSA-Prüfung in Mathematik am 15. April 2027, in Nordrhein-Westfalen die ZP10 in Mathematik am 20. Mai 2027. Wir üben mit Aufgaben im Stil dieser Prüfungen; welche Regeln genau gelten, sagt Ihnen die Schule.' },
      { q: 'Was ist VERA-8, und muss mein Kind dafür üben?', a: 'VERA-8 ist eine Vergleichsarbeit in Klasse 8, unter anderem in Mathematik. Für 2027 nennt das IQB den Zeitraum vom 8. Februar bis 25. März 2027. Die Ergebnisse werden nicht benotet; extra Nachhilfe nur dafür ist nicht nötig, gute Grundlagen helfen aber auch hier.' },
      { q: 'Wie schreibt man in Deutschland Dezimalzahlen?', a: 'Mit einem Komma, also 3,75 statt 3.75. Große Zahlen werden mit Punkt oder Leerzeichen gegliedert, also 12.500 statt 12,500. Und eine deutsche Billion ist eine englische trillion. Diese Unterschiede üben wir mit Kindern, die bisher auf Englisch gerechnet haben, in den ersten Stunden.' },
      { q: 'Ab welcher Klasse bieten Sie Mathe-Nachhilfe an?', a: 'Ab Klasse 1 bis zum Abitur. In der Grundschule geht es um Zahlvorstellung und Rechenverfahren, in der Mittelstufe um Brüche, Prozente, Zuordnungen und Gleichungen, in der Oberstufe um Analysis, Geometrie und Stochastik.' },
      { q: 'Wann finden die Stunden statt?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. 13:45 Uhr in Deutschland ist im Winter 18:15 Uhr beim Mentor in Indien.' },
      { q: 'Bekommt mein Kind durch die Nachhilfe bessere Noten?', a: 'Noten versprechen wir nicht, die vergibt die Schule. Was wir zeigen können: dass Ihr Kind Woche für Woche weniger Hilfe braucht, welche Aufgabentypen es inzwischen allein löst und wo noch geübt werden muss.' },
      { q: 'Was kostet die Mathe-Nachhilfe, und wie wird bezahlt?', a: 'Der Beitrag ist monatlich und wird auf dieser Seite in Euro angezeigt, umgerechnet nach dem Referenzkurs der Europäischen Zentralbank. Gezahlt wird in US-Dollar, den Wechsel übernimmt Ihre Bank. Die Probestunde kostet nichts, eine Karte ist dafür nicht nötig.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weiterlesen',
    h2: 'Mehr für Familien, die auf Englisch lernen',
    lede: 'Die meisten dieser Seiten sind auf Englisch.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Alle unsere Angebote in Deutschland auf einen Blick.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Learn to think, not copy AI', p: 'Denken lernen statt abschreiben, auch bei KI-Werkzeugen.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Dasselbe Prinzip für Informatik, ebenfalls auf Englisch.' },
      { href: '/coding-for-international-school-students-germany', label: 'International school students', p: 'Für Kinder an internationalen Schulen in Deutschland.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'Das Mathe-Abitur ausführlich auf Englisch erklärt.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'So sieht unser Live-Unterricht aus.' }
    ]
  },

  start: {
    h2: 'Probestunde kostenlos buchen',
    lede: 'Legen Sie für die erste Stunde eine aktuelle Klassenarbeit oder ein Arbeitsblatt bereit. Der Mentor rechnet eine Aufgabe mit Ihrem Kind, hört zu, wo es hakt, und empfiehlt dann Kurs und Format.',
    readFirst: 'Zum Vorab-Lesen: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> zeigt, wie eine Stunde abläuft, <a class="ag-inline-link" href="/courses">All courses</a> listet alle Lehrpläne (beide Seiten auf Englisch).',
    note: 'Live online, mit Mentoren in Indien, ausschließlich auf Englisch. Wir sind weder mit der KMK noch mit einem Schulministerium verbunden. Am schnellsten antworten wir per WhatsApp.',
    formNote: 'Kostenlos und unverbindlich, ohne Karte.'
  },

  footer: {
    cols: [
      { h4: 'Mathematik', links: [
        { href: '/courses/elementary-mathematics-complete-masterclass', label: 'Grundschulmathematik' },
        { href: '/courses/comprehensive-middle-school-mathematics-mastery', label: 'Mittelstufe' },
        { href: '/courses/abitur-mathematics-course-in-english', label: 'Abitur Mathematik' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths in English' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Erst die Zuordnung, dann der Dreisatz'
  },

  personalityCss: `
.ag-root.ag-mne .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-mne .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-mne .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-mne .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-mne .ag-table td { font-variant-numeric: tabular-nums; }
`,

  dossier: {
    curriculumAuthority: 'KMK Bildungsstandards Mathematik ESA/MSA (i.d.F. 23.06.2022); IQB VERA-8 page; Berlin Senatsverwaltung (Abschlüsse am Gymnasium, Prüfungsplan 2026/27); NRW Standardsicherung ZP10 Termine 2027; AGIS homepage; read 2 and 3 November 2026. Notation table and Dreisatz tasks our own.',
    localProject: 'An original Dreisatz lesson: paint (proportional, 5 litres), pumps (antiproportional, 12 hours; the blind proportional answer 16/3), a candle (linear, neither, 8 cm; the blind answer 28 cm), with a Python check that classifies each table as quotient-equal, product-equal or neither. Lesson family: decide the type of Zuordnung first, then calculate.',
    requiredMentions: ['Pumpen, falsch als proportional: 16/3', 'Kerze -&gt; weder noch', '1 Billion = 10<sup>12</sup>', 'P(2 | 5)', 'Kernfächern im MSA', 'Donnerstag, dem 15. April 2027', 'bis zu 65 verschiedenen Nationen', 'Erst die Zuordnung, dann der Dreisatz'],
    sources: [
      { claim: 'Five Leitideen and their Sachgebiete, six process competences, Dreisatz and proportional/antiproportional in the ESA/MSA standards.', url: 'https://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/2022/2022_06_23-Bista-ESA-MSA-Mathe.pdf' },
      { claim: 'VERA-8 2027 window 8 February to 25 March 2027; not graded.', url: 'https://www.iqb.hu-berlin.de/de/schule/sekundarstufe-i/vera/' },
      { claim: 'Berlin MSA maths 15 April 2027, resit 24 May 2027, start 10:00.', url: 'https://www.berlin.de/sen/bildung/schule/pruefungen-und-abschluesse/pruefungsplan-2027.pdf' },
      { claim: 'Berlin: German, maths and first foreign language are Kernfächer im MSA.', url: 'https://www.berlin.de/sen/bildung/schule/pruefungen-und-abschluesse/abschluesse-am-gymnasium-nach-klasse-9-und-10/' },
      { claim: 'NRW ZP10 maths 20 May 2027, resit 3 June 2027.', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentrale-pruefungen-10/termine/zentrale-pruefungen-10-termine-2027' },
      { claim: 'AGIS schools: children from up to 65 nations, English as the common teaching language.', url: 'https://www.agis-schools.org/' }
    ],
    rejectedClaims: [
      'German-language teaching: we teach in English only, and the capsule and FAQ say so.',
      'Grade promises: refused; the school awards grades and its course is the one that counts.',
      'Any accreditation, Bildungsgutschein or Lernförderung: none held, none claimed.',
      'A sourced claim on how many families in Germany speak English at home: no primary source, not stated.'
    ]
  }
};
