import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SpecificVenueCard } from '../../../components/venues/specific/specificVenueCard';
import { useSpecificVenueStore } from '../../../hooks/venues/useSpecificVenue';
import { Loader } from '../../../components/loader';


export function SpecificVenue() {
  const { id } = useParams();
  const { venue, loading, fetchVenue } = useSpecificVenueStore();

  useEffect(() => {
    fetchVenue(id);
  }, [id]);

  if (loading) {
    return <Loader />;
  };

  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8  w-full max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Link to="/">
            <button className="bg-yellow-light text-teal-dark hover:bg-yellow font-bold py-2 px-4 rounded">
              Back
            </button>
          </Link>
        </div>
      <div className="max-w-4xl mx-auto px-4 py-8 bg-white">
        <SpecificVenueCard venue={venue} />
      </div>
      </div>
    </div>
    </>
  );
}