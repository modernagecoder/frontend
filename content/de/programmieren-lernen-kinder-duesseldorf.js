'use strict';
// Programmieren lernen für Kinder in Düsseldorf (ag- German city door, Germany cluster P5 row DE125, rows.tsv city-de).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md. Owner 2026-11-02: classes are live, in English only,
// with mentors who match the learner's pace and accent; German pages say "auf Englisch" in the capsule and frame it
// as a benefit. Formal "Sie" throughout. Pages show euro; checkout charges USD.
// Angle (German, for parents of children 6 to 12): in NRW Informatik is a Pflichtfach in Klasse 5 und 6 at every
// school type, so the question for Düsseldorf parents is how to prepare in the Grundschule years and how to keep going
// after Klasse 6; learning in English as a benefit; Biber and Känguru dates; NRW holidays; and a project on the city's
// list of public fountains, where max() and min() each name one Stadtteil although five share the lowest count.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/programmieren-lernen-kinder-duesseldorf/
// and facts-school/src/, fetched 2 and 3 Nov 2026):
//  - GI Informatik-Monitor 2026/27, NRW (infmon-nordrhein-westfalen): "An allen allgemeinbildenden Schularten wird das
//    Pflichtfach Informatik in den Jahrgangsstufen 5 und 6 unterrichtet."; Gymnasium G9: Wahlpflicht in 9 und 10 "im
//    Gesamtumfang von sechs Wochenstunden"; Realschule WPU 7 bis 10 "im Gesamtumfang von 14 Wochenstunden".
//  - KMK Primarbereich (FACTS 1): Grundschule Klasse 1 bis 4.
//  - KMK FER2026_27 (FACTS 275): NRW Herbst 17.10. bis 31.10.2026, Weihnachten 23.12. bis 06.01., Ostern 22.03. bis
//    03.04.2027, Pfingsten 18.05.2027, Sommer 19.07. bis 31.08.2027.
//  - bwinf.de (FACTS 129 to 136): Biber Klasse 3 bis 13, 9. bis 20. November 2026; Klasse 5 und 6: 12 Aufgaben in
//    35 Minuten.
//  - Känguru (FACTS 183, 184, 186): 8. April 2027; Anmeldung 1. Dezember 2026 bis 31. Januar 2027; 24 Aufgaben in
//    75 Minuten für Klasse 3 bis 6.
//  - Destatis GV-ISys (places.tsv): Düsseldorf 618.685; Nordrhein-Westfalen 18.034.454 (31.12.2024).
//  - Time: EinhZeitG, SoZV.
//  - Data: Landeshauptstadt Düsseldorf, "Brunnen in Düsseldorf", via Open.NRW / GovData
//    https://ckan.govdata.de/dataset/brunnen-in-dusseldorf, licence Datenlizenz Deutschland Zero 2.0 on both resources;
//    record: "Der Datensatz enthält die Bezeichnung und den Standort der Brunnen in der Landeshauptstadt Düsseldorf."
//    CSV https://opendata.duesseldorf.de/sites/default/files/Brunnen%20in%20D%C3%BCsseldorf.csv, 69 rows, columns
//    Bezeichnung;Alias;Straße ;Stadtteil (note the space in "Straße "), sha256 a373ed99...344bb315, downloaded
//    3 November 2026; saved locally as brunnen.csv.
// Our own calculations (scratchpad de/w/C3/de125/, python3 -I): v1 prints "Brunnen: 69 in 26 Stadtteilen", "Die
// meisten: Stadtmitte 8", "Die wenigsten: Hellerhof 1"; v1+v2 print "Gleichstand bei 1 Brunnen: 5 Stadtteile",
// "Flingern Nord, Hellerhof, Kalkum, Oberkassel, Rath", "Genau zwei Brunnen: 13 Stadtteile". Wersten 6 (5 of them at
// "Siegburger Straße / Südpark"), Oberbilk 5, Pempelfort, Garath, Altstadt, Urdenbach 4 each.
// Lesson family: min() and max() name only one winner; look for ties, and remember that what is not in the list is
// not counted at all.

const { DE } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'zaehler = {}',
  'with open("brunnen.csv", encoding="utf-8-sig") as datei:',
  '    for zeile in csv.DictReader(datei, delimiter=";"):',
  '        teil = zeile["Stadtteil"]',
  '        zaehler[teil] = zaehler.get(teil, 0) + 1',
  '',
  'print("Brunnen:", sum(zaehler.values()), "in", len(zaehler), "Stadtteilen")',
  'print("Die meisten:", max(zaehler, key=zaehler.get), max(zaehler.values()))',
  'print("Die wenigsten:", min(zaehler, key=zaehler.get), min(zaehler.values()))'
].join('\n');

