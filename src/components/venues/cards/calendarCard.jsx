import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Calendar from 'react-calendar';
import { useSpecificVenueStore } from '../../../hooks/venues/useSpecificVenue';
import { useBookingStore } from '../../../hooks/bookings/useBookings';
import 'react-calendar/dist/Calendar.css';
import './CalendarCard.css';

export function CalendarCard() {
  const { id } = useParams();
  const { venue, loading, fetchVenue } = useSpecificVenueStore();
  const { createBooking } = useBookingStore();
  const [selectedDates, setSelectedDates] = useState([null, null]);
  const [currentMonth] = useState(new Date());
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    fetchVenue(id);
  }, [id]);

  const handleBooking = async () => {
    if (selectedDates[0] && selectedDates[1]) {
      const newBooking = {
        dateFrom: selectedDates[0].toISOString(),
        dateTo: selectedDates[1].toISOString(),
        venueId: id,
        guests: 1,
      };
      try {
        const ress = await createBooking(newBooking);
        setAlertMessage("Your new booking was made! You can find all your bookings under 'My bookings' on your profile page.");
        fetchVenue(id);
        setSelectedDates([null, null]);
      } catch (error) {
        console.error('Booking error:', error);
        setAlertMessage("An error occurred while making the booking. Please try again.");
      }
    }
  };

  const handleChange = (dateRange) => {
    setSelectedDates(dateRange);
    console.log('Selected date range:', dateRange);
  };

  const reserved = (venue.bookings || []).map(booking => {
    const dateFrom = new Date(booking.dateFrom);
    const dateTo = new Date(booking.dateTo);
    const dates = [];
    for (let d = new Date(dateFrom); d <= dateTo; d.setDate(d.getDate() + 1)) {
      dates.push(new Date(d));
    }
    return dates;
  }).flat();

  const isReserved = date => reserved.some(reservedDate =>
    date.getFullYear() === reservedDate.getFullYear() &&
    date.getMonth() === reservedDate.getMonth() &&
    date.getDate() === reservedDate.getDate()
  );

  const tileDisabled = ({ date, view }) => {
    if (view === 'month') {
      return date < new Date().setHours(0, 0, 0, 0) || isReserved(date);
    }
    return false;
  };

  const calculateTotalNights = (dateFrom, dateTo) => {
    if (!dateFrom || !dateTo) return 0;
    const diffTime = Math.abs(dateTo - dateFrom);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const totalNights = calculateTotalNights(selectedDates[0], selectedDates[1]);
  const totalPrice = totalNights * venue.price;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="border p-4 rounded-lg bg-white max-w-sm mx-auto text-center">
      <h2 className="text-xl mb-4">Booking details</h2>
      <div className="mb-4">
        <Calendar
          onChange={handleChange}
          value={selectedDates}
          tileDisabled={tileDisabled}
          defaultActiveStartDate={currentMonth}
          selectRange
          locale="en-GB"
        />
      </div>
      <button
        onClick={handleBooking}
        disabled={!selectedDates[0] || !selectedDates[1]}
        className="bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50"
      >
        Book now
      </button>
      {alertMessage && (
        <div className="alert mt-4 p-2 bg-green-100 text-green-700 rounded">
          {alertMessage}
        </div>
      )}
      <div className="mt-4">
        <div className="text-lg">{venue.price} NOK / night</div>
        <div className="text-sm text-gray-500">x{totalNights} nights</div>
      </div>
      <hr className="my-4" />
      <div className="text-xl font-bold">Total {totalPrice} NOK</div>
    </div>
  );
}