import { useEffect } from 'react';
import { useVenuesStore } from "../../../hooks/venues/useVenues";
import { VenuesCard } from "../../../components/cards/venueCard";
import { SearchBar } from "../../../components/venues/search";

export function Venues() {
  const { venues, loading, fetchVenues, nextPage, page } = useVenuesStore();

  useEffect(() => {
    fetchVenues();
  }, []);


  return (
    <div className="bg-white p-8 flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">All venues</h2>
      <SearchBar venues={venues}/>
      <VenuesCard venues={venues} />
      <button onClick={nextPage} disabled={loading} className='bg-teal text-white hover:bg-teal-dark font-semibold py-2 px-4 rounded mt-6'
>
        {loading ? 'Loading...' : `Load more`}
      </button>
    </div>
  );
}