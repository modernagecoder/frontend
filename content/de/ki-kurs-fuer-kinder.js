'use strict';
// KI-Kurs für Kinder (ag- German-language door, Germany cluster P3 row DE063), written 2026-11-03.
// Owner 2026-11-02: classes are live, in English only, with mentors (based in India) who match the learner's pace and
// accent; the capsule says "auf Englisch". Formal "Sie" throughout. Pages show euro; checkout charges USD.
// Spine: children aged 6 to 12 learn what AI is by building a tiny learning program themselves, never by opening a
// chatbot account. Age floors only from the vendors' own pages; how often children in Germany already meet AI from the
// KIM-Studie 2024; what the KMK says about AI and primary school; one original guessing machine in Scratch and Python.
// Sources (raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/ki-kurs-fuer-kinder/, fetched 3 Nov 2026):
//  - mpfs, KIM-Studie 2024 (PDF, mpfs.de/app/uploads/2025/05/KIM-Studie-2024.pdf) and press release PM 2/2025:
//    "Für die aktuelle KIM-Studie wurden 1.225 Kinder im Alter von sechs bis 13 Jahren und deren Haupterzieher*innen
//    persönlich befragt"; "Zwischen dem 18. September und dem 07. November 2024 wurden dafür 1.225 Kinder ... befragt";
//    "Neu aufgenommen wurde der Umgang mit Künstlicher Intelligenz (KI) für die Schule"; weekly online activities: "KI-
//    Anwendungen (9 %)"; in class: "Nur selten finden digitale Spiele (17 %) oder Künstliche Intelligenz (11 %) regelmäßig
//    im Unterricht Anwendung. Bei einem Großteil der Kinder (72 %) werden KI-Anwendungen dagegen nie genutzt."; at home:
//    "nur sieben Prozent nutzen dies zumindest wöchentlich. Vier Fünftel der Kinder wenden zuhause dagegen nie KI für die
//    Schule an (81 %)"; "54 Prozent der Kinder, die online sind, nutzen das Internet täglich".
//  - KMK, Handlungsempfehlung für die Bildungsverwaltung zum Umgang mit Künstlicher Intelligenz in schulischen
//    Bildungsprozessen (Beschluss vom 10.10.2024), PDF: "Ein grundlegendes Verständnis der technischen Funktionsweisen
//    sowie das Erkennen von Chancen, Grenzen und Risiken ... unabdingbar"; "ein weitgehender Verzicht auf KI-Sprachmodelle
//    in der Grundschule und in den ersten Jahren der Sekundarstufe I, wie ihn die SWK empfiehlt, daher erörterungsbedürftig".
//  - KMK-Kompetenzrahmen "Bildung in der digitalen Welt"; Aktualisierung im Kontext Künstlicher Intelligenz (Beschluss vom
//    16.10.2026), PDF: orientation on "Empowering Learners for the Age of AI. An AI Literacy Framework for Primary and
//    Secondary Education" of the OECD and the European Commission; 5.5.2 "Algorithmische Strukturen in genutzten digitalen
//    Anwendungen erkennen".
//  - Anthropic consumer terms: "You must be at least 18 years old or the minimum age required to consent to use the
//    Services in your location, whichever is higher."
//  - Google Konto-Hilfe, Altersanforderungen (support.google.com/accounts/answer/1350409?hl=de): "Deutschland: mindestens
//    16 Jahre".
//  - openai.com refused our fetch (HTTP 403, 3 Nov 2026; not retried). ChatGPT's age rule is stated from
//    content/ai-tool-age-audit.json (vendor quote checked July 2026): 13, parent's permission under 18; labelled as such.
//  - FACTS.md: 1 (Grundschule 1 to 4, 6 in Berlin and Brandenburg), 106 (SWK: Informatik in the Sachunterricht), 195
//    (Jugend forscht junior from Klasse 4 to age 14), 205 (FLL Future Edition on LEGO Education "Informatik & KI" sets),
//    207 (FLL "von 5 bis 16"). Time: EinhZeitG para 4; summer time 2027 from 28 March.
// Our own: tierraten.py (scratchpad de/w/GC/kkk, python3 -I 3.14): "Erste Frage: Hat es ein Fell?"; "Durchschnitt: 3.0";
// "Der Reihe nach raten, Durchschnitt: 4.375"; "Nicht zu unterscheiden: Katze und Hund"; "Mit der neuen Frage: 4 Fragen
// für die Katze, 4 für den Hund"; "Durchschnitt: 3.22".
// Lesson family: a good yes/no question splits the group in half; when two examples look the same, the machine needs a
// new question (decision trees and features).

const { DE } = require('../../scripts/nl/lib/market-de');

