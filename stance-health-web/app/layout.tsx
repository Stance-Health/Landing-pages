import './globals.css'
import { Unbounded, Montserrat } from 'next/font/google'
import { ConceptSwitcher } from '../components/ui/ConceptSwitcher'
import { Suspense } from 'react'

const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-unbounded',
  weight: ['400', '700', '900'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '700'],
})

export const metadata = {
  title: 'Stance Health | Performance × Recovery × Science',
  description: 'Specialized physiotherapy in Bangalore - HSR Layout, Indiranagar, Whitefield. Data-driven recovery using VALD Technology.',
  openGraph: {
    title: 'Stance Health | Performance × Recovery × Science',
    description: 'Advanced physiotherapy for athletes and high-performers.',
    url: 'https://www.stance.health',
    siteName: 'Stance Health',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${unbounded.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="font-montserrat bg-off-white text-navy m-0 p-0 selection:bg-lime selection:text-navy">
        <Suspense fallback={null}>
          <ConceptSwitcher />
        </Suspense>
        {children}
      </body>
    </html>
  )
}
