import React from 'react'

const Cross = () => {
  return (
    <div className='w-16 h-14  relative '>
        <div className='h-3 absolute top-4 left-2 rounded-md w-[80%] skew-y-[36deg] bg-blue-600'></div>
        <div className='h-3 rounded-md absolute top-4 left-2 w-[80%] -skew-y-[36deg] bg-blue-600'></div>
    </div>
  )
}

export default Cross