import "./Tic_Tac_Toe.css";
import {React,useState} from "react";
export const Table = () =>{
    const [turn, setTurn] = useState('X');
    const [Gamewinner, setWinner] = useState();
    const [cells,setCells] = useState(Array(9).fill(''));
    
    
    const handleClick = (num) => {
        if(cells[num] !== '' ){
            alert("already selected");
            return;
            }
        let squares = [...cells];
        if(turn === 'X'){
        squares[num] = 'X'
        setTurn('O')
        }
    else{
        squares[num] = 'O';
    setTurn('X')
    }
    setCells(squares);
    winner(squares);
        };

        const winner = (squares) => {
            let combinations ={
            cross: [
            [0,1,2],
            [3,4,5],
            [6,7,8]
            ],
            down: [
            [0,3,6],
            [1,4,7],
            [2,5,8]
            ],
            diagonal:[
            [0,4,8],
            [2,4,6]
            ]
            };
            
            for(let combination in combinations){
            combinations[combination].forEach((pattern) => {
            if(squares[pattern[0]] === squares[pattern[1]]  &&
             squares[pattern[1]] === squares[pattern[2]] )
            {
            setWinner(squares[pattern[0]])
           
            }
            })
            
            }
        }
        const Cell = ({num}) =>{
            return <td onClick = { () => handleClick(num) }  >{cells[num]}</td>;
           
           }
    return(
        <>
    <table>
       
        <tr>
        <Cell num={0}></Cell>
        <Cell num={1}></Cell>
        <Cell num={2}></Cell>
        </tr>
        <tr>
        <Cell num={3}></Cell>
        <Cell num={4}></Cell>
        <Cell num={5}></Cell>
        </tr>
        <tr>
        <Cell num={6}></Cell>
        <Cell num={7}></Cell>
        <Cell num={8}></Cell>
        </tr>
    </table>
{Gamewinner && (
    <>The Game winner is {Gamewinner} </>
)}
  
  </>
    )

}