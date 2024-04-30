import { useState } from 'react';
import { useAuthStore } from './useAuth';

export function useLogin() {
    const { setUser } = useAuthStore();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const login = async (email, password, onSuccess) => {
        setIsLoading(true);
        setError(null);
        try {
            const res = await fetch('https://v2.api.noroff.dev/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
            });
    
            if (!res.ok) {
                throw new Error('Failed to login');
            }
    
            const data = await res.json();
            localStorage.setItem('user', JSON.stringify(data));
            setUser(data);
            setIsLoading(false);
            console.log('Login successful:', data);
            if (onSuccess) {
                onSuccess();
            }
            return data;
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
            console.error('Login error:', error);
        }
    };
    return { login, isLoading, error };
};