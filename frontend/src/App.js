import { useEffect, useState } from 'react';
import './App.css';
import Entry from './Pages/Entry';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Start from './Pages/Start';
import Game from './Pages/Game';
import Allgames from './Pages/Allgames';
import { Route, Routes, useNavigate} from 'react-router-dom'
import axios from 'axios';

function App() {
  const [user,setUser] = useState({value:null});
  const [games,setGames] = useState({});
  const route = useNavigate();
  const func = (data)=>{
    alert(data);
    console.log(data);
    setUser({value:data});
  }

useEffect(()=>{
    if(sessionStorage.getItem("username") && user.value===null){
      const name = sessionStorage.getItem("username") ;
      const email = sessionStorage.getItem("email");
      const userId = sessionStorage.getItem("userId");
     setUser({value:{name,email,userId}});
    }
const fut = async ()=>{

  const val = await axios.get(`http://localhost:3002/games/${user.value.userId}`);
  console.log(val.data.data);
  console.log("jjj")
  setGames(val.data.data);
}

    if(!sessionStorage.getItem("username")){
      // console.log(user.value);
      sessionStorage.clear();
      route('/');
    }
    else{
      fut();
    }
  },[user]);

  return (

   

    <Routes>
    <Route path="/" element={<Entry />}/>
          <Route path='login' element={<Login func={func}/>} />
          <Route path='register' element={<Register/>}/>
          {user.value===null?<></>:<>
          <Route path='home' index element={<Home games={games}/>} />
          <Route path='home/all' element={<Allgames games={games}/>}/>
          <Route path='home/newgame' element={<Start user={user}/>}/>
          <Route path='home/game' element={<Game/>} /></>}
    
    
    </Routes>
  );
}

export default App;
