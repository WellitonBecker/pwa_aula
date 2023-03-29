import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function Heading1({ children }: Props) {
  return (
    <h1 className='text-4xl font-semibold text-gray-800 dark:text-white'>
      {children}
    </h1>
  )
}
