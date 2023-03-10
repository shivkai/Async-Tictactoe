import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logbutton from '../Components/Buttons/Logbutton'
import Regbutton from '../Components/Buttons/Regbutton'

const Entry = () => {
  const route = useNavigate();
  return (
    


    <div className=' h-screen overflow-y-hidden'>
        <div className='relative h-[600px] mt-2 flex flex-col justify-around w-[350px] mx-auto'>
        <div className='absolute top-[25%] right-[40%] font-Bilbo text-4xl'>async</div>
        <div className='absolute top-1/3 right-1/3 font-Bilbo text-7xl text-center '>tic tac<br/> toe</div>
         <div onClick={()=>{route('login')}} className='cursor-pointer  bg-red-200 absolute top-2/3 h-5 w-[90%] ml-4'>
           <Logbutton dd={"Login"}  />
          </div>
         <div onClick={()=>{route('register')}} className='cursor-pointer  absolute  top-[80%]  w-[90%] ml-4'>
       <Regbutton  />
          </div>
        </div>
    </div>
  )
}

export default Entry