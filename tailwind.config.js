/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                blanco: '#ffffff',
                grisParrafo: '#151515',
                verdeTitulo: '#2B9440',
                grisTitulo: '#393939',
                verdeIcono: '#51C36E',
            },
            fontFamily: {
                sora: ['var(--font-sora)'],
                figtree: ['var(--font-figtree)'],
            },
            screens: {
                sm: '640px',
                // => @media (min-width: 640px) { ... }
                md: '768px',
                // => @media (min-width: 768px) { ... }
                lg: '1024px',
                // => @media (min-width: 1024px) { ... }
                xl: '1100px',
                // => @media (min-width: 1280px) { ... }
                '2xl': '1100px',
                // => @media (min-width: 1536px) { ... }
            },
        },
    },
    plugins: [],
};