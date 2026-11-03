'use strict';
// Scratch-Kurs für Kinder online (ag- German-language door DE062, Germany cluster P3, rows.tsv German doors).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors (based in India) who match the learner's pace and
// accent; the capsule says "auf Englisch". Formal "Sie" throughout. Pages show euro; checkout charges USD.
// Angle: what Scratch is (from the Scratch Foundation's own pages), what a live online Scratch course adds to a free
// tool, how screen-sharing lessons work, and one original project: a three-character dialogue that breaks when it is
// timed with waits and holds when it is coordinated with messages (broadcast).
// Sources (fetched raw with curl -sL -A "Mozilla/5.0" on 3 Nov 2026; quotes grepped in the raw text):
//  scratch.mit.edu/parents strings from the site's public source (github scratchfoundation/scratch-www,
//   src/views/parents/l10n.json; src-pages/scratch-kurs-kinder-online/parents-l10n.json): "Scratch is designed especially
//   for young people ages 8 to 16"; "a simplified version of Scratch designed for ages 5 to 7"; "the Scratch app allows you
//   to create Scratch projects without an internet connection"; "we limit what we collect during the signup process";
//   "with the help of tools such as the {CleanSpeak} profanity filter". (scratch.mit.edu/parents and /faq returned only a
//   JavaScript shell, so the page text was read from its source.)
//  scratch.mit.edu/about (Scratch Foundation page, about.txt): "Scratch was developed at the MIT Media Lab in 2007";
//   "In 2019, Scratch was transferred from MIT to the Scratch Foundation".
//  www.scratchfoundation.org/impact (sf-impact.txt): "used by over 150 million young people in every country";
//   "1+ Billion Scratch projects created"; "1.8 Million new monthly registrations"; "80 languages";
//   "And it’s completely free—for every child, everywhere."
//  BWINF (facts 130, 133): Informatik-Biber "Jahrgangsstufen 3 bis 13"; Biberwochen 2026 9 to 20 November.
//  Time: EinhZeitG para 4, SoZV; summer time 2027 from 28 March.
// Our own: dialog.py (python3 -I, CPython 3.14.8), output printed exactly:
//   [('Katze', 0, 2), ('Hund', 2, 4), ('Papagei', 4, 6)] 0
//   [('Katze', 0, 3), ('Hund', 2, 4), ('Papagei', 4, 6)] 1
//   [('Katze', 0, 3), ('Hund', 3, 5), ('Papagei', 5, 7)] 0
// Lesson family: coordinate a sequence with messages, not with guessed waiting times.

const { DE } = require('../../scripts/nl/lib/market-de');

const WARTEN = [
  'Katze:   when green flag clicked',
  '         say [Hallo, ich bin Mia!] for (2) seconds',
  '',
  'Hund:    when green flag clicked',
  '         wait (2) seconds',
  '         say [Und ich bin Bello.] for (2) seconds',
  '',
  'Papagei: when green flag clicked',
  '         wait (4) seconds',
  '         say [Ich bin Coco!] for (2) seconds'
].join('\n');

const NACHRICHTEN = [
  'Katze:   when green flag clicked',
  '         say [Hallo, ich bin Mia!] for (2) seconds',
  '         broadcast [hund ist dran]',
  '',
  'Hund:    when I receive [hund ist dran]',
  '         say [Und ich bin Bello.] for (2) seconds',
  '         broadcast [papagei ist dran]',
  '',
  'Papagei: when I receive [papagei ist dran]',
  '         say [Ich bin Coco!] for (2) seconds'
].join('\n');

