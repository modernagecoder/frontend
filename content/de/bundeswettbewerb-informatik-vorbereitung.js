'use strict';
// Bundeswettbewerb Informatik Vorbereitung (ag- German-language door, Germany cluster P3 row DE081, hub group 'german').
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors who match the learner's pace and accent; formal "Sie";
// pages show euro, checkout charges USD. We are not connected with BWINF. Round 1 of the 45th Bundeswettbewerb is open
// until 23 November 2026 and BWINF forbids publishing solution ideas before the deadline: this page names no live task and
// gives no hint on one; our worked problem (a lift with two buttons) is unrelated to any of them.
// Spine: for German parents and pupils: from which Klasse the BWINF ladder makes sense (Biber, Jugendwettbewerb, junior
// tasks, full tasks, IOI), what is allowed (AI, languages, libraries, teams, publishing), what the documentation must
// contain, then one original problem documented in BWINF's own parts (Lösungsidee, Umsetzung, Beispiele, Quelltext).
// The live English page bundeswettbewerb-informatik-preparation uses a round-by-round table, eligibility, the submission
// checklist and a counting-steps problem; none of its tables, examples or sentences is reused here.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/bundeswettbewerb-informatik-vorbereitung/,
// fetched 2 and 3 Nov 2026; strings grepped from the .txt files):
//  - bwinf.de/bundeswettbewerb/ (bwinf-bw, FACTS 145 to 150): up to 21, not yet studying or working; "1. Runde: 1. September
//    bis 23. November 2026 2. Runde: Anfang 2027 bis April 2027 3. Runde: September 2027"; group work round 1, individual
//    round 2; national winners into the Studienstiftung; "Die 2. Runde kann als Ersatzleistung für die besondere
//    Lernleistung im Abitur gelten. Ob dies möglich ist, hängt von Bundesland und Schule ab."; 1,790 at the 43rd.
//  - bw-45: "Sieben Aufgaben stehen zur Auswahl"; at least three; junior tasks "Schülerinnen und Schülern vor der
//    Qualifikationsphase des Abiturs vorbehalten" and also round 3 of the Jugendwettbewerb 2026; "Einsendeschluss für beide
//    Wettbewerbe ist der 23. November 2026."; AI "In den ersten beiden Runden dürfen KI-Tools wie ChatGPT oder Copilot genutzt
//    werden"; "Die Teilnehmenden sollen verstehen, was sie einreichen"; "In der Finalrunde ist der Einsatz von KI übrigens
//    nicht möglich"; "vor Einsendeschluss keine Lösungsideen oder Lösungen mit Programmen veröffentlicht werden dürfen".
//  - bw-faq: "In der ersten Runde gibt es fünf Aufgaben und zwei Junioraufgaben."; "In der zweiten Runde gibt es drei
//    Aufgaben, von denen zwei bearbeitet werden müssen."; "Es gibt keine Einschränkungen in der Wahl der Programmiersprache.";
//    code in the documentation only "die Teile, die den Kern des Algorithmus enthalten"; login.bwinf.de, a "Team" even alone.
//  - bw-einsenden: documentation describes the Lösungsidee, the Umsetzung, the tools (libraries or AI), enough examples, the
//    key source; "eine gute Dokumentation muss nicht lang sein, aber unbedingt alle vorgegebenen Beispiele enthalten".
//  - bw-teilnehmen: born "nach dem 23. November 2004"; citizenship or residence "vom 1. September bis 23. November 2026" or
//    a recognised German school abroad; "Trenne die Lösungsidee von der Umsetzung in ein Programm." (paraphrased on the page,
//    not quoted, because it addresses pupils with "du"). The FAQ gives 17 November; we use the Teilnehmen page.
//  - jwinf2027: round 1 "vom 22. Februar bis 7. März 2027", round 2 "vom 12. bis 25. April 2027", round 3 "vom 1. September
//    bis 15. November 2027" with the 46th Bundeswettbewerb; "Neben Blockly ist die Bearbeitung in 2027 also auch in Python
//    möglich."
//  - FACTS 133 (Biber 2026, 9 to 20 November 2026), 151 (IOI team from the up to 20 top of the Bundeswettbewerb), 153 (39th IOI
//    12 to 19 September 2027, HPI Potsdam), 160 (45th Bundeswettbewerb is the entry for IOI 2028 in Japan), 161 (KMK-supported).
//  - Time: Einheitenzeitgesetz; summer time ended 25 October 2026, begins 28 March 2027; India UTC+5:30.
// Our own (scratchpad de/w/GE/py/aufzug.py and schichten.py, python3 -I) print:
//    Knopfdruecke: 9 / Weg: [0, 5, 10, 15, 20, 17, 14, 19, 16, 13] / Mit +6 und -4: None /
//    Haus mit 12 Stockwerken: [0, 5, 10, 7, 12, 9, 6, 11]
//    layers 0 [0], 1 [5], 2 [2, 10], 3 [7, 15], 4 [4, 12, 20], 5 [1, 9, 17], 6 [6, 14], 7 [3, 11, 19], 8 [8, 16], 9 [13]
// Lesson family: search in layers (breadth-first): the first time a state is reached is the fewest steps; and an
// unreachable target needs a reason, not just "None".

const { DE } = require('../../scripts/nl/lib/market-de');

