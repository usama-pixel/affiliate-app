import Image from 'next/image';
import React from 'react'

type Props = {
    title: string;
    image_url: string;
    written_by: string
}

function FeaturedPostCard({ image_url, title, written_by }: Props) {
  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden w-full">
      <Image
        src={image_url}
        alt="Health"
        className="w-full h-48 object-cover"
        height={0}
        width={0}
        sizes='100vw'
      />
      <div className="p-4">
        <span className="badge badge-primary">Health</span>
        <h2 className="text-lg font-semibold mt-2">{title}</h2>
        <p className="text-sm text-gray-500 mt-1">{written_by} - April 6, 2017</p>
      </div>
    </div>
  )
}

export default FeaturedPostCard