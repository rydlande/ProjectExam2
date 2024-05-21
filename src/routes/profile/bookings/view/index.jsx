import { useEffect } from "react";
import { useProfileStore } from "../../../../hooks/stores";
import { Link } from "react-router-dom";
import { MyBookingsCard } from "../../../../components/profile/myBookingsCard";

export function MyBookings() {
  const { profile, fetchProfile } = useProfileStore();

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  console.log(profile);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <Link to="/profile/myProfile">
          <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded">
            Back
          </button>
        </Link>
        <Link to="/">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            New Booking
          </button>
        </Link>
      </div>
      <h1 className="text-2xl font-semibold mb-6">My bookings</h1>
      {profile && (
        <div>
          {profile.bookings.map((booking, index) => (
            <MyBookingsCard key={index} booking={booking} />
          ))}
        </div>
      )}
    </div>
  );
};