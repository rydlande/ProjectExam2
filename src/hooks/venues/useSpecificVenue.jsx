import { create } from "zustand";

export const useSpecificVenueStore = create((set) => ({
    venue: {},
    loading: true,
    error: null,
    currentImageIndex: 0,
    fetchVenue: async (id) => {
        try {
            const res = await fetch('https://v2.api.noroff.dev/holidaze/venues/' + id + '?_bookings=true&_owner=true');
            const data = await res.json();
            set({ venue: data.data, loading: false, currentImageIndex: 0 });
        } catch (error) {
            console.error('Failed to fetch venue', error);
            set({ error: error.message, loading: false });
        }
    },
    updateVenue: async (id, updatedVenue) => {
        const accessToken = localStorage.getItem('accessToken');
        const apiKey = localStorage.getItem('apiKey');
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
                'X-Noroff-API-Key': apiKey
            },
            body: JSON.stringify(updatedVenue)
        }
        try {
            const res = await fetch('https://v2.api.noroff.dev/holidaze/venues/' + id, options);
            const data = await res.json();

            if (!res.ok) {
                console.error('Failed to update venue', data);
                throw new Error(data.errors.map(error => error.message).join(', '));
            }

            console.log('Successfully updated venue:', data.data);
            set({ venue: data.data, loading: false });
        } catch (error) {
            console.error('Failed to update venue', error);
            set({ error: error.message, loading: false });
        }
    },
    deleteVenue: async (id) => {
        const accessToken = localStorage.getItem('accessToken');
        const apiKey = localStorage.getItem('apiKey');
        const options = {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'X-Noroff-API-Key': apiKey
            }
        }
        try {
            const res = await fetch('https://v2.api.noroff.dev/holidaze/venues/' + id, options); 

            if (!res.ok) {
                throw new Error('Failed to delete venue');
            }

            set({ venue: {}, loading: false });
            return res.status;
        } catch (error) {
            console.error('Failed to delete venue', error);
            set({ error: error.message, loading: false });
            throw error;
        }
    },
    nextImage: () => set((state) => ({
        currentImageIndex: (state.currentImageIndex + 1) % (state.venue.media?.length || 1)
    })),
    prevImage: () => set((state) => ({
        currentImageIndex: (state.currentImageIndex - 1 + (state.venue.media?.length || 1)) % (state.venue.media?.length || 1)
    })),
}));
