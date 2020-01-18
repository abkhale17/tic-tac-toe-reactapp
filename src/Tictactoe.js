import React, { useState } from 'react'
import Square from './Square'
import './index.css';

function Tictactoe(){
    const [squares,setsquares]=useState(Array(9).fill(null))
    const [nextIsX,setNextIsX]=useState(true)  
    const [butnDisable,setbutnDisable]=useState(Array(9).fill(false))
    const [notification, setnotification] = useState('Good Luck')


    function handleClick(id){
        const modifiedSqrs= squares.map((sqr,index)=>{
          if (id === index){
            setNextIsX( !nextIsX )
            return status
          }
          return sqr
        })

        const modifiedDisabilityBtn = butnDisable.map((btn,index)=>{
          if (id === index){
            return true
          }
          return btn
        })

        setsquares(modifiedSqrs)
        setbutnDisable(modifiedDisabilityBtn)

        let result = gameResult(modifiedSqrs)
        if (result){
          setnotification(`  ${result}     WON `)
        		setbutnDisable(Array(9).fill(true))
        }
    }

    function playAgain(){
        setsquares(Array(9).fill(null))
        	setNextIsX(true)
        	setbutnDisable(Array(9).fill(false))
        setnotification('Good Luck')
    }

    function gameResult(squares){
        const winningCombinations = [
                                        [0,1,2],[3,4,5],
                                        [6,7,8],[0,3,6],
                                        [1,4,7],[2,5,8],
                                        [0,4,8],[2,4,6]
                                    ]

        for (var i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        if(!squares.includes(null)){
            setnotification('Draw !')
        }

        return null
    }




    let status = nextIsX ? 'X':'O'

    return (
    <div className="tic-tac-toe-Desktop tic-tac-toe-Mob">
        <div className="notify">{notification}</div>
        <div className="status">next player is   {status}</div>
        <div className="board-row">
            <Square 
                squares={squares} 
                id={0} 
                handleClick={handleClick} 
                butnDisable={butnDisable}
            />
            <Square 
                squares={squares} 
                id={1} 
                handleClick={handleClick} 
                butnDisable={butnDisable}
            />
            <Square 
                squares={squares} 
                id={2} 
                handleClick={handleClick} 
                butnDisable={butnDisable}
            />
        </div>
        <div className="board-row">
            <Square 
                squares={squares} 
                id={3} 
                handleClick={handleClick} 
                butnDisable={butnDisable}
            />
            <Square 
                squares={squares} 
                id={4} 
                handleClick={handleClick} 
                butnDisable={butnDisable}
            />
            <Square 
                squares={squares} 
                id={5} 
                handleClick={handleClick} 
                butnDisable={butnDisable}
            />
        </div>
        <div className="board-row">
            <Square 
                squares={squares} 
                id={6} 
                handleClick={handleClick} 
                butnDisable={butnDisable}
            />
            <Square 
                squares={squares} 
                id={7} 
                handleClick={handleClick}
                 butnDisable={butnDisable}
                />
            <Square 
                squares={squares} 
                id={8} 
                handleClick={handleClick} 
                butnDisable={butnDisable}
            />
        </div>
        <button className="playagain" onClick={playAgain}>play again</button>

    </div>
    )

}

export default Tictactoe
