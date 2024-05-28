import { Link } from "react-router-dom";

export function ViewVenuesCard({ venues }) {
    if (!venues) {
        return <div>No venues found.</div>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-lg">
            {venues.map((venue) => (
                <div key={venue.id} className="bg-white p-4 rounded-md shadow-md flex flex-col max-w-xs">
                    <div className="w-full h-32 mb-2 rounded-sm overflow-hidden">
                        <img src={venue.media[0]?.url || 'default-image-url'} alt={venue.media[0]?.alt || 'Venue image'} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-lg font-semibold mb-1 truncate">{venue.name}</h3>
                    <p className="text-grey-600 mb-1 truncate">{venue.location.city}, {venue.location.country}</p>
                    <p className="text-grey-600 mb-1 truncate">{venue.maxGuests} guests</p>
                    <p className="text-grey-600 mb-1 truncate">{venue.price} NOK / night</p>
                    <div className="mt-2 flex flex-col space-y-2">
                        <Link to={`/venues/${venue.id}`}>
                            <button className="bg-teal text-white px-3 py-1 rounded hover:bg-teal-dark">View Details</button>
                        </Link>
                        <Link to={`/profile/venues/update/${venue.id}`}>
                            <button className="bg-yellow-light text-teal-dark hover:bg-yellow font-bold py-2 px-4 rounded">Edit Venue</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
