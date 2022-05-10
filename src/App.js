/** @jsxImportSource @emotion/react */

import './App.css';
import { css } from '@emotion/react';
import randomColor from 'randomcolor';
import { useState } from 'react';

const headerStyles = css`
  font-weight: bold;
  font-size: 40px;
`;

const colorBoxStyles = (color, height, width) => css`
  height: ${height}px;
  width: ${width}px;
  margin: 0 auto;
  background-color: ${color};
  color: #000000;
  font-weight: bold;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1s;
`;
const buttonStyles = css`
  display: flex;
  margin: 0 auto;
`;
const labelDivStyles = css`
  display: grid;
  /* text-align: center; */
  justify-content: center;
`;

const separateInputStyles = css`
  display: flex;
  /* flex-direction: row; */
  justify-content: space-evenly;
`;

function App() {
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');
  const [color, setColor] = useState(
    randomColor({ hue: hue, luminosity: luminosity }),
  );
  const [height, setHeight] = useState('300px');
  const [width, setWidth] = useState('300px');
  return (
    <div className="App">
      <div css={headerStyles}>React Random Color Generator!</div>
      <div>
        <br />
        <div className="colorBox" css={colorBoxStyles(color, height, width)}>
          Generated Color: {color}
        </div>
        <br />
        <button
          css={buttonStyles}
          onClick={() =>
            setColor(randomColor({ hue: hue, luminosity: luminosity }))
          }
        >
          Generate
        </button>
      </div>
      <br />
      <div>
        <div css={separateInputStyles}>
          <div>
            <label css={labelDivStyles}>
              Choose a hue:
              <input
                onChange={(event) => {
                  setColor(
                    randomColor({
                      hue: event.currentTarget.value,
                      luminosity: luminosity,
                    }),
                  );
                  setHue(event.currentTarget.value);
                }}
              />
            </label>
          </div>
          <div>
            <label css={labelDivStyles}>
              Choose a luminosity:
              <input
                onChange={(event) => {
                  setColor(
                    randomColor({
                      hue: hue,
                      luminosity: event.currentTarget.value,
                    }),
                  );
                  setLuminosity(event.currentTarget.value);
                }}
              />
            </label>
          </div>
        </div>
        <br />
        <br />
        <div css={separateInputStyles}>
          <div>
            <label css={labelDivStyles}>
              Height of color box (in pixels):
              <input
                onChange={(event) => setHeight(event.currentTarget.value)}
              />
            </label>
          </div>
          <div>
            <label css={labelDivStyles}>
              Width of color box (in pixels):
              <input
                onChange={(event) => setWidth(event.currentTarget.value)}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
