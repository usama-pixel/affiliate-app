import { ReactNode } from 'react'

export default function BlogLayout({
  children,
}: {
  children: ReactNode[]
}) {
  return (
    <div className='px-6'>
      <div className='grid grid-cols-10 gap-10'>
        <div className='col-span-7'>
          {children[0]}
        </div>
        <div className='col-span-2 col-start-9'>
            {children[1]}
        </div>
      </div>
    </div>
  )
}