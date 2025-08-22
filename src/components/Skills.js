export default function Skills() {
  const skills = [
    { name: "HTML", logo: "img/skills/html.png" },
    { name: "CSS", logo: "img/skills/css.png" },
    { name: "JavaScript", logo: "img/skills/js.png" },
    { name: "Python", logo: "img/skills/python.png" },
    { name: "PHP", logo: "img/skills/php.png" },
    { name: "React.js", logo: "img/skills/react.png" },
    { name: "Ms Office", logo: "img/skills/office.png" },
    { name: "MySQL", logo: "img/skills/mysql.png" },
    { name: "Laravel", logo: "img/skills/laravel.png" },
    { name: "Mechanical", logo: "img/skills/mechanic.png" },
    { name: "Photography", logo: "img/skills/photograph.png" },
  ];

  return (
    // Mengubah background section menjadi bg-slate-900 dan teks menjadi putih
    <section id="skills" className="py-20 bg-slate-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">🛠️ My Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, i) => (
          <div
            key={i}
            // Mengubah background setiap kotak menjadi bg-slate-800, menambahkan rounded-xl dan shadow-lg
            className="flex flex-col items-center p-4 bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img 
              src={skill.logo} 
              alt={`${skill.name} logo`} 
              className="w-16 h-16 mb-2"
            />
            {/* Mengubah warna teks menjadi terang */}
            <span className="text-sm font-semibold text-white">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}