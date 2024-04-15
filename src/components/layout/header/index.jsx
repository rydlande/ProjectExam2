import { Link } from "react-router-dom";

export function Header() {
    return (
        <header>
            <nav>
                <ul className="flex justify-between">
                    <li>
                        <Link to="/">Venues</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/auth/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/auth/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/help-center">Help Center</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}