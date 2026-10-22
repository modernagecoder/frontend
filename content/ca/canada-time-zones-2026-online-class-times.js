'use strict';
// Canada's 2026 clock changes and online class times (ag- scheduling reference; Canada cluster Plan 2, row 64).
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Kept about class scheduling: no health, survey or politics framing from the releases.
// Sources, read raw (government files saved 22 October 2026 in keyword-research-2026-09/ca/src/geo/tz/, re-grepped for
// every quote; the Manitoba proclamation and the tzdb asia file fetched 22 October 2026 into
// ca/src-pilots/canada-time-zones-2026-online-class-times/):
//  - BC Gov News 2026AG0013-000209 (2 March 2026): "B.C. will adopt permanent, year-round daylight saving time after
//    clocks shift forward an hour on Sunday, March 8, 2026"; "This will be the final time change in British Columbia.";
//    "Pacific time will be set seven hours behind co-ordinated universal time (UTC-7), matching the current offset used
//    during daylight saving time." The release's lines on East Kootenay and Golden and on Pacific time matching Alberta in
//    winter predate Alberta's June 2026 Act and the later local decisions, so they are NOT quoted as current.
//  - Alberta Official Time Act, RSA 2000 c O-5.7, "Current as of June 18, 2026": "official time" "means the time 6 hours
//    behind Coordinated Universal Time"; "No person shall use or observe within Alberta any time other than official time."
//  - Saskatchewan Bill 58, The Time Act, 2026: "central standard time" "means UTC-6 hours"; "the time to be observed in
//    Saskatchewan is central standard time"; "Saskatchewan" "includes the City of Lloydminster"; "This Act comes into force
//    by order of the Lieutenant Governor in Council." (whether that order has been made: NOT confirmed; said on the page).
//  - Manitoba news release item 75397 (17 September 2026): clocks "will not revert to standard time on Nov. 1"; "Manitoba
//    joins several other provinces and territories that have adopted or are moving toward a permanent time including
//    British Columbia, Yukon, Northwest Territories, Alberta and Saskatchewan." The Official Time Amendment Act (S.M. 2023,
//    c. 4): "Manitoba Standard Time" means "five hours behind Coordinated Universal Time (UTC)"; "The official time may be
//    referred to as "MBT"." Proclamation (web2.gov.mb.ca, 2023c4(2026-10-31).pdf): "we name October 31, 2026, as the day on
//    which The Official Time Amendment Act (S.M. 2023, c. 4) comes into force". Officials' names not reproduced.
//  - IANA tzdb 2026e (northamerica, zone1970.tab, asia): Rule Canada 2007 max, Mar Sun>=8 2:00 and Nov Sun>=1 2:00 (so
//    1 November 2026, 14 March 2027, 7 November 2027); America/Whitehorse -7:00 MST since 2020 Nov 1; America/Inuvik and
//    Yellowknife (link to Edmonton) -6:00 from 2026 Nov 1, NWT regulations "registered 2026-08-18" per a tzdb comment (the
//    regulation PDF itself returned 404, said on the page); Nunavut Iqaluit -5, Rankin_Inlet -6, Cambridge_Bay -7, all on
//    Rule Canada; NW Ontario following Manitoba is a tzdb assumption ("assume for the time being that they will");
//    Atikokan year-round -5; Blanc-Sablon year-round -4; East Kootenay and Golden year-round -06 (tzdb comments 2026-08-21
//    and 2026-09-24); Asia/Kolkata "5:30 - IST" with no rule (India time has no daylight saving).
// Our own material, labelled on the page: the converter program and its output (run under CPython on 22 October 2026, with
// fixed offsets so out-of-date device data cannot change it), the example class times (never a batch time), the
// hours-from-Toronto table derived from the offsets, and the five-step scheduling routine.
// Lesson family: fixed offsets versus rules (why a time without a zone is not a time).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const CONV = `# Our converter: one class time in Eastern time, shown in every Canadian zone.
# Fixed UTC offsets from the 2026 laws and tzdb 2026e, written in by hand, because
# a computer whose time zone data predates 2026 would still apply the old rules.
from datetime import datetime, timedelta, timezone

def tz(hours, minutes=0):
    sign = -1 if hours < 0 else 1
    return timezone(timedelta(hours=hours, minutes=sign * minutes))

WINTER = {  # 1 November 2026 to 14 March 2027
    "Eastern (ON, QC)": tz(-5), "Newfoundland": tz(-3, 30), "Atlantic": tz(-4),
    "Manitoba": tz(-5), "AB, SK, NWT": tz(-6), "BC, Yukon": tz(-7), "India": tz(5, 30)}
SUMMER = dict(WINTER, **{  # from 14 March 2027
    "Eastern (ON, QC)": tz(-4), "Newfoundland": tz(-2, 30), "Atlantic": tz(-3)})

def show(label, when, zones):
    start = when.replace(tzinfo=zones["Eastern (ON, QC)"])
    print(label)
    for name, zone in zones.items():
        local = start.astimezone(zone)
        print(f"  {name:18} {local:%a %d %b %H:%M}")

