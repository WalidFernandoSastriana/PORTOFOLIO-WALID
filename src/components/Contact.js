import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-12">📞 Contact Me</h2>

      <div className="flex flex-col items-center space-y-4 mb-8">
        {/* Email */}
        <div className="flex items-center space-x-2">
          <HiOutlineMail size={24} className="text-blue-400" />
          <p className="text-gray-400">
            walid.sastriana@binus.ac.id / walidfernando21@gmail.com
          </p>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-2">
          <HiOutlinePhone size={24} className="text-blue-400" />
          <p className="text-gray-400">Phone/WhatsApp: +62 812-1123-4690</p>
        </div>
      </div>

      <a
        href="mailto:walid.sastriana@binus.ac.id"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition duration-300"
      >
        Send Email
      </a>
    </section>
  );
}
