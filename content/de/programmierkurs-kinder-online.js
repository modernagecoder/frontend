'use strict';
// Programmierkurs für Kinder online (ag- German-language door DE053, Germany cluster P3, rows.tsv German doors).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors (based in India) who match the learner's pace and
// accent; the capsule says "auf Englisch". Formal "Sie" throughout. Pages show euro; checkout charges USD.
// Angle: what German parents of children aged 6 to 12 should check before booking an online programming course: what
// the Grundschule does and does not teach (KMK 2024), what a home needs (KIM-Studie 2024 device figures), how a live
// lesson runs, and one original unplugged-then-Python project.
// Sources (fetched raw with curl -sL -A "Mozilla/5.0"; quotes grepped in the raw text):
//  KMK Primarbereich page (FACTS.md fact 1): "die von der ersten bis zur vierten, in Berlin und Brandenburg bis zur
//   sechsten Jahrgangsstufe reicht". https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/primarbereich.html
//  KMK Eckpunktepapier Medienbildung und informatische Bildung in der Grundschule, Beschluss vom 28.11.2024
//   (facts-school/src/kmk-medien-gs/bee9df08.txt, read 3 Nov 2026):
//   "Ein Unterrichtsfach Informatik in der Grundschule ist derzeit nicht vorgesehen."
//   "Unplugged Konzepte7 bilden einen altersgerechten und motivierenden Ansatz" (footnote 7: "Vermittlung informatischer
//   Grundprinzipien und Denkweisen ohne digitale Hilfsmittel, insbesondere durch Spiele, Rätsel, Geschichten oder
//   körperliche Aktivitäten"). https://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/2024/2024_11_28-Medien-inform-Bildung-Grundschule.pdf
//  KMK Eurydice dossier (fact 289): Stichtag "zwischen dem 30. Juni und dem 30. September".
//  KIM-Studie 2024, mpfs (src-pages/programmierkurs-kinder-online/KIM-Studie-2024.txt, PDF read with PDFKit):
//   "1.225 Kinder im Alter von sechs bis 13 Jahren"; "vom 18. September 2024 bis zum 07. November 2024";
//   "In rund acht von zehn Haushalten sind zudem Drucker, Radiogeräte und Laptops"; "Jeweils rund drei von fünf
//   Haushalten verfügen über Tablets, Computer und feste Spielekonsolen"; "Ein Laptop steht bei 13 Prozent der Kinder";
//   "Knapp die Hälfte der Kinder verfügt über ein eigenes Gerät (46 %)". https://mpfs.de/app/uploads/2025/05/KIM-Studie-2024.pdf
//  BWINF Biber (facts 130, 133): "Jahrgangsstufen 3 bis 13, keine Vorkenntnisse erforderlich"; Biberwochen 2026 9 to 20 November.
//  Time: EinhZeitG para 4, SoZV (facts-geo/timezone.tsv): summer time 2027 from 28 March.
// Our own: the Kachelroboter in Python (python3 -I, CPython 3.14.8), output printed exactly:
//   fahre('VVRVV') -> (2, 2, 'O'); fahre('VVRRVV') -> (0, 0, 'S'); fahre('RVLVRVLV') -> (2, 2, 'N').
// Lesson family: turning changes the heading, not the square; keep track of position and heading together.

const { DE } = require('../../scripts/nl/lib/market-de');

