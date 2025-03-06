import axiosInstance from '@/utils/axios'

export async function fetchPopularPosts() {
  try {
    const { data: popularPosts } = await axiosInstance.get('/blog-posts?is_popular=true')
    return popularPosts
  } catch (error) {
    console.error('Failed to fetch popular posts:', error)
    return []
  }
}

export async function fetchBlogDetails(id: string) {
  try {
    const { data: blogPost } = await axiosInstance.get(`/blog-posts/${id}`)
    return blogPost
  } catch (error) {
    console.error('Failed to fetch blog post:', error)
    return null
  }
}