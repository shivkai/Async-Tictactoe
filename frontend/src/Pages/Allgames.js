import React from 'react'
import PlayerCard from '../Components/Card/PlayerCard'

const Allgames = ({games}) => {
  return (
    <div className=' max-h-screen '>
    <div className='relative h-[600px] mt-2 flex flex-col justify-around w-[350px] mx-auto'>
    <div className='absolute top-4 left-4 font-semibold  text-xl'>Your Games</div>
    <div className='absolute top-20 flex flex-col gap-4 items-center justify-center w-full'>
    
    {(games)?(games.map((elem)=>{
      return <PlayerCard name={elem.email} date={elem.date} />
    })):(<><PlayerCard/></>)}
    
    </div>
      </div>
</div>
  )
}

export default Allgames