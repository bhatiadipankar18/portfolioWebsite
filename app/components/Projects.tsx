import { Button } from "./ui/button"
import { Github } from "lucide-react"

const projects = [
  {
    title: "Stay Ease",
    description: "A brief description of Project 1 and its key features.",
    githubLink: "https://github.com/bhatiadipankar18/stayease",
  },
  {
    title: "Before Release",
    description: "A brief description of Project 2 and its key features.",
    githubLink: "https://github.com/bhatiadipankar18/beforerelease",
  },
  {
    title: "Nurture Nest",
    description: "A brief description of Project 2 and its key features.",
    githubLink: "https://github.com/bhatiadipankar18/nurture-nest",
  }
]

export default function Projects() {
    return (
      <section id="projects" className="space-y-6 animate-fadeInUp">
        <h2 className="text-4xl font-bold text-white">
          Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-2xl p-8 transition-all duration-300 hover:bg-gray-800/70 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <Button 
                asChild 
                className="rounded-xl bg-transparent border border-blue-500/50 text-gray-300 hover:text-white hover:bg-blue-500/10 transition-colors duration-300"
              >
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> View on GitHub
                </a>
              </Button>
            </div>
          ))}
        </div>
      </section>
    )
  }