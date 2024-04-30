import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { DropdownMenu } from './dropdown';

export function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const navClose = useRef(null);

    useEffect(() => {
        function handleNavClose(e) {
            if (navClose.current && !navClose.current.contains(e.target)) {
                setNavOpen(false);
            }
        }
        document.addEventListener("mousedown", handleNavClose);
        return () => {
            document.removeEventListener("mousedown", handleNavClose);
        };
    }, []);

    return (
        <header ref={navClose}>
            <nav>
                <div className="flex justify-between items-center mx-auto p-2">
                    <button
                    onClick={() => setNavOpen(!navOpen)}
                    className="p-2 w-10 h-10 text-dark rounded-lg md:hidden focus:outline-none"
                    aria-label="Toggle navigation menu"
                    >
                    <span className="sr-only">Open main menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h10" />
                    </svg>
                    </button>

                    <Link to="/" className="text-2xl font-semibold font-logo text-dark">
                        Holidaze
                    </Link>

                    {navOpen && <DropdownMenu closeMenu={() => setNavOpen(false)} />}
                </div>
            </nav>
        </header>
    )
}