import React, { useState, useEffect } from "react";

function App(props) {
  const [count, setCount] = useState(0);
  const testCount=useTest(count)
  console.log(testCount)
  useEffect(() => {
    document.title = `You clicked ${count} time`;
  });
  return (
    <div>
      <p>你点击了{count}次</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点击
      </button>
    </div>
  );
}
function useTest(count){
  const [doubleCount,setDoubleCount]=useState(count)
  useEffect(()=>{
    console.log(12312)
  })
  return doubleCount
}
export default App;
