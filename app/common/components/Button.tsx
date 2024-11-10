import React from 'react'

type Props = {
    title: string;
    handleClick: () => void
}

function Button({ title, handleClick }: Props) {
  return (
    <a
        className='px-3 py-2 bg-green-500'
        onClick={handleClick}
    >
        {title}
    </a>
  )
}

export default Button