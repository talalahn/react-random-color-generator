import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState(randomColor);
  return (
    <div
      className="App"
      style={{
        fontWeight: 'bold',
        fontSize: '40px',
      }}
    >
      React Random Color Generator!
      <div>
        <br />
        <div
          style={{
            height: '200px',
            backgroundColor: color,
            color: 'black',
            fontWeight: 'bold',
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Generated Color: {color}
        </div>
        <br />
        <button onClick={() => setColor(randomColor())}>Generate</button>
      </div>
    </div>
  );
}

export default App;
