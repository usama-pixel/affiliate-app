import Image from 'next/image'
import React from 'react'

type Props = {
  title: string;
  image_url: string
  date: string;
}

function PostCardSmall({ date, image_url, title }: Props) {
  return (
    <div className='grid grid-cols-5 gap-2 cursor-pointer'>
        <div className='col-span-2'>
            <Image
                src={image_url}
                alt="Health"
                className="w-full h-full object-cover"
                height={0}
                width={0}
                sizes='100vw'
            />
        </div>
        <div className='col-span-3'>
            <p>{title}</p>
            <p>{date}</p>
        </div>
    </div>
  )
}

export default PostCardSmall