import { create } from "zustand";

export const useBookingStore = create((set) => ({
  bookings: [],
  loading: true,
  error: null,
  fetchBookings: async () => {
    try {
      const res = await fetch('https://v2.api.noroff.dev/holidaze/bookings');
      const data = await res.json();
      set({ bookings: data.data, loading: false });
    } catch (error) {
      console.error('Failed to fetch bookings', error);
      set({ error: error.message, loading: false });
    }
  },
  fetchBooking: async (id) => {
    try {
      const res = await fetch(`https://v2.api.noroff.dev/holidaze/bookings/${id}`);
      const data = await res.json();
      set({ bookings: [data.data], loading: false });
    } catch (error) {
      console.error('Failed to fetch booking', error);
      set({ error: error.message, loading: false });
    }
  },
  createBooking: async (booking) => {
    const accessToken = localStorage.getItem('accessToken');
    const apiKey = localStorage.getItem('apiKey');
    try {
      const res = await fetch('https://v2.api.noroff.dev/holidaze/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
          'X-Noroff-API-Key': `${apiKey}`,
        },
        body: JSON.stringify(booking)
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to create booking');
      }
      const data = await res.json();
      set((state) => ({ bookings: [...state.bookings, data.data], loading: false }));
    } catch (error) {
      console.error('Failed to create booking', error);
      set({ error: error.message, loading: false });
    }
  },
  deleteBooking: async (id) => {
    const accessToken = localStorage.getItem('accessToken');
    const apiKey = localStorage.getItem('apiKey');
    try {
      await fetch(`https://v2.api.noroff.dev/holidaze/bookings/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'X-Noroff-API-Key': `${apiKey}`,
        },
      });
      set((state) => ({
        bookings: state.bookings.filter((booking) => booking.id !== id),
        loading: false
      }));
    } catch (error) {
      console.error('Failed to delete booking', error);
      set({ error: error.message, loading: false });
    }
  }
}));
