import { useState } from "react";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  const projects = [
    {
      title: "Thesis Scientific Article",
      year: "April 2025 - August 2025",
      location: "Binus University",
      role: "Student",
      desc: "Title: “Late Fusion Approach for X-Ray Detection Using Frequency Domain Features DWT, SIFT, and LBP with SVM Model”",
      tech: ["Python"],
      detail: [
        "Proposed a Late Fusion method for detecting X-Ray images by combining multiple feature types.",
        "Utilized Discrete Wavelet Transform (DWT) to extract frequency domain information.",
        "Implemented Scale-Invariant Feature Transform (SIFT) to detect and represent stable feature points in images.",
        "Applied Local Binary Pattern (LBP) as a texture descriptor.",
        "Trained and tested the model using Support Vector Machine (SVM) as the main classifier.",
        "This approach improved the classification accuracy of X-Ray images into two categories: fracture and non-fracture.",
        "Demonstrated that feature fusion at the late stage outperforms single-feature approaches.",
      ],
      link: "#",
      img: "img/Thesis.png",
    },
    {
      title: "Scientific Paper",
      year: "December 2024 - January 2025",
      location:
        "International Conference on Computer Sciences, Engineering, and Technology Innovation 2025 (ICOCSETI 2025)",
      role: "Researcher / Author",
      desc: "Title: “Meta-Classifier Approach to Facial Expression Recognition Using DWT-Based Feature Extraction”",
      tech: ["Python"],
      detail: [
        "Conducted experiments on Facial Expression Recognition using the CK+48 dataset.",
        "Performed data analysis using machine learning methods and models to evaluate accuracy.",
        "Authored and published a paper at the ICOCSETI 2025 Conference based on the experimental results.",
      ],
      link: "https://ieeexplore.ieee.org/document/11020511",
      img: "img/MataClassifier.png",
    },
    {
      title: "Scientific Paper",
      year: "October 2024 - December 2024",
      location:
        "Beyond Technology Summit on Informatics International Conference 2024 (BTS-I2C 2024)",
      role: "Researcher / Author",
      desc: "Title: “Late Fusion Approach for Facial Expression Recognition Using HOG, LBP, and DWT Features with SVM”",
      tech: ["Python"],
      detail: [
        "Conducted experiments on Facial Expression Recognition using the CK+48 dataset.",
        "Performed analysis using machine learning methods and models to measure experimental accuracy.",
        "Presented the research findings at the BTS-I2C International Conference.",
      ],
      link: "https://ieeexplore.ieee.org/document/10941791",
      img: "img/LateFusion.png",
    },
    {
      title: "TickTake",
      year: "September 2023 - January 2024",
      location: "Binus University",
      role: "UI/UX Designer & Front-End Developer",
      desc: "TickTake is a concert ticket booking platform that helps concert fans discover and purchase their favorite concert tickets quickly, safely, and easily.",
      tech: ["Figma", "Laravel"],
      detail: [
        "Implemented user interface designs using HTML, CSS, and JavaScript.",
        "Built interactive components using the Laravel front-end framework.",
        "Developed prototypes with design tools such as Figma.",
      ],
      link: "#",
      img: "img/ticktake.png",
    },
    {
      title: "PawPals",
      year: "September 2023 - January 2024",
      location: "Binus University",
      role: "UI/UX Designer",
      desc: "PawPals is a modern petshop website providing food, accessories, and premium services such as pet hotels, grooming, and animal care in one convenient platform.",
      tech: ["Figma"],
      detail: [
        "Designed and developed interactive prototypes using Figma.",
      ],
      link: "#",
      img: "img/pawpals.png",
    },
    {
      title: "Character Building Religion Project",
      year: "2023",
      location: "SMP Negeri 40 Jakarta",
      role: "Speaker & Documenter",
      desc: "A social project aimed at fostering tolerance among different religions through education and discussion in the school environment.",
      tech: ["MS Office"],
      detail: [
        "Delivered material on the importance of tolerance and interfaith harmony.",
        "Led interactive discussion sessions with students to deepen their understanding of diversity values.",
        "Documented all activities in photos and videos.",
        "Compiled a documentation report as an evaluation reference.",
      ],
      link: "#",
      img: "img/CBagama.png",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">📚 My Projects</h2>

      {/* Project Grid */}
      <div className="grid md:grid-cols-3 gap-6 px-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition cursor-pointer flex justify-between items-center"
            onClick={() => setSelected(p)}
          >
            <div>
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-400 text-justify">{p.desc}</p>
            </div>
            <div className="flex-shrink-0 ml-4">🔍</div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-slate-800 text-white rounded-2xl shadow-lg max-w-3xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            <div className="flex justify-center mb-4">
              <img
                src={selected.img}
                alt={selected.title}
                className="w-85 h-66 object-contain rounded-lg"
              />
            </div>

            <h3 className="text-2xl font-bold mb-2 text-center">
              {selected.title}
            </h3>

            <p className="text-sm text-gray-400 mb-1 text-center">📅 {selected.year}</p>
            <p className="text-sm text-gray-400 mb-1 text-center">📍 {selected.location}</p>
            {selected.role && (
              <p className="text-sm text-gray-400 mb-3 text-center">👤 {selected.role}</p>
            )}

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

            <p className="text-gray-400 mb-3 text-justify">{selected.desc}</p>

            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-5 text-justify">
              {selected.detail.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>

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
