import { Button } from "./ui/button"
import { FileDown } from "lucide-react"

export default function Resume() {
  return (
    <section id="resume" className="space-y-6 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-white">
        Resume
      </h2>
      <p className="text-xl text-gray-300 leading-relaxed">
        Here's a brief overview of my skills and experience. For a more detailed version, you can download my full
        resume.
      </p>
      <Button
        asChild
        className="mt-4 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-200 transform hover:scale-105"
      >
        <a href="/Resume_DipankarBhatia.pdf" download>
          <FileDown className="mr-2 h-5 w-5" /> Download Resume
        </a>
      </Button>
    </section>
  )
}

