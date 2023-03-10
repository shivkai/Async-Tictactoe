import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logbutton from '../Components/Buttons/Logbutton'
import PlayerCard from '../Components/Card/PlayerCard';

const Home = ({games}) => {
  const route = useNavigate();
  return (
    <div className=' max-h-screen overflow-y-hidden'>
    <div className='relative h-[600px] mt-2 flex flex-col justify-around w-[350px] mx-auto'>
    <div className='absolute top-4 left-4 font-semibold  text-xl'>Your Games</div>

    {(games && games.length>0)?  <div className='absolute top-20 flex flex-col gap-4 items-center justify-center w-full'>
    
    {(games)?(games.map((elem)=>{
      return <PlayerCard name={elem.name} date={elem.date} key={elem._id} />
    })):(<><PlayerCard/></>)}
    
    </div>:
    <div className='absolute top-1/3 left-[50px] font-Bilbo text-7xl text-center '>No Games<br/>Found</div>
    }
    <div onClick={()=>{route('newgame')}} className='absolute w-[94%] left-2 bottom-24 cursor-pointer'><Logbutton dd={"Start a new game"}/></div>
    </div>
</div>
  )
}

export default Home