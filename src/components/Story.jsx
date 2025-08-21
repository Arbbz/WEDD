import React from 'react';

const StorySection = () => {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-lg mb-8 animate-fade-in-up">
      <h3 className="text-2xl font-bold text-center text-maroon-600 mb-6">Cerita Kami</h3>

      {/* Awal Bertemu */}
      <div className="text-center mb-8">
        <h4 className="text-xl font-semibold text-maroon-600 mb-4">Awal Bertemu</h4>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Semua bermula pada 2023 saat kami dipertemukan di salah satu Mall di Ibukota. Tanpa disangka, dari pertemuan yang sederhana itu, tumbuh percakapan yang semakin hangat dari waktu ke waktu.
        </p>
      </div>

      {/* Berproses Bersama */}
      <div className="text-center mb-8">
        <h4 className="text-xl font-semibold text-maroon-600 mb-4">Berproses Bersama</h4>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Hubungan kami tumbuh perlahan, tapi pasti. Kami belajar memahami, menerima perbedaan, dan mendukung satu sama lain. Dalam suka maupun duka, kami saling menggenggam tangan dan terus melangkah bersama.
        </p>
      </div>

      {/* Lamaran */}
      <div className="text-center mb-8">
        <h4 className="text-xl font-semibold text-maroon-600 mb-4">Lamaran</h4>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Pada 2024, di tengah suasana yang hangat dan penuh haru, kami mengikat janji untuk melangkah ke tahap selanjutnya. Momen itu menjadi titik awal dari babak baru kehidupan kami.
        </p>
      </div>

      {/* Menuju Pernikahan */}
      <div className="text-center mb-8">
        <h4 className="text-xl font-semibold text-maroon-600 mb-4">Menuju Pernikahan</h4>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Setelah melewati berbagai proses dan doa, kami akhirnya memutuskan untuk menyatukan dua hati dalam ikatan suci pernikahan. Dengan penuh syukur dan cinta, kami mengundang keluarga dan sahabat untuk menyaksikan hari bahagia kami.
        </p>
      </div>

      {/* Pesan Terima Kasih */}
      <div className="text-center">
        <p className="text-sm text-gray-600 leading-relaxed">
          Terima kasih telah menjadi bagian dari perjalanan ini. Kehadiran dan doa kalian sangat berarti bagi kami.
        </p>
      </div>
    </section>
  );
};

export default StorySection;
