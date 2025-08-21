import React from 'react';

const CoverPage = ({ openInvitation }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-90 z-50 animate-fade-in-up"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center text-white p-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <p className="font-light mb-4 font-playfair">The Wedding of</p>
        <h1 className="text-5xl md:text-6xl font-great-vibes font-bold mb-2">Debby & Ihsan</h1>
        <p className="font-light mb-8 text-sm">Minggu, 15 Desember 2024</p>
        <p className="font-light mb-6">Kpd Bpk/Ibu/Saudara/i</p>

        <button
          onClick={openInvitation}
          className="bg-maroon-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
        >
          Buka Undangan
        </button>
      </div>
    </div>
  );
};

export default CoverPage;
