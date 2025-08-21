import React from 'react';

const Header = () => {
  return (
    <header
      className="relative h-80 bg-cover bg-center rounded-md"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-4 text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-light mb-2 animate-fade-in-down header-content mt-20 text-white">
          Our Wedding Invitation
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-none text-white animate-scale-in header-content">
          Debby & Ihsan
        </h1>
        <p className="mt-20 mb-20 text-sm sm:text-base md:text-lg font-light tracking-wide animate-fade-in-up header-tagline">
          Sabtu, 6 September 2025
        </p>
      </div>
    </header>
  );
};

export default Header;
