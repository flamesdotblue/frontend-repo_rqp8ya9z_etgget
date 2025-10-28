import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Malenadu AgriTech',
    description: 'A modern agri-tech dashboard experience.',
    link: 'https://malenadu-agritech-dashboard-6jhyww4u.sites.blink.new/?v=1759838013425&t=1759838013425',
    tag: 'Featured'
  },
  {
    title: 'Vibrant AI Chatbot',
    description: 'Conversational AI web app with a sleek UI.',
    link: 'https://vibrant-ai-chat-web-app-wbcidjyw.sites.blink.new/?v=1760260607327&t=1760260607327'
  },
  {
    title: 'MovieVerse',
    description: 'Movie reviews and discovery platform.',
    link: 'https://movieverse-movie-review-platform-bo8bt78f.sites.blink.new/?v=1758981833709&t=1758981833709'
  },
  {
    title: 'StudyHive',
    description: 'Collaborative learning platform for students.',
    link: 'https://learnhive-5.preview.emergentagent.com/'
  },
  {
    title: "Manu's Wellness Café",
    description: 'Mindful breaks and wellness goodness — launching soon.',
    link: null
  }
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Projects</h2>
          <p className="text-sm text-gray-600">Curated selection of my recent work</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <div key={idx} className="group relative rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-lg transition-all">
              {p.tag && (
                <span className="absolute top-3 right-3 text-xs bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-0.5 rounded-full shadow">{p.tag}</span>
              )}
              <div className="h-36 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center text-5xl">🛠️</div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{p.description}</p>
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-blue-600 hover:text-blue-700"
                >
                  Visit <ExternalLink size={16} />
                </a>
              ) : (
                <span className="mt-4 inline-flex text-gray-400">Coming soon</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
