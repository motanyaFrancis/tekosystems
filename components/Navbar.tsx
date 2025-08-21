'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import navLinks from '@/data/navLinks';
import { usePathname } from 'next/navigation';


export default function Navbar() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isScrolled = scrolled || hoveredDropdown;

    return (
        <>
            {/* Navigation */}
            <div
                onMouseLeave={() => setHoveredDropdown(null)}
                className={`fixed top-0 w-full z-[998] transition-colors duration-300 ${isScrolled ? 'bg-white/90 shadow-lg backdrop-blur' : 'bg-transparent'
                    }`}
            >
                <nav className="py-5 container mx-auto px-4 flex items-center justify-between">
                    <Link href="/">
                        <Image
                            src={isScrolled ? '/images/logos/logo-black.png' : '/images/logos/logo-white.png'}
                            alt="Logo"
                            width={200}
                            height={60}
                            priority

                        />
                    </Link>

                    <div className="hidden lg:flex gap-2 p-1">
                        {navLinks.map(({ name, href, megaMenu }) =>
                            megaMenu ? (
                                <div
                                    key={name}
                                    onMouseEnter={() => setHoveredDropdown(name)}
                                    className="relative group"
                                >
                                    <button
                                        className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm font-semibold transition duration-200 ${isScrolled ? 'text-gray-900 hover:bg-gray-200' : 'text-white hover:bg-white/20'
                                            }`}
                                    >
                                        {name}
                                        <svg
                                            className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>
                            ) : (
                                <Link
                                    key={name}
                                    href={href || '#'}
                                    onMouseEnter={() => {
                                        setHoveredDropdown(null);
                                        setHoveredLink(name);
                                    }}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    className={`relative px-3 py-1 text-sm font-semibold transition duration-200 ${isScrolled ? 'text-gray-900' : 'text-white '
                                        }`}
                                >
                                    {name}

                                    {(pathname === href || hoveredLink === name) && (
                                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                                <line x1="0" y1="10" x2="20" y2="10" stroke="#1e3a8a" strokeWidth="2" />
                                            </svg>
                                    )}
                                </Link>
                            )
                        )}
                    </div>

                    <Link
                        href="/contact"
                        className={`hidden lg:flex items-center gap-2 px-6 py-3 rounded-full transition duration-200 ${isScrolled
                            ? 'bg-sky-600 text-white hover:bg-sky-50 hover:text-sky-900'
                            : 'bg-white text-sky-900 hover:bg-sky-50'
                            }`}
                    >
                        <span className="text-sm font-semibold">Contact Us</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                            <path
                                d="M5.5 3L10.5 8L5.5 13"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>

                    <button className="lg:hidden" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                        <svg width="51" height="51" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="56" height="56" rx="28" fill={isScrolled ? '#ffffff00' : '#00000000'} />
                            <path
                                d="M37 32H19M37 24H19"
                                stroke={isScrolled ? 'black' : 'white'}
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </nav>

                {/* Mega Menu (same as before) */}
                <div className="overflow-hidden transition-all duration-300 ease-in-out">
                    {navLinks.map(({ name, megaMenu }) =>
                        hoveredDropdown === name && megaMenu ? (
                            <div key={name} className="animate-fadeInDown absolute left-0 top-full w-full z-[997] bg-gray-50 shadow-md text-gray-900">
                                <div className="container mx-auto px-4 py-10 text-sm">
                                    <h2 className="text-xl font-bold mb-6">{name}</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {megaMenu.map((section, index) => (
                                            <div key={index}>
                                                {section.title && (
                                                    <h3 className="font-semibold mb-2">{section.title}</h3>
                                                )}
                                                {section.description && (
                                                    <p className="mb-4 text-gray-800">{section.description}</p>
                                                )}
                                                {section.links.length > 0 && (
                                                    <ul className="space-y-4">
                                                        {section.links.map((link, i) => (
                                                            <li key={i}>
                                                                <a href={link.href} className="hover:underline">
                                                                    {link.name}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                                {section.title && section.links.length === 0 && (
                                                    <a
                                                        href="/schedule"
                                                        className="inline-flex items-center font-medium text-gray-700 hover:underline"
                                                    >
                                                        Program Line up
                                                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                                                        </svg>
                                                    </a>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : null
                    )}
                </div>
            </div>

            {/* Mobile Menu (same as before) */}
            <div className={`${mobileNavOpen ? 'block' : 'hidden'} fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-[999]`}>
                <div className="fixed inset-0 bg-black/20" onClick={() => setMobileNavOpen(false)}></div>
                <nav className="relative p-8 w-full h-full bg-gray-50 overflow-y-auto">
                    <div className="flex items-center justify-between">
                        <Link href="/">
                            <Image
                                src="/images/logos/logo.png"
                                alt="Logo"
                                width={200}
                                height={60}
                            />
                        </Link>
                        <button onClick={() => setMobileNavOpen(false)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M6 18L18 6M6 6L18 18"
                                    stroke="#111827"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                    <ul className="flex flex-col gap-6 py-12 my-12">
                        {navLinks.map(({ name, href, megaMenu }) => (
                            <li key={name}>
                                {megaMenu ? (
                                    <div>
                                        <button
                                            onClick={() => setMobileDropdown(mobileDropdown === name ? null : name)}
                                            className="text-sm font-medium text-gray-900 flex justify-between w-full"
                                        >
                                            {name}
                                            <span>{mobileDropdown === name ? '−' : '+'}</span>
                                        </button>
                                        {mobileDropdown === name && (
                                            <div className="mt-4 pl-4 space-y-6">
                                                {megaMenu.map((section, idx) => (
                                                    <div key={idx}>
                                                        {section.title && <h3 className="font-semibold text-gray-800 text-sm mb-2">{section.title}</h3>}
                                                        {section.description && <p className="text-gray-800 text-sm mb-2">{section.description}</p>}
                                                        <ul className="space-y-2">
                                                            {section.links.map((link, i) => (
                                                                <li key={i}>
                                                                    <Link href={link.href} className="text-gray-800 text-sm hover:underline">
                                                                        {link.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link href={href || '#'} className="text-sm font-medium text-gray-900">
                                        {name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="text-left">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 text-black hover:text-opacity-80 transition duration-200"
                        >
                            <span className="text-sm font-medium">Contact Us</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path
                                    d="M5.5 3L10.5 8L5.5 13"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Link>
                    </div>
                </nav>
            </div>

            <style jsx>{`
                @keyframes fadeInDown {
                    0% {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeInDown {
                    animation: fadeInDown 0.9s ease-out;
                }
            `}</style>
        </>
    );
}
