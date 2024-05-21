import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SpecificVenueCard } from '../../../components/venues/cards/specific';

export function SpecificVenue() {
  const { id } = useParams();
  const [venue, setVenue] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVenue() {
      try {
        const res = await fetch('https://v2.api.noroff.dev/holidaze/venues/' + id + '?_bookings=true&_owner=true');
        const data = await res.json();
        setVenue(data.data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch venue', error);
        setLoading(false);
      }
    }
    fetchVenue();
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
    )
  }