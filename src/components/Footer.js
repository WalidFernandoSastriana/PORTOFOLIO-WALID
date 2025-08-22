import React from "react";
// Impor FaFacebook di sini
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Nama dan Profesi */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-2">Walid Fernando Sastriana</h3>
          <p className="text-gray-400">
            UI/UX Designer | Web Development | Data Analyst
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <nav className="text-gray-400">
            <ul className="space-y-1">
              <li>
                <a href="#about" className="hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blue-400">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-2">Contact</h3>
          <div className="flex space-x-4">
            {/* Tautan Email */}
            <a
              href="mailto:walidfernando21@gmail.com"
              aria-label="Email"
              className="hover:text-gray-400 transition-colors"
            >
              <HiOutlineMail size={28} />
            </a>
            {/* Tautan LinkedIn */}
            <a
              href="https://www.linkedin.com/in/walid-fernando-sastriana-6a0290233/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-gray-400 transition-colors"
            >
              <FaLinkedin size={28} />
            </a>
            {/* Tautan Instagram */}
            <a
              href="https://instagram.com/liddddd_14"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-gray-400 transition-colors"
            >
              <FaInstagram size={28} />
            </a>
            {/* Tautan Facebook (menggantikan CV) */}
            <a
              href="https://www.facebook.com/walid.fernando.s"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-gray-400 transition-colors"
            >
              <FaFacebook size={28} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}