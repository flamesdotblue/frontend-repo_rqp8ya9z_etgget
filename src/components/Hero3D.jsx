import Spline from '@splinetool/react-spline';
import { ArrowDownCircle, Mail, Rocket } from 'lucide-react';

export default function Hero3D() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 pointer-events-none" />

      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col items-start justify-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-black text-white px-3 py-1 text-xs md:text-sm shadow-md mb-4">
          <Rocket size={16} /> Beginner Full‑Stack Developer
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-gray-900">
          Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Manu GV</span>
        </h1>
        <p className="max-w-2xl mt-4 text-base md:text-lg text-gray-700">
          Currently pursuing Engineering at JNN College of Engineering, Shimoga. I love building interactive, beautiful web apps with HTML, CSS, JavaScript, Python and AI integrations.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 shadow hover:opacity-95 transition">
            View Projects
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 hover:bg-gray-50 transition">
            <Mail size={18} /> Contact Me
          </a>
        </div>
        <a href="#about" className="mt-12 inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
          <ArrowDownCircle /> Learn more
        </a>
      </div>
    </section>
  );
}
