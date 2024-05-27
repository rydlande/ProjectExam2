import { Link } from "react-router-dom";

export function Error() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-red-50">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
                <p className="text-gray-700 mb-6">Something went wrong. Please try again later.</p>
                <Link to="/">
                    <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
                        Go to Home
                    </button>
                </Link>
            </div>
        </div>
    );
}
