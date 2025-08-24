import React, { useState, useRef, useEffect } from 'react';
import Header from './components/header';
import Footer from './components/Footer';
import EventDetails from './components/EventDetails';
import RSVPForm from './components/RSVPForm';
import StorySection from './components/Story';
import CoverPage from './components/CoverPage';
import CoupleBio from './components/CoupleBio';
import LiveCommentCard from './components/LiveComment';
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
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log("Audio gagal diputar:", err);
      });
    }
  };
  
  return (
    
   <div className="min-h-screen font-inter text-maroon-100 relative " 
        style={{
        backgroundImage: "url('ai2.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        {isCoverPageOpen ? (
        <CoverPage openInvitation={openInvitation} />
      ) : (
      <div className="container py-8 mx-auto px-4 max-w-lg ">
        <div className="bg-white shadow-4xl overflow-hidden animate-fade-in-up">
          <Header />
          <main className="p-8">
            <div className="text-center mb-8">
             <p className="text-md md:text-md text-maroon-600 leading-relaxed mb-2 italic">
                Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, 
                agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. 
                Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir. 
              </p>
              <span className="text-lg text-maroon-500 mb-4">(Q.S Ar Rum : 21)</span>
              <p className="font-great-vibes text-xl md:text-3xl text-maroon-500 my-4 bismillah">Bismillahirahmanirrahim</p>
              <p className="text-md md:text-lg text-maroon-600 leading-relaxed mb-4">
                Maha Suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan.
                Ya Allah perkenankanlah pernikahan putra-putri kami:
              </p>

              <div className="relative inline-block mt-6 animate-scale-in">
                <img 
                    src="couple.jpeg" 
                    className="rounded-full mx-auto mb-4 border-4 border-maroon-500 shadow-lg object-cover transform hover:scale-105 transition-transform duration-300" 
                />
                <div className="relative z-10">
                  <h2 className="text-5xl md:text-5xl font-playfair font-bold text-maroon-600 leading-tight header-content">Debby & Ihsan</h2>
                </div>
              </div>
      
            </div>

            <CoupleBio />
            <StorySection />
            <EventDetails />
            <RSVPForm />
            <LiveCommentCard />
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
       <audio ref={audioRef} src="audio/tulus.mp3" loop />

      {copyMessage && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-green-500 text-white text-sm rounded-full shadow-lg transition-opacity duration-300 animate-fade-in-up">
          {copyMessage}
        </div>
      )}
       
    </div>
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
            <p className="text-sm text-gray-600 mb-2">Kirim Kado</p>
              <div className="w-full h-64">
                <iframe
                  title="Lokasi Acara"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.123456789012!2d106.7939865!3d-6.4575259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e9dd8d437e61%3A0x36413d087cda558e!2sJl.%20Pradana%2015%2C%20Pabuaran%2C%20Kecamatan%20Bojonggede%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat%2016921!5e0!3m2!1sid!2sid!4v1692918000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <a
                  href="https://www.google.com/maps/place/Jl.+Pradana+15,+Pabuaran,+Kecamatan+Bojonggede,+Kabupaten+Bogor,+Jawa+Barat+16921/@-6.4575409,106.7937713,21z/data=!4m6!3m5!1s0x2e69e9dd8d437e61:0x36413d087cda558e!8m2!3d-6.4575259!4d106.7939865!16s%2Fg%2F11f614xd5h!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-maroon-600 hover:text-maroon-800 underline"
                >
                  Lihat Lokasi di Google Maps
                </a>
            </div>
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
