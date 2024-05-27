import { create } from 'zustand';

export const useAuthStore = create((set, get) => ({
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

        await get().checkApiKeyStatus(data.data.key, user.accessToken);
      } catch (error) {
        console.error('Failed to create API key', error);
      }
    } else {
      const apiKey = localStorage.getItem('apiKey');
      set({ apiKey });
      await get().checkApiKeyStatus(apiKey, user.accessToken);
    }
  },

  checkApiKeyStatus: async (apiKey, accessToken) => {
    try {
      const options = {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'X-Noroff-API-Key': apiKey
        }
      };

      const response = await fetch('https://v2.api.noroff.dev/social/posts', options);
      if (response.ok) {
        console.log('API key is active');
      } else {
        console.log('API key is not active', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error checking API key status', error);
    }
  },

  logout: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('apiKey');
    set({ user: null, apiKey: null });
  }
}));