const V2 = [
  'wenigste = min(zaehler.values())',
  'gleich = sorted(teil for teil in zaehler if zaehler[teil] == wenigste)',
  'print("Gleichstand bei", wenigste, "Brunnen:", len(gleich), "Stadtteile")',
  'print(", ".join(gleich))',
  'zwei = [teil for teil in zaehler if zaehler[teil] == 2]',
  'print("Genau zwei Brunnen:", len(zwei), "Stadtteile")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'stadt', label: 'Düsseldorf: Programmieren für Kinder' },
  slug: 'programmieren-lernen-kinder-duesseldorf',
  code: 'pdu',
  accent: '#1F5521',
  accentRationale: 'Programmieren lernen für Kinder in Düsseldorf: ein tiefes Grün #1F5521, die Farbe der Parkanlagen mit den Brunnen aus dem Projekt, klar getrennt vom Rot der englischen Düsseldorf-Seite; Kontrast 7.16 auf dem Papier #FBF8F2',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }, { slug: 'coding-classes-in-north-rhine-westphalia', name: 'Nordrhein-Westfalen' }],
  routeLabel: 'Programmieren lernen für Kinder in Düsseldorf (auf Englisch)',
  title: 'Programmieren lernen für Kinder in Düsseldorf: live auf Englisch',
  description: 'Programmieren lernen für Kinder in Düsseldorf von 6 bis 12: live auf Englisch, Informatik ab Klasse 5 in NRW, der Informatik-Biber und ein Projekt mit Stadtdaten.',
  ogDescription: 'Live-Programmierunterricht auf Englisch für Düsseldorfer Kinder von 6 bis 12, im Tempo Ihres Kindes: was das Pflichtfach Informatik in Klasse 5 und 6 bedeutet, der Biber im November 2026 und ein Projekt mit den Brunnen der Stadt.',
  twitterDescription: 'Programmieren für Düsseldorfer Kinder, live auf Englisch: Informatik ab Klasse 5, der Biber und echte Stadtdaten.',
  pageName: 'Programmieren lernen für Kinder in Düsseldorf',
  webPageDescription: 'Ein Leitfaden für Düsseldorfer Eltern von Kindern zwischen 6 und 12 Jahren: das Pflichtfach Informatik in Nordrhein-Westfalen nach dem Informatik-Monitor 2026/27, die Ferien 2026/27, Termine von Informatik-Biber und Känguru, und ein eigenes Projekt mit der Brunnenliste der Landeshauptstadt Düsseldorf.',
  courseDescription: 'Live-Online-Programmierkurse auf Englisch für Düsseldorfer Kinder von 6 bis 12 Jahren: Scratch, Python und kleine Datenprojekte, dazu Begleitung für das Pflichtfach Informatik in Klasse 5 und 6, in der Gruppe oder einzeln.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kinder in Düsseldorf',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#schule', label: 'Schule' },
    { href: '#projekt', label: 'Brunnen' },
    { href: '#wettbewerbe', label: 'Biber' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Düsseldorf &middot; Programmieren für Kinder &middot; 6 bis 12 Jahre',
  h1: 'Programmieren lernen für Kinder in Düsseldorf',
  lede: 'In Düsseldorf kommt Informatik früh: Nordrhein-Westfalen unterrichtet sie in Klasse 5 und 6 als Pflichtfach, an jeder Schulart. Für Eltern stellen sich damit zwei Fragen. Wie kann ein Kind in der Grundschulzeit spielerisch vorbereitet ankommen, und wie geht es nach Klasse 6 weiter, wenn das Fach zur Wahl wird? Diese Seite beantwortet beides, erklärt unseren Live-Unterricht auf Englisch, nennt die Wettbewerbstermine 2026/27 und zeigt an der Brunnenliste der Stadt, warum ein Computer manchmal nur die halbe Wahrheit sagt.',
  secondaryCta: { href: '#projekt', label: 'Zum Brunnen-Projekt' },
  wa: 'Hallo Modern Age Coders, wir wohnen in Düsseldorf und unser Kind möchte programmieren lernen, gern auf Englisch. Können wir eine kostenlose Probestunde vereinbaren?',
  heroNote: 'Live-Unterricht seit 2020 &middot; mehr als 10.000 Lernende weltweit &middot; auf Englisch, mit festem Mentor',
  spec: [
    ['Alter', '6 bis 12 Jahre, in Altersgruppen'],
    ['Inhalte', 'Scratch, Python, erste Datenprojekte'],
    ['Gruppengröße', 'Fünfzehn bis zwanzig, oder einzeln'],
    ['Zeiten', 'Nachmittags und am Wochenende'],
    ['Sprache', 'Englisch, Mentoren aus Indien'],
    ['Probestunde', 'Kostenlos, ohne Karte']
  ],
  capsuleQ: 'Das Wichtigste',
  capsule: 'Programmieren lernen für Kinder in Düsseldorf: Bei Modern Age Coders lernen Düsseldorfer Grundschul- und Unterstufenkinder, also Sechs- bis Zwölfjährige, das Programmieren im Live-Unterricht auf Englisch, mit Mentoren aus Indien. Zuerst entstehen Scratch-Spiele, später, meist mit neun, echter Python-Code und kleine Projekte mit Daten der Stadt. Wir begleiten auch das Pflichtfach Informatik der Klassen 5 und 6. So lernt Ihr Kind Programmieren und Englisch zugleich, in einer Gruppe oder allein mit dem Mentor.',

  picks: {
    eyebrow: 'Der richtige Kurs',
    h2: 'Drei Kurse für Düsseldorfer Kinder zwischen 6 und 12',
    lede: 'Python für Kinder ab neun, eine Begleitung für das Pflichtfach ab Klasse 5 und ein Kurs fürs logische Denken, mit dem schon Siebenjährige beginnen können.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PDU / 01', title: 'Python und KI für Kinder', alt: 'Kursbild Python und KI für Kinder', note: 'Neun bis zwölf Jahre, acht bis zehn Monate. Getippte Programme, Turtle-Grafik, kleine Spiele und ab etwa zehn Jahren Datenprojekte wie die Brunnenliste.' },
      { course: 'informatik-companion-course-klasse-5-10', code: 'PDU / 02', title: 'Informatik Companion, Klasse 5 bis 10', alt: 'Kursbild Informatik Companion, Klasse 5 bis 10', note: 'Zehn bis sechzehn Jahre. Läuft neben dem Schulfach her: von Scratch zu Python, mit Daten, Algorithmen und Netzwerken.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'PDU / 03', title: 'Logisch denken für Kinder', alt: 'Kursbild Problemlösen für Kinder', note: 'Sieben bis zwölf Jahre, sechs bis acht Monate. Muster, Rätsel und Pläne in kleinen Schritten, die Grundlage für jedes spätere Programm.' }
    ]
  },

  sections: [
    {
      id: 'schule',
      eyebrow: 'Informatik in Nordrhein-Westfalen',
      h2: 'Ab welcher Klasse haben Düsseldorfer Kinder Informatik?',
      lede: 'Ab Klasse 5, und zwar an allen Schularten. Grundlage ist die Beschreibung im Informatik-Monitor 2026/27, der die Regeln aller 16 Länder vergleicht.',
      body: [
        { kind: 'two',
          leftH3: 'Pflichtfach in Klasse 5 und 6',
          left: [
            'Für NRW heißt es im Informatik-Monitor: "An allen allgemeinbildenden Schularten wird das Pflichtfach Informatik in den Jahrgangsstufen 5 und 6 unterrichtet." Ob Ihr Kind nach der Grundschule ein Gymnasium, eine Realschule, eine Gesamtschule oder eine Sekundarschule besucht: Informatik steht in den ersten zwei Jahren auf dem Stundenplan.',
            'Die Grundschule umfasst in NRW die Klassen 1 bis 4. Ein Düsseldorfer Kind ist beim Start des Pflichtfachs also meist zehn Jahre alt.'
          ],
          rightH3: 'Ab Klasse 7 wird gewählt',
          right: [
            'Danach ist Informatik ein Wahlpflichtfach. An der Realschule kann es in den Klassen 7 bis 10 im Rahmen von insgesamt 14 Wochenstunden belegt werden, an Gesamt- und Sekundarschulen im Rahmen von zwölf.',
            'Am neunjährigen Gymnasium wird Informatik im Wahlpflichtbereich der Klassen 9 und 10 mit insgesamt sechs Wochenstunden angeboten, eigenständig oder als Kombinationsfach. In Klasse 7 und 8 kann ein Gymnasiast also zwei Jahre ohne Informatik sein.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Informatik im Düsseldorfer Schulweg nach den NRW-Regeln, Schuljahr 2026/27', head: ['Klasse', 'Schulart', 'Informatik'], rows: [
          ['1 bis 4', 'Grundschule', 'Nicht Teil des Pflichtfachs'],
          ['5 und 6', 'Alle Schularten', 'Pflichtfach'],
          ['7 bis 10', 'Realschule', 'Wahlpflicht, bis zu 14 Wochenstunden in vier Jahren'],
          ['7 bis 10', 'Gesamtschule, Sekundarschule', 'Wahlpflicht, bis zu 12 Wochenstunden in vier Jahren'],
          ['9 und 10', 'Gymnasium (G9)', 'Wahlpflichtangebot, 6 Wochenstunden in zwei Jahren']
        ] },
        { kind: 'source', html: 'Quelle: Informatik-Monitor 2026/27, Seite Nordrhein-Westfalen, mit Verweisen auf die APO-S I; Kultusministerkonferenz, Primarbereich. Abgerufen am 2. November 2026. Die Wochenstunden sind Gesamtwerte über die genannten Jahrgänge.' },
        { kind: 'p', mt: true, html: 'Für Düsseldorfer Eltern ergeben sich daraus zwei gute Zeitpunkte. Vor Klasse 5 kann ein Kind mit Scratch und ersten Python-Zeilen Sicherheit gewinnen, sodass das neue Fach Spaß macht statt Druck. Nach Klasse 6 kann es weitermachen, auch wenn der Stundenplan pausiert, und später bei der Wahlpflicht aus Erfahrung entscheiden. Wir unterrichten begleitend zur Schule; maßgeblich für Noten bleibt immer der Unterricht an der Schule.' }
      ]
    },
    {
      id: 'englisch',
      eyebrow: 'Auf Englisch lernen',
      h2: 'Warum unterrichten Sie auf Englisch, und klappt das mit acht Jahren?',
      lede: 'Weil Programmiersprachen aus englischen Wörtern bestehen, und weil unsere Mentoren auf Englisch unterrichten. Für die meisten Kinder klappt das gut, wenn der Mentor sich Zeit nimmt.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Nur Englisch, offen gesagt', p: 'Einen Unterricht auf Deutsch bieten wir nicht an, und das erfahren Sie vor der ersten Stunde. Kinder an einer internationalen Schule kennen Englisch als Unterrichtssprache; Kinder an einer Düsseldorfer Grundschule lernen die Wörter, die später ohnehin in jedem Code stehen.' },
          { h3: 'Zeit zum Verstehen', p: 'Der Mentor spricht deutlich, macht Pausen und fragt nach. Wer eine Anweisung nicht versteht, bekommt sie noch einmal mit anderen Worten und sieht sie gleichzeitig auf dem Bildschirm vorgeführt.' },
          { h3: 'Passend zum Schulfach', p: 'Begriffe wie Schleife, Bedingung oder Variable aus dem Informatikunterricht der Klasse 5 tauchen bei uns als loop, if und variable auf. Der Mentor nennt beide Wörter, damit Schule und Kurs einander stützen.' }
        ] },
        { kind: 'p', mt: true, html: 'Unsere Mentoren unterrichten von Indien aus, live über Video. Ein Nachmittag in Düsseldorf ist dort Abend, deshalb passen die Zeiten gut zusammen. Ihr Kind bleibt das ganze Jahr beim selben Mentor, der bald weiß, ob es lieber Spiele baut, Rätsel löst oder Zeit zum Nachdenken braucht.' }
      ]
    },
    {
      id: 'projekt',
      tint: 'tint',
      eyebrow: 'Ein echtes Düsseldorfer Projekt',
      h2: 'Wo stehen die meisten Brunnen? Ein Projekt mit der Brunnenliste der Stadt',
      lede: 'Die Landeshauptstadt Düsseldorf veröffentlicht eine Liste ihrer Brunnen als offene Daten. Ältere Kinder lernen damit, dass ein Programm auf die Frage "Wer hat am wenigsten?" zwar eine Antwort gibt, aber nicht unbedingt die ganze.',
      body: [
        { kind: 'two',
          leftH3: 'Die Daten',
          left: [
            'Der Datensatz Brunnen in Düsseldorf steht über Open.NRW unter der Datenlizenz Deutschland Zero 2.0 frei zur Verfügung. Laut Beschreibung enthält er Bezeichnung und Standort der Brunnen der Landeshauptstadt. Am 3. November 2026 waren es 69 Einträge, vom Gänsebrunnen in der Altstadt bis zum Märchenbrunnen im Hofgarten.',
            'Jede Zeile nennt eine Bezeichnung, einen Namen, die Straße und den Stadtteil. Wir haben die Datei als brunnen.csv gespeichert.'
          ],
          rightH3: 'Die Frage',
          right: [
            'In welchem Stadtteil stehen die meisten Brunnen, in welchem die wenigsten? Das erste Programm zählt für jeden Stadtteil, wie oft er vorkommt, und fragt dann nach dem größten und dem kleinsten Wert.',
            'Vorher soll Ihr Kind raten: Liegt die Altstadt vorn? Und gibt es eine klare Schlusslaterne?'
          ] },
        { kind: 'code', label: 'Version 1: zählen, Spitze und Ende suchen', lang: 'Python', code: V1, note: 'Ausgabe: <code>Brunnen: 69 in 26 Stadtteilen</code>, <code>Die meisten: Stadtmitte 8</code> und <code>Die wenigsten: Hellerhof 1</code>.' },
        { kind: 'p', mt: true, html: 'Die Stadtmitte liegt mit 8 Brunnen vorn, das stimmt. Aber Hellerhof als einziger Letzter? Hier lügt das Programm nicht, es verschweigt etwas. Die Funktion min() gibt immer genau einen Stadtteil zurück, nämlich den ersten mit dem kleinsten Wert, den sie findet. Ob andere Stadtteile genauso wenige Brunnen haben, sagt sie nicht. Das muss man selbst prüfen.' },
        { kind: 'code', label: 'Version 2: nach Gleichständen suchen', lang: 'Python', code: V2, note: 'Läuft nach Version 1. Ausgabe: <code>Gleichstand bei 1 Brunnen: 5 Stadtteile</code>, <code>Flingern Nord, Hellerhof, Kalkum, Oberkassel, Rath</code> und <code>Genau zwei Brunnen: 13 Stadtteile</code>.' },
        { kind: 'p', html: 'Fünf Stadtteile teilen sich den letzten Platz mit je einem Brunnen, und genau zwei Brunnen haben sogar 13 Stadtteile. "Die wenigsten: Hellerhof" war also nur eine von fünf richtigen Antworten. Und es gibt einen zweiten Haken: Ein Stadtteil ganz ohne Brunnen kommt in der Liste gar nicht vor, also zählt ihn das Programm auch nicht mit. "Am wenigsten" heißt hier nur: am wenigsten unter den 26 Stadtteilen, die in der Liste stehen.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Brunnen je Stadtteil, die Spitze und der Schluss (unsere Auszählung)', head: ['Stadtteil', 'Brunnen in der Liste'], rows: [
          ['Stadtmitte', '8'],
          ['Wersten', '6'],
          ['Oberbilk', '5'],
          ['Altstadt, Garath, Pempelfort, Urdenbach', 'je 4'],
          ['Flingern Nord, Hellerhof, Kalkum, Oberkassel, Rath', 'je 1']
        ] },
        { kind: 'source', html: 'Daten: Landeshauptstadt Düsseldorf, Brunnen in Düsseldorf, Datenlizenz Deutschland Zero 2.0, heruntergeladen am 3. November 2026. Die Zählung je Stadtteil und die Tabelle haben wir selbst erstellt. Fünf der sechs Einträge in Wersten liegen an derselben Adresse, Siegburger Straße / Südpark.' },
        { kind: 'ol', mt: true, items: [
          '<strong>6 bis 8 Jahre, ohne Bildschirm.</strong> Würfeln Sie zu dritt je einmal. Wer hat die kleinste Zahl? Was sagen Sie, wenn zwei dieselbe Zahl haben?',
          '<strong>8 bis 10 Jahre, mit Scratch.</strong> Legen Sie eine Liste mit fünf Zahlen an, in der die kleinste zweimal vorkommt. Bauen Sie ein Programm, das beide Plätze nennt.',
          '<strong>Mit 10 bis 12 Jahren, in Python.</strong> Version 1 laufen lassen, dann selbst ein Programm schreiben, das alle Stadtteile mit dem kleinsten Wert ausgibt.',
          '<strong>Weiterdenken.</strong> In Wersten stehen fünf Einträge an derselben Adresse. Zählen Sie Orte statt Einträge: Liegt Wersten dann immer noch auf Platz zwei?'
        ] }
      ]
    },
    {
      id: 'wettbewerbe',
      eyebrow: 'Wettbewerbe 2026/27',
      h2: 'Welche Wettbewerbe passen zu Kindern zwischen 8 und 12?',
      lede: 'Zwei bundesweite Wettbewerbe stehen 2026/27 an, beide über die Schule: einer im November, einer im April.',
      body: [
        { kind: 'two',
          leftH3: 'Informatik-Biber',
          left: [
            'Hinter dem Informatik-Biber stehen die Bundesweiten Informatikwettbewerbe. Mitmachen können Schülerinnen und Schüler von Klasse 3 bis 13, gratis und online, und Programmieren muss dafür niemand können. Ein Kind in Klasse 5 oder 6, also im Jahr des Pflichtfachs, löst zwölf Aufgaben in 35 Minuten.',
            'Gespielt wird 2026 vom 9. bis 20. November. Nur Schulen können anmelden, die Ergebnisse folgen im Dezember 2026.'
          ],
          rightH3: 'Känguru der Mathematik',
          right: [
            'Für Kinder, die gern rechnen und knobeln: Der Känguru-Wettbewerb ist 2027 auf den 8. April verlegt, weil der übliche Termin im März fast überall kurz vor den Osterferien läge. In Klasse 3 bis 6 sind es 24 Aufgaben in 75 Minuten.',
            'Angemeldet wird über die Schule, im Zeitraum 1. Dezember 2026 bis 31. Januar 2027.'
          ] },
        { kind: 'p', mt: true, html: 'Wir verwenden keine Original-Aufgaben aus diesen Wettbewerben. Unsere Mentoren denken sich eigene Rätsel im selben Geist aus, und wir sind mit keinem der Veranstalter verbunden. Wenn die Schule Ihres Kindes nicht teilnimmt, lohnt sich eine kurze Nachfrage bei der Lehrkraft für Informatik oder Mathematik.' }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Wann ist der Unterricht in deutscher Zeit?',
      lede: 'Gefragt sind Nachmittage nach der Schule und der Samstagvormittag. Hier einige Beispiele mit der Uhrzeit beim Mentor.',
      body: [
        { kind: 'table', numCols: [], caption: 'Beispielzeiten in Düsseldorf und die indische Zeit', head: ['Düsseldorf', 'Indien, Winterzeit (bis 28. März 2027)', 'Indien, Sommerzeit (ab 28. März 2027)'], rows: [
          ['15:35', '20:05', '19:05'],
          ['17:10', '21:40', '20:40'],
          ['Samstag 10:05', '14:35', '13:35']
        ] },
        { kind: 'source', html: 'Die gesetzliche Zeit in Deutschland regelt das Einheitenzeitgesetz: UTC+1 im Winter, UTC+2 während der Sommerzeit. Diese endete am 25. Oktober 2026 und beginnt am 28. März 2027 wieder. Indien hat keine Zeitumstellung (UTC+5:30); der Mentor ist uns derzeit um viereinhalb Stunden voraus, ab Ende März um dreieinhalb. Die Beispiele sind keine festen Gruppentermine.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Schulferien in Nordrhein-Westfalen, Schuljahr 2026/27', head: ['Ferien', 'Zeitraum'], rows: [
          ['Herbstferien', '17.10. bis 31.10.2026'],
          ['Weihnachtsferien', '23.12.2026 bis 06.01.2027'],
          ['Osterferien', '22.03. bis 03.04.2027'],
          ['Pfingstferien', '18.05.2027'],
          ['Sommerferien', '19.07. bis 31.08.2027']
        ] },
        { kind: 'source', html: 'Quelle: Kultusministerkonferenz, Ferienkalender 2026/27, Zeile Nordrhein-Westfalen. Winterferien gibt es in NRW in diesem Schuljahr nicht.' },
        { kind: 'p', mt: true, html: 'In den Ferien geht der Unterricht weiter, weil sich unsere Mentoren nicht nach dem NRW-Kalender richten. Wer verreist, kann pausieren oder von unterwegs teilnehmen, etwa in den langen Sommerferien bis Ende August 2027.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Unsere Stufen',
    h2: 'Vom ersten Block bis zum Pflichtfach und weiter',
    lede: 'Unsere eigenen Stufen, neben den NRW-Stundenplan gestellt. Sie helfen bei der Einteilung und bei den Rückmeldungen an Sie.',
    table: { caption: 'Programmieren mit 6 bis 12 Jahren: unsere Stufen und die Schule in NRW', head: ['Stufe', 'Alter etwa', 'Was gelingt', 'Schule in NRW'], rows: [
      ['1. Abfolgen', '6 bis 7', 'Eine Figur mit einer Reihe von Befehlen bewegen', 'Grundschule'],
      ['2. Schleifen', '7 bis 9', 'Bewegungen wiederholen, auf Tasten reagieren', 'Grundschule'],
      ['3. Variablen', '8 bis 10', 'Punkte zählen und Werte in Listen sammeln', 'Klasse 3 und 4'],
      ['4. Python', '9 bis 11', 'Kurze Programme mit if und for tippen', 'Klasse 5: Pflichtfach beginnt'],
      ['5. Daten', '10 bis 12', 'Eine echte Liste auszählen und Gleichstände erkennen', 'Klasse 5 und 6: Pflichtfach']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Stufe 5 ist das Brunnen-Projekt. Es geht nicht um die Zahl 8, sondern um ein Kind, das fragt: "Ist das wirklich der einzige?"',
      'Unsere Berichte beschreiben, was Ihr Kind gebaut und erklärt hat.'
    ] },
    right: { h3: 'Für Kinder', ps: [
      'Ein Programm nennt oft nur einen Sieger. Es lohnt sich zu schauen, ob noch jemand gleich viele Punkte hat.',
      'Wer nicht auf der Liste steht, wird auch nicht gezählt.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse für Düsseldorfer Kinder',
    lede: 'Live und auf Englisch, mit demselben Mentor jede Woche; als Gruppe oder als Einzelunterricht.',
    bands: [
      { num: 'I', h3: 'Für den Anfang', sub: '6 bis 14 Jahre', courses: [
        { code: 'PDU / START / 01', slug: 'scratch-programming-complete-course', title: 'Scratch für Kinder', blurb: 'Eigene Spiele in drei bis vier Monaten, 6 bis 12.' },
        { code: 'PDU / START / 02', slug: 'kids-coding-blocks-masterclass', title: 'Programmieren für Kinder', blurb: 'Der lange Weg von Blöcken zu Apps, 6 bis 12.' },
        { code: 'PDU / START / 03', slug: 'ai-literacy-for-kids-course', title: 'KI verstehen', blurb: 'Was künstliche Intelligenz kann und was nicht, 8 bis 14.' }
      ] },
      { num: 'II', h3: 'Spielen und Bauen', sub: '7 bis 17 Jahre', courses: [
        { code: 'PDU / SPIEL / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft programmieren', blurb: 'Code in einer bekannten Spielwelt, 7 bis 12.' },
        { code: 'PDU / SPIEL / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox-Spiele', blurb: 'Spiele selbst in Luau schreiben, 8 bis 14.' },
        { code: 'PDU / SPIEL / 03', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Spiele mit Godot', blurb: 'Eine echte Spiele-Engine, 10 bis 17.' }
      ] },
      { num: 'III', h3: 'Größere Projekte', sub: '8 bis 15 Jahre', courses: [
        { code: 'PDU / PROJ / 01', slug: 'block-coding-app-development-masterclass', title: 'Apps mit Blöcken', blurb: 'Handy-Apps, die wirklich laufen, 8 bis 12.' },
        { code: 'PDU / PROJ / 02', slug: 'kids-ai-web-development-course', title: 'Webseiten bauen', blurb: 'Die erste eigene Website, 9 bis 12.' },
        { code: 'PDU / PROJ / 03', slug: 'maths-through-coding', title: 'Mathe mit Python', blurb: 'Schulmathematik im Code, 10 bis 15.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'So läuft es ab',
    h2: 'Wie der Live-Unterricht in eine Düsseldorfer Woche passt',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Nachmittag', l: 'Nach der Schule in Düsseldorf, wenn die Hausaufgaben erledigt sind.' },
      { time: 'Wochenende', l: 'Vormittags, wenn jüngere Kinder ausgeruht sind.' },
      { time: 'Einzeln', l: 'Zu einem Termin, den Sie mit dem Mentor festlegen.' }
    ],
    cells: [
      { h3: 'Ein Mentor', p: 'Das ganze Jahr dieselbe Ansprechperson.' },
      { h3: 'Geduld', p: 'Erklärungen so oft wie nötig.' },
      { h3: 'Aktiv', p: 'Das Kind programmiert selbst, von Anfang an.' },
      { h3: 'Gleichaltrige', p: 'Gruppen nach Alter getrennt.' },
      { h3: 'Rückmeldung', p: 'Kurze Berichte an die Eltern.' },
      { h3: 'Zwei Wege', p: 'Gruppe mit fünfzehn bis zwanzig Kindern oder einzeln.' }
    ]
  },

  projectsH2: 'Was ältere Lernende bauen',
  projectsLede: 'Aus kleinen Spielen werden mit den Jahren echte Anwendungen. Hier eine Auswahl von Projekten älterer Lernender; mehr zeigt die englischsprachige Seite <a class="ag-inline-link" href="/student-labs">Student labs</a>.',
  reviewsLede: 'Bewertungen von Eltern und Lernenden bei Google, wörtlich und auf Englisch.',

  fees: {
    h2: 'Kosten für Düsseldorfer Familien',
    lede: 'Abgerechnet wird pro Monat, für acht Live-Stunden. Zur Orientierung nennen wir den Preis in Euro nach dem Referenzkurs der Europäischen Zentralbank. Die eigentliche Zahlung erfolgt in US-Dollar und wird von Ihrer Bank umgerechnet, weshalb der Euro-Betrag auf dem Kontoauszug ein wenig abweichen kann.',
    free: ['Eine kostenlose erste Stunde', 'Ein Rätsel und ein erstes eigenes Programm', 'Ohne Kartenangabe'],
    group: ['Fünfzehn bis zwanzig Kinder ähnlichen Alters', 'Ein fester Mentor', 'Zwei Stunden pro Woche', 'Monatlich beendbar'],
    one: ['Ihr Kind allein mit dem Mentor', 'Tempo und Themen nach Ihrem Kind', 'Zeiten nach Absprache']
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    h2: 'Programmieren lernen für Kinder in Düsseldorf: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein. Wir unterrichten immer live und nur auf Englisch. Gerade das nützt vielen Kindern: Sie lernen zwei Dinge gleichzeitig, Programmieren und Englisch, und die Befehle einer Programmiersprache sind ohnehin englische Wörter. Der Mentor spricht langsam und richtet sich nach Ihrem Kind.' },
      { q: 'Ist Informatik in NRW ein Pflichtfach?', a: 'Ja, in den Klassen 5 und 6. Der Informatik-Monitor 2026/27 beschreibt Informatik in Nordrhein-Westfalen als Pflichtfach in diesen beiden Jahrgangsstufen an allen allgemeinbildenden Schularten. Ab Klasse 7 wird es zum Wahlpflichtfach.' },
      { q: 'Lohnt sich ein Kurs schon in der Grundschule?', a: 'Für viele Kinder ja. Wer mit sieben oder acht Jahren Spiele in Scratch gebaut hat, beginnt das Pflichtfach in Klasse 5 entspannt und neugierig. Starten kann Ihr Kind bei uns ab sechs Jahren.' },
      { q: 'Helfen Sie auch beim Schulfach Informatik?', a: 'Ja. Unser Kurs Informatik Companion für 10 bis 16 Jahre begleitet den Unterricht von Klasse 5 bis 10, und im Einzelunterricht kann der Mentor mit Ihrem Kind dessen Arbeitsblätter durchgehen. Für Noten zählt immer der Unterricht an der Schule.' },
      { q: 'Wann finden die Stunden statt?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. Viele Düsseldorfer Kinder lernen zwischen etwa 15 und 18 Uhr.' },
      { q: 'Wie nimmt mein Kind am Informatik-Biber teil?', a: 'Über die Schule, denn nur Schulen können anmelden. Die Biberwochen 2026 sind vom 9. bis 20. November; die Teilnahme kostet nichts, Vorkenntnisse sind nicht nötig. Fragen Sie die Lehrkraft, ob die Schule mitmacht.' },
      { q: 'Wo leben die Mentoren?', a: 'In Indien, von dort unterrichten sie live über Video; wenn es in Düsseldorf 17:10 Uhr ist, ist es beim Mentor im Winter 21:40 Uhr. Ihr Kind hat immer denselben Mentor.' },
      { q: 'Gibt es in den NRW-Ferien Unterricht?', a: 'Ja, der Unterricht läuft weiter, auch in den Herbst-, Weihnachts- und Osterferien. Wer in den Sommerferien vom 19. Juli bis 31. August 2027 verreist, kann pausieren und danach wieder einsteigen.' },
      { q: 'Was kostet es, und wie wird bezahlt?', a: 'Sie zahlen monatlich. Wir zeigen den Preis in Euro nach dem Referenzkurs der Europäischen Zentralbank; abgebucht wird in US-Dollar, und die Umrechnung macht Ihre Bank. Deshalb sind kleine Unterschiede auf dem Kontoauszug möglich. Die erste Stunde kostet nichts.' },
      { q: 'Was baut mein Kind?', a: 'Die Jüngeren gestalten Spiele und kleine Geschichten in Scratch. Ab etwa neun Jahren kommen Python-Programme dazu, Zeichnungen mit Code und kleine Spiele, und mit zehn bis zwölf Jahren erste Datenprojekte wie die Brunnenliste auf dieser Seite.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weitere Seiten',
    h2: 'Weiterlesen',
    lede: 'Mehr für Familien in Düsseldorf und Deutschland, teilweise auf Englisch.',
    items: [
      { href: '/coding-classes-for-kids-berlin', label: 'Coding classes for kids in Berlin', p: 'Programmieren für Berliner Kinder, auf Englisch.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Informatik von Klasse 5 bis zum Abitur.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik in German schools by state', p: 'Informatik in allen 16 Ländern.' },
      { href: '/coding-classes-in-north-rhine-westphalia', label: 'Coding classes in North Rhine-Westphalia', p: 'Unsere Seite für ganz NRW, auf Englisch.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Der Überblick über alle Seiten.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Wie eine Live-Stunde aussieht.' }
    ]
  },

  start: {
    h2: 'Erste Stunde kostenlos ausprobieren',
    lede: 'Gemeinsam mit dem Mentor löst Ihr Kind ein kleines Rätsel und schreibt sein erstes Programm. Danach wissen Sie beide, ob die Chemie stimmt, und der Mentor empfiehlt Kurs und Altersgruppe.',
    readFirst: 'Wer vorher mehr lesen möchte: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> beschreibt den Ablauf einer Stunde, <a class="ag-inline-link" href="/courses">All courses</a> enthält die Lehrpläne (jeweils auf Englisch).',
    note: 'Unsere Stunden sind live online, auf Englisch, mit Mentoren aus Indien. Auf WhatsApp antworten wir am schnellsten.',
    formNote: 'Kostenlos und unverbindlich, ohne Karte.'
  },

  footer: {
    cols: [
      { h4: 'Für Kinder', links: [
        { href: '/courses/python-ai-kids-masterclass', label: 'Python und KI' },
        { href: '/courses/informatik-companion-course-klasse-5-10', label: 'Informatik Companion' },
        { href: '/courses/problem-solving-and-computational-thinking-for-kids', label: 'Logisch denken' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/informatik-biber-practice-in-english', label: 'Biber-Übungen' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Gibt es einen Gleichstand?'
  },

  personalityCss: `
.ag-root.ag-pdu .ag-hero h1 { letter-spacing: -0.011em; }
.ag-root.ag-pdu .ag-capsule { border-left-width: 4px; border-radius: 8px; }
.ag-root.ag-pdu .ag-section-head h2 { max-width: 31ch; hyphens: auto; }
.ag-root.ag-pdu .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-pdu .ag-band-head h3 { letter-spacing: -0.003em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Nordrhein-Westfalen); KMK Primarbereich und Ferienkalender 2026/27; Bundesweite Informatikwettbewerbe (Biber 2026); Känguru der Mathematik (2027); Einheitenzeitgesetz; Destatis GV-ISys. Data: Landeshauptstadt Düsseldorf, Brunnen in Düsseldorf, Datenlizenz Deutschland Zero 2.0.',
    localProject: 'Die Düsseldorfer Brunnen: an original Python project on the city\'s list of 69 fountains in 26 Stadtteile; max() correctly names Stadtmitte with 8, min() names only Hellerhof although five Stadtteile share the lowest count of 1, and Stadtteile without a fountain are absent from the count; screen-free and Scratch versions. Lesson family: min() and max() name one winner; look for ties and for what is missing.',
    requiredMentions: ['brunnen.csv', 'Brunnen: 69 in 26 Stadtteilen', 'Die wenigsten: Hellerhof 1', 'Gleichstand bei 1 Brunnen: 5 Stadtteile', 'Flingern Nord, Hellerhof, Kalkum, Oberkassel, Rath', 'An allen allgemeinbildenden Schularten wird das Pflichtfach Informatik', '19.07. bis 31.08.2027', 'Gibt es einen Gleichstand?'],
    sources: [
      { claim: 'NRW: Pflichtfach Informatik in Klasse 5 und 6; Wahlpflicht danach; Gymnasium 9 und 10.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'NRW-Ferien 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Informatik-Biber 2026.', url: 'https://bwinf.de/biber/2026/' },
      { claim: 'Känguru 2027 am 8. April.', url: 'https://www.mathe-kaenguru.de/' },
      { claim: 'Brunnen in Düsseldorf, Lizenz.', url: 'https://ckan.govdata.de/dataset/brunnen-in-dusseldorf' }
    ],
    rejectedClaims: [
      'Unterricht auf Deutsch: nicht angeboten, offen gesagt.',
      'Wie viele Stadtteile Düsseldorf insgesamt hat: nicht aus den Quellen dieser Seite belegt, daher nicht genannt.',
      'Förderung über Bildungsgutschein oder Lernförderung: nicht vorhanden, nicht behauptet.',
      'Eine Verbindung zur Stadt, zum Schulministerium oder zu den Wettbewerben: keine.'
    ]
  }
};
