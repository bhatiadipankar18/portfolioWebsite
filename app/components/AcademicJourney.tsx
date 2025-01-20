export default function AcademicJourney() {
  return (
    <section id="academic-journey" className="space-y-6 animate-fadeInUp">
      <h2 className="text-4xl font-bold text-white">
        Academic Journey
      </h2>
      <ul className="space-y-6">
        <li className="bg-gray-800 bg-opacity-50 rounded-lg p-6 transition-all duration-200 hover:bg-opacity-70">
          <h3 className="text-2xl font-semibold text-blue-300">Master of Science (M.S.) in Computer Science</h3>
          <p className="text-gray-400 mt-2">Stevens Institute of Technology, September 2022 - May 2024</p>
          <p className="text-gray-400 mt-2">Hoboken, New Jersey, United States</p>
        </li>
        <li className="bg-gray-800 bg-opacity-50 rounded-lg p-6 transition-all duration-200 hover:bg-opacity-70">
          <h3 className="text-2xl font-semibold text-blue-300">Bachelor of Technology (B.Tech.) in Computer Science and Engineering</h3>
          <p className="text-gray-400 mt-2">Dr. A.P.J. Abdul Kalam Technical University, Aug 2017 - Aug 2021</p>
          <p className="text-gray-400 mt-2">Greater Noida, Uttar Pradesh, India</p>
        </li>
        <li className="bg-gray-800 bg-opacity-50 rounded-lg p-6 transition-all duration-200 hover:bg-opacity-70">
          <h3 className="text-2xl font-semibold text-blue-300">High School</h3>
          <p className="text-gray-400 mt-2">New Green Fields School, 2017</p>
          <p className="text-gray-400 mt-2">New Delhi, Delhi, India</p>
        </li>
      </ul>
    </section>
  )
}

