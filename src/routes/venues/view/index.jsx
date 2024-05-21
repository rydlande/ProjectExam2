import { useVenuesStore } from "../../../hooks/stores";
import { VenuesCard } from "../../../components/venues/cards/all";

export function Venues() {
  const { venues, loading } = useVenuesStore(state => ({venues: state.venues, loading: state.loading}));
  
  if (loading) {
    return <div>Loading...</div>;
  }

    return (
      <>
        <h1>Venues</h1>
        <div>
          <VenuesCard venues={venues} />
        </div>
      </>
    );
  }