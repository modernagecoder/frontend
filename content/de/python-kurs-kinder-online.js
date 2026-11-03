'use strict';
// Python-Kurs für Kinder online (ag- German-language door DE060, Germany cluster P3, rows.tsv German doors).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors (based in India) who match the learner's pace and
// accent; the capsule says "auf Englisch". Formal "Sie" throughout. Pages show euro; checkout charges USD.
// Angle: for parents of children roughly 9 to 14: when a child is ready to move from blocks to typed Python, which
// Python to install (python.org release table, read 3 Nov 2026), where Informatik starts at school (Informatik-Monitor
// 2026/27) and what the Jugendwettbewerb Informatik asks by level; one original project: a leap-year checker in which the
// order of the conditions decides whether 1900 and 2100 come out right.
// Sources (fetched raw with curl -sL -A "Mozilla/5.0" on 3 Nov 2026; quotes grepped in the raw text):
//  python.org/downloads (src-pages/python-kurs-kinder-online/downloads.txt): "Download Python 3.15.2", release date
//   "Oct. 25, 2026"; Active releases table: 3.15 bugfix, first released 2026-10-09, end of support 2031-10; 3.14 bugfix,
//   2025-10-07, 2030-10; 3.13 security, 2024-10-07, 2029-10; 3.16 pre-release, "2027-10-06 (planned)", 2032-10.
//  python.org/about (about.txt): "Python is developed under an OSI-approved open source license, making it freely usable
//   and distributable, even for commercial use."
//  docs.python.org/3/tutorial (tutorial.txt): "Python is an easy to learn, powerful programming language."
//  docs.python.org/3/library/calendar.html (calendar.txt): "calendar.isleap(year)" "Returns True if year is a leap year";
//   "calendar.leapdays(y1, y2)" "Returns the number of leap years in the range from y1 to y2 (exclusive)"; "the current
//   Gregorian calendar extended indefinitely in both directions".
//  GI Informatik-Monitor 2026/27 (FACTS.md facts 67, 69, 79, 80): BW from 2025/26 grades 5 and 6; BY Mittelschule 5 to 10
//   one hour; NI 9 and 10 since 2024/25; NRW grades 5 and 6 at all general school types.
//  BWINF Jugendwettbewerb (facts 141, 142, 143, 144): from Jg. 3; Bronze (Jg. 5/6) 3 tasks / 30 min, Silber (7/8/9)
//   4 / 40, Gold (from 10) 6 / 60; round 3 deadline 23 November 2026; 71,971 participants, 7,190 first prizes.
//  Time: EinhZeitG para 4, SoZV; summer time 2027 from 28 March.
// Our own: schaltjahr.py (python3 -I, CPython 3.14.8), output printed exactly:
//   2026 False False False / 2028 True True True / 2000 True True True / 1900 True False False / 2100 True False False / 18
// Lesson family: the order of conditions matters; test the special case first.

const { DE } = require('../../scripts/nl/lib/market-de');

