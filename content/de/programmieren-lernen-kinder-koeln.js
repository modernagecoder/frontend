'use strict';
// Programmieren lernen für Kinder in Köln (ag- German-language city door, Germany cluster P5 row DE118, alloc code pko,
// hubGroup stadt). Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; German pages
// say so in the capsule ("auf Englisch") and frame it as a benefit. Formal "Sie" throughout. Pages show euro; checkout USD.
// Angle (own spine, not a translation of the English Cologne page): Kölner Eltern wissen, dass Informatik in NRW ab
// Klasse 5 Pflicht ist; was ihr Kind in der Grundschule schon davon sieht; wie Unterricht auf Englisch für Sechs- bis
// Zwölfjährige gelingt; ein Projekt mit den offenen Daten des Kölner Zoos, bei dem Kinder durch Teilen herausfinden,
// welche Tiergruppe die meisten Tiere pro Art hat; Ferien und Biber.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/programmieren-lernen-kinder-koeln/ and
// facts-school/src/, fetched 2 and 3 Nov 2026 with curl -sL -A "Mozilla/5.0"):
//  - GI Informatik-Monitor 2026/27, Nordrhein-Westfalen: "An allen allgemeinbildenden Schularten wird das Pflichtfach
//    Informatik in den Jahrgangsstufen 5 und 6 unterrichtet."; "Für die Jahrgangsstufen 5 und 6 aller Schulformen liegt
//    ein Kernlehrplan für das Pflichtfach Informatik vor."; IaG project "mit Kindern der Jahrgangsstufen 3 und 4";
//    Mathematik und Sachunterricht "insbesondere in den Klassen 3 und 4"; "Damit erfolgt bereits in der Grundschule eine
//    altersgerechte erste Begegnung mit informatischen Inhalten"; Wahlpflicht totals by school type; Oberstufe GK 3 h,
//    LK 5 h (FACTS.md 81).
//  - KMK Ferien 2026/2027, NRW row: "Nordrhein-Westfalen (3) 17.10. - 31.10. 23.12. - 06.01. -- 22.03. - 03.04. 18.05.
//    19.07. - 31.08."
//  - bwinf.de Biber (FACTS.md 129 to 137). Destatis GV-ISys 31.12.2024: Köln 1,024,621. EinhZeitG; summer time 2027.
//  - Data: Zoologischer Garten Köln (publisher_name in govdata_zoo.json), "Anzahl Arten Exemplare Kölner Zoo", via
//    Open.NRW / offenedaten-koeln.de, files entwicklung_anzahl_arten_koelner_zoo.csv and
//    entwicklung_anzahl_exemplare_koelner_zoo.csv, licence Datenlizenz Deutschland Zero 2.0 (dcat-ap.de dl-zero-de/2.0).
//    Notes: "Übersichten der Arten und Exemplare von Tieren des Kölner Zoos auf dem Stand des Jahresberichtes 2016."
//    Seven animal groups, years 2012 to 2016.
// Our own calculations (scratchpad de/w/C2/pko, python3 -I, files copied as arten.csv and tiere.csv): v1.py prints
// "Säugetiere 5.8", "Vögel 5.9", "Reptilien 4.9", "Amphibien 27.9", "Fische 21.4", "Gliederfüßer 18.4", "Andere
// Wirbellose 22.7"; v1 then v2 prints "2012 883 Arten, 9986 Tiere" ... "2016 809 Arten, 11118 Tiere". Fish species
// 345 (2012) to 222 (2013); amphibian animals 433 (2013) to 1,261 (2014).
// Lesson family: dividing two tables (a ratio per group) and reading a rounded decimal.

const { DE: DE_DE } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'def lies(datei):',
  '    werte = {}',
  '    with open(datei, encoding="utf-8") as f:',
  '        zeilen = list(csv.reader(f, delimiter=";"))',
  '    jahre = zeilen[0][1:]',
  '    for zeile in zeilen[1:]:',
  '        werte[zeile[0]] = dict(zip(jahre, [int(x) for x in zeile[1:]]))',
  '    return werte',
  '',
  'arten = lies("arten.csv")',
  'tiere = lies("tiere.csv")',
  '',
  'for gruppe in arten:',
  '    pro_art = tiere[gruppe]["2016"] / arten[gruppe]["2016"]',
  '    print(gruppe, round(pro_art, 1))'
].join('\n');

