'use strict';
// Mathe-Nachhilfe online für die Realschule (ag- German-language door, Germany cluster P3, rows.tsv DE073, alloc code mnr).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; capsule says
// "auf Englisch". Formal "Sie". priceSubject 'maths'. Pages show euro; checkout charges USD.
// Angle: maths at the Realschule and the schools that carry the Realschule track under other names, aimed at the
// Mathe-Abschlussprüfung at the end of Klasse 10. Quotable table: the 2027 written maths exam in Bayern (Realschule) and
// Niedersachsen (Sekundarabschluss I), from the two ministries' own notices, with dates, times and duration. Then what the
// KMK standards ask for the Mittlerer Schulabschluss, a plan back from the exam date, and an original problem on
// "from which whole minute on" (strict inequality, the next whole number after the crossing). NRW ZP10 and Berlin MSA
// dates are on online-math-tutor-germany and are not repeated.
// Sources (fetched raw with curl -sL -A "Mozilla/5.0" on 3 Nov 2026; copies in
// ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/mathe-nachhilfe-online-realschule/):
//  - Bayern, BayMBl. 2026 Nr. 6 vom 14. Januar 2026, "Abschlussprüfung an den bayerischen Realschulen im Jahre 2027",
//    Bekanntmachung vom 16. Dezember 2025 (by-rs-2027.pdf): "Mathematik I und Mathematik II: Montag, 28. Juni 2027,
//    8:30 Uhr bis 11:50 Uhr, Prüfungsdauer 170 Minuten innerhalb des zeitlichen Rahmens; die Bearbeitungszeit für die
//    Aufgabengruppe A beträgt dabei 35 Minuten"; "Deutsch: Mittwoch, 23. Juni 2027"; "Englisch: Freitag, 25. Juni 2027";
//    "Informationstechnologie (freiwillig): Dienstag, 23. Februar 2027"; "Der letzte Schultag der Abschlussschülerinnen und
//    -schüler ist Freitag, der 23. Juli 2027".
//  - Bayern, Kultusministerium, Schulart Realschule, https://www.km.bayern.de/lernen/schularten/realschule (by-rs.html):
//    "Die Realschule umfasst die Jahrgangsstufen 5 bis 10."; "Die Realschule bietet drei Ausbildungsrichtungen."; "Die
//    Wahlpflichtfächergruppen beginnen ab der 7. Jahrgangsstufe"; ends "mit der Abschlussprüfung – in Deutsch, Englisch,
//    Mathematik und dem Profilfach der jeweiligen Wahlpflichtfächergruppe" (quote contains an en dash; paraphrased on page).
//  - Niedersachsen, MK, "Termine für die Abschlussprüfungen 2027 im Sekundarbereich I", Bek. d. MK v. 05.05.2025
//    (ni-ap-2027.pdf, https://www.mk.niedersachsen.de/download/142641/Abschlusspruefungen_2027.pdf): "Donnerstag 20.05.2027
//    Mathematik" (Haupttermin); "Dienstag 01.06.2027 Mathematik" (1. Nachschreibtermin); "Montag 10.05.2027 Deutsch";
//    "Freitag 14.05.2027 Englisch"; "Beginn der schriftlichen Prüfungen: jeweils 8.00 Uhr bis 8.15 Uhr"; "Bekanntgabe der
//    Vornoten ...: Dienstag, 08.06.2027"; covers "Sekundarabschlusses I – Realschulabschluss" at Realschulen, Oberschulen etc.
//  - KMK Bildungsstandards Mathematik ESA/MSA i.d.F. vom 23.06.2022 (facts-school/src/kmk-bista-msa-ma): MSA "(Jahrgangsstufe
//    10)"; "verbindliche normative Referenzpunkte ... für die Ausgestaltung von Prüfungen"; "lösen einfache lineare
//    Gleichungen"; "wenden lineare Funktionen in Sach-" situations (hyphenated in PDF; paraphrased).
//  - FACTS.md 18 (Realschule grades 5 to 10), 21 (two-track school names: Oberschule BB/SN, Realschule plus RP, Regelschule TH,
//    Regionale Schule MV, Sekundarschule HB/ST), 24 (central Land exams for Sek I certificates in most Länder), 7.
//  - Time: EinhZeitG; 25 October 2026 / 28 March 2027.
// Our own: two rain barrels, run with python3 -I: ab_wann(11, 3/2, 7/2) -> (Fraction(11, 2), 6); ab_wann(10, ...) ->
// (Fraction(5, 1), 6); table t = 4..7: A 17.0 18.5 20.0 21.5, B 14.0 17.5 21.0 24.5.
// Lesson family: "from which whole number on" with a strict inequality: the answer is the next whole number after the
// crossing, even when the crossing is itself a whole number.

const { DE: DE_DE } = require('../../scripts/nl/lib/market-de');

