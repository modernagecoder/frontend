'use strict';
// Python lernen für Schüler (ag- German-language door, Germany cluster P3, row DE061, alloc code pls, accent #187370).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live in English only, matching the learner's pace and accent; the capsule says "auf Englisch".
// Formal "Sie" throughout (pupils and parents). Pages show euro; checkout charges USD.
// Spine: Python as the pupil's language. (1) Where Python meets German school and competitions in 2026/27: Sachsen allows Python 3
// documentation and a computer in part B of the written LK Informatik Abitur, Bayern and NRW write on paper without a computer,
// and BWINF opens the Jugendwettbewerb rounds 1 and 2 to Python from 2027; (2) why Python suits school (python.org FAQ);
// (3) the most useful skill for a pupil: reading Python's error message from the bottom up, with an original example and its real
// traceback; (4) the house rules of Python (PEP 8, PEP 20) as school habits; (5) a learning path by Klasse; (6) times.
// Sources, raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/python-lernen-fuer-schueler/ (fetched 2 and 3 Nov 2026):
//  GI Informatik-Monitor 2026/27, Sachsen: "Die schriftlichen Abiturprüfungsaufgaben im Fach Leistungskurs Informatik werden zentral
//   erstellt. Die Prüfungsaufgaben enthalten im verbindlichen Prüfungsteil B eine oder mehrere Aufgaben mit praktischem Anteil.
//   Zugelassene Hilfsmittel sind ... in Prüfungsteil B: ... Dokumentationen für SQL und Python 3 und Java sowie ein für die Prüfung
//   zugelassener Computer mit entsprechender Umgebung." Sachsen Sek I: "jeweils einstündig in den Jahrgangsstufen 7 bis 10".
//   Bayern: "Programmieraufgaben auf Papier, jedoch keine praktischen Anteile am Rechner"; NRW: "Der Einsatz eines Computers ist für
//   die Bearbeitung der schriftlich Abituraufgaben nicht vorgesehen."
//  BWINF Jugendwettbewerb 2026 page: "Ab 2027 können die Aufgaben der 1. und 2. Runde neben Blockly auch in Python bearbeitet werden.";
//   "1. Runde: 22. Februar bis 7. März 2027"; "2. Runde: 12. bis 25. April 2027"; "3. Runde: 1. September bis 15. November 2027".
//  docs.python.org General FAQ: "During the 1989 Christmas holidays, I had a lot of time on my hand, so I decided to give it a try."
//   (Guido van Rossum, at CWI); tutorial "Errors and Exceptions": "The last line of the error message indicates what happened.";
//   "The preceding part of the error message shows the context where the exception occurred, in the form of a stack traceback."
//  PEP 8: "Use 4 spaces per indentation level."; "Limit all lines to a maximum of 79 characters."; "Function names should be lowercase,
//   with words separated by underscores as necessary to improve readability." PEP 20: "Readability counts."; "Errors should never pass silently."
//  Time: EinhZeitG; summer time ended 25 Oct 2026, begins 28 Mar 2027.
// Our own example (python3 -I, Python 3.14, 3 Nov 2026): laufzeiten.py prints "Aylin 12.2", "Ben 13.1", then a traceback ending
// "ZeroDivisionError: division by zero" from line 2 in mittelwert, called from line 6 in bericht, called from line 9; the fixed version
// prints "Clara noch keine Zeit". Path in the traceback shortened to the file name on the page.
// Lesson family: read a traceback from the bottom up, then guard the case that caused it (an empty list).

const { DE } = require('../../scripts/nl/lib/market-de');

const PY = [
  'def mittelwert(zeiten):',
  '    return sum(zeiten) / len(zeiten)',
  '',
  'def bericht(klasse):',
  '    for name, zeiten in klasse.items():',
  '        print(name, round(mittelwert(zeiten), 1))',
  '',
  "klasse_8b = {'Aylin': [12.4, 11.9], 'Ben': [13.1], 'Clara': []}",
  'bericht(klasse_8b)'
].join('\n');

const TRACE = [
  'Aylin 12.2',
  'Ben 13.1',
  'Traceback (most recent call last):',
  '  File "laufzeiten.py", line 9, in <module>',
  '    bericht(klasse_8b)',
  '  File "laufzeiten.py", line 6, in bericht',
  '    print(name, round(mittelwert(zeiten), 1))',
  '  File "laufzeiten.py", line 2, in mittelwert',
  '    return sum(zeiten) / len(zeiten)',
  'ZeroDivisionError: division by zero'
].join('\n');

