import React from 'react'

interface Props {
    children: React.ReactNode
}

export default function Heading2({ children }: Props) {
  return (
    <h2 className='text-gray-400 text-md'>
      {children}
    </h2>
  )
}