const PY = [
  'from fractions import Fraction',
  'import math',
  '',
  'def ab_wann(start_a, zufluss_a, zufluss_b):',
  '    grenze = Fraction(start_a) / (zufluss_b - zufluss_a)',
  '    return grenze, math.floor(grenze) + 1',
  '',
  'a, b = Fraction(3, 2), Fraction(7, 2)',
  'print(ab_wann(11, a, b))',
  'print(ab_wann(10, a, b))',
  'for t in range(4, 8):',
  '    print(t, float(11 + a * t), float(b * t))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'Mathe-Nachhilfe Realschule' },
  slug: 'mathe-nachhilfe-online-realschule',
  code: 'mnr',
  accent: '#8E3869',
  accentRationale: 'Mathe-Nachhilfe Realschule: a deep berry #8E3869, allocated for this page, set apart from the claret of the Gymnasium page so the two maths doors read as siblings, not twins; contrast 5.84 or better on the paper #FBF8F2 and on all three paper tints',
  pageType: 'market',
  priceSubject: 'maths',
  market: DE_DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Mathe-Nachhilfe online Realschule (auf Englisch)',
  title: 'Mathe-Nachhilfe online Realschule: Abschluss 2027, auf Englisch',
  description: 'Mathe-Nachhilfe online für die Realschule, live auf Englisch: Termine der Mathe-Abschlussprüfung 2027 in Bayern und Niedersachsen, Plan bis zur Prüfung, Übung.',
  ogDescription: 'Mathe-Nachhilfe für Realschülerinnen und Realschüler, live auf Englisch: wann 2027 die Mathe-Abschlussprüfung in Bayern und Niedersachsen ist, was die KMK für den Mittleren Schulabschluss verlangt und eine eigene Übungsaufgabe.',
  twitterDescription: 'Realschule, Mathe-Abschluss 2027: Bayern am 28. Juni, Niedersachsen am 20. Mai. Nachhilfe live auf Englisch.',
  pageName: 'Mathe-Nachhilfe online Realschule',
  webPageDescription: 'Ein Ratgeber für Eltern und Schülerinnen und Schüler an Realschulen und Schulen mit Realschulzweig zur Mathe-Nachhilfe online: die Termine der schriftlichen Mathematikprüfung 2027 in Bayern und Niedersachsen nach den Bekanntmachungen der Ministerien, die KMK-Standards für den Mittleren Schulabschluss, ein Plan bis zur Prüfung und eine eigene Aufgabe zu linearen Funktionen.',
  courseDescription: 'Live-Online-Mathenachhilfe für die Realschule und den Realschulzweig, Klasse 5 bis 10, ausschließlich auf Englisch: Prozente, Terme und Gleichungen, lineare und quadratische Funktionen, Geometrie und Daten, mit Vorbereitung auf die Abschlussprüfung, in der Gruppe oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Mathe-Nachhilfe Realschule',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#termine', label: 'Termine' },
    { href: '#plan', label: 'Plan' },
    { href: '#aufgabe', label: 'Aufgabe' },
    { href: '#fragen-schule', label: 'Schulformen' }
  ],
  eyebrow: 'Deutschland &middot; Mathematik &middot; Realschule und Realschulzweig',
  h1: 'Mathe-Nachhilfe online für die Realschule, live auf Englisch',
  lede: 'Am Ende der Realschule steht eine schriftliche Abschlussprüfung in Mathematik, deren Termin das Land Monate vorher festlegt. Diese Seite nennt die Termine 2027 für Bayern und Niedersachsen aus den Bekanntmachungen der Ministerien, erklärt, was die Kultusministerkonferenz für den Mittleren Schulabschluss erwartet, schlägt einen Plan bis zur Prüfung vor und zeigt eine typische Aufgabe zu linearen Funktionen. Unterrichtet wird live, mit festem Mentor und auf Englisch.',
  secondaryCta: { href: '#termine', label: 'Prüfungstermine 2027' },
  wa: 'Hallo Modern Age Coders, unser Kind ist an der Realschule und bereitet sich auf die Mathe-Abschlussprüfung vor. Wir möchten Nachhilfe auf Englisch ausprobieren. Ist eine kostenlose Probestunde möglich?',
  heroNote: 'Mathe live online &middot; seit 2020 im Unterricht &middot; über 10.000 Lernende weltweit &middot; Englisch als Unterrichtssprache',
  spec: [
    ['Schulart', 'Realschule und Realschulzweig'],
    ['Klassen', '5 bis 10, Schwerpunkt 9 und 10'],
    ['Ziel', 'Mathe-Abschlussprüfung'],
    ['Gruppe', 'Fünfzehn bis zwanzig, oder einzeln'],
    ['Sprache', 'Englisch, Mentoren in Indien'],
    ['Probestunde', 'Kostenlos, keine Karte']
  ],
  capsuleQ: 'Auf einen Blick',
  capsule: 'Modern Age Coders bietet Mathe-Nachhilfe online für die Realschule und für Schulen mit Realschulzweig an, live und auf Englisch: Prozente, Gleichungen, lineare und quadratische Funktionen, Geometrie und Daten in Klasse 5 bis 10, in Klasse 9 und 10 gezielt auf die schriftliche Abschlussprüfung in Mathematik hin. Ein fester Mentor arbeitet mit dem Schulmaterial, als Gruppe mit fünfzehn bis zwanzig Lernenden oder im Einzelunterricht.',

  picks: {
    eyebrow: 'Kurse für den Realschulabschluss',
    h2: 'Drei Mathekurse, die zur Abschlussprüfung passen',
    lede: 'Der erste deckt den Prüfungsstoff ab, der zweite die Algebra, ohne die keine Prüfungsaufgabe geht, der dritte den Teil zu Daten und Zufall.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'MNR / 01', title: 'Mittelstufenmathematik komplett', alt: 'Kursbild Mittelstufenmathematik komplett', note: 'Prozente und Zinsen, Terme, Gleichungen, Funktionen, Flächen und Körper: der Stoff, auf dem die Abschlussprüfung aufbaut.' },
      { course: 'algebra-foundations-masterclass', code: 'MNR / 02', title: 'Algebra sicher beherrschen', alt: 'Kursbild Algebra sicher beherrschen', note: 'Gleichungen umformen, Gleichungssysteme lösen, Formeln nach einer Größe auflösen, in kleinen, sicheren Schritten.' },
      { course: 'statistics-probability-maths-course', code: 'MNR / 03', title: 'Daten und Zufall', alt: 'Kursbild Statistik und Wahrscheinlichkeit', note: 'Diagramme lesen, Mittelwert und Median, Baumdiagramme und Wahrscheinlichkeiten, wie sie in Prüfungsaufgaben vorkommen.' }
    ]
  },

  sections: [
    {
      id: 'termine',
      eyebrow: 'Prüfungstermine 2027',
      h2: 'Wann ist die Mathe-Abschlussprüfung 2027 an der Realschule?',
      lede: 'Das hängt vom Land ab. Zwei Länder haben ihre Termine für 2027 bereits amtlich bekannt gemacht: Bayern für seine Realschulen, Niedersachsen für alle Schulformen, an denen der Sekundarabschluss I erworben wird.',
      body: [
        { kind: 'table', numCols: [], caption: 'Schriftliche Abschlussprüfung Mathematik 2027 in Bayern und Niedersachsen', head: ['Punkt', 'Bayern, Realschule', 'Niedersachsen, Sekundarabschluss I'], rows: [
          ['Mathematik, Haupttermin', 'Montag, 28. Juni 2027', 'Donnerstag, 20.05.2027'],
          ['Uhrzeit', '8:30 Uhr bis 11:50 Uhr', 'Beginn jeweils 8.00 Uhr bis 8.15 Uhr'],
          ['Dauer', '170 Minuten, davon 35 Minuten für Aufgabengruppe A', 'In der Bekanntmachung nicht genannt'],
          ['Bezeichnung', 'Mathematik I und Mathematik II', 'Mathematik, landesweit einheitliche Aufgaben'],
          ['Nachschreibtermin', 'In der Bekanntmachung nicht genannt', 'Dienstag, 01.06.2027'],
          ['Deutsch und Englisch', '23. Juni 2027 und 25. Juni 2027', '10.05.2027 und 14.05.2027'],
          ['Danach', 'Letzter Schultag und Zeugnis am Freitag, 23. Juli 2027', 'Vornoten und Prüfungsleistungen am Dienstag, 08.06.2027']
        ] },
        { kind: 'source', html: 'Quellen: Bayerisches Staatsministerium für Unterricht und Kultus, "Abschlussprüfung an den bayerischen Realschulen im Jahre 2027", Bekanntmachung vom 16. Dezember 2025, BayMBl. 2026 Nr. 6 vom 14. Januar 2026; Niedersächsisches Kultusministerium, "Termine für die Abschlussprüfungen 2027 im Sekundarbereich I", Bekanntmachung vom 05.05.2025. Beide gelesen am 3. November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'Bayern: zwei Fassungen, ein Tag',
          left: [
            'Die bayerische Bekanntmachung führt die Mathematikprüfung als "Mathematik I und Mathematik II" am selben Tag. Welche der beiden Fassungen Ihr Kind schreibt, sagt Ihnen die Schule; die Wahlpflichtfächergruppen beginnen laut Kultusministerium ab der 7. Jahrgangsstufe.',
            'Die ersten 35 Minuten gehören der Aufgabengruppe A, danach folgt der Rest der Prüfung. Wer in diesem ersten Teil schnell und sicher rechnet, gewinnt Ruhe für den zweiten.'
          ],
          rightH3: 'Niedersachsen: früher im Jahr',
          right: [
            'In Niedersachsen liegt die Mathematikprüfung 2027 mehr als fünf Wochen vor dem bayerischen Termin. Die Aufgaben sind landesweit einheitlich und gelten an Realschulen, Oberschulen, Integrierten Gesamtschulen und den Realschulzweigen der Kooperativen Gesamtschulen.',
            'Für alle, die am Haupttermin fehlen, setzt das Ministerium den Dienstag, 01.06.2027 als ersten Nachschreibtermin fest.'
          ] },
        { kind: 'p', mt: true, html: 'In den meisten anderen Ländern gibt es ebenfalls zentrale Prüfungen auf Landesebene für die Abschlüsse der Sekundarstufe I, wie die Kultusministerkonferenz in ihrem Dossier zum Bildungswesen festhält. Die Termine Ihres Landes nennt Ihnen die Schule; der Mentor plant danach.' }
      ]
    },
    {
      id: 'standards',
      eyebrow: 'Was geprüft wird',
      h2: 'Was verlangt die Mathe-Prüfung für den Mittleren Schulabschluss?',
      lede: 'Den gemeinsamen Rahmen bilden die Bildungsstandards Mathematik der Kultusministerkonferenz für den Ersten und den Mittleren Schulabschluss in der Fassung vom 23.06.2022. Die KMK nennt sie verbindliche Referenzpunkte, unter anderem für die Ausgestaltung von Prüfungen.',
      body: [
        { kind: 'table', numCols: [], caption: 'Die fünf Leitideen der KMK-Standards und typische Prüfungsthemen (Themen unsere Auswahl)', head: ['Leitidee laut KMK', 'Typisch in Klasse 9 und 10', 'Häufiger Stolperstein'], rows: [
          ['Zahl und Operation', 'Prozent- und Zinsrechnung, Potenzen, Wurzeln', 'Grundwert und Prozentwert verwechseln'],
          ['Größen und Messen', 'Flächen, Volumen und Oberflächen von Körpern, Einheiten', 'Kubikzentimeter in Liter umrechnen'],
          ['Strukturen und funktionaler Zusammenhang', 'Lineare und quadratische Funktionen, Gleichungssysteme', 'Steigung aus zwei Punkten ablesen'],
          ['Raum und Form', 'Satz des Pythagoras, Ähnlichkeit, Trigonometrie im rechtwinkligen Dreieck', 'Hypotenuse falsch zuordnen'],
          ['Daten und Zufall', 'Diagramme, Mittelwert und Median, Baumdiagramme', 'Pfadregeln vertauschen']
        ] },
        { kind: 'source', html: 'Die Namen der Leitideen stammen aus den KMK-Bildungsstandards Mathematik für ESA und MSA, Fassung vom 23.06.2022. Welche Themen in der Prüfung Ihres Landes vorkommen, legt das Land fest; die mittlere und rechte Spalte geben unsere Erfahrung aus dem Unterricht wieder.' },
        { kind: 'p', mt: true, html: 'Zwei Punkte aus den Standards sind für die Vorbereitung besonders nützlich. Erstens beschreibt die KMK die Standards für den Mittleren Schulabschluss am Ende der Jahrgangsstufe 10, also genau für das Schuljahr der Prüfung. Zweitens verlangen sie neben dem Rechnen auch das Anwenden in Sachsituationen: lineare Funktionen nutzen, um eine Frage aus dem Alltag zu beantworten. Viele Prüfungsaufgaben sind deshalb Textaufgaben, und genau dort hakt es bei vielen Lernenden mehr als beim Rechnen selbst.' }
      ]
    },
    {
      id: 'plan',
      eyebrow: 'Vorbereitungsplan',
      h2: 'Wie bereitet man sich in Klasse 10 auf die Mathe-Abschlussprüfung vor?',
      lede: 'Rückwärts vom Prüfungstag aus geplant. Unser Vorschlag für die Realschule in Bayern, mit dem Haupttermin am 28. Juni 2027; in Niedersachsen verschiebt sich alles um gut fünf Wochen nach vorn.',
      body: [
        { kind: 'ol', items: [
          '<strong>November und Dezember 2026: Bestandsaufnahme.</strong> Eine alte Prüfung unter Zeit rechnen, ohne Hilfe. Danach steht fest, welche Leitideen sicher sitzen und welche nicht.',
          '<strong>Januar bis März 2027: Lücken schließen.</strong> Pro Woche ein Thema aus der Liste, mit kurzen Wiederholungen der vorherigen. Prozente und Gleichungen zuerst, weil sie in fast jeder Aufgabe stecken.',
          '<strong>April und Mai 2027: Textaufgaben.</strong> Sachaufgaben übersetzen: Was ist gegeben, was gesucht, welche Gleichung passt? Jede Lösung mit einem Antwortsatz.',
          '<strong>Juni 2027: Prüfungen unter Zeit.</strong> Vollständige Probeprüfungen in 170 Minuten, die ersten 35 Minuten getrennt geübt.',
          '<strong>Letzte Woche: nur noch Sicherheit.</strong> Formelsammlung kennen, Lieblingsaufgaben wiederholen, ausschlafen.'
        ] },
        { kind: 'p', mt: true, html: 'Der Plan ist unser eigener Vorschlag. Wir unterrichten parallel zum Schulunterricht; über die Abschlussnote entscheiden allein die Schule und die Prüfung des Landes. Originalaufgaben früherer Jahre gibt es bei den Ländern und im Buchhandel; im Unterricht arbeiten wir zusätzlich mit selbst geschriebenen Aufgaben im selben Stil.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Mögliche Unterrichtszeiten in Deutschland und beim Mentor in Indien (unsere Umrechnung)', head: ['Bei Ihnen', 'In Indien, Winterzeit bis 28. März 2027', 'In Indien, Sommerzeit ab 28. März 2027'], rows: [
          ['Dienstag 16:20', '20:50', '19:50'],
          ['Donnerstag 17:40', '22:10', '21:10'],
          ['Sonntag 11:30', '16:00', '15:00']
        ] },
        { kind: 'source', html: 'Nach dem Einheiten- und Zeitgesetz rechnet Deutschland in der kalten Jahreszeit mit UTC+1 (MEZ) und in der Sommerzeit mit UTC+2 (MESZ); gewechselt wurde am 25. Oktober 2026, der nächste Wechsel ist am 28. März 2027. Indien rechnet fest mit UTC+5:30. Nur Beispiele, keine festen Gruppentermine.' }
      ]
    },
    {
      id: 'aufgabe',
      tint: 'tint',
      eyebrow: 'Eine Übungsaufgabe',
      h2: 'Ab welcher Minute ist mehr Wasser in Tonne B? Eine Aufgabe zu linearen Funktionen',
      lede: 'Aufgaben mit "ab wann" gehören zu den häufigsten in Abschlussprüfungen, und sie haben eine Falle, die mit der Rechnung nichts zu tun hat. Die Aufgabe ist unsere eigene.',
      body: [
        { kind: 'p', html: '<strong>Aufgabe.</strong> In Regentonne A sind schon 11 Liter Wasser, sie füllt sich mit 1,5 Litern pro Minute. Tonne B ist leer und füllt sich mit 3,5 Litern pro Minute. Ab welcher vollen Minute ist in Tonne B mehr Wasser als in Tonne A?' },
        { kind: 'ol', mt: true, items: [
          '<strong>Funktionen aufstellen.</strong> A(t) = 11 + 1,5t und B(t) = 3,5t, mit t in Minuten.',
          '<strong>Ungleichung lösen.</strong> 3,5t &gt; 11 + 1,5t, also 2t &gt; 11, also t &gt; 5,5.',
          '<strong>Auf die Frage antworten.</strong> Gesucht ist die erste volle Minute, für die t &gt; 5,5 gilt. Das ist Minute 6, nicht 5,5 und auch nicht 5.'
        ] },
        { kind: 'table', mt: true, numCols: [0, 1, 2], caption: 'Wertetabelle zur Kontrolle (unsere Rechnung)', head: ['Minute t', 'Liter in A', 'Liter in B'], rows: [
          ['4', '17,0', '14,0'], ['5', '18,5', '17,5'], ['6', '20,0', '21,0'], ['7', '21,5', '24,5']
        ] },
        { kind: 'p', mt: true, html: 'Die Tabelle bestätigt: Bei Minute 5 liegt A noch vorn, bei Minute 6 hat B mehr. Jetzt die Variante mit der eigentlichen Falle: Steht in Tonne A am Anfang 10 statt 11 Liter, ergibt die Rechnung t &gt; 5. Bei genau t = 5 sind beide Tonnen gleich voll, 17,5 Liter. "Mehr" heißt aber echt mehr. Die Antwort bleibt deshalb Minute 6, obwohl die Grenze diesmal eine ganze Zahl ist.' },
        { kind: 'code', label: 'Die Grenze exakt berechnen und die erste volle Minute danach', lang: 'Python', code: PY, note: 'So sah die Ausgabe bei unserem Lauf mit Python 3 aus: <code>(Fraction(11, 2), 6)</code>, <code>(Fraction(5, 1), 6)</code>, danach die Zeilen <code>4 17.0 14.0</code>, <code>5 18.5 17.5</code>, <code>6 20.0 21.0</code> und <code>7 21.5 24.5</code>. <code>math.floor(grenze) + 1</code> liefert die erste ganze Zahl echt oberhalb der Grenze.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Das Ungleichheitszeichen lesen.</strong> "Mehr als" ist &gt;, "mindestens so viel" ist ≥. Bei ≥ wäre die Antwort in der Variante Minute 5.',
          '<strong>Immer zurück zur Frage.</strong> 5,5 ist das Ergebnis der Rechnung, Minute 6 ist die Antwort auf die Frage.',
          '<strong>Mit einer Tabelle prüfen.</strong> Zwei Zeilen um die Grenze herum genügen, um den Fehler auszuschließen.'
        ] }
      ]
    },
    {
      id: 'fragen-schule',
      eyebrow: 'Schulformen',
      h2: 'Gilt die Nachhilfe auch für Oberschule, Regelschule oder Realschule plus?',
      lede: 'Ja. Den Realschulbildungsgang gibt es nicht überall unter diesem Namen, die Mathematik dahinter ist dieselbe.',
      body: [
        { kind: 'p', html: 'Laut Übersicht der Kultusministerkonferenz (Stand Februar 2021) führen mehrere Länder den Realschulgang in Schulen mit zwei Bildungsgängen: die Oberschule in Brandenburg und Sachsen, die Realschule plus in Rheinland-Pfalz, die Regelschule in Thüringen, die Regionale Schule in Mecklenburg-Vorpommern und die Sekundarschule in Bremen und Sachsen-Anhalt. Die klassische Realschule umfasst laut derselben Übersicht die Klassen 5 bis 10, in Bayern bestätigt das Kultusministerium die Jahrgangsstufen 5 bis 10 und drei Ausbildungsrichtungen.' },
        { kind: 'two', mt: true,
          leftH3: 'Warum Englisch kein Nachteil ist',
          left: [
            'Wir sagen es offen: Der Unterricht findet nur auf Englisch statt, nicht auf Deutsch. In Mathematik ist das leichter, als viele denken, denn Zahlen, Gleichungen und Skizzen versteht man in jeder Sprache.',
            'Die Mentoren in Indien erklären ruhig, wiederholen bei Bedarf und richten sich nach dem Tempo Ihres Kindes. Nebenbei wächst der englische Wortschatz, der auch in der Englischprüfung hilft.'
          ],
          rightH3: 'Die deutschen Begriffe',
          right: [
            'Weil die Prüfung auf Deutsch geschrieben wird, legen wir zu jedem Thema eine kleine Wortliste an: Grundwert und base value, Steigung und slope, Hypotenuse und hypotenuse. So passt beides zusammen.',
            'Textaufgaben aus dem deutschen Schulbuch lesen wir gemeinsam und klären unbekannte Wörter, bevor gerechnet wird.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Woran Sie den Weg zur Prüfung erkennen',
    lede: 'Vier Stufen, mit denen wir Lernende in Klasse 9 und 10 einordnen und Eltern berichten.',
    table: { caption: 'Vier Stufen auf dem Weg zur Mathe-Abschlussprüfung (unsere)', head: ['Stufe', 'Ziel bis', 'Ihr Kind kann'], rows: [
      ['1. Grundlagen sicher', 'Ende Klasse 9', 'Prozente, Brüche und einfache Gleichungen ohne Fehler rechnen'],
      ['2. Funktionen verstehen', 'Herbst Klasse 10', 'lineare und quadratische Funktionen zeichnen, ablesen und aufstellen'],
      ['3. Textaufgaben übersetzen', 'Frühjahr Klasse 10', 'aus einem Sachtext eine Gleichung machen und die Antwort zurückübersetzen'],
      ['4. Prüfungsreif', 'Vor dem Termin', 'eine ganze Probeprüfung in der vorgegebenen Zeit bearbeiten']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Stufe 3 ist der größte Schritt. Viele Jugendliche rechnen richtig, beantworten aber eine andere Frage als die gestellte. Darauf achten wir besonders.',
      'Nach jeder Einheit erfahren Sie kurz, was dran war und wie es lief.'
    ] },
    right: { h3: 'Für Schülerinnen und Schüler', ps: [
      'Unterstreichen Sie in jeder Textaufgabe die Frage, bevor Sie rechnen. Am Ende prüfen Sie, ob Ihr Antwortsatz genau diese Frage beantwortet.',
      'Machen Sie bei jeder "ab wann"-Aufgabe die Probe mit einer kleinen Tabelle.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Mathekurse',
    lede: 'Alle live, auf Englisch, mit einem festen Mentor, als Gruppe oder im Einzelunterricht.',
    bands: [
      { num: 'I', h3: 'Grundlagen festigen', sub: '9 bis 16 Jahre', courses: [
        { code: 'MNR / BASIS / 01', slug: 'mental-maths-mastery-kids', title: 'Kopfrechnen trainieren', blurb: 'Schneller und sicherer ohne Rechner.' },
        { code: 'MNR / BASIS / 02', slug: 'elementary-mathematics-complete-masterclass', title: 'Grundlagen wiederholen', blurb: 'Lücken aus der Unterstufe in Ruhe schließen.' },
        { code: 'MNR / BASIS / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Rechentricks', blurb: 'Abkürzungen, die man versteht.' }
      ] },
      { num: 'II', h3: 'Nach dem Abschluss', sub: '15 bis 19 Jahre', courses: [
        { code: 'MNR / WEITER / 01', slug: 'complete-high-school-mathematics-mastery', title: 'Mathe für die Oberstufe', blurb: 'Für den Wechsel auf ein Gymnasium oder eine Fachoberschule.' },
        { code: 'MNR / WEITER / 02', slug: 'abitur-mathematics-course-in-english', title: 'Abitur Mathematik auf Englisch', blurb: 'Wenn nach der Realschule das Abitur folgt.' },
        { code: 'MNR / WEITER / 03', slug: 'igcse-mathematics-mastery', title: 'IGCSE Mathematics', blurb: 'Der britische Abschluss, international anerkannt.' }
      ] },
      { num: 'III', h3: 'Mathe und mehr', sub: '10 bis 18 Jahre', courses: [
        { code: 'MNR / PLUS / 01', slug: 'maths-through-coding', title: 'Mathe mit Python', blurb: 'Funktionen und Daten im eigenen Programm.' },
        { code: 'MNR / PLUS / 02', slug: 'python-complete-masterclass-teens', title: 'Python für Jugendliche', blurb: 'Programmieren als zweites Standbein.' },
        { code: 'MNR / PLUS / 03', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Knobeln für Fortgeschrittene', blurb: 'Für Lernende, die gern tüfteln.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'So arbeiten wir',
    h2: 'Wie die Live-Nachhilfe für die Realschule abläuft',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Werktags', l: 'Am Nachmittag oder frühen Abend deutscher Zeit.' },
      { time: 'Wochenende', l: 'Am Vormittag, ideal für Probeprüfungen.' },
      { time: 'Prüfungsphase', l: 'Zusätzliche Einzelstunden vor dem Termin.' }
    ],
    cells: [
      { h3: 'Fester Mentor', p: 'Eine Person, die den Stand Ihres Kindes kennt.' },
      { h3: 'Schulmaterial', p: 'Arbeitsblätter, Schulbuch und alte Arbeiten.' },
      { h3: 'Textaufgaben', p: 'Lesen, übersetzen, rechnen, antworten.' },
      { h3: 'Unter Zeit', p: 'Probeprüfungen mit der Dauer Ihres Landes.' },
      { h3: 'Wortlisten', p: 'Deutsche und englische Fachbegriffe nebeneinander.' },
      { h3: 'Kurze Berichte', p: 'Sie wissen nach jeder Einheit Bescheid.' }
    ]
  },

  projectsH2: 'Projekte von Lernenden',
  projectsLede: 'Manche verbinden Mathe mit Programmieren und bauen eigene Rechner oder Spiele. Ein paar Beispiele unten, mehr auf <a class="ag-inline-link" href="/student-labs">Student labs</a> (auf Englisch).',
  reviewsLede: 'Google-Bewertungen von Familien, im englischen Original.',

  fees: {
    h2: 'Kosten der Mathe-Nachhilfe',
    lede: 'Ein Monat umfasst acht Live-Stunden. Sie sehen den Beitrag hier in Euro, berechnet mit dem Referenzkurs der Europäischen Zentralbank. Die Abbuchung erfolgt in US-Dollar; Ihre Bank wandelt den Betrag in Euro um, kleine Unterschiede auf dem Kontoauszug sind deshalb möglich.',
    free: ['Kostenlose Probestunde', 'Bestandsaufnahme mit einer alten Arbeit', 'Keine Karte, kein Vertrag'],
    group: ['Fünfzehn bis zwanzig Lernende aus Klasse 9 und 10', 'Ein Mentor für die ganze Zeit', 'Zwei Stunden pro Woche', 'Jeden Monat kündbar'],
    one: ['Ihr Kind und der Mentor', 'Plan nach dem Prüfungstermin Ihres Landes', 'Freie Terminwahl']
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    h2: 'Mathe-Nachhilfe Realschule: Ihre Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein. Unterrichtet wird live und ausschließlich auf Englisch, von Mentoren in Indien, die langsam sprechen und sich auf Ihr Kind einstellen. Für viele Familien ist das ein Plus: Mathe wird sicherer, und Englisch wird gleich mitgeübt. Die deutschen Fachbegriffe für die Prüfung schreiben wir dazu.' },
      { q: 'Wann ist die Mathe-Abschlussprüfung 2027 an bayerischen Realschulen?', a: 'Laut Bekanntmachung des Kultusministeriums am Montag, 28. Juni 2027, von 8:30 Uhr bis 11:50 Uhr. Die Prüfungsdauer beträgt 170 Minuten, davon 35 Minuten für die Aufgabengruppe A.' },
      { q: 'Wann ist die Matheprüfung 2027 für den Realschulabschluss in Niedersachsen?', a: 'Der Haupttermin ist laut Kultusministerium Donnerstag, der 20.05.2027, der erste Nachschreibtermin Dienstag, der 01.06.2027. Die schriftlichen Prüfungen beginnen jeweils zwischen 8.00 Uhr und 8.15 Uhr.' },
      { q: 'Was bedeutet Mathematik I und Mathematik II in Bayern?', a: 'Die Bekanntmachung zur Abschlussprüfung 2027 führt Mathematik in zwei Fassungen, Mathematik I und Mathematik II, am selben Tag. Welche Fassung Ihr Kind schreibt, erfahren Sie von der Schule; der Mentor übt dann genau diese.' },
      { q: 'Ab wann sollte die Vorbereitung auf die Abschlussprüfung beginnen?', a: 'Spätestens zu Beginn der Klasse 10, besser schon in Klasse 9. Unser Plan beginnt im November mit einer Bestandsaufnahme und führt über Lücken und Textaufgaben zu Probeprüfungen unter Zeit.' },
      { q: 'Hilft die Nachhilfe auch an Oberschule, Regelschule oder Realschule plus?', a: 'Ja. Laut KMK führen mehrere Länder den Realschulgang in Schulen mit anderen Namen, etwa die Oberschule in Sachsen oder die Realschule plus in Rheinland-Pfalz. Die Mathematik bis zum Mittleren Schulabschluss ist dieselbe; wir richten uns nach dem Material Ihrer Schule.' },
      { q: 'Vergeben Sie Noten oder Abschlüsse?', a: 'Nein. Wir begleiten den Schulunterricht und bereiten vor, die Abschlussnote vergeben allein die Schule und das Land. Unsere Probeprüfungen dienen der Übung.' },
      { q: 'Wann sind die Stunden?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. 16:20 Uhr bei Ihnen ist im Winter 20:50 Uhr beim Mentor.' },
      { q: 'Was kostet die Nachhilfe, und wie zahle ich?', a: 'Monatlich. Der Betrag erscheint auf dieser Seite in Euro nach dem Referenzkurs der Europäischen Zentralbank, abgebucht wird in US-Dollar, und Ihre Bank rechnet um. Die erste Stunde ist kostenlos und ohne Karte.' },
      { q: 'Kann mein Kind nach der Realschule das Abitur machen?', a: 'Der Mittlere Schulabschluss mit entsprechenden Leistungen berechtigt laut KMK zum Besuch der gymnasialen Oberstufe. Für den Übergang bieten wir einen Mathekurs zur Oberstufe und einen zum Abitur an, beide auf Englisch.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weiterlesen',
    h2: 'Weitere Seiten für Familien in Deutschland',
    lede: 'Teils auf Englisch.',
    items: [
      { href: '/german-school-system-maths-and-computing-explained', label: 'German school system explained', p: 'Alle Schularten und Abschlüsse, auf Englisch.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'Wenn nach dem Abschluss die Oberstufe kommt.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Unterstützung im Fach Informatik.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Learn to think, not copy AI', p: 'Selbst denken statt abschreiben.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Alle unsere Seiten für Deutschland.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'So läuft unser Live-Unterricht.' }
    ]
  },

  start: {
    h2: 'Kostenlose Probestunde für Mathe buchen',
    lede: 'Für die erste Stunde genügt eine alte Klassenarbeit oder eine Prüfungsaufgabe, mit der Ihr Kind Mühe hatte. Der Mentor rechnet sie gemeinsam durch und sieht dabei, wo es hängt. Danach schlagen wir einen Plan bis zum Prüfungstermin vor.',
    readFirst: 'Zum Nachlesen vorab: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> und <a class="ag-inline-link" href="/courses/comprehensive-middle-school-mathematics-mastery">der Kurs zur Mittelstufenmathematik</a> (beide auf Englisch).',
    note: 'Der Unterricht ist live online, nur auf Englisch, mit Mentoren in Indien. Am schnellsten erreichen Sie uns über WhatsApp.',
    formNote: 'Kostenlos und ohne Verpflichtung, keine Karte nötig.'
  },

  footer: {
    cols: [
      { h4: 'Mathematik', links: [
        { href: '/courses/comprehensive-middle-school-mathematics-mastery', label: 'Mittelstufenmathematik' },
        { href: '/courses/algebra-foundations-masterclass', label: 'Algebra' },
        { href: '/courses/statistics-probability-maths-course', label: 'Daten und Zufall' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/german-school-system-maths-and-computing-explained', label: 'Schulsystem (EN)' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Erst die Frage lesen, dann die Grenze runden'
  },

  personalityCss: `
.ag-root.ag-mnr .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-mnr .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-mnr .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-mnr .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-mnr .ag-table td { hyphens: auto; }
`,

  dossier: {
    curriculumAuthority: 'Bayerisches Staatsministerium für Unterricht und Kultus (BayMBl. 2026 Nr. 6; Realschule page); Niedersächsisches Kultusministerium (Abschlussprüfungen 2027 Sek I, Bek. 05.05.2025); KMK Bildungsstandards Mathematik ESA/MSA i.d.F. 23.06.2022, KMK school-type overview and Eurydice dossier; read 3 November 2026. Problem our own.',
    localProject: 'Two rain barrels as linear functions (11 + 1,5t against 3,5t): the strict inequality gives t > 5,5 and the answer minute 6, checked by a table; the variant with 10 litres gives t > 5 and still minute 6. Python with exact fractions and floor + 1. Lesson family: "from which whole number on" with a strict inequality is the next whole number after the crossing, even when the crossing is whole.',
    requiredMentions: ['Montag, 28. Juni 2027', '170 Minuten, davon 35 Minuten für Aufgabengruppe A', 'Donnerstag, 20.05.2027', 'Dienstag, 01.06.2027', 'Mathematik I und Mathematik II', 'Letzter Schultag und Zeugnis am Freitag, 23. Juli 2027', '<code>(Fraction(5, 1), 6)</code>', 'Erst die Frage lesen, dann die Grenze runden'],
    sources: [
      { claim: 'Bayern Realschule Abschlussprüfung 2027: Mathematik I und II on 28 June 2027, 170 minutes, 35 for Aufgabengruppe A; Deutsch, Englisch; last school day 23 July 2027.', url: 'https://www.verkuendung-bayern.de/files/baymbl/2026/6/baymbl-2026-6.pdf' },
      { claim: 'Niedersachsen Abschlussprüfungen 2027 Sek I: Mathematik 20.05.2027, Nachschreibtermin 01.06.2027, start 8.00 to 8.15, Vornoten 08.06.2027.', url: 'https://www.mk.niedersachsen.de/download/142641/Abschlusspruefungen_2027.pdf' },
      { claim: 'Bavarian Realschule: grades 5 to 10, three Ausbildungsrichtungen, Wahlpflichtfächergruppen from grade 7, exam subjects.', url: 'https://www.km.bayern.de/lernen/schularten/realschule' },
      { claim: 'MSA standards for grade 10, Leitideen, binding reference points for exams.', url: 'https://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/2022/2022_06_23-Bista-ESA-MSA-Mathe.pdf' },
      { claim: 'Two-track school names by Land.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Bildung/AllgBildung/Schema-Bildungsgaenge_und_Schularten-Stand_2021-02.pdf' }
    ],
    rejectedClaims: [
      'German-language teaching: we teach in English only, and the page says so.',
      'Which Wahlpflichtfächergruppe writes Mathematik I or II: not in the fetched ministry text, so the page sends families to the school.',
      'Baden-Württemberg Realschulabschluss 2027 dates: only found on a commercial site, not on a ministry page, so not stated.',
      'Grade or pass promises: none.',
      'NRW ZP10 and Berlin MSA dates: on another Germany page, not repeated.'
    ]
  }
};
