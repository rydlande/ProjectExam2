import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { useSpecificVenueStore } from "../../../hooks/venues/useSpecificVenue";
import { Loader } from '../../loader'

export function EditVenueForm() {
    const { id } = useParams();
    const { venue, loading, fetchVenue, updateVenue } = useSpecificVenueStore();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [mediaUrl, setMediaUrl] = useState("");
    const [mediaAlt, setMediaAlt] = useState("");
    const [price, setPrice] = useState(0);
    const [maxGuests, setMaxGuests] = useState(0);
    const [rating, setRating] = useState(0);
    const [wifi, setWifi] = useState(false);
    const [parking, setParking] = useState(false);
    const [breakfast, setBreakfast] = useState(false);
    const [pets, setPets] = useState(false);
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [country, setCountry] = useState("");
    const [continent, setContinent] = useState("");
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    useEffect(() => {
        fetchVenue(id);
    }, [id]);

    useEffect(() => {
        if (venue) {
            setName(venue.name || "");
            setDescription(venue.description || "");
            if (venue.media && venue.media[0]) {
                setMediaUrl(venue.media[0].url || "");
                setMediaAlt(venue.media[0].alt || "");
            } else {
                setMediaUrl("");
                setMediaAlt("");
            }
            setPrice(venue.price || 0);
            setMaxGuests(venue.maxGuests || 0);
            setRating(venue.rating || 0);
            setWifi(venue.meta?.wifi || false);
            setParking(venue.meta?.parking || false);
            setBreakfast(venue.meta?.breakfast || false);
            setPets(venue.meta?.pets || false);
            setAddress(venue.location?.address || "");
            setCity(venue.location?.city || "");
            setZip(venue.location?.zip || "");
            setCountry(venue.location?.country || "");
            setContinent(venue.location?.continent || "");
            setLat(venue.location?.lat || 0);
            setLng(venue.location?.lng || 0);
        }
    }, [venue]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedVenue = {
            name,
            description,
            media: [{ url: mediaUrl, alt: mediaAlt }],
            price,
            maxGuests,
            rating,
            meta: {
                wifi,
                parking,
                breakfast,
                pets,
            },
            location: {
                address,
                city,
                zip,
                country,
                continent,
                lat,
                lng,
            },
        };

        try {
            await updateVenue(id, updatedVenue);
            setAlertMessage('Venue updated successfully');
            setAlertType('success');
        } catch (error) {
            setAlertMessage('Error updating venue');
            setAlertType('error');
        }
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <form onSubmit={handleSubmit} className="p-4 max-w-lg mx-auto">
            <div className="mb-4 flex flex-col">
                <div className="flex flex-col mb-2">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Change name"
                        className="mb-2 p-2 border border-grey-300 rounded"
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Change description"
                        className="mb-4 p-2 border border-grey-300 rounded"
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label>Media URL:</label>
                    <input
                        type="text"
                        value={mediaUrl}
                        onChange={(e) => setMediaUrl(e.target.value)}
                        placeholder="Change media URL"
                        className="mb-2 p-2 border border-grey-300 rounded"
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label>Media Alt Text:</label>
                    <input
                        type="text"
                        value={mediaAlt}
                        onChange={(e) => setMediaAlt(e.target.value)}
                        placeholder="Change media alt text"
                        className="mb-4 p-2 border border-grey-300 rounded"
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label>Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(parseFloat(e.target.value))}
                        placeholder="Change price"
                        className="mb-2 p-2 border border-grey-300 rounded"
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label>Max Guests:</label>
                    <input
                        type="number"
                        value={maxGuests}
                        onChange={(e) => setMaxGuests(parseFloat(e.target.value))}
                        placeholder="Change max guests"
                        className="mb-2 p-2 border border-grey-300 rounded"
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label>Rating:</label>
                    <input
                        type="number"
                        value={rating}
                        onChange={(e) => setRating(parseFloat(e.target.value))}
                        placeholder="Change rating"
                        className="mb-2 p-2 border border-grey-300 rounded"
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <label className="block text-grey-700 mr-2">WiFi:</label>
                    <input
                        type="checkbox"
                        checked={wifi}
                        onChange={(e) => setWifi(e.target.checked)}
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <label className="block text-grey-700 mr-2">Parking:</label>
                    <input
                        type="checkbox"
                        checked={parking}
                        onChange={(e) => setParking(e.target.checked)}
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <label className="block text-grey-700 mr-2">Breakfast:</label>
                    <input
                        type="checkbox"
                        checked={breakfast}
                        onChange={(e) => setBreakfast(e.target.checked)}
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <label className="block text-grey-700 mr-2">Pets:</label>
                    <input
                        type="checkbox"
                        checked={pets}
                        onChange={(e) => setPets(e.target.checked)}
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label>Address:</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Change address"
                        className="mb-2 p-2 border border-grey-300 rounded"
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label>City:</label>
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Change city"
                        className="mb-2 p-2 border border-grey-300 rounded"
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label>ZIP:</label>
                    <input
                        type="text"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        placeholder="Change zip"
                        className="mb-2 p-2 border border-grey-300 rounded"
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label>Country:</label>
                    <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="Change country"
                        className="mb-2 p-2 border border-grey-300 rounded"
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label>Continent:</label>
                    <input
                        type="text"
                        value={continent}
                        onChange={(e) => setContinent(e.target.value)}
                        placeholder="Change continent"
                        className="mb-2 p-2 border border-grey-300 rounded"
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label>Latitude:</label>
                    <input
                        type="number"
                        value={lat}
                        onChange={(e) => setLat(parseFloat(e.target.value))}
                        placeholder="Change latitude"
                        className="mb-2 p-2 border border-grey-300 rounded"
                    />
                </div>
                <div className="flex flex-col mb-2">
                    <label>Longitude:</label>
                    <input
                        type="number"
                        value={lng}
                        onChange={(e) => setLng(parseFloat(e.target.value))}
                        placeholder="Change longitude"
                        className="mb-2 p-2 border border-grey-300 rounded"
                    />
                </div>
            </div>
            <div className="flex justify-between">
                <Link to="/profile/venues">
                    <button className="bg-grey-300 text-grey-700 py-2 px-4 rounded">
                        Back
                    </button>
                </Link>
                  <button type='submit' className='bg-yellow-light text-teal-dark hover:bg-yellow font-bold py-2 px-4 rounded'>
                      Save
                  </button>
            </div>
            {alertMessage && (
                <div className={`mt-4 text-center rounded ${alertType === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                    {alertMessage}
                </div>
            )}
        </form>
    );
}
