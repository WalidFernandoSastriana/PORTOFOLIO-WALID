// import { useState } from "react";

// export default function Activities() {
//   const [selected, setSelected] = useState(null);

//   // Daftar lengkap semua kegiatan
//   const allActivities = [
//     {
//       title: "Batik Air | PK-LUK | Airbus A320-214",
//       img: "img/activities/JP1.png",
//       description: "This photo was taken as part of my passion for photography and transportation, especially aviation. I captured the Batik Air Airbus A320 during its landing phase using the panning technique, which creates a blurred background to emphasize dynamic motion. Proper lighting settings also enhanced the clarity of the signature Batik livery of Indonesia, combined with the lively atmosphere of the airport.",
//     },
//     {
//       title: "Garuda Indonesia | PK-GHE | Airbus A330-941 Neo",
//       img: "img/activities/JP2.png",
//       description: "This photo captures the historic arrival of Garuda Indonesia’s Airbus A330-941neo (registration PK-GHE), the airline’s very first A330neo delivered directly from the manufacturer. This special moment highlights not only the sleek and modern design of the aircraft but also symbolizes the fleet renewal of Garuda Indonesia. With proper lighting and composition, the photograph emphasizes the aircraft’s details while preserving the unique atmosphere of its inaugural arrival in Indonesia.",
//     },
//     {
//       title: "Mass Rapid Transit (MRT) Jakarta | 0517 | Ratangga",
//       img: "img/activities/MRT.jpg", // Pastikan path ini benar
//       description: "This photo was captured as part of my interest in urban transportation. It shows an MRT Jakarta trainset 0517 heading towards Lebak Bulus Station. The frontal angle highlights the modern design of the train’s face, with its signature blue curve accent. Proper lighting enhances the body details, while the elevated track setting emphasizes the futuristic character of this mass transit system.",
//     },
//     {
//       title: "",
//       img: "", // Pastikan path ini benar
//       description: "",
//     },
//     {
//       title: "",
//       img: "", // Pastikan path ini benar
//       description: "",
//     },
//     {
//       title: "",
//       img: "", // Pastikan path ini benar
//       description: "",
//     },
//     {
//       title: "",
//       img: "", // Pastikan path ini benar
//       description: "",
//     },
//     {
//       title: "",
//       img: "", // Pastikan path ini benar
//       description: "",
//     },
//   ];

//   // Hanya ambil 3 kegiatan pertama untuk ditampilkan
//   const visibleActivities = allActivities.slice(0, 3);

//   return (
//     <section id="activities" className="py-20 bg-slate-900 text-white">
//       <h2 className="text-4xl font-bold text-center mb-12">📸 My Activities</h2>

//       {/* Grid Galeri */}
//       <div className="grid md:grid-cols-3 gap-6 px-6">
//         {visibleActivities.map((a, i) => (
//           <div
//             key={i}
//             className="bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition cursor-pointer"
//             onClick={() => setSelected(a)}
//           >
//             {/* Foto */}
//             <img
//               src={a.img}
//               alt={a.title}
//               className="w-full h-56 object-cover"
//             />
//             {/* Nama kegiatan */}
//             <div className="p-4 text-center font-semibold text-white">
//               {a.title}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Tombol Lihat Selengkapnya */}
//       <div className="text-center mt-12">
//         <a
//           href="/all-activities" // Ganti dengan path halaman yang benar
//           className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition duration-300"
//         >
//           Lihat Selengkapnya
//         </a>
//       </div>

//       {/* Modal Pop-up */}
//       {selected && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//           <div className="bg-slate-800 rounded-xl shadow-lg max-w-3xl w-full p-6 relative">
//             {/* Tombol close */}
//             <button
//               className="absolute top-3 right-3 text-gray-300 hover:text-white"
//               onClick={() => setSelected(null)}
//             >
//               ✕
//             </button>

