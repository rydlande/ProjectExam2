import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSpecificVenueStore } from '../../../../hooks/venues/useSpecificVenue';
import { VenueDetailsCard } from '../../../../components/profile/venueManager/viewSpecificVenue';
import { Loader } from '../../../../components/loader';

export function MySpecificVenue() {
    const { id } = useParams();
    const { venue, loading, fetchVenue } = useSpecificVenueStore();

    useEffect(() => {
        fetchVenue(id);
    }, [id]);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                <Link to="/profile/venues">
                    <button className='bg-yellow-light text-teal-dark hover:bg-yellow font-bold py-2 px-4 rounded'>
                    Back
                    </button>
                </Link>
                <Link to={`/profile/venues/update/${id}`} >
                    <button className='bg-teal text-white hover:bg-teal-dark font-semibold py-2 px-4 rounded'>
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