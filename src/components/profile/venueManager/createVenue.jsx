import { useState } from "react";
import { useVenuesStore } from "../../../hooks/venues/useVenues";

export function CreateNewVenue() {
    const createVenue = useVenuesStore((state) => state.createVenue);
    const [alert, setAlert] = useState({ message: '', visible: false });
    const { error } = useVenuesStore();

    const [venue, setVenue] = useState({
        name: "",
        description: "",
        media: [{ url: "", alt: "" }],
        price: 0,
        maxGuests: 0,
        rating: 0,
        meta: {
            wifi: false,
            parking: false,
            breakfast: false,
            pets: false,
        },
        location: {
            address: "",
            city: "",
            zip: "",
            country: "",
            continent: "",
            lat: 0,
            lng: 0,
        }
    });

    const initialFormState = {
        name: "",
        description: "",
        media: [{ url: "", alt: "" }],
        price: 0,
        maxGuests: 0,
        rating: 0,
        meta: {
            wifi: false,
            parking: false,
            breakfast: false,
            pets: false,
        },
        location: {
            address: "",
            city: "",
            zip: "",
            country: "",
            continent: "",
            lat: 0,
            lng: 0,
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setVenue((prevVenue) => ({
                ...prevVenue,
                meta: { ...prevVenue.meta, [name]: checked },
            }));
        } else if (name.startsWith('location.')) {
            const locationKey = name.split('.')[1];
            setVenue((prevVenue) => ({
                ...prevVenue,
                location: { ...prevVenue.location, [locationKey]: value },
            }));
        } else {
            const newValue = type === "number" && value !== "" ? parseFloat(value) : value;
            setVenue((prevVenue) => ({ ...prevVenue, [name]: newValue }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await createVenue(venue);
        if (success) {
            setVenue(initialFormState)
            setAlert({ 
                message: 'Your new venue was registered. You can find all your venues and bookings on your profile page.',
                visible: true 
            });
        } else {
            console.log('Error:', error, error.message);
        };
    };

    if (alert.visible) {
        return (
            <div>
                {alert.message}
                <button onClick={() => setAlert({ ...alert, visible: false })}>Add new venue</button>
                <a href="/profile/myProfile">Go to profile</a>
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <form onSubmit={handleSubmit} className="p-4 max-w-lg mx-auto">
            <div className="mb-4">
                <label className="block text-grey-700">Name</label>
                <input
                    type="text"
                    name="name"
                    value={venue.name}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-grey-700">Description</label>
                <textarea
                    name="description"
                    value={venue.description}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-grey-700">Media URL</label>
                <input
                    type="text"
                    name="media[0].url"
                    value={venue.media[0].url}
                    onChange={(e) => setVenue((prevVenue) => ({
                        ...prevVenue,
                        media: [{ url: e.target.value, alt: venue.media[0].alt }],
                    }))}
                    className="mt-1 p-2 block w-full border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-grey-700">Media Alt Text</label>
                <input
                    type="text"
                    name="media[0].alt"
                    value={venue.media[0].alt}
                    onChange={(e) => setVenue((prevVenue) => ({
                        ...prevVenue,
                        media: [{ url: venue.media[0].url, alt: e.target.value }],
                    }))}
                    className="mt-1 p-2 block w-full border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-grey-700">Price</label>
                <input
                    type="number"
                    name="price"
                    value={venue.price}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-grey-700">Max Guests</label>
                <input
                    type="number"
                    name="maxGuests"
                    value={venue.maxGuests}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-grey-700">Rating</label>
                <input
                    type="number"
                    name="rating"
                    value={venue.rating}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border rounded-md"
                />
            </div>
            <div className="mb-4 flex items-center">
                <label className="block text-grey-700 mr-2">WiFi</label>
                <input
                    type="checkbox"
                    name="wifi"
                    checked={venue.meta.wifi}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4 flex items-center">
                <label className="block text-grey-700 mr-2">Parking</label>
                <input
                    type="checkbox"
                    name="parking"
                    checked={venue.meta.parking}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4 flex items-center">
                <label className="block text-grey-700 mr-2">Breakfast</label>
                <input
                    type="checkbox"
                    name="breakfast"
                    checked={venue.meta.breakfast}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4 flex items-center">
                <label className="block text-grey-700 mr-2">Pets</label>
                <input
                    type="checkbox"
                    name="pets"
                    checked={venue.meta.pets}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-grey-700">Address</label>
                <input
                    type="text"
                    name="address"
                    value={venue.location.address}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-grey-700">City</label>
                <input
                    type="text"
                    name="city"
                    value={venue.location.city}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-grey-700">ZIP</label>
                <input
                    type="text"
                    name="zip"
                    value={venue.location.zip}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-grey-700">Country</label>
                <input
                    type="text"
                    name="country"
                    value={venue.location.country}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-grey-700">Continent</label>
                <input
                    type="text"
                    name="continent"
                    value={venue.location.continent}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-grey-700">Latitude</label>
                <input
                    type="number"
                    name="lat"
                    value={venue.location.lat}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label className="block text-grey-700">Longitude</label>
                <input
                    type="number"
                    name="lng"
                    value={venue.location.lng}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full border rounded-md"
                />
            </div>
            <button type="submit" className='bg-teal text-white hover:bg-teal-dark font-semibold py-2 px-4 rounded'>
                Create Venue
            </button>
        </form>
    );
};

