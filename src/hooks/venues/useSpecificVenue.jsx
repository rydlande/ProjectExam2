import { create } from "zustand";

export const useSpecificVenueStore = create((set) => ({
    venue: {},
    loading: true,
    error: null,
    fetchVenue: async (id) => {
        try {
            const res = await fetch('https://v2.api.noroff.dev/holidaze/venues/' + id + '?_bookings=true&_owner=true');
            const data = await res.json();
            set({ venue: data.data, loading: false });
        } catch (error) {
            console.error('Failed to fetch venue', error);
            set({ error: error.message, loading: false });
        }
    },
    createVenue: async (venue) => {
        const accessToken = localStorage.getItem('accessToken');
        const apiKey = localStorage.getItem('apiKey');
        try {
            const res = await fetch('https://v2.api.noroff.dev/holidaze/venues', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                    'X-Noroff-API-Key': `${apiKey}`,
                },
                body: JSON.stringify(venue)
            });
            const data = await res.json();
            set({ venue: data.data, loading: false });
        } catch (error) {
            console.error('Failed to create venue', error);
            set({ error: error.message, loading: false });
        }
    },
    updateVenue: async (id, updatedVenue) => {
        const accessToken = localStorage.getItem('accessToken');
        const apiKey = localStorage.getItem('apiKey');
        try {
            const res = await fetch('https://v2.api.noroff.dev/holidaze/venues/' + id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                    'X-Noroff-API-Key': `${apiKey}`,
                },
                body: JSON.stringify(updatedVenue)
            });
            const data = await res.json();
            set({ venue: data.data, loading: false });
        } catch (error) {
            console.error('Failed to update venue', error);
            set({ error: error.message, loading: false });
        }
    },
    deleteVenue: async (id) => {
        const accessToken = localStorage.getItem('accessToken');
        const apiKey = localStorage.getItem('apiKey');
        try {
            await fetch('https://v2.api.noroff.dev/holidaze/venues/' + id, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'X-Noroff-API-Key': `${apiKey}`,
                },
            });
            set({ venue: {}, loading: false });
        } catch (error) {
            console.error('Failed to delete venue', error);
            set({ error: error.message, loading: false });
        }
    }
}));