const PY = [
  'from collections import deque',
  '',
  'def kuerzester_weg(start, ziel, hoch, runter, oben):',
  '    vorgaenger = {start: None}',
  '    schlange = deque([start])',
  '    while schlange:',
  '        stock = schlange.popleft()',
  '        if stock == ziel:',
  '            weg = []',
  '            while stock is not None:',
  '                weg.append(stock)',
  '                stock = vorgaenger[stock]',
  '            return weg[::-1]',
  '        for naechster in (stock + hoch, stock - runter):',
  '            if 0 <= naechster <= oben and naechster not in vorgaenger:',
  '                vorgaenger[naechster] = stock',
  '                schlange.append(naechster)',
  '    return None',
  '',
  'weg = kuerzester_weg(0, 13, 5, 3, 20)',
  'print("Knopfdruecke:", len(weg) - 1)',
  'print("Weg:", weg)',
  'print("Mit +6 und -4:", kuerzester_weg(0, 13, 6, 4, 20))',
  'print("Haus mit 12 Stockwerken:", kuerzester_weg(0, 11, 5, 3, 12))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'Bundeswettbewerb Informatik Vorbereitung' },
  slug: 'bundeswettbewerb-informatik-vorbereitung',
  code: 'biv',
  accent: '#7E4B52',
  accentRationale: 'Bundeswettbewerb Informatik Vorbereitung: a muted wine red #7E4B52, the colour of a certificate seal, distinct from the teal, plum and walnut of the other German doors and the Informatik petrol; at least 5.65 on the paper #FBF8F2 and its tints',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Bundeswettbewerb Informatik Vorbereitung (auf Englisch)',
  title: 'Bundeswettbewerb Informatik: Vorbereitung live auf Englisch',
  description: 'Vorbereitung auf den Bundeswettbewerb Informatik 2026/27, live auf Englisch: ab welcher Klasse, was erlaubt ist, wie die Dokumentation aussieht, mit Übung.',
  ogDescription: 'Der Bundeswettbewerb Informatik für Eltern und Jugendliche erklärt: der Weg vom Informatik-Biber bis zur IOI, die Regeln zu KI und Teamarbeit, die Dokumentation in vier Teilen und eine eigene Übungsaufgabe mit Breitensuche.',
  twitterDescription: 'Bundeswettbewerb Informatik vorbereiten: Klassenstufen, Regeln, Dokumentation und eine eigene Aufgabe. Live auf Englisch.',
  pageName: 'Bundeswettbewerb Informatik Vorbereitung',
  webPageDescription: 'Ein Leitfaden für Jugendliche und Eltern in Deutschland zum 45. Bundeswettbewerb Informatik: der Weg über Informatik-Biber und Jugendwettbewerb, Teilnahmebedingungen, die Regeln zu KI, Programmiersprachen und Teams, der Aufbau einer Einsendung und eine eigene Übungsaufgabe, dokumentiert wie eine Einsendung.',
  courseDescription: 'Live-Online-Vorbereitung auf die Informatik-Wettbewerbe von BWINF für Jugendliche in ganz Deutschland, ausschließlich auf Englisch: Algorithmen, Datenstrukturen, Programmieren in Python, Java oder C++ und das Schreiben einer Dokumentation, in der Gruppe oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Bundeswettbewerb Informatik',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#klasse', label: 'Ab Klasse?' },
    { href: '#regeln', label: 'Regeln' },
    { href: '#aufgabe', label: 'Aufgabe' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Deutschland &middot; BWINF &middot; Klasse 5 bis 13',
  h1: 'Bundeswettbewerb Informatik: Vorbereitung live auf Englisch',
  lede: 'Der Bundeswettbewerb Informatik ist der anspruchsvollste Schülerwettbewerb für Informatik in Deutschland und der Einstieg in die Auswahl für die Internationale Informatik-Olympiade. Die erste Runde des 45. Wettbewerbs läuft bis zum 23. November 2026. Diese Seite zeigt, ab welcher Klasse sich die Teilnahme lohnt und welche Wettbewerbe davor liegen, was bei KI, Programmiersprachen und Teamarbeit erlaubt ist, wie eine Einsendung aufgebaut ist und wie wir mit einer eigenen Aufgabe darauf vorbereiten. Unser Unterricht ist live, auf Englisch, mit Mentoren aus Indien.',
  secondaryCta: { href: '#klasse', label: 'Ab welcher Klasse?' },
  wa: 'Hallo Modern Age Coders, ich möchte mich auf den Bundeswettbewerb Informatik vorbereiten, gern auf Englisch. Gibt es eine kostenlose Probestunde?',
  heroNote: 'Programmieren live online seit 2020 &middot; über 10.000 Lernende weltweit &middot; Algorithmen und Dokumentation, auf Englisch',
  spec: [
    ['Für', 'Jugendliche ab etwa Klasse 7'],
    ['Inhalte', 'Algorithmen, Datenstrukturen, Dokumentation'],
    ['Sprachen', 'Python, Java oder C++'],
    ['Gruppe', 'Fünfzehn bis zwanzig, oder Einzelunterricht'],
    ['Unterricht', 'Auf Englisch, live per Video'],
    ['Probestunde', 'Kostenlos, ohne Karte']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Bundeswettbewerb Informatik Vorbereitung bei Modern Age Coders heißt: Jugendliche in ganz Deutschland lernen live online und auf Englisch, was der Wettbewerb von BWINF verlangt, also Algorithmen entwerfen, sie in Python, Java oder C++ umsetzen und die Lösung verständlich dokumentieren. Grundlage ist unser Kurs zu den Informatik-Wettbewerben von Biber bis Bundeswettbewerb. Gelernt wird mit eigenen Übungsaufgaben in einer Gruppe von fünfzehn bis zwanzig oder im Einzelunterricht, mit einem festen Mentor.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Kurse auf dem Weg zum Bundeswettbewerb',
    lede: 'Einer führt durch alle BWINF-Wettbewerbe, zwei vertiefen die Algorithmen, ohne die ab der zweiten Runde wenig geht.',
    items: [
      { course: 'german-informatics-competitions-course-biber-bwinf-bwki', code: 'BIV / 01', title: 'Informatik-Wettbewerbe', alt: 'Kursbild Informatik-Wettbewerbe Biber, BwInf und BWKI', note: 'Für 9 bis 19 Jahre. Vom Knobeln im Stil des Bibers über den Jugendwettbewerb bis zu eigenen Lösungen und Dokumentationen für den Bundeswettbewerb.' },
      { course: 'problem-solving-dsa-masterclass-teens', code: 'BIV / 02', title: 'Algorithmen und Datenstrukturen', alt: 'Kursbild Problem Solving and DSA for Teens', note: 'Für 13 bis 18 Jahre. Listen, Warteschlangen, Graphen, Suchen und Sortieren, mit der Frage, warum ein Verfahren richtig ist.' },
      { course: 'competitive-programming-for-teens-course', code: 'BIV / 03', title: 'Wettbewerbsprogrammierung', alt: 'Kursbild Competitive Programming for Teens', note: 'Für alle, die schon sicher programmieren. Laufzeit, Grenzfälle und Aufgaben unter Zeitdruck, als Brücke zur Olympiade-Vorauswahl.' }
    ]
  },

  sections: [
    {
      id: 'klasse',
      eyebrow: 'Der Weg dorthin',
      h2: 'Ab welcher Klasse lohnt sich der Bundeswettbewerb Informatik?',
      lede: 'Mitmachen dürfen Jugendliche bis 21 Jahre, die noch nicht studieren oder arbeiten. Sinnvoll ist der Einstieg meist über die kleineren Wettbewerbe desselben Veranstalters, der Bundesweiten Informatikwettbewerbe (BWINF).',
      body: [
        { kind: 'table', numCols: [], caption: 'Die Wettbewerbe von BWINF als Stufenleiter, mit den Terminen 2026/27', head: ['Stufe', 'Für wen', 'Wie', 'Termin laut BWINF'], rows: [
          ['Informatik-Biber', 'Klasse 3 bis 13, ohne Vorkenntnisse', 'Online-Quiz mit Knobelaufgaben', '9. bis 20. November 2026'],
          ['Jugendwettbewerb, 1. Runde', 'empfohlen ab Klasse 5', 'Programmieren in Blockly, 2027 auch in Python', '22. Februar bis 7. März 2027'],
          ['Jugendwettbewerb, 2. Runde', 'alle Angemeldeten', 'Programmieraufgaben in Leveln', '12. bis 25. April 2027'],
          ['Bundeswettbewerb, Junioraufgaben', 'nur vor der Qualifikationsphase des Abiturs', 'zwei Aufgaben, zu Hause, mit eigenen Werkzeugen', 'mit der 1. Runde, 2027 ab 1. September'],
          ['Bundeswettbewerb, 1. Runde', 'bis 21 Jahre', 'mindestens drei Aufgaben, allein oder im Team', '45. Wettbewerb: 1. September bis 23. November 2026'],
          ['Bundeswettbewerb, 2. Runde', 'wer sich qualifiziert hat', 'zwei von drei Aufgaben, Einzelarbeit', 'Anfang 2027 bis April 2027'],
          ['Informatik-Olympiade', 'die bis zu 20 Besten des Bundeswettbewerbs', 'drei Lehrgänge zur Teamauswahl', 'IOI 2027: 12. bis 19. September 2027 in Potsdam']
        ] },
        { kind: 'source', html: 'Quellen: BWINF, Seiten zum Informatik-Biber 2026, zum Jugendwettbewerb Informatik 2027, zum Bundeswettbewerb Informatik und zum 45. Bundeswettbewerb sowie zur Informatik-Olympiade (bwinf.de), gelesen am 2. und 3. November 2026. Laut BWINF ist der 45. Bundeswettbewerb zugleich der Einstieg in die Auswahl für die IOI 2028 in Japan.' },
        { kind: 'two', mt: true,
          leftH3: 'Unsere Faustregel nach Klassenstufe',
          left: [
            'Bis etwa Klasse 6 ist der Biber der richtige Wettbewerb, weil er Denken ohne Programmieren übt. Ab Klasse 7 lohnt der Jugendwettbewerb, und wer dort in den schwierigeren Leveln sicher wird, versucht die Junioraufgaben des Bundeswettbewerbs.',
            'Die vollen Aufgaben des Bundeswettbewerbs verlangen meist schon Erfahrung mit Listen, Schleifen über Daten und einfachen Graphen. Viele beginnen damit in Klasse 9 oder 10, manche früher. Entscheidend ist nicht die Klasse, sondern ob jemand eine Lösung erklären kann.'
          ],
          rightH3: 'Was der Wettbewerb bringen kann',
          right: [
            'Die zweite Runde kann laut BWINF als Ersatzleistung für die besondere Lernleistung im Abitur gelten; ob das möglich ist, hängt vom Land und von der Schule ab. Fragen Sie dort früh nach.',
            'Die Bundessiegerinnen und Bundessieger werden laut BWINF in die Studienstiftung des deutschen Volkes aufgenommen. Am 43. Bundeswettbewerb nahmen insgesamt 1.790 Jugendliche teil, ein überschaubares Feld.'
          ] }
      ]
    },
    {
      id: 'regeln',
      eyebrow: 'Regeln',
      h2: 'Darf man beim Bundeswettbewerb Informatik KI benutzen, und was ist sonst erlaubt?',
      lede: 'Die kurze Antwort: In den ersten beiden Runden ja, mit Offenlegung, in der Finalrunde nein. Die Tabelle fasst die Regeln zusammen, die BWINF für den 45. Wettbewerb veröffentlicht hat.',
      body: [
        { kind: 'table', numCols: [], caption: 'Was beim 45. Bundeswettbewerb Informatik erlaubt ist (Zusammenfassung der BWINF-Regeln)', head: ['Frage', 'Regel laut BWINF', 'Was wir daraus machen'], rows: [
          ['KI-Werkzeuge', 'in Runde 1 und 2 erlaubt, wenn die Teilnehmenden verstehen, was sie einreichen; in der Dokumentation zu nennen; in der Finalrunde nicht möglich', 'wir üben ohne KI, damit das Denken auch im Finale trägt'],
          ['Programmiersprache', 'keine Einschränkung; Dokumentation und Quelltext müssen zeigen, was das Programm tut', 'Python für den Einstieg, Java oder C++ für Fortgeschrittene'],
          ['Bibliotheken', 'als Hilfe erlaubt, aber in der Dokumentation zu erläutern', 'Standardbibliothek ja, fertige Lösung nein'],
          ['Teamarbeit', 'in Runde 1 erlaubt und erwünscht, in Runde 2 Einzelarbeit', 'in Runde 1 gemeinsam denken, getrennt schreiben üben'],
          ['Veröffentlichen', 'vor Einsendeschluss keine Lösungsideen oder Programme; Repositories privat halten', 'laufende Aufgaben besprechen wir im Unterricht gar nicht'],
          ['Anmeldung', 'online über login.bwinf.de, als Team, auch wer allein arbeitet', 'wir helfen bei Fragen zur Technik, nicht bei der Aufgabe']
        ] },
        { kind: 'source', html: 'Quellen: BWINF, Seite zum 45. Bundeswettbewerb, Häufige Fragen und Seite "Einsenden" (bwinf.de/bundeswettbewerb/), gelesen am 3. November 2026. BWINF empfiehlt ausdrücklich, die Aufgaben überwiegend ohne KI zu bearbeiten, damit man daran lernt.' },
        { kind: 'p', mt: true, html: 'Für Jugendliche unter 18 gilt bei uns zusätzlich: Wir setzen keine KI-Werkzeuge ein, die für Erwachsene bestimmt sind, und wir schreiben keine Lösungen für laufende Wettbewerbsaufgaben, auch nicht teilweise. Unsere Aufgabe ist es, das Handwerkszeug beizubringen. Die Lösung einer Wettbewerbsaufgabe muss von den Teilnehmenden selbst stammen, sonst verliert der Wettbewerb seinen Sinn.' },
        { kind: 'p', html: 'Wer teilnehmen darf, regelt BWINF auf der Seite "Teilnehmen": Für den 45. Wettbewerb müssen Teilnehmende nach dem 23. November 2004 geboren sein und entweder die deutsche Staatsangehörigkeit besitzen, vom 1. September bis 23. November 2026 in Deutschland wohnen oder eine staatlich anerkannte deutsche Schule im Ausland besuchen. Zweifelsfälle entscheidet BWINF, nicht wir.' }
      ]
    },
    {
      id: 'doku',
      eyebrow: 'Die Einsendung',
      h2: 'Wie schreibt man eine gute Dokumentation für den Bundeswettbewerb?',
      lede: 'Eine Einsendung besteht aus Programm und Dokumentation, und die Dokumentation entscheidet oft mehr als der Code. BWINF schreibt, eine gute Dokumentation müsse nicht lang sein, aber unbedingt alle vorgegebenen Beispiele enthalten.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Erst die Idee', p: 'BWINF rät, die Lösungsidee von der Umsetzung in ein Programm zu trennen. Die Idee beschreibt das Verfahren und warum es richtig ist, ohne eine Zeile Code. Wer sie nicht in Worten fassen kann, hat meist noch keine.' },
          { h3: 'Dann die Umsetzung', p: 'Hier steht, wie aus der Idee ein Programm wurde, welche Datenstrukturen es nutzt und welche Werkzeuge, auch Bibliotheken oder KI, beteiligt waren. In den Text gehören nur die Teile des Quelltextes, die den Kern des Algorithmus enthalten.' },
          { h3: 'Und die Beispiele', p: 'Jedes Beispiel des Aufgabenblatts gehört mit Eingabe und Ausgabe in die Dokumentation. Gute Einsendungen zeigen zusätzlich eigene Grenzfälle: die kleinste Eingabe, eine unmögliche Eingabe, eine sehr große.' }
        ] },
        { kind: 'p', mt: true, html: 'Für Jugendliche, die auf Englisch lernen, ist eine Frage oft wichtig: Muss die Dokumentation auf Deutsch sein? Darüber treffen wir keine Aussage, die BWINF nicht selbst macht; im Zweifel fragen Sie die Geschäftsstelle. Wir üben das Schreiben im Unterricht so, dass Ihr Kind dieselbe Lösungsidee auf Englisch erklären und danach auf Deutsch aufschreiben kann. Das trainiert genau das Trennen von Idee und Code, das BWINF verlangt.' }
      ]
    },
    {
      id: 'aufgabe',
      tint: 'tint',
      eyebrow: 'Eine Übungsaufgabe',
      h2: 'Wie sieht eine Übungsaufgabe im Stil des Bundeswettbewerbs aus?',
      lede: 'Die folgende Aufgabe ist unsere eigene und hat mit den Aufgaben des laufenden 45. Wettbewerbs nichts zu tun. Wir zeigen sie so, wie eine Einsendung aufgebaut wäre: Lösungsidee, Umsetzung, Beispiele, Quelltext.',
      body: [
        { kind: 'p', html: '<strong>Aufgabe (unsere): Der Aufzug mit zwei Knöpfen.</strong> In einem Haus mit den Stockwerken 0 bis 20 hat der Aufzug nur zwei Knöpfe: "5 hoch" und "3 runter". Ein Knopf, der aus dem Haus hinausführen würde, tut nichts. Wie viele Knopfdrücke braucht man mindestens vom Erdgeschoss in Stock 13, und über welche Stockwerke? Was passiert, wenn die Knöpfe "6 hoch" und "4 runter" heißen?' },
        { kind: 'p', html: '<strong>Lösungsidee.</strong> Jedes Stockwerk ist ein Zustand, jeder Knopfdruck ein Übergang. Wir suchen schichtweise: Zuerst alle Stockwerke, die man mit einem Druck erreicht, dann alle mit zwei Drücken, und so weiter. Ein Stockwerk, das wir zum ersten Mal sehen, merken wir uns mit seinem Vorgänger und besuchen es nie wieder. Weil jede Schicht genau einen Druck mehr kostet als die vorige, ist der erste Besuch von Stock 13 auch der kürzeste Weg dorthin. Diese Breitensuche endet sicher, denn es gibt nur 21 Stockwerke.' },
        { kind: 'table', mt: true, numCols: [0], caption: 'Die Schichten der Breitensuche von Stock 0 aus, mit "5 hoch" und "3 runter"', head: ['Drücke', 'Neu erreichte Stockwerke'], rows: [
          ['0', '0'], ['1', '5'], ['2', '2, 10'], ['3', '7, 15'], ['4', '4, 12, 20'], ['5', '1, 9, 17'], ['6', '6, 14'], ['7', '3, 11, 19'], ['8', '8, 16'], ['9', '13']
        ] },
        { kind: 'code', label: 'Umsetzung: Breitensuche mit einer Warteschlange', lang: 'Python', code: PY, note: 'Ausgabe, so wie wir sie mit <code>python3 -I</code> erhalten haben: <code>Knopfdruecke: 9</code>, <code>Weg: [0, 5, 10, 15, 20, 17, 14, 19, 16, 13]</code>, <code>Mit +6 und -4: None</code>, <code>Haus mit 12 Stockwerken: [0, 5, 10, 7, 12, 9, 6, 11]</code>.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Beispiel 1, das Original.</strong> 9 Drücke, fünfmal hoch und viermal runter: 5 &middot; 5 &minus; 4 &middot; 3 = 13. Die Tabelle der Schichten zeigt, dass Stock 13 tatsächlich erst in der neunten Schicht auftaucht.',
          '<strong>Beispiel 2, die unmögliche Eingabe.</strong> Mit "6 hoch" und "4 runter" liefert das Programm None. Eine gute Dokumentation erklärt auch das: Beide Knöpfe ändern das Stockwerk um eine gerade Zahl, von 0 aus erreicht man also nur gerade Stockwerke, und 13 ist ungerade. Ein None ohne Begründung wäre in einer Einsendung zu wenig.',
          '<strong>Beispiel 3, ein kleineres Haus.</strong> Bei nur 13 Stockwerken (0 bis 12) und Ziel 11 sind es 7 Drücke. Der Weg ist ein anderer, weil Stock 15 und höher fehlen. So prüfen wir, ob das Programm die Grenze des Hauses wirklich beachtet.'
        ] },
        { kind: 'p', mt: true, html: '<strong>Quelltext in der Dokumentation.</strong> In eine echte Einsendung gehörte nur die Funktion <code>kuerzester_weg</code>, nicht die Ausgabezeilen; so empfiehlt es BWINF für die Teile, die den Kern des Algorithmus enthalten. Und eine Frage für die Gruppe, die wir oft stellen: Warum wäre es falsch, immer zuerst "5 hoch" zu drücken, solange das Ziel darüber liegt? Probieren Sie es von Hand aus.' }
      ]
    },
    {
      id: 'englisch',
      eyebrow: 'Unterricht auf Englisch',
      h2: 'Hilft Unterricht auf Englisch bei einem deutschen Wettbewerb?',
      lede: 'Die Aufgaben von BWINF sind auf Deutsch, die Programmiersprachen auf Englisch. Wir unterrichten auf Englisch und arbeiten mit den deutschen Begriffen aus den Aufgaben.',
      body: [
        { kind: 'p', html: 'In der Informatik ist Englisch die Sprache der Dokumentationen, Foren und Fachbücher. Wer Breitensuche als breadth-first search, Warteschlange als queue und Laufzeit als running time kennt, findet sich in jeder Bibliotheksbeschreibung zurecht. Die Vorauswahl zur Informatik-Olympiade läuft laut BWINF online in C++; spätestens dort helfen beide Sprachen.' },
        { kind: 'p', html: 'Die Mentoren arbeiten von Indien aus und unterrichten live per Video. Sie sprechen klar und ohne Eile, fragen nach, ob eine Idee angekommen ist, und stellen sich auf die Aussprache der Jugendlichen ein. Ein deutsches Fachwort mitten im Satz ist kein Problem, der Mentor ergänzt das englische.' }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Wann finden die Stunden statt?',
      lede: 'Wettbewerbsvorbereitung liegt meist am Nachmittag oder am Wochenende. Einige Beispiele mit der Uhrzeit beim Mentor:',
      body: [
        { kind: 'table', numCols: [], caption: 'Beispiele in deutscher Zeit und die passende Uhrzeit in Indien', head: ['Deutsche Zeit', 'Indien, bis 27. März 2027', 'Indien, ab 28. März 2027'], rows: [
          ['Mittwoch 14:15', '18:45', '17:45'],
          ['16:15', '20:45', '19:45'],
          ['Samstag 13:30', '18:00', '17:00'],
          ['Sonntag 09:00', '13:30', '12:30']
        ] },
        { kind: 'source', html: 'Deutschland folgt dem Einheiten- und Zeitgesetz: MEZ (UTC+1) im Winter, MESZ (UTC+2) im Sommer. Die Sommerzeit endete am 25. Oktober 2026, sie beginnt am 28. März 2027. Indien liegt das ganze Jahr bei UTC+5:30, also im Winter 4 Stunden 30 Minuten, im Sommer 3 Stunden 30 Minuten vor Deutschland. Die Zeiten sind Beispiele, keine festen Termine.' },
        { kind: 'p', mt: true, html: 'Rund um die Abgabetermine im November und im Frühjahr vereinbaren viele Jugendliche Einzelstunden, in denen wir an eigenen Übungsaufgaben die Dokumentation üben. Bei der Buchung erscheinen alle Zeiten in Ihrer Zeitzone.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Vom ersten Programm zur Einsendung',
    lede: 'Fünf Stufen, an denen wir den Stand vor einem Wettbewerb festmachen. Die Einteilung ist unsere eigene.',
    table: { caption: 'Fünf Stufen zur Wettbewerbsreife (unsere)', head: ['Stufe', 'Die oder der Jugendliche kann', 'Passender Wettbewerb'], rows: [
      ['1. Knobeln', 'ein Rätsel in Schritte zerlegen', 'Informatik-Biber'],
      ['2. Programmieren', 'Schleifen und Bedingungen sicher einsetzen', 'Jugendwettbewerb, untere Level'],
      ['3. Modellieren', 'eine Aufgabe als Zustände und Übergänge beschreiben', 'Jugendwettbewerb, obere Level, Junioraufgaben'],
      ['4. Begründen', 'erklären, warum ein Verfahren das richtige Ergebnis liefert', 'Bundeswettbewerb, 1. Runde'],
      ['5. Dokumentieren', 'Idee, Umsetzung und Beispiele so aufschreiben, dass Fremde sie prüfen können', 'Bundeswettbewerb, 2. Runde']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Fragen Sie Ihr Kind nach einer Stunde nicht, ob das Programm lief, sondern warum es richtig ist. Die Antwort zeigt die Stufe.',
      'Preise oder Runden versprechen wir nicht. Was wir zeigen können, ist der Weg von Stufe zu Stufe.'
    ] },
    right: { h3: 'Für Jugendliche', ps: [
      'Schreiben Sie die Lösungsidee auf, bevor Sie programmieren. Wenn sie in fünf Sätzen nicht passt, ist sie noch nicht fertig.',
      'Testen Sie immer eine Eingabe, für die es keine Lösung gibt. Dort zeigt sich, ob das Programm wirklich verstanden ist.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse für junge Informatikerinnen und Informatiker',
    lede: 'Alle live auf Englisch, mit festem Mentor, in der Gruppe oder einzeln.',
    bands: [
      { num: 'I', h3: 'Programmiersprachen', sub: '12 bis 18 Jahre', courses: [
        { code: 'BIV / SPRACHE / 01', slug: 'python-complete-masterclass-teens', title: 'Python für Jugendliche', blurb: 'Die meistgenutzte Sprache für Einsendungen.' },
        { code: 'BIV / SPRACHE / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java für Jugendliche', blurb: 'Objektorientiert, wie in vielen Oberstufen.' },
        { code: 'BIV / SPRACHE / 03', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ für Jugendliche', blurb: 'Die Sprache der Olympiade-Vorauswahl.' }
      ] },
      { num: 'II', h3: 'Schule und Abitur', sub: '10 bis 19 Jahre', courses: [
        { code: 'BIV / SCHULE / 01', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'Begleitung zum Pflichtfach, Klasse 5 bis 10.' },
        { code: 'BIV / SCHULE / 02', slug: 'informatik-abitur-course-java-python', title: 'Informatik Oberstufe und Abitur', blurb: 'Datenstrukturen und Automaten für die Oberstufe.' },
        { code: 'BIV / SCHULE / 03', slug: 'maths-through-coding', title: 'Mathematik mit Python', blurb: 'Mathematisches Denken im Code, 10 bis 15.' }
      ] },
      { num: 'III', h3: 'Weitere Wettbewerbe', sub: '9 bis 19 Jahre', courses: [
        { code: 'BIV / WETT / 01', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Mathematik-Olympiade und Känguru', blurb: 'Beweisen und Knobeln, eigene Aufgaben.' },
        { code: 'BIV / WETT / 02', slug: 'olympiad-competition-mathematics-mastery', title: 'Wettbewerbsmathematik', blurb: 'Kombinatorik und Zahlentheorie für Fortgeschrittene.' },
        { code: 'BIV / WETT / 03', slug: 'ib-diploma-computer-science-course', title: 'IB Computer Science', blurb: 'Für internationale Schulen in Deutschland.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Ablauf',
    h2: 'Wie die Wettbewerbsvorbereitung abläuft',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Wochentags', l: 'Nachmittags, nach Schule und Hausaufgaben.' },
      { time: 'Wochenende', l: 'Längere Sitzungen für eine ganze Übungsaufgabe.' },
      { time: 'Vor Abgaben', l: 'Einzelstunden zur Dokumentation an eigenen Aufgaben.' }
    ],
    cells: [
      { h3: 'Fester Mentor', p: 'Kennt den Stand und die Lieblingssprache.' },
      { h3: 'Eigene Aufgaben', p: 'Wir üben nur mit Aufgaben, die nicht im laufenden Wettbewerb stehen.' },
      { h3: 'Idee vor Code', p: 'Jede Lösung wird erst in Worten erklärt.' },
      { h3: 'Alte Runden', p: 'Abgeschlossene Aufgaben aus dem Archiv von BWINF als Übung.' },
      { h3: 'Ohne KI', p: 'Denken trainieren, das auch im Finale trägt.' },
      { h3: 'Zwei Formate', p: 'Fünfzehn bis zwanzig Jugendliche oder Einzelunterricht.' }
    ]
  },

  projectsH2: 'Was unsere Lernenden programmieren',
  projectsLede: 'Neben Wettbewerbsaufgaben entstehen eigene Projekte. Einige zeigen wir unten, mehr auf <a class="ag-inline-link" href="/student-labs">Student labs</a> (Englisch).',
  reviewsLede: 'Bewertungen von Familien und Lernenden auf Google, im englischen Original.',

  fees: {
    h2: 'Preise für die Wettbewerbsvorbereitung',
    lede: 'Pro Monat sind acht Live-Stunden enthalten. Die Beträge stehen hier in Euro und beruhen auf dem Referenzkurs der Europäischen Zentralbank. Gebucht wird in US-Dollar; Ihre Bank wandelt den Betrag in Euro um, deshalb kann die Zahl auf dem Kontoauszug minimal abweichen.',
    free: ['Kostenlose Probestunde', 'Einschätzung an einer eigenen Übungsaufgabe', 'Keine Karte nötig'],
    group: ['Fünfzehn bis zwanzig Jugendliche', 'Ein fester Mentor', 'Zweimal pro Woche', 'Monatlich beendbar'],
    one: ['Nur Sie und Ihr Mentor', 'Sprache und Tempo nach Wahl', 'Termine nach Absprache']
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    h2: 'Bundeswettbewerb Informatik: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein, unser Unterricht ist ausschließlich auf Englisch und immer live. Das hat einen Vorteil: Programmieren und Englisch werden zugleich trainiert, und Englisch ist die Sprache der Informatik. Die deutschen Begriffe aus den BWINF-Aufgaben nennen wir jeweils mit.' },
      { q: 'Wann ist der Einsendeschluss des 45. Bundeswettbewerbs Informatik?', a: 'Die 1. Runde läuft vom 1. September bis 23. November 2026; der Einsendeschluss ist der 23. November 2026. Die 2. Runde folgt laut BWINF Anfang 2027 bis April 2027, die 3. Runde im September 2027.' },
      { q: 'Wer darf am Bundeswettbewerb Informatik teilnehmen?', a: 'Laut BWINF Jugendliche bis 21 Jahre, die noch nicht studieren oder berufstätig sind. Für den 45. Wettbewerb müssen sie nach dem 23. November 2004 geboren sein und deutsche Staatsangehörige sein, in Deutschland wohnen oder eine anerkannte deutsche Auslandsschule besuchen.' },
      { q: 'Wie viele Aufgaben muss man lösen?', a: 'In der 1. Runde gibt es laut BWINF fünf Aufgaben und zwei Junioraufgaben, mindestens drei müssen bearbeitet werden. In der 2. Runde gibt es drei Aufgaben, von denen zwei bearbeitet werden müssen.' },
      { q: 'Darf man beim Bundeswettbewerb Informatik ChatGPT benutzen?', a: 'In den ersten beiden Runden erlaubt BWINF KI-Werkzeuge, wenn die Teilnehmenden verstehen, was sie einreichen, und die Nutzung in der Dokumentation erläutern. In der Finalrunde ist KI nicht möglich. Bei uns üben Jugendliche ohne KI, und unter 18 nutzen wir keine Werkzeuge, die für Erwachsene bestimmt sind.' },
      { q: 'Welche Programmiersprache sollte man nehmen?', a: 'BWINF schränkt die Wahl der Programmiersprache nicht ein. Wir empfehlen Python für den Einstieg, weil der Code kurz und gut lesbar ist, und Java oder C++ für alle, die später in die Olympiade-Vorauswahl wollen, die laut BWINF in C++ programmiert.' },
      { q: 'Zählt der Bundeswettbewerb für das Abitur?', a: 'Die 2. Runde kann laut BWINF als Ersatzleistung für die besondere Lernleistung im Abitur gelten; ob das möglich ist, hängt von Bundesland und Schule ab. Fragen Sie Ihre Schule, bevor die 2. Runde beginnt.' },
      { q: 'Helfen Sie bei den Aufgaben der laufenden Runde?', a: 'Nein. BWINF untersagt, vor dem Einsendeschluss Lösungsideen zu veröffentlichen, und eine Wettbewerbslösung muss von den Teilnehmenden selbst stammen. Wir unterrichten mit eigenen Aufgaben und mit abgeschlossenen Runden aus dem Archiv von BWINF.' },
      { q: 'Zu welchen Zeiten findet der Unterricht statt?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. 16:15 Uhr in Deutschland ist im Winter 20:45 Uhr in Indien.' },
      { q: 'Was kostet die Vorbereitung, und in welcher Währung zahle ich?', a: 'Sie zahlen monatlich. Die Beträge werden hier in Euro gezeigt, auf Grundlage des Referenzkurses der Europäischen Zentralbank, abgebucht wird in US-Dollar mit Umrechnung durch Ihre Bank. Die Teilnahme am Wettbewerb selbst organisiert BWINF; mit uns ist sie nicht verbunden.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weiterlesen',
    h2: 'Mehr zu Informatik und Wettbewerben',
    lede: 'Die meisten Seiten sind auf Englisch.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Unsere Übersicht für Deutschland.' },
      { href: '/bundeswettbewerb-informatik-preparation', label: 'Bundeswettbewerb Informatik preparation', p: 'Die englische Seite zum Wettbewerb, mit einer anderen Übungsaufgabe.' },
      { href: '/math-and-coding-competitions-germany', label: 'Maths and coding competitions', p: 'Alle Wettbewerbe des Schuljahres 2026/27 im Kalender.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Unterstützung im Schulfach Informatik, auf Englisch.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Learn to think, not copy AI', p: 'Selbst denken statt Antworten kopieren.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Wie unser Live-Unterricht funktioniert.' }
    ]
  },

  start: {
    h2: 'Probestunde ohne Kosten buchen',
    lede: 'In der ersten Stunde löst der Mentor mit Ihnen oder Ihrem Kind eine unserer Übungsaufgaben und schaut, wie die Lösungsidee entsteht. Danach empfehlen wir Kurs, Sprache und Format.',
    readFirst: 'Lesenswert vorab: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> und der Kurs <a class="ag-inline-link" href="/courses/german-informatics-competitions-course-biber-bwinf-bwki">Informatik-Wettbewerbe</a> (beide auf Englisch).',
    note: 'Live online mit Mentoren in Indien, nur auf Englisch. Mit BWINF oder einer Schule sind wir nicht verbunden. Am schnellsten erreichen Sie uns über WhatsApp.',
    formNote: 'Kostenlos und ohne Verpflichtung, keine Karte.'
  },

  footer: {
    cols: [
      { h4: 'Wettbewerbe', links: [
        { href: '/courses/german-informatics-competitions-course-biber-bwinf-bwki', label: 'Informatik-Wettbewerbe' },
        { href: '/courses/problem-solving-dsa-masterclass-teens', label: 'Algorithmen' },
        { href: '/courses/competitive-programming-for-teens-course', label: 'Wettbewerbsprogrammierung' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/bundeswettbewerb-informatik-preparation', label: 'BwInf auf Englisch' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Schicht für Schicht zum kürzesten Weg'
  },

  personalityCss: `
.ag-root.ag-biv .ag-hero h1 { letter-spacing: -0.015em; }
.ag-root.ag-biv .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-biv .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-biv .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-biv .ag-code-head b { letter-spacing: 0.01em; }
`,

  dossier: {
    curriculumAuthority: 'BWINF pages on the Bundeswettbewerb Informatik (overview, 45th round, FAQ, Einsenden, Teilnehmen), the Jugendwettbewerb Informatik 2027, the Informatik-Biber 2026 and the Informatik-Olympiade 2027; Einheitenzeitgesetz; read 2 and 3 November 2026. Practice problem our own.',
    localProject: 'An original lift problem (floors 0 to 20, buttons +5 and −3) documented like a BWINF entry: Lösungsidee as breadth-first search, the layer table (13 first reached after 9 presses), Python with a deque printing the path [0, 5, 10, 15, 20, 17, 14, 19, 16, 13], the impossible case +6/−4 explained by parity, and a smaller house (0 to 12, target 11, 7 presses). Lesson family: search in layers; the first time a state is reached is the fewest steps, and an unreachable target needs a reason.',
    requiredMentions: ['Weg: [0, 5, 10, 15, 20, 17, 14, 19, 16, 13]', 'Mit +6 und -4: None', 'Haus mit 12 Stockwerken: [0, 5, 10, 7, 12, 9, 6, 11]', 'Der Aufzug mit zwei Knöpfen', 'nach dem 23. November 2004 geboren', '22. Februar bis 7. März 2027', 'nur vor der Qualifikationsphase des Abiturs', 'Schicht für Schicht zum kürzesten Weg'],
    sources: [
      { claim: 'Rounds and dates of the 45th Bundeswettbewerb, eligibility up to 21, group and individual work, Studienstiftung, besondere Lernleistung, 1,790 participants.', url: 'https://bwinf.de/bundeswettbewerb/' },
      { claim: 'Seven tasks in round 1, junior tasks before the Qualifikationsphase, AI rules, no publishing before the deadline, 23 November 2026.', url: 'https://bwinf.de/bundeswettbewerb/45/' },
      { claim: 'Five tasks and two junior tasks; round 2 two of three; no restriction on language; key code only; register as a team.', url: 'https://bwinf.de/bundeswettbewerb/haeufige-fragen/' },
      { claim: 'Documentation: idea, implementation, tools, examples, key code; all given examples required.', url: 'https://bwinf.de/bundeswettbewerb/einsenden/' },
      { claim: 'Born after 23 November 2004; citizenship, residence or German school abroad.', url: 'https://bwinf.de/bundeswettbewerb/teilnehmen/' },
      { claim: 'Jugendwettbewerb 2027 rounds and Python.', url: 'https://bwinf.de/jugendwettbewerb/2027/' },
      { claim: 'IOI team from the up to 20 top of the Bundeswettbewerb; IOI 2027 Potsdam; IOI 2028 Japan.', url: 'https://bwinf.de/olympiade/2027/' }
    ],
    rejectedClaims: [
      'German-language teaching: we teach in English only, and the page says so.',
      'Any hint on the live 45th round tasks: refused; BWINF forbids publishing ideas before 23 November 2026.',
      'Whether the documentation may be written in English: not stated by BWINF on the pages read, so not claimed.',
      'Prize or round promises and any connection with BWINF: none.'
    ]
  }
};
