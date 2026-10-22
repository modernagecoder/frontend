'use strict';
// Java classes for teens in Canada (ag- door, Canada cluster Plan 2, row 68). Course-code page: ICS3U / ICS4U in Java.
// Spec docs/superpowers/specs/2026-10-22-ca-cluster-design.md; brief docs/superpowers/plans/2026-10-22-ca-writer-brief.md.
// Spine: where Java meets a Canadian teenager (Ontario ICS3U/ICS4U and ICS4C, Nova Scotia Computer Programming 12,
// the CCC, FIRST Tech Challenge), which Java to install in 2026 to 2027 (OpenJDK and Oracle's roadmap, JEP 512), and
// one original Java project on City of Vancouver open data that teaches classes and objects.
// Sources read raw on 22 October 2026 (copies in keyword-research-2026-09/ca/src-pilots/java-classes-for-teens-in-canada/):
//  - Ontario 2008 computer studies document (ontario-computer10to12_2008.txt, from ca/src/ontario): "The computer
//    programming language used and the order in which concepts are taught is left to the teacher's professional
//    judgement."; some teachers use an "objects-first" approach.
//  - facts-schools-contests.md: ICS3U "Students will design software independently and as part of a team, using
//    industry-standard programming tools and applying the software development life-cycle model"; ICS4U "Students will
//    use modular design principles to create complex and fully documented programs, according to industry standards";
//    ICS4U prerequisite "Introduction to Computer Science, Grade 11, University Preparation"; ICS4C "Students will learn
//    object-oriented programming concepts, create object-oriented software solutions, and design graphical user
//    interfaces"; "Each of the courses listed above is worth one credit."; Nova Scotia "CodeHS: NSVS Computer
//    Programming 12 (Java)."; CCC "CCC participants may use C, C++, Python 2, Python 3, or Java." and "it may not always
//    be possible to achieve a perfect score with a particular language choice (for example, Python or Java)"; FIRST Tech
//    Challenge robots "can be coded using a variety of levels of Java-based programming"; Waterloo recommended course
//    "Grade 11 U Introduction to Computer Science".
//  - openjdk.org/projects/jdk/25 (openjdk.org_projects_jdk_25_.html): "JDK 25 reached General Availability on 16
//    September 2025."; JEP 512 "Compact Source Files and Instance Main Methods" in the feature list.
//  - openjdk.org/projects/jdk (openjdk.org_projects_jdk_.html): "The Project ships a feature release every six months";
//    "27 (GA 2026/09/15)", "26 (GA 2026/03/17)", "25 (GA 2025/09/16)".
//  - oracle.com Java SE support roadmap (www.oracle.com_java_technologies_java-se-support-roadmap.html.html): "Java SE
//    8, 11, 17, 21, and 25 are LTS releases."; "the next planned LTS release is Java 29 in September 2027".
//  - openjdk.org/jeps/512 (openjdk.org_jeps_512.html): "Evolve the Java programming language so that beginners can
//    write their first programs without needing to understand language features designed for large programs.";
//    status "Closed / Delivered", release 25; example "void main() { IO.println("Hello, World!"); }".
//  - facts-geo.md section 3 (tzdb 2026e) for the time note.
// Open data: City of Vancouver, Public art (opendata.vancouver.ca), five-column export
//  https://opendata.vancouver.ca/api/explore/v2.1/catalog/datasets/public-art/exports/csv?select=registryid,type,status,
//  neighbourhood,yearofinstallation&delimiter=, (data/vancouver-public-art-5col.csv, 36,384 bytes, sha256
//  386db46e...d2cc, 751 records, no quote characters); full export data/vancouver-public-art.csv (751 records,
//  semicolon-separated). Licence: Open Government Licence - Vancouver (data/vancouver-licence.html): "including for
//  commercial purposes"; attribution "Contains information licensed under the Open Government Licence" then a dash
//  then "Vancouver." (dash not reproduced).
// Our own calculations (run/PublicArt.java compiled and run with javac/java 22.0.1, output PublicArt.out.txt; Python
//  checks inline): 751 records; status In place 478, No longer in place 268, Deaccessioned 4, In progress 1; the else
//  branch counts 273 as not in place; in place by decade 1900s 3 ... 2010s 159, 2020s 45; oldest in place #284, 1901;
//  newest in place 2026 (7 records), 2025 (8); type Sculpture 187 overall, 165 in place; neighbourhood Downtown 217,
//  DowntownEastside 52, startsWith("Downtown") 269; blank neighbourhood 99 (21 in place).
// Lesson family: modelling rows as objects (a class, a constructor that parses, a method that answers a question).

const CA = { name: 'Canada', iso: 'CA', dial: '+1', lang: 'en-CA', locale: 'en_CA', geoRegion: 'CA', brandTag: 'CA', phoneLabel: 'Canadian mobile number', phonePlaceholder: '(416) 555-0123', gradeLabel: 'Grade or age', minDigits: 10, maxDigits: 10, nationalStart: '2-9', stripTrunk: true };

