import { useEffect } from "react";
import { useProfileStore } from "../../../../hooks/profile/useProfile";
import { Loader } from '../loader'


export function MyVenues() {
  const { profile, loading, fetchProfile } = useProfileStore();

  useEffect(() => {
    fetchProfile();
  }, []);
  
  if (loading) {
    return <Loader />;
  }

    return (
      <div>
        {profile.venueManager ? (
          <div>
            <h1>Welcome, Venue Manager!</h1>
            {profile.venues.length > 0 ? (
              <div>
                <h2>Your Venues</h2>
                <ul>
                  {profile.venues.map((venue) => (
                    <li key={venue.id}>{venue.name}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>You have no venues listed.</p>
            )}
          </div>
        ) : (
          <div>
            <h1>Welcome, {profile.name}!</h1>
            <p>You are not a venue manager. If you want to register a venue, please update your profile first:</p>
            
          </div>
        )}
      </div>
    );
  }