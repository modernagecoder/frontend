'use strict';
// Programmieren lernen für Kinder in Leipzig (ag- German city door, Germany cluster P5 row DE130).
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; German pages
// say so ("auf Englisch") and frame it as a benefit. Formal "Sie". Pages show euro, checkout charges USD.
// Angle (German parents of children 6 to 12 in Leipzig): Sachsen gives every pupil Informatik from Klasse 7, and
// Technik/Computer in Klasse 5 and 6, but the Grundschule has none; what children can do before that; why English
// lessons are a double gain; the Känguru der Mathematik on 8 April 2027; and an original project on the Leipzig Zoo's
// yearly visitor numbers, where the interesting answer is in the jumps between years, not in the record.
// Sources (raw copies under ~/Desktop/SkyCoders/keyword-research-2026-09/de/; read 2 and 3 Nov 2026):
//  - GI Informatik-Monitor 2026/27, Sachsen page (facts-school/src/infmon-sachsen/): "Sowohl an der Oberschule als auch
//    am Gymnasium wird das Fach Informatik jeweils einstündig in den Jahrgangsstufen 7 bis 10 unterrichtet." (FACTS 85);
//    interdisciplinary "Technik/Computer" for "Jahrgangsstufen 5 bis 6"; "Die Primarstufe umfasst die Grundschule mit den
//    Jahrgangsstufen 1 bis 4"; Oberschule, Gymnasium and Gemeinschaftsschule cover 5 to 10; "Aktuell sind keine
//    verbindlichen Änderungen hinsichtlich der informatischen Bildung veröffentlicht."; Leistungskurs "an ausgewählten
//    Gymnasien" (86); written LK Abitur with a practical part B, documentation "für SQL und Python 3 und Java" and "ein
//    für die Prüfung zugelassener Computer".
//  - GI national page: four Länder incl. Sachsen meet the four-hour target (91); about half in Sachsen and MV take
//    Informatik in the Oberstufe (98).
//  - Känguru der Mathematik (facts-school/src/kaenguru/): 8 April 2027 (183); registration 01.12.2026 to 31.01.2027
//    (184); over 920,000 pupils from over 13,000 schools in 2026 (185); 75 minutes, 24 tasks for 3/4 and 5/6 (186).
//  - KMK Ferien 2026/27 row "Sachsen (1)": Weihnachten 23.12. - 02.01.; Winter 08.02. - 19.02.; Ostern 26.03. - 02.04.;
//    07.05.; Pfingsten 15.05. - 18.05.; Sommer 10.07. - 20.08.
//  - Destatis GV-ISys 31.12.2024 (facts-geo/places.tsv): Leipzig 611,850.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
//  - Data: Stadt Leipzig, Amt für Statistik und Wahlen, via Freistaat Sachsen, "Zoo Leipzig (Jahreszahlen)",
//    https://ckan.govdata.de/dataset/zoo-leipzig-jahreszahlen, licence Datenlizenz Deutschland Namensnennung 2.0
//    (dcat-ap.de dl-by-de/2.0), CSV from statistik.leipzig.de/opendata/api/values?kategorie_nr=11&rubrik_nr=4&periode=y
//    (1,108 bytes, sha256 217f137c...a83050bbe), downloaded 3 Nov 2026. Row "Besucher" 2001 to 2025, values written as
//    "1.17318e+006" (six significant digits); rows Tierbestand nach Arten / nach Individuen with "." for missing years.
// Our own calculations (scratchpad de/w/C4/lep/v1.py, v2.py, python3 -I): v1 prints "Meiste Besucher: 2012 2123350" and
// "Wenigste Besucher: 2002 1164390"; v2 prints "Größter Anstieg: 2021 auf 2022 616530" and "Größter Rückgang: 2019 auf
// 2020 -447760". 14 rises and 10 falls between consecutive years.
// Lesson family: look at the steps between neighbours (year-on-year differences), not only at the record high and low.

const { DE: DE_DE } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import csv',
  '',
  'besucher = {}',
  'with open("zoo_besucher.csv", encoding="utf-8") as f:',
  '    for zeile in csv.DictReader(f, delimiter=";"):',
  '        besucher[int(zeile["jahr"])] = round(float(zeile["besucher"]))',
  '',
  'hoch = max(besucher, key=besucher.get)',
  'tief = min(besucher, key=besucher.get)',
  'print("Meiste Besucher:", hoch, besucher[hoch])',
  'print("Wenigste Besucher:", tief, besucher[tief])'
].join('\n');

