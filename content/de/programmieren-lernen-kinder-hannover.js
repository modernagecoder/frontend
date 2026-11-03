'use strict';
// Programmieren lernen für Kinder in Hannover (ag- German city door "stadt", Germany cluster P5 row DE138, alloc code
// han, accent #356377). Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief 2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent. Formal Sie.
// Spine (German, for parents of children aged 6 to 12): in Niedersachsen, Informatik is a Pflichtfach only in Klasse 9
// and 10; before that, Wahlpflicht from Klasse 6 at some school types. So the question "Wann lernt mein Kind in Hannover
// programmieren?" has the answer "in der Schule spät". The page answers that, explains English lessons as a benefit
// (Programmieren und Englisch zugleich), presents the Informatik-Biber 2026, and one Hannover data project on sorting
// street names with umlauts.
// Sources (read raw; quotes in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched 2 Nov 2026):
//  - GI Informatik-Monitor 2026/27, Niedersachsen page (infmon-niedersachsen/96603f73.txt; facts 50, 79): "An allen
//    allgemeinbildenden Schularten wird seit dem Schuljahr 2024/25 das Pflichtfach Informatik in den Jahrgangsstufen 9 und
//    10 unterrichtet."; Haupt-, Real-, Oberschule "in den Jahrgangsstufen 6 bis 10 ein zweistündiges Wahlpflichtfach
//    Informatik", Real- and Oberschule in 9 and 10 alternatively "ein vierstündiges Schwerpunktangebot"; KGS from grade 7;
//    IGS from grade 6; Gymnasium "ein zweistündiges Wahlfach Informatik" (Stundentafel 1), Profil "drei Profilstunden in
//    Klasse 8 sowie je vier Profilstunden in den Klassen 9 und 10"; "Die Primarstufe umfasst die Grundschule mit den
//    Jahrgangsstufen 1 bis 4."; five Sek I school types; Oberstufe G9 (Klasse 11 Einführungsphase, 12 and 13
//    Qualifikationsphase).
//  - Informatik-Biber (facts 129 to 137): "Der Informatik-Biber ist Deutschlands größter Schülerwettbewerb im Bereich
//    Informatik."; "Jahrgangsstufen 3 bis 13, keine Vorkenntnisse erforderlich"; "Grundschülerinnen und Grundschüler lösen
//    neun Aufgaben in 30 Minuten, Teilnehmende der Klassen 5 und 6 bekommen für zwölf Aufgaben 35 Minuten Zeit, und
//    Jugendliche ab Klasse 7 bearbeiten 15 Aufgaben in 40 Minuten."; "Die Biberwochen 2026 finden vom 9. bis 20. November
//    statt."; "Der Biber wird 2026 zum 20. Mal durchgeführt."; "Schnupper-Biber ab 14. September 2026"; results December
//    2026, certificates January 2027; "Mehr als 3.224 Schulen in 2025".
//  - Jugendwettbewerb Informatik (facts 141, 142): from Jahrgangsstufe 3 possible; Bronze for Jg. 5/6, 3 tasks / 30 minutes.
//  - AGIS directory (fact 233): International School Hannover Region lists IB PYP, MYP and Diploma.
//  - KMK FER2026_27.pdf (fact 277): Niedersachsen 2026/27 holidays.
//  - Destatis GV-ISys 31.12.2024 (places.tsv): Hannover 522,131; Niedersachsen 8,004,489.
//  - Time: Einheitenzeitgesetz; Sommerzeit ended 25 Oct 2026, starts 28 Mar 2027; India UTC+5:30.
//  - Data: Landeshauptstadt Hannover, FB Planen und Stadtentwicklung, Bereich Geoinformation, Open GeoData
//    "Straßenverzeichnis" (page: Veröffentlichungsdatum 20.01.2026, Änderungsdatum 03.12.2025, "Lizenz Creative Commons
//    Namensnennung 4.0 DE"; Nutzungsbedingungen: CC BY 4.0, credit "Datenquelle: CC-BY-4.0 ... Bereich Geoinformation ...
//    LH Hannover"), file https://www.hannover.de/content/download/889451/file/Stra%C3%9Fenverzeichnis.zip (669,130 bytes,
//    sha256 f37ad234...b4be4f), sheet Tabelle1 of "Straßenverzeichnis Januar 2026.xlsx" exported from row 5 to
//    strassen_2026.tsv (sha256 9538edc6...8300f8012). Downloaded 3 Nov 2026; copies in src-pages/<slug>/strassen/. The
//    Lower Saxony Land page uses the same directory with a different question (contains vs ends with); our question and
//    lesson differ.
// Our own calculations (scratchpad de/w/C5/hd/v1.py, v2.py; python3 -I, run in the data folder):
//  v1: "Straßennamen: 3615", "Erster: Aachener Straße", "Letzte drei: ['Zwickauer Straße', 'Zwinglistraße', 'Östbergweg']".
//  v1+v2 adds "Zeichennummern Z und Ö: 90 214", "Letzte drei, deutsch sortiert: ['Zweibrückener Straße', 'Zwickauer
//  Straße', 'Zwinglistraße']", "Östbergweg auf Platz 3615 statt 2496". Neighbours in German order: Ossietzkyring,
//  Ostafrikastraße, Östbergweg, Osterbrückenweg, Osterfelddamm. 1,545 names contain ß, 513 contain ä, ö or ü (any case).
//  First pair that swaps: "Alte Gehägestraße" before "Alte Gärtnerei" in code order.
// Lesson family: computers sort by character numbers; to sort like a German dictionary, give sorted() a key.

