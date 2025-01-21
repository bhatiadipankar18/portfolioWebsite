import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="space-y-12 animate-fadeInUp">
      <div className="flex flex-col items-center gap-12 text-center">
        {/* Image Section */}
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
          <Image
            src="/image.jpeg"
            alt="Dipankar Bhatia"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* About Me Content */}
        <div className="space-y-6 max-w-3xl">
          <h2 className="text-4xl font-extrabold text-white">About Me</h2>
          <p className="text-lg text-gray-300 font-medium leading-relaxed">
            Hi, I’m <span className="text-indigo-400 font-semibold">Dipankar Bhatia</span>, a software engineer hailing from the vibrant streets of
            <span className="text-yellow-300 font-semibold"> Delhi, India</span>. My journey from coding my first <i>“Hello, World!”</i> to designing systems that handle <strong>100K+ API calls</strong> daily has been nothing short of exhilarating.
          </p>
          <p className="text-lg text-gray-300 font-medium leading-relaxed">
            When I’m not optimizing backend response times or deploying scalable microservices, you’ll probably find me rewatching <strong className="text-red-500">Better Call Saul</strong>, or enjoying a warm cup of <span className="italic text-white font-medium">cha</span> ☕ with curiosity by my side.
          </p>
          <p className="text-lg text-gray-300 font-medium leading-relaxed">
            Whether it’s building distributed systems or crafting intuitive UIs, I’m all about creating seamless user experiences that make a difference.
          </p>
          <p className="text-xl text-white font-semibold">
            Let’s create something remarkable together! <span className="text-indigo-400">🚀</span>
          </p>
        </div>

        {/* Let's Connect Section */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="text-2xl font-bold text-white">Let’s Connect</h3>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/dipankarbhatia" target="_blank" rel="noopener noreferrer">
              <i className="devicon-linkedin-plain text-4xl text-blue-500 hover:text-blue-700 transition duration-200"></i>
            </a>
            <a href="mailto:bhatia.dipankar@gmail.com">
              <i className="devicon-google-plain text-4xl text-red-500 hover:text-red-700 transition duration-200"></i>
            </a>
            <a href="https://github.com/bhatiadipankar18" target="_blank" rel="noopener noreferrer">
              <i className="devicon-github-original text-4xl text-gray-300 hover:text-gray-500 transition duration-200"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}