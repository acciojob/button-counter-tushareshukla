
import React from "react";
import './../styles/App.css';

const clickCounter = () =>{
  const [count, setCounts] = useState(0)
  const handleClick = () =>{
    setCounts = count+1
  }
}

const App = () => {
  return (
    <div>
      The button clicked {count} time{count!== 0 && 's'}
      <button onClick ={handleClick}></button>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
