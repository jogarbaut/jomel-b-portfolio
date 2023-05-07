import React from 'react'

const Box = ({children}) => {
  return (
    <div className='px-3 py-1.5 border flex items-center justify-center rounded mb-2 text-sm bg-gray-50/50'>{children}</div>
  )
}

export default Box