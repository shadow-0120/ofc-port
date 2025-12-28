export const projectsData = [
    {
        id: 'realtime-chat',
        title: 'Realtime Chat App',
        shortDescription: 'An end-to-end encrypted, ephemeral chat application built for speed, privacy, and reliability—leveraging Redis for high-performance caching and Upstash for secure, persistent message storage.',
        fullDescription: `This application is a modern, privacy-first chat platform designed to deliver secure, real-time communication with a strong focus on performance and data protection. All conversations are protected with end-to-end encryption, ensuring that only the intended participants can read the messages—no third parties, including the platform itself, can access message content.

The app supports ephemeral messaging, allowing messages to automatically expire and disappear after a defined period. This feature enhances user privacy by reducing long-term data exposure and giving users full control over how long their conversations exist.

To achieve fast and scalable real-time performance, the application uses Redis as a caching layer. Redis enables low-latency message delivery, efficient session management, and smooth real-time interactions even under high traffic.

For durable and reliable storage, Upstash is used to permanently store messages and critical data when persistence is required. This combination of Redis and Upstash ensures both speed and reliability, balancing in-memory performance with secure, long-term data storage.

Overall, this chat app is built to be secure, scalable, and privacy-focused, making it ideal for users who value confidentiality, responsiveness, and modern messaging experiences.`,
        image: '/images/realtime/realtime.png',
        techUsed: ['NextJS','TailwindCSS', 'Redis', 'Upstach', 'ElysiaJS', 'Zod'],
        sourceLink: 'https://github.com/shadow-0120/realtime',
        liveLink: ' https://realtime-mu.vercel.app ' , 
        gallery: [
            '/images/realtime/realtime.png',
            '/images/realtime/realtime-1.png',
            '/images/realtime/realtime-2.png',
        ],
        features : [
            'End-to-End Encryption – Messages are fully encrypted so only participants can read them',
            'Ephemeral Messaging – Messages automatically expire and disappear after a set time',
            'Real-Time Chat – Instant message delivery with low latency',
            'High Performance – Redis-powered caching for fast message handling and sessions',
            'Smart Caching Layer – Efficient data caching to reduce database load',
            'Scalable Architecture – Designed to handle growing users and traffic'
        ],
        date: '2026',
        category: 'Web App',
    },
    {
        id: 'wamda-book',
        title : 'Wamda Book',
        shortDescription : 'An online platform for book enthusiasts to discover, review, and share their favorite reads.',
        fullDescription : 'Wamda Book is a comprehensive web application that allows users to explore a vast collection of books across various genres. Users can read and write reviews, create personalized reading lists, and connect with other book lovers. The platform features advanced search and filtering options, making it easy to find books based on user preferences.',
        image : '/images/wamda/1.png',
        techUsed : ['React', 'Node.js', 'MongoDB', 'ExpressJS', 'CSS3'],
        sourceLink : 'https://github.com',
        liveLink : 'https://wamdabook.vercel.app',
        gallery: [
            '/images/wamda/1.png',
            '/images/wamda/2.png',
            '/images/wamda/3.png',
            '/images/wamda/4.png',
            '/images/wamda/5.png',
        ],
        features : [
            'User Authentication',
            'Book Reviews and Ratings',
            'Personalized Reading Lists',
            'Social Sharing Features',
            'Advanced Search and Filtering',
            'Abiltiy to change shipping prices'
        ],
        date: '2025',
        category : 'Web App'
    },
    {
        id: 'joker-club',
        title: 'Joker Club',
        shortDescription: 'A premium entertainment platform for exclusive members.',
        fullDescription: 'An innovative platform with advanced features, real-time multiplayer capabilities, and immersive user experience. Built with cutting-edge technologies to provide seamless gaming experiences for players worldwide.',
        image: '/images/joker/joker.png',
        techUsed: ['React', 'Framer Motion', 'Tailwind CSS', 'Firebase'],
        sourceLink: 'https://github.com',
        liveLink: 'https://jokeresgen.com',
        gallery: [
            '/images/joker/joker1.png',
            '/images/joker/joker2.png',
            '/images/joker/joker5.png',
            '/images/joker/joker4.png'
        ],
        features: [
            'Exclusive Member Access',
            'Real-time Event Booking',
            'Premium dark mode UI',
            'Community forums'
        ],
        date: '2025',
        category : 'Web App'
    },
    {
        id: 'database-management',
        title: 'Database Management System',
        shortDescription: 'This project how admin can menage their members by adding using CRUD , and add tasks for each member..',
        fullDescription: 'Database Management System project that allows the admin to manage members efficiently. You can add, edit, or delete members from the Members tab. In the Tasks tab, you can assign multiple tasks to any member. You can also schedule meetings and generate attendance reports to see who was present or absent. The cool part is the leaderboard feature, which ranks members based on their attendance and completed tasks.',
        image: '/images/database/database.png',
        techUsed: ['Next-Js', 'TailwindCSS', 'MongoDB', 'Node.js','ExpressJS','Re-charts','tankstack','UIUX'],
        sourceLink: 'https://github.com/shadow-0120/members',
        liveLink: 'https://members-henna.vercel.app/',
        gallery: [
           '/images/system/1.jpeg',
           '/images/system/2.jpeg',
           '/images/system/3.jpeg',
           '/images/system/4.jpeg',
           '/images/system/5.jpeg',
           '/images/system/6.jpeg',
        ],
        features: [
            'Modern UIUX',
            'Firebase Authentication',
            'Login / Sign Out',
            'Management System'
        ],
        date: '2025',
        category : 'Database App'
    },
    {
        id: 'Econmic Calculator App',
        title: 'Economic Calculator App',
        shortDescription: 'A web-based economic calculator for financial analysis and decision-making.',
        fullDescription: 'The Economic Calculator App is a powerful web application designed to assist users in performing various economic calculations. It features a user-friendly interface that allows users to input data and receive instant results for calculations such as present value, future value, net present value, and internal rate of return. The app is built using modern web technologies to ensure responsiveness and ease of use across different devices.',
        image: '/images/calculate/clacul-2.png',
        techUsed: ['React', 'Chakra UI', 'JavaScript'],
        sourceLink: 'https://github.com/shaodw-0120/calculate',
        liveLink: 'https://ammortisment.vercel.app/',
        gallery: [
            '/images/calculate/calcul-1.png',
            '/images/calculate/clacul-2.png',
            '/images/calculate/clacul-3.png',
            '/images/calculate/calcul-4.jpeg',
        ],
        date: '2024',
        category : 'Calculator App'
    },
    {
        id: 'sbs-school',
        title: 'SBS School Management',
        shortDescription: 'Comprehensive school management and tracking platform.',
        fullDescription: 'A complete digital solution for educational institutions to manage student records, academic performance, and parent-teacher communication. Features secure portals for different user roles and real-time grade tracking.',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop',
        techUsed: ['React', 'Node.js', 'PostgreSQL', 'Redux'],
        sourceLink: 'https://github.com/',
        liveLink: 'https://sbsschool-lilac.vercel.app/',
        gallery: [
            '/images/sbs/sbs1.png',
            '/images/sbs/sbs2.png',
            '/images/sbs/sbs3.png',
            '/images/sbs/sbs4.png',
            '/images/sbs/sbs5.png',
            '/images/sbs/sbs6.png',
            '/images/sbs/sbs7.png',
            '/images/sbs/sbs8.png',
            '/images/sbs/sbs9.png'
        ],
        features: [
            'Student Grade Tracking',
            'Teacher Portals',
            'Attendance System',
            'Direct Messaging'
        ],
        date: '2023',
        category : 'Learning Platform'
    },
    {
        id: 'kahina-hotel',
        title: 'Kahina Hotel System',
        shortDescription: 'Modern booking and guest services management.',
        fullDescription: 'A streamlined hotel management system designed to simplify booking processes, room management, and guest services. Includes a beautiful booking engine and backend admin dashboard.',
        image: '/images/kahina-hotel/kahina.png',
        techUsed: ['Next.js', 'Supabase', 'Tailwind', 'Stripe'],
        sourceLink: 'https://github.com/shadow-0120/kahina',
        liveLink: 'https://kahina-vert.vercel.app',
        gallery: [
            '/images/kahina-hotel/kahina.png',
            '/images/kahina-hotel/kahina2.png',
            '/images/kahina-hotel/kahina1.png',
        ],
        features: [
            'Online Booking Engine',
            'Room Availability Calendar',
            'Guest CRM',
            'Payment Integration'
        ],
        date: '2022',
        category : 'Landing Page'
    }
];
