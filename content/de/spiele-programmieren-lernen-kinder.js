'use strict';
// Spiele programmieren lernen für Kinder (ag- German-language door, Germany cluster P3 row DE067), written 2026-11-03.
// Owner 2026-11-02: classes are live, in English only, with mentors (based in India) who match the learner's pace and
// accent; the capsule says "auf Englisch". Formal "Sie" throughout. Pages show euro; checkout charges USD.
// Spine: most children in Germany play digital games (KIM-Studie 2024); this page is about turning play into making:
// which games children of 6 to 12 can build at which age, what the USK age labels mean for the games they play, and one
// original lesson that sits inside every jump-and-run: two shapes touch only if they overlap left-right AND up-down.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/spiele-programmieren-lernen-kinder/,
// fetched 3 Nov 2026):
//  - mpfs, KIM-Studie 2024 (PDF): "64 Prozent spielen mindestens wöchentlich, 28 Prozent sogar täglich"; "So spielen bei
//    den Sechs- bis Siebenjährigen 45 Prozent regelmäßig, bei den Zwölf- bis 13-Jährigen sind es dagegen 80 Prozent";
//    "Am verbreitetsten sind Spiele am Handy oder Smartphone: 67 Prozent der Kinder, die zumindest gelegentlich spielen";
//    "Am PC oder Laptop spielen 43 Prozent regelmäßig"; Minecraft "24 Prozent"; USK marking "ist in Deutschland für alle
//    Videospiele gesetzlich verpflichtend. 70 Prozent der Kinder, die digitale Spiele nutzen, haben diese Kennzeichnung
//    bereits wahrgenommen"; "Während nur 40 Prozent der Sechs- bis Siebenjährigen angeben, die USK-Kennzeichnung zu kennen,
//    sind es bei den Acht- bis Neunjährigen bereits 70 Prozent"; survey of 1.225 children 6 to 13, 18.9. to 7.11.2024.
//  - JuSchG para 14 (gesetze-im-internet.de/juschg/__14.html): (2) "Freigegeben ohne Altersbeschränkung", "Freigegeben ab
//    sechs Jahren", "Freigegeben ab zwölf Jahren", "Freigegeben ab sechzehn Jahren", "Keine Jugendfreigabe".
//  - USK, Welche Alterskennzeichen gibt es? (usk.de): "Freigegeben ab 6 Jahren gemäß § 14 JuSchG ... überwiegend um
//    familienfreundliche Spiele, die bereits spannender und wettkampfbetonter ausfallen dürfen"; "Freigegeben ab 12 Jahren
//    ... Diese Spiele sind häufig schon deutlich kampfbetonter."
//  - FACTS.md 1 (Grundschule 1 to 4, 6 in Berlin and Brandenburg). Time: EinhZeitG para 4; summer time 2027 from 28 March.
//  - scratch.mit.edu returned only a JavaScript shell; no Scratch age claim is made.
// Our own: sprung.py (scratchpad de/w/GC/spl, python3 -I 3.14): "hoch | Version 1: [7, 8, 9, 10, 11, 12] | Version 2: []";
// "flach | Version 1: [7, 8, 9, 10, 11, 12] | Version 2: [10, 11, 12]".
// Lesson family: two rectangles touch only if they overlap on both axes (axis-aligned collision).

const { DE } = require('../../scripts/nl/lib/market-de');

