export const menu = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'Shop',
        href: '/shop/'
    },
    {
        title: 'Service',
        href: '/service/',
        sub: [
            {
                title: 'Service Uzhhorod',
                href: '/service/uzhhorod/'
            },
            {
                title: 'Service Chernihiv',
                href: '/service/chernihiv/'
            }
        ]
    }
];

export const aboutBlockData = {
    title: 'Who am I?',
    image: './public/ava.jpg',
    text: [
        'My name is Denys and I love to create web applications and resolve customer issues effectievly.',
        "I'm working as web developer already for 6 years. During this time I developed banch of websites, web-applications (I even built UI for GTA server LOL)",
        "I'm in love with React and PHP, these technologies help me to build professional and fast web applications.",
        'So I will be happy to promote, automate, or improve your business!',
    ]
};