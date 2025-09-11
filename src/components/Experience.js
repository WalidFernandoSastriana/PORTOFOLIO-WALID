export default function Experience() {
  const experiences = [
    {
      year: "September 2025 - Present",
      role: "Junior Data Analyst",
      place: "Kementerian Perhubungan Laut - Direktorat Jenderal Perhubungan Laut",
      desc: [
        "Conduct data collection, cleaning, and analysis of maritime transportation to support policy decisions, create dashboards, and provide insights for operational efficiency.",
      ],
    },
    {
      year: "September 2024 - Februari 2025",
      role: "Certified Internship",
      place: "Bina Nusantara University - School of Computer Science",
      desc: [
        "Working on a project with the School of Computer Science department.",
      ],
    },
    {
      year: "Februari 2024 - Juli 2024",
      role: "Enrichment Programs Certified Specific Independent Study (Research Assistant)",
      place: "Bina Nusantara University - School of Computer Science",
      desc: [
        "Conducting an independent study to analyze regional patterns of malnutrition in Indonesian infants using clustering techniques to inform more targeted nutritional interventions.",      ],
    },
    {
      year: "Januari 2020 - Maret 2020",
      role: "Junior Aircraft Technician (Certified Internship)",
      place: "PT Garuda Maintenance Facility AeroAsia Tbk",
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
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-slate-800 shadow-lg rounded-xl p-8 hover:shadow-xl transition duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <span className="text-gray-400">{exp.year}</span>
            </div>
            <p className="text-gray-400 italic mb-3">{exp.place}</p>
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