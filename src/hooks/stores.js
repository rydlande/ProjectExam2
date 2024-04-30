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