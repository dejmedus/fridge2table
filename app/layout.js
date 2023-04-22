
import './globals.css'
import { AuthContextProvider } from '@/context/AuthContext'
import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fridge2Table',
  description: 'Sustainable eating made easy! Simply input the ingredients you have on hand, and receive delicious plant-based recipe options.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-neutral-100">
        <AuthContextProvider>
          <Navbar />
          <div className='flex flex-col items-center h-full sm:mt-6'>
            {children}
          </div>
        </AuthContextProvider>
      </body>
    </html>
  )
}
