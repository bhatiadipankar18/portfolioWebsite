import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
<footer className="bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/bhatiadipankar18"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/dipankarbhatia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Text Section */}
        <p className="text-sm text-gray-400 mt-4 md:mt-0">
          © {new Date().getFullYear()} Dipankar Bhatia. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

