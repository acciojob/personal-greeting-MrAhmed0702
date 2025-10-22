
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("")
  return (
    <div>
        {/* Do not remove the main div */}
      <p>Enter your name:</p>
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
          {name ? <p>Hello {name}</p> : null}
    </div>
  )
}

export default App
