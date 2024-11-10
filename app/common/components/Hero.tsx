import React from 'react'
import FeaturedPostCard from './FeaturedPostCard'
import axiosInstance from '../axios'

type Props = {
  featured: any[]
}

async function Hero({ featured }: Props) {
  
  return (
    <div className="hero bg-base-200 py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 justify-items-center place-content-center">
        {
          featured.map((f: any) =>
            <FeaturedPostCard title={f.title} image_url={f.image_url} key={f.id} written_by={f.written_by} />
          )
        }
      </div>
    </div>
  )
}

export default Hero