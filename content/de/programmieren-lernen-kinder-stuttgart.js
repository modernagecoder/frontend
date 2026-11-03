'use strict';
// Programmieren lernen für Kinder in Stuttgart (ag- German city door, Germany cluster P5 row DE128).
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; German pages
// say so ("auf Englisch") and frame it as a benefit. Formal "Sie". Pages show euro, checkout charges USD.
// Angle (German parents of children 6 to 12 in Stuttgart): what Stuttgart schools offer before and after grade 5, why
// lessons in English are a double gain at this age, the Informatik-Biber 2026 as a free first contest, and an original
// project on the city's drinking-fountain register in which the list's title and its records disagree.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/de/; read 2 and 3 Nov 2026):
//  - GI Informatik-Monitor 2026/27, Baden-Württemberg page (facts-school/src/infmon-baden-wuerttemberg/): "Die
//    Grundschule umfasst die Jahrgangsstufen 1 bis 4"; Pflichtfach Informatik und Medienbildung from 2025/2026,
//    "zunächst in den Jahrgangsstufen 5 und 6" (FACTS 67); "insgesamt vier Wochenstunden" at Werkrealschule,
//    Hauptschule, Realschule and Gemeinschaftsschule; "Hierfür liegt noch kein Bildungsplan vor"; consultation 2026/2027,
//    "die Inkraftsetzung für August 2027"; "Aufbaukurs Informatik in der Jahrgangsstufe 7" still taught from 2026/2027
//    with the new Lesehilfe.
//  - bwinf.de (FACTS 129, 130, 132, 133, 135, 136): Biber free online quiz, "Jahrgangsstufen 3 bis 13, keine
//    Vorkenntnisse erforderlich"; primary pupils "neun Aufgaben in 30 Minuten", grades 5 and 6 "zwölf Aufgaben 35
//    Minuten"; "Die Biberwochen 2026 finden vom 9. bis 20. November statt."; "Schnupper-Biber ab 14. September 2026";
//    results December 2026, certificates January 2027.
//  - KMK Ferien 2026/27, row "Baden-Württemberg (4)": Weihnachten 23.12. - 09.01.; Ostern 25.03. and 30.03. - 03.04.;
//    Pfingsten 18.05. - 29.05.; Sommer 29.07. - 11.09.
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Stuttgart 612,663.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Landeshauptstadt Stuttgart (Tiefbauamt & Garten-, Friedhofs- und Forstamt) via Open Data BW, "Brunnen",
//    https://ckan.govdata.de/dataset/brunnend8874, licence CC BY 4.0, three WFS layers downloaded 3 Nov 2026 from
//    geoserver.stuttgart.de: Brunnen in Betrieb (300 features, sha256 a61e589c...4d5779576f), Trinkwasserbrunnen in
//    Betrieb (44 features, 46,380 bytes, sha256 114ae539...98f3b441d2), Mineralbrunnen in Betrieb (18 features,
//    sha256 fcf02853...8f90438db).
//    In the drinking-fountain layer 43 records say TRINKWASSER "Trinkwasser" and one, "Dürrlewang Park Trinkbrunnen01"
//    with no NAME, says "kein Trinkwasser"; one record (Der-Gute-Hirte-Brunnen) has STATUS_BEGRUENDUNG "Baustelle im
//    Umfeld" while STATUS is "in Betrieb". In the main layer ANLAGENART "Schwengelpumpe" occurs 83 times.
// Our own calculations (scratchpad de/w/C4/pst/v1.py, v2.py, v3.py, python3 -I): "Einträge in der Liste: 44";
// "Kein Trinkwasser: Dürrlewang Park Trinkbrunnen01 | Name: (leer)"; "Mit Trinkwasser: 43"; "Hinweis bei
// Der-Gute-Hirte-Brunnen: Baustelle im Umfeld"; "Trinkbar und ohne Hinweis: 42".
// Lesson family: the title of a list is only a claim; check every record's own fields before you count.

const { DE: DE_DE } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'with open("trinkbrunnen.csv", encoding="utf-8") as f:',
  '    brunnen = list(csv.DictReader(f, delimiter=";"))',
  '',
  'print("Einträge in der Liste:", len(brunnen))'
].join('\n');

const V2 = [
  'trinkbar = []',
  'for b in brunnen:',
  '    if b["trinkwasser"] == "Trinkwasser":',
  '        trinkbar.append(b)',
  '    else:',
  '        print("Kein Trinkwasser:", b["standort"], "| Name:", b["name"] or "(leer)")',
  'print("Mit Trinkwasser:", len(trinkbar))'
].join('\n');

