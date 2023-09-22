import React from 'react'
import img from '../../../assets/proifile.jpg'
import Footer from '../../../Components/Footer/Footer'
export default function allblogs() {
  return (
    <>    <div  className='flex items-center justify-center'>
    <div className='m-5 p-5'>
      <h1 className='text-bold text-3xl mb-6 text-center'>All Blogs</h1>
<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
  <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={img.src} alt='blog image' />
  <div className="flex flex-col justify-between p-4 leading-normal">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  </div>
</a>

    </div>

    </div>
    <Footer/>
    </>


  )
}
