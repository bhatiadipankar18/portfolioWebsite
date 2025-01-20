export default function Skills() {
    const skills = [
      {
        category: "Programming Languages",
        items: [
          { name: "Java", iconClass: "devicon-java-plain colored" },
          { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
          { name: "Kotlin", iconClass: "devicon-kotlin-plain colored" },
          { name: "Python", iconClass: "devicon-python-plain colored" },
          { name: "HTML5", iconClass: "devicon-html5-plain colored" },
          { name: "CSS3", iconClass: "devicon-css3-plain colored" }
        ]
      },
      {
        category: "Frameworks & Backend",
        items: [
          { name: "Spring Boot", iconClass: "devicon-spring-plain colored" },
          { name: "React.js", iconClass: "devicon-react-original colored" },
          { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
          { name: "Express.js", iconClass: "devicon-express-original colored" },
          { name: "J2EE", iconClass: "devicon-java-plain colored" }
        ]
      },
      {
        category: "Databases",
        items: [
          { name: "Oracle", iconClass: "devicon-oracle-plain colored" },
          { name: "MySQL", iconClass: "devicon-mysql-plain colored" },
          { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
          { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" }
        ]
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
          { name: "Docker", iconClass: "devicon-docker-plain colored" }
        ]
      }
    ]
  
    return (
        <section id="skills" className="space-y-6 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-white">
            Skills
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {skills.map((category) => (
              <div
                key={category.category}
                className="bg-gray-800/50 rounded-2xl p-8 transition-all duration-300 hover:bg-gray-800/70 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500 mb-4">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-700/50 transition-all duration-300"
                    >
                      <i className={`${skill.iconClass} text-5xl mb-2`} />
                      <span className="text-gray-300 text-sm text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )
    }