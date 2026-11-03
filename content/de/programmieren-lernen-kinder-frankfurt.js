'use strict';
// Programmieren lernen für Kinder in Frankfurt (ag- German city door, Germany cluster P5 row DE122, rows.tsv city-de).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md. Owner 2026-11-02: classes are live, in English only,
// with mentors who match the learner's pace and accent; German pages say "auf Englisch" in the capsule and frame it
// as a benefit. Formal "Sie" throughout. Pages show euro; checkout charges USD.
// Angle (German, for parents of children 6 to 12): Hessen has no Informatik for all and no plan for it, so the choice
// lies with the family; the transition after Klasse 4 in Hessen; what learning in English means for a Grundschule child;
// the Informatik-Biber and the Känguru in 2026/27; and a project on the 44 Naturdenkmale of Frankfurt, in which one
// table cell holds several reasons and must be split before counting.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/programmieren-lernen-kinder-frankfurt/
// and facts-school/src/, fetched 2 and 3 Nov 2026):
//  - GI Informatik-Monitor 2026/27, Hessen (infmon-hessen): "Schulartübergreifend findet kein verbindlicher
//    Informatikunterricht statt."; "Im gymnasialen Bildungsgang kann Informatik als Teil des Wahlunterrichts je
//    einstündig ab der Jahrgangsstufe 7 angeboten werden." National (FACTS 96): "In Berlin, Brandenburg und Hessen sind
//    keine verbindlichen Vorhaben für die Einführung des Pflichtfachs Informatik bekannt."
//  - kultus.hessen.de Grundschule (he-gs.html): "Im letzten Schuljahr der Grundschule muss eine Entscheidung über die
//    weiterführende Schule für das Kind getroffen werden." KMK Primarbereich (FACTS 1): Grundschule Klasse 1 bis 4.
//  - KMK FER2026_27 (FACTS 276): Hessen Weihnachten 23.12. bis 12.01., Ostern 22.03. bis 02.04.2027, Sommer 28.06. bis
//    06.08.2027.
//  - bwinf.de (FACTS 129 to 136): Biber kostenlos, Klasse 3 bis 13; 9. bis 20. November 2026; Ergebnisse Dezember 2026.
//  - Känguru (FACTS 183, 184, 186): 8. April 2027; Anmeldung 1. Dezember 2026 bis 31. Januar 2027; 75 Minuten, 24 Aufgaben
//    in Klasse 3 bis 6.
//  - Destatis GV-ISys (places.tsv): Frankfurt am Main 756.021 (31.12.2024).
//  - Time: EinhZeitG, SoZV; Sommerzeit 2027 ab 28. März.
//  - Data: Stadt Frankfurt am Main, "Naturdenkmale (WFS) Frankfurt am Main", Untere Naturschutzbehörde, via GovData
//    https://ckan.govdata.de/dataset/naturdenkmale-wfs-frankfurt-am-main, licence Datenlizenz Deutschland Namensnennung
//    2.0, attribution "Stadt Frankfurt am Main" (naturdenkmale-record.xml: "Es gilt die Datenlizenz Deutschland –
//    Namensnennung – Version 2.0"). GetFeature GeoJSON, 44 features, all "Verordnungsdatum" 29.10.2025, downloaded
//    3 November 2026 (naturdenkmale.geojson, 91,860 bytes). Fields Nummer, Name, Baumart, Schutzgrund (column label
//    "Schutzgrund gem. § 28 Abs. 1 BNatschG").
// Our own calculations (scratchpad de/w/C3/de122/, python3 -I): v1 prints "Verschiedene Antworten: 15" and "Wegen
// Schönheit geschützt: 0"; v1+v2 print 37 Seltenheit, 35 Eigenart, 35 Schönheit, 13 naturgeschichtliche Gründe,
// 2 landeskundliche Gründe, 1 wissenschaftliche Gründe, 1 wissenschaftliche und landeskundliche Gründe. 19 rows read
// "Seltenheit, Eigenart, Schönheit" and 1 reads "Schönheit, Eigenart, Seltenheit". Baumart empty for 8 (Sausee,
// Erlenbruch, ... Bergkuppe Berger Warte); Stieleiche 7, Sumpfzypresse 5.
// Lesson family: one cell can hold several answers; split it before you count.

const { DE } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'zaehler = {}',
  'with open("naturdenkmale.csv", encoding="utf-8") as datei:',
  '    for zeile in csv.DictReader(datei):',
  '        grund = zeile["schutzgrund"]',
  '        zaehler[grund] = zaehler.get(grund, 0) + 1',
  '',
  'print("Verschiedene Antworten:", len(zaehler))',
  'print("Wegen Schönheit geschützt:", zaehler.get("Schönheit", 0))'
].join('\n');

