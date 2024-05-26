import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SpecificVenueCard } from '../../../components/venues/cards/specific';
import { useSpecificVenueStore } from '../../../hooks/venues/useSpecificVenue'


export function SpecificVenue() {
  const { id } = useParams();
  const { venue, loading, fetchVenue } = useSpecificVenueStore();

  useEffect(() => {
    fetchVenue(id);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  };

  return (
    <>
      <div>
        <SpecificVenueCard venue={venue} />
      </div>
    </>
  );
}