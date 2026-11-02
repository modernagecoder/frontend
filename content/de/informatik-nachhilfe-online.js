'use strict';
// Informatik-Nachhilfe online (ag- German-language door, Germany cluster P1 pilot, rows.tsv German doors).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md. Owner 2026-11-02: English pages plus German doors; classes
// are live, in English only, with mentors who match the learner's pace and accent; the page says so in the capsule and
// the at-a-glance panel. Formal "Sie" throughout. Pages show euro; checkout charges USD.
// Angle: the one quotable answer German parents and pupils ask assistants ("Ist Informatik in <Land> Pflichtfach?"), all
// 16 Länder from the GI Informatik-Monitor 2026/27; what Nachhilfe has to cover from Klasse 5 to the Abitur; why English
// lessons work for a subject whose keywords are English; one original Schreibtischtest (trace table) in Java and Python,
// because the written Abitur in Bayern and NRW is programming on paper without a computer.
// Sources (facts read raw, quoted in ~/Desktop/SkyCoders/keyword-research-2026-09/de/facts-school/FACTS.md, fetched 2 Nov 2026):
//  GI Informatik-Monitor 2026/27 Land pages: facts 67 (BW Informatik und Medienbildung from 2025/26, grades 5 and 6 first),
//  69 (BY Mittelschule 5 to 10 one hour), 70 (BY Gymnasium Natur und Technik grades 6 and 7, NTG 9 and 10), 71 (BY grade 11
//  two hours, every branch), 72 (BY Abitur central, on paper), 73 (BE ITG), 74 (BB elective), 75 (HB none in Sek I), 76 (HH
//  four hours since 2025/26), 77 (HE none compulsory), 78 (MV 5 to 10 at least one hour), 79 (NI 9 and 10 since 2024/25),
//  80 (NRW 5 and 6), 81 (NRW GK 3 h, LK 5 h), 82 (NRW no computer in written Abitur), 83 (RP 21 profile schools grade 5),
//  84 (SL 7 and 8 two hours, 9 and 10 one hour), 85 (SN 7 to 10 one hour), 87 (ST Sekundarschule and Gemeinschaftsschule 6 to 10),
//  88 (SH four hours 7 to 10 from 2024/25), 89 (TH MBI from 2024/25, to grade 10 by 2029/30). National page: 90, 91, 92
//  (six Länder without compulsory Informatik), 93 (SWK six hours by 2030), 94 (HB from 2027/28), 95 (RP from 2028/29),
//  96 (no plans BE, BB, HE), 97 (about 15 percent take Informatik in the Qualifikationsphase), 98 (SN and MV about half).
//  Time: EinhZeitG para 4, SoZV; summer time 2027 from 28 March (facts-geo/timezone.tsv).
// Our own: the Zaehler example, compiled and run (javac/java openjdk 21; python -I): zaehle({4, 9, 2, 9, 7}, 6) = 3,
// zaehle(..., 9) = 0; with >= the second call returns 2.
// Lesson family: tracing a loop by hand and testing the boundary value.

const { DE } = require('../../scripts/nl/lib/market-de');

const JAVA = [
  'public class Zaehler {',
  '    public int zaehle(int[] zahlen, int grenze) {',
  '        int anzahl = 0;',
  '        for (int i = 0; i < zahlen.length; i++) {',
  '            if (zahlen[i] > grenze) {',
  '                anzahl = anzahl + 1;',
  '            }',
  '        }',
  '        return anzahl;',
  '    }',
  '}'
].join('\n');

