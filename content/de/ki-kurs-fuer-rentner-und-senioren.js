'use strict';
// KI-Kurs für Rentner und Senioren (ag- German-language door, Germany cluster P3, row DE059, alloc code kkr, accent #73501F).
// Spec docs/superpowers/specs/2026-11-02-de-cluster-design.md; brief docs/superpowers/plans/2026-11-03-de-writer-brief.md.
// Owner 2026-11-02: classes are live in English only, matching the learner's pace and accent; the capsule says "auf Englisch".
// Formal "Sie" throughout, respectful and practical; no health or money advice; no scam stories without a primary source
// (the only one used is the BSI's own sentence on phishing). Adult tools are fine for adults; their terms are named honestly.
// Spine: older adults who want to use and understand AI safely. (1) Where people aged 65 to 74 in Germany stand online and with
// generative AI (Destatis 2025, Eurostat 2025), including why non-users say they do not use it; (2) what a chatbot is and why it
// can sound right and be wrong, with an original runnable toy model; (3) the BSI's eight-point transparency checklist and its
// safety advice; (4) what the EU AI Act requires of chatbots and deepfakes, with dates; (5) the course and times by daylight.
// Sources, raw copies in ~/Desktop/SkyCoders/keyword-research-2026-09/de/src-pages/ki-kurs-fuer-rentner-und-senioren/ (fetched 3 Nov 2026):
//  Destatis Zahl der Woche Nr. 09 vom 24. Februar 2026 (PD26_09_p002): "Gut 3 % der Menschen im Alter zwischen 16 und 74 Jahren
//   waren im Jahr 2025 in Deutschland sogenannte Offliner"; "knapp 2,1 Millionen Menschen"; "Hier war 2025 rund ein Zehntel (10 %) offline"
//   (65 to 74); "2021 hatte er noch bei 6 % gelegen".
//  Destatis Pressemitteilung Nr. N014 vom 2. März 2026: "So nahm der Anteil der Nutzenden sozialer Medien unter den 65- bis 74-Jährigen
//   von 15 % im Jahr 2021 auf 25 % im Jahr 2025 zu."
//  Destatis table "Ausgewählte Internetaktivitäten von Personen nach Alter" 2025 (Stand 23. September 2026): 65 bis 74 Jahre: soziale
//   Netzwerke 25, Suche nach Informationen über Waren und Dienstleistungen 65.
//  Eurostat isoc_ai_iaiu (2025, % of individuals): used generative AI in the last 3 months, 65 to 74: DE 7.5, EU27 6.5; 55 to 64: DE 17.16;
//   all 16 to 74: DE 32.25. Eurostat isoc_ai_iaiuxr (2025): reasons for not using, 65 to 74, DE: no need 59.52; concerns about privacy,
//   security or safety 7.98; did not know how to use 5.49; did not know they existed 3.39. Rounded by us.
//  BSI "Texte & Co. mit Künstlicher Intelligenz erstellen": "so wenig sensible Daten wie möglich mit einer KI-Anwendung teilen";
//   "einem Faktencheck unterziehen"; "Links und Anhänge, die eine KI-Anwendung ausgibt, vor dem Öffnen genau prüfen"; "Stattdessen
//   erfindet die KI oftmals Inhalte – sie „halluziniert"."; "KI-Sprachmodelle können beispielsweise dabei unterstützen, Phishing-E-Mails
//   oder Falschnachrichten noch glaubwürdiger darzustellen."
//  BSI "Die Transparenz-Checkliste für KI-Anwendungen": "Wenn Sie eine KI-Anwendung zu allen acht Punkten der Checkliste überprüft haben";
//   headings: Umgang mit Ihren Daten; Zugriffsberechtigungen der KI; Zweckbestimmung; Wissensstand (Knowledge-Cutoff-Date);
//   Nutzungshinweise; Anbieterinformationen; Lizenzmodell; Aktualisierungen.
//  Regulation (EU) 2024/1689 (AI Act), German text via Publications Office CELEX 32024R1689: Art. 50(1) persons must be "informiert
//   werden, dass sie mit einem KI-System interagieren"; Art. 50(4) deepfake deployers "müssen offenlegen, dass die Inhalte künstlich
//   erzeugt oder manipuliert wurden"; Art. 113 "Sie gilt ab dem 2. August 2026." with chapters I and II "ab dem 2. Februar 2025";
//   signed "Geschehen zu Brüssel am 13. Juni 2024." The page states the text as published and notes that later amendments may change dates.
//  Time: EinhZeitG; summer time ended 25 Oct 2026, begins 28 Mar 2027.
// Our own example (python3 -I, 3 Nov 2026): a word-pair model on four invented timetable sentences continues "der bus nach berlin" to
// "der bus nach berlin faehrt um neun uhr ." although no bus to Berlin appears in its text; paare['um'] = {'neun': 2, 'zehn': 1, 'acht': 1}.
// Lesson family: a language model continues what is likely, not what is true (next-word prediction from counted word pairs).

const { DE } = require('../../scripts/nl/lib/market-de');

const PY = [
  'text = (',
  "    'der zug nach hamburg faehrt um neun uhr . '",
  "    'der zug nach berlin faehrt um zehn uhr . '",
  "    'der bus nach hamburg faehrt um acht uhr . '",
  "    'der zug nach hamburg faehrt um neun uhr .'",
  ')',
  'woerter = text.split()',
  '',
  'paare = {}',
  'for a, b in zip(woerter, woerter[1:]):',
  '    paare.setdefault(a, {})',
  '    paare[a][b] = paare[a].get(b, 0) + 1',
  '',
  'def weiter(wort):',
  '    folge = paare[wort]',
  '    return max(folge, key=folge.get)',
  '',
  "satz = ['der', 'bus', 'nach', 'berlin']",
  "while satz[-1] != '.':",
  '    satz.append(weiter(satz[-1]))',
  "print(' '.join(satz))",
  "print(paare['um'])"
].join('\n');

