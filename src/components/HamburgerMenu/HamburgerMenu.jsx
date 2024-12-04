'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const styles = {
    linksMobile:
        'font-barlow cursor-pointer uppercase text-blanco text-[18px] py-[15px] font-regular',
};

export default function HamburgerMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [bgColor, setBgColor] = useState('bg-transparent');
    const [key, setKey] = useState(Math.random());
    const pathname = usePathname();

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY >= 150) {
                setBgColor('bg-[#EFEBE1F2]');
                setKey(Math.random()); // Esto forzará un renderizado
            } else {
                setBgColor('bg-transparent');
                setKey(Math.random()); // Esto forzará un renderizado
            }
        };

        window.addEventListener('scroll', changeBackground);
        return () => window.removeEventListener('scroll', changeBackground);
    }, []);

    return (
        <header>
            <div className="container mx-auto">
                <nav className="nav-header flex h-[100px] items-center px-[20px] md:mx-[12px] xl:mx-auto xl:px-[30px]">
                    <div className="flex w-full items-center justify-end">
                        {/* BARS MENU MOBILE */}
                        <div className="flex">
                            <button
                                onClick={toggleMenu}
                                aria-label="Hamburguesa Menu Mobile"
                                className="fixed right-[20px] z-10 cursor-pointer md:right-[5%]"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    data-slot="icon"
                                    className="h-12 w-12 rounded-[50%] bg-verdeTitulo p-[8px] text-blanco"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* MENU MOBILE */}
                    <div
                        className={
                            menuOpen
                                ? 'fixed right-[-20px] top-[-22px] z-30 h-[105vh] w-[105vw] bg-verdeTitulo p-10 opacity-95 duration-500 ease-in-out md:w-[30vw]'
                                : 'fixed right-[-100%] top-[-22px] h-[105vh] p-10 duration-500 ease-in-out'
                        }
                    >
                        <div className="flex w-full items-center justify-end">
                            <button onClick={toggleMenu} className="cursor-pointer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    data-slot="icon"
                                    className="h-8 w-8 text-blanco"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col items-center py-4 pt-1">
                            <ul className="flex flex-col items-center">
                                <li
                                    onClick={() => setMenuOpen(false)}
                                    className={styles.linksMobile}
                                >
                                    <Link href="/">Home</Link>
                                </li>
                                <li
                                    onClick={() => setMenuOpen(false)}
                                    className={styles.linksMobile}
                                >
                                    <Link href="/plan">Plan Verdeazul</Link>
                                </li>
                                <li
                                    onClick={() => setMenuOpen(false)}
                                    className={styles.linksMobile}
                                >
                                    <Link href="/contacto">Contacto</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
