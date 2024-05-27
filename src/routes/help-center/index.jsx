export function HelpCenter() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-3xl font-bold leading-7 text-gray-900 sm:text-4xl sm:truncate">
              Help Center
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Welcome to our Help Center. Here you can find answers to common questions, tutorials, and contact information for further assistance.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-50 p-4 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-900">FAQs</h3>
                <p className="mt-2 text-gray-600">
                  Find answers to frequently asked questions.
                </p>
                <a href="#faqs" className="mt-4 text-blue-500 hover:underline">
                  Learn More &rarr;
                </a>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-900">Tutorials</h3>
                <p className="mt-2 text-gray-600">
                  Step-by-step guides to help you get started.
                </p>
                <a href="#tutorials" className="mt-4 text-blue-500 hover:underline">
                  Learn More &rarr;
                </a>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-900">Contact Us</h3>
                <p className="mt-2 text-gray-600">
                  Get in touch with our support team for further assistance.
                </p>
                <a href="#contact" className="mt-4 text-blue-500 hover:underline">
                  Learn More &rarr;
                </a>
              </div>
            </div>

            <div id="faqs" className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-900">Frequently Asked Questions</h3>
              <div className="mt-4">
                <details className="mb-4">
                  <summary className="font-semibold cursor-pointer">
                    How do I create an account?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    To create an account, click on the 'Sign Up' button on the top right corner and follow the instructions.
                  </p>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold cursor-pointer">
                    How do I reset my password?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    To reset your password, click on the 'Forgot Password' link on the login page and follow the instructions.
                  </p>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold cursor-pointer">
                    How can I contact support?
                  </summary>
                  <p className="mt-2 text-gray-600">
                    You can contact support by clicking on the 'Contact Us' link and filling out the form provided.
                  </p>
                </details>
              </div>
            </div>

            <div id="tutorials" className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-900">Tutorials</h3>
              <div className="mt-4">
                <details className="mb-4">
                  <summary className="font-semibold cursor-pointer">
                    How to create a new booking
                  </summary>
                  <p className="mt-2 text-gray-600">
                    To create a new booking, navigate to the 'New Booking' section and fill in the required details.
                  </p>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold cursor-pointer">
                    How to update your profile
                  </summary>
                  <p className="mt-2 text-gray-600">
                    To update your profile, go to the 'Profile' section and click on 'Edit Profile'. Make the necessary changes and save.
                  </p>
                </details>
              </div>
            </div>

            <div id="contact" className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-900">Contact Us</h3>
              <p className="mt-2 text-gray-600">
                If you need further assistance, please fill out the form below to contact our support team.
              </p>
              <form className="mt-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  ></textarea>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
