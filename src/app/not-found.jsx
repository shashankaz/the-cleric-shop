import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 py-10 max-w-7xl mx-auto min-h-screen text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800">
        404
      </h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-600 mt-2">
        Page Not Found
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-4">
        Sorry, the page you're looking for does not exist or has been moved.
      </p>
      <Link href="/">
        <div className="mt-6 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition duration-200">
          Go to Homepage
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
