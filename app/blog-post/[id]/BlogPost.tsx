import axiosInstance from '@/utils/axios'
import Footer from '@/app/common/components/molecule/Footer'
import Header from '@/app/common/components/molecule/Header'
import PopularPosts from '@/app/home/component/PopularPosts'
import { fetchPopularPosts, fetchBlogDetails } from '@/utils/blogDataFetcher'
import BlogLayout from './components/layout'

type Props = {
  id: string
}

async function BlogPost({ id }: Props) {
  const data = await fetchBlogDetails(id)
  const popularPost = await fetchPopularPosts();
  return (
    <>
      <Header />
      <BlogLayout>
        <div className='px-5 py-5'>
          <h1>BlogPost {id}</h1>
          <div
            className="prose prose-headings:text-black prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-h5:text-base prose-h6:text-sm max-w-full"
            dangerouslySetInnerHTML={{ __html: data?.content }}
          />
        </div>
        <PopularPosts
          data={popularPost}
        />
      </BlogLayout>
      <Footer />
    </>
  )
}

export default BlogPost