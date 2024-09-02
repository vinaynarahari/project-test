import React from 'react'
import Button from './Button'
import Image from 'next/image'

const hero = () => {
  return (
 
     <section className=' lg: lg:w-full xl:w-full bg-pattern-2   bg-no-repeat undraw-svg bg-contain'>
      <div className=' bg-pattern-2 '/>
      <div className=' max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row '>

      

        

        {/*Left Side*/}
        <div className='realtive z-20 flex flex-1 flex-col xl:w-1/2'>
          
        <h1 className='bold-52 lg:bold-88 text-MainColorLightYellow'>Life Made Easy</h1>
        <p className='regular-16 mt-6 text-OffWhite xl:max-w-[520px]'>Our focus is first on providing an experience that leaves every client referring us to the people they love and trust.  Life Made Easy specializes in transforming your dream into a reality. We take pride in the details with expert craftsmanship and personalized solutions. We believe in building a bond with each finished product.</p>
        <h2 className='pt-8 text-white'>Trusted by <b>Thousands</b> Near You</h2>

        <div className='flex flex-col w-full gap-3 sm:flex-row pt-8'>
          <a href='mailto:lifemadeeasy@example.com'>
        <Button
          type="button"
          title="Schedule a Meeting"
          variant="btn_black"
          
        />
        </a>
        </div>

        </div>

       
        </div>
     </section>
  
  )
}

export default hero
