import { CourseType, Testimonial, VideoReview, GalleryItem, Certificate } from './types';
import { MediaItem } from './components/MediaSlider';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sonam Oswal',
    role: 'Parent of Dhairya',
    text: "My child Dhairya is really enjoying the Modern Age Coder IT classes. This is his first online class, and he eagerly looks forward to it. I can see his improvement, and I believe he will grow even more interested in the subject. The teachers are very cooperative and listen to our suggestions. Overall, I am very happy with the class.",
    avatarUrl: 'https://picsum.photos/150/150?random=1',
    course: CourseType.CODING,
    color: 'bg-pop-yellow'
  },
  {
    id: '2',
    name: 'Samriddha Mondal',
    role: 'Student',
    text: "Modern Age Coders has been a game-changer for me! I struggled to grasp IT concepts and coding before joining, but their classes transformed everything. I'm now the topper in my class and can confidently write complex programs with ease.",
    avatarUrl: 'https://picsum.photos/150/150?random=2',
    course: CourseType.CODING,
    color: 'bg-pop-pink'
  },
  {
    id: '3',
    name: 'Poonam Rathore',
    role: 'Parent',
    text: "My son has been attending this coding class for the past couple of months, and I've been genuinely impressed with both his progress and enthusiasm. The instructors are incredibly patient and knowledgeable. What stands out most is how excited my son is before every class—he looks forward to learning, problem-solving, and sharing what he's built. I've noticed a big boost in his confidence!",
    avatarUrl: 'https://picsum.photos/150/150?random=3',
    course: CourseType.CODING,
    color: 'bg-pop-cyan'
  },
  {
    id: '4',
    name: 'Krishnam Bhatter',
    role: 'Former Student',
    text: "I'm truly grateful for my experience at Modern Age Coders! The teaching approach of my legendary teachers—Shivam Sir, Mihir Sir and Sonu Sir—is extraordinary. They were not only my teachers but also mentors and friendly figures. The fee is remarkably reasonable and the perks are mind-blowing—one-on-one doubt solving, mentoring, and regular tests. The most impressive part was working on real-world projects.",
    avatarUrl: 'https://picsum.photos/150/150?random=4',
    course: CourseType.CODING,
    color: 'bg-pop-purple'
  },
  {
    id: '5',
    name: 'Yug Rathore',
    role: 'Student',
    text: "I absolutely love it here! I made new friends and learned important valuable coding skills while having the fun of my life. It's not just coding here, it's outings, bonding and most importantly preparing you for your future. Definitely five stars.",
    avatarUrl: 'https://picsum.photos/150/150?random=5',
    course: CourseType.CODING,
    color: 'bg-green-300'
  },
  {
    id: '6',
    name: 'Ria Mukherjee',
    role: 'Parent',
    text: "The one step solution for my son. Modern Age Coders make learning coding so simple that kids love it. Teachers make it so simple with clear explanations, practical exercises, and interactive content. As per my son, the coding class is very helpful and engaging. Sir explains complex concepts clearly. The projects were challenging and rewarding.",
    avatarUrl: 'https://picsum.photos/150/150?random=6',
    course: CourseType.CODING,
    color: 'bg-orange-300'
  },
  {
    id: '7',
    name: 'Pragyen Diwan',
    role: 'Parent',
    text: "The classes are excellent. The teachers explain concepts very clearly and make code fun and easy to understand. The sessions are interactive and fun. They also help students boost their confidence. We not only focus on academics, but also on logic building and problem solving.",
    avatarUrl: 'https://picsum.photos/150/150?random=7',
    course: CourseType.CODING,
    color: 'bg-pop-yellow'
  },
  {
    id: '8',
    name: 'Sonu Goyal',
    role: 'Parent',
    text: "Modern Age Coder have wonderful teachers who teach in a clear, easy and practical way. The teacher boosts students' confidence, keeps them updated with technology, and inspires them to learn without hesitation.",
    avatarUrl: 'https://picsum.photos/150/150?random=8',
    course: CourseType.CODING,
    color: 'bg-pop-cyan'
  },
  {
    id: '9',
    name: 'Arush Poddar',
    role: 'Student',
    text: "Coding classes here make learning very interesting and conceptual. The teachers teach us in a very easy-to-understand and efficient manner.",
    avatarUrl: 'https://picsum.photos/150/150?random=9',
    course: CourseType.CODING,
    color: 'bg-pop-pink'
  },
  {
    id: '10',
    name: 'Sujal Ramola',
    role: 'Student',
    text: "I am really glad to be a part of Modern Age Coders as it helped me a lot to know what coding means and helped me find myself. I thank Shreya Ma'am, Mihir Sir and Shivam Sir for always being there for me and for showing me the real path for success.",
    avatarUrl: 'https://picsum.photos/150/150?random=10',
    course: CourseType.CODING,
    color: 'bg-pop-purple'
  },
  {
    id: '11',
    name: 'Shradha Saraf',
    role: 'Parent of Mivaan',
    text: "Mivaan enjoys the class. He understands the concepts and completes his tasks with excitement. He started taking interest in coding… truly amazing class.",
    avatarUrl: 'https://picsum.photos/150/150?random=11',
    course: CourseType.CODING,
    color: 'bg-pop-yellow'
  },
  {
    id: '12',
    name: 'Vansh Agarwal',
    role: 'Student',
    text: "One of the most wonderful education centres out there. Education is not limited to school syllabus but focuses on skill development. Learning here has been a wonderful journey and still continuing.",
    avatarUrl: 'https://picsum.photos/150/150?random=12',
    course: CourseType.CODING,
    color: 'bg-pop-cyan'
  },
  {
    id: '13',
    name: 'Shaarav Wadhwa',
    role: 'Student',
    text: "Very good classes. Don't worry about coding—they teach the best, especially Shivam sir.",
    avatarUrl: 'https://picsum.photos/150/150?random=13',
    course: CourseType.CODING,
    color: 'bg-pop-pink'
  },
  {
    id: '14',
    name: 'Ritu Kedia',
    role: 'Parent',
    text: "I highly recommend this computer coding class! The teachers are incredibly knowledgeable and passionate about coding. They make every session engaging and insightful. They explain complex concepts in an easy way and encourage students to ask questions and think critically. The friendly class atmosphere has boosted my son's confidence and interest in coding.",
    avatarUrl: 'https://picsum.photos/150/150?random=14',
    course: CourseType.CODING,
    color: 'bg-orange-300'
  },
  {
    id: '15',
    name: 'Vineeta Shyamsukha',
    role: 'Parent',
    text: "Very good classes. Makes learning very easy and interactive.",
    avatarUrl: 'https://picsum.photos/150/150?random=15',
    course: CourseType.CODING,
    color: 'bg-green-300'
  },
  {
    id: '16',
    name: 'Aarav Sharma',
    role: 'Student, Grade 7',
    text: "They don't just teach syntax, they explain WHY things work. I finally understood how loops actually work in memory. Now I can solve any problem without memorizing patterns!",
    avatarUrl: 'https://picsum.photos/150/150?random=16',
    course: CourseType.CODING,
    color: 'bg-pop-yellow'
  },
  {
    id: '17',
    name: 'Mrs. Priya Patel',
    role: 'Parent of Ananya (Grade 3)',
    text: "My daughter used to memorize formulas blindly. Here they derive everything from scratch using real examples. She now understands the logic behind multiplication itself!",
    avatarUrl: 'https://picsum.photos/150/150?random=17',
    course: CourseType.MATH,
    color: 'bg-pop-cyan'
  },
  {
    id: '18',
    name: 'Ishaan Reddy',
    role: 'College Student, B.Tech CSE',
    text: "Best part? They connect coding to real-world scenarios. Learned how Netflix recommendations work while studying algorithms. Concepts stick forever when you understand the 'why'.",
    avatarUrl: 'https://picsum.photos/150/150?random=18',
    course: CourseType.CODING,
    color: 'bg-pop-pink'
  },
  {
    id: '19',
    name: 'Diya Kapoor',
    role: 'Working Professional',
    text: "I tried 3 other platforms before this. Everyone teaches 'what' to code. Only Modern Age Coders taught me 'how it actually works'. The depth is unmatched.",
    avatarUrl: 'https://picsum.photos/150/150?random=19',
    course: CourseType.CODING,
    color: 'bg-pop-purple'
  },
  {
    id: '20',
    name: 'Mr. Rajesh Kumar',
    role: 'Parent of Twins',
    text: "They practice A LOT. Not just 2-3 problems, but 20-30 variations until the concept is crystal clear. My kids can now solve problems they've never seen before.",
    avatarUrl: 'https://picsum.photos/150/150?random=20',
    course: CourseType.CODING,
    color: 'bg-green-300'
  },
  {
    id: '21',
    name: 'Arjun Mehta',
    role: 'Grade 9 Student',
    text: "Sir explained calculus using a car's speedometer! Suddenly derivatives made perfect sense. No rote learning, just pure understanding. Scored 98% in math!",
    avatarUrl: 'https://picsum.photos/150/150?random=21',
    course: CourseType.MATH,
    color: 'bg-orange-300'
  },
  {
    id: '22',
    name: 'Kavya Iyer',
    role: 'Teen, Grade 11',
    text: "They break down complex topics into simple building blocks. Recursion used to scare me. Now I can explain it to my friends! The practice problems are gold.",
    avatarUrl: 'https://picsum.photos/150/150?random=22',
    course: CourseType.CODING,
    color: 'bg-pop-yellow'
  },
  {
    id: '23',
    name: 'Sanjay Deshmukh',
    role: 'Working Professional',
    text: "Every concept is derived from first principles. They showed me how JavaScript works under the hood. I'm not just coding anymore, I'm engineering solutions.",
    avatarUrl: 'https://picsum.photos/150/150?random=23',
    course: CourseType.CODING,
    color: 'bg-pop-cyan'
  },
  {
    id: '24',
    name: 'Riya Gupta',
    role: 'Kid, Grade 4',
    text: "Ma'am uses toys and drawings to teach fractions! I understood why 1/2 is bigger than 1/4 by cutting a pizza. Math is so easy when you see it in real life!",
    avatarUrl: 'https://picsum.photos/150/150?random=24',
    course: CourseType.MATH,
    color: 'bg-pop-pink'
  },
  {
    id: '25',
    name: 'Aditya Singh',
    role: 'College Student, BCA',
    text: "The amount of hands-on practice is insane. Built 15+ projects in 3 months. Each one taught me something new. Theory + Practice = Perfect combination.",
    avatarUrl: 'https://picsum.photos/150/150?random=25',
    course: CourseType.CODING,
    color: 'bg-pop-purple'
  },
  {
    id: '26',
    name: 'Neha Desai',
    role: 'Grade 6 Student',
    text: "They don't give us shortcuts, they teach us the actual logic. Now I can solve any type of problem because I understand how things work from the basics!",
    avatarUrl: 'https://picsum.photos/150/150?random=26',
    course: CourseType.MATH,
    color: 'bg-pop-yellow'
  },
  {
    id: '27',
    name: 'Vikram Joshi',
    role: 'Working Professional',
    text: "Finally found a place that teaches depth, not breadth. They explained how databases work at the storage level. This is education, not just training.",
    avatarUrl: 'https://picsum.photos/150/150?random=27',
    course: CourseType.CODING,
    color: 'bg-pop-cyan'
  },
  {
    id: '28',
    name: 'Ananya Verma',
    role: 'Grade 8 Student',
    text: "I used to hate algebra because I never understood WHY we do it. Here, they showed me how equations represent real-life situations. Now I can visualize every problem and solve it easily. Math finally makes sense!",
    avatarUrl: 'https://picsum.photos/150/150?random=28',
    course: CourseType.MATH,
    color: 'bg-pop-pink'
  },
  {
    id: '29',
    name: 'Rohan Kapoor',
    role: 'Grade 10 Student',
    text: "They don't just teach formulas—they derive them from scratch! I learned WHERE the quadratic formula comes from. Once you understand the 'why', you never forget. My board exam score jumped from 65% to 92%!",
    avatarUrl: 'https://picsum.photos/150/150?random=29',
    course: CourseType.MATH,
    color: 'bg-orange-300'
  },
  {
    id: '30',
    name: 'Mrs. Meera Jain',
    role: 'Parent of Aadhya (Grade 5)',
    text: "My daughter used to memorize multiplication tables without understanding. Now she knows WHY 7×8=56 by visualizing arrays and groups. She can solve any variation because she understands the concept deeply. No more rote learning!",
    avatarUrl: 'https://picsum.photos/150/150?random=30',
    course: CourseType.MATH,
    color: 'bg-pop-cyan'
  },
  {
    id: '31',
    name: 'Tanvi Sharma',
    role: 'Grade 12 Student',
    text: "Calculus was a nightmare until I joined here. They explained derivatives using real motion—how speed changes over time. Integration became about finding areas, not just formulas. I scored 98% in my boards because I understood every concept from the root!",
    avatarUrl: 'https://picsum.photos/150/150?random=31',
    course: CourseType.MATH,
    color: 'bg-pop-yellow'
  },
  {
    id: '32',
    name: 'Arnav Gupta',
    role: 'Grade 7 Student',
    text: "Sir taught me fractions using pizza slices and chocolate bars! I finally understood why 3/4 is bigger than 2/3. Now I can compare any fractions in my head without formulas. Math is fun when you see it in real life!",
    avatarUrl: 'https://picsum.photos/150/150?random=32',
    course: CourseType.MATH,
    color: 'bg-green-300'
  },
  {
    id: '33',
    name: 'Priya Malhotra',
    role: 'Grade 11 Student',
    text: "Trigonometry made zero sense until they showed me how it works with actual triangles and circles. They explained WHY sin²θ + cos²θ = 1 using geometry. Once I saw the proof, I never forgot it. This is how math should be taught!",
    avatarUrl: 'https://picsum.photos/150/150?random=33',
    course: CourseType.MATH,
    color: 'bg-pop-purple'
  },
  {
    id: '34',
    name: 'Mr. Suresh Patel',
    role: 'Parent of Vihaan (Grade 6)',
    text: "My son struggled with percentages and ratios. The teachers here explained it using money, discounts, and recipes—real things he sees daily. Now he calculates discounts faster than me! Understanding the 'how' and 'why' changed everything.",
    avatarUrl: 'https://picsum.photos/150/150?random=34',
    course: CourseType.MATH,
    color: 'bg-pop-pink'
  },
  {
    id: '35',
    name: 'Ishita Reddy',
    role: 'Grade 9 Student',
    text: "They derive every formula from basic principles. I learned why (a+b)² = a² + 2ab + b² by actually drawing squares and rectangles. Visual proofs make concepts stick forever. I never need to memorize—I just understand!",
    avatarUrl: 'https://picsum.photos/150/150?random=35',
    course: CourseType.MATH,
    color: 'bg-orange-300'
  },
  {
    id: '36',
    name: 'Kabir Singh',
    role: 'Grade 4 Student',
    text: "Ma'am taught me division using sharing candies among friends. Now I know WHY we divide and what remainders mean. Math is not scary anymore—it's just solving real problems!",
    avatarUrl: 'https://picsum.photos/150/150?random=36',
    course: CourseType.MATH,
    color: 'bg-pop-cyan'
  },
  {
    id: '37',
    name: 'Diya Agarwal',
    role: 'College Student, B.Sc Math',
    text: "Even in college, I had gaps in understanding. They filled those gaps by going back to fundamentals. They showed me the 'why' behind limits, continuity, and differentiation. Now advanced topics make perfect sense because my foundation is rock solid!",
    avatarUrl: 'https://picsum.photos/150/150?random=37',
    course: CourseType.MATH,
    color: 'bg-pop-yellow'
  }
];

