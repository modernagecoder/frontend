import { CourseType, Testimonial, VideoReview, GalleryItem, Certificate } from './types';
import { MediaItem } from './components/MediaSlider';

export const TESTIMONIALS: Testimonial[
] = [
  {
    id: '1',
    name: 'Sonam Oswal',
    role: 'Parent of Dhairya',
    text: "My child Dhairya is really enjoying the Modern Age Coder IT classes. This is his first online class, and he eagerly looks forward to it. I can see his improvement, and I believe he will grow even more interested in the subject. The teachers are very cooperative and listen to our suggestions. Overall, I am very happy with the class.",
    avatarUrl: 'https://picsum.photos/150/150?random=1',
    course: CourseType.CODING,
    color: 'bg-pop-yellow'
  },
,
  {
    id: '2',
    name: 'Samriddha Mondal',
    role: 'Student',
    text: "Modern Age Coders has been a game-changer for me! I struggled to grasp IT concepts and coding before joining, but their classes transformed everything. I'm now the topper in my class and can confidently write complex programs with ease.",
    avatarUrl: 'https://picsum.photos/150/150?random=2',
    course: CourseType.CODING,
    color: 'bg-pop-pink'
  },
,
  {
    id: '3',
    name: 'Poonam Rathore',
    role: 'Parent',
    text: "My son has been attending this coding class for the past couple of months, and I've been genuinely impressed with both his progress and enthusiasm. The instructors are incredibly patient and knowledgeable. What stands out most is how excited my son is before every class—he looks forward to learning, problem-solving, and sharing what he's built. I've noticed a big boost in his confidence!",
    avatarUrl: 'https://picsum.photos/150/150?random=3',
    course: CourseType.CODING,
    color: 'bg-pop-cyan'
  },
,
  {
    id: '4',
    name: 'Krishnam Bhatter',
    role: 'Former Student',
    text: "I'm truly grateful for my experience at Modern Age Coders! The teaching approach of my legendary teachers—Shivam Sir, Mihir Sir and Sonu Sir—is extraordinary. They were not only my teachers but also mentors and friendly figures. The fee is remarkably reasonable and the perks are mind-blowing—one-on-one doubt solving, mentoring, and regular tests. The most impressive part was working on real-world projects.",
    avatarUrl: 'https://picsum.photos/150/150?random=4',
    course: CourseType.CODING,
    color: 'bg-pop-purple'
  },
,
  {
    id: '5',
    name: 'Yug Rathore',
    role: 'Student',
    text: "I absolutely love it here! I made new friends and learned important valuable coding skills while having the fun of my life. It's not just coding here, it's outings, bonding and most importantly preparing you for your future. Definitely five stars.",
    avatarUrl: 'https://picsum.photos/150/150?random=5',
    course: CourseType.CODING,
    color: 'bg-green-300'
  },
,
  {
    id: '6',
    name: 'Ria Mukherjee',
    role: 'Parent',
    text: "The one step solution for my son. Modern Age Coders make learning coding so simple that kids love it. Teachers make it so simple with clear explanations, practical exercises, and interactive content. As per my son, the coding class is very helpful and engaging. Sir explains complex concepts clearly. The projects were challenging and rewarding.",
    avatarUrl: 'https://picsum.photos/150/150?random=6',
    course: CourseType.CODING,
    color: 'bg-orange-300'
  },
,
  {
    id: '7',
    name: 'Pragyen Diwan',
    role: 'Parent',
    text: "The classes are excellent. The teachers explain concepts very clearly and make code fun and easy to understand. The sessions are interactive and fun. They also help students boost their confidence. We not only focus on academics, but also on logic building and problem solving.",
    avatarUrl: 'https://picsum.photos/150/150?random=7',
    course: CourseType.CODING,
    color: 'bg-pop-yellow'
  },
,
  {
    id: '8',
    name: 'Sonu Goyal',
    role: 'Parent',
    text: "Modern Age Coder have wonderful teachers who teach in a clear, easy and practical way. The teacher boosts students' confidence, keeps them updated with technology, and inspires them to learn without hesitation.",
    avatarUrl: 'https://picsum.photos/150/150?random=8',
    course: CourseType.CODING,
    color: 'bg-pop-cyan'
  },
,
  {
    id: '9',
    name: 'Arush Poddar',
    role: 'Student',
    text: "Coding classes here make learning very interesting and conceptual. The teachers teach us in a very easy-to-understand and efficient manner.",
    avatarUrl: 'https://picsum.photos/150/150?random=9',
    course: CourseType.CODING,
    color: 'bg-pop-pink'
  },
,
  {
    id: '10',
    name: 'Sujal Ramola',
    role: 'Student',
    text: "I am really glad to be a part of Modern Age Coders as it helped me a lot to know what coding means and helped me find myself. I thank Shreya Ma'am, Mihir Sir and Shivam Sir for always being there for me and for showing me the real path for success.",
    avatarUrl: 'https://picsum.photos/150/150?random=10',
    course: CourseType.CODING,
    color: 'bg-pop-purple'
  },
,
  {
    id: '11',
    name: 'Shradha Saraf',
    role: 'Parent of Mivaan',
    text: "Mivaan enjoys the class. He understands the concepts and completes his tasks with excitement. He started taking interest in coding… truly amazing class.",
    avatarUrl: 'https://picsum.photos/150/150?random=11',
    course: CourseType.CODING,
    color: 'bg-pop-yellow'
  },
,
  {
    id: '12',
    name: 'Vansh Agarwal',
    role: 'Student',
    text: "One of the most wonderful education centres out there. Education is not limited to school syllabus but focuses on skill development. Learning here has been a wonderful journey and still continuing.",
    avatarUrl: 'https://picsum.photos/150/150?random=12',
    course: CourseType.CODING,
    color: 'bg-pop-cyan'
  },
,
  {
    id: '13',
    name: 'Shaarav Wadhwa',
    role: 'Student',
    text: "Very good classes. Don't worry about coding—they teach the best, especially Shivam sir.",
    avatarUrl: 'https://picsum.photos/150/150?random=13',
    course: CourseType.CODING,
    color: 'bg-pop-pink'
  },
,
  {
    id: '14',
    name: 'Ritu Kedia',
    role: 'Parent',
    text: "I highly recommend this computer coding class! The teachers are incredibly knowledgeable and passionate about coding. They make every session engaging and insightful. They explain complex concepts in an easy way and encourage students to ask questions and think critically. The friendly class atmosphere has boosted my son's confidence and interest in coding.",
    avatarUrl: 'https://picsum.photos/150/150?random=14',
    course: CourseType.CODING,
    color: 'bg-orange-300'
  },
,
  {
    id: '15',
    name: 'Vineeta Shyamsukha',
    role: 'Parent',
    text: "Very good classes. Makes learning very easy and interactive.",
    avatarUrl: 'https://picsum.photos/150/150?random=15',
    course: CourseType.CODING,
    color: 'bg-green-300'
  }

];

