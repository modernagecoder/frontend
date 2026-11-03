'use strict';
// Programmieren lernen für Kinder in Nürnberg (ag- German city door, Germany cluster P5 row DE136).
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; German pages
// say so ("auf Englisch") and frame it as a benefit. Formal "Sie". Pages show euro, checkout charges USD.
// Angle (German parents of children 6 to 12 in Nürnberg): the Übertritt after Klasse 4 decides how much Informatik a
// Bavarian child gets; what that means for a primary-school child now; why English lessons are a double gain; the
// Pangea-Mathematikwettbewerb 2027 as a first contest; and an original project on the city's list of weekly markets,
// where searching the text for a weekday misses a market that is open "Montag bis Freitag".
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/de/; read 2 and 3 Nov 2026):
//  - GI Informatik-Monitor 2026/27, Bayern page (facts-school/src/infmon-bayern/): "Die Grundschule umfasst die
//    Jahrgangsstufen 1 bis 4"; Mittelschule "das verbindliche Fach Informatik im Umfang von je einer Wochenstunde" in
//    5 to 10 (FACTS 69), Wahlfach "Informatik und digitales Gestalten" 7 to 10 two hours; Realschule "das verpflichtende
//    Fach Informationstechnologie in den Jahrgangsstufen 5 bis 10"; Gymnasium Natur und Technik "in den Jahrgangsstufen
//    6 und 7 im Umfang von je einer Wochenstunde der Schwerpunkt Informatik" (70); Jahrgangsstufe 11 "verpflichtend
//    zweistündig Informatikunterricht" (71); Abitur central, "Programmieraufgaben auf Papier, jedoch keine praktischen
//    Anteile am Rechner" (72); G9 with Einführungsphase 11 (49).
//  - Pangea-Mathematikwettbewerb (facts-school/src/pangea-termine/, pangea-ablauf/): "ANMELDEBEGINN: 01. Oktober 2026
//    ANMELDESCHLUSS: 17.02.2027 VORRUNDE: 23.02.–03.03.2027 (Papierform + online)" (189); "ZWISCHENRUNDE:
//    21.04.–22.04.2027 (nur in Papierform) FINALE & PREISVERLEIHUNG: Samstag, 12.06.2027" (190); "15 (Klasse 3&4) bzw.
//    20 Aufgaben ... innerhalb von 45-60 Minuten" (191); "die ersten 500 Schülerinnen und Schüler je Klassenstufe" (192);
//    "Die Anmeldung kann klassen- oder klassenstufenweise" via the registration portal, by teachers; no calculator or
//    formula book.
//  - KMK Ferien 2026/27 row "Bayern": Herbst 02.11. - 06.11.; Weihnachten 24.12. - 08.01.; Winter 08.02. - 12.02.;
//    Ostern 22.03. - 02.04.; Pfingsten 18.05. - 28.05.; Sommer 02.08. - 13.09.
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Nürnberg 529,508.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Nürnberg via open.bydata, "Nürnberg: Städtische Einrichtungen – Wochenmärkte",
//    https://ckan.govdata.de/dataset/nurnberg-stadtische-einrichtungen-wochenmarkte, licence CC BY 4.0, CSV
//    2026_Städtische_Einrichtungen_Wochenmärkte.csv from dokumente.nuernberg.de (2,087 bytes, Latin-1, sha256
//    2dcde619...a6bba321d7d), downloaded 3 Nov 2026. Ten markets; column Öffnungszeiten as free text, e.g. Schillerplatz
//    "Montag bis Freitag von 8.00 bis 18.00 Uhr,Samstag von 8.00 bis 14.00 Uhr".
//  - gkd.bayern.de (Pegnitz gauge, a candidate dataset) answered "Request Rejected"; statistikdaten.bayern.de answered
//    403. Both stopped, not retried.
// Our own calculations (scratchpad de/w/C4/pnu/v1.py, v2.py, python3 -I): v1 prints only "Dienstag offen: Palmplatz";
// v2 prints Montag 1, Dienstag 2 (Palmplatz, Schillerplatz), Mittwoch 3, Donnerstag 3, Freitag 4, Samstag 5.
// Lesson family: searching the text is not understanding it; turn words like "bis" into data (a range) before you ask.

const { DE: DE_DE } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'with open("wochenmaerkte.csv", encoding="utf-8") as f:',
  '    maerkte = list(csv.DictReader(f, delimiter=";"))',
  '',
  'for m in maerkte:',
  '    if "Dienstag" in m["zeiten"]:',
  '        print("Dienstag offen:", m["name"])'
].join('\n');

