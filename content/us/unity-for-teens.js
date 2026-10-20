'use strict';
// Unity for teens (ag- topic door; US cluster Phase 2, row 7). Search evidence: "unity for teens", "unity game
// development for kids", "unity game engine for kids", "is unity game development free", "is unity good for game
// development", "learn to code unity", "unity minimum requirements", "what is unity game development"
// (keyword-research-2026-09/us/rows.tsv, autocomplete_us.tsv).
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md. Sources, read raw on 17 October 2026 (copies in
// keyword-research-2026-09/us/src/unity-for-teens/):
//  - unity.com/legal/terms-of-service ("Last updated : June 30, 2026"), section 1 Eligibility: "You must be at least the
//    age to consent to processing of your personal data in your country of residence (e.g., 13 in the US, 16 in the EU, no
//    minimum age in AUNZ, etc.)"; "You must be at least 18 years old to make Purchases or submit User Content to Unity.";
//    under 18 "may only Purchase ... with the authorization of your legal guardian".
//  - unity.com/products/unity-personal: "Unity Personal provides free access to the most widely used game engine in the
//    world."; eligibility for "individuals and small organizations" under a revenue and funds-raised limit in "the last
//    12 months" (the figure is a dollar amount and is not typed on the page); "Customize the splash screen".
//  - unity.com/products/unity-student: "Students 16 years and older who are enrolled in an accredited educational
//    institution and can consent to having their personal information collected and processed."; "After SheerID verifies
//    your eligibility"; "The Unity Student plan is valid for one year."; "free access to Unity Pro" (unity.com/learn).
//  - unity.com/learn: "Visit Unity Learn for free, on-demand learning content designed for creators at every skill level."
//  - docs.unity3d.com/Manual/system-requirements (Unity 6.6, 6000.6): "Windows 10 version 21H1 (build 19043) or newer
//    (X64)"; "Ventura 13 or newer"; "Ubuntu 22.04, Ubuntu 24.04"; "a minimum of 8 GB RAM is recommended"; "supported on
//    workstations or laptop form factors running without emulation, container or compatibility layer".
//  - Input System 1.14 Quickstart: InputSystem.actions.FindAction("Move"), ReadValue<Vector2>(), IsPressed(); default
//    Action Maps "Player" and "UI"; "Move" bound to "WSAD" keys and arrow keys and a gamepad stick; "Jump" bound to the
//    space key.
//  - ScriptReference Input.GetAxis: "This API is part of the legacy Input Manager."; "you don't use this API in new
//    projects"; "For new projects, use the Input System package."
//  - ScriptReference MonoBehaviour.Update ("Update is called every frame, if the MonoBehaviour is enabled."),
//    OnTriggerEnter ("Both GameObjects must contain a Collider component. At least one of the colliders must be a trigger
//    collider and at least one must be a physics body collider."), Component.CompareTag, Object.Destroy ("Actual object
//    destruction is always delayed until after the current Update loop"), Time.deltaTime ("The interval in seconds from
//    the last frame to the current one"), Time.timeScale ("When timeScale is set to zero your application acts as if
//    paused if all your functions are frame rate independent.").
// Our own material, labelled on the page: both C# scripts (written only with APIs on the pages above), the plan-by-age
// table, the old-versus-new input table wording, the milestone list, and the deltaTime arithmetic (5 units a second is
// 5 / 60 = about 0.083 units a frame at 60 frames a second and 5 / 30 = about 0.167 at 30, the same 5 units each second).
// Lesson family: frame-rate independence (multiply by deltaTime).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const MOVE = `// PlayerMove.cs (ours, built on the Input System
// quickstart in the Unity docs)
using UnityEngine;
using UnityEngine.InputSystem;

public class PlayerMove : MonoBehaviour
{
    public float speed = 5.0f;  // units per second
    InputAction moveAction;

    void Start()
    {
        moveAction = InputSystem.actions.FindAction("Move");
    }

    void Update()
    {
        Vector2 input = moveAction.ReadValue<Vector2>();
        float x = input.x * speed * Time.deltaTime;
        float z = input.y * speed * Time.deltaTime;
        transform.Translate(x, 0, z);
    }
}`;

const COIN = `// Coin.cs on a coin whose collider is a trigger (ours)
using UnityEngine;

public class Coin : MonoBehaviour
{
    void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Player"))
        {
            Destroy(gameObject);  // the coin removes itself
        }
    }
}`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'UNITY', blurb: 'Unity for teens from Unity\'s own terms and docs: the age rules, the free plans, what computer it needs, and two C# scripts written the current way.' },
  slug: 'unity-for-teens',
  code: 'ut',
  accent: '#4D6B40',
  accentRationale: 'Unity for teens, US: the allocated sage green #4D6B40 (alloc.tsv row 7), greyer and bluer than the olive Godot page and the forest green game design page, readable for links on the paper',
  pageType: 'market',
  market: US,
  routeLabel: 'Unity for teens',
  title: 'Unity for Teens: Age Rules, Free Plans and First C# Scripts',
  description: 'Unity for teens from Unity\'s own terms and docs: the US age rule, the free Personal and Student plans, what computer it needs, and two first C# scripts.',
  ogDescription: 'Can a teenager use Unity? What Unity\'s terms say about age 13 and 18, the free plans, Unity 6.6 system requirements, and two C# scripts using the current Input System.',
  twitterDescription: 'Unity for teens: age rules, free plans, computer needs and two first C# scripts.',
  pageName: 'Unity for Teens',
  webPageDescription: 'A guide for US teenagers and parents to learning Unity: the account age rules in Unity\'s terms, Unity Personal and the Student plan, Unity 6.6 system requirements, the Input System, two C# scripts and a learning path.',
  courseDescription: 'Live online Unity and C# game development classes for teenagers aged 13 to 18 in the United States, taught by a regular teacher in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Unity for teens',
  navLinks: [
    { href: '#age', label: 'Age rules' },
    { href: '#free', label: 'Free plans' },
    { href: '#computer', label: 'Computer' },
    { href: '#scripts', label: 'C# scripts' },
    { href: '#input', label: 'Old tutorials' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages 13 to 18 &middot; Unity and C#',
  h1: 'Unity for teens',
  lede: 'Unity is a natural next stop for a teenager once Scratch and Roblox start to feel small. It is a professional game engine programmed in C#, and it is free for most young learners. Before a teen installs it, though, a family should know three things that most tutorials skip: what Unity&rsquo;s own terms say about age, which free plan fits, and whether the computer at home can run it. This page answers all three from Unity&rsquo;s terms and documentation, then gives two first C# scripts written the way Unity now recommends, and explains why so many older tutorials no longer match what a new project does.',
  secondaryCta: { href: '#scripts', label: 'See the two scripts' },
  wa: 'Hello Modern Age Coders, my teenager in the US wants to learn Unity and C#. Could we book a free first lesson?',
  heroNote: 'Since 2020 &middot; 10,000+ students &middot; Unity and C# for teens, live online',
  spec: [
    ['For', 'Ages 13 to 18'],
    ['Engine', 'Unity 6'],
    ['Language', 'C#'],
    ['Plan', 'Unity Personal, free'],
    ['Computer', 'Windows, Mac or Ubuntu'],
    ['Format', 'A batch, or one to one'],
    ['Times', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'Can a teen use Unity?',
  capsule: 'Yes, from 13 in the US. Unity&rsquo;s terms require users to be at least the age of consent to data processing, given as 13 in the US, and 18 to make purchases or submit content to Unity. Modern Age Coders teaches Unity live online to US teens aged 13 to 18, in a batch or one to one, through our ten-month Game Development for Teens course in C#.',

  picks: {
    eyebrow: 'Learn Unity with a teacher',
    h2: 'Three courses for a teen starting Unity',
    lede: 'Each is live, with the same teacher across the term, and each one ends with work a teen can show.',
    items: [
      { course: 'complete-game-development-masterclass-for-teens', code: 'UT / 01', title: 'Game development for teens', note: 'Ten months of Unity and C# for 13 to 18 year olds: 2D, then 3D, then a capstone.' },
      { course: 'cpp-programming-masterclass-for-teens', code: 'UT / 02', title: 'C++ for teens', note: 'For teens who want to see what sits beneath an engine.' },
      { course: 'python-complete-masterclass-teens', code: 'UT / 03', title: 'Python for teens', note: 'A gentler first language before C#, if a teen is brand new to code.' }
    ]
  },

  sections: [
    {
      id: 'age', tint: 'tint', eyebrow: 'Age and accounts',
      h2: 'What Unity&rsquo;s terms say about age',
      lede: 'Unity needs an account, and its Terms of Service open with an eligibility section. We read the version last updated June 30, 2026. Here is what it says, and what we take it to mean for a teenager.',
      body: [
        { kind: 'table', caption: 'Age rules in the Unity Terms of Service and Student plan page (read 17 October 2026)', head: ['Topic', 'What Unity says', 'In practice for a teen (ours)'], rows: [
          ['Minimum age', 'You must be at least the age to consent to processing of your personal data in your country, with 13 given for the US, 16 for the EU and no minimum for Australia and New Zealand', 'A US teen of 13 or older can hold an account'],
          ['Purchases and submitting content', '"You must be at least 18 years old to make Purchases or submit User Content to Unity."', 'Under 18, a teen should not plan to buy or submit assets on their own'],
          ['Buying under 18', 'Only with the authorization of a legal guardian, who also agrees to the terms', 'A parent handles any paid add-on'],
          ['Student plan', 'Students 16 years and older, enrolled in an accredited educational institution, who can consent to their personal data being processed', 'Possible from 16 for a teen in school, verified by SheerID'],
          ['How long the Student plan lasts', 'One year, renewable while the student is enrolled', 'Renew each school year']
        ] },
        { kind: 'table', mt: true, caption: 'Which way into Unity, by age (ours, based on the rules above)', head: ['Age', 'Our suggestion'], rows: [
          ['Under 13', 'Not Unity yet. Scratch, MakeCode Arcade, Roblox Studio or Godot, where the age fit is clearer'],
          ['13 to 15', 'Unity Personal on an account set up together with a parent'],
          ['16 to 17', 'Unity Personal, or the Student plan if the teen is enrolled in school and wants its extras'],
          ['18', 'Any plan the student is eligible for, including making purchases on their own']
        ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: <a class="ag-inline-link" href="https://unity.com/legal/terms-of-service" rel="noopener" target="_blank">Unity Terms of Service</a>, section 1, and <a class="ag-inline-link" href="https://unity.com/products/unity-student" rel="noopener" target="_blank">Unity Student plan</a>. This is a plain-English summary, not legal advice; terms change, so read them with your teen before signing up. We are not connected with Unity Technologies.' }
      ]
    },
    {
      id: 'free', tint: 'deep', eyebrow: 'Is it free?',
      h2: 'Is Unity free for a teenager?',
      lede: 'For almost every teen learning to make games, yes. There are two free routes, and they suit different ages.',
      body: [
        { kind: 'table', caption: 'Unity&rsquo;s free routes for students, from unity.com (read 17 October 2026)', head: ['Plan', 'Who it is for', 'What Unity says it gives'], rows: [
          ['Unity Personal', 'Individuals and small organizations below a revenue and funding limit over the last 12 months, set out on Unity&rsquo;s page', 'Free access to what Unity calls the most widely used game engine in the world, with a splash screen you can customize'],
          ['Unity Student', 'Students 16 and older enrolled in an accredited institution', 'Free access to Unity Pro, verified by SheerID and renewed yearly'],
          ['Unity Learn', 'Anyone', 'Free, on-demand learning content designed for creators at every skill level']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Which one we use with teens',
          left: [
            'We suggest Unity Personal for students aged 13 to 15. It has everything a learner needs for 2D and 3D games, and nothing about it limits a school-age project.',
            'Older students sometimes apply for the Student plan once they turn 16. We treat that as optional. The engine and the C# are the same; what matters is the work the student puts in.'
          ],
          rightH3: 'What a family might pay for',
          right: [
            'Unity itself costs nothing on these plans. Some families later buy art or sound packs from the Unity Asset Store; Unity&rsquo;s terms say purchases under 18 need a guardian&rsquo;s authorization, so that decision belongs to a parent.',
            'Free assets are plentiful too, and our course teaches students to make simple art and sound themselves, which avoids the question for many projects.'
          ] }
      ]
    },
    {
      id: 'computer', tint: 'tint', eyebrow: 'Will it run?',
      h2: 'What computer Unity needs, and why a Chromebook will not do',
      lede: 'Unity&rsquo;s documentation lists the Editor requirements for each version. The current manual covers Unity 6.6.',
      body: [
        { kind: 'table', caption: 'Unity 6.6 Editor system requirements, from docs.unity3d.com (read 17 October 2026)', head: ['System', 'Minimum version listed', 'Notes from the docs'], rows: [
          ['Windows', 'Windows 10 version 21H1 (build 19043) or newer on X64; Windows 11 21H2 or newer on Arm64', 'A GPU capable of DX10, DX11, DX12 or Vulkan'],
          ['macOS', 'Ventura 13 or newer', 'Apple M1 or above; Intel Macs are listed as deprecated'],
          ['Linux', 'Ubuntu 22.04 or Ubuntu 24.04', 'Gnome desktop on X11 or Wayland'],
          ['Memory', 'A minimum of 8 GB RAM is recommended', 'Larger projects need more'],
          ['Chromebook', 'ChromeOS is not on the list', 'The docs add that the Editor is supported on machines running without emulation, container or compatibility layer']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'If the family computer is older',
          left: [
            'Unity gives 8 GB as a recommended minimum and adds that the memory a project needs depends on its size and complexity. That is a good reason to keep first projects small on an older machine, as our course does.',
            'On a Mac, check the macOS version first. Ventura 13 is the floor in the current manual, and Apple silicon is the supported path going forward.'
          ],
          rightH3: 'If there is only a Chromebook',
          right: [
            'Unity is not the right first engine on a Chromebook. Godot&rsquo;s documentation says its Android editor supports Chromebooks supporting Android apps, so Godot with GDScript is the route we suggest until a Windows, Mac or Linux computer is available.',
            'The ideas carry over well: scenes, scripts, collisions and frame-rate independence work the same way, only the language and the menus change.'
          ] },
        { kind: 'source', html: 'Source, read 17 October 2026: <a class="ag-inline-link" href="https://docs.unity3d.com/Manual/system-requirements.html" rel="noopener" target="_blank">System requirements for Unity 6.6</a>. The Godot claim is from the Godot documentation page on its Android editor.' }
      ]
    },
    {
      id: 'scripts', tint: 'deep', eyebrow: 'First C# code',
      h2: 'Two first Unity scripts, written the current way',
      lede: 'Two short scripts we wrote for a first 3D practice scene. We used only APIs on Unity&rsquo;s own documentation pages: the Input System quickstart, Update, Time.deltaTime, OnTriggerEnter, CompareTag and Destroy.',
      body: [
        { kind: 'code', label: 'Script 1 &middot; move a player with WASD, arrows or a gamepad', lang: 'csharp', code: MOVE, note: 'The Input System quickstart says its default Move action is already bound to the WASD keys, the arrow keys and a gamepad stick, so this works with no input setup. Our arithmetic: at 5 units a second, the player moves 5 / 60, about 0.083 units, each frame at 60 frames a second and 5 / 30, about 0.167, at 30 frames a second. Either way it covers 5 units each second, which is the point of Time.deltaTime.' },
        { kind: 'code', label: 'Script 2 &middot; a coin that disappears when collected', lang: 'csharp', code: COIN, note: 'Tag the player object Player in the Inspector. Unity&rsquo;s OnTriggerEnter page says both objects need a Collider, at least one must be a trigger collider and at least one must be a physics body collider, so give the player a Rigidbody as well.' },
        { kind: 'two', mt: true,
          leftH3: 'Why Time.deltaTime is the first big idea',
          left: [
            'Unity&rsquo;s docs describe deltaTime as the interval in seconds from the last frame to the current one, and Update as being called every frame. A fast computer runs more frames than a slow one. Multiply by deltaTime and every player moves at the same real speed, whatever their machine.',
            'The docs add a neat consequence: when timeScale is set to zero, the application acts as if paused, provided every function is frame-rate independent. A teen who multiplies by deltaTime gets a pause button almost for free.'
          ],
          rightH3: 'Why the coin waits to vanish',
          right: [
            'Unity&rsquo;s Destroy page says actual object destruction is always delayed until after the current Update loop. So the coin finishes the frame it is in before it goes, which keeps the game&rsquo;s state tidy.',
            'The next lesson adds a score: the coin tells a game manager it was collected before it removes itself, which is a teen&rsquo;s first taste of objects talking to each other.'
          ] }
      ]
    },
    {
      id: 'input', tint: 'tint', eyebrow: 'Why tutorials disagree',
      h2: 'Old tutorials, new projects: the Input Manager and the Input System',
      lede: 'A common frustration: a teen copies code from a popular video, and it does not behave as shown. A likely cause is that the video uses Unity&rsquo;s older input code, which Unity now tells developers to avoid in new projects.',
      body: [
        { kind: 'table', caption: 'Old and new input in Unity, from the Unity docs (read 17 October 2026)', head: ['', 'Legacy Input Manager', 'Input System package'], rows: [
          ['Typical code', '<code>Input.GetAxis("Horizontal")</code>', '<code>moveAction.ReadValue&lt;Vector2&gt;()</code>'],
          ['What Unity says', 'Part of the legacy Input Manager; Unity says you don&rsquo;t use this API in new projects', 'For new projects, use the Input System package'],
          ['Where settings live', 'Edit, Project Settings, Input Manager', 'An Actions Asset, created from Project Settings, Input System Package'],
          ['Ready-made controls', 'Named axes such as Horizontal and Vertical', 'Action Maps called Player and UI, with actions such as Move, Look, Jump and Attack'],
          ['Jump key', 'Set by hand', 'The default Jump action is bound to the space key and a gamepad button']
        ] },
        { kind: 'ol', mt: true, items: [
          '<b>Check the date of a tutorial.</b> Older ones may use Input.GetAxis. That code is legacy, which is why it can disagree with a brand-new project.',
          '<b>Read the Console.</b> Unity prints errors in the Console window with the script name and line. Start there.',
          '<b>Look for the using line.</b> Code for the Input System begins with using UnityEngine.InputSystem.',
          '<b>Translate, do not mix.</b> Rewrite an old tutorial&rsquo;s input lines in the new style rather than mixing both in one script.',
          '<b>Ask why, not just how.</b> A teen who understands why the input changed will handle the next change in Unity on their own.'
        ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: <a class="ag-inline-link" href="https://docs.unity3d.com/ScriptReference/Input.GetAxis.html" rel="noopener" target="_blank">Input.GetAxis</a> and the <a class="ag-inline-link" href="https://docs.unity3d.com/Packages/com.unity.inputsystem@1.14/manual/QuickStartGuide.html" rel="noopener" target="_blank">Input System Quickstart Guide</a>.' }
      ]
    },
    {
      id: 'path', tint: 'deep', eyebrow: 'The path',
      h2: 'From first cube to a published game: our teen Unity path',
      lede: 'Our Game Development for Teens course runs ten months. These are the milestones a teen reaches along the way, phrased as what they can do, not what they sat through.',
      body: [
        { kind: 'table', caption: 'Milestones in our ten-month teen course (ours)', head: ['By the end of', 'A teen can'], rows: [
          ['Month 1', 'Write a C# script that moves an object with input and deltaTime, and explain each line'],
          ['Month 3', 'Finish and publish a complete 2D game with menus, sound and a score'],
          ['Month 6', 'Build a 3D level with a controller, animation and a finished goal'],
          ['Month 8', 'Add basic multiplayer or a mobile build, and design for players unlike themselves'],
          ['Month 10', 'Ship a capstone game, present it, and answer questions about how it works']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'From Roblox', p: 'Teens who scripted in Luau already know events and handlers. C# is stricter about types, and that is most of the adjustment.' },
          { h3: 'From Scratch or Python', p: 'Loops and conditions carry straight over. The new parts are classes, components and the Unity editor itself.' },
          { h3: 'From nothing', p: 'Fine. The course starts C# from zero, through games, at a pace grouped by age.' }
        ] },
        { kind: 'p', mt: true, html: 'Coming from Roblox? Our <a class="ag-inline-link" href="/how-to-make-a-roblox-game">Roblox game walkthrough</a> covers the Luau side. Drawn to engine internals? See <a class="ag-inline-link" href="/c-plus-plus-game-development">C++ game development</a> and <a class="ag-inline-link" href="/c-plus-plus-classes-for-teens">C++ classes for teens</a>.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Getting comfortable',
    h2: 'Four signs a teen is getting good at Unity',
    lede: 'What we look for, roughly in order.',
    table: { caption: 'Signs of progress in Unity (ours)', head: ['Sign', 'What you will see'], rows: [
      ['1. Navigates', 'Moves around the Scene view, adds objects and components without help'],
      ['2. Scripts', 'Writes small C# components and multiplies movement by deltaTime by habit'],
      ['3. Debugs', 'Reads the Console, finds the line, and fixes it before asking'],
      ['4. Structures', 'Splits a game into components that each do one job']
    ] },
    left: { h3: 'For parents', ps: [
      'Sign 3 matters most. A teen who reads errors calmly has learned something every programmer needs.',
      'Ask to see the Console. If it is full of red, that is normal at first; if it is clear, they have done good work.'
    ] },
    right: { h3: 'For teens', ps: [
      'Keep scripts small. One script per job beats one giant script that does everything.',
      'Copy a tutorial once, then rebuild it from memory. The second time is where you learn.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses around Unity and game making',
    lede: 'All live online, with a regular teacher, in a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Teens', sub: 'Ages 13 to 18', courses: [
        { code: 'UT / TEN / 01', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'Unity and C# over ten months.' },
        { code: 'UT / TEN / 02', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'Pointers, structure and speed.' },
        { code: 'UT / TEN / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Interactive pages and web games.' }
      ] },
      { num: 'II', h3: 'Before Unity', sub: 'Ages 6 to 14', courses: [
        { code: 'UT / PRE / 01', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Game logic in blocks.' },
        { code: 'UT / PRE / 02', slug: 'roblox-game-coding-for-kids-lua-course', title: 'Roblox game coding', blurb: 'Luau and events, ages 8 to 14.' },
        { code: 'UT / PRE / 03', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'Typed code before C#.' }
      ] },
      { num: 'III', h3: 'Alongside or after', sub: 'Teens and adults', courses: [
        { code: 'UT / ADV / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A second language for tools and AI.' },
        { code: 'UT / ADV / 02', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon preparation', blurb: 'Build fast with a team.' },
        { code: 'UT / ADV / 03', slug: 'game-development-complete-masterclass-college', title: 'Game development, adult track', blurb: 'Unity and Unreal at 18 and over.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'When lessons happen',
    h2: 'Unity classes at times a teenager can keep',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Choose a batch whose hour suits your time zone.' },
      { time: 'Weekends', l: 'Weekend mornings for teens with busy weekdays.' },
      { time: '1-on-1', l: 'Planned around exams, sport and jobs.' }
    ],
    cells: [
      { h3: 'A regular teacher', p: 'Who reviews every project.' },
      { h3: 'Unity on screen', p: 'Live work in the real editor.' },
      { h3: 'C# explained', p: 'Every line, not just copied.' },
      { h3: 'Published games', p: 'Finished work to show.' },
      { h3: 'Remote', p: 'From any US state.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty, or one to one.' }
    ]
  },

  projectsH2: 'Work by our students',
  projectsLede: 'Games and apps made by learners who started with no code at all. Browse more in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from families, unchanged.',

  fees: {
    h2: 'Fees',
    lede: 'Unity Personal costs nothing for eligible learners, so families pay only for the teaching. Payment is monthly in US dollars, there is no year-long contract, and you can stop after any month.',
    free: ['Free introductory lesson', 'Install Unity together', 'No card details'],
    group: ['Fifteen to twenty teens', 'One regular teacher', 'Choose a batch', 'Month to month'],
    one: ['Private Unity lessons', 'Scheduled by you', 'Built around their game']
  },

  faq: {
    eyebrow: 'Questions from families',
    h2: 'Unity for teens: common questions',
    items: [
      { q: 'Can a 13-year-old use Unity?', a: 'Yes, in the US. Unity\'s terms say users must be at least the age to consent to processing of personal data in their country, and give 13 for the US. Purchases and submitting content to Unity require users to be 18.' },
      { q: 'Is Unity free for teenagers?', a: 'For most, yes. Unity Personal is free for individuals and small organizations under the revenue and funding limit on Unity\'s page, and the Unity Student plan gives enrolled students aged 16 and older free access to Unity Pro.' },
      { q: 'Is Unity good for kids under 13?', a: 'Unity\'s terms set 13 as the US minimum age for an account, so for younger children we suggest Scratch, MakeCode Arcade, Roblox Studio or Godot until they turn 13.' },
      { q: 'What language does Unity use?', a: 'C#. Scripts are C# classes attached to objects as components, such as a script that moves a player or a coin that disappears when collected.' },
      { q: 'What computer does Unity need?', a: 'For Unity 6.6, the docs list Windows 10 version 21H1 or newer, macOS Ventura 13 or newer, or Ubuntu 22.04 or 24.04, and recommend a minimum of 8 GB of RAM.' },
      { q: 'Can you run Unity on a Chromebook?', a: 'Not as a supported setup. ChromeOS is not among the systems in Unity\'s Editor requirements, which also say the Editor is supported without emulation or compatibility layers. On a Chromebook we suggest Godot, whose Android editor supports Chromebooks supporting Android apps.' },
      { q: 'Why does tutorial code not work in my new Unity project?', a: 'A likely reason is that the tutorial uses Input.GetAxis, which Unity\'s docs say is part of the legacy Input Manager and should not be used in new projects. New projects should use the Input System package instead.' },
      { q: 'Should a teen learn Unity or Godot?', a: 'Unity suits teens 13 and over on Windows, Mac or Ubuntu who want C# and larger 3D games. Godot suits teens on lighter computers or Chromebooks and those who prefer a free, open-source engine.' },
      { q: 'How long does it take a teen to learn Unity?', a: 'Our teen course runs ten months, with a published 2D game by month three and a capstone at the end. The free first lesson ends with a script of their own moving an object.' },
      { q: 'Are classes at times that suit a teenager?', a: 'Yes. Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much are Unity classes?', a: 'The first lesson is free. Lessons are then paid month by month, with the figure in US dollars in the Fees section on this page.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for American teens choosing a path into game development.',
    items: [
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'Everything for US families.' },
      { href: '/how-to-make-a-roblox-game', label: 'How to make a Roblox game', p: 'Where many Unity students start.' },
      { href: '/c-plus-plus-game-development', label: 'C++ game development', p: 'The language under many engines.' },
      { href: '/c-plus-plus-classes-for-teens', label: 'C++ classes for teens', p: 'Our live C++ course.' },
      { href: '/coding-for-13-year-olds', label: 'Coding for 13 year olds', p: 'Choosing a first teen path.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'Inside a live lesson.' },
      { href: '/game-design-classes-for-teens', label: 'Game design classes for teens', p: 'Game design for teens: a method, real tuning code, and the US competitions that judge teen games.' },
      { href: '/game-design-summer-camp-for-teens', label: 'Game design summer camp for teens', p: 'Game design summer camp for teens: engines, a real script, a six-week plan.' },
      { href: '/learn-to-code-minecraft-mods', label: 'Learn to code Minecraft mods', p: 'Minecraft modding in Java for teens: Fabric or Forge, Java versions, a first item.' }
    ]
  },

  start: {
    h2: 'Book a free Unity lesson',
    lede: 'Tell us your teen&rsquo;s age, what they have coded before, and the computer they will use. In the first lesson the teacher helps them install Unity, open a project and get a first object moving with their own script.',
    readFirst: 'Want to know how a class runs first? See <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, and find each syllabus on our <a class="ag-inline-link" href="/courses">courses page</a>.',
    note: 'We teach from India, live on video, so a teen anywhere in the US joins the same classes. Message us on WhatsApp for the fastest reply.',
    formNote: 'The first lesson is free and needs no card.'
  },

  footer: {
    cols: [
      { h4: 'Game development', links: [
        { href: '/c-plus-plus-game-development', label: 'C++ game development' },
        { href: '/how-to-make-a-roblox-game', label: 'How to make a Roblox game' },
        { href: '/c-plus-plus-classes-for-teens', label: 'C++ classes for teens' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/coding-for-13-year-olds', label: 'Coding for 13 year olds' },
        { href: '/online-coding-classes-for-kids-usa', label: 'Online classes for kids' },
        { href: '/congressional-app-challenge-guide', label: 'Congressional App Challenge' }
      ] }
    ],
    bottomRight: 'Multiply by deltaTime'
  },

  personalityCss: `
