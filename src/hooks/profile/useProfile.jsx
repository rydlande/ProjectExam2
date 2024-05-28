import { create } from "zustand";

export const useProfileStore = create((set, get) => ({
    profile: null,
    loading: false,
    error: null,
    fetchProfile: async () => {
      set({ loading: true });
      const accessToken = localStorage.getItem('accessToken');
      const apiKey = localStorage.getItem('apiKey');
      const user = JSON.parse(localStorage.getItem('user'));
    
      if (!accessToken || !apiKey || !user || !user.name) {
        set({ error: 'Missing access token, API key, or user information', loading: false });
        return;
      }
    
      try {
        const res = await fetch(`https://v2.api.noroff.dev/holidaze/profiles/${user.name}?_bookings=true&_venues=true`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'X-Noroff-API-Key': `${apiKey}`,
          }
        });
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log('Fetched profile:', data.data);
        set({ profile: data.data, loading: false });
      } catch (error) {
        console.error('Failed to fetch profile data', error);
        set({ error: error.message, loading: false });
      }
    },
    updateProfile: async (updatedProfile) => {
      set({ loading: true });
      const accessToken = localStorage.getItem('accessToken');
      const apiKey = localStorage.getItem('apiKey');
      const user = JSON.parse(localStorage.getItem('user'));
    
      try {
        const res = await fetch(`https://v2.api.noroff.dev/holidaze/profiles/${user.name}`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'X-Noroff-API-Key': `${apiKey}`,
          },
          body: JSON.stringify(updatedProfile),
        });
        if (!res.ok) {
          const errorData = await res.json(); 
          console.log('Error:', errorData.errors);
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        set({ profile: data.data, loading: false });
      } catch (error) {
        console.error('Failed to update profile data', error);
        set({ error: error.message, loading: false });
      }
    },
  }));