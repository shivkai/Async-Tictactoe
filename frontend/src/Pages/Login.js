import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Errbutton from '../Components/Buttons/Errbutton'
import Logbutton from '../Components/Buttons/Logbutton'
import Regbutton from '../Components/Buttons/Regbutton'

const Login = ({func}) => {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [err,setErr]=useState("");
  const route = useNavigate();

  const submitHandler = async ()=>{
    await axios.post('http://localhost:3002/login',{username,password})
    .then((res)=>{
      if(res.data.success===false){
        setErr(res.data.msg);
      }else{
        setErr("");
      func(res.data.info);
      sessionStorage.setItem("username",res.data.info.name);
      sessionStorage.setItem("email",res.data.info.email);
      sessionStorage.setItem("userId",res.data.info.userId);
       setTimeout(()=>{
        route('/home')
       },1000)
      console.log(res);
  }})
    .catch((err)=>{console.log(err)})
  }
  
  return (
    <div className=" h-full overflow-y-hidden  ">
    <div className="w-[350px] relative mx-auto px-4 h-[600px]">
      <div onClick={()=>{route('/')}} className="text-4xl font-medium absolute top-2 left-2 hover:bg-green-200 px-2">
        &lt;
      </div>

      <div className="absolute left-4 top-14 font-semibold">Login</div>
      <div className="absolute top-20 text-3xl font-bold mb-2 break-normal">
       Please enter your
        <br /> details
      </div>

      <div className="absolute  bottom-[40%]">
        <div className="mb-2">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
           Username
          </label>
          <input
            class=" border rounded w-full py-3 px-10 text-gray-700 bg-gray-300"
            id="username"
            type="text"
            placeholder="Type your username here"
            onChange={(e)=>{setUsername(e.target.value)}}
          />
        </div>

        

        <div className="mb-2">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class=" border rounded w-full py-3 px-10 text-gray-700 bg-gray-300"
            id="password"
            type="password"
            placeholder="Type your password here"
            onChange={(e)=>{setPassword(e.target.value)}}
          />
        </div>


      </div>
      <div className={`w-[90%] ${(err=="")?"hidden":"block"} py-2 absolute bottom-36 left-4 right-0 `}>
        <Errbutton/>
        
      </div>
      <div onClick={submitHandler} className="w-[90%] cursor-pointer absolute bottom-[20px] left-4 right-0 ">
        <Logbutton dd={"Login"}/>
      </div>
    </div>
  </div>
  )
}

export default Login