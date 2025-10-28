import Hero3D from './components/Hero3D';
import AboutSection from './components/AboutSection';
import ProjectsGrid from './components/ProjectsGrid';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-100">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-lg">Manu GV</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#about" className="hover:text-black">About</a>
            <a href="#projects" className="hover:text-black">Projects</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:inline-flex rounded-lg bg-gray-900 text-white px-4 py-2 text-sm">Hire Me</a>
        </div>
      </header>

      <main>
        <Hero3D />
        <AboutSection />
        <ProjectsGrid />
        <ContactSection />
      </main>

      <footer className="border-t border-gray-100 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Manu GV. All rights reserved.</p>
          <p>Built with love for web, AI, and good design.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
