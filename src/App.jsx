import React, { useState, useRef, useEffect } from 'react';
import Header from './components/header';
import Footer from './components/Footer';
import EventDetails from './components/EventDetails';
import RSVPForm from './components/RSVPForm';
import StorySection from './components/Story';
import CoverPage from './components/CoverPage';
import './App.css';

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play">
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

const PauseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pause">
    <rect x="6" y="4" width="4" height="16" rx="1"></rect>
    <rect x="14" y="4" width="4" height="16" rx="1"></rect>
  </svg>
);

const GiftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gift">
    <polyline points="20 12 12 20 4 12"></polyline>
    <path d="M15 11v4a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4"></path>
    <path d="M12 2v20"></path>
    <path d="M7 6l-2-2m-2-2l-2 2"></path>
  </svg>
);


// Komponen utama App
const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [copyMessage, setCopyMessage] = useState('');

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const copyToClipboard = (text) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      setCopyMessage('Nomor rekening berhasil disalin!');
    } catch (err) {
      console.error('Gagal menyalin:', err);
      setCopyMessage('Gagal menyalin nomor rekening.');
    }
    document.body.removeChild(textarea);

    setTimeout(() => {
      setCopyMessage('');
    }, 3000);
  };

  const [isCoverPageOpen, setIsCoverPageOpen] = useState(true);

  const openInvitation = () => {
    setIsCoverPageOpen(false);  
  };

  return (
   <div 
    className="min-h-screen font-inter text-maroon-100 relative" 
    style={{ backgroundImage: "url('https://images.pexels.com/photos/1172849/pexels-photo-1172849.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        {isCoverPageOpen ? (
        <CoverPage openInvitation={openInvitation} />
      ) : (
      <div className="container py-8 mx-auto px-4 max-w-lg">
        <div className="bg-white shadow-xl overflow-hidden animate-fade-in-up">
          <Header />
          <main className="p-8">
            <div className="text-center mb-8">
              <p className="text-lg md:text-xl text-maroon-600 leading-relaxed mb-4">
                Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan acara pernikahan putra-putri kami:
              </p>
              <div className="relative inline-block mt-6 animate-scale-in">
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-playfair font-bold text-maroon-600 leading-tight">Debby & Ihsan</h2>
                </div>
              </div>
              <p className="mt-4 text-sm text-maroon-500 animate-fade-in-down">
                Minggu, 15 Desember 2024
              </p>
            </div>

            <CoupleBio />
            <StorySection />
            <EventDetails />
            {/* <RSVPForm /> */}
            <WeddingGift copyToClipboard={copyToClipboard} />
          </main>
          <Footer />
        </div>
      </div>
       )}

      <button
        onClick={toggleMusic}
        className="fixed bottom-4 right-4 z-50 p-3 bg-maroon-600 text-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
        aria-label={isPlaying ? "Jeda Musik" : "Putar Musik"}
      >
        <span className="text-xl">
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </span>
      </button>
       <audio ref={audioRef} src="/audio/tulus.mp3" loop />

      {copyMessage && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-green-500 text-white text-sm rounded-full shadow-lg transition-opacity duration-300 animate-fade-in-up">
          {copyMessage}
        </div>
      )}
     
      <style>
        {`
        /* Definisi palet warna kustom untuk Tailwind */
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        .bg-maroon-900 { background-color: #3b0e14; }
        .bg-maroon-800 { background-color: #5d1720; }
        .bg-maroon-700 { background-color: #7f212c; }
        .bg-maroon-600 { background-color: #a12a38; }
        .bg-maroon-500 { background-color: #c33444; }
        .bg-maroon-100 { background-color: #f1d8db; }
        .text-maroon-600 { color: #a12a38; }
        .text-maroon-500 { color: #c33444; }
        .text-maroon-100 { color: #f1d8db; }

        .bg-gold-50 { background-color: #fffaf0; }
        .text-gold-300 { color: #e5b35c; }
        .text-gold-500 { color: #d4a017; }
        .text-gold-700 { color: #a5883d; }
        .text-gold-800 { color: #735d18; }
        .border-gold-500 { border-color: #d4a017; }
        .focus-ring-gold-500:focus { --tw-ring-color: #d4a017; }
        .focus-border-gold-500:focus { border-color: #d4a017; }
        .hover-bg-gold-700:hover { background-color: #a5883d; }

        /* Keyframes untuk animasi */
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        /* Kelas utilitas untuk animasi */
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-pulse-slow {
          animation: pulseSlow 3s infinite;
        }

        /* Penundaan animasi untuk setiap elemen */
        .header-content { animation-delay: 0.5s; }
        .header-name { animation-delay: 0.8s; }
        .header-tagline { animation-delay: 1.2s; }
        .event-details-section { animation-delay: 1.5s; }
        .rsvp-form-section { animation-delay: 1.8s; }
        `}
      </style>
       
    </div>
  );
};