export const VIDEO_REVIEWS: VideoReview[] = [
  {
    id: 'v1',
    youtubeId: 'U7vTcMULDY8',
    title: 'Pure Love & Joy',
    author: 'Modern Age Coders',
    duration: '2:30'
  },
  {
    id: 'v2',
    youtubeId: 'GhoF3-d-92E',
    title: 'Honest Feelings',
    author: 'Modern Age Coders',
    duration: '1:45'
  },
  {
    id: 'v3',
    youtubeId: 'Up6S920LyRs',
    title: 'Life Changing Moments',
    author: 'Modern Age Coders',
    duration: '4:10'
  },
  {
    id: 'v4',
    youtubeId: 'j-eaIPbSksc',
    title: 'Proud & Happy',
    author: 'Modern Age Coders',
    duration: '3:05'
  },
  {
    id: 'v5',
    youtubeId: '5hgvxieimTM',
    title: 'Sweet Memories',
    author: 'Modern Age Coders',
    duration: '2:15'
  },
  {
    id: 'v6',
    youtubeId: 'v9pNat8vY9M',
    title: 'Heartfelt Stories',
    author: 'Modern Age Coders',
    duration: '3:20'
  },
  {
    id: 'v7',
    youtubeId: '7Y4qFO1VwKc',
    title: 'Genuine Smiles',
    author: 'Modern Age Coders',
    duration: '2:45'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    imageUrl: 'https://picsum.photos/400/500?random=20',
    caption: 'My First Website! 💻',
    studentName: 'Vihaan, Grade 5',
    rotation: -2
  },
  {
    id: 'g2',
    imageUrl: 'https://picsum.photos/400/500?random=21',
    caption: 'Winning the Hackathon 🏆',
    studentName: 'Team CodeNinjas',
    rotation: 3
  },
  {
    id: 'g3',
    imageUrl: 'https://picsum.photos/400/500?random=22',
    caption: 'Late night coding vibes 💻',
    studentName: 'Shreya',
    rotation: -1
  },
  {
    id: 'g4',
    imageUrl: 'https://picsum.photos/400/500?random=23',
    caption: 'Math is easy peasy 🍋',
    studentName: 'Arnav & Papa',
    rotation: 4
  },
  {
    id: 'g5',
    imageUrl: 'https://picsum.photos/400/500?random=24',
    caption: 'Look at my Python project!',
    studentName: 'Myra',
    rotation: -3
  },
  {
    id: 'g6',
    imageUrl: 'https://picsum.photos/400/500?random=25',
    caption: 'Graduation Day! 🎓',
    studentName: 'Batch 2024',
    rotation: 2
  }
];

