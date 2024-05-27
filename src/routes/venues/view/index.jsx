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
    <div className="min-h-screen bg-gray-100 p-8">
      <SearchBar venues={venues}/>
      <h2 className="text-xl font-semibold mb-4">All venues</h2>
      <div>
        <VenuesCard venues={venues} />
      </div>
      <button onClick={nextPage} disabled={loading}>
        {loading ? 'Loading...' : `Next Page (Page ${page + 1})`}
      </button>
    </div>
  );
}