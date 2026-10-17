'use strict';
// Learn to code Minecraft mods (ag- topic door; US cluster Phase 2, row 10). Java Edition modding for teens; the kids'
// MakeCode page /minecraft-coding-classes-for-kids is a different search and is linked, not repeated.
// Spec docs/superpowers/specs/2026-10-17-us-cluster-design.md; plan docs/superpowers/plans/2026-10-17-us-cluster-build.md.
// Sources, fetched raw on 17 October 2026 (copies in keyword-research-2026-09/us/src/learn-to-code-minecraft-mods/):
//  - docs.fabricmc.net/develop/getting-started/setting-up (page version 26.2): "To develop mods for Minecraft 26.1, you
//    will need JDK 25."; IntelliJ IDEA "(recommended), or alternatively Visual Studio Code".
//  - docs.fabricmc.net .../creating-a-project: "Fabric Template Mod Generator"; path rules "Avoid cloud storage
//    directories (for example Microsoft OneDrive)", "Avoid non-ASCII characters", "Avoid spaces"; "Code examples given on
//    this site use the names present in the unobfuscated game."; .../project-structure: fabric.mod.json, entrypoints,
//    "ModInitializer", "ClientModInitializer"; .../building-a-mod: "./gradlew.bat build" / "./gradlew build", "build/libs",
//    "Use the JAR file with the shortest name outside development", "CurseForge and Modrinth".
//  - docs.fabricmc.net/develop/items/first-item: ResourceKey.create(Registries.ITEM, ...), settings.setId(itemKey),
//    Registry.register(BuiltInRegistries.ITEM, itemKey, item), Item::new, stacksTo, "the stack size is always 1 for
//    damageable items", CreativeModeTabEvents.modifyOutputEvent(CreativeModeTabs.INGREDIENTS), lang file
//    assets/example-mod/lang/en_us.json, "16x16 texture", item/generated model, client item in assets/example-mod/items,
//    "F3+T".
//  - fabricmc.net/wiki/start: "Fabric is a modular modding toolchain targeting Minecraft: Java Edition 1.14 and above,
//    including snapshots."; wiki/tutorial:setup: "Since 1.20.5, Java 21 or newer is required.", "Since 1.18, Java 17 or
//    newer is required.", "Since 1.17, Java 16 or newer is required."
//  - docs.minecraftforge.net/en/latest (version menu tops at 1.21.x): "Java 21 Development Kit (JDK)"; "Forge recommends
//    and officially supports Eclipse Temurin."; Eclipse and IntelliJ IDEA supported, VS Code run configurations; MDK;
//    "gradlew build", "gradlew runClient"; eula.txt on first server run; mods.toml in META-INF; registries "All registry
//    names within a registry must be unique"; DeferredRegister "is the recommended way to register objects".
//  - files.minecraftforge.net: "Downloads for Minecraft Forge - MC 26.3", "26.3 - 66.0.13", dated 2026-10-16; version list
//    26.3, 26.2, 26.1 above 1.21.11.
//  - minecraft.net/en-us/eula: "If you've bought Minecraft: Java Edition, you may play around with it and modify it";
//    "Any Mods you create for Minecraft: Java Edition from scratch belong to you"; "as long as you don't sell them for
//    money"; "try running an older version"; minors: "ask your parent or legal guardian to explain them".
//  - minecraft.net/en-us/usage-guidelines: "You distribute the mod only and not a modded version of Minecraft"; no
//    "play-to-earn function".
// Our own material, labelled on the page: the item class and JSON files (Fabric 26.2 APIs only; the reader builds them),
// the version-match checklist, the ten-session plan, and the arithmetic: a 16 x 16 texture is 256 pixels; an item with
// stacksTo(16) needs 4 stacks for 64 items (64 / 16 = 4) where a normal 64-stack needs 1.
// Lesson family: registration and data-driven design (code declares an object; JSON files describe how it looks).

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const ITEMS = `// ModItems.java (ours: Fabric docs pattern, MC 26.2)
public class ModItems {
    public static Item register(
            ResourceKey<Item> key,
            Function<Item.Properties, Item> factory,
            Item.Properties settings) {
        Item item = factory.apply(settings.setId(key));
        Registry.register(BuiltInRegistries.ITEM, key, item);
        return item;
    }

    public static final ResourceKey<Item> RUBY_KEY =
        ResourceKey.create(Registries.ITEM,
            ExampleMod.id("ruby_shard"));

    // stacks of 16 instead of the usual 64
    public static final Item RUBY_SHARD = register(
        RUBY_KEY, Item::new,
        new Item.Properties().stacksTo(16));

    public static void initialize() {
        CreativeModeTabEvents
            .modifyOutputEvent(CreativeModeTabs.INGREDIENTS)
            .register(tab -> tab.accept(RUBY_SHARD));
    }
}`;