const JAVA = `// PublicArt.java: our own program for this page (Modern Age Coders)
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

public class PublicArt {

    static class Artwork {
        int id;
        String type;
        String status;
        String neighbourhood;
        int year;

        Artwork(String line) {
            String[] f = line.split(",", -1);       // -1 keeps empty fields
            id = Integer.parseInt(f[0]);
            type = f[1];
            status = f[2];
            neighbourhood = f[3];
            year = Integer.parseInt(f[4]);
        }

        boolean stillThere() {
            return status.equals("In place");
        }
    }

    public static void main(String[] args) throws IOException {
        List<String> lines = Files.readAllLines(Paths.get("vancouver-public-art-5col.csv"));
        List<Artwork> art = new ArrayList<>();
        for (int i = 1; i < lines.size(); i++) {         // line 0 is the header
            art.add(new Artwork(lines.get(i)));
        }

        Map<Integer, Integer> byDecade = new TreeMap<>();
        int gone = 0;
        for (Artwork a : art) {
            if (a.stillThere()) {
                int decade = a.year / 10 * 10;
                byDecade.put(decade, byDecade.getOrDefault(decade, 0) + 1);
            } else {
                gone++;
            }
        }

        Artwork oldest = art.stream()
                .filter(Artwork::stillThere)
                .min(Comparator.comparingInt(a -> a.year))
                .get();

        System.out.println("records: " + art.size() + ", not in place: " + gone);
        System.out.println("in place, by decade installed: " + byDecade);
        System.out.println("oldest in place: #" + oldest.id + ", " + oldest.type + ", " + oldest.year);
    }
}`;

const JAVA_OUT = `records: 751, not in place: 273
in place, by decade installed: {1900=3, 1910=3, 1920=9, 1930=4, 1940=2, 1950=8, 1960=24, 1970=31, 1980=33, 1990=67, 2000=90, 2010=159, 2020=45}
oldest in place: #284, Totem pole, 1901`;

