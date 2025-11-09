/**
 * Student Projects Data
 * Add your student projects here
 */

console.log('[Student Projects Data] Loading...');

const studentProjects = [
    {
        id: 1,
        title: "AI Chatbot Assistant",
        student: "Aryan Sharma",
        category: "ai",
        description: "An intelligent chatbot powered by machine learning that can answer questions and help with homework.",
        tags: ["Python", "TensorFlow", "NLP", "Flask"],
        image: "/images/projects/ai-chatbot.jpg", // Add your image path
        link: "https://example.com/ai-chatbot", // Add actual project link
        featured: true
    },
    {
        id: 2,
        title: "E-Commerce Website",
        student: "Priya Patel",
        category: "web",
        description: "A fully functional online shopping platform with cart, payment integration, and user authentication.",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "/images/projects/ecommerce.jpg",
        link: "https://example.com/ecommerce",
        featured: true
    },
    {
        id: 3,
        title: "Space Shooter Game",
        student: "Rohan Kumar",
        category: "game",
        description: "An exciting 2D space shooter game with multiple levels, power-ups, and boss battles.",
        tags: ["Unity", "C#", "Game Design"],
        image: "/images/projects/space-game.jpg",
        link: "https://example.com/space-game",
        featured: false
    },
    {
        id: 4,
        title: "Weather Forecast App",
        student: "Ananya Singh",
        category: "mobile",
        description: "A beautiful weather app that provides real-time forecasts with stunning animations.",
        tags: ["React Native", "API Integration", "UI/UX"],
        image: "/images/projects/weather-app.jpg",
        link: "https://example.com/weather-app",
        featured: false
    },
    {
        id: 5,
        title: "Portfolio Website",
        student: "Vikram Reddy",
        category: "web",
        description: "A stunning personal portfolio showcasing projects with smooth animations and modern design.",
        tags: ["HTML", "CSS", "JavaScript", "GSAP"],
        image: "/images/projects/portfolio.jpg",
        link: "https://example.com/portfolio",
        featured: false
    },
    {
        id: 6,
        title: "Image Recognition System",
        student: "Sneha Gupta",
        category: "ai",
        description: "An AI system that can identify objects in images with high accuracy using deep learning.",
        tags: ["Python", "OpenCV", "CNN", "Keras"],
        image: "/images/projects/image-recognition.jpg",
        link: "https://example.com/image-recognition",
        featured: true
    },
    {
        id: 7,
        title: "Task Manager App",
        student: "Aditya Verma",
        category: "web",
        description: "A productivity app to manage tasks, set reminders, and track progress with a clean interface.",
        tags: ["Vue.js", "Firebase", "PWA"],
        image: "/images/projects/task-manager.jpg",
        link: "https://example.com/task-manager",
        featured: false
    },
    {
        id: 8,
        title: "Fitness Tracker",
        student: "Ishita Joshi",
        category: "mobile",
        description: "Track your workouts, calories, and fitness goals with this comprehensive health app.",
        tags: ["Flutter", "Dart", "SQLite"],
        image: "/images/projects/fitness-tracker.jpg",
        link: "https://example.com/fitness-tracker",
        featured: false
    },
    {
        id: 9,
        title: "Puzzle Adventure Game",
        student: "Karan Mehta",
        category: "game",
        description: "A brain-teasing puzzle game with challenging levels and beautiful graphics.",
        tags: ["Godot", "GDScript", "Level Design"],
        image: "/images/projects/puzzle-game.jpg",
        link: "https://example.com/puzzle-game",
        featured: false
    },
    {
        id: 10,
        title: "Social Media Dashboard",
        student: "Riya Kapoor",
        category: "web",
        description: "A comprehensive dashboard to manage multiple social media accounts in one place.",
        tags: ["React", "Redux", "Chart.js", "API"],
        image: "/images/projects/social-dashboard.jpg",
        link: "https://example.com/social-dashboard",
        featured: true
    },
    {
        id: 11,
        title: "Voice Assistant",
        student: "Siddharth Rao",
        category: "ai",
        description: "A voice-controlled assistant that can perform tasks, answer questions, and control smart devices.",
        tags: ["Python", "Speech Recognition", "AI"],
        image: "/images/projects/voice-assistant.jpg",
        link: "https://example.com/voice-assistant",
        featured: false
    },
    {
        id: 12,
        title: "Recipe Finder App",
        student: "Meera Nair",
        category: "mobile",
        description: "Find delicious recipes based on ingredients you have at home with this smart app.",
        tags: ["React Native", "API", "Firebase"],
        image: "/images/projects/recipe-app.jpg",
        link: "https://example.com/recipe-app",
        featured: false
    }
];

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = studentProjects;
}

console.log('[Student Projects Data] Loaded', studentProjects.length, 'projects');
console.log('[Student Projects Data] Sample project:', studentProjects[0]);
