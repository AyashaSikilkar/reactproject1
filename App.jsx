
import { useState } from "react"


function App  () {

   let [counter,setCounter]=useState(15)

  //let counter=15
const addval =()=> {
  if(counter<20){
setCounter(counter + 1);
  }
  if(counter>20){
    setCounter(20)
  }
 
 
};

const removeval=()=>{
  if(counter>0){
setCounter(counter - 1)
  }
  if(counter < 0) {
    setCounter(counter,0)
  }
 
}
  return (
    <>
      <h1>Chai aur react </h1>
      <h3>Couter value{counter}</h3>
      <br />
      <button onClick={addval}> Add Value </button>
      <button onClick={removeval}>Remove value</button>
    </>
  );
}

export default App
