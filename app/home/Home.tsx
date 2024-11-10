import React from 'react'
import axiosInstance from '../common/axios'
import Hero from '../common/components/Hero'
import BigPost from '../common/components/BigPost'

type Props = {}

async function Home({}: Props) {
    const {data: blogs} = await axiosInstance.get('/blog-posts')
    const {data: featured} = await axiosInstance.get('/blog-posts?featured=true')
  return (
    <div>
        {/* <h1>Home</h1> */}
        <Hero featured={featured} />
        <div>
          <div>
            {/* <BigPost /> */}
            <div> {/* section for normal posts */}

            </div>
          </div>
          <div>

          </div>
        </div>
        <ul>
          {blogs.map((i: any) => <li key={i.id}>{i.title}</li>)}
        </ul>
    </div>
  )
}

export default Home