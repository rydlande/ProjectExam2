import { Link } from "react-router-dom";

export function MyBookingsCard({ booking }) {
    console.log('test', booking);

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
    
    return (
        <>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between w-full">
                <div className="flex">
                    <div className="bg-blue-200 w-32 h-32 rounded-md mr-4">
                        <img src={venueImage} alt={venueImageAlt} className="block m-auto object-cover rounded-sm w-32 h-32"/>
                    </div>
                        <div className="mr-4">
                            <h3 className="text-lg font-semibold">{booking.venue.name}</h3>
                            <p className="text-gray-600">{formattedDateFrom} - {formattedDateTo}</p>
                            <p className="text-gray-600">{booking.guests} guests</p>
                            <p className="text-gray-600">Booked: {formattedDateCreated}</p>
                            <p className="text-gray-600">Price: {booking.venue.price} NOK</p>
                        </div>
                </div>

                        <div className="mr-4 text-sm text-gray-600">
                            <p>Wifi: {venue.meta.wifi ? 'Yes' : 'No'}</p>
                            <p>Parking: {venue.meta.parking ? 'Yes' : 'No'}</p>
                            <p>Breakfast: {venue.meta.breakfast ? 'Yes' : 'No'}</p>
                            <p>Pets: {venue.meta.pets ? 'Yes' : 'No'}</p>
                            <p>Address: {venue.location.address || 'N/A'}</p>
                            <p>City: {venue.location.city}</p>
                            <p>Zip: {venue.location.zip}</p>
                            <p>Country: {venue.location.country}</p>
                        </div>
                        <div className="flex flex-col items-end justify-between">
                            <div className="flex flex-col items-end">
                                <button className="text-blue-500 mb-2">Make changes</button>
                                <button className="text-red-500 mb-2">Cancel trip</button>
                                <button className="text-gray-500">View in map</button>
                            </div>
                            <Link to={`/venues/${venue.id}`} className="text-blue-500">View venue</Link>
                        </div>
                </div>
        </>
    );
}