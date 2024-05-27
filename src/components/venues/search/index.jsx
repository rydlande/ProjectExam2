import { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useVenuesStore } from "../../../hooks/venues/useVenues";

export function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const { venues, searchVenues, fetchVenues } = useVenuesStore();
  const searchRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchInput('');
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchInput.trim()) { 
        searchVenues(searchInput);
      } else {
        fetchVenues();
      }
    }, 300);
    return () => clearTimeout(handler);
  }, [searchInput, searchVenues]);

  const isDropdownOpen = searchInput && venues.length > 0;

  return (
    <div className="relative p-4 mb-8 max-w-screen-lg min-w-60 md:w-96" ref={searchRef}>
      <input
        type="text"
        placeholder="Search for venue..."
        className="border-grey-300 bg-grey-100 rounded-sm p-2 w-full"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
      />
      {isDropdownOpen && (
        <div className='absolute top-full mt-1 w-full bg-white shadow-lg z-10 rounded-lg'>
          {venues.map((venue) => (
            <Link
              to={`/venues/${venue.id}`}
              key={venue.id}
              className="flex items-center px-4 py-2 hover:bg-grey-100 cursor-pointer"
              onClick={() => {
                setSearchInput('');
              }}
            >
              <img
                src={venue.media[0]?.url || '/default-image.jpg'}
                alt={venue.name}
                className="h-10 w-10 object-cover rounded-sm mr-2"
              />
              <p className="text-sm my-auto">{venue.name}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
