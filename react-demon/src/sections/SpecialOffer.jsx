import React from 'react'
import { offer } from '../assets/images'
import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center  max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} width={773} height={687} className='object-contain w-full' />
      </div>
      <div className='flex flex-1 flex-col'>
      <h2 className="mt-10 font-palanquin text-4xl capitalize  font-bold lg:max-w-lg">
          <span className='text-coral-red'>Special</span>  Offers
        </h2>
        <p className=' mt-4 lg:max-w-lg info-text '>
          Ensuring Premium comfort and style, our meticulosly crafted footwear is designed to elevate your experience, providing you with mathched quality, innovation, and a touch of elegnance
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>our dedication to detials and excellence ensures your satisfaction.</p>
        <div className='mt-11 flex flex-wrap gap-4'>
        <Button label="Shop now"
        iconUrl={arrowRight}/>
        <Button label='learn more' borderColor='border-slate-gray' backgroundColor='bg-white' textColor='text-slate-gray'/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer