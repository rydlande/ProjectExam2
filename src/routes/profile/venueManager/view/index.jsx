import { useEffect } from "react";
import { useProfileStore } from "../../../../hooks/profile/useProfile";
import { useVenuesStore } from "../../../../hooks/venues/useVenues";
import { Link } from "react-router-dom";
import { ViewVenues } from "../../../../components/profile/venueManager/viewVenues";

export function MyVenues() {
  const { profile, loading, fetchProfile } = useProfileStore();
  const { venues, fetchVenues } = useVenuesStore();

  useEffect(() => {
    fetchProfile();
    fetchVenues();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile) {
    return <div>Error loading profile.</div>;
  }

  return (
    <div>
      {profile.venueManager ? (
        <ViewVenues profile={profile} venues={venues} />
      ) : (
        <div>
          <h1>Welcome, {profile.name}!</h1>
          <p>You are not a venue manager. If you want to register a venue, please update your profile first:</p>
          <Link to="/profile/edit">Edit Profile</Link>
        </div>
      )}
    </div>
  );
}
