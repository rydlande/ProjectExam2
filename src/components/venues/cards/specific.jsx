//import { useVenuesStore } from "../../../hooks/stores";
import { CalendarCard } from "./calendar";

export function SpecificVenueCard({ venue }) {
  console.log('Venue:', venue);
    
  return (
    <>
    { venue ? (
        <div key={venue.id}>
            <h2>{venue.name}</h2>
            <p>{venue.description}</p>
            <p>{venue.image}</p>
            <CalendarCard venue={venue} />
        </div>
    ) : (
        <p>Error</p>
    )}
    </>
  );
}