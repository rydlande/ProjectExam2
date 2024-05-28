import { useState, useEffect } from 'react';
import { useVenuesStore } from "../../../hooks/venues/useVenues";
import { VenuesCard } from "../../../components/venues/venueCard";
import { SearchBar } from "../../../components/venues/search";
import { Loader } from "../../../components/loader/index";

export function Venues() {
  const { venues, loading, fetchVenues, nextPage } = useVenuesStore();
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    fetchVenues().then(() => setInitialLoading(false)).catch(() => setInitialLoading(false));
  }, [fetchVenues]);

  if (initialLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="bg-white p-8 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4">All venues</h2>
        <SearchBar venues={venues}/>
        <VenuesCard venues={venues} />
        {venues.length > 0 && (
          <button 
            onClick={nextPage} 
            disabled={loading} 
            className='bg-teal text-white hover:bg-teal-dark font-semibold py-2 px-4 rounded mt-6'
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
}
