---
title: "FTC Programming Help: Java and Blocks for BIOBUZZ 2026-27"
description: "FTC programming help for 2026-27 BIOBUZZ: Blocks, OnBot Java or Android Studio, SDK v12.0, OpModes, autonomous rules and a worked Java TeleOp lesson."
canonical: https://learn.modernagecoders.com/ftc-programming-help
source: src/pages/ftc-programming-help.html
---
> FTC programming means writing the OpModes that run a FIRST Tech Challenge robot, in Blocks, OnBot Java or Java in Android Studio, using FIRST&rsquo;s SDK, now v12.0 for 2026 to 2027. Each BIOBUZZ match has a 30-second autonomous period and a 2-minute driver period. Modern Age Coders teaches the Java behind it live online, in a batch or 1-on-1, in our Java for Teens course.

[Home](/) / [Courses](/courses) / [Coding classes in the USA](/coding-classes-in-united-states) / [US math and coding competitions guide](/us-math-and-coding-competitions-guide) / FTC programming help

United States · Grades 7 to 12 · The 2026 to 2027 BIOBUZZ season

# FTC programming help: Java and Blocks for FIRST Tech Challenge

A FIRST Tech Challenge robot runs two kinds of program in every match: one that drives itself for the first 30 seconds, and one that turns a driver&rsquo;s joystick into motor power for the next two minutes. This guide reads the 2026 to 2027 BIOBUZZ competition manual, the official FTC docs and the current SDK release, then teaches a piece of real FTC Java most new programmers never think about: shaping the joystick so a driver can make small, precise moves without losing top speed.

At a glance: Season: BIOBUZZ presented by RTX; Grades: 7 to 12 (ages 12 to 18); AUTO period: 30 seconds; TELEOP period: 2 minutes; SDK: v12.0, released September 12, 2026; Tools: Blocks, OnBot Java, Android Studio; Classes: Weekdays or weekends, flexible; Start: A free first lesson. Rated 4.9 across 547 Google reviews.

## Courses for FTC programmers

Java first, because FTC text code is Java, then the logic and math a robot depends on.

- [Java for teens](/courses/java-programming-masterclass-for-teens): Classes, methods, loops and conditions: the language of FTC text code.
- [Python for teens](/courses/python-complete-masterclass-teens): A gentler first text language for a grade 7 or 8 team member.
- [Math through coding](/courses/maths-through-coding): Functions, curves and angles, written as code.

## How is a 2026 to 2027 FTC match structured?

Each BIOBUZZ match has a 30-second autonomous period, an 8-second transition and a 2-minute driver-controlled period. Two alliances of two teams each play, so a robot&rsquo;s code also has to work alongside a partner robot it has never seen before.

**The match as the 2026 to 2027 FIRST Tech Challenge Competition Manual (version TU07) describes it, read 31 October 2026**

| Part | Length | Who is in control | What the code does |
|---|---|---|---|
| Pre-match | Before the timer | Drive team sets up | An OpMode is selected and initialized on the Driver Station (rule G305) |
| AUTO | 30 seconds | The robot alone | Runs only its pre-programmed instructions; drivers may not touch it or the console (G401) |
| Transition | 8 seconds | Nobody | Teams switch from the AUTO OpMode to the TELEOP one |
| TELEOP | 2 minutes | Two human drivers | Turns gamepad input into motor and servo commands |

### The BIOBUZZ game in one paragraph

The manual describes two alliances collecting POLLEN and NECTAR, launching them into their HIVE and placing them into FLOWERS. Robots can use sensors in AUTO to collect and navigate; in the last 60 seconds of the match, all remaining NECTAR can be entered.

We describe the game only at that level. The full scoring rules belong to FIRST, and every team should read the current manual, which changes through team updates during the season.

### Who takes part

FIRST lists FIRST Tech Challenge for grades 7 to 12, ages 12 to 18, with a new game released every September. In North America a team is competition ready only after registering, paying, and having two Lead Coaches pass Youth Protection Program screening, under rule I101.

For a grade 7 or 8 student coming from FIRST LEGO League, which ends after its 2026 to 2027 season, FTC is the FIRST program that carries on for grades 7 to 12, so it is a natural next step.

