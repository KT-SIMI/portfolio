import { Code2 } from "lucide-react";

  const skills = {
    Frontend: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS"],
    Backend: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
    DevOps: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"],
    Tools: ["Git", "Figma", "Jest", "WebRTC", "GraphQL"],
  };

export default function Skills() {
  return (
   <section id="skills" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 flex items-center">
            <Code2 className="mr-4 text-cyan-400" size={40} />
            Technical Arsenal
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-cyan-400">{category}</h3>
                <ul className="space-y-2">
                  {items.map((skill, i) => (
                    <li key={i} className="text-gray-300 flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