const V2 = [
  'zaehler = {}',
  'with open("naturdenkmale.csv", encoding="utf-8") as datei:',
  '    for zeile in csv.DictReader(datei):',
  '        for grund in zeile["schutzgrund"].split(","):',
  '            grund = grund.strip()',
  '            zaehler[grund] = zaehler.get(grund, 0) + 1',
  '',
  'for grund in sorted(zaehler, key=zaehler.get, reverse=True):',
  '    print(zaehler[grund], grund)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'stadt', label: 'Frankfurt: Programmieren für Kinder' },
  slug: 'programmieren-lernen-kinder-frankfurt',
  code: 'pfr',
  accent: '#7E5282',
  accentRationale: 'Programmieren lernen für Kinder in Frankfurt: ein gedecktes Violett #7E5282, die Farbe der Blutbuche im Palmengarten aus dem Naturdenkmal-Projekt, klar getrennt vom Pflaume-Ton der englischen Frankfurt-Seite; Kontrast 4.99 auf dem Papier #FBF8F2',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }, { slug: 'coding-classes-in-hesse', name: 'Hessen' }],
  routeLabel: 'Programmieren lernen für Kinder in Frankfurt (auf Englisch)',
  title: 'Programmieren lernen für Kinder in Frankfurt: live auf Englisch',
  description: 'Programmieren lernen für Kinder in Frankfurt von 6 bis 12: live auf Englisch, was hessische Schulen bieten, der Informatik-Biber und ein Projekt mit Stadtdaten.',
  ogDescription: 'Live-Unterricht im Programmieren für Frankfurter Kinder von 6 bis 12, auf Englisch und im Tempo Ihres Kindes: warum Informatik in Hessen kein Pflichtfach ist, der Informatik-Biber im November 2026 und ein Projekt mit den Naturdenkmalen der Stadt.',
  twitterDescription: 'Programmieren für Frankfurter Kinder, live auf Englisch: Hessens Schulregeln, der Biber und echte Stadtdaten.',
  pageName: 'Programmieren lernen für Kinder in Frankfurt',
  webPageDescription: 'Ein Leitfaden für Frankfurter Eltern von Kindern zwischen 6 und 12 Jahren zum Programmierenlernen: die hessischen Regeln zur Informatik nach dem Informatik-Monitor 2026/27, Termine von Informatik-Biber und Känguru, und ein eigenes Projekt mit den Naturdenkmalen der Stadt Frankfurt am Main.',
  courseDescription: 'Live-Online-Programmierkurse auf Englisch für Kinder von 6 bis 12 Jahren in Frankfurt: zuerst Scratch, dann Python und kleine Datenprojekte, in einer Gruppe von fünfzehn bis zwanzig Kindern oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kinder in Frankfurt',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#schule', label: 'Schule' },
    { href: '#englisch', label: 'Englisch' },
    { href: '#projekt', label: 'Projekt' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Frankfurt am Main &middot; Programmieren für Kinder &middot; 6 bis 12 Jahre',
  h1: 'Programmieren lernen für Kinder in Frankfurt',
  lede: 'Ob ein Frankfurter Kind vor der weiterführenden Schule programmieren lernt, entscheidet in Hessen nicht der Stundenplan, sondern die Familie: Informatik ist in keiner hessischen Schulart verpflichtend. Hier lesen Sie, was Frankfurter Schulen anbieten und ab welcher Klasse, wie unser Live-Unterricht auf Englisch für Grundschulkinder funktioniert, welche kostenlosen Wettbewerbe 2026/27 anstehen, und wie Kinder mit einer echten Liste der Stadt, den 44 Frankfurter Naturdenkmalen, lernen, sauber zu zählen.',
  secondaryCta: { href: '#projekt', label: 'Zum Naturdenkmal-Projekt' },
  wa: 'Hallo Modern Age Coders, wir wohnen in Frankfurt und unser Kind möchte programmieren lernen. Können wir eine kostenlose Probestunde auf Englisch buchen?',
  heroNote: 'Live-Online-Unterricht seit 2020 &middot; mehr als 10.000 Lernende weltweit &middot; Unterricht auf Englisch mit festem Mentor',
  spec: [
    ['Alter', '6 bis 12 Jahre, nach Alter gruppiert'],
    ['Einstieg', 'Scratch, danach Python'],
    ['Gruppe', 'Fünfzehn bis zwanzig Kinder, oder einzeln'],
    ['Zeiten', 'Nachmittags oder am Wochenende'],
    ['Unterricht', 'Auf Englisch, mit Mentoren aus Indien'],
    ['Probestunde', 'Kostenlos, ohne Karte']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Programmieren lernen für Kinder in Frankfurt: Modern Age Coders unterrichtet Kinder von 6 bis 12 Jahren live online und auf Englisch, mit Mentoren aus Indien. Die Jüngeren bauen Spiele mit Scratch, ab etwa 9 Jahren schreiben die Kinder echten Python-Code und arbeiten mit echten Daten der Stadt. Jedes Kind hat einen festen Mentor, der sich in Sprechtempo und Aussprache nach ihm richtet. So übt Ihr Kind Programmieren und Englisch zugleich, in der Gruppe oder im Einzelunterricht.',

  picks: {
    eyebrow: 'Der Einstieg',
    h2: 'Drei Kurse für Frankfurter Kinder zwischen 6 und 12',
    lede: 'Ein Python-Kurs für Neun- bis Zwölfjährige, ein Scratch-Kurs von drei bis vier Monaten als erster Versuch und ein Knobelkurs für Wettbewerbsfans.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PFR / 01', title: 'Python und KI für Kinder', alt: 'Kursbild Python und KI für Kinder', note: 'Für 9 bis 12 Jahre, acht bis zehn Monate lang. Python-Code von Hand getippt ab der ersten Woche, Zeichnungen mit der Turtle, kleine Spiele und Datenprojekte wie das Naturdenkmal-Projekt.' },
      { course: 'scratch-programming-complete-course', code: 'PFR / 02', title: 'Scratch für Kinder', alt: 'Kursbild Scratch für Kinder', note: 'Drei bis vier Monate, für Kinder von 6 bis 12. Vom ersten Block zu eigenen Spielen und Animationen; so sehen Sie schnell, ob der Funke überspringt.' },
      { course: 'german-informatics-competitions-course-biber-bwinf-bwki', code: 'PFR / 03', title: 'Informatik-Wettbewerbe', alt: 'Kursbild Informatik-Wettbewerbe Biber, BwInf und BWKI', note: 'Ab 9 Jahren, ab Klasse 3. Knobelaufgaben im Stil des Informatik-Bibers, die ganz ohne Programmierkenntnisse auskommen, und später erste Algorithmen.' }
    ]
  },

  sections: [
    {
      id: 'schule',
      eyebrow: 'Informatik in Hessen',
      h2: 'Lernen Kinder in Frankfurter Schulen programmieren?',
      lede: 'In der Grundschule nicht, und danach nur, wenn die Schule es anbietet und Ihr Kind es wählt. Alle Angaben in diesem Abschnitt stützen sich auf die Ausgabe 2026/27 des Informatik-Monitors und auf Seiten des Hessischen Kultusministeriums.',
      body: [
        { kind: 'two',
          leftH3: 'Kein Pflichtfach, auch nicht geplant',
          left: [
            'Für Hessen hält der Informatik-Monitor 2026/27 fest: "Schulartübergreifend findet kein verbindlicher Informatikunterricht statt." Hessen gehört damit zu den sechs Ländern ohne Informatik für alle Schülerinnen und Schüler.',
            'Anders als in Bremen oder Rheinland-Pfalz, wo ein Pflichtfach angekündigt ist, nennt der Monitor für Hessen keinen Termin: "In Berlin, Brandenburg und Hessen sind keine verbindlichen Vorhaben für die Einführung des Pflichtfachs Informatik bekannt."'
          ],
          rightH3: 'Was es gibt',
          right: [
            'Am Gymnasium kann Informatik ab Klasse 7 als Wahlunterricht angeboten werden, mit je einer Wochenstunde. In den Haupt- und Realschulzweigen darf eine Schule Informatik im Wahlpflichtunterricht einrichten, eigene Lehrpläne dafür gibt es laut Monitor aber nicht.',
            'Die Grundschule dauert in Hessen, wie fast überall in Deutschland, von Klasse 1 bis 4. Für Kinder von 6 bis 10 Jahren sieht der hessische Stundenplan also keine einzige Informatikstunde vor.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Informatik im Frankfurter Schulweg nach hessischen Regeln, Schuljahr 2026/27', head: ['Klasse', 'Schulstufe', 'Informatik'], rows: [
          ['1 bis 4', 'Grundschule', 'Kein Unterricht vorgesehen'],
          ['5 und 6', 'Alle weiterführenden Schulen', 'Kein Unterricht vorgesehen'],
          ['ab 7', 'Gymnasium', 'Wahlunterricht, eine Wochenstunde, wenn angeboten'],
          ['ab 7', 'Haupt- und Realschulzweig', 'Wahlpflicht möglich, ohne eigenen Lehrplan'],
          ['Oberstufe', 'Gymnasium', 'Grund- oder Leistungskurs, falls die Schule ihn anbietet']
        ] },
        { kind: 'source', html: 'Quellen: Informatik-Monitor 2026/27 (herausgegeben von der Gesellschaft für Informatik), Seite Hessen und Ländervergleich; Kultusministerkonferenz, Primarbereich; Hessisches Ministerium für Kultus, Bildung und Chancen, Seite Grundschule. Abgerufen am 2. und 3. November 2026.' },
        { kind: 'p', mt: true, html: 'Für Eltern in Frankfurt ist ein zweiter Punkt wichtig. Das hessische Kultusministerium schreibt zur Grundschule: "Im letzten Schuljahr der Grundschule muss eine Entscheidung über die weiterführende Schule für das Kind getroffen werden." In Klasse 4 geht es also um Gymnasium, Realschule oder Gesamtschule, aber nirgends um Informatik. Wer möchte, dass sein Kind früh logisch denken und mit dem Computer gestalten lernt, muss das außerhalb des Stundenplans organisieren, und genau dort setzen wir an.' }
      ]
    },
    {
      id: 'englisch',
      eyebrow: 'Unterricht auf Englisch',
      h2: 'Kann ein Grundschulkind auf Englisch programmieren lernen?',
      lede: 'Ja, und oft leichter als gedacht. Unser Unterricht findet ausschließlich auf Englisch statt, live und mit einem festen Mentor, der sich nach Ihrem Kind richtet.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Offen gesagt: nur Englisch', p: 'Wir unterrichten nicht auf Deutsch, und das sagen wir vor der Probestunde. Für ein Kind an einer internationalen oder bilingualen Schule ist Englisch ohnehin Alltag. Ein Kind an einer deutschen Grundschule lernt nebenbei die englischen Wörter, aus denen Programmiersprachen bestehen: repeat, if, else, print.' },
          { h3: 'Ein Mentor, der wartet', p: 'Die Mentoren sprechen langsam und deutlich, zeigen jeden Schritt auf dem Bildschirm und wiederholen Anweisungen mit einfacheren Worten. Wenn ein siebenjähriges Kind mitten im Satz ein deutsches Wort benutzt, bekommt es das englische dazu, ohne Druck.' },
          { h3: 'Zeigen statt erklären', p: 'In den ersten Wochen wird vor allem gebaut: Blöcke ziehen, Programm starten, beobachten, ändern. Das Englisch, das Ihr Kind dafür braucht, ist überschaubar und wächst mit dem Selbstvertrauen.' }
        ] },
        { kind: 'p', mt: true, html: 'Unsere Mentoren arbeiten von Indien aus und unterrichten live per Video. Darum passen die Frankfurter Nachmittage gut: Dann ist in Indien Abend. Der Mentor bleibt derselbe, Woche für Woche. Schon nach wenigen Terminen kennt er die Vorlieben Ihres Kindes: knobeln, bauen oder erst einmal zuschauen.' }
      ]
    },
    {
      id: 'projekt',
      tint: 'tint',
      eyebrow: 'Ein echtes Frankfurter Projekt',
      h2: 'Warum steht ein Baum unter Schutz? Die Frankfurter Naturdenkmale zählen',
      lede: 'Frankfurt veröffentlicht die Liste seiner Naturdenkmale als offene Daten: alte Eichen, Linden, Sumpfzypressen im Zoo, aber auch ein Steilufer und eine Maininsel. Ältere Kinder lernen damit eine Regel, die in jeder Tabelle gilt: Manchmal stehen in einem Kästchen mehrere Antworten.',
      body: [
        { kind: 'two',
          leftH3: 'Die Daten',
          left: [
            'Die Stadt Frankfurt am Main stellt den Datensatz Naturdenkmale (WFS) unter der Datenlizenz Deutschland Namensnennung 2.0 bereit. Am 3. November 2026 enthielt er 44 Einträge, alle mit dem Verordnungsdatum 29.10.2025. Bei 36 Einträgen steht eine Baumart dabei, am häufigsten die Stieleiche mit 7 Einträgen; 8 Naturdenkmale wie der Sausee oder die Bergkuppe Berger Warte sind gar keine Bäume.',
            'Für jedes Naturdenkmal nennt die Liste den Schutzgrund, zum Beispiel Seltenheit oder Schönheit. Wir haben daraus eine kleine Datei gemacht: naturdenkmale.csv mit den Spalten nummer, name, baumart und schutzgrund.'
          ],
          rightH3: 'Die Frage',
          right: [
            'Wie viele Frankfurter Naturdenkmale sind wegen ihrer Schönheit geschützt? Das erste Programm zählt, wie oft jede Antwort in der Spalte schutzgrund vorkommt, und schaut dann bei "Schönheit" nach.',
            'Bevor Ihr Kind das Programm startet, soll es schätzen: eher 5, eher 20 oder eher 40?'
          ] },
        { kind: 'code', label: 'Version 1: jede Antwort zählen', lang: 'Python', code: V1, note: 'Ausgabe: <code>Verschiedene Antworten: 15</code> und <code>Wegen Schönheit geschützt: 0</code>. Kein einziges? Das kann nicht stimmen.' },
        { kind: 'p', mt: true, html: 'Der Blick in die Datei löst das Rätsel. In der Spalte schutzgrund steht fast nie nur ein Wort, sondern eine Aufzählung, zum Beispiel "Seltenheit, Eigenart, Schönheit". Das Programm hält diese ganze Zeile für eine einzige Antwort. So entstehen 15 verschiedene "Antworten", und das Wort "Schönheit" allein kommt kein einziges Mal vor. Noch merkwürdiger: 19 Einträge lauten "Seltenheit, Eigenart, Schönheit" und einer "Schönheit, Eigenart, Seltenheit". Für uns ist das dasselbe, für den Computer sind es zwei verschiedene Texte.' },
        { kind: 'code', label: 'Version 2: erst trennen, dann zählen', lang: 'Python', code: V2, note: 'Läuft nach Version 1. Ausgabe: <code>37 Seltenheit</code>, <code>35 Eigenart</code>, <code>35 Schönheit</code>, <code>13 naturgeschichtliche Gründe</code>, <code>2 landeskundliche Gründe</code>, <code>1 wissenschaftliche Gründe</code> und <code>1 wissenschaftliche und landeskundliche Gründe</code>.' },
        { kind: 'p', html: 'Jetzt stimmt das Bild: 35 der 44 Naturdenkmale sind auch wegen ihrer Schönheit geschützt, 37 wegen ihrer Seltenheit. Die Methode ist immer dieselbe: das Kästchen an den Kommas trennen, Leerzeichen entfernen, dann jeden Grund einzeln zählen. Die letzte Zeile zeigt, dass auch das noch nicht ganz fertig ist, denn "wissenschaftliche und landeskundliche Gründe" sind zwei Gründe, verbunden mit "und" statt mit einem Komma.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Schutzgründe der 44 Frankfurter Naturdenkmale (unsere Auszählung)', head: ['Schutzgrund', 'Ganze Zeile verglichen', 'Nach dem Trennen'], rows: [
          ['Seltenheit', '0', '37'],
          ['Eigenart', '0', '35'],
          ['Schönheit', '0', '35'],
          ['naturgeschichtliche Gründe', '0', '13']
        ] },
        { kind: 'source', html: 'Daten: Stadt Frankfurt am Main, Naturdenkmale (WFS) Frankfurt am Main, Datenlizenz Deutschland Namensnennung 2.0, heruntergeladen am 3. November 2026. Die Auszählung, die Tabelle und die Datei naturdenkmale.csv sind unsere eigene Arbeit. Ein Naturdenkmal kann mehrere Gründe haben, daher ergibt die Summe der Spalte mehr als 44.' },
        { kind: 'ol', mt: true, items: [
          '<strong>6 bis 8 Jahre, ohne Bildschirm.</strong> Fragen Sie fünf Familienmitglieder nach ihren Lieblingsfarben, wobei jeder zwei nennen darf. Machen Sie eine Strichliste. Wie viele Striche sind es am Ende, und warum mehr als fünf?',
          '<strong>8 bis 10 Jahre, mit Scratch.</strong> Speichern Sie drei Aufzählungen wie "rot, blau" in einer Liste. Lassen Sie eine Figur jedes Wort einzeln sagen und mitzählen.',
          '<strong>10 bis 12 Jahre, mit Python.</strong> Starten Sie Version 1, erklären Sie die Null und schreiben Sie Version 2 selbst, bevor Sie unsere ansehen.',
          '<strong>Weiterdenken.</strong> Ändern Sie Version 2 so, dass auch "und" als Trennzeichen gilt. Wie viele Naturdenkmale sind dann aus wissenschaftlichen Gründen geschützt?'
        ] }
      ]
    },
    {
      id: 'biber',
      eyebrow: 'Kostenlose Wettbewerbe',
      h2: 'An welchen Wettbewerben kann ein Frankfurter Kind 2026/27 teilnehmen?',
      lede: 'Zwei bundesweite Wettbewerbe eignen sich schon für Grundschulkinder. Bei beiden läuft die Anmeldung über die Schule.',
      body: [
        { kind: 'two',
          leftH3: 'Informatik-Biber, November 2026',
          left: [
            'Der Informatik-Biber der Bundesweiten Informatikwettbewerbe ist ein kostenloses Online-Quiz mit Denkaufgaben für die Klassen 3 bis 13, ganz ohne Vorkenntnisse. In der Grundschule sind es neun Aufgaben in 30 Minuten, allein oder zu zweit.',
            'Gespielt wird in den Biberwochen, 2026 vom 9. bis 20. November 2026. Anmelden kann nur die Schule, die das Quiz dann im Unterricht durchführt; die Ergebnisse erscheinen im Dezember 2026.'
          ],
          rightH3: 'Känguru der Mathematik, April 2027',
          right: [
            'Der Känguru-Wettbewerb findet 2027 ausnahmsweise erst am 8. April 2027 statt. Kinder der Klassen 3 bis 6 lösen 24 Aufgaben in 75 Minuten.',
            'Schulen melden sich vom 1. Dezember 2026 bis 31. Januar 2027 online an. Fragen Sie am besten bei der Klassenlehrerin oder dem Klassenlehrer nach, ob die Schule mitmacht.'
          ] },
        { kind: 'p', mt: true, html: 'Wir verwenden in unserem Unterricht keine echten Wettbewerbsaufgaben, sondern schreiben eigene Rätsel im gleichen Geist: Reihenfolgen finden, versteckte Regeln erkennen, Wege planen. Wir arbeiten nicht mit den Veranstaltern zusammen. Kinder, denen unsere Rätsel Spaß machen, haben meist auch am Biber und am Känguru Freude.' }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Wann findet der Unterricht in Frankfurter Zeit statt?',
      lede: 'Viele Familien wählen einen Nachmittag nach den Hausaufgaben oder den Samstagvormittag. Die Tabelle zeigt Beispiele in deutscher Zeit und die Uhrzeit des Mentors in Indien.',
      body: [
        { kind: 'table', numCols: [], caption: 'Beispielzeiten in Frankfurt und die indische Zeit', head: ['Frankfurt', 'Indische Zeit im Winter (bis 28. März 2027)', 'Indische Zeit im Sommer (ab 28. März 2027)'], rows: [
          ['15:20', '19:50', '18:50'],
          ['16:35', '21:05', '20:05'],
          ['Samstag 09:15', '13:45', '12:45']
        ] },
        { kind: 'source', html: 'Rechtsgrundlage ist das Einheitenzeitgesetz: Im Winter gilt MEZ, also UTC+1, im Sommer MESZ, also UTC+2. Am 25. Oktober 2026 wurden die Uhren zurückgestellt, am 28. März 2027 werden sie vorgestellt. In Indien gilt ganzjährig UTC+5:30, der Unterschied zur deutschen Zeit beträgt also vier Stunden und dreißig Minuten in der Winterzeit und drei Stunden und dreißig Minuten in der Sommerzeit. Die Uhrzeiten oben sind Beispiele, keine festen Gruppentermine.' },
        { kind: 'p', mt: true, html: 'Der Unterricht läuft auch in den hessischen Ferien weiter, etwa in den Weihnachtsferien vom 23. Dezember 2026 bis 12. Januar 2027 oder in den Osterferien (22.03. bis 02.04.2027). Manche Familien pausieren in den Sommerferien vom 28. Juni bis 6. August 2027 und steigen danach wieder ein.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Lernstufen',
    h2: 'Fünf Stufen vom ersten Block bis zu echten Daten',
    lede: 'Diese Stufen haben wir selbst festgelegt. Sie helfen uns bei der Einteilung in Gruppen und bei Rückmeldungen an Sie.',
    table: { caption: 'Programmieren von 6 bis 12 Jahren: unsere Stufen', head: ['Stufe', 'Alter (ungefähr)', 'Was gelingt'], rows: [
      ['1. Reihenfolge', '6 bis 7', 'Bildkarten richtig ordnen und eine Figur steuern'],
      ['2. Wiederholen', '7 bis 9', 'Etwas wiederholen lassen und ein Spiel per Tastendruck steuern'],
      ['3. Merken', '8 bis 10', 'Punkte in einer Variable zählen und Listen anlegen'],
      ['4. Tippen', '9 bis 11', 'Kleine Python-Programme mit Bedingungen schreiben'],
      ['5. Daten hinterfragen', '10 bis 12', 'Eine echte Datei einlesen und ein falsches Ergebnis aufdecken']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Stufe 5 ist das Naturdenkmal-Projekt. Wichtig ist nicht die Zahl 35, sondern ein Kind, das bei einer Null stutzt und nachsieht.',
      'Wir berichten, was Ihr Kind gebaut und erklärt hat, nicht wie viele Minuten es am Bildschirm saß.'
    ] },
    right: { h3: 'Für Kinder', ps: [
      'Steht eine Aufzählung in einem Kästchen, trennt man zuerst die Wörter und zählt dann.',
      'Ein Ergebnis von null ist eine Frage, keine Antwort.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse für Kinder in Frankfurt',
    lede: 'Jeder Kurs läuft live und auf Englisch; Ihr Kind lernt in einer Gruppe oder allein, immer beim selben Mentor.',
    bands: [
      { num: 'I', h3: 'Denken und Bauen', sub: '6 bis 15 Jahre', courses: [
        { code: 'PFR / DENK / 01', slug: 'kids-coding-blocks-masterclass', title: 'Programmieren für Kinder', blurb: 'Der lange Kurs von Scratch bis zu ersten Apps, 6 bis 12.' },
        { code: 'PFR / DENK / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Logisch denken', blurb: 'Denkaufgaben und Pläne in kleinen Schritten, 7 bis 12.' },
        { code: 'PFR / DENK / 03', slug: 'ai-literacy-for-kids-course', title: 'KI verstehen', blurb: 'Wie Maschinen lernen, ohne Erwachsenen-Konten, 8 bis 14.' }
      ] },
      { num: 'II', h3: 'Spiele', sub: '7 bis 14 Jahre', courses: [
        { code: 'PFR / SPIEL / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft programmieren', blurb: 'Vom Block zum Code in einer vertrauten Welt, 7 bis 12.' },
        { code: 'PFR / SPIEL / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox-Spiele', blurb: 'Eigene Spiele in Luau, 8 bis 14.' },
        { code: 'PFR / SPIEL / 03', slug: 'game-development-masterclass-for-kids', title: 'Spieleentwicklung', blurb: 'Drei Spielwelten in einem langen Kurs, 8 bis 12.' }
      ] },
      { num: 'III', h3: 'Eigene Projekte', sub: '8 bis 12 Jahre', courses: [
        { code: 'PFR / PROJ / 01', slug: 'block-coding-app-development-masterclass', title: 'Apps mit Blöcken', blurb: 'Funktionierende Handy-Apps, 8 bis 12.' },
        { code: 'PFR / PROJ / 02', slug: 'kids-ai-web-development-course', title: 'Eigene Webseiten', blurb: 'Die erste eigene Website gestalten, 9 bis 12.' },
        { code: 'PFR / PROJ / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ für Kinder', blurb: 'Rätsel und Spiele in C++, 9 bis 12.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'So läuft es ab',
    h2: 'Wie der Live-Unterricht in eine Frankfurter Woche passt',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Nachmittags', l: 'Nach Schule und Hausaufgaben, Frankfurter Zeit.' },
      { time: 'Wochenende', l: 'Samstag- oder Sonntagvormittag, ruhig für die Jüngsten.' },
      { time: 'Einzeln', l: 'Ein Termin, den Sie direkt mit dem Mentor abstimmen.' }
    ],
    cells: [
      { h3: 'Fester Mentor', p: 'Jede Woche dieselbe Person.' },
      { h3: 'Ruhiges Englisch', p: 'Kurze Sätze, gern auch zweimal.' },
      { h3: 'Selbst am Steuer', p: 'Ihr Kind klickt und tippt von Anfang an selbst.' },
      { h3: 'Altersgruppen', p: 'Sechsjährige lernen mit Gleichaltrigen.' },
      { h3: 'Kurze Berichte', p: 'Eltern erfahren, was entstanden ist.' },
      { h3: 'Zwei Formen', p: 'Gruppe mit fünfzehn bis zwanzig Kindern oder Einzelunterricht.' }
    ]
  },

  projectsH2: 'Projekte älterer Lernender',
  projectsLede: 'Wer mit sieben oder acht Jahren anfängt, baut als Jugendlicher oft schon richtige Anwendungen. Einige Projekte unserer älteren Lernenden zeigen wir unten; noch mehr finden Sie auf unserer englischsprachigen Seite <a class="ag-inline-link" href="/student-labs">Student labs</a>.',
  reviewsLede: 'Was Eltern und Lernende bei Google geschrieben haben, unverändert in der englischen Fassung.',

  fees: {
    h2: 'Was der Unterricht kostet',
    lede: 'Ein Monatsbeitrag deckt acht Live-Stunden ab. Die Euro-Preise hier sind mit dem Referenzkurs der Europäischen Zentralbank berechnet und dienen der Orientierung; die Zahlung selbst läuft in US-Dollar, und Ihre Bank wandelt sie in Euro um. Der Betrag auf dem Kontoauszug kann darum geringfügig abweichen.',
    free: ['Eine kostenlose Probestunde', 'Ein kleines Logikspiel und ein erstes Programm', 'Keine Karte nötig'],
    group: ['Fünfzehn bis zwanzig Kinder im gleichen Alter', 'Ein fester Mentor', 'Zwei Stunden pro Woche', 'Monatlich kündbar'],
    one: ['Ihr Kind und ein Mentor', 'Projekte nach den Interessen Ihres Kindes', 'Zeiten nach Absprache']
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    h2: 'Programmieren lernen für Kinder in Frankfurt: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein, wir unterrichten ausschließlich auf Englisch, und zwar immer live. Für Ihr Kind ist das ein Gewinn: Es lernt Programmieren und Englisch zugleich, denn Befehle wie repeat oder if sind ohnehin englische Wörter. Die Mentoren sprechen ruhig und stellen sich auf Sprechtempo und Aussprache Ihres Kindes ein.' },
      { q: 'Ist Informatik in Hessen ein Pflichtfach?', a: 'Nein. Der Informatik-Monitor 2026/27 nennt für keine hessische Schulart einen verpflichtenden Informatikunterricht, und Pläne für ein Pflichtfach kennt er nicht. Am Gymnasium kann Informatik ab Klasse 7 als Wahlunterricht mit einer Wochenstunde angeboten werden.' },
      { q: 'Wie alt muss mein Kind mindestens sein?', a: 'Sechs Jahre. Kinder in diesem Alter starten mit Scratch: Dort werden farbige Blöcke zusammengesteckt, getippt wird kaum. Mit etwa 9 Jahren sind die meisten Kinder bereit für Python, mit dem unser Kurs Python und KI für Kinder beginnt.' },
      { q: 'Mein Kind spricht noch wenig Englisch. Geht das trotzdem?', a: 'Meistens ja. Am Anfang braucht ein Kind nur wenige Wörter wie move, repeat oder when clicked, und es sieht jeden Schritt auf dem Bildschirm. In der kostenlosen Probestunde merkt der Mentor schnell, ob Ihr Kind gut folgen kann, und sagt es Ihnen offen.' },
      { q: 'Wann finden die Stunden statt?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. In Frankfurt sind Nachmittage zwischen etwa 15 und 18 Uhr beliebt.' },
      { q: 'Wie kommt mein Kind zum Informatik-Biber?', a: 'Über seine Schule. Der Biber 2026 läuft vom 9. bis 20. November 2026, ist kostenlos und braucht keine Vorkenntnisse; mitmachen können die Klassen 3 bis 13. Fragen Sie in der Schule nach, ob sie angemeldet ist.' },
      { q: 'Woher kommen die Mentoren?', a: 'Aus Indien; sie unterrichten von dort live über Video. Wenn es in Frankfurt 16:35 Uhr ist, zeigt die Uhr des Mentors im Winter 21:05 Uhr. Der Mentor Ihres Kindes wechselt nicht.' },
      { q: 'Läuft der Unterricht in den hessischen Ferien weiter?', a: 'Ja, unsere Mentoren richten sich nicht nach dem hessischen Ferienkalender. Sie können in den Ferien weitermachen oder pausieren, etwa in den Sommerferien vom 28. Juni bis 6. August 2027.' },
      { q: 'Was kostet der Unterricht, und in welcher Währung zahle ich?', a: 'Sie zahlen pro Monat. Die Euro-Beträge auf dieser Seite beruhen auf dem Referenzkurs der Europäischen Zentralbank; belastet wird Ihr Konto jedoch in US-Dollar, und den Wechselkurs setzt Ihre Bank an. Kleine Abweichungen auf dem Kontoauszug sind deshalb normal. Für die erste Stunde zahlen Sie nichts.' },
      { q: 'Was baut mein Kind konkret?', a: 'Unter 9 Jahren vor allem Spiele, Geschichten und Quiz in Scratch. Danach Python-Programme: Zeichnungen mit Code, kleine Spiele und ab etwa 10 Jahren Projekte mit echten Daten, wie die Frankfurter Naturdenkmale auf dieser Seite.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weitere Seiten',
    h2: 'Weiterlesen',
    lede: 'Passende Seiten für Familien, teils auf Englisch.',
    items: [
      { href: '/coding-classes-for-kids-berlin', label: 'Coding classes for kids in Berlin', p: 'Programmieren für Kinder in Berlin, auf Englisch.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Informatik in allen 16 Ländern im Überblick.' },
      { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber practice', p: 'Eigene Übungsrätsel im Stil des Bibers.' },
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Unser Überblick für ganz Deutschland.' },
      { href: '/coding-classes-in-hesse', label: 'Coding classes in Hesse', p: 'Unsere Seite für ganz Hessen, auf Englisch.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Ein Blick in eine Live-Stunde.' }
    ]
  },

  start: {
    h2: 'Die erste Stunde ist kostenlos',
    lede: 'Ihr Kind spielt in der ersten Stunde ein kurzes Denkspiel und baut sein erstes kleines Programm. Dabei merkt der Mentor, wie es an Aufgaben herangeht und wie sicher es dem Englisch folgt; danach empfiehlt er Kurs und Gruppe.',
    readFirst: 'Vorab lesenswert: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> zeigt, wie eine Live-Stunde abläuft, und <a class="ag-inline-link" href="/courses">All courses</a> enthält alle Lehrpläne (beide Seiten auf Englisch).',
    note: 'Alle Stunden laufen live online, auf Englisch, mit Mentoren in Indien. Für schnelle Fragen schreiben Sie uns einfach auf WhatsApp.',
    formNote: 'Kostenlos, ohne Karte und ohne Verpflichtung.'
  },

  footer: {
    cols: [
      { h4: 'Für Kinder', links: [
        { href: '/courses/python-ai-kids-masterclass', label: 'Python und KI' },
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch' },
        { href: '/courses/german-informatics-competitions-course-biber-bwinf-bwki', label: 'Wettbewerbe' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik nach Land' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Erst trennen, dann zählen'
  },

  personalityCss: `
.ag-root.ag-pfr .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-pfr .ag-capsule { border-left-width: 5px; border-radius: 6px; }
.ag-root.ag-pfr .ag-section-head h2 { max-width: 30ch; hyphens: auto; }
.ag-root.ag-pfr .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-pfr .ag-table td { hyphens: auto; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Hessen, Ländervergleich); Hessisches Ministerium für Kultus, Bildung und Chancen (Grundschule); KMK Primarbereich und Ferienkalender 2026/27; Bundesweite Informatikwettbewerbe (Biber 2026); Känguru der Mathematik e.V. (2027); Einheitenzeitgesetz; Destatis GV-ISys. Data: Stadt Frankfurt am Main, Naturdenkmale (WFS), Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'Die Frankfurter Naturdenkmale: an original Python project on the city\'s 44 natural monuments; counting whole cells gives 15 different answers and 0 for Schönheit; splitting at commas gives 37 Seltenheit, 35 Eigenart, 35 Schönheit; the "und" row shows the split is still incomplete; screen-free and Scratch versions. Lesson family: one cell can hold several answers; split before you count.',
    requiredMentions: ['naturdenkmale.csv', 'Verschiedene Antworten: 15', 'Wegen Schönheit geschützt: 0', '37 Seltenheit', 'Schönheit, Eigenart, Seltenheit', 'Im letzten Schuljahr der Grundschule muss eine Entscheidung', 'ausnahmsweise erst am 8. April 2027', 'Erst trennen, dann zählen'],
    sources: [
      { claim: 'Hessen: kein verbindlicher Informatikunterricht; Wahlunterricht ab Klasse 7.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/hessen' },
      { claim: 'Keine verbindlichen Vorhaben in Berlin, Brandenburg, Hessen.', url: 'https://informatik-monitor.de/' },
      { claim: 'Hessen Grundschule: Entscheidung über die weiterführende Schule im letzten Schuljahr.', url: 'https://kultus.hessen.de/schulsystem/schulformen-und-bildungsgaenge/grundschule' },
      { claim: 'Hessische Ferien 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Informatik-Biber 2026.', url: 'https://bwinf.de/biber/2026/' },
      { claim: 'Frankfurter Naturdenkmale, Lizenz.', url: 'https://ckan.govdata.de/dataset/naturdenkmale-wfs-frankfurt-am-main' }
    ],
    rejectedClaims: [
      'Unterricht auf Deutsch: nicht angeboten; die Seite sagt es offen.',
      'Förderung über Bildungsgutschein oder Lernförderung: nicht vorhanden, nicht behauptet.',
      'Echte Biber- oder Känguru-Aufgaben: nicht verwendet; die Übungen sind unsere eigenen.',
      'Eine Verbindung zur Stadt, zum Ministerium oder zu den Wettbewerben: keine.'
    ]
  }
};