const V2 = [
  'TAGE = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]',
  '',
  'def tage_aus(text):',
  '    tage = set()',
  '    for teil in text.split(","):',
  '        namen = [t for t in TAGE if t in teil]',
  '        if len(namen) == 2 and namen[0] + " bis " + namen[1] in teil:',
  '            von = TAGE.index(namen[0])',
  '            bis = TAGE.index(namen[1])',
  '            for i in range(von, bis + 1):',
  '                tage.add(TAGE[i])',
  '        else:',
  '            tage.update(namen)',
  '    return tage',
  '',
  'for tag in TAGE:',
  '    offen = [m["name"] for m in maerkte if tag in tage_aus(m["zeiten"])]',
  '    print(tag, len(offen), offen)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'stadt', label: 'Nürnberg: Programmieren für Kinder' },
  slug: 'programmieren-lernen-kinder-nuernberg',
  code: 'pnu',
  accent: '#5E2831',
  accentRationale: 'Programmieren lernen für Kinder in Nürnberg: ein dunkles Ochsenblutrot #5E2831, tiefer als das Sandsteinrosa der englischen Nürnberg-Seite; Kontrast 9.35 auf dem Papierton #FBF8F2 und über 4.5 auf allen drei Papiertönen',
  pageType: 'market',
  market: DE_DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Programmieren lernen für Kinder in Nürnberg',
  title: 'Programmieren lernen für Kinder in Nürnberg: live auf Englisch',
  description: 'Programmieren lernen für Kinder in Nürnberg von 6 bis 12: live online auf Englisch, Informatik nach Schulart in Bayern, Pangea 2027 und ein Projekt zu Wochenmärkten.',
  ogDescription: 'Live-Onlineunterricht auf Englisch für Nürnberger Kinder von 6 bis 12: wie viel Informatik Mittelschule, Realschule und Gymnasium bieten, der Pangea-Wettbewerb 2027 und ein Programmierprojekt mit den Nürnberger Wochenmärkten.',
  twitterDescription: 'Programmieren für Nürnberger Kinder, live auf Englisch: Informatik nach Schulart, Pangea 2027 und ein Wochenmarkt-Projekt.',
  pageName: 'Programmieren lernen für Kinder in Nürnberg',
  webPageDescription: 'Ein Leitfaden für Nürnberger Eltern von Kindern zwischen 6 und 12: Informatik an bayerischen Schulen nach dem Informatik-Monitor 2026/27, der Pangea-Mathematikwettbewerb 2027, die bayerischen Ferien und ein eigenes Python-Projekt mit der offenen Liste der Nürnberger Wochenmärkte.',
  courseDescription: 'Live-Onlinekurse auf Englisch für Nürnberger Kinder zwischen 6 und 12: Blockprogrammierung, danach Python und kleine Datenprojekte, als Gruppe mit fünfzehn bis zwanzig Kindern oder im Einzelunterricht, mit festem Mentor.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kinder in Nürnberg',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#bayern', label: 'Bayern' },
    { href: '#maerkte', label: 'Märkte' },
    { href: '#pangea', label: 'Pangea' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Nürnberg &middot; Programmieren für Kinder &middot; 6 bis 12 Jahre',
  h1: 'Programmieren lernen für Kinder in Nürnberg',
  lede: 'In Bayern entscheidet der Übertritt nach der vierten Klasse auch darüber, wie viel Informatik ein Kind bekommt: An der Mittelschule steht sie ab Klasse 5 jede Woche im Stundenplan, am Gymnasium zunächst nur als Schwerpunkt innerhalb von Natur und Technik. In der Grundschule gibt es sie gar nicht. Diese Seite ordnet das für Nürnberger Familien ein, beschreibt unseren Live-Unterricht auf Englisch für Kinder von 6 bis 12, stellt einen Mathe-Wettbewerb für 2027 vor und zeigt ein Programmierprojekt mit den Nürnberger Wochenmärkten.',
  secondaryCta: { href: '#maerkte', label: 'Zum Wochenmarkt-Projekt' },
  wa: 'Hallo Modern Age Coders, wir wohnen in Nürnberg und unser Kind möchte programmieren lernen. Können wir eine kostenlose Probestunde auf Englisch vereinbaren?',
  heroNote: 'Seit 2020 live online &middot; über 10.000 Lernende weltweit &middot; fester Mentor, Unterricht auf Englisch',
  spec: [
    ['Alter', '6 bis 12 Jahre, nach Alter getrennt'],
    ['Beginn', 'Bausteine, ab etwa neun Python'],
    ['Gruppe', 'Fünfzehn bis zwanzig Kinder oder einzeln'],
    ['Nürnberger Zeiten', 'Nachmittags oder samstags, flexibel'],
    ['Mentoren', 'Mit Sitz in Indien, live zugeschaltet'],
    ['Probestunde', 'Kostenlos, ohne Karte']
  ],
  capsuleQ: 'Auf einen Blick',
  capsule: 'Nürnberger Kinder zwischen 6 und 12 Jahren lernen bei Modern Age Coders programmieren, im Live-Onlineunterricht auf Englisch. Zuerst entstehen Spiele aus Bausteinen, ab etwa neun Jahren getippte Python-Programme und kleine Datenprojekte, zum Beispiel ein Wochenmarkt-Finder mit den offenen Daten der Stadt. Ein fester Mentor stimmt Tempo und Sprache auf Ihr Kind ab. Ihr Kind lernt in einer Gruppe von fünfzehn bis zwanzig Kindern oder im Einzelunterricht, nachmittags oder am Wochenende.',

  picks: {
    eyebrow: 'Womit Kinder anfangen',
    h2: 'Drei Kurse für Nürnberger Kinder',
    lede: 'Ein schneller Einstieg mit Scratch, ein Denkkurs für knifflige Aufgaben und ein Python-Kurs, der zu Projekten wie dem Marktkalender führt.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'PNU / 01', title: 'Scratch für Einsteiger', alt: 'Kursbild Scratch Coding for Kids', note: 'Ohne Vorkenntnisse, ab etwa sieben Jahren. Drei bis vier Monate, an deren Ende eigene Spiele stehen, ein guter Test, ob Programmieren Ihr Kind packt.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'PNU / 02', title: 'Knifflige Aufgaben lösen', alt: 'Kursbild Problem Solving for Kids', note: 'Für Sieben- bis Zwölfjährige. Muster erkennen, Regeln finden, Pläne in Schritten, hilfreich für Mathe-Wettbewerbe wie Pangea.' },
      { course: 'python-ai-kids-masterclass', code: 'PNU / 03', title: 'Python und erste KI', alt: 'Kursbild Python and AI for Kids', note: 'Für sichere Leserinnen und Leser von neun bis zwölf. Getippter Code, eigene Spiele, Zeichnen mit Code und Datenaufgaben wie der Marktkalender unten.' }
    ]
  },

  sections: [
    {
      id: 'bayern',
      eyebrow: 'Schule in Bayern',
      h2: 'Wie viel Informatik bekommt ein Nürnberger Kind in der Schule?',
      lede: 'In der Grundschule keine, danach je nach Schulart sehr unterschiedlich viel. Grundlage ist das Bayern-Kapitel des Informatik-Monitors 2026/27, den die Gesellschaft für Informatik aus den Schulordnungen der Länder zusammenstellt.',
      body: [
        { kind: 'two',
          leftH3: 'Klasse 1 bis 4',
          left: [
            'Die bayerische Grundschule umfasst die Jahrgangsstufen 1 bis 4. Ein Fach Informatik ist dort nicht vorgesehen; ob und wie Kinder mit Tablets oder Robotern arbeiten, entscheidet jede Schule für sich.',
            'Nach der vierten Klasse folgt der Übertritt an Mittelschule, Realschule oder Gymnasium. Damit fällt zugleich die Entscheidung, wie viel Informatik danach kommt.'
          ],
          rightH3: 'Ab Klasse 5',
          right: [
            'An der Mittelschule gibt es von Klasse 5 bis 10 das verbindliche Fach Informatik mit je einer Wochenstunde, dazu ab Klasse 7 das Wahlfach Informatik und digitales Gestalten. Die Realschule unterrichtet in Klasse 5 bis 10 das Pflichtfach Informationstechnologie.',
            'Am Gymnasium steckt Informatik in Klasse 6 und 7 als einstündiger Schwerpunkt im Fach Natur und Technik. In Klasse 11 haben dann alle Ausbildungsrichtungen zwei Pflichtstunden Informatik oder ein verwandtes Fach.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Informatik an bayerischen Schulen, Schuljahr 2026/27', head: ['Schulart', 'Klassen', 'Informatik im Stundenplan'], rows: [
          ['Grundschule', '1 bis 4', 'Kein eigenes Fach'],
          ['Mittelschule', '5 bis 10', 'Informatik, eine Wochenstunde, Pflicht; Wahlfach ab 7'],
          ['Realschule', '5 bis 10', 'Informationstechnologie, Pflichtfach'],
          ['Gymnasium', '6 und 7', 'Schwerpunkt Informatik in Natur und Technik, je eine Stunde'],
          ['Gymnasium', '11', 'Zwei Pflichtstunden in allen Ausbildungsrichtungen']
        ] },
        { kind: 'source', html: 'Quelle: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Kapitel Bayern, gelesen am 2. November 2026. Das bayerische Gymnasium ist wieder neunjährig, mit Klasse 11 als Einführungsphase. Im schriftlichen Informatik-Abitur, das zentral gestellt wird, wird größtenteils auf Papier programmiert, ohne Arbeit am Rechner.' },
        { kind: 'p', mt: true, html: 'Nürnberg hatte laut Destatis zum Jahresende 2024 genau 529.508 Einwohnerinnen und Einwohner. Für Familien in Fürth, Erlangen, Schwabach oder Feucht gelten dieselben bayerischen Regeln. Was das praktisch heißt: Ein Kind, das in der dritten Klasse anfängt, kleine Spiele zu bauen, hat bis zum Übertritt zwei Jahre Vorsprung, ganz gleich, welche Schulart es danach besucht. Auf dem Gymnasium hilft dieser Vorsprung besonders, denn dort kommt bis Klasse 11 nur wenig Informatik dazu.' }
      ]
    },
    {
      id: 'englisch',
      eyebrow: 'Unterricht auf Englisch',
      h2: 'Warum unterrichten Sie auf Englisch, und reicht das Englisch meines Kindes?',
      lede: 'Unsere Mentoren unterrichten auf Englisch, eine deutsche Fassung gibt es nicht. Für Kinder heißt das: Programmieren und Englisch zugleich, ohne zusätzlichen Termin.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Keine deutsche Variante', p: 'Einen Kurs auf Deutsch gibt es bei uns nicht. Das sagen wir gleich zu Beginn, damit Sie entscheiden können, bevor Sie eine Probestunde buchen.' },
          { h3: 'Vorkenntnisse reichen meist', p: 'Viele Wörter kennen Kinder aus Spielen schon: start, level, score, jump. Was fehlt, zeigt der Mentor am Bildschirm, statt es nur zu sagen.' },
          { h3: 'Der Mentor passt sich an', p: 'Er spricht langsam, wiederholt in einfacheren Worten und gewöhnt sich an die Aussprache Ihres Kindes. Ein deutsches Wort zwischendurch nimmt er gelassen auf.' }
        ] },
        { kind: 'p', mt: true, html: 'Die Mentoren arbeiten in Indien und unterrichten live per Video. Weil Indien der deutschen Zeit voraus ist, fällt ein Nürnberger Nachmittag in ihren Abend. Ihr Kind bleibt den ganzen Kurs über bei derselben Person. Die merkt schnell, ob Ihr Kind gern erst zuhört, lieber sofort ausprobiert oder eine schwierigere Zusatzaufgabe braucht, damit es nicht langweilig wird.' }
      ]
    },
    {
      id: 'maerkte',
      tint: 'tint',
      eyebrow: 'Ein Nürnberger Projekt',
      h2: 'Welche Nürnberger Wochenmärkte haben am Dienstag geöffnet?',
      lede: 'Die Stadt Nürnberg veröffentlicht ihre zehn Wochenmärkte als offene Daten, mit Öffnungszeiten in ganz normalen Sätzen. Ältere Kinder bauen daraus einen kleinen Marktkalender und lernen dabei, warum ein Programm einen Satz verstehen muss, statt nur darin zu suchen.',
      body: [
        { kind: 'two',
          leftH3: 'Die Daten',
          left: [
            'Die Datei der Stadt nennt für jeden Wochenmarkt Name, Adresse, Internetseite, Koordinaten und Öffnungszeiten. Die Öffnungszeiten stehen als Text da, etwa "Dienstag und Samstag von 7.00 bis 12.00 Uhr" für den Palmplatz.',
            'Wir übernehmen nur zwei Spalten, den Namen und die Zeiten, in eine Datei namens wochenmaerkte.csv.'
          ],
          rightH3: 'Die Frage',
          right: [
            'Ein Kind möchte wissen, wo es am Dienstag nach der Schule Obst kaufen könnte. Die naheliegende Idee: in jeder Zeile nach dem Wort Dienstag suchen.',
            'Das erste Programm macht genau das. Das zweite Programm liest die Sätze genauer und versteht, was das kleine Wort "bis" zwischen zwei Wochentagen bedeutet.'
          ] },
        { kind: 'code', label: 'Fassung 1: nach dem Wort suchen', lang: 'Python', code: V1, note: 'Ausgabe: <code>Dienstag offen: Palmplatz</code>.' },
        { kind: 'p', mt: true, html: 'Nur ein Markt? Der Schillerplatz hat auch dienstags geöffnet, denn bei ihm steht "Montag bis Freitag von 8.00 bis 18.00 Uhr". Das Wort Dienstag kommt in diesem Satz aber gar nicht vor. Die Suche hat den Text nicht verstanden, sie hat nur Buchstaben verglichen. Für das Programm muss "Montag bis Freitag" deshalb erst zu einer Liste von fünf Tagen werden.' },
        { kind: 'code', label: 'Fassung 2: Wochentage als Bereich verstehen', lang: 'Python', code: V2, note: 'Ausgabe: <code>Montag 1 [\'Schillerplatz\']</code>, <code>Dienstag 2 [\'Palmplatz\', \'Schillerplatz\']</code>, <code>Mittwoch 3 [\'Fritz-Munkert-Platz\', \'Johann-Adam-Reitenspieß-Platz\', \'Schillerplatz\']</code>, <code>Donnerstag 3 [\'Erlenstegen\', \'Gostenhof\', \'Schillerplatz\']</code>, <code>Freitag 4 [\'Fritz-Munkert-Platz\', \'Kobergerplatz\', \'Schillerplatz\', \'Kopernikusplatz\']</code> und <code>Samstag 5 [\'Fritz-Munkert-Platz\', \'Mögeldorf (Lukullus-Markt in Ebensee)\', \'Palmplatz\', \'Schillerplatz\', \'Heinrich-Böll-Platz\']</code>.' },
        { kind: 'p', html: 'Jetzt stimmt der Kalender. Die Funktion zerlegt jeden Satz an den Kommas, findet die Wochentage darin und füllt bei "bis" die Tage dazwischen auf. Bei "Mittwoch, Freitag und Samstag" bleiben es drei einzelne Tage, bei "Montag bis Freitag" werden es fünf. Ein schöner Nebenbefund: Das "bis" in "8.00 bis 18.00 Uhr" stört nicht, weil die Funktion nur dann einen Bereich bildet, wenn direkt zwei Wochentage um das "bis" herum stehen.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Geöffnete Wochenmärkte in Nürnberg nach Wochentag (eigene Auswertung)', head: ['Wochentag', 'Märkte geöffnet'], rows: [
          ['Montag', '1'],
          ['Dienstag', '2'],
          ['Mittwoch', '3'],
          ['Donnerstag', '3'],
          ['Freitag', '4'],
          ['Samstag', '5']
        ] },
        { kind: 'source', html: 'Daten: Stadt Nürnberg, Städtische Einrichtungen, Wochenmärkte (Datei 2026), über open.bydata, Lizenz CC BY 4.0, abgerufen am 3. November 2026. Die Zählung nach Wochentagen ist unsere eigene Auswertung der Öffnungszeiten in dieser Datei; vor einem Einkauf gelten die Angaben des Marktamts.' },
        { kind: 'ol', mt: true, items: [
          '<strong>6 bis 8 Jahre, mit einem Wochenplan.</strong> Schreiben Sie "Montag bis Mittwoch: Fußball" auf einen Zettel. Fragen Sie: Ist am Dienstag Fußball? Das Wort Dienstag steht nicht da, und trotzdem lautet die Antwort ja.',
          '<strong>8 bis 10 Jahre, in Scratch.</strong> Eine Liste mit den sechs Wochentagen anlegen. Eine Figur bekommt zwei Tage genannt und zählt alle Tage dazwischen laut auf.',
          '<strong>10 bis 12 Jahre, in Python.</strong> Fassung 1 ausführen, den Fehler beim Schillerplatz selbst finden und Fassung 2 zuerst ohne Vorlage versuchen.',
          '<strong>Weiterdenken.</strong> Am Schillerplatz endet der Samstag um 14.00 Uhr, an den übrigen Tagen um 18.00 Uhr. Erweitern Sie das Programm so, dass es auch die Uhrzeit prüft: Welche Märkte haben am Samstag um 13.30 Uhr noch offen?'
        ] }
      ]
    },
    {
      id: 'pangea',
      eyebrow: 'Ein Wettbewerb für 2027',
      h2: 'Welcher Mathe-Wettbewerb passt 2027 für ein Nürnberger Grundschulkind?',
      lede: 'Eine Möglichkeit ist der Pangea-Mathematikwettbewerb. Die Anmeldung für 2027 läuft bereits, und zwar über die Lehrkräfte.',
      body: [
        { kind: 'two',
          leftH3: 'Ablauf',
          left: [
            'In der Vorrunde bekommen Kinder der Klassen 3 und 4 fünfzehn Aufgaben, ältere Klassen zwanzig, jeweils mit 45 bis 60 Minuten Zeit. Taschenrechner und Formelsammlungen sind nicht erlaubt.',
            'Die ersten 500 jeder Klassenstufe erreichen die Zwischenrunde. Programmieren braucht es nicht, wohl aber genau das sorgfältige Durchdenken, das auch beim Programmieren zählt.'
          ],
          rightH3: 'Termine 2027',
          right: [
            'Laut Veranstalter beginnt die Anmeldung am 1. Oktober 2026, Anmeldeschluss ist der 17. Februar 2027. Die Vorrunde findet vom 23. Februar bis 3. März 2027 statt, auf Papier oder online.',
            'Die Zwischenrunde folgt am 21. und 22. April 2027, Finale und Preisverleihung am Samstag, 12. Juni 2027. Angemeldet wird klassen- oder klassenstufenweise durch die Lehrkraft.'
          ] },
        { kind: 'p', mt: true, html: 'Echte Pangea-Aufgaben verwenden wir nicht. Unsere Mentoren denken sich eigene Knobeleien aus, die ähnliche Fähigkeiten trainieren: Fälle durchprobieren, eine Regel entdecken, das Ergebnis prüfen. Mit dem Pangea-Wettbewerb oder einer Nürnberger Schule sind wir nicht verbunden. Für Kinder, die lieber knobeln als rechnen, läuft im Herbst zusätzlich der Informatik-Biber über die Schulen.' }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Zeiten',
      h2: 'Um wie viel Uhr kann mein Kind in Nürnberg lernen?',
      lede: 'Gruppen treffen sich nachmittags unter der Woche und am Wochenende; Einzelstunden vereinbaren Sie direkt. So lesen sich drei Beispielzeiten auf der Uhr des Mentors.',
      body: [
        { kind: 'table', numCols: [], caption: 'Beispielzeiten in Nürnberg und die Uhrzeit beim Mentor in Indien', head: ['Beginn in Nürnberg', 'In Indien, Winterhalbjahr', 'In Indien ab 28. März 2027'], rows: [
          ['15:50', '20:20', '19:20'],
          ['17:20', '21:50', '20:50'],
          ['Samstag 12:30', '17:00', '16:00']
        ] },
        { kind: 'source', html: 'Beispiele, keine festen Gruppentermine. Nach dem Einheitenzeitgesetz rechnet Deutschland im Winter mit MEZ (UTC+1), im Sommer mit MESZ (UTC+2). Die Uhren wurden am 25. Oktober 2026 zurückgestellt und werden am 28. März 2027 vorgestellt. In Indien gilt ganzjährig UTC+5:30; der Abstand beträgt deshalb im Winter viereinhalb und im Sommer dreieinhalb Stunden.' },
        { kind: 'p', mt: true, html: 'Die bayerischen Ferien unterbrechen den Unterricht nicht. Die KMK-Liste für 2026/27 nennt die Herbstferien vom 2. bis 6. November 2026, Weihnachten vom 24. Dezember 2026 bis 8. Januar 2027, die Frühjahrsferien vom 8. bis 12. Februar 2027, Ostern vom 22. März bis 2. April 2027, Pfingsten vom 18. bis 28. Mai 2027 und den Sommer vom 2. August bis 13. September 2027.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Fünf Stufen bis zum eigenen Datenprojekt',
    lede: 'Eine Einteilung, die wir selbst entwickelt haben. Wir ordnen damit Kinder einer Gruppe zu und beschreiben Ihnen, was sich getan hat.',
    table: { caption: 'Unsere Stufen für Kinder von 6 bis 12', head: ['Stufe', 'Ungefähres Alter', 'Ihr Kind'], rows: [
      ['1. Befehle', '6 bis 7', 'setzt Bausteine so zusammen, dass eine Figur sich bewegt'],
      ['2. Schleifen', '7 bis 8', 'nutzt einen Wiederhole-Block statt vieler Kopien'],
      ['3. Bedingungen', '8 bis 9', 'baut ein Spiel, das auf Eingaben reagiert'],
      ['4. Python', '9 bis 11', 'tippt Programme mit Listen und eigenen Funktionen'],
      ['5. Texte verstehen', '10 bis 12', 'macht aus einem Satz wie "Montag bis Freitag" verwertbare Daten']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Stufe 5 ist das Marktprojekt. Kinder lernen dabei, dass ein Computer nur vergleicht, was man ihm beigebracht hat, und dass Verstehen Arbeit ist.',
      'Unsere Rückmeldungen nennen Ergebnisse und Einsichten, keine Bildschirmminuten.'
    ] },
    right: { h3: 'Für Kinder', ps: [
      'Auch wenn ein Wort fehlt, kann die Antwort ja lauten. Wer den ganzen Satz liest, merkt das.',
      'Ein Programm wird mit genau dem Fall getestet, an den man zuletzt gedacht hätte.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse für Nürnberger Kinder',
    lede: 'Live und auf Englisch, mit einem Mentor, der bleibt, in der Gruppe oder allein.',
    bands: [
      { num: 'I', h3: 'Früher Einstieg', sub: '5 bis 10 Jahre', courses: [
        { code: 'PNU / FRUEH / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Denken für Sechsjährige', blurb: 'Reihenfolgen und Muster vor dem ersten Code.' },
        { code: 'PNU / FRUEH / 02', slug: 'kids-coding-blocks-masterclass', title: 'Ein Jahr Bausteine', blurb: 'Vom Spiel zur App, in Altersgruppen.' },
        { code: 'PNU / FRUEH / 03', slug: 'abacus-mental-maths-course-for-kids', title: 'Abakus und Kopfrechnen', blurb: 'Perlen zählen, dann im Kopf weiterrechnen.' }
      ] },
      { num: 'II', h3: 'Spiele bauen', sub: '7 bis 14 Jahre', courses: [
        { code: 'PNU / SPIEL / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft steuern', blurb: 'Eigene Befehle für eine vertraute Welt.' },
        { code: 'PNU / SPIEL / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox mit Luau', blurb: 'Skripte für eigene Spielwelten, 8 bis 14.' },
        { code: 'PNU / SPIEL / 03', slug: 'game-development-masterclass-for-kids', title: 'Drei Spielplattformen', blurb: 'Scratch, Roblox und Minecraft nacheinander.' }
      ] },
      { num: 'III', h3: 'Mehr entdecken', sub: '8 bis 15 Jahre', courses: [
        { code: 'PNU / MEHR / 01', slug: 'maths-through-coding', title: 'Rechnen mit Programmen', blurb: 'Mathethemen aus der Schule in Python erkundet.' },
        { code: 'PNU / MEHR / 02', slug: 'cpp-programming-for-kids-course', title: 'C++ zum Kennenlernen', blurb: 'Rätsel und kleine Spiele, 9 bis 12.' },
        { code: 'PNU / MEHR / 03', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Hackathon für Kinder', blurb: 'Zwölf Wochen bis zum fertigen Projekt.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Ablauf',
    h2: 'So sieht eine Unterrichtswoche für Nürnberger Familien aus',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Nachmittag', l: 'Nach dem Mittagessen und den Hausaufgaben.' },
      { time: 'Samstag', l: 'Mittags, ohne Schulstress im Nacken.' },
      { time: 'Einzeln', l: 'Ein Termin, den Sie mit dem Mentor abstimmen.' }
    ],
    cells: [
      { h3: 'Vertraute Person', p: 'Derselbe Mentor Woche für Woche.' },
      { h3: 'Einfaches Englisch', p: 'Langsam gesprochen und am Bildschirm gezeigt.' },
      { h3: 'Selbst tippen', p: 'Ihr Kind arbeitet, der Mentor begleitet.' },
      { h3: 'Gleichaltrige', p: 'Gruppen nach Alter und Erfahrung.' },
      { h3: 'Nachricht an Sie', p: 'Ein kurzer Stand nach dem Unterricht.' },
      { h3: 'Gruppe oder allein', p: 'Fünfzehn bis zwanzig Kinder oder Einzelunterricht.' }
    ]
  },

  projectsH2: 'Was ältere Lernende bei uns entwickelt haben',
  projectsLede: 'Aus kleinen Spielen in der Grundschulzeit werden oft beachtliche Projekte im Jugendalter. Einige sehen Sie unten; weitere zeigt die Seite <a class="ag-inline-link" href="/student-labs">Student Labs</a>.',
  reviewsLede: 'Was Eltern und Lernende auf Google geschrieben haben, ohne Änderungen.',

  fees: {
    h2: 'Preise für Nürnberger Familien',
    lede: 'Gezahlt wird monatlich, darin sind acht Live-Stunden enthalten. Die Euro-Angaben auf dieser Seite folgen dem Referenzkurs der Europäischen Zentralbank. Die tatsächliche Zahlung erfolgt in US-Dollar, und Ihre Bank übernimmt die Umrechnung; der Betrag auf dem Auszug kann deshalb ein wenig anders ausfallen.',
    free: ['Probestunde ohne Kosten', 'Eine Knobelaufgabe und ein erstes Programm', 'Ohne Kartenangabe'],
    group: ['Fünfzehn bis zwanzig Kinder ähnlichen Alters', 'Fester Mentor', 'Zwei Stunden pro Woche', 'Monatlich beendbar'],
    one: ['Ihr Kind mit seinem Mentor', 'Projekte nach den Interessen Ihres Kindes', 'Termine nach Ihrem Kalender']
  },

  faq: {
    eyebrow: 'Fragen aus Nürnberg',
    h2: 'Programmieren lernen für Kinder in Nürnberg: Fragen und Antworten',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein, nur auf Englisch, immer live. Ihr Kind gewinnt dadurch doppelt: Es lernt Programmieren und Englisch zugleich. Der Mentor spricht langsam, zeigt viel am Bildschirm und richtet sich nach Tempo und Aussprache Ihres Kindes. Programmierbefehle sind ohnehin englische Wörter.' },
      { q: 'Gibt es an Nürnberger Grundschulen Informatik?', a: 'Als Fach nicht. Die bayerische Grundschule umfasst die Klassen 1 bis 4 ohne Informatik. Informatik beginnt an Mittelschule und Realschule in Klasse 5, am Gymnasium in Klasse 6 als Schwerpunkt innerhalb von Natur und Technik.' },
      { q: 'Hat die Schulart nach dem Übertritt Einfluss auf Informatik?', a: 'Ja, deutlich. Die Mittelschule unterrichtet Informatik von Klasse 5 bis 10 jede Woche eine Stunde, die Realschule hat das Pflichtfach Informationstechnologie in Klasse 5 bis 10. Am Gymnasium gibt es in Klasse 6 und 7 je eine Wochenstunde Informatik innerhalb von Natur und Technik und in Klasse 11 zwei Pflichtstunden.' },
      { q: 'Mit wie vielen Jahren kann mein Kind beginnen?', a: 'Mit sechs. Die Jüngsten arbeiten mit Bildbausteinen, Lesen und Tippen sind noch nicht nötig. Etwa mit neun Jahren wechseln viele Kinder zu Python.' },
      { q: 'Zu welchen Zeiten findet der Unterricht statt?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.' },
      { q: 'Wann ist der Pangea-Wettbewerb 2027?', a: 'Die Vorrunde läuft vom 23. Februar bis 3. März 2027. Angemeldet wird über die Lehrkraft, klassenweise oder für eine ganze Klassenstufe; Anmeldeschluss ist der 17. Februar 2027. Kinder der Klassen 3 und 4 lösen fünfzehn Aufgaben.' },
      { q: 'Wo arbeiten die Mentoren?', a: 'In Indien, von wo aus sie live per Video unterrichten. Eine Stunde um 15:50 Uhr in Nürnberg beginnt dort im Winter um 20:20 Uhr. Ihr Kind behält seinen Mentor.' },
      { q: 'Lernt mein Kind in einer großen Gruppe?', a: 'Eine Gruppe umfasst fünfzehn bis zwanzig Kinder ähnlichen Alters. Wer lieber allein lernen möchte, wählt den Einzelunterricht mit zwei Stunden pro Woche.' },
      { q: 'Wie und in welcher Währung zahle ich?', a: 'Monatlich. Angezeigt werden Euro nach dem Referenzkurs der Europäischen Zentralbank; belastet wird in US-Dollar, Ihre Bank rechnet um, daher sind kleine Abweichungen normal. Die Probestunde kostet nichts und braucht keine Karte.' },
      { q: 'Was programmiert mein Kind?', a: 'Am Anfang Spiele und kurze Trickfilme aus Bausteinen. Später Python, Zeichnungen mit Code und ab etwa zehn Jahren eigene Auswertungen echter Daten, etwa einen Kalender der Nürnberger Wochenmärkte wie auf dieser Seite.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weiterlesen',
    h2: 'Verwandte Seiten',
    lede: 'Mehr für Familien in Nürnberg, Fürth und Erlangen.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Unsere Übersicht für ganz Deutschland.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Wenn Informatik nach dem Übertritt zum Schulfach wird.' },
      { href: '/math-and-coding-competitions-germany', label: 'Wettbewerbe in Deutschland', p: 'Mathe- und Informatikwettbewerbe im Überblick, auf Englisch.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik in allen Ländern', p: 'Bayern im Vergleich, auf Englisch.' },
      { href: '/minecraft-coding-classes-germany', label: 'Minecraft-Kurse', p: 'Für Kinder, die gern Welten bauen, auf Englisch.' },
      { href: '/how-we-teach', label: 'Unsere Stunden', p: 'Ablauf einer Live-Stunde, auf Englisch.' }
    ]
  },

  start: {
    h2: 'Probestunde ausmachen',
    lede: 'Die Probestunde ist eine Mischung aus Rätsel und erstem Programm. Der Mentor bekommt dabei ein Gefühl dafür, wie Ihr Kind denkt und wie viel Englisch es schon versteht, und schlägt danach einen Kurs vor.',
    readFirst: 'Zum Nachlesen: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> erklärt den Ablauf, die <a class="ag-inline-link" href="/courses">Kursseite</a> zeigt alle Lehrpläne.',
    note: 'Unterrichtet wird live online und nur auf Englisch, von Mentoren in Indien. Für Rückfragen eignet sich WhatsApp, bitte auf Englisch.',
    formNote: 'Kostenlos, ohne jede Verpflichtung.'
  },

  footer: {
    cols: [
      { h4: 'Für Kinder', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch für Kinder' },
        { href: '/python-for-10-year-olds', label: 'Python mit zehn' },
        { href: '/minecraft-coding-classes-germany', label: 'Minecraft-Kurse' },
        { href: '/math-and-coding-competitions-germany', label: 'Wettbewerbe' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online' },
        { href: '/student-labs', label: 'Projekte unserer Lernenden' },
        { href: '/how-we-teach', label: 'Unsere Stunden' }
      ] }
    ],
    bottomRight: 'Montag bis Freitag heißt auch Dienstag'
  },

  personalityCss: `
.ag-root.ag-pnu .ag-hero h1 { letter-spacing: -0.007em; max-width: 21ch; }
.ag-root.ag-pnu .ag-capsule { border-left-width: 4px; border-radius: 3px; }
.ag-root.ag-pnu .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-pnu .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-pnu .ag-code-head b { letter-spacing: 0.014em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27, Kapitel Bayern; Pangea-Mathematikwettbewerb, Termine und Ablauf 2027; KMK Ferien 2026/27; Destatis GV-ISys 31.12.2024; Einheitenzeitgesetz; gelesen am 2. und 3. November 2026. Stadt Nürnberg über open.bydata, Städtische Einrichtungen, Wochenmärkte, CC BY 4.0.',
    localProject: 'Ein Marktkalender für Nürnberg: ein eigenes Python-Projekt mit den zehn Wochenmärkten der Stadt, in dem die Textsuche nach "Dienstag" nur den Palmplatz findet, während eine Funktion, die "Montag bis Freitag" als Bereich versteht, auch den Schillerplatz erkennt; Ergebnis Montag 1, Dienstag 2, Mittwoch 3, Donnerstag 3, Freitag 4, Samstag 5 geöffnete Märkte; dazu Fassungen mit Wochenplan und in Scratch. Lesson family: searching the text is not understanding it; turn "bis" into a range.',
    requiredMentions: ['wochenmaerkte.csv', 'Dienstag offen: Palmplatz', 'Montag bis Freitag von 8.00 bis 18.00 Uhr', 'def tage_aus(text):', 'die Tage dazwischen auf', 'Lukullus-Markt in Ebensee', 'Anmeldeschluss ist der 17. Februar 2027', 'Montag bis Freitag heißt auch Dienstag'],
    sources: [
      { claim: 'Bayern: Grundschule Klasse 1 bis 4; Informatik an Mittelschule, Realschule und Gymnasium; Klasse 11; G9; Abitur auf Papier.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/bayern' },
      { claim: 'Pangea 2027: Anmeldung, Vorrunde, Zwischenrunde, Finale, Aufgabenzahl.', url: 'https://www.pangea-wettbewerb.de/termine/' },
      { claim: 'Pangea: Anmeldung durch Lehrkräfte, keine Hilfsmittel, 500 je Klassenstufe.', url: 'https://www.pangea-wettbewerb.de/ablauf/' },
      { claim: 'Bayerische Ferien 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Nürnberger Wochenmärkte mit Öffnungszeiten, Lizenz CC BY 4.0.', url: 'https://ckan.govdata.de/dataset/nurnberg-stadtische-einrichtungen-wochenmarkte' },
      { claim: 'Einwohnerzahl Nürnberg 529.508 (31.12.2024).', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/05-staedte.xlsx?__blob=publicationFile' }
    ],
    rejectedClaims: [
      'Aktuelle Öffnungszeiten einzelner Märkte zu garantieren: wir werten nur die Datei aus; maßgeblich ist das Marktamt.',
      'Nürnberger Schulen als Herkunft unserer Lernenden zu nennen: abgelehnt.',
      'Unterricht auf Deutsch: wir unterrichten nur auf Englisch und sagen das deutlich.',
      'Verbindung mit der Stadt Nürnberg, dem Freistaat Bayern oder dem Pangea-Wettbewerb: keine.'
    ]
  }
};
