import * as url from 'node:url';

export default function sitemap() {
    return [
        {
            url: 'https://www.altovolcanes.cl/',
            lastModified: new Date('2024-12-06'),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: 'https://www.altovolcanes.cl/plan',
            lastModified: new Date('2024-12-06'),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: 'https://www.altovolcanes.cl/contacto',
            lastModified: new Date('2024-12-06'),
            changeFrequency: 'daily',
            priority: 1,
        },
    ];
}
