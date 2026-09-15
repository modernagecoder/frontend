# Ireland cluster: progress tracker

Spec: `docs/superpowers/specs/2026-09-15-ireland-cluster-design.md`
Method and pipeline: the Netherlands cluster (`NETHERLANDS-PROGRESS.md`, `scripts/nl`).
Status 2026-09-15: PLAN ONLY. Nothing built. Awaiting the owner's yes on the plan, then Phase 1 (six preview pages), then a visible yes before Phases 2 to 7.

Per-page pipeline: research (8+ place facts at primary sources, or skip) -> collision check (dossier strings + data trap) -> `content/ie/<slug>.js` -> build -> check (rendered audit 1280 + 390, uniqueness under 6%, verify) -> link down from hub and parent -> record here -> commit `IE cluster: <slug> (<type>)` -> push.

## Task 0 (pre-flight)

- [ ] Parameterise the pipeline (market config: `+353` / `IE` / `Ireland`, `/api/callback/request`, phone rule, Irish time prose, tracker, commit prefix); grep renderers clean of NL values
- [ ] Register Irish slugs explicitly in verify and uniqueness scripts (no `best-coding-class-in-` wildcard: 131 India pages share it)
- [ ] One test lead "TEST DELETE ME IE" lands as Ireland in the admin panel, then deleted
- [ ] Finisher and link-down helpers checked into `scripts/`

## Queue (134)

Phase 1, preview (6): best-coding-class-in-dublin · best-online-coding-classes-ireland · best-coding-class-in-the-world · understand-the-code-dont-copy-paste-ireland · leaving-cert-computer-science-grinds-online · coding-classes-in-dun-laoghaire-rathdown

Phase 2, doors (20): best-coding-classes-for-kids-ireland · best-coding-classes-for-teens-ireland · best-coding-classes-for-adults-ireland · best-python-classes-online-ireland · learn-to-think-not-just-use-ai-tools-ireland · problem-solving-skills-through-coding-ireland · learn-to-train-ai-not-just-prompt-it-ireland · junior-cycle-coding-short-course-help · transition-year-coding-course-ireland · online-coding-summer-course-ireland · after-coderdojo-next-step-coding-ireland · coding-for-college-students-ireland · ai-agents-course-for-professionals-ireland · ai-agents-course-for-students-ireland · java-classes-ireland · app-development-course-ireland · full-stack-software-development-course-ireland · data-science-course-ireland · build-real-ai-projects-ireland · ai-and-python-academy-for-girls-ireland

Phase 3, cities (4): best-coding-class-in-cork · best-coding-class-in-limerick · best-coding-class-in-galway · best-coding-class-in-waterford

Phase 4, counties and Dublin local authorities (25): coding-classes-in-county-kildare · -meath · -wicklow · coding-classes-in-fingal · coding-classes-in-south-dublin · coding-classes-in-county-cork · -galway · -westmeath · -carlow · -cavan · -clare · -donegal · -kerry · -kilkenny · -laois · -leitrim · -longford · -louth · -mayo · -monaghan · -offaly · -roscommon · -sligo · -tipperary · -wexford

Phase 5, provinces (4, kill-gated): coding-and-ai-classes-in-leinster · -munster · -connacht · -ulster

Phase 6, districts (26, kill-gated): coding-classes-in-<area>-dublin for blanchardstown · castleknock · lucan · sandyford · dundrum · tallaght · clondalkin · rathfarnham · dun-laoghaire · blackrock · stillorgan · rathmines · drumcondra · glasnevin · clontarf · howth · finglas · ballymun · crumlin · terenure; coding-classes-in-<area>-cork for ballincollig · douglas · bishopstown · glanmire; coding-classes-in-knocknacarra-galway; coding-classes-in-castletroy-limerick

Phase 7, towns above 10,000 (49, kill-gated): best-coding-class-in-<town> for swords · maynooth · leixlip · celbridge · malahide · naas · athlone · greystones · bray · ashbourne · ratoath · carrigaline · drogheda · dundalk · navan · ennis · carlow · kilkenny · tralee · newbridge · balbriggan · portlaoise · mullingar · letterkenny · wexford · sligo · clonmel · laytown-bettystown · tullamore · killarney · cobh · midleton · mallow · arklow · castlebar · wicklow · enniscorthy · cavan · gorey · tramore · athy · longford · rush · portmarnock · skerries · ballina · kildare · shannon · dungarvan

## Done

| # | Slug | Type | Words | Worst overlap | AI H2 used | Trap used | Commit |
|---|------|------|-------|---------------|------------|-----------|--------|

## Skipped (kill criterion)

| Slug | Reason |
|------|--------|

## Open issues

- Live hub `/coding-classes-in-ireland` has an H2 "One price: USD 150 a month" while also selling USD 100 groups: owner to decide.
- Research leads in the spec (CSO urban areas and Indian-citizen counts, Junior Cycle Coding ~100 hours, LCCS 180 hours, CodePlus reach) are NOT page-ready; re-verify at primary before any page uses them.
