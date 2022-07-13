import React, { useState, useEffect, useCallback } from 'react'
import "./App.css";
import Square from "./components/Square";

function checkForWins(list, winScenarios){
  let winList;

 for(let i= 0; i< winScenarios.length; i++){
    winList= [];
    const scenario= winScenarios[i];
  for(let j=0; j< list.length; j++){
    if(scenario.includes(list[j].position)) winList.push(list[j])
  }
    if(winList.length === 3) {console.log(winList); return winList;}
 }

 return winList;
  
}

function App() {
  const [curLetter, setCurLetter]= useState('');
  const [xList, setXList]= useState([]);
  const [yList, setYList]= useState([]);
  const [winner, setWinner]= useState('');
  const [reset, setReset]= useState(false);
  const winScenarios= [
    ['00', '01', '02'], ['10', '11', '12'], ['20', '21', '22'],
    ['00', '10', '20'], ['01', '11', '21'], ['02', '12', '22'],
    ['00', '11', '22'], ['02', '11', '20']
  ]

const updateCurLetter= useCallback((val)=> setCurLetter(val))
const updateXList= useCallback((list)=> setXList(list))
const updateYList= useCallback((list)=> setYList(list))

useEffect(()=>{
  if(xList.length >= 3){
    const winList= checkForWins(xList, winScenarios);
    if(winList.length === 3) {
      setWinner(winList[0].val);
      return;
    }
  }
  if(yList.length >= 3){
    const winList= checkForWins(yList, winScenarios);
    if(winList.length === 3) {
      setWinner(winList[0].val);
      return;
    }
  }

}, [xList, yList])

useEffect(()=>{
  setWinner('');
  setXList([]);
  setYList([]);
  setCurLetter('');
}, [reset])

  return (
    <div className="App">
      <strong>Letter: </strong>{curLetter === 'x' ? 'y' : 'x'}<br/>
      <strong>Winner: </strong>{winner}<br/>
      <button className='btn' onClick={()=> setReset(true)}>Reset</button><br/><br/>
      <div className="row">
        <Square 
        x="0" 
        y="0" 
        curLetter= {curLetter}
        xList= {xList}
        yList= {yList}
        updateCurLetter= {updateCurLetter}
        updateXList= {updateXList}
        updateYList= {updateYList}
        winner= {winner}
        reset= {reset}
        setReset= {setReset}
        />
        <Square 
        x="0" 
        y="1" 
        curLetter= {curLetter}
        xList= {xList}
        yList= {yList}
        updateCurLetter= {updateCurLetter}
        updateXList= {updateXList}
        updateYList= {updateYList}
        winner= {winner}
        reset= {reset}
        setReset= {setReset}
        />
        <Square 
        x="0" 
        y="2" 
        curLetter= {curLetter}
        xList= {xList}
        yList= {yList}
        updateCurLetter= {updateCurLetter}
        updateXList= {updateXList}
        updateYList= {updateYList}
        winner= {winner}
        reset= {reset}
        setReset= {setReset}
        />
        
      </div>
      <div className="row">
      <Square 
        x="1" 
        y="0" 
        curLetter= {curLetter}
        xList= {xList}
        yList= {yList}
        updateCurLetter= {updateCurLetter}
        updateXList= {updateXList}
        updateYList= {updateYList}
        winner= {winner}
        reset= {reset}
        setReset= {setReset}
        />
      <Square 
        x="1" 
        y="1" 
        curLetter= {curLetter}
        xList= {xList}
        yList= {yList}
        updateCurLetter= {updateCurLetter}
        updateXList= {updateXList}
        updateYList= {updateYList}
        winner= {winner}
        reset= {reset}
        setReset= {setReset}
        />
      <Square 
        x="1" 
        y="2" 
        curLetter= {curLetter}
        xList= {xList}
        yList= {yList}
        updateCurLetter= {updateCurLetter}
        updateXList= {updateXList}
        updateYList= {updateYList}
        winner= {winner}
        reset= {reset}
        setReset= {setReset}
        />
      </div>
      <div className="row">
      <Square 
        x="2" 
        y="0" 
        curLetter= {curLetter}
        xList= {xList}
        yList= {yList}
        updateCurLetter= {updateCurLetter}
        updateXList= {updateXList}
        updateYList= {updateYList}
        winner= {winner}
        reset= {reset}
        setReset= {setReset}
        />
      <Square 
        x="2" 
        y="1" 
        curLetter= {curLetter}
        xList= {xList}
        yList= {yList}
        updateCurLetter= {updateCurLetter}
        updateXList= {updateXList}
        updateYList= {updateYList}
        winner= {winner}
        reset= {reset}
        setReset= {setReset}
        />
      <Square 
        x="2" 
        y="2" 
        curLetter= {curLetter}
        xList= {xList}
        yList= {yList}
        updateCurLetter= {updateCurLetter}
        updateXList= {updateXList}
        updateYList= {updateYList}
        winner= {winner}
        reset= {reset}
        setReset= {setReset}
        />
      </div>
    </div>
  );
}

export default App;
