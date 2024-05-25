import { useVenuesStore } from "../../../hooks/stores";
import { VenuesCard } from "../../../components/venues/cards/all";
import { SearchBar } from "../../../components/venues/search";

export function Venues() {
  const { venues, loading } = useVenuesStore(state => ({venues: state.venues, loading: state.loading}));
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <SearchBar venues={venues}/>
      <h2 className="text-xl font-semibold mb-4">All venues</h2>
      {/* <div>
        {venues.map((venue, index) => (
          <VenuesCard key={index} venue={venue} />
        ))}
      </div> */}
    </div>
  )
}