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
| 1 | coding-classes-in-amstelveen (amv, #40641A) | city | 4,605 | 0.6% vs madha | If an AI can write the cohort model in ten seconds, why should a child in Amstelveen learn to? | Stock vs flow (arrivals fall 46%, residents rise 24% under 56% retention) | (this commit) |

## Skipped (kill criterion)

| Slug | Reason |
|------|--------|

## Codes in use (letters only; check `coding-global.css` before assigning)

Reserved by older clusters and NOT available: hmr (Al Hamra), lei (Leicester), mst? free, amr (Al Amarat), adm (Adam), ede? free.
Assigned so far: amv (Amstelveen)

## Open issues

- Pre-flight done 2026-09-07: hub dossier released `Almere` and `Eindhoven` (replaced with `Groep 3 to 5`, `VO student`); `pageTypeOf()` now reads `pageType` from the dossier.
- Group batch size on new pages is `5 to 10` (brand facts, owner ruling 2026-09-03). Older cg- pages still say 5 to 8; do not copy their trust strip.
- Pre-existing, not ours: `check-cluster-uniqueness.js coding-global` reports Leicester vs Birmingham at 12.6% (FAIL line is 12%). Left alone; flag to owner.
- Cluster-wide CSS fixes shipped with page 1 (all live cg- pages benefit): `.cg-pick-tag` and `.cg-price-label` raised to 0.75rem (were under the 12px floor on the 17px root); wrapped `<table>` elements and captions now styled (62 live pages had unstyled tables).
- Tooling fixes shipped with page 1: `audit-rendered-ag-pages.mjs` counts cg-style picks (class on the img), accepts 4+ picks for cg, and scrolls the page before measuring so lazy thumbnails are not reported broken; Playwright resolved from `../../dashboard3/node_modules` via NODE_PATH in `scripts/nl/check.js`.
