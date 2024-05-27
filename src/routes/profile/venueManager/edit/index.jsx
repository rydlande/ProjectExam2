import { EditVenueForm } from '../../../../components/profile/venueManager/updateVenue'
import { DeleteVenue } from '../../../../components/profile/venueManager/deleteVenue'

export function EditVenue() {
    return (
        <div>
            <EditVenueForm />
            <DeleteVenue />
        </div>
    );
}