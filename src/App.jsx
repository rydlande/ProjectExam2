import { Layout } from './layout'
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useVenuesStore } from './hooks/stores.js';

function App() {
  const { venues, fetchVenues } = useVenuesStore((state) => ({
    venues: state.venues,
    fetchVenues: state.fetchVenues
  }));

  useEffect(() => {
    fetchVenues();
  }, []);

  return (
    <>
      <div className='flex flex-col h-screen'>
        <Layout venues={venues}>
          <Outlet context={{ venues }}/>
        </Layout>
      </div>
    </>
  )
}

export default App
