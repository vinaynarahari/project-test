import Image from 'next/image'
import React from 'react'

const guide = () => {
  return (
    <div>
      <section className='flexCenter flex-col h-full bg-feature-bg bg-contain bg-no-repeat guide-bg' id='guide'>
        <div className='padding-container max-container w-full pb-24'>
          <Image 
          src="/lifemadeeasylogo.png"
          width={100}
          height={100}
          alt='demo-logo'
          />
          <p className='uppercase regular-18 -mt-1 mb-3 text-OffWhite'> we are here for you</p>
          <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
            <h2 className='capitalize  text-MainColorLightYellow  bold-40 lg:bold-64 xl: max-w-[390px]'>Tailored Transformations</h2>
            <p className='regular-16 text-MainColorLightYellow xl:max-w-[520px]'>We believe that a person’s <b>energies</b> are affected by the spaces in which they spend the most time, and we take pride in helping create the <b>peace of mind</b> that our clients desire with those spaces.  <b>Life Made Easy</b> redefines home improvement with streamlined, <b>hassle-free</b> remodeling solutions for your interior and exterior spaces. Our dedicated team turns 
your vision into reality with expert craftsmanship, ensuring every project is handled with <b>precision and care</b>. </p>
          </div>
        </div>

        <div className='max-w-7xl  mx-auto w-full grid grid-cols-9 h-full pb-20 sm:pb-20 gap-3'>

        {/*First Timeline */}
          <div className='col-span-4 w-full h-full '>

            <div className='w-full h-full border-4 border-gray-120 rounded-2xl p-7 text-white  md:py-4 sm:hover:scale-90 lg:hover:scale-110 md:hover:scale-90  transition-all duration-500  hover:p-8 transformTextLightYellow borderTransitionWhite '>
              <h1 className='lg:bold-32 py-2 xs:bold-18'>Consultation and Estimate</h1>
              <p className='text-gray-100 sm:text-sm text-xs pt-3'>Use our attached scheduler to connect with us and discuss your project. We will assess the project at large and work with you to decide if collaborating on your dream seems like a good fit based on scope, timelines, and budgets.  We take these moments to determine compatibility and your consultation will be COMPLIMENTARY AND HASSLE-FREE.</p>
            </div>
          </div>
            <div className='col-span-1 w-full h-full flex justify-center items-center'>
              <div className='h-full w-1 bg-white'> </div>
              <div className='absolute w-6 h-6 rounded-full bg-yellow-120 z-10 text-white text-center'>1</div>
            </div>
 
            <div className='col-span-4 w-full h-full'> </div>

{/*Second Timeline */}
          <div className='col-span-4 w-full h-full'> </div>

          <div className='col-span-1 w-full h-full flex justify-center items-center'>
            <div className='h-full w-1 bg-white'> </div>
            <div className='absolute w-6 h-6 rounded-full bg-yellow-120 z-10 text-white text-center'>2</div>
          </div>

          <div className='col-span-4 w-full h-full'>

            <div className='w-full h-full border-4 border-gray-120 rounded-2xl p-7 text-white  md:py-4 lg:hover:scale-110 xs:hover:scale-90 transition-all duration-500  hover:p-8 transformTextLightYellow borderTransitionWhite'>
              <h1 className='lg:bold-32 py-2 xs:bold-18'>Vision and Design</h1>
              <p className='text-gray-100 sm:text-sm text-xs pt-3'>Design services are available for those looking to add extra attributes to their vision.  We are experienced in helping clients envision the details that are often forgotten by other contractors.</p>
            </div>
          </div>
          {/*Third Timeline */}
          <div className='col-span-4 w-full h-full'>

            <div className='w-full h-full border-4 border-gray-120 rounded-2xl p-7 text-white  md:py-4 lg:hover:scale-110 xs:hover:scale-90 transition-all duration-500  hover:p-8 transformTextLightYellow borderTransitionWhite'>
              <h1 className='lg:bold-32 py-2 xs:bold-18'>Planning and Scheduling</h1>
              <p className='text-gray-100 sm:text-sm text-xs pt-3'>We do our best to cater to clients who understand that <b>Proper Planning Prevents Poor Performance</b>.  We will sit with you every step of the way to make sure that communication and expectations are discussed well before your project begins so that we perform beyond your expectations every time!</p>
            </div>
          </div>
            <div className='col-span-1 w-full h-full flex justify-center items-center'>
              <div className='h-full w-1 bg-white'> </div>
              <div className='absolute w-6 h-6 rounded-full bg-yellow-120 z-10 text-white text-center'>3</div>
            </div>
 
            <div className='col-span-4 w-full h-full'> </div>

            {/*fourth Timeline */}
          <div className='col-span-4 w-full h-full'> </div>

          <div className='col-span-1 w-full h-full flex justify-center items-center'>
            <div className='h-full w-1 bg-white '> </div>
            <div className='absolute w-6 h-6 rounded-full bg-yellow-120 border-1 z-10 text-white text-center'>4</div>
          </div>

          <div className='col-span-4 w-full h-full'>

            <div className='w-full h-full border-4 border-gray-120 rounded-2xl p-7 text-white  md:py-4 lg:hover:scale-110 xs:hover:scale-90 transition-all duration-500  hover:p-8 transformTextLightYellow borderTransitionWhite'>
              <h1 className='lg:bold-32 py-2 xs:bold-18'>Remodeled Transformation</h1>
              <p className='text-gray-100 sm:text-sm text-xs pt-3'>Get ready for a transformation! With precision and creativity, we'll turn your space into something extraordinary. Expect cutting-edge designs, seamless execution, and a space that truly reflects your style. Stay informed with regular updates as we bring your vision to life!</p>
            </div>
          </div>

          
        </div>

      </section>
    </div>
  )
}

export default guide
