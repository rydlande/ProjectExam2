import { LoginForm } from '../../../components/auth/loginForm';

export function Login() {
  return (
    <div className='flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-teal-light'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow sm:rounded-lg w-full pb-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-grey-700'>Sign in to your account</h2>
      </div>
      <LoginForm />
    </div>
  </div>
  );
};
