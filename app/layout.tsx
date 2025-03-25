import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "🌟 Dipankar's Portfolio Website",
  description: "Showcasing my expertise as a software engineer, featuring projects, skills, and experience in creating impactful solutions.",
  icons: {
    icon: [{ url: '🌟', type: 'image/svg+xml' }],
    apple: [{ url: '🌟', type: 'image/svg+xml' }],
  },
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
