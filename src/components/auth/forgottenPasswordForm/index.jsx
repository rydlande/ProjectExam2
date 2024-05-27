import { Link } from 'react-router-dom';

export function ForgottenPasswordForm() {
  return (
    <>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className='space-y-6'>
          <div>
            <label htmlFor="email" className='block text-sm font-medium leading-6 text-grey-700'>Email:</label>
              <div className='mt-2'>
                <input
                  type="email"
                  id="email"
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-grey-700 shadow-sm ring-1 ring-inset ring-grey-300 placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-teal sm:text-sm sm:leading-6'
                />
              </div>
          </div>
          <div>
            <button type="submit" className='flex w-full justify-center rounded-md bg-teal px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal'>Send recovery code</button>
          </div>
        </form>
        <p className='mt-10 text-center text-sm text-grey-500'>
            Do you remember the password?
          <Link to='/auth/login' className='font-semibold leading-6 text-teal hover:text-teal-dark'> Sign in</Link>
        </p>
      </div>
    </>
  );
};