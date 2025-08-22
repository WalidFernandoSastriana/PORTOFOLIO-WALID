export default function Education() {
  const schools = [
    { year: "2015 - 2018", place: "SMP Global Insani School" },
    {
      year: "2018 - 2021",
      place: "SMK Penerbangan Angkasa Bogor",
      desc: "Airframe & Power Plant Engineering",
    },
    {
      year: "2021 - Sekarang",
      place: "Universitas Bina Nusantara",
      desc: "S1 - School of Computer Science",
    },
  ];

  return (
    // Mengubah background section menjadi bg-slate-900 dan teks menjadi putih
    <section id="education" className="py-20 bg-slate-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12"> 🎓 My Education</h2>
      
      {/* Mengubah layout agar sama dengan About Me */}
      <div className="container mx-auto px-4 flex flex-col space-y-8">
        {schools.map((s, i) => (
          // Mengubah background setiap kotak menjadi bg-slate-800, menambahkan shadow dan rounded
          <div key={i} className="p-8 bg-slate-800 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-1">{s.place}</h3>
            <span className="text-sm text-gray-400">{s.year}</span>
            {s.desc && (
              <p className="text-gray-400 mt-2">{s.desc}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}