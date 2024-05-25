import { create } from "zustand";

export const useVenuesStore = create((set, get) => ({
    venues: [],
    loading: false,
    page: 1,
    setVenues: (venues) => set({ venues }),
    setLoading: (loading) => set({ loading }),
    setPage: (page) => set({ page }),

    fetchVenues: async () => {
        set({ loading: true });
        const { page, venues } = get();
        try {
            const res = await fetch(`https://v2.api.noroff.dev/holidaze/venues?_owner=true&_bookings=true&page=${page}`);
            const data = await res.json();
            
            const newVenues = data.data.map(venue => ({
                ...venue,
                media: venue.media || []
            }));

            const uniqueVenues = [
                ...venues,
                ...newVenues.filter(newVenue => !venues.some(existingVenue => existingVenue.id === newVenue.id))
            ];

            set({ venues: uniqueVenues, loading: false });
        } catch (error) {
            console.error('Failed to fetch venues', error);
            set({ loading: false });
        }
    },

    nextPage: async () => {
        const { page } = get();
        set({ page: page + 1 });
        await get().fetchVenues();
    },
}));
