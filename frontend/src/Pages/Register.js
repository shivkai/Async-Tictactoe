import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Regbutton from '../Components/Buttons/Regbutton'

const Register = () => {
  const route = useNavigate();
  const [name,setName] = useState("");
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const submitHandler = async (e)=>{
  e.preventDefault();
    const data = {name,username,email,password};
     await axios.post('http://localhost:3002/register',(data))
     .then((res)=>{
      if(res.data.success===false){
        alert(res.data.msg);
      }
      else if(res.data.success===true){
        alert(res.data.msg);
       setTimeout(()=>{
        route('/login');
       },800);
      }
      
     })
     .catch((err)=>{console.log(err)})

  }
  return (

    <div className=" h-full overflow-y-hidden  ">
      <div className="w-[350px] relative mx-auto px-4 h-[600px]">
        <div onClick={()=>{route('/')}} className="text-4xl font-medium absolute top-2 left-2 hover:bg-green-200 px-2">
          &lt;
        </div>

        <div className="absolute left-4 top-14 font-semibold">Create account</div>
        <div className="absolute top-20 text-3xl font-bold mb-2 break-normal">
          Let's get to know
          <br /> you better!
        </div>

        <div className="absolute  bottom-[15%]">

          <div className="mb-2 ml-2">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Your name
            </label>
            <input
              class=" border rounded w-full py-3 px-10 text-gray-700 bg-gray-300"
              id="name"
              type="text"
              placeholder="Type your name here"
              onChange={(e)=>{setName(e.target.value)}}
            />
          </div>

          <div className="mb-2 ml-2">
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

          <div className="mb-2 ml-2">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              class=" border rounded w-full py-3 px-10 text-gray-700 bg-gray-300"
              id="email"
              type="email"
              placeholder="Type your email here"
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>

          <div className="mb-2 ml-2">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class=" border rounded w-full py-3  px-10 text-gray-700 bg-gray-300"
              id="password"
              type="password"
              placeholder="Type your password here"
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>


        </div>
        <div onClick={submitHandler} className="w-[92%] cursor-pointer rounded-lg absolute bottom-[70px] left-4 ">
          <Regbutton />
        </div>
      </div>
    </div>
  );



}

export default Register