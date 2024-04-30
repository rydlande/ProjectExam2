import { Link } from 'react-router-dom';
import { useAuthStore } from '../../../hooks/auth/useAuth';
import { LogoutButton } from '../../auth/logoutButton';

export function DropdownMenu({ closeMenu }) {
    const { user } = useAuthStore();
    return (
        <div className="absolute mt-80 left-0 w-full py-1 bg-white z-10">
            {user ? (
                <>
                    <Link to="/venues" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">New booking</Link>
                    <hr className="border-b border-solid" />                    
                    <Link to="/profile" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">Profile</Link>
                    <Link to="/profile/bookings" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">My bookings</Link>
                    <Link to="/profile/settings" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">Settings</Link>
                    <div className="block px-4 py-2 text-sm hover:bg-light">
                        <LogoutButton />
                    </div>
                    <hr className="border-b border-solid" />
                    <Link to="/profile/venues" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">My venues</Link>
                    <Link to="/profile/venues/create" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">Register venue</Link>
                    <hr className="border-b border-solid" />
                    <Link to="/help-center" onClick={closeMenu} className="block px-4 py-2 text-sm hover:bg-light">Help Center</Link>
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
    );
}
