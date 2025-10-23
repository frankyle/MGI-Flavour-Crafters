import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Tried to access:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center px-6">
        <h1 className="mb-4 text-6xl font-bold text-red-600">404</h1>
        <p className="mb-4 text-xl text-gray-700">Oops! Page not found.</p>
        <p className="mb-6 text-gray-500">
          The page you’re looking for doesn’t exist or was moved.
        </p>
        <Link
          to="/"
          className="inline-block rounded-lg bg-green-600 text-white px-6 py-3 font-medium hover:bg-green-700 transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
