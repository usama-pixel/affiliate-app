import Image from 'next/image'
import React from 'react'

type Props = {
    image_url: string
}

function MainPost({ image_url }: Props) {
  return (
    <div className='mb-7 relative'>
      <Image
        src={image_url}
        alt="Health"
        className="w-full h-[250px] object-cover"
        height={0}
        width={0}
        sizes='100vw'
      />
      <p className='absolute text-white bottom-0 text-3xl text-center left-[25%] w-[50%]'>Are you taking your meds like everybody else?</p>
    </div>
  )
}

export default MainPost