export const MEETUP_MEDIA: MediaItem[] = [
  {
    id: 'mm1',
    type: 'image' as const,
    url: '/images/meetup1.jpg',
    title: 'Code, Laugh, Repeat!',
    date: '',
    emoji: '💻',
    rotation: -2
  },
  {
    id: 'mm2',
    type: 'youtube' as const,
    url: '',
    youtubeId: 'aS7OiqZMY2k',
    title: 'Pure Energy & Vibes',
    date: '',
    emoji: '🍕',
    rotation: 1
  },
  {
    id: 'mm3',
    type: 'image' as const,
    url: '/images/meetup2.jpg',
    title: 'Squad Goals Unlocked',
    date: '',
    emoji: '📸',
    rotation: -1
  },
  {
    id: 'mm4',
    type: 'image' as const,
    url: '/images/meetup3.jpg',
    title: 'When Coders Unite',
    date: '',
    emoji: '🎯',
    rotation: 2
  },
  {
    id: 'mm5',
    type: 'youtube' as const,
    url: '',
    youtubeId: 'Jd3pR6wEts4',
    title: 'Awesome Show Time',
    date: '',
    emoji: '🎮',
    rotation: 1
  },
  {
    id: 'mm6',
    type: 'image' as const,
    url: '/images/meetup4.jpg',
    title: 'Sparks of Brilliance',
    date: '',
    emoji: '🎆',
    rotation: -3
  },
  {
    id: 'mm7',
    type: 'image' as const,
    url: '/images/meetup5.jpg',
    title: 'Together We Code',
    date: '',
    emoji: '🤝',
    rotation: 1
  },
  {
    id: 'mm8',
    type: 'youtube' as const,
    url: '',
    youtubeId: '1KnAiUF3qCQ',
    title: 'Excitement Overload',
    date: '',
    emoji: '🏆',
    rotation: -1
  },
  {
    id: 'mm9',
    type: 'image' as const,
    url: '/images/meetup6.jpg',
    title: 'Celebration Mode ON',
    date: '',
    emoji: '🎈',
    rotation: -2
  },
  {
    id: 'mm10',
    type: 'image' as const,
    url: '/images/meetup7.jpg',
    title: 'Champions in Action',
    date: '',
    emoji: '🏆',
    rotation: 2
  },
  {
    id: 'mm11',
    type: 'youtube' as const,
    url: '',
    youtubeId: '462vLyIZxTg',
    title: 'Behind the Magic',
    date: '',
    emoji: '🎬',
    rotation: -1
  },
  {
    id: 'mm12',
    type: 'image' as const,
    url: '/images/meetup8.jpg',
    title: 'Pizza & Passion',
    date: '',
    emoji: '🍕',
    rotation: 1
  },
  {
    id: 'mm13',
    type: 'image' as const,
    url: '/images/meetup9.jpg',
    title: 'Learning with Love',
    date: '',
    emoji: '📚',
    rotation: -2
  },
  {
    id: 'mm14',
    type: 'image' as const,
    url: '/images/meetup10.jpg',
    title: 'Sunshine & Smiles',
    date: '',
    emoji: '☀️',
    rotation: 2
  },
  {
    id: 'mm15',
    type: 'image' as const,
    url: '/images/meetup11.jpg',
    title: 'Ideas Come Alive',
    date: '',
    emoji: '💡',
    rotation: -1
  },
  {
    id: 'mm16',
    type: 'image' as const,
    url: '/images/meetup12.jpg',
    title: 'Ready for Takeoff',
    date: '',
    emoji: '🚀',
    rotation: 1
  },
  {
    id: 'mm17',
    type: 'image' as const,
    url: '/images/meetup13.jpg',
    title: 'Adventure Awaits',
    date: '',
    emoji: '⛺',
    rotation: -2
  },
  {
    id: 'mm18',
    type: 'image' as const,
    url: '/images/meetup14.jpg',
    title: 'Victory Feels Good',
    date: '',
    emoji: '🎖️',
    rotation: 2
  },
  {
    id: 'mm19',
    type: 'image' as const,
    url: '/images/meetup15.jpg',
    title: 'Stronger Together',
    date: '',
    emoji: '💪',
    rotation: -1
  }
];

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: 'c1',
    type: 'image',
    studentName: 'Dreams Achieved',
    course: 'Hard Work Pays Off',
    imageUrl: '/images/graduation1.png'
  },
  {
    id: 'c2',
    type: 'image',
    studentName: 'Success Unlocked',
    course: 'Journey Complete',
    imageUrl: '/images/graduation2.png'
  },
  {
    id: 'c3',
    type: 'youtube',
    studentName: 'Heartfelt Moments',
    course: 'Pure Joy',
    youtubeId: 'X0aFdJl269M'
  },
  {
    id: 'c4',
    type: 'image',
    studentName: 'Victory Earned',
    course: 'Never Give Up',
    imageUrl: '/images/graduation3.png'
  },
  {
    id: 'c5',
    type: 'image',
    studentName: 'Champion Mindset',
    course: 'Excellence Achieved',
    imageUrl: '/images/graduation4.png'
  },
  {
    id: 'c6',
    type: 'image',
    studentName: 'Future Ready',
    course: 'Skills Mastered',
    imageUrl: '/images/graduation5.jpg'
  },
  {
    id: 'c7',
    type: 'youtube',
    studentName: 'Rising Stars',
    course: 'Limitless Energy',
    youtubeId: 'WbnIfJXDPVU'
  },
  {
    id: 'c8',
    type: 'image',
    studentName: 'Bright Future Ahead',
    course: 'Goals Achieved',
    imageUrl: '/images/graduation6.png'
  },
  {
    id: 'c9',
    type: 'image',
    studentName: 'Milestone Reached',
    course: 'Determination Wins',
    imageUrl: '/images/graduation7.png'
  },
  {
    id: 'c10',
    type: 'youtube',
    studentName: 'Unstoppable Spirit',
    course: 'Passion & Pride',
    youtubeId: '6X8W087UMGQ'
  }
];


export const NAV_LINKS = [
  { name: 'Courses', href: '#' },
  { name: 'Mentors', href: '#' },
  { name: 'Adventures', href: '#adventures' },
  { name: 'Love', href: '#', active: true },
  { name: 'Pricing', href: '#' },
];