export const VIDEO_REVIEWS: VideoReview[] = [
  {
    id: 'v1',
    youtubeId: 'U7vTcMULDY8',
    title: 'Pure Love & Joy',
    author: 'Modern Age Coders',
    duration: '0:31'
  },
  {
    id: 'v2',
    youtubeId: 'GhoF3-d-92E',
    title: 'Honest Feelings',
    author: 'Modern Age Coders',
    duration: '0:59'
  },
  {
    id: 'v3',
    youtubeId: 'Up6S920LyRs',
    title: 'Life Changing Moments',
    author: 'Modern Age Coders',
    duration: '0:48'
  },
  {
    id: 'v4',
    youtubeId: 'j-eaIPbSksc',
    title: 'Proud & Happy',
    author: 'Modern Age Coders',
    duration: '0:51'
  },
  {
    id: 'v5',
    youtubeId: '5hgvxieimTM',
    title: 'Sweet Memories',
    author: 'Modern Age Coders',
    duration: '0:53'
  },
  {
    id: 'v6',
    youtubeId: 'v9pNat8vY9M',
    title: 'Heartfelt Stories',
    author: 'Modern Age Coders',
    duration: '1:00'
  },
  {
    id: 'v7',
    youtubeId: '7Y4qFO1VwKc',
    title: 'Genuine Smiles',
    author: 'Modern Age Coders',
    duration: '0:47'
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