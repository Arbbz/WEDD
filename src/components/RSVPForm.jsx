import React, { useState } from 'react';
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSe5IT7EAXzlvPW3B60_ZCAMLwaS5KqzY",
  authDomain: "live-comment-d217e.firebaseapp.com",
  projectId: "live-comment-d217e",
  storageBucket: "live-comment-d217e.appspot.com",
  messagingSenderId: "533677732830",
  appId: "1:533677732830:web:81121f19fa3c721a23e34f",
  measurementId: "G-1DKNJJJFEF",
    databaseURL: "https://live-comment-d217e-default-rtdb.firebaseio.com/"  // database URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

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
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const rsvpData = { name, attend, message };

    push(ref(database, 'rsvp/'), rsvpData)
      .then(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setName('');
        setAttend('yes');
        setMessage('');
      })
      .catch((error) => {
        console.error("Error saving data:", error);
        setIsSubmitting(false);
        setSubmitStatus('error');
      });
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
      {submitStatus === 'error' && (
        <div className="mt-4 p-3 text-sm text-red-500 bg-red-100 rounded-xl text-center">
          Ada kesalahan saat mengirimkan konfirmasi Anda. Silakan coba lagi.
        </div>
      )}
    </section>
  );
};

export default RSVPForm;
