import React, { useEffect, useState } from 'react';

const CoupleBio = () => {
  // State untuk melacak visibilitas elemen
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);

  // Fungsi untuk memantau elemen dengan IntersectionObserver
  useEffect(() => {
    const leftObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsLeftVisible(true); // Saat elemen dari kiri muncul
        }
      });
    }, { threshold: 0.5 });

    const rightObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsRightVisible(true); // Saat elemen dari kanan muncul
        }
      });
    }, { threshold: 0.5 });

    // Mengamati elemen dengan class 'left' dan 'right'
    const leftElement = document.querySelector('.couple-bio-left');
    const rightElement = document.querySelector('.couple-bio-right');

    if (leftElement) leftObserver.observe(leftElement);
    if (rightElement) rightObserver.observe(rightElement);

    // Cleanup observer ketika komponen di-unmount
    return () => {
      if (leftElement) leftObserver.disconnect();
      if (rightElement) rightObserver.disconnect();
    };
  }, []);

  return (
    <section className="bg-gold-50 p-6 rounded-2xl shadow-inner mb-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-great-vibes text-maroon-500 mb-2">Bride & Groom</h3>
        <p className="text-sm text-gray-600 leading-relaxed max-w-sm mx-auto">
          Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:
        </p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Pihak Wanita - Dari Kiri */}
        <div
          className={`couple-bio-left w-full text-center ${isLeftVisible ? 'animate-fade-in-from-left' : ''}`}
        >
          <img 
            src="female.jpeg" 
            alt="Siti" 
            className="w-30 h-32 rounded-full mx-auto mb-4 border-4 border-maroon-500 shadow-lg object-cover transform hover:scale-105 transition-transform duration-300" 
          />
          <h4 className="text-5xl font-great-vibes text-maroon-500 mb-2 name-content">Debby</h4>
          <p className="text-xl font-bold text-maroon-600 mb-2">Arnida Debby Fittaloka</p>
          <p className="text-sm text-gray-600 leading-relaxed">Putri ke 1 dari</p>
          <p className="text-md font-medium text-maroon-500">Bapak agus eko supriyanto (Alm.)</p>
        </div>

        <div className="text-5xl text-maroon-500 my-4">&</div>

        {/* Pihak Pria - Dari Kanan */}
        <div
          className={`couple-bio-right w-full text-center ${isRightVisible ? 'animate-fade-in-from-right' : ''}`}
        >
          <img 
            src="pria.jpeg" 
            alt="Ihsan" 
            className="w-30 h-32 rounded-full mx-auto mb-4 border-4 border-maroon-500 shadow-lg object-cover transform hover:scale-105 transition-transform duration-300" 
          />
          <h4 className="text-5xl font-great-vibes text-maroon-500 mb-2 header-content">Ihsan</h4>
          <p className="text-xl font-bold text-maroon-600 mb-2">Muhamad Nur Ihsan S</p>
          <p className="text-sm text-gray-600 leading-relaxed">Putra ke 2 dari</p>
          <p className="text-md font-medium text-maroon-500">Bapak R. Bagus Rahmat Susanto dan Ibu Sri Hartati</p>
        </div>
      </div>
    </section>
  );
};

export default CoupleBio;
