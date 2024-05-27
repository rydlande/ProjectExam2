import { Link } from 'react-router-dom';
import { useAuthStore } from '../../../hooks/auth/useAuth';
import { LogoutButton } from '../../auth/logoutButton';

export function DropdownMenu({ closeMenu }) {
    const { user } = useAuthStore();

    return (
        <>
        {/* DESKTOP - profile menu */}
        <div className="hidden md:block md:absolute md:mt-[270px] md:right-0 md:w-full md:py-1 md:bg-white md:z-10 md:max-w-48">
            {user ? (
                <>
                    <Link to="/profile/myProfile" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">Profile</Link>
                    <Link to="/profile/bookings" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">My bookings</Link>
                    <Link to="/profile/venues" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">My venues</Link>
                    <Link to="/profile/venues/create" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">Register venue</Link>
                    <hr className="w-4/5 my-8 border-2 border-teal-light" />
                    <Link to="/profile/settings" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">Settings</Link>
                    <div className="block px-4 py-2 text-sm hover:bg-light">
                        <LogoutButton />
                    </div>
                </>
            ) : (
                <>
                    <Link to="/auth/login" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">Login</Link>
                    <Link to="/auth/register" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">Register</Link>
                    <Link to="/auth/register" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">Register venue</Link>
                    <Link to="/help-center" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">Help Center</Link>
                </>
            )}
        </div>
        {/* MOBILE - full menu */}
        <div className="absolute mt-[345px] left-0 w-full py-1 bg-white z-10 max-w-48 md:hidden">
            {user ? (
                <>
                    <Link to="/venues/all" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">New booking</Link>
                    <hr className="w-4/5 my-8 border-2 border-teal-light" />
                    <Link to="/profile/myProfile" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">Profile</Link>
                    <Link to="/profile/bookings" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">My bookings</Link>
                    <Link to="/profile/venues" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">My venues</Link>
                    <Link to="/profile/venues/create" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">Register venue</Link>
                    <Link to="/profile/settings" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">Settings</Link>
                    <hr className="w-4/5 my-8 border-2 border-teal-light" />
                    <Link to="/help-center" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">Help Center</Link>
                    <div className="block px-4 py-2 text-sm hover:bg-light">
                        <LogoutButton />
                    </div>
                </>
            ) : (
                <>
                    <Link to="/auth/login" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">Login</Link>
                    <Link to="/auth/register" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">Register</Link>
                    <Link to="/auth/register" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">Register venue</Link>
                    <Link to="/help-center" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">Help Center</Link>
                </>
            )}
        </div>
        </>
    );
}
