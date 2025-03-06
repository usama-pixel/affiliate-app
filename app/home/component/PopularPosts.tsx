import React from 'react'
import PostCardSmall from '../../common/components/molecule/PostCardSmall'
import Link from 'next/link'

type Props = {
  data: any
}

function PopularPosts({ data }: Props) {
  console.log({data})
  
  return (
    <div className='my-5'>
      <h1 className='text-2xl mb-2'>Popular Posts</h1>
      <div className='flex flex-col gap-3'>
        {data.map((d: any, indx: number) =>
          <Link href={`blog-post/${d.id}`}>
            <PostCardSmall
              key={indx}
              image_url={d.image_url}
              title={d.title}
              date={d.date}
            />
          </Link>
        )}
      </div>
    </div>
  )
}

export default PopularPosts