'use strict';
// Programmieren lernen für Kinder in Berlin (ag- German city door, Germany cluster P5 row DE107).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; pages show
// euro, checkout charges USD. Formal "Sie" throughout.
// Angle: Berlin parents of children aged 6 to 12 who search for a Programmierkurs, often expecting a course nearby.
// Spine (German, its own): honest framing first (online, auf Englisch, with mentors in India, and why that can be the
// better choice), what Berlin schools give a child from Klasse 1 to 8 (Basiscurriculum Medienbildung without
// informatics content, ITG in 7 or 8, elective from 9), a free first contest (Informatik-Biber 2026), a Strichliste
// project on Steglitz-Zehlendorf playground data, then times.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/programmieren-lernen-kinder-berlin/):
//  - KMK Primarbereich (FACTS 1): "die von der ersten bis zur vierten, in Berlin und Brandenburg bis zur sechsten
//    Jahrgangsstufe reicht".
//  - GI Informatik-Monitor 2026/27, Berlin page (infmon-berlin/7092f8bb.txt): ITG "im Umfang von einer Wochenstunde",
//    "in der Jahrgangsstufe 7 oder 8"; "Das Wahlpflichtfach Informatik wird an allen Schularten in der Regel zweistündig
//    in den Jahrgangsstufen 9 und 10"; "ein schulform- und fächerübergreifendes Basiscurriculum Medienbildung für die
//    Jahrgangsstufen 1 bis 10, das keine expliziten Inhalte mit informatischem Bezug aufweist"; "sogenannte
//    „grundständige“ Gymnasien, welche bereits ab Jahrgangsstufe 5 beginnen"; "Die Primarstufe umfasst die Grundschule
//    und die Gemeinschaftsschule mit den Jahrgangsstufen 1 bis 6." National page (FACTS 92, 96): six Länder "ohne einen
//    für alle verbindlichen Informatikunterricht"; "In Berlin, Brandenburg und Hessen sind keine verbindlichen Vorhaben
//    für die Einführung des Pflichtfachs Informatik bekannt."
//  - bwinf.de (FACTS 129 to 137): Biber "kostenfrei"; "Jahrgangsstufen 3 bis 13, keine Vorkenntnisse erforderlich";
//    "Grundschülerinnen und Grundschüler lösen neun Aufgaben in 30 Minuten"; "Die Biberwochen 2026 finden vom 9. bis 20.
//    November statt."; "Der Biber wird 2026 zum 20. Mal durchgeführt."; "Schnupper-Biber ab 14. September 2026";
//    "Dezember 2026: Veröffentlichung der Ergebnisse Januar 2027: Versand der Urkunden und Preise"; "Über 580.000
//    Teilnehmende in 2025". Jugendwettbewerb (FACTS 141, 142): "Prinzipiell ist aber eine Teilnahme schon ab
//    Jahrgangsstufe 3 möglich."; "Bronze (empfohlen für Jg. 5/6): 3 Aufgaben / 30 Minuten".
//  - KMK FER2026_27 (FACTS 278): "Berlin 19.10. - 31.10. 23.12. - 02.01. 01.02. - 06.02. 22.03. - 02.04. 07.05.
//    18.05. - 19.05. 01.07. - 14.08."
//  - Destatis GV-ISys 31.12.2024 (places.tsv): Berlin 3.685.265 Einwohner.
//  - Time: Einheitenzeitgesetz; Sommerzeit endete am 25. Oktober 2026, beginnt am 28. März 2027.
//  - Data: Bezirksamt Steglitz-Zehlendorf, Fachbereich Grünflächen, "Öffentliche Spielplätze in Steglitz-Zehlendorf",
//    via Berlin Open Data / GovData (https://ckan.govdata.de/dataset/offentliche-spielplatze-in-steglitz-zehlendorf,
//    record saved), licence CC0 (dcat-ap.de cc-zero). File all.json from the Bezirksamt's simple-search, 39,329 bytes,
//    sha256 d7ec039d...0787340, 138 records, field flaeche in square metres, downloaded 3 November 2026.
// Our own code (scratchpad de/w/C1/py/plk_v1.py, plk_v2.py, python3 -I, run in the data folder):
//  plk_v1 prints "Steglitz 33", "Lichterfelde 32", "Zehlendorf 27", "Lankwitz 19", "Dahlem 13", "Schlachtensee 6",
//  "Nikolassee 4", "Wannsee 4", "Zusammen: 138".
//  plk_v2 prints "Zehlendorf 69014 Quadratmeter", "Steglitz 56386 Quadratmeter", "Lichterfelde 43718 Quadratmeter".
//  Exploration: total area 236,718 m²; largest single playground 21,720 m² (Werner-Sylten-Weg, Zehlendorf); average
//  per playground Zehlendorf 2,556 m², Steglitz 1,709 m²; 39 records with ballspielen "Ja"; 92 table-tennis tables at
//  65 playgrounds.
// Lesson family: a Strichliste (tally by group), then a sum by group; "most" and "largest" are different questions.

const { DE } = require('../../scripts/nl/lib/market-de');

const V1 = [
  'import json',
  '',
  'spielplaetze = json.load(open("spielplaetze_sz.json", encoding="utf-8"))["index"]',
  'strichliste = {}',
  'for platz in spielplaetze:',
  '    teil = platz["ortsteil"]',
  '    strichliste[teil] = strichliste.get(teil, 0) + 1',
  '',
  'for teil, anzahl in sorted(strichliste.items(), key=lambda paar: -paar[1]):',
  '    print(teil, anzahl)',
  'print("Zusammen:", sum(strichliste.values()))'
].join('\n');

