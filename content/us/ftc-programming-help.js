'use strict';
// FIRST Tech Challenge programming help (ag- competition door; UK and US exams cluster Phase 2, row US071). Plan
// docs/superpowers/plans/2026-10-31-uk-us-exams-cluster.md. Read raw with curl on 31 October 2026; copies in
// keyword-research-2026-09/uk-us-gap/src/ftc-programming-help/:
//  - firstinspires.org/programs/ftc and /game-and-season: "Ages 12-18; Grades 7-12"; a game "released every September";
//    2026-2027 game "BIOBUZZ presented by RTX", part of the FIRST CANOPY season; StarterBots and FTC SIM named as
//    season resources; blog post "BIOBUZZ Kickoff and Season Resources" dated September 18, 2026.
//  - 2026-2027 FIRST Tech Challenge Competition Manual, version TU07 (ftc-resources.firstinspires.org/ftc/game/manual):
//    2 alliances of 2 teams; "a 30-second AUTO period, an 8-second transition period between AUTO and TELEOP, and a
//    2-minute TELEOP period"; G305 teams must select and INIT an OpMode, and "Teams without an AUTO OpMode should consider
//    creating a default AUTO OpMode using the BasicOpMode sample"; G401 no interaction during AUTO; R503 "ROBOTS are
//    limited to a total of 8 motors and 8 servos"; R701 one robot controller, a REV Control Hub or an Android phone with a
//    REV Expansion Hub, "the REV Control Hub is the only officially supported ROBOT CONTROLLER device"; I101 North
//    America competition-ready rules incl. two Lead Coaches screened under YPP; 1.4.3 The Role of Mentors: "However
//    much is needed to inspire the youth on the team."; 6.3.7 Control Award: sensors and software, portfolio summary,
//    "The PORTFOLIO does not need to include the full code itself", Required 2 external feedback.
//  - ftc-docs.firstinspires.org: home, Programming Resources (Blocks, OnBot Java, Android Studio tutorials; Kotlin as an
//    advanced topic), SDK overview (Driver Station app, Robot Controller app with Blocks and OnBot Java environments,
//    Kickoff SDK "typically the minimal software version required for use during the season"), Blocks tutorial ("FIRST
//    recommends getting starting with Blocks, even if you are an experienced programmer." sic), OnBot Java tutorial,
//    Creating and Running an Op Mode (LinearOpMode, hardwareMap.get, waitForStart, opModeIsActive, telemetry.addData,
//    telemetry.update, gamepad1.left_stick_y, setPower), Using Sensors.
//  - github.com/FIRST-Tech-Challenge/FtcRobotController/releases: v12.0 "the official release for the 2026/2027 season",
//    dated 2026-09-12; minimum Android Studio Narwhal 3 Feature Drop. Official samples RobotTeleopTank_Iterative.java
//    (gamepad1.right_stick_y) and RobotAutoDriveByEncoder_Linear.java (@Autonomous, ElapsedTime, setDirection with
//    DcMotor.Direction.REVERSE, telemetry.addData with a format string, runtime.seconds() < timeoutS with isBusy()).
// Our own material, labelled on the page: the ShapedTankDrive teaching OpMode (only APIs seen in the docs and samples),
// the input-shaping table (blend 0.7: stick 0.10 gives 0.0307, 0.25 gives 0.0859, 0.50 gives 0.2375, 0.75 gives
// 0.5203), the result that a quarter of full power needs about 51 percent of stick travel, the practice set, the plan.
// Lesson family: nonlinear input shaping (mapping a joystick to motor power with a cubic blend and a deadband).
// Siblings read so as not to repeat: vex-iq-programming-help, first-lego-league-coding-help-usa, ap-computer-science-a-*.

