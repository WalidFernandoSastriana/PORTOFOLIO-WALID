export default function Experience() {
  const experiences = [
    {
      year: "September 2025 - Present",
      role: "Data Processing Staff",
      place: "Ministry of Transportation - Directorate General of Sea Transportation",
      logo: "img/KEMENHUB.png",
      desc: [
        "Conduct data collection, cleaning, and analysis of maritime transportation to support policy decisions, create dashboards, and provide insights for operational efficiency.",
      ],
    },
    {
      year: "September 2024 - Februari 2025",
      role: "Certified Internship",
      place: "Bina Nusantara University - School of Computer Science",
      logo: "/img/binus-logo.png",
      desc: [
        "Working on a project with the School of Computer Science department.",
      ],
    },
    {
      year: "Februari 2024 - Juli 2024",
      role: "Enrichment Programs – Research Assistant",
      place: "Bina Nusantara University - School of Computer Science",
      logo: "/img/binus-logo.png",
      desc: [
        "Analyzing regional malnutrition patterns among Indonesian infants using clustering techniques to support targeted nutritional interventions.",
      ],
    },
    {
      year: "Januari 2020 - Maret 2020",
      role: "Junior Aircraft Technician (Certified Internship)",
      place: "PT Garuda Maintenance Facility AeroAsia Tbk",
      logo: "/img/gmf.jpg",
      desc: [
        "Conducting routine inspections on Airbus A330-200/300/900Neo and Boeing 777-400/737-Max aircraft to ensure optimal condition.",
        "Identifying and repairing technical issues with avionics, hydraulic systems, and engines.",
        "Ensuring compliance with international aviation safety standards and maintenance regulations.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">📑 My Experience</h2>

      <div className="container mx-auto px-4 flex flex-col space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-8 bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
          >
            {/* Logo + Role + Year */}
            <div className="flex items-center space-x-4 mb-4">
              {exp.logo && (
                <img
                  src={exp.logo}
                  alt={`${exp.place} logo`}
                  className="w-16 h-16 object-contain"
                />
              )}

              <div>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <span className="text-gray-400 text-sm">{exp.year}</span>
              </div>
            </div>

            {/* Place */}
            <p className="text-gray-400 italic mb-3">{exp.place}</p>

            {/* Description List */}
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              {exp.desc.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
