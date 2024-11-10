import React from 'react'
import PostCardSmall from './PostCardSmall'

type Props = {}

function PopularPosts({}: Props) {
  return (
    <div className='my-5'>
      <h1 className='text-2xl mb-2'>Popular Posts</h1>
      <div className='flex flex-col gap-3'>
        <PostCardSmall />
        <PostCardSmall />
        <PostCardSmall />
      </div>
    </div>
  )
}

export default PopularPosts