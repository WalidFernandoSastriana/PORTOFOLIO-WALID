export default function CV() {
  return (
    <section id="cv" className="py-20 bg-slate-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-12"> 📄 See My CV</h2>
      <a
        href="https://drive.google.com/drive/folders/1SXhNqLfpVLrmgzmWGtGzDaLlMAKv6VJ9?usp=sharing"
        download
        className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition duration-300"
      >
        Download CV
      </a>
    </section>
  );
}
