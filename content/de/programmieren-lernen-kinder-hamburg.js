'use strict';
// Programmieren lernen für Kinder in Hamburg (ag- German city door, Germany cluster P5 row DE111).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD. Formal "Sie" throughout.
// Angle: Hamburg parents of children aged 6 to 12 searching for a Programmierkurs. Spine (German, its own): what we are
// and are not (online, auf Englisch, Mentoren aus Indien; the Zentralbibliothek's MakerLab as a free local place, from
// the open data itself), when Informatik reaches the Hamburg timetable (Klasse 7, four compulsory hours since 2025/26),
// why English lessons also teach how numbers are written differently, a text-to-number project on the Bücherhallen
// open data, free contests for primary and Klasse 5/6 children, and Hamburg times and holidays.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/programmieren-lernen-kinder-hamburg/):
//  - GI Informatik-Monitor 2026/27, Hamburg page (infmon-hamburg/09e5d2a0.txt): "An Stadtteilschulen und Gymnasien sind
//    seit dem Schuljahr 2025/26 vier Wochenstunden Informatik verpflichtend."; "Über die Verteilung der vier Stunden auf
//    die Jahrgangsstufen 7 bis 10 entscheiden die Schulen."; "Darüber hinaus kann das Fach Informatik im
//    Wahlpflichtbereich angeboten werden."; Bildungspläne "Naturwissenschaften/Technik" in 5 and 6 "mit dem Themenfeld
//    „Informatik“ anteilig"; "Die Primarstufe umfasst die Grundschule mit den Jahrgangsstufen 1 bis 4."; SWK
//    "Pflichtfach Informatik im Umfang von sechs Wochenstunden über die gesamte Sekundarstufe I". National (FACTS 91):
//    "Mit Baden-Württemberg, Hamburg, Sachsen und Schleswig-Holstein setzen vier weitere Bundesländer die kurzfristige
//    Empfehlung von 4 Pflichtstunden um."
//  - bwinf.de (FACTS 129 to 137, 141, 142): Biber "kostenfrei", "Jahrgangsstufen 3 bis 13, keine Vorkenntnisse
//    erforderlich", "neun Aufgaben in 30 Minuten", "Die Biberwochen 2026 finden vom 9. bis 20. November statt.",
//    "Schnupper-Biber ab 14. September 2026", "Über 580.000 Teilnehmende in 2025"; Jugendwettbewerb "schon ab
//    Jahrgangsstufe 3 möglich", "Bronze (empfohlen für Jg. 5/6): 3 Aufgaben / 30 Minuten".
//  - KMK FER2026_27 (FACTS 285): "Hamburg 19.10. - 30.10. 21.12. - 01.01. 29.01. 01.03. - 12.03. 07.05. - 14.05.";
//    Sommerferienregelung (FACTS 262): Hamburg 2027 "01.07. - 11.08.".
//  - Destatis GV-ISys 31.12.2024 (places.tsv): Hamburg 1.862.565 Einwohner.
//  - Time: Einheitenzeitgesetz; Sommerzeit endete am 25. Oktober 2026, beginnt am 28. März 2027.
//  - Data: Stiftung Hamburger Öffentliche Bücherhallen via Transparenzportal Hamburg, "Öffentliche Bibliotheken
//    Hamburg" (https://ckan.govdata.de/dataset/offentliche-bibliotheken-hamburg37d23, record saved), licence
//    Datenlizenz Deutschland Namensnennung 2.0. OGC API https://api.hamburg.de/datasets/v1/oeffentliche_bibliotheken/
//    collections/oeffentliche_bibs/items?f=json&limit=100: 34 features (numberMatched 34), 49,437 bytes, sha256
//    288ef3e4...9fd9a378c, saved as buecherhallen.json, downloaded 3 November 2026. Field medienanzahl is text, e.g.
//    "Rund 78.000 Medien", "Rund  36.000 Medien" (two spaces), "Über 20.000 Medien". Zentralbibliothek profil: "Ein
//    urbaner Makerspace mit Erlebnissen und vielen neuen digitalen Techniken wie z.B. einem MakerLab."; "Auf drei
//    Ebenen finden 500.000 Medien Platz".
// Our own code (scratchpad de/w/C1/py/pha_v1.py, pha_v2.py, python3 -I, run in the data folder):
//  pha_v1 prints "Zentralbibliothek: 441.0" and "Mümmelmannsberg: 9.0".
//  pha_v2 prints "Größte: Zentralbibliothek 441000", "Kleinste: Bücherhalle Mümmelmannsberg 9000", "Rund: 31 Über: 3".
//  No total is printed on purpose: the figures are rounded ("Rund", "Über") and are not summed into a published-looking
//  total.
// Lesson family: text into numbers; the German thousands point, and why a result must be checked for plausibility.

const { DE } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import json',
  '',
  'with open("buecherhallen.json", encoding="utf-8") as f:',
  '    hallen = [h["properties"] for h in json.load(f)["features"]]',
  '',
  'medien = {}',
  'for halle in hallen:',
  '    wort = [w for w in halle["medienanzahl"].split() if w[0].isdigit()][0]',
  '    medien[halle["bezeichnung"]] = float(wort)',
  '',
  'print("Zentralbibliothek:", medien["Zentralbibliothek"])',
  'print("Mümmelmannsberg:", medien["Bücherhalle Mümmelmannsberg"])'
].join('\n');

