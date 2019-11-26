"use strict";

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// header

// hero
const heroes = ['Jackie Chan', 'Arnold Schwarzenegger', 'Chuck Norris', 'Bruce Lee'];

// about me
const skills = [
    {
        title: 'Design',
        value: 80
    },
    {
        title: 'HTML5',
        value: 85
    },
    {
        title: 'CSS3',
        value: 95
    }
];

// portfolio
const works = [
    {
        photo: 'portfolio1.jpg',
        title: 'Bananas',
        link: '#',
        tags: ['maistas'],
        size: 1
    },
    {
        photo: 'portfolio2.jpg',
        title: 'Gele, kava ir klavietura',
        link: '#',
        tags: ['augalas', 'maistas', 'technika'],
        size: 2
    },
    {
        photo: 'portfolio3.jpg',
        title: 'Kava',
        link: '#',
        tags: ['Maistas'],
        size: 1
    },
    {
        photo: 'portfolio4.jpg',
        title: 'Ledai rankoje',
        link: '#',
        tags: ['maistas'],
        size: 2
    },
    {
        photo: 'portfolio5.jpg',
        title: 'Kremas',
        link: '#',
        tags: ['kremas'],
        size: 1
    },
    {
        photo: 'portfolio6.jpg',
        title: 'Kaktusas',
        link: '#',
        tags: ['augalas'],
        size: 1
    },
    {
        photo: 'portfolio7.jpg',
        title: 'Fotoaparatas',
        link: '#',
        tags: ['technika'],
        size: 1
    }
]

// services
const services = [
    {
        icon: 'facebook',
        title: 'Interface Design',
        description: 'Continually scale resource-leveling vectors without best-of-breed schemas. Assertively initiate backward-compatible'
    },
    {
        icon: 'twitter',
        title: 'Experience Design',
        description: 'Continually scale resource-leveling vectors without best-of-breed schemas. Assertively initiate backward-compatible'
    },
    {
        icon: 'instagram',
        title: 'Web Development',
        description: 'Continually scale resource-leveling vectors without best-of-breed schemas. Assertively initiate backward-compatible'
    },
    {
        icon: 'linkedin',
        title: 'Mobile App',
        description: 'Continually scale resource-leveling vectors without best-of-breed schemas. Assertively initiate backward-compatible'
    },
    {
        icon: 'facebook',
        title: 'Digital Marketing',
        description: 'Continually scale resource-leveling vectors without best-of-breed schemas. Assertively initiate backward-compatible'
    },
    {
        icon: 'facebook',
        title: 'Woocommerce',
        description: 'Continually scale resource-leveling vectors without best-of-breed schemas. Assertively initiate backward-compatible'
    }
];

// team
const team = [
    {
        name: 'Adam Smith',
        position: 'partner',
        photo: { src: 'team1.jpg', alt: 'Adam Smith image' },
        socials: [
            { icon: 'twitter', link: '#' },
            { icon: 'facebook', link: '#' },
            { icon: 'linkedin', link: '#' }
        ]
    },
    {
        name: 'Adam Smith',
        position: 'partner',
        photo: { src: 'team1.jpg', alt: 'Adam Smith image' },
        socials: [
            { icon: 'twitter', link: '#' },
            { icon: 'facebook', link: '#' },
            { icon: 'linkedin', link: '#' }
        ]
    },
    {
        name: 'Adam Smith',
        position: 'partner',
        photo: { src: 'team1.jpg', alt: 'Adam Smith image' },
        socials: [
            { icon: 'twitter', link: '#' },
            { icon: 'facebook', link: '#' },
            { icon: 'linkedin', link: '#' }
        ]
    },
    {
        name: 'Adam Smith',
        position: 'partner',
        photo: { src: 'team1.jpg', alt: 'Adam Smith image' },
        socials: [
            { icon: 'twitter', link: '#' },
            { icon: 'facebook', link: '#' },
            { icon: 'linkedin', link: '#' }
        ]
    },
    {
        name: 'Annie Taylor',
        position: 'partner',
        photo: { src: 'team2.jpg', alt: 'Annie Taylor image' },
        socials: [
            { icon: 'twitter', link: '#' },
            { icon: 'facebook', link: '#' },
            { icon: 'linkedin', link: '#' }
        ]
    },
    {
        name: 'Annie Taylor',
        position: 'partner',
        photo: { src: 'team2.jpg', alt: 'Annie Taylor image' },
        socials: [
            { icon: 'twitter', link: '#' },
            { icon: 'facebook', link: '#' },
            { icon: 'linkedin', link: '#' }
        ]
    },
    {
        name: 'Annie Taylor',
        position: 'partner',
        photo: { src: 'team2.jpg', alt: 'Annie Taylor image' },
        socials: [
            { icon: 'twitter', link: '#' },
            { icon: 'facebook', link: '#' },
            { icon: 'linkedin', link: '#' }
        ]
    },
    {
        name: 'Annie Taylor',
        position: 'partner',
        photo: { src: 'team2.jpg', alt: 'Annie Taylor image' },
        socials: [
            { icon: 'twitter', link: '#' },
            { icon: 'facebook', link: '#' },
            { icon: 'linkedin', link: '#' }
        ]
    },
    {
        name: 'James Morgan',
        position: 'partner',
        photo: { src: 'team3.jpg', alt: 'James Morgan image' },
        socials: [
            { icon: 'twitter', link: '#' },
            { icon: 'facebook', link: '#' },
            { icon: 'linkedin', link: '#' }
        ]
    },
    {
        name: 'James Morgan',
        position: 'partner',
        photo: { src: 'team3.jpg', alt: 'James Morgan image' },
        socials: [
            { icon: 'twitter', link: '#' },
            { icon: 'facebook', link: '#' },
            { icon: 'linkedin', link: '#' }
        ]
    },
    {
        name: 'James Van der Lakenas',
        position: 'partner',
        photo: { src: 'team3.jpg', alt: 'James Morgan image' },
        socials: [
            { icon: 'twitter', link: '#' },
            { icon: 'facebook', link: '#' },
            { icon: 'linkedin', link: '#' }
        ]
    }
]

