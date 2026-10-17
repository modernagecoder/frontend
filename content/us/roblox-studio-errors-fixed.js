'use strict';
// Roblox Studio errors fixed (ag- school-tools door; US cluster Phase T, row 150).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Sources, read raw as Markdown on 17 October 2026 (create.roblox.com/docs/<path>.md; raw copies in
// keyword-research-2026-09/us/src/roblox-studio-errors-fixed/):
//  - cloud-services/data-stores/error-codes-and-limits: the error code table, e.g. "403" "StudioAccessToApisNotAllowed"
//    "Can't write to `DataStore` from Studio because API access is not enabled."; "102" "KeyNameLimit" "Key name exceeds
//    the 50 character limit."; "502" "RequestRejected"; "509" "OperationNotAllowed"; "wrap data store functions in
//    `Global.LuaGlobals.pcall()`"; "It does not always guarantee that the backend write did not occur.";
//    "InternalServerError" "Try again, ideally with exponential backoff."; Studio Run mode "separate set of static limits".
//  - cloud-services/data-stores: "By default, games tested in Studio can't access data stores"; File > Experience
//    Settings > Security > "Enable Studio Access to API Services"; "do not enable this setting for live games".
//  - cloud-services/http-service: GetAsync, PostAsync and RequestAsync "aren't enabled by default"; "Allow HTTP Requests";
//    "wait for two seconds, then four"; reference/engine/classes/HttpService: "500 requests per minute"; HttpEnabled
//    for unpublished experiences via the Command Bar: game:GetService("HttpService").HttpEnabled = true.
//  - reference/engine/enums/HttpError: "distinct from HTTP status codes (such as 404 or 500)"; values OK 0 to
//    InvalidRangeResponse 18, incl. "DnsResolve" 2, "TimedOut" 5, "CreatorEnvironmentsNotSupportedByService" 15.
//  - reference/engine/classes/Instance (WaitForChild): "If a call to this method exceeds 5 seconds without returning, and
//    no `timeOut` parameter has been specified, a warning will be printed"; with a timeout it returns nil.
//  - production/analytics/error-report: example message "attempt to index nil".
//  - scripting/locations: a new Script's "default run context is `Legacy`" and only runs in a server container.
//  - studio/output, studio/debugging, studio/testing-modes, studio/script-editor: Ctrl K clears Output; Show Source;
//    F10 Step Over, F11 Step Into, Shift F11 Step Out; Test F5, Run F8, Stop Shift F5; blue Client border, green Server
//    border; up to eight clients; Script Analysis window.
//  - reference/engine/classes/StarterGui: "A container for LayerCollector objects to be copied into the PlayerGui";
//    luau/variables: "Variable names are **case-sensitive**" (TestVar, TESTVAR); docs search API listed the education
//    lesson plan "Create Your Own Game on Roblox - 1 Hour Activity Plan".
//  - status.roblox.com (HTML, read 17 October 2026): components incl. Studio, Data Store and Game Join; incident
//    "Studio publish issues", September 28, 2026, "You may need to restart your Studio client."
// Not used: en.help.roblox.com (HTTP 403, not circumvented). Error 279 and a Studio "error 500" are not defined in any
// Creator document read; a DevForum hit for 279 is a user bug report, not a Roblox definition, so neither is explained.
// Our own material, labelled on the page: the three scripts (documented APIs only; the reader tests them), the triage
// order, the error-to-cause table wording and the retry arithmetic (waits of 2 and 4 seconds: 2 + 4 = 6 seconds at most
// before the third try fails for good).
// Lesson family: defensive programming (expect failure, protect the call, report clearly).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SAVE = `-- ServerScriptService > LoadCoins (ours)
local DataStoreService = game:GetService("DataStoreService")
local store = DataStoreService:GetDataStore("Coins_v1")

local function loadCoins(player)
  local key = "player_" .. player.UserId
  for attempt = 1, 3 do
    local ok, result = pcall(function()
      return store:GetAsync(key)
    end)
    if ok then
      return result or 0
    end
    warn("Try " .. attempt .. ": " .. tostring(result))
    if attempt < 3 then
      task.wait(2 ^ attempt) -- 2 s, then 4 s
    end
  end
  return nil -- loading failed; do not save over it
end`;

const WAIT = `-- LocalScript in StarterPlayerScripts (ours)
local Players = game:GetService("Players")
local player = Players.LocalPlayer
local gui = player:WaitForChild("PlayerGui")

-- wait at most 10 seconds, not forever
local shop = gui:WaitForChild("Shop", 10)
if not shop then
  warn("No Shop: check its name and parent")
  return
end
shop.Enabled = true`;

const HTTP = `-- Script in ServerScriptService (ours)
local HttpService = game:GetService("HttpService")