// Komponen Bio Pengantin
const CoupleBio = () => {
  return (
    <section className="bg-gold-50 p-6 rounded-2xl shadow-inner mb-8 animate-fade-in-up">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-great-vibes text-maroon-500 mb-2">Bride & Groom</h3>
        <p className="text-sm text-gray-600 leading-relaxed max-w-sm mx-auto">
          Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:
        </p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Pihak Wanita */}
        <div className="w-full text-center animate-fade-in-down">
            <img 
                src="/female.jpeg" 
                alt="Siti" 
                className="w-30 h-32 rounded-full mx-auto mb-4 border-4 border-maroon-500 shadow-lg object-cover transform hover:scale-105 transition-transform duration-300" 
            />
            <h4 className="text-3xl font-great-vibes text-maroon-500 mb-2 name-content">Debby</h4>
            <p className="text-xl font-bold text-maroon-600 mb-2">Arnida Debby Fittaloka</p>
            <p className="text-sm text-gray-600 leading-relaxed">Putri dari</p>
            <p className="text-md font-medium text-maroon-500">Alm. Bapak Agus Eko Supriyanto dan Ibu Safilinda</p>
            <a href="#" className="inline-block mt-4 text-maroon-600 hover:text-maroon-800 transition-colors duration-300">
                <span className="flex items-center mx-auto w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram mr-2">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37a4 4 0 1 1-6.16-3.23 4 4 0 0 1 6.16 3.23z"></path>
                    <line x1="17.5" x2="17.5" y1="6.5" y2="6.5"></line>
                </svg>
                @debbyy
                </span>
            </a>
        </div>


        <div className="text-5xl text-maroon-500 my-4">&</div>

        {/* Pihak Pria */}
        <div className="w-full text-center animate-fade-in-up">
           <img 
                src="/pria.jpeg" 
                alt="Siti" 
                className="w-30 h-32 rounded-full mx-auto mb-4 border-4 border-maroon-500 shadow-lg object-cover transform hover:scale-105 transition-transform duration-300" 
            />
          <h4 className="text-3xl font-great-vibes text-maroon-500 mb-2 name-content">Budi</h4>
          <p className="text-xl font-bold text-maroon-600 mb-2">Muhamad Nur Ihsan S</p>
          <p className="text-sm text-gray-600 leading-relaxed">Putra dari</p>
          <p className="text-md font-medium text-maroon-500">Bapak R. Bagus Rahmat Susanto dan Ibu Sri Hartati</p>
          <a href="#" className="inline-block mt-4 text-maroon-600 hover:text-maroon-800 transition-colors duration-300">
            <span className="flex items-center mx-auto w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram mr-2">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37a4 4 0 1 1-6.16-3.23 4 4 0 0 1 6.16 3.23z"></path>
                <line x1="17.5" x2="17.5" y1="6.5" y2="6.5"></line>
              </svg>
              @budi.pratama
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

// Komponen Wedding Gift
const WeddingGift = ({ copyToClipboard }) => {
  const [isGiftSectionOpen, setIsGiftSectionOpen] = useState(false);

  const toggleGiftSection = () => {
    setIsGiftSectionOpen(!isGiftSectionOpen);
  };

  const accounts = [
    {
      bank: 'BCA',
      accountName: 'Arnida Debby Fittaloka',
      accountNumber: '6760340764 ',
    },
  ];

  const whatsappMessage = "Halo, saya ingin mengonfirmasi pengiriman hadiah pernikahan untuk Budi & Siti.";
    const whatsappLink = `https://wa.me/6281234567890?text=${encodeURIComponent(whatsappMessage)}`;


  return (
    <section className="bg-white p-6 rounded-2xl shadow-lg animate-fade-in-up">
      <h3 className="text-2xl font-playfair font-bold text-center text-maroon-500 mb-6 flex items-center justify-center">
        <span className="mr-2 text-gold-500 text-3xl"><GiftIcon /></span>
        Wedding Gift
      </h3>
      <p className="text-sm text-gray-600 text-center leading-relaxed mb-6">
        Doa restu Anda adalah karunia yang sangat berarti bagi kami. Namun, jika Anda ingin memberikan hadiah, Anda bisa mengirimkannya melalui rekening di bawah ini.
      </p>
      
      <div className="text-center mb-6">
        <button
          onClick={toggleGiftSection}
          className="bg-maroon-600 text-white font-bold py-3 px-6 rounded-xl shadow-md hover:bg-maroon-700 transition-colors duration-300 flex items-center justify-center mx-auto"
        >
          Kirim Gift
        </button>
      </div>

      {isGiftSectionOpen && (
        <div className="space-y-6 animate-fade-in-down">
          {accounts.map((acc, index) => (
            <div key={index} className="p-4 border border-gold-500 rounded-xl text-center">
              <h4 className="text-lg font-bold text-blue-500 mb-1">{acc.bank}</h4>
              <p className="text-sm text-gray-600">{acc.accountName}</p>
              <p className="text-md font-bold text-maroon-500 mb-2">{acc.accountNumber}</p>
              <button
                onClick={() => copyToClipboard(acc.accountNumber)}
                className="bg-maroon-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gold-700 transition-colors duration-300"
              >
                Salin No Rekening
              </button>
            </div>
          ))}

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-2">Konfirmasi Pengiriman</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 inline-block"
            >
              Klik WhatsApp
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

// Tailwind CSS import for the whole app
const styleLink = document.createElement('link');
styleLink.rel = 'stylesheet';
styleLink.href = 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
document.head.appendChild(styleLink);

// Google Fonts import for typography
const playfairFontLink = document.createElement('link');
playfairFontLink.rel = 'stylesheet';
playfairFontLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap';
document.head.appendChild(playfairFontLink);

const greatVibesFontLink = document.createElement('link');
greatVibesFontLink.rel = 'stylesheet';
greatVibesFontLink.href = 'https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap';
document.head.appendChild(greatVibesFontLink);

const interFontLink = document.createElement('link');
interFontLink.rel = 'stylesheet';
interFontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
document.head.appendChild(interFontLink);

export default App;
