import './globals.css';
import HamburgerMenu from '@/components/HamburgerMenu/HamburgerMenu';
import FooterComponent from '@/components/Footer/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata = {
    title: 'Alto Volcanes',
    description: 'Alto Volcanes es un proyecto inmobiliario en Puerto Montt que contempla 2.045 viviendas, áreas verdes, infraestructura sostenible y un enfoque en conservación ecológica. Integra un plan verdeazul para restauración de ecosistemas y regulación hidrológica.',
    keywords: ['Alto Volcanes', 'proyecto inmobiliario Puerto Montt', 'viviendas sostenibles', 'plan verdeazul', 'urbanización ecológica', 'conservación biodiversidad', 'restauración ecosistemas', 'regulación hidrológica', 'infraestructura sostenible', 'áreas verdes públicas', 'evaluación ambiental SEIA', 'desarrollo urbano Puerto Montt', 'equipamiento habitacional', 'identidad local', 'sostenibilidad', 'control de inundaciones'],
    generator: 'Next.js',
    applicationName: 'WebPage Alto Volcanes',
    authors: [{ name: 'Edgardo Ruotolo Cardozo', url: 'https://crowadvance.com' }],
    creator: 'Edgardo Ruotolo Cardozo',
    publisher: 'Edgardo Ruotolo Cardozo',
    category: 'Inmobiliaria Sostenible',
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: 'https://www.altovolcanes.cl/',
        language: {
            es: '/',
        },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="es" className="!scroll-smooth">
            <body>
                <HamburgerMenu />
                <main>{children}</main>
                <FooterComponent />
                <GoogleAnalytics gaId="G-49V3HNY3PG" />
            </body>
        </html>
    );
}
