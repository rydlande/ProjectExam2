import { useState } from "react";
import { CalendarCard } from "./calendarCard";

export function SpecificVenueCard({ venue }) {
  const [selectedDateRange, setSelectedDateRange] = useState([null, null]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!venue) {
    return <p>Loading...</p>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % venue.media.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + venue.media.length) % venue.media.length);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="relative w-full mb-4">
        {venue.media.length > 0 && (
          <div className="relative w-full h-0 pb-[56.25%] bg-white overflow-hidden rounded">
            <img className="absolute top-0 left-0 w-full h-full object-contain" src={venue.media[currentImageIndex]?.url} alt={venue.media[currentImageIndex]?.alt || "Venue image"} />
          </div>
        )}
        {venue.media.length > 1 && (
          <>
            <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black px-2 py-1 rounded-full shadow-md">{"<"}</button>
            <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black px-2 py-1 rounded-full shadow-md">{">"}</button>
          </>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">{venue.name}</h2>
          <p className="text-gray-600 mb-4">{venue.rating === 0 ? 'No ratings' : `${venue.rating} ★`}</p>
          <div className="flex items-center mb-4">
            <img className="w-14 h-14 rounded-full mr-4" src={venue.owner?.avatar.url} alt={venue.owner?.avatar.alt || "Owner avatar"} />
            <div>
              <p className="font-bold">{venue.owner?.name}</p>
              <p className="text-gray-600">Venue Manager</p>
            </div>
          </div>
          <div className="mb-4">
            <p><span className="font-bold">Price:</span> {venue.price} NOK / per night</p>
            <p><span className="font-bold">Max Guests:</span> {venue.maxGuests}</p>
            <p><span className="font-bold">Address:</span> {venue.location.address}</p>
            <p><span className="font-bold">City:</span> {venue.location.city}</p>
            <p><span className="font-bold">Zip:</span> {venue.location.zip}</p>
            <p><span className="font-bold">Country:</span> {venue.location.country}</p>
          </div>
          <div className="mb-4">
            <p className="font-bold">This place offers:</p>
            <div className="flex flex-wrap gap-2">
              {Object.entries(venue.meta || {}).map(([key, value]) => value && <p key={key} className="bg-gray-200 px-2 py-1 rounded">{key}</p>)}
            </div>
          </div>
          <p className="mb-4">{venue.description}</p>
        </div>
        <div className="flex-1">
          <CalendarCard onDateChange={(range) => setSelectedDateRange(range)} />
        </div>
      </div>
    </div>
  );
}
