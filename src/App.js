import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState(randomColor);
  const [hue, setHue] = useState(randomColor);
  const [luminosity, setLuminosity] = useState(randomColor.luminosity);

  return (
    <div
      className="App"
      style={{
        fontWeight: 'bold',
      }}
    >
      <div
        style={{
          fontSize: '40px',
        }}
      >
        React Random Color Generator!
      </div>
      <div>
        <br />
        <div
          style={{
            height: '200px',
            backgroundColor: randomColor({ hue: hue, luminosity: luminosity }),
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
        <button
          style={{
            display: 'block',
            margin: 'auto',
          }}
          onClick={() => setColor(randomColor())}
        >
          Generate
        </button>
      </div>
      <br />
      <br />
      <div
        style={{
          display: 'grid',
          justifyContent: 'center',
        }}
      >
        Choose a hue
        <input onChange={(event) => setHue(event.currentTarget.value)} />
        <br />
        <br />
        Choose a luminosity
        <input onChange={(event) => setLuminosity(event.currentTarget.value)} />
      </div>
    </div>
  );
}
console.log(randomColor);

export default App;
