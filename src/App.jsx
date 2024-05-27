import { Layout } from './layout'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='flex flex-col h-screen'>
        <Layout>
          <Outlet />
        </Layout>
      </div>
    </>
  )
}

export default App
