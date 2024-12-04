'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

const styles = {
    linksMobile:
        'font-sora font-semibold text-[25px] tracking-[0.1em] leading-[35px] text-right text-blanco py-[15px]',
};

export default function HamburgerMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <header>
            <div className="container mx-auto">
                <nav className="nav-header flex h-[100px] items-center px-[30px] md:mx-[12px] xl:mx-auto xl:px-[40px]">
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
                        ref={menuRef}
                        className={
                            menuOpen
                                ? 'fixed right-[-20px] top-[-22px] z-30 h-[103vh] w-[105vw] bg-verdeTitulo p-16 opacity-95 duration-500 ease-in-out md:w-[30vw]'
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
                        <div className="flex h-[100vh] flex-col items-end justify-center py-4 pt-1">
                            <ul className="flex flex-col">
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
