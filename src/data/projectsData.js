
export const projectsData =[
 
    {
        id: 'wamda-book',
        title : 'Wamda Book',
        shortDescription : 'An online platform for book enthusiasts to discover, review, and share their favorite reads.',
        fullDescription : 'Wamda Book is a comprehensive web application that allows users to explore a vast collection of books across various genres. Users can read and write reviews, create personalized reading lists, and connect with other book lovers. The platform features advanced search and filtering options, making it easy to find books based on user preferences.',
        image : '/public/images/wamda/1.png',
        techUsed : ['React', 'Node.js', 'MongoDB', 'ExpressJS', 'CSS3'],
        sourceLink : 'https://github.com',
        liveLink : 'https://wamdabook.vercel.app',
        gallery: [
            '/public/images/wamda/1.png',
            '/public/images/wamda/2.png',
            '/public/images/wamda/3.png',
            '/public/images/wamda/4.png',
            '/public/images/wamda/5.png',
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
        image: '/public/images/joker/joker.png',
        techUsed: ['React', 'Framer Motion', 'Tailwind CSS', 'Firebase'],
        sourceLink: 'https://github.com',
        liveLink: 'https://jokeresgen.com',
        gallery: [
            '/public/images/joker/joker1.png',
            '/public/images/joker/joker2.png',
            '/public/images/joker/joker5.png',
            '/public/images/joker/joker4.png'
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
        image: '/public/images/database/database.png',
        techUsed: ['Next-Js', 'TailwindCSS', 'MongoDB', 'Node.js','ExpressJS','Re-charts','tankstack','UIUX'],
        sourceLink: 'https://github.com/shadow-0120/members',
        liveLink: 'https://members-henna.vercel.app/',
        gallery: [
           '/public/images/system/1.jpeg',
           '/public/images/system/2.jpeg',
           '/public/images/system/3.jpeg',
           '/public/images/system/4.jpeg',
           '/public/images/system/5.jpeg',
           '/public/images/system/6.jpeg',
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
        image: '/public/images/calculate/clacul-2.png',
        techUsed: ['React', 'Chakra UI', 'JavaScript'],
        sourceLink: 'https://github.com/shaodw-0120/calculate',
        liveLink: 'https://ammortisment.vercel.app/',
        gallery: [
            '/public/images/calculate/calcul-1.png',
            '/public/images/calculate/clacul-2.png',
            '/public/images/calculate/clacul-3.png',
            '/public/images/calculate/calcul-4.jpeg',
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
            '/public/images/sbs/sbs1.png',
            '/public/images/sbs/sbs2.png',
            '/public/images/sbs/sbs3.png',
            '/public/images/sbs/sbs4.png',
            '/public/images/sbs/sbs5.png',
            '/public/images/sbs/sbs6.png',
            '/public/images/sbs/sbs7.png',
            '/public/images/sbs/sbs8.png',
            '/public/images/sbs/sbs9.png'
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
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
        techUsed: ['Next.js', 'Supabase', 'Tailwind', 'Stripe'],
        sourceLink: 'https://github.com/shadow-0120/kahina',
        liveLink: 'kahina-vert.vercel.app',
        gallery: [
            '/public/images/kahina-hotel/kahina.png',
            '/public/images/kahina-hotel/kahina2.png',
            '/public/images/kahina-hotel/kahina1.png',
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
