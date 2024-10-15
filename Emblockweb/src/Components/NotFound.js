import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center space-y-8">
      <div className="flex flex-col items-center justify-center">
        <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-green-400">
          404
        </p>
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-green-400 mt-2">
          Page Not Found
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-500 my-8">
          Sorry, the page you are looking for could not be found.
        </p>
        <Link
          to="/"
          className="flex items-center space-x-2 bg-green-400 hover:bg-green-500 text-gray-100 px-4 py-2 rounded transition duration-150"
          title="Return Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span>Return Home</span>
        </Link>
      </div>

      <div className="w-full flex justify-center">
        <svg
          className="w-full max-w-md text-green-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1120.59226 777.91584"
        >
          <title>not found</title>
          {/* Your SVG content */}
        </svg>
      </div>
    </div>
  );
}

export default NotFound;
