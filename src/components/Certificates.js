import { desc } from "framer-motion/client";
import { useState } from "react";

export default function Certificates() {
  const certificates = [
    {
      title: "BNSP Certificate of Competence - Digital Marketing & Ai",
      image: "img/certificates/bnsp-digital-marketing-ai.png",
    },
    {
      title: "BNSP Certificate of Competence - Office Administration",
      image: "img/certificates/bnsp-office.png",
    },
    {
      title:
        "Certificate of Achievement – IT Bootcamp Program Front End Developer",
      image: "img/certificates/ITBootcamp.png",
    },
    {
      title:
        "Internship Certificate - Garuda Maintenance Facility AeroAsia TBK.",
      image: "img/certificates/SKGMF.png",
    },
    {
      title: "Certificate of Competency - Airframe & Power Plant",
      image: "img/certificates/airframe.png",
    },
    {
      title:
        "Certificate of Achievement – Basic Survival Training by Lanud Atang Sendjaja Bogor",
      image: "img/certificates/basic-survival.png",
    },
    {
      title:
        "Certificate International Conference Presentation - ICOCSETI 2025",
      image: "img/certificates/icocseti-2025.png",
    },
    {
      title: "Certificate International Conference Presentation - BTS-I2C 2024",
      image: "img/certificates/BTS.png",
    },
    {
      title:
        "Certificate of Completion – Data Science & AI, Specific Independent Study Track",
      image: "img/certificates/binus-data-science.png",
    },
    {
      title:
        "Certificate of Participation – Public Speaking Seminar by CIMB Niaga",
      image: "img/certificates/cimb-public-speaking.png",
    },
    {
      title:
        "Certificate of Participation – Career Preparation Seminar by BCA",
      image: "img/certificates/bca-career.png",
    },
    {
      title:
        "Certificate of Participation – Kickstart Your Career in Data Analytics Seminar by RedDoorz",
      image: "img/certificates/reddoorz-data.png",
    },
    {
      title:
        "Certificate of Participation – Communication Skills Seminar by DANA",
      image: "img/certificates/dana-communication.png",
    },
  ];

  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-20 bg-slate-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        📜 My Certificates
      </h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {certificates.map((c, i) => (
          <div
            key={i}
            onClick={() => setSelectedCert(c)}
            // Menambahkan flexbox untuk menata elemen
            className="p-8 bg-slate-800 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition flex justify-between items-center"
          >
            <div>{c.title}</div>
            <div>🔍</div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative bg-slate-800 text-white rounded-2xl shadow-lg p-6">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl"
            >
              ✖
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="max-w-[90vw] max-h-[90vh] mx-auto rounded-lg object-contain"
            />
            <p className="text-center mt-4 font-semibold text-gray-400">
              {selectedCert.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}