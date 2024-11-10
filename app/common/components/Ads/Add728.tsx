import Image from 'next/image'
import React from 'react'

type Props = {
    image_url: string
}

function Ad728({ image_url }: Props) {
  return (
    <div className='relative w-full h-[90px] mb-5 bg-green-500 text-center flex justify-center items-center'>
        <Image
            src={image_url}
            alt="Ad"
            className="w-full h-full object-cover"
            height={0}
            width={0}
            sizes='100vw'
        />
        <div className='absolute w-full flex flex-row justify-around items-center gap-5'>
            <p className='text-2xl text-white shadow-xl'>Ad728</p>
            <p>Newspaper - The Most Popular Theme for Blog. News & Magzine websites</p>
            <button className='btn btn-primary'>Buy Now</button>
        </div>
    </div>
  )
}

export default Ad728