local ok, response = pcall(function()
  return HttpService:RequestAsync({
    Url = "https://example.com/status.json",
    Method = "GET",
  })
end)

if not ok then
  -- off, bad address, or no connection
  warn("No answer: " .. tostring(response))
elseif not response.Success then
  -- the website answered with an error code
  warn("Website said " .. response.StatusCode)
else
  print(response.Body)
end`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'STUDIO ERRORS', blurb: 'Roblox Studio errors explained from the Creator docs: data store 403, the 501 to 513 codes, HTTP requests, endless waits, and the debugger.' },
  slug: 'roblox-studio-errors-fixed',
  code: 'rsef',
  accent: '#613C31',
  accentRationale: 'Roblox Studio errors, US: the allocated deep brick brown #613C31, a warning colour without the alarm of red, contrast 9.01, 8.47 and 7.75 on the three paper tints',
  pageType: 'market',
  market: US,
  routeLabel: 'Roblox Studio errors fixed',
  title: 'Roblox Studio Errors Fixed: 403, 502, HTTP and Output',
  description: 'Roblox Studio errors fixed from the Creator docs: data store error 403 in Studio, codes 501 to 513, HTTP requests switched off, endless waits, and the debugger.',
  ogDescription: 'The error codes Roblox documents for Studio, what each one means, and the fix, with three scripts that fail safely. Plus what to check when the error is not in the docs.',
  twitterDescription: 'Roblox Studio errors from the Creator docs: 403, 502, HTTP, endless waits.',
  pageName: 'Roblox Studio Errors Fixed',
  webPageDescription: 'A troubleshooting guide for US students stuck on a Roblox Studio error, built from the Roblox Creator documentation and the Roblox status page, with three defensive Luau scripts.',
  courseDescription: 'Live online Roblox Studio and Luau classes for kids and teens in the United States, where debugging is taught as a skill, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Roblox Studio errors fixed',
  navLinks: [
    { href: '#codes', label: 'Error codes' },
    { href: '#triage', label: 'First checks' },
    { href: '#datastore', label: 'Data stores' },
    { href: '#http', label: 'HTTP' },
    { href: '#waits', label: 'Endless waits' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages 10 to 18 &middot; Roblox Studio troubleshooting',
  h1: 'Roblox Studio errors, fixed',
  lede: 'A red line in the Output window can stop a Roblox project for a whole evening. Most of those lines are not mysterious. Roblox publishes the meaning of its data store error codes, explains why web requests are switched off in a new game, and documents the warning a script prints when it waits for something that never arrives. This page gathers those answers in one place, in the order a stuck student needs them, with three short scripts that fail safely instead of crashing. Where an error number is not in Roblox&rsquo;s documentation, we say so and show where to look instead.',
  secondaryCta: { href: '#codes', label: 'Look up an error code' },
  wa: 'Hello Modern Age Coders, my child in the US keeps getting stuck on Roblox Studio errors. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Debugging taught in every Roblox class',
  spec: [
    ['For', 'Ages 10 to 18'],
    ['Tool', 'Roblox Studio'],
    ['Language', 'Luau'],
    ['Covers', 'Data store, HTTP, waits, debugger'],
    ['Source', 'Roblox Creator docs'],
    ['Help', 'Live, with your error on screen'],
    ['When', 'Weekday or weekend times'],
    ['First lesson', 'Free']
  ],
  capsuleQ: 'In short',
  capsule: 'Many Roblox Studio errors have documented causes. Error 403 from a data store means Studio has no API access: turn on Enable Studio Access to API Services under File, Experience Settings, Security, on a test copy. Codes 501 to 505 and 502 are server-side failures; wrap the call in pcall and retry. HTTP calls need Allow HTTP Requests. Modern Age Coders teaches this debugging live, ages 10 to 18.',

  picks: {
    eyebrow: 'Get unstuck with a teacher',
    h2: 'Three courses where debugging is part of every lesson',
    lede: 'Students bring the place file that is failing, and the class starts from the error in front of them.',
    items: [
      { course: 'roblox-game-coding-for-kids-lua-course', code: 'RSE / 01', title: 'Roblox game coding in Luau', note: 'For ages 8 to 14: scripts, data stores and reading the Output window.' },
      { course: 'complete-game-development-masterclass-for-teens', code: 'RSE / 02', title: 'Game development for teens', note: 'For teens: client and server code, then Unity and C#.' },
      { course: 'game-development-masterclass-for-kids', code: 'RSE / 03', title: 'Game development for kids', note: 'For younger kids: Scratch to Roblox, with testing habits from day one.' }
    ]
  },

  sections: [
    {
      id: 'codes', tint: 'tint', eyebrow: 'Look it up',
      h2: 'The error codes Roblox documents, and what each one asks you to do',
      lede: 'Roblox lists numbered errors for its data stores, the service games use to save coins, levels and inventories. These are the numbers that turn up in student searches. The wording in the middle column is Roblox&rsquo;s; the last column is our short version of the fix.',
      body: [
        { kind: 'table', caption: 'Data store error codes, from the Roblox Creator documentation (read 17 October 2026); fix column ours', head: ['Code', 'Name', 'Roblox&rsquo;s message', 'What to try'], rows: [
          ['101', 'KeyNameEmpty', 'Key name can&rsquo;t be empty.', 'Print the key before the call; a nil or empty string is the usual culprit'],
          ['102', 'KeyNameLimit', 'Key name exceeds the 50 character limit.', 'Use a short key such as player_ plus the UserId'],
          ['105', 'ValueTooLarge', 'Serialized value exceeds X limit.', 'Measure the data with JSONEncode and save less per key'],
          ['301 to 306', 'GetAsyncThrottle and siblings', 'Request dropped. Request was throttled but queue was full.', 'Too many calls too fast: save on leave and at intervals, not every second'],
          ['403', 'StudioAccessToApisNotAllowed', 'Can&rsquo;t write to DataStore from Studio because API access is not enabled.', 'Turn on Studio access on a test copy of the game (steps below)'],
          ['502', 'RequestRejected', 'API Services rejected the request with error X.', 'A problem on Roblox&rsquo;s side: wait, then retry'],
          ['501, 503 to 505', 'InternalError', 'Can&rsquo;t parse response because data might be corrupted (501).', 'Roblox says try again later; never overwrite the player&rsquo;s save after this'],
          ['509', 'OperationNotAllowed', 'Data store operations are blocked while running on a Personal RCC to prevent possible data corruption.', 'Writes are blocked on that private channel; test elsewhere']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the numbers tell you',
          left: [
            'The hundreds digit is a rough map. In Roblox&rsquo;s table, the 100s are mistakes in your own request (an empty key, a value too large), the 300s are throttling, the 400s are access and shutdown problems, and 501 to 505 are failures on Roblox&rsquo;s servers. A 100-range error is yours to fix and 501 to 505 are not. The rest of the 500s are different again: 509 is a blocked environment, and 511 to 513 are size and format limits in your own request, so retrying will not help those.',
            'There is no code 500 in that table. Its 500-range entries run from 501 to 513, so a student who searches for Roblox Studio error 500 is usually looking at one of those, or at a web server&rsquo;s status code, which is a different thing explained further down.'
          ],
          rightH3: 'The warning that matters most',
          right: [
            'Roblox points out that a failed write does not always mean nothing was written: in its words, it does not always guarantee that the backend write did not occur. So the safe reaction to a failed save is to read again before writing again.',
            'For server-side failures such as InternalServerError, Roblox&rsquo;s advice is to try again, ideally with exponential backoff, which means waiting longer after each failure. Script 1 below does exactly that.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://create.roblox.com/docs/cloud-services/data-stores/error-codes-and-limits" rel="noopener" target="_blank">Data store error codes and limits</a>, Roblox Creator documentation, read 17 October 2026. Messages shortened where Roblox uses a placeholder X. We are not connected with Roblox Corporation.' }
      ]
    },
    {
      id: 'triage', tint: 'deep', eyebrow: 'Before you search',
      h2: 'Six checks that solve most Studio errors before you open a browser',
      lede: 'This is the order our teachers follow when a student shares a screen and says it is broken. Each check uses a tool already inside Studio.',
      body: [
        { kind: 'ol', items: [
          '<b>Read the whole red line.</b> In the Output window, turn on Show Source so each message names its script and line number. Clear old messages with Ctrl K on Windows or Command K on a Mac, press Test again, and read the first error, not the last.',
          '<b>Check which side printed it.</b> In a solo test, Studio labels Output messages blue for the client and green for the server. A server error and a client error with the same text have different fixes.',
          '<b>Open Script Analysis.</b> The Analysis button on the Script tab lists errors and warnings found without running the game, such as a misspelled variable. Fix those first; they cause many of the runtime errors.',
          '<b>Check where the script lives.</b> A new Script runs in Legacy mode, which means it only runs in a server container such as ServerScriptService or Workspace. A Script dropped into StarterGui simply never runs, and nothing in Output says why.',
          '<b>Stop and look inside.</b> Click the gutter beside a line number to set a breakpoint, press Test (F5), and when Studio pauses, read the variables in the Watch window. Step Over is F10 and Step Into is F11.',
          '<b>Check Roblox itself.</b> If saving, publishing or joining fails for everyone at once, open status.roblox.com before changing any code. The page lists Studio, Data Store and Game Join as separate components.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the first error matters',
          left: [
            'One early failure often causes a chain of later ones. If a script cannot find a part on line 4, every line that uses that part fails too, and the Output window fills with messages that all point back to the same missing object.',
            'So fix the first message and test again: much of the list can disappear with it. Starting at the bottom means fixing symptoms and staying stuck.'
          ],
          rightH3: 'Test, Run and the two simulations',
          right: [
            'Roblox lists three ways to start a test: Test (F5) puts your avatar in the game, Run (F8) starts the world without an avatar, and Stop (Shift F5) resets everything. Studio runs a client and a server simulation during a solo test, with a blue border in Client mode and a green one in Server mode.',
            'For bugs that only appear with other players, the Server and Clients option can simulate up to eight clients. Roblox says one or two clients is usually enough.'
          ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: <a class="ag-inline-link" href="https://create.roblox.com/docs/studio/output" rel="noopener" target="_blank">Output</a>, <a class="ag-inline-link" href="https://create.roblox.com/docs/studio/testing-modes" rel="noopener" target="_blank">Studio testing modes</a>, <a class="ag-inline-link" href="https://create.roblox.com/docs/studio/debugging" rel="noopener" target="_blank">Debugging</a> and <a class="ag-inline-link" href="https://create.roblox.com/docs/scripting/locations" rel="noopener" target="_blank">Script types and locations</a>.' }
      ]
    },
    {
      id: 'datastore', tint: 'tint', eyebrow: 'Saving data',
      h2: 'Data store error 403 in Studio, and saving that survives a bad day',
      lede: 'One of the Studio errors students search for is also one of the easiest to fix. By default, games tested in Studio cannot reach data stores at all, so the first save a student writes fails with code 403.',
      body: [
        { kind: 'ol', items: [
          '<b>Publish the place first.</b> Roblox&rsquo;s steps for Studio access apply to a published game, so save it to Roblox before anything else.',
          '<b>Make a test copy.</b> Studio reads and writes the same data stores as the live game. Roblox warns against turning this setting on for live games, so publish a separate test version and use that.',
          '<b>Open the setting.</b> Go to File, then Experience Settings, then Security.',
          '<b>Turn it on.</b> Enable the toggle called Enable Studio Access to API Services, save, and press Test again.',
          '<b>Protect every call.</b> Roblox says to wrap data store functions in pcall, so one failure is reported instead of stopping the script. Script 1 shows the pattern.'
        ] },
        { kind: 'code', label: 'Script 1 &middot; load coins without crashing', lang: 'luau', code: SAVE, note: 'Our retry arithmetic: two failed tries wait 2 seconds and then 4 seconds, so a player waits at most 2 + 4 = 6 seconds before the script gives up and reports the failure. Returning nil, not 0, matters: a game that treats a failed load as zero coins would later save zero over the real number.' },
        { kind: 'two', mt: true,
          leftH3: 'What pcall actually does',
          left: [
            'pcall runs a function in protected mode. Instead of the error stopping the whole script, pcall hands back two values: true and the result when it worked, or false and the error message when it did not.',
            'That turns an error into an ordinary if statement. The student decides what happens next, which is the whole point: wait and retry, warn the player, or refuse to save.'
          ],
          rightH3: 'Limits you meet only in Studio',
          right: [
            'Roblox notes that data store requests made in Studio Run mode follow a separate, static set of limits that may be lower than a live server&rsquo;s. A script that is throttled in Studio may be fine in the live game, and the reverse is not guaranteed either.',
            'Roblox also caps key names at 50 characters. A key built from a player&rsquo;s name can pass that limit; the UserId, a number, never will.'
          ] }
      ]
    },
    {
      id: 'http', tint: 'deep', eyebrow: 'Web requests',
      h2: 'HTTP requests not enabled, and the difference between two kinds of 403',
      lede: 'Some games fetch data from a website, such as a daily message or a leaderboard kept elsewhere. In a new game this fails straight away, because Roblox ships with web requests switched off.',
      body: [
        { kind: 'table', caption: 'Roblox HttpService rules, from the Creator documentation (read 17 October 2026)', head: ['Rule', 'What Roblox says'], rows: [
          ['Off by default', 'GetAsync, PostAsync and RequestAsync are not enabled by default'],
          ['Turning it on', 'Allow HTTP Requests under File, Experience Settings, Security'],
          ['Unpublished games', 'Set it from the Command Bar: game:GetService("HttpService").HttpEnabled = true'],
          ['Rate limit', '500 requests per minute for external requests; requests over the limit fail'],
          ['Two kinds of failure', 'HttpError values are distinct from HTTP status codes (such as 404 or 500) that a server returns'],
          ['Retry advice', 'After a recoverable error, wait two seconds, then four, and so on']
        ] },
        { kind: 'code', label: 'Script 2 &middot; a web request that explains its own failure', lang: 'luau', code: HTTP, note: 'The two warn lines separate the two kinds of failure Roblox describes. If pcall fails, the request never finished: requests are switched off, the address is wrong, or the connection dropped. If it finished but Success is false, a website answered with an error status such as 403 or 500, and the fix is on that website, not in Studio.' },
        { kind: 'two', mt: true,
          leftH3: 'Reading HttpError names',
          left: [
            'Roblox numbers its own transport errors from OK (0) to InvalidRangeResponse (18). A few tell a student exactly what went wrong: DnsResolve (2) means the web address could not be found, TimedOut (5) means no answer arrived in time, and SslVerificationFail (11) means the site&rsquo;s certificate could not be checked.',
            'One is specific to testing: CreatorEnvironmentsNotSupportedByService (15) means the request came from a non-live environment such as Studio and the service on the other end does not accept those.'
          ],
          rightH3: 'So which 403 is it?',
          right: [
            'If the Output window shows a data store message with the name StudioAccessToApisNotAllowed, it is the Studio access setting from the previous section.',
            'If Script 2 reports a StatusCode of 403, a website refused the request, often because it needs a key or blocks automated traffic. No Studio setting fixes that; the website&rsquo;s own rules do.'
          ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: <a class="ag-inline-link" href="https://create.roblox.com/docs/cloud-services/http-service" rel="noopener" target="_blank">In-game HTTP requests</a>, the <a class="ag-inline-link" href="https://create.roblox.com/docs/reference/engine/classes/HttpService" rel="noopener" target="_blank">HttpService reference</a> and the <a class="ag-inline-link" href="https://create.roblox.com/docs/reference/engine/enums/HttpError" rel="noopener" target="_blank">HttpError enum</a>.' }
      ]
    },
    {
      id: 'waits', tint: 'tint', eyebrow: 'Scripts that hang',
      h2: 'Endless waits and attempt to index nil',
      lede: 'Two messages fill more student Output windows than any numbered code. Both come from a script reaching for an object that is not there yet, or not there at all.',
      body: [
        { kind: 'two',
          leftH3: 'The waiting warning',
          left: [
            'WaitForChild pauses a script until a child with the given name appears. Roblox documents what happens when it never does: if a call takes longer than 5 seconds and no timeout was given, Studio prints a warning that the thread may wait forever.',
            'The fix is almost never a longer wait. It is a typo in the name, an object parented somewhere else, or a client script looking for something that only exists on the server.'
          ],
          rightH3: 'Attempt to index nil',
          right: [
            'Roblox&rsquo;s own Error Report examples include the message attempt to index nil. It means the code wrote something like shop.Enabled when shop held nothing, usually because a lookup found no object.',
            'Roblox explains why this bites client code in particular: the engine does not guarantee the time or order in which objects replicate from the server to the client, so an object that exists on the server may not have arrived yet.'
          ] },
        { kind: 'code', label: 'Script 3 &middot; wait with a limit, then check', lang: 'luau', code: WAIT, note: 'With a timeout, WaitForChild returns nil instead of waiting forever, according to the Instance reference. The if not shop check turns a silent hang, or a later index nil error, into one clear warning that names what to look for.' },
        { kind: 'three', mt: true, cells: [
          { h3: 'Name it exactly', p: 'Luau names are case-sensitive; Roblox&rsquo;s own example is TestVar and TESTVAR. Copy object names from the Explorer instead of retyping them.' },
          { h3: 'Check the parent', p: 'Roblox describes StarterGui as a container whose interface objects are copied into each player&rsquo;s PlayerGui, which is why Script 3 looks there.' },
          { h3: 'Use FindFirstChild', p: 'Roblox calls FindFirstChild a more efficient choice for objects you assume already exist.' }
        ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: <a class="ag-inline-link" href="https://create.roblox.com/docs/reference/engine/classes/Instance" rel="noopener" target="_blank">Instance reference (WaitForChild)</a> and <a class="ag-inline-link" href="https://create.roblox.com/docs/production/analytics/error-report" rel="noopener" target="_blank">Error Report</a>.' }
      ]
    },
    {
      id: 'outages', tint: 'deep', eyebrow: 'When it is not your code',
      h2: 'Error 279, publish failures and outages: what the documentation does not cover',
      lede: 'Some error numbers that students search for appear nowhere in the Creator documentation we read. We would rather tell you that than guess.',
      body: [
        { kind: 'table', caption: 'Where to look when the number is not documented (our guide, built from the sources named)', head: ['What you see', 'What Roblox&rsquo;s docs say', 'Where to look'], rows: [
          ['Error 279', 'Not defined in any Creator document we read', 'status.roblox.com, the Game Join component'],
          ['Error 500 in Studio', 'No data store code 500; HttpError notes servers may return 500', 'Script 2&rsquo;s StatusCode, or the 501 to 513 table above'],
          ['Publishing fails', 'Covered by the status page during incidents', 'status.roblox.com, the Studio component'],
          ['Saves fail for everyone', 'Codes 501 to 505 say try again later', 'status.roblox.com, the Data Store component']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A real example from the status page',
          left: [
            'Roblox&rsquo;s status page records an incident titled Studio publish issues on September 28, 2026. Roblox first said it was looking to remediate publish failures on Studio, and the resolved note added: You may need to restart your Studio client.',
            'That is a useful habit for any student. When a publish fails, check the status page, restart Studio once it shows resolved, and only then start changing code.'
          ],
          rightH3: 'Why we do not explain 279',
          right: [
            'Roblox&rsquo;s help center blocked our requests, and the Creator documentation does not define 279. Forum threads describe it, but a forum post from another user is not an official explanation, so we do not print one.',
            'What we can say: a numbered error that appears while joining a game, rather than inside the Output window, is not a Luau problem, and no script on this page changes it.'
          ] },
        { kind: 'source', html: 'Source: <a class="ag-inline-link" href="https://status.roblox.com/" rel="noopener" target="_blank">Roblox Status</a>, read 17 October 2026, which then showed every component operational.' }
      ]
    },
    {
      id: 'help', tint: '', eyebrow: 'Homework and projects',
      h2: 'Stuck on a school Roblox project? What we do, and what we will not do',
      lede: 'Roblox publishes classroom activity plans for educators in its Creator documentation, so Studio turns up in some school clubs and classes, and students bring us errors from those projects as well as from their own games.',
      body: [
        { kind: 'two',
          leftH3: 'What a lesson looks like',
          left: [
            'The student shares their screen with the failing place open. The teacher asks them to read the error aloud, find the line, and say what they expected to happen. Most of the lesson is the student fixing it, with the teacher asking the next question.',
            'By the end they have a fix and, more usefully, a method: the six checks above, practised on their own code rather than a worksheet.'
          ],
          rightH3: 'What we never do',
          right: [
            'We do not write answers to graded assignments, and we do not hand over finished scripts for a project a teacher will mark. We teach the idea behind the error, such as protected calls or replication, so the student can solve the assignment themselves.',
            'If a school project has its own rules about outside help, follow them. Telling the class teacher that you are learning debugging with a tutor keeps everyone on the same page.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'How debugging skill grows',
    h2: 'Four stages from panic to calm',
    lede: 'Where a young Roblox scripter might be, and what moves them on.',
    table: { caption: 'Stages of debugging a Roblox game (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Stuck', 'Sees red text, closes the Output window, asks for help'],
      ['2. Reader', 'Reads the first error and finds the line it names'],
      ['3. Tester', 'Uses breakpoints, print and the client and server views to test a guess'],
      ['4. Defender', 'Writes code that expects failure: pcall, timeouts, nil checks']
    ] },
    left: { h3: 'For parents', ps: [
      'A child who is stuck for an hour is not failing at coding. Debugging is most of what programmers do, and it is learned exactly this way.',
      'Stage 1 to stage 2 can be quick once someone points at the right line. Stage 4 takes a term of writing real games.'
    ] },
    right: { h3: 'For students', ps: [
      'Errors are messages, not insults. Each one names a file, a line and a reason.',
      'Change one thing at a time, then test. Two changes at once make it impossible to know which one worked.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for students who want to fix their own bugs',
    lede: 'Every course is taught live by a teacher who reads your code with you, in a group or one to one.',
    bands: [
      { num: 'I', h3: 'Kids', sub: 'Ages 6 to 12', courses: [
        { code: 'RSE / KID / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Logic and events, no typing errors.' },
        { code: 'RSE / KID / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox coding in Luau', blurb: 'Studio, scripts and saving data.' },
        { code: 'RSE / KID / 03', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'Typed code with friendly error messages.' }
      ] },
      { num: 'II', h3: 'Teens', sub: 'Ages 13 to 18', courses: [
        { code: 'RSE / TEN / 01', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'Roblox, then Unity and C#.' },
        { code: 'RSE / TEN / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Tracebacks, tests and real projects.' },
        { code: 'RSE / TEN / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'The browser console as a debugger.' }
      ] },
      { num: 'III', h3: 'Going further', sub: 'Teens and adults', courses: [
        { code: 'RSE / PRO / 01', slug: 'game-development-complete-masterclass-college', title: 'Game development', blurb: 'Engines, builds and profiling.' },
        { code: 'RSE / PRO / 02', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'Compiler errors and memory, explained.' },
        { code: 'RSE / PRO / 03', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon preparation', blurb: 'Fixing bugs against a clock.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live help with the error on screen',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, in a batch that suits your time zone.' },
      { time: 'Weekends', l: 'Mornings are popular for longer debugging sessions.' },
      { time: '1-on-1', l: 'Bring today&rsquo;s error; set the time yourself.' }
    ],
    cells: [
      { h3: 'Your own place file', p: 'We debug the project you are building.' },
      { h3: 'Screen shared', p: 'The teacher watches Output with you.' },
      { h3: 'You type the fix', p: 'The student&rsquo;s hands stay on the keyboard.' },
      { h3: 'Same teacher', p: 'Someone who knows your code from last week.' },
      { h3: 'Any US time zone', p: 'Eastern to Hawaii, all online.' },
      { h3: 'Group or private', p: 'Fifteen to twenty in a batch, or just you.' }
    ]
  },

  projectsH2: 'What our students have built and shipped',
  projectsLede: 'A selection of finished student projects. The <a class="ag-inline-link" href="/student-labs">student labs</a> page has more.',
  reviewsLede: 'Unedited Google reviews from the parents who wrote them.',

  fees: {
    h2: 'Fees',
    lede: 'Roblox Studio is free, and so is the first lesson. After that you pay monthly for live teaching, priced in US dollars, with no semester contract; stop at the end of any month.',
    free: ['A free first lesson', 'Bring the error you are stuck on', 'No card needed'],
    group: ['A batch of fifteen to twenty', 'The same teacher each week', 'Pick your batch time', 'Paid monthly'],
    one: ['One student, one teacher', 'Your schedule', 'Your own project']
  },

  faq: {
    eyebrow: 'Questions from students and parents',
    h2: 'Roblox Studio errors: common questions',
    items: [
      { q: 'What does error 403 mean in Roblox Studio?', a: 'In Roblox\'s data store table, 403 is StudioAccessToApisNotAllowed: Studio cannot write to a data store because API access is not enabled. Turn on Enable Studio Access to API Services under File, Experience Settings, Security, on a test copy of a published game.' },
      { q: 'Is it safe to turn on Studio access to API services?', a: 'Roblox warns that Studio reads and writes the same data stores as the live game, and says not to enable the setting for live games. Publish a separate test version and enable it there.' },
      { q: 'What is Roblox Studio error 502?', a: 'In the data store table, 502 is RequestRejected: API Services rejected the request. It is a problem on Roblox\'s servers. Wrap the call in pcall, wait, and try again.' },
      { q: 'Is there a Roblox Studio error 500?', a: 'The data store table has no code 500; its 500-range codes run from 501 to 513. A 500 can also be a status code returned by a website your script contacted, which Roblox treats as separate from its own HttpError values.' },
      { q: 'What does Roblox error 279 mean?', a: 'The Roblox Creator documentation we read does not define error 279, so we do not guess. If it appears while joining a game, check the Game Join component on status.roblox.com; it is not something a script fixes.' },
      { q: 'Why do HTTP requests not work in my Roblox game?', a: 'Roblox switches them off by default. Turn on Allow HTTP Requests under File, Experience Settings, Security. For an unpublished game, Roblox says to set HttpEnabled to true from the Command Bar.' },
      { q: 'Why does my script wait forever?', a: 'WaitForChild waits until an object with that exact name appears. Roblox prints a warning if it waits more than 5 seconds with no timeout. Give it a timeout, check for nil, and check the name and parent in the Explorer.' },
      { q: 'What does attempt to index nil mean?', a: 'Your code used a value that held nothing, for example a part that a lookup did not find. Find the variable on the named line, then work out why it is empty, often a misspelled name or an object not loaded yet.' },
      { q: 'Will you do my Roblox assignment for me?', a: 'No. We do not write answers to graded work. We teach the concept behind the error, such as protected calls or where scripts run, so the student can solve the assignment themselves.' },
      { q: 'What times are lessons for US students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do Roblox coding lessons cost?', a: 'Nothing for the trial lesson. Teaching after that is billed one month at a time, and the fees block on this page lists the monthly amount in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US students building in Roblox Studio.',
    items: [
      { href: '/how-to-make-a-roblox-game', label: 'How to make a Roblox game', p: 'From install to a first published place.' },
      { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding classes', p: 'Our live Luau lessons for young builders.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Every page we have written for US families.' },
      { href: '/computer-science-extracurriculars', label: 'CS extracurriculars', p: 'Where game projects fit outside class.' },
      { href: '/coding-for-13-year-olds', label: 'Coding for 13 year olds', p: 'What a teen can tackle next.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside one of our live lessons.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us the error message and what the game was meant to do. The teacher reads it before the lesson, so the first session starts with the fix, not small talk.',
    readFirst: 'Curious how a debugging lesson runs? See <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or browse the full syllabus on <a class="ag-inline-link" href="/courses">the courses page</a>.',
    note: 'Lessons happen over video with teachers based in India, so there is nowhere to drive to. A WhatsApp message gets the quickest answer, whichever state you are in.',
    formNote: 'No payment details are asked for the trial lesson.'
  },

  footer: {
    cols: [
      { h4: 'Roblox and games', links: [
        { href: '/how-to-make-a-roblox-game', label: 'Make a Roblox game' },
        { href: '/roblox-coding-classes-for-kids', label: 'Roblox coding classes' },
        { href: '/c-plus-plus-game-development', label: 'C++ game development' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' },
        { href: '/coding-for-12-year-olds', label: 'Coding for 12 year olds' },
        { href: '/python-for-12-year-olds', label: 'Python for 12 year olds' }
      ] }
    ],
    bottomRight: 'Expect failure, protect the call, report clearly'
  },

  personalityCss: `