const INIT = `// ExampleMod.java: the main entrypoint (ours)
public class ExampleMod implements ModInitializer {
    public static final String MOD_ID = "example-mod";
    public static final Logger LOGGER =
        LoggerFactory.getLogger(MOD_ID);

    @Override
    public void onInitialize() {
        ModItems.initialize(); // loads the class
        LOGGER.info("Ruby shard registered");
    }

    public static Identifier id(String path) {
        return Identifier.fromNamespaceAndPath(MOD_ID, path);
    }
}`;

const JSON_FILES = `// assets/example-mod/lang/en_us.json
{ "item.example-mod.ruby_shard": "Ruby Shard" }

// assets/example-mod/models/item/ruby_shard.json
{
  "parent": "minecraft:item/generated",
  "textures": {
    "layer0": "example-mod:item/ruby_shard"
  }
}

// assets/example-mod/items/ruby_shard.json
{
  "model": {
    "type": "minecraft:model",
    "model": "example-mod:item/ruby_shard"
  }
}`;

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'MINECRAFT MODS', blurb: 'Learn to code Minecraft mods in Java: Fabric or Forge, the Java version each needs, a first custom item, and what the Minecraft EULA allows.' },
  slug: 'learn-to-code-minecraft-mods',
  code: 'lcmm',
  accent: '#1C669E',
  accentRationale: 'Minecraft modding, US: the allocated deep water blue #1C669E, cool against the greens and browns of the game, contrast 5.75, 5.41 and 4.95 on the three paper tints',
  pageType: 'market',
  market: US,
  routeLabel: 'Learn to code Minecraft mods',
  title: 'Learn to Code Minecraft Mods in Java: A Guide for Teens',
  description: 'Learn to code Minecraft mods in Java: Fabric or Forge, which Java version each needs, a first custom item step by step, and what the Minecraft EULA lets you share.',
  ogDescription: 'Minecraft mods are written in Java. How teens choose between Fabric and Forge, match the Java version to the game version, register a first item, and share it within the EULA.',
  twitterDescription: 'Minecraft modding in Java for teens: Fabric or Forge, Java versions, a first item.',
  pageName: 'Learn to Code Minecraft Mods',
  webPageDescription: 'A guide for US teens and parents to Minecraft: Java Edition modding, built from the Fabric and Forge documentation and the Minecraft EULA, with a first custom item in real Java.',
  courseDescription: 'Live online Java classes for teens in the United States that include Minecraft modding, taught by a regular teacher in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'Learn to code Minecraft mods',
  navLinks: [
    { href: '#loaders', label: 'Fabric or Forge' },
    { href: '#java', label: 'Java versions' },
    { href: '#setup', label: 'Setup' },
    { href: '#item', label: 'First item' },
    { href: '#rules', label: 'EULA rules' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Ages 13 to 18 &middot; Minecraft: Java Edition',
  h1: 'Learn to code Minecraft mods',
  lede: 'Minecraft: Java Edition is written in Java, and so is almost every mod for it. That makes modding one of the most motivating ways for a teenager to learn a real, professional programming language: the reward for getting the code right is a new item, block or creature in a game they already love. This guide covers the decisions that trip up beginners before they write a line, Fabric or Forge and which Java version, then walks through a first custom item using the code patterns from Fabric&rsquo;s own documentation, and ends with what Mojang&rsquo;s rules say about sharing a mod.',
  secondaryCta: { href: '#item', label: 'See the first item code' },
  wa: 'Hello Modern Age Coders, my teenager in the US wants to learn Java by making Minecraft mods. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; Modding taught inside our Java course',
  spec: [
    ['For', 'Ages 13 to 18'],
    ['Game', 'Minecraft: Java Edition'],
    ['Language', 'Java'],
    ['Loaders', 'Fabric or Forge'],
    ['Computer', 'Windows, Mac or Linux'],
    ['Classes', 'Group or one to one'],
    ['Scheduling', 'Weekday or weekend, your pick'],
    ['Trial', 'One free lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'To learn to code Minecraft mods, learn basic Java, install the JDK your Minecraft version needs (Fabric says JDK 25 for Minecraft 26.1), generate a project with Fabric&rsquo;s Template Mod Generator or Forge&rsquo;s MDK, open it in IntelliJ IDEA, and register a first item. Mods are for Java Edition only. Modern Age Coders teaches modding inside its live Java course for ages 13 to 18.',

  picks: {
    eyebrow: 'Learn it with a teacher',
    h2: 'Three courses for a teen who wants to mod',
    lede: 'The Java course is where modding lives; the other two suit a different starting point.',
    items: [
      { course: 'java-programming-masterclass-for-teens', code: 'MOD / 01', title: 'Java for teens', note: 'Teens 13 to 18: core Java, a 2D game, then Minecraft modding.' },
      { course: 'complete-game-development-masterclass-for-teens', code: 'MOD / 02', title: 'Game development for teens', note: 'For teens who would rather build whole games than mods.' },
      { course: 'minecraft-coding-for-kids-course', code: 'MOD / 03', title: 'Minecraft coding for kids', note: 'Younger siblings, 7 to 12: block coding first.' }
    ]
  },

  sections: [
    {
      id: 'loaders', tint: 'tint', eyebrow: 'The first decision',
      h2: 'Fabric or Forge: two ways to load a Minecraft mod',
      lede: 'A mod does not run on its own. It needs a mod loader, a piece of software that starts Minecraft with mods attached. The two long-standing choices are Fabric and Forge, and a mod written for one does not run on the other.',
      body: [
        { kind: 'table', caption: 'Fabric and Forge, from each project&rsquo;s own pages (read 17 October 2026)', head: ['Point', 'Fabric', 'Forge'], rows: [
          ['How it describes itself', 'A modular modding toolchain for Minecraft: Java Edition 1.14 and above, including snapshots', 'A mod loader with a Mod Developer Kit (MDK) and its own documentation site'],
          ['Newest version on its pages', 'Developer docs for Minecraft 26.2', 'Downloads for MC 26.3, Forge 66.0.13, dated October 16, 2026'],
          ['Java named in its setup docs', 'JDK 25 for Minecraft 26.1', 'Java 21 JDK, in docs whose version menu tops out at 1.21.x'],
          ['Editors it names', 'IntelliJ IDEA (recommended) or Visual Studio Code', 'Eclipse and IntelliJ IDEA, plus run configurations for Visual Studio Code'],
          ['How a project starts', 'The Template Mod Generator, or cloning the example mod', 'Download and extract the MDK'],
          ['The file that describes the mod', 'fabric.mod.json', 'mods.toml, in META-INF'],
          ['Code names', 'Names from the unobfuscated game', 'Names as shown in its 1.21.x docs']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Which one we start teens on',
          left: [
            'Our choice for a first mod is Fabric, for one practical reason: on the day we checked, its developer documentation covered a current 26.x version (26.2), while Forge&rsquo;s documentation site stopped at 1.21.x even though Forge itself downloads for 26.3. A beginner should not have to translate between versions.',
            'The Java skills are the same either way. Classes, methods, registration and events carry over, and teens who later join a Forge project learn its patterns quickly.'
          ],
          rightH3: 'Version numbers changed',
          right: [
            'Families who last looked at Minecraft a few years ago will notice something new: Forge&rsquo;s download page lists Minecraft 26.1, 26.2 and 26.3 above 1.21.11. Mods are built for an exact version, so the version number is the first thing to check.',
            'A mod for one version usually will not load on another. Mojang&rsquo;s EULA says plainly that game updates might not work well with mods, and suggests running an older version when that happens.'
          ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: <a class="ag-inline-link" href="https://fabricmc.net/wiki/start" rel="noopener" target="_blank">Fabric Wiki</a>, <a class="ag-inline-link" href="https://docs.fabricmc.net/develop/getting-started/setting-up" rel="noopener" target="_blank">Fabric developer docs</a>, <a class="ag-inline-link" href="https://docs.minecraftforge.net/en/latest/gettingstarted/" rel="noopener" target="_blank">Forge documentation</a> and <a class="ag-inline-link" href="https://files.minecraftforge.net/net/minecraftforge/forge/" rel="noopener" target="_blank">Forge downloads</a>. We are not connected with Mojang, Microsoft, Fabric or Forge.' }
      ]
    },
    {
      id: 'java', tint: 'deep', eyebrow: 'The second decision',
      h2: 'Which Java version a Minecraft mod needs',
      lede: 'A classic failed first setup comes down to one mismatch: the Java Development Kit on the computer is older than the Minecraft version needs. The modding projects publish the rule. Fabric&rsquo;s current setup page puts it in one line: To develop mods for Minecraft 26.1, you will need JDK 25.',
      body: [
        { kind: 'table', caption: 'Java needed to develop mods, by Minecraft version (Fabric wiki and Fabric docs, read 17 October 2026)', head: ['Minecraft version', 'Java needed', 'Where it is stated'], rows: [
          ['26.1 and the 26.2 docs', 'JDK 25', 'Fabric developer docs, setting up'],
          ['1.20.5 and later 1.x', 'Java 21 or newer', 'Fabric wiki, setup tutorial'],
          ['1.18 to 1.20.4', 'Java 17 or newer', 'Fabric wiki, setup tutorial'],
          ['1.17', 'Java 16 or newer', 'Fabric wiki, setup tutorial']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A version-match checklist (ours)',
          left: [
            'Write three things on a sticky note before starting: the Minecraft version you want to mod, the loader, and the Java version the table above gives for it. Every tutorial you follow should match all three.',
            'If a tutorial uses a different Minecraft version, its code may not compile. That is not your fault and not a bug in your code; it is the wrong tutorial for your setup.'
          ],
          rightH3: 'Where to get a JDK',
          right: [
            'Forge&rsquo;s documentation says it recommends and officially supports Eclipse Temurin, and the Fabric wiki points to the Temurin releases page for installers too.',
            'Fabric warns that building from a terminal can cause problems if your default Java does not match what the project expects, and suggests an IDE that lets you pick the Java version. For a beginner, that is the simpler route.'
          ] }
      ]
    },
    {
      id: 'setup', tint: 'tint', eyebrow: 'Step by step',
      h2: 'Setting up a first Fabric mod project',
      lede: 'These are the steps from Fabric&rsquo;s developer documentation, in the order a beginner meets them, with the warnings that save the most time.',
      body: [
        { kind: 'ol', items: [
          '<b>Own Java Edition.</b> Mojang&rsquo;s EULA gives the right to modify the game to people who have bought Minecraft: Java Edition, and Fabric targets Java Edition. Bedrock Edition is a different version of the game and is not modded this way.',
          '<b>Install the right JDK.</b> For Minecraft 26.1, Fabric says JDK 25.',
          '<b>Install an editor.</b> Fabric recommends IntelliJ IDEA, with Visual Studio Code as the alternative.',
          '<b>Generate the project.</b> Use the Fabric Template Mod Generator: enter a mod name, a lowercase package name such as com.example.example-mod, and the Minecraft version, then download the zip.',
          '<b>Choose a safe folder.</b> Fabric&rsquo;s tips: avoid cloud storage folders such as Microsoft OneDrive, avoid non-ASCII characters such as emoji or accented letters, and avoid spaces. Its example of a good path is C:\\Projects\\YourProjectName.',
          '<b>Open it and let Gradle finish.</b> The editor loads the Gradle configuration and downloads what the project needs. If asked, click Import Gradle Project.',
          '<b>Rename the template.</b> Change the mod id, name and description in fabric.mod.json, and the maven_group and archive_base_name in gradle.properties.',
          '<b>Launch Minecraft from the editor.</b> A test copy of the game starts with your mod loaded. Nothing has been changed in your normal Minecraft installation.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Why the folder rule matters',
          left: [
            'School and family laptops often keep the Documents folder inside a cloud sync service. Build tools write thousands of small files, and Fabric&rsquo;s tip exists because syncing gets in the way of that.',
            'A plain folder near the top of the drive, with no spaces in its name, avoids a whole family of confusing errors.'
          ],
          rightH3: 'What the template already contains',
          right: [
            'The generator creates two entrypoints by default, according to Fabric: a main one, in a class that implements ModInitializer, for code shared by client and server, and a client one, implementing ClientModInitializer, for client-only code.',
            'The main entrypoint runs when Minecraft is ready to load mods. Fabric&rsquo;s own example logs Hello Fabric world! there; ours logs that the ruby shard was registered.'
          ] }
      ]
    },
    {
      id: 'item', tint: 'deep', eyebrow: 'Your first mod',
      h2: 'Coding a first custom item: a ruby shard',
      lede: 'A new item is the classic first mod because it touches every part of modding: Java code to register it, and JSON files to name it and give it a look. Fabric&rsquo;s docs put it simply: everything in Minecraft is stored in registries, and items are no exception.',
      body: [
        { kind: 'code', label: 'Step 1 &middot; register the item in Java', lang: 'java', code: ITEMS, note: 'Written with the classes and methods Fabric&rsquo;s 26.2 documentation uses: ResourceKey, Item.Properties with setId, Registry.register and CreativeModeTabEvents. Imports are left out to keep it short; your editor offers to add them. Fabric notes that a damageable item always stacks to 1, so stacksTo only works on items like this one.' },
        { kind: 'code', label: 'Step 2 &middot; call it from the entrypoint', lang: 'java', code: INIT, note: 'Fabric explains why initialize() can be empty and still matter: calling any method on a class makes Java load it, which runs its static fields, and that is where the item is registered.' },
        { kind: 'code', label: 'Step 3 &middot; name it and give it a look', lang: 'json', code: JSON_FILES, note: 'Three small JSON files, each in its own folder under src/main/resources. The texture is a 16x16 PNG named ruby_shard.png in assets/example-mod/textures/item. Replace example-mod with your own mod id everywhere.' },
        { kind: 'two', mt: true,
          leftH3: 'Code declares, data describes',
          left: [
            'Notice the split. Java says that a ruby shard exists and how it behaves; the JSON files say what it is called and how it looks. Minecraft itself is built this way, which is why so much of modding is editing data files rather than writing code.',
            'That idea, separating behavior from description, is one professional developers use everywhere, from websites to phone apps.'
          ],
          rightH3: 'Small numbers to check (our arithmetic)',
          right: [
            'A 16 x 16 texture is 256 pixels, small enough to draw by hand in any pixel editor in a few minutes.',
            'With stacksTo(16), carrying 64 shards takes 64 / 16 = 4 inventory slots, where an ordinary item that stacks to 64 needs one. Changing that single number is a good first experiment: build, launch, and count the slots. After editing these files, Fabric says you can restart the game, or build the mod and press F3+T, to apply the changes.'
          ] }
      ]
    },
    {
      id: 'rules', tint: 'tint', eyebrow: 'Sharing a mod',
      h2: 'What the Minecraft EULA says about mods you make',
      lede: 'A teen whose first mod works will want to share it with friends. Mojang&rsquo;s EULA and usage guidelines are friendly to that, with a few firm limits worth reading together.',
      body: [
        { kind: 'table', caption: 'Mods and the rules, from minecraft.net (read 17 October 2026)', head: ['Question', 'What Mojang says'], rows: [
          ['Can I mod the game?', 'If you&rsquo;ve bought Minecraft: Java Edition, you may play around with it and modify it'],
          ['Who owns my mod?', 'Any Mods you create for Minecraft: Java Edition from scratch belong to you'],
          ['Can I sell it?', 'Not for money: you can do what you want with your mods as long as you don&rsquo;t sell them for money or try to make money from them'],
          ['Can I share it?', 'Yes, if you distribute the mod only and not a modded version of Minecraft'],
          ['Any banned kinds of mod?', 'No play-to-earn function that pays out real-world or cash-out currency'],
          ['What if an update breaks it?', 'Mojang does not take responsibility; it suggests running an older version']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'For parents',
          left: [
            'The EULA asks minors who find the terms hard to understand to have a parent or legal guardian explain them. Reading the mods paragraph together takes five minutes and covers what a teen needs.',
            'Installing other people&rsquo;s mods is a separate question from writing your own. Fabric&rsquo;s documentation mentions CurseForge and Modrinth as mod hosting sites; agree as a family which sources are allowed.'
          ],
          rightH3: 'How to share a finished mod',
          right: [
            'Build it with ./gradlew build on a Mac or Linux, or ./gradlew.bat build on Windows. The JAR files appear in build/libs, and Fabric says to use the one with the shortest name outside development.',
            'Share the JAR, never a copy of Minecraft itself. That one rule keeps a teen&rsquo;s mod inside what Mojang allows.'
          ] },
        { kind: 'source', html: 'Sources, read 17 October 2026: the <a class="ag-inline-link" href="https://www.minecraft.net/en-us/eula" rel="noopener" target="_blank">Minecraft EULA</a>, the <a class="ag-inline-link" href="https://www.minecraft.net/en-us/usage-guidelines" rel="noopener" target="_blank">Minecraft Usage Guidelines</a> and Fabric&rsquo;s <a class="ag-inline-link" href="https://docs.fabricmc.net/develop/getting-started/building-a-mod" rel="noopener" target="_blank">Building a Mod</a>. Quoted lines are shortened; read the full terms before publishing.' }
      ]
    },
    {
      id: 'plan', tint: 'deep', eyebrow: 'A first term',
      h2: 'Ten sessions from no Java to a working mod',
      lede: 'Our plan for a teen who knows Minecraft well but has not written Java before. The plan moves faster through the first four rows for teens with some Python or JavaScript.',
      body: [
        { kind: 'table', caption: 'A ten-session path into modding (ours)', head: ['Sessions', 'What gets built', 'The Java idea'], rows: [
          ['1 to 2', 'Small console programs: a dice roller, a score keeper', 'Variables, types, if and loops'],
          ['3 to 4', 'A tiny inventory written as classes', 'Classes, objects, methods, static'],
          ['5', 'JDK, IntelliJ IDEA and the Fabric template running', 'Projects, packages, Gradle'],
          ['6 to 7', 'The ruby shard: registry, name, texture', 'Registration, data files'],
          ['8', 'A custom block that drops the shard', 'Inheritance and properties'],
          ['9', 'A recipe and a creative tab', 'Events and data-driven design'],
          ['10', 'Build the JAR, test on a dedicated server, explain the code', 'Testing, client and server sides']
        ] },
        { kind: 'three', mt: true, cells: [
          { h3: 'Why Java first', p: 'Two sessions of plain Java make the modding code readable instead of magic. Skipping them makes the modding code far harder to follow.' },
          { h3: 'Why a server test', p: 'Forge&rsquo;s docs say to always test a mod in a dedicated server environment, including client-only mods. It is good advice for any loader.' },
          { h3: 'Where it leads', p: 'Java is also the language of our AP Computer Science A classes, and a common one for Android apps and server software.' }
        ] },
        { kind: 'p', mt: true, html: 'Younger players start with blocks instead: see our <a class="ag-inline-link" href="/minecraft-coding-classes-for-kids">Minecraft coding classes for kids</a>. For the language itself, <a class="ag-inline-link" href="/java-classes-for-teens">Java classes for teens</a> and <a class="ag-inline-link" href="/ap-computer-science-a-online-classes">AP Computer Science A classes</a> go further, and <a class="ag-inline-link" href="/blog/minecraft-vs-roblox-which-teaches-kids-to-code">Minecraft vs Roblox</a> compares the two game worlds.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'From player to modder',
    h2: 'Four stages of a young Minecraft modder',
    lede: 'Where a teen who searches for modding might be today.',
    table: { caption: 'Stages of learning to mod Minecraft (ours)', head: ['Stage', 'What it looks like'], rows: [
      ['1. Mod user', 'Installs mods and knows which ones they like'],
      ['2. Tinkerer', 'Edits data packs, configs or textures'],
      ['3. First modder', 'Registers items and blocks from a tutorial'],
      ['4. Mod author', 'Designs a feature, writes the Java, and ships a JAR']
    ] },
    left: { h3: 'For parents', ps: [
      'Hours of playing are not wasted. A teen who can describe why a mod is fun is already thinking like a designer.',
      'Stage 3 needs real Java. A teacher makes the difference between copying a tutorial and understanding it.'
    ] },
    right: { h3: 'For teens', ps: [
      'Match your versions first: Minecraft, loader, Java. A mismatch is behind a lot of setup errors.',
      'Start with one item. A mod that adds one thing and works beats a mod that adds fifty and crashes.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for teens who want to build',
    lede: 'Taught live, the same teacher each week, as part of a batch or one to one.',
    bands: [
      { num: 'I', h3: 'Younger', sub: 'Ages 6 to 12', courses: [
        { code: 'MOD / KID / 01', slug: 'minecraft-coding-for-kids-course', title: 'Minecraft coding', blurb: 'MakeCode blocks before Java.' },
        { code: 'MOD / KID / 02', slug: 'scratch-programming-complete-course', title: 'Scratch coding', blurb: 'Logic and games in blocks.' },
        { code: 'MOD / KID / 03', slug: 'python-ai-kids-masterclass', title: 'Python for kids', blurb: 'A first typed language.' }
      ] },
      { num: 'II', h3: 'Teens', sub: 'Ages 13 to 18', courses: [
        { code: 'MOD / TEN / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'Core Java to Minecraft mods.' },
        { code: 'MOD / TEN / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'Projects in a second language.' },
        { code: 'MOD / TEN / 03', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'Speed, memory and games.' }
      ] },
      { num: 'III', h3: 'Going further', sub: 'Teens and adults', courses: [
        { code: 'MOD / PRO / 01', slug: 'complete-game-development-masterclass-for-teens', title: 'Game development for teens', blurb: 'Unity and C#.' },
        { code: 'MOD / PRO / 02', slug: 'game-development-complete-masterclass-college', title: 'Game development', blurb: 'Engines at a professional pace.' },
        { code: 'MOD / PRO / 03', slug: 'hackathon-prep-for-teens-coding-ai-build-innovate-win-course', title: 'Hackathon preparation', blurb: 'Build and present under time.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Live Java lessons for teens, on your schedule',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evening batches that work across US time zones.' },
      { time: 'Weekends', l: 'Weekend morning batches for longer build sessions.' },
      { time: '1-on-1', l: 'Private, at your convenience.' }
    ],
    cells: [
      { h3: 'Setup done together', p: 'JDK, editor and template in a live class.' },
      { h3: 'Your mod idea', p: 'The plan bends toward what you want to add.' },
      { h3: 'Real Java', p: 'The same language as our AP CS A classes.' },
      { h3: 'One teacher', p: 'The same person all term.' },
      { h3: 'Anywhere in the US', p: 'Fully online, any state.' },
      { h3: 'Batch or private', p: 'Fifteen to twenty teens, or one to one.' }
    ]
  },

  projectsH2: 'Projects our students have shipped',
  projectsLede: 'Built by teenagers who learned to code with us. More are on the <a class="ag-inline-link" href="/student-labs">student labs</a> page.',
  reviewsLede: 'Google reviews from parents, quoted without edits.',

  fees: {
    h2: 'Fees',
    lede: 'Fabric, Forge and the JDK are free, and Java Edition is the only purchase modding needs. Our teaching is paid month by month in US dollars, with nothing to sign for the year and the option to stop after any month.',
    free: ['A free first lesson', 'Setup questions answered', 'No card'],
    group: ['Fifteen to twenty teens', 'A regular teacher', 'Pick a batch time', 'Monthly'],
    one: ['One to one', 'Times that suit you', 'Your own mod']
  },

  faq: {
    eyebrow: 'Questions from teens and parents',
    h2: 'Minecraft modding: common questions',
    items: [
      { q: 'What language are Minecraft mods written in?', a: 'Java. Minecraft: Java Edition is written in Java, and Fabric and Forge mods are Java projects built with Gradle.' },
      { q: 'How do you start learning to code Minecraft mods?', a: 'Learn basic Java first: variables, loops, classes and methods. Then install the JDK your Minecraft version needs, generate a Fabric or Forge project, and register a first item.' },
      { q: 'Should I use Fabric or Forge?', a: 'Both work and the Java skills carry over. We start beginners on Fabric because its developer docs covered a current 26.x version (26.2) when we checked, while Forge\'s docs stopped at 1.21.x.' },
      { q: 'Which Java version do I need for Minecraft modding?', a: 'It depends on the Minecraft version. Fabric\'s docs say JDK 25 for Minecraft 26.1, and its wiki says Java 21 or newer since 1.20.5 and Java 17 or newer since 1.18.' },
      { q: 'Can you mod Minecraft Bedrock Edition the same way?', a: 'No. Fabric and Forge are for Minecraft: Java Edition, and the EULA\'s mod permission is written for people who bought Java Edition.' },
      { q: 'Is it legal to make Minecraft mods?', a: 'Yes, within Mojang\'s rules. The EULA says mods you create from scratch belong to you, as long as you don\'t sell them for money, and you may share the mod but not a modded version of the game.' },
      { q: 'What age can kids learn Minecraft modding?', a: 'We teach Java modding from about 13, once a student can type and reason through Java classes. Younger children do well with block-based Minecraft coding first.' },
      { q: 'Do I need IntelliJ IDEA to make mods?', a: 'Fabric recommends IntelliJ IDEA, with Visual Studio Code as an alternative. Forge supports Eclipse and IntelliJ IDEA and provides run configurations for Visual Studio Code.' },
      { q: 'Why does my mod not load?', a: 'Check versions first: the mod, the loader and Minecraft must all be the same version, and the JDK must be the one that version needs.' },
      { q: 'What times are classes for US teens?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'How much do Java and modding classes cost?', a: 'The first lesson is free. Regular classes are billed monthly, and the fees section of this page gives the amount in US dollars.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for US teens who like to build.',
    items: [
      { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding for kids', p: 'Block coding for under-13s.' },
      { href: '/java-classes-for-teens', label: 'Java classes for teens', p: 'The language behind every mod.' },
      { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A', p: 'Java, the College Board way.' },
      { href: '/blog/minecraft-vs-roblox-which-teaches-kids-to-code', label: 'Minecraft vs Roblox', p: 'Which game teaches more coding.' },
      { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA', p: 'State guides, ages and subjects.' },
      { href: '/how-we-teach', label: 'How we teach', p: 'What a live lesson looks like.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us which Minecraft version your teen plays and the first thing they would like to add. The teacher checks the Java and loader versions for that before the lesson.',
    readFirst: 'If you would like to see the method first, <a class="ag-inline-link" href="/how-we-teach">how we teach</a> walks through a lesson, and the Java syllabus is on <a class="ag-inline-link" href="/courses">our courses page</a>.',
    note: 'Every lesson is live over video, taught by our team in India, so teens anywhere in the US join from home. A WhatsApp message is the quickest way to ask us something.',
    formNote: 'The first lesson is free; no card is taken.'
  },

  footer: {
    cols: [
      { h4: 'Java and Minecraft', links: [
        { href: '/java-classes-for-teens', label: 'Java classes for teens' },
        { href: '/minecraft-coding-classes-for-kids', label: 'Minecraft coding for kids' },
        { href: '/java-projects-for-students', label: 'Java projects for students' },
        { href: '/student-labs', label: 'Student projects' }
      ] },
      { h4: 'United States', links: [
        { href: '/coding-classes-in-united-states', label: 'Coding classes in the USA' },
        { href: '/ap-computer-science-a-online-classes', label: 'AP Computer Science A' },
        { href: '/coding-for-13-year-olds', label: 'Coding for 13 year olds' },
        { href: '/coding-for-14-year-olds', label: 'Coding for 14 year olds' }
      ] }
    ],
    bottomRight: 'Code declares, data describes'
  },

  personalityCss: `
.ag-root.ag-lcmm .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-lcmm .ag-capsule { border-left-width: 6px; border-radius: 3px; }
.ag-root.ag-lcmm .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-lcmm .ag-table caption { text-align: left; }
.ag-root.ag-lcmm .ag-steps { gap: 0.85rem; }
.ag-root.ag-lcmm .ag-band-head h3 { letter-spacing: -0.01em; }
`,

  dossier: {
    curriculumAuthority: 'Fabric developer docs (26.2), read 17 October 2026: JDK 25 for Minecraft 26.1; IntelliJ IDEA recommended or VS Code; Template Mod Generator; project-path tips; unobfuscated names; entrypoints; first item APIs; build commands and build/libs. Fabric wiki: toolchain for Java Edition 1.14+; Java 21 since 1.20.5, Java 17 since 1.18, Java 16 since 1.17. Forge docs (1.21.x): Java 21 JDK, Eclipse Temurin, Eclipse and IntelliJ IDEA, MDK, mods.toml, dedicated-server testing. Forge files: MC 26.3, 66.0.13, 2026-10-16. Minecraft EULA and Usage Guidelines on mods.',
    localProject: 'A ruby shard item for Fabric 26.2 (ours, documented APIs only): a ModItems class with ResourceKey, setId, Registry.register, stacksTo(16) and a creative tab event; the entrypoint; three JSON files. Our arithmetic: a 16 x 16 texture is 256 pixels; 64 / 16 = 4 slots for 64 shards. A version-match checklist and a ten-session plan. Lesson family: registration and data-driven design.',
    requiredMentions: ['To develop mods for Minecraft 26.1', 'JDK 25', 'Java 21 or newer', 'Java 17 or newer', 'Eclipse Temurin', 'Template Mod Generator', 'fabric.mod.json', 'mods.toml', 'Forge 66.0.13', 'Registry.register(BuiltInRegistries.ITEM', 'Any Mods you create for Minecraft: Java Edition from scratch belong to you', 'not a modded version of Minecraft', '64 / 16 = 4'],
    sources: [
      { claim: 'JDK 25 for Minecraft 26.1; editors; Template Mod Generator; folder tips; unobfuscated names.', url: 'https://docs.fabricmc.net/develop/getting-started/setting-up' },
      { claim: 'First item: registries, ResourceKey, Item.Properties, creative tab, JSON files, F3+T.', url: 'https://docs.fabricmc.net/develop/items/first-item' },
      { claim: 'Build commands, build/libs, shortest JAR name, mod hosting sites.', url: 'https://docs.fabricmc.net/develop/getting-started/building-a-mod' },
      { claim: 'Fabric scope and Java versions by Minecraft version.', url: 'https://fabricmc.net/wiki/tutorial:setup' },
      { claim: 'Forge prerequisites, MDK, IDE support, mods.toml, server testing.', url: 'https://docs.minecraftforge.net/en/latest/gettingstarted/' },
      { claim: 'Forge download for MC 26.3, version 66.0.13, dated 2026-10-16.', url: 'https://files.minecraftforge.net/net/minecraftforge/forge/' },
      { claim: 'Mod rights, ownership, no selling, older-version advice, minors.', url: 'https://www.minecraft.net/en-us/eula' },
      { claim: 'Distribute the mod only; no play-to-earn.', url: 'https://www.minecraft.net/en-us/usage-guidelines' }
    ],
    rejectedClaims: [
      'A Java version for Forge on Minecraft 26.x: Forge\'s documentation site covers up to 1.21.x, so no Forge Java figure is given for 26.x.',
      'Why Minecraft version numbers changed: not stated on the pages read, so the page reports only the version list.',
      'Age rules for Minecraft accounts: not on the pages read; the page cites only the EULA line about minors and parents.',
      'That we built the ruby shard mod on this page: it uses Fabric 26.2 documented APIs and the reader builds it.',
      'Any affiliation with Mojang, Microsoft, Fabric or Forge: none, and the page says so.'
    ]
  }
};
