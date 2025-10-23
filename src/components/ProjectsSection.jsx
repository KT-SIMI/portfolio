import { Briefcase, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FinanceFlow",
    description: "Real-time financial dashboard with predictive analytics",
    tech: ["React", "Node.js", "TensorFlow.js", "PostgreSQL"],
    color: "from-cyan-500 to-blue-500",
    link: "google.com",
  },
  {
    title: "SocialPulse",
    description: "Social media analytics platform processing 10M+ daily events",
    tech: ["Vue.js", "Python", "Redis", "Kafka"],
    color: "from-purple-500 to-pink-500",
    link: "google.com",
  },
  {
    title: "CodeCollab",
    description: "Collaborative IDE with live code sharing and AI assistance",
    tech: ["Next.js", "WebRTC", "OpenAI", "MongoDB"],
    color: "from-orange-500 to-red-500",
    link: "google.com",
  },
  {
    title: "CodeStack",
    description: "Collaborative IDE with live code sharing and AI assistance",
    tech: ["Next.js", "WebRTC", "OpenAI", "MongoDB", "Redis"],
    color: "from-green-500 to-blue-500",
    link: "google.com",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center px-6 py-20"
    >
      <div className="max-w-full mx-auto w-full">
        <h2 className="text-5xl font-bold mb-12 flex items-center">
          <Briefcase className="mr-4 text-purple-400" size={40} />
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-transparent transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <ExternalLink
                    onClick={() => console.log(project.link)}
                    className="text-gray-400 group-hover:text-blue-400 transition-colors"
                    size={20}
                  />
                </div>

                <p className="text-gray-400 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 group-hover:border-blue-500 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
