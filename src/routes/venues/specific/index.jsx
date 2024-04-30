import { useParams } from 'react-router-dom';

export function SpecificVenue() {
  const { id } = useParams();

    return <div>Specific venue id</div>;
  }