import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("useEffect called");
    // run useEffect when the count changes
  }, [count]);
  
  useEffect(()=>{
    document.title = text;
  }, [text]);

  // setTimeout to reset count variable after 5 seconds
  useEffect(()=>{
    setTimeout(()=>setCount(0), 5000);
  }, [])

  console.log("Component rendering");

  return (
    <>
    <button onClick={()=> setCount( (count) => count + 1)}>
      I've been clicked {count} times
    </button>
    <input 
    type="text"
    placeholder="Type away... "
    value={text}
    onChange={(e) => setText (e.target.value) }/>
    </>)
}

export default App;
