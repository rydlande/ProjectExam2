import { create } from "zustand";

export const useVenuesStore = create((set) => ({
    venues: [],
    loading: false,
    setVenues: (venues) => set({ venues }),
    setLoading: (loading) => set({ loading }),

    fetchVenues: async () => {
        set({ loading: true });
        setTimeout(async () => {
            try {
                const res = await fetch('https://v2.api.noroff.dev/holidaze/venues')
                const data = await res.json();
                set({ venues: data.data, loading: false });
            } catch (error) {
                console.error('Failed to fetch venues', error)
                set({ loading: false });
            }
        }, 0);
    },
}));

export const useProfileStore = create((set) => ({
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
      set({ profile: data.data, loading: false });
    } catch (error) {
      console.error('Failed to fetch profile data', error);
      set({ error: error.message, loading: false });
    }
  }
}));