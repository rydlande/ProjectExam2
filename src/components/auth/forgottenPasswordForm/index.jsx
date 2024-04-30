import { Link } from 'react-router-dom';

export function ForgottenPasswordForm() {
  return (
    <>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className='space-y-6'>
          <div>
            <label htmlFor="email" className='block text-sm font-medium leading-6 text-gray-900'>Email:</label>
              <div className='mt-2'>
                <input
                  type="email"
                  id="email"
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
          </div>
          <div>
            <button type="submit" className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Send recovery code</button>
          </div>
        </form>
        <p className='mt-10 text-center text-sm text-gray-500'>
            Do you remember the password?
          <Link to='/auth/login' className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'> Sign in</Link>
        </p>
      </div>
    </>
  );
};