const PY = [
  'def mit_warten(katze, hund, papagei):',
  '    start_hund = 2',
  '    start_papagei = 4',
  "    return [('Katze', 0, katze), ('Hund', start_hund, start_hund + hund),",
  "            ('Papagei', start_papagei, start_papagei + papagei)]",
  '',
  'def mit_nachrichten(katze, hund, papagei):',
  '    ende_katze = katze',
  '    ende_hund = ende_katze + hund',
  "    return [('Katze', 0, ende_katze), ('Hund', ende_katze, ende_hund),",
  "            ('Papagei', ende_hund, ende_hund + papagei)]",
  '',
  'def ueberschneidungen(plan):',
  '    treffer = 0',
  '    for i in range(len(plan) - 1):',
  '        if plan[i + 1][1] < plan[i][2]:',
  '            treffer = treffer + 1',
  '    return treffer',
  '',
  'print(mit_warten(2, 2, 2), ueberschneidungen(mit_warten(2, 2, 2)))',
  'print(mit_warten(3, 2, 2), ueberschneidungen(mit_warten(3, 2, 2)))',
  'print(mit_nachrichten(3, 2, 2), ueberschneidungen(mit_nachrichten(3, 2, 2)))'
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'Scratch-Kurs für Kinder online' },
  slug: 'scratch-kurs-kinder-online',
  code: 'skk',
  accent: '#904651',
  accentRationale: 'Scratch-Kurs für Kinder online: a warm brick rose #904651, close to the colour of the Scratch event blocks but darker for text, apart from the plum and garnet German pages; contrast 5.36 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Scratch-Kurs für Kinder online (auf Englisch)',
  title: 'Scratch-Kurs für Kinder online: live, mit Mentor',
  description: 'Scratch-Kurs für Kinder online, live auf Englisch: was Scratch laut Scratch Foundation ist, was ein Kurs dazugibt und ein Projekt mit Nachrichten statt Warten.',
  ogDescription: 'Scratch ist kostenlos, wozu also ein Kurs? Was die Scratch Foundation über ihr Werkzeug sagt, wie ein Live-Kurs per Bildschirmfreigabe läuft und warum Nachrichten besser sind als Wartezeiten.',
  twitterDescription: 'Scratch-Kurs für Kinder, live auf Englisch: Fakten zu Scratch, Ablauf und ein Dialog-Projekt mit drei Figuren.',
  pageName: 'Scratch-Kurs für Kinder online',
  webPageDescription: 'Ein Leitfaden für Eltern in Deutschland, die einen Scratch-Kurs für ihr Kind suchen: was Scratch nach Angaben der Scratch Foundation ist, für welches Alter es gedacht ist, wie ein Live-Kurs online abläuft und ein eigenes Projekt, in dem drei Figuren über Nachrichten statt über Wartezeiten miteinander sprechen.',
  courseDescription: 'Live-Online-Scratch-Kurse für Kinder von etwa 6 bis 12 Jahren in ganz Deutschland, ausschließlich auf Englisch: Figuren, Bewegung, Schleifen, Bedingungen, Variablen und Nachrichten bis zum eigenen Spiel, in der Gruppe oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Scratch-Kurs',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#scratch', label: 'Was ist Scratch?' },
    { href: '#kurs', label: 'Kurs' },
    { href: '#dialog', label: 'Projekt' },
    { href: '#termine', label: 'Termine' }
  ],
  eyebrow: 'Deutschland &middot; Scratch &middot; Kinder von 6 bis 12',
  h1: 'Scratch-Kurs für Kinder, live online',
  lede: 'Scratch kostet nichts und läuft in jedem Browser. Warum also einen Kurs buchen? Weil die meisten Kinder nach ein paar Wochen an derselben Stelle hängen bleiben: Ihre Figuren tun ungefähr das Richtige, aber nicht genau. Diese Seite erklärt, was Scratch nach Angaben der Scratch Foundation ist, was ein Live-Kurs mit Mentor zusätzlich bringt und wie ein Kind lernt, drei Figuren sauber nacheinander sprechen zu lassen.',
  secondaryCta: { href: '#dialog', label: 'Zum Dialog-Projekt' },
  wa: 'Hallo Modern Age Coders, wir interessieren uns für einen Scratch-Kurs auf Englisch für unser Kind in Deutschland. Können wir eine kostenlose Probestunde machen?',
  heroNote: 'Live-Unterricht seit 2020 &middot; über 10.000 Lernende weltweit &middot; auf Englisch mit festem Mentor',
  spec: [
    ['Werkzeug', 'Scratch im Browser, kostenlos'],
    ['Alter', 'Etwa 6 bis 12, nach Klasse eingestuft'],
    ['Ziel', 'Eigene Spiele und Geschichten'],
    ['Format', 'Live, mit geteiltem Bildschirm'],
    ['Gruppe', 'Fünfzehn bis zwanzig Kinder, oder einzeln'],
    ['Einstieg', 'Kostenlose Probestunde']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Im Scratch-Kurs von Modern Age Coders lernen Kinder zwischen etwa sechs und zwölf, egal wo in Deutschland sie wohnen, live online und auf Englisch. Ihr Kind baut in Scratch Schritt für Schritt eigene Geschichten und Spiele, mit Schleifen, Bedingungen, Variablen und Nachrichten, begleitet von einem festen Mentor, der sich nach dem Tempo und der Aussprache Ihres Kindes richtet. Ihr Kind sitzt mit fünfzehn bis zwanzig anderen in der Klasse oder hat den Mentor für sich allein; der Hauptkurs heißt Scratch Coding for Kids.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Kurse rund um Scratch',
    lede: 'Ein reiner Scratch-Kurs in drei Stufen, ein breiterer Einstieg ins Programmieren, der mit Scratch beginnt, und ein Spielekurs für Kinder, die Scratch schon kennen.',
    items: [
      { course: 'scratch-programming-complete-course', code: 'SKK / 01', title: 'Scratch Coding for Kids', alt: 'Kursbild Scratch Coding for Kids: Zero to Real Games', note: 'Drei Stufen von der ersten bis zur fünften Klasse. Jedes Kind wird nach Klasse und einer kurzen Einstufung eingeteilt und baut von der ersten Figur bis zum eigenen Spiel.' },
      { course: 'kids-coding-blocks-masterclass', code: 'SKK / 02', title: 'Coding for Kids, mit Scratch als Start', alt: 'Kursbild Coding for Kids: Scratch to Games, Apps and AI', note: 'Für 6 bis 12 Jahre, in Altersgruppen. Beginnt mit Scratch und führt dann weiter zu Apps und ersten Ideen aus der künstlichen Intelligenz.' },
      { course: 'game-development-masterclass-for-kids', code: 'SKK / 03', title: 'Spiele entwickeln für Kinder', alt: 'Kursbild Game Development for Kids: Scratch, Roblox and Minecraft', note: 'Für 8 bis 12 Jahre. Für Kinder, die mit Scratch-Spielen anfangen und danach Roblox und Minecraft ausprobieren möchten.' }
    ]
  },

  sections: [
    {
      id: 'scratch',
      eyebrow: 'Das Werkzeug',
      h2: 'Was ist Scratch, und für welches Alter ist es gedacht?',
      lede: 'Scratch ist eine Programmiersprache mit bunten Blöcken, die man zusammensteckt statt tippt. Die Scratch Foundation, eine gemeinnützige Organisation, entwickelt und betreut sie. Die wichtigsten Angaben aus ihren eigenen Seiten:',
      body: [
        { kind: 'table', numCols: [], caption: 'Scratch in Zahlen und Fakten, nach Angaben der Scratch Foundation', head: ['Frage', 'Angabe', 'Seite'], rows: [
          ['Für welches Alter?', 'Vor allem für Kinder und Jugendliche zwischen acht und sechzehn; genutzt wird es aber in jedem Alter', 'scratch.mit.edu, For Parents'],
          ['Und für Jüngere?', 'Für Fünf- bis Siebenjährige empfiehlt die Foundation ScratchJr, eine einfachere Variante', 'scratch.mit.edu, For Parents'],
          ['Woher kommt Scratch?', 'Entwickelt 2007 am MIT Media Lab; 2019 an die gemeinnützige Scratch Foundation übergeben', 'scratch.mit.edu, About'],
          ['Was kostet es?', 'Nichts: "completely free", für jedes Kind', 'scratchfoundation.org, Impact'],
          ['Wie viele nutzen es?', 'Über 150 Millionen junge Menschen in jedem Land; mehr als eine Milliarde Projekte', 'scratchfoundation.org, Impact'],
          ['Wie viele kommen neu dazu?', '1,8 Millionen Neuanmeldungen pro Monat', 'scratchfoundation.org, Impact'],
          ['In wie vielen Sprachen?', '80 Sprachen, darunter Deutsch', 'scratchfoundation.org, Impact'],
          ['Geht es ohne Internet?', 'Ja, mit der Scratch-App, die Projekte ohne Internetverbindung erstellt', 'scratch.mit.edu, For Parents']
        ] },
        { kind: 'source', html: 'Quellen: Scratch Foundation, Seiten "For Parents" und "About" auf scratch.mit.edu sowie "Impact" auf scratchfoundation.org, gelesen am 3. November 2026. Die Elternseite baut ihren Text erst per JavaScript auf; wir haben die Angaben deshalb in der Textdatei nachgelesen, die die Scratch Foundation dafür öffentlich bereitstellt. Wir sind mit der Scratch Foundation nicht verbunden; Scratch ist ein Projekt der Scratch Foundation.' },
        { kind: 'two', mt: true,
          leftH3: 'Sicherheit in der Online-Gemeinschaft',
          left: [
            'Wer ein Konto anlegt, kann Projekte in der Scratch-Gemeinschaft veröffentlichen und kommentieren. Die Scratch Foundation schreibt, dass sie bei der Anmeldung nur begrenzt Daten erhebt und Kontodaten nicht verkauft oder vermietet. Kommentare werden moderiert, unter anderem mit dem Filter CleanSpeak.',
            'Für unseren Kurs braucht Ihr Kind kein öffentliches Profil. Wer lieber gar nichts online teilen möchte, arbeitet mit der Scratch-App ohne Internet oder speichert Projekte als Datei auf dem eigenen Rechner.'
          ],
          rightH3: 'Deutsch oder Englisch auf dem Bildschirm?',
          right: [
            'Scratch gibt es in 80 Sprachen. Die Oberfläche lässt sich mit einem Klick auf die Weltkugel oben links umstellen. Im Unterricht zeigt der Mentor die englischen Blöcke, weil er auf Englisch erklärt.',
            'Manche Kinder lassen ihre eigene Oberfläche trotzdem auf Deutsch. Das geht gut, denn Form und Farbe der Blöcke sind in jeder Sprache gleich: Der orange Block bleibt ein Steuerungsblock, egal ob er repeat oder wiederhole heißt.'
          ] }
      ]
    },
    {
      id: 'kurs',
      eyebrow: 'Werkzeug und Unterricht',
      h2: 'Was bringt ein Scratch-Kurs, wenn Scratch kostenlos ist?',
      lede: 'Scratch ist ein Werkzeug, so wie ein Klavier. Viele Kinder bringen sich die ersten Töne selbst bei. Für das Weiterkommen braucht es meist jemanden, der zuhört, Fehler bemerkt und die nächste Aufgabe kennt.',
      body: [
        { kind: 'table', numCols: [], caption: 'Allein mit Scratch und im Live-Kurs (unsere Gegenüberstellung)', head: ['', 'Allein mit Scratch', 'Im Live-Kurs'], rows: [
          ['Wer sagt, was als Nächstes kommt?', 'Tutorials und Zufall', 'Ein Lehrplan, der Bausteine in sinnvoller Reihenfolge einführt'],
          ['Was passiert bei einem Fehler?', 'Oft Frust, manchmal Aufgeben', 'Der Mentor fragt zurück, bis Ihr Kind die Ursache selbst findet'],
          ['Wie entstehen Projekte?', 'Häufig durch Nachbauen oder Remixen fremder Projekte', 'Aus eigenen Ideen, zuerst auf Papier geplant'],
          ['Wer sieht die Fortschritte?', 'Niemand regelmäßig', 'Mentor und Eltern, mit kurzer Rückmeldung'],
          ['Wann ist es Zeit für Python?', 'Schwer zu sagen', 'Wenn Schleifen, Bedingungen, Variablen und Nachrichten sicher sitzen']
        ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Bildschirm teilen.</strong> Ihr Kind öffnet Scratch im Browser und teilt auf Bitte des Mentors den Bildschirm. So sieht er die Blöcke, ohne dass Ihr Kind etwas hochladen muss.',
          '<strong>Vormachen, nicht vorsagen.</strong> Der Mentor baut einen neuen Baustein auf seinem eigenen Bildschirm vor und erklärt laut. Dann ist Ihr Kind dran, mit seinem eigenen Projekt.',
          '<strong>Fragen statt Lösungen.</strong> Wenn eine Figur nicht tut, was sie soll, fragt der Mentor: Wann startet dieses Skript? Was passiert zuerst? Die Lösung findet Ihr Kind.',
          '<strong>Zeigen und erklären.</strong> Am Ende stellt Ihr Kind vor, was es gebaut hat, und erklärt einen Block in eigenen Worten.',
          '<strong>Weiterbauen erlaubt.</strong> Zwischen den Stunden darf Ihr Kind weiterbasteln. In der nächsten Stunde schaut der Mentor sich die Änderungen gemeinsam mit ihm an.'
        ] },
        { kind: 'p', mt: true, html: 'Wichtig ist uns die Reihenfolge der Bausteine. Kinder, die Variablen kennenlernen, bevor sie Schleifen sicher beherrschen, kopieren meist nur. Deshalb kommen in unserem Kurs zuerst Bewegung und Wiederholung, dann Bedingungen, dann Variablen, und erst danach Nachrichten zwischen Figuren, wie im Projekt unten. Der Informatik-Biber, ein Knobelwettbewerb von BWINF ab der dritten Klasse, dessen Biberwochen 2026 am 9. November beginnen und am 20. November enden, ist ein guter Prüfstein dafür, ob dieses Denken schon ohne Scratch funktioniert.' }
      ]
    },
    {
      id: 'dialog',
      tint: 'tint',
      eyebrow: 'Ein Projekt zum Nachbauen',
      h2: 'Wie lässt ein Kind drei Scratch-Figuren nacheinander sprechen?',
      lede: 'Mit Nachrichten statt mit Wartezeiten. Wir haben dieses Projekt selbst entwickelt; es eignet sich für Kinder, die schon eine Figur sprechen lassen können, meist ab etwa acht Jahren. Es zeigt einen Fehler, den fast jedes Kind einmal macht.',
      body: [
        { kind: 'code', label: 'Version 1: Jede Figur wartet eine geschätzte Zeit', lang: 'Scratch', code: WARTEN, note: 'Drei Figuren, drei Skripte, alle starten mit der grünen Flagge. Der Hund wartet zwei Sekunden, der Papagei vier. Solange jede Figur genau zwei Sekunden spricht, passt alles.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Ausprobieren.</strong> Ihr Kind startet das Programm. Katze, Hund und Papagei stellen sich nacheinander vor. Alles scheint zu funktionieren.',
          '<strong>Etwas ändern.</strong> Die Katze soll mehr sagen, also bekommt sie drei statt zwei Sekunden. Jetzt fällt der Hund ihr ins Wort: Eine Sekunde lang sprechen beide gleichzeitig.',
          '<strong>Den Fehler verstehen.</strong> Der Hund weiß nicht, wann die Katze fertig ist. Er rät nur, und seine Schätzung von zwei Sekunden stimmt nicht mehr.',
          '<strong>Umbauen.</strong> Die Katze sendet am Ende eine Nachricht, auf Englisch broadcast. Der Hund startet erst, wenn er sie empfängt, und sendet selbst eine an den Papagei.',
          '<strong>Wieder ändern.</strong> Jetzt darf die Katze so lange reden, wie sie will. Der Hund wartet immer, bis sie fertig ist.'
        ] },
        { kind: 'code', label: 'Version 2: Die Figuren geben sich Bescheid', lang: 'Scratch', code: NACHRICHTEN, note: 'Nur die Katze startet mit der grünen Flagge. Hund und Papagei starten, wenn sie ihre Nachricht empfangen. Die Nachrichtennamen legt Ihr Kind selbst fest.' },
        { kind: 'code', label: 'Der Zeitplan beider Versionen, in Python nachgerechnet', lang: 'Python', code: PY, note: 'Unser Programm rechnet für jede Figur Start und Ende in Sekunden aus und zählt, wie oft zwei Figuren gleichzeitig sprechen. Ausgeführt ergibt es: <code>[(\'Katze\', 0, 2), (\'Hund\', 2, 4), (\'Papagei\', 4, 6)] 0</code>, dann <code>[(\'Katze\', 0, 3), (\'Hund\', 2, 4), (\'Papagei\', 4, 6)] 1</code>, dann <code>[(\'Katze\', 0, 3), (\'Hund\', 3, 5), (\'Papagei\', 5, 7)] 0</code>.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Wer spricht wann? (Sekunden ab dem Start, unsere Rechnung)', head: ['Fall', 'Katze', 'Hund', 'Papagei', 'Gleichzeitig'], rows: [
          ['Wartezeiten, Katze 2 Sekunden', '0 bis 2', '2 bis 4', '4 bis 6', 'nie'],
          ['Wartezeiten, Katze 3 Sekunden', '0 bis 3', '2 bis 4', '4 bis 6', 'einmal, von Sekunde 2 bis 3'],
          ['Nachrichten, Katze 3 Sekunden', '0 bis 3', '3 bis 5', '5 bis 7', 'nie']
        ] },
        { kind: 'p', mt: true, html: 'Die Erkenntnis reicht weit über Scratch hinaus: Ein Programm, das sich auf geschätzte Zeiten verlässt, geht kaputt, sobald sich irgendwo etwas ändert. Ein Programm, in dem die Teile sich gegenseitig Bescheid geben, bleibt stabil. Mit dem Python-Programm können ältere Kinder prüfen, was passiert, wenn der Hund vier Sekunden spricht: In Version 1 fällt dann der Papagei ihm ins Wort, in Version 2 nicht.' }
      ]
    },
    {
      id: 'termine',
      eyebrow: 'Termine',
      h2: 'Wann finden Scratch-Kurse für Kinder in Deutschland statt?',
      lede: 'Nachmittags nach der Schule oder am Wochenende. Weil die Mentoren in Indien unterrichten, ist es bei ihnen dann später am Tag.',
      body: [
        { kind: 'table', numCols: [], caption: 'Drei mögliche Termine und die Zeit in Indien', head: ['Bei Ihnen', 'Beim Mentor, Winterzeit', 'Beim Mentor, ab Sommerzeit 2027'], rows: [
          ['13:30', '18:00', '17:00'],
          ['17:15', '21:45', '20:45'],
          ['Sonntag 10:30', '15:00', '14:00']
        ] },
        { kind: 'source', html: 'In Deutschland gilt laut Einheiten- und Zeitgesetz die MEZ (UTC+1), in der Sommerzeit die MESZ (UTC+2). Die Sommerzeit 2026 ging am 25. Oktober 2026 zu Ende, ab dem 28. März 2027 gilt wieder MESZ. Indien bleibt das ganze Jahr bei UTC+5:30; der Abstand beträgt deshalb jetzt im Winter viereinhalb Stunden und von Ende März an dreieinhalb. Beispielzeiten, keine festen Gruppentermine.' },
        { kind: 'p', mt: true, html: 'Für Kinder, die mittags aus der Grundschule kommen, ist ein früher Nachmittag oft am besten. Ältere Kinder mit Nachmittagsunterricht wählen eher den späteren Termin oder den Sonntag. Die Buchung erfolgt in deutscher Zeit.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Von der ersten Figur bis zum eigenen Spiel',
    lede: 'So ordnen wir Kinder im Scratch-Kurs ein. Die Stufen sind unsere eigenen und keine Bewertung im schulischen Sinn.',
    table: { caption: 'Sechs Stufen in Scratch (unsere)', head: ['Stufe', 'Baustein', 'Ihr Kind kann'], rows: [
      ['1. Bewegen', 'Bewegungsblöcke', 'eine Figur gehen, drehen und springen lassen'],
      ['2. Wiederholen', 'repeat, forever', 'eine Bewegung mit einer Schleife beliebig oft ablaufen lassen'],
      ['3. Entscheiden', 'if, if else', 'eine Figur auf Berührung, Farbe oder Taste reagieren lassen'],
      ['4. Merken', 'Variablen', 'Punkte, Leben und Level zählen'],
      ['5. Absprechen', 'broadcast, when I receive', 'mehrere Figuren über Nachrichten koordinieren, wie im Dialog-Projekt'],
      ['6. Entwerfen', 'alles zusammen', 'ein eigenes Spiel planen, bauen, testen und anderen erklären']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Stufe 5 ist der Moment, in dem aus Basteln Programmieren wird: Ihr Kind denkt nicht mehr nur an eine Figur, sondern an das Zusammenspiel. Viele Kinder erreichen sie nach einigen Monaten.',
      'Wer Stufe 6 sicher erreicht, ist bereit für Python. Den Übergang begleiten wir mit Projekten, die Ihr Kind aus Scratch schon kennt.'
    ] },
    right: { h3: 'Für Kinder', ps: [
      'Wenn zwei Figuren gleichzeitig reden, obwohl sie es nicht sollen, fragen Sie sich: Woher weiß die zweite Figur, dass die erste fertig ist?',
      'Geben Sie Ihren Nachrichten klare Namen, zum Beispiel "hund ist dran". Dann verstehen Sie Ihr Programm auch noch in einer Woche.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse vor, neben und nach Scratch',
    lede: 'Jeder Kurs läuft live und auf Englisch, mit einem Mentor, der Ihr Kind über Monate begleitet, in der Gruppe oder allein.',
    bands: [
      { num: 'I', h3: 'Vor und neben Scratch', sub: '6 bis 10 Jahre', courses: [
        { code: 'SKK / VOR / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Knobeln für junge Köpfe', blurb: 'Muster und Reihenfolgen, 6 bis 9.' },
        { code: 'SKK / VOR / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Informatisches Denken', blurb: 'Zerlegen und verallgemeinern, Klasse 3 bis 8.' },
        { code: 'SKK / VOR / 03', slug: 'mental-maths-mastery-kids', title: 'Kopfrechnen verstehen', blurb: 'Zahlgefühl für 5 bis 10.' }
      ] },
      { num: 'II', h3: 'Nach Scratch', sub: '9 bis 12 Jahre', courses: [
        { code: 'SKK / NACH / 01', slug: 'python-ai-kids-masterclass', title: 'Python und KI für Kinder', blurb: 'Der Schritt vom Block zum Text.' },
        { code: 'SKK / NACH / 02', slug: 'kids-ai-web-development-course', title: 'Webentwicklung für Kinder', blurb: 'Eigene Webseiten, 9 bis 12.' },
        { code: 'SKK / NACH / 03', slug: 'cpp-programming-for-kids-course', title: 'C++ für Kinder', blurb: 'Erster Textcode mit Rätseln, 9 bis 12.' }
      ] },
      { num: 'III', h3: 'Spielwelten und Wettbewerbe', sub: '7 bis 14 Jahre', courses: [
        { code: 'SKK / WELT / 01', slug: 'minecraft-coding-for-kids-course', title: 'Programmieren in Minecraft', blurb: 'Blöcke in der Klötzchenwelt, 7 bis 12.' },
        { code: 'SKK / WELT / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox mit Luau', blurb: 'Eigene Spiele für 8 bis 14.' },
        { code: 'SKK / WELT / 03', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatik-Biber und mehr', blurb: 'Knobelaufgaben ab Klasse 3.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'So geht es',
    h2: 'Wie der Scratch-Kurs organisiert ist',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Früh am Nachmittag', l: 'Für Grundschulkinder, die mittags heimkommen.' },
      { time: 'Sonntagvormittag', l: 'Wenn die Woche voll ist.' },
      { time: 'Einzeltermin', l: 'Nach Absprache mit dem Mentor.' }
    ],
    cells: [
      { h3: 'Live mit Bildschirmfreigabe', p: 'Der Mentor sieht die Blöcke Ihres Kindes in Echtzeit.' },
      { h3: 'Fester Mentor', p: 'Eine Person, die jedes Projekt Ihres Kindes kennt.' },
      { h3: 'Englische Blöcke', p: 'Gezeigt auf Englisch, die eigene Ansicht darf deutsch sein.' },
      { h3: 'Ohne öffentliches Profil', p: 'Ein Konto in der Scratch-Gemeinschaft ist nicht nötig.' },
      { h3: 'Zwei Stunden pro Woche', p: 'Live und jeweils sechzig Minuten lang.' },
      { h3: 'Rückmeldung', p: 'Eltern erfahren, was gebaut und gelernt wurde.' }
    ]
  },

  projectsH2: 'Scratch-Projekte und mehr',
  projectsLede: 'Was als Dialog zwischen drei Figuren beginnt, wird später ein ganzes Spiel. Einige Arbeiten unserer Lernenden zeigen wir unten; weitere finden Sie unter <a class="ag-inline-link" href="/student-labs">Student labs</a> (auf Englisch).',
  reviewsLede: 'Google-Bewertungen von Familien, so wie sie auf Englisch verfasst wurden.',

  fees: {
    h2: 'Was der Scratch-Kurs kostet',
    lede: 'Pro Monat fällt ein Beitrag an, der acht Live-Stunden umfasst. Wir zeigen ihn in Euro, gerechnet zum Referenzkurs der Europäischen Zentralbank. Die eigentliche Zahlung läuft in US-Dollar, Ihre Bank rechnet sie in Euro um, und deshalb kann der Betrag auf Ihrer Abrechnung um ein paar Cent oder etwas mehr abweichen.',
    free: ['Kostenlose Probestunde', 'Einstufung nach Klasse und Vorwissen', 'Keine Karte erforderlich'],
    group: ['Fünfzehn bis zwanzig Kinder', 'Derselbe Mentor über Monate', 'Zwei Live-Stunden wöchentlich', 'Monatlich kündbar'],
    one: ['Einzelunterricht nur für Ihr Kind', 'Projekte nach seinen Ideen', 'Freie Terminwahl']
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    h2: 'Scratch-Kurs für Kinder online: Ihre Fragen',
    items: [
      { q: 'Ab welchem Alter ist ein Scratch-Kurs sinnvoll?', a: 'Laut Scratch Foundation zielt Scratch vor allem auf Acht- bis Sechzehnjährige, während Kinder im Vorschul- und frühen Grundschulalter mit ScratchJr starten können. In unserem Kurs beginnen manche Kinder schon in Klasse 1 mit einfachen Projekten, die meisten steigen mit sieben oder acht Jahren ein.' },
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein. Unterrichtssprache ist Englisch, ohne Ausnahme, und jede Stunde ist live. Darin steckt ein Vorteil: Ihr Kind übt nebenbei eine zweite Sprache, und Blöcke wie repeat, if oder broadcast versteht es dann auch ohne Übersetzung. Langsam und deutlich zu sprechen und auf die Aussprache Ihres Kindes einzugehen, gehört für die Mentoren dazu.' },
      { q: 'Scratch ist doch kostenlos. Warum einen Kurs bezahlen?', a: 'Scratch selbst ist kostenlos, und das bleibt es auch. Sie bezahlen für einen Menschen, der Ihr Kind jede Woche begleitet, Fehler nicht wegmacht, sondern gemeinsam findet, und die Bausteine in einer sinnvollen Reihenfolge einführt.' },
      { q: 'Braucht mein Kind ein Scratch-Konto?', a: 'Für den Kurs nicht. Projekte lassen sich im Browser bearbeiten und als Datei speichern, oder ohne Internet in der Scratch-App. Wenn Sie später ein Konto möchten, um Projekte zu teilen, lesen Sie am besten gemeinsam mit Ihrem Kind die Gemeinschaftsregeln der Scratch Foundation.' },
      { q: 'Kann mein Kind Scratch auf Deutsch benutzen?', a: 'Ja, Scratch gibt es laut Scratch Foundation in 80 Sprachen. Der Mentor erklärt mit der englischen Oberfläche, Ihr Kind darf seine eigene aber auf Deutsch lassen. Form und Farbe der Blöcke sind in allen Sprachen gleich.' },
      { q: 'Läuft Scratch auf dem Tablet?', a: 'Scratch läuft im Browser und als App, auch auf vielen Tablets. Für den Kurs empfehlen wir trotzdem einen Laptop oder Computer, weil Ihr Kind dort leichter Blöcke zieht, den Bildschirm teilt und die Kamera nutzt.' },
      { q: 'Zu welchen Zeiten läuft der Scratch-Kurs?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. Sie buchen in deutscher Zeit.' },
      { q: 'Wie lange dauert es, bis mein Kind ein eigenes Spiel baut?', a: 'Ein kleines Fangspiel mit Punkten schaffen viele Kinder nach etwa zwei Monaten. Ein Spiel aus eigener Idee mit mehreren Figuren, Levels und Nachrichten dauert meist ein halbes Jahr oder länger. Wir versprechen kein festes Tempo, weil jedes Kind anders lernt.' },
      { q: 'Was kostet der Scratch-Kurs, und in welcher Währung wird bezahlt?', a: 'Den Monatsbeitrag zeigt diese Seite in Euro; als Grundlage dient der Euro-Referenzkurs der EZB. Abgebucht wird in US-Dollar, den Umtausch erledigt Ihre Bank. Die Probestunde ist kostenlos.' },
      { q: 'Wie geht es nach Scratch weiter?', a: 'Meist mit Python, sobald Ihr Kind Schleifen, Bedingungen, Variablen und Nachrichten sicher einsetzt und gern tippt. Wer lieber bei Spielen bleibt, wechselt zu Roblox oder Minecraft. Den nächsten Schritt besprechen wir mit Ihnen.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weiterlesen',
    h2: 'Weitere Seiten für Familien',
    lede: 'Einige verwandte Seiten, überwiegend auf Englisch.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Alles für Familien in Deutschland.' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin', p: 'Programmieren für Berliner Kinder.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Wenn in Klasse 5 das Fach Informatik beginnt.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'Informatik in den 16 Ländern.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Unsere Art zu unterrichten.' },
      { href: '/student-labs', label: 'Student labs', p: 'Projekte unserer Lernenden.' }
    ]
  },

  start: {
    h2: 'Kostenlose Scratch-Probestunde',
    lede: 'In der Probestunde öffnet Ihr Kind Scratch, lässt eine Figur laufen und sprechen und lernt dabei den Mentor kennen. Hat es Scratch schon benutzt, zeigt es gern ein eigenes Projekt. Danach schlagen wir die passende Stufe und Gruppe vor.',
    readFirst: 'Mehr zum Lesen: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> und <a class="ag-inline-link" href="/courses">All courses</a> (auf Englisch).',
    note: 'Jede Stunde findet live statt; die Mentoren unterrichten aus Indien, und zwar ausschließlich auf Englisch. Die schnellste Antwort bekommen Sie per WhatsApp.',
    formNote: 'Ohne Kosten, ohne Karte, ohne Verpflichtung.'
  },

  footer: {
    cols: [
      { h4: 'Scratch und mehr', links: [
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch Coding for Kids' },
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Coding for Kids' },
        { href: '/courses/game-development-masterclass-for-kids', label: 'Spiele entwickeln' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/coding-classes-for-kids-berlin', label: 'Kinder in Berlin' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Bescheid geben statt raten'
  },

  personalityCss: `
.ag-root.ag-skk .ag-hero h1 { letter-spacing: -0.011em; }
.ag-root.ag-skk .ag-capsule { border-left-width: 6px; }
.ag-root.ag-skk .ag-code-head b { font-weight: 700; }
.ag-root.ag-skk .ag-table caption { text-align: left; }
.ag-root.ag-skk .ag-section-head h2 { max-width: 29ch; }
`,

  dossier: {
    curriculumAuthority: 'Scratch Foundation: scratch.mit.edu For Parents (text from the scratch-www source) and About, scratchfoundation.org Impact; BWINF Informatik-Biber pages; Einheiten- und Zeitgesetz; read 2 and 3 November 2026. Example code our own.',
    localProject: 'Three Scratch characters introduce themselves: an original project in which the timing-by-waits version breaks as soon as the cat speaks 3 seconds instead of 2 and the broadcast version holds; a Python timeline we ran prints 0 overlaps, then 1, then 0. Lesson family: coordinate a sequence with messages, not guessed waiting times.',
    requiredMentions: ['broadcast [hund ist dran]', 'when I receive [papagei ist dran]', "('Hund', 3, 5)", 'einmal, von Sekunde 2 bis 3', '1,8 Millionen Neuanmeldungen pro Monat', 'Entwickelt 2007 am MIT Media Lab', 'mit dem Filter CleanSpeak', 'Bescheid geben statt raten'],
    sources: [
      { claim: 'Ages 8 to 16, ScratchJr 5 to 7, offline app, limited data collection, CleanSpeak.', url: 'https://scratch.mit.edu/parents/' },
      { claim: 'Text source for the parents page.', url: 'https://raw.githubusercontent.com/scratchfoundation/scratch-www/develop/src/views/parents/l10n.json' },
      { claim: 'MIT Media Lab 2007; transfer to the Scratch Foundation 2019.', url: 'https://scratch.mit.edu/about' },
      { claim: '150 million young people, 1 billion projects, 1.8 million monthly registrations, 80 languages, free.', url: 'https://www.scratchfoundation.org/impact' },
      { claim: 'Informatik-Biber grades 3 to 13 and 2026 dates.', url: 'https://bwinf.de/biber/' }
    ],
    rejectedClaims: [
      'German-language teaching: we teach in English only, and the page says so.',
      'Any affiliation with or endorsement by the Scratch Foundation: none, and the page says so.',
      'Scratch account age rules: the FAQ page returned only a JavaScript shell, so no account age is stated.',
      'A fixed time to the first own game: not promised.'
    ]
  }
};
