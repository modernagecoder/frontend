'use strict';
// Roblox programmieren lernen für Kinder (ag- German-language door, Germany cluster P3 row DE066), written 2026-11-03.
// Owner 2026-11-02: classes are live, in English only, with mentors (based in India) who match the learner's pace and
// accent; the capsule says "auf Englisch". Formal "Sie" throughout. Pages show euro; checkout charges USD.
// Spine: German parents' questions about Roblox as a workshop rather than a game: which ages and account rules Roblox
// itself publishes, what a child needs (Studio, computer, account), what Luau is, and one original lesson on time in
// games: move by seconds, not by frames.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/roblox-programmieren-lernen-kinder/,
// fetched 3 Nov 2026):
//  - Roblox safety page (corp.roblox.com/safety, served from about.roblox.com/safety): "Our users range in age from 5 to
//    over 25+ years old."; "Roblox Kids (5-8 year olds in most regions) and Roblox Select (9-15 year olds in most regions)";
//    "Only games with our lowest maturity ratings are available in Roblox Kids accounts."; "Chat is turned off in Roblox
//    Kids accounts."; "Users ages 9-12 can only use the Chat tab with trusted friends."; "Parents can choose to turn Chat
//    off for users under 13 years old."; "Voice Chat is not available for users ages 9-12."
//  - Roblox parental controls (corp.roblox.com/parents, served from about.roblox.com/parental-controls): "Parents can
//    manage screen time limits for their child under 13."; "Parents can set monthly spending limits"; "Restricted
//    experiences are only available to 18+ verified users."; "Users must be age-checked and 18+ before they can send or
//    receive without parental approval." The German versions (about.roblox.com/de/...) say they were machine-translated,
//    so the page paraphrases the English originals.
//  - Roblox Creator Hub: studio/setup "Roblox Studio , a free application available on Windows and Mac", minimum
//    "Windows 10 macOS 10.14", "Memory (RAM) 3 GB 8 GB", "Sign in to Studio with your Roblox account"; docs/luau "Luau is
//    the scripting language creators use in Roblox Studio. It is a fast, small, safe, gradually typed embeddable scripting
//    language derived from Lua 5.1"; RunService "The `Heartbeat` event fires every frame, after the physics simulation has
//    completed. The `deltaTime` argument indicates the time that has elapsed since the previous frame."; task.wait "The
//    actual amount of time elapsed is returned."
//  - Blocked, not retried: en.help.roblox.com (HTTP 403 for the Terms of Use, also via www.roblox.com/info/terms).
//  - mpfs, KIM-Studie 2024: "Neun Prozent der Kinder (+5 PP) nennen die Online-Spieleplattform „Roblox“, auf der
//    Nutzer*innen eigene Spiele erstellen und veröffentlichen können"; Minecraft "24 Prozent"; USK marking "ist in
//    Deutschland für alle Videospiele gesetzlich verpflichtend"; base n=884 gamers.
//  - Time: EinhZeitG para 4; summer time ended 25 October 2026, begins 28 March 2027.
// Our own: twin.py (scratchpad de/w/GC/rpl, python3 -I 3.14): " 30 Bilder pro Sekunde: A = 30.0 Studs, B = 60.0 Studs";
// " 60 ...: A = 60.0 Studs, B = 60.0 Studs"; "144 ...: A = 144.0 Studs, B = 60.0 Studs"; "Mit Ruckler: 2.0 Sekunden, A,
// B = (45.5, 60.0)". The Luau script is shown for Roblox Studio and was not executed by us (no Luau runtime here).
// Lesson family: move by elapsed time, not by frame count (frame-rate independence with deltaTime).

const { DE } = require('../../scripts/nl/lib/market-de');

const LUAU = [
  'local RunService = game:GetService("RunService")',
  'local plattform = workspace.Plattform   -- ein verankertes Bauteil',
  '',
  '-- Version A: pro Bild ein halbes Stud weiter',
  '-- RunService.Heartbeat:Connect(function()',
  '--     plattform.Position += Vector3.new(0.5, 0, 0)',
  '-- end)',
  '',
  '-- Version B: 30 Studs pro Sekunde, egal wie viele Bilder',
  'local TEMPO = 30',
  'RunService.Heartbeat:Connect(function(deltaTime)',
  '    plattform.Position += Vector3.new(TEMPO * deltaTime, 0, 0)',
  'end)'
].join('\n');

