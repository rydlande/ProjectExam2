import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
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
  Venues 
} from './routes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Venues />,
      },
      {
        path: 'venues',
        element: <Venues />,
        children: [
          {
            path: ':id',
            element: <SpecificVenue />,
          },
        ],
      },
      {
        path: 'profile',
        element: <MyProfile />,
        children: [
          {
            path: 'settings',
            element: <EditProfile />,
          },
          {
            path: 'bookings',
            element: <MyBookings />,
            children: [
              {
                path: 'update',
                element: <EditBooking />,
              },
            ],
          },
          {
            path: 'venues',
            element: <MyVenues />,
            children: [
              {
                path: 'update',
                element: <EditVenue />,
              },
              {
                path: 'create',
                element: <CreateVenue />,
              }
            ],
          },
        ],
      },
      {
        path: 'auth',
        element: <Login />,
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