.ag-root.ag-rsef .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-rsef .ag-capsule { border-left-width: 5px; border-radius: 2px; }
.ag-root.ag-rsef .ag-section-head h2 { max-width: 32ch; }
.ag-root.ag-rsef .ag-table caption { text-align: left; font-variant-numeric: tabular-nums; }
.ag-root.ag-rsef .ag-steps { gap: 0.9rem; }
.ag-root.ag-rsef .ag-slots { gap: 1rem; }
`,

  dossier: {
    curriculumAuthority: 'Roblox Creator documentation read raw as Markdown on 17 October 2026: data store error code table (101, 102, 105, 301 to 306, 403 StudioAccessToApisNotAllowed, 501 to 505, 502 RequestRejected, 509, 511 to 513), pcall advice, write-uncertainty warning, exponential backoff, Studio Run mode limits; data stores Studio access steps and live-game warning; HttpService off by default, Allow HTTP Requests, HttpEnabled via Command Bar, 500 requests per minute; HttpError enum 0 to 18; WaitForChild 5-second warning; Script RunContext Legacy; Output, testing modes and debugging shortcuts. Roblox Status page, incident of September 28, 2026.',
    localProject: 'Three defensive Luau scripts (ours, documented APIs only): a data store load wrapped in pcall with retries after 2 and 4 seconds (at most 2 + 4 = 6 seconds), a RequestAsync call that separates transport failures from status codes, and WaitForChild with a 10-second timeout and nil check. A six-step triage order and a code-to-fix table. Lesson family: defensive programming.',
    requiredMentions: ['StudioAccessToApisNotAllowed', 'Enable Studio Access to API Services', 'Key name exceeds the 50 character limit', 'RequestRejected', 'OperationNotAllowed', 'CreatorEnvironmentsNotSupportedByService', '500 requests per minute', 'HttpEnabled = true', 'more than 5 seconds', 'Studio publish issues', 'You may need to restart your Studio client', '2 + 4 = 6 seconds'],
    sources: [
      { claim: 'Data store error codes, names and messages; pcall advice; write uncertainty; exponential backoff; Studio Run mode limits.', url: 'https://create.roblox.com/docs/cloud-services/data-stores/error-codes-and-limits' },
      { claim: 'Studio cannot access data stores by default; Enable Studio Access to API Services; do not enable for live games.', url: 'https://create.roblox.com/docs/cloud-services/data-stores' },
      { claim: 'HTTP requests off by default; Allow HTTP Requests; retry after two then four seconds.', url: 'https://create.roblox.com/docs/cloud-services/http-service' },
      { claim: 'HttpEnabled set from the Command Bar for unpublished games; 500 requests per minute.', url: 'https://create.roblox.com/docs/reference/engine/classes/HttpService' },
      { claim: 'HttpError values 0 to 18, distinct from server status codes such as 404 or 500.', url: 'https://create.roblox.com/docs/reference/engine/enums/HttpError' },
      { claim: 'WaitForChild returns nil after a timeout and warns after 5 seconds without one; replication order not guaranteed.', url: 'https://create.roblox.com/docs/reference/engine/classes/Instance' },
      { claim: 'Status components and the September 28, 2026 Studio publish incident.', url: 'https://status.roblox.com/' }
    ],
    rejectedClaims: [
      'A meaning for error 279: not defined in the Creator documentation read; the only search hit was a user bug report on the DevForum, so no definition is printed.',
      'Roblox help center articles: en.help.roblox.com returned HTTP 403 and was not circumvented.',
      'The exact text of the WaitForChild warning: the reference describes it but does not quote it, so the page describes it in Roblox\'s words without inventing the message.',
      'That we ran the three scripts on this page: they use only documented APIs and the reader tests them in Studio.',
      'Answers to graded school assignments: never given; the page says we teach the concept instead.',
      'Any affiliation with Roblox Corporation: none, and the page says so.'
    ]
  }
};