//             {/* Foto besar */}
//             <div className="flex justify-center mb-4">
//               <img
//                 src={selected.img}
//                 alt={selected.title}
//                 className="max-h-[80vh] object-contain rounded-lg"
//               />
//             </div>

//             {/* Nama kegiatan */}
//             <h3 className="text-2xl font-bold text-center text-white">
//               {selected.title}
//             </h3>
//             {/* Deskripsi (opsional) */}
//             {selected.description && (
//               <p className="text-gray-400 text-center mt-2">
//                 {selected.description}
//               </p>
//             )}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }


import { useState } from "react";

export default function Activities() {
  const [selected, setSelected] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Daftar lengkap semua kegiatan
  const allActivities = [
    {
      title: "Tilawatil Qur'an",
      images: [
        "img/activities/qori1.jpg",
        "img/activities/qori2.jpg",
      ],
      description:
        "Performed Quran recitation during the joint prayer and Independence Day commemoration event at the Ministry of Transportation, Directorate General of Sea Transportation.",
    },
    {
      title: "Batik Air | PK-LUK | Airbus A320-214",
      images: ["img/activities/JP1.png"],
      description:
        "This photo was taken as part of my passion for photography and transportation, especially aviation. I captured the Batik Air Airbus A320 during its landing phase using the panning technique, which creates a blurred background to emphasize dynamic motion.",
    },
    {
      title: "Garuda Indonesia | PK-GHE | Airbus A330-941 Neo",
      images: ["img/activities/JP2.png"],
      description:
        "This photo captures the historic arrival of Garuda Indonesia’s Airbus A330-941neo (registration PK-GHE), the airline’s very first A330neo delivered directly from the manufacturer.",
    },
    {
      title: "Mass Rapid Transit (MRT) Jakarta | 0517 | Ratangga",
      images: ["img/activities/MRT.jpg"],
      description:
        "This photo was captured as part of my interest in urban transportation. It shows an MRT Jakarta trainset 0517 heading towards Lebak Bulus Station.",
    },
  ];

  const visibleActivities = allActivities.slice(0, 3);

  const handlePrev = () => {
    if (!selected) return;
    setCurrentIndex(
      (prev) =>
        (prev - 1 + selected.images.length) % selected.images.length
    );
  };

  const handleNext = () => {
    if (!selected) return;
    setCurrentIndex((prev) => (prev + 1) % selected.images.length);
  };

  return (
    <section id="activities" className="py-20 bg-slate-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        📸 My Activities
      </h2>

      {/* Grid Galeri */}
      <div className="grid md:grid-cols-3 gap-6 px-6">
        {visibleActivities.map((a, i) => (
          <div
            key={i}
            className="bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition cursor-pointer"
            onClick={() => {
              setSelected(a);
              setCurrentIndex(0);
            }}
          >
            <img
              src={a.images[0]}
              alt={a.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-center font-semibold text-white">
              {a.title}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Pop-up */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-slate-800 rounded-xl shadow-lg max-w-3xl w-full p-6 relative">
            {/* Tombol close */}
            <button
              className="absolute top-3 right-3 text-gray-300 hover:text-white"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            {/* Foto besar */}
            <div className="flex items-center justify-center relative mb-4">
              {/* Tombol prev */}
              {selected.images.length > 1 && (
                <button
                  onClick={handlePrev}
                  className="absolute left-0 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full"
                >
                  ◀
                </button>
              )}
              <img
                src={selected.images[currentIndex]}
                alt={selected.title}
                className="max-h-[80vh] object-contain rounded-lg"
              />
              {/* Tombol next */}
              {selected.images.length > 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-0 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full"
                >
                  ▶
                </button>
              )}
            </div>

            {/* Nama kegiatan */}
            <h3 className="text-2xl font-bold text-center text-white">
              {selected.title}
            </h3>
            {selected.description && (
              <p className="text-gray-400 text-center mt-2">
                {selected.description}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
