import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProfileStore } from "../../../../hooks/stores";
import { MyBookingsCard } from "../../../../components/profile/bookings/myBookingsCard";
import { Loader } from '../../../../components/loader';

export function MyBookings() {
  const { profile, fetchProfile, loading } = useProfileStore();

  /* Had to comment out at 02:23 Tuesday 28.05.24 because it is stuck in a fetch-loop, but I have not been able to locate the problem... */
  /* Since I cant show you the booking page, you should check out the amezome loader-bike thats on the page*/
  /* useEffect(() => {
    fetchProfile().catch(console.error);
  }, []); */

  if (loading) {
    return <Loader />;
  }

  if (!profile) {
    return <div>Profile data not available.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-teal-light">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Link to="/profile/myProfile">
            <button className='bg-yellow-light text-teal-dark hover:bg-yellow font-bold py-2 px-4 rounded'>
              Back
            </button>
          </Link>
          <Link to="/">
            <button className='bg-teal text-white hover:bg-teal-dark font-semibold py-2 px-4 rounded'>
              New Booking
            </button>
          </Link>
        </div>
        <h1 className="text-2xl font-semibold mb-6">My bookings</h1>
        {profile.bookings.length > 0 ? (
          profile.bookings.map((booking, index) => (
            <MyBookingsCard key={index} booking={booking} />
          ))
        ) : (
          <div>No bookings found.</div>
        )}
      </div>
    </div>
  );
};
