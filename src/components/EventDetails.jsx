
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
      </div>
    </section>
  );
};

export default EventDetails;