Sources: the [2026-2027 FIRST Tech Challenge Competition Manual](https://ftc-resources.firstinspires.org/ftc/game/manual) (version TU07) and the [FIRST Tech Challenge program page](https://www.firstinspires.org/programs/ftc), read 31 October 2026. FIRST, FIRST Tech Challenge and BIOBUZZ are trademarks of their owners. We are not connected with FIRST.

## Should an FTC team program in Blocks or Java?

The FTC docs offer three official ways to program: Blocks, OnBot Java and Android Studio. FIRST&rsquo;s own Blocks tutorial recommends starting with Blocks, even for experienced programmers, and most teams move to Java once code grows.

**The three programming tools in the FTC docs (ftc-docs.firstinspires.org, read 31 October 2026)**

| Tool | What it is | Who it suits (our view) |
|---|---|---|
| Blocks | A visual tool in a web browser, served by the Robot Controller app | New teams, younger members, and anyone testing hardware quickly |
| OnBot Java | Text-based Java in a web browser, also served by the Robot Controller app | Members with basic to advanced Java who want text code without installing an IDE |
| Android Studio | A full Java development environment on a laptop, building the Robot Controller app from the SDK source | Experienced programmers who want libraries, version control and debugging tools |

### The SDK this season

The FtcRobotController repository on GitHub lists v12.0 as the official release for the 2026/2027 season, published on September 12, 2026. Building it in Android Studio needs Android Studio Narwhal 3 Feature Drop or later.

The FTC docs explain that the Kickoff SDK release is typically the minimum software version required for the season, so teams update their Robot Controller and Driver Station apps early and check the release notes for breaking changes.

### Kotlin, libraries and vision

The docs also cover Kotlin as an advanced topic and external libraries in OnBot Java and Blocks. Vision is its own section: AprilTags, color processing and on-board vision sensors.

None of that is needed to start. A student who writes clean Java classes and methods can learn any of it later, which is why our lessons build the language first and the robot extras second.

Sources: [FTC docs: Programming Resources](https://ftc-docs.firstinspires.org/en/latest/programming_resources/index.html), the [SDK overview](https://ftc-docs.firstinspires.org/en/latest/ftc_sdk/overview/index.html), and the [FtcRobotController releases](https://github.com/FIRST-Tech-Challenge/FtcRobotController/releases), read 31 October 2026.

## What is an OpMode in FTC programming?

An OpMode is one program the robot can run, chosen on the Driver Station. A team usually has at least one autonomous OpMode and one TeleOp OpMode, and the manual requires a team to select and initialize an OpMode before every match.

1. Annotate the class. @TeleOp or @Autonomous puts the OpMode on the Driver Station list, as the docs&rsquo; first OnBot Java example shows.
2. Extend LinearOpMode. The class extends LinearOpMode and puts its work in runOpMode(), which runs from top to bottom.
3. Map the hardware. hardwareMap.get(DcMotor.class, "name") finds each device by the name given in the robot configuration. A spelling mismatch here is the first bug most teams meet.
4. Wait for the start. waitForStart() pauses until the driver presses PLAY, so nothing moves during setup.
5. Loop while active. while (opModeIsActive()) repeats until STOP, reading sensors and gamepads and setting motor power each time.
6. Report with telemetry. telemetry.addData then telemetry.update() prints values on the Driver Station, the quickest way to see what the code believes.

### A rule that catches new teams

Rule G305 says every team must select and INIT an OpMode before the match, and if it is an AUTO OpMode the 30-second timer must be enabled. A team with no autonomous program is not excused.

The manual&rsquo;s own advice for such teams is to create a default AUTO OpMode from the BasicOpMode sample and use auto-loading to queue up the TeleOp OpMode. That is a sensible first coding task for a rookie.

### Why telemetry first

Students often want to write a whole autonomous routine at once. We start with a program that only prints sensor and encoder values, because a programmer who can see the numbers stops guessing.

The docs&rsquo; own sensor tutorial works the same way: its example prints a distance reading in centimeters and whether a touch sensor is pressed, so the student sees the sensor before trusting it.

## How do you make FTC driving smoother in Java?

Pass each joystick value through a shaping function before setting motor power. A blend of a cube and a straight line, plus a small deadband, gives drivers fine control near the center of the stick and full power at the edge.

**ShapedTankDrive.java (our teaching OpMode)** (Java)
```java
package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.LinearOpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.qualcomm.robotcore.hardware.DcMotor;

// Our teaching OpMode: tank drive with a shaped joystick response.
@TeleOp(name = "Shaped Tank Drive (practice)", group = "Practice")
public class ShapedTankDrive extends LinearOpMode {

    static final double DEADBAND = 0.05; // ignore tiny stick drift
    static final double BLEND = 0.7;     // 0 = straight line, 1 = pure cube

    private DcMotor leftDrive;
    private DcMotor rightDrive;

    double shape(double stick) {
        if (Math.abs(stick) < DEADBAND) return 0.0;
        return BLEND * stick * stick * stick + (1 - BLEND) * stick;
    }

    @Override
    public void runOpMode() {
        leftDrive = hardwareMap.get(DcMotor.class, "left_drive");
        rightDrive = hardwareMap.get(DcMotor.class, "right_drive");
        leftDrive.setDirection(DcMotor.Direction.REVERSE);

        telemetry.addData("Status", "Initialized");
        telemetry.update();
        waitForStart();

        while (opModeIsActive()) {
            double leftStick = -gamepad1.left_stick_y;  // pushing up reads negative
            double rightStick = -gamepad1.right_stick_y;
            leftDrive.setPower(shape(leftStick));
            rightDrive.setPower(shape(rightStick));
            telemetry.addData("Left stick to power", "%.2f to %.2f", leftStick, shape(leftStick));
            telemetry.update();
        }
    }
}
```
Our own program for practice. It uses only calls shown in the FTC docs and the official SDK samples: LinearOpMode, hardwareMap.get, setDirection, waitForStart, opModeIsActive, gamepad stick values, setPower and telemetry. Rename the motors to match your robot configuration.

**Motor power for each stick position under three mappings (our calculation, blend 0.7, deadband 0.05)**

| Stick pushed | Straight line | Pure cube | Our blend |
|---|---|---|---|
| 0.04 | 0.04 | 0.0001 | 0 (inside the deadband) |
| 0.10 | 0.10 | 0.001 | 0.0307 |
| 0.25 | 0.25 | 0.0156 | 0.0859 |
| 0.50 | 0.50 | 0.125 | 0.2375 |
| 0.75 | 0.75 | 0.4219 | 0.5203 |
| 1.00 | 1.00 | 1.00 | 1.00 |

### What the numbers show

With a straight line, the gentlest quarter of the motor&rsquo;s power uses only the first quarter of stick travel. With our blend, a quarter of full power needs about 51 percent of the stick, so roughly half of the stick&rsquo;s movement is spent on slow, careful moves.

Top speed is untouched: a stick pushed all the way still gives full power. That is the whole trick, more control where it is needed and no loss where it is not.

### Why not pure cube?

A pure cube makes the middle of the stick very weak: half stick is only 12.5 percent power, and many robots will not even move at that. The straight-line part of the blend keeps the robot responsive.

The deadband solves a different problem. Gamepad sticks rarely rest at exactly zero, and without it a robot can creep while the driver is not touching anything.

Worked example (ours). A driver pushes the stick to 0.6. The cube part is 0.6 times 0.6 times 0.6, which is 0.216, and 0.7 of that is 0.1512. The straight part is 0.3 times 0.6, which is 0.18. Added together the motor gets 0.3312 power, a little over a third, where a straight-line mapping would have given 0.6. Students check this by running the OpMode and reading the telemetry line, which prints the stick value and the power side by side.

## How should an FTC autonomous program be written?

Build autonomous from short, checked steps, each with a timeout, and use sensor or encoder feedback rather than timing alone. That is also what FIRST&rsquo;s Control Award asks for: hardware or software that uses external feedback to control the robot.

### Always give a step a way out

The official encoder sample, RobotAutoDriveByEncoder_Linear, loops only while the OpMode is active, the elapsed time is under a timeout and the motors are still busy. If a wheel slips or an arm jams, the step gives up instead of freezing the whole 30 seconds.

We teach that pattern as a habit: every loop in an autonomous program names the condition that ends it and a time limit that ends it anyway.

### Limits the code must respect

Rule R503 limits a robot to 8 motors and 8 servos across every mechanism it uses. Rule R701 requires one robot controller, a REV Control Hub or an Android phone with a REV Expansion Hub, and the manual calls the Control Hub the only officially supported controller.

During AUTO, rule G401 bars the drive team from touching the robot or the console, except to press start, press stop, or for safety. Whatever the program does, it does alone.

**What the 2026 to 2027 Control Award asks of a team&rsquo;s software, summarized from the competition manual (section 6.3.7)**

| Criterion | Status in the manual | In plain words |
|---|---|---|
| Portfolio summary | Required | Describe the control components, the problem each solves and what each does; the full code does not have to be included |
| External feedback | Required | Use one or more hardware or software solutions that use feedback, such as sensors, to control the robot |
| Consistency | Encouraged | The solution should work during most matches, though not necessarily every time |
| Reliability explained | Encouraged | Show it working, or explain how it could be improved |
| What was learned | Encouraged | Describe the engineering process behind the control solution |

Sources: the 2026-2027 Competition Manual (sections 6.3.7, 11 and 12) and the official [FtcRobotController samples](https://github.com/FIRST-Tech-Challenge/FtcRobotController), read 31 October 2026.

## FTC Java practice problems

Five original problems, written by us, for a student who has met Java classes and loops. Answers come with reasoning; none uses BIOBUZZ scoring.

1. Sign flip. Why does the teaching OpMode write -gamepad1.left_stick_y? Answer: the official tank sample negates the stick value too, and our comment gives the reason: pushing the stick up reads as negative. Negating it makes "push up" mean "drive forward".
2. Shaping by hand. With our blend of 0.7, what power does a stick at 0.2 give? Answer: 0.2 cubed is 0.008, times 0.7 is 0.0056; 0.3 times 0.2 is 0.06; the total is 0.0656.
3. Deadband. A stick resting at 0.03 makes the robot creep. Which line of our code stops it, and what power results? Answer: the deadband check, because 0.03 is under 0.05, so shape returns 0.0.
4. A missing timeout. An autonomous loop runs while (opModeIsActive() && leftDrive.isBusy()). What goes wrong if the wheel is blocked? Answer: the motor never reaches its target, so it stays busy and the loop runs until AUTO ends. Adding an elapsed-time check, as the official sample does, lets the step give up.
5. Counting motors. A design uses four drive motors, two intake motors and one launcher motor, plus a second launcher motor on a swap-in mechanism. Is it legal under R503? Answer: that is eight motors across all mechanisms, which is exactly the limit, so yes; a ninth would not be.

### How we teach with them

A student predicts the answer, works it out on paper, then runs the code on a robot or in a simulator and compares. The gap between prediction and result is where the lesson lives.

FIRST also lists FTC SIM among its season resources, which helps a student without a robot at home try ideas between team meetings.

### What stays with the team

We teach Java and robot programming ideas on our own example robots. We do not write a team&rsquo;s OpModes, fix its competition code for it or plan its BIOBUZZ strategy.

The manual describes the right level of mentor involvement as whatever is needed to inspire the youth on the team. Our part is to make the student a stronger programmer who then works on the team&rsquo;s code.

## A ten-week Java plan for a new FTC programmer

Our plan for a student joining a team as its programmer, taking one live lesson a week with us alongside team meetings. It assumes no Java at the start.

**Ten weeks from first Java to a working autonomous step (our plan)**

| Week | Java with us | Try at the team meeting |
|---|---|---|
| 1 | Variables, types and printing | Telemetry that prints a stick value |
| 2 | Conditions | A button that changes drive speed |
| 3 | Loops | Understand the opModeIsActive loop |
| 4 | Methods with return values | Write a shaping method |
| 5 | Classes and fields | Move hardware setup into its own class |
| 6 | Constants and tuning | Tune the deadband and blend with drivers |
| 7 | Encoders and units | Print wheel positions while pushing the robot |
| 8 | Timeouts and states | One autonomous step that can give up |
| 9 | Reading sensors | Stop on a distance reading |
| 10 | Explaining code | Write the portfolio summary of one control solution |

### Starting from Blocks

A team already using Blocks does not have to switch at once. The ideas transfer: a loop is a loop and a condition is a condition, whatever the tool.

We often teach a student to rebuild one of their Blocks programs in OnBot Java, line by line, so the new language is attached to logic they already understand.

### After the season

FTC Java is real Java. Classes, methods and loops learned on a robot carry straight into AP Computer Science A, which also uses Java.

Our [AP Computer Science A practice questions](/ap-computer-science-a-practice-questions) are a good test of how much has transferred.

## Four stages of an FTC programmer

Teams often have one student who can make the robot move and nobody who can make it reliable. These are the stages between, as we see them.

**From first OpMode to control engineer (our stages)**

| Stage | What the student can do |
|---|---|
| 1. Driver code | Writes a TeleOp that maps sticks to motors |
| 2. Shaped control | Adds deadbands, shaping and speed modes that drivers ask for |
| 3. Feedback | Uses encoders and sensors, with timeouts, in autonomous steps |
| 4. Structure | Splits code into classes others on the team can read and change |

### For parents and coaches

Ask your student to show the telemetry while the robot runs. If they can explain each number, they understand their code.
A team with one programmer has a single point of failure. Teaching a second student the basics is often the most useful thing a season can do.

### For students

Commit or copy working code before every change. Robot bugs often appear only on the field, and going back fast matters.
Name every constant. DEADBAND is easier to tune at an event than a bare 0.05 buried in a line.

## Nine courses for high school and middle school coders

Taught live online by one teacher who stays with the student, in a class or privately.

### Java and its foundations

Grades 7 to 12

- [Java for teens](/courses/java-programming-masterclass-for-teens): The FTC text language.
- [Python for teens](/courses/python-complete-masterclass-teens): A first text language.
- [Math through coding](/courses/maths-through-coding): Curves and angles in code.

### Smarter robots

Sensors, vision and data

- [AI and machine learning](/courses/ai-ml-masterclass-teens): How vision models decide.
- [C++ basics](/courses/cpp-programming-for-kids-course): Another robot language.
- [Problem solving](/courses/problem-solving-and-computational-thinking-for-kids): Breaking tasks into steps.

### Projects and contests

Beyond the field

- [Game development](/courses/game-development-masterclass-for-kids): Loops with instant feedback.
- [Hackathon prep](/courses/hackathon-prep-for-kids-coding-innovation-ai-projects-course): Build and pitch fast.
- [Python and AI for kids](/courses/python-ai-kids-masterclass): For younger team members.

## Java lessons that fit a robotics season

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

- **Weekdays** After school, between build nights.
- **Weekends** A morning lesson before a league meet.
- **1-on-1** Built around one student&rsquo;s role and code.

- **Real FTC Java** Only calls from the docs and samples.
- **Our example robots** Never the team&rsquo;s competition code.
- **Telemetry first** See the numbers, then decide.
- **Blocks to Java** Rebuild what the student already knows.
- **Every US time zone** Live online, coast to coast.
- **Group size** Fifteen to twenty per batch, or one student.

## Fees

Team registration, parts and event entry are paid to FIRST and to suppliers; our fee covers Java and programming lessons only. We bill by the month, so lessons can run through league meets and stop after the last event.

- Free first class: USD 0. A free first lesson. A short Java and logic check. No card details.
- Group batch: USD 100 a month. Fifteen to twenty students. One regular teacher. Choose your batch. Monthly.
- One to one: USD 150 a month. A private Java teacher. Paced around your meets. Blocks, OnBot Java or Android Studio.

## FTC programming: what people ask

### What programming language does FTC use?

FTC robots are programmed in Blocks, a visual tool, or in Java, either in the browser with OnBot Java or in Android Studio. The FTC docs also cover Kotlin as an advanced option. Java is the text language most teams use.

### Should a rookie FTC team start with Blocks or Java?

FIRST's Blocks tutorial recommends starting with Blocks, even for experienced programmers, because it is the quickest way to get a robot moving. Teams usually move to OnBot Java or Android Studio when their code grows.

### What is the current FTC SDK version?

The FtcRobotController repository lists v12.0 as the official release for the 2026/2027 season, published September 12, 2026. Building it in Android Studio needs Narwhal 3 Feature Drop or later.

### How long is autonomous in FTC 2026-2027?

The 2026-2027 Competition Manual gives a 30-second AUTO period, then an 8-second transition, then a 2-minute TELEOP period. During AUTO the drive team may not touch the robot or the Driver Station, apart from start, stop and safety.

### What is an OpMode?

An OpMode is one program the robot can run, chosen on the Driver Station. Teams write TeleOp OpModes for driver control and Autonomous OpModes for the first 30 seconds, usually by extending LinearOpMode.

### Does an FTC team need an autonomous program?

Rule G305 requires every team to select and initialize an OpMode before each match. The manual suggests that teams without an AUTO OpMode create a default one from the BasicOpMode sample and auto-load their TeleOp.

### How many motors can an FTC robot have?

Rule R503 in the 2026-2027 manual limits a robot to a total of 8 motors and 8 servos across all the mechanisms it uses. Only motors on the manual's allowed list count as legal.

### How much can a mentor help with FTC code?

The manual answers the question of mentor involvement with "However much is needed to inspire the youth on the team." We teach programming ideas on our own example robots, and the student writes the team's code.

### What is the FTC Control Award?

It recognizes a team that uses sensors and software creatively to solve game challenges. The team needs a portfolio summarizing its control components, and at least one solution must use external feedback; the full code does not have to be included.

### When are your lessons?

Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.

### Are you part of FIRST?

No. Modern Age Coders is an independent coding school, not connected with FIRST, FIRST Tech Challenge or REV Robotics. FIRST and FIRST Tech Challenge are FIRST's trademarks.

## More for teen coders and builders

- [Middle school coding contests](/coding-competitions-for-middle-school-students): For grade 7 and 8 students weighing FTC against other contests.
- [VEX IQ programming help](/vex-iq-programming-help): Coded runs on a different robot system.
- [High school coding competitions](/coding-competitions-for-high-school-students): Contests where the code runs on a screen, not a field.
- [AP CSA practice questions](/ap-computer-science-a-practice-questions): Where FTC Java pays off in school.
- [US competitions calendar](/us-coding-math-and-ai-competitions-calendar): Coding, math and AI contest dates this year.
- [Coding for high schoolers](/coding-classes-for-high-school-students): Courses beyond the robot.

## Related pages in this guide

Part of the guide: [US math and coding competitions guide](/us-math-and-coding-competitions-guide)

### Coding and robotics

- [Bebras Challenge practice](/bebras-challenge-practice)
- [FIRST LEGO League coding help](/first-lego-league-coding-help-usa)
- [VEX IQ programming help](/vex-iq-programming-help)
- [Science Olympiad coding events help](/science-olympiad-coding-events-help)
- [ACSL competition preparation](/acsl-competition-preparation)
- [Coding competitions for middle school students](/coding-competitions-for-middle-school-students)
- [Coding competitions for high school students](/coding-competitions-for-high-school-students)

### Math contests

- [MOEMS math olympiad preparation](/moems-math-olympiad-preparation)
- [Noetic math contest preparation](/noetic-math-contest-preparation)
- [Math League contest preparation](/math-league-contest-preparation)
- [Continental Math League preparation](/continental-math-league-preparation)
- [Math competitions for middle school students](/math-competitions-for-middle-school-students)
- [Online math circle for kids](/online-math-circle-for-kids)
- [Art of Problem Solving alternative](/art-of-problem-solving-alternative)

### Projects and next steps

- [ISEF computer science project mentoring](/isef-computer-science-project-mentoring)
- [Girls Who Code next step](/girls-who-code-next-step)
- [After the Hour of Code](/after-hour-of-code-next-steps)
- [US competitions calendar 2026-27](/us-coding-math-and-ai-competitions-calendar)

More guides: [US state math tests by state](/us-state-math-tests-by-state), [US gifted and selective school tests](/us-gifted-and-selective-school-tests-guide), [US math placement and college readiness tests](/us-math-placement-and-college-readiness-tests), [Homeschool and school math curricula guide](/homeschool-math-curriculum-guide-usa)

## Contact

Book the free first class at [https://learn.modernagecoders.com/ftc-programming-help](https://learn.modernagecoders.com/ftc-programming-help#start), WhatsApp or call +91 91233 66161 (an Indian number, Modern Age Coders' actual contact), or email connect@modernagecoders.com.
