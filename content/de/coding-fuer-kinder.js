'use strict';
// Coding für Kinder (ag- German-language door DE054, Germany cluster P3, rows.tsv German doors).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; writer brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live, in English only, with mentors (based in India) who match the learner's pace and
// accent; the capsule says "auf Englisch". Formal "Sie" throughout. Pages show euro; checkout charges USD.
// Angle: what "Coding" means for a child of 6 to 12 and why it matters now: children in Germany are online earlier and
// mostly consume (KIM-Studie 2024), while the KMK wants them to help shape the digital world (Eckpunktepapier 2024).
// Coding is the step from using to making. One original project: a secret code (Caesar shift) on paper, then Python,
// including what German letters (Ü, ß) do to it.
// Sources (fetched raw with curl -sL -A "Mozilla/5.0"; quotes grepped in the raw text, hyphenation joined):
//  mpfs KIM-Studie 2024 landing page https://mpfs.de/studie/kim-studie-2024/ (src-pages/coding-fuer-kinder/kim.txt):
//   "54 Prozent der Kinder, die online sind, nutzen das Internet täglich – ein Anstieg um sieben Prozentpunkte";
//   "von 23 Prozent auf 40 Prozent" (online 8- to 9-year-olds, daily use); "Knapp die Hälfte der Kinder (46 %)";
//   "77 Prozent der Kinder mit eigenem Gerät geben an, ihr Handy grundsätzlich in die Schule mitbringen zu dürfen".
//  KIM-Studie 2024 PDF https://mpfs.de/app/uploads/2025/05/KIM-Studie-2024.pdf (KIM-Studie-2024.txt, PDFKit):
//   "1.225 Kinder im Alter von sechs bis 13 Jahren"; "Lernprogramme oder -quizze (33 %)"; "Bei einem Großteil der
//   Kinder (72 %) werden KI-Anwendungen dagegen nie genutzt" (base n=857 school children using devices at school);
//   "Vier Fünftel der Kinder wenden zuhause dagegen nie KI für die Schule an (81 %)" (base n=1.155).
//  KMK Eckpunktepapier, Beschluss vom 28.11.2024 (facts-school/src/kmk-medien-gs/bee9df08.txt):
//   "Mindestens genauso bedeutsam ist es, dass Kinder lernen, die digital geprägte Welt mitzugestalten";
//   footnote 4: "als kompetente Anwenderinnen und Anwender aber auch als Gestalterinnen und Gestalter an der digitalen
//   Welt teilzuhaben"; "Ein Unterrichtsfach Informatik in der Grundschule ist derzeit nicht vorgesehen."
//  BWINF (fact 132): "Grundschülerinnen und Grundschüler lösen neun Aufgaben in 30 Minuten"; Biberwochen 2026 9 to 20 Nov.
//  Time: EinhZeitG para 4, SoZV; summer time 2027 from 28 March.
// Our own: Geheimschrift in Python (python3 -I, CPython 3.14.8), output printed exactly:
//   WUHIISXQNW DP EDXPKDXV / TREFFPUNKT AM BAUMHAUS / JUÜVVH DXV NÖOQ
// Lesson family: a code and its key; decoding is the same rule run backwards.

const { DE } = require('../../scripts/nl/lib/market-de');

