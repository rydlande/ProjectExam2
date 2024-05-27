import { useState } from "react";
import { Link } from "react-router-dom";
import { CancelBooking } from "./cancelBooking";

export function MyBookingsCard({ booking }) {
    const [showVenueMeta, setShowVenueMeta] = useState(false);

    const dateFrom = new Date(booking.dateFrom);
    const dateTo = new Date(booking.dateTo);
    const created = new Date(booking.created);

    const formattedDateFrom = new Intl.DateTimeFormat('en-US', { 
        month: 'long', 
        day: '2-digit' 
    }).format(dateFrom);

    const formattedDateTo = new Intl.DateTimeFormat('en-US', { 
        month: 'short', 
        day: '2-digit' 
    }).format(dateTo);

    const formattedDateCreated = new Intl.DateTimeFormat('en-US', {
        month: 'short', 
        day: '2-digit'
    }).format(created);

    const venue = booking.venue;
    const venueImage = booking.venue.media?.[0]?.url;
    const venueImageAlt = booking.venue.media?.[0]?.alt;

    const numberOfNights = Math.ceil((dateTo - dateFrom) / (1000 * 60 * 60 * 24));
    const totalPrice = numberOfNights * venue.price;

    return (
        <>
            <div className="bg-grey-100 p-4 rounded-lg shadow-md w-full md:flex md:justify-between mb-6">
                {/* booking info */}
                <div className="flex flex-col md:flex-row md:items-center">
                    <div className="w-32 h-32 rounded-md overflow-hidden mb-4 md:mb-0 md:mr-4">
                        <Link to={`/venues/${venue.id}`}>
                            <img src={venueImage} alt={venueImageAlt} className="object-cover w-full h-full"/>
                        </Link>
                    </div>
                    <div className="md:text-left">
                        <Link to={`/venues/${venue.id}`}>
                            <h3 className="text-lg font-semibold">{booking.venue.name}</h3>
                        </Link>
                        <p className="text-grey-600">{formattedDateFrom} - {formattedDateTo}</p>
                        <p className="text-grey-600">{booking.guests} guests</p>
                        <p className="text-grey-600">Booked: {formattedDateCreated}</p>
                        <p className="text-grey-600">Price: {totalPrice} NOK</p>
                    </div>
                </div>

                {/* venue meta */}
                <div className="hidden md:block text-sm text-grey-600 items-center">
                    <p>Wifi: {venue.meta.wifi ? 'Yes' : 'No'}</p>
                    <p>Parking: {venue.meta.parking ? 'Yes' : 'No'}</p>
                    <p>Breakfast: {venue.meta.breakfast ? 'Yes' : 'No'}</p>
                    <p>Pets: {venue.meta.pets ? 'Yes' : 'No'}</p>
                    <p>Address: {venue.location.address || 'N/A'}</p>
                    <p>City: {venue.location.city}</p>
                    <p>Zip: {venue.location.zip}</p>
                    <p>Country: {venue.location.country}</p>
                </div>

                {/* venue meta for mobile */}
                <div className="block md:hidden mt-4">
                    <button 
                        className="text-teal mb-2"
                        onClick={() => setShowVenueMeta(!showVenueMeta)}
                    >
                        {showVenueMeta ? 'Hide Details' : 'Show Details'}
                    </button>
                    {showVenueMeta && (
                        <div className="text-sm text-grey-600">
                            <p>Wifi: {venue.meta.wifi ? 'Yes' : 'No'}</p>
                            <p>Parking: {venue.meta.parking ? 'Yes' : 'No'}</p>
                            <p>Breakfast: {venue.meta.breakfast ? 'Yes' : 'No'}</p>
                            <p>Pets: {venue.meta.pets ? 'Yes' : 'No'}</p>
                            <p>Address: {venue.location.address || 'N/A'}</p>
                            <p>City: {venue.location.city}</p>
                            <p>Zip: {venue.location.zip}</p>
                            <p>Country: {venue.location.country}</p>
                        </div>
                    )}
                </div>
                
                {/* actions */}
                <div className="flex flex-col items-end justify-between md:ml-4 md:items-end md:justify-end">
                    <div className="flex flex-row justify-between w-full md:flex-col md:align-bottom">
                        <CancelBooking booking={booking} />
                    </div>
                </div>
            </div>
        </>
    );
}
