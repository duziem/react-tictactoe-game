import React, { useEffect, useState } from 'react'

function Square({ curLetter, updateCurLetter, xList, updateXList, yList, updateYList, x, y, winner, reset, setReset }) {
    const [squareVal, setSquareVal]= useState('');

    const handleClick= ()=>{
        if(winner){
            return;
        }else{
            let letter= '';
            letter= curLetter === 'x' ? 'y' : 'x';
            updateCurLetter(letter);
            letter === 'x' ? updateXList([...xList, {position: x+y, val: letter}]) : updateYList([...yList, {position: x+y, val: letter}])
            setSquareVal(letter); // set the value of the square
        }
    }

    useEffect(()=>{
        if(reset){
            setSquareVal('')
            setReset(false);
        }
    }, [reset])   


  return (
    <div className='square' onClick={handleClick}>{squareVal.toUpperCase()}</div>
  )
}

export default Square