export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Me</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I am a beginner full‑stack developer with a strong passion for web development and creating interactive web
            applications. I enjoy learning and experimenting with technologies like HTML, CSS, JavaScript, Python, and AI
            integration to build projects that are both functional and visually appealing. I am eager to apply my skills,
            work on real‑world projects, and collaborate with like‑minded professionals to grow as a developer and
            contribute meaningfully to the tech community.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-gray-800">
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-600" /> HTML, CSS, JavaScript</li>
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-purple-600" /> React, Tailwind</li>
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-pink-600" /> Python, FastAPI</li>
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-600" /> AI Integrations</li>
          </ul>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-30" />
            <div className="relative bg-white rounded-3xl p-2 shadow-xl">
              <div className="h-56 w-56 md:h-64 md:w-64 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-100 flex items-center justify-center">
                {/* Photo placeholder: We'll replace with real photo when provided */}
                <span className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  MG
                </span>
              </div>
              <p className="text-center mt-3 text-sm text-gray-600">Add your photo for a more personal touch — share a link and I'll update it.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