const PY = [
  "FRAGEN = ['Hat es ein Fell?', 'Wohnt es bei Menschen im Haus?',",
  "          'Ist es größer als ein Mensch?', 'Frisst es andere Tiere?']",
  '',
  'TIERE = {',
  "    'Katze':    [1, 1, 0, 1],",
  "    'Hamster':  [1, 1, 0, 0],",
  "    'Löwe':     [1, 0, 1, 1],",
  "    'Pferd':    [1, 0, 1, 0],",
  "    'Frosch':   [0, 0, 0, 1],",
  "    'Schnecke': [0, 0, 0, 0],",
  "    'Hai':      [0, 0, 1, 1],",
  "    'Nilpferd': [0, 0, 1, 0],",
  '}',
  '',
  'def gute_frage(namen, tiere):',
  '    # Die gute Frage teilt die Gruppe möglichst genau in zwei Hälften.',
  '    wahl, abstand = None, None',
  '    for nr in range(len(FRAGEN)):',
  '        ja = sum(tiere[n][nr] for n in namen)',
  '        a = abs(ja - (len(namen) - ja))',
  '        if ja > 0 and ja < len(namen) and (abstand is None or a < abstand):',
  '            wahl, abstand = nr, a',
  '    return wahl',
  '',
  'def zaehle_fragen(namen, tiere, tiefe=0, ergebnis=None):',
  '    if ergebnis is None:',
  '        ergebnis = {}',
  '    if len(namen) == 1:',
  '        ergebnis[namen[0]] = tiefe',
  '        return ergebnis',
  '    nr = gute_frage(namen, tiere)',
  '    if nr is None:',
  "        print('Nicht zu unterscheiden:', ' und '.join(namen))",
  '        for n in namen:',
  '            ergebnis[n] = None',
  '        return ergebnis',
  '    ja = [n for n in namen if tiere[n][nr] == 1]',
  '    nein = [n for n in namen if tiere[n][nr] == 0]',
  '    zaehle_fragen(ja, tiere, tiefe + 1, ergebnis)',
  '    zaehle_fragen(nein, tiere, tiefe + 1, ergebnis)',
  '    return ergebnis',
  '',
  '# Versuch 1: acht Tiere, die Maschine wählt ihre Fragen selbst',
  'fragen = zaehle_fragen(list(TIERE), TIERE)',
  "print('Erste Frage:', FRAGEN[gute_frage(list(TIERE), TIERE)])",
  "print('Fragen pro Tier:', fragen)",
  "print('Durchschnitt:', sum(fragen.values()) / len(fragen))",
  '',
  '# Zum Vergleich: der Reihe nach raten ("Ist es eine Katze?")',
  'raten = [min(i + 1, len(TIERE) - 1) for i in range(len(TIERE))]',
  "print('Der Reihe nach raten, Durchschnitt:', sum(raten) / len(raten))",
  '',
  '# Versuch 2: ein neues Tier kommt dazu',
  "TIERE['Hund'] = [1, 1, 0, 1]",
  'zaehle_fragen(list(TIERE), TIERE)',
  '',
  '# Versuch 3: eine neue Frage hilft',
  "FRAGEN.append('Kann es bellen?')",
  'for n in TIERE:',
  "    TIERE[n].append(1 if n == 'Hund' else 0)",
  'fragen = zaehle_fragen(list(TIERE), TIERE)',
  "print('Mit der neuen Frage:', fragen['Katze'], 'Fragen für die Katze,', fragen['Hund'], 'für den Hund')",
  "print('Durchschnitt:', round(sum(fragen.values()) / len(fragen), 2))"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'KI-Kurs für Kinder' },
  slug: 'ki-kurs-fuer-kinder',
  code: 'kkk',
  accent: '#652D4C',
  accentRationale: 'KI-Kurs für Kinder: a deep plum #652D4C, the colour of a felt-tip on a sorting card, kept well away from the petrol of the Informatik page; contrast 8.38 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'KI-Kurs für Kinder (auf Englisch)',
  title: 'KI-Kurs für Kinder: KI verstehen und selbst bauen, auf Englisch',
  description: 'KI-Kurs für Kinder von 6 bis 12: live auf Englisch, ohne Chatbot-Konto. Kinder bauen eine eigene kleine KI in Scratch und Python. Dazu Zahlen der KIM-Studie.',
  ogDescription: 'Wie Kinder verstehen, was eine KI tut: ein Ratespiel, das seine Fragen selbst wählt, Altersgrenzen der Anbieter, KIM-Zahlen und was die KMK zur Grundschule sagt. Live-Unterricht auf Englisch.',
  twitterDescription: 'KI-Kurs für Kinder, live auf Englisch: eigene kleine KI bauen statt Chatbot nutzen, mit Scratch und Python.',
  pageName: 'KI-Kurs für Kinder',
  webPageDescription: 'Ein Leitfaden für Eltern in Deutschland zum KI-Kurs für Kinder von 6 bis 12 Jahren: warum Kinder KI besser verstehen, wenn sie selbst eine kleine lernende Maschine bauen, welche Altersgrenzen die Anbieter selbst nennen, wie oft Kinder laut KIM-Studie 2024 schon KI nutzen und was die Kultusministerkonferenz zu KI in der Grundschule festhält.',
  courseDescription: 'Live-Online-Kurs für Kinder von 6 bis 12 Jahren in ganz Deutschland, ausschließlich auf Englisch: wie Maschinen aus Beispielen lernen, Entscheidungsbäume, Daten sortieren und eigene kleine KI-Projekte in Scratch und Python, ohne Chatbot-Konten, in der Gruppe oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'KI-Kurs für Kinder',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#chatbot', label: 'Chatbot?' },
    { href: '#kim', label: 'Zahlen' },
    { href: '#ratespiel', label: 'Ratespiel' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Deutschland &middot; Künstliche Intelligenz &middot; 6 bis 12 Jahre',
  h1: 'KI-Kurs für Kinder: verstehen, wie Maschinen lernen',
  lede: 'Kinder begegnen KI im Sprachassistenten, in Videoempfehlungen und bald im Unterricht. Verstehen lernen sie sie am besten, indem sie selbst eine kleine Maschine bauen, die aus Beispielen lernt. Diese Seite zeigt, warum wir dafür keine Chatbots einsetzen, wie oft Kinder in Deutschland laut KIM-Studie 2024 schon KI nutzen, was die Kultusministerkonferenz dazu sagt, und ein Ratespiel, mit dem ein Kind in einer Stunde seine erste KI programmiert. Der Unterricht findet auf Englisch statt, mit Mentoren aus Indien.',
  secondaryCta: { href: '#ratespiel', label: 'Das Ratespiel ansehen' },
  wa: 'Hallo Modern Age Coders, wir interessieren uns für den KI-Kurs für Kinder auf Englisch. Können wir eine kostenlose Probestunde für unser Kind buchen?',
  heroNote: 'Unterricht auf Englisch, mit Mentoren aus Indien &middot; seit 2020 live online &middot; mehr als 10.000 Lernende weltweit',
  spec: [
    ['Alter', '6 bis 12 Jahre'],
    ['Werkzeuge', 'Papier, Scratch, ab etwa 10 Python'],
    ['Chatbots', 'Keine, kein KI-Konto nötig'],
    ['Gruppe', 'Fünfzehn bis zwanzig, oder einzeln'],
    ['Sprache', 'Englisch, langsam und deutlich'],
    ['Probestunde', 'Kostenlos, ohne Karte']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Der KI-Kurs für Kinder von Modern Age Coders ist Live-Unterricht auf Englisch für Kinder von 6 bis 12 Jahren in ganz Deutschland, mit Mentoren aus Indien. Die Kinder nutzen keinen Chatbot, sondern bauen selbst kleine lernende Programme: erst auf Papier und in Scratch, ab etwa zehn Jahren in Python. Sie lernen in einer Gruppe von fünfzehn bis zwanzig Kindern oder im Einzelunterricht, im eigenen Tempo und mit einem festen Mentor.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Kurse, mit denen Kinder KI von innen kennenlernen',
    lede: 'Einer erklärt, wie KI lernt und wo sie sich irrt, einer führt von Scratch-Blöcken zu ersten Python-Projekten, einer legt die Grundlagen des Programmierens für die Jüngsten.',
    items: [
      { course: 'ai-literacy-for-kids-course', code: 'KKK / 01', title: 'KI verstehen für Kinder', alt: 'Kursbild KI verstehen für Kinder von 8 bis 14', note: 'Für 8 bis 14 Jahre. Wie Maschinen aus Daten lernen, wo sie danebenliegen und wie man ihre Antworten prüft, mit altersgerechten Werkzeugen.' },
      { course: 'python-ai-kids-masterclass', code: 'KKK / 02', title: 'Python und KI für Kinder', alt: 'Kursbild Python und KI für Kinder', note: 'Etwa 9 bis 13 Jahre. Erste echte Programme, Turtle-Grafik und kleine Projekte, die Entscheidungen treffen, wie das Ratespiel auf dieser Seite.' },
      { course: 'scratch-programming-complete-course', code: 'KKK / 03', title: 'Scratch für Kinder', alt: 'Kursbild Scratch für Kinder', note: 'Für 6 bis 11 Jahre. Mit bunten Blöcken Spiele und Geschichten bauen und dabei Bedingungen, Schleifen und Variablen kennenlernen.' }
    ]
  },

  sections: [
    {
      id: 'chatbot',
      eyebrow: 'Chatbots und Altersgrenzen',
      h2: 'Braucht ein KI-Kurs für Kinder ChatGPT?',
      lede: 'Nein. Viele KI-Angebote sind für Kinder gar nicht freigegeben, und wer nur Fragen in ein Textfeld tippt, erfährt wenig darüber, was dahinter passiert. Die Altersgrenzen setzen die Anbieter selbst; die Tabelle nennt sie mit der jeweiligen Quelle.',
      body: [
        { kind: 'table', numCols: [], caption: 'Mindestalter laut den Anbietern selbst (Stand November 2026)', head: ['Angebot', 'Mindestalter', 'Woher die Angabe stammt'], rows: [
          ['Claude (Anthropic)', '18 Jahre, oder höher, wenn das örtliche Recht es verlangt', 'Verbraucherbedingungen von Anthropic, gelesen am 3. November 2026'],
          ['Eigenes Google-Konto selbst verwalten', 'In Deutschland 16 Jahre', 'Google Konto-Hilfe, Altersanforderungen nach Land, gelesen am 3. November 2026'],
          ['ChatGPT (OpenAI)', 'Ab 13; bis zum 18. Geburtstag braucht es die Zustimmung der Eltern', 'Nutzungsbedingungen von OpenAI laut unserer Prüfung vom Juli 2026; die Seite hat unseren Abruf im November 2026 abgelehnt']
        ] },
        { kind: 'source', html: 'Quellen: Anthropic, Consumer Terms of Service ("at least 18 years old ... whichever is higher"); Google, Konto-Hilfe, Altersanforderungen ("Deutschland: mindestens 16 Jahre"); OpenAI, Terms of Use, wie in unserer Altersprüfung von KI-Werkzeugen im Juli 2026 erfasst. Wir sind mit keinem dieser Unternehmen verbunden.' },
        { kind: 'two', mt: true,
          leftH3: 'Was das für ein Kind von 8 Jahren heißt',
          left: [
            'Für ein Grundschulkind ist keines dieser Angebote vorgesehen. Ein Kurs, der Kinder trotzdem in Chatbots tippen lässt, umgeht die Regeln, die die Anbieter selbst aufgestellt haben. Unser Kinderkurs kommt deshalb ohne Konto bei einem KI-Anbieter aus.',
            'Das ist kein Verzicht. Wer selbst eine Maschine baut, die aus Beispielen Regeln ableitet, versteht später auch einen großen Chatbot besser: Er rechnet mit Daten, er kann danebenliegen, und er weiß nur, was in seinen Beispielen steckt.'
          ],
          rightH3: 'Was wir stattdessen tun',
          right: [
            'Die Kinder sortieren Karten, stellen Ja-Nein-Fragen, zeichnen Entscheidungsbäume und bauen daraus Programme in Scratch und Python. Am Ende jeder Einheit steht eine kleine Maschine, die etwas erkennt, rät oder sortiert, und die das Kind selbst erklären kann.',
            'Jugendliche ab 13 dürfen manche Werkzeuge mit Zustimmung ihrer Eltern verwenden. Das ist ein Thema für unsere Kurse für Jugendliche, nicht für diesen.'
          ] }
      ]
    },
    {
      id: 'kim',
      eyebrow: 'Was Studien zeigen',
      h2: 'Wie oft nutzen Kinder in Deutschland schon KI?',
      lede: 'Weniger, als viele Eltern glauben. Die KIM-Studie 2024 des Medienpädagogischen Forschungsverbunds Südwest hat zum ersten Mal gefragt, wie Kinder KI für die Schule nutzen.',
      body: [
        { kind: 'table', numCols: [1], caption: 'KI im Alltag von Kindern zwischen sechs und 13 Jahren, KIM-Studie 2024', head: ['Situation', 'Anteil', 'Bezugsgruppe'], rows: [
          ['KI-Anwendungen mindestens einmal pro Woche in der Freizeit online', '9 %', 'Kinder, die das Internet nutzen'],
          ['KI wird regelmäßig im Unterricht eingesetzt', '11 %', 'Schulkinder, die in der Schule zumindest selten digitale Geräte nutzen'],
          ['KI-Anwendungen werden im Unterricht nie genutzt', '72 %', 'dieselbe Gruppe'],
          ['KI zu Hause für die Schule, mindestens wöchentlich', '7 %', 'alle Schulkinder'],
          ['KI zu Hause für die Schule, nie', '81 %', 'alle Schulkinder']
        ] },
        { kind: 'source', html: 'Quelle: Medienpädagogischer Forschungsverbund Südwest (mpfs), KIM-Studie 2024, Kapitel Online-Aktivitäten und Digitales Lernen. Für die Studie wurden 1.225 Kinder zwischen sechs und 13 Jahren und ihre Haupterziehungspersonen zwischen dem 18. September und dem 7. November 2024 persönlich befragt. Gelesen am 3. November 2026.' },
        { kind: 'p', mt: true, html: 'Die Zahlen zeigen zwei Dinge. Erstens ist KI für die meisten Kinder in Deutschland noch kein Alltagswerkzeug: Vier von fünf Schulkindern nutzen sie zu Hause nie für die Schule. Zweitens steigt die Internetnutzung schnell. Laut derselben Studie sind 54 Prozent der Kinder, die online sind, täglich im Netz. Wer jetzt versteht, wie Maschinen aus Daten lernen, hat einen Vorsprung, wenn KI in der Schule und zu Hause häufiger wird.' },
        { kind: 'p', html: 'Wir lesen solche Studien gern mit den Kindern zusammen, in einfachen Worten. Eine Prozentzahl ist für ein Kind von zehn Jahren ein guter Anlass, über Daten zu sprechen: Wer wurde gefragt? Wie viele? Und was weiß man über Kinder, die nicht gefragt wurden?' }
      ]
    },
    {
      id: 'schule',
      eyebrow: 'Schule und KMK',
      h2: 'Was sagt die Kultusministerkonferenz zu KI in der Grundschule?',
      lede: 'Die Länder halten ein Grundverständnis der Technik für unverzichtbar. Ob Sprachmodelle schon in der Grundschule eingesetzt werden sollen, ist dagegen offen.',
      body: [
        { kind: 'three', cells: [
          { h3: 'Verstehen, wie es funktioniert', p: 'In ihrer Handlungsempfehlung zu KI vom 10. Oktober 2024 schreiben die Länder, ein grundlegendes Verständnis der technischen Funktionsweisen sowie das Erkennen von Chancen, Grenzen und Risiken seien für einen reflektierten Umgang "unabdingbar".' },
          { h3: 'Sprachmodelle in der Grundschule', p: 'Die Ständige Wissenschaftliche Kommission empfiehlt einen weitgehenden Verzicht auf KI-Sprachmodelle in der Grundschule und den ersten Jahren der Sekundarstufe I. Die Länder halten diese Empfehlung in derselben Handlungsempfehlung für "erörterungsbedürftig".' },
          { h3: 'Der neue Kompetenzrahmen', p: 'Im Oktober 2026 hat die KMK ihren Kompetenzrahmen "Bildung in der digitalen Welt" um KI ergänzt. Er orientiert sich am Rahmenwerk "Empowering Learners for the Age of AI" der OECD und der Europäischen Kommission und nennt etwa, algorithmische Strukturen in genutzten Anwendungen zu erkennen.' }
        ] },
        { kind: 'p', mt: true, html: 'Für Eltern heißt das: Die Grundschule entscheidet von Land zu Land und von Schule zu Schule, wie viel KI sie zeigt. Die Grundschule dauert in den meisten Ländern von Klasse 1 bis 4, in Berlin und Brandenburg bis Klasse 6. Die Kommission empfiehlt außerdem Informatik als verpflichtenden Teil des Sachunterrichts; wie weit ein Land dem folgt, ist sehr verschieden.' },
        { kind: 'p', html: 'Unser Kurs ersetzt keinen Unterricht und vergibt keine Noten. Er setzt dort an, wo die KMK selbst den Kern sieht: verstehen, wie die Technik funktioniert. Das gelingt Kindern am besten mit den Händen, mit Karten, Blöcken und eigenem Code. Mit der KMK, einer Schule oder einem Ministerium sind wir nicht verbunden.' },
        { kind: 'source', html: 'Quellen: KMK, Handlungsempfehlung für die Bildungsverwaltung zum Umgang mit Künstlicher Intelligenz in schulischen Bildungsprozessen, Beschluss vom 10.10.2024; KMK-Kompetenzrahmen "Bildung in der digitalen Welt", Aktualisierung im Kontext Künstlicher Intelligenz, Beschluss vom 16.10.2026, Abschnitt 5.5.2; KMK zur Grundschule; Gesellschaft für Informatik zur Empfehlung der SWK. Gelesen am 3. November 2026.' }
      ]
    },
    {
      id: 'ratespiel',
      tint: 'tint',
      eyebrow: 'Ein Beispiel aus dem Kurs',
      h2: 'Wie baut ein Kind seine erste KI?',
      lede: 'Mit einem Ratespiel. Ein Kind denkt an ein Tier, die Maschine stellt Ja-Nein-Fragen und rät. Der Trick, den die Kinder dabei entdecken, ist derselbe, mit dem viele echte Systeme ihre Entscheidungen treffen: Eine gute Frage teilt die Möglichkeiten in zwei gleich große Hälften. Das Beispiel ist unser eigenes.',
      body: [
        { kind: 'table', numCols: [], caption: 'Unsere acht Tierkarten und vier Fragen (1 = ja, 0 = nein)', head: ['Tier', 'Fell?', 'Wohnt im Haus?', 'Größer als ein Mensch?', 'Frisst andere Tiere?'], rows: [
          ['Katze', '1', '1', '0', '1'],
          ['Hamster', '1', '1', '0', '0'],
          ['Löwe', '1', '0', '1', '1'],
          ['Pferd', '1', '0', '1', '0'],
          ['Frosch', '0', '0', '0', '1'],
          ['Schnecke', '0', '0', '0', '0'],
          ['Hai', '0', '0', '1', '1'],
          ['Nilpferd', '0', '0', '1', '0']
        ] },
        { kind: 'p', mt: true, html: '<strong>Für Kinder von 6 bis 9: erst auf Papier, dann in Scratch.</strong> So läuft die Einheit in fünf Schritten, jeder etwa zehn Minuten lang.' },
        { kind: 'ol', items: [
          '<strong>Karten sortieren.</strong> Das Kind legt die acht Tierkarten auf den Tisch und sucht eine Frage, auf die genau vier Tiere mit Ja antworten. "Hat es ein Fell?" funktioniert, "Wohnt es bei Menschen im Haus?" nicht, denn da sind es nur zwei.',
          '<strong>Den Baum zeichnen.</strong> Für jeden Stapel sucht es wieder eine Frage, die ihn halbiert. Nach drei Fragen liegt auf jedem Stapel nur noch ein Tier. Diese Zeichnung ist ein Entscheidungsbaum.',
          '<strong>In Scratch übertragen.</strong> Mit dem Block <code>frage [Hat es ein Fell?] und warte</code> stellt die Figur die erste Frage. Ein Block <code>falls &lt;(Antwort) = [ja]&gt; dann ... sonst</code> teilt das Programm in zwei Wege, so wie der Baum auf dem Papier.',
          '<strong>Raten lassen.</strong> Am Ende jedes Weges steht ein Block <code>sage [Ist es ein Hamster?]</code>. Das Kind spielt mit Eltern oder Geschwistern und zählt, wie viele Fragen die Figur braucht.',
          '<strong>Die Maschine überlisten.</strong> Jetzt kommt ein neues Tier dazu, ein Hund. Das Kind merkt: Für Katze und Hund gibt der Baum dieselben Antworten. Die Figur braucht eine neue Frage.'
        ] },
        { kind: 'code', label: 'Für Kinder ab etwa 10: die Maschine wählt ihre Fragen selbst', lang: 'Python', code: PY, note: 'Ausgabe, so wie wir das Programm mit Python 3.14 ausgeführt haben:<br><code>Erste Frage: Hat es ein Fell?</code><br><code>Fragen pro Tier: {\'Katze\': 3, \'Hamster\': 3, \'Löwe\': 3, \'Pferd\': 3, \'Hai\': 3, \'Nilpferd\': 3, \'Frosch\': 3, \'Schnecke\': 3}</code><br><code>Durchschnitt: 3.0</code><br><code>Der Reihe nach raten, Durchschnitt: 4.375</code><br><code>Nicht zu unterscheiden: Katze und Hund</code><br><code>Mit der neuen Frage: 4 Fragen für die Katze, 4 für den Hund</code><br><code>Durchschnitt: 3.22</code>' },
        { kind: 'p', mt: true, html: 'Was die Kinder daraus lernen: Die Maschine schaut sich für jede Gruppe an, welche Frage sie am gleichmäßigsten teilt, und wählt diese. So kommt sie bei acht Tieren immer mit drei Fragen aus. Wer dagegen der Reihe nach fragt, "Ist es eine Katze? Ist es ein Hamster?", braucht im Schnitt 4,375 Fragen. Als der Hund dazukommt, meldet das Programm: Nicht zu unterscheiden. Erst die neue Frage "Kann es bellen?" trennt die beiden, und der Durchschnitt steigt auf 3,22 Fragen für neun Tiere.' },
        { kind: 'ol', mt: true, items: [
          '<strong>Eine gute Frage halbiert die Gruppe.</strong> Je gleichmäßiger eine Frage teilt, desto schneller ist die Maschine am Ziel.',
          '<strong>Die Maschine weiß nur, was in ihren Daten steht.</strong> Gibt es keine Frage, die Katze und Hund trennt, kann sie die beiden nicht unterscheiden, egal wie schnell sie rechnet.',
          '<strong>Neue Beispiele brauchen manchmal neue Merkmale.</strong> Das gilt für ein Ratespiel genauso wie für große Systeme, die Bilder erkennen oder Texte sortieren.'
        ] }
      ]
    },
    {
      id: 'stufen',
      eyebrow: 'Nach Alter',
      h2: 'Was lernt ein Kind im KI-Kurs in welchem Alter?',
      lede: 'Unsere eigene Einteilung. Jedes Kind beginnt dort, wo es gerade steht, und der Mentor passt die Aufgaben an Lesen, Schreiben und Englisch an.',
      body: [
        { kind: 'table', numCols: [], caption: 'Inhalte nach Alter (unsere Planung)', head: ['Alter', 'Was das Kind tut', 'Womit'], rows: [
          ['6 und 7', 'Dinge nach Merkmalen sortieren, Ja-Nein-Fragen stellen, einen Ablauf als Bilderfolge legen', 'Karten, Papier, einfache Blöcke'],
          ['8 und 9', 'Entscheidungsbäume zeichnen und als Programm bauen, eine Figur auf Antworten reagieren lassen', 'Scratch'],
          ['10 und 11', 'Daten als Tabelle anlegen, ein Programm Regeln aus Beispielen finden lassen, Fehler der Maschine erklären', 'Scratch und erste Schritte in Python'],
          ['12', 'Eigene kleine Projekte, die erkennen, raten oder sortieren, und ein kurzer Vortrag darüber auf Englisch', 'Python']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Projekte, die Kinder bauen',
          left: [
            'Ein Ratespiel für Tiere, Länder oder Fußballvereine. Eine Sortiermaschine, die Obst nach Farbe und Größe einordnet. Ein Quiz, das sich merkt, welche Fragen schwer waren, und diese öfter stellt.',
            'Bei jedem Projekt fragt der Mentor: Woher weiß die Maschine das? Was passiert, wenn wir ein Beispiel weglassen? Diese Fragen sind wichtiger als der fertige Code.'
          ],
          rightH3: 'Und danach',
          right: [
            'Wer Freude daran hat, findet in Deutschland Wettbewerbe für junge Forschende. Bei Jugend forscht junior können Schülerinnen und Schüler ab der 4. Klasse und bis 14 Jahre antreten. Die FIRST LEGO League richtet sich an Kinder und Jugendliche von 5 bis 16; ihre neue Future Edition beruht auf Sets von LEGO Education zu Informatik und KI.',
            'Mit diesen Wettbewerben und ihren Veranstaltern sind wir nicht verbunden. Die Anmeldung läuft dort, oft über die Schule.'
          ] }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Wann findet der KI-Kurs für Kinder statt?',
      lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
      body: [
        { kind: 'table', numCols: [], caption: 'Drei mögliche Termine und dieselbe Stunde auf der Uhr des Mentors', head: ['Deutsche Zeit', 'Indien, solange in Deutschland Winterzeit gilt', 'Indien, ab dem 28. März 2027'], rows: [
          ['14:50', '19:20', '18:20'],
          ['16:20', '20:50', '19:50'],
          ['Samstag 09:15', '13:45', '12:45']
        ] },
        { kind: 'source', html: 'Rechtsgrundlage ist das Einheiten- und Zeitgesetz: Von Ende Oktober bis Ende März zeigen deutsche Uhren MEZ (UTC+1), dazwischen MESZ (UTC+2). Umgestellt wurde zuletzt am 25. Oktober 2026, vorgestellt wird wieder am 28. März 2027. Weil Indien keine Sommerzeit kennt und immer UTC+5:30 hat, wächst der Abstand im Winter auf viereinhalb Stunden und schrumpft im Sommer auf dreieinhalb. Alle drei Zeilen sind Beispiele und keine feste Gruppe.' },
        { kind: 'p', mt: true, html: 'Sechs- und Siebenjährige konzentrieren sich am frühen Nachmittag oder am Samstagmorgen meist am besten, deshalb planen wir für sie kürzere Abschnitte mit kleinen Pausen. Den Termin wählen Sie im Buchungsformular nach Ihrer deutschen Uhr.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Woran Eltern sehen, dass ihr Kind KI versteht',
    lede: 'Fünf Stufen, die wir selbst verwenden, um den Lernstand zu beschreiben und Eltern zu berichten.',
    table: { caption: 'Fünf Stufen im KI-Kurs für Kinder (unsere)', head: ['Stufe', 'Typisches Alter', 'Ihr Kind kann'], rows: [
      ['1. Sortieren', '6 bis 7', 'Dinge nach einem Merkmal in zwei Gruppen teilen und sagen, nach welchem'],
      ['2. Gut fragen', '7 bis 9', 'eine Frage finden, die eine Gruppe ungefähr halbiert'],
      ['3. Baum bauen', '8 bis 10', 'einen Entscheidungsbaum zeichnen und in Scratch umsetzen'],
      ['4. Lernen lassen', '10 bis 12', 'ein Programm aus einer Tabelle von Beispielen seine Fragen selbst wählen lassen'],
      ['5. Grenzen erklären', '11 bis 12', 'zeigen, wann eine Maschine scheitert, und begründen, warum']
    ] },
    left: { h3: 'Für Eltern', ps: [
      'Fragen Sie Ihr Kind nach einer Stunde nicht nur, was es gebaut hat, sondern warum die Maschine einmal falsch geraten hat. Diese Antwort zeigt am besten, was es verstanden hat.',
      'Nach den Stunden bekommen Sie eine kurze Rückmeldung: was geübt wurde, was gut lief und was als Nächstes kommt.'
    ] },
    right: { h3: 'Für Kinder', ps: [
      'Raten Sie selbst mit, bevor das Programm rät. Wer schneller richtig liegt, gewinnt die Runde.',
      'Wenn die Maschine sich irrt, ist das kein Fehler von Ihnen, sondern ein Hinweis: Ihr fehlt eine Frage.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse für Kinder, die gern tüfteln',
    lede: 'Alle Kurse finden live statt, auf Englisch, mit einem festen Mentor, in der Gruppe oder im Einzelunterricht.',
    bands: [
      { num: 'I', h3: 'Erste Schritte', sub: '6 bis 10 Jahre', courses: [
        { code: 'KKK / START / 01', slug: 'kids-coding-blocks-masterclass', title: 'Programmieren mit Blöcken', blurb: 'Von Scratch zu Spielen, Apps und kleinen KI-Ideen.' },
        { code: 'KKK / START / 02', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Denken wie ein Programmierer', blurb: 'Rätsel, Muster und Abläufe, oft ganz ohne Bildschirm.' },
        { code: 'KKK / START / 03', slug: 'block-coding-app-development-masterclass', title: 'Apps bauen für Kinder', blurb: 'Eigene Apps aus Blöcken, die auf dem Tablet laufen.' }
      ] },
      { num: 'II', h3: 'Spiele und Projekte', sub: '8 bis 12 Jahre', courses: [
        { code: 'KKK / PROJ / 01', slug: 'game-development-masterclass-for-kids', title: 'Spiele entwickeln für Kinder', blurb: 'Scratch, Roblox und Minecraft als Werkstatt.' },
        { code: 'KKK / PROJ / 02', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft programmieren', blurb: 'Von Blöcken zu echtem Code in einer vertrauten Welt.' },
        { code: 'KKK / PROJ / 03', slug: 'kids-ai-web-development-course', title: 'Webseiten für Kinder', blurb: 'Die erste eigene Webseite, Schritt für Schritt.' }
      ] },
      { num: 'III', h3: 'Weiter mit Informatik', sub: '9 bis 16 Jahre', courses: [
        { code: 'KKK / INF / 01', slug: 'informatik-companion-course-klasse-5-10', title: 'Informatik Companion', blurb: 'Begleitung zum Schulfach Informatik ab Klasse 5.' },
        { code: 'KKK / INF / 02', slug: 'german-informatics-competitions-course-biber-bwinf-bwki', title: 'Informatik-Wettbewerbe', blurb: 'Knobelaufgaben vom Biber bis zu KI-Projekten.' },
        { code: 'KKK / INF / 03', slug: 'maths-through-coding', title: 'Mathematik mit Python', blurb: 'Rechnen, Muster und Daten im eigenen Code, 10 bis 15.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'Ablauf',
    h2: 'Wie eine Stunde im KI-Kurs für Kinder aussieht',
    lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
    slots: [
      { time: 'Früher Nachmittag', l: 'Wenn die Grundschule aus ist, etwa ab 14:50 Uhr.' },
      { time: 'Samstag', l: 'Am Vormittag, wenn Kinder ausgeruht sind.' },
      { time: 'Einzeln', l: 'Zu einer Zeit, die Sie mit dem Mentor absprechen.' }
    ],
    cells: [
      { h3: 'Erst spielen', p: 'Jede Stunde beginnt mit einem Rätsel oder Kartenspiel, ganz ohne Code.' },
      { h3: 'Dann bauen', p: 'Aus dem Spiel wird ein kleines Programm in Scratch oder Python.' },
      { h3: 'Einfaches Englisch', p: 'Kurze Sätze, viele Bilder, schwierige Wörter werden gezeigt und wiederholt.' },
      { h3: 'Selbst erklären', p: 'Jedes Kind sagt am Ende in eigenen Worten, wie seine Maschine entscheidet.' },
      { h3: 'Kein KI-Konto', p: 'Wir nutzen keine Chatbots, für die Kinder zu jung sind.' },
      { h3: 'Ein fester Mentor', p: 'Dieselbe Person jede Woche, die Ihr Kind gut kennt.' }
    ]
  },

  projectsH2: 'Was Kinder bei uns bauen',
  projectsLede: 'Eine Auswahl von Projekten unserer Lernenden weltweit. Mehr davon zeigt die Seite <a class="ag-inline-link" href="/student-labs">Student labs</a> (auf Englisch).',
  reviewsLede: 'Was Familien über uns bei Google schreiben, wörtlich und auf Englisch, so wie es dort steht.',

  fees: {
    h2: 'Was der KI-Kurs für Kinder kostet',
    lede: 'Ein Monat umfasst acht Live-Stunden. Den Preis zeigen wir Ihnen in Euro, berechnet mit dem Referenzkurs, den die Europäische Zentralbank veröffentlicht. Die Zahlung selbst läuft in US-Dollar, die Umrechnung übernimmt Ihre Bank, und deshalb weicht der gebuchte Betrag manchmal um ein paar Cent ab.',
    free: ['Eine kostenlose Probestunde mit einem Ratespiel', 'Ein kurzes Gespräch über Alter und Vorkenntnisse', 'Keine Kreditkarte nötig'],
    group: ['Fünfzehn bis zwanzig Kinder in ähnlichem Alter', 'Derselbe Mentor jede Woche', 'Zwei Stunden pro Woche', 'Monatlich zahlbar und monatlich kündbar'],
    one: ['Ihr Kind allein mit dem Mentor', 'Tempo und Projekte nach seinen Interessen', 'Termine nach Absprache']
  },

  faq: {
    eyebrow: 'Fragen von Eltern',
    h2: 'KI-Kurs für Kinder: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein, jede Stunde läuft live und nur auf Englisch, mit Mentoren aus Indien, die langsam und deutlich sprechen und sich auf Tempo und Aussprache Ihres Kindes einstellen. Für viele Familien ist das ein Vorteil: Ihr Kind lernt, wie KI funktioniert, und übt dabei ganz nebenbei Englisch, die Sprache, in der Programmiersprachen geschrieben sind.' },
      { q: 'Ab welchem Alter kann mein Kind am KI-Kurs teilnehmen?', a: 'Ab 6 Jahren. Die Jüngsten arbeiten mit Karten, Bildern und einfachen Blöcken, ab etwa 8 Jahren mit Scratch und ab etwa 10 Jahren mit ersten Python-Programmen. Lesen und Schreiben müssen noch nicht sicher sein, der Mentor zeigt viel und liest Aufgaben vor.' },
      { q: 'Benutzt mein Kind im Kurs ChatGPT oder einen anderen Chatbot?', a: 'Nein. Viele Chatbots sind laut ihren eigenen Bedingungen nicht für Kinder gedacht: Claude erst ab 18 Jahren, ChatGPT ab 13 Jahren, bis zur Volljährigkeit nur mit Zustimmung der Eltern. Ein eigenes Google-Konto darf man in Deutschland erst ab 16 Jahren selbst verwalten. Unsere Kinder bauen ihre KI selbst, dafür braucht es kein Konto bei einem KI-Anbieter.' },
      { q: 'Lernt mein Kind wirklich etwas über KI, wenn es keinen Chatbot nutzt?', a: 'Ja, sogar mehr. Wer selbst eine Maschine baut, die aus einer Tabelle von Beispielen ihre Fragen wählt, erlebt, wie Lernen aus Daten funktioniert und wo es an Grenzen stößt. Genau dieses Verständnis der Funktionsweise nennt die Kultusministerkonferenz in ihrer Handlungsempfehlung von 2024 unabdingbar.' },
      { q: 'Wie viele Kinder in Deutschland nutzen schon KI?', a: 'Laut KIM-Studie 2024 des Medienpädagogischen Forschungsverbunds Südwest nutzen 9 Prozent der Kinder, die online sind, mindestens einmal pro Woche KI-Anwendungen. 81 Prozent der Schulkinder setzen KI zu Hause nie für die Schule ein. Befragt wurden 1.225 Kinder zwischen sechs und 13 Jahren im Herbst 2024.' },
      { q: 'Wird in der Grundschule schon KI unterrichtet?', a: 'Das hängt vom Land und von der Schule ab. Die Kultusministerkonferenz hat ihren Kompetenzrahmen im Oktober 2026 um KI ergänzt. Ob Sprachmodelle schon in der Grundschule eingesetzt werden sollen, ist offen: Die Wissenschaftliche Kommission empfiehlt weitgehenden Verzicht, die Länder halten das für erörterungsbedürftig. Unser Kurs vergibt keine Noten und ersetzt keinen Schulunterricht.' },
      { q: 'Braucht mein Kind Vorkenntnisse im Programmieren?', a: 'Nein. Wir beginnen mit Spielen auf Papier und bauen erst danach Programme. Kinder, die schon Scratch kennen, steigen später ein und kommen schneller zu Python.' },
      { q: 'Zu welchen Uhrzeiten kann mein Kind teilnehmen?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. Zur Orientierung: Beginnt die Stunde im Winter um 14:50 Uhr deutscher Zeit, ist es beim Mentor in Indien 19:20 Uhr.' },
      { q: 'Was kostet der Kurs, und in welcher Währung zahle ich?', a: 'Oben auf dieser Seite steht die Monatsgebühr in Euro; als Grundlage dient der Referenzkurs der EZB. Belastet wird Ihr Konto in US-Dollar, den Wechsel in Euro erledigt Ihre Bank. Für die erste Stunde zahlen Sie nichts und brauchen keine Kreditkarte.' },
      { q: 'Wie geht es nach dem KI-Kurs weiter?', a: 'Viele Kinder machen mit Python und eigenen Projekten weiter. Wer forschen möchte, kann bei Jugend forscht junior ab der 4. Klasse und bis 14 Jahre antreten, die Anmeldung läuft beim Veranstalter. Ab 13 Jahren führen unsere Kurse für Jugendliche zu maschinellem Lernen mit echten Daten.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weiterlesen',
    h2: 'Weitere Seiten für Familien in Deutschland',
    lede: 'Überwiegend englischsprachige Seiten, ausgewählt für Eltern jüngerer Kinder.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Der Einstieg zu allen Kursen für Familien zwischen Kiel und Konstanz.' },
      { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe online', p: 'Wenn aus Spiel Schulfach wird: Informatik ab Klasse 5.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Learn to think, not copy AI', p: 'Wie wir Denken statt Abschreiben unterrichten.' },
      { href: '/coding-classes-for-kids-berlin', label: 'Coding classes for kids in Berlin', p: 'Programmieren für Kinder in Berlin.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML classes in Germany', p: 'Maschinelles Lernen für Jugendliche und Erwachsene.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'So läuft unser Live-Unterricht.' }
    ]
  },

  start: {
    h2: 'Eine kostenlose Probestunde ausprobieren',
    lede: 'In der Probestunde spielt der Mentor mit Ihrem Kind eine Runde Tierraten und baut mit ihm die ersten Blöcke dazu. So sehen Sie, wie Ihr Kind mit Englisch und Aufgaben zurechtkommt, und wir schlagen danach die passende Gruppe vor.',
    readFirst: 'Wer mehr wissen möchte, findet auf <a class="ag-inline-link" href="/how-we-teach">How we teach</a> den Ablauf einer Live-Stunde und unter <a class="ag-inline-link" href="/courses">All courses</a> jeden Lehrplan, beides in englischer Sprache.',
    note: 'Die Mentoren unterrichten aus Indien, live und auf Englisch. Eine kurze WhatsApp-Nachricht ist der schnellste Weg zu uns.',
    formNote: 'Kostenlos, ohne Kreditkarte, ohne Verpflichtung.'
  },

  footer: {
    cols: [
      { h4: 'KI für Kinder', links: [
        { href: '/courses/ai-literacy-for-kids-course', label: 'KI verstehen für Kinder' },
        { href: '/courses/python-ai-kids-masterclass', label: 'Python und KI' },
        { href: '/courses/scratch-programming-complete-course', label: 'Scratch für Kinder' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/informatik-nachhilfe-online', label: 'Informatik-Nachhilfe' },
        { href: '/coding-classes-for-kids-berlin', label: 'Programmieren in Berlin' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Eine gute Frage halbiert die Gruppe'
  },

  personalityCss: `
.ag-root.ag-kkk .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-kkk .ag-capsule { border-left-width: 6px; border-radius: 0; }
.ag-root.ag-kkk .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-kkk .ag-table caption { text-align: left; font-style: italic; }
.ag-root.ag-kkk .ag-table td { hyphens: auto; }
`,

  dossier: {
    curriculumAuthority: 'mpfs KIM-Studie 2024; KMK Handlungsempfehlung KI (10.10.2024) and KMK-Kompetenzrahmen KI (16.10.2026); Anthropic consumer terms; Google Konto-Hilfe age table; FACTS.md 1, 106, 195, 205, 207; Einheiten- und Zeitgesetz; all read 3 November 2026. Example our own.',
    localProject: 'Tierraten: an original guessing machine on our own eight animal cards; in Python it picks the question that splits each group most evenly (first "Hat es ein Fell?"), needs 3.0 questions on average against 4.375 when guessing one by one, reports "Nicht zu unterscheiden: Katze und Hund" when a dog is added, and needs 3.22 on average once "Kann es bellen?" is added; plus Scratch steps for ages 6 to 9. Lesson family: a good question splits the group in half; identical examples need a new feature.',
    requiredMentions: ['Erste Frage: Hat es ein Fell?', 'Der Reihe nach raten, Durchschnitt: 4.375', 'Nicht zu unterscheiden: Katze und Hund', 'Mit der neuen Frage: 4 Fragen für die Katze, 4 für den Hund', 'KI zu Hause für die Schule, nie', 'Die Länder halten diese Empfehlung in derselben Handlungsempfehlung für', 'Empowering Learners for the Age of AI', 'Eigenes Google-Konto selbst verwalten', 'Eine gute Frage halbiert die Gruppe'],
    sources: [
      { claim: 'KIM-Studie 2024: 1,225 children aged 6 to 13, AI use in free time, in class and at home for school; 54 percent online daily.', url: 'https://mpfs.de/app/uploads/2025/05/KIM-Studie-2024.pdf' },
      { claim: 'KMK 2024: understanding how the technology works is indispensable; SWK recommendation on language models in primary school called erörterungsbedürftig.', url: 'https://www.kmk.org/fileadmin/veroeffentlichungen_beschluesse/2024/2024_10_10-Handlungsempfehlung-KI.pdf' },
      { claim: 'KMK 2026 framework: orientation on the OECD and European Commission AI Literacy Framework; 5.5.2.', url: 'https://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/2026/2026_10_16-KI-Kompetenzrahmen.pdf' },
      { claim: 'Claude minimum age 18.', url: 'https://www.anthropic.com/legal/consumer-terms' },
      { claim: 'Google Account: Germany 16 to manage your own account.', url: 'https://support.google.com/accounts/answer/1350409?hl=de' },
      { claim: 'German legal time.', url: 'https://www.gesetze-im-internet.de/me_einhg/BJNR007090969.html' }
    ],
    rejectedClaims: [
      'Children using ChatGPT, Claude or Gemini in class: refused; the vendors set higher ages.',
      'Quoting OpenAI terms from a fresh fetch: openai.com returned HTTP 403; the age rule is labelled as from our July 2026 audit.',
      'German-language teaching: we teach in English only, and the page says so.',
      'Any connection to the KMK, mpfs, Jugend forscht, FIRST or LEGO: none.',
      'Gender figures from the KIM-Studie: not used.'
    ]
  }
};
