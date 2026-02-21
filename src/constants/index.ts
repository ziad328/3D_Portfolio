export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'StreamFlow - Music Library App',
        desc: 'StreamFlow is a custom-built audio library platform that transforms how your music is managed. With tailored user features like secure track-uploading and editing functionality, it allows listeners to curate diverse personal playlists from a single dashboard.',
        subdesc: 'Built as a dynamic full-stack music streaming app with React.js, Vite, Tailwind CSS, Formik, Node.js and MongoDB, StreamFlow is designed for optimal performance and scalability.',
        href: 'https://stream-flow-ui.vercel.app/',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#1A0B2E',
            border: '0.2px solid #3B1A6B',
            boxShadow: '0px 0px 60px 0px #6B21A84D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'Vite',
                path: '/vite.svg',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/JavaScript.png',
            },
            {
                id: 4,
                name: 'TailwindCSS',
                path: '/assets/tailwindcss.png',
            },
        ],
    },
    {
        title: 'Ding - Advanced Social Media Platform',
        desc: 'Ding is a powerful social networking app that elevates the capabilities of modern community building. As an enhanced version of Facebook, it connects millions of active users simultaneously, ensuring that every interaction is captured instantly and securely.',
        subdesc: 'With Ding, users can experience the future of AI companionship, where they bond with Noro in a responsive 3D environment without any lag, by using Three.js and React.js newest features.',
        href: 'https://ding-gray.vercel.app/',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.svg',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'Vite',
                path: '/vite.svg',
            },
            {
                id: 3,
                name: 'Three.js',
                path: '/assets/Threejs.svg',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
            {
                id: 5,
                name: 'TailwindCSS',
                path: '/assets/tailwindcss.png',
            },
        ],
    },
    {
        title: 'Imaginify - AI Photo Manipulation App',
        desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
        subdesc:
            'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
        href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
        texture: '/textures/project/project5.mp4',
        logo: '/assets/project-logo5.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall: boolean, isMobile: boolean, isTablet: boolean) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: (isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0]) as [number, number, number],
        reactLogoPosition: (isSmall ? [3, 4, 0] : isMobile ? [3, 4, 0] : isTablet ? [7, 2, 0] : [10, 2, 0]) as [number, number, number],
        threeLogoPosition: (isSmall ? [-3, 4, 0] : isMobile ? [-3, 4, 0] : isTablet ? [-7, 2, 0] : [-10, 2, 0]) as [number, number, number],
        threeLogoScale: (isSmall ? 0.015 : isMobile ? 0.015 : 0.02) as number,
        reactLogoScale: (isSmall ? 0.3 : isMobile ? 0.3 : 0.5) as number,
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Framer',
        pos: 'Lead Web Developer',
        duration: '2022 - Present',
        title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
        icon: '/assets/framer.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Figma',
        pos: 'Web Developer',
        duration: '2020 - 2022',
        title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
        icon: '/assets/figma.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Notion',
        pos: 'Junior Web Developer',
        duration: '2019 - 2020',
        title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
        icon: '/assets/notion.svg',
        animation: 'salute',
    },
];