const PY = [
  '# Eine Figur springt über einen Stein. Beide sind Rechtecke:',
  '# x, y = linke untere Ecke, b = Breite, h = Höhe (y zählt nach oben, wie in Scratch)',
  "stein = {'x': 100, 'y': 0, 'b': 30, 'h': 30}",
  '',
  'def trifft_nur_x(a, s):',
  '    # Version 1: prüft nur, ob sich die beiden links-rechts überlappen',
  "    return a['x'] < s['x'] + s['b'] and s['x'] < a['x'] + a['b']",
  '',
  'def trifft(a, s):',
  '    # Version 2: Überlappung links-rechts UND oben-unten',
  "    return (a['x'] < s['x'] + s['b'] and s['x'] < a['x'] + a['b'] and",
  "            a['y'] < s['y'] + s['h'] and s['y'] < a['y'] + a['h'])",
  '',
  '# Zwei Sprünge: pro Bild geht die Figur 10 Schritte nach rechts',
  'spruenge = {',
  "    'hoch':  [0, 0, 0, 0, 0, 0, 20, 40, 55, 60, 55, 45, 35, 15, 0],",
  "    'flach': [0, 0, 0, 0, 0, 0, 20, 35, 40, 35, 20, 0, 0, 0, 0],",
  '}',
  'for name, hoehen in spruenge.items():',
  '    treffer_1, treffer_2 = [], []',
  '    for bild, y in enumerate(hoehen):',
  "        figur = {'x': 10 * bild, 'y': y, 'b': 40, 'h': 40}",
  '        if trifft_nur_x(figur, stein):',
  '            treffer_1.append(bild)',
  '        if trifft(figur, stein):',
  '            treffer_2.append(bild)',
  "    print(name, '| Version 1:', treffer_1, '| Version 2:', treffer_2)"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'Spiele programmieren lernen' },
  slug: 'spiele-programmieren-lernen-kinder',
  code: 'spl',
  accent: '#892A2A',
  accentRationale: 'Spiele programmieren lernen: a brick red #892A2A, the colour of the classic platform block, darker than the Berlin page red so the two never read as one; contrast 7.02 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'Spiele programmieren lernen (auf Englisch)',
  title: 'Spiele programmieren lernen: Kurs für Kinder von 6 bis 12',
  description: 'Spiele programmieren lernen für Kinder von 6 bis 12: live auf Englisch, mit Scratch und Python. Mit KIM-Zahlen, den USK-Stufen und einem echten Sprungspiel.',
  ogDescription: 'Vom Spielen zum Selbermachen: welche Spiele Kinder in welchem Alter bauen können, was die USK-Kennzeichen bedeuten, und warum eine Figur manchmal im Sprung verliert. Live-Unterricht auf Englisch.',
  twitterDescription: 'Spiele programmieren lernen, live auf Englisch: Kinder von 6 bis 12 bauen eigene Spiele in Scratch und Python.',
  pageName: 'Spiele programmieren lernen für Kinder',
  webPageDescription: 'Ein Leitfaden für Eltern in Deutschland, deren Kind eigene Spiele programmieren möchte: wie viel Kinder laut KIM-Studie 2024 spielen, was die Altersstufen nach § 14 Jugendschutzgesetz und die USK-Kennzeichen bedeuten, welche Spiele Kinder von 6 bis 12 selbst bauen können, und eine eigene Lektion zur Kollisionsprüfung in Scratch und Python.',
  courseDescription: 'Live-Online-Kurs für Kinder von 6 bis 12 Jahren in ganz Deutschland, ausschließlich auf Englisch: eigene Spiele in Scratch und ab etwa 10 Jahren in Python, mit Figuren, Punkten, Leveln, Sprüngen und Kollisionen, in der Gruppe oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Spiele programmieren',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#spielen', label: 'Zahlen' },
    { href: '#usk', label: 'USK' },
    { href: '#sprung', label: 'Sprungspiel' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Deutschland &middot; Spiele bauen &middot; 6 bis 12 Jahre',
  h1: 'Spiele programmieren lernen: vom Spielen zum Selberbauen',
  lede: 'Fast jedes Kind in Deutschland spielt, viele jede Woche. Spiele selbst zu programmieren ist der Schritt vom Konsumieren zum Erfinden, und dabei lernen Kinder ganz nebenbei Logik, Geometrie und Geduld. Diese Seite zeigt, was Kinder in welchem Alter bauen können, was die USK-Kennzeichen auf ihren Spielen bedeuten, und eine erste Lektion, die in jedem Jump and Run steckt. Gelehrt wird live auf Englisch, und die Mentoren sitzen in Indien.',
  secondaryCta: { href: '#sprung', label: 'Zum Sprungspiel' },
  wa: 'Hallo Modern Age Coders, unser Kind möchte Spiele programmieren lernen, gern auf Englisch. Können wir eine kostenlose Probestunde ausmachen?',
  heroNote: 'Unterricht auf Englisch, mit Mentoren aus Indien &middot; Live-Unterricht seit 2020 &middot; mehr als 10.000 Lernende weltweit',
  spec: [
    ['Alter', '6 bis 12 Jahre'],
    ['Werkzeuge', 'Scratch, ab etwa 10 Python'],
    ['Gerät', 'Laptop oder PC mit Maus'],
    ['Gruppe', 'Fünfzehn bis zwanzig, oder einzeln'],
    ['Sprache', 'Englisch, einfach und deutlich'],
    ['Probestunde', 'Kostenlos, ohne Karte']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Spiele programmieren lernen heißt bei Modern Age Coders: Sechs- bis Zwölfjährige aus ganz Deutschland erfinden live und auf Englisch ihre eigenen Spiele, angeleitet von Mentoren aus Indien. Zuerst stecken sie Blöcke in Scratch zusammen, mit etwa zehn Jahren schreiben sie Python: Figuren, Sprünge, Punkte, Level. Ihr Kind lernt entweder mit fünfzehn bis zwanzig Gleichaltrigen oder allein mit dem Mentor, so schnell oder langsam es mag.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Kurse, in denen Kinder ihre eigenen Spiele bauen',
    lede: 'Einer reist durch mehrere Spielwelten, einer bleibt bei Scratch und geht dort in die Tiefe, einer führt ältere Kinder zu einer echten Spiel-Engine.',
    items: [
      { course: 'game-development-masterclass-for-kids', code: 'SPL / 01', title: 'Spiele entwickeln für Kinder', alt: 'Kursbild Spieleentwicklung für Kinder mit Scratch, Roblox und Minecraft', note: 'Drei Welten, ein Handwerk: Wer in Scratch eine Figur steuert, macht das bald auch in Roblox und Minecraft, mit Punkten und Leveln.' },
      { course: 'scratch-programming-complete-course', code: 'SPL / 02', title: 'Scratch für Kinder', alt: 'Kursbild Scratch für Kinder', note: 'Sechs bis elf Jahre. In drei Monaten vom ersten bewegten Sprite bis zu einem Spiel mit mehreren Leveln.' },
      { course: 'godot-game-development-course-for-kids-and-teens', code: 'SPL / 03', title: 'Spiele mit Godot', alt: 'Kursbild Spieleentwicklung mit Godot für Kinder und Jugendliche', note: 'Für ältere Kinder und Jugendliche, denen Scratch zu eng wird: Godot ist kostenlos, kann 2D und 3D und nutzt die Sprache GDScript.' }
    ]
  },

  sections: [
    {
      id: 'spielen',
      eyebrow: 'Was Kinder spielen',
      h2: 'Wie viel spielen Kinder in Deutschland?',
      lede: 'Viel, und mit jedem Lebensjahr mehr. Grundlage ist die KIM-Studie 2024, für die der mpfs Kinder im Grundschul- und frühen Teenageralter befragt hat.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Digitale Spiele bei Kindern von sechs bis 13 Jahren, KIM-Studie 2024', head: ['Aussage', 'Anteil', 'Bezugsgruppe'], rows: [
          ['Spielen mindestens wöchentlich', '64 %', 'alle Kinder'],
          ['Spielen täglich', '28 %', 'alle Kinder'],
          ['Spielen regelmäßig, Sechs- bis Siebenjährige', '45 %', 'Kinder dieser Altersgruppe'],
          ['Spielen regelmäßig, Zwölf- bis 13-Jährige', '80 %', 'Kinder dieser Altersgruppe'],
          ['Spielen mindestens wöchentlich am Handy oder Smartphone', '67 %', 'Kinder, die zumindest gelegentlich spielen'],
          ['Spielen regelmäßig am PC oder Laptop', '43 %', 'Kinder, die zumindest gelegentlich spielen'],
          ['Nennen Minecraft als eines ihrer Lieblingsspiele', '24 %', 'Kinder, die digitale Spiele nutzen']
        ] },
        { kind: 'source', html: 'Quelle: KIM-Studie 2024 des mpfs (Medienpädagogischer Forschungsverbund Südwest), Abschnitt über digitale Spiele. Die persönlichen Interviews mit 1.225 Kindern von sechs bis 13 Jahren und je einem Elternteil fanden vom 18. September bis 7. November 2024 statt. Von uns gelesen am 3. November 2026.' },
        { kind: 'p', mt: true, html: 'Eine Zahl in dieser Tabelle ist für unseren Kurs besonders wichtig: Nur 43 Prozent der spielenden Kinder spielen regelmäßig am PC oder Laptop, die meisten am Smartphone. Gebaut werden Spiele aber am Rechner, mit Tastatur und Maus. Für viele Kinder ist die erste Stunde deshalb auch die erste Begegnung mit dem Laptop als Werkzeug und nicht nur als Bildschirm.' },
        { kind: 'p', html: 'Wer selbst ein Spiel gebaut hat, sieht die Spiele anderer mit neuen Augen. Kinder fragen dann plötzlich, warum ein Level so schwer ist, wie die Punkte gezählt werden oder warum eine Figur durch eine Wand laufen kann. Das sind Fragen, aus denen Programmieren wird.' }
      ]
    },
    {
      id: 'usk',
      eyebrow: 'Altersfreigaben',
      h2: 'Was bedeuten die USK-Kennzeichen auf Spielen?',
      lede: 'Sie sagen, ab welchem Alter ein Spiel freigegeben ist. Die Stufen stehen im Jugendschutzgesetz; vergeben werden sie von der Unterhaltungssoftware Selbstkontrolle (USK).',
      body: [
        { kind: 'table', numCols: [], caption: 'Die fünf Altersstufen nach § 14 Absatz 2 Jugendschutzgesetz', head: ['Kennzeichen', 'Wortlaut im Gesetz', 'Erläuterung (USK 0 bis 12: Auszug von der USK)'], rows: [
          ['USK 0', 'Freigegeben ohne Altersbeschränkung', 'Spiele, die aus Sicht des Jugendschutzes keinerlei Beeinträchtigungen für Kinder beinhalten'],
          ['USK 6', 'Freigegeben ab sechs Jahren', 'Überwiegend familienfreundliche Spiele, die bereits spannender und wettkampfbetonter ausfallen dürfen'],
          ['USK 12', 'Freigegeben ab zwölf Jahren', 'Häufig schon deutlich kampfbetonter'],
          ['USK 16', 'Freigegeben ab sechzehn Jahren', 'Unsere Anmerkung: nichts für Kinder im Grundschulalter'],
          ['USK 18', 'Keine Jugendfreigabe', 'Unsere Anmerkung: nur für Erwachsene']
        ] },
        { kind: 'source', html: 'Quellen: Jugendschutzgesetz (JuSchG) § 14 Absatz 2, gesetze-im-internet.de; USK, Häufige Fragen: Welche Alterskennzeichen gibt es?; beide gelesen am 3. November 2026. Laut KIM-Studie 2024 ist die Alterskennzeichnung in Deutschland für alle Videospiele gesetzlich verpflichtend. Mit der USK sind wir nicht verbunden.' },
        { kind: 'two', mt: true,
          leftH3: 'Was Kinder darüber wissen',
          left: [
            'Laut KIM-Studie 2024 haben 70 Prozent der spielenden Kinder die Kennzeichnung schon wahrgenommen. Bei den Sechs- bis Siebenjährigen kennen sie aber nur 40 Prozent, bei den Acht- bis Neunjährigen schon 70 Prozent.',
            'Ein guter Grund, mit Kindern über die Zeichen zu sprechen, bevor sie sich ein Spiel wünschen. Wer selbst Spiele baut, versteht schnell, dass Inhalte bewusst gestaltet werden, auch die, die Angst machen sollen.'
          ],
          rightH3: 'Und die Spiele, die Kinder selbst bauen?',
          right: [
            'Die Spiele in unserem Kurs bleiben freundlich: Sammeln, Springen, Rätseln, Wettrennen. Wenn ein Kind ein Spiel mit Monstern bauen möchte, ist das in Ordnung, solange es zu seinem Alter passt; der Mentor achtet darauf.',
            'Wir empfehlen Kindern nur Werkzeuge, die für ihr Alter gedacht sind. Konten bei Spieleplattformen richten Eltern ein, nicht wir.'
          ] }
      ]
    },
    {
      id: 'alter',
      eyebrow: 'Nach Alter',
      h2: 'Welche Spiele können Kinder in welchem Alter programmieren?',
      lede: 'Unsere eigene Einteilung nach vielen Jahren Unterricht. Lesen, Schreiben und Englisch spielen dabei eine größere Rolle als das Alter allein.',
      body: [
        { kind: 'table', numCols: [], caption: 'Spiele, die Kinder bei uns bauen, nach Alter (unsere Planung)', head: ['Alter', 'Typisches Spiel', 'Was das Kind dabei lernt'], rows: [
          ['6 und 7', 'Eine Figur, die auf Tastendruck läuft und Sterne einsammelt', 'Abläufe, Ereignisse, erste Schleifen'],
          ['8 und 9', 'Ein Fangspiel mit Punkten und einer Uhr', 'Variablen, Bedingungen, Zufall'],
          ['9 und 10', 'Ein Jump and Run mit Hindernissen und Leben', 'Koordinaten, Schwerkraft, Kollisionen'],
          ['10 und 11', 'Ein Spiel mit mehreren Leveln und einem Endgegner', 'Listen, eigene Blöcke, Zustände'],
          ['11 und 12', 'Dasselbe Sprungspiel noch einmal in Python', 'Funktionen, Rechtecke als Zahlen, Testen']
        ] },
        { kind: 'p', mt: true, html: 'In Deutschland geht ein Kind meist von Klasse 1 bis 4 in die Grundschule, in Berlin und Brandenburg bis Klasse 6. Viele Kinder beginnen bei uns in der zweiten oder dritten Klasse, wenn sie sicher genug lesen, um Blöcke zu erkennen. Jüngere Kinder sind willkommen; der Mentor zeigt dann mehr und liest Wörter vor.' },
        { kind: 'p', html: 'Scratch eignet sich als Einstieg, weil Kinder Befehle nicht tippen müssen, sondern als Blöcke zusammenstecken. Die Blöcke gibt es auch mit deutscher Beschriftung; im Unterricht nennt der Mentor dazu immer das englische Wort, damit der spätere Wechsel zu Python leichtfällt.' }
      ]
    },
    {
      id: 'sprung',
      tint: 'tint',
      eyebrow: 'Eine Lektion aus dem Kurs',
      h2: 'Warum verliert die Figur, obwohl sie über den Stein gesprungen ist?',
      lede: 'Weil das Spiel nur nach links und rechts schaut. Diese Frage stellen uns Kinder in fast jedem Kurs, und die Antwort ist eine der schönsten kleinen Mathematiklektionen: Zwei Dinge berühren sich nur, wenn sie sich nach links und rechts und zugleich nach oben und unten überlappen. Beispiel und Code sind unsere eigenen.',
      body: [
        { kind: 'p', html: '<strong>Für Sechs- bis Neunjährige: das Sprungspiel in Scratch.</strong> So bauen wir es Schritt für Schritt, mit einer Katze als Figur und einem Stein als Hindernis.' },
        { kind: 'ol', items: [
          '<strong>Start.</strong> Unter <code>Wenn die grüne Flagge angeklickt wird</code> setzt das Kind die Katze mit <code>gehe zu x: (-200) y: (-100)</code> an den linken Rand.',
          '<strong>Laufen.</strong> In einer Schleife <code>wiederhole fortlaufend</code> bewegt sich die Katze mit <code>ändere x um (5)</code> nach rechts.',
          '<strong>Springen.</strong> Ein zweites Skript beginnt mit <code>Wenn Taste [Leertaste] gedrückt wird</code>: zehnmal <code>ändere y um (10)</code>, dann zehnmal <code>ändere y um (-10)</code>.',
          '<strong>Verlieren.</strong> In die Schleife kommt <code>falls &lt;wird [Stein] berührt?&gt; dann</code> und darin <code>stoppe [alles]</code>.',
          '<strong>Testen.</strong> Das Kind springt zu früh, zu spät und genau richtig und beobachtet, wann das Spiel stoppt. Dann ändert es die Sprunghöhe und probiert es noch einmal.'
        ] },
        { kind: 'p', mt: true, html: 'Scratch nimmt Kindern die schwierige Rechnung ab: Der Block <code>wird [Stein] berührt?</code> prüft für sie, ob sich die Bilder überlappen. Ab etwa zehn Jahren bauen wir die Prüfung selbst, und dann zeigt sich, warum sie zwei Richtungen braucht.' },
        { kind: 'code', label: 'Ab ungefähr zehn: die Prüfung selbst programmieren', lang: 'Python', code: PY, note: 'Diese zwei Zeilen hat unser Lauf mit Python 3.14 ausgegeben:<br><code>hoch | Version 1: [7, 8, 9, 10, 11, 12] | Version 2: []</code><br><code>flach | Version 1: [7, 8, 9, 10, 11, 12] | Version 2: [10, 11, 12]</code>' },
        { kind: 'table', mt: true, numCols: [0, 1, 2], caption: 'Der hohe Sprung, Bild für Bild über dem Stein (unser Beispiel)', head: ['Bild', 'Figur links bei x', 'Höhe y', 'Version 1 sagt', 'Version 2 sagt'], rows: [
          ['7', '70', '40', 'Treffer', 'kein Treffer'],
          ['8', '80', '55', 'Treffer', 'kein Treffer'],
          ['9', '90', '60', 'Treffer', 'kein Treffer'],
          ['10', '100', '55', 'Treffer', 'kein Treffer'],
          ['11', '110', '45', 'Treffer', 'kein Treffer'],
          ['12', '120', '35', 'Treffer', 'kein Treffer']
        ] },
        { kind: 'p', mt: true, html: 'Version 1 meldet bei beiden Sprüngen sechs Treffer, auch beim hohen, bei dem die Figur nie tiefer als 35 kommt, während der Stein nur 30 hoch ist. Das ist der Fehler, über den sich Kinder ärgern: "Ich war doch drüber!" Version 2 prüft zusätzlich oben und unten und meldet beim hohen Sprung keinen Treffer. Beim flachen Sprung landet die Figur in Bild 10 auf Höhe 20, also mitten im Stein, und Version 2 meldet zu Recht die Bilder 10, 11 und 12.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Zwei Richtungen prüfen.</strong> Zwei Rechtecke berühren sich nur, wenn sie sich nach links und rechts und zugleich nach oben und unten überlappen.',
          '<strong>Bild für Bild denken.</strong> Ein Spiel ist eine Folge von Bildern. Wer eine Tabelle wie oben ausfüllt, findet den Fehler, bevor er ihn sucht.',
          '<strong>Den Grenzfall ausprobieren.</strong> Was passiert, wenn die Figur genau auf Höhe 30 ist, also auf dem Stein steht? Mit &lt; statt &lt;= im Code zählt das nicht als Treffer, und das ist eine Entscheidung, die das Kind selbst treffen darf.'
        ] }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Wann findet der Spiele-Kurs statt?',
      lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
      body: [
        { kind: 'table', numCols: [], caption: 'Mögliche Kurszeiten in Deutschland und die Stunde beim Mentor', head: ['Bei Ihnen', 'Beim Mentor im Winter', 'Beim Mentor ab 28. März 2027'], rows: [
          ['14:10', '18:40', '17:40'],
          ['15:40', '20:10', '19:10'],
          ['Sonntag 09:45', '14:15', '13:15']
        ] },
        { kind: 'source', html: 'Deutschland folgt dem Einheiten- und Zeitgesetz: MEZ entspricht UTC+1, die Sommerzeit MESZ UTC+2. Seit dem 25. Oktober 2026 gilt wieder die Normalzeit, ab dem 28. März 2027 die Sommerzeit. Indiens Zeit liegt fest bei UTC+5:30, das macht viereinhalb Stunden Unterschied im Winter und dreieinhalb im Sommer. Gezeigt sind Beispiele, keine festen Gruppen.' },
        { kind: 'p', mt: true, html: 'Für Grundschulkinder empfehlen wir den frühen Nachmittag oder den Sonntagvormittag, nicht den Abend. Das Buchungsformular zeigt jede Uhrzeit in der Zeitzone Ihres Geräts.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Woran Sie den Fortschritt Ihres Kindes erkennen',
    lede: 'Fünf Stufen, mit denen wir selbst arbeiten. Sie beschreiben, was ein Kind allein schafft.',
    table: { caption: 'Fünf Stufen im Spiele-Kurs (unsere)', head: ['Stufe', 'Meist mit', 'Das Kind schafft allein'], rows: [
      ['1. Bewegen', '6 bis 7', 'eine Figur auf Tastendruck laufen und springen lassen'],
      ['2. Zählen', '7 bis 9', 'Punkte, Leben und eine Uhr mit Variablen bauen'],
      ['3. Regeln bauen', '8 bis 10', 'mit Bedingungen festlegen, wann man gewinnt oder verliert'],
      ['4. Level planen', '9 bis 11', 'ein Spiel mit mehreren Leveln und steigender Schwierigkeit entwerfen'],
      ['5. Selbst prüfen', '10 bis 12', 'eine Kollision selbst berechnen und einen Fehler Bild für Bild finden']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Spielen Sie das Spiel Ihres Kindes und fragen Sie, warum etwas passiert. Ein Kind, das seine Regeln erklären kann, hat programmiert und nicht nur abgeschrieben.',
      'Wir melden uns regelmäßig mit einer kurzen Nachricht: was gebaut wurde, was gelungen ist, was als Nächstes kommt.'
    ] },
    right: { h3: 'Für Kinder', ps: [
      'Bauen Sie zuerst das kleinste Spiel, das funktioniert, und machen Sie es danach schöner.',
      'Wenn etwas komisch aussieht, gehen Sie Bild für Bild durch. Der Fehler versteckt sich fast immer in einem einzigen Bild.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse rund ums Erfinden und Bauen',
    lede: 'Überall dasselbe Prinzip: live, englischsprachig, ein Mentor, der bleibt, wahlweise Gruppe oder Einzelstunde.',
    bands: [
      { num: 'I', h3: 'Für die Jüngsten', sub: '6 bis 9 Jahre', courses: [
        { code: 'SPL / START / 01', slug: 'kids-coding-blocks-masterclass', title: 'Coding mit Blöcken', blurb: 'Der erste Kontakt mit Befehlen, Schleifen und Ereignissen.' },
        { code: 'SPL / START / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Knobeln und logisch denken', blurb: 'Muster erkennen und Schritte ordnen, oft mit Papier.' },
        { code: 'SPL / START / 03', slug: 'block-coding-app-development-masterclass', title: 'Eigene Apps aus Blöcken', blurb: 'Kleine Apps fürs Tablet, selbst zusammengesteckt.' }
      ] },
      { num: 'II', h3: 'Andere Spielwelten', sub: '8 bis 14 Jahre', courses: [
        { code: 'SPL / WELT / 01', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox Game Coding', blurb: 'Eigene Roblox-Spiele mit Luau, 8 bis 14.' },
        { code: 'SPL / WELT / 02', slug: 'minecraft-coding-for-kids-course', title: 'Coding in Minecraft', blurb: 'Die Lieblingswelt vieler Kinder als Programmierlabor.' },
        { code: 'SPL / WELT / 03', slug: 'python-ai-kids-masterclass', title: 'Erste Schritte in Python', blurb: 'Schildkrötengrafik, kleine Spiele, erste schlaue Programme.' }
      ] },
      { num: 'III', h3: 'Wenn es größer wird', sub: '10 bis 16 Jahre', courses: [
        { code: 'SPL / NEXT / 01', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript ab 13', blurb: 'Spiele, die im Browser laufen und sich leicht teilen lassen.' },
        { code: 'SPL / NEXT / 02', slug: 'complete-game-development-masterclass-for-teens', title: 'Unity und C# ab 13', blurb: 'Größere Spiele mit einer Profi-Engine.' },
        { code: 'SPL / NEXT / 03', slug: 'maths-through-coding', title: 'Mathematik mit Python', blurb: 'Koordinaten und Muster im eigenen Code.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Ablauf',
    h2: 'So läuft eine Stunde im Spiele-Kurs',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Nach der Schule', l: 'Früher Nachmittag, etwa ab 14:10 Uhr.' },
      { time: 'Sonntag', l: 'Vormittags, in Ruhe und ausgeschlafen.' },
      { time: 'Einzeln', l: 'Zu Zeiten, die Sie mit dem Mentor abstimmen.' }
    ],
    cells: [
      { h3: 'Eine Spielidee', p: 'Jede Stunde beginnt mit einer Idee, die das Kind selbst mitbringt oder auswählt.' },
      { h3: 'Bauen am eigenen Rechner', p: 'Das Kind teilt den Bildschirm, der Mentor schaut zu und hilft.' },
      { h3: 'Einfaches Englisch', p: 'Kurze Sätze, Zeigen statt Erklären, Wörter werden wiederholt.' },
      { h3: 'Testen und Spielen', p: 'Am Ende spielt das Kind sein Spiel und sucht mit dem Mentor die Fehler.' },
      { h3: 'Ein fester Mentor', p: 'Immer dieselbe Person, die die Ideen Ihres Kindes kennt.' },
      { h3: 'Kurze Rückmeldung', p: 'Sie erfahren, was gebaut wurde und was als Nächstes kommt.' }
    ]
  },

  projectsH2: 'Spiele und Projekte von Kindern aus unseren Kursen',
  projectsLede: 'Ein Ausschnitt aus Projekten von Lernenden weltweit; viele weitere zeigt <a class="ag-inline-link" href="/student-labs">Student labs</a> (auf Englisch).',
  reviewsLede: 'Was Eltern und Kinder bei Google über uns geschrieben haben, unverändert auf Englisch.',

  fees: {
    h2: 'Kosten für den Spiele-Kurs',
    lede: 'Abgerechnet wird monatlich, acht Live-Stunden sind enthalten. Die Euro-Beträge auf dieser Seite beruhen auf dem Referenzkurs der Europäischen Zentralbank; gezahlt wird in US-Dollar, und Ihre Bank rechnet um. Deshalb kann der Betrag, den Sie später auf dem Konto sehen, ein wenig abweichen.',
    free: ['Eine kostenlose Probestunde mit einem kleinen Spiel', 'Ein Gespräch über Alter, Rechner und Interessen', 'Keine Kreditkarte nötig'],
    group: ['Fünfzehn bis zwanzig Kinder ähnlichen Alters', 'Ein Mentor, der bleibt', 'Zwei Stunden pro Woche', 'Monatlich zahlbar, monatlich kündbar'],
    one: ['Ihr Kind allein mit dem Mentor', 'Eigene Spielideen im eigenen Tempo', 'Zeiten nach Absprache']
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    h2: 'Spiele programmieren lernen: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein, die Unterrichtssprache ist immer Englisch, und jede Stunde ist live. Unsere Mentoren in Indien wählen einfache Sätze, sprechen klar und passen sich an, wie schnell Ihr Kind versteht und wie es selbst spricht. Viele Eltern sehen darin einen doppelten Gewinn: Ihr Kind baut Spiele und lernt dabei Englisch, die Sprache, in der später jede Programmiersprache geschrieben ist.' },
      { q: 'Ab welchem Alter kann mein Kind Spiele programmieren lernen?', a: 'Ab 6 Jahren, mit Scratch. Die Jüngsten bauen Spiele, in denen eine Figur läuft und Dinge einsammelt. Ab etwa 10 Jahren kommen erste Spiele in Python dazu, in denen das Kind Dinge wie Kollisionen selbst berechnet.' },
      { q: 'Muss mein Kind dafür gut Englisch können?', a: 'Nein. Für die Jüngsten reichen ein paar Wörter; der Mentor zeigt viel und wiederholt. In Scratch kann die Oberfläche auf Deutsch bleiben, der Mentor nennt das englische Wort für jeden Block dazu.' },
      { q: 'Welches Gerät braucht mein Kind?', a: 'Einen Laptop oder PC mit Maus und eine stabile Internetverbindung. Ein Tablet reicht für die meisten Spiele, die wir bauen, nicht aus, weil Kinder dort schlecht tippen und Blöcke ziehen. Laut KIM-Studie 2024 spielen nur 43 Prozent der spielenden Kinder regelmäßig am PC oder Laptop, deshalb lohnt es sich, den Rechner vor der ersten Stunde einmal einzurichten.' },
      { q: 'Was bedeuten die USK-Kennzeichen?', a: 'Sie zeigen die Altersfreigabe nach § 14 Jugendschutzgesetz: ohne Altersbeschränkung, ab sechs, ab zwölf, ab sechzehn Jahren oder keine Jugendfreigabe. Laut KIM-Studie 2024 kennen 40 Prozent der Sechs- bis Siebenjährigen die Kennzeichnung, bei den Acht- bis Neunjährigen sind es 70 Prozent.' },
      { q: 'Spielt mein Kind im Kurs nicht einfach nur?', a: 'Nein. Gespielt wird am Ende jeder Stunde, und zwar das eigene Spiel, um Fehler zu finden. Den größten Teil der Zeit bauen die Kinder: Figuren, Regeln, Punkte und Level.' },
      { q: 'Was lernt mein Kind außer Spielen?', a: 'Logisches Denken, Koordinaten, Zahlen und Geduld. Schon die Kollisionsprüfung auf dieser Seite ist Geometrie: Zwei Rechtecke berühren sich nur, wenn sie sich in beiden Richtungen überlappen. Viele Kinder rechnen danach lieber mit Koordinaten als vorher.' },
      { q: 'Zu welchen Zeiten finden die Stunden statt?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. Eine Stunde um 15:40 Uhr deutscher Winterzeit ist beim Mentor in Indien 20:10 Uhr.' },
      { q: 'Was kostet der Kurs?', a: 'Auf dieser Seite sehen Sie die Monatsgebühr in Euro, auf Basis des EZB-Referenzkurses. Die Abbuchung erfolgt in US-Dollar; die Umrechnung erledigt Ihre Bank. Für die Probestunde zahlen Sie nichts.' },
      { q: 'Kann mein Kind später zu Roblox oder Minecraft wechseln?', a: 'Ja. Wer in Scratch Bedingungen, Schleifen und Variablen gelernt hat, kommt in Roblox mit Luau oder in Minecraft schnell zurecht. Dafür haben wir eigene Kurse.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weiterlesen',
    h2: 'Mehr zum Lesen für Eltern',
    lede: 'Größtenteils auf Englisch.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Alle unsere Kurse für Familien in Deutschland.' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding classes for kids in Berlin', p: 'Für Familien in der Hauptstadt, mit Berliner Beispielen.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Wenn Informatik auf dem Stundenplan steht.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Learn to think, not copy AI', p: 'Selbst denken lernen statt abschreiben.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Wie eine Live-Stunde bei uns abläuft.' },
      { href: '/student-labs', label: 'Student labs', p: 'Spiele und Projekte unserer Lernenden.' }
    ]
  },

  start: {
    h2: 'Kostenlose Probestunde: das erste eigene Spiel',
    lede: 'In der Probestunde baut Ihr Kind mit dem Mentor eine Figur, die läuft und springt, und probiert gleich den ersten Stein als Hindernis aus. Danach wissen Sie, wie Ihr Kind mit Englisch und Rechner zurechtkommt, und wir empfehlen die passende Gruppe.',
    readFirst: 'Mehr zum Unterricht steht auf <a class="ag-inline-link" href="/how-we-teach">How we teach</a>, alle Lehrpläne finden Sie auf <a class="ag-inline-link" href="/courses">All courses</a>; beide Seiten sind englischsprachig.',
    note: 'Live online, auf Englisch, mit Mentoren aus Indien. Eine WhatsApp-Nachricht beantworten wir meist am schnellsten.',
    formNote: 'Kostenlos, ohne Kreditkarte, ohne Abo.'
  },

  footer: {
    cols: [
      { h4: 'Spiele bauen', links: [
        { href: '/courses/game-development-masterclass-for-kids', label: 'Spiele für Kinder' },
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch für Kinder' },
        { href: '/courses/godot-game-development-course-for-kids-and-teens', label: 'Spiele mit Godot' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-for-kids-berlin', label: 'Programmieren in Berlin' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Links-rechts und oben-unten'
  },

  personalityCss: `
.ag-root.ag-spl .ag-hero h1 { letter-spacing: -0.011em; }
.ag-root.ag-spl .ag-capsule { border-left-width: 4px; border-radius: 0; }
.ag-root.ag-spl .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-spl .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-spl .ag-table td { hyphens: auto; }
`,

  dossier: {
    curriculumAuthority: 'mpfs KIM-Studie 2024 (digital games chapter); Jugendschutzgesetz para 14; USK, Welche Alterskennzeichen gibt es?; FACTS.md 1; Einheiten- und Zeitgesetz; read 3 November 2026. Example our own.',
    localProject: 'A jump over a stone: an original Python program models figure and stone as rectangles and checks every frame; a check on the left-right axis only reports hits in frames 7 to 12 for both jumps, while the check on both axes reports none for the high jump and frames 10, 11 and 12 for the flat one; plus Scratch steps for ages 6 to 9. Lesson family: two rectangles touch only if they overlap on both axes.',
    requiredMentions: ['hoch | Version 1: [7, 8, 9, 10, 11, 12] | Version 2: []', 'flach | Version 1: [7, 8, 9, 10, 11, 12] | Version 2: [10, 11, 12]', 'Der hohe Sprung, Bild für Bild über dem Stein', 'Spielen regelmäßig, Zwölf- bis 13-Jährige', 'Die fünf Altersstufen nach § 14 Absatz 2 Jugendschutzgesetz', 'Überwiegend familienfreundliche Spiele, die bereits spannender und wettkampfbetonter ausfallen dürfen', 'Warum verliert die Figur, obwohl sie über den Stein gesprungen ist?', 'Links-rechts und oben-unten'],
    sources: [
      { claim: 'KIM-Studie 2024: gaming frequency, by age, devices, Minecraft, USK awareness, USK labels legally mandatory.', url: 'https://mpfs.de/app/uploads/2025/05/KIM-Studie-2024.pdf' },
      { claim: 'The five age labels in JuSchG para 14 (2).', url: 'https://www.gesetze-im-internet.de/juschg/__14.html' },
      { claim: 'USK descriptions of USK 0, 6 and 12.', url: 'https://usk.de/die-usk/arbeit-der-usk/welche-alterskennzeichen-gibt-es/' },
      { claim: 'German legal time.', url: 'https://www.gesetze-im-internet.de/me_einhg/BJNR007090969.html' }
    ],
    rejectedClaims: [
      'Scratch age range: scratch.mit.edu served only a JavaScript shell; no age is claimed.',
      'KIM gender figures: not used.',
      'Any connection to the USK, mpfs or MIT Scratch: none.',
      'German-language teaching: English only, said plainly.'
    ]
  }
};
