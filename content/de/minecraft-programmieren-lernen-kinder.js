'use strict';
// Minecraft programmieren lernen für Kinder (ag- German-language door DE065, Germany cluster P3, rows.tsv German doors).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors (based in India) who match the learner's pace and
// accent; the capsule says "auf Englisch". Formal "Sie" throughout. Pages show euro; checkout charges USD.
// Angle: German parents whose child loves Minecraft (the favourite game of children who play, KIM-Studie 2024): which
// Minecraft is which (game vs Minecraft Education), what Mojang's own terms say about child accounts and multiplayer,
// how a child gets from building to programming, and one original project: lever logic (AND, OR, NOT) as a truth table,
// planned on paper, checked in Python, then built with levers and lamps.
// Age and account rules ONLY from Mojang/Microsoft pages (caller's rule). Not used: the USK search result (third party),
// microsoft.com Services Agreement (HTTP 403, stopped for that host, not retried).
// Sources (fetched raw with curl -sL -A "Mozilla/5.0" on 3 Nov 2026; quotes grepped in the raw text):
//  Minecraft EULA https://www.minecraft.net/en-us/eula (eula.txt): "If you are a minor and you are having trouble
//   understanding these terms and conditions, please ask your parent or legal guardian to explain them, especially as
//   your parent or legal guardian is responsible for the creation of your Microsoft account and the acceptance all terms
//   on your behalf."
//  Minecraft Parents Guide https://www.minecraft.net/en-us/article/parents--guide-minecraft (parents-guide.txt):
//   "A child account is an account for those under the age of 16 for the US & EU, and 19 for South Korea, and cannot exist
//   without an adult Microsoft account tied to it."; "Only adult accounts can modify family settings for children, like
//   enabling multiplayer settings."; "Both Java Edition and Bedrock Edition have multiplayer turned off by default on child
//   accounts."; "The game has a recommended PEGI rating of 7 and an ESRB rating of Everyone 10+."; "There are two
//   different versions of Minecraft: Java Edition and Bedrock Edition."
//  Minecraft Education for Parents https://education.minecraft.net/en-us/get-started/parents (edu-parents.txt):
//   "Your child may already have access through their school account."; "Requires a Microsoft 365 education license and
//   is deployed on school-managed devices."; "Code Builder tool that allows coding in MakeCode"; "Minecraft Bedrock offers
//   tons of free-to-play educational worlds on the Minecraft Marketplace."
//  Minecraft Education get-started (edu-get.txt): "Millions of educators and students use Minecraft Education in 115 countries".
//  Minecraft Education licensing (edu-licensing.txt): "Anyone with a Microsoft 365 account can purchase and use Minecraft Education."
//  MakeCode About https://www.makecode.com/about (makecode-about.txt): "The blocks map directly to actual lines of code in
//   a programming language."; "Microsoft MakeCode is based on the open source project Microsoft Programming Experience Toolkit (PXT)."
//  KIM-Studie 2024, mpfs (KIM-Studie-2024.txt): Minecraft named by "24 Prozent der Kinder" as a favourite game, "Mit einer
//   Steigerung von sieben Prozentpunkten im Vergleich zu 2022" (base: children who play digital games, n=884); in family
//   play "Minecraft" (12 %) (n=392). Gender split deliberately not used.
//  Time: EinhZeitG para 4, SoZV; summer time 2027 from 28 March.
// Our own: hebel.py (python3 -I, CPython 3.14.8), output printed exactly: four truth-table lines
//   (False False False False / False True False True / True False False True / True True True True),
//   "offen bei True True False", "1 von 8".
// Lesson family: truth tables; list every case before you build (AND, OR, NOT).

const { DE } = require('../../scripts/nl/lib/market-de');

