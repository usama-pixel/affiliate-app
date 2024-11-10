import React from 'react'
import PostCard from './PostCard'
import axiosInstance from '../axios'

type Props = {
  featured: any[]
}

async function Hero({ featured }: Props) {
  
  return (
    <div className="hero bg-base-200 p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 justify-items-center place-content-center">
        {featured.map((f: any) => <PostCard title={f.title} image_url={f.image_url} key={f.id} />)}
      </div>
    </div>
  )
}

export default Hero