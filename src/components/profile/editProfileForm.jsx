import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export function EditProfileForm({ profile }) {
    const [avatar, setAvatar] = useState('');
    const [avatarCaption, setAvatarCaption] = useState('');
    const [banner, setBanner] = useState('');
    const [bannerCaption, setBannerCaption] = useState('');
    const [bio, setBio] = useState('');
    const [venueManager, setVenueManager] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    useEffect(() => {
        setAvatar(profile.avatar?.url || '');
        setAvatarCaption(profile.avatar?.caption || '');
        setBanner(profile.banner?.url || '');
        setBannerCaption(profile.banner?.caption || '');
        setBio(profile.bio || '');
        setVenueManager(profile.venueManager || false);
      }, [profile]);

      const isValidURL = (string) => {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (bio && bio.length >= 160) {
            setAlertMessage('Bio must be less than 160 characters');
            setAlertType('error');
            return;
        }
        if (avatar && !isValidURL(avatar)) {
            setAlertMessage('Avatar URL must be valid and accessible');
            setAlertType('error');
            return;
        }
        if (avatarCaption && avatarCaption.length >= 120) {
            setAlertMessage('Avatar alt text must be less than 120 characters');
            setAlertType('error');
            return;
        }
        if (banner && !isValidURL(banner)) {
            setAlertMessage('Banner URL must be valid and accessible');
            setAlertType('error');
            return;
        }
        if (bannerCaption && bannerCaption.length >= 120) {
            setAlertMessage('Banner alt text must be less than 120 characters');
            setAlertType('error');
            return;
        }

        const updatedProfile = {
            avatar: {
                url: avatar,
                caption: avatarCaption,
            },
            banner: {
                url: banner,
                caption: bannerCaption,
            },
            bio: bio,
            venueManager: venueManager
        };
        
        const res = await fetch(`https://v2.api.noroff.dev/holidaze/profiles/${profile.name}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                "X-Noroff-API-Key": localStorage.getItem('apiKey')
            },
            body: JSON.stringify(updatedProfile)
        });
    
        if (res.ok) {
            setAlertMessage('Profile updated successfully');
            setAlertType('success');
        } else if (res.status === 400) {
            setAlertMessage('Error: Avatar or Banner URL is not publicly accessible');
            setAlertType('error');
        } else {
            setAlertMessage('Error updating profile');
            setAlertType('error');
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className='text-sm'>
            <div className="mb-4 flex flex-col">
                <div className='flex flex-col-reverse items-center justify-evenly md:flex-row'>
                    <div className="w-32 h-32 rounded-lg overflow-hidden mb-4">
                        <img src={avatar} alt={avatarCaption} className="object-cover w-full h-full"/>
                    </div>
                    <div className=" w-56 h-32 rounded-lg overflow-hidden mb-4">
                        <img src={banner} alt={bannerCaption} className="object-cover w-full h-full"/>
                    </div>
                </div>
                <div className="flex flex-col mb-2">
                    <label>Avatar URL:</label>
                    <input
                        type="text"
                        value={avatar}
                        onChange={(e) => setAvatar(e.target.value)}
                        placeholder="Change avatar"
                        className="mb-2 p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label>Avatar Caption:</label>
                    <input
                        type="text"
                        value={avatarCaption}
                        onChange={(e) => setAvatarCaption(e.target.value)}
                        placeholder="Change caption"
                        className="mb-4 p-2 border border-gray-300 rounded"
                    />
                </div>
            </div>
            <div className="mb-4">
                <label>
                    Banner URL:
                    <input
                        type="text"
                        value={banner}
                        onChange={(e) => setBanner(e.target.value)}
                        placeholder="Change banner"
                        className="mb-2 p-2 border border-gray-300 rounded w-full"
                    />
                </label>
                <label>
                    Banner Caption:
                    <input
                        type="text"
                        value={bannerCaption}
                        onChange={(e) => setBannerCaption(e.target.value)}
                        placeholder="Change caption"
                        className="mb-2 p-2 border border-gray-300 rounded w-full"
                    />
                </label>
            </div>
            <div className="mb-4">
                <label>
                    Bio:
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Change bio"
                        className="p-2 border border-gray-300 rounded w-full"
                    />
                </label>
            </div>
            <div className="mb-8">
                <label>
                    <input
                        type="checkbox"
                        checked={venueManager}
                        onChange={(e) => setVenueManager(e.target.checked)}
                        className="mr-2"
                    />
                    Venue Manager
                </label>
            </div>
            <div className="flex justify-between">
                <Link to="/profile/myProfile">
                    <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded">
                        Back
                    </button>
                </Link>
                <button type='submit' className="bg-blue-500 text-white py-2 px-4 rounded">
                    Save
                </button>
            </div>
            {alertMessage && (
                <div className={`mt-4 text-center rounded ${alertType === 'success' ? 'text-green-600' : ' text-red-600'}`}>
                    {alertMessage}
                </div>
            )}
        </form>
    );
}