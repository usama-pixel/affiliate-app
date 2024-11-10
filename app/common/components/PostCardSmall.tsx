import Image from 'next/image'
import React from 'react'

type Props = {}

function PostCardSmall({}: Props) {
  return (
    <div className='grid grid-cols-5 gap-2 cursor-pointer'>
        <div className='col-span-2'>
            <Image
                src={'https://www.dexerto.com/cdn-image/wp-content/uploads/2024/01/04/berserk.jpg?width=1200&quality=60&format=auto'}
                alt="Health"
                className="w-full h-full object-cover"
                height={0}
                width={0}
                sizes='100vw'
            />
        </div>
        <div className='col-span-3'>
            <p>Daily workouts help you cope better with stress</p>
            <p>April 6, 2017</p>
        </div>
    </div>
  )
}

export default PostCardSmall