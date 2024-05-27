import { EditProfileForm } from '../../../../components/profile/editProfile/editProfileForm';

export function EditProfile() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-teal-light">
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg w-3/4 max-w-2xl mt-6 max-h-[1100px] md:max-h-[800px]">
        <EditProfileForm/>
    </div>
  </div>
  );
}