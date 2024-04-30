import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLogin } from '../../../hooks/auth/useLogin.jsx';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password, () => navigate('/'));
  };

  return (
    <>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label htmlFor="email" className='block text-sm font-medium leading-6 text-gray-900'>Email:</label>
              <div className='mt-2'>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <label htmlFor="password" className='block text-sm font-medium leading-6 text-gray-900'>Password:</label>
              <div className='text-sm'>
                <Link to='/auth/forgot-password' className='font-semibold text-indigo-600 hover:text-indigo-500'>Forgot password?</Link>
              </div>
            </div>
            <div className='text-sm'>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <button type="submit" className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Sign In</button>
          </div>
          {error && <p className="error">{error}</p>}
        </form>
        
        <p className='mt-10 text-center text-sm text-gray-500'>
          Not a mebmer?
          <Link to='/auth/register' className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'> Register</Link>
        </p>
      </div>
    </>
  );
};