module.exports = {
  cluster: 'ag',
  clusterName: 'Germany',
  hub: { group: 'german', label: 'KI-Kurs für Seniorinnen und Senioren' },
  slug: 'ki-kurs-fuer-rentner-und-senioren',
  code: 'kkr',
  accent: '#73501F',
  accentRationale: 'KI-Kurs für Rentner und Senioren: a warm walnut #73501F, quiet and legible, a reading-lamp colour rather than a tech colour; contrast 5.88 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  market: DE,
  parents: [{ slug: 'coding-classes-in-germany', name: 'Deutschland' }],
  routeLabel: 'KI-Kurs für Rentner und Senioren (auf Englisch)',
  title: 'KI-Kurs für Rentner und Senioren: live online, auf Englisch',
  description: 'KI-Kurs für Rentner und Senioren: Chatbots sicher nutzen und verstehen, live online auf Englisch, in Ruhe. Mit Zahlen von Destatis und Eurostat und BSI-Checkliste.',
  ogDescription: 'Künstliche Intelligenz in Ruhe verstehen und sicher nutzen: ein Live-Kurs auf Englisch für Menschen im Ruhestand, mit den Zahlen von Destatis und Eurostat zu den 65- bis 74-Jährigen, der Checkliste des BSI und einem kleinen Experiment, das zeigt, warum Chatbots irren.',
  twitterDescription: 'KI sicher nutzen im Ruhestand, live auf Englisch: Zahlen 2025, BSI-Checkliste und warum Chatbots sich irren.',
  pageName: 'KI-Kurs für Rentner und Senioren',
  webPageDescription: 'Ein Leitfaden für ältere Erwachsene in Deutschland, die KI-Chatbots verstehen und sicher nutzen möchten: Internet- und KI-Nutzung der 65- bis 74-Jährigen nach Destatis und Eurostat 2025, die Transparenz-Checkliste des BSI, die Pflichten aus der KI-Verordnung der EU und ein eigenes kleines Experiment.',
  courseDescription: 'Live-Online-Kurse für Seniorinnen und Senioren in ganz Deutschland, ausschließlich auf Englisch: KI-Chatbots verstehen, sicher und kritisch nutzen und, wer möchte, erste eigene Programme schreiben, in kleiner Gruppe oder im Einzelunterricht.',
  crumbs: [{ name: 'Kurse', href: '/courses' }, { name: 'Coding classes in Germany', href: '/coding-classes-in-germany' }],
  crumbLabel: 'KI-Kurs für Senioren',
  navLinks: [
    { href: '/coding-classes-in-germany', label: 'Deutschland' },
    { href: '#zahlen', label: 'Zahlen' },
    { href: '#irrtum', label: 'Irrtümer' },
    { href: '#sicher', label: 'Schutz' },
    { href: '#zeiten', label: 'Zeiten' }
  ],
  eyebrow: 'Deutschland &middot; Künstliche Intelligenz &middot; im Ruhestand',
  h1: 'KI-Kurs für Rentner und Senioren, live auf Englisch',
  lede: 'Überall ist von künstlicher Intelligenz die Rede, und viele Menschen im Ruhestand fragen sich, ob sie das noch lernen sollten, wozu es gut ist und wie man sich dabei schützt. Diese Seite gibt ruhige, belegte Antworten: wie viele Menschen zwischen 65 und 74 laut Destatis und Eurostat schon online sind und KI nutzen, warum ein Chatbot überzeugend klingen und trotzdem irren kann, worauf das Bundesamt für Sicherheit in der Informationstechnik achtet, und wie unser Kurs abläuft.',
  secondaryCta: { href: '#sicher', label: 'Die Checkliste des BSI' },
  wa: 'Guten Tag, ich bin im Ruhestand und möchte KI in Ruhe verstehen und sicher nutzen, gern im Kurs auf Englisch. Kann ich eine kostenlose Probestunde vereinbaren?',
  heroNote: 'Live-Unterricht seit 2020 &middot; über 10.000 Lernende weltweit &middot; auf Englisch, langsam und mit viel Geduld',
  spec: [
    ['Für', 'Menschen im Ruhestand und alle ab etwa 60'],
    ['Inhalt', 'Chatbots verstehen, sicher nutzen, Antworten prüfen'],
    ['Vorkenntnisse', 'E-Mail und Internet genügen'],
    ['Gruppe', 'Fünfzehn bis zwanzig, oder ganz allein'],
    ['Zeiten', 'Vormittags und am frühen Nachmittag'],
    ['Probestunde', 'Kostenlos und unverbindlich']
  ],
  capsuleQ: 'Kurz gesagt',
  capsule: 'Im KI-Kurs für Rentner und Senioren von Modern Age Coders lernen ältere Erwachsene aus ganz Deutschland live online, auf Englisch. Ein fester Mentor aus Indien erklärt langsam und in Ihrem Tempo, wie KI-Chatbots funktionieren, wofür sie taugen, wo sie irren und wie Sie Ihre Daten schützen. Zur Wahl stehen eine Runde von fünfzehn bis zwanzig Personen oder Einzelunterricht, bevorzugt vormittags.',

  picks: {
    eyebrow: 'Passende Kurse',
    h2: 'Drei Kurse für den Einstieg in die KI',
    lede: 'Einer für den sicheren Umgang mit KI-Werkzeugen, einer für alle, die Tabellen und Zahlen mit KI auswerten wollen, und einer für alle, die neugierig geworden sind und selbst programmieren möchten.',
    items: [
      { course: 'ai-tools-mastery-complete-college', code: 'KKR / 01', title: 'KI-Werkzeuge sicher nutzen', alt: 'Kursbild KI-Werkzeuge für Erwachsene', note: 'Für Erwachsene ab 18, ohne Vorkenntnisse. Wie man Fragen an einen Chatbot stellt, Antworten prüft und kleine Abläufe vereinfacht, in ruhigem Tempo.' },
      { course: 'data-and-ai-analytics-for-non-programmers-course', code: 'KKR / 02', title: 'Daten und KI ohne Programmieren', alt: 'Kursbild Daten und KI ohne Programmierkenntnisse', note: 'Ohne Programmiererfahrung. Tabellen, Diagramme und kleine Auswertungen, etwa für den Verein oder die Familienchronik.' },
      { course: 'python-programming-masterclass-zero-to-advanced-college', code: 'KKR / 03', title: 'Python von Grund auf', alt: 'Kursbild Python für Erwachsene', note: 'Für alle, die wissen möchten, wie Programme gebaut sind. Von der ersten Zeile an, ohne Mathematikvorwissen.' }
    ]
  },

  sections: [
    {
      id: 'zahlen',
      eyebrow: 'Destatis und Eurostat',
      h2: 'Wie viele Menschen zwischen 65 und 74 nutzen schon Internet und KI?',
      lede: 'Online sind fast alle, KI nutzen bisher wenige. Die amtlichen Zahlen für 2025 zeigen, dass ältere Menschen in Deutschland beim Internet stark aufgeholt haben und dass bei generativer KI noch fast alles offen ist.',
      body: [
        { kind: 'table', numCols: [1], caption: 'Menschen zwischen 65 und 74 Jahren in Deutschland, 2025', head: ['Was', 'Anteil', 'Quelle'], rows: [
          ['haben das Internet noch nie genutzt', '10 Prozent', 'Destatis'],
          ['suchen online nach Informationen über Waren und Dienstleistungen', '65 Prozent', 'Destatis'],
          ['sind in sozialen Netzwerken aktiv', '25 Prozent (2021: 15 Prozent)', 'Destatis'],
          ['haben in drei Monaten generative KI genutzt', '7,5 Prozent (EU-27: 6,5 Prozent)', 'Eurostat']
        ] },
        { kind: 'source', html: 'Quellen: Statistisches Bundesamt (Destatis), Zahl der Woche Nr. 09 vom 24. Februar 2026, Pressemitteilung Nr. N014 vom 2. März 2026 und Tabelle "Ausgewählte Internetaktivitäten von Personen nach Alter" (Stand 23. September 2026); Eurostat, Datensatz isoc_ai_iaiu, Jahr 2025, Anteil an allen Personen der Altersgruppe. Abgerufen am 3. November 2026.' },
        { kind: 'p', mt: true, html: 'Zum Vergleich: Laut Destatis waren 2025 gut 3 Prozent aller Menschen zwischen 16 und 74 Jahren noch nie im Internet, das sind knapp 2,1 Millionen; 2021 lag der Anteil noch bei 6 Prozent. Generative KI hat laut Eurostat 2025 knapp ein Drittel der 16- bis 74-Jährigen in Deutschland genutzt, in der Altersgruppe 55 bis 64 waren es gut 17 Prozent.' },
        { kind: 'table', mt: true, numCols: [1], caption: 'Warum Menschen zwischen 65 und 74 in Deutschland keine generative KI nutzen, 2025', head: ['Genannter Grund', 'Anteil an allen der Altersgruppe'], rows: [
          ['Kein Bedarf', '60 Prozent'],
          ['Bedenken wegen Datenschutz, Sicherheit oder Schutz', '8 Prozent'],
          ['Wusste nicht, wie man es benutzt', '5 Prozent'],
          ['Wusste nicht, dass es so etwas gibt', '3 Prozent']
        ] },
        { kind: 'source', html: 'Quelle: Eurostat, Datensatz isoc_ai_iaiuxr (Gründe, generative KI nicht zu nutzen), Jahr 2025, Deutschland, auf ganze Zahlen gerundet von uns. Die vier Anteile zählen wir bewusst nicht zusammen; der Rest der Altersgruppe nutzt KI bereits oder nannte andere Gründe.' },
        { kind: 'p', mt: true, html: '"Kein Bedarf" ist eine völlig vernünftige Antwort. Unser Kurs will niemanden überreden. Er soll Ihnen helfen, selbst zu beurteilen, ob und wofür Sie KI brauchen, und, falls ja, sie so zu nutzen, dass Sie die Kontrolle behalten. Gerade wer Bedenken beim Datenschutz hat, ist hier richtig: Diese Bedenken nehmen wir ernst und machen sie konkret.' }
      ]
    },
    {
      id: 'irrtum',
      tint: 'tint',
      eyebrow: 'Ein kleines Experiment',
      h2: 'Warum klingt ein Chatbot so sicher, auch wenn er sich irrt?',
      lede: 'Weil er nicht nachschlägt, was wahr ist, sondern fortsetzt, was wahrscheinlich klingt. Das Bundesamt für Sicherheit in der Informationstechnik (BSI) beschreibt es so: Statt zuzugeben, dass eine Antwort fehlt, erfindet die KI oftmals Inhalte, sie "halluziniert". Mit einem winzigen Programm, das wir selbst geschrieben haben, lässt sich das in fünf Minuten zeigen.',
      body: [
        { kind: 'code', label: 'Ein Mini-Sprachmodell aus vier Sätzen', lang: 'Python', code: PY, note: 'Ausgabe, von uns mit Python 3 ausgeführt: <code>der bus nach berlin faehrt um neun uhr .</code> und dann <code>{\'neun\': 2, \'zehn\': 1, \'acht\': 1}</code>. Umlaute haben wir im Code weggelassen, damit er auf jedem Rechner gleich läuft.' },
        { kind: 'p', mt: true, html: 'Das Programm kennt nur vier erfundene Fahrplansätze. Es zählt, welches Wort wie oft auf welches folgt, und wählt dann immer das häufigste. Gefragt nach "der bus nach berlin", antwortet es flüssig: <em>fährt um neun Uhr</em>. Dabei steht in seinen Sätzen gar kein Bus nach Berlin. Die Neun gewinnt nur, weil sie nach dem Wort "um" zweimal vorkommt und die anderen Zahlen je einmal.' },
        { kind: 'table', mt: true, numCols: [], caption: 'Was das Experiment über echte Chatbots zeigt (unsere Einordnung)', head: ['Im Mini-Modell', 'Bei einem großen Chatbot'], rows: [
          ['Vier Sätze als Grundlage', 'Riesige Textmengen bis zu einem Stichtag'],
          ['Das häufigste nächste Wort', 'Das wahrscheinlichste nächste Wort, viel feiner berechnet'],
          ['Ein falscher Fahrplan, flüssig formuliert', 'Eine falsche Auskunft, höflich und überzeugend formuliert'],
          ['Kein Hinweis auf Unsicherheit', 'Oft ebenfalls kein Hinweis, wenn die Grundlage fehlt']
        ] },
        { kind: 'ol', mt: true, items: [
          '<strong>Fragen Sie nach der Quelle.</strong> Bitten Sie den Chatbot, zu sagen, woher eine Angabe stammt, und prüfen Sie diese Quelle selbst.',
          '<strong>Prüfen Sie Wichtiges doppelt.</strong> Termine, Adressen und Zahlen schlagen Sie bei der zuständigen Stelle nach, so wie es das BSI mit dem Faktencheck empfiehlt.',
          '<strong>Fragen Sie ein zweites Mal anders.</strong> Bekommen Sie auf dieselbe Frage zwei verschiedene Antworten, wissen Sie, dass der Chatbot rät.'
        ] }
      ]
    },
    {
      id: 'sicher',
      eyebrow: 'Sicherheit',
      h2: 'Wie nutze ich KI-Anwendungen sicher?',
      lede: 'Das BSI hat dafür eine Transparenz-Checkliste veröffentlicht. Wer eine KI-Anwendung zu allen acht Punkten geprüft hat, kann laut BSI entscheiden, ob er oder sie die Anwendung benutzen möchte. Die Antworten stehen meist auf der Website des Anbieters oder in dessen Allgemeinen Geschäftsbedingungen.',
      body: [
        { kind: 'table', numCols: [], caption: 'Die acht Punkte der BSI-Checkliste, in drei Gruppen', head: ['Gruppe', 'Punkt', 'Ihre Frage an die Anwendung'], rows: [
          ['Sicherheit Ihrer persönlichen Daten', 'Umgang mit Ihren Daten', 'Werden meine Eingaben weitergegeben oder zum Training verwendet?'],
          ['Sicherheit Ihrer persönlichen Daten', 'Zugriffsberechtigungen', 'Worauf darf die App zugreifen, etwa Postfach, Kalender oder Kamera?'],
          ['Fähigkeiten und Limitationen', 'Zweckbestimmung', 'Wofür ist die Anwendung gebaut, und wofür nicht?'],
          ['Fähigkeiten und Limitationen', 'Wissensstand', 'Bis zu welchem Datum reichen ihre Trainingsdaten?'],
          ['Fähigkeiten und Limitationen', 'Hinweise zur Nutzung', 'Gibt es eine Hilfe oder Anleitung für den richtigen Gebrauch?'],
          ['Eigenschaften der Anwendung', 'Anbieterinformationen', 'Wer steckt dahinter, und an wen gehen meine Eingaben?'],
          ['Eigenschaften der Anwendung', 'Lizenzmodell', 'Was kann die kostenfreie Version, was nur die kostenpflichtige?'],
          ['Eigenschaften der Anwendung', 'Aktualisierungen', 'Was ändert sich nach einem Update?']
        ] },
        { kind: 'source', html: 'Quelle: Bundesamt für Sicherheit in der Informationstechnik, "Die Transparenz-Checkliste für KI-Anwendungen", gelesen am 3. November 2026. Die Fragen in der rechten Spalte haben wir aus den Empfehlungen des BSI in eigenen Worten formuliert. Modern Age Coders ist mit dem BSI nicht verbunden.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Wenig preisgeben', p: 'Das BSI rät, so wenig sensible Daten wie möglich mit einer KI-Anwendung zu teilen. Im Kurs üben wir, Fragen so zu stellen, dass weder Name noch Adresse noch Kontonummer darin vorkommen.' },
          { h3: 'Links prüfen', p: 'Links und Anhänge, die eine KI-Anwendung ausgibt, sollten laut BSI vor dem Öffnen genau geprüft werden. Wir zeigen Ihnen, woran man eine Adresse im Browser erkennt.' },
          { h3: 'Nachrichten prüfen', p: 'Das BSI weist darauf hin, dass Sprachmodelle helfen können, betrügerische E-Mails glaubwürdiger klingen zu lassen. Gute Sprache ist deshalb kein Beweis für Echtheit mehr; der Absender und der Weg der Nachricht zählen.' }
        ] },
        { kind: 'p', mt: true, html: 'Eine Grenze ziehen wir im Kurs bewusst: Für Fragen zu Gesundheit, Geld oder Recht ist ein Chatbot nicht der richtige Ratgeber. Dafür gibt es Ärztinnen, Banken, Beratungsstellen und Fachleute. Wir zeigen, wofür KI im Alltag gut taugt, zum Beispiel einen Brief zu entwerfen, einen Fachbegriff zu erklären oder eine Urlaubskarte zu übersetzen.' }
      ]
    },
    {
      id: 'recht',
      eyebrow: 'Die KI-Verordnung der EU',
      h2: 'Muss mir ein Chatbot sagen, dass er eine KI ist?',
      lede: 'Ja, nach der KI-Verordnung der EU in der Regel schon. Die Verordnung (EU) 2024/1689 wurde am 13. Juni 2024 in Brüssel unterzeichnet. Ihr Artikel 50 regelt Transparenzpflichten, die gerade für Laien wichtig sind.',
      body: [
        { kind: 'table', numCols: [], caption: 'Zwei Transparenzpflichten aus Artikel 50 der KI-Verordnung', head: ['Absatz', 'Was er verlangt', 'Was das für Sie heißt'], rows: [
          ['Artikel 50 Absatz 1', 'KI-Systeme für die direkte Interaktion mit Menschen müssen so gebaut sein, dass die Menschen informiert werden, dass sie mit einem KI-System interagieren, außer es ist offensichtlich.', 'Ein Chat-Fenster im Kundendienst muss erkennbar machen, dass Sie mit einer Maschine schreiben.'],
          ['Artikel 50 Absatz 4', 'Wer mit KI ein Deepfake erzeugt, also täuschend echte Bilder, Töne oder Videos, muss offenlegen, dass die Inhalte künstlich erzeugt oder manipuliert wurden.', 'Gefälschte Bilder oder Stimmen sollen gekennzeichnet sein; fehlt der Hinweis, ist Vorsicht angebracht.']
        ] },
        { kind: 'source', html: 'Quelle: Verordnung (EU) 2024/1689, deutsche Fassung im Amtsblatt, abgerufen über das Amt für Veröffentlichungen der EU am 3. November 2026. Laut Artikel 113 gilt die Verordnung ab dem 2. August 2026, einzelne Kapitel schon früher, die Kapitel I und II ab dem 2. Februar 2025. Wir geben den veröffentlichten Text wieder; spätere Änderungen der EU können Termine verschieben. Dies ist keine Rechtsberatung.' },
        { kind: 'p', mt: true, html: 'Die Verordnung nimmt vor allem Anbieter und Betreiber in die Pflicht, nicht Sie als Nutzerin oder Nutzer. Für den Alltag heißt das: Sie haben ein Recht darauf zu wissen, wann eine Maschine mit Ihnen spricht. Im Kurs üben wir, solche Hinweise zu finden, etwa einen kleinen Schriftzug unter dem Chat-Fenster.' }
      ]
    },
    {
      id: 'kurs',
      eyebrow: 'Der Kurs',
      h2: 'Wie läuft ein KI-Kurs für Seniorinnen und Senioren bei uns ab?',
      lede: 'In Ruhe, live und mit einem Menschen, der Ihre Fragen beantwortet. Es gibt keine aufgezeichneten Videos und keinen Zeitdruck. Jede Stunde beginnt mit dem, was Sie seit dem letzten Mal ausprobiert haben.',
      body: [
        { kind: 'table', numCols: [], caption: 'Die ersten acht Wochen (unser Plan, angepasst an Ihr Tempo)', head: ['Woche', 'Thema', 'Sie probieren aus'], rows: [
          ['1 und 2', 'Was ist KI, was ist ein Chatbot?', 'eine erste Frage stellen und die Antwort laut vorlesen'],
          ['3 und 4', 'Warum Chatbots irren', 'das Experiment mit dem Mini-Modell und eine Antwort nachprüfen'],
          ['5 und 6', 'Daten schützen', 'die Einstellungen einer Anwendung anhand der BSI-Checkliste durchgehen'],
          ['7 und 8', 'KI im eigenen Alltag', 'einen Brief entwerfen, einen Begriff erklären lassen, einen Text übersetzen']
        ] },
        { kind: 'p', mt: true, html: 'Für Erwachsene sind auch Werkzeuge erlaubt, die erst ab 18 Jahren freigegeben sind; welche Anwendung Sie nutzen, entscheiden Sie selbst. Wir lesen gemeinsam, was der jeweilige Anbieter in seinen Bedingungen über Mindestalter, gespeicherte Unterhaltungen und kostenpflichtige Varianten schreibt, damit Sie wissen, worauf Sie sich einlassen.' },
        { kind: 'p', html: 'Der Unterricht ist auf Englisch. Für viele Menschen im Ruhestand ist das ein willkommenes Training: Sie frischen Ihr Englisch auf und lernen gleichzeitig die Wörter, mit denen die meisten KI-Anwendungen ohnehin beschriftet sind, etwa <em>prompt</em>, <em>chat</em> oder <em>settings</em>.' }
      ]
    },
    {
      id: 'zeiten',
      eyebrow: 'Unterrichtszeiten',
      h2: 'Zu welchen Uhrzeiten findet der Kurs statt?',
      lede: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche.',
      body: [
        { kind: 'table', numCols: [], caption: 'Beispielzeiten bei Tageslicht, deutsche und indische Zeit', head: ['Bei Ihnen in Deutschland', 'Beim Mentor im Winter (bis 27. März 2027)', 'Beim Mentor im Sommer (ab 28. März 2027)'], rows: [
          ['09:00', '13:30', '12:30'],
          ['11:00', '15:30', '14:30'],
          ['14:00', '18:30', '17:30']
        ] },
        { kind: 'source', html: 'In Deutschland gilt nach dem Einheiten- und Zeitgesetz im Winter die MEZ (UTC+1) und im Sommer die MESZ (UTC+2); die Uhren wurden am 25. Oktober 2026 zurückgestellt und werden am 28. März 2027 wieder vorgestellt. Indien stellt nie um und hat UTC+5:30, der Mentor ist Ihnen also im Winter viereinhalb, im Sommer dreieinhalb Stunden voraus. Die Zeiten sind Beispiele, keine festen Termine.' },
        { kind: 'p', mt: true, html: 'Viele Teilnehmende im Ruhestand mögen den späten Vormittag: Dann ist der Kopf frisch, und beim Mentor ist es früher Nachmittag. Einzelstunden lassen sich auch um Arzttermine oder Enkelbesuche herum legen.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Fortschritt',
    h2: 'Woran Sie merken, dass Sie sicherer werden',
    lede: 'Unsere eigenen Stufen für Menschen, die im Ruhestand mit KI beginnen.',
    table: { caption: 'Vier Stufen (unsere)', head: ['Stufe', 'Typischer Zeitraum', 'Sie können'], rows: [
      ['1. Fragen stellen', 'erste Wochen', 'einem Chatbot eine klare Frage stellen und die Antwort einordnen'],
      ['2. Prüfen', 'nach etwa einem Monat', 'eine Antwort mit einer zuverlässigen Quelle vergleichen'],
      ['3. Schützen', 'nach etwa zwei Monaten', 'Einstellungen und Bedingungen einer Anwendung anhand der Checkliste prüfen'],
      ['4. Gezielt einsetzen', 'nach etwa drei Monaten', 'KI für eigene Aufgaben nutzen und wissen, wann man es lieber lässt']
    ] },
    left: { h3: 'Für Sie', ps: [
      'Es gibt keine dummen Fragen. Wenn etwas zu schnell geht, sagen Sie einfach "slower, please". Der Mentor wiederholt gern.',
      'Notieren Sie sich nach jeder Stunde einen Satz, den Sie behalten möchten.'
    ] },
    right: { h3: 'Für Angehörige', ps: [
      'Sie können bei der ersten Stunde gern dabei sein und bei der Technik helfen. Danach lernen viele lieber allein.',
      'Fragen Sie nicht, ob es geklappt hat, sondern lassen Sie sich zeigen, wie man eine Antwort prüft.'
    ] }
  },

  catalogue: {
    eyebrow: 'Weitere Kurse',
    h2: 'Neun weitere Kurse für Erwachsene',
    lede: 'Live online, auf Englisch, mit festem Mentor, in der Gruppe oder allein.',
    bands: [
      { num: 'I', h3: 'Gestalten', sub: 'ab 13, für Erwachsene geeignet', courses: [
        { code: 'KKR / GESTALT / 01', slug: 'canva-ai-design-masterclass', title: 'Canva und KI-Design', blurb: 'Einladungen, Plakate und Fotobücher gestalten.' },
        { code: 'KKR / GESTALT / 02', slug: 'html-css-course-for-beginners-build-real-websites', title: 'Eine eigene Webseite', blurb: 'Für Verein, Hobby oder Familie.' },
        { code: 'KKR / GESTALT / 03', slug: 'data-analysis-mastery-course-college', title: 'Datenanalyse', blurb: 'Tabellen auswerten, Schritt für Schritt.' }
      ] },
      { num: 'II', h3: 'KI verstehen', sub: 'ab 18 Jahren', courses: [
        { code: 'KKR / KI / 01', slug: 'complete-generative-ai-masterclass-college', title: 'Generative KI von innen', blurb: 'Wie Sprachmodelle entstehen und arbeiten.' },
        { code: 'KKR / KI / 02', slug: 'artificial-intelligence-complete-masterclass-college', title: 'Künstliche Intelligenz', blurb: 'Suche, Logik und Agenten, die Grundlagen.' },
        { code: 'KKR / KI / 03', slug: 'ai-ml-masterclass-complete-college', title: 'KI und maschinelles Lernen', blurb: 'Mit Python eigene Modelle bauen.' }
      ] },
      { num: 'III', h3: 'Selbst programmieren', sub: 'ab 18 Jahren', courses: [
        { code: 'KKR / CODE / 01', slug: 'python-ai-automation-masterclass-college', title: 'Python für Alltagsaufgaben', blurb: 'Kleine Skripte, die Arbeit abnehmen.' },
        { code: 'KKR / CODE / 02', slug: 'python-web-development-django-flask-course', title: 'Webanwendungen mit Python', blurb: 'Für alle, die tiefer einsteigen.' },
        { code: 'KKR / CODE / 03', slug: 'mysql-database-complete-masterclass-college', title: 'Datenbanken', blurb: 'Sammlungen und Listen sauber ordnen.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'So lernen Sie',
    h2: 'Unterricht in Ruhe, live und persönlich',
    lede: 'Zweimal pro Woche eine Stunde mit demselben Mentor. Sie sehen seinen Bildschirm, er auf Wunsch Ihren, und jede Frage wird beantwortet, bevor es weitergeht.',
    slots: [
      { time: 'Vormittags', l: 'Zwischen etwa neun und zwölf Uhr.' },
      { time: 'Früher Nachmittag', l: 'Nach dem Mittagessen, vor dem Kaffee.' },
      { time: 'Einzeln', l: 'Ein Termin, der zu Ihrer Woche passt.' }
    ],
    cells: [
      { h3: 'Ein Mensch', p: 'Kein Video, sondern ein Mentor, der antwortet.' },
      { h3: 'Langsames Englisch', p: 'Kurze Sätze, Wichtiges wird aufgeschrieben.' },
      { h3: 'Große Schrift', p: 'Wir vergrößern Bildschirm und Text, wann immer Sie möchten.' },
      { h3: 'Sicher üben', p: 'Erst mit Beispielen, nie mit Ihren echten Daten.' },
      { h3: 'Kein Druck', p: 'Keine Prüfungen und keine Noten.' },
      { h3: 'Gruppe oder allein', p: 'Fünfzehn bis zwanzig Personen oder Einzelunterricht.' }
    ]
  },

  projectsH2: 'Was Lernende bei uns bauen',
  projectsLede: 'Unsere Lernenden aller Altersgruppen bauen kleine Programme, Webseiten und Auswertungen. Eine Auswahl unten, mehr auf <a class="ag-inline-link" href="/student-labs">Student labs</a> (auf Englisch).',
  reviewsLede: 'Stimmen von Lernenden und Familien auf Google, unverändert im englischen Original.',

  fees: {
    h2: 'Kosten für Teilnehmende in Deutschland',
    lede: 'Sie zahlen monatlich für acht Live-Stunden. Die Beträge zeigen wir in Euro, umgerechnet mit dem Referenzkurs der Europäischen Zentralbank. Die Abbuchung erfolgt in US-Dollar, und Ihre Bank übernimmt den Wechsel; deshalb kann der Betrag auf dem Kontoauszug geringfügig anders aussehen.',
    free: ['Eine kostenlose Probestunde', 'Hilfe beim ersten Einrichten', 'Keine Zahlungsdaten nötig'],
    group: ['Fünfzehn bis zwanzig Erwachsene', 'Ein fester Mentor', 'Zwei Stunden pro Woche', 'Monatlich kündbar'],
    one: ['Sie allein mit dem Mentor', 'Ihr Tempo, Ihre Fragen', 'Termine nach Absprache']
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    h2: 'KI-Kurs für Rentner und Senioren: häufige Fragen',
    items: [
      { q: 'Findet der Unterricht auf Deutsch statt?', a: 'Nein, der Kurs ist live und ausschließlich auf Englisch. Für viele Teilnehmende im Ruhestand ist das ein Gewinn: Sie lernen KI kennen und frischen zugleich ihr Englisch auf, in dem die meisten KI-Anwendungen ohnehin beschriftet sind. Der Mentor spricht langsam, schreibt Wichtiges auf und richtet sich nach Ihrem Tempo und Ihrer Aussprache.' },
      { q: 'Bin ich nicht zu alt für künstliche Intelligenz?', a: 'Nein. Laut Eurostat haben 2025 in Deutschland 7,5 Prozent der 65- bis 74-Jährigen generative KI genutzt, etwas mehr als im EU-Schnitt. Es ist also noch früh, und Sie sind nicht spät dran. Wer E-Mails schreibt und im Internet sucht, bringt alles mit, was man braucht.' },
      { q: 'Welche Vorkenntnisse brauche ich?', a: 'Sie sollten einen Computer oder ein Tablet einschalten, eine E-Mail lesen und eine Internetseite aufrufen können. Alles andere zeigen wir Ihnen in Ruhe.' },
      { q: 'Kann ich einem Chatbot vertrauen?', a: 'Nur so weit, wie Sie seine Antwort prüfen können. Das BSI weist darauf hin, dass KI-Anwendungen Inhalte erfinden können, wenn ihnen die Grundlage fehlt. Wichtige Angaben sollten Sie deshalb immer bei einer zuverlässigen Stelle nachprüfen.' },
      { q: 'Welche Daten sollte ich einem Chatbot nicht geben?', a: 'Laut BSI so wenig sensible Daten wie möglich. Dazu gehören Passwörter, Kontonummern, Ausweisdaten und vertrauliche Informationen über andere Menschen. Im Kurs üben wir, Fragen so zu formulieren, dass solche Angaben gar nicht nötig sind.' },
      { q: 'Muss ein Chatbot sagen, dass er eine Maschine ist?', a: 'Nach Artikel 50 der KI-Verordnung (EU) 2024/1689 müssen KI-Systeme, die direkt mit Menschen sprechen, in der Regel erkennbar machen, dass man mit einer KI interagiert. Die Verordnung gilt laut Artikel 113 grundsätzlich ab dem 2. August 2026. Dies ist eine Erklärung, keine Rechtsberatung.' },
      { q: 'Hilft mir der Kurs bei Fragen zu Gesundheit oder Geld?', a: 'Nein, und wir empfehlen auch nicht, solche Fragen einem Chatbot zu überlassen. Dafür sind Fachleute zuständig. Wir zeigen Ihnen, wofür KI im Alltag gut taugt und wo ihre Grenzen liegen.' },
      { q: 'Wann finden die Stunden statt?', a: 'Unter der Woche oder am Wochenende, flexibel: Wählen Sie eine Gruppe, oder für einen ganz persönlichen Plan den Einzelunterricht zu einer Zeit, die Ihrer Familie passt, am Wochenendvormittag oder an Nachmittagen unter der Woche. Beliebt sind Vormittage: 11:00 Uhr in Deutschland ist im Winter 15:30 Uhr beim Mentor in Indien.' },
      { q: 'Was brauche ich an Technik?', a: 'Einen Laptop, Computer oder ein Tablet mit Kamera, eine Internetverbindung und am besten Kopfhörer. Bei der Einrichtung des Videoprogramms helfen wir in der Probestunde.' },
      { q: 'Wie wird bezahlt?', a: 'Monatlich. Die Beträge sehen Sie auf dieser Seite in Euro, berechnet mit dem Referenzkurs der Europäischen Zentralbank; abgebucht wird in US-Dollar, und Ihre Bank rechnet um. Die erste Stunde ist kostenlos.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Weitere Seiten',
    h2: 'Weiterlesen',
    lede: 'Weitere Seiten für Lernende in Deutschland, meist auf Englisch.',
    items: [
      { href: '/coding-classes-in-germany', label: 'Coding classes in Germany', p: 'Alle unsere Angebote für Deutschland.' },
      { href: '/ai-and-machine-learning-classes-in-germany', label: 'AI and ML in Germany', p: 'Tiefer in KI und maschinelles Lernen.' },
      { href: '/learn-to-think-not-copy-ai-germany', label: 'Think, not copy AI', p: 'Selbst denken, auch wenn KI mitredet.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Wie eine Live-Stunde aussieht.' },
      { href: '/courses', label: 'All courses', p: 'Alle Kurse auf einer Seite.' },
      { href: '/student-labs', label: 'Student labs', p: 'Arbeiten unserer Lernenden.' }
    ]
  },

  start: {
    h2: 'Eine kostenlose Probestunde vereinbaren',
    lede: 'In der Probestunde richten wir gemeinsam die Technik ein, Sie stellen einem Chatbot Ihre erste Frage, und wir prüfen die Antwort zusammen. Danach entscheiden Sie in Ruhe, ob und wie Sie weitermachen.',
    readFirst: 'Wer vorher lesen möchte: <a class="ag-inline-link" href="/how-we-teach">How we teach</a> beschreibt den Unterricht, <a class="ag-inline-link" href="/courses">All courses</a> zeigt alle Kurse (beide auf Englisch).',
    note: 'Unsere Mentoren unterrichten live aus Indien und ausschließlich auf Englisch. Gern helfen auch Angehörige bei der Anmeldung; per WhatsApp antworten wir am schnellsten.',
    formNote: 'Kostenlos, unverbindlich und ohne Zahlungsdaten.'
  },

  footer: {
    cols: [
      { h4: 'Für den Einstieg', links: [
        { href: '/courses/ai-tools-mastery-complete-college', label: 'KI-Werkzeuge' },
        { href: '/courses/data-and-ai-analytics-for-non-programmers-course', label: 'Daten ohne Code' },
        { href: '/courses/python-programming-masterclass-zero-to-advanced-college', label: 'Python' },
        { href: '/courses', label: 'Alle Kurse' }
      ] },
      { h4: 'Deutschland', links: [
        { href: '/coding-classes-in-germany', label: 'Coding classes in Germany' },
        { href: '/ai-and-machine-learning-classes-in-germany', label: 'KI in Deutschland' },
        { href: '/learn-to-think-not-copy-ai-germany', label: 'Selbst denken' },
        { href: '/student-labs', label: 'Projekte' }
      ] }
    ],
    bottomRight: 'Wahrscheinlich ist nicht dasselbe wie wahr'
  },

  personalityCss: `
.ag-root.ag-kkr .ag-hero h1 { letter-spacing: -0.006em; line-height: 1.15; }
.ag-root.ag-kkr .ag-capsule { border-left-width: 4px; font-size: 1.06rem; line-height: 1.65; }
.ag-root.ag-kkr .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-kkr .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-kkr .ag-table td { line-height: 1.6; }
`,

  dossier: {
    curriculumAuthority: 'Destatis (Zahl der Woche 9/2026, Pressemitteilung N014/2026, IKT table by age 2025); Eurostat isoc_ai_iaiu and isoc_ai_iaiuxr (2025); BSI pages on generative AI and the transparency checklist; Regulation (EU) 2024/1689 via the EU Publications Office; Einheiten- und Zeitgesetz. Read 3 November 2026. Example code our own.',
    localProject: 'Likely is not true: an original Python word-pair model trained on four invented timetable sentences that answers "der bus nach berlin faehrt um neun uhr ." although no bus to Berlin is in its text, because "neun" follows "um" twice; run with python3 -I. Lesson family: a language model continues what is likely, not what is true.',
    requiredMentions: ['der bus nach berlin faehrt um neun uhr .', 'Ein Mini-Sprachmodell aus vier Sätzen', '7,5 Prozent (EU-27: 6,5 Prozent)', '25 Prozent (2021: 15 Prozent)', 'Datensatz isoc_ai_iaiuxr', 'Die acht Punkte der BSI-Checkliste', 'Artikel 50 Absatz 4', 'am 13. Juni 2024 in Brüssel unterzeichnet', 'Wahrscheinlich ist nicht dasselbe wie wahr'],
    sources: [
      { claim: 'Offliners 2025 by age, including 10 percent of 65 to 74 year olds.', url: 'https://www.destatis.de/DE/Presse/Pressemitteilungen/Zahl-der-Woche/2026/PD26_09_p002.html' },
      { claim: 'Social media use of 65 to 74 year olds, 15 percent in 2021 to 25 percent in 2025.', url: 'https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/03/PD26_N014_63.html' },
      { claim: 'Generative AI use and reasons for non-use by age, Germany and EU, 2025.', url: 'https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/isoc_ai_iaiuxr' },
      { claim: 'BSI advice on generative AI and the eight-point transparency checklist.', url: 'https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Technologien_sicher_gestalten/Kuenstliche-Intelligenz/KI-Transparenz/ki-transparenz_node.html' },
      { claim: 'AI Act Article 50 transparency duties and Article 113 dates.', url: 'http://publications.europa.eu/resource/celex/32024R1689' }
    ],
    rejectedClaims: [
      'German-language teaching: English only.',
      'Health, money or legal advice: refused; the page sends those questions to professionals.',
      'Scam stories or fraud figures: none used; only the BSI\'s own sentence that language models can make phishing more convincing.',
      'Gender figures from Eurostat: left out by rule.',
      'Summing the reasons for non-use: refused.',
      'Claims about any vendor\'s data training policy: not stated; learners read the terms themselves in class.'
    ]
  }
};
