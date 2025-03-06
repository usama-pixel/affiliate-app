'use client';

import React, { useState } from 'react';
import Editor from './components/Editor';
import Button from '../common/components/atom/Button';
import axiosInstance from '../../utils/axios';
import { useRouter } from 'next/navigation';

const CreateBlogPost: React.FC = () => {
  const [title, setTitle] = useState('')
  const [writtenBy, setWrittenBy] = useState('')
  const [isMainPost, setIsMainPost] = useState(false)
  const [isFeatured, setIsFeatured] = useState(false)
  const [isPopular, setIsPopular] = useState(false)
  const [content, setContent] = useState<string>('Start typing...');
  const image_url = 'https://i5.walmartimages.com/asr/4114141f-7d26-4dd7-933d-babc24080395.516ad145e1a1d8d82a801ac48231950d.jpeg'
  const router = useRouter()
  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
  };
  const handleSave = () => {
    console.log(content)
    axiosInstance.post('/blog-posts', {
      title,
      content,
      written_by: writtenBy,
      image_url,
      is_main_post: isMainPost,
      is_popular: isPopular,
      featured: isFeatured
    }).then(res => {
      router.push('/home')
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="flex w-full min-h-screen">
      <div className="w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-4">Create a Blog Post</h1>
        <div className='flex flex-col gap-3 mb-5'>
          <input
            className='input border border-gray-300'
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder='Title'
            type='text'
          />
          <input
            className='input border border-gray-300'
            value={writtenBy}
            onChange={e => setWrittenBy(e.target.value)}
            placeholder='Written By'
            type='text'
          />
          <div className='flex flex-row gap-3'>
            <label htmlFor='main-post' className='text-white'>
              <input
                id='main-post'
                className='checkbox-primary border border-gray-300 w-fit mr-2'
                checked={isMainPost}
                onChange={e => setIsMainPost(e.target.checked)}
                placeholder='Main Post'
                type='checkbox'
                />
              Main Post
            </label>
            <label htmlFor='featured' className='text-white'>
              <input
                id='featured'
                className='checkbox-primary border border-gray-300 w-fit mr-2'
                checked={isFeatured}
                onChange={e => setIsFeatured(e.target.checked)}
                placeholder='Featured'
                type='checkbox'
                />
                Featured
            </label>
            <label htmlFor='popular' className='text-white'>
              <input
                id='popular'
                className='checkbox-primary border border-gray-300 w-fit mr-2'
                checked={isPopular}
                onChange={e => setIsPopular(e.target.checked)}
                placeholder='Popular'
                type='checkbox'
                />
              Popular
            </label>
          </div>
        </div>
        <Editor
          onChange={handleEditorChange}
          placeholder='Write content'
        />
        <a
          className='cursor-pointer btn btn-primary mt-2'
          onClick={handleSave}
        >Save</a>
      </div>
      <div className="w-1/2 p-4 bg-gray-100">
        <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
        <div 
          className="prose prose-headings:text-black prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-h5:text-base prose-h6:text-sm max-w-full p-4 bg-white shadow-md"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default CreateBlogPost;