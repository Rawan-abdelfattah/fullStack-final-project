import './globals.css'
import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
const lora = Lora({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Rawan Blogs ',
  description: 'Share Your blog Now !! ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lora.className}>     
       <Navbar/>

        {children}</body>
        {/* <Footer/> */}
    </html>
  )
}
