# Netherlands cluster: progress tracker

Spec: `docs/superpowers/specs/2026-09-07-netherlands-cluster-design.md`
Plan: `docs/superpowers/plans/2026-09-07-netherlands-cluster.md`
Owner instruction 2026-09-07: build one page at a time, maximum quality, do not wait for approval between pages. One commit per page.

Per-page pipeline: research (8+ place facts, sourced) -> collision check (dossier strings + trap) -> `content/nl/<slug>.js` -> `node scripts/nl/build.js <slug>` -> `node scripts/nl/check.js <slug>` -> link down from parent -> record here -> commit `NL cluster: <slug> (<type>)`.

## Queue

Phase 1 (proof cities): amstelveen · amsterdam · eindhoven · the-hague · almere · utrecht · rotterdam · ai-and-python-academy-netherlands (ag-)
Phase 2 (provinces): noord-holland · zuid-holland · utrecht-province · noord-brabant · gelderland · overijssel · limburg · groningen-province · friesland · drenthe · flevoland · zeeland
Phase 3 (cities): groningen · tilburg · breda · nijmegen · arnhem · apeldoorn · haarlem · haarlemmermeer · zaanstad · amersfoort · enschede · den-bosch · zwolle · zoetermeer · leiden · leeuwarden · maastricht · ede · dordrecht · westland · alphen-aan-den-rijn · alkmaar · delft · emmen · deventer · venlo · uithoorn
Phase 4 (districts): amsterdam x8 (centrum, noord, oost, zuid, west, nieuw-west, zuidoost, weesp) · rotterdam x8 (centrum, charlois, delfshaven, feijenoord, hillegersberg-schiebroek, kralingen-crooswijk, prins-alexander, ijsselmonde) · the-hague x8 (centrum, escamp, haagse-hout, laak, leidschenveen-ypenburg, loosduinen, scheveningen, segbroek) · eindhoven x6 (centrum, gestel, stratum, strijp, woensel-noord, woensel-zuid)
Phase 5 (towns, kill-gated): helmond · purmerend · oss · hilversum · sittard-geleen · nissewaard · heerlen · lelystad · meierijstad · hengelo · schiedam · leidschendam-voorburg · roosendaal · gouda · vlaardingen · hoorn · almelo · veenendaal · assen · bergen-op-zoom · velsen · capelle-aan-den-ijssel · wassenaar · voorschoten · oegstgeest · rijswijk · diemen · middelburg · roermond
Phase 6 (ag- doors): academy spokes x6 (amsterdam, eindhoven, the-hague, utrecht, rotterdam, groningen) · topic doors x7 · age doors x5 · language doors x6

## Done