const US = { name: 'United States', iso: 'US', dial: '+1', lang: 'en-US', locale: 'en_US', geoRegion: 'US', brandTag: 'US', phoneLabel: 'US mobile number', phonePlaceholder: '(201) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const SHAPED = 'package org.firstinspires.ftc.teamcode;\n\nimport com.qualcomm.robotcore.eventloop.opmode.LinearOpMode;\nimport com.qualcomm.robotcore.eventloop.opmode.TeleOp;\nimport com.qualcomm.robotcore.hardware.DcMotor;\n\n// Our teaching OpMode: tank drive with a shaped joystick response.\n@TeleOp(name = "Shaped Tank Drive (practice)", group = "Practice")\npublic class ShapedTankDrive extends LinearOpMode {\n\n    static final double DEADBAND = 0.05; // ignore tiny stick drift\n    static final double BLEND = 0.7;     // 0 = straight line, 1 = pure cube\n\n    private DcMotor leftDrive;\n    private DcMotor rightDrive;\n\n    double shape(double stick) {\n        if (Math.abs(stick) < DEADBAND) return 0.0;\n        return BLEND * stick * stick * stick + (1 - BLEND) * stick;\n    }\n\n    @Override\n    public void runOpMode() {\n        leftDrive = hardwareMap.get(DcMotor.class, "left_drive");\n        rightDrive = hardwareMap.get(DcMotor.class, "right_drive");\n        leftDrive.setDirection(DcMotor.Direction.REVERSE);\n\n        telemetry.addData("Status", "Initialized");\n        telemetry.update();\n        waitForStart();\n\n        while (opModeIsActive()) {\n            double leftStick = -gamepad1.left_stick_y;  // pushing up reads negative\n            double rightStick = -gamepad1.right_stick_y;\n            leftDrive.setPower(shape(leftStick));\n            rightDrive.setPower(shape(rightStick));\n            telemetry.addData("Left stick to power", "%.2f to %.2f", leftStick, shape(leftStick));\n            telemetry.update();\n        }\n    }\n}';

module.exports = {
  cluster: 'ag',
  clusterName: 'United States',
  hub: { group: 'guide', tag: 'COMPETITION', blurb: 'FIRST Tech Challenge programming help for 2026 to 2027 BIOBUZZ: Blocks, OnBot Java or Android Studio, SDK v12.0, OpModes and a worked joystick-shaping lesson in Java.' },
  slug: 'ftc-programming-help',
  code: 'fp',
  accent: '#8E5C35',
  accentRationale: 'FIRST Tech Challenge programming help: a workshop brown #8E5C35 from the US allocation table, 5.31:1 on paper #FBF8F2, kept well apart from the teal of the FIRST LEGO League page and the VEX IQ plum',
  pageType: 'market',
  market: US,
  routeLabel: 'FTC programming help',
  title: 'FTC Programming Help: Java and Blocks for BIOBUZZ 2026-27',
  description: 'FTC programming help for 2026-27 BIOBUZZ: Blocks, OnBot Java or Android Studio, SDK v12.0, OpModes, autonomous rules and a worked Java TeleOp lesson.',
  ogDescription: 'How to program a FIRST Tech Challenge robot this season: the three official tools, what an OpMode is, the 30-second AUTO rules, and a joystick-shaping lesson in real FTC Java.',
  twitterDescription: 'FTC robot coding for BIOBUZZ: tools, OpModes and a Java lesson.',
  pageName: 'FTC Programming Help',
  webPageDescription: 'A guide for US high school and middle school students, parents and coaches to programming a FIRST Tech Challenge robot in the 2026 to 2027 BIOBUZZ season, from the competition manual, the FTC docs and the official SDK, with an original Java OpMode and practice problems.',
  courseDescription: 'Live online Java classes for FIRST Tech Challenge students in grades 7 to 12 that teach the programming behind an FTC robot: classes and methods, loops, conditions, sensors and clean OpMode structure, in a batch of 15 to 20 or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in the USA', href: '/coding-classes-in-united-states' }],
  crumbLabel: 'FTC programming help',
  navLinks: [
    { href: '#match', label: 'The match' },
    { href: '#tools', label: 'Tools' },
    { href: '#opmode', label: 'OpModes' },
    { href: '#shaping', label: 'Java lesson' },
    { href: '#auto', label: 'Autonomous' },
    { href: '#fees', label: 'Fees' }
  ],
  eyebrow: 'United States &middot; Grades 7 to 12 &middot; The 2026 to 2027 BIOBUZZ season',
  h1: 'FTC programming help: Java and Blocks for FIRST Tech Challenge',
  lede: 'A FIRST Tech Challenge robot runs two kinds of program in every match: one that drives itself for the first 30 seconds, and one that turns a driver&rsquo;s joystick into motor power for the next two minutes. This guide reads the 2026 to 2027 BIOBUZZ competition manual, the official FTC docs and the current SDK release, then teaches a piece of real FTC Java most new programmers never think about: shaping the joystick so a driver can make small, precise moves without losing top speed.',
  secondaryCta: { href: '#shaping', label: 'See the Java lesson' },
  wa: 'Hello Modern Age Coders, my child is on a FIRST Tech Challenge team in the US and wants help programming the robot in Java. Could we book a free first lesson?',
  heroNote: 'Live teaching since 2020 &middot; 10,000+ students &middot; students write their team&rsquo;s code',
  spec: [
    ['Season', 'BIOBUZZ presented by RTX'],
    ['Grades', '7 to 12 (ages 12 to 18)'],
    ['AUTO period', '30 seconds'],
    ['TELEOP period', '2 minutes'],
    ['SDK', 'v12.0, released September 12, 2026'],
    ['Tools', 'Blocks, OnBot Java, Android Studio'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['Start', 'A free first lesson']
  ],
  capsuleQ: 'In short',
  capsule: 'FTC programming means writing the OpModes that run a FIRST Tech Challenge robot, in Blocks, OnBot Java or Java in Android Studio, using FIRST&rsquo;s SDK, now v12.0 for 2026 to 2027. Each BIOBUZZ match has a 30-second autonomous period and a 2-minute driver period. Modern Age Coders teaches the Java behind it live online, in a batch or 1-on-1, in our Java for Teens course.',

  picks: {
    eyebrow: 'Learn with a teacher',
    h2: 'Courses for FTC programmers',
    lede: 'Java first, because FTC text code is Java, then the logic and math a robot depends on.',
    items: [
      { course: 'java-programming-masterclass-for-teens', code: 'FP / 01', title: 'Java for teens', note: 'Classes, methods, loops and conditions: the language of FTC text code.' },
      { course: 'python-complete-masterclass-teens', code: 'FP / 02', title: 'Python for teens', note: 'A gentler first text language for a grade 7 or 8 team member.' },
      { course: 'maths-through-coding', code: 'FP / 03', title: 'Math through coding', note: 'Functions, curves and angles, written as code.' }
    ]
  },

  sections: [
    {
      id: 'match', tint: 'tint', eyebrow: 'The 2026 to 2027 match',
      h2: 'How is a 2026 to 2027 FTC match structured?',
      lede: 'Each BIOBUZZ match has a 30-second autonomous period, an 8-second transition and a 2-minute driver-controlled period. Two alliances of two teams each play, so a robot&rsquo;s code also has to work alongside a partner robot it has never seen before.',
      body: [
        { kind: 'table', caption: 'The match as the 2026 to 2027 FIRST Tech Challenge Competition Manual (version TU07) describes it, read 31 October 2026', head: ['Part', 'Length', 'Who is in control', 'What the code does'], rows: [
          ['Pre-match', 'Before the timer', 'Drive team sets up', 'An OpMode is selected and initialized on the Driver Station (rule G305)'],
          ['AUTO', '30 seconds', 'The robot alone', 'Runs only its pre-programmed instructions; drivers may not touch it or the console (G401)'],
          ['Transition', '8 seconds', 'Nobody', 'Teams switch from the AUTO OpMode to the TELEOP one'],
          ['TELEOP', '2 minutes', 'Two human drivers', 'Turns gamepad input into motor and servo commands']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The BIOBUZZ game in one paragraph',
          left: [
            'The manual describes two alliances collecting POLLEN and NECTAR, launching them into their HIVE and placing them into FLOWERS. Robots can use sensors in AUTO to collect and navigate; in the last 60 seconds of the match, all remaining NECTAR can be entered.',
            'We describe the game only at that level. The full scoring rules belong to FIRST, and every team should read the current manual, which changes through team updates during the season.'
          ],
          rightH3: 'Who takes part',
          right: [
            'FIRST lists FIRST Tech Challenge for grades 7 to 12, ages 12 to 18, with a new game released every September. In North America a team is competition ready only after registering, paying, and having two Lead Coaches pass Youth Protection Program screening, under rule I101.',
            'For a grade 7 or 8 student coming from FIRST LEGO League, which ends after its 2026 to 2027 season, FTC is the FIRST program that carries on for grades 7 to 12, so it is a natural next step.'
          ] },
        { kind: 'source', html: 'Sources: the <a class="ag-inline-link" href="https://ftc-resources.firstinspires.org/ftc/game/manual" rel="noopener" target="_blank">2026-2027 FIRST Tech Challenge Competition Manual</a> (version TU07) and the <a class="ag-inline-link" href="https://www.firstinspires.org/programs/ftc" rel="noopener" target="_blank">FIRST Tech Challenge program page</a>, read 31 October 2026. FIRST, FIRST Tech Challenge and BIOBUZZ are trademarks of their owners. We are not connected with FIRST.' }
      ]
    },
    {
      id: 'tools', tint: 'deep', eyebrow: 'Tools',
      h2: 'Should an FTC team program in Blocks or Java?',
      lede: 'The FTC docs offer three official ways to program: Blocks, OnBot Java and Android Studio. FIRST&rsquo;s own Blocks tutorial recommends starting with Blocks, even for experienced programmers, and most teams move to Java once code grows.',
      body: [
        { kind: 'table', caption: 'The three programming tools in the FTC docs (ftc-docs.firstinspires.org, read 31 October 2026)', head: ['Tool', 'What it is', 'Who it suits (our view)'], rows: [
          ['Blocks', 'A visual tool in a web browser, served by the Robot Controller app', 'New teams, younger members, and anyone testing hardware quickly'],
          ['OnBot Java', 'Text-based Java in a web browser, also served by the Robot Controller app', 'Members with basic to advanced Java who want text code without installing an IDE'],
          ['Android Studio', 'A full Java development environment on a laptop, building the Robot Controller app from the SDK source', 'Experienced programmers who want libraries, version control and debugging tools']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The SDK this season',
          left: [
            'The FtcRobotController repository on GitHub lists v12.0 as the official release for the 2026/2027 season, published on September 12, 2026. Building it in Android Studio needs Android Studio Narwhal 3 Feature Drop or later.',
            'The FTC docs explain that the Kickoff SDK release is typically the minimum software version required for the season, so teams update their Robot Controller and Driver Station apps early and check the release notes for breaking changes.'
          ],
          rightH3: 'Kotlin, libraries and vision',
          right: [
            'The docs also cover Kotlin as an advanced topic and external libraries in OnBot Java and Blocks. Vision is its own section: AprilTags, color processing and on-board vision sensors.',
            'None of that is needed to start. A student who writes clean Java classes and methods can learn any of it later, which is why our lessons build the language first and the robot extras second.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://ftc-docs.firstinspires.org/en/latest/programming_resources/index.html" rel="noopener" target="_blank">FTC docs: Programming Resources</a>, the <a class="ag-inline-link" href="https://ftc-docs.firstinspires.org/en/latest/ftc_sdk/overview/index.html" rel="noopener" target="_blank">SDK overview</a>, and the <a class="ag-inline-link" href="https://github.com/FIRST-Tech-Challenge/FtcRobotController/releases" rel="noopener" target="_blank">FtcRobotController releases</a>, read 31 October 2026.' }
      ]
    },
    {
      id: 'opmode', tint: 'tint', eyebrow: 'OpModes',
      h2: 'What is an OpMode in FTC programming?',
      lede: 'An OpMode is one program the robot can run, chosen on the Driver Station. A team usually has at least one autonomous OpMode and one TeleOp OpMode, and the manual requires a team to select and initialize an OpMode before every match.',
      body: [
        { kind: 'ol', items: [
          '<b>Annotate the class.</b> <code>@TeleOp</code> or <code>@Autonomous</code> puts the OpMode on the Driver Station list, as the docs&rsquo; first OnBot Java example shows.',
          '<b>Extend LinearOpMode.</b> The class extends <code>LinearOpMode</code> and puts its work in <code>runOpMode()</code>, which runs from top to bottom.',
          '<b>Map the hardware.</b> <code>hardwareMap.get(DcMotor.class, "name")</code> finds each device by the name given in the robot configuration. A spelling mismatch here is the first bug most teams meet.',
          '<b>Wait for the start.</b> <code>waitForStart()</code> pauses until the driver presses PLAY, so nothing moves during setup.',
          '<b>Loop while active.</b> <code>while (opModeIsActive())</code> repeats until STOP, reading sensors and gamepads and setting motor power each time.',
          '<b>Report with telemetry.</b> <code>telemetry.addData</code> then <code>telemetry.update()</code> prints values on the Driver Station, the quickest way to see what the code believes.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'A rule that catches new teams',
          left: [
            'Rule G305 says every team must select and INIT an OpMode before the match, and if it is an AUTO OpMode the 30-second timer must be enabled. A team with no autonomous program is not excused.',
            'The manual&rsquo;s own advice for such teams is to create a default AUTO OpMode from the BasicOpMode sample and use auto-loading to queue up the TeleOp OpMode. That is a sensible first coding task for a rookie.'
          ],
          rightH3: 'Why telemetry first',
          right: [
            'Students often want to write a whole autonomous routine at once. We start with a program that only prints sensor and encoder values, because a programmer who can see the numbers stops guessing.',
            'The docs&rsquo; own sensor tutorial works the same way: its example prints a distance reading in centimeters and whether a touch sensor is pressed, so the student sees the sensor before trusting it.'
          ] }
      ]
    },
    {
      id: 'shaping', tint: 'deep', eyebrow: 'Java lesson',
      h2: 'How do you make FTC driving smoother in Java?',
      lede: 'Pass each joystick value through a shaping function before setting motor power. A blend of a cube and a straight line, plus a small deadband, gives drivers fine control near the center of the stick and full power at the edge.',
      body: [
        { kind: 'code', label: 'ShapedTankDrive.java (our teaching OpMode)', lang: 'Java', code: SHAPED, note: 'Our own program for practice. It uses only calls shown in the FTC docs and the official SDK samples: LinearOpMode, hardwareMap.get, setDirection, waitForStart, opModeIsActive, gamepad stick values, setPower and telemetry. Rename the motors to match your robot configuration.' },
        { kind: 'table', mt: true, caption: 'Motor power for each stick position under three mappings (our calculation, blend 0.7, deadband 0.05)', head: ['Stick pushed', 'Straight line', 'Pure cube', 'Our blend'], numCols: [0, 1, 2, 3], rows: [
          ['0.04', '0.04', '0.0001', '0 (inside the deadband)'],
          ['0.10', '0.10', '0.001', '0.0307'],
          ['0.25', '0.25', '0.0156', '0.0859'],
          ['0.50', '0.50', '0.125', '0.2375'],
          ['0.75', '0.75', '0.4219', '0.5203'],
          ['1.00', '1.00', '1.00', '1.00']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'What the numbers show',
          left: [
            'With a straight line, the gentlest quarter of the motor&rsquo;s power uses only the first quarter of stick travel. With our blend, a quarter of full power needs about 51 percent of the stick, so roughly half of the stick&rsquo;s movement is spent on slow, careful moves.',
            'Top speed is untouched: a stick pushed all the way still gives full power. That is the whole trick, more control where it is needed and no loss where it is not.'
          ],
          rightH3: 'Why not pure cube?',
          right: [
            'A pure cube makes the middle of the stick very weak: half stick is only 12.5 percent power, and many robots will not even move at that. The straight-line part of the blend keeps the robot responsive.',
            'The deadband solves a different problem. Gamepad sticks rarely rest at exactly zero, and without it a robot can creep while the driver is not touching anything.'
          ] },
        { kind: 'p', mt: true, html: '<b>Worked example (ours).</b> A driver pushes the stick to 0.6. The cube part is 0.6 times 0.6 times 0.6, which is 0.216, and 0.7 of that is 0.1512. The straight part is 0.3 times 0.6, which is 0.18. Added together the motor gets 0.3312 power, a little over a third, where a straight-line mapping would have given 0.6. Students check this by running the OpMode and reading the telemetry line, which prints the stick value and the power side by side.' }
      ]
    },
    {
      id: 'auto', tint: 'tint', eyebrow: 'Autonomous',
      h2: 'How should an FTC autonomous program be written?',
      lede: 'Build autonomous from short, checked steps, each with a timeout, and use sensor or encoder feedback rather than timing alone. That is also what FIRST&rsquo;s Control Award asks for: hardware or software that uses external feedback to control the robot.',
      body: [
        { kind: 'two',
          leftH3: 'Always give a step a way out',
          left: [
            'The official encoder sample, RobotAutoDriveByEncoder_Linear, loops only while the OpMode is active, the elapsed time is under a timeout and the motors are still busy. If a wheel slips or an arm jams, the step gives up instead of freezing the whole 30 seconds.',
            'We teach that pattern as a habit: every loop in an autonomous program names the condition that ends it and a time limit that ends it anyway.'
          ],
          rightH3: 'Limits the code must respect',
          right: [
            'Rule R503 limits a robot to 8 motors and 8 servos across every mechanism it uses. Rule R701 requires one robot controller, a REV Control Hub or an Android phone with a REV Expansion Hub, and the manual calls the Control Hub the only officially supported controller.',
            'During AUTO, rule G401 bars the drive team from touching the robot or the console, except to press start, press stop, or for safety. Whatever the program does, it does alone.'
          ] },
        { kind: 'table', mt: true, caption: 'What the 2026 to 2027 Control Award asks of a team&rsquo;s software, summarized from the competition manual (section 6.3.7)', head: ['Criterion', 'Status in the manual', 'In plain words'], rows: [
          ['Portfolio summary', 'Required', 'Describe the control components, the problem each solves and what each does; the full code does not have to be included'],
          ['External feedback', 'Required', 'Use one or more hardware or software solutions that use feedback, such as sensors, to control the robot'],
          ['Consistency', 'Encouraged', 'The solution should work during most matches, though not necessarily every time'],
          ['Reliability explained', 'Encouraged', 'Show it working, or explain how it could be improved'],
          ['What was learned', 'Encouraged', 'Describe the engineering process behind the control solution']
        ] },
        { kind: 'source', html: 'Sources: the 2026-2027 Competition Manual (sections 6.3.7, 11 and 12) and the official <a class="ag-inline-link" href="https://github.com/FIRST-Tech-Challenge/FtcRobotController" rel="noopener" target="_blank">FtcRobotController samples</a>, read 31 October 2026.' }
      ]
    },
    {
      id: 'practice', tint: 'deep', eyebrow: 'Practice set',
      h2: 'FTC Java practice problems',
      lede: 'Five original problems, written by us, for a student who has met Java classes and loops. Answers come with reasoning; none uses BIOBUZZ scoring.',
      body: [
        { kind: 'ol', items: [
          '<b>Sign flip.</b> Why does the teaching OpMode write <code>-gamepad1.left_stick_y</code>? <i>Answer:</i> the official tank sample negates the stick value too, and our comment gives the reason: pushing the stick up reads as negative. Negating it makes "push up" mean "drive forward".',
          '<b>Shaping by hand.</b> With our blend of 0.7, what power does a stick at 0.2 give? <i>Answer:</i> 0.2 cubed is 0.008, times 0.7 is 0.0056; 0.3 times 0.2 is 0.06; the total is 0.0656.',
          '<b>Deadband.</b> A stick resting at 0.03 makes the robot creep. Which line of our code stops it, and what power results? <i>Answer:</i> the deadband check, because 0.03 is under 0.05, so <code>shape</code> returns 0.0.',
          '<b>A missing timeout.</b> An autonomous loop runs <code>while (opModeIsActive() &amp;&amp; leftDrive.isBusy())</code>. What goes wrong if the wheel is blocked? <i>Answer:</i> the motor never reaches its target, so it stays busy and the loop runs until AUTO ends. Adding an elapsed-time check, as the official sample does, lets the step give up.',
          '<b>Counting motors.</b> A design uses four drive motors, two intake motors and one launcher motor, plus a second launcher motor on a swap-in mechanism. Is it legal under R503? <i>Answer:</i> that is eight motors across all mechanisms, which is exactly the limit, so yes; a ninth would not be.'
        ] },
        { kind: 'two', mt: true,
          leftH3: 'How we teach with them',
          left: [
            'A student predicts the answer, works it out on paper, then runs the code on a robot or in a simulator and compares. The gap between prediction and result is where the lesson lives.',
            'FIRST also lists FTC SIM among its season resources, which helps a student without a robot at home try ideas between team meetings.'
          ],
          rightH3: 'What stays with the team',
          right: [
            'We teach Java and robot programming ideas on our own example robots. We do not write a team&rsquo;s OpModes, fix its competition code for it or plan its BIOBUZZ strategy.',
            'The manual describes the right level of mentor involvement as whatever is needed to inspire the youth on the team. Our part is to make the student a stronger programmer who then works on the team&rsquo;s code.'
          ] }
      ]
    },
    {
      id: 'plan', tint: 'tint', eyebrow: 'A season plan',
      h2: 'A ten-week Java plan for a new FTC programmer',
      lede: 'Our plan for a student joining a team as its programmer, taking one live lesson a week with us alongside team meetings. It assumes no Java at the start.',
      body: [
        { kind: 'table', caption: 'Ten weeks from first Java to a working autonomous step (our plan)', head: ['Week', 'Java with us', 'Try at the team meeting'], rows: [
          ['1', 'Variables, types and printing', 'Telemetry that prints a stick value'],
          ['2', 'Conditions', 'A button that changes drive speed'],
          ['3', 'Loops', 'Understand the opModeIsActive loop'],
          ['4', 'Methods with return values', 'Write a shaping method'],
          ['5', 'Classes and fields', 'Move hardware setup into its own class'],
          ['6', 'Constants and tuning', 'Tune the deadband and blend with drivers'],
          ['7', 'Encoders and units', 'Print wheel positions while pushing the robot'],
          ['8', 'Timeouts and states', 'One autonomous step that can give up'],
          ['9', 'Reading sensors', 'Stop on a distance reading'],
          ['10', 'Explaining code', 'Write the portfolio summary of one control solution']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Starting from Blocks',
          left: [
            'A team already using Blocks does not have to switch at once. The ideas transfer: a loop is a loop and a condition is a condition, whatever the tool.',
            'We often teach a student to rebuild one of their Blocks programs in OnBot Java, line by line, so the new language is attached to logic they already understand.'
          ],
          rightH3: 'After the season',
          right: [
            'FTC Java is real Java. Classes, methods and loops learned on a robot carry straight into AP Computer Science A, which also uses Java.',
            'Our <a class="ag-inline-link" href="/ap-computer-science-a-practice-questions">AP Computer Science A practice questions</a> are a good test of how much has transferred.'
          ] }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Readiness',
    h2: 'Four stages of an FTC programmer',
    lede: 'Teams often have one student who can make the robot move and nobody who can make it reliable. These are the stages between, as we see them.',
    table: { caption: 'From first OpMode to control engineer (our stages)', head: ['Stage', 'What the student can do'], rows: [
      ['1. Driver code', 'Writes a TeleOp that maps sticks to motors'],
      ['2. Shaped control', 'Adds deadbands, shaping and speed modes that drivers ask for'],
      ['3. Feedback', 'Uses encoders and sensors, with timeouts, in autonomous steps'],
      ['4. Structure', 'Splits code into classes others on the team can read and change']
    ] },
    left: { h3: 'For parents and coaches', ps: [
      'Ask your student to show the telemetry while the robot runs. If they can explain each number, they understand their code.',
      'A team with one programmer has a single point of failure. Teaching a second student the basics is often the most useful thing a season can do.'
    ] },
    right: { h3: 'For students', ps: [
      'Commit or copy working code before every change. Robot bugs often appear only on the field, and going back fast matters.',
      'Name every constant. <code>DEADBAND</code> is easier to tune at an event than a bare 0.05 buried in a line.'
    ] }
  },

  catalogue: {
    eyebrow: 'The catalogue',
    h2: 'Nine courses for high school and middle school coders',
    lede: 'Taught live online by one teacher who stays with the student, in a class or privately.',
    bands: [
      { num: 'I', h3: 'Java and its foundations', sub: 'Grades 7 to 12', courses: [
        { code: 'FP / JV / 01', slug: 'java-programming-masterclass-for-teens', title: 'Java for teens', blurb: 'The FTC text language.' },
        { code: 'FP / JV / 02', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'A first text language.' },
        { code: 'FP / JV / 03', slug: 'maths-through-coding', title: 'Math through coding', blurb: 'Curves and angles in code.' }
      ] },
      { num: 'II', h3: 'Smarter robots', sub: 'Sensors, vision and data', courses: [
        { code: 'FP / SM / 01', slug: 'ai-ml-masterclass-teens', title: 'AI and machine learning', blurb: 'How vision models decide.' },
        { code: 'FP / SM / 02', slug: 'cpp-programming-for-kids-course', title: 'C++ basics', blurb: 'Another robot language.' },
        { code: 'FP / SM / 03', slug: 'problem-solving-and-computational-thinking-for-kids', title: 'Problem solving', blurb: 'Breaking tasks into steps.' }
      ] },
      { num: 'III', h3: 'Projects and contests', sub: 'Beyond the field', courses: [
        { code: 'FP / PR / 01', slug: 'game-development-masterclass-for-kids', title: 'Game development', blurb: 'Loops with instant feedback.' },
        { code: 'FP / PR / 02', slug: 'hackathon-prep-for-kids-coding-innovation-ai-projects-course', title: 'Hackathon prep', blurb: 'Build and pitch fast.' },
        { code: 'FP / PR / 03', slug: 'python-ai-kids-masterclass', title: 'Python and AI for kids', blurb: 'For younger team members.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How lessons run',
    h2: 'Java lessons that fit a robotics season',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'After school, between build nights.' },
      { time: 'Weekends', l: 'A morning lesson before a league meet.' },
      { time: '1-on-1', l: 'Built around one student&rsquo;s role and code.' }
    ],
    cells: [
      { h3: 'Real FTC Java', p: 'Only calls from the docs and samples.' },
      { h3: 'Our example robots', p: 'Never the team&rsquo;s competition code.' },
      { h3: 'Telemetry first', p: 'See the numbers, then decide.' },
      { h3: 'Blocks to Java', p: 'Rebuild what the student already knows.' },
      { h3: 'Every US time zone', p: 'Live online, coast to coast.' },
      { h3: 'Group size', p: 'Fifteen to twenty per batch, or one student.' }
    ]
  },

  projectsH2: 'Built by our students',
  projectsLede: 'Apps, games and AI projects from our learners. More are in the <a class="ag-inline-link" href="/student-labs">student labs</a>.',
  reviewsLede: 'Google reviews from parents, in their own words.',

  fees: {
    h2: 'Fees',
    lede: 'Team registration, parts and event entry are paid to FIRST and to suppliers; our fee covers Java and programming lessons only. We bill by the month, so lessons can run through league meets and stop after the last event.',
    free: ['A free first lesson', 'A short Java and logic check', 'No card details'],
    group: ['Fifteen to twenty students', 'One regular teacher', 'Choose your batch', 'Monthly'],
    one: ['A private Java teacher', 'Paced around your meets', 'Blocks, OnBot Java or Android Studio']
  },

  faq: {
    eyebrow: 'Questions from FTC families and coaches',
    h2: 'FTC programming: what people ask',
    items: [
      { q: 'What programming language does FTC use?', a: 'FTC robots are programmed in Blocks, a visual tool, or in Java, either in the browser with OnBot Java or in Android Studio. The FTC docs also cover Kotlin as an advanced option. Java is the text language most teams use.' },
      { q: 'Should a rookie FTC team start with Blocks or Java?', a: 'FIRST\'s Blocks tutorial recommends starting with Blocks, even for experienced programmers, because it is the quickest way to get a robot moving. Teams usually move to OnBot Java or Android Studio when their code grows.' },
      { q: 'What is the current FTC SDK version?', a: 'The FtcRobotController repository lists v12.0 as the official release for the 2026/2027 season, published September 12, 2026. Building it in Android Studio needs Narwhal 3 Feature Drop or later.' },
      { q: 'How long is autonomous in FTC 2026-2027?', a: 'The 2026-2027 Competition Manual gives a 30-second AUTO period, then an 8-second transition, then a 2-minute TELEOP period. During AUTO the drive team may not touch the robot or the Driver Station, apart from start, stop and safety.' },
      { q: 'What is an OpMode?', a: 'An OpMode is one program the robot can run, chosen on the Driver Station. Teams write TeleOp OpModes for driver control and Autonomous OpModes for the first 30 seconds, usually by extending LinearOpMode.' },
      { q: 'Does an FTC team need an autonomous program?', a: 'Rule G305 requires every team to select and initialize an OpMode before each match. The manual suggests that teams without an AUTO OpMode create a default one from the BasicOpMode sample and auto-load their TeleOp.' },
      { q: 'How many motors can an FTC robot have?', a: 'Rule R503 in the 2026-2027 manual limits a robot to a total of 8 motors and 8 servos across all the mechanisms it uses. Only motors on the manual\'s allowed list count as legal.' },
      { q: 'How much can a mentor help with FTC code?', a: 'The manual answers the question of mentor involvement with "However much is needed to inspire the youth on the team." We teach programming ideas on our own example robots, and the student writes the team\'s code.' },
      { q: 'What is the FTC Control Award?', a: 'It recognizes a team that uses sensors and software creatively to solve game challenges. The team needs a portfolio summarizing its control components, and at least one solution must use external feedback; the full code does not have to be included.' },
      { q: 'When are your lessons?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.' },
      { q: 'Are you part of FIRST?', a: 'No. Modern Age Coders is an independent coding school, not connected with FIRST, FIRST Tech Challenge or REV Robotics. FIRST and FIRST Tech Challenge are FIRST\'s trademarks.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'More for teen coders and builders',
    lede: 'Other contests, Java next steps and robot programs.',
    items: [
      { href: '/coding-competitions-for-middle-school-students', label: 'Middle school coding contests', p: 'For grade 7 and 8 students weighing FTC against other contests.' },
      { href: '/vex-iq-programming-help', label: 'VEX IQ programming help', p: 'Coded runs on a different robot system.' },
      { href: '/coding-competitions-for-high-school-students', label: 'High school coding competitions', p: 'Contests where the code runs on a screen, not a field.' },
      { href: '/ap-computer-science-a-practice-questions', label: 'AP CSA practice questions', p: 'Where FTC Java pays off in school.' },
      { href: '/us-coding-math-and-ai-competitions-calendar', label: 'US competitions calendar', p: 'Coding, math and AI contest dates this year.' },
      { href: '/coding-classes-for-high-school-students', label: 'Coding for high schoolers', p: 'Courses beyond the robot.' }
    ]
  },

  start: {
    h2: 'Book a free first lesson',
    lede: 'Tell us your child&rsquo;s grade, whether their team uses Blocks, OnBot Java or Android Studio, and how much Java they know. The teacher sets a short logic task and suggests where to begin.',
    readFirst: 'Want to know how we teach first? Read <a class="ag-inline-link" href="/how-we-teach">how we teach</a>, or see <a class="ag-inline-link" href="/courses">all our courses</a>.',
    note: 'Our teachers are in India and teach live by video at US after-school and weekend hours. WhatsApp is usually the fastest way to get a reply.',
    formNote: 'The first lesson costs nothing, and we never ask for a card to book it.'
  },

  footer: {
    cols: [
      { h4: 'Robots and contests', links: [
        { href: '/coding-competitions-for-middle-school-students', label: 'Middle school contests' },
        { href: '/vex-iq-programming-help', label: 'VEX IQ programming' },
        { href: '/coding-competitions-for-high-school-students', label: 'High school contests' },
        { href: '/us-coding-math-and-ai-competitions-calendar', label: 'Competitions calendar' }
      ] },
      { h4: 'Java and beyond', links: [
        { href: '/ap-computer-science-a-practice-questions', label: 'AP CSA practice' },
        { href: '/is-ap-computer-science-hard', label: 'Is AP CS hard?' },
        { href: '/coding-classes-for-high-school-students', label: 'High school coding' },
        { href: '/coding-classes-in-united-states', label: 'All US pages' }
      ] }
    ],
    bottomRight: 'Shape the stick, keep the speed'
  },

  personalityCss: `
.ag-root.ag-fp .ag-hero h1 { letter-spacing: -0.02em; }
.ag-root.ag-fp .ag-capsule { border-left-width: 4px; border-radius: 8px; }
.ag-root.ag-fp .ag-section-head h2 { max-width: 30ch; }
.ag-root.ag-fp .ag-table caption { text-align: left; font-weight: 500; }
.ag-root.ag-fp .ag-steps li { line-height: 1.62; }
.ag-root.ag-fp .ag-slots { gap: 0.9rem; }
`,

  dossier: {
    curriculumAuthority: 'Read raw on 31 October 2026: the 2026-2027 FIRST Tech Challenge Competition Manual version TU07 (BIOBUZZ overview, match timing, G305, G401, R503, R701, I101, 1.4.3 The Role of Mentors, 6.3.7 Control Award); firstinspires.org FTC program and game pages (grades 7-12, ages 12-18, BIOBUZZ presented by RTX, FTC SIM and StarterBots); ftc-docs.firstinspires.org programming resources, SDK overview, Blocks and OnBot Java tutorials, op mode and sensor pages; FtcRobotController releases (v12.0, September 12 2026, Narwhal 3 Feature Drop) and official samples (tank TeleOp, encoder autonomous).',
    localProject: 'Our ShapedTankDrive OpMode in FTC Java (deadband 0.05, blend 0.7), a shaping table (0.10 to 0.0307, 0.25 to 0.0859, 0.50 to 0.2375, 0.75 to 0.5203), quarter power at about 51 percent of stick travel, a stick at 0.6 giving 0.3312 power, five practice problems, a ten-week plan. Lesson family: nonlinear input shaping.',
    requiredMentions: ['an 8-second transition', 'v12.0 as the official release for the 2026/2027 season', 'Android Studio Narwhal 3 Feature Drop or later', 'recommends starting with Blocks, even for experienced programmers', 'a quarter of full power needs about 51 percent of the stick', 'the motor gets 0.3312 power', 'Shape the stick, keep the speed', 'limits a robot to 8 motors and 8 servos', 'the Control Hub the only officially supported controller', 'However much is needed to inspire the youth on the team.', 'create a default one from the BasicOpMode sample'],
    sources: [
      { claim: '2026-2027 FIRST Tech Challenge Competition Manual (TU07): match structure, OpMode, AUTO, robot and control rules, role of mentors, Control Award.', url: 'https://ftc-resources.firstinspires.org/ftc/game/manual' },
      { claim: 'FIRST Tech Challenge program and season pages: grades and ages, BIOBUZZ presented by RTX, season resources.', url: 'https://www.firstinspires.org/programs/ftc/game-and-season' },
      { claim: 'FTC docs: programming tools, SDK overview, Blocks and OnBot Java tutorials, op mode and sensor examples.', url: 'https://ftc-docs.firstinspires.org/en/latest/programming_resources/index.html' },
      { claim: 'FtcRobotController releases and samples: v12.0 for 2026/2027, Android Studio requirement, sample OpModes.', url: 'https://github.com/FIRST-Tech-Challenge/FtcRobotController/releases' }
    ],
    rejectedClaims: [
      'BIOBUZZ scoring values, field dimensions and penalties: summarized only at game-overview level; not reproduced.',
      'Registration fees and kit costs: published by FIRST and suppliers; not printed (no typed currency).',
      'The exact BIOBUZZ kickoff date: only a blog post dated September 18, 2026 was seen; no kickoff date printed.',
      'Any FTC API not seen in the docs or the official samples: not used in the page code.',
      'Any claim that our students win awards or advance: none made.',
      'Any affiliation with FIRST or REV Robotics: none, stated on the page.'
    ]
  }
};
