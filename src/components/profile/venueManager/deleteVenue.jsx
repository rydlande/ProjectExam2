import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSpecificVenueStore } from '../../../hooks/venues/useSpecificVenue';

export function DeleteVenue() {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const { deleteVenue } = useSpecificVenueStore();
  const navigate = useNavigate();

  const handleDelete = async () => {
    const status = await deleteVenue(id);
    if (status === 204) {
      console.log('Venue deleted successfully');
      setShowModal(false);
      navigate('/profile/venues');
    } else {
      console.error('Failed to delete venue');
    }
  };

  return (
    <>
    <div>
      <button onClick={() => setShowModal(true)} className='text-red-600 mb-2'>
        Delete Venue
      </button>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Are you sure you want to delete this venue?</h2>
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
      </div>
    </>
  );
}