const V3 = [
  'ohne_hinweis = 0',
  'for b in trinkbar:',
  '    if b["bemerkung"] == "":',
  '        ohne_hinweis = ohne_hinweis + 1',
  '    else:',
  '        print("Hinweis bei", b["name"] + ":", b["bemerkung"])',
  'print("Trinkbar und ohne Hinweis:", ohne_hinweis)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'stadt', label: 'Stuttgart: Programmieren für Kinder' },
  slug: 'programmieren-lernen-kinder-stuttgart',
  code: 'pst',
  accent: '#621D46',
  accentRationale: 'Programmieren lernen für Kinder in Stuttgart: ein tiefes Brombeerrot #621D46, dunkler als die beiden englischen Stuttgart-Seiten; Kontrast 9.56 auf dem Papierton #FBF8F2 und über 4.5 auf allen drei Papiertönen',
  pageType: 'market',
  market: DE_DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Programmieren lernen für Kinder in Stuttgart',
  title: 'Programmieren lernen für Kinder in Stuttgart: live auf Englisch',
  description: 'Programmieren lernen für Kinder in Stuttgart von 6 bis 12: live online auf Englisch, was die Schule ab Klasse 5 bietet, der Informatik-Biber und ein Brunnenprojekt.',
  ogDescription: 'Live-Onlineunterricht auf Englisch für Stuttgarter Kinder von 6 bis 12: was Grundschule und Klasse 5 an Informatik bieten, der kostenlose Informatik-Biber im November 2026 und ein Projekt mit den Stuttgarter Trinkbrunnen.',
  twitterDescription: 'Programmieren für Stuttgarter Kinder, live auf Englisch: Schule, Informatik-Biber und ein Trinkbrunnen-Projekt.',
  pageName: 'Programmieren lernen für Kinder in Stuttgart',
  webPageDescription: 'Ein Leitfaden für Stuttgarter Eltern von Kindern zwischen 6 und 12 Jahren: Informatik in Grundschule und Sekundarstufe nach dem Informatik-Monitor 2026/27, der Informatik-Biber 2026 und ein eigenes Programmierprojekt mit dem offenen Brunnenkataster der Stadt.',
  courseDescription: 'Live-Onlinekurse auf Englisch für Kinder von 6 bis 12 Jahren in Stuttgart: zuerst Blöcke, dann Python und kleine KI-Projekte, in einer Gruppe von fünfzehn bis zwanzig Kindern oder im Einzelunterricht, mit einem festen Mentor.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kinder in Stuttgart',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#schule', label: 'Schule' },
    { href: '#projekt', label: 'Projekt' },
    { href: '#biber', label: 'Biber' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Stuttgart &middot; Programmieren für Kinder &middot; 6 bis 12 Jahre',
  h1: 'Programmieren lernen für Kinder in Stuttgart',
  lede: 'Viele Stuttgarter Eltern fragen sich, ob ihr Kind in der Grundschule schon programmieren lernt. Die kurze Antwort lautet nein: In Baden-Württemberg beginnt Informatik als Pflichtfach erst in Klasse 5, und der Lehrplan für das neue Fach wird gerade erst geschrieben. Hier erfahren Sie, was die Schule wann bietet, wie unsere Live-Stunden auf Englisch für Sechs- bis Zwölfjährige ablaufen, welcher kostenlose Wettbewerb in wenigen Tagen beginnt und was ein Kind aus der Stuttgarter Trinkbrunnenliste über genaues Hinsehen lernen kann.',
  secondaryCta: { href: '#projekt', label: 'Zum Brunnenprojekt' },
  wa: 'Hallo Modern Age Coders, wir wohnen in Stuttgart und unser Kind möchte programmieren lernen. Können wir eine kostenlose Probestunde auf Englisch buchen?',
  heroNote: 'Live-Onlineunterricht seit 2020 &middot; mehr als 10.000 Lernende weltweit &middot; ein fester Mentor, Unterricht auf Englisch',
  spec: [
    ['Alter', '6 bis 12 Jahre, nach Alter gruppiert'],
    ['Einstieg', 'Blockprogrammierung, später Python'],
    ['Gruppe', 'Fünfzehn bis zwanzig Kinder oder Einzelunterricht'],
    ['Stuttgarter Zeiten', 'Nachmittags oder am Wochenende, flexibel'],
    ['Mentoren', 'Mit Sitz in Indien, live per Video'],
    ['Probestunde', 'Kostenlos, ohne Kreditkarte']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Stuttgarter Kinder zwischen 6 und 12 Jahren lernen bei Modern Age Coders programmieren: in Live-Stunden per Video, auf Englisch. Die Jüngeren bauen Spiele aus Blöcken, ab etwa neun Jahren schreiben sie echtes Python und kleine Datenprojekte, zum Beispiel mit der offenen Brunnenliste der Stadt. Ein fester Mentor richtet sich nach Tempo und Aussprache Ihres Kindes. Sie wählen zwischen einer Gruppe von fünfzehn bis zwanzig Kindern und Einzelunterricht, nachmittags oder am Wochenende.',

  picks: {
    eyebrow: 'Der Einstieg',
    h2: 'Drei Kurse für Stuttgarter Kinder',
    lede: 'Ein spielerischer Kurs für Erstklässler, ein Scratch-Kurs mit schnellen Erfolgen und ein Python-Kurs für Kinder, die schon flüssig lesen und tippen.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'PST / 01', title: 'Vom Block zur App', alt: 'Kursbild Coding for Kids', note: 'Für Kinder von 6 bis 12 in Altersgruppen. Ein Schuljahr lang Spiele und kleine Apps aus Blöcken, zum Schluss ein erster Blick darauf, wie eine KI entscheidet.' },
      { course: 'scratch-programming-complete-course', code: 'PST / 02', title: 'Scratch in drei Monaten', alt: 'Kursbild Scratch Coding for Kids', note: 'Für Kinder, die ohne Vorkenntnisse anfangen. Nach etwa drei Monaten stehen eigene Spiele, und Sie wissen, ob Programmieren Ihrem Kind Freude macht.' },
      { course: 'python-ai-kids-masterclass', code: 'PST / 03', title: 'Python und KI', alt: 'Kursbild Python and AI for Kids', note: 'Für Neun- bis Zwölfjährige. Getippter Code ab der ersten Stunde, Zeichnen mit der Schildkröte, kleine Spiele und Datenaufgaben wie die Brunnenliste unten.' }
    ]
  },

  sections: [
    {
      id: 'schule',
      eyebrow: 'Stuttgarter Schulen',
      h2: 'Lernt mein Kind in der Stuttgarter Grundschule programmieren?',
      lede: 'Im Stundenplan meist nicht. Grundlage der folgenden Angaben ist der Länderbericht Baden-Württemberg im Informatik-Monitor, den die GI für das Schuljahr 2026/27 herausgibt.',
      body: [
        { kind: 'two',
          leftH3: 'Grundschule: vier Jahre ohne Informatikfach',
          left: [
            'Die Grundschule umfasst in Baden-Württemberg die Klassen 1 bis 4. Ein eigenes Fach für Informatik gibt es dort nicht. Was Kinder an Medienbildung erleben, hängt stark von der einzelnen Schule und Lehrkraft ab.',
            'Für ein neugieriges Kind von sieben Jahren heißt das: Wenn es wissen will, wie ein Spiel funktioniert, findet es die Antwort vorerst nicht im Stundenplan.'
          ],
          rightH3: 'Ab Klasse 5: ein neues Pflichtfach',
          right: [
            'Seit dem Schuljahr 2025/26 führt das Land das Pflichtfach Informatik und Medienbildung ein, zunächst in Klasse 5 und 6, danach Jahr für Jahr aufwachsend. An Werkrealschule, Hauptschule, Realschule und Gemeinschaftsschule sind dafür insgesamt vier Wochenstunden vorgesehen.',
            'Der Monitor schreibt offen: "Hierfür liegt noch kein Bildungsplan vor." Die Anhörung ist für 2026/27 geplant, in Kraft treten soll der Bildungsplan im August 2027.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Informatik im Stuttgarter Schulweg, Stand Schuljahr 2026/27', head: ['Klasse', 'Schule', 'Was im Stundenplan steht'], rows: [
          ['1 bis 4', 'Grundschule', 'Kein Fach Informatik'],
          ['5 und 6', 'Alle weiterführenden Schularten', 'Pflichtfach Informatik und Medienbildung, neu seit 2025/26'],
          ['7', 'Alle Schularten', 'Bisheriger Aufbaukurs Informatik, ab 2026/27 mit neuer Lesehilfe'],
          ['8 bis 10', 'Weiterführende Schulen', 'Das neue Fach wächst nach oben; alte Wahlangebote laufen aus'],
          ['Oberstufe', 'Gymnasium', 'Informatik als Wahlfach, Basisfach oder Leistungsfach, je nach Schule']
        ] },
        { kind: 'source', html: 'Quelle: Länderseite Baden-Württemberg im Informatik-Monitor der GI (Ausgabe 2026/27), gelesen am 2. November 2026. Die Regeln gelten landesweit, also ebenso in Esslingen, Ludwigsburg, Fellbach oder Filderstadt wie in Stuttgart, einer Stadt mit 612.663 Einwohnerinnen und Einwohnern zum 31. Dezember 2024 (Destatis).' },
        { kind: 'p', mt: true, html: 'Was bedeutet das praktisch? Ihr Kind begegnet Informatik in der Schule mit etwa zehn Jahren, in einem Fach, dessen Inhalte sich noch finden. Kinder, die vorher schon zwei, drei Jahre gebaut, getüftelt und Fehler gesucht haben, gehen entspannt in dieses Fach. Sie kennen das Gefühl, dass ein Programm erst nicht funktioniert und dann doch, und sie haben gelernt, eine Aufgabe in kleine Schritte zu zerlegen.' }
      ]
    },
    {
      id: 'englisch',
      eyebrow: 'Unterricht auf Englisch',
      h2: 'Kommt ein Grundschulkind mit Stunden auf Englisch zurecht?',
      lede: 'Wir unterrichten ausschließlich auf Englisch. Für Kinder zwischen 6 und 12 ist das meist kein Hindernis, sondern ein zweiter Gewinn.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Ehrlich von Anfang an', p: 'Es gibt bei uns keinen Unterricht auf Deutsch. Das schreiben wir lieber gleich hier, damit niemand eine Probestunde mit falschen Erwartungen bucht.' },
          { h3: 'Zwei Fächer in einer Stunde', p: 'Ihr Kind lernt Programmieren und hört dabei eine Stunde lang Englisch, das sich um Spiele und Rätsel dreht. Viele Eltern berichten, dass gerade das die Hemmung vor der Sprache senkt.' },
          { h3: 'Langsam, deutlich, geduldig', p: 'Die Mentoren sprechen langsam, zeigen auf dem Bildschirm, was sie meinen, und wiederholen in einfacheren Worten. Antwortet ein Kind mit einem deutschen Wort, nimmt der Mentor es freundlich auf und nennt das englische.' }
        ] },
        { kind: 'p', mt: true, html: 'Die Befehle selbst sind ohnehin englisch: if, repeat, print, while. Ein Kind, das diese Wörter in der Programmierstunde versteht, hat einen kleinen Vorsprung, wenn es sie später im neuen Schulfach wiedertrifft. Unsere Mentoren arbeiten von Indien aus per Video. Weil Indien der deutschen Uhr voraus ist, liegt ein Stuttgarter Nachmittag in ihrem Abend, und Ihr Kind hat Woche für Woche dieselbe Person vor sich.' }
      ]
    },
    {
      id: 'projekt',
      tint: 'tint',
      eyebrow: 'Ein echtes Stuttgarter Projekt',
      h2: 'Wie viele Trinkbrunnen in Stuttgart geben wirklich Trinkwasser?',
      lede: 'Die Stadt Stuttgart veröffentlicht ihre Brunnen als offene Daten. Ältere Kinder lernen daran eine Gewohnheit, die gute Programmiererinnen und Programmierer auszeichnet: Der Name einer Liste ist nur eine Behauptung. Was zählt, steht in jedem einzelnen Eintrag.',
      body: [
        { kind: 'two',
          leftH3: 'Die Daten',
          left: [
            'Der Datensatz Brunnen der Landeshauptstadt Stuttgart besteht aus drei Listen: 300 Brunnen in Betrieb, 44 Trinkwasserbrunnen in Betrieb und 18 Mineralbrunnen in Betrieb. Unter den 300 Brunnen der ersten Liste sind allein 83 Schwengelpumpen, die Kinder von vielen Spielplätzen kennen.',
            'Wir nehmen die Liste der Trinkwasserbrunnen und speichern für jedes Kind eine kleine Datei, trinkbrunnen.csv, mit fünf Spalten: Name, Standort, Trinkwasser, Status und Bemerkung.'
          ],
          rightH3: 'Die Frage',
          right: [
            'An wie vielen Brunnen aus dieser Liste kann man heute einen Schluck Wasser trinken? Die schnelle Antwort lautet: an allen, es ist ja die Trinkwasserliste. Das Programm prüft diese Antwort in drei Schritten.',
            'Schritt eins zählt die Einträge. Schritt zwei schaut in jedem Eintrag nach, was in der Spalte Trinkwasser steht. Schritt drei liest die Bemerkungen.'
          ] },
        { kind: 'code', label: 'Schritt 1: die Einträge zählen', lang: 'Python', code: V1, note: 'Ausgabe: <code>Einträge in der Liste: 44</code>.' },
        { kind: 'code', label: 'Schritt 2: in jedem Eintrag nachsehen', lang: 'Python', code: V2, note: 'Ausgabe: <code>Kein Trinkwasser: Dürrlewang Park Trinkbrunnen01 | Name: (leer)</code> und <code>Mit Trinkwasser: 43</code>.' },
        { kind: 'p', mt: true, html: 'Eine Überraschung: Ein Eintrag in der Trinkwasserliste sagt selbst "kein Trinkwasser". Es ist der Brunnen im Dürrlewang-Park, und er hat als Einziger nicht einmal einen Namen. Ob die Angabe stimmt oder ein Tippfehler ist, verrät die Datei nicht. Für Kinder ist genau das die Lektion: Wir zählen nach dem, was im Eintrag steht, nicht nach der Überschrift der Liste, und wir schreiben dazu, welcher Eintrag nicht passt.' },
        { kind: 'code', label: 'Schritt 3: die Bemerkungen lesen', lang: 'Python', code: V3, note: 'Ausgabe: <code>Hinweis bei Der-Gute-Hirte-Brunnen: Baustelle im Umfeld</code> und <code>Trinkbar und ohne Hinweis: 42</code>.' },
        { kind: 'p', html: 'Beim Der-Gute-Hirte-Brunnen steht als Status "in Betrieb", in der Bemerkung aber "Baustelle im Umfeld". Beides kann gleichzeitig wahr sein. Ein gutes Programm verschweigt so etwas nicht, sondern gibt es aus. So wird aus 44 Einträgen eine ehrliche Antwort: 43 Brunnen mit Trinkwasser, davon 42 ohne jeden Hinweis.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Was das Programm in der Liste der Trinkwasserbrunnen findet (eigene Auswertung)', head: ['Prüfschritt', 'Anzahl'], rows: [
          ['Einträge in der Liste', '44'],
          ['Eintrag sagt selbst "Trinkwasser"', '43'],
          ['Eintrag sagt "kein Trinkwasser"', '1'],
          ['Trinkwasser und keine Bemerkung', '42']
        ] },
        { kind: 'source', html: 'Daten: Landeshauptstadt Stuttgart, Datensatz Brunnen über Open Data BW, Lizenz CC BY 4.0, abgerufen am 3. November 2026 vom städtischen Geodienst. Alle Zahlen in der Tabelle sind unsere eigene Auswertung dieser Liste; sie sagen nichts darüber, ob ein Brunnen an einem bestimmten Tag läuft.' },
        { kind: 'ol', mt: true, items: [
          '<strong>6 bis 8 Jahre, ohne Bildschirm.</strong> Legen Sie zehn Karten mit der Überschrift "Äpfel" hin, eine davon zeigt eine Birne. Wie viele Äpfel liegen wirklich da? Erst die Überschrift lesen, dann jede Karte umdrehen.',
          '<strong>8 bis 10 Jahre, in Scratch.</strong> Eine Liste mit Brunnennamen und eine zweite mit "ja" oder "nein" anlegen. Eine Figur zählt nur die Einträge mit "ja".',
          '<strong>10 bis 12 Jahre, in Python.</strong> Schritt 1 und 2 abtippen und ausführen, Schritt 3 selbst schreiben und erst danach mit unserer Lösung vergleichen.',
          '<strong>Weiterdenken.</strong> Die Liste der 18 Mineralbrunnen hat ebenfalls einen Eintrag mit Bemerkung. Wie sieht ein Programm aus, das beide Listen auf einmal prüft und am Ende eine einzige Übersicht ausgibt?'
        ] }
      ]
    },
    {
      id: 'biber',
      eyebrow: 'Ein erster Wettbewerb',
      h2: 'Kann mein Kind beim Informatik-Biber mitmachen?',
      lede: 'Wenn es mindestens die dritte Klasse besucht und die Schule teilnimmt: ja. Die Biberwochen 2026 beginnen in wenigen Tagen.',
      body: [
        { kind: 'two',
          leftH3: 'Worum es geht',
          left: [
            'Hinter dem Biber stehen die Bundesweiten Informatikwettbewerbe, die ihn beschreiben den Biber als Deutschlands größten Schülerwettbewerb in Informatik: ein Rätselquiz am Computer, das nichts kostet und offen ist für Kinder ab der dritten Klasse bis zum Abitur. Vorwissen braucht es keines, Code wird nicht geschrieben.',
            'Für Drittklässler und Viertklässler gibt es neun Rätsel und eine halbe Stunde Zeit; Fünft- und Sechstklässler bekommen zwölf Rätsel und 35 Minuten. Zu zweit antreten ist erlaubt.'
          ],
          rightH3: 'Termine',
          right: [
            'Die Biberwochen finden vom 9. bis 20. November 2026 statt. Teilnehmen kann Ihr Kind nur, wenn die Schule es anmeldet; der Biber läuft dann während einer Schulstunde. Ein kurzer Satz an die Klassenlehrkraft genügt als Nachfrage.',
            'Eine Probierversion, den Schnupper-Biber, stellen die Veranstalter bereits seit Mitte September 2026 bereit. Laut Terminplan folgen die Ergebnisse im Dezember 2026, die Urkunden im Januar 2027.'
          ] },
        { kind: 'p', mt: true, html: 'Typisch für den Biber sind Rätsel zu Reihenfolgen, Mustern, kürzesten Wegen und verschlüsselten Botschaften. Das ist dieselbe Denkarbeit, die beim Programmieren gebraucht wird. Originalaufgaben des Wettbewerbs kommen bei uns nicht vor: Die Mentoren denken sich eigene Rätsel aus, die ähnlich funktionieren. Wir haben mit den Veranstaltern nichts zu tun.' }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Wann findet der Unterricht nach Stuttgarter Zeit statt?',
      lede: 'Gruppen treffen sich an Nachmittagen unter der Woche und am Wochenende, Einzelstunden legen Sie mit dem Mentor fest. Die Beispiele zeigen, wie eine Stuttgarter Uhrzeit in Indien aussieht.',
      body: [
        { kind: 'table', numCols: [], caption: 'Beispielzeiten in Stuttgart und die gleiche Uhrzeit in Indien', head: ['Stuttgart', 'Indien, Winterzeit (bis 27. März 2027)', 'Indien, ab 28. März 2027'], rows: [
          ['14:45', '19:15', '18:15'],
          ['15:15', '19:45', '18:45'],
          ['Samstag 09:00', '13:30', '12:30']
        ] },
        { kind: 'source', html: 'Nur Beispiele, keine festen Gruppenzeiten. Nach dem Einheitenzeitgesetz gilt in Deutschland im Winter die MEZ (UTC+1) und im Sommer die MESZ (UTC+2); die Sommerzeit endete am 25. Oktober 2026 und beginnt wieder am 28. März 2027. Indiens Uhren zeigen immer UTC+5:30, der Vorsprung beträgt daher im Winter viereinhalb und im Sommer dreieinhalb Stunden.' },
        { kind: 'p', mt: true, html: 'In den baden-württembergischen Ferien läuft der Unterricht weiter. Die KMK-Übersicht nennt für 2026/27 die Weihnachtsferien vom 23.12.2026 bis 09.01.2027, für Ostern den 25. März sowie den 30. März bis 3. April 2027, die Pfingstferien vom 18. bis 29. Mai 2027 und die Sommerferien vom 29. Juli bis 11. September 2027. Wer verreist, pausiert einfach und steigt danach wieder ein.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Was ein Stuttgarter Kind Schritt für Schritt kann',
    lede: 'Unsere eigenen Stufen. Damit ordnen wir ein neues Kind einer Gruppe zu und zeigen Ihnen, was sich verändert hat.',
    table: { caption: 'Stufen beim Programmierenlernen von 6 bis 12 (eigene Einteilung)', head: ['Stufe', 'Übliches Alter', 'Ihr Kind kann'], rows: [
      ['1. Reihenfolge', '6 bis 7', 'Bilderschritte sortieren, damit eine Figur geht und redet'],
      ['2. Wiederholung', '7 bis 8', 'Eine Schleife statt zehnmal denselben Block verwenden'],
      ['3. Bedingung', '8 bis 9', 'Ein Spiel mit wenn und sonst reagieren lassen und Punkte zählen'],
      ['4. Getippter Code', '9 bis 11', 'Python-Zeilen tippen, die Listen durchlaufen'],
      ['5. Daten prüfen', '10 bis 12', 'Eine Datei einlesen und jeden Eintrag einzeln kontrollieren']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Stufe 5 ist das Brunnenprojekt. Ein Kind, das fragt "steht das wirklich in jedem Eintrag?", stellt diese Frage bald auch bei Zeitungsgrafiken.',
      'In unseren Rückmeldungen geht es um Gebautes und Verstandenes; Bildschirmzeit messen wir nicht.'
    ] },
    right: { h3: 'Für Kinder', ps: [
      'Eine Überschrift kann sich irren. Gute Programmierer drehen jede Karte um.',
      'Ein Eintrag, der nicht passt, wird aufgeschrieben. Das ist kein Fehler im Programm, sondern ein Fund.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse für Stuttgarter Kinder',
    lede: 'Alle live, auf Englisch und mit einem festen Mentor, in der Gruppe oder einzeln.',
    bands: [
      { num: 'I', h3: 'Denken und Rechnen', sub: '6 bis 15 Jahre', courses: [
        { code: 'PST / DENK / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Logisch denken ab 6', blurb: 'Muster, Reihenfolgen und Rätsel für Sechs- bis Neunjährige.' },
        { code: 'PST / DENK / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Probleme zerlegen', blurb: 'Knobeln in kleinen Schritten, gut vor dem Biber.' },
        { code: 'PST / DENK / 03', slug: 'maths-through-coding', title: 'Mathe mit Code', blurb: 'Schulmathematik in Python ausprobiert, 10 bis 15.' }
      ] },
      { num: 'II', h3: 'Spielewelten', sub: '7 bis 14 Jahre', courses: [
        { code: 'PST / SPIEL / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft mit Code', blurb: 'Die Lieblingswelt, diesmal selbst gesteuert.' },
        { code: 'PST / SPIEL / 02', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Spiele mit Godot', blurb: 'Eine echte Spiele-Engine, behutsam eingeführt.' },
        { code: 'PST / SPIEL / 03', slug: 'vibe-coding-for-kids-beginners-ai-scratch-game-dev', title: 'Bauen mit KI-Hilfe', blurb: 'KI als Helfer nutzen und trotzdem jede Zeile verstehen.' }
      ] },
      { num: 'III', h3: 'Bauen und verstehen', sub: '8 bis 12 Jahre', courses: [
        { code: 'PST / BAU / 01', slug: 'ai-literacy-for-kids-course', title: 'KI verstehen', blurb: 'Wie Maschinen aus Beispielen lernen, ohne Erwachsenenkonten.' },
        { code: 'PST / BAU / 02', slug: 'kids-ai-web-development-course', title: 'Die erste Website', blurb: 'Eine eigene Seite im Netz, 9 bis 12.' },
        { code: 'PST / BAU / 03', slug: 'block-coding-app-development-masterclass', title: 'Apps aus Blöcken', blurb: 'Eine eigene App auf dem Handy, 8 bis 12.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'So läuft der Unterricht',
    h2: 'Wie eine Woche Unterricht für Stuttgarter Familien aussieht',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Nach der Schule', l: 'Am frühen Nachmittag, wenn die Hausaufgaben erledigt sind.' },
      { time: 'Am Wochenende', l: 'Vormittags, in Ruhe, gut für Erst- und Zweitklässler.' },
      { time: 'Einzelstunde', l: 'Termin nach Absprache, im Tempo Ihres Kindes.' }
    ],
    cells: [
      { h3: 'Dieselbe Bezugsperson', p: 'Der Mentor erinnert sich an jedes Projekt Ihres Kindes.' },
      { h3: 'Klares Englisch', p: 'Kurze Sätze, gezeigt auf dem Bildschirm, gern wiederholt.' },
      { h3: 'Selbst machen', p: 'Ihr Kind hat von der ersten Stunde an Maus und Tastatur.' },
      { h3: 'Nach Alter', p: 'Sechsjährige sitzen nicht mit Zwölfjährigen in einer Gruppe.' },
      { h3: 'Kurze Notiz an Sie', p: 'Was entstanden ist, wo es hakte, was die nächste Stunde bringt.' },
      { h3: 'Zwei Formen', p: 'Eine Klasse mit fünfzehn bis zwanzig Gleichaltrigen oder Privatunterricht.' }
    ]
  },

  projectsH2: 'Was ältere Lernende bei uns gebaut haben',
  projectsLede: 'Wer mit sieben Blöcke verschiebt, baut mit fünfzehn oft schon richtige Programme. Einige Beispiele sehen Sie unten, viele weitere auf der Seite <a class="ag-inline-link" href="/student-labs">Student Labs</a>.',
  reviewsLede: 'Bewertungen von Eltern und Lernenden auf Google, unverändert übernommen.',

  fees: {
    h2: 'Kosten für Stuttgarter Familien',
    lede: 'Ein Monat umfasst acht Live-Stunden. Die Euro-Preise hier beruhen auf dem Referenzkurs, den die Europäische Zentralbank veröffentlicht. Ihre Karte wird allerdings in US-Dollar belastet, und Ihre Bank rechnet um, kleine Abweichungen auf dem Auszug sind daher normal.',
    free: ['Eine kostenlose Probestunde', 'Ein kleines Rätsel und ein erstes Programm', 'Keine Kreditkarte nötig'],
    group: ['Fünfzehn bis zwanzig Kinder ähnlichen Alters', 'Ein fester Mentor', 'Zwei Stunden pro Woche', 'Monatlich kündbar'],
    one: ['Ihr Kind und ein Mentor', 'Tempo und Projekte nach Ihrem Kind', 'Zeiten nach Ihrem Kalender']
  },

  faq: {
    eyebrow: 'Fragen Stuttgarter Eltern',
    h2: 'Programmieren lernen für Kinder in Stuttgart: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein. Gesprochen wird ausschließlich Englisch, in jeder Live-Stunde, und gerade das nützt Ihrem Kind: Programmieren und Englisch zugleich, in einer einzigen Stunde. Der Mentor redet in kurzen, klaren Sätzen und gewöhnt sich an Tempo und Aussprache Ihres Kindes. Scratch- und Python-Befehle sind sowieso englische Wörter.' },
      { q: 'Gibt es an Stuttgarter Grundschulen Informatikunterricht?', a: 'Als eigenes Fach nicht. Die Grundschule umfasst in Baden-Württemberg die Klassen 1 bis 4, und das Pflichtfach Informatik und Medienbildung beginnt erst in Klasse 5. Eingeführt wurde es im Schuljahr 2025/26.' },
      { q: 'Ist mein Kind mit sechs schon alt genug?', a: 'Ja, ab sechs Jahren geht es los. Die Jüngsten arbeiten mit Bildblöcken, die man zusammensteckt, Lesen und Tippen sind also noch nicht nötig. Mit etwa neun Jahren steigen viele Kinder auf Python um.' },
      { q: 'Wann sind die Stunden nach Stuttgarter Zeit?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.' },
      { q: 'Was lernt mein Kind im neuen Schulfach ab Klasse 5?', a: 'Das legt der neue Bildungsplan fest, und der ist laut Informatik-Monitor 2026/27 noch nicht fertig: Die Anhörung ist für 2026/27 vorgesehen, gelten soll er ab August 2027. Bis dahin orientieren sich Lehrkräfte an älteren Plänen. Wir unterrichten unabhängig davon und ersetzen den Schulunterricht nicht.' },
      { q: 'Was ist der Informatik-Biber?', a: 'Ein Rätselwettbewerb am Computer, der nichts kostet und kein Vorwissen verlangt, offen ab der dritten Klasse. Die Biberwochen 2026 dauern vom 9. bis 20. November; die Anmeldung läuft über die Schule. Eine Übungsversion namens Schnupper-Biber gibt es schon seit September 2026.' },
      { q: 'Aus welchem Land unterrichten die Mentoren?', a: 'Aus Indien, live über Video; deshalb passen Stuttgarter Nachmittage gut: 15:15 Uhr in Stuttgart ist im Winter 19:45 Uhr in Indien. Ihr Kind hat jede Woche denselben Mentor.' },
      { q: 'Mit wie vielen Kindern lernt meines zusammen?', a: 'In einer Gruppe sitzen fünfzehn bis zwanzig Kinder, alle etwa gleich alt. Im Einzelunterricht ist Ihr Kind zweimal pro Woche allein mit seinem Mentor, an Terminen, die Sie gemeinsam festlegen.' },
      { q: 'Wie wird bezahlt?', a: 'Jeden Monat neu. Angezeigt werden Euro-Beträge auf Basis des EZB-Referenzkurses, belastet wird in US-Dollar, und Ihre Bank rechnet um; daher kann der Betrag auf dem Auszug minimal anders aussehen. Die Probestunde ist gratis, eine Karte wird nicht verlangt.' },
      { q: 'Was baut mein Kind konkret?', a: 'Jüngere Kinder bauen Spiele und kleine animierte Geschichten aus Blöcken. Ab etwa neun Jahren schreiben sie Python, zeichnen mit Code und arbeiten mit echten Daten, etwa mit der Liste der Stuttgarter Trinkbrunnen auf dieser Seite.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weitere Seiten',
    h2: 'Auch interessant',
    lede: 'Mehr für Familien in Stuttgart und Baden-Württemberg.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Alle unsere Seiten für Familien in Deutschland.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Für ältere Kinder, wenn Informatik in der Schule beginnt.' },
      { href: '/informatik-biber-practice-in-english', label: 'Biber-Training', p: 'Selbst geschriebene Rätsel zum Üben, englischsprachig.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik nach Bundesland', p: 'Alle sechzehn Länder im Vergleich, auf Englisch.' },
      { href: '/ai-tools-age-guide', label: 'KI-Werkzeuge und Altersgrenzen', p: 'Welche KI ab welchem Alter erlaubt ist, auf Englisch.' },
      { href: '/how-we-teach', label: 'Unsere Unterrichtsweise', p: 'Wie eine Stunde abläuft, auf Englisch erklärt.' }
    ]
  },

  start: {
    h2: 'Eine Gratisstunde ausprobieren',
    lede: 'Zum Kennenlernen knobelt Ihr Kind an einer Aufgabe und setzt ein winziges Programm zusammen. Im Anschluss empfiehlt der Mentor einen Kurs und eine Gruppe, je nachdem, wie Ihr Kind denkt und wie gut es Englisch versteht.',
    readFirst: 'Lieber zuerst lesen? Die Seite <a class="ag-inline-link" href="/how-we-teach">How we teach</a> zeigt den Ablauf einer Stunde, die <a class="ag-inline-link" href="/courses">Kursübersicht</a> alle Lehrpläne.',
    note: 'Alle Stunden laufen live im Netz, auf Englisch, mit einem Mentor in Indien. Kurze Fragen klären wir am liebsten per WhatsApp, gern auf Englisch.',
    formNote: 'Kostenlos und unverbindlich.'
  },

  footer: {
    cols: [
      { h4: 'Für Kinder', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch für Kinder' },
        { href: '/python-for-10-year-olds', label: 'Python mit zehn' },
        { href: '/ai-projects-for-kids', label: 'KI-Projekte für Kinder' },
        { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber üben' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online' },
        { href: '/student-labs', label: 'Projekte unserer Lernenden' },
        { href: '/how-we-teach', label: 'So unterrichten wir' }
      ] }
    ],
    bottomRight: 'Erst die Überschrift, dann jeder Eintrag'
  },

  personalityCss: `
.ag-root.ag-pst .ag-hero h1 { letter-spacing: -0.008em; max-width: 20ch; }
.ag-root.ag-pst .ag-capsule { border-left-width: 5px; border-radius: 4px; }
.ag-root.ag-pst .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-pst .ag-table caption { text-align: left; }
.ag-root.ag-pst .ag-code-head b { letter-spacing: 0.01em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27, Baden-Württemberg; Bundesweite Informatikwettbewerbe, Informatik-Biber 2026; KMK Ferien 2026/27; Destatis GV-ISys 31.12.2024; Einheitenzeitgesetz; gelesen am 2. und 3. November 2026. Landeshauptstadt Stuttgart über Open Data BW, Brunnen, CC BY 4.0.',
    localProject: 'Die Stuttgarter Trinkbrunnenliste geprüft: ein eigenes Python-Projekt mit 44 Einträgen, von denen einer selbst "kein Trinkwasser" meldet (Dürrlewang Park, ohne Namen) und einer eine Bemerkung "Baustelle im Umfeld" trägt; Ergebnis 43 mit Trinkwasser, 42 ohne Hinweis; dazu Fassungen ohne Bildschirm und in Scratch. Lesson family: der Titel einer Liste ist nur eine Behauptung, jeder Eintrag zählt.',
    requiredMentions: ['trinkbrunnen.csv', 'Einträge in der Liste: 44', 'Kein Trinkwasser: Dürrlewang Park Trinkbrunnen01 | Name: (leer)', 'Trinkbar und ohne Hinweis: 42', 'davon 42 ohne jeden Hinweis', 'allein 83 Schwengelpumpen', 'vom 9. bis 20. November 2026 statt', 'Erst die Überschrift, dann jeder Eintrag'],
    sources: [
      { claim: 'Grundschule Klasse 1 bis 4; Pflichtfach Informatik und Medienbildung ab 2025/26; kein Bildungsplan; Inkraftsetzung August 2027; Aufbaukurs Informatik Klasse 7.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/baden-wuerttemberg' },
      { claim: 'Informatik-Biber: Klassen 3 bis 13, kostenlos, Aufgabenzahl, Biberwochen 9. bis 20. November 2026, Schnupper-Biber, Ergebnisse.', url: 'https://bwinf.de/biber/2026/' },
      { claim: 'Ferien Baden-Württemberg 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Stuttgarter Brunnen, drei Listen, Lizenz CC BY 4.0.', url: 'https://ckan.govdata.de/dataset/brunnend8874' },
      { claim: 'Einwohnerzahl Stuttgart 612.663 (31.12.2024).', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/05-staedte.xlsx?__blob=publicationFile' }
    ],
    rejectedClaims: [
      'Ob der Dürrlewang-Brunnen tatsächlich kein Trinkwasser gibt: die Datei sagt es nur, wir geben keine Auskunft über einzelne Brunnen.',
      'Stuttgarter Schulen als Herkunft unserer Lernenden zu nennen: abgelehnt.',
      'Unterricht auf Deutsch: wir unterrichten nur auf Englisch und sagen das deutlich.',
      'Verbindung mit dem Land, der Stadt oder den Bundesweiten Informatikwettbewerben: keine.'
    ]
  }
};
