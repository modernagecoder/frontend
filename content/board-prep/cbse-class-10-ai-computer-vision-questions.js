// CBSE Class 10 AI (417), Unit 5 Computer Vision, 2026-27: questions and answers.
// Intent: "computer vision class 10 questions and answers", "CNN class 10",
// "convolution operator class 10", "pixel and resolution class 10", "grayscale and RGB",
// "kernel class 10 AI".
// Angle: says plainly that CV carries only 4 of the 50 theory marks but is heavy in the
// practical. Facts from the official 417 curriculum for 2026-27: Unit 5 = 10 theory
// hours, 20 practical hours, 4 marks. The theory-assessed part lists introduction,
// applications, CV concepts and tasks, and image basics (pixel, resolution, pixel value,
// grayscale and RGB). The practical-assessed part lists no-code tools (Lobe, Teachable
// Machine, Orange with the coral bleaching walkthrough), image features and the
// convolution operator, and CNN. Two of CBSE's eight suggested programs are image
// programs (read and display an image; read an image and identify its shape), and
// early detection of coral bleaching is a CBSE sample project. The 2025-26 sample paper
// blueprint printed 4 one-mark items and 1 two-mark question on CV, no four-mark one;
// the 2026-27 417 SQP is not out. Convolution follows the CBSE handbook (kernel laid
// over the patch as written, multiplied cell by cell, then summed; no flipping).
// Every number was recomputed with python3 and NumPy on 2026-11-06 (scratch cb09.py and
// page_conv.py, the program shown on the page, run as printed): 1920 x 1080 = 2,073,600
// pixels, x 3 = 6,220,800 values; 800 x 600 = 480,000, x 3 = 1,440,000; 4000 x 3000 =
// 12,000,000; 2^8 = 256; mean of (90, 180, 30) = 100, weighted 0.299/0.587/0.114 gives
// 135.99 = 136; stripe image [10, 80, 80, 10, 10] x 5 rows with kernel rows [-1, 0, 1]
// gives output rows [210, -210, -210], ReLU [210, 0, 0]; output size n - k + 1: 5 and 3
// give 3, 6 and 3 give 4, 28 and 3 give 26; Laplacian [[0,1,0],[1,-4,1],[0,1,0]] on
// [[2,4,6],[1,3,5],[0,2,4]] = 0 and on a 9 spike in 1s = -32; 2 x 2 max pooling of
// [[3,1,0,2],[5,4,1,1],[0,2,6,8],[1,3,7,2]] = [[5,2],[3,8]], average [[3.25,1],[1.5,5.75]].
// No OpenCV code is printed because cv2 could not be run here; the OpenCV programs
// are described in prose only.
'use strict';

