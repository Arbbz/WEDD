import React, { useState } from 'react';


const MailOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-open">
    <path d="M21.2 8.4V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.4"></path>
    <polyline points="7.5 14.1 12 16.5 16.5 14.1"></polyline>
    <path d="M2 8.4c0-1.85 1.55-3.44 3.4-3.5A4.5 4.5 0 0 1 12 8c2.44 0 4.53-1.46 5.6-3.5l1.62-3.5A2.5 2.5 0 0 0 22 2.5"></path>
  </svg>
);

const RSVPForm = () => {
  const [name, setName] = useState('');
  const [attend, setAttend] = useState('yes');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulasi pengiriman data
    setTimeout(() => {
      console.log({ name, attend, message });
      setIsSubmitting(false);
      setSubmitStatus('success');
      setName('');
      setAttend('yes');
      setMessage('');
    }, 2000);
  };

  return (
    <section className="bg-white p-6 rounded-2xl shadow-lg mb-8 animate-fade-in-up rsvp-form-section">
      <h3 className="text-2xl font-playfair font-bold text-center text-maroon-500 mb-6 flex items-center justify-center">
        <span className="mr-2 text-gold-500 text-3xl"><MailOpenIcon /></span>
        Konfirmasi Kehadiran
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Anda</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl text-gray-700  focus:ring-gold-500 focus:border-gold-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Apakah Anda akan hadir?</label>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="attend"
                value="yes"
                checked={attend === 'yes'}
                onChange={(e) => setAttend(e.target.value)}
                className="form-radio text-maroon-600 "
              />
              <span className="ml-2 text-gray-700">Ya, saya akan datang</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="attend"
                value="no"
                checked={attend === 'no'}
                onChange={(e) => setAttend(e.target.value)}
                className="form-radio text-maroon-600"
              />
              <span className="ml-2 text-gray-700">Maaf, saya tidak bisa</span>
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Pesan & Doa (opsional)</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            className="w-full px-4 py-2 border text-gray-700  border-gray-300 rounded-xl focus:ring-gold-500 focus:border-gold-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-maroon-600 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:bg-maroon-700 transition-colors duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Mengirim...' : 'Kirim RSVP'}
        </button>
      </form>
      {submitStatus === 'success' && (
        <div className="mt-4 p-3 text-sm text-maroon-500 bg-gold-50 rounded-xl text-center">
          Terima kasih, konfirmasi Anda telah kami terima!
        </div>
      )}
    </section>
  );
};

export default RSVPForm;