import React from 'react'
import axiosInstance from '../common/axios'
import Hero from '../common/components/Hero'
import MainPost from '../common/components/MainPost'
import Ad700 from '../common/components/Ads/Ad700'
import PopularPosts from '../common/components/PopularPosts'
import PostCard from '../common/components/PostCard'
import Ad728 from '../common/components/Ads/Add728'
import Footer from '../common/components/Footer'
import Header from '../common/components/Header'

type Props = {}

async function Home({}: Props) {
    const {data: blogs} = await axiosInstance.get('/blog-posts')
    const {data: featured} = await axiosInstance.get('/blog-posts?featured=true')
    const {data: mainPost} = await axiosInstance.get('/blog-posts?is_main_post=true')
    const {data: popularPost} = await axiosInstance.get('/blog-posts?is_popular=true')
    console.log({mainPost})
  return (
    <div className='px-6'>
      <Header />
        {/* <h1>Home</h1> */}
      <Hero featured={featured} />
      <div className='grid grid-cols-8 gap-10'>
        <div className='col-span-5'> {/** left posts */}
          {mainPost && mainPost.length > 0 && <MainPost image_url={mainPost?.[0].image_url} />}
          <div> {/* section for normal posts */}
            <div className='grid grid-cols-2'>
              {blogs.map((i: any) => <PostCard key={i.id}  />)}
            </div>
          </div>
        </div>
        <div className='col-span-3'> {/** right posts */}
          <Ad700 />
          <PopularPosts />
        </div>
      </div>
      <Ad728
        image_url={'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/01/split-images-of-six-path-of-pain.jpg'}
      />
      <Footer />
    </div>
  )
}

export default Home