const { DE: DE_DE } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'namen = set()',
  'verzeichnis = open("strassen_2026.tsv", encoding="utf-8")',
  'for zeile in csv.DictReader(verzeichnis, delimiter="\\t"):',
  '    if zeile["STRASSENNAME"]:',
  '        namen.add(zeile["STRASSENNAME"].strip())',
  '',
  'liste = sorted(namen)',
  'print("Straßennamen:", len(liste))',
  'print("Erster:", liste[0])',
  'print("Letzte drei:", liste[-3:])'
].join('\n');

const V2 = [
  'ERSATZ = {"ä": "a", "ö": "o", "ü": "u", "ß": "ss",',
  '          "Ä": "A", "Ö": "O", "Ü": "U"}',
  '',
  'def schluessel(name):',
  '    for zeichen, neu in ERSATZ.items():',
  '        name = name.replace(zeichen, neu)',
  '    return name',
  '',
  'richtig = sorted(namen, key=schluessel)',
  'print("Zeichennummern Z und Ö:", ord("Z"), ord("Ö"))',
  'print("Letzte drei, deutsch sortiert:", richtig[-3:])',
  'print("Östbergweg auf Platz", liste.index("Östbergweg") + 1, "statt", richtig.index("Östbergweg") + 1)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'stadt', label: 'Hannover: Programmieren für Kinder' },
  slug: 'programmieren-lernen-kinder-hannover',
  code: 'han',
  accent: '#356377',
  accentRationale: 'Programmieren lernen für Kinder in Hannover: ein ruhiges Stahlblau #356377 wie das Wasser des Maschsees, klar unterschieden vom Aubergine der englischen Hannover-Seite; Kontrast 5.32 auf dem Papierton #FBF8F2 und über 4.5 auf allen drei Tönungen',
  pageType: 'market',
  market: DE_DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }, { slug: 'coding-classes-in-lower-saxony', name: 'Niedersachsen' }],
  routeLabel: 'Programmieren lernen für Kinder in Hannover (auf Englisch)',
  title: 'Programmieren lernen für Kinder in Hannover: live auf Englisch',
  description: 'Programmieren lernen für Kinder in Hannover von 6 bis 12: live online auf Englisch, Informatik in Niedersachsen, der Informatik-Biber und ein Straßennamen-Projekt.',
  ogDescription: 'Live-Online-Unterricht auf Englisch für Kinder in Hannover von 6 bis 12 Jahren: warum Informatik in Niedersachsen erst ab Klasse 9 Pflicht ist, wie Kinder vorher einsteigen, der Informatik-Biber im November 2026 und ein Projekt mit Hannovers Straßenverzeichnis.',
  twitterDescription: 'Programmieren für Kinder in Hannover, live auf Englisch: Informatik ab Klasse 9, der Biber und ein Straßennamen-Projekt.',
  pageName: 'Programmieren lernen für Kinder in Hannover',
  webPageDescription: 'Ein Leitfaden für Eltern in Hannover mit Kindern von 6 bis 12 Jahren: Informatik an den Schulen in Niedersachsen nach dem Informatik-Monitor 2026/27 der Gesellschaft für Informatik, der Informatik-Biber 2026 und ein eigenes Python-Projekt mit dem Straßenverzeichnis der Landeshauptstadt Hannover.',
  courseDescription: 'Live-Online-Kurse auf Englisch für Hannoveraner Kinder zwischen 6 und 12: Scratch und Knobelaufgaben zum Einstieg, danach getipptes Python mit kleinen Daten- und KI-Projekten, als Gruppe oder einzeln.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kinder in Hannover',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#schule', label: 'Schule' },
    { href: '#strassen', label: 'Projekt' },
    { href: '#biber', label: 'Biber' },
    { href: '#uhrzeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Hannover &middot; Programmieren für Kinder &middot; 6 bis 12 Jahre',
  h1: 'Programmieren lernen für Kinder in Hannover',
  lede: 'In Niedersachsen ist Informatik seit dem Schuljahr 2024/25 Pflichtfach, allerdings erst in Klasse 9 und 10. Ein Kind, das heute in die Grundschule geht, wartet also noch viele Jahre auf die erste verpflichtende Informatikstunde. Auf dieser Seite lesen Sie, was die Schulen in Hannover wann anbieten, wie unser Live-Unterricht auf Englisch im Grundschulalter und kurz danach abläuft, welcher kostenlose Wettbewerb gerade jetzt im November stattfindet und wie Kinder mit dem echten Straßenverzeichnis der Stadt herausfinden, warum ein Computer „Östbergweg“ hinter „Zwinglistraße“ einsortiert.',
  secondaryCta: { href: '#strassen', label: 'Zum Straßennamen-Projekt' },
  wa: 'Hallo Modern Age Coders, wir wohnen in Hannover und unser Kind möchte programmieren lernen. Können wir eine kostenlose Probestunde buchen?',
  heroNote: 'Live-Online-Unterricht seit 2020 &middot; mehr als 10.000 Lernende weltweit &middot; Unterricht auf Englisch, zu Hannoveraner Nachmittagszeiten',
  spec: [
    ['Alter', '6 bis 12 Jahre, nach Alter gruppiert'],
    ['Einstieg', 'Knobeln und Scratch'],
    ['Danach', 'Python, selbst getippt'],
    ['Gruppe', 'Fünfzehn bis zwanzig Kinder, oder einzeln'],
    ['Mentoren', 'Live aus Indien, auf Englisch'],
    ['Probestunde', 'Kostenlos, ohne Karte']
  ],
  capsuleQ: 'Das Wichtigste',
  capsule: 'Modern Age Coders bringt Hannoveraner Kindern zwischen 6 und 12 das Programmieren bei, live online und auf Englisch: zuerst mit Scratch und Knobelaufgaben, danach mit Python, das die Kinder selbst tippen, und kleinen KI-Projekten im Kurs Python and AI for Kids. Unterrichtet wird in Gruppen von fünfzehn bis zwanzig Kindern oder einzeln, immer von demselben Mentor, der sich auf das Tempo und die Aussprache Ihres Kindes einstellt. In der Schule wird Informatik in Niedersachsen erst ab Klasse 9 Pflicht.',

  picks: {
    eyebrow: 'Für den Anfang',
    h2: 'Drei Kurse für Kinder in Hannover von 6 bis 12 Jahren',
    lede: 'Ein Scratch-Kurs für den ersten Einstieg, der Python-Kurs, in den die meisten Kinder mit etwa neun Jahren wechseln, und ein Kurs rund um die bundesweiten Informatik-Wettbewerbe.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'HAN / 01', title: 'Scratch für Kinder', alt: 'Kursbild Scratch Coding for Kids', note: 'Für Einsteigerinnen und Einsteiger im Grundschulalter. Aus Bausteinen entstehen Geschichten und Spiele, die die Kinder zu Hause vorzeigen können.' },
      { course: 'python-ai-kids-masterclass', code: 'HAN / 02', title: 'Python und KI für Kinder', alt: 'Kursbild Python and AI for Kids', note: 'Sobald ein Kind sicher liest und tippt, meist mit neun: echtes Python von der ersten Woche an, Zeichnen mit Code, kleine Spiele und später Projekte mit echten Daten wie dem Straßenverzeichnis unten.' },
      { course: 'german-informatics-competitions-course-biber-bwinf-bwki', code: 'HAN / 03', title: 'Informatik-Wettbewerbe', alt: 'Kursbild Informatik-Wettbewerbe Biber, BwInf und BWKI', note: 'Ab Klasse 3. Knobelaufgaben im Stil des Informatik-Bibers, von uns selbst geschrieben, und später Aufgaben für den Jugendwettbewerb Informatik.' }
    ]
  },

  sections: [
    {
      id: 'schule',
      eyebrow: 'Informatik in Niedersachsen',
      h2: 'Ab welcher Klasse haben Kinder in Hannover Informatik?',
      lede: 'Verpflichtend ab Klasse 9. Vorher gibt es Informatik nur als Wahlangebot, je nach Schulform. Grundlage ist der jährliche Ländervergleich der GI (Gesellschaft für Informatik), Ausgabe 2026/27.',
      body: [
        { kind: 'two',
          leftH3: 'Die Pflicht kommt spät',
          left: [
            'Laut GI wird „an allen allgemeinbildenden Schularten“ in Niedersachsen seit dem Schuljahr 2024/25 das Pflichtfach Informatik in den Jahrgangsstufen 9 und 10 unterrichtet. Das gilt für Hauptschule, Realschule, Oberschule, Gesamtschule und Gymnasium gleichermaßen.',
            'Die Grundschule umfasst in Niedersachsen die Klassen 1 bis 4. Ein eigenes Fach Informatik gibt es dort nicht.'
          ],
          rightH3: 'Vorher nur als Wahl',
          right: [
            'An Haupt-, Real- und Oberschulen kann ab Klasse 6 ein zweistündiges Wahlpflichtfach Informatik angeboten werden; an Real- und Oberschulen ist in Klasse 9 und 10 stattdessen auch ein vierstündiges Schwerpunktangebot möglich. Integrierte Gesamtschulen können Informatik ab Klasse 6 anbieten, kooperative ab Klasse 7.',
            'Am Gymnasium gibt es nach der üblichen Stundentafel ein zweistündiges Wahlfach; Gymnasien mit Profilunterricht können Informatik ab Klasse 8 als Wahlpflichtfach führen.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Informatik an Schulen in Niedersachsen, Schuljahr 2026/27', head: ['Klasse', 'Für wen', 'Wie'], rows: [
          ['1 bis 4', 'Grundschule', 'Kein eigenes Fach Informatik'],
          ['6 bis 8', 'Wer es wählt, wo es angeboten wird', 'Wahlpflicht an Haupt-, Real- und Oberschule und IGS; KGS ab Klasse 7; Gymnasium mit Profil ab Klasse 8'],
          ['9 und 10', 'Alle Schülerinnen und Schüler', 'Pflichtfach Informatik an allen allgemeinbildenden Schularten'],
          ['11', 'Oberstufe, auf Wunsch', 'Wahlpflichtfach in der Einführungsphase'],
          ['12 und 13', 'Oberstufe, auf Wunsch', 'Kurse auf grundlegendem oder erhöhtem Niveau, zentrales schriftliches Abitur']
        ] },
        { kind: 'source', html: 'Quelle: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Seite Niedersachsen, gelesen am 2. November 2026. Die gymnasiale Oberstufe ist in Niedersachsen neunjährig (G9): Klasse 11 ist die Einführungsphase, Klasse 12 und 13 die Qualifikationsphase. In der Landeshauptstadt leben 522.131 Menschen, in Niedersachsen 8.004.489 (Destatis, Stand 31. Dezember 2024).' },
        { kind: 'p', mt: true, html: 'Für Eltern eines Grundschulkindes heißt das: Bis zur ersten Pflichtstunde Informatik vergehen fünf bis acht Jahre. Diese Zeit lässt sich gut nutzen, ohne Druck und ohne Noten. Kinder, die früh gelernt haben, ein Problem in kleine Schritte zu zerlegen, profitieren davon in Mathematik ebenso wie später im Pflichtfach.' }
      ]
    },
    {
      id: 'englisch',
      eyebrow: 'Unterricht auf Englisch',
      h2: 'Warum findet der Unterricht auf Englisch statt, und klappt das mit kleinen Kindern?',
      lede: 'Wir unterrichten live, und zwar nur auf Englisch. Das sagen wir offen, denn für viele Familien ist genau das ein Vorteil: Programmieren und Englisch zugleich.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Nur Englisch, mit Absicht', p: 'Deutschsprachige Gruppen bieten wir nicht an. Kinder an deutschen Schulen hören zweimal pro Woche eine Stunde lang klares, gesprochenes Englisch mit einem echten Ziel. In Hannover gibt es außerdem internationale Schulen wie die International School Hannover Region, die im AGIS-Verzeichnis mit den IB-Programmen geführt wird.' },
          { h3: 'Tempo und Aussprache passen sich an', p: 'Die Mentorinnen und Mentoren sprechen langsam, wählen einfache Wörter und erklären einen Schritt noch einmal anders, wenn ein Kind stockt. Antwortet ein Kind auf Deutsch, wird es verstanden, und der Mentor gibt das englische Wort freundlich zurück.' },
          { h3: 'Code ist ohnehin Englisch', p: 'Befehle wie print, if, for oder while sind englische Wörter. Wer sie im Englischunterricht noch nicht kennt, lernt sie hier nebenbei, und zwar genau dort, wo sie eine Bedeutung haben.' }
        ] },
        { kind: 'p', mt: true, html: 'Die Mentoren unterrichten aus Indien per Live-Video. Ein Nachmittag in Hannover ist dort Abend, deshalb passen die Zeiten weiter unten gut. Jede Gruppe behält ihren Mentor über Monate, sodass er oder sie schnell merkt, ob Ihr Kind eine schwierigere Aufgabe braucht oder lieber erst einmal in Ruhe ausprobiert.' }
      ]
    },
    {
      id: 'strassen',
      tint: 'tint',
      eyebrow: 'Ein echtes Hannover-Projekt',
      h2: 'Warum steht der Östbergweg hinter der Zwinglistraße? Ein Projekt mit Hannovers Straßenverzeichnis',
      lede: 'Die Landeshauptstadt Hannover veröffentlicht ihr komplettes Straßenverzeichnis als offene Daten. Wenn Kinder die Namen mit Python alphabetisch sortieren, erleben sie eine Überraschung, und dabei lernen sie, wie ein Computer Buchstaben eigentlich sieht.',
      body: [
        { kind: 'two',
          leftH3: 'Die Daten',
          left: [
            'Das Straßenverzeichnis kommt vom Bereich Geoinformation der Landeshauptstadt Hannover und steht unter der Lizenz Creative Commons Namensnennung 4.0 (Datenquelle: CC-BY-4.0 - Bereich Geoinformation - LH Hannover). Wir haben die Datei vom Januar 2026 am 3. November 2026 heruntergeladen.',
            'Sie enthält jede Straße, jeden Weg und jeden Platz der Stadt, manche Straßen in mehreren Abschnitten. Uns interessiert nur eine Spalte: STRASSENNAME. Ohne doppelte Einträge bleiben 3.615 verschiedene Namen.'
          ],
          rightH3: 'Die Frage',
          right: [
            'Welcher Straßenname steht im Alphabet ganz vorne, welcher ganz hinten? Die Kinder tippen meist auf etwas mit A und etwas mit Z.',
            'Python hat dafür eine fertige Funktion: sorted(). Das erste Programm sammelt die Namen und sortiert sie, ohne weiter nachzudenken.'
          ] },
        { kind: 'code', label: 'Version 1: einfach sortieren', lang: 'Python', code: V1, note: 'Unser Programm. Es gibt aus: <code>Straßennamen: 3615</code>, <code>Erster: Aachener Straße</code> und <code>Letzte drei: [\'Zwickauer Straße\', \'Zwinglistraße\', \'Östbergweg\']</code>.' },
        { kind: 'p', mt: true, html: 'Vorne stimmt alles: die Aachener Straße. Hinten aber steht der Östbergweg, nach der Zwinglistraße. Jedes Kind weiß, dass Ö kein Buchstabe nach Z ist. Warum also sortiert Python so? Weil der Computer keine Buchstaben vergleicht, sondern Zahlen. Jedes Zeichen hat eine Nummer, und die Umlaute haben sehr große Nummern, viel größer als das Z.' },
        { kind: 'code', label: 'Version 2: sortieren wie im Wörterbuch', lang: 'Python', code: V2, note: 'Unser Programm, nach Version 1 ausgeführt. Es ergänzt: <code>Zeichennummern Z und Ö: 90 214</code>, <code>Letzte drei, deutsch sortiert: [\'Zweibrückener Straße\', \'Zwickauer Straße\', \'Zwinglistraße\']</code> und <code>Östbergweg auf Platz 3615 statt 2496</code>.' },
        { kind: 'p', html: 'Das Z hat die Nummer 90, das Ö die Nummer 214. Darum landet alles, was mit einem Umlaut beginnt, hinter dem Z. Version 2 gibt sorted() einen Schlüssel mit: Für den Vergleich wird aus ä ein a, aus ö ein o, aus ü ein u und aus ß ein ss. Die Namen selbst bleiben unverändert. Jetzt rutscht der Östbergweg von Platz 3.615 auf Platz 2.496, zwischen Ostafrikastraße und Osterbrückenweg, also dorthin, wo ein Mensch ihn suchen würde.' },
        { kind: 'p', html: 'Das betrifft nicht nur den Anfangsbuchstaben. Im Verzeichnis enthalten 1.545 Namen ein ß, 513 einen Umlaut. Schon bei „Alte Gärtnerei“ und „Alte Gehägestraße“ dreht sich die Reihenfolge um, sobald der Schlüssel im Spiel ist. Eine kleine Regel, und Tausende Einträge stehen anders.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Wo der Östbergweg landet: Ausschnitt aus der deutsch sortierten Liste (unsere Berechnung)', head: ['Platz', 'Straßenname'], rows: [
          ['2494', 'Ossietzkyring'],
          ['2495', 'Ostafrikastraße'],
          ['2496', 'Östbergweg'],
          ['2497', 'Osterbrückenweg'],
          ['2498', 'Osterfelddamm']
        ] },
        { kind: 'source', html: 'Daten: Landeshauptstadt Hannover, FB Planen und Stadtentwicklung, Bereich Geoinformation, Straßenverzeichnis Januar 2026, Lizenz CC BY 4.0, Abruf vom 3. November 2026. Zählungen und Reihenfolgen sind unsere eigenen Berechnungen. Die Ersetzungsregel ist unsere Wahl für dieses Projekt; es gibt auch andere Regeln für die deutsche Sortierung.' },
        { kind: 'ol', mt: true, items: [
          '<strong>6 bis 8 Jahre, mit Karten.</strong> Schreiben Sie mit Ihrem Kind zehn Straßennamen aus der Nachbarschaft auf Karten, darunter einen mit Ä oder Ü. Sortieren Sie gemeinsam. Wo kommt der Umlaut hin, und warum?',
          '<strong>8 bis 10 Jahre, in Scratch.</strong> Eine Liste mit fünf Namen anlegen und mit dem Block „Buchstabe 1 von“ den ersten Buchstaben jedes Namens vergleichen lassen.',
          '<strong>10 bis 12 Jahre, in Python.</strong> Version 1 ausführen, die Ausgabe erklären und erst dann eine eigene Schlüsselfunktion schreiben, bevor Version 2 gelesen wird.',
          '<strong>Weiterdenken.</strong> In unserer Regel wird aus ä ein a. Manche Wörterbücher machen daraus ae. Ändern Sie die Regel und prüfen Sie, welche Namen ihren Platz wechseln.'
        ] }
      ]
    },
    {
      id: 'biber',
      eyebrow: 'Ein kostenloser Wettbewerb',
      h2: 'Kann mein Kind in Hannover beim Informatik-Biber mitmachen?',
      lede: 'Ja, sofern die Schule mitmacht. Der Biber ist ein Rätselwettbewerb am Bildschirm, der nichts kostet, ab Klasse 3 offensteht und kein Vorwissen verlangt. Die Biberwochen 2026 laufen genau in diesen Tagen.',
      body: [
        { kind: 'two',
          leftH3: 'Worum es geht',
          left: [
            'Veranstalter sind die Bundesweiten Informatikwettbewerbe (BWINF), die den Biber „Deutschlands größter Schülerwettbewerb im Bereich Informatik“ nennen. Die Ausgabe 2026 ist die zwanzigste; im Vorjahr machten mehr als 3.224 Schulen mit.',
            'Die Dauer wächst mit dem Alter: Im Grundschulalter gibt es neun Aufgaben in 30 Minuten, die Klassen 5 und 6 zwölf Aufgaben in 35 Minuten, ab Klasse 7 sind es 15 Aufgaben in 40 Minuten. Man kann allein oder zu zweit teilnehmen.'
          ],
          rightH3: 'Der Kalender',
          right: [
            'Gespielt wird vom 9. bis 20. November 2026. Anmelden muss die Schule, also fragen Sie am besten direkt die Klassenlehrkraft. Eine Übungsrunde, den Schnupper-Biber, hat BWINF bereits am 14. September 2026 freigeschaltet.',
            'Im Dezember 2026 veröffentlicht BWINF die Ergebnisse; die Urkunden gehen im Januar 2027 auf die Reise.'
          ] },
        { kind: 'p', mt: true, html: 'Hat Ihr Kind Feuer gefangen, bietet BWINF mit dem Jugendwettbewerb Informatik einen zweiten Schritt an. Mitmachen ist dort im Prinzip schon ab Klasse 3 erlaubt; das Level Bronze mit drei Aufgaben in 30 Minuten empfehlen die Veranstalter für Klasse 5 und 6. Wir stehen in keiner Verbindung zu BWINF und verwenden keine Originalaufgaben. Im Unterricht schreiben wir eigene Knobeleien im gleichen Geist; die Frage, wohin der Östbergweg gehört, ist eine davon.' }
      ]
    },
    {
      id: 'uhrzeiten',
      eyebrow: 'Uhrzeiten',
      h2: 'Um wie viel Uhr sind die Stunden in Hannover?',
      lede: 'Vor allem nachmittags nach der Schule und am Wochenendvormittag. Bei der Buchung sehen Sie jeden Termin in Hannoveraner Zeit, der Mentor sieht ihn in indischer Zeit.',
      body: [
        { kind: 'table', numCols: [], caption: 'Beispielzeiten in Hannover und die entsprechende Uhrzeit in Indien', head: ['Hannover', 'Indien, Winterzeit (bis 28. März 2027)', 'Indien, Sommerzeit (ab 28. März 2027)'], rows: [
          ['14:40', '19:10', '18:10'],
          ['16:20', '20:50', '19:50'],
          ['Samstag 09:15', '13:45', '12:45']
        ] },
        { kind: 'source', html: 'Die gesetzliche Zeit regelt das Einheitenzeitgesetz: MEZ (UTC+1) im Winter, MESZ (UTC+2) im Sommer. Die Uhren wurden am 25. Oktober 2026 zurückgestellt und springen am 28. März 2027 wieder vor. Indien bleibt das ganze Jahr bei UTC+5:30 und ist Hannover damit im Winter viereinhalb Stunden, im Sommer dreieinhalb Stunden voraus. Es handelt sich um Beispiele, nicht um feste Gruppentermine.' },
        { kind: 'p', mt: true, html: 'Die Ferien in Niedersachsen laut KMK-Übersicht 2026/27: Weihnachten vom 23. Dezember 2026 bis 9. Januar 2027, Winterferien am 1. und 2. Februar, Osterferien vom 22. März bis 3. April, freie Tage am 7. und 18. Mai, Sommerferien vom 8. Juli bis 18. August 2027. Ferien unterbrechen die Kurse nicht; bei einer Reise genügt eine kurze Nachricht an den Mentor. Kinder aus Langenhagen, Laatzen, Garbsen oder Hemmingen lernen in denselben Online-Gruppen.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Lernschritte',
    h2: 'Fünf Etappen vom ersten Baustein bis zur echten Datei',
    lede: 'Diese Etappen haben wir selbst festgelegt. Danach richten sich die Gruppeneinteilung und unsere Rückmeldungen.',
    table: { caption: 'Unsere Etappen für Sechs- bis Zwölfjährige', head: ['Etappe', 'Alter etwa', 'Woran man sie erkennt'], rows: [
      ['1. Abfolge', '6 bis 7', 'Ordnet Befehle so, dass die Figur ans Ziel kommt'],
      ['2. Wiederholung', '7 bis 9', 'Eine Schleife statt vieler gleicher Bausteine verwenden'],
      ['3. Bedingung', '8 bis 10', 'Mit wenn und sonst zwei Wege unterscheiden'],
      ['4. Python', '9 bis 11', 'Kurze Programme tippen und Fehlermeldungen lesen'],
      ['5. Echte Daten', '10 bis 12', 'Liest eine veröffentlichte Datei ein und kontrolliert das Ergebnis']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Stufe 5 ist das Straßennamen-Projekt. Wer einmal gesehen hat, dass ein Computer anders sortiert als ein Mensch, prüft Ergebnisse künftig genauer.',
      'Wir berichten, was Ihr Kind gebaut und erklärt hat, nicht wie lange es am Bildschirm saß.'
    ] },
    right: { h3: 'Für Kinder', ps: [
      'Gibt der Computer etwas Seltsames aus, ist das ein Hinweis, dem man nachgehen sollte.',
      'Für den Computer sind Buchstaben Zahlen. Es lohnt sich, nach der Zahl zu fragen.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Angebote für Hannoveraner Kinder',
    lede: 'Alle live und auf Englisch, in der Gruppe oder im Einzelunterricht.',
    bands: [
      { num: 'I', h3: 'Denken lernen', sub: '6 bis 14 Jahre', courses: [
        { code: 'HAN / DENK / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Logisches Denken für Kleine', blurb: 'Muster und Regeln für 6- bis 9-Jährige.' },
        { code: 'HAN / DENK / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Probleme lösen', blurb: 'Große Aufgaben in kleine Schritte zerlegen.' },
        { code: 'HAN / DENK / 03', slug: 'ai-literacy-for-kids-course', title: 'KI verstehen', blurb: 'Was KI kann und was nicht, für 8 bis 14 Jahre, ohne Konten für Erwachsene.' }
      ] },
      { num: 'II', h3: 'Spiele bauen', sub: '7 bis 14 Jahre', courses: [
        { code: 'HAN / SPIEL / 01', slug: 'minecraft-coding-for-kids-course', title: 'Programmieren mit Minecraft', blurb: 'Vom Baustein zum echten Code, 7 bis 12 Jahre.' },
        { code: 'HAN / SPIEL / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox mit Luau', blurb: 'Selbst erdachte Roblox-Welten per Skript, 8 bis 14 Jahre.' },
        { code: 'HAN / SPIEL / 03', slug: 'game-development-masterclass-for-kids', title: 'Spiele bauen, dreifach', blurb: 'Drei Spielwelten nacheinander, für 8 bis 12 Jahre.' }
      ] },
      { num: 'III', h3: 'Bauen und rechnen', sub: '5 bis 15 Jahre', courses: [
        { code: 'HAN / BAU / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Der lange Kurs von Scratch bis zu ersten Apps.' },
        { code: 'HAN / BAU / 02', slug: 'kids-ai-web-development-course', title: 'Die erste Website', blurb: 'Eigene Webseiten, 9 bis 12 Jahre.' },
        { code: 'HAN / BAU / 03', slug: 'mental-maths-mastery-kids', title: 'Kopfrechnen mit Verstand', blurb: 'Zahlengefühl statt Tricks, 5 bis 10 Jahre.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Ablauf',
    h2: 'So läuft der Unterricht für Familien in Hannover',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Nachmittags', l: 'An Schultagen, nach Mittagessen und Hausaufgaben.' },
      { time: 'Wochenende', l: 'Samstag- oder Sonntagvormittag, ruhig für die Jüngsten.' },
      { time: 'Einzeln', l: 'Ein fester Termin, den Sie mit uns vereinbaren.' }
    ],
    cells: [
      { h3: 'Zweimal pro Woche', p: 'Zwei Live-Stunden, nichts ist vorab aufgezeichnet.' },
      { h3: 'Fester Mentor', p: 'Dieselbe Person begleitet die Gruppe.' },
      { h3: 'Selbst machen', p: 'Die Kinder programmieren ab der ersten Stunde selbst.' },
      { h3: 'Nach Alter', p: 'Gruppen mit Kindern ähnlichen Alters.' },
      { h3: 'Rückmeldung', p: 'Kurze Berichte für die Eltern.' },
      { h3: 'Zwei Formen', p: 'Gruppenkurs mit bis zu zwanzig Kindern oder Einzelstunden.' }
    ]
  },

  projectsH2: 'Was unsere älteren Lernenden gebaut haben',
  projectsLede: 'Viele haben im Grundschulalter angefangen. Einige ihrer späteren Projekte sehen Sie hier, weitere auf der Seite <a class="ag-inline-link" href="/student-labs">Student Labs</a>.',
  reviewsLede: 'So bewerten Familien und Lernende uns auf Google, im Wortlaut.',

  fees: {
    h2: 'Gebühren für Familien in Hannover',
    lede: 'Pro Monat zahlen Sie für acht Live-Stunden. Den Euro-Betrag auf dieser Seite berechnen wir mit dem EZB-Referenzkurs. Belastet wird Ihr Konto in US-Dollar, und weil Ihre Bank den Betrag umrechnet, sind kleine Abweichungen auf dem Kontoauszug normal.',
    free: ['Kostenlose Probestunde', 'Eine Knobelaufgabe und ein erstes Programm', 'Keine Karte nötig'],
    group: ['Fünfzehn bis zwanzig Kinder ähnlichen Alters', 'Ein fester Mentor', 'Zwei Stunden pro Woche', 'Monatlich kündbar'],
    one: ['Ihr Kind mit eigenem Mentor', 'Tempo und Projekte nach Ihrem Kind', 'Termine nach Ihrem Wochenplan']
  },

  faq: {
    eyebrow: 'Fragen von Eltern aus Hannover',
    h2: 'Programmieren lernen für Kinder in Hannover: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein, wir unterrichten nur auf Englisch, immer live. Viele Eltern sehen darin einen Vorteil: Programmieren und Englisch zugleich, zweimal pro Woche. Der Mentor wählt einfache Sätze, wiederholt geduldig und gewöhnt sich an die Aussprache Ihres Kindes.' },
      { q: 'Ab welcher Klasse ist Informatik in Niedersachsen Pflicht?', a: 'Ab Klasse 9. Laut dem GI-Ländervergleich 2026/27 wird Informatik seit dem Schuljahr 2024/25 in Klasse 9 und 10 an allen allgemeinbildenden Schularten als Pflichtfach unterrichtet. Vorher gibt es je nach Schulform Wahlangebote, frühestens ab Klasse 6.' },
      { q: 'Gibt es Informatik an Grundschulen in Hannover?', a: 'Ein eigenes Fach Informatik gibt es in den Klassen 1 bis 4 in Niedersachsen nicht. Deshalb beginnen viele Familien in der Grundschulzeit zu Hause oder online.' },
      { q: 'Ist mein Kind mit 6 Jahren schon alt genug?', a: 'Ja. Sechs- und Siebenjährige starten mit Scratch-Bausteinen und Rätseln, ganz ohne Tippen. Mit etwa neun Jahren wechseln die meisten Kinder zu getipptem Python.' },
      { q: 'Wann findet der Unterricht statt?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.' },
      { q: 'Von wo aus wird unterrichtet?', a: 'Aus Indien, per Live-Video. Eine Stunde um 16:20 Uhr in Hannover beginnt im Winter um 20:50 Uhr indischer Zeit, im Sommer um 19:50 Uhr. Ihr Kind hat dabei immer denselben Mentor.' },
      { q: 'Wie meldet sich mein Kind beim Informatik-Biber an?', a: 'Die Anmeldung übernimmt die Schule. Teilnehmen kostet nichts, Vorwissen ist nicht nötig, und mitmachen dürfen alle ab Klasse 3. Gespielt wird vom 9. bis 20. November 2026. Mit den Veranstaltern sind wir nicht verbunden.' },
      { q: 'Was ist das Straßennamen-Projekt?', a: 'Ein eigenes Python-Projekt mit dem offenen Straßenverzeichnis der Landeshauptstadt Hannover. Die Kinder sortieren 3.615 Straßennamen, sehen, dass der Computer den Östbergweg hinter die Zwinglistraße stellt, und bringen ihm mit einer Schlüsselfunktion die deutsche Reihenfolge bei.' },
      { q: 'Wie groß sind die Gruppen?', a: 'Fünfzehn bis zwanzig Kinder ähnlichen Alters. Alternativ gibt es Einzelunterricht zu vereinbarten Zeiten.' },
      { q: 'In welcher Währung zahle ich?', a: 'Angezeigt wird der Monatsbetrag in Euro, umgerechnet mit dem EZB-Referenzkurs. Belastet wird in US-Dollar, und Ihre Bank rechnet um. Die erste Stunde ist gratis.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weiterlesen',
    h2: 'Passende Seiten',
    lede: 'Weitere Informationen für Familien in Hannover.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Alle Seiten für Familien in Deutschland (englischsprachig).' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Informatik in allen 16 Bundesländern, auf Deutsch erklärt.' },
      { href: '/python-classes-for-kids-germany', label: 'Python für Kinder', p: 'Wie getippter Code für Kinder aussieht (auf Englisch).' },
      { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber auf Englisch', p: 'Wie der Biber funktioniert und wie man übt.' },
      { href: '/coding-classes-in-lower-saxony', label: 'Coding classes in Lower Saxony', p: 'Die Seite für ganz Niedersachsen (englischsprachig).' },
      { href: '/how-we-teach', label: 'So unterrichten wir', p: 'Ein Blick in den Live-Unterricht.' }
    ]
  },

  start: {
    h2: 'Kostenlose Probestunde buchen',
    lede: 'Zur Probe trifft Ihr Kind seinen Mentor, knobelt an einer Aufgabe und baut gemeinsam mit ihm ein winziges erstes Programm. Sie sehen, wie es mit den Ideen und mit dem Englisch zurechtkommt, und wir schlagen einen passenden Kurs und eine Gruppe vor.',
    readFirst: 'Vorab können Sie lesen, <a class="ag-inline-link" href="/how-we-teach">wie wir unterrichten</a>, oder <a class="ag-inline-link" href="/courses">alle Kurse</a> mit ihren Lehrplänen ansehen.',
    note: 'Der Unterricht ist live und online, ausschließlich auf Englisch, mit Mentoren in Indien. Am schnellsten erreichen Sie uns per WhatsApp.',
    formNote: 'Kostenlos und unverbindlich.'
  },

  footer: {
    cols: [
      { h4: 'Für Kinder', links: [
        { href: '/coding-classes-for-kids-germany', label: 'Coding for kids' },
        { href: '/scratch-classes-for-kids-germany', label: 'Scratch für Kinder' },
        { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber' },
        { href: '/ai-tools-age-guide', label: 'KI-Werkzeuge nach Alter' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online' },
        { href: '/student-labs', label: 'Schülerprojekte' },
        { href: '/how-we-teach', label: 'So unterrichten wir' }
      ] }
    ],
    bottomRight: 'Ö kommt nicht nach Z'
  },

  personalityCss: `
.ag-root.ag-han .ag-hero h1 { letter-spacing: -0.011em; hyphens: auto; }
.ag-root.ag-han .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-han .ag-section-head h2 { max-width: 34ch; hyphens: auto; }
.ag-root.ag-han .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-han .ag-steps li { line-height: 1.55; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27, Seite Niedersachsen; Bundesweite Informatikwettbewerbe, Informatik-Biber und Jugendwettbewerb Informatik; AGIS-Verzeichnis; KMK-Ferienübersicht 2026/27; Destatis GV-ISys; Einheitenzeitgesetz; gelesen am 2. November 2026. Landeshauptstadt Hannover, Bereich Geoinformation, Straßenverzeichnis Januar 2026, CC BY 4.0, gelesen am 3. November 2026.',
    localProject: 'Warum steht der Östbergweg hinter der Zwinglistraße: ein eigenes Python-Projekt mit 3.615 Namen aus dem Straßenverzeichnis der Landeshauptstadt Hannover. sorted() stellt den Östbergweg ans Ende, weil Ö die Zeichennummer 214 und Z die 90 hat; eine Schlüsselfunktion, die Umlaute und ß ersetzt, setzt ihn auf Platz 2.496 zwischen Ostafrikastraße und Osterbrückenweg. Lesson family: computers sort by character numbers; teach sorted() the German order with a key.',
    requiredMentions: ['strassen_2026.tsv', 'Straßennamen: 3615', 'Zeichennummern Z und Ö: 90 214', 'Östbergweg auf Platz 3615 statt 2496', 'Erster: Aachener Straße', 'das Pflichtfach Informatik in den Jahrgangsstufen 9 und 10', 'vom 9. bis 20. November 2026', 'Ö kommt nicht nach Z'],
    sources: [
      { claim: 'Niedersachsen: Pflichtfach Informatik Klasse 9 und 10 seit 2024/25; Wahlangebote; Grundschule 1 bis 4; G9.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/niedersachsen' },
      { claim: 'Informatik-Biber: Format, Teilnahme, Schulen 2025.', url: 'https://bwinf.de/biber/' },
      { claim: 'Biberwochen 2026, 20. Durchführung, Schnupper-Biber.', url: 'https://bwinf.de/biber/2026/' },
      { claim: 'Jugendwettbewerb Informatik: ab Klasse 3, Level Bronze.', url: 'https://bwinf.de/jugendwettbewerb/' },
      { claim: 'Ferien Niedersachsen 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'International School Hannover Region.', url: 'https://www.agis-schools.org/school/international-school-hannover-region' },
      { claim: 'Straßenverzeichnis Hannover, Lizenz CC BY 4.0.', url: 'https://www.hannover.de/Leben-in-der-Region-Hannover/Verwaltungen-Kommunen/Die-Verwaltung-der-Landeshauptstadt-Hannover/Dezernate-und-Fachbereiche-der-LHH/Stadtentwicklung-und-Bauen/Fachbereich-Planen-und-Stadtentwicklung/Geoinformation/Open-GeoData/Stra%C3%9Fenverzeichnis' }
    ],
    rejectedClaims: [
      'Eine verbindliche Norm für die deutsche Sortierung: nicht behauptet; die Seite nennt die Ersetzungsregel als unsere Wahl.',
      'Die International School Hannover Region als Herkunft unserer Schülerinnen und Schüler: abgelehnt; nur als Kontext.',
      'Unterricht auf Deutsch: Wir unterrichten nur auf Englisch, und die Seite sagt das.',
      'Eine Verbindung zu BWINF, dem Kultusministerium oder der Stadt Hannover: keine.'
    ]
  }
};
