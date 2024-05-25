import { useEffect } from 'react';
import { useProfileStore } from "../../../../hooks/profile/useProfile";
import { EditProfileForm } from '../../../../components/profile/editProfileForm';

export function EditProfile() {
  const { profile, loading, fetchProfile } = useProfileStore();

  useEffect(() => {
    fetchProfile();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg w-3/4 max-w-2xl mt-6 max-h-[1100px] md:max-h-[800px]">
       {profile && (
        <EditProfileForm profile={profile}/>
      )}
    </div>
  </div>
  );
}