show("Class at 7:00 pm ET, Tuesday 17 November 2026:", datetime(2026, 11, 17, 19, 0), WINTER)
show("Class at 7:00 pm ET, Tuesday 20 April 2027:", datetime(2027, 4, 20, 19, 0), SUMMER)`;

const CONV_OUT = `Class at 7:00 pm ET, Tuesday 17 November 2026:
  Eastern (ON, QC)   Tue 17 Nov 19:00
  Newfoundland       Tue 17 Nov 20:30
  Atlantic           Tue 17 Nov 20:00
  Manitoba           Tue 17 Nov 19:00
  AB, SK, NWT        Tue 17 Nov 18:00
  BC, Yukon          Tue 17 Nov 17:00
  India              Wed 18 Nov 05:30
Class at 7:00 pm ET, Tuesday 20 April 2027:
  Eastern (ON, QC)   Tue 20 Apr 19:00
  Newfoundland       Tue 20 Apr 20:30
  Atlantic           Tue 20 Apr 20:00
  Manitoba           Tue 20 Apr 18:00
  AB, SK, NWT        Tue 20 Apr 17:00
  BC, Yukon          Tue 20 Apr 16:00
  India              Wed 21 Apr 04:30`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'CLASS TIMES', blurb: 'BC, Alberta, Saskatchewan and Manitoba stopped changing clocks in 2026. What that does to an online class time anywhere in Canada, from the governments\' own texts.' },
  slug: 'canada-time-zones-2026-online-class-times',
  code: 'can',
  accent: '#611614',
  accentRationale: 'Canada time zones 2026, class times: a deep oxblood #611614, the allocated Canada accent for this row, at least 6 RGB units from every site accent and 14 from the other Canada accents, contrast 12.13 on the paper #FBF8F2 (11.41 and 10.44 on the two tints)',
  pageType: 'market',
  market: CA,
  courseCodePage: false,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Canada time zones 2026 and class times',
  title: 'Canada Time Zones 2026: Online Class Times by Province',
  description: 'BC kept UTC-7 after 8 March 2026, Manitoba stays on UTC-5 from 1 November, Alberta and Saskatchewan sit at UTC-6: what that means for online class times.',
  ogDescription: 'Four provinces stopped changing their clocks in 2026. The new rules quoted from each government, and a full table of what one online class time means across Canada in winter and in summer.',
  twitterDescription: 'Canada\'s 2026 clock changes, quoted from the laws, and what they do to online class times.',
  pageName: 'Canada Time Zones 2026 and Online Class Times',
  webPageDescription: 'A scheduling reference for Canadian families taking live online classes: the 2026 changes to official time in British Columbia, Alberta, Saskatchewan and Manitoba, quoted from government sources, with class-time tables for winter 2026 to 2027 and summer 2027.',
  courseDescription: 'Live online coding and math classes for students across Canada, scheduled in each family\'s local time, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Time zones and class times',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#changes', label: 'What changed' },
    { href: '#laws', label: 'The laws' },
    { href: '#times', label: 'Class time table' },
    { href: '#toronto', label: 'Hours from Toronto' },
    { href: '#converter', label: 'Converter' }
  ],
  eyebrow: 'Canada &middot; Official time in 2026 &middot; Scheduling online classes',
  h1: 'Canada time zones in 2026 and online class times',
  lede: 'Until this year a Canadian family could assume two clock changes, one in March and one in November, almost everywhere except Saskatchewan and Yukon. That is no longer true. British Columbia made its last change on 8 March 2026 and now stays on UTC-7. Alberta\'s new Official Time Act fixes the province at six hours behind UTC. Saskatchewan has passed a new Time Act at UTC-6, and Manitoba stops at UTC-5 from 31 October 2026. Ontario, Quebec, the Atlantic provinces and Newfoundland still change. For anyone booking a live online class across provinces, the gap between two cities now depends on the season in a new way. This page quotes each rule from the government\'s own text and then shows, in tables, what one class time looks like in every zone.',
  secondaryCta: { href: '#times', label: 'See the class time table' },
  wa: 'Hello Modern Age Coders, we are in Canada and want to book an online class at a time that works in our province. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; every class time confirmed in your own province\'s clock',
  spec: [
    ['British Columbia', 'UTC-7 all year'],
    ['Alberta, Saskatchewan', 'UTC-6 all year'],
    ['Manitoba', 'UTC-5 from 31 Oct 2026'],
    ['Ontario, Quebec', 'UTC-5 winter, UTC-4 summer'],
    ['Next Eastern changes', '1 Nov 2026, 14 Mar 2027'],
    ['India time', 'UTC+5:30, no change'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first class']
  ],
  capsuleQ: 'In short',
  capsule: 'From November 2026 BC stays at UTC-7, Alberta and Saskatchewan at UTC-6 and Manitoba at UTC-5 all year; Ontario, Quebec and Atlantic Canada still change, on 1 November 2026 and 14 March 2027. Modern Age Coders schedules live online classes in each family\'s local time, in a batch or one to one, including its CCC Junior and Senior Preparation course.',

  picks: {
    eyebrow: 'Classes across Canada',
    h2: 'Three Canadian courses scheduled in your own time zone',
    lede: 'Each of these follows a Canadian school or contest calendar, so the class time matters as much as the syllabus.',
    items: [
      { course: 'ccc-junior-and-senior-preparation-course', code: 'CAN / 01', title: 'CCC Junior and Senior Preparation', note: 'Ages 13 to 18. For the Canadian Computing Competition, which every school writes near the start of its own school day.' },
      { course: 'ics3u-ics4u-computer-science-companion-course', code: 'CAN / 02', title: 'Ontario Computer Science Companion', note: 'Grades 11 and 12, alongside ICS3U and ICS4U. We do not grant Ontario credits.' },
      { course: 'western-canada-grade-12-math-pre-calculus-12-math-30-1-course', code: 'CAN / 03', title: 'Western Canada Grade 12 Math', note: 'Ages 16 to 18. For BC and Alberta students, the two provinces that no longer change their clocks.' }
    ]
  },

  sections: [
    {
      id: 'changes', tint: 'tint', eyebrow: 'What changed',
      h2: 'Official time in each province and territory, from November 2026',
      lede: 'The offsets below apply from Sunday 1 November 2026, when this autumn\'s changes are complete. "Changes" means the region still moves its clocks on the second Sunday of March and the first Sunday of November.',
      body: [
        { kind: 'table', caption: 'Official time across Canada from 1 November 2026, from government texts and the IANA time zone database release 2026e', head: ['Where', 'Winter (from 1 Nov 2026)', 'Summer (from 14 Mar 2027)', 'What sets it'], rows: [
          ['British Columbia (most of the province)', 'UTC-7', 'UTC-7', 'Provincial decision announced 2 March 2026; last change 8 March 2026'],
          ['Alberta', 'UTC-6', 'UTC-6', 'Official Time Act, current as of 18 June 2026'],
          ['Saskatchewan', 'UTC-6', 'UTC-6', 'The province has long kept one time all year; the Time Act, 2026 sets UTC-6'],
          ['Manitoba', 'UTC-5', 'UTC-5', 'Official Time Amendment Act, in force from 31 October 2026'],
          ['Ontario (most) and Quebec (most)', 'UTC-5', 'UTC-4', 'Still changes'],
          ['New Brunswick, Nova Scotia, PEI, most of Labrador', 'UTC-4', 'UTC-3', 'Still changes'],
          ['Newfoundland', 'UTC-3:30', 'UTC-2:30', 'Still changes'],
          ['Yukon', 'UTC-7', 'UTC-7', 'One time all year since November 2020 (tz database)'],
          ['Northwest Territories', 'UTC-6', 'UTC-6', 'Territorial regulations recorded by the tz database in August 2026'],
          ['Nunavut', 'UTC-5, -6 or -7 by region', 'UTC-4, -5 or -6', 'Still changes, in three zones (tz database)']
        ] },
        { kind: 'p', mt: true, html: 'The change of note for families is in the middle of the country. Calgary, Edmonton, Regina and Saskatoon now share one clock all year, at UTC-6. Winnipeg shares Toronto\'s clock in winter, at UTC-5, and falls one hour behind Toronto when Eastern time moves forward on 14 March 2027. Vancouver is always one hour behind Calgary, because both provinces now stay put.' },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://news.gov.bc.ca/releases/2026AG0013-000209" rel="noopener" target="_blank">BC Gov News, 2 March 2026</a>; <a class="ag-inline-link" href="https://kings-printer.alberta.ca/documents/Acts/O05p7.pdf" rel="noopener" target="_blank">Alberta Official Time Act</a>; <a class="ag-inline-link" href="https://docs.legassembly.sk.ca/legdocs/Bills/30L2S/Bill30-58.pdf" rel="noopener" target="_blank">Saskatchewan Bill 58, The Time Act, 2026</a>; <a class="ag-inline-link" href="https://news.gov.mb.ca/news/?item=75397" rel="noopener" target="_blank">Manitoba news release, 17 September 2026</a> and <a class="ag-inline-link" href="https://web2.gov.mb.ca/laws/statutes/2023/pdf/c00423.pdf" rel="noopener" target="_blank">the Official Time Amendment Act</a>; <a class="ag-inline-link" href="https://data.iana.org/time-zones/tzdb/northamerica" rel="noopener" target="_blank">IANA tz database 2026e</a>. All read 22 October 2026.' }
      ]
    },
    {
      id: 'laws', tint: 'deep', eyebrow: 'In their own words',
      h2: 'The four provincial rules, quoted',
      lede: 'Each line below is copied from the government document named under it. Where a rule\'s start depends on a step we could not confirm, we say so.',
      body: [
        { kind: 'two',
          leftH3: 'British Columbia',
          left: [
            'The province\'s release of 2 March 2026 says "B.C. will adopt permanent, year-round daylight saving time after clocks shift forward an hour on Sunday, March 8, 2026" and "This will be the final time change in British Columbia."',
            'On the offset it is exact: "Pacific time will be set seven hours behind co-ordinated universal time (UTC-7), matching the current offset used during daylight saving time." So BC families will not move their clocks this autumn, and will not in March 2027 either.'
          ],
          rightH3: 'Alberta',
          right: [
            'The Official Time Act, in the consolidation "Current as of June 18, 2026", defines official time as the time that "means the time 6 hours behind Coordinated Universal Time".',
            'It adds: "No person shall use or observe within Alberta any time other than official time." Alberta\'s summer offset was already UTC-6, so the visible change comes on 1 November 2026, when Alberta clocks do not fall back.'
          ] },
        { kind: 'two', mt: true,
          leftH3: 'Saskatchewan',
          left: [
            'Bill 58, The Time Act, 2026, defines central standard time as one that "means UTC-6 hours", says "the time to be observed in Saskatchewan is central standard time", and says Saskatchewan "includes the City of Lloydminster".',
            'The bill also says "This Act comes into force by order of the Lieutenant Governor in Council." We could not confirm that the order has been made. In practice the clock is the same either way: Saskatchewan has not changed its clocks in decades, and Alberta now sits at UTC-6 too.'
          ],
          rightH3: 'Manitoba',
          right: [
            'Manitoba\'s release of 17 September 2026 says clocks "will not revert to standard time on Nov. 1". The proclamation then sets the date in law: "we name October 31, 2026, as the day on which The Official Time Amendment Act (S.M. 2023, c. 4) comes into force".',
            'That Act defines Manitoba Standard Time as "five hours behind Coordinated Universal Time (UTC)", and adds "The official time may be referred to as "MBT"." The release also notes Manitoba "joins several other provinces and territories that have adopted or are moving toward a permanent time including British Columbia, Yukon, Northwest Territories, Alberta and Saskatchewan."'
          ] },
        { kind: 'source', html: 'Sources: the four government documents named above, and the <a class="ag-inline-link" href="https://web2.gov.mb.ca/laws/statutes/proclamations/2023c4(2026-10-31).pdf" rel="noopener" target="_blank">Manitoba proclamation</a>, read 22 October 2026. We quote only the timekeeping lines; the releases\' other reasoning is outside this page\'s purpose.' }
      ]
    },
    {
      id: 'times', tint: 'tint', eyebrow: 'One class time, every zone',
      h2: 'What an online class time looks like across Canada',
      lede: 'Three example start times, written in Eastern time, converted into every Canadian zone for the coming winter and for summer 2027. These are illustrations only, not our batch times: families choose their own slot, and we confirm it in their local clock.',
      body: [
        { kind: 'table', caption: 'Example: if a class started at these Eastern times (our worked conversion, using the offsets on this page)', head: ['Zone', 'Weekday 4:30 pm ET, winter', 'Weekday 7:00 pm ET, winter', 'Saturday 10:00 am ET, winter', 'Weekday 4:30 pm ET, summer', 'Weekday 7:00 pm ET, summer', 'Saturday 10:00 am ET, summer'], rows: [
          ['Newfoundland', '6:00 pm', '8:30 pm', '11:30 am', '6:00 pm', '8:30 pm', '11:30 am'],
          ['Atlantic (NB, NS, PEI)', '5:30 pm', '8:00 pm', '11:00 am', '5:30 pm', '8:00 pm', '11:00 am'],
          ['Eastern (Ontario, Quebec)', '4:30 pm', '7:00 pm', '10:00 am', '4:30 pm', '7:00 pm', '10:00 am'],
          ['Manitoba', '4:30 pm', '7:00 pm', '10:00 am', '3:30 pm', '6:00 pm', '9:00 am'],
          ['Alberta, Saskatchewan, NWT', '3:30 pm', '6:00 pm', '9:00 am', '2:30 pm', '5:00 pm', '8:00 am'],
          ['British Columbia, Yukon', '2:30 pm', '5:00 pm', '8:00 am', '1:30 pm', '4:00 pm', '7:00 am'],
          ['India (for our teachers)', '3:00 am next day', '5:30 am next day', '8:30 pm same day', '2:00 am next day', '4:30 am next day', '7:30 pm same day']
        ] },
        { kind: 'p', mt: true, html: 'Winter means 1 November 2026 to 14 March 2027; summer means from 14 March 2027 until Eastern clocks fall back on 7 November 2027. India time is UTC+5:30 all year, with no daylight saving, according to the same tz database.' },
        { kind: 'two', mt: true,
          leftH3: 'Why no single slot suits everyone',
          left: [
            'Read across one row of the table and the problem is plain. A 4:30 pm Eastern start lands at 2:30 pm in Vancouver in winter and 1:30 pm in summer, inside the school day. A 7:00 pm Eastern start is 8:30 pm in St. John\'s, late for a younger child.',
            'That is why we do not publish one national batch time. A family picks a time that works in its own province, and the batch or the one-to-one slot is built around that.'
          ],
          rightH3: 'Who moves, and who stays',
          right: [
            'From November 2026, families in BC, Alberta, Saskatchewan, Manitoba, Yukon and the NWT keep the same clock all year. If their class is set in their own local time, nothing moves for them on 14 March 2027.',
            'What moves is everyone else\'s clock relative to them. A class fixed in Toronto time arrives an hour earlier in Calgary, Regina and Winnipeg when Eastern time springs forward. Fixing each class in the family\'s own time avoids that surprise.'
          ] }
      ]
    },
    {
      id: 'toronto', tint: 'deep', eyebrow: 'The gap to Toronto',
      h2: 'How far each zone is from Toronto, season by season',
      lede: 'Many Canadian timetables, including contest and exam schedules, are given in Eastern time. This table shows how the gap to Toronto shifts across the next three seasons. Our arithmetic, from the offsets above.',
      body: [
        { kind: 'table', caption: 'Hours behind (-) or ahead (+) of Toronto (our calculation from the official offsets)', head: ['Zone', 'Now, until 1 Nov 2026', '1 Nov 2026 to 14 Mar 2027', 'From 14 Mar 2027'], rows: [
          ['Newfoundland', '+1:30', '+1:30', '+1:30'],
          ['Atlantic (NB, NS, PEI)', '+1', '+1', '+1'],
          ['Manitoba', '-1', '0 (same clock)', '-1'],
          ['Saskatchewan', '-2', '-1', '-2'],
          ['Alberta', '-2', '-1', '-2'],
          ['Northwest Territories (Yellowknife)', '-2', '-1', '-2'],
          ['British Columbia (most)', '-3', '-2', '-3'],
          ['Yukon', '-3', '-2', '-3'],
          ['India', '+9:30', '+10:30', '+9:30']
        ] },
        { kind: 'p', mt: true, html: 'Read this way, the 2026 changes are simple to remember. Every zone that stopped changing is one hour closer to Toronto in winter than in summer, because only Toronto moves. Newfoundland and the Atlantic provinces move with Toronto, so their gap never changes. And the gap to India widens by an hour in the Canadian winter for the same reason.' },
        { kind: 'source', html: 'Offsets from the government texts quoted above and the IANA tz database 2026e (Asia/Kolkata for India time). If you are working from a Canadian contest timetable, our <a class="ag-inline-link" href="/ccc-junior-guide">CCC Junior guide</a> explains why the computing contest follows each school\'s own day instead of one national start time.' }
      ]
    },
    {
      id: 'edges', tint: 'tint', eyebrow: 'Exceptions',
      h2: 'Places that do not follow their province\'s main clock',
      lede: 'A province\'s official time is not always the clock every town keeps. These exceptions come from the IANA tz database\'s own notes, release 2026e; where the notes say a point is an assumption, so do we.',
      body: [
        { kind: 'table', caption: 'Local exceptions recorded in the tz database 2026e (read 22 October 2026)', head: ['Place', 'What the tz database records', 'How sure'], rows: [
          ['East Kootenay and Golden, BC', 'Stay aligned with Alberta, on UTC-6 all year, after local decisions in August and September 2026', 'Recorded from local decisions; one rural area was still to decide'],
          ['Northwestern Ontario, west of 90 degrees west', 'Shown on Manitoba\'s clock, so UTC-5 all year from November 2026', 'An assumption: the database says it will "assume for the time being that they will"'],
          ['Atikokan, Ontario', 'UTC-5 all year, no changes', 'Recorded in the database since at least the 1950s'],
          ['Blanc-Sablon area, Quebec', 'UTC-4 all year, no changes', 'Recorded in the database'],
          ['Lloydminster', 'UTC-6 all year, on either side of the Alberta and Saskatchewan border', 'Saskatchewan\'s bill names the city; Alberta is UTC-6 too'],
          ['Northwest Territories', 'UTC-6 all year from November 2026', 'Regulations recorded in August 2026; the regulation PDF returned an error when we tried it'],
          ['Nunavut', 'Three zones, at UTC-5, UTC-6 and UTC-7 in winter, all still changing', 'Recorded in the database; the territory\'s site refused our request']
        ] },
        { kind: 'p', mt: true, html: 'If your town is on a border or in one of these areas, tell us your town when you book. We set the class in the clock you actually live by, not the one a map suggests.' }
      ]
    },
    {
      id: 'converter', tint: 'deep', eyebrow: 'Our converter',
      h2: 'A short program that converts one class time into every zone',
      lede: 'A worked example in Python, written for this page. It uses fixed offsets typed in from the laws above rather than a device\'s built-in time zone rules, and that choice is the lesson.',
      body: [
        { kind: 'code', label: 'Our converter in Python', lang: 'python', code: CONV },
        { kind: 'code', label: 'What it prints (run on 22 October 2026)', lang: 'text', code: CONV_OUT, note: 'Same Eastern time, two seasons: Manitoba, Alberta, Saskatchewan, the NWT, BC and Yukon all show a time one hour earlier in April than in November, because Eastern time moved and they did not. India shows the next calendar day both times.' },
        { kind: 'two', mt: true,
          leftH3: 'Why fixed offsets',
          left: [
            'Python\'s standard library can look zones up by name, such as America/Vancouver, but it reads those rules from whatever time zone data the computer has. Data older than the 2026 changes would still move BC, Alberta or Manitoba in November.',
            'Typing the offsets in, with a comment saying where each came from, makes the program say exactly what the law says. The cost is that someone must update it if a rule changes again.'
          ],
          rightH3: 'What a student learns from it',
          right: [
            'A time written without a zone is not a time; it is half of one. The program refuses to work with a bare "7:00 pm": every datetime gets a zone before it is converted.',
            'Try it: change the Eastern start to 4:30 pm and check the output against our table above. Then add a row for Newfoundland in summer and predict it before you run it.'
          ] }
      ]
    },
    {
      id: 'routine', tint: 'tint', eyebrow: 'How we schedule',
      h2: 'Our routine for booking a class across provinces',
      lede: 'Five steps we follow with every Canadian family, so the class arrives when everyone expects it.',
      body: [
        { kind: 'ol', items: [
          '<b>We ask for your town, not only your province.</b> That catches the exceptions above, from Golden to Lloydminster, before the first class.',
          '<b>We agree the time in your clock.</b> The confirmation names your local time and zone, for example "5:00 pm Alberta time (UTC-6)" for a family in Calgary.',
          '<b>We send a calendar invitation that carries the zone.</b> A calendar converts it for each device; a time typed into a chat message does not.',
          '<b>We re-confirm around 1 November 2026 and 14 March 2027.</b> Those are the two dates when Eastern, Atlantic and Newfoundland clocks move, and the dates when a family in two provinces can be caught out.',
          '<b>We check your device if a time looks wrong.</b> A phone or laptop that has not updated its time zone data can still show an old offset for BC, Alberta or Manitoba. Updating the operating system usually fixes it.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Families split across provinces',
          left: [
            'A parent in Toronto booking for a child in Winnipeg sees the same clock all winter and a one-hour gap from March. We write both local times on the confirmation, so neither has to work it out.',
            'The same applies to a one-to-one slot shared between, say, Vancouver and Halifax: a three-hour gap all winter, widening to four hours from 14 March 2027.'
          ],
          rightH3: 'Contests and exams',
          right: [
            'Canadian contests and exams set their own timing rules. The national computing contest, for one, is written at each school near the start of its own school day, not at a single national moment.',
            'For anything with an official start time, we work from the organiser\'s published time and its zone, then convert, never the other way round.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Choosing a slot',
    h2: 'Four kinds of slot, by age and time zone',
    lede: 'Our own rule of thumb for picking a class time. Each family decides in the end.',
    table: { caption: 'Which slot tends to suit whom (ours)', head: ['Slot', 'Who it tends to suit'], rows: [
      ['1. Weekday, straight after school', 'Younger students in BC and Alberta, where an Eastern evening time falls too early'],
      ['2. Weekday evening', 'Teens in Ontario, Quebec and Manitoba, after homework and practice'],
      ['3. Weekend morning', 'Atlantic and Newfoundland families, and anyone with busy weeknights'],
      ['4. One to one, any time', 'Students fitting class around sport, jobs or a school timetable that changes']
    ] },
    left: { h3: 'For parents', ps: [
      'Pick the slot for the hardest week of the term, not the easiest. A class that survives exam week survives everything.',
      'If you live in a province that stopped changing clocks, your class time will not move in March 2027 as long as it is set in your own local time.'
    ] },
    right: { h3: 'For students', ps: [
      'Put the class in your calendar with its zone, and let the calendar do the arithmetic.',
      'If a class time ever looks an hour off, check your device\'s time zone setting before anything else.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses Canadian families book across time zones',
    lede: 'Each is taught live online by one regular teacher, in a batch or one to one, at a time set in the family\'s own zone.',
    bands: [
      { num: 'I', h3: 'Younger learners', sub: 'Ages 6 to 12', courses: [
        { code: 'CAN / KID / 01', slug: 'scratch-programming-complete-course', title: 'Scratch for kids', blurb: 'A first coding course for after-school slots.' },
        { code: 'CAN / KID / 02', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'Typed code and small AI projects.' },
        { code: 'CAN / KID / 03', slug: 'elementary-mathematics-complete-masterclass', title: 'Elementary math', blurb: 'Grades 1 to 5, on weekend mornings or weekdays.' }
      ] },
      { num: 'II', h3: 'Teens', sub: 'Ages 13 to 18', courses: [
        { code: 'CAN / TEEN / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'From first program to real projects.' },
        { code: 'CAN / TEEN / 02', slug: 'ontario-grade-12-university-math-mhf4u-mcv4u-course', title: 'Ontario Grade 12 math', blurb: 'MHF4U and MCV4U alongside school.' },
        { code: 'CAN / TEEN / 03', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning for teens', blurb: 'Python to working models.' }
      ] },
      { num: 'III', h3: 'Adults', sub: 'Ages 18 and up', courses: [
        { code: 'CAN / ADT / 01', slug: 'python-programming-masterclass-zero-to-advanced-college', title: 'Python masterclass', blurb: 'Zero to advanced, evenings in your zone.' },
        { code: 'CAN / ADT / 02', slug: 'data-structures-algorithms-masterclass-college', title: 'Data structures and algorithms', blurb: 'For university students and job seekers.' },
        { code: 'CAN / ADT / 03', slug: 'complete-generative-ai-masterclass-college', title: 'Generative AI', blurb: 'Building with language models, for adults.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live classes booked in your own clock',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school or in the evening, in your local time.' },
      { time: 'Weekends', l: 'Mornings that work from St. John\'s to Victoria.' },
      { time: '1-on-1', l: 'Any slot our teachers can cover, set in your zone.' }
    ],
    cells: [
      { h3: 'Your zone on every invite', p: 'The calendar does the converting.' },
      { h3: 'Re-confirmed twice a year', p: 'Around the Eastern clock changes.' },
      { h3: 'One regular teacher', p: 'The same teacher at the same local time.' },
      { h3: 'Reasoning first', p: 'Students think before they type.' },
      { h3: 'Nothing copied', p: 'Homework explained, never done for them.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Work our students have shipped',
  projectsLede: 'Students in many time zones, one standard of work. A few projects are below; the <a class="ag-inline-link" href="/student-labs">student labs</a> page lists more.',
  reviewsLede: 'Google reviews from parents, in their own words.',

  fees: {
    h2: 'Fees',
    lede: 'The fee is the same whichever zone you are in: a monthly fee for eight live classes a month, no contract, and the price shown in your own currency. Changing the class time later costs nothing.',
    free: ['A free first class', 'Booked in your local time', 'No card needed'],
    group: ['Fifteen to twenty students', 'One regular teacher', 'Choose your batch', 'Monthly billing'],
    one: ['Your own teacher', 'Any slot in your zone', 'Moved when your week changes']
  },

  faq: {
    eyebrow: 'Questions from Canadian families',
    h2: 'Canada\'s 2026 time changes: common questions',
    items: [
      { q: 'Does BC change its clocks in November 2026?', a: 'No. BC made its last change on Sunday, March 8, 2026 and now stays on Pacific time at UTC-7 all year. Clocks in most of BC will not fall back on 1 November 2026 and will not spring forward in March 2027.' },
      { q: 'Is Manitoba on permanent daylight time?', a: 'Yes, in effect. The proclamation names 31 October 2026 as the day Manitoba\'s Official Time Amendment Act comes into force, and the Act sets Manitoba Standard Time at five hours behind UTC all year. The province has announced that clocks will not revert to standard time on 1 November 2026.' },
      { q: 'What time zone is Alberta in now?', a: 'Alberta\'s Official Time Act sets official time at six hours behind UTC, all year. That is the same offset Alberta used in summer, so the difference shows from 1 November 2026, when Alberta clocks no longer fall back.' },
      { q: 'Are Alberta and Saskatchewan on the same time?', a: 'Yes, from November 2026 both are at UTC-6 all year. Saskatchewan\'s Time Act, 2026 sets UTC-6 and includes Lloydminster. We could not confirm the date that Act comes into force, but Saskatchewan already kept one time all year.' },
      { q: 'When do Ontario and Quebec change their clocks?', a: 'Eastern clocks fall back on Sunday 1 November 2026 and spring forward on Sunday 14 March 2027, under the Canadian rule of the first Sunday in November and the second Sunday in March. The Atlantic provinces and Newfoundland change on the same dates.' },
      { q: 'Is Winnipeg on the same time as Toronto?', a: 'In winter, yes: from 1 November 2026 to 14 March 2027 both are at UTC-5. From 14 March 2027 Toronto moves to UTC-4 and Winnipeg stays at UTC-5, so Winnipeg is one hour behind.' },
      { q: 'What time is it in India compared with Canada?', a: 'India time is UTC+5:30 all year. In the Canadian winter it is 10 hours 30 minutes ahead of Toronto and 12 hours 30 minutes ahead of Vancouver. From 14 March 2027 it is 9 hours 30 minutes ahead of Toronto, while the gap to Vancouver stays 12 hours 30 minutes.' },
      { q: 'When are your online classes for Canadian students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. Every class is confirmed in your own local time.' },
      { q: 'Will my class time move when the clocks change?', a: 'Not if it is set in your own local time and you live in BC, Alberta, Saskatchewan, Manitoba, Yukon or the NWT. Families in Ontario, Quebec and Atlantic Canada move with their own clocks. We re-confirm every class around 1 November 2026 and 14 March 2027.' },
      { q: 'Why does my phone show the wrong time for a class?', a: 'A device that has not updated its time zone data may still apply the old rules for BC, Alberta or Manitoba. Updating the operating system usually fixes it. Our invitations carry the time zone, so a corrected device shows the right local time.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'Classes and guides for students in every Canadian zone.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'All our pages for Canadian families.' },
      { href: '/coding-classes-in-british-columbia', label: 'British Columbia', p: 'Classes set in BC\'s permanent Pacific time.' },
      { href: '/coding-classes-in-alberta', label: 'Alberta', p: 'Classes in Alberta\'s UTC-6 time.' },
      { href: '/coding-classes-in-ontario', label: 'Ontario', p: 'Classes in Eastern time, which still changes.' },
      { href: '/coding-and-ai-classes-in-toronto', label: 'Toronto', p: 'Coding and AI classes for Toronto families.' },
      { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada', p: 'Math help in any province\'s clock.' },
      { href: '/ccc-junior-guide', label: 'CCC Junior guide', p: 'A contest that starts with each school\'s day.' },
      { href: '/one-on-one-ai-classes', label: 'One-to-one AI classes', p: 'Private classes at a time you choose.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'For when a program, like a clock, is an hour off.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'Tell us your town and the times that suit you, in your own clock. We find a teacher for that slot, confirm it in writing with your zone named, and the first class starts on time wherever you are.',
    readFirst: 'Before booking you can read <a class="ag-inline-link" href="/how-we-teach">what happens in a class</a>, or open the <a class="ag-inline-link" href="/courses">courses page</a> for every syllabus we teach.',
    note: 'Our teachers are in India, where the clock never changes, and teach over live video. That is why we take care over the Canadian side of every booking.',
    formNote: 'Free first class. No card details asked.'
  },

  footer: {
    cols: [
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-british-columbia', label: 'British Columbia' },
        { href: '/coding-classes-in-alberta', label: 'Alberta' },
        { href: '/coding-classes-in-ontario', label: 'Ontario' }
      ] },
      { h4: 'More', links: [
        { href: '/online-math-tutor-canada', label: 'Online math tutor, Canada' },
        { href: '/ccc-junior-guide', label: 'CCC Junior guide' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'A time needs a zone'
  },

  personalityCss: `
