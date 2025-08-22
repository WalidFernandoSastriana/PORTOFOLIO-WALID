import { useState } from "react";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  const projects = [
    {
      title: "Thesis Artikel Ilmiah",
      year: "April 2025 - Agustus 2025",
      location: "Binus University",
      role: "Student",
      desc: "Judul: “Late Fusion Approach for X-Ray Detection Using Frequency Domain Features DWT, SIFT, dan LBP dengan SVM Model”",
      tech: ["Python"],
      detail: [
        "Mengusulkan metode Late Fusion untuk mendeteksi citra X-Ray dengan menggabungkan beberapa jenis fitur.",
        "Menggunakan Discrete Wavelet Transform (DWT) untuk mengekstraksi informasi frekuensi citra.",
        "Menerapkan Scale-Invariant Feature Transform (SIFT) untuk mendeteksi dan merepresentasikan titik-titik fitur yang stabil pada citra.",
        "Memanfaatkan Local Binary Pattern (LBP) sebagai deskriptor tekstur citra.",
        "Melatih dan menguji model dengan algoritma Support Vector Machine (SVM) sebagai klasifikator utama.",
        "Pendekatan ini meningkatkan akurasi klasifikasi citra X-Ray menjadi dua kategori: fraktur dan non-fraktur.",
        "Menunjukkan bahwa penggabungan fitur pada tahap akhir (late fusion) dapat memberikan hasil lebih baik dibanding penggunaan fitur tunggal.",
      ],
      link: "#",
      img: "img/Thesis.png",
    },
    {
      title: "Paper Artikel Ilmiah",
      year: "Desember 2024 - Januari 2025",
      location:
        "International Conference on Computer Sciences, Engineering, and Technology Innovation 2025 (ICOCSETI 2025)",
      role: "Researcher / Author",
      desc: "Judul: “Meta-Classifier Approach to Facial Expression Recognition Using DWT-Based Feature Extraction”",
      tech: ["Python"],
      detail: [
        "Melakukan eksperimen tentang Facial Expression Recognition dengan menggunakan dataset CK+48.",
        "Melakukan analisis data menggunakan metode dan model dari Machine Learning untuk mencari hasil akurasi dari eksperimen tersebut.",
        "Melakukan pembuatan paper dari hasil eksperimen yang sudah dilakukan dan mempublish ke ICOCSETI Conference.",
      ],
      link: "https://ieeexplore.ieee.org/document/11020511",
      img: "img/MataClassifier.png",
    },
    {
      title: "Paper Artikel Ilmiah",
      year: "Oktober 2024 - Desember 2024",
      location:
        "Beyond Technology Summit on Informatics International Conference 2024 (BTS-I2C 2024)",
      role: "Researcher / Author",
      desc: "Judul: “Late Fusion Approach for Facial Expression Recognition Using HOG, LBP, dan DWT Features with SVM”",
      tech: ["Python"],
      detail: [
        "Melakukan eksperimen tentang Facial Expression Recognition dengan menggunakan dataset CK+48.",
        "Melakukan analisis data menggunakan metode dan model dari Machine Learning untuk mencari hasil akurasi dari eksperimen tersebut.",
        "Mempresentasikan hasil eksperimen di International Conference BTS-I2C.",
      ],
      link: "https://ieeexplore.ieee.org/document/10941791",
      img: "img/LateFusion.png",
    },
    {
      title: "TickTake",
      year: "September 2023 - Januari 2024",
      location: "Binus University",
      role: "UI/UX Designer & Front-End Dev",
      desc: "TickTake adalah platform pemesanan tiket konser yang memudahkan penggemar konser untuk menemukan dan memesan tiket konser favorit secara cepat, aman, dan praktis.",
      tech: ["Figma", "Laravel"],
      detail: [
        "Menerapkan desain antarmuka pengguna menggunakan HTML, CSS, dan JavaScript.",
        "Menggunakan kerangka kerja front-end seperti Laravel untuk membangun komponen interaktif.",
        "Mengembangkan prototipe menggunakan alat desain seperti Figma.",
      ],
      link: "#",
      img: "img/ticktake.png",
    },
    {
      title: "PawPals",
      year: "September 2023 - Januari 2024",
      location: "Binus University",
      role: "UI/UX Designer",
      desc: "PawPals adalah website petshop modern yang menyediakan makanan, aksesoris, serta layanan premium seperti pet hotel, grooming, dan perawatan hewan dalam satu platform praktis.",
      tech: ["Figma"],
      detail: [
        "Pembuatan dan mengembangan prototipe menggunakan alat desain seperti Figma.",
      ],
      link: "#",
      img: "img/pawpals.png",
    },
    {
      title: "Character Building Religion Project",
      year: "2023",
      location: "SMP Negeri 40 JAKARTA",
      role: "Narasumber & Dokumenter",
      desc: "Character Building Religion Project adalah kegiatan sosialisasi yang bertujuan menumbuhkan sikap toleransi antar umat beragama melalui edukasi dan diskusi di lingkungan sekolah.",
      tech: ["Ms Office"],
      detail: [
        "Menyampaikan materi mengenai pentingnya toleransi dan kerukunan antar umat beragama.",
        "Membawakan sesi diskusi interaktif bersama siswa untuk meningkatkan pemahaman nilai keberagaman.",
        "Mendokumentasikan seluruh kegiatan sosialisasi dalam bentuk foto dan video.",
        "Menyusun laporan dokumentasi sebagai bahan evaluasi kegiatan.",
      ],
      link: "#",
      img: "img/CBagama.png",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">📚 My Projects</h2>

      {/* Grid Project */}
      <div className="grid md:grid-cols-3 gap-6 px-6">
        {projects.map((p, i) => (
          <div
            key={i}
            // Menggunakan flexbox untuk menata elemen
            className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition cursor-pointer flex justify-between items-center"
            onClick={() => setSelected(p)}
          >
            {/* Judul dan deskripsi dibungkus dalam satu div */}
            <div>
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-400 text-justify">{p.desc}</p>
            </div>
            
            {/* Emoticon di sisi paling kanan */}
            <div className="flex-shrink-0 ml-4">
                🔍
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-slate-800 text-white rounded-2xl shadow-lg max-w-3xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            {/* Image */}
            <div className="flex justify-center mb-4">
              <img
                src={selected.img}
                alt={selected.title}
                className="w-85 h-66 object-contain rounded-lg"
              />
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold mb-2 text-center">
              {selected.title}
            </h3>

            <p className="text-sm text-gray-400 mb-1 text-center">
              📅 {selected.year}
            </p>
            <p className="text-sm text-gray-400 mb-1 text-center">
              📍 {selected.location}
            </p>
            {selected.role && (
              <p className="text-sm text-gray-400 mb-3 text-center">
                👤 {selected.role}
              </p>
            )}

            {/* Tech Tags */}
            <div className="flex gap-3 mb-3 flex-wrap justify-center">
              {selected.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-sm bg-gray-700 text-white px-2 py-1 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Desc */}
            <p className="text-gray-400 mb-3 text-justify">{selected.desc}</p>

            {/* Detail as Bullet Points */}
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-5 text-justify">
              {selected.detail.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>

            {/* Button */}
            <div className="flex justify-center">
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}