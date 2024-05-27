import { Link } from 'react-router-dom';
import { VenuesCard } from '../../cards/venueCard';

export function ViewVenues({ profile }) {

  return (
    <div>
      {profile.venues.length > 0 ? (
            <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <Link to="/profile/myProfile">
                  <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded">
                    Back
                  </button>
                </Link>
                <Link to="/profile/venues/create">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded">
                    Registrer Venue
                  </button>
                </Link>
              </div>
              <VenuesCard venues={profile.venues} />
        </div>
        </div>
      ) : (
        <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <Link to="/profile/myProfile">
              <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded">
                Back
              </button>
            </Link>
            <Link to="/profile/venues/create">
              <button className="bg-blue-500 text-white py-2 px-4 rounded">
                Registrer Venue
              </button>
            </Link>
          </div>
          <div className='text-center'>
            <h1>Welcome, Venue Manager!</h1>
            <p>You have no venues listed.</p>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}