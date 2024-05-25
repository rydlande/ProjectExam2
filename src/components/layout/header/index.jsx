import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from '@react-spring/web';
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

    const animation = useSpring({
        transform: navOpen ? 'translateX(0%)' : 'translateX(100%)',
        config: { tension: 220, friction: 20 },
    });

    return (
        <header ref={navClose} className="bg-white shadow-md fixed w-full max-w-md md:max-w-full z-20 top-0 h-14">
            <nav className="flex justify-between items-center mx-auto p-2">
                <div className="flex items-center align-middle">
                    {/* MOBILE burger menu */}
                    <button
                        onClick={() => setNavOpen(!navOpen)}
                        className="p-2 w-10 h-10 md:hidden"
                        aria-label="Toggle navigation menu"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h10" />
                        </svg>
                    </button>

                    <Link to="/" className="text-2xl font-semibold font-logo text-dark ml-2 md:ml-6">
                        Holidaze
                    </Link>
                </div>

                {/* MOBILE user button */}
                <Link to="/profile/myProfile" className="mr-2 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </Link>

                {/* DESKTOP header menu-items */}
                <div className="hidden md:flex flex-row">
                    <Link to="/venues/all" className="block px-4 py-2 text-sm hover:bg-light">New booking</Link>
                    <Link to="/profile/venues/create" className="block px-4 py-2 text-sm hover:bg-light">Register venue</Link>
                    <Link to="/help-center" className="block px-4 py-2 text-sm hover:bg-light">Help Center</Link>
                </div>

                {/* DESKTOP user menu */}
                <button 
                    onClick={() => setNavOpen(!navOpen)}
                    className="hidden md:block mr-5"
                    aria-label="Toggle profile-navigation menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </button>
            </nav>
            <animated.div style={animation} className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-30">
                <DropdownMenu closeMenu={() => setNavOpen(false)} />
            </animated.div>
        </header>
    )
}
