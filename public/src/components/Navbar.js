export default function Navbar() {
  return (
    <nav className="bg-[#000b22] text-white fixed w-full z-10 shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="/img/WFS-logo.png" 
            alt="Logo Saya" 
            style={{ marginRight: '10px', height: '50px' }} 
          />
        </div>
        <ul className="flex gap-6">
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
      </div>
    </nav>
  );
}