const PY = [
  'import calendar',
  '',
  'def schaltjahr_falsch(jahr):',
  '    if jahr % 4 == 0:',
  '        return True',
  '    elif jahr % 100 == 0:',
  '        return False',
  '    elif jahr % 400 == 0:',
  '        return True',
  '    return False',
  '',
  'def schaltjahr(jahr):',
  '    if jahr % 400 == 0:',
  '        return True',
  '    elif jahr % 100 == 0:',
  '        return False',
  '    elif jahr % 4 == 0:',
  '        return True',
  '    return False',
  '',
  'for jahr in [2026, 2028, 2000, 1900, 2100]:',
  '    print(jahr, schaltjahr_falsch(jahr), schaltjahr(jahr), calendar.isleap(jahr))',
  '',
  'print(calendar.leapdays(2026, 2101))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'Python-Kurs für Kinder online' },
  slug: 'python-kurs-kinder-online',
  code: 'pkk',
  accent: '#366536',
  accentRationale: 'Python-Kurs für Kinder online: a deep fern green #366536, the green of a terminal prompt in daylight, apart from the blue, plum and rose of the other German children\'s pages; contrast 5.55 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Python-Kurs für Kinder online (auf Englisch)',
  title: 'Python-Kurs für Kinder online: live, etwa 9 bis 14 Jahre',
  description: 'Python-Kurs für Kinder von etwa 9 bis 14, live online auf Englisch: wann Ihr Kind bereit ist, welches Python Sie installieren, und ein Schaltjahr-Projekt.',
  ogDescription: 'Wann ein Kind von Blöcken zu Python wechseln kann, welche Python-Version gerade aktuell ist, wo Informatik in der Schule beginnt und ein Schaltjahr-Prüfer zum Nachprogrammieren. Unterricht live auf Englisch.',
  twitterDescription: 'Python für Kinder, live auf Englisch: Bereitschaft, Version, Schule und ein Schaltjahr-Prüfer.',
  pageName: 'Python-Kurs für Kinder online',
  webPageDescription: 'Ein Leitfaden für Eltern in Deutschland, deren Kind mit etwa 9 bis 14 Jahren Python lernen möchte: woran man die Bereitschaft erkennt, welche Python-Version laut python.org aktuell ist, wo Informatik in der Schule beginnt, was der Jugendwettbewerb Informatik verlangt, und ein eigenes Projekt mit einem Schaltjahr-Prüfer.',
  courseDescription: 'Live-Online-Python-Kurse für Kinder von etwa 9 bis 14 Jahren in ganz Deutschland, ausschließlich auf Englisch: Variablen, Bedingungen, Schleifen, Funktionen und Listen an eigenen Projekten, in der Gruppe oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Python für Kinder',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#bereit', label: 'Bereit?' },
    { href: '#version', label: 'Version' },
    { href: '#schaltjahr', label: 'Schaltjahr' },
    { href: '#schule', label: 'Schule' }
  ],
  eyebrow: 'Deutschland &middot; Python &middot; etwa 9 bis 14 Jahre',
  h1: 'Python-Kurs für Kinder, live online',
  lede: 'Irgendwann reicht Scratch nicht mehr. Das Kind will tippen, wie die Großen, und Python ist dafür die naheliegende erste Sprache. Hier erfahren Sie, woran Sie merken, dass Ihr Kind so weit ist, welche Python-Version Sie im November 2026 installieren sollten, wo Informatik in der Schule beginnt und wie ein Kind mit drei Bedingungen einen Schaltjahr-Prüfer baut, der sogar das Jahr 2100 richtig einordnet.',
  secondaryCta: { href: '#schaltjahr', label: 'Zum Schaltjahr-Projekt' },
  wa: 'Hallo Modern Age Coders, unser Kind (etwa 9 bis 14) möchte Python lernen, live auf Englisch. Wann könnten wir eine kostenlose Probestunde machen?',
  heroNote: 'Seit 2020 live online &middot; mehr als 10.000 Lernende weltweit &middot; Englisch als Unterrichtssprache, fester Mentor',
  spec: [
    ['Alter', 'Etwa 9 bis 14, je nach Vorerfahrung'],
    ['Sprache', 'Python 3, im Browser oder installiert'],
    ['Themen', 'Variablen, Bedingungen, Schleifen, Funktionen'],
    ['Unterricht', 'Live per Video, mit geteiltem Bildschirm'],
    ['Gruppe', 'Fünfzehn bis zwanzig, oder einzeln'],
    ['Probestunde', 'Kostenlos und unverbindlich']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Mit dem Python-Kurs von Modern Age Coders lernen Kinder von etwa 9 bis 14 Jahren aus ganz Deutschland programmieren, live online und auf Englisch. Ihr Kind schreibt von der ersten Stunde an echten Python-Code, mit Variablen, Bedingungen, Schleifen und Funktionen, und baut daraus kleine Spiele und Rechenprogramme. Derselbe Mentor begleitet Ihr Kind Woche für Woche und spricht in seinem Tempo, mit Rücksicht auf seine Aussprache; Ihr Kind lernt in einer Gruppe mit fünfzehn bis zwanzig anderen oder im Einzelunterricht. Der Hauptkurs heißt Python and AI for Kids.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Python-Kurse für Kinder',
    lede: 'Ein allgemeiner Python-Kurs für Kinder, einer, der Python mit Schulmathematik verbindet, und einer, der Informatik in der weiterführenden Schule begleitet.',
    items: [
      { course: 'python-ai-kids-masterclass', code: 'PKK / 01', title: 'Python and AI for Kids', alt: 'Kursbild Python and AI for Kids', note: 'Von Klasse 3 bis Klasse 8. Vom ersten print bis zu Spielen, Zeichnungen und kleinen Projekten mit Daten und künstlicher Intelligenz.' },
      { course: 'maths-through-coding', code: 'PKK / 02', title: 'Mathematik mit Python', alt: 'Kursbild Maths Through Coding', note: 'Für 10 bis 15 Jahre, Klasse 5 bis 10, ohne Vorkenntnisse. Brüche, Teiler, Muster und Wahrscheinlichkeit, die man programmiert statt auswendig lernt.' },
      { course: 'informatik-companion-course-klasse-5-10', code: 'PKK / 03', title: 'Informatik Companion, Klasse 5 bis 10', alt: 'Kursbild Informatik Companion Klasse 5 bis 10', note: 'Für 10 bis 16 Jahre, jede Schulart. Begleitet das Schulfach Informatik dort, wo es auf dem Stundenplan steht, mit Python als Hauptsprache.' }
    ]
  },

  sections: [
    {
      id: 'bereit',
      eyebrow: 'Der richtige Zeitpunkt',
      h2: 'Ab wann ist ein Kind bereit für Python?',
      lede: 'Nicht an einem bestimmten Geburtstag, sondern wenn vier Dinge zusammenkommen. Meist ist das zwischen neun und elf Jahren so weit, bei Kindern ohne Scratch-Erfahrung etwas später.',
      body: [
        { kind: 'table', numCols: [], caption: 'Vier Zeichen, dass Ihr Kind für Python bereit ist (unsere Erfahrung aus dem Unterricht)', head: ['Zeichen', 'Woran Sie es erkennen', 'Warum es wichtig ist'], rows: [
          ['Es tippt ohne Suchen', 'Es schreibt einen Satz, ohne jeden Buchstaben auf der Tastatur zu suchen', 'In Python zählt jedes Zeichen; ein fehlender Doppelpunkt stoppt das Programm'],
          ['Es kennt Schleifen', 'In Scratch nutzt es repeat statt zehnmal denselben Block', 'Die for-Schleife ist in Python das wichtigste Werkzeug der ersten Wochen'],
          ['Es hält Frust kurz aus', 'Eine Fehlermeldung bringt es zum Nachdenken, nicht zum Weinen', 'Python meldet Fehler auf Englisch und recht direkt'],
          ['Es will mehr', 'Es fragt, wie richtige Programme gemacht werden', 'Neugier trägt durch die ersten zähen Wochen ohne bunte Figuren']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Warum Python als erste Textsprache?',
          left: [
            'Die offizielle Python-Dokumentation stellt die Sprache mit dem Satz vor: "Python is an easy to learn, powerful programming language." Beides stimmt für Kinder: Ein erstes Programm hat eine Zeile, und dieselbe Sprache nutzen Fachleute für Datenanalyse und künstliche Intelligenz.',
            'Dazu kommt das Geld, oder besser: das fehlende Geld. Laut python.org steht Python unter einer von der Open Source Initiative anerkannten Lizenz und darf frei genutzt und weitergegeben werden, auch kommerziell. Sie kaufen nichts, und Ihr Kind kann zu Hause dasselbe Python nutzen wie im Kurs.'
          ],
          rightH3: 'Und wenn mein Kind Scratch übersprungen hat?',
          right: [
            'Das geht, vor allem ab elf oder zwölf Jahren. Die ersten Wochen sind dann etwas langsamer, weil Schleifen und Bedingungen gleichzeitig mit der Schreibweise gelernt werden.',
            'Für jüngere Kinder ohne Vorerfahrung raten wir zu einigen Monaten Scratch. Wer dort gelernt hat, was eine Schleife tut, muss in Python nur noch lernen, wie man sie schreibt.'
          ] }
      ]
    },
    {
      id: 'version',
      eyebrow: 'Die richtige Version',
      h2: 'Welche Python-Version sollte mein Kind im Jahr 2026 installieren?',
      lede: 'Die aktuelle, also Python 3.15. Sie ist im Oktober 2026 erschienen und wird laut python.org bis Oktober 2031 gepflegt. Ältere Versionen funktionieren für Anfänger meist auch, aber es gibt keinen Grund, mit einer alten zu beginnen.',
      body: [
        { kind: 'table', numCols: [], caption: 'Aktive Python-Versionen laut python.org, Stand 3. November 2026', head: ['Version', 'Status', 'Erschienen', 'Unterstützt bis'], rows: [
          ['3.16', 'Vorabversion, noch nicht für Anfänger', '6. Oktober 2027 (geplant)', 'Oktober 2032'],
          ['3.15', 'Aktuell, mit Fehlerkorrekturen; neueste Ausgabe 3.15.2 vom 25. Oktober 2026', '9. Oktober 2026', 'Oktober 2031'],
          ['3.14', 'Fehlerkorrekturen', '7. Oktober 2025', 'Oktober 2030'],
          ['3.13', 'Nur noch Sicherheitskorrekturen', '7. Oktober 2024', 'Oktober 2029']
        ] },
        { kind: 'source', html: 'Quelle: Python Software Foundation, python.org/downloads, Tabelle "Active Python releases" und Liste der Ausgaben, gelesen am 3. November 2026. Wir sind mit der Python Software Foundation nicht verbunden.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Im Browser starten', p: 'Für die ersten Stunden braucht Ihr Kind gar nichts zu installieren. Wir arbeiten mit einer Python-Umgebung im Browser, die auch auf dem Familienlaptop läuft.' },
          { h3: 'Dann installieren', p: 'Nach einigen Wochen lohnt sich ein eigenes Python auf dem Rechner. Der Mentor hilft beim Installieren, live und mit geteiltem Bildschirm, in der Regel in einer Viertelstunde.' },
          { h3: 'Tablet und Handy?', p: 'python.org bietet inzwischen auch Python für Android und iOS an. Zum Lernen empfehlen wir trotzdem eine echte Tastatur: Code auf dem Handy zu tippen frustriert Kinder schnell.' }
        ] }
      ]
    },
    {
      id: 'schaltjahr',
      tint: 'tint',
      eyebrow: 'Ein Projekt zum Nachprogrammieren',
      h2: 'Wie programmiert ein Kind einen Schaltjahr-Prüfer?',
      lede: 'Mit drei Bedingungen, und die Reihenfolge entscheidet. Die Regel des gregorianischen Kalenders: Ein Jahr ist ein Schaltjahr, wenn es durch 4 teilbar ist, außer es ist durch 100 teilbar, es sei denn, es ist auch durch 400 teilbar. Wir haben die Aufgabe selbst geschrieben; Zehnjährige, die das Teilen mit Rest kennen, kommen gut damit zurecht.',
      body: [
        { kind: 'code', label: 'Zwei Schaltjahr-Prüfer und die Kontrolle mit calendar', lang: 'Python', code: PY, note: 'Wir haben das Programm ausgeführt. Ausgabe: <code>2026 False False False</code>, <code>2028 True True True</code>, <code>2000 True True True</code>, <code>1900 True False False</code>, <code>2100 True False False</code> und zuletzt <code>18</code>.' },
        { kind: 'table', mt: true, numCols: [0], caption: 'Was die beiden Prüfer sagen (unsere Auswertung der Ausgabe)', head: ['Jahr', 'schaltjahr_falsch', 'schaltjahr', 'calendar.isleap', 'Warum'], rows: [
          ['2026', 'nein', 'nein', 'nein', 'Nicht durch 4 teilbar'],
          ['2028', 'ja', 'ja', 'ja', 'Durch 4 teilbar, nicht durch 100'],
          ['2000', 'ja', 'ja', 'ja', 'Durch 400 teilbar, also doch ein Schaltjahr'],
          ['1900', '<strong>ja</strong>', 'nein', 'nein', 'Durch 100 teilbar, aber nicht durch 400'],
          ['2100', '<strong>ja</strong>', 'nein', 'nein', 'Wie 1900: kein Schaltjahr']
        ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Die Regel in eigenen Worten.</strong> Bevor Ihr Kind tippt, sagt es die Regel laut auf und prüft sie an vier Jahren auf Papier: 2026, 2028, 1900, 2000.',
          '<strong>Die erste Fassung.</strong> Die meisten Kinder schreiben die Bedingungen in der Reihenfolge, in der sie die Regel gehört haben: erst durch 4, dann durch 100, dann durch 400. Das ist <code>schaltjahr_falsch</code>.',
          '<strong>Der Fehler.</strong> Für 1900 antwortet die erste Fassung mit True. Warum? Weil 1900 durch 4 teilbar ist, steigt das Programm schon bei der ersten Bedingung mit True aus. Die beiden anderen Zeilen erreicht es nie.',
          '<strong>Die Reihenfolge drehen.</strong> In <code>schaltjahr</code> kommt der seltenste Fall zuerst: durch 400, dann durch 100, dann durch 4. Jetzt stimmt jedes Jahr.',
          '<strong>Gegen eine zweite Quelle prüfen.</strong> Pythons Modul <code>calendar</code> hat eine fertige Funktion <code>isleap</code>. Wenn beide übereinstimmen, ist Ihr Kind auf der sicheren Seite.'
        ] },
        { kind: 'p', mt: true, html: 'Die letzte Zeile der Ausgabe ist ein kleines Extra: <code>calendar.leapdays(2026, 2101)</code> zählt die Schaltjahre von 2026 bis einschließlich 2100 und liefert 18. Laut Python-Dokumentation zählt die Funktion "from y1 to y2 (exclusive)", deshalb steht dort 2101 und nicht 2100. Kinder rechnen gern nach: Von 2028 bis 2096 sind es 18 durch 4 teilbare Jahre, und 2100 zählt nicht mit. Das Modul rechnet übrigens, wie die Dokumentation schreibt, mit dem gregorianischen Kalender, "extended indefinitely in both directions", also auch für Jahre, in denen es diesen Kalender noch gar nicht gab.' },
        { kind: 'p', html: 'Was ein Kind an diesem Projekt lernt, gilt weit über Kalender hinaus: Bei <code>if</code> und <code>elif</code> gewinnt die erste Bedingung, die zutrifft. Deshalb gehört der speziellste Fall nach oben.' }
      ]
    },
    {
      id: 'schule',
      eyebrow: 'Schule und Wettbewerbe',
      h2: 'Wo kommt Python in der Schule und in Wettbewerben vor?',
      lede: 'Programmieren beginnt in vielen Ländern in Klasse 5 oder 6, als Teil des Fachs Informatik. Welche Sprache verwendet wird, entscheidet meist die Schule; Python ist häufig dabei, aber nicht überall.',
      body: [
        { kind: 'table', numCols: [], caption: 'Länder, in denen Informatik schon in der Unterstufe Pflicht ist (Auswahl), Schuljahr 2026/27', head: ['Land', 'Was gilt', 'Seit'], rows: [
          ['Nordrhein-Westfalen', 'Pflichtfach Informatik in Klasse 5 und 6 an allen allgemeinbildenden Schularten', 'Laut Monitor in Kraft'],
          ['Baden-Württemberg', 'Pflichtfach Informatik und Medienbildung, zuerst in Klasse 5 und 6', 'Schuljahr 2025/26, jährlich aufwachsend'],
          ['Bayern, Mittelschule', 'Informatik in Klasse 5 bis 10 mit je einer Wochenstunde', 'Laut Monitor in Kraft'],
          ['Niedersachsen, zum Vergleich', 'Pflichtfach erst in Klasse 9 und 10', 'Schuljahr 2024/25']
        ] },
        { kind: 'source', html: 'Quelle: Gesellschaft für Informatik, Informatik-Monitor 2026/27, Seiten der Länder Nordrhein-Westfalen, Baden-Württemberg, Bayern und Niedersachsen, gelesen am 2. November 2026. Alle 16 Länder vergleicht unsere englische Seite <a class="ag-inline-link" href="/informatik-in-german-schools-by-state">Informatik by Land</a>.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Jugendwettbewerb Informatik: die drei Stufen seit 2026', head: ['Stufe', 'Empfohlen für', 'Umfang'], rows: [
          ['Bronze', 'Jahrgangsstufe 5 und 6', '3 Aufgaben in 30 Minuten'],
          ['Silber', 'Jahrgangsstufe 7, 8 und 9', '4 Aufgaben in 40 Minuten'],
          ['Gold', 'Ab Jahrgangsstufe 10', '6 Aufgaben in 60 Minuten']
        ] },
        { kind: 'source', html: 'Quelle: Bundesweite Informatikwettbewerbe (BWINF), Seite Jugendwettbewerb Informatik, gelesen am 2. November 2026. Teilnehmen ist laut BWINF grundsätzlich schon ab Jahrgangsstufe 3 möglich. 2025 gab es einen Teilnahmerekord mit 71.971 Schülerinnen und Schülern; die dritte Runde 2026 hat Einsendeschluss am 23. November 2026. Wir sind mit BWINF nicht verbunden und geben keine Wettbewerbsaufgaben wieder.' },
        { kind: 'p', mt: true, html: 'Für den Unterricht bei uns bedeutet das: Kinder in Nordrhein-Westfalen oder Baden-Württemberg, die in Klasse 5 Informatik bekommen, profitieren davon, wenn sie Variablen und Schleifen schon kennen. Und wer in Bronze oder Silber beim Jugendwettbewerb antritt, hat mit Python-Erfahrung einen Vorsprung beim Denken, auch wenn die Wettbewerbsaufgaben eigene Werkzeuge verwenden.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Drei Beispieltermine nach der Schule und die Uhrzeit in Indien', head: ['Termin in Deutschland', 'Indien im Winter', 'Indien ab 28. März 2027'], rows: [
          ['15:50', '20:20', '19:20'],
          ['17:45', '22:15', '21:15'],
          ['Samstag 11:30', '16:00', '15:00']
        ] },
        { kind: 'source', html: 'Deutschland: MEZ (UTC+1) im Winter, MESZ (UTC+2) im Sommer, nach dem Einheiten- und Zeitgesetz; Wechsel zurück zur MEZ am 25. Oktober 2026, zur MESZ am 28. März 2027. Indien: ganzjährig UTC+5:30, im Winter also viereinhalb und im Sommer dreieinhalb Stunden später als bei uns. Die Uhrzeiten sind Beispiele; feste Gruppenzeiten veröffentlichen wir hier nicht.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Fünf Stufen bis zum eigenen Python-Programm',
    lede: 'So beschreiben wir Eltern, wo ihr Kind steht. Die Stufen sind unsere eigenen und keine Schulnoten.',
    table: { caption: 'Python für Kinder in fünf Stufen (unsere)', head: ['Stufe', 'Werkzeug', 'Ihr Kind kann'], rows: [
      ['1. Ausgeben', 'print, Zeichenketten', 'Text und Rechenergebnisse auf den Bildschirm bringen'],
      ['2. Merken', 'Variablen, input', 'Werte speichern, ändern und vom Benutzer abfragen'],
      ['3. Entscheiden', 'if, elif, else', 'Bedingungen in der richtigen Reihenfolge schreiben, wie beim Schaltjahr'],
      ['4. Wiederholen', 'for, while, range', 'eine Aufgabe für viele Werte erledigen lassen'],
      ['5. Ordnen', 'Funktionen, Listen', 'ein Programm in Teile zerlegen und jeden Teil einzeln prüfen']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Stufe 3 ist der erste echte Prüfstein. Kinder, die verstehen, warum die Reihenfolge der Bedingungen zählt, kommen danach schnell voran.',
      'Fragen Sie Ihr Kind ruhig, wie es ein Ergebnis überprüft hat. Gute Programmierer vertrauen ihrem eigenen Code nicht blind.'
    ] },
    right: { h3: 'Für Schülerinnen und Schüler', ps: [
      'Lesen Sie eine Fehlermeldung bis zur letzten Zeile. Dort steht fast immer, in welcher Zeile Ihres Programms es klemmt.',
      'Prüfen Sie jedes Programm mit einem Wert, bei dem Sie die Antwort schon kennen, und mit einem Sonderfall wie 1900.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse vor und nach Python',
    lede: 'Auch diese Kurse sind live und englischsprachig; der Mentor wechselt nicht, egal ob Ihr Kind allein oder in einer Gruppe lernt.',
    bands: [
      { num: 'I', h3: 'Davor', sub: '6 bis 12 Jahre', courses: [
        { code: 'PKK / DAVOR / 01', slug: 'scratch-programming-complete-course', title: 'Scratch für den Einstieg', blurb: 'Schleifen und Bedingungen mit Blöcken.' },
        { code: 'PKK / DAVOR / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Probleme lösen', blurb: 'Denken wie ein Informatiker, Klasse 3 bis 8.' },
        { code: 'PKK / DAVOR / 03', slug: 'ai-literacy-for-kids-course', title: 'KI verstehen', blurb: 'Wie Maschinen lernen, 8 bis 14.' }
      ] },
      { num: 'II', h3: 'Daneben', sub: '9 bis 17 Jahre', courses: [
        { code: 'PKK / NEBEN / 01', slug: 'cpp-programming-for-kids-course', title: 'C++ für Kinder', blurb: 'Eine zweite Textsprache, 9 bis 12.' },
        { code: 'PKK / NEBEN / 02', slug: 'kids-ai-web-development-course', title: 'Webseiten bauen', blurb: 'HTML, CSS und Skripte, 9 bis 12.' },
        { code: 'PKK / NEBEN / 03', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Spiele mit Godot', blurb: 'GDScript ähnelt Python, 10 bis 17.' }
      ] },
      { num: 'III', h3: 'Danach', sub: '10 bis 18 Jahre', courses: [
        { code: 'PKK / DANACH / 01', slug: 'python-complete-masterclass-teens', title: 'Python für Jugendliche', blurb: 'Der nächste Schritt ab 13.' },
        { code: 'PKK / DANACH / 02', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatik-Wettbewerbe', blurb: 'Vom Biber bis zum Bundeswettbewerb.' },
        { code: 'PKK / DANACH / 03', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Mathe-Olympiade und Känguru', blurb: 'Für Kinder, die gern tüfteln.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Organisation',
    h2: 'So ist der Python-Kurs aufgebaut',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Später Nachmittag', l: 'Für Kinder mit Nachmittagsunterricht oder Verein.' },
      { time: 'Samstag', l: 'Am späten Vormittag, wenn die Woche voll ist.' },
      { time: 'Einzeln', l: 'Zu Zeiten, die Sie vereinbaren.' }
    ],
    cells: [
      { h3: 'Echter Code ab Stunde eins', p: 'Kein Spielzeug: Ihr Kind schreibt richtiges Python.' },
      { h3: 'Fehlermeldungen lesen', p: 'Wir üben, was Python mit einer Meldung sagen will.' },
      { h3: 'Fester Mentor', p: 'Jede Woche dieselbe Person, live per Video.' },
      { h3: 'Englisch im Code', p: 'if, for und print sind englische Wörter; im Kurs wird das zum Vorteil.' },
      { h3: 'Zweimal pro Woche', p: 'Eine volle Stunde live, zweimal in jeder Woche.' },
      { h3: 'Monatlich kündbar', p: 'Keine Vertragsbindung.' }
    ]
  },

  projectsH2: 'Was Kinder mit Python bauen',
  projectsLede: 'Vom Schaltjahr-Prüfer ist es nicht weit bis zum ersten eigenen Spiel. Einige Projekte unserer Lernenden sehen Sie unten; mehr auf <a class="ag-inline-link" href="/student-labs">Student labs</a> (auf Englisch).',
  reviewsLede: 'Was Familien auf Google über uns geschrieben haben, unübersetzt.',

  fees: {
    h2: 'Kosten des Python-Kurses für Kinder',
    lede: 'Gezahlt wird ein Monatsbeitrag, der acht Live-Stunden einschließt. Den Betrag nennen wir Ihnen in Euro, berechnet über den Referenzkurs der Europäischen Zentralbank. Die Abbuchung erfolgt allerdings in US-Dollar; Ihre Bank wechselt den Betrag in Euro, und dadurch kann er auf dem Kontoauszug etwas anders aussehen als hier.',
    free: ['Kostenlose Probestunde mit erstem Python-Code', 'Einschätzung, ob Scratch oder Python passt', 'Keine Karte nötig'],
    group: ['Fünfzehn bis zwanzig Kinder ähnlichen Alters', 'Ein fester Mentor', 'Zwei Live-Stunden pro Woche', 'Monatlich kündbar'],
    one: ['Ihr Kind allein mit dem Mentor', 'Eigene Projekte und eigenes Tempo', 'Flexible Termine']
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    h2: 'Python-Kurs für Kinder: Antworten für Eltern',
    items: [
      { q: 'Ab welchem Alter kann ein Kind Python lernen?', a: 'Meist ab neun oder zehn Jahren, wenn es flüssig tippt und Schleifen aus Scratch kennt. Ohne Vorerfahrung klappt der Einstieg gut ab elf oder zwölf. Jüngeren Kindern empfehlen wir zuerst einige Monate Scratch.' },
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein: Gesprochen wird im Python-Kurs ausschließlich Englisch, live und mit festem Mentor. Das passt gut: Python selbst besteht aus englischen Wörtern wie if, for, while und print, und auch die Fehlermeldungen sind englisch. Die Mentoren sprechen ruhig und klar und richten sich nach dem Tempo und der Aussprache Ihres Kindes.' },
      { q: 'Muss ich Python kaufen oder ein Abo abschließen?', a: 'Nein. Python steht laut python.org unter einer Open-Source-Lizenz und darf frei genutzt werden. Für die ersten Stunden arbeitet Ihr Kind sogar ganz ohne Installation im Browser.' },
      { q: 'Welche Python-Version sollen wir installieren?', a: 'Die aktuelle Version 3.15. Laut python.org ist sie am 9. Oktober 2026 erschienen und wird bis Oktober 2031 unterstützt; die neueste Ausgabe ist 3.15.2 vom 25. Oktober 2026. Der Mentor hilft beim Installieren.' },
      { q: 'Wird in der Schule auch Python unterrichtet?', a: 'Oft, aber nicht überall. Informatik ist zum Beispiel in Nordrhein-Westfalen in Klasse 5 und 6 Pflicht und in Baden-Württemberg seit 2025/26 zunächst in Klasse 5 und 6. Welche Programmiersprache verwendet wird, entscheidet meist die Schule. Für Schulinformatik gibt es bei uns zusätzlich den Informatik Companion für Klasse 5 bis 10.' },
      { q: 'Lernen die Kinder auch künstliche Intelligenz?', a: 'Im Kurs Python and AI for Kids kommen später kleine Projekte vor, die zeigen, wie Programme aus Daten lernen. Chatbots mit Erwachsenenkonto empfehlen wir Kindern nicht. Zuerst lernt Ihr Kind, selbst zu programmieren und Ergebnisse zu prüfen, wie beim Schaltjahr-Prüfer.' },
      { q: 'Wann sind die Python-Stunden?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. Die Buchung läuft in deutscher Zeit.' },
      { q: 'Braucht mein Kind einen eigenen Laptop?', a: 'Nein, ein Familienlaptop oder Computer mit Kamera und Tastatur genügt. Tablets und Smartphones reichen zum Programmieren nicht gut aus, auch wenn es Python inzwischen für Android und iOS gibt.' },
      { q: 'Was kostet der Python-Kurs?', a: 'Den Monatsbeitrag finden Sie weiter oben, angezeigt in Euro nach dem Referenzkurs der Europäischen Zentralbank. Die Belastung erfolgt in US-Dollar, den Wechsel in Euro besorgt Ihre Bank. Für die Probestunde zahlen Sie nichts.' },
      { q: 'Bekommt mein Kind ein Zertifikat oder eine Note?', a: 'Nein. Noten, Zeugnisse oder offiziell anerkannte Abschlüsse gibt es bei uns nicht. Ihr Kind behält seine Programme und das Wissen, wie man sie prüft. Für das Schulfach Informatik zählt allein der Unterricht an der Schule.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weitere Seiten',
    h2: 'Mehr zum Thema für Familien in Deutschland',
    lede: 'Eine kleine Auswahl, meist auf Englisch.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Der Überblick für ganz Deutschland.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'Informatik-Pflicht in allen 16 Ländern.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Hilfe im Schulfach, Klasse 5 bis 13.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML classes in Germany', p: 'Für ältere Lernende, die mit Python weitermachen.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'So unterrichten wir live.' },
      { href: '/courses', label: 'All courses', p: 'Alle Lehrpläne.' }
    ]
  },

  start: {
    h2: 'Python-Probestunde buchen',
    lede: 'In der Probestunde schreibt Ihr Kind seine ersten Zeilen Python, lässt den Computer rechnen und liest vielleicht schon die erste Fehlermeldung. Der Mentor sieht dabei, ob Python schon passt oder ob ein paar Wochen Scratch vorher sinnvoller sind, und sagt es Ihnen ehrlich.',
    readFirst: 'Lesestoff vorab: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> beschreibt unseren Unterricht, <a class="ag-inline-link" href="/courses">All courses</a> listet die Kurse (beide auf Englisch).',
    note: 'Der Unterricht ist live online, mit Mentoren, die in Indien sitzen, und er findet nur auf Englisch statt. WhatsApp ist der schnellste Weg zu uns.',
    formNote: 'Kostenlos, unverbindlich, ohne Zahlungsdaten.'
  },

  footer: {
    cols: [
      { h4: 'Python für Kinder', links: [
        { href: '/courses/python-ai-kids-masterclass', label: 'Python and AI for Kids' },
        { href: '/courses/maths-through-coding', label: 'Mathematik mit Python' },
        { href: '/courses/informatik-companion-course-klasse-5-10', label: 'Informatik Companion' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik nach Land' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Der Sonderfall gehört nach oben'
  },

  personalityCss: `
.ag-root.ag-pkk .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-pkk .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-pkk .ag-code-head b { letter-spacing: 0.015em; }
.ag-root.ag-pkk .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-pkk .ag-section-head h2 { max-width: 32ch; }
`,

  dossier: {
    curriculumAuthority: 'python.org downloads, about and tutorial pages; Python calendar module documentation; GI Informatik-Monitor 2026/27 (NRW, BW, BY, NI); BWINF Jugendwettbewerb pages; Einheiten- und Zeitgesetz; read 2 and 3 November 2026. Example code our own.',
    localProject: 'A Schaltjahr-Prüfer: an original Python project in which the version that tests divisibility by 4 first calls 1900 and 2100 leap years, the version that tests 400 first gets every year right, both are checked against calendar.isleap, and calendar.leapdays(2026, 2101) gives 18; run with python3. Lesson family: the order of conditions matters, special case first.',
    requiredMentions: ['schaltjahr_falsch', '1900 True False False', 'calendar.leapdays(2026, 2101)', 'neueste Ausgabe 3.15.2 vom 25. Oktober 2026', '6. Oktober 2027 (geplant)', 'Python is an easy to learn, powerful programming language.', '3 Aufgaben in 30 Minuten', 'Der Sonderfall gehört nach oben'],
    sources: [
      { claim: 'Python release table: 3.15 released 2026-10-09, support to 2031-10; 3.15.2 on 25 Oct 2026; 3.16 planned 2027-10-06.', url: 'https://www.python.org/downloads/' },
      { claim: 'OSI-approved open source licence, free even for commercial use.', url: 'https://www.python.org/about/' },
      { claim: 'Easy to learn, powerful.', url: 'https://docs.python.org/3/tutorial/index.html' },
      { claim: 'calendar.isleap, calendar.leapdays (exclusive end), proleptic Gregorian calendar.', url: 'https://docs.python.org/3/library/calendar.html' },
      { claim: 'Informatik grades 5 and 6 in NRW; BW from 2025/26.', url: 'https://informatik-monitor.de/2026-27/laendervergleich/nordrhein-westfalen' },
      { claim: 'Jugendwettbewerb levels, record participation, round 3 deadline.', url: 'https://bwinf.de/jugendwettbewerb/' }
    ],
    rejectedClaims: [
      'German-language teaching: we teach in English only, and the page says so.',
      'Which programming language each Land prescribes: not in our sources, so not stated.',
      'Reproducing Jugendwettbewerb tasks: refused; the project is our own.',
      'Recommending adult-account chatbots to children: refused.'
    ]
  }
};
