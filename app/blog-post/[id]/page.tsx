import React from 'react'
import BlogPost from './BlogPost'

type Props = {
  params: {
    id: string
  }
}

function page({ params }: Props) {
  return (
    <BlogPost id={params.id} />
  )
}

export default page