.ag-root.ag-can .ag-hero h1 { letter-spacing: -0.016em; }
.ag-root.ag-can .ag-capsule { border-left-width: 5px; }
.ag-root.ag-can .ag-table td { font-variant-numeric: tabular-nums; }
.ag-root.ag-can .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-can .ag-section-head h2 { max-width: 36ch; }
.ag-root.ag-can .ag-steps { gap: 0.85rem; }
`,

  dossier: {
    curriculumAuthority: 'BC Gov News release 2026AG0013-000209, Alberta Official Time Act RSA 2000 c O-5.7 (current as of June 18, 2026), Saskatchewan Bill 58 The Time Act, 2026, Manitoba news release 75397, the Official Time Amendment Act S.M. 2023 c. 4 and its proclamation of 31 October 2026, and the IANA tz database release 2026e (northamerica, zone1970.tab, asia), read raw on 22 October 2026.',
    localProject: 'Our class-time converter in Python with fixed offsets typed from the laws (run 22 October 2026: 7:00 pm ET on 17 November 2026 is 5:00 pm in BC and 5:30 am next day in India; on 20 April 2027 it is 4:00 pm in BC), an example class-time table for winter and summer, an hours-from-Toronto table across three seasons, and a five-step scheduling routine. Lesson family: fixed offsets versus rules.',
    requiredMentions: ['This will be the final time change in British Columbia.', 'means the time 6 hours behind Coordinated Universal Time', 'includes the City of Lloydminster', 'we name October 31, 2026, as the day on which', 'The official time may be referred to as', 'will not revert to standard time on Nov. 1', 'assume for the time being that they will', 'A time written without a zone is not a time', 'Wed 18 Nov 05:30', '0 (same clock)'],
    sources: [
      { claim: 'BC permanent UTC-7 after 8 March 2026; final time change.', url: 'https://news.gov.bc.ca/releases/2026AG0013-000209' },
      { claim: 'Alberta official time 6 hours behind UTC.', url: 'https://kings-printer.alberta.ca/documents/Acts/O05p7.pdf' },
      { claim: 'Saskatchewan Time Act, 2026: UTC-6, Lloydminster, coming into force by order.', url: 'https://docs.legassembly.sk.ca/legdocs/Bills/30L2S/Bill30-58.pdf' },
      { claim: 'Manitoba clocks will not revert on 1 November 2026.', url: 'https://news.gov.mb.ca/news/?item=75397' },
      { claim: 'Manitoba Standard Time five hours behind UTC; MBT.', url: 'https://web2.gov.mb.ca/laws/statutes/2023/pdf/c00423.pdf' },
      { claim: 'Proclamation: Act in force 31 October 2026.', url: 'https://web2.gov.mb.ca/laws/statutes/proclamations/2023c4(2026-10-31).pdf' },
      { claim: 'Canadian clock-change rule, Yukon, NWT, Nunavut and local exceptions; India UTC+5:30.', url: 'https://data.iana.org/time-zones/tzdb/northamerica' }
    ],
    rejectedClaims: [
      'BC\'s March 2026 lines that East Kootenay and Golden would keep switching and that Pacific time would match Alberta in winter: superseded by Alberta\'s June 2026 Act and later local decisions; not quoted as current.',
      'That Saskatchewan\'s Time Act, 2026 is in force: not confirmed; stated as unconfirmed.',
      'That northwestern Ontario follows Manitoba: a tz database assumption; labelled as one.',
      'The NWT regulation text: the PDF returned an error; the change is attributed to the tz database record.',
      'Health, survey and political reasons given in the BC and Manitoba releases: outside a scheduling page; not repeated.',
      'Any fixed national batch time: refused; the tables are labelled as examples and families choose their own slot.',
      'Any affiliation with a government: none, and the page says nothing to suggest one.'
    ]
  }
};
