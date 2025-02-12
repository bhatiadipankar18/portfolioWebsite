"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Github, ExternalLink, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "Hire Me",
    description:
      "A professional social media/networking platform that helps you land jobs",
    githubLink: "https://github.com/bhatiadipankar18/HireMe",
    tags: ["Java", "Spring Boot", "Neo4j", "PostgreSQL", "API Gateway", "Hibernate", "JWT"],
  },
  {
    title: "Stay Ease",
    description:
      "A hotel booking platform that simplifies the reservation process for travelers and hotel managers alike",
    githubLink: "https://github.com/bhatiadipankar18/stayease",
    tags: ["React.js", "Java", "Spring Boot", "Docker", "PostgreSQL", "AWS Elastic Beanstalk", "AWS CodeDeploy"],
  },
  {
    title: "Before Release",
    description: "A movie evaluation web application where you can rate a movie based on their trailers before the release date",
    githubLink: "https://github.com/bhatiadipankar18/beforerelease",
    tags: ["Java", "Spring Boot", "Hibernate", "React.js", "MongoDB", "Firebase", "JWT"],
  },
  {
    title: "Nurture Nest",
    description: "A child care and management platform where busy parents can track all health records like vaccination, nutrition and doctor's appointments, it also is nanny hiring platform where users can chat with their assigned nannies in real-time",
    githubLink: "https://github.com/bhatiadipankar18/nurture-nest",
    tags: ["React.js", "Redis", "Redux", "AWS S3", "Node.js", "Socket.io", "OAuth"],
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website showcasing my projects and skills.",
    githubLink: "https://github.com/bhatiadipankar18/portfolioWebsite",
    tags: ["TypeScript", "Tailwind CSS", "Framer Motion", "Next.js"],
  },
]

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const projectVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">My Projects</h2>
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              variants={projectVariants}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl border-blue-500/50 text-gray-300 hover:text-white hover:bg-blue-500/10 transition-colors duration-300"
                >
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </a>
                </Button>
              </div>
              {hoveredProject === index && (
                <motion.div
                  className="absolute bottom-4 right-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight className="text-blue-400 h-6 w-6" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