const V2 = [
  'for jahr in ["2012", "2013", "2014", "2015", "2016"]:',
  '    summe_arten = sum(arten[g][jahr] for g in arten)',
  '    summe_tiere = sum(tiere[g][jahr] for g in tiere)',
  '    print(jahr, summe_arten, "Arten,", summe_tiere, "Tiere")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'stadt', label: 'Köln: Programmieren für Kinder' },
  slug: 'programmieren-lernen-kinder-koeln',
  code: 'pko',
  accent: '#6A2431',
  accentRationale: 'Programmieren lernen für Kinder in Köln: ein dunkles Ziegelrot #6A2431, mit mehr Braun als das Weinrot der englischen Kölner Mathe-Seite; über 4,5:1 auf dem Papier und allen drei Tönungen (Vorgabe mindestens 8,93)',
  pageType: 'market',
  market: DE_DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Programmieren lernen für Kinder in Köln (auf Englisch)',
  title: 'Programmieren lernen für Kinder in Köln: live auf Englisch',
  description: 'Programmieren lernen für Kinder in Köln, 6 bis 12 Jahre: live online auf Englisch, Informatik in NRW ab Klasse 5 und ein Projekt mit Daten des Kölner Zoos.',
  ogDescription: 'Live-Online-Programmierkurse auf Englisch für Kölner Kinder von 6 bis 12: was NRW-Schulen in Klasse 3 bis 6 an Informatik bieten, warum Englisch dabei hilft, und ein Python-Projekt mit den Tierzahlen des Kölner Zoos.',
  twitterDescription: 'Programmieren für Kölner Kinder, live auf Englisch: Informatik in NRW, Biber und ein Projekt mit dem Kölner Zoo.',
  pageName: 'Programmieren lernen für Kinder in Köln',
  webPageDescription: 'Ein Leitfaden für Kölner Eltern von Kindern zwischen 6 und 12 Jahren: Informatik an Schulen in Nordrhein-Westfalen laut Informatik-Monitor 2026/27, die Schulferien 2026/27, der Informatik-Biber 2026 und ein eigenes Python-Projekt mit den offenen Tierdaten des Kölner Zoos.',
  courseDescription: 'Live-Online-Programmierkurse ausschließlich auf Englisch für Kinder von 6 bis 12 Jahren in Köln: Scratch zum Einstieg, dann Python und kleine Datenprojekte, in einer Gruppe mit fünfzehn bis zwanzig Kindern oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kinder in Köln',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#nrw', label: 'Schule' },
    { href: '#zoo', label: 'Zoo-Projekt' },
    { href: '#ferien', label: 'Ferien' },
    { href: '#uhrzeit', label: 'Zeiten' }
  ],
  eyebrow: 'Köln &middot; Programmieren für Kinder &middot; 6 bis 12 Jahre',
  h1: 'Programmieren lernen für Kinder in Köln, live auf Englisch',
  lede: 'In Nordrhein-Westfalen ist Informatik ab Klasse 5 an jeder Schulform Pflichtfach, und schon in der Grundschule tauchen in Mathematik und Sachunterricht die ersten informatischen Inhalte auf. Für Kölner Eltern stellt sich also weniger die Frage, ob ihr Kind programmieren lernt, sondern wann und wie gut vorbereitet. Diese Seite zeigt den Weg von Klasse 3 bis 6, wie Sechs- bis Zwölfjährige bei uns live und auf Englisch lernen, und ein Projekt, bei dem Kinder mit den echten Zahlen des Kölner Zoos rechnen.',
  secondaryCta: { href: '#zoo', label: 'Zum Zoo-Projekt' },
  wa: 'Hallo Modern Age Coders, wir wohnen in Köln und unser Kind möchte programmieren lernen, gern auf Englisch. Können wir eine kostenlose Probestunde vereinbaren?',
  heroNote: 'Live-Unterricht seit 2020 &middot; mehr als 10.000 Lernende weltweit &middot; Unterricht auf Englisch mit festem Mentor',
  spec: [
    ['Alter', '6 bis 12 Jahre'],
    ['Weg', 'Scratch, dann Python'],
    ['Gruppe', 'Fünfzehn bis zwanzig Kinder, oder einzeln'],
    ['Zeiten', 'Nach der Schule und samstags'],
    ['Sprache', 'Englisch, Mentoren aus Indien'],
    ['Probestunde', 'Kostenlos, ohne Karte']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Modern Age Coders unterrichtet Kölner Kinder von 6 bis 12 Jahren live online im Programmieren, und zwar auf Englisch: erst Spiele mit Scratch, dann Python und kleine Projekte mit Kölner Daten wie den Tierzahlen des Zoos. Unterricht auf Englisch, mit Mentoren aus Indien; diese treffen Tempo und Aussprache Ihres Kindes. Die Stunden finden einzeln oder in Gruppen von fünfzehn bis zwanzig statt, nach der Schule oder samstags, als Vorbereitung auf das NRW-Pflichtfach ab Klasse 5.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Kurse für Kinder in Köln',
    lede: 'Für Kinder kurz vor Klasse 5 ein Python-Kurs, für die Jüngsten ein langer Bausteinkurs, und zum Hineinschnuppern ein kompakter Scratch-Kurs.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PKO / 01', title: 'Python und KI für Kinder', alt: 'Kursbild Python und KI für Kinder', note: 'Für etwa Neun- bis Zwölfjährige: getippter Code, Schildkrötengrafik, erste eigene Spiele und Rechenprojekte wie die Zoo-Tabelle auf dieser Seite. Ein guter Anlauf auf Informatik in Klasse 5.' },
      { course: 'kids-coding-blocks-masterclass', code: 'PKO / 02', title: 'Coding für Kinder', alt: 'Kursbild Coding für Kinder', note: 'Ab sechs Jahren, in altersgleichen Gruppen und über etwa ein Schuljahr: in Scratch erst Geschichten und Spiele, später einfache Apps, danach der Übergang zu getipptem Code.' },
      { course: 'scratch-programming-complete-course', code: 'PKO / 03', title: 'Scratch für Kinder', alt: 'Kursbild Scratch für Kinder', note: 'Ein kompakter Kurs über ein paar Monate, ideal zum Ausprobieren: Ihr Kind baut mehrere eigene Spiele, und Sie sehen bald, ob die Begeisterung bleibt.' }
    ]
  },

  sections: [
    {
      id: 'nrw',
      eyebrow: 'Informatik in NRW',
      h2: 'Ist Informatik in NRW Pflichtfach, und ab welcher Klasse?',
      lede: 'Ja, ab Klasse 5, an allen allgemeinbildenden Schulformen. Die Gesellschaft für Informatik beschreibt in ihrem Monitor für 2026/27 auch, was davor in der Grundschule geschieht.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik auf dem Weg eines Kölner Kindes, Schuljahr 2026/27', head: ['Klasse', 'Was der Monitor für NRW beschreibt'], rows: [
          ['1 und 2', 'Grundschule; das Pflichtfach Informatik beginnt erst in Klasse 5'],
          ['3 und 4', 'Informatische Inhalte im Fach Mathematik und im Sachunterricht; Projekt Informatik an Grundschulen (IaG)'],
          ['5 und 6', 'Pflichtfach Informatik an allen allgemeinbildenden Schulformen, mit eigenem Kernlehrplan'],
          ['7 bis 10', 'Informatik als Wahlpflichtfach, je nach Schulform; am Gymnasium in Klasse 9 und 10'],
          ['Oberstufe', 'Grundkurs mit drei oder Leistungskurs mit fünf Wochenstunden']
        ] },
        { kind: 'source', html: 'Quelle: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Seite Nordrhein-Westfalen, zusammengestellt aus der APO-S I und der APO-GOSt; gelesen am 2. November 2026. Die Grundschule umfasst in NRW die Klassen 1 bis 4.' },
        { kind: 'two', mt: true,
          leftH3: 'Die Grundschule legt den Grundstein',
          left: [
            'Laut Monitor weisen die weiterentwickelten Lehrpläne der NRW-Grundschule in Mathematik und im Sachunterricht ausdrücklich Inhalte aus, die die informatische Bildung stärken, vor allem in Klasse 3 und 4. Der Monitor nennt das eine altersgerechte erste Begegnung mit informatischen Inhalten.',
            'Ein eigenes Fach ist das nicht. Wie viel Ihr Kind davon merkt, hängt von der Schule und der Lehrkraft ab. Wer zu Hause oder in einem Kurs schon mit Scratch gespielt hat, erkennt die Ideen im Unterricht oft sofort wieder.'
          ],
          rightH3: 'Klasse 5 und 6 für alle',
          right: [
            'Mit dem Wechsel auf die weiterführende Schule wird es verbindlich: Hauptschule, Realschule, Sekundarschule, Gesamtschule und Gymnasium unterrichten in Klasse 5 und 6 das Pflichtfach Informatik nach einem gemeinsamen Kernlehrplan.',
            'Für ein Kind, das jetzt sieben oder acht ist, liegt dieser Schritt nur wenige Jahre entfernt. Unser Ziel ist kein Vorgriff auf den Lehrplan, sondern sichere Grundlagen: in Schritten denken, Fehler suchen, eine Lösung verbessern.'
          ] }
      ]
    },
    {
      id: 'englisch',
      eyebrow: 'Unterricht auf Englisch',
      h2: 'Kann mein Kind auf Englisch programmieren lernen, auch mit wenig Englisch?',
      lede: 'Ja. Gelehrt wird nur auf Englisch, und die meisten Kinder kommen damit besser zurecht, als Eltern erwarten.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Programmieren und Englisch zugleich', p: 'Ihr Kind lernt eine Stunde lang zwei Dinge: wie ein Programm entsteht und wie man darüber auf Englisch spricht. Weil es um das eigene Spiel geht, bleiben Wörter wie jump, score oder repeat schnell hängen.' },
          { h3: 'Tempo und Aussprache passen', p: 'Der Mentor spricht ruhig, in kurzen Sätzen, prüft regelmäßig, ob alles angekommen ist, und hat sich bald auf die Aussprache Ihres Kindes eingestellt. Rutscht ein deutsches Wort dazwischen, ist das in Ordnung; das englische folgt freundlich.' },
          { h3: 'Vieles zeigt der Bildschirm', p: 'Der Mentor macht einen Schritt vor, Ihr Kind macht ihn nach und verändert ihn. So wird wenig erklärt und viel ausprobiert, und die englischen Befehle von Python sind ohnehin dieselben wie im späteren Informatikunterricht.' }
        ] },
        { kind: 'p', mt: true, html: 'Unsere Mentoren unterrichten aus Indien per Live-Video. Wenn in Köln die Schule vorbei ist, ist in Indien früher Abend, das passt gut. Ihr Kind lernt Woche für Woche bei derselben Person, die bald weiß, ob es Herausforderungen mag oder lieber erst einmal zuschaut.' }
      ]
    },
    {
      id: 'zoo',
      tint: 'tint',
      eyebrow: 'Ein echtes Kölner Projekt',
      h2: 'Welche Tiergruppe hat im Kölner Zoo die meisten Tiere pro Art?',
      lede: 'Der Kölner Zoo hat seine Tierzahlen als offene Daten veröffentlicht: wie viele Arten und wie viele einzelne Tiere es in sieben Tiergruppen gab, für die Jahre 2012 bis 2016. Ältere Kinder teilen die eine Tabelle durch die andere und entdecken etwas Überraschendes.',
      body: [
        { kind: 'two',
          leftH3: 'Die Daten',
          left: [
            'Es sind zwei kleine Tabellen, eine mit der Zahl der Arten und eine mit der Zahl der Tiere, jeweils für Säugetiere, Vögel, Reptilien, Amphibien, Fische, Gliederfüßer und andere Wirbellose. Der Zoo gibt als Stand den Jahresbericht 2016 an.',
            'Wir speichern sie als arten.csv und tiere.csv. Jede Zeile ist eine Tiergruppe, jede Spalte ein Jahr. Das Programm liest beide Tabellen mit derselben kleinen Funktion ein.'
          ],
          rightH3: 'Die Frage',
          right: [
            'Wie viele Tiere gibt es im Durchschnitt von jeder Art? Bei den Säugetieren sieht man im Zoo meist nur wenige Tiere derselben Art, bei Fischen ganze Schwärme. Aber stimmt das auch in Zahlen?',
            'Dafür teilt das Kind für 2016 die Zahl der Tiere durch die Zahl der Arten, für jede Gruppe einzeln, und rundet auf eine Nachkommastelle.'
          ] },
        { kind: 'code', label: 'Version 1: Tiere pro Art im Jahr 2016', lang: 'Python', code: V1, note: 'Von uns ausgeführt, liefert es: <code>Säugetiere 5.8</code>, <code>Vögel 5.9</code>, <code>Reptilien 4.9</code>, <code>Amphibien 27.9</code>, <code>Fische 21.4</code>, <code>Gliederfüßer 18.4</code> und <code>Andere Wirbellose 22.7</code>.' },
        { kind: 'p', mt: true, html: 'Die Überraschung: Nicht die Fische liegen vorn, sondern die Amphibien mit fast 28 Tieren pro Art. Fische haben zwar insgesamt die meisten Tiere, nämlich 5.157, aber auch sehr viele Arten, 241. Erst das Teilen zeigt, was die reine Anzahl verdeckt. Nebenbei lernen Kinder, dass Python mit Punkt schreibt, wo wir ein Komma setzen: 5.8 bedeutet 5,8.' },
        { kind: 'p', html: 'Die zweite Version zählt für jedes Jahr alle Gruppen zusammen. So sieht man, wie sich der ganze Zoo zwischen 2012 und 2016 verändert hat.' },
        { kind: 'code', label: 'Version 2: Arten und Tiere pro Jahr zusammen', lang: 'Python', code: V2, note: 'Läuft es direkt nach Version 1, erscheint: <code>2012 883 Arten, 9986 Tiere</code>, <code>2013 780 Arten, 9343 Tiere</code>, <code>2014 842 Arten, 10576 Tiere</code>, <code>2015 839 Arten, 10747 Tiere</code> und <code>2016 809 Arten, 11118 Tiere</code>.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Kölner Zoo, ausgewählte Gruppen 2016 (Daten des Zoos, Verhältnis eigene Berechnung)', head: ['Tiergruppe', 'Arten', 'Tiere', 'Tiere pro Art'], rows: [
          ['Amphibien', '36', '1.006', '27,9'],
          ['Fische', '241', '5.157', '21,4'],
          ['Vögel', '234', '1.382', '5,9'],
          ['Säugetiere', '84', '485', '5,8']
        ] },
        { kind: 'source', html: 'Daten: Zoologischer Garten Köln, Anzahl Arten Exemplare Kölner Zoo, über Open.NRW, Lizenz Datenlizenz Deutschland Zero 2.0, Stand Jahresbericht 2016, heruntergeladen am 3. November 2026. Summen und Verhältnisse sind unsere eigenen Berechnungen.' },
        { kind: 'p', mt: true, html: 'Zwei Sprünge in den Daten eignen sich für ein Gespräch: Die Zahl der Fischarten fiel von 345 im Jahr 2012 auf 222 im Jahr 2013, und die Zahl der Amphibien stieg von 433 im Jahr 2013 auf 1.261 im Jahr 2014. Warum, sagen die Daten nicht. Gute junge Programmierer schreiben deshalb eine Vermutung auf und daneben, wie man sie prüfen könnte, statt sie als Tatsache auszugeben.' },
        { kind: 'ol', mt: true, items: [
          '<strong>6 bis 8 Jahre, ohne Bildschirm.</strong> Legen Sie zwölf Spielzeugtiere in drei Gruppen. Zählen Sie Tiere und Sorten pro Gruppe und teilen Sie gemeinsam: Welche Gruppe hat die meisten Tiere pro Sorte?',
          '<strong>8 bis 10 Jahre, Scratch.</strong> Zwei Listen, eine mit Arten, eine mit Tieren. Die Katze nennt für jede Gruppe das Ergebnis der Division.',
          '<strong>Ab 10, Python.</strong> Lassen Sie Version 1 laufen und passen Sie sie an, damit sie das Jahr 2012 berechnet. Welche Gruppe lag damals vorn?',
          '<strong>Für Fortgeschrittene.</strong> Lassen Sie das Programm die Gruppen nach Tieren pro Art sortiert ausgeben, die größte zuerst.'
        ] }
      ]
    },
    {
      id: 'ferien',
      eyebrow: 'Das Kölner Schuljahr',
      h2: 'Wann sind in NRW Schulferien, und wann ist der Informatik-Biber?',
      lede: 'Die Herbstferien sind gerade vorbei, und in wenigen Tagen beginnt ein kostenloser Wettbewerb, an dem Kölner Schulen teilnehmen können.',
      body: [
        { kind: 'table', numCols: [], caption: 'NRW-Schulferien im Schuljahr 2026/27, jeweils vom ersten bis zum letzten freien Tag', head: ['Ferienzeit', 'Von bis'], rows: [
          ['Herbstferien', '17. bis 31. Oktober 2026'],
          ['Weihnachtsferien', '23. Dezember 2026 bis 6. Januar 2027'],
          ['Osterferien', '22. März bis 3. April 2027'],
          ['Pfingsten', '18. Mai 2027'],
          ['Sommerferien', '19. Juli bis 31. August 2027']
        ] },
        { kind: 'source', html: 'Quelle: KMK-Ferienübersicht 2026/2027 (Stand 9. Oktober 2025), Eintrag Nordrhein-Westfalen. Die Tabelle nennt für NRW zusätzlich drei bewegliche Ferientage. Winterferien gibt es in NRW 2026/27 nicht.' },
        { kind: 'two', mt: true,
          leftH3: 'Der Informatik-Biber 2026',
          left: [
            'Der Biber der Bundesweiten Informatikwettbewerbe ist kostenlos, läuft online und besteht aus Denkaufgaben, für die man nicht programmieren können muss. Teilnehmen können Schülerinnen und Schüler der Klassen 3 bis 13; 2025 waren es mehr als 580.000.',
            'Die Biberwochen dauern vom 9. bis 20. November 2026. Angemeldet wird über die Schule, fragen Sie daher bei der Klassenlehrkraft nach. Ergebnisse gibt es im Dezember 2026, Urkunden im Januar 2027.'
          ],
          rightH3: 'Wie wir die Ferien nutzen',
          right: [
            'Auch in den Ferien geht der Unterricht weiter, außer Sie wünschen eine Pause. Die sechs Sommerwochen ab dem 19. Juli 2027 eignen sich für ein kleines Abschlussprojekt, etwa ein eigenes Spiel oder eine Erweiterung der Zoo-Tabelle.',
            'Echte Biber-Aufgaben setzen wir nicht ein. Wir erfinden eigene Rätsel im selben Geist, zu Reihenfolgen, versteckten Regeln und Wegen.'
          ] }
      ]
    },
    {
      id: 'uhrzeit',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Um wie viel Uhr findet der Unterricht in Köln statt?',
      lede: 'Die meisten Kölner Kinder lernen am frühen oder späten Nachmittag, die Jüngeren gern am Samstag um die Mittagszeit.',
      body: [
        { kind: 'table', numCols: [], caption: 'Beispieltermine in Köln mit der passenden Uhrzeit in Indien', head: ['In Köln', 'In Indien im Winter', 'In Indien ab 28. März 2027'], rows: [
          ['14:40', '19:10', '18:10'],
          ['16:20', '20:50', '19:50'],
          ['Samstag 12:15', '16:45', '15:45']
        ] },
        { kind: 'source', html: 'Rechtsgrundlage ist das Einheitenzeitgesetz: In Deutschland gilt im Winter UTC+1, im Sommer UTC+2. Seit dem 25. Oktober 2026 gilt Winterzeit, ab dem 28. März 2027 wieder Sommerzeit. Indien hat ganzjährig UTC+5:30 und liegt damit viereinhalb beziehungsweise dreieinhalb Stunden vor Köln. Es handelt sich um Beispiele, nicht um feste Gruppentermine.' },
        { kind: 'p', mt: true, html: 'Sie buchen nach Kölner Uhr; beim Mentor erscheint derselbe Termin in indischer Zeit. Kinder aus der Offenen Ganztagsschule wählen oft 16:20 Uhr oder den Samstag.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Lernstufen',
    h2: 'Fünf Stufen bis zum ersten eigenen Datenprojekt',
    lede: 'Unsere eigene Einteilung, mit der wir Kinder einer Gruppe zuordnen und Eltern den Fortschritt zeigen.',
    table: { caption: 'Programmier-Stufen für 6 bis 12 Jahre (von uns entwickelt)', head: ['Stufe', 'Etwa im Alter von', 'Das Kind kann'], rows: [
      ['1. Schritte', '6 und 7', 'Eine Figur mit Befehlen in der richtigen Reihenfolge bewegen'],
      ['2. Schleifen', '7 und 8', 'Wiederholungen mit einer Schleife statt mit vielen Kopien bauen'],
      ['3. Variablen', '8 bis 10', 'Einen Punktestand oder eine Anzahl speichern und verändern'],
      ['4. Rechnen mit Daten', '9 bis 11', 'Zwei Werte teilen und das Ergebnis sinnvoll runden'],
      ['5. Tabellen', '10 bis 12', 'Zwei Tabellen einlesen, verknüpfen und das Ergebnis erklären']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Das Zoo-Projekt verbindet Stufe 4 und 5. Wer versteht, warum ein Verhältnis mehr verrät als eine reine Zahl, hat für Mathe und Informatik etwas gelernt.',
      'Wir berichten, was Ihr Kind gebaut hat und erklären kann.'
    ] },
    right: { h3: 'Für Kinder', ps: [
      'Die größte Zahl ist nicht immer die spannendste. Manchmal hilft Teilen.',
      'Python schreibt 5.8, wir schreiben 5,8. Es ist dieselbe Zahl.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse für Kölner Kinder',
    lede: 'Live, auf Englisch und mit einem festen Mentor, einzeln oder in der Gruppe.',
    bands: [
      { num: 'I', h3: 'Denken und Rechnen', sub: '7 bis 15 Jahre', courses: [
        { code: 'PKO / DENK / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Logisch denken', blurb: 'Rätsel und Pläne Schritt für Schritt, ab 7.' },
        { code: 'PKO / DENK / 02', slug: 'maths-through-coding', title: 'Rechnen mit Code', blurb: 'Schulmathe als kleines Programm, ab 10.' },
        { code: 'PKO / DENK / 03', slug: 'ai-literacy-for-kids-course', title: 'Was ist KI?', blurb: 'Wie Maschinen lernen, kindgerecht und ohne Konten für Erwachsene, ab 8.' }
      ] },
      { num: 'II', h3: 'Spielen und Gestalten', sub: '7 bis 14 Jahre', courses: [
        { code: 'PKO / SPIEL / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft programmieren', blurb: 'Befehle in der bekannten Klötzchenwelt, ab 7.' },
        { code: 'PKO / SPIEL / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox mit Luau', blurb: 'Eigene Spielwelten für Freunde, ab 8.' },
        { code: 'PKO / SPIEL / 03', slug: 'game-development-masterclass-for-kids', title: 'Spieleentwicklung', blurb: 'Von Scratch über Roblox bis Minecraft, ab 8.' }
      ] },
      { num: 'III', h3: 'Eigene Projekte', sub: '8 bis 12 Jahre', courses: [
        { code: 'PKO / PROJ / 01', slug: 'block-coding-app-development-masterclass', title: 'Apps bauen', blurb: 'Mit Bausteinen zur eigenen Handy-App, ab 8.' },
        { code: 'PKO / PROJ / 02', slug: 'kids-ai-web-development-course', title: 'Webseiten für Kinder', blurb: 'Eine eigene kleine Website, ab 9.' },
        { code: 'PKO / PROJ / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ für Kinder', blurb: 'Knobelspiele in C++, ab 9.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'So läuft es ab',
    h2: 'Wie eine Woche Unterricht für Kölner Familien aussieht',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Nachmittags', l: 'Ab etwa 14:40 Uhr Kölner Zeit, nach Schule oder OGS.' },
      { time: 'Samstags', l: 'Um die Mittagszeit, ganz ohne Eile.' },
      { time: 'Einzeln', l: 'Zu einer Zeit, die Sie mit dem Mentor absprechen.' }
    ],
    cells: [
      { h3: 'Fester Mentor', p: 'Jede Woche dieselbe Ansprechperson.' },
      { h3: 'Einfaches Englisch', p: 'Kurze Sätze, oft nachgefragt.' },
      { h3: 'Selbst am Zug', p: 'Ihr Kind steuert Maus und Tastatur.' },
      { h3: 'Gleichaltrige', p: 'Gruppen nach Alter, nicht gemischt.' },
      { h3: 'Kurzer Bericht', p: 'Was entstanden ist und was folgt.' },
      { h3: 'Allein oder zusammen', p: 'Fünfzehn bis zwanzig Kinder, oder Einzelstunden.' }
    ]
  },

  projectsH2: 'Was unsere älteren Lernenden bauen',
  projectsLede: 'Aus manchem Scratch-Spiel wird Jahre später eine echte Anwendung. Hier ein paar Arbeiten älterer Lernender; mehr zeigt die Seite <a class="ag-inline-link" href="/student-labs">Student labs</a> (englischsprachig).',
  reviewsLede: 'Bewertungen von Familien auf Google, wörtlich und auf Englisch.',

  fees: {
    h2: 'Was der Unterricht in Köln kostet',
    lede: 'Für acht Live-Stunden im Monat fällt eine monatliche Gebühr an. Wir nennen sie in Euro, auf Grundlage des Referenzkurses der Europäischen Zentralbank, belasten Ihre Karte aber in US-Dollar. Ihre Bank tauscht den Betrag um, sodass er auf dem Kontoauszug leicht anders ausfallen kann.',
    free: ['Eine kostenlose Probestunde', 'Ein Rätsel und ein erstes Programm', 'Ohne Karte'],
    group: ['Fünfzehn bis zwanzig Kinder ähnlichen Alters', 'Ein fester Mentor', 'Zwei Stunden pro Woche', 'Monatlich kündbar'],
    one: ['Ihr Kind und ein Mentor', 'Projekte nach Interesse', 'Termine nach Absprache']
  },

  faq: {
    eyebrow: 'Fragen von Kölner Eltern',
    h2: 'Was Kölner Eltern oft fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein. Alle Stunden finden live und nur auf Englisch statt, und genau das schätzen viele Familien: Ihr Kind lernt Programmieren und Englisch zugleich. Der Mentor passt Tempo und Aussprache an, fragt nach und erklärt bei Bedarf mit einfacheren Worten.' },
      { q: 'Ist Informatik in NRW ein Pflichtfach?', a: 'Ja. Nach dem Monitor der Gesellschaft für Informatik für das Schuljahr 2026/27 wird Informatik an allen allgemeinbildenden Schulformen in Nordrhein-Westfalen in Klasse 5 und 6 als Pflichtfach unterrichtet, nach einem gemeinsamen Kernlehrplan.' },
      { q: 'Lernt mein Kind in der Grundschule schon etwas Informatik?', a: 'Etwas, aber nicht als eigenes Fach. Der Monitor berichtet, dass die NRW-Lehrpläne in Mathematik und im Sachunterricht informatische Inhalte ausweisen, vor allem in Klasse 3 und 4.' },
      { q: 'Ab welchem Alter lohnt sich ein Kurs?', a: 'Ab sechs Jahren. Die Jüngsten beginnen mit Scratch, wo Bausteine zusammengesetzt statt getippt werden. Mit etwa neun Jahren wechseln die meisten zu Python, rechtzeitig vor Klasse 5.' },
      { q: 'Reicht das Englisch meines Kindes?', a: 'Fast immer. Viel wird am Bildschirm gezeigt, und die wichtigsten Wörter kehren in jeder Stunde wieder. In der kostenlosen Probestunde sehen Sie und der Mentor gemeinsam, ob Ihr Kind gut folgen kann.' },
      { q: 'Wann finden die Stunden statt?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. In Köln beliebt sind 14:40 und 16:20 Uhr.' },
      { q: 'Woher kommen die Mentoren?', a: 'Sie arbeiten in Indien und unterrichten live per Video. Eine Stunde um 16:20 Uhr in Köln beginnt dort bis zum 28. März 2027 um 20:50 Uhr. Ihr Kind behält seinen Mentor.' },
      { q: 'Wie viele Kinder sind in einer Gruppe?', a: 'Fünfzehn bis zwanzig Kinder ähnlichen Alters. Im Einzelunterricht hat Ihr Kind zwei private Stunden pro Woche mit dem Mentor.' },
      { q: 'Was kostet es, und wie wird gezahlt?', a: 'Es gibt eine monatliche Gebühr. Angezeigt wird sie in Euro zum Referenzkurs der Europäischen Zentralbank, abgebucht wird in US-Dollar; Ihre Bank rechnet um, daher sind kleine Abweichungen möglich. Die Probestunde kostet nichts.' },
      { q: 'Was braucht mein Kind zu Hause?', a: 'Einen Rechner mit echter Tastatur, eine Webcam und verlässliches Internet. Für Scratch genügt der Browser; bei Python helfen wir beim Einrichten. Ein Tablet allein genügt für getippten Code nicht.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weitere Seiten',
    h2: 'Weiterlesen',
    lede: 'Mehr für Familien in Nordrhein-Westfalen und ganz Deutschland.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Alle unsere Seiten für Deutschland (englischsprachig).' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Von Klasse 5 bis zum Abitur, auf Deutsch.' },
      { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber üben', p: 'Der Wettbewerb erklärt, mit eigenen Rätseln (englischsprachig).' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik nach Bundesland', p: 'NRW im Vergleich mit allen Ländern (englischsprachig).' },
      { href: '/python-for-10-year-olds', label: 'Python mit zehn', p: 'Wie Code in diesem Alter aussieht (englischsprachig).' },
      { href: '/how-we-teach', label: 'So unterrichten wir', p: 'Eine Live-Stunde im Ablauf (englischsprachig).' }
    ]
  },

  start: {
    h2: 'Kostenlose Probestunde vereinbaren',
    lede: 'Ihr Kind knackt ein kurzes Rätsel und schreibt sein erstes kleines Programm. Der Mentor erlebt dabei, wie es denkt und wie leicht ihm Englisch fällt, und empfiehlt dann einen Kurs.',
    readFirst: 'Lesen Sie gern vorher: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> erklärt unsere Stunden, <a class="ag-inline-link" href="/courses">All courses</a> enthält alle Lehrpläne, beides auf Englisch.',
    note: 'Unterricht live online, mit Mentoren in Indien und ausschließlich auf Englisch. Bei Fragen erreichen Sie uns am schnellsten per WhatsApp.',
    formNote: 'Kostenlos, ohne Karte, ohne Vertrag.'
  },

  footer: {
    cols: [
      { h4: 'Für Kinder', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch für Kinder' },
        { href: '/python-for-10-year-olds', label: 'Python mit zehn' },
        { href: '/ai-projects-for-kids', label: 'KI-Projekte für Kinder' },
        { href: '/ai-tools-age-guide', label: 'KI-Werkzeuge nach Alter' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik nach Bundesland' },
        { href: '/student-labs', label: 'Projekte unserer Lernenden' }
      ] }
    ],
    bottomRight: 'Manchmal verrät das Teilen mehr als das Zählen'
  },

  personalityCss: `
.ag-root.ag-pko .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-pko .ag-capsule { border-left-width: 4px; border-radius: 5px; }
.ag-root.ag-pko .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-pko .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-pko .ag-code-head b { letter-spacing: 0.016em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27, Nordrhein-Westfalen; KMK Ferien 2026/2027; Bundesweite Informatikwettbewerbe, Informatik-Biber 2026; Einheitenzeitgesetz; Zoologischer Garten Köln, Anzahl Arten Exemplare Kölner Zoo, über Open.NRW, Datenlizenz Deutschland Zero 2.0; alle gelesen am 2. und 3. November 2026.',
    localProject: 'Die Kölner Zoo-Rechnung: ein eigenes Python-Projekt mit den offenen Daten des Kölner Zoos (sieben Tiergruppen, 2012 bis 2016), das für 2016 Tiere pro Art berechnet (Amphibien 27,9 vor Fischen 21,4, Säugetiere 5,8) und dann Arten und Tiere pro Jahr summiert (2012: 883 Arten und 9.986 Tiere; 2016: 809 Arten und 11.118 Tiere); mit Spielzeug- und Scratch-Version. Lesson family: zwei Tabellen teilen, ein Verhältnis pro Gruppe.',
    requiredMentions: ['arten.csv', 'Amphibien 27.9', 'Fische 21.4', 'Säugetiere 5.8', '2012 883 Arten, 9986 Tiere', '2016 809 Arten, 11118 Tiere', 'Informatik an Grundschulen (IaG)', 'Manchmal verrät das Teilen mehr als das Zählen'],
    sources: [
      { claim: 'Pflichtfach Informatik in Klasse 5 und 6 an allen allgemeinbildenden Schulformen in NRW; Grundschul-Inhalte in Klasse 3 und 4; IaG.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'Schulferien NRW 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Informatik-Biber 2026: Termine und Bedingungen.', url: 'https://bwinf.de/biber/' },
      { claim: 'Kölner Zoo: Arten und Exemplare 2012 bis 2016, Datenlizenz Deutschland Zero 2.0.', url: 'https://ckan.govdata.de/dataset/anzahl-arten-exemplare-kolner-zoo' },
      { claim: 'Einwohnerzahl Köln 1.024.621 (31.12.2024).', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/05-staedte.xlsx?__blob=publicationFile' }
    ],
    rejectedClaims: [
      'Gründe für die Sprünge bei Fischarten und Amphibien: nicht in den Daten, daher nur als prüfbare Vermutung genannt.',
      'Aktuelle Tierzahlen des Zoos: die Daten enden mit dem Jahresbericht 2016, die Seite sagt das.',
      'Kölner Schulen als Herkunft unserer Lernenden: abgelehnt.',
      'Unterricht auf Deutsch: wir unterrichten nur auf Englisch, und die Seite sagt es.',
      'Verbindungen zum Kölner Zoo, zum NRW-Ministerium, zu BWINF oder einer Schule: keine.'
    ]
  }
};
