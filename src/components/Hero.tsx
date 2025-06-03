import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Welcome to Selflogue
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8">
          Discover the power of self-reflection and personal growth
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero; 