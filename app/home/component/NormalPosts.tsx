import PostCard from '@/app/common/components/molecule/PostCard'
import Link from 'next/link'
import React from 'react'

type Props = {
    data: any
}

function NormalPosts({ data }: Props) {
  return (
    <div> {/* section for normal posts */}
        <div className='grid grid-cols-2'>
            {data.map((d: any, indx: number) =>
                <Link key={indx} href={`blog-post/${d.id}`} className='w-fit'>
                    <PostCard key={d.id} title={d.title} image_url={d.image_url} />
                </Link>
            )}
        </div>
    </div>
  )
}

export default NormalPosts