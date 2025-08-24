import React from 'react';
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
    <line x1="16" x2="16" y1="2" y2="6"></line>
    <line x1="8" x2="8" y1="2" y2="6"></line>
    <line x1="3" x2="21" y1="10" y2="10"></line>
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
    <path d="M12 17.5l-5-5a7 7 0 1 1 10 0l-5 5z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const EventDetails = () => {
  const details = [
    {
      icon: <CalendarIcon />,
      title: "Akad Nikah",
      time: "Pukul 14.00",
      date: "Jum'at, 5 September 2025",
      location: "Kediaman Mempelai Wanita . Polaman Rt/Rw 002/004 Truko, Kec. Kangkung. Kendal",
    },
    {
      icon: <MapPinIcon />,
      title: "Resepsi",
      time: "Pukul 10:00 - Selesai",
      date: "Sabtu, 6 September 2025",
      location: "Kediaman Mempelai Wanita . Polaman Rt/Rw 002/004 Truko, Kec. Kangkung. Kendal",
    },
  ];

  return (
    <section className="bg-gold-50 p-6 rounded-2xl shadow-inner mb-8 animate-fade-in-up event-details-section">
      <h3 className="text-2xl font-playfair font-bold text-center text-maroon-500 mb-6">Detail Acara</h3>
      <div className="space-y-6">
        {details.map((detail, index) => (
          <div key={index} className="flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: `${1.8 + index * 0.3}s` }}>
            <span className="text-maroon-500 text-3xl mb-2">{detail.icon}</span>
            <h4 className="font-semibold text-lg text-maroon-500 mb-1">{detail.title}</h4>
            <p className="text-sm text-gray-500">{detail.time}</p>
            <p className="text-sm font-medium text-maroon-500">{detail.date}</p>
            <p className="text-sm text-maroon-500 mt-1">{detail.location}</p>
          </div>
        ))}

        {/* Peta Google (Link hanya satu) */}
        <div className="mt-8">
          <h4 className="text-xl text-maroon-500 mb-4 text-center">Lokasi Acara</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.4738474251844!2d110.1273805!3d-6.9398123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e704325b016da2d%3A0xb42a07a2576a18aa!2sJl.%20Flamboyan%2C%20Truko%2C%20Kec.%20Kangkung%2C%20Kabupaten%20Kendal%2C%20Jawa%20Tengah%2051353!5e0!3m2!1sid!2sid!4v1692917410745!5m2!1sid!2sid" 
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />


          <div className="mt-4 text-center">
            <a
              href="https://www.google.com/maps/place/Jl.+Flamboyan,+Truko,+Kec.+Kangkung,+Kabupaten+Kendal,+Jawa+Tengah+51353/@-6.939807,110.1248056,17z/data=!3m1!4b1!4m6!3m5!1s0x2e704325b016da2d:0xb42a07a2576a18aa!8m2!3d-6.9398123!4d110.1273805!16s%2Fg%2F11cm_hzql7?authuser=2&entry=tts&g_ep=EgoyMDI1MDgwMy4wIPu8ASoASAFQAw%3D%3D&skid=1b7a272e-314f-4401-b762-8bcb21dcf983" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-maroon-600 hover:text-maroon-800 underline"
            >
              Lihat Lokasi di Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
