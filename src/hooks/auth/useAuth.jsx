import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem('user')) || null,
  apiKey: localStorage.getItem('apiKey') || null,
  setUser: async (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    set({ user });

    if (!localStorage.getItem('apiKey')) {
      try {
        const res = await fetch('https://v2.api.noroff.dev/auth/create-api-key', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${user.accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: user.name }),
        });
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        localStorage.setItem('apiKey', data.data.key);
        set({ apiKey: data.data.key });
      } catch (error) {
        console.error('Failed to create API key', error);
      }
    } else {
      set({ apiKey: localStorage.getItem('apiKey') });
    }
  },
  logout: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('apiKey');
    set({ user: null, apiKey: null });
  }
}));
