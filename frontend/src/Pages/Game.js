import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logbutton from '../Components/Buttons/Logbutton'
import Circle from '../Components/Piece/Circle'
import Cross from '../Components/Piece/Cross'

const Game = () => {

  const [piece1,setPiece1] = useState("null");
  const [piece2,setPiece2] = useState("null");
  const [piece3,setPiece3] = useState("null");
  const [piece4,setPiece4] = useState("null");
  const [piece5,setPiece5] = useState("null");
  const [piece6,setPiece6] = useState("null");
  const [piece7,setPiece7] = useState("null");
  const [piece8,setPiece8] = useState("null");
  const [piece9,setPiece9] = useState("null");
  const [turn,setTurn] = useState(true);
  const [piece,setPiece] = useState("cross");
  const client = (e)=>{
    const elem = e.target.id;
    if(turn){
      if(elem=="1" && piece1=="null"){
        setPiece1(piece);
      }
      else if(elem=="2" && piece2=="null"){
        setPiece2(piece);
      }
      else if(elem=="3" && piece3=="null"){
        setPiece3(piece);
      }
      else if(elem=="4" && piece4=="null"){
        setPiece4(piece);
      }
      else if(elem=="5" && piece5=="null"){
        setPiece5(piece);
      }
      else if(elem=="6" && piece6=="null"){
        setPiece6(piece);
      }
      else if(elem=="7" && piece7=="null"){
        setPiece7(piece);
      }
      else if(elem=="8" && piece8=="null"){
        setPiece8(piece);
      }
      else if(elem=="9" && piece9=="null"){
        setPiece9(piece)
      }

      setTurn(false);
      setPiece("circle");
    }
    else{
      if(elem=="1" && piece1=="null"){
        setPiece1(piece);
      }
      else if(elem=="2" && piece2=="null"){
        setPiece2(piece);
      }
      else if(elem=="3" && piece3=="null"){
        setPiece3(piece);
      }
      else if(elem=="4" && piece4=="null"){
        setPiece4(piece);
      }
      else if(elem=="5" && piece5=="null"){
        setPiece5(piece);
      }
      else if(elem=="6" && piece6=="null"){
        setPiece6(piece);
      }
      else if(elem=="7" && piece7=="null"){
        setPiece7(piece);
      }
      else if(elem=="8" && piece8=="null"){
        setPiece8(piece);
      }
      else if(elem=="9" && piece9=="null"){
        setPiece9(piece)
      }

      setTurn(true);
      setPiece("cross");
    }
    
  }
  const route = useNavigate();
  return (
    <div className=" w-full  overflow-x-hidden ">
      <div className="w-[350px] relative mx-auto px-4 h-[600px]">
        <div onClick={()=>{route('/home')}} className="text-4xl font-medium absolute top-1 left-2 hover:bg-green-200 px-2">
          &lt;
        </div>

        <div className="absolute top-12 text-2xl font-bold mb-2 break-normal">
          Game with Tanmay
        </div>
        <div className="absolute left-4 top-20 font-semibold">Your piece</div>
        <div className="absolute top-28">
          <Cross />
        </div>

        <div className="h-14 bg-yellow-200 flex absolute top-44 w-[90%] justify-center align-middle items-center">
          Your move
        </div>
        <div className="absolute grid grid-cols-3 w-[90%] h-[40%] top-[39%]">
          <div
            id="1"
            onClick={client}
            className=" h-24 border-r-2 border-b-2 border-yellow-300 text-white"
          >
            {piece1 == "cross" ? (
              <span className=" mt-8 flex justify-center">
                <Cross />
              </span>
            ) : (piece1 == "circle" ? (
              <span className=" mt-4 flex justify-center">
                <Circle />
              </span>
            ) : (
              <span>.</span>
            ))}
          </div>
          <div
            id="2"
            onClick={client}
            className="h-24  border-r-2 border-b-2 border-yellow-300 text-white"
          >
            {(piece2 == "cross") ? 
              <span className=" mt-8 flex justify-center">
                <Cross />
              </span>
            :( piece2 == "circle" )? 
              <span className=" mt-4 flex justify-center">
                <Circle />
              </span>
             : 
              <span>.</span>
            }
          </div>
          <div
            id="3"
            onClick={client}
            className="h-24   border-b-2 border-yellow-300 text-white"
          >
            {piece3 == "cross" ? (
              <span className=" mt-8 flex justify-center">
                <Cross />
              </span>
            ) : piece3 == "circle" ? (
              <span className=" mt-4 flex justify-center">
                <Circle />
              </span>
            ) : (
              <span>.</span>
            )}
          </div>

          <div
            id="4"
            onClick={client}
            className="h-24  border-r-2 border-b-2 border-yellow-300 text-white"
          >
            {piece4 == "cross" ? (
              <span className=" mt-8 flex justify-center">
                <Cross />
              </span>
            ) : piece4 == "circle" ? (
              <span className=" mt-4 flex justify-center">
                <Circle />
              </span>
            ) : (
              <span>.</span>
            )}
          </div>
          <div
            id="5"
            onClick={client}
            className="h-24  border-r-2 border-b-2 border-yellow-300 text-white"
          >
            {piece5 == "cross" ? (
              <span className=" mt-8 flex justify-center">
                <Cross />
              </span>
            ) : piece5 == "circle" ? (
              <span className=" mt-4 flex justify-center">
                <Circle />
              </span>
            ) : (
              <span>.</span>
            )}
          </div>
          <div
            id="6"
            onClick={client}
            className="h-24   border-b-2 border-yellow-300 text-white"
          >
            {piece6 == "cross" ? (
              <span className=" mt-8 flex justify-center">
                <Cross />
              </span>
            ) : piece6 == "circle" ? (
              <span className=" mt-4 flex justify-center">
                <Circle />
              </span>
            ) : (
              <span>.</span>
            )}
          </div>

          <div
            id="7"
            onClick={client}
            className="h-24  border-r-2  border-yellow-300 text-white"
          >
            {piece7 == "cross" ? (
              <span className=" mt-8 flex justify-center">
                <Cross />
              </span>
            ) : piece7 == "circle" ? (
              <span className=" mt-4 flex justify-center">
                <Circle />
              </span>
            ) : (
              <span>.</span>
            )}
          </div>
          <div
            id="8"
            onClick={client}
            className="h-24  border-r-2  border-yellow-300 text-white"
          >
            {piece8 == "cross" ? (
              <span className=" mt-8 flex justify-center">
                <Cross />
              </span>
            ) : piece8 == "circle" ? (
              <span className=" mt-4 flex justify-center">
                <Circle />
              </span>
            ) : (
              <span>.</span>
            )}
          </div>
          <div
            id="9"
            onClick={client}
            className="h-24    border-yellow-300 text-white"
          >
            {piece9 == "cross" ? (
              <span className=" mt-8 flex justify-center">
                <Cross />
              </span>
            ) : piece9 == "circle" ? (
              <span className=" mt-4 flex justify-center">
                <Circle />
              </span>
            ) : (
              <span>.</span>
            )}
          </div>
        </div>
        <div className="w-[92%] rounded-lg absolute bottom-[18px] left-4 ">
          <Logbutton dd={"Submit"} />
        </div>
      </div>
    </div>
  );
}

export default Game