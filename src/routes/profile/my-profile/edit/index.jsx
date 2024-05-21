import { useState } from 'react';

export function EditProfile() {
  const [avatar, setAvatar] = useState('');
  const [avatarCaption, setAvatarCaption] = useState('');
  const [banner, setBanner] = useState('');
  const [bannerCaption, setBannerCaption] = useState('');
  const [bio, setBio] = useState('');
  const [venueManager, setVenueManager] = useState(false);

  const handleSave = () => {
    // Fixing this soon
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-3/4">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-blue-200 w-32 h-32 rounded-md mb-4"></div>
          <input
            type="text"
            placeholder="Change avatar"
            className="mb-2 p-2 border border-gray-300 rounded"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
          <input
            type="text"
            placeholder="Caption"
            className="mb-4 p-2 border border-gray-300 rounded"
            value={avatarCaption}
            onChange={(e) => setAvatarCaption(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Change banner"
            className="mb-2 p-2 border border-gray-300 rounded w-full"
            value={banner}
            onChange={(e) => setBanner(e.target.value)}
          />
          <input
            type="text"
            placeholder="Caption"
            className="p-2 border border-gray-300 rounded w-full"
            value={bannerCaption}
            onChange={(e) => setBannerCaption(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Change bio"
            className="p-2 border border-gray-300 rounded w-full"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={venueManager}
              onChange={(e) => setVenueManager(e.target.checked)}
            />
            Venue manager
          </label>
        </div>
        <div className="flex justify-between">
          <button
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
            onClick={() => console.log('Cancelled')}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}