"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Java", iconClass: "devicon-java-plain colored" },
        { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
        { name: "Kotlin", iconClass: "devicon-kotlin-plain colored" },
        { name: "Python", iconClass: "devicon-python-plain colored" },
        { name: "HTML5", iconClass: "devicon-html5-plain colored" },
        { name: "CSS3", iconClass: "devicon-css3-plain colored" },
      ],
    },
    {
      category: "Frameworks & Backend",
      items: [
        { name: "Spring Boot", iconClass: "devicon-spring-plain colored" },
        { name: "React.js", iconClass: "devicon-react-original colored" },
        { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
        { name: "Express.js", iconClass: "devicon-express-original colored" },
        { name: "J2EE", iconClass: "devicon-java-plain colored" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "Oracle", iconClass: "devicon-oracle-plain colored" },
        { name: "MySQL", iconClass: "devicon-mysql-plain colored" },
        { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
        { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" },
        { name: "Neo4j", iconClass: "devicon-neo4j-plain-wordmark" },
      ],
    },
    {
      category: "Tools & Technologies",
      items: [
        { name: "Redis", iconClass: "devicon-redis-plain colored" },
        { name: "AWS", iconClass: "devicon-amazonwebservices-plain-wordmark colored" },
        { name: "DBeaver", iconClass: "devicon-postgresql-plain colored" },
        { name: "Postman", iconClass: "devicon-postman-plain colored" },
        { name: "Kafka", iconClass: "devicon-apachekafka-original-wordmark" },
        { name: "Kubernetes", iconClass: "devicon-kubernetes-plain colored" },
        { name: "GraphQL", iconClass: "devicon-graphql-plain colored" },
        { name: "Git", iconClass: "devicon-git-plain colored" },
        { name: "Firebase", iconClass: "devicon-firebase-plain colored" },
        { name: "Docker", iconClass: "devicon-docker-plain colored" },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {skills.map((category) => (
            <button
              key={category.category}
              onClick={() => setSelectedCategory(category.category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                selectedCategory === category.category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category.category}
            </button>
          ))}
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              selectedCategory === null ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            All Skills
          </button>
        </div>
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills
            .filter((category) => !selectedCategory || category.category === selectedCategory)
            .map((category) => (
              <motion.div
                key={category.category}
                className="bg-gray-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold text-blue-400 mb-4">{category.category}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center p-2 rounded-xl hover:bg-gray-700/50 transition-all duration-300"
                    >
                      <i className={`${skill.iconClass} text-4xl mb-2`} aria-hidden="true" />
                      <span className="text-gray-300 text-sm text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  )
}

