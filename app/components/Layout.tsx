import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-24">{children}</main>
      <Footer />
    </div>
  )
}

