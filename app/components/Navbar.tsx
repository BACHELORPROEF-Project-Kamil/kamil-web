"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import Button from "./Button";

const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "Tips & Gids", href: "/tips-and-gids" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <header className="sticky top-0 z-50 w-full">
            <nav className="relative z-50 w-full bg-background shadow-md px-6 py-4" aria-label="headnavigation">
                <div className="mx-auto max-w-7xl flex items-center justify-between">
                    <Link href="/" className="group flex items-center gap-2">
                        <Image 
                            src="/images/kamil.svg" 
                            alt="Kamil Logo" 
                            width={80} 
                            height={80} 
                            className="object-contain" 
                            priority 
                        />
                    </Link>

                    {/* Desktop navigatie */}
                    <div className="hidden md:flex md:items-center md:gap-10 text-accent-green">
                        {navLinks.map((link) => (
                            <NavLink key={link.name} href={link.href}>
                                {link.name}
                            </NavLink>
                        ))}
                        <Button href="#">
                            Surf veilig met Kamil
                        </Button>
                    </div>

                    {/* Menu knop */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden font-accent-body font-body-bold text-accent-green p-2 text-right relative z-50"
                    >
                        {isOpen ? "Sluiten" : "Menu"}
                    </button>
                </div>
            </nav>

            {/* De mobiele popup */}
            {isOpen && (
                <div className="fixed inset-0 z-40 flex items-center justify-center h-dscreen bg-background md:hidden px-6">
                    <ul className="flex flex-col items-center gap-10 text-accent-green">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="font-accent-body text-2xl font-body-bold text-accent-green hover:text-accent-orange transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Button 
                                href="#" 
                                onClick={() => setIsOpen(false)}
                                className="text-xl px-10 py-4"
                            >
                                Surf veilig met Kamil
                            </Button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
	return (
		<Link
			href={href}
			className="font-accent-body text-base text-accent-green font-body-bold transition-colors hover:text-accent-orange"
		>
			{children}
		</Link>
	);
}
