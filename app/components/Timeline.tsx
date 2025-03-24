import { CalendarDays, GraduationCap, Briefcase, MapPin, Link } from "lucide-react";

const timelineItems = [
  {
    date: "July 2024 - Present",
    title: "Software Engineer",
    company: "Changing the Present",
    description: "",
    location: "Florida, New York, United States",
    website: "https://changingthepresent.org",
    icon: Briefcase,
    logo: "/logos/changing-the-present.png",
  },
  {
    date: "September 2022 - May 2024",
    title: "Master of Science (M.S) in Computer Science",
    company: "Stevens Institute of Technology",
    description: "Relevant Coursework: Mobile Systems & Applications, Agile, Database Design, Web Programming",
    location: "Hoboken, New Jersey, United States",
    website: "https://www.stevens.edu",
    icon: GraduationCap,
    logo: "/logos/stevens.png",
  },
  {
    date: "March 2021 - August 2022",
    title: "Software Engineer",
    company: "Kellton",
    description: "",
    location: "Gurugram, Haryana, India",
    website: "https://www.kelltontech.com",
    icon: Briefcase,
    logo: "/logos/kellton.png",
  },
  {
    date: "July 2020 - August 2020",
    title: "Software Engineer Intern",
    company: "Bharat Heavy Electricals Limited",
    description: "",
    location: "Noida, Uttar Pradesh, India",
    website: "https://www.bhel.com",
    icon: Briefcase,
    logo: "/logos/bhel.png",
  },
  {
    date: "August 2017 - August 2021",
    title: "Bachelor of Technology (B.Tech.) in Computer Science and Engineering",
    company: "Dr. A.P.J Abdul Kalam Technical University",
    description: "Relevant Coursework: Java Programming, Data Structures & Algorithms, Database Management Systems, Operating Systems",
    location: "Greater Noida, Uttar Pradesh, India",
    website: "https://aktu.ac.in",
    icon: GraduationCap,
    logo: "/logos/aktu.png",
  },
  {
    date: "2017",
    title: "High School",
    company: "New Green Field School",
    description: "Subjects: Physics, Chemistry, Maths, Engineering Drawing",
    location: "Saket, Delhi, India",
    website: "http://www.ngfssaket.com/",
    icon: GraduationCap,
    logo: "/logos/ngfs.png",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="space-y-10 animate-fadeInUp">
      <h2 className="text-4xl font-bold text-white text-center mb-10">
        My Work Experience and Education
      </h2>
      <div className="relative flex flex-col items-center">
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className="mb-12 flex flex-col w-full md:flex-row md:justify-center relative"
          >
            {/* Content Section with Logo Inside */}
            <div className="bg-gray-900 rounded-2xl shadow-xl flex items-center w-full md:w-8/12 px-6 py-4 relative">
              {/* Logo Section */}
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={item.logo}
                    alt={`${item.company} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Details Section */}
              <div>
                <h3 className="mb-3 font-bold text-white text-xl">{item.title}</h3>
                <h4 className="mb-3 font-semibold text-blue-300 flex items-center">
                  {item.company}
                  {item.website && (
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-gray-400 hover:text-white"
                      aria-label={`Visit ${item.company}'s website`}
                    >
                      <Link size={18} />
                    </a>
                  )}
                </h4>
                <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">
                  {item.description}
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  <MapPin className="inline mr-2" size={16} />
                  {item.location}
                </p>
                <p className="mt-2 text-sm text-gray-400">
                 <CalendarDays className="inline mr-2" size={16} />
                 {item.date}
                </p>
              </div>

              {/* Icon Section Further Outside the Box */}
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-20 text-blue-300">
  {item.icon && (
    <item.icon className="w-9 h-8 md:w-15 md:h-10" />
  )}
</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}