// numbers
const numbers = [
    {
        icon: 'file-code-o',
        number: 130,
        title: 'Projects done'
    },
    {
        icon: 'smile-o',
        number: 80,
        title: 'Happy clients'
    },
    {
        icon: 'users',
        number: 700,
        title: 'Employess'
    },
    {
        icon: 'trophy',
        number: 90,
        title: 'Award winner'
    }
];

// pricing

// blog
const blog = [
    {
        date: {
            day: 23,
            month: 6,
            year: 2018
        },
        photo: {
            src: 'related-post-1.jpg',
            alt: 'Photo 1'
        },
        title: 'BusinessStrategy Consule',
        description: 'Energistically facilitate market positioning vis-a-vis extensive niches. Competently fashion low-risk high-yield initiatives before cross-unit',
        link: '#'
    },
    {
        date: {
            day: 23,
            month: 6,
            year: 2018
        },
        photo: {
            src: 'related-post-1.jpg',
            alt: 'Photo 1'
        },
        title: 'BusinessStrategy Consule',
        description: 'Energistically facilitate market positioning vis-a-vis extensive niches. Competently fashion low-risk high-yield initiatives before cross-unit',
        link: '#'
    },
    {
        date: {
            day: 23,
            month: 6,
            year: 2018
        },
        photo: {
            src: 'related-post-1.jpg',
            alt: 'Photo 1'
        },
        title: 'BusinessStrategy Consule',
        description: 'Energistically facilitate market positioning vis-a-vis extensive niches. Competently fashion low-risk high-yield initiatives before cross-unit',
        link: '#'
    },
    {
        date: {
            day: 23,
            month: 7,
            year: 2019
        },
        photo: {
            src: 'related-post-2.jpg',
            alt: 'Photo 2'
        },
        title: 'Nauji metai uz kalnu',
        description: 'Energistically facilitate market positioning vis-a-vis extensive niches. Competently fashion low-risk high-yield initiatives before cross-unit',
        link: '#'
    },
    {
        date: {
            day: 23,
            month: 7,
            year: 2019
        },
        photo: {
            src: 'related-post-2.jpg',
            alt: 'Photo 2'
        },
        title: 'Nauji metai uz kalnu',
        description: 'Energistically facilitate market positioning vis-a-vis extensive niches. Competently fashion low-risk high-yield initiatives before cross-unit',
        link: '#'
    },
    {
        date: {
            day: 23,
            month: 7,
            year: 2019
        },
        photo: {
            src: 'related-post-2.jpg',
            alt: 'Photo 2'
        },
        title: 'Nauji metai uz kalnu',
        description: 'Energistically facilitate market positioning vis-a-vis extensive niches. Competently fashion low-risk high-yield initiatives before cross-unit',
        link: '#'
    },
    {
        date: {
            day: 23,
            month: 8,
            year: 2019
        },
        photo: {
            src: 'related-post-3.jpg',
            alt: 'Photo 3'
        },
        title: 'Pavasaris ir Gruodis',
        description: 'Energistically facilitate market positioning vis-a-vis extensive niches. Competently fashion low-risk high-yield initiatives before cross-unit',
        link: '#'
    },
    {
        date: {
            day: 23,
            month: 8,
            year: 2019
        },
        photo: {
            src: 'related-post-3.jpg',
            alt: 'Photo 3'
        },
        title: 'Pavasaris ir Gruodis',
        description: 'Energistically facilitate market positioning vis-a-vis extensive niches. Competently fashion low-risk high-yield initiatives before cross-unit',
        link: '#'
    },
    {
        date: {
            day: 23,
            month: 8,
            year: 2019
        },
        photo: {
            src: 'related-post-3.jpg',
            alt: 'Photo 3'
        },
        title: 'Pavasaris ir Gruodis',
        description: 'Energistically facilitate market positioning vis-a-vis extensive niches. Competently fashion low-risk high-yield initiatives before cross-unit',
        link: '#'
    }
];

// contact us

// maps

// footer

