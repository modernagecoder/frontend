'use strict';
// Programmieren für Kinder ab 8 (ag- German-language door DE055, Germany cluster P3, rows.tsv German doors).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors (based in India) who match the learner's pace and
// accent; the capsule says "auf Englisch". Formal "Sie" throughout. Pages show euro; checkout charges USD.
// Angle: why eight is a sensible starting age: Scratch is designed for 8 to 16 (Scratch Foundation), an eight-year-old
// is in Klasse 2 or 3 (KMK school-start rule, our derivation), Klasse 3 is when VERA-3 tests maths including "Raum und
// Form" and when the Informatik-Biber opens; the KMK primary maths standards already name algorithms and drawing figures
// with digital tools. One original project: regular polygons with the Scratch pen, checked in Python.
// Sources (fetched raw with curl -sL -A "Mozilla/5.0"; quotes grepped in the raw text):
//  Scratch Foundation, scratch.mit.edu/parents strings from the site's public source (scratch-www, src/views/parents/l10n.json,
//   src-pages/programmieren-fuer-kinder-ab-8/parents-l10n.json, fetched 3 Nov 2026): "Scratch is designed especially for
//   young people ages 8 to 16"; "a simplified version of Scratch designed for ages 5 to 7".
//  KMK Eurydice dossier (fact 289): Stichtag "zwischen dem 30. Juni und dem 30. September"; school starts 1 August.
//  IQB VERA-3 (facts 108, 109, 111): "jährlich verpflichtend"; Leitideen incl. "Raum und Form"; "VERA-3 2027: 12.04. bis 26.05.2027".
//  KMK Bildungsstandards Mathematik Primarbereich, i.d.F. vom 23.06.2022 (fact 119; facts-school/src/kmk-bista-primar-ma/0cb83da4.txt):
//   "das Verstehen und Anwenden von Algorithmen"; "fertigen Zeichnungen geometrischer Figuren mit und ohne Hilfsmittel
//   an, auch unter Nutzung digitaler Werkzeuge"; "operieren (z. B. zerlegen, falten, drehen, spiegeln, bauen)".
//  BWINF (facts 130, 132, 133; biber raw): "Jahrgangsstufen 3 bis 13"; "neun Aufgaben in 30 Minuten"; Biberwochen 2026
//   9 to 20 November; "Registrierung der Lehrkräfte als Koordinator:innen". Jugendwettbewerb (fact 141): "schon ab Jahrgangsstufe 3".
//  Time: EinhZeitG para 4, SoZV; summer time 2027 from 28 March.
// Our own: ecken.py (python3 -I, CPython 3.14.8), output printed exactly: 120.0, 90.0, 72.0, 60.0, 51.43, 45.0, 40.0
//   degrees for 3 to 9 corners, each summing to 360.0; star line "360 720".
// Lesson family: repetition and turning; a closed shape turns once all the way round (360 degrees), a star twice.

const { DE } = require('../../scripts/nl/lib/market-de');

const SCRATCH = [
  'when green flag clicked',
  'erase all',
  'pen down',
  'repeat (4)',
  '    move (80) steps',
  '    turn right (90) degrees',
  'end'
].join('\n');

