import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "🌟 Dipankar's portfolio website",
  description: "Showcasing Dipankar's expertise as a software engineer, featuring projects, skills, and experience in creating impactful solutions.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