| # | Slug | Type | Words | Worst overlap | AI H2 used | Trap used | Commit |
|---|------|------|-------|---------------|------------|-----------|--------|
| 1 | coding-classes-in-amstelveen (amv, #40641A) | city | 4,605 | 0.6% vs madha | If an AI can write the cohort model in ten seconds, why should a child in Amstelveen learn to? | Stock vs flow (arrivals fall 46%, residents rise 24% under 56% retention) | 79794f0f |
| 2 | coding-classes-in-amsterdam (ams, #822A36) | city, hub for 8 districts | 4,918 | 2.3% vs amstelveen | Will an Amsterdam teenager who can ask an AI for the answer ever need to build the model themselves? | Two instruments, one disagreement rate (33% national vs 20% Amsterdam higher test advice, reproduced from opposite causes) | eae63b28 |
| 3 | coding-classes-in-eindhoven (ehv, #005351) | city, hub for 6 districts | 4,693 | 3.8% vs amsterdam | Should a child in Eindhoven still learn to code when the parents' employer is teaching machines to write it? | Compounding uncertainty in a chain of three ratios (20,000 workplaces to 1,700 to 10,500 homes) | b36449ae |
| 4 | coding-classes-in-the-hague (dhg, #39588A) | city, hub for 8 districts | 5,404 | 1.7% vs amsterdam (was 7.5% before 12 connective sentences were rewritten) | When the ministries in The Hague are buying AI by the department, why teach a child here to write code? | A category with a horizon: Surinamese origin counted for two generations, community on its fourth (926 vs 260) | 2eb6fc33 |
| 5 | coding-classes-in-almere (alm, #583D00) | city | 4,999 | 2.0% vs eindhoven | Does an Almere child still need to write code when an AI can say in one line how far below the sea they live? | A height without its datum: land fixed, NAP fixed, sea rising 20 cm a century (3.36 m to 3.78 m below the sea, 1890 to 2100) | 6f50054b |
| 6 | coding-classes-in-utrecht (utr, #006852) | city | 4,787 | 3.8% vs almere | Utrecht educates a large share of the country's engineers. Why should a ten-year-old here still write code when an AI already can? | A net figure is one equation with two unknowns (20,640 pupils in the schools vs 15,770 from the homes; the station excludes transfers) | c019a6ba |
| 7 | coding-classes-in-rotterdam (rtm, #066374) | city, hub for 8 gebieden | 5,361 | 4.6% vs utrecht | The port already runs on software. Does a Rotterdam child still need to learn to write it, now that AI does too? | Two units, one flow, opposite signs (14.2m TEU up 3.1%, container tonnes down 0.2%, weight per box down 3.2%) | d9a254e5 |
| 8 | ai-and-python-academy-netherlands (ag-nla, #784400) | ag- hub (market) | 5,487 | 2.3% vs ai-and-python-academy-oman (was 30.3% before every borrowed passage was rewritten) | (ag- page: no AI H2; spine = informatica offered by 238/774 havo and 236/761 vwo schools vs the 200m euro Groningen AI factory) | none (ag- pages carry a spine, not a data trap) | 75913eb4 |
| 9 | coding-classes-in-noord-holland (nhl, #8E3A23) | province | 4,354 | 4.2% vs utrecht | A child in Hoorn or Den Helder can ask an AI to rank the province in a second. So why learn to sort it by hand? | A rank is an order, not a distance (places 2 to 4 are 1,920 and 1,777 apart; place 1 is 773,029 ahead) | a0b9ba6e |
| 10 | coding-classes-in-zuid-holland (zhl, #6F5D00) | province | 4,451 | 2.5% vs noord-holland (was 8.3% before 20 recurring sentences were rewritten) | The AI knows the Randstad has eight million people. Why should a child in Gouda learn to count them? | A place with no boundary has no population, only candidates (Randstad 2.56m to 8.59m by definition) | da1baefa |
| 11 | coding-classes-in-utrecht-province (utp, #75446E) | province | 4,394 | 4.4% vs zuid-holland | An AI will tell a child in Amersfoort that Utrecht is the smallest province. Why teach the child to check? | A superlative without its measure is not a fact (12th by total area, 11th by land, 5th by people, 3rd by density) | c8bc668f |
| 12 | coding-classes-in-gelderland (gld, #04510E) | province | 4,460 | 3.5% vs utrecht-province | Ask an AI when Gelderland breaks up for summer and it will give a date. Why should a child in Ede learn to check it? | The ecological trap: a group value no member has (two holiday regions, two split municipalities) | 08129b56 |
| 13 | coding-classes-in-overijssel (ovr, #0D4768) | province | 4,470 | 3.9% vs gelderland | An AI can say in a second how safe the IJssel dikes are. Why should a child in Zwolle learn to compute it? | A return period is a rate, not a countdown (1 in 1,250 per year compounds to 6.20% over 80 years; coast 0.80%) | d1d34e85 |
| 14 | coding-classes-in-limburg (lim, #681944) | province | 4,420 | 4.9% vs gelderland | An AI will say the highest point in the Netherlands is the Vaalserberg. Why should a child in Heerlen learn enough to argue? | A fact about a set depends on the set (Vaalserberg 322.4 m for the European Netherlands; Mount Scenery 870 m for the country since 10 October 2010) | aff02a0e |
| 15 | coding-classes-in-groningen-province (grp, #424076) | province | 4,716 | 3.9% vs noord-brabant | An AI will tell you Huizinge was magnitude 3.6. Why should a child in Delfzijl learn what the six is worth? | A number on a logarithmic scale is a folded number (3.6 vs 3.5 is 41% more energy, not 3%; vs 2.0 it is 251 times; was 6.6% overlap before 13 recurring sentences were rewritten) | f5a07b8d |
| 16 | coding-classes-in-noord-brabant (nbr, #6A2203) | province | 4,712 | 1.9% vs overijssel | An AI will tell a child in Baarle which country the bakery is in. Why should the child learn to count the rings instead? | Inside is a count, not a look (Baarle-Nassau: 22 Belgian exclaves, 7 Dutch counter-exclaves, 1 at Ginhoven; even-odd rule beats the outer-line and any-Belgian-ring rules) | 875d836d |
| 17 | coding-classes-in-friesland (frl, #0D6332) | province | 4,572 | 4.8% vs noord-brabant | An AI knows Friesland and Fryslân are one place. Why should a child in Sneek learn what happens when a program does not? | A name is not an identifier (Friesland became Fryslân on 1 January 1997; a join on the name drops 665,208 people; only a stable code returns +9.1%) | dd1c8515 |
| 18 | coding-classes-in-drenthe (dre, #6A4D01) | province | 4,791 | 1.6% vs friesland | An AI will say the hunebedden are five thousand years old. Why should a child in Borger learn to say 5,075 to 5,375? | A range in is a range out, and there is no year zero (hunebedden 3350 to 3050 BC are 5,075 to 5,375 years old, not 5,376; Python refuses year -3350) | 252c2a20 |
| 19 | coding-classes-in-flevoland (flv, #7D2759) | province | 4,439 | 2.3% vs drenthe | An AI will call Almere the fastest-growing city in the Netherlands. Why should a child in Lelystad learn to ask: since when? | A growth rate is a function of its base year (Almere +63% from 2000, +123% from 1995, +477% from 1986, undefined from 1975) | (this commit) |

## Skipped (kill criterion)

| Slug | Reason |
|------|--------|

## Codes in use (letters only; check `coding-global.css` before assigning)

Reserved by older clusters and NOT available: hmr (Al Hamra), lei (Leicester), mst? free, amr (Al Amarat), adm (Adam), ede? free.
Assigned so far: cg: amv (Amstelveen), ams (Amsterdam), ehv (Eindhoven), dhg (The Hague), alm (Almere), utr (Utrecht), rtm (Rotterdam) · ag: nla (academy hub) · provinces: nhl (Noord-Holland), zhl (Zuid-Holland), utp (Utrecht), gld (Gelderland), ovr (Overijssel), lim (Limburg), grp (Groningen), nbr (Noord-Brabant), dre (Drenthe), flv (Flevoland)

## Open issues

- Pre-flight done 2026-09-07: hub dossier released `Almere` and `Eindhoven` (replaced with `Groep 3 to 5`, `VO student`); `pageTypeOf()` now reads `pageType` from the dossier.
- Group batch size on new pages is `5 to 10` (brand facts, owner ruling 2026-09-03). Older cg- pages still say 5 to 8; do not copy their trust strip.
- Pre-existing, not ours: `check-cluster-uniqueness.js coding-global` reports Leicester vs Birmingham at 12.6% (FAIL line is 12%). Left alone; flag to owner.
- Cluster-wide CSS fixes shipped with page 1 (all live cg- pages benefit): `.cg-pick-tag` and `.cg-price-label` raised to 0.75rem (were under the 12px floor on the 17px root); wrapped `<table>` elements and captions now styled (62 live pages had unstyled tables).
- Phase 1 COMPLETE with page 8 (all seven cities + the academy hub). Owner has not previewed; the preview gate was waived on the owner's instruction to build without waiting.
- ag- pipeline shipped with page 8: `scripts/nl/lib/render-ag.js`, `scripts/nl/register-ag.js`; `build.js`/`check.js` switch on `cluster: 'ag'` in the module. `.ag-source-note` is now defined in `ai-global.css` (the 10 live Oman academy pages used it naked). Facts learned: the secondary-source claim that 55% of schools offer informatica was WRONG; SLO July 2025 says 30.7% havo / 31.0% vwo, 8.9% / 12.6% of candidates.
- Tooling fixes shipped with page 1: `audit-rendered-ag-pages.mjs` counts cg-style picks (class on the img), accepts 4+ picks for cg, and scrolls the page before measuring so lazy thumbnails are not reported broken; Playwright resolved from `../../dashboard3/node_modules` via NODE_PATH in `scripts/nl/check.js`.