const PY_FIX = [
  'def mittelwert(zeiten):',
  '    if not zeiten:',
  '        return None',
  '    return sum(zeiten) / len(zeiten)',
  '',
  'def bericht(klasse):',
  '    for name, zeiten in klasse.items():',
  '        wert = mittelwert(zeiten)',
  '        if wert is None:',
  "            print(name, 'noch keine Zeit')",
  '        else:',
  '            print(name, round(wert, 1))',
  '',
  "klasse_8b = {'Aylin': [12.4, 11.9], 'Ben': [13.1], 'Clara': []}",
  'bericht(klasse_8b)'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'Python lernen für Schüler' },
  slug: 'python-lernen-fuer-schueler',
  code: 'pls',
  accent: '#187370',
  accentRationale: 'Python lernen für Schüler: a clear sea teal #187370, a cooler cousin of the petrol on the Informatik-Nachhilfe page, chosen for a page about one language; contrast 4.58 on the paper #FBF8F2 and at or above 4.5 on all three paper tints (allocated minimum 4.58)',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Python lernen für Schüler (auf Englisch)',
  title: 'Python lernen für Schüler: live online, auf Englisch',
  description: 'Python lernen für Schülerinnen und Schüler: live online auf Englisch, passend zu Informatik, Abitur und Jugendwettbewerb 2027, mit dem Lesen von Fehlermeldungen.',
  ogDescription: 'Python für die Schule, live auf Englisch: wo Python im Abitur und im Jugendwettbewerb Informatik 2027 vorkommt, warum Python gut zur Schule passt, und wie man eine Fehlermeldung von unten nach oben liest.',
  twitterDescription: 'Python für Schüler, live auf Englisch: Abitur in Sachsen, Jugendwettbewerb 2027 und Fehlermeldungen richtig lesen.',
  pageName: 'Python lernen für Schüler',
  webPageDescription: 'Ein Leitfaden für Schülerinnen und Schüler in Deutschland, die Python lernen möchten: Python im Informatik-Abitur nach dem Informatik-Monitor 2026/27, Python im Jugendwettbewerb Informatik ab 2027, die Regeln aus PEP 8 und PEP 20 und ein eigenes Beispiel zum Lesen von Fehlermeldungen.',
  courseDescription: 'Live-Online-Python-Unterricht für Schülerinnen und Schüler der Klassen 7 bis 13 in ganz Deutschland, ausschließlich auf Englisch: von den Grundlagen bis zu Oberstufe, Abitur und Wettbewerben, in der Gruppe oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Python für Schüler',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#schule', label: 'Schule' },
    { href: '#fehler', label: 'Fehler' },
    { href: '#regeln', label: 'Regeln' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Deutschland &middot; Python &middot; Klasse 7 bis 13',
  h1: 'Python lernen für Schüler, live auf Englisch',
  lede: 'Python ist die Sprache, mit der viele Schülerinnen und Schüler heute zum ersten Mal richtig programmieren, und sie taucht an immer mehr Stellen der Schullaufbahn auf: im Informatikunterricht, in einzelnen Abiturprüfungen und ab 2027 auch im Jugendwettbewerb Informatik. Diese Seite zeigt, wo genau, warum Python für die Schule gut passt, und übt die eine Fähigkeit, die in keinem Schulbuch genug Platz bekommt: eine Fehlermeldung richtig zu lesen.',
  secondaryCta: { href: '#fehler', label: 'Fehlermeldungen lesen' },
  wa: 'Hallo Modern Age Coders, ich möchte als Schülerin oder Schüler Python lernen, live auf Englisch. Gibt es eine kostenlose Probestunde?',
  heroNote: 'Live-Unterricht seit 2020 &middot; mehr als 10.000 Lernende weltweit &middot; auf Englisch, mit einem festen Mentor',
  spec: [
    ['Klassen', '7 bis 13, alle Schularten'],
    ['Sprache', 'Python 3, später auf Wunsch Java'],
    ['Schwerpunkt', 'Selbst schreiben und Fehler finden'],
    ['Gruppe', 'Fünfzehn bis zwanzig, oder einzeln'],
    ['Passt zu', 'Informatik, Abitur, Wettbewerben'],
    ['Probestunde', 'Kostenlos']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Python lernen für Schüler heißt bei Modern Age Coders: Unterricht in Echtzeit über Video, gehalten auf Englisch von einem Mentor in Indien, der jede Woche derselbe ist und sich nach Ihrer Geschwindigkeit und Aussprache richtet. Schülerinnen und Schüler der Klassen 7 bis 13 lernen Python von den Grundlagen bis zu Datenstrukturen, passend zum Informatikunterricht, zum Abitur und zum Jugendwettbewerb Informatik. Unterrichtet wird in einer Gruppe von fünfzehn bis zwanzig Lernenden oder einzeln.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Python-Kurse für die Schulzeit',
    lede: 'Der vollständige Python-Kurs für Jugendliche, der Oberstufenkurs mit Python oder Java und der Kurs für die Informatik-Wettbewerbe.',
    items: [
      { course: 'python-complete-masterclass-teens', code: 'PLS / 01', title: 'Python für Jugendliche', alt: 'Kursbild Python für Jugendliche', note: 'Für 13 bis 18, ganz ohne Vorwissen. Vom ersten print bis zu Klassen, Dateien und eigenen Projekten.' },
      { course: 'informatik-abitur-course-java-python', code: 'PLS / 02', title: 'Informatik in der Oberstufe', alt: 'Kursbild Informatik Abitur mit Python und Java', note: 'Ab etwa 16 Jahren. Datenstrukturen, Objektorientierung, SQL und Automaten in Python oder Java, dazu Aufgaben auf Papier.' },
      { course: 'german-informatics-competitions-course-biber-bwinf-bwki', code: 'PLS / 03', title: 'Wettbewerbe in Informatik', alt: 'Kursbild Informatik-Wettbewerbe', note: 'Von etwa 9 bis 19 Jahren. Eigene Übungsaufgaben im Stil von Biber, Jugendwettbewerb und Bundeswettbewerb, gelöst in Python.' }
    ]
  },

  sections: [
    {
      id: 'schule',
      eyebrow: 'Python in der Schullaufbahn',
      h2: 'Wo kommt Python in Schule, Abitur und Wettbewerben vor?',
      lede: 'An mehr Stellen, als viele denken, aber nicht überall gleich. Die Bundesländer entscheiden selbst, welche Sprache im Unterricht verwendet wird; oft ist es Python, manchmal Java. Die Tabelle sammelt Stellen, die in Quellen für 2026/27 ausdrücklich beschrieben sind.',
      body: [
        { kind: 'table', numCols: [], caption: 'Python und Programmieren in der Prüfung, 2026/27 und 2027', head: ['Wo', 'Was gilt', 'Quelle'], rows: [
          ['Sachsen, Leistungskurs Informatik, schriftliches Abitur', 'Zentral gestellt; im Prüfungsteil B Aufgaben mit praktischem Anteil, erlaubt sind Dokumentationen für SQL, Python 3 und Java und ein zugelassener Computer', 'Informatik-Monitor 2026/27'],
          ['Bayern, schriftliches Informatik-Abitur', 'Zentral gestellt; große Teile sind Programmieraufgaben auf Papier, ohne praktische Anteile am Rechner', 'Informatik-Monitor 2026/27'],
          ['Nordrhein-Westfalen, schriftliches Informatik-Abitur', 'Zentral gestellt; ein Computer ist für die Bearbeitung nicht vorgesehen', 'Informatik-Monitor 2026/27'],
          ['Jugendwettbewerb Informatik 2027, 1. und 2. Runde', 'Aufgaben dürfen neben Blockly erstmals auch in Python bearbeitet werden', 'BWINF'],
          ['Jugendwettbewerb Informatik 2027, Termine', '1. Runde vom 22. Februar bis 7. März 2027, 2. Runde vom 12. bis 25. April 2027, 3. Runde vom 1. September bis 15. November 2027', 'BWINF']
        ] },
        { kind: 'source', html: 'Grundlage sind die Seiten zu Sachsen, Bayern und Nordrhein-Westfalen im Informatik-Monitor 2026/27 der GI; Bundesweite Informatikwettbewerbe, Seite zum Jugendwettbewerb Informatik 2026 mit den Terminen für 2027. Gelesen am 2. und 3. November 2026. Modern Age Coders ist weder mit der GI noch mit BWINF verbunden.' },
        { kind: 'two', mt: true,
          leftH3: 'Was das für das Lernen heißt',
          left: [
            'Wer in Sachsen den Leistungskurs Informatik wählt, programmiert im Abitur unter Umständen am Rechner und darf die Python-Dokumentation benutzen. Wer in Bayern oder Nordrhein-Westfalen schreibt, muss Code ohne Computer lesen und schreiben können. Beides verlangt dasselbe Fundament: Man muss wissen, was jede Zeile tut, ohne es ausprobieren zu müssen.',
            'In Sachsen beginnt der Pflichtunterricht in Informatik laut Monitor schon in Klasse 7, mit einer Wochenstunde bis Klasse 10. Bis zum Leistungskurs bleiben also mehrere Jahre, in denen Python nebenher wachsen kann.'
          ],
          rightH3: 'Was wir dabei tun',
          right: [
            'Wir unterrichten neben der Schule und richten uns nach der Sprache, die Ihre Schule verwendet. Wir vergeben keine Noten, und für Abitur und Zeugnis zählt allein der Unterricht an Ihrer Schule.',
            'Für den Jugendwettbewerb 2027 üben wir mit eigenen Aufgaben in Python. Die Originalaufgaben früherer Runden stellt BWINF selbst zum Üben bereit; angemeldet wird man über eine Lehrkraft der eigenen Schule.'
          ] }
      ]
    },
    {
      id: 'warum',
      eyebrow: 'Warum Python',
      h2: 'Ist Python die richtige erste Programmiersprache für Schüler?',
      lede: 'Für die meisten ja. Python liest sich fast wie Englisch, braucht wenig Zeichen drumherum und zwingt durch die Einrückung zu ordentlichem Code. Python ist dabei älter, als viele Schülerinnen und Schüler glauben: Laut der offiziellen Python-FAQ begann Guido van Rossum in den Weihnachtsferien 1989 damit, am Forschungsinstitut CWI in Amsterdam.',
      body: [
        { kind: 'table', numCols: [], caption: 'Dieselbe Aufgabe, zwei Sprachen (unser Beispiel)', head: ['Aufgabe', 'Python', 'Java'], rows: [
          ['Hallo sagen', '<code>print("Hallo")</code>', '<code>System.out.println("Hallo");</code> in einer Klasse mit <code>main</code>-Methode'],
          ['Eine Liste anlegen', '<code>zahlen = [3, 1, 4]</code>', '<code>int[] zahlen = {3, 1, 4};</code>'],
          ['Einen Block markieren', 'Einrückung mit vier Leerzeichen', 'Geschweifte Klammern'],
          ['Typ einer Variable', 'ergibt sich beim Ausführen', 'muss vorher angegeben werden']
        ] },
        { kind: 'p', mt: true, html: 'Java hat seine Stärken, gerade in der Oberstufe mancher Länder, und wer Python gut kann, lernt Java später schneller. Der umgekehrte Weg ist für die meisten Zwölf- bis Vierzehnjährigen mühsamer, weil Java viel Schreibarbeit verlangt, bevor das erste Programm überhaupt etwas tut.' }
      ]
    },
    {
      id: 'fehler',
      tint: 'tint',
      eyebrow: 'Die wichtigste Fähigkeit',
      h2: 'Wie liest man eine Python-Fehlermeldung richtig?',
      lede: 'Von unten nach oben. Das offizielle Python-Tutorial sagt es so: Die letzte Zeile der Fehlermeldung zeigt, was passiert ist; der Teil davor zeigt den Zusammenhang, in Form eines Tracebacks. Das folgende Beispiel ist unser eigenes: Ein Programm berechnet für die Klasse 8b die durchschnittliche Zeit im 100-Meter-Lauf, und für eine Schülerin gibt es noch keine Messung.',
      body: [
        { kind: 'code', label: 'laufzeiten.py', lang: 'Python', code: PY, note: 'Aufgabe: Was erscheint, bevor das Programm abbricht, und in welcher Zeile liegt die Ursache? Erst überlegen, dann weiterlesen.' },
        { kind: 'code', label: 'Die Ausgabe', lang: 'Text', code: TRACE, note: 'So hat Python 3 das Programm bei uns ausgeführt. Den langen Dateipfad haben wir auf den Dateinamen gekürzt, und neuere Python-Versionen setzen unter manche Zeilen zusätzlich Markierungen aus <code>~</code> und <code>^</code>, die auf die genaue Stelle zeigen.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Den Traceback von unten nach oben lesen', head: ['Lesen Sie', 'Dort steht', 'Das bedeutet'], rows: [
          ['zuerst die letzte Zeile', '<code>ZeroDivisionError: division by zero</code>', 'Es wurde durch null geteilt.'],
          ['dann die Zeile darüber', 'Zeile 2 in <code>mittelwert</code>', 'Hier steht die Division <code>/ len(zeiten)</code>.'],
          ['dann weiter nach oben', 'Zeile 6 in <code>bericht</code>', 'Von hier wurde <code>mittelwert</code> aufgerufen, gerade für Clara.'],
          ['zuletzt ganz oben', 'Zeile 9', 'Hier begann alles, mit dem Aufruf von <code>bericht</code>.']
        ] },
        { kind: 'p', mt: true, html: 'Die Ursache ist nicht Zeile 2, sondern die leere Liste von Clara: <code>len([])</code> ist 0. Aylin und Ben wurden noch richtig ausgegeben, deshalb sieht der Fehler auf den ersten Blick rätselhaft aus. Die Lösung ist, den Sonderfall ausdrücklich zu behandeln, statt ihn zu verstecken. PEP 20, die Grundsätze von Python, sagt dazu: "Errors should never pass silently."' },
        { kind: 'code', label: 'Die verbesserte Fassung', lang: 'Python', code: PY_FIX, note: 'Ausgabe, von uns ausgeführt: <code>Aylin 12.2</code>, <code>Ben 13.1</code>, <code>Clara noch keine Zeit</code>. Das Programm sagt jetzt offen, dass eine Messung fehlt, statt abzustürzen oder eine falsche Null zu zeigen.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Unten anfangen.</strong> Die letzte Zeile nennt die Art des Fehlers. Lesen Sie sie laut vor, bevor Sie irgendetwas ändern.',
          '<strong>Nach oben wandern.</strong> Jede Zeile darüber ist ein Schritt zurück auf dem Weg, den das Programm genommen hat.',
          '<strong>Nach dem Wert fragen.</strong> Welcher Wert war in diesem Moment im Spiel? Hier war es eine leere Liste.',
          '<strong>Den Fall behandeln.</strong> Fangen Sie den Sonderfall dort ab, wo er entsteht, und lassen Sie das Programm sagen, was los ist.'
        ] }
      ]
    },
    {
      id: 'regeln',
      eyebrow: 'Gute Gewohnheiten',
      h2: 'Welche Regeln für sauberen Python-Code sollten Schüler kennen?',
      lede: 'Python hat eine eigene, offizielle Stilrichtlinie, PEP 8, und eine kurze Sammlung von Grundsätzen, PEP 20. Beide sind auf Englisch und frei lesbar. Ein paar dieser Regeln lohnen sich von der ersten Stunde an, weil sie Code für Lehrkräfte, Prüfer und das eigene spätere Ich lesbar machen.',
      body: [
        { kind: 'table', numCols: [], caption: 'Fünf Regeln aus PEP 8 und PEP 20, und warum sie in der Schule helfen', head: ['Regel', 'Wortlaut', 'In der Schule'], rows: [
          ['Einrückung', '"Use 4 spaces per indentation level." (PEP 8)', 'Wer immer vier Leerzeichen nimmt, sieht sofort, was zur Schleife gehört.'],
          ['Zeilenlänge', '"Limit all lines to a maximum of 79 characters." (PEP 8)', 'Kurze Zeilen lassen sich auch auf Papier sauber abschreiben.'],
          ['Namen', 'Funktionsnamen in Kleinbuchstaben, Wörter durch Unterstriche getrennt (PEP 8)', '<code>mittelwert</code> und <code>klasse_8b</code> statt <code>MW</code> und <code>x</code>.'],
          ['Lesbarkeit', '"Readability counts." (PEP 20)', 'Ein Programm wird öfter gelesen als geschrieben, auch im Abitur.'],
          ['Fehler', '"Errors should never pass silently." (PEP 20)', 'Ein Sonderfall wird gemeldet, nicht verschluckt, wie bei Clara.']
        ] },
        { kind: 'source', html: 'Quellen: PEP 8, "Style Guide for Python Code", und PEP 20, "The Zen of Python", auf peps.python.org, gelesen am 3. November 2026. Die Zitate sind wörtlich, die rechte Spalte ist unsere Einordnung. Den vollständigen Text von PEP 20 zeigt jede Python-Installation mit dem Befehl <code>import this</code>.' }
      ]
    },
    {
      id: 'weg',
      eyebrow: 'Lernweg',
      h2: 'In welcher Reihenfolge lernt man Python als Schüler am sinnvollsten?',
      lede: 'Unsere Reihenfolge folgt dem, was Schülerinnen und Schüler im Unterricht und in Prüfungen brauchen. Die Klassen sind Richtwerte, kein Muss.',
      body: [
        { kind: 'table', numCols: [], caption: 'Python von Klasse 7 bis zum Abitur (unser Lernweg)', head: ['Etwa Klasse', 'Thema', 'Woran man merkt, dass es sitzt'], rows: [
          ['7 und 8', 'Ausgabe, Variablen, Eingabe, Bedingungen', 'Ein kleines Quiz mit if und else läuft ohne Hilfe.'],
          ['8 und 9', 'Schleifen, Listen, erste Fehlermeldungen', 'Ein Traceback wird von unten nach oben gelesen.'],
          ['9 und 10', 'Funktionen, Wörterbücher, Dateien', 'Ein Programm ist in sinnvolle Funktionen zerlegt.'],
          ['Einführungsphase', 'Klassen und Objekte, Tests', 'Eine eigene Klasse mit Methoden wird getestet.'],
          ['Qualifikationsphase', 'Datenstrukturen, Suchen und Sortieren, SQL', 'Laufzeit und Randfälle werden begründet, auch auf Papier.']
        ] },
        { kind: 'p', mt: true, html: 'Wer früh mit Python beginnt, hat in der Oberstufe Luft für die schwierigen Themen. Wer spät beginnt, holt die Grundlagen bei uns in einigen Monaten nach; der Mentor sieht in der Probestunde, wo Sie stehen.' }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Wann findet der Python-Unterricht statt?',
      lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
      body: [
        { kind: 'table', numCols: [], caption: 'Beispieltermine, deutsche und indische Uhrzeit', head: ['Deutsche Zeit', 'Indische Zeit im Winter (bis 27. März 2027)', 'Indische Zeit im Sommer (ab 28. März 2027)'], rows: [
          ['Dienstag 15:45', '20:15', '19:15'],
          ['Donnerstag 16:40', '21:10', '20:10'],
          ['Samstag 12:00', '16:30', '15:30']
        ] },
        { kind: 'source', html: 'Das Einheiten- und Zeitgesetz legt für Deutschland im Winter die MEZ (UTC+1) und im Sommer die MESZ (UTC+2) fest. Seit dem 25. Oktober 2026 gilt Winterzeit, ab dem 28. März 2027 wieder Sommerzeit. Indien bleibt bei UTC+5:30 und ist im Winter vier Stunden dreißig Minuten, im Sommer drei Stunden dreißig Minuten voraus. Die Termine sind Beispiele, keine festen Gruppen.' },
        { kind: 'p', mt: true, html: 'Vor Klausuren oder vor einer Wettbewerbsrunde lassen sich zusätzliche Einzelstunden buchen. Bei der Buchung sehen Sie jede Uhrzeit in Ihrer eigenen Zeitzone.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Fünf Stufen bis zum sicheren Python',
    lede: 'Unsere eigenen Stufen, an denen wir den Stand von Schülerinnen und Schülern festmachen.',
    table: { caption: 'Fünf Stufen in Python (unsere)', head: ['Stufe', 'Typischer Zeitraum', 'Sie können'], rows: [
      ['1. Schreiben', 'erste Wochen', 'kurze Programme mit Variablen und Bedingungen schreiben'],
      ['2. Lesen', 'bis Monat drei', 'vorhersagen, was ein fremdes Programm ausgibt'],
      ['3. Reparieren', 'bis Monat fünf', 'einen Traceback lesen und die Ursache finden'],
      ['4. Gliedern', 'bis Monat acht', 'ein Problem in Funktionen und Klassen zerlegen'],
      ['5. Begründen', 'ab etwa einem Jahr', 'Randfälle und Laufzeit erklären, auch ohne Computer']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Die dritte Stufe ist der Wendepunkt. Wer Fehlermeldungen lesen kann, braucht viel seltener Hilfe und arbeitet zu Hause selbstständig weiter.',
      'Nach den Stunden bekommen Sie eine knappe Notiz, was geübt wurde.'
    ] },
    right: { h3: 'Für Schülerinnen und Schüler', ps: [
      'Bei jedem Absturz zuerst die letzte Zeile laut lesen, dann eine Zeile nach oben.',
      'Testen Sie jede Funktion auch mit einer leeren Liste. Dort steckt erstaunlich oft der Fehler.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse rund um Python',
    lede: 'Live, auf Englisch, mit festem Mentor, in der Gruppe oder einzeln.',
    bands: [
      { num: 'I', h3: 'Python anwenden', sub: '13 bis 18 Jahre', courses: [
        { code: 'PLS / ANWENDEN / 01', slug: 'data-science-course-for-teens-python-data', title: 'Data Science mit Python', blurb: 'Daten auswerten, ab 14, mit Python-Grundlagen.' },
        { code: 'PLS / ANWENDEN / 02', slug: 'ai-ml-masterclass-teens', title: 'KI und maschinelles Lernen', blurb: 'Eigene Modelle trainieren und prüfen.' },
        { code: 'PLS / ANWENDEN / 03', slug: 'mysql-mastery-for-teens', title: 'Datenbanken und SQL', blurb: 'Abfragen wie in der Qualifikationsphase.' }
      ] },
      { num: 'II', h3: 'Tiefer denken', sub: '13 bis 18 Jahre', courses: [
        { code: 'PLS / DENKEN / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithmen und Datenstrukturen', blurb: 'Suchen, Sortieren, Bäume und Graphen.' },
        { code: 'PLS / DENKEN / 02', slug: 'competitive-programming-for-teens-course', title: 'Wettbewerbsprogrammierung', blurb: 'Schneller und sicherer lösen.' },
        { code: 'PLS / DENKEN / 03', slug: 'maths-through-coding', title: 'Mathe trifft Python', blurb: 'Gleichungen und Muster programmieren, ab 10.' }
      ] },
      { num: 'III', h3: 'Davor und daneben', sub: '9 bis 18 Jahre', courses: [
        { code: 'PLS / DANEBEN / 01', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'Begleitung für Klasse 5 bis 10.' },
        { code: 'PLS / DANEBEN / 02', slug: 'python-ai-kids-masterclass', title: 'Python und KI für Kinder', blurb: 'Der spielerische Einstieg für Jüngere.' },
        { code: 'PLS / DANEBEN / 03', slug: 'java-programming-masterclass-for-teens', title: 'Java für Jugendliche', blurb: 'Falls Ihre Oberstufe Java verwendet.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Ablauf',
    h2: 'So läuft der Python-Unterricht ab',
    lede: 'Zwei Live-Termine in der Woche, je eine Stunde, mit demselben Mentor. Jede Stunde beginnt mit einem Programm, das Sie zuerst lesen und dann selbst weiterschreiben.',
    slots: [
      { time: 'Nachmittags', l: 'Nach dem Unterricht, unter der Woche.' },
      { time: 'Samstag', l: 'Mittags, mit Zeit für längere Aufgaben.' },
      { time: 'Einzeln', l: 'Fester Termin, auch vor Klausuren.' }
    ],
    cells: [
      { h3: 'Erst lesen', p: 'Jede Stunde startet mit fremdem Code.' },
      { h3: 'Dann schreiben', p: 'Sie tippen selbst, der Mentor fragt nach.' },
      { h3: 'Fehler üben', p: 'Absichtlich kaputte Programme reparieren.' },
      { h3: 'Auf Papier', p: 'Für Länder, in denen das Abitur ohne Rechner läuft.' },
      { h3: 'Englisch', p: 'Die Sprache der Fehlermeldungen, gleich mitgelernt.' },
      { h3: 'Gruppe oder allein', p: 'Fünfzehn bis zwanzig Lernende oder Einzelunterricht.' }
    ]
  },

  projectsH2: 'Projekte von Lernenden',
  projectsLede: 'Mit Python entstehen Spiele, kleine Datenprojekte und Werkzeuge für die Schule. Eine Auswahl unten, weitere auf <a class="ag-inline-link" href="/student-labs">Student labs</a> (auf Englisch).',
  reviewsLede: 'Google-Bewertungen von Familien und Lernenden, nicht übersetzt.',

  fees: {
    h2: 'Preise für Schülerinnen und Schüler in Deutschland',
    lede: 'Es gibt eine Monatsgebühr für acht Live-Stunden. Angezeigt wird sie in Euro auf Grundlage des Referenzkurses der Europäischen Zentralbank, abgebucht in US-Dollar. Weil Ihre Bank den Wechsel vornimmt, kann der gebuchte Betrag minimal vom angezeigten abweichen.',
    free: ['Eine kostenlose Probestunde', 'Einstufung an einem kleinen Programm', 'Ohne Kartendaten'],
    group: ['Fünfzehn bis zwanzig Lernende', 'Ein fester Mentor', 'Zwei Stunden pro Woche', 'Monatlich kündbar'],
    one: ['Nur Sie und der Mentor', 'Ihr Schulstoff, Ihr Tempo', 'Termine nach Absprache']
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    h2: 'Python lernen für Schüler: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein, der Unterricht ist live und nur auf Englisch. Gerade bei Python ist das ein Vorteil: Sie lernen Programmieren und Englisch zugleich, und die Fehlermeldungen von Python, die Dokumentation und PEP 8 sind ohnehin englisch. Der Mentor spricht deutlich und passt sich Ihrem Tempo und Ihrer Aussprache an.' },
      { q: 'Ab welcher Klasse kann man Python lernen?', a: 'Die meisten Schülerinnen und Schüler beginnen bei uns in Klasse 7 oder 8. Wer jünger ist, startet oft mit Scratch oder unserem Kurs Python und KI für Kinder und wechselt später.' },
      { q: 'Kommt Python im Abitur vor?', a: 'Das hängt vom Land ab. Laut Informatik-Monitor 2026/27 sind im schriftlichen Leistungskurs-Abitur Informatik in Sachsen im Prüfungsteil B Dokumentationen für SQL, Python 3 und Java sowie ein zugelassener Computer erlaubt. In Bayern und Nordrhein-Westfalen wird das schriftliche Informatik-Abitur ohne Computer geschrieben.' },
      { q: 'Darf man im Jugendwettbewerb Informatik Python benutzen?', a: 'Ab 2027 ja. Laut BWINF können die Aufgaben der 1. und 2. Runde neben Blockly auch in Python bearbeitet werden. Die 1. Runde 2027 läuft vom 22. Februar bis 7. März 2027; angemeldet wird über die Schule.' },
      { q: 'Python oder Java: was soll ich lernen?', a: 'Für den Einstieg meist Python, weil es weniger Schreibarbeit verlangt. Verwendet Ihre Oberstufe Java, lernen wir rechtzeitig auch Java; mit Python-Grundlagen geht das deutlich schneller.' },
      { q: 'Hilft der Kurs bei Informatik-Hausaufgaben?', a: 'Wir erklären den Stoff und üben mit ähnlichen Aufgaben, machen aber keine Hausaufgaben für Sie. Ziel ist, dass Sie die Aufgabe danach selbst lösen und erklären können.' },
      { q: 'Wird im Unterricht KI zum Programmieren benutzt?', a: 'Nein, Sie schreiben Ihren Code selbst. Wer Fehlermeldungen lesen und Programme erklären kann, kann später auch die Vorschläge von KI-Werkzeugen prüfen. Werkzeuge, die erst ab 18 erlaubt sind, empfehlen wir Schülerinnen und Schülern nicht.' },
      { q: 'Wann sind die Stunden?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. Ein Termin am Samstag um 12:00 Uhr ist im Winter 16:30 Uhr in Indien.' },
      { q: 'Was brauche ich dafür?', a: 'Einen Laptop oder Computer mit Tastatur, Internet und ein Headset. Python und der Editor sind kostenlos; die Installation erledigen wir gemeinsam in der ersten Stunde.' },
      { q: 'Wie wird bezahlt?', a: 'Monatlich. Die Gebühr erscheint hier in Euro zum Referenzkurs der EZB, abgebucht wird in US-Dollar, und Ihre Bank rechnet um. Die Probestunde kostet nichts.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weitere Seiten',
    h2: 'Weiterlesen',
    lede: 'Mehr zu Informatik und Programmieren in Deutschland, teils auf Englisch.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Unsere Übersicht für Deutschland.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Hilfe im Schulfach, Klasse 5 bis 13.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by state', p: 'Alle 16 Länder im Überblick.' },
      { href: '/abitur-computer-science-in-english', label: 'Abitur computer science', p: 'Das Informatik-Abitur, auf Englisch erklärt.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Think, not copy AI', p: 'Selbst denken statt abschreiben.' },
      { href: '/courses', label: 'All courses', p: 'Jeder Kurs mit Lehrplan.' }
    ]
  },

  start: {
    h2: 'Kostenlose Python-Probestunde buchen',
    lede: 'In der Probestunde lesen Sie mit dem Mentor ein kurzes Programm, sagen voraus, was es tut, und reparieren einen kleinen Fehler. Danach empfehlen wir den passenden Einstieg.',
    readFirst: 'Vorab: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> zeigt unseren Live-Unterricht, <a class="ag-inline-link" href="/courses">All courses</a> alle Lehrpläne (beide auf Englisch).',
    note: 'Der Unterricht kommt live von Mentoren in Indien und läuft nur auf Englisch. Per WhatsApp antworten wir am schnellsten.',
    formNote: 'Kostenlos und unverbindlich; unter 18 bitte mit Wissen der Eltern.'
  },

  footer: {
    cols: [
      { h4: 'Python', links: [
        { href: '/courses/python-complete-masterclass-teens', label: 'Python für Jugendliche' },
        { href: '/courses/informatik-abitur-course-java-python', label: 'Informatik Abitur' },
        { href: '/courses/german-informatics-competitions-course-biber-bwinf-bwki', label: 'Wettbewerbe' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/abitur-computer-science-in-english', label: 'Informatik-Abitur' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Die letzte Zeile zuerst lesen'
  },

  personalityCss: `
.ag-root.ag-pls .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-pls .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-pls .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-pls .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-pls .ag-code-head b { letter-spacing: 0.02em; }
`,

  dossier: {
    curriculumAuthority: 'GI Informatik-Monitor 2026/27 (Sachsen, Bayern, Nordrhein-Westfalen); BWINF Jugendwettbewerb 2026 page with 2027 dates; docs.python.org General FAQ and tutorial chapter Errors and Exceptions; PEP 8 and PEP 20; Einheiten- und Zeitgesetz. Read 2 and 3 November 2026. Example code our own.',
    localProject: 'Read it from the bottom: an original Python program averaging 100-metre times for a Klasse 8b prints two pupils and then crashes with ZeroDivisionError for a pupil with an empty list; the traceback is read from line 2 up to line 9, and the fix reports "Clara noch keine Zeit". Run with python3 -I. Lesson family: read a traceback from the bottom up, then guard the empty case.',
    requiredMentions: ['Wo kommt Python in Schule, Abitur und Wettbewerben vor?', 'Clara noch keine Zeit', 'Den Traceback von unten nach oben lesen', 'Dokumentationen für SQL, Python 3 und Java', 'neben Blockly erstmals auch in Python', '1. Runde vom 22. Februar bis 7. März 2027', 'in den Weihnachtsferien 1989', 'Use 4 spaces per indentation level.', 'Die letzte Zeile zuerst lesen'],
    sources: [
      { claim: 'Sachsen LK Informatik Abitur part B aids: Python 3, SQL and Java documentation and a computer; Sachsen grades 7 to 10.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/sachsen' },
      { claim: 'Jugendwettbewerb Informatik: Python allowed in rounds 1 and 2 from 2027; 2027 dates.', url: 'https://bwinf.de/jugendwettbewerb/2026/' },
      { claim: 'How to read the last line and the traceback.', url: 'https://docs.python.org/3/tutorial/errors.html' },
      { claim: 'Python begun in the 1989 Christmas holidays at CWI.', url: 'https://docs.python.org/3/faq/general.html' },
      { claim: 'PEP 8 indentation, line length, names; PEP 20 principles.', url: 'https://peps.python.org/pep-0008/' }
    ],
    rejectedClaims: [
      'German-language teaching: English only.',
      'Python as the Abitur language in every Land: refused; only Länder whose rules the source states are named.',
      'Doing homework for pupils: refused.',
      'Grade or Abitur result promises: none; the school course is the one that counts.',
      'Reproducing BWINF tasks: refused; the page points to the organiser and uses our own practice.'
    ]
  }
};