.ag-root.ag-ut .ag-hero h1 { letter-spacing: -0.024em; }
.ag-root.ag-ut .ag-capsule { border-left-width: 3px; border-radius: 8px; }
.ag-root.ag-ut .ag-section-head h2 { max-width: 34ch; }
.ag-root.ag-ut .ag-table caption { text-align: left; text-transform: none; }
.ag-root.ag-ut .ag-code-note { line-height: 1.6; }
.ag-root.ag-ut .ag-grid-2 { gap: 2.2rem; }
`,

  dossier: {
    curriculumAuthority: 'Unity Terms of Service (last updated June 30, 2026), Unity Personal, Unity Student and Unity Learn pages on unity.com; Unity 6.6 Manual system requirements; Input System 1.14 Quickstart; Scripting API pages for Input.GetAxis, MonoBehaviour.Update, OnTriggerEnter, Component.CompareTag, Object.Destroy, Time.deltaTime and Time.timeScale; all read raw on 17 October 2026.',
    localProject: 'Two C# scripts (ours): PlayerMove using InputSystem.actions.FindAction, ReadValue and Time.deltaTime, and Coin using OnTriggerEnter, CompareTag and Destroy; the deltaTime arithmetic (5 / 60 = about 0.083 and 5 / 30 = about 0.167 units a frame, 5 units a second either way); a plan-by-age table drawn from the terms; a ten-month milestone list. Lesson family: frame-rate independence.',
    requiredMentions: ['June 30, 2026', 'with 13 given for the US', 'You must be at least 18 years old to make Purchases or submit User Content to Unity.', 'Students 16 years and older', 'verified by SheerID', 'Windows 10 version 21H1 (build 19043)', 'Ventura 13 or newer', 'without emulation, container or compatibility layer', 'InputSystem.actions.FindAction', 'about 0.083 units', 'physics body collider', 'delayed until after the current Update loop'],
    sources: [
      { claim: 'Eligibility: age of consent to data processing, 13 in the US; 18 for purchases or user content; guardian authorization.', url: 'https://unity.com/legal/terms-of-service' },
      { claim: 'Unity Personal free; eligibility under a revenue and funding limit; most widely used game engine; splash screen.', url: 'https://unity.com/products/unity-personal' },
      { claim: 'Student plan: 16 and older, enrolled, SheerID, one year, renewable.', url: 'https://unity.com/products/unity-student' },
      { claim: 'Unity Learn free on-demand content; Student plan free access to Unity Pro.', url: 'https://unity.com/learn' },
      { claim: 'Unity 6.6 Editor requirements: Windows, macOS, Ubuntu, 8 GB RAM, no emulation or compatibility layer.', url: 'https://docs.unity3d.com/Manual/system-requirements.html' },
      { claim: 'Input System default actions and the FindAction / ReadValue / IsPressed pattern.', url: 'https://docs.unity3d.com/Packages/com.unity.inputsystem@1.14/manual/QuickStartGuide.html' },
      { claim: 'Input.GetAxis is legacy; use the Input System for new projects.', url: 'https://docs.unity3d.com/ScriptReference/Input.GetAxis.html' },
      { claim: 'OnTriggerEnter collider requirements.', url: 'https://docs.unity3d.com/ScriptReference/MonoBehaviour.OnTriggerEnter.html' },
      { claim: 'Destroy is delayed until after the current Update loop.', url: 'https://docs.unity3d.com/ScriptReference/Object.Destroy.html' },
      { claim: 'deltaTime and timeScale behaviour.', url: 'https://docs.unity3d.com/ScriptReference/Time-timeScale.html' }
    ],
    rejectedClaims: [
      'The Unity Personal revenue and funding figure: a dollar amount, so it is not typed on the page; the page points to Unity\'s own page instead.',
      'The current Unity LTS version number: not verified on the release page read; only Unity 6.6, the version the manual shows, is named.',
      'That Unity runs on a Chromebook through Linux: Unity says the Editor is supported only without emulation, container or compatibility layer, so the page does not suggest it.',
      'That teens can sell on the Unity Asset Store: the terms require 18 to submit user content, so the page does not suggest it.',
      'That we ran the two scripts on this page: they use only the documented APIs and the reader tests them in Unity.',
      'Any affiliation with Unity Technologies: none, stated on the page.'
    ]
  }
};
