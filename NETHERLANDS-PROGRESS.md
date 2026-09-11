# Netherlands cluster: progress tracker

Spec: `docs/superpowers/specs/2026-09-07-netherlands-cluster-design.md`
Plan: `docs/superpowers/plans/2026-09-07-netherlands-cluster.md`
Owner instruction 2026-09-07: build one page at a time, maximum quality, do not wait for approval between pages. One commit per page.

Per-page pipeline: research (8+ place facts, sourced) -> collision check (dossier strings + trap) -> `content/nl/<slug>.js` -> `node scripts/nl/build.js <slug>` -> `node scripts/nl/check.js <slug>` -> link down from parent -> record here -> commit `NL cluster: <slug> (<type>)`.

## Queue

Phase 1 (proof cities): amstelveen · amsterdam · eindhoven · the-hague · almere · utrecht · rotterdam · ai-and-python-academy-netherlands (ag-)
Phase 2 (provinces): noord-holland · zuid-holland · utrecht-province · noord-brabant · gelderland · overijssel · limburg · groningen-province · friesland · drenthe · flevoland · zeeland
Phase 3 (cities) COMPLETE 2026-09-08, all 27 built: groningen · tilburg · breda · nijmegen · arnhem · apeldoorn · haarlem · haarlemmermeer · zaanstad · amersfoort · enschede · den-bosch · zwolle · zoetermeer · leiden · leeuwarden · maastricht · ede · dordrecht · westland · alphen-aan-den-rijn · alkmaar · delft · emmen · deventer · venlo · uithoorn
Phase 4 (districts) COMPLETE 2026-09-11, all 31 built: amsterdam x8 (centrum, noord, oost, zuid, west, nieuw-west, zuidoost, weesp) · rotterdam x8 (centrum, charlois, delfshaven, feijenoord, hillegersberg-schiebroek, kralingen-crooswijk, prins-alexander, ijsselmonde) · the-hague x8 (centrum, escamp, haagse-hout, laak, leidschenveen-ypenburg, loosduinen, scheveningen, segbroek) · eindhoven x7 (centrum, gestel, stratum, strijp, woensel-noord, woensel-zuid, tongelre; the plan listed six and omitted Tongelre, corrected 2026-09-10)
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
| 19 | coding-classes-in-flevoland (flv, #7D2759) | province | 4,439 | 2.3% vs drenthe | An AI will call Almere the fastest-growing city in the Netherlands. Why should a child in Lelystad learn to ask: since when? | A growth rate is a function of its base year (Almere +63% from 2000, +123% from 1995, +477% from 1986, undefined from 1975) | 263d90b9 |
| 20 | coding-classes-in-zeeland (zld, #4F2C5D) | province | 4,616 | 2.5% vs drenthe | An AI will name the largest city in Zeeland without asking what you mean by city. Why should a child in Goes learn to ask? | The unit of observation decides the ranking (Terneuzen: largest municipality 55,955, fourth town 26,080; Middelburg: largest town 43,165, second municipality 50,439) | babea3a0 |
| 21 | coding-classes-in-groningen (grn, #721025) | city | 4,588 | 2.6% vs zeeland | An AI will tell a Groningen parent the average household here has 1.7 people. Why should their child learn to take that apart? | A mean is a balance point, not a description (1.7 per household, but 61% hold exactly 1; the split gives 88,768 at 1.00 and 56,753 at 2.74; mode and median both 1) | 5013b93a |
| 22 | coding-classes-in-tilburg (tlb, #803103) | city | 4,565 | 1.5% vs groningen | An AI will happily tell you Tilburg has more neighbourhoods than Groningen. Why should a child here learn what that is worth? | A per-zone statistic measures the zoning (Tilburg 59 wijken = 3,911 each; Groningen 20 = 12,221; ratio 0.32 per wijk, 0.59 per buurt, 1.39 per km2) | 6d326c2c |
| 23 | coding-classes-in-breda (brd, #5D457B) | city | 4,645 | 5.4% vs tilburg | Ask an AI whether Breda is the ninth city of the Netherlands and it will answer. Why should a child here learn to distrust the answer? | A difference smaller than your sources' disagreement is not a difference (9th to 10th is 333 people; two sources differ by 402 about one city on one date) | 0f0a1384 |
| 24 | coding-classes-in-nijmegen (nij, #424E08) | city | 4,846 | 2.2% vs breda | Ask an AI which is the oldest city in the Netherlands and it will name one. Why should a child in Nijmegen learn to ask which test it used? | A superlative needs a stated test, and an empty cell is not a zero (4 claimants, 5 tests, 3 different winners, most cells not stated) | 8ed6883a |
| 25 | coding-classes-in-arnhem (arn, #65335A) | city | 4,859 | 3.1% vs breda | An AI will add the casualty figures for you without blinking. Why should a child in Arnhem learn to stop it? | Categories must be disjoint and share one population before you add them (about 7,100 landed; dead + prisoners + evacuated = 10,003, an excess of 2,903) | 55f6d837 |
| 26 | coding-classes-in-apeldoorn (apd, #813450) | city | 4,646 | 4.5% vs arnhem | An AI will add the twelve villages for you and hand back 167,200. Why should a child in Apeldoorn learn to ask what year that is? | Parts and whole from different reference dates (12 settlements dated 2023 sum to 167,200 against a 2026 total of 169,212; the 2,012 residual has two causes) | 77fbdbef |
| 27 | coding-classes-in-haarlem (hlm, #742945) | city | 4,718 | 5.2% vs apeldoorn | An AI will quote you Haarlem's density without dividing anything. Why should a child here learn to do the division? | A derived number is a photograph of its inputs (a published density of 5,036 against 168,946 over 32.09 km2, which divides to 5,265; 5,036 implies about 161,605) | 3e2b07d4 |
| 28 | coding-classes-in-haarlemmermeer (hmm, #545700) | city | 4,750 | 1.5% vs arnhem | An AI will divide 800 million by the area and hand you a depth. Why should a child in Hoofddorp learn to refuse it? | A quotient is a claim about the world dressed as a fact about numbers (800 million cubic metres over 197.48 km2 gives 4.05 m, which is not a depth) | 7bf8296c |
| 29 | coding-classes-in-zaanstad (zns, #70322B) | city | 4,614 | 5.5% vs haarlemmermeer | An AI will plot Zaanstad back to 1900 if you ask it. Why should a child here learn to stop at 1974? | A merger creates a new row, not a longer one (seven councils became Zaanstad in 1974, so any earlier series is a reconstruction of territory, not a measurement of the entity) | 496ee5ea |
| 30 | coding-classes-in-amersfoort (amf, #29396C) | city | 4,620 | 5.7% vs haarlem | An AI will compute the distance between two coordinates without asking which grid they are on. Why should a child in Amersfoort learn to ask? | Coordinates are relative to a choice; differences are not (the tower was 0,0 and is now exactly 155,000 by 463,000; mixing the two numberings puts neighbours 489 km apart) | 58758fa8 |
| 31 | coding-classes-in-enschede (ens, #7D3D36) | city | 4,806 | 2.9% vs zaanstad | Ask an AI how many students are in Enschede and it will give you a number. Why should a child here learn that there isn't one? | An aggregate cannot be pushed down to its parts without a published split (27,505 students across three cities; dividing by three gives 9,168, which is a fabrication) | 69ba9b65 |
| 32 | coding-classes-in-den-bosch (dbo, #335A00) | city | 4,769 | 3.7% vs amersfoort | An AI will read out both dates without blinking. Why should a child in Den Bosch learn to notice they cannot both be right? | A column name is a promise, and a missing value breaks it (buried 8 August 1516, died 9 August 1516; only a cross-field rule catches it) | 582c836f |
| 33 | coding-classes-in-zwolle (zwo, #1E507B) | city | 4,654 | 3.4% vs haarlem | An AI will tell you Zwolle is a major rail hub. Why should a child here learn to ask what would make that false? | A superlative with no set, measure or threshold cannot be tested (one of the largest junctions is untestable; eight directions is checkable) | 9609235d |
| 34 | coding-classes-in-zoetermeer (ztm, #7F211B) | city | 4,742 | 5.2% vs amersfoort | An AI will tell you exactly when Zoetermeer reached a hundred thousand. Why should a child here learn that nobody can? | A milestone is chosen, not measured (a net population crosses a threshold repeatedly; the record supports an interval, not a minute) | 33f27022 |
| 35 | coding-classes-in-leiden (lde, #6B390C) | city | 4,539 | 3.5% vs zwolle | An AI will convert 37,000 pounds to kilograms instantly. Why should a child in Leiden learn to ask which pound? | A unit can keep its name and change its size (37,000 Hollandse ponden is 17,760 kg at 0.48; the modern pound gives 16,783, the metric pond 18,500) | 95458d18 |
| 36 | coding-classes-in-leeuwarden (lwd, #632534) | city | 4,592 | 5.2% vs haarlem | An AI will give you the lean of the Oldehove to four decimals. Why should a child in Leeuwarden learn to give it to none? | A result cannot be more precise than its inputs (40 m and 4.2 degrees imply a lean of 2.86 to 3.00 m, not 2.93) | 2bc6ef40 |
| 37 | coding-classes-in-maastricht (mst, #015636) | city | 4,615 | 5.8% vs leeuwarden | An AI will give you a city-rights year for almost anywhere. Why should a child in Maastricht learn what an empty field means? | An almost-always-filled column looks like a definition and is not (Maastricht never received a charter, so a city-rights classifier rejects a city) | e061fec6 |
| 38 | coding-classes-in-ede (ede, #494C83) | city | 4,709 | 3.4% vs leeuwarden | An AI will tell you the Hoge Veluwe is in Ede. Why should a child here learn that the answer is longer than that? | A field holds one value; the world often holds several (the park is mostly in Ede and partly in Arnhem, with no published split, so a location column must lose or duplicate) | 7ac9a737 |
| 39 | coding-classes-in-dordrecht (drd, #893130) | city | 4,627 | 3.1% vs zoetermeer | An AI will tell you two thousand people drowned in 1421. Why should a child in Dordrecht learn to ask who counted? | Repetition is not evidence (one flood, three published tolls: about a dozen, two thousand as they say, and a hundred thousand from legend) | e2bf7ae8 |
| 40 | coding-classes-in-westland (wst, #55396D) | city | 4,522 | 4.2% vs dordrecht | An AI will report zero students in Westland. Why should a child here learn to read the next column? | Ask whether the category applies before reading the count (zero students because zero institutions, while 3,330 residents study elsewhere) | ba328cb2 |
| 41 | coding-classes-in-alphen-aan-den-rijn (alp, #712332) | city | 4,526 | 5.9% vs westland | An AI will read you whichever student figure it found first. Why should a child here learn to look for the second one? | One label, two tables, two populations (MBO 1,648 against 3,110 and HBO 0 against 2,470 on one page, with no note on either) | e6bf98b8 |
| 42 | coding-classes-in-alkmaar (alk, #7E3124) | city | 4,504 | 4.7% vs alphen-aan-den-rijn | An AI will tell you Alkmaar grew by nine thousand. Why should a child here learn to ask what the boundary was doing? | A series crossing a boundary change measures two things (published gain 9,187; the 2015 annexation brought about 12,430, implying the old ground lost about 3,243) | 6e1b40ed |
| 43 | coding-classes-in-delft (dlf, #80325E) | city | 4,548 | 6.0% vs alkmaar | An AI will give you a number of Vermeers. Why should a child in Delft learn to insist on two? | Is the doubt in the measurement or in the set? (34 to 37 paintings: one agreed criterion, contested members, a range no recount can close) | 505fb1c4 |
| 44 | coding-classes-in-emmen (emm, #843442) | city | 5,244 | 1.9% vs haarlem | An AI will tell you the zoo lost a quarter of its visitors. Why should a child in Emmen learn to ask which year it started from? | The first observation is not a baseline (1.3m in the openingsjaar against 951,000 in 2024 reads as -27%, but +12% from 2018; and openingsjaar hides the denominator, 4,498 or 3,562 a day against 2,598) | 9d388a44 |
| 45 | coding-classes-in-deventer (dev, #813C0F) | city | 4,982 | 2.9% vs emmen | An AI will tell you the book market declined. Why should a child in Deventer learn to ask what the weather was? | Did the thing move or the conditions? (book market 130,000 in 2008 to 75,000 in 2009 vanwege de regen, with 6 km and 875 kramen unchanged; once-a-year sampling never averages the day out) | 2bdcf286 |
| 46 | coding-classes-in-venlo (vnl, #832545) | city | 5,025 | 4.4% vs emmen | An AI will happily divide five million by a hundred thousand. Why should a child in Venlo learn to refuse? | Per capita names a population (circa 5m visitors from the Ruhrgebied over 104,195 residents gives 48, over 40,945 gives 122, over 49,770 households gives 100; the served population is in none of the registers) | 1ef0bd12 |
| 47 | coding-classes-in-uithoorn (uit, #733357) | city | 5,177 | 3.9% vs deventer | An AI reading that page will report no population history for Uithoorn. Why should a child here learn to check? | Which layer is the absence in: world, record or view? (the entry's population graph will not draw and prints a MediaWiki note; the series exists, 24,581 in 1995 against 32,204 in 2026) | b9e837a2 |
| 48 | coding-classes-in-amsterdam-centrum (acn, #A04761) | district | 5,112 | 4.8% vs uithoorn | An AI will tell you Centrum is less crowded than the Jordaan. Why should a child here learn to say that is impossible? | What was it computed over, and who is it about? (district 11,244/km2 on an area including water, against every wijk on land: Jordaan 23,476, Oostelijke Eilanden 15,682, Grachtengordel-West 14,456, Burgwallen-Oude Zijde 13,600) | c2d102e1 |
| 49 | coding-classes-in-amsterdam-noord (anr, #9A5505) | district | 5,281 | 5.5% vs amsterdam-centrum | An AI will make the age bands add up. Why should a child in Noord learn to leave them broken? | Bound the explanation before you accept it (Volewijck bands 9,305 vs population 9,277, a gap of 28 against a rounding bound of 12.5; Buikslotermeer +5 and Waterland +8 both inside it) | 15ce11f7 |
| 50 | coding-classes-in-amsterdam-oost (aos, #6E5E97) | district | 5,051 | 5.6% vs amsterdam-centrum | An AI will explain why IJburg has more children. Why should a teenager in Oost learn to reject the explanation? | Self-selection, not effect (IJburg-West 6,830 homes and 16,099 people against Indische Buurt-West 6,712 and 11,939: 118 homes apart, 4,160 people apart) | 58c65a52 |
| 51 | coding-classes-in-amsterdam-zuid (azd, #0B764D) | district | 5,125 | 4.9% vs amsterdam-oost | An AI will reconcile the two columns for you. Why should a teenager in Zuid learn to stop it? | Two registers, and the gap is the data (Zuidas 3,310 households in 2,878 dwellings, +432 or 15.0%; Jordaan 13,260 in 13,425, -165; the sign changes what it means) | 494623e0 |
| 52 | coding-classes-in-amsterdam-west (awt, #00566D) | district | 5,159 | 5.5% vs amsterdam-centrum | Ask an AI about De Kolenkit and you will get February 2009. Why should a teenager in West learn to check the date? | An identifier outliving what it named (De Kolenkit labelled worst in the country Feb 2009, then largely demolished and rebuilt; the name and its history carried on unchanged) | 9198db0e |
| 53 | coding-classes-in-amsterdam-nieuw-west (anw, #2F4505) | district | 5,121 | 5.0% vs amsterdam-west | An AI will explain why these two neighbourhoods rent at the same rate. Why should a teenager here refuse the explanation? | Measured, or chosen? (Slotermeer-Noordoost 3,060 of 4,192 rented and Osdorp-Midden 4,900 of 6,713, both 72.99%, while density differs 9,755 against 15,218) | a5042bae |
| 54 | coding-classes-in-amsterdam-zuidoost (azo, #5B284C) | district | 5,244 | 4.5% vs amsterdam-nieuw-west | An AI will explain why cheaper homes sit beside higher incomes. Why should a teenager in Zuidoost distrust the explanation? | One column, two kinds of object (Amstel III 211,000 euro homes and 37,400 euro incomes against Gein 344,000 and 30,600; 100% rented at 1.2 per household against 41% owned at 2.0) | 5cb234a4 |
| 55 | coding-classes-in-weesp (wsp, #8B4A0F) | district | 5,260 | 3.0% vs amsterdam-centrum | Ask an AI whether Weesp is in Amsterdam and it will answer. Why should a teenager here ask it to pick a test first? | A category is several tests that usually agree (six readings of being part of Amsterdam: one yes and five noes for Weesp, all six yes for the Jordaan) | 3debf0e1 |
| 56 | coding-classes-in-rotterdam-centrum (rtc, #0D4833) | district | 5,195 | 4.7% vs amsterdam-zuidoost | An AI will tell you the centre has fewer schools per child. Why should a teenager here learn to ask how big the district is? | A boundary truncates the neighbourhood (413 ha means only about 26% of Centrum is more than 500 m from an edge, against 58% of Prins Alexander at 1,738 ha) | 800d2e45 |
| 57 | coding-classes-in-delfshaven (dfh, #953C41) | district | 5,045 | 4.4% vs rotterdam-centrum | An AI will rank the districts by number of schools. Why should a teenager in Delfshaven ask what one school is? | A count is not a quantity when units vary in size (15 secondary establishments teach 4,765 pupils here; 9 in Prins Alexander teach 5,860) | d19f8dc5 |
| 58 | coding-classes-in-feijenoord (fyn, #6C4F85) | district | 4,792 | 4.5% vs delfshaven | An AI will confirm that richer districts have pricier homes. Why should a teenager in Feijenoord ask how many districts were checked? | Four points cannot carry a conclusion (income and dwelling value rank identically across four districts; 4! = 24 orderings, so a perfect match is 1 in 12) | f6ba30a1 |
| 59 | coding-classes-in-charlois (chl, #5B6400) | district | 4,753 | 4.6% vs feijenoord | An AI will compare 51 percent with 16 percent. Why should a teenager in Charlois stop it? | A percentage needs its base named (18,440 single-person households are 51% of households and 26% of residents; the panel prints the first next to 16% of residents under fifteen) | ba9b0e9a |
| 60 | coding-classes-in-ijsselmonde (ijs, #006C11) | district | 4,740 | 4.6% vs charlois | An AI will tell you IJsselmonde has as many pensioners as children. Why should a teenager here ask how wide the bands are? | Unequal and unbounded age bands (11,115 under fifteen against 11,185 over sixty-five; one band is 15 years, the other has no upper end) | b3b08527 |
| 61 | coding-classes-in-kralingen-crooswijk (krc, #3F3268) | district | 4,736 | 5.7% vs ijsselmonde | An AI will explain this district by its students. Why should a teenager in Crooswijk check the direction first? | The visible group is not the cause (6,830 students, 12.5%, the highest share; and the highest average income at 35,000 euro, which students would pull down) | 1dd3508b |
| 62 | coding-classes-in-hillegersberg-schiebroek (hgs, #784C34) | district | 4,732 | 5.4% vs ijsselmonde | An AI will list four reasons this district is comfortable. Why should a teenager here ask how many are separate? | Agreement is evidence only if the measures are independent (value and income order seven districts alike; ownership and density order them differently, so four measures are about two facts) | 3003ac54 |
| 63 | coding-classes-in-prins-alexander (pra, #1D5E85) | district | 4,869 | 5.2% vs ijsselmonde | An AI will tell you this district is ageing. Why should a teenager in Ommoord ask which year that came from? | A snapshot has at least two histories (49% of residents over forty-five: older people moving in, or one generation ageing in place, and the two predict opposite futures) | 14bc6833 |
| 64 | coding-classes-in-the-hague-centrum (dhc, #3F623F) | district | 5,256 | 4.4% vs prins-alexander | An AI will call 1.5 people per household a problem. Why should a teenager in the Zeeheldenkwartier ask whose problem? | Feature vs bug (a figure carries no verdict until a standard is imported from outside the data: 1.5 people per household is a failure or the point of the place, and no column says which) | 123918fc |
| 65 | coding-classes-in-escamp (esc, #94285B) | district | 5,225 | 3.5% vs the-hague-centrum | An AI will tell you Bouwlust has thirteen primary schools. Why should a teenager in Morgenstond ask thirteen schools for whom? | Necessary vs sufficient (a school inside a wijk is neither required for its children to be schooled nor enough to school them: 13 establishments teach 2,954 pupils and 5 teach 2,534) | 07c27816 |
| 66 | coding-classes-in-scheveningen (shv, #125F5C) | district | 5,149 | 2.6% vs escamp | An AI will tell you Scheveningen grew from 917 people to nearly twenty thousand. Why should a teenager in Duindorp ask which Scheveningen? | A name is not an identity (917 people in 200 buildings in 1680 vs 19,637 in a 232-hectare CBS polygon in 2026: same word, different objects, and the join succeeds cleanly) | 178b9e67 |
| 67 | coding-classes-in-haagse-hout (hho, #9A2733) | district | 5,372 | 3.7% vs scheveningen | An AI will repeat 3.09 percent back to you. Why should a teenager in Bezuidenhout ask three point zero nine percent of what? | Precision is not accuracy (15 children published as 3.09 percent while 2,560 gets a flat 17; two 2022 totals 534 apart; one income column carrying two vintages) | b19b2f47 |
| 68 | coding-classes-in-laak (lak, #2E4678) | district | 5,219 | 4.7% vs the-hague-centrum | An AI will tell you young professionals are drawn to the Binckhorst. Why should a teenager in Spoorwijk ask what else was for sale? | Choice vs constraint (64 percent of the Binckhorst is aged 25-45 and 92 percent of its dwellings are rented: a distribution proves nothing about preference unless the options were reachable) | d7ab9d45 |
| 69 | coding-classes-in-leidschenveen-ypenburg (lyp, #6B477A) | district | 5,276 | 5.0% vs laak | An AI will tell you Forepark is almost empty. Why should a teenager in Leidschenveen ask empty at what hour? | Residence is not presence (Forepark: 155 people on 304 hectares, density 51, in a business park between the A4 and A12 - a register records where people sleep) | 4931be92 |
| 70 | coding-classes-in-loosduinen (lsn, #8A4000) | district | 5,438 | 4.8% vs leidschenveen-ypenburg | An AI will tell you houses in Kijkduin are worth 670,000 euro. Why should a teenager in Waldeck ask who worked that out? | Provenance does not survive storage (the WOZ this series has quoted on 69 pages is an assessor estimate with a valuation date a year early, printed identically to enumerated counts) | 0d894691 |
| 71 | coding-classes-in-segbroek (sgb, #0F6E89) | district | 5,372 | 4.0% vs loosduinen | An AI will tell you the Vogelwijk is well provided with schools. Why should a teenager in the Vruchtenbuurt do one subtraction first? | The ceiling check (Vogelwijk teaches 3,416 pupils and holds 1,730 residents under twenty-five: a figure larger than its own maximum, proved by subtraction not argued from catchments) | 2f5dbc5b |
| 72 | coding-classes-in-eindhoven-centrum (ehc, #8B4064) | district | 5,333 | 2.9% vs escamp | An AI will tell you the young people of Eindhoven Centrum live on the campus. Why should a teenager in Bergen ask which way round? | Confusion of the inverse (the TU-terrein is 56 percent aged 15-25, yet holds only 36.5 percent of Centrum 15-25s; precision against recall) | 025c6717 |
| 73 | coding-classes-in-stratum (stm, #54578F) | district | 5,591 | 1.6% vs eindhoven-centrum | Ask an AI for the density of Stratum and it may average the three wijken. Why should a teenager in Putten add the land first? | Mean of ratios is not a ratio of sums (three wijk densities average to 3,765; Stratum is 3,136, 20 percent lower; weight by the denominator) | 8b5c2878 |
| 74 | coding-classes-in-gestel (gst, #007469) | district | 5,302 | 2.0% vs stratum | An AI will say one wijk of Gestel has 88 percent more homeowners. Why should a teenager in Hanevoet ask 88 percent of what? | One gap, five true framings (2,296 vs 2,290 owner homes: six homes, 29 points, 88 percent more, 47 percent fewer, odds ratio 3.3); points are the only symmetric statement | e3a6a814 |
| 75 | coding-classes-in-strijp (stp, #932601) | district | 5,186 | 2.2% vs stratum | An AI will describe the typical resident of Strijp in vivid detail. Why should a teenager in Meerhoven count how many people fit? | Conjunction only shrinks; marginals bound a joint (Oud-Strijp 2025: 8,645 men, 6,195 alone, 1,950 students of 15,840; the picture is 0 to 1,950; forced overlap 2,450) | 21eae042 |
| 76 | coding-classes-in-woensel-zuid (wsz, #615927) | district | 5,296 | 2.8% vs stratum | An AI reading the encyclopaedia will say Woensel-Zuid has 64,790 residents. Why should a teenager in Limbeek check the area first? | A check invariant under an error cannot detect it (Woensel boxes swapped: each self-consistent, both sum to Woensel; only the office areas of the listed wijken, 824 ha vs 1,864, catch it; elfproef) | 41fd4f86 |
| 77 | coding-classes-in-woensel-noord (wsn, #784756) | district | 5,165 | 2.7% vs woensel-zuid | An AI will name the poorer of two wijken in one word. Why should a teenager in Blixembosch ask which line? | Nested thresholds are a cumulative curve (Ontginning 9.6/14/18 percent of households: bands 9.6, 4.4, 4.0, never sum to 41.6); compare at every rung (vs Oud-Woensel apart on the low-income line, level on the ladder) | 25be26d3 |
| 78 | coding-classes-in-tongelre (tgl, #594D00) | district | 5,111 | 3.1% vs gestel | Ask an AI when the farmhouse on 't Hofke was built and it will give a year. Why should a teenager in Doornakkers ask which part? | A date belongs to an event ('t Hofke 13: beams 1583, enlarged 1600, face 18th century, restored 2007/2008, the house itself undated); created_at vs updated_at, migrations, blame | c1b4cc94 |
| 79 | coding-classes-in-helmond (hmd, #91314A) | city | 4,932 | 3.5% vs woensel-zuid | An AI will tell you Helmond received city rights in 1232. Why should a child here learn to ask who wrote that down? | A filled-in value cannot vouch for the rule that filled it (no charter evidence; rights assumed to match neighbour Eindhoven, in or around 1232; a same-year query returns the assumption) | 8d11605e |
| 80 | coding-classes-in-purmerend (pmr, #006949) | city | 4,628 | 3.6% vs helmond | An AI will tell you what Purmerend decided. Why should a teenager in Weidevenne ask how many people took part? | non-response: a result describes those who took part; land, residents and voters are three subjects | f1623c39 |
| 81 | coding-classes-in-oss (oss, #6C0C4A) | city | 4,518 | 2.7% vs purmerend | An AI learned from text that nobody wrote for it. Why should a teenager in Ruwaard ask what that text was for? | accuracy follows use: reused data is only as reliable as the fields its first process depended on | 005131c7 |
| 82 | coding-classes-in-hilversum (hvs, #1E4900) | city | 4,406 | 3.8% vs purmerend | An AI can write the code. Why should a teenager near the Mediapark ask whether its files will open in twenty years? | format durability: a record lasts only as long as something can still read it | f4105f59 |
| 83 | coding-classes-in-sittard-geleen (stg, #483D06) | city | 4,486 | 4.3% vs hilversum | An image model pads the edge of every picture it sees. Why should a teenager in Sittard learn what happens at a border? | edge effect: neighbourhood calculations are cut off where the data stops, not where the world does | d716377c |
| 84 | coding-classes-in-nissewaard (nsw, #005126) | city | 4,398 | 3.9% vs oss | An AI model can lose accuracy without getting any worse. Why should a teenager in Spijkenisse learn how that happens? | composition effect: an average moves when the mix moves, with no group changing (dataset shift) | 61d6c88c |
| 85 | coding-classes-in-heerlen (hrl, #4F6F15) | city | 4,426 | 4.6% vs hilversum | An AI model only knows the years it was trained on. Why should a teenager in Heerlen ask where its data begins? | a series begins where someone started counting: logs, shallow clones and training windows | 55892215 |
| 86 | coding-classes-in-lelystad (lls, #A74A04) | city | 4,395 | 4.8% vs sittard-geleen | An AI can build a feature in an afternoon. Why should a teenager in Lelystad ask what it depends on? | single point of failure: one route, one server, one provider, one person; add a second route and test it | 04406bed |
| 87 | coding-classes-in-meierijstad (mrs, #377338) | city | 4,243 | 5.9% vs heerlen | An AI classifier always names a winner. Why should a teenager in Veghel ask how big the win was? | plurality is not majority: report share and margin with the winner; argmax and forest votes | 85581320 |
| 88 | coding-classes-in-hengelo (hgl, #147175) | city | 4,250 | 0.8% vs sittard-geleen | An AI will clean a dataset in seconds. Why should a teenager in Hengelo ask what the cleaning was for? | noise is defined by the question: one purpose\x27s clutter is another\x27s signal; quarantine what filters remove | 6641b98f |
| 89 | coding-classes-in-schiedam (sdm, #2E6800) | city | 4,254 | 0.9% vs woensel-zuid | Many AI tools are smaller copies of bigger ones. Why should a teenager in Schiedam ask what was left in the still? | knowledge distillation: a copy keeps what was asked, inherits the teacher errors; test against truth | 3993e0b7 |
| 90 | coding-classes-in-leidschendam-voorburg (lvb, #9A2A23) | city | 4,385 | 1.1% vs hengelo | An AI can write a physics simulation in seconds. Why should a teenager in Voorburg check that its pendulum does not speed up? | numerical drift: explicit Euler adds energy every step; watch a conserved quantity; semi-implicit keeps it | 4586fcd3 |
| 91 | coding-classes-in-roosendaal (rsd, #A24B3B) | city | 4,279 | 1.7% vs meierijstad | An AI agent will read any web page you give it. Why should a teenager in Roosendaal ask who wrote that page? | trust boundaries: check everything that crosses into a program, once, at the border; prompt injection | 2c9745a5 |
| 92 | coding-classes-in-gouda (gda, #123E6A) | city | 4,142 | 1.2% vs hengelo | An AI can chain five tools in one reply. Why should a teenager in Gouda look inside every joint? | pipelines fail quietly at the joints: test each stage alone, count at every joint, fail anywhere stops all | f4d70ce7 |
| 93 | coding-classes-in-vlaardingen (vld, #244624) | city | 4,125 | 1.9% vs roosendaal | An AI can give you ten sources in a second. Why should a teenager in Vlaardingen open every one? | dangling references: follow every pointer; foreign keys, link checks, and opening every AI citation | d3d196b1 |
| 94 | coding-classes-in-hoorn (hrn, #00525B) | city | 4,245 | 2.1% vs roosendaal | An AI will turn any email into a calendar entry. Why should a teenager in Hoorn check which date it chose? | date conventions: 1356/1357, 03/04, time zones; store one standard form, show many, refuse to guess | 67239736 |
| 95 | coding-classes-in-almelo (amo, #28621A) | city | 4,101 | 3.4% vs roosendaal | An AI model is a very large pattern stored as numbers. Why should a teenager in Almelo learn how patterns are stored? | patterns as data: a woven row is a bitmap; run-length encoding shrinks stripes and grows checkerboards | b3c8d105 |
| 96 | coding-classes-in-veenendaal (vnd, #750B00) | city | 4,099 | 2.6% vs vlaardingen | An AI reads every word in pieces. Why should a teenager in Veenendaal learn where it cuts? | tokenization: Veenen-Daal not Veen-en-Daal; one rule, three vocabularies, three cuts; tokens and cost | 4c86ab21 |
| 97 | coding-classes-in-assen (asn, #3E4100) | city | 4,047 | 4.4% vs almelo | AI agents now work side by side on the same files. Why should a teenager in Assen learn what happens when they collide? | race conditions: two correct updates at once lose one; make read-add-write one step; let storage refuse | 9979ae88 |
| 98 | coding-classes-in-bergen-op-zoom (boz, #902A66) | city | 4,307 | 2.9% vs almelo | An AI model can pass every test it was given. Why should a teenager in Bergen op Zoom look for the test it was not given? | tests show presence not absence: a clean record describes attacks tried; age groups sum 70,692 vs 70,691 | c8a29185 |
| 99 | coding-classes-in-velsen (vls, #A83B6C) | city | 4,016 | 4.9% vs assen | An AI can rewrite code to be faster in seconds. Why should a teenager in IJmuiden measure first? | bottlenecks: the IJmuiden locks; a step saves at most its own time; measure, widen the narrowest, re-measure | c5c06a15 |
| 100 | coding-classes-in-capelle-aan-den-ijssel (cij, #204817) | city | 4,361 | 1.7% vs vlaardingen | An AI feature is only as reliable as the service behind it. Why should a teenager in Capelle learn to build a barrier? | circuit breakers: the barrier closes zero to six times a year; trip on failures, fall back, test, reopen | 3189300a |
| 101 | coding-classes-in-wassenaar (wsr, #992641) | city | 3,970 | 4.4% vs velsen | An AI service can go from instant to sluggish in an afternoon. Why should a teenager in Wassenaar understand queues? | queueing: waits explode near full use (1, 4, 9, 19, 99 minutes at 50 to 99 percent busy); plan below full | d8ddc72f |
| 102 | coding-classes-in-voorschoten (vsc, #74052F) | city | 4,112 | 3.3% vs velsen | An AI can rewrite an old program in a minute. Why should a teenager in Voorschoten ask what the old one was doing? | refactor or rewrite: Duivenvoorde kept since 1226, the Dorpskerk in its fourth version; tests first | 44549512 |
| 103 | coding-classes-in-oegstgeest (ogg, #0C665A) | city | 3,979 | 4.0% vs bergen-op-zoom | An AI can take on a huge task in one go. Why should a teenager in Oegstgeest learn to split it first? | divide and conquer: Descartes at Endegeest; halving finds 1 in 1,000 in 10 questions; split before asking AI | 17b51893 |
| 104 | coding-classes-in-rijswijk (rjw, #6B1E1F) | city | 4,154 | 4.2% vs velsen | An AI model can change its answers after an update. Why should a teenager in Rijswijk learn to write contracts? | API contracts: the Peace of 1697 as image; semantic versioning, deprecation, contract tests, pinned AI models | ce8654e1 |
| 105 | coding-classes-in-diemen (dmn, #4B6209) | city | 4,051 | 5.8% vs velsen | An AI can suggest a route in a second. Why should a teenager in Diemen learn how the best route is really found? | graphs and shortest paths: Gooilijn 1974 and Ringspoorbaan 1993 as setting; Dijkstra on an invented five-stop network (14 via every stop, 21 direct); choose the cost; AI calls a real solver | a481ebc6 |
| 106 | coding-classes-in-middelburg (mdb, #6C435F) | city | 4,283 | 4.0% vs diemen | An AI assistant can be told to keep its instructions hidden. Why should a teenager in Middelburg learn to assume it cannot? | security without a hidden method: Lipperhey 1608 patent refused (Metius, another young man); Kerckhoffs 1883; Caesar 25 shifts; key-space table; keys out of code and system prompts | (this commit) |

## Skipped (kill criterion)

| Slug | Reason |
|------|--------|

## Codes in use (letters only; check `coding-global.css` before assigning)

Reserved by older clusters and NOT available: hmr (Al Hamra), lei (Leicester), mst? free, amr (Al Amarat), adm (Adam), ede? free.
Assigned so far: cg: amv (Amstelveen), ams (Amsterdam), ehv (Eindhoven), dhg (The Hague), alm (Almere), utr (Utrecht), rtm (Rotterdam) · ag: nla (academy hub) · provinces: nhl (Noord-Holland), zhl (Zuid-Holland), utp (Utrecht), gld (Gelderland), ovr (Overijssel), lim (Limburg), grp (Groningen), nbr (Noord-Brabant), frl (Friesland), dre (Drenthe), flv (Flevoland), zld (Zeeland) · cities: grn (Groningen), tlb (Tilburg), brd (Breda), nij (Nijmegen), arn (Arnhem), apd (Apeldoorn), hlm (Haarlem), hmm (Haarlemmermeer), zns (Zaanstad), amf (Amersfoort), ens (Enschede), dbo (Den Bosch), zwo (Zwolle), ztm (Zoetermeer), lde (Leiden), lwd (Leeuwarden), mst (Maastricht), ede (Ede), drd (Dordrecht), wst (Westland), alp (Alphen aan den Rijn), alk (Alkmaar), dlf (Delft), emm (Emmen), dev (Deventer), vnl (Venlo), uit (Uithoorn) · districts: acn (Amsterdam-Centrum), anr (Amsterdam-Noord), aos (Amsterdam-Oost), azd (Amsterdam-Zuid), awt (Amsterdam-West), anw (Amsterdam Nieuw-West), azo (Amsterdam-Zuidoost), wsp (Weesp), rtc (Rotterdam Centrum), dfh (Delfshaven), fyn (Feijenoord), chl (Charlois), ijs (IJsselmonde), krc (Kralingen-Crooswijk), hgs (Hillegersberg-Schiebroek), pra (Prins Alexander), dhc (Den Haag Centrum), esc (Escamp), shv (Scheveningen), hho (Haagse Hout), lak (Laak), lyp (Leidschenveen-Ypenburg), lsn (Loosduinen), sgb (Segbroek), ehc (Eindhoven Centrum), stm (Stratum), gst (Gestel), stp (Strijp), wsz (Woensel-Zuid), wsn (Woensel-Noord), tgl (Tongelre) · towns: hmd (Helmond), pmr (Purmerend), oss (Oss), hvs (Hilversum), stg (Sittard-Geleen), nsw (Nissewaard), hrl (Heerlen), lls (Lelystad), mrs (Meierijstad), hgl (Hengelo), sdm (Schiedam), lvb (Leidschendam-Voorburg), rsd (Roosendaal), gda (Gouda), vld (Vlaardingen), hrn (Hoorn), amo (Almelo), vnd (Veenendaal), asn (Assen), boz (Bergen op Zoom), vls (Velsen), cij (Capelle aan den IJssel), wsr (Wassenaar), vsc (Voorschoten), ogg (Oegstgeest), rjw (Rijswijk), dmn (Diemen), mdb (Middelburg)

## Open issues
### The sibling-echo tax, now measured four times

Every district page after the first in its city has come in ABOVE 6 percent on
first build and needed a rewrite: Nieuw-West 8.5, Zuidoost 6.3, Delfshaven
6.4, Feijenoord 6.0. Every time the cause was the same and every time the fix
took one pass. Budget for it rather than being surprised by it.

The three things that cause it, in order of damage:

1. REPRODUCING A SIBLING'S STATISTICS ROW. Delfshaven quoted Rotterdam
   Centrum's whole published row for comparison when the argument used only
   its school columns. Take only the columns the argument needs and say so.
2. REUSING THE FRESH WORDING THAT RESCUED THE PREVIOUS PAGE. The delivery
   cells and FAQ answers written to fix page N become page N+1's stock text.
   Diff against the PREVIOUS sibling, never against the template.
3. THE SAME STRUCTURAL OBSERVATION MADE TWICE. Delfshaven and Feijenoord both
   have nine buurten and both noticed the district shares a name with one of
   them. Only the first page gets to make that point.

Mechanical note: patch scripts must not search for text containing an
apostrophe. In the module the source reads `city's`, so a Python search for
`city's` finds nothing. Anchor on apostrophe-free substrings.

### Rotterdam is easier than Amsterdam. Method note, 2026-09-09

Rotterdam's CBS wijken ARE its gebieden. `allecijfers.nl/gemeente/rotterdam/`
links 19 wijk pages whose names are the gebied names, so each Rotterdam
district page gets a FULL statistics row of its own at
`allecijfers.nl/wijk/<naam>-rotterdam/`, including something the Amsterdam
wijk pages were not asked for and do carry here: vestigingen basisonderwijs
and voortgezet onderwijs with leerlingen counts.

That means the Amsterdam workaround (build the page from three to five wijken
beneath the district) is NOT needed for Rotterdam. One fetch per district,
plus one contrast district, is enough.

Rotterdam: 673,804 residents, 22 wijken, 92 buurten, so a Rotterdam wijk
averages about 30,600 people against about 8,500 for an Amsterdam wijk. Do
not build a page on that; it is the Tilburg page's argument.

Confirmed wijk slugs for the remaining seven Rotterdam districts:
/wijk/delfshaven-rotterdam/ · /wijk/charlois-rotterdam/ ·
/wijk/feijenoord-rotterdam/ · /wijk/ijsselmonde-rotterdam/ ·
/wijk/kralingen-crooswijk-rotterdam/ · /wijk/hillegersberg-schiebroek-rotterdam/
· /wijk/prins-alexander-rotterdam/ (already fetched, figures in the
rotterdam-centrum dossier).

Also confirmed present and NOT in the plan's eight: noord, overschie, pernis,
hoogvliet, hoek-van-holland, rozenburg, plus the port zones spaanse-polder,
nieuw-mathenesse, waalhaven-eemhaven, botlek-europoort-maasvlakte and
rotterdam-noord-west.

### Amsterdam-Zuid: BUILT 2026-09-09. Research below kept as the source record.

Stadsdeel entry (nl.wikipedia.org/wiki/Amsterdam-Zuid): 146,395 inwoners on
1 January 2026; density 9,602 per km2 (2025) against a stated area of 17.41
km2, which implies 15.25 km2 of land, so the published density is on land;
created 1 May 2010 by merging Oud-Zuid and Zuideramstel; three GGW-gebieden,
GK11 Oud-Zuid (Hoofddorppleinbuurt, Schinkelbuurt, Willemspark,
Museumkwartier, Stadionbuurt, Apollobuurt), GK12 Buitenveldert/Zuidas
(Prinses Irenebuurt, Zuidas, Buitenveldert-West, Buitenveldert-Oost), GK13
De Pijp/Rivierenbuurt (Oude Pijp, Nieuwe Pijp, Zuid Pijp, Scheldebuurt,
IJselbuurt, Rijnbuurt); Vondelpark, Museumplein and Berlage's Plan Zuid in
Oud-Zuid; the Zuidas business district in GK12.

Wijk Buitenveldert-Oost (allecijfers.nl/wijk/buitenveldert-oost-amsterdam/):
8,447 inwoners (2026); 4,660 huishoudens averaging 1.7 (2025); 2,610
eenpersoons, 56 percent; ages 1,100 (13 pct), 835 (9.9), 2,960 (35), 1,650
(20), 1,865 (22); 170 ha total, 153 land; density 5,451; 4,560 woningen; WOZ
516,000 euro; 3,010 huur (66 pct) and 1,550 koop (34); income 44,200 euro
(2024); 4 buurten.

Wijk Oude Pijp (allecijfers.nl/wijk/oude-pijp-amsterdam/): 14,816 inwoners
(2026); 10,015 huishoudens averaging 1.5 (2025); 6,445 eenpersoons, 64
percent; ages 975 (6.6 pct), 2,305 (16), 6,930 (47), 3,005 (20), 1,615 (11);
68 ha total, 63 land; density 23,810; 9,708 woningen; WOZ 539,000 euro; 2,621
koop (27 pct) and 7,087 huur (73); income 49,400 euro (2024); 5 buurten.

Trap chosen for Zuid: THE DIFFERENCE BETWEEN TWO REGISTERS IS ITSELF A
MEASUREMENT, AND ITS SIGN CHANGES ITS MEANING. Households and dwellings are
both published for 2025 and count different units, a registration against a
building. Across the twelve Amsterdam wijken read so far the residual runs
from minus 165 (Jordaan) and minus 104 (Grachtengordel-West) to plus 1,459
(Oostelijke Eilanden, 18.2 percent) and plus 694 (Buikslotermeer, 11.8).
Zuid's own two: Buitenveldert-Oost 4,660 households in 4,560 dwellings, plus
100; Oude Pijp 10,015 in 9,708, plus 307. A positive residual points at
sharing, sublets and multiple registrations at one address; a negative one
points at vacancy, second homes and dwellings registered to nobody. Neither
count is a proxy for the other and the gap is not an error. Boundaries to
state in the dossier: Zeeland owns unit of observation (one name, two kinds
of row), Venlo owns the denominator that excludes the served population, and
Alphen owns one label over two tables.

MECHANISMS CONFIRMED CLAIMED, do not reuse: weighted vs unweighted averages
(Oman), bin width changes the story (Bawshar), rate versus count and the
denominator problem (New York), the ecological trap of a group attribute no
member has (Gelderland), null is not zero (Ash Sharqiyah South), an absent
record is not a zero (Jerudong), small-denominator volatility (Al Wusta),
a missing value inside an aggregate (Al-Musanaah), a trend line across a
break in the subject (Taqah), the denominator is a choice (Gadong).

STILL FREE as of 2026-09-08: goodhart, spurious correlation, feature versus
bug, necessary and sufficient, ship of theseus, composition effect,
regression to the mean, edge and boundary effects, open-ended top category
(distinct from Bawshar only if framed as the publisher's unbounded bin
rather than the analyst's choice, so use with care).

CORRECTION 2026-09-11: the free list above was stale. Already claimed:
edge and boundary effects (Rotterdam Centrum, boundary truncation; the
Sittard-Geleen page now credits it and links it), open-ended top category
(IJsselmonde, unequal and unbounded bands), ship of theseus (Amsterdam-West,
identifier continuity), revision width between sources (Breda), survivorship
(Al Hail), base rates (Georgia). Claimed on 2026-09-11: non-response
(Purmerend), accuracy follows use (Oss), format durability (Hilversum), the
fill choice at an edge in code (Sittard-Geleen), composition effect and
dataset shift (Nissewaard), a series begins where counting began (Heerlen).
Still free: goodhart (Nieuw-West names it only as a contrast), spurious
correlation, feature versus bug, regression to the mean. Necessary versus sufficient is
Escamp's (missed in the first pass and caught before the Lelystad page
shipped); single point of failure was claimed by Lelystad on 2026-09-11, and plurality
versus majority (argmax, forest votes) by Meierijstad. Hengelo: noise is defined by
the question (purpose-relative cleaning). Schiedam: knowledge distillation,
a copy tested against the truth rather than its teacher. Leidschendam-Voorburg:
accumulating numerical error in step-by-step simulation (explicit versus
semi-implicit Euler). Roosendaal: trust boundaries (validate
once at the border; prompt injection). Gouda: pipelines and silent
failures at their joints (pipefail, counts per stage). Vlaardingen: dangling
references and referential integrity (foreign keys, link rot, AI citations). Hoorn: date conventions (year
styles, day-month order, time zones; 1356/1357). Almelo: patterns as data and
run-length encoding (no method shrinks everything). Veenendaal: tokenization
(where a word is cut decides what it says). Assen: race conditions (lost
updates, atomic steps, storage rules, parallel agents). Bergen op Zoom: tests show
the presence of bugs, never their absence (La Pucelle, 1747). Velsen: bottlenecks (measure
first, widen the narrowest step, re-measure). Capelle aan den IJssel: circuit
breakers (trip, fallback, test, reopen). Wassenaar: queueing and the
waiting-time curve (M/M/1, Little's law). Voorschoten: refactoring versus
rewriting (characterisation tests first). Oegstgeest: divide and conquer
(halving, binary search, decomposition for AI). Rijswijk: API contracts and
versioning (semver, deprecation, pinned AI model versions). Diemen: graphs and
shortest paths (Dijkstra, the cost you choose, AI calling a real solver). Middelburg: security
without a hidden method (Kerckhoffs, key spaces, no secrets in prompts).
Run keyword checks with case-sensitive grep -rlF: grep -rliF crashes on
this machine and returns false zeros. Before claiming anything, print the opening of every page's
localProject in one pass instead of trusting this list.

### Watch item opened 2026-09-08: sibling district pages drift up

Amsterdam-Noord scored 5.5 percent against Amsterdam-Centrum, the highest
sibling pair in the cluster so far, against 1.9 to 4.8 for everything before
it. District pages share a skeleton the city pages did not: the same
stadsdeel-entry framing, the same wijk-by-wijk cell grid, the same
"figures published for N of the district's wijken" sentence. With six more
Amsterdam districts to come, that drift will cross the 6 percent warn line
unless section headings, cell structures and the connective prose around the
wijk figures are varied deliberately from page to page rather than reused.
Vary the SHAPE, not just the words.

RESOLVED-ISH 2026-09-09: it works. Amsterdam-Zuid moved the wijk figures
out of a card grid and into a table, and put the spec block first in the
context section. Overlap went 4.8 -> 5.5 -> 5.6 -> 4.9. Changing which
BLOCK KIND carries the wijk data is the lever; rewording the cards is not.
Confirmed again on West, which kept a card grid for its wijken and came
back to 5.5. For Nieuw-West, Zuidoost and Weesp: put the wijk figures in
a table, as Zuid did.

AND THE REAL LESSON, from Nieuw-West hitting 8.5 percent against West on
first build: a table only helps if its COLUMNS differ too. Nieuw-West first
carried a "what the entry publishes / date / used here" table that mirrored
West's row for row, plus the same stock sentences ("never combined with a
2026 figure", "no series is drawn across it", "a partial average is not an
average", "mixing vintages is the Apeldoorn page's argument"). Replacing the
table with a decisions timeline on a different axis and rewriting nine stock
passages took it 8.5 -> 5.0. Those stock sentences are the real repeat
offenders across ALL district pages; write them fresh every time.

AND THE TRAP INSIDE THE FIX, seen on Zuidoost at 6.3 percent: the fresh
wording you invent to escape page N becomes the stock wording of page N+1.
Zuidoost reused the delivery cells and FAQ answers written to rescue
Nieuw-West. Rewriting those eight passages again took it 6.3 -> 4.5. Check
each new district against the PREVIOUS one, not against the template.

### Phase 4 method note, settled 2026-09-08 on Amsterdam-Centrum

Stadsdelen are NOT a CBS publication level. `allecijfers.nl` publishes Amsterdam
at municipality, wijk and buurt level only, with no stadsdeel pages, and the
Wikipedia stadsdeel articles carry inconsistent vintages (Centrum 2026,
Nieuw-West 2021). So the Phase 3 spine of one statistics row per page does not
exist here.

District pages are therefore built as: district identity, population, area,
governance and wijk list from the stadsdeel entry, plus FULL published figures
for three to five named wijken beneath it from `allecijfers.nl/wijk/<name>-<city>/`
(population 2026, households/area/density/housing/tenure 2025, income 2024).
That is closer to the spec's A.3b rule than a municipal table would have been,
because everything on the page is true of that district and false of its
neighbours. Never compute a district average from a subset of its wijken.

Two mechanical points: district pages are NOT added to the national hub's
markets list (`finish_page.py` skips it when the type is `district`); they link
up through their city page instead. And `parents` carries two entries, the
national hub then the city, so the breadcrumb reads Home / Netherlands / City.

### Pre-existing cluster-gate failure, found 2026-09-08, NOT caused by the NL build

`node scripts/check-cluster-uniqueness.js coding-global` exits 1 on
`FAIL 12.6% coding-classes-in-leicester vs coding-classes-in-birmingham`.
Both pages last changed in `f1fa15a3`, before this cluster started, and neither
has been touched by any NL commit. Every NL page scores between 1.9 and 6.0.

Why it stayed invisible: `scripts/nl/check.js` prints only the rows for the slug
being checked, so a failing pair elsewhere in the cluster shows up merely as the
trailing legend line "1 page(s) over the fail threshold". Running the script with
no argument scores a different cluster and reports "All cluster pages within
threshold", which is what made it look stale. Always pass `coding-global`.

The shared text is the shared chrome: "Modern Age Coders teaches live online
coding and maths to ages 6 to 67 in ..." and "against the English national
curriculum from USD 100 a ...". Fixing it means rewriting those recurring
sentences on the Leicester page (html + md twin). Left alone deliberately:
it is a live page in another cluster and outside the NL scope.


- Pre-flight done 2026-09-07: hub dossier released `Almere` and `Eindhoven` (replaced with `Groep 3 to 5`, `VO student`); `pageTypeOf()` now reads `pageType` from the dossier.
- Group batch size on new pages is `5 to 10` (brand facts, owner ruling 2026-09-03). Older cg- pages still say 5 to 8; do not copy their trust strip.
- Pre-existing, not ours: `check-cluster-uniqueness.js coding-global` reports Leicester vs Birmingham at 12.6% (FAIL line is 12%). Left alone; flag to owner.
- Cluster-wide CSS fixes shipped with page 1 (all live cg- pages benefit): `.cg-pick-tag` and `.cg-price-label` raised to 0.75rem (were under the 12px floor on the 17px root); wrapped `<table>` elements and captions now styled (62 live pages had unstyled tables).
- Phase 1 COMPLETE with page 8 (all seven cities + the academy hub). Owner has not previewed; the preview gate was waived on the owner's instruction to build without waiting.
- ag- pipeline shipped with page 8: `scripts/nl/lib/render-ag.js`, `scripts/nl/register-ag.js`; `build.js`/`check.js` switch on `cluster: 'ag'` in the module. `.ag-source-note` is now defined in `ai-global.css` (the 10 live Oman academy pages used it naked). Facts learned: the secondary-source claim that 55% of schools offer informatica was WRONG; SLO July 2025 says 30.7% havo / 31.0% vwo, 8.9% / 12.6% of candidates.
- Tooling fixes shipped with page 1: `audit-rendered-ag-pages.mjs` counts cg-style picks (class on the img), accepts 4+ picks for cg, and scrolls the page before measuring so lazy thumbnails are not reported broken; Playwright resolved from `../../dashboard3/node_modules` via NODE_PATH in `scripts/nl/check.js`.
- FAQ answers must be PLAIN TEXT. They are copied verbatim into the FAQPage JSON-LD, so an <a> tag inside one makes schema != visible and fails the verify gate. Put downlinks in a spread cell or the next block instead. Caught and fixed 2026-09-07 on gelderland and noord-holland; the build has no guard for it, so keep FAQ answers free of markup by hand.

### The Hague method note (established row 64)

Den Haag publishes **45 wijken and 115 buurten** for **8 stadsdelen**, so the CBS
wijk names are sub-stadsdeel units and do NOT map one-to-one onto the stadsdelen.
`allecijfers.nl/wijk/centrum-den-haag/` is "Wijk 28 Centrum" at 21,955 residents,
not the stadsdeel Centrum at ~106,261. The Hague therefore uses the **Amsterdam
workaround**, not Rotterdam's one-fetch pattern:

- stadsdeel identity, area, dwelling stock and the wijk/buurt division come from
  the `nl.wikipedia.org` stadsdeel article (vintages vary, always date them);
- full published rows come from `allecijfers.nl/wijk/<naam>-den-haag/` for 3 to 5
  named wijken beneath it;
- **never** average a subset of wijken into a stadsdeel figure, and never set the
  stadsdeel density (computed on total area) beside a wijk density (computed on
  land) - that is a denominator comparison already claimed by Gadong and New York.

Two vintages exist for every stadsdeel total: Wikipedia's (2023, rounded) and the
city page's 2022 table. Neither is a 2026 count. Build the spine on the exact 2026
wijk rows and date the stadsdeel figure wherever it appears.

Slug gotcha: `schilderswijk-den-haag` 404s. The statistics office files it as
**Wijk 29 Schildersbuurt** at `/wijk/schildersbuurt-den-haag/`. Local name and CBS
name differ; name it as CBS does and note the local name once.

### Eindhoven method note (established row 72)

Eindhoven publishes **20 wijken and 116 buurten** for **7 stadsdelen** (the plan
said six and left out Tongelre). The six stadsdeel encyclopaedia articles name 19
wijken between them: Stratum (Oud-Stratum, Kortonjo, Putten), Gestel (Rozenknopje,
Oud-Gestel, Oud Kasteel), Strijp (Oud-Strijp, Halve Maan, Meerhoven), Woensel-Zuid
(Oud-Woensel, Erp, Begijnenbroek), Woensel-Noord (Ontginning, Achtse Molen,
Aanschot, Dommelbeemd), Tongelre (Oud-Tongelre, De Laak, Doornakkers). So
**Centrum is exactly one wijk** (buurten Binnenstad, Bergen, Witte Dame,
Fellenoord, TU-terrein) and its page reads buurten, not wijken.

Article slugs: `Stratum_(Eindhoven)`, `Gestel_(Eindhoven)`, `Strijp_(Eindhoven)`;
bare `Woensel-Zuid`, `Woensel-Noord`, `Tongelre`. Centrum has no article (both
`Centrum_(Eindhoven)` and `Centrum_(stadsdeel_van_Eindhoven)` 404). The 1920 merger
figures are in `Geschiedenis_van_Eindhoven` (75 to 6,300 ha, 6,500 to 46,000).

Watch items for the remaining six pages:
- Gestel's third wijk is "Oud Kasteel" in the encyclopaedia but the CBS list shows
  "Gestelse Ontginning". Resolve on the Gestel page before naming it.
- VERIFIED 2026-09-10 (verbatim infobox quotes): the encyclopaedia infoboxes for
  the two Woensels carry each other's figures. Woensel-Zuid box: "Inwoners (2023):
  64.790 (3.476 inw./km2)", "28.676 woningen", "Oppervlakte: 18,64 km2". Woensel-Noord
  box: "42.165 (5.117 inw./km2)", "21.250 woningen", "8,24 km2". Each box is internally
  consistent, but Woensel-Noord's four CBS wijken total exactly 1,864 ha (= Zuid's
  18.64 km2) and Woensel-Zuid's three total 824 ha (= Noord's 8.24 km2). 2026 wijk
  sums: Zuid 42,682, Noord 66,195. Never quote the Woensel boxes as-is. Spine for
  the Woensel-Zuid page: internal consistency is not correctness.
- Stadsdeel totals are 1 January 2023 (Stratum 35,665; Gestel 28,595; Strijp
  39,230; Woensel-Zuid 64,790; Woensel-Noord 42,165; Tongelre 23,105). Never add
  them to 2026 wijk rows.
- Noord-Brabant is **regio Zuid** for school holidays, not Midden like the Hague set.
- The city page's `next` block used an apostrophe form no plain string matched;
  patch it with a regex that accepts any apostrophe encoding.
