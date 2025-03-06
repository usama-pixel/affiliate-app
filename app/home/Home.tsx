import React from 'react'
import axiosInstance from '../../utils/axios'
import Hero from '../common/components/organism/Hero'
import MainPost from '../common/components/molecule/MainPost'
import Ad700 from '../common/components/Ads/Ad700'
import PopularPosts from './component/PopularPosts'
import PostCard from '../common/components/molecule/PostCard'
import Ad728 from '../common/components/Ads/Add728'
import Footer from '../common/components/molecule/Footer'
import Header from '../common/components/molecule/Header'
import NormalPosts from './component/NormalPosts'
import Link from 'next/link'
import { fetchPopularPosts } from '@/utils/blogDataFetcher'

type Props = {}

async function Home({}: Props) {
    const {data: blogs} = await axiosInstance.get('/blog-posts')
    const {data: featured} = await axiosInstance.get('/blog-posts?featured=true')
    const {data: mainPost} = await axiosInstance.get('/blog-posts?is_main_post=true')
    const popularPost = await fetchPopularPosts();
    console.log({mainPost})
  return (
    <>
    <Header />
    <div className='px-6'>
      <Hero featured={featured} /> {/** featured */}
      <div className='grid grid-cols-8 gap-10'>
        <div className='col-span-5'> {/** left posts */}
          {
            mainPost &&
            mainPost.length > 0 &&
            <Link href={`/blog-post/${mainPost?.[0]?.id}`}>
              <MainPost image_url={mainPost?.[0].image_url} />
            </Link>
          }
          <NormalPosts data={blogs} />
        </div>
        <div className='col-span-3'> {/** right posts */}
          <Ad700 />
          <PopularPosts data={popularPost} />
        </div>
      </div>
      <Ad728
        image_url={'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/01/split-images-of-six-path-of-pain.jpg'}
      />
    </div>
    <Footer />
    </>
  )
}

export default Home