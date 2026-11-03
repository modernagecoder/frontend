'use strict';
// Mathe-Nachhilfe online für das Gymnasium (ag- German-language door, Germany cluster P3, rows.tsv DE072, alloc code mng).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; capsule says
// "auf Englisch". Formal "Sie". priceSubject 'maths'. Pages show euro; checkout charges USD.
// Angle: maths at the Gymnasium from Klasse 5 to 10 (Unterstufe and Mittelstufe), for parents of Gymnasium pupils. The
// quotable table is Bavaria's central Jahrgangsstufentest Mathematik (ISB): which grades, 2026/27 and 2027/28 dates,
// 40 minutes, no calculator; then what the national KMK standards for the Mittlerer Schulabschluss expect (Regelstandards,
// the three Anforderungsbereiche), what G8 and G9 mean for maths, and an original practice set on chained percentages
// without a calculator. VERA, ZP10 and MSA dates (online-math-tutor-germany) and the Notenpunkte table
// (abitur-maths-in-english) are not repeated.
// Sources (fetched raw with curl -sL -A "Mozilla/5.0" on 3 Nov 2026; copies in
// ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/mathe-nachhilfe-online-gymnasium/):
//  - ISB Bayern, Jahrgangsstufentests am Gymnasium, https://www.isb.bayern.de/schularten/gymnasium/leistungserhebungen/jahrgangsstufentests/
//    (isb-jst.html): "Zu Schuljahresbeginn werden in den Jahrgangsstufen 8 und 10 zentral erstellte Jahrgangsstufentests in
//    Mathematik abgehalten."
//  - ISB Bayern, Jahrgangsstufentest in Mathematik, .../jahrgangsstufentests/mathematik/ (isb-jst-m.html): "Termine im
//    Schuljahr 2026/2027 29.09.2026 : Jahrgangsstufe 8 01.10.2026 : Jahrgangsstufe 10"; "Termine im Schuljahr 2027/2028
//    28.09.2027 : Jahrgangsstufe 8 30.09.2027 : Jahrgangsstufe 10".
//  - ISB Bayern, "Jahrgangsstufentests am Gymnasium, Informationen für Eltern", Stand: Oktober 2025 (isb-eltern.pdf):
//    "wurden die Jahrgangsstufentests 1998 eingeführt"; Jgst. 8 compulsory in Deutsch and Mathematik "sofern nicht im selben
//    Schuljahr im jeweiligen Fach der VERA-Test verbindlich durchgeführt wird"; "Die Lehrerkonferenz entscheidet vorab über
//    die Gewichtung"; "als kleiner Leistungsnachweis gewertet wird ... oder zusammen mit einem schulinternen fachlichen
//    Leistungstest eine Schulaufgabe ersetzt"; "Die reine Arbeitszeit beträgt 40 Minuten"; "Ein Taschenrechner und das ...
//    zugelassene Dokument mit mathematischen Formeln dürfen ... nicht verwendet werden"; "halbe Bewertungseinheiten werden
//    grundsätzlich nicht vergeben"; tasks "repräsentieren sie nicht alle Inhalte".
//  - KMK Bildungsstandards Mathematik ESA/MSA i.d.F. vom 23.06.2022 (facts-school/src/kmk-bista-msa-ma): "Regelstandards, die
//    angeben, welches Kompetenzniveau Schülerinnen und Schüler im Durchschnitt in einem Fach erreichen sollen";
//    "(I) Reproduzieren, (II) Zusammenhänge herstellen sowie (III) Verallgemeinern und Reflektieren"; "nutzen die
//    Prozentrechnung bei Wachstumsprozessen (beispielsweise bei der Zinsrechnung)"; KMK decision "am 18. Juni 2020".
//  - FACTS.md 19 (Gymnasium is the only school type in every Land), 24 (Gymnasium pupils usually get the Oberstufe
//    entitlement instead of a central Sek I exam), 26 (Abitur after grade 12 or 13), 63 (Bavaria G9 covers grades 5 to 13
//    in 2025/26), 64/NRW ZP10 page (nrw-zp10b): "Schülerinnen und Schüler im achtjährigen Bildungsgang an Gymnasien nehmen
//    nicht an den zentralen Prüfungen am Ende der Klasse 10 teil."
//  - Time: EinhZeitG; 25 October 2026 / 28 March 2027.
// Our own: chained percentages with Python fractions, run with python3 -I: 80 with +20 % then -20 % -> 384/5 (76,8), the
// other order 384/5, +25 % then -20 % -> 80, three times +10 % -> 1331/1000 (1.331).
// Lesson family: percent changes chain by multiplying growth factors, never by adding the percentages.

const { DE: DE_DE } = require('../../scripts/nl/lib/market-de');

