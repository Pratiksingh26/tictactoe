import './App.css';
import "./index.css"
import SquareComponent from './SquareComponent';
import React, { useEffect } from 'react';
import { useState } from 'react';


const initState = ["","","","","","","","",""]

function App() {

  const [GameState, setGameState] = useState(initState)
  const [isXChance,setisXChance] = useState(false)

  const onSqaureClicked = (index) => {
    let strings = Array.from(GameState)
    strings[index] = isXChance?"X":"O"
    setGameState(strings)
    setisXChance(!isXChance)
  }

  useEffect(() => {
    let winner = CheckWinner()

    if(winner){
    alert(`Ta Da! ${winner} wins the game`)
    setGameState(initState)
    }
    
  },[GameState])

   
  const CheckWinner = () => {
     const Lines = [
       [0,1,2],
       [3,4,5],
       [6,7,8],
       [0,3,6],
       [1,4,7],
       [2,5,8],
       [2,4,6],
       [0,4,8]
     ];

     for(let i = 0; i<Lines.length; i++){
       const[a,b,c] = Lines[i]
       if (GameState[a] && GameState[a] === GameState[b] && GameState[a] === GameState[c]) {
        return GameState[a];
      }
    }
    return null;
     }


  return (
    <div className="app-header">
     <p className="text-header">Tic-Tac-Toe</p>


     <div className='row jc-centre'>
       <SquareComponent onClick ={() => onSqaureClicked(0)} className="b-bottom-right" state={GameState[0]} />
       <SquareComponent onClick ={() => onSqaureClicked(1)} className="b-bottom-right" state={GameState[1]}/>
       <SquareComponent onClick ={() => onSqaureClicked(2)} className="b-bottom" state={GameState[2]}/>
       </div>


     <div  className='row jc-centre'>
     <SquareComponent onClick ={() => onSqaureClicked(3)} className="b-bottom-right" state={GameState[3]}/>
     <SquareComponent onClick ={() => onSqaureClicked(4)} className="b-bottom-right" state={GameState[4]}/>
     <SquareComponent onClick ={() => onSqaureClicked(5)} className="b-bottom" state={GameState[5]}/>
       </div>


     <div  className='row jc-centre'>
     <SquareComponent onClick ={() => onSqaureClicked(6)}  className="b-right" state={GameState[6]}/>
     <SquareComponent onClick ={() => onSqaureClicked(7)} className="b-right" state={GameState[7]}/>
     <SquareComponent onClick ={() => onSqaureClicked(8)} state={GameState[8]}/>
       </div>
  
     <button className='btn' onClick={() => setGameState(initState)}>New Game</button>

     <p style={{color:"white",fontWeight:'bolder'}}>Pratik's Challenge</p>

    </div>
  );
}

export default App;
