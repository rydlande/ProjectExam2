import { create } from "zustand";

export const useVenuesStore = create((set, get) => ({
    venues: [],
    loading: false,
    page: 1,
    error: null,
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

    createVenue: async (venue) => {
        const accessToken = localStorage.getItem('accessToken');
        const apiKey = localStorage.getItem('apiKey');
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
                'X-Noroff-API-Key': apiKey
            },
            body: JSON.stringify(venue)
        }
        try {
            const res = await fetch('https://v2.api.noroff.dev/holidaze/venues', options);
            const data = await res.json();
    
            if (!res.ok) {
                console.error('Failed to create venue', data);
                throw new Error(data.errors.map(error => error.message).join(', '));
            }
    
            console.log('Successfully created new venue', data);
            set((state) => ({ venues: [...state.venues, data.data], loading: false }));
            return true; 
        } catch (error) {
            console.error('Failed to create venue', error);
            set({ error: error.message, loading: false });
            return false;
        }
    },
}));
