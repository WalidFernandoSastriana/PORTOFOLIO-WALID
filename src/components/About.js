export default function About() {
  return (
    <section 
      id="about" 
      className="py-20 text-white" 
      style={{ backgroundColor: "#0f172a" }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column: Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="img/wisuda.jpg" 
              alt="Walid Fernando Sastriana" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Right Column: Text & Location */}
          <div className="flex flex-col space-y-8">
            {/* Top Box: Main About Me Text */}
            <div className="bg-slate-800 p-8 rounded-xl shadow-lg">
              <p className="text-gray-300 text-justify">
                Hello! My name is Walid Fernando Sastriana. I am a fresh graduate with a Bachelor's degree in Computer Science from Bina Nusantara University. My interest in computer technology since childhood has guided me through an exciting academic journey, allowing me to continuously deepen my knowledge, explore various aspects of technology, and strengthen my skills along the way.
                I am currently working as a contract employee at the Directorate General of Sea Transportation, Ministry of Transportation of the Republic of Indonesia, serving as a Data Processing Staff. In this role, I am responsible for supporting data management and digital information processes within the organization. This position allows me to apply the knowledge I gained during my studies to real-world scenarios while further developing my professional experience in data processing and information systems.
                During my time in university, I was actively involved in several extracurricular activities, including the Islamic Spiritual Organization, where I learned the importance of teamwork, collaboration, and collective problem-solving. I enjoy exchanging insights, learning from others, and working together to build meaningful solutions.
                Beyond the professional and academic environment, I also have a strong interest in photography, which I believe plays an important role in creativity and personal growth. I created this portfolio to share my journey, projects, and achievements.
                If you would like to connect, collaborate, or share ideas, please feel free to reach out anytime. Let's explore opportunities and create positive change together!
                Thank you.
              </p>
            </div>

            {/* Bottom Box: Location */}
            <div className="bg-slate-800 p-8 rounded-xl shadow-lg relative overflow-hidden">
              <h3 className="text-xl font-bold mb-2">📍Based in</h3>
              <p className="text-gray-300">
                Bojong Gede, Bogor Regency, Indonesia.
              </p>
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
                {/* Globe animation placeholder */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
