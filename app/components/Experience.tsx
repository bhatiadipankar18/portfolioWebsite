import Image from "next/image"

const experiences = [
  {
    company: "Changing the Present",
    logo: "/logos/changing-the-present.png",
    position: "Software Engineer",
    duration: "Jul 2024 - Present",
    description: "Reduced backend response times by 25% and scaled services to handle over 100K API calls daily by optimizing RESTful APIs using Java and Spring Boot. Integrated Kafka with microservices, enhancing system efficiency and reducing 20% infrastructure costs with Kubernetes migration."
  },
  {
    company: "Stevens Institute of Technology",
    logo: "/logos/stevens.png",
    position: "Software Engineer Intern",
    duration: "Jan 2024 - May 2024",
    description: "Built a full-stack MERN application for managing tasks and team collaborations. Improved data fetching by 40% through GraphQL API implementation."
  },
  {
    company: "Kellton",
    logo: "/logos/kellton.png",
    position: "Software Engineer",
    duration: "Mar 2021 - Aug 2022",
    description: "Engineered high-performance Java Spring Boot microservices, optimizing API response times by 30%. Automated deployment workflows with Jenkins, reducing deployment time from 2 hours to 30 minutes."
  }
]

export default function Experience() {
  return (
    <section id="experience" className="space-y-6 animate-fadeInUp">
    <h2 className="text-4xl font-bold text-white">
      Experience
    </h2>
    <ul className="space-y-8">
      {experiences.map((exp, index) => (
        <li
          key={index}
          className="flex items-start space-x-6 bg-gray-800 bg-opacity-50 rounded-lg p-6 transition-all duration-200 hover:bg-opacity-70"
        >
          <Image
            src={exp.logo || "/placeholder.svg"}
            alt={`${exp.company} logo`}
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <h3 className="text-2xl font-semibold text-blue-300">{exp.position}</h3>
            <p className="text-xl font-medium text-gray-300">{exp.company}</p>
            <p className="text-gray-400">{exp.duration}</p>
            <p className="mt-2 text-gray-300">{exp.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </section>
  )
}

