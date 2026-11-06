// ICSE Class 10 Computer Applications (Java): sorting and searching programs.
// Intent: "bubble sort selection sort icse class 10", "binary search program
// icse", "linear search java icse", "array programs icse class 10", "sorting
// and searching icse". Distinct from the programs hub (one fixed-array bubble
// sort and one fixed-array linear search) and the two blog lists (plain sorts
// and searches on fixed arrays): here every sort prints its own passes, each
// algorithm has a pass-by-pass trace table, and the four Section B array
// shapes (sorting names, parallel arrays, binary search with an order check,
// highest, lowest and average) are written with Scanner input and new data.
// Inside the 2027 syllabus: single dimensional arrays, no Arrays.sort, no
// recursion. Every program on this page was compiled with javac 21 (OpenJDK
// 21.0.12) and run with java 21 on 2026-11-06 from scratch files outside the
// repo, fed the sample input shown; each output and trace row is taken from
// that run.
'use strict';

module.exports = {
  slug: 'icse-class-10-sorting-and-searching-programs',
  code: 'ic05',
  board: 'icse',
  themeColor: '#7A4A1E',
  title: 'Bubble Sort and Selection Sort ICSE Class 10, with Traces',
  description: 'Bubble sort and selection sort for ICSE Class 10 with pass-by-pass trace tables, linear and binary search programs, and four Section B array programs, run in Java.',
  ogTitle: 'Bubble Sort, Selection Sort and Binary Search for ICSE Class 10',
  ogDesc: 'Pass-by-pass trace tables for bubble sort, selection sort and binary search, a linear search on names, and four board-style Section B array programs for ICSE Class 10 Computer Applications, each with a variable description table and a sample run from Java 21.',
  twDesc: 'Bubble sort, selection sort, linear and binary search for ICSE Class 10, traced pass by pass and run in Java.',
  headline: 'Bubble Sort and Selection Sort for ICSE Class 10, Traced Pass by Pass, with Linear and Binary Search and Four Array Programs',
  courseName: 'ICSE Class 10 Computer Applications (Java) Arrays, Sorting and Searching Practice, Live Online',
  courseDesc: 'Live online practice of ICSE Class 10 Computer Applications single dimensional arrays for the 2027 examination: bubble sort and selection sort in both orders, linear search and binary search, sorting Strings with compareTo, parallel arrays and array statistics, each traced pass by pass on paper and then run in BlueJ, in a Tuesday and Wednesday evening mini batch in India or one to one at a time the family chooses.',
  brandTag: 'ICSE CA &middot; Sort and search',
  navLinks: [['#bubble', 'Bubble sort'], ['#selection', 'Selection sort'], ['#search', 'Searching'], ['#arrays', 'Array programs'], ['#fees', 'Batch or 1-on-1']],
  crumbs: [['/', 'Home'], ['/icse-class-10-java-classes-online', 'ICSE Class 10 Java classes'], [null, 'Sorting and searching programs']],
  eyebrow: 'ICSE Class 10 &middot; Computer Applications (Java) &middot; Sorting and searching 2027',
  h1: 'Bubble sort and selection sort for ICSE Class 10, traced pass by pass.',
  lede: 'Bubble sort and selection sort are the two sorting methods ICSE Class 10 expects, and linear and binary search are the two searches. Examiners ask for the program, and just as often for the state of the array after a given pass. This page shows each algorithm as a full Scanner program that prints its own passes, with a trace table you can check your dry run against, then four Section B array programs. Every run is from Java 21. In our live mini batch the traces are written by hand before BlueJ confirms them.',
  heroNote: 'Live online &middot; pass-by-pass traces &middot; bubble, selection, linear, binary &middot; four Section B array programs &middot; first class free',
  waText: 'Hello Modern Age Coders. I want help with ICSE Class 10 sorting and searching programs.',
  timetable: {
    label: 'When arrays are practised',
    title: 'Array practice',
    right: 'ICSE CA',
    rows: [
      ['Tuesday, passes traced on paper', '5:30', 'PM IST'],
      ['Wednesday, array program run in BlueJ', '8:00', 'PM IST'],
      ['Algorithms traced', '4', 'two sorts, two searches'],
      ['Section B array shapes', '4', 'in rotation']
    ],
    zones: '<b>In India:</b> the mini batch at these two times. <b>Outside India:</b> the same traces and programs one to one, at an evening hour for ICSE students in the Gulf, South East Asia and elsewhere.',
    stamps: ['Section B &middot; 15 marks each', 'Traced, then run']
  },
  picksH2: 'Courses where sorting and searching are taught',
  picksLede: 'The ICSE Java course where the mini batch traces these passes, the Class 11 and 12 Computer Science course where ISC adds insertion sort and two-dimensional work, and the data structures course for the student who wants to know why binary search is so much faster.',
  picks: [
    { slug: 'icse-computer-applications-java-bluej-course', code: 'The batch / ICSE CA', h3: 'ICSE Computer Applications, Java with BlueJ', p: 'Class 9 and 10 Computer Applications in a mini batch, with sorts and searches traced by hand before each one is run in BlueJ.' },
    { slug: 'cbse-icse-computer-science-class-11-12-python-java-complete-course', code: 'Next step / ISC', h3: 'Computer Science Class 11 and 12', p: 'For students moving to ISC Computer Science, where more sorting methods and larger array problems follow.' },
    { slug: 'data-structures-algorithms-masterclass-college', code: 'Beyond the syllabus / DSA', h3: 'Data Structures and Algorithms', p: 'For the student who wants to measure algorithms, compare sorts properly and meet faster ones.' }
  ],
  capsule: 'For ICSE Class 10, bubble sort compares neighbouring elements and swaps them when they are out of order, so after each pass the largest remaining value settles at the end. Selection sort finds the smallest (or largest) remaining value and swaps it into place, making at most one swap per pass. Linear search checks every element in turn and works on any array; binary search halves a sorted array each step using low, high and mid. Questions ask for the program and for the array after a given pass. Modern Age Coders teaches these live in a Tuesday and Wednesday mini batch in India, or personalised one to one.',
  sections: [
`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="bubble">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. How does bubble sort work, pass by pass?</p>
      <h2>Bubble sort ICSE Class 10: the program and its trace</h2>
      <p class="bx-lede">Bubble sort walks along the array comparing a[j] with a[j + 1] and swaps them if the left one is bigger. One walk is a pass. After pass 1 the largest value is at the end, after pass 2 the second largest is next to it, and an array of n elements needs at most n minus 1 passes.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>BubbleTrace.java</b><span>ascending, prints each pass</span></figcaption>
  <pre>import java.util.Scanner;
class BubbleTrace {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("How many numbers? ");
        int n = sc.nextInt();
        int a[] = new int[n];
        System.out.println("Enter " + n + " numbers:");
        for (int i = 0; i &lt; n; i++)
            a[i] = sc.nextInt();
        for (int p = 0; p &lt; n - 1; p++) {            <i>// pass number p + 1</i>
            int swaps = 0;
            for (int j = 0; j &lt; n - 1 - p; j++) {     <i>// compare neighbours</i>
                if (a[j] &gt; a[j + 1]) {
                    int t = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = t;
                    swaps++;
                }
            }
            System.out.print("After pass " + (p + 1) + ":");
            for (int i = 0; i &lt; n; i++)
                System.out.print(" " + a[i]);
            System.out.println("   swaps = " + swaps);
        }
    }
}</pre>
  <p class="bx-code-note">The inner limit n - 1 - p shrinks each pass, because the values already settled at the end need no more comparing.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>n</td><td>int</td><td>number of elements</td></tr>
              <tr><td>a</td><td>int[]</td><td>the numbers being sorted</td></tr>
              <tr><td>p</td><td>int</td><td>pass counter, from 0</td></tr>
              <tr><td>j</td><td>int</td><td>position being compared</td></tr>
              <tr><td>t</td><td>int</td><td>temporary store for the swap</td></tr>
              <tr><td>swaps</td><td>int</td><td>swaps made in this pass</td></tr>
              <tr><td>i</td><td>int</td><td>loop counter for input and printing</td></tr>
            </tbody>
          </table>
        </div>
<figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Sample run</b><span>Java 21</span></figcaption>
  <pre>How many numbers? <b>5</b>
Enter 5 numbers:
<b>47 12 38 5 26</b>
After pass 1: 12 38 5 26 47   swaps = 4
After pass 2: 12 5 26 38 47   swaps = 2
After pass 3: 5 12 26 38 47   swaps = 1
After pass 4: 5 12 26 38 47   swaps = 0</pre>
</figure>
      </div>
    </div>
    <h3 class="bx-mt-40">Inside pass 1: every comparison</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">j</th><th scope="col">Compare</th><th scope="col">Swap?</th><th scope="col">Array after the step</th></tr></thead>
        <tbody>
          <tr><td class="bx-num">0</td><td class="bx-num">47 &gt; 12</td><td>yes</td><td class="bx-num">12 47 38 5 26</td></tr>
          <tr><td class="bx-num">1</td><td class="bx-num">47 &gt; 38</td><td>yes</td><td class="bx-num">12 38 47 5 26</td></tr>
          <tr><td class="bx-num">2</td><td class="bx-num">47 &gt; 5</td><td>yes</td><td class="bx-num">12 38 5 47 26</td></tr>
          <tr><td class="bx-num">3</td><td class="bx-num">47 &gt; 26</td><td>yes</td><td class="bx-num">12 38 5 26 47</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>Count the comparisons</h3><p>Passes make 4, 3, 2 and 1 comparisons: 10 in all for five elements, whatever the data. That total, n(n - 1) / 2, is a favourite two-mark question.</p></div>
      <div class="bx-card"><h3>Descending order</h3><p>Change one sign: swap when <code>a[j] &lt; a[j + 1]</code>. Now the smallest value sinks to the end each pass.</p></div>
      <div class="bx-card"><h3>Stopping early</h3><p>A pass with no swaps means the array is sorted. Some answers add a boolean flag and break out; it is an improvement, not a requirement.</p></div>
    </div>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="selection">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. How is selection sort different?</p>
      <h2>Selection sort ICSE Class 10, in descending order, traced</h2>
      <p class="bx-lede">Selection sort looks through the unsorted part for the largest (or smallest) value, remembers only its position, and makes a single swap at the end of the pass. Bubble sort may swap many times in a pass; selection sort swaps at most once.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>SelectDesc.java</b><span>descending, prints each pass</span></figcaption>
  <pre>import java.util.Scanner;
class SelectDesc {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int a[] = new int[6];
        System.out.println("Enter 6 scores:");
        for (int i = 0; i &lt; 6; i++)
            a[i] = sc.nextInt();
        for (int i = 0; i &lt; 5; i++) {
            int big = i;                           <i>// position of the largest so far</i>
            for (int j = i + 1; j &lt; 6; j++)
                if (a[j] &gt; a[big])
                    big = j;
            int t = a[i];                          <i>// one swap per pass</i>
            a[i] = a[big];
            a[big] = t;
            System.out.print("Pass " + (i + 1) + " (largest at index " + big + "):");
            for (int k = 0; k &lt; 6; k++)
                System.out.print(" " + a[k]);
            System.out.println();
        }
    }
}</pre>
  <p class="bx-code-note">For ascending order, look for the smallest instead: change &gt; to &lt; in the comparison and rename big to small.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>a</td><td>int[]</td><td>six scores</td></tr>
              <tr><td>i</td><td>int</td><td>the place being filled</td></tr>
              <tr><td>j</td><td>int</td><td>scans the unsorted part</td></tr>
              <tr><td>big</td><td>int</td><td>index of the largest found</td></tr>
              <tr><td>t</td><td>int</td><td>temporary store for the swap</td></tr>
              <tr><td>k</td><td>int</td><td>loop counter for printing</td></tr>
            </tbody>
          </table>
        </div>
<figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Sample run</b><span>Java 21</span></figcaption>
  <pre>Enter 6 scores:
<b>61 88 45 92 70 88</b>
Pass 1 (largest at index 3): 92 88 45 61 70 88
Pass 2 (largest at index 1): 92 88 45 61 70 88
Pass 3 (largest at index 5): 92 88 88 61 70 45
Pass 4 (largest at index 4): 92 88 88 70 61 45
Pass 5 (largest at index 4): 92 88 88 70 61 45</pre>
</figure>
      </div>
    </div>
    <h3 class="bx-mt-40">The trace, one row per pass</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Pass</th><th scope="col">Searched</th><th scope="col">Largest</th><th scope="col">Swap</th><th scope="col">Array after</th></tr></thead>
        <tbody>
          <tr><td class="bx-num">1</td><td>index 0 to 5</td><td class="bx-num">92 at 3</td><td>a[0] with a[3]</td><td class="bx-num">92 88 45 61 70 88</td></tr>
          <tr><td class="bx-num">2</td><td>index 1 to 5</td><td class="bx-num">88 at 1</td><td>with itself</td><td class="bx-num">92 88 45 61 70 88</td></tr>
          <tr><td class="bx-num">3</td><td>index 2 to 5</td><td class="bx-num">88 at 5</td><td>a[2] with a[5]</td><td class="bx-num">92 88 88 61 70 45</td></tr>
          <tr><td class="bx-num">4</td><td>index 3 to 5</td><td class="bx-num">70 at 4</td><td>a[3] with a[4]</td><td class="bx-num">92 88 88 70 61 45</td></tr>
          <tr><td class="bx-num">5</td><td>index 4 to 5</td><td class="bx-num">61 at 4</td><td>with itself</td><td class="bx-num">92 88 88 70 61 45</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">In pass 2 the 88 at index 5 is not chosen, because <code>a[j] &gt; a[big]</code> is strict: an equal value does not replace the one already found. Examiners like duplicate values for exactly this reason.</p>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Point</th><th scope="col">Bubble sort</th><th scope="col">Selection sort</th></tr></thead>
        <tbody>
          <tr><td>What is compared</td><td>Neighbours, a[j] and a[j + 1]</td><td>Each element with the best found so far</td></tr>
          <tr><td>Swaps in one pass</td><td>Any number</td><td>At most one</td></tr>
          <tr><td>After pass 1 (ascending)</td><td>Largest value at the end</td><td>Smallest value at the start</td></tr>
          <tr><td>Comparisons for n elements</td><td>n(n - 1) / 2</td><td>n(n - 1) / 2</td></tr>
          <tr><td>Can stop early</td><td>Yes, with a no-swap flag</td><td>No</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" style="font-variant-ligatures:none" id="search">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. Linear search or binary search?</p>
      <h2>Linear search Java ICSE and the binary search program, with traces</h2>
      <p class="bx-lede">Linear search checks the elements one by one and works on any array, sorted or not. Binary search needs the array sorted; it checks the middle element and throws away half of what is left at every step, so ten elements need at most four checks.</p>
    </div>
    <h3>Linear search on names, with a parallel array</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>LinearNames.java</b><span>search Strings, report a partner value</span></figcaption>
  <pre>import java.util.Scanner;
class LinearNames {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        String city[] = new String[5];
        int pin[] = new int[5];
        System.out.println("Enter 5 cities, each followed by its PIN code:");
        for (int i = 0; i &lt; 5; i++) {
            city[i] = sc.next();
            pin[i] = sc.nextInt();
        }
        System.out.print("City to search: ");
        String key = sc.next();
        int pos = -1;
        for (int i = 0; i &lt; 5; i++) {
            if (city[i].equalsIgnoreCase(key)) {
                pos = i;
                break;                             <i>// stop at the first match</i>
            }
        }
        if (pos == -1)
            System.out.println(key + " is not in the list");
        else
            System.out.println(city[pos] + " found at position " + (pos + 1) + ", PIN " + pin[pos]);
    }
}</pre>
  <p class="bx-code-note">pos starts at -1, a value no real index can have, so after the loop it tells you plainly whether the search succeeded.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>city</td><td>String[]</td><td>five city names</td></tr>
              <tr><td>pin</td><td>int[]</td><td>PIN code of each city, same index</td></tr>
              <tr><td>key</td><td>String</td><td>the city searched for</td></tr>
              <tr><td>pos</td><td>int</td><td>index found, or -1</td></tr>
              <tr><td>i</td><td>int</td><td>loop counter</td></tr>
            </tbody>
          </table>
        </div>
<figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Sample runs</b><span>Java 21</span></figcaption>
  <pre>Enter 5 cities, each followed by its PIN code:
<b>Pune 411001 Kochi 682001 Agra 282001 Shimla 171001 Patna 800001</b>
City to search: <b>shimla</b>
Shimla found at position 4, PIN 171001

Enter 5 cities, each followed by its PIN code:
<b>Pune 411001 Kochi 682001 Agra 282001 Shimla 171001 Patna 800001</b>
City to search: <b>Goa</b>
Goa is not in the list</pre>
</figure>
      </div>
    </div>
    <h3 class="bx-mt-40">Binary search, printing low, high and mid</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>BinaryTrace.java</b><span>sorted array, halves each step</span></figcaption>
  <pre>import java.util.Scanner;
class BinaryTrace {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int a[] = {6, 14, 19, 27, 33, 41, 58, 62, 75, 90};   <i>// already in ascending order</i>
        System.out.print("Enter the number to search: ");
        int key = sc.nextInt();
        int low = 0, high = a.length - 1, pos = -1;
        while (low &lt;= high) {
            int mid = (low + high) / 2;
            System.out.println("low=" + low + " high=" + high + " mid=" + mid + " a[mid]=" + a[mid]);
            if (a[mid] == key) {
                pos = mid;
                break;
            } else if (key &gt; a[mid])
                low = mid + 1;                     <i>// throw away the left half</i>
            else
                high = mid - 1;                    <i>// throw away the right half</i>
        }
        if (pos == -1)
            System.out.println(key + " not found");
        else
            System.out.println(key + " found at index " + pos);
    }
}</pre>
  <p class="bx-code-note">mid = (low + high) / 2 is integer division, so it rounds down: low 2 and high 3 give mid 2.</p>
</figure>
      <div>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">Variable</th><th scope="col">Type</th><th scope="col">Purpose</th></tr></thead>
            <tbody>
              <tr><td>a</td><td>int[]</td><td>ten values in ascending order</td></tr>
              <tr><td>key</td><td>int</td><td>value searched for</td></tr>
              <tr><td>low, high</td><td>int</td><td>ends of the part still in play</td></tr>
              <tr><td>mid</td><td>int</td><td>middle index checked</td></tr>
              <tr><td>pos</td><td>int</td><td>index found, or -1</td></tr>
            </tbody>
          </table>
        </div>
<figure class="bx-code bx-mt-40">
  <figcaption class="bx-code-head"><b>Sample runs</b><span>Java 21</span></figcaption>
  <pre>Enter the number to search: <b>62</b>
low=0 high=9 mid=4 a[mid]=33
low=5 high=9 mid=7 a[mid]=62
62 found at index 7

Enter the number to search: <b>20</b>
low=0 high=9 mid=4 a[mid]=33
low=0 high=3 mid=1 a[mid]=14
low=2 high=3 mid=2 a[mid]=19
low=3 high=3 mid=3 a[mid]=27
20 not found</pre>
</figure>
      </div>
    </div>
    <h3 class="bx-mt-40">The trace for 20, a value that is not there</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Step</th><th scope="col">low</th><th scope="col">high</th><th scope="col">mid</th><th scope="col">a[mid]</th><th scope="col">Decision</th></tr></thead>
        <tbody>
          <tr><td class="bx-num">1</td><td class="bx-num">0</td><td class="bx-num">9</td><td class="bx-num">4</td><td class="bx-num">33</td><td>20 &lt; 33, so high = 3</td></tr>
          <tr><td class="bx-num">2</td><td class="bx-num">0</td><td class="bx-num">3</td><td class="bx-num">1</td><td class="bx-num">14</td><td>20 &gt; 14, so low = 2</td></tr>
          <tr><td class="bx-num">3</td><td class="bx-num">2</td><td class="bx-num">3</td><td class="bx-num">2</td><td class="bx-num">19</td><td>20 &gt; 19, so low = 3</td></tr>
          <tr><td class="bx-num">4</td><td class="bx-num">3</td><td class="bx-num">3</td><td class="bx-num">3</td><td class="bx-num">27</td><td>20 &lt; 27, so high = 2</td></tr>
          <tr><td>end</td><td class="bx-num">3</td><td class="bx-num">2</td><td colspan="3">low &gt; high, the loop stops: not found</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-table-wrap bx-mt-40">
      <table class="bx-table">
        <thead><tr><th scope="col">Point</th><th scope="col">Linear search</th><th scope="col">Binary search</th></tr></thead>
        <tbody>
          <tr><td>Array must be sorted</td><td>No</td><td>Yes</td></tr>
          <tr><td>Checks for 10 elements, worst case</td><td class="bx-num">10</td><td class="bx-num">4</td></tr>
          <tr><td>Works on Strings</td><td>Yes, with equals</td><td>Yes, with compareTo, if sorted</td></tr>
          <tr><td>Finds every occurrence</td><td>Yes, if you do not break</td><td>No, it finds one</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>`,

`<section class="bx-section" style="font-variant-ligatures:none" id="arrays">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. What array programs does Section B set?</p>
      <h2>Array programs ICSE Class 10: the four standard Section B shapes</h2>
      <p class="bx-lede">Most Section B array questions are one of four shapes: sort words alphabetically, sort one array and carry a partner array with it, search a sorted list, or work out the highest, lowest and average. Each shape below is a full program with Scanner input and a real run.</p>
    </div>
    <h3>Shape 1: sort names in alphabetical order</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>SortNames.java</b><span>bubble sort on Strings</span></figcaption>
  <pre>import java.util.Scanner;
class SortNames {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        String nm[] = new String[6];
        System.out.println("Enter 6 names:");
        for (int i = 0; i &lt; 6; i++)
            nm[i] = sc.next();
        for (int i = 0; i &lt; 5; i++)
            for (int j = 0; j &lt; 5 - i; j++)
                if (nm[j].compareToIgnoreCase(nm[j + 1]) &gt; 0) {
                    String t = nm[j];
                    nm[j] = nm[j + 1];
                    nm[j + 1] = t;
                }
        System.out.println("In alphabetical order:");
        for (int i = 0; i &lt; 6; i++)
            System.out.println(nm[i]);
    }
}</pre>
  <p class="bx-code-note">compareToIgnoreCase returns a positive number when the left word comes later in the alphabet, so &gt; 0 plays the part of &gt; in a number sort.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Sample run</b><span>Java 21</span></figcaption>
  <pre>Enter 6 names:
<b>Zoya aarav Meera Kabir neel Ishaan</b>
In alphabetical order:
aarav
Ishaan
Kabir
Meera
neel
Zoya</pre>
  <p class="bx-code-note">Variables: nm String[] names; i, j int pass and position; t String temporary. With plain compareTo the small-letter names would sort after Zoya, because small letters have higher codes.</p>
</figure>
    </div>
    <h3 class="bx-mt-40">Shape 2: a merit list from two parallel arrays</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>MeritList.java</b><span>sort marks, move names too</span></figcaption>
  <pre>import java.util.Scanner;
class MeritList {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        String name[] = new String[5];
        int marks[] = new int[5];
        System.out.println("Enter name and marks of 5 students:");
        for (int i = 0; i &lt; 5; i++) {
            name[i] = sc.next();
            marks[i] = sc.nextInt();
        }
        for (int i = 0; i &lt; 4; i++) {
            int big = i;
            for (int j = i + 1; j &lt; 5; j++)
                if (marks[j] &gt; marks[big])
                    big = j;
            int t = marks[i]; marks[i] = marks[big]; marks[big] = t;
            String s = name[i]; name[i] = name[big]; name[big] = s;   <i>// move the name with its marks</i>
        }
        System.out.println("Rank\\tName\\tMarks");
        for (int i = 0; i &lt; 5; i++)
            System.out.println((i + 1) + "\\t" + name[i] + "\\t" + marks[i]);
    }
}</pre>
  <p class="bx-code-note">Whatever swap is made in marks must be made in name at the same two indices, or names and marks drift apart.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Sample run</b><span>Java 21</span></figcaption>
  <pre>Enter name and marks of 5 students:
<b>Tara 78 Dev 91 Anya 66 Rohan 84 Sana 91</b>
Rank	Name	Marks
1	Dev	91
2	Sana	91
3	Rohan	84
4	Tara	78
5	Anya	66</pre>
  <p class="bx-code-note">Variables: name String[], marks int[]; i, j, big int; t int and s String temporaries. Dev stays ahead of Sana because the strict &gt; does not move an equal mark.</p>
</figure>
    </div>
    <h3 class="bx-mt-40">Shape 3: binary search with an order check</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>RollSearch.java</b><span>check sorted, then search</span></figcaption>
  <pre>import java.util.Scanner;
class RollSearch {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int roll[] = new int[8];
        System.out.println("Enter 8 roll numbers in ascending order:");
        for (int i = 0; i &lt; 8; i++)
            roll[i] = sc.nextInt();
        <i>// check the order first: binary search is only valid on sorted data</i>
        boolean sorted = true;
        for (int i = 0; i &lt; 7; i++)
            if (roll[i] &gt; roll[i + 1])
                sorted = false;
        if (!sorted) {
            System.out.println("Roll numbers are not in ascending order");
            return;
        }
        System.out.print("Roll number to find: ");
        int key = sc.nextInt();
        int low = 0, high = 7, steps = 0, pos = -1;
        while (low &lt;= high) {
            int mid = (low + high) / 2;
            steps++;
            if (roll[mid] == key) { pos = mid; break; }
            if (roll[mid] &lt; key) low = mid + 1;
            else high = mid - 1;
        }
        if (pos &gt;= 0)
            System.out.println("Present at position " + (pos + 1) + " after " + steps + " comparisons");
        else
            System.out.println("Absent, decided after " + steps + " comparisons");
    }
}</pre>
  <p class="bx-code-note">The order check costs seven comparisons and saves a wrong answer: binary search on unsorted data can miss a value that is there.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Sample runs</b><span>Java 21</span></figcaption>
  <pre>Enter 8 roll numbers in ascending order:
<b>3 7 12 18 21 25 30 34</b>
Roll number to find: <b>25</b>
Present at position 6 after 2 comparisons

Enter 8 roll numbers in ascending order:
<b>3 7 12 18 21 25 30 34</b>
Roll number to find: <b>4</b>
Absent, decided after 3 comparisons

Enter 8 roll numbers in ascending order:
<b>3 7 12 9 21 25 30 34</b>
Roll numbers are not in ascending order</pre>
  <p class="bx-code-note">Variables: roll int[]; sorted boolean; key, low, high, mid, steps, pos int.</p>
</figure>
    </div>
    <h3 class="bx-mt-40">Shape 4: highest, lowest, average and above-average count</h3>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>MaxMinAvg.java</b><span>one pass, then a second</span></figcaption>
  <pre>import java.util.Scanner;
class MaxMinAvg {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        double t[] = new double[7];
        System.out.println("Enter the maximum temperature for 7 days:");
        for (int i = 0; i &lt; 7; i++)
            t[i] = sc.nextDouble();
        double max = t[0], min = t[0], sum = 0;
        int hot = 0;                               <i>// day number of the hottest day</i>
        for (int i = 0; i &lt; 7; i++) {
            sum = sum + t[i];
            if (t[i] &gt; max) { max = t[i]; hot = i; }
            if (t[i] &lt; min) min = t[i];
        }
        double avg = sum / 7;
        int above = 0;
        for (int i = 0; i &lt; 7; i++)
            if (t[i] &gt; avg) above++;
        System.out.println("Highest = " + max + " on day " + (hot + 1));
        System.out.println("Lowest = " + min);
        System.out.println("Average = " + Math.round(avg * 100) / 100.0);
        System.out.println("Days above average = " + above);
    }
}</pre>
  <p class="bx-code-note">max and min start at t[0], not at 0: a week of temperatures all below 0 would otherwise report a maximum of 0.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Sample run</b><span>Java 21</span></figcaption>
  <pre>Enter the maximum temperature for 7 days:
<b>31.5 33 29.5 35.5 34 30 32</b>
Highest = 35.5 on day 4
Lowest = 29.5
Average = 32.21
Days above average = 3</pre>
  <p class="bx-code-note">Variables: t double[]; max, min, sum, avg double; hot, above, i int. The average needs the whole first pass, so counting days above it needs a second loop.</p>
</figure>
    </div>
    <p class="bx-mt-40">
      Rows and columns are the next step:
      <a class="bx-link" href="/icse-class-10-2d-array-programs">2D array programs for ICSE Class 10</a>. Sorting a sentence's letters or words also draws on
      <a class="bx-link" href="/icse-class-10-string-programs">ICSE Class 10 string programs</a>.
    </p>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" style="font-variant-ligatures:none" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. How are sorting and searching taught in the live classes?</p>
      <h2>Sorting and searching ICSE: trace on paper, then prove it in BlueJ</h2>
      <p class="bx-lede">The marks in this topic go to students who can produce the array after pass 2 without running anything. So the live classes put the paper trace first and the computer second.</p>
    </div>
    <ol class="bx-steps">
      <li class="bx-step"><h4>Cards before code</h4><p>In the first session students sort a handful of numbered cards on camera, once by bubble and once by selection, saying each comparison aloud. The algorithm is understood before a line of Java is written.</p></li>
      <li class="bx-step"><h4>Timed trace sets on Tuesday</h4><p>At 5:30 PM IST each student fills pass tables for a fresh array, including duplicates and a value that is not in the list, against the clock.</p></li>
      <li class="bx-step"><h4>Programs marked against the scheme</h4><p>Full Section B answers are marked on screen: input loop, sort or search logic, output format, comments and the variable description table.</p></li>
      <li class="bx-step"><h4>Run with the printing turned on</h4><p>At 8:00 PM IST on Wednesday the programs are run in BlueJ with a print inside each pass, exactly as on this page, so every student can compare the machine's trace with their own.</p></li>
      <li class="bx-step"><h4>Worksheets, doubts and full mocks</h4><p>A worksheet of variations follows each shape, the next class starts with doubts, and from December arrays appear inside complete timed papers.</p></li>
    </ol>
    <p class="bx-mt-40">
      Searching and sorting also turn up in the one-mark section as short traces; practise those on
      <a class="bx-link" href="/icse-class-10-java-output-questions">ICSE Computer Applications output questions</a>. Every other program family is listed on
      <a class="bx-link" href="/icse-class-10-java-programs-practice">ICSE Class 10 Java programs for practice</a>.
    </p>
  </div>
</section>`
  ],
  chooseH2: 'Trace sorts and searches in the mini batch, or one to one',
  chooseLede: 'The traces, the four array shapes and the BlueJ runs are the same in both formats. In India, families pick the fixed evening mini batch or a private slot; ICSE students abroad are taught one to one. Monthly billing, no admission fee.',
  chooseBatch: [
    'Tuesday 5:30 PM and Wednesday 8:00 PM IST, live',
    'A maximum of six ICSE Class 10 students',
    'Pass tables filled by hand against a timer',
    'Section B answers marked against the scheme on screen',
    'Every trace confirmed in BlueJ the next day'
  ],
  choosePersonal: [
    'A time chosen by the family, in India or abroad',
    'Extra traces on whichever sort your child mixes up',
    'Parallel arrays and String sorting at their own pace',
    'Harder arrays once the basic passes are secure',
    'The same mentors and the same 2027 syllabus'
  ],
  chooseAfter: 'A student who writes the sort correctly but cannot say what the array looks like after pass 2 usually needs only a few one to one sessions of tracing. A student who wants steady practice across all of Section B is better served by the two batch classes each week. Fees are shown in your own currency.',
  zonesH2: 'Sorting and searching practice for ICSE students abroad',
  zonesLede: 'ICSE schools overseas take the same Computer Applications paper, so the same pass traces and array shapes carry the same Section B marks. Abroad, these classes run one to one in an evening slot in the student\'s own time zone.',
  zonesAfter: 'The slot is set after the free demo and can shift around school tests. More for overseas families is on <a class="bx-link" href="/icse-class-10-computer-applications-classes-gulf-and-abroad">ICSE Computer Applications classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about sorting and searching',
  faqH2: 'What students ask about sorting and searching in ICSE Class 10',
  faqs: [
    ['What is the difference between bubble sort and selection sort?', 'Bubble sort compares neighbouring elements and swaps whenever they are out of order, so it can swap many times in one pass. Selection sort scans the unsorted part for the smallest or largest value and makes one swap per pass. Both make n(n - 1) / 2 comparisons on n elements.'],
    ['How many passes does bubble sort need?', 'An array of n elements needs at most n minus 1 passes, because each pass settles one more value at the end and the last value is then automatically in place. Five elements need at most four passes. With a no-swap flag the sort can stop sooner if the array becomes sorted early.'],
    ['How do you write the array after a given pass?', 'Trace it by hand. For bubble sort, walk left to right comparing neighbours and swapping, and write the whole array after each pass. For selection sort, find the largest or smallest value in the unsorted part, swap it into place, and write the array. Never skip a pass, even one with no changes.'],
    ['What is binary search in Java ICSE?', 'Binary search finds a value in a sorted array by checking the middle element. If the key is larger, it searches the right half by setting low to mid plus 1; if smaller, the left half by setting high to mid minus 1. It stops when the key is found or when low passes high.'],
    ['Why must the array be sorted for binary search?', 'Binary search throws away half the array after each check, on the assumption that every value to one side of mid is smaller and every value to the other side is larger. If the array is not sorted that assumption is false, and the search can report a value as absent when it is there.'],
    ['What is linear search in Java?', 'Linear search compares the key with each element in turn, from index 0 onwards, until it finds a match or reaches the end. It works on any array, sorted or not, and on Strings with equals. For n elements it needs up to n comparisons, which is slow on large arrays but fine for Class 10 sizes.'],
    ['How do you sort names alphabetically in Java ICSE?', 'Use bubble or selection sort exactly as for numbers, but compare with compareTo or compareToIgnoreCase instead of greater than. A positive result means the left String comes later in the alphabet, so the two should be swapped. compareToIgnoreCase stops small and capital letters sorting into separate groups.'],
    ['Can I use Arrays.sort in the ICSE exam?', 'When a question asks for bubble sort or selection sort, it is testing whether you can write the algorithm, so a library call would not earn the marks for the logic. Write the nested loops and the swap yourself, with a variable description table, and use the library only where a question clearly allows it.'],
    ['How many comparisons does binary search need?', 'Each comparison roughly halves what is left, so an array of 10 elements needs at most 4 comparisons and one of 100 elements needs at most 7. Linear search on the same arrays could need 10 and 100. That gap is the reason binary search is worth the extra condition of sorted data.'],
    ['Do you teach sorting and searching in live classes?', 'Yes. In the mini batch on Tuesday and Wednesday evenings in India, students trace passes by hand against a timer, have full array programs marked against the scheme on screen, and check every trace in BlueJ. Families abroad, or who need another time, can take personalised one to one classes.']
  ],
  startH2: 'Book a free live sorting and searching class',
  startHtml: `        <p>In the free demo your child traces bubble sort and binary search on a fresh array by hand, then runs the same program in BlueJ with the mentor and compares the printed passes with the paper ones. Afterwards you get a straight answer on where the gaps are, and on whether the mini batch or one to one suits better.</p>
        <p>Prefer to see the whole syllabus first? Go to <a class="bx-link" href="/icse-class-10-computer-applications-important-questions">ICSE Computer Applications important questions</a> or <a class="bx-link" href="/icse-class-10-java-classes-online">the ICSE Class 10 Java classes</a>.</p>`,
  footerTag: 'ICSE Computer Applications &middot; Sorting and searching 2027'
};