module.exports = {
  cluster: 'ag',
  clusterName: 'Canada',
  hub: { group: 'guide', tag: 'JAVA FOR TEENS', blurb: 'Java for Canadian teenagers: where it appears in ICS3U, ICS4U and Nova Scotia\'s Programming 12, which JDK to install, and a Vancouver public art project in Java.' },
  slug: 'java-classes-for-teens-in-canada',
  code: 'jtc',
  accent: '#3D6B41',
  accentRationale: 'Java classes for teens, Canada: a muted pine green #3D6B41, allocated for row 68 at least 6 RGB units from every site accent and 14 from the other Canada accents; contrast 5.87 on the paper #FBF8F2 and above 4.5 on all three paper tints',
  pageType: 'market',
  courseCodePage: true,
  market: CA,
  parents: [{ slug: 'coding-classes-in-canada', name: 'Canada' }],
  routeLabel: 'Java classes for teens in Canada',
  title: 'Java Classes for Teens in Canada: ICS3U, ICS4U and Beyond',
  description: 'Java for Canadian teens: where it appears in ICS3U, ICS4U and Nova Scotia\'s Programming 12, which JDK to install in 2026, and a Vancouver open data project in Java.',
  ogDescription: 'Java for high school students in Canada: what Ontario\'s curriculum says about language choice, the 2026 JDK releases from OpenJDK and Oracle, and a working Java program on the City of Vancouver\'s public art registry.',
  twitterDescription: 'Java for Canadian teens: ICS3U and ICS4U, the 2026 JDKs, and a real Vancouver data project.',
  pageName: 'Java Classes for Teens in Canada',
  webPageDescription: 'A guide for Canadian high school students and parents to learning Java, built from Ontario\'s computer studies curriculum, Nova Scotia Virtual School, CEMC\'s CCC page, OpenJDK and Oracle\'s Java roadmap, with an original Java program on City of Vancouver open data.',
  courseDescription: 'Live online Java classes for teenagers aged 13 to 18 across Canada, from first programs to object-oriented design, alongside school courses such as ICS3U and ICS4U, in a batch or one to one.',
  crumbs: [{ name: 'Courses', href: '/courses' }, { name: 'Coding classes in Canada', href: '/coding-classes-in-canada' }],
  crumbLabel: 'Java for teens',
  navLinks: [
    { href: '/coding-classes-in-canada', label: 'Canada' },
    { href: '#school', label: 'Java at school' },
    { href: '#jdk', label: 'Which JDK' },
    { href: '#project', label: 'Vancouver project' },
    { href: '#exercises', label: 'Exercises' },
    { href: '#path', label: 'Beyond school' }
  ],
  eyebrow: 'Canada &middot; Java &middot; Ages 13 to 18',
  h1: 'Java classes for teens in Canada',
  lede: 'Many Canadian teenagers learn their first serious language in Java, because their school chose it for Grade 11 or 12 computer science. Others pick it for robotics, for the Canadian Computing Competition, or because a university course will use it. This page covers where Java appears for Canadian teens, which Java Development Kit to install this year, a complete Java program on the City of Vancouver\'s public art registry, and exercises to extend it. The credit itself stays with the school: we do not grant Ontario credits, and no province recognises our classes as one.',
  secondaryCta: { href: '#project', label: 'See the Java project' },
  wa: 'Hello Modern Age Coders, my teenager in Canada is learning Java at school. Could we book a free first class?',
  heroNote: 'Teaching live online since 2020 &middot; 10,000+ students &middot; Java taught alongside ICS3U and ICS4U, never for credit',
  spec: [
    ['Ages', '13 to 18'],
    ['Language', 'Java, on a current JDK'],
    ['School courses', 'Alongside ICS3U and ICS4U'],
    ['Credits', 'None; credits come from school'],
    ['Group size', 'Fifteen to twenty, or one to one'],
    ['Classes', 'Weekdays or weekends, flexible'],
    ['First class', 'Free, no card needed']
  ],
  capsuleQ: 'In short',
  capsule: 'Java classes for teens in Canada teach 13 to 18 year olds to write and design Java programs, from loops to classes and objects, often beside a school ICS3U or ICS4U course taught in Java. No credit is attached. Modern Age Coders runs these classes live online, as a batch or one to one, through its Java for Teens course.',

  picks: {
    eyebrow: 'Java courses for teens',
    h2: 'Three ways into Java for Canadian teens',
    lede: 'A full Java course from the first line, a companion paced to Ontario\'s school courses, and an exam-focused Java course for schools that offer AP.',
    items: [
      { course: 'java-programming-masterclass-for-teens', code: 'JTC / 01', title: 'Java for Teens', note: 'For 13 to 18 year olds starting from zero. Its four phases move from Java foundations and OOP to collections and games, data structures, then APIs and a capstone.' },
      { course: 'ics3u-ics4u-computer-science-companion-course', code: 'JTC / 02', title: 'Ontario Computer Science Companion', note: 'For Ontario students taking ICS3U or ICS4U in Java (or Python). Follows the school\'s unit order; start in any month. No credit is granted.' },
      { course: 'ap-computer-science-a-java-exam-prep-course', code: 'JTC / 03', title: 'AP Computer Science A', note: 'For high school students at schools that offer AP. Six months of Java from the basics, with full exam preparation.' }
    ]
  },

  sections: [
    {
      id: 'school', tint: 'tint', eyebrow: 'Java at school',
      h2: 'Where Java turns up for Canadian high school students',
      lede: 'No province we checked makes Java compulsory, yet many Canadian teens end up writing it, because the curriculum leaves the language to the teacher, or because a course, contest or robot uses it. These are the documents that matter, read on 22 October 2026.',
      body: [
        { kind: 'table', caption: 'Java in Canadian high school courses and programmes, from the organisers\' own documents (read 22 October 2026)', head: ['Where', 'What the source says', 'What it means for Java'], rows: [
          ['Ontario, all computer studies courses (2008)', '"The computer programming language used and the order in which concepts are taught is left to the teacher\'s professional judgement."', 'Your school, not the province, chose Java for ICS3U or ICS4U'],
          ['Ontario ICS3U, Grade 11 University', 'Students work "using industry-standard programming tools and applying the software development life-cycle model"', 'In a Java school: classes, methods and an editor such as an IDE from the start'],
          ['Ontario ICS4U, Grade 12 University', '"use modular design principles to create complex and fully documented programs"; prerequisite ICS3U', 'Java\'s classes and packages are built for exactly that'],
          ['Ontario ICS4C, Grade 12 College', '"learn object-oriented programming concepts, create object-oriented software solutions, and design graphical user interfaces"', 'Object-oriented design is named outright'],
          ['Nova Scotia Virtual School, Computer Programming 12', '"CodeHS: NSVS Computer Programming 12 (Java)."', 'One of the few provincial courses that names Java'],
          ['Canadian Computing Competition (CEMC)', '"CCC participants may use C, C++, Python 2, Python 3, or Java."', 'Java is allowed, though CEMC warns a perfect score is not always possible in Python or Java'],
          ['FIRST Tech Challenge (FIRST Robotics Canada)', 'Robots "can be coded using a variety of levels of Java-based programming"', 'A team robotics route into Java']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Objects first, or structure first?',
          left: [
            'Ontario\'s document says some teachers "may decide to use an" objects-first approach, while others start with plain procedural code. In a Java class that choice shows on day one: an objects-first teacher talks about classes before loops, the other teaches loops inside one long main method.',
            'Neither is wrong, but a student who moves schools, or who learns from videos made the other way, can feel lost. We find out which approach the school uses and teach so the two fit together.'
          ],
          rightH3: 'Credits, and where they come from',
          right: [
            'Each Ontario computer studies course is worth one credit, and only a school can award it. Our Java classes sit beside the course: more practice, clearer explanations, and feedback on the student\'s own programs. We do not grant Ontario credits, and we never write graded assignments for a student.',
            'Looking ahead to university, the Waterloo computer science page lists ICS3U (its wording: Grade 11 U Introduction to Computer Science) under recommended courses, with no language attached.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://www.edu.gov.on.ca/eng/curriculum/secondary/computer10to12_2008.pdf" rel="noopener" target="_blank">Ontario Curriculum, Computer Studies, Grades 10 to 12 (2008)</a>; <a class="ag-inline-link" href="https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&amp;elements.code%5Bin%5D=ICS2O,ICS3U,ICS3C,ICS4U,ICS4C&amp;depth=0" rel="noopener" target="_blank">Ontario curriculum course data</a>; <a class="ag-inline-link" href="https://elearning.ednet.ns.ca/index.php/cm-course/computer-programming-12/" rel="noopener" target="_blank">Nova Scotia Virtual School</a>; <a class="ag-inline-link" href="https://cemc.uwaterloo.ca/contests/ccc" rel="noopener" target="_blank">CEMC, CCC</a>; <a class="ag-inline-link" href="https://www.firstroboticscanada.org/" rel="noopener" target="_blank">FIRST Robotics Canada</a>; <a class="ag-inline-link" href="https://uwaterloo.ca/future-students/programs/computer-science" rel="noopener" target="_blank">University of Waterloo</a>. Each was read on 22 October 2026; none of these bodies is connected with Modern Age Coders.' }
      ]
    },
    {
      id: 'jdk', tint: 'deep', eyebrow: 'Which Java to install',
      h2: 'Which JDK a Canadian student should use in 2026 to 2027',
      lede: 'Java ships a new version twice a year, which confuses new students. Most of those versions are short-lived; a few are long-term support releases that schools and employers settle on. The dates below are from OpenJDK and Oracle\'s own pages.',
      body: [
        { kind: 'table', caption: 'Recent and upcoming Java releases, from openjdk.org and Oracle\'s Java SE support roadmap (read 22 October 2026)', head: ['Release', 'General availability', 'Status'], rows: [
          ['JDK 21', '2023/09/19', 'Long-term support (Oracle lists 8, 11, 17, 21 and 25 as LTS)'],
          ['JDK 25', '16 September 2025', 'Long-term support; includes JEP 512, Compact Source Files and Instance Main Methods'],
          ['JDK 26', '2026/03/17', 'Feature release, not LTS'],
          ['JDK 27', '2026/09/15', 'Feature release, not LTS'],
          ['JDK 28', 'In development', 'Feature release'],
          ['Java 29', 'Planned for September 2027', 'Oracle: "the next planned LTS release"']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Our advice',
          left: [
            'Install the version your school uses, if it tells you. If it does not, choose JDK 25, the most recent long-term support release. Everything a Grade 11 or 12 course teaches works on it, and so does every program on this page.',
            'OpenJDK says the project "ships a feature release every six months", so a newer number will always exist. That does not make a long-term release out of date.'
          ],
          rightH3: 'What JEP 512 changes for beginners',
          right: [
            'JEP 512, final in JDK 25, aims to let "beginners write their first programs without needing to understand language features designed for large programs." In practice a first program can be as short as a void main() method, without the full public class and public static void main ceremony.',
            'We still teach the classic form, because school textbooks, the CCC grader and older JDKs expect it. The program on this page uses it, and was compiled and run on JDK 22.'
          ] },
        { kind: 'source', html: 'Sources: <a class="ag-inline-link" href="https://openjdk.org/projects/jdk/" rel="noopener" target="_blank">OpenJDK, JDK project</a>; <a class="ag-inline-link" href="https://openjdk.org/projects/jdk/25/" rel="noopener" target="_blank">JDK 25</a>; <a class="ag-inline-link" href="https://openjdk.org/jeps/512" rel="noopener" target="_blank">JEP 512</a>; <a class="ag-inline-link" href="https://www.oracle.com/java/technologies/java-se-support-roadmap.html" rel="noopener" target="_blank">Oracle Java SE support roadmap</a>. All read 22 October 2026.' }
      ]
    },
    {
      id: 'project', tint: 'tint', eyebrow: 'A Java project on real data',
      h2: 'Counting Vancouver\'s public art with classes and objects',
      lede: 'The City of Vancouver keeps a registry of its public art, published under a licence that permits reuse by businesses as well as individuals. Each record says what the work is, whether it is still in place, its neighbourhood and the year it went up. We use a five-column export of it to teach the idea at the heart of ICS4U-level Java: a class that turns one line of text into an object that can answer questions. We wrote the program, and each figure quoted comes from running it on the city\'s export of 22 October 2026.',
      body: [
        { kind: 'p', html: '<b>The task:</b> load every record into an Artwork object, count the artworks still in place by the decade they were installed, and find the oldest one still standing. The export\'s columns are registryid, type, status, neighbourhood and yearofinstallation.' },
        { kind: 'code', label: 'Our program &middot; PublicArt.java', lang: 'java', code: JAVA },
        { kind: 'code', label: 'Output on the city\'s data (compiled and run on JDK 22)', lang: 'text', code: JAVA_OUT, note: 'Of 751 records, 478 are in place. The decade of the 2010s alone accounts for 159 of those.' },
        { kind: 'table', mt: true, caption: 'Three design choices in the program, and the data that justifies each (our checks on the same export)', head: ['Choice', 'What the data showed', 'The Java idea behind it'], rows: [
          ['The constructor parses the line', 'Every record has exactly five fields once empty ones are kept', 'An object is responsible for building itself; main never touches raw text'],
          ['split(",", -1), not split(",")', '99 records have an empty neighbourhood', 'Without the -1 limit, Java drops trailing empty fields; with it, every field keeps its position'],
          ['A method, stillThere()', 'Status has four values: In place 478, No longer in place 268, Deaccessioned 4, In progress 1', 'The rule lives in one place; change it once and every count follows'],
          ['A TreeMap for decades', 'Thirteen decades, 1900s to 2020s', 'A TreeMap keeps its keys sorted, so the output reads in order']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'The bug hiding in the else',
          left: [
            'The program prints "not in place: 273". But only 268 records say "No longer in place". The other five are 4 marked Deaccessioned and 1 marked In progress, and a work in progress is not gone; it is not there yet.',
            'An else branch catches everything the if did not, including categories the programmer never thought about. The fix is a second method, or a switch on the status, so each value is handled on purpose. That is exercise 3 below.'
          ],
          rightH3: 'Why this is an ICS4U-shaped problem',
          right: [
            'ICS4U asks for "modular design principles" and "fully documented programs". Here the modules are visible: a class that knows how to read a record, a method that knows one rule, and a main method that only asks questions.',
            'A Grade 11 student writes the same program as one long main method first. Moving it into the Artwork class, and seeing how much shorter main becomes, is the lesson.'
          ] },
        { kind: 'source', html: 'Data: <a class="ag-inline-link" href="https://opendata.vancouver.ca/explore/dataset/public-art/" rel="noopener" target="_blank">City of Vancouver Open Data Portal</a>, Public art. Contains information licensed under the Open Government Licence, Vancouver. Its terms permit use "including for commercial purposes". The Java and the tallies are ours; the City of Vancouver does not endorse this page.' }
      ]
    },
    {
      id: 'exercises', tint: 'deep', eyebrow: 'Exercises',
      h2: 'Five ways to extend PublicArt.java',
      lede: 'Our exercises, with the answers we got on the same export, so a student can check their code. Each one practises a different part of Java.',
      body: [
        { kind: 'ol', items: [
          '<b>Count by type (HashMap).</b> Count all records by type. Answer: Sculpture leads with 187; among works still in place it is 165.',
          '<b>equals or startsWith (strings).</b> Count records whose neighbourhood equals "Downtown", then those whose neighbourhood startsWith("Downtown"). Answer: 217 and 269, because the city writes "DowntownEastside" as one word, which startsWith quietly merges in.',
          '<b>Fix the else (control flow).</b> Replace the else branch so that "No longer in place", "Deaccessioned" and "In progress" are counted separately. Answer: 268, 4 and 1.',
          '<b>Empty fields (defensive code).</b> Count records with an empty neighbourhood, overall and in place. Answer: 99 overall, 21 in place. Then try split(",") without the -1 and see what happens to a record whose last field is empty.',
          '<b>Sort with a Comparator.</b> Sort the in-place works from newest to oldest and print the newest year and how many works share it. Answer: 2026, with 7 works; 2025 has 8.'
        ] },
        { kind: 'p', mt: true, html: 'Exercise 2 is our favourite, because the program does not crash and the number looks reasonable. Only someone who looks at the actual neighbourhood values catches it. We ask students to print every distinct value of a column before they write a condition on it.' }
      ]
    },
    {
      id: 'path', tint: 'tint', eyebrow: 'Beyond the school course',
      h2: 'Where Java leads for a Canadian teenager',
      lede: 'Java is a means, not a destination. Once the school course is under control, these are the directions our teen students take it, with our honest view of each.',
      body: [
        { kind: 'table', caption: 'Java directions for teens (our guidance, with the facts each organiser publishes)', head: ['Direction', 'What it asks', 'Our view'], rows: [
          ['The CCC, 17 February 2027', 'Five problems in three hours; Java allowed', 'Fine for Junior; for Senior and the Canadian Computing Olympiad, which requires C++, many students switch'],
          ['FIRST Tech Challenge', 'Team robots coded in Java-based programming', 'Ideal for a teen who wants code to move something physical'],
          ['AP Computer Science A', 'A Java course and exam, at schools that offer AP', 'Useful where available; our AP course teaches it from Java basics'],
          ['Data structures and algorithms', 'Lists, maps, trees and how fast they are', 'Where Java shines; our Java for Teens course spends two months here'],
          ['Android apps', 'Java or Kotlin with Android tools', 'A natural next step; our app course for teens covers the mobile side']
        ] },
        { kind: 'two', mt: true,
          leftH3: 'Java and AI assistants',
          left: [
            'Java\'s verbose style makes it tempting to let an assistant write the boilerplate. Each company sets its own floor. OpenAI\'s terms let 13 to 17 year olds in only with a parent or guardian agreeing; Anthropic shuts Claude to everyone below 18; GitHub offers Copilot Student at no charge to verified students, and its accounts start at 13.',
            'Whatever the tool, our rule is the same: a student explains every line they submit, and rewrites any line they cannot. The CCC rules forbid generative AI during the contest, so practice has to happen without it too.'
          ],
          rightH3: 'Design before code',
          right: [
            'Our promise holds in Java as in every language we teach: a student learns to reason out a solution, rather than reproduce one someone else, or some model, produced. In Java that means designing the class on paper first: what it knows, what it can answer, what can go wrong.',
            'A student who can sketch the Artwork class before writing it has learned object-oriented design. One who can only type it from an example has not, yet.'
          ] }
      ]
    },
    {
      id: 'time', tint: 'deep', eyebrow: 'Across six time zones',
      h2: 'Booking Java classes from any province',
      lede: 'Teens join from Victoria to St. John\'s, and the school year now crosses two clock changes in the East and none in the West. We book every class in the student\'s own zone and recheck it at each change.',
      body: [
        { kind: 'table', caption: 'Offsets from UTC by zone, 2026 to 2027 (IANA tz database 2026e)', head: ['Students in', 'Behind UTC, winter 2026 to 2027', 'Behind UTC, summer 2027'], rows: [
          ['Vancouver, Victoria, Whitehorse', '7 hours', '7 hours'],
          ['Calgary, Edmonton, Regina, Saskatoon', '6 hours', '6 hours'],
          ['Winnipeg', '5 hours', '5 hours'],
          ['Toronto, Ottawa, Montreal', '5 hours', '4 hours'],
          ['Halifax, Moncton, Charlottetown', '4 hours', '3 hours'],
          ['St. John\'s', '3 and a half hours', '2 and a half hours']
        ] },
        { kind: 'p', mt: true, html: 'During ICS3U or ICS4U exam weeks, families often move a class or add one. A one-to-one student can shift times with a message, and a batch student can ask us about a temporary change.' }
      ]
    }
  ],

  ladder: {
    eyebrow: 'Four steps in Java',
    h2: 'Where is your teen in Java?',
    lede: 'Our steps for placing a teenager in the first class.',
    table: { caption: 'Four Java steps (ours)', head: ['Step', 'What the student can do'], rows: [
      ['1. Compiles', 'Writes a small program in main, compiles it and reads the compiler errors'],
      ['2. Structures', 'Uses methods, loops and arrays or ArrayLists without help'],
      ['3. Models', 'Designs a class with fields, a constructor and methods, like Artwork'],
      ['4. Organises', 'Splits a program into several classes, uses interfaces or inheritance, and documents it']
    ] },
    left: { h3: 'For parents', ps: [
      'ICS3U usually covers steps 1 and 2; ICS4U expects step 3 and reaches into step 4. A student who struggles in ICS4U is often missing step 2, not step 3.',
      'Steps are about what the student can do alone, from a blank file.'
    ] },
    right: { h3: 'For teens', ps: [
      'Read the first compiler error only; fix it; compile again. Later errors are often caused by the first.',
      'Before writing a class, write one sentence: this class knows ... and can answer ....'
    ] }
  },

  catalogue: {
    eyebrow: 'More for teens',
    h2: 'Nine more courses for Canadian teens',
    lede: 'Each is taught live with one regular teacher, in a batch or one to one, for students anywhere in Canada.',
    bands: [
      { num: 'I', h3: 'Other languages', sub: 'Ages 13 to 18', courses: [
        { code: 'JTC / LANG / 01', slug: 'python-complete-masterclass-teens', title: 'Python for teens', blurb: 'For schools that teach Python instead.' },
        { code: 'JTC / LANG / 02', slug: 'cpp-programming-masterclass-for-teens', title: 'C++ for teens', blurb: 'The language the CCO requires.' },
        { code: 'JTC / LANG / 03', slug: 'javascript-course-for-teens-beginners-interactive-web', title: 'JavaScript for teens', blurb: 'Not Java: the language of the web.' }
      ] },
      { num: 'II', h3: 'Problem solving and contests', sub: 'Ages 13 to 18', courses: [
        { code: 'JTC / SOLVE / 01', slug: 'problem-solving-dsa-masterclass-teens', title: 'Problem solving for teens', blurb: 'Logic, data structures, algorithms.' },
        { code: 'JTC / SOLVE / 02', slug: 'ccc-junior-and-senior-preparation-course', title: 'CCC preparation', blurb: 'For the 17 February 2027 contest.' },
        { code: 'JTC / SOLVE / 03', slug: 'competitive-programming-for-teens-course', title: 'Competitive programming', blurb: 'Contest technique for confident coders.' }
      ] },
      { num: 'III', h3: 'Build with it', sub: 'Ages 13 to 18', courses: [
        { code: 'JTC / BUILD / 01', slug: 'complete-app-development-masterclass-for-teens', title: 'App development for teens', blurb: 'Mobile apps, front to back.' },
        { code: 'JTC / BUILD / 02', slug: 'backend-coding-masterclass-for-teens', title: 'Backend development for teens', blurb: 'APIs and databases.' },
        { code: 'JTC / BUILD / 03', slug: 'git-github-version-control-course-for-teens', title: 'Git and GitHub for teens', blurb: 'Version control from zero.' }
      ] }
    ]
  },

  how: {
    eyebrow: 'How classes run',
    h2: 'Live Java classes beside the school course',
    lede: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays.',
    slots: [
      { time: 'Weekdays', l: 'Evenings, quoted in your local clock.' },
      { time: 'Weekends', l: 'Mornings or afternoons, away from homework nights.' },
      { time: '1-on-1', l: 'Paced to your school unit and test dates.' }
    ],
    cells: [
      { h3: 'Your school\'s Java', p: 'We match the JDK and editor your school uses.' },
      { h3: 'Objects or structure', p: 'We teach in step with your teacher\'s approach.' },
      { h3: 'Compiler first', p: 'Errors are read and fixed by the student.' },
      { h3: 'Real data', p: 'Canadian open data, licensed for reuse.' },
      { h3: 'Never your assignment', p: 'We explain and practise; graded work stays yours.' },
      { h3: 'Group or solo', p: 'A class of fifteen to twenty, or a private teacher.' }
    ]
  },

  projectsH2: 'What our students build',
  projectsLede: 'Java and other courses lead to finished projects like these. See the <a class="ag-inline-link" href="/student-labs">student labs</a> for more.',
  reviewsLede: 'Google reviews from our families and students, printed as written.',

  fees: {
    h2: 'Fees',
    lede: 'A monthly fee buys eight live classes. Families can stop at the end of any month, which suits a student who wants help only through one semester.',
    free: ['A free first class', 'A short Java program to read together', 'No card asked for'],
    group: ['A class of fifteen to twenty', 'One regular teacher', 'A steady weekly time', 'Paid by the month'],
    one: ['One teacher, one student', 'Paced to your school course', 'Feedback on your own programs']
  },

  faq: {
    eyebrow: 'Questions about Java',
    h2: 'Java for teens in Canada: common questions',
    items: [
      { q: 'Is ICS3U taught in Java or Python?', a: 'It depends on the school. Ontario\'s 2008 curriculum says the programming language used is left to the teacher\'s professional judgement, so some schools teach ICS3U in Java and others in Python. We teach in whichever language the school uses.' },
      { q: 'Do your Java classes count for an Ontario credit?', a: 'They do not. A credit for ICS3U or ICS4U can only come from the student\'s school. We do not grant Ontario credits, and our classes are support beside the course, not a replacement for it.' },
      { q: 'Which version of Java should a student install?', a: 'The one the school uses, if it says. Otherwise JDK 25, which reached general availability on 16 September 2025 and is a long-term support release. Oracle lists the next planned long-term release as Java 29 in September 2027.' },
      { q: 'Can my teen learn Java with no coding experience?', a: 'Yes. Java for Teens assumes nothing: a 13 to 18 year old starts with a first compiled program and, over 40 to 48 weeks of twice-weekly classes, reaches data structures and a capstone.' },
      { q: 'Can Java be used in the Canadian Computing Competition?', a: 'It can; Java is one of five languages CEMC accepts for the CCC. CEMC adds a caution that some problems may not allow full marks in Java or Python, and the Olympiad after the CCC accepts only C++.' },
      { q: 'Does Nova Scotia teach Java in high school?', a: 'The Nova Scotia Virtual School lists its Computer Programming 12 course as CodeHS: NSVS Computer Programming 12 (Java). Other provinces mostly leave the language to schools.' },
      { q: 'Will you help with my teen\'s ICS4U final project?', a: 'We help the student plan, design and debug their own project, and explain the Java behind it. We do not write graded work; the project has to be the student\'s own.' },
      { q: 'Can teens use AI tools to write Java?', a: 'Only inside each company\'s age rules. ChatGPT needs a parent or guardian to agree for anyone under 18, Claude is closed to under-18s, and Copilot Student is free once a student aged 13 or over is verified. Whatever the tool, our students explain every line they hand in.' },
      { q: 'When do Java classes run for Canadian students?', a: 'Weekdays or weekends, flexible: choose your batch, or for a very personalised plan choose 1-on-1 at your convenience, weekend mornings or weekdays. We quote every time in the zone your family lives in.' },
      { q: 'What will my teen build in Java?', a: 'Programs with real structure, such as our PublicArt.java, which turns each record of Vancouver\'s public art registry into an object and counts what is still in place. Later, larger projects and data structures.' }
    ]
  },

  elsewhere: {
    eyebrow: 'Elsewhere on this site',
    h2: 'Related pages',
    lede: 'More for Canadian teens writing Java.',
    items: [
      { href: '/coding-classes-in-canada', label: 'Coding classes in Canada', p: 'All our pages for Canadian families.' },
      { href: '/ics3u-computer-science-help', label: 'ICS3U computer science help', p: 'The Grade 11 course in detail.' },
      { href: '/java-classes-for-teens', label: 'Java classes for teens', p: 'Our Java teaching for teenagers.' },
      { href: '/java-oops-concepts-course', label: 'Object-oriented Java', p: 'Classes, objects and inheritance.' },
      { href: '/java-cannot-find-symbol-error', label: 'Java cannot find symbol', p: 'The error every student meets.' },
      { href: '/eclipse-java-help-for-students', label: 'Eclipse help for students', p: 'Setting up a school IDE.' },
      { href: '/java-projects-for-students', label: 'Java projects for students', p: 'Ideas once the basics are in.' },
      { href: '/ccc-junior-guide', label: 'CCC Junior guide', p: 'The 2027 contest, in any allowed language.' },
      { href: '/how-to-debug-code', label: 'How to debug code', p: 'Finding what a compiler cannot.' }
    ]
  },

  start: {
    h2: 'Book a free first class',
    lede: 'We open with a short Java program for the student to read and predict, then ask for one small change to it. The teacher learns which step the student is on and how their school teaches Java.',
    readFirst: 'Curious first? <a class="ag-inline-link" href="/how-we-teach">How we teach</a> walks through a live class, and our <a class="ag-inline-link" href="/courses">courses</a> list each syllabus in full.',
    note: 'All classes are live over video, taught by teachers based in India, so students anywhere in Canada join from home. Send a WhatsApp message for the quickest answer.',
    formNote: 'Free to try. We take no card details.'
  },

  footer: {
    cols: [
      { h4: 'Java', links: [
        { href: '/java-classes-for-teens', label: 'Java for teens' },
        { href: '/java-oops-concepts-course', label: 'Object-oriented Java' },
        { href: '/java-cannot-find-symbol-error', label: 'Cannot find symbol' },
        { href: '/ics3u-computer-science-help', label: 'ICS3U help' }
      ] },
      { h4: 'Canada', links: [
        { href: '/coding-classes-in-canada', label: 'Coding classes in Canada' },
        { href: '/coding-classes-in-ontario', label: 'Coding classes in Ontario' },
        { href: '/how-we-teach', label: 'How we teach' },
        { href: '/student-labs', label: 'Student projects' }
      ] }
    ],
    bottomRight: 'Design the class on paper first'
  },

  personalityCss: `
.ag-root.ag-jtc .ag-hero h1 { letter-spacing: -0.012em; }
.ag-root.ag-jtc .ag-capsule { border-left-width: 3px; border-radius: 6px; }
.ag-root.ag-jtc .ag-section-head h2 { max-width: 33ch; }
.ag-root.ag-jtc .ag-table caption { text-align: left; font-weight: 600; }
.ag-root.ag-jtc .ag-band-head h3 { letter-spacing: -0.005em; }
.ag-root.ag-jtc .ag-slots { gap: 1.25rem; }
`,

  dossier: {
    curriculumAuthority: 'Ontario Curriculum, Computer Studies Grades 10 to 12 (2008) and the Ontario DCP API course data for ICS3U, ICS4U and ICS4C; Nova Scotia Virtual School Computer Programming 12; CEMC CCC page; FIRST Robotics Canada; University of Waterloo Computer Science; openjdk.org JDK project, JDK 25 and JEP 512 pages; Oracle Java SE support roadmap; OpenAI, Anthropic and GitHub terms; all read 22 October 2026. City of Vancouver Public art open data under the Open Government Licence, Vancouver.',
    localProject: 'PublicArt.java: an original Java program that turns each record of the City of Vancouver public art registry (751 records, five-column export) into an Artwork object, counts the 478 works in place by decade and finds the oldest, compiled and run on JDK 22; with the else-branch bug (273 against 268) explained and five extension exercises with our answers. Lesson family: modelling rows as objects.',
    requiredMentions: ['PublicArt.java', 'records: 751, not in place: 273', 'DowntownEastside', 'oldest in place: #284', 'A TreeMap for decades', 'Compact Source Files and Instance Main Methods', 'Java 29 in September 2027', 'split(",", -1)', 'Design the class on paper first'],
    sources: [
      { claim: 'Ontario computer studies: language left to the teacher; objects-first approach; credit value.', url: 'https://www.edu.gov.on.ca/eng/curriculum/secondary/computer10to12_2008.pdf' },
      { claim: 'ICS3U, ICS4U and ICS4C descriptions and the ICS4U prerequisite.', url: 'https://ws.api.dcp.edu.gov.on.ca/content/api/items?system.type=l2___course&elements.code%5Bin%5D=ICS2O,ICS3U,ICS3C,ICS4U,ICS4C&depth=0' },
      { claim: 'Nova Scotia Computer Programming 12 in Java.', url: 'https://elearning.ednet.ns.ca/index.php/cm-course/computer-programming-12/' },
      { claim: 'JDK release dates and six-month cadence.', url: 'https://openjdk.org/projects/jdk/' },
      { claim: 'JDK 25 general availability and JEP 512.', url: 'https://openjdk.org/projects/jdk/25/' },
      { claim: 'LTS releases and Java 29 as the next planned LTS.', url: 'https://www.oracle.com/java/technologies/java-se-support-roadmap.html' },
      { claim: 'CCC languages and caveat.', url: 'https://cemc.uwaterloo.ca/contests/ccc' },
      { claim: 'Vancouver public art open data and licence.', url: 'https://opendata.vancouver.ca/explore/dataset/public-art/' }
    ],
    rejectedClaims: [
      'That Ontario requires Java for ICS3U or ICS4U: refused; the curriculum leaves the language to the teacher.',
      'That the AP Computer Science A exam details on College Board\'s page apply: its course page rendered without content, so no AP facts are quoted beyond our own course syllabus.',
      'That JEP 512 code runs on school JDKs: not claimed; the page notes it is final only from JDK 25 and keeps the classic form.',
      'Any credit, mark or admission outcome: refused; we grant no credits.',
      'Recommending Claude to anyone under 18: refused.'
    ]
  }
};
