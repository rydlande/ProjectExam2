import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRegister } from '../../../hooks/auth/useRegister.jsx';

export const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [avatarAlt, setAvatarAlt] = useState('');
  const register = useRegister();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
      name,
      avatar: {
        url: avatarUrl,
        alt: avatarAlt
      }
    };
    await register(userData, () => navigate('/profile'));  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
          <label htmlFor="name" className='block text-sm font-medium leading-6 text-grey-700'>Name:</label>
          <div className='mt-2'>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className='block w-full rounded-md border-0 py-1.5 text-grey-700 shadow-sm ring-1 ring-inset ring-grey-300 placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-teal sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className='block text-sm font-medium leading-6 text-grey-700'>Email:</label>
          <div className='mt-2 relative'>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='block w-full rounded-md border-0 py-1.5 text-grey-700 shadow-sm ring-1 ring-inset ring-grey-300 placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-teal sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div>
          <div className='flex items-center justify-between'>
            <label htmlFor="password" className='block text-sm font-medium leading-6 text-grey-700'>Password:</label>
          </div>
          <div className='text-sm'>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='block w-full rounded-md border-0 py-1.5 text-grey-700 shadow-sm ring-1 ring-inset ring-grey-300 placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-teal sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div>
          <div className='flex items-center justify-between'>
            <label htmlFor="password" className='block text-sm font-medium leading-6 text-grey-700'>Avatar:</label>
          </div>
          <div className="flex">
            <span className=" rounded-l-md inline-flex items-center px-3 text-sm text-grey-700 bg-grey-200 border rounded-e-0 border-grey-300 border-e-0">
              <svg className="w-4 h-4 text-grey-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
              </svg>
            </span>
              <input
                type="avatar"
                value={avatarUrl}
                onChange={(e) => setAvatarUrl(e.target.value)}
                className='block w-full rounded-r-md border-0 py-1.5 text-grey-700 shadow-sm ring-1 ring-inset ring-grey-300 placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-teal sm:text-sm sm:leading-6'
              />
            </div>
            <input
                type="avatar"
                value={avatarAlt}
                placeholder='Alt text for avatar image'
                onChange={(e) => setAvatarAlt(e.target.value)}
                className='block w-full rounded-md border-0 py-1.5 text-grey-700 shadow-sm ring-1 ring-inset ring-grey-300 placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-teal sm:text-sm sm:leading-6'
              />
        </div>

        <div>
          <div className='flex items-start mb-6'>
            <div className="flex items-center h-5">
              <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-grey-300 rounded bg-grey-50 focus:ring-3 focus:ring-blue-300" required />
            </div>
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-grey-700">Venue manager</label>
          </div>
        </div>


        <div>
          <button type="submit" className='flex w-full justify-center rounded-md bg-teal px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal'>Register</button>
        </div>      
      </form>

      <p className='mt-10 text-center text-sm text-grey-500'>
        Already a mebmer?
        <Link to='/auth/login' className='font-semibold leading-6 text-teal hover:text-teal-dark'> Sign In</Link>
      </p>
    </div>
  );
};