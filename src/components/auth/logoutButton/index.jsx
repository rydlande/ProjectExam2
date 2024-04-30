import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../hooks/auth/useAuth.jsx';

export const LogoutButton = () => {
    const navigate = useNavigate();
    const logout = useAuthStore(state => state.logout);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};