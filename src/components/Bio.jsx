
const Bio = () => {
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
                src="female.jpeg" 
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
                src="pria.jpeg" 
                alt="Siti" 
                className="w-30 h-32 rounded-full mx-auto mb-4 border-4 border-maroon-500 shadow-lg object-cover transform hover:scale-105 transition-transform duration-300" 
            />
          <h4 className="text-3xl font-great-vibes text-maroon-500 mb-2 name-content">Ihsan</h4>
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
export default Bio;