const PY = [
  '# Python-Zwilling des Luau-Skripts: eine Plattform fährt zwei Sekunden lang',
  'SCHRITT = 0.5   # Version A: Studs pro Bild',
  'TEMPO = 30      # Version B: Studs pro Sekunde',
  '',
  'def fahren(bildzeiten):',
  '    a = b = 0.0',
  '    for dt in bildzeiten:          # dt = deltaTime, Sekunden seit dem letzten Bild',
  '        a += SCHRITT               # A: zählt Bilder',
  '        b += TEMPO * dt            # B: zählt Zeit',
  '    return round(a, 2), round(b, 2)',
  '',
  'for fps in [30, 60, 144]:',
  '    bilder = [1 / fps] * (2 * fps)    # genau zwei Sekunden',
  '    a, b = fahren(bilder)',
  "    print(f'{fps:>3} Bilder pro Sekunde: A = {a} Studs, B = {b} Studs')",
  '',
  '# Ein Ruckler: 60 Bilder pro Sekunde, aber ein Bild dauert eine halbe Sekunde',
  'ruckler = [1 / 60] * 90 + [0.5]',
  "print('Mit Ruckler:', round(sum(ruckler), 2), 'Sekunden, A, B =', fahren(ruckler))"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'Roblox programmieren lernen' },
  slug: 'roblox-programmieren-lernen-kinder',
  code: 'rpl',
  accent: '#5B4668',
  accentRationale: 'Roblox programmieren lernen: a muted violet-grey #5B4668, like the default Studio baseplate under evening light, deliberately not a game-brand red; contrast 6.76 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Roblox programmieren lernen (auf Englisch)',
  title: 'Roblox programmieren lernen: Kurs für Kinder, auf Englisch',
  description: 'Roblox programmieren lernen für Kinder von 8 bis 14: live auf Englisch, mit Roblox Studio und Luau. Dazu die Altersregeln von Roblox und ein erstes Skript.',
  ogDescription: 'Was Kinder brauchen, um eigene Roblox-Spiele zu bauen: Studio, Luau, die Konto- und Chatregeln, die Roblox selbst veröffentlicht, und eine erste Lektion über Zeit im Spiel. Live-Unterricht auf Englisch.',
  twitterDescription: 'Roblox programmieren lernen, live auf Englisch: eigene Spiele in Luau bauen, statt nur zu spielen.',
  pageName: 'Roblox programmieren lernen für Kinder',
  webPageDescription: 'Ein Leitfaden für Eltern in Deutschland, deren Kind Roblox-Spiele selbst programmieren möchte: Alters- und Kontoregeln aus Roblox\' eigenen Sicherheitsseiten, was Roblox Studio und Luau sind, was ein Rechner können muss, und eine eigene Lektion dazu, warum sich Dinge im Spiel nach Sekunden und nicht nach Bildern bewegen sollten.',
  courseDescription: 'Live-Online-Kurs für Kinder von 8 bis 14 Jahren in ganz Deutschland, ausschließlich auf Englisch: Roblox Studio, Luau-Skripte, Spielmechaniken, Zeit und Bewegung, Server und Client, eigene Spiele von der Idee bis zur Veröffentlichung, in der Gruppe oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Roblox programmieren',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#alter', label: 'Alter' },
    { href: '#studio', label: 'Studio' },
    { href: '#skript', label: 'Skript' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Deutschland &middot; Roblox Studio und Luau &middot; 8 bis 14 Jahre',
  h1: 'Roblox programmieren lernen: eigene Spiele statt nur spielen',
  lede: 'Viele Kinder kennen Roblox als Spieleplattform. Weniger bekannt ist, dass jedes Spiel darauf mit einem kostenlosen Werkzeug gebaut wird, Roblox Studio, und mit einer echten Programmiersprache, Luau. Diese Seite erklärt, welche Altersregeln Roblox selbst aufstellt, was ein Kind zum Bauen braucht, und zeigt die erste Lektion, die in jedem Spiel steckt: Bewegung nach Sekunden statt nach Bildern. Der Unterricht findet auf Englisch statt, mit Mentoren aus Indien.',
  secondaryCta: { href: '#skript', label: 'Zum ersten Skript' },
  wa: 'Hallo Modern Age Coders, unser Kind möchte Roblox programmieren lernen, auf Englisch. Können wir eine kostenlose Probestunde buchen?',
  heroNote: 'Unterricht auf Englisch, mit Mentoren aus Indien &middot; Live-Kurse seit 2020 &middot; über 10.000 Lernende weltweit',
  spec: [
    ['Alter', '8 bis 14 Jahre'],
    ['Werkzeug', 'Roblox Studio, kostenlos'],
    ['Sprache im Code', 'Luau'],
    ['Rechner', 'Windows oder Mac, kein Tablet'],
    ['Gruppe', 'Fünfzehn bis zwanzig, oder einzeln'],
    ['Probestunde', 'Kostenlos, ohne Karte']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Roblox programmieren lernen heißt bei Modern Age Coders: Kinder von 8 bis 14 Jahren bauen eigene Spiele in Roblox Studio und schreiben dafür Skripte in Luau, live auf Englisch und mit Mentoren aus Indien. Der Kurs Roblox Game Coding for Kids führt vom ersten bewegten Bauteil bis zum veröffentlichten Spiel. Die Kinder lernen in einer Gruppe von fünfzehn bis zwanzig oder im Einzelunterricht, im eigenen Tempo.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Kurse für Kinder, die Spiele bauen möchten',
    lede: 'Einer ist ganz Roblox gewidmet, einer verbindet Scratch, Roblox und Minecraft, und einer ist der sanfte Einstieg für Kinder, die noch nie programmiert haben.',
    items: [
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'RPL / 01', title: 'Roblox Game Coding for Kids', alt: 'Kursbild Roblox Game Coding for Kids mit Luau', note: 'Für 8 bis 14 Jahre. Sechs Monate von der ersten Zeile Luau bis zum eigenen Spiel mit Punkten, Leveln und mehreren Spielern.' },
      { course: 'game-development-masterclass-for-kids', code: 'RPL / 02', title: 'Spiele entwickeln für Kinder', alt: 'Kursbild Spieleentwicklung für Kinder mit Scratch, Roblox und Minecraft', note: 'Für Kinder, die mehrere Welten ausprobieren wollen: Scratch, Roblox und Minecraft als Werkstatt für dieselben Ideen.' },
      { course: 'scratch-programming-complete-course', code: 'RPL / 03', title: 'Scratch für Kinder', alt: 'Kursbild Scratch für Kinder', note: 'Für 6 bis 11 Jahre. Erst Blöcke, dann Text: Wer Schleifen und Bedingungen in Scratch kennt, kommt in Luau schneller voran.' }
    ]
  },

  sections: [
    {
      id: 'alter',
      eyebrow: 'Alter und Konten',
      h2: 'Ab welchem Alter dürfen Kinder Roblox nutzen?',
      lede: 'Laut Roblox reicht das Alter der Nutzer von 5 bis über 25 Jahren. Für jüngere Kinder gibt es eigene, stärker eingeschränkte Konten. Die Tabelle fasst zusammen, was Roblox auf seinen Sicherheitsseiten selbst dazu schreibt.',
      body: [
        { kind: 'table', numCols: [], caption: 'Konten und Einstellungen nach Alter laut Roblox (Stand November 2026, "in den meisten Regionen")', head: ['Alter', 'Konto', 'Was Roblox dazu schreibt'], rows: [
          ['5 bis 8', 'Roblox Kids', 'Nur Spiele mit den niedrigsten Inhaltsstufen; der Chat ist ausgeschaltet'],
          ['9 bis 12', 'Roblox Select', 'Der Chat-Tab nur mit vertrauenswürdigen Freunden; kein Sprachchat'],
          ['13 bis 15', 'Roblox Select', 'Chat-Tab mit vertrauenswürdigen Freunden und Freunden ähnlichen Alters'],
          ['unter 13', 'beide', 'Eltern können den Chat ausschalten und die Bildschirmzeit begrenzen'],
          ['18+, Alter geprüft', 'Roblox', 'Erst dann Zugang zu Spielen der Stufe Restricted und Robux-Transfers ohne Zustimmung der Eltern']
        ] },
        { kind: 'source', html: 'Quellen: Roblox, Safety ("Our users range in age from 5 to over 25+ years old"; Roblox Kids "5-8 year olds in most regions", Roblox Select "9-15 year olds in most regions") und Parental Controls, englische Originalseiten, gelesen am 3. November 2026. Die deutschen Fassungen dieser Seiten sind laut Roblox maschinell übersetzt. Die Nutzungsbedingungen im Hilfe-Center von Roblox haben unseren Abruf abgelehnt (HTTP 403). Mit Roblox sind wir nicht verbunden.' },
        { kind: 'two', mt: true,
          leftH3: 'Was Eltern einstellen können',
          left: [
            'Laut Roblox können Eltern für Kinder unter 13 die Bildschirmzeit begrenzen, den Chat ausschalten und monatliche Ausgabengrenzen setzen. Kinder unter 13 können vertrauenswürdige Freunde nur mit Erlaubnis der Eltern hinzufügen.',
            'Für unseren Kurs braucht Ihr Kind weder Chat noch Robux. Gebaut und getestet wird in Roblox Studio, oft in einem privaten Spiel, das nur das Kind und der Mentor betreten.'
          ],
          rightH3: 'Wie verbreitet Roblox bei Kindern ist',
          right: [
            'In der KIM-Studie 2024 nennen neun Prozent der Kinder zwischen sechs und 13 Jahren, die digitale Spiele spielen, Roblox als eines ihrer Lieblingsspiele, fünf Prozentpunkte mehr als 2022. Minecraft liegt mit 24 Prozent vorn.',
            'Die Studie beschreibt Roblox als Plattform, "auf der Nutzer*innen eigene Spiele erstellen und veröffentlichen können". Genau diese Seite von Roblox ist es, die wir unterrichten.'
          ] }
      ]
    },
    {
      id: 'studio',
      eyebrow: 'Was man braucht',
      h2: 'Was braucht ein Kind, um Roblox-Spiele selbst zu programmieren?',
      lede: 'Einen Rechner, das kostenlose Roblox Studio, ein Roblox-Konto und Lust am Ausprobieren. Ein Tablet reicht zum Spielen, aber nicht zum Bauen.',
      body: [
        { kind: 'table', numCols: [], caption: 'Systemanforderungen für Roblox Studio laut Roblox Creator Hub', head: ['', 'Mindestens', 'Empfohlen'], rows: [
          ['Betriebssystem', 'Windows 10 oder macOS 10.14', 'Windows 11 oder macOS 14 und neuer'],
          ['Arbeitsspeicher', '3 GB', '8 GB'],
          ['Bildschirmauflösung', '1600 × 900 oder höher', '1600 × 900 oder höher']
        ] },
        { kind: 'source', html: 'Quelle: Roblox Creator Hub, Roblox Studio setup: Studio ist "a free application available on Windows and Mac"; zum Anmelden in Studio dient das eigene Roblox-Konto. Gelesen am 3. November 2026.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Roblox Studio', p: 'Die Werkstatt, in der jedes Roblox-Spiel entsteht: Gelände, Bauteile, Licht und Skripte. Kostenlos für Windows und Mac.' },
          { h3: 'Luau', p: 'Die Skriptsprache von Roblox. Laut Roblox ist sie schnell, klein und sicher und von Lua 5.1 abgeleitet. Ihre Schlüsselwörter wie <code>local</code>, <code>function</code>, <code>if</code> und <code>end</code> sind Englisch.' },
          { h3: 'Ein Roblox-Konto', p: 'Zum Anmelden in Studio. Bei Kindern richten Eltern das Konto ein und behalten über die Kindersicherung die Kontrolle über Chat, Zeit und Ausgaben.' }
        ] },
        { kind: 'p', mt: true, html: 'Eine Maus mit zwei Tasten und Mausrad macht das Bauen in 3D deutlich leichter als ein Touchpad. Ein zweiter Bildschirm ist kein Muss: Im Unterricht teilt das Kind seinen Studio-Bildschirm, und der Mentor zeigt auf seinem eigenen, was als Nächstes kommt.' }
      ]
    },
    {
      id: 'skript',
      tint: 'tint',
      eyebrow: 'Die erste Lektion',
      h2: 'Wie bewegt man in Roblox etwas gleichmäßig, auf jedem Rechner?',
      lede: 'Mit der Zeit seit dem letzten Bild. Roblox ruft das Ereignis Heartbeat einmal pro Bild auf und übergibt dabei deltaTime, die Zeit in Sekunden seit dem vorigen Bild. Wer das nutzt, baut Spiele, die auf einem alten Laptop genauso schnell laufen wie auf einem neuen. Das Beispiel ist unser eigenes.',
      body: [
        { kind: 'code', label: 'Eine fahrende Plattform in Roblox Studio', lang: 'Luau', code: LUAU, note: 'Dieses Skript gehört in ein Script unter ServerScriptService; die Plattform ist ein verankertes Bauteil namens Plattform. Wir zeigen es für Roblox Studio, haben es hier aber nicht ausgeführt, weil uns außerhalb von Studio keine Luau-Laufzeit zur Verfügung steht. Die Rechnung dahinter prüft der Python-Zwilling darunter.' },
        { kind: 'code', label: 'Der Python-Zwilling: dieselbe Rechnung, die wir ausgeführt haben', lang: 'Python', code: PY, note: 'Ausgabe mit Python 3.14:<br><code> 30 Bilder pro Sekunde: A = 30.0 Studs, B = 60.0 Studs</code><br><code> 60 Bilder pro Sekunde: A = 60.0 Studs, B = 60.0 Studs</code><br><code>144 Bilder pro Sekunde: A = 144.0 Studs, B = 60.0 Studs</code><br><code>Mit Ruckler: 2.0 Sekunden, A, B = (45.5, 60.0)</code>' },
        { kind: 'table', mt: true, numCols: [0, 1, 2], caption: 'Wie weit die Plattform in zwei Sekunden fährt (unser Python-Zwilling)', head: ['Bilder pro Sekunde', 'Version A: pro Bild', 'Version B: pro Sekunde'], rows: [
          ['30', '30 Studs', '60 Studs'],
          ['60', '60 Studs', '60 Studs'],
          ['144', '144 Studs', '60 Studs'],
          ['60 mit einem Ruckler', '45,5 Studs', '60 Studs']
        ] },
        { kind: 'p', mt: true, html: 'Version A sieht auf dem Rechner, auf dem das Kind sie baut, oft perfekt aus. Auf einem Rechner mit doppelt so vielen Bildern pro Sekunde fährt dieselbe Plattform aber doppelt so weit, auf einem langsamen nur halb so weit, und bei einem Ruckler bleibt sie zurück. Version B rechnet Tempo mal Zeit und kommt immer nach 60 Studs an. So entstehen Hindernisparcours, die für alle Spieler gleich schwer sind.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Erst raten.</strong> Bevor das Kind Version A auf einem zweiten Rechner testet, schätzt es: Wie weit fährt die Plattform dort? Danach wird gemessen.',
          '<strong>Die Einheit aufschreiben.</strong> 0,5 ist "Studs pro Bild", 30 ist "Studs pro Sekunde". Wer die Einheit dazuschreibt, merkt, warum nur die zweite Zahl mit deltaTime multipliziert werden darf.',
          '<strong>Nicht nach Gefühl warten.</strong> Auch <code>task.wait(1)</code> wartet nicht genau eine Sekunde. Laut Roblox gibt die Funktion die tatsächlich vergangene Zeit zurück; gute Skripte rechnen mit diesem Wert weiter.',
          '<strong>Auf dem schwächsten Gerät testen.</strong> Im Unterricht spielen wir jedes Spiel einmal auf dem langsamsten Rechner der Familie durch.'
        ] }
      ]
    },
    {
      id: 'weg',
      eyebrow: 'Vom ersten Skript zum eigenen Spiel',
      h2: 'Was lernt ein Kind im Roblox-Kurs, Schritt für Schritt?',
      lede: 'Unsere eigene Reihenfolge. Jede Stufe endet mit etwas Spielbarem, das das Kind Familie und Freunden zeigen kann.',
      body: [
        { kind: 'table', numCols: [], caption: 'Lernweg im Roblox-Kurs (unsere Planung)', head: ['Phase', 'Was das Kind baut', 'Was es dabei lernt'], rows: [
          ['1. Bauen', 'Eine eigene Insel mit Hindernissen', 'Studio bedienen, Bauteile, Koordinaten in Studs'],
          ['2. Bewegen', 'Fahrende Plattformen und Türen', 'Variablen, Funktionen, Heartbeat und deltaTime'],
          ['3. Reagieren', 'Fallen, Schalter und Checkpoints', 'Ereignisse wie Touched, Bedingungen mit if'],
          ['4. Zählen', 'Münzen und eine Punktetabelle', 'Zahlen speichern, Schleifen, Tabellen in Luau'],
          ['5. Mehrere Spieler', 'Ein Rennen für zwei bis vier Freunde', 'Server und Client, warum der Server prüft'],
          ['6. Veröffentlichen', 'Ein fertiges kleines Spiel', 'Testen, Fehler suchen, anderen erklären']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Was über Roblox hinaus bleibt',
          left: [
            'Variablen, Bedingungen, Schleifen und Funktionen funktionieren in Luau wie in Python oder Java. Wer in Roblox gelernt hat, eine Bewegung mit der vergangenen Zeit zu rechnen, kann das in jeder anderen Spiel-Engine genauso.',
            'Dazu kommt Mathematik, die Kinder sonst eher trocken erleben: Koordinaten, Geschwindigkeit als Strecke pro Zeit, Prozente bei Punkten und Wahrscheinlichkeiten bei Zufallsereignissen.'
          ],
          rightH3: 'Wann der Wechsel zu anderen Sprachen sinnvoll ist',
          right: [
            'Viele Kinder wechseln mit 12 oder 13 Jahren zu Python, um die Schulinformatik zu begleiten, oder zu C# und Unity, um größere Spiele zu bauen. Luau ist dafür ein guter Anfang, weil es klein und übersichtlich ist.',
            'Bei gekauften Videospielen hilft Eltern in Deutschland die Alterskennzeichnung der USK; laut KIM-Studie 2024 ist sie für alle Videospiele gesetzlich verpflichtend. Wir empfehlen Kindern nur Werkzeuge und Spiele, die zu ihrem Alter passen.'
          ] }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Wann findet der Roblox-Kurs statt?',
      lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
      body: [
        { kind: 'table', numCols: [], caption: 'Drei Beispieltermine und die passende Uhrzeit in Indien', head: ['Deutschland', 'Indien im Winterhalbjahr', 'Indien ab 28. März 2027'], rows: [
          ['15:20', '19:50', '18:50'],
          ['16:50', '21:20', '20:20'],
          ['Samstag 11:00', '15:30', '14:30']
        ] },
        { kind: 'source', html: 'Nach dem Einheiten- und Zeitgesetz gilt in Deutschland MEZ (UTC+1), während der Sommerzeit MESZ (UTC+2). Die Uhren wurden am 25. Oktober 2026 zurückgestellt und werden am 28. März 2027 wieder vorgestellt. Indien bleibt ohne Umstellung bei UTC+5:30, ist also im Winter 4 Stunden 30 Minuten und im Sommer 3 Stunden 30 Minuten weiter. Die Beispiele sind keine festen Kurszeiten.' },
        { kind: 'p', mt: true, html: 'Für Roblox-Stunden empfehlen wir Termine, an denen der Familienrechner frei ist und das Kind nicht nebenher spielen möchte. Im Buchungsformular erscheinen die Uhrzeiten so, wie Ihre Uhr in Deutschland sie anzeigt.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Woran Sie erkennen, dass Ihr Kind wirklich programmiert',
    lede: 'Fünf Stufen, die wir selbst verwenden. Sie beschreiben, was ein Kind ohne Hilfe kann, nicht, wie viele Stunden es gespielt hat.',
    table: { caption: 'Fünf Stufen im Roblox-Kurs (unsere)', head: ['Stufe', 'Typisches Alter', 'Ihr Kind kann'], rows: [
      ['1. Bauen', '8 bis 9', 'eine Welt aus Bauteilen gestalten und speichern'],
      ['2. Ändern', '9 bis 10', 'ein fertiges Skript lesen und eine Zahl gezielt ändern'],
      ['3. Schreiben', '10 bis 11', 'eigene kurze Skripte mit Bedingungen und Funktionen schreiben'],
      ['4. Rechnen', '11 bis 13', 'Bewegung und Zeit mit deltaTime richtig berechnen'],
      ['5. Absichern', '12 bis 14', 'ein Spiel für mehrere Spieler bauen, bei dem der Server entscheidet']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Lassen Sie sich das Spiel der Woche nicht nur zeigen, sondern eine Zeile Code erklären. Kann Ihr Kind sagen, was sie tut, hat es mehr gelernt als beim Spielen.',
      'Wir schicken Ihnen regelmäßig eine kurze Nachricht dazu, was gebaut wurde und was noch hakt.'
    ] },
    right: { h3: 'Für Kinder', ps: [
      'Schreiben Sie zu jeder Zahl im Skript die Einheit: Studs, Sekunden, Punkte. Dann finden Sie Fehler viel schneller.',
      'Testen Sie Ihr Spiel auch auf einem langsamen Rechner. Was dort klappt, klappt überall.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse für junge Spieleentwickler',
    lede: 'Alle live, alle auf Englisch, jeweils mit einem festen Mentor und wahlweise in der Gruppe oder einzeln.',
    bands: [
      { num: 'I', h3: 'Andere Spielwelten', sub: '8 bis 14 Jahre', courses: [
        { code: 'RPL / WELT / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft programmieren', blurb: 'Blöcke, dann echter Code in der beliebtesten Spielwelt.' },
        { code: 'RPL / WELT / 02', slug: 'godot-game-development-course-for-kids-and-teens', title: 'Spiele mit Godot', blurb: 'Eine freie Engine für 2D und 3D, mit GDScript.' },
        { code: 'RPL / WELT / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ für Kinder', blurb: 'Erste echte Programme und Rätsel, 9 bis 12.' }
      ] },
      { num: 'II', h3: 'Grundlagen stärken', sub: '7 bis 13 Jahre', courses: [
        { code: 'RPL / BASIS / 01', slug: 'python-ai-kids-masterclass', title: 'Python und KI für Kinder', blurb: 'Die Sprache, die viele Schulen später nutzen.' },
        { code: 'RPL / BASIS / 02', slug: 'maths-through-coding', title: 'Mathematik mit Python', blurb: 'Koordinaten, Tempo und Muster im eigenen Code.' },
        { code: 'RPL / BASIS / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Denken wie ein Programmierer', blurb: 'Rätsel und Abläufe, die jedes Spiel braucht.' }
      ] },
      { num: 'III', h3: 'Für ältere Kinder', sub: '12 bis 16 Jahre', courses: [
        { code: 'RPL / NEXT / 01', slug: 'complete-game-development-masterclass-for-teens', title: 'Spieleentwicklung für Jugendliche', blurb: 'Unity und C# bis zum veröffentlichten Spiel.' },
        { code: 'RPL / NEXT / 02', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript für Jugendliche', blurb: 'Browserspiele und interaktive Webseiten.' },
        { code: 'RPL / NEXT / 03', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'Begleitung zum Schulfach Informatik.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Ablauf',
    h2: 'Wie eine Roblox-Stunde abläuft',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Nachmittag', l: 'Nach den Hausaufgaben, etwa ab 15:20 Uhr deutscher Zeit.' },
      { time: 'Samstag', l: 'Späterer Vormittag, wenn der Familienrechner frei ist.' },
      { time: 'Einzeln', l: 'Zu vereinbarten Zeiten, gut für eigene Spielideen.' }
    ],
    cells: [
      { h3: 'Bildschirm teilen', p: 'Das Kind arbeitet in seinem eigenen Studio, der Mentor sieht live mit.' },
      { h3: 'Ein Ziel pro Stunde', p: 'Eine Tür, die aufgeht; eine Falle, die auslöst; eine Münze, die zählt.' },
      { h3: 'Englisch zum Mitlesen', p: 'Schlüsselwörter und Fehlermeldungen werden gezeigt, gelesen und erklärt.' },
      { h3: 'Kein Chat nötig', p: 'Der Kurs braucht weder Roblox-Chat noch Robux.' },
      { h3: 'Testen gehört dazu', p: 'Jede Stunde endet mit einem Testlauf und einer Fehlerliste.' },
      { h3: 'Ein fester Mentor', p: 'Dieselbe Person, die die Spielideen Ihres Kindes kennt.' }
    ]
  },

  projectsH2: 'Spiele und Projekte unserer Lernenden',
  projectsLede: 'Eine kleine Auswahl aus unseren Kursen weltweit; mehr auf <a class="ag-inline-link" href="/student-labs">Student labs</a> (auf Englisch).',
  reviewsLede: 'Google-Rezensionen von Familien, im Wortlaut und in der Originalsprache Englisch.',

  fees: {
    h2: 'Was der Roblox-Kurs kostet',
    lede: 'Die Gebühr gilt pro Monat und deckt acht Live-Stunden ab. Angezeigt wird sie in Euro, auf Basis des Referenzkurses der Europäischen Zentralbank; belastet wird sie in US-Dollar. Die Umrechnung macht Ihre Bank, kleine Abweichungen auf dem Kontoauszug sind deshalb normal.',
    free: ['Eine kostenlose Probestunde in Roblox Studio', 'Ein kurzer Blick auf Rechner und Vorkenntnisse', 'Keine Kreditkarte nötig'],
    group: ['Fünfzehn bis zwanzig Kinder ähnlichen Alters', 'Ein fester Mentor', 'Zwei Stunden pro Woche', 'Monatlich zahlbar, jederzeit beendbar'],
    one: ['Ihr Kind und ein Mentor', 'Eigene Spielidee, eigenes Tempo', 'Termine nach Ihrem Wunsch']
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    h2: 'Roblox programmieren lernen: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein, ausschließlich auf Englisch und immer live. Die Mentoren aus Indien sprechen langsam und deutlich und richten sich nach Tempo und Aussprache Ihres Kindes. Das hilft beim Programmieren: Luau-Befehle wie local, function und end sind englische Wörter, die Ihr Kind dann jede Stunde auch hört und ausspricht.' },
      { q: 'Ab welchem Alter kann mein Kind Roblox programmieren lernen?', a: 'Unser Roblox-Kurs ist für 8 bis 14 Jahre gedacht. Jüngere Kinder beginnen besser mit Scratch. Roblox selbst ordnet Kinder von 5 bis 8 Jahren in den meisten Regionen dem Konto Roblox Kids zu und Kinder von 9 bis 15 dem Konto Roblox Select.' },
      { q: 'Ist Roblox für Kinder sicher?', a: 'Roblox beschreibt auf seinen eigenen Seiten Konten mit Einschränkungen nach Alter: Bei Roblox Kids ist der Chat aus, Kinder von 9 bis 12 können den Chat-Tab nur mit vertrauenswürdigen Freunden nutzen, und Eltern können für Kinder unter 13 Chat, Bildschirmzeit und Ausgaben steuern. Für unseren Kurs braucht Ihr Kind weder Chat noch Robux.' },
      { q: 'Kostet Roblox Studio etwas?', a: 'Nein. Laut Roblox ist Studio eine kostenlose Anwendung für Windows und Mac. Zum Anmelden braucht Ihr Kind ein Roblox-Konto, das Sie als Eltern einrichten und über die Kindersicherung begleiten.' },
      { q: 'Reicht ein Tablet oder ein Chromebook?', a: 'Zum Bauen nicht. Roblox nennt als Mindestvoraussetzung für Studio Windows 10 oder macOS 10.14 und 3 GB Arbeitsspeicher, empfohlen sind 8 GB. Spielen geht auf vielen Geräten, programmiert wird am Windows-PC oder Mac.' },
      { q: 'Welche Programmiersprache lernt mein Kind?', a: 'Luau, die Skriptsprache von Roblox, die laut Roblox von Lua 5.1 abgeleitet ist. Die Grundideen, also Variablen, Bedingungen, Schleifen und Funktionen, gelten genauso in Python, JavaScript oder C#, und viele Kinder wechseln später ohne Mühe.' },
      { q: 'Lernt mein Kind dabei mehr als ein Spiel?', a: 'Ja. Schon die erste Lektion auf dieser Seite verbindet Code mit Mathematik: Geschwindigkeit ist Strecke pro Zeit. Später kommen Koordinaten, Zufall, Prozente und die Frage dazu, warum in einem Spiel für mehrere Spieler der Server prüfen muss, was die Spieler melden.' },
      { q: 'Zu welchen Zeiten finden die Stunden statt?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. Eine Stunde um 16:50 Uhr deutscher Winterzeit beginnt beim Mentor in Indien um 21:20 Uhr.' },
      { q: 'Was kostet der Kurs, und wie wird abgerechnet?', a: 'Die Monatsgebühr sehen Sie auf dieser Seite in Euro, berechnet zum Referenzkurs der EZB. Abgebucht wird in US-Dollar, Ihre Bank rechnet um. Die erste Stunde ist kostenlos und ohne Kreditkarte.' },
      { q: 'Kann mein Kind sein Spiel am Ende veröffentlichen?', a: 'Ja, wenn Sie als Eltern einverstanden sind. Im letzten Abschnitt testen wir das Spiel gründlich und besprechen, welche Einstellungen das Kind vorher wählen sollte. Ein privates Spiel, das nur Familie und Freunde sehen, ist ebenfalls ein schöner Abschluss.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weiterlesen',
    h2: 'Weitere Seiten für Familien in Deutschland',
    lede: 'Zum großen Teil auf Englisch.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Unsere Startseite für Familien in Deutschland.' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding classes for kids in Berlin', p: 'Programmieren für Kinder in der Hauptstadt.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Wenn aus dem Hobby ein Schulfach wird.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Learn to think, not copy AI', p: 'Selbst denken statt Antworten kopieren.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'So arbeiten unsere Mentoren live.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projekte unserer Lernenden zum Ansehen.' }
    ]
  },

  start: {
    h2: 'Kostenlose Roblox-Probestunde buchen',
    lede: 'In der Probestunde öffnet Ihr Kind gemeinsam mit dem Mentor Roblox Studio, baut eine Plattform und bringt sie mit einem ersten Skript in Bewegung. Danach empfehlen wir die passende Stufe und Gruppe.',
    readFirst: 'Wenn Sie vorher mehr lesen möchten: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> beschreibt unseren Unterricht, auf <a class="ag-inline-link" href="/courses">All courses</a> stehen alle Lehrpläne (beides auf Englisch).',
    note: 'Live-Unterricht online, ausschließlich auf Englisch, mit Mentoren aus Indien. Über WhatsApp erreichen Sie uns am schnellsten.',
    formNote: 'Kostenlos, ohne Kreditkarte und ohne Bindung.'
  },

  footer: {
    cols: [
      { h4: 'Spiele bauen', links: [
        { href: '/courses/roblox-game-coding-for-kids-lua-course', label: 'Roblox Game Coding' },
        { href: '/courses/game-development-masterclass-for-kids', label: 'Spiele für Kinder' },
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch für Kinder' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-for-kids-berlin', label: 'Programmieren in Berlin' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Sekunden zählen, nicht Bilder'
  },

  personalityCss: `
.ag-root.ag-rpl .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-rpl .ag-capsule { border-left-width: 5px; border-radius: 0; }
.ag-root.ag-rpl .ag-section-head h2 { max-width: 31ch; }
.ag-root.ag-rpl .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-rpl .ag-code-head b { letter-spacing: 0.015em; }
`,

  dossier: {
    curriculumAuthority: 'Roblox Safety and Parental Controls pages (English originals); Roblox Creator Hub (Studio setup, Luau, RunService, task); mpfs KIM-Studie 2024; Einheiten- und Zeitgesetz; read 3 November 2026. Roblox Terms of Use blocked (HTTP 403), not used. Example our own.',
    localProject: 'A moving platform in Roblox Studio, shown in Luau (not executed by us) with a Python twin that we ran: moving 0.5 studs per frame covers 30, 60 and 144 studs in two seconds at 30, 60 and 144 frames per second, while 30 studs per second times deltaTime always covers 60; with one half-second hitch the per-frame version reaches only 45.5. Lesson family: move by elapsed time, not by frame count.',
    requiredMentions: ['144 Bilder pro Sekunde: A = 144.0 Studs, B = 60.0 Studs', 'Mit Ruckler: 2.0 Sekunden, A, B = (45.5, 60.0)', 'Eine fahrende Plattform in Roblox Studio', 'Konten und Einstellungen nach Alter laut Roblox', 'Erst dann Zugang zu Spielen der Stufe Restricted', 'Windows 10 oder macOS 10.14', 'auf der Nutzer*innen eigene Spiele erstellen und veröffentlichen können', 'Sekunden zählen, nicht Bilder'],
    sources: [
      { claim: 'Roblox ages 5 to 25+, Roblox Kids 5-8 and Select 9-15, chat and voice rules by age.', url: 'https://corp.roblox.com/safety' },
      { claim: 'Screen time, spending limits, Restricted 18+ verified, Robux transfers.', url: 'https://corp.roblox.com/parents' },
      { claim: 'Roblox Studio free on Windows and Mac; system requirements; sign in with a Roblox account.', url: 'https://create.roblox.com/docs/studio/setup' },
      { claim: 'Luau derived from Lua 5.1.', url: 'https://create.roblox.com/docs/luau' },
      { claim: 'Heartbeat fires every frame with deltaTime.', url: 'https://create.roblox.com/docs/reference/engine/classes/RunService' },
      { claim: 'task.wait returns the actual elapsed time.', url: 'https://create.roblox.com/docs/reference/engine/libraries/task' },
      { claim: 'KIM-Studie 2024: Roblox 9 percent, Minecraft 24 percent; USK labels legally mandatory.', url: 'https://mpfs.de/app/uploads/2025/05/KIM-Studie-2024.pdf' }
    ],
    rejectedClaims: [
      'Roblox Terms of Use ages: help-centre fetch refused (HTTP 403); ages taken only from Roblox safety and parental-control pages.',
      'Quoting Roblox\'s German pages: they are machine-translated by Roblox\'s own note; the English originals are used.',
      'Any affiliation with Roblox: none.',
      'Running the Luau script: not executed outside Studio; the Python twin was run instead, and the page says so.',
      'KIM gender splits: not used.',
      'German-language teaching: English only.'
    ]
  }
};
