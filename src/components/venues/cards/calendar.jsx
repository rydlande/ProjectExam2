import { useState } from "react";
import Calendar from '@demark-pro/react-booking-calendar';
import './CalendarCard.css';

export function BookingCalendar({ reserved, venueId }) {
  const [selectedDates, setSelectedDates] = useState([]);
  //const handleChange = (e) => setSelectedDates(e);
  const handleChange = (dates) => setSelectedDates(dates);

  const handleBooking = async () => {
    console.log('Booked dates:', selectedDates);
    const token = localStorage.getItem('token');
  
    try {
      const response = await fetch('https://v2.api.noroff.dev/holidaze/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'X-Noroff-API-Key': localStorage.getItem('apiKey')
        },
        body: JSON.stringify({
            dateFrom: selectedDates[0].toISOString(),
            dateTo: selectedDates[1].toISOString(),
            guests: 1,
            venueId: venueId,
          }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      console.log('Reservation created:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <h2 className="text-xl mb-4">Calendar</h2>
      <Calendar
        classNamePrefix="calendar"
        selected={selectedDates}
        onChange={handleChange}
        onOverbook={(err) => alert(err)}
        components={{
            DayCellFooter: ({ innerProps }) => (
              <div {...innerProps}></div>
            ),
          }}
        disabled={({ state }) => state && !state.isSameMonth}
        reserved={reserved}
        variant="events"
        dateFnsOptions={{ weekStartsOn: 1 }}
        range={true}
      />
       <button onClick={handleBooking}>Book Selected Dates</button>
    </>
  );
}

export function CalendarCard({ venue }) {
    console.log('id', venue.id);

    const reserved = venue.bookings.map(booking => {
        const startDate = new Date(booking.dateFrom);
        const endDate = new Date(booking.dateTo);
    
        return {
          startDate: new Date(Date.UTC(startDate.getUTCFullYear(), startDate.getUTCMonth(), startDate.getUTCDate(), startDate.getUTCHours())),
          endDate: new Date(Date.UTC(endDate.getUTCFullYear(), endDate.getUTCMonth(), endDate.getUTCDate(), endDate.getUTCHours())),
        };
      });

    console.log('reserved:', reserved);
  
    return <BookingCalendar reserved={reserved} venueId={venue.id}/>;
}