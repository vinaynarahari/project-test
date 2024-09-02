'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import { IMAGES } from '../constants'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Page() {
  return (
    <section className='py-12'>
      <div className="p-5 md:p-10">
  <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
  {IMAGES.map((image, index) => (
  
  <Image
    src={image.src}
    alt={image.alt}
    width={1080}
    height={1920}
    className=' items-center object-contain'
  />

))}
  </div>
</div>
    </section>
  )
}