const PY = [
  'from fractions import Fraction',
  '',
  'def nach_aenderungen(preis, prozente):',
  '    for p in prozente:',
  '        preis = preis * (1 + Fraction(p, 100))',
  '    return preis',
  '',
  'print(nach_aenderungen(80, [20, -20]))',
  'print(nach_aenderungen(80, [-20, 20]))',
  'print(nach_aenderungen(80, [25, -20]))',
  'faktor = nach_aenderungen(1, [10, 10, 10])',
  'print(faktor, float(faktor))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'Mathe-Nachhilfe Gymnasium' },
  slug: 'mathe-nachhilfe-online-gymnasium',
  code: 'mng',
  accent: '#933A4A',
  accentRationale: 'Mathe-Nachhilfe Gymnasium: a muted claret #933A4A, allocated for this page, the red of a correction pen, clearly apart from the green and teal Informatik doors; contrast 5.79 or better on the paper #FBF8F2 and on all three paper tints',
  pageType: 'market',
  priceSubject: 'maths',
  market: DE_DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Mathe-Nachhilfe online Gymnasium (auf Englisch)',
  title: 'Mathe-Nachhilfe online Gymnasium: Klasse 5 bis 10, auf Englisch',
  description: 'Mathe-Nachhilfe online fürs Gymnasium, Klasse 5 bis 10, live auf Englisch: Jahrgangsstufentests, KMK-Standards, G8 und G9 und Prozentrechnen ohne Rechner.',
  ogDescription: 'Mathe-Nachhilfe für Gymnasiastinnen und Gymnasiasten der Klassen 5 bis 10, live auf Englisch: was zentrale Tests wie der bayerische Jahrgangsstufentest prüfen, was die KMK-Standards verlangen und eigene Übungen zum Prozentrechnen.',
  twitterDescription: 'Mathe am Gymnasium, Klasse 5 bis 10: Jahrgangsstufentest, Anforderungsbereiche, Prozente ohne Rechner. Live auf Englisch.',
  pageName: 'Mathe-Nachhilfe online Gymnasium',
  webPageDescription: 'Ein Ratgeber für Eltern von Gymnasiastinnen und Gymnasiasten der Klassen 5 bis 10 zur Mathe-Nachhilfe online: die Jahrgangsstufentests in Mathematik am bayerischen Gymnasium mit ihren Terminen 2026/27 und 2027/28, die Bildungsstandards der Kultusministerkonferenz für den Mittleren Schulabschluss, G8 und G9, und eine eigene Übungsreihe zu verketteten Prozenten ohne Taschenrechner.',
  courseDescription: 'Live-Online-Mathenachhilfe für das Gymnasium, Klasse 5 bis 10, ausschließlich auf Englisch: Bruchrechnung, Terme und Gleichungen, Prozente, Funktionen, Geometrie und Wahrscheinlichkeit, abgestimmt auf den Schulstoff, in der Gruppe oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Mathe-Nachhilfe Gymnasium',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#tests', label: 'Tests' },
    { href: '#standards', label: 'Standards' },
    { href: '#uebungen', label: 'Übungen' },
    { href: '#ablauf', label: 'Ablauf' }
  ],
  eyebrow: 'Deutschland &middot; Mathematik &middot; Gymnasium Klasse 5 bis 10',
  h1: 'Mathe-Nachhilfe online fürs Gymnasium, live auf Englisch',
  lede: 'Am Gymnasium zieht das Tempo in Mathematik ab Klasse 7 spürbar an: Terme, Gleichungen, Prozente und Funktionen bauen aufeinander auf, und eine Lücke aus Klasse 6 rächt sich in Klasse 9. Diese Seite zeigt, was zentrale Tests wie der bayerische Jahrgangsstufentest prüfen, was die Kultusministerkonferenz bis zum Ende der Klasse 10 erwartet, was G8 und G9 für Mathe bedeuten, und wie unsere Live-Nachhilfe auf Englisch dabei hilft.',
  secondaryCta: { href: '#tests', label: 'Zentrale Tests ansehen' },
  wa: 'Hallo Modern Age Coders, unser Kind besucht ein Gymnasium und braucht Unterstützung in Mathe. Wir interessieren uns für Nachhilfe auf Englisch. Gibt es eine kostenlose Probestunde?',
  heroNote: 'Mathe live per Video &middot; Unterricht seit 2020 &middot; mehr als 10.000 Lernende weltweit &middot; auf Englisch, im Tempo Ihres Kindes',
  spec: [
    ['Schulart', 'Gymnasium, G8 und G9'],
    ['Klassen', '5 bis 10'],
    ['Themen', 'Brüche, Terme, Prozente, Funktionen'],
    ['Gruppe', 'Fünfzehn bis zwanzig, oder einzeln'],
    ['Sprache', 'Englisch, Mentoren in Indien'],
    ['Probestunde', 'Gratis, ohne Karte']
  ],
  capsuleQ: 'Das Wichtigste vorab',
  capsule: 'Mathe-Nachhilfe online fürs Gymnasium bei Modern Age Coders bedeutet: Live-Unterricht auf Englisch für Kinder der Klassen 5 bis 10, mit einem festen Mentor, der Bruchrechnung, Terme, Gleichungen, Prozente, Funktionen und Geometrie im Takt des Schulstoffs erklärt und mit eigenen Aufgaben übt. Grundlage ist unser Kurs zur Mathematik der Mittelstufe, wahlweise in einer Gruppe von fünfzehn bis zwanzig oder im Einzelunterricht.',

  picks: {
    eyebrow: 'Passende Mathekurse',
    h2: 'Drei Kurse für Mathe am Gymnasium',
    lede: 'Einer deckt den Stoff der Mittelstufe ab, einer festigt die Algebra, auf der ab Klasse 7 alles aufbaut, einer bietet Knobelaufgaben für Kinder, die mehr wollen.',
    items: [
      { course: 'comprehensive-middle-school-mathematics-mastery', code: 'MNG / 01', title: 'Mathematik der Mittelstufe', alt: 'Kursbild Mathematik der Mittelstufe', note: 'Brüche, Prozente, Terme, Gleichungen, Geometrie und Daten, der Stoff, den Gymnasien bis Klasse 8 oder 9 behandeln.' },
      { course: 'algebra-foundations-masterclass', code: 'MNG / 02', title: 'Algebra Schritt für Schritt', alt: 'Kursbild Algebra Schritt für Schritt', note: 'Variablen, Termumformungen, lineare Gleichungen und Gleichungssysteme, Schritt für Schritt und ohne Lücken.' },
      { course: 'mathematik-olympiade-and-kaenguru-training-course', code: 'MNG / 03', title: 'Olympiade und Känguru am Gymnasium', alt: 'Kursbild Mathematik-Olympiade und Känguru-Training', note: 'Eigene Knobelaufgaben nach Klassenstufe, für Kinder, denen der Unterricht zu langsam ist.' }
    ]
  },

  sections: [
    {
      id: 'tests',
      eyebrow: 'Zentrale Tests',
      h2: 'Welche zentralen Mathetests gibt es am Gymnasium?',
      lede: 'Neben Schulaufgaben und Klassenarbeiten schreiben Gymnasien in mehreren Ländern zentral gestellte Tests. Ein gut dokumentiertes Beispiel ist Bayern: Dort prüft das Staatsinstitut für Schulqualität und Bildungsforschung (ISB) Mathematik zu Beginn der Klassen 8 und 10.',
      body: [
        { kind: 'table', numCols: [], caption: 'Der Jahrgangsstufentest Mathematik am bayerischen Gymnasium', head: ['Punkt', 'Angabe des ISB'], rows: [
          ['Jahrgangsstufen', '8 und 10, jeweils zu Schuljahresbeginn'],
          ['Termine 2026/27', '29.09.2026 (Jahrgangsstufe 8), 01.10.2026 (Jahrgangsstufe 10)'],
          ['Termine 2027/28', '28.09.2027 (Jahrgangsstufe 8), 30.09.2027 (Jahrgangsstufe 10)'],
          ['Reine Arbeitszeit', '40 Minuten'],
          ['Erlaubt', 'Übliche Zeichenmaterialien, etwa Geodreieck und Zirkel'],
          ['Nicht erlaubt', 'Taschenrechner und die ab Klasse 10 zugelassene Formelsammlung'],
          ['Bewertung', 'Strikte Korrekturvorschriften, keine halben Bewertungseinheiten'],
          ['Gewicht', 'Entscheidet die Lehrerkonferenz vorab: kleiner Leistungsnachweis, oder mit einem schulinternen Test Ersatz einer Schulaufgabe']
        ] },
        { kind: 'source', html: 'Quellen: ISB Bayern, Seiten "Jahrgangsstufentests am Gymnasium" und "Jahrgangsstufentest in Mathematik" sowie "Jahrgangsstufentests am Gymnasium, Informationen für Eltern", Stand Oktober 2025, gelesen am 3. November 2026. In Klasse 8 ist der Test laut ISB nur verpflichtend, sofern im selben Schuljahr im Fach nicht der VERA-Test verbindlich geschrieben wird.' },
        { kind: 'two', mt: true,
          leftH3: 'Was der Test über Ihr Kind verrät',
          left: [
            'Das ISB beschreibt das Ziel so: Der Test soll zeigen, ob grundlegende Kenntnisse, die über die Schuljahre hinweg erworben wurden, dauerhaft verfügbar sind, auch bei neuartigen, ungewohnten Aufgaben. Es geht also um das, was hängen geblieben ist, nicht um das letzte Kapitel.',
            'Weil der Taschenrechner verboten ist, zählen Kopfrechnen, Bruchrechnung und sichere Termumformungen besonders. Genau diese Grundlagen bröckeln in Klasse 7 und 8 am häufigsten.'
          ],
          rightH3: 'Seit wann es ihn gibt',
          right: [
            'Laut ISB wurden die Jahrgangsstufentests an bayerischen Gymnasien 1998 eingeführt. Aufgaben und Lösungen der Vorjahre in Mathematik stellt das ISB auf seiner Seite frei zur Verfügung.',
            'Wir verwenden diese Originalaufgaben nicht im Unterricht nach, sondern schreiben eigene Aufgaben derselben Art. Die Originale kann Ihr Kind zur Selbstkontrolle beim ISB herunterladen.'
          ] },
        { kind: 'p', mt: true, html: 'Andere Länder gehen anders vor. In Nordrhein-Westfalen etwa nehmen Schülerinnen und Schüler im achtjährigen Bildungsgang an Gymnasien laut Ministerium nicht an den zentralen Prüfungen am Ende der Klasse 10 teil. Allen Gymnasien gemeinsam ist, dass sie die Kinder bis zum Ende der Klasse 10 auf die Oberstufe vorbereiten; laut KMK erhalten Gymnasiastinnen und Gymnasiasten dann in der Regel die Berechtigung zum Besuch der gymnasialen Oberstufe statt einer zentralen Abschlussprüfung.' }
      ]
    },
    {
      id: 'standards',
      eyebrow: 'Was bis Klasse 10 erwartet wird',
      h2: 'Was muss ein Kind am Gymnasium in Mathe bis zum Ende der Klasse 10 können?',
      lede: 'Den Rahmen setzen die Bildungsstandards der Kultusministerkonferenz für den Ersten und den Mittleren Schulabschluss, Fassung vom 23.06.2022. Die Lehrpläne der Länder und damit auch der Gymnasien bauen darauf auf.',
      body: [
        { kind: 'p', html: 'Die KMK nennt ihre Standards ausdrücklich Regelstandards, die angeben, welches Kompetenzniveau Schülerinnen und Schüler im Durchschnitt in einem Fach erreichen sollen. Beschlossen hat sie die Weiterentwicklung am 18. Juni 2020. Für Eltern am Gymnasium ist ein anderer Teil wichtiger: die drei Anforderungsbereiche, nach denen Aufgaben schwerer werden.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Die drei Anforderungsbereiche der KMK-Standards, mit einem Beispiel aus dem Prozentrechnen (Beispiele unsere)', head: ['Anforderungsbereich', 'Laut KMK', 'Eine Aufgabe dazu (unsere)'], rows: [
          ['I, Reproduzieren', 'Wiedergabe und direkte Anwendung von grundlegenden Begriffen, Sätzen und Verfahren', 'Wie viel sind 15 % von 240?'],
          ['II, Zusammenhänge herstellen', 'Bekannte Sachverhalte selbstständig auswählen, anordnen, darstellen und bearbeiten, Wissen verknüpfen', 'Ein Preis steigt um 20 % und fällt dann um 20 %. Wie hoch ist er am Ende?'],
          ['III, Verallgemeinern und Reflektieren', 'Komplexe oder unbekannte Sachverhalte bearbeiten, eigene Lösungen, Begründungen und Wertungen finden', 'Begründen Sie, warum zwei gleich große Änderungen nach oben und unten nie zum Startwert zurückführen.']
        ] },
        { kind: 'source', html: 'Nachzulesen in den KMK-Standards Mathematik für ESA und MSA in der Fassung vom 23.06.2022, Kapitel 2 "Anforderungsbereiche", gelesen am 3. November 2026. Die Aufgaben in der rechten Spalte sind unsere eigenen.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'G8 oder G9', p: 'Das Abitur folgt laut KMK nach Klasse 12 (G8) oder 13 (G9). In Bayern umfasst das neue neunjährige Gymnasium im Schuljahr 2025/26 die Jahrgangsstufen 5 bis 13. Im G9 verteilt sich der Mittelstufenstoff auf mehr Jahre, im G8 kommt er schneller.' },
          { h3: 'Überall gleich', p: 'Das Gymnasium ist laut KMK die einzige Schulart, die es in jedem Land gibt. Namen und Stundentafeln unterscheiden sich, die Grundbausteine der Mathematik bis Klasse 10 sind überall dieselben.' },
          { h3: 'Prozente als Prüfstein', p: 'Die KMK-Standards verlangen ausdrücklich, dass Lernende die Prozentrechnung bei Wachstumsprozessen nutzen, beispielsweise bei der Zinsrechnung. Deshalb steht dieses Thema in unserer Übungsreihe unten.' }
        ] }
      ]
    },
    {
      id: 'luecken',
      eyebrow: 'Typische Lücken',
      h2: 'Wo verlieren Gymnasiastinnen und Gymnasiasten in Mathe am häufigsten den Anschluss?',
      lede: 'Aus unserem Unterricht: Fast nie ist es das aktuelle Thema allein. Meist liegt die Ursache ein, zwei Schuljahre zurück.',
      body: [
        { kind: 'table', numCols: [], caption: 'Aktuelles Problem und häufige Ursache (unsere Erfahrung, keine amtliche Angabe)', head: ['Ihr Kind kämpft mit', 'Meist liegt es an', 'So gehen wir vor'], rows: [
          ['Gleichungen in Klasse 7 und 8', 'Unsicherer Bruchrechnung aus Klasse 6', 'Zwei Wochen Brüche, dann wieder Gleichungen'],
          ['Prozent und Zins', 'Dem Wechsel zwischen Bruch, Dezimalzahl und Prozent', 'Alles als Faktor schreiben: 20 % mehr heißt mal 1,2'],
          ['Binomische Formeln', 'Dem Ausmultiplizieren von Klammern', 'Flächenmodell zeichnen, dann rechnen'],
          ['Lineare Funktionen', 'Dem Lesen von Koordinaten und Steigungen', 'Tabellen, Graphen und Terme nebeneinander'],
          ['Quadratische Funktionen in Klasse 9', 'Dem Umformen von Termen', 'Scheitelpunktform aus der allgemeinen Form herleiten'],
          ['Trigonometrie in Klasse 10', 'Ähnlichen Dreiecken und Verhältnissen', 'Erst Seitenverhältnisse verstehen, dann Sinus und Kosinus']
        ] },
        { kind: 'p', mt: true, html: 'In der ersten Stunde sucht der Mentor deshalb nicht nur die aktuelle Schwierigkeit, sondern die älteste Lücke dahinter. Wir unterrichten begleitend zur Schule und vergeben keine Noten; was im Zeugnis steht, entscheiden allein die Lehrkräfte Ihres Kindes.' }
      ]
    },
    {
      id: 'uebungen',
      tint: 'tint',
      eyebrow: 'Eine Übungsreihe',
      h2: 'Warum ergibt 20 % mehr und dann 20 % weniger nicht den alten Preis?',
      lede: 'Eine typische Aufgabe für Klasse 7 und 8, ganz ohne Taschenrechner, wie im Jahrgangsstufentest. Alle Aufgaben hier haben wir selbst geschrieben.',
      body: [
        { kind: 'ol', items: [
          '<strong>Aufgabe 1.</strong> Ein Fahrradhelm kostet 80. Der Preis steigt um 20 % und sinkt danach um 20 %. Wie viel kostet er am Ende?',
          '<strong>Aufgabe 2.</strong> Ändert sich das Ergebnis, wenn der Preis erst um 20 % sinkt und dann um 20 % steigt?',
          '<strong>Aufgabe 3.</strong> Um wie viel Prozent muss ein Preis nach einer Erhöhung um 25 % sinken, damit wieder der alte Preis herauskommt?',
          '<strong>Aufgabe 4.</strong> Ein Guthaben wächst drei Jahre lang um je 10 %. Ist es am Ende um 30 % gewachsen?'
        ] },
        { kind: 'p', mt: true, html: '<strong>Der Schlüssel: Prozente als Faktoren.</strong> 20 % mehr heißt mal 1,2, 20 % weniger heißt mal 0,8. Aufgabe 1: 80 · 1,2 · 0,8 = 80 · 0,96 = 76,8. Aufgabe 2: 80 · 0,8 · 1,2 ergibt dasselbe, denn beim Multiplizieren ist die Reihenfolge egal. Aufgabe 3: 1,25 · 0,8 = 1, also muss der Preis um 20 % sinken, nicht um 25 %. Aufgabe 4: 1,1 · 1,1 · 1,1 = 1,331, das Guthaben wächst also um 33,1 %, nicht um 30 %.' },
        { kind: 'code', label: 'Dieselben Rechnungen exakt mit Brüchen', lang: 'Python', code: PY, note: 'Ausgabe bei unserem Lauf mit Python 3: <code>384/5</code>, <code>384/5</code>, <code>80</code> und <code>1331/1000 1.331</code>. 384/5 ist 76,8. Wir rechnen mit <code>Fraction</code>, damit keine Rundungsfehler die Antwort verfälschen.' },
        { kind: 'p', mt: true, html: '<strong>Die Begründung für Anforderungsbereich III:</strong> Steigt ein Wert um p % und sinkt dann um p %, wird er mit (1 + p/100) · (1 − p/100) = 1 − (p/100)² multipliziert. Dieser Faktor ist für jedes p ungleich 0 kleiner als 1. Der Endwert liegt also immer unter dem Startwert, egal in welcher Reihenfolge. Das ist die dritte binomische Formel im Alltag.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Nie Prozente addieren.</strong> Aufeinanderfolgende Änderungen werden als Faktoren multipliziert.',
          '<strong>Erst schätzen.</strong> Vor dem Rechnen fragen: Liegt das Ergebnis über oder unter dem Start?',
          '<strong>Die Formel erkennen.</strong> (1 + a)(1 − a) taucht in Klasse 8 als binomische Formel wieder auf. Wer sie hier schon sieht, hat später einen Vorsprung.'
        ] }
      ]
    },
    {
      id: 'ablauf',
      eyebrow: 'Ablauf und Zeiten',
      h2: 'Wie läuft Mathe-Nachhilfe online auf Englisch ab, und wann?',
      lede: 'Live per Video, mit geteiltem Whiteboard, auf dem Ihr Kind selbst rechnet. Der Mentor sieht jeden Schritt und greift ein, wo es hakt.',
      body: [
        { kind: 'two',
          leftH3: 'Mathe auf Englisch: geht das?',
          left: [
            'Ja. Rechnungen, Terme und Graphen sehen in jeder Sprache gleich aus, und die Fachwörter sind schnell gelernt: fraction für Bruch, equation für Gleichung, percentage für Prozentsatz. Wir sagen es dennoch klar: Der Unterricht ist ausschließlich auf Englisch.',
            'Die Mentoren in Indien sprechen ruhig, sagen Schwieriges ein zweites Mal mit einfacheren Worten und gewöhnen sich rasch an die Aussprache Ihres Kindes. Viele Familien sehen darin einen zweiten Gewinn: Englisch üben, während Mathe besser wird.'
          ],
          rightH3: 'Mit dem Schulmaterial',
          right: [
            'Ihr Kind bringt Arbeitsblätter, das Schulbuch und alte Schulaufgaben mit. Der Mentor erklärt dieselben Aufgaben auf Englisch und legt zu jedem Thema eine kleine Liste mit deutschen und englischen Begriffen an, damit in der Klassenarbeit auf Deutsch nichts fehlt.',
            'Vor Schulaufgaben und vor zentralen Tests lassen sich zusätzliche Einzelstunden vereinbaren.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Beispielzeiten, deutsche Zeit und Zeit des Mentors in Indien (unsere Umrechnung)', head: ['Uhrzeit in Deutschland', 'Beim Mentor bis Ende März 2027', 'Beim Mentor ab Ende März 2027'], rows: [
          ['Montag 17:15', '21:45', '20:45'],
          ['Mittwoch 15:45', '20:15', '19:15'],
          ['Samstag 09:40', '14:10', '13:10']
        ] },
        { kind: 'source', html: 'Das Einheiten- und Zeitgesetz legt die deutsche Uhrzeit fest: UTC+1 im Winterhalbjahr, UTC+2 während der Sommerzeit, die am 25. Oktober 2026 endete und am 28. März 2027 neu beginnt. Indien stellt nie um und bleibt bei UTC+5:30. Beispiele, keine festen Kurstermine.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Woran Sie merken, dass es in Mathe vorangeht',
    lede: 'Unsere fünf Stufen für die Mittelstufe am Gymnasium, nach denen wir einordnen und berichten.',
    table: { caption: 'Fünf Stufen in Mathematik, Klasse 5 bis 10 (unsere)', head: ['Stufe', 'Meist in Klasse', 'Ihr Kind kann'], rows: [
      ['1. Sicher rechnen', '5 bis 6', 'mit Brüchen und Dezimalzahlen ohne Rechner rechnen'],
      ['2. Mit Variablen arbeiten', '7', 'Terme aufstellen, vereinfachen und Gleichungen lösen'],
      ['3. Zusammenhänge sehen', '7 bis 8', 'Prozente, Zuordnungen und lineare Funktionen verbinden'],
      ['4. Modellieren', '9', 'eine Sachaufgabe in eine Gleichung oder Funktion übersetzen'],
      ['5. Begründen', '10', 'einen Rechenweg erklären und prüfen, ob ein Ergebnis plausibel ist']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Stufe 1 entscheidet viel. Kinder, die Brüche nur mit Mühe beherrschen, kommen in Klasse 7 bei den Gleichungen kaum mit, selbst wenn sie dort alles verstehen.',
      'Nach jeder Stunde lesen Sie in zwei, drei Sätzen, was geübt wurde.'
    ] },
    right: { h3: 'Für Schülerinnen und Schüler', ps: [
      'Schätzen Sie jedes Ergebnis, bevor Sie rechnen. Wer weiß, dass rund 77 herauskommen muss, merkt einen Fehler sofort.',
      'Schreiben Sie jede Umformung in eine eigene Zeile. Das kostet keine Zeit, es spart welche.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Mathekurse',
    lede: 'Jeder Kurs live, auf Englisch, mit festem Mentor, als Gruppe oder einzeln.',
    bands: [
      { num: 'I', h3: 'Schulstoff vertiefen', sub: '11 bis 16 Jahre', courses: [
        { code: 'MNG / SCHULE / 01', slug: 'complete-high-school-mathematics-mastery', title: 'Mathematik bis zur Oberstufe', blurb: 'Funktionen, Trigonometrie und mehr ab Klasse 9.' },
        { code: 'MNG / SCHULE / 02', slug: 'statistics-probability-maths-course', title: 'Wahrscheinlichkeit und Statistik', blurb: 'Diagramme, Mittelwerte, Zufallsversuche.' },
        { code: 'MNG / SCHULE / 03', slug: 'mental-maths-mastery-kids', title: 'Kopfrechnen', blurb: 'Sicher rechnen ohne Taschenrechner.' }
      ] },
      { num: 'II', h3: 'Mathe anders sehen', sub: '10 bis 18 Jahre', courses: [
        { code: 'MNG / ANDERS / 01', slug: 'maths-through-coding', title: 'Mathematik mit Python', blurb: 'Rechnen, Muster und Funktionen im Code.' },
        { code: 'MNG / ANDERS / 02', slug: 'igcse-mathematics-mastery', title: 'IGCSE Mathematics', blurb: 'Für internationale Schulen und Wechsler.' },
        { code: 'MNG / ANDERS / 03', slug: 'abitur-mathematics-course-in-english', title: 'Abitur Mathematik auf Englisch', blurb: 'Der nächste Schritt nach Klasse 10.' }
      ] },
      { num: 'III', h3: 'Knobeln und Wettbewerbe', sub: '9 bis 16 Jahre', courses: [
        { code: 'MNG / KNOBEL / 01', slug: 'middle-school-math-competitions-course', title: 'Mathewettbewerbe Mittelstufe', blurb: 'Problemlösen über den Lehrplan hinaus.' },
        { code: 'MNG / KNOBEL / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Olympiade-Mathematik', blurb: 'Für Fortgeschrittene, mit Beweisen.' },
        { code: 'MNG / KNOBEL / 03', slug: 'vedic-maths-course-speed-calculation-mastery', title: 'Schnellrechnen', blurb: 'Rechentricks, die man auch versteht.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'So funktioniert es',
    h2: 'Live-Nachhilfe in Mathe, Woche für Woche',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Nachmittag', l: 'Nach Schule und Hausaufgaben, deutscher Zeit.' },
      { time: 'Wochenende', l: 'Samstag oder Sonntag am Vormittag.' },
      { time: 'Vor Schulaufgaben', l: 'Zusätzliche Einzelstunden nach Absprache.' }
    ],
    cells: [
      { h3: 'Ein Mentor', p: 'Dieselbe Person jede Woche, die den Stand Ihres Kindes kennt.' },
      { h3: 'Whiteboard', p: 'Ihr Kind rechnet selbst, der Mentor sieht jeden Schritt.' },
      { h3: 'Ältere Lücken', p: 'Wir suchen die Ursache, nicht nur das aktuelle Problem.' },
      { h3: 'Ohne Rechner', p: 'Kopfrechnen und Brüche wie in zentralen Tests.' },
      { h3: 'Eigene Aufgaben', p: 'Übungsreihen, die wir selbst schreiben.' },
      { h3: 'Rückmeldung', p: 'Kurze Notiz an die Eltern nach jeder Stunde.' }
    ]
  },

  projectsH2: 'Was unsere Lernenden bauen',
  projectsLede: 'Wer Mathe und Programmieren verbindet, baut eigene Rechner, Spiele und Datenprojekte. Einige sehen Sie unten, weitere auf <a class="ag-inline-link" href="/student-labs">Student labs</a> (englischsprachig).',
  reviewsLede: 'Was Familien auf Google schreiben, unverändert auf Englisch.',

  fees: {
    h2: 'Preise für Mathe-Nachhilfe',
    lede: 'Der Monatsbeitrag deckt acht Live-Stunden. Angezeigt wird er in Euro auf Basis des Referenzkurses der Europäischen Zentralbank; abgebucht wird jedoch in US-Dollar, die Ihre Bank in Euro umrechnet. Der Betrag auf dem Kontoauszug kann daher leicht abweichen.',
    free: ['Kostenlose Probestunde', 'Suche nach der ältesten Lücke', 'Keine Karte, keine Bindung'],
    group: ['Fünfzehn bis zwanzig Lernende ähnlicher Klassen', 'Fester Mentor', 'Zwei Stunden pro Woche', 'Monatlich kündbar'],
    one: ['Ihr Kind allein mit dem Mentor', 'Arbeit am eigenen Schulstoff', 'Zeiten nach Wunsch']
  },

  faq: {
    eyebrow: 'Fragen und Antworten',
    h2: 'Mathe-Nachhilfe online fürs Gymnasium: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein, nur auf Englisch, und immer live. Die Mentoren in Indien sprechen langsam und deutlich und passen sich an Ihr Kind an. Weil Mathe vor allem aus Zahlen, Termen und Zeichnungen besteht, kommen die meisten Kinder schnell zurecht, und sie üben Englisch ganz nebenbei. Die deutschen Fachbegriffe für die Schule notieren wir mit.' },
      { q: 'Wann ist der Jahrgangsstufentest Mathematik in Bayern 2026?', a: 'Laut ISB im Schuljahr 2026/27 am 29.09.2026 für die Jahrgangsstufe 8 und am 01.10.2026 für die Jahrgangsstufe 10. Im Schuljahr 2027/28 sind es der 28.09.2027 und der 30.09.2027.' },
      { q: 'Darf man im Jahrgangsstufentest Mathe einen Taschenrechner benutzen?', a: 'Nein. Laut ISB sind Taschenrechner und die ab Klasse 10 zugelassene Formelsammlung nicht erlaubt, nur übliche Zeichenmaterialien wie Geodreieck und Zirkel. Die reine Arbeitszeit beträgt 40 Minuten.' },
      { q: 'Zählt der Jahrgangsstufentest als Note?', a: 'Das entscheidet die Schule. Laut ISB legt die Lehrerkonferenz vorab fest, ob das Ergebnis als kleiner Leistungsnachweis zählt oder zusammen mit einem schulinternen Test eine Schulaufgabe ersetzt.' },
      { q: 'Ab welcher Klasse lohnt sich Mathe-Nachhilfe am Gymnasium?', a: 'Am meisten bringt sie früh, oft schon in Klasse 6 oder 7, wenn Bruchrechnung und erste Gleichungen kommen. Wer dort sicher ist, hat in Klasse 9 und 10 deutlich weniger Mühe. Nachhilfe erst kurz vor dem Zeugnis kommt meist zu spät.' },
      { q: 'Was ist der Unterschied zwischen G8 und G9 in Mathe?', a: 'Laut KMK führt G8 nach Klasse 12 und G9 nach Klasse 13 zum Abitur. Im G9 verteilt sich derselbe Stoff auf ein Jahr mehr. Der Mentor richtet sich nach dem Plan Ihrer Schule, nicht nach einer allgemeinen Liste.' },
      { q: 'Bereiten Sie auf Schulaufgaben und Klassenarbeiten vor?', a: 'Ja, mit dem Material Ihrer Schule und eigenen Übungsaufgaben. Wir unterrichten begleitend und vergeben keine Noten. Was zählt, sind die Arbeiten und Tests Ihrer Schule.' },
      { q: 'Wann finden die Stunden statt?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. Im Winter ist es beim Mentor viereinhalb Stunden später als bei Ihnen.' },
      { q: 'Was kostet die Nachhilfe?', a: 'Den Monatsbeitrag zeigen wir auf dieser Seite in Euro nach dem Referenzkurs der Europäischen Zentralbank. Bezahlt wird in US-Dollar, Ihre Bank rechnet um. Die Probestunde ist kostenlos und ohne Karte.' },
      { q: 'Gibt es auch etwas für Kinder, die in Mathe sehr gut sind?', a: 'Ja. Unser Kurs zur Mathematik-Olympiade und zum Känguru-Wettbewerb arbeitet mit eigenen Knobelaufgaben nach Klassenstufe, für Kinder, die mehr wollen als den Schulstoff.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weiterlesen',
    h2: 'Weitere Seiten für Familien in Deutschland',
    lede: 'Zum Teil auf Englisch.',
    items: [
      { href: '/german-school-system-maths-and-computing-explained', label: 'German school system explained', p: 'Schularten und Abschlüsse im Überblick, auf Englisch.' },
      { href: '/abitur-maths-in-english', label: 'Abitur maths in English', p: 'Das Mathe-Abitur nach Klasse 10.' },
      { href: '/abitur-vs-ib-vs-a-levels-maths', label: 'Abitur vs IB vs A levels', p: 'Drei Wege zur Hochschulreife im Vergleich.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Das zweite MINT-Fach, ebenfalls live.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Alle unsere Seiten für Deutschland.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'So unterrichten wir live.' }
    ]
  },

  start: {
    h2: 'Probestunde in Mathe vereinbaren',
    lede: 'Legen Sie für die erste Stunde eine aktuelle Schulaufgabe oder ein Arbeitsblatt bereit. Der Mentor rechnet ein paar Aufgaben mit Ihrem Kind und sucht dabei die älteste Lücke. Danach empfehlen wir Kurs und Format.',
    readFirst: 'Vorab lesen: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> erklärt den Unterricht, <a class="ag-inline-link" href="/courses/comprehensive-middle-school-mathematics-mastery">der Mittelstufenkurs</a> zeigt den Lehrplan (beides auf Englisch).',
    note: 'Unterricht live online, ausschließlich auf Englisch, mit Mentoren in Indien. Per WhatsApp sind wir am schnellsten erreichbar.',
    formNote: 'Kostenlos, ohne Karte, unverbindlich.'
  },

  footer: {
    cols: [
      { h4: 'Mathematik', links: [
        { href: '/courses/comprehensive-middle-school-mathematics-mastery', label: 'Mittelstufe' },
        { href: '/courses/algebra-foundations-masterclass', label: 'Algebra' },
        { href: '/courses/mathematik-olympiade-and-kaenguru-training-course', label: 'Olympiade und Känguru' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/abitur-maths-in-english', label: 'Abitur maths (EN)' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Prozente multipliziert man, man addiert sie nicht'
  },

  personalityCss: `
.ag-root.ag-mng .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-mng .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-mng .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-mng .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-mng .ag-table td { font-variant-numeric: tabular-nums; }
`,

  dossier: {
    curriculumAuthority: 'ISB Bayern, Jahrgangsstufentests am Gymnasium (pages and Elterninformation, Stand Oktober 2025); KMK Bildungsstandards Mathematik ESA/MSA i.d.F. 23.06.2022; KMK school-type overview and Eurydice dossier; Bavarian ministry Gymnasium page; NRW Standardsicherung ZP10 page; read 3 November 2026. Practice set our own.',
    localProject: 'A practice set on chained percentages without a calculator (80 up 20 % then down 20 % is 76,8; up 25 % needs down 20 %; three times 10 % is 33,1 %), the general reason (1 + a)(1 - a) = 1 - a², and the same sums checked exactly with Python fractions. Lesson family: percent changes chain by multiplying growth factors, never by adding the percentages.',
    requiredMentions: ['29.09.2026 (Jahrgangsstufe 8), 01.10.2026 (Jahrgangsstufe 10)', '28.09.2027 (Jahrgangsstufe 8), 30.09.2027 (Jahrgangsstufe 10)', 'Taschenrechner und die ab Klasse 10 zugelassene Formelsammlung', 'an bayerischen Gymnasien 1998 eingeführt', 'welches Kompetenzniveau Schülerinnen und Schüler im Durchschnitt in einem Fach erreichen sollen', '80 · 1,2 · 0,8 = 80 · 0,96 = 76,8', '<code>1331/1000 1.331</code>', 'Prozente multipliziert man, man addiert sie nicht'],
    sources: [
      { claim: 'Jahrgangsstufentests in Mathematik in Jgst. 8 and 10 at Bavarian Gymnasien.', url: 'https://www.isb.bayern.de/schularten/gymnasium/leistungserhebungen/jahrgangsstufentests/' },
      { claim: 'Test dates 2026/27 and 2027/28.', url: 'https://www.isb.bayern.de/schularten/gymnasium/leistungserhebungen/jahrgangsstufentests/mathematik/' },
      { claim: 'Introduced 1998; 40 minutes; no calculator or formula sheet; weighting decided by the Lehrerkonferenz; no half marks; Jgst. 8 unless VERA.', url: 'https://www.isb.bayern.de/fileadmin/user_upload/Gymnasium/Leistungserhebungen/Jahrgangsstufenarbeiten/Elterninformation/elterninformation_jahrgangsstufentests.pdf' },
      { claim: 'Regelstandards, three Anforderungsbereiche, percentages in growth processes.', url: 'https://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/2022/2022_06_23-Bista-ESA-MSA-Mathe.pdf' },
      { claim: 'NRW: G8 Gymnasium pupils do not take ZP10.', url: 'https://www.standardsicherung.schulministerium.nrw.de/zentrale-pruefungen-10' }
    ],
    rejectedClaims: [
      'German-language teaching: we teach in English only, and the page says so.',
      'Grade improvement promises: none.',
      'Reproducing ISB test tasks: refused; families are pointed to the ISB archive, and our tasks are our own.',
      'VERA, ZP10 and MSA date tables: on other Germany pages, not repeated.'
    ]
  }
};
