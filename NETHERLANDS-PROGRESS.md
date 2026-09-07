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
| 6 | coding-classes-in-utrecht (utr, #006852) | city | 4,787 | 3.8% vs almere | Utrecht educates a large share of the country's engineers. Why should a ten-year-old here still write code when an AI already can? | A net figure is one equation with two unknowns (20,640 pupils in the schools vs 15,770 from the homes; the station excludes transfers) | (this commit) |

## Skipped (kill criterion)

| Slug | Reason |
|------|--------|

## Codes in use (letters only; check `coding-global.css` before assigning)

Reserved by older clusters and NOT available: hmr (Al Hamra), lei (Leicester), mst? free, amr (Al Amarat), adm (Adam), ede? free.
Assigned so far: amv (Amstelveen), ams (Amsterdam), ehv (Eindhoven), dhg (The Hague)

## Open issues

- Pre-flight done 2026-09-07: hub dossier released `Almere` and `Eindhoven` (replaced with `Groep 3 to 5`, `VO student`); `pageTypeOf()` now reads `pageType` from the dossier.
- Group batch size on new pages is `5 to 10` (brand facts, owner ruling 2026-09-03). Older cg- pages still say 5 to 8; do not copy their trust strip.
- Pre-existing, not ours: `check-cluster-uniqueness.js coding-global` reports Leicester vs Birmingham at 12.6% (FAIL line is 12%). Left alone; flag to owner.
- Cluster-wide CSS fixes shipped with page 1 (all live cg- pages benefit): `.cg-pick-tag` and `.cg-price-label` raised to 0.75rem (were under the 12px floor on the 17px root); wrapped `<table>` elements and captions now styled (62 live pages had unstyled tables).
- Tooling fixes shipped with page 1: `audit-rendered-ag-pages.mjs` counts cg-style picks (class on the img), accepts 4+ picks for cg, and scrolls the page before measuring so lazy thumbnails are not reported broken; Playwright resolved from `../../dashboard3/node_modules` via NODE_PATH in `scripts/nl/check.js`.
