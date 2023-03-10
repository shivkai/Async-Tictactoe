import React from 'react'

const Logbutton = ({dd}) => {
  return (
    <div className=' rounded-md text-white  flex justify-center items-center align-bottom  bg-[#F2C94C] h-[56px] w-full'>{(dd && dd.length>0)?dd:"Nothing"}</div>
  )
}

export default Logbutton