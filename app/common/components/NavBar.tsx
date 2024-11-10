import React from 'react'
import Link from 'next/link'

type Props = {}

function NavBar({}: Props) {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>Reviews</li>
        {/* < */}
      </ul>
      <div>
        <button className='btn btn-primary'>
            <Link title='Login' href={'/login'} />
        </button>
        <button className='btn btn-secondary'>
            <Link title='Signup' href={'/signup'} />
        </button>
      </div>  
    </div>
  )
}

export default NavBar