const PY = [
  "RICHTUNGEN = ['N', 'O', 'S', 'W']",
  "SCHRITT = {'N': (0, 1), 'O': (1, 0), 'S': (0, -1), 'W': (-1, 0)}",
  '',
  "def fahre(befehle, x=0, y=0, blick='N'):",
  '    for b in befehle:',
  "        if b == 'V':",
  '            dx, dy = SCHRITT[blick]',
  '            x, y = x + dx, y + dy',
  "        elif b == 'R':",
  '            blick = RICHTUNGEN[(RICHTUNGEN.index(blick) + 1) % 4]',
  "        elif b == 'L':",
  '            blick = RICHTUNGEN[(RICHTUNGEN.index(blick) - 1) % 4]',
  '    return x, y, blick',
  '',
  "print(fahre('VVRVV'))",
  "print(fahre('VVRRVV'))",
  "print(fahre('RVLVRVLV'))"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'Programmierkurs für Kinder online' },
  slug: 'programmierkurs-kinder-online',
  code: 'prk',
  accent: '#6C3B41',
  accentRationale: 'Programmierkurs für Kinder online: a dark garnet #6C3B41, like the red pencil of a first exercise book, apart from the petrol of the Informatik-Nachhilfe page; contrast 7.29 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Programmierkurs für Kinder online (auf Englisch)',
  title: 'Programmierkurs für Kinder online: live, 6 bis 12 Jahre',
  description: 'Programmierkurs für Kinder von 6 bis 12, live online auf Englisch: was die Grundschule nicht abdeckt, was Sie zu Hause brauchen, wie eine Stunde abläuft.',
  ogDescription: 'Ein Live-Programmierkurs für Kinder von 6 bis 12 Jahren, auf Englisch und im Tempo Ihres Kindes: was die Grundschule laut KMK abdeckt, welche Technik nötig ist und ein Kachelroboter zum Ausprobieren.',
  twitterDescription: 'Programmierkurs für Kinder, live online auf Englisch: Grundschule, Technik, Ablauf und ein Kachelroboter.',
  pageName: 'Programmierkurs für Kinder online',
  webPageDescription: 'Ein Ratgeber für Eltern in Deutschland, die einen Online-Programmierkurs für Kinder von 6 bis 12 Jahren suchen: was die Grundschule nach dem KMK-Eckpunktepapier von 2024 leistet, welche Geräte Familien laut KIM-Studie 2024 haben, wie eine Live-Stunde abläuft und ein eigenes Projekt vom Kachelboden bis zu Python.',
  courseDescription: 'Live-Online-Programmierkurs für Kinder von 6 bis 12 Jahren in ganz Deutschland, ausschließlich auf Englisch: Denkspiele ohne Bildschirm, Scratch und erste Schritte in Python, in der Gruppe oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Programmierkurs Kinder',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#schule', label: 'Grundschule' },
    { href: '#technik', label: 'Technik' },
    { href: '#roboter', label: 'Roboter' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Deutschland &middot; Programmieren &middot; 6 bis 12 Jahre',
  h1: 'Programmierkurs für Kinder, live online',
  lede: 'Sie möchten, dass Ihr Kind programmieren lernt, und fragen sich, ob ein Online-Kurs dafür taugt? Hier steht, was die Grundschule in Deutschland dazu beiträgt und was nicht, welche Geräte Sie wirklich brauchen, wie eine Live-Stunde mit Mentor abläuft und wie ein erstes Projekt aussieht: ein Roboter auf dem Kachelboden, zuerst mit Kreide, dann in Python.',
  secondaryCta: { href: '#roboter', label: 'Zum Kachelroboter' },
  wa: 'Hallo Modern Age Coders, wir suchen einen Online-Programmierkurs auf Englisch für unser Kind (6 bis 12 Jahre) in Deutschland. Ist eine kostenlose Probestunde möglich?',
  heroNote: 'Live seit 2020 &middot; über 10.000 Lernende weltweit &middot; Unterricht auf Englisch, mit festem Mentor',
  spec: [
    ['Alter', '6 bis 12 Jahre, Gruppen nach Alter'],
    ['Inhalte', 'Denkspiele, Scratch, erstes Python'],
    ['Format', 'Live per Video, nichts vorab aufgezeichnet'],
    ['Gruppe', 'Fünfzehn bis zwanzig Kinder, oder einzeln'],
    ['Technik', 'Laptop oder Computer mit Kamera'],
    ['Probestunde', 'Kostenlos, 30 bis 45 Minuten']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Der Programmierkurs für Kinder von Modern Age Coders ist ein Live-Online-Kurs für Kinder von 6 bis 12 Jahren in ganz Deutschland, unterrichtet auf Englisch. Jüngere beginnen mit Denkspielen und Scratch, ältere schreiben ihre ersten Programme in Python. Ein fester Mentor stellt sich auf Tempo und Aussprache Ihres Kindes ein; gelernt wird in einer Gruppe von fünfzehn bis zwanzig Kindern oder im Einzelunterricht, nachmittags oder am Wochenende.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Kurse, mit denen Kinder anfangen',
    lede: 'Der erste für Sechs- bis Neunjährige ohne Bildschirmerfahrung, der zweite als Hauptweg von Scratch zu eigenen Spielen, der dritte für Kinder, die schon tippen und lesen können und echten Code schreiben wollen.',
    items: [
      { course: 'reasoning-and-readiness-course-for-young-thinkers', code: 'PRK / 01', title: 'Denken lernen für junge Köpfe', alt: 'Kursbild Reasoning and Readiness für Kinder von 6 bis 9', note: 'Für 6 bis 9 Jahre, in zwei Altersstufen. Muster, Reihenfolgen und Rätsel, oft mit Papier und Stift, als Grundlage für alles Programmieren danach.' },
      { course: 'kids-coding-blocks-masterclass', code: 'PRK / 02', title: 'Coding für Kinder: von Scratch zu Spielen', alt: 'Kursbild Coding for Kids mit Scratch', note: 'Für 6 bis 12 Jahre, Gruppen nach Alter. Blöcke zusammensetzen, Figuren bewegen, Spiele bauen und dabei Schleifen, Bedingungen und Variablen kennenlernen.' },
      { course: 'python-ai-kids-masterclass', code: 'PRK / 03', title: 'Python und KI für Kinder', alt: 'Kursbild Python and AI for Kids', note: 'Etwa ab Klasse 3 bis Klasse 8. Die ersten getippten Programme, kleine Spiele und Zeichnungen, später erste kleine Projekte rund um künstliche Intelligenz.' }
    ]
  },

  sections: [
    {
      id: 'schule',
      eyebrow: 'Was die Schule leistet',
      h2: 'Lernen Kinder in der Grundschule programmieren?',
      lede: 'Meist nicht als eigenes Fach. Die Kultusministerkonferenz hat im November 2024 festgehalten, wie Medienbildung und informatische Bildung in der Grundschule verankert werden sollen, und dabei ausdrücklich kein Schulfach Informatik vorgesehen.',
      body: [
        { kind: 'table', numCols: [], caption: 'Informatische Bildung im Grundschulalter in Deutschland, Stand November 2026', head: ['Frage', 'Antwort', 'Quelle'], rows: [
          ['Wie lange dauert die Grundschule?', 'Klasse 1 bis 4, in Berlin und Brandenburg bis Klasse 6', 'KMK, Seite Primarbereich'],
          ['Wann kommen Kinder in die Schule?', 'Mit sechs Jahren; den Stichtag legt jedes Land zwischen dem 30. Juni und dem 30. September fest', 'KMK, Eurydice-Dossier zum deutschen Bildungswesen'],
          ['Gibt es ein Fach Informatik?', 'Nein: "Ein Unterrichtsfach Informatik in der Grundschule ist derzeit nicht vorgesehen."', 'KMK-Eckpunktepapier vom 28.11.2024'],
          ['Wie wird es stattdessen unterrichtet?', 'Fächerübergreifend, also verteilt auf Deutsch, Mathematik, Sachunterricht und andere Fächer', 'KMK-Eckpunktepapier vom 28.11.2024'],
          ['Welche Methode empfiehlt die KMK?', 'Unplugged-Konzepte: informatische Denkweisen ohne digitale Hilfsmittel, mit Spielen, Rätseln, Geschichten und Bewegung', 'KMK-Eckpunktepapier, Fußnote 7'],
          ['Gibt es einen Wettbewerb für Grundschulkinder?', 'Ja, den Informatik-Biber für die Jahrgangsstufen 3 bis 13, ohne Vorkenntnisse; 2026 vom 9. bis 20. November', 'Bundesweite Informatikwettbewerbe (BWINF)']
        ] },
        { kind: 'source', html: 'Quellen: Kultusministerkonferenz, Seite "Primarbereich" und "Eckpunktepapier zur Verankerung von Medienbildung und informatischer Bildung in der Grundschule" (Beschluss vom 28.11.2024); KMK, Eurydice-Dossier; BWINF, Seiten zum Informatik-Biber. Alle gelesen am 2. und 3. November 2026. Wir sind mit keiner dieser Stellen verbunden.' },
        { kind: 'two', mt: true,
          leftH3: 'Die Folgen für Grundschulkinder',
          left: [
            'In der Grundschule begegnet Ihr Kind dem Programmieren also eher zufällig: mal ein Bodenroboter im Sachunterricht, mal eine Lern-App in Mathematik, je nach Schule und Lehrkraft. Einen festen Lehrplan mit Schleifen, Bedingungen und Variablen gibt es dort nicht.',
            'Wer früh Freude daran zeigt, findet in einem Kurs den durchgehenden Faden, den die Schule in diesem Alter nicht spinnen soll. Ein Kurs ersetzt dabei nichts, er ergänzt: Lesen, Schreiben und Rechnen bleiben das Fundament, auch für jede Programmiersprache.'
          ],
          rightH3: 'Unplugged zuerst, auch bei uns',
          right: [
            'Die KMK nennt Unplugged-Konzepte einen "altersgerechten und motivierenden Ansatz". Wir sehen das genauso. Gerade Sechs- und Siebenjährige lernen in den ersten Stunden mit Papier, Pfeilkarten und Spielfiguren, bevor sie an den Bildschirm gehen.',
            'Erst wenn ein Kind eine Anweisungsfolge auf dem Tisch legen und erklären kann, setzt es dieselbe Folge am Computer in Blöcke um. So wird der Bildschirm zum Werkzeug und nicht zum Selbstzweck.'
          ] }
      ]
    },
    {
      id: 'technik',
      eyebrow: 'Technik zu Hause',
      h2: 'Welche Geräte braucht ein Kind für einen Online-Programmierkurs?',
      lede: 'Ein Laptop oder Computer mit Kamera, Mikrofon und stabiler Internetverbindung. Die meisten Familien haben das schon: Laut KIM-Studie 2024 steht in rund acht von zehn Haushalten mit Kindern von sechs bis 13 Jahren ein Laptop.',
      body: [
        { kind: 'table', numCols: [], caption: 'Geräte in Familien mit Kindern von 6 bis 13 Jahren in Deutschland (KIM-Studie 2024) und wofür sie im Kurs taugen', head: ['Gerät', 'Verbreitung laut KIM 2024', 'Für den Kurs'], rows: [
          ['Laptop im Haushalt', 'In rund acht von zehn Haushalten', 'Ideal: Scratch und Python laufen im Browser, Kamera ist eingebaut'],
          ['Computer im Haushalt', 'In rund drei von fünf Haushalten', 'Gut, mit Webcam und Headset'],
          ['Tablet im Haushalt', 'In rund drei von fünf Haushalten', 'Für Scratch möglich, für Python ohne Tastatur mühsam'],
          ['Eigenes Smartphone des Kindes', 'Knapp die Hälfte der Kinder (46 %)', 'Nicht geeignet: zu kleiner Bildschirm zum Programmieren'],
          ['Eigener Laptop im Kinderzimmer', '13 Prozent der Kinder', 'Nicht nötig: der Familienlaptop am Küchentisch reicht']
        ] },
        { kind: 'source', html: 'Quelle: Medienpädagogischer Forschungsverbund Südwest, KIM-Studie 2024 (Kindheit, Internet, Medien), Kapitel 2 Medienausstattung. Befragt wurden 1.225 Kinder im Alter von sechs bis 13 Jahren und ihre Haupterzieher*innen, vom 18. September bis 7. November 2024. Die Spalte "Für den Kurs" ist unsere Einschätzung.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Ein ruhiger Platz', p: 'Ein Tisch, an dem Ihr Kind eine Stunde lang sitzen kann, ohne dass der Fernseher läuft. Kopfhörer mit Mikrofon helfen, wenn Geschwister in der Nähe spielen.' },
          { h3: 'Ein Browser genügt', p: 'Scratch läuft im Browser, ebenso unsere Python-Umgebung für Anfänger. Sie müssen nichts installieren und keine Konten für Ihr Kind bei fremden Diensten anlegen.' },
          { h3: 'Papier und Stift', p: 'Klingt altmodisch, ist aber Pflicht: Viele Aufgaben lösen die Kinder zuerst auf Papier, so wie es die KMK für die Grundschule empfiehlt.' }
        ] },
        { kind: 'p', mt: true, html: 'Sitzen Sie in der ersten Stunde gern dabei, besonders bei Sechs- und Siebenjährigen. Danach reicht es meist, in Rufweite zu bleiben. Der Mentor bittet Ihr Kind gelegentlich, den Bildschirm zu teilen, damit er sehen kann, wo es hängt; sonst bleibt der Bildschirm Ihres Kindes privat.' }
      ]
    },
    {
      id: 'ablauf',
      eyebrow: 'Eine Stunde von innen',
      h2: 'Wie läuft eine Live-Stunde im Programmierkurs ab?',
      lede: 'Eine Stunde dauert sechzig Minuten und hat immer dieselbe Form, damit Kinder wissen, was kommt. So sieht sie bei einer Gruppe von Acht- und Neunjährigen aus.',
      body: [
        { kind: 'ol', items: [
          '<strong>Ankommen, fünf Minuten.</strong> Der Mentor begrüßt jedes Kind mit Namen und stellt eine kleine Frage zum letzten Projekt. Wer etwas zu Hause weitergebaut hat, darf es kurz zeigen.',
          '<strong>Ein Rätsel ohne Computer, zehn Minuten.</strong> Zum Beispiel: Welche Pfeilkarten bringen die Figur auf das Feld mit dem Stern? Die Kinder legen und besprechen ihre Lösung, bevor jemand eine Taste drückt.',
          '<strong>Neues zeigen, zehn Minuten.</strong> Der Mentor baut einen Baustein vor, etwa eine Wiederholung, und sagt laut, was er denkt. Fehler macht er absichtlich mit, damit die Kinder sie finden.',
          '<strong>Selbst bauen, fünfundzwanzig Minuten.</strong> Jedes Kind arbeitet am eigenen Projekt. Wer hängen bleibt, meldet sich, und der Mentor schaut auf den geteilten Bildschirm, gibt einen Hinweis, aber keine fertige Lösung.',
          '<strong>Zeigen und erklären, zehn Minuten.</strong> Zwei oder drei Kinder führen vor, was sie gebaut haben, und erklären einen Block in eigenen Worten. Erklären ist hier wichtiger als ein fertiges Spiel.'
        ] },
        { kind: 'p', mt: true, html: 'Nach der Stunde erfahren Sie in wenigen Sätzen, woran Ihr Kind gearbeitet hat, was ihm leichtfiel und wo es noch stockt. Im Einzelunterricht ist der Ablauf freier; der Mentor richtet sich dann ganz nach dem Tempo Ihres Kindes und kann auch einmal eine ganze Stunde an einem einzigen Fehler bleiben, wenn Ihr Kind ihn unbedingt selbst finden will.' },
        { kind: 'two', mt: true,
          leftH3: 'Warum wir keine Lösungen vorsagen',
          left: [
            'Ein Kind, das abtippt, was der Mentor zeigt, hat nach der Stunde ein laufendes Programm und nichts gelernt. Deshalb fragen unsere Mentoren zurück: Was soll die Figur jetzt tun? Was tut sie stattdessen? Welcher Block ist daran schuld?',
            'Das dauert länger, aber nach einigen Wochen stellen sich die Kinder diese Fragen selbst. Genau das ist der Kern des Programmierens: einen Fehler finden, ihn verstehen und ihn beheben.'
          ],
          rightH3: 'Und künstliche Intelligenz?',
          right: [
            'Chatbots, die ein Konto für Erwachsene oder die Zustimmung der Eltern verlangen, empfehlen wir Kindern in diesem Alter nicht. Wenn KI vorkommt, dann als Thema: Wie erkennt ein Programm ein Bild? Warum irrt es sich?',
            'Kinder sollen zuerst selbst denken lernen. Wer verstanden hat, wie eine Schleife funktioniert, kann später auch beurteilen, ob ein KI-Werkzeug richtigen oder falschen Code vorschlägt.'
          ] }
      ]
    },
    {
      id: 'roboter',
      tint: 'tint',
      eyebrow: 'Ein Projekt zum Ausprobieren',
      h2: 'Ein erstes Projekt: der Kachelroboter',
      lede: 'Dieses Projekt ist unser eigenes und passt für Kinder ab etwa acht Jahren. Es beginnt auf dem Fußboden und endet in Python. Die wichtigste Erkenntnis: Wenn sich der Roboter dreht, bleibt er auf seinem Feld stehen. Nur die Blickrichtung ändert sich.',
      body: [
        { kind: 'ol', items: [
          '<strong>Spielfeld legen.</strong> Kleben Sie mit Malerkrepp ein Raster aus drei mal drei Feldern auf den Boden oder zeichnen Sie es auf ein Blatt. Ihr Kind steht unten links und schaut nach vorn, also nach Norden.',
          '<strong>Drei Befehle vereinbaren.</strong> V heißt ein Feld vorwärts, R heißt eine Vierteldrehung nach rechts, L eine Vierteldrehung nach links. Mehr gibt es nicht.',
          '<strong>Befehlsfolge vorlesen.</strong> Sie lesen VVRVV vor, Ihr Kind führt aus. Wo steht es am Ende, und wohin schaut es? Erst raten, dann laufen.',
          '<strong>Rollen tauschen.</strong> Ihr Kind schreibt eine Folge auf, die Sie zu einem bestimmten Feld bringt, etwa zu einem Kuscheltier in der Ecke oben rechts.',
          '<strong>Zwei Wege vergleichen.</strong> Gibt es eine zweite, ganz andere Folge, die zum selben Feld führt? Und schaut man am Ende in dieselbe Richtung?'
        ] },
        { kind: 'code', label: 'Derselbe Roboter in Python', lang: 'Python', code: PY, note: 'Ausgabe, so wie wir das Programm selbst ausgeführt haben: <code>(2, 2, \'O\')</code>, dann <code>(0, 0, \'S\')</code>, dann <code>(2, 2, \'N\')</code>. Die Felder zählen wir von 0 an, unten links ist (0, 0); N, O, S und W stehen für Norden, Osten, Süden und Westen.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Was die drei Befehlsfolgen bewirken (unsere Auswertung)', head: ['Befehlsfolge', 'Endfeld', 'Blickrichtung', 'Was man daran lernt'], rows: [
          ['VVRVV', '(2, 2)', 'Osten', 'Nach der Rechtsdrehung läuft der Roboter in eine neue Richtung weiter'],
          ['VVRRVV', '(0, 0)', 'Süden', 'Zwei Rechtsdrehungen sind eine Kehrtwende: zurück zum Start, aber mit dem Rücken zum alten Ziel'],
          ['RVLVRVLV', '(2, 2)', 'Norden', 'Eine Treppe führt zum selben Feld wie VVRVV, der Roboter schaut aber anders']
        ] },
        { kind: 'p', mt: true, html: 'Kinder, die VVRRVV zum ersten Mal hören, sagen oft voraus, dass der Roboter irgendwo oben ankommt. Er steht aber wieder am Start, nur umgedreht. Genau solche Überraschungen sind der Grund, warum wir erst vorhersagen und dann ausführen lassen. In der Python-Fassung sieht man außerdem, wie der Rest beim Teilen durch 4 (das Zeichen <code>%</code>) aus Westen wieder Norden macht: Nach der vierten Drehung ist der Roboter einmal ganz herum.' },
        { kind: 'p', html: 'Zum Weiterdenken für ältere Kinder: Was passiert bei der Folge VVVV auf einem Spielfeld mit nur drei Reihen? Das Programm rechnet ohne Murren (0, 4) aus, obwohl es dieses Feld gar nicht gibt. Eine Prüfung, ob der Roboter das Spielfeld verlässt, ist eine schöne erste eigene Erweiterung.' }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Wann finden die Kurse für Kinder statt?',
      lede: 'Nach der Schule oder am Wochenende. Die Mentoren sitzen in Indien; weil Indien Deutschland mehrere Stunden voraus ist, liegt ein Nachmittag bei uns dort am Abend.',
      body: [
        { kind: 'table', numCols: [], caption: 'Drei Beispieltermine: so spät ist es dann beim Mentor in Indien', head: ['Deutsche Zeit', 'Indische Zeit im Winter (bis 27. März 2027)', 'Indische Zeit im Sommer (ab 28. März 2027)'], rows: [
          ['14:00', '18:30', '17:30'],
          ['15:15', '19:45', '18:45'],
          ['Samstag 11:00', '15:30', '14:30']
        ] },
        { kind: 'source', html: 'Gesetzliche Zeit ist laut Einheiten- und Zeitgesetz im Winter die MEZ, eine Stunde vor UTC, im Sommer die MESZ, zwei Stunden vor UTC. Zurückgestellt wurde am 25. Oktober 2026, vorgestellt wird am 28. März 2027. In Indien gilt ganzjährig UTC+5:30, das sind im Winter 4 Stunden 30 Minuten und im Sommer 3 Stunden 30 Minuten Vorsprung. Die Zeilen sind Beispiele, keine festen Kurszeiten.' },
        { kind: 'p', mt: true, html: 'Für Erstklässler empfehlen wir frühe Nachmittage, bevor die Konzentration nachlässt. Wenn Sie die Probestunde buchen, wählen Sie die Uhrzeit in deutscher Zeit; die Umrechnung erledigt das Buchungssystem.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Fortschritte erkennen, von sechs bis zwölf',
    lede: 'Diese Stufen haben wir für unsere Kurse festgelegt. Sie sind keine Schulnoten und ersetzen keine Bewertung durch die Schule.',
    table: { caption: 'Fünf Stufen im Programmierkurs für Kinder (unsere)', head: ['Stufe', 'Ungefähres Alter', 'Ihr Kind kann'], rows: [
      ['1. Folgen legen', '6 bis 7', 'eine Folge aus Pfeilkarten legen, die eine Figur ans Ziel bringt'],
      ['2. Blöcke bauen', '7 bis 8', 'dieselbe Folge in Scratch zusammenstecken und starten'],
      ['3. Wiederholen', '8 bis 9', 'erkennen, dass sich etwas wiederholt, und eine Schleife statt zehn gleicher Blöcke nutzen'],
      ['4. Entscheiden', '9 bis 10', 'eine Figur mit wenn und sonst auf Ereignisse reagieren lassen'],
      ['5. Tippen', '10 bis 12', 'ein kurzes Python-Programm schreiben, ausführen und einen Fehler darin selbst finden']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Die Altersangaben sind grobe Richtwerte. Manche Siebenjährige erreichen Stufe 3 schnell, manche Elfjährige brauchen für Stufe 2 ein paar Wochen. Beides ist normal.',
      'Ein gutes Zeichen ist, wenn Ihr Kind beim Abendessen erklärt, warum seine Figur gegen die Wand gelaufen ist. Wer einen Fehler erklären kann, hat ihn verstanden.'
    ] },
    right: { h3: 'Für Kinder', ps: [
      'Bei uns dürfen Fehler passieren. Jeder Fehler ist ein Hinweis darauf, wo man suchen muss, und der Mentor freut sich, wenn Sie ihn selbst entdecken.',
      'Sagen Sie zuerst laut, was die Figur tun soll. Starten Sie dann das Programm und schauen Sie, ob sie es wirklich tut.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse für Kinder von 6 bis 12',
    lede: 'Jeder davon wird live unterrichtet, auf Englisch, und Ihr Kind behält über Monate dieselbe Lehrperson.',
    bands: [
      { num: 'I', h3: 'Erste Schritte', sub: '6 bis 10 Jahre', courses: [
        { code: 'PRK / START / 01', slug: 'scratch-programming-complete-course', title: 'Scratch von Anfang an', blurb: 'Drei Stufen für die Klassen 1 bis 5, je nach Klasse eingestuft.' },
        { code: 'PRK / START / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Probleme lösen wie Informatiker', blurb: 'Knobeln, zerlegen, Muster finden, Klasse 3 bis 8.' },
        { code: 'PRK / START / 03', slug: 'mental-maths-mastery-kids', title: 'Kopfrechnen mit Verstand', blurb: 'Zahlgefühl statt Tricks, 5 bis 10 Jahre.' }
      ] },
      { num: 'II', h3: 'Spiele und Welten', sub: '7 bis 12 Jahre', courses: [
        { code: 'PRK / SPIEL / 01', slug: 'minecraft-coding-for-kids-course', title: 'Programmieren mit Minecraft', blurb: 'Von Blöcken zu echtem Code, 7 bis 12.' },
        { code: 'PRK / SPIEL / 02', slug: 'game-development-masterclass-for-kids', title: 'Spiele entwickeln', blurb: 'Scratch, Roblox und Minecraft, 8 bis 12.' },
        { code: 'PRK / SPIEL / 03', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox-Spiele in Luau', blurb: 'Eigene Spielwelten programmieren, 8 bis 14.' }
      ] },
      { num: 'III', h3: 'Weiter mit Text-Code', sub: '9 bis 12 Jahre', courses: [
        { code: 'PRK / CODE / 01', slug: 'kids-ai-web-development-course', title: 'Webseiten für Kinder', blurb: 'Eigene Seiten gestalten, für Neun- bis Zwölfjährige.' },
        { code: 'PRK / CODE / 02', slug: 'cpp-programming-for-kids-course', title: 'C++ für Kinder', blurb: 'Rätsel und kleine Spiele in Textcode, 9 bis 12.' },
        { code: 'PRK / CODE / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Fit für den Informatik-Biber', blurb: 'Knobelaufgaben ab Klasse 3, ganz ohne Vorwissen.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'So läuft es ab',
    h2: 'Wie der Live-Kurs organisiert ist',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Früher Nachmittag', l: 'Für Grundschulkinder direkt nach Schule oder Hort.' },
      { time: 'Samstag', l: 'Vormittags, wenn unter der Woche kein Platz ist.' },
      { time: 'Einzeln', l: 'Zu einer Uhrzeit, die Sie mit dem Mentor absprechen.' }
    ],
    cells: [
      { h3: 'Zwei Stunden pro Woche', p: 'Jeweils sechzig Minuten, live, mit demselben Mentor.' },
      { h3: 'Altersgruppen', p: 'Sechsjährige lernen nicht mit Zwölfjährigen zusammen.' },
      { h3: 'Langsames Englisch', p: 'Kurze Sätze, viel Zeigen, Wiederholen ohne Ungeduld.' },
      { h3: 'Erst Papier, dann Bildschirm', p: 'Rätsel auf dem Tisch, bevor Blöcke gesteckt werden.' },
      { h3: 'Rückmeldung an Sie', p: 'Nach den Stunden ein kurzer Bericht für die Eltern.' },
      { h3: 'Ohne Vertrag', p: 'Monatlich zahlbar und jederzeit kündbar.' }
    ]
  },

  projectsH2: 'Was Kinder bei uns bauen',
  projectsLede: 'Irgendwann fährt nicht mehr ein Roboter über Kacheln, sondern eine eigene Spielfigur durch ein eigenes Level. Einige Arbeiten unserer Lernenden sehen Sie unten; mehr davon zeigt die Seite <a class="ag-inline-link" href="/student-labs">Student labs</a> (auf Englisch).',
  reviewsLede: 'Bewertungen von Eltern auf Google, im englischen Original belassen.',

  fees: {
    h2: 'Kosten des Programmierkurses für Kinder',
    lede: 'Acht Live-Stunden im Monat, ein Beitrag. Der Euro-Wert, den Sie hier lesen, entsteht aus dem Referenzkurs, den die EZB täglich festsetzt; bezahlt wird jedoch in US-Dollar. Weil Ihr Kreditinstitut dabei selbst umtauscht, landet auf der Abrechnung unter Umständen eine etwas andere Summe.',
    free: ['Kostenlose Probestunde mit einem Mentor', 'Einschätzung, welcher Kurs zum Alter passt', 'Keine Zahlungsdaten nötig'],
    group: ['Fünfzehn bis zwanzig Kinder in einer Altersgruppe', 'Derselbe Mentor jede Woche', 'Zwei Live-Stunden pro Woche', 'Monat für Monat kündbar'],
    one: ['Nur Ihr Kind und der Mentor', 'Tempo und Projekte nach Wunsch', 'Termine nach Absprache']
  },

  faq: {
    eyebrow: 'Was Eltern fragen',
    h2: 'Programmierkurs für Kinder online: Fragen und Antworten',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein. Wir sprechen im Kurs Englisch, von der ersten bis zur letzten Minute, und alles ist live. Für viele Familien ist das ein doppelter Gewinn: Ihr Kind lernt programmieren und hört dabei jede Woche eine Stunde lang Englisch. Die Mentoren sprechen langsam, zeigen viel am Bildschirm und stellen sich auf Tempo und Aussprache Ihres Kindes ein.' },
      { q: 'Ab welchem Alter ist ein Programmierkurs sinnvoll?', a: 'Ab sechs Jahren, wenn der Kurs mit Denkspielen und Bildern beginnt statt mit Text. Mit sieben oder acht Jahren kommen Blöcke in Scratch dazu, ab etwa zehn Jahren getippter Code in Python. Entscheidend ist weniger das Alter als die Freude am Knobeln.' },
      { q: 'Kann mein Kind schon mitmachen, wenn es noch nicht gut liest?', a: 'Ja. Für Sechs- und Siebenjährige arbeiten wir mit Pfeilen, Farben und Figuren; Lesen ist am Anfang kaum nötig. Englische Wörter lernen die Kinder nebenbei, weil der Mentor sie immer wieder zeigt und ausspricht.' },
      { q: 'Lernen Kinder das Programmieren nicht ohnehin in der Grundschule?', a: 'In der Regel nicht als eigenes Fach. Die Kultusministerkonferenz schreibt in ihrem Eckpunktepapier vom 28. November 2024, dass ein Unterrichtsfach Informatik in der Grundschule derzeit nicht vorgesehen ist. Informatische Bildung soll dort fächerübergreifend stattfinden, je nach Schule mehr oder weniger.' },
      { q: 'Welche Technik brauchen wir zu Hause?', a: 'Einen Laptop oder Computer mit Kamera, Mikrofon und stabilem Internet, dazu am besten Kopfhörer. Ein Tablet reicht für den Einstieg mit Scratch, für Python braucht Ihr Kind eine Tastatur. Installieren müssen Sie nichts, beides läuft im Browser.' },
      { q: 'Muss ich als Elternteil dabeisitzen?', a: 'In der Probestunde und bei sehr jungen Kindern ist es schön, wenn Sie in der Nähe sind. Ab etwa acht Jahren arbeiten die meisten Kinder allein mit dem Mentor, und Sie lesen hinterher, was dran war.' },
      { q: 'Wann finden die Stunden statt?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. Gebucht wird in deutscher Zeit.' },
      { q: 'Wie groß sind die Gruppen?', a: 'Eine Gruppe hat fünfzehn bis zwanzig Kinder ähnlichen Alters. Wer lieber allein lernt, etwa weil das Kind schüchtern ist oder schon weiter, wählt den Einzelunterricht mit eigenem Tempo und eigenen Projekten.' },
      { q: 'Wie hoch ist der Beitrag, und in welcher Währung zahlen wir?', a: 'Es gibt einen Monatsbeitrag, den diese Seite in Euro zum Referenzkurs der Europäischen Zentralbank zeigt. Abgerechnet wird in US-Dollar, Ihre Bank rechnet in Euro um. Die erste Stunde ist kostenlos, und Sie können monatlich kündigen.' },
      { q: 'Bekommt mein Kind ein Zeugnis oder eine Note?', a: 'Nein. Wir vergeben keine Schulnoten und keine anerkannten Abschlüsse. Was Ihr Kind mitnimmt, sind eigene Projekte und die Fähigkeit, einen Fehler selbst zu finden. Für die Schule zählt weiterhin allein der Unterricht dort.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weitere Seiten',
    h2: 'Mehr für Familien in Deutschland',
    lede: 'Ausgewählte Seiten, die meisten davon auf Englisch.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Der Startpunkt aller Seiten zu Deutschland.' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding classes for kids in Berlin', p: 'Für Kinder in Berlin, wo die Grundschule sechs Jahre dauert.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Wenn ab Klasse 5 Informatik auf dem Stundenplan steht.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'Ab wann jedes Bundesland Informatik unterrichtet.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Wie unser Live-Unterricht aufgebaut ist.' },
      { href: '/courses', label: 'All courses', p: 'Sämtliche Lehrpläne auf einen Blick.' }
    ]
  },

  start: {
    h2: 'Zum Ausprobieren: die erste Stunde gratis',
    lede: 'Beim ersten Termin lernt Ihr Kind den Mentor kennen, löst ein kleines Rätsel und baut vielleicht schon den ersten Block zusammen. Danach sagen wir Ihnen ehrlich, ob eine Gruppe oder Einzelunterricht besser passt und mit welchem Kurs Ihr Kind starten sollte.',
    readFirst: 'Wer vorher lesen möchte: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> zeigt, wie wir unterrichten, und <a class="ag-inline-link" href="/courses">All courses</a> listet alle Kurse (beide Seiten auf Englisch).',
    note: 'Alle Stunden finden live online statt, mit Mentoren in Indien und ausschließlich auf Englisch. Schreiben Sie uns gern per WhatsApp, auf Englisch oder kurz auf Deutsch.',
    formNote: 'Kostenlos und unverbindlich, ohne Zahlungsdaten.'
  },

  footer: {
    cols: [
      { h4: 'Für Kinder', links: [
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Coding für Kinder' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python für Kinder' },
        { href: '/courses/reasoning-and-readiness-course-for-young-thinkers', label: 'Denken lernen' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-for-kids-berlin', label: 'Kinder in Berlin' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Erst raten, dann laufen'
  },

  personalityCss: `
.ag-root.ag-prk .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-prk .ag-capsule { border-left-width: 5px; }
.ag-root.ag-prk .ag-steps li strong { font-weight: 700; }
.ag-root.ag-prk .ag-table caption { text-align: left; }
.ag-root.ag-prk .ag-section-head h2 { max-width: 30ch; }
`,

  dossier: {
    curriculumAuthority: 'KMK Primarbereich page and Eckpunktepapier Medienbildung und informatische Bildung in der Grundschule (28.11.2024); KMK Eurydice dossier; mpfs KIM-Studie 2024; BWINF Informatik-Biber pages; Einheiten- und Zeitgesetz and Sommerzeitverordnung; read 2 and 3 November 2026. Example code our own.',
    localProject: 'The Kachelroboter: an original unplugged-then-Python project for children from about eight. A 3 x 3 tape grid, commands V, R and L, then a Python fahre() that we ran: VVRVV ends on (2, 2) facing O, VVRRVV returns to (0, 0) facing S, RVLVRVLV reaches (2, 2) facing N. Lesson family: turning changes the heading, not the square.',
    requiredMentions: ["fahre('VVRRVV')", '(0, 0, \'S\')', 'Kachelroboter', 'RVLVRVLV', 'In rund acht von zehn Haushalten', '13 Prozent der Kinder', 'vom 18. September bis 7. November 2024', 'Erst raten, dann laufen'],
    sources: [
      { claim: 'No Informatik subject in Grundschule; cross-curricular approach; unplugged concepts recommended.', url: 'https://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/2024/2024_11_28-Medien-inform-Bildung-Grundschule.pdf' },
      { claim: 'Grundschule grades 1 to 4, to 6 in Berlin and Brandenburg.', url: 'https://www.kmk.org/themen/allgemeinbildende-schulen/bildungswege-und-abschluesse/primarbereich.html' },
      { claim: 'KIM-Studie 2024 sample, field dates and device figures.', url: 'https://mpfs.de/app/uploads/2025/05/KIM-Studie-2024.pdf' },
      { claim: 'Informatik-Biber grades 3 to 13, Biberwochen 2026.', url: 'https://bwinf.de/biber/' },
      { claim: 'School start cut-off between 30 June and 30 September.', url: 'https://www.kmk.org/fileadmin/Dateien/pdf/Eurydice/DE/dossier_de_ebook.pdf' }
    ],
    rejectedClaims: [
      'German-language teaching: we teach in English only, and the page says so.',
      'Any accreditation, Bildungsgutschein or Lernförderung: none held, none claimed.',
      'Any claim that children of a given age reach a given school grade through the course: not made.',
      'Chatbots that need an adult account for under-13s: not recommended.'
    ]
  }
};