const PY = [
  'def tuer_und(a, b):',
  '    return a and b',
  '',
  'def tuer_oder(a, b):',
  '    return a or b',
  '',
  'def tuer_geheim(a, b, c):',
  '    return a and b and not c',
  '',
  'for a in [False, True]:',
  '    for b in [False, True]:',
  '        print(a, b, tuer_und(a, b), tuer_oder(a, b))',
  '',
  'offen = 0',
  'for a in [False, True]:',
  '    for b in [False, True]:',
  '        for c in [False, True]:',
  '            if tuer_geheim(a, b, c):',
  '                offen = offen + 1',
  "                print('offen bei', a, b, c)",
  "print(offen, 'von 8')"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'Minecraft programmieren lernen' },
  slug: 'minecraft-programmieren-lernen-kinder',
  code: 'mpl',
  accent: '#4E4A6F',
  accentRationale: 'Minecraft programmieren lernen: a dusk indigo #4E4A6F, the shade of a deepslate cave wall, distinct from the green, blue and rose German children\'s pages; contrast 6.73 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Minecraft programmieren lernen (auf Englisch)',
  title: 'Minecraft programmieren lernen: für Kinder, live online',
  description: 'Kinder lernen mit Minecraft programmieren, live auf Englisch: welches Minecraft wofür ist, was Mojang zu Kinderkonten sagt, und ein Projekt mit Hebeln und Logik.',
  ogDescription: 'Minecraft ist das Lieblingsspiel vieler Kinder in Deutschland. So wird daraus Programmieren: Spiel oder Minecraft Education, Kinderkonten nach Mojang, MakeCode und ein Hebel-Projekt mit UND und ODER.',
  twitterDescription: 'Minecraft programmieren lernen, live auf Englisch: Editionen, Kinderkonten und ein Hebel-Projekt mit Wahrheitstabelle.',
  pageName: 'Minecraft programmieren lernen für Kinder',
  webPageDescription: 'Ein Leitfaden für Eltern in Deutschland, deren Kind mit Minecraft programmieren lernen möchte: wie beliebt Minecraft laut KIM-Studie 2024 ist, was Spiel und Minecraft Education unterscheidet, was Mojang zu Kinderkonten und Mehrspielermodus festlegt, und ein eigenes Projekt mit Hebeln, Lampen und einer Wahrheitstabelle.',
  courseDescription: 'Live-Online-Kurse, in denen Kinder von etwa 7 bis 12 Jahren in ganz Deutschland mit Minecraft programmieren lernen, ausschließlich auf Englisch: von Blöcken zu Textcode, mit Logik, Schleifen und eigenen Bauprojekten, in der Gruppe oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Minecraft programmieren',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#welches', label: 'Welches Minecraft?' },
    { href: '#konto', label: 'Kinderkonto' },
    { href: '#hebel', label: 'Hebel' },
    { href: '#weg', label: 'Lernweg' }
  ],
  eyebrow: 'Deutschland &middot; Minecraft &middot; Kinder von 7 bis 12',
  h1: 'Minecraft programmieren lernen, live online',
  lede: 'Ihr Kind baut in Minecraft Burgen, Bahnstrecken und geheime Türen. Bis zum Programmieren ist es von dort nur ein kleiner Schritt, wenn jemand zeigt, wie. Diese Seite erklärt, welches Minecraft wofür gedacht ist, was Mojang selbst zu Kinderkonten und zum Spielen mit Fremden festlegt, wie unser Kurs von Blöcken zu echtem Code führt, und wie Ihr Kind mit drei Hebeln eine Geheimtür plant, die nur bei einer einzigen Stellung aufgeht.',
  secondaryCta: { href: '#hebel', label: 'Zum Hebel-Projekt' },
  wa: 'Hallo Modern Age Coders, unser Kind liebt Minecraft und möchte damit programmieren lernen, gern live auf Englisch. Gibt es eine kostenlose Probestunde?',
  heroNote: 'Live online seit 2020 &middot; über 10.000 Lernende weltweit &middot; Mentor auf Englisch, immer derselbe',
  spec: [
    ['Alter', 'Etwa 7 bis 12 Jahre'],
    ['Werkzeuge', 'Minecraft, Blockcode, später Textcode'],
    ['Ziel', 'Vom Bauen zum Programmieren'],
    ['Unterricht', 'Live per Video, mit Bildschirmfreigabe'],
    ['Gruppe', 'Fünfzehn bis zwanzig, oder einzeln'],
    ['Probestunde', 'Kostenlos, ohne Kreditkarte']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Minecraft programmieren lernen heißt bei Modern Age Coders: Kinder von etwa 7 bis 12 Jahren in ganz Deutschland bauen in Minecraft mit Code statt mit der Hand, zuerst mit Blöcken, dann mit getipptem Code, und lernen dabei Logik, Schleifen und Bedingungen. Wir unterrichten live online und auf Englisch; Ihr Kind hat einen festen Mentor, der sich nach seinem Tempo und seiner Aussprache richtet, und lernt entweder zusammen mit fünfzehn bis zwanzig anderen oder für sich allein. Der Kurs heißt Minecraft Coding for Kids.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Kurse für Kinder, die Minecraft lieben',
    lede: 'Der erste ist unser Minecraft-Kurs, der zweite verbindet Minecraft mit anderen Spielwelten, der dritte führt zu Python, wenn Ihr Kind mehr will als Blöcke.',
    items: [
      { course: 'minecraft-coding-for-kids-course', code: 'MPL / 01', title: 'Minecraft Coding for Kids', alt: 'Kursbild Minecraft Coding for Kids: From Blocks to Real Code', note: 'Für 7 bis 12 Jahre, ohne Vorkenntnisse, vier Monate. Vom ersten Block bis zu Code, der ganze Bauwerke errichtet und Fallen auslöst.' },
      { course: 'game-development-masterclass-for-kids', code: 'MPL / 02', title: 'Spiele entwickeln: Scratch, Roblox, Minecraft', alt: 'Kursbild Game Development for Kids', note: 'Für 8 bis 12 Jahre. Für Kinder, die nicht nur in Minecraft bauen, sondern eigene Spiele erfinden wollen.' },
      { course: 'python-ai-kids-masterclass', code: 'MPL / 03', title: 'Python and AI for Kids', alt: 'Kursbild Python and AI for Kids', note: 'Von Klasse 3 bis Klasse 8. Der nächste Schritt für Minecraft-Kinder, die gemerkt haben, dass Textcode mehr kann als Blöcke.' }
    ]
  },

  sections: [
    {
      id: 'welches',
      eyebrow: 'Spiel oder Schule',
      h2: 'Welches Minecraft brauchen Kinder zum Programmieren lernen?',
      lede: 'Es gibt mehrere Minecraft-Ausgaben, und nur eine davon ist für den Unterricht gebaut. Bevor Sie etwas kaufen, lohnt ein Blick auf die Unterschiede, so wie Mojang und Microsoft sie selbst beschreiben.',
      body: [
        { kind: 'table', numCols: [], caption: 'Minecraft-Ausgaben und was sie fürs Programmieren bedeuten', head: ['Ausgabe', 'Was Mojang oder Microsoft dazu sagt', 'Fürs Programmieren'], rows: [
          ['Minecraft Java Edition', 'Eine der zwei Fassungen des Spiels, mit eigenen Plattformen und Diensten', 'Gut zum Bauen mit Hebeln und Schaltungen; Code eher über Erweiterungen für Fortgeschrittene'],
          ['Minecraft Bedrock Edition', 'Die zweite Fassung; mit dem Marketplace, auf dem es laut Minecraft Education viele kostenlose Lernwelten gibt', 'Gut zum Bauen und für Lernwelten zu Hause'],
          ['Minecraft Education', 'Braucht eine Microsoft-365-Lizenz für Bildungseinrichtungen und läuft auf von der Schule verwalteten Geräten; enthält Code Builder zum Programmieren mit MakeCode', 'Gebaut fürs Programmieren; Ihr Kind hat vielleicht schon Zugang über ein Schulkonto'],
          ['MakeCode', 'Ein Editor, in dem Blöcke "direkt echten Codezeilen" einer Programmiersprache entsprechen; quelloffen', 'Der Weg von Blöcken zu getipptem Code']
        ] },
        { kind: 'source', html: 'Quellen: Minecraft, "Parents Guide" auf minecraft.net; Minecraft Education, Seiten "for Parents", "Get Started" und "Licensing" auf education.minecraft.net; Microsoft MakeCode, Seite "About" auf makecode.com; alle gelesen am 3. November 2026. Die Spalte "Fürs Programmieren" ist unsere Einschätzung. Wir sind weder mit Mojang noch mit Microsoft verbunden.' },
        { kind: 'two', mt: true,
          leftH3: 'Fragen Sie zuerst in der Schule',
          left: [
            'Minecraft Education schreibt auf seiner Seite für Eltern: Ihr Kind habe möglicherweise schon Zugang über sein Schulkonto. Weltweit wird es nach Angaben von Minecraft Education in 115 Ländern eingesetzt.',
            'Wenn die Schule Ihres Kindes Microsoft 365 nutzt, lohnt sich eine kurze Nachfrage bei der Klassenlehrkraft oder der IT-Ansprechperson, bevor Sie selbst etwas anschaffen.'
          ],
          rightH3: 'Und wenn nicht?',
          right: [
            'Dann brauchen Sie für unseren Kurs kein Minecraft Education. Ein großer Teil des Lernens passiert in Werkzeugen, die im Browser laufen, und mit Logik, die Ihr Kind danach in jedem Minecraft anwenden kann, auch im ganz normalen Spiel zu Hause.',
            'Der Mentor bespricht in der Probestunde mit Ihnen, welche Ausgabe Ihr Kind schon hat und was damit möglich ist.'
          ] }
      ]
    },
    {
      id: 'konto',
      eyebrow: 'Kinderkonto und Sicherheit',
      h2: 'Was sagt Mojang zu Kinderkonten und zum Spielen mit anderen?',
      lede: 'Für das Spiel braucht Ihr Kind ein Microsoft-Konto, und für Kinder gelten eigene Regeln. Hier stehen sie so, wie Mojang sie in den Nutzungsbedingungen und im Elternratgeber selbst formuliert. Wir geben keine Rechtsberatung, sondern zitieren.',
      body: [
        { kind: 'table', numCols: [], caption: 'Regeln für Kinder in Minecraft, nach Mojangs eigenen Seiten (Stand 3. November 2026)', head: ['Frage', 'Was Mojang schreibt', 'Quelle'], rows: [
          ['Ab wann gilt ein Konto als Kinderkonto?', 'Für Personen unter 16 Jahren in den USA und der EU, in Südkorea unter 19', 'Minecraft Parents Guide'],
          ['Kann ein Kind allein ein Konto haben?', 'Nein: Ein Kinderkonto existiert nur verbunden mit einem Microsoft-Konto eines Erwachsenen', 'Minecraft Parents Guide'],
          ['Wer ändert die Familieneinstellungen?', 'Nur Erwachsenenkonten, zum Beispiel um den Mehrspielermodus freizuschalten', 'Minecraft Parents Guide'],
          ['Ist der Mehrspielermodus an?', 'Auf Kinderkonten ist er in Java und Bedrock standardmäßig ausgeschaltet', 'Minecraft Parents Guide'],
          ['Wer stimmt den Bedingungen zu?', 'Bei Minderjährigen sind Eltern oder Erziehungsberechtigte für das Anlegen des Microsoft-Kontos und die Zustimmung zu allen Bedingungen verantwortlich', 'Minecraft EULA'],
          ['Welche Altersempfehlung nennt Mojang?', 'PEGI 7 und ESRB "Everyone 10+"', 'Minecraft Parents Guide']
        ] },
        { kind: 'source', html: 'Quellen: Minecraft End User License Agreement (EULA) und Minecraft "Parents Guide", beide auf minecraft.net, gelesen am 3. November 2026; Übersetzung und Zusammenfassung von uns. Maßgeblich ist der Originaltext auf Englisch. Die Seite mit den allgemeinen Microsoft-Nutzungsbedingungen hat unsere Abfrage abgelehnt; wir geben sie deshalb nicht wieder.' },
        { kind: 'two', mt: true,
          leftH3: 'Was das für unseren Kurs heißt',
          left: [
            'Im Unterricht spielt Ihr Kind nicht mit Fremden. Gebaut und programmiert wird allein oder in einer Welt, die nur Ihr Kind und der Mentor sehen, oder in Werkzeugen außerhalb des Spiels. Den Mehrspielermodus müssen Sie für unseren Kurs nicht freischalten.',
            'Ein Konto für Ihr Kind legen Sie selbst an, wie es die Bedingungen von Mojang vorsehen. Wir legen keine Konten für Kinder an und fragen keine Zugangsdaten ab.'
          ],
          rightH3: 'Wie beliebt ist Minecraft überhaupt?',
          right: [
            'Sehr. Für die KIM-Studie 2024 hat der Forschungsverbund mpfs Kinder befragt; dort nennen 24 Prozent der Kinder, die digitale Spiele spielen, Minecraft als eines ihrer liebsten Spiele, sieben Prozentpunkte mehr als 2022. Es bleibt damit auf Platz eins.',
            'Und wenn Familien gemeinsam spielen, wird laut derselben Studie am häufigsten Minecraft genannt, von 12 Prozent. Für einen Kurs ist das ein großer Vorteil: Ihr Kind kennt die Welt schon und muss nur lernen, sie mit Code zu steuern.'
          ] }
      ]
    },
    {
      id: 'hebel',
      tint: 'tint',
      eyebrow: 'Ein Projekt für Minecraft-Fans',
      h2: 'Wie baut ein Kind eine Geheimtür mit UND, ODER und NICHT?',
      lede: 'Mit einer Wahrheitstabelle, bevor auch nur ein Block gesetzt wird. Wir haben das Projekt selbst entworfen, für Neunjährige und Ältere, die in Minecraft schon einmal einen Hebel mit einer Lampe verbunden haben. Es funktioniert in jedem Minecraft, mit Hebeln, Lampen und Schaltungen, und dieselbe Logik schreibt Ihr Kind danach als Code.',
      body: [
        { kind: 'ol', items: [
          '<strong>Zwei Hebel, eine Lampe.</strong> Ihr Kind baut zwei Hebel, A und B, und eine Lampe. Die Frage: Wann soll die Lampe leuchten, wenn beide Hebel umgelegt sein müssen? Und wann, wenn einer genügt?',
          '<strong>Alle Fälle aufschreiben.</strong> Zwei Hebel haben vier mögliche Stellungen: beide aus, nur B an, nur A an, beide an. Ihr Kind schreibt sie untereinander auf ein Blatt, mit einer Spalte für UND und einer für ODER.',
          '<strong>Die Tabelle füllen.</strong> Bei UND leuchtet die Lampe nur in der letzten Zeile. Bei ODER in drei von vier Zeilen. Erst jetzt baut Ihr Kind die Schaltung und prüft jede Zeile, indem es die Hebel umlegt.',
          '<strong>Die Geheimtür planen.</strong> Drei Hebel: Die Tür soll nur aufgehen, wenn A und B an sind und C aus bleibt. C ist die Falle. Wie viele Stellungen gibt es jetzt, und bei wie vielen geht die Tür auf?',
          '<strong>Im Code prüfen.</strong> Mit dem Mentor schreibt Ihr Kind dieselbe Regel in Python und lässt den Computer alle Stellungen durchprobieren.'
        ] },
        { kind: 'code', label: 'Hebel-Logik in Python', lang: 'Python', code: PY, note: 'So sieht die Ausgabe aus, wenn wir das Programm laufen lassen: vier Zeilen <code>False False False False</code>, <code>False True False True</code>, <code>True False False True</code>, <code>True True True True</code>, dann <code>offen bei True True False</code> und <code>1 von 8</code>.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Wahrheitstabelle für zwei Hebel (aus der Ausgabe oben)', head: ['Hebel A', 'Hebel B', 'Lampe bei UND', 'Lampe bei ODER'], rows: [
          ['aus', 'aus', 'aus', 'aus'],
          ['aus', 'an', 'aus', 'an'],
          ['an', 'aus', 'aus', 'an'],
          ['an', 'an', 'an', 'an']
        ] },
        { kind: 'p', mt: true, html: 'Bei drei Hebeln gibt es acht Stellungen, zwei mal zwei mal zwei, und die Geheimtür öffnet sich nur bei einer davon: A an, B an, C aus. Das Programm zählt genau das: <code>1 von 8</code>. Kinder, die das verstanden haben, fragen sofort weiter: Was, wenn die Tür bei zwei Stellungen aufgehen soll? Wie viele Stellungen gibt es mit vier Hebeln? Die Antwort, 16, rechnen sie selbst aus, bevor sie sie im Code prüfen.' },
        { kind: 'p', html: 'Das NICHT ist der heimliche Star des Projekts. In Minecraft baut man es oft mit einer Fackel, die ausgeht, wenn Strom kommt; in Python heißt es einfach <code>not</code>. Wer verstanden hat, dass eine Falle ein umgedrehter Schalter ist, versteht später auch Bedingungen wie <code>if not spiel_vorbei</code> in jedem Programm.' }
      ]
    },
    {
      id: 'weg',
      eyebrow: 'Lernweg',
      h2: 'Wie wird aus Minecraft-Bauen echtes Programmieren?',
      lede: 'In vier Schritten, über etwa vier Monate in unserem Minecraft-Kurs. Jeder Schritt beginnt mit etwas, das Ihr Kind aus dem Spiel kennt.',
      body: [
        { kind: 'table', numCols: [], caption: 'Vom Bauen zum Code (unser Lernweg, Beispiel)', head: ['Schritt', 'Aus dem Spiel bekannt', 'Daraus wird', 'Begriff'], rows: [
          ['1', 'Eine Mauer Block für Block setzen', 'Eine Anweisung, die einen Block setzt, zehnmal wiederholt', 'Schleife'],
          ['2', 'Eine Tür, die mit dem Hebel aufgeht', 'Wenn Hebel an, dann Tür offen', 'Bedingung'],
          ['3', 'Gesammelte Diamanten zählen', 'Eine Zahl, die bei jedem Fund um eins steigt', 'Variable'],
          ['4', 'Ein Haus, das man immer wieder baut', 'Ein Bauplan mit Namen, den man aufruft', 'Funktion']
        ] },
        { kind: 'p', mt: true, html: 'MakeCode beschreibt seine Blöcke selbst als direkte Entsprechung echter Codezeilen. Genau diesen Übergang nutzen wir: Ihr Kind baut einen Ablauf zuerst aus Blöcken und schaut dann nach, wie derselbe Ablauf als Text aussieht. Nach einigen Wochen tippt es kleine Änderungen direkt im Text, weil das schneller geht.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Drei Beispieltermine und die Uhrzeit beim Mentor in Indien', head: ['Hier in Deutschland', 'In Indien, Winterzeit', 'In Indien, ab 28. März 2027'], rows: [
          ['14:15', '18:45', '17:45'],
          ['16:10', '20:40', '19:40'],
          ['Samstag 12:00', '16:30', '15:30']
        ] },
        { kind: 'source', html: 'Nach dem Einheiten- und Zeitgesetz gilt in Deutschland die MEZ (UTC+1) und im Sommer die MESZ (UTC+2). Seit dem 25. Oktober 2026 ist Winterzeit; umgestellt wird wieder in der Nacht zum 28. März 2027. Die indische Uhr steht das ganze Jahr auf UTC+5:30, also viereinhalb Stunden vor unserer im Winter und dreieinhalb im Sommer. Die Zeilen sind Beispiele und keine festen Gruppenzeiten.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Woran Sie den Fortschritt im Minecraft-Kurs sehen',
    lede: 'Unsere eigenen Stufen. Sie beschreiben, was Ihr Kind kann, nicht wie schnell es spielt.',
    table: { caption: 'Fünf Stufen vom Bauen zum Programmieren (unsere)', head: ['Stufe', 'Ihr Kind kann', 'Typisches Projekt'], rows: [
      ['1. Wiederholen', 'eine Schleife statt vieler gleicher Schritte verwenden', 'eine Mauer oder Treppe per Code'],
      ['2. Schalten', 'UND, ODER und NICHT in einer Tabelle vorhersagen', 'die Geheimtür mit drei Hebeln'],
      ['3. Zählen', 'mit einer Variable Funde, Runden oder Punkte zählen', 'ein Zähler für gesammelte Gegenstände'],
      ['4. Bauplan', 'eine Funktion schreiben und mit anderen Werten aufrufen', 'Häuser in drei Größen aus einem Bauplan'],
      ['5. Eigene Idee', 'ein eigenes Projekt planen, bauen und erklären', 'ein Minispiel mit Regeln, die es selbst erfunden hat']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Stufe 2 ist entscheidend. Ein Kind, das eine Wahrheitstabelle ausfüllt, bevor es baut, denkt wie ein Programmierer und nicht nur wie ein Spieler.',
      'Fragen Sie nach einer Stunde ruhig, was eine Schaltung tut, bevor Ihr Kind sie vorführt. Die Vorhersage zeigt, ob es verstanden hat.'
    ] },
    right: { h3: 'Für Kinder', ps: [
      'Schreiben Sie zuerst alle Fälle auf, dann bauen Sie. Wer einen Fall vergisst, findet ihn später als Fehler wieder.',
      'Eine Falle ist ein NICHT. Fragen Sie sich bei jeder Tür: Was darf auf keinen Fall an sein?'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse für junge Baumeister',
    lede: 'Live, auf Englisch und mit demselben Mentor über Monate, wahlweise in einer Gruppe oder allein.',
    bands: [
      { num: 'I', h3: 'Davor oder daneben', sub: '6 bis 12 Jahre', courses: [
        { code: 'MPL / BASIS / 01', slug: 'scratch-programming-complete-course', title: 'Scratch für Grundschulkinder', blurb: 'Klasse 1 bis 5, in drei Stufen.' },
        { code: 'MPL / BASIS / 02', slug: 'kids-coding-blocks-masterclass', title: 'Coding for Kids', blurb: 'Breiter Einstieg mit Blöcken, 6 bis 12.' },
        { code: 'MPL / BASIS / 03', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Logisch denken für Jüngere', blurb: 'Rätsel und Muster, 6 bis 9.' }
      ] },
      { num: 'II', h3: 'Andere Spielwelten', sub: '8 bis 17 Jahre', courses: [
        { code: 'MPL / WELT / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox programmieren', blurb: 'Eigene Spiele in Luau, 8 bis 14.' },
        { code: 'MPL / WELT / 02', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Spiele mit Godot', blurb: '2D und 3D, 10 bis 17.' },
        { code: 'MPL / WELT / 03', slug: 'kids-ai-web-development-course', title: 'Webseiten für Kinder', blurb: 'Die eigene Seite zum Lieblingsspiel, 9 bis 12.' }
      ] },
      { num: 'III', h3: 'Denken und verstehen', sub: '8 bis 15 Jahre', courses: [
        { code: 'MPL / DENK / 01', slug: 'maths-through-coding', title: 'Mathematik mit Code', blurb: 'Muster und Zahlen in Python, 10 bis 15.' },
        { code: 'MPL / DENK / 02', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatik-Wettbewerbe', blurb: 'Knobeln ab Klasse 3.' },
        { code: 'MPL / DENK / 03', slug: 'ai-literacy-for-kids-course', title: 'KI verstehen für Kinder', blurb: 'Wie Maschinen lernen, 8 bis 14.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Organisation',
    h2: 'So läuft der Minecraft-Kurs',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Nach der Schule', l: 'Für Kinder, die mittags oder am frühen Nachmittag heimkommen.' },
      { time: 'Samstagmittag', l: 'Wenn unter der Woche Sport oder Musik dran sind.' },
      { time: 'Einzeln', l: 'Zu einer Zeit, die Sie mit dem Mentor vereinbaren.' }
    ],
    cells: [
      { h3: 'Ohne Fremde', p: 'Kein öffentlicher Server, kein Spielen mit Unbekannten.' },
      { h3: 'Erst planen, dann bauen', p: 'Tabellen und Skizzen vor jedem Bau.' },
      { h3: 'Blöcke und Text', p: 'Von Blockcode zu getipptem Code, Schritt für Schritt.' },
      { h3: 'Fester Mentor', p: 'Derselbe Mensch, Woche für Woche.' },
      { h3: 'Englisch nebenbei', p: 'Wörter wie repeat, if und not lernt Ihr Kind mit.' },
      { h3: 'Monatlich kündbar', p: 'Keine lange Bindung.' }
    ]
  },

  projectsH2: 'Projekte unserer Lernenden',
  projectsLede: 'Nach der Geheimtür kommen eigene Spiele und Welten. Arbeiten anderer Kinder und Jugendlicher stehen weiter unten, noch mehr davon auf <a class="ag-inline-link" href="/student-labs">Student labs</a> (auf Englisch).',
  reviewsLede: 'Eltern über uns auf Google, original auf Englisch.',

  fees: {
    h2: 'Preis des Minecraft-Kurses',
    lede: 'Sie bezahlen monatlich; im Beitrag stecken acht Live-Stunden. Auf dieser Seite steht der Betrag in Euro, ermittelt mit dem Referenzkurs der Europäischen Zentralbank. Eingezogen wird er jedoch in US-Dollar, Ihre Bank rechnet ihn um, und so kann der Betrag auf Ihrem Konto leicht von unserer Anzeige abweichen.',
    free: ['Kostenlose Probestunde mit erstem Code', 'Klärung, welches Minecraft Ihr Kind schon hat', 'Ohne Karte'],
    group: ['Fünfzehn bis zwanzig Kinder', 'Ein Mentor für die ganze Zeit', 'Zwei Live-Stunden in der Woche', 'Monatlich kündbar'],
    one: ['Nur Ihr Kind und der Mentor', 'Eigene Bauideen als Projekte', 'Termine nach Wunsch']
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    h2: 'Minecraft programmieren lernen: Fragen von Eltern',
    items: [
      { q: 'Kann man mit Minecraft wirklich programmieren lernen?', a: 'Ja. In Minecraft Education gibt es dafür das Werkzeug Code Builder, mit dem Kinder in MakeCode programmieren. Und auch im normalen Spiel lernen Kinder mit Hebeln und Schaltungen Logik, die sie später als Code schreiben, wie im Projekt mit der Geheimtür.' },
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein, Deutsch ist nicht die Unterrichtssprache: Jede Stunde läuft live auf Englisch, mit festem Mentor. Für Minecraft-Kinder ist das oft leichter als gedacht, denn das Spiel lässt sich ohnehin auf Englisch spielen, und Befehle wie repeat, if oder not lernen sie im Kurs mit. Die Mentoren sprechen langsam und gehen auf die Aussprache Ihres Kindes ein.' },
      { q: 'Ab welchem Alter ist der Minecraft-Kurs geeignet?', a: 'Unser Kurs Minecraft Coding for Kids ist für Kinder von 7 bis 12 Jahren. Mojang selbst nennt für das Spiel eine Altersempfehlung von PEGI 7 und ESRB "Everyone 10+". Das Hebel-Projekt auf dieser Seite empfehlen wir ab etwa neun.' },
      { q: 'Braucht mein Kind ein eigenes Minecraft-Konto?', a: 'Für das Spiel braucht es ein Microsoft-Konto. Laut Mojang gilt ein Konto für Kinder unter 16 Jahren in der EU als Kinderkonto, und es kann nur verbunden mit dem Konto eines Erwachsenen bestehen. Das Konto legen Sie als Eltern selbst an; wir legen keine Konten für Kinder an.' },
      { q: 'Spielt mein Kind im Kurs mit fremden Menschen?', a: 'Nein. Wir nutzen keine öffentlichen Server. Laut Mojang ist der Mehrspielermodus auf Kinderkonten in Java und Bedrock standardmäßig ausgeschaltet, und nur ein Erwachsenenkonto kann ihn einschalten. Für unseren Kurs müssen Sie ihn nicht freischalten.' },
      { q: 'Brauchen wir Minecraft Education?', a: 'Nicht zwingend. Minecraft Education braucht laut Microsoft eine Microsoft-365-Lizenz für Bildungseinrichtungen und läuft auf von der Schule verwalteten Geräten. Fragen Sie in der Schule nach, ob Ihr Kind schon Zugang hat. Wenn nicht, arbeiten wir mit Werkzeugen, die ohne diese Lizenz auskommen.' },
      { q: 'Zu welchen Zeiten können Minecraft-Kinder lernen?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. Den Termin wählen Sie in Ihrer eigenen Uhrzeit.' },
      { q: 'Wird mein Kind dadurch nicht einfach noch mehr spielen?', a: 'Im Kurs spielt es nicht, es plant und programmiert. Jede Stunde beginnt mit einer Aufgabe auf Papier, wie der Wahrheitstabelle für die Geheimtür. Unser Ziel ist, dass Ihr Kind danach anders über das Spiel spricht: weniger über Punkte, mehr darüber, wie etwas funktioniert.' },
      { q: 'Was kostet der Kurs?', a: 'Den Monatsbeitrag sehen Sie oben in Euro; umgerechnet haben wir mit dem EZB-Referenzkurs. Gezahlt wird in US-Dollar, und Ihre Bank kümmert sich um die Umrechnung. Die Probestunde ist kostenlos.' },
      { q: 'Wie geht es nach dem Minecraft-Kurs weiter?', a: 'Viele Kinder wechseln zu Python, weil sie gemerkt haben, dass Textcode mehr kann als Blöcke. Andere bauen eigene Spiele in Roblox oder Godot. Wir besprechen den nächsten Schritt mit Ihnen und Ihrem Kind.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weiterlesen',
    h2: 'Weitere Seiten für Familien in Deutschland',
    lede: 'Ausgewählt für Eltern, die meisten Seiten auf Englisch.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Unser Angebot für ganz Deutschland.' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin', p: 'Für Kinder in Berlin.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Wenn Informatik in der Schule beginnt.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'Informatik in jedem Bundesland.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Wie unser Unterricht funktioniert.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projekte unserer Lernenden.' }
    ]
  },

  start: {
    h2: 'Probestunde für Minecraft-Kinder',
    lede: 'In der Probestunde baut Ihr Kind mit dem Mentor eine kleine Schaltung, sagt voraus, wann die Lampe leuchtet, und sieht dann, wie dieselbe Regel als Code aussieht. Danach besprechen wir, welches Minecraft Ihr Kind schon hat und welcher Kurs passt.',
    readFirst: 'Wer sich vorher umsehen will, liest <a class="ag-inline-link" href="/how-we-teach">How we teach</a> oder stöbert in <a class="ag-inline-link" href="/courses">All courses</a>, beides englischsprachig.',
    note: 'Die Mentoren sitzen in Indien und unterrichten live, nur auf Englisch. Für Fragen ist WhatsApp der kürzeste Draht zu uns.',
    formNote: 'Kostenlos, ohne Karte, ohne Abo.'
  },

  footer: {
    cols: [
      { h4: 'Minecraft und Spiele', links: [
        { href: '/courses/minecraft-coding-for-kids-course', label: 'Minecraft Coding for Kids' },
        { href: '/courses/game-development-masterclass-for-kids', label: 'Spiele entwickeln' },
        { href: '/courses/roblox-game-coding-for-kids-lua-course', label: 'Roblox programmieren' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-for-kids-berlin', label: 'Kinder in Berlin' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Erst alle Fälle, dann bauen'
  },

  personalityCss: `
.ag-root.ag-mpl .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-mpl .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-mpl .ag-table td { hyphens: auto; }
.ag-root.ag-mpl .ag-steps li strong { font-weight: 700; }
.ag-root.ag-mpl .ag-section-head h2 { max-width: 30ch; }
`,

  dossier: {
    curriculumAuthority: 'Mojang and Microsoft pages only for age and account rules: Minecraft EULA and Parents Guide (minecraft.net), Minecraft Education for Parents, Get Started and Licensing (education.minecraft.net), MakeCode About (makecode.com); mpfs KIM-Studie 2024 for popularity; Einheiten- und Zeitgesetz; read 3 November 2026. Example code our own.',
    localProject: 'A Geheimtür with levers: an original project in which children list every lever position before building, fill AND and OR truth tables, plan a three-lever door that opens only on A and B with C off, and check it in Python; our run printed four truth-table lines, offen bei True True False and 1 von 8. Lesson family: truth tables, list every case before you build.',
    requiredMentions: ['def tuer_geheim(a, b, c):', 'offen bei True True False', 'Lampe bei UND', 'Für Personen unter 16 Jahren in den USA und der EU, in Südkorea unter 19', 'Auf Kinderkonten ist er in Java und Bedrock standardmäßig ausgeschaltet', 'PEGI 7 und ESRB "Everyone 10+"', '24 Prozent der Kinder, die digitale Spiele spielen', 'Erst alle Fälle, dann bauen'],
    sources: [
      { claim: 'Parent or guardian responsible for the Microsoft account and accepting the terms for a minor.', url: 'https://www.minecraft.net/en-us/eula' },
      { claim: 'Child account under 16 in the US and EU; needs an adult account; only adults change family settings; multiplayer off by default; PEGI 7 and ESRB Everyone 10+.', url: 'https://www.minecraft.net/en-us/article/parents--guide-minecraft' },
      { claim: 'Minecraft Education: school account access, Microsoft 365 education licence, school-managed devices, Code Builder with MakeCode, free educational worlds on Bedrock.', url: 'https://education.minecraft.net/en-us/get-started/parents' },
      { claim: 'Minecraft Education in 115 countries.', url: 'https://education.minecraft.net/en-us/get-started' },
      { claim: 'MakeCode blocks map directly to lines of code; based on open-source PXT.', url: 'https://www.makecode.com/about' },
      { claim: 'Minecraft favourite game for 24 percent of children who play, plus 7 points on 2022; 12 percent in family play.', url: 'https://mpfs.de/app/uploads/2025/05/KIM-Studie-2024.pdf' }
    ],
    rejectedClaims: [
      'German-language teaching: we teach in English only, and the page says so.',
      'Any age rule not from Mojang or Microsoft (for example the USK rating): left out under the brief.',
      'Microsoft Services Agreement text: the host returned HTTP 403, so nothing from it is stated.',
      'Any Minecraft Education price: left out; no typed fees on the page.',
      'Any gender split from the KIM-Studie: left out on purpose.'
    ]
  }
};
