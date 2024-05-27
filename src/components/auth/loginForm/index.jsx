import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLogin } from '../../../hooks/auth/useLogin.jsx';
import { Loader } from '../../loader'

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, loading } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password, () => navigate('/'));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label htmlFor="email" className='block text-sm font-medium leading-6 text-grey-700'>Email:</label>
              <div className='mt-2'>
                <input
                  type="email"
                  id="email"
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
              <div className='text-sm'>
                <Link to='/auth/forgot-password' className='font-semibold text-teal hover:text-teal-dark'>Forgot password?</Link>
              </div>
            </div>
            <div className='text-sm'>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className='block w-full rounded-md border-0 py-1.5 text-grey-700 shadow-sm ring-1 ring-inset ring-grey-300 placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-teal sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <button type="submit" className='flex w-full justify-center rounded-md bg-teal px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal'>Sign In</button>
          </div>
          {error && <p className="error">{error}</p>}
        </form>
        
        <p className='mt-10 text-center text-sm text-grey-500'>
          Not a mebmer?
          <Link to='/auth/register' className='font-semibold leading-6 text-teal hover:text-teal-dark'> Register</Link>
        </p>
      </div>
    </>
  );
};