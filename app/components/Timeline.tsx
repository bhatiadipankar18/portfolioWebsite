import { CalendarDays, GraduationCap, Briefcase } from "lucide-react"

const timelineItems = [
  {
    date: "July 2024 - Present",
    title: "Software Engineer",
    company: "Changing the Present",
    description: "Led development of scalable web applications using React and Node.js.",
    icon: Briefcase,
  },
  {
    date: "September 2022 - May 2024",
    title: "Master of Science (M.S) in Computer Science",
    company: "Stevens Institute of Technology",
    description: "Graduated with honors. Key courses: Data Structures, Algorithms, Web Development.",
    icon: GraduationCap,
  },
  {
    date: "January 2024 - May 2024",
    title: "Software Engineer Intern",
    company: "Stevens Institute of Technology",
    description: "Developed and maintained multiple client projects using various technologies.",
    icon: Briefcase,
  },
  {
    date: "March 2021 - August 2022",
    title: "Software Engineer",
    company: "Kellton",
    description: "Developed and maintained multiple client projects using various technologies.",
    icon: Briefcase,
  },
  {
    date: "August 2017 - August 2021",
    title: "Bachelor of Technology (B.Tech.) in Computer Science and Engineering",
    company: "Dr. A.P.J Abdul Kalam Technical University",
    description: "Developed and maintained multiple client projects using various technologies.",
    icon: GraduationCap,
  },
  // Add more items as needed
]

export default function Timeline() {
  return (
    <section id="timeline" className="space-y-6 animate-fadeInUp">
      <h2 className="text-4xl font-bold text-white">
        My Timeline
      </h2>
      <div className="relative">
        {timelineItems.map((item, index) => (
          <div key={index} className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">{item.icon && <item.icon size={20} />}</h1>
            </div>
            <div className="order-1 bg-gray-900 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">{item.title}</h3>
              <h4 className="mb-3 font-semibold text-blue-300">{item.company}</h4>
              <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">{item.description}</p>
              <p className="mt-2 text-sm text-gray-400">
                <CalendarDays className="inline mr-2" size={16} />
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}