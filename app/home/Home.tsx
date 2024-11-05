import React from 'react'
import axiosInstance from '../common/axios'

type Props = {}

async function Home({}: Props) {
    const response = await axiosInstance.get('/blog-posts')
    const blogs = response.data
  return (
    <div>
        <h1>Home</h1>
        <ul>
            {blogs.map((i: any) => <li key={i.id}>{i.title}</li>)}
        </ul>
    </div>
  )
}

export default Home