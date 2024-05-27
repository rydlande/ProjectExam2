import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSpecificVenueStore } from '../../../../hooks/venues/useSpecificVenue';
import { VenueDetailsCard } from '../../../../components/profile/venueManager/viewSpecificVenue';

export function MySpecificVenue() {
    const { id } = useParams();
    const { venue, loading, fetchVenue } = useSpecificVenueStore();

    useEffect(() => {
        fetchVenue(id);
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                <Link to="/profile/venues">
                    <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded">
                    Back
                    </button>
                </Link>
                <Link to={`/profile/venues/update/${id}`} >
                    <button className="bg-blue-500 text-white py-2 px-4 rounded">
                    Edit Venue
                    </button>
                </Link>
                </div>

                <h1 className="text-2xl font-semibold mb-6">Venue bookings</h1>
                {venue && <VenueDetailsCard venue={venue} />}
            </div>
        </div>
  );
}