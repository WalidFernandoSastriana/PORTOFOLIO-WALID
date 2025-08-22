// import Image from 'next/image'; // Jika menggunakan Next.js

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column: Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="img/walid.png" 
              alt="Walid Fernando Sastriana" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Right Column: Text & Location */}
          <div className="flex flex-col space-y-8">
            {/* Top Box: Main About Me Text */}
            <div className="bg-slate-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Hi, I'm Walid Fernando Sastriana 👋
              </h3>
              <p className="text-gray-300 text-justify">
                Halo! Nama saya Walid Fernando Sastriana. Saat ini saya adalah
                seorang mahasiswa yang sedang mengejar gelar Sarjana Ilmu Komputer
                di Universitas Bina Nusantara. Ketertarikan saya pada teknologi
                komputer sejak kecil membawa saya pada perjalanan menarik menuju
                dunia pengetahuan. Saya mengambil setiap kesempatan yang saya bisa
                untuk mempelajari lebih dalam aspek-aspek menarik di bidang ini dan
                mengembangkan lebih lanjut keterampilan dan pemahaman saya. Kami
                juga aktif terlibat dalam berbagai kegiatan ekstrakurikuler seperti
                organisasi Rohani Islami. Dalam proses pendidikan, saya selalu
                berusaha memecahkan masalah yang kompleks dengan bekerja sama dengan
                teman sekelas dan guru. Saya percaya kerja tim adalah kunci
                kesuksesan dan saya suka bertukar ide, belajar dari orang lain,
                dan membangun hal-hal hebat bersama. Selain akademisi, saya juga
                mempunyai minat lain seperti fotografi. Saya percaya bahwa hobi juga
                berperan penting dalam pengembangan diri dan kreativitas. Portofolio
                ini saya buat untuk berbagi pengalaman, proyek, dan pencapaian yang
                telah saya capai selama pendidikan. Jika Anda ingin berdiskusi
                lebih lanjut atau bertukar pikiran, jangan ragu untuk menghubungi
                kami kapan saja. Mari jelajahi dunia pengetahuan dan ciptakan
                perubahan positif bersama-sama! Terima Kasih.
              </p>
            </div>

            {/* Bottom Box: Location */}
            <div className="bg-slate-800 p-8 rounded-xl shadow-lg relative overflow-hidden">
              <h3 className="text-xl font-bold mb-2">Based</h3>
              <p className="text-gray-300">
                in Bojong Gede, West Java, Indonesia.
              </p>
              {/* Placeholder for the globe animation */}
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// export default function About() {
//   return (
//     <section id="about" className="py-20 bg-gray-100 text-center">
//       <h2 className="text-3xl font-bold mb-6">About Me</h2>
//       <p className="max-w-2xl mx-auto text-gray-600 text-justify">
//         Halo! Nama saya Walid Fernando Sastriana. Saat ini saya adalah seorang
//         mahasiswa yang sedang mengejar gelar Sarjana Ilmu Komputer di
//         Universitas Bina Nusantara. Ketertarikan saya pada teknologi komputer
//         sejak kecil membawa saya pada perjalanan menarik menuju dunia
//         pengetahuan. Saya mengambil setiap kesempatan yang saya bisa untuk
//         mempelajari lebih dalam aspek-aspek menarik di bidang ini dan
//         mengembangkan lebih lanjut keterampilan dan pemahaman saya. Kami juga
//         aktif terlibat dalam berbagai kegiatan ekstrakurikuler seperti
//         organisasi Rohani Islami.
//       </p>
//       <p className="max-w-2xl mx-auto text-gray-600 text-justify">
//         Dalam proses pendidikan, saya selalu berusaha memecahkan masalah yang
//         kompleks dengan bekerja sama dengan teman sekelas dan guru. Saya percaya
//         kerja tim adalah kunci kesuksesan dan saya suka bertukar ide, belajar
//         dari orang lain, dan membangun hal-hal hebat bersama. Selain akademisi,
//         saya juga mempunyai minat lain seperti fotografi. Saya percaya bahwa
//         hobi juga berperan penting dalam pengembangan diri dan kreativitas.
//       </p>
//       <p className="max-w-2xl mx-auto text-gray-600 text-justify">
//         Portofolio ini saya buat untuk berbagi pengalaman, proyek, dan
//         pencapaian yang telah saya capai selama pendidikan. Jika Anda ingin
//         berdiskusi lebih lanjut atau bertukar pikiran, jangan ragu untuk
//         menghubungi kami kapan saja. Mari jelajahi dunia pengetahuan dan
//         ciptakan perubahan positif bersama-sama! Terima Kasih.
//       </p>
//     </section>
//   );
// }