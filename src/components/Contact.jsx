import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-5xl font-bold mb-12 flex items-center">
          <MessageSquare className="mr-4 text-green-400" size={40} />
          Let's Build Something
        </h2>

        <div className="max-w-3xl">
          <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
            Got an interesting project? Need someone who can turn caffeine into
            code? Or just want to argue about whether PHP is still relevant in
            2025?
          </p>
          <p className="text-xl text-gray-400 mb-12">
            I'm always open to discussing new opportunities, collaborations, or
            just having a good tech conversation. Drop me a message and let's
            make something awesome together.
          </p>

          <div className="space-y-6">
            <a
              href="mailto:uthmanoyewole95@gmail.com"
              className="flex items-center space-x-4 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-gray-700 hover:border-green-500 transition-all duration-300 group"
            >
              <Mail
                className="text-green-400 group-hover:scale-110 transition-transform"
                size={32}
              />
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-xl text-white">uthmanoyewole95@gmail.com</p>
              </div>
            </a>

            <div className="flex space-x-4">
              <a
                href="https://github.com/KT-SIMI"
                className="flex-1 flex items-center justify-center space-x-3 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
              >
                <Github
                  className="text-blue-400 group-hover:scale-110 transition-transform"
                  size={28}
                />
                <span className="text-white">GitHub</span>
              </a>
              <a
                target="blank"
                href="https://www.linkedin.com/in/ikeoluwakiitan-oyewole-95b3b9228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="flex-1 flex items-center justify-center space-x-3 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
              >
                <Linkedin
                  className="text-blue-400 group-hover:scale-110 transition-transform"
                  size={28}
                />
                <span className="text-white">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
