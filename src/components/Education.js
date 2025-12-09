import { useState } from "react";

export default function Education() {
  const schools = [
    {
      year: "2015 - 2018",
      place: "SMP Global Insani School",
      logo: "/img/global-insani-logo.png",
    },
    {
      year: "2018 - 2021",
      place: "SMK Penerbangan Angkasa Bogor",
      desc: "Airframe & Power Plant Engineering",
      logo: "/img/smk-penerbangan-logo.png",
    },
    {
      year: "2021 - 2025",
      place: "Universitas Bina Nusantara",
      desc: "S1 - School of Computer Science",
      logo: "/img/binus-logo.png",
    },
  ];

  return (
    <section id="education" className="py-20 bg-slate-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">🎓 My Education</h2>

      <div className="container mx-auto px-4 flex flex-col space-y-8">
        {schools.map((s, i) => (
          <div key={i} className="p-8 bg-slate-800 rounded-xl shadow-lg">
            {/* Menggunakan Flexbox untuk menata logo dan teks */}
            <div className="flex items-center space-x-4">
              {s.logo && (
                <img
                  src={s.logo}
                  alt={`${s.place} logo`}
                  className="w-16 h-16 object-contain"
                />
              )}
              <div>
                <h3 className="text-xl font-semibold mb-1">{s.place}</h3>
                <span className="text-sm text-gray-400">{s.year}</span>
              </div>
            </div>
            {s.desc && <p className="text-gray-400 mt-2">{s.desc}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}