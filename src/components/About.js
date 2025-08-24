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
              src="img/walid.png" 
              alt="Walid Fernando Sastriana" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Right Column: Text & Location */}
          <div className="flex flex-col space-y-8">
            {/* Top Box: Main About Me Text */}
            <div className="bg-slate-800 p-8 rounded-xl shadow-lg">
              <p className="text-gray-300 text-justify">
                Hello! My name is Walid Fernando Sastriana. I am currently a student pursuing a Bachelor's 
                degree in Computer Science at Bina Nusantara University. My interest in computer technology 
                since childhood has led me on an exciting journey into the world of knowledge. I take every 
                opportunity I can to delve deeper into the fascinating aspects of this field and further develop 
                my skills and understanding. I am also actively involved in various extracurricular activities, 
                such as the Islamic Spiritual Organization. Throughout my education, I always strive to solve 
                complex problems by collaborating with my classmates and teachers. I believe teamwork is the 
                key to success, and I enjoy exchanging ideas, learning from others, and building great things
                together. Besides academics, I also have other interests, such as photography. I believe that
                hobbies also play an important role in self-development and creativity. I created this portfolio
                to share my experiences, projects, and achievements throughout my education. If you would like 
                to discuss further or exchange ideas, please feel free to contact us anytime. Let's explore the world 
                of knowledge and create positive change together! Thank you.
              </p>
            </div>

            {/* Bottom Box: Location */}
            <div className="bg-slate-800 p-8 rounded-xl shadow-lg relative overflow-hidden">
              <h3 className="text-xl font-bold mb-2">Based in</h3>
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
