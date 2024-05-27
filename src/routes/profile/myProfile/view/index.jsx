import { useEffect } from "react";
import { useProfileStore } from "../../../../hooks/stores";
import { Link } from "react-router-dom";
import { Loader } from '../../../../components/loader'

export function MyProfile() {
  const { profile, fetchProfile, loading } = useProfileStore();

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {profile && (
          <div className="min-h-screen flex flex-col items-center justify-center bg-teal-light">
            <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 max-w-4xl mt-6 max-h-[1100px] md:max-h-[800px]">

              {/* Profile information */}
              <div className="relative w-full h-48 mb-8 rounded-lg overflow-hidden">
                <img src={profile.banner.url} alt={profile.banner.alt} className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="absolute -top-16 w-32 h-32 rounded-lg overflow-hidden z-1">
                  <img src={profile.avatar.url} alt={profile.avatar.alt} className="object-cover w-full h-full"/>
                </div>
                <div className="pt-20 text-center">
                  <h2 className="text-2xl font-semibold mb-0.5">{profile.name}</h2>
                  <p className="text-grey-600 mb-6 text-xs">{profile.email}</p>
                  <p className="text-grey-600">{profile.bio}</p>
                </div>
              </div>

              {/* Profile actions */}
              <div className="grid-rows-3 md:grid md:grid-cols-3 gap-4 text-center md:mt-10">

                {/* Bookings */}
                <Link to="/profile/bookings" className="bg-grey-100 p-4 rounded-lg shadow-md flex flex-col items-center my-3 md:my-0">
                  <div className="bg-grey-300 w-12 h-12 mb-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.7} stroke="currentColor" className="w-12 h-12">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                    </svg>

                  </div>
                  <h3 className="text-lg font-semibold">My bookings</h3>
                  <p className="text-grey-600 text-sm">Overview of all your upcoming bookings</p>
                </Link>

                {/* Venues */}
                <Link to="/profile/venues" className="bg-grey-100 p-4 rounded-lg shadow-md flex flex-col items-center my-3 md:my-0">
                  <div className="bg-grey-300 w-12 h-12 mb-2 rounded-md flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.7} stroke="currentColor" className="w-11 h-11">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">My venues</h3>
                  <p className="text-grey-600 text-sm">Overview of all your venues</p>
                </Link>

                {/* Edit profile */}
                <Link to="/profile/settings" className="bg-grey-100 p-4 rounded-lg shadow-md flex flex-col items-center my-3 md:my-0">
                  <div className="bg-grey-300 w-12 h-12 mb-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.7} stroke="currentColor" className="w-12 h-12">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Edit profile</h3>
                  <p className="text-grey-600 text-sm">Update your profile information here</p>
                </Link>
              </div>
            </div>
          </div>        
      )}
    </div>
  );
}
