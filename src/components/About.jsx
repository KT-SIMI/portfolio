import { ChevronRight, User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-5xl font-bold mb-12 flex items-center">
          <User className="mr-4 text-blue-400" size={40} />
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              I'm a software engineer who believes code should be elegant, not
              just functional. My journey started with breaking my dad's
              computer trying to "hack" video games, and somehow that turned
              into a career.
            </p>
            <p>
              These days, I build full-stack applications that handle real user
              problems. I'm obsessed with performance optimization, clean
              architecture, and making sure the backend doesn't catch fire at 3
              AM.
            </p>
            <p>
              When I'm not debugging production issues or arguing about tabs vs
              spaces, you'll find me experimenting with new frameworks,
              contributing to open source, or explaining to non-technical people
              why "just add a button" isn't that simple.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                What I Do Best
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <ChevronRight
                    className="mr-2 text-blue-400 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span>
                    Architecting scalable systems that don't crumble under
                    pressure
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight
                    className="mr-2 text-blue-400 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span>
                    Writing clean, maintainable code that future-me won't curse
                    at
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight
                    className="mr-2 text-blue-400 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span>
                    Turning "it works on my machine" into actual production
                    deployments
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight
                    className="mr-2 text-blue-400 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span>
                    Optimizing performance until load times make users smile
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
