import { Sora, Figtree } from 'next/font/google';

export const sora = Sora({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-sora',
});

export const figtree = Figtree({
    weight: ['300', '400', '500', '600', '700', '800'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-figtree',
});
