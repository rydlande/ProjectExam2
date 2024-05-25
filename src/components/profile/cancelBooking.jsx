import { useEffect, useState } from "react";
import { useProfileStore } from "../../hooks/stores";

export function CancelBooking({ booking }) {
    const [showModal, setShowModal] = useState(false);
    const { profile, fetchProfile } = useProfileStore();

    useEffect(() => {
        fetchProfile();
    }, [fetchProfile]);

    const handleDelete = async () => {
        const response = await fetch(`https://v2.api.noroff.dev/holidaze/bookings/${booking.id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                "X-Noroff-API-Key": localStorage.getItem('apiKey')
            }
        });

        if (response.status === 204) {
            fetchProfile();
            setShowModal(false);
        } else {
            console.error('Failed to cancel booking');
        }
    };

    return (
        <>
            <button 
                onClick={() => setShowModal(true)}
                className="text-red-600 mb-2"
            >
                Cancel booking
            </button>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Are you sure you want to cancel this booking?</h2>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
                            >
                                Go back
                            </button>
                            <button
                                onClick={handleDelete}
                                className="bg-red-500 text-white py-2 px-4 rounded"
                            >
                                Yes
                            </button>
                            
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
