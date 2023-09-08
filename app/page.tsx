import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-[#1e0c0c] w-screen h-screen flex'>
      <div className=''>
        <Image src='/images/Layer5.png' alt='' width={400} height={200} />
      </div>
      <div className='pt-20'>
        <h1 className='text-[34px] font-barlow text-white leading-snug w-[317px] h-[223px] '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h1>
      </div>
    </div>
  )
}
