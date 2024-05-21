import { Link, useOutletContext } from "react-router-dom"

export function VenuesCard() {
  const { venues } = useOutletContext();
  console.log(venues)
  
  if (!venues) {
    return <div>No venues found.</div>;
  }

    return (
      <>
        {venues ? venues.map((venue) => {
          return (
            <Link to={`/venues/${venue.id}`} key={venue.id}>
              <h2>{venue.name}</h2>
            </Link>
          )
        }) : (
          <p>Error</p>
        )}
      </>
    );
  }