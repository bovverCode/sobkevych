export const menu = [
    {
        title: 'About me',
        href: '/about'
    },
    {
        title: 'Service',
        href: '/service'
    },
    {
        title: 'Experience',
        href: '/experience',
    },
    {
        title: 'Overview & Contact',
        href: '/overview',
    }
];

export const aboutBlockData = {
    title: 'Who am I?))',
    image: './public/ava.jpg',
    text: [
        'My name is Denys and I love to create web applications and resolve customer issues effectievly.',
        "I'm working as web developer already for 6 years. During this time I developed banch of websites, web-applications (I even built UI for GTA server LOL)",
        "I'm in love with React and PHP, these technologies help me to build professional and fast web applications.",
        'So I will be happy to promote, automate, or improve your business!',
    ]
};

export const serviceBlockData = {
    title: 'What I do?',
    items: [
        {
            title: 'Website development',
            image: '/web.png',
            description: 'From scratch to hosted website.',
            list: [
                'Tech documentation',
                'Figma design',
                'React frontend',
                'PHP backend (Drupal, WorderPress, or even custom engine)',
                'Deploy to web host',
                'Basic SEO',
                'Long-term support'
            ]
        },
        {
            title: 'API development',
            image: '/browser.png',
            description: 'API for your application.',
            list: [
                'Tech documentation',
                'REST API, GraphQL',
                'Long-term support'
            ]
        },
        {
            title: 'Something else?',
            image: '/brain.png',
            description: 'Let me know if you require something else.',
        }
    ]
}

export const experienceBlockData = {
    title: 'Where I work?',
    items: [
        {
            title: 'Freelance FullStack Developer',
            image: '/freelance.png',
            description: "I started as a Frontend developer in a small outsource company based in Chernihiv. This job gave me a solid experience in site building.",
            time: {
                from: '16.05.2019',
                to: '10.05.2022'
            },
            list: [
                'HTML',
                'CSS/SCSS',
                'Gulp',
                'JS',
                'WordPress',
                'Pixel perfect sites',
                'Figma/Photoshop',
                'Bootstrap'
            ]
        },
        {
            title: 'Drupal Backend Engineer',
            image: '/gg.png',
            description: "I started here as a Junior Backend engineer. Here I learnt a lot of stuff from Drupal site development to CI/CD basics.",
            time: {
                from: '10.05.2022',
                to: 'Now'
            },
            list: [
                'Drupal',
                'GraphQL API development',
                'Docker basics/DDEV',
                'Postman',
                'Git',
                'Unit/Browser testing',
                'CI/CD basics',
                'Bitbucket pipelines',
                'SQL queries optimization',
                'Perfomance optimization/Profiler',
                'JIRA/Sprint/Poker planning',
                'Contribution to Drupal modules',
                'Organisation of tech meetings',
                'Cooperation with team',
                'Linux basics'
            ]
        }
    ]
}

export const skillBlockData = {
    title: 'Skills',
    items: [
        {
            title: 'Hard skills',
            list: [
                'PHP',
                'HTML/CSS/SCSS/JS',
                'REST API/GraphQL',
                'SQL',
                'OOP/SOLID/DRY',
                'CI/CD',
                'Unit testing',
                'GIT',
                'Docker/DDEV',
                'Performance optimization/Profiling',
                'SQL queries optimization',
                'Linux basics',
                'JIRA/Sprint/Poker planning',
                'Contribution to Drupal modules',
            ]
        },
        {
            title: 'Technologies and Frameworks',
            list: [
                'Drupal/WordPress',
                'React',
                'MySQL/MariaDB',
                'Postman',
                'Gulp',
                'Bitbucket pipelines',
                'Figma/Photoshop',
                'Bootstrap',
            ]   
        },
        {
            title: 'Soft skills',
            list: [
                'Cooperation with team',
                'Organisation of tech meetings',
                'Task/Epic preparing in JIRA',
                'Poker planning'
            ]
        }
    ]
};

export const contactBlockData = {
    title: 'Contact me',
    list: [
        {
            text: 'Telegram',
            image: '/telegram.png',
            href: 'https://t.me/right_property/'
        }
    ]
}