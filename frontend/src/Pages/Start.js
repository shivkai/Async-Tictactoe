import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logbutton from '../Components/Buttons/Logbutton'

const Start = ({user}) => {
  const [email,setEmail] = useState("");
console.log(user);
  const user_check = async ()=>{
    await axios.post('http://localhost:3002/valid_user',{email})
    .then((res)=>{
      if(res.data.success===true){
        alert("User exist");
        setTimeout(async ()=>{
          await axios.post('http://localhost:3002/new_game',{oponent:email,challenger:user.value.email})
          .then((res)=>{
            if(res.data.success===true){
              alert(res.data.msg);
              route('/home/game');
            }
            else{
              alert(res.data.msg);
            }
          })
          .catch((err)=>{console.log(err)})
        },1000);
      }
      else{
        alert("User with this Email doesn't exist!");
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  const route = useNavigate();
  return (
    <div className=" h-full overflow-y-hidden  ">
      <div className="w-[350px] relative mx-auto px-4 h-[600px]">
        <div className="text-4xl font-medium absolute top-2 left-2 hover:bg-green-200 px-2">
          &lt;
        </div>

        <div className="absolute left-4 top-14 font-semibold">Start a new game</div>
        <div className="absolute top-20 text-3xl font-bold mb-2 break-normal">
        Whom do you want
          <br /> to play with?
        </div>

        <div className="absolute  top-1/3">

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
              placeholder="Type their email here"
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>

          


        </div>
        <div onClick={user_check} className="w-[92%] rounded-lg cursor-pointer absolute bottom-[40px] left-4 ">
          <Logbutton dd={"Start game"} />
        </div>
      </div>
    </div>
  )
}

export default Start