const PY = [
  "ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'",
  '',
  'def verschiebe(text, schluessel):',
  "    ergebnis = ''",
  '    for zeichen in text.upper():',
  '        if zeichen in ALPHABET:',
  '            stelle = (ALPHABET.index(zeichen) + schluessel) % 26',
  '            ergebnis = ergebnis + ALPHABET[stelle]',
  '        else:',
  '            ergebnis = ergebnis + zeichen',
  '    return ergebnis',
  '',
  "geheim = verschiebe('Treffpunkt am Baumhaus', 3)",
  'print(geheim)',
  'print(verschiebe(geheim, -3))',
  "print(verschiebe('Grüße aus Köln', 3))"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'Coding für Kinder' },
  slug: 'coding-fuer-kinder',
  code: 'kin',
  accent: '#714A5E',
  accentRationale: 'Coding für Kinder: a muted plum #714A5E, the ink of a secret-code notebook, distinct from the garnet of the Programmierkurs page; contrast 5.99 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Germany' }],
  routeLabel: 'Coding für Kinder (Unterricht auf Englisch)',
  title: 'Coding für Kinder: was es ist und wie Kinder es lernen',
  description: 'Coding für Kinder von 6 bis 12: was dahintersteckt, warum es mehr ist als Bildschirmzeit, und wie Ihr Kind es live auf Englisch lernt. Mit Geheimschrift.',
  ogDescription: 'Was Coding für Kinder bedeutet, was die KIM-Studie 2024 über das digitale Leben von Kindern in Deutschland zeigt, und eine Geheimschrift zum Selbstprogrammieren. Unterricht live auf Englisch.',
  twitterDescription: 'Coding für Kinder: vom Nutzen zum Gestalten, mit Zahlen der KIM-Studie 2024 und einer Geheimschrift in Python.',
  pageName: 'Coding für Kinder',
  webPageDescription: 'Ein Leitfaden für Eltern in Deutschland: was Coding für Kinder von 6 bis 12 Jahren bedeutet, wie Kinder laut KIM-Studie 2024 digitale Medien nutzen, was die Kultusministerkonferenz 2024 für die Grundschule vorsieht, und ein eigenes Projekt mit einer Geheimschrift auf Papier und in Python.',
  courseDescription: 'Live-Online-Kurse in Coding für Kinder von 6 bis 12 Jahren in ganz Deutschland, ausschließlich auf Englisch: Rätsel ohne Bildschirm, Scratch, erste Programme in Python und Grundwissen über künstliche Intelligenz, in der Gruppe oder einzeln.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'Coding für Kinder',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#was', label: 'Was ist Coding?' },
    { href: '#alltag', label: 'Alltag' },
    { href: '#geheimschrift', label: 'Geheimschrift' },
    { href: '#weg', label: 'Lernweg' }
  ],
  eyebrow: 'Deutschland &middot; Coding &middot; Kinder von 6 bis 12',
  h1: 'Coding für Kinder, live auf Englisch',
  lede: 'Kinder in Deutschland sind früh online, aber meistens als Publikum. Coding dreht das um: Ihr Kind sagt dem Computer, was er tun soll, statt nur anzuschauen, was andere gemacht haben. Diese Seite erklärt, was Coding für Kinder genau ist, was die KIM-Studie 2024 über den digitalen Alltag von Sechs- bis Dreizehnjährigen zeigt und wie Ihr Kind eine eigene Geheimschrift programmiert.',
  secondaryCta: { href: '#geheimschrift', label: 'Geheimschrift ausprobieren' },
  wa: 'Hallo Modern Age Coders, unser Kind (6 bis 12 Jahre) möchte Coding lernen, gern auf Englisch. Können wir eine kostenlose Probestunde ausmachen?',
  heroNote: 'Unterricht seit 2020 &middot; 4,9 Sterne bei rund 547 Google-Bewertungen &middot; live und auf Englisch',
  spec: [
    ['Für wen', 'Kinder von 6 bis 12 Jahren'],
    ['Womit', 'Papier, Scratch, Python'],
    ['Wie', 'Live-Unterricht per Video'],
    ['Sprache', 'Englisch, langsam und deutlich'],
    ['Gruppengröße', 'Fünfzehn bis zwanzig oder eins zu eins'],
    ['Einstieg', 'Kostenlose Probestunde']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Coding für Kinder heißt: Kinder geben einem Computer Schritt für Schritt Anweisungen, zuerst mit Bildkarten und Blöcken, später mit getipptem Code. Modern Age Coders bringt es Sechs- bis Zwölfjährigen überall in Deutschland live online bei, auf Englisch und mit einem festen Mentor, der Tempo und Aussprache an Ihr Kind anpasst; Ihr Kind lernt allein mit ihm oder mit fünfzehn bis zwanzig Gleichaltrigen. Der Hauptkurs heißt Coding for Kids und führt von Scratch zu eigenen Spielen.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Kurse für den Einstieg ins Coding',
    lede: 'Ein Kurs zum Bauen, einer zum Denken, einer zum Verstehen künstlicher Intelligenz. Die meisten Kinder beginnen mit dem ersten.',
    items: [
      { course: 'kids-coding-blocks-masterclass', code: 'KIN / 01', title: 'Coding for Kids', alt: 'Kursbild Coding for Kids: Scratch to Games, Apps and AI', note: 'Für 6 bis 12 Jahre, in Altersgruppen. Der Weg vom ersten Block bis zum eigenen Spiel, mit Schleifen, Bedingungen und Variablen an echten Projekten.' },
      { course: 'problem-solving-and-computational-thinking-for-kids', code: 'KIN / 02', title: 'Probleme lösen wie Informatiker', alt: 'Kursbild Problem Solving and Computational Thinking for Kids', note: 'Etwa Klasse 3 bis 8. Große Aufgaben in kleine zerlegen, Muster finden, Regeln aufstellen, oft ohne Computer und immer mit Begründung.' },
      { course: 'ai-literacy-for-kids-course', code: 'KIN / 03', title: 'KI verstehen für Kinder', alt: 'Kursbild AI Literacy for Kids', note: 'Für 8 bis 14 Jahre, ohne Vorwissen. Wie künstliche Intelligenz lernt, warum sie sich irrt und wie man ihre Antworten prüft, statt sie einfach zu übernehmen.' }
    ]
  },

  sections: [
    {
      id: 'was',
      eyebrow: 'Begriffe',
      h2: 'Was ist Coding für Kinder überhaupt?',
      lede: 'Coding ist das englische Wort für Programmieren, und im Alltag meinen beide dasselbe: einem Computer eine genaue Folge von Anweisungen geben. Bei Kindern beginnt das lange vor der ersten Zeile Code.',
      body: [
        { kind: 'table', numCols: [], caption: 'Drei Wörter, die Eltern oft hören, und was sie für ein Kind von 6 bis 12 bedeuten (unsere Erklärung)', head: ['Begriff', 'Was gemeint ist', 'So sieht es bei Kindern aus'], rows: [
          ['Coding', 'Anweisungen für einen Computer schreiben', 'Blöcke in Scratch zusammenstecken oder ein paar Zeilen Python tippen'],
          ['Programmieren', 'Dasselbe, auf Deutsch; oft für größere Vorhaben gebraucht', 'Ein kleines Spiel planen, bauen, testen und verbessern'],
          ['Informatik', 'Die Wissenschaft dahinter: Daten, Algorithmen, Netze', 'Verstehen, warum ein Rezept ein Algorithmus ist oder wie eine Nachricht verschlüsselt wird'],
          ['Unplugged', 'Informatik ohne Gerät', 'Pfeilkarten legen, Geheimschriften auf Papier knacken, Sortierspiele mit Spielkarten']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Was Kinder dabei wirklich lernen',
          left: [
            'Beim Coding lernt ein Kind vor allem, genau zu sein. Ein Computer rät nicht, was gemeint war. Wer ihm sagt "geh nach vorn", ohne zu sagen wie weit, bekommt eine Figur, die stehen bleibt oder aus dem Bild läuft.',
            'Daraus wachsen drei Gewohnheiten, die auch in Mathematik und beim Schreiben helfen: eine große Aufgabe in kleine Schritte zerlegen, Wiederholungen erkennen und einen Fehler suchen, statt aufzugeben.'
          ],
          rightH3: 'Was Coding nicht ist',
          right: [
            'Coding ist kein Tippkurs und kein Computerspielen mit Lernetikett. Eine gute Stunde besteht zu einem großen Teil aus Nachdenken, Ausprobieren und Erklären, und zu einem kleineren aus Klicken.',
            'Es ist auch nicht das Bedienen fertiger Apps. Ein Kind, das ein Lernspiel durchspielt, nutzt Software. Ein Kind, das selbst eines baut, versteht, wie Software entsteht.'
          ] }
      ]
    },
    {
      id: 'alltag',
      eyebrow: 'Digitaler Alltag',
      h2: 'Wie digital ist der Alltag von Kindern in Deutschland?',
      lede: 'Sehr, und er wird es immer früher. Für die KIM-Studie 2024 des Medienpädagogischen Forschungsverbunds Südwest wurden 1.225 Sechs- bis Dreizehnjährige samt einem Elternteil interviewt. Die Zahlen zeigen viel Nutzung und wenig Gestalten.',
      body: [
        { kind: 'table', numCols: [], caption: 'Digitale Mediennutzung von Kindern in Deutschland, KIM-Studie 2024', head: ['Befund', 'Wert', 'Bezugsgruppe'], rows: [
          ['Nutzen das Internet täglich', '54 Prozent, sieben Prozentpunkte mehr als 2022', 'Kinder, die online sind'],
          ['Tägliche Nutzung bei Acht- und Neunjährigen', 'Von 23 auf 40 Prozent in zwei Jahren', 'Online aktive Acht- bis Neunjährige'],
          ['Haben ein eigenes Smartphone', '46 Prozent', 'Alle befragten Kinder'],
          ['Dürfen das Handy grundsätzlich mit in die Schule bringen', '77 Prozent', 'Kinder mit eigenem Gerät'],
          ['Nutzen in der Schule mindestens wöchentlich Lernprogramme oder Quizze', '33 Prozent', 'Schulkinder, die dort digitale Geräte nutzen'],
          ['Nutzen KI-Anwendungen im Unterricht nie', '72 Prozent', 'Schulkinder, die dort digitale Geräte nutzen'],
          ['Nutzen KI zu Hause für die Schule nie', '81 Prozent', 'Alle Schulkinder']
        ] },
        { kind: 'source', html: 'Quelle: Medienpädagogischer Forschungsverbund Südwest (mpfs), KIM-Studie 2024 "Kindheit, Internet, Medien", Studienseite und Bericht, gelesen am 3. November 2026. Persönliche Interviews im Herbst 2024, Kinder und jeweils die wichtigste Erziehungsperson.' },
        { kind: 'two', mt: true,
          leftH3: 'Viel Zuschauen, wenig Bauen',
          left: [
            'Wer täglich online ist, sieht Videos, spielt und chattet. Nichts davon ist schlecht, aber fast alles davon ist Konsum: Andere haben das Programm geschrieben, das Kind benutzt es.',
            'Die Kultusministerkonferenz setzt in ihrem Grundschulpapier, beschlossen Ende November 2024, einen anderen Akzent. Mindestens genauso bedeutsam wie der Umgang mit Medien sei es, "dass Kinder lernen, die digital geprägte Welt mitzugestalten". Informatische Bildung soll Kinder befähigen, nicht nur als Anwender, sondern auch "als Gestalterinnen und Gestalter an der digitalen Welt teilzuhaben".'
          ],
          rightH3: 'Und die Schule?',
          right: [
            'Ein eigenes Fach gibt es dafür in der Grundschule nicht, und das ist Absicht: Dasselbe Papier sieht Informatik dort ausdrücklich nicht als eigenes Schulfach vor, sondern verteilt auf alle Fächer. Ob ein Kind vor Klasse 5 programmiert, hängt deshalb stark von der Schule und von zu Hause ab.',
            'Bei künstlicher Intelligenz ist die Lücke noch größer: Laut KIM-Studie 2024 kommen KI-Anwendungen bei 72 Prozent der Schulkinder, die im Unterricht Geräte nutzen, dort nie vor. Gerade deshalb lohnt es sich, dass Kinder zuerst verstehen, wie ein Programm Schritt für Schritt arbeitet.'
          ] }
      ]
    },
    {
      id: 'geheimschrift',
      tint: 'tint',
      eyebrow: 'Ein Projekt zum Mitmachen',
      h2: 'Wie programmiert ein Kind eine Geheimschrift?',
      lede: 'Mit einer Regel und einem Schlüssel. Das Projekt ist unser eigenes; es funktioniert für Acht- bis Zwölfjährige, die das Alphabet sicher können. Die Idee ist alt: Jeder Buchstabe wird um eine feste Zahl von Stellen im Alphabet verschoben.',
      body: [
        { kind: 'ol', items: [
          '<strong>Zwei Streifen basteln.</strong> Schreiben Sie das Alphabet zweimal untereinander auf Papierstreifen. Den unteren Streifen schiebt Ihr Kind um drei Buchstaben nach links: Unter dem A steht jetzt D, unter dem B steht E.',
          '<strong>Eine Nachricht verschlüsseln.</strong> Ihr Kind schreibt "Treffpunkt am Baumhaus" und ersetzt jeden Buchstaben durch den darunter. Aus T wird W, aus R wird U.',
          '<strong>Den Schlüssel weitergeben.</strong> Wer die Nachricht lesen soll, muss nur die Zahl kennen, hier die 3. Zum Entschlüsseln schiebt man um drei Stellen zurück.',
          '<strong>Den Rand bedenken.</strong> Was steht unter X, Y und Z? Ihr Kind merkt: Das Alphabet muss von vorn beginnen, aus X wird A. Genau dieses Weiterzählen über das Ende hinaus braucht auch das Programm.',
          '<strong>Erst dann tippen.</strong> Wenn die Regel auf Papier sitzt, schreibt Ihr Kind sie mit dem Mentor in Python auf.'
        ] },
        { kind: 'code', label: 'Die Geheimschrift in Python', lang: 'Python', code: PY, note: 'Wir haben das Programm laufen lassen, es gibt genau diese drei Zeilen aus: <code>WUHIISXQNW DP EDXPKDXV</code>, dann <code>TREFFPUNKT AM BAUMHAUS</code>, dann <code>JUÜVVH DXV NÖOQ</code>.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Was die drei Zeilen der Ausgabe zeigen (unsere Auswertung)', head: ['Aufruf', 'Ergebnis', 'Was man daran lernt'], rows: [
          ['verschiebe(..., 3)', 'WUHIISXQNW DP EDXPKDXV', 'Leerzeichen bleiben stehen, nur Buchstaben aus ALPHABET werden verschoben'],
          ['verschiebe(geheim, -3)', 'TREFFPUNKT AM BAUMHAUS', 'Entschlüsseln ist dieselbe Regel mit umgekehrtem Schlüssel; die Kleinbuchstaben sind aber verloren'],
          ['verschiebe(\'Grüße aus Köln\', 3)', 'JUÜVVH DXV NÖOQ', 'Ü und Ö stehen nicht im Alphabet des Programms und bleiben sichtbar; aus ß wird beim Großschreiben SS']
        ] },
        { kind: 'p', mt: true, html: 'Die dritte Zeile ist die spannendste, und sie gibt es nur, weil wir auf Deutsch schreiben. Python macht aus <code>ß</code> beim Großschreiben zwei Buchstaben, <code>SS</code>, deshalb hat das verschlüsselte Wort einen Buchstaben mehr als das Original. Und weil <code>Ü</code> und <code>Ö</code> unverändert durchrutschen, verrät die Nachricht einem neugierigen Geschwisterkind schon einiges. Kinder finden dafür eigene Lösungen: Umlaute vorher als UE und OE schreiben, oder das Alphabet im Programm um ÄÖÜ erweitern. Beide Wege sind richtig, solange Ver- und Entschlüsseln dieselbe Regel benutzen.' },
        { kind: 'p', html: 'Zum Weiterknobeln: Eine Verschiebung um 26 Stellen verändert gar nichts. Wie viele verschiedene Schlüssel gibt es also wirklich, und könnte man eine Nachricht knacken, indem man einfach alle ausprobiert? Ein Programm, das alle Möglichkeiten nacheinander ausgibt, ist eine schöne zweite Aufgabe.' }
      ]
    },
    {
      id: 'weg',
      eyebrow: 'Lernweg',
      h2: 'Wie lernen Kinder Coding Schritt für Schritt?',
      lede: 'In drei Etappen, die sich nach dem Alter richten und nach dem, was ein Kind schon lesen und tippen kann. Die Übergänge sind fließend.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Ohne Bildschirm, ab 6', p: 'Pfeilkarten, Bewegungsspiele, Muster legen. Kinder lernen, dass Reihenfolge zählt und dass man einen Ablauf genau beschreiben muss. Die KMK empfiehlt solche Unplugged-Konzepte ausdrücklich für die Grundschule.' },
          { h3: 'Mit Blöcken, ab 7 oder 8', p: 'In Scratch stecken Kinder bunte Blöcke zusammen und sehen sofort, was ihre Figur tut. Schleifen, Bedingungen und Variablen entstehen hier, ohne dass ein Komma fehlen kann.' },
          { h3: 'Mit Text, ab etwa 10', p: 'In Python tippen Kinder ihre Anweisungen selbst. Das ist langsamer, aber näher an dem, was Programmiererinnen und Programmierer im Beruf tun, und es öffnet den Weg zu Daten und KI.' }
        ] },
        { kind: 'table', mt: true, numCols: [], caption: 'Nächste Schritte nach dem Einstieg, mit Quellen', head: ['Wenn Ihr Kind ...', 'dann passt', 'Gut zu wissen'], rows: [
          ['gern knobelt und in Klasse 3 oder höher ist', 'der Informatik-Biber', 'Grundschulkinder lösen dort neun Aufgaben in 30 Minuten; 2026 läuft er vom 9. bis 20. November, Anmeldung über die Schule (BWINF)'],
          ['eigene Spiele erfinden will', 'Scratch-Projekte über mehrere Wochen', 'Ein Spiel mit Punktestand und Levels ist ein gutes Ziel nach einigen Monaten (unsere Erfahrung)'],
          ['fragt, wie ChatGPT und Co. funktionieren', 'ein Kurs zum Verständnis von KI', 'Viele Chatbots verlangen für Kinder die Erlaubnis der Eltern; verstehen kann man KI auch ohne eigenes Konto']
        ] },
        { kind: 'source', html: 'Quellen: Bundesweite Informatikwettbewerbe (BWINF), Seiten zum Informatik-Biber, gelesen am 2. November 2026; KMK-Eckpunktepapier vom 28.11.2024. Wir sind mit BWINF und der KMK nicht verbunden.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Vom Benutzen zum Gestalten in fünf Stufen',
    lede: 'Unsere eigene Einteilung. Sie hilft uns, Kinder richtig einzustufen, und Ihnen, Fortschritte zu erkennen.',
    table: { caption: 'Fünf Stufen beim Coding für Kinder (unsere)', head: ['Stufe', 'Merkmal', 'Woran Sie es erkennen'], rows: [
      ['1. Benutzen', 'Ihr Kind bedient Apps und Spiele', 'Es weiß, wo man tippt, aber nicht, warum etwas passiert'],
      ['2. Beschreiben', 'Es beschreibt einen Ablauf in genauen Schritten', 'Es kann einem anderen Kind erklären, wie man den Roboter ans Ziel bringt'],
      ['3. Bauen', 'Es setzt Abläufe in Blöcken um', 'Seine Scratch-Figur tut, was es geplant hat'],
      ['4. Prüfen', 'Es findet Fehler selbst', 'Es sagt "Moment, das muss ich ändern", bevor der Mentor etwas sagt'],
      ['5. Gestalten', 'Es erfindet eigene Projekte', 'Es kommt mit einer Idee in die Stunde, nicht mit einer Frage']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Stufe 2 wird oft übersprungen, dabei ist sie die wichtigste. Ein Kind, das einen Ablauf in Worten genau beschreiben kann, programmiert danach viel schneller.',
      'Fragen Sie nach der Stunde ruhig, was das Programm heute falsch gemacht hat und wie Ihr Kind den Fehler gefunden hat. Die Antwort sagt mehr über den Fortschritt als jedes fertige Spiel.'
    ] },
    right: { h3: 'Für Kinder', ps: [
      'Ein Computer versteht nur genaue Anweisungen. Je genauer Sie sind, desto weniger Überraschungen gibt es.',
      'Wenn etwas nicht klappt, ist das kein Pech, sondern ein Hinweis. Lesen Sie Ihr Programm Zeile für Zeile, als wären Sie der Computer.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse rund ums Coding für Kinder',
    lede: 'Alle Kurse finden live statt und werden auf Englisch gehalten, wahlweise in der Gruppe oder einzeln.',
    bands: [
      { num: 'I', h3: 'Grundlagen', sub: '6 bis 10 Jahre', courses: [
        { code: 'KIN / BASIS / 01', slug: 'reasoning-and-readiness-course-for-young-thinkers', title: 'Denkspiele für junge Köpfe', blurb: 'Muster und Reihenfolgen für 6 bis 9.' },
        { code: 'KIN / BASIS / 02', slug: 'scratch-programming-complete-course', title: 'Scratch Schritt für Schritt', blurb: 'Drei aufeinander aufbauende Stufen, Klasse 1 bis 5.' },
        { code: 'KIN / BASIS / 03', slug: 'python-ai-kids-masterclass', title: 'Python für Kinder', blurb: 'Erste getippte Programme ab etwa Klasse 3.' }
      ] },
      { num: 'II', h3: 'Bauen und spielen', sub: '7 bis 12 Jahre', courses: [
        { code: 'KIN / BAU / 01', slug: 'game-development-masterclass-for-kids', title: 'Eigene Spiele entwickeln', blurb: 'Von Scratch über Roblox bis Minecraft, 8 bis 12.' },
        { code: 'KIN / BAU / 02', slug: 'minecraft-coding-for-kids-course', title: 'Coding in Minecraft', blurb: 'Blöcke, dann echter Code, 7 bis 12.' },
        { code: 'KIN / BAU / 03', slug: 'kids-ai-web-development-course', title: 'Die erste eigene Webseite', blurb: 'HTML und CSS für 9 bis 12.' }
      ] },
      { num: 'III', h3: 'Knobeln und rechnen', sub: '8 bis 12 Jahre', courses: [
        { code: 'KIN / DENK / 01', slug: 'maths-through-coding', title: 'Mathematik mit Code', blurb: 'Schulmathematik in Python, ab 10.' },
        { code: 'KIN / DENK / 02', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatik-Wettbewerbe', blurb: 'Biber-Knobeleien ab Klasse 3.' },
        { code: 'KIN / DENK / 03', slug: 'mathematik-olympiade-and-kaenguru-training-course', title: 'Mathe-Olympiade und Känguru', blurb: 'Für Kinder, die gern rechnen, ab 8.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Ablauf',
    h2: 'So lernen Kinder bei uns Coding',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Nach der Schule', l: 'Am Nachmittag in deutscher Zeit, für Grundschulkinder eher früh.' },
      { time: 'Sonntagvormittag', l: 'Für Familien mit vollen Wochentagen.' },
      { time: 'Eins zu eins', l: 'Zu Zeiten, die Sie selbst vorschlagen.' }
    ],
    cells: [
      { h3: 'Live, nie aufgezeichnet', p: 'Ihr Kind spricht mit einem Menschen, nicht mit einem Video.' },
      { h3: 'Ein Mentor für Monate', p: 'Er kennt Ihr Kind, seine Projekte und seine Fehler.' },
      { h3: 'Englisch zum Mitlernen', p: 'Fachwörter wie loop und if hört Ihr Kind jede Woche.' },
      { h3: 'Denken vor Klicken', p: 'Jede Stunde beginnt mit einer Aufgabe ohne Gerät.' },
      { h3: 'Eigene Projekte', p: 'Kein Abtippen: Jedes Kind baut sein eigenes Programm.' },
      { h3: 'Ehrliche Rückmeldung', p: 'Eltern erfahren, was klappt und was noch nicht.' }
    ]
  },

  projectsH2: 'Projekte von Kindern und Jugendlichen',
  projectsLede: 'Von der Geheimschrift zum eigenen Spiel ist es kein weiter Weg. Was unsere Lernenden gebaut haben, sehen Sie unten und auf der Seite <a class="ag-inline-link" href="/student-labs">Student labs</a> (auf Englisch).',
  reviewsLede: 'Was Eltern auf Google schreiben, im Wortlaut und auf Englisch.',

  fees: {
    h2: 'Was Coding für Kinder bei uns kostet',
    lede: 'Abgerechnet wird monatlich, acht Live-Stunden sind enthalten. Wir zeigen Ihnen den Preis in Euro, berechnet mit dem Referenzkurs der Europäischen Zentralbank. Die Zahlung selbst erfolgt in US-Dollar, und Ihre Bank wandelt sie in Euro um, weshalb der abgebuchte Betrag geringfügig anders ausfallen kann.',
    free: ['Eine Probestunde ohne Kosten', 'Eine Empfehlung für den passenden Kurs', 'Ohne Kreditkarte'],
    group: ['Fünfzehn bis zwanzig Kinder ähnlichen Alters', 'Fester Mentor über Monate', 'Zwei Stunden Live-Unterricht pro Woche', 'Monatlich kündbar'],
    one: ['Ein Mentor nur für Ihr Kind', 'Projekte nach den Interessen Ihres Kindes', 'Termine nach Ihren Wünschen']
  },

  faq: {
    eyebrow: 'Fragen von Eltern',
    h2: 'Coding für Kinder: was Eltern wissen wollen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein. Wir unterrichten ausschließlich auf Englisch, live und mit einem Mentor, der langsam spricht und sich auf Tempo und Aussprache Ihres Kindes einstellt. Viele Eltern sehen darin einen Vorteil: Coding und Englisch werden zusammen geübt, und die Befehle in Scratch und Python sind ohnehin englische Wörter.' },
      { q: 'Was ist der Unterschied zwischen Coding und Programmieren?', a: 'Im Alltag keiner. Coding ist das englische Wort, Programmieren das deutsche. Manche verwenden Coding eher für das Schreiben von Code und Programmieren für das ganze Vorhaben, also Planen, Bauen und Testen. Für Kinder spielt der Unterschied keine Rolle.' },
      { q: 'Ab welchem Alter können Kinder mit Coding anfangen?', a: 'Mit Spielen ohne Bildschirm schon ab sechs Jahren, mit Blöcken in Scratch ab etwa sieben oder acht, mit getipptem Python-Code ab etwa zehn. Viel wichtiger als das genaue Alter ist, dass der Einstieg zum Kind passt.' },
      { q: 'Ist Coding nicht einfach noch mehr Bildschirmzeit?', a: 'Es ist Bildschirmzeit, aber eine andere Art. Laut KIM-Studie 2024 nutzen 54 Prozent der Kinder, die online sind, das Internet täglich, meist zum Zuschauen und Spielen. Beim Coding baut Ihr Kind selbst etwas. Außerdem beginnt jede unserer Stunden mit einer Aufgabe ohne Gerät.' },
      { q: 'Lernt mein Kind Coding in der Grundschule?', a: 'Meist nicht systematisch. Die Kultusministerkonferenz hat 2024 beschlossen, Informatik in der Grundschule nicht als eigenes Fach zu führen, sondern in Deutsch, Mathematik, Sachunterricht und anderen Fächern mitlaufen zu lassen. Wie viel davon ankommt, hängt von der einzelnen Schule ab.' },
      { q: 'Braucht mein Kind Englischkenntnisse?', a: 'Grundkenntnisse helfen, sind aber keine Voraussetzung. Die Mentoren arbeiten mit kurzen Sätzen, zeigen viel und wiederholen geduldig. Die wichtigsten Wörter wie repeat, if oder move lernen Kinder in den ersten Wochen von selbst.' },
      { q: 'Wann sind die Stunden?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. Ein Termin um 15:45 Uhr deutscher Zeit ist im Winter 20:15 Uhr in Indien, wo die Mentoren sitzen.' },
      { q: 'Arbeiten die Kinder mit künstlicher Intelligenz?', a: 'Im Kurs zum Verständnis von KI lernen Kinder, wie KI funktioniert und wo sie Fehler macht. Chatbots, für die ein Erwachsenenkonto oder die Zustimmung der Eltern nötig ist, empfehlen wir Kindern nicht. Erst denken, dann Werkzeuge nutzen: Das gilt bei uns auch für KI.' },
      { q: 'Was kostet der Unterricht?', a: 'Sie zahlen monatlich. Den Betrag sehen Sie weiter oben in Euro, umgerechnet mit dem Kurs, den die Europäische Zentralbank als Referenz veröffentlicht; belastet wird er in US-Dollar, und Ihre Bank rechnet um. Die erste Stunde ist kostenlos und unverbindlich.' },
      { q: 'Was hat mein Kind am Ende in der Hand?', a: 'Eigene Projekte, etwa eine Geheimschrift, ein Spiel oder eine kleine Webseite, und die Erfahrung, einen Fehler selbst gefunden zu haben. Schulnoten oder anerkannte Abschlüsse vergeben wir nicht; für die Schule zählt weiter der Unterricht dort.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weiterlesen',
    h2: 'Was Sie außerdem interessieren könnte',
    lede: 'Eine kleine Auswahl, die meisten Texte dort sind englisch.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Alle Angebote für Deutschland auf einer Seite.' },
      { href: '/informatik-in-german-schools-by-state', label: 'Informatik by Land', p: 'Wann Informatik in Ihrem Bundesland Pflicht wird.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Hilfe, wenn Informatik in der Schule beginnt.' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding for kids in Berlin', p: 'Für Familien in der Hauptstadt.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Ein Blick in unseren Live-Unterricht.' },
      { href: '/student-labs', label: 'Student labs', p: 'Was Lernende bei uns gebaut haben.' }
    ]
  },

  start: {
    h2: 'Probestunde für Ihr Kind buchen',
    lede: 'Die Probestunde ist ein kleiner Ausflug ins Coding: Ihr Kind löst eine Aufgabe ohne Computer, baut dann ein paar Blöcke zusammen und lernt dabei den Mentor kennen. Anschließend besprechen wir mit Ihnen, welcher Kurs und welche Gruppe passen.',
    readFirst: 'Zum Vorab-Lesen: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> erklärt unseren Unterricht, <a class="ag-inline-link" href="/courses">All courses</a> zeigt alle Kurse (beides auf Englisch).',
    note: 'Unterrichtet wird live online, von Mentoren in Indien und nur auf Englisch. Per WhatsApp antworten wir am schnellsten, gern auch auf eine deutsche Nachricht.',
    formNote: 'Unverbindlich und kostenlos, keine Karte nötig.'
  },

  footer: {
    cols: [
      { h4: 'Coding für Kinder', links: [
        { href: '/courses/kids-coding-blocks-masterclass', label: 'Coding for Kids' },
        { href: '/courses/problem-solving-and-computational-thinking-for-kids', label: 'Probleme lösen' },
        { href: '/courses/ai-literacy-for-kids-course', label: 'KI verstehen' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-in-german-schools-by-state', label: 'Informatik nach Land' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Vom Zuschauen zum Bauen'
  },

  personalityCss: `
.ag-root.ag-kin .ag-hero h1 { letter-spacing: -0.01em; }
.ag-root.ag-kin .ag-capsule { border-left-width: 3px; }
.ag-root.ag-kin .ag-table td:first-child { font-weight: 600; }
.ag-root.ag-kin .ag-code-head b { letter-spacing: 0.01em; }
.ag-root.ag-kin .ag-section-head h2 { max-width: 28ch; }
`,

  dossier: {
    curriculumAuthority: 'mpfs KIM-Studie 2024 (study page and report); KMK Eckpunktepapier Medienbildung und informatische Bildung in der Grundschule (28.11.2024); BWINF Informatik-Biber pages; read 2 and 3 November 2026. Example code our own.',
    localProject: 'A Geheimschrift (Caesar shift by 3): an original paper-strip-then-Python project. Our run printed WUHIISXQNW DP EDXPKDXV, decoded back to TREFFPUNKT AM BAUMHAUS, and turned Grüße aus Köln into JUÜVVH DXV NÖOQ because Ü and Ö are not in the program\'s alphabet and ß becomes SS. Lesson family: a code and its key; decoding is the same rule run backwards.',
    requiredMentions: ['WUHIISXQNW DP EDXPKDXV', 'JUÜVVH DXV NÖOQ', "verschiebe(geheim, -3)", 'Von 23 auf 40 Prozent in zwei Jahren', 'dass Kinder lernen, die digital geprägte Welt mitzugestalten', 'Nutzen KI zu Hause für die Schule nie', 'als Gestalterinnen und Gestalter an der digitalen Welt teilzuhaben', 'Vom Zuschauen zum Bauen'],
    sources: [
      { claim: 'Daily internet use 54 percent, 8 to 9 year-olds 23 to 40 percent, own smartphone 46 percent, 77 percent may bring phone to school.', url: 'https://mpfs.de/studie/kim-studie-2024/' },
      { claim: 'KIM sample 1,225; learning programs 33 percent; AI never used in class 72 percent; AI never used at home for school 81 percent.', url: 'https://mpfs.de/app/uploads/2025/05/KIM-Studie-2024.pdf' },
      { claim: 'KMK: children should help shape the digital world; no Informatik subject in Grundschule; unplugged concepts.', url: 'https://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/2024/2024_11_28-Medien-inform-Bildung-Grundschule.pdf' },
      { claim: 'Informatik-Biber: primary pupils nine tasks in 30 minutes; 2026 dates.', url: 'https://bwinf.de/biber/' }
    ],
    rejectedClaims: [
      'German-language teaching: we teach in English only, and the page says so.',
      'Any claim that coding raises school grades: not made.',
      'Any gender split from the KIM-Studie: left out on purpose.',
      'Recommending adult-account chatbots to children: refused.'
    ]
  }
};