const V2 = [
  'import json',
  '',
  'with open("buecherhallen.json", encoding="utf-8") as f:',
  '    hallen = [h["properties"] for h in json.load(f)["features"]]',
  '',
  'medien = {}',
  'for halle in hallen:',
  '    wort = [w for w in halle["medienanzahl"].split() if w[0].isdigit()][0]',
  '    medien[halle["bezeichnung"]] = int(wort.replace(".", ""))',
  '',
  'groesste = max(medien, key=medien.get)',
  'kleinste = min(medien, key=medien.get)',
  'print("Größte:", groesste, medien[groesste])',
  'print("Kleinste:", kleinste, medien[kleinste])',
  'print("Rund:", sum("Rund" in h["medienanzahl"] for h in hallen), "Über:", sum("Über" in h["medienanzahl"] for h in hallen))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'stadt', label: 'Hamburg: Programmieren für Kinder' },
  slug: 'programmieren-lernen-kinder-hamburg',
  code: 'pha',
  accent: '#246984',
  accentRationale: 'Programmieren lernen für Kinder in Hamburg: ein Alsterblau #246984, hell genug für eine Kinderseite und klar getrennt vom Hafengrün der englischen Hamburger Kinderseite; contrast 4.97 at its lowest on the paper tints and above 4.5 on all three',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Programmieren lernen für Kinder in Hamburg (auf Englisch)',
  title: 'Programmieren lernen für Kinder in Hamburg: live auf Englisch',
  description: 'Programmieren lernen für Kinder in Hamburg von 6 bis 12: live online auf Englisch, ab wann die Schule Informatik bringt, der Biber und ein Bücherhallen-Projekt.',
  ogDescription: 'Programmierkurs für Hamburger Kinder von 6 bis 12, live online auf Englisch mit festem Mentor: Informatik kommt in Hamburg erst ab Klasse 7, der kostenlose Informatik-Biber läuft im November 2026, und ein Projekt verwandelt die Medienzahlen der Bücherhallen in echte Zahlen.',
  twitterDescription: 'Programmieren für Hamburger Kinder, live auf Englisch: Informatik ab Klasse 7, Biber und ein Bücherhallen-Projekt.',
  pageName: 'Programmieren lernen für Kinder in Hamburg',
  webPageDescription: 'Ein Leitfaden für Hamburger Eltern von Kindern zwischen 6 und 12 Jahren: wann Informatik nach dem Informatik-Monitor 2026/27 in Hamburger Schulen beginnt, kostenlose Wettbewerbe für Grundschulkinder und ein eigenes Datenprojekt mit den offenen Daten der Bücherhallen Hamburg.',
  courseDescription: 'Live-Online-Programmierkurse auf Englisch für Hamburger Kinder von 6 bis 12 Jahren: Scratch, Knobelaufgaben, dann Python und kleine KI-Projekte, in der Gruppe mit fünfzehn bis zwanzig Kindern oder im Einzelunterricht, immer mit demselben Mentor.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kinder in Hamburg',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#schule', label: 'Schule' },
    { href: '#projekt', label: 'Projekt' },
    { href: '#biber', label: 'Biber' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Hamburg &middot; Programmieren für Kinder &middot; 6 bis 12 Jahre',
  h1: 'Programmieren lernen für Kinder in Hamburg, live auf Englisch',
  lede: 'In Hamburg ist Informatik seit dem Schuljahr 2025/26 Pflichtfach, mit vier Wochenstunden zwischen Klasse 7 und 10. Für ein Kind von 6 bis 12 Jahren ist das noch weit weg. Diese Seite zeigt, was die Hamburger Schule bis dahin anbietet, was unser Online-Unterricht auf Englisch mit Mentoren aus Indien leisten kann und was nicht, welche kostenlosen Wettbewerbe es schon für Grundschulkinder gibt und wie ein Kind mit den offenen Daten der Bücherhallen lernt, dass 56.500 für einen Computer nicht dasselbe ist wie für uns.',
  secondaryCta: { href: '#projekt', label: 'Zum Bücherhallen-Projekt' },
  wa: 'Hallo Modern Age Coders, unser Kind wohnt in Hamburg und möchte programmieren lernen. Können wir eine kostenlose Probestunde auf Englisch buchen?',
  heroNote: 'Live-Online-Unterricht seit 2020 &middot; mehr als 10.000 Lernende weltweit &middot; ein fester Mentor, Unterricht auf Englisch',
  spec: [
    ['Alter', '6 bis 12 Jahre, in Altersgruppen'],
    ['Inhalte', 'Scratch, Knobeln, Python, kleine KI-Projekte'],
    ['Gruppe', 'Fünfzehn bis zwanzig, oder Einzelunterricht'],
    ['Sprache', 'Englisch, Mentoren aus Indien'],
    ['Ort', 'Online, von zu Hause in Hamburg'],
    ['Probestunde', 'Kostenlos, ohne Karte']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Programmieren lernen für Kinder in Hamburg heißt bei Modern Age Coders: Kinder zwischen 6 und 12 Jahren lernen live per Video und auf Englisch, betreut von einem Mentor aus Indien, der Woche für Woche derselbe bleibt und sich nach Tempo und Aussprache Ihres Kindes richtet. Die Jüngeren starten mit Scratch und Knobelaufgaben, ab etwa 9 Jahren folgt Python. Zur Wahl stehen Einzelunterricht oder eine Gruppe von fünfzehn bis zwanzig Gleichaltrigen, und das Englisch üben die Kinder ganz nebenbei.',

  picks: {
    eyebrow: 'Der Einstieg',
    h2: 'Womit Hamburger Kinder bei uns anfangen',
    lede: 'Python für Kinder, die tippen wollen, Scratch zum Hineinschnuppern, und ein Knobelkurs, der zuerst das Denken schult.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PHA / 01', title: 'Python und KI für Kinder', alt: 'Kursbild Python und KI für Kinder', note: 'Für Kinder ab etwa 9 Jahren. Gleich in der ersten Stunde wird getippt; später zeichnet Ihr Kind mit der Turtle, baut Spiele und arbeitet zum Schluss mit echten Dateien an kleinen KI-Aufgaben.' },
      { course: 'scratch-programming-complete-course', code: 'PHA / 02', title: 'Scratch für Kinder', alt: 'Kursbild Scratch für Kinder', note: 'Für 6 bis 12 Jahre, rund drei bis vier Monate. Am Ende hat Ihr Kind eigene Spiele gebaut und weiß, ob ihm Programmieren gefällt.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'PHA / 03', title: 'Problemlösen für Kinder', alt: 'Kursbild Problemlösen für Kinder', note: 'Für Kinder, die gern knobeln. Muster erkennen, Schritte planen, Fehler finden: genau die Art Denken, die der Informatik-Biber prüft.' }
    ]
  },

  sections: [
    {
      id: 'ehrlich',
      eyebrow: 'Was wir sind',
      h2: 'Ist ein Online-Kurs auf Englisch das Richtige für ein Hamburger Kind?',
      lede: 'Für viele Kinder ja, für manche nicht. Damit Sie das gut entscheiden können, hier die ehrliche Beschreibung.',
      body: [
        { kind: 'two',
          leftH3: 'Was Sie bei uns bekommen',
          left: [
            'Live-Unterricht per Video, ausschließlich auf Englisch, mit einem Mentor aus Indien, der jede Woche derselbe ist. Ihr Kind sitzt zu Hause, sieht den Mentor und einen geteilten Bildschirm und programmiert selbst, von der ersten Stunde an.',
            'Der Unterricht ist für Kinder gebaut, die noch Englisch lernen: kurze Sätze, viel Zeigen, geduldiges Wiederholen. Ihr Kind übt so Programmieren und Englisch zugleich.'
          ],
          rightH3: 'Was Sie bei uns nicht bekommen',
          right: [
            'Einen Raum in Hamburg, deutschsprachige Stunden oder ein Basteln mit Robotern am selben Tisch. Wer das sucht, findet in der Stadt eigene Orte: Laut den offenen Daten der Bücherhallen beschreibt sich die Zentralbibliothek als urbaner Makerspace mit einem MakerLab.',
            'Für ein Kind, das sich mit Englisch noch gar nicht wohlfühlt, ist ein deutschsprachiger Anfang vor Ort oft besser. Die kostenlose Probestunde zeigt Ihnen in kurzer Zeit, wie es Ihrem Kind bei uns geht.'
          ] },
        { kind: 'p', mt: true, html: 'Hamburg hat laut Statistischem Bundesamt 1.862.565 Einwohner (Stand 31. Dezember 2024), und die Wege durch die Stadt sind lang. Online fällt der Weg weg. Unsere Mentoren unterrichten seit 2020 live online und haben weltweit mehr als 10.000 Lernende begleitet; diese Zahlen beziehen sich auf alle Länder, nicht auf Hamburg.' }
      ]
    },
    {
      id: 'schule',
      eyebrow: 'Hamburger Schule',
      h2: 'Wann kommt Informatik in Hamburger Schulen auf den Stundenplan?',
      lede: 'Als eigenes Fach ab Klasse 7. Hamburg gehört damit zu den Ländern, die Informatik ernst nehmen, beginnt aber später, als viele Eltern denken. Grundlage ist der Hamburg-Teil des Informatik-Monitors, den die Gesellschaft für Informatik für 2026/27 herausgibt.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik im Hamburger Schulweg nach Klasse, Schuljahr 2026/27', head: ['Klasse', 'Schulform', 'Informatik im Unterricht'], rows: [
          ['1 bis 4', 'Grundschule', 'Kein Fach Informatik'],
          ['5 und 6', 'Stadtteilschule oder Gymnasium', 'Fach Naturwissenschaften/Technik mit einem Themenfeld Informatik als Teil'],
          ['7 bis 10', 'Stadtteilschule oder Gymnasium', 'Pflichtfach Informatik, vier Wochenstunden insgesamt, verteilt durch die Schule'],
          ['7 bis 10', 'Stadtteilschule oder Gymnasium', 'Zusätzlich Informatik im Wahlpflichtbereich möglich'],
          ['Oberstufe', 'Gymnasium oder Stadtteilschule', 'Informatik als Kurs oder Profilfach, wenn angeboten']
        ] },
        { kind: 'source', html: 'Nachzulesen im Informatik-Monitor 2026/27 (Hamburg-Seite und Vergleich der Länder), herausgegeben von der Gesellschaft für Informatik. Stand unserer Lektüre: 2. November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'Vier Stunden, aber spät',
          left: [
            'Seit dem Schuljahr 2025/26 sind an Stadtteilschulen und Gymnasien vier Wochenstunden Informatik Pflicht. Wie sich diese vier Stunden auf die Klassen 7 bis 10 verteilen, entscheidet jede Schule selbst. Ein Kind kann seine erste Informatikstunde also in Klasse 7 haben oder erst einige Jahre später.',
            'Mit Baden-Württemberg, Sachsen und Schleswig-Holstein ist Hamburg eines der vier Länder, die die kurzfristige Empfehlung von vier Pflichtstunden umsetzen. Die Ständige Wissenschaftliche Kommission der Kultusministerkonferenz empfiehlt sechs Wochenstunden über die ganze Sekundarstufe I.'
          ],
          rightH3: 'Bis Klasse 6 nur am Rand',
          right: [
            'Die Hamburger Grundschule umfasst die Klassen 1 bis 4. In Klasse 5 und 6 gibt es das Fach Naturwissenschaften/Technik, dessen Bildungsplan ein Themenfeld Informatik anteilig enthält, also als einen Teil unter mehreren.',
            'Ein neugieriges Kind von 7 oder 8 Jahren, das wissen will, wie ein Spiel entsteht, bekommt in der Schule darauf noch lange keine Antwort. Diese Jahre sind die Zeit, in der ein Kurs mit Scratch und Knobelaufgaben am meisten bringt.'
          ] },
        { kind: 'p', mt: true, html: 'Wir verstehen unseren Unterricht als Ergänzung, nicht als Ersatz. Ein Kind, das ein paar Jahre programmiert hat, kommt in Klasse 7 mit Vorsprung an: Es kann eine Aufgabe in Schritte zerlegen, ein kurzes Programm lesen und einen Fehler suchen. Der Informatikunterricht der Schule bleibt der, der zählt.' }
      ]
    },
    {
      id: 'englisch',
      eyebrow: 'Unterricht auf Englisch',
      h2: 'Lernt mein Kind auf Englisch genauso gut programmieren?',
      lede: 'Die Befehle von Scratch und Python sind ohnehin englische Wörter. Und nebenbei lernt Ihr Kind etwas, das kaum jemand erklärt: Zahlen werden im Englischen anders geschrieben.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Nur Englisch, mit Absicht', p: 'Alle Stunden sind live und auf Englisch. Deutschsprachigen Unterricht bieten wir nicht an. Die Mentoren sprechen langsam, zeigen viel und wiederholen gern, bis Ihr Kind folgen kann.' },
          { h3: 'Punkt und Komma', p: 'Im Deutschen schreibt man 56.500 und 3,5, im Englischen 56,500 und 3.5. Ein Computer rechnet wie im Englischen. Genau daraus ist unser Bücherhallen-Projekt entstanden.' },
          { h3: 'Ein fester Mentor', p: 'Ihr Kind lernt jede Woche mit derselben Person. Unsere Mentoren arbeiten in Indien; ein Hamburger Nachmittag ist für sie früher Abend.' }
        ] },
        { kind: 'p', mt: true, html: 'Bei uns sollen Kinder eine Lösung selbst finden, nicht eine fertige Antwort übernehmen, auch keine von einer KI. KI-Dienste, die für Erwachsene gedacht sind, kommen im Kinderunterricht nicht vor; die Altersgrenzen der Anbieter listet unser <a class="ag-inline-link" href="/ai-tools-age-guide">Altersleitfaden für KI-Werkzeuge</a> (auf Englisch).' }
      ]
    },
    {
      id: 'projekt',
      tint: 'tint',
      eyebrow: 'Ein Hamburger Projekt',
      h2: 'Warum hält ein Computer 56.500 für 56,5? Ein Projekt mit den Daten der Bücherhallen',
      lede: 'Die Bücherhallen Hamburg veröffentlichen ihre Standorte als offene Daten. Darin steht für jede Bücherhalle, wie viele Medien sie ungefähr hat, aber als Text. Wer daraus Zahlen machen will, stolpert über den deutschen Tausenderpunkt.',
      body: [
        { kind: 'two',
          leftH3: 'Die Daten',
          left: [
            'Der Datensatz Öffentliche Bibliotheken Hamburg stammt von der Stiftung Hamburger Öffentliche Bücherhallen und steht im Transparenzportal unter der Datenlizenz Deutschland Namensnennung 2.0. Wir haben ihn am 3. November 2026 über die offene Schnittstelle der Stadt geladen und als buecherhallen.json gespeichert: 34 Einträge, von der Zentralbibliothek bis zu den Bücherbussen.',
            'Im Feld medienanzahl steht zum Beispiel Rund 78.000 Medien oder Über 20.000 Medien, einmal sogar mit zwei Leerzeichen hintereinander. Für Menschen ist das klar. Für ein Programm ist es zunächst nur eine Kette von Zeichen.'
          ],
          rightH3: 'Die Frage',
          right: [
            'Welche Bücherhalle hat die meisten Medien, welche die wenigsten? Dafür muss das Programm aus jedem Text die Zahl herausholen und in eine echte Zahl verwandeln.',
            'Version 1 macht es so, wie es die meisten Kinder zuerst versuchen: Sie nimmt das Wort, das mit einer Ziffer beginnt, und wandelt es mit float in eine Zahl um.'
          ] },
        { kind: 'code', label: 'Version 1: das Wort einfach umwandeln', lang: 'Python', code: V1, note: 'Ausgabe: <code>Zentralbibliothek: 441.0</code> und <code>Mümmelmannsberg: 9.0</code>.' },
        { kind: 'p', mt: true, html: 'Die Zentralbibliothek mit 441 Medien? Das passt nicht in ein Gebäude, das im selben Datensatz von drei Ebenen spricht. Python liest den Punkt in 441.000 als Dezimalpunkt, wie im Englischen, und macht daraus 441,0. Das Programm stürzt nicht ab und meldet keinen Fehler. Es rechnet einfach falsch, und nur wer das Ergebnis prüft, merkt es.' },
        { kind: 'code', label: 'Version 2: erst den Tausenderpunkt entfernen', lang: 'Python', code: V2, note: 'Ausgabe: <code>Größte: Zentralbibliothek 441000</code>, <code>Kleinste: Bücherhalle Mümmelmannsberg 9000</code> und <code>Rund: 31 Über: 3</code>.' },
        { kind: 'p', html: 'Mit einem einzigen replace, das den Punkt entfernt, stimmen die Größen: rund 441.000 Medien in der Zentralbibliothek, rund 9.000 in Mümmelmannsberg. Die letzte Zeile erinnert an etwas Wichtiges: 31 Einträge sagen Rund, drei sagen Über. Es sind also gerundete Angaben. Deshalb addieren wir sie nicht zu einer Gesamtzahl, die genauer aussähe, als sie ist. Interessant für Kinder: Im Beschreibungstext derselben Zentralbibliothek steht, dass auf drei Ebenen 500.000 Medien Platz finden. Platz und Bestand sind zwei verschiedene Zahlen.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Was Version 1 und Version 2 aus den Texten machen (eigene Auswertung)', head: ['Text im Datensatz', 'Version 1 (float)', 'Version 2 (Punkt entfernt)'], rows: [
          ['Rund 441.000 Medien', '441.0', '441000'],
          ['Rund 78.000 Medien', '78.0', '78000'],
          ['Über 20.000 Medien', '20.0', '20000'],
          ['Rund 9.000 Medien', '9.0', '9000']
        ] },
        { kind: 'source', html: 'Daten: Stiftung Hamburger Öffentliche Bücherhallen, über Transparenzportal Hamburg, Öffentliche Bibliotheken Hamburg, Datenlizenz Deutschland Namensnennung 2.0; abgerufen am 3. November 2026 über api.hamburg.de. Alle Auswertungen sind eigene. Die Medienzahlen sind im Datensatz selbst gerundet.' },
        { kind: 'ol', mt: true, items: [
          '<strong>6 bis 8 Jahre, ohne Bildschirm.</strong> Schreiben Sie 3.000 und 3,000 auf zwei Zettel und fragen Sie: Ist das dieselbe Zahl? Dann erklären Sie, dass das in England und in Deutschland verschieden gelesen wird.',
          '<strong>8 bis 10 Jahre, Scratch.</strong> Eine Liste mit fünf Texten wie Rund 12.000 Medien. Mit den Blöcken für Buchstaben eine neue Zahl bauen, die nur die Ziffern enthält.',
          '<strong>10 bis 12 Jahre, Python.</strong> Mit Version 1 starten und herausfinden, warum 441.0 herauskommt. Erst danach eine eigene Korrektur versuchen und mit unserer Version 2 vergleichen.',
          '<strong>Für Schnelle.</strong> Wie viele Bücherhallen haben mehr als 30.000 Medien? Und warum sollte die Antwort mit ungefähr beginnen?'
        ] }
      ]
    },
    {
      id: 'biber',
      eyebrow: 'Kostenlose Wettbewerbe',
      h2: 'Welche kostenlosen Informatik-Wettbewerbe gibt es für Hamburger Grundschulkinder?',
      lede: 'Zwei, beide von den Bundesweiten Informatikwettbewerben und beide über die Schule. Programmieren können muss Ihr Kind für keinen von beiden.',
      body: [
        { kind: 'two',
          leftH3: 'Der Informatik-Biber, ab Klasse 3',
          left: [
            'Die Bundesweiten Informatikwettbewerbe richten ihn als Online-Quiz aus, gratis und offen für Klasse 3 bis 13; Vorwissen ist nicht nötig. Wer noch zur Grundschule geht, bekommt neun Rätsel und eine halbe Stunde Zeit. Mehr als 580.000 Kinder und Jugendliche waren 2025 dabei.',
            'Die Biberwochen 2026 laufen vom 9. bis 20. November 2026, kurz nach den Hamburger Herbstferien, die am 30. Oktober 2026 endeten. Eine Proberunde, den Schnupper-Biber, kann man seit dem 14. September 2026 ausprobieren.'
          ],
          rightH3: 'Der Jugendwettbewerb, ab Klasse 5',
          right: [
            'Mitmachen dürfen nach Angabe der Veranstalter im Prinzip schon Drittklässler. Kindern der Klassen 5 und 6 raten sie zur Bronze-Stufe: drei Aufgaben, dreißig Minuten.',
            'Ein Hamburger Kind in Klasse 5 oder 6, das beim Biber Spaß hatte, findet hier den nächsten Schritt, zwei Jahre bevor die Informatik in der Schule beginnt.'
          ] },
        { kind: 'p', mt: true, html: 'Fragen Sie die Lehrkraft, ob die Schule teilnimmt; angemeldet wird über die Schule. Originalaufgaben kommen in unseren Stunden nicht vor; wir schreiben eigene Rätsel im gleichen Stil und haben mit den Veranstaltern nichts zu tun.' }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Wann findet der Unterricht in Hamburger Zeit statt?',
      lede: 'Hamburger Kinder lernen meist am späten Nachmittag oder am Wochenendvormittag. Die Tabelle zeigt einige Beispiele und die Uhrzeit beim Mentor.',
      body: [
        { kind: 'table', numCols: [], caption: 'Beispielzeiten in Hamburg und beim Mentor in Indien', head: ['In Hamburg', 'Beim Mentor im Winter', 'Beim Mentor ab 28. März 2027'], rows: [
          ['16:25 Uhr', '20:55 Uhr', '19:55 Uhr'],
          ['17:05 Uhr', '21:35 Uhr', '20:35 Uhr'],
          ['Samstag 10:10 Uhr', '14:40 Uhr', '13:40 Uhr'],
          ['Sonntag 11:40 Uhr', '16:10 Uhr', '15:10 Uhr']
        ] },
        { kind: 'source', html: 'Nach dem Einheitenzeitgesetz gilt in Deutschland die mitteleuropäische Zeit (UTC+1), im Sommer die mitteleuropäische Sommerzeit (UTC+2). Am 25. Oktober 2026 wurden die Uhren zurückgestellt, am 28. März 2027 werden sie vorgestellt. In Indien gilt ganzjährig UTC+5:30: Der Abstand zu Hamburg beträgt im Winter viereinhalb und im Sommer dreieinhalb Stunden. Die Zeilen sind Beispiele, keine festen Gruppen.' },
        { kind: 'p', mt: true, html: 'Ferien unterbrechen den Unterricht nur, wenn Sie es möchten. Laut KMK-Ferientabelle 2026/27 hat Hamburg Weihnachtsferien vom 21. Dezember 2026 bis 1. Januar 2027, Frühjahrsferien vom 1. bis 12. März 2027, freie Tage vom 7. bis 14. Mai 2027 und Sommerferien vom 1. Juli bis 11. August 2027. Die Frühjahrsferien im März eignen sich gut für ein kleines eigenes Projekt.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stufen',
    h2: 'Fünf Stufen vom ersten Block bis zu echten Daten',
    lede: 'Unsere eigenen Stufen. Mit ihnen ordnen wir Kinder einer Gruppe zu und berichten den Eltern.',
    table: { caption: 'Unsere Stufen für Kinder von 6 bis 12', head: ['Stufe', 'Meist im Alter von', 'Danach kann das Kind'], rows: [
      ['1. Anweisungen', '6 bis 7', 'Eine Figur mit Blöcken Schritt für Schritt steuern'],
      ['2. Wiederholen', '7 bis 9', 'Schleifen nutzen und auf Tasten reagieren'],
      ['3. Speichern', '8 bis 10', 'Werte in Variablen und Listen ablegen und vergleichen'],
      ['4. Text und Zahl', '9 bis 11', 'Text in Zahlen umwandeln und umgekehrt, in Python'],
      ['5. Prüfen', '10 bis 12', 'Ein Ergebnis auf Plausibilität prüfen und einen Fehler erklären']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Stufe 4 und 5 sind das Bücherhallen-Projekt. Ein Kind, das ein unmögliches Ergebnis bemerkt, statt es hinzunehmen, hat das Wichtigste am Programmieren verstanden.',
      'Wir berichten, was Ihr Kind gebaut hat und erklären kann, nicht, wie lange es am Bildschirm war.'
    ] },
    right: { h3: 'Für Kinder', ps: [
      'Ein Programm kann sich irren, ohne Fehler zu melden. Darum: Ergebnis immer kurz prüfen.',
      '56.500 und 56,500 sehen fast gleich aus. Für einen Computer sind sie es nicht.'
    ] }
  },

  catalogue: {
    eyebrow: 'Mehr für Kinder',
    h2: 'Neun weitere Kurse für Hamburger Kinder',
    lede: 'Alle Kurse finden live und auf Englisch statt, mit einem Mentor, der bleibt, als Gruppe oder einzeln.',
    bands: [
      { num: 'I', h3: 'Erste Schritte', sub: '5 bis 14 Jahre', courses: [
        { code: 'PHA / START / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding für Kinder', blurb: 'Der lange Weg von Scratch bis zu Apps und KI.' },
        { code: 'PHA / START / 02', slug: 'ai-literacy-for-kids-course', title: 'KI verstehen', blurb: 'Wie KI lernt, ganz ohne Erwachsenen-Chatbots.' },
        { code: 'PHA / START / 03', slug: 'mental-maths-mastery-kids', title: 'Kopfrechnen für Kinder', blurb: 'Zahlengefühl, das beim Programmieren hilft.' }
      ] },
      { num: 'II', h3: 'Spiele selbst bauen', sub: '8 bis 14 Jahre', courses: [
        { code: 'PHA / SPIEL / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox programmieren', blurb: 'Eigene Spiele mit Luau-Skripten.' },
        { code: 'PHA / SPIEL / 02', slug: 'game-development-masterclass-for-kids', title: 'Spiele entwickeln', blurb: 'Drei Spielwelten nacheinander: Scratch, Roblox, Minecraft.' },
        { code: 'PHA / SPIEL / 03', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Spiele mit Godot', blurb: 'Eine echte Spiel-Engine, Schritt für Schritt.' }
      ] },
      { num: 'III', h3: 'Weiter mit echtem Code', sub: '9 bis 15 Jahre', courses: [
        { code: 'PHA / CODE / 01', slug: 'kids-ai-web-development-course', title: 'Webseiten bauen', blurb: 'Die erste eigene Webseite, selbst geschrieben.' },
        { code: 'PHA / CODE / 02', slug: 'cpp-programming-for-kids-course', title: 'C++ für Kinder', blurb: 'Rätsel und kleine Spiele in C++.' },
        { code: 'PHA / CODE / 03', slug: 'maths-through-coding', title: 'Mathe mit Python', blurb: 'Schulmathe als Programmierprojekt, 10 bis 15 Jahre.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'So läuft es ab',
    h2: 'Eine Woche Programmierunterricht für eine Hamburger Familie',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. Pro Woche sind es zwei Live-Stunden von je einer Stunde, nie eine Aufzeichnung.',
    slots: [
      { time: 'Nachmittags', l: 'Hamburger Wochentage, ab etwa 16 Uhr.' },
      { time: 'Wochenende', l: 'Samstag- und Sonntagvormittag, gut für Jüngere.' },
      { time: 'Einzeln', l: 'Wann es passt, nach Absprache mit dem Mentor.' }
    ],
    cells: [
      { h3: 'Derselbe Mentor', p: 'Jemand, der Ihr Kind wirklich kennt.' },
      { h3: 'Einfaches Englisch', p: 'Kurze Sätze, viel gezeigt.' },
      { h3: 'Selbst tippen', p: 'Ihr Kind hat Maus und Tastatur.' },
      { h3: 'Altersgruppen', p: 'Gleichaltrige lernen zusammen.' },
      { h3: 'Rückmeldung', p: 'Was entstanden ist, was als Nächstes kommt.' },
      { h3: 'Gruppe oder einzeln', p: 'Fünfzehn bis zwanzig Kinder oder eines.' }
    ]
  },

  projectsH2: 'Was unsere älteren Lernenden bauen',
  projectsLede: 'Aus kleinen Scratch-Spielen werden später echte Anwendungen. Unten finden Sie eine Auswahl aus den Arbeiten älterer Lernender, die Seite <a class="ag-inline-link" href="/student-labs">Student Labs</a> (auf Englisch) zeigt noch mehr.',
  reviewsLede: 'Bewertungen von Eltern und Lernenden auf Google, unverändert übernommen.',

  fees: {
    h2: 'Kosten für Hamburger Familien',
    lede: 'Eine monatliche Gebühr umfasst acht Live-Stunden. Der Euro-Betrag auf dieser Seite beruht auf dem Referenzkurs der Europäischen Zentralbank; belastet wird Ihre Karte in US-Dollar, die Umrechnung übernimmt Ihre Bank, und deshalb kann die Summe auf dem Kontoauszug ein wenig anders ausfallen.',
    free: ['Eine kostenlose Probestunde', 'Ein Rätsel und ein erstes Programm', 'Ohne Karte'],
    group: ['Fünfzehn bis zwanzig Kinder ähnlichen Alters', 'Ein fester Mentor', 'Zwei Stunden pro Woche', 'Monatlich kündbar'],
    one: ['Ihr Kind und ein Mentor', 'Eigenes Tempo, eigene Ideen', 'Zeiten nach Ihrem Wochenplan']
  },

  faq: {
    eyebrow: 'Hamburger Eltern fragen',
    h2: 'Programmieren lernen für Kinder in Hamburg: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein. Wir unterrichten live und ausschließlich auf Englisch, und genau darin liegt für viele Familien der Gewinn: Ihr Kind lernt Programmieren und Englisch zugleich. Die Mentoren sprechen langsam, zeigen viel am Bildschirm und richten sich nach Tempo und Aussprache Ihres Kindes.' },
      { q: 'Ist Informatik in Hamburg ein Pflichtfach?', a: 'Ja, ab Klasse 7. Laut Informatik-Monitor 2026/27 sind an Stadtteilschulen und Gymnasien seit dem Schuljahr 2025/26 vier Wochenstunden Informatik verpflichtend; die Schulen verteilen sie auf die Klassen 7 bis 10. In der Grundschule gibt es kein Fach Informatik.' },
      { q: 'Ab welchem Alter kann mein Kind anfangen?', a: 'Ab 6 Jahren. Die Jüngsten arbeiten mit Scratch, wo Blöcke zusammengesteckt werden und kaum etwas getippt werden muss. Ab etwa 9 Jahren lernen Kinder getippten Python-Code.' },
      { q: 'Können wir den Kurs in Hamburg auch in einem Raum besuchen?', a: 'Nein. Wir unterrichten ausschließlich live online. Ihr Kind lernt zu Hause am Computer, sieht den Mentor und einen gemeinsamen Bildschirm. Aufgezeichnete Videos ersetzen bei uns keinen Unterricht.' },
      { q: 'Wann finden die Stunden statt?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. 17:05 Uhr in Hamburg ist im Winter 21:35 Uhr beim Mentor in Indien.' },
      { q: 'Wo sitzen die Mentoren?', a: 'In Indien. Sie unterrichten live per Video, und ein Hamburger Nachmittag fällt bei ihnen in den frühen Abend. Ihr Kind behält denselben Mentor über Monate.' },
      { q: 'Wann ist der Informatik-Biber 2026?', a: 'Die Biberwochen 2026 dauern vom 9. bis 20. November. Teilnehmen kostet nichts, Klasse 3 bis 13 sind zugelassen, Vorwissen braucht niemand. Angemeldet wird über die Schule, also am besten bei der Klassenlehrkraft nachfragen.' },
      { q: 'Wie groß sind die Gruppen?', a: 'Fünfzehn bis zwanzig Kinder, die ungefähr gleich alt sind. Soll Ihr Kind den Mentor für sich haben, gibt es zwei Einzelstunden pro Woche zu Zeiten, die Sie absprechen.' },
      { q: 'Wie viel kostet es, und wird in Euro bezahlt?', a: 'Sie zahlen monatlich. Den Betrag zeigen wir in Euro nach dem Referenzkurs der Europäischen Zentralbank, die Zahlung selbst erfolgt in US-Dollar, und die Umrechnung macht Ihre Bank, daher sind kleine Abweichungen möglich. Für die Probestunde zahlen Sie nichts.' },
      { q: 'Läuft der Unterricht in den Hamburger Ferien weiter?', a: 'Ja, wenn Sie nicht pausieren möchten. Viele Familien nutzen die Frühjahrsferien vom 1. bis 12. März 2027 für ein kleines Projekt und machen in den Sommerferien ab dem 1. Juli 2027 eine Pause.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weiterlesen',
    h2: 'Passende Seiten für Hamburger Familien',
    lede: 'Ein Teil dieser Seiten ist auf Englisch geschrieben.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Alle Seiten für Deutschland', p: 'Der englische Einstieg zu allen Deutschland-Seiten.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Hilfe für Schulkinder ab Klasse 5 und der Stand in jedem Land.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik nach Bundesland', p: 'Pflichtstunden in allen Ländern (auf Englisch).' },
      { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber üben', p: 'Eigene Rätsel im Biber-Stil (auf Englisch).' },
      { href: '/ai-projects-for-kids', label: 'KI-Projekte für Kinder', p: 'Ideen nach Alter (auf Englisch).' },
      { href: '/how-we-teach', label: 'So unterrichten wir', p: 'Wie eine Stunde abläuft, Schritt für Schritt (auf Englisch).' }
    ]
  },

  start: {
    h2: 'Eine Probestunde vereinbaren, kostenlos',
    lede: 'In der Probestunde knobelt Ihr Kind an einer kleinen Aufgabe und schreibt sein erstes Programm. Dabei sieht der Mentor, wie Ihr Kind an Aufgaben herangeht und wie leicht ihm Englisch fällt, und schlägt Ihnen danach Kurs und Form vor.',
    readFirst: 'Wer zuerst lesen möchte: <a class="ag-inline-link" href="/how-we-teach">So unterrichten wir</a> beschreibt eine Stunde, und <a class="ag-inline-link" href="/courses">alle Kurse</a> listet jeden Lehrplan (beides auf Englisch).',
    note: 'Alle Stunden sind live, online und auf Englisch, mit Mentoren in Indien. Fragen beantworten wir am schnellsten über WhatsApp, auf Englisch.',
    formNote: 'Kostenlos, ohne Karte, ohne Verpflichtung.'
  },

  footer: {
    cols: [
      { h4: 'Für Kinder', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch für Kinder' },
        { href: '/python-for-10-year-olds', label: 'Python mit 10 Jahren' },
        { href: '/informatik-biber-practice-in-english', label: 'Biber üben' },
        { href: '/ai-tools-age-guide', label: 'KI-Werkzeuge nach Alter' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Alle Seiten für Deutschland' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik nach Bundesland' },
        { href: '/how-we-teach', label: 'So unterrichten wir' }
      ] }
    ],
    bottomRight: 'Ein Punkt kann tausendmal zu viel sein'
  },

  personalityCss: `
.ag-root.ag-pha .ag-hero h1 { letter-spacing: -0.006em; }
.ag-root.ag-pha .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-pha .ag-section-head h2 { max-width: 36ch; }
.ag-root.ag-pha .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-pha .ag-code-note { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Hamburg und Ländervergleich); Bundesweite Informatikwettbewerbe (Informatik-Biber 2026, Jugendwettbewerb Informatik); KMK Ferientabelle 2026/27 und Sommerferienregelung; Destatis GV-ISys 31.12.2024; Einheitenzeitgesetz. Daten: Stiftung Hamburger Öffentliche Bücherhallen, Öffentliche Bibliotheken Hamburg, Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'Bücherhallen-Zahlen: ein eigenes Python-Projekt mit den 34 Einträgen der Bücherhallen Hamburg, in dem float den deutschen Tausenderpunkt als Dezimalpunkt liest (Zentralbibliothek 441.0), ein replace das korrigiert (441000 und 9000), und die Angaben Rund und Über bewusst nicht summiert werden; dazu Aufgaben ohne Bildschirm, in Scratch und in Python. Lesson family: Text in Zahlen umwandeln, Tausenderpunkt und Plausibilität.',
    requiredMentions: ['buecherhallen.json', 'Zentralbibliothek: 441.0', 'Größte: Zentralbibliothek 441000', 'Kleinste: Bücherhalle Mümmelmannsberg 9000', 'Rund: 31 Über: 3', 'vier Wochenstunden Informatik', '1.862.565 Einwohner', 'Ein Punkt kann tausendmal zu viel sein'],
    sources: [
      { claim: 'Hamburg: vier Pflichtstunden Informatik in Klasse 7 bis 10 seit 2025/26; Grundschule 1 bis 4; Naturwissenschaften/Technik in 5 und 6.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/hamburg' },
      { claim: 'Vier Länder setzen die Empfehlung von vier Pflichtstunden um.', url: 'https://informatik-monitor.de/' },
      { claim: 'Informatik-Biber 2026.', url: 'https://bwinf.de/biber/2026/' },
      { claim: 'Jugendwettbewerb Informatik, Stufe Bronze.', url: 'https://bwinf.de/jugendwettbewerb/' },
      { claim: 'Hamburger Ferien 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Bücherhallen-Daten und Lizenz.', url: 'https://ckan.govdata.de/dataset/offentliche-bibliotheken-hamburg37d23' }
    ],
    rejectedClaims: [
      'Eine Gesamtzahl aller Medien: nicht gebildet, weil die Angaben gerundet sind.',
      'Unterricht auf Deutsch oder vor Ort in Hamburg: nicht angeboten, die Seite sagt es offen.',
      'Hamburger Schulen als Herkunft unserer Lernenden: abgelehnt.',
      'Eine Empfehlung bestimmter Bücherhallen: nicht aus den Daten ableitbar.',
      'Verbindung zu BWINF, den Bücherhallen oder einer Schule: keine.'
    ]
  }
};
