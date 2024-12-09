import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-gray-700 text-xl mb-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="bg-cameleon-primary text-white py-2 px-4 rounded hover:bg-blue-800"
      >
        Return to Home
      </a>
    </div>
  );
};

export default NotFoundPage;