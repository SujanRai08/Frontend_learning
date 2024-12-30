import React from 'react'
import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
      <h2 className="mt-10 font-palanquin text-4xl capitalize  font-bold lg:max-w-lg">
          We provide Super  <span className='text-coral-red'>Quality</span>  Shoes
        </h2>
        <p className=' mt-4 lg:max-w-lg info-text '>
          Ensuring Premium comfort and style, our meticulosly crafted footwear is designed to elevate your experience, providing you with mathched quality, innovation, and a touch of elegnance
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>our dedication to detials and excellence ensures your satisfaction.</p>
        <div className='mt-10'>
        <Button label="View button"/>
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img src={shoe8} alt='shoe8' width={570} height={522} className='object-contain'/>

      </div>

    </section>
  )
}

export default SuperQuality