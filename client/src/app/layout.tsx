'use client';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from '../redux/store'; // Make sure to import store correctly
import type { Metadata } from 'next';
import { Lora } from 'next/font/google';
import Navbar from '../../Components/Navbar/Navbar';
// import Protectetroute from '../../Components/Protectetroute/Protectetroute';

// const AuthenticatedComponent = Protectetroute();

const lora = Lora({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Rawan Blogs',
  description: 'Share Your blog Now !!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <Provider store={store}>
          <Navbar />
          <ToastContainer />
          {/* <AuthenticatedComponent> */}
            {/* Add your protected content here */}
            {children}
          {/* </AuthenticatedComponent> */}
        </Provider>
      </body>
    </html>
  );
}
