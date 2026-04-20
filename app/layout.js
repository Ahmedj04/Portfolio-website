import './globals.css'

export const metadata = {
  title: 'Ahmed Jan — Software Engineer',
  description: 'Software Engineer with 2.5+ years of experience building scalable, user-centric web applications using Angular, React, and Next.js.',
  keywords: 'Ahmed Jan, Software Engineer, Frontend Developer, React, Angular, Next.js, Full Stack',
  openGraph: {
    title: 'Ahmed Jan — Software Engineer',
    description: 'Building scalable, user-centric web applications',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
