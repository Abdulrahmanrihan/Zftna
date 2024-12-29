import React from 'react';
// Homepage Component
function HomePage() {
    return (
      <div className="text-center bg-gray-50 min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-pink-600">Welcome to Zaftna</h1>
        <p className="text-gray-700 mt-4">Your one-stop solution for all wedding needs!</p>
        <img src="/logo.png" alt="Chic Weddings Logo" className="w-48 mt-6" />
      </div>
    );
  }

export default HomePage;