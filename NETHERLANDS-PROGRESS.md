# Netherlands cluster: progress tracker

Spec: `docs/superpowers/specs/2026-09-07-netherlands-cluster-design.md`
Plan: `docs/superpowers/plans/2026-09-07-netherlands-cluster.md`
Owner instruction 2026-09-07: build one page at a time, maximum quality, do not wait for approval between pages. One commit per page.

Per-page pipeline: research (8+ place facts, sourced) -> collision check (dossier strings + trap) -> `content/nl/<slug>.js` -> `node scripts/nl/build.js <slug>` -> `node scripts/nl/check.js <slug>` -> link down from parent -> record here -> commit `NL cluster: <slug> (<type>)`.

## Queue

Phase 1 (proof cities): amstelveen · amsterdam · eindhoven · the-hague · almere · utrecht · rotterdam · ai-and-python-academy-netherlands (ag-)
Phase 2 (provinces): noord-holland · zuid-holland · utrecht-province · noord-brabant · gelderland · overijssel · limburg · groningen-province · friesland · drenthe · flevoland · zeeland
Phase 3 (cities) COMPLETE 2026-09-08, all 27 built: groningen · tilburg · breda · nijmegen · arnhem · apeldoorn · haarlem · haarlemmermeer · zaanstad · amersfoort · enschede · den-bosch · zwolle · zoetermeer · leiden · leeuwarden · maastricht · ede · dordrecht · westland · alphen-aan-den-rijn · alkmaar · delft · emmen · deventer · venlo · uithoorn
Phase 4 (districts) IN PROGRESS, Amsterdam 8/8 COMPLETE 2026-09-09: amsterdam x8 (centrum, noord, oost, zuid, west, nieuw-west, zuidoost, weesp) · rotterdam x8 (centrum, charlois, delfshaven, feijenoord, hillegersberg-schiebroek, kralingen-crooswijk, prins-alexander, ijsselmonde) · the-hague x8 (centrum, escamp, haagse-hout, laak, leidschenveen-ypenburg, loosduinen, scheveningen, segbroek) · eindhoven x6 (centrum, gestel, stratum, strijp, woensel-noord, woensel-zuid)
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
| 62 | coding-classes-in-hillegersberg-schiebroek (hgs, #784C34) | district | 4,732 | 5.4% vs ijsselmonde | An AI will list four reasons this district is comfortable. Why should a teenager here ask how many are separate? | Agreement is evidence only if the measures are independent (value and income order seven districts alike; ownership and density order them differently, so four measures are about two facts) | (this commit) |

## Skipped (kill criterion)

| Slug | Reason |
|------|--------|

## Codes in use (letters only; check `coding-global.css` before assigning)

Reserved by older clusters and NOT available: hmr (Al Hamra), lei (Leicester), mst? free, amr (Al Amarat), adm (Adam), ede? free.
Assigned so far: cg: amv (Amstelveen), ams (Amsterdam), ehv (Eindhoven), dhg (The Hague), alm (Almere), utr (Utrecht), rtm (Rotterdam) · ag: nla (academy hub) · provinces: nhl (Noord-Holland), zhl (Zuid-Holland), utp (Utrecht), gld (Gelderland), ovr (Overijssel), lim (Limburg), grp (Groningen), nbr (Noord-Brabant), frl (Friesland), dre (Drenthe), flv (Flevoland), zld (Zeeland) · cities: grn (Groningen), tlb (Tilburg), brd (Breda), nij (Nijmegen), arn (Arnhem), apd (Apeldoorn), hlm (Haarlem), hmm (Haarlemmermeer), zns (Zaanstad), amf (Amersfoort), ens (Enschede), dbo (Den Bosch), zwo (Zwolle), ztm (Zoetermeer), lde (Leiden), lwd (Leeuwarden), mst (Maastricht), ede (Ede), drd (Dordrecht), wst (Westland), alp (Alphen aan den Rijn), alk (Alkmaar), dlf (Delft), emm (Emmen), dev (Deventer), vnl (Venlo), uit (Uithoorn) · districts: acn (Amsterdam-Centrum), anr (Amsterdam-Noord), aos (Amsterdam-Oost), azd (Amsterdam-Zuid), awt (Amsterdam-West), anw (Amsterdam Nieuw-West), azo (Amsterdam-Zuidoost), wsp (Weesp), rtc (Rotterdam Centrum), dfh (Delfshaven), fyn (Feijenoord), chl (Charlois), ijs (IJsselmonde), krc (Kralingen-Crooswijk), hgs (Hillegersberg-Schiebroek)

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
