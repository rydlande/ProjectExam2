import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import {
  ForgottenPassword, 
  Login, 
  Register, 
  HelpCenter, 
  EditBooking, 
  MyBookings, 
  EditProfile, 
  MyProfile, 
  CreateVenue, 
  EditVenue, 
  MyVenues, 
  User, 
  SpecificVenue, 
  Venues,
  Error
} from './routes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Venues />,
      },
      {
        path: 'venues',
        children: [
          {
            path: 'all',
            element: <Venues />,
          },
          {
            path: ':id',
            element: <SpecificVenue />,
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: 'myProfile',
            element: <MyProfile />,
          },
          {
            path: 'settings',
            element: <EditProfile />,
          },
          {
            path: 'bookings',
            element: <MyBookings />,
          },
          {
            path: 'bookings/update',
            element: <EditBooking />,
          },
          {
            path: 'venues',
            element: <MyVenues />,
          },
          {
            path: 'venues/update',
            element: <EditVenue />,
          },
          {
            path: 'venues/create',
            element: <CreateVenue />,
          },
        ],
      },
      {
        path: 'auth',
        children: [
          {
            path: 'login',
            element: <Login />,
          },
          {
            path: 'register',
            element: <Register />,
          },
          {
            path: 'forgot-password',
            element: <ForgottenPassword />,
          }
        ],
      },
      {
        path: 'user',
        element: <User />,
      },
      {
        path: 'help-center',
        element: <HelpCenter />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)