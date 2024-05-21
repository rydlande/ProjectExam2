import { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

export function SearchBar({ venues }) {
  const [searchInput, setSearchInput] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchRef = useRef(null);

  const filteredVenues = searchInput
    ? venues.filter((venue) =>
        venue.name.toLowerCase().includes(searchInput.toLowerCase())
    ) : [];

  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsDropdownOpen(false); 
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function setSearch(e) {
    setSearchInput(e.target.value);
    if(e.target.value !== ''){
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  }

  return (
    <div className="relative bg-white p-4 rounded-lg shadow-md mb-8" ref={searchRef}>
      <div className="flex flex-wrap items-center mb-4">
        <input type="date" className="border-gray-300 rounded p-2 mr-2" />
        <input type="date" className="border-gray-300 rounded p-2 mr-2" />
        <input type="text" placeholder="Location" className="border-gray-300 rounded p-2 mr-2" />
        <input type="number" min="1" placeholder="Guests" className="border-gray-300 rounded p-2 mr-2 w-20" />
        <input type="number" min="1" placeholder="Rooms" className="border-gray-300 rounded p-2 mr-2 w-20" />
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Apply</button>
      </div>
      <div className="flex items-center relative w-full">
        <input 
          type="text" 
          placeholder="Search for venue..." 
          className="border-gray-300 rounded p-2 flex-1"
          value={searchInput} 
          onChange={setSearch}
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded ml-2">Search</button>
        
        {isDropdownOpen && filteredVenues.length > 0 && (
          <div className='absolute top-full mt-1 w-full bg-white shadow-lg z-10 rounded-lg'>
            {filteredVenues.map((venue) => (
              <Link 
                to={`/venues/${venue.id}`} 
                key={venue.id}
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" 
                onClick={() => {
                    setIsDropdownOpen(false);
                    setSearchInput('');
                }}
              >
                <img
                  src={venue.media[0]?.url} 
                  alt={venue.name}
                  className="h-10 w-10 object-cover rounded-sm mr-2"
                />
                <p className="text-sm my-auto">{venue.name}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