const PY = [
  'def zaehle(zahlen, grenze):',
  '    anzahl = 0',
  '    for zahl in zahlen:',
  '        if zahl > grenze:',
  '            anzahl = anzahl + 1',
  '    return anzahl',
  '',
  'werte = [4, 9, 2, 9, 7]',
  'print(zaehle(werte, 6))',
  'print(zaehle(werte, 9))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  slug: 'informatik-nachhilfe-online',
  code: 'inf',
  accent: '#1E5560',
  accentRationale: 'Informatik-Nachhilfe online: a deep petrol #1E5560, the colour of a code editor theme, distinct from the Berlin brick red; contrast 7.85 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Informatik-Nachhilfe online (auf Englisch)',
  title: 'Informatik-Nachhilfe online: live auf Englisch, Klasse 5 bis 13',
  description: 'Informatik-Nachhilfe online für Klasse 5 bis 13: live auf Englisch, mit Scratch, Python und Java. Dazu: Ist Informatik Pflichtfach? Alle 16 Länder im Überblick.',
  ogDescription: 'Live-Nachhilfe in Informatik auf Englisch, im Tempo Ihres Kindes: welche Bundesländer Informatik verpflichtend unterrichten, was in Klasse 5 bis zum Abitur drankommt, und ein Schreibtischtest wie im schriftlichen Abitur.',
  twitterDescription: 'Informatik-Nachhilfe live auf Englisch: Pflichtfach in allen 16 Ländern, Inhalte bis zum Abitur, ein Schreibtischtest.',
  pageName: 'Informatik-Nachhilfe online',
  webPageDescription: 'Ein Leitfaden für Eltern und Schülerinnen und Schüler in Deutschland zur Informatik-Nachhilfe: der Stand des Pflichtfachs Informatik in allen 16 Ländern nach dem Informatik-Monitor 2026/27 der Gesellschaft für Informatik, die Inhalte von Klasse 5 bis zum Abitur und ein eigenes Übungsbeispiel in Java und Python.',
  courseDescription: 'Live-Online-Nachhilfe in Informatik für Klasse 5 bis 13 in ganz Deutschland, ausschließlich auf Englisch: Scratch, Python und Java, Algorithmen, Daten und Abiturvorbereitung, in der Gruppe oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Informatik-Nachhilfe',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#pflicht', label: 'Pflichtfach?' },
    { href: '#inhalte', label: 'Inhalte' },
    { href: '#englisch', label: 'Englisch' },
    { href: '#beispiel', label: 'Beispiel' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Deutschland &middot; Informatik &middot; Klasse 5 bis 13',
  h1: 'Informatik-Nachhilfe online, live auf Englisch',
  lede: 'Informatik ist in immer mehr Bundesländern Pflichtfach, aber kaum ein Nachhilfeinstitut bietet sie an. Diese Seite zeigt für alle 16 Länder, ab welcher Klasse Informatik verpflichtend ist, was in der Nachhilfe von Klasse 5 bis zum Abitur drankommt, warum Unterricht auf Englisch in Informatik gut funktioniert und wie ein typischer Schreibtischtest aussieht, wie er im schriftlichen Abitur ohne Computer verlangt wird.',
  secondaryCta: { href: '#pflicht', label: 'Pflichtfach nach Bundesland' },
  wa: 'Hallo Modern Age Coders, wir suchen Informatik-Nachhilfe auf Englisch für unser Kind in Deutschland. Können wir eine kostenlose Probestunde buchen?',
  heroNote: 'Live-Online-Unterricht seit 2020 &middot; mehr als 10.000 Lernende &middot; ein fester Mentor, Unterricht auf Englisch',
  spec: [
    ['Klassen', '5 bis 13, alle Schularten'],
    ['Sprachen', 'Scratch, Python, Java (auch BlueJ)'],
    ['Gruppe', 'Fünfzehn bis zwanzig, oder Einzelunterricht'],
    ['Zeiten', 'Nachmittags und am Wochenende, flexibel'],
    ['Mentoren', 'Mit Sitz in Indien, live per Video'],
    ['Probestunde', 'Kostenlos, ohne Karte']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Informatik-Nachhilfe online bei Modern Age Coders ist Live-Unterricht auf Englisch für Schülerinnen und Schüler der Klassen 5 bis 13 in ganz Deutschland: Scratch und Python in der Mittelstufe, Python oder Java mit Algorithmen, Datenstrukturen und Datenbanken in der Oberstufe und vor dem Abitur. Ein fester Mentor passt Tempo und Aussprache an Ihr Kind an. Der Unterricht findet in der Gruppe mit fünfzehn bis zwanzig Lernenden oder im Einzelunterricht statt, nachmittags oder am Wochenende.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Kurse für Informatik in der Schule',
    lede: 'Einer begleitet den Pflichtunterricht der Klassen 5 bis 10, einer bereitet auf Oberstufe und Abitur vor, einer führt zu den bundesweiten Informatik-Wettbewerben.',
    items: [
      { course: 'informatik-companion-course-klasse-5-10', code: 'INF / 01', title: 'Informatik Companion, Klasse 5 bis 10', alt: 'Kursbild Informatik Companion, Klasse 5 bis 10', note: 'Für 10 bis 16 Jahre. Von Scratch zu Python, mit Daten, Algorithmen und Netzwerken, so wie sie im Pflichtfach der Länder vorkommen.' },
      { course: 'informatik-abitur-course-java-python', code: 'INF / 02', title: 'Informatik Oberstufe und Abitur', alt: 'Kursbild Informatik Abitur mit Java und Python', note: 'Für 16 bis 19 Jahre. Objektorientierung, Datenstrukturen, Automaten, SQL und Netze, in Java oder Python, mit Aufgaben auf Papier wie in der Prüfung.' },
      { course: 'german-informatics-competitions-course-biber-bwinf-bwki', code: 'INF / 03', title: 'Informatik-Wettbewerbe', alt: 'Kursbild Informatik-Wettbewerbe Biber, BwInf und BWKI', note: 'Für 9 bis 19 Jahre. Knobelaufgaben im Stil des Informatik-Bibers bis zu Algorithmen für den Bundeswettbewerb Informatik und KI-Projekten.' }
    ]
  },

  sections: [
    {
      id: 'pflicht',
      eyebrow: 'Pflichtfach nach Bundesland',
      h2: 'Ist Informatik in Ihrem Bundesland Pflichtfach?',
      lede: 'In zehn Ländern ja, in sechs nicht für alle. Die Tabelle fasst den Informatik-Monitor 2026/27 der Gesellschaft für Informatik zusammen, der die Regelungen aller 16 Länder vergleicht.',
      body: [
        { kind: 'table', numCols: [], caption: 'Verpflichtender Informatikunterricht in der Sekundarstufe I, Schuljahr 2026/27', head: ['Land', 'Verpflichtend für alle?', 'Was gilt'], rows: [
          ['Baden-Württemberg', 'Ja', 'Pflichtfach Informatik und Medienbildung seit 2025/26, zuerst in Klasse 5 und 6, jährlich aufwachsend'],
          ['Bayern', 'Ja', 'Mittelschule: Klasse 5 bis 10 je eine Wochenstunde; Gymnasium: Schwerpunkt Informatik in Klasse 6 und 7, in Klasse 11 zwei Stunden in jeder Ausbildungsrichtung'],
          ['Berlin', 'Nein', 'Informationstechnischer Grundkurs (ITG), eine Wochenstunde; sonst Wahlpflicht'],
          ['Brandenburg', 'Nein', 'Nur als Wahlpflicht oder Schwerpunkt, am Gymnasium etwa in Klasse 9 und 10'],
          ['Bremen', 'Nein', 'Keine curricularen Angebote in der Sek I; Pflichtfach ab 2027/28 geplant'],
          ['Hamburg', 'Ja', 'Vier Wochenstunden an Stadtteilschulen und Gymnasien seit 2025/26, in Klasse 7 bis 10'],
          ['Hessen', 'Nein', 'Kein verbindlicher Unterricht; am Gymnasium Wahlangebot ab Klasse 7'],
          ['Mecklenburg-Vorpommern', 'Ja', 'Informatik und Medienbildung in Klasse 5 bis 10, mindestens je eine Wochenstunde'],
          ['Niedersachsen', 'Ja', 'Pflichtfach in Klasse 9 und 10 an allen Schularten seit 2024/25'],
          ['Nordrhein-Westfalen', 'Ja', 'Pflichtfach in Klasse 5 und 6 an allen Schularten'],
          ['Rheinland-Pfalz', 'Nein', '21 Informatik-Profil-Schulen ab Klasse 5; Pflichtfach für alle ab 2028/29 geplant'],
          ['Saarland', 'Ja', 'Gemeinschaftsschule und G9-Gymnasium: Klasse 7 und 8 zwei Stunden, 9 und 10 eine Stunde'],
          ['Sachsen', 'Ja', 'Klasse 7 bis 10 je eine Wochenstunde, an Oberschule und Gymnasium'],
          ['Sachsen-Anhalt', 'Nein', 'Sekundar- und Gemeinschaftsschule Klasse 6 bis 10 je eine Stunde; am Gymnasium nur Wahlangebot'],
          ['Schleswig-Holstein', 'Ja', 'Seit 2024/25 an allen Schularten, vier Wochenstunden in Klasse 7 bis 10'],
          ['Thüringen', 'Ja', 'Medienbildung und Informatik seit 2024/25, schrittweise bis Klasse 10 im Schuljahr 2029/30']
        ] },
        { kind: 'source', html: 'Quelle: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Ländervergleich und Seiten der einzelnen Länder, gelesen am 2. November 2026. "Verpflichtend für alle" folgt der Einordnung des Monitors, der Berlin, Brandenburg, Bremen, Hessen, Rheinland-Pfalz und Sachsen-Anhalt als die sechs Länder "ohne einen für alle verbindlichen Informatikunterricht" nennt.' },
        { kind: 'two', mt: true,
          leftH3: 'Was das für Familien bedeutet',
          left: [
            'Wer in Nordrhein-Westfalen in Klasse 5 kommt, hat Informatik sofort auf dem Stundenplan; in Niedersachsen beginnt sie verpflichtend erst in Klasse 9. In Hessen oder Berlin hängt es von der Wahl des Kindes und vom Angebot der Schule ab. Ein Umzug innerhalb Deutschlands kann also bedeuten, dass ein Kind plötzlich zwei Jahre Informatik nachholen muss.',
            'Die Ständige Wissenschaftliche Kommission der Kultusministerkonferenz empfiehlt bis 2030 insgesamt sechs verpflichtende Wochenstunden in der Sekundarstufe I. Mecklenburg-Vorpommern, das Saarland und Thüringen erfüllen das laut Monitor bereits.'
          ],
          rightH3: 'In der Oberstufe',
          right: [
            'Bundesweit belegen laut Informatik-Monitor rund 15 Prozent der Lernenden in der Qualifikationsphase das Fach Informatik; in Sachsen und Mecklenburg-Vorpommern ist es etwa die Hälfte.',
            'In Nordrhein-Westfalen gibt es Informatik als Grundkurs mit drei und als Leistungskurs mit fünf Wochenstunden. In Bayern und Nordrhein-Westfalen werden die schriftlichen Abituraufgaben zentral gestellt und ohne Computer bearbeitet, große Teile davon sind Programmieraufgaben auf Papier.'
          ] }
      ]
    },
    {
      id: 'inhalte',
      eyebrow: 'Inhalte',
      h2: 'Was deckt Informatik-Nachhilfe von Klasse 5 bis zum Abitur ab?',
      lede: 'Die Lehrpläne unterscheiden sich von Land zu Land, die Grundbausteine sind aber überall dieselben. So ordnen wir sie in der Nachhilfe.',
      body: [
        { kind: 'table', numCols: [], caption: 'Themen der Informatik-Nachhilfe nach Stufe (unsere Einteilung)', head: ['Stufe', 'Typische Themen', 'Werkzeuge'], rows: [
          ['Klasse 5 und 6', 'Algorithmen als Handlungsanweisungen, Sequenz, Wiederholung, Verzweigung, Daten und Codierung', 'Scratch, Robotersimulationen, Papier'],
          ['Klasse 7 bis 8', 'Variablen, Bedingungen und Schleifen, Binärzahlen, einfache Datenauswertung', 'Scratch, erste Schritte in Python'],
          ['Klasse 9 und 10', 'Funktionen, Listen und Arrays, Suchen und Sortieren, Netzwerke und Internet, Datenschutz', 'Python, teilweise Java'],
          ['Einführungsphase', 'Objektorientierung: Klassen, Objekte, Attribute, Methoden', 'Java (häufig mit BlueJ) oder Python'],
          ['Qualifikationsphase', 'Datenstrukturen (Liste, Stapel, Schlange, Baum), Automaten und formale Sprachen, Datenbanken und SQL, Netze', 'Java oder Python, SQL'],
          ['Abitur', 'Aufgaben auf Papier: Code lesen, verfolgen, ergänzen und begründen', 'Stift, Papier, Schreibtischtest']
        ] },
        { kind: 'p', mt: true, html: 'In der Nachhilfe richten wir uns nach dem Material, das Ihr Kind aus der Schule mitbringt: Arbeitsblätter, das Schulbuch, alte Klassenarbeiten. Der Mentor sieht sich zuerst an, wo genau es hakt, oft ist es nicht das Programmieren selbst, sondern das Lesen einer Aufgabe oder das Verfolgen einer Schleife im Kopf. Für die Oberstufe arbeiten wir in der Sprache, die die Schule verwendet; in Nordrhein-Westfalen ist das häufig Java mit der Lernumgebung BlueJ.' }
      ]
    },
    {
      id: 'englisch',
      eyebrow: 'Unterricht auf Englisch',
      h2: 'Funktioniert Informatik-Nachhilfe auf Englisch?',
      lede: 'Besser als in fast jedem anderen Fach, denn die Programmiersprachen selbst sind Englisch. Wichtig ist uns, das klar zu sagen: Wir unterrichten ausschließlich auf Englisch, nicht auf Deutsch.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Die Sprache des Codes', p: 'Ob <code>if</code>, <code>while</code>, <code>return</code> oder <code>class</code>: Python und Java bestehen aus englischen Wörtern. Wer sie im Unterricht auch hört, versteht schneller, was eine Anweisung tut.' },
          { h3: 'Tempo und Akzent angepasst', p: 'Die Mentoren sprechen langsam und deutlich, wiederholen schwierige Stellen mit einfacheren Worten und stellen sich auf die Aussprache Ihres Kindes ein. Ein deutsches Fachwort zwischendurch ist kein Problem, der Mentor nennt den englischen Begriff dazu.' },
          { h3: 'Zwei Fächer auf einmal', p: 'Ihr Kind übt nebenbei Englisch, das Fach, das in Studium und Beruf in der Informatik überall gebraucht wird. Viele Eltern sehen das als Vorteil, nicht als Hürde.' }
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Die wichtigsten Begriffe, Deutsch und Englisch', head: ['Im Schulbuch', 'Im Unterricht', 'Im Code'], rows: [
          ['Schleife', 'loop', '<code>for</code>, <code>while</code>'],
          ['Verzweigung, Bedingung', 'branch, condition', '<code>if</code>, <code>else</code>'],
          ['Variable, Zuweisung', 'variable, assignment', '<code>anzahl = 0</code>'],
          ['Feld, Liste', 'array, list', '<code>int[]</code>, <code>[ ]</code>'],
          ['Methode, Funktion', 'method, function', '<code>def</code>, <code>public int</code>'],
          ['Rückgabewert', 'return value', '<code>return</code>'],
          ['Klasse, Objekt', 'class, object', '<code>class</code>, <code>new</code>'],
          ['Schreibtischtest', 'trace table, dry run', 'Stift und Papier']
        ] },
        { kind: 'p', mt: true, html: 'Die Mentoren sitzen in Indien und unterrichten live per Video. Ihr Kind hat jede Woche denselben Mentor, der nach wenigen Stunden weiß, ob es lieber erst selbst probiert oder zuerst ein Beispiel sehen möchte.' }
      ]
    },
    {
      id: 'beispiel',
      tint: 'tint',
      eyebrow: 'Ein Übungsbeispiel',
      h2: 'Ein Schreibtischtest, wie im schriftlichen Abitur',
      lede: 'Im schriftlichen Abitur in Bayern und Nordrhein-Westfalen gibt es keinen Computer. Wer Code nur am Rechner ausprobiert hat, merkt das oft zu spät. Deshalb üben wir früh, Programme mit Stift und Papier zu verfolgen. Das folgende Beispiel ist unser eigenes, keine echte Prüfungsaufgabe.',
      body: [
        { kind: 'code', label: 'Die Methode zaehle', lang: 'Java', code: JAVA, note: 'Aufgabe: Was liefert <code>zaehle({4, 9, 2, 9, 7}, 6)</code>? Füllen Sie die Tabelle Zeile für Zeile aus, ohne den Code auszuführen.' },
        { kind: 'table', mt: true, numCols: [0, 1, 3], caption: 'Schreibtischtest für zaehle({4, 9, 2, 9, 7}, 6)', head: ['i', 'zahlen[i]', 'zahlen[i] > 6', 'anzahl danach'], rows: [
          ['0', '4', 'false', '0'],
          ['1', '9', 'true', '1'],
          ['2', '2', 'false', '1'],
          ['3', '9', 'true', '2'],
          ['4', '7', 'true', '3']
        ] },
        { kind: 'p', mt: true, html: 'Die Methode liefert 3: Drei Zahlen im Feld sind größer als 6. Die zweite Frage ist die wichtigere, und sie kommt in Prüfungen in vielen Formen vor: Was liefert <code>zaehle({4, 9, 2, 9, 7}, 9)</code>? Viele antworten spontan mit 2, weil die 9 zweimal vorkommt. Richtig ist 0, denn <code>9 &gt; 9</code> ist falsch. Erst wenn man im Code <code>&gt;</code> durch <code>&gt;=</code> ersetzt, liefert derselbe Aufruf 2.' },
        { kind: 'code', label: 'Dieselbe Idee in Python, für Klasse 9 und 10', lang: 'Python', code: PY, note: 'Ausgabe: <code>3</code> und <code>0</code>. Mit <code>&gt;=</code> statt <code>&gt;</code> lautet die zweite Zeile <code>2</code>. Beide Versionen haben wir selbst ausgeführt.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Den Randfall prüfen.</strong> Testen Sie jede Bedingung mit einem Wert, der genau auf der Grenze liegt. Hier ist das die 9 bei der Grenze 9.',
          '<strong>Eine Zeile pro Durchlauf.</strong> Im Schreibtischtest bekommt jeder Schleifendurchlauf eine eigene Zeile, auch wenn sich nichts ändert, wie bei i = 2.',
          '<strong>Begründen, nicht raten.</strong> Im Abitur zählt oft die Begründung mehr als die Zahl. "Weil 9 &gt; 9 falsch ist" bringt Punkte, "0" allein nicht immer.'
        ] }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Wann findet die Nachhilfe statt?',
      lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
      body: [
        { kind: 'table', numCols: [], caption: 'Deutsche Uhrzeit und Uhrzeit des Mentors in Indien', head: ['Deutsche Zeit', 'Indien, Winterzeit (bis 28. März 2027)', 'Indien, Sommerzeit (ab 28. März 2027)'], rows: [
          ['15:00', '19:30', '18:30'],
          ['16:00', '20:30', '19:30'],
          ['17:00', '21:30', '20:30'],
          ['Samstag 10:00', '14:30', '13:30']
        ] },
        { kind: 'source', html: 'Gesetzliche Zeit in Deutschland ist die mitteleuropäische Zeit (MEZ, UTC+1), im Sommer die mitteleuropäische Sommerzeit (MESZ, UTC+2), nach dem Einheiten- und Zeitgesetz. Die Sommerzeit endete am 25. Oktober 2026 und beginnt wieder am 28. März 2027. Indien bleibt das ganze Jahr bei UTC+5:30 und ist Deutschland damit im Winter 4 Stunden 30 Minuten, im Sommer 3 Stunden 30 Minuten voraus.' },
        { kind: 'p', mt: true, html: 'Vor Klassenarbeiten und im Abiturjahr vereinbaren viele Familien zusätzliche Einzelstunden. Bei der Buchung wählen Sie die Uhrzeit in Ihrer eigenen Zeitzone; der Mentor sieht sie in seiner.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Lernstufen',
    h2: 'Woran Sie den Fortschritt erkennen',
    lede: 'Unsere eigenen Stufen, mit denen wir Lernende einordnen und Eltern berichten.',
    table: { caption: 'Fünf Stufen in der Informatik (unsere)', head: ['Stufe', 'Typische Klasse', 'Ihr Kind kann'], rows: [
      ['1. Anweisungen ordnen', '5 bis 6', 'einen Ablauf in Schritte zerlegen und als Scratch-Programm umsetzen'],
      ['2. Code lesen', '7 bis 8', 'ein kurzes Programm lesen und sagen, was es ausgibt'],
      ['3. Selbst schreiben', '8 bis 10', 'Funktionen mit Schleifen und Bedingungen in Python schreiben'],
      ['4. Modellieren', '10 bis 11', 'eine Aufgabe in Klassen und Objekte übersetzen'],
      ['5. Prüfungsreif', '12 bis 13', 'fremden Code auf Papier verfolgen, Fehler finden und begründen']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Stufe 2 ist der häufigste Engpass: Viele Lernende können Code abtippen, aber nicht vorhersagen, was er tut. Genau dort setzt die Nachhilfe an.',
      'Nach den Stunden erhalten Sie eine kurze Rückmeldung: was geübt wurde, was noch schwerfällt und was als Nächstes kommt.'
    ] },
    right: { h3: 'Für Schülerinnen und Schüler', ps: [
      'Bevor Sie ein Programm starten, sagen Sie voraus, was herauskommt. Erst dann ausführen und vergleichen.',
      'Testen Sie immer den Wert genau auf der Grenze. Dort verstecken sich die meisten Fehler.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse für Informatik und Programmieren',
    lede: 'Alle live, auf Englisch, mit einem festen Mentor, in der Gruppe oder im Einzelunterricht.',
    bands: [
      { num: 'I', h3: 'Grundlagen', sub: '10 bis 18 Jahre', courses: [
        { code: 'INF / BASIS / 01', slug: 'python-complete-masterclass-teens', title: 'Python für Jugendliche', blurb: 'Vom ersten Programm bis zu eigenen Projekten, 13 bis 18.' },
        { code: 'INF / BASIS / 02', slug: 'java-programming-masterclass-for-teens', title: 'Java für Jugendliche', blurb: 'Objektorientierung von Grund auf, 13 bis 18.' },
        { code: 'INF / BASIS / 03', slug: 'maths-through-coding', title: 'Mathematik mit Python', blurb: 'Schulmathematik im Code, 10 bis 15.' }
      ] },
      { num: 'II', h3: 'Algorithmen und Daten', sub: '13 bis 18 Jahre', courses: [
        { code: 'INF / ALGO / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Algorithmen und Datenstrukturen', blurb: 'Logik, Listen, Bäume und Suchen, 13 bis 18.' },
        { code: 'INF / ALGO / 02', slug: 'mysql-mastery-for-teens', title: 'Datenbanken und SQL', blurb: 'Abfragen schreiben wie in der Oberstufe, 13 bis 18.' },
        { code: 'INF / ALGO / 03', slug: 'competitive-programming-for-teens-course', title: 'Wettbewerbsprogrammierung', blurb: 'Für alle, die schon programmieren können, 13 bis 18.' }
      ] },
      { num: 'III', h3: 'Internationale Abschlüsse', sub: '15 bis 19 Jahre', courses: [
        { code: 'INF / INT / 01', slug: 'ib-diploma-computer-science-course', title: 'IB Computer Science', blurb: 'Für internationale Schulen, Prüfung ab 2027.' },
        { code: 'INF / INT / 02', slug: 'igcse-computer-science-0478-course', title: 'IGCSE Computer Science', blurb: 'Cambridge 0478, vollständiger Lehrplan.' },
        { code: 'INF / INT / 03', slug: 'ap-computer-science-a-java-exam-prep-course', title: 'AP Computer Science A', blurb: 'Java und Prüfungsvorbereitung.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'So läuft es ab',
    h2: 'Wie die Live-Nachhilfe funktioniert',
    lede: 'Zwei Live-Stunden pro Woche, jeweils eine Stunde, mit demselben Mentor. Nichts ist vorab aufgezeichnet, und niemand bleibt mit einer Aufgabe allein.',
    slots: [
      { time: 'Nachmittags', l: 'Nach der Schule, ab etwa 15:00 deutscher Zeit.' },
      { time: 'Wochenende', l: 'Samstag- und Sonntagvormittag.' },
      { time: 'Einzeln', l: 'Zu einer vereinbarten Zeit, auch kurz vor Klassenarbeiten.' }
    ],
    cells: [
      { h3: 'Fester Mentor', p: 'Eine Person, die Ihr Kind und sein Schulmaterial kennt.' },
      { h3: 'Deutliches Englisch', p: 'Langsam, einfach und bei Bedarf wiederholt.' },
      { h3: 'Mit Schulmaterial', p: 'Arbeitsblätter und alte Arbeiten werden gemeinsam bearbeitet.' },
      { h3: 'Auf Papier üben', p: 'Schreibtischtests wie im Abitur, nicht nur am Rechner.' },
      { h3: 'Rückmeldung', p: 'Kurze Berichte an die Eltern nach den Stunden.' },
      { h3: 'Gruppe oder einzeln', p: 'Fünfzehn bis zwanzig Lernende oder Ihr Kind allein.' }
    ]
  },

  projectsH2: 'Projekte von Lernenden',
  projectsLede: 'Wer früh beginnt, baut später echte Anwendungen. Einige Projekte unserer Lernenden finden Sie unten, weitere auf der Seite <a class="ag-inline-link" href="/student-labs">Student labs</a> (auf Englisch).',
  reviewsLede: 'Google-Bewertungen von Eltern und Lernenden, unverändert im englischen Original.',

  fees: {
    h2: 'Preise für Familien in Deutschland',
    lede: 'Die Gebühr ist monatlich und umfasst acht Live-Stunden. Die Preise werden in Euro zum Referenzkurs der Europäischen Zentralbank angezeigt. Bezahlt wird in US-Dollar; Ihre Bank rechnet den Betrag um, daher kann der Betrag auf Ihrem Kontoauszug leicht abweichen.',
    free: ['Eine kostenlose Probestunde', 'Eine kurze Einstufung am Schulmaterial', 'Keine Karte nötig'],
    group: ['Fünfzehn bis zwanzig Lernende ähnlichen Alters', 'Ein fester Mentor', 'Zwei Stunden pro Woche', 'Monatlich zahlbar, jederzeit beendbar'],
    one: ['Ihr Kind und ein Mentor', 'Eigenes Tempo, eigenes Schulmaterial', 'Zeiten nach Ihrem Wunsch']
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    h2: 'Informatik-Nachhilfe online: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch oder auf Englisch statt?', a: 'Ausschließlich auf Englisch, und immer live. Die Mentoren sprechen langsam und deutlich und passen Tempo und Aussprache an Ihr Kind an. Da Programmiersprachen wie Python und Java aus englischen Wörtern bestehen, fällt der Einstieg meist leichter als erwartet.' },
      { q: 'Ist Informatik in Bayern Pflichtfach?', a: 'Ja. Laut Informatik-Monitor 2026/27 hat die Mittelschule in Klasse 5 bis 10 je eine Wochenstunde Informatik. Am Gymnasium gibt es in Klasse 6 und 7 einen Schwerpunkt Informatik im Fach Natur und Technik und in Klasse 11 zwei verpflichtende Stunden in jeder Ausbildungsrichtung.' },
      { q: 'Ist Informatik in Niedersachsen Pflichtfach?', a: 'Ja, seit dem Schuljahr 2024/25 wird Informatik an allen allgemeinbildenden Schularten in Niedersachsen in Klasse 9 und 10 als Pflichtfach unterrichtet.' },
      { q: 'In welchen Bundesländern ist Informatik kein Pflichtfach?', a: 'Laut Informatik-Monitor 2026/27 gibt es in Berlin, Brandenburg, Bremen, Hessen, Rheinland-Pfalz und Sachsen-Anhalt keinen für alle verbindlichen Informatikunterricht. Bremen plant das Pflichtfach ab 2027/28, Rheinland-Pfalz ab 2028/29.' },
      { q: 'Ab welcher Klasse lohnt sich Informatik-Nachhilfe?', a: 'Sobald Informatik auf dem Stundenplan steht oder Ihr Kind Interesse zeigt, in Nordrhein-Westfalen also oft schon ab Klasse 5. Am meisten bringt Nachhilfe, bevor Lücken entstehen: Wer Schleifen und Bedingungen früh sicher beherrscht, hat es in der Oberstufe deutlich leichter.' },
      { q: 'Helfen Sie auch bei Java und BlueJ?', a: 'Ja. Für die Oberstufe arbeiten wir in der Sprache Ihrer Schule, häufig Java, auch mit der Lernumgebung BlueJ, oder Python. Dazu gehören Objektorientierung, Datenstrukturen, Datenbanken mit SQL und Aufgaben auf Papier.' },
      { q: 'Bereiten Sie auf das Informatik-Abitur vor?', a: 'Ja, mit unserem Kurs Informatik Oberstufe und Abitur. Weil das schriftliche Abitur in Bayern und Nordrhein-Westfalen ohne Computer geschrieben wird, üben wir besonders das Lesen und Verfolgen von Code auf Papier, mit eigenen Aufgaben im Prüfungsstil.' },
      { q: 'Wann finden die Stunden statt?', a: 'Unter der Woche oder am Wochenende, flexibel. Die meisten Familien wählen Nachmittage zwischen etwa 15:00 und 18:00 Uhr deutscher Zeit oder den Wochenendvormittag. 16:00 Uhr in Deutschland ist im Winter 20:30 Uhr in Indien, wo die Mentoren sitzen.' },
      { q: 'Was kostet die Nachhilfe, und in welcher Währung wird bezahlt?', a: 'Die Gebühr ist monatlich und wird auf dieser Seite in Euro zum Referenzkurs der Europäischen Zentralbank angezeigt. Bezahlt wird in US-Dollar, Ihre Bank rechnet um. Die erste Stunde ist kostenlos und ohne Karte.' },
      { q: 'Gibt es Informatik-Wettbewerbe, an denen mein Kind teilnehmen kann?', a: 'Ja, zum Beispiel den kostenlosen Informatik-Biber für die Klassen 3 bis 13, der 2026 vom 9. bis 20. November stattfindet, und den Bundeswettbewerb Informatik. Unser Kurs zu den Informatik-Wettbewerben bereitet mit eigenen Aufgaben darauf vor.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weitere Seiten',
    h2: 'Weiterlesen',
    lede: 'Weitere Seiten für Familien in Deutschland, überwiegend auf Englisch.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Alle unsere Seiten für Deutschland.' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding classes for kids in Berlin', p: 'Programmieren für Kinder von 6 bis 12 in Berlin.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML classes in Germany', p: 'KI und maschinelles Lernen für Jugendliche und Erwachsene.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'So unterrichten wir live.' },
      { href: '/courses', label: 'All courses', p: 'Alle Lehrpläne im Überblick.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projekte unserer Lernenden.' }
    ]
  },

  start: {
    h2: 'Kostenlose Probestunde buchen',
    lede: 'In der ersten Stunde sieht sich der Mentor gemeinsam mit Ihrem Kind ein Arbeitsblatt oder eine alte Klassenarbeit an und findet heraus, wo es hakt. Danach empfehlen wir den passenden Kurs und die passende Gruppe.',
    readFirst: 'Vorab lesenswert: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> beschreibt unseren Live-Unterricht, <a class="ag-inline-link" href="/courses">All courses</a> listet alle Lehrpläne (beide Seiten auf Englisch).',
    note: 'Der Unterricht findet live online mit Mentoren in Indien statt, ausschließlich auf Englisch. Am schnellsten erreichen Sie uns per WhatsApp, gern auch auf Englisch.',
    formNote: 'Kostenlos, ohne Karte und ohne Verpflichtung.'
  },

  footer: {
    cols: [
      { h4: 'Informatik', links: [
        { href: '/courses/informatik-companion-course-klasse-5-10', label: 'Informatik Companion' },
        { href: '/courses/informatik-abitur-course-java-python', label: 'Informatik Abitur' },
        { href: '/courses/german-informatics-competitions-course-biber-bwinf-bwki', label: 'Informatik-Wettbewerbe' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-for-kids-berlin', label: 'Programmieren in Berlin' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'KI in Deutschland' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Erst vorhersagen, dann ausführen'
  },

  personalityCss: `
.ag-root.ag-inf .ag-hero h1 { letter-spacing: -0.014em; }
.ag-root.ag-inf .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-inf .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-inf .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-inf .ag-table td { hyphens: auto; }
.ag-root.ag-inf .ag-code-head b { letter-spacing: 0.012em; }
`,

  dossier: {
    curriculumAuthority: 'Gesellschaft für Informatik, Informatik-Monitor 2026/27, national comparison and all 16 Land pages; Einheiten- und Zeitgesetz and Sommerzeitverordnung; all read 2 November 2026. Example code our own.',
    localProject: 'A Schreibtischtest in Java (BlueJ style) and Python: zaehle({4, 9, 2, 9, 7}, 6) traced row by row to 3, the boundary call with 9 returning 0, and 2 once > becomes >=; both compiled and run. Lesson family: tracing a loop by hand and testing the boundary value.',
    requiredMentions: ['zaehle({4, 9, 2, 9, 7}, 6)', 'zaehle({4, 9, 2, 9, 7}, 9)', 'Informatik-Monitor 2026/27', 'ohne einen für alle verbindlichen Informatikunterricht', 'seit dem Schuljahr 2024/25', 'Grundkurs mit drei und als Leistungskurs mit fünf Wochenstunden', 'rund 15 Prozent', 'Erst vorhersagen, dann ausführen'],
    sources: [
      { claim: 'Six Länder without compulsory Informatik; SWK recommendation; Bremen 2027/28; Rheinland-Pfalz 2028/29; 15 percent in Qualifikationsphase.', url: 'https://informatik-monitor.de/' },
      { claim: 'Bayern rules and central Abitur on paper.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/bayern' },
      { claim: 'NRW grades 5 and 6, GK and LK, no computer in written Abitur.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'Niedersachsen grades 9 and 10 since 2024/25.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/niedersachsen' },
      { claim: 'German legal time.', url: 'https://www.gesetze-im-internet.de/me_einhg/BJNR007090969.html' }
    ],
    rejectedClaims: [
      'German-language teaching: we teach in English only, and the page says so.',
      'Any accreditation (ZFU, Bildungsgutschein, Lernförderung): none held, none claimed.',
      'Reproducing real Abitur tasks: refused; the example is our own.',
      'Any Land rule not in the Informatik-Monitor 2026/27: not stated.'
    ]
  }
};