const V2 = [
  'import json',
  '',
  'spielplaetze = json.load(open("spielplaetze_sz.json", encoding="utf-8"))["index"]',
  'flaeche = {}',
  'for platz in spielplaetze:',
  '    teil = platz["ortsteil"]',
  '    flaeche[teil] = flaeche.get(teil, 0) + platz["flaeche"]',
  '',
  'for teil, qm in sorted(flaeche.items(), key=lambda paar: -paar[1])[:3]:',
  '    print(teil, qm, "Quadratmeter")'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'stadt', label: 'Berlin: Programmieren für Kinder' },
  slug: 'programmieren-lernen-kinder-berlin',
  code: 'plk',
  accent: '#566323',
  accentRationale: 'Programmieren lernen für Kinder in Berlin: ein Moosgrün #566323 wie die Rasenflächen der Spielplätze im Projekt, deutlich vom Ziegelrot der englischen Berliner Kinderseite getrennt; contrast 5.32 at its lowest on the paper tints and above 4.5 on all three',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Programmieren lernen für Kinder in Berlin (auf Englisch)',
  title: 'Programmieren lernen für Kinder in Berlin: live auf Englisch',
  description: 'Programmieren lernen für Kinder in Berlin von 6 bis 12: live online auf Englisch, was die Berliner Schule bietet, der Informatik-Biber und ein Spielplatz-Projekt.',
  ogDescription: 'Programmierkurs für Berliner Kinder von 6 bis 12, live online auf Englisch mit festem Mentor: warum die Schule in Berlin spät mit Informatik beginnt, der kostenlose Informatik-Biber im November 2026 und ein Projekt mit echten Spielplatzdaten aus Steglitz-Zehlendorf.',
  twitterDescription: 'Programmieren für Berliner Kinder, live auf Englisch: Schule, Informatik-Biber und ein Spielplatz-Projekt.',
  pageName: 'Programmieren lernen für Kinder in Berlin',
  webPageDescription: 'Ein Leitfaden für Berliner Eltern von Kindern zwischen 6 und 12 Jahren zum Programmierenlernen: was Berliner Schulen nach dem Informatik-Monitor 2026/27 anbieten, der Informatik-Biber 2026 und ein eigenes Datenprojekt mit den offenen Spielplatzdaten des Bezirks Steglitz-Zehlendorf.',
  courseDescription: 'Live-Online-Programmierkurse auf Englisch für Kinder von 6 bis 12 Jahren in Berlin: zuerst Scratch, dann Python und kleine KI-Projekte, in der Gruppe mit fünfzehn bis zwanzig Kindern oder im Einzelunterricht, mit einem festen Mentor.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Kinder in Berlin',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#schule', label: 'Schule' },
    { href: '#englisch', label: 'Englisch' },
    { href: '#projekt', label: 'Projekt' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Berlin &middot; Programmieren für Kinder &middot; 6 bis 12 Jahre',
  h1: 'Programmieren lernen für Kinder in Berlin, live auf Englisch',
  lede: 'Viele Berliner Eltern suchen einen Programmierkurs im eigenen Kiez. Wir sagen gleich, was wir anders machen: Unser Unterricht ist live online, auf Englisch, mit Mentoren aus Indien. Diese Seite erklärt ehrlich, für welche Kinder das gut passt, was die Berliner Schule in den sechs Grundschuljahren an Informatik anbietet, welcher kostenlose Wettbewerb im November 2026 ansteht und wie ein Kind mit echten Spielplatzdaten aus Steglitz-Zehlendorf lernt, dass die meisten und die größten nicht dasselbe sind.',
  secondaryCta: { href: '#projekt', label: 'Zum Spielplatz-Projekt' },
  wa: 'Hallo Modern Age Coders, unser Kind lebt in Berlin und möchte programmieren lernen. Können wir eine kostenlose Probestunde auf Englisch buchen?',
  heroNote: 'Live-Online-Unterricht seit 2020 &middot; mehr als 10.000 Lernende weltweit &middot; Unterricht auf Englisch, im Tempo Ihres Kindes',
  spec: [
    ['Alter', '6 bis 12 Jahre, nach Alter gruppiert'],
    ['Start', 'Scratch, danach Python'],
    ['Gruppe', 'Fünfzehn bis zwanzig, oder Einzelunterricht'],
    ['Sprache', 'Englisch, mit Mentoren aus Indien'],
    ['Ort', 'Online, von zu Hause in Berlin'],
    ['Probestunde', 'Kostenlos, ohne Karte']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Programmieren lernen für Kinder in Berlin bei Modern Age Coders heißt: Live-Online-Unterricht auf Englisch für Kinder von 6 bis 12 Jahren, mit einem festen Mentor aus Indien, der sich an Tempo und Aussprache Ihres Kindes anpasst. Erst Scratch-Spiele, ab etwa 9 Jahren Python und kleine KI-Projekte. Ihr Kind lernt in einer Gruppe mit fünfzehn bis zwanzig Kindern oder im Einzelunterricht, nachmittags oder am Wochenende, und übt nebenbei Englisch.',

  picks: {
    eyebrow: 'Der Einstieg',
    h2: 'Drei Kurse für Berliner Kinder zwischen 6 und 12',
    lede: 'Ein langer Kurs für den ganzen Weg, ein kurzer Scratch-Kurs zum Ausprobieren und ein Kurs für Kinder, die lieber gleich echten Code tippen.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PLK / 01', title: 'Python und KI für Kinder', alt: 'Kursbild Python und KI für Kinder', note: 'Ab 9 Jahren, 8 bis 10 Monate. Getippter Python-Code von der ersten Stunde an, Zeichnen mit Turtle, kleine Spiele und am Ende einfache KI-Projekte.' },
      { course: 'kids-coding-blocks-masterclass', code: 'PLK / 02', title: 'Coding für Kinder', alt: 'Kursbild Coding für Kinder', note: '6 bis 12 Jahre, 10 bis 12 Monate, Gruppen nach Alter. Von Scratch-Spielen über eigene Apps bis zu einem ersten Blick auf KI.' },
      { course: 'scratch-programming-complete-course', code: 'PLK / 03', title: 'Scratch für Kinder', alt: 'Kursbild Scratch für Kinder', note: '6 bis 12 Jahre, 3 bis 4 Monate. Ein guter Test, ob Programmieren Ihrem Kind Freude macht, mit fertigen eigenen Spielen am Ende.' }
    ]
  },

  sections: [
    {
      id: 'ehrlich',
      eyebrow: 'Online statt um die Ecke',
      h2: 'Vor Ort oder online: Für welche Berliner Kinder passt unser Kurs?',
      lede: 'Wer einen Kurs in einem Raum in Berlin sucht, findet ihn bei uns nicht. Das sagen wir lieber am Anfang als nach der Probestunde.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Kein Weg durch die Stadt', p: 'Berlin hat laut Statistischem Bundesamt 3.685.265 Einwohner (Stand 31. Dezember 2024). Ein Kurs am anderen Ende des Bezirks kostet schnell eine Stunde Fahrt. Online beginnt die Stunde am Küchentisch, und ein jüngeres Geschwisterkind muss nicht mit.' },
          { h3: 'Ein fester Mentor', p: 'Woche für Woche unterrichtet dieselbe Person. Nach wenigen Stunden weiß diese Person, ob Ihr Kind gern knobelt, kurz nachdenken muss oder am besten lernt, wenn es ein fremdes Programm verändert.' },
          { h3: 'Englisch nebenbei', p: 'Der Unterricht ist ausschließlich auf Englisch. Für viele Kinder ist das ein Gewinn: Programmieren und Englisch zugleich, in kleinen, klaren Sätzen und mit viel Zeigen am Bildschirm.' }
        ] },
        { kind: 'p', mt: true, html: 'Für wen passt das nicht? Für ein Kind, das noch kein Wort Englisch versteht und sich dabei unwohl fühlt, ist ein deutschsprachiger Kurs vor Ort wahrscheinlich der bessere Anfang. Für Kinder an zweisprachigen oder internationalen Schulen, für Familien, die Englisch sprechen, und für neugierige Kinder, die schon ein wenig Englisch aus der Schule kennen, funktioniert unser Unterricht gut. Die kostenlose Probestunde zeigt es nach dreißig Minuten.' }
      ]
    },
    {
      id: 'schule',
      eyebrow: 'Berliner Schule',
      h2: 'Ab welcher Klasse lernen Kinder in Berliner Schulen Informatik?',
      lede: 'Später als in vielen anderen Ländern. Die Fakten stammen aus dem Informatik-Monitor 2026/27 der Gesellschaft für Informatik und von der Kultusministerkonferenz.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatik im Berliner Schulweg nach Klasse, Schuljahr 2026/27', head: ['Klasse', 'Schulform', 'Was es an Informatik gibt'], rows: [
          ['1 bis 6', 'Grundschule oder Gemeinschaftsschule', 'Basiscurriculum Medienbildung, laut Informatik-Monitor ohne ausdrückliche informatische Inhalte'],
          ['ab 5', 'Grundständiges Gymnasium', 'Früherer Wechsel möglich, Informatik aber erst ab 7'],
          ['7 oder 8', 'Alle Schularten der Sekundarstufe I', 'ITG, Informationstechnischer Grundkurs, eine Wochenstunde'],
          ['9 und 10', 'Alle Schularten der Sekundarstufe I', 'Wahlpflichtfach Informatik, in der Regel zwei Wochenstunden'],
          ['Oberstufe', 'Gymnasium, Sekundarschule, Gemeinschaftsschule', 'Informatik als Grundkurs oder Leistungskurs, wenn angeboten']
        ] },
        { kind: 'source', html: 'Quellen: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Länderseite Berlin und Ländervergleich; KMK, Primarbereich. Gelesen am 2. November 2026.' },
        { kind: 'two', mt: true,
          leftH3: 'Sechs Jahre ohne Informatikstunde',
          left: [
            'In Berlin dauert die Grundschule bis zur sechsten Klasse; die KMK nennt Berlin und Brandenburg ausdrücklich als die beiden Länder mit sechs Grundschuljahren. Für diese sechs Jahre gibt es ein fächerübergreifendes Basiscurriculum Medienbildung, das nach dem Informatik-Monitor keine ausdrücklichen Inhalte mit informatischem Bezug hat.',
            'Medienbildung heißt also: sicher und sinnvoll mit Geräten umgehen. Wie ein Programm entsteht, steht dort nicht auf dem Plan.'
          ],
          rightH3: 'Berlin plant kein Pflichtfach',
          right: [
            'Der Informatik-Monitor zählt Berlin zu den sechs Ländern ohne Informatikunterricht, der für alle verbindlich ist, und schreibt, dass in Berlin, Brandenburg und Hessen keine verbindlichen Vorhaben für ein Pflichtfach Informatik bekannt sind.',
            'Die erste feste Stunde ist der ITG-Kurs in Klasse 7 oder 8, eine Wochenstunde. Wer früher anfangen möchte, braucht ein Angebot außerhalb der Schule.'
          ] },
        { kind: 'p', mt: true, html: 'Das ist keine Kritik an den Berliner Schulen, die in diesen Jahren Lesen, Schreiben und Rechnen in den Vordergrund stellen. Es heißt nur: Wenn Ihr Kind mit acht wissen will, wie ein Spiel funktioniert, wird die Schule diese Frage in den nächsten Jahren wahrscheinlich nicht beantworten. Genau diese Lücke füllt ein Kurs, der mit Scratch beginnt.' }
      ]
    },
    {
      id: 'englisch',
      eyebrow: 'Unterricht auf Englisch',
      h2: 'Kann ein Kind von 6 Jahren auf Englisch programmieren lernen?',
      lede: 'Ja, wenn der Unterricht dafür gebaut ist. Scratch zeigt fast alles in Bildern, und die Befehle von Python sind kurze englische Wörter.',
      body: [
        { kind: 'two',
          leftH3: 'Wie die Mentoren sprechen',
          left: [
            'Unsere Mentoren sprechen langsam, in kurzen Sätzen, und wiederholen Anweisungen mit einfacheren Wörtern. Sie zeigen auf dem geteilten Bildschirm, was sie meinen, bevor sie es erklären.',
            'Sagt ein Kind mitten im Satz ein deutsches Wort, versteht der Mentor das meist aus dem Zusammenhang und gibt ihm freundlich das englische Wort dazu. Niemand wird korrigiert, bis es keinen Spaß mehr macht.'
          ],
          rightH3: 'Was Ihr Kind an Englisch braucht',
          right: [
            'Für Scratch reichen Farben, Zahlen und ein paar Verben: move, turn, repeat, say. Diese Wörter lernt ein Kind in den ersten Stunden fast von selbst, weil es sieht, was sie tun.',
            'Bei Python kommen if, else, for und print hinzu. Auch diese Wörter erklären sich durch das, was auf dem Bildschirm passiert. Ein Wörterbuch braucht im Unterricht niemand.'
          ] },
        { kind: 'p', mt: true, html: 'Ein Hinweis für Eltern jüngerer Kinder: KI-Chatbots für Erwachsene empfehlen wir Kindern nicht. Viele Anbieter setzen in ihren Nutzungsbedingungen ein Mindestalter. Unser <a class="ag-inline-link" href="/ai-tools-age-guide">Altersleitfaden für KI-Werkzeuge</a> (auf Englisch) zeigt, was die Nutzungsbedingungen der einzelnen Werkzeuge erlauben. Im Unterricht lernen Kinder, selbst zu denken und Probleme zu lösen, statt Antworten abzuschreiben.' }
      ]
    },
    {
      id: 'projekt',
      tint: 'tint',
      eyebrow: 'Ein Berliner Projekt',
      h2: 'Wie lernt ein Kind mit echten Berliner Spielplatzdaten programmieren?',
      lede: 'Der Bezirk Steglitz-Zehlendorf veröffentlicht die Liste seiner öffentlichen Spielplätze als offene Daten, frei nutzbar. Mit ihr lernen unsere Kinder eine Strichliste, die ein Computer führt, und eine Frage, die viele Erwachsene verwechseln.',
      body: [
        { kind: 'two',
          leftH3: 'Die Daten',
          left: [
            'Der Fachbereich Grünflächen des Bezirksamts stellt die Liste Öffentliche Spielplätze in Steglitz-Zehlendorf unter der Lizenz CC0 bereit. Wir haben sie am 3. November 2026 als Datei heruntergeladen: 138 Spielplätze, jeder mit Ortsteil, Art, Name, Straße und der Fläche in Quadratmetern.',
            'Für Kinder speichern wir sie als spielplaetze_sz.json. Ein Kind von 10 Jahren versteht nach einer Stunde, dass jeder Spielplatz eine kleine Karteikarte mit Feldern ist.'
          ],
          rightH3: 'Die Frage',
          right: [
            'Welcher Ortsteil hat die meisten Spielplätze? Ein Kind würde eine Strichliste machen: für jeden Spielplatz einen Strich hinter seinem Ortsteil. Genau das macht Version 1, nur ohne Bleistift.',
            'Danach kommt die zweite Frage: Welcher Ortsteil hat die größte Spielfläche? Viele Kinder sagen sofort: derselbe. Version 2 prüft das.'
          ] },
        { kind: 'code', label: 'Version 1: die Strichliste', lang: 'Python', code: V1, note: 'Ausgabe: <code>Steglitz 33</code>, <code>Lichterfelde 32</code>, <code>Zehlendorf 27</code>, <code>Lankwitz 19</code>, <code>Dahlem 13</code>, <code>Schlachtensee 6</code>, <code>Nikolassee 4</code>, <code>Wannsee 4</code> und <code>Zusammen: 138</code>.' },
        { kind: 'p', mt: true, html: 'Steglitz liegt mit 33 Spielplätzen knapp vor Lichterfelde mit 32. Die letzte Zeile ist eine Kontrolle, die wir Kindern früh beibringen: Wenn alle Striche zusammen nicht 138 ergeben, ist unterwegs etwas verloren gegangen.' },
        { kind: 'code', label: 'Version 2: statt Strichen die Fläche addieren', lang: 'Python', code: V2, note: 'Ausgabe: <code>Zehlendorf 69014 Quadratmeter</code>, <code>Steglitz 56386 Quadratmeter</code> und <code>Lichterfelde 43718 Quadratmeter</code>.' },
        { kind: 'p', html: 'Zehlendorf hat weniger Spielplätze als Steglitz, aber die größte Spielfläche: 69.014 Quadratmeter gegen 56.386. Der Unterschied steckt in einer einzigen Zeile: Version 1 zählt plus eins, Version 2 zählt plus Fläche. Die meisten und die größten sind zwei verschiedene Fragen, und ein Programm beantwortet immer nur die, die man ihm stellt.' },
        { kind: 'table', mt: true, numCols: [1, 2, 3], caption: 'Spielplätze in Steglitz-Zehlendorf nach Ortsteil (eigene Berechnung)', head: ['Ortsteil', 'Spielplätze', 'Fläche zusammen in m²', 'Fläche im Durchschnitt in m²'], rows: [
          ['Zehlendorf', '27', '69.014', '2.556'],
          ['Steglitz', '33', '56.386', '1.709'],
          ['Lichterfelde', '32', '43.718', '1.366'],
          ['Lankwitz', '19', '28.270', '1.488'],
          ['Dahlem', '13', '14.077', '1.083']
        ] },
        { kind: 'source', html: 'Daten: Bezirksamt Steglitz-Zehlendorf, Fachbereich Grünflächen, Öffentliche Spielplätze in Steglitz-Zehlendorf, über Berlin Open Data und GovData, Lizenz CC0; heruntergeladen am 3. November 2026. Alle Summen und Durchschnitte sind eigene Berechnungen. Zusammen kommen die 138 Spielplätze auf 236.718 Quadratmeter; der größte einzelne Spielplatz misst 21.720 Quadratmeter.' },
        { kind: 'ol', mt: true, items: [
          '<strong>6 bis 8 Jahre, ohne Bildschirm.</strong> Zählen Sie mit Ihrem Kind die Bäume auf zwei Straßen und machen Sie eine Strichliste. Dann schätzen Sie: Auf welcher Straße stehen die dicksten Bäume? Ist das dieselbe Straße?',
          '<strong>8 bis 10 Jahre, Scratch.</strong> Eine Liste mit fünf Ortsteilen und eine Variable pro Ortsteil. Jeder Klick auf einen Ortsteil macht einen Strich. Wer gewinnt?',
          '<strong>10 bis 12 Jahre, Python.</strong> Version 1 ausführen, dann selbst Version 2 schreiben, bevor man unsere ansieht. Nur eine Zeile muss sich ändern.',
          '<strong>Für Schnelle.</strong> Die Liste hat ein Feld für Tischtennisplatten. Welcher Ortsteil hat die meisten Platten? Und welcher die meisten Platten pro Spielplatz?'
        ] }
      ]
    },
    {
      id: 'biber',
      eyebrow: 'Ein kostenloser Wettbewerb',
      h2: 'Kann mein Kind in Berlin beim Informatik-Biber mitmachen?',
      lede: 'Ja, über die Schule, und die Biberwochen 2026 beginnen in wenigen Tagen. Programmieren muss dafür niemand können.',
      body: [
        { kind: 'two',
          leftH3: 'Was der Biber ist',
          left: [
            'Die Bundesweiten Informatikwettbewerbe nennen den Informatik-Biber Deutschlands größten Schülerwettbewerb im Bereich Informatik. Es ist ein kostenloses Online-Quiz mit Knobelaufgaben für die Jahrgangsstufen 3 bis 13, ohne Vorkenntnisse. 2025 haben über 580.000 Schülerinnen und Schüler teilgenommen, und 2026 findet er zum 20. Mal statt.',
            'Kinder in der Grundschule lösen neun Aufgaben in 30 Minuten. Das passt in eine Schulstunde.'
          ],
          rightH3: 'Termine 2026 und 2027',
          right: [
            'Die Biberwochen 2026 laufen vom 9. bis 20. November 2026. Die Schule meldet die Kinder an; fragen Sie also die Lehrkraft, ob die Schule Ihres Kindes teilnimmt. Zum Üben gibt es den Schnupper-Biber seit dem 14. September 2026.',
            'Die Ergebnisse erscheinen im Dezember 2026, die Urkunden und Preise werden im Januar 2027 verschickt.'
          ] },
        { kind: 'p', mt: true, html: 'Wer danach mehr will, findet beim Jugendwettbewerb Informatik derselben Veranstalter die nächste Stufe: Teilnahme ist grundsätzlich schon ab Klasse 3 möglich, und für Klasse 5 und 6 empfehlen die Veranstalter die Stufe Bronze mit drei Aufgaben in 30 Minuten. Wir verwenden im Unterricht keine Originalaufgaben, sondern schreiben eigene Rätsel in derselben Art. Wir sind mit den Veranstaltern nicht verbunden.' }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Wann findet der Unterricht in Berliner Zeit statt?',
      lede: 'Die meisten Berliner Kinder lernen am späten Nachmittag nach der Schule oder am Samstag- und Sonntagvormittag. Die Tabelle zeigt, wie spät es dann beim Mentor ist.',
      body: [
        { kind: 'table', numCols: [], caption: 'Beispielzeiten in Berlin und die Uhrzeit des Mentors in Indien', head: ['Berliner Zeit', 'Indische Zeit bis 28. März 2027', 'Indische Zeit ab 28. März 2027'], rows: [
          ['15:25 Uhr', '19:55 Uhr', '18:55 Uhr'],
          ['16:40 Uhr', '21:10 Uhr', '20:10 Uhr'],
          ['Samstag 09:50 Uhr', '14:20 Uhr', '13:20 Uhr'],
          ['Sonntag 10:20 Uhr', '14:50 Uhr', '13:50 Uhr']
        ] },
        { kind: 'source', html: 'In Deutschland gilt nach dem Einheitenzeitgesetz die mitteleuropäische Zeit (MEZ, UTC+1) und im Sommer die mitteleuropäische Sommerzeit (MESZ, UTC+2). Die Uhren wurden am 25. Oktober 2026 zurückgestellt, die nächste Umstellung auf Sommerzeit folgt am 28. März 2027. Indien hat das ganze Jahr UTC+5:30, ist Berlin also im Winter 4 Stunden 30 Minuten voraus und im Sommer 3 Stunden 30 Minuten. Die Zeilen sind Beispiele, keine festen Gruppentermine.' },
        { kind: 'p', mt: true, html: 'Die Berliner Schulferien unterbrechen den Unterricht nicht, wenn Sie es nicht möchten. Laut KMK-Ferientabelle 2026/27 sind die Weihnachtsferien vom 23. Dezember 2026 bis 2. Januar 2027, die Winterferien vom 1. bis 6. Februar 2027, die Osterferien vom 22. März bis 2. April 2027 und die Sommerferien vom 1. Juli bis 14. August 2027. Viele Familien pausieren im Sommer für die Reise und machen im August weiter.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Stufen',
    h2: 'Was ein Berliner Kind auf jeder Stufe kann',
    lede: 'Unsere eigenen Stufen. Mit ihnen finden wir die passende Gruppe und berichten den Eltern.',
    table: { caption: 'Programmieren von 6 bis 12 Jahren (eigene Stufen)', head: ['Stufe', 'Typisches Alter', 'Das Kind kann'], rows: [
      ['1. Reihenfolge', '6 bis 7', 'Schritte ordnen und eine Figur laufen und sprechen lassen'],
      ['2. Schleifen', '7 bis 9', 'Dinge wiederholen und auf Tasten oder Klicks reagieren'],
      ['3. Zählen', '8 bis 10', 'Mit Variablen Punkte zählen und eine Strichliste führen'],
      ['4. Echter Code', '9 bis 11', 'Kurze Python-Programme mit Schleifen und Bedingungen schreiben'],
      ['5. Echte Daten', '10 bis 12', 'Eine Datei lesen, nach Gruppen zählen und summieren, das Ergebnis erklären']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Stufe 3 und Stufe 5 sind das Spielplatz-Projekt. Ein Kind, das zählt und summiert unterscheidet, liest später auch Diagramme in der Zeitung genauer.',
      'Wir berichten, was Ihr Kind bauen und erklären kann, nicht, wie viele Stunden es vor dem Bildschirm saß.'
    ] },
    right: { h3: 'Für Kinder', ps: [
      'Vor jeder Antwort klären: Soll gezählt oder addiert werden?',
      'Zum Schluss nachrechnen: Ergeben alle Teile zusammen das Ganze?'
    ] }
  },

  catalogue: {
    eyebrow: 'Mehr für Kinder',
    h2: 'Neun weitere Kurse für Berliner Kinder',
    lede: 'Jeder Kurs läuft live und auf Englisch; Ihr Kind lernt allein mit dem Mentor oder mit einer Gruppe Gleichaltriger.',
    bands: [
      { num: 'I', h3: 'Denken zuerst', sub: '7 bis 15 Jahre', courses: [
        { code: 'PLK / DENK / 01', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problemlösen für Kinder', blurb: 'Rätsel und Schritt-für-Schritt-Denken, gut vor dem Biber.' },
        { code: 'PLK / DENK / 02', slug: 'ai-literacy-for-kids-course', title: 'KI verstehen für Kinder', blurb: 'Wie Maschinen lernen, ohne Chatbots für Erwachsene.' },
        { code: 'PLK / DENK / 03', slug: 'maths-through-coding', title: 'Mathe mit Code', blurb: 'Schulmathe mit Python entdecken, 10 bis 15 Jahre.' }
      ] },
      { num: 'II', h3: 'Spiele und Welten', sub: '7 bis 14 Jahre', courses: [
        { code: 'PLK / SPIEL / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft programmieren', blurb: 'Von Blöcken zu echtem Code in einer vertrauten Welt.' },
        { code: 'PLK / SPIEL / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox-Spiele bauen', blurb: 'Eigene Spiele mit Luau, 8 bis 14 Jahre.' },
        { code: 'PLK / SPIEL / 03', slug: 'game-development-masterclass-for-kids', title: 'Spieleentwicklung', blurb: 'Scratch, Roblox und Minecraft in einem Kurs.' }
      ] },
      { num: 'III', h3: 'Selbst etwas bauen', sub: '8 bis 16 Jahre', courses: [
        { code: 'PLK / BAU / 01', slug: 'block-coding-app-development-masterclass', title: 'Apps für Kinder', blurb: 'Echte Handy-Apps mit Blöcken, 8 bis 12 Jahre.' },
        { code: 'PLK / BAU / 02', slug: 'kids-ai-web-development-course', title: 'Webseiten für Kinder', blurb: 'Die erste eigene Webseite, 9 bis 12 Jahre.' },
        { code: 'PLK / BAU / 03', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'Schulinformatik ab Klasse 5, auf Englisch.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'So läuft der Unterricht',
    h2: 'Wie der Live-Unterricht für eine Berliner Familie funktioniert',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. Zwei Live-Stunden pro Woche, je eine Stunde, immer mit demselben Mentor.',
    slots: [
      { time: 'Nach der Schule', l: 'Nachmittags in Berlin, ab etwa 15 Uhr.' },
      { time: 'Am Wochenende', l: 'Samstag- oder Sonntagvormittag, ruhig für Jüngere.' },
      { time: 'Einzelunterricht', l: 'Eine Zeit, die Sie mit dem Mentor vereinbaren.' }
    ],
    cells: [
      { h3: 'Fester Mentor', p: 'Eine Person, die Ihr Kind kennt.' },
      { h3: 'Klares Englisch', p: 'Langsam, einfach, gern wiederholt.' },
      { h3: 'Selbst machen', p: 'Das Kind bedient den Code ab der ersten Stunde.' },
      { h3: 'Nach Alter', p: 'Sechsjährige lernen nicht mit Zwölfjährigen.' },
      { h3: 'Kurze Berichte', p: 'Was gebaut wurde, was schwer war, was kommt.' },
      { h3: 'Gruppe oder allein', p: 'Fünfzehn bis zwanzig Kinder oder Ihr Kind allein.' }
    ]
  },

  projectsH2: 'Projekte unserer älteren Schülerinnen und Schüler',
  projectsLede: 'Wer jung anfängt, baut später echte Dinge. Einige Projekte älterer Lernender sehen Sie unten; mehr zeigt die Seite <a class="ag-inline-link" href="/student-labs">Student Labs</a> (auf Englisch).',
  reviewsLede: 'Google-Bewertungen von Eltern und Lernenden, im Original und ungekürzt.',

  fees: {
    h2: 'Kosten für Berliner Familien',
    lede: 'Sie zahlen monatlich für acht Live-Stunden. Wir zeigen den Betrag in Euro, umgerechnet zum Referenzkurs der Europäischen Zentralbank; abgebucht wird er in US-Dollar, Ihre Bank übernimmt die Umrechnung, und der Euro-Betrag auf dem Kontoauszug kann deshalb etwas abweichen.',
    free: ['Eine kostenlose Probestunde', 'Ein kleines Rätsel und ein erstes Scratch-Programm', 'Keine Karte nötig'],
    group: ['Fünfzehn bis zwanzig Kinder im ähnlichen Alter', 'Ein fester Mentor', 'Zwei Stunden pro Woche', 'Monatlich kündbar'],
    one: ['Ihr Kind und ein Mentor', 'Eigenes Tempo, eigene Projekte', 'Zeiten nach Ihrem Familienplan']
  },

  faq: {
    eyebrow: 'Berliner Eltern fragen',
    h2: 'Programmieren lernen für Kinder in Berlin: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein. Der Unterricht ist live und ausschließlich auf Englisch. Das ist Absicht und für viele Kinder ein Vorteil: Sie lernen Programmieren und Englisch zugleich. Die Mentoren sprechen langsam und klar und passen sich an Tempo und Aussprache Ihres Kindes an.' },
      { q: 'Gibt es den Kurs auch vor Ort in Berlin?', a: 'Nein, wir unterrichten nur live online. Ihr Kind sitzt zu Hause am Computer oder Tablet und sieht den Mentor und den gemeinsamen Bildschirm. Es gibt keine Fahrtwege und keine aufgezeichneten Videos statt Unterricht.' },
      { q: 'Ab welchem Alter kann mein Kind programmieren lernen?', a: 'Ab 6 Jahren. Die Jüngsten beginnen mit Scratch, wo bunte Blöcke zusammengesteckt werden und kaum gelesen werden muss. Ab etwa 9 Jahren können Kinder auf getippten Python-Code umsteigen.' },
      { q: 'Lernen Kinder in der Berliner Grundschule programmieren?', a: 'In der Regel nicht. Für die Klassen 1 bis 6 gibt es das Basiscurriculum Medienbildung, das laut Informatik-Monitor 2026/27 keine ausdrücklichen informatischen Inhalte hat. Der erste feste Kurs ist ITG in Klasse 7 oder 8 mit einer Wochenstunde.' },
      { q: 'Wann finden die Stunden statt?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. 16:40 Uhr in Berlin ist im Winter 21:10 Uhr in Indien.' },
      { q: 'Wo sitzen die Lehrkräfte?', a: 'Unsere Mentoren arbeiten in Indien und unterrichten live per Video. Deshalb passen Berliner Nachmittage gut: Für den Mentor ist es dann früher Abend. Der Mentor bleibt Woche für Woche derselbe.' },
      { q: 'Wann ist der Informatik-Biber 2026?', a: 'Vom 9. bis 20. November 2026. Der Wettbewerb ist kostenlos, für die Klassen 3 bis 13 und braucht keine Vorkenntnisse. Die Schule meldet die Kinder an. Zum Üben gibt es seit dem 14. September 2026 den Schnupper-Biber.' },
      { q: 'Wie groß sind die Gruppen?', a: 'Eine Gruppe hat fünfzehn bis zwanzig Kinder im ähnlichen Alter. Wenn Ihr Kind lieber allein lernt oder ein eigenes Tempo braucht, gibt es den Einzelunterricht mit zwei privaten Stunden pro Woche.' },
      { q: 'Was kostet der Kurs, und in welcher Währung wird bezahlt?', a: 'Die Gebühr ist monatlich und wird hier in Euro zum Referenzkurs der Europäischen Zentralbank angezeigt. Abgebucht wird in US-Dollar, Ihre Bank rechnet um, daher kann der Betrag leicht abweichen. Die Probestunde ist kostenlos und ohne Karte.' },
      { q: 'Nutzt mein Kind im Kurs ChatGPT oder andere KI-Chatbots?', a: 'Nein, nicht in den Kursen für 6 bis 12 Jahre. Kinder lernen, selbst zu denken und Code selbst zu schreiben. Wie KI funktioniert, erklären wir mit eigenen kleinen Projekten, ohne Konten bei Diensten, die für Erwachsene gedacht sind.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weitere Seiten',
    h2: 'Das könnte Sie auch interessieren',
    lede: 'Weitere Seiten für Familien in Berlin und Deutschland, teils auf Englisch.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Alle Seiten für Deutschland', p: 'Unsere Übersicht für Familien in Deutschland (auf Englisch).' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin', p: 'Die englische Berliner Seite, mit einem Fahrrad-Projekt.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Für Schulkinder ab Klasse 5, auf Deutsch erklärt.' },
      { href: '/informatik-biber-practice-in-english', label: 'Informatik-Biber üben', p: 'Eigene Übungsrätsel im Biber-Stil (auf Englisch).' },
      { href: '/scratch-coding-classes-for-kids', label: 'Scratch für Kinder', p: 'Wo die meisten jungen Kinder beginnen (auf Englisch).' },
      { href: '/how-we-teach', label: 'So unterrichten wir', p: 'Eine Live-Stunde im Detail (auf Englisch).' }
    ]
  },

  start: {
    h2: 'Eine kostenlose Probestunde buchen',
    lede: 'In der Probestunde löst Ihr Kind ein kleines Rätsel und baut ein erstes Scratch-Programm. Der Mentor sieht, wie Ihr Kind denkt und wie wohl es sich mit Englisch fühlt, und empfiehlt danach Kurs und Gruppe.',
    readFirst: 'Wer vorher lesen möchte: <a class="ag-inline-link" href="/how-we-teach">So unterrichten wir</a> beschreibt eine Live-Stunde, und <a class="ag-inline-link" href="/courses">alle Kurse</a> zeigt jeden Lehrplan (beides auf Englisch).',
    note: 'Unterricht live online mit Mentoren in Indien, ausschließlich auf Englisch. Per WhatsApp erreichen Sie uns am schnellsten, auf Englisch.',
    formNote: 'Kostenlos, ohne Karte und ohne Verpflichtung.'
  },

  footer: {
    cols: [
      { h4: 'Für Kinder', links: [
        { href: '/scratch-coding-classes-for-kids', label: 'Scratch für Kinder' },
        { href: '/python-for-10-year-olds', label: 'Python mit 10 Jahren' },
        { href: '/ai-projects-for-kids', label: 'KI-Projekte für Kinder' },
        { href: '/ai-tools-age-guide', label: 'KI-Werkzeuge nach Alter' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Alle Seiten für Deutschland' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online' },
        { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids, Berlin' },
        { href: '/how-we-teach', label: 'So unterrichten wir' }
      ] }
    ],
    bottomRight: 'Zählen oder addieren: erst die Frage klären'
  },

  personalityCss: `
.ag-root.ag-plk .ag-hero h1 { letter-spacing: -0.008em; }
.ag-root.ag-plk .ag-capsule { border-left-width: 5px; }
.ag-root.ag-plk .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-plk .ag-table caption { text-align: left; }
.ag-root.ag-plk .ag-steps li { line-height: 1.65; }
`,

  dossier: {
    curriculumAuthority: 'KMK Primarbereich; Gesellschaft für Informatik, Informatik-Monitor 2026/27 (Berlin und Ländervergleich); Bundesweite Informatikwettbewerbe (Informatik-Biber 2026, Jugendwettbewerb Informatik); KMK Ferientabelle 2026/27; Destatis GV-ISys 31.12.2024; Einheitenzeitgesetz. Daten: Bezirksamt Steglitz-Zehlendorf, Öffentliche Spielplätze in Steglitz-Zehlendorf, CC0.',
    localProject: 'Spielplatz-Strichliste: ein eigenes Python-Projekt mit den 138 öffentlichen Spielplätzen in Steglitz-Zehlendorf. Version 1 zählt nach Ortsteil (Steglitz 33 vor Lichterfelde 32), Version 2 summiert die Fläche (Zehlendorf 69.014 m² vor Steglitz 56.386 m²); dazu Aufgaben ohne Bildschirm, in Scratch und in Python. Lesson family: Strichliste und Summe nach Gruppen, die meisten sind nicht die größten.',
    requiredMentions: ['spielplaetze_sz.json', 'Steglitz 33', 'Zusammen: 138', 'Zehlendorf 69014 Quadratmeter', 'Basiscurriculum Medienbildung', 'vom 9. bis 20. November 2026', '3.685.265 Einwohner', 'Zählen oder addieren: erst die Frage klären'],
    sources: [
      { claim: 'Grundschule bis Klasse 6 in Berlin.', url: 'https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/primarbereich.html' },
      { claim: 'ITG, Wahlpflichtfach, Basiscurriculum Medienbildung, grundständige Gymnasien.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/berlin' },
      { claim: 'Sechs Länder ohne Pflichtfach, keine Vorhaben in Berlin.', url: 'https://informatik-monitor.de/' },
      { claim: 'Informatik-Biber 2026, Fakten und Termine.', url: 'https://bwinf.de/biber/2026/' },
      { claim: 'Jugendwettbewerb ab Klasse 3, Stufe Bronze.', url: 'https://bwinf.de/jugendwettbewerb/' },
      { claim: 'Berliner Ferien 2026/27.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Ferienkalender/FER2026_27.pdf' },
      { claim: 'Spielplatzdaten Steglitz-Zehlendorf, Lizenz CC0.', url: 'https://ckan.govdata.de/dataset/offentliche-spielplatze-in-steglitz-zehlendorf' }
    ],
    rejectedClaims: [
      'Unterricht auf Deutsch: nicht angeboten, die Seite sagt es offen.',
      'Kurse vor Ort in Berlin: nicht angeboten.',
      'Namen von Berliner Schulen als Herkunft unserer Schülerinnen und Schüler: abgelehnt.',
      'Bewertung, welcher Ortsteil für Kinder besser ist: nicht aus den Daten ableitbar, daher nicht gemacht.',
      'Verbindung zu BWINF, dem Bezirksamt oder einer Schule: keine.'
    ]
  }
};
