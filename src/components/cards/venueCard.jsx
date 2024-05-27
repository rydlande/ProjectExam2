import { Link } from "react-router-dom";

export function VenuesCard({ venues, allVenues }) {

  if (!venues) {
    return <div>No venues found.</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-lg">
        {venues.map((venue) => {
          const mainImage = venue.media[0]?.url || 'default-image-url';
          const altText = venue.media[0]?.alt || 'Venue image';

          return (
            <div key={venue.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col max-w-xs">
              <Link to={`/venues/${venue.id}`}>
                  <div className="w-full h-32 mb-2 rounded-md overflow-hidden">
                    <img src={mainImage} alt={altText} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 truncate">{venue.name}</h3>
                  </Link>
                  <p className="text-gray-600 mb-1 truncate">{venue.location.city}, {venue.location.country}</p>
                  <p className="text-gray-600 mb-1 truncate">{venue.maxGuests} guests</p>
                  <p className="text-gray-600 mb-1 truncate">{venue.price} NOK / night</p>
                  <div className="flex items-center">
                    {venue.rating > 0 ? (
                      <>
                        <span className="text-gray-600">{venue.rating}</span>
                        <span className="text-gray-600">★</span>
                      </>
                    ) : (
                      <span className="text-gray-600 truncate">no ratings</span>
                    )}
                  </div>
              {/* Used on "MyVenues" page */}
              {!venue.owner ? (
                <div className="mt-2 flex justify-between">
                  <Link to={`/profile/venues/${venue.id}`}>
                    <button>View Details</button>
                  </Link>
                  <Link to={`/profile/venues/update/${venue.id}`}>
                    <button>Edit Venue</button>
                  </Link>
                </div>
              ) : null}
              </div>
          );
        })}
      </div>
    </div>
  );
}
