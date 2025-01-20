import Layout from "./components/Layout"
import About from "./components/About"
import Resume from "./components/Resume"
import Skills from "./components/Skills"
import AcademicJourney from "./components/AcademicJourney"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import "./styles/animations.css"
import Timeline from "./components/Timeline"
import ContactMe from "./components/ContactMe"

export default function Home() {
  return (
    <Layout>
      <div className="space-y-24">
        <About />
        <Resume />
        <Skills />
        <Projects />
        <Timeline />
        <ContactMe />
      </div>
    </Layout>
  )
}