const V2 = [
  'jahre = sorted(besucher)',
  'sprung = {}',
  'for i in range(1, len(jahre)):',
  '    jahr = jahre[i]',
  '    sprung[jahr] = besucher[jahr] - besucher[jahre[i - 1]]',
  '',
  'auf = max(sprung, key=sprung.get)',
  'ab = min(sprung, key=sprung.get)',
  'print("Größter Anstieg:", jahre[jahre.index(auf) - 1], "auf", auf, sprung[auf])',
  'print("Größter Rückgang:", jahre[jahre.index(ab) - 1], "auf", ab, sprung[ab])'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'stadt', label: 'Leipzig: Programmieren für Kinder' },
  slug: 'programmieren-lernen-kinder-leipzig',
  code: 'lep',
  accent: '#615579',
  accentRationale: 'Programmieren lernen für Kinder in Leipzig: ein gedämpftes Fliederviolett #615579, abgesetzt vom Seeblau der englischen Leipzig-Seite; Kontrast 5.53 auf dem Papierton #FBF8F2 und über 4.5 auf allen drei Papiertönen',
  pageType: 'market',
  market: DE_DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Programmieren lernen für Kinder in Leipzig',
  title: 'Programmieren lernen für Kinder in Leipzig: live auf Englisch',
  description: 'Programmieren lernen für Kinder in Leipzig von 6 bis 12: live auf Englisch, Informatik in Sachsen ab Klasse 7, Känguru am 8. April 2027 und ein Zoo-Datenprojekt.',
  ogDescription: 'Live-Onlineunterricht auf Englisch für Leipziger Kinder von 6 bis 12: was sächsische Schulen wann unterrichten, der Mathe-Wettbewerb Känguru im April 2027 und ein Programmierprojekt mit den Besucherzahlen des Zoo Leipzig.',
  twitterDescription: 'Programmieren für Leipziger Kinder, live auf Englisch: Informatik in Sachsen, Känguru 2027 und ein Zoo-Projekt.',
  pageName: 'Programmieren lernen für Kinder in Leipzig',
  webPageDescription: 'Ein Leitfaden für Leipziger Eltern von Kindern zwischen 6 und 12: Informatik an sächsischen Schulen nach dem Informatik-Monitor 2026/27, das Känguru der Mathematik 2027, die sächsischen Ferien und ein eigenes Python-Projekt mit den offenen Besucherzahlen des Zoo Leipzig.',
  courseDescription: 'Live-Onlinekurse auf Englisch für Leipziger Kinder von 6 bis 12 Jahren: Blockprogrammierung, danach Python und kleine Datenprojekte, in einer Gruppe mit fünfzehn bis zwanzig Kindern oder einzeln, immer mit demselben Mentor.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kinder in Leipzig',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#sachsen', label: 'Sachsen' },
    { href: '#zoo', label: 'Zoo' },
    { href: '#kaenguru', label: 'Känguru' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Leipzig &middot; Programmieren für Kinder &middot; 6 bis 12 Jahre',
  h1: 'Programmieren lernen für Kinder in Leipzig',
  lede: 'Sachsen gehört zu den Ländern, in denen alle Schülerinnen und Schüler Informatik haben, allerdings erst ab Klasse 7. Für ein Leipziger Kind liegen also sechs Schuljahre vor der ersten Pflichtstunde. Diese Seite zeigt, was sächsische Schulen in welcher Klasse anbieten, wie unsere Live-Kurse auf Englisch für Kinder zwischen 6 und 12 funktionieren, welcher Mathe-Wettbewerb im April 2027 ansteht und was ein Kind mit den Besucherzahlen des Zoo Leipzig über Daten lernen kann.',
  secondaryCta: { href: '#zoo', label: 'Zum Zoo-Projekt' },
  wa: 'Hallo Modern Age Coders, wir leben in Leipzig und unser Kind möchte programmieren lernen. Ist eine kostenlose Probestunde auf Englisch möglich?',
  heroNote: 'Live online seit 2020 &middot; über 10.000 Lernende weltweit &middot; Unterricht auf Englisch mit festem Mentor',
  spec: [
    ['Alter', '6 bis 12, in Altersgruppen'],
    ['Erste Schritte', 'Bausteine am Bildschirm, später Python'],
    ['Gruppengröße', 'Fünfzehn bis zwanzig oder einzeln'],
    ['Leipziger Zeiten', 'Nachmittags, am Wochenende vormittags, flexibel'],
    ['Mentoren', 'In Indien, live per Video'],
    ['Probestunde', 'Gratis, keine Karte nötig']
  ],
  capsuleQ: 'Das Wichtigste',
  capsule: 'Modern Age Coders bringt Leipziger Kindern von 6 bis 12 Jahren das Programmieren bei, live per Video und auf Englisch. Am Anfang stehen Spiele aus Bausteinen, ab etwa neun Jahren getipptes Python und kleine Datenaufgaben, etwa mit den Besucherzahlen des Leipziger Zoos. Ein fester Mentor stellt sich auf Tempo und Aussprache Ihres Kindes ein. Unterrichtet wird in Gruppen von fünfzehn bis zwanzig Kindern oder einzeln, nachmittags oder am Wochenendvormittag.',

  picks: {
    eyebrow: 'Für den Anfang',
    h2: 'Drei Kurse für Leipziger Kinder',
    lede: 'Ein Denkkurs für die Jüngsten, ein langer Kurs mit Bausteinen bis zur eigenen App und ein Python-Kurs, der zu Datenprojekten wie dem Zoo-Beispiel führt.',
    items: [
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'LEP / 01', title: 'Erst denken, dann klicken', alt: 'Kursbild Reasoning and Readiness', note: 'Für Sechs- bis Neunjährige. Muster, Reihenfolgen und kleine Logikrätsel, die genau die Gewohnheiten aufbauen, die später beim Programmieren helfen.' },
      { course: 'kids-coding-blocks-masterclass', code: 'LEP / 02', title: 'Bausteine, Spiele, Apps', alt: 'Kursbild Coding for Kids', note: 'Für Kinder von 6 bis 12, in Altersgruppen. Knapp ein Schuljahr lang wachsen Blockspiele zu kleinen Apps, am Ende steht ein erster Blick auf KI.' },
      { course: 'python-ai-kids-masterclass', code: 'LEP / 03', title: 'Python für Neun- bis Zwölfjährige', alt: 'Kursbild Python and AI for Kids', note: 'Getippter Code von Anfang an, Zeichnungen mit der Schildkröte, eigene Spiele und Aufgaben mit echten Zahlen wie den Zoo-Besuchern unten.' }
    ]
  },

  sections: [
    {
      id: 'sachsen',
      eyebrow: 'Schule in Sachsen',
      h2: 'Ab welcher Klasse haben Leipziger Kinder Informatik?',
      lede: 'Als eigenes Pflichtfach ab Klasse 7, vorher gibt es ein Mischfach. Alle Angaben stammen von der Sachsen-Seite des Informatik-Monitors, Ausgabe 2026/27.',
      body: [
        { kind: 'two',
          leftH3: 'Grundschule und Klasse 5 und 6',
          left: [
            'Die sächsische Grundschule reicht von Klasse 1 bis 4 und kennt kein Fach Informatik. In Klasse 5 und 6 unterrichten Oberschule und Gymnasium Technik/Computer, ein fächerübergreifendes Fach, dessen Lehrplan einzelne Bausteine aus Medienbildung und informatischer Bildung enthält.',
            'Ein Kind im Grundschulalter sitzt also durchaus einmal vor einem Tablet, lernt aber nicht verbindlich, wie ein Programm entsteht.'
          ],
          rightH3: 'Klasse 7 bis 10: eine Stunde pro Woche',
          right: [
            'Ab Klasse 7 haben alle Kinder an Oberschule und Gymnasium Informatik, eine Wochenstunde bis Klasse 10. Damit erfüllt Sachsen nach dem Monitor die kurzfristige Empfehlung von vier Pflichtstunden, gemeinsam mit Baden-Württemberg, Hamburg und Schleswig-Holstein.',
            'Neue verbindliche Änderungen sind laut Monitor derzeit nicht veröffentlicht. Die Regeln dürften für Ihr Kind also so bleiben, wie sie hier stehen.'
          ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Informatik an Leipziger Schulen nach Klassen, Schuljahr 2026/27', head: ['Klasse', 'Schulart', 'Informatik im Stundenplan'], rows: [
          ['1 bis 4', 'Grundschule', 'Kein Fach'],
          ['5 und 6', 'Oberschule, Gymnasium', 'Technik/Computer, fächerübergreifend'],
          ['7 bis 10', 'Oberschule, Gymnasium', 'Informatik, eine Wochenstunde, Pflicht'],
          ['11 und 12', 'Gymnasium', 'Grundkurs; Leistungskurs nur an ausgewählten Gymnasien']
        ] },
        { kind: 'source', html: 'Quelle: Informatik-Monitor 2026/27 der GI, Länderseite Sachsen und Ländervergleich, gelesen am 2. November 2026. Im schriftlichen Leistungskurs-Abitur Informatik gibt es in Sachsen einen praktischen Teil am zugelassenen Computer, mit Dokumentationen für SQL, Python 3 und Java.' },
        { kind: 'p', mt: true, html: 'Leipzig zählte laut Destatis zum 31. Dezember 2024 genau 611.850 Einwohnerinnen und Einwohner. Ob Ihre Familie in Plagwitz, Grünau oder Reudnitz wohnt oder in Markkleeberg, Taucha oder Delitzsch: Die sächsischen Regeln sind überall dieselben, und unser Unterricht kommt ohnehin per Video ins Haus. Ein Kind, das vor Klasse 7 schon Schleifen und Variablen kennt, erlebt das neue Fach nicht als Hürde, sondern als Wiedersehen mit Bekanntem.' }
      ]
    },
    {
      id: 'englisch',
      eyebrow: 'Auf Englisch',
      h2: 'Versteht ein Grundschulkind Unterricht auf Englisch?',
      lede: 'In aller Regel ja, weil der Mentor sich nach dem Kind richtet. Und weil Ihr Kind dabei nebenbei Englisch hört, lohnt sich jede Stunde doppelt.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Nur Englisch, klar gesagt', p: 'Deutschsprachige Kurse bieten wir nicht an. Diese Klarheit gehört nach oben auf die Seite, damit Sie wissen, worauf Sie sich einlassen.' },
          { h3: 'Sprache wächst mit', p: 'Am Anfang braucht Ihr Kind nur wenige Wörter: start, stop, left, right, again. Nach einigen Wochen versteht es ganze Anweisungen, ohne dass es je Vokabeln gelernt hätte.' },
          { h3: 'Der Mentor wartet', p: 'Er spricht langsam, zeigt jeden Schritt am Bildschirm und lässt Pausen. Ein deutsches Wort zwischendurch ist kein Problem; der Mentor greift es auf und bietet das englische an.' }
        ] },
        { kind: 'p', mt: true, html: 'Unsere Mentoren arbeiten in Indien und sind live per Video zugeschaltet, mit geteiltem Bildschirm. Weil die Uhren dort mehrere Stunden weiter sind, fällt ein Leipziger Nachmittag in ihren Abend. Ihr Kind hat über Monate dieselbe Ansprechperson, und die merkt schnell, ob es lieber erst zuschaut oder gleich selbst loslegt.' }
      ]
    },
    {
      id: 'zoo',
      tint: 'tint',
      eyebrow: 'Ein Leipziger Datenprojekt',
      h2: 'In welchem Jahr hatte der Zoo Leipzig die meisten Besucher, und wo lag der größte Sprung?',
      lede: 'Das Amt für Statistik und Wahlen der Stadt veröffentlicht die Besucherzahlen des Zoos seit 2001 als offene Daten. Ältere Kinder lernen daran, dass die spannendste Frage oft nicht "wann am meisten?" lautet, sondern "wann hat es sich am stärksten verändert?".',
      body: [
        { kind: 'two',
          leftH3: 'Die Daten',
          left: [
            'Die Datei Zoo Leipzig (Jahreszahlen) enthält für 2001 bis 2025 eine Zeile Besucher. Die Zahlen stehen dort in einer ungewohnten Schreibweise, zum Beispiel 1.17318e+006. Das bedeutet 1,17318 mal eine Million, also 1.173.180 Besucher. Python liest diese Schreibweise direkt.',
            'Uns fällt dabei auf: Jede Zahl hat genau sechs Ziffern vor den Nullen. Die Datei rundet also; auf den einzelnen Gast genau ist keine Angabe.'
          ],
          rightH3: 'Die Frage',
          right: [
            'Zuerst suchen wir das Rekordjahr und das schwächste Jahr. Viele Kinder tippen beim schwächsten Jahr auf eines der jüngsten. Danach rechnet das Programm für jedes Jahr aus, wie viele Besucher mehr oder weniger kamen als im Jahr davor.',
            'Die Kinder bekommen dafür eine kleine Datei, zoo_besucher.csv, mit den Spalten jahr und besucher.'
          ] },
        { kind: 'code', label: 'Teil 1: Rekord und Tiefstwert', lang: 'Python', code: V1, note: 'Ausgabe: <code>Meiste Besucher: 2012 2123350</code> und <code>Wenigste Besucher: 2002 1164390</code>.' },
        { kind: 'p', mt: true, html: 'Das Rekordjahr ist 2012 mit 2.123.350 Besuchern, das schwächste 2002 mit 1.164.390. Wer nur diese zwei Zahlen kennt, glaubt an eine ruhige Geschichte: erst wenig, dann viel. Was dazwischen passiert, zeigt erst der zweite Teil.' },
        { kind: 'code', label: 'Teil 2: die Sprünge zwischen zwei Jahren', lang: 'Python', code: V2, note: 'Ausgabe: <code>Größter Anstieg: 2021 auf 2022 616530</code> und <code>Größter Rückgang: 2019 auf 2020 -447760</code>.' },
        { kind: 'p', html: 'Der größte Zuwachs liegt nicht vor dem Rekordjahr, sondern zehn Jahre danach: Von 2021 auf 2022 kamen 616.530 Menschen mehr. Der größte Einbruch folgt von 2019 auf 2020 mit 447.760 weniger. Zwischen 2001 und 2025 gibt es 14 Anstiege und 10 Rückgänge. Warum es so kam, steht nicht in der Datei, und genau das üben wir: Wir beschreiben, was die Zahlen zeigen, und erfinden keine Gründe dazu.' },
        { kind: 'table', mt: true, numCols: [1, 2], caption: 'Zoo Leipzig: fünf Jahre und ihre Veränderung zum Vorjahr (eigene Rechnung)', head: ['Jahr', 'Besucher laut Datei', 'Veränderung zum Vorjahr'], rows: [
          ['2002', '1.164.390', '-8.790'],
          ['2011', '2.098.080', '+537.290'],
          ['2012', '2.123.350', '+25.270'],
          ['2020', '1.354.870', '-447.760'],
          ['2022', '1.872.440', '+616.530']
        ] },
        { kind: 'source', html: 'Daten: Stadt Leipzig, Zoo Leipzig (Jahreszahlen), über das Open-Data-Portal des Freistaats Sachsen, Lizenz Datenlizenz Deutschland Namensnennung 2.0, abgerufen am 3. November 2026. Veränderungen, Anzahl der Anstiege und Rückgänge sind unsere eigene Rechnung; die Werte der Datei sind auf sechs Stellen gerundet.' },
        { kind: 'ol', mt: true, items: [
          '<strong>6 bis 8 Jahre, mit Bauklötzen.</strong> Bauen Sie jeden Tag einer Woche einen Turm, so hoch wie die Zahl der Bücher, die Ihr Kind angeschaut hat. An welchem Tag kam der höchste Turm dazu, und von welchem Tag auf den nächsten wuchs er am meisten?',
          '<strong>8 bis 10 Jahre, in Scratch.</strong> Eine Liste mit fünf Zahlen anlegen und eine Figur für jedes Paar von Nachbarn sagen lassen, ob es mehr oder weniger geworden ist.',
          '<strong>10 bis 12 Jahre, in Python.</strong> Teil 1 abtippen und ausführen. Dann Teil 2 selbst schreiben und mit unserer Ausgabe vergleichen.',
          '<strong>Weiterdenken.</strong> Die Datei hat auch eine Zeile für die Zahl der Tierarten. Dort steht in manchen Jahren nur ein Punkt. Was sollte ein Programm mit einem Punkt machen, und darf man über so eine Lücke hinweg einen Sprung berechnen?'
        ] }
      ]
    },
    {
      id: 'kaenguru',
      eyebrow: 'Ein Wettbewerb zum Mitmachen',
      h2: 'Gibt es 2027 einen Wettbewerb für Grundschulkinder in Leipzig?',
      lede: 'Zum Beispiel das Känguru der Mathematik. Es findet 2027 ausnahmsweise im April statt.',
      body: [
        { kind: 'two',
          leftH3: 'So funktioniert es',
          left: [
            'Beim Känguru der Mathematik arbeitet jedes Kind für sich, 75 Minuten lang. In den Klassenstufen 3 und 4 sowie 5 und 6 sind je 24 Aufgaben zu lösen, ab Klasse 7 sind es 30.',
            'Im März 2026 waren laut Veranstalter über 920.000 Schülerinnen und Schüler aus mehr als 13.000 Schulen dabei. Es ist ein Mathe-Wettbewerb, aber er verlangt dasselbe genaue Hinsehen wie das Programmieren.'
          ],
          rightH3: 'Termine 2027',
          right: [
            'Sonst liegt der Wettbewerbstag am dritten Donnerstag im März. 2027 fällt er auf den 8. April 2027, weil der Märztermin in fast allen Ländern kurz vor den Osterferien läge.',
            'Die Online-Anmeldung ist vom 1. Dezember 2026 bis zum 31. Januar 2027 geöffnet. Fragen Sie am besten frühzeitig an der Schule Ihres Kindes nach.'
          ] },
        { kind: 'p', mt: true, html: 'Aufgaben aus dem Wettbewerb benutzen wir im Unterricht nicht. Unsere Mentoren stellen eigene Knobeleien zusammen, an denen Kinder üben, Antworten zu prüfen statt zu raten. Mit dem Verein, der das Känguru ausrichtet, haben wir keine Verbindung.' }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Zeiten',
      h2: 'Zu welchen Uhrzeiten kann mein Kind in Leipzig lernen?',
      lede: 'Gruppen gibt es nachmittags unter der Woche und vormittags am Wochenende, Einzelstunden nach Absprache. So sehen Beispielzeiten auf der Uhr des Mentors aus.',
      body: [
        { kind: 'table', numCols: [], caption: 'Beispielzeiten in Leipzig und in Indien', head: ['Leipzig', 'Indien bis 27. März 2027', 'Indien ab 28. März 2027'], rows: [
          ['15:10', '19:40', '18:40'],
          ['16:10', '20:40', '19:40'],
          ['Sonntag 11:30', '16:00', '15:00']
        ] },
        { kind: 'source', html: 'Beispiele, keine festen Gruppenzeiten. In Deutschland gilt nach dem Einheitenzeitgesetz im Winter MEZ (UTC+1), im Sommer MESZ (UTC+2); umgestellt wurde zuletzt am 25. Oktober 2026, das nächste Mal am 28. März 2027. Indien stellt nie um (UTC+5:30) und liegt im Winter viereinhalb, im Sommer dreieinhalb Stunden vor Leipzig.' },
        { kind: 'p', mt: true, html: 'Die sächsischen Ferien 2026/27 laut KMK: Weihnachten vom 23. Dezember 2026 bis 2. Januar 2027, Winterferien vom 8. bis 19. Februar 2027, Ostern vom 26. März bis 2. April 2027, Pfingsten vom 15. bis 18. Mai 2027 und Sommer vom 10. Juli bis 20. August 2027. Der Unterricht pausiert in den Ferien nicht; wer wegfährt, lässt einfach Stunden aus.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Lernstufen',
    h2: 'Fünf Stufen vom ersten Baustein bis zur echten Datei',
    lede: 'Unsere eigene Einteilung, nach der wir Kinder in Gruppen einordnen und Ihnen Fortschritte beschreiben.',
    table: { caption: 'Lernstufen für 6 bis 12 Jahre (eigene Einteilung)', head: ['Stufe', 'Alter etwa', 'Was Ihr Kind schafft'], rows: [
      ['1. Abfolge', '6 bis 7', 'Bausteine so anordnen, dass eine Figur losläuft und spricht'],
      ['2. Schleife', '7 bis 8', 'Lange Ketten durch einen einzigen Wiederhole-Block ersetzen'],
      ['3. Entscheidung', '8 bis 9', 'Ein Spiel bauen, das auf Tasten reagiert und mitzählt'],
      ['4. Python', '9 bis 11', 'Variablen, Listen und Schleifen selbst eintippen'],
      ['5. Vergleichen', '10 bis 12', 'Zahlen aus einer Datei Jahr für Jahr vergleichen']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Stufe 5 ist das Zoo-Projekt. Wer nach Sprüngen fragt statt nur nach Rekorden, liest Statistiken künftig anders.',
      'Wir berichten, was Ihr Kind gebaut und verstanden hat, nicht wie viele Minuten es vor dem Bildschirm saß.'
    ] },
    right: { h3: 'Für Kinder', ps: [
      'Der höchste Wert ist nur ein Teil der Geschichte. Spannend ist auch, wo es am steilsten bergauf ging.',
      'Steht in der Tabelle ein Punkt statt einer Zahl, wird darüber nicht einfach hinweggerechnet.'
    ] }
  },

  catalogue: {
    eyebrow: 'Noch mehr Kurse',
    h2: 'Neun weitere Kurse für Leipziger Kinder',
    lede: 'Jeder Kurs live, auf Englisch, mit festem Mentor, als Gruppe oder einzeln.',
    bands: [
      { num: 'I', h3: 'Rechnen und Rätseln', sub: '5 bis 12 Jahre', courses: [
        { code: 'LEP / RECHNEN / 01', slug: 'mental-maths-mastery-kids', title: 'Kopfrechnen mit Verstand', blurb: 'Zahlengefühl statt Tricks, 5 bis 10.' },
        { code: 'LEP / RECHNEN / 02', slug: 'abacus-mental-maths-course-for-kids', title: 'Rechnen mit dem Abakus', blurb: 'Erst Perlen schieben, dann im Kopf rechnen.' },
        { code: 'LEP / RECHNEN / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Knobeln in Schritten', blurb: 'Aufgaben zerlegen, 7 bis 12.' }
      ] },
      { num: 'II', h3: 'Spiele und Welten', sub: '7 bis 14 Jahre', courses: [
        { code: 'LEP / SPIEL / 01', slug: 'scratch-programming-complete-course', title: 'Scratch kompakt', blurb: 'In drei bis vier Monaten zum eigenen Spiel.' },
        { code: 'LEP / SPIEL / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox selbst skripten', blurb: 'Eigene Welten mit Luau, 8 bis 14.' },
        { code: 'LEP / SPIEL / 03', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft und Code', blurb: 'Befehle für die eigene Welt, 7 bis 12.' }
      ] },
      { num: 'III', h3: 'Mehr als Spiele', sub: '8 bis 15 Jahre', courses: [
        { code: 'LEP / MEHR / 01', slug: 'maths-through-coding', title: 'Mathe in Python', blurb: 'Schulstoff mit kurzen Programmen erforschen.' },
        { code: 'LEP / MEHR / 02', slug: 'kids-ai-web-development-course', title: 'Eine eigene Webseite', blurb: 'HTML und mehr für 9 bis 12.' },
        { code: 'LEP / MEHR / 03', slug: 'ai-literacy-for-kids-course', title: 'Wie KI lernt', blurb: 'Beispiele, Muster, Grenzen, ohne Erwachsenenkonto.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Ablauf',
    h2: 'Wie der Unterricht für eine Leipziger Familie abläuft',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Nachmittags', l: 'Nach Hort oder Hausaufgaben, ab dem mittleren Nachmittag.' },
      { time: 'Wochenende', l: 'Vormittage, an denen jüngere Kinder ausgeruht sind.' },
      { time: 'Einzeln', l: 'Feste Termine, die in Ihre Woche passen.' }
    ],
    cells: [
      { h3: 'Immer derselbe Mentor', p: 'Keine wechselnden Gesichter, sondern eine Bezugsperson.' },
      { h3: 'Langsames Englisch', p: 'Kurze Sätze, viel Zeigen, Geduld beim Nachfragen.' },
      { h3: 'Ihr Kind steuert', p: 'Maus und Tastatur liegen bei Ihrem Kind, nicht beim Mentor.' },
      { h3: 'Passende Gruppe', p: 'Eingeteilt nach Alter und Vorwissen.' },
      { h3: 'Kurzer Bericht', p: 'Ein paar Zeilen für Sie nach den Stunden.' },
      { h3: 'Gruppe oder privat', p: 'Fünfzehn bis zwanzig Kinder oder Einzelunterricht.' }
    ]
  },

  projectsH2: 'Was unsere Jugendlichen später bauen',
  projectsLede: 'Viele, die als Grundschulkind anfangen, programmieren als Jugendliche erstaunlich ernsthafte Dinge. Eine Auswahl steht unten, mehr finden Sie unter <a class="ag-inline-link" href="/student-labs">Student Labs</a>.',
  reviewsLede: 'Google-Bewertungen von Eltern und Lernenden, wörtlich wiedergegeben.',

  fees: {
    h2: 'Gebühren für Familien in Leipzig',
    lede: 'Abgerechnet wird pro Monat, acht Live-Stunden sind enthalten. Wir zeigen die Preise in Euro, umgerechnet mit dem Referenzkurs der Europäischen Zentralbank. Bezahlt wird jedoch in US-Dollar; die Umrechnung macht Ihre Bank, weshalb der Betrag auf dem Kontoauszug geringfügig abweichen kann.',
    free: ['Kostenlose Probestunde', 'Ein Rätsel und ein erstes Mini-Programm', 'Ohne Kreditkarte'],
    group: ['Fünfzehn bis zwanzig Gleichaltrige', 'Immer derselbe Mentor', 'Zweimal pro Woche', 'Monat für Monat, jederzeit beendbar'],
    one: ['Ein Kind, ein Mentor', 'Eigene Projekte und eigenes Tempo', 'Termine nach Ihrem Wochenplan']
  },

  faq: {
    eyebrow: 'Leipziger Eltern fragen',
    h2: 'Programmieren lernen für Kinder in Leipzig: Antworten',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein, unsere Stunden laufen live und nur auf Englisch. Das ist für Ihr Kind ein Gewinn: Es übt Programmieren und Englisch zugleich. Der Mentor passt Tempo und Aussprache an, zeigt viel am Bildschirm und wiederholt geduldig. Die Befehle beim Programmieren sind sowieso englische Wörter.' },
      { q: 'Lernt mein Kind an der Leipziger Grundschule programmieren?', a: 'Nicht als Fach. Die Grundschule in Sachsen umfasst die Klassen 1 bis 4 ohne Informatik. In Klasse 5 und 6 folgt das Mischfach Technik/Computer, Informatik selbst beginnt in Klasse 7.' },
      { q: 'Ist Informatik in Sachsen ein Pflichtfach?', a: 'Ja, an Oberschule und Gymnasium in Klasse 7 bis 10 mit einer Wochenstunde, so der Informatik-Monitor 2026/27. In der Oberstufe gibt es einen Grundkurs; einen Leistungskurs bieten nur ausgewählte Gymnasien an.' },
      { q: 'Ab wann kann mein Kind bei Ihnen anfangen?', a: 'Ab sechs Jahren. Die Jüngsten arbeiten mit Bildbausteinen, Lesen und Tippen müssen sie dafür noch nicht können. Um das neunte Lebensjahr herum wechseln viele zu getipptem Python.' },
      { q: 'Wann sind die Stunden nach Leipziger Zeit?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.' },
      { q: 'Wann ist das Känguru der Mathematik 2027?', a: 'Am 8. April 2027, also später als üblich, weil der gewohnte Märztermin kurz vor den Osterferien läge. Die Anmeldung läuft online vom 1. Dezember 2026 bis 31. Januar 2027. Für Klasse 3 und 4 gibt es 24 Aufgaben in 75 Minuten.' },
      { q: 'Wo sitzen die Lehrkräfte?', a: 'Unsere Mentoren unterrichten aus Indien, live per Video. Eine Stunde um 16:10 Uhr in Leipzig beginnt dort im Winter um 20:40 Uhr. Ihr Kind behält seinen Mentor über den ganzen Kurs.' },
      { q: 'Lernt mein Kind allein oder in einer Gruppe?', a: 'Beides ist möglich. In den Gruppen lernen fünfzehn bis zwanzig Kinder ähnlichen Alters miteinander; im Einzelunterricht hat Ihr Kind zwei Stunden pro Woche seinen Mentor für sich.' },
      { q: 'In welcher Währung bezahle ich?', a: 'Die Seite nennt Euro-Beträge auf Basis des EZB-Referenzkurses. Abgebucht wird monatlich in US-Dollar, Ihre Bank rechnet um, daher sind kleine Abweichungen möglich. Die Probestunde ist kostenlos, eine Karte brauchen Sie dafür nicht.' },
      { q: 'Was programmiert mein Kind konkret?', a: 'Zuerst Spiele und kleine Trickfilme aus Bausteinen. Später Python, Zeichnungen per Code und ab etwa zehn Jahren erste Fragen an echte Daten, wie an die Besucherzahlen des Zoo Leipzig auf dieser Seite.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weiterlesen',
    h2: 'Passende Seiten',
    lede: 'Mehr für Familien in Leipzig und Sachsen.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Unsere Übersicht für ganz Deutschland.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Wenn in Klasse 7 das Schulfach beginnt.' },
      { href: '/kangaroo-math-germany-practice', label: 'Känguru-Training', p: 'Mehr zum Wettbewerb, auf Englisch.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik in allen Ländern', p: 'Sachsen im bundesweiten Vergleich, auf Englisch.' },
      { href: '/ai-projects-for-kids', label: 'KI-Projekte für Kinder', p: 'Projektideen nach Alter, auf Englisch.' },
      { href: '/how-we-teach', label: 'Unser Unterricht', p: 'Eine Stunde von Anfang bis Ende, auf Englisch.' }
    ]
  },

  start: {
    h2: 'Probestunde vereinbaren',
    lede: 'Die Probestunde beginnt mit einer Denkaufgabe, danach entsteht ein kleines Programm. Der Mentor sieht dabei, wie Ihr Kind an Probleme herangeht und wie sicher es mit Englisch ist, und empfiehlt einen passenden Einstieg.',
    readFirst: 'Vorab lesen können Sie <a class="ag-inline-link" href="/how-we-teach">How we teach</a> über den Ablauf und die <a class="ag-inline-link" href="/courses">Kursliste</a> mit allen Lehrplänen.',
    note: 'Live-Unterricht online, ausschließlich auf Englisch, mit Mentoren in Indien. Fragen beantworten wir gern per WhatsApp, bitte auf Englisch.',
    formNote: 'Gratis und ohne Verpflichtung.'
  },

  footer: {
    cols: [
      { h4: 'Für Kinder', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch für Kinder' },
        { href: '/python-for-10-year-olds', label: 'Python mit zehn' },
        { href: '/kangaroo-math-germany-practice', label: 'Känguru-Training' },
        { href: '/ai-tools-age-guide', label: 'KI und Altersgrenzen' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online' },
        { href: '/student-labs', label: 'Projekte unserer Lernenden' },
        { href: '/how-we-teach', label: 'Unser Unterricht' }
      ] }
    ],
    bottomRight: 'Nicht nur der Rekord: auch der Sprung'
  },

  personalityCss: `
.ag-root.ag-lep .ag-hero h1 { letter-spacing: -0.009em; }
.ag-root.ag-lep .ag-capsule { border-left-width: 6px; border-radius: 2px; }
.ag-root.ag-lep .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-lep .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-lep .ag-code-head b { letter-spacing: 0.008em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Sachsen und Ländervergleich); Känguru der Mathematik e.V.; KMK Ferien 2026/27; Destatis GV-ISys 31.12.2024; Einheitenzeitgesetz; gelesen am 2. und 3. November 2026. Stadt Leipzig, Zoo Leipzig (Jahreszahlen), Datenlizenz Deutschland Namensnennung 2.0.',
    localProject: 'Besucherzahlen des Zoo Leipzig 2001 bis 2025: ein eigenes Python-Projekt, das zuerst Rekord (2012, 2.123.350) und Tiefstwert (2002, 1.164.390) findet und dann die Veränderungen zum Vorjahr berechnet (größter Anstieg 2021 auf 2022 mit 616.530, größter Rückgang 2019 auf 2020 mit 447.760; 14 Anstiege, 10 Rückgänge), dazu die wissenschaftliche Schreibweise 1.17318e+006 und Fassungen mit Bauklötzen und in Scratch. Lesson family: look at the steps between neighbours, not only at the record.',
    requiredMentions: ['zoo_besucher.csv', 'Meiste Besucher: 2012 2123350', 'Wenigste Besucher: 2002 1164390', 'Größter Anstieg: 2021 auf 2022 616530', 'Größter Rückgang: 2019 auf 2020 -447760', '1.17318e+006', '14 Anstiege und 10 Rückgänge', 'Nicht nur der Rekord: auch der Sprung'],
    sources: [
      { claim: 'Sachsen: Informatik Klasse 7 bis 10, Technik/Computer Klasse 5 und 6, Grundschule Klasse 1 bis 4, Leistungskurs an ausgewählten Gymnasien, praktischer Prüfungsteil.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/sachsen' },
      { claim: 'Vier Länder mit vier Pflichtstunden, darunter Sachsen.', url: 'https://informatik-monitor.de/' },
      { claim: 'Känguru 2027 am 8. April, Anmeldung, Teilnahme 2026, Aufgabenzahl.', url: 'https://www.mathe-kaenguru.de/' },
      { claim: 'Ferien Sachsen 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Besucherzahlen Zoo Leipzig 2001 bis 2025, Lizenz DL-DE BY 2.0.', url: 'https://ckan.govdata.de/dataset/zoo-leipzig-jahreszahlen' },
      { claim: 'Einwohnerzahl Leipzig 611.850 (31.12.2024).', url: 'https://www.destatis.de/DE/Themen/Laender-Regionen/Regionales/Gemeindeverzeichnis/Administrativ/05-staedte.xlsx?__blob=publicationFile' }
    ],
    rejectedClaims: [
      'Gründe für einzelne Anstiege oder Rückgänge der Zoobesucher: nicht in der Datei, daher keine.',
      'Leipziger Schulen als Herkunft unserer Lernenden zu nennen: abgelehnt.',
      'Unterricht auf Deutsch: wir unterrichten nur auf Englisch und sagen das deutlich.',
      'Verbindung mit dem Zoo Leipzig, der Stadt, dem Land Sachsen oder dem Känguru-Verein: keine.'
    ]
  }
};
