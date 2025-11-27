import './globals.css'

export const metadata = {
  title: 'woookle - Web Developer',
  description: 'Personal website of woookle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}