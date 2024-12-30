import React from 'react'
import './index.css'
import { Hero,CustomerReviews,SuperQuality,Services,SpecialOffer,Subscribe,Footer,PopularProducts } from './sections'
import Navbar from './Components/Navbar'
const App = () => {
  return (
    <main className='relative'>
      {/* Nav  */}
      <Navbar/>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero/>
      </section>
      <section className='padding'><PopularProducts/></section>
      <section className='padding'><SuperQuality/></section>
      <section className='padding-x py-10 '><Services/></section>
      <section className='padding'><SpecialOffer/></section>
      <section className='padding bg-pale-blue'><CustomerReviews/></section>
      <section className='padding sm:py-32 py-16 w-full'><Subscribe/></section>
      <section className='padding bg-black padding-x padding-t pb-8 text-center text-white'><Footer/></section>
    </main>
  )
}

export default App