module.exports = {
  slug: 'cbse-class-10-ai-computer-vision-questions',
  code: 'cb09',
  board: 'cbse',
  themeColor: '#2E5566',
  dateModified: '2026-11-06',
  title: 'Computer Vision Class 10 Questions and Answers, AI 417',
  description: 'Computer vision class 10 questions and answers for CBSE AI 417, 2026-27: 4 theory marks, a big practical share, pixel, RGB and kernel sums worked.',
  ogTitle: 'Computer Vision Class 10: Questions, Answers and the Pixel Maths',
  ogDesc: 'Unit 5 of CBSE 417 for 2026-27: only 4 theory marks, but twice as many practical hours as theory. Pixels, resolution, grayscale and RGB, CV tasks, the convolution operator, kernels and CNN layers, all worked with numbers.',
  twDesc: 'Computer Vision is 4 theory marks in CBSE 417 but heavy in the practical. Pixel, kernel and pooling sums worked.',
  headline: 'Computer Vision Class 10 Questions and Answers: 4 Theory Marks, a Large Practical, Every Sum Worked',
  courseName: 'CBSE Class 10 AI (417) Computer Vision, Live Online',
  courseDesc: 'Live online teaching of Unit 5, Computer Vision, for CBSE Class 10 Artificial Intelligence (417), session 2026-27: image basics and CV tasks drilled for the theory paper, then the practical half done hands-on, from no-code image classifiers and the Orange coral bleaching walkthrough to the convolution operator, CNN layers and the image programs of the practical file, with viva rehearsal, every Monday and Wednesday at 9:00 PM IST or one to one at a time the family chooses.',
  brandTag: '417 &middot; Unit 5 CV',
  navLinks: [['#marks', 'Marks'], ['#pixels', 'Pixels'], ['#tasks', 'CV tasks'], ['#kernel', 'Kernel and CNN'], ['#qa', 'Q and A']],
  crumbs: [['/', 'Home'], ['/cbse-class-10-ai-classes-online', 'Class 10 AI classes'], [null, 'Computer vision questions']],
  eyebrow: 'CBSE Class 10 &middot; Artificial Intelligence, code 417 &middot; Unit 5, 2026-27',
  h1: 'Computer vision class 10 questions and answers, for a unit that is small on paper and big in the lab.',
  lede: 'These computer vision class 10 questions and answers start with a fact many students miss: in CBSE 417 for 2026-27, Computer Vision carries only 4 of the 50 theory marks, yet the syllabus gives it twice as many practical hours as theory hours. So this page does two jobs. It answers the short theory questions on pixels, resolution, grayscale, RGB and CV tasks, and it works the kernel, convolution and CNN arithmetic the practical and viva lean on. Our batch teaches the unit the same way.',
  heroNote: 'Live online &middot; 4 theory marks, big practical &middot; pixel and RGB counts worked &middot; convolution and pooling by hand &middot; image programs for the file &middot; first class free',
  waText: 'Hello Modern Age Coders. I want help with Computer Vision, Unit 5 of CBSE Class 10 AI 417.',
  timetable: {
    label: 'When Unit 5 is taught',
    title: 'Computer Vision',
    right: 'CBSE 417',
    rows: [
      ['Monday, image basics and CV tasks', '9:00', 'PM IST'],
      ['Wednesday, kernels and image programs', '9:00', 'PM IST'],
      ['Theory marks for Unit 5', '4', 'of 50'],
      ['Practical hours in the syllabus', '20', 'hours']
    ],
    zones: '<b>UAE, Oman:</b> 7:30 PM the same evening. <b>Saudi Arabia, Qatar, Kuwait, Bahrain, Kenya:</b> 6:30 PM. <b>Nepal:</b> 9:15 PM. <b>Singapore, Malaysia:</b> 11:30 PM, so a one to one slot is kinder.',
    stamps: ['Theory 4 marks', 'Practical 20 hours']
  },
  picksH2: 'Courses that cover Computer Vision',
  picksLede: 'The 417 course whose Class 10 batch teaches Unit 5, the Orange course for the coral bleaching image walkthrough, and AI and ML for students who want to see a CNN trained, not just drawn.',
  picks: [
    { slug: 'cbse-computational-thinking-and-ai-course-for-teens-classes-9-to-12-code-417-843', code: 'The batch / 417 Class 10', h3: 'CBSE AI for Class 9 to 12', p: 'Unit 5 for both halves of the exam: short theory answers on pixels and tasks, then kernels, CNN layers and image programs for the practical.' },
    { slug: 'orange-data-mining-visual-machine-learning-course-for-teens', code: 'Practical / Orange', h3: 'Visual ML with Orange', p: 'Image classification without code, including the coral bleaching use case the curriculum names for Unit 5.' },
    { slug: 'ai-ml-masterclass-teens', code: 'Go further / AI and ML', h3: 'AI and ML for Teens', p: 'Train a small image classifier and watch convolution, ReLU and pooling change a picture, layer by layer.' }
  ],
  capsule: 'Computer vision class 10 questions and answers for CBSE 417 come from Unit 5, which carries 4 of the 50 theory marks in 2026-27, the smallest theory unit, but 20 practical hours against 10 of theory. The theory paper asks about CV applications, CV tasks (classification, localisation, object detection, segmentation) and image basics: pixels, resolution, pixel values from 0 to 255, grayscale and RGB. Convolution, kernels, CNN layers and no-code image tools sit in the practical half, along with two image programs for the file. Modern Age Coders teaches both halves live, Monday and Wednesday at 9:00 PM IST, or personalised one to one.',
  sections: [
`<section class="bx-section bx-section--tint" id="marks">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q1. How much is CV worth?</p>
      <h2>How many marks is computer vision in Class 10 AI for 2026-27?</h2>
      <p class="bx-lede">Computer Vision carries 4 theory marks out of 50, the smallest share of any unit examined in the written paper. But the 2026-27 curriculum gives it 10 theory hours and 20 practical hours: no other theory unit has more practical time than theory time.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Part of Unit 5</th><th scope="col">Topics in the 2026-27 curriculum</th><th scope="col">Where it is assessed</th></tr></thead>
        <tbody>
          <tr><td>Introduction and applications</td><td>What CV is, where it is used</td><td>Theory paper</td></tr>
          <tr><td>CV concepts and tasks</td><td>Classification, classification with localisation, object detection, segmentation</td><td>Theory paper</td></tr>
          <tr><td>Basics of images</td><td>Pixel, resolution, pixel value, grayscale and RGB images</td><td>Theory paper</td></tr>
          <tr><td>No-code AI tools</td><td>Lobe, Teachable Machine, Orange; the coral bleaching walkthrough</td><td>Practical</td></tr>
          <tr><td>Image features and the convolution operator</td><td>Features such as edges and corners; applying a kernel</td><td>Practical</td></tr>
          <tr><td>Convolutional Neural Network</td><td>The kernel and the layers of a CNN</td><td>Practical</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>What that means in the written paper</h3>
        <ul class="bx-check">
          <li><b>Four one-mark objective items and one two-mark question</b> in the 2025-26 sample paper, with no four-mark question from this unit.</li>
          <li><b>Short answers win.</b> A definition, a count of pixels or values, or naming the right CV task.</li>
          <li>The 2026-27 sample paper for 417 is not out yet, so read these counts as last year's pattern.</li>
        </ul>
      </div>
      <div>
        <h3>What it means in the practical</h3>
        <p>The practical exam covers Units 4 to 7, so CV is part of it. Two of CBSE's eight suggested programs are image programs: read an image and display it, and read an image and identify its shape. Early detection of coral bleaching is one of CBSE's sample projects. Expect the viva to ask what a kernel does or why pooling is used, even though those topics are not in the theory list.</p>
        <p>The program list and file format are on <a class="bx-link" href="/cbse-class-10-ai-project-and-practical-file">the 417 project and practical file page</a>.</p>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section" id="pixels">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q2. Count the pixels</p>
      <h2>Pixel and resolution class 10: definitions and the sums</h2>
      <p class="bx-lede">A pixel, short for picture element, is the smallest unit of a digital image. Resolution is the number of pixels in an image, written as width x height, so a 1920 x 1080 image has 1920 pixels across and 1080 down.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Image</th><th scope="col">Pixels (width x height)</th><th scope="col">Values stored, grayscale</th><th scope="col">Values stored, RGB</th></tr></thead>
        <tbody>
          <tr><td>800 x 600</td><td class="bx-num">480,000</td><td class="bx-num">480,000</td><td class="bx-num">1,440,000</td></tr>
          <tr><td>1920 x 1080 (full HD)</td><td class="bx-num">2,073,600</td><td class="bx-num">2,073,600</td><td class="bx-num">6,220,800</td></tr>
          <tr><td>4000 x 3000 (a 12 megapixel photo)</td><td class="bx-num">12,000,000</td><td class="bx-num">12,000,000</td><td class="bx-num">36,000,000</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-2 bx-mt-40" style="align-items:start">
      <div>
        <h3>Grayscale and RGB</h3>
        <p><b>Grayscale:</b> each pixel holds one number for brightness. In a byte image that number runs from 0 (black) to 255 (white), because one byte has 8 bits and 2 to the power 8 is 256 possible values.</p>
        <p><b>RGB:</b> each pixel holds three numbers, one each for red, green and blue, each from 0 to 255. Mixing them gives the colour. That is why an RGB image stores three times as many values as a grayscale image of the same size.</p>
        <p>One simple way to turn a colour pixel grey is to average its three values: (90, 180, 30) becomes 100. Image libraries such as OpenCV weight green most, which gives 136 for the same pixel, so say which method you used.</p>
      </div>
      <div>
        <h3>Colours to know by their numbers</h3>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th scope="col">(R, G, B)</th><th scope="col">Colour</th></tr></thead>
            <tbody>
              <tr><td class="bx-num">(0, 0, 0)</td><td>Black</td></tr>
              <tr><td class="bx-num">(255, 255, 255)</td><td>White</td></tr>
              <tr><td class="bx-num">(255, 0, 0)</td><td>Red</td></tr>
              <tr><td class="bx-num">(0, 255, 0)</td><td>Green</td></tr>
              <tr><td class="bx-num">(255, 255, 0)</td><td>Yellow (red plus green light)</td></tr>
              <tr><td class="bx-num">(128, 128, 128)</td><td>Mid grey: equal values give a shade of grey</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>`,

`<section class="bx-section bx-section--deep" id="tasks">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q3. Name the task</p>
      <h2>Computer vision tasks and applications, with the one-mark distinctions</h2>
      <p class="bx-lede">Computer vision is the field of AI that lets a machine take in images or video and extract information from them to make a decision. Image processing, by contrast, only changes an image, such as brightening or resizing it; it is a subset of computer vision.</p>
    </div>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Task</th><th scope="col">What the output is</th><th scope="col">Example</th></tr></thead>
        <tbody>
          <tr><td>Classification</td><td>One label for the whole image</td><td>A leaf photo is labelled "healthy" or "diseased"</td></tr>
          <tr><td>Classification with localisation</td><td>One label plus a box around that one object</td><td>The app says "cat" and draws a box round the single cat</td></tr>
          <tr><td>Object detection</td><td>Boxes and labels for many objects in one image</td><td>A traffic camera boxes every car, bus and scooter</td></tr>
          <tr><td>Instance segmentation</td><td>The exact pixels of each separate object</td><td>Each person in a crowd photo is outlined separately</td></tr>
        </tbody>
      </table>
    </div>
    <div class="bx-grid-3 bx-mt-40">
      <div class="bx-card"><h3>Facial recognition</h3><p>Phones unlock and schools mark attendance by matching a face to stored features.</p></div>
      <div class="bx-card"><h3>Face filters</h3><p>The app finds the eyes, nose and mouth in each video frame and places the effect on them.</p></div>
      <div class="bx-card"><h3>Search by image</h3><p>A photo of a plant or a shoe is used as the query instead of typed words.</p></div>
      <div class="bx-card"><h3>Retail</h3><p>Cameras follow which shelves shoppers visit and spot empty racks for restocking.</p></div>
      <div class="bx-card"><h3>Self-driving cars</h3><p>The car detects lanes, signs, vehicles and people around it, many times a second.</p></div>
      <div class="bx-card"><h3>Medical imaging</h3><p>Scans and X-rays are checked for patterns a doctor then confirms.</p></div>
    </div>
    <p class="bx-mt-40">The trap in task questions is one word: "every" or "all" objects means detection; "exact outline" or "pixels" means segmentation; a single object with a box is localisation. Pairs like these are collected on <a class="bx-link" href="/cbse-class-10-ai-difference-between-questions">Class 10 AI difference between questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="kernel">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q4. Apply the kernel</p>
      <h2>Convolution operator class 10 and the kernel, worked by hand, then CNN</h2>
      <p class="bx-lede">Convolution is the operation of sliding a small matrix, the kernel, over an image, multiplying the overlapping values cell by cell and adding them up to give one output value per position. A kernel is that small matrix; its numbers decide the effect, such as blurring, sharpening or finding edges.</p>
    </div>
    <div class="bx-code-pair">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Image and kernel</b><span>5 x 5 image, 3 x 3 kernel</span></figcaption>
  <pre>Image (a light stripe on a dark ground)
10  80  80  10  10
10  80  80  10  10
10  80  80  10  10
10  80  80  10  10
10  80  80  10  10

Kernel (vertical edge finder)
-1   0   1
-1   0   1
-1   0   1</pre>
  <p class="bx-code-note">As in the CBSE handbook, the kernel is laid on the image as written, multiplied cell by cell and summed. No flipping.</p>
</figure>
      <div>
        <h3>The first position, step by step</h3>
        <p>Place the kernel on the top-left 3 x 3 patch (columns 1 to 3). Each row gives -10 + 0 + 80 = 70, and three rows give <b>210</b>.</p>
        <p>Move one column right (columns 2 to 4). Each row now gives -80 + 0 + 10 = -70, so the sum is <b>-210</b>. One more step right gives -210 again.</p>
        <p>A 5 x 5 image and a 3 x 3 kernel, with no padding, give a 3 x 3 output, because 5 - 3 + 1 = 3. Each output row is 210, -210, -210: a large positive value where dark turns light, a large negative one where light turns dark. That is an edge, found by arithmetic.</p>
      </div>
    </div>
    <div class="bx-code-pair bx-mt-40">
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>The same in Python</b><span>NumPy only</span></figcaption>
  <pre>import numpy as np

img = np.array([[10, 80, 80, 10, 10]] * 5)
k = np.array([[-1, 0, 1]] * 3)
print(img.shape)

out = np.zeros((3, 3), dtype=int)
for i in range(3):
    for j in range(3):
        out[i, j] = (img[i:i+3, j:j+3] * k).sum()
print(out)
print(np.maximum(out, 0))</pre>
  <p class="bx-code-note">np.maximum(out, 0) is ReLU: negatives become 0.</p>
</figure>
<figure class="bx-code">
  <figcaption class="bx-code-head"><b>Output</b><span>shape, feature map, after ReLU</span></figcaption>
  <pre>(5, 5)
[[ 210 -210 -210]
 [ 210 -210 -210]
 [ 210 -210 -210]]
[[210   0   0]
 [210   0   0]
 [210   0   0]]</pre>
  <p class="bx-code-note">img.shape is the idea behind the file program "read an image and identify its shape": an OpenCV image is an array too, and its shape gives height, width and the number of colour channels.</p>
</figure>
    </div>
    <h3 class="bx-mt-40">The four layers of a CNN class 10 students should name</h3>
    <div class="bx-table-wrap">
      <table class="bx-table">
        <thead><tr><th scope="col">Layer</th><th scope="col">What it does</th><th scope="col">Worked numbers</th></tr></thead>
        <tbody>
          <tr><td>1. Convolution layer</td><td>Applies kernels to pull out features such as edges, giving a feature map</td><td>The 3 x 3 map above</td></tr>
          <tr><td>2. ReLU (Rectified Linear Unit)</td><td>Replaces every negative value with 0 and keeps positives as they are</td><td>-210 becomes 0; 210 stays 210</td></tr>
          <tr><td>3. Pooling layer</td><td>Shrinks the feature map while keeping the important values; max pooling keeps the largest in each block, average pooling the mean</td><td>[[3,1,0,2],[5,4,1,1],[0,2,6,8],[1,3,7,2]] with 2 x 2 blocks: max gives [[5,2],[3,8]], average gives [[3.25,1],[1.5,5.75]]</td></tr>
          <tr><td>4. Fully connected layer</td><td>Takes the final features and decides the label</td><td>"healthy coral" or "bleached coral"</td></tr>
        </tbody>
      </table>
    </div>
    <p class="bx-mt-40">How a perceptron and neural networks work in general belongs to Unit 2; see <a class="bx-link" href="/cbse-class-10-ai-advanced-modeling-questions">CBSE Class 10 AI advanced modeling questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section bx-section--tint" id="qa">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q5. Practise for paper and viva</p>
      <h2>Computer vision class 10 questions and answers to practise</h2>
      <p class="bx-lede">The first set is the shape of the theory paper. The second is what an examiner may ask in the practical viva, where kernels and CNN layers come up.</p>
    </div>
    <div class="bx-grid-2" style="align-items:start">
      <div>
        <h3>For the theory paper</h3>
        <ol class="bx-qlist">
          <li>How many pixels does an 800 x 600 image have, and how many values does it store in RGB?
            <details><summary>Answer</summary> 800 x 600 = 480,000 pixels; x 3 = 1,440,000 values.</details></li>
          <li>A grayscale pixel reads 255. What does it show?
            <details><summary>Answer</summary> White, the brightest possible value. 0 would be black.</details></li>
          <li>Which colour is (255, 255, 0)?
            <details><summary>Answer</summary> Yellow: full red and full green, no blue.</details></li>
          <li>A model outlines the exact shape of each of three dogs in a photo. Name the task.
            <details><summary>Answer</summary> Instance segmentation. Boxes alone would be object detection.</details></li>
          <li>Is brightening a dark photo computer vision or image processing?
            <details><summary>Answer</summary> Image processing: it changes the image but extracts no information.</details></li>
          <li>Differentiate between grayscale and RGB images. (2 marks)
            <details><summary>Answer</summary> A grayscale image stores one value per pixel, from 0 for black to 255 for white, showing only brightness. An RGB image stores three values per pixel, for red, green and blue, each from 0 to 255, and mixes them to show colour, so it holds three times as much data.</details></li>
        </ol>
      </div>
      <div>
        <h3>For the practical and viva</h3>
        <ol class="bx-qlist" start="7">
          <li>A 6 x 6 image is convolved with a 3 x 3 kernel without padding. What size is the output?
            <details><summary>Answer</summary> 4 x 4, since 6 - 3 + 1 = 4.</details></li>
          <li>Kernel [[0,1,0],[1,-4,1],[0,1,0]] is placed on the patch [[2,4,6],[1,3,5],[0,2,4]]. What is the result?
            <details><summary>Answer</summary> 0. The four neighbours add to 4 + 1 + 5 + 2 = 12 and the centre gives 3 x -4 = -12. A smooth region gives no edge response.</details></li>
          <li>The same kernel on a patch of 1s with a 9 in the centre gives -32. What does ReLU turn it into?
            <details><summary>Answer</summary> 0, because ReLU replaces every negative value with 0.</details></li>
          <li>Why is pooling used in a CNN?
            <details><summary>Answer</summary> It makes the feature map smaller, so later layers have less to process, and it keeps the result steady when the object shifts slightly in the image.</details></li>
          <li>What is the first layer of a CNN, and what does it produce?
            <details><summary>Answer</summary> The convolution layer. It produces feature maps that show where features such as edges occur.</details></li>
        </ol>
      </div>
    </div>
    <p class="bx-mt-40">More one-mark items on this unit sit beside the others on <a class="bx-link" href="/cbse-class-10-ai-mcq-questions">Class 10 AI MCQ with answers</a>, and the full list of spoken questions is on <a class="bx-link" href="/cbse-class-10-ai-viva-questions">CBSE Class 10 AI viva questions</a>.</p>
  </div>
</section>`,

`<section class="bx-section" id="live">
  <div class="bx-wrap">
    <div class="bx-section-head">
      <p class="bx-qlabel">Q6. How is it taught?</p>
      <h2>How the batch teaches a unit that is mostly practical</h2>
      <p class="bx-lede">Because the written paper gives Computer Vision so few marks, the class keeps its theory tight and spends the rest of the unit where CV is really assessed: building, running and explaining.</p>
    </div>
    <div class="bx-grid-3">
      <div class="bx-card"><h3>Theory in one tight block</h3><p>Pixels, resolution, grayscale, RGB and the four tasks are taught on Monday with quick counting drills, then folded into the timed objective sets so those four marks stay safe.</p></div>
      <div class="bx-card"><h3>Kernels you can see</h3><p>On Wednesday students apply kernels to small grids by hand, then to real photos in Python, and watch an edge appear. ReLU and pooling are done on numbers first, pictures second.</p></div>
      <div class="bx-card"><h3>Programs, project and viva</h3><p>The two image programs go into the practical file with their output. The coral bleaching walkthrough is built in Orange, and every student rehearses explaining kernels and CNN layers aloud for the viva.</p></div>
    </div>
    <p class="bx-mt-40">The hands-on tool has its own page, <a class="bx-link" href="/orange-data-mining-class-10-ai">Orange Data Mining for Class 10 AI</a>. The next theory unit, worth twice as much, is answered on <a class="bx-link" href="/cbse-class-10-ai-nlp-questions">NLP class 10 questions and answers</a>.</p>
  </div>
</section>`
  ],
  chooseH2: 'Study Computer Vision in the batch, or one to one',
  chooseLede: 'The batch takes Unit 5 in its turn, theory first and then the practical work, alongside students doing the same programs. One to one can go straight to what your child needs, a kernel sum, an image program or the viva. Monthly billing with no admission fee; stop at the end of any month.',
  chooseBatch: [
    'Monday and Wednesday, 9:00 PM IST, live on video',
    'Fifteen to twenty Class 10 AI students with one teacher',
    'Pixel, RGB and task questions drilled for the 4 theory marks',
    'Kernels, ReLU and pooling worked by hand and in Python',
    'Image programs and Orange project done in class'
  ],
  choosePersonal: [
    'Your chosen days and hour, in your own time zone',
    'Starts with the CV topic or program your child is stuck on',
    'Convolution sums repeated with new grids until correct',
    'One to one viva rehearsal on kernels and CNN layers',
    'Same CBSE 417 syllabus and teachers'
  ],
  chooseAfter: 'If the theory is fine but the image programs or the viva worry you, a few one to one sessions usually settle them. If the student has not started the practical half of the course, the batch covers it with the rest of the syllabus. Fees are shown in your currency.',
  zonesH2: 'Computer Vision classes for CBSE students in the Gulf and abroad',
  zonesLede: 'In Sharjah, Jeddah or Muscat, a CBSE school runs the same Unit 5 practical and the same 4-mark theory section. These are the batch times where you are this winter.',
  zonesAfter: 'When 9:00 PM IST is too late locally, one to one is held at an hour that suits you. See <a class="bx-link" href="/cbse-class-10-ai-online-classes-gulf-and-abroad">CBSE Class 10 AI online classes in the Gulf and abroad</a>.',
  faqLabel: 'Questions about Computer Vision in Class 10 AI',
  faqH2: 'Computer vision class 10: questions students ask',
  faqs: [
    ['How many marks is computer vision in class 10 AI 2026-27?', 'Unit 5, Computer Vision, carries 4 of the 50 theory marks in CBSE 417 for 2026-27, the smallest theory unit. The curriculum gives it 10 theory hours but 20 practical hours, so much of its weight is felt in the practical exam, the practical file and the viva rather than in the written paper.'],
    ['What questions come from computer vision in the class 10 AI paper?', 'In the 2025-26 sample paper there were four one-mark objective items and one two-mark question from this unit, and no four-mark question. Expect pixel or value counts, grayscale against RGB, naming a CV task from a description and examples of applications. The 2026-27 sample paper for 417 is not out yet.'],
    ['What is CNN in class 10 AI?', 'A Convolutional Neural Network is a deep learning model built for images. It passes an image through a convolution layer that finds features, a ReLU layer that removes negative values, a pooling layer that shrinks the result, and a fully connected layer that gives the final label. In 2026-27 it is listed in the practical part of Unit 5.'],
    ['What is the convolution operator in class 10?', 'Convolution slides a small matrix called a kernel across an image. At each position the overlapping numbers are multiplied cell by cell and added, giving one value of the output. With a 5 x 5 image and a 3 x 3 kernel and no padding, the output is 3 x 3. It is used to find features such as edges.'],
    ['What is a kernel in class 10 AI?', 'A kernel is a small matrix of numbers, often 3 x 3, that is slid over an image during convolution. Its values decide the effect: one kernel blurs, another sharpens, another finds vertical edges. In a CNN, the kernel values are learned during training instead of being typed in.'],
    ['What is a pixel and resolution in class 10?', 'A pixel is the smallest unit of a digital image, one dot holding a value. Resolution is the number of pixels, written as width x height, so a 1920 x 1080 image has 2,073,600 pixels. Higher resolution means more pixels and finer detail, and a larger file.'],
    ['What is the difference between grayscale and RGB?', 'A grayscale image stores one number per pixel, from 0 for black to 255 for white. An RGB image stores three numbers per pixel, for red, green and blue, each from 0 to 255. So an RGB image of the same size stores three times as many values: 800 x 600 gives 480,000 grayscale values but 1,440,000 RGB values.'],
    ['Why do pixel values go from 0 to 255?', 'A byte image gives each value 8 bits. Eight bits can form 2 to the power 8, or 256, different patterns, so the values run from 0 to 255. That is also why each of R, G and B has 256 levels in a standard colour image.'],
    ['Which computer vision programs are in the class 10 AI practical file?', 'CBSE\'s suggested list for 2026-27 includes two image programs: read an image and display it using Python, and read an image and identify its shape. The shape is the array\'s height, width and number of colour channels. Your school may add more; at least 15 programs are needed in the file.'],
    ['Is it worth studying computer vision if it is only 4 marks?', 'Yes, for two reasons. The theory marks are among the easiest to secure, since most are short definitions or counts. And the practical exam, file and viva together are worth far more than 4 marks, and Computer Vision is part of them, so skipping the unit costs marks there.'],
    ['Do your classes cover both the theory and the practical of Unit 5?', 'Yes. The batch teaches the theory topics with timed drills, then does kernels, CNN layers, the image programs and the Orange coral bleaching walkthrough in class, with viva rehearsal. It is included in the monthly fee shown on this page, for the batch or one to one, and the first class is a free demo.']
  ],
  startH2: 'Try a free Computer Vision class',
  startHtml: `        <p>In the free first class your child counts pixels and values for a few images, applies a kernel to a small grid by hand and sees the same result come out of Python, then answers two viva questions on CNN layers. Afterwards the mentor tells you how ready your child is for both halves of the unit, and whether the batch or one to one suits better.</p>
        <p>To see how the whole subject is weighted, read <a class="bx-link" href="/cbse-class-10-ai-exam-date-and-paper-pattern">the 417 exam date and paper pattern</a>.</p>`,
  footerTag: 'CBSE 417 &middot; Class 10 computer vision questions'
};
