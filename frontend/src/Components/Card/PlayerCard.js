import React from 'react'
import Logbutton from '../Buttons/Logbutton'

const PlayerCard = ({name,date}) => {
  return (
    <div className='w-[320px] rounded-lg  shadow-[0px_22px_70px_4px_rgba(0,0,0,0.1)] '>
        <div className='text-2xl font-semibold ml-4 mt-2'>Game with {(name && name.length>0)?name:"Tanmay"}</div>
        <div className='text-md font-normal ml-4 mt-2'>{(name && name.length>0)?name:"Tanmay"} made their move</div>
        <div className='text-md font-normal ml-4 mt-1'>Its Your turn to play now</div>
        <div className='text-md font-normal ml-4 mt-6 mb-3'>{(date)?date:Date()}</div>
        <div className='mb-4 w-[90%]  ml-4'>
            <Logbutton/>
        </div>
    </div>
  )
}

export default PlayerCard