const PY = [
  'for ecken in range(3, 10):',
  '    winkel = 360 / ecken',
  '    summe = ecken * winkel',
  "    print(ecken, 'Ecken: drehe', round(winkel, 2), 'Grad, zusammen', round(summe, 2))",
  '',
  'print(5 * 72, 5 * 144)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'Programmieren für Kinder ab 8' },
  slug: 'programmieren-fuer-kinder-ab-8',
  code: 'pro',
  accent: '#285D80',
  accentRationale: 'Programmieren für Kinder ab 8: a steady slate blue #285D80, the blue of a geometry set, distinct from the garnet and plum of the other German children\'s pages; contrast 5.74 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Programmieren für Kinder ab 8 (auf Englisch)',
  title: 'Programmieren für Kinder ab 8: warum jetzt, wie es geht',
  description: 'Programmieren für Kinder ab 8 Jahren: warum das Alter passt, was Klasse 2 und 3 schon mitbringen, und ein Scratch-Projekt mit Ecken. Live und auf Englisch.',
  ogDescription: 'Warum acht Jahre ein gutes Einstiegsalter fürs Programmieren sind: Scratch ist für 8 bis 16 gemacht, in Klasse 3 kommen VERA-3 und der Informatik-Biber. Live-Unterricht auf Englisch.',
  twitterDescription: 'Programmieren ab 8: was Kinder in Klasse 2 und 3 schon können, und ein Scratch-Projekt mit Vielecken.',
  pageName: 'Programmieren für Kinder ab 8',
  webPageDescription: 'Ein Leitfaden für Eltern von Kindern ab acht Jahren in Deutschland: warum das Alter für den Einstieg ins Programmieren passt, was Scratch, die Bildungsstandards Mathematik für die Grundschule, VERA-3 und der Informatik-Biber damit zu tun haben, und ein eigenes Projekt mit Vielecken in Scratch und Python.',
  courseDescription: 'Live-Online-Programmierkurse für Kinder ab acht Jahren in ganz Deutschland, ausschließlich auf Englisch: Scratch mit Bewegung, Schleifen und Malstift, später Python, in der Gruppe oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Programmieren ab 8',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#warum', label: 'Warum 8?' },
    { href: '#klasse3', label: 'Klasse 3' },
    { href: '#vielecke', label: 'Vielecke' },
    { href: '#wochen', label: 'Erste Wochen' }
  ],
  eyebrow: 'Deutschland &middot; Programmieren &middot; ab 8 Jahren',
  h1: 'Programmieren für Kinder ab 8, live online',
  lede: 'Mit acht Jahren lesen die meisten Kinder flüssig genug, um Befehle zu verstehen, und sie wollen wissen, wie Dinge funktionieren. Dazu passt, dass Scratch ausdrücklich für Kinder ab acht gemacht ist. Hier lesen Sie, was ein Kind in Klasse 2 oder 3 schon mitbringt, was die Grundschulmathematik mit dem Programmieren verbindet, wie die ersten Wochen in unserem Kurs aussehen und wie ein Kind mit einer einzigen Schleife Quadrat, Sechseck und Stern zeichnet.',
  secondaryCta: { href: '#vielecke', label: 'Zum Vieleck-Projekt' },
  wa: 'Hallo Modern Age Coders, unser Kind ist acht (oder etwas älter) und möchte programmieren lernen, gern live auf Englisch. Wann wäre eine kostenlose Probestunde möglich?',
  heroNote: 'Seit 2020 live online &middot; mehr als 10.000 Lernende weltweit &middot; auf Englisch, mit festem Mentor',
  spec: [
    ['Alter', 'Ab 8 Jahren, etwa Klasse 2 oder 3'],
    ['Start mit', 'Scratch, dem Werkzeug für 8 bis 16'],
    ['Danach', 'Python, wenn das Tippen sitzt'],
    ['Unterricht', 'Live per Video, nie vorab aufgezeichnet'],
    ['Gruppe', 'Fünfzehn bis zwanzig, oder einzeln'],
    ['Probestunde', 'Kostenlos, ohne Kreditkarte']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Programmieren für Kinder ab 8 heißt bei Modern Age Coders: Ihr Kind beginnt mit Scratch, das laut Scratch Foundation für Acht- bis Sechzehnjährige entwickelt wurde, und wechselt später zu Python. Unterrichtet wird live online und auf Englisch, überall in Deutschland, von einem festen Mentor, der sich auf das Tempo und die Aussprache Ihres Kindes einstellt; in einer Gruppe von fünfzehn bis zwanzig Gleichaltrigen oder im Einzelunterricht.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Kurse für Kinder ab acht Jahren',
    lede: 'Der erste ist der klassische Einstieg mit Scratch, der zweite verbindet Programmieren mit Spieleentwicklung, der dritte führt ab etwa Klasse 3 zu getipptem Code.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'PRO / 01', title: 'Scratch von null bis zum eigenen Spiel', alt: 'Kursbild Scratch Coding for Kids', note: 'Für die Klassen 1 bis 5, nach Klasse eingestuft. Ideal für Achtjährige: Bewegung, Malstift, Schleifen, Bedingungen und die ersten eigenen Spiele.' },
      { course: 'game-development-masterclass-for-kids', code: 'PRO / 02', title: 'Spieleentwicklung für Kinder', alt: 'Kursbild Game Development for Kids', note: 'Für 8 bis 12 Jahre, ohne Vorkenntnisse. Spiele planen und bauen, erst in Scratch, später in Roblox und Minecraft.' },
      { course: 'python-ai-kids-masterclass', code: 'PRO / 03', title: 'Python und KI für Kinder', alt: 'Kursbild Python and AI for Kids', note: 'Von Klasse 3 bis Klasse 8. Für Kinder, die schon ein Jahr mit Blöcken gearbeitet haben und sicher tippen möchten.' }
    ]
  },

  sections: [
    {
      id: 'warum',
      eyebrow: 'Das richtige Alter',
      h2: 'Warum ist acht ein gutes Alter, um programmieren zu lernen?',
      lede: 'Weil drei Dinge zusammenkommen: Das Kind kann lesen, es denkt schon in Regeln, und die Werkzeuge sind genau für dieses Alter gebaut.',
      body: [
        { kind: 'table', numCols: [], caption: 'Was das Alter von acht Jahren mit dem Programmieren verbindet', head: ['Was', 'Befund', 'Quelle'], rows: [
          ['Für wen Scratch gedacht ist', '"designed especially for young people ages 8 to 16"', 'Scratch Foundation, Seite für Eltern'],
          ['Was es für Jüngere gibt', 'ScratchJr, eine vereinfachte Fassung für 5 bis 7 Jahre', 'Scratch Foundation, Seite für Eltern'],
          ['In welcher Klasse Achtjährige sind', 'Meist in Klasse 2 oder 3', 'Unsere Ableitung aus der KMK-Regel: Einschulung am 1. August mit sechs Jahren, Stichtag je nach Land zwischen 30. Juni und 30. September'],
          ['Was die Grundschulmathematik verlangt', 'Unter anderem "das Verstehen und Anwenden von Algorithmen" und Zeichnungen geometrischer Figuren, auch mit digitalen Werkzeugen', 'KMK, Bildungsstandards Mathematik Primarbereich, Fassung vom 23.06.2022'],
          ['Ab wann es Informatik-Wettbewerbe gibt', 'Informatik-Biber ab Jahrgangsstufe 3; Jugendwettbewerb Informatik grundsätzlich auch ab Jahrgangsstufe 3', 'Bundesweite Informatikwettbewerbe (BWINF)']
        ] },
        { kind: 'source', html: 'Quellen: Scratch Foundation, Text der Seite "For Parents" auf scratch.mit.edu (aus dem öffentlichen Quellcode der Seite gelesen, 3. November 2026); KMK, Eurydice-Dossier zum Bildungswesen; KMK, Bildungsstandards für das Fach Mathematik Primarbereich, Beschluss vom 15.10.2004 in der Fassung vom 23.06.2022; BWINF, Seiten zum Informatik-Biber und zum Jugendwettbewerb, gelesen am 2. November 2026. Wir sind mit keiner dieser Organisationen verbunden.' },
        { kind: 'two', mt: true,
          leftH3: 'Lesen, Zählen, Regeln',
          left: [
            'Mit acht Jahren liest ein Kind kurze Wörter auf einem Block, ohne zu buchstabieren, und es kann bis hundert sicher zählen. Das genügt für Scratch völlig: Die Blöcke sind kurz, die Zahlen darin klein.',
            'Wichtiger noch ist das Denken in Regeln. Ein Achtjähriges besteht beim Brettspiel auf den Regeln, und es merkt, wenn jemand schummelt. Genau diese Strenge braucht ein Computer, der eine Anweisung wörtlich nimmt.'
          ],
          rightH3: 'Und wenn mein Kind jünger ist?',
          right: [
            'Dann ist es nicht zu früh, aber der Einstieg sieht anders aus: mit Pfeilkarten, Bewegungsspielen und Bildern statt Text. Für Sechs- und Siebenjährige haben wir einen eigenen Kurs mit Denkspielen.',
            'Und wer mit zehn oder elf beginnt, ist auch nicht zu spät dran. Ältere Kinder kommen durch die ersten Scratch-Wochen schneller und wechseln oft schon nach einigen Monaten zu Python.'
          ] }
      ]
    },
    {
      id: 'klasse3',
      eyebrow: 'Schule in Klasse 2 und 3',
      h2: 'Was passt zum Programmieren in Klasse 3?',
      lede: 'Klasse 3 ist in Deutschland ein Jahr mit Prüfsteinen. Zwei davon berühren das Programmieren direkt, auch wenn es kein Fach Informatik gibt.',
      body: [
        { kind: 'table', numCols: [], caption: 'Termine und Angebote für Kinder in Klasse 3, Schuljahr 2026/27', head: ['Was', 'Für wen', 'Wann', 'Was es mit Programmieren zu tun hat'], rows: [
          ['VERA-3, Vergleichsarbeit Mathematik und Deutsch', 'Alle Kinder in Klasse 3, jedes Jahr verpflichtend', 'Testfenster 12. April bis 26. Mai 2027', 'Mathematik prüft unter anderem die Leitidee "Raum und Form": Figuren, Wege, Drehungen'],
          ['Informatik-Biber', 'Jahrgangsstufen 3 bis 13, ohne Vorkenntnisse', 'Biberwochen 9. bis 20. November 2026', 'Knobelaufgaben zum informatischen Denken; Grundschulkinder lösen neun Aufgaben in 30 Minuten'],
          ['Jugendwettbewerb Informatik', 'Grundsätzlich schon ab Jahrgangsstufe 3', 'Die erste Runde 2026 lief vom 23. Februar bis 8. März 2026; die Termine für 2027 stehen auf der BWINF-Seite', 'Erste kleine Programme mit Blöcken']
        ] },
        { kind: 'source', html: 'Quellen: Institut zur Qualitätsentwicklung im Bildungswesen (IQB), Seite VERA-3, gelesen am 2. November 2026; BWINF, Seiten zum Informatik-Biber 2026 und zum Jugendwettbewerb. Den Biber melden Lehrkräfte an, die sich als Koordinatorinnen und Koordinatoren registrieren; fragen Sie also an der Schule Ihres Kindes nach. Wir sind weder mit dem IQB noch mit BWINF verbunden.' },
        { kind: 'p', mt: true, html: 'Laut IQB geben die VERA-3-Ergebnisse den Lehrkräften Rückmeldung darüber, wie weit ihre Klasse die Anforderungen der Bildungsstandards schon erfüllt. Trotzdem zeigt der Test, was Kinder in diesem Alter können sollen. Die Bildungsstandards Mathematik für die Grundschule beschreiben zum Beispiel, dass Kinder mit geometrischen Objekten gedanklich "zerlegen, falten, drehen, spiegeln, bauen" und Zeichnungen geometrischer Figuren "auch unter Nutzung digitaler Werkzeuge" anfertigen. Ein Programm, das eine Figur zeichnet, ist genau so ein digitales Werkzeug, nur dass das Kind es selbst gebaut hat.' },
        { kind: 'p', html: 'Wir bereiten nicht auf VERA-3 vor, und der Kurs ersetzt keinen Mathematikunterricht. Aber Kinder, die eine Drehung um 90 Grad schon dutzendfach programmiert haben, wundern sich im Unterricht selten über rechte Winkel.' }
      ]
    },
    {
      id: 'vielecke',
      tint: 'tint',
      eyebrow: 'Ein Projekt für Achtjährige',
      h2: 'Wie zeichnet ein Kind mit Scratch ein Quadrat, ein Sechseck und einen Stern?',
      lede: 'Mit einer einzigen Schleife und einer Frage: Wie weit muss sich die Figur an jeder Ecke drehen? Das Projekt ist unser eigenes. Im Unterricht verwenden wir die englischen Blocknamen, Scratch lässt sich aber auch auf Deutsch umstellen.',
      body: [
        { kind: 'code', label: 'Ein Quadrat mit dem Malstift', lang: 'Scratch', code: SCRATCH, note: 'Die Blöcke in Scratch, mit englischer Oberfläche. Den Malstift (pen) fügt man über die Erweiterungen unten links hinzu. Auf Deutsch heißt der Wiederholungsblock "wiederhole ... mal".' },
        { kind: 'ol', mt: true, items: [
          '<strong>Erst laufen, dann klicken.</strong> Ihr Kind geht im Zimmer ein Quadrat ab: vier Schritte, rechts drehen, vier Schritte, rechts drehen. Wie oft dreht es sich, bis es wieder in die Ausgangsrichtung schaut?',
          '<strong>Das Quadrat bauen.</strong> Vier gleiche Seiten, vier Drehungen um 90 Grad. Statt achtmal Blöcke zu stapeln, packt Ihr Kind zwei Blöcke in eine Wiederholung.',
          '<strong>Die Zahl ändern.</strong> Aus <code>repeat (4)</code> wird <code>repeat (6)</code>. Die Figur zeichnet kein Sechseck, sondern läuft über sich selbst hinaus. Warum?',
          '<strong>Die Regel finden.</strong> Ganz herum sind 360 Grad. Bei sechs Ecken muss jede Drehung also 360 geteilt durch 6 sein, 60 Grad. Jetzt schließt sich das Sechseck.',
          '<strong>Den Stern wagen.</strong> Bei fünf Wiederholungen mit 144 Grad entsteht ein fünfzackiger Stern. Ihr Kind rechnet nach: 5 mal 144 sind 720, das sind zwei volle Umdrehungen.'
        ] },
        { kind: 'code', label: 'Die Drehwinkel in Python nachrechnen', lang: 'Python', code: PY, note: 'Wir haben das Programm ausgeführt; die Ausgabe lautet Zeile für Zeile: 3 Ecken 120.0 Grad, 4 Ecken 90.0, 5 Ecken 72.0, 6 Ecken 60.0, 7 Ecken 51.43, 8 Ecken 45.0, 9 Ecken 40.0, jeweils "zusammen 360.0", und zuletzt <code>360 720</code>.' },
        { kind: 'table', mt: true, numCols: [0, 1, 2], caption: 'Drehwinkel für regelmäßige Vielecke (unsere Rechnung mit dem Programm oben)', head: ['Ecken', 'Drehung pro Ecke in Grad', 'Summe der Drehungen', 'Was dabei auffällt'], rows: [
          ['3', '120', '360', 'Das Dreieck braucht die größte Drehung'],
          ['4', '90', '360', 'Der rechte Winkel aus dem Mathematikheft'],
          ['6', '60', '360', 'Wie die Waben im Bienenstock'],
          ['7', '51,43 (gerundet)', '360', 'Geht nicht glatt auf; Scratch zeichnet trotzdem, mit winziger Lücke'],
          ['5 als Stern', '144', '720', 'Zwei volle Umdrehungen statt einer']
        ] },
        { kind: 'p', mt: true, html: 'Das Siebeneck ist der heimliche Höhepunkt. Ihr Kind entdeckt, dass 360 nicht durch jede Zahl glatt teilbar ist, und dass ein Computer trotzdem rechnet, nur mit Kommazahl. Ältere Kinder können ausprobieren, ob <code>turn right (360 / 7) degrees</code> in Scratch eine sauberere Figur ergibt als die gerundete 51. Und wer den Stern verstanden hat, findet mit etwas Geduld auch einen Siebenzack: Welche Drehung ergibt zusammen drei volle Umdrehungen?' }
      ]
    },
    {
      id: 'wochen',
      eyebrow: 'Die ersten Wochen',
      h2: 'Wie sehen die ersten Wochen im Programmierkurs für Achtjährige aus?',
      lede: 'So planen wir die ersten acht Wochen in einer Gruppe von Acht- und Neunjährigen. Zwei Stunden pro Woche, jede Woche ein kleines, fertiges Ergebnis.',
      body: [
        { kind: 'table', numCols: [], caption: 'Die ersten acht Wochen mit Scratch (unser Plan, Beispiel)', head: ['Woche', 'Thema', 'Am Ende kann Ihr Kind'], rows: [
          ['1', 'Figuren und Bühne', 'eine Figur auswählen, verschieben und sprechen lassen'],
          ['2', 'Bewegung in Schritten', 'eine Figur mit Schritten und Drehungen über die Bühne führen'],
          ['3', 'Wiederholen', 'eine Bewegung mit einer Schleife wiederholen statt Blöcke zu stapeln'],
          ['4', 'Malstift', 'Quadrat und Dreieck zeichnen, wie im Projekt oben'],
          ['5', 'Tasten steuern', 'eine Figur mit den Pfeiltasten lenken'],
          ['6', 'Wenn, dann', 'eine Figur reagieren lassen, wenn sie eine Farbe oder eine andere Figur berührt'],
          ['7', 'Punkte zählen', 'eine Variable anlegen, die bei jedem Treffer um eins steigt'],
          ['8', 'Das erste Spiel', 'die Bausteine zu einem kleinen Fangspiel zusammensetzen und vorführen']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Warum langsam schneller ist',
          left: [
            'Wir könnten in Woche 1 ein fertiges Spiel bauen lassen, indem wir es vormachen. Dann hätte Ihr Kind ein Spiel und kein Verständnis. Deshalb kommt jedes neue Werkzeug einzeln dazu und wird erst geübt, bevor das nächste folgt.',
            'In Woche 8 setzt Ihr Kind dann Bausteine zusammen, die es alle schon kennt. Das fühlt sich für Kinder an wie Zauberei, ist aber nur sorgfältige Vorbereitung.'
          ],
          rightH3: 'Und das Englisch?',
          right: [
            'Achtjährige lernen Wörter wie move, turn, repeat und if erstaunlich schnell, weil sie sie jede Stunde lesen, hören und benutzen. Der Mentor zeigt bei jedem neuen Block auf das Wort und spricht es langsam aus.',
            'Wer in der Schule schon Englisch hat, erkennt viele Wörter wieder. Wer noch nicht, lernt sie hier zum ersten Mal, und zwar an Dingen, die ihm wichtig sind.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Drei Beispieltermine für Grundschulkinder, mit der Uhrzeit beim Mentor in Indien', head: ['In Deutschland', 'In Indien bis zum 27. März 2027', 'In Indien ab dem 28. März 2027'], rows: [
          ['14:45', '19:15', '18:15'],
          ['16:45', '21:15', '20:15'],
          ['Samstag 09:00', '13:30', '12:30']
        ] },
        { kind: 'source', html: 'Gesetzliche Zeit in Deutschland ist nach dem Einheiten- und Zeitgesetz die MEZ (UTC+1), im Sommer die MESZ (UTC+2); die aktuelle Winterzeit gilt seit dem 25. Oktober 2026, die Sommerzeit 2027 beginnt am 28. März. Indien hat ganzjährig UTC+5:30 und liegt damit im Winter viereinhalb, im Sommer dreieinhalb Stunden vorn. Die Termine sind Beispiele, nicht feste Kurszeiten.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Was Ihr Kind im ersten Jahr erreicht',
    lede: 'Unsere eigenen Stufen. Sie zeigen, wie ein Kind, das mit acht beginnt, typischerweise vorankommt, sind aber keine Noten und kein Versprechen.',
    table: { caption: 'Fünf Stufen für Kinder, die mit acht beginnen (unsere)', head: ['Stufe', 'Ungefähr nach', 'Ihr Kind kann'], rows: [
      ['1. Steuern', 'einem Monat', 'eine Figur gezielt bewegen und drehen'],
      ['2. Wiederholen', 'zwei Monaten', 'Wiederholungen erkennen und eine Schleife einsetzen'],
      ['3. Reagieren', 'vier Monaten', 'mit wenn und sonst auf Tasten und Berührungen reagieren'],
      ['4. Zählen', 'sechs Monaten', 'Punkte, Leben und Zeit mit Variablen verwalten'],
      ['5. Planen', 'einem Jahr', 'ein eigenes Spiel zuerst auf Papier entwerfen und dann umsetzen']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Manche Kinder springen schnell durch die ersten Stufen und bleiben dann bei Variablen hängen. Das ist der erste echte Abstraktionsschritt und verdient Geduld.',
      'Ein Kind, das mit neun Jahren ein kleines Spiel aus eigener Idee baut, ist bereit für Python. Den Wechsel besprechen wir mit Ihnen.'
    ] },
    right: { h3: 'Für Kinder', ps: [
      'Laufen Sie eine Bewegung erst selbst ab, bevor Sie sie programmieren. Ihr Körper weiß oft schon, wie weit Sie sich drehen müssen.',
      'Wenn die Figur nicht tut, was Sie wollen, ändern Sie nur eine Zahl und schauen Sie, was passiert.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse für Kinder ab acht',
    lede: 'Unterrichtet wird überall live und auf Englisch, mit demselben Mentor über viele Wochen, in der Gruppe oder allein.',
    bands: [
      { num: 'I', h3: 'Blöcke und Bilder', sub: '8 bis 12 Jahre', courses: [
        { code: 'PRO / BLOCK / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Von ersten Blöcken bis zu Apps, Gruppen nach Alter.' },
        { code: 'PRO / BLOCK / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft programmieren', blurb: 'Bauen mit Code statt Spitzhacke, 7 bis 12.' },
        { code: 'PRO / BLOCK / 03', slug: 'ai-literacy-for-kids-course', title: 'Künstliche Intelligenz verstehen', blurb: 'Was KI kann und wo sie irrt, 8 bis 14.' }
      ] },
      { num: 'II', h3: 'Denken und rechnen', sub: '8 bis 12 Jahre', courses: [
        { code: 'PRO / DENK / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Informatisch denken', blurb: 'Zerlegen, ordnen, verallgemeinern, Klasse 3 bis 8.' },
        { code: 'PRO / DENK / 02', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Vorbereitung auf den Informatik-Biber', blurb: 'Eigene Knobelaufgaben im Stil des Wettbewerbs.' },
        { code: 'PRO / DENK / 03', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Mathe-Olympiade und Känguru', blurb: 'Für Kinder ab Klasse 3, die gern knobeln.' }
      ] },
      { num: 'III', h3: 'Die nächsten Schritte', sub: '9 bis 12 Jahre', courses: [
        { code: 'PRO / WEITER / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox-Spiele bauen', blurb: 'Eigene Welten mit Luau, 8 bis 14.' },
        { code: 'PRO / WEITER / 02', slug: 'kids-ai-web-development-course', title: 'Webseiten selbst gestalten', blurb: 'HTML und CSS, 9 bis 12.' },
        { code: 'PRO / WEITER / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ für Kinder', blurb: 'Für Neugierige, die Textcode wollen, 9 bis 12.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Organisation',
    h2: 'Wie der Kurs für Kinder ab acht organisiert ist',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Nachmittag', l: 'Wenn Schule und Hausaufgaben erledigt sind.' },
      { time: 'Samstagmorgen', l: 'Ausgeschlafen und ohne Zeitdruck.' },
      { time: 'Allein mit dem Mentor', l: 'Zu einem Termin, den Sie festlegen.' }
    ],
    cells: [
      { h3: 'Zwei Live-Stunden', p: 'Jede Woche, je sechzig Minuten, mit demselben Mentor.' },
      { h3: 'Gleichaltrige', p: 'Achtjährige lernen mit Kindern ihres Alters.' },
      { h3: 'Ein Ergebnis pro Woche', p: 'Jede Woche endet mit etwas, das funktioniert.' },
      { h3: 'Bewegen vor Klicken', p: 'Viele Aufgaben werden zuerst im Zimmer abgelaufen.' },
      { h3: 'Bericht an die Eltern', p: 'Sie erfahren regelmäßig, was gelungen ist.' },
      { h3: 'Monatlich kündbar', p: 'Kein Jahresvertrag, keine Bindung.' }
    ]
  },

  projectsH2: 'Was aus den ersten Schritten wird',
  projectsLede: 'Aus Quadraten werden Spiele, aus Spielen eigene Ideen. Beispiele unserer Lernenden finden Sie unten und auf <a class="ag-inline-link" href="/student-labs">Student labs</a> (auf Englisch).',
  reviewsLede: 'Stimmen von Eltern bei Google, unverändert auf Englisch.',

  fees: {
    h2: 'Preise für den Kurs ab acht Jahren',
    lede: 'Der Beitrag gilt pro Monat und deckt acht Live-Stunden ab. Angezeigt wird er in Euro, auf Basis des Referenzkurses, den die Europäische Zentralbank veröffentlicht. Belastet wird Ihr Konto in US-Dollar; Ihre Bank tauscht in Euro, und dabei kann sich ein kleiner Unterschied zum angezeigten Betrag ergeben.',
    free: ['Eine Probestunde ohne Kosten', 'Eine Einstufung für die passende Altersgruppe', 'Keine Karte, kein Abo'],
    group: ['Fünfzehn bis zwanzig Kinder in einer Gruppe', 'Ein fester Mentor', 'Zwei Live-Stunden in der Woche', 'Jeden Monat kündbar'],
    one: ['Ihr Kind allein mit dem Mentor', 'Tempo ganz nach Ihrem Kind', 'Wunschtermine']
  },

  faq: {
    eyebrow: 'Fragen und Antworten',
    h2: 'Programmieren für Kinder ab 8: Fragen von Eltern',
    items: [
      { q: 'Ist acht Jahre nicht zu jung zum Programmieren?', a: 'Nein. Scratch, das bekannteste Werkzeug für Kinder, ist laut Scratch Foundation ausdrücklich für junge Menschen von 8 bis 16 Jahren gedacht. Mit acht Jahren lesen Kinder kurze Blöcke sicher und denken gern in Regeln, das reicht für den Anfang völlig.' },
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein, wir unterrichten nur auf Englisch, immer live. Für Achtjährige ist das oft ein Gewinn: Sie lernen Wörter wie move, turn und repeat genau dort, wo sie sie brauchen. Der Mentor spricht langsam, zeigt viel und passt sich an Tempo und Aussprache Ihres Kindes an.' },
      { q: 'Was ist, wenn mein Kind erst sechs oder sieben ist?', a: 'Dann empfehlen wir einen Einstieg mit Denkspielen und Bildern, zum Beispiel unseren Kurs für Sechs- bis Neunjährige. Für dieses Alter gibt es auch ScratchJr, das laut Scratch Foundation für Fünf- bis Siebenjährige entwickelt wurde. Der Wechsel zu Scratch folgt dann mit etwa acht.' },
      { q: 'Muss mein Kind schon gut lesen und schreiben können?', a: 'Es sollte kurze Wörter lesen können. Schreiben muss es in Scratch kaum, denn die Blöcke werden gezogen, nicht getippt. Erst beim Wechsel zu Python wird Tippen wichtig, und dann ist Ihr Kind meist neun oder zehn.' },
      { q: 'Hilft Programmieren in Mathematik?', a: 'Es kann helfen, aber wir versprechen keine besseren Noten. Die Bildungsstandards Mathematik für die Grundschule nennen ausdrücklich das Verstehen und Anwenden von Algorithmen und das Zeichnen geometrischer Figuren mit digitalen Werkzeugen. Beides üben Kinder beim Programmieren ganz nebenbei.' },
      { q: 'Kann mein Kind mit acht beim Informatik-Biber mitmachen?', a: 'Ja, sobald es in Klasse 3 ist. Der Informatik-Biber steht den Jahrgangsstufen 3 bis 13 offen, Vorkenntnisse sind nicht nötig. 2026 laufen die Biberwochen vom 9. bis 20. November; angemeldet wird über eine Lehrkraft der Schule.' },
      { q: 'Wann finden die Stunden statt?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. Für Achtjährige raten wir zu nicht zu späten Nachmittagen.' },
      { q: 'Wie viele Kinder sind in einer Gruppe?', a: 'Fünfzehn bis zwanzig Kinder ähnlichen Alters. Wenn Ihr Kind lieber allein lernt oder schon weiter ist als Gleichaltrige, ist der Einzelunterricht die bessere Wahl.' },
      { q: 'Was kostet der Kurs?', a: 'Der Monatsbeitrag steht weiter oben auf dieser Seite, in Euro nach dem Referenzkurs der Europäischen Zentralbank. Bezahlt wird in US-Dollar; Ihre Bank übernimmt die Umrechnung. Die Probestunde kostet nichts.' },
      { q: 'Wann wechselt mein Kind von Scratch zu Python?', a: 'Wenn es Schleifen, Bedingungen und Variablen in Scratch sicher nutzt und flüssig tippt. Bei Kindern, die mit acht beginnen, ist das oft nach ein bis zwei Jahren so weit. Wir besprechen den Wechsel mit Ihnen, statt ihn nach Kalender festzulegen.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weitere Seiten',
    h2: 'Lesenswert für Eltern in Deutschland',
    lede: 'Einige weitere Seiten, meist in englischer Sprache.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Der Einstieg in alle unsere Deutschland-Seiten.' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin', p: 'Für Berliner Familien mit Kindern von 6 bis 12.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'Wann Informatik in der weiterführenden Schule beginnt.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Für später, ab Klasse 5.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Unser Unterricht im Überblick.' },
      { href: '/courses', label: 'All courses', p: 'Jeder Kurs mit Lehrplan.' }
    ]
  },

  start: {
    h2: 'Probestunde für Ihr Kind ab acht',
    lede: 'In der Probestunde bewegt Ihr Kind eine Figur über die Bühne, dreht sie um 90 Grad und zeichnet vielleicht schon sein erstes Quadrat. Der Mentor sieht dabei, wie sicher es liest und zählt, und empfiehlt danach die passende Gruppe.',
    readFirst: 'Wenn Sie vorher mehr wissen möchten: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> und <a class="ag-inline-link" href="/courses">All courses</a> (beide auf Englisch).',
    note: 'Der Unterricht findet live online mit Mentoren in Indien statt, nur auf Englisch. Am schnellsten geht es über WhatsApp; Sie dürfen gern auf Deutsch schreiben, wir antworten auf Englisch.',
    formNote: 'Kostenlos, ohne Verpflichtung und ohne Karte.'
  },

  footer: {
    cols: [
      { h4: 'Ab acht Jahren', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch-Kurs' },
        { href: '/courses/game-development-masterclass-for-kids', label: 'Spieleentwicklung' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python für Kinder' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-for-kids-berlin', label: 'Kinder in Berlin' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik nach Land' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Ganz herum sind 360 Grad'
  },

  personalityCss: `
.ag-root.ag-pro .ag-hero h1 { letter-spacing: -0.013em; }
.ag-root.ag-pro .ag-capsule { border-left-width: 4px; }
.ag-root.ag-pro .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-pro .ag-steps li strong { letter-spacing: 0.005em; }
.ag-root.ag-pro .ag-section-head h2 { max-width: 31ch; }
`,

  dossier: {
    curriculumAuthority: 'Scratch Foundation (scratch.mit.edu/parents text); KMK Eurydice dossier; KMK Bildungsstandards Mathematik Primarbereich (23.06.2022); IQB VERA-3; BWINF Informatik-Biber and Jugendwettbewerb pages; Einheiten- und Zeitgesetz; read 2 and 3 November 2026. Example code our own.',
    localProject: 'Regular polygons with the Scratch pen: an original project in which an eight-year-old walks a square, builds it with repeat (4) and turn right (90), breaks it with repeat (6), finds the 360 / n rule and draws a star with 144; a Python check we ran prints 120.0, 90.0, 72.0, 60.0, 51.43, 45.0 and 40.0 degrees for 3 to 9 corners, each summing to 360.0, and 360 720 for the star. Lesson family: repetition and turning, a closed shape turns once round.',
    requiredMentions: ['turn right (90) degrees', 'print(5 * 72, 5 * 144)', '51,43 (gerundet)', 'designed especially for young people ages 8 to 16', 'Testfenster 12. April bis 26. Mai 2027', 'das Verstehen und Anwenden von Algorithmen', 'zerlegen, falten, drehen, spiegeln, bauen', 'Ganz herum sind 360 Grad'],
    sources: [
      { claim: 'Scratch designed for ages 8 to 16; ScratchJr for 5 to 7.', url: 'https://scratch.mit.edu/parents/' },
      { claim: 'Primary maths standards: algorithms, geometric drawing with digital tools.', url: 'https://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/2022/2022_06_23-Bista-Primarbereich-Mathe.pdf' },
      { claim: 'VERA-3 compulsory each year; Leitidee Raum und Form; 2027 test window.', url: 'https://www.iqb.hu-berlin.de/de/schule/primarstufe/vera-3/' },
      { claim: 'Informatik-Biber grades 3 to 13, nine tasks in 30 minutes, 2026 dates, teacher registration.', url: 'https://bwinf.de/biber/' },
      { claim: 'Jugendwettbewerb Informatik possible from grade 3.', url: 'https://bwinf.de/jugendwettbewerb/' },
      { claim: 'School start cut-off between 30 June and 30 September.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Eurydice/DE/dossier_de_ebook.pdf' }
    ],
    rejectedClaims: [
      'German-language teaching: we teach in English only, and the page says so.',
      'VERA-3 preparation or better maths marks: not offered, not promised.',
      'Any date for the Jugendwettbewerb 2027 first round: not in our sources, so not stated.',
      'Exact German Scratch block labels beyond "wiederhole ... mal": not verified, so the